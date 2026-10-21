import{Cs as rM,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Ms as uc,Na as Jb,Q as Gue,Xa as Pv,Y as Fs,Yo as iD,Zi as za,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ks as t_,oi as que,pi as sn,ra as Af,sn as Tr,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,y as At,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import{r as Nt}from"./chunk-D2cerPAB.js";var M={"date-picker-actions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { type ScscDatePreset, ScscDatePicker } from '@scscourt/design/pickers';

const addDays = (iso: string, n: number): string => {
  const d = new Date(\`\${iso}T12:00:00\`);
  d.setDate(d.getDate() + n);
  const pad = (v: number) => String(v).padStart(2, '0');
  return \`\${d.getFullYear()}-\${pad(d.getMonth() + 1)}-\${pad(d.getDate())}\`;
};

@Component({
  selector: 'app-date-picker-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscDatePicker],
  template: \`
    <div class="grid max-w-2xl gap-4 sm:grid-cols-2">
      <scsc-form-field label="Response due" hint="Quick picks count calendar days">
        <scsc-date-picker
          [(ngModel)]="due"
          today="2026-09-30"
          [presets]="presets"
          [actions]="['today', 'clear']"
        />
      </scsc-form-field>
      <scsc-form-field label="Continued to" hint="Nothing changes until you press Apply">
        <scsc-date-picker
          [(ngModel)]="continued"
          today="2026-09-30"
          confirm
          [actions]="['clear']"
        />
      </scsc-form-field>
      <p class="text-sm text-base-content/70 sm:col-span-2">
        Due <code class="tnum">{{ due() ?? 'null' }}</code
        >, continued to
        <code class="tnum">{{ continued() ?? 'null' }}</code>
      </p>
    </div>
  \`,
})
export class DatePickerActionsDemo {
  protected readonly due = signal<string | null>(null);
  protected readonly continued = signal<string | null>('2026-10-15');
  protected readonly presets: ScscDatePreset[] = [
    { id: 'today', label: 'Today', value: (today) => today },
    { id: '10', label: 'In 10 days', value: (today) => addDays(today, 10) },
    { id: '30', label: 'In 30 days', value: (today) => addDays(today, 30) },
    { id: '60', label: 'In 60 days', value: (today) => addDays(today, 60) },
  ];
}
`,html:`<div class="grid max-w-2xl gap-4 sm:grid-cols-2">
  <scsc-form-field label="Response due" hint="Quick picks count calendar days">
    <scsc-date-picker
      [(ngModel)]="due"
      today="2026-09-30"
      [presets]="presets"
      [actions]="['today', 'clear']"
    />
  </scsc-form-field>
  <scsc-form-field label="Continued to" hint="Nothing changes until you press Apply">
    <scsc-date-picker
      [(ngModel)]="continued"
      today="2026-09-30"
      confirm
      [actions]="['clear']"
    />
  </scsc-form-field>
  <p class="text-sm text-base-content/70 sm:col-span-2">
    Due <code class="tnum">{{ due() ?? 'null' }}</code
    >, continued to
    <code class="tnum">{{ continued() ?? 'null' }}</code>
  </p>
</div>
`},"date-picker-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-picker-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscDatePicker],
  template: \`
    <div class="flex max-w-sm flex-col gap-3">
      <scsc-form-field label="Filed on" hint="Type a date or press Enter for the calendar">
        <!-- today: the court's business date, not the device clock. -->
        <scsc-date-picker [(ngModel)]="filedOn" today="2026-09-30" clearable />
      </scsc-form-field>
      <p class="text-sm text-base-content/70">
        Value: <code class="tnum">{{ filedOn() ?? 'null' }}</code>
      </p>
    </div>
  \`,
})
export class DatePickerBasicDemo {
  protected readonly filedOn = signal<string | null>('2026-09-14');
}
`,html:`<div class="flex max-w-sm flex-col gap-3">
  <scsc-form-field label="Filed on" hint="Type a date or press Enter for the calendar">
    <!-- today: the court's business date, not the device clock. -->
    <scsc-date-picker [(ngModel)]="filedOn" today="2026-09-30" clearable />
  </scsc-form-field>
  <p class="text-sm text-base-content/70">
    Value: <code class="tnum">{{ filedOn() ?? 'null' }}</code>
  </p>
</div>
`},"date-picker-court-days":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

/** Judicial holidays the court is closed (fixture data). */
const HOLIDAYS: Record<string, string> = {
  '2026-10-12': 'Court closed: Indigenous Peoples Day',
  '2026-11-11': 'Court closed: Veterans Day',
  '2026-11-26': 'Court closed: Thanksgiving',
  '2026-11-27': 'Court closed: Day after Thanksgiving',
};

@Component({
  selector: 'app-date-picker-court-days-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscDatePicker],
  template: \`
    <div class="max-w-sm">
      <scsc-form-field label="Hearing date" hint="A court day from October 1 to December 31, 2026">
        <scsc-date-picker
          [(ngModel)]="hearing"
          today="2026-09-30"
          min="2026-10-01"
          max="2026-12-31"
          [disabledDates]="closed"
          [dateLabel]="holiday"
          [dayClass]="tint"
        />
      </scsc-form-field>
    </div>
  \`,
})
export class DatePickerCourtDaysDemo {
  protected readonly hearing = signal<string | null>(null);
  /** Weekends and holidays cannot be picked. */
  protected readonly closed = (iso: string): boolean => {
    const day = new Date(\`\${iso}T12:00:00\`).getDay();
    return day === 0 || day === 6 || iso in HOLIDAYS;
  };
  /** Read with the date and marked with a dot. */
  protected readonly holiday = (iso: string): string | null => HOLIDAYS[iso] ?? null;
  protected readonly tint = (iso: string): string | null => (iso in HOLIDAYS ? 'text-error' : null);
}
`,html:`<div class="max-w-sm">
  <scsc-form-field label="Hearing date" hint="A court day from October 1 to December 31, 2026">
    <scsc-date-picker
      [(ngModel)]="hearing"
      today="2026-09-30"
      min="2026-10-01"
      max="2026-12-31"
      [disabledDates]="closed"
      [dateLabel]="holiday"
      [dayClass]="tint"
    />
  </scsc-form-field>
</div>
`},"date-picker-inline":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-picker-inline-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscDatePicker],
  template: \`
    <div class="flex flex-col gap-3">
      <scsc-form-field label="Trial date">
        <!-- Two months from the md breakpoint up, one below it. -->
        <scsc-date-picker [(ngModel)]="trial" inline [months]="2" today="2026-09-30" />
      </scsc-form-field>
      <p class="text-sm text-base-content/70">
        Trial date: <code class="tnum">{{ trial() ?? 'null' }}</code>
      </p>
    </div>
  \`,
})
export class DatePickerInlineDemo {
  protected readonly trial = signal<string | null>('2026-10-19');
}
`,html:`<div class="flex flex-col gap-3">
  <scsc-form-field label="Trial date">
    <!-- Two months from the md breakpoint up, one below it. -->
    <scsc-date-picker [(ngModel)]="trial" inline [months]="2" today="2026-09-30" />
  </scsc-form-field>
  <p class="text-sm text-base-content/70">
    Trial date: <code class="tnum">{{ trial() ?? 'null' }}</code>
  </p>
</div>
`},"date-picker-locale":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { type ScscDatePickerLabels, ScscDatePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-picker-locale-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscDatePicker],
  template: \`
    <div class="max-w-sm" lang="es">
      <!-- Month and weekday names and the DD/MM/YYYY order follow the locale. -->
      <scsc-form-field label="Fecha de la audiencia" hint="Formato: DD/MM/AAAA">
        <scsc-date-picker
          [(ngModel)]="fecha"
          locale="es"
          [weekStartsOn]="1"
          placeholder="DD/MM/AAAA"
          today="2026-09-30"
          [actions]="['today', 'clear']"
          [labels]="labels"
        />
      </scsc-form-field>
    </div>
  \`,
})
export class DatePickerLocaleDemo {
  protected readonly fecha = signal<string | null>('2026-10-06');
  protected readonly labels: Partial<ScscDatePickerLabels> = {
    chooseDate: 'Elegir fecha',
    clear: 'Borrar',
    todayAction: 'Hoy',
    cancel: 'Cancelar',
    apply: 'Aplicar',
    close: 'Cerrar',
    today: 'hoy',
    unavailable: 'no disponible',
    previousMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    previousYear: 'A\xF1o anterior',
    nextYear: 'A\xF1o siguiente',
    previousYears: '12 a\xF1os anteriores',
    nextYears: '12 a\xF1os siguientes',
    chooseMonthYear: 'elegir mes y a\xF1o',
    chooseYear: 'elegir a\xF1o',
    chooseDay: 'ver d\xEDas',
    formatHint: () => 'Formato: DD/MM/AAAA',
    selected: (date) => \`\${date} seleccionado\`,
  };
}
`,html:`<div class="max-w-sm" lang="es">
  <!-- Month and weekday names and the DD/MM/YYYY order follow the locale. -->
  <scsc-form-field label="Fecha de la audiencia" hint="Formato: DD/MM/AAAA">
    <scsc-date-picker
      [(ngModel)]="fecha"
      locale="es"
      [weekStartsOn]="1"
      placeholder="DD/MM/AAAA"
      today="2026-09-30"
      [actions]="['today', 'clear']"
      [labels]="labels"
    />
  </scsc-form-field>
</div>
`},"date-picker-modal":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscButton, ScscFormField, ScscModal } from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-picker-modal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscButton, ScscFormField, ScscModal, ScscDatePicker],
  template: \`
    <scsc-button variant="primary" (click)="open.set(true)">Continue hearing</scsc-button>
    <p class="mt-2 text-sm text-base-content/70">
      New date: <code class="tnum">{{ date() ?? 'none yet' }}</code>
    </p>
    <!-- Esc in the calendar closes only the calendar; a second Esc closes the modal. -->
    <scsc-modal [(open)]="open" title="Continue hearing: 24CV012345">
      <scsc-form-field label="New hearing date">
        <scsc-date-picker [(ngModel)]="date" today="2026-09-30" min="2026-10-01" />
      </scsc-form-field>
      <div slot="footer" class="flex justify-end gap-2">
        <scsc-button variant="ghost" (click)="open.set(false)">Close</scsc-button>
      </div>
    </scsc-modal>
  \`,
})
export class DatePickerModalDemo {
  protected readonly open = signal(false);
  protected readonly date = signal<string | null>(null);
}
`,html:`<scsc-button variant="primary" (click)="open.set(true)">Continue hearing</scsc-button>
<p class="mt-2 text-sm text-base-content/70">
  New date: <code class="tnum">{{ date() ?? 'none yet' }}</code>
</p>
<!-- Esc in the calendar closes only the calendar; a second Esc closes the modal. -->
<scsc-modal [(open)]="open" title="Continue hearing: 24CV012345">
  <scsc-form-field label="New hearing date">
    <scsc-date-picker [(ngModel)]="date" today="2026-09-30" min="2026-10-01" />
  </scsc-form-field>
  <div slot="footer" class="flex justify-end gap-2">
    <scsc-button variant="ghost" (click)="open.set(false)">Close</scsc-button>
  </div>
</scsc-modal>
`},"date-picker-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { type AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscErrorSummary,
  type ScscFormError,
  ScscFormField,
} from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

