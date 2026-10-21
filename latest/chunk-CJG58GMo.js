import{Ai as vA,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,In as Xz,Ma as JT,Na as Jb,No as cc,Q as Gue,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ks as t_,l as $ue,mn as Uue,nr as dN,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var te=(r,t)=>t.value;function oe(r,t){if(r&1&&(Ga(0,`option`,4),G_(1),Lf()),r&2){let o=t.$implicit;Pv(`value`,o.value),Jb(),nD(o.label)}}function ae(r,t){r&1&&(Ga(0,`scsc-alert`,10),G_(1,` The court's ADA coordinator will contact you before the hearing. `),Lf())}var k=class r{fb=g(Wue);sent=q$1(!1);hearings=[{value:`h1`,label:`14 Oct 2026, 9:00 AM — Motion to compel — Dept. 6`},{value:`h2`,label:`4 Nov 2026, 1:30 PM — Case management — Dept. 6`}];accommodations=[{value:`asl`,label:`Sign language interpreter (ASL)`},{value:`cart`,label:`Real-time captioning (CART)`},{value:`listening`,label:`Assistive listening device`},{value:`wheelchair`,label:`Wheelchair-accessible seating`},{value:`large-print`,label:`Documents in large print`},{value:`breaks`,label:`Extra breaks during the hearing`}];form=this.fb.nonNullable.group({hearing:[``,Fs.required],needs:[[],Fs.required],details:[``]});hearingError(){let t=this.form.controls.hearing;return t.invalid&&t.touched?`Choose the hearing you need help with.`:``}needsError(){let t=this.form.controls.needs;return t.invalid&&t.touched?`Choose at least one accommodation.`:``}submit(){this.form.markAllAsTouched(),this.sent.set(this.form.valid)}static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-multi-select-accommodations-demo`]],decls:15,vars:7,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Hearing`,`for`,`accommodations-hearing`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`accommodations-hearing`,`formControlName`,`hearing`,3,`invalid`],[`value`,``,`disabled`,``],[3,`value`],[`label`,`Accommodations needed`,`hint`,`Choose all that apply`,`required`,``,3,`error`],[`formControlName`,`needs`,`placeholder`,`Choose accommodations…`,3,`options`],[`label`,`Anything else we should know?`,`for`,`accommodations-details`,`hint`,`Optional`],[`scsc-textarea`,``,`id`,`accommodations-details`,`rows`,`3`,`formControlName`,`details`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Request sent`]],template:function(o,e){o&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`select`,2),HS(),Ga(3,`option`,3),G_(4,`Select a hearing…`),Lf(),o_(5,oe,2,2,`option`,4,te),Lf()(),Ga(7,`scsc-form-field`,5)(8,`scsc-multi-select`,6),HS(),Lf()(),Ga(9,`scsc-form-field`,7)(10,`textarea`,8),HS(),Lf()(),Ga(11,`div`)(12,`scsc-button`,9),G_(13,`Send request (MC-410)`),Lf()(),JT(14,ae,2,0,`scsc-alert`,10),Lf()),o&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.hearingError()),Jb(),Pv(`invalid`,!!e.hearingError()),cc(`aria-invalid`,!!e.hearingError()),zS(),Jb(3),i_(e.hearings),Jb(2),Pv(`error`,e.needsError()),Jb(),Pv(`options`,e.accommodations),zS(),Jb(2),zS(),Jb(4),t_(e.sent()?14:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,Vz,Xz,za,sn,Vn,dN,On,vA],encapsulation:2})};var R=class r{options=[{value:`email`,label:`Email`},{value:`sms`,label:`Text message`},{value:`mail`,label:`Postal mail`},{value:`portal`,label:`Portal inbox`}];channels=q$1([`email`]);static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-multi-select-basic-demo`]],decls:4,vars:3,consts:[[1,`max-w-sm`],[`placeholder`,`Notification channels…`,`name`,`channels`,3,`ngModelChange`,`ngModel`,`options`],[1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-multi-select`,1),HS(),sD(`ngModelChange`,function(h){return Y_(e.channels,h)||(e.channels=h),h}),Lf(),Ga(2,`p`,2),G_(3),Lf()()),o&2&&(Jb(),iD(`ngModel`,e.channels),Pv(`options`,e.options),zS(),Jb(2),$f(` `,e.channels().length?e.channels().length+` selected: `+e.channels().join(`, `):`Nothing selected.`,` `))},dependencies:[Gue,Hue,zz,dN],encapsulation:2})};var q=class r{fb=g(Wue);parties=[{value:`p1`,label:`Jane Alvarez (Plaintiff)`},{value:`d1`,label:`Bayshore Properties LLC (Defendant)`},{value:`d2`,label:`Marcus Reed (Defendant)`},{value:`i1`,label:`Pacific Indemnity (Intervenor)`}];form=this.fb.group({parties:[[`p1`],Fs.required]});error(){let t=this.form.controls.parties;return t.invalid&&(t.dirty||t.touched)?`Select at least one party.`:``}submit(){this.form.markAllAsTouched()}static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-multi-select-reactive-demo`]],decls:8,vars:4,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Parties to serve`,`hint`,`Every party must be served`,`required`,``,3,`error`],[`formControlName`,`parties`,`placeholder`,`Choose parties…`,3,`options`],[1,`flex`,`items-center`,`gap-3`],[`variant`,`primary`,`nativeType`,`submit`],[1,`text-sm`,`text-base-content/70`]],template:function(o,e){o&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`scsc-multi-select`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`scsc-button`,4),G_(5,`Generate proof of service`),Lf(),Ga(6,`span`,5),G_(7),Lf()()()),o&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.error()),Jb(),Pv(`options`,e.parties),zS(),Jb(5),$f(``,e.form.value.parties?.length??0,` chosen`))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,sn,Vn,dN],encapsulation:2})};var B=class r{served=q$1([`p1`,`p2`,`p4`,`p6`]);parties=[{value:`p1`,label:`Jane Alvarez`,description:`Plaintiff`},{value:`p2`,label:`Pacific Transit Authority`,description:`Defendant`},{value:`p3`,label:`Marcus Webb`,description:`Defendant`},{value:`p4`,label:`Chen & Morales LLP`,description:`Counsel for plaintiff`},{value:`p5`,label:`Bay Area Insurance Co.`,description:`Intervenor`},{value:`p6`,label:`County Counsel`,description:`Counsel for defendant`},{value:`p7`,label:`Guardian ad litem`,description:`Appointed`,disabled:!0}];static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-multi-select-searchable-demo`]],decls:2,vars:3,consts:[[`label`,`Parties to serve`,`hint`,`Type a name or role`,1,`max-w-md`],[`searchable`,``,`highlightMatches`,``,`placeholder`,`Search parties…`,3,`ngModelChange`,`options`,`ngModel`,`maxVisible`]],template:function(o,e){o&1&&(Ga(0,`scsc-form-field`,0)(1,`scsc-multi-select`,1),HS(),sD(`ngModelChange`,function(h){return Y_(e.served,h)||(e.served=h),h}),Lf()()),o&2&&(Jb(),Pv(`options`,e.parties),iD(`ngModel`,e.served),Pv(`maxVisible`,3),zS())},dependencies:[Gue,Hue,zz,Vn,dN],encapsulation:2})};var v={"multi-select-accommodations":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscFormField,
  ScscMultiSelect,
  ScscSelect,
  ScscTextarea,
  type ScscOption,
} from '@scscourt/design';

