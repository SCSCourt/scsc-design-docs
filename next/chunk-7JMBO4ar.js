import{t as r}from"./chunk-DxqKAYlM.js";import{Aa as It,Ca as Gv,Co as _2,Cs as rM,E as Bue,Ea as Hs,Fr as kn,Go as g,Gs as zS,Hs as y_,In as Xz,Jn as _z,K as Fi,Lo as d_,Lr as lt,Ma as JT,Ms as uc,Na as Jb,No as cc,Oo as ar,Ps as ut,R as Et,Rs as w_,Sa as Gt,So as Zv,Ua as Ni,Uo as fa,Xa as Pv,Y as Fs,Zo as i_,_a as Ff,_s as o_,bn as Vz,cs as lc,ds as nD,fs as nM,ha as Eg,ka as Ig,ks as t_,lo as Vv,ls as mr,m as Aa,oi as que,oo as Uv,os as k_,pa as Ec,pi as sn,po as X$1,ps as n_,qo as ge,ra as Af,ro as T2,ta as $f,ts as jf,tt as Hue,us as my,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,ya as Ga,yo as YM,z as F,za as Lf}from"./main-O6OT5H7H.js";import{n as co,r as lo,t as bt}from"./chunk-CHd4pnde.js";var Ae=(o,t)=>t.id;function He(o,t){if(o&1){let e=d_();Ff(0,`button`,2),Vv(`click`,function(){let m=Eg(e).$implicit,i=y_();return Ig(i.active.set(m.id))})(`keydown`,function(m){Eg(e);let i=y_();return Ig(i.onKeydown(m))}),G_(1),jf()}if(o&2){let e=t.$implicit,n=y_();k_(e.id===n.active()?`tab tab-active font-semibold text-base-content`:`tab text-base-content/70`),Uv(`id`,n.tabId(e.id)),cc(`aria-selected`,e.id===n.active())(`aria-controls`,n.panelId(e.id))(`tabindex`,e.id===n.active()?0:-1),Jb(),$f(` `,e.label,` `)}}function X(o,t){return`${o}-tab-${t}`}function Z(o,t){return`${o}-panel-${t}`}var V=class o{host=g(It).nativeElement;tabs=Ec.required();active=T2.required();prefix=Ec.required();ariaLabel=Ec(``);ariaLabelledby=Ec(``);tabId(t){return X(this.prefix(),t)}panelId(t){return Z(this.prefix(),t)}onKeydown(t){let e=this.tabs(),n=e.findIndex(H=>H.id===this.active()),m=getComputedStyle(this.host).direction===`rtl`,i;switch(t.key){case`ArrowRight`:i=m?n-1:n+1;break;case`ArrowLeft`:i=m?n+1:n-1;break;case`Home`:i=0;break;case`End`:i=e.length-1;break;default:return}t.preventDefault();let N=e[(i+e.length)%e.length];this.active.set(N.id),this.host.ownerDocument.getElementById(this.tabId(N.id))?.focus()}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`scsc-doc-tabs`]],hostAttrs:[1,`block`],inputs:{tabs:[1,`tabs`],active:[1,`active`],prefix:[1,`prefix`],ariaLabel:[1,`ariaLabel`],ariaLabelledby:[1,`ariaLabelledby`]},outputs:{active:`activeChange`},decls:3,vars:2,consts:[[`role`,`tablist`,1,`tabs`,`tabs-border`,`tabs-sm`],[`type`,`button`,`role`,`tab`,3,`id`,`class`],[`type`,`button`,`role`,`tab`,3,`click`,`keydown`,`id`]],template:function(e,n){e&1&&(Ff(0,`div`,0),o_(1,He,2,7,`button`,1,Ae),jf()),e&2&&(cc(`aria-label`,n.ariaLabelledby()?null:n.ariaLabel())(`aria-labelledby`,n.ariaLabelledby()||null),Jb(),i_(n.tabs()))},encapsulation:2})};var Pe=[`area`];function Re(o,t){if(o&1&&(Ga(0,`label`,1),G_(1),Lf()),o&2){let e=y_();Pv(`id`,e.id+`-label`),cc(`for`,e.textareaId()),Jb(),$f(` `,e.label(),` `)}}function $e(o,t){if(o&1&&uc(0,`scsc-markdown`,9),o&2){let e=y_(2);Pv(`markdown`,e.value())(`headingOffset`,e.headingOffset())(`breaks`,e.breaks())}}function Be(o,t){if(o&1&&(Ga(0,`p`,10),G_(1),Lf()),o&2){let e=y_(2);Jb(),nD(e.L().nothingToPreview)}}function Ve(o,t){if(o&1&&JT(0,$e,1,3,`scsc-markdown`,9)(1,Be,2,1,`p`,10),o&2){let e=y_();t_(e.value().trim()?0:1)}}function Ge(o,t){if(o&1&&(Ga(0,`span`,8),G_(1),Lf()),o&2){let e=y_();Pv(`id`,e.id+`-count`),Jb(),nD(e.countText())}}var je=0;var G=class o{area=_2(`area`);field=Et(()=>this.area()?.nativeElement);id=`scsc-markdown-input-${je++}`;label=Ec(``);placeholder=Ec(``);rows=Ec(6,{transform:YM});maxlength=Ec(void 0,{transform:t=>t==null||t===``?void 0:YM(t)});showCount=Ec(!1,{transform:Ni});headingOffset=Ec(0,{transform:YM});breaks=Ec(!1,{transform:Ni});labels=Ec({});class=Ec(``);mode=q$1(`write`);value=q$1(``);disabled=q$1(!1);onChange=()=>{};onTouched=()=>{};L=ut(()=>r(r({},bt),this.labels()));classes=ut(()=>F(`block`,this.class()));textareaClasses=ut(()=>F(`textarea w-full`,this.field.invalid(!1)?`textarea-error`:``));tabs=ut(()=>[{id:`write`,label:this.L().write},{id:`preview`,label:this.L().preview}]);textareaId=ut(()=>this.field.field?null:`${this.id}-textarea`);countText=ut(()=>this.L().characterCount(this.value().length,this.maxlength()??null));describedBy=ut(()=>[this.field.describedBy(),`${this.id}-hint`,this.showCount()?`${this.id}-count`:``].filter(Boolean).join(` `)||null);tabId(t){return X(this.id,t)}panelId(t){return Z(this.id,t)}onInput(t){this.value.set(t),this.onChange(t)}writeValue(t){this.value.set(t??``)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled.set(t)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`scsc-markdown-input`]],viewQuery:function(e,n){e&1&&Gv(n.area,Pe,5),e&2&&w_()},hostVars:2,hostBindings:function(e,n){e&2&&k_(n.classes())},inputs:{label:[1,`label`],placeholder:[1,`placeholder`],rows:[1,`rows`],maxlength:[1,`maxlength`],showCount:[1,`showCount`],headingOffset:[1,`headingOffset`],breaks:[1,`breaks`],labels:[1,`labels`],class:[1,`class`]},features:[nM([{provide:lt,useExisting:Hs(()=>o),multi:!0}])],decls:11,vars:29,consts:[[`area`,``],[1,`mb-1`,`block`,`text-sm`,`font-medium`,3,`id`],[3,`activeChange`,`tabs`,`active`,`prefix`,`ariaLabel`,`ariaLabelledby`],[`role`,`tabpanel`,1,`mt-1`,3,`id`,`hidden`],[3,`input`,`blur`,`rows`,`placeholder`,`value`,`disabled`],[`role`,`tabpanel`,`tabindex`,`0`,1,`mt-1`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-3`,3,`id`,`hidden`],[1,`mt-1`,`flex`,`flex-wrap`,`justify-between`,`gap-2`,`text-xs`,`text-base-content/70`],[3,`id`],[1,`tnum`,3,`id`],[3,`markdown`,`headingOffset`,`breaks`],[1,`text-sm`,`text-base-content/70`]],template:function(e,n){e&1&&(JT(0,Re,2,3,`label`,1),Ga(1,`scsc-doc-tabs`,2),lc(`activeChange`,function(i){return n.mode.set(i)}),Lf(),Ga(2,`div`,3)(3,`textarea`,4,0),lc(`input`,function(i){return n.onInput(i.target.value)})(`blur`,function(){return n.onTouched()}),Lf()(),Ga(5,`div`,5),JT(6,Ve,2,1),Lf(),Ga(7,`div`,6)(8,`span`,7),G_(9),Lf(),JT(10,Ge,2,2,`span`,8),Lf()),e&2&&(t_(n.label()?0:-1),Jb(),Pv(`tabs`,n.tabs())(`active`,n.mode())(`prefix`,n.id)(`ariaLabel`,n.label()?``:n.L().write+` / `+n.L().preview)(`ariaLabelledby`,n.label()?n.id+`-label`:``),Jb(),Pv(`id`,n.panelId(`write`))(`hidden`,n.mode()!==`write`),cc(`aria-labelledby`,n.tabId(`write`)),Jb(),k_(n.textareaClasses()),Pv(`rows`,n.rows())(`placeholder`,n.placeholder())(`value`,n.value())(`disabled`,n.disabled()),cc(`id`,n.textareaId())(`maxlength`,n.maxlength()??null)(`aria-describedby`,n.describedBy())(`aria-invalid`,n.field.invalid(!1)?`true`:null)(`aria-required`,n.field.required()?`true`:null),Jb(2),Zv(`min-height`,n.rows()*1.5+1,`rem`),Pv(`id`,n.panelId(`preview`))(`hidden`,n.mode()!==`preview`),cc(`aria-labelledby`,n.tabId(`preview`)),Jb(),t_(n.mode()===`preview`?6:-1),Jb(2),Pv(`id`,n.id+`-hint`),Jb(),nD(n.L().markdownSupported),Jb(),t_(n.showCount()?10:-1))},dependencies:[V,lo],encapsulation:2})};var qe=(o,t)=>t.id;function We(o,t){if(o&1&&(Ff(0,`li`)(1,`a`,3),G_(2),jf()()),o&2){let e=t.$implicit,n=y_(2);Jb(),k_(e.id===n.active()?`border-primary font-semibold text-base-content`:`border-transparent text-base-content/80`),Zv(`padding-inline-start`,.75+(e.level-n.minLevel())*.75,`rem`),Uv(`href`,`#`+e.id,my),cc(`aria-current`,e.id===n.active()?`location`:null),Jb(),nD(e.text)}}function Ue(o,t){if(o&1&&(Ff(0,`nav`,0)(1,`p`,1),G_(2),jf(),Ff(3,`ul`,2),o_(4,We,3,7,`li`,null,qe),jf()()),o&2){let e=y_();cc(`aria-labelledby`,e.id),Jb(),Uv(`id`,e.id),Jb(),$f(` `,e.L().onThisPage,` `),Jb(2),i_(e.items())}}var ze=0;var j=class o{doc=g(X$1);location=g(ar);id=`scsc-doc-toc-${ze++}`;headings=Ec([]);levels=Ec([2,3]);labels=Ec({});class=Ec(``);active=q$1(null);classes=ut(()=>F(`block`,this.class()));L=ut(()=>r(r({},bt),this.labels()));items=ut(()=>{let t=this.levels();return this.headings().filter(e=>e.id&&t.includes(e.level))});minLevel=ut(()=>Math.min(...this.items().map(t=>t.level),6));frame=0;constructor(){let t=this.doc.defaultView,e=()=>{t&&(t.cancelAnimationFrame(this.frame),this.frame=t.requestAnimationFrame(()=>this.update()))};t?.addEventListener(`scroll`,e,{passive:!0}),t?.addEventListener(`resize`,e,{passive:!0}),g(ge).onDestroy(()=>{t?.removeEventListener(`scroll`,e),t?.removeEventListener(`resize`,e),t?.cancelAnimationFrame(this.frame)}),fa(()=>{this.items(),e()})}onClick(t){co(t,this.location,this.doc)}update(){let t=this.items(),e=this.doc.defaultView;if(!t.length||!e){this.active.set(null);return}let n=this.doc.documentElement;if(e.innerHeight+e.scrollY>=n.scrollHeight-2){this.active.set(t.at(-1).id);return}let m=(parseFloat(e.getComputedStyle(n).scrollPaddingTop)||0)+24,i=null;for(let N of t){let H=this.doc.getElementById(N.id);if(H)if(H.getBoundingClientRect().top<=m)i=N.id;else break}this.active.set(i??t[0].id)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`scsc-doc-toc`]],hostVars:2,hostBindings:function(e,n){e&1&&lc(`click`,function(i){return n.onClick(i)}),e&2&&k_(n.classes())},inputs:{headings:[1,`headings`],levels:[1,`levels`],labels:[1,`labels`],class:[1,`class`]},decls:1,vars:1,consts:[[1,`text-sm`],[1,`mb-2`,`text-xs`,`font-semibold`,`uppercase`,`tracking-wide`,`text-base-content/70`,3,`id`],[1,`space-y-1`,`border-s`,`border-base-300`],[1,`-ms-px`,`block`,`border-s-2`,`py-0.5`,`pe-2`,`hover:text-primary`,3,`href`]],template:function(e,n){e&1&&JT(0,Ue,6,3,`nav`,0),e&2&&t_(n.items().length>1?0:-1)},encapsulation:2})};var q=class o{router=g(mr);exclude=Ec([],{alias:`scscDocLinksExclude`});onClick(t){if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;let e=t.target?.closest?.(`a`),n=e?.getAttribute(`href`);!e||!n||e.hasAttribute(`download`)||!n.startsWith(`/`)||n.startsWith(`//`)||this.exclude().some(m=>n.startsWith(m))||(t.preventDefault(),this.router.navigateByUrl(n))}static ɵfac=function(e){return new(e||o)};static ɵdir=Gt({type:o,selectors:[[``,`scscDocLinks`,``]],hostBindings:function(e,n){e&1&&lc(`click`,function(i){return n.onClick(i)})},inputs:{exclude:[1,`scscDocLinksExclude`,`exclude`]}})};var Ke=()=>[4,5];var Qe=new Set([`prose`,`markdown`]);var W=class o{headings=q$1([]);resolveLink=t=>{let e=/^([\w-]+)\.md(#.*)?$/.exec(t);if(!e)return null;let n=`/docs/components/${e[1]}${e[2]??``}`;return Qe.has(e[1])?{href:n}:{href:n,broken:!0}};guide=`---
title: E-filing guide
owner: Clerk's Office
---

# E-filing guide

Most civil filings go through an approved e-filing service provider. This guide covers the
[document format](prose.md) the court accepts and what happens after you submit.

> [!NOTE]
> The court's e-filing system is down for maintenance on the first Sunday of each month.

## Before you file

- [x] Create an account with an e-filing service provider
- [x] Convert each document to text-searchable PDF
- [ ] Check the [fee waiver rules](fee-waiver.md) if you can't pay the fees

### Document format

Each PDF must be under 25 MB and bookmarked by section.[^bookmarks]

## Fees

| Filing | Fee |
| :--- | ---: |
| First paper, unlimited civil | $435.00 |
| Motion or application | $60.00 |

> [!WARNING]
> A filing received after 11:59 p.m. is filed the next court day.

## After you file

The clerk reviews each envelope within two court days. See [Fees](#fees) for refunds.

[^bookmarks]: Rule 2.256 of the California Rules of Court.
`;static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-markdown-document-demo`]],decls:5,vars:8,consts:[[3,`level`,`visualLevel`],[1,`mt-3`,`grid`,`gap-6`,`lg:grid-cols-[minmax(0,1fr)_13rem]`],[`scscDocLinks`,``,`headingIds`,``,`headingIdPrefix`,`guide-`,`dropLeadingH1`,``,`stripFrontMatter`,``,3,`rendered`,`markdown`,`headingOffset`,`resolveLink`],[1,`self-start`,`lg:sticky`,`lg:top-20`,3,`headings`,`levels`]],template:function(e,n){e&1&&(Ga(0,`scsc-heading`,0),G_(1,`E-filing guide`),Lf(),Ga(2,`div`,1)(3,`scsc-markdown`,2),lc(`rendered`,function(i){return n.headings.set(i.headings)}),Lf(),uc(4,`scsc-doc-toc`,3),Lf()),e&2&&(Pv(`level`,3)(`visualLevel`,4),Jb(3),Pv(`markdown`,n.guide)(`headingOffset`,2)(`resolveLink`,n.resolveLink),Jb(),Pv(`headings`,n.headings())(`levels`,rM(7,Ke)))},dependencies:[q,j,kn,lo],encapsulation:2})};var U=class o{article=`# Before you file

A motion asks the judge to make an order. Reserve a hearing date first, then file and serve
the motion at least **16 court days** before it. See the
[California Rules of Court, rule 3.1300](https://courts.ca.gov/cms/rules/index.cfm?title=three&linkid=rule3_1300)
and our [local civil rules](/general_info/local_rules.shtml).

## Checklist

- [x] Reserve a hearing date with the department
- [x] Prepare the notice of motion and memorandum
- [ ] Serve every party and file the proof of service

## Filing fees

| Code | Filing | Fee |
| :--- | :--- | ---: |
| FEE-60 | Motion or application | $60.00 |
| FEE-20 | Stipulation and proposed order | $20.00 |
| FEE-500 | Motion for summary judgment | $500.00 |

## Checking your envelope from PowerShell

\`\`\`powershell
# Look up the status of an e-filing envelope
Invoke-RestMethod -Uri "https://efile.scscourt.org/api/envelopes/ENV-2026-0913-4471" -Headers @{ Authorization = "Bearer $token" }
\`\`\`

> Fee waivers: if you cannot afford the fees, file form ~~FW-001-INFO~~ **FW-001** with your motion.
`;static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-markdown-help-article-demo`]],decls:3,vars:4,consts:[[3,`level`,`visualLevel`],[`headingIds`,``,`headingIdPrefix`,`help-`,1,`mt-3`,3,`markdown`,`headingOffset`]],template:function(e,n){e&1&&(Ga(0,`scsc-heading`,0),G_(1,`Help: filing a motion`),Lf(),uc(2,`scsc-markdown`,1)),e&2&&(Pv(`level`,3)(`visualLevel`,4),Jb(2),Pv(`markdown`,n.article)(`headingOffset`,3))},dependencies:[kn,lo],encapsulation:2})};function Ye(o,t){if(o&1&&(Ga(0,`li`,2)(1,`p`,7)(2,`span`,8),G_(3),Lf(),G_(4,` · `),Ga(5,`span`,9),G_(6),Lf()(),uc(7,`scsc-markdown`,10),Lf()),o&2){let e=t.$implicit;Jb(3),nD(e.author),Jb(3),nD(e.at),Jb(),Pv(`markdown`,e.text)(`headingOffset`,4)}}var z=class o{form=new Aa({comment:new Fi(``,{nonNullable:!0,validators:[Fs.required]})});submitted=q$1(!1);notes=q$1([{author:`J. Ruiz, Civil Clerk`,at:`2026-09-29 09:12`,text:`Proof of service received for **both** defendants.
Hearing stays on calendar for 10/14.`}]);error(){return this.submitted()&&this.form.invalid?`Write the note before adding it.`:``}post(){this.submitted.set(!0),!this.form.invalid&&(this.notes.update(t=>[...t,{author:`You`,at:`2026-09-29 16:20`,text:this.form.controls.comment.value}]),this.form.reset(),this.submitted.set(!1))}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-markdown-input-comment-demo`]],decls:10,vars:4,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[1,`flex`,`flex-col`,`gap-3`],[1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-3`],[1,`flex`,`flex-col`,`gap-3`,3,`ngSubmit`,`formGroup`],[`label`,`Add a note to 24CV012345`,`required`,``,3,`error`],[`formControlName`,`comment`,`placeholder`,`Notes are visible to court staff only`,`showCount`,``,`breaks`,``,3,`maxlength`,`headingOffset`],[`variant`,`primary`,`nativeType`,`submit`],[1,`mb-1`,`text-sm`,`text-base-content/70`],[1,`font-medium`,`text-base-content`],[1,`tnum`],[`breaks`,``,3,`markdown`,`headingOffset`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`ul`,1),o_(2,Ye,8,4,`li`,2,n_),Lf(),Ga(4,`form`,3),lc(`ngSubmit`,function(){return n.post()}),Ga(5,`scsc-form-field`,4)(6,`scsc-markdown-input`,5),HS(),Lf()(),Ga(7,`div`)(8,`scsc-button`,6),G_(9,`Add note`),Lf()()()()),e&2&&(Jb(2),i_(n.notes()),Jb(2),Pv(`formGroup`,n.form),Jb(),Pv(`error`,n.error()),Jb(),Pv(`maxlength`,1e3)(`headingOffset`,4),zS())},dependencies:[Kue,Bue,Hue,que,_z,Vz,Xz,sn,Vn,lo,G],encapsulation:2})};var K={"markdown-document":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscHeading } from '@scscourt/design';
import {
  ScscDocLinks,
  ScscDocToc,
  ScscMarkdown,
  type ScscMarkdownHeading,
  type ScscMarkdownLink,
} from '@scscourt/design/docs';

/** The pages this guide links to that exist: anything else is marked as broken. */
const PAGES = new Set(['prose', 'markdown']);

@Component({
  selector: 'app-markdown-document-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocLinks, ScscDocToc, ScscHeading, ScscMarkdown],
  template: \`
    <scsc-heading [level]="3" [visualLevel]="4">E-filing guide</scsc-heading>
    <div class="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_13rem]">
      <!-- dropLeadingH1: the title is above. headingOffset 2: "##" becomes <h4>, under the <h3>. -->
      <scsc-markdown
        scscDocLinks
        [markdown]="guide"
        headingIds
        headingIdPrefix="guide-"
        dropLeadingH1
        stripFrontMatter
        [headingOffset]="2"
        [resolveLink]="resolveLink"
        (rendered)="headings.set($event.headings)"
      />
      <scsc-doc-toc
        class="self-start lg:sticky lg:top-20"
        [headings]="headings()"
        [levels]="[4, 5]"
      />
    </div>
  \`,
})
export class MarkdownDocumentDemo {
  protected readonly headings = signal<ScscMarkdownHeading[]>([]);

  /** Relative \`.md\` links become docs routes; a page that doesn't exist is marked. */
  protected readonly resolveLink = (href: string): ScscMarkdownLink | null => {
    const page = /^([\\w-]+)\\.md(#.*)?$/.exec(href);
    if (!page) return null;
    const route = \`/docs/components/\${page[1]}\${page[2] ?? ''}\`;
    return PAGES.has(page[1]) ? { href: route } : { href: route, broken: true };
  };

  // A document as it sits in a repository: front matter, a title, sections.
  protected readonly guide = \`---
title: E-filing guide
owner: Clerk's Office
---

# E-filing guide

Most civil filings go through an approved e-filing service provider. This guide covers the
[document format](prose.md) the court accepts and what happens after you submit.

> [!NOTE]
> The court's e-filing system is down for maintenance on the first Sunday of each month.

## Before you file

- [x] Create an account with an e-filing service provider
- [x] Convert each document to text-searchable PDF
- [ ] Check the [fee waiver rules](fee-waiver.md) if you can't pay the fees

### Document format

Each PDF must be under 25 MB and bookmarked by section.[^bookmarks]

## Fees

| Filing | Fee |
| :--- | ---: |
| First paper, unlimited civil | $435.00 |
| Motion or application | $60.00 |

> [!WARNING]
> A filing received after 11:59 p.m. is filed the next court day.

## After you file

The clerk reviews each envelope within two court days. See [Fees](#fees) for refunds.

[^bookmarks]: Rule 2.256 of the California Rules of Court.
\`;
}
`,html:`<scsc-heading [level]="3" [visualLevel]="4">E-filing guide</scsc-heading>
<div class="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_13rem]">
  <!-- dropLeadingH1: the title is above. headingOffset 2: "##" becomes <h4>, under the <h3>. -->
  <scsc-markdown
    scscDocLinks
    [markdown]="guide"
    headingIds
    headingIdPrefix="guide-"
    dropLeadingH1
    stripFrontMatter
    [headingOffset]="2"
    [resolveLink]="resolveLink"
    (rendered)="headings.set($event.headings)"
  />
  <scsc-doc-toc
    class="self-start lg:sticky lg:top-20"
    [headings]="headings()"
    [levels]="[4, 5]"
  />
</div>
`},"markdown-help-article":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading } from '@scscourt/design';
import { ScscMarkdown } from '@scscourt/design/docs';

