import{Dn as Wue,E as Bue,Go as g$1,Gs as zS,Hs as y_,In as Xz,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Xa as Pv,Y as Fs,Zi as za,Zo as i_,_s as o_,bn as Vz,cs as lc,ha as Eg,ii as qo,ka as Ig,ks as t_,kt as NE,ms as nu,ni as qP,nt as IA,oi as que,pi as sn,ra as Af,t as $E,tt as Hue,ut as JP,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var J=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-juror-status-actions-demo`]],decls:11,vars:0,consts:[[`status`,`report`,`badgeId`,`4471892`,`group`,`12`,1,`max-w-xl`],[`size`,`sm`,1,`block`],[1,`mt-3`,`flex`,`flex-wrap`,`gap-2`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`.`],[`scsc-button`,``,`variant`,`ghost`,`size`,`sm`,`routerLink`,`.`]],template:function(t,s){t&1&&(Ga(0,`scsc-juror-status`,0)(1,`scsc-text`,1),G_(2,` Report to the Jury Assembly Room, Downtown Superior Court, 191 N. First Street, on `),Ga(3,`strong`),G_(4,`Monday, July 13, 2026 at 8:00 AM`),Lf(),G_(5,`. `),Lf(),Ga(6,`div`,2)(7,`a`,3),G_(8,`Reporting instructions`),Lf(),Ga(9,`a`,4),G_(10,`Request a postponement`),Lf()()())},dependencies:[nu,$E,JP,NE],encapsulation:2})};function Q(e,o){if(e&1&&uc(0,`scsc-juror-status`,8),e&2){let t=o;Pv(`status`,t.status)(`badgeId`,t.badgeId)(`group`,t.group)}}function X(e,o){e&1&&(Ga(0,`scsc-alert`,9),G_(1,` Check the badge number and ZIP code on your summons, or call (408) 882-2700. `),Lf())}var w=class e{fb=g$1(Wue);form=this.fb.nonNullable.group({badgeId:[`4471892`,[Fs.required,Fs.pattern(/^\d{7}$/)]],zip:[`95113`,[Fs.required,Fs.pattern(/^\d{5}$/)]]});jurors=[{badgeId:`4471892`,zip:`95113`,status:`on-call`,group:`12`},{badgeId:`5520117`,zip:`95035`,status:`postponed`,group:``}];found=q(null);notFound=q(!1);errorFor(o){let t=this.form.controls[o];return t.invalid&&(t.dirty||t.touched)?t.hasError(`required`)?`Required.`:o===`badgeId`?`Enter the 7-digit badge number.`:`Enter a 5-digit ZIP code.`:``}lookUp(){if(this.form.markAllAsTouched(),this.form.invalid)return;let{badgeId:o,zip:t}=this.form.getRawValue(),s=this.jurors.find(u=>u.badgeId===o&&u.zip===t)??null;this.found.set(s),this.notFound.set(!s)}static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-juror-status-lookup-demo`]],decls:11,vars:6,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`novalidate`,``,1,`grid`,`gap-4`,`sm:grid-cols-[1fr_1fr_auto]`,`sm:items-start`,3,`ngSubmit`,`formGroup`],[`label`,`Badge number`,`for`,`juror-lookup-badge`,`hint`,`7 digits, on your summons`,3,`error`],[`scsc-input`,``,`id`,`juror-lookup-badge`,`inputmode`,`numeric`,`formControlName`,`badgeId`,3,`invalid`],[`label`,`ZIP code`,`for`,`juror-lookup-zip`,3,`error`],[`scsc-input`,``,`id`,`juror-lookup-zip`,`inputmode`,`numeric`,`autocomplete`,`postal-code`,`formControlName`,`zip`,3,`invalid`],[1,`sm:pt-7`],[`variant`,`primary`,`nativeType`,`submit`],[3,`status`,`badgeId`,`group`],[`status`,`error`,`title`,`No juror found`]],template:function(t,s){if(t&1&&(Ga(0,`div`,0)(1,`form`,1),lc(`ngSubmit`,function(){return s.lookUp()}),Ga(2,`scsc-form-field`,2)(3,`input`,3),HS(),Lf()(),Ga(4,`scsc-form-field`,4)(5,`input`,5),HS(),Lf()(),Ga(6,`div`,6)(7,`scsc-button`,7),G_(8,`Check status`),Lf()()(),JT(9,Q,1,3,`scsc-juror-status`,8)(10,X,2,0,`scsc-alert`,9),Lf()),t&2){let u;Jb(),Pv(`formGroup`,s.form),Jb(),Pv(`error`,s.errorFor(`badgeId`)),Jb(),Pv(`invalid`,!!s.errorFor(`badgeId`)),zS(),Jb(),Pv(`error`,s.errorFor(`zip`)),Jb(),Pv(`invalid`,!!s.errorFor(`zip`)),zS(),Jb(4),t_((u=s.found())?9:s.notFound()?10:-1,u)}},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,za,sn,Vn,qo,JP],encapsulation:2})};function tt(e,o){if(e&1&&uc(0,`scsc-juror-status`,1),e&2){let t=o.$implicit;Pv(`status`,t)}}var F=class e{states=[`summoned`,`on-call`,`report`,`postponed`,`excused`,`completed`];static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-juror-status-states-demo`]],decls:3,vars:0,consts:[[1,`grid`,`gap-4`,`lg:grid-cols-2`],[`badgeId`,`4471892`,`group`,`12`,3,`status`]],template:function(t,s){t&1&&(Ga(0,`div`,0),o_(1,tt,1,1,`scsc-juror-status`,1,r_),Lf()),t&2&&(Jb(),i_(s.states))},dependencies:[JP],encapsulation:2})};function et(e,o){if(e&1){let t=d_();Ga(0,`div`,3)(1,`scsc-button`,9),lc(`click`,function(){Eg(t);let u=y_();return Ig(u.state.set(`completed`))}),G_(2,`Check in`),Lf(),Ga(3,`scsc-button`,10),lc(`click`,function(){Eg(t);let u=y_();return Ig(u.state.set(`postponed`))}),G_(4,` Request postponement `),Lf()()}}function ot(e,o){e&1&&(Ga(0,`scsc-alert`,4),G_(1,` Your summons, photo ID and anything you need for a full day. Parking validation is at the jury assembly room. `),Lf())}function rt(e,o){if(e&1){let t=d_();Ga(0,`scsc-button`,10),lc(`click`,function(){Eg(t);let u=y_();return Ig(u.state.set(`report`))}),G_(1,`Start over`),Lf()}}var z=class e{state=q(`report`);static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-juror-status-portal-demo`]],decls:10,vars:3,consts:[[1,`grid`,`max-w-4xl`,`gap-4`,`lg:grid-cols-[1fr_18rem]`],[1,`flex`,`flex-col`,`gap-4`],[`badgeId`,`204519`,`group`,`118`,3,`status`],[1,`flex`,`flex-wrap`,`gap-2`],[`status`,`info`,`title`,`What to bring`],[`size`,`sm`,`variant`,`ghost`],[`aria-labelledby`,`jury-office`,1,`rounded-box`,`border`,`border-base-300`,`p-4`],[`id`,`jury-office`,1,`mb-2`,`font-semibold`],[`address`,`191 N. First Street
San Jose, CA 95113`,`phone`,`(408) 882-2700`,`email`,`jury@scscourt.org`],[`size`,`sm`,3,`click`],[`size`,`sm`,`variant`,`ghost`,3,`click`]],template:function(t,s){t&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-juror-status`,2),JT(3,et,5,0,`div`,3),Lf(),JT(4,ot,2,0,`scsc-alert`,4)(5,rt,2,0,`scsc-button`,5),Lf(),Ga(6,`aside`,6)(7,`h3`,7),G_(8,`Jury office`),Lf(),uc(9,`scsc-contact-block`,8),Lf()()),t&2&&(Jb(2),Pv(`status`,s.state()),Jb(),t_(s.state()===`report`?3:-1),Jb(),t_(s.state()===`report`?4:5))},dependencies:[za,sn,qP,JP],encapsulation:2})};var st=(e,o)=>o.status;function at(e,o){if(e&1&&uc(0,`scsc-juror-status`,1),e&2){let t=o.$implicit;Pv(`status`,t.status)(`badgeId`,t.badge)(`group`,t.group)}}var T=class e{states=[{status:`on-call`,badge:`204518`,group:`312`},{status:`report`,badge:`204519`,group:`118`}];static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-juror-status-dark-demo`]],decls:3,vars:0,consts:[[`data-theme`,`scsc-design-dark`,1,`grid`,`max-w-3xl`,`gap-3`,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`,`md:grid-cols-2`],[3,`status`,`badgeId`,`group`]],template:function(t,s){t&1&&(Ga(0,`div`,0),o_(1,at,1,3,`scsc-juror-status`,1,st),Lf()),t&2&&(Jb(),i_(s.states))},dependencies:[JP],encapsulation:2})};var g={"juror-status-actions":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscJurorStatus, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-juror-status-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscJurorStatus, ScscText],
  template: \`
    <scsc-juror-status status="report" badgeId="4471892" group="12" class="max-w-xl">
      <scsc-text size="sm" class="block">
        Report to the Jury Assembly Room, Downtown Superior Court, 191 N. First Street, on
        <strong>Monday, July 13, 2026 at 8:00 AM</strong>.
      </scsc-text>
      <!-- Next steps open other pages, so they are links styled as buttons. -->
      <div class="mt-3 flex flex-wrap gap-2">
        <a scsc-button size="sm" routerLink=".">Reporting instructions</a>
        <a scsc-button variant="ghost" size="sm" routerLink=".">Request a postponement</a>
      </div>
    </scsc-juror-status>
  \`,
})
export class JurorStatusActionsDemo {}
`,html:`<scsc-juror-status status="report" badgeId="4471892" group="12" class="max-w-xl">
  <scsc-text size="sm" class="block">
    Report to the Jury Assembly Room, Downtown Superior Court, 191 N. First Street, on
    <strong>Monday, July 13, 2026 at 8:00 AM</strong>.
  </scsc-text>
  <!-- Next steps open other pages, so they are links styled as buttons. -->
  <div class="mt-3 flex flex-wrap gap-2">
    <a scsc-button size="sm" routerLink=".">Reporting instructions</a>
    <a scsc-button variant="ghost" size="sm" routerLink=".">Request a postponement</a>
  </div>
</scsc-juror-status>
`},"juror-status-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscJurorStatus, type ScscJurorState } from '@scscourt/design';

@Component({
  selector: 'app-juror-status-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscJurorStatus],
  template: \`
    <div
      data-theme="scsc-design-dark"
      class="grid max-w-3xl gap-3 rounded-box bg-base-200 p-4 text-base-content md:grid-cols-2"
    >
      @for (s of states; track s.status) {
        <scsc-juror-status [status]="s.status" [badgeId]="s.badge" [group]="s.group" />
      }
    </div>
  \`,
})
export class JurorStatusDarkDemo {
  protected readonly states: { status: ScscJurorState; badge: string; group: string }[] = [
    { status: 'on-call', badge: '204518', group: '312' },
    { status: 'report', badge: '204519', group: '118' },
  ];
}
`,html:`<div
  data-theme="scsc-design-dark"
  class="grid max-w-3xl gap-3 rounded-box bg-base-200 p-4 text-base-content md:grid-cols-2"
>
  @for (s of states; track s.status) {
    <scsc-juror-status [status]="s.status" [badgeId]="s.badge" [group]="s.group" />
  }
</div>
`},"juror-status-lookup":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscJurorStatus,
  type ScscJurorState,
} from '@scscourt/design';

interface Juror {
  badgeId: string;
  zip: string;
  status: ScscJurorState;
  group: string;
}

@Component({
  selector: 'app-juror-status-lookup-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput, ScscJurorStatus],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <form
        [formGroup]="form"
        (ngSubmit)="lookUp()"
        class="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-start"
        novalidate
      >
        <scsc-form-field
          label="Badge number"
          for="juror-lookup-badge"
          hint="7 digits, on your summons"
          [error]="errorFor('badgeId')"
        >
          <input
            scsc-input
            id="juror-lookup-badge"
            inputmode="numeric"
            formControlName="badgeId"
            [invalid]="!!errorFor('badgeId')"
          />
        </scsc-form-field>
        <scsc-form-field label="ZIP code" for="juror-lookup-zip" [error]="errorFor('zip')">
          <input
            scsc-input
            id="juror-lookup-zip"
            inputmode="numeric"
            autocomplete="postal-code"
            formControlName="zip"
            [invalid]="!!errorFor('zip')"
          />
        </scsc-form-field>
        <div class="sm:pt-7">
          <scsc-button variant="primary" nativeType="submit">Check status</scsc-button>
        </div>
      </form>

      @if (found(); as j) {
        <scsc-juror-status [status]="j.status" [badgeId]="j.badgeId" [group]="j.group" />
      } @else if (notFound()) {
        <scsc-alert status="error" title="No juror found">
          Check the badge number and ZIP code on your summons, or call (408) 882-2700.
        </scsc-alert>
      }
    </div>
  \`,
})
export class JurorStatusLookupDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    badgeId: ['4471892', [Validators.required, Validators.pattern(/^\\d{7}$/)]],
    zip: ['95113', [Validators.required, Validators.pattern(/^\\d{5}$/)]],
  });

  /** Stand-in for the eJuror API. Try 4471892 / 95113, or 5520117 / 95035. */
  private readonly jurors: Juror[] = [
    { badgeId: '4471892', zip: '95113', status: 'on-call', group: '12' },
    { badgeId: '5520117', zip: '95035', status: 'postponed', group: '' },
  ];

  protected readonly found = signal<Juror | null>(null);
  protected readonly notFound = signal(false);

  protected errorFor(name: 'badgeId' | 'zip'): string {
    const c = this.form.controls[name];
    if (!(c.invalid && (c.dirty || c.touched))) return '';
    if (c.hasError('required')) return 'Required.';
    return name === 'badgeId' ? 'Enter the 7-digit badge number.' : 'Enter a 5-digit ZIP code.';
  }

  protected lookUp(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const { badgeId, zip } = this.form.getRawValue();
    const juror = this.jurors.find((j) => j.badgeId === badgeId && j.zip === zip) ?? null;
    this.found.set(juror);
    this.notFound.set(!juror);
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <form
    [formGroup]="form"
    (ngSubmit)="lookUp()"
    class="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-start"
    novalidate
  >
    <scsc-form-field
      label="Badge number"
      for="juror-lookup-badge"
      hint="7 digits, on your summons"
      [error]="errorFor('badgeId')"
    >
      <input
        scsc-input
        id="juror-lookup-badge"
        inputmode="numeric"
        formControlName="badgeId"
        [invalid]="!!errorFor('badgeId')"
      />
    </scsc-form-field>
    <scsc-form-field label="ZIP code" for="juror-lookup-zip" [error]="errorFor('zip')">
      <input
        scsc-input
        id="juror-lookup-zip"
        inputmode="numeric"
        autocomplete="postal-code"
        formControlName="zip"
        [invalid]="!!errorFor('zip')"
      />
    </scsc-form-field>
    <div class="sm:pt-7">
      <scsc-button variant="primary" nativeType="submit">Check status</scsc-button>
    </div>
  </form>

  @if (found(); as j) {
    <scsc-juror-status [status]="j.status" [badgeId]="j.badgeId" [group]="j.group" />
  } @else if (notFound()) {
    <scsc-alert status="error" title="No juror found">
      Check the badge number and ZIP code on your summons, or call (408) 882-2700.
    </scsc-alert>
  }
</div>
`},"juror-status-portal":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAlert, ScscButton, ScscContactBlock, ScscJurorStatus } from '@scscourt/design';

@Component({
  selector: 'app-juror-status-portal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscContactBlock, ScscJurorStatus],
  template: \`
    <div class="grid max-w-4xl gap-4 lg:grid-cols-[1fr_18rem]">
      <div class="flex flex-col gap-4">
        <scsc-juror-status [status]="state()" badgeId="204519" group="118">
          @if (state() === 'report') {
            <div class="flex flex-wrap gap-2">
              <scsc-button size="sm" (click)="state.set('completed')">Check in</scsc-button>
              <scsc-button size="sm" variant="ghost" (click)="state.set('postponed')">
                Request postponement
              </scsc-button>
            </div>
          }
        </scsc-juror-status>
        @if (state() === 'report') {
          <scsc-alert status="info" title="What to bring">
            Your summons, photo ID and anything you need for a full day. Parking validation is at
            the jury assembly room.
          </scsc-alert>
        } @else {
          <scsc-button size="sm" variant="ghost" (click)="state.set('report')"
            >Start over</scsc-button
          >
        }
      </div>
      <aside aria-labelledby="jury-office" class="rounded-box border border-base-300 p-4">
        <h3 id="jury-office" class="mb-2 font-semibold">Jury office</h3>
        <scsc-contact-block
          address="191 N. First Street&#10;San Jose, CA 95113"
          phone="(408) 882-2700"
          email="jury@scscourt.org"
        />
      </aside>
    </div>
  \`,
})
export class JurorStatusPortalDemo {
  protected readonly state = signal<'report' | 'completed' | 'postponed'>('report');
}
`,html:`<div class="grid max-w-4xl gap-4 lg:grid-cols-[1fr_18rem]">
  <div class="flex flex-col gap-4">
    <scsc-juror-status [status]="state()" badgeId="204519" group="118">
      @if (state() === 'report') {
        <div class="flex flex-wrap gap-2">
          <scsc-button size="sm" (click)="state.set('completed')">Check in</scsc-button>
          <scsc-button size="sm" variant="ghost" (click)="state.set('postponed')">
            Request postponement
          </scsc-button>
        </div>
      }
    </scsc-juror-status>
    @if (state() === 'report') {
      <scsc-alert status="info" title="What to bring">
        Your summons, photo ID and anything you need for a full day. Parking validation is at
        the jury assembly room.
      </scsc-alert>
    } @else {
      <scsc-button size="sm" variant="ghost" (click)="state.set('report')"
        >Start over</scsc-button
      >
    }
  </div>
  <aside aria-labelledby="jury-office" class="rounded-box border border-base-300 p-4">
    <h3 id="jury-office" class="mb-2 font-semibold">Jury office</h3>
    <scsc-contact-block
      address="191 N. First Street&#10;San Jose, CA 95113"
      phone="(408) 882-2700"
      email="jury@scscourt.org"
    />
  </aside>
</div>
`},"juror-status-states":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscJurorStatus, type ScscJurorState } from '@scscourt/design';

@Component({
  selector: 'app-juror-status-states-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscJurorStatus],
  template: \`
    <div class="grid gap-4 lg:grid-cols-2">
      @for (state of states; track state) {
        <scsc-juror-status [status]="state" badgeId="4471892" group="12" />
      }
    </div>
  \`,
})
export class JurorStatusStatesDemo {
  /** Every value of \`ScscJurorState\`; the icon, tone and instruction text come from the component. */
  protected readonly states: ScscJurorState[] = [
    'summoned',
    'on-call',
    'report',
    'postponed',
    'excused',
    'completed',
  ];
}
`,html:`<div class="grid gap-4 lg:grid-cols-2">
  @for (state of states; track state) {
    <scsc-juror-status [status]="state" badgeId="4471892" group="12" />
  }
</div>
`}};var Tt={slug:`juror-status`,name:`Juror Status`,classes:[`ScscJurorStatus`],category:`Court`,whenToUse:['The eJuror "your status" panel after a juror looks up their badge number: one of six `ScscJurorState` values with a fixed icon, tone and instruction sentence.',`Project the next step (reporting instructions, postponement request, parking info) as children; the component leaves the actions to you.`,"For staff-side juror lists use `scsc-status-badge` or `scsc-badge` in a table instead of this panel."],demos:[{id:`juror-status-states`,title:`Every state`,description:"All six values of `ScscJurorState` with the same badge and group.",component:F,source:g[`juror-status-states`]},{id:`juror-status-actions`,title:`With instructions and actions`,description:'The "report" state with projected reporting details and two `a[scsc-button]` links to the next steps.',component:J,source:g[`juror-status-actions`]},{id:`juror-status-lookup`,title:`Badge lookup`,description:"A Reactive Form checks the badge number and ZIP; a match renders the panel, no match an `scsc-alert`. Try 5520117 / 95035 for another state.",component:w,source:g[`juror-status-lookup`]},{id:`juror-status-portal`,title:`Check-in flow with the jury office`,description:`Report status with Check in and Postpone actions, what to bring, and the jury office contact; each action moves the lifecycle on.`,component:z,source:g[`juror-status-portal`]},{id:`juror-status-dark`,title:`Dark theme`,description:`On-call and report states side by side in the dark theme.`,component:T,source:g[`juror-status-dark`]}],a11y:["The status label is an `<h2>` by default; set `headingLevel` (2–6) to fit the page outline (`3` inside a section). The look does not change.","The state name is an `<h2>` and the instruction is plain text; the icon is decorative.",`Tone colours (success, warning, error) are reinforced by the label and the sentence, never colour alone.`,"The panel is not a live region. After a lookup, announce the result or move focus to it; a failed lookup is best reported with an `scsc-alert` (the lookup demo), which is announced."],related:[`status-badge`,`alert`,`brand-header`]};export{Tt as JUROR_STATUS_DOCS};