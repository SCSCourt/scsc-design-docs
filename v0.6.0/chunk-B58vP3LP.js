import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,No as cc,Q as Gue,Ss as rD,Xa as Pv,Y as Fs,Yo as iD,Zi as za,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ii as qo,ks as t_,nt as IA,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import{a as St}from"./chunk-D2cerPAB.js";function H(n,r){if(n&1&&(Ga(0,`scsc-alert`,6),G_(1),Lf()),n&2){let e=y_();Jb(),nD(e.found())}}function J(n){let r=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(n.value??``);if(!r)return null;let[e,t,f]=[Number(r[1]),Number(r[2]),Number(r[3])],s=new Date(f,e-1,t);return s.getMonth()===e-1&&s.getDate()===t&&f>=1900?s>new Date?{future:!0}:null:{realDate:!0}}var P=class n{fb=g(Wue);found=q(``);form=this.fb.nonNullable.group({license:[``,[Fs.required,Fs.pattern(/^[A-Za-z]\d{7}$/)]],birthDate:[``,[Fs.required,Fs.pattern(/^\d{2}\/\d{2}\/\d{4}$/),J]]});error(r){let e=this.form.controls[r];return e.invalid&&e.touched?e.hasError(`required`)?r===`license`?`Enter your license number.`:`Enter your date of birth.`:e.hasError(`pattern`)?r===`license`?`Enter 1 letter and 7 digits.`:`Enter the full date.`:e.hasError(`future`)?`The date cannot be in the future.`:`That date does not exist.`:``}submit(){this.form.markAllAsTouched(),this.found.set(this.form.valid?`Citation 26TR048211 · Speeding · Due 30 Oct 2026 · $238.00`:``)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-masked-input-citation-demo`]],decls:9,vars:8,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Driver's license number`,`for`,`citation-license`,`hint`,`1 letter and 7 digits, as on your license`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`citation-license`,`scscMask`,`A#######`,`formControlName`,`license`,`autocomplete`,`off`,`placeholder`,`D1234567`,`required`,``,3,`invalid`],[`label`,`Date of birth`,`for`,`citation-dob`,`hint`,`MM/DD/YYYY`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`citation-dob`,`scscMask`,`##/##/####`,`inputmode`,`numeric`,`autocomplete`,`bday`,`formControlName`,`birthDate`,`placeholder`,`04/17/1986`,`required`,``,3,`invalid`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`info`,`title`,`1 open citation`]],template:function(e,t){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return t.submit()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),Lf()(),Ga(5,`div`)(6,`scsc-button`,5),G_(7,`Find my traffic ticket`),Lf()(),JT(8,H,2,1,`scsc-alert`,6),Lf()),e&2&&(Pv(`formGroup`,t.form),Jb(),Pv(`error`,t.error(`license`)),Jb(),Pv(`invalid`,!!t.error(`license`)),cc(`aria-invalid`,!!t.error(`license`)),zS(),Jb(),Pv(`error`,t.error(`birthDate`)),Jb(),Pv(`invalid`,!!t.error(`birthDate`)),cc(`aria-invalid`,!!t.error(`birthDate`)),zS(),Jb(4),t_(t.found()?8:-1))},dependencies:[Kue,Bue,IA,Hue,que,WA,Vz,Xz,za,sn,Vn,qo,St],encapsulation:2})};var B=class n{phone=q(``);caseNumber=q(``);zip=q(``);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-masked-input-masks-demo`]],decls:17,vars:6,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Phone`,`hint`,`(###) ###-####`,`for`,`mask-phone`],[`scsc-input`,``,`id`,`mask-phone`,`type`,`tel`,`scscMask`,`(###) ###-####`,`placeholder`,`(408) 882-2100`,3,`ngModelChange`,`ngModel`],[`label`,`Case number`,`hint`,`##AA###### — two digits, two letters, six digits`,`for`,`mask-case`],[`scsc-input`,``,`id`,`mask-case`,`scscMask`,`##AA######`,`placeholder`,`24CV012345`,3,`ngModelChange`,`ngModel`],[`label`,`ZIP code`,`hint`,`#####-####`,`for`,`mask-zip`],[`scsc-input`,``,`id`,`mask-zip`,`inputmode`,`numeric`,`scscMask`,`#####-####`,`placeholder`,`95113-1090`,3,`ngModelChange`,`ngModel`],[1,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`input`,2),HS(),sD(`ngModelChange`,function(s){return Y_(t.phone,s)||(t.phone=s),s}),Lf()(),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),sD(`ngModelChange`,function(s){return Y_(t.caseNumber,s)||(t.caseNumber=s),s}),Lf()(),Ga(5,`scsc-form-field`,5)(6,`input`,6),HS(),sD(`ngModelChange`,function(s){return Y_(t.zip,s)||(t.zip=s),s}),Lf()(),Ga(7,`p`,7),G_(8,` Values: `),Ga(9,`code`),G_(10),Lf(),G_(11,` · `),Ga(12,`code`),G_(13),Lf(),G_(14,` · `),Ga(15,`code`),G_(16),Lf()()()),e&2&&(Jb(2),iD(`ngModel`,t.phone),zS(),Jb(2),iD(`ngModel`,t.caseNumber),zS(),Jb(2),iD(`ngModel`,t.zip),zS(),Jb(4),nD(t.phone()||`—`),Jb(3),nD(t.caseNumber()||`—`),Jb(3),nD(t.zip()||`—`))},dependencies:[Gue,IA,Hue,zz,Vn,qo,St],encapsulation:2})};function Q(n,r){if(n&1&&(Ga(0,`scsc-alert`,7),G_(1),Lf()),n&2){let e=y_();Jb(),rD(`We will text `,e.form.value.phone,` about `,e.form.value.caseNumber,`.`)}}var W=class n{fb=g(Wue);saved=q(!1);form=this.fb.group({caseNumber:[``,[Fs.required,Fs.pattern(/^\d{2}[A-Za-z]{2}\d{6}$/)]],phone:[``,[Fs.required,Fs.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]]});invalid(r){let e=this.form.controls[r];return e.invalid&&(e.dirty||e.touched)}errorFor(r){return this.invalid(r)?this.form.controls[r].hasError(`required`)?`This field is required.`:r===`phone`?`Enter all 10 digits.`:`Enter the full case number, e.g. 24CV012345.`:``}submit(){this.form.markAllAsTouched(),this.saved.set(this.form.valid)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-masked-input-reactive-demo`]],decls:9,vars:6,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Case number`,`hint`,`Format: 24CV012345`,`for`,`rf-case`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`rf-case`,`scscMask`,`##AA######`,`formControlName`,`caseNumber`,`placeholder`,`24CV012345`,3,`invalid`],[`label`,`Daytime phone`,`hint`,`Used for hearing reminders`,`for`,`rf-phone`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`rf-phone`,`type`,`tel`,`scscMask`,`(###) ###-####`,`formControlName`,`phone`,`placeholder`,`(408) 882-2100`,3,`invalid`],[1,`flex`,`gap-2`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Reminders on`]],template:function(e,t){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return t.submit()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),Lf()(),Ga(5,`div`,5)(6,`scsc-button`,6),G_(7,`Request reminders`),Lf()(),JT(8,Q,2,2,`scsc-alert`,7),Lf()),e&2&&(Pv(`formGroup`,t.form),Jb(),Pv(`error`,t.errorFor(`caseNumber`)),Jb(),Pv(`invalid`,t.invalid(`caseNumber`)),zS(),Jb(),Pv(`error`,t.errorFor(`phone`)),Jb(),Pv(`invalid`,t.invalid(`phone`)),zS(),Jb(4),t_(t.saved()?8:-1))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,za,sn,Vn,qo,St],encapsulation:2})};var G={"masked-input-citation":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
  Validators,
} from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput } from '@scscourt/design';
import { ScscMaskedInput } from '@scscourt/design/pickers';

/** The mask guarantees ##/##/####; this checks it is a real, past calendar date. */
function pastDate(control: AbstractControl<string>): ValidationErrors | null {
  const m = /^(\\d{2})\\/(\\d{2})\\/(\\d{4})$/.exec(control.value ?? '');
  if (!m) return null; // incomplete entries are the pattern validator's job
  const [month, day, year] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const date = new Date(year, month - 1, day);
  const real = date.getMonth() === month - 1 && date.getDate() === day && year >= 1900;
  if (!real) return { realDate: true };
  return date > new Date() ? { future: true } : null;
}

type Field = 'license' | 'birthDate';

@Component({
  selector: 'app-masked-input-citation-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput, ScscMaskedInput],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Driver's license number"
        for="citation-license"
        hint="1 letter and 7 digits, as on your license"
        required
        [error]="error('license')"
      >
        <input
          scsc-input
          id="citation-license"
          scscMask="A#######"
          formControlName="license"
          autocomplete="off"
          placeholder="D1234567"
          required
          [invalid]="!!error('license')"
          [attr.aria-invalid]="!!error('license')"
        />
      </scsc-form-field>

      <scsc-form-field
        label="Date of birth"
        for="citation-dob"
        hint="MM/DD/YYYY"
        required
        [error]="error('birthDate')"
      >
        <input
          scsc-input
          id="citation-dob"
          scscMask="##/##/####"
          inputmode="numeric"
          autocomplete="bday"
          formControlName="birthDate"
          placeholder="04/17/1986"
          required
          [invalid]="!!error('birthDate')"
          [attr.aria-invalid]="!!error('birthDate')"
        />
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">Find my traffic ticket</scsc-button>
      </div>

      @if (found()) {
        <scsc-alert status="info" title="1 open citation">{{ found() }}</scsc-alert>
      }
    </form>
  \`,
})
export class MaskedInputCitationDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly found = signal('');

  protected readonly form = this.fb.nonNullable.group({
    license: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\\d{7}$/)]],
    birthDate: ['', [Validators.required, Validators.pattern(/^\\d{2}\\/\\d{2}\\/\\d{4}$/), pastDate]],
  });

  protected error(name: Field): string {
    const c = this.form.controls[name];
    if (!(c.invalid && c.touched)) return '';
    if (c.hasError('required')) {
      return name === 'license' ? 'Enter your license number.' : 'Enter your date of birth.';
    }
    if (c.hasError('pattern')) {
      return name === 'license' ? 'Enter 1 letter and 7 digits.' : 'Enter the full date.';
    }
    return c.hasError('future') ? 'The date cannot be in the future.' : 'That date does not exist.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.found.set(
      this.form.valid ? 'Citation 26TR048211 \xB7 Speeding \xB7 Due 30 Oct 2026 \xB7 $238.00' : '',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Driver's license number"
    for="citation-license"
    hint="1 letter and 7 digits, as on your license"
    required
    [error]="error('license')"
  >
    <input
      scsc-input
      id="citation-license"
      scscMask="A#######"
      formControlName="license"
      autocomplete="off"
      placeholder="D1234567"
      required
      [invalid]="!!error('license')"
      [attr.aria-invalid]="!!error('license')"
    />
  </scsc-form-field>

  <scsc-form-field
    label="Date of birth"
    for="citation-dob"
    hint="MM/DD/YYYY"
    required
    [error]="error('birthDate')"
  >
    <input
      scsc-input
      id="citation-dob"
      scscMask="##/##/####"
      inputmode="numeric"
      autocomplete="bday"
      formControlName="birthDate"
      placeholder="04/17/1986"
      required
      [invalid]="!!error('birthDate')"
      [attr.aria-invalid]="!!error('birthDate')"
    />
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">Find my traffic ticket</scsc-button>
  </div>

  @if (found()) {
    <scsc-alert status="info" title="1 open citation">{{ found() }}</scsc-alert>
  }
</form>
`},"masked-input-masks":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField, ScscInput } from '@scscourt/design';
import { ScscMaskedInput } from '@scscourt/design/pickers';

