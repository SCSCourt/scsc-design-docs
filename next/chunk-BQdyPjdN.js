import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Ss as rD,T as Br,Xa as Pv,Y as Fs,Yo as iD,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cs as lc,ds as nD,in as Ta,ks as t_,l as $ue,mn as Uue,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var Y=(a,t)=>t.number;function Z(a,t){if(a&1&&(Ga(0,`li`,12)(1,`span`,13),G_(2),Lf(),Ga(3,`span`,14),G_(4),Lf(),Ga(5,`span`,15),G_(6),Lf()()),a&2){let e=t.$implicit;Jb(2),nD(e.number),Jb(2),nD(e.title),Jb(2),nD(e.type)}}function ee(a,t){if(a&1&&(Ga(0,`p`,10),G_(1),Lf(),Ga(2,`ul`,11),o_(3,Z,7,3,`li`,12,Y),Lf()),a&2){let e=t;Jb(),rD(` `,e.length,` `,e.length===1?`case`:`cases`,` found `),Jb(2),i_(e)}}var E=class a{fb=g(Wue);results=q(null);form=this.fb.nonNullable.group({party:[``,[Fs.required,Fs.minLength(2)]],type:[``],year:[``]});cases=[{number:`26CV001874`,title:`Alvarez v. Pacific Transit Authority`,type:`Civil`,year:`2026`},{number:`25FL004410`,title:`In re Marriage of Alvarez`,type:`Family`,year:`2025`},{number:`24CV012345`,title:`Alvarez v. Bayshore Properties LLC`,type:`Civil`,year:`2024`},{number:`25PR000982`,title:`Estate of Rosa Alvarado`,type:`Probate`,year:`2025`},{number:`26CV002210`,title:`Nguyen v. Okafor`,type:`Civil`,year:`2026`}];partyError(){let t=this.form.controls.party;return t.invalid&&t.touched?t.hasError(`required`)?`Enter a party name to search.`:`Enter at least 2 letters so the search is not too broad.`:``}search(){if(this.form.markAllAsTouched(),this.form.invalid){this.results.set(null);return}let{party:t,type:e,year:s}=this.form.getRawValue(),l=t.trim().toLowerCase();this.results.set(this.cases.filter(c=>c.title.toLowerCase().includes(l)&&(!e||c.type===e)&&(!s||c.year===s)))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-search-input-advanced-demo`]],decls:28,vars:4,consts:[[1,`flex`,`max-w-xs`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Party name`,`hint`,`At least 2 letters of a last name or business name`,`required`,``,3,`error`],[`placeholder`,`Party name, e.g. Alvarez`,3,`valueChange`,`value`],[`label`,`Case type`,`for`,`search-advanced-type`],[`scsc-select`,``,`id`,`search-advanced-type`,`formControlName`,`type`],[`value`,``],[`label`,`Filed`,`for`,`search-advanced-year`],[`scsc-select`,``,`id`,`search-advanced-year`,`formControlName`,`year`],[`variant`,`primary`,`nativeType`,`submit`],[`aria-live`,`polite`,1,`mt-4`,`max-w-xl`],[1,`text-sm`,`text-base-content/70`],[1,`mt-2`,`divide-y`,`divide-base-300`,`text-sm`],[1,`flex`,`gap-4`,`py-2`],[1,`w-28`,`tnum`],[1,`grow`],[1,`text-base-content/70`]],template:function(e,s){if(e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return s.search()}),Ga(1,`scsc-form-field`,1)(2,`scsc-search-input`,2),lc(`valueChange`,function(c){return s.form.controls.party.setValue(c)}),Lf()(),Ga(3,`scsc-form-field`,3)(4,`select`,4),HS(),Ga(5,`option`,5),G_(6,`All case types`),Lf(),Ga(7,`option`),G_(8,`Civil`),Lf(),Ga(9,`option`),G_(10,`Family`),Lf(),Ga(11,`option`),G_(12,`Probate`),Lf()()(),Ga(13,`scsc-form-field`,6)(14,`select`,7),HS(),Ga(15,`option`,5),G_(16,`Any year`),Lf(),Ga(17,`option`),G_(18,`2026`),Lf(),Ga(19,`option`),G_(20,`2025`),Lf(),Ga(21,`option`),G_(22,`2024`),Lf()()(),Ga(23,`div`)(24,`scsc-button`,8),G_(25,`Search cases`),Lf()()(),Ga(26,`div`,9),JT(27,ee,5,2),Lf()),e&2){let l;Pv(`formGroup`,s.form),Jb(),Pv(`error`,s.partyError()),Jb(),Pv(`value`,s.form.controls.party.value),Jb(2),zS(),Jb(10),zS(),Jb(13),t_((l=s.results())?27:-1,l)}},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,Vz,Xz,sn,Vn,Ta,On],encapsulation:2})};var te=(a,t)=>t.number;function ae(a,t){if(a&1&&(Ga(0,`li`,3)(1,`span`,5),G_(2),Lf(),Ga(3,`span`),G_(4),Lf()()),a&2){let e=t.$implicit;Jb(2),nD(e.number),Jb(2),nD(e.title)}}function re(a,t){if(a&1&&(Ga(0,`li`,4),G_(1),Lf()),a&2){let e=y_();Jb(),$f(`No cases match "`,e.query(),`".`)}}var D=class a{query=q(``);cases=[{number:`24CV012345`,title:`Alvarez v. Bayshore Properties LLC`},{number:`24FL003210`,title:`In re Marriage of Nguyen`},{number:`23PR001877`,title:`Estate of Harold Whitfield`},{number:`24CV014102`,title:`Santa Clara Water Dist. v. Okafor`},{number:`24SC000981`,title:`Chen v. Reyes Auto Repair`}];results=ut(()=>{let t=this.query().trim().toLowerCase();return t?this.cases.filter(e=>e.number.toLowerCase().includes(t)||e.title.toLowerCase().includes(t)):this.cases});static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-search-input-filter-demo`]],decls:6,vars:2,consts:[[1,`max-w-md`],[`placeholder`,`Search cases by number or party…`,3,`valueChange`,`value`],[`aria-live`,`polite`,1,`mt-3`,`divide-y`,`divide-base-300`,`text-sm`],[1,`flex`,`gap-4`,`py-2`],[1,`py-2`,`text-base-content/70`],[1,`w-28`,`tnum`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`scsc-search-input`,1),sD(`valueChange`,function(c){return Y_(s.query,c)||(s.query=c),c}),Lf(),Ga(2,`ul`,2),o_(3,ae,5,2,`li`,3,te,!1,re,2,1,`li`,4),Lf()()),e&2&&(Jb(),iD(`value`,s.query),Jb(2),i_(s.results()))},dependencies:[Ta],encapsulation:2})};function ne(a,t){a&1&&uc(0,`scsc-spinner`,3)}function se(a,t){if(a&1&&G_(0),a&2){let e=y_();$f(` Searching the docket for "`,e.submitted(),`"… `)}}function ie(a,t){if(a&1&&G_(0),a&2){let e=y_();$f(` Showing docket entries for "`,e.submitted(),`". `)}}function oe(a,t){a&1&&G_(0,` Type a query and press Enter; Clear or Escape resets the results. `)}var I=class a{query=q(``);submitted=q(``);searching=q(!1);run(t){this.submitted.set(t),this.searching.set(!!t),t&&setTimeout(()=>this.searching.set(!1),800)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-search-input-submit-demo`]],decls:8,vars:3,consts:[[1,`max-w-md`],[`placeholder`,`Search the docket… (press Enter)`,3,`valueChange`,`search`,`value`],[1,`mt-3`,`flex`,`items-center`,`gap-2`,`text-sm`,`text-base-content/70`],[`size`,`sm`,`aria-hidden`,`true`],[`role`,`status`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`scsc-search-input`,1),sD(`valueChange`,function(c){return Y_(s.query,c)||(s.query=c),c}),lc(`search`,function(c){return s.run(c)}),Lf(),Ga(2,`div`,2),JT(3,ne,1,0,`scsc-spinner`,3),Ga(4,`p`,4),JT(5,se,1,1)(6,ie,1,1)(7,oe,1,0),Lf()()()),e&2&&(Jb(),iD(`value`,s.query),Jb(2),t_(s.searching()?3:-1),Jb(2),t_(s.searching()?5:s.submitted()?6:7))},dependencies:[Ta,Br],encapsulation:2})};var A={"search-input-advanced":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscFormField, ScscSearchInput, ScscSelect } from '@scscourt/design';

