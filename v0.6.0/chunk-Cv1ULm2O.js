import{Ei as uN,Hs as y_,I as EP,Ka as Ov,Ma as JT,Na as Jb,Un as Za,Xa as Pv,Zo as i_,_s as o_,ds as nD,ks as t_,ra as Af,rr as da,ta as $f,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var R=(e,s)=>s.department;function A(e,s){if(e&1&&(Ga(0,`li`,1)(1,`div`)(2,`p`,2),G_(3),Lf(),Ga(4,`p`,3),G_(5),Lf()(),Ga(6,`scsc-status-dot`,4),G_(7),Lf()()),e&2){let t=s.$implicit,n=y_();Jb(3),$f(`Dept. `,t.department),Jb(2),nD(t.judge),Jb(),Pv(`status`,n.tone(t.state))(`pulse`,t.state===`In session`),Jb(),$f(` `,t.state,` `)}}var y=class e{courtrooms=[{department:`21`,judge:`Hon. R. Whitfield`,state:`In session`},{department:`5`,judge:`Hon. L. Okafor`,state:`Recess`},{department:`12`,judge:`Hon. S. Liu`,state:`Adjourned`}];tone(s){return s===`In session`?`success`:s===`Recess`?`warning`:`neutral`}static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-status-dot-courtrooms-demo`]],decls:3,vars:0,consts:[[1,`max-w-md`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`py-3`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`],[3,`status`,`pulse`]],template:function(t,n){t&1&&(Ga(0,`scsc-list`,0),o_(1,A,8,5,`li`,1,R),Lf()),t&2&&(Jb(),i_(n.courtrooms))},dependencies:[EP,uN],encapsulation:2})};var S=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-status-dot-statuses-demo`]],decls:13,vars:1,consts:[[1,`flex`,`flex-col`,`gap-2`],[`status`,`neutral`],[`status`,`info`],[`status`,`success`],[`status`,`warning`],[`status`,`error`],[`status`,`success`,3,`pulse`]],template:function(t,n){t&1&&(Ga(0,`div`,0)(1,`scsc-status-dot`,1),G_(2,`Not yet scheduled`),Lf(),Ga(3,`scsc-status-dot`,2),G_(4,`Filed`),Lf(),Ga(5,`scsc-status-dot`,3),G_(6,`Active`),Lf(),Ga(7,`scsc-status-dot`,4),G_(8,`Continued`),Lf(),Ga(9,`scsc-status-dot`,5),G_(10,`Dismissed`),Lf(),Ga(11,`scsc-status-dot`,6),G_(12,`In session`),Lf()()),t&2&&(Jb(11),Pv(`pulse`,!0))},dependencies:[uN],encapsulation:2})};function k(e,s){if(e&1&&(Ga(0,`scsc-status-dot`,2),G_(1),Lf()),e&2){let t=y_().$implicit,n=y_();Pv(`status`,n.tone(t.state)),Jb(),nD(t.state)}}function P(e,s){if(e&1&&G_(0),e&2){let t=y_(),n=t.$implicit,I=t.col;$f(` `,n[I.key],` `)}}function N(e,s){if(e&1&&JT(0,k,2,2,`scsc-status-dot`,2)(1,P,1,1),e&2){let t=s.col;t_(t.key===`state`?0:1)}}var f=class e{columns=[{key:`party`,header:`Party`},{key:`method`,header:`Method`,width:`11rem`},{key:`date`,header:`Date`,type:`number`,width:`8rem`},{key:`state`,header:`Service`,width:`10rem`}];dot={Served:`success`,Attempted:`warning`,"Not served":`error`};rows=[{party:`Pacific Transit Authority`,method:`Personal service`,date:`2026-09-02`,state:`Served`},{party:`Marcus Reed`,method:`Substituted service`,date:`2026-09-10`,state:`Attempted`},{party:`Bayshore Properties LLC`,method:`Mail with notice`,date:`—`,state:`Not served`}];tone(s){return this.dot[s]}static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-status-dot-table-demo`]],decls:2,vars:3,consts:[[3,`columns`,`rows`,`zebra`],[`scscCell`,``],[3,`status`]],template:function(t,n){t&1&&(Ga(0,`scsc-table`,0),Ov(1,N,2,1,`ng-template`,1),Lf()),t&2&&Pv(`columns`,n.columns)(`rows`,n.rows)(`zebra`,!1)},dependencies:[da,uN,Za],encapsulation:2})};var g={"status-dot-courtrooms":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscList, ScscStatusDot } from '@scscourt/design';

