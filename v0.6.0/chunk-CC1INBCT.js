import{Ai as vA,Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Lo as d_,Ma as JT,Ms as uc,Na as Jb,No as cc,Nr as jo,Xa as Pv,Y as Fs,Zi as za,Zn as bA,Zo as i_,_i as tN,_s as o_,bn as Vz,c as $r,cs as lc,ha as Eg,ii as qo,ka as Ig,ks as t_,l as $ue,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var z=class l{static ɵfac=function(t){return new(t||l)};static ɵcmp=Af({type:l,selectors:[[`app-form-field-basic-demo`]],decls:13,vars:0,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Party name`,`hint`,`As it appears on the filing`,`for`,`party`,`required`,``],[`scsc-input`,``,`id`,`party`,`placeholder`,`Jane Alvarez`,`required`,``],[`label`,`Case type`,`for`,`type`],[`scsc-select`,``,`id`,`type`],[`label`,`Notes`,`for`,`notes`,`error`,`Notes cannot exceed 500 characters.`],[`scsc-textarea`,``,`id`,`notes`,`rows`,`3`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1),uc(2,`input`,2),Lf(),Ga(3,`scsc-form-field`,3)(4,`select`,4)(5,`option`),G_(6,`Civil`),Lf(),Ga(7,`option`),G_(8,`Family`),Lf(),Ga(9,`option`),G_(10,`Probate`),Lf()()(),Ga(11,`scsc-form-field`,5),uc(12,`textarea`,6),Lf()())},dependencies:[Vn,qo,On,vA],encapsulation:2})};var ie=(l,s)=>s.value;function ae(l,s){if(l&1){let t=d_();Ga(0,`label`,2)(1,`input`,6),lc(`change`,function(){let S=Eg(t).$implicit,re=y_();return Ig(re.contact.set(S.value))}),Lf(),G_(2),Lf()}if(l&2){let t=s.$implicit,e=y_();Jb(),Pv(`value`,t.value)(`checked`,e.contact()===t.value),Jb(),$f(` `,t.label,` `)}}var R=class l{contacts=[{value:`email`,label:`Email`},{value:`text`,label:`Text message`},{value:`mail`,label:`US Mail`}];contact=q(``);submitted=q(!1);contactError(){return this.submitted()&&!this.contact()?`Choose how we should send hearing notices`:``}static ɵfac=function(t){return new(t||l)};static ɵcmp=Af({type:l,selectors:[[`app-form-field-fieldset-demo`]],decls:17,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-6`],[`legend`,`How should we send hearing notices?`,`hint`,`You can change this later in your profile`,`required`,``,3,`error`],[1,`flex`,`items-center`,`gap-2`],[`legend`,`Also notify me about`,`inline`,``],[`type`,`checkbox`,`scsc-checkbox`,``],[`variant`,`primary`,3,`click`],[`type`,`radio`,`scsc-radio`,``,`name`,`contact`,3,`change`,`value`,`checked`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-fieldset`,1),o_(2,ae,3,3,`label`,2,ie),Lf(),Ga(4,`scsc-fieldset`,3)(5,`label`,2),uc(6,`input`,4),G_(7,` Filings`),Lf(),Ga(8,`label`,2),uc(9,`input`,4),G_(10,` Rulings`),Lf(),Ga(11,`label`,2),uc(12,`input`,4),G_(13,` Continuances`),Lf()(),Ga(14,`div`)(15,`scsc-button`,5),lc(`click`,function(){return e.submitted.set(!0)}),G_(16,`Save preferences`),Lf()()()),t&2&&(Jb(),Pv(`error`,e.contactError()),Jb(),i_(e.contacts))},dependencies:[sn,jo,$r,bA],encapsulation:2})};function se(l,s){l&1&&(Ga(0,`scsc-alert`,23),G_(1,`Next: respondent details.`),Lf())}var M=class l{fb=g(Wue);saved=q(!1);form=this.fb.nonNullable.group({firstName:[``,Fs.required],lastName:[``,Fs.required],birthDate:[``,Fs.required],otherNames:[``],street:[``,Fs.required],city:[``,Fs.required],state:[`CA`],zip:[``,[Fs.required,Fs.pattern(/^\d{5}(-\d{4})?$/)]]});required={firstName:`Enter a first name.`,lastName:`Enter a last name.`,birthDate:`Enter a date of birth.`,street:`Enter a mailing address.`,city:`Enter a city.`,zip:`Enter a ZIP code.`};error(s){let t=this.form.controls[s];return t.invalid&&t.touched?t.hasError(`required`)?this.required[s]:`Use 5 digits, e.g. 95113.`:``}submit(){this.form.markAllAsTouched(),this.saved.set(this.form.valid)}static ɵfac=function(t){return new(t||l)};static ɵcmp=Af({type:l,selectors:[[`app-form-field-intake-demo`]],decls:30,vars:20,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`grid`,`gap-4`,`sm:grid-cols-6`],[1,`mb-1`,`text-sm`,`font-semibold`],[`label`,`First name`,`for`,`intake-first`,`required`,``,1,`sm:col-span-3`,3,`error`],[`scsc-input`,``,`id`,`intake-first`,`formControlName`,`firstName`,`autocomplete`,`given-name`,`required`,``,3,`invalid`],[`label`,`Last name`,`for`,`intake-last`,`required`,``,1,`sm:col-span-3`,3,`error`],[`scsc-input`,``,`id`,`intake-last`,`formControlName`,`lastName`,`autocomplete`,`family-name`,`required`,``,3,`invalid`],[`label`,`Date of birth`,`for`,`intake-dob`,`required`,``,1,`sm:col-span-3`,3,`error`],[`scsc-input`,``,`id`,`intake-dob`,`type`,`date`,`formControlName`,`birthDate`,`autocomplete`,`bday`,`required`,``,3,`invalid`],[`label`,`Other names used`,`for`,`intake-aka`,`hint`,`Optional, e.g. a maiden name`,1,`sm:col-span-3`],[`scsc-input`,``,`id`,`intake-aka`,`formControlName`,`otherNames`],[`label`,`Mailing address`,`for`,`intake-street`,`hint`,`Where the court will mail notices`,`required`,``,1,`sm:col-span-6`,3,`error`],[`scsc-input`,``,`id`,`intake-street`,`formControlName`,`street`,`autocomplete`,`street-address`,`required`,``,3,`invalid`],[`label`,`City`,`for`,`intake-city`,`required`,``,1,`sm:col-span-3`,3,`error`],[`scsc-input`,``,`id`,`intake-city`,`formControlName`,`city`,`autocomplete`,`address-level2`,`required`,``,3,`invalid`],[`label`,`State`,`for`,`intake-state`,1,`sm:col-span-1`],[`scsc-select`,``,`id`,`intake-state`,`formControlName`,`state`,`autocomplete`,`address-level1`],[`value`,`CA`],[`value`,`NV`],[`value`,`OR`],[`label`,`ZIP code`,`for`,`intake-zip`,`required`,``,1,`sm:col-span-2`,3,`error`],[`scsc-input`,``,`id`,`intake-zip`,`formControlName`,`zip`,`inputmode`,`numeric`,`autocomplete`,`postal-code`,`required`,``,3,`invalid`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Petitioner saved`]],template:function(t,e){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`fieldset`,1)(2,`legend`,2),G_(3,`Petitioner`),Lf(),Ga(4,`scsc-form-field`,3)(5,`input`,4),HS(),Lf()(),Ga(6,`scsc-form-field`,5)(7,`input`,6),HS(),Lf()(),Ga(8,`scsc-form-field`,7)(9,`input`,8),HS(),Lf()(),Ga(10,`scsc-form-field`,9)(11,`input`,10),HS(),Lf()(),Ga(12,`scsc-form-field`,11)(13,`input`,12),HS(),Lf()(),Ga(14,`scsc-form-field`,13)(15,`input`,14),HS(),Lf()(),Ga(16,`scsc-form-field`,15)(17,`select`,16),HS(),Ga(18,`option`,17),G_(19,`CA`),Lf(),Ga(20,`option`,18),G_(21,`NV`),Lf(),Ga(22,`option`,19),G_(23,`OR`),Lf()()(),Ga(24,`scsc-form-field`,20)(25,`input`,21),HS(),Lf()()(),Ga(26,`div`)(27,`scsc-button`,22),G_(28,`Save and continue`),Lf()(),JT(29,se,2,0,`scsc-alert`,23),Lf()),t&2&&(Pv(`formGroup`,e.form),Jb(4),Pv(`error`,e.error(`firstName`)),Jb(),Pv(`invalid`,!!e.error(`firstName`)),cc(`aria-invalid`,!!e.error(`firstName`)),zS(),Jb(),Pv(`error`,e.error(`lastName`)),Jb(),Pv(`invalid`,!!e.error(`lastName`)),cc(`aria-invalid`,!!e.error(`lastName`)),zS(),Jb(),Pv(`error`,e.error(`birthDate`)),Jb(),Pv(`invalid`,!!e.error(`birthDate`)),cc(`aria-invalid`,!!e.error(`birthDate`)),zS(),Jb(2),zS(),Jb(),Pv(`error`,e.error(`street`)),Jb(),Pv(`invalid`,!!e.error(`street`)),cc(`aria-invalid`,!!e.error(`street`)),zS(),Jb(),Pv(`error`,e.error(`city`)),Jb(),Pv(`invalid`,!!e.error(`city`)),cc(`aria-invalid`,!!e.error(`city`)),zS(),Jb(2),zS(),Jb(7),Pv(`error`,e.error(`zip`)),Jb(),Pv(`invalid`,!!e.error(`zip`)),cc(`aria-invalid`,!!e.error(`zip`)),zS(),Jb(4),t_(e.saved()?29:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,WA,Vz,Xz,za,sn,Vn,qo,On],encapsulation:2})};function ne(l,s){l&1&&(Ga(0,`scsc-alert`,8),G_(1,`Contact details were updated.`),Lf())}var O=class l{fb=g(Wue);saved=q(!1);form=this.fb.group({email:[``,[Fs.required,Fs.email]],phone:[``,Fs.pattern(/^\(?\d{3}\)?[ -]?\d{3}-?\d{4}$/)]});invalid(s){let t=this.form.controls[s];return t.invalid&&(t.dirty||t.touched)}errorFor(s){if(!this.invalid(s))return``;let t=this.form.controls[s];return t.hasError(`required`)?`This field is required.`:t.hasError(`email`)?`Enter a valid email address.`:t.hasError(`pattern`)?`Enter a 10-digit phone number.`:`Invalid value.`}submit(){this.form.markAllAsTouched(),this.saved.set(this.form.valid)}static ɵfac=function(t){return new(t||l)};static ɵcmp=Af({type:l,selectors:[[`app-form-field-validation-demo`]],decls:11,vars:8,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Email`,`for`,`email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`email`,`type`,`email`,`formControlName`,`email`,`autocomplete`,`email`,`required`,``,3,`invalid`],[`label`,`Phone`,`hint`,`Optional`,`for`,`phone`,3,`error`],[`scsc-input`,``,`id`,`phone`,`type`,`tel`,`formControlName`,`phone`,`autocomplete`,`tel`,`placeholder`,`(408) 555-0100`,3,`invalid`],[1,`flex`,`gap-2`],[`variant`,`primary`,`nativeType`,`submit`],[`variant`,`ghost`,`nativeType`,`reset`,3,`click`],[`status`,`success`,`title`,`Saved`]],template:function(t,e){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),Lf()(),Ga(5,`div`,5)(6,`scsc-button`,6),G_(7,`Save contact`),Lf(),Ga(8,`scsc-button`,7),lc(`click`,function(){return e.saved.set(!1)}),G_(9,`Clear`),Lf()(),JT(10,ne,2,0,`scsc-alert`,8),Lf()),t&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.errorFor(`email`)),Jb(),Pv(`invalid`,e.invalid(`email`)),cc(`aria-invalid`,e.invalid(`email`)),zS(),Jb(),Pv(`error`,e.errorFor(`phone`)),Jb(),Pv(`invalid`,e.invalid(`phone`)),cc(`aria-invalid`,e.invalid(`phone`)),zS(),Jb(6),t_(e.saved()?10:-1))},dependencies:[Kue,Bue,IA,Hue,que,WA,Vz,Xz,za,sn,Vn,qo],encapsulation:2})};var F={"form-field-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscFormField, ScscInput, ScscSelect, ScscTextarea } from '@scscourt/design';

@Component({
  selector: 'app-form-field-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscInput, ScscSelect, ScscTextarea],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Party name" hint="As it appears on the filing" for="party" required>
        <input scsc-input id="party" placeholder="Jane Alvarez" required />
      </scsc-form-field>

      <scsc-form-field label="Case type" for="type">
        <select scsc-select id="type">
          <option>Civil</option>
          <option>Family</option>
          <option>Probate</option>
        </select>
      </scsc-form-field>

      <scsc-form-field label="Notes" for="notes" error="Notes cannot exceed 500 characters.">
        <textarea scsc-textarea id="notes" rows="3"></textarea>
      </scsc-form-field>
    </div>
  \`,
})
export class FormFieldBasicDemo {}
`,html:`<div class="flex max-w-md flex-col gap-4">
  <scsc-form-field label="Party name" hint="As it appears on the filing" for="party" required>
    <input scsc-input id="party" placeholder="Jane Alvarez" required />
  </scsc-form-field>

  <scsc-form-field label="Case type" for="type">
    <select scsc-select id="type">
      <option>Civil</option>
      <option>Family</option>
      <option>Probate</option>
    </select>
  </scsc-form-field>

  <scsc-form-field label="Notes" for="notes" error="Notes cannot exceed 500 characters.">
    <textarea scsc-textarea id="notes" rows="3"></textarea>
  </scsc-form-field>
</div>
`},"form-field-fieldset":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCheckbox, ScscFieldset, ScscRadio } from '@scscourt/design';

@Component({
  selector: 'app-form-field-fieldset-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCheckbox, ScscFieldset, ScscRadio],
  template: \`
    <div class="flex max-w-md flex-col gap-6">
      <scsc-fieldset
        legend="How should we send hearing notices?"
        hint="You can change this later in your profile"
        [error]="contactError()"
        required
      >
        @for (c of contacts; track c.value) {
          <label class="flex items-center gap-2">
            <input
              type="radio"
              scsc-radio
              name="contact"
              [value]="c.value"
              [checked]="contact() === c.value"
              (change)="contact.set(c.value)"
            />
            {{ c.label }}
          </label>
        }
      </scsc-fieldset>

      <scsc-fieldset legend="Also notify me about" inline>
        <label class="flex items-center gap-2"
          ><input type="checkbox" scsc-checkbox /> Filings</label
        >
        <label class="flex items-center gap-2"
          ><input type="checkbox" scsc-checkbox /> Rulings</label
        >
        <label class="flex items-center gap-2"
          ><input type="checkbox" scsc-checkbox /> Continuances</label
        >
      </scsc-fieldset>

      <div>
        <scsc-button variant="primary" (click)="submitted.set(true)">Save preferences</scsc-button>
      </div>
    </div>
  \`,
})
export class FormFieldFieldsetDemo {
  protected readonly contacts = [
    { value: 'email', label: 'Email' },
    { value: 'text', label: 'Text message' },
    { value: 'mail', label: 'US Mail' },
  ];
  protected readonly contact = signal('');
  protected readonly submitted = signal(false);
  protected contactError(): string {
    return this.submitted() && !this.contact() ? 'Choose how we should send hearing notices' : '';
  }
}
`,html:`<div class="flex max-w-md flex-col gap-6">
  <scsc-fieldset
    legend="How should we send hearing notices?"
    hint="You can change this later in your profile"
    [error]="contactError()"
    required
  >
    @for (c of contacts; track c.value) {
      <label class="flex items-center gap-2">
        <input
          type="radio"
          scsc-radio
          name="contact"
          [value]="c.value"
          [checked]="contact() === c.value"
          (change)="contact.set(c.value)"
        />
        {{ c.label }}
      </label>
    }
  </scsc-fieldset>

  <scsc-fieldset legend="Also notify me about" inline>
    <label class="flex items-center gap-2"
      ><input type="checkbox" scsc-checkbox /> Filings</label
    >
    <label class="flex items-center gap-2"
      ><input type="checkbox" scsc-checkbox /> Rulings</label
    >
    <label class="flex items-center gap-2"
      ><input type="checkbox" scsc-checkbox /> Continuances</label
    >
  </scsc-fieldset>

  <div>
    <scsc-button variant="primary" (click)="submitted.set(true)">Save preferences</scsc-button>
  </div>
</div>
`},"form-field-intake":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput, ScscSelect } from '@scscourt/design';

type Field = 'firstName' | 'lastName' | 'birthDate' | 'street' | 'city' | 'zip';

@Component({
  selector: 'app-form-field-intake-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput, ScscSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4">
      <!-- A section of an intake form: fieldset + legend, fields laid out on a grid. -->
      <fieldset class="grid gap-4 sm:grid-cols-6">
        <legend class="mb-1 text-sm font-semibold">Petitioner</legend>

        <scsc-form-field
          class="sm:col-span-3"
          label="First name"
          for="intake-first"
          required
          [error]="error('firstName')"
        >
          <input
            scsc-input
            id="intake-first"
            formControlName="firstName"
            autocomplete="given-name"
            required
            [invalid]="!!error('firstName')"
            [attr.aria-invalid]="!!error('firstName')"
          />
        </scsc-form-field>
        <scsc-form-field
          class="sm:col-span-3"
          label="Last name"
          for="intake-last"
          required
          [error]="error('lastName')"
        >
          <input
            scsc-input
            id="intake-last"
            formControlName="lastName"
            autocomplete="family-name"
            required
            [invalid]="!!error('lastName')"
            [attr.aria-invalid]="!!error('lastName')"
          />
        </scsc-form-field>

        <scsc-form-field
          class="sm:col-span-3"
          label="Date of birth"
          for="intake-dob"
          required
          [error]="error('birthDate')"
        >
          <input
            scsc-input
            id="intake-dob"
            type="date"
            formControlName="birthDate"
            autocomplete="bday"
            required
            [invalid]="!!error('birthDate')"
            [attr.aria-invalid]="!!error('birthDate')"
          />
        </scsc-form-field>
        <scsc-form-field
          class="sm:col-span-3"
          label="Other names used"
          for="intake-aka"
          hint="Optional, e.g. a maiden name"
        >
          <input scsc-input id="intake-aka" formControlName="otherNames" />
        </scsc-form-field>

        <scsc-form-field
          class="sm:col-span-6"
          label="Mailing address"
          for="intake-street"
          hint="Where the court will mail notices"
          required
          [error]="error('street')"
        >
          <input
            scsc-input
            id="intake-street"
            formControlName="street"
            autocomplete="street-address"
            required
            [invalid]="!!error('street')"
            [attr.aria-invalid]="!!error('street')"
          />
        </scsc-form-field>
        <scsc-form-field
          class="sm:col-span-3"
          label="City"
          for="intake-city"
          required
          [error]="error('city')"
        >
          <input
            scsc-input
            id="intake-city"
            formControlName="city"
            autocomplete="address-level2"
            required
            [invalid]="!!error('city')"
            [attr.aria-invalid]="!!error('city')"
          />
        </scsc-form-field>
        <scsc-form-field class="sm:col-span-1" label="State" for="intake-state">
          <select
            scsc-select
            id="intake-state"
            formControlName="state"
            autocomplete="address-level1"
          >
            <option value="CA">CA</option>
            <option value="NV">NV</option>
            <option value="OR">OR</option>
          </select>
        </scsc-form-field>
        <scsc-form-field
          class="sm:col-span-2"
          label="ZIP code"
          for="intake-zip"
          required
          [error]="error('zip')"
        >
          <input
            scsc-input
            id="intake-zip"
            formControlName="zip"
            inputmode="numeric"
            autocomplete="postal-code"
            required
            [invalid]="!!error('zip')"
            [attr.aria-invalid]="!!error('zip')"
          />
        </scsc-form-field>
      </fieldset>

      <div>
        <scsc-button variant="primary" nativeType="submit">Save and continue</scsc-button>
      </div>

      @if (saved()) {
        <scsc-alert status="success" title="Petitioner saved">Next: respondent details.</scsc-alert>
      }
    </form>
  \`,
})
export class FormFieldIntakeDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    otherNames: [''],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['CA'],
    zip: ['', [Validators.required, Validators.pattern(/^\\d{5}(-\\d{4})?$/)]],
  });

  private readonly required: Record<Field, string> = {
    firstName: 'Enter a first name.',
    lastName: 'Enter a last name.',
    birthDate: 'Enter a date of birth.',
    street: 'Enter a mailing address.',
    city: 'Enter a city.',
    zip: 'Enter a ZIP code.',
  };

  protected error(name: Field): string {
    const c = this.form.controls[name];
    if (!(c.invalid && c.touched)) return '';
    return c.hasError('required') ? this.required[name] : 'Use 5 digits, e.g. 95113.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.saved.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4">
  <!-- A section of an intake form: fieldset + legend, fields laid out on a grid. -->
  <fieldset class="grid gap-4 sm:grid-cols-6">
    <legend class="mb-1 text-sm font-semibold">Petitioner</legend>

    <scsc-form-field
      class="sm:col-span-3"
      label="First name"
      for="intake-first"
      required
      [error]="error('firstName')"
    >
      <input
        scsc-input
        id="intake-first"
        formControlName="firstName"
        autocomplete="given-name"
        required
        [invalid]="!!error('firstName')"
        [attr.aria-invalid]="!!error('firstName')"
      />
    </scsc-form-field>
    <scsc-form-field
      class="sm:col-span-3"
      label="Last name"
      for="intake-last"
      required
      [error]="error('lastName')"
    >
      <input
        scsc-input
        id="intake-last"
        formControlName="lastName"
        autocomplete="family-name"
        required
        [invalid]="!!error('lastName')"
        [attr.aria-invalid]="!!error('lastName')"
      />
    </scsc-form-field>

    <scsc-form-field
      class="sm:col-span-3"
      label="Date of birth"
      for="intake-dob"
      required
      [error]="error('birthDate')"
    >
      <input
        scsc-input
        id="intake-dob"
        type="date"
        formControlName="birthDate"
        autocomplete="bday"
        required
        [invalid]="!!error('birthDate')"
        [attr.aria-invalid]="!!error('birthDate')"
      />
    </scsc-form-field>
    <scsc-form-field
      class="sm:col-span-3"
      label="Other names used"
      for="intake-aka"
      hint="Optional, e.g. a maiden name"
    >
      <input scsc-input id="intake-aka" formControlName="otherNames" />
    </scsc-form-field>

    <scsc-form-field
      class="sm:col-span-6"
      label="Mailing address"
      for="intake-street"
      hint="Where the court will mail notices"
      required
      [error]="error('street')"
    >
      <input
        scsc-input
        id="intake-street"
        formControlName="street"
        autocomplete="street-address"
        required
        [invalid]="!!error('street')"
        [attr.aria-invalid]="!!error('street')"
      />
    </scsc-form-field>
    <scsc-form-field
      class="sm:col-span-3"
      label="City"
      for="intake-city"
      required
      [error]="error('city')"
    >
      <input
        scsc-input
        id="intake-city"
        formControlName="city"
        autocomplete="address-level2"
        required
        [invalid]="!!error('city')"
        [attr.aria-invalid]="!!error('city')"
      />
    </scsc-form-field>
    <scsc-form-field class="sm:col-span-1" label="State" for="intake-state">
      <select
        scsc-select
        id="intake-state"
        formControlName="state"
        autocomplete="address-level1"
      >
        <option value="CA">CA</option>
        <option value="NV">NV</option>
        <option value="OR">OR</option>
      </select>
    </scsc-form-field>
    <scsc-form-field
      class="sm:col-span-2"
      label="ZIP code"
      for="intake-zip"
      required
      [error]="error('zip')"
    >
      <input
        scsc-input
        id="intake-zip"
        formControlName="zip"
        inputmode="numeric"
        autocomplete="postal-code"
        required
        [invalid]="!!error('zip')"
        [attr.aria-invalid]="!!error('zip')"
      />
    </scsc-form-field>
  </fieldset>

  <div>
    <scsc-button variant="primary" nativeType="submit">Save and continue</scsc-button>
  </div>

  @if (saved()) {
    <scsc-alert status="success" title="Petitioner saved">Next: respondent details.</scsc-alert>
  }
</form>
`},"form-field-validation":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput } from '@scscourt/design';

@Component({
  selector: 'app-form-field-validation-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Email" for="email" required [error]="errorFor('email')">
        <input
          scsc-input
          id="email"
          type="email"
          formControlName="email"
          autocomplete="email"
          required
          [invalid]="invalid('email')"
          [attr.aria-invalid]="invalid('email')"
        />
      </scsc-form-field>

      <scsc-form-field label="Phone" hint="Optional" for="phone" [error]="errorFor('phone')">
        <input
          scsc-input
          id="phone"
          type="tel"
          formControlName="phone"
          autocomplete="tel"
          [invalid]="invalid('phone')"
          [attr.aria-invalid]="invalid('phone')"
          placeholder="(408) 555-0100"
        />
      </scsc-form-field>

      <div class="flex gap-2">
        <scsc-button variant="primary" nativeType="submit">Save contact</scsc-button>
        <scsc-button variant="ghost" nativeType="reset" (click)="saved.set(false)"
          >Clear</scsc-button
        >
      </div>

      @if (saved()) {
        <scsc-alert status="success" title="Saved">Contact details were updated.</scsc-alert>
      }
    </form>
  \`,
})
export class FormFieldValidationDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal(false);

  protected readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern(/^\\(?\\d{3}\\)?[ -]?\\d{3}-?\\d{4}$/)],
  });

  protected invalid(name: 'email' | 'phone'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.dirty || c.touched);
  }

  protected errorFor(name: 'email' | 'phone'): string {
    if (!this.invalid(name)) return '';
    const c = this.form.controls[name];
    if (c.hasError('required')) return 'This field is required.';
    if (c.hasError('email')) return 'Enter a valid email address.';
    if (c.hasError('pattern')) return 'Enter a 10-digit phone number.';
    return 'Invalid value.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.saved.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field label="Email" for="email" required [error]="errorFor('email')">
    <input
      scsc-input
      id="email"
      type="email"
      formControlName="email"
      autocomplete="email"
      required
      [invalid]="invalid('email')"
      [attr.aria-invalid]="invalid('email')"
    />
  </scsc-form-field>

  <scsc-form-field label="Phone" hint="Optional" for="phone" [error]="errorFor('phone')">
    <input
      scsc-input
      id="phone"
      type="tel"
      formControlName="phone"
      autocomplete="tel"
      [invalid]="invalid('phone')"
      [attr.aria-invalid]="invalid('phone')"
      placeholder="(408) 555-0100"
    />
  </scsc-form-field>

  <div class="flex gap-2">
    <scsc-button variant="primary" nativeType="submit">Save contact</scsc-button>
    <scsc-button variant="ghost" nativeType="reset" (click)="saved.set(false)"
      >Clear</scsc-button
    >
  </div>

  @if (saved()) {
    <scsc-alert status="success" title="Saved">Contact details were updated.</scsc-alert>
  }
</form>
`}};var Ve={slug:`form-field`,name:`Form Field`,classes:[`ScscFormField`,`ScscFieldset`],category:`Forms`,whenToUse:["Around every single control that needs a label: `scsc-input`, `scsc-select`, `scsc-textarea`, and the library controls (`scsc-combobox`, `scsc-multi-select`, `scsc-search-input`, `scsc-tags-input`, `scsc-number-input`). The field labels and describes the control for you; `for` is only needed to point at a control of your own.","`hint` for what the user needs before typing (a format, a limit). It stays visible when an error shows.",'`error` once the value is wrong: bind it to a predicate that is true only after the user has interacted or submitted, and say how to fix it ("Enter the case number in the format 24CV012345").',"`scsc-fieldset` around a group: radio buttons, checkboxes, or controls that only make sense together. The legend names the group and its hint and error describe the whole group.",'The host is a full-width block, so a form section is a CSS grid of fields: put `class="sm:col-span-3"` (or similar) on each `scsc-form-field`.'],demos:[{id:`form-field-basic`,title:`Label, hint, required, error`,description:`The three text slots, with any native control projected.`,component:z,source:F[`form-field-basic`]},{id:`form-field-validation`,title:`With Reactive Forms validation`,description:"Errors appear after touch, and all at once on submit via `markAllAsTouched()`.",component:O,source:F[`form-field-validation`]},{id:`form-field-fieldset`,title:`Radio and checkbox groups`,description:`A required radio group and an inline checkbox group. Press Save without choosing: the group shows its error, which is read with the group.`,component:R,source:F[`form-field-fieldset`]},{id:`form-field-intake`,title:`An intake form section`,description:"Eight fields on a six-column grid inside a `fieldset`: paired names, a full-width address, and City / State / ZIP on one row.",component:M,source:F[`form-field-intake`]}],aria:["The label’s `for` points at the control. A control with no `id` gets a generated one; an `id` you set is kept.",'The control gets `aria-describedby` = the hint and the error (merged with any `aria-describedby` you set), `aria-invalid="true"` while an error shows and `aria-required="true"` when the field is `required`.',"For library controls with an inner field (`scsc-combobox`, `scsc-number-input`, …) all of this lands on the inner element that takes focus.",'The error text starts with a visually hidden "Error:", so it is not conveyed by colour alone. `scsc-fieldset` renders a real `<fieldset>` + `<legend>`, with the hint and error as the group’s description.',"Building your own control? Call `connectToField(() => element)` in its constructor and bind the returned `describedBy`, `invalid()` and `required` on the element that takes focus."],appMustProvide:["A visible `label` (or `legend`) for every field, and a `hint` for any required format.","Error messages that say how to fix the problem, and an `scsc-error-summary` that takes focus on a rejected submit.","The `autocomplete` attribute on fields that collect the user’s own details (name, email, phone, address), so browsers can fill them (WCAG 1.3.5)."],a11y:[`Errors are not live regions: several failing fields would each interrupt the screen reader on submit. Each error is read with its field, and the error summary announces the problems once.`,"The required asterisk is hidden from screen readers; `aria-required` carries the state instead."],related:[`input`,`textarea`,`select`,`checkbox`,`radio`]};export{Ve as FORM_FIELD_DOCS};