interface CaseRow {
  number: string;
  title: string;
  type: string;
  year: string;
}

@Component({
  selector: 'app-search-input-advanced-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscSearchInput, ScscSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="search()" class="flex max-w-xs flex-col gap-4">
      <scsc-form-field
        label="Party name"
        hint="At least 2 letters of a last name or business name"
        required
        [error]="partyError()"
      >
        <!-- Not a form control: bind the model to the FormControl by hand. Enter submits the form. -->
        <scsc-search-input
          placeholder="Party name, e.g. Alvarez"
          [value]="form.controls.party.value"
          (valueChange)="form.controls.party.setValue($event)"
        />
      </scsc-form-field>

      <scsc-form-field label="Case type" for="search-advanced-type">
        <select scsc-select id="search-advanced-type" formControlName="type">
          <option value="">All case types</option>
          <option>Civil</option>
          <option>Family</option>
          <option>Probate</option>
        </select>
      </scsc-form-field>
      <scsc-form-field label="Filed" for="search-advanced-year">
        <select scsc-select id="search-advanced-year" formControlName="year">
          <option value="">Any year</option>
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">Search cases</scsc-button>
      </div>
    </form>

    <!-- The live region is always in the DOM, so a new result count is announced. -->
    <div class="mt-4 max-w-xl" aria-live="polite">
      @if (results(); as rows) {
        <p class="text-sm text-base-content/70">
          {{ rows.length }} {{ rows.length === 1 ? 'case' : 'cases' }} found
        </p>
        <ul class="mt-2 divide-y divide-base-300 text-sm">
          @for (c of rows; track c.number) {
            <li class="flex gap-4 py-2">
              <span class="w-28 tnum">{{ c.number }}</span>
              <span class="grow">{{ c.title }}</span>
              <span class="text-base-content/70">{{ c.type }}</span>
            </li>
          }
        </ul>
      }
    </div>
  \`,
})
export class SearchInputAdvancedDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly results = signal<CaseRow[] | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    party: ['', [Validators.required, Validators.minLength(2)]],
    type: [''],
    year: [''],
  });

  private readonly cases: CaseRow[] = [
    {
      number: '26CV001874',
      title: 'Alvarez v. Pacific Transit Authority',
      type: 'Civil',
      year: '2026',
    },
    { number: '25FL004410', title: 'In re Marriage of Alvarez', type: 'Family', year: '2025' },
    {
      number: '24CV012345',
      title: 'Alvarez v. Bayshore Properties LLC',
      type: 'Civil',
      year: '2024',
    },
    { number: '25PR000982', title: 'Estate of Rosa Alvarado', type: 'Probate', year: '2025' },
    { number: '26CV002210', title: 'Nguyen v. Okafor', type: 'Civil', year: '2026' },
  ];

  protected partyError(): string {
    const c = this.form.controls.party;
    if (!(c.invalid && c.touched)) return '';
    return c.hasError('required')
      ? 'Enter a party name to search.'
      : 'Enter at least 2 letters so the search is not too broad.';
  }

  protected search(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.results.set(null);
      return;
    }
    // In an app, send the criteria to your case search API instead.
    const { party, type, year } = this.form.getRawValue();
    const q = party.trim().toLowerCase();
    this.results.set(
      this.cases.filter(
        (c) =>
          c.title.toLowerCase().includes(q) &&
          (!type || c.type === type) &&
          (!year || c.year === year),
      ),
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="search()" class="flex max-w-xs flex-col gap-4">
  <scsc-form-field
    label="Party name"
    hint="At least 2 letters of a last name or business name"
    required
    [error]="partyError()"
  >
    <!-- Not a form control: bind the model to the FormControl by hand. Enter submits the form. -->
    <scsc-search-input
      placeholder="Party name, e.g. Alvarez"
      [value]="form.controls.party.value"
      (valueChange)="form.controls.party.setValue($event)"
    />
  </scsc-form-field>

  <scsc-form-field label="Case type" for="search-advanced-type">
    <select scsc-select id="search-advanced-type" formControlName="type">
      <option value="">All case types</option>
      <option>Civil</option>
      <option>Family</option>
      <option>Probate</option>
    </select>
  </scsc-form-field>
  <scsc-form-field label="Filed" for="search-advanced-year">
    <select scsc-select id="search-advanced-year" formControlName="year">
      <option value="">Any year</option>
      <option>2026</option>
      <option>2025</option>
      <option>2024</option>
    </select>
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">Search cases</scsc-button>
  </div>
</form>

<!-- The live region is always in the DOM, so a new result count is announced. -->
<div class="mt-4 max-w-xl" aria-live="polite">
  @if (results(); as rows) {
    <p class="text-sm text-base-content/70">
      {{ rows.length }} {{ rows.length === 1 ? 'case' : 'cases' }} found
    </p>
    <ul class="mt-2 divide-y divide-base-300 text-sm">
      @for (c of rows; track c.number) {
        <li class="flex gap-4 py-2">
          <span class="w-28 tnum">{{ c.number }}</span>
          <span class="grow">{{ c.title }}</span>
          <span class="text-base-content/70">{{ c.type }}</span>
        </li>
      }
    </ul>
  }
</div>
`},"search-input-filter":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscSearchInput } from '@scscourt/design';

