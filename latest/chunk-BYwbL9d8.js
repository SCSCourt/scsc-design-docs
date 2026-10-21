import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Q as Gue,Xa as Pv,Y as Fs,Yo as iD,Zi as za,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ks as t_,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import{n as Lt,r as Nt}from"./chunk-D2cerPAB.js";var w=class i{time=q(`13:30`);static ɵfac=function(t){return new(t||i)};static ɵcmp=Af({type:i,selectors:[[`app-time-picker-basic-demo`]],decls:10,vars:2,consts:[[1,`mb-1.5`,`text-sm`,`font-medium`],[3,`ngModelChange`,`ngModel`],[1,`mt-1`,`text-sm`,`text-base-content/70`],[1,`mt-4`,`text-sm`,`text-base-content/70`]],template:function(t,a){t&1&&(Ga(0,`fieldset`)(1,`legend`,0),G_(2,`Hearing time`),Lf(),Ga(3,`scsc-time-picker`,1),HS(),sD(`ngModelChange`,function(_){return Y_(a.time,_)||(a.time=_),_}),Lf(),Ga(4,`p`,2),G_(5,`5-minute steps; stored as 24-hour HH:mm.`),Lf()(),Ga(6,`p`,3),G_(7,` Value: `),Ga(8,`code`),G_(9),Lf()()),t&2&&(Jb(3),iD(`ngModel`,a.time),zS(),Jb(6),nD(a.time()))},dependencies:[Gue,Hue,zz,Lt],encapsulation:2})};function L(i,e){if(i&1&&(Ga(0,`p`,5),G_(1),Lf()),i&2){let t=y_();Jb(),nD(t.startError())}}function z(i,e){if(i&1&&(Ga(0,`p`,5),G_(1),Lf()),i&2){let t=y_();Jb(),nD(t.endError())}}function J(i,e){if(i&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),i&2){let t=y_();Jb(),nD(t.reserved())}}function K(i){let e=i.value;return e&&(e<`08:30`||e>`16:30`)?{businessHours:!0}:null}function Q(i){let{start:e,end:t}=i.value;return e&&t&&t<=e?{endBeforeStart:!0}:null}var A=class i{fb=g(Wue);reserved=q(``);form=this.fb.nonNullable.group({start:[`09:00`,K],end:[`10:30`,K]},{validators:Q});startError(){let e=this.form.controls.start;return e.hasError(`businessHours`)&&e.touched?`Start between 8:30 AM and 4:30 PM.`:``}endError(){let e=this.form.controls.end;return e.touched?e.hasError(`businessHours`)?`End by 4:30 PM.`:this.form.hasError(`endBeforeStart`)?`End after the start time.`:``:``}submit(){this.form.markAllAsTouched();let{start:e,end:t}=this.form.getRawValue();this.reserved.set(this.form.valid?`Room 2B is yours from `+e+` to `+t+`.`:``)}static ɵfac=function(t){return new(t||i)};static ɵcmp=Af({type:i,selectors:[[`app-time-picker-range-demo`]],decls:20,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`text-sm`,`text-base-content/70`],[1,`flex`,`flex-wrap`,`gap-6`],[1,`mb-1.5`,`text-sm`,`font-medium`],[`formControlName`,`start`],[`role`,`alert`,1,`mt-1`,`text-sm`,`text-error`],[`formControlName`,`end`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Room reserved`]],template:function(t,a){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return a.submit()}),Ga(1,`p`,1),G_(2,` Mediation room 2B · Downtown Superior Court · Thursday 15 Oct 2026 `),Lf(),Ga(3,`div`,2)(4,`fieldset`)(5,`legend`,3),G_(6,`Start`),Lf(),Ga(7,`scsc-time-picker`,4),HS(),Lf(),JT(8,L,2,1,`p`,5),Lf(),Ga(9,`fieldset`)(10,`legend`,3),G_(11,`End`),Lf(),Ga(12,`scsc-time-picker`,6),HS(),Lf(),JT(13,z,2,1,`p`,5),Lf()(),Ga(14,`p`,1),G_(15,`The courthouse is open 8:30 AM to 4:30 PM.`),Lf(),Ga(16,`div`)(17,`scsc-button`,7),G_(18,`Reserve room`),Lf()(),JT(19,J,2,1,`scsc-alert`,8),Lf()),t&2&&(Pv(`formGroup`,a.form),Jb(7),zS(),Jb(),t_(a.startError()?8:-1),Jb(4),zS(),Jb(),t_(a.endError()?13:-1),Jb(6),t_(a.reserved()?19:-1))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,za,sn,Lt],encapsulation:2})};function X(i,e){if(i&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),i&2){let t=y_();Jb(),nD(t.summary())}}var N=class i{fb=g(Wue);summary=q(``);form=this.fb.group({date:[``,Fs.required],time:[`09:00`,Fs.required]});dateError(){let e=this.form.controls.date;return e.invalid&&(e.dirty||e.touched)?`Pick a hearing date.`:``}submit(){this.form.markAllAsTouched();let{date:e,time:t}=this.form.value;this.summary.set(this.form.valid?`24CV012345 \u2014 Motion to compel \u2014 ${e} at ${t} \u2014 Dept. 7`:``)}static ɵfac=function(t){return new(t||i)};static ɵcmp=Af({type:i,selectors:[[`app-time-picker-reactive-demo`]],decls:13,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Hearing date`,`for`,`tp-date`,`required`,``,3,`error`],[`inputId`,`tp-date`,`formControlName`,`date`,3,`invalid`],[1,`mb-1.5`,`text-sm`,`font-medium`],[`formControlName`,`time`],[1,`mt-1`,`text-sm`,`text-base-content/70`],[1,`flex`,`gap-2`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`info`,`title`,`Scheduled`]],template:function(t,a){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return a.submit()}),Ga(1,`scsc-form-field`,1)(2,`scsc-date-picker`,2),HS(),Lf()(),Ga(3,`fieldset`)(4,`legend`,3),G_(5,`Start time`),Lf(),Ga(6,`scsc-time-picker`,4),HS(),Lf(),Ga(7,`p`,5),G_(8,`Calendar sessions run 8:30 AM to 4:30 PM`),Lf()(),Ga(9,`div`,6)(10,`scsc-button`,7),G_(11,`Add to calendar`),Lf()(),JT(12,X,2,1,`scsc-alert`,8),Lf()),t&2&&(Pv(`formGroup`,a.form),Jb(),Pv(`error`,a.dateError()),Jb(),Pv(`invalid`,!!a.dateError()),zS(),Jb(4),zS(),Jb(6),t_(a.summary()?12:-1))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,za,sn,Vn,Nt,Lt],encapsulation:2})};var R={"time-picker-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscTimePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-time-picker-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscTimePicker],
  template: \`
    <!-- The fieldset's legend names the Hour, Minute and AM/PM selects as one group. -->
    <fieldset>
      <legend class="mb-1.5 text-sm font-medium">Hearing time</legend>
      <scsc-time-picker [(ngModel)]="time" />
      <p class="mt-1 text-sm text-base-content/70">5-minute steps; stored as 24-hour HH:mm.</p>
    </fieldset>
    <p class="mt-4 text-sm text-base-content/70">
      Value: <code>{{ time() }}</code>
    </p>
  \`,
})
export class TimePickerBasicDemo {
  protected readonly time = signal('13:30');
}
`,html:`<!-- The fieldset's legend names the Hour, Minute and AM/PM selects as one group. -->
<fieldset>
  <legend class="mb-1.5 text-sm font-medium">Hearing time</legend>
  <scsc-time-picker [(ngModel)]="time" />
  <p class="mt-1 text-sm text-base-content/70">5-minute steps; stored as 24-hour HH:mm.</p>
</fieldset>
<p class="mt-4 text-sm text-base-content/70">
  Value: <code>{{ time() }}</code>
</p>
`},"time-picker-range":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
} from '@angular/forms';
import { ScscAlert, ScscButton } from '@scscourt/design';
import { ScscTimePicker } from '@scscourt/design/pickers';

