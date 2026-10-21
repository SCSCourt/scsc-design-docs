import{Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,No as cc,Vi as y2e,Xa as Pv,Y as Fs,Zi as za,bn as Vz,cs as lc,ds as nD,ii as qo,ks as t_,lr as ez,nt as IA,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,w as Bo,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var N=class o{email=q(!0);sms=q(!1);static ɵfac=function(s){return new(s||o)};static ɵcmp=Af({type:o,selectors:[[`app-switch-basic-demo`]],decls:15,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`divide-y`,`divide-base-300`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`py-3`],[1,`block`,`font-medium`],[1,`block`,`text-sm`,`text-base-content/70`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`,`disabled`]],template:function(s,a){s&1&&(Ga(0,`div`,0)(1,`label`,1)(2,`span`)(3,`span`,2),G_(4,`Email hearing reminders`),Lf(),Ga(5,`span`,3),G_(6,`Sent 3 days and 1 day before each hearing`),Lf()(),Ga(7,`input`,4),lc(`change`,function(_){return a.email.set(_.target.checked)}),Lf()(),Ga(8,`label`,1)(9,`span`)(10,`span`,2),G_(11,`Text message reminders`),Lf(),Ga(12,`span`,3),G_(13),Lf()(),Ga(14,`input`,5),lc(`change`,function(_){return a.sms.set(_.target.checked)}),Lf()()()),s&2&&(Jb(7),Pv(`checked`,a.email()),Jb(6),nD(a.email()?`Standard rates apply`:`Turn on email reminders first`),Jb(),Pv(`checked`,a.sms())(`disabled`,!a.email()))},dependencies:[Bo],encapsulation:2})};var R=class o{fb=g(Wue);status=q(``);form=this.fb.group({showParties:[!0],showInterpreter:[!0],autoRefresh:[!1]});save(){this.status.set(`Saved: ${JSON.stringify(this.form.value)}`),this.form.markAsPristine()}static ɵfac=function(s){return new(s||o)};static ɵcmp=Af({type:o,selectors:[[`app-switch-reactive-demo`]],decls:18,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`flex`,`flex-col`,`gap-3`],[1,`mb-1`,`text-sm`,`font-medium`],[1,`flex`,`items-center`,`gap-3`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`showParties`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`showInterpreter`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`autoRefresh`],[`variant`,`primary`,`nativeType`,`submit`,3,`disabled`],[`role`,`status`,1,`text-sm`,`text-base-content/70`]],template:function(s,a){s&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return a.save()}),Ga(1,`fieldset`,1)(2,`legend`,2),G_(3,`Courtroom display`),Lf(),Ga(4,`label`,3)(5,`input`,4),HS(),Lf(),G_(6,` Show party names on the calendar board `),Lf(),Ga(7,`label`,3)(8,`input`,5),HS(),Lf(),G_(9,` Flag matters needing an interpreter `),Lf(),Ga(10,`label`,3)(11,`input`,6),HS(),Lf(),G_(12,` Refresh every 60 seconds `),Lf()(),Ga(13,`div`,3)(14,`scsc-button`,7),G_(15,`Save settings`),Lf(),Ga(16,`span`,8),G_(17),Lf()()()),s&2&&(Pv(`formGroup`,a.form),Jb(5),zS(),Jb(3),zS(),Jb(3),zS(),Jb(3),Pv(`disabled`,a.form.pristine),Jb(3),nD(a.status()))},dependencies:[Kue,Bue,ez,Hue,que,Vz,Xz,sn,Bo],encapsulation:2})};function z(o,r){if(o&1&&(Ga(0,`scsc-form-field`,8)(1,`input`,11),HS(),Lf()()),o&2){let s=y_();Pv(`error`,s.phoneError()),Jb(),Pv(`invalid`,!!s.phoneError()),cc(`aria-invalid`,!!s.phoneError()),zS()}}function J(o,r){if(o&1&&(Ga(0,`scsc-alert`,10),G_(1),Lf()),o&2){let s=y_();Jb(),nD(s.saved())}}var T=class o{fb=g(Wue);saved=q(``);form=this.fb.nonNullable.group({email:!0,sms:!1,phone:[{value:``,disabled:!0},[Fs.required,Fs.pattern(/^\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/)]]});constructor(){this.form.controls.sms.valueChanges.pipe(y2e()).subscribe(r=>{let s=this.form.controls.phone;r?s.enable():s.disable()})}phoneError(){let r=this.form.controls.phone;return r.invalid&&r.touched?r.hasError(`required`)?`Enter the number to text, or turn text reminders off.`:`Enter a 10-digit US phone number.`:``}save(){if(this.form.markAllAsTouched(),this.form.invalid){this.saved.set(``);return}let{email:r,sms:s,phone:a}=this.form.getRawValue(),h=[r?`email`:``,s?`text to `+a:``].filter(Boolean);this.saved.set(h.length?`Reminders by `+h.join(` and `)+`.`:`Reminders are off.`)}static ɵfac=function(s){return new(s||o)};static ɵcmp=Af({type:o,selectors:[[`app-switch-reminders-demo`]],decls:23,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`flex`,`flex-col`,`divide-y`,`divide-base-300`],[1,`mb-1`,`text-sm`,`font-medium`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`py-3`],[1,`block`,`font-medium`],[1,`block`,`text-sm`,`text-base-content/70`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`email`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`sms`],[`label`,`Mobile number`,`for`,`switch-reminders-phone`,`hint`,`US number, e.g. (408) 555-0142`,`required`,``,3,`error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Preferences saved`],[`scsc-input`,``,`id`,`switch-reminders-phone`,`type`,`tel`,`autocomplete`,`tel-national`,`formControlName`,`phone`,3,`invalid`]],template:function(s,a){s&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return a.save()}),Ga(1,`fieldset`,1)(2,`legend`,2),G_(3,`Hearing reminders · 24CV012345`),Lf(),Ga(4,`label`,3)(5,`span`)(6,`span`,4),G_(7,`Email reminders`),Lf(),Ga(8,`span`,5),G_(9,`To j.alvarez@example.com`),Lf()(),Ga(10,`input`,6),HS(),Lf()(),Ga(11,`label`,3)(12,`span`)(13,`span`,4),G_(14,`Text message reminders`),Lf(),Ga(15,`span`,5),G_(16,`3 days and 1 day before`),Lf()(),Ga(17,`input`,7),HS(),Lf()()(),JT(18,z,2,3,`scsc-form-field`,8),Ga(19,`div`)(20,`scsc-button`,9),G_(21,`Save preferences`),Lf()(),JT(22,J,2,1,`scsc-alert`,10),Lf()),s&2&&(Pv(`formGroup`,a.form),Jb(10),zS(),Jb(7),zS(),Jb(),t_(a.form.controls.phone.enabled?18:-1),Jb(4),t_(a.saved()?22:-1))},dependencies:[Kue,Bue,IA,ez,Hue,que,Vz,Xz,za,sn,Vn,qo,Bo],encapsulation:2})};var F={"switch-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscSwitch } from '@scscourt/design';

@Component({
  selector: 'app-switch-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSwitch],
  template: \`
    <div class="flex max-w-md flex-col divide-y divide-base-300">
      <label class="flex items-center justify-between gap-4 py-3">
        <span>
          <span class="block font-medium">Email hearing reminders</span>
          <span class="block text-sm text-base-content/70"
            >Sent 3 days and 1 day before each hearing</span
          >
        </span>
        <input
          type="checkbox"
          scsc-switch
          [checked]="email()"
          (change)="email.set($any($event.target).checked)"
        />
      </label>
      <label class="flex items-center justify-between gap-4 py-3">
        <span>
          <span class="block font-medium">Text message reminders</span>
          <span class="block text-sm text-base-content/70">{{
            email() ? 'Standard rates apply' : 'Turn on email reminders first'
          }}</span>
        </span>
        <input
          type="checkbox"
          scsc-switch
          [checked]="sms()"
          [disabled]="!email()"
          (change)="sms.set($any($event.target).checked)"
        />
      </label>
    </div>
  \`,
})
export class SwitchBasicDemo {
  protected readonly email = signal(true);
  protected readonly sms = signal(false);
}
`,html:`<div class="flex max-w-md flex-col divide-y divide-base-300">
  <label class="flex items-center justify-between gap-4 py-3">
    <span>
      <span class="block font-medium">Email hearing reminders</span>
      <span class="block text-sm text-base-content/70"
        >Sent 3 days and 1 day before each hearing</span
      >
    </span>
    <input
      type="checkbox"
      scsc-switch
      [checked]="email()"
      (change)="email.set($any($event.target).checked)"
    />
  </label>
  <label class="flex items-center justify-between gap-4 py-3">
    <span>
      <span class="block font-medium">Text message reminders</span>
      <span class="block text-sm text-base-content/70">{{
        email() ? 'Standard rates apply' : 'Turn on email reminders first'
      }}</span>
    </span>
    <input
      type="checkbox"
      scsc-switch
      [checked]="sms()"
      [disabled]="!email()"
      (change)="sms.set($any($event.target).checked)"
    />
  </label>
</div>
`},"switch-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ScscButton, ScscSwitch } from '@scscourt/design';

@Component({
  selector: 'app-switch-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscSwitch],
  template: \`
    <form [formGroup]="form" (ngSubmit)="save()" class="flex max-w-md flex-col gap-4">
      <fieldset class="flex flex-col gap-3">
        <legend class="mb-1 text-sm font-medium">Courtroom display</legend>
        <label class="flex items-center gap-3">
          <input type="checkbox" scsc-switch formControlName="showParties" /> Show party names on
          the calendar board
        </label>
        <label class="flex items-center gap-3">
          <input type="checkbox" scsc-switch formControlName="showInterpreter" /> Flag matters
          needing an interpreter
        </label>
        <label class="flex items-center gap-3">
          <input type="checkbox" scsc-switch formControlName="autoRefresh" /> Refresh every 60
          seconds
        </label>
      </fieldset>
      <div class="flex items-center gap-3">
        <scsc-button variant="primary" nativeType="submit" [disabled]="form.pristine"
          >Save settings</scsc-button
        >
        <span class="text-sm text-base-content/70" role="status">{{ status() }}</span>
      </div>
    </form>
  \`,
})
export class SwitchReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly status = signal('');

  protected readonly form = this.fb.group({
    showParties: [true],
    showInterpreter: [true],
    autoRefresh: [false],
  });

  protected save(): void {
    this.status.set(\`Saved: \${JSON.stringify(this.form.value)}\`);
    this.form.markAsPristine();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="save()" class="flex max-w-md flex-col gap-4">
  <fieldset class="flex flex-col gap-3">
    <legend class="mb-1 text-sm font-medium">Courtroom display</legend>
    <label class="flex items-center gap-3">
      <input type="checkbox" scsc-switch formControlName="showParties" /> Show party names on
      the calendar board
    </label>
    <label class="flex items-center gap-3">
      <input type="checkbox" scsc-switch formControlName="showInterpreter" /> Flag matters
      needing an interpreter
    </label>
    <label class="flex items-center gap-3">
      <input type="checkbox" scsc-switch formControlName="autoRefresh" /> Refresh every 60
      seconds
    </label>
  </fieldset>
  <div class="flex items-center gap-3">
    <scsc-button variant="primary" nativeType="submit" [disabled]="form.pristine"
      >Save settings</scsc-button
    >
    <span class="text-sm text-base-content/70" role="status">{{ status() }}</span>
  </div>
</form>
`},"switch-reminders":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput, ScscSwitch } from '@scscourt/design';

@Component({
  selector: 'app-switch-reminders-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput, ScscSwitch],
  template: \`
    <form [formGroup]="form" (ngSubmit)="save()" class="flex max-w-md flex-col gap-4">
      <fieldset class="flex flex-col divide-y divide-base-300">
        <legend class="mb-1 text-sm font-medium">Hearing reminders \xB7 24CV012345</legend>
        <label class="flex items-center justify-between gap-4 py-3">
          <span>
            <span class="block font-medium">Email reminders</span>
            <span class="block text-sm text-base-content/70">To j.alvarez&#64;example.com</span>
          </span>
          <input type="checkbox" scsc-switch formControlName="email" />
        </label>
        <label class="flex items-center justify-between gap-4 py-3">
          <span>
            <span class="block font-medium">Text message reminders</span>
            <span class="block text-sm text-base-content/70">3 days and 1 day before</span>
          </span>
          <input type="checkbox" scsc-switch formControlName="sms" />
        </label>
      </fieldset>

      <!-- Turning texts on makes the number required; turning them off disables the control. -->
      @if (form.controls.phone.enabled) {
        <scsc-form-field
          label="Mobile number"
          for="switch-reminders-phone"
          hint="US number, e.g. (408) 555-0142"
          required
          [error]="phoneError()"
        >
          <input
            scsc-input
            id="switch-reminders-phone"
            type="tel"
            autocomplete="tel-national"
            formControlName="phone"
            [invalid]="!!phoneError()"
            [attr.aria-invalid]="!!phoneError()"
          />
        </scsc-form-field>
      }

      <div>
        <scsc-button variant="primary" nativeType="submit">Save preferences</scsc-button>
      </div>

      @if (saved()) {
        <scsc-alert status="success" title="Preferences saved">{{ saved() }}</scsc-alert>
      }
    </form>
  \`,
})
export class SwitchRemindersDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal('');

  protected readonly form = this.fb.nonNullable.group({
    email: true,
    sms: false,
    phone: [
      { value: '', disabled: true },
      [Validators.required, Validators.pattern(/^\\(?\\d{3}\\)?[ .-]?\\d{3}[ .-]?\\d{4}$/)],
    ],
  });

  constructor() {
    this.form.controls.sms.valueChanges.pipe(takeUntilDestroyed()).subscribe((on) => {
      const phone = this.form.controls.phone;
      if (on) phone.enable();
      else phone.disable();
    });
  }

  protected phoneError(): string {
    const c = this.form.controls.phone;
    if (!(c.invalid && c.touched)) return '';
    return c.hasError('required')
      ? 'Enter the number to text, or turn text reminders off.'
      : 'Enter a 10-digit US phone number.';
  }

  protected save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.saved.set('');
      return;
    }
    const { email, sms, phone } = this.form.getRawValue();
    const channels = [email ? 'email' : '', sms ? 'text to ' + phone : ''].filter(Boolean);
    this.saved.set(
      channels.length ? 'Reminders by ' + channels.join(' and ') + '.' : 'Reminders are off.',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="save()" class="flex max-w-md flex-col gap-4">
  <fieldset class="flex flex-col divide-y divide-base-300">
    <legend class="mb-1 text-sm font-medium">Hearing reminders \xB7 24CV012345</legend>
    <label class="flex items-center justify-between gap-4 py-3">
      <span>
        <span class="block font-medium">Email reminders</span>
        <span class="block text-sm text-base-content/70">To j.alvarez&#64;example.com</span>
      </span>
      <input type="checkbox" scsc-switch formControlName="email" />
    </label>
    <label class="flex items-center justify-between gap-4 py-3">
      <span>
        <span class="block font-medium">Text message reminders</span>
        <span class="block text-sm text-base-content/70">3 days and 1 day before</span>
      </span>
      <input type="checkbox" scsc-switch formControlName="sms" />
    </label>
  </fieldset>

  <!-- Turning texts on makes the number required; turning them off disables the control. -->
  @if (form.controls.phone.enabled) {
    <scsc-form-field
      label="Mobile number"
      for="switch-reminders-phone"
      hint="US number, e.g. (408) 555-0142"
      required
      [error]="phoneError()"
    >
      <input
        scsc-input
        id="switch-reminders-phone"
        type="tel"
        autocomplete="tel-national"
        formControlName="phone"
        [invalid]="!!phoneError()"
        [attr.aria-invalid]="!!phoneError()"
      />
    </scsc-form-field>
  }

  <div>
    <scsc-button variant="primary" nativeType="submit">Save preferences</scsc-button>
  </div>

  @if (saved()) {
    <scsc-alert status="success" title="Preferences saved">{{ saved() }}</scsc-alert>
  }
</form>
`}};var be={slug:`switch`,name:`Switch`,classes:[`ScscSwitch`],category:`Forms`,whenToUse:[`On/off settings, ideally ones that take effect immediately: notification preferences, display options.`,'A directive on the native `<input type="checkbox">` that adds `role="switch"`; `[checked]`, `(change)`, `formControlName` and `ngModel` all work.','If the choice is part of a form that is submitted, or the wording is "I agree…", use `scsc-checkbox`; a switch reads as a toggle, not consent.',`Label the setting as the positive state ("Email reminders"), never as a question, so on/off is unambiguous.`],demos:[{id:`switch-basic`,title:`Settings list`,description:`Label and description on the left, switch on the right; the second switch depends on the first.`,component:N,source:F[`switch-basic`]},{id:`switch-reactive`,title:`With Reactive Forms`,description:"Three booleans in a `FormGroup`; Save is enabled once the form is dirty.",component:R,source:F[`switch-reactive`]},{id:`switch-reminders`,title:`A switch that requires a field`,description:`Turning text reminders on enables a required, validated phone number; turning them off disables it again.`,component:T,source:F[`switch-reminders`]}],a11y:['The input has `role="switch"`, so assistive tech announces "on/off" rather than "checked". Keep it inside a `<label>` for the name.',`A disabled switch should say why in its description text, as in the first demo.`,`Space toggles it; there is no separate keyboard handling to add.`,"A field revealed by a switch appears right after it in the DOM, and its error is announced through `scsc-form-field`."],appMustProvide:["A `<label>` for each switch, and text that says why a disabled switch cannot be changed."],related:[`checkbox`,`radio`,`form-field`]};export{be as SWITCH_DOCS};