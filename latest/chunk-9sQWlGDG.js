import{Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,No as cc,Ps as ut,Vi as y2e,Xa as Pv,Y as Fs,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,cs as lc,ds as nD,et as Ha,ks as t_,l as $ue,mn as Uue,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var A=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-select-basic-demo`]],decls:34,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`scsc-select`,``,`aria-label`,`Case type`],[`value`,``],[`value`,`CV`],[`value`,`FL`],[`value`,`PR`],[`scsc-select`,``,`size`,`sm`,`aria-label`,`Rows per page`],[`scsc-select`,``,`size`,`lg`,`aria-label`,`Courthouse`],[`scsc-select`,``,`aria-invalid`,`true`,`aria-label`,`Filing status`,3,`invalid`],[`scsc-select`,``,`disabled`,``,`aria-label`,`Department`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`select`,1)(2,`option`,2),G_(3,`Case type…`),Lf(),Ga(4,`option`,3),G_(5,`Civil`),Lf(),Ga(6,`option`,4),G_(7,`Family`),Lf(),Ga(8,`option`,5),G_(9,`Probate`),Lf()(),Ga(10,`select`,6)(11,`option`),G_(12,`10 per page`),Lf(),Ga(13,`option`),G_(14,`25 per page`),Lf(),Ga(15,`option`),G_(16,`50 per page`),Lf()(),Ga(17,`select`,7)(18,`option`),G_(19,`Downtown Superior Court`),Lf(),Ga(20,`option`),G_(21,`Family Justice Center`),Lf(),Ga(22,`option`),G_(23,`South County Courthouse`),Lf()(),Ga(24,`select`,8)(25,`option`,2),G_(26,`Choose a filing status`),Lf(),Ga(27,`option`),G_(28,`Accepted`),Lf(),Ga(29,`option`),G_(30,`Rejected`),Lf()(),Ga(31,`select`,9)(32,`option`),G_(33,`Department 6 (assigned)`),Lf()()()),e&2&&(Jb(24),Pv(`invalid`,!0))},dependencies:[On],encapsulation:2})};var W=(a,o)=>o.id;var K=(a,o)=>o.code;function Q(a,o){if(a&1&&(Ga(0,`option`,4),G_(1),Lf()),a&2){let e=o.$implicit;Pv(`value`,e.id),Jb(),nD(e.name)}}function X(a,o){if(a&1&&(Ga(0,`option`,4),G_(1),Lf()),a&2){let e=o.$implicit;Pv(`value`,e.code),Jb(),nD(e.label)}}function Y(a,o){if(a&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),a&2){let e=y_();Jb(),nD(e.reserved())}}var V=class a{fb=g(Wue);reserved=q$1(``);courthouses=[{id:`downtown`,name:`Downtown Superior Court`,departments:[{code:`D3`,label:`Department 3 — Civil`},{code:`D6`,label:`Department 6 — Civil`},{code:`D10`,label:`Department 10 — Civil complex`}]},{id:`family`,name:`Family Justice Center`,departments:[{code:`D71`,label:`Department 71 — Family`},{code:`D74`,label:`Department 74 — Family`}]},{id:`south`,name:`South County Courthouse`,departments:[{code:`D16`,label:`Department 16 — Small claims`}]}];form=this.fb.nonNullable.group({courthouse:[``,Fs.required],department:[{value:``,disabled:!0},Fs.required]});courthouseId=Ha(this.form.controls.courthouse.valueChanges,{initialValue:``});departments=ut(()=>this.courthouses.find(o=>o.id===this.courthouseId())?.departments??[]);constructor(){this.form.controls.courthouse.valueChanges.pipe(y2e()).subscribe(o=>{let e=this.form.controls.department;e.reset(``),o?e.enable():e.disable()})}error(o){let e=this.form.controls[o];return e.invalid&&e.touched?o===`courthouse`?`Choose a courthouse.`:`Choose a department.`:``}submit(){if(this.form.markAllAsTouched(),this.form.invalid){this.reserved.set(``);return}let o=this.courthouses.find(i=>i.id===this.form.value.courthouse),e=this.departments().find(i=>i.code===this.form.value.department);this.reserved.set(e?.label+`, `+o?.name+`. The clerk will confirm by email.`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-select-dependent-demo`]],decls:17,vars:9,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Courthouse`,`for`,`select-dependent-courthouse`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`select-dependent-courthouse`,`formControlName`,`courthouse`,3,`invalid`],[`value`,``,`disabled`,``],[3,`value`],[`label`,`Department`,`for`,`select-dependent-department`,`required`,``,3,`hint`,`error`],[`scsc-select`,``,`id`,`select-dependent-department`,`formControlName`,`department`,3,`invalid`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Reserved`]],template:function(e,i){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return i.submit()}),Ga(1,`scsc-form-field`,1)(2,`select`,2),HS(),Ga(3,`option`,3),G_(4,`Select a courthouse…`),Lf(),o_(5,Q,2,2,`option`,4,W),Lf()(),Ga(7,`scsc-form-field`,5)(8,`select`,6),HS(),Ga(9,`option`,3),G_(10,`Select a department…`),Lf(),o_(11,X,2,2,`option`,4,K),Lf()(),Ga(13,`div`)(14,`scsc-button`,7),G_(15,`Reserve hearing date`),Lf()(),JT(16,Y,2,1,`scsc-alert`,8),Lf()),e&2&&(Pv(`formGroup`,i.form),Jb(),Pv(`error`,i.error(`courthouse`)),Jb(),Pv(`invalid`,!!i.error(`courthouse`)),cc(`aria-invalid`,!!i.error(`courthouse`)),zS(),Jb(3),i_(i.courthouses),Jb(2),Pv(`hint`,i.departments().length?``:`Choose a courthouse first`)(`error`,i.error(`department`)),Jb(),Pv(`invalid`,!!i.error(`department`)),cc(`aria-invalid`,!!i.error(`department`)),zS(),Jb(3),i_(i.departments()),Jb(5),t_(i.reserved()?16:-1))},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,Vz,Xz,za,sn,Vn,On],encapsulation:2})};var Z=(a,o)=>o.code;function ee(a,o){if(a&1&&(Ga(0,`option`,4),G_(1),Lf()),a&2){let e=o.$implicit;Pv(`value`,e.code),Jb(),nD(e.label)}}var M=class a{fb=g(Wue);departments=[{code:`D5`,label:`Department 5 — Hon. M. Reyes`},{code:`D7`,label:`Department 7 — Hon. A. Chen`},{code:`D12`,label:`Department 12 — Hon. S. Okafor`}];form=this.fb.group({department:[``,Fs.required]});error(){let o=this.form.controls.department;return o.invalid&&(o.dirty||o.touched)?`Choose a department.`:``}submit(){this.form.markAllAsTouched()}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-select-reactive-demo`]],decls:14,vars:5,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Department`,`hint`,`Where the hearing will be held`,`for`,`dept`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`dept`,`formControlName`,`department`,3,`invalid`],[`value`,``,`disabled`,``],[3,`value`],[1,`flex`,`items-center`,`gap-3`],[`variant`,`primary`,`nativeType`,`submit`],[1,`text-sm`,`text-base-content/70`]],template:function(e,i){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return i.submit()}),Ga(1,`scsc-form-field`,1)(2,`select`,2),HS(),Ga(3,`option`,3),G_(4,`Select a department…`),Lf(),o_(5,ee,2,2,`option`,4,Z),Lf()(),Ga(7,`div`,5)(8,`scsc-button`,6),G_(9,`Set hearing`),Lf(),Ga(10,`span`,7),G_(11,`Value: `),Ga(12,`code`),G_(13),Lf()()()()),e&2&&(Pv(`formGroup`,i.form),Jb(),Pv(`error`,i.error()),Jb(),Pv(`invalid`,!!i.error()),cc(`aria-invalid`,!!i.error()),zS(),Jb(3),i_(i.departments),Jb(8),nD(i.form.value.department||`—`))},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,Vz,Xz,sn,Vn,On],encapsulation:2})};var q={"select-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscSelect } from '@scscourt/design';

@Component({
  selector: 'app-select-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSelect],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <select scsc-select aria-label="Case type">
        <option value="">Case type\u2026</option>
        <option value="CV">Civil</option>
        <option value="FL">Family</option>
        <option value="PR">Probate</option>
      </select>
      <!-- sm for toolbars and table footers, lg for a page's one prominent choice. -->
      <select scsc-select size="sm" aria-label="Rows per page">
        <option>10 per page</option>
        <option>25 per page</option>
        <option>50 per page</option>
      </select>
      <select scsc-select size="lg" aria-label="Courthouse">
        <option>Downtown Superior Court</option>
        <option>Family Justice Center</option>
        <option>South County Courthouse</option>
      </select>
      <select scsc-select [invalid]="true" aria-invalid="true" aria-label="Filing status">
        <option value="">Choose a filing status</option>
        <option>Accepted</option>
        <option>Rejected</option>
      </select>
      <select scsc-select disabled aria-label="Department">
        <option>Department 6 (assigned)</option>
      </select>
    </div>
  \`,
})
export class SelectBasicDemo {}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <select scsc-select aria-label="Case type">
    <option value="">Case type\u2026</option>
    <option value="CV">Civil</option>
    <option value="FL">Family</option>
    <option value="PR">Probate</option>
  </select>
  <!-- sm for toolbars and table footers, lg for a page's one prominent choice. -->
  <select scsc-select size="sm" aria-label="Rows per page">
    <option>10 per page</option>
    <option>25 per page</option>
    <option>50 per page</option>
  </select>
  <select scsc-select size="lg" aria-label="Courthouse">
    <option>Downtown Superior Court</option>
    <option>Family Justice Center</option>
    <option>South County Courthouse</option>
  </select>
  <select scsc-select [invalid]="true" aria-invalid="true" aria-label="Filing status">
    <option value="">Choose a filing status</option>
    <option>Accepted</option>
    <option>Rejected</option>
  </select>
  <select scsc-select disabled aria-label="Department">
    <option>Department 6 (assigned)</option>
  </select>
</div>
`},"select-dependent":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscSelect } from '@scscourt/design';

interface Courthouse {
  id: string;
  name: string;
  departments: { code: string; label: string }[];
}

@Component({
  selector: 'app-select-dependent-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Courthouse"
        for="select-dependent-courthouse"
        required
        [error]="error('courthouse')"
      >
        <select
          scsc-select
          id="select-dependent-courthouse"
          formControlName="courthouse"
          [invalid]="!!error('courthouse')"
          [attr.aria-invalid]="!!error('courthouse')"
        >
          <option value="" disabled>Select a courthouse\u2026</option>
          @for (c of courthouses; track c.id) {
            <option [value]="c.id">{{ c.name }}</option>
          }
        </select>
      </scsc-form-field>

      <!-- Its options depend on the courthouse, so it stays disabled until one is chosen. -->
      <scsc-form-field
        label="Department"
        for="select-dependent-department"
        [hint]="departments().length ? '' : 'Choose a courthouse first'"
        required
        [error]="error('department')"
      >
        <select
          scsc-select
          id="select-dependent-department"
          formControlName="department"
          [invalid]="!!error('department')"
          [attr.aria-invalid]="!!error('department')"
        >
          <option value="" disabled>Select a department\u2026</option>
          @for (d of departments(); track d.code) {
            <option [value]="d.code">{{ d.label }}</option>
          }
        </select>
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">Reserve hearing date</scsc-button>
      </div>

      @if (reserved()) {
        <scsc-alert status="success" title="Reserved">{{ reserved() }}</scsc-alert>
      }
    </form>
  \`,
})
export class SelectDependentDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly reserved = signal('');

  protected readonly courthouses: Courthouse[] = [
    {
      id: 'downtown',
      name: 'Downtown Superior Court',
      departments: [
        { code: 'D3', label: 'Department 3 \u2014 Civil' },
        { code: 'D6', label: 'Department 6 \u2014 Civil' },
        { code: 'D10', label: 'Department 10 \u2014 Civil complex' },
      ],
    },
    {
      id: 'family',
      name: 'Family Justice Center',
      departments: [
        { code: 'D71', label: 'Department 71 \u2014 Family' },
        { code: 'D74', label: 'Department 74 \u2014 Family' },
      ],
    },
    {
      id: 'south',
      name: 'South County Courthouse',
      departments: [{ code: 'D16', label: 'Department 16 \u2014 Small claims' }],
    },
  ];

  protected readonly form = this.fb.nonNullable.group({
    courthouse: ['', Validators.required],
    department: [{ value: '', disabled: true }, Validators.required],
  });

  private readonly courthouseId = toSignal(this.form.controls.courthouse.valueChanges, {
    initialValue: '',
  });
  protected readonly departments = computed(
    () => this.courthouses.find((c) => c.id === this.courthouseId())?.departments ?? [],
  );

  constructor() {
    // A new courthouse invalidates the old department: clear it and enable the list.
    this.form.controls.courthouse.valueChanges.pipe(takeUntilDestroyed()).subscribe((id) => {
      const department = this.form.controls.department;
      department.reset('');
      if (id) department.enable();
      else department.disable();
    });
  }

  protected error(name: 'courthouse' | 'department'): string {
    const c = this.form.controls[name];
    if (!(c.invalid && c.touched)) return '';
    return name === 'courthouse' ? 'Choose a courthouse.' : 'Choose a department.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.reserved.set('');
      return;
    }
    const house = this.courthouses.find((c) => c.id === this.form.value.courthouse);
    const dept = this.departments().find((d) => d.code === this.form.value.department);
    this.reserved.set(dept?.label + ', ' + house?.name + '. The clerk will confirm by email.');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Courthouse"
    for="select-dependent-courthouse"
    required
    [error]="error('courthouse')"
  >
    <select
      scsc-select
      id="select-dependent-courthouse"
      formControlName="courthouse"
      [invalid]="!!error('courthouse')"
      [attr.aria-invalid]="!!error('courthouse')"
    >
      <option value="" disabled>Select a courthouse\u2026</option>
      @for (c of courthouses; track c.id) {
        <option [value]="c.id">{{ c.name }}</option>
      }
    </select>
  </scsc-form-field>

  <!-- Its options depend on the courthouse, so it stays disabled until one is chosen. -->
  <scsc-form-field
    label="Department"
    for="select-dependent-department"
    [hint]="departments().length ? '' : 'Choose a courthouse first'"
    required
    [error]="error('department')"
  >
    <select
      scsc-select
      id="select-dependent-department"
      formControlName="department"
      [invalid]="!!error('department')"
      [attr.aria-invalid]="!!error('department')"
    >
      <option value="" disabled>Select a department\u2026</option>
      @for (d of departments(); track d.code) {
        <option [value]="d.code">{{ d.label }}</option>
      }
    </select>
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">Reserve hearing date</scsc-button>
  </div>

  @if (reserved()) {
    <scsc-alert status="success" title="Reserved">{{ reserved() }}</scsc-alert>
  }
</form>
`},"select-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField, ScscSelect } from '@scscourt/design';

@Component({
  selector: 'app-select-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Department"
        hint="Where the hearing will be held"
        for="dept"
        required
        [error]="error()"
      >
        <select
          scsc-select
          id="dept"
          formControlName="department"
          [invalid]="!!error()"
          [attr.aria-invalid]="!!error()"
        >
          <option value="" disabled>Select a department\u2026</option>
          @for (d of departments; track d.code) {
            <option [value]="d.code">{{ d.label }}</option>
          }
        </select>
      </scsc-form-field>
      <div class="flex items-center gap-3">
        <scsc-button variant="primary" nativeType="submit">Set hearing</scsc-button>
        <span class="text-sm text-base-content/70"
          >Value: <code>{{ form.value.department || '\u2014' }}</code></span
        >
      </div>
    </form>
  \`,
})
export class SelectReactiveDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly departments = [
    { code: 'D5', label: 'Department 5 \u2014 Hon. M. Reyes' },
    { code: 'D7', label: 'Department 7 \u2014 Hon. A. Chen' },
    { code: 'D12', label: 'Department 12 \u2014 Hon. S. Okafor' },
  ];

  protected readonly form = this.fb.group({
    department: ['', Validators.required],
  });

  protected error(): string {
    const c = this.form.controls.department;
    return c.invalid && (c.dirty || c.touched) ? 'Choose a department.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Department"
    hint="Where the hearing will be held"
    for="dept"
    required
    [error]="error()"
  >
    <select
      scsc-select
      id="dept"
      formControlName="department"
      [invalid]="!!error()"
      [attr.aria-invalid]="!!error()"
    >
      <option value="" disabled>Select a department\u2026</option>
      @for (d of departments; track d.code) {
        <option [value]="d.code">{{ d.label }}</option>
      }
    </select>
  </scsc-form-field>
  <div class="flex items-center gap-3">
    <scsc-button variant="primary" nativeType="submit">Set hearing</scsc-button>
    <span class="text-sm text-base-content/70"
      >Value: <code>{{ form.value.department || '\u2014' }}</code></span
    >
  </div>
</form>
`}};var Ce={slug:`select`,name:`Select`,classes:[`ScscSelect`],category:`Forms`,whenToUse:["One choice from a short, fixed list (case type, department, filing status). It is a directive on the native `<select>`, so you keep the OS picker on mobile and full keyboard support.",'Lead with a disabled placeholder `<option value="">` so nothing is chosen by accident and `Validators.required` can fail.',`When one list depends on another (courthouse → department), derive the options from the parent value and reset the child when the parent changes.`,"Long lists that need typing to find an entry belong in `scsc-combobox`; several values in `scsc-multi-select`; 2–4 always-visible options in `scsc-radio`."],demos:[{id:`select-basic`,title:`Sizes and states`,description:"Default, `sm` for toolbars, `lg` for a prominent choice, invalid and disabled.",component:A,source:q[`select-basic`]},{id:`select-reactive`,title:`With Reactive Forms`,description:"Options from a data array with `[value]`; required validation drives the error and ring.",component:M,source:q[`select-reactive`]},{id:`select-dependent`,title:`Dependent selects`,description:"Courthouse → department in a scheduling form: the department options are a `computed()` of the courthouse, and the department is reset and re-enabled on every change.",component:V,source:q[`select-dependent`]}],a11y:["Native `<select>`: labelled via `scsc-form-field` `for` or `aria-label`; keyboard, type-ahead and screen-reader announcements are built in.",'`[invalid]`, or an `error` on the enclosing `scsc-form-field`, sets `aria-invalid="true"`, so the error state is announced.',`A dependent select that is disabled until its parent is chosen should say so in its hint ("Choose a courthouse first").`,"Do not use `<option>` groups longer than a screen; consider `scsc-combobox` beyond ~30 entries."],appMustProvide:["A visible label (`scsc-form-field`) and, for a dependent select, a hint that says what enables it."],related:[`combobox`,`multi-select`,`radio`,`form-field`,`input`]};export{Ce as SELECT_DOCS};