/** "HH:mm" strings compare correctly as text. */
function businessHours(control: AbstractControl<string>): ValidationErrors | null {
  const t = control.value;
  return t && (t < '08:30' || t > '16:30') ? { businessHours: true } : null;
}

function endAfterStart(group: AbstractControl): ValidationErrors | null {
  const { start, end } = group.value as { start: string; end: string };
  return start && end && end <= start ? { endBeforeStart: true } : null;
}

@Component({
  selector: 'app-time-picker-range-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscTimePicker],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <p class="text-sm text-base-content/70">
        Mediation room 2B \xB7 Downtown Superior Court \xB7 Thursday 15 Oct 2026
      </p>
      <!-- A fieldset per picker names its three selects: "Start, Hour", "End, Hour". -->
      <div class="flex flex-wrap gap-6">
        <fieldset>
          <legend class="mb-1.5 text-sm font-medium">Start</legend>
          <scsc-time-picker formControlName="start" />
          @if (startError()) {
            <p class="mt-1 text-sm text-error" role="alert">{{ startError() }}</p>
          }
        </fieldset>
        <fieldset>
          <legend class="mb-1.5 text-sm font-medium">End</legend>
          <scsc-time-picker formControlName="end" />
          @if (endError()) {
            <p class="mt-1 text-sm text-error" role="alert">{{ endError() }}</p>
          }
        </fieldset>
      </div>
      <p class="text-sm text-base-content/70">The courthouse is open 8:30 AM to 4:30 PM.</p>

      <div>
        <scsc-button variant="primary" nativeType="submit">Reserve room</scsc-button>
      </div>

      @if (reserved()) {
        <scsc-alert status="success" title="Room reserved">{{ reserved() }}</scsc-alert>
      }
    </form>
  \`,
})
export class TimePickerRangeDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly reserved = signal('');

  protected readonly form = this.fb.nonNullable.group(
    {
      start: ['09:00', businessHours],
      end: ['10:30', businessHours],
    },
    { validators: endAfterStart },
  );

  protected startError(): string {
    const c = this.form.controls.start;
    return c.hasError('businessHours') && c.touched ? 'Start between 8:30 AM and 4:30 PM.' : '';
  }

  protected endError(): string {
    const c = this.form.controls.end;
    if (!c.touched) return '';
    if (c.hasError('businessHours')) return 'End by 4:30 PM.';
    return this.form.hasError('endBeforeStart') ? 'End after the start time.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const { start, end } = this.form.getRawValue();
    this.reserved.set(this.form.valid ? 'Room 2B is yours from ' + start + ' to ' + end + '.' : '');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <p class="text-sm text-base-content/70">
    Mediation room 2B \xB7 Downtown Superior Court \xB7 Thursday 15 Oct 2026
  </p>
  <!-- A fieldset per picker names its three selects: "Start, Hour", "End, Hour". -->
  <div class="flex flex-wrap gap-6">
    <fieldset>
      <legend class="mb-1.5 text-sm font-medium">Start</legend>
      <scsc-time-picker formControlName="start" />
      @if (startError()) {
        <p class="mt-1 text-sm text-error" role="alert">{{ startError() }}</p>
      }
    </fieldset>
    <fieldset>
      <legend class="mb-1.5 text-sm font-medium">End</legend>
      <scsc-time-picker formControlName="end" />
      @if (endError()) {
        <p class="mt-1 text-sm text-error" role="alert">{{ endError() }}</p>
      }
    </fieldset>
  </div>
  <p class="text-sm text-base-content/70">The courthouse is open 8:30 AM to 4:30 PM.</p>

  <div>
    <scsc-button variant="primary" nativeType="submit">Reserve room</scsc-button>
  </div>

  @if (reserved()) {
    <scsc-alert status="success" title="Room reserved">{{ reserved() }}</scsc-alert>
  }
</form>
`},"time-picker-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField } from '@scscourt/design';
import { ScscDatePicker, ScscTimePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-time-picker-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFormField,
    ScscDatePicker,
    ScscTimePicker,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Hearing date" for="tp-date" required [error]="dateError()">
        <scsc-date-picker inputId="tp-date" formControlName="date" [invalid]="!!dateError()" />
      </scsc-form-field>

      <fieldset>
        <legend class="mb-1.5 text-sm font-medium">Start time</legend>
        <scsc-time-picker formControlName="time" />
        <p class="mt-1 text-sm text-base-content/70">Calendar sessions run 8:30 AM to 4:30 PM</p>
      </fieldset>

      <div class="flex gap-2">
        <scsc-button variant="primary" nativeType="submit">Add to calendar</scsc-button>
      </div>

      @if (summary()) {
        <scsc-alert status="info" title="Scheduled">{{ summary() }}</scsc-alert>
      }
    </form>
  \`,
})
export class TimePickerReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly summary = signal('');

  protected readonly form = this.fb.group({
    date: ['', Validators.required],
    time: ['09:00', Validators.required],
  });

  protected dateError(): string {
    const c = this.form.controls.date;
    return c.invalid && (c.dirty || c.touched) ? 'Pick a hearing date.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const { date, time } = this.form.value;
    this.summary.set(
      this.form.valid ? \`24CV012345 \u2014 Motion to compel \u2014 \${date} at \${time} \u2014 Dept. 7\` : '',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field label="Hearing date" for="tp-date" required [error]="dateError()">
    <scsc-date-picker inputId="tp-date" formControlName="date" [invalid]="!!dateError()" />
  </scsc-form-field>

  <fieldset>
    <legend class="mb-1.5 text-sm font-medium">Start time</legend>
    <scsc-time-picker formControlName="time" />
    <p class="mt-1 text-sm text-base-content/70">Calendar sessions run 8:30 AM to 4:30 PM</p>
  </fieldset>

  <div class="flex gap-2">
    <scsc-button variant="primary" nativeType="submit">Add to calendar</scsc-button>
  </div>

  @if (summary()) {
    <scsc-alert status="info" title="Scheduled">{{ summary() }}</scsc-alert>
  }
</form>
`}};var Ce={slug:`time-picker`,name:`Time Picker`,classes:[`ScscTimePicker`],category:`Forms`,whenToUse:['A clock time chosen from a fixed grid: hearing start, calendar call, filing cutoff. The value is a 24-hour `HH:mm` string (`"13:30"`), which compares correctly as text.',"Minutes step by `step` (5 by default; 15 for a court calendar) and there are no seconds. A value between steps (`09:07`) is kept and shown as its own choice.","It is a `ControlValueAccessor`: `formControlName`, `[formControl]` and `[(ngModel)]` all work. An empty value shows three blank selects (never a made-up 9:00 AM) and the control emits `null` until hour, minute and AM/PM are all set; picking an hour fills a blank minute with :00 and a blank period with AM.","Values written by the form (an initial value, `patchValue`, `reset`) show immediately. Mark it with `invalid` and `required`, or let an enclosing `scsc-form-field` error and `required` do it.","Pair it with `scsc-date-picker` for a full date-time; keep them as two controls so each can be validated on its own."],setup:`// import from the secondary entry point, not from '@scscourt/design'
import { ScscTimePicker } from '@scscourt/design/pickers';`,demos:[{id:`time-picker-basic`,title:`Two-way binding`,description:"`[(ngModel)]` on a signal inside a `fieldset` whose legend names the three selects.",component:w,source:R[`time-picker-basic`]},{id:`time-picker-reactive`,title:`Date and time in one form`,description:"Combined with `scsc-date-picker` under Reactive Forms; both are plain controls of the group.",component:N,source:R[`time-picker-reactive`]},{id:`time-picker-range`,title:`Start and end with validation`,description:`A room reservation: each time must fall within business hours, and a group validator keeps the end after the start.`,component:A,source:R[`time-picker-range`]}],a11y:['Three native `<select>` elements ("Hour", "Minute", "AM or PM", from the label pack) in one `role="group"`, so keyboard and screen-reader behaviour is the browser default.',"The group is named by an enclosing `scsc-form-field` label (`aria-labelledby`; the label also focuses the hour), by a `scsc-fieldset` legend, or by the `label` input. The field hint and error describe the group, and `aria-invalid` / `aria-required` reach every select.","Validate presence with `Validators.required` (an incomplete time is `null`) and business hours in your own validator."],keyboard:[{keys:`Tab / Shift+Tab`,action:`Hour → Minute → AM or PM.`},{keys:`ArrowUp / ArrowDown, letters and digits`,action:`Change the focused select (the browser default).`}],appMustProvide:["A name for the group: an enclosing `scsc-form-field` label, an `scsc-fieldset` legend, or `label`.",`Business-hours rules in your own validator, with an error that names the allowed hours.`],related:[`date-picker`,`date-range-picker`,`select`,`form-field`]};export{Ce as TIME_PICKER_DOCS};