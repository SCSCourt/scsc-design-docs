import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{At as NP,Fi as wR,Hs as y_,Ka as Ov,Ma as JT,Ms as uc,Na as Jb,Nr as jo,Un as Za,Vr as mN,Xa as Pv,Zi as za,a as $a,cs as lc,ii as qo,ks as t_,kt as NE,pi as sn,ra as Af,rr as da,ta as $f,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var b=class a{saving=q(!1);fields=[{term:`Status`,value:`Active`},{term:`Department`,value:`Dept. 5`},{term:`Next hearing`,value:`Oct 14, 2026 · 9:00 AM`}];save(){this.saving.set(!0),setTimeout(()=>this.saving.set(!1),1500)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-loading-overlay-basic-demo`]],decls:7,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`title`,`Case 24CV012345`,1,`relative`],[`message`,`Saving changes…`,3,`loading`],[3,`items`],[`variant`,`primary`,3,`click`,`loading`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-card`,1),uc(2,`scsc-loading-overlay`,2)(3,`scsc-description-list`,3),Lf(),Ga(4,`div`)(5,`scsc-button`,4),lc(`click`,function(){return t.save()}),G_(6,`Save changes`),Lf()()()),e&2&&(Jb(2),Pv(`loading`,t.saving()),Jb(),Pv(`items`,t.fields),Jb(2),Pv(`loading`,t.saving()))},dependencies:[sn,mN,NP,wR],encapsulation:2})};function $(a,c){a&1&&(Ga(0,`scsc-alert`,4),G_(1,` The card issuer declined the charge. No fee was collected; try another card. `),Lf())}function I(a,c){a&1&&(Ga(0,`scsc-alert`,5),G_(1,` $435.00 paid. Receipt R-2026-118204 was emailed to you. `),Lf())}var S=class a{paying=q(!1);decline=q(!1);outcome=q(`none`);pay(){this.outcome.set(`none`),this.paying.set(!0),setTimeout(()=>{this.paying.set(!1),this.outcome.set(this.decline()?`declined`:`paid`)},1500)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-loading-overlay-form-demo`]],decls:15,vars:5,consts:[[`title`,`Pay filing fee · 24CV012345`,1,`relative`,`max-w-md`],[`message`,`Processing payment…`,3,`loading`],[1,`flex`,`flex-col`,`gap-4`,3,`disabled`],[1,`sr-only`],[`status`,`error`,`title`,`Payment declined`],[`status`,`success`,`title`,`Payment received`],[`label`,`Name on card`,`for`,`overlay-form-name`],[`scsc-input`,``,`id`,`overlay-form-name`,`autocomplete`,`cc-name`,`value`,`Maria Alvarez`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[`variant`,`primary`,3,`click`,`loading`]],template:function(e,t){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-loading-overlay`,1),Ga(2,`fieldset`,2)(3,`legend`,3),G_(4,`Payment`),Lf(),JT(5,$,2,0,`scsc-alert`,4)(6,I,2,0,`scsc-alert`,5),Ga(7,`scsc-form-field`,6),uc(8,`input`,7),Lf(),Ga(9,`label`,8)(10,`input`,9),lc(`change`,function(E){return t.decline.set(E.target.checked)}),Lf(),G_(11,` Simulate a declined card `),Lf(),Ga(12,`div`)(13,`scsc-button`,10),lc(`click`,function(){return t.pay()}),G_(14,`Pay $435.00`),Lf()()()()),e&2&&(Jb(),Pv(`loading`,t.paying()),Jb(),Pv(`disabled`,t.paying()),Jb(3),t_(t.outcome()===`declined`?5:t.outcome()===`paid`?6:-1),Jb(5),Pv(`checked`,t.decline()),Jb(3),Pv(`loading`,t.paying()))},dependencies:[za,sn,mN,jo,Vn,qo,wR],encapsulation:2})};function j(a,c){if(a&1&&uc(0,`scsc-status-badge`,8),a&2){let e=y_().$implicit;Pv(`status`,e.status)}}function U(a,c){if(a&1&&G_(0),a&2){let e=y_(),t=e.$implicit,y=e.col;$f(` `,t[y.key],` `)}}function H(a,c){if(a&1&&JT(0,j,1,1,`scsc-status-badge`,8)(1,U,1,1),a&2){let e=c.col;t_(e.key===`status`?0:1)}}var C=class a{columns=[{key:`time`,header:`Time`,type:`number`,width:`6rem`},{key:`caseNumber`,header:`Case No.`,type:`number`,width:`8rem`},{key:`title`,header:`Title`},{key:`status`,header:`Status`,width:`8rem`}];rows=q([{time:`9:00`,caseNumber:`24CV012345`,title:`Alvarez v. Northgate`,status:`active`},{time:`9:30`,caseNumber:`24CV013002`,title:`Patel v. SVT Logistics`,status:`pending`},{time:`10:30`,caseNumber:`23CV008812`,title:`Okafor v. City of San Jose`,status:`filed`}]);refreshing=q(!1);updated=q(`8:52 AM`);refresh(){this.refreshing.set(!0),setTimeout(()=>{this.rows.update(c=>c.map(e=>e.caseNumber===`24CV013002`?s(r({},e),{status:`continued`}):e)),this.updated.set(`9:04 AM`),this.refreshing.set(!1)},1500)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-loading-overlay-table-demo`]],decls:10,vars:6,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[`tone`,`muted`,`size`,`sm`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`,`loading`],[1,`relative`],[`message`,`Refreshing the calendar…`,3,`loading`],[3,`columns`,`rows`,`zebra`],[`scscCell`,``],[3,`status`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-text`,2),G_(3),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return t.refresh()}),G_(5,` Refresh `),Lf()(),Ga(6,`div`,4),uc(7,`scsc-loading-overlay`,5),Ga(8,`scsc-table`,6),Ov(9,H,2,1,`ng-template`,7),Lf()()()),e&2&&(Jb(3),$f(`Dept. 7 · Oct 14, 2026 · updated `,t.updated()),Jb(),Pv(`loading`,t.refreshing()),Jb(3),Pv(`loading`,t.refreshing()),Jb(),Pv(`columns`,t.columns)(`rows`,t.rows())(`zebra`,!1))},dependencies:[sn,da,wR,$a,Za,NE],encapsulation:2})};var w={"loading-overlay-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscDescriptionList, ScscLoadingOverlay } from '@scscourt/design';

@Component({
  selector: 'app-loading-overlay-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscDescriptionList, ScscLoadingOverlay],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <!-- The overlay covers its nearest positioned ancestor: give the card class="relative" -->
      <scsc-card title="Case 24CV012345" class="relative">
        <scsc-loading-overlay [loading]="saving()" message="Saving changes\u2026" />
        <scsc-description-list [items]="fields" />
      </scsc-card>
      <div>
        <scsc-button variant="primary" [loading]="saving()" (click)="save()"
          >Save changes</scsc-button
        >
      </div>
    </div>
  \`,
})
export class LoadingOverlayBasicDemo {
  protected readonly saving = signal(false);
  protected readonly fields = [
    { term: 'Status', value: 'Active' },
    { term: 'Department', value: 'Dept. 5' },
    { term: 'Next hearing', value: 'Oct 14, 2026 \xB7 9:00 AM' },
  ];

  protected save(): void {
    this.saving.set(true);
    // Stand-in for an HTTP call
    setTimeout(() => this.saving.set(false), 1500);
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <!-- The overlay covers its nearest positioned ancestor: give the card class="relative" -->
  <scsc-card title="Case 24CV012345" class="relative">
    <scsc-loading-overlay [loading]="saving()" message="Saving changes\u2026" />
    <scsc-description-list [items]="fields" />
  </scsc-card>
  <div>
    <scsc-button variant="primary" [loading]="saving()" (click)="save()"
      >Save changes</scsc-button
    >
  </div>
</div>
`},"loading-overlay-form":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscAlert,
  ScscButton,
  ScscCard,
  ScscCheckbox,
  ScscFormField,
  ScscInput,
  ScscLoadingOverlay,
} from '@scscourt/design';

