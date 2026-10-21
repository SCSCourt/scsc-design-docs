import{Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Ln as YA,Lo as d_,Ma as JT,Ms as uc,Na as Jb,No as cc,Nr as jo,Ps as ut,Ss as rD,Xa as Pv,Y as Fs,Zi as za,Zo as i_,_s as o_,bn as Vz,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,lr as ez,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var y={"checkbox-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscCheckbox } from '@scscourt/design';

@Component({
  selector: 'app-checkbox-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCheckbox],
  template: \`
    <div class="flex flex-col gap-3">
      <label class="flex items-center gap-2">
        <input
          type="checkbox"
          scsc-checkbox
          [checked]="certified()"
          (change)="certified.set($any($event.target).checked)"
        />
        I certify that the information above is true and correct
      </label>
      <label class="flex items-center gap-2 text-base-content/70">
        <input type="checkbox" scsc-checkbox checked disabled />
        Fee waiver granted (set by the clerk)
      </label>
      <p class="text-sm text-base-content/70" role="status">
        {{ certified() ? 'Ready to file.' : 'Certification is required before filing.' }}
      </p>
    </div>
  \`,
})
export class CheckboxBasicDemo {
  protected readonly certified = signal(false);
}
`,html:`<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2">
    <input
      type="checkbox"
      scsc-checkbox
      [checked]="certified()"
      (change)="certified.set($any($event.target).checked)"
    />
    I certify that the information above is true and correct
  </label>
  <label class="flex items-center gap-2 text-base-content/70">
    <input type="checkbox" scsc-checkbox checked disabled />
    Fee waiver granted (set by the clerk)
  </label>
  <p class="text-sm text-base-content/70" role="status">
    {{ certified() ? 'Ready to file.' : 'Certification is required before filing.' }}
  </p>
</div>
`},"checkbox-documents":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
} from '@angular/forms';
import { ScscAlert, ScscButton, ScscCheckbox } from '@scscourt/design';

/** Group validator: at least one checkbox in the group must be ticked. */
function atLeastOne(group: AbstractControl): ValidationErrors | null {
  const values = Object.values(group.value as Record<string, boolean>);
  return values.some(Boolean) ? null : { atLeastOne: true };
}

@Component({
  selector: 'app-checkbox-documents-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscCheckbox],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-lg flex-col gap-4">
      <!-- The group validator lives on the nested FormGroup; the error belongs to the fieldset. -->
      <fieldset
        formGroupName="documents"
        [attr.aria-describedby]="showError() ? 'checkbox-documents-error' : null"
      >
        <legend class="mb-2 text-sm font-medium">
          Documents in this submission <span class="text-error" aria-hidden="true">*</span>
        </legend>
        <div class="flex flex-col gap-2">
          @for (d of documents; track d.key) {
            <label class="flex items-start gap-3">
              <input type="checkbox" scsc-checkbox class="mt-0.5" [formControlName]="d.key" />
              <span>
                <span class="block">{{ d.label }}</span>
                <span class="block text-sm text-base-content/70">{{ d.form }} \xB7 {{ d.fee }}</span>
              </span>
            </label>
          }
        </div>
        @if (showError()) {
          <p id="checkbox-documents-error" class="mt-2 text-sm text-error" role="alert">
            Select at least one document to file.
          </p>
        }
      </fieldset>

      <div>
        <scsc-button variant="primary" nativeType="submit">Continue to upload</scsc-button>
      </div>

      @if (summary()) {
        <scsc-alert status="success" title="Documents selected">{{ summary() }}</scsc-alert>
      }
    </form>
  \`,
})
export class CheckboxDocumentsDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly summary = signal('');

  protected readonly documents = [
    { key: 'complaint', label: 'Complaint', form: 'PLD-C-001', fee: '$435.00 filing fee' },
    { key: 'summons', label: 'Summons', form: 'SUM-100', fee: 'No fee' },
    { key: 'coverSheet', label: 'Civil case cover sheet', form: 'CM-010', fee: 'No fee' },
    { key: 'feeWaiver', label: 'Request to waive court fees', form: 'FW-001', fee: 'No fee' },
  ] as const;

  protected readonly form = this.fb.nonNullable.group({
    documents: this.fb.nonNullable.group(
      { complaint: false, summons: false, coverSheet: false, feeWaiver: false },
      { validators: atLeastOne },
    ),
  });

  protected showError(): boolean {
    const g = this.form.controls.documents;
    return g.hasError('atLeastOne') && g.touched;
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const picked = this.documents.filter((d) => this.form.controls.documents.value[d.key]);
    this.summary.set(
      this.form.valid ? picked.map((d) => d.label).join(', ') + ' will be filed together.' : '',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-lg flex-col gap-4">
  <!-- The group validator lives on the nested FormGroup; the error belongs to the fieldset. -->
  <fieldset
    formGroupName="documents"
    [attr.aria-describedby]="showError() ? 'checkbox-documents-error' : null"
  >
    <legend class="mb-2 text-sm font-medium">
      Documents in this submission <span class="text-error" aria-hidden="true">*</span>
    </legend>
    <div class="flex flex-col gap-2">
      @for (d of documents; track d.key) {
        <label class="flex items-start gap-3">
          <input type="checkbox" scsc-checkbox class="mt-0.5" [formControlName]="d.key" />
          <span>
            <span class="block">{{ d.label }}</span>
            <span class="block text-sm text-base-content/70">{{ d.form }} \xB7 {{ d.fee }}</span>
          </span>
        </label>
      }
    </div>
    @if (showError()) {
      <p id="checkbox-documents-error" class="mt-2 text-sm text-error" role="alert">
        Select at least one document to file.
      </p>
    }
  </fieldset>

  <div>
    <scsc-button variant="primary" nativeType="submit">Continue to upload</scsc-button>
  </div>

  @if (summary()) {
    <scsc-alert status="success" title="Documents selected">{{ summary() }}</scsc-alert>
  }
</form>
`},"checkbox-group":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCheckbox } from '@scscourt/design';

interface Option {
  id: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-checkbox-group-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCheckbox],
  template: \`
    <fieldset class="max-w-md">
      <legend class="mb-2 text-sm font-medium">How should the court contact you?</legend>
      <div class="flex flex-col gap-2">
        @for (o of options; track o.id) {
          <label class="flex items-start gap-3 rounded-box border border-base-300 p-3">
            <input
              type="checkbox"
              scsc-checkbox
              class="mt-0.5"
              [checked]="selected().has(o.id)"
              (change)="toggle(o.id)"
            />
            <span>
              <span class="block font-medium">{{ o.label }}</span>
              <span class="block text-sm text-base-content/70">{{ o.description }}</span>
            </span>
          </label>
        }
      </div>
    </fieldset>
    <p class="mt-3 text-sm text-base-content/70">{{ summary() }}</p>
  \`,
})
export class CheckboxGroupDemo {
  protected readonly options: Option[] = [
    { id: 'email', label: 'Email', description: 'Hearing notices and filed documents' },
    { id: 'sms', label: 'Text message', description: 'Reminders 24 hours before a hearing' },
    { id: 'mail', label: 'Postal mail', description: 'Required for parties without email' },
  ];
  protected readonly selected = signal(new Set<string>(['email']));
  protected readonly summary = computed(() => {
    const names = this.options.filter((o) => this.selected().has(o.id)).map((o) => o.label);
    return names.length ? \`Contact by \${names.join(', ')}.\` : 'Choose at least one method.';
  });

  protected toggle(id: string): void {
    this.selected.update((set) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
}
`,html:`<fieldset class="max-w-md">
  <legend class="mb-2 text-sm font-medium">How should the court contact you?</legend>
  <div class="flex flex-col gap-2">
    @for (o of options; track o.id) {
      <label class="flex items-start gap-3 rounded-box border border-base-300 p-3">
        <input
          type="checkbox"
          scsc-checkbox
          class="mt-0.5"
          [checked]="selected().has(o.id)"
          (change)="toggle(o.id)"
        />
        <span>
          <span class="block font-medium">{{ o.label }}</span>
          <span class="block text-sm text-base-content/70">{{ o.description }}</span>
        </span>
      </label>
    }
  </div>
</fieldset>
<p class="mt-3 text-sm text-base-content/70">{{ summary() }}</p>
`},"checkbox-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscCheckbox } from '@scscourt/design';

@Component({
  selector: 'app-checkbox-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscCheckbox],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <fieldset class="flex flex-col gap-2">
        <legend class="mb-2 text-sm font-medium">Before you file</legend>
        <label class="flex items-center gap-2">
          <input type="checkbox" scsc-checkbox formControlName="served" />
          All parties have been served
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" scsc-checkbox formControlName="feePaid" />
          Filing fee paid or fee waiver on file
        </label>
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            scsc-checkbox
            formControlName="certify"
            [attr.aria-invalid]="showError()"
          />
          I declare under penalty of perjury that the foregoing is true
        </label>
        @if (showError()) {
          <p class="text-sm text-error" role="alert">You must sign the declaration to file.</p>
        }
      </fieldset>
      <div>
        <scsc-button variant="primary" nativeType="submit">File document</scsc-button>
      </div>
      @if (filed()) {
        <scsc-alert status="success" title="Filed"
          >Your document was submitted for clerk review.</scsc-alert
        >
      }
    </form>
  \`,
})
export class CheckboxReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly filed = signal(false);

  protected readonly form = this.fb.group({
    served: [false],
    feePaid: [true],
    certify: [false, Validators.requiredTrue],
  });

  protected showError(): boolean {
    const c = this.form.controls.certify;
    return c.invalid && (c.dirty || c.touched);
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.filed.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <fieldset class="flex flex-col gap-2">
    <legend class="mb-2 text-sm font-medium">Before you file</legend>
    <label class="flex items-center gap-2">
      <input type="checkbox" scsc-checkbox formControlName="served" />
      All parties have been served
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" scsc-checkbox formControlName="feePaid" />
      Filing fee paid or fee waiver on file
    </label>
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        scsc-checkbox
        formControlName="certify"
        [attr.aria-invalid]="showError()"
      />
      I declare under penalty of perjury that the foregoing is true
    </label>
    @if (showError()) {
      <p class="text-sm text-error" role="alert">You must sign the declaration to file.</p>
    }
  </fieldset>
  <div>
    <scsc-button variant="primary" nativeType="submit">File document</scsc-button>
  </div>
  @if (filed()) {
    <scsc-alert status="success" title="Filed"
      >Your document was submitted for clerk review.</scsc-alert
    >
  }
</form>
`}};var M=class a{certified=q(!1);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-checkbox-basic-demo`]],decls:9,vars:2,consts:[[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`gap-2`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[1,`flex`,`items-center`,`gap-2`,`text-base-content/70`],[`type`,`checkbox`,`scsc-checkbox`,``,`checked`,``,`disabled`,``],[`role`,`status`,1,`text-sm`,`text-base-content/70`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`label`,1)(2,`input`,2),lc(`change`,function(P){return r.certified.set(P.target.checked)}),Lf(),G_(3,` I certify that the information above is true and correct `),Lf(),Ga(4,`label`,3),uc(5,`input`,4),G_(6,` Fee waiver granted (set by the clerk) `),Lf(),Ga(7,`p`,5),G_(8),Lf()()),e&2&&(Jb(2),Pv(`checked`,r.certified()),Jb(6),$f(` `,r.certified()?`Ready to file.`:`Certification is required before filing.`,` `))},dependencies:[jo],encapsulation:2})};var Q=(a,t)=>t.key;function Z(a,t){if(a&1&&(Ga(0,`label`,5)(1,`input`,9),HS(),Lf(),Ga(2,`span`)(3,`span`,10),G_(4),Lf(),Ga(5,`span`,11),G_(6),Lf()()()),a&2){let e=t.$implicit;Jb(),Pv(`formControlName`,e.key),zS(),Jb(3),nD(e.label),Jb(2),rD(``,e.form,` · `,e.fee)}}function ee(a,t){a&1&&(Ga(0,`p`,6),G_(1,` Select at least one document to file. `),Lf())}function te(a,t){if(a&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),a&2){let e=y_();Jb(),nD(e.summary())}}function oe(a){return Object.values(a.value).some(Boolean)?null:{atLeastOne:!0}}var O=class a{fb=g(Wue);summary=q(``);documents=[{key:`complaint`,label:`Complaint`,form:`PLD-C-001`,fee:`$435.00 filing fee`},{key:`summons`,label:`Summons`,form:`SUM-100`,fee:`No fee`},{key:`coverSheet`,label:`Civil case cover sheet`,form:`CM-010`,fee:`No fee`},{key:`feeWaiver`,label:`Request to waive court fees`,form:`FW-001`,fee:`No fee`}];form=this.fb.nonNullable.group({documents:this.fb.nonNullable.group({complaint:!1,summons:!1,coverSheet:!1,feeWaiver:!1},{validators:oe})});showError(){let t=this.form.controls.documents;return t.hasError(`atLeastOne`)&&t.touched}submit(){this.form.markAllAsTouched();let t=this.documents.filter(e=>this.form.controls.documents.value[e.key]);this.summary.set(this.form.valid?t.map(e=>e.label).join(`, `)+` will be filed together.`:``)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-checkbox-documents-demo`]],decls:14,vars:4,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`formGroupName`,`documents`],[1,`mb-2`,`text-sm`,`font-medium`],[`aria-hidden`,`true`,1,`text-error`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-start`,`gap-3`],[`id`,`checkbox-documents-error`,`role`,`alert`,1,`mt-2`,`text-sm`,`text-error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Documents selected`],[`type`,`checkbox`,`scsc-checkbox`,``,1,`mt-0.5`,3,`formControlName`],[1,`block`],[1,`block`,`text-sm`,`text-base-content/70`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),Ga(1,`fieldset`,1)(2,`legend`,2),G_(3,` Documents in this submission `),Ga(4,`span`,3),G_(5,`*`),Lf()(),Ga(6,`div`,4),o_(7,Z,7,4,`label`,5,Q),Lf(),JT(9,ee,2,0,`p`,6),Lf(),Ga(10,`div`)(11,`scsc-button`,7),G_(12,`Continue to upload`),Lf()(),JT(13,te,2,1,`scsc-alert`,8),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(),cc(`aria-describedby`,r.showError()?`checkbox-documents-error`:null),Jb(6),i_(r.documents),Jb(2),t_(r.showError()?9:-1),Jb(4),t_(r.summary()?13:-1))},dependencies:[Kue,Bue,ez,Hue,que,Vz,Xz,YA,za,sn,jo],encapsulation:2})};var se=(a,t)=>t.id;function ae(a,t){if(a&1){let e=d_();Ga(0,`label`,3)(1,`input`,5),lc(`change`,function(){let k=Eg(e).$implicit,P=y_();return Ig(P.toggle(k.id))}),Lf(),Ga(2,`span`)(3,`span`,6),G_(4),Lf(),Ga(5,`span`,7),G_(6),Lf()()()}if(a&2){let e=t.$implicit,r=y_();Jb(),Pv(`checked`,r.selected().has(e.id)),Jb(3),nD(e.label),Jb(2),nD(e.description)}}var j=class a{options=[{id:`email`,label:`Email`,description:`Hearing notices and filed documents`},{id:`sms`,label:`Text message`,description:`Reminders 24 hours before a hearing`},{id:`mail`,label:`Postal mail`,description:`Required for parties without email`}];selected=q(new Set([`email`]));summary=ut(()=>{let t=this.options.filter(e=>this.selected().has(e.id)).map(e=>e.label);return t.length?`Contact by ${t.join(`, `)}.`:`Choose at least one method.`});toggle(t){this.selected.update(e=>{let r=new Set(e);return r.has(t)?r.delete(t):r.add(t),r})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-checkbox-group-demo`]],decls:8,vars:1,consts:[[1,`max-w-md`],[1,`mb-2`,`text-sm`,`font-medium`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-start`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`p-3`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`type`,`checkbox`,`scsc-checkbox`,``,1,`mt-0.5`,3,`change`,`checked`],[1,`block`,`font-medium`],[1,`block`,`text-sm`,`text-base-content/70`]],template:function(e,r){e&1&&(Ga(0,`fieldset`,0)(1,`legend`,1),G_(2,`How should the court contact you?`),Lf(),Ga(3,`div`,2),o_(4,ae,7,3,`label`,3,se),Lf()(),Ga(6,`p`,4),G_(7),Lf()),e&2&&(Jb(4),i_(r.options),Jb(3),nD(r.summary()))},dependencies:[jo],encapsulation:2})};function re(a,t){a&1&&(Ga(0,`p`,7),G_(1,`You must sign the declaration to file.`),Lf())}function ie(a,t){a&1&&(Ga(0,`scsc-alert`,9),G_(1,`Your document was submitted for clerk review.`),Lf())}var I=class a{fb=g(Wue);filed=q(!1);form=this.fb.group({served:[!1],feePaid:[!0],certify:[!1,Fs.requiredTrue]});showError(){let t=this.form.controls.certify;return t.invalid&&(t.dirty||t.touched)}submit(){this.form.markAllAsTouched(),this.filed.set(this.form.valid)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-checkbox-reactive-demo`]],decls:18,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`flex`,`flex-col`,`gap-2`],[1,`mb-2`,`text-sm`,`font-medium`],[1,`flex`,`items-center`,`gap-2`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`served`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`feePaid`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`certify`],[`role`,`alert`,1,`text-sm`,`text-error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Filed`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),Ga(1,`fieldset`,1)(2,`legend`,2),G_(3,`Before you file`),Lf(),Ga(4,`label`,3)(5,`input`,4),HS(),Lf(),G_(6,` All parties have been served `),Lf(),Ga(7,`label`,3)(8,`input`,5),HS(),Lf(),G_(9,` Filing fee paid or fee waiver on file `),Lf(),Ga(10,`label`,3)(11,`input`,6),HS(),Lf(),G_(12,` I declare under penalty of perjury that the foregoing is true `),Lf(),JT(13,re,2,0,`p`,7),Lf(),Ga(14,`div`)(15,`scsc-button`,8),G_(16,`File document`),Lf()(),JT(17,ie,2,0,`scsc-alert`,9),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(5),zS(),Jb(3),zS(),Jb(3),cc(`aria-invalid`,r.showError()),zS(),Jb(2),t_(r.showError()?13:-1),Jb(4),t_(r.filed()?17:-1))},dependencies:[Kue,Bue,ez,Hue,que,Vz,Xz,za,sn,jo],encapsulation:2})};var Me={slug:`checkbox`,name:`Checkbox`,classes:[`ScscCheckbox`],category:`Forms`,whenToUse:[`Independent yes/no choices that are submitted with a form: certifications, "also send by mail", multi-pick lists.`,'A directive on the native `<input type="checkbox">`, so `formControlName`, `ngModel`, `[checked]` and `(change)` work unchanged.',"For a setting that applies immediately (no Save button) use `scsc-switch`; for a single choice from several use `scsc-radio`.",'`Validators.requiredTrue` is the right validator for a must-accept box; `Validators.required` passes on `false`. For "pick at least one", put a group validator on a nested `FormGroup` of booleans.'],demos:[{id:`checkbox-basic`,title:`Basic`,description:"Wrapped in a `<label>`; a signal tracks the state. Disabled checked shows a clerk-set value.",component:M,source:y[`checkbox-basic`]},{id:`checkbox-group`,title:`Group with fieldset`,description:"A `<fieldset>` + `<legend>` names the group; each option has a label and description.",component:j,source:y[`checkbox-group`]},{id:`checkbox-reactive`,title:`With Reactive Forms`,description:"`formControlName` on each box; `requiredTrue` gates submission and shows an inline error.",component:I,source:y[`checkbox-reactive`]},{id:`checkbox-documents`,title:`In a filing form`,description:"The documents in an e-filing submission: a nested `FormGroup` of booleans with an at-least-one validator, and the error on the fieldset.",component:O,source:y[`checkbox-documents`]}],a11y:["Wrap the input in a `<label>` (or use `for`/`id`) so the text is part of the click target and the accessible name.","Group related checkboxes in a `<fieldset>` with a `<legend>` that states the question; screen readers announce the legend with each box.","Use `scsc-fieldset` for the group: its `error` is part of the group description (`aria-describedby`), so it is read with the group. Errors are not announced on their own; a rejected submit shows `scsc-error-summary`.","The primary-coloured check has sufficient contrast on `base-100`; do not lighten it with `class`."],appMustProvide:["A `<label>` for each box, and for a group an `scsc-fieldset` whose legend asks the question."],related:[`switch`,`radio`,`form-field`,`multi-select`]};export{Me as CHECKBOX_DOCS};