interface Courtroom {
  department: string;
  judge: string;
  state: 'In session' | 'Recess' | 'Adjourned';
}

@Component({
  selector: 'app-status-dot-courtrooms-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscList, ScscStatusDot],
  template: \`
    <scsc-list class="max-w-md rounded-box border border-base-300 bg-base-100 px-4">
      @for (room of courtrooms; track room.department) {
        <li class="flex items-center justify-between gap-4 py-3">
          <div>
            <p class="font-medium">Dept. {{ room.department }}</p>
            <p class="text-sm text-base-content/70">{{ room.judge }}</p>
          </div>
          <scsc-status-dot [status]="tone(room.state)" [pulse]="room.state === 'In session'">
            {{ room.state }}
          </scsc-status-dot>
        </li>
      }
    </scsc-list>
  \`,
})
export class StatusDotCourtroomsDemo {
  protected readonly courtrooms: Courtroom[] = [
    { department: '21', judge: 'Hon. R. Whitfield', state: 'In session' },
    { department: '5', judge: 'Hon. L. Okafor', state: 'Recess' },
    { department: '12', judge: 'Hon. S. Liu', state: 'Adjourned' },
  ];

  protected tone(state: Courtroom['state']): 'success' | 'warning' | 'neutral' {
    return state === 'In session' ? 'success' : state === 'Recess' ? 'warning' : 'neutral';
  }
}
`,html:`<scsc-list class="max-w-md rounded-box border border-base-300 bg-base-100 px-4">
  @for (room of courtrooms; track room.department) {
    <li class="flex items-center justify-between gap-4 py-3">
      <div>
        <p class="font-medium">Dept. {{ room.department }}</p>
        <p class="text-sm text-base-content/70">{{ room.judge }}</p>
      </div>
      <scsc-status-dot [status]="tone(room.state)" [pulse]="room.state === 'In session'">
        {{ room.state }}
      </scsc-status-dot>
    </li>
  }
</scsc-list>
`},"status-dot-statuses":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatusDot } from '@scscourt/design';

@Component({
  selector: 'app-status-dot-statuses-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatusDot],
  template: \`
    <div class="flex flex-col gap-2">
      <scsc-status-dot status="neutral">Not yet scheduled</scsc-status-dot>
      <scsc-status-dot status="info">Filed</scsc-status-dot>
      <scsc-status-dot status="success">Active</scsc-status-dot>
      <scsc-status-dot status="warning">Continued</scsc-status-dot>
      <scsc-status-dot status="error">Dismissed</scsc-status-dot>
      <scsc-status-dot status="success" [pulse]="true">In session</scsc-status-dot>
    </div>
  \`,
})
export class StatusDotStatusesDemo {}
`,html:`<div class="flex flex-col gap-2">
  <scsc-status-dot status="neutral">Not yet scheduled</scsc-status-dot>
  <scsc-status-dot status="info">Filed</scsc-status-dot>
  <scsc-status-dot status="success">Active</scsc-status-dot>
  <scsc-status-dot status="warning">Continued</scsc-status-dot>
  <scsc-status-dot status="error">Dismissed</scsc-status-dot>
  <scsc-status-dot status="success" [pulse]="true">In session</scsc-status-dot>
</div>
`},"status-dot-table":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCellDef, ScscColumn, ScscStatusDot, ScscTable } from '@scscourt/design';

type ServiceState = 'Served' | 'Attempted' | 'Not served';

