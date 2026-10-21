import{Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Lo as d_,Ma as JT,Na as Jb,No as cc,Vi as y2e,Xa as Pv,Y as Fs,Zi as za,Zn as bA,Zo as i_,_i as tN,_s as o_,bn as Vz,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,l as $ue,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,tt as Hue,u as $z,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var Z=(i,o)=>o.value;function ee(i,o){if(i&1){let e=d_();Ga(0,`label`,3)(1,`input`,5),lc(`change`,function(){let P=Eg(e).$implicit,X=y_();return Ig(X.priority.set(P.value))}),Lf(),Ga(2,`span`)(3,`span`,6),G_(4),Lf(),Ga(5,`span`,7),G_(6),Lf()()()}if(i&2){let e=o.$implicit,s=y_();Jb(),Pv(`value`,e.value)(`checked`,s.priority()===e.value),Jb(3),nD(e.label),Jb(2),nD(e.description)}}var T=class i{options=[{value:`standard`,label:`Standard`,description:`Processed within 5 business days`},{value:`expedited`,label:`Expedited`,description:`Next business day; additional $40 fee`},{value:`ex-parte`,label:`Ex parte`,description:`Same day; requires notice to all parties`}];priority=q$1(`standard`);fee(){return{standard:`$435`,expedited:`$475`,"ex-parte":`$495`}[this.priority()]}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-radio-group-demo`]],decls:10,vars:1,consts:[[1,`max-w-md`],[1,`mb-2`,`text-sm`,`font-medium`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-start`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`p-3`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`type`,`radio`,`scsc-radio`,``,`name`,`priority`,1,`mt-0.5`,3,`change`,`value`,`checked`],[1,`block`,`font-medium`],[1,`block`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`fieldset`,0)(1,`legend`,1),G_(2,`Filing priority`),Lf(),Ga(3,`div`,2),o_(4,ee,7,4,`label`,3,Z),Lf()(),Ga(6,`p`,4),G_(7,` Fee: `),Ga(8,`strong`),G_(9),Lf()()),e&2&&(Jb(4),i_(s.options),Jb(5),nD(s.fee()))},dependencies:[bA],encapsulation:2})};function re(i,o){i&1&&(Ga(0,`p`,7),G_(1,` Answer yes or no. `),Lf())}function oe(i,o){if(i&1&&(Ga(0,`option`,13),G_(1),Lf()),i&2){let e=o.$implicit;Pv(`value`,e),Jb(),nD(e)}}function ae(i,o){if(i&1&&(Ga(0,`scsc-form-field`,8)(1,`select`,11),HS(),Ga(2,`option`,12),G_(3,`Choose a language…`),Lf(),o_(4,oe,2,2,`option`,13,r_),Lf()()),i&2){let e=y_();Pv(`error`,e.languageError()),Jb(),Pv(`invalid`,!!e.languageError()),cc(`aria-invalid`,!!e.languageError()),zS(),Jb(3),i_(e.languages)}}function ie(i,o){if(i&1&&(Ga(0,`scsc-alert`,10),G_(1),Lf()),i&2){let e=y_();Jb(),nD(e.saved())}}var M=class i{fb=g(Wue);saved=q$1(``);languages=[`Spanish`,`Vietnamese`,`Mandarin`,`Cantonese`,`Tagalog`,`Punjabi`,`Korean`];form=this.fb.nonNullable.group({needsInterpreter:[``,Fs.required],language:[{value:``,disabled:!0},Fs.required]});constructor(){this.form.controls.needsInterpreter.valueChanges.pipe(y2e()).subscribe(o=>{let e=this.form.controls.language;o===`yes`?e.enable():e.disable()})}needError(){let o=this.form.controls.needsInterpreter;return o.invalid&&o.touched}languageError(){let o=this.form.controls.language;return o.invalid&&o.touched?`Choose the language you will need.`:``}submit(){if(this.form.markAllAsTouched(),this.form.invalid){this.saved.set(``);return}let{language:o}=this.form.getRawValue();this.saved.set(this.form.controls.language.enabled?`A `+o+` interpreter will be requested for your hearing.`:`No interpreter requested.`)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-radio-interpreter-demo`]],decls:19,vars:5,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`mb-2`,`text-sm`,`font-medium`],[`aria-hidden`,`true`,1,`text-error`],[1,`flex`,`gap-6`],[1,`flex`,`items-center`,`gap-2`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`needsInterpreter`,`value`,`yes`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`needsInterpreter`,`value`,`no`],[`id`,`radio-interpreter-error`,`role`,`alert`,1,`mt-2`,`text-sm`,`text-error`],[`label`,`Language`,`for`,`radio-interpreter-language`,`hint`,`Interpreters are provided at no cost`,`required`,``,3,`error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Saved`],[`scsc-select`,``,`id`,`radio-interpreter-language`,`formControlName`,`language`,3,`invalid`],[`value`,``,`disabled`,``],[3,`value`]],template:function(e,s){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return s.submit()}),Ga(1,`fieldset`)(2,`legend`,1),G_(3,` Do you need a court interpreter at the hearing? `),Ga(4,`span`,2),G_(5,`*`),Lf()(),Ga(6,`div`,3)(7,`label`,4)(8,`input`,5),HS(),Lf(),G_(9,` Yes `),Lf(),Ga(10,`label`,4)(11,`input`,6),HS(),Lf(),G_(12,` No `),Lf()(),JT(13,re,2,0,`p`,7),Lf(),JT(14,ae,6,3,`scsc-form-field`,8),Ga(15,`div`)(16,`scsc-button`,9),G_(17,`Save and continue`),Lf()(),JT(18,ie,2,1,`scsc-alert`,10),Lf()),e&2&&(Pv(`formGroup`,s.form),Jb(),cc(`aria-describedby`,s.needError()?`radio-interpreter-error`:null),Jb(7),zS(),Jb(3),zS(),Jb(2),t_(s.needError()?13:-1),Jb(),t_(s.form.controls.language.enabled?14:-1),Jb(4),t_(s.saved()?18:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,$z,Hue,que,Vz,Xz,za,sn,Vn,bA,On],encapsulation:2})};function ne(i,o){i&1&&(Ga(0,`p`,8),G_(1,`Select how the documents were served.`),Lf())}var V=class i{fb=g(Wue);form=this.fb.group({service:[``,Fs.required]});showError(){let o=this.form.controls.service;return o.invalid&&(o.dirty||o.touched)}submit(){this.form.markAllAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-radio-reactive-demo`]],decls:24,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`mb-2`,`text-sm`,`font-medium`],[`aria-hidden`,`true`,1,`text-error`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-center`,`gap-2`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`service`,`value`,`personal`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`service`,`value`,`mail`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`service`,`value`,`electronic`],[`role`,`alert`,1,`mt-2`,`text-sm`,`text-error`],[1,`flex`,`items-center`,`gap-3`],[`variant`,`primary`,`nativeType`,`submit`],[1,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return s.submit()}),Ga(1,`fieldset`)(2,`legend`,1),G_(3,` Method of service `),Ga(4,`span`,2),G_(5,`*`),Lf()(),Ga(6,`div`,3)(7,`label`,4)(8,`input`,5),HS(),Lf(),G_(9,` Personal service `),Lf(),Ga(10,`label`,4)(11,`input`,6),HS(),Lf(),G_(12,` Mail `),Lf(),Ga(13,`label`,4)(14,`input`,7),HS(),Lf(),G_(15,` Electronic service `),Lf()(),JT(16,ne,2,0,`p`,8),Lf(),Ga(17,`div`,9)(18,`scsc-button`,10),G_(19,`Continue`),Lf(),Ga(20,`span`,11),G_(21,`Value: `),Ga(22,`code`),G_(23),Lf()()()()),e&2&&(Pv(`formGroup`,s.form),Jb(8),zS(),Jb(3),zS(),Jb(3),zS(),Jb(2),t_(s.showError()?16:-1),Jb(7),nD(s.form.value.service||`—`))},dependencies:[Kue,Bue,IA,$z,Hue,que,Vz,Xz,sn,bA],encapsulation:2})};var q={"radio-group":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscRadio } from '@scscourt/design';

type Priority = 'standard' | 'expedited' | 'ex-parte';

@Component({
  selector: 'app-radio-group-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscRadio],
  template: \`
    <fieldset class="max-w-md">
      <legend class="mb-2 text-sm font-medium">Filing priority</legend>
      <div class="flex flex-col gap-2">
        @for (o of options; track o.value) {
          <label class="flex items-start gap-3 rounded-box border border-base-300 p-3">
            <input
              type="radio"
              scsc-radio
              name="priority"
              class="mt-0.5"
              [value]="o.value"
              [checked]="priority() === o.value"
              (change)="priority.set(o.value)"
            />
            <span>
              <span class="block font-medium">{{ o.label }}</span>
              <span class="block text-sm text-base-content/70">{{ o.description }}</span>
            </span>
          </label>
        }
      </div>
    </fieldset>
    <p class="mt-3 text-sm text-base-content/70">
      Fee: <strong>{{ fee() }}</strong>
    </p>
  \`,
})
export class RadioGroupDemo {
  protected readonly options: { value: Priority; label: string; description: string }[] = [
    { value: 'standard', label: 'Standard', description: 'Processed within 5 business days' },
    {
      value: 'expedited',
      label: 'Expedited',
      description: 'Next business day; additional $40 fee',
    },
    {
      value: 'ex-parte',
      label: 'Ex parte',
      description: 'Same day; requires notice to all parties',
    },
  ];
  protected readonly priority = signal<Priority>('standard');

  protected fee(): string {
    return { standard: '$435', expedited: '$475', 'ex-parte': '$495' }[this.priority()];
  }
}
`,html:`<fieldset class="max-w-md">
  <legend class="mb-2 text-sm font-medium">Filing priority</legend>
  <div class="flex flex-col gap-2">
    @for (o of options; track o.value) {
      <label class="flex items-start gap-3 rounded-box border border-base-300 p-3">
        <input
          type="radio"
          scsc-radio
          name="priority"
          class="mt-0.5"
          [value]="o.value"
          [checked]="priority() === o.value"
          (change)="priority.set(o.value)"
        />
        <span>
          <span class="block font-medium">{{ o.label }}</span>
          <span class="block text-sm text-base-content/70">{{ o.description }}</span>
        </span>
      </label>
    }
  </div>
</fieldset>
<p class="mt-3 text-sm text-base-content/70">
  Fee: <strong>{{ fee() }}</strong>
</p>
`},"radio-interpreter":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscRadio, ScscSelect } from '@scscourt/design';

