import{Fr as kn,I as EP,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,kt as NE,pi as sn,ra as Af,va as G_,wr as hN,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var m=class c{static ɵfac=function(s){return new(s||c)};static ɵcmp=Af({type:c,selectors:[[`app-divider-basic-demo`]],decls:13,vars:0,consts:[[1,`max-w-sm`],[1,`text-sm`],[1,`flex`,`flex-col`,`gap-2`],[`variant`,`primary`,`block`,``],[`variant`,`neutral`,`outline`,``,`block`,``]],template:function(s,u){s&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2,`Hearing details are listed in the notice mailed to each party.`),Lf(),uc(3,`scsc-divider`),Ga(4,`p`,1),G_(5,`Contact the clerk's office for interpreter requests.`),Lf(),Ga(6,`scsc-divider`),G_(7,`OR`),Lf(),Ga(8,`div`,2)(9,`scsc-button`,3),G_(10,`Sign in with court account`),Lf(),Ga(11,`scsc-button`,4),G_(12,`Continue as guest`),Lf()()())},dependencies:[sn,hN],encapsulation:2})};var v=class c{static ɵfac=function(s){return new(s||c)};static ɵcmp=Af({type:c,selectors:[[`app-divider-review-demo`]],decls:19,vars:7,consts:[[1,`max-w-md`],[3,`level`,`visualLevel`],[1,`mt-2`,3,`divided`],[1,`text-sm`],[`size`,`sm`,1,`mt-2`,`block`],[1,`flex`,`items-baseline`,`justify-between`],[`bold`,``,`tnum`,``]],template:function(s,u){s&1&&(Ga(0,`scsc-card`,0)(1,`scsc-heading`,1),G_(2,`Documents`),Lf(),Ga(3,`scsc-list`,2)(4,`li`,3),G_(5,`Motion to compel further responses (8 pages)`),Lf(),Ga(6,`li`,3),G_(7,`Declaration of Rafael Delgado (3 pages)`),Lf()(),uc(8,`scsc-divider`),Ga(9,`scsc-heading`,1),G_(10,`Service`),Lf(),Ga(11,`scsc-text`,4),G_(12,` Electronic service on Pacific Transit Authority, by counsel. `),Lf(),uc(13,`scsc-divider`),Ga(14,`div`,5)(15,`scsc-heading`,1),G_(16,`Fees`),Lf(),Ga(17,`scsc-text`,6),G_(18,`$60.00`),Lf()()()),s&2&&(Jb(),Pv(`level`,3)(`visualLevel`,5),Jb(2),Pv(`divided`,!1),Jb(6),Pv(`level`,3)(`visualLevel`,5),Jb(6),Pv(`level`,3)(`visualLevel`,5))},dependencies:[mN,hN,kn,EP,NE],encapsulation:2})};var p=class c{static ɵfac=function(s){return new(s||c)};static ɵcmp=Af({type:c,selectors:[[`app-divider-vertical-demo`]],decls:12,vars:1,consts:[[1,`flex`,`h-24`,`max-w-md`,`items-stretch`],[1,`flex`,`flex-1`,`flex-col`,`justify-center`,`text-sm`],[1,`font-medium`],[1,`text-base-content/70`],[3,`vertical`]],template:function(s,u){s&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`p`,2),G_(3,`Plaintiff`),Lf(),Ga(4,`p`,3),G_(5,`Maria Alvarez`),Lf()(),uc(6,`scsc-divider`,4),Ga(7,`div`,1)(8,`p`,2),G_(9,`Defendant`),Lf(),Ga(10,`p`,3),G_(11,`Northgate Properties LLC`),Lf()()()),s&2&&(Jb(6),Pv(`vertical`,!0))},dependencies:[hN],encapsulation:2})};var f={"divider-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscDivider } from '@scscourt/design';

@Component({
  selector: 'app-divider-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDivider],
  template: \`
    <div class="max-w-sm">
      <p class="text-sm">Hearing details are listed in the notice mailed to each party.</p>
      <scsc-divider />
      <p class="text-sm">Contact the clerk's office for interpreter requests.</p>
      <scsc-divider>OR</scsc-divider>
      <div class="flex flex-col gap-2">
        <scsc-button variant="primary" block>Sign in with court account</scsc-button>
        <scsc-button variant="neutral" outline block>Continue as guest</scsc-button>
      </div>
    </div>
  \`,
})
export class DividerBasicDemo {}
`,html:`<div class="max-w-sm">
  <p class="text-sm">Hearing details are listed in the notice mailed to each party.</p>
  <scsc-divider />
  <p class="text-sm">Contact the clerk's office for interpreter requests.</p>
  <scsc-divider>OR</scsc-divider>
  <div class="flex flex-col gap-2">
    <scsc-button variant="primary" block>Sign in with court account</scsc-button>
    <scsc-button variant="neutral" outline block>Continue as guest</scsc-button>
  </div>
</div>
`},"divider-review":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscDivider, ScscHeading, ScscList, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-divider-review-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscDivider, ScscHeading, ScscList, ScscText],
  template: \`
    <!-- Each section keeps its own heading; the divider only adds the visual break. -->
    <scsc-card class="max-w-md">
      <scsc-heading [level]="3" [visualLevel]="5">Documents</scsc-heading>
      <scsc-list class="mt-2" [divided]="false">
        <li class="text-sm">Motion to compel further responses (8 pages)</li>
        <li class="text-sm">Declaration of Rafael Delgado (3 pages)</li>
      </scsc-list>

      <scsc-divider />

      <scsc-heading [level]="3" [visualLevel]="5">Service</scsc-heading>
      <scsc-text size="sm" class="mt-2 block">
        Electronic service on Pacific Transit Authority, by counsel.
      </scsc-text>

      <scsc-divider />

      <div class="flex items-baseline justify-between">
        <scsc-heading [level]="3" [visualLevel]="5">Fees</scsc-heading>
        <scsc-text bold tnum>$60.00</scsc-text>
      </div>
    </scsc-card>
  \`,
})
export class DividerReviewDemo {}
`,html:`<!-- Each section keeps its own heading; the divider only adds the visual break. -->
<scsc-card class="max-w-md">
  <scsc-heading [level]="3" [visualLevel]="5">Documents</scsc-heading>
  <scsc-list class="mt-2" [divided]="false">
    <li class="text-sm">Motion to compel further responses (8 pages)</li>
    <li class="text-sm">Declaration of Rafael Delgado (3 pages)</li>
  </scsc-list>

  <scsc-divider />

  <scsc-heading [level]="3" [visualLevel]="5">Service</scsc-heading>
  <scsc-text size="sm" class="mt-2 block">
    Electronic service on Pacific Transit Authority, by counsel.
  </scsc-text>

  <scsc-divider />

  <div class="flex items-baseline justify-between">
    <scsc-heading [level]="3" [visualLevel]="5">Fees</scsc-heading>
    <scsc-text bold tnum>$60.00</scsc-text>
  </div>
</scsc-card>
`},"divider-vertical":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDivider } from '@scscourt/design';

