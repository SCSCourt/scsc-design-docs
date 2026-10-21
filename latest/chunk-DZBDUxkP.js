import{Ct as Lr,Dn as Wue,E as Bue,Go as g$1,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Xa as Pv,Y as Fs,bn as Vz,cs as lc,ii as qo,ks as t_,kt as NE,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function q(n,t){if(n&1&&(Ga(0,`scsc-text`,5),G_(1),Lf()),n&2){let s=y_();Jb(),$f(`Saved at `,s.savedAt())}}var h=class n{fb=g$1(Wue);toasts=g$1(Lr);form=this.fb.nonNullable.group({email:[`dreyes@reyeslaw.example`,[Fs.required,Fs.email]]});saving=q$1(!1);savedAt=q$1(``);emailError(){let t=this.form.controls.email;return t.invalid&&(t.dirty||t.touched)?t.hasError(`required`)?`Enter an email address.`:`Enter a valid email address.`:``}save(){this.form.markAllAsTouched(),!this.form.invalid&&(this.saving.set(!0),setTimeout(()=>{this.saving.set(!1),this.savedAt.set(new Date().toLocaleTimeString(`en-US`,{timeStyle:`short`})),this.toasts.success(`Service email for 24CV012345 is now ${this.form.controls.email.value}.`,{title:`Contact saved`})},800))}static ɵfac=function(s){return new(s||n)};static ɵcmp=Af({type:n,selectors:[[`app-toast-form-demo`]],decls:7,vars:5,consts:[[`novalidate`,``,1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Email for electronic service`,`for`,`toast-form-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`toast-form-email`,`type`,`email`,`autocomplete`,`email`,`formControlName`,`email`,3,`invalid`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`primary`,`nativeType`,`submit`,3,`loading`],[`tone`,`muted`,`size`,`sm`]],template:function(s,e){s&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.save()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`scsc-button`,4),G_(5,` Save `),Lf(),JT(6,q,2,1,`scsc-text`,5),Lf()()),s&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.emailError()),Jb(),Pv(`invalid`,!!e.emailError()),zS(),Jb(2),Pv(`loading`,e.saving()),Jb(2),t_(e.savedAt()?6:-1))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,sn,Vn,qo,NE],encapsulation:2})};var g=class n{toasts=g$1(Lr);pendingId=q$1(null);startExport(){let t=this.toasts.info(`Exporting the docket for 24CV012345…`,{title:`Working`,duration:0});this.pendingId.set(t)}finishExport(){let t=this.pendingId();t!==null&&(this.toasts.dismiss(t),this.pendingId.set(null),this.toasts.success(`docket-24CV012345.csv is ready.`,{title:`Export complete`}))}static ɵfac=function(s){return new(s||n)};static ɵcmp=Af({type:n,selectors:[[`app-toast-options-demo`]],decls:7,vars:1,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`variant`,`secondary`,`outline`,``,3,`click`],[`variant`,`ghost`,3,`click`,`disabled`],[`variant`,`ghost`,3,`click`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.startExport()}),G_(2,`Start export`),Lf(),Ga(3,`scsc-button`,2),lc(`click`,function(){return e.finishExport()}),G_(4,`Mark export complete`),Lf(),Ga(5,`scsc-button`,3),lc(`click`,function(){return e.toasts.info(`This one closes in 10 seconds.`,{duration:1e4})}),G_(6,`Long duration`),Lf()()),s&2&&(Jb(3),Pv(`disabled`,e.pendingId()===null))},dependencies:[sn],encapsulation:2})};var y=class n{toasts=g$1(Lr);static ɵfac=function(s){return new(s||n)};static ɵcmp=Af({type:n,selectors:[[`app-toast-statuses-demo`]],decls:9,vars:0,consts:[[1,`flex`,`flex-wrap`,`gap-2`],[`variant`,`neutral`,`outline`,``,3,`click`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.toasts.success(`Answer filed in 24CV012345.`,{title:`Filed`})}),G_(2,`Success`),Lf(),Ga(3,`scsc-button`,1),lc(`click`,function(){return e.toasts.info(`Hearing moved to Oct 14, 2026 at 9:00 AM.`)}),G_(4,`Info`),Lf(),Ga(5,`scsc-button`,1),lc(`click`,function(){return e.toasts.warning(`Proof of service is due in 5 court days.`)}),G_(6,`Warning`),Lf(),Ga(7,`scsc-button`,1),lc(`click`,function(){return e.toasts.error(`Filing rejected: PDF is password-protected.`,{title:`Rejected`})}),G_(8,`Error`),Lf()())},dependencies:[sn],encapsulation:2})};var b={"toast-form":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField, ScscInput, ScscText, ToastService } from '@scscourt/design';

