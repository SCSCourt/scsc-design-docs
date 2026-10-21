import{At as NP,Go as g,Hs as y_,I as EP,Lo as d_,Mr as jn,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,ka as Ig,kt as NE,ms as nu,pi as sn,po as X,ra as Af,t as $E,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var m={"card-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-card-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscText],
  template: \`
    <div class="grid max-w-3xl gap-4 sm:grid-cols-2">
      <scsc-card title="Next hearing">
        <p class="text-sm">Case Management Conference</p>
        <scsc-text size="sm" tone="muted" tnum class="mt-1 block">
          Wed, Oct 14, 2026 \xB7 9:00 AM \xB7 Dept. 21
        </scsc-text>
      </scsc-card>
      <!-- Without a title the card is a plain bordered surface. -->
      <scsc-card>
        <scsc-text size="sm" tone="muted">Balance due on 24CV012345</scsc-text>
        <p class="mt-1 text-2xl font-semibold tnum">$435.00</p>
        <scsc-text size="sm" tone="muted" class="mt-1 block">Pay by Oct 14, 2026</scsc-text>
      </scsc-card>
    </div>
  \`,
})
export class CardBasicDemo {}
`,html:`<div class="grid max-w-3xl gap-4 sm:grid-cols-2">
  <scsc-card title="Next hearing">
    <p class="text-sm">Case Management Conference</p>
    <scsc-text size="sm" tone="muted" tnum class="mt-1 block">
      Wed, Oct 14, 2026 \xB7 9:00 AM \xB7 Dept. 21
    </scsc-text>
  </scsc-card>
  <!-- Without a title the card is a plain bordered surface. -->
  <scsc-card>
    <scsc-text size="sm" tone="muted">Balance due on 24CV012345</scsc-text>
    <p class="mt-1 text-2xl font-semibold tnum">$435.00</p>
    <scsc-text size="sm" tone="muted" class="mt-1 block">Pay by Oct 14, 2026</scsc-text>
  </scsc-card>
</div>
`},"card-flush":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBadge, ScscCard, ScscList } from '@scscourt/design';

interface Filing {
  id: number;
  title: string;
  filed: string;
  pages: number;
}

@Component({
  selector: 'app-card-flush-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscCard, ScscList],
  template: \`
    <scsc-card title="Recent filings" flush class="max-w-md">
      <scsc-list>
        @for (doc of filings; track doc.id) {
          <li class="flex items-center justify-between gap-4 px-5 py-3">
            <div>
              <p class="text-sm font-medium">{{ doc.title }}</p>
              <p class="text-xs tnum text-base-content/70">Filed {{ doc.filed }}</p>
            </div>
            <scsc-badge tone="neutral" soft size="sm">{{ doc.pages }} pp.</scsc-badge>
          </li>
        }
      </scsc-list>
    </scsc-card>
  \`,
})
export class CardFlushDemo {
  protected readonly filings: Filing[] = [
    { id: 1, title: 'Notice of Hearing', filed: '2026-09-22', pages: 2 },
    { id: 2, title: 'Proof of Service', filed: '2026-09-19', pages: 1 },
    { id: 3, title: 'Case Management Statement', filed: '2026-09-15', pages: 6 },
  ];
}
`,html:`<scsc-card title="Recent filings" flush class="max-w-md">
  <scsc-list>
    @for (doc of filings; track doc.id) {
      <li class="flex items-center justify-between gap-4 px-5 py-3">
        <div>
          <p class="text-sm font-medium">{{ doc.title }}</p>
          <p class="text-xs tnum text-base-content/70">Filed {{ doc.filed }}</p>
        </div>
        <scsc-badge tone="neutral" soft size="sm">{{ doc.pages }} pp.</scsc-badge>
      </li>
    }
  </scsc-list>
</scsc-card>
`},"card-link":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscText } from '@scscourt/design';

interface Hearing {
  caseNumber: string;
  title: string;
  when: string;
  dept: string;
}