@Component({
  selector: 'app-divider-vertical-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDivider],
  template: \`
    <div class="flex h-24 max-w-md items-stretch">
      <div class="flex flex-1 flex-col justify-center text-sm">
        <p class="font-medium">Plaintiff</p>
        <p class="text-base-content/70">Maria Alvarez</p>
      </div>
      <scsc-divider [vertical]="true" />
      <div class="flex flex-1 flex-col justify-center text-sm">
        <p class="font-medium">Defendant</p>
        <p class="text-base-content/70">Northgate Properties LLC</p>
      </div>
    </div>
  \`,
})
export class DividerVerticalDemo {}
`,html:`<div class="flex h-24 max-w-md items-stretch">
  <div class="flex flex-1 flex-col justify-center text-sm">
    <p class="font-medium">Plaintiff</p>
    <p class="text-base-content/70">Maria Alvarez</p>
  </div>
  <scsc-divider [vertical]="true" />
  <div class="flex flex-1 flex-col justify-center text-sm">
    <p class="font-medium">Defendant</p>
    <p class="text-base-content/70">Northgate Properties LLC</p>
  </div>
</div>
`}};var A={slug:`divider`,name:`Divider`,classes:[`ScscDivider`],category:`Layout`,whenToUse:[`Separate two blocks that sit in the same container when spacing alone is not enough — between alternatives ("OR"), between the sections of a summary, or before a footer row.`,"Inside `scsc-list`, `scsc-card` headers and tables the dividers are already there; do not add more.","`vertical` needs a flex row with a set height; the rule fills the row."],demos:[{id:`divider-basic`,title:`Horizontal`,description:`Plain and labelled. Projected text is centred on the line.`,component:m,source:f[`divider-basic`]},{id:`divider-vertical`,title:`Vertical`,description:'`[vertical]="true"` inside a flex row.',component:p,source:f[`divider-vertical`]},{id:`divider-review`,title:`Between summary sections`,description:`A filing review card: each section keeps its own heading and the dividers only add the visual break.`,component:v,source:f[`divider-review`]}],a11y:['A bare divider is `role="separator"` (with `aria-orientation="vertical"` when vertical), so screen readers can announce a boundary.',`A divider with text ("OR") drops the role and is plain text, because a separator hides its content from assistive tech.`,`Do not use a divider as the only cue between sections — the sections still need headings (third demo).`],aria:['`role="separator"` and `aria-orientation` only when the divider has no text.'],related:[`layout-primitives`,`card`,`list`]};export{A as DIVIDER_DOCS};