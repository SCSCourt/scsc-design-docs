import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Ca as Gv,Co as _2,D as CE,Do as ae,Es as sD,Fr as kn,Go as g,Hs as y_,Jr as oe,Ki as ye,La as L,Lo as d_,Ma as JT,Ms as uc,Na as Jb,No as cc,Ps as ut,Rs as w_,So as Zv,Ss as rD,Uo as fa,Xa as Pv,Yo as iD,Zn as bA,Zo as i_,Zt as SE,_s as o_,bo as Y_,c as $r,cs as lc,ds as nD,go as Xa,ha as Eg,in as Ta,ka as Ig,ks as t_,ot as Ie$1,pi as sn,po as X,ps as n_,qo as ge$1,ra as Af,ta as $f,tr as d5e,va as G_,vn as Vn,wt as ME,xr as gxe,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var he=[`results`];var pe=(n,t)=>t.id;var me=(n,t)=>t.value;var fe=(n,t)=>t.key;function be(n,t){if(n&1&&(Ga(0,`option`,8),G_(1),Lf()),n&2){let e=t.$implicit,i=y_();Pv(`value`,e.id)(`selected`,i.filter()===e.id),Jb(),rD(` `,e.label,` (`,e.icons.length,`) `)}}function ve(n,t){if(n&1){let e=d_();Ga(0,`label`,11)(1,`input`,19),lc(`change`,function(){let o=Eg(e).$implicit,r=y_();return Ig(r.size.set(o.value))}),Lf(),G_(2),Lf()}if(n&2){let e=t.$implicit,i=y_();Jb(),Pv(`value`,e.value)(`checked`,i.size()===e.value),Jb(),$f(` `,e.label,` `)}}function xe(n,t){if(n&1){let e=d_();Ga(0,`label`,11)(1,`input`,20),lc(`change`,function(){let o=Eg(e).$implicit,r=y_();return Ig(r.copyAs.set(o.value))}),Lf(),G_(2),Lf()}if(n&2){let e=t.$implicit,i=y_();Jb(),Pv(`value`,e.value)(`checked`,i.copyAs()===e.value),Jb(),$f(` `,e.label,` `)}}function we(n,t){if(n&1&&G_(0),n&2){let e=y_();$f(` `,e.labels().loading,` `)}}function _e(n,t){if(n&1&&G_(0),n&2){let e=y_();$f(` `,e.labels().results(e.matchCount()),` `)}}function Ce(n,t){if(n&1&&(G_(0),Ga(1,`code`,21),G_(2),Lf()),n&2){let e=y_();$f(` `,e.labels().copied,`: `),Jb(2),nD(t)}}function Se(n,t){if(n&1&&(Ga(0,`span`,32),G_(1),Lf()),n&2){let e=y_().$implicit;Jb(),$f(` `,e.sub,` `)}}function Ie(n,t){n&1&&uc(0,`scsc-icon`,33)}function Ee(n,t){if(n&1){let e=d_();Ga(0,`div`,28)(1,`button`,29),lc(`focus`,function(){let o=Eg(e).$index,r=y_().$index,d=y_().$implicit,f=y_();return Ig(f.setActive(d.id,r*f.cols()+o))})(`keydown`,function(o){let r=Eg(e).$index,d=y_().$index,f=y_().$implicit,E=y_();return Ig(E.onKey(o,f,d*E.cols()+r))})(`click`,function(){let o=Eg(e).$implicit,r=y_(2).$implicit,d=y_();return Ig(d.copy(o,r.id))}),uc(2,`scsc-icon`,30),Ga(3,`span`,31),G_(4),Lf(),JT(5,Se,2,1,`span`,32),JT(6,Ie,1,0,`scsc-icon`,33),Lf()()}if(n&2){let e=t.$implicit,i=t.$index,o=y_().$index,r=y_().$implicit,d=y_();Jb(),Pv(`tabindex`,d.isActive(r.id,o*d.cols()+i)?0:-1),cc(`data-index`,o*d.cols()+i),Jb(),Pv(`name`,e.icon)(`size`,d.size()),Jb(2),$f(` `,e.label,` `),Jb(),t_(e.sub?5:-1),Jb(),t_(d.copiedKey()===r.id+`/`+e.key?6:-1)}}function ke(n,t){if(n&1&&(Ga(0,`div`,27),o_(1,Ee,7,7,`div`,28,fe),Lf()),n&2){let e=t.$implicit,i=t.$index,o=y_(2);Zv(`grid-template-columns`,`repeat(`+o.cols()+`, minmax(0, 1fr))`),cc(`aria-rowindex`,i+1),Jb(),i_(e)}}function Ae(n,t){if(n&1&&G_(0),n&2){let e=y_(2).$implicit,i=y_();rD(` Show `,i.nextBatch(e),` more (`,e.items.length-i.shown(e),` not shown) `)}}function Ge(n,t){if(n&1&&G_(0),n&2){let e=y_(2).$implicit;rD(` Show all `,e.items.length,` `,e.label,` `)}}function Te(n,t){if(n&1){let e=d_();Ga(0,`div`)(1,`scsc-button`,34),lc(`click`,function(){Eg(e);let o=y_().$implicit,r=y_();return Ig(r.showMore(o))}),JT(2,Ae,1,2)(3,Ge,1,2),Lf()()}if(n&2){let e=y_().$implicit;Jb(2),t_(e.id===`lucide`?2:3)}}function Le(n,t){if(n&1&&(Ga(0,`section`,18)(1,`div`)(2,`scsc-heading`,22),G_(3),Ga(4,`span`,23),G_(5),Lf()(),Ga(6,`p`,24),G_(7),Lf()(),Ga(8,`div`,25),o_(9,ke,3,3,`div`,26,n_),Lf(),JT(11,Te,4,1,`div`),Lf()),n&2){let e=t.$implicit,i=y_();cc(`aria-labelledby`,i.headingId(e.id)),Jb(2),Pv(`level`,4)(`id`,i.headingId(e.id)),Jb(),$f(` `,e.label,` `),Jb(2),$f(`· `,e.items.length),Jb(2),nD(e.description),Jb(),cc(`aria-labelledby`,i.headingId(e.id))(`aria-describedby`,i.hintId)(`aria-rowcount`,i.rowCount(e))(`data-gallery`,e.id),Jb(),i_(i.rows(e)),Jb(2),t_(e.items.length>i.shown(e)?11:-1)}}function De(n,t){n&1&&(G_(0,` Try `),Ga(1,`strong`),G_(2,`All Lucide icons`),Lf(),G_(3,` under Show to search the full set. `))}function Fe(n,t){if(n&1&&(Ga(0,`p`,24),G_(1),JT(2,De,4,0),Lf()),n&2){let e=y_(2);Jb(),$f(` `,e.labels().noResults,`. `),Jb(),t_(e.filter()!==`lucide`?2:-1)}}function Me(n,t){if(n&1&&JT(0,Fe,3,2,`p`,24),n&2){let e=y_();t_(e.loadingCatalog()?-1:0)}}var O=96;var $e=112;var ge=8;var j=new Map;for(let[n,t]of Object.entries(SE))j.set(t,[...j.get(t)??[],n]);var Ne=new Map(d5e.flatMap(n=>n.icons.map(t=>[t.alias,t.keywords])));var Be=d5e.map(n=>({id:n.id,label:n.label,description:n.description,items:n.icons.map(t=>({key:t.alias,label:t.alias,sub:t.icon,icon:t.alias,alias:t.alias,name:t.icon,terms:[t.alias,t.icon,...t.keywords].join(` `).toLowerCase()}))}));var Qe={slug:`icon-gallery`,name:`Icon gallery`,classes:[],category:`Primitives`,summary:"Every SCSC icon alias, grouped by family, and the complete Lucide set. Search by name, alias or keyword, preview each size, and copy the alias, the Lucide name, a `<scsc-icon>` snippet or the import line.",whenToUse:["Pick the **alias** first (`action.delete`, `court.hearing`). Aliases carry the meaning, so the glyph can change in one place without touching your templates (see the Icon page).",`Reach into the full Lucide set (every icon in the installed lucide-angular, 1,700+) only when no alias fits, and register that icon yourself.`,"Custom SCSC court glyphs (`scsc-courthouse`, `scsc-juror-box`, `scsc-filing-stamp`, `scsc-docket-book`, `scsc-bailiff-badge`, `scsc-seal-mark`) are built into `scsc-icon`; copy their alias.","The Lucide list is generated from the installed package by `node scripts/gen-icon-catalog.mjs`, so it always matches what an app can register. Search terms include the older names Lucide still accepts (`alert-triangle` finds `triangle-alert`)."],setup:`// The gallery previews the whole Lucide set, so the docs site registers all of it.
// Apps register the curated set (or only what they use):
import { provideScscIcons, SCSC_ICONS } from '@scscourt/design';

export const appConfig: ApplicationConfig = {
  providers: [provideScscIcons(SCSC_ICONS)],
};`,demos:[{id:`icon-gallery-browse`,title:`Browse and copy`,description:`Search, filter by family, switch the preview size and choose what a click copies. Each family starts as one row (search, pick the family or press "Show all" for the rest); the full Lucide set loads on demand, 96 icons at a time.`,component:class n{doc=g(X);injector=g(ae);announcer=g(Ie$1);labels=g(oe);resultsEl=_2.required(`results`);families=d5e;aliasCount=Object.keys(SE).length;hintId=`icon-gallery-hint`;sizes=[{value:`xs`,label:`xs · 14px`},{value:`sm`,label:`sm · 16px`},{value:`md`,label:`md · 20px`},{value:`lg`,label:`lg · 24px`}];formats=[{value:`alias`,label:`Alias`},{value:`name`,label:`Lucide name`},{value:`snippet`,label:`<scsc-icon> snippet`},{value:`import`,label:`Import line`}];query=q(``);filter=q(`all`);size=q(`md`);copyAs=q(`alias`);cols=q(6);catalog=q(null);loadingCatalog=ut(()=>this.filter()===`lucide`&&!this.catalog());copiedKey=q(null);copiedText=q(null);limits=q({});active=q({});copiedTimer;catalogVersion=``;lucideGroup=ut(()=>{let t=this.catalog();return t?{id:`lucide`,label:`All Lucide icons`,description:`Every icon in the installed lucide-angular ${this.catalogVersion}. Use an alias where one exists.`,items:t.map(([e,i=[]])=>{let o=j.get(e)??[],r=o.flatMap(d=>Ne.get(d)??[]);return{key:e,label:e,sub:o.join(`, `),icon:e,alias:o[0]??null,name:e,terms:[e,...i,...o,...r].join(` `).toLowerCase()}})}:null});groups=ut(()=>{let t=this.filter(),e=t===`lucide`?[this.lucideGroup()].filter(o=>!!o):Be.filter(o=>t===`all`||o.id===t),i=this.query().trim().toLowerCase().split(/\s+/).filter(Boolean);return e.map(o=>s(r({},o),{items:i.length?o.items.filter(r=>i.every(d=>r.terms.includes(d))):o.items})).filter(o=>o.items.length>0)});overview=ut(()=>this.filter()===`all`&&!this.query().trim());matchCount=ut(()=>this.groups().reduce((t,e)=>t+e.items.length,0));formatLabel=ut(()=>this.formats.find(t=>t.value===this.copyAs()).label.toLowerCase());constructor(){let t=g(ge$1);fa(()=>{this.filter()===`lucide`&&!L(this.catalog)&&import(`./chunk-DpiQ99SH.js`).then(i=>{this.catalogVersion=i.LUCIDE_CATALOG_VERSION,this.catalog.set(i.LUCIDE_CATALOG)})});let e=!0;fa(()=>{this.query(),this.filter();let i=this.matchCount(),o=this.loadingCatalog();L(()=>{this.limits.set({}),this.active.set({}),e?e=!1:o||this.announcer.announce(this.labels().results(i))})}),Xa(()=>{let i=this.doc.defaultView;if(!i||!(`ResizeObserver`in i))return;let o=new i.ResizeObserver(([r])=>{let d=r.contentRect.width;this.cols.set(Math.max(2,Math.floor((d+ge)/($e+ge))))});o.observe(this.resultsEl().nativeElement),t.onDestroy(()=>o.disconnect())}),t.onDestroy(()=>clearTimeout(this.copiedTimer))}setFilter(t){this.filter.set(t.target.value)}headingId(t){return`icon-gallery-${t}`}shown(t){let e=this.limits()[t.id];return e!==void 0?e:t.id===`lucide`?O:this.overview()?this.cols():t.items.length}nextBatch(t){return Math.min(O,t.items.length-this.shown(t))}rows(t){let e=t.items.slice(0,this.shown(t)),i=this.cols(),o=[];for(let r=0;r<e.length;r+=i)o.push(e.slice(r,r+i));return o}rowCount(t){return Math.ceil(t.items.length/this.cols())}isActive(t,e){return(this.active()[t]??0)===e}setActive(t,e){this.active()[t]!==e&&this.active.update(i=>s(r({},i),{[t]:e}))}onKey(t,e,i){let o=this.cols(),r=Math.min(e.items.length,this.shown(e)),d=Math.ceil(r/o),f=gxe(t,{row:Math.floor(i/o),col:i%o},{rows:d,cols:o},3);if(!f)return;t.preventDefault();let E=Math.min(r-1,f.row*o+f.col);this.setActive(e.id,E),this.focusTile(e.id,E)}showMore(t){let e=this.shown(t),i=t.id===`lucide`?Math.min(t.items.length,e+O):t.items.length;this.limits.update(o=>s(r({},o),{[t.id]:i})),this.announcer.announce(`Showing ${i} of ${t.items.length} icons`),i>=t.items.length&&(this.setActive(t.id,e),Xa(()=>this.focusTile(t.id,e),{injector:this.injector}))}async copy(t,e){let i=this.textFor(t);try{await this.doc.defaultView?.navigator?.clipboard?.writeText(i)}catch{}this.copiedKey.set(`${e}/${t.key}`),this.copiedText.set(i),this.announcer.announce(`${this.labels().copied}: ${i}`,`polite`,0),clearTimeout(this.copiedTimer),this.copiedTimer=setTimeout(()=>this.copiedKey.set(null),2e3)}textFor(t){let e=t.alias??t.name;switch(this.copyAs()){case`alias`:return e;case`name`:return t.name;case`snippet`:return`<scsc-icon name="${e}" />`;case`import`:return t.name.startsWith(`scsc-`)?`import { ${ME(t.name)} } from '@scscourt/design';`:`import { ${ME(t.name)} } from 'lucide-angular';`}}focusTile(t,e){this.resultsEl().nativeElement.querySelector(`[data-gallery="${t}"] [data-index="${e}"]`)?.focus()}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-icon-gallery-browse-demo`]],viewQuery:function(e,i){e&1&&Gv(i.resultsEl,he,5),e&2&&w_()},decls:32,vars:10,consts:[[`results`,``],[1,`flex`,`flex-col`,`gap-4`],[1,`grid`,`gap-4`,`md:grid-cols-2`],[`label`,`Search icons`,`hint`,`Name, alias or keyword, e.g. hearing, trash`],[`placeholder`,`Search icons`,3,`valueChange`,`value`],[`label`,`Show`,`for`,`icon-gallery-filter`],[`id`,`icon-gallery-filter`,`scsc-select`,``,3,`change`],[`value`,`all`,3,`selected`],[3,`value`,`selected`],[`value`,`lucide`,3,`selected`],[`legend`,`Preview size`,`inline`,``],[1,`flex`,`min-h-6`,`items-center`,`gap-2`,`text-sm`],[`legend`,`Copy as`,`inline`,``],[1,`flex`,`flex-wrap`,`items-baseline`,`justify-between`,`gap-2`,`text-sm`],[1,`text-base-content/70`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`,3,`id`],[1,`flex`,`flex-col`,`gap-8`],[1,`flex`,`flex-col`,`gap-3`],[`type`,`radio`,`scsc-radio`,``,`name`,`icon-gallery-size`,3,`change`,`value`,`checked`],[`type`,`radio`,`scsc-radio`,``,`name`,`icon-gallery-copy`,3,`change`,`value`,`checked`],[1,`font-mono`],[3,`level`,`id`],[1,`font-normal`,`text-base-content/70`],[1,`text-sm`,`text-base-content/70`],[`role`,`grid`,1,`flex`,`flex-col`,`gap-2`],[`role`,`row`,1,`grid`,`gap-2`,3,`grid-template-columns`],[`role`,`row`,1,`grid`,`gap-2`],[`role`,`gridcell`,1,`min-w-0`],[`type`,`button`,1,`relative`,`flex`,`h-full`,`min-h-24`,`w-full`,`flex-col`,`items-center`,`justify-start`,`gap-2`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-2`,`py-3`,`text-center`,`hover:border-primary`,`hover:bg-base-200`,3,`focus`,`keydown`,`click`,`tabindex`],[3,`name`,`size`],[1,`block`,`w-full`,`break-words`,`font-mono`,`text-xs`,`leading-tight`],[1,`block`,`w-full`,`break-words`,`text-xs`,`leading-tight`,`text-base-content/70`],[`name`,`action.check`,`size`,`xs`,1,`absolute`,`right-1.5`,`top-1.5`,`text-success`],[`variant`,`ghost`,`outline`,``,`size`,`sm`,3,`click`]],template:function(e,i){if(e&1){let o=d_();Ga(0,`div`,1)(1,`div`,2)(2,`scsc-form-field`,3)(3,`scsc-search-input`,4),sD(`valueChange`,function(d){return Eg(o),Y_(i.query,d)||(i.query=d),Ig(d)}),Lf()(),Ga(4,`scsc-form-field`,5)(5,`select`,6),lc(`change`,function(d){return i.setFilter(d)}),Ga(6,`option`,7),G_(7),Lf(),o_(8,be,2,4,`option`,8,pe),Ga(10,`option`,9),G_(11),Lf()()()(),Ga(12,`div`,2)(13,`scsc-fieldset`,10),o_(14,ve,3,3,`label`,11,me),Lf(),Ga(16,`scsc-fieldset`,12),o_(17,xe,3,3,`label`,11,me),Lf()(),Ga(19,`div`,13)(20,`p`,14),JT(21,we,1,1)(22,_e,1,1),Lf(),Ga(23,`p`,15),JT(24,Ce,3,2),Lf()(),Ga(25,`p`,16),G_(26),Lf(),Ga(27,`div`,17,0),o_(29,Le,12,11,`section`,18,pe,!1,Me,1,1),Lf()()}if(e&2){let o;Jb(3),iD(`value`,i.query),Jb(3),Pv(`selected`,i.filter()===`all`),Jb(),$f(` All SCSC aliases (`,i.aliasCount,`) `),Jb(),i_(i.families),Jb(2),Pv(`selected`,i.filter()===`lucide`),Jb(),$f(` All Lucide icons`,i.catalog()?` (`+i.catalog().length+`)`:``,` `),Jb(3),i_(i.sizes),Jb(3),i_(i.formats),Jb(4),t_(i.loadingCatalog()?21:22),Jb(3),t_((o=i.copiedText())?24:-1,o),Jb(),Pv(`id`,i.hintId),Jb(),$f(` Arrow keys move between icons, Home and End go to the start and end of a row. Enter copies the `,i.formatLabel(),`. `),Jb(3),i_(i.groups())}},dependencies:[sn,$r,Vn,kn,ye,bA,Ta,On],encapsulation:2})},source:{"icon-gallery-browse":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import {
  SCSC_GLYPH_PREFIX,
  SCSC_ICON_ALIASES,
  SCSC_ICON_FAMILIES,
  SCSC_LABELS,
  ScscAnnouncer,
  ScscButton,
  ScscFieldset,
  ScscFormField,
  ScscHeading,
  ScscIcon,
  ScscRadio,
  ScscSelect,
  ScscSearchInput,
  gridKeyTarget,
  lucideIconKey,
  type ScscIconFamilyId,
  type ScscIconName,
  type ScscSize,
} from '@scscourt/design';

type CopyFormat = 'alias' | 'name' | 'snippet' | 'import';
type Filter = 'all' | ScscIconFamilyId | 'lucide';
type Catalog = readonly (readonly [name: string, terms?: readonly string[]])[];

interface GalleryItem {
  /** Unique within its group. */
  key: string;
  /** What the tile shows first: the alias, or the Lucide name. */
  label: string;
  /** Second line: the glyph an alias resolves to, or the aliases that use a Lucide glyph. */
  sub: string;
  /** Passed to scsc-icon. */
  icon: string;
  alias: ScscIconName | null;
  /** Registered kebab name (\`trash-2\`, \`scsc-courthouse\`). */
  name: string;
  /** Lower-cased search text: names, aliases, keywords, former names. */
  terms: string;
}

interface GalleryGroup {
  id: string;
  label: string;
  description: string;
  items: GalleryItem[];
}

const PAGE = 96;
const MIN_TILE = 112; // px; the grid fits as many columns as the width allows
const GAP = 8;

/** Aliases that resolve to each registered name (\`plus\` \u2192 \`action.add\`). */
const ALIASES_BY_NAME = new Map<string, ScscIconName[]>();
for (const [alias, name] of Object.entries(SCSC_ICON_ALIASES) as [ScscIconName, string][]) {
  ALIASES_BY_NAME.set(name, [...(ALIASES_BY_NAME.get(name) ?? []), alias]);
}
const KEYWORDS_BY_ALIAS = new Map(
  SCSC_ICON_FAMILIES.flatMap((f) => f.icons.map((i) => [i.alias, i.keywords] as const)),
);

const CURATED: GalleryGroup[] = SCSC_ICON_FAMILIES.map((f) => ({
  id: f.id,
  label: f.label,
  description: f.description,
  items: f.icons.map((i) => ({
    key: i.alias,
    label: i.alias,
    sub: i.icon,
    icon: i.alias,
    alias: i.alias,
    name: i.icon,
    terms: [i.alias, i.icon, ...i.keywords].join(' ').toLowerCase(),
  })),
}));

/**
 * Docs-site tool rather than a copy-paste pattern: the searchable gallery of every SCSC alias
 * and the complete installed Lucide set. The Lucide list is generated from node_modules by
 * \`scripts/gen-icon-catalog.mjs\` and imported lazily (its own chunk) only when you pick
 * "All Lucide icons", so the page stays light.
 */
@Component({
  selector: 'app-icon-gallery-browse-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscButton,
    ScscFieldset,
    ScscFormField,
    ScscHeading,
    ScscIcon,
    ScscRadio,
    ScscSearchInput,
    ScscSelect,
  ],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="grid gap-4 md:grid-cols-2">
        <scsc-form-field label="Search icons" hint="Name, alias or keyword, e.g. hearing, trash">
          <scsc-search-input [(value)]="query" placeholder="Search icons" />
        </scsc-form-field>
        <scsc-form-field label="Show" for="icon-gallery-filter">
          <select id="icon-gallery-filter" scsc-select (change)="setFilter($event)">
            <option value="all" [selected]="filter() === 'all'">
              All SCSC aliases ({{ aliasCount }})
            </option>
            @for (f of families; track f.id) {
              <option [value]="f.id" [selected]="filter() === f.id">
                {{ f.label }} ({{ f.icons.length }})
              </option>
            }
            <option value="lucide" [selected]="filter() === 'lucide'">
              All Lucide icons{{ catalog() ? ' (' + catalog()!.length + ')' : '' }}
            </option>
          </select>
        </scsc-form-field>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <scsc-fieldset legend="Preview size" inline>
          @for (s of sizes; track s.value) {
            <label class="flex min-h-6 items-center gap-2 text-sm">
              <input
                type="radio"
                scsc-radio
                name="icon-gallery-size"
                [value]="s.value"
                [checked]="size() === s.value"
                (change)="size.set(s.value)"
              />
              {{ s.label }}
            </label>
          }
        </scsc-fieldset>
        <scsc-fieldset legend="Copy as" inline>
          @for (f of formats; track f.value) {
            <label class="flex min-h-6 items-center gap-2 text-sm">
              <input
                type="radio"
                scsc-radio
                name="icon-gallery-copy"
                [value]="f.value"
                [checked]="copyAs() === f.value"
                (change)="copyAs.set(f.value)"
              />
              {{ f.label }}
            </label>
          }
        </scsc-fieldset>
      </div>

      <div class="flex flex-wrap items-baseline justify-between gap-2 text-sm">
        <p class="text-base-content/70">
          @if (loadingCatalog()) {
            {{ labels().loading }}
          } @else {
            {{ labels().results(matchCount()) }}
          }
        </p>
        <!-- Visible confirmation; the announcer speaks it (this line is not a live region). -->
        <p class="font-medium">
          @if (copiedText(); as text) {
            {{ labels().copied }}: <code class="font-mono">{{ text }}</code>
          }
        </p>
      </div>
      <p [id]="hintId" class="text-sm text-base-content/70">
        Arrow keys move between icons, Home and End go to the start and end of a row. Enter copies
        the {{ formatLabel() }}.
      </p>

      <div #results class="flex flex-col gap-8">
        @for (group of groups(); track group.id) {
          <section class="flex flex-col gap-3" [attr.aria-labelledby]="headingId(group.id)">
            <div>
              <scsc-heading [level]="4" [id]="headingId(group.id)">
                {{ group.label }}
                <span class="font-normal text-base-content/70">\xB7 {{ group.items.length }}</span>
              </scsc-heading>
              <p class="text-sm text-base-content/70">{{ group.description }}</p>
            </div>
            <div
              role="grid"
              [attr.aria-labelledby]="headingId(group.id)"
              [attr.aria-describedby]="hintId"
              [attr.aria-rowcount]="rowCount(group)"
              [attr.data-gallery]="group.id"
              class="flex flex-col gap-2"
            >
              @for (row of rows(group); track $index; let r = $index) {
                <div
                  role="row"
                  class="grid gap-2"
                  [attr.aria-rowindex]="r + 1"
                  [style.grid-template-columns]="'repeat(' + cols() + ', minmax(0, 1fr))'"
                >
                  @for (item of row; track item.key; let c = $index) {
                    <div role="gridcell" class="min-w-0">
                      <button
                        type="button"
                        class="relative flex h-full min-h-24 w-full flex-col items-center justify-start gap-2 rounded-box border border-base-300 bg-base-100 px-2 py-3 text-center hover:border-primary hover:bg-base-200"
                        [attr.data-index]="r * cols() + c"
                        [tabindex]="isActive(group.id, r * cols() + c) ? 0 : -1"
                        (focus)="setActive(group.id, r * cols() + c)"
                        (keydown)="onKey($event, group, r * cols() + c)"
                        (click)="copy(item, group.id)"
                      >
                        <scsc-icon [name]="item.icon" [size]="size()" />
                        <span class="block w-full break-words font-mono text-xs leading-tight">
                          {{ item.label }}
                        </span>
                        @if (item.sub) {
                          <span
                            class="block w-full break-words text-xs leading-tight text-base-content/70"
                          >
                            {{ item.sub }}
                          </span>
                        }
                        @if (copiedKey() === group.id + '/' + item.key) {
                          <scsc-icon
                            name="action.check"
                            size="xs"
                            class="absolute right-1.5 top-1.5 text-success"
                          />
                        }
                      </button>
                    </div>
                  }
                </div>
              }
            </div>
            @if (group.items.length > shown(group)) {
              <div>
                <scsc-button variant="ghost" outline size="sm" (click)="showMore(group)">
                  @if (group.id === 'lucide') {
                    Show {{ nextBatch(group) }} more ({{ group.items.length - shown(group) }} not
                    shown)
                  } @else {
                    Show all {{ group.items.length }} {{ group.label }}
                  }
                </scsc-button>
              </div>
            }
          </section>
        } @empty {
          @if (!loadingCatalog()) {
            <p class="text-sm text-base-content/70">
              {{ labels().noResults }}.
              @if (filter() !== 'lucide') {
                Try <strong>All Lucide icons</strong> under Show to search the full set.
              }
            </p>
          }
        }
      </div>
    </div>
  \`,
})
export class IconGalleryBrowseDemo {
  private readonly doc = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly announcer = inject(ScscAnnouncer);
  protected readonly labels = inject(SCSC_LABELS);
  private readonly resultsEl = viewChild.required<ElementRef<HTMLElement>>('results');

  protected readonly families = SCSC_ICON_FAMILIES;
  protected readonly aliasCount = Object.keys(SCSC_ICON_ALIASES).length;
  protected readonly hintId = 'icon-gallery-hint';
  protected readonly sizes: { value: ScscSize; label: string }[] = [
    { value: 'xs', label: 'xs \xB7 14px' },
    { value: 'sm', label: 'sm \xB7 16px' },
    { value: 'md', label: 'md \xB7 20px' },
    { value: 'lg', label: 'lg \xB7 24px' },
  ];
  protected readonly formats: { value: CopyFormat; label: string }[] = [
    { value: 'alias', label: 'Alias' },
    { value: 'name', label: 'Lucide name' },
    { value: 'snippet', label: '<scsc-icon> snippet' },
    { value: 'import', label: 'Import line' },
  ];

  protected readonly query = signal('');
  protected readonly filter = signal<Filter>('all');
  protected readonly size = signal<ScscSize>('md');
  protected readonly copyAs = signal<CopyFormat>('alias');
  protected readonly cols = signal(6);
  protected readonly catalog = signal<Catalog | null>(null);
  protected readonly loadingCatalog = computed(() => this.filter() === 'lucide' && !this.catalog());
  protected readonly copiedKey = signal<string | null>(null);
  protected readonly copiedText = signal<string | null>(null);
  private readonly limits = signal<Record<string, number>>({});
  private readonly active = signal<Record<string, number>>({});
  private copiedTimer: ReturnType<typeof setTimeout> | undefined;
  private catalogVersion = '';

  private readonly lucideGroup = computed<GalleryGroup | null>(() => {
    const catalog = this.catalog();
    if (!catalog) return null;
    return {
      id: 'lucide',
      label: 'All Lucide icons',
      description: \`Every icon in the installed lucide-angular \${this.catalogVersion}. Use an alias where one exists.\`,
      items: catalog.map(([name, former = []]) => {
        const aliases = ALIASES_BY_NAME.get(name) ?? [];
        const keywords = aliases.flatMap((a) => KEYWORDS_BY_ALIAS.get(a) ?? []);
        return {
          key: name,
          label: name,
          sub: aliases.join(', '),
          icon: name,
          alias: aliases[0] ?? null,
          name,
          terms: [name, ...former, ...aliases, ...keywords].join(' ').toLowerCase(),
        };
      }),
    };
  });

  protected readonly groups = computed<GalleryGroup[]>(() => {
    const filter = this.filter();
    const source =
      filter === 'lucide'
        ? [this.lucideGroup()].filter((g): g is GalleryGroup => !!g)
        : CURATED.filter((g) => filter === 'all' || g.id === filter);
    const words = this.query().trim().toLowerCase().split(/\\s+/).filter(Boolean);
    return source
      .map((g) => ({
        ...g,
        items: words.length
          ? g.items.filter((i) => words.every((w) => i.terms.includes(w)))
          : g.items,
      }))
      .filter((g) => g.items.length > 0);
  });

  /** No search and no single family picked: each family shows one row, so the page stays light. */
  protected readonly overview = computed(() => this.filter() === 'all' && !this.query().trim());
  protected readonly matchCount = computed(() =>
    this.groups().reduce((n, g) => n + g.items.length, 0),
  );
  protected readonly formatLabel = computed(() =>
    this.formats.find((f) => f.value === this.copyAs())!.label.toLowerCase(),
  );

  constructor() {
    const destroyRef = inject(DestroyRef);
    // Load the full Lucide list only when asked for.
    effect(() => {
      if (this.filter() === 'lucide' && !untracked(this.catalog)) {
        import('../icon-catalog.generated').then((m) => {
          this.catalogVersion = m.LUCIDE_CATALOG_VERSION;
          this.catalog.set(m.LUCIDE_CATALOG);
        });
      }
    });
    // A new search or filter starts every group at its first page and first tile, and the
    // result count is announced once typing pauses (the announcer debounces).
    let first = true;
    effect(() => {
      this.query();
      this.filter();
      const count = this.matchCount();
      const loading = this.loadingCatalog();
      untracked(() => {
        this.limits.set({});
        this.active.set({});
        if (first) first = false;
        else if (!loading) this.announcer.announce(this.labels().results(count));
      });
    });
    afterNextRender(() => {
      const view = this.doc.defaultView;
      if (!view || !('ResizeObserver' in view)) return;
      const observer = new view.ResizeObserver(([entry]) => {
        const width = entry.contentRect.width;
        this.cols.set(Math.max(2, Math.floor((width + GAP) / (MIN_TILE + GAP))));
      });
      observer.observe(this.resultsEl().nativeElement);
      destroyRef.onDestroy(() => observer.disconnect());
    });
    destroyRef.onDestroy(() => clearTimeout(this.copiedTimer));
  }

  protected setFilter(event: Event): void {
    this.filter.set((event.target as HTMLSelectElement).value as Filter);
  }

  protected headingId(group: string): string {
    return \`icon-gallery-\${group}\`;
  }

  /** How many tiles a group shows: the Lucide set pages by 96; the families start as one row. */
  protected shown(group: GalleryGroup): number {
    const set = this.limits()[group.id];
    if (set !== undefined) return set;
    if (group.id === 'lucide') return PAGE;
    return this.overview() ? this.cols() : group.items.length;
  }

  protected nextBatch(group: GalleryGroup): number {
    return Math.min(PAGE, group.items.length - this.shown(group));
  }

  protected rows(group: GalleryGroup): GalleryItem[][] {
    const visible = group.items.slice(0, this.shown(group));
    const cols = this.cols();
    const rows: GalleryItem[][] = [];
    for (let i = 0; i < visible.length; i += cols) rows.push(visible.slice(i, i + cols));
    return rows;
  }

  protected rowCount(group: GalleryGroup): number {
    return Math.ceil(group.items.length / this.cols());
  }

  protected isActive(group: string, index: number): boolean {
    return (this.active()[group] ?? 0) === index;
  }

  protected setActive(group: string, index: number): void {
    if (this.active()[group] !== index) this.active.update((a) => ({ ...a, [group]: index }));
  }

  protected onKey(event: KeyboardEvent, group: GalleryGroup, index: number): void {
    const cols = this.cols();
    const count = Math.min(group.items.length, this.shown(group));
    const rows = Math.ceil(count / cols);
    const target = gridKeyTarget(
      event,
      { row: Math.floor(index / cols), col: index % cols },
      { rows, cols },
      3,
    );
    if (!target) return;
    event.preventDefault();
    // The last row may be short: clamp into it.
    const next = Math.min(count - 1, target.row * cols + target.col);
    this.setActive(group.id, next);
    this.focusTile(group.id, next);
  }

  protected showMore(group: GalleryGroup): void {
    const start = this.shown(group);
    const end =
      group.id === 'lucide' ? Math.min(group.items.length, start + PAGE) : group.items.length;
    this.limits.update((l) => ({ ...l, [group.id]: end }));
    this.announcer.announce(\`Showing \${end} of \${group.items.length} icons\`);
    // The button disappears once everything is shown: move focus to the first new icon.
    if (end >= group.items.length) {
      this.setActive(group.id, start);
      afterNextRender(() => this.focusTile(group.id, start), { injector: this.injector });
    }
  }

  protected async copy(item: GalleryItem, group: string): Promise<void> {
    const text = this.textFor(item);
    try {
      await this.doc.defaultView?.navigator?.clipboard?.writeText(text);
    } catch {
      // Clipboard blocked (permissions, insecure context): still show what would be copied.
    }
    this.copiedKey.set(\`\${group}/\${item.key}\`);
    this.copiedText.set(text);
    this.announcer.announce(\`\${this.labels().copied}: \${text}\`, 'polite', 0);
    clearTimeout(this.copiedTimer);
    this.copiedTimer = setTimeout(() => this.copiedKey.set(null), 2000);
  }

  private textFor(item: GalleryItem): string {
    const alias = item.alias ?? item.name;
    switch (this.copyAs()) {
      case 'alias':
        return alias;
      case 'name':
        return item.name;
      case 'snippet':
        return \`<scsc-icon name="\${alias}" />\`;
      case 'import':
        return item.name.startsWith(SCSC_GLYPH_PREFIX)
          ? \`import { \${lucideIconKey(item.name)} } from '@scscourt/design';\`
          : \`import { \${lucideIconKey(item.name)} } from 'lucide-angular';\`;
    }
  }

  private focusTile(group: string, index: number): void {
    this.resultsEl()
      .nativeElement.querySelector<HTMLElement>(\`[data-gallery="\${group}"] [data-index="\${index}"]\`)
      ?.focus();
  }
}
`,html:`<div class="flex flex-col gap-4">
  <div class="grid gap-4 md:grid-cols-2">
    <scsc-form-field label="Search icons" hint="Name, alias or keyword, e.g. hearing, trash">
      <scsc-search-input [(value)]="query" placeholder="Search icons" />
    </scsc-form-field>
    <scsc-form-field label="Show" for="icon-gallery-filter">
      <select id="icon-gallery-filter" scsc-select (change)="setFilter($event)">
        <option value="all" [selected]="filter() === 'all'">
          All SCSC aliases ({{ aliasCount }})
        </option>
        @for (f of families; track f.id) {
          <option [value]="f.id" [selected]="filter() === f.id">
            {{ f.label }} ({{ f.icons.length }})
          </option>
        }
        <option value="lucide" [selected]="filter() === 'lucide'">
          All Lucide icons{{ catalog() ? ' (' + catalog()!.length + ')' : '' }}
        </option>
      </select>
    </scsc-form-field>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <scsc-fieldset legend="Preview size" inline>
      @for (s of sizes; track s.value) {
        <label class="flex min-h-6 items-center gap-2 text-sm">
          <input
            type="radio"
            scsc-radio
            name="icon-gallery-size"
            [value]="s.value"
            [checked]="size() === s.value"
            (change)="size.set(s.value)"
          />
          {{ s.label }}
        </label>
      }
    </scsc-fieldset>
    <scsc-fieldset legend="Copy as" inline>
      @for (f of formats; track f.value) {
        <label class="flex min-h-6 items-center gap-2 text-sm">
          <input
            type="radio"
            scsc-radio
            name="icon-gallery-copy"
            [value]="f.value"
            [checked]="copyAs() === f.value"
            (change)="copyAs.set(f.value)"
          />
          {{ f.label }}
        </label>
      }
    </scsc-fieldset>
  </div>

  <div class="flex flex-wrap items-baseline justify-between gap-2 text-sm">
    <p class="text-base-content/70">
      @if (loadingCatalog()) {
        {{ labels().loading }}
      } @else {
        {{ labels().results(matchCount()) }}
      }
    </p>
    <!-- Visible confirmation; the announcer speaks it (this line is not a live region). -->
    <p class="font-medium">
      @if (copiedText(); as text) {
        {{ labels().copied }}: <code class="font-mono">{{ text }}</code>
      }
    </p>
  </div>
  <p [id]="hintId" class="text-sm text-base-content/70">
    Arrow keys move between icons, Home and End go to the start and end of a row. Enter copies
    the {{ formatLabel() }}.
  </p>

  <div #results class="flex flex-col gap-8">
    @for (group of groups(); track group.id) {
      <section class="flex flex-col gap-3" [attr.aria-labelledby]="headingId(group.id)">
        <div>
          <scsc-heading [level]="4" [id]="headingId(group.id)">
            {{ group.label }}
            <span class="font-normal text-base-content/70">\xB7 {{ group.items.length }}</span>
          </scsc-heading>
          <p class="text-sm text-base-content/70">{{ group.description }}</p>
        </div>
        <div
          role="grid"
          [attr.aria-labelledby]="headingId(group.id)"
          [attr.aria-describedby]="hintId"
          [attr.aria-rowcount]="rowCount(group)"
          [attr.data-gallery]="group.id"
          class="flex flex-col gap-2"
        >
          @for (row of rows(group); track $index; let r = $index) {
            <div
              role="row"
              class="grid gap-2"
              [attr.aria-rowindex]="r + 1"
              [style.grid-template-columns]="'repeat(' + cols() + ', minmax(0, 1fr))'"
            >
              @for (item of row; track item.key; let c = $index) {
                <div role="gridcell" class="min-w-0">
                  <button
                    type="button"
                    class="relative flex h-full min-h-24 w-full flex-col items-center justify-start gap-2 rounded-box border border-base-300 bg-base-100 px-2 py-3 text-center hover:border-primary hover:bg-base-200"
                    [attr.data-index]="r * cols() + c"
                    [tabindex]="isActive(group.id, r * cols() + c) ? 0 : -1"
                    (focus)="setActive(group.id, r * cols() + c)"
                    (keydown)="onKey($event, group, r * cols() + c)"
                    (click)="copy(item, group.id)"
                  >
                    <scsc-icon [name]="item.icon" [size]="size()" />
                    <span class="block w-full break-words font-mono text-xs leading-tight">
                      {{ item.label }}
                    </span>
                    @if (item.sub) {
                      <span
                        class="block w-full break-words text-xs leading-tight text-base-content/70"
                      >
                        {{ item.sub }}
                      </span>
                    }
                    @if (copiedKey() === group.id + '/' + item.key) {
                      <scsc-icon
                        name="action.check"
                        size="xs"
                        class="absolute right-1.5 top-1.5 text-success"
                      />
                    }
                  </button>
                </div>
              }
            </div>
          }
        </div>
        @if (group.items.length > shown(group)) {
          <div>
            <scsc-button variant="ghost" outline size="sm" (click)="showMore(group)">
              @if (group.id === 'lucide') {
                Show {{ nextBatch(group) }} more ({{ group.items.length - shown(group) }} not
                shown)
              } @else {
                Show all {{ group.items.length }} {{ group.label }}
              }
            </scsc-button>
          </div>
        }
      </section>
    } @empty {
      @if (!loadingCatalog()) {
        <p class="text-sm text-base-content/70">
          {{ labels().noResults }}.
          @if (filter() !== 'lucide') {
            Try <strong>All Lucide icons</strong> under Show to search the full set.
          }
        </p>
      }
    }
  </div>
</div>
`}}[`icon-gallery-browse`]}],a11y:[`Each family is a labelled grid of buttons: one Tab stop per grid, arrow keys move between icons, and every button is named by its visible alias and glyph name.`,'Copying is confirmed visibly next to the result count and spoken through `ScscAnnouncer` ("Copied: action.delete"), using the `copied` string from `SCSC_LABELS`.',`The result count updates as you type and is announced once typing pauses; "Show more" announces how many icons are now shown and never strands focus.`,`Tiles are at least 96px tall with a visible gold focus ring; the copied check mark is decorative.`],keyboard:[{keys:`Tab / Shift + Tab`,action:`Move between the controls, each family grid and its "Show more" button.`},{keys:`ArrowRight / ArrowLeft`,action:`Next or previous icon in the row.`},{keys:`ArrowDown / ArrowUp`,action:`Icon below or above; stops at the first and last row.`},{keys:`Home / End`,action:`First or last icon in the row.`},{keys:`Ctrl + Home / Ctrl + End`,action:`First or last icon in the grid (⌘ on macOS).`},{keys:`PageDown / PageUp`,action:`Three rows down or up.`},{keys:`Enter / Space`,action:`Copy the icon in the chosen format.`}],aria:['Each family renders `role="grid"` labelled by its heading and described by the keyboard hint, with `role="row"` and `role="gridcell"` inside and `aria-rowcount` / `aria-rowindex` while only part of the set is shown.','Only the current icon in each grid has `tabindex="0"` (roving tabindex); the others have `-1`.',"Preview icons are `aria-hidden`; the button text names the icon."],appMustProvide:["Registration for the icons it previews: `provideScscIcons(SCSC_ICONS)` covers the aliases; the full Lucide view needs the whole set registered, as this site does."],related:[`icon`,`icon-button`]};export{Qe as ICON_GALLERY_DOCS};