@Component({
  selector: 'app-card-link-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscText],
  template: \`
    <ul role="list" class="grid gap-4 sm:grid-cols-2">
      @for (h of hearings; track h.caseNumber) {
        <li>
          <!-- The title is the one link; a click anywhere on the card follows it. -->
          <scsc-card [title]="h.caseNumber + ' \xB7 ' + h.title" link=".">
            <scsc-text size="sm" tnum>{{ h.when }}</scsc-text>
            <scsc-text size="sm" tone="muted">{{ h.dept }}</scsc-text>
            <!-- Controls inside the card stay separate and clickable above the link. -->
            <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
              <scsc-button variant="ghost" size="sm" (click)="remind(h)"
                >Email me a reminder</scsc-button
              >
            </div>
          </scsc-card>
        </li>
      }
    </ul>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class CardLinkDemo {
  protected readonly hearings: Hearing[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Properties',
      when: 'Tue, Oct 14, 2026 \xB7 9:00 AM',
      dept: 'Department 6 \xB7 Downtown Superior Court',
    },
    {
      caseNumber: '24FL003210',
      title: 'In re Marriage of Nguyen',
      when: 'Thu, Oct 16, 2026 \xB7 1:30 PM',
      dept: 'Department 12 \xB7 Family Justice Center',
    },
  ];
  protected readonly status = signal('');

  protected remind(h: Hearing): void {
    this.status.set(\`Reminder set for \${h.caseNumber}.\`);
  }
}
`,html:`<ul role="list" class="grid gap-4 sm:grid-cols-2">
  @for (h of hearings; track h.caseNumber) {
    <li>
      <!-- The title is the one link; a click anywhere on the card follows it. -->
      <scsc-card [title]="h.caseNumber + ' \xB7 ' + h.title" link=".">
        <scsc-text size="sm" tnum>{{ h.when }}</scsc-text>
        <scsc-text size="sm" tone="muted">{{ h.dept }}</scsc-text>
        <!-- Controls inside the card stay separate and clickable above the link. -->
        <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
          <scsc-button variant="ghost" size="sm" (click)="remind(h)"
            >Email me a reminder</scsc-button
          >
        </div>
      </scsc-card>
    </li>
  }
</ul>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"card-slots":{ts:`import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBadge,
  ScscButton,
  ScscButtonLink,
  ScscCard,
  ScscDescriptionList,
  type ScscDescriptionItem,
} from '@scscourt/design';

@Component({
  selector: 'app-card-slots-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscBadge, ScscButton, ScscButtonLink, ScscCard, ScscDescriptionList],
  template: \`
    <scsc-card title="Alvarez v. Northgate" class="max-w-md">
      <scsc-badge slot="header" tone="success" soft size="sm">Active</scsc-badge>
      <scsc-description-list [items]="details" />
      <div slot="footer" class="flex justify-end gap-2 border-t border-base-300 scsc-pad-card">
        <!-- Print acts on the page; Open case navigates, so it is a link. -->
        <scsc-button variant="ghost" size="sm" (click)="print()">Print</scsc-button>
        <a scsc-button size="sm" routerLink=".">Open case</a>
      </div>
    </scsc-card>
  \`,
})
export class CardSlotsDemo {
  private readonly doc = inject(DOCUMENT);

  protected readonly details: ScscDescriptionItem[] = [
    { term: 'Case number', value: '24CV012345', numeric: true },
    { term: 'Filed', value: 'Mar 12, 2024', numeric: true },
    { term: 'Department', value: '21' },
    { term: 'Judicial officer', value: 'Hon. R. Whitfield' },
  ];

  protected print(): void {
    this.doc.defaultView?.print();
  }
}
`,html:`<scsc-card title="Alvarez v. Northgate" class="max-w-md">
  <scsc-badge slot="header" tone="success" soft size="sm">Active</scsc-badge>
  <scsc-description-list [items]="details" />
  <div slot="footer" class="flex justify-end gap-2 border-t border-base-300 scsc-pad-card">
    <!-- Print acts on the page; Open case navigates, so it is a link. -->
    <scsc-button variant="ghost" size="sm" (click)="print()">Print</scsc-button>
    <a scsc-button size="sm" routerLink=".">Open case</a>
  </div>
</scsc-card>
`}};var y=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-card-basic-demo`]],decls:13,vars:0,consts:[[1,`grid`,`max-w-3xl`,`gap-4`,`sm:grid-cols-2`],[`title`,`Next hearing`],[1,`text-sm`],[`size`,`sm`,`tone`,`muted`,`tnum`,``,1,`mt-1`,`block`],[`size`,`sm`,`tone`,`muted`],[1,`mt-1`,`text-2xl`,`font-semibold`,`tnum`],[`size`,`sm`,`tone`,`muted`,1,`mt-1`,`block`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-card`,1)(2,`p`,2),G_(3,`Case Management Conference`),Lf(),Ga(4,`scsc-text`,3),G_(5,` Wed, Oct 14, 2026 · 9:00 AM · Dept. 21 `),Lf()(),Ga(6,`scsc-card`)(7,`scsc-text`,4),G_(8,`Balance due on 24CV012345`),Lf(),Ga(9,`p`,5),G_(10,`$435.00`),Lf(),Ga(11,`scsc-text`,6),G_(12,`Pay by Oct 14, 2026`),Lf()()())},dependencies:[mN,NE],encapsulation:2})};var R=(a,c)=>c.id;function V(a,c){if(a&1&&(Ga(0,`li`,1)(1,`div`)(2,`p`,2),G_(3),Lf(),Ga(4,`p`,3),G_(5),Lf()(),Ga(6,`scsc-badge`,4),G_(7),Lf()()),a&2){let e=c.$implicit;Jb(3),nD(e.title),Jb(2),$f(`Filed `,e.filed),Jb(2),$f(``,e.pages,` pp.`)}}var C=class a{filings=[{id:1,title:`Notice of Hearing`,filed:`2026-09-22`,pages:2},{id:2,title:`Proof of Service`,filed:`2026-09-19`,pages:1},{id:3,title:`Case Management Statement`,filed:`2026-09-15`,pages:6}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-card-flush-demo`]],decls:4,vars:0,consts:[[`title`,`Recent filings`,`flush`,``,1,`max-w-md`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`px-5`,`py-3`],[1,`text-sm`,`font-medium`],[1,`text-xs`,`tnum`,`text-base-content/70`],[`tone`,`neutral`,`soft`,``,`size`,`sm`]],template:function(e,r){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-list`),o_(2,V,8,3,`li`,1,R),Lf()()),e&2&&(Jb(2),i_(r.filings))},dependencies:[jn,mN,EP],encapsulation:2})};var H=(a,c)=>c.caseNumber;function $(a,c){if(a&1){let e=d_();Ga(0,`li`)(1,`scsc-card`,2)(2,`scsc-text`,3),G_(3),Lf(),Ga(4,`scsc-text`,4),G_(5),Lf(),Ga(6,`div`,5)(7,`scsc-button`,6),lc(`click`,function(){let N=Eg(e).$implicit,I=y_();return Ig(I.remind(N))}),G_(8,`Email me a reminder`),Lf()()()()}if(a&2){let e=c.$implicit;Jb(),Pv(`title`,e.caseNumber+` · `+e.title),Jb(2),nD(e.when),Jb(2),nD(e.dept)}}var v=class a{hearings=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`,when:`Tue, Oct 14, 2026 · 9:00 AM`,dept:`Department 6 · Downtown Superior Court`},{caseNumber:`24FL003210`,title:`In re Marriage of Nguyen`,when:`Thu, Oct 16, 2026 · 1:30 PM`,dept:`Department 12 · Family Justice Center`}];status=q(``);remind(c){this.status.set(`Reminder set for ${c.caseNumber}.`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-card-link-demo`]],decls:5,vars:1,consts:[[`role`,`list`,1,`grid`,`gap-4`,`sm:grid-cols-2`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`],[`link`,`.`,3,`title`],[`size`,`sm`,`tnum`,``],[`size`,`sm`,`tone`,`muted`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[`variant`,`ghost`,`size`,`sm`,3,`click`]],template:function(e,r){e&1&&(Ga(0,`ul`,0),o_(1,$,9,3,`li`,null,H),Lf(),Ga(3,`p`,1),G_(4),Lf()),e&2&&(Jb(),i_(r.hearings),Jb(3),nD(r.status()))},dependencies:[sn,mN,NE],encapsulation:2})};var S=class a{doc=g(X);details=[{term:`Case number`,value:`24CV012345`,numeric:!0},{term:`Filed`,value:`Mar 12, 2024`,numeric:!0},{term:`Department`,value:`21`},{term:`Judicial officer`,value:`Hon. R. Whitfield`}];print(){this.doc.defaultView?.print()}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-card-slots-demo`]],decls:9,vars:1,consts:[[`title`,`Alvarez v. Northgate`,1,`max-w-md`],[`slot`,`header`,`tone`,`success`,`soft`,``,`size`,`sm`],[3,`items`],[`slot`,`footer`,1,`flex`,`justify-end`,`gap-2`,`border-t`,`border-base-300`,`scsc-pad-card`],[`variant`,`ghost`,`size`,`sm`,3,`click`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`.`]],template:function(e,r){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-badge`,1),G_(2,`Active`),Lf(),uc(3,`scsc-description-list`,2),Ga(4,`div`,3)(5,`scsc-button`,4),lc(`click`,function(){return r.print()}),G_(6,`Print`),Lf(),Ga(7,`a`,5),G_(8,`Open case`),Lf()()()),e&2&&(Jb(3),Pv(`items`,r.details))},dependencies:[nu,jn,sn,$E,mN,NP],encapsulation:2})};var me={slug:`card`,name:`Card`,classes:[`ScscCard`],category:`Layout`,whenToUse:[`Group one thing (a hearing, a party, a summary) on its own surface. Cards on a page should be the same width in a grid; avoid nesting cards.`,"`title` gives a bordered header; `[slot=header]` adds content beside it (a badge, a small action) and also works on its own, without a `title`.","`[slot=footer]` is unpadded so a bordered actions row can run edge to edge; `flush` removes the body padding for lists and tables.","For a whole page section with a heading, use the `scsc-section` layout primitive instead of a card."],demos:[{id:`card-basic`,title:`Title and body`,description:"With a `title` (an `<h3>` header by default; `headingLevel` changes the rank) and without one, as a plain surface for a single figure.",component:y,source:m[`card-basic`]},{id:`card-slots`,title:`Header and footer slots`,description:"A badge beside the title, a description list in the body, and a footer with an in-page action (`scsc-button`) and a link (`a[scsc-button]`).",component:S,source:m[`card-slots`]},{id:`card-flush`,title:`Flush body`,description:"`flush` lets a list run to the card edge; the rows carry their own padding.",component:C,source:m[`card-flush`]},{id:`card-link`,title:`Clickable card`,description:"`link` (a route) or `href` (a URL) makes the title a link whose stretched `::after` covers the card; the footer button stays its own control above it.",component:v,source:m[`card-link`]}],a11y:["`title` renders as an `<h3>` by default. Set `headingLevel` (2–6) to fit the page outline: `2` when the cards sit directly under the page `<h1>`, `4` under an `<h3>` section. The look does not change.","Do not put a click handler on a card. To make the whole card open something, set `link` or `href`: the title becomes the only link, named by the title, and its `::after` stretches over the card, so pointer users can click anywhere while keyboard and screen-reader users meet one link instead of a wall of nested content.","Nothing interactive is nested inside the link. Buttons, links and form controls in the card are lifted above the stretched area (`position: relative; z-index: 1`) and stay separate tab stops. Text in a linked card cannot be selected with the mouse; keep long, copyable text out of clickable cards."],appMustProvide:['A `title` for a clickable card (`link`/`href` need one): it is the link text, so make it unique on the page ("24CV012345 · Alvarez v. Northgate", not "View").'],related:[`layout-primitives`,`page-structure`,`list`,`description-list`]};export{me as CARD_DOCS};