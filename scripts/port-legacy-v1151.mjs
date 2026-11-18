import fs from 'node:fs';
import cp from 'node:child_process';
const main='origin/main';
const archive='origin/archive/dev-before-v1.12.0-reset';
const carry=[
 'src/components/dwains-dashboard-strategy-editor.ts',
 'src/components/dwains-layout-card.ts',
 'src/components/dwains-devices-card.ts'
];
const useMain=[
 'src/utils/area-entities.ts',
 'src/components/dwains-domain-entities-dialog.ts',
 'src/utils/header-status-domains.ts',
 'src/components/dwains-blueprint-dialog.ts',
 'src/components/dwains-replacement-manager-dialog.ts',
 'src/components/dwains-bottom-nav.ts',
 'src/types/strategy.ts',
 ...['en','de','es','fr','nl','ru','zh-Hans','zh-Hant'].map(l=>'src/i18n/locales/'+l+'.ts'),
];
const exec=(command,args)=>cp.execFileSync(command,args,{encoding:'utf8',maxBuffer:16*1024*1024}).trim();
const restore=(r,f)=>exec('git',['restore','--source='+r,'--staged','--worktree','--',f]);
for(const f of useMain) restore(main,f);
for(const f of carry) restore(archive,f);
const replacementsPath='src/utils/blueprint-replacements.ts';
let rep=fs.readFileSync(replacementsPath,'utf8');
if(!rep.includes("import { getDomainColor } from './icons';")) {
 rep=rep.replace("import { ddLang } from './localize';","import { ddLang } from './localize';\nimport { getDomainColor } from './icons';");
 fs.writeFileSync(replacementsPath,rep);
}
const testPath='tests/blueprint-repeat.test.ts';
let test=fs.readFileSync(testPath,'utf8');
test=test.replace('parsed.meta.name_de','parsed.meta.translations?.name?.de');
fs.writeFileSync(testPath,test);
const errors=[];
for(const args of [['--noEmit','--pretty','false'],['--noEmit','-p','tests','--pretty','false']]) {
 const res=cp.spawnSync('node_modules/.bin/tsc',args,{encoding:'utf8',maxBuffer:30*1024*1024});
 errors.push(...((res.stdout||'')+'\n'+(res.stderr||'')).split(/\r?\n/).filter(x=>x.includes('error TS')));
}
console.log('TYPE ERRORS',errors.length);
for(const line of errors) console.log(line);
if(errors.length>0) process.exit(1);
console.log('All TypeScript source and tests type-check.');
