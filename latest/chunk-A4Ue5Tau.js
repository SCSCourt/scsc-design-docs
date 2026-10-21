import{Ai as vA,Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Ms as uc,Na as Jb,No as cc,Nr as jo,Xa as Pv,Y as Fs,Zi as za,_i as tN,bn as Vz,cs as lc,ds as nD,ks as t_,kt as NE,l as $ue,lr as ez,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var q=class s{static ɵfac=function(i){return new(i||s)};static ɵcmp=Af({type:s,selectors:[[`app-textarea-basic-demo`]],decls:8,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Hearing notes`,`hint`,`Visible to the courtroom clerk only`,`for`,`notes`],[`scsc-textarea`,``,`id`,`notes`,`rows`,`3`,`placeholder`,`Continuance requested by plaintiff…`],[`label`,`Reason for request`,`for`,`reason`,`required`,``,`error`,`A reason is required.`],[`scsc-textarea`,``,`id`,`reason`,`rows`,`2`,`aria-invalid`,`true`,3,`invalid`],[`label`,`Clerk's minute order`,`for`,`minutes`],[`scsc-textarea`,``,`id`,`minutes`,`rows`,`2`,`disabled`,``]],template:function(i,t){i&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1),uc(2,`textarea`,2),Lf(),Ga(3,`scsc-form-field`,3),uc(4,`textarea`,4),Lf(),Ga(5,`scsc-form-field`,5)(6,`textarea`,6),G_(7,`Matter continued to 10/14/2026 at 9:00 AM in Department 7.`),Lf()()()),i&2&&(Jb(4),Pv(`invalid`,!0))},dependencies:[Vn,vA],encapsulation:2})};function $(s,e){if(s&1&&(Ga(0,`p`,13),G_(1),Lf()),s&2){let i=y_();Jb(),nD(i.notifiedError())}}function X(s,e){s&1&&(Ga(0,`scsc-alert`,15),G_(1,` The judge will rule on your request before the hearing. You will be notified by email. `),Lf())}var F=class s{fb=g(Wue);limit=1e3;sent=q$1(!1);form=this.fb.nonNullable.group({reason:[``,Fs.required],details:[``,[Fs.required,Fs.minLength(40),Fs.maxLength(this.limit)]],notified:[!1,Fs.requiredTrue]});remaining(){return this.limit-this.form.controls.details.value.length}reasonError(){let e=this.form.controls.reason;return e.invalid&&e.touched?`Choose the reason for the request.`:``}detailsError(){let e=this.form.controls.details;return e.invalid&&e.touched?e.hasError(`required`)?`Explain why the hearing needs a new date.`:`Give the judge a little more detail (at least 40 characters).`:``}notifiedError(){let e=this.form.controls.notified;return e.invalid&&e.touched?`Tell the other parties before you submit.`:``}submit(){this.form.markAllAsTouched(),this.sent.set(this.form.valid)}static ɵfac=function(i){return new(i||s)};static ɵcmp=Af({type:s,selectors:[[`app-textarea-continuance-demo`]],decls:25,vars:12,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[`label`,`Reason for the request`,`for`,`textarea-continuance-reason`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`textarea-continuance-reason`,`formControlName`,`reason`,3,`invalid`],[`value`,``,`disabled`,``],[`value`,`conflict`],[`value`,`illness`],[`value`,`discovery`],[`value`,`other`],[`label`,`Explain why a new date is needed`,`for`,`textarea-continuance-details`,`required`,``,3,`hint`,`error`],[`scsc-textarea`,``,`id`,`textarea-continuance-details`,`rows`,`5`,`formControlName`,`details`,3,`invalid`],[1,`flex`,`items-start`,`gap-2`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`notified`,1,`mt-0.5`],[`role`,`alert`,1,`-mt-2`,`text-sm`,`text-error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Request submitted`]],template:function(i,t){i&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return t.submit()}),Ga(1,`scsc-text`,1),G_(2,` Motion to compel · 24CV012345 · 14 Oct 2026, 9:00 AM · Dept. 6 `),Lf(),Ga(3,`scsc-form-field`,2)(4,`select`,3),HS(),Ga(5,`option`,4),G_(6,`Select a reason…`),Lf(),Ga(7,`option`,5),G_(8,`Attorney has a conflicting trial`),Lf(),Ga(9,`option`,6),G_(10,`Illness or medical emergency`),Lf(),Ga(11,`option`,7),G_(12,`Discovery is not complete`),Lf(),Ga(13,`option`,8),G_(14,`Other`),Lf()()(),Ga(15,`scsc-form-field`,9)(16,`textarea`,10),HS(),Lf()(),Ga(17,`label`,11)(18,`input`,12),HS(),Lf(),G_(19,` I have told all other parties that I am asking for a new date `),Lf(),JT(20,$,2,1,`p`,13),Ga(21,`div`)(22,`scsc-button`,14),G_(23,`Submit request`),Lf()(),JT(24,X,2,0,`scsc-alert`,15),Lf()),i&2&&(Pv(`formGroup`,t.form),Jb(3),Pv(`error`,t.reasonError()),Jb(),Pv(`invalid`,!!t.reasonError()),cc(`aria-invalid`,!!t.reasonError()),zS(),Jb(11),Pv(`hint`,t.remaining()+` of `+t.limit+` characters left`)(`error`,t.detailsError()),Jb(),Pv(`invalid`,!!t.detailsError()),cc(`maxlength`,t.limit)(`aria-invalid`,!!t.detailsError()),zS(),Jb(2),cc(`aria-invalid`,!!t.notifiedError()),zS(),Jb(2),t_(t.notifiedError()?20:-1),Jb(4),t_(t.sent()?24:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,ez,tN,Hue,que,Vz,Xz,za,sn,jo,Vn,On,NE,vA],encapsulation:2})};var N=class s{fb=g(Wue);limit=500;form=this.fb.group({facts:[``,[Fs.required,Fs.minLength(20),Fs.maxLength(this.limit)]]});remaining(){return this.limit-(this.form.controls.facts.value?.length??0)}error(){let e=this.form.controls.facts;return e.invalid&&(e.dirty||e.touched)?e.hasError(`required`)?`Describe the facts supporting your request.`:e.hasError(`minlength`)?`Give at least 20 characters.`:`Keep it under ${this.limit} characters.`:``}submit(){this.form.markAllAsTouched()}static ɵfac=function(i){return new(i||s)};static ɵcmp=Af({type:s,selectors:[[`app-textarea-reactive-demo`]],decls:6,vars:6,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Statement of facts`,`for`,`facts`,`required`,``,3,`hint`,`error`],[`scsc-textarea`,``,`id`,`facts`,`rows`,`4`,`formControlName`,`facts`,3,`invalid`],[`variant`,`primary`,`nativeType`,`submit`]],template:function(i,t){i&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return t.submit()}),Ga(1,`scsc-form-field`,1)(2,`textarea`,2),HS(),Lf()(),Ga(3,`div`)(4,`scsc-button`,3),G_(5,`Save statement`),Lf()()()),i&2&&(Pv(`formGroup`,t.form),Jb(),Pv(`hint`,t.remaining()+` characters remaining`)(`error`,t.error()),Jb(),Pv(`invalid`,!!t.error()),cc(`maxlength`,t.limit)(`aria-invalid`,!!t.error()),zS())},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,sn,Vn,vA],encapsulation:2})};var A={"textarea-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscFormField, ScscTextarea } from '@scscourt/design';

@Component({
  selector: 'app-textarea-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscTextarea],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Hearing notes" hint="Visible to the courtroom clerk only" for="notes">
        <textarea
          scsc-textarea
          id="notes"
          rows="3"
          placeholder="Continuance requested by plaintiff\u2026"
        ></textarea>
      </scsc-form-field>

      <scsc-form-field
        label="Reason for request"
        for="reason"
        required
        error="A reason is required."
      >
        <textarea
          scsc-textarea
          id="reason"
          rows="2"
          [invalid]="true"
          aria-invalid="true"
        ></textarea>
      </scsc-form-field>

      <scsc-form-field label="Clerk's minute order" for="minutes">
        <textarea scsc-textarea id="minutes" rows="2" disabled>
Matter continued to 10/14/2026 at 9:00 AM in Department 7.</textarea
        >
      </scsc-form-field>
    </div>
  \`,
})
export class TextareaBasicDemo {}
`,html:`    <div class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Hearing notes" hint="Visible to the courtroom clerk only" for="notes">
        <textarea
          scsc-textarea
          id="notes"
          rows="3"
          placeholder="Continuance requested by plaintiff\u2026"
        ></textarea>
      </scsc-form-field>

      <scsc-form-field
        label="Reason for request"
        for="reason"
        required
        error="A reason is required."
      >
        <textarea
          scsc-textarea
          id="reason"
          rows="2"
          [invalid]="true"
          aria-invalid="true"
        ></textarea>
      </scsc-form-field>

      <scsc-form-field label="Clerk's minute order" for="minutes">
        <textarea scsc-textarea id="minutes" rows="2" disabled>
Matter continued to 10/14/2026 at 9:00 AM in Department 7.</textarea
        >
      </scsc-form-field>
    </div>
`},"textarea-continuance":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscCheckbox,
  ScscFormField,
  ScscSelect,
  ScscText,
  ScscTextarea,
} from '@scscourt/design';

@Component({
  selector: 'app-textarea-continuance-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscCheckbox,
    ScscFormField,
    ScscSelect,
    ScscText,
    ScscTextarea,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-lg flex-col gap-4">
      <scsc-text size="sm" tone="muted" tnum>
        Motion to compel \xB7 24CV012345 \xB7 14 Oct 2026, 9:00 AM \xB7 Dept. 6
      </scsc-text>

      <scsc-form-field
        label="Reason for the request"
        for="textarea-continuance-reason"
        required
        [error]="reasonError()"
      >
        <select
          scsc-select
          id="textarea-continuance-reason"
          formControlName="reason"
          [invalid]="!!reasonError()"
          [attr.aria-invalid]="!!reasonError()"
        >
          <option value="" disabled>Select a reason\u2026</option>
          <option value="conflict">Attorney has a conflicting trial</option>
          <option value="illness">Illness or medical emergency</option>
          <option value="discovery">Discovery is not complete</option>
          <option value="other">Other</option>
        </select>
      </scsc-form-field>

      <scsc-form-field
        label="Explain why a new date is needed"
        for="textarea-continuance-details"
        [hint]="remaining() + ' of ' + limit + ' characters left'"
        required
        [error]="detailsError()"
      >
        <textarea
          scsc-textarea
          id="textarea-continuance-details"
          rows="5"
          formControlName="details"
          [attr.maxlength]="limit"
          [invalid]="!!detailsError()"
          [attr.aria-invalid]="!!detailsError()"
        ></textarea>
      </scsc-form-field>

      <label class="flex items-start gap-2">
        <input
          type="checkbox"
          scsc-checkbox
          class="mt-0.5"
          formControlName="notified"
          [attr.aria-invalid]="!!notifiedError()"
        />
        I have told all other parties that I am asking for a new date
      </label>
      @if (notifiedError()) {
        <p class="-mt-2 text-sm text-error" role="alert">{{ notifiedError() }}</p>
      }

      <div>
        <scsc-button variant="primary" nativeType="submit">Submit request</scsc-button>
      </div>

      @if (sent()) {
        <scsc-alert status="success" title="Request submitted">
          The judge will rule on your request before the hearing. You will be notified by email.
        </scsc-alert>
      }
    </form>
  \`,
})
export class TextareaContinuanceDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly limit = 1000;
  protected readonly sent = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    reason: ['', Validators.required],
    details: [
      '',
      [Validators.required, Validators.minLength(40), Validators.maxLength(this.limit)],
    ],
    notified: [false, Validators.requiredTrue],
  });

  protected remaining(): number {
    return this.limit - this.form.controls.details.value.length;
  }

  protected reasonError(): string {
    const c = this.form.controls.reason;
    return c.invalid && c.touched ? 'Choose the reason for the request.' : '';
  }

  protected detailsError(): string {
    const c = this.form.controls.details;
    if (!(c.invalid && c.touched)) return '';
    return c.hasError('required')
      ? 'Explain why the hearing needs a new date.'
      : 'Give the judge a little more detail (at least 40 characters).';
  }

  protected notifiedError(): string {
    const c = this.form.controls.notified;
    return c.invalid && c.touched ? 'Tell the other parties before you submit.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.sent.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-lg flex-col gap-4">
  <scsc-text size="sm" tone="muted" tnum>
    Motion to compel \xB7 24CV012345 \xB7 14 Oct 2026, 9:00 AM \xB7 Dept. 6
  </scsc-text>

  <scsc-form-field
    label="Reason for the request"
    for="textarea-continuance-reason"
    required
    [error]="reasonError()"
  >
    <select
      scsc-select
      id="textarea-continuance-reason"
      formControlName="reason"
      [invalid]="!!reasonError()"
      [attr.aria-invalid]="!!reasonError()"
    >
      <option value="" disabled>Select a reason\u2026</option>
      <option value="conflict">Attorney has a conflicting trial</option>
      <option value="illness">Illness or medical emergency</option>
      <option value="discovery">Discovery is not complete</option>
      <option value="other">Other</option>
    </select>
  </scsc-form-field>

  <scsc-form-field
    label="Explain why a new date is needed"
    for="textarea-continuance-details"
    [hint]="remaining() + ' of ' + limit + ' characters left'"
    required
    [error]="detailsError()"
  >
    <textarea
      scsc-textarea
      id="textarea-continuance-details"
      rows="5"
      formControlName="details"
      [attr.maxlength]="limit"
      [invalid]="!!detailsError()"
      [attr.aria-invalid]="!!detailsError()"
    ></textarea>
  </scsc-form-field>

  <label class="flex items-start gap-2">
    <input
      type="checkbox"
      scsc-checkbox
      class="mt-0.5"
      formControlName="notified"
      [attr.aria-invalid]="!!notifiedError()"
    />
    I have told all other parties that I am asking for a new date
  </label>
  @if (notifiedError()) {
    <p class="-mt-2 text-sm text-error" role="alert">{{ notifiedError() }}</p>
  }

  <div>
    <scsc-button variant="primary" nativeType="submit">Submit request</scsc-button>
  </div>

  @if (sent()) {
    <scsc-alert status="success" title="Request submitted">
      The judge will rule on your request before the hearing. You will be notified by email.
    </scsc-alert>
  }
</form>
`},"textarea-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField, ScscTextarea } from '@scscourt/design';

@Component({
  selector: 'app-textarea-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscTextarea],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Statement of facts"
        [hint]="remaining() + ' characters remaining'"
        for="facts"
        required
        [error]="error()"
      >
        <textarea
          scsc-textarea
          id="facts"
          rows="4"
          formControlName="facts"
          [attr.maxlength]="limit"
          [invalid]="!!error()"
          [attr.aria-invalid]="!!error()"
        ></textarea>
      </scsc-form-field>
      <div>
        <scsc-button variant="primary" nativeType="submit">Save statement</scsc-button>
      </div>
    </form>
  \`,
})
export class TextareaReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly limit = 500;

  protected readonly form = this.fb.group({
    facts: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(this.limit)]],
  });

  protected remaining(): number {
    return this.limit - (this.form.controls.facts.value?.length ?? 0);
  }

  protected error(): string {
    const c = this.form.controls.facts;
    if (!(c.invalid && (c.dirty || c.touched))) return '';
    if (c.hasError('required')) return 'Describe the facts supporting your request.';
    if (c.hasError('minlength')) return 'Give at least 20 characters.';
    return \`Keep it under \${this.limit} characters.\`;
  }

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Statement of facts"
    [hint]="remaining() + ' characters remaining'"
    for="facts"
    required
    [error]="error()"
  >
    <textarea
      scsc-textarea
      id="facts"
      rows="4"
      formControlName="facts"
      [attr.maxlength]="limit"
      [invalid]="!!error()"
      [attr.aria-invalid]="!!error()"
    ></textarea>
  </scsc-form-field>
  <div>
    <scsc-button variant="primary" nativeType="submit">Save statement</scsc-button>
  </div>
</form>
`}};var xe={slug:`textarea`,name:`Textarea`,classes:[`ScscTextarea`],category:`Forms`,whenToUse:["Multi-line free text: notes, statements, reasons for a request. It is a directive on the native `<textarea>`, so `rows`, `maxlength`, `formControlName` and `ngModel` work unchanged.","Wrap it in `scsc-form-field` for the label, hint and error; bind `[invalid]` to the control state for the error ring.","Show the character budget in the `hint` when there is a `maxlength`, so users are not surprised when typing stops.","For rich formatting (headings, lists) use `scsc-rich-text-editor` from `@scscourt/design/editor`."],demos:[{id:`textarea-basic`,title:`States`,description:`Default with a hint, invalid with an error, and disabled.`,component:q,source:A[`textarea-basic`]},{id:`textarea-reactive`,title:`With Reactive Forms`,description:`Required, min/max length and a live remaining-characters hint.`,component:N,source:A[`textarea-reactive`]},{id:`textarea-continuance`,title:`Request to continue a hearing`,description:"The textarea in a complete request: a reason select, a 40–1,000 character explanation and a `requiredTrue` confirmation.",component:F,source:A[`textarea-continuance`]}],a11y:["Always label it: `scsc-form-field` with `for`, a wrapping `<label>`, or `aria-label`.",'`[invalid]`, or an `error` on the enclosing `scsc-form-field`, sets `aria-invalid="true"`; the form-field error is part of the description (`aria-describedby`), so it is read with the field.',"Prefer a visible character budget in the hint over relying on `maxlength` silently truncating input."],appMustProvide:["A visible label (`scsc-form-field`), and the character budget in the hint rather than only `maxlength`."],related:[`input`,`form-field`,`rich-text-editor`,`select`]};export{xe as TEXTAREA_DOCS};