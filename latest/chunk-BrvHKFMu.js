import{Fr as kn,Na as Jb,Ss as rD,Vr as mN,Xa as Pv,Zo as i_,_s as o_,ds as nD,kt as NE,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var m=class c{static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-heading-display-demo`]],decls:10,vars:2,consts:[[1,`flex`,`flex-col`,`gap-1`],[`display`,``,3,`level`],[`tone`,`muted`,`size`,`lg`],[1,`mt-8`,`flex`,`flex-col`,`gap-1`],[`tone`,`muted`]],template:function(e,u){e&1&&(Ga(0,`div`,0)(1,`scsc-heading`,1),G_(2,`Superior Court of California`),Lf(),Ga(3,`scsc-text`,2),G_(4,`County of Santa Clara`),Lf()(),Ga(5,`div`,3)(6,`scsc-heading`,1),G_(7,`Tentative Rulings`),Lf(),Ga(8,`scsc-text`,4),G_(9,`Department 6 · Hon. Maria Delgado · Thursday, 17 Jul 2025`),Lf()()),e&2&&(Jb(),Pv(`level`,1),Jb(5),Pv(`level`,2))},dependencies:[kn,NE],encapsulation:2})};var g=class c{static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-heading-scale-demo`]],decls:13,vars:6,consts:[[1,`flex`,`flex-col`,`gap-3`],[3,`level`]],template:function(e,u){e&1&&(Ga(0,`div`,0)(1,`scsc-heading`,1),G_(2,`Heading 1 — Civil Division`),Lf(),Ga(3,`scsc-heading`,1),G_(4,`Heading 2 — Upcoming hearings`),Lf(),Ga(5,`scsc-heading`,1),G_(6,`Heading 3 — Department 6`),Lf(),Ga(7,`scsc-heading`,1),G_(8,`Heading 4 — Motion for summary judgment`),Lf(),Ga(9,`scsc-heading`,1),G_(10,`Heading 5 — Filed by defendant`),Lf(),Ga(11,`scsc-heading`,1),G_(12,`Eyebrow — Case 24CV012345`),Lf()()),e&2&&(Jb(),Pv(`level`,1),Jb(2),Pv(`level`,2),Jb(2),Pv(`level`,3),Jb(2),Pv(`level`,4),Jb(2),Pv(`level`,5),Jb(2),Pv(`level`,6))},dependencies:[kn],encapsulation:2})};var H=(c,l)=>l.caseNumber;function b(c,l){if(c&1&&(Ga(0,`scsc-card`)(1,`scsc-heading`,2),G_(2),Lf(),Ga(3,`scsc-text`,3),G_(4),Lf()()),c&2){let e=l.$implicit;Jb(),Pv(`level`,3)(`visualLevel`,5),Jb(),nD(e.title),Jb(2),rD(``,e.caseNumber,` · `,e.time)}}var p=class c{hearings=[{caseNumber:`24CV012345`,title:`Alvarez v. Pacific Transit`,time:`9:00 AM`},{caseNumber:`24CV009871`,title:`Kim v. Bayline Properties`,time:`10:30 AM`},{caseNumber:`23CV031002`,title:`Ortiz v. County of Santa Clara`,time:`1:30 PM`}];static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-heading-visual-level-demo`]],decls:5,vars:1,consts:[[3,`level`],[1,`mt-4`,`grid`,`gap-4`,`sm:grid-cols-3`],[3,`level`,`visualLevel`],[`size`,`sm`,`tone`,`muted`,`tnum`,``]],template:function(e,u){e&1&&(Ga(0,`scsc-heading`,0),G_(1,`Today's calendar`),Lf(),Ga(2,`div`,1),o_(3,b,5,5,`scsc-card`,null,H),Lf()),e&2&&(Pv(`level`,2),Jb(3),i_(u.hearings))},dependencies:[mN,kn,NE],encapsulation:2})};var h={"heading-display":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-heading-display-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscText],
  template: \`
    <!-- The serif display face is reserved for the court lockup and page titles. -->
    <div class="flex flex-col gap-1">
      <scsc-heading [level]="1" display>Superior Court of California</scsc-heading>
      <scsc-text tone="muted" size="lg">County of Santa Clara</scsc-text>
    </div>
    <div class="mt-8 flex flex-col gap-1">
      <scsc-heading [level]="2" display>Tentative Rulings</scsc-heading>
      <scsc-text tone="muted">Department 6 \xB7 Hon. Maria Delgado \xB7 Thursday, 17 Jul 2025</scsc-text>
    </div>
  \`,
})
export class HeadingDisplayDemo {}
`,html:`<!-- The serif display face is reserved for the court lockup and page titles. -->
<div class="flex flex-col gap-1">
  <scsc-heading [level]="1" display>Superior Court of California</scsc-heading>
  <scsc-text tone="muted" size="lg">County of Santa Clara</scsc-text>
</div>
<div class="mt-8 flex flex-col gap-1">
  <scsc-heading [level]="2" display>Tentative Rulings</scsc-heading>
  <scsc-text tone="muted">Department 6 \xB7 Hon. Maria Delgado \xB7 Thursday, 17 Jul 2025</scsc-text>
</div>
`},"heading-scale":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading } from '@scscourt/design';