interface CaseRow {
  number: string;
  title: string;
}

@Component({
  selector: 'app-search-input-filter-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSearchInput],
  template: \`
    <div class="max-w-md">
      <scsc-search-input [(value)]="query" placeholder="Search cases by number or party\u2026" />
      <ul class="mt-3 divide-y divide-base-300 text-sm" aria-live="polite">
        @for (c of results(); track c.number) {
          <li class="flex gap-4 py-2">
            <span class="w-28 tnum">{{ c.number }}</span
            ><span>{{ c.title }}</span>
          </li>
        } @empty {
          <li class="py-2 text-base-content/70">No cases match "{{ query() }}".</li>
        }
      </ul>
    </div>
  \`,
})
export class SearchInputFilterDemo {
  protected readonly query = signal('');
  protected readonly cases: CaseRow[] = [
    { number: '24CV012345', title: 'Alvarez v. Bayshore Properties LLC' },
    { number: '24FL003210', title: 'In re Marriage of Nguyen' },
    { number: '23PR001877', title: 'Estate of Harold Whitfield' },
    { number: '24CV014102', title: 'Santa Clara Water Dist. v. Okafor' },
    { number: '24SC000981', title: 'Chen v. Reyes Auto Repair' },
  ];
  protected readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.cases;
    return this.cases.filter(
      (c) => c.number.toLowerCase().includes(q) || c.title.toLowerCase().includes(q),
    );
  });
}
`,html:`<div class="max-w-md">
  <scsc-search-input [(value)]="query" placeholder="Search cases by number or party\u2026" />
  <ul class="mt-3 divide-y divide-base-300 text-sm" aria-live="polite">
    @for (c of results(); track c.number) {
      <li class="flex gap-4 py-2">
        <span class="w-28 tnum">{{ c.number }}</span
        ><span>{{ c.title }}</span>
      </li>
    } @empty {
      <li class="py-2 text-base-content/70">No cases match "{{ query() }}".</li>
    }
  </ul>
</div>
`},"search-input-submit":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscSearchInput, ScscSpinner } from '@scscourt/design';

