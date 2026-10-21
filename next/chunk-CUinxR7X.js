import{At as NP,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Mi as vr,Mn as XR,Ms as uc,Na as Jb,Nr as jo,Ps as ut,Xa as Pv,Y as Fs,Yo as iD,Zo as i_,_s as o_,bn as Vz,bo as Y_,cs as lc,ds as nD,ii as qo,nt as IA,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function Q(d,s){if(d&1&&(Ga(0,`option`,7),G_(1),Lf()),d&2){let r=s.$implicit,e=y_();Pv(`value`,r)(`selected`,r===e.caseType()),Jb(),nD(r)}}function X(d,s){if(d&1&&(Ga(0,`option`,7),G_(1),Lf()),d&2){let r=s.$implicit,e=y_();Pv(`value`,r)(`selected`,r===e.department()),Jb(),nD(r)}}var T=class d{open=q(!1);caseTypes=[`All case types`,`Civil`,`Family`,`Probate`,`Small claims`];departments=[`All departments`,`Dept. 1`,`Dept. 5`,`Dept. 12`];caseType=q(this.caseTypes[0]);department=q(this.departments[0]);mineOnly=q(!1);summary=ut(()=>{let s=[this.caseType(),this.department()];return this.mineOnly()&&s.push(`mine only`),s.join(` · `)});reset(){this.caseType.set(this.caseTypes[0]),this.department.set(this.departments[0]),this.mineOnly.set(!1)}static ɵfac=function(r){return new(r||d)};static ɵcmp=Af({type:d,selectors:[[`app-drawer-filters-demo`]],decls:23,vars:3,consts:[[1,`flex`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[1,`text-sm`,`text-base-content/70`],[`title`,`Filter calendar`,`side`,`end`,3,`openChange`,`open`],[1,`flex`,`flex-col`,`gap-4`],[`label`,`Case type`,`for`,`drawer-case-type`],[`scsc-select`,``,`id`,`drawer-case-type`,3,`change`],[3,`value`,`selected`],[`label`,`Department`,`for`,`drawer-dept`],[`scsc-select`,``,`id`,`drawer-dept`,3,`change`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[`slot`,`footer`,1,`flex`,`gap-2`],[`variant`,`primary`,3,`click`],[`variant`,`ghost`,3,`click`]],template:function(r,e){r&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.open.set(!0)}),G_(2,`Filter calendar`),Lf(),Ga(3,`p`,2),G_(4),Lf()(),Ga(5,`scsc-drawer`,3),sD(`openChange`,function(n){return Y_(e.open,n)||(e.open=n),n}),Ga(6,`div`,4)(7,`scsc-form-field`,5)(8,`select`,6),lc(`change`,function(n){return e.caseType.set(n.target.value)}),o_(9,Q,2,3,`option`,7,r_),Lf()(),Ga(11,`scsc-form-field`,8)(12,`select`,9),lc(`change`,function(n){return e.department.set(n.target.value)}),o_(13,X,2,3,`option`,7,r_),Lf()(),Ga(15,`label`,10)(16,`input`,11),lc(`change`,function(n){return e.mineOnly.set(n.target.checked)}),Lf(),G_(17,` Only hearings assigned to me `),Lf()(),Ga(18,`div`,12)(19,`scsc-button`,13),lc(`click`,function(){return e.open.set(!1)}),G_(20,`Apply filters`),Lf(),Ga(21,`scsc-button`,14),lc(`click`,function(){return e.reset()}),G_(22,`Reset`),Lf()()()),r&2&&(Jb(4),nD(e.summary()),Jb(),iD(`open`,e.open),Jb(4),i_(e.caseTypes),Jb(4),i_(e.departments),Jb(3),Pv(`checked`,e.mineOnly()))},dependencies:[sn,jo,vr,Vn,On],encapsulation:2})};var x=class d{fb=g(Wue);open=q(!1);contact=q({name:`Daniel Reyes, Esq.`,email:`dreyes@reyeslaw.example`,phone:`(408) 555-0142`});form=this.fb.nonNullable.group({name:[``,Fs.required],email:[``,[Fs.required,Fs.email]],phone:[``]});summary=ut(()=>{let s=this.contact();return[{term:`Counsel for plaintiff`,value:s.name},{term:`Email`,value:s.email},{term:`Phone`,value:s.phone||`—`}]});edit(){this.form.reset(this.contact()),this.open.set(!0)}invalid(s){let r=this.form.controls[s];return r.invalid&&(r.dirty||r.touched)}errorFor(s){return this.invalid(s)?this.form.controls[s].hasError(`email`)?`Enter a valid email address.`:`This field is required.`:``}save(){this.form.markAllAsTouched(),!this.form.invalid&&(this.contact.set(this.form.getRawValue()),this.open.set(!1))}static ɵfac=function(r){return new(r||d)};static ɵcmp=Af({type:d,selectors:[[`app-drawer-form-demo`]],decls:18,vars:7,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[3,`items`],[`variant`,`secondary`,`outline`,``,3,`click`],[`title`,`Edit contact for service`,3,`openChange`,`open`],[`novalidate`,``,1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Name`,`for`,`drawer-form-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`drawer-form-name`,`formControlName`,`name`,`autocomplete`,`name`,`scscAutofocus`,``,3,`invalid`],[`label`,`Email`,`for`,`drawer-form-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`drawer-form-email`,`type`,`email`,`formControlName`,`email`,`autocomplete`,`email`,3,`invalid`],[`label`,`Phone`,`for`,`drawer-form-phone`,`hint`,`Optional`],[`scsc-input`,``,`id`,`drawer-form-phone`,`type`,`tel`,`formControlName`,`phone`,`autocomplete`,`tel`],[1,`flex`,`gap-2`,`border-t`,`border-base-300`,`pt-4`],[`variant`,`primary`,`nativeType`,`submit`],[`variant`,`ghost`,3,`click`]],template:function(r,e){r&1&&(Ga(0,`div`,0),uc(1,`scsc-description-list`,1),Ga(2,`div`)(3,`scsc-button`,2),lc(`click`,function(){return e.edit()}),G_(4,`Edit contact`),Lf()()(),Ga(5,`scsc-drawer`,3),sD(`openChange`,function(n){return Y_(e.open,n)||(e.open=n),n}),Ga(6,`form`,4),lc(`ngSubmit`,function(){return e.save()}),Ga(7,`scsc-form-field`,5)(8,`input`,6),HS(),Lf()(),Ga(9,`scsc-form-field`,7)(10,`input`,8),HS(),Lf()(),Ga(11,`scsc-form-field`,9)(12,`input`,10),HS(),Lf()(),Ga(13,`div`,11)(14,`scsc-button`,12),G_(15,`Save contact`),Lf(),Ga(16,`scsc-button`,13),lc(`click`,function(){return e.open.set(!1)}),G_(17,`Cancel`),Lf()()()()),r&2&&(Jb(),Pv(`items`,e.summary()),Jb(4),iD(`open`,e.open),Jb(),Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.errorFor(`name`)),Jb(),Pv(`invalid`,e.invalid(`name`)),zS(),Jb(),Pv(`error`,e.errorFor(`email`)),Jb(),Pv(`invalid`,e.invalid(`email`)),zS(),Jb(2),zS())},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,XR,sn,NP,vr,Vn,qo],encapsulation:2})};var E=class d{open=q(!1);side=q(`end`);details=[{term:`Case type`,value:`Civil – Unlimited`},{term:`Filed`,value:`Mar 4, 2024`},{term:`Department`,value:`Dept. 5, Hon. R. Okafor`},{term:`Next hearing`,value:`Case Management Conference · Oct 14, 2026 9:00 AM`}];show(s){this.side.set(s),this.open.set(!0)}static ɵfac=function(r){return new(r||d)};static ɵcmp=Af({type:d,selectors:[[`app-drawer-side-demo`]],decls:12,vars:4,consts:[[1,`flex`,`flex-wrap`,`gap-2`],[`variant`,`secondary`,`outline`,``,3,`click`],[`title`,`24CV012345 · Alvarez v. Pacific Transit`,3,`openChange`,`open`,`side`,`size`],[3,`items`],[`slot`,`footer`],[`variant`,`ghost`,3,`click`]],template:function(r,e){r&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.show(`start`)}),G_(2,`Peek from the start`),Lf(),Ga(3,`scsc-button`,1),lc(`click`,function(){return e.show(`end`)}),G_(4,`Peek from the end`),Lf(),Ga(5,`scsc-button`,1),lc(`click`,function(){return e.show(`bottom`)}),G_(6,`Peek from the bottom`),Lf()(),Ga(7,`scsc-drawer`,2),sD(`openChange`,function(n){return Y_(e.open,n)||(e.open=n),n}),uc(8,`scsc-description-list`,3),Ga(9,`div`,4)(10,`scsc-button`,5),lc(`click`,function(){return e.open.set(!1)}),G_(11,`Close`),Lf()()()),r&2&&(Jb(7),iD(`open`,e.open),Pv(`side`,e.side())(`size`,e.side()===`bottom`?`sm`:`md`),Jb(),Pv(`items`,e.details))},dependencies:[sn,NP,vr],encapsulation:2})};var N={"drawer-filters":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscCheckbox, ScscDrawer, ScscFormField, ScscSelect } from '@scscourt/design';

@Component({
  selector: 'app-drawer-filters-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCheckbox, ScscDrawer, ScscFormField, ScscSelect],
  template: \`
    <div class="flex items-center gap-3">
      <scsc-button variant="secondary" outline (click)="open.set(true)"
        >Filter calendar</scsc-button
      >
      <p class="text-sm text-base-content/70">{{ summary() }}</p>
    </div>

    <scsc-drawer [(open)]="open" title="Filter calendar" side="end">
      <div class="flex flex-col gap-4">
        <scsc-form-field label="Case type" for="drawer-case-type">
          <select
            scsc-select
            id="drawer-case-type"
            (change)="caseType.set($any($event.target).value)"
          >
            @for (t of caseTypes; track t) {
              <option [value]="t" [selected]="t === caseType()">{{ t }}</option>
            }
          </select>
        </scsc-form-field>

        <scsc-form-field label="Department" for="drawer-dept">
          <select scsc-select id="drawer-dept" (change)="department.set($any($event.target).value)">
            @for (d of departments; track d) {
              <option [value]="d" [selected]="d === department()">{{ d }}</option>
            }
          </select>
        </scsc-form-field>

        <label class="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            scsc-checkbox
            [checked]="mineOnly()"
            (change)="mineOnly.set($any($event.target).checked)"
          />
          Only hearings assigned to me
        </label>
      </div>

      <!-- The footer stays in view while a long filter list scrolls. -->
      <div slot="footer" class="flex gap-2">
        <scsc-button variant="primary" (click)="open.set(false)">Apply filters</scsc-button>
        <scsc-button variant="ghost" (click)="reset()">Reset</scsc-button>
      </div>
    </scsc-drawer>
  \`,
})
export class DrawerFiltersDemo {
  protected readonly open = signal(false);
  protected readonly caseTypes = ['All case types', 'Civil', 'Family', 'Probate', 'Small claims'];
  protected readonly departments = ['All departments', 'Dept. 1', 'Dept. 5', 'Dept. 12'];

  protected readonly caseType = signal(this.caseTypes[0]);
  protected readonly department = signal(this.departments[0]);
  protected readonly mineOnly = signal(false);

  protected readonly summary = computed(() => {
    const parts = [this.caseType(), this.department()];
    if (this.mineOnly()) parts.push('mine only');
    return parts.join(' \xB7 ');
  });

  protected reset(): void {
    this.caseType.set(this.caseTypes[0]);
    this.department.set(this.departments[0]);
    this.mineOnly.set(false);
  }
}
`,html:`<div class="flex items-center gap-3">
  <scsc-button variant="secondary" outline (click)="open.set(true)"
    >Filter calendar</scsc-button
  >
  <p class="text-sm text-base-content/70">{{ summary() }}</p>
</div>

<scsc-drawer [(open)]="open" title="Filter calendar" side="end">
  <div class="flex flex-col gap-4">
    <scsc-form-field label="Case type" for="drawer-case-type">
      <select
        scsc-select
        id="drawer-case-type"
        (change)="caseType.set($any($event.target).value)"
      >
        @for (t of caseTypes; track t) {
          <option [value]="t" [selected]="t === caseType()">{{ t }}</option>
        }
      </select>
    </scsc-form-field>

    <scsc-form-field label="Department" for="drawer-dept">
      <select scsc-select id="drawer-dept" (change)="department.set($any($event.target).value)">
        @for (d of departments; track d) {
          <option [value]="d" [selected]="d === department()">{{ d }}</option>
        }
      </select>
    </scsc-form-field>

    <label class="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        scsc-checkbox
        [checked]="mineOnly()"
        (change)="mineOnly.set($any($event.target).checked)"
      />
      Only hearings assigned to me
    </label>
  </div>

  <!-- The footer stays in view while a long filter list scrolls. -->
  <div slot="footer" class="flex gap-2">
    <scsc-button variant="primary" (click)="open.set(false)">Apply filters</scsc-button>
    <scsc-button variant="ghost" (click)="reset()">Reset</scsc-button>
  </div>
</scsc-drawer>
`},"drawer-form":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAutofocus,
  ScscButton,
  ScscDescriptionList,
  ScscDrawer,
  ScscFormField,
  ScscInput,
  type ScscDescriptionItem,
} from '@scscourt/design';

interface Contact {
  name: string;
  email: string;
  phone: string;
}

type Field = keyof Contact;

@Component({
  selector: 'app-drawer-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAutofocus,
    ScscButton,
    ScscDescriptionList,
    ScscDrawer,
    ScscFormField,
    ScscInput,
  ],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      <scsc-description-list [items]="summary()" />
      <div>
        <scsc-button variant="secondary" outline (click)="edit()">Edit contact</scsc-button>
      </div>
    </div>

    <scsc-drawer [(open)]="open" title="Edit contact for service">
      <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
        <scsc-form-field label="Name" for="drawer-form-name" required [error]="errorFor('name')">
          <!-- scscAutofocus: the drawer focuses this field each time it opens. -->
          <input
            scsc-input
            id="drawer-form-name"
            formControlName="name"
            autocomplete="name"
            scscAutofocus
            [invalid]="invalid('name')"
          />
        </scsc-form-field>
        <scsc-form-field label="Email" for="drawer-form-email" required [error]="errorFor('email')">
          <input
            scsc-input
            id="drawer-form-email"
            type="email"
            formControlName="email"
            autocomplete="email"
            [invalid]="invalid('email')"
          />
        </scsc-form-field>
        <scsc-form-field label="Phone" for="drawer-form-phone" hint="Optional">
          <input
            scsc-input
            id="drawer-form-phone"
            type="tel"
            formControlName="phone"
            autocomplete="tel"
          />
        </scsc-form-field>

        <div class="flex gap-2 border-t border-base-300 pt-4">
          <scsc-button variant="primary" nativeType="submit">Save contact</scsc-button>
          <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
        </div>
      </form>
    </scsc-drawer>
  \`,
})
export class DrawerFormDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly open = signal(false);
  protected readonly contact = signal<Contact>({
    name: 'Daniel Reyes, Esq.',
    email: 'dreyes@reyeslaw.example',
    phone: '(408) 555-0142',
  });

  /** The form lives in the parent: the drawer unmounts its panel while closed. */
  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
  });

  protected readonly summary = computed<ScscDescriptionItem[]>(() => {
    const c = this.contact();
    return [
      { term: 'Counsel for plaintiff', value: c.name },
      { term: 'Email', value: c.email },
      { term: 'Phone', value: c.phone || '\u2014' },
    ];
  });

  protected edit(): void {
    this.form.reset(this.contact());
    this.open.set(true);
  }

  protected invalid(name: Field): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.dirty || c.touched);
  }

  protected errorFor(name: Field): string {
    if (!this.invalid(name)) return '';
    return this.form.controls[name].hasError('email')
      ? 'Enter a valid email address.'
      : 'This field is required.';
  }

  protected save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.contact.set(this.form.getRawValue());
    this.open.set(false);
  }
}
`,html:`<div class="flex max-w-md flex-col gap-4">
  <scsc-description-list [items]="summary()" />
  <div>
    <scsc-button variant="secondary" outline (click)="edit()">Edit contact</scsc-button>
  </div>
</div>

<scsc-drawer [(open)]="open" title="Edit contact for service">
  <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
    <scsc-form-field label="Name" for="drawer-form-name" required [error]="errorFor('name')">
      <!-- scscAutofocus: the drawer focuses this field each time it opens. -->
      <input
        scsc-input
        id="drawer-form-name"
        formControlName="name"
        autocomplete="name"
        scscAutofocus
        [invalid]="invalid('name')"
      />
    </scsc-form-field>
    <scsc-form-field label="Email" for="drawer-form-email" required [error]="errorFor('email')">
      <input
        scsc-input
        id="drawer-form-email"
        type="email"
        formControlName="email"
        autocomplete="email"
        [invalid]="invalid('email')"
      />
    </scsc-form-field>
    <scsc-form-field label="Phone" for="drawer-form-phone" hint="Optional">
      <input
        scsc-input
        id="drawer-form-phone"
        type="tel"
        formControlName="phone"
        autocomplete="tel"
      />
    </scsc-form-field>

    <div class="flex gap-2 border-t border-base-300 pt-4">
      <scsc-button variant="primary" nativeType="submit">Save contact</scsc-button>
      <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
    </div>
  </form>
</scsc-drawer>
`},"drawer-side":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscDescriptionList, ScscDrawer, type ScscDrawerSide } from '@scscourt/design';

@Component({
  selector: 'app-drawer-side-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDescriptionList, ScscDrawer],
  template: \`
    <div class="flex flex-wrap gap-2">
      <scsc-button variant="secondary" outline (click)="show('start')"
        >Peek from the start</scsc-button
      >
      <scsc-button variant="secondary" outline (click)="show('end')">Peek from the end</scsc-button>
      <scsc-button variant="secondary" outline (click)="show('bottom')"
        >Peek from the bottom</scsc-button
      >
    </div>

    <!-- start and end follow the reading direction (they swap in a right-to-left page) -->
    <scsc-drawer
      [(open)]="open"
      [side]="side()"
      [size]="side() === 'bottom' ? 'sm' : 'md'"
      title="24CV012345 \xB7 Alvarez v. Pacific Transit"
    >
      <scsc-description-list [items]="details" />
      <div slot="footer">
        <scsc-button variant="ghost" (click)="open.set(false)">Close</scsc-button>
      </div>
    </scsc-drawer>
  \`,
})
export class DrawerSideDemo {
  protected readonly open = signal(false);
  protected readonly side = signal<ScscDrawerSide>('end');

  protected readonly details = [
    { term: 'Case type', value: 'Civil \u2013 Unlimited' },
    { term: 'Filed', value: 'Mar 4, 2024' },
    { term: 'Department', value: 'Dept. 5, Hon. R. Okafor' },
    { term: 'Next hearing', value: 'Case Management Conference \xB7 Oct 14, 2026 9:00 AM' },
  ];

  protected show(side: ScscDrawerSide): void {
    this.side.set(side);
    this.open.set(true);
  }
}
`,html:`<div class="flex flex-wrap gap-2">
  <scsc-button variant="secondary" outline (click)="show('start')"
    >Peek from the start</scsc-button
  >
  <scsc-button variant="secondary" outline (click)="show('end')">Peek from the end</scsc-button>
  <scsc-button variant="secondary" outline (click)="show('bottom')"
    >Peek from the bottom</scsc-button
  >
</div>

<!-- start and end follow the reading direction (they swap in a right-to-left page) -->
<scsc-drawer
  [(open)]="open"
  [side]="side()"
  [size]="side() === 'bottom' ? 'sm' : 'md'"
  title="24CV012345 \xB7 Alvarez v. Pacific Transit"
>
  <scsc-description-list [items]="details" />
  <div slot="footer">
    <scsc-button variant="ghost" (click)="open.set(false)">Close</scsc-button>
  </div>
</scsc-drawer>
`}};var be={slug:`drawer`,name:`Drawer`,classes:[`ScscDrawer`],category:`Overlays & Feedback`,whenToUse:[`**Modal vs dialog service vs drawer:** a modal is markup you declare, the dialog service is code that asks, and a drawer is a side task beside the page. See [Choosing an overlay](/docs/patterns/choosing-an-overlay).`,`Secondary tasks that sit beside the page instead of interrupting it: calendar filters, a record peek, a short edit form, mobile navigation.`,"A decision the user must make before continuing belongs in `scsc-modal`; a quick yes/no from code in `ScscDialogService`.",`The panel is unmounted while closed, so keep the form state in the parent (signals) as the demos do — it survives open/close.`,"`side` is `end` (default), `start` or `bottom`, and follows the reading direction; `size` is `sm`, `md` (default), `lg` or `full`. Long detail views should be a page or a `scsc-split-shell` pane.",'Modal by default. `[modal]="false"` leaves the page usable beside the panel (a filter list next to results); use it only when working in both at once is the point.'],demos:[{id:`drawer-filters`,title:`Filters form`,description:"End-side sheet with a small form; `[(open)]` two-way binding, the parent owns the filter state, and `[slot=footer]` keeps Apply / Reset in view.",component:T,source:N[`drawer-filters`]},{id:`drawer-side`,title:`Start, end or bottom`,description:'`side` picks the edge (`start` and `end` swap in a right-to-left page); the same drawer instance is reused, with `size="sm"` for the bottom sheet.',component:E,source:N[`drawer-side`]},{id:`drawer-form`,title:`Edit form, focus and Esc`,description:"A Reactive Form in the panel: the page resets it on open, and `scscAutofocus` marks the field that takes focus each time the drawer opens.",component:x,source:N[`drawer-form`]}],a11y:["The panel is a native `<dialog>` named by its required `title`, which is also its heading (an `<h2>`; set `headingLevel` where another rank fits).","Modal (the default, `showModal()`): opening moves focus into the panel, to the first `scscAutofocus` field or else the Close button, and keeps it there while the page behind is inert. `Esc`, the labelled Close button and a click on the backdrop close it, focus returns to the element that opened it, and `(closed)` reports which one it was.",'Non-modal (`[modal]="false"`, `show()`): focus still moves in and returns on close, but Tab can leave the panel and the page stays usable; `Esc` closes it while focus is inside.',`While the body overflows it becomes a focusable region named by the title, so keyboard users can scroll it; the footer stays in view.`,`Because the sheet unmounts on close, put the trigger button in the page so focus has somewhere to return.`],keyboard:[{keys:`Tab / Shift + Tab`,action:'Focus starts on the first `scscAutofocus` field (the Close button if there is none) and cycles through the panel only while it is modal; the page behind is inert. With `[modal]="false"`, Tab moves on to the page.'},{keys:`Enter / Space`,action:`On the Close button: closes the drawer and returns focus to the element that opened it.`},{keys:`Escape`,action:"Closes the drawer (`open` becomes `false`, `(closed)` emits `esc`) and returns focus to the element that opened it. A popup inside that handles Escape itself stays in charge of it."}],appMustProvide:["A `title` (required): it names the drawer and is its heading.",`A trigger button that stays in the page, so focus has somewhere to return when the drawer closes.`],related:[`modal`,`dialog`,`popover`,`sidebar-nav`,`shells`]};export{be as DRAWER_DOCS};