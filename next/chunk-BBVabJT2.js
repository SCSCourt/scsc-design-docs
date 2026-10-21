import{Dn as Wue,E as Bue,Go as g,Gs as zS,In as Xz,Ki as ye,Ms as uc,Na as Jb,No as cc,Nr as jo,Xa as Pv,Y as Fs,bn as Vz,cs as lc,ds as nD,ii as qo,kt as NE,ms as nu,nt as IA,oi as que,pi as sn,ra as Af,t as $E,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var b={"button-disclosure":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCheckbox } from '@scscourt/design';

@Component({
  selector: 'app-button-disclosure-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCheckbox],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <!-- A disclosure: aria-expanded follows the panel; aria-controls points at it. -->
      <scsc-button
        variant="neutral"
        outline
        [ariaExpanded]="filtersOpen()"
        ariaControls="docket-filters"
        (click)="filtersOpen.set(!filtersOpen())"
      >
        Docket filters
      </scsc-button>
      <!-- A toggle: the label stays the same; aria-pressed carries the state. -->
      <scsc-button
        [variant]="sealedOnly() ? 'primary' : 'neutral'"
        [outline]="!sealedOnly()"
        [ariaPressed]="sealedOnly()"
        (click)="sealedOnly.set(!sealedOnly())"
      >
        Sealed documents only
      </scsc-button>
    </div>
    <div
      id="docket-filters"
      class="mt-3 max-w-md rounded-box border border-base-300 p-4"
      [hidden]="!filtersOpen()"
    >
      <fieldset class="flex flex-col gap-2">
        <legend class="mb-1 text-sm font-semibold">Document types</legend>
        <label class="flex items-center gap-2"
          ><input type="checkbox" scsc-checkbox checked /> Motions</label
        >
        <label class="flex items-center gap-2"
          ><input type="checkbox" scsc-checkbox checked /> Orders</label
        >
        <label class="flex items-center gap-2"
          ><input type="checkbox" scsc-checkbox /> Minute orders</label
        >
      </fieldset>
    </div>
  \`,
})
export class ButtonDisclosureDemo {
  protected readonly filtersOpen = signal(false);
  protected readonly sealedOnly = signal(false);
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <!-- A disclosure: aria-expanded follows the panel; aria-controls points at it. -->
  <scsc-button
    variant="neutral"
    outline
    [ariaExpanded]="filtersOpen()"
    ariaControls="docket-filters"
    (click)="filtersOpen.set(!filtersOpen())"
  >
    Docket filters
  </scsc-button>
  <!-- A toggle: the label stays the same; aria-pressed carries the state. -->
  <scsc-button
    [variant]="sealedOnly() ? 'primary' : 'neutral'"
    [outline]="!sealedOnly()"
    [ariaPressed]="sealedOnly()"
    (click)="sealedOnly.set(!sealedOnly())"
  >
    Sealed documents only
  </scsc-button>
</div>
<div
  id="docket-filters"
  class="mt-3 max-w-md rounded-box border border-base-300 p-4"
  [hidden]="!filtersOpen()"
>
  <fieldset class="flex flex-col gap-2">
    <legend class="mb-1 text-sm font-semibold">Document types</legend>
    <label class="flex items-center gap-2"
      ><input type="checkbox" scsc-checkbox checked /> Motions</label
    >
    <label class="flex items-center gap-2"
      ><input type="checkbox" scsc-checkbox checked /> Orders</label
    >
    <label class="flex items-center gap-2"
      ><input type="checkbox" scsc-checkbox /> Minute orders</label
    >
  </fieldset>
</div>
`},"button-form":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField, ScscInput } from '@scscourt/design';

@Component({
  selector: 'app-button-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscInput],
  template: \`
    <form class="max-w-md" [formGroup]="form" (ngSubmit)="submit()">
      <scsc-form-field
        label="Case number"
        for="button-form-case"
        hint="Format: 24CV012345"
        required
        [error]="error()"
      >
        <input
          scsc-input
          id="button-form-case"
          formControlName="caseNumber"
          autocomplete="off"
          [invalid]="!!error()"
          [attr.aria-invalid]="!!error()"
        />
      </scsc-form-field>

      <!-- One primary action; submit and reset are native button types inside the form. -->
      <div class="mt-4 flex flex-wrap justify-end gap-2">
        <scsc-button variant="ghost" nativeType="reset">Clear</scsc-button>
        <scsc-button variant="secondary" outline (click)="saveDraft()">Save draft</scsc-button>
        <scsc-button variant="primary" nativeType="submit" [loading]="submitting()">
          Submit filing
        </scsc-button>
      </div>

      <p class="mt-3 min-h-5 text-sm text-success" role="status">{{ message() }}</p>
    </form>
  \`,
})
export class ButtonFormDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    caseNumber: ['', Validators.required],
  });
  protected readonly submitting = signal(false);
  protected readonly message = signal('');

  protected error(): string {
    const c = this.form.controls.caseNumber;
    return c.invalid && c.touched ? 'Enter the case number this filing belongs to.' : '';
  }

  protected saveDraft(): void {
    this.message.set('Draft saved.');
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.message.set('');
    this.submitting.set(true);
    setTimeout(() => {
      this.submitting.set(false);
      this.message.set(\`Filing submitted for \${this.form.controls.caseNumber.value}.\`);
    }, 1200);
  }
}
`,html:`<form class="max-w-md" [formGroup]="form" (ngSubmit)="submit()">
  <scsc-form-field
    label="Case number"
    for="button-form-case"
    hint="Format: 24CV012345"
    required
    [error]="error()"
  >
    <input
      scsc-input
      id="button-form-case"
      formControlName="caseNumber"
      autocomplete="off"
      [invalid]="!!error()"
      [attr.aria-invalid]="!!error()"
    />
  </scsc-form-field>

  <!-- One primary action; submit and reset are native button types inside the form. -->
  <div class="mt-4 flex flex-wrap justify-end gap-2">
    <scsc-button variant="ghost" nativeType="reset">Clear</scsc-button>
    <scsc-button variant="secondary" outline (click)="saveDraft()">Save draft</scsc-button>
    <scsc-button variant="primary" nativeType="submit" [loading]="submitting()">
      Submit filing
    </scsc-button>
  </div>

  <p class="mt-3 min-h-5 text-sm text-success" role="status">{{ message() }}</p>
</form>
`},"button-link":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscIcon } from '@scscourt/design';

@Component({
  selector: 'app-button-link-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscIcon],
  template: \`
    <!-- Each action here navigates, so each one is a link styled as a button. -->
    <div class="flex flex-wrap items-center gap-3">
      <a scsc-button routerLink=".">View filing receipt</a>
      <a scsc-button variant="secondary" outline routerLink=".">File another document</a>
      <a scsc-button variant="neutral" outline size="sm" routerLink=".">Back to 24CV012345</a>
    </div>

    <!-- External URL: a new tab needs rel="noopener", and screen-reader users are told about it. -->
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <a scsc-button variant="ghost" href="https://www.scscourt.org" target="_blank" rel="noopener">
        Court website <scsc-icon name="external-link" size="sm" />
        <span class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  \`,
})
export class ButtonLinkDemo {}
`,html:`<!-- Each action here navigates, so each one is a link styled as a button. -->
<div class="flex flex-wrap items-center gap-3">
  <a scsc-button routerLink=".">View filing receipt</a>
  <a scsc-button variant="secondary" outline routerLink=".">File another document</a>
  <a scsc-button variant="neutral" outline size="sm" routerLink=".">Back to 24CV012345</a>
</div>

<!-- External URL: a new tab needs rel="noopener", and screen-reader users are told about it. -->
<div class="mt-4 flex flex-wrap items-center gap-3">
  <a scsc-button variant="ghost" href="https://www.scscourt.org" target="_blank" rel="noopener">
    Court website <scsc-icon name="external-link" size="sm" />
    <span class="sr-only">(opens in a new tab)</span>
  </a>
</div>
`},"button-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscIcon } from '@scscourt/design';

@Component({
  selector: 'app-button-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscIcon],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button size="xs">Extra small</scsc-button>
      <scsc-button size="sm">Small</scsc-button>
      <scsc-button size="md">Medium</scsc-button>
      <scsc-button size="lg">Large</scsc-button>
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <scsc-button variant="primary"><scsc-icon name="download" size="sm" /> Download</scsc-button>
      <scsc-button variant="secondary" outline
        >Continue <scsc-icon name="arrow-right" size="sm"
      /></scsc-button>
    </div>
  \`,
})
export class ButtonSizesDemo {}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button size="xs">Extra small</scsc-button>
  <scsc-button size="sm">Small</scsc-button>
  <scsc-button size="md">Medium</scsc-button>
  <scsc-button size="lg">Large</scsc-button>
</div>
<div class="mt-4 flex flex-wrap items-center gap-3">
  <scsc-button variant="primary"><scsc-icon name="download" size="sm" /> Download</scsc-button>
  <scsc-button variant="secondary" outline
    >Continue <scsc-icon name="arrow-right" size="sm"
  /></scsc-button>
</div>
`},"button-states":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-button-states-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscText],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <!-- Loading keeps focus and width; clicks are ignored and "Loading" is announced. -->
      <scsc-button variant="primary" [loading]="exporting()" (click)="exportDocket()">
        Export docket
      </scsc-button>
      <scsc-button variant="primary" disabled>Submit filing</scsc-button>
      <scsc-button variant="neutral" outline disabled>Withdraw filing</scsc-button>
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <!-- Still reachable by Tab, so the reason can be heard. -->
      <scsc-button variant="primary" disabledFocusable ariaDescribedby="pay-reason">
        Pay $435.00 filing fee
      </scsc-button>
      <scsc-text id="pay-reason" size="sm" tone="muted">
        Add a payment method before paying.
      </scsc-text>
    </div>
    <div class="mt-4 max-w-xs">
      <scsc-button variant="primary" block>Pay $435.00 filing fee</scsc-button>
    </div>
  \`,
})
export class ButtonStatesDemo {
  protected readonly exporting = signal(false);

  protected exportDocket(): void {
    this.exporting.set(true);
    setTimeout(() => this.exporting.set(false), 1500);
  }
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <!-- Loading keeps focus and width; clicks are ignored and "Loading" is announced. -->
  <scsc-button variant="primary" [loading]="exporting()" (click)="exportDocket()">
    Export docket
  </scsc-button>
  <scsc-button variant="primary" disabled>Submit filing</scsc-button>
  <scsc-button variant="neutral" outline disabled>Withdraw filing</scsc-button>
</div>
<div class="mt-4 flex flex-wrap items-center gap-3">
  <!-- Still reachable by Tab, so the reason can be heard. -->
  <scsc-button variant="primary" disabledFocusable ariaDescribedby="pay-reason">
    Pay $435.00 filing fee
  </scsc-button>
  <scsc-text id="pay-reason" size="sm" tone="muted">
    Add a payment method before paying.
  </scsc-text>
</div>
<div class="mt-4 max-w-xs">
  <scsc-button variant="primary" block>Pay $435.00 filing fee</scsc-button>
</div>
`},"button-variants":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton } from '@scscourt/design';

