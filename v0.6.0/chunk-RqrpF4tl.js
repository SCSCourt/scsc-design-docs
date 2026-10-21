import{Ai as vA,Ca as Gv,Co as _2,Dn as Wue,Do as ae,E as Bue,Es as sD,Go as g,Gs as zS,Gt as QN,H as FN,Hs as y_,In as Xz,Ln as YA,M as DN,Ma as JT,Ms as uc,Na as Jb,Qt as SN,Rs as w_,Vi as y2e,Vr as mN,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zn as bA,_i as tN,bn as Vz,bo as Y_,c as $r,cn as UE,cs as lc,ds as nD,et as Ha,gn as VN,go as Xa,ii as qo,ks as t_,l as $ue,lr as ez,mn as Uue,ms as nu,n as $N,nn as TN,nt as IA,oi as que,pi as sn,po as X,qo as ge,ra as Af,sn as Tr,ta as $f,tt as Hue,u as $z,va as G_,vn as Vn,vt as Kue,w as Bo,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{r as Nt}from"./chunk-D2cerPAB.js";function Se(m,l){if(m&1&&uc(0,`scsc-error-summary`,10),m&2){let i=y_();Pv(`errors`,i.errors())}}function Ce(m,l){if(m&1&&(Ga(0,`scsc-alert`,11),G_(1,` Case `),Ga(2,`span`,71),G_(3),Lf(),G_(4),Lf()),m&2){let i=y_();Jb(3),nD(l),Jb(),$f(` was opened and assigned to Dept. `,i.form.controls.hearing.controls.department.value,`. `)}}function xe(m,l){if(m&1&&(Ga(0,`scsc-form-field`,72)(1,`input`,73),HS(),Lf()(),Ga(2,`scsc-form-field`,74)(3,`input`,75),HS(),Lf()()),m&2){let i=y_();Pv(`error`,i.errorFor(`plaintiff.attorney`)),Jb(),Pv(`invalid`,i.invalid(`plaintiff.attorney`)),zS(),Jb(),Pv(`error`,i.errorFor(`plaintiff.bar`)),Jb(),Pv(`invalid`,i.invalid(`plaintiff.bar`)),zS()}}var be=[{path:`caseInfo.caseType`,id:`ci-type`,message:`Choose the case type`},{path:`caseInfo.cause`,id:`ci-cause`,message:`Enter the cause of action`},{path:`caseInfo.amount`,id:`ci-amount`,message:`Enter the amount demanded in dollars, like 25000`},{path:`caseInfo.filed`,id:`ci-filed`,message:`Choose the filing date`},{path:`plaintiff.name`,id:`ci-p-name`,message:`Enter the plaintiff’s name`},{path:`plaintiff.email`,id:`ci-p-email`,message:`Enter an email address like name@example.com`},{path:`plaintiff.attorney`,id:`ci-p-attorney`,message:`Enter the attorney’s name`},{path:`plaintiff.bar`,id:`ci-p-bar`,message:`Enter a State Bar number of 5 or 6 digits`},{path:`defendant.name`,id:`ci-d-name`,message:`Enter the defendant’s name`},{path:`hearing.department`,id:`ci-dept`,message:`Choose a department`},{path:`hearing.date`,id:`ci-cmc`,message:`Choose the conference date`}];var Pe=[{id:`case-intake-form`,title:`Case intake form`,description:`Four sections of a reactive form (case, plaintiff, defendant, first hearing) with date pickers, conditional attorney fields, an error summary on a rejected submit, and a sticky action bar kept clear of focused fields. Press Create case with the form empty.`,component:class m{fb=g(Wue).nonNullable;injector=g(ae);summary=_2(Tr);collapsed=q(!1);errors=q([]);created=q(null);draftStatus=q(``);nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`dashboard`},{label:`Work queue`,icon:`inbox`,link:`queue`,badge:`37`},{label:`Cases`,icon:`folder-open`,link:`.`,exact:!0},{label:`Calendar`,icon:`calendar-days`,link:`calendar`}]}];trail=[{label:`Cases`,link:`cases`},{label:`New case`}];form=this.fb.group({caseInfo:this.fb.group({caseType:[``,Fs.required],cause:[``,Fs.required],amount:[``,[Fs.required,Fs.pattern(/^\d+$/)]],filed:[`2026-09-30`,Fs.required],jury:[`none`]}),plaintiff:this.fb.group({name:[``,Fs.required],email:[``,Fs.email],represented:[!1],attorney:[``],bar:[``]}),defendant:this.fb.group({name:[``,Fs.required],address:[``]}),hearing:this.fb.group({department:[``,Fs.required],date:[``,Fs.required],interpreter:[``],notes:[``]})});represented=Ha(this.form.controls.plaintiff.controls.represented.valueChanges,{initialValue:!1});constructor(){this.form.controls.plaintiff.controls.represented.valueChanges.pipe(y2e()).subscribe(a=>{let{attorney:p,bar:f}=this.form.controls.plaintiff.controls;p.setValidators(a?Fs.required:null),f.setValidators(a?[Fs.required,Fs.pattern(/^\d{5,6}$/)]:null),p.updateValueAndValidity(),f.updateValueAndValidity()});let l=g(X).documentElement,i=l.style.scrollPaddingBottom;l.style.scrollPaddingBottom=`5rem`,g(ge).onDestroy(()=>l.style.scrollPaddingBottom=i)}invalid(l){let i=this.form.get(l);return!!i&&i.invalid&&(i.touched||i.dirty)}errorFor(l){return this.invalid(l)?`${be.find(i=>i.path===l)?.message}.`:``}submit(){this.form.markAllAsTouched();let l=be.filter(i=>this.form.get(i.path)?.invalid).map(i=>({id:i.id,message:i.message}));if(this.errors.set(l),l.length){this.created.set(null),Xa(()=>this.summary()?.focus(),{injector:this.injector});return}this.created.set(`26CV034120`),this.draftStatus.set(``)}saveDraft(){this.draftStatus.set(`Draft saved at 2:14 PM`)}reset(){this.form.reset(),this.errors.set([]),this.created.set(null),this.draftStatus.set(``)}static ɵfac=function(i){return new(i||m)};static ɵcmp=Af({type:m,selectors:[[`app-case-intake-form-template`]],viewQuery:function(i,a){i&1&&Gv(a.summary,Tr,5),i&2&&w_()},decls:105,vars:30,consts:[[3,`collapsedChange`,`collapsed`],[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Civil Division · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`],[1,`hidden`,`lg:inline-flex`,3,`click`,`icon`,`label`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`routerLink`,`settings`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`,`collapsed`],[`aria-label`,`New civil case`,`novalidate`,``,1,`flex`,`flex-col`,`gap-8`,`scsc-pad-page`,3,`ngSubmit`,`formGroup`],[`title`,`New civil case`,`description`,`Open a case from a paper filing. Fields marked * are required.`],[`slot`,`breadcrumb`,3,`items`],[1,`max-w-3xl`,3,`errors`],[`status`,`success`,`title`,`Case created`,1,`max-w-3xl`],[`heading`,`Case`,`description`,`As shown on the civil case cover sheet (CM-010).`],[1,`max-w-3xl`],[`formGroupName`,`caseInfo`,1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Case type`,`for`,`ci-type`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`ci-type`,`formControlName`,`caseType`,3,`invalid`],[`value`,``],[`value`,`unlimited`],[`value`,`limited`],[`value`,`ud`],[`value`,`small-claims`],[`label`,`Cause of action`,`for`,`ci-cause`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ci-cause`,`formControlName`,`cause`,3,`invalid`],[`label`,`Amount demanded`,`for`,`ci-amount`,`hint`,`Whole dollars, no commas`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ci-amount`,`inputmode`,`numeric`,`formControlName`,`amount`,1,`tnum`,3,`invalid`],[`label`,`Filing date`,`for`,`ci-filed`,`required`,``,3,`error`],[`inputId`,`ci-filed`,`formControlName`,`filed`,3,`invalid`],[`legend`,`Jury demanded`,1,`sm:col-span-2`,3,`inline`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`radio`,`scsc-radio`,``,`value`,`plaintiff`,`formControlName`,`jury`],[`type`,`radio`,`scsc-radio`,``,`value`,`defendant`,`formControlName`,`jury`],[`type`,`radio`,`scsc-radio`,``,`value`,`none`,`formControlName`,`jury`],[`heading`,`Plaintiff`,`description`,`The person or organization filing.`],[`formGroupName`,`plaintiff`,1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Full name or organization`,`for`,`ci-p-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ci-p-name`,`formControlName`,`name`,3,`invalid`],[`label`,`Email`,`for`,`ci-p-email`,`hint`,`For e-service, if they agreed to it`,3,`error`],[`scsc-input`,``,`id`,`ci-p-email`,`type`,`email`,`formControlName`,`email`,3,`invalid`],[1,`flex`,`items-center`,`gap-3`,`sm:col-span-2`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`represented`],[1,`text-sm`,`font-medium`],[`heading`,`Defendant`],[`formGroupName`,`defendant`,1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Full name or organization`,`for`,`ci-d-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ci-d-name`,`formControlName`,`name`,3,`invalid`],[`label`,`Address for service`,`for`,`ci-d-address`,`hint`,`Optional`],[`scsc-input`,``,`id`,`ci-d-address`,`autocomplete`,`off`,`formControlName`,`address`],[`heading`,`First hearing`,`description`,`The initial case management conference.`],[`formGroupName`,`hearing`,1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Department`,`for`,`ci-dept`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`ci-dept`,`formControlName`,`department`,3,`invalid`],[`value`,`3`],[`value`,`10`],[`value`,`22`],[`label`,`Conference date`,`for`,`ci-cmc`,`hint`,`At least 120 days after filing`,`required`,``,3,`error`],[`inputId`,`ci-cmc`,`formControlName`,`date`,3,`invalid`],[`label`,`Interpreter`,`for`,`ci-interp`,`hint`,`Language, if a party asked for one`],[`scsc-select`,``,`id`,`ci-interp`,`formControlName`,`interpreter`],[`value`,`es`],[`value`,`vi`],[`value`,`zh`],[`value`,`ase`],[`label`,`Clerk’s notes`,`for`,`ci-notes`,`hint`,`Internal; not part of the record`,1,`sm:col-span-2`],[`scsc-textarea`,``,`id`,`ci-notes`,`rows`,`3`,`formControlName`,`notes`],[1,`sticky`,`bottom-3`,`z-10`,`max-w-3xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`,`py-3`,`elevate-md`],[1,`flex`,`flex-wrap`,`items-center`,`justify-end`,`gap-2`],[`role`,`status`,1,`me-auto`,`text-sm`,`text-base-content/70`],[`variant`,`ghost`,3,`click`],[`variant`,`neutral`,`outline`,``,3,`click`],[`nativeType`,`submit`],[1,`font-semibold`,`tnum`],[`label`,`Attorney name`,`for`,`ci-p-attorney`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ci-p-attorney`,`formControlName`,`attorney`,3,`invalid`],[`label`,`State Bar number`,`for`,`ci-p-bar`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ci-p-bar`,`inputmode`,`numeric`,`formControlName`,`bar`,1,`tnum`,3,`invalid`]],template:function(i,a){if(i&1&&(Ga(0,`scsc-app-shell`,0),sD(`collapsedChange`,function(f){return Y_(a.collapsed,f)||(a.collapsed=f),f}),Ga(1,`scsc-masthead`,1)(2,`scsc-icon-button`,2),lc(`click`,function(){return a.collapsed.set(!a.collapsed())}),Lf(),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`a`,4),G_(6,`Settings`),Lf()(),Ga(7,`li`)(8,`button`,5),G_(9,`Sign out`),Lf()()()(),uc(10,`scsc-sidebar-nav`,6),Ga(11,`form`,7),lc(`ngSubmit`,function(){return a.submit()}),Ga(12,`scsc-page-header`,8),uc(13,`scsc-breadcrumb`,9),Lf(),JT(14,Se,1,1,`scsc-error-summary`,10),JT(15,Ce,5,2,`scsc-alert`,11),Ga(16,`scsc-section`,12)(17,`scsc-card`,13)(18,`div`,14)(19,`scsc-form-field`,15)(20,`select`,16),HS(),Ga(21,`option`,17),G_(22,`Choose one`),Lf(),Ga(23,`option`,18),G_(24,`Civil — Unlimited (over $35,000)`),Lf(),Ga(25,`option`,19),G_(26,`Civil — Limited ($35,000 or less)`),Lf(),Ga(27,`option`,20),G_(28,`Unlawful detainer`),Lf(),Ga(29,`option`,21),G_(30,`Small claims`),Lf()()(),Ga(31,`scsc-form-field`,22)(32,`input`,23),HS(),Lf()(),Ga(33,`scsc-form-field`,24)(34,`input`,25),HS(),Lf()(),Ga(35,`scsc-form-field`,26)(36,`scsc-date-picker`,27),HS(),Lf()(),Ga(37,`scsc-fieldset`,28)(38,`label`,29)(39,`input`,30),HS(),Lf(),G_(40,` By plaintiff `),Lf(),Ga(41,`label`,29)(42,`input`,31),HS(),Lf(),G_(43,` By defendant `),Lf(),Ga(44,`label`,29)(45,`input`,32),HS(),Lf(),G_(46,` Not demanded `),Lf()()()()(),Ga(47,`scsc-section`,33)(48,`scsc-card`,13)(49,`div`,34)(50,`scsc-form-field`,35)(51,`input`,36),HS(),Lf()(),Ga(52,`scsc-form-field`,37)(53,`input`,38),HS(),Lf()(),Ga(54,`label`,39)(55,`input`,40),HS(),Lf(),Ga(56,`span`,41),G_(57,`Represented by an attorney`),Lf()(),JT(58,xe,4,4),Lf()()(),Ga(59,`scsc-section`,42)(60,`scsc-card`,13)(61,`div`,43)(62,`scsc-form-field`,44)(63,`input`,45),HS(),Lf()(),Ga(64,`scsc-form-field`,46)(65,`input`,47),HS(),Lf()()()()(),Ga(66,`scsc-section`,48)(67,`scsc-card`,13)(68,`div`,49)(69,`scsc-form-field`,50)(70,`select`,51),HS(),Ga(71,`option`,17),G_(72,`Choose one`),Lf(),Ga(73,`option`,52),G_(74,`Dept. 3 — Hon. Samuel Whitfield`),Lf(),Ga(75,`option`,53),G_(76,`Dept. 10 — Hon. Miriam Okafor`),Lf(),Ga(77,`option`,54),G_(78,`Dept. 22 — Hon. Theresa Montoya`),Lf()()(),Ga(79,`scsc-form-field`,55)(80,`scsc-date-picker`,56),HS(),Lf()(),Ga(81,`scsc-form-field`,57)(82,`select`,58),HS(),Ga(83,`option`,17),G_(84,`None requested`),Lf(),Ga(85,`option`,59),G_(86,`Spanish`),Lf(),Ga(87,`option`,60),G_(88,`Vietnamese`),Lf(),Ga(89,`option`,61),G_(90,`Mandarin`),Lf(),Ga(91,`option`,62),G_(92,`American Sign Language`),Lf()()(),Ga(93,`scsc-form-field`,63)(94,`textarea`,64),HS(),Lf()()()()(),Ga(95,`div`,65)(96,`div`,66)(97,`p`,67),G_(98),Lf(),Ga(99,`scsc-button`,68),lc(`click`,function(){return a.reset()}),G_(100,`Cancel`),Lf(),Ga(101,`scsc-button`,69),lc(`click`,function(){return a.saveDraft()}),G_(102,`Save draft`),Lf(),Ga(103,`scsc-button`,70),G_(104,`Create case`),Lf()()()()()),i&2){let p;iD(`collapsed`,a.collapsed),Jb(2),Pv(`icon`,a.collapsed()?`panel-left-open`:`panel-left-close`)(`label`,a.collapsed()?`Expand sidebar`:`Collapse sidebar`),Jb(8),Pv(`sections`,a.nav)(`collapsed`,a.collapsed()),Jb(),Pv(`formGroup`,a.form),Jb(2),Pv(`items`,a.trail),Jb(),t_(a.errors().length?14:-1),Jb(),t_((p=a.created())?15:-1,p),Jb(4),Pv(`error`,a.errorFor(`caseInfo.caseType`)),Jb(),Pv(`invalid`,a.invalid(`caseInfo.caseType`)),zS(),Jb(11),Pv(`error`,a.errorFor(`caseInfo.cause`)),Jb(),Pv(`invalid`,a.invalid(`caseInfo.cause`)),zS(),Jb(),Pv(`error`,a.errorFor(`caseInfo.amount`)),Jb(),Pv(`invalid`,a.invalid(`caseInfo.amount`)),zS(),Jb(),Pv(`error`,a.errorFor(`caseInfo.filed`)),Jb(),Pv(`invalid`,a.invalid(`caseInfo.filed`)),zS(),Jb(),Pv(`inline`,!0),Jb(2),zS(),Jb(3),zS(),Jb(3),zS(),Jb(5),Pv(`error`,a.errorFor(`plaintiff.name`)),Jb(),Pv(`invalid`,a.invalid(`plaintiff.name`)),zS(),Jb(),Pv(`error`,a.errorFor(`plaintiff.email`)),Jb(),Pv(`invalid`,a.invalid(`plaintiff.email`)),zS(),Jb(2),zS(),Jb(3),t_(a.represented()?58:-1),Jb(4),Pv(`error`,a.errorFor(`defendant.name`)),Jb(),Pv(`invalid`,a.invalid(`defendant.name`)),zS(),Jb(2),zS(),Jb(4),Pv(`error`,a.errorFor(`hearing.department`)),Jb(),Pv(`invalid`,a.invalid(`hearing.department`)),zS(),Jb(9),Pv(`error`,a.errorFor(`hearing.date`)),Jb(),Pv(`invalid`,a.invalid(`hearing.date`)),zS(),Jb(2),zS(),Jb(12),zS(),Jb(4),nD(a.draftStatus())}},dependencies:[Kue,Bue,$ue,Uue,IA,ez,tN,$z,Hue,que,Vz,Xz,YA,nu,za,SN,QN,sn,mN,Nt,Tr,$r,Vn,UE,qo,FN,TN,bA,DN,On,$N,Bo,vA,VN],encapsulation:2})},source:{"case-intake-form":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { type AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScscAlert,
  ScscAppShell,
  ScscBreadcrumb,
  type ScscBreadcrumbItem,
  ScscButton,
  ScscCard,
  ScscErrorSummary,
  ScscFieldset,
  type ScscFormError,
  ScscFormField,
  ScscIconButton,
  ScscInput,
  ScscMasthead,
  type ScscNavSection,
  ScscPageHeader,
  ScscRadio,
  ScscSection,
  ScscSelect,
  ScscSidebarNav,
  ScscSwitch,
  ScscTextarea,
  ScscUserMenu,
} from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

/** Field order = error summary order = page order. */
const FIELDS = [
  { path: 'caseInfo.caseType', id: 'ci-type', message: 'Choose the case type' },
  { path: 'caseInfo.cause', id: 'ci-cause', message: 'Enter the cause of action' },
  {
    path: 'caseInfo.amount',
    id: 'ci-amount',
    message: 'Enter the amount demanded in dollars, like 25000',
  },
  { path: 'caseInfo.filed', id: 'ci-filed', message: 'Choose the filing date' },
  { path: 'plaintiff.name', id: 'ci-p-name', message: 'Enter the plaintiff\u2019s name' },
  {
    path: 'plaintiff.email',
    id: 'ci-p-email',
    message: 'Enter an email address like name@example.com',
  },
  { path: 'plaintiff.attorney', id: 'ci-p-attorney', message: 'Enter the attorney\u2019s name' },
  { path: 'plaintiff.bar', id: 'ci-p-bar', message: 'Enter a State Bar number of 5 or 6 digits' },
  { path: 'defendant.name', id: 'ci-d-name', message: 'Enter the defendant\u2019s name' },
  { path: 'hearing.department', id: 'ci-dept', message: 'Choose a department' },
  { path: 'hearing.date', id: 'ci-cmc', message: 'Choose the conference date' },
] as const;

type FieldPath = (typeof FIELDS)[number]['path'];

@Component({
  selector: 'app-case-intake-form-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ScscAlert,
    ScscAppShell,
    ScscBreadcrumb,
    ScscButton,
    ScscCard,
    ScscDatePicker,
    ScscErrorSummary,
    ScscFieldset,
    ScscFormField,
    ScscIconButton,
    ScscInput,
    ScscMasthead,
    ScscPageHeader,
    ScscRadio,
    ScscSection,
    ScscSelect,
    ScscSidebarNav,
    ScscSwitch,
    ScscTextarea,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell [(collapsed)]="collapsed">
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Civil Division \xB7 Downtown Superior Court"
        logoSrc="scsc-seal.png"
      >
        <scsc-icon-button
          [icon]="collapsed() ? 'panel-left-open' : 'panel-left-close'"
          [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
          class="hidden lg:inline-flex"
          (click)="collapsed.set(!collapsed())"
        />
        <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
          <li><a routerLink="settings">Settings</a></li>
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>

      <scsc-sidebar-nav slot="sidebar" [sections]="nav" [collapsed]="collapsed()" />

      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="flex flex-col gap-8 scsc-pad-page"
        aria-label="New civil case"
        novalidate
      >
        <scsc-page-header
          title="New civil case"
          description="Open a case from a paper filing. Fields marked * are required."
        >
          <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
        </scsc-page-header>

        @if (errors().length) {
          <scsc-error-summary [errors]="errors()" class="max-w-3xl" />
        }
        @if (created(); as number) {
          <scsc-alert status="success" title="Case created" class="max-w-3xl">
            Case <span class="font-semibold tnum">{{ number }}</span> was opened and assigned to
            Dept. {{ form.controls.hearing.controls.department.value }}.
          </scsc-alert>
        }

        <scsc-section heading="Case" description="As shown on the civil case cover sheet (CM-010).">
          <scsc-card class="max-w-3xl">
            <div formGroupName="caseInfo" class="grid gap-4 sm:grid-cols-2">
              <scsc-form-field
                label="Case type"
                for="ci-type"
                required
                [error]="errorFor('caseInfo.caseType')"
              >
                <select
                  scsc-select
                  id="ci-type"
                  formControlName="caseType"
                  [invalid]="invalid('caseInfo.caseType')"
                >
                  <option value="">Choose one</option>
                  <option value="unlimited">Civil \u2014 Unlimited (over $35,000)</option>
                  <option value="limited">Civil \u2014 Limited ($35,000 or less)</option>
                  <option value="ud">Unlawful detainer</option>
                  <option value="small-claims">Small claims</option>
                </select>
              </scsc-form-field>
              <scsc-form-field
                label="Cause of action"
                for="ci-cause"
                required
                [error]="errorFor('caseInfo.cause')"
              >
                <input
                  scsc-input
                  id="ci-cause"
                  formControlName="cause"
                  [invalid]="invalid('caseInfo.cause')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Amount demanded"
                for="ci-amount"
                hint="Whole dollars, no commas"
                required
                [error]="errorFor('caseInfo.amount')"
              >
                <input
                  scsc-input
                  id="ci-amount"
                  class="tnum"
                  inputmode="numeric"
                  formControlName="amount"
                  [invalid]="invalid('caseInfo.amount')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Filing date"
                for="ci-filed"
                required
                [error]="errorFor('caseInfo.filed')"
              >
                <scsc-date-picker
                  inputId="ci-filed"
                  formControlName="filed"
                  [invalid]="invalid('caseInfo.filed')"
                />
              </scsc-form-field>
              <scsc-fieldset legend="Jury demanded" [inline]="true" class="sm:col-span-2">
                <label class="flex items-center gap-2 text-sm">
                  <input type="radio" scsc-radio value="plaintiff" formControlName="jury" />
                  By plaintiff
                </label>
                <label class="flex items-center gap-2 text-sm">
                  <input type="radio" scsc-radio value="defendant" formControlName="jury" />
                  By defendant
                </label>
                <label class="flex items-center gap-2 text-sm">
                  <input type="radio" scsc-radio value="none" formControlName="jury" />
                  Not demanded
                </label>
              </scsc-fieldset>
            </div>
          </scsc-card>
        </scsc-section>

        <scsc-section heading="Plaintiff" description="The person or organization filing.">
          <scsc-card class="max-w-3xl">
            <div formGroupName="plaintiff" class="grid gap-4 sm:grid-cols-2">
              <scsc-form-field
                label="Full name or organization"
                for="ci-p-name"
                required
                [error]="errorFor('plaintiff.name')"
              >
                <input
                  scsc-input
                  id="ci-p-name"
                  formControlName="name"
                  [invalid]="invalid('plaintiff.name')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Email"
                for="ci-p-email"
                hint="For e-service, if they agreed to it"
                [error]="errorFor('plaintiff.email')"
              >
                <input
                  scsc-input
                  id="ci-p-email"
                  type="email"
                  formControlName="email"
                  [invalid]="invalid('plaintiff.email')"
                />
              </scsc-form-field>
              <label class="flex items-center gap-3 sm:col-span-2">
                <input type="checkbox" scsc-switch formControlName="represented" />
                <span class="text-sm font-medium">Represented by an attorney</span>
              </label>
              @if (represented()) {
                <scsc-form-field
                  label="Attorney name"
                  for="ci-p-attorney"
                  required
                  [error]="errorFor('plaintiff.attorney')"
                >
                  <input
                    scsc-input
                    id="ci-p-attorney"
                    formControlName="attorney"
                    [invalid]="invalid('plaintiff.attorney')"
                  />
                </scsc-form-field>
                <scsc-form-field
                  label="State Bar number"
                  for="ci-p-bar"
                  required
                  [error]="errorFor('plaintiff.bar')"
                >
                  <input
                    scsc-input
                    id="ci-p-bar"
                    class="tnum"
                    inputmode="numeric"
                    formControlName="bar"
                    [invalid]="invalid('plaintiff.bar')"
                  />
                </scsc-form-field>
              }
            </div>
          </scsc-card>
        </scsc-section>

        <scsc-section heading="Defendant">
          <scsc-card class="max-w-3xl">
            <div formGroupName="defendant" class="grid gap-4 sm:grid-cols-2">
              <scsc-form-field
                label="Full name or organization"
                for="ci-d-name"
                required
                [error]="errorFor('defendant.name')"
              >
                <input
                  scsc-input
                  id="ci-d-name"
                  formControlName="name"
                  [invalid]="invalid('defendant.name')"
                />
              </scsc-form-field>
              <scsc-form-field label="Address for service" for="ci-d-address" hint="Optional">
                <input scsc-input id="ci-d-address" autocomplete="off" formControlName="address" />
              </scsc-form-field>
            </div>
          </scsc-card>
        </scsc-section>

        <scsc-section heading="First hearing" description="The initial case management conference.">
          <scsc-card class="max-w-3xl">
            <div formGroupName="hearing" class="grid gap-4 sm:grid-cols-2">
              <scsc-form-field
                label="Department"
                for="ci-dept"
                required
                [error]="errorFor('hearing.department')"
              >
                <select
                  scsc-select
                  id="ci-dept"
                  formControlName="department"
                  [invalid]="invalid('hearing.department')"
                >
                  <option value="">Choose one</option>
                  <option value="3">Dept. 3 \u2014 Hon. Samuel Whitfield</option>
                  <option value="10">Dept. 10 \u2014 Hon. Miriam Okafor</option>
                  <option value="22">Dept. 22 \u2014 Hon. Theresa Montoya</option>
                </select>
              </scsc-form-field>
              <scsc-form-field
                label="Conference date"
                for="ci-cmc"
                hint="At least 120 days after filing"
                required
                [error]="errorFor('hearing.date')"
              >
                <scsc-date-picker
                  inputId="ci-cmc"
                  formControlName="date"
                  [invalid]="invalid('hearing.date')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Interpreter"
                for="ci-interp"
                hint="Language, if a party asked for one"
              >
                <select scsc-select id="ci-interp" formControlName="interpreter">
                  <option value="">None requested</option>
                  <option value="es">Spanish</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Mandarin</option>
                  <option value="ase">American Sign Language</option>
                </select>
              </scsc-form-field>
              <scsc-form-field
                label="Clerk\u2019s notes"
                for="ci-notes"
                hint="Internal; not part of the record"
                class="sm:col-span-2"
              >
                <textarea scsc-textarea id="ci-notes" rows="3" formControlName="notes"></textarea>
              </scsc-form-field>
            </div>
          </scsc-card>
        </scsc-section>

        <!-- Sticky action bar. The page reserves its height as scroll padding (see the constructor),
             so a focused field is never hidden behind it (WCAG 2.4.11). -->
        <div
          class="sticky bottom-3 z-10 max-w-3xl rounded-box border border-base-300 bg-base-100 px-4 py-3 elevate-md"
        >
          <div class="flex flex-wrap items-center justify-end gap-2">
            <p class="me-auto text-sm text-base-content/70" role="status">{{ draftStatus() }}</p>
            <scsc-button variant="ghost" (click)="reset()">Cancel</scsc-button>
            <scsc-button variant="neutral" outline (click)="saveDraft()">Save draft</scsc-button>
            <scsc-button nativeType="submit">Create case</scsc-button>
          </div>
        </div>
      </form>
    </scsc-app-shell>
  \`,
})
export class CaseIntakeFormTemplate {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly injector = inject(Injector);
  private readonly summary = viewChild(ScscErrorSummary);

  protected readonly collapsed = signal(false);
  protected readonly errors = signal<ScscFormError[]>([]);
  protected readonly created = signal<string | null>(null);
  protected readonly draftStatus = signal('');

  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: 'dashboard' },
        { label: 'Work queue', icon: 'inbox', link: 'queue', badge: '37' },
        { label: 'Cases', icon: 'folder-open', link: '.', exact: true },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
      ],
    },
  ];
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Cases', link: 'cases' },
    { label: 'New case' },
  ];

  protected readonly form = this.fb.group({
    caseInfo: this.fb.group({
      caseType: ['', Validators.required],
      cause: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\\d+$/)]],
      filed: ['2026-09-30', Validators.required],
      jury: ['none'],
    }),
    plaintiff: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      represented: [false],
      attorney: [''],
      bar: [''],
    }),
    defendant: this.fb.group({ name: ['', Validators.required], address: [''] }),
    hearing: this.fb.group({
      department: ['', Validators.required],
      date: ['', Validators.required],
      interpreter: [''],
      notes: [''],
    }),
  });

  protected readonly represented = toSignal(
    this.form.controls.plaintiff.controls.represented.valueChanges,
    {
      initialValue: false,
    },
  );

  constructor() {
    // Attorney details are required only when the plaintiff is represented.
    this.form.controls.plaintiff.controls.represented.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((on) => {
        const { attorney, bar } = this.form.controls.plaintiff.controls;
        attorney.setValidators(on ? Validators.required : null);
        bar.setValidators(on ? [Validators.required, Validators.pattern(/^\\d{5,6}$/)] : null);
        attorney.updateValueAndValidity();
        bar.updateValueAndValidity();
      });

    // Keep focused fields clear of the sticky action bar.
    const root = inject(DOCUMENT).documentElement;
    const previous = root.style.scrollPaddingBottom;
    root.style.scrollPaddingBottom = '5rem';
    inject(DestroyRef).onDestroy(() => (root.style.scrollPaddingBottom = previous));
  }

  protected invalid(path: FieldPath): boolean {
    const c: AbstractControl | null = this.form.get(path);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected errorFor(path: FieldPath): string {
    return this.invalid(path) ? \`\${FIELDS.find((f) => f.path === path)?.message}.\` : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const errors = FIELDS.filter((f) => this.form.get(f.path)?.invalid).map((f) => ({
      id: f.id,
      message: f.message,
    }));
    this.errors.set(errors);
    if (errors.length) {
      this.created.set(null);
      afterNextRender(() => this.summary()?.focus(), { injector: this.injector });
      return;
    }
    this.created.set('26CV034120');
    this.draftStatus.set('');
  }

  protected saveDraft(): void {
    this.draftStatus.set('Draft saved at 2:14 PM');
  }

  protected reset(): void {
    this.form.reset();
    this.errors.set([]);
    this.created.set(null);
    this.draftStatus.set('');
  }
}
`,html:`<scsc-app-shell [(collapsed)]="collapsed">
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Civil Division \xB7 Downtown Superior Court"
    logoSrc="scsc-seal.png"
  >
    <scsc-icon-button
      [icon]="collapsed() ? 'panel-left-open' : 'panel-left-close'"
      [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
      class="hidden lg:inline-flex"
      (click)="collapsed.set(!collapsed())"
    />
    <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
      <li><a routerLink="settings">Settings</a></li>
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>

  <scsc-sidebar-nav slot="sidebar" [sections]="nav" [collapsed]="collapsed()" />

  <form
    [formGroup]="form"
    (ngSubmit)="submit()"
    class="flex flex-col gap-8 scsc-pad-page"
    aria-label="New civil case"
    novalidate
  >
    <scsc-page-header
      title="New civil case"
      description="Open a case from a paper filing. Fields marked * are required."
    >
      <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
    </scsc-page-header>

    @if (errors().length) {
      <scsc-error-summary [errors]="errors()" class="max-w-3xl" />
    }
    @if (created(); as number) {
      <scsc-alert status="success" title="Case created" class="max-w-3xl">
        Case <span class="font-semibold tnum">{{ number }}</span> was opened and assigned to
        Dept. {{ form.controls.hearing.controls.department.value }}.
      </scsc-alert>
    }

    <scsc-section heading="Case" description="As shown on the civil case cover sheet (CM-010).">
      <scsc-card class="max-w-3xl">
        <div formGroupName="caseInfo" class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="Case type"
            for="ci-type"
            required
            [error]="errorFor('caseInfo.caseType')"
          >
            <select
              scsc-select
              id="ci-type"
              formControlName="caseType"
              [invalid]="invalid('caseInfo.caseType')"
            >
              <option value="">Choose one</option>
              <option value="unlimited">Civil \u2014 Unlimited (over $35,000)</option>
              <option value="limited">Civil \u2014 Limited ($35,000 or less)</option>
              <option value="ud">Unlawful detainer</option>
              <option value="small-claims">Small claims</option>
            </select>
          </scsc-form-field>
          <scsc-form-field
            label="Cause of action"
            for="ci-cause"
            required
            [error]="errorFor('caseInfo.cause')"
          >
            <input
              scsc-input
              id="ci-cause"
              formControlName="cause"
              [invalid]="invalid('caseInfo.cause')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Amount demanded"
            for="ci-amount"
            hint="Whole dollars, no commas"
            required
            [error]="errorFor('caseInfo.amount')"
          >
            <input
              scsc-input
              id="ci-amount"
              class="tnum"
              inputmode="numeric"
              formControlName="amount"
              [invalid]="invalid('caseInfo.amount')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Filing date"
            for="ci-filed"
            required
            [error]="errorFor('caseInfo.filed')"
          >
            <scsc-date-picker
              inputId="ci-filed"
              formControlName="filed"
              [invalid]="invalid('caseInfo.filed')"
            />
          </scsc-form-field>
          <scsc-fieldset legend="Jury demanded" [inline]="true" class="sm:col-span-2">
            <label class="flex items-center gap-2 text-sm">
              <input type="radio" scsc-radio value="plaintiff" formControlName="jury" />
              By plaintiff
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="radio" scsc-radio value="defendant" formControlName="jury" />
              By defendant
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="radio" scsc-radio value="none" formControlName="jury" />
              Not demanded
            </label>
          </scsc-fieldset>
        </div>
      </scsc-card>
    </scsc-section>

    <scsc-section heading="Plaintiff" description="The person or organization filing.">
      <scsc-card class="max-w-3xl">
        <div formGroupName="plaintiff" class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="Full name or organization"
            for="ci-p-name"
            required
            [error]="errorFor('plaintiff.name')"
          >
            <input
              scsc-input
              id="ci-p-name"
              formControlName="name"
              [invalid]="invalid('plaintiff.name')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Email"
            for="ci-p-email"
            hint="For e-service, if they agreed to it"
            [error]="errorFor('plaintiff.email')"
          >
            <input
              scsc-input
              id="ci-p-email"
              type="email"
              formControlName="email"
              [invalid]="invalid('plaintiff.email')"
            />
          </scsc-form-field>
          <label class="flex items-center gap-3 sm:col-span-2">
            <input type="checkbox" scsc-switch formControlName="represented" />
            <span class="text-sm font-medium">Represented by an attorney</span>
          </label>
          @if (represented()) {
            <scsc-form-field
              label="Attorney name"
              for="ci-p-attorney"
              required
              [error]="errorFor('plaintiff.attorney')"
            >
              <input
                scsc-input
                id="ci-p-attorney"
                formControlName="attorney"
                [invalid]="invalid('plaintiff.attorney')"
              />
            </scsc-form-field>
            <scsc-form-field
              label="State Bar number"
              for="ci-p-bar"
              required
              [error]="errorFor('plaintiff.bar')"
            >
              <input
                scsc-input
                id="ci-p-bar"
                class="tnum"
                inputmode="numeric"
                formControlName="bar"
                [invalid]="invalid('plaintiff.bar')"
              />
            </scsc-form-field>
          }
        </div>
      </scsc-card>
    </scsc-section>

    <scsc-section heading="Defendant">
      <scsc-card class="max-w-3xl">
        <div formGroupName="defendant" class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="Full name or organization"
            for="ci-d-name"
            required
            [error]="errorFor('defendant.name')"
          >
            <input
              scsc-input
              id="ci-d-name"
              formControlName="name"
              [invalid]="invalid('defendant.name')"
            />
          </scsc-form-field>
          <scsc-form-field label="Address for service" for="ci-d-address" hint="Optional">
            <input scsc-input id="ci-d-address" autocomplete="off" formControlName="address" />
          </scsc-form-field>
        </div>
      </scsc-card>
    </scsc-section>

    <scsc-section heading="First hearing" description="The initial case management conference.">
      <scsc-card class="max-w-3xl">
        <div formGroupName="hearing" class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="Department"
            for="ci-dept"
            required
            [error]="errorFor('hearing.department')"
          >
            <select
              scsc-select
              id="ci-dept"
              formControlName="department"
              [invalid]="invalid('hearing.department')"
            >
              <option value="">Choose one</option>
              <option value="3">Dept. 3 \u2014 Hon. Samuel Whitfield</option>
              <option value="10">Dept. 10 \u2014 Hon. Miriam Okafor</option>
              <option value="22">Dept. 22 \u2014 Hon. Theresa Montoya</option>
            </select>
          </scsc-form-field>
          <scsc-form-field
            label="Conference date"
            for="ci-cmc"
            hint="At least 120 days after filing"
            required
            [error]="errorFor('hearing.date')"
          >
            <scsc-date-picker
              inputId="ci-cmc"
              formControlName="date"
              [invalid]="invalid('hearing.date')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Interpreter"
            for="ci-interp"
            hint="Language, if a party asked for one"
          >
            <select scsc-select id="ci-interp" formControlName="interpreter">
              <option value="">None requested</option>
              <option value="es">Spanish</option>
              <option value="vi">Vietnamese</option>
              <option value="zh">Mandarin</option>
              <option value="ase">American Sign Language</option>
            </select>
          </scsc-form-field>
          <scsc-form-field
            label="Clerk\u2019s notes"
            for="ci-notes"
            hint="Internal; not part of the record"
            class="sm:col-span-2"
          >
            <textarea scsc-textarea id="ci-notes" rows="3" formControlName="notes"></textarea>
          </scsc-form-field>
        </div>
      </scsc-card>
    </scsc-section>

    <!-- Sticky action bar. The page reserves its height as scroll padding (see the constructor),
         so a focused field is never hidden behind it (WCAG 2.4.11). -->
    <div
      class="sticky bottom-3 z-10 max-w-3xl rounded-box border border-base-300 bg-base-100 px-4 py-3 elevate-md"
    >
      <div class="flex flex-wrap items-center justify-end gap-2">
        <p class="me-auto text-sm text-base-content/70" role="status">{{ draftStatus() }}</p>
        <scsc-button variant="ghost" (click)="reset()">Cancel</scsc-button>
        <scsc-button variant="neutral" outline (click)="saveDraft()">Save draft</scsc-button>
        <scsc-button nativeType="submit">Create case</scsc-button>
      </div>
    </div>
  </form>
</scsc-app-shell>
`}}[`case-intake-form`],layout:`page`,height:`60rem`}];export{Pe as DEMOS};