@Component({
  selector: 'app-search-input-submit-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSearchInput, ScscSpinner],
  template: \`
    <div class="max-w-md">
      <scsc-search-input
        [(value)]="query"
        placeholder="Search the docket\u2026 (press Enter)"
        (search)="run($event)"
      />
      <div class="mt-3 flex items-center gap-2 text-sm text-base-content/70">
        <!-- The status line already says it is searching, so the spinner is hidden from AT. -->
        @if (searching()) {
          <scsc-spinner size="sm" aria-hidden="true" />
        }
        <p role="status">
          @if (searching()) {
            Searching the docket for "{{ submitted() }}"\u2026
          } @else if (submitted()) {
            Showing docket entries for "{{ submitted() }}".
          } @else {
            Type a query and press Enter; Clear or Escape resets the results.
          }
        </p>
      </div>
    </div>
  \`,
})
export class SearchInputSubmitDemo {
  protected readonly query = signal('');
  protected readonly submitted = signal('');
  protected readonly searching = signal(false);

  /** \`search\` fires on Enter with the value, and with '' when cleared (Clear or Escape). */
  protected run(term: string): void {
    this.submitted.set(term);
    this.searching.set(!!term);
    if (term) setTimeout(() => this.searching.set(false), 800);
  }
}
`,html:`<div class="max-w-md">
  <scsc-search-input
    [(value)]="query"
    placeholder="Search the docket\u2026 (press Enter)"
    (search)="run($event)"
  />
  <div class="mt-3 flex items-center gap-2 text-sm text-base-content/70">
    <!-- The status line already says it is searching, so the spinner is hidden from AT. -->
    @if (searching()) {
      <scsc-spinner size="sm" aria-hidden="true" />
    }
    <p role="status">
      @if (searching()) {
        Searching the docket for "{{ submitted() }}"\u2026
      } @else if (submitted()) {
        Showing docket entries for "{{ submitted() }}".
      } @else {
        Type a query and press Enter; Clear or Escape resets the results.
      }
    </p>
  </div>
</div>
`}};var Te={slug:`search-input`,name:`Search Input`,classes:[`ScscSearchInput`],category:`Forms`,whenToUse:["Filtering a list or table that is already on screen: bind `[(value)]` and derive the filtered rows with `computed()`.","Searching a server: handle `(search)`, which fires on Enter and with `''` when the field is cleared (the Clear button or Escape), so you can reset results. `$event` is always the text: the browser's own `search` event stops inside the component.","It is not a `ControlValueAccessor`; it uses a `model()`. When the term is one field of a larger search form, bind `[value]` and `(valueChange)` to a `FormControl` and let the form submit on Enter (third demo).","For the case-number lookup pattern with its own results panel use `scsc-case-search`; for command-style navigation use `scsc-command-palette`."],demos:[{id:`search-input-filter`,title:`Filter as you type`,description:"`[(value)]` two-way binding drives a `computed()` list.",component:D,source:A[`search-input-filter`]},{id:`search-input-submit`,title:`Submit on Enter`,description:"`(search)` triggers the query; clearing (the Clear button or Escape) emits an empty string.",component:I,source:A[`search-input-submit`]},{id:`search-input-advanced`,title:`In an advanced search form`,description:"The term is a `FormControl` with `required` and `minLength(2)`, next to two filters; the results count is announced.",component:E,source:A[`search-input-advanced`]}],a11y:['The input is `type="search"` and takes its accessible name from `placeholder`, so write the placeholder as a label ("Search cases…"), not a hint.',`The clear button is a real button labelled "Clear", and pressing it returns focus to the field. The browser’s own clear icon, which is unlabelled and not keyboard-reachable, is hidden; the search icon is decorative.`,'Announce result changes with `aria-live="polite"` on a results container that is always rendered, as in the first and third demos.',"Inside a `<form>`, Enter both emits `(search)` and submits the form; handle one of them, not both."],keyboard:[{keys:`Tab`,action:`To the field, then to the **Clear** button while there is text.`},{keys:`Enter`,action:"Emits `search` with the current text; inside a `<form>` it also submits the form."},{keys:`Escape`,action:"Empties the field and emits `search` with `''` in every browser; in an empty field it does nothing, so an enclosing dialog can close."},{keys:`Enter / Space (on Clear)`,action:"Empties the field, emits `search` with `''` and returns focus to the field."}],appMustProvide:['A `placeholder` written as a label ("Search cases…"): it is the field’s name.','An announcement of the result count: an always-rendered `aria-live="polite"` container, or `ScscAnnouncer`.'],related:[`input`,`combobox`,`case-search`,`command-palette`]};export{Te as SEARCH_INPUT_DOCS};