@Component({
  selector: 'app-multi-select-accommodations-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFormField,
    ScscMultiSelect,
    ScscSelect,
    ScscTextarea,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Hearing"
        for="accommodations-hearing"
        required
        [error]="hearingError()"
      >
        <select
          scsc-select
          id="accommodations-hearing"
          formControlName="hearing"
          [invalid]="!!hearingError()"
          [attr.aria-invalid]="!!hearingError()"
        >
          <option value="" disabled>Select a hearing\u2026</option>
          @for (h of hearings; track h.value) {
            <option [value]="h.value">{{ h.label }}</option>
          }
        </select>
      </scsc-form-field>

      <scsc-form-field
        label="Accommodations needed"
        hint="Choose all that apply"
        required
        [error]="needsError()"
      >
        <scsc-multi-select
          formControlName="needs"
          [options]="accommodations"
          placeholder="Choose accommodations\u2026"
        />
      </scsc-form-field>

      <scsc-form-field
        label="Anything else we should know?"
        for="accommodations-details"
        hint="Optional"
      >
        <textarea
          scsc-textarea
          id="accommodations-details"
          rows="3"
          formControlName="details"
        ></textarea>
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">Send request (MC-410)</scsc-button>
      </div>

      @if (sent()) {
        <scsc-alert status="success" title="Request sent">
          The court's ADA coordinator will contact you before the hearing.
        </scsc-alert>
      }
    </form>
  \`,
})
export class MultiSelectAccommodationsDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly sent = signal(false);

  protected readonly hearings: ScscOption[] = [
    { value: 'h1', label: '14 Oct 2026, 9:00 AM \u2014 Motion to compel \u2014 Dept. 6' },
    { value: 'h2', label: '4 Nov 2026, 1:30 PM \u2014 Case management \u2014 Dept. 6' },
  ];
  protected readonly accommodations: ScscOption[] = [
    { value: 'asl', label: 'Sign language interpreter (ASL)' },
    { value: 'cart', label: 'Real-time captioning (CART)' },
    { value: 'listening', label: 'Assistive listening device' },
    { value: 'wheelchair', label: 'Wheelchair-accessible seating' },
    { value: 'large-print', label: 'Documents in large print' },
    { value: 'breaks', label: 'Extra breaks during the hearing' },
  ];

  protected readonly form = this.fb.nonNullable.group({
    hearing: ['', Validators.required],
    needs: [[] as string[], Validators.required],
    details: [''],
  });

  protected hearingError(): string {
    const c = this.form.controls.hearing;
    return c.invalid && c.touched ? 'Choose the hearing you need help with.' : '';
  }

  protected needsError(): string {
    const c = this.form.controls.needs;
    return c.invalid && c.touched ? 'Choose at least one accommodation.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.sent.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Hearing"
    for="accommodations-hearing"
    required
    [error]="hearingError()"
  >
    <select
      scsc-select
      id="accommodations-hearing"
      formControlName="hearing"
      [invalid]="!!hearingError()"
      [attr.aria-invalid]="!!hearingError()"
    >
      <option value="" disabled>Select a hearing\u2026</option>
      @for (h of hearings; track h.value) {
        <option [value]="h.value">{{ h.label }}</option>
      }
    </select>
  </scsc-form-field>

  <scsc-form-field
    label="Accommodations needed"
    hint="Choose all that apply"
    required
    [error]="needsError()"
  >
    <scsc-multi-select
      formControlName="needs"
      [options]="accommodations"
      placeholder="Choose accommodations\u2026"
    />
  </scsc-form-field>

  <scsc-form-field
    label="Anything else we should know?"
    for="accommodations-details"
    hint="Optional"
  >
    <textarea
      scsc-textarea
      id="accommodations-details"
      rows="3"
      formControlName="details"
    ></textarea>
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">Send request (MC-410)</scsc-button>
  </div>

  @if (sent()) {
    <scsc-alert status="success" title="Request sent">
      The court's ADA coordinator will contact you before the hearing.
    </scsc-alert>
  }
</form>
`},"multi-select-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscMultiSelect, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-multi-select-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscMultiSelect],
  template: \`
    <div class="max-w-sm">
      <scsc-multi-select
        [(ngModel)]="channels"
        [options]="options"
        placeholder="Notification channels\u2026"
        name="channels"
      />
      <p class="mt-3 text-sm text-base-content/70">
        {{
          channels().length
            ? channels().length + ' selected: ' + channels().join(', ')
            : 'Nothing selected.'
        }}
      </p>
    </div>
  \`,
})
export class MultiSelectBasicDemo {
  protected readonly options: ScscOption[] = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'Text message' },
    { value: 'mail', label: 'Postal mail' },
    { value: 'portal', label: 'Portal inbox' },
  ];
  protected readonly channels = signal<string[]>(['email']);
}
`,html:`<div class="max-w-sm">
  <scsc-multi-select
    [(ngModel)]="channels"
    [options]="options"
    placeholder="Notification channels\u2026"
    name="channels"
  />
  <p class="mt-3 text-sm text-base-content/70">
    {{
      channels().length
        ? channels().length + ' selected: ' + channels().join(', ')
        : 'Nothing selected.'
    }}
  </p>
</div>
`},"multi-select-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField, ScscMultiSelect, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-multi-select-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscMultiSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-sm flex-col gap-4">
      <scsc-form-field
        label="Parties to serve"
        hint="Every party must be served"
        required
        [error]="error()"
      >
        <scsc-multi-select
          formControlName="parties"
          [options]="parties"
          placeholder="Choose parties\u2026"
        />
      </scsc-form-field>
      <div class="flex items-center gap-3">
        <scsc-button variant="primary" nativeType="submit">Generate proof of service</scsc-button>
        <span class="text-sm text-base-content/70"
          >{{ form.value.parties?.length ?? 0 }} chosen</span
        >
      </div>
    </form>
  \`,
})
export class MultiSelectReactiveDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly parties: ScscOption[] = [
    { value: 'p1', label: 'Jane Alvarez (Plaintiff)' },
    { value: 'd1', label: 'Bayshore Properties LLC (Defendant)' },
    { value: 'd2', label: 'Marcus Reed (Defendant)' },
    { value: 'i1', label: 'Pacific Indemnity (Intervenor)' },
  ];

  protected readonly form = this.fb.group({
    parties: [['p1'] as string[], Validators.required],
  });

  protected error(): string {
    const c = this.form.controls.parties;
    return c.invalid && (c.dirty || c.touched) ? 'Select at least one party.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-sm flex-col gap-4">
  <scsc-form-field
    label="Parties to serve"
    hint="Every party must be served"
    required
    [error]="error()"
  >
    <scsc-multi-select
      formControlName="parties"
      [options]="parties"
      placeholder="Choose parties\u2026"
    />
  </scsc-form-field>
  <div class="flex items-center gap-3">
    <scsc-button variant="primary" nativeType="submit">Generate proof of service</scsc-button>
    <span class="text-sm text-base-content/70"
      >{{ form.value.parties?.length ?? 0 }} chosen</span
    >
  </div>
</form>
`},"multi-select-searchable":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField, ScscMultiSelect, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-multi-select-searchable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscMultiSelect],
  template: \`
    <!-- searchable: type to filter; chips collapse to "+N more" after three. -->
    <scsc-form-field class="max-w-md" label="Parties to serve" hint="Type a name or role">
      <scsc-multi-select
        [options]="parties"
        [(ngModel)]="served"
        searchable
        highlightMatches
        [maxVisible]="3"
        placeholder="Search parties\u2026"
      />
    </scsc-form-field>
  \`,
})
export class MultiSelectSearchableDemo {
  protected readonly served = signal<string[]>(['p1', 'p2', 'p4', 'p6']);
  protected readonly parties: ScscOption[] = [
    { value: 'p1', label: 'Jane Alvarez', description: 'Plaintiff' },
    { value: 'p2', label: 'Pacific Transit Authority', description: 'Defendant' },
    { value: 'p3', label: 'Marcus Webb', description: 'Defendant' },
    { value: 'p4', label: 'Chen & Morales LLP', description: 'Counsel for plaintiff' },
    { value: 'p5', label: 'Bay Area Insurance Co.', description: 'Intervenor' },
    { value: 'p6', label: 'County Counsel', description: 'Counsel for defendant' },
    { value: 'p7', label: 'Guardian ad litem', description: 'Appointed', disabled: true },
  ];
}
`,html:`<!-- searchable: type to filter; chips collapse to "+N more" after three. -->
<scsc-form-field class="max-w-md" label="Parties to serve" hint="Type a name or role">
  <scsc-multi-select
    [options]="parties"
    [(ngModel)]="served"
    searchable
    highlightMatches
    [maxVisible]="3"
    placeholder="Search parties\u2026"
  />
</scsc-form-field>
`}};var ke={slug:`multi-select`,name:`Multi-select`,classes:[`ScscMultiSelect`],category:`Forms`,whenToUse:[`Several values from a known list, shown as chips in the field: parties to serve, notification channels, accommodations.`,"It is a `ControlValueAccessor` with a `string[]` value (no `[(value)]` model): `[(ngModel)]` with `FormsModule` standalone, `formControlName` in a `FormGroup`. `Validators.required` fails on an empty array, and the control becomes touched once focus leaves it.","For 2–5 options that fit on screen, a `scsc-checkbox` group is clearer. For free-text values use `scsc-tags-input`.","Options share the `ScscOption` shape with `scsc-combobox` (`description`, `icon` and `disabled` are shown), so one lookup array can feed both.",'For long lists add `searchable`: the field becomes a combobox that filters as you type. Chips render with `scsc-tag-list`; `maxVisible` or `overflow="auto"` collapses the rest into "+N more".'],demos:[{id:`multi-select-basic`,title:`Standalone with ngModel`,description:"`[(ngModel)]` on a `string[]` signal; chips reflect the selection.",component:R,source:v[`multi-select-basic`]},{id:`multi-select-reactive`,title:`With Reactive Forms`,description:"`formControlName` inside `scsc-form-field`; required means at least one.",component:q,source:v[`multi-select-reactive`]},{id:`multi-select-searchable`,title:`Searchable, with +N more`,description:'`searchable` filters the parties as you type; `[maxVisible]="3"` collapses the other chips.',component:B,source:v[`multi-select-searchable`]},{id:`multi-select-accommodations`,title:`Disability accommodation request`,description:`An MC-410-style request: a hearing select, a required multi-select of accommodations and an optional details box.`,component:k,source:v[`multi-select-accommodations`]}],a11y:['The field is a native button with `aria-haspopup="listbox"`, `aria-expanded` and, while open, `aria-controls`. Its name is the field label followed by the chosen labels (or the placeholder), so it always reflects the selection.','The list is a `listbox` with `aria-multiselectable="true"`, named after the field label, with `aria-selected` on every option. It is one Tab stop (roving `tabindex`): opening it moves focus in, and the arrow keys move between options.',`Each chip has a real **Remove** button named after its option ("Remove Email"). After a removal, focus moves to a neighbouring chip’s Remove button, or back to the field button.`,'With `searchable`, the field is an input with `role="combobox"` and `aria-activedescendant` over the same multi-select listbox; Enter toggles the highlighted option and the list stays open. The chips are a list named by `listLabel` ("Selected").',`The list renders in the top layer, so scroll containers and dialogs do not clip it.`,"Inside `scsc-form-field` the label, hint and error are wired to the field button. On its own, its name is the chosen labels or the placeholder, so write the placeholder as a label."],keyboard:[{keys:`Tab / Shift + Tab`,action:`Through each chip’s **Remove** button, then the field button; the open list is one more stop, and Tab out of it closes it.`},{keys:`Enter / Space (on the field button)`,action:`Opens the list with focus on the first option, or closes it.`},{keys:`ArrowDown / ArrowUp (on the field button)`,action:`Opens the list with focus on the first / last option.`},{keys:`ArrowDown / ArrowUp`,action:`Moves focus to the next / previous option, stopping at the ends.`},{keys:`Home / End`,action:`Moves focus to the first / last option.`},{keys:`Space / Enter (on an option)`,action:`Adds or removes the option; the list stays open.`},{keys:`Escape`,action:`Closes the list and returns focus to the field button.`},{keys:`Type, ArrowDown / ArrowUp, Enter (searchable)`,action:`Filters the options, moves the highlight, and toggles the highlighted option (the query clears, the list stays open); Escape closes, then clears the query.`},{keys:`Backspace (searchable, empty field)`,action:`Removes the last chip.`},{keys:`Enter / Space (on Remove)`,action:`Removes that chip; focus moves to a neighbouring chip’s Remove button, or to the field button.`}],appMustProvide:["A label: put it in `scsc-form-field`; the button’s name is that label followed by the chosen options.",'A `listLabel` when "Selected" does not describe the chips.'],related:[`combobox`,`tags-input`,`checkbox`,`select`,`tag-list`]};export{ke as MULTI_SELECT_DOCS};