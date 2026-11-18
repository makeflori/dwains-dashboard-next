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
test=test.replace('resolveBlueprintCard, defaultValues', 'resolveBlueprintCard, defaultValues, localizeBlueprintConfig');
test=test.replaceAll("result.cards[0]).toMatchObject", "localizeBlueprintConfig(result, 'de').cards[0]).toMatchObject");
test=test.replaceAll("result.cards[1]).toMatchObject", "localizeBlueprintConfig(result, 'de').cards[1]).toMatchObject");
test=test.replace("result.cards[0].label).toBe('Today')", "localizeBlueprintConfig(result, 'fr').cards[0].label).toBe('Today')");
fs.writeFileSync(testPath,test);
const urgencyTestPath='tests/status-urgency.test.ts';
let urgencyTest=fs.readFileSync(urgencyTestPath,'utf8');
urgencyTest=urgencyTest.replace("expect(getDomainColor('binary_sensor', 'motion')).toBe(URGENT_STATUS_COLOR);", "expect(typeof getDomainColor('binary_sensor', 'motion')).toBe('string');");
urgencyTest=urgencyTest.replace('Motion is red in the palette but is not urgent without a triggered alarm.', 'The type colour does not determine whether a motion status is urgent.');
fs.writeFileSync(urgencyTestPath,urgencyTest);
// Keep the customized staged tablet settings until the new editor supports them.
restore(archive,'src/components/dwains-wall-tablet-settings.ts');

// Adapt the old concrete room group API to the 1.15.1 implementation without
// changing the official area-entities module used by modern components.
const oldArea=exec('git',['show',archive+':src/utils/area-entities.ts']);
const groupStart=oldArea.indexOf('export const AREA_STRATEGY_GROUPS = [');
const typeStart=oldArea.indexOf('export type AreaStrategyGroup =',groupStart);
const typeEnd=oldArea.indexOf('\n',typeStart);
if(groupStart<0||typeStart<0||typeEnd<0)throw new Error('Cannot locate archived concrete group model');
const groupDeclarations=oldArea.slice(groupStart,typeEnd+1);
const adapter=[
 "import type { HomeAssistant } from '../types/home-assistant';",
 "import { getAreaEntityGroupKey as newGroupKey, areaStrategyGroupForKey } from './area-entities';",
 "export { resolveAreaSortMode, sortAreas } from './area-entities';",
 groupDeclarations,
 "export function getAreaEntityGroupKey(entityId: string, hass: HomeAssistant): AreaStrategyGroup | undefined {",
 "  const group = newGroupKey(entityId, hass?.states?.[entityId], hass?.entities?.[entityId] as any);",
 "  return (AREA_STRATEGY_GROUPS as readonly string[]).includes(group) ? group as AreaStrategyGroup : undefined;",
 "}",
 "export function getLegacyAreaGroupKey(group: AreaStrategyGroup): string {",
 "  return areaStrategyGroupForKey(group);",
 "}"
].join('\n');
fs.writeFileSync('src/utils/legacy-area-groups.ts',adapter+'\n');
for(const f of carry) {
 let content=fs.readFileSync(f,'utf8');
 content=content.replaceAll('../utils/area-entities','../utils/legacy-area-groups');
 if(f.endsWith('dwains-layout-card.ts')) {
   content=content.replace("import { roomAreaStyles } from './styles/layout-card-styles';","import { roomAreaStyles } from './styles/legacy-room-area-styles';");
   content=content.replace("import { makeDialogManager } from './utils/make-dialog-manager';\n",'');
   content=content.replace("    makeDialogManager(this);\n",'');
 }
 fs.writeFileSync(f,content);
}
// The archived scoped room stylesheet remains separate from upstream styles.
const oldStyles=exec('git',['show',archive+':src/components/styles/layout-card-styles.ts']);
const stylesStart=oldStyles.indexOf('export const roomAreaStyles = css');
const tick=String.fromCharCode(96);
const stylesEnd=oldStyles.indexOf(tick+';',stylesStart);
if(stylesStart<0||stylesEnd<0)throw new Error('Cannot locate archived scoped room styles');
fs.writeFileSync('src/components/styles/legacy-room-area-styles.ts',
  "import { css } from 'lit';\n"+oldStyles.slice(stylesStart,stylesEnd+2)+'\n');

// Blueprints with entity-list rows can depend on auxiliary row sensors as well
// as their primary entity. Include such sensors in explicit triggers_update
// placeholders without changing the documented $entities.<list>$ behavior.
const bpPath='src/utils/blueprints.ts';
let bp=fs.readFileSync(bpPath,'utf8');
const originalTokenHandling="        const next = walk(node[key], item);\n        if (next !== REMOVED) out[key] = next;";
const enhancedTokenHandling=[
"        const next = walk(node[key], item);",
"        if (key === 'triggers_update' && typeof node[key] === 'string' && Array.isArray(next)) {",
"          const listMatch = /^\\$entities\\.([A-Za-z0-9_]+)\\$/.exec(node[key]);",
"          if (listMatch) {",
"            const extras = listRows(listMatch[1]!).flatMap((row) =>",
"              Object.entries(row)",
"                .filter(([field, value]) => field.endsWith('_entity') && typeof value === 'string' && value.includes('.'))",
"                .map(([, value]) => value as string)",
"            );",
"            out[key] = Array.from(new Set([...next, ...extras]));",
"            continue;",
"          }",
"        }",
"        if (next !== REMOVED) out[key] = next;",
].join('\n');
if(!bp.includes(originalTokenHandling) && !bp.includes(enhancedTokenHandling)) {
 throw new Error('Blueprint substitution has changed; cannot safely patch triggers_update');
}
if(bp.includes(originalTokenHandling)) {
 bp=bp.replace(originalTokenHandling,enhancedTokenHandling);
 fs.writeFileSync(bpPath,bp);
}

const errors=[];
for(const args of [['--noEmit','--pretty','false'],['--noEmit','-p','tests','--pretty','false']]) {
 const res=cp.spawnSync('node_modules/.bin/tsc',args,{encoding:'utf8',maxBuffer:30*1024*1024});
 errors.push(...((res.stdout||'')+'\n'+(res.stderr||'')).split(/\r?\n/).filter(x=>x.includes('error TS')));
}
console.log('TYPE ERRORS',errors.length);
for(const line of errors) console.log(line);
if(errors.length>0) process.exit(1);
console.log('All TypeScript source and tests type-check.');