@Component({
  selector: 'app-radio-interpreter-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscRadio, ScscSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <fieldset [attr.aria-describedby]="needError() ? 'radio-interpreter-error' : null">
        <legend class="mb-2 text-sm font-medium">
          Do you need a court interpreter at the hearing?
          <span class="text-error" aria-hidden="true">*</span>
        </legend>
        <!-- A yes/no question reads best with the two options side by side. -->
        <div class="flex gap-6">
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="needsInterpreter" value="yes" /> Yes
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="needsInterpreter" value="no" /> No
          </label>
        </div>
        @if (needError()) {
          <p id="radio-interpreter-error" class="mt-2 text-sm text-error" role="alert">
            Answer yes or no.
          </p>
        }
      </fieldset>

      @if (form.controls.language.enabled) {
        <scsc-form-field
          label="Language"
          for="radio-interpreter-language"
          hint="Interpreters are provided at no cost"
          required
          [error]="languageError()"
        >
          <select
            scsc-select
            id="radio-interpreter-language"
            formControlName="language"
            [invalid]="!!languageError()"
            [attr.aria-invalid]="!!languageError()"
          >
            <option value="" disabled>Choose a language\u2026</option>
            @for (l of languages; track l) {
              <option [value]="l">{{ l }}</option>
            }
          </select>
        </scsc-form-field>
      }

      <div>
        <scsc-button variant="primary" nativeType="submit">Save and continue</scsc-button>
      </div>

      @if (saved()) {
        <scsc-alert status="success" title="Saved">{{ saved() }}</scsc-alert>
      }
    </form>
  \`,
})
export class RadioInterpreterDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal('');
  protected readonly languages = [
    'Spanish',
    'Vietnamese',
    'Mandarin',
    'Cantonese',
    'Tagalog',
    'Punjabi',
    'Korean',
  ];

  protected readonly form = this.fb.nonNullable.group({
    needsInterpreter: ['', Validators.required],
    // Disabled controls are skipped by validation, so "No" leaves the form valid.
    language: [{ value: '', disabled: true }, Validators.required],
  });

  constructor() {
    this.form.controls.needsInterpreter.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((answer) => {
        const language = this.form.controls.language;
        if (answer === 'yes') language.enable();
        else language.disable();
      });
  }

  protected needError(): boolean {
    const c = this.form.controls.needsInterpreter;
    return c.invalid && c.touched;
  }

  protected languageError(): string {
    const c = this.form.controls.language;
    return c.invalid && c.touched ? 'Choose the language you will need.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.saved.set('');
      return;
    }
    const { language } = this.form.getRawValue();
    this.saved.set(
      this.form.controls.language.enabled
        ? 'A ' + language + ' interpreter will be requested for your hearing.'
        : 'No interpreter requested.',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <fieldset [attr.aria-describedby]="needError() ? 'radio-interpreter-error' : null">
    <legend class="mb-2 text-sm font-medium">
      Do you need a court interpreter at the hearing?
      <span class="text-error" aria-hidden="true">*</span>
    </legend>
    <!-- A yes/no question reads best with the two options side by side. -->
    <div class="flex gap-6">
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="needsInterpreter" value="yes" /> Yes
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="needsInterpreter" value="no" /> No
      </label>
    </div>
    @if (needError()) {
      <p id="radio-interpreter-error" class="mt-2 text-sm text-error" role="alert">
        Answer yes or no.
      </p>
    }
  </fieldset>

  @if (form.controls.language.enabled) {
    <scsc-form-field
      label="Language"
      for="radio-interpreter-language"
      hint="Interpreters are provided at no cost"
      required
      [error]="languageError()"
    >
      <select
        scsc-select
        id="radio-interpreter-language"
        formControlName="language"
        [invalid]="!!languageError()"
        [attr.aria-invalid]="!!languageError()"
      >
        <option value="" disabled>Choose a language\u2026</option>
        @for (l of languages; track l) {
          <option [value]="l">{{ l }}</option>
        }
      </select>
    </scsc-form-field>
  }

  <div>
    <scsc-button variant="primary" nativeType="submit">Save and continue</scsc-button>
  </div>

  @if (saved()) {
    <scsc-alert status="success" title="Saved">{{ saved() }}</scsc-alert>
  }
</form>
`},"radio-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscRadio } from '@scscourt/design';

@Component({
  selector: 'app-radio-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscRadio],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <fieldset>
        <legend class="mb-2 text-sm font-medium">
          Method of service <span class="text-error" aria-hidden="true">*</span>
        </legend>
        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="service" value="personal" /> Personal
            service
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="service" value="mail" /> Mail
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="service" value="electronic" />
            Electronic service
          </label>
        </div>
        @if (showError()) {
          <p class="mt-2 text-sm text-error" role="alert">Select how the documents were served.</p>
        }
      </fieldset>
      <div class="flex items-center gap-3">
        <scsc-button variant="primary" nativeType="submit">Continue</scsc-button>
        <span class="text-sm text-base-content/70"
          >Value: <code>{{ form.value.service || '\u2014' }}</code></span
        >
      </div>
    </form>
  \`,
})
export class RadioReactiveDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    service: ['', Validators.required],
  });

  protected showError(): boolean {
    const c = this.form.controls.service;
    return c.invalid && (c.dirty || c.touched);
  }

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <fieldset>
    <legend class="mb-2 text-sm font-medium">
      Method of service <span class="text-error" aria-hidden="true">*</span>
    </legend>
    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="service" value="personal" /> Personal
        service
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="service" value="mail" /> Mail
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="service" value="electronic" />
        Electronic service
      </label>
    </div>
    @if (showError()) {
      <p class="mt-2 text-sm text-error" role="alert">Select how the documents were served.</p>
    }
  </fieldset>
  <div class="flex items-center gap-3">
    <scsc-button variant="primary" nativeType="submit">Continue</scsc-button>
    <span class="text-sm text-base-content/70"
      >Value: <code>{{ form.value.service || '\u2014' }}</code></span
    >
  </div>
</form>
`}};var Fe={slug:`radio`,name:`Radio`,classes:[`ScscRadio`],category:`Forms`,whenToUse:[`Exactly one choice from 2–5 options that should all be visible, especially when each needs a short description (filing priority, method of service).`,'A directive on the native `<input type="radio">`; radios sharing a `name` or a `formControlName` form one group automatically.',"More than ~5 options, or options that vary, belong in `scsc-select` or `scsc-combobox`. Independent yes/no choices are `scsc-checkbox`.","Preselect a sensible default when one exists; leave the group empty and validate with `Validators.required` when the choice is consequential.",`A yes/no question that reveals a follow-up field is a radio pair; enable the follow-up control only on "Yes" so its validators do not block "No".`],demos:[{id:`radio-group`,title:`Group with descriptions`,description:"A `<fieldset>`/`<legend>` group; `[checked]` and `(change)` keep a signal in sync.",component:T,source:q[`radio-group`]},{id:`radio-reactive`,title:`With Reactive Forms`,description:"`formControlName` plus `value` on each radio; the error appears after submit.",component:V,source:q[`radio-reactive`]},{id:`radio-interpreter`,title:`Yes / No with a follow-up`,description:`An interpreter request from a hearing form: "Yes" enables a required language select; "No" leaves it disabled and out of validation.`,component:M,source:q[`radio-interpreter`]}],a11y:["Wrap each radio in a `<label>` and the group in a `<fieldset>` with a `<legend>` that asks the question.",`Arrow keys move selection within a group and Tab leaves it: native behaviour, nothing to add.`,"Use `scsc-fieldset` for the group: its `error` is part of the group description (`aria-describedby`), as ARIA does not allow `aria-invalid` on a group. A rejected submit shows `scsc-error-summary`.",`A follow-up field that appears after the choice comes next in the DOM, so it is the next thing keyboard and screen-reader users reach.`],appMustProvide:["A `<label>` for each radio, and an `scsc-fieldset` whose legend asks the question."],related:[`checkbox`,`select`,`button-group`,`switch`]};export{Fe as RADIO_DOCS};