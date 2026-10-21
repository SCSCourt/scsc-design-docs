import{Ca as Gv,Co as _2,Do as ae,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Jr as oe,K as Fi,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Nt as Nn,Ps as ut,Rs as w_,Xa as Pv,Y as Fs,Zo as i_,_s as o_,bn as Vz,cs as lc,ds as nD,go as Xa,ha as Eg,hi as st,ii as qo,ka as Ig,ks as t_,m as Aa,nt as IA,oi as que,on as Te,ot as Ie,pi as sn,ra as Af,sa as C_,sn as Tr,ta as $f,tt as Hue,ui as rt,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var A={"a11y-utilities-announcer":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SCSC_LABELS, ScscAnnouncer, ScscFormField, ScscInput } from '@scscourt/design';

interface Hearing {
  caseNumber: string;
  title: string;
  time: string;
}

@Component({
  selector: 'app-a11y-utilities-announcer-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscInput],
  template: \`
    <div class="flex max-w-lg flex-col gap-3">
      <scsc-form-field
        label="Filter today's hearings"
        for="ann-filter"
        hint="Case number or party name"
      >
        <input
          scsc-input
          id="ann-filter"
          type="search"
          [value]="query()"
          (input)="filter($event)"
        />
      </scsc-form-field>
      <!-- The count is visible for everyone; the announcer speaks it once typing pauses. -->
      <p class="text-sm text-base-content/70">{{ labels().results(matches().length) }}</p>
      <ul class="divide-y divide-base-300 rounded-box border border-base-300 bg-base-100">
        @for (h of matches(); track h.caseNumber) {
          <li class="flex justify-between gap-4 px-4 py-2 text-sm">
            <span
              ><span class="tnum">{{ h.caseNumber }}</span> \xB7 {{ h.title }}</span
            >
            <span class="tnum text-base-content/70">{{ h.time }}</span>
          </li>
        } @empty {
          <li class="px-4 py-2 text-sm text-base-content/70">{{ labels().noResults }}</li>
        }
      </ul>
    </div>
  \`,
})
export class A11yUtilitiesAnnouncerDemo {
  private readonly announcer = inject(ScscAnnouncer);
  protected readonly labels = inject(SCSC_LABELS);

  private readonly hearings: Hearing[] = [
    { caseNumber: '24CV012345', title: 'Alvarez v. Northgate Property Mgmt.', time: '9:00 AM' },
    { caseNumber: '24FL004988', title: 'In re Marriage of Chen', time: '9:30 AM' },
    { caseNumber: '23PR001207', title: 'Estate of Delgado', time: '10:15 AM' },
    { caseNumber: '24CV013002', title: 'Okafor v. Bay Transit', time: '1:30 PM' },
  ];
  protected readonly query = signal('');
  protected readonly matches = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.hearings.filter(
      (h) => !q || h.caseNumber.toLowerCase().includes(q) || h.title.toLowerCase().includes(q),
    );
  });

  protected filter(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.announcer.announce(this.labels().results(this.matches().length));
  }
}
`,html:`<div class="flex max-w-lg flex-col gap-3">
  <scsc-form-field
    label="Filter today's hearings"
    for="ann-filter"
    hint="Case number or party name"
  >
    <input
      scsc-input
      id="ann-filter"
      type="search"
      [value]="query()"
      (input)="filter($event)"
    />
  </scsc-form-field>
  <!-- The count is visible for everyone; the announcer speaks it once typing pauses. -->
  <p class="text-sm text-base-content/70">{{ labels().results(matches().length) }}</p>
  <ul class="divide-y divide-base-300 rounded-box border border-base-300 bg-base-100">
    @for (h of matches(); track h.caseNumber) {
      <li class="flex justify-between gap-4 px-4 py-2 text-sm">
        <span
          ><span class="tnum">{{ h.caseNumber }}</span> \xB7 {{ h.title }}</span
        >
        <span class="tnum text-base-content/70">{{ h.time }}</span>
      </li>
    } @empty {
      <li class="px-4 py-2 text-sm text-base-content/70">{{ labels().noResults }}</li>
    }
  </ul>
</div>
`},"a11y-utilities-error-summary":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscButton,
  ScscErrorSummary,
  ScscFormField,
  ScscInput,
  type ScscFormError,
} from '@scscourt/design';

@Component({
  selector: 'app-a11y-utilities-error-summary-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscErrorSummary, ScscFormField, ScscInput],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4" novalidate>
      @if (errors().length) {
        <scsc-error-summary [errors]="errors()" />
      }
      <scsc-form-field
        label="Case number"
        for="es-case"
        hint="Like 24CV012345"
        required
        [error]="errorFor('caseNumber')"
      >
        <input
          scsc-input
          id="es-case"
          formControlName="caseNumber"
          [invalid]="!!errorFor('caseNumber')"
        />
      </scsc-form-field>
      <scsc-form-field label="Contact email" for="es-email" required [error]="errorFor('email')">
        <input
          scsc-input
          id="es-email"
          type="email"
          autocomplete="email"
          formControlName="email"
          [invalid]="!!errorFor('email')"
        />
      </scsc-form-field>
      <div>
        <scsc-button nativeType="submit" variant="primary">Request copies</scsc-button>
      </div>
      @if (sent()) {
        <p role="status" class="text-sm">Request sent for {{ form.value.caseNumber }}.</p>
      }
    </form>
  \`,
})
export class A11yUtilitiesErrorSummaryDemo {
  private readonly injector = inject(Injector);
  private readonly summary = viewChild(ScscErrorSummary);

  protected readonly form = new FormGroup({
    caseNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\\d{2}[A-Z]{2}\\d{6}$/)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });
  protected readonly errors = signal<ScscFormError[]>([]);
  protected readonly sent = signal(false);
  private readonly submitted = signal(false);

  private readonly messages: Record<string, Record<string, string>> = {
    caseNumber: {
      required: 'Enter the case number',
      pattern: 'Enter the case number in the format 24CV012345',
    },
    email: {
      required: 'Enter an email address for the copies',
      email: 'Enter an email address like name@example.com',
    },
  };

  protected errorFor(name: 'caseNumber' | 'email'): string {
    const c = this.form.controls[name];
    if (!this.submitted() || !c.errors) return '';
    const key = Object.keys(c.errors)[0];
    return this.messages[name][key] ?? 'Check this field';
  }

  protected submit(): void {
    this.submitted.set(true);
    this.sent.set(false);
    const ids = { caseNumber: 'es-case', email: 'es-email' } as const;
    const list = (Object.keys(ids) as (keyof typeof ids)[])
      .map((name) => ({ id: ids[name], message: this.errorFor(name) }))
      .filter((e) => e.message);
    this.errors.set(list);
    if (list.length) {
      // Wait for the summary to render, then move focus to it.
      afterNextRender(() => this.summary()?.focus(), { injector: this.injector });
    } else {
      this.sent.set(true);
    }
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4" novalidate>
  @if (errors().length) {
    <scsc-error-summary [errors]="errors()" />
  }
  <scsc-form-field
    label="Case number"
    for="es-case"
    hint="Like 24CV012345"
    required
    [error]="errorFor('caseNumber')"
  >
    <input
      scsc-input
      id="es-case"
      formControlName="caseNumber"
      [invalid]="!!errorFor('caseNumber')"
    />
  </scsc-form-field>
  <scsc-form-field label="Contact email" for="es-email" required [error]="errorFor('email')">
    <input
      scsc-input
      id="es-email"
      type="email"
      autocomplete="email"
      formControlName="email"
      [invalid]="!!errorFor('email')"
    />
  </scsc-form-field>
  <div>
    <scsc-button nativeType="submit" variant="primary">Request copies</scsc-button>
  </div>
  @if (sent()) {
    <p role="status" class="text-sm">Request sent for {{ form.value.caseNumber }}.</p>
  }
</form>
`},"a11y-utilities-popup":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscPopup,
  ScscPopupPanel,
  ScscPopupTrigger,
  ScscSelect,
} from '@scscourt/design';

@Component({
  selector: 'app-a11y-utilities-popup-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscPopup,
    ScscPopupPanel,
    ScscPopupTrigger,
    ScscSelect,
  ],
  template: \`
    <div class="flex flex-wrap items-start gap-6">
      <!-- A disclosure: shows and hides content in place. Focus stays on the button. -->
      <div scscPopup #filters="scscPopup" class="w-72">
        <scsc-button scscPopupTrigger variant="neutral" outline>More filters</scsc-button>
        <div
          scscPopupPanel
          class="mt-2 flex flex-col gap-3 rounded-box border border-base-300 bg-base-100 p-3"
        >
          <scsc-form-field label="Department" for="filter-dept">
            <select scsc-select id="filter-dept">
              <option>All departments</option>
              <option>Civil</option>
              <option>Family</option>
              <option>Probate</option>
            </select>
          </scsc-form-field>
          <scsc-form-field label="Filed after" for="filter-date">
            <input scsc-input id="filter-date" type="date" />
          </scsc-form-field>
        </div>
      </div>

      <!-- A non-modal dialog: focus moves in on open; Escape or Save returns it to the button. -->
      <div scscPopup="dialog" #assign="scscPopup" class="relative">
        <scsc-button scscPopupTrigger variant="primary">Assign judge</scsc-button>
        @if (assign.open()) {
          <div
            scscPopupPanel
            role="dialog"
            aria-labelledby="assign-title"
            class="absolute left-0 top-full z-20 mt-2 flex w-72 flex-col gap-3 rounded-box border border-base-300 bg-base-100 p-4 elevate-md"
          >
            <h3 id="assign-title" class="font-semibold">Assign 24CV012345</h3>
            <scsc-form-field label="Judicial officer" for="assign-judge">
              <input scsc-input id="assign-judge" [value]="judge()" #field />
            </scsc-form-field>
            <div class="flex justify-end gap-2">
              <scsc-button variant="ghost" (click)="assign.close({ restoreFocus: true })">
                Cancel
              </scsc-button>
              <scsc-button
                variant="primary"
                (click)="judge.set(field.value); assign.close({ restoreFocus: true })"
              >
                Save
              </scsc-button>
            </div>
          </div>
        }
        <p class="mt-2 text-sm text-base-content/70" role="status">Assigned: {{ judge() }}</p>
      </div>
    </div>
  \`,
})
export class A11yUtilitiesPopupDemo {
  protected readonly judge = signal('Hon. R. Okafor');
}
`,html:`<div class="flex flex-wrap items-start gap-6">
  <!-- A disclosure: shows and hides content in place. Focus stays on the button. -->
  <div scscPopup #filters="scscPopup" class="w-72">
    <scsc-button scscPopupTrigger variant="neutral" outline>More filters</scsc-button>
    <div
      scscPopupPanel
      class="mt-2 flex flex-col gap-3 rounded-box border border-base-300 bg-base-100 p-3"
    >
      <scsc-form-field label="Department" for="filter-dept">
        <select scsc-select id="filter-dept">
          <option>All departments</option>
          <option>Civil</option>
          <option>Family</option>
          <option>Probate</option>
        </select>
      </scsc-form-field>
      <scsc-form-field label="Filed after" for="filter-date">
        <input scsc-input id="filter-date" type="date" />
      </scsc-form-field>
    </div>
  </div>

  <!-- A non-modal dialog: focus moves in on open; Escape or Save returns it to the button. -->
  <div scscPopup="dialog" #assign="scscPopup" class="relative">
    <scsc-button scscPopupTrigger variant="primary">Assign judge</scsc-button>
    @if (assign.open()) {
      <div
        scscPopupPanel
        role="dialog"
        aria-labelledby="assign-title"
        class="absolute left-0 top-full z-20 mt-2 flex w-72 flex-col gap-3 rounded-box border border-base-300 bg-base-100 p-4 elevate-md"
      >
        <h3 id="assign-title" class="font-semibold">Assign 24CV012345</h3>
        <scsc-form-field label="Judicial officer" for="assign-judge">
          <input scsc-input id="assign-judge" [value]="judge()" #field />
        </scsc-form-field>
        <div class="flex justify-end gap-2">
          <scsc-button variant="ghost" (click)="assign.close({ restoreFocus: true })">
            Cancel
          </scsc-button>
          <scsc-button
            variant="primary"
            (click)="judge.set(field.value); assign.close({ restoreFocus: true })"
          >
            Save
          </scsc-button>
        </div>
      </div>
    }
    <p class="mt-2 text-sm text-base-content/70" role="status">Assigned: {{ judge() }}</p>
  </div>
</div>
`},"a11y-utilities-skip-link":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscSkipLink } from '@scscourt/design';

