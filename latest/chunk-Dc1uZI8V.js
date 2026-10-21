import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Ps as ut,Q as Gue,Ss as rD,X as GF,Xa as Pv,Yo as iD,Zi as za,Zo as i_,_s as o_,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,et as Ha,ks as t_,kt as NE,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var B=class o{copies=q(2);days=q(14);total=ut(()=>`$${(this.copies()*25).toFixed(2)}`);static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-number-input-basic-demo`]],decls:14,vars:10,consts:[[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`items-center`,`gap-4`],[`for`,`nb-copies`,1,`w-40`,`text-sm`,`font-medium`],[`inputId`,`nb-copies`,`name`,`copies`,3,`ngModelChange`,`ngModel`,`min`,`max`],[`for`,`nb-days`,1,`w-40`,`text-sm`,`font-medium`],[`inputId`,`nb-days`,`name`,`days`,3,`ngModelChange`,`ngModel`,`min`,`max`,`stepBy`],[1,`text-sm`,`text-base-content/70`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`label`,2),G_(3,`Certified copies`),Lf(),Ga(4,`scsc-number-input`,3),HS(),sD(`ngModelChange`,function(m){return Y_(r.copies,m)||(r.copies=m),m}),Lf()(),Ga(5,`div`,1)(6,`label`,4),G_(7,`Continuance (days)`),Lf(),Ga(8,`scsc-number-input`,5),HS(),sD(`ngModelChange`,function(m){return Y_(r.days,m)||(r.days=m),m}),Lf()(),Ga(9,`p`,6),G_(10),Ga(11,`strong`),G_(12),Lf(),G_(13),Lf()()),e&2&&(Jb(4),iD(`ngModel`,r.copies),Pv(`min`,1)(`max`,10),zS(),Jb(4),iD(`ngModel`,r.days),Pv(`min`,0)(`max`,90)(`stepBy`,7),zS(),Jb(2),$f(` `,r.copies(),` × $25.00 = `),Jb(2),nD(r.total()),Jb(),$f(`; new hearing in `,r.days(),` days. `))},dependencies:[Gue,Hue,zz,GF],encapsulation:2})};var Q=(o,s)=>s.key;function X(o,s){if(o&1&&(Ga(0,`li`,3)(1,`span`)(2,`span`,9),G_(3),Lf(),Ga(4,`scsc-text`,10),G_(5),Lf()(),Ga(6,`scsc-number-input`,11),HS(),Lf()()),o&2){let e=s.$implicit;Jb(3),nD(e.title),Jb(2),rD(``,e.pages,` pages · filed `,e.filed),Jb(),Pv(`formControlName`,e.key)(`ariaLabel`,`Copies of `+e.title)(`min`,0)(`max`,10),zS()}}function Y(o,s){o&1&&(Ga(0,`p`,4),G_(1,`Order at least one copy.`),Lf())}function Z(o,s){if(o&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),o&2){let e=y_();Jb(),nD(e.ordered())}}function ee(o){return Object.values(o.value).some(e=>e>0)?null:{noCopies:!0}}var T=class o{fb=g(Wue);ordered=q(``);documents=[{key:`judgment`,title:`Judgment after trial`,pages:6,filed:`2 Sep 2026`},{key:`order`,title:`Order on motion to compel`,pages:3,filed:`14 Aug 2026`},{key:`complaint`,title:`Complaint`,pages:18,filed:`8 Jan 2026`}];form=this.fb.nonNullable.group({judgment:1,order:0,complaint:0},{validators:ee});counts=Ha(this.form.valueChanges,{initialValue:this.form.value});fee=ut(()=>{let s=this.counts();return this.documents.reduce((r,f)=>{return r+(s[f.key]??0)*(25+f.pages*.5)},0).toLocaleString(`en-US`,{style:`currency`,currency:`USD`})});showError(){return this.form.hasError(`noCopies`)&&this.form.touched}submit(){this.form.markAllAsTouched(),this.ordered.set(this.form.valid?`Pick up at the Civil Clerk’s Office or pay online; total `+this.fee()+`.`:``)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-number-input-copies-demo`]],decls:17,vars:4,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`mb-2`,`text-sm`,`font-semibold`],[1,`flex`,`flex-col`,`divide-y`,`divide-base-300`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`py-2`],[`role`,`alert`,1,`mt-2`,`text-sm`,`text-error`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[`tnum`,``],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Request received`],[1,`block`],[`size`,`sm`,`tone`,`muted`],[3,`formControlName`,`ariaLabel`,`min`,`max`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),Ga(1,`fieldset`)(2,`legend`,1),G_(3,`Certified copies · 24CV012345`),Lf(),Ga(4,`ul`,2),o_(5,X,7,7,`li`,3,Q),Lf(),JT(7,Y,2,0,`p`,4),Lf(),Ga(8,`div`,5)(9,`scsc-text`,6),G_(10,` Fee: `),Ga(11,`strong`),G_(12),Lf(),G_(13,` ($25.00 certification + $0.50 a page) `),Lf(),Ga(14,`scsc-button`,7),G_(15,`Request copies`),Lf()(),JT(16,Z,2,1,`scsc-alert`,8),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(5),i_(r.documents),Jb(2),t_(r.showError()?7:-1),Jb(5),nD(r.fee()),Jb(4),t_(r.ordered()?16:-1))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,za,sn,GF,NE],encapsulation:2})};function te(o,s){if(o&1&&(Ga(0,`p`,6),G_(1),Lf()),o&2){let e=y_();Jb(),nD(e.error())}}function ne(o,s){if(o&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),o&2){let e=y_();Jb(),nD(e.issued())}}function oe(o){let{jurors:s,alternates:e}=o.value,r=3*(12+e);return s>=r?null:{enoughJurors:{needed:r}}}var F=class o{fb=g(Wue);issued=q(``);form=this.fb.nonNullable.group({jurors:36,alternates:2},{validators:oe});error(){let s=this.form.errors?.enoughJurors;return s&&this.form.touched?`Summon at least `+s.needed+` jurors for 12 seats and the alternates.`:``}submit(){this.form.markAllAsTouched();let{jurors:s,alternates:e}=this.form.getRawValue();this.issued.set(this.form.valid?s+` summonses for Dept. 6, trial of 24CV012345 (`+e+` alternates).`:``)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-number-input-reactive-demo`]],decls:14,vars:8,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`flex`,`items-center`,`gap-4`],[`for`,`nr-jurors`,1,`w-40`,`text-sm`,`font-medium`],[`inputId`,`nr-jurors`,`formControlName`,`jurors`,3,`min`,`max`,`stepBy`],[`for`,`nr-alternates`,1,`w-40`,`text-sm`,`font-medium`],[`inputId`,`nr-alternates`,`formControlName`,`alternates`,3,`min`,`max`],[`role`,`alert`,1,`text-sm`,`text-error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Summons issued`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),Ga(1,`div`,1)(2,`label`,2),G_(3,`Jurors to summon`),Lf(),Ga(4,`scsc-number-input`,3),HS(),Lf()(),Ga(5,`div`,1)(6,`label`,4),G_(7,`Alternates`),Lf(),Ga(8,`scsc-number-input`,5),HS(),Lf()(),JT(9,te,2,1,`p`,6),Ga(10,`div`)(11,`scsc-button`,7),G_(12,`Issue summons`),Lf()(),JT(13,ne,2,1,`scsc-alert`,8),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(4),Pv(`min`,12)(`max`,90)(`stepBy`,6),zS(),Jb(4),Pv(`min`,0)(`max`,6),zS(),Jb(),t_(r.error()?9:-1),Jb(4),t_(r.issued()?13:-1))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,za,sn,GF],encapsulation:2})};var A={"number-input-basic":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscNumberInput } from '@scscourt/design';