type Outcome = 'none' | 'paid' | 'declined';

@Component({
  selector: 'app-loading-overlay-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAlert,
    ScscButton,
    ScscCard,
    ScscCheckbox,
    ScscFormField,
    ScscInput,
    ScscLoadingOverlay,
  ],
  template: \`
    <scsc-card title="Pay filing fee \xB7 24CV012345" class="relative max-w-md">
      <scsc-loading-overlay [loading]="paying()" message="Processing payment\u2026" />

      <!-- A disabled fieldset takes every control out of the tab order while the scrim is up. -->
      <fieldset [disabled]="paying()" class="flex flex-col gap-4">
        <legend class="sr-only">Payment</legend>
        @if (outcome() === 'declined') {
          <scsc-alert status="error" title="Payment declined">
            The card issuer declined the charge. No fee was collected; try another card.
          </scsc-alert>
        } @else if (outcome() === 'paid') {
          <scsc-alert status="success" title="Payment received">
            $435.00 paid. Receipt R-2026-118204 was emailed to you.
          </scsc-alert>
        }

        <scsc-form-field label="Name on card" for="overlay-form-name">
          <input scsc-input id="overlay-form-name" autocomplete="cc-name" value="Maria Alvarez" />
        </scsc-form-field>

        <label class="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            scsc-checkbox
            [checked]="decline()"
            (change)="decline.set($any($event.target).checked)"
          />
          Simulate a declined card
        </label>

        <div>
          <scsc-button variant="primary" [loading]="paying()" (click)="pay()"
            >Pay $435.00</scsc-button
          >
        </div>
      </fieldset>
    </scsc-card>
  \`,
})
export class LoadingOverlayFormDemo {
  protected readonly paying = signal(false);
  protected readonly decline = signal(false);
  protected readonly outcome = signal<Outcome>('none');

  /** Never leave the scrim up: hide it on success and on failure, then say what happened. */
  protected pay(): void {
    this.outcome.set('none');
    this.paying.set(true);
    setTimeout(() => {
      this.paying.set(false);
      this.outcome.set(this.decline() ? 'declined' : 'paid');
    }, 1500);
  }
}
`,html:`<scsc-card title="Pay filing fee \xB7 24CV012345" class="relative max-w-md">
  <scsc-loading-overlay [loading]="paying()" message="Processing payment\u2026" />

  <!-- A disabled fieldset takes every control out of the tab order while the scrim is up. -->
  <fieldset [disabled]="paying()" class="flex flex-col gap-4">
    <legend class="sr-only">Payment</legend>
    @if (outcome() === 'declined') {
      <scsc-alert status="error" title="Payment declined">
        The card issuer declined the charge. No fee was collected; try another card.
      </scsc-alert>
    } @else if (outcome() === 'paid') {
      <scsc-alert status="success" title="Payment received">
        $435.00 paid. Receipt R-2026-118204 was emailed to you.
      </scsc-alert>
    }

    <scsc-form-field label="Name on card" for="overlay-form-name">
      <input scsc-input id="overlay-form-name" autocomplete="cc-name" value="Maria Alvarez" />
    </scsc-form-field>

    <label class="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        scsc-checkbox
        [checked]="decline()"
        (change)="decline.set($any($event.target).checked)"
      />
      Simulate a declined card
    </label>

    <div>
      <scsc-button variant="primary" [loading]="paying()" (click)="pay()"
        >Pay $435.00</scsc-button
      >
    </div>
  </fieldset>
</scsc-card>
`},"loading-overlay-table":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscCellDef,
  ScscColumn,
  ScscLoadingOverlay,
  ScscStatusBadge,
  ScscTable,
  ScscText,
  type ScscCaseStatus,
} from '@scscourt/design';