@Component({
  selector: 'app-date-picker-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscErrorSummary,
    ScscFormField,
    ScscDatePicker,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4" novalidate>
      @if (errors().length) {
        <scsc-error-summary [errors]="errors()" />
      }
      <scsc-form-field label="Filed on" required [error]="errorFor('filedOn')">
        <scsc-date-picker
          inputId="dp-filed"
          formControlName="filedOn"
          max="2026-09-30"
          today="2026-09-30"
        />
      </scsc-form-field>
      <scsc-form-field
        label="Hearing date"
        hint="On or after the filing date"
        required
        [error]="errorFor('hearingDate')"
      >
        <scsc-date-picker inputId="dp-hearing" formControlName="hearingDate" today="2026-09-30" />
      </scsc-form-field>
      <div class="flex gap-2">
        <scsc-button variant="primary" nativeType="submit">Schedule hearing</scsc-button>
        <scsc-button variant="ghost" (click)="reset()">Reset</scsc-button>
      </div>
      @if (scheduled()) {
        <scsc-alert status="success" title="Hearing scheduled">{{ scheduled() }}</scsc-alert>
      }
    </form>
  \`,
})
export class DatePickerReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly scheduled = signal('');
  protected readonly errors = signal<ScscFormError[]>([]);
  private readonly submitted = signal(false);

  protected readonly form = this.fb.group(
    {
      filedOn: this.fb.control<string | null>('2026-09-02', Validators.required),
      hearingDate: this.fb.control<string | null>(null, Validators.required),
    },
    {
      validators: (g: AbstractControl) =>
        g.value.filedOn && g.value.hearingDate && g.value.hearingDate < g.value.filedOn
          ? { hearingBeforeFiling: true }
          : null,
    },
  );

  /** One message per error key the picker reports (see the API table). */
  protected errorFor(name: 'filedOn' | 'hearingDate'): string {
    const c = this.form.controls[name];
    if (!this.submitted() && !c.touched) return '';
    if (c.hasError('scscDateParse')) return 'Enter the date as MM/DD/YYYY, like 10/05/2026.';
    if (c.hasError('scscDateMax')) return 'The filing date cannot be in the future.';
    if (c.hasError('required')) return 'Enter a date.';
    if (name === 'hearingDate' && this.form.hasError('hearingBeforeFiling'))
      return 'The hearing cannot be before the filing date.';
    return '';
  }

  protected submit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    const ids = { filedOn: 'dp-filed', hearingDate: 'dp-hearing' } as const;
    this.errors.set(
      (['filedOn', 'hearingDate'] as const)
        .map((name) => ({ id: ids[name], message: this.errorFor(name) }))
        .filter((e) => e.message),
    );
    this.scheduled.set(
      this.errors().length
        ? ''
        : \`24CV012345: hearing set for \${this.form.value.hearingDate} in Dept. 12.\`,
    );
  }

  protected reset(): void {
    this.form.reset({ filedOn: '2026-09-02', hearingDate: null });
    this.submitted.set(false);
    this.errors.set([]);
    this.scheduled.set('');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4" novalidate>
  @if (errors().length) {
    <scsc-error-summary [errors]="errors()" />
  }
  <scsc-form-field label="Filed on" required [error]="errorFor('filedOn')">
    <scsc-date-picker
      inputId="dp-filed"
      formControlName="filedOn"
      max="2026-09-30"
      today="2026-09-30"
    />
  </scsc-form-field>
  <scsc-form-field
    label="Hearing date"
    hint="On or after the filing date"
    required
    [error]="errorFor('hearingDate')"
  >
    <scsc-date-picker inputId="dp-hearing" formControlName="hearingDate" today="2026-09-30" />
  </scsc-form-field>
  <div class="flex gap-2">
    <scsc-button variant="primary" nativeType="submit">Schedule hearing</scsc-button>
    <scsc-button variant="ghost" (click)="reset()">Reset</scsc-button>
  </div>
  @if (scheduled()) {
    <scsc-alert status="success" title="Hearing scheduled">{{ scheduled() }}</scsc-alert>
  }
</form>
`}};var te=()=>[`today`,`clear`];var ae=()=>[`clear`];var V=(n,a)=>{let e=new Date(`${n}T12:00:00`);e.setDate(e.getDate()+a);let t=b=>String(b).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`};var T=class n{due=q$1(null);continued=q$1(`2026-10-15`);presets=[{id:`today`,label:`Today`,value:a=>a},{id:`10`,label:`In 10 days`,value:a=>V(a,10)},{id:`30`,label:`In 30 days`,value:a=>V(a,30)},{id:`60`,label:`In 60 days`,value:a=>V(a,60)}];static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-actions-demo`]],decls:12,vars:9,consts:[[1,`grid`,`max-w-2xl`,`gap-4`,`sm:grid-cols-2`],[`label`,`Response due`,`hint`,`Quick picks count calendar days`],[`today`,`2026-09-30`,3,`ngModelChange`,`ngModel`,`presets`,`actions`],[`label`,`Continued to`,`hint`,`Nothing changes until you press Apply`],[`today`,`2026-09-30`,`confirm`,``,3,`ngModelChange`,`ngModel`,`actions`],[1,`text-sm`,`text-base-content/70`,`sm:col-span-2`],[1,`tnum`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-date-picker`,2),HS(),sD(`ngModelChange`,function(r){return Y_(t.due,r)||(t.due=r),r}),Lf()(),Ga(3,`scsc-form-field`,3)(4,`scsc-date-picker`,4),HS(),sD(`ngModelChange`,function(r){return Y_(t.continued,r)||(t.continued=r),r}),Lf()(),Ga(5,`p`,5),G_(6,` Due `),Ga(7,`code`,6),G_(8),Lf(),G_(9,`, continued to `),Ga(10,`code`,6),G_(11),Lf()()()),e&2&&(Jb(2),iD(`ngModel`,t.due),Pv(`presets`,t.presets)(`actions`,rM(7,te)),zS(),Jb(2),iD(`ngModel`,t.continued),Pv(`actions`,rM(8,ae)),zS(),Jb(4),nD(t.due()??`null`),Jb(3),nD(t.continued()??`null`))},dependencies:[Gue,Hue,zz,Vn,Nt],encapsulation:2})};var E=class n{filedOn=q$1(`2026-09-14`);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-basic-demo`]],decls:7,vars:2,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-3`],[`label`,`Filed on`,`hint`,`Type a date or press Enter for the calendar`],[`today`,`2026-09-30`,`clearable`,``,3,`ngModelChange`,`ngModel`],[1,`text-sm`,`text-base-content/70`],[1,`tnum`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-date-picker`,2),HS(),sD(`ngModelChange`,function(r){return Y_(t.filedOn,r)||(t.filedOn=r),r}),Lf()(),Ga(3,`p`,3),G_(4,` Value: `),Ga(5,`code`,4),G_(6),Lf()()()),e&2&&(Jb(2),iD(`ngModel`,t.filedOn),zS(),Jb(4),nD(t.filedOn()??`null`))},dependencies:[Gue,Hue,zz,Vn,Nt],encapsulation:2})};var q={"2026-10-12":`Court closed: Indigenous Peoples Day`,"2026-11-11":`Court closed: Veterans Day`,"2026-11-26":`Court closed: Thanksgiving`,"2026-11-27":`Court closed: Day after Thanksgiving`};var O=class n{hearing=q$1(null);closed=a=>{let e=new Date(`${a}T12:00:00`).getDay();return e===0||e===6||a in q};holiday=a=>q[a]??null;tint=a=>a in q?`text-error`:null;static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-court-days-demo`]],decls:3,vars:4,consts:[[1,`max-w-sm`],[`label`,`Hearing date`,`hint`,`A court day from October 1 to December 31, 2026`],[`today`,`2026-09-30`,`min`,`2026-10-01`,`max`,`2026-12-31`,3,`ngModelChange`,`ngModel`,`disabledDates`,`dateLabel`,`dayClass`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-date-picker`,2),HS(),sD(`ngModelChange`,function(r){return Y_(t.hearing,r)||(t.hearing=r),r}),Lf()()()),e&2&&(Jb(2),iD(`ngModel`,t.hearing),Pv(`disabledDates`,t.closed)(`dateLabel`,t.holiday)(`dayClass`,t.tint),zS())},dependencies:[Gue,Hue,zz,Vn,Nt],encapsulation:2})};var N=class n{trial=q$1(`2026-10-19`);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-inline-demo`]],decls:7,vars:3,consts:[[1,`flex`,`flex-col`,`gap-3`],[`label`,`Trial date`],[`inline`,``,`today`,`2026-09-30`,3,`ngModelChange`,`ngModel`,`months`],[1,`text-sm`,`text-base-content/70`],[1,`tnum`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-date-picker`,2),HS(),sD(`ngModelChange`,function(r){return Y_(t.trial,r)||(t.trial=r),r}),Lf()(),Ga(3,`p`,3),G_(4,` Trial date: `),Ga(5,`code`,4),G_(6),Lf()()()),e&2&&(Jb(2),iD(`ngModel`,t.trial),Pv(`months`,2),zS(),Jb(4),nD(t.trial()??`null`))},dependencies:[Gue,Hue,zz,Vn,Nt],encapsulation:2})};var oe=()=>[`today`,`clear`];var I=class n{fecha=q$1(`2026-10-06`);labels={chooseDate:`Elegir fecha`,clear:`Borrar`,todayAction:`Hoy`,cancel:`Cancelar`,apply:`Aplicar`,close:`Cerrar`,today:`hoy`,unavailable:`no disponible`,previousMonth:`Mes anterior`,nextMonth:`Mes siguiente`,previousYear:`Año anterior`,nextYear:`Año siguiente`,previousYears:`12 años anteriores`,nextYears:`12 años siguientes`,chooseMonthYear:`elegir mes y año`,chooseYear:`elegir año`,chooseDay:`ver días`,formatHint:()=>`Formato: DD/MM/AAAA`,selected:a=>`${a} seleccionado`};static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-locale-demo`]],decls:3,vars:5,consts:[[`lang`,`es`,1,`max-w-sm`],[`label`,`Fecha de la audiencia`,`hint`,`Formato: DD/MM/AAAA`],[`locale`,`es`,`placeholder`,`DD/MM/AAAA`,`today`,`2026-09-30`,3,`ngModelChange`,`ngModel`,`weekStartsOn`,`actions`,`labels`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-date-picker`,2),HS(),sD(`ngModelChange`,function(r){return Y_(t.fecha,r)||(t.fecha=r),r}),Lf()()()),e&2&&(Jb(2),iD(`ngModel`,t.fecha),Pv(`weekStartsOn`,1)(`actions`,rM(4,oe))(`labels`,t.labels),zS())},dependencies:[Gue,Hue,zz,Vn,Nt],encapsulation:2})};var Y=class n{open=q$1(!1);date=q$1(null);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-modal-demo`]],decls:12,vars:3,consts:[[`variant`,`primary`,3,`click`],[1,`mt-2`,`text-sm`,`text-base-content/70`],[1,`tnum`],[`title`,`Continue hearing: 24CV012345`,3,`openChange`,`open`],[`label`,`New hearing date`],[`today`,`2026-09-30`,`min`,`2026-10-01`,3,`ngModelChange`,`ngModel`],[`slot`,`footer`,1,`flex`,`justify-end`,`gap-2`],[`variant`,`ghost`,3,`click`]],template:function(e,t){e&1&&(Ga(0,`scsc-button`,0),lc(`click`,function(){return t.open.set(!0)}),G_(1,`Continue hearing`),Lf(),Ga(2,`p`,1),G_(3,` New date: `),Ga(4,`code`,2),G_(5),Lf()(),Ga(6,`scsc-modal`,3),sD(`openChange`,function(r){return Y_(t.open,r)||(t.open=r),r}),Ga(7,`scsc-form-field`,4)(8,`scsc-date-picker`,5),HS(),sD(`ngModelChange`,function(r){return Y_(t.date,r)||(t.date=r),r}),Lf()(),Ga(9,`div`,6)(10,`scsc-button`,7),lc(`click`,function(){return t.open.set(!1)}),G_(11,`Close`),Lf()()()),e&2&&(Jb(5),nD(t.date()??`none yet`),Jb(),iD(`open`,t.open),Jb(2),iD(`ngModel`,t.date),zS())},dependencies:[Gue,Hue,zz,sn,Vn,At,Nt],encapsulation:2})};function re(n,a){if(n&1&&uc(0,`scsc-error-summary`,1),n&2){let e=y_();Pv(`errors`,e.errors())}}function ne(n,a){if(n&1&&(Ga(0,`scsc-alert`,9),G_(1),Lf()),n&2){let e=y_();Jb(),nD(e.scheduled())}}var L=class n{fb=g(Wue);scheduled=q$1(``);errors=q$1([]);submitted=q$1(!1);form=this.fb.group({filedOn:this.fb.control(`2026-09-02`,Fs.required),hearingDate:this.fb.control(null,Fs.required)},{validators:a=>a.value.filedOn&&a.value.hearingDate&&a.value.hearingDate<a.value.filedOn?{hearingBeforeFiling:!0}:null});errorFor(a){let e=this.form.controls[a];return!this.submitted()&&!e.touched?``:e.hasError(`scscDateParse`)?`Enter the date as MM/DD/YYYY, like 10/05/2026.`:e.hasError(`scscDateMax`)?`The filing date cannot be in the future.`:e.hasError(`required`)?`Enter a date.`:a===`hearingDate`&&this.form.hasError(`hearingBeforeFiling`)?`The hearing cannot be before the filing date.`:``}submit(){this.submitted.set(!0),this.form.markAllAsTouched();let a={filedOn:`dp-filed`,hearingDate:`dp-hearing`};this.errors.set([`filedOn`,`hearingDate`].map(e=>({id:a[e],message:this.errorFor(e)})).filter(e=>e.message)),this.scheduled.set(this.errors().length?``:`24CV012345: hearing set for ${this.form.value.hearingDate} in Dept. 12.`)}reset(){this.form.reset({filedOn:`2026-09-02`,hearingDate:null}),this.submitted.set(!1),this.errors.set([]),this.scheduled.set(``)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-date-picker-reactive-demo`]],decls:12,vars:5,consts:[[`novalidate`,``,1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[3,`errors`],[`label`,`Filed on`,`required`,``,3,`error`],[`inputId`,`dp-filed`,`formControlName`,`filedOn`,`max`,`2026-09-30`,`today`,`2026-09-30`],[`label`,`Hearing date`,`hint`,`On or after the filing date`,`required`,``,3,`error`],[`inputId`,`dp-hearing`,`formControlName`,`hearingDate`,`today`,`2026-09-30`],[1,`flex`,`gap-2`],[`variant`,`primary`,`nativeType`,`submit`],[`variant`,`ghost`,3,`click`],[`status`,`success`,`title`,`Hearing scheduled`]],template:function(e,t){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return t.submit()}),JT(1,re,1,1,`scsc-error-summary`,1),Ga(2,`scsc-form-field`,2)(3,`scsc-date-picker`,3),HS(),Lf()(),Ga(4,`scsc-form-field`,4)(5,`scsc-date-picker`,5),HS(),Lf()(),Ga(6,`div`,6)(7,`scsc-button`,7),G_(8,`Schedule hearing`),Lf(),Ga(9,`scsc-button`,8),lc(`click`,function(){return t.reset()}),G_(10,`Reset`),Lf()(),JT(11,ne,2,1,`scsc-alert`,9),Lf()),e&2&&(Pv(`formGroup`,t.form),Jb(),t_(t.errors().length?1:-1),Jb(),Pv(`error`,t.errorFor(`filedOn`)),Jb(),zS(),Jb(),Pv(`error`,t.errorFor(`hearingDate`)),Jb(),zS(),Jb(6),t_(t.scheduled()?11:-1))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,za,sn,Tr,Vn,Nt],encapsulation:2})};var ie=[{keys:`Enter / Space / ArrowDown / Alt+ArrowDown (in the field)`,action:`Opens the calendar and moves focus to the selected day, or today. Enter first reads what you typed, and never submits the form. Space types a space while you are typing a date.`},{keys:`Tab / Shift+Tab (in the calendar)`,action:`Month and year button → **Previous** → **Next** → the days (one stop) → quick picks → footer buttons. Tabbing out of the calendar closes it.`},{keys:`ArrowLeft / ArrowRight`,action:`Previous or next day.`},{keys:`ArrowUp / ArrowDown`,action:`Same day of the previous or next week.`},{keys:`Home / End`,action:`First or last day of the week.`},{keys:`PageUp / PageDown`,action:`Same day of the previous or next month (Jan 31 → Feb 28). The view follows focus.`},{keys:`Shift+PageUp / Shift+PageDown`,action:`Same day of the previous or next year.`},{keys:`Enter / Space (on a day)`,action:`Picks the day, closes the calendar and returns focus to the field. In confirm mode it only selects the day; **Apply** commits it.`},{keys:`Enter (on the month and year button)`,action:`Switches to a month grid, then a year grid (arrows, PageUp/PageDown, Enter picks). Esc goes back to the days.`},{keys:`Escape`,action:`Closes the calendar without changing the value and returns focus to the field. The key stops there, so an enclosing modal stays open.`}];var mt={slug:`date-picker`,name:`Date Picker`,classes:[`ScscDatePicker`],category:`Forms`,whenToUse:["A single calendar date: hearing date, filing date, deadline. People can type it (`3/4/26`, `03042026`, `Mar 4 2026` all work) or pick it from the calendar. The value is an ISO `YYYY-MM-DD` string, or `null` when empty, which sorts and compares as text.","It is a `ControlValueAccessor` and a validator: bind it with `formControlName`, `[formControl]` or `[(ngModel)]`. It reports `scscDateParse` (text that is not a date), `scscDateMin`, `scscDateMax`, `scscDateUnavailable` and `required`; map each to a message.",'Limit the choice with `min`, `max` and `disabledDates` (a list or a rule such as weekends and holidays), and explain a day with `dateLabel` ("Court closed"). Set `today` to the court\'s business date when it is not the device clock.','Add `presets` and footer `actions` (`today`, `clear`) for common picks, and `confirm` when a change must be deliberate (Apply commits, Cancel or Esc reverts). `inline` shows the calendar in the page, `months="2"` shows two months.','For a start and an end date use `scsc-date-range-picker`. For dates people know by heart (date of birth), a plain `scscMask="##/##/####"` input is faster. Times are a separate control: `scsc-time-picker`.'],setup:`// import from the secondary entry point, not from '@scscourt/design'
import { ScscDatePicker } from '@scscourt/design/pickers';`,demos:[{id:`date-picker-basic`,title:`Type or pick`,description:"A form field names the picker and describes it. `today` is the court's business date; `clearable` adds a clear button.",component:E,source:M[`date-picker-basic`]},{id:`date-picker-court-days`,title:`Court days only`,description:"`min`/`max`, weekends and holidays disabled with `disabledDates`, and the holiday named with `dateLabel` (read with the date, marked with a dot).",component:O,source:M[`date-picker-court-days`]},{id:`date-picker-actions`,title:`Quick picks, footer and confirm mode`,description:"`presets` beside the calendar and `today` / `clear` actions; the second picker is in `confirm` mode, so a pick is a draft until **Apply**.",component:T,source:M[`date-picker-actions`]},{id:`date-picker-inline`,title:`Inline, two months`,description:"Always open in the page. Two months from the `md` breakpoint up; the group is named by the field label and the month.",component:N,source:M[`date-picker-inline`]},{id:`date-picker-modal`,title:`In a modal`,description:`Esc in the calendar closes only the calendar and returns to the field; a second Esc closes the modal.`,component:Y,source:M[`date-picker-modal`]},{id:`date-picker-locale`,title:`Spanish`,description:'`locale="es"`: month and weekday names and the `DD/MM/YYYY` order follow the locale; `weekStartsOn` and `labels` translate the rest.',component:I,source:M[`date-picker-locale`]},{id:`date-picker-reactive`,title:`Reactive form with an error summary`,description:"Required dates, a `max`, a cross-field rule and a message per error key; a rejected submit lists the problems in `scsc-error-summary`.",component:L,source:M[`date-picker-reactive`]}],a11y:['The field is an editable text input with `role="combobox"`, `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`. It is named by the `scsc-form-field` label (no `aria-label`), and described by the field hint, the error and a visually hidden format hint ("Format: MM/DD/YYYY"). The placeholder shows the format; it is never the name.','The calendar is a non-modal dialog named by the month heading, which is a polite live region, so paging announces the new month. It has `tabindex="-1"`, so a press on its background keeps focus inside. It closes when focus leaves it.','Days form a `role="grid"` with weekday column headers named in full ("Sunday"), and one `button role="gridcell"` per day, named with the full date, "today", the `dateLabel` note and "unavailable" where they apply. The selected day has `aria-selected="true"` and today `aria-current="date"` plus a ring, so colour is not the only signal. Unavailable days keep `aria-disabled` (they stay reachable, so the reason is heard) and are struck through.',"Text that is not a date marks the field invalid (`aria-invalid`) and the control reports `scscDateParse`; show a message for it. Confirm mode announces the chosen day.","Below the `sm` breakpoint the calendar opens as a full-screen sheet with a Close button. Opening motion uses the motion tokens and is removed under reduced motion."],keyboard:ie,appMustProvide:["A visible label: put it in `scsc-form-field` (the format hint is added for you).",'The allowed dates stated in the hint when `min`, `max` or a filter applies, and a `dateLabel` note for days that need one ("Court holiday").'],related:[`date-range-picker`,`time-picker`,`masked-input`,`form-field`,`calendar`]};export{mt as n,ie as t};