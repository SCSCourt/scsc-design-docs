import{Di as uR,Go as g,Hs as y_,Ka as Ov,Kn as Zr,Ma as JT,Mr as jn,Ms as uc,Na as Jb,Or as ii,Ps as ut,To as _n,Vi as y2e,Vr as mN,Xa as Pv,cs as lc,k as Cne,ks as t_,kt as NE,pi as sn,qo as ge,ra as Af,ta as $f,va as G_,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var y={"change-history-case-record":{ts:`import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ScscCard,
  ScscChangeHistory,
  type ScscActor,
  type ScscChangeEvent,
} from '@scscourt/design';
import { timer } from 'rxjs';

const at = (daysAgo: number, hour: number, minute = 0): string => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, minute, 0, 0);
  // Keep today's events in the past, whatever time the demo is opened.
  return (
    daysAgo === 0 && d.getTime() > Date.now() ? new Date(Date.now() - 20 * 60_000) : d
  ).toISOString();
};

const CLERK: ScscActor = { id: 'u-17', name: 'Maria \xC1lvarez', role: 'Courtroom clerk' };
const JUDGE: ScscActor = { id: 'j-3', name: 'Hon. Rebecca Whitfield', role: 'Judicial officer' };
const CALENDAR: ScscActor = { id: 'u-40', name: 'Daniel Nguyen', role: 'Calendar coordinator' };
const EJ_SYNC: ScscActor = { id: 'ej-sync', name: 'EJ sync', kind: 'system' };

const RECENT: ScscChangeEvent[] = [
  {
    id: 'ev-812',
    at: at(0, 9, 12),
    actor: CLERK,
    action: 'status',
    changes: [{ field: 'status', label: 'Case status', from: 'Open', to: 'Stayed' }],
    note: 'Stay pending the appeal in H051234 (order filed in Dept. 12).',
  },
  {
    id: 'ev-811',
    at: at(0, 7, 30),
    actor: EJ_SYNC,
    source: 'EJ sync',
    summary: 'Party address updated from the e-filing envelope',
    changes: [
      {
        field: 'parties[P-2].address.line1',
        label: 'Street',
        from: '200 W Hedding St',
        to: '191 N First St, Suite 400',
      },
      { field: 'parties[P-2].address.city', label: 'City', from: 'San Jose', to: 'Milpitas' },
      { field: 'parties[P-2].address.zip', label: 'ZIP code', from: '95110', to: '95035' },
      { field: 'parties[P-2].phone', label: 'Phone', from: null, to: '(408) 555-0199' },
      { field: 'parties[P-2].email', label: 'Email', from: 'legal@pacifictransit.example', to: '' },
    ],
  },
  {
    id: 'ev-807',
    at: at(1, 15, 45),
    actor: CALENDAR,
    action: 'updated',
    summary: 'Rescheduled at the parties\u2019 joint request',
    changes: [
      {
        field: 'cmc.date',
        label: 'Case management conference',
        from: '2026-10-03',
        to: '2026-10-17',
        kind: 'date',
      },
      { field: 'cmc.dept', label: 'Department', from: 'Dept. 12', to: 'Dept. 14' },
    ],
  },
  {
    id: 'ev-801',
    at: at(4, 10, 5),
    actor: JUDGE,
    action: 'assigned',
    changes: [
      {
        field: 'judge',
        label: 'Assigned judicial officer',
        from: { id: 'j-9', name: 'Hon. Luis Ortega' },
        to: { id: 'j-3', name: 'Hon. Rebecca Whitfield' },
      },
      { field: 'track', label: 'Case track', from: 'Limited civil', to: 'Unlimited civil' },
      { field: 'complex', label: 'Complex designation', from: false, to: true },
    ],
  },
];

const OLDER: ScscChangeEvent[] = [
  {
    id: 'ev-760',
    at: at(12, 11, 20),
    actor: CLERK,
    action: 'updated',
    changes: [
      { field: 'fees.filing', label: 'Filing fee', from: 435, to: 0, kind: 'currency' },
      { field: 'feeWaiver', label: 'Fee waiver (FW-003)', from: 'Pending', to: 'Granted' },
    ],
  },
  {
    id: 'ev-701',
    at: at(20, 8, 55),
    actor: EJ_SYNC,
    source: 'EJ sync',
    action: 'created',
    summary: 'Complaint for damages filed through the e-filing portal',
  },
];

@Component({
  selector: 'app-change-history-case-record-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscChangeHistory],
  template: \`
    <scsc-card title="24CV012345 \xB7 Alvarez v. Pacific Transit \u2014 history" class="max-w-3xl">
      <!-- The card title is an <h3>, so the day headings are level 4. -->
      <scsc-change-history
        [events]="events()"
        [headingLevel]="4"
        filterable
        [hasMore]="hasMore()"
        [loading]="loading()"
        (loadMore)="loadOlder()"
      />
    </scsc-card>
  \`,
})
export class ChangeHistoryCaseRecordDemo {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly events = signal<ScscChangeEvent[]>(RECENT);
  protected readonly hasMore = signal(true);
  protected readonly loading = signal(false);

  /** Stands in for a paged API call: older events arrive after a short delay. */
  protected loadOlder(): void {
    this.loading.set(true);
    timer(800)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.events.update((list) => [...list, ...OLDER]);
        this.hasMore.set(false);
        this.loading.set(false);
      });
  }
}
`,html:`<scsc-card title="24CV012345 \xB7 Alvarez v. Pacific Transit \u2014 history" class="max-w-3xl">
  <!-- The card title is an <h3>, so the day headings are level 4. -->
  <scsc-change-history
    [events]="events()"
    [headingLevel]="4"
    filterable
    [hasMore]="hasMore()"
    [loading]="loading()"
    (loadMore)="loadOlder()"
  />
</scsc-card>
`},"change-history-compact":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscChangeHistory, type ScscChangeEvent } from '@scscourt/design';

const hoursAgo = (h: number): string => new Date(Date.now() - h * 3_600_000).toISOString();

const HEARING_HISTORY: ScscChangeEvent[] = [
  {
    id: 'h-44',
    at: hoursAgo(1.5),
    actor: { id: 'j-3', name: 'Hon. Rebecca Whitfield', role: 'Judicial officer' },
    action: 'updated',
    changes: [
      {
        field: 'minutes',
        label: 'Minute order',
        from: 'Hearing continued at the request of the plaintiff. Parties to meet and confer and file a joint statement by October 10.',
        to: 'Hearing continued at the joint request of the parties. Parties to meet and confer and file a joint statement by October 14.',
        kind: 'longtext',
      },
    ],
  },
  {
    id: 'h-43',
    at: hoursAgo(3),
    actor: { id: 'u-40', name: 'Daniel Nguyen', role: 'Calendar coordinator' },
    action: 'updated',
    changes: [
      {
        field: 'start',
        label: 'Start time',
        from: '2026-10-17T16:30:00Z',
        to: '2026-10-17T20:00:00Z',
        kind: 'datetime',
      },
      {
        field: 'room',
        label: 'Courtroom',
        from: 'Dept. 12 \xB7 Downtown Superior Court',
        to: 'Dept. 14 \xB7 Downtown Superior Court',
      },
      { field: 'remote', label: 'Remote appearance allowed', from: false, to: true },
      { field: 'interpreter', label: 'Interpreter', from: null, to: 'Spanish' },
    ],
  },
  {
    id: 'h-40',
    at: hoursAgo(30),
    actor: null,
    source: 'Odyssey import',
    action: 'created',
    summary: 'Case management conference scheduled',
  },
];

@Component({
  selector: 'app-change-history-compact-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscChangeHistory],
  template: \`
    <!-- A side panel: compact drops roles and tightens spacing; long text is a word diff. -->
    <scsc-card title="Hearing H-8812 \xB7 changes" class="max-w-sm">
      <scsc-change-history [events]="events" compact [headingLevel]="4" [changeLimit]="2" />
    </scsc-card>
  \`,
})
export class ChangeHistoryCompactDemo {
  protected readonly events = HEARING_HISTORY;
}
`,html:`<!-- A side panel: compact drops roles and tightens spacing; long text is a word diff. -->
<scsc-card title="Hearing H-8812 \xB7 changes" class="max-w-sm">
  <scsc-change-history [events]="events" compact [headingLevel]="4" [changeLimit]="2" />
</scsc-card>
`},"change-history-custom-event":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscBadge,
  ScscChangeEventDef,
  ScscChangeHistory,
  ScscFieldChanges,
  type ScscChangeEvent,
} from '@scscourt/design';

const hoursAgo = (h: number): string => new Date(Date.now() - h * 3_600_000).toISOString();

const GRANT_HISTORY: ScscChangeEvent[] = [
  {
    id: 'g-31',
    at: hoursAgo(2),
    actor: { id: 'u-5', name: 'Priya Raman', role: 'Access administrator' },
    action: 'commented',
    note: 'Approved for the Juvenile Justice Center pilot. Review again after the December calendar.',
  },
  {
    id: 'g-30',
    at: hoursAgo(2.2),
    actor: { id: 'u-5', name: 'Priya Raman', role: 'Access administrator' },
    action: 'status',
    changes: [{ field: 'status', label: 'Grant status', from: 'Pending review', to: 'Active' }],
  },
  {
    id: 'g-29',
    at: hoursAgo(28),
    actor: { id: 'u-12', name: 'Marcus Lee', role: 'Probation supervisor' },
    action: 'created',
    changes: [
      { field: 'scope', label: 'Scope', from: null, to: 'Juvenile delinquency case files' },
      { field: 'expires', label: 'Expires', from: null, to: '2027-03-31', kind: 'date' },
      { field: 'users', label: 'People', from: null, to: ['A. Soto', 'J. Kim', 'R. Patel'] },
    ],
  },
];

@Component({
  selector: 'app-change-history-custom-event-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscChangeEventDef, ScscChangeHistory, ScscFieldChanges],
  template: \`
    <div class="max-w-2xl">
      <scsc-change-history [events]="events" [headingLevel]="3">
        <!-- Replaces each event's body; the actor, action and time stay. -->
        <ng-template scscChangeEvent let-event let-changes="changes">
          @if (event.action === 'commented') {
            <blockquote class="rounded-box border border-base-300 bg-base-100 px-3 py-2">
              {{ event.note }}
            </blockquote>
          } @else {
            @if (event.action === 'created') {
              <scsc-badge tone="info" soft size="sm" class="mb-1">New grant</scsc-badge>
            }
            <scsc-field-changes [changes]="changes" />
          }
        </ng-template>
      </scsc-change-history>
    </div>
  \`,
})
export class ChangeHistoryCustomEventDemo {
  protected readonly events = GRANT_HISTORY;
}
`,html:`<div class="max-w-2xl">
  <scsc-change-history [events]="events" [headingLevel]="3">
    <!-- Replaces each event's body; the actor, action and time stay. -->
    <ng-template scscChangeEvent let-event let-changes="changes">
      @if (event.action === 'commented') {
        <blockquote class="rounded-box border border-base-300 bg-base-100 px-3 py-2">
          {{ event.note }}
        </blockquote>
      } @else {
        @if (event.action === 'created') {
          <scsc-badge tone="info" soft size="sm" class="mb-1">New grant</scsc-badge>
        }
        <scsc-field-changes [changes]="changes" />
      }
    </ng-template>
  </scsc-change-history>
</div>
`},"change-history-snapshots":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscChangeHistory,
  ScscFieldChanges,
  ScscText,
  diffObjects,
  type ScscChangeEvent,
  type ScscDiffOptions,
} from '@scscourt/design';

interface Party {
  partyId: string;
  name: string;
  role: string;
  address: { line1: string; city: string; zip: string };
}

interface CaseSnapshot {
  caseNumber: string;
  status: string;
  nextHearing: string | null;
  filingFee: number;
  flags: string[];
  parties: Party[];
  rowVersion: number;
  syncedAt: string;
}

/** The case as the court record has it. */
const COURT_RECORD: CaseSnapshot = {
  caseNumber: '25FL004512',
  status: 'Open',
  nextHearing: '2026-10-21',
  filingFee: 435,
  flags: ['Interpreter: Vietnamese'],
  parties: [
    {
      partyId: 'P-1',
      name: 'Linh Tran',
      role: 'Petitioner',
      address: { line1: '1050 Park Ave', city: 'San Jose', zip: '95126' },
    },
    {
      partyId: 'P-2',
      name: 'Minh Tran',
      role: 'Respondent',
      address: { line1: '88 Market St', city: 'San Jose', zip: '95113' },
    },
  ],
  rowVersion: 14,
  syncedAt: '2026-09-29T06:00:00Z',
};

/** The same case as the EJ sync received it (parties in a different order). */
const EJ_RECORD: CaseSnapshot = {
  caseNumber: '25FL004512',
  status: 'Open',
  nextHearing: '2026-11-04',
  filingFee: 0,
  flags: ['Interpreter: Vietnamese', 'Fee waiver granted'],
  parties: [
    {
      partyId: 'P-2',
      name: 'Minh Tran',
      role: 'Respondent',
      address: { line1: '2400 Moorpark Ave', city: 'San Jose', zip: '95128' },
    },
    {
      partyId: 'P-1',
      name: 'Linh Tran',
      role: 'Petitioner',
      address: { line1: '1050 Park Ave', city: 'San Jose', zip: '95126' },
    },
  ],
  rowVersion: 15,
  syncedAt: '2026-09-30T06:00:00Z',
};

const DIFF_OPTIONS: ScscDiffOptions = {
  // Match parties by id, not position, and skip bookkeeping fields.
  arrayKeys: { parties: 'partyId' },
  ignore: ['rowVersion', 'syncedAt'],
  labels: {
    status: 'Case status',
    nextHearing: 'Next hearing',
    filingFee: 'Filing fee',
    flags: 'Case flags',
    // Exact paths win over generic ones (\`parties[].address.city\` would match every party).
    'parties[P-2].address.line1': 'Respondent street',
    'parties[P-2].address.zip': 'Respondent ZIP code',
  },
  kinds: { nextHearing: 'date', filingFee: 'currency' },
};

@Component({
  selector: 'app-change-history-snapshots-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscChangeHistory, ScscFieldChanges, ScscText],
  template: \`
    <div class="grid max-w-4xl gap-4 lg:grid-cols-2">
      <scsc-card title="EJ sync preview \xB7 25FL004512">
        <scsc-text size="sm" class="mb-2">
          {{ pending().length }} fields differ from the court record:
        </scsc-text>
        <!-- diffObjects builds the changes; scsc-field-changes shows them on their own. -->
        <scsc-field-changes [changes]="pending()" [limit]="0" />
        <div class="mt-3 flex flex-wrap items-center gap-3">
          <!-- One button that toggles, so focus never lands on a removed element. -->
          <scsc-button [variant]="applied() ? 'ghost' : 'primary'" size="sm" (click)="toggle()">
            {{ applied() ? 'Undo sync' : 'Apply sync' }}
          </scsc-button>
          <scsc-text size="sm" tone="muted" role="status">
            {{ applied() ? 'Applied: the change is at the top of the history.' : '' }}
          </scsc-text>
        </div>
      </scsc-card>
      <scsc-card title="History">
        <scsc-change-history [events]="history()" [headingLevel]="4" />
      </scsc-card>
    </div>
  \`,
})
export class ChangeHistorySnapshotsDemo {
  protected readonly pending = computed(() => diffObjects(COURT_RECORD, EJ_RECORD, DIFF_OPTIONS));
  protected readonly applied = signal(false);
  protected readonly history = signal<ScscChangeEvent[]>([
    {
      id: 'sync-0',
      at: new Date(Date.now() - 26 * 3_600_000).toISOString(),
      actor: { id: 'u-17', name: 'Maria \xC1lvarez', role: 'Family law clerk' },
      action: 'created',
      summary: 'Petition for dissolution filed at the Family Justice Center',
    },
  ]);

  protected toggle(): void {
    if (this.applied()) {
      this.history.update((list) => list.filter((e) => e.source !== 'EJ sync'));
      this.applied.set(false);
      return;
    }
    this.history.update((list) => [
      {
        id: \`sync-\${list.length}\`,
        at: new Date().toISOString(),
        actor: { id: 'ej-sync', name: 'EJ sync', kind: 'system' },
        source: 'EJ sync',
        changes: this.pending(),
      },
      ...list,
    ]);
    this.applied.set(true);
  }
}
`,html:`<div class="grid max-w-4xl gap-4 lg:grid-cols-2">
  <scsc-card title="EJ sync preview \xB7 25FL004512">
    <scsc-text size="sm" class="mb-2">
      {{ pending().length }} fields differ from the court record:
    </scsc-text>
    <!-- diffObjects builds the changes; scsc-field-changes shows them on their own. -->
    <scsc-field-changes [changes]="pending()" [limit]="0" />
    <div class="mt-3 flex flex-wrap items-center gap-3">
      <!-- One button that toggles, so focus never lands on a removed element. -->
      <scsc-button [variant]="applied() ? 'ghost' : 'primary'" size="sm" (click)="toggle()">
        {{ applied() ? 'Undo sync' : 'Apply sync' }}
      </scsc-button>
      <scsc-text size="sm" tone="muted" role="status">
        {{ applied() ? 'Applied: the change is at the top of the history.' : '' }}
      </scsc-text>
    </div>
  </scsc-card>
  <scsc-card title="History">
    <scsc-change-history [events]="history()" [headingLevel]="4" />
  </scsc-card>
</div>
`}};var f=(t,n,e=0)=>{let a=new Date;return a.setDate(a.getDate()-t),a.setHours(n,e,0,0),(t===0&&a.getTime()>Date.now()?new Date(Date.now()-12e5):a).toISOString()};var Y={id:`u-17`,name:`Maria Álvarez`,role:`Courtroom clerk`};var V={id:`j-3`,name:`Hon. Rebecca Whitfield`,role:`Judicial officer`};var q={id:`u-40`,name:`Daniel Nguyen`,role:`Calendar coordinator`};var U={id:`ej-sync`,name:`EJ sync`,kind:`system`};var B=[{id:`ev-812`,at:f(0,9,12),actor:Y,action:`status`,changes:[{field:`status`,label:`Case status`,from:`Open`,to:`Stayed`}],note:`Stay pending the appeal in H051234 (order filed in Dept. 12).`},{id:`ev-811`,at:f(0,7,30),actor:U,source:`EJ sync`,summary:`Party address updated from the e-filing envelope`,changes:[{field:`parties[P-2].address.line1`,label:`Street`,from:`200 W Hedding St`,to:`191 N First St, Suite 400`},{field:`parties[P-2].address.city`,label:`City`,from:`San Jose`,to:`Milpitas`},{field:`parties[P-2].address.zip`,label:`ZIP code`,from:`95110`,to:`95035`},{field:`parties[P-2].phone`,label:`Phone`,from:null,to:`(408) 555-0199`},{field:`parties[P-2].email`,label:`Email`,from:`legal@pacifictransit.example`,to:``}]},{id:`ev-807`,at:f(1,15,45),actor:q,action:`updated`,summary:`Rescheduled at the parties’ joint request`,changes:[{field:`cmc.date`,label:`Case management conference`,from:`2026-10-03`,to:`2026-10-17`,kind:`date`},{field:`cmc.dept`,label:`Department`,from:`Dept. 12`,to:`Dept. 14`}]},{id:`ev-801`,at:f(4,10,5),actor:V,action:`assigned`,changes:[{field:`judge`,label:`Assigned judicial officer`,from:{id:`j-9`,name:`Hon. Luis Ortega`},to:{id:`j-3`,name:`Hon. Rebecca Whitfield`}},{field:`track`,label:`Case track`,from:`Limited civil`,to:`Unlimited civil`},{field:`complex`,label:`Complex designation`,from:!1,to:!0}]}];var W=[{id:`ev-760`,at:f(12,11,20),actor:Y,action:`updated`,changes:[{field:`fees.filing`,label:`Filing fee`,from:435,to:0,kind:`currency`},{field:`feeWaiver`,label:`Fee waiver (FW-003)`,from:`Pending`,to:`Granted`}]},{id:`ev-701`,at:f(20,8,55),actor:U,source:`EJ sync`,action:`created`,summary:`Complaint for damages filed through the e-filing portal`}];var C=class t{destroyRef=g(ge);events=q$1(B);hasMore=q$1(!0);loading=q$1(!1);loadOlder(){this.loading.set(!0),_n(800).pipe(y2e(this.destroyRef)).subscribe(()=>{this.events.update(n=>[...n,...W]),this.hasMore.set(!1),this.loading.set(!1)})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-change-history-case-record-demo`]],decls:2,vars:4,consts:[[`title`,`24CV012345 · Alvarez v. Pacific Transit — history`,1,`max-w-3xl`],[`filterable`,``,3,`loadMore`,`events`,`headingLevel`,`hasMore`,`loading`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-change-history`,1),lc(`loadMore`,function(){return a.loadOlder()}),Lf()()),e&2&&(Jb(),Pv(`events`,a.events())(`headingLevel`,4)(`hasMore`,a.hasMore())(`loading`,a.loading()))},dependencies:[mN,uR],encapsulation:2})};var _=t=>new Date(Date.now()-t*36e5).toISOString();var G=[{id:`h-44`,at:_(1.5),actor:{id:`j-3`,name:`Hon. Rebecca Whitfield`,role:`Judicial officer`},action:`updated`,changes:[{field:`minutes`,label:`Minute order`,from:`Hearing continued at the request of the plaintiff. Parties to meet and confer and file a joint statement by October 10.`,to:`Hearing continued at the joint request of the parties. Parties to meet and confer and file a joint statement by October 14.`,kind:`longtext`}]},{id:`h-43`,at:_(3),actor:{id:`u-40`,name:`Daniel Nguyen`,role:`Calendar coordinator`},action:`updated`,changes:[{field:`start`,label:`Start time`,from:`2026-10-17T16:30:00Z`,to:`2026-10-17T20:00:00Z`,kind:`datetime`},{field:`room`,label:`Courtroom`,from:`Dept. 12 · Downtown Superior Court`,to:`Dept. 14 · Downtown Superior Court`},{field:`remote`,label:`Remote appearance allowed`,from:!1,to:!0},{field:`interpreter`,label:`Interpreter`,from:null,to:`Spanish`}]},{id:`h-40`,at:_(30),actor:null,source:`Odyssey import`,action:`created`,summary:`Case management conference scheduled`}];var S=class t{events=G;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-change-history-compact-demo`]],decls:2,vars:3,consts:[[`title`,`Hearing H-8812 · changes`,1,`max-w-sm`],[`compact`,``,3,`events`,`headingLevel`,`changeLimit`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-change-history`,1),Lf()),e&2&&(Jb(),Pv(`events`,a.events)(`headingLevel`,4)(`changeLimit`,2))},dependencies:[mN,uR],encapsulation:2})};function Z(t,n){if(t&1&&(Ga(0,`blockquote`,3),G_(1),Lf()),t&2){let e=y_().$implicit;Jb(),$f(` `,e.note,` `)}}function K(t,n){t&1&&(Ga(0,`scsc-badge`,4),G_(1,`New grant`),Lf())}function $(t,n){if(t&1&&(JT(0,K,2,0,`scsc-badge`,4),uc(1,`scsc-field-changes`,5)),t&2){let e=y_(),a=e.$implicit,D=e.changes;t_(a.action===`created`?0:-1),Jb(),Pv(`changes`,D)}}function X(t,n){if(t&1&&JT(0,Z,2,1,`blockquote`,3)(1,$,2,2),t&2){let e=n.$implicit;t_(e.action===`commented`?0:1)}}var O=t=>new Date(Date.now()-t*36e5).toISOString();var Q=[{id:`g-31`,at:O(2),actor:{id:`u-5`,name:`Priya Raman`,role:`Access administrator`},action:`commented`,note:`Approved for the Juvenile Justice Center pilot. Review again after the December calendar.`},{id:`g-30`,at:O(2.2),actor:{id:`u-5`,name:`Priya Raman`,role:`Access administrator`},action:`status`,changes:[{field:`status`,label:`Grant status`,from:`Pending review`,to:`Active`}]},{id:`g-29`,at:O(28),actor:{id:`u-12`,name:`Marcus Lee`,role:`Probation supervisor`},action:`created`,changes:[{field:`scope`,label:`Scope`,from:null,to:`Juvenile delinquency case files`},{field:`expires`,label:`Expires`,from:null,to:`2027-03-31`,kind:`date`},{field:`users`,label:`People`,from:null,to:[`A. Soto`,`J. Kim`,`R. Patel`]}]}];var b=class t{events=Q;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-change-history-custom-event-demo`]],decls:3,vars:2,consts:[[1,`max-w-2xl`],[3,`events`,`headingLevel`],[`scscChangeEvent`,``],[1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-3`,`py-2`],[`tone`,`info`,`soft`,``,`size`,`sm`,1,`mb-1`],[3,`changes`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-change-history`,1),Ov(2,X,2,1,`ng-template`,2),Lf()()),e&2&&(Jb(),Pv(`events`,a.events)(`headingLevel`,3))},dependencies:[jn,Zr,uR,ii],encapsulation:2})};var ee={caseNumber:`25FL004512`,status:`Open`,nextHearing:`2026-10-21`,filingFee:435,flags:[`Interpreter: Vietnamese`],parties:[{partyId:`P-1`,name:`Linh Tran`,role:`Petitioner`,address:{line1:`1050 Park Ave`,city:`San Jose`,zip:`95126`}},{partyId:`P-2`,name:`Minh Tran`,role:`Respondent`,address:{line1:`88 Market St`,city:`San Jose`,zip:`95113`}}],rowVersion:14,syncedAt:`2026-09-29T06:00:00Z`};var te={caseNumber:`25FL004512`,status:`Open`,nextHearing:`2026-11-04`,filingFee:0,flags:[`Interpreter: Vietnamese`,`Fee waiver granted`],parties:[{partyId:`P-2`,name:`Minh Tran`,role:`Respondent`,address:{line1:`2400 Moorpark Ave`,city:`San Jose`,zip:`95128`}},{partyId:`P-1`,name:`Linh Tran`,role:`Petitioner`,address:{line1:`1050 Park Ave`,city:`San Jose`,zip:`95126`}}],rowVersion:15,syncedAt:`2026-09-30T06:00:00Z`};var ae={arrayKeys:{parties:`partyId`},ignore:[`rowVersion`,`syncedAt`],labels:{status:`Case status`,nextHearing:`Next hearing`,filingFee:`Filing fee`,flags:`Case flags`,"parties[P-2].address.line1":`Respondent street`,"parties[P-2].address.zip":`Respondent ZIP code`},kinds:{nextHearing:`date`,filingFee:`currency`}};var w=class t{pending=ut(()=>Cne(ee,te,ae));applied=q$1(!1);history=q$1([{id:`sync-0`,at:new Date(Date.now()-936e5).toISOString(),actor:{id:`u-17`,name:`Maria Álvarez`,role:`Family law clerk`},action:`created`,summary:`Petition for dissolution filed at the Family Justice Center`}]);toggle(){if(this.applied()){this.history.update(n=>n.filter(e=>e.source!==`EJ sync`)),this.applied.set(!1);return}this.history.update(n=>[{id:`sync-${n.length}`,at:new Date().toISOString(),actor:{id:`ej-sync`,name:`EJ sync`,kind:`system`},source:`EJ sync`,changes:this.pending()},...n]),this.applied.set(!0)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-change-history-snapshots-demo`]],decls:12,vars:8,consts:[[1,`grid`,`max-w-4xl`,`gap-4`,`lg:grid-cols-2`],[`title`,`EJ sync preview · 25FL004512`],[`size`,`sm`,1,`mb-2`],[3,`changes`,`limit`],[1,`mt-3`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`size`,`sm`,3,`click`,`variant`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[`title`,`History`],[3,`events`,`headingLevel`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-card`,1)(2,`scsc-text`,2),G_(3),Lf(),uc(4,`scsc-field-changes`,3),Ga(5,`div`,4)(6,`scsc-button`,5),lc(`click`,function(){return a.toggle()}),G_(7),Lf(),Ga(8,`scsc-text`,6),G_(9),Lf()()(),Ga(10,`scsc-card`,7),uc(11,`scsc-change-history`,8),Lf()()),e&2&&(Jb(3),$f(` `,a.pending().length,` fields differ from the court record: `),Jb(),Pv(`changes`,a.pending())(`limit`,0),Jb(2),Pv(`variant`,a.applied()?`ghost`:`primary`),Jb(),$f(` `,a.applied()?`Undo sync`:`Apply sync`,` `),Jb(2),$f(` `,a.applied()?`Applied: the change is at the top of the history.`:``,` `),Jb(2),Pv(`events`,a.history())(`headingLevel`,4))},dependencies:[sn,mN,uR,ii,NE],encapsulation:2})};var xe={slug:`change-history`,name:`Change History`,classes:[`ScscChangeHistory`,`ScscChangeEventDef`,`ScscFieldChanges`],category:`Data Display`,whenToUse:[`The history of one record, shown on that record: a case, a hearing, a grant, a department assignment. Who changed what, from what to what, and when. It replaces the hand-rolled change logs in it-projects, Court Access Portal (grant history) and Venue (assignment history).`,"For every action across the system (sign-ins, role grants, integration failures), with filters by actor, action and date and a CSV export, use `scsc-audit-log`. For a simple list of dated milestones without field changes, use `scsc-timeline`.",'Pass `events` (`ScscChangeEvent[]`): `at`, `actor` (`ScscActor`, or `null` for the system), an `action`, an optional `summary`, `note` and `source` ("EJ sync"), and the `changes` (`ScscFieldChange[]`: `field`, `label`, `from`, `to`, `kind`). Events are sorted by time (`order`) and grouped by day: Today, Yesterday, then the date.','Values are formatted by `kind` in the active `SCSC_LOCALE`: `date` (a bare `YYYY-MM-DD` stays on its day in every time zone), `datetime`, `number`, `currency`, `boolean` (Yes/No), `list`, `reference` (reads `label`/`name`), `json`, and `longtext`, shown as an inline word diff. Without a `kind` it is inferred. `null`, `undefined`, `""` and `[]` read "(empty)".','Build `changes` from two snapshots with `diffObjects(before, after, { labels, kinds, arrayKeys, ignore })`: it walks nested objects by dot path, matches array items by key (`arrayKeys: { parties: "partyId" }`), treats primitive arrays as one list and skips bookkeeping fields. `diffWords(a, b)` is the word diff behind `longtext`.','`filterable` adds person, field and text filters (client side; `[(filters)]` to keep them). For server paging set `hasMore`, append older events on `loadMore`, and set `loading` meanwhile. `compact` suits side panels; `changeLimit` (default 3) collapses the rest behind "Show N more". Replace an event\'s body with `<ng-template scscChangeEvent let-event let-changes="changes">`.',"`scsc-field-changes` is the change list on its own, for a confirmation step or a sync preview; `scsc-audit-log` uses it too."],setup:`import { ScscChangeHistory, ScscFieldChanges, diffObjects } from '@scscourt/design';

// icons it draws (with provideScscIcons(SCSC_ICONS), all are included)
import { ArrowRight, ChevronDown, ChevronUp, Database, History, Search, X } from 'lucide-angular';
provideScscIcons({ ArrowRight, ChevronDown, ChevronUp, Database, History, Search, X });

// Spanish (or bind SCSC_HISTORY_LABELS to your language setting)
{ provide: SCSC_HISTORY_LABELS, useValue: signal(SCSC_HISTORY_LABELS_ES) }`,demos:[{id:`change-history-case-record`,title:`Case record with filters and paging`,description:`Status change, an EJ sync address update (a system actor, five changes collapsed after three), a hearing reschedule and a judicial reassignment. Filter by person, field or text; the count is announced. "Load older changes" stands in for a paged API: focus moves to the first new event.`,component:C,source:y[`change-history-case-record`]},{id:`change-history-compact`,title:`Compact, in a side panel`,description:"`compact` with `changeLimit` 2. The minute order is `longtext`: a word diff with deleted and inserted words in `<del>` and `<ins>`, each marked in words for screen readers. Times, a Yes/No value and a value set from empty.",component:S,source:y[`change-history-compact`]},{id:`change-history-snapshots`,title:`Changes from snapshots (EJ sync)`,description:"`diffObjects` compares the court record with the EJ record: parties matched by `partyId` (their order differs), `rowVersion` and `syncedAt` ignored, labels and kinds by path. `scsc-field-changes` previews the result; Apply records it as an EJ sync event.",component:w,source:y[`change-history-snapshots`],layout:`full-bleed`},{id:`change-history-custom-event`,title:`Custom event body`,description:"`<ng-template scscChangeEvent>` shows a comment as a quote and marks the created event; the actor, action and time stay the history's own.",component:b,source:y[`change-history-custom-event`]}],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves through the filters (Person, Field, Search, Clear), then each event's time, its "Show N more changes" button and any links in it, then "Load older changes".`},{keys:`Focus on a time`,action:`Shows the absolute date and time in a tooltip. **Escape** hides it until focus or the pointer leaves.`},{keys:`Enter / Space`,action:`On "Show N more changes": shows or hides the collapsed changes (focus stays on the button). On "Load older changes": asks for older events; when they arrive, focus moves to the first new one.`},{keys:`Arrow keys`,action:`In the Person and Field filters: the native select keys.`},{keys:`Escape (in Search)`,action:`Clears the search text.`}],aria:['Each day is a heading (`role="heading"`, `aria-level` from `headingLevel`) followed by an ordered list (`role="list"`, named by the heading with `aria-labelledby`) with one `<li>` per event.','The time is a focusable `<time datetime="…">` (ISO 8601). Its text is the relative time followed by the absolute date and time in visually hidden text, and the absolute time is also its tooltip (`aria-describedby`).','Each change is one sentence for assistive technology ("Case status changed from Open to Stayed", "Phone set to …", "Email cleared, was …"); the visual "Field: old → new" is `aria-hidden`. A long-text diff is introduced ("Minute order changed:") and its edits are `<del>` and `<ins>`, each starting "deleted:" / "inserted:" and ending "end of deletion." / "end of insertion." in hidden text.','"Show N more changes" is a disclosure button with `aria-expanded` and `aria-controls` pointing at the change list. The avatar is `aria-hidden` (the name is beside it).','The filters are a `role="group"` named "Filter changes"; each control has a `<label>`. The result count is announced through `ScscAnnouncer` when a filter changes ("3 results", "No results"), and "N more changes loaded" when older events arrive. The host is `aria-busy` while `loading`; the first load shows skeletons with a "Loading" status.'],appMustProvide:["A `headingLevel` that fits the page outline: 3 under a page section `<h2>`, 4 inside a card (whose title is an `<h3>`).",`A visible heading or label for the history as a whole ("Change history"); the component does not draw one.`,"Readable `label`s for fields (`Case status`, not `case_status_cd`), and `format` or `kind` for values that are codes.",'Unique, stable event `id`s: they key the list, the filters and the focus after "Load older changes".',"Translations through `SCSC_HISTORY_LABELS` (English and Spanish are included) and `SCSC_LABELS`; dates and numbers follow `SCSC_LOCALE`. Set `timeZone` (e.g. `America/Los_Angeles`) when users may be elsewhere than the court."],a11y:[`Old and new values are always stated in words, never only by strikethrough or colour (1.4.1): the old value is struck through and the new one bold for sighted users, and the sentence is what screen readers hear.`,'System changes (`actor: null`, or `kind: "system"`) read "System" or the integration\'s name, with a distinct icon instead of an avatar, and the `source` is written out ("via EJ sync").',`The absolute time is reachable by keyboard (the time is focusable) and in text for screen readers; its tooltip can be dismissed with Escape and stays while hovered (1.4.13).`,"Buttons are at least 32px high (24px minimum in compact density). Muted text is `text-base-content/70` or darker.","Revealed changes fade in with the `scsc-anim-fade-in` preset, which follows reduced motion. Relative times are computed when the list renders; they do not tick."],related:[`audit-log`,`timeline`,`avatar`,`empty-state`]};export{xe as CHANGE_HISTORY_DOCS};