@Component({
  selector: 'app-toast-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscInput, ScscText],
  template: \`
    <form [formGroup]="form" (ngSubmit)="save()" class="flex max-w-md flex-col gap-4" novalidate>
      <!-- Field errors stay next to the field; the toast is only for the success. -->
      <scsc-form-field
        label="Email for electronic service"
        for="toast-form-email"
        required
        [error]="emailError()"
      >
        <input
          scsc-input
          id="toast-form-email"
          type="email"
          autocomplete="email"
          formControlName="email"
          [invalid]="!!emailError()"
        />
      </scsc-form-field>

      <div class="flex flex-wrap items-center gap-3">
        <scsc-button variant="primary" nativeType="submit" [loading]="saving()"> Save </scsc-button>
        <!-- The outcome is also recorded on the page, since toasts disappear. -->
        @if (savedAt()) {
          <scsc-text tone="muted" size="sm">Saved at {{ savedAt() }}</scsc-text>
        }
      </div>
    </form>
  \`,
})
export class ToastFormDemo {
  private readonly fb = inject(FormBuilder);
  private readonly toasts = inject(ToastService);

  protected readonly form = this.fb.nonNullable.group({
    email: ['dreyes@reyeslaw.example', [Validators.required, Validators.email]],
  });
  protected readonly saving = signal(false);
  protected readonly savedAt = signal('');

  protected emailError(): string {
    const c = this.form.controls.email;
    if (!(c.invalid && (c.dirty || c.touched))) return '';
    return c.hasError('required') ? 'Enter an email address.' : 'Enter a valid email address.';
  }

  protected save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.saving.set(true);
    // Stand-in for the HTTP call.
    setTimeout(() => {
      this.saving.set(false);
      this.savedAt.set(new Date().toLocaleTimeString('en-US', { timeStyle: 'short' }));
      this.toasts.success(
        \`Service email for 24CV012345 is now \${this.form.controls.email.value}.\`,
        {
          title: 'Contact saved',
        },
      );
    }, 800);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="save()" class="flex max-w-md flex-col gap-4" novalidate>
  <!-- Field errors stay next to the field; the toast is only for the success. -->
  <scsc-form-field
    label="Email for electronic service"
    for="toast-form-email"
    required
    [error]="emailError()"
  >
    <input
      scsc-input
      id="toast-form-email"
      type="email"
      autocomplete="email"
      formControlName="email"
      [invalid]="!!emailError()"
    />
  </scsc-form-field>

  <div class="flex flex-wrap items-center gap-3">
    <scsc-button variant="primary" nativeType="submit" [loading]="saving()"> Save </scsc-button>
    <!-- The outcome is also recorded on the page, since toasts disappear. -->
    @if (savedAt()) {
      <scsc-text tone="muted" size="sm">Saved at {{ savedAt() }}</scsc-text>
    }
  </div>
</form>
`},"toast-options":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScscButton, ToastService } from '@scscourt/design';

@Component({
  selector: 'app-toast-options-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <scsc-button variant="secondary" outline (click)="startExport()">Start export</scsc-button>
      <scsc-button variant="ghost" [disabled]="pendingId() === null" (click)="finishExport()"
        >Mark export complete</scsc-button
      >
      <scsc-button
        variant="ghost"
        (click)="toasts.info('This one closes in 10 seconds.', { duration: 10000 })"
        >Long duration</scsc-button
      >
    </div>
  \`,
})
export class ToastOptionsDemo {
  protected readonly toasts = inject(ToastService);
  /** Id of the sticky "working" toast so it can be dismissed programmatically. */
  protected readonly pendingId = signal<number | null>(null);

  protected startExport(): void {
    // duration: 0 keeps the toast until dismiss() is called
    const id = this.toasts.info('Exporting the docket for 24CV012345\u2026', {
      title: 'Working',
      duration: 0,
    });
    this.pendingId.set(id);
  }

  protected finishExport(): void {
    const id = this.pendingId();
    if (id === null) return;
    this.toasts.dismiss(id);
    this.pendingId.set(null);
    this.toasts.success('docket-24CV012345.csv is ready.', { title: 'Export complete' });
  }
}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <scsc-button variant="secondary" outline (click)="startExport()">Start export</scsc-button>
  <scsc-button variant="ghost" [disabled]="pendingId() === null" (click)="finishExport()"
    >Mark export complete</scsc-button
  >
  <scsc-button
    variant="ghost"
    (click)="toasts.info('This one closes in 10 seconds.', { duration: 10000 })"
    >Long duration</scsc-button
  >
</div>
`},"toast-statuses":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScscButton, ToastService } from '@scscourt/design';

