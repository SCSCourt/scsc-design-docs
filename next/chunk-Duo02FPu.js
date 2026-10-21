import{Dn as Wue,E as Bue,Go as g$1,Gs as zS,Hs as y_,In as Xz,Ma as JT,Ms as uc,Na as Jb,T as Br,Vr as mN,Xa as Pv,Zo as i_,_s as o_,bn as Vz,cs as lc,ds as nD,ii as qo,ks as t_,kt as NE,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var g=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-spinner-labelled-demo`]],decls:10,vars:0,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[1,`flex`,`items-center`,`gap-2`],[`size`,`sm`,`label`,`Checking case number`],[`tone`,`muted`],[`title`,`Docket`],[1,`flex`,`min-h-32`,`flex-col`,`items-center`,`justify-center`,`gap-3`],[`size`,`lg`,`label`,`Loading docket entries`],[`size`,`sm`,`tone`,`muted`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-spinner`,2),Ga(3,`scsc-text`,3),G_(4,`Checking case number 24CV012345…`),Lf()(),Ga(5,`scsc-card`,4)(6,`div`,5),uc(7,`scsc-spinner`,6),Ga(8,`scsc-text`,7),G_(9,`Loading docket entries`),Lf()()()())},dependencies:[mN,Br,NE],encapsulation:2})};function q(t,n){if(t&1&&(Ga(0,`div`,5),uc(1,`scsc-spinner`,7),Ga(2,`scsc-text`,8),G_(3),Lf()()),t&2){let e=y_();Jb(),Pv(`label`,`Looking up case `+e.searched()),Jb(2),$f(`Looking up `,e.searched(),`…`)}}function W(t,n){if(t&1&&(Ga(0,`scsc-text`,6),G_(1),Lf()),t&2){let e=y_();Jb(),nD(e.result())}}var h=class t{fb=g$1(Wue);form=this.fb.nonNullable.group({caseNumber:`24CV012345`});checking=q$1(!1);searched=q$1(``);result=q$1(``);lookUp(){let n=this.form.controls.caseNumber.value.trim().toUpperCase();this.searched.set(n),this.result.set(``),this.checking.set(!0),setTimeout(()=>{this.checking.set(!1),this.result.set(n===`24CV012345`?`Alvarez v. Pacific Transit Authority · Dept. 6 · next hearing 14 Oct 2026`:`No case found for that number. Check the format: 24CV012345.`)},1200)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-spinner-lookup-demo`]],decls:8,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`,3,`ngSubmit`,`formGroup`],[`label`,`Case number`,`for`,`spinner-lookup-case`,`hint`,`Try 24CV012345`],[1,`flex`,`gap-2`],[`scsc-input`,``,`id`,`spinner-lookup-case`,`formControlName`,`caseNumber`,`autocomplete`,`off`],[`variant`,`secondary`,`nativeType`,`submit`,3,`disabled`],[1,`flex`,`items-center`,`gap-2`],[`size`,`sm`,`role`,`status`],[`size`,`sm`,3,`label`],[`size`,`sm`,`tone`,`muted`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.lookUp()}),Ga(1,`scsc-form-field`,1)(2,`div`,2)(3,`input`,3),HS(),Lf(),Ga(4,`scsc-button`,4),G_(5,` Look up `),Lf()()(),JT(6,q,4,2,`div`,5)(7,W,2,1,`scsc-text`,6),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(3),zS(),Jb(),Pv(`disabled`,r.checking()),Jb(2),t_(r.checking()?6:r.result()?7:-1))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,sn,Vn,qo,Br,NE],encapsulation:2})};function $(t,n){if(t&1&&(Ga(0,`div`,1),uc(1,`scsc-spinner`,2),Ga(2,`scsc-text`,3),G_(3),Lf()()),t&2){let e=n.$implicit;Jb(),Pv(`size`,e),Jb(2),nD(e)}}var x=class t{sizes=[`xs`,`sm`,`md`,`lg`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-spinner-sizes-demo`]],decls:3,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-8`],[1,`flex`,`flex-col`,`items-center`,`gap-2`],[3,`size`],[`size`,`xs`,`tone`,`muted`]],template:function(e,r){e&1&&(Ga(0,`div`,0),o_(1,$,4,2,`div`,1,r_),Lf()),e&2&&(Jb(),i_(r.sizes))},dependencies:[Br,NE],encapsulation:2})};var S={"spinner-labelled":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscSpinner, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-spinner-labelled-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscSpinner, ScscText],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      <!-- Inline: the visible text and the spinner's label say the same thing. -->
      <div class="flex items-center gap-2">
        <scsc-spinner size="sm" label="Checking case number" />
        <scsc-text tone="muted">Checking case number 24CV012345\u2026</scsc-text>
      </div>

      <!-- Panel: a centred spinner while a whole region loads. -->
      <scsc-card title="Docket">
        <div class="flex min-h-32 flex-col items-center justify-center gap-3">
          <scsc-spinner size="lg" label="Loading docket entries" />
          <scsc-text size="sm" tone="muted">Loading docket entries</scsc-text>
        </div>
      </scsc-card>
    </div>
  \`,
})
export class SpinnerLabelledDemo {}
`,html:`<div class="flex max-w-md flex-col gap-4">
  <!-- Inline: the visible text and the spinner's label say the same thing. -->
  <div class="flex items-center gap-2">
    <scsc-spinner size="sm" label="Checking case number" />
    <scsc-text tone="muted">Checking case number 24CV012345\u2026</scsc-text>
  </div>

  <!-- Panel: a centred spinner while a whole region loads. -->
  <scsc-card title="Docket">
    <div class="flex min-h-32 flex-col items-center justify-center gap-3">
      <scsc-spinner size="lg" label="Loading docket entries" />
      <scsc-text size="sm" tone="muted">Loading docket entries</scsc-text>
    </div>
  </scsc-card>
</div>
`},"spinner-lookup":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ScscButton, ScscFormField, ScscInput, ScscSpinner, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-spinner-lookup-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscInput, ScscSpinner, ScscText],
  template: \`
    <form class="flex max-w-md flex-col gap-3" [formGroup]="form" (ngSubmit)="lookUp()">
      <scsc-form-field label="Case number" for="spinner-lookup-case" hint="Try 24CV012345">
        <div class="flex gap-2">
          <input
            scsc-input
            id="spinner-lookup-case"
            formControlName="caseNumber"
            autocomplete="off"
          />
          <scsc-button variant="secondary" nativeType="submit" [disabled]="checking()">
            Look up
          </scsc-button>
        </div>
      </scsc-form-field>

      <!-- The spinner exists only while the request runs, so its status region goes with it. -->
      @if (checking()) {
        <div class="flex items-center gap-2">
          <scsc-spinner size="sm" [label]="'Looking up case ' + searched()" />
          <scsc-text size="sm" tone="muted">Looking up {{ searched() }}\u2026</scsc-text>
        </div>
      } @else if (result()) {
        <scsc-text size="sm" role="status">{{ result() }}</scsc-text>
      }
    </form>
  \`,
})
export class SpinnerLookupDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({ caseNumber: '24CV012345' });
  protected readonly checking = signal(false);
  protected readonly searched = signal('');
  protected readonly result = signal('');

  protected lookUp(): void {
    const caseNumber = this.form.controls.caseNumber.value.trim().toUpperCase();
    this.searched.set(caseNumber);
    this.result.set('');
    this.checking.set(true);
    // Replace with your case service.
    setTimeout(() => {
      this.checking.set(false);
      this.result.set(
        caseNumber === '24CV012345'
          ? 'Alvarez v. Pacific Transit Authority \xB7 Dept. 6 \xB7 next hearing 14 Oct 2026'
          : 'No case found for that number. Check the format: 24CV012345.',
      );
    }, 1200);
  }
}
`,html:`<form class="flex max-w-md flex-col gap-3" [formGroup]="form" (ngSubmit)="lookUp()">
  <scsc-form-field label="Case number" for="spinner-lookup-case" hint="Try 24CV012345">
    <div class="flex gap-2">
      <input
        scsc-input
        id="spinner-lookup-case"
        formControlName="caseNumber"
        autocomplete="off"
      />
      <scsc-button variant="secondary" nativeType="submit" [disabled]="checking()">
        Look up
      </scsc-button>
    </div>
  </scsc-form-field>

  <!-- The spinner exists only while the request runs, so its status region goes with it. -->
  @if (checking()) {
    <div class="flex items-center gap-2">
      <scsc-spinner size="sm" [label]="'Looking up case ' + searched()" />
      <scsc-text size="sm" tone="muted">Looking up {{ searched() }}\u2026</scsc-text>
    </div>
  } @else if (result()) {
    <scsc-text size="sm" role="status">{{ result() }}</scsc-text>
  }
</form>
`},"spinner-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscSpinner, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-spinner-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSpinner, ScscText],
  template: \`
    <div class="flex flex-wrap items-end gap-8">
      @for (s of sizes; track s) {
        <div class="flex flex-col items-center gap-2">
          <scsc-spinner [size]="s" />
          <scsc-text size="xs" tone="muted">{{ s }}</scsc-text>
        </div>
      }
    </div>
  \`,
})
export class SpinnerSizesDemo {
  protected readonly sizes = ['xs', 'sm', 'md', 'lg'] as const;
}
`,html:`<div class="flex flex-wrap items-end gap-8">
  @for (s of sizes; track s) {
    <div class="flex flex-col items-center gap-2">
      <scsc-spinner [size]="s" />
      <scsc-text size="xs" tone="muted">{{ s }}</scsc-text>
    </div>
  }
</div>
`}};var pe={slug:`spinner`,name:`Spinner`,classes:[`ScscSpinner`],category:`Primitives`,whenToUse:[`Short, indeterminate waits (under a few seconds) where the layout is not yet known: checking a value, loading a small panel.`,"When the shape of the incoming content is known, prefer `scsc-skeleton` so the page does not jump.","Inside a button use the button's own `loading` input rather than placing a spinner in it.","For a wait that blocks the whole view use `scsc-loading-overlay`; for determinate progress use `scsc-progress`."],demos:[{id:`spinner-sizes`,title:`Sizes`,description:"Four size tokens; `sm` sits inline with text, `lg` centres in a panel.",component:x,source:S[`spinner-sizes`]},{id:`spinner-labelled`,title:`Labelled`,description:"`label` is the accessible name; keep it in sync with any visible text.",component:g,source:S[`spinner-labelled`]},{id:`spinner-lookup`,title:`While a request runs`,description:`A case lookup: the spinner is rendered only while the request is pending, then replaced by the result.`,component:h,source:S[`spinner-lookup`]}],a11y:['The host is a `role="status"` region holding `label` (default "Loading", from `SCSC_LABELS`) as visually hidden text. The text is written just after the region renders, so it is announced even when the spinner appears at the same moment; a changed `label` is announced too.',`Say what is loading ("Loading docket entries"), not just "Loading", when several regions can load independently.`,"When loading ends, announce the outcome with its own status text (or `ScscAnnouncer`); a removed spinner says nothing."],aria:['`role="status"` on the host; the ring is `aria-hidden`.'],appMustProvide:["A `label` naming what is loading."],related:[`skeleton`,`loading-overlay`,`progress`,`button`]};export{pe as SPINNER_DOCS};