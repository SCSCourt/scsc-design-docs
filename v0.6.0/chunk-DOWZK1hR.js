import{Hs as y_,Ka as Ov,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Un as Za,Xa as Pv,Zo as i_,_s as o_,a as $a,cs as lc,ds as nD,ks as t_,kt as NE,ra as Af,rr as da,ta as $f,va as G_,vn as Vn,ws as r_,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function $(t,s){if(t&1&&uc(0,`scsc-status-badge`,1),t&2){let e=s.$implicit;Pv(`status`,e)}}var y=class t{statuses=[`filed`,`active`,`pending`,`continued`,`closed`,`dismissed`,`sealed`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-status-badge-all-demo`]],decls:3,vars:0,consts:[[1,`flex`,`flex-wrap`,`gap-2`],[3,`status`]],template:function(e,c){e&1&&(Ga(0,`div`,0),o_(1,$,1,1,`scsc-status-badge`,1,r_),Lf()),e&2&&(Jb(),i_(c.statuses))},dependencies:[$a],encapsulation:2})};var z=(t,s)=>s.caseNumber;function L(t,s){if(t&1&&(Ga(0,`li`,1)(1,`div`,2)(2,`scsc-text`,3),G_(3),Lf(),Ga(4,`scsc-text`,4),G_(5),Lf()(),uc(6,`scsc-status-badge`,5),Lf()),t&2){let e=s.$implicit;Jb(3),nD(e.title),Jb(2),nD(e.caseNumber),Jb(),Pv(`status`,e.status)(`label`,e.label??``)}}var v=class t{cases=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Property Mgmt.`,status:`active`},{caseNumber:`23PR008812`,title:`Estate of Margaret O’Donnell`,status:`continued`,label:`Continued to Aug 14`},{caseNumber:`24FL004988`,title:`In re Parentage of K.M.`,status:`sealed`,label:`Confidential`},{caseNumber:`22CR114530`,title:`People v. Harmon`,status:`closed`,label:`Disposed`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-status-badge-label-demo`]],decls:3,vars:0,consts:[[1,`max-w-lg`,`divide-y`,`divide-base-200`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`py-2`],[1,`min-w-0`],[`bold`,``,1,`block`,`truncate`],[`tone`,`muted`,`size`,`sm`,`tnum`,``],[3,`status`,`label`]],template:function(e,c){e&1&&(Ga(0,`ul`,0),o_(1,L,7,4,`li`,1,z),Lf()),e&2&&(Jb(),i_(c.cases))},dependencies:[$a,NE],encapsulation:2})};function j(t,s){if(t&1&&uc(0,`scsc-status-badge`,10),t&2){let e=y_().$implicit;Pv(`status`,e.status)}}function H(t,s){if(t&1&&G_(0),t&2){let e=y_(),c=e.$implicit,N=e.col;$f(` `,c[N.key],` `)}}function U(t,s){if(t&1&&JT(0,j,1,1,`scsc-status-badge`,10)(1,H,1,1),t&2){let e=s.col;t_(e.key===`status`?0:1)}}var C=class t{columns=[{key:`caseNumber`,header:`Case No.`,type:`number`,width:`8rem`},{key:`title`,header:`Title`},{key:`status`,header:`Status`,width:`7rem`},{key:`nextEvent`,header:`Next event`,width:`9rem`}];cases=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate`,status:`active`,nextEvent:`Oct 14 · CMC`},{caseNumber:`24CV013002`,title:`Patel v. SVT Logistics`,status:`pending`,nextEvent:`Oct 21 · Motion`},{caseNumber:`23CV008812`,title:`Okafor v. City of San Jose`,status:`continued`,nextEvent:`Nov 3 · Trial`},{caseNumber:`22CV004410`,title:`Nguyen v. Bayside Auto`,status:`closed`,nextEvent:`—`}];status=q$1(``);rows=ut(()=>this.status()?this.cases.filter(s=>s.status===this.status()):this.cases);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-status-badge-table-demo`]],decls:15,vars:2,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[`label`,`Status`,`for`,`status-badge-table-filter`,1,`max-w-52`],[`scsc-select`,``,`id`,`status-badge-table-filter`,`size`,`sm`,3,`change`],[`value`,``,`selected`,``],[`value`,`active`],[`value`,`pending`],[`value`,`continued`],[`value`,`closed`],[`emptyMessage`,`No cases with this status.`,3,`columns`,`rows`],[`scscCell`,``],[3,`status`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(V){return c.status.set(V.target.value)}),Ga(3,`option`,3),G_(4,`All statuses`),Lf(),Ga(5,`option`,4),G_(6,`Active`),Lf(),Ga(7,`option`,5),G_(8,`Pending`),Lf(),Ga(9,`option`,6),G_(10,`Continued`),Lf(),Ga(11,`option`,7),G_(12,`Closed`),Lf()()(),Ga(13,`scsc-table`,8),Ov(14,U,2,1,`ng-template`,9),Lf()()),e&2&&(Jb(13),Pv(`columns`,c.columns)(`rows`,c.rows()))},dependencies:[da,Vn,On,$a,Za],encapsulation:2})};var K=(t,s)=>s.date;function J(t,s){if(t&1&&(Ga(0,`li`,1)(1,`span`,2),G_(2),Lf(),uc(3,`scsc-status-badge`,3),Ga(4,`span`,4),G_(5),Lf()()),t&2){let e=s.$implicit;Jb(2),nD(e.date),Jb(),Pv(`status`,e.status)(`label`,e.label??``),Jb(2),nD(e.note)}}var x=class t{history=[{date:`2024-03-12`,status:`filed`,note:`Complaint filed`},{date:`2024-04-02`,status:`active`,note:`Answer received`},{date:`2026-09-15`,status:`continued`,label:`Continued to Nov 3`,note:`Motion hearing moved`},{date:`2026-11-03`,status:`pending`,label:`Ruling pending`,note:`Taken under submission`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-status-badge-history-demo`]],decls:3,vars:0,consts:[[`aria-label`,`Status history, 24CV012345`,1,`flex`,`max-w-md`,`flex-col`,`gap-3`,`border-s-2`,`border-base-300`,`ps-4`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-3`,`gap-y-1`],[1,`w-24`,`text-sm`,`tnum`,`text-base-content/70`],[3,`status`,`label`],[1,`text-sm`]],template:function(e,c){e&1&&(Ga(0,`ol`,0),o_(1,J,6,4,`li`,1,K),Lf()),e&2&&(Jb(),i_(c.history))},dependencies:[$a],encapsulation:2})};function q(t,s){if(t&1&&(Ga(0,`li`),uc(1,`scsc-status-badge`,2),Lf()),t&2){let e=s.$implicit;Jb(),Pv(`status`,e)}}var w=class t{statuses=[`active`,`filed`,`pending`,`continued`,`closed`,`dismissed`,`sealed`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-status-badge-dark-demo`]],decls:4,vars:0,consts:[[`data-theme`,`scsc-design-dark`,1,`rounded-box`,`bg-base-100`,`p-4`,`text-base-content`],[`aria-label`,`Case statuses`,1,`flex`,`flex-wrap`,`gap-2`],[3,`status`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`ul`,1),o_(2,q,2,1,`li`,null,r_),Lf()()),e&2&&(Jb(2),i_(c.statuses))},dependencies:[$a],encapsulation:2})};var b={"status-badge-all":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatusBadge, type ScscCaseStatus } from '@scscourt/design';

