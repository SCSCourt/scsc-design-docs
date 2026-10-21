import{Ai as vA,Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Ss as rD,Xa as Pv,Y as Fs,Zi as za,bn as Vz,cs as lc,ii as qo,ks as t_,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var u={"alert-form":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput, ScscTextarea } from '@scscourt/design';

type Field = 'caseNumber' | 'reason';

@Component({
  selector: 'app-alert-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscInput, ScscTextarea],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4" novalidate>
      <!-- Rendered in response to the submit, so the live region is announced. -->
      @if (errorCount() > 0) {
        <scsc-alert status="error" title="The request was not sent">
          Fix the {{ errorCount() }} highlighted {{ errorCount() === 1 ? 'field' : 'fields' }}
          and submit again.
        </scsc-alert>
      } @else if (sentFor()) {
        <scsc-alert status="success" title="Continuance requested">
          Dept. 7 will review the request for {{ sentFor() }}. You will get an email when the clerk
          responds.
        </scsc-alert>
      }

      <scsc-form-field
        label="Case number"
        for="alert-form-case"
        hint="Format: 24CV012345"
        required
        [error]="errorFor('caseNumber')"
      >
        <input
          scsc-input
          id="alert-form-case"
          formControlName="caseNumber"
          [invalid]="invalid('caseNumber')"
        />
      </scsc-form-field>

      <scsc-form-field
        label="Reason for the continuance"
        for="alert-form-reason"
        required
        [error]="errorFor('reason')"
      >
        <textarea
          scsc-textarea
          id="alert-form-reason"
          rows="3"
          formControlName="reason"
          [invalid]="invalid('reason')"
        ></textarea>
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">Request continuance</scsc-button>
      </div>
    </form>
  \`,
})
export class AlertFormDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    caseNumber: ['', [Validators.required, Validators.pattern(/^\\d{2}[A-Z]{2}\\d{6}$/)]],
    reason: ['', [Validators.required, Validators.minLength(10)]],
  });

  /** Set on each submit: how many fields failed, or the case the request was sent for. */
  protected readonly errorCount = signal(0);
  protected readonly sentFor = signal('');

  protected invalid(name: Field): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.dirty || c.touched);
  }

  protected errorFor(name: Field): string {
    if (!this.invalid(name)) return '';
    const c = this.form.controls[name];
    if (c.hasError('required')) return 'This field is required.';
    if (c.hasError('pattern')) return 'Use the format 24CV012345.';
    return 'Give the reason in at least 10 characters.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const failed = Object.values(this.form.controls).filter((c) => c.invalid).length;
    this.errorCount.set(failed);
    if (failed) return;
    this.sentFor.set(this.form.controls.caseNumber.value);
    this.form.reset();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4" novalidate>
  <!-- Rendered in response to the submit, so the live region is announced. -->
  @if (errorCount() > 0) {
    <scsc-alert status="error" title="The request was not sent">
      Fix the {{ errorCount() }} highlighted {{ errorCount() === 1 ? 'field' : 'fields' }}
      and submit again.
    </scsc-alert>
  } @else if (sentFor()) {
    <scsc-alert status="success" title="Continuance requested">
      Dept. 7 will review the request for {{ sentFor() }}. You will get an email when the clerk
      responds.
    </scsc-alert>
  }

  <scsc-form-field
    label="Case number"
    for="alert-form-case"
    hint="Format: 24CV012345"
    required
    [error]="errorFor('caseNumber')"
  >
    <input
      scsc-input
      id="alert-form-case"
      formControlName="caseNumber"
      [invalid]="invalid('caseNumber')"
    />
  </scsc-form-field>

  <scsc-form-field
    label="Reason for the continuance"
    for="alert-form-reason"
    required
    [error]="errorFor('reason')"
  >
    <textarea
      scsc-textarea
      id="alert-form-reason"
      rows="3"
      formControlName="reason"
      [invalid]="invalid('reason')"
    ></textarea>
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">Request continuance</scsc-button>
  </div>
</form>
`},"alert-statuses":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAlert } from '@scscourt/design';

@Component({
  selector: 'app-alert-statuses-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <scsc-alert status="info" title="Hearing scheduled">
        Case Management Conference set for Oct 14, 2026 at 9:00 AM in Dept. 5.
      </scsc-alert>
      <scsc-alert status="success" title="Document filed">
        Your Answer was accepted by the clerk. Confirmation number 2026-0093812.
      </scsc-alert>
      <scsc-alert status="warning" title="Action required">
        Proof of service is due within 5 court days or the motion will be taken off calendar.
      </scsc-alert>
      <scsc-alert status="error" title="Filing rejected">
        The PDF is password-protected. Remove the password and resubmit.
      </scsc-alert>
    </div>
  \`,
})
export class AlertStatusesDemo {}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <scsc-alert status="info" title="Hearing scheduled">
    Case Management Conference set for Oct 14, 2026 at 9:00 AM in Dept. 5.
  </scsc-alert>
  <scsc-alert status="success" title="Document filed">
    Your Answer was accepted by the clerk. Confirmation number 2026-0093812.
  </scsc-alert>
  <scsc-alert status="warning" title="Action required">
    Proof of service is due within 5 court days or the motion will be taken off calendar.
  </scsc-alert>
  <scsc-alert status="error" title="Filing rejected">
    The PDF is password-protected. Remove the password and resubmit.
  </scsc-alert>
</div>
`},"alert-variants":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAlert } from '@scscourt/design';

@Component({
  selector: 'app-alert-variants-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <!-- No title: a single sentence is enough for most inline messages -->
      <scsc-alert status="info">Fee waivers are reviewed within 3 business days.</scsc-alert>

      <!-- Solid fill for the rare message that must dominate the page -->
      <scsc-alert status="warning" title="Courthouse closure" [soft]="false">
        The Downtown courthouse is closed Nov 11 for Veterans Day. E-filing remains available.
      </scsc-alert>

      <scsc-alert status="error" [soft]="false">
        Payment could not be processed. No fees were charged.
      </scsc-alert>
    </div>
  \`,
})
export class AlertVariantsDemo {}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <!-- No title: a single sentence is enough for most inline messages -->
  <scsc-alert status="info">Fee waivers are reviewed within 3 business days.</scsc-alert>

  <!-- Solid fill for the rare message that must dominate the page -->
  <scsc-alert status="warning" title="Courthouse closure" [soft]="false">
    The Downtown courthouse is closed Nov 11 for Veterans Day. E-filing remains available.
  </scsc-alert>

  <scsc-alert status="error" [soft]="false">
    Payment could not be processed. No fees were charged.
  </scsc-alert>
</div>
`}};function I(o,r){if(o&1&&(Ga(0,`scsc-alert`,1),G_(1),Lf()),o&2){let e=y_();Jb(),rD(` Fix the `,e.errorCount(),` highlighted `,e.errorCount()===1?`field`:`fields`,` and submit again. `)}}function B(o,r){if(o&1&&(Ga(0,`scsc-alert`,2),G_(1),Lf()),o&2){let e=y_();Jb(),$f(` Dept. 7 will review the request for `,e.sentFor(),`. You will get an email when the clerk responds. `)}}var f=class o{fb=g(Wue);form=this.fb.nonNullable.group({caseNumber:[``,[Fs.required,Fs.pattern(/^\d{2}[A-Z]{2}\d{6}$/)]],reason:[``,[Fs.required,Fs.minLength(10)]]});errorCount=q(0);sentFor=q(``);invalid(r){let e=this.form.controls[r];return e.invalid&&(e.dirty||e.touched)}errorFor(r){if(!this.invalid(r))return``;let e=this.form.controls[r];return e.hasError(`required`)?`This field is required.`:e.hasError(`pattern`)?`Use the format 24CV012345.`:`Give the reason in at least 10 characters.`}submit(){this.form.markAllAsTouched();let r=Object.values(this.form.controls).filter(e=>e.invalid).length;this.errorCount.set(r),!r&&(this.sentFor.set(this.form.controls.caseNumber.value),this.form.reset())}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-alert-form-demo`]],decls:10,vars:6,consts:[[`novalidate`,``,1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`status`,`error`,`title`,`The request was not sent`],[`status`,`success`,`title`,`Continuance requested`],[`label`,`Case number`,`for`,`alert-form-case`,`hint`,`Format: 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`alert-form-case`,`formControlName`,`caseNumber`,3,`invalid`],[`label`,`Reason for the continuance`,`for`,`alert-form-reason`,`required`,``,3,`error`],[`scsc-textarea`,``,`id`,`alert-form-reason`,`rows`,`3`,`formControlName`,`reason`,3,`invalid`],[`variant`,`primary`,`nativeType`,`submit`]],template:function(e,i){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return i.submit()}),JT(1,I,2,2,`scsc-alert`,1)(2,B,2,1,`scsc-alert`,2),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),Lf()(),Ga(5,`scsc-form-field`,5)(6,`textarea`,6),HS(),Lf()(),Ga(7,`div`)(8,`scsc-button`,7),G_(9,`Request continuance`),Lf()()()),e&2&&(Pv(`formGroup`,i.form),Jb(),t_(i.errorCount()>0?1:i.sentFor()?2:-1),Jb(2),Pv(`error`,i.errorFor(`caseNumber`)),Jb(),Pv(`invalid`,i.invalid(`caseNumber`)),zS(),Jb(),Pv(`error`,i.errorFor(`reason`)),Jb(),Pv(`invalid`,i.invalid(`reason`)),zS())},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,za,sn,Vn,qo,vA],encapsulation:2})};var p=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-alert-statuses-demo`]],decls:9,vars:0,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[`status`,`info`,`title`,`Hearing scheduled`],[`status`,`success`,`title`,`Document filed`],[`status`,`warning`,`title`,`Action required`],[`status`,`error`,`title`,`Filing rejected`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`scsc-alert`,1),G_(2,` Case Management Conference set for Oct 14, 2026 at 9:00 AM in Dept. 5. `),Lf(),Ga(3,`scsc-alert`,2),G_(4,` Your Answer was accepted by the clerk. Confirmation number 2026-0093812. `),Lf(),Ga(5,`scsc-alert`,3),G_(6,` Proof of service is due within 5 court days or the motion will be taken off calendar. `),Lf(),Ga(7,`scsc-alert`,4),G_(8,` The PDF is password-protected. Remove the password and resubmit. `),Lf()())},dependencies:[za],encapsulation:2})};var h=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-alert-variants-demo`]],decls:7,vars:2,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[`status`,`info`],[`status`,`warning`,`title`,`Courthouse closure`,3,`soft`],[`status`,`error`,3,`soft`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`scsc-alert`,1),G_(2,`Fee waivers are reviewed within 3 business days.`),Lf(),Ga(3,`scsc-alert`,2),G_(4,` The Downtown courthouse is closed Nov 11 for Veterans Day. E-filing remains available. `),Lf(),Ga(5,`scsc-alert`,3),G_(6,` Payment could not be processed. No fees were charged. `),Lf()()),e&2&&(Jb(3),Pv(`soft`,!1),Jb(2),Pv(`soft`,!1))},dependencies:[za],encapsulation:2})};var ae={slug:`alert`,name:`Alert`,classes:[`ScscAlert`],category:`Overlays & Feedback`,whenToUse:[`A message that belongs to the content it sits next to: a form that failed to save, a hearing that was just scheduled, a deadline on a case page.`,"Transient confirmations go through `ToastService`; site-wide notices (closures, outages) go in `scsc-banner` at the top of the page.",'Soft fill is the default and should stay that way; reserve `[soft]="false"` for the one message on a page that must dominate.',"Keep the `title` short and the body one or two sentences; longer guidance belongs in `scsc-prose`.",'Above a form, an error alert summarises what failed ("Fix the 2 highlighted fields") while `scsc-form-field` shows each field error in place.'],demos:[{id:`alert-statuses`,title:`Statuses`,description:`The four statuses with titles; each picks its own icon.`,component:p,source:u[`alert-statuses`]},{id:`alert-variants`,title:`Without title, and solid`,description:'A single sentence needs no title; `[soft]="false"` gives a solid fill.',component:h,source:u[`alert-variants`]},{id:`alert-form`,title:`Form summary`,description:`A Reactive Form that renders an error summary or a success alert on submit; submit it empty to see the error path.`,component:f,source:u[`alert-form`]}],a11y:['Renders `role="alert"` for `status="error"` (announced immediately) and `role="status"` otherwise (announced politely).',`Because of the live-region role, render alerts in response to something happening (as the form demo does on submit) rather than on page load, or the announcement is lost.`,'The tone is stated in words: a visually hidden "Error:", "Warning:", "Success:" or "Information:" starts the heading (or the message when there is no `title`), so the colour and icon are never the only cue (WCAG 1.4.1). The words come from `SCSC_LABELS.tone`.',"The `title` is a heading at `headingLevel` (default 3); pick the level that fits the outline where the alert sits."],aria:['`role="alert"` (error) or `role="status"` (other tones) on the host.','The title is `role="heading"` with `aria-level` from `headingLevel`.',"The icon is `aria-hidden`; the tone prefix is `sr-only` text."],appMustProvide:[`Message text that says what happened and what to do, in words.`],related:[`banner`,`toast`,`status-badge`,`empty-state`,`error-state`]};export{ae as ALERT_DOCS};