@Component({
  selector: 'app-number-input-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscNumberInput],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <label class="w-40 text-sm font-medium" for="nb-copies">Certified copies</label>
        <scsc-number-input
          inputId="nb-copies"
          [(ngModel)]="copies"
          [min]="1"
          [max]="10"
          name="copies"
        />
      </div>
      <div class="flex items-center gap-4">
        <label class="w-40 text-sm font-medium" for="nb-days">Continuance (days)</label>
        <scsc-number-input
          inputId="nb-days"
          [(ngModel)]="days"
          [min]="0"
          [max]="90"
          [stepBy]="7"
          name="days"
        />
      </div>
      <p class="text-sm text-base-content/70">
        {{ copies() }} \xD7 $25.00 = <strong>{{ total() }}</strong
        >; new hearing in {{ days() }} days.
      </p>
    </div>
  \`,
})
export class NumberInputBasicDemo {
  protected readonly copies = signal(2);
  protected readonly days = signal(14);
  protected readonly total = computed(() => \`$\${(this.copies() * 25).toFixed(2)}\`);
}
`,html:`<div class="flex flex-col gap-4">
  <div class="flex items-center gap-4">
    <label class="w-40 text-sm font-medium" for="nb-copies">Certified copies</label>
    <scsc-number-input
      inputId="nb-copies"
      [(ngModel)]="copies"
      [min]="1"
      [max]="10"
      name="copies"
    />
  </div>
  <div class="flex items-center gap-4">
    <label class="w-40 text-sm font-medium" for="nb-days">Continuance (days)</label>
    <scsc-number-input
      inputId="nb-days"
      [(ngModel)]="days"
      [min]="0"
      [max]="90"
      [stepBy]="7"
      name="days"
    />
  </div>
  <p class="text-sm text-base-content/70">
    {{ copies() }} \xD7 $25.00 = <strong>{{ total() }}</strong
    >; new hearing in {{ days() }} days.
  </p>
</div>
`},"number-input-copies":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
} from '@angular/forms';
import { ScscAlert, ScscButton, ScscNumberInput, ScscText } from '@scscourt/design';