@Component({
  selector: 'app-status-badge-all-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatusBadge],
  template: \`
    <div class="flex flex-wrap gap-2">
      @for (status of statuses; track status) {
        <scsc-status-badge [status]="status" />
      }
    </div>
  \`,
})
export class StatusBadgeAllDemo {
  /** Every value of \`ScscCaseStatus\`, in lifecycle order. */
  protected readonly statuses: ScscCaseStatus[] = [
    'filed',
    'active',
    'pending',
    'continued',
    'closed',
    'dismissed',
    'sealed',
  ];
}
`,html:`<div class="flex flex-wrap gap-2">
  @for (status of statuses; track status) {
    <scsc-status-badge [status]="status" />
  }
</div>
`},"status-badge-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatusBadge, type ScscCaseStatus } from '@scscourt/design';

@Component({
  selector: 'app-status-badge-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatusBadge],
  template: \`
    <div data-theme="scsc-design-dark" class="rounded-box bg-base-100 p-4 text-base-content">
      <ul class="flex flex-wrap gap-2" aria-label="Case statuses">
        @for (s of statuses; track s) {
          <li><scsc-status-badge [status]="s" /></li>
        }
      </ul>
    </div>
  \`,
})
export class StatusBadgeDarkDemo {
  protected readonly statuses: ScscCaseStatus[] = [
    'active',
    'filed',
    'pending',
    'continued',
    'closed',
    'dismissed',
    'sealed',
  ];
}
`,html:`<div data-theme="scsc-design-dark" class="rounded-box bg-base-100 p-4 text-base-content">
  <ul class="flex flex-wrap gap-2" aria-label="Case statuses">
    @for (s of statuses; track s) {
      <li><scsc-status-badge [status]="s" /></li>
    }
  </ul>
</div>
`},"status-badge-history":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatusBadge, type ScscCaseStatus } from '@scscourt/design';

interface StatusChange {
  date: string;
  status: ScscCaseStatus;
  label?: string;
  note: string;
}

@Component({
  selector: 'app-status-badge-history-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatusBadge],
  template: \`
    <ol
      class="flex max-w-md flex-col gap-3 border-s-2 border-base-300 ps-4"
      aria-label="Status history, 24CV012345"
    >
      @for (h of history; track h.date) {
        <li class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span class="w-24 text-sm tnum text-base-content/70">{{ h.date }}</span>
          <scsc-status-badge [status]="h.status" [label]="h.label ?? ''" />
          <span class="text-sm">{{ h.note }}</span>
        </li>
      }
    </ol>
  \`,
})
export class StatusBadgeHistoryDemo {
  protected readonly history: StatusChange[] = [
    { date: '2024-03-12', status: 'filed', note: 'Complaint filed' },
    { date: '2024-04-02', status: 'active', note: 'Answer received' },
    {
      date: '2026-09-15',
      status: 'continued',
      label: 'Continued to Nov 3',
      note: 'Motion hearing moved',
    },
    {
      date: '2026-11-03',
      status: 'pending',
      label: 'Ruling pending',
      note: 'Taken under submission',
    },
  ];
}
`,html:`<ol
  class="flex max-w-md flex-col gap-3 border-s-2 border-base-300 ps-4"
  aria-label="Status history, 24CV012345"
>
  @for (h of history; track h.date) {
    <li class="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span class="w-24 text-sm tnum text-base-content/70">{{ h.date }}</span>
      <scsc-status-badge [status]="h.status" [label]="h.label ?? ''" />
      <span class="text-sm">{{ h.note }}</span>
    </li>
  }
</ol>
`},"status-badge-label":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatusBadge, ScscText, type ScscCaseStatus } from '@scscourt/design';

interface CaseRow {
  caseNumber: string;
  title: string;
  status: ScscCaseStatus;
  /** Optional override for the badge text; the colour still follows \`status\`. */
  label?: string;
}

@Component({
  selector: 'app-status-badge-label-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatusBadge, ScscText],
  template: \`
    <ul class="max-w-lg divide-y divide-base-200">
      @for (row of cases; track row.caseNumber) {
        <li class="flex items-center justify-between gap-4 py-2">
          <div class="min-w-0">
            <scsc-text bold class="block truncate">{{ row.title }}</scsc-text>
            <scsc-text tone="muted" size="sm" tnum>{{ row.caseNumber }}</scsc-text>
          </div>
          <scsc-status-badge [status]="row.status" [label]="row.label ?? ''" />
        </li>
      }
    </ul>
  \`,
})
export class StatusBadgeLabelDemo {
  protected readonly cases: CaseRow[] = [
    { caseNumber: '24CV012345', title: 'Alvarez v. Northgate Property Mgmt.', status: 'active' },
    {
      caseNumber: '23PR008812',
      title: 'Estate of Margaret O\u2019Donnell',
      status: 'continued',
      label: 'Continued to Aug 14',
    },
    {
      caseNumber: '24FL004988',
      title: 'In re Parentage of K.M.',
      status: 'sealed',
      label: 'Confidential',
    },
    { caseNumber: '22CR114530', title: 'People v. Harmon', status: 'closed', label: 'Disposed' },
  ];
}
`,html:`<ul class="max-w-lg divide-y divide-base-200">
  @for (row of cases; track row.caseNumber) {
    <li class="flex items-center justify-between gap-4 py-2">
      <div class="min-w-0">
        <scsc-text bold class="block truncate">{{ row.title }}</scsc-text>
        <scsc-text tone="muted" size="sm" tnum>{{ row.caseNumber }}</scsc-text>
      </div>
      <scsc-status-badge [status]="row.status" [label]="row.label ?? ''" />
    </li>
  }
</ul>
`},"status-badge-table":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscCellDef,
  ScscColumn,
  ScscFormField,
  ScscSelect,
  ScscStatusBadge,
  ScscTable,
  type ScscCaseStatus,
} from '@scscourt/design';

interface CaseRow {
  caseNumber: string;
  title: string;
  status: ScscCaseStatus;
  nextEvent: string;
}

@Component({
  selector: 'app-status-badge-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCellDef, ScscFormField, ScscSelect, ScscStatusBadge, ScscTable],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <scsc-form-field label="Status" for="status-badge-table-filter" class="max-w-52">
        <select
          scsc-select
          id="status-badge-table-filter"
          size="sm"
          (change)="status.set($any($event.target).value)"
        >
          <option value="" selected>All statuses</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="continued">Continued</option>
          <option value="closed">Closed</option>
        </select>
      </scsc-form-field>

      <scsc-table [columns]="columns" [rows]="rows()" emptyMessage="No cases with this status.">
        <ng-template scscCell let-row let-col="col">
          @if (col.key === 'status') {
            <!-- The raw status from the data picks both the text and the fixed colour. -->
            <scsc-status-badge [status]="row.status" />
          } @else {
            {{ row[col.key] }}
          }
        </ng-template>
      </scsc-table>
    </div>
  \`,
})
export class StatusBadgeTableDemo {
  protected readonly columns: ScscColumn<CaseRow>[] = [
    { key: 'caseNumber', header: 'Case No.', type: 'number', width: '8rem' },
    { key: 'title', header: 'Title' },
    { key: 'status', header: 'Status', width: '7rem' },
    { key: 'nextEvent', header: 'Next event', width: '9rem' },
  ];

  private readonly cases: CaseRow[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate',
      status: 'active',
      nextEvent: 'Oct 14 \xB7 CMC',
    },
    {
      caseNumber: '24CV013002',
      title: 'Patel v. SVT Logistics',
      status: 'pending',
      nextEvent: 'Oct 21 \xB7 Motion',
    },
    {
      caseNumber: '23CV008812',
      title: 'Okafor v. City of San Jose',
      status: 'continued',
      nextEvent: 'Nov 3 \xB7 Trial',
    },
    { caseNumber: '22CV004410', title: 'Nguyen v. Bayside Auto', status: 'closed', nextEvent: '\u2014' },
  ];

  protected readonly status = signal<ScscCaseStatus | ''>('');
  protected readonly rows = computed(() =>
    this.status() ? this.cases.filter((c) => c.status === this.status()) : this.cases,
  );
}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <scsc-form-field label="Status" for="status-badge-table-filter" class="max-w-52">
    <select
      scsc-select
      id="status-badge-table-filter"
      size="sm"
      (change)="status.set($any($event.target).value)"
    >
      <option value="" selected>All statuses</option>
      <option value="active">Active</option>
      <option value="pending">Pending</option>
      <option value="continued">Continued</option>
      <option value="closed">Closed</option>
    </select>
  </scsc-form-field>

  <scsc-table [columns]="columns" [rows]="rows()" emptyMessage="No cases with this status.">
    <ng-template scscCell let-row let-col="col">
      @if (col.key === 'status') {
        <!-- The raw status from the data picks both the text and the fixed colour. -->
        <scsc-status-badge [status]="row.status" />
      } @else {
        {{ row[col.key] }}
      }
    </ng-template>
  </scsc-table>
</div>
`}};var be={slug:`status-badge`,name:`Status Badge`,classes:[`ScscStatusBadge`],category:`Court`,whenToUse:[`Any place a case or event status is shown: case headers, search results, dashboards. The colour mapping is fixed so "Dismissed" looks the same in every court app.`,'Pass the raw `ScscCaseStatus` value from your data; use `label` only to add detail ("Continued to Aug 14"), never to change the meaning.',"For statuses outside the case lifecycle (queue states, health) use `scsc-badge` or `scsc-status-dot` with your own tone."],demos:[{id:`status-badge-all`,title:`Every status`,description:"The seven `ScscCaseStatus` values and their fixed tones.",component:y,source:b[`status-badge-all`]},{id:`status-badge-label`,title:`Custom label`,description:"`label` overrides the text; the tone still follows `status`.",component:v,source:b[`status-badge-label`]},{id:`status-badge-table`,title:`In a table column`,description:"A Status column through the `scscCell` template, with a status filter above; the badge renders straight from the row data.",component:C,source:b[`status-badge-table`]},{id:`status-badge-history`,title:`Status history`,description:`A case's status over time; \`label\` overrides the text ("Continued to Nov 3") while the tone stays the status's.`,component:x,source:b[`status-badge-history`]},{id:`status-badge-dark`,title:`Dark theme`,description:`Every status in the dark theme; each keeps its contrast.`,component:w,source:b[`status-badge-dark`]}],a11y:[`The badge is plain text, so the status is announced as written; colour is never the only signal.`,`Keep custom labels short and literal so the meaning survives without the colour.`,`In a table the badge is the cell text, so a "Status" column header is all the context it needs; do not add a second, colour-only indicator.`],related:[`badge`,`status-dot`,`case-header`,`case-file`]};export{be as STATUS_BADGE_DOCS};