@Component({
  selector: 'app-button-variants-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton],
  template: \`
    <div class="flex flex-wrap gap-3">
      <scsc-button variant="primary">Primary</scsc-button>
      <scsc-button variant="secondary">Secondary</scsc-button>
      <scsc-button variant="accent">Accent</scsc-button>
      <scsc-button variant="neutral">Neutral</scsc-button>
      <scsc-button variant="ghost">Ghost</scsc-button>
      <scsc-button variant="link">Link</scsc-button>
    </div>
    <div class="mt-4 flex flex-wrap gap-3">
      <scsc-button variant="primary" outline>Outline primary</scsc-button>
      <scsc-button variant="secondary" outline>Outline secondary</scsc-button>
      <scsc-button variant="neutral" outline>Outline neutral</scsc-button>
    </div>
  \`,
})
export class ButtonVariantsDemo {}
`,html:`<div class="flex flex-wrap gap-3">
  <scsc-button variant="primary">Primary</scsc-button>
  <scsc-button variant="secondary">Secondary</scsc-button>
  <scsc-button variant="accent">Accent</scsc-button>
  <scsc-button variant="neutral">Neutral</scsc-button>
  <scsc-button variant="ghost">Ghost</scsc-button>
  <scsc-button variant="link">Link</scsc-button>
</div>
<div class="mt-4 flex flex-wrap gap-3">
  <scsc-button variant="primary" outline>Outline primary</scsc-button>
  <scsc-button variant="secondary" outline>Outline secondary</scsc-button>
  <scsc-button variant="neutral" outline>Outline neutral</scsc-button>
</div>
`}};var v=class a{filtersOpen=q(!1);sealedOnly=q(!1);static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-button-disclosure-demo`]],decls:18,vars:5,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`neutral`,`outline`,``,`ariaControls`,`docket-filters`,3,`click`,`ariaExpanded`],[3,`click`,`variant`,`outline`,`ariaPressed`],[`id`,`docket-filters`,1,`mt-3`,`max-w-md`,`rounded-box`,`border`,`border-base-300`,`p-4`,3,`hidden`],[1,`flex`,`flex-col`,`gap-2`],[1,`mb-1`,`text-sm`,`font-semibold`],[1,`flex`,`items-center`,`gap-2`],[`type`,`checkbox`,`scsc-checkbox`,``,`checked`,``],[`type`,`checkbox`,`scsc-checkbox`,``]],template:function(s,o){s&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return o.filtersOpen.set(!o.filtersOpen())}),G_(2,` Docket filters `),Lf(),Ga(3,`scsc-button`,2),lc(`click`,function(){return o.sealedOnly.set(!o.sealedOnly())}),G_(4,` Sealed documents only `),Lf()(),Ga(5,`div`,3)(6,`fieldset`,4)(7,`legend`,5),G_(8,`Document types`),Lf(),Ga(9,`label`,6),uc(10,`input`,7),G_(11,` Motions`),Lf(),Ga(12,`label`,6),uc(13,`input`,7),G_(14,` Orders`),Lf(),Ga(15,`label`,6),uc(16,`input`,8),G_(17,` Minute orders`),Lf()()()),s&2&&(Jb(),Pv(`ariaExpanded`,o.filtersOpen()),Jb(2),Pv(`variant`,o.sealedOnly()?`primary`:`neutral`)(`outline`,!o.sealedOnly())(`ariaPressed`,o.sealedOnly()),Jb(2),Pv(`hidden`,!o.filtersOpen()))},dependencies:[sn,jo],encapsulation:2})};var x=class a{fb=g(Wue);form=this.fb.nonNullable.group({caseNumber:[``,Fs.required]});submitting=q(!1);message=q(``);error(){let i=this.form.controls.caseNumber;return i.invalid&&i.touched?`Enter the case number this filing belongs to.`:``}saveDraft(){this.message.set(`Draft saved.`)}submit(){this.form.markAllAsTouched(),!this.form.invalid&&(this.message.set(``),this.submitting.set(!0),setTimeout(()=>{this.submitting.set(!1),this.message.set(`Filing submitted for ${this.form.controls.caseNumber.value}.`)},1200))}static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-button-form-demo`]],decls:12,vars:6,consts:[[1,`max-w-md`,3,`ngSubmit`,`formGroup`],[`label`,`Case number`,`for`,`button-form-case`,`hint`,`Format: 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`button-form-case`,`formControlName`,`caseNumber`,`autocomplete`,`off`,3,`invalid`],[1,`mt-4`,`flex`,`flex-wrap`,`justify-end`,`gap-2`],[`variant`,`ghost`,`nativeType`,`reset`],[`variant`,`secondary`,`outline`,``,3,`click`],[`variant`,`primary`,`nativeType`,`submit`,3,`loading`],[`role`,`status`,1,`mt-3`,`min-h-5`,`text-sm`,`text-success`]],template:function(s,o){s&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return o.submit()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`scsc-button`,4),G_(5,`Clear`),Lf(),Ga(6,`scsc-button`,5),lc(`click`,function(){return o.saveDraft()}),G_(7,`Save draft`),Lf(),Ga(8,`scsc-button`,6),G_(9,` Submit filing `),Lf()(),Ga(10,`p`,7),G_(11),Lf()()),s&2&&(Pv(`formGroup`,o.form),Jb(),Pv(`error`,o.error()),Jb(),Pv(`invalid`,!!o.error()),cc(`aria-invalid`,!!o.error()),zS(),Jb(6),Pv(`loading`,o.submitting()),Jb(3),nD(o.message()))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,sn,Vn,qo],encapsulation:2})};var S=class a{static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-button-link-demo`]],decls:13,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`scsc-button`,``,`routerLink`,`.`],[`scsc-button`,``,`variant`,`secondary`,`outline`,``,`routerLink`,`.`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`.`],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`scsc-button`,``,`variant`,`ghost`,`href`,`https://www.scscourt.org`,`target`,`_blank`,`rel`,`noopener`],[`name`,`external-link`,`size`,`sm`],[1,`sr-only`]],template:function(s,o){s&1&&(Ga(0,`div`,0)(1,`a`,1),G_(2,`View filing receipt`),Lf(),Ga(3,`a`,2),G_(4,`File another document`),Lf(),Ga(5,`a`,3),G_(6,`Back to 24CV012345`),Lf()(),Ga(7,`div`,4)(8,`a`,5),G_(9,` Court website `),uc(10,`scsc-icon`,6),Ga(11,`span`,7),G_(12,`(opens in a new tab)`),Lf()()())},dependencies:[nu,$E,ye],encapsulation:2})};var k=class a{static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-button-sizes-demo`]],decls:16,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`size`,`xs`],[`size`,`sm`],[`size`,`md`],[`size`,`lg`],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`primary`],[`name`,`download`,`size`,`sm`],[`variant`,`secondary`,`outline`,``],[`name`,`arrow-right`,`size`,`sm`]],template:function(s,o){s&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),G_(2,`Extra small`),Lf(),Ga(3,`scsc-button`,2),G_(4,`Small`),Lf(),Ga(5,`scsc-button`,3),G_(6,`Medium`),Lf(),Ga(7,`scsc-button`,4),G_(8,`Large`),Lf()(),Ga(9,`div`,5)(10,`scsc-button`,6),uc(11,`scsc-icon`,7),G_(12,` Download`),Lf(),Ga(13,`scsc-button`,8),G_(14,`Continue `),uc(15,`scsc-icon`,9),Lf()())},dependencies:[sn,ye],encapsulation:2})};var D=class a{exporting=q(!1);exportDocket(){this.exporting.set(!0),setTimeout(()=>this.exporting.set(!1),1500)}static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-button-states-demo`]],decls:15,vars:1,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`primary`,3,`click`,`loading`],[`variant`,`primary`,`disabled`,``],[`variant`,`neutral`,`outline`,``,`disabled`,``],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`primary`,`disabledFocusable`,``,`ariaDescribedby`,`pay-reason`],[`id`,`pay-reason`,`size`,`sm`,`tone`,`muted`],[1,`mt-4`,`max-w-xs`],[`variant`,`primary`,`block`,``]],template:function(s,o){s&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return o.exportDocket()}),G_(2,` Export docket `),Lf(),Ga(3,`scsc-button`,2),G_(4,`Submit filing`),Lf(),Ga(5,`scsc-button`,3),G_(6,`Withdraw filing`),Lf()(),Ga(7,`div`,4)(8,`scsc-button`,5),G_(9,` Pay $435.00 filing fee `),Lf(),Ga(10,`scsc-text`,6),G_(11,` Add a payment method before paying. `),Lf()(),Ga(12,`div`,7)(13,`scsc-button`,8),G_(14,`Pay $435.00 filing fee`),Lf()()),s&2&&(Jb(),Pv(`loading`,o.exporting()))},dependencies:[sn,NE],encapsulation:2})};var De={slug:`button`,name:`Button`,classes:[`ScscButton`,`ScscButtonLink`],category:`Actions`,whenToUse:["One `primary` button per view for the main action; `secondary` or `outline` for alternatives; `ghost` for low-emphasis actions like Cancel.","Navigation (a route or a URL) is a link: use `a[scsc-button]`, which looks like a button but keeps link semantics. An in-page action is `scsc-button`. Never nest `<scsc-button>` inside `<a>`.",'Inside a form, `nativeType="submit"` and `nativeType="reset"` wire the buttons to the form; every other `scsc-button` is `type="button"` and never submits by accident.',"Icon-only actions belong to `scsc-icon-button`, which enforces an accessible name."],demos:[{id:`button-variants`,title:`Variants`,description:`Six intents, each with an outline form.`,component:class a{static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-button-variants-demo`]],decls:20,vars:0,consts:[[1,`flex`,`flex-wrap`,`gap-3`],[`variant`,`primary`],[`variant`,`secondary`],[`variant`,`accent`],[`variant`,`neutral`],[`variant`,`ghost`],[`variant`,`link`],[1,`mt-4`,`flex`,`flex-wrap`,`gap-3`],[`variant`,`primary`,`outline`,``],[`variant`,`secondary`,`outline`,``],[`variant`,`neutral`,`outline`,``]],template:function(s,o){s&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),G_(2,`Primary`),Lf(),Ga(3,`scsc-button`,2),G_(4,`Secondary`),Lf(),Ga(5,`scsc-button`,3),G_(6,`Accent`),Lf(),Ga(7,`scsc-button`,4),G_(8,`Neutral`),Lf(),Ga(9,`scsc-button`,5),G_(10,`Ghost`),Lf(),Ga(11,`scsc-button`,6),G_(12,`Link`),Lf()(),Ga(13,`div`,7)(14,`scsc-button`,8),G_(15,`Outline primary`),Lf(),Ga(16,`scsc-button`,9),G_(17,`Outline secondary`),Lf(),Ga(18,`scsc-button`,10),G_(19,`Outline neutral`),Lf()())},dependencies:[sn],encapsulation:2})},source:b[`button-variants`]},{id:`button-states`,title:`States`,description:"`loading` hides the label behind a spinner (the width stays), ignores clicks and keeps focus; `disabled` removes the button from the tab order, while `disabledFocusable` keeps it reachable so the reason in `ariaDescribedby` can be heard.",component:D,source:b[`button-states`]},{id:`button-disclosure`,title:`Disclosure and toggle`,description:"ARIA states are inputs, because attributes on `<scsc-button>` would land on the host, not the inner `<button>`: `ariaExpanded` + `ariaControls` for a panel the button shows, `ariaPressed` for a toggle whose label stays the same.",component:v,source:b[`button-disclosure`]},{id:`button-sizes`,title:`Sizes and icons`,description:`Four sizes; icons are projected content.`,component:k,source:b[`button-sizes`]},{id:`button-form`,title:`Form actions`,description:"A submit, a reset and a plain action in one form: `nativeType` picks the native `type`, and `loading` guards the submit against a double click.",component:x,source:b[`button-form`]},{id:`button-link`,title:`Links that look like buttons`,description:'`a[scsc-button]` for actions that navigate: `routerLink` for routes, `href` with `target="_blank"` and `rel="noopener"` for other sites.',component:S,source:b[`button-link`]}],a11y:["Renders a native `<button>`: keyboard activation, form submission and `disabled` semantics come for free.",'`loading` sets `aria-busy="true"` and `aria-disabled="true"` instead of `disabled`, so focus stays on the button; clicks (and form submission) are ignored until it ends, the label stays in the accessible name, and the shared "Loading" label (`SCSC_LABELS.loading`) is announced politely.',"`disabled` is the native attribute: the button leaves the tab order and is skipped by screen readers browsing controls. `disabledFocusable` uses `aria-disabled` instead, so the button stays focusable and can point at the reason with `ariaDescribedby`.",'`a[scsc-button]` stays a link: it is announced as a link, opens in a new tab and works with history. Tell screen-reader users when it opens a new tab (visually hidden "(opens in a new tab)").',"The focus ring is the theme's 2px gold outline on `:focus-visible`."],keyboard:[{keys:`Tab / Shift + Tab`,action:"Moves to the button, including a `loading` or `disabledFocusable` one; a `disabled` button is skipped."},{keys:`Enter / Space`,action:"Activates the button; ignored while `loading` or `disabledFocusable`."}],aria:["`ariaExpanded`, `ariaControls`, `ariaPressed`, `ariaHaspopup` and `ariaDescribedby` set the matching attributes on the inner `<button>`; `null` (the default) leaves each one off.",'`a[scsc-button]` is the native `<a>`, so ARIA attributes go on it directly (`aria-current="page"`, `aria-describedby`); it has no disabled or loading state, as a link cannot be disabled.'],appMustProvide:["Visible text in every `scsc-button`; icon-only actions use `scsc-icon-button` with a `label`.",'The `id` that `ariaControls` and `ariaDescribedby` point at, and the outcome of a `loading` action ("Filing submitted"), announced through `ScscAnnouncer` or shown in a status line.'],related:[`icon-button`,`button-group`,`fab`,`dropdown`]};export{De as BUTTON_DOCS};