/** At least one copy of at least one document. */
function atLeastOneCopy(group: AbstractControl): ValidationErrors | null {
  const counts = Object.values(group.value as Record<string, number>);
  return counts.some((n) => n > 0) ? null : { noCopies: true };
}

@Component({
  selector: 'app-number-input-copies-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscNumberInput, ScscText],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-lg flex-col gap-4">
      <fieldset>
        <legend class="mb-2 text-sm font-semibold">Certified copies \xB7 24CV012345</legend>
        <ul class="flex flex-col divide-y divide-base-300">
          @for (d of documents; track d.key) {
            <li class="flex items-center justify-between gap-4 py-2">
              <span>
                <span class="block">{{ d.title }}</span>
                <scsc-text size="sm" tone="muted"
                  >{{ d.pages }} pages \xB7 filed {{ d.filed }}</scsc-text
                >
              </span>
              <scsc-number-input
                [formControlName]="d.key"
                [ariaLabel]="'Copies of ' + d.title"
                [min]="0"
                [max]="10"
              />
            </li>
          }
        </ul>
        @if (showError()) {
          <p class="mt-2 text-sm text-error" role="alert">Order at least one copy.</p>
        }
      </fieldset>

      <!-- The fee is derived from the form value, so it updates as the steppers move. -->
      <div class="flex flex-wrap items-center justify-between gap-3">
        <scsc-text tnum>
          Fee: <strong>{{ fee() }}</strong> ($25.00 certification + $0.50 a page)
        </scsc-text>
        <scsc-button variant="primary" nativeType="submit">Request copies</scsc-button>
      </div>

      @if (ordered()) {
        <scsc-alert status="success" title="Request received">{{ ordered() }}</scsc-alert>
      }
    </form>
  \`,
})
export class NumberInputCopiesDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly ordered = signal('');

  protected readonly documents = [
    { key: 'judgment', title: 'Judgment after trial', pages: 6, filed: '2 Sep 2026' },
    { key: 'order', title: 'Order on motion to compel', pages: 3, filed: '14 Aug 2026' },
    { key: 'complaint', title: 'Complaint', pages: 18, filed: '8 Jan 2026' },
  ] as const;

  protected readonly form = this.fb.nonNullable.group(
    { judgment: 1, order: 0, complaint: 0 },
    { validators: atLeastOneCopy },
  );

  private readonly counts = toSignal(this.form.valueChanges, { initialValue: this.form.value });
  protected readonly fee = computed(() => {
    const counts = this.counts();
    const total = this.documents.reduce((sum, d) => {
      const n = counts[d.key] ?? 0;
      return sum + n * (25 + d.pages * 0.5);
    }, 0);
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  });

  protected showError(): boolean {
    return this.form.hasError('noCopies') && this.form.touched;
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.ordered.set(
      this.form.valid
        ? 'Pick up at the Civil Clerk\u2019s Office or pay online; total ' + this.fee() + '.'
        : '',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-lg flex-col gap-4">
  <fieldset>
    <legend class="mb-2 text-sm font-semibold">Certified copies \xB7 24CV012345</legend>
    <ul class="flex flex-col divide-y divide-base-300">
      @for (d of documents; track d.key) {
        <li class="flex items-center justify-between gap-4 py-2">
          <span>
            <span class="block">{{ d.title }}</span>
            <scsc-text size="sm" tone="muted"
              >{{ d.pages }} pages \xB7 filed {{ d.filed }}</scsc-text
            >
          </span>
          <scsc-number-input
            [formControlName]="d.key"
            [ariaLabel]="'Copies of ' + d.title"
            [min]="0"
            [max]="10"
          />
        </li>
      }
    </ul>
    @if (showError()) {
      <p class="mt-2 text-sm text-error" role="alert">Order at least one copy.</p>
    }
  </fieldset>

  <!-- The fee is derived from the form value, so it updates as the steppers move. -->
  <div class="flex flex-wrap items-center justify-between gap-3">
    <scsc-text tnum>
      Fee: <strong>{{ fee() }}</strong> ($25.00 certification + $0.50 a page)
    </scsc-text>
    <scsc-button variant="primary" nativeType="submit">Request copies</scsc-button>
  </div>

  @if (ordered()) {
    <scsc-alert status="success" title="Request received">{{ ordered() }}</scsc-alert>
  }
</form>
`},"number-input-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
} from '@angular/forms';
import { ScscAlert, ScscButton, ScscNumberInput } from '@scscourt/design';

