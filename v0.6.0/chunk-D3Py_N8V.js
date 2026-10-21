import{Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Jn as _z,Ma as JT,Ms as uc,Na as Jb,No as cc,Xa as Pv,Y as Fs,Zi as za,bn as Vz,cs as lc,ds as nD,ii as qo,ks as t_,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var D=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-input-basic-demo`]],decls:7,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`scsc-input`,``,`placeholder`,`24CV012345`,`aria-label`,`Case number`],[`scsc-input`,``,`size`,`sm`,`placeholder`,`Filter parties…`,`aria-label`,`Filter parties`],[`scsc-input`,``,`size`,`lg`,`placeholder`,`Name or case number`,`aria-label`,`Search by name or case number`],[`scsc-input`,``,`aria-invalid`,`true`,`value`,`24CV`,`aria-label`,`Case number, incomplete`,3,`invalid`],[`scsc-input`,``,`readonly`,``,`value`,`Hon. Maria Delgado`,`aria-label`,`Assigned judge`],[`scsc-input`,``,`disabled`,``,`value`,`Civil — Unlimited`,`aria-label`,`Case type`]],template:function(e,r){e&1&&(Ga(0,`div`,0),uc(1,`input`,1)(2,`input`,2)(3,`input`,3)(4,`input`,4)(5,`input`,5)(6,`input`,6),Lf()),e&2&&(Jb(4),Pv(`invalid`,!0))},dependencies:[qo],encapsulation:2})};function $(s,a){if(s&1&&(Ga(0,`scsc-alert`,13),G_(1),Lf()),s&2){let e=y_();Jb(),$f(` `,e.saved(),` `)}}var V=class s{fb=g(Wue);saved=q(``);form=this.fb.nonNullable.group({name:[``,Fs.required],barNumber:[``,[Fs.required,Fs.pattern(/^\d{1,6}$/)]],firm:[``],email:[``,[Fs.required,Fs.email]],phone:[``,[Fs.required,Fs.pattern(/^\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/)]]});messages={name:{required:`Enter the attorney’s full name.`,format:``},barNumber:{required:`Enter the State Bar number.`,format:`Use digits only.`},email:{required:`Enter an email address.`,format:`Enter a valid email address.`},phone:{required:`Enter a phone number.`,format:`Enter a 10-digit phone number.`}};error(a){let e=this.form.controls[a];return e.invalid&&e.touched?e.hasError(`required`)?this.messages[a].required:this.messages[a].format:``}submit(){this.form.markAllAsTouched();let{name:a,barNumber:e}=this.form.getRawValue();this.saved.set(this.form.valid?a+` (SBN `+e+`) for 24CV012345.`:``)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-input-contact-demo`]],decls:15,vars:14,consts:[[1,`grid`,`max-w-xl`,`gap-4`,`sm:grid-cols-2`,3,`ngSubmit`,`formGroup`],[`label`,`Attorney name`,`for`,`input-contact-name`,`required`,``,1,`sm:col-span-2`,3,`error`],[`scsc-input`,``,`id`,`input-contact-name`,`formControlName`,`name`,`autocomplete`,`name`,`required`,``,3,`invalid`],[`label`,`State Bar number`,`for`,`input-contact-bar`,`hint`,`Up to 6 digits`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`input-contact-bar`,`formControlName`,`barNumber`,`inputmode`,`numeric`,`autocomplete`,`off`,`maxlength`,`6`,`required`,``,3,`invalid`],[`label`,`Firm`,`for`,`input-contact-firm`,`hint`,`Optional`],[`scsc-input`,``,`id`,`input-contact-firm`,`formControlName`,`firm`,`autocomplete`,`organization`],[`label`,`Email`,`for`,`input-contact-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`input-contact-email`,`type`,`email`,`formControlName`,`email`,`autocomplete`,`email`,`required`,``,3,`invalid`],[`label`,`Phone`,`for`,`input-contact-phone`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`input-contact-phone`,`type`,`tel`,`formControlName`,`phone`,`autocomplete`,`tel`,`required`,``,3,`invalid`],[1,`sm:col-span-2`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Attorney of record updated`,1,`sm:col-span-2`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),Lf()(),Ga(5,`scsc-form-field`,5)(6,`input`,6),HS(),Lf()(),Ga(7,`scsc-form-field`,7)(8,`input`,8),HS(),Lf()(),Ga(9,`scsc-form-field`,9)(10,`input`,10),HS(),Lf()(),Ga(11,`div`,11)(12,`scsc-button`,12),G_(13,`Save attorney of record`),Lf()(),JT(14,$,2,1,`scsc-alert`,13),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(),Pv(`error`,r.error(`name`)),Jb(),Pv(`invalid`,!!r.error(`name`)),cc(`aria-invalid`,!!r.error(`name`)),zS(),Jb(),Pv(`error`,r.error(`barNumber`)),Jb(),Pv(`invalid`,!!r.error(`barNumber`)),cc(`aria-invalid`,!!r.error(`barNumber`)),zS(),Jb(2),zS(),Jb(),Pv(`error`,r.error(`email`)),Jb(),Pv(`invalid`,!!r.error(`email`)),cc(`aria-invalid`,!!r.error(`email`)),zS(),Jb(),Pv(`error`,r.error(`phone`)),Jb(),Pv(`invalid`,!!r.error(`phone`)),cc(`aria-invalid`,!!r.error(`phone`)),zS(),Jb(4),t_(r.saved()?14:-1))},dependencies:[Kue,Bue,IA,Hue,que,WA,_z,Vz,Xz,za,sn,Vn,qo],encapsulation:2})};var x=class s{fb=g(Wue);form=this.fb.group({caseNumber:[``,[Fs.required,Fs.pattern(/^\d{2}[A-Z]{2}\d{6}$/)]]});error(){let a=this.form.controls.caseNumber;return a.invalid&&(a.dirty||a.touched)?a.hasError(`required`)?`Enter a case number.`:`Use the format 24CV012345.`:``}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-input-reactive-demo`]],decls:7,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`formGroup`],[`label`,`Case number`,`hint`,`Format: 24CV012345`,`for`,`caseNumber`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`caseNumber`,`formControlName`,`caseNumber`,`placeholder`,`24CV012345`,3,`invalid`],[1,`text-sm`,`text-base-content/70`]],template:function(e,r){e&1&&(Ga(0,`form`,0)(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`p`,3),G_(4,` Value: `),Ga(5,`code`),G_(6),Lf()()()),e&2&&(Pv(`formGroup`,r.form),Jb(),Pv(`error`,r.error()),Jb(),Pv(`invalid`,!!r.error()),zS(),Jb(4),nD(r.form.value.caseNumber||`—`))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,Vn,qo],encapsulation:2})};var I={"input-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscInput } from '@scscourt/design';

@Component({
  selector: 'app-input-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscInput],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <input scsc-input placeholder="24CV012345" aria-label="Case number" />
      <!-- sm for dense toolbars and table filters, lg for a page's one prominent field. -->
      <input scsc-input size="sm" placeholder="Filter parties\u2026" aria-label="Filter parties" />
      <input
        scsc-input
        size="lg"
        placeholder="Name or case number"
        aria-label="Search by name or case number"
      />
      <input
        scsc-input
        [invalid]="true"
        aria-invalid="true"
        value="24CV"
        aria-label="Case number, incomplete"
      />
      <!-- readonly stays focusable and is submitted; disabled is skipped by Tab and not submitted. -->
      <input scsc-input readonly value="Hon. Maria Delgado" aria-label="Assigned judge" />
      <input scsc-input disabled value="Civil \u2014 Unlimited" aria-label="Case type" />
    </div>
  \`,
})
export class InputBasicDemo {}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <input scsc-input placeholder="24CV012345" aria-label="Case number" />
  <!-- sm for dense toolbars and table filters, lg for a page's one prominent field. -->
  <input scsc-input size="sm" placeholder="Filter parties\u2026" aria-label="Filter parties" />
  <input
    scsc-input
    size="lg"
    placeholder="Name or case number"
    aria-label="Search by name or case number"
  />
  <input
    scsc-input
    [invalid]="true"
    aria-invalid="true"
    value="24CV"
    aria-label="Case number, incomplete"
  />
  <!-- readonly stays focusable and is submitted; disabled is skipped by Tab and not submitted. -->
  <input scsc-input readonly value="Hon. Maria Delgado" aria-label="Assigned judge" />
  <input scsc-input disabled value="Civil \u2014 Unlimited" aria-label="Case type" />
</div>
`},"input-contact":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput } from '@scscourt/design';

