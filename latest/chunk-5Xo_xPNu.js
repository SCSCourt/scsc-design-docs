import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Q as Gue,Ss as rD,Xa as Pv,Yo as iD,Zi as za,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ks as t_,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import{i as Ot,t as It}from"./chunk-D2cerPAB.js";import{t as ie}from"./chunk-zi2K3tcO.js";var S={"date-range-picker-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ScscAlert, ScscButton } from '@scscourt/design';
import { type ScscDateRange, ScscDateRangePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-range-picker-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscDateRangePicker],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-xl flex-col gap-4" novalidate>
      <scsc-date-range-picker
        formControlName="leave"
        label="Juror unavailable"
        hint="From 2 to 14 days, starting October 1 or later"
        required
        [minSpan]="2"
        [maxSpan]="14"
        min="2026-10-01"
        today="2026-09-30"
        [confirm]="false"
        [months]="1"
        [error]="error()"
      />
      <div>
        <scsc-button variant="primary" nativeType="submit">Request excusal</scsc-button>
      </div>
      @if (sent()) {
        <scsc-alert status="success" title="Request sent">{{ sent() }}</scsc-alert>
      }
    </form>
  \`,
})
export class DateRangePickerReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly sent = signal('');
  private readonly submitted = signal(false);
  protected readonly form = this.fb.group({
    leave: this.fb.control<ScscDateRange>({ start: null, end: null }),
  });

  protected error(): string {
    const c = this.form.controls.leave;
    if (!this.submitted() && !c.touched) return '';
    if (c.hasError('required')) return 'Choose the first and last day you are unavailable.';
    if (c.hasError('scscDateRangeIncomplete')) return 'Choose both a start and an end date.';
    if (c.hasError('scscDateParse')) return 'Enter the dates as MM/DD/YYYY.';
    if (c.hasError('scscDateRangeOrder')) return 'The end date must be after the start date.';
    if (c.hasError('scscDateMin')) return 'Start on October 1, 2026 or later.';
    if (c.hasError('scscDateRangeSpan')) return 'Choose from 2 to 14 days.';
    return '';
  }

  protected submit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    const { start, end } = this.form.value.leave ?? { start: null, end: null };
    this.sent.set(this.form.valid ? \`Juror 204-118: unavailable \${start} to \${end}.\` : '');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-xl flex-col gap-4" novalidate>
  <scsc-date-range-picker
    formControlName="leave"
    label="Juror unavailable"
    hint="From 2 to 14 days, starting October 1 or later"
    required
    [minSpan]="2"
    [maxSpan]="14"
    min="2026-10-01"
    today="2026-09-30"
    [confirm]="false"
    [months]="1"
    [error]="error()"
  />
  <div>
    <scsc-button variant="primary" nativeType="submit">Request excusal</scsc-button>
  </div>
  @if (sent()) {
    <scsc-alert status="success" title="Request sent">{{ sent() }}</scsc-alert>
  }
</form>
`},"date-range-picker-reports":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SCSC_RANGE_PRESETS,
  type ScscDateRange,
  ScscDateRangePicker,
} from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-range-picker-reports-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscDateRangePicker],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <scsc-date-range-picker
        label="Filings received"
        hint="Up to 92 days, ending today or earlier"
        [(ngModel)]="period"
        [presets]="presets"
        [maxSpan]="92"
        max="2026-09-30"
        today="2026-09-30"
      />
      <p class="text-sm text-base-content/70">
        Value:
        <code class="tnum">{{ period().start ?? 'null' }} to {{ period().end ?? 'null' }}</code>
      </p>
    </div>
  \`,
})
export class DateRangePickerReportsDemo {
  protected readonly presets = SCSC_RANGE_PRESETS;
  protected readonly period = signal<ScscDateRange>({ start: '2026-09-01', end: '2026-09-30' });
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <scsc-date-range-picker
    label="Filings received"
    hint="Up to 92 days, ending today or earlier"
    [(ngModel)]="period"
    [presets]="presets"
    [maxSpan]="92"
    max="2026-09-30"
    today="2026-09-30"
  />
  <p class="text-sm text-base-content/70">
    Value:
    <code class="tnum">{{ period().start ?? 'null' }} to {{ period().end ?? 'null' }}</code>
  </p>
</div>
`}};function W(r,e){if(r&1&&(Ga(0,`scsc-alert`,3),G_(1),Lf()),r&2){let t=y_();Jb(),nD(t.sent())}}var h=class r{fb=g(Wue);sent=q(``);submitted=q(!1);form=this.fb.group({leave:this.fb.control({start:null,end:null})});error(){let e=this.form.controls.leave;return!this.submitted()&&!e.touched?``:e.hasError(`required`)?`Choose the first and last day you are unavailable.`:e.hasError(`scscDateRangeIncomplete`)?`Choose both a start and an end date.`:e.hasError(`scscDateParse`)?`Enter the dates as MM/DD/YYYY.`:e.hasError(`scscDateRangeOrder`)?`The end date must be after the start date.`:e.hasError(`scscDateMin`)?`Start on October 1, 2026 or later.`:e.hasError(`scscDateRangeSpan`)?`Choose from 2 to 14 days.`:``}submit(){this.submitted.set(!0),this.form.markAllAsTouched();let{start:e,end:t}=this.form.value.leave??{start:null,end:null};this.sent.set(this.form.valid?`Juror 204-118: unavailable ${e} to ${t}.`:``)}static ɵfac=function(t){return new(t||r)};static ɵcmp=Af({type:r,selectors:[[`app-date-range-picker-reactive-demo`]],decls:6,vars:7,consts:[[`novalidate`,``,1,`flex`,`max-w-xl`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`formControlName`,`leave`,`label`,`Juror unavailable`,`hint`,`From 2 to 14 days, starting October 1 or later`,`required`,``,`min`,`2026-10-01`,`today`,`2026-09-30`,3,`minSpan`,`maxSpan`,`confirm`,`months`,`error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Request sent`]],template:function(t,a){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return a.submit()}),Ga(1,`scsc-date-range-picker`,1),HS(),Lf(),Ga(2,`div`)(3,`scsc-button`,2),G_(4,`Request excusal`),Lf()(),JT(5,W,2,1,`scsc-alert`,3),Lf()),t&2&&(Pv(`formGroup`,a.form),Jb(),Pv(`minSpan`,2)(`maxSpan`,14)(`confirm`,!1)(`months`,1)(`error`,a.error()),zS(),Jb(4),t_(a.sent()?5:-1))},dependencies:[Kue,Bue,Hue,que,WA,Vz,Xz,za,sn,It],encapsulation:2})};var me={slug:`date-range-picker`,name:`Date Range Picker`,classes:[`ScscDateRangePicker`],category:`Forms`,whenToUse:["A period with a start and an end: report filters, filings received between two dates, a juror's unavailable days. The value is `{ start, end }` with ISO `YYYY-MM-DD` strings (or `null`).",`Both dates can be typed into the two labelled fields or picked on the calendar: the first pick sets the start, the second the end, with a preview of the range under the pointer or focus.`,"Offer `SCSC_RANGE_PRESETS` (Today, Yesterday, Last 7 days, Last 30 days, This month, Last month, Year to date), computed from `today`, or your own `ScscRangePreset[]`.","Limit the length with `minSpan` / `maxSpan` (days, counting both ends): once a start is chosen, days that would make the range too short or too long are disabled. `min`, `max`, `disabledDates` and `dateLabel` work as on the date picker.",'Confirm mode is on by default: the range commits on **Apply**, and Esc or **Cancel** reverts it. Set `[confirm]="false"` to commit on the second pick.',"It renders its own `scsc-fieldset` (`label`, `hint`, `error`, `required`); do not wrap it in `scsc-form-field`."],setup:`import { SCSC_RANGE_PRESETS, ScscDateRangePicker, type ScscDateRange } from '@scscourt/design/pickers';`,demos:[{id:`date-range-picker-reports`,title:`Report period with quick picks`,description:"`SCSC_RANGE_PRESETS`, a 92-day `maxSpan` and no dates after the business `today`. Two months from `md` up; Apply commits.",component:class r{presets=Ot;period=q({start:`2026-09-01`,end:`2026-09-30`});static ɵfac=function(t){return new(t||r)};static ɵcmp=Af({type:r,selectors:[[`app-date-range-picker-reports-demo`]],decls:6,vars:5,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`label`,`Filings received`,`hint`,`Up to 92 days, ending today or earlier`,`max`,`2026-09-30`,`today`,`2026-09-30`,3,`ngModelChange`,`ngModel`,`presets`,`maxSpan`],[1,`text-sm`,`text-base-content/70`],[1,`tnum`]],template:function(t,a){t&1&&(Ga(0,`div`,0)(1,`scsc-date-range-picker`,1),HS(),sD(`ngModelChange`,function(y){return Y_(a.period,y)||(a.period=y),y}),Lf(),Ga(2,`p`,2),G_(3,` Value: `),Ga(4,`code`,3),G_(5),Lf()()()),t&2&&(Jb(),iD(`ngModel`,a.period),Pv(`presets`,a.presets)(`maxSpan`,92),zS(),Jb(4),rD(``,a.period().start??`null`,` to `,a.period().end??`null`))},dependencies:[Gue,Hue,zz,It],encapsulation:2})},source:S[`date-range-picker-reports`]},{id:`date-range-picker-reactive`,title:`Reactive form validation`,description:"Required, `minSpan`/`maxSpan` and `min`, with a message per error key. Without confirm mode the second pick commits.",component:h,source:S[`date-range-picker-reactive`]}],a11y:['The fieldset legend names the pair; each field has its own visible label ("Start date", "End date") and the same combobox semantics as `scsc-date-picker` (`aria-haspopup="dialog"`, `aria-expanded`, `aria-controls`), described by a visually hidden format hint.','The calendar dialog is named by the live month heading. The start and end days have `aria-selected="true"` and their names end in "start date" / "end date"; the days between are shaded.',`Each step is announced: "Start date March 3, 2026 selected, choose end date", then "March 3, 2026 to March 10, 2026 selected, 8 days". The footer shows the range and its length.`,'Days outside the allowed span keep `aria-disabled` and are read as "unavailable", so a keyboard user learns why they cannot pick them.'],keyboard:[...ie.filter(r=>!r.keys.startsWith(`Enter / Space (on a day)`)),{keys:`Enter / Space (on a day)`,action:`The first press sets the start, the second the end (an earlier day starts again). In confirm mode **Apply** commits; otherwise the second press commits, closes and returns focus to the End date field.`}],appMustProvide:['A `label` that names the pair ("Hearing dates"; the default is "Date range"), and the allowed span stated in a hint.'],related:[`date-picker`,`time-picker`,`form-field`]};export{me as DATE_RANGE_PICKER_DOCS};