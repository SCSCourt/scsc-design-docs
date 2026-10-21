import{Ai as vA,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Lo as d_,Ma as JT,Mn as XR,Na as Jb,Xa as Pv,Y as Fs,Yo as iD,Zo as i_,_i as tN,_s as o_,_t as Kn,bn as Vz,bo as Y_,cs as lc,ds as nD,ha as Eg,ii as qo,ka as Ig,ks as t_,kt as NE,l as $ue,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,y as At,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function ae(a,n){a&1&&(Ga(0,`p`,4),G_(1,`Case dismissed.`),Lf())}var N=class a{open=q$1(!1);dismissed=q$1(!1);confirm(){this.dismissed.set(!0),this.open.set(!1)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Af({type:a,selectors:[[`app-modal-basic-demo`]],decls:11,vars:2,consts:[[`variant`,`primary`,3,`click`],[`title`,`Dismiss case 24CV012345?`,`role`,`alertdialog`,`size`,`sm`,3,`openChange`,`open`],[`slot`,`footer`,1,`flex`,`gap-2`],[`variant`,`ghost`,3,`click`],[1,`mt-3`,`text-sm`,`text-success`]],template:function(o,e){o&1&&(Ga(0,`scsc-button`,0),lc(`click`,function(){return e.open.set(!0)}),G_(1,`Dismiss case…`),Lf(),Ga(2,`scsc-modal`,1),sD(`openChange`,function(r){return Y_(e.open,r)||(e.open=r),r}),Ga(3,`p`),G_(4,` The case will be marked dismissed and removed from the active calendar. This cannot be undone. `),Lf(),Ga(5,`div`,2)(6,`scsc-button`,3),lc(`click`,function(){return e.open.set(!1)}),G_(7,`Cancel`),Lf(),Ga(8,`scsc-button`,0),lc(`click`,function(){return e.confirm()}),G_(9,`Dismiss case`),Lf()()(),JT(10,ae,2,0,`p`,4)),o&2&&(Jb(2),iD(`open`,e.open),Jb(8),t_(e.dismissed()?10:-1))},dependencies:[sn,At],encapsulation:2})};function re(a,n){a&1&&(Ga(0,`scsc-text`,2),G_(1),Lf()),a&2&&(Jb(),$f(`(closed) reported: `,n))}var R=class a{dialogs=g(Kn);open=q$1(!1);note=q$1(``);lastReason=q$1(null);confirmDiscard=()=>!this.note().trim()||this.dialogs.confirm({title:`Discard this note?`,message:`It has not been added to the case file.`,confirmText:`Discard note`,cancelText:`Keep editing`,tone:`warning`});start(){this.note.set(``),this.open.set(!0)}async cancel(){await this.confirmDiscard(`button`)&&this.open.set(!1)}add(){this.note.set(``),this.open.set(!1)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Af({type:a,selectors:[[`app-modal-before-close-demo`]],decls:12,vars:5,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`tone`,`muted`],[`title`,`Add a case note`,`description`,`Notes are visible to court staff only.`,3,`openChange`,`closed`,`open`,`beforeClose`],[`label`,`Note`,`for`,`case-note`],[`scsc-textarea`,``,`id`,`case-note`,`rows`,`4`,3,`input`,`value`],[`slot`,`footer`,1,`flex`,`gap-2`],[`variant`,`ghost`,3,`click`],[`variant`,`primary`,3,`click`,`disabled`]],template:function(o,e){if(o&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.start()}),G_(2,`Add a case note…`),Lf(),JT(3,re,2,1,`scsc-text`,2),Lf(),Ga(4,`scsc-modal`,3),sD(`openChange`,function(r){return Y_(e.open,r)||(e.open=r),r}),lc(`closed`,function(r){return e.lastReason.set(r)}),Ga(5,`scsc-form-field`,4)(6,`textarea`,5),lc(`input`,function(r){return e.note.set(r.target.value)}),Lf()(),Ga(7,`div`,6)(8,`scsc-button`,7),lc(`click`,function(){return e.cancel()}),G_(9,`Cancel`),Lf(),Ga(10,`scsc-button`,8),lc(`click`,function(){return e.add()}),G_(11,`Add note`),Lf()()()),o&2){let l;Jb(3),t_((l=e.lastReason())?3:-1,l),Jb(),iD(`open`,e.open),Pv(`beforeClose`,e.confirmDiscard),Jb(2),Pv(`value`,e.note()),Jb(4),Pv(`disabled`,!e.note().trim())}},dependencies:[sn,Vn,At,NE,vA],encapsulation:2})};function ce(a,n){a&1&&(Ga(0,`p`,6),G_(1,`Authorized.`),Lf())}var P=class a{open=q$1(!1);pin=q$1(``);authorized=q$1(!1);authorize(){this.authorized.set(!0),this.open.set(!1),this.pin.set(``)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Af({type:a,selectors:[[`app-modal-blocking-demo`]],decls:9,vars:5,consts:[[`variant`,`secondary`,`outline`,``,3,`click`],[`title`,`Clerk authorization required`,3,`openChange`,`open`,`dismissable`],[`label`,`PIN`,`for`,`pin`,`hint`,`Any 4 digits for this demo`],[`scsc-input`,``,`id`,`pin`,`type`,`password`,`inputmode`,`numeric`,`maxlength`,`4`,3,`input`,`value`],[`slot`,`footer`],[`variant`,`primary`,3,`click`,`disabled`],[1,`mt-3`,`text-sm`,`text-success`]],template:function(o,e){o&1&&(Ga(0,`scsc-button`,0),lc(`click`,function(){return e.open.set(!0)}),G_(1,`Enter clerk PIN`),Lf(),Ga(2,`scsc-modal`,1),sD(`openChange`,function(r){return Y_(e.open,r)||(e.open=r),r}),Ga(3,`scsc-form-field`,2)(4,`input`,3),lc(`input`,function(r){return e.pin.set(r.target.value)}),Lf()(),Ga(5,`div`,4)(6,`scsc-button`,5),lc(`click`,function(){return e.authorize()}),G_(7,`Authorize`),Lf()()(),JT(8,ce,2,0,`p`,6)),o&2&&(Jb(2),iD(`open`,e.open),Pv(`dismissable`,!1),Jb(2),Pv(`value`,e.pin()),Jb(2),Pv(`disabled`,e.pin().length<4),Jb(2),t_(e.authorized()?8:-1))},dependencies:[sn,Vn,qo,At],encapsulation:2})};var q=class a{fb=g(Wue);open=q$1(!1);scheduled=q$1(`Oct 14, 2026 at 9:00 AM`);form=this.fb.nonNullable.group({date:[``,Fs.required],time:[``,Fs.required],reason:[``,[Fs.required,Fs.minLength(10)]]});reschedule(){this.form.reset(),this.open.set(!0)}invalid(n){let o=this.form.controls[n];return o.invalid&&(o.dirty||o.touched)}errorFor(n){return this.invalid(n)?this.form.controls[n].hasError(`minlength`)?`Give the reason in at least 10 characters.`:`This field is required.`:``}save(){if(this.form.markAllAsTouched(),this.form.invalid)return;let{date:n,time:o}=this.form.getRawValue(),[e,l,r]=n.split(`-`).map(Number),ne=new Date(e,l-1,r).toLocaleDateString(`en-US`,{dateStyle:`medium`});this.scheduled.set(`${ne} at ${o}`),this.open.set(!1)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Af({type:a,selectors:[[`app-modal-form-demo`]],decls:27,vars:9,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`tone`,`muted`],[`title`,`Reschedule the Motion to Compel`,3,`openChange`,`open`],[`novalidate`,``,1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`New date`,`for`,`modal-form-date`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`modal-form-date`,`type`,`date`,`min`,`2026-10-01`,`formControlName`,`date`,`scscAutofocus`,``,3,`invalid`],[`label`,`Time`,`for`,`modal-form-time`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`modal-form-time`,`formControlName`,`time`,3,`invalid`],[`value`,``],[`label`,`Reason`,`for`,`modal-form-reason`,`required`,``,3,`error`],[`scsc-textarea`,``,`id`,`modal-form-reason`,`rows`,`3`,`formControlName`,`reason`,3,`invalid`],[1,`mt-2`,`flex`,`justify-end`,`gap-2`],[`variant`,`ghost`,3,`click`],[`variant`,`primary`,`nativeType`,`submit`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.reschedule()}),G_(2,`Reschedule hearing…`),Lf(),Ga(3,`scsc-text`,2),G_(4),Lf()(),Ga(5,`scsc-modal`,3),sD(`openChange`,function(r){return Y_(e.open,r)||(e.open=r),r}),Ga(6,`form`,4),lc(`ngSubmit`,function(){return e.save()}),Ga(7,`div`,5)(8,`scsc-form-field`,6)(9,`input`,7),HS(),Lf()(),Ga(10,`scsc-form-field`,8)(11,`select`,9),HS(),Ga(12,`option`,10),G_(13,`Select…`),Lf(),Ga(14,`option`),G_(15,`8:30 AM`),Lf(),Ga(16,`option`),G_(17,`9:00 AM`),Lf(),Ga(18,`option`),G_(19,`1:30 PM`),Lf()()()(),Ga(20,`scsc-form-field`,11)(21,`textarea`,12),HS(),Lf()(),Ga(22,`div`,13)(23,`scsc-button`,14),lc(`click`,function(){return e.open.set(!1)}),G_(24,`Cancel`),Lf(),Ga(25,`scsc-button`,15),G_(26,`Reschedule`),Lf()()()()),o&2&&(Jb(4),$f(`Motion to Compel · `,e.scheduled()),Jb(),iD(`open`,e.open),Jb(),Pv(`formGroup`,e.form),Jb(2),Pv(`error`,e.errorFor(`date`)),Jb(),Pv(`invalid`,e.invalid(`date`)),zS(),Jb(),Pv(`error`,e.errorFor(`time`)),Jb(),Pv(`invalid`,e.invalid(`time`)),zS(),Jb(9),Pv(`error`,e.errorFor(`reason`)),Jb(),Pv(`invalid`,e.invalid(`reason`)),zS())},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,Vz,Xz,XR,sn,Vn,qo,At,On,NE,vA],encapsulation:2})};var le=(a,n)=>n.size;var de=(a,n)=>n.id;function me(a,n){if(a&1){let o=d_();Ga(0,`scsc-button`,7),lc(`click`,function(){let l=Eg(o).$implicit,r=y_();return Ig(r.show(l.size))}),G_(1),Lf()}if(a&2){let o=n.$implicit;Jb(),nD(o.label)}}function pe(a,n){if(a&1&&(Ga(0,`li`,4)(1,`p`,8),G_(2),Lf(),Ga(3,`p`,9),G_(4),Lf()()),a&2){let o=n.$implicit;Jb(2),nD(o.title),Jb(2),nD(o.date)}}var I=class a{open=q$1(!1);size=q$1(`md`);sizes=[{size:`sm`,label:`Small (24rem)`},{size:`md`,label:`Medium (32rem)`},{size:`lg`,label:`Large (42rem)`},{size:`xl`,label:`Extra large (56rem)`},{size:`full`,label:`Full screen`}];entries=[{id:1,date:`Mar 4, 2024`,title:`Complaint filed`},{id:2,date:`Mar 4, 2024`,title:`Summons issued`},{id:3,date:`Mar 21, 2024`,title:`Proof of service of summons`},{id:4,date:`Apr 18, 2024`,title:`Answer to complaint`},{id:5,date:`May 2, 2024`,title:`Notice of case management conference`},{id:6,date:`Jun 10, 2024`,title:`Case management statement (plaintiff)`},{id:7,date:`Jun 11, 2024`,title:`Case management statement (defendant)`},{id:8,date:`Jun 24, 2024`,title:`Case management conference held`},{id:9,date:`Aug 5, 2024`,title:`Motion to compel further responses`},{id:10,date:`Aug 26, 2024`,title:`Opposition to motion to compel`},{id:11,date:`Sep 3, 2024`,title:`Reply in support of motion to compel`},{id:12,date:`Sep 12, 2024`,title:`Order granting motion to compel in part`},{id:13,date:`Jan 14, 2025`,title:`Notice of trial setting conference`},{id:14,date:`Feb 20, 2025`,title:`Trial setting conference held`}];show(n){this.size.set(n),this.open.set(!0)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Af({type:a,selectors:[[`app-modal-sizes-demo`]],decls:10,vars:2,consts:[[1,`flex`,`flex-wrap`,`gap-2`],[`variant`,`secondary`,`outline`,``],[`title`,`Register of actions · 24CV012345`,`description`,`Alvarez v. Pacific Transit. The title and the Done button stay in view while the entries scroll.`,3,`openChange`,`open`,`size`],[1,`divide-y`,`divide-base-300`],[1,`py-2`],[`slot`,`footer`],[`variant`,`primary`,3,`click`],[`variant`,`secondary`,`outline`,``,3,`click`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`,`tnum`]],template:function(o,e){o&1&&(Ga(0,`div`,0),o_(1,me,2,1,`scsc-button`,1,le),Lf(),Ga(3,`scsc-modal`,2),sD(`openChange`,function(r){return Y_(e.open,r)||(e.open=r),r}),Ga(4,`ol`,3),o_(5,pe,5,2,`li`,4,de),Lf(),Ga(7,`div`,5)(8,`scsc-button`,6),lc(`click`,function(){return e.open.set(!1)}),G_(9,`Done`),Lf()()()),o&2&&(Jb(),i_(e.sizes),Jb(2),iD(`open`,e.open),Pv(`size`,e.size()),Jb(2),i_(e.entries))},dependencies:[sn,At],encapsulation:2})};var _={"modal-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscModal } from '@scscourt/design';

@Component({
  selector: 'app-modal-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscModal],
  template: \`
    <scsc-button variant="primary" (click)="open.set(true)">Dismiss case\u2026</scsc-button>

    <!-- alertdialog: a question that interrupts; focus starts on Cancel, the first footer button -->
    <scsc-modal [(open)]="open" title="Dismiss case 24CV012345?" role="alertdialog" size="sm">
      <p>
        The case will be marked dismissed and removed from the active calendar. This cannot be
        undone.
      </p>
      <div slot="footer" class="flex gap-2">
        <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
        <scsc-button variant="primary" (click)="confirm()">Dismiss case</scsc-button>
      </div>
    </scsc-modal>

    @if (dismissed()) {
      <p class="mt-3 text-sm text-success">Case dismissed.</p>
    }
  \`,
})
export class ModalBasicDemo {
  protected readonly open = signal(false);
  protected readonly dismissed = signal(false);

  protected confirm(): void {
    this.dismissed.set(true);
    this.open.set(false);
  }
}
`,html:`<scsc-button variant="primary" (click)="open.set(true)">Dismiss case\u2026</scsc-button>

<!-- alertdialog: a question that interrupts; focus starts on Cancel, the first footer button -->
<scsc-modal [(open)]="open" title="Dismiss case 24CV012345?" role="alertdialog" size="sm">
  <p>
    The case will be marked dismissed and removed from the active calendar. This cannot be
    undone.
  </p>
  <div slot="footer" class="flex gap-2">
    <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
    <scsc-button variant="primary" (click)="confirm()">Dismiss case</scsc-button>
  </div>
</scsc-modal>

@if (dismissed()) {
  <p class="mt-3 text-sm text-success">Case dismissed.</p>
}
`},"modal-before-close":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  ScscButton,
  ScscDialogService,
  ScscFormField,
  ScscModal,
  ScscText,
  ScscTextarea,
  type ScscBeforeClose,
  type ScscOverlayCloseReason,
} from '@scscourt/design';

@Component({
  selector: 'app-modal-before-close-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscFormField, ScscModal, ScscText, ScscTextarea],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button variant="secondary" outline (click)="start()">Add a case note\u2026</scsc-button>
      @if (lastReason(); as reason) {
        <scsc-text size="sm" tone="muted">(closed) reported: {{ reason }}</scsc-text>
      }
    </div>

    <scsc-modal
      [(open)]="open"
      title="Add a case note"
      description="Notes are visible to court staff only."
      [beforeClose]="confirmDiscard"
      (closed)="lastReason.set($event)"
    >
      <scsc-form-field label="Note" for="case-note">
        <textarea
          scsc-textarea
          id="case-note"
          rows="4"
          [value]="note()"
          (input)="note.set($any($event.target).value)"
        ></textarea>
      </scsc-form-field>
      <div slot="footer" class="flex gap-2">
        <scsc-button variant="ghost" (click)="cancel()">Cancel</scsc-button>
        <scsc-button variant="primary" [disabled]="!note().trim()" (click)="add()"
          >Add note</scsc-button
        >
      </div>
    </scsc-modal>
  \`,
})
export class ModalBeforeCloseDemo {
  private readonly dialogs = inject(ScscDialogService);

  protected readonly open = signal(false);
  protected readonly note = signal('');
  protected readonly lastReason = signal<ScscOverlayCloseReason | null>(null);

  /** Esc, the backdrop and the Close button ask first when there is a draft. */
  protected readonly confirmDiscard: ScscBeforeClose = () =>
    !this.note().trim() ||
    this.dialogs.confirm({
      title: 'Discard this note?',
      message: 'It has not been added to the case file.',
      confirmText: 'Discard note',
      cancelText: 'Keep editing',
      tone: 'warning',
    });

  protected start(): void {
    this.note.set('');
    this.open.set(true);
  }

  /** Your own buttons close it directly, so ask here too. */
  protected async cancel(): Promise<void> {
    if (await this.confirmDiscard('button')) this.open.set(false);
  }

  protected add(): void {
    this.note.set('');
    this.open.set(false);
  }
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button variant="secondary" outline (click)="start()">Add a case note\u2026</scsc-button>
  @if (lastReason(); as reason) {
    <scsc-text size="sm" tone="muted">(closed) reported: {{ reason }}</scsc-text>
  }
</div>

<scsc-modal
  [(open)]="open"
  title="Add a case note"
  description="Notes are visible to court staff only."
  [beforeClose]="confirmDiscard"
  (closed)="lastReason.set($event)"
>
  <scsc-form-field label="Note" for="case-note">
    <textarea
      scsc-textarea
      id="case-note"
      rows="4"
      [value]="note()"
      (input)="note.set($any($event.target).value)"
    ></textarea>
  </scsc-form-field>
  <div slot="footer" class="flex gap-2">
    <scsc-button variant="ghost" (click)="cancel()">Cancel</scsc-button>
    <scsc-button variant="primary" [disabled]="!note().trim()" (click)="add()"
      >Add note</scsc-button
    >
  </div>
</scsc-modal>
`},"modal-blocking":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscFormField, ScscInput, ScscModal } from '@scscourt/design';

@Component({
  selector: 'app-modal-blocking-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscFormField, ScscInput, ScscModal],
  template: \`
    <scsc-button variant="secondary" outline (click)="open.set(true)">Enter clerk PIN</scsc-button>

    <!-- dismissable=false: no close button, no backdrop click, Esc is ignored -->
    <scsc-modal [(open)]="open" title="Clerk authorization required" [dismissable]="false">
      <scsc-form-field label="PIN" for="pin" hint="Any 4 digits for this demo">
        <input
          scsc-input
          id="pin"
          type="password"
          inputmode="numeric"
          maxlength="4"
          [value]="pin()"
          (input)="pin.set($any($event.target).value)"
        />
      </scsc-form-field>
      <div slot="footer">
        <scsc-button variant="primary" [disabled]="pin().length < 4" (click)="authorize()"
          >Authorize</scsc-button
        >
      </div>
    </scsc-modal>

    @if (authorized()) {
      <p class="mt-3 text-sm text-success">Authorized.</p>
    }
  \`,
})
export class ModalBlockingDemo {
  protected readonly open = signal(false);
  protected readonly pin = signal('');
  protected readonly authorized = signal(false);

  protected authorize(): void {
    this.authorized.set(true);
    this.open.set(false);
    this.pin.set('');
  }
}
`,html:`<scsc-button variant="secondary" outline (click)="open.set(true)">Enter clerk PIN</scsc-button>

<!-- dismissable=false: no close button, no backdrop click, Esc is ignored -->
<scsc-modal [(open)]="open" title="Clerk authorization required" [dismissable]="false">
  <scsc-form-field label="PIN" for="pin" hint="Any 4 digits for this demo">
    <input
      scsc-input
      id="pin"
      type="password"
      inputmode="numeric"
      maxlength="4"
      [value]="pin()"
      (input)="pin.set($any($event.target).value)"
    />
  </scsc-form-field>
  <div slot="footer">
    <scsc-button variant="primary" [disabled]="pin().length < 4" (click)="authorize()"
      >Authorize</scsc-button
    >
  </div>
</scsc-modal>

@if (authorized()) {
  <p class="mt-3 text-sm text-success">Authorized.</p>
}
`},"modal-form":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAutofocus,
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscModal,
  ScscSelect,
  ScscText,
  ScscTextarea,
} from '@scscourt/design';

type Field = 'date' | 'time' | 'reason';

@Component({
  selector: 'app-modal-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAutofocus,
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscModal,
    ScscSelect,
    ScscText,
    ScscTextarea,
  ],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button variant="secondary" outline (click)="reschedule()"
        >Reschedule hearing\u2026</scsc-button
      >
      <scsc-text size="sm" tone="muted">Motion to Compel \xB7 {{ scheduled() }}</scsc-text>
    </div>

    <scsc-modal [(open)]="open" title="Reschedule the Motion to Compel">
      <!-- Buttons inside the form (not the footer slot) so Enter submits and validation runs. -->
      <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
        <div class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="New date"
            for="modal-form-date"
            required
            [error]="errorFor('date')"
          >
            <input
              scsc-input
              id="modal-form-date"
              type="date"
              min="2026-10-01"
              formControlName="date"
              scscAutofocus
              [invalid]="invalid('date')"
            />
          </scsc-form-field>
          <scsc-form-field label="Time" for="modal-form-time" required [error]="errorFor('time')">
            <select
              scsc-select
              id="modal-form-time"
              formControlName="time"
              [invalid]="invalid('time')"
            >
              <option value="">Select\u2026</option>
              <option>8:30 AM</option>
              <option>9:00 AM</option>
              <option>1:30 PM</option>
            </select>
          </scsc-form-field>
        </div>
        <scsc-form-field
          label="Reason"
          for="modal-form-reason"
          required
          [error]="errorFor('reason')"
        >
          <textarea
            scsc-textarea
            id="modal-form-reason"
            rows="3"
            formControlName="reason"
            [invalid]="invalid('reason')"
          ></textarea>
        </scsc-form-field>

        <div class="mt-2 flex justify-end gap-2">
          <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
          <scsc-button variant="primary" nativeType="submit">Reschedule</scsc-button>
        </div>
      </form>
    </scsc-modal>
  \`,
})
export class ModalFormDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly open = signal(false);
  protected readonly scheduled = signal('Oct 14, 2026 at 9:00 AM');

  protected readonly form = this.fb.nonNullable.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    reason: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected reschedule(): void {
    this.form.reset();
    this.open.set(true);
  }

  protected invalid(name: Field): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.dirty || c.touched);
  }

  protected errorFor(name: Field): string {
    if (!this.invalid(name)) return '';
    return this.form.controls[name].hasError('minlength')
      ? 'Give the reason in at least 10 characters.'
      : 'This field is required.';
  }

  protected save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const { date, time } = this.form.getRawValue();
    const [y, m, d] = date.split('-').map(Number);
    const day = new Date(y, m - 1, d).toLocaleDateString('en-US', { dateStyle: 'medium' });
    this.scheduled.set(\`\${day} at \${time}\`);
    this.open.set(false);
  }
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button variant="secondary" outline (click)="reschedule()"
    >Reschedule hearing\u2026</scsc-button
  >
  <scsc-text size="sm" tone="muted">Motion to Compel \xB7 {{ scheduled() }}</scsc-text>
</div>

<scsc-modal [(open)]="open" title="Reschedule the Motion to Compel">
  <!-- Buttons inside the form (not the footer slot) so Enter submits and validation runs. -->
  <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
    <div class="grid gap-4 sm:grid-cols-2">
      <scsc-form-field
        label="New date"
        for="modal-form-date"
        required
        [error]="errorFor('date')"
      >
        <input
          scsc-input
          id="modal-form-date"
          type="date"
          min="2026-10-01"
          formControlName="date"
          scscAutofocus
          [invalid]="invalid('date')"
        />
      </scsc-form-field>
      <scsc-form-field label="Time" for="modal-form-time" required [error]="errorFor('time')">
        <select
          scsc-select
          id="modal-form-time"
          formControlName="time"
          [invalid]="invalid('time')"
        >
          <option value="">Select\u2026</option>
          <option>8:30 AM</option>
          <option>9:00 AM</option>
          <option>1:30 PM</option>
        </select>
      </scsc-form-field>
    </div>
    <scsc-form-field
      label="Reason"
      for="modal-form-reason"
      required
      [error]="errorFor('reason')"
    >
      <textarea
        scsc-textarea
        id="modal-form-reason"
        rows="3"
        formControlName="reason"
        [invalid]="invalid('reason')"
      ></textarea>
    </scsc-form-field>

    <div class="mt-2 flex justify-end gap-2">
      <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
      <scsc-button variant="primary" nativeType="submit">Reschedule</scsc-button>
    </div>
  </form>
</scsc-modal>
`},"modal-sizes":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscModal, type ScscModalSize } from '@scscourt/design';

interface DocketEntry {
  id: number;
  date: string;
  title: string;
}

@Component({
  selector: 'app-modal-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscModal],
  template: \`
    <div class="flex flex-wrap gap-2">
      @for (s of sizes; track s.size) {
        <scsc-button variant="secondary" outline (click)="show(s.size)">{{ s.label }}</scsc-button>
      }
    </div>

    <!-- Below the sm breakpoint every size is a sheet from the bottom edge. -->
    <scsc-modal
      [(open)]="open"
      [size]="size()"
      title="Register of actions \xB7 24CV012345"
      description="Alvarez v. Pacific Transit. The title and the Done button stay in view while the entries scroll."
    >
      <ol class="divide-y divide-base-300">
        @for (e of entries; track e.id) {
          <li class="py-2">
            <p class="font-medium">{{ e.title }}</p>
            <p class="text-sm text-base-content/70 tnum">{{ e.date }}</p>
          </li>
        }
      </ol>
      <div slot="footer">
        <scsc-button variant="primary" (click)="open.set(false)">Done</scsc-button>
      </div>
    </scsc-modal>
  \`,
})
export class ModalSizesDemo {
  protected readonly open = signal(false);
  protected readonly size = signal<ScscModalSize>('md');

  protected readonly sizes: { size: ScscModalSize; label: string }[] = [
    { size: 'sm', label: 'Small (24rem)' },
    { size: 'md', label: 'Medium (32rem)' },
    { size: 'lg', label: 'Large (42rem)' },
    { size: 'xl', label: 'Extra large (56rem)' },
    { size: 'full', label: 'Full screen' },
  ];

  protected readonly entries: DocketEntry[] = [
    { id: 1, date: 'Mar 4, 2024', title: 'Complaint filed' },
    { id: 2, date: 'Mar 4, 2024', title: 'Summons issued' },
    { id: 3, date: 'Mar 21, 2024', title: 'Proof of service of summons' },
    { id: 4, date: 'Apr 18, 2024', title: 'Answer to complaint' },
    { id: 5, date: 'May 2, 2024', title: 'Notice of case management conference' },
    { id: 6, date: 'Jun 10, 2024', title: 'Case management statement (plaintiff)' },
    { id: 7, date: 'Jun 11, 2024', title: 'Case management statement (defendant)' },
    { id: 8, date: 'Jun 24, 2024', title: 'Case management conference held' },
    { id: 9, date: 'Aug 5, 2024', title: 'Motion to compel further responses' },
    { id: 10, date: 'Aug 26, 2024', title: 'Opposition to motion to compel' },
    { id: 11, date: 'Sep 3, 2024', title: 'Reply in support of motion to compel' },
    { id: 12, date: 'Sep 12, 2024', title: 'Order granting motion to compel in part' },
    { id: 13, date: 'Jan 14, 2025', title: 'Notice of trial setting conference' },
    { id: 14, date: 'Feb 20, 2025', title: 'Trial setting conference held' },
  ];

  protected show(size: ScscModalSize): void {
    this.size.set(size);
    this.open.set(true);
  }
}
`,html:`<div class="flex flex-wrap gap-2">
  @for (s of sizes; track s.size) {
    <scsc-button variant="secondary" outline (click)="show(s.size)">{{ s.label }}</scsc-button>
  }
</div>

<!-- Below the sm breakpoint every size is a sheet from the bottom edge. -->
<scsc-modal
  [(open)]="open"
  [size]="size()"
  title="Register of actions \xB7 24CV012345"
  description="Alvarez v. Pacific Transit. The title and the Done button stay in view while the entries scroll."
>
  <ol class="divide-y divide-base-300">
    @for (e of entries; track e.id) {
      <li class="py-2">
        <p class="font-medium">{{ e.title }}</p>
        <p class="text-sm text-base-content/70 tnum">{{ e.date }}</p>
      </li>
    }
  </ol>
  <div slot="footer">
    <scsc-button variant="primary" (click)="open.set(false)">Done</scsc-button>
  </div>
</scsc-modal>
`}};var Ue={slug:`modal`,name:`Modal`,classes:[`ScscModal`],category:`Overlays & Feedback`,whenToUse:[`**Modal vs dialog service vs drawer:** a modal is markup you declare, the dialog service is code that asks, and a drawer is a side task beside the page. See [Choosing an overlay](/docs/patterns/choosing-an-overlay).`,`A decision or a short task that must be completed before continuing: confirm a destructive action with details, collect two or three fields.`,"With a form inside, keep the Cancel / Submit buttons in the `<form>` rather than `[slot=footer]` so native submit and Enter work; reset the form when opening.","For a yes/no, an acknowledgement or one text answer from code, `ScscDialogService` (confirm / alert / prompt) needs no template; `ScscDialogService.open()` puts your own component in a modal from code.","Longer forms and detail views belong in `scsc-drawer` or a page, not a modal."],demos:[{id:`modal-basic`,title:`Confirm an action`,description:'Two-way `[(open)]`; the footer slot holds the buttons. `role="alertdialog"` and `size="sm"` for a question that interrupts; focus starts on Cancel, the first footer button.',component:N,source:_[`modal-basic`]},{id:`modal-sizes`,title:`Sizes and a long body`,description:"`size` sets the width from `sm` up (`sm`, `md`, `lg`, `xl`, `full`); below `sm` every size is a sheet from the bottom edge. The title, `description` and footer stay in view while the body scrolls.",component:I,source:_[`modal-sizes`]},{id:`modal-before-close`,title:`Unsaved changes`,description:"`beforeClose` asks through `ScscDialogService.confirm()` before `Esc`, the backdrop or the Close button discards a draft (the confirm stacks on top); `(closed)` reports why it closed.",component:R,source:_[`modal-before-close`]},{id:`modal-blocking`,title:`Blocking dialog`,description:'`[dismissable]="false"` removes the close button and backdrop dismissal, and `Esc` is ignored.',component:P,source:_[`modal-blocking`]},{id:`modal-form`,title:`Form with validation`,description:"A Reactive Form in the body with its buttons inside the `<form>`, so Enter submits and the modal closes only when the form is valid; `scscAutofocus` puts focus in the first field each time it opens.",component:q,source:_[`modal-form`]}],a11y:["Built on the native `<dialog>` with `showModal()`: focus is trapped, the page behind is inert, and `Esc` closes it (unless `dismissable` is off).","Always name it: `title` becomes the heading (an `<h2>`; set `headingLevel` for a page where another rank fits) and the accessible name. Phrase it as the question or the task. Without a title, point `ariaLabelledby` at your own heading. `description` is read with the name.",'Use `role="alertdialog"` for a confirmation or warning that interrupts the user, and keep its message short.','Focus starts on the first `scscAutofocus` element, else the first control in the body or footer (not the Close button), and returns to the element that opened the modal when it closes, so open it from a button. `initialFocus="none"` focuses the dialog itself, for long text read from the top.',`While the body overflows it becomes a focusable region named by the title, so keyboard users can scroll it; the header and footer never cover it.`,"The click-away backdrop is for pointer users only: it is not a Tab stop and is hidden from assistive technology, since the Close button and `Esc` do the same."],keyboard:[{keys:`Tab / Shift + Tab`,action:"Focus starts on the first `scscAutofocus` element, else the first control in the body or footer (see `initialFocus`), and cycles through the modal only, including the Close button and a scrolling body; the page behind is inert."},{keys:`Enter / Space`,action:"On the Close button (only when `dismissable`): closes the modal, as Escape does, after `beforeClose` agrees."},{keys:`Escape`,action:'Closes the modal (after `beforeClose` agrees) and returns focus to the element that had it before the modal opened. With `[dismissable]="false"` it does nothing: the user answers through the footer buttons. A popup inside that handles Escape itself stays in charge of it.'},{keys:`Arrow keys / Page Up / Page Down`,action:`On the focused body region: scrolls a long body.`}],appMustProvide:["A `title` phrased as the question or the task, or `ariaLabelledby` pointing at your own heading.",'A button that opens it, so focus can return there; `role="alertdialog"` only for interruptions.'],related:[`dialog`,`drawer`,`popover`]};export{Ue as MODAL_DOCS};