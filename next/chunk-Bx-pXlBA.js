import{Dn as Wue,E as Bue,Go as g,Gs as zS,In as Xz,Mr as jn,Na as Jb,No as cc,Xa as Pv,Y as Fs,_i as tN,bn as Vz,cs as lc,ds as nD,ii as qo,l as $ue,mn as Uue,nt as IA,oi as que,or as eP,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var f=class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Af({type:a,selectors:[[`app-accordion-group-demo`]],decls:7,vars:0,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-2`],[`title`,`When are first-appearance fees due?`,`name`,`fees-faq`,`open`,``],[`title`,`Can I ask for a fee waiver?`,`name`,`fees-faq`],[`title`,`What payment methods are accepted?`,`name`,`fees-faq`]],template:function(i,n){i&1&&(Ga(0,`div`,0)(1,`scsc-accordion-item`,1),G_(2,` Fees are due when the complaint or first responsive pleading is filed. Unlimited civil cases carry a $435 first-paper fee. `),Lf(),Ga(3,`scsc-accordion-item`,2),G_(4,` Yes. File form FW-001 with your first paper; the clerk decides within five court days. `),Lf(),Ga(5,`scsc-accordion-item`,3),G_(6,` Cash, check, money order and major credit cards at the clerk's window; cards only online. `),Lf()())},dependencies:[eP],encapsulation:2})};var u=class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Af({type:a,selectors:[[`app-accordion-independent-demo`]],decls:17,vars:0,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-2`],[`title`,`Hearing: Motion to Compel — Oct 14, 2026`,`open`,``],[1,`flex`,`flex-col`,`gap-2`],[`tone`,`info`,`soft`,``],[`title`,`Hearing: Case Management Conference — Nov 3, 2026`,`open`,``]],template:function(i,n){i&1&&(Ga(0,`div`,0)(1,`scsc-accordion-item`,1)(2,`div`,2)(3,`div`)(4,`scsc-badge`,3),G_(5,`Dept. 7`),Lf(),G_(6,` Hon. R. Castellanos · 9:00 AM`),Lf(),Ga(7,`p`),G_(8,`Opposition filed Sep 22; reply due Oct 7.`),Lf()()(),Ga(9,`scsc-accordion-item`,4)(10,`div`,2)(11,`div`)(12,`scsc-badge`,3),G_(13,`Dept. 7`),Lf(),G_(14,` Hon. R. Castellanos · 10:30 AM `),Lf(),Ga(15,`p`),G_(16,`CMC statement (CM-110) due 15 days before the conference.`),Lf()()()())},dependencies:[eP,jn],encapsulation:2})};var y=class a{fb=g(Wue);summary=q(``);form=this.fb.nonNullable.group({party:[``,Fs.required],type:[``],filedAfter:[``]});partyError(){let r=this.form.controls.party;return r.invalid&&r.touched?`Enter a party name to search.`:``}search(){if(this.form.markAllAsTouched(),this.form.invalid){this.summary.set(``);return}let{party:r,type:i,filedAfter:n}=this.form.getRawValue(),g=[i,n?`filed on or after `+n:``].filter(Boolean).join(`, `);this.summary.set(`Searching for “`+r+`”`+(g?` (`+g+`)`:``)+`.`)}static ɵfac=function(i){return new(i||a)};static ɵcmp=Af({type:a,selectors:[[`app-accordion-optional-demo`]],decls:22,vars:5,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Party name`,`for`,`accordion-party`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`accordion-party`,`formControlName`,`party`,`required`,``,3,`invalid`],[`title`,`More search options`],[1,`flex`,`flex-col`,`gap-3`,`pt-1`],[`label`,`Case type`,`for`,`accordion-type`],[`scsc-select`,``,`id`,`accordion-type`,`formControlName`,`type`],[`value`,``],[`label`,`Filed on or after`,`for`,`accordion-filed`],[`scsc-input`,``,`id`,`accordion-filed`,`type`,`date`,`formControlName`,`filedAfter`],[`variant`,`primary`,`nativeType`,`submit`],[`role`,`status`,1,`text-sm`,`text-base-content/70`]],template:function(i,n){i&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return n.search()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`scsc-accordion-item`,3)(4,`div`,4)(5,`scsc-form-field`,5)(6,`select`,6),HS(),Ga(7,`option`,7),G_(8,`Any case type`),Lf(),Ga(9,`option`),G_(10,`Civil`),Lf(),Ga(11,`option`),G_(12,`Family`),Lf(),Ga(13,`option`),G_(14,`Probate`),Lf()()(),Ga(15,`scsc-form-field`,8)(16,`input`,9),HS(),Lf()()()(),Ga(17,`div`)(18,`scsc-button`,10),G_(19,`Search cases`),Lf()(),Ga(20,`p`,11),G_(21),Lf()()),i&2&&(Pv(`formGroup`,n.form),Jb(),Pv(`error`,n.partyError()),Jb(),Pv(`invalid`,!!n.partyError()),cc(`aria-invalid`,!!n.partyError()),zS(),Jb(4),zS(),Jb(10),zS(),Jb(5),nD(n.summary()))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,WA,Vz,Xz,eP,sn,Vn,qo,On],encapsulation:2})};var h={"accordion-group":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAccordionItem } from '@scscourt/design';

@Component({
  selector: 'app-accordion-group-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAccordionItem],
  template: \`
    <!-- Same name attribute: only one item stays open at a time (native details name) -->
    <div class="flex max-w-lg flex-col gap-2">
      <scsc-accordion-item title="When are first-appearance fees due?" name="fees-faq" open>
        Fees are due when the complaint or first responsive pleading is filed. Unlimited civil cases
        carry a $435 first-paper fee.
      </scsc-accordion-item>
      <scsc-accordion-item title="Can I ask for a fee waiver?" name="fees-faq">
        Yes. File form FW-001 with your first paper; the clerk decides within five court days.
      </scsc-accordion-item>
      <scsc-accordion-item title="What payment methods are accepted?" name="fees-faq">
        Cash, check, money order and major credit cards at the clerk's window; cards only online.
      </scsc-accordion-item>
    </div>
  \`,
})
export class AccordionGroupDemo {}
`,html:`<!-- Same name attribute: only one item stays open at a time (native details name) -->
<div class="flex max-w-lg flex-col gap-2">
  <scsc-accordion-item title="When are first-appearance fees due?" name="fees-faq" open>
    Fees are due when the complaint or first responsive pleading is filed. Unlimited civil cases
    carry a $435 first-paper fee.
  </scsc-accordion-item>
  <scsc-accordion-item title="Can I ask for a fee waiver?" name="fees-faq">
    Yes. File form FW-001 with your first paper; the clerk decides within five court days.
  </scsc-accordion-item>
  <scsc-accordion-item title="What payment methods are accepted?" name="fees-faq">
    Cash, check, money order and major credit cards at the clerk's window; cards only online.
  </scsc-accordion-item>
</div>
`},"accordion-independent":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAccordionItem, ScscBadge } from '@scscourt/design';

@Component({
  selector: 'app-accordion-independent-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAccordionItem, ScscBadge],
  template: \`
    <!-- No name attribute: items open and close independently -->
    <div class="flex max-w-lg flex-col gap-2">
      <scsc-accordion-item title="Hearing: Motion to Compel \u2014 Oct 14, 2026" open>
        <div class="flex flex-col gap-2">
          <div><scsc-badge tone="info" soft>Dept. 7</scsc-badge> Hon. R. Castellanos \xB7 9:00 AM</div>
          <p>Opposition filed Sep 22; reply due Oct 7.</p>
        </div>
      </scsc-accordion-item>
      <scsc-accordion-item title="Hearing: Case Management Conference \u2014 Nov 3, 2026" open>
        <div class="flex flex-col gap-2">
          <div>
            <scsc-badge tone="info" soft>Dept. 7</scsc-badge> Hon. R. Castellanos \xB7 10:30 AM
          </div>
          <p>CMC statement (CM-110) due 15 days before the conference.</p>
        </div>
      </scsc-accordion-item>
    </div>
  \`,
})
export class AccordionIndependentDemo {}
`,html:`<!-- No name attribute: items open and close independently -->
<div class="flex max-w-lg flex-col gap-2">
  <scsc-accordion-item title="Hearing: Motion to Compel \u2014 Oct 14, 2026" open>
    <div class="flex flex-col gap-2">
      <div><scsc-badge tone="info" soft>Dept. 7</scsc-badge> Hon. R. Castellanos \xB7 9:00 AM</div>
      <p>Opposition filed Sep 22; reply due Oct 7.</p>
    </div>
  </scsc-accordion-item>
  <scsc-accordion-item title="Hearing: Case Management Conference \u2014 Nov 3, 2026" open>
    <div class="flex flex-col gap-2">
      <div>
        <scsc-badge tone="info" soft>Dept. 7</scsc-badge> Hon. R. Castellanos \xB7 10:30 AM
      </div>
      <p>CMC statement (CM-110) due 15 days before the conference.</p>
    </div>
  </scsc-accordion-item>
</div>
`},"accordion-optional":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAccordionItem,
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscSelect,
} from '@scscourt/design';

@Component({
  selector: 'app-accordion-optional-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAccordionItem,
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscSelect,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="search()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Party name" for="accordion-party" required [error]="partyError()">
        <input
          scsc-input
          id="accordion-party"
          formControlName="party"
          required
          [invalid]="!!partyError()"
          [attr.aria-invalid]="!!partyError()"
        />
      </scsc-form-field>

      <!-- Only optional refinements go in the collapsed item; the required field and the
           submit button stay visible. -->
      <scsc-accordion-item title="More search options">
        <div class="flex flex-col gap-3 pt-1">
          <scsc-form-field label="Case type" for="accordion-type">
            <select scsc-select id="accordion-type" formControlName="type">
              <option value="">Any case type</option>
              <option>Civil</option>
              <option>Family</option>
              <option>Probate</option>
            </select>
          </scsc-form-field>
          <scsc-form-field label="Filed on or after" for="accordion-filed">
            <input scsc-input id="accordion-filed" type="date" formControlName="filedAfter" />
          </scsc-form-field>
        </div>
      </scsc-accordion-item>

      <div>
        <scsc-button variant="primary" nativeType="submit">Search cases</scsc-button>
      </div>
      <p class="text-sm text-base-content/70" role="status">{{ summary() }}</p>
    </form>
  \`,
})
export class AccordionOptionalDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly summary = signal('');

  protected readonly form = this.fb.nonNullable.group({
    party: ['', Validators.required],
    type: [''],
    filedAfter: [''],
  });

  protected partyError(): string {
    const c = this.form.controls.party;
    return c.invalid && c.touched ? 'Enter a party name to search.' : '';
  }

  protected search(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.summary.set('');
      return;
    }
    const { party, type, filedAfter } = this.form.getRawValue();
    const filters = [type, filedAfter ? 'filed on or after ' + filedAfter : '']
      .filter(Boolean)
      .join(', ');
    this.summary.set('Searching for \u201C' + party + '\u201D' + (filters ? ' (' + filters + ')' : '') + '.');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="search()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field label="Party name" for="accordion-party" required [error]="partyError()">
    <input
      scsc-input
      id="accordion-party"
      formControlName="party"
      required
      [invalid]="!!partyError()"
      [attr.aria-invalid]="!!partyError()"
    />
  </scsc-form-field>

  <!-- Only optional refinements go in the collapsed item; the required field and the
       submit button stay visible. -->
  <scsc-accordion-item title="More search options">
    <div class="flex flex-col gap-3 pt-1">
      <scsc-form-field label="Case type" for="accordion-type">
        <select scsc-select id="accordion-type" formControlName="type">
          <option value="">Any case type</option>
          <option>Civil</option>
          <option>Family</option>
          <option>Probate</option>
        </select>
      </scsc-form-field>
      <scsc-form-field label="Filed on or after" for="accordion-filed">
        <input scsc-input id="accordion-filed" type="date" formControlName="filedAfter" />
      </scsc-form-field>
    </div>
  </scsc-accordion-item>

  <div>
    <scsc-button variant="primary" nativeType="submit">Search cases</scsc-button>
  </div>
  <p class="text-sm text-base-content/70" role="status">{{ summary() }}</p>
</form>
`}};var re={slug:`accordion`,name:`Accordion`,classes:[`ScscAccordionItem`],category:`Layout`,whenToUse:[`FAQ-style content and long detail pages where users need only one or two sections at a time.`,"Give items the same `name` to make them mutually exclusive (one open at a time); omit `name` when several may stay open.",`In a form, only optional refinements belong in a collapsed item ("More search options"). Never hide required fields or the primary action.`,"For a titled block that is always visible use `scsc-section`; for many small records use `scsc-list`."],demos:[{id:`accordion-group`,title:`Exclusive group`,description:'Shared `name="fees-faq"`; opening one item closes the others. The first starts `open`.',component:f,source:h[`accordion-group`]},{id:`accordion-independent`,title:`Independent items`,description:"No `name`; items open and close on their own and can hold rich content.",component:u,source:h[`accordion-independent`]},{id:`accordion-optional`,title:`Optional filters in a form`,description:`A case search whose optional filters sit in a closed item; the required field and the submit button stay outside it.`,component:y,source:h[`accordion-optional`]}],a11y:["Built on native `<details>`/`<summary>`: keyboard toggling, expanded state and screen-reader announcements come from the browser.","The `title` is the `<summary>` text; keep it a short question or label so it reads well in the collapsed state.","Exclusive groups use the native `name` attribute; no JavaScript state to keep in sync.",`Controls inside a closed item are skipped by Tab until it opens, which is exactly why required fields must stay outside.`],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves from header to header; the controls in an open item follow its header, and those in a closed item are skipped.`},{keys:`Enter / Space`,action:"On a header: opens or closes the item; in a group sharing a `name`, opening one closes whichever was open."}],appMustProvide:["A short `title` for each item that reads well collapsed, and required fields kept outside items that start closed."],related:[`page-structure`,`card`,`list`]};export{re as ACCORDION_DOCS};