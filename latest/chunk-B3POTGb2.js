import{Es as sD,Fn as Xr,Go as g$1,Ka as Ov,Ms as uc,Na as Jb,Nr as jo,To as _n,Vi as y2e,Xa as Pv,Yo as iD,bo as Y_,cs as lc,qo as ge,ra as Af,va as G_,vr as gR,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{i as Zt}from"./chunk-B29IWKja.js";var y={"audit-log-client":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAuditLog, type ScscActor, type ScscAuditEntry } from '@scscourt/design';

const minutesAgo = (m: number): string => new Date(Date.now() - m * 60_000).toISOString();

const CLERK: ScscActor = { id: 'u-17', name: 'Maria \xC1lvarez', role: 'Courtroom clerk' };
const ADMIN: ScscActor = { id: 'u-2', name: 'Kevin Tran', role: 'System administrator' };
const CALENDAR: ScscActor = { id: 'u-40', name: 'Daniel Nguyen', role: 'Calendar coordinator' };
const EJ_SYNC: ScscActor = { id: 'svc-ej', name: 'EJ sync', kind: 'system' };

const CASE = {
  type: 'Case',
  id: '24CV012345',
  label: 'Alvarez v. Pacific Transit',
  href: '/cases/24CV012345',
};

const ENTRIES: ScscAuditEntry[] = [
  {
    id: 'a-90231',
    at: minutesAgo(12),
    actor: CLERK,
    action: 'case.status.update',
    target: CASE,
    summary: 'Changed case status to Stayed',
    outcome: 'success',
    changes: [{ field: 'status', label: 'Case status', from: 'Open', to: 'Stayed' }],
    ip: '10.20.4.17',
  },
  {
    id: 'a-90230',
    at: minutesAgo(48),
    actor: EJ_SYNC,
    action: 'party.address.sync',
    target: CASE,
    summary: 'Could not update the respondent\u2019s address: the party record is locked',
    outcome: 'failure',
    details: {
      envelope: 'EF-2026-0930-4471',
      error: 'PARTY_LOCKED',
      party: 'P-2',
      retryAt: '07:30',
    },
  },
  {
    id: 'a-90226',
    at: minutesAgo(95),
    actor: CALENDAR,
    action: 'hearing.reschedule',
    target: { type: 'Hearing', id: 'H-8812', label: 'Case management conference \xB7 24CV012345' },
    summary: 'Rescheduled the case management conference',
    outcome: 'success',
    changes: [
      { field: 'date', label: 'Hearing date', from: '2026-10-03', to: '2026-10-17', kind: 'date' },
      { field: 'dept', label: 'Department', from: 'Dept. 12', to: 'Dept. 14' },
    ],
    ip: '10.20.6.51',
  },
  {
    id: 'a-90219',
    at: minutesAgo(60 * 5),
    actor: ADMIN,
    action: 'user.role.grant',
    target: { type: 'User', id: 'u-17', label: 'Maria \xC1lvarez' },
    summary: 'Granted the Courtroom clerk role',
    outcome: 'success',
    changes: [
      { field: 'roles', label: 'Roles', from: ['Viewer'], to: ['Viewer', 'Courtroom clerk'] },
    ],
    ip: '10.20.1.4',
  },
  {
    id: 'a-90214',
    at: minutesAgo(60 * 6),
    actor: { id: 'u-88', name: 'Unknown user', role: null },
    action: 'user.sign-in',
    summary: 'Sign-in rejected: too many attempts',
    outcome: 'failure',
    ip: '203.0.113.42',
  },
  {
    id: 'a-90198',
    at: minutesAgo(60 * 26),
    actor: CLERK,
    action: 'assignment.update',
    target: { type: 'Department', id: 'D-14', label: 'Dept. 14 \xB7 Civil' },
    summary: 'Assigned Hon. Rebecca Whitfield to Dept. 14',
    outcome: 'success',
    changes: [
      {
        field: 'judge',
        label: 'Judicial officer',
        from: 'Hon. Luis Ortega',
        to: 'Hon. Rebecca Whitfield',
      },
      { field: 'start', label: 'Start date', from: null, to: '2026-10-01', kind: 'date' },
    ],
  },
  {
    id: 'a-90190',
    at: minutesAgo(60 * 28),
    actor: EJ_SYNC,
    action: 'party.address.sync',
    target: {
      type: 'Case',
      id: '25FL004512',
      label: 'In re Marriage of Tran',
      href: '/cases/25FL004512',
    },
    summary: 'Updated the respondent\u2019s address from the e-filing envelope',
    outcome: 'success',
    changes: [
      { field: 'address.line1', label: 'Street', from: '88 Market St', to: '2400 Moorpark Ave' },
      { field: 'address.zip', label: 'ZIP code', from: '95113', to: '95128' },
    ],
  },
  {
    id: 'a-90177',
    at: minutesAgo(60 * 50),
    actor: ADMIN,
    action: 'fee.waiver.update',
    target: {
      type: 'Case',
      id: '25FL004512',
      label: 'In re Marriage of Tran',
      href: '/cases/25FL004512',
    },
    summary: 'Recorded the fee waiver order (FW-003)',
    outcome: 'success',
    changes: [{ field: 'fee', label: 'Filing fee', from: 435, to: 0, kind: 'currency' }],
  },
];

@Component({
  selector: 'app-audit-log-client-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAuditLog],
  template: \`
    <!-- Client mode: filters, pages and exports the array it is given. -->
    <scsc-audit-log
      caption="Audit log \xB7 Civil division"
      [entries]="entries"
      [actionLabels]="actions"
      [pageSize]="5"
      exportFilename="civil-audit-log.csv"
    />
  \`,
})
export class AuditLogClientDemo {
  protected readonly entries = ENTRIES;
  protected readonly actions: Record<string, string> = {
    'case.status.update': 'Status changed',
    'party.address.sync': 'Address synced',
    'hearing.reschedule': 'Hearing rescheduled',
    'user.role.grant': 'Role granted',
    'user.sign-in': 'Sign-in',
    'assignment.update': 'Assignment changed',
    'fee.waiver.update': 'Fee waiver',
  };
}
`,html:`<!-- Client mode: filters, pages and exports the array it is given. -->
<scsc-audit-log
  caption="Audit log \xB7 Civil division"
  [entries]="entries"
  [actionLabels]="actions"
  [pageSize]="5"
  exportFilename="civil-audit-log.csv"
/>
`},"audit-log-payload-view":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAuditDetailDef, ScscAuditLog, type ScscAuditEntry } from '@scscourt/design';
import { ScscPayloadView } from '@scscourt/design/code';

const minutesAgo = (m: number): string => new Date(Date.now() - m * 60_000).toISOString();

const NOTIFICATION = { id: 'svc-notify', name: 'Notification service', kind: 'system' as const };

const ENTRIES: ScscAuditEntry[] = [
  {
    id: 'n-5521',
    at: minutesAgo(4),
    actor: NOTIFICATION,
    action: 'notification.send',
    target: { type: 'Case', id: '24CV012345', label: 'Alvarez v. Pacific Transit' },
    summary: 'Hearing reminder emailed to 2 parties',
    outcome: 'success',
    details: JSON.stringify({
      template: 'hearing-reminder',
      channel: 'email',
      recipients: ['m.alvarez@example.com', 'legal@pacifictransit.example'],
      hearing: { id: 'H-8812', date: '2026-10-17', department: 'Dept. 14' },
      provider: { messageId: '0100019a-6f3c-4b1e', status: 202 },
    }),
  },
  {
    id: 'n-5519',
    at: minutesAgo(19),
    actor: NOTIFICATION,
    action: 'odyssey.callback',
    target: { type: 'Filing', id: 'EF-2026-0930-4471', label: 'Answer to complaint' },
    summary: 'Odyssey rejected the filing callback',
    outcome: 'failure',
    details:
      '<FilingReviewResponse xmlns="urn:oasis:names:tc:legalxml-courtfiling:schema:xsd:ReviewFilingCallbackMessage-4.0">' +
      '<Status>Rejected</Status><Reason code="DOC-07">Missing proof of service</Reason></FilingReviewResponse>',
  },
];

@Component({
  selector: 'app-audit-log-payload-view-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAuditDetailDef, ScscAuditLog, ScscPayloadView],
  template: \`
    <scsc-audit-log
      caption="Integration log"
      [entries]="entries"
      [(expanded)]="expanded"
      [exportable]="false"
      [actionLabels]="actions"
    >
      <!-- The core library cannot depend on the code entry; the app projects the viewer here. -->
      <ng-template scscAuditDetail let-entry let-details="details">
        <scsc-payload-view
          [heading]="'Payload for ' + entry.id"
          [headingLevel]="4"
          [payload]="$any(details)"
          maxHeight="18rem"
        />
      </ng-template>
    </scsc-audit-log>
  \`,
})
export class AuditLogPayloadViewDemo {
  protected readonly entries = ENTRIES;
  /** The first row starts open, so the viewer shows without a click. */
  protected readonly expanded = signal<readonly string[]>(['n-5521']);
  protected readonly actions: Record<string, string> = {
    'notification.send': 'Notification sent',
    'odyssey.callback': 'Odyssey callback',
  };
}
`,html:`<scsc-audit-log
  caption="Integration log"
  [entries]="entries"
  [(expanded)]="expanded"
  [exportable]="false"
  [actionLabels]="actions"
>
  <!-- The core library cannot depend on the code entry; the app projects the viewer here. -->
  <ng-template scscAuditDetail let-entry let-details="details">
    <scsc-payload-view
      [heading]="'Payload for ' + entry.id"
      [headingLevel]="4"
      [payload]="$any(details)"
      maxHeight="18rem"
    />
  </ng-template>
</scsc-audit-log>
`},"audit-log-server":{ts:`import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ScscAuditLog,
  ScscCheckbox,
  type ScscActor,
  type ScscAuditEntry,
  type ScscAuditQuery,
} from '@scscourt/design';
import { Subscription, timer } from 'rxjs';

const ACTORS: ScscActor[] = [
  { id: 'u-17', name: 'Maria \xC1lvarez', role: 'Courtroom clerk' },
  { id: 'u-40', name: 'Daniel Nguyen', role: 'Calendar coordinator' },
  { id: 'u-2', name: 'Kevin Tran', role: 'System administrator' },
  { id: 'svc-ej', name: 'EJ sync', kind: 'system' },
];

const ACTIONS: Record<string, string> = {
  'case.status.update': 'Status changed',
  'hearing.reschedule': 'Hearing rescheduled',
  'party.address.sync': 'Address synced',
  'document.seal': 'Document sealed',
};

const CASES = [
  { id: '24CV012345', label: 'Alvarez v. Pacific Transit' },
  { id: '25FL004512', label: 'In re Marriage of Tran' },
  { id: '24CR078810', label: 'People v. Ramirez' },
  { id: '25PR000931', label: 'Estate of Okafor' },
];

/** 64 entries, newest first: what the API would hold. */
const DATABASE: ScscAuditEntry[] = Array.from({ length: 64 }, (_, i): ScscAuditEntry => {
  const actor = ACTORS[i % ACTORS.length];
  const action = Object.keys(ACTIONS)[i % 4];
  const kase = CASES[(i * 7) % CASES.length];
  const failed = i % 11 === 5;
  return {
    id: \`a-\${91000 - i}\`,
    at: new Date(Date.now() - (i * 97 + 5) * 60_000).toISOString(),
    actor,
    action,
    target: { type: 'Case', id: kase.id, label: kase.label, href: \`/cases/\${kase.id}\` },
    summary: failed
      ? \`\${ACTIONS[action]} failed: record locked\`
      : \`\${ACTIONS[action]} on \${kase.id}\`,
    outcome: failed ? 'failure' : 'success',
    ip: actor.kind === 'system' ? undefined : \`10.20.4.\${(i % 40) + 10}\`,
  };
});

@Component({
  selector: 'app-audit-log-server-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAuditLog, ScscCheckbox],
  template: \`
    <label class="mb-3 flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        scsc-checkbox
        [checked]="failNext()"
        (change)="failNext.set(!failNext())"
      />
      Make the next request fail
    </label>
    <!-- Server mode: the log asks for each page; the app answers with rows and a total. -->
    <scsc-audit-log
      mode="server"
      label="Audit log, all divisions"
      [entries]="rows()"
      [total]="total()"
      [loading]="loading()"
      [error]="failed()"
      [pageSize]="10"
      [actorOptions]="actors"
      [actionOptions]="actionCodes"
      [actionLabels]="actions"
      (queryChange)="load($event)"
      (retry)="reload()"
    />
  \`,
})
export class AuditLogServerDemo {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly actors = ACTORS;
  protected readonly actions = ACTIONS;
  protected readonly actionCodes = Object.keys(ACTIONS);
  protected readonly rows = signal<ScscAuditEntry[]>([]);
  protected readonly total = signal(0);
  protected readonly loading = signal(false);
  protected readonly failed = signal(false);
  protected readonly failNext = signal(false);
  private last: ScscAuditQuery | null = null;
  private request?: Subscription;

  /** Stands in for \`GET /api/audit?page=\u2026&actor=\u2026\`: filters and pages after some latency. */
  protected load(query: ScscAuditQuery): void {
    this.last = query;
    this.request?.unsubscribe();
    this.loading.set(true);
    this.failed.set(false);
    this.request = timer(700)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.loading.set(false);
        if (this.failNext()) {
          this.failNext.set(false);
          this.failed.set(true);
          return;
        }
        // The API filters by the court's local day; UTC days keep this stand-in short.
        const f = query.filters;
        const text = f.text.trim().toLowerCase();
        const matches = DATABASE.filter(
          (e) =>
            (!f.actor || e.actor?.id === f.actor) &&
            (!f.action || e.action === f.action) &&
            (!f.outcome || e.outcome === f.outcome) &&
            (!f.from || e.at.toString().slice(0, 10) >= f.from) &&
            (!f.to || e.at.toString().slice(0, 10) <= f.to) &&
            (!text || \`\${e.summary} \${e.target?.label}\`.toLowerCase().includes(text)),
        );
        const start = (query.page - 1) * query.pageSize;
        this.rows.set(matches.slice(start, start + query.pageSize));
        this.total.set(matches.length);
      });
  }

  protected reload(): void {
    if (this.last) this.load(this.last);
  }
}
`,html:`<label class="mb-3 flex items-center gap-2 text-sm">
  <input
    type="checkbox"
    scsc-checkbox
    [checked]="failNext()"
    (change)="failNext.set(!failNext())"
  />
  Make the next request fail
</label>
<!-- Server mode: the log asks for each page; the app answers with rows and a total. -->
<scsc-audit-log
  mode="server"
  label="Audit log, all divisions"
  [entries]="rows()"
  [total]="total()"
  [loading]="loading()"
  [error]="failed()"
  [pageSize]="10"
  [actorOptions]="actors"
  [actionOptions]="actionCodes"
  [actionLabels]="actions"
  (queryChange)="load($event)"
  (retry)="reload()"
/>
`}};var c=o=>new Date(Date.now()-o*6e4).toISOString();var F={id:`u-17`,name:`Maria Álvarez`,role:`Courtroom clerk`};var P={id:`u-2`,name:`Kevin Tran`,role:`System administrator`};var $={id:`u-40`,name:`Daniel Nguyen`,role:`Calendar coordinator`};var M={id:`svc-ej`,name:`EJ sync`,kind:`system`};var z={type:`Case`,id:`24CV012345`,label:`Alvarez v. Pacific Transit`,href:`/cases/24CV012345`};var U=[{id:`a-90231`,at:c(12),actor:F,action:`case.status.update`,target:z,summary:`Changed case status to Stayed`,outcome:`success`,changes:[{field:`status`,label:`Case status`,from:`Open`,to:`Stayed`}],ip:`10.20.4.17`},{id:`a-90230`,at:c(48),actor:M,action:`party.address.sync`,target:z,summary:`Could not update the respondent’s address: the party record is locked`,outcome:`failure`,details:{envelope:`EF-2026-0930-4471`,error:`PARTY_LOCKED`,party:`P-2`,retryAt:`07:30`}},{id:`a-90226`,at:c(95),actor:$,action:`hearing.reschedule`,target:{type:`Hearing`,id:`H-8812`,label:`Case management conference · 24CV012345`},summary:`Rescheduled the case management conference`,outcome:`success`,changes:[{field:`date`,label:`Hearing date`,from:`2026-10-03`,to:`2026-10-17`,kind:`date`},{field:`dept`,label:`Department`,from:`Dept. 12`,to:`Dept. 14`}],ip:`10.20.6.51`},{id:`a-90219`,at:c(300),actor:P,action:`user.role.grant`,target:{type:`User`,id:`u-17`,label:`Maria Álvarez`},summary:`Granted the Courtroom clerk role`,outcome:`success`,changes:[{field:`roles`,label:`Roles`,from:[`Viewer`],to:[`Viewer`,`Courtroom clerk`]}],ip:`10.20.1.4`},{id:`a-90214`,at:c(360),actor:{id:`u-88`,name:`Unknown user`,role:null},action:`user.sign-in`,summary:`Sign-in rejected: too many attempts`,outcome:`failure`,ip:`203.0.113.42`},{id:`a-90198`,at:c(1560),actor:F,action:`assignment.update`,target:{type:`Department`,id:`D-14`,label:`Dept. 14 · Civil`},summary:`Assigned Hon. Rebecca Whitfield to Dept. 14`,outcome:`success`,changes:[{field:`judge`,label:`Judicial officer`,from:`Hon. Luis Ortega`,to:`Hon. Rebecca Whitfield`},{field:`start`,label:`Start date`,from:null,to:`2026-10-01`,kind:`date`}]},{id:`a-90190`,at:c(1680),actor:M,action:`party.address.sync`,target:{type:`Case`,id:`25FL004512`,label:`In re Marriage of Tran`,href:`/cases/25FL004512`},summary:`Updated the respondent’s address from the e-filing envelope`,outcome:`success`,changes:[{field:`address.line1`,label:`Street`,from:`88 Market St`,to:`2400 Moorpark Ave`},{field:`address.zip`,label:`ZIP code`,from:`95113`,to:`95128`}]},{id:`a-90177`,at:c(3e3),actor:P,action:`fee.waiver.update`,target:{type:`Case`,id:`25FL004512`,label:`In re Marriage of Tran`,href:`/cases/25FL004512`},summary:`Recorded the fee waiver order (FW-003)`,outcome:`success`,changes:[{field:`fee`,label:`Filing fee`,from:435,to:0,kind:`currency`}]}];var f=class o{entries=U;actions={"case.status.update":`Status changed`,"party.address.sync":`Address synced`,"hearing.reschedule":`Hearing rescheduled`,"user.role.grant":`Role granted`,"user.sign-in":`Sign-in`,"assignment.update":`Assignment changed`,"fee.waiver.update":`Fee waiver`};static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-audit-log-client-demo`]],decls:1,vars:3,consts:[[`caption`,`Audit log · Civil division`,`exportFilename`,`civil-audit-log.csv`,3,`entries`,`actionLabels`,`pageSize`]],template:function(e,t){e&1&&uc(0,`scsc-audit-log`,0),e&2&&Pv(`entries`,t.entries)(`actionLabels`,t.actions)(`pageSize`,5)},dependencies:[gR],encapsulation:2})};function W(o,a){if(o&1&&uc(0,`scsc-payload-view`,2),o&2){let e=a.$implicit,t=a.details;Pv(`heading`,`Payload for `+e.id)(`headingLevel`,4)(`payload`,t)}}var H=o=>new Date(Date.now()-o*6e4).toISOString();var q={id:`svc-notify`,name:`Notification service`,kind:`system`};var K=[{id:`n-5521`,at:H(4),actor:q,action:`notification.send`,target:{type:`Case`,id:`24CV012345`,label:`Alvarez v. Pacific Transit`},summary:`Hearing reminder emailed to 2 parties`,outcome:`success`,details:JSON.stringify({template:`hearing-reminder`,channel:`email`,recipients:[`m.alvarez@example.com`,`legal@pacifictransit.example`],hearing:{id:`H-8812`,date:`2026-10-17`,department:`Dept. 14`},provider:{messageId:`0100019a-6f3c-4b1e`,status:202}})},{id:`n-5519`,at:H(19),actor:q,action:`odyssey.callback`,target:{type:`Filing`,id:`EF-2026-0930-4471`,label:`Answer to complaint`},summary:`Odyssey rejected the filing callback`,outcome:`failure`,details:`<FilingReviewResponse xmlns="urn:oasis:names:tc:legalxml-courtfiling:schema:xsd:ReviewFilingCallbackMessage-4.0"><Status>Rejected</Status><Reason code="DOC-07">Missing proof of service</Reason></FilingReviewResponse>`}];var S=class o{entries=K;expanded=q$1([`n-5521`]);actions={"notification.send":`Notification sent`,"odyssey.callback":`Odyssey callback`};static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-audit-log-payload-view-demo`]],decls:2,vars:4,consts:[[`caption`,`Integration log`,3,`expandedChange`,`entries`,`expanded`,`exportable`,`actionLabels`],[`scscAuditDetail`,``],[`maxHeight`,`18rem`,3,`heading`,`headingLevel`,`payload`]],template:function(e,t){e&1&&(Ga(0,`scsc-audit-log`,0),sD(`expandedChange`,function(s){return Y_(t.expanded,s)||(t.expanded=s),s}),Ov(1,W,1,3,`ng-template`,1),Lf()),e&2&&(Pv(`entries`,t.entries),iD(`expanded`,t.expanded),Pv(`exportable`,!1)(`actionLabels`,t.actions))},dependencies:[Xr,gR,Zt],encapsulation:2})};var C=[{id:`u-17`,name:`Maria Álvarez`,role:`Courtroom clerk`},{id:`u-40`,name:`Daniel Nguyen`,role:`Calendar coordinator`},{id:`u-2`,name:`Kevin Tran`,role:`System administrator`},{id:`svc-ej`,name:`EJ sync`,kind:`system`}];var g={"case.status.update":`Status changed`,"hearing.reschedule":`Hearing rescheduled`,"party.address.sync":`Address synced`,"document.seal":`Document sealed`};var J=[{id:`24CV012345`,label:`Alvarez v. Pacific Transit`},{id:`25FL004512`,label:`In re Marriage of Tran`},{id:`24CR078810`,label:`People v. Ramirez`},{id:`25PR000931`,label:`Estate of Okafor`}];var B=Array.from({length:64},(o,a)=>{let e=C[a%C.length],t=Object.keys(g)[a%4],i=J[a*7%J.length],s=a%11===5;return{id:`a-${91e3-a}`,at:new Date(Date.now()-(a*97+5)*6e4).toISOString(),actor:e,action:t,target:{type:`Case`,id:i.id,label:i.label,href:`/cases/${i.id}`},summary:s?`${g[t]} failed: record locked`:`${g[t]} on ${i.id}`,outcome:s?`failure`:`success`,ip:e.kind===`system`?void 0:`10.20.4.${a%40+10}`}});var b=class o{destroyRef=g$1(ge);actors=C;actions=g;actionCodes=Object.keys(g);rows=q$1([]);total=q$1(0);loading=q$1(!1);failed=q$1(!1);failNext=q$1(!1);last=null;request;load(a){this.last=a,this.request?.unsubscribe(),this.loading.set(!0),this.failed.set(!1),this.request=_n(700).pipe(y2e(this.destroyRef)).subscribe(()=>{if(this.loading.set(!1),this.failNext()){this.failNext.set(!1),this.failed.set(!0);return}let e=a.filters,t=e.text.trim().toLowerCase(),i=B.filter(d=>(!e.actor||d.actor?.id===e.actor)&&(!e.action||d.action===e.action)&&(!e.outcome||d.outcome===e.outcome)&&(!e.from||d.at.toString().slice(0,10)>=e.from)&&(!e.to||d.at.toString().slice(0,10)<=e.to)&&(!t||`${d.summary} ${d.target?.label}`.toLowerCase().includes(t))),s=(a.page-1)*a.pageSize;this.rows.set(i.slice(s,s+a.pageSize)),this.total.set(i.length)})}reload(){this.last&&this.load(this.last)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-audit-log-server-demo`]],decls:4,vars:9,consts:[[1,`mb-3`,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[`mode`,`server`,`label`,`Audit log, all divisions`,3,`queryChange`,`retry`,`entries`,`total`,`loading`,`error`,`pageSize`,`actorOptions`,`actionOptions`,`actionLabels`]],template:function(e,t){e&1&&(Ga(0,`label`,0)(1,`input`,1),lc(`change`,function(){return t.failNext.set(!t.failNext())}),Lf(),G_(2,` Make the next request fail `),Lf(),Ga(3,`scsc-audit-log`,2),lc(`queryChange`,function(s){return t.load(s)})(`retry`,function(){return t.reload()}),Lf()),e&2&&(Jb(),Pv(`checked`,t.failNext()),Jb(2),Pv(`entries`,t.rows())(`total`,t.total())(`loading`,t.loading())(`error`,t.failed())(`pageSize`,10)(`actorOptions`,t.actors)(`actionOptions`,t.actionCodes)(`actionLabels`,t.actions))},dependencies:[gR,jo],encapsulation:2})};var ye={slug:`audit-log`,name:`Audit Log`,classes:[`ScscAuditLog`,`ScscAuditDetailDef`],category:`Data Display`,whenToUse:["The system-wide record of privileged actions: sign-ins, role grants, status changes, integration syncs and their failures. It replaces the audit screens of Court Access Portal, Notification and Atlas. For the history of one record, shown on that record, use `scsc-change-history`.","Pass `entries` (`ScscAuditEntry[]`): `at`, `actor` (`null` for the system), an `action` code, the `target` record (`type`, `id`, `label`, `href`), a `summary`, the `outcome`, and optionally `changes`, `details` and `ip`. Give action codes words with `actionLabels`.","Filters: actor, action and outcome, a From/To date range (native date inputs; an inverted range is flagged and not applied) and free text. `[(filters)]`, `[(page)]` and `[(expanded)]` are two-way bindable, e.g. to keep them in the URL or open a row from a link.",'**Client mode** (default) filters, sorts newest first and pages the array you pass. **Server mode** (`mode="server"`) shows `entries` as the current page of `total` and emits `queryChange` (`{ page, pageSize, filters }`) on start, on paging and on filter changes (text after a 300 ms pause); set `loading` while you fetch and `error` if it fails (`retry` emits on Try again).','Each row expands to its details: the time to the second, the actor id, the IP address, the field changes (drawn like the change history) and `details` as formatted JSON. To show `details` with `scsc-payload-view` (tree, pretty and raw XML/JSON), project it through `<ng-template scscAuditDetail let-details="details">`; the core library cannot depend on `@scscourt/design/code` itself.','Export CSV saves the filtered rows of every page in client mode, and the current page in server mode (for a full server export, hide it with `exportable="false"` and offer your own). Cells that a spreadsheet would run as formulas are escaped; `auditLogToCsv()` gives you the same text.',`The log is self-contained for now. It will move onto the table-state v2 and the filter bar when they ship, keeping this API.`],setup:`import { ScscAuditDetailDef, ScscAuditLog } from '@scscourt/design';

// icons it draws (with provideScscIcons(SCSC_ICONS), all are included)
import { ChevronRight, CircleCheck, CircleX, ClipboardList, Database, FileOutput,
  RefreshCw, Search, X } from 'lucide-angular';
provideScscIcons({ ChevronRight, CircleCheck, CircleX, ClipboardList, Database, FileOutput,
  RefreshCw, Search, X });`,demos:[{id:`audit-log-client`,title:`Client mode`,description:`Eight entries, five per page: a case status change, an EJ sync failure with its payload, a hearing reschedule, a role grant, a rejected sign-in, an assignment and a fee waiver. Expand a row (or press Escape inside it to close it), filter, and export the filtered rows as CSV.`,component:f,source:y[`audit-log-client`],layout:`full-bleed`},{id:`audit-log-server`,title:`Server mode`,description:"`queryChange` drives a stand-in API with 700 ms of latency over 64 entries: skeleton rows on the first load, a spinner after, and the new total announced. Tick the checkbox to make the next request fail and see the error with Try again.",component:b,source:y[`audit-log-server`],layout:`full-bleed`},{id:`audit-log-payload-view`,title:`Details in a payload viewer`,description:"`scscAuditDetail` projects `scsc-payload-view` from `@scscourt/design/code`: JSON as a tree and XML with Pretty and Raw views. The first row starts expanded through `[(expanded)]`.",component:S,source:y[`audit-log-payload-view`],layout:`full-bleed`}],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves through the filters (Actor, Action, Outcome, From, To, Search), Clear and Export CSV, then each row's details button and record link, then the page buttons. When the table is wider than the screen, its frame is a tab stop too, so it can be scrolled.`},{keys:`Enter / Space`,action:"On a row's details button: opens or closes the row's details (`aria-expanded`). Focus stays on the button; the details row follows it, so Tab moves into it."},{keys:`Escape`,action:`Inside an open details row: closes it and returns focus to its button. In Search: clears the text.`},{keys:`Arrow keys (in a scrolling region)`,action:`On the focused table frame or JSON block: scrolls it.`},{keys:`Arrow keys / typing (in a filter)`,action:`The native select and date-input keys.`}],aria:['A native `<table>` named by its `<caption>` (`caption`), or by `aria-label` (`label`, default "Audit log"). Headers are `<th scope="col">`; the details column\'s header is visually hidden text.','Each row\'s details button has `aria-expanded` and `aria-controls` pointing at its details row, and is named after the row ("Details: Changed case status to Stayed"). The details row stays in the table, `hidden`, while closed.','Times are `<time datetime="…">`. The outcome is written out ("Succeeded", "Failed") beside its icon. System actors read "System" or the integration\'s name.','In the details: facts are a `<dl>`, the changes are `scsc-field-changes` (each change a sentence), and the JSON `<pre>` is a focusable `role="region"` named "Data".','The filters are a `role="group"` named "Filter the audit log", each with a `<label>`; an inverted date range sets `aria-invalid` on To with the error as its description. Result counts are announced through `ScscAnnouncer` when filters change (in server mode, once the new page has loaded), and "N rows exported" after an export.','While loading, the table is `aria-busy`, with skeleton rows and a "Loading" status on the first load and a spinner (`role="status"`) after. A load failure is an alert (`role="alert"`) with a Try again button.'],appMustProvide:["A `caption` (visible) or `label` that says which log this is, when a page has more than one.","Readable `summary` lines and words for action codes (`actionLabels`); target `label`s people recognise (the case title, not only its number).","In server mode: the page of rows, the `total`, `loading` while fetching, and `error` on failure. Pass `actorOptions` and `actionOptions` so the filters list every choice, not just those on the current page.","Unique, stable entry `id`s (rows, expansion and the details ids are keyed by them).","Translations through `SCSC_HISTORY_LABELS` and `SCSC_LABELS`; set `timeZone` so times and the date filter follow the court's day."],a11y:[`The outcome is never colour alone: a green or red icon beside the word (1.4.1). Record links are underlined.`,`Every filter is a native control with a visible label; dates use the native date input, so the platform date picker and its keyboard support come for free.`,`Expanded details keep the table readable: they are one full-width cell below their row, reached by Tab from the button that opened them, and Escape returns there.`,"The table frame and the JSON block become keyboard-scrollable regions when they overflow (2.1.1). Buttons are at least 32px (24px in compact density); muted text is `text-base-content/70` or darker.","Details fade in with the `scsc-anim-fade-in` preset, which follows reduced motion."],related:[`change-history`,`table`,`payload-view`,`pagination`]};export{ye as AUDIT_LOG_DOCS};