@Component({
  selector: 'app-markdown-help-article-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscMarkdown],
  template: \`
    <scsc-heading [level]="3" [visualLevel]="4">Help: filing a motion</scsc-heading>
    <!-- headingOffset 3: the article's "#" becomes <h4>, under this page's own <h3>. -->
    <scsc-markdown
      class="mt-3"
      [markdown]="article"
      [headingOffset]="3"
      headingIds
      headingIdPrefix="help-"
    />
  \`,
})
export class MarkdownHelpArticleDemo {
  // Help content as authors write it in the CMS.
  protected readonly article = \`# Before you file

A motion asks the judge to make an order. Reserve a hearing date first, then file and serve
the motion at least **16 court days** before it. See the
[California Rules of Court, rule 3.1300](https://courts.ca.gov/cms/rules/index.cfm?title=three&linkid=rule3_1300)
and our [local civil rules](/general_info/local_rules.shtml).

## Checklist

- [x] Reserve a hearing date with the department
- [x] Prepare the notice of motion and memorandum
- [ ] Serve every party and file the proof of service

## Filing fees

| Code | Filing | Fee |
| :--- | :--- | ---: |
| FEE-60 | Motion or application | $60.00 |
| FEE-20 | Stipulation and proposed order | $20.00 |
| FEE-500 | Motion for summary judgment | $500.00 |

## Checking your envelope from PowerShell

\\\`\\\`\\\`powershell
# Look up the status of an e-filing envelope
Invoke-RestMethod -Uri "https://efile.scscourt.org/api/envelopes/ENV-2026-0913-4471" -Headers @{ Authorization = "Bearer $token" }
\\\`\\\`\\\`

> Fee waivers: if you cannot afford the fees, file form ~~FW-001-INFO~~ **FW-001** with your motion.
\`;
}
`,html:`<scsc-heading [level]="3" [visualLevel]="4">Help: filing a motion</scsc-heading>
<!-- headingOffset 3: the article's "#" becomes <h4>, under this page's own <h3>. -->
<scsc-markdown
  class="mt-3"
  [markdown]="article"
  [headingOffset]="3"
  headingIds
  headingIdPrefix="help-"
/>
`},"markdown-input-comment":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField } from '@scscourt/design';
import { ScscMarkdown, ScscMarkdownInput } from '@scscourt/design/docs';