interface CalendarRow {
  time: string;
  caseNumber: string;
  title: string;
  status: ScscCaseStatus;
}

@Component({
  selector: 'app-loading-overlay-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCellDef, ScscLoadingOverlay, ScscStatusBadge, ScscTable, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <scsc-text tone="muted" size="sm"
          >Dept. 7 \xB7 Oct 14, 2026 \xB7 updated {{ updated() }}</scsc-text
        >
        <scsc-button
          variant="neutral"
          outline
          size="sm"
          [loading]="refreshing()"
          (click)="refresh()"
        >
          Refresh
        </scsc-button>
      </div>

      <!-- Keep the old rows visible under the scrim while the new ones load. -->
      <div class="relative">
        <scsc-loading-overlay [loading]="refreshing()" message="Refreshing the calendar\u2026" />
        <scsc-table [columns]="columns" [rows]="rows()" [zebra]="false">
          <ng-template scscCell let-row let-col="col">
            @if (col.key === 'status') {
              <scsc-status-badge [status]="row.status" />
            } @else {
              {{ row[col.key] }}
            }
          </ng-template>
        </scsc-table>
      </div>
    </div>
  \`,
})
export class LoadingOverlayTableDemo {
  protected readonly columns: ScscColumn<CalendarRow>[] = [
    { key: 'time', header: 'Time', type: 'number', width: '6rem' },
    { key: 'caseNumber', header: 'Case No.', type: 'number', width: '8rem' },
    { key: 'title', header: 'Title' },
    { key: 'status', header: 'Status', width: '8rem' },
  ];

  protected readonly rows = signal<CalendarRow[]>([
    { time: '9:00', caseNumber: '24CV012345', title: 'Alvarez v. Northgate', status: 'active' },
    { time: '9:30', caseNumber: '24CV013002', title: 'Patel v. SVT Logistics', status: 'pending' },
    {
      time: '10:30',
      caseNumber: '23CV008812',
      title: 'Okafor v. City of San Jose',
      status: 'filed',
    },
  ]);
  protected readonly refreshing = signal(false);
  protected readonly updated = signal('8:52 AM');

  /** Stand-in for an HTTP call: the overlay stays up until the response arrives. */
  protected refresh(): void {
    this.refreshing.set(true);
    setTimeout(() => {
      this.rows.update((rows) =>
        rows.map((r) => (r.caseNumber === '24CV013002' ? { ...r, status: 'continued' } : r)),
      );
      this.updated.set('9:04 AM');
      this.refreshing.set(false);
    }, 1500);
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <div class="flex items-center justify-between gap-3">
    <scsc-text tone="muted" size="sm"
      >Dept. 7 \xB7 Oct 14, 2026 \xB7 updated {{ updated() }}</scsc-text
    >
    <scsc-button
      variant="neutral"
      outline
      size="sm"
      [loading]="refreshing()"
      (click)="refresh()"
    >
      Refresh
    </scsc-button>
  </div>

  <!-- Keep the old rows visible under the scrim while the new ones load. -->
  <div class="relative">
    <scsc-loading-overlay [loading]="refreshing()" message="Refreshing the calendar\u2026" />
    <scsc-table [columns]="columns" [rows]="rows()" [zebra]="false">
      <ng-template scscCell let-row let-col="col">
        @if (col.key === 'status') {
          <scsc-status-badge [status]="row.status" />
        } @else {
          {{ row[col.key] }}
        }
      </ng-template>
    </scsc-table>
  </div>
</div>
`}};var ge={slug:`loading-overlay`,name:`Loading Overlay`,classes:[`ScscLoadingOverlay`],category:`Overlays & Feedback`,whenToUse:[`Blocking a region that is being saved or refreshed while keeping its content visible underneath: a card, a table, a form.`,"The overlay is `position: absolute; inset: 0`, so its parent must be positioned: add `relative` to the card or a wrapper `div` (every demo does).","For a first load with nothing to show yet, `scsc-skeleton` reads better; for a whole-page wait, `scsc-spinner` in an empty state.","Also mark `loading` on the button that started the work so it cannot be pressed twice, and disable the controls under the scrim (a `<fieldset [disabled]>` does it in one place)."],demos:[{id:`loading-overlay-basic`,title:`Over a card`,description:'`[loading]` toggled by a Save button; the card has `class="relative"`.',component:b,source:w[`loading-overlay-basic`]},{id:`loading-overlay-table`,title:`Refreshing a table`,description:"A `relative` wrapper around `scsc-table` keeps the current rows visible under the scrim until the refreshed ones arrive.",component:C,source:w[`loading-overlay-table`]},{id:`loading-overlay-form`,title:`Submitting a form, with a failure path`,description:"A disabled `fieldset` blocks the controls while paying; the overlay always comes down and an `scsc-alert` reports the outcome.",component:S,source:w[`loading-overlay-form`]}],a11y:['The scrim is `role="status"` named by `message`, so the wait is announced politely; keep `message` a short phrase ("Saving changes…").',"The content underneath stays in the accessibility tree and remains focusable; disable the controls in the region while it is loading (the form demo uses a disabled `fieldset`).","Do not leave the overlay up indefinitely; if the work fails, hide it and show an `scsc-alert`."],related:[`spinner`,`skeleton`,`progress`,`card`]};export{ge as LOADING_OVERLAY_DOCS};