@Component({
  selector: 'app-heading-scale-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading],
  template: \`
    <div class="flex flex-col gap-3">
      <scsc-heading [level]="1">Heading 1 \u2014 Civil Division</scsc-heading>
      <scsc-heading [level]="2">Heading 2 \u2014 Upcoming hearings</scsc-heading>
      <scsc-heading [level]="3">Heading 3 \u2014 Department 6</scsc-heading>
      <scsc-heading [level]="4">Heading 4 \u2014 Motion for summary judgment</scsc-heading>
      <scsc-heading [level]="5">Heading 5 \u2014 Filed by defendant</scsc-heading>
      <scsc-heading [level]="6">Eyebrow \u2014 Case 24CV012345</scsc-heading>
    </div>
  \`,
})
export class HeadingScaleDemo {}
`,html:`<div class="flex flex-col gap-3">
  <scsc-heading [level]="1">Heading 1 \u2014 Civil Division</scsc-heading>
  <scsc-heading [level]="2">Heading 2 \u2014 Upcoming hearings</scsc-heading>
  <scsc-heading [level]="3">Heading 3 \u2014 Department 6</scsc-heading>
  <scsc-heading [level]="4">Heading 4 \u2014 Motion for summary judgment</scsc-heading>
  <scsc-heading [level]="5">Heading 5 \u2014 Filed by defendant</scsc-heading>
  <scsc-heading [level]="6">Eyebrow \u2014 Case 24CV012345</scsc-heading>
</div>
`},"heading-visual-level":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscHeading, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-heading-visual-level-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscHeading, ScscText],
  template: \`
    <!-- Semantics stay in order (h2 \u2192 h3) while the cards use a smaller visual size. -->
    <scsc-heading [level]="2">Today's calendar</scsc-heading>
    <div class="mt-4 grid gap-4 sm:grid-cols-3">
      @for (h of hearings; track h.caseNumber) {
        <scsc-card>
          <scsc-heading [level]="3" [visualLevel]="5">{{ h.title }}</scsc-heading>
          <scsc-text size="sm" tone="muted" tnum>{{ h.caseNumber }} \xB7 {{ h.time }}</scsc-text>
        </scsc-card>
      }
    </div>
  \`,
})
export class HeadingVisualLevelDemo {
  protected readonly hearings = [
    { caseNumber: '24CV012345', title: 'Alvarez v. Pacific Transit', time: '9:00 AM' },
    { caseNumber: '24CV009871', title: 'Kim v. Bayline Properties', time: '10:30 AM' },
    { caseNumber: '23CV031002', title: 'Ortiz v. County of Santa Clara', time: '1:30 PM' },
  ];
}
`,html:`<!-- Semantics stay in order (h2 \u2192 h3) while the cards use a smaller visual size. -->
<scsc-heading [level]="2">Today's calendar</scsc-heading>
<div class="mt-4 grid gap-4 sm:grid-cols-3">
  @for (h of hearings; track h.caseNumber) {
    <scsc-card>
      <scsc-heading [level]="3" [visualLevel]="5">{{ h.title }}</scsc-heading>
      <scsc-text size="sm" tone="muted" tnum>{{ h.caseNumber }} \xB7 {{ h.time }}</scsc-text>
    </scsc-card>
  }
</div>
`}};var A={slug:`heading`,name:`Heading`,classes:[`ScscHeading`],category:`Primitives`,whenToUse:["Every heading on a page: `level` sets the real `<h1>`–`<h6>` element so the outline is meaningful.","Pick `level` by document structure, then use `visualLevel` when the design wants a different size (card titles that are semantically `h3` but look like `h5`).","`display` switches to the serif court face; reserve it for the masthead lockup and page titles, never for section headings.",`Level 6 renders as an uppercase eyebrow; use it for short labels above a title, not as a sixth outline level.`],demos:[{id:`heading-scale`,title:`Scale`,description:`The six sans-serif levels. Level 6 is the eyebrow style.`,component:g,source:h[`heading-scale`]},{id:`heading-display`,title:`Display`,description:"`display` uses the serif face in navy for court and page titles.",component:m,source:h[`heading-display`]},{id:`heading-visual-level`,title:`Semantic vs. visual level`,description:"Cards keep `level=3` under the page's `h2` while rendering at the size of level 5.",component:p,source:h[`heading-visual-level`]}],a11y:["Renders a real `<h1>`–`<h6>`; screen-reader users navigate by heading, so keep `level` in document order without skipping.","`visualLevel` changes only classes, never the element, so styling choices cannot break the outline.","One `h1` per page. Shells and page headers typically own it; use `level=2` for the first heading inside content."],related:[`text`,`prose`,`page-structure`,`divider`]};export{A as HEADING_DOCS};