interface Note {
  author: string;
  at: string;
  text: string;
}

@Component({
  selector: 'app-markdown-input-comment-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscMarkdown, ScscMarkdownInput],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <ul class="flex flex-col gap-3">
        @for (note of notes(); track $index) {
          <li class="rounded-box border border-base-300 bg-base-100 p-3">
            <p class="mb-1 text-sm text-base-content/70">
              <span class="font-medium text-base-content">{{ note.author }}</span> \xB7
              <span class="tnum">{{ note.at }}</span>
            </p>
            <!-- Comments keep single line breaks, and cannot add headings above h5. -->
            <scsc-markdown [markdown]="note.text" breaks [headingOffset]="4" />
          </li>
        }
      </ul>
      <form [formGroup]="form" (ngSubmit)="post()" class="flex flex-col gap-3">
        <scsc-form-field label="Add a note to 24CV012345" [error]="error()" required>
          <scsc-markdown-input
            formControlName="comment"
            placeholder="Notes are visible to court staff only"
            [maxlength]="1000"
            showCount
            breaks
            [headingOffset]="4"
          />
        </scsc-form-field>
        <div>
          <scsc-button variant="primary" nativeType="submit">Add note</scsc-button>
        </div>
      </form>
    </div>
  \`,
})
export class MarkdownInputCommentDemo {
  protected readonly form = new FormGroup({
    comment: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });
  protected readonly submitted = signal(false);
  protected readonly notes = signal<Note[]>([
    {
      author: 'J. Ruiz, Civil Clerk',
      at: '2026-09-29 09:12',
      text: 'Proof of service received for **both** defendants.\\nHearing stays on calendar for 10/14.',
    },
  ]);

  protected error(): string {
    return this.submitted() && this.form.invalid ? 'Write the note before adding it.' : '';
  }

  protected post(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;
    this.notes.update((list) => [
      ...list,
      { author: 'You', at: '2026-09-29 16:20', text: this.form.controls.comment.value },
    ]);
    this.form.reset();
    this.submitted.set(false);
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <ul class="flex flex-col gap-3">
    @for (note of notes(); track $index) {
      <li class="rounded-box border border-base-300 bg-base-100 p-3">
        <p class="mb-1 text-sm text-base-content/70">
          <span class="font-medium text-base-content">{{ note.author }}</span> \xB7
          <span class="tnum">{{ note.at }}</span>
        </p>
        <!-- Comments keep single line breaks, and cannot add headings above h5. -->
        <scsc-markdown [markdown]="note.text" breaks [headingOffset]="4" />
      </li>
    }
  </ul>
  <form [formGroup]="form" (ngSubmit)="post()" class="flex flex-col gap-3">
    <scsc-form-field label="Add a note to 24CV012345" [error]="error()" required>
      <scsc-markdown-input
        formControlName="comment"
        placeholder="Notes are visible to court staff only"
        [maxlength]="1000"
        showCount
        breaks
        [headingOffset]="4"
      />
    </scsc-form-field>
    <div>
      <scsc-button variant="primary" nativeType="submit">Add note</scsc-button>
    </div>
  </form>
</div>
`}};var zt={slug:`markdown`,name:`Markdown`,classes:[`ScscMarkdown`,`ScscMarkdownInput`,`ScscDocToc`,`ScscDocLinks`],category:`Specialized`,summary:"`scsc-markdown` renders GitHub-flavoured Markdown as court-styled prose; `scsc-markdown-input` is the matching Write / Preview field; `scsc-doc-toc` and `scscDocLinks` turn a rendered document into a page. For comments, notes, chat replies, help articles and whole documents. Experimental (`@scscourt/design/docs`).",whenToUse:["`scsc-markdown` for text people write in Markdown: help content, comments and notes, assistant replies, documents from a repository. It renders tables, task lists, strikethrough, autolinks, footnotes and GitHub alerts (`> [!NOTE]`), styled like `scsc-prose`, the same way Atlas and the knowledge base do.","Output goes through DOMPurify: the source cannot run script, add event handlers or styles, embed frames or link to `javascript:`. Raw HTML in the source is dropped. Treat the text as untrusted anyway: it is shown as written.",'Code fences that name a language (```` ```sql ````) are highlighted by `ScscHighlighter`, loaded only when a document has code. ```` ```mermaid ```` blocks are drawn when the app provides Mermaid with `provideScscMermaid`; otherwise they show their source. Links to other sites get `rel="noopener noreferrer"`.',"Set `headingOffset` so user content fits under the page’s headings (`2` renders `#` as `<h3>`). For a document page, turn on `headingIds` (ids are `user-content-…`, as on GitHub, with your `headingIdPrefix`), feed the `rendered` event’s headings to `scsc-doc-toc`, and map relative links with `resolveLink` and images with `resolveImage`. `dropLeadingH1` and `stripFrontMatter` fit repository documents; `breaks` keeps single line breaks, as chat and comment boxes expect; `wide` lifts the 68ch reading measure.","`scscDocLinks` sends same-site links in the rendered HTML through the router instead of reloading the app; in-document `#links` work without it.","`scsc-markdown-input` is a `ControlValueAccessor` (`formControlName`, `ngModel`). Label it with `label`, or put it in `scsc-form-field` for the label, hint, error and required state. `maxlength` with `showCount` shows how much is used.","For rich text without Markdown syntax, use `scsc-rich-text-editor`; for plain text, `textarea[scsc-textarea]`."],setup:`// package.json \u2014 optional peers of the docs entry
"markdown-it": "^15.0.0",
"markdown-it-footnote": "^4.0.0",
"github-slugger": "^2.0.0",
"dompurify": "^3.4.0",
"highlight.js": "^11.0.0" // for code in documents

import { ScscDocLinks, ScscDocToc, ScscMarkdown, ScscMarkdownInput } from '@scscourt/design/docs';

// Optional: draw Mermaid diagrams. Install "mermaid": "^11" (12 adds elkjs, EPL-2.0, not on the allowlist)
providers: [provideScscMermaid(() => import('mermaid').then((m) => m.default))]`,demos:[{id:`markdown-help-article`,title:`Help article`,description:"Headings shifted under the demo’s own `<h3>`, with GitHub ids; a task list, a fee table (right-aligned amounts), a highlighted PowerShell fence, a quote, and one external and one internal link.",component:U,source:K[`markdown-help-article`]},{id:`markdown-document`,title:`Document with a table of contents`,description:"A repository document: front matter stripped, its title dropped for the page’s own, alerts, a footnote, and relative links resolved to docs routes (one to a page that doesn’t exist, marked). `scsc-doc-toc` lists its sections and marks the one being read.",component:W,source:K[`markdown-document`]},{id:`markdown-input-comment`,title:`Case notes`,description:"A `scsc-markdown-input` in `scsc-form-field` with a required error, a 1,000-character count and a Preview tab; added notes render with `breaks`.",component:z,source:K[`markdown-input-comment`]}],keyboard:[{keys:`Tab`,action:`To the selected tab (Write or Preview), then into its panel: the textarea, or the preview. In a document: links, wide tables and code blocks (to scroll them), and the table of contents.`},{keys:`ArrowRight / ArrowLeft`,action:`On the tabs: switches between Write and Preview (automatic activation).`},{keys:`Home / End`,action:`On the tabs: Write / Preview.`},{keys:`Enter`,action:`On an in-document link or a contents link: scrolls to the heading and moves focus there.`}],aria:['`scsc-markdown-input`: the tabs are a `tablist` labelled by the field’s label, each with its `tabpanel`. The textarea is described by the "Markdown is supported" hint and the character count, plus the form field’s hint and error, and gets `aria-invalid` / `aria-required` from the field.','The Preview panel is focusable (`tabindex="0"`) so its content can be read and scrolled.','`scsc-markdown`: task list items are read-only checkboxes named by the item; tables sit in a focusable `role="region"` named "Table" with `scope="col"` headers; code blocks are focusable `<pre>`s; alerts are `role="note"` with a visible title; a drawn diagram is `role="img"`, its source a disclosure.','`scsc-doc-toc`: a `nav` named "On this page"; the link to the section being read has `aria-current="location"`.'],appMustProvide:["A label (`label`, or `scsc-form-field`), and an error message that says what to do.","A `headingOffset` that keeps the page’s heading order when user content has headings.","Alt text in the Markdown for images (`![Seal of the court](…)`): the renderer cannot write it for you.",`Link text that makes sense out of context; bare URLs become links that read as the URL.`],a11y:["Styled like `scsc-prose`: a 68ch reading measure and 1.7 line height; headings, links and code use the theme tokens.",`The character count is linked to the textarea, not announced on every keystroke.`,"In-document links and contents links move focus to the heading they scroll to (WCAG 2.4.3), and the address keeps the `#fragment`."],related:[`prose`,`rich-text-editor`,`textarea`,`code-highlighter`,`chat`]};export{zt as MARKDOWN_DOCS};