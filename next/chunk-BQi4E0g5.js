import{Aa as It,As as uM,Ca as Gv,Co as _2,Dn as Wue,Do as ae,E as Bue,Fr as kn,Go as g,Gs as zS,Hs as y_,In as Xz,Ln as YA,Lo as d_,Ma as JT,Ms as uc,Na as Jb,No as cc,Ps as ut,Rs as w_,Vo as fM,Vr as mN,Xa as Pv,Y as Fs,Zi as za,bn as Vz,br as gr,cs as lc,go as Xa,ha as Eg,hr as fz,hs as oD,ii as qo,ka as Ig,ks as t_,kt as NE,nt as IA,oi as que,pi as sn,ra as Af,si as qz,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,ys as pN,za as Lf}from"./main-O6OT5H7H.js";var me=[`Contact`,`Eligibility`,`Employment`,`Hardship`,`Sign`];var E=class r{sections=me;current=q(2);reached=q(2);steps=ut(()=>me.map((o,e)=>({label:o,state:e===this.current()?`current`:e<this.reached()?`complete`:`upcoming`})));open(o){this.current.set(o.index)}next(){this.current.update(o=>o+1),this.reached.update(o=>Math.max(o,this.current()))}static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-steps-clickable-demo`]],decls:6,vars:5,consts:[[`clickable`,`visited`,`label`,`Juror questionnaire`,3,`stepClick`,`steps`],[1,`mt-6`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[3,`click`,`disabled`],[`tone`,`muted`,`size`,`sm`,`role`,`status`]],template:function(e,t){e&1&&(Ga(0,`scsc-steps`,0),lc(`stepClick`,function(ue){return t.open(ue)}),Lf(),Ga(1,`div`,1)(2,`scsc-button`,2),lc(`click`,function(){return t.next()}),G_(3,` Next section `),Lf(),Ga(4,`scsc-text`,3),G_(5),Lf()()),e&2&&(Pv(`steps`,t.steps()),Jb(2),Pv(`disabled`,t.current()===t.sections.length-1),Jb(3),oD(` Section `,t.current()+1,` of `,t.sections.length,`: `,t.sections[t.current()],` `))},dependencies:[sn,gr,NE],encapsulation:2})};var M=class r{steps=[{label:`About you`},{label:`Benefits`},{label:`Income`,description:`Household size and monthly income`},{label:`Expenses`},{label:`Review`}];static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-steps-compact-demo`]],decls:4,vars:4,consts:[[1,`flex`,`flex-col`,`gap-6`],[`title`,`Fee waiver request`,1,`max-w-xs`],[`label`,`Fee waiver request progress`,3,`steps`,`current`],[`label`,`Fee waiver request progress, full width`,3,`steps`,`current`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-card`,1),uc(2,`scsc-steps`,2),Lf(),uc(3,`scsc-steps`,3),Lf()),e&2&&(Jb(2),Pv(`steps`,t.steps)(`current`,2),Jb(),Pv(`steps`,t.steps)(`current`,2))},dependencies:[mN,gr],encapsulation:2})};var P=class r{current=q(1);steps=[{label:`Case details`,description:`Case number and role`},{label:`Upload documents`,description:`PDF, up to 25 MB each`},{label:`Review`},{label:`Pay fees`},{label:`Filed`}];isLast=ut(()=>this.current()>=this.steps.length-1);static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-steps-efiling-demo`]],decls:8,vars:8,consts:[[`label`,`e-Filing progress`,3,`steps`,`current`],[1,`mt-6`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`ghost`,3,`click`,`disabled`],[`variant`,`primary`,3,`click`,`disabled`],[`tone`,`muted`,`size`,`sm`]],template:function(e,t){e&1&&(uc(0,`scsc-steps`,0),Ga(1,`div`,1)(2,`scsc-button`,2),lc(`click`,function(){return t.current.set(t.current()-1)}),G_(3,`Back`),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return t.current.set(t.current()+1)}),G_(5),Lf(),Ga(6,`scsc-text`,4),G_(7),Lf()()),e&2&&(Pv(`steps`,t.steps)(`current`,t.current()),Jb(2),Pv(`disabled`,t.current()===0),Jb(2),Pv(`disabled`,t.isLast()),Jb(),$f(` `,t.current()===t.steps.length-2?`Submit filing`:`Next`,` `),Jb(2),oD(`Step `,t.current()+1,` of `,t.steps.length,`: `,t.steps[t.current()].label))},dependencies:[gr,sn,NE],encapsulation:2})};var fe=[`stepHeading`];function he(r,o){if(r&1&&(Ga(0,`div`,5)(1,`scsc-form-field`,12)(2,`input`,13),HS(),Lf()(),Ga(3,`scsc-form-field`,14)(4,`input`,15),HS(),Lf()()()),r&2){let e=y_();Jb(),Pv(`error`,e.error(`info`,`name`)),Jb(),Pv(`invalid`,!!e.error(`info`,`name`)),cc(`aria-invalid`,!!e.error(`info`,`name`)),zS(),Jb(2),zS()}}function be(r,o){if(r&1&&(Ga(0,`div`,6)(1,`scsc-form-field`,16)(2,`input`,17),HS(),Lf()(),Ga(3,`scsc-form-field`,18)(4,`input`,19),HS(),Lf()()()),r&2){let e=y_();Jb(),Pv(`error`,e.error(`income`,`household`)),Jb(),Pv(`invalid`,!!e.error(`income`,`household`)),cc(`aria-invalid`,!!e.error(`income`,`household`)),zS(),Jb(),Pv(`error`,e.error(`income`,`monthly`)),Jb(),Pv(`invalid`,!!e.error(`income`,`monthly`)),cc(`aria-invalid`,!!e.error(`income`,`monthly`)),zS()}}function ge(r,o){if(r&1&&(Ga(0,`p`,7),G_(1),uM(2,`currency`),Lf()),r&2){let e=y_();Jb(),oD(` `,e.form.value.info?.name,` · household of `,e.form.value.income?.household,` · `,fM(2,3,e.form.value.income?.monthly,`USD`),` a month. Submit the request, or go back to change an answer. `)}}function ve(r,o){if(r&1){let e=d_();Ga(0,`scsc-button`,20),lc(`click`,function(){Eg(e);let m=y_();return Ig(m.back())}),G_(1,`Back`),Lf()}}function Se(r,o){if(r&1&&(Ga(0,`scsc-button`,10),G_(1),Lf()),r&2){let e=y_();Jb(),$f(` `,e.step()===e.steps.length-1?`Submit request (FW-001)`:`Next`,` `)}}function ye(r,o){r&1&&(Ga(0,`scsc-alert`,11),G_(1,` The clerk will decide within five court days and mail you the order. `),Lf())}var I=class r{fb=g(Wue);injector=g(ae);heading=_2.required(`stepHeading`,{read:It});steps=[{label:`Your information`},{label:`Income`},{label:`Review`}];step=q(0);submitted=q(!1);current=ut(()=>this.submitted()?this.steps.length:this.step());form=this.fb.nonNullable.group({info:this.fb.nonNullable.group({name:[``,Fs.required],caseNumber:[``]}),income:this.fb.nonNullable.group({household:[1,[Fs.required,Fs.min(1)]],monthly:[null,[Fs.required,Fs.min(0)]]})});error(o,e){let t=this.form.get([o,e]);return t&&t.invalid&&t.touched?`Answer this question to continue.`:``}next(){let e=[this.form.controls.info,this.form.controls.income][this.step()];if(!(e&&(e.markAllAsTouched(),e.invalid))){if(this.step()===this.steps.length-1){this.submitted.set(!0);return}this.go(this.step()+1)}}back(){this.go(this.step()-1)}go(o){this.step.set(o),Xa(()=>this.heading().nativeElement.focus(),{injector:this.injector})}static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-steps-form-demo`]],viewQuery:function(e,t){e&1&&Gv(t.heading,fe,5,It),e&2&&w_()},decls:13,vars:12,consts:[[`stepHeading`,``],[1,`flex`,`max-w-xl`,`flex-col`,`gap-6`],[`label`,`Fee waiver request progress`,3,`steps`,`current`],[1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`tabindex`,`-1`,3,`level`,`visualLevel`],[`formGroupName`,`info`,1,`flex`,`flex-col`,`gap-4`],[`formGroupName`,`income`,1,`flex`,`flex-col`,`gap-4`],[1,`text-sm`],[1,`flex`,`gap-2`],[`variant`,`ghost`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Request submitted`],[`label`,`Full name`,`for`,`steps-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`steps-name`,`formControlName`,`name`,`autocomplete`,`name`,`required`,``,3,`invalid`],[`label`,`Case number`,`for`,`steps-case`,`hint`,`If you already have a case`],[`scsc-input`,``,`id`,`steps-case`,`formControlName`,`caseNumber`],[`label`,`People in your household`,`for`,`steps-household`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`steps-household`,`type`,`number`,`min`,`1`,`formControlName`,`household`,`required`,``,3,`invalid`],[`label`,`Monthly household income`,`for`,`steps-income`,`hint`,`Before taxes, in US dollars`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`steps-income`,`type`,`number`,`min`,`0`,`inputmode`,`decimal`,`formControlName`,`monthly`,`required`,``,3,`invalid`],[`variant`,`ghost`,3,`click`]],template:function(e,t){if(e&1&&(Ga(0,`div`,1),uc(1,`scsc-steps`,2),Ga(2,`form`,3),lc(`ngSubmit`,function(){return t.next()}),Ga(3,`scsc-heading`,4,0),G_(5),Lf(),JT(6,he,5,3,`div`,5)(7,be,5,6,`div`,6)(8,ge,3,6,`p`,7),Ga(9,`div`,8),JT(10,ve,2,0,`scsc-button`,9),JT(11,Se,2,1,`scsc-button`,10),Lf(),JT(12,ye,2,0,`scsc-alert`,11),Lf()()),e&2){let m;Jb(),Pv(`steps`,t.steps)(`current`,t.current()),Jb(),Pv(`formGroup`,t.form),Jb(),Pv(`level`,3)(`visualLevel`,5),Jb(2),oD(` Step `,t.step()+1,` of `,t.steps.length,`: `,t.steps[t.step()].label,` `),Jb(),t_((m=t.step())===0?6:m===1?7:8),Jb(4),t_(t.step()>0&&!t.submitted()?10:-1),Jb(),t_(t.submitted()?-1:11),Jb(),t_(t.submitted()?12:-1)}},dependencies:[Kue,Bue,IA,qz,Hue,que,WA,fz,Vz,Xz,YA,za,sn,Vn,kn,qo,gr,pN],encapsulation:2})};var j=class r{rejected=[{label:`Case`},{label:`Documents`,state:`error`,description:`1 file is not searchable`},{label:`Fees`},{label:`Review`}];service=[{label:`Summons`},{label:`Questionnaire`,state:`warning`,description:`2 answers missing`},{label:`Postponement`,state:`skipped`,optional:!0},{label:`Check-in`,state:`disabled`,description:`Opens Oct 16`}];filed=[{label:`Prepare`},{label:`File`},{label:`Served`}];static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-steps-states-demo`]],decls:4,vars:6,consts:[[1,`flex`,`flex-col`,`gap-10`],[`label`,`Filing with a rejected document`,3,`steps`,`current`],[`labelPosition`,`end`,`label`,`Jury service progress`,3,`steps`,`current`],[`label`,`Completed filing`,3,`steps`,`current`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-steps`,1)(2,`scsc-steps`,2)(3,`scsc-steps`,3),Lf()),e&2&&(Jb(),Pv(`steps`,t.rejected)(`current`,1),Jb(),Pv(`steps`,t.service)(`current`,1),Jb(),Pv(`steps`,t.filed)(`current`,3))},dependencies:[gr],encapsulation:2})};var B=class r{steps=[{label:`Filed`,description:`Sep 12, 2026 · envelope EF-2026-0912-4471`},{label:`Accepted by the clerk`,description:`Sep 14, 2026`},{label:`Served on the other parties`,description:`Proof of service due Oct 14`},{label:`Hearing`,description:`Oct 28, 2026 · 9:00 a.m. · Dept. 10`},{label:`Ruling`,icon:`court.gavel`}];static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-steps-vertical-demo`]],decls:2,vars:2,consts:[[`title`,`Motion to compel: status`,1,`max-w-md`],[`orientation`,`vertical`,`label`,`Motion to compel: status`,3,`steps`,`current`]],template:function(e,t){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-steps`,1),Lf()),e&2&&(Jb(),Pv(`steps`,t.steps)(`current`,2))},dependencies:[mN,gr],encapsulation:2})};var b={"steps-clickable":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscStep, ScscStepClick, ScscSteps, ScscText } from '@scscourt/design';

const SECTIONS = ['Contact', 'Eligibility', 'Employment', 'Hardship', 'Sign'];

@Component({
  selector: 'app-steps-clickable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscSteps, ScscText],
  template: \`
    <scsc-steps
      [steps]="steps()"
      clickable="visited"
      label="Juror questionnaire"
      (stepClick)="open($event)"
    />

    <div class="mt-6 flex flex-wrap items-center gap-3">
      <scsc-button [disabled]="current() === sections.length - 1" (click)="next()">
        Next section
      </scsc-button>
      <scsc-text tone="muted" size="sm" role="status">
        Section {{ current() + 1 }} of {{ sections.length }}: {{ sections[current()] }}
      </scsc-text>
    </div>
  \`,
})
export class StepsClickableDemo {
  protected readonly sections = SECTIONS;
  protected readonly current = signal(2);
  /** The furthest section the juror has opened; everything before it can be revisited. */
  private readonly reached = signal(2);

  protected readonly steps = computed<ScscStep[]>(() =>
    SECTIONS.map((label, i) => ({
      label,
      state: i === this.current() ? 'current' : i < this.reached() ? 'complete' : 'upcoming',
    })),
  );

  protected open(click: ScscStepClick): void {
    this.current.set(click.index);
  }

  protected next(): void {
    this.current.update((i) => i + 1);
    this.reached.update((r) => Math.max(r, this.current()));
  }
}
`,html:`<scsc-steps
  [steps]="steps()"
  clickable="visited"
  label="Juror questionnaire"
  (stepClick)="open($event)"
/>

<div class="mt-6 flex flex-wrap items-center gap-3">
  <scsc-button [disabled]="current() === sections.length - 1" (click)="next()">
    Next section
  </scsc-button>
  <scsc-text tone="muted" size="sm" role="status">
    Section {{ current() + 1 }} of {{ sections.length }}: {{ sections[current()] }}
  </scsc-text>
</div>
`},"steps-compact":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscStep, ScscSteps } from '@scscourt/design';

