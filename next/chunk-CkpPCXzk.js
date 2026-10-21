import{Na as Jb,Zo as i_,_s as o_,ds as nD,kt as NE,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var l=class n{static ɵfac=function(s){return new(s||n)};static ɵcmp=Af({type:n,selectors:[[`app-text-sizes-demo`]],decls:14,vars:0,consts:[[1,`flex`,`flex-col`,`gap-2`],[`size`,`lg`],[`size`,`md`],[`size`,`sm`],[`size`,`xs`],[1,`mt-4`,`flex`,`flex-col`,`gap-2`],[`bold`,``],[`size`,`sm`,`tone`,`muted`,`bold`,``]],template:function(s,u){s&1&&(Ga(0,`div`,0)(1,`scsc-text`,1),G_(2,`Large — Order granting motion to compel`),Lf(),Ga(3,`scsc-text`,2),G_(4,`Medium — Order granting motion to compel`),Lf(),Ga(5,`scsc-text`,3),G_(6,`Small — Order granting motion to compel`),Lf(),Ga(7,`scsc-text`,4),G_(8,`Extra small — Order granting motion to compel`),Lf()(),Ga(9,`div`,5)(10,`scsc-text`,6),G_(11,`Bold — Filing deadline: 5 business days`),Lf(),Ga(12,`scsc-text`,7),G_(13,`Bold, small, muted — DEPT. 6`),Lf()())},dependencies:[NE],encapsulation:2})};var b=(n,i)=>i.caseNumber;function T(n,i){if(n&1&&(Ga(0,`scsc-text`,1),G_(1),Lf(),Ga(2,`scsc-text`,2),G_(3),Lf(),Ga(4,`scsc-text`,3),G_(5),Lf()),n&2){let s=i.$implicit;Jb(),nD(s.caseNumber),Jb(2),nD(s.description),Jb(2),nD(s.amount)}}var d=class n{fees=[{caseNumber:`24CV012345`,description:`First paper filing fee`,amount:`$435.00`},{caseNumber:`24CV009871`,description:`Motion fee`,amount:`$60.00`},{caseNumber:`23PR001876`,description:`Petition for probate`,amount:`$1,197.50`},{caseNumber:`24SC000418`,description:`Small claims filing`,amount:`$30.00`}];static ɵfac=function(s){return new(s||n)};static ɵcmp=Af({type:n,selectors:[[`app-text-tnum-demo`]],decls:3,vars:0,consts:[[1,`grid`,`max-w-md`,`grid-cols-[auto_1fr_auto]`,`gap-x-6`,`gap-y-1`],[`tnum`,``],[`tone`,`muted`],[`tnum`,``,`bold`,``,1,`text-right`]],template:function(s,u){s&1&&(Ga(0,`div`,0),o_(1,T,6,3,null,null,b),Lf()),s&2&&(Jb(),i_(u.fees))},dependencies:[NE],encapsulation:2})};var p=class n{static ɵfac=function(s){return new(s||n)};static ɵcmp=Af({type:n,selectors:[[`app-text-tones-demo`]],decls:9,vars:0,consts:[[1,`flex`,`flex-col`,`gap-2`],[`tone`,`muted`],[`tone`,`primary`],[`tone`,`error`]],template:function(s,u){s&1&&(Ga(0,`div`,0)(1,`scsc-text`),G_(2,`Default — The hearing is set for 14 Jul 2025 in Department 6.`),Lf(),Ga(3,`scsc-text`,1),G_(4,`Muted — Last updated by the clerk on 2 Jul 2025.`),Lf(),Ga(5,`scsc-text`,2),G_(6,`Primary — Tentative ruling posted.`),Lf(),Ga(7,`scsc-text`,3),G_(8,`Error — Proof of service has not been filed.`),Lf()())},dependencies:[NE],encapsulation:2})};var x={"text-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscText } from '@scscourt/design';

@Component({
  selector: 'app-text-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText],
  template: \`
    <div class="flex flex-col gap-2">
      <scsc-text size="lg">Large \u2014 Order granting motion to compel</scsc-text>
      <scsc-text size="md">Medium \u2014 Order granting motion to compel</scsc-text>
      <scsc-text size="sm">Small \u2014 Order granting motion to compel</scsc-text>
      <scsc-text size="xs">Extra small \u2014 Order granting motion to compel</scsc-text>
    </div>
    <div class="mt-4 flex flex-col gap-2">
      <scsc-text bold>Bold \u2014 Filing deadline: 5 business days</scsc-text>
      <scsc-text size="sm" tone="muted" bold>Bold, small, muted \u2014 DEPT. 6</scsc-text>
    </div>
  \`,
})
export class TextSizesDemo {}
`,html:`<div class="flex flex-col gap-2">
  <scsc-text size="lg">Large \u2014 Order granting motion to compel</scsc-text>
  <scsc-text size="md">Medium \u2014 Order granting motion to compel</scsc-text>
  <scsc-text size="sm">Small \u2014 Order granting motion to compel</scsc-text>
  <scsc-text size="xs">Extra small \u2014 Order granting motion to compel</scsc-text>
</div>
<div class="mt-4 flex flex-col gap-2">
  <scsc-text bold>Bold \u2014 Filing deadline: 5 business days</scsc-text>
  <scsc-text size="sm" tone="muted" bold>Bold, small, muted \u2014 DEPT. 6</scsc-text>
</div>
`},"text-tnum":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscText } from '@scscourt/design';

@Component({
  selector: 'app-text-tnum-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText],
  template: \`
    <!-- Tabular numerals give every digit the same width so columns of numbers line up. -->
    <div class="grid max-w-md grid-cols-[auto_1fr_auto] gap-x-6 gap-y-1">
      @for (f of fees; track f.caseNumber) {
        <scsc-text tnum>{{ f.caseNumber }}</scsc-text>
        <scsc-text tone="muted">{{ f.description }}</scsc-text>
        <scsc-text tnum bold class="text-right">{{ f.amount }}</scsc-text>
      }
    </div>
  \`,
})
export class TextTnumDemo {
  protected readonly fees = [
    { caseNumber: '24CV012345', description: 'First paper filing fee', amount: '$435.00' },
    { caseNumber: '24CV009871', description: 'Motion fee', amount: '$60.00' },
    { caseNumber: '23PR001876', description: 'Petition for probate', amount: '$1,197.50' },
    { caseNumber: '24SC000418', description: 'Small claims filing', amount: '$30.00' },
  ];
}
`,html:`<!-- Tabular numerals give every digit the same width so columns of numbers line up. -->
<div class="grid max-w-md grid-cols-[auto_1fr_auto] gap-x-6 gap-y-1">
  @for (f of fees; track f.caseNumber) {
    <scsc-text tnum>{{ f.caseNumber }}</scsc-text>
    <scsc-text tone="muted">{{ f.description }}</scsc-text>
    <scsc-text tnum bold class="text-right">{{ f.amount }}</scsc-text>
  }
</div>
`},"text-tones":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscText } from '@scscourt/design';

@Component({
  selector: 'app-text-tones-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText],
  template: \`
    <div class="flex flex-col gap-2">
      <scsc-text>Default \u2014 The hearing is set for 14 Jul 2025 in Department 6.</scsc-text>
      <scsc-text tone="muted">Muted \u2014 Last updated by the clerk on 2 Jul 2025.</scsc-text>
      <scsc-text tone="primary">Primary \u2014 Tentative ruling posted.</scsc-text>
      <scsc-text tone="error">Error \u2014 Proof of service has not been filed.</scsc-text>
    </div>
  \`,
})
export class TextTonesDemo {}
`,html:`<div class="flex flex-col gap-2">
  <scsc-text>Default \u2014 The hearing is set for 14 Jul 2025 in Department 6.</scsc-text>
  <scsc-text tone="muted">Muted \u2014 Last updated by the clerk on 2 Jul 2025.</scsc-text>
  <scsc-text tone="primary">Primary \u2014 Tentative ruling posted.</scsc-text>
  <scsc-text tone="error">Error \u2014 Proof of service has not been filed.</scsc-text>
</div>
`}};var _={slug:`text`,name:`Text`,classes:[`ScscText`],category:`Primitives`,whenToUse:[`Short runs of UI text — captions, metadata, helper lines, cell content — where you want the theme's tone and size tokens instead of raw utility classes.`,"Set `tnum` on anything numeric that sits in a column or is compared by eye: case numbers, fees, counts, times.","For long-form content with headings, lists and links use `scsc-prose`; for headings use `scsc-heading`.","It renders an inline element with no margins; wrap it in your own layout (`flex flex-col gap-2`)."],demos:[{id:`text-tones`,title:`Tones`,description:"`default`, `muted` for secondary detail, `primary` for navy emphasis, `error` for validation copy.",component:p,source:x[`text-tones`]},{id:`text-sizes`,title:`Sizes and weight`,description:"Four sizes; `bold` adds semi-bold weight and combines with any tone.",component:l,source:x[`text-sizes`]},{id:`text-tnum`,title:`Tabular numerals`,description:"`tnum` aligns digits so case numbers and amounts line up in a grid.",component:d,source:x[`text-tnum`]}],a11y:["Purely presentational: tone changes colour only, so pair `error` text with an icon or wording that conveys the state.","Every tone meets AA contrast on `base-100` in all three themes; `muted` is 70% of the body colour and stays above 4.5:1.","Keep body copy at `md`; use `xs` only for secondary labels, never for essential instructions."],related:[`heading`,`prose`,`directives`,`description-list`]};export{_ as TEXT_DOCS};