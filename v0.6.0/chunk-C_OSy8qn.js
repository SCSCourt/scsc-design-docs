import{Gt as QN,H as FN,Hs as y_,Ma as JT,Ms as uc,Na as Jb,St as Ln,Xa as Pv,Zi as za,cs as lc,kn as XF,ks as t_,ms as nu,pi as sn,ra as Af,t as $E,ta as $f,un as UP,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function H(t,i){if(t&1&&(Ga(0,`p`,4),G_(1),Lf()),t&2){let e=y_();Jb(),$f(`Opened `,e.opened())}}var h=class t{opened=q(``);parties=[{name:`J.M.`,role:`Minor`},{name:`County Social Services Agency`,role:`Petitioner`},{name:`Dana Whitaker, Esq.`,role:`Attorney`,representing:`for the Minor`}];docket=[{date:`2024-06-18`,event:`Petition filed (WIC § 300)`,filedBy:`Petitioner`,documentId:`jd-1`},{date:`2024-06-20`,event:`Detention hearing held`,filedBy:`Court`},{date:`2026-09-02`,event:`Status review report`,filedBy:`Petitioner`,documentId:`jd-2`}];documents=[{name:`Status review report.pdf`,date:`2026-09-02`,type:`Report`,documentId:`jd-2`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-file-confidential-demo`]],decls:7,vars:4,consts:[[1,`flex`,`flex-col`,`gap-4`],[`status`,`error`,`title`,`Confidential case`],[`title`,`In re J.M., a Minor`,`caseNumber`,`24JD000517`,`status`,`sealed`,`caseType`,`Juvenile — Dependency`,`filed`,`2024-06-18`,3,`viewDocument`,`parties`,`docket`,`documents`],[`slot`,`actions`,`size`,`sm`,`variant`,`neutral`,`outline`,``],[`aria-live`,`polite`,1,`text-sm`,`text-base-content/70`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-alert`,1),G_(2,` Juvenile dependency records are confidential (WIC § 827). Your access is logged; do not share or print without an order. `),Lf(),Ga(3,`scsc-case-file`,2),lc(`viewDocument`,function(E){return a.opened.set(E)}),Ga(4,`scsc-button`,3),G_(5,`Request access log`),Lf()(),JT(6,H,2,1,`p`,4),Lf()),e&2&&(Jb(3),Pv(`parties`,a.parties)(`docket`,a.docket)(`documents`,a.documents),Jb(3),t_(a.opened()?6:-1))},dependencies:[za,sn,UP],encapsulation:2})};var b=class t{parties=[{name:`Grace Chen`,role:`Plaintiff`},{name:`Baylands Logistics, Inc.`,role:`Defendant`}];hearings=[{type:`Demurrer`,datetime:`Oct 6, 2026 · 9:00 AM`,department:`10`,judge:`Hon. L. Moreno`,location:`Downtown Superior Court`}];financials=[{label:`First appearance fee`,amount:`$435.00`},{label:`Balance due`,amount:`$0.00`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-file-dark-demo`]],decls:2,vars:3,consts:[[`data-theme`,`scsc-design-dark`,1,`rounded-box`,`bg-base-100`,`p-4`,`text-base-content`],[`title`,`Chen v. Baylands Logistics, Inc.`,`caseNumber`,`24CV015502`,`status`,`active`,`caseType`,`Civil — Unlimited`,`filed`,`2024-08-01`,3,`parties`,`hearings`,`financials`]],template:function(e,a){e&1&&(Ga(0,`div`,0),uc(1,`scsc-case-file`,1),Lf()),e&2&&(Jb(),Pv(`parties`,a.parties)(`hearings`,a.hearings)(`financials`,a.financials))},dependencies:[UP],encapsulation:2})};var p={"case-file-confidential":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscAlert,
  ScscButton,
  ScscCaseFile,
  type ScscCaseDocument,
  type ScscDocketEntry,
  type ScscParty,
} from '@scscourt/design';

@Component({
  selector: 'app-case-file-confidential-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscCaseFile],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-alert status="error" title="Confidential case">
        Juvenile dependency records are confidential (WIC \xA7 827). Your access is logged; do not
        share or print without an order.
      </scsc-alert>
      <scsc-case-file
        title="In re J.M., a Minor"
        caseNumber="24JD000517"
        status="sealed"
        caseType="Juvenile \u2014 Dependency"
        filed="2024-06-18"
        [parties]="parties"
        [docket]="docket"
        [documents]="documents"
        (viewDocument)="opened.set($event)"
      >
        <scsc-button slot="actions" size="sm" variant="neutral" outline
          >Request access log</scsc-button
        >
      </scsc-case-file>
      @if (opened()) {
        <p class="text-sm text-base-content/70" aria-live="polite">Opened {{ opened() }}</p>
      }
    </div>
  \`,
})
export class CaseFileConfidentialDemo {
  protected readonly opened = signal('');
  protected readonly parties: ScscParty[] = [
    { name: 'J.M.', role: 'Minor' },
    { name: 'County Social Services Agency', role: 'Petitioner' },
    { name: 'Dana Whitaker, Esq.', role: 'Attorney', representing: 'for the Minor' },
  ];
  protected readonly docket: ScscDocketEntry[] = [
    {
      date: '2024-06-18',
      event: 'Petition filed (WIC \xA7 300)',
      filedBy: 'Petitioner',
      documentId: 'jd-1',
    },
    { date: '2024-06-20', event: 'Detention hearing held', filedBy: 'Court' },
    {
      date: '2026-09-02',
      event: 'Status review report',
      filedBy: 'Petitioner',
      documentId: 'jd-2',
    },
  ];
  protected readonly documents: ScscCaseDocument[] = [
    { name: 'Status review report.pdf', date: '2026-09-02', type: 'Report', documentId: 'jd-2' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-alert status="error" title="Confidential case">
    Juvenile dependency records are confidential (WIC \xA7 827). Your access is logged; do not
    share or print without an order.
  </scsc-alert>
  <scsc-case-file
    title="In re J.M., a Minor"
    caseNumber="24JD000517"
    status="sealed"
    caseType="Juvenile \u2014 Dependency"
    filed="2024-06-18"
    [parties]="parties"
    [docket]="docket"
    [documents]="documents"
    (viewDocument)="opened.set($event)"
  >
    <scsc-button slot="actions" size="sm" variant="neutral" outline
      >Request access log</scsc-button
    >
  </scsc-case-file>
  @if (opened()) {
    <p class="text-sm text-base-content/70" aria-live="polite">Opened {{ opened() }}</p>
  }
</div>
`},"case-file-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscCaseFile,
  type ScscFinancialLine,
  type ScscHearing,
  type ScscParty,
} from '@scscourt/design';

@Component({
  selector: 'app-case-file-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCaseFile],
  template: \`
    <div data-theme="scsc-design-dark" class="rounded-box bg-base-100 p-4 text-base-content">
      <scsc-case-file
        title="Chen v. Baylands Logistics, Inc."
        caseNumber="24CV015502"
        status="active"
        caseType="Civil \u2014 Unlimited"
        filed="2024-08-01"
        [parties]="parties"
        [hearings]="hearings"
        [financials]="financials"
      />
    </div>
  \`,
})
export class CaseFileDarkDemo {
  protected readonly parties: ScscParty[] = [
    { name: 'Grace Chen', role: 'Plaintiff' },
    { name: 'Baylands Logistics, Inc.', role: 'Defendant' },
  ];
  protected readonly hearings: ScscHearing[] = [
    {
      type: 'Demurrer',
      datetime: 'Oct 6, 2026 \xB7 9:00 AM',
      department: '10',
      judge: 'Hon. L. Moreno',
      location: 'Downtown Superior Court',
    },
  ];
  protected readonly financials: ScscFinancialLine[] = [
    { label: 'First appearance fee', amount: '$435.00' },
    { label: 'Balance due', amount: '$0.00' },
  ];
}
`,html:`<div data-theme="scsc-design-dark" class="rounded-box bg-base-100 p-4 text-base-content">
  <scsc-case-file
    title="Chen v. Baylands Logistics, Inc."
    caseNumber="24CV015502"
    status="active"
    caseType="Civil \u2014 Unlimited"
    filed="2024-08-01"
    [parties]="parties"
    [hearings]="hearings"
    [financials]="financials"
  />
</div>
`},"case-file-full":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscButton,
  ScscCaseFile,
  type ScscCaseDocument,
  type ScscDocketEntry,
  type ScscFinancialLine,
  type ScscHearing,
  type ScscParty,
} from '@scscourt/design';

@Component({
  selector: 'app-case-file-full-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCaseFile],
  template: \`
    <scsc-case-file
      title="Alvarez v. Northgate Property Mgmt."
      caseNumber="24CV012345"
      status="active"
      caseType="Civil \u2014 Unlimited"
      filed="2024-03-12"
      [parties]="parties"
      [docket]="docket"
      [hearings]="hearings"
      [documents]="documents"
      [financials]="financials"
    >
      <scsc-button slot="actions" variant="ghost" size="sm">Print</scsc-button>
      <scsc-button slot="actions" variant="primary" size="sm">New filing</scsc-button>
    </scsc-case-file>
  \`,
})
export class CaseFileFullDemo {
  protected readonly parties: ScscParty[] = [
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Northgate Property Management, Inc.', role: 'Defendant' },
    { name: 'Daniel Reyes, Esq.', role: 'Attorney', representing: 'for Plaintiff' },
    { name: 'Sandra Liu, Esq.', role: 'Attorney', representing: 'for Defendant' },
  ];

  protected readonly docket: ScscDocketEntry[] = [
    { date: '2024-03-12', event: 'Complaint filed', filedBy: 'Plaintiff', documentId: 'd1' },
    { date: '2024-03-13', event: 'Summons issued', filedBy: 'Clerk' },
    { date: '2024-04-09', event: 'Answer filed', filedBy: 'Defendant', documentId: 'd2' },
    {
      date: '2024-06-02',
      event: 'Motion to Compel discovery',
      filedBy: 'Plaintiff',
      documentId: 'd3',
    },
  ];

  protected readonly hearings: ScscHearing[] = [
    {
      type: 'Case Management Conference',
      datetime: 'Jul 14, 2026 \xB7 9:00 AM',
      department: '21',
      judge: 'Hon. R. Whitfield',
    },
    {
      type: 'Motion to Compel',
      datetime: 'Jul 28, 2026 \xB7 1:30 PM',
      department: '7',
      judge: 'Hon. L. Okafor',
    },
  ];

  protected readonly documents: ScscCaseDocument[] = [
    { name: 'Complaint.pdf', date: '2024-03-12', documentId: 'd1' },
    { name: 'Answer.pdf', date: '2024-04-09', documentId: 'd2' },
    { name: 'Motion to Compel.pdf', date: '2024-06-02', documentId: 'd3' },
  ];

  /** Amounts are pre-formatted display strings. */
  protected readonly financials: ScscFinancialLine[] = [
    { label: 'First appearance fee', amount: '$435.00' },
    { label: 'Motion fee', amount: '$60.00' },
    { label: 'Balance due', amount: '$0.00' },
  ];
}
`,html:`<scsc-case-file
  title="Alvarez v. Northgate Property Mgmt."
  caseNumber="24CV012345"
  status="active"
  caseType="Civil \u2014 Unlimited"
  filed="2024-03-12"
  [parties]="parties"
  [docket]="docket"
  [hearings]="hearings"
  [documents]="documents"
  [financials]="financials"
>
  <scsc-button slot="actions" variant="ghost" size="sm">Print</scsc-button>
  <scsc-button slot="actions" variant="primary" size="sm">New filing</scsc-button>
</scsc-case-file>
`},"case-file-minimal":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCaseFile, type ScscHearing, type ScscParty } from '@scscourt/design';

@Component({
  selector: 'app-case-file-minimal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCaseFile],
  template: \`
    <scsc-case-file
      title="In re Marriage of Chen"
      caseNumber="24FL004521"
      status="pending"
      caseType="Family Law"
      filed="2024-05-02"
      [parties]="parties"
      [hearings]="hearings"
    />
  \`,
})
export class CaseFileMinimalDemo {
  /** Only Parties and Hearings are supplied, so only those two tabs render. */
  protected readonly parties: ScscParty[] = [
    { name: 'Wei Chen', role: 'Petitioner' },
    { name: 'Li Chen', role: 'Respondent' },
  ];

  protected readonly hearings: ScscHearing[] = [
    {
      type: 'Status Conference',
      datetime: 'Aug 4, 2026 \xB7 8:30 AM',
      department: '76',
      judge: 'Hon. M. Delgado',
      location: 'Family Justice Center',
    },
  ];
}
`,html:`<scsc-case-file
  title="In re Marriage of Chen"
  caseNumber="24FL004521"
  status="pending"
  caseType="Family Law"
  filed="2024-05-02"
  [parties]="parties"
  [hearings]="hearings"
/>
`},"case-file-page":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBreadcrumb,
  ScscButtonLink,
  ScscCaseFile,
  ScscMasthead,
  ScscPageShell,
  ScscSkeleton,
  type ScscBreadcrumbItem,
  type ScscDocketEntry,
  type ScscHearing,
  type ScscParty,
} from '@scscourt/design';

interface CaseDetail {
  title: string;
  caseNumber: string;
  caseType: string;
  filed: string;
  parties: ScscParty[];
  docket: ScscDocketEntry[];
  hearings: ScscHearing[];
}

@Component({
  selector: 'app-case-file-page-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscBreadcrumb,
    ScscButtonLink,
    ScscCaseFile,
    ScscMasthead,
    ScscPageShell,
    ScscSkeleton,
  ],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California, County of Santa Clara"
        logoSrc="scsc-seal.png"
      />
      <scsc-breadcrumb [items]="trail" class="mb-3" />

      @if (detail(); as c) {
        <scsc-case-file
          [title]="c.title"
          [caseNumber]="c.caseNumber"
          status="active"
          [caseType]="c.caseType"
          [filed]="c.filed"
          [parties]="c.parties"
          [docket]="c.docket"
          [hearings]="c.hearings"
        >
          <a scsc-button slot="actions" size="sm" routerLink=".">E-file a document</a>
        </scsc-case-file>
      } @else {
        <!-- Skeletons are decorative; the status text says what is happening. -->
        <p class="sr-only" role="status">Loading case 24CV012345\u2026</p>
        <div class="flex flex-col gap-3">
          <scsc-skeleton width="8rem" />
          <scsc-skeleton width="60%" height="2rem" />
          <scsc-skeleton width="14rem" />
          <scsc-skeleton height="10rem" class="mt-4" />
        </div>
      }
    </scsc-page-shell>
  \`,
})
export class CaseFilePageDemo {
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Case search', link: '.' },
    { label: '24CV012345' },
  ];

  protected readonly detail = signal<CaseDetail | null>(null);

  constructor() {
    // Stand-in for the route resolver / HTTP call that loads the case.
    setTimeout(
      () =>
        this.detail.set({
          title: 'Alvarez v. Northgate Property Mgmt.',
          caseNumber: '24CV012345',
          caseType: 'Civil \u2014 Unlimited',
          filed: 'Mar 12, 2024',
          parties: [
            { name: 'Maria Alvarez', role: 'Plaintiff' },
            { name: 'Northgate Property Management, Inc.', role: 'Defendant' },
          ],
          docket: [
            { date: '2024-03-12', event: 'Complaint filed', filedBy: 'Plaintiff' },
            { date: '2024-04-09', event: 'Answer filed', filedBy: 'Defendant' },
          ],
          hearings: [
            {
              type: 'Case Management Conference',
              datetime: 'Oct 14, 2026 \xB7 9:00 AM',
              department: '21',
              judge: 'Hon. R. Whitfield',
            },
          ],
        }),
      900,
    );
  }
}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California, County of Santa Clara"
    logoSrc="scsc-seal.png"
  />
  <scsc-breadcrumb [items]="trail" class="mb-3" />

  @if (detail(); as c) {
    <scsc-case-file
      [title]="c.title"
      [caseNumber]="c.caseNumber"
      status="active"
      [caseType]="c.caseType"
      [filed]="c.filed"
      [parties]="c.parties"
      [docket]="c.docket"
      [hearings]="c.hearings"
    >
      <a scsc-button slot="actions" size="sm" routerLink=".">E-file a document</a>
    </scsc-case-file>
  } @else {
    <!-- Skeletons are decorative; the status text says what is happening. -->
    <p class="sr-only" role="status">Loading case 24CV012345\u2026</p>
    <div class="flex flex-col gap-3">
      <scsc-skeleton width="8rem" />
      <scsc-skeleton width="60%" height="2rem" />
      <scsc-skeleton width="14rem" />
      <scsc-skeleton height="10rem" class="mt-4" />
    </div>
  }
</scsc-page-shell>
`}};var v=class t{parties=[{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Northgate Property Management, Inc.`,role:`Defendant`},{name:`Daniel Reyes, Esq.`,role:`Attorney`,representing:`for Plaintiff`},{name:`Sandra Liu, Esq.`,role:`Attorney`,representing:`for Defendant`}];docket=[{date:`2024-03-12`,event:`Complaint filed`,filedBy:`Plaintiff`,documentId:`d1`},{date:`2024-03-13`,event:`Summons issued`,filedBy:`Clerk`},{date:`2024-04-09`,event:`Answer filed`,filedBy:`Defendant`,documentId:`d2`},{date:`2024-06-02`,event:`Motion to Compel discovery`,filedBy:`Plaintiff`,documentId:`d3`}];hearings=[{type:`Case Management Conference`,datetime:`Jul 14, 2026 · 9:00 AM`,department:`21`,judge:`Hon. R. Whitfield`},{type:`Motion to Compel`,datetime:`Jul 28, 2026 · 1:30 PM`,department:`7`,judge:`Hon. L. Okafor`}];documents=[{name:`Complaint.pdf`,date:`2024-03-12`,documentId:`d1`},{name:`Answer.pdf`,date:`2024-04-09`,documentId:`d2`},{name:`Motion to Compel.pdf`,date:`2024-06-02`,documentId:`d3`}];financials=[{label:`First appearance fee`,amount:`$435.00`},{label:`Motion fee`,amount:`$60.00`},{label:`Balance due`,amount:`$0.00`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-file-full-demo`]],decls:5,vars:5,consts:[[`title`,`Alvarez v. Northgate Property Mgmt.`,`caseNumber`,`24CV012345`,`status`,`active`,`caseType`,`Civil — Unlimited`,`filed`,`2024-03-12`,3,`parties`,`docket`,`hearings`,`documents`,`financials`],[`slot`,`actions`,`variant`,`ghost`,`size`,`sm`],[`slot`,`actions`,`variant`,`primary`,`size`,`sm`]],template:function(e,a){e&1&&(Ga(0,`scsc-case-file`,0)(1,`scsc-button`,1),G_(2,`Print`),Lf(),Ga(3,`scsc-button`,2),G_(4,`New filing`),Lf()()),e&2&&Pv(`parties`,a.parties)(`docket`,a.docket)(`hearings`,a.hearings)(`documents`,a.documents)(`financials`,a.financials)},dependencies:[sn,UP],encapsulation:2})};var D=class t{parties=[{name:`Wei Chen`,role:`Petitioner`},{name:`Li Chen`,role:`Respondent`}];hearings=[{type:`Status Conference`,datetime:`Aug 4, 2026 · 8:30 AM`,department:`76`,judge:`Hon. M. Delgado`,location:`Family Justice Center`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-file-minimal-demo`]],decls:1,vars:2,consts:[[`title`,`In re Marriage of Chen`,`caseNumber`,`24FL004521`,`status`,`pending`,`caseType`,`Family Law`,`filed`,`2024-05-02`,3,`parties`,`hearings`]],template:function(e,a){e&1&&uc(0,`scsc-case-file`,0),e&2&&Pv(`parties`,a.parties)(`hearings`,a.hearings)},dependencies:[UP],encapsulation:2})};function j(t,i){if(t&1&&(Ga(0,`scsc-case-file`,2)(1,`a`,3),G_(2,`E-file a document`),Lf()()),t&2){let e=i;Pv(`title`,e.title)(`caseNumber`,e.caseNumber)(`caseType`,e.caseType)(`filed`,e.filed)(`parties`,e.parties)(`docket`,e.docket)(`hearings`,e.hearings)}}function O(t,i){t&1&&(Ga(0,`p`,4),G_(1,`Loading case 24CV012345…`),Lf(),Ga(2,`div`,5),uc(3,`scsc-skeleton`,6)(4,`scsc-skeleton`,7)(5,`scsc-skeleton`,8)(6,`scsc-skeleton`,9),Lf())}var k=class t{trail=[{label:`Case search`,link:`.`},{label:`24CV012345`}];detail=q(null);constructor(){setTimeout(()=>this.detail.set({title:`Alvarez v. Northgate Property Mgmt.`,caseNumber:`24CV012345`,caseType:`Civil — Unlimited`,filed:`Mar 12, 2024`,parties:[{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Northgate Property Management, Inc.`,role:`Defendant`}],docket:[{date:`2024-03-12`,event:`Complaint filed`,filedBy:`Plaintiff`},{date:`2024-04-09`,event:`Answer filed`,filedBy:`Defendant`}],hearings:[{type:`Case Management Conference`,datetime:`Oct 14, 2026 · 9:00 AM`,department:`21`,judge:`Hon. R. Whitfield`}]}),900)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-file-page-demo`]],decls:5,vars:2,consts:[[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`],[1,`mb-3`,3,`items`],[`status`,`active`,3,`title`,`caseNumber`,`caseType`,`filed`,`parties`,`docket`,`hearings`],[`scsc-button`,``,`slot`,`actions`,`size`,`sm`,`routerLink`,`.`],[`role`,`status`,1,`sr-only`],[1,`flex`,`flex-col`,`gap-3`],[`width`,`8rem`],[`width`,`60%`,`height`,`2rem`],[`width`,`14rem`],[`height`,`10rem`,1,`mt-4`]],template:function(e,a){if(e&1&&(Ga(0,`scsc-page-shell`),uc(1,`scsc-masthead`,0)(2,`scsc-breadcrumb`,1),JT(3,j,3,7,`scsc-case-file`,2)(4,O,7,0),Lf()),e&2){let P;Jb(2),Pv(`items`,a.trail),Jb(),t_((P=a.detail())?3:4,P)}},dependencies:[nu,QN,$E,UP,FN,XF,Ln],encapsulation:2})};var le={slug:`case-file`,name:`Case File`,classes:[`ScscCaseFile`],category:`Court`,whenToUse:["The standard case detail page: `scsc-case-header` plus tabs for Parties, Docket, Hearings, Documents and Financials, composed from the individual court components.","Tabs render only for the collections you pass, so a probate case with no hearings simply has no Hearings tab; the first tab that has data opens. Handle `(viewDocument)` to open documents from the docket tab.",'Project page actions with `slot="actions"`; they land in the header. Actions that navigate (E-file, Print view) are `a[scsc-button]` links.',"When a page needs its own tab set or custom panels, compose `scsc-case-header`, `scsc-tabs` and the individual components directly instead."],demos:[{id:`case-file-full`,title:`All five tabs`,description:`Parties, docket, hearings, documents and financials from inline fixtures, with header actions.`,component:v,source:p[`case-file-full`]},{id:`case-file-minimal`,title:`Only the data you have`,description:`Parties and hearings only; the other tabs do not appear.`,component:D,source:p[`case-file-minimal`]},{id:`case-file-page`,title:`The case route`,description:"The whole page: shell, breadcrumb, skeletons with a status message while the case loads, then `scsc-case-file` with an `a[scsc-button]` action.",component:k,source:p[`case-file-page`],layout:`page`,height:`34rem`},{id:`case-file-confidential`,title:`Confidential case`,description:"A sealed juvenile case: an error alert states the confidentiality rule above the tabs; documents still open through `viewDocument`.",component:h,source:p[`case-file-confidential`]},{id:`case-file-dark`,title:`Dark theme`,description:`Parties, hearings and financials tabs in the dark theme.`,component:b,source:p[`case-file-dark`]}],a11y:["The case caption is the page `<h1>` (from `scsc-case-header`); keep other page headings at `<h2>` and below.","Tabs are `scsc-tabs`, and the open tab’s content is its `tabpanel`. The first tab with data is selected initially; the tab list is one Tab stop, and the arrow keys switch tabs.",'While the case loads, skeletons are hidden from assistive tech; pair them with a visually hidden `role="status"` message (the route demo does).',`The Documents tab lists names and dates only; wire your own viewer from the Docket tab or a custom panel when documents must be openable.`],keyboard:[{keys:`Tab`,action:`Your header actions, then the selected tab, then the tab panel, then, with Docket open, each entry’s view-document button.`},{keys:`ArrowRight / ArrowLeft`,action:`On a tab: selects the next / previous tab and shows its panel; wraps at the ends.`},{keys:`Home / End`,action:`On a tab: selects the first / last tab.`},{keys:`Enter / Space`,action:"On a view-document button: emits `viewDocument` with the entry’s `documentId`."}],appMustProvide:['Page headings at `<h2>` and below (the case caption is the `<h1>`), and a visually hidden `role="status"` message while the case loads.'],related:[`case-header`,`party-list`,`docket-table`,`hearing-card`,`tabs`,`status-badge`]};export{le as CASE_FILE_DOCS};