@Component({
  selector: 'app-steps-compact-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscSteps],
  template: \`
    <div class="flex flex-col gap-6">
      <!-- Too narrow for five markers: "Step 3 of 5 \u2014 Income" and a progress bar -->
      <scsc-card title="Fee waiver request" class="max-w-xs">
        <scsc-steps [steps]="steps" [current]="2" label="Fee waiver request progress" />
      </scsc-card>
      <!-- The same steps with room for the row -->
      <scsc-steps [steps]="steps" [current]="2" label="Fee waiver request progress, full width" />
    </div>
  \`,
})
export class StepsCompactDemo {
  protected readonly steps: ScscStep[] = [
    { label: 'About you' },
    { label: 'Benefits' },
    { label: 'Income', description: 'Household size and monthly income' },
    { label: 'Expenses' },
    { label: 'Review' },
  ];
}
`,html:`<div class="flex flex-col gap-6">
  <!-- Too narrow for five markers: "Step 3 of 5 \u2014 Income" and a progress bar -->
  <scsc-card title="Fee waiver request" class="max-w-xs">
    <scsc-steps [steps]="steps" [current]="2" label="Fee waiver request progress" />
  </scsc-card>
  <!-- The same steps with room for the row -->
  <scsc-steps [steps]="steps" [current]="2" label="Fee waiver request progress, full width" />
</div>
`},"steps-efiling":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscStep, ScscSteps, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-steps-efiling-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSteps, ScscButton, ScscText],
  template: \`
    <scsc-steps [steps]="steps" [current]="current()" label="e-Filing progress" />

    <div class="mt-6 flex flex-wrap items-center gap-3">
      <scsc-button variant="ghost" [disabled]="current() === 0" (click)="current.set(current() - 1)"
        >Back</scsc-button
      >
      <scsc-button variant="primary" [disabled]="isLast()" (click)="current.set(current() + 1)">
        {{ current() === steps.length - 2 ? 'Submit filing' : 'Next' }}
      </scsc-button>
      <scsc-text tone="muted" size="sm"
        >Step {{ current() + 1 }} of {{ steps.length }}: {{ steps[current()].label }}</scsc-text
      >
    </div>
  \`,
})
export class StepsEfilingDemo {
  protected readonly current = signal(1);

  protected readonly steps: ScscStep[] = [
    { label: 'Case details', description: 'Case number and role' },
    { label: 'Upload documents', description: 'PDF, up to 25 MB each' },
    { label: 'Review' },
    { label: 'Pay fees' },
    { label: 'Filed' },
  ];

  protected readonly isLast = computed(() => this.current() >= this.steps.length - 1);
}
`,html:`<scsc-steps [steps]="steps" [current]="current()" label="e-Filing progress" />

<div class="mt-6 flex flex-wrap items-center gap-3">
  <scsc-button variant="ghost" [disabled]="current() === 0" (click)="current.set(current() - 1)"
    >Back</scsc-button
  >
  <scsc-button variant="primary" [disabled]="isLast()" (click)="current.set(current() + 1)">
    {{ current() === steps.length - 2 ? 'Submit filing' : 'Next' }}
  </scsc-button>
  <scsc-text tone="muted" size="sm"
    >Step {{ current() + 1 }} of {{ steps.length }}: {{ steps[current()].label }}</scsc-text
  >
</div>
`},"steps-form":{ts:`import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscFormField,
  ScscHeading,
  ScscInput,
  ScscStep,
  ScscSteps,
} from '@scscourt/design';

@Component({
  selector: 'app-steps-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFormField,
    ScscHeading,
    ScscInput,
    ScscSteps,
  ],
  template: \`
    <div class="flex max-w-xl flex-col gap-6">
      <scsc-steps [steps]="steps" [current]="current()" label="Fee waiver request progress" />

      <form [formGroup]="form" (ngSubmit)="next()" class="flex flex-col gap-4">
        <!-- Focus moves here on every step change, so screen-reader users hear where they are. -->
        <scsc-heading #stepHeading [level]="3" [visualLevel]="5" tabindex="-1">
          Step {{ step() + 1 }} of {{ steps.length }}: {{ steps[step()].label }}
        </scsc-heading>

        @switch (step()) {
          @case (0) {
            <div formGroupName="info" class="flex flex-col gap-4">
              <scsc-form-field
                label="Full name"
                for="steps-name"
                required
                [error]="error('info', 'name')"
              >
                <input
                  scsc-input
                  id="steps-name"
                  formControlName="name"
                  autocomplete="name"
                  required
                  [invalid]="!!error('info', 'name')"
                  [attr.aria-invalid]="!!error('info', 'name')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Case number"
                for="steps-case"
                hint="If you already have a case"
              >
                <input scsc-input id="steps-case" formControlName="caseNumber" />
              </scsc-form-field>
            </div>
          }
          @case (1) {
            <div formGroupName="income" class="flex flex-col gap-4">
              <scsc-form-field
                label="People in your household"
                for="steps-household"
                required
                [error]="error('income', 'household')"
              >
                <input
                  scsc-input
                  id="steps-household"
                  type="number"
                  min="1"
                  formControlName="household"
                  required
                  [invalid]="!!error('income', 'household')"
                  [attr.aria-invalid]="!!error('income', 'household')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Monthly household income"
                for="steps-income"
                hint="Before taxes, in US dollars"
                required
                [error]="error('income', 'monthly')"
              >
                <input
                  scsc-input
                  id="steps-income"
                  type="number"
                  min="0"
                  inputmode="decimal"
                  formControlName="monthly"
                  required
                  [invalid]="!!error('income', 'monthly')"
                  [attr.aria-invalid]="!!error('income', 'monthly')"
                />
              </scsc-form-field>
            </div>
          }
          @default {
            <p class="text-sm">
              {{ form.value.info?.name }} \xB7 household of {{ form.value.income?.household }} \xB7
              {{ form.value.income?.monthly | currency: 'USD' }} a month. Submit the request, or go
              back to change an answer.
            </p>
          }
        }

        <div class="flex gap-2">
          @if (step() > 0 && !submitted()) {
            <scsc-button variant="ghost" (click)="back()">Back</scsc-button>
          }
          @if (!submitted()) {
            <scsc-button variant="primary" nativeType="submit">
              {{ step() === steps.length - 1 ? 'Submit request (FW-001)' : 'Next' }}
            </scsc-button>
          }
        </div>

        @if (submitted()) {
          <scsc-alert status="success" title="Request submitted">
            The clerk will decide within five court days and mail you the order.
          </scsc-alert>
        }
      </form>
    </div>
  \`,
})
export class StepsFormDemo {
  private readonly fb = inject(FormBuilder);
  private readonly injector = inject(Injector);
  private readonly heading = viewChild.required('stepHeading', { read: ElementRef });

  protected readonly steps: ScscStep[] = [
    { label: 'Your information' },
    { label: 'Income' },
    { label: 'Review' },
  ];
  /** The step on screen; after submitting, \`current\` moves past the end so every step is done. */
  protected readonly step = signal(0);
  protected readonly submitted = signal(false);
  protected readonly current = computed(() => (this.submitted() ? this.steps.length : this.step()));

  protected readonly form = this.fb.nonNullable.group({
    info: this.fb.nonNullable.group({ name: ['', Validators.required], caseNumber: [''] }),
    income: this.fb.nonNullable.group({
      household: [1, [Validators.required, Validators.min(1)]],
      monthly: [null as number | null, [Validators.required, Validators.min(0)]],
    }),
  });

  protected error(group: 'info' | 'income', name: string): string {
    const c = this.form.get([group, name]);
    return c && c.invalid && c.touched ? 'Answer this question to continue.' : '';
  }

  /** Validate only the step on screen before moving on. */
  protected next(): void {
    const groups = [this.form.controls.info, this.form.controls.income];
    const group = groups[this.step()];
    if (group) {
      group.markAllAsTouched();
      if (group.invalid) return;
    }
    if (this.step() === this.steps.length - 1) {
      this.submitted.set(true);
      return;
    }
    this.go(this.step() + 1);
  }

  protected back(): void {
    this.go(this.step() - 1);
  }

  private go(index: number): void {
    this.step.set(index);
    afterNextRender(() => (this.heading().nativeElement as HTMLElement).focus(), {
      injector: this.injector,
    });
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-6">
  <scsc-steps [steps]="steps" [current]="current()" label="Fee waiver request progress" />

  <form [formGroup]="form" (ngSubmit)="next()" class="flex flex-col gap-4">
    <!-- Focus moves here on every step change, so screen-reader users hear where they are. -->
    <scsc-heading #stepHeading [level]="3" [visualLevel]="5" tabindex="-1">
      Step {{ step() + 1 }} of {{ steps.length }}: {{ steps[step()].label }}
    </scsc-heading>

    @switch (step()) {
      @case (0) {
        <div formGroupName="info" class="flex flex-col gap-4">
          <scsc-form-field
            label="Full name"
            for="steps-name"
            required
            [error]="error('info', 'name')"
          >
            <input
              scsc-input
              id="steps-name"
              formControlName="name"
              autocomplete="name"
              required
              [invalid]="!!error('info', 'name')"
              [attr.aria-invalid]="!!error('info', 'name')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Case number"
            for="steps-case"
            hint="If you already have a case"
          >
            <input scsc-input id="steps-case" formControlName="caseNumber" />
          </scsc-form-field>
        </div>
      }
      @case (1) {
        <div formGroupName="income" class="flex flex-col gap-4">
          <scsc-form-field
            label="People in your household"
            for="steps-household"
            required
            [error]="error('income', 'household')"
          >
            <input
              scsc-input
              id="steps-household"
              type="number"
              min="1"
              formControlName="household"
              required
              [invalid]="!!error('income', 'household')"
              [attr.aria-invalid]="!!error('income', 'household')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Monthly household income"
            for="steps-income"
            hint="Before taxes, in US dollars"
            required
            [error]="error('income', 'monthly')"
          >
            <input
              scsc-input
              id="steps-income"
              type="number"
              min="0"
              inputmode="decimal"
              formControlName="monthly"
              required
              [invalid]="!!error('income', 'monthly')"
              [attr.aria-invalid]="!!error('income', 'monthly')"
            />
          </scsc-form-field>
        </div>
      }
      @default {
        <p class="text-sm">
          {{ form.value.info?.name }} \xB7 household of {{ form.value.income?.household }} \xB7
          {{ form.value.income?.monthly | currency: 'USD' }} a month. Submit the request, or go
          back to change an answer.
        </p>
      }
    }

    <div class="flex gap-2">
      @if (step() > 0 && !submitted()) {
        <scsc-button variant="ghost" (click)="back()">Back</scsc-button>
      }
      @if (!submitted()) {
        <scsc-button variant="primary" nativeType="submit">
          {{ step() === steps.length - 1 ? 'Submit request (FW-001)' : 'Next' }}
        </scsc-button>
      }
    </div>

    @if (submitted()) {
      <scsc-alert status="success" title="Request submitted">
        The clerk will decide within five court days and mail you the order.
      </scsc-alert>
    }
  </form>
</div>
`},"steps-states":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStep, ScscSteps } from '@scscourt/design';