type Field = 'name' | 'barNumber' | 'email' | 'phone';

@Component({
  selector: 'app-input-contact-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput],
  template: \`
    <!-- type, inputmode and autocomplete give the right keyboard and let browsers autofill. -->
    <form [formGroup]="form" (ngSubmit)="submit()" class="grid max-w-xl gap-4 sm:grid-cols-2">
      <scsc-form-field
        class="sm:col-span-2"
        label="Attorney name"
        for="input-contact-name"
        required
        [error]="error('name')"
      >
        <input
          scsc-input
          id="input-contact-name"
          formControlName="name"
          autocomplete="name"
          required
          [invalid]="!!error('name')"
          [attr.aria-invalid]="!!error('name')"
        />
      </scsc-form-field>

      <scsc-form-field
        label="State Bar number"
        for="input-contact-bar"
        hint="Up to 6 digits"
        required
        [error]="error('barNumber')"
      >
        <input
          scsc-input
          id="input-contact-bar"
          formControlName="barNumber"
          inputmode="numeric"
          autocomplete="off"
          maxlength="6"
          required
          [invalid]="!!error('barNumber')"
          [attr.aria-invalid]="!!error('barNumber')"
        />
      </scsc-form-field>

      <scsc-form-field label="Firm" for="input-contact-firm" hint="Optional">
        <input
          scsc-input
          id="input-contact-firm"
          formControlName="firm"
          autocomplete="organization"
        />
      </scsc-form-field>

      <scsc-form-field label="Email" for="input-contact-email" required [error]="error('email')">
        <input
          scsc-input
          id="input-contact-email"
          type="email"
          formControlName="email"
          autocomplete="email"
          required
          [invalid]="!!error('email')"
          [attr.aria-invalid]="!!error('email')"
        />
      </scsc-form-field>

      <scsc-form-field label="Phone" for="input-contact-phone" required [error]="error('phone')">
        <input
          scsc-input
          id="input-contact-phone"
          type="tel"
          formControlName="phone"
          autocomplete="tel"
          required
          [invalid]="!!error('phone')"
          [attr.aria-invalid]="!!error('phone')"
        />
      </scsc-form-field>

      <div class="sm:col-span-2">
        <scsc-button variant="primary" nativeType="submit">Save attorney of record</scsc-button>
      </div>

      @if (saved()) {
        <scsc-alert class="sm:col-span-2" status="success" title="Attorney of record updated">
          {{ saved() }}
        </scsc-alert>
      }
    </form>
  \`,
})
export class InputContactDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal('');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    barNumber: ['', [Validators.required, Validators.pattern(/^\\d{1,6}$/)]],
    firm: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\\(?\\d{3}\\)?[ .-]?\\d{3}[ .-]?\\d{4}$/)]],
  });

  private readonly messages: Record<Field, { required: string; format: string }> = {
    name: { required: 'Enter the attorney\u2019s full name.', format: '' },
    barNumber: { required: 'Enter the State Bar number.', format: 'Use digits only.' },
    email: { required: 'Enter an email address.', format: 'Enter a valid email address.' },
    phone: { required: 'Enter a phone number.', format: 'Enter a 10-digit phone number.' },
  };

  protected error(name: Field): string {
    const c = this.form.controls[name];
    if (!(c.invalid && c.touched)) return '';
    return c.hasError('required') ? this.messages[name].required : this.messages[name].format;
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const { name, barNumber } = this.form.getRawValue();
    this.saved.set(this.form.valid ? name + ' (SBN ' + barNumber + ') for 24CV012345.' : '');
  }
}
`,html:`<!-- type, inputmode and autocomplete give the right keyboard and let browsers autofill. -->
<form [formGroup]="form" (ngSubmit)="submit()" class="grid max-w-xl gap-4 sm:grid-cols-2">
  <scsc-form-field
    class="sm:col-span-2"
    label="Attorney name"
    for="input-contact-name"
    required
    [error]="error('name')"
  >
    <input
      scsc-input
      id="input-contact-name"
      formControlName="name"
      autocomplete="name"
      required
      [invalid]="!!error('name')"
      [attr.aria-invalid]="!!error('name')"
    />
  </scsc-form-field>

  <scsc-form-field
    label="State Bar number"
    for="input-contact-bar"
    hint="Up to 6 digits"
    required
    [error]="error('barNumber')"
  >
    <input
      scsc-input
      id="input-contact-bar"
      formControlName="barNumber"
      inputmode="numeric"
      autocomplete="off"
      maxlength="6"
      required
      [invalid]="!!error('barNumber')"
      [attr.aria-invalid]="!!error('barNumber')"
    />
  </scsc-form-field>

  <scsc-form-field label="Firm" for="input-contact-firm" hint="Optional">
    <input
      scsc-input
      id="input-contact-firm"
      formControlName="firm"
      autocomplete="organization"
    />
  </scsc-form-field>

  <scsc-form-field label="Email" for="input-contact-email" required [error]="error('email')">
    <input
      scsc-input
      id="input-contact-email"
      type="email"
      formControlName="email"
      autocomplete="email"
      required
      [invalid]="!!error('email')"
      [attr.aria-invalid]="!!error('email')"
    />
  </scsc-form-field>

  <scsc-form-field label="Phone" for="input-contact-phone" required [error]="error('phone')">
    <input
      scsc-input
      id="input-contact-phone"
      type="tel"
      formControlName="phone"
      autocomplete="tel"
      required
      [invalid]="!!error('phone')"
      [attr.aria-invalid]="!!error('phone')"
    />
  </scsc-form-field>

  <div class="sm:col-span-2">
    <scsc-button variant="primary" nativeType="submit">Save attorney of record</scsc-button>
  </div>

  @if (saved()) {
    <scsc-alert class="sm:col-span-2" status="success" title="Attorney of record updated">
      {{ saved() }}
    </scsc-alert>
  }
</form>
`},"input-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscFormField, ScscInput } from '@scscourt/design';

@Component({
  selector: 'app-input-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscFormField, ScscInput],
  template: \`
    <form [formGroup]="form" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Case number"
        hint="Format: 24CV012345"
        for="caseNumber"
        required
        [error]="error()"
      >
        <input
          scsc-input
          id="caseNumber"
          formControlName="caseNumber"
          [invalid]="!!error()"
          placeholder="24CV012345"
        />
      </scsc-form-field>
      <p class="text-sm text-base-content/70">
        Value: <code>{{ form.value.caseNumber || '\u2014' }}</code>
      </p>
    </form>
  \`,
})
export class InputReactiveDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    caseNumber: ['', [Validators.required, Validators.pattern(/^\\d{2}[A-Z]{2}\\d{6}$/)]],
  });

  protected error(): string {
    const c = this.form.controls.caseNumber;
    if (!(c.invalid && (c.dirty || c.touched))) return '';
    return c.hasError('required') ? 'Enter a case number.' : 'Use the format 24CV012345.';
  }
}
`,html:`<form [formGroup]="form" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Case number"
    hint="Format: 24CV012345"
    for="caseNumber"
    required
    [error]="error()"
  >
    <input
      scsc-input
      id="caseNumber"
      formControlName="caseNumber"
      [invalid]="!!error()"
      placeholder="24CV012345"
    />
  </scsc-form-field>
  <p class="text-sm text-base-content/70">
    Value: <code>{{ form.value.caseNumber || '\u2014' }}</code>
  </p>
</form>
`}};var de={slug:`input`,name:`Input`,classes:[`ScscInput`],category:`Forms`,whenToUse:["Any single-line text entry. It is a directive on the native `<input>`, so `formControlName`, `ngModel`, `type`, `pattern`, `maxlength` and native validation all work unchanged.","Wrap it in `scsc-form-field` for the label, hint and error message; bind `[invalid]` to the control state to show the error ring.","Set `type` (`email`, `tel`), `inputmode` and `autocomplete` on every personal-data field: phones get the right keyboard and browsers can autofill.","For search boxes use `scsc-search-input`; for numbers `scsc-number-input`; for masked formats `scsc-masked-input` from `@scscourt/design/pickers`."],demos:[{id:`input-basic`,title:`Sizes and states`,description:`Placeholder, three sizes, invalid, read-only and disabled.`,component:D,source:I[`input-basic`]},{id:`input-reactive`,title:`With Reactive Forms`,description:`Validation state drives both the field error and the input ring.`,component:x,source:I[`input-reactive`]},{id:`input-contact`,title:`Attorney contact details`,description:"A two-column form section: `type`, `inputmode` and `autocomplete` per field, `required` on the control, and per-field messages.",component:V,source:I[`input-contact`]}],a11y:["Always label the input: `scsc-form-field` with `for`, a wrapping `<label>`, or `aria-label`.",'`[invalid]`, or an `error` on the enclosing `scsc-form-field`, sets `aria-invalid="true"` on the input, so the state is announced.',"Put `required` on the control itself: the asterisk from `scsc-form-field` is visual only.","`autocomplete` tokens (`name`, `email`, `tel`, `postal-code`) identify the purpose of personal-data fields (WCAG 1.3.5)."],appMustProvide:["A visible label (`scsc-form-field`), `required` on the control, and `autocomplete` tokens on fields that collect the user’s own details (1.3.5)."],related:[`form-field`,`textarea`,`select`,`search-input`,`number-input`]};export{de as INPUT_DOCS};