/** Court policy: summon at least three prospective jurors for every seat to be filled. */
function enoughJurors(group: AbstractControl): ValidationErrors | null {
  const { jurors, alternates } = group.value as { jurors: number; alternates: number };
  const needed = 3 * (12 + alternates);
  return jurors >= needed ? null : { enoughJurors: { needed } };
}

@Component({
  selector: 'app-number-input-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscNumberInput],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <div class="flex items-center gap-4">
        <label class="w-40 text-sm font-medium" for="nr-jurors">Jurors to summon</label>
        <scsc-number-input
          inputId="nr-jurors"
          formControlName="jurors"
          [min]="12"
          [max]="90"
          [stepBy]="6"
        />
      </div>
      <div class="flex items-center gap-4">
        <label class="w-40 text-sm font-medium" for="nr-alternates">Alternates</label>
        <scsc-number-input
          inputId="nr-alternates"
          formControlName="alternates"
          [min]="0"
          [max]="6"
        />
      </div>
      <!-- min/max are clamped by the control; rules across fields need a group validator. -->
      @if (error()) {
        <p class="text-sm text-error" role="alert">{{ error() }}</p>
      }
      <div>
        <scsc-button variant="primary" nativeType="submit">Issue summons</scsc-button>
      </div>
      @if (issued()) {
        <scsc-alert status="success" title="Summons issued">{{ issued() }}</scsc-alert>
      }
    </form>
  \`,
})
export class NumberInputReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly issued = signal('');

  protected readonly form = this.fb.nonNullable.group(
    { jurors: 36, alternates: 2 },
    { validators: enoughJurors },
  );

  protected error(): string {
    const e = this.form.errors?.['enoughJurors'] as { needed: number } | undefined;
    return e && this.form.touched
      ? 'Summon at least ' + e.needed + ' jurors for 12 seats and the alternates.'
      : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const { jurors, alternates } = this.form.getRawValue();
    this.issued.set(
      this.form.valid
        ? jurors + ' summonses for Dept. 6, trial of 24CV012345 (' + alternates + ' alternates).'
        : '',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <div class="flex items-center gap-4">
    <label class="w-40 text-sm font-medium" for="nr-jurors">Jurors to summon</label>
    <scsc-number-input
      inputId="nr-jurors"
      formControlName="jurors"
      [min]="12"
      [max]="90"
      [stepBy]="6"
    />
  </div>
  <div class="flex items-center gap-4">
    <label class="w-40 text-sm font-medium" for="nr-alternates">Alternates</label>
    <scsc-number-input
      inputId="nr-alternates"
      formControlName="alternates"
      [min]="0"
      [max]="6"
    />
  </div>
  <!-- min/max are clamped by the control; rules across fields need a group validator. -->
  @if (error()) {
    <p class="text-sm text-error" role="alert">{{ error() }}</p>
  }
  <div>
    <scsc-button variant="primary" nativeType="submit">Issue summons</scsc-button>
  </div>
  @if (issued()) {
    <scsc-alert status="success" title="Summons issued">{{ issued() }}</scsc-alert>
  }
</form>
`}};var je={slug:`number-input`,name:`Number Input`,classes:[`ScscNumberInput`],category:`Forms`,whenToUse:["Small integer quantities that users nudge rather than type: copies, jurors, days, line-item counts. `min`/`max` bound both the buttons and typed values: a typed number outside them is clamped when the field loses focus or on Enter.","It is a `ControlValueAccessor`: use `[(ngModel)]` (with `FormsModule`) for standalone state or `formControlName` inside a `FormGroup`. It has no `[(value)]` model of its own.","Because values are clamped, per-field `min`/`max` validators never fail; the rules worth validating are across fields (a group validator), as in the last two demos.",'For amounts, IDs and anything users type in full, use `<input scsc-input type="number">` (or `scsc-masked-input` for fixed formats) inside `scsc-form-field`.',"Use `stepBy` for natural increments (7 days, 6 jurors)."],demos:[{id:`number-input-basic`,title:`Standalone with ngModel`,description:"`[(ngModel)]` on a signal; `min`, `max` and `stepBy` shape each stepper.",component:B,source:A[`number-input-basic`]},{id:`number-input-reactive`,title:`With Reactive Forms`,description:"`formControlName` in a `FormGroup` with a cross-field rule (three jurors per seat) and its error.",component:F,source:A[`number-input-reactive`]},{id:`number-input-copies`,title:`Copy request`,description:"One stepper per document, a fee `computed()` from the form value, and an at-least-one-copy group validator.",component:T,source:A[`number-input-copies`]}],a11y:['The +/- buttons are labelled "Decrease" and "Increase". **Decrease** is disabled at `min` and **Increase** at `max`, so Tab skips them there; when the button being pressed disables, focus moves to the number field instead of being lost.',`The field is a native number field (a spinbutton): arrow keys step it natively, and PageUp / PageDown and Home / End are added (see the keyboard table).`,"Label the inner number field: give `inputId` the id a `<label for>` or `scsc-form-field [for]` points at, or pass `ariaLabel` when rows repeat (`Copies of Complaint`).","A typed value outside `min`/`max` is not corrected mid-typing: it is clamped when the field loses focus or on Enter, and the field then shows the result. Say the range in nearby text so users are not surprised.",'Put a group-level error in a `role="alert"` paragraph next to the steppers it concerns.'],keyboard:[{keys:`Tab`,action:"Up to three stops: **Decrease**, the number field, then **Increase**; a button disabled at `min` / `max` is skipped, and leaving the field clamps what was typed."},{keys:`ArrowUp / ArrowDown (in the field)`,action:"Steps up / down by `stepBy` (native number-field stepping), within `min` / `max`."},{keys:`PageUp / PageDown (in the field)`,action:"Steps up / down by ten times `stepBy`, within `min` / `max`."},{keys:`Home / End (in the field)`,action:"Sets the value to `min` / `max` when it is set; otherwise moves the caret."},{keys:`Enter (in the field)`,action:"Clamps the typed value to `min` / `max`; inside a `<form>` it also submits the form."},{keys:`Enter / Space (on the buttons)`,action:"**Increase** adds `stepBy` and **Decrease** subtracts it, clamped to `min` / `max`; at the limit the button disables and focus moves to the field."}],appMustProvide:['A label for the inner field: an `inputId` that a `<label for>` or `scsc-form-field [for]` points at, or `ariaLabel` in repeated rows ("Copies of Complaint").',`The allowed range in nearby text, because out-of-range values are clamped when the field loses focus.`],related:[`input`,`form-field`,`masked-input`,`rating`]};export{je as NUMBER_INPUT_DOCS};