@Component({
  selector: 'app-steps-states-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSteps],
  template: \`
    <div class="flex flex-col gap-10">
      <!-- A rejected document: the step says so with an alert marker and in words -->
      <scsc-steps [steps]="rejected" [current]="1" label="Filing with a rejected document" />
      <!-- Labels beside the markers; warning, skipped and unavailable steps -->
      <scsc-steps
        [steps]="service"
        [current]="1"
        labelPosition="end"
        label="Jury service progress"
      />
      <!-- Past the end: every step is complete -->
      <scsc-steps [steps]="filed" [current]="3" label="Completed filing" />
    </div>
  \`,
})
export class StepsStatesDemo {
  protected readonly rejected: ScscStep[] = [
    { label: 'Case' },
    { label: 'Documents', state: 'error', description: '1 file is not searchable' },
    { label: 'Fees' },
    { label: 'Review' },
  ];

  protected readonly service: ScscStep[] = [
    { label: 'Summons' },
    { label: 'Questionnaire', state: 'warning', description: '2 answers missing' },
    { label: 'Postponement', state: 'skipped', optional: true },
    { label: 'Check-in', state: 'disabled', description: 'Opens Oct 16' },
  ];

  protected readonly filed: ScscStep[] = [
    { label: 'Prepare' },
    { label: 'File' },
    { label: 'Served' },
  ];
}
`,html:`<div class="flex flex-col gap-10">
  <!-- A rejected document: the step says so with an alert marker and in words -->
  <scsc-steps [steps]="rejected" [current]="1" label="Filing with a rejected document" />
  <!-- Labels beside the markers; warning, skipped and unavailable steps -->
  <scsc-steps
    [steps]="service"
    [current]="1"
    labelPosition="end"
    label="Jury service progress"
  />
  <!-- Past the end: every step is complete -->
  <scsc-steps [steps]="filed" [current]="3" label="Completed filing" />
</div>
`},"steps-vertical":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscStep, ScscSteps } from '@scscourt/design';