@Component({
  selector: 'app-a11y-utilities-skip-link-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSkipLink],
  template: \`
    <!-- Press Tab in this frame: the skip link is the first stop. -->
    <scsc-skip-link target="demo-main" />
    <header class="border-b border-base-300 bg-base-100 px-6 py-3 font-semibold">
      Court Operations
    </header>
    <nav aria-label="Primary" class="border-b border-base-300 bg-base-100 px-6 py-2">
      <ul class="flex flex-wrap gap-4 text-sm">
        <li><a class="link" href="/console/queue">Work queue</a></li>
        <li><a class="link" href="/console/cases">Cases</a></li>
        <li><a class="link" href="/console/calendar">Calendar</a></li>
        <li><a class="link" href="/console/reports">Reports</a></li>
      </ul>
    </nav>
    <main id="demo-main" class="px-6 py-6">
      <h1 class="text-xl font-semibold">Work queue</h1>
      <p class="mt-2 text-base-content/70">Focus lands here after "Skip to main content".</p>
    </main>
  \`,
})
export class A11yUtilitiesSkipLinkDemo {}
`,html:`<!-- Press Tab in this frame: the skip link is the first stop. -->
<scsc-skip-link target="demo-main" />
<header class="border-b border-base-300 bg-base-100 px-6 py-3 font-semibold">
  Court Operations
</header>
<nav aria-label="Primary" class="border-b border-base-300 bg-base-100 px-6 py-2">
  <ul class="flex flex-wrap gap-4 text-sm">
    <li><a class="link" href="/console/queue">Work queue</a></li>
    <li><a class="link" href="/console/cases">Cases</a></li>
    <li><a class="link" href="/console/calendar">Calendar</a></li>
    <li><a class="link" href="/console/reports">Reports</a></li>
  </ul>
</nav>
<main id="demo-main" class="px-6 py-6">
  <h1 class="text-xl font-semibold">Work queue</h1>
  <p class="mt-2 text-base-content/70">Focus lands here after "Skip to main content".</p>
</main>
`}};var me=(n,i)=>i.caseNumber;function pe(n,i){if(n&1&&(Ga(0,`li`,5)(1,`span`)(2,`span`,7),G_(3),Lf(),G_(4),Lf(),Ga(5,`span`,8),G_(6),Lf()()),n&2){let e=i.$implicit;Jb(3),nD(e.caseNumber),Jb(),$f(` · `,e.title),Jb(2),nD(e.time)}}function ue(n,i){if(n&1&&(Ga(0,`li`,6),G_(1),Lf()),n&2){let e=y_();Jb(),nD(e.labels().noResults)}}var P=class n{announcer=g(Ie);labels=g(oe);hearings=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Property Mgmt.`,time:`9:00 AM`},{caseNumber:`24FL004988`,title:`In re Marriage of Chen`,time:`9:30 AM`},{caseNumber:`23PR001207`,title:`Estate of Delgado`,time:`10:15 AM`},{caseNumber:`24CV013002`,title:`Okafor v. Bay Transit`,time:`1:30 PM`}];query=q(``);matches=ut(()=>{let i=this.query().trim().toLowerCase();return this.hearings.filter(e=>!i||e.caseNumber.toLowerCase().includes(i)||e.title.toLowerCase().includes(i))});filter(i){this.query.set(i.target.value),this.announcer.announce(this.labels().results(this.matches().length))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-a11y-utilities-announcer-demo`]],decls:9,vars:3,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-3`],[`label`,`Filter today's hearings`,`for`,`ann-filter`,`hint`,`Case number or party name`],[`scsc-input`,``,`id`,`ann-filter`,`type`,`search`,3,`input`,`value`],[1,`text-sm`,`text-base-content/70`],[1,`divide-y`,`divide-base-300`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`justify-between`,`gap-4`,`px-4`,`py-2`,`text-sm`],[1,`px-4`,`py-2`,`text-sm`,`text-base-content/70`],[1,`tnum`],[1,`tnum`,`text-base-content/70`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`input`,2),lc(`input`,function(_){return r.filter(_)}),Lf()(),Ga(3,`p`,3),G_(4),Lf(),Ga(5,`ul`,4),o_(6,pe,7,3,`li`,5,me,!1,ue,2,1,`li`,6),Lf()()),e&2&&(Jb(2),Pv(`value`,r.query()),Jb(2),nD(r.labels().results(r.matches().length)),Jb(2),i_(r.matches()))},dependencies:[Vn,qo],encapsulation:2})};function de(n,i){if(n&1&&uc(0,`scsc-error-summary`,1),n&2){let e=y_();Pv(`errors`,e.errors())}}function fe(n,i){if(n&1&&(Ga(0,`p`,7),G_(1),Lf()),n&2){let e=y_();Jb(),$f(`Request sent for `,e.form.value.caseNumber,`.`)}}var D=class n{injector=g(ae);summary=_2(Tr);form=new Aa({caseNumber:new Fi(``,{nonNullable:!0,validators:[Fs.required,Fs.pattern(/^\d{2}[A-Z]{2}\d{6}$/)]}),email:new Fi(``,{nonNullable:!0,validators:[Fs.required,Fs.email]})});errors=q([]);sent=q(!1);submitted=q(!1);messages={caseNumber:{required:`Enter the case number`,pattern:`Enter the case number in the format 24CV012345`},email:{required:`Enter an email address for the copies`,email:`Enter an email address like name@example.com`}};errorFor(i){let e=this.form.controls[i];if(!this.submitted()||!e.errors)return``;let r=Object.keys(e.errors)[0];return this.messages[i][r]??`Check this field`}submit(){this.submitted.set(!0),this.sent.set(!1);let i={caseNumber:`es-case`,email:`es-email`},e=Object.keys(i).map(r=>({id:i[r],message:this.errorFor(r)})).filter(r=>r.message);this.errors.set(e),e.length?Xa(()=>this.summary()?.focus(),{injector:this.injector}):this.sent.set(!0)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-a11y-utilities-error-summary-demo`]],viewQuery:function(e,r){e&1&&Gv(r.summary,Tr,5),e&2&&w_()},decls:10,vars:7,consts:[[`novalidate`,``,1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[3,`errors`],[`label`,`Case number`,`for`,`es-case`,`hint`,`Like 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`es-case`,`formControlName`,`caseNumber`,3,`invalid`],[`label`,`Contact email`,`for`,`es-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`es-email`,`type`,`email`,`autocomplete`,`email`,`formControlName`,`email`,3,`invalid`],[`nativeType`,`submit`,`variant`,`primary`],[`role`,`status`,1,`text-sm`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),JT(1,de,1,1,`scsc-error-summary`,1),Ga(2,`scsc-form-field`,2)(3,`input`,3),HS(),Lf()(),Ga(4,`scsc-form-field`,4)(5,`input`,5),HS(),Lf()(),Ga(6,`div`)(7,`scsc-button`,6),G_(8,`Request copies`),Lf()(),JT(9,fe,2,1,`p`,7),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(),t_(r.errors().length?1:-1),Jb(),Pv(`error`,r.errorFor(`caseNumber`)),Jb(),Pv(`invalid`,!!r.errorFor(`caseNumber`)),zS(),Jb(),Pv(`error`,r.errorFor(`email`)),Jb(),Pv(`invalid`,!!r.errorFor(`email`)),zS(),Jb(4),t_(r.sent()?9:-1))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,sn,Tr,Vn,qo],encapsulation:2})};function ye(n,i){if(n&1){let e=d_();Ga(0,`div`,13)(1,`h3`,15),G_(2,`Assign 24CV012345`),Lf(),Ga(3,`scsc-form-field`,16),uc(4,`input`,17,2),Lf(),Ga(6,`div`,18)(7,`scsc-button`,19),lc(`click`,function(){Eg(e),y_();let u=C_(19);return Ig(u.close({restoreFocus:!0}))}),G_(8,` Cancel `),Lf(),Ga(9,`scsc-button`,20),lc(`click`,function(){Eg(e);let u=C_(5),_=y_(),ce=C_(19);return _.judge.set(u.value),Ig(ce.close({restoreFocus:!0}))}),G_(10,` Save `),Lf()()()}if(n&2){let e=y_();Jb(4),Pv(`value`,e.judge())}}var F=class n{judge=q(`Hon. R. Okafor`);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-a11y-utilities-popup-demo`]],decls:25,vars:2,consts:[[`filters`,`scscPopup`],[`assign`,`scscPopup`],[`field`,``],[1,`flex`,`flex-wrap`,`items-start`,`gap-6`],[`scscPopup`,``,1,`w-72`],[`scscPopupTrigger`,``,`variant`,`neutral`,`outline`,``],[`scscPopupPanel`,``,1,`mt-2`,`flex`,`flex-col`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-3`],[`label`,`Department`,`for`,`filter-dept`],[`scsc-select`,``,`id`,`filter-dept`],[`label`,`Filed after`,`for`,`filter-date`],[`scsc-input`,``,`id`,`filter-date`,`type`,`date`],[`scscPopup`,`dialog`,1,`relative`],[`scscPopupTrigger`,``,`variant`,`primary`],[`scscPopupPanel`,``,`role`,`dialog`,`aria-labelledby`,`assign-title`,1,`absolute`,`left-0`,`top-full`,`z-20`,`mt-2`,`flex`,`w-72`,`flex-col`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`,`elevate-md`],[`role`,`status`,1,`mt-2`,`text-sm`,`text-base-content/70`],[`id`,`assign-title`,1,`font-semibold`],[`label`,`Judicial officer`,`for`,`assign-judge`],[`scsc-input`,``,`id`,`assign-judge`,3,`value`],[1,`flex`,`justify-end`,`gap-2`],[`variant`,`ghost`,3,`click`],[`variant`,`primary`,3,`click`]],template:function(e,r){if(e&1&&(Ga(0,`div`,3)(1,`div`,4,0)(3,`scsc-button`,5),G_(4,`More filters`),Lf(),Ga(5,`div`,6)(6,`scsc-form-field`,7)(7,`select`,8)(8,`option`),G_(9,`All departments`),Lf(),Ga(10,`option`),G_(11,`Civil`),Lf(),Ga(12,`option`),G_(13,`Family`),Lf(),Ga(14,`option`),G_(15,`Probate`),Lf()()(),Ga(16,`scsc-form-field`,9),uc(17,`input`,10),Lf()()(),Ga(18,`div`,11,1)(20,`scsc-button`,12),G_(21,`Assign judge`),Lf(),JT(22,ye,11,1,`div`,13),Ga(23,`p`,14),G_(24),Lf()()()),e&2){let u=C_(19);Jb(22),t_(u.open()?22:-1),Jb(2),$f(`Assigned: `,r.judge())}},dependencies:[sn,Vn,qo,Te,st,rt,On],encapsulation:2})};var N=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-a11y-utilities-skip-link-demo`]],decls:22,vars:0,consts:[[`target`,`demo-main`],[1,`border-b`,`border-base-300`,`bg-base-100`,`px-6`,`py-3`,`font-semibold`],[`aria-label`,`Primary`,1,`border-b`,`border-base-300`,`bg-base-100`,`px-6`,`py-2`],[1,`flex`,`flex-wrap`,`gap-4`,`text-sm`],[`href`,`/console/queue`,1,`link`],[`href`,`/console/cases`,1,`link`],[`href`,`/console/calendar`,1,`link`],[`href`,`/console/reports`,1,`link`],[`id`,`demo-main`,1,`px-6`,`py-6`],[1,`text-xl`,`font-semibold`],[1,`mt-2`,`text-base-content/70`]],template:function(e,r){e&1&&(uc(0,`scsc-skip-link`,0),Ga(1,`header`,1),G_(2,` Court Operations `),Lf(),Ga(3,`nav`,2)(4,`ul`,3)(5,`li`)(6,`a`,4),G_(7,`Work queue`),Lf()(),Ga(8,`li`)(9,`a`,5),G_(10,`Cases`),Lf()(),Ga(11,`li`)(12,`a`,6),G_(13,`Calendar`),Lf()(),Ga(14,`li`)(15,`a`,7),G_(16,`Reports`),Lf()()()(),Ga(17,`main`,8)(18,`h1`,9),G_(19,`Work queue`),Lf(),Ga(20,`p`,10),G_(21,`Focus lands here after "Skip to main content".`),Lf()())},dependencies:[Nn],encapsulation:2})};var Oe={slug:`a11y-utilities`,name:`Accessibility utilities`,classes:[`ScscPopup`,`ScscPopupTrigger`,`ScscPopupPanel`,`ScscAnnouncer`,`ScscSkipLink`,`ScscErrorSummary`],category:`Services & Directives`,summary:`The building blocks the components use to meet WCAG 2.2 AA, exported for the patterns you build yourself: popup open/close behaviour, screen-reader announcements, a skip link, an error summary, route-change focus and the language the library speaks to assistive technology.`,whenToUse:["`scscPopup` + `scscPopupTrigger` + `scscPopupPanel` — any button that shows or hides something: a disclosure, a filter panel, a non-modal dialog. You get `aria-expanded` / `aria-controls` / `aria-haspopup`, Escape with focus return, and closing when focus or the pointer leaves.",'`ScscAnnouncer` — tell screen-reader users about a change they cannot see happen: a result count, "Saved", "3 selected". Not for errors in a form (use the error summary) or for text that already receives focus.',"`scsc-skip-link` — only in a custom layout; every shell already renders one.","`scsc-error-summary` — at the top of any form that can be submitted with problems.","`provideScscRouteA11y()` — once, in the app config, so page changes move focus and announce the title like a real page load.","`provideScscLabels()` — to change the language of the accessible names and announcements the library creates on its own (Spanish ships as `SCSC_LABELS_ES`), or to follow the app’s own language switch at runtime."],setup:`import { SCSC_LABELS_EN, SCSC_LABELS_ES, provideScscLabels, provideScscRouteA11y } from '@scscourt/design';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    // Focus the new page's <h1> and announce its title after each page change.
    provideScscRouteA11y(),
    // Speak Spanish to assistive technology when the app is in Spanish.
    provideScscLabels(() => {
      const lang = inject(LanguageStore).lang;
      return computed(() => (lang() === 'es' ? SCSC_LABELS_ES : SCSC_LABELS_EN));
    }),
  ],
});`,demos:[{id:`a11y-utilities-popup`,title:`Disclosure and dialog popup`,description:'`scscPopup` with no value is a disclosure: it shows content in place and leaves focus on the button. `scscPopup="dialog"` moves focus to the first control when it opens; Escape, Cancel and Save return it to the button.',component:F,source:A[`a11y-utilities-popup`]},{id:`a11y-utilities-error-summary`,title:`Error summary`,description:`Submit the empty form: the summary appears, takes focus and links to each field. Each message says what to do, not just what is wrong.`,component:D,source:A[`a11y-utilities-error-summary`]},{id:`a11y-utilities-announcer`,title:`Announcing a result count`,description:"The count is on screen for everyone; `ScscAnnouncer` speaks it once typing pauses, in the configured language.",component:P,source:A[`a11y-utilities-announcer`]},{id:`a11y-utilities-skip-link`,title:`Skip link`,description:"Press Tab inside the frame. The link appears, and activating it moves focus to `<main>` without changing the URL.",component:N,source:A[`a11y-utilities-skip-link`],layout:`page`,height:`16rem`}],keyboard:[{keys:`Enter / Space`,action:"On a popup trigger: opens or closes it. A `dialog` or `menu` popup moves focus to its first control."},{keys:`Escape`,action:`Closes the popup and returns focus to its trigger.`},{keys:`Tab`,action:`Leaving the popup closes it; focus continues to the next control on the page.`},{keys:`ArrowDown / ArrowUp`,action:"On a `menu` or `listbox` trigger: opens it on the first / last item."},{keys:`Enter`,action:`On the skip link: moves focus to the main content.`}],aria:["The trigger gets `aria-expanded`, `aria-controls` (only while the panel exists) and, except for a disclosure, `aria-haspopup`. On `<scsc-button>` they land on the inner `<button>`, which is what takes focus.","The panel gets its `id` and is `hidden` while closed, so a panel kept in the DOM is out of the accessibility tree too.","`ScscAnnouncer` uses one persistent live region per politeness level (CDK `LiveAnnouncer`), so a message is heard even when the text it describes appears at the same moment.",'The error summary is `role="alert"`, is named by its heading, and takes focus with `tabindex="-1"` (it stays out of the Tab order).'],appMustProvide:['A role and an accessible name on a `dialog` or `menu` panel (`role="dialog" aria-labelledby="…"`), and the arrow-key model of a real menu if you build one: prefer `scsc-dropdown`.',`Error messages that say how to fix the problem ("Enter the case number in the format 24CV012345"), in the order the fields appear.`,"A `<main id>` for the skip link to target, and a page `<h1>` for route focus to land on.",`Announcements only for changes a sighted user would notice; nothing on every keystroke (the announcer debounces, but choose the moment).`],a11y:["`scsc-error-summary` titles itself with an `<h2>` by default; set `headingLevel` (2–6) to fit the page outline.",`Covers WCAG 1.4.13 (dismissable, persistent popups), 2.1.1 and 2.4.3 (keyboard and focus order), 2.4.1 (bypass blocks), 3.3.1 (error identification), 4.1.2 (name, role, value) and 4.1.3 (status messages).`,`Popups open on click or key press, never on focus alone, so tabbing through a page never opens anything.`,`Focus is never lost when a popup closes: Escape and explicit closes return it to the trigger; closing because focus left keeps it where the user moved it.`],related:[`directives`,`dropdown`,`popover`,`form-field`,`shells`]};export{Oe as A11Y_UTILITIES_DOCS};