@Component({
  selector: 'app-toast-statuses-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton],
  template: \`
    <div class="flex flex-wrap gap-2">
      <scsc-button
        variant="neutral"
        outline
        (click)="toasts.success('Answer filed in 24CV012345.', { title: 'Filed' })"
        >Success</scsc-button
      >
      <scsc-button
        variant="neutral"
        outline
        (click)="toasts.info('Hearing moved to Oct 14, 2026 at 9:00 AM.')"
        >Info</scsc-button
      >
      <scsc-button
        variant="neutral"
        outline
        (click)="toasts.warning('Proof of service is due in 5 court days.')"
        >Warning</scsc-button
      >
      <scsc-button
        variant="neutral"
        outline
        (click)="toasts.error('Filing rejected: PDF is password-protected.', { title: 'Rejected' })"
        >Error</scsc-button
      >
    </div>
  \`,
})
export class ToastStatusesDemo {
  // Root-provided; rendered by the single <scsc-toast-container /> in the app root.
  protected readonly toasts = inject(ToastService);
}
`,html:`<div class="flex flex-wrap gap-2">
  <scsc-button
    variant="neutral"
    outline
    (click)="toasts.success('Answer filed in 24CV012345.', { title: 'Filed' })"
    >Success</scsc-button
  >
  <scsc-button
    variant="neutral"
    outline
    (click)="toasts.info('Hearing moved to Oct 14, 2026 at 9:00 AM.')"
    >Info</scsc-button
  >
  <scsc-button
    variant="neutral"
    outline
    (click)="toasts.warning('Proof of service is due in 5 court days.')"
    >Warning</scsc-button
  >
  <scsc-button
    variant="neutral"
    outline
    (click)="toasts.error('Filing rejected: PDF is password-protected.', { title: 'Rejected' })"
    >Error</scsc-button
  >
</div>
`}};var lt={slug:`toast`,name:`Toast`,classes:[`ScscToastContainer`,`ToastService`],category:`Overlays & Feedback`,summary:"Transient notifications. `ToastService` (root-provided) queues them from anywhere; one `<scsc-toast-container />` near the app root renders the stack in the bottom-right corner and auto-dismisses each after 4 seconds, pausing while the pointer or keyboard focus is on the stack.",whenToUse:[`Confirmation that a background action completed: a filing was accepted, a record saved, an export is ready.`,"Not for errors the user must fix on the spot — those belong in an `scsc-alert` next to the form. Not for announcements that must stay visible — use `scsc-banner`.","`show()` returns the toast id; pass `duration: 0` for a sticky toast and call `dismiss(id)` when the work finishes.",`One container per app. A second container would render every toast twice.`],setup:`// app.ts \u2014 render the container once, next to the router outlet
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScscToastContainer } from '@scscourt/design';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScscToastContainer],
  template: \`
    <router-outlet />
    <scsc-toast-container />
  \`,
})
export class App {}

// anywhere else \u2014 the service is providedIn: 'root'
private readonly toasts = inject(ToastService);
this.toasts.success('Answer filed in 24CV012345.', { title: 'Filed' });`,demos:[{id:`toast-statuses`,title:`Statuses`,description:"`success` / `info` / `warning` / `error`, with and without a title.",component:y,source:b[`toast-statuses`]},{id:`toast-options`,title:`Sticky and programmatic dismiss`,description:"`duration: 0` keeps a toast until `dismiss(id)`; `duration` in ms overrides the 4 s default.",component:g,source:b[`toast-options`]},{id:`toast-form`,title:`After saving a form`,description:`Validation errors stay on the field; a successful save shows a toast and also leaves "Saved at …" on the page.`,component:h,source:b[`toast-form`]}],a11y:['The container is an `aria-live="polite"` region, so every toast is announced without stealing focus.',`Each toast has a labelled Dismiss button, described by the toast’s text; toasts also auto-dismiss, so never make a toast the only place an outcome is recorded.`,"No toast times out while the pointer is over the stack or keyboard focus is in it; the countdowns then resume with the time they had left (WCAG 2.2.1). `ToastService.pause()` and `resume()` do the same from code.","When a focused toast goes, focus moves to the next toast (or the previous one), and after the last one back to where it was before it entered the toasts, never to `<body>`.",`Keep messages to one sentence; a title plus message is announced as one unit.`],keyboard:[{keys:`Tab`,action:`Toasts never take focus on their own; Tab reaches each Dismiss button where the container sits in the DOM (last, with the setup above). No toast times out while one has keyboard focus.`},{keys:`Enter / Space`,action:`On a Dismiss button: removes that toast and moves focus to the next toast (or the previous one); after the last one, focus returns to where it was before it entered the toasts.`},{keys:`Escape`,action:`On a toast’s Dismiss button: dismisses that toast, the same as pressing it.`}],appMustProvide:[`A lasting record of every outcome elsewhere on the page, because toasts time out.`,"One-sentence messages. Anything the user must act on goes in an `scsc-alert` or a dialog instead."],related:[`alert`,`banner`,`dialog`]};export{lt as TOAST_DOCS};