@Component({
  selector: 'app-steps-vertical-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscSteps],
  template: \`
    <scsc-card title="Motion to compel: status" class="max-w-md">
      <scsc-steps
        orientation="vertical"
        [steps]="steps"
        [current]="2"
        label="Motion to compel: status"
      />
    </scsc-card>
  \`,
})
export class StepsVerticalDemo {
  protected readonly steps: ScscStep[] = [
    { label: 'Filed', description: 'Sep 12, 2026 \xB7 envelope EF-2026-0912-4471' },
    { label: 'Accepted by the clerk', description: 'Sep 14, 2026' },
    { label: 'Served on the other parties', description: 'Proof of service due Oct 14' },
    { label: 'Hearing', description: 'Oct 28, 2026 \xB7 9:00 a.m. \xB7 Dept. 10' },
    { label: 'Ruling', icon: 'court.gavel' },
  ];
}
`,html:`<scsc-card title="Motion to compel: status" class="max-w-md">
  <scsc-steps
    orientation="vertical"
    [steps]="steps"
    [current]="2"
    label="Motion to compel: status"
  />
</scsc-card>
`}};var it={slug:`steps`,name:`Steps`,classes:[`ScscSteps`],category:`Navigation`,whenToUse:[`Show where the user is in a multi-step flow (e-filing, a fee waiver request, a juror questionnaire), or how far a filing has got (filed, accepted, served).`,"Only the indicator: your page owns `current` and whatever changes the content. For the whole flow (step content, Back / Next, validation, focus) use `scsc-wizard`, which renders this component. The guide [Wizard vs. steps](/docs/patterns/wizard-vs-steps) compares them.","States are derived from `current` (before it complete, after it upcoming); set `state` on a step for anything else: `error` for a step with problems, `warning`, `skipped`, `disabled`.",'`orientation="auto"` (the default) draws a row and switches to a compact "Step 2 of 5 — Documents" line with a progress bar when its **container** is too narrow for the row, so it also fits a sidebar card. Use `vertical` for a status column with descriptions.','`clickable="visited"` (or `all`) turns steps into buttons that emit `(stepClick)`; the current and disabled steps never are. Keep it off for pure status displays.',"Three to six short labels; put detail in `description`, not the label."],demos:[{id:`steps-efiling`,title:`Horizontal`,description:"Back / Next move `current`; steps before it are complete, with descriptions under two labels.",component:P,source:b[`steps-efiling`]},{id:`steps-states`,title:`States`,description:'Explicit `state`s: an `error` step, `warning`, `skipped` and `disabled` (labels beside the markers with `labelPosition="end"`), and every step complete once `current` passes the end.',component:j,source:b[`steps-states`]},{id:`steps-vertical`,title:`Vertical status`,description:'`orientation="vertical"`: a filing\'s progress in a card, with descriptions and a custom `icon` on the last step.',component:B,source:b[`steps-vertical`]},{id:`steps-compact`,title:`Auto: compact in a narrow container`,description:`The same five steps in a 20rem card (the compact line and bar) and across the page (the row). Resize the window to see the switch.`,component:M,source:b[`steps-compact`]},{id:`steps-clickable`,title:`Clickable visited steps`,description:'`clickable="visited"` with `(stepClick)`: go back to any section already opened, and forward again to the furthest one.',component:E,source:b[`steps-clickable`]},{id:`steps-form`,title:`Validated multi-step form`,description:"A fee waiver request built by hand: Next validates the current step's group, focus moves to the new step heading, and submitting sets `current` past the end. `scsc-wizard` does all of this for you.",component:I,source:b[`steps-form`]}],a11y:['An ordered list (`<ol>`) named by `label` ("Progress" by default); name it after the flow when a page has more than one.','The current step has `aria-current="step"`. Every state is stated in visually hidden words ("Documents, completed", "Fees, has a problem") **and** drawn with its own marker (a check, an alert, a dash, the number), never by colour alone (1.4.1). The words come from `completed` and `current` in `provideScscLabels()`; `stateLabels` overrides any of them.','Markers and connectors are decorative (`aria-hidden`); the label, "Optional" and the description are the text. Filled markers keep a border so they stay visible in forced-colours mode.',`Clickable steps are native buttons named by their label, state and description; the rest are plain text, so there is nothing to Tab to on a status display. Buttons meet the 44px target in comfortable density.`,'The compact view says "Step 2 of 5: Documents" in text; its progress bar is decorative. It measures its own container (`observeSize`), so it also switches inside a narrow card.','When the step changes, move focus to the new step\'s heading (with `tabindex="-1"`) and announce it, or use `scsc-wizard`, which does both.'],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves through the clickable steps in order; steps that are not clickable are skipped.`},{keys:`Enter / Space`,action:"Activates the focused step: emits `(stepClick)` with its index."}],aria:['`<ol aria-label>` with one `<li>` per step; `aria-current="step"` on the current one.',"Visually hidden state words inside each step; `aria-hidden` on markers, connectors and the compact progress bar."],appMustProvide:["A `label` naming the flow when a page shows more than one indicator.","Focus management and an announcement when the step changes, unless you use `scsc-wizard`."],related:[`wizard`,`progress`,`timeline`,`tabs`]};export{it as STEPS_DOCS};