interface ServiceRow {
  party: string;
  method: string;
  date: string;
  state: ServiceState;
}

@Component({
  selector: 'app-status-dot-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCellDef, ScscStatusDot, ScscTable],
  template: \`
    <scsc-table [columns]="columns" [rows]="rows" [zebra]="false">
      <ng-template scscCell let-row let-col="col">
        @if (col.key === 'state') {
          <!-- The quiet way to show state in a column: a dot beside the word. -->
          <scsc-status-dot [status]="tone(row.state)">{{ row.state }}</scsc-status-dot>
        } @else {
          {{ row[col.key] }}
        }
      </ng-template>
    </scsc-table>
  \`,
})
export class StatusDotTableDemo {
  protected readonly columns: ScscColumn<ServiceRow>[] = [
    { key: 'party', header: 'Party' },
    { key: 'method', header: 'Method', width: '11rem' },
    { key: 'date', header: 'Date', type: 'number', width: '8rem' },
    { key: 'state', header: 'Service', width: '10rem' },
  ];

  /** One mapping from domain state to dot colour, shared by every row. */
  private readonly dot: Record<ServiceState, 'success' | 'warning' | 'error'> = {
    Served: 'success',
    Attempted: 'warning',
    'Not served': 'error',
  };

  protected readonly rows: ServiceRow[] = [
    {
      party: 'Pacific Transit Authority',
      method: 'Personal service',
      date: '2026-09-02',
      state: 'Served',
    },
    { party: 'Marcus Reed', method: 'Substituted service', date: '2026-09-10', state: 'Attempted' },
    {
      party: 'Bayshore Properties LLC',
      method: 'Mail with notice',
      date: '\u2014',
      state: 'Not served',
    },
  ];

  protected tone(state: ServiceState): 'success' | 'warning' | 'error' {
    return this.dot[state];
  }
}
`,html:`<scsc-table [columns]="columns" [rows]="rows" [zebra]="false">
  <ng-template scscCell let-row let-col="col">
    @if (col.key === 'state') {
      <!-- The quiet way to show state in a column: a dot beside the word. -->
      <scsc-status-dot [status]="tone(row.state)">{{ row.state }}</scsc-status-dot>
    } @else {
      {{ row[col.key] }}
    }
  </ng-template>
</scsc-table>
`}};var G={slug:`status-dot`,name:`Status Dot`,classes:[`ScscStatusDot`],category:`Data Display`,whenToUse:[`The quiet default for state in lists and tables: a dot beside a word. Use it before reaching for a coloured badge.`,"Keep the mapping from your domain state to a dot `status` in one place (a function or a `Record`), so every row and screen agrees.",'`pulse` only for something happening right now (in session, live, syncing) — not for "important".',"When the state needs the court's fixed vocabulary and colours (Active, Dismissed, Sealed…) use `scsc-status-badge`."],demos:[{id:`status-dot-statuses`,title:`Statuses`,description:"`neutral`, `info`, `success`, `warning`, `error`; `pulse` animates the dot.",component:S,source:g[`status-dot-statuses`]},{id:`status-dot-courtrooms`,title:`In a list`,description:`A helper maps domain state to a dot status so the mapping lives in one place.`,component:y,source:g[`status-dot-courtrooms`]},{id:`status-dot-table`,title:`In a table column`,description:"A proof-of-service table whose Service column renders a dot through the `scscCell` template and a `Record` of states.",component:f,source:g[`status-dot-table`],layout:`full-bleed`}],a11y:["The dot is `aria-hidden`; text carries the meaning. Project visible text, or for a dot on its own set `label` (visually hidden text), so the status is never colour alone.",'The pulse stops under reduced motion: the OS setting, or `data-motion="reduced"` on `<html>` (WCAG 2.3.3).'],aria:["`label` renders as `sr-only` text; the dot is `aria-hidden`."],appMustProvide:["Visible text or a `label` for every dot."],related:[`badge`,`status-badge`,`list`,`table`]};export{G as STATUS_DOT_DOCS};