@Component({
  selector: 'app-masked-input-masks-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscInput, ScscMaskedInput],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Phone" hint="(###) ###-####" for="mask-phone">
        <input
          scsc-input
          id="mask-phone"
          type="tel"
          scscMask="(###) ###-####"
          [(ngModel)]="phone"
          placeholder="(408) 882-2100"
        />
      </scsc-form-field>

      <scsc-form-field
        label="Case number"
        hint="##AA###### \u2014 two digits, two letters, six digits"
        for="mask-case"
      >
        <input
          scsc-input
          id="mask-case"
          scscMask="##AA######"
          [(ngModel)]="caseNumber"
          placeholder="24CV012345"
        />
      </scsc-form-field>

      <scsc-form-field label="ZIP code" hint="#####-####" for="mask-zip">
        <input
          scsc-input
          id="mask-zip"
          inputmode="numeric"
          scscMask="#####-####"
          [(ngModel)]="zip"
          placeholder="95113-1090"
        />
      </scsc-form-field>

      <p class="text-sm text-base-content/70">
        Values: <code>{{ phone() || '\u2014' }}</code> \xB7 <code>{{ caseNumber() || '\u2014' }}</code> \xB7
        <code>{{ zip() || '\u2014' }}</code>
      </p>
    </div>
  \`,
})
export class MaskedInputMasksDemo {
  protected readonly phone = signal('');
  protected readonly caseNumber = signal('');
  protected readonly zip = signal('');
}
`,html:`<div class="flex max-w-md flex-col gap-4">
  <scsc-form-field label="Phone" hint="(###) ###-####" for="mask-phone">
    <input
      scsc-input
      id="mask-phone"
      type="tel"
      scscMask="(###) ###-####"
      [(ngModel)]="phone"
      placeholder="(408) 882-2100"
    />
  </scsc-form-field>

  <scsc-form-field
    label="Case number"
    hint="##AA###### \u2014 two digits, two letters, six digits"
    for="mask-case"
  >
    <input
      scsc-input
      id="mask-case"
      scscMask="##AA######"
      [(ngModel)]="caseNumber"
      placeholder="24CV012345"
    />
  </scsc-form-field>

  <scsc-form-field label="ZIP code" hint="#####-####" for="mask-zip">
    <input
      scsc-input
      id="mask-zip"
      inputmode="numeric"
      scscMask="#####-####"
      [(ngModel)]="zip"
      placeholder="95113-1090"
    />
  </scsc-form-field>

  <p class="text-sm text-base-content/70">
    Values: <code>{{ phone() || '\u2014' }}</code> \xB7 <code>{{ caseNumber() || '\u2014' }}</code> \xB7
    <code>{{ zip() || '\u2014' }}</code>
  </p>
</div>
`},"masked-input-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput } from '@scscourt/design';
import { ScscMaskedInput } from '@scscourt/design/pickers';

@Component({
  selector: 'app-masked-input-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput, ScscMaskedInput],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Case number"
        hint="Format: 24CV012345"
        for="rf-case"
        required
        [error]="errorFor('caseNumber')"
      >
        <input
          scsc-input
          id="rf-case"
          scscMask="##AA######"
          formControlName="caseNumber"
          [invalid]="invalid('caseNumber')"
          placeholder="24CV012345"
        />
      </scsc-form-field>

      <scsc-form-field
        label="Daytime phone"
        hint="Used for hearing reminders"
        for="rf-phone"
        required
        [error]="errorFor('phone')"
      >
        <input
          scsc-input
          id="rf-phone"
          type="tel"
          scscMask="(###) ###-####"
          formControlName="phone"
          [invalid]="invalid('phone')"
          placeholder="(408) 882-2100"
        />
      </scsc-form-field>

      <div class="flex gap-2">
        <scsc-button variant="primary" nativeType="submit">Request reminders</scsc-button>
      </div>

      @if (saved()) {
        <scsc-alert status="success" title="Reminders on"
          >We will text {{ form.value.phone }} about {{ form.value.caseNumber }}.</scsc-alert
        >
      }
    </form>
  \`,
})
export class MaskedInputReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal(false);

  // The mask guarantees the shape as the user types; the pattern guarantees it is complete.
  protected readonly form = this.fb.group({
    caseNumber: ['', [Validators.required, Validators.pattern(/^\\d{2}[A-Za-z]{2}\\d{6}$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\\(\\d{3}\\) \\d{3}-\\d{4}$/)]],
  });

  protected invalid(name: 'caseNumber' | 'phone'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.dirty || c.touched);
  }

  protected errorFor(name: 'caseNumber' | 'phone'): string {
    if (!this.invalid(name)) return '';
    const c = this.form.controls[name];
    if (c.hasError('required')) return 'This field is required.';
    return name === 'phone'
      ? 'Enter all 10 digits.'
      : 'Enter the full case number, e.g. 24CV012345.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.saved.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Case number"
    hint="Format: 24CV012345"
    for="rf-case"
    required
    [error]="errorFor('caseNumber')"
  >
    <input
      scsc-input
      id="rf-case"
      scscMask="##AA######"
      formControlName="caseNumber"
      [invalid]="invalid('caseNumber')"
      placeholder="24CV012345"
    />
  </scsc-form-field>

  <scsc-form-field
    label="Daytime phone"
    hint="Used for hearing reminders"
    for="rf-phone"
    required
    [error]="errorFor('phone')"
  >
    <input
      scsc-input
      id="rf-phone"
      type="tel"
      scscMask="(###) ###-####"
      formControlName="phone"
      [invalid]="invalid('phone')"
      placeholder="(408) 882-2100"
    />
  </scsc-form-field>

  <div class="flex gap-2">
    <scsc-button variant="primary" nativeType="submit">Request reminders</scsc-button>
  </div>

  @if (saved()) {
    <scsc-alert status="success" title="Reminders on"
      >We will text {{ form.value.phone }} about {{ form.value.caseNumber }}.</scsc-alert
    >
  }
</form>
`}};var Fe={slug:`masked-input`,name:`Masked Input`,classes:[`ScscMaskedInput`],category:`Forms`,whenToUse:["Fixed-format identifiers typed by hand: phone numbers, case numbers (`##AA######`), ZIP codes, driver’s licenses (`A#######`), dates of birth (`##/##/####`). The literals are inserted for the user; they only type the characters that matter.","It is a directive on a native `<input>`, so combine it with `scsc-input` for styling and `scsc-form-field` for the label. The masked string (with literals) is what the form receives.","`#` accepts a digit and `A` a letter; letters keep the case the user typed. Pair the mask with `Validators.pattern` to reject partial entries, since the mask only shapes input, it does not require completion.","Values written by the form (an initial value, `patchValue`, `reset`) are shown masked straight away, also on an input created after the value was written (a wizard step shown again), and `disable()` disables the input.",`Editing in the middle keeps the caret where you are typing when the literals are re-inserted.`,"Not for free-form numbers or currency; use `scsc-number-input` there."],setup:`// import from the secondary entry point, not from '@scscourt/design'
import { ScscMaskedInput } from '@scscourt/design/pickers';`,demos:[{id:`masked-input-masks`,title:`Phone, case number, ZIP`,description:"Three masks with `[(ngModel)]`; type digits and watch the literals appear.",component:B,source:G[`masked-input-masks`]},{id:`masked-input-reactive`,title:`With Reactive Forms validation`,description:"The mask shapes the entry; `Validators.pattern` decides when it is complete.",component:W,source:G[`masked-input-reactive`]},{id:`masked-input-citation`,title:`Traffic ticket lookup`,description:`License and date-of-birth masks in a lookup form; a custom validator checks that the masked date is a real, past date.`,component:P,source:G[`masked-input-citation`]}],a11y:["The directive adds no markup. Inside `scsc-form-field` it wires the input like `scsc-input` does: the label points at it, and the hint, error and required state reach it (`aria-describedby`, `aria-invalid`, `aria-required`).",'State the expected format in the field `hint` ("Format: (###) ###-####"), where it is read with the input, not only in a `placeholder`.','A digits-only mask sets `inputmode="numeric"` so mobile keyboards open on numbers; an `inputmode` you write on the input wins.'],appMustProvide:['A label from `scsc-form-field`, and the expected format in its `hint` ("Format: (###) ###-####"), not only in the placeholder.'],related:[`input`,`form-field`,`number-input`,`date-picker`]};export{Fe as MASKED_INPUT_DOCS};