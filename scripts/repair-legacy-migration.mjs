import fs from 'node:fs';
import cp from 'node:child_process';
const upstream = 'origin/main';
const archive = 'origin/archive/dev-before-v1.12.0-reset';
const three = [
 'src/components/dwains-dashboard-strategy-editor.ts',
 'src/components/dwains-devices-card.ts',
 'src/components/dwains-layout-card.ts'
];
function git(...args) {
 return cp.execFileSync('git',args,{encoding:'utf8',maxBuffer:20*1024*1024}).trim();
}
function existsAt(ref,path) {
 return cp.spawnSync('git',['cat-file','-e',ref+':'+path],{stdio:'ignore'}).status === 0;
}
function restore(ref,path) {
 git('restore','--source='+ref,'--staged','--worktree','--',path);
}
function typeCheck() {
 const lines = [];
 for (const args of [['--noEmit','--pretty','false'],['--noEmit','-p','tests','--pretty','false']]) {
  const run=cp.spawnSync('node_modules/.bin/tsc',args,{encoding:'utf8',maxBuffer:16*1024*1024});
  const out=(run.stdout||'')+'\n'+(run.stderr||'');
  lines.push(...out.split(/\r?\n/).filter(x=>/error TS\d+:/.test(x)));
  if(run.error) throw run.error;
 }
 const files = new Map();
 for (const l of lines) {
  const m=l.match(/^([^(]+)\(\d+,\d+\): error TS\d+:/);
  if(m) files.set(m[1],(files.get(m[1])||0)+1);
 }
 return {count:lines.length,files,lines};
}
const decisions=[];
for (const p of three) restore(archive,p);
let current=typeCheck();
console.log('INITIAL ERRORS:',current.count);
for(let pass=1;pass<=5 && current.count>0;pass++) {
 let improvement=0;
 const sorted=[...current.files].sort((a,b)=>b[1]-a[1]);
 console.log('PASS',pass,'AFFECTED FILES',JSON.stringify(sorted));
 for(const [path] of sorted) {
  if(!fs.existsSync(path)||(!existsAt(upstream,path)&&!existsAt(archive,path))) continue;
  const before=fs.readFileSync(path,'utf8');
  let accepted=false;
  for(const ref of [upstream,archive]) {
   if(!existsAt(ref,path)) continue;
   const other=git('show',ref+':'+path);
   if(other===before.trimEnd()) continue;
   restore(ref,path);
   const trial=typeCheck();
   console.log(' TRY',path,ref,'errors',current.count,'->',trial.count);
   if(trial.count<current.count) {
    decisions.push({path,source:ref,from:current.count,to:trial.count});
    current=trial;
    accepted=true;
    improvement++;
    break;
   }
   fs.writeFileSync(path,before);
   git('add','--',path);
  }
  if(accepted && current.count===0)break;
 }
 if(!improvement)break;
}
console.log('FINAL ERRORS',current.count,'DECISIONS',JSON.stringify(decisions));
console.log('REMAINING FILE ERRORS',JSON.stringify([...current.files]));
console.log('FIRST ERRORS\n'+current.lines.slice(0,90).join('\n'));
fs.mkdirSync('migration',{recursive:true});
const modified=git('diff','--name-only',upstream).split('\n').filter(Boolean);
const report = [
 '# Dwains Dashboard Next: archival migration audit (1.15.1)',
 '',
 'This is an automated migration attempt, not a guarantee of feature parity.',
 '',
 'Original release: dwainscheeren/dwains-dashboard-next@v1.15.1 (92624996).',
 'Previous customized code: archive/dev-before-v1.12.0-reset (aa3a0bc4).',
 '',
 '## File-level compatibility substitutions',
 ...decisions.map(d=>'- '+d.path+': '+d.source+' (type errors '+d.from+' to '+d.to+')'),
 '',
 '## Files differing from upstream at this check',
 ...modified.map(f=>'- '+f),
 '',
 '## TypeScript errors remaining',
 String(current.count),
 ...current.lines.slice(0,150).map(s=>'- '+s)
].join('\n');
fs.writeFileSync('migration/MIGRATION-AUDIT.md',report+'\n');
if(current.count>0)process.exit(1);
