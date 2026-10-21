import{E as Bue,Gs as zS,Hs as y_,In as Xz,K as Fi,Ka as Ov,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Ss as rD,Un as Za,Xa as Pv,Xt as RP,Zi as za,_i as tN,a as $a,bn as Vz,cs as lc,ds as nD,ks as t_,kt as NE,l as $ue,m as Aa,mn as Uue,ms as nu,oi as que,pi as sn,r as $P,ra as Af,rr as da,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{i as Ot,t as It}from"./chunk-D2cerPAB.js";var v=class a{presets=Ot;form=new Aa({filed:new Fi({start:null,end:null},{nonNullable:!0}),caseType:new Fi(``,{nonNullable:!0})});error=q(``);result=q(``);submit(){let t=this.form.controls.filed;if(t.markAsTouched(),t.invalid){this.error.set(t.hasError(`scscDateRangeSpan`)?`Choose a range of one year or less.`:t.hasError(`scscDateMax`)?`Choose today or an earlier date.`:`Enter a start and an end date.`),this.result.set(``);return}this.error.set(``);let{start:e,end:s}=t.value;this.result.set(`Searching cases filed ${e} to ${s}\u2026`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-case-search-range-demo`]],decls:16,vars:6,consts:[[`aria-label`,`Search by filing date`,1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-5`,3,`ngSubmit`,`formGroup`],[`label`,`Filed between`,`formControlName`,`filed`,`required`,``,`today`,`2026-09-30`,`max`,`2026-09-30`,`hint`,`Up to one year.`,3,`maxSpan`,`presets`,`error`,`invalid`],[`label`,`Case type`,`for`,`range-case-type`,1,`max-w-xs`],[`scsc-select`,``,`id`,`range-case-type`,`formControlName`,`caseType`],[`value`,``],[`value`,`civil`],[`value`,`family`],[`value`,`probate`],[`nativeType`,`submit`,1,`self-start`],[`aria-live`,`polite`,1,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return s.submit()}),Ga(1,`scsc-date-range-picker`,1),HS(),Lf(),Ga(2,`scsc-form-field`,2)(3,`select`,3),HS(),Ga(4,`option`,4),G_(5,`All case types`),Lf(),Ga(6,`option`,5),G_(7,`Civil`),Lf(),Ga(8,`option`,6),G_(9,`Family`),Lf(),Ga(10,`option`,7),G_(11,`Probate`),Lf()()(),Ga(12,`scsc-button`,8),G_(13,`Search`),Lf(),Ga(14,`p`,9),G_(15),Lf()()),e&2&&(Pv(`formGroup`,s.form),Jb(),Pv(`maxSpan`,366)(`presets`,s.presets)(`error`,s.error())(`invalid`,!!s.error()),zS(),Jb(2),zS(),Jb(12),nD(s.result()))},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,WA,Vz,Xz,sn,It,Vn,On],encapsulation:2})};function re(a,t){if(a&1&&(Ga(0,`p`,2),G_(1),Lf()),a&2){let e=t;Jb(),rD(` Search by `,e.mode,`: `,e.caseNumber||e.lastName||e.business||e.dateFrom,` `)}}var D=class a{last=q(null);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-case-search-dark-demo`]],decls:3,vars:1,consts:[[`data-theme`,`scsc-design-dark`,1,`max-w-3xl`,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[3,`search`],[`aria-live`,`polite`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){if(e&1&&(Ga(0,`div`,0)(1,`scsc-case-search`,1),lc(`search`,function(h){return s.last.set(h)}),Lf(),JT(2,re,2,2,`p`,2),Lf()),e&2){let r;Jb(2),t_((r=s.last())?2:-1,r)}},dependencies:[$P],encapsulation:2})};var b={"case-search-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscCaseSearch, ScscCodeBlock, type ScscCaseSearchCriteria } from '@scscourt/design';

@Component({
  selector: 'app-case-search-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCaseSearch, ScscCodeBlock],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <scsc-case-search (search)="runSearch($event)" />
      @if (lastCriteria(); as criteria) {
        <scsc-code-block language="json" [code]="criteria" />
      }
    </div>
  \`,
})
export class CaseSearchBasicDemo {
  /** The last submitted criteria, shown as JSON. An app would pass it to its search API. */
  protected readonly lastCriteria = signal<string | null>(null);

  protected runSearch(criteria: ScscCaseSearchCriteria): void {
    this.lastCriteria.set(JSON.stringify(criteria, null, 2));
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <scsc-case-search (search)="runSearch($event)" />
  @if (lastCriteria(); as criteria) {
    <scsc-code-block language="json" [code]="criteria" />
  }
</div>
`},"case-search-dark":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscCaseSearch, type ScscCaseSearchCriteria } from '@scscourt/design';

@Component({
  selector: 'app-case-search-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCaseSearch],
  template: \`
    <div
      data-theme="scsc-design-dark"
      class="max-w-3xl rounded-box bg-base-200 p-4 text-base-content"
    >
      <scsc-case-search (search)="last.set($event)" />
      @if (last(); as c) {
        <p class="mt-3 text-sm text-base-content/70" aria-live="polite">
          Search by {{ c.mode }}: {{ c.caseNumber || c.lastName || c.business || c.dateFrom }}
        </p>
      }
    </div>
  \`,
})
export class CaseSearchDarkDemo {
  protected readonly last = signal<ScscCaseSearchCriteria | null>(null);
}
`,html:`<div
  data-theme="scsc-design-dark"
  class="max-w-3xl rounded-box bg-base-200 p-4 text-base-content"
>
  <scsc-case-search (search)="last.set($event)" />
  @if (last(); as c) {
    <p class="mt-3 text-sm text-base-content/70" aria-live="polite">
      Search by {{ c.mode }}: {{ c.caseNumber || c.lastName || c.business || c.dateFrom }}
    </p>
  }
</div>
`},"case-search-range":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScscButton, ScscFormField, ScscSelect } from '@scscourt/design';
import {
  SCSC_RANGE_PRESETS,
  ScscDateRangePicker,
  type ScscDateRange,
} from '@scscourt/design/pickers';

@Component({
  selector: 'app-case-search-range-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscDateRangePicker, ScscFormField, ScscSelect],
  template: \`
    <!-- A filing-date search built from the pickers entry: one range picker instead of From/To. -->
    <form
      [formGroup]="form"
      class="flex max-w-2xl flex-col gap-4 rounded-box border border-base-300 bg-base-100 p-5"
      aria-label="Search by filing date"
      (ngSubmit)="submit()"
    >
      <scsc-date-range-picker
        label="Filed between"
        formControlName="filed"
        required
        today="2026-09-30"
        max="2026-09-30"
        [maxSpan]="366"
        [presets]="presets"
        hint="Up to one year."
        [error]="error()"
        [invalid]="!!error()"
      />
      <scsc-form-field label="Case type" for="range-case-type" class="max-w-xs">
        <select scsc-select id="range-case-type" formControlName="caseType">
          <option value="">All case types</option>
          <option value="civil">Civil</option>
          <option value="family">Family</option>
          <option value="probate">Probate</option>
        </select>
      </scsc-form-field>
      <scsc-button nativeType="submit" class="self-start">Search</scsc-button>
      <p class="text-sm text-base-content/70" aria-live="polite">{{ result() }}</p>
    </form>
  \`,
})
export class CaseSearchRangeDemo {
  protected readonly presets = SCSC_RANGE_PRESETS;
  protected readonly form = new FormGroup({
    filed: new FormControl<ScscDateRange>({ start: null, end: null }, { nonNullable: true }),
    caseType: new FormControl('', { nonNullable: true }),
  });
  protected readonly error = signal('');
  protected readonly result = signal('');

  protected submit(): void {
    const c = this.form.controls.filed;
    c.markAsTouched();
    if (c.invalid) {
      this.error.set(
        c.hasError('scscDateRangeSpan')
          ? 'Choose a range of one year or less.'
          : c.hasError('scscDateMax')
            ? 'Choose today or an earlier date.'
            : 'Enter a start and an end date.',
      );
      this.result.set('');
      return;
    }
    this.error.set('');
    const { start, end } = c.value;
    this.result.set(\`Searching cases filed \${start} to \${end}\u2026\`);
  }
}
`,html:`<!-- A filing-date search built from the pickers entry: one range picker instead of From/To. -->
<form
  [formGroup]="form"
  class="flex max-w-2xl flex-col gap-4 rounded-box border border-base-300 bg-base-100 p-5"
  aria-label="Search by filing date"
  (ngSubmit)="submit()"
>
  <scsc-date-range-picker
    label="Filed between"
    formControlName="filed"
    required
    today="2026-09-30"
    max="2026-09-30"
    [maxSpan]="366"
    [presets]="presets"
    hint="Up to one year."
    [error]="error()"
    [invalid]="!!error()"
  />
  <scsc-form-field label="Case type" for="range-case-type" class="max-w-xs">
    <select scsc-select id="range-case-type" formControlName="caseType">
      <option value="">All case types</option>
      <option value="civil">Civil</option>
      <option value="family">Family</option>
      <option value="probate">Probate</option>
    </select>
  </scsc-form-field>
  <scsc-button nativeType="submit" class="self-start">Search</scsc-button>
  <p class="text-sm text-base-content/70" aria-live="polite">{{ result() }}</p>
</form>
`},"case-search-results":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscCaseSearch,
  ScscCellDef,
  ScscColumn,
  ScscEmptyState,
  ScscStatusBadge,
  ScscTable,
  ScscText,
  type ScscCaseSearchCriteria,
  type ScscCaseStatus,
} from '@scscourt/design';

interface CaseRow {
  caseNumber: string;
  title: string;
  type: string;
  filed: string;
  status: ScscCaseStatus;
  parties: string[];
}

@Component({
  selector: 'app-case-search-results-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscCaseSearch,
    ScscCellDef,
    ScscEmptyState,
    ScscStatusBadge,
    ScscTable,
    ScscText,
  ],
  template: \`
    <div class="flex max-w-3xl flex-col gap-4">
      <scsc-case-search (search)="search($event)" />

      @if (results(); as rows) {
        <!-- A status line announces the outcome; the table itself is not a live region. -->
        <scsc-text size="sm" bold role="status">
          {{ rows.length }} {{ rows.length === 1 ? 'case' : 'cases' }} found
        </scsc-text>
        @if (rows.length) {
          <scsc-table [columns]="columns" [rows]="rows" [zebra]="false">
            <ng-template scscCell let-row let-col="col">
              @switch (col.key) {
                @case ('caseNumber') {
                  <a routerLink="." class="link link-primary tnum">{{ row.caseNumber }}</a>
                }
                @case ('status') {
                  <scsc-status-badge [status]="row.status" />
                }
                @default {
                  {{ row[col.key] }}
                }
              }
            </ng-template>
          </scsc-table>
        } @else {
          <scsc-empty-state
            icon="search"
            title="No cases match"
            message="Check the spelling, try fewer words, or search by case number."
          />
        }
      }
    </div>
  \`,
})
export class CaseSearchResultsDemo {
  protected readonly columns: ScscColumn<CaseRow>[] = [
    { key: 'caseNumber', header: 'Case No.', width: '8rem' },
    { key: 'title', header: 'Title' },
    { key: 'filed', header: 'Filed', type: 'number', width: '9rem' },
    { key: 'status', header: 'Status', width: '7rem' },
  ];

  /** Stand-in for the search API; an app sends the criteria to its server. */
  private readonly cases: CaseRow[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Property Mgmt.',
      type: 'civil',
      filed: '2024-03-12',
      status: 'active',
      parties: ['Maria Alvarez', 'Northgate Property Management, Inc.'],
    },
    {
      caseNumber: '24CV013002',
      title: 'Patel v. SVT Logistics',
      type: 'civil',
      filed: '2024-06-02',
      status: 'filed',
      parties: ['Rohan Patel', 'SVT Logistics LLC'],
    },
    {
      caseNumber: '24FL004521',
      title: 'In re Marriage of Chen',
      type: 'family',
      filed: '2024-05-02',
      status: 'pending',
      parties: ['Wei Chen', 'Li Chen'],
    },
    {
      caseNumber: '23PR008812',
      title: 'Estate of Margaret O\u2019Donnell',
      type: 'probate',
      filed: '2023-11-20',
      status: 'continued',
      parties: ['Margaret O\u2019Donnell'],
    },
    {
      caseNumber: '24SC000731',
      title: 'Nguyen v. Bayside Auto',
      type: 'small-claims',
      filed: '2024-07-15',
      status: 'closed',
      parties: ['Thu Nguyen', 'Bayside Auto Repair'],
    },
  ];

  /** null until the first search, so the page does not open with "0 cases found". */
  protected readonly results = signal<CaseRow[] | null>(null);

  protected search(q: ScscCaseSearchCriteria): void {
    this.results.set(this.cases.filter((c) => this.matches(c, q)));
  }

  /** Read the fields of the active mode, plus the optional case type. */
  private matches(c: CaseRow, q: ScscCaseSearchCriteria): boolean {
    if (q.caseType && c.type !== q.caseType) return false;
    const has = (text: string, part = '') => text.toLowerCase().includes(part.trim().toLowerCase());
    switch (q.mode) {
      case 'caseNumber':
        return has(c.caseNumber, q.caseNumber);
      case 'party':
        return c.parties.some((p) => has(p, q.lastName) && has(p, q.firstName));
      case 'business':
        return c.parties.some((p) => has(p, q.business));
      case 'filingDate':
        return (!q.dateFrom || c.filed >= q.dateFrom) && (!q.dateTo || c.filed <= q.dateTo);
    }
  }
}
`,html:`<div class="flex max-w-3xl flex-col gap-4">
  <scsc-case-search (search)="search($event)" />

  @if (results(); as rows) {
    <!-- A status line announces the outcome; the table itself is not a live region. -->
    <scsc-text size="sm" bold role="status">
      {{ rows.length }} {{ rows.length === 1 ? 'case' : 'cases' }} found
    </scsc-text>
    @if (rows.length) {
      <scsc-table [columns]="columns" [rows]="rows" [zebra]="false">
        <ng-template scscCell let-row let-col="col">
          @switch (col.key) {
            @case ('caseNumber') {
              <a routerLink="." class="link link-primary tnum">{{ row.caseNumber }}</a>
            }
            @case ('status') {
              <scsc-status-badge [status]="row.status" />
            }
            @default {
              {{ row[col.key] }}
            }
          }
        </ng-template>
      </scsc-table>
    } @else {
      <scsc-empty-state
        icon="search"
        title="No cases match"
        message="Check the spelling, try fewer words, or search by case number."
      />
    }
  }
</div>
`},"case-search-validate":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAlert, ScscCaseSearch, type ScscCaseSearchCriteria } from '@scscourt/design';

type Outcome = { ok: true; summary: string } | { ok: false; problem: string };

@Component({
  selector: 'app-case-search-validate-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscCaseSearch],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <scsc-case-search (search)="outcome.set(check($event))" />

      @if (outcome(); as o) {
        @if (o.ok) {
          <scsc-alert status="info" title="Searching">{{ o.summary }}</scsc-alert>
        } @else {
          <scsc-alert status="error" title="Check your search">{{ o.problem }}</scsc-alert>
        }
      }
    </div>
  \`,
})
export class CaseSearchValidateDemo {
  protected readonly outcome = signal<Outcome | null>(null);

  /** The component does not validate: check the fields that belong to the active mode. */
  protected check(q: ScscCaseSearchCriteria): Outcome {
    const type = q.caseType ? \`\${q.caseType} cases\` : 'all case types';
    switch (q.mode) {
      case 'caseNumber': {
        const number = (q.caseNumber ?? '').trim().toUpperCase();
        return /^\\d{2}[A-Z]{2}\\d{6}$/.test(number)
          ? { ok: true, summary: \`Case \${number} in \${type}.\` }
          : { ok: false, problem: 'Enter a case number like 24CV012345.' };
      }
      case 'party': {
        const last = (q.lastName ?? '').trim();
        const first = (q.firstName ?? '').trim();
        return last
          ? { ok: true, summary: \`Parties named \u201C\${last}\${first ? ', ' + first : ''}\u201D in \${type}.\` }
          : { ok: false, problem: 'Enter at least a last name.' };
      }
      case 'business': {
        const name = (q.business ?? '').trim();
        return name.length >= 3
          ? { ok: true, summary: \`Businesses matching \u201C\${name}\u201D in \${type}.\` }
          : { ok: false, problem: 'Enter at least three letters of the business name.' };
      }
      case 'filingDate':
        if (!q.dateFrom || !q.dateTo) return { ok: false, problem: 'Choose both dates.' };
        return q.dateFrom <= q.dateTo
          ? { ok: true, summary: \`Filed \${q.dateFrom} to \${q.dateTo} in \${type}.\` }
          : { ok: false, problem: 'The start date must be on or before the end date.' };
    }
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <scsc-case-search (search)="outcome.set(check($event))" />

  @if (outcome(); as o) {
    @if (o.ok) {
      <scsc-alert status="info" title="Searching">{{ o.summary }}</scsc-alert>
    } @else {
      <scsc-alert status="error" title="Check your search">{{ o.problem }}</scsc-alert>
    }
  }
</div>
`}};function ce(a,t){a&1&&uc(0,`scsc-code-block`,2),a&2&&Pv(`code`,t)}var k=class a{lastCriteria=q(null);runSearch(t){this.lastCriteria.set(JSON.stringify(t,null,2))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-case-search-basic-demo`]],decls:3,vars:1,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[3,`search`],[`language`,`json`,3,`code`]],template:function(e,s){if(e&1&&(Ga(0,`div`,0)(1,`scsc-case-search`,1),lc(`search`,function(h){return s.runSearch(h)}),Lf(),JT(2,ce,1,1,`scsc-code-block`,2),Lf()),e&2){let r;Jb(2),t_((r=s.lastCriteria())?2:-1,r)}},dependencies:[$P,RP],encapsulation:2})};function oe(a,t){if(a&1&&(Ga(0,`a`,6),G_(1),Lf()),a&2){let e=y_().$implicit;Jb(),nD(e.caseNumber)}}function ne(a,t){if(a&1&&uc(0,`scsc-status-badge`,7),a&2){let e=y_().$implicit;Pv(`status`,e.status)}}function ie(a,t){if(a&1&&G_(0),a&2){let e=y_(),s=e.$implicit,r=e.col;$f(` `,s[r.key],` `)}}function le(a,t){if(a&1&&JT(0,oe,2,1,`a`,6)(1,ne,1,1,`scsc-status-badge`,7)(2,ie,1,1),a&2){let e,s=t.col;t_((e=s.key)===`caseNumber`?0:e===`status`?1:2)}}function me(a,t){if(a&1&&(Ga(0,`scsc-table`,3),Ov(1,le,3,1,`ng-template`,5),Lf()),a&2){let e=y_(),s=y_();Pv(`columns`,s.columns)(`rows`,e)(`zebra`,!1)}}function de(a,t){a&1&&uc(0,`scsc-empty-state`,4)}function pe(a,t){if(a&1&&(Ga(0,`scsc-text`,2),G_(1),Lf(),JT(2,me,2,3,`scsc-table`,3)(3,de,1,0,`scsc-empty-state`,4)),a&2){let e=t;Jb(),rD(` `,e.length,` `,e.length===1?`case`:`cases`,` found `),Jb(),t_(e.length?2:3)}}var N=class a{columns=[{key:`caseNumber`,header:`Case No.`,width:`8rem`},{key:`title`,header:`Title`},{key:`filed`,header:`Filed`,type:`number`,width:`9rem`},{key:`status`,header:`Status`,width:`7rem`}];cases=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Property Mgmt.`,type:`civil`,filed:`2024-03-12`,status:`active`,parties:[`Maria Alvarez`,`Northgate Property Management, Inc.`]},{caseNumber:`24CV013002`,title:`Patel v. SVT Logistics`,type:`civil`,filed:`2024-06-02`,status:`filed`,parties:[`Rohan Patel`,`SVT Logistics LLC`]},{caseNumber:`24FL004521`,title:`In re Marriage of Chen`,type:`family`,filed:`2024-05-02`,status:`pending`,parties:[`Wei Chen`,`Li Chen`]},{caseNumber:`23PR008812`,title:`Estate of Margaret O’Donnell`,type:`probate`,filed:`2023-11-20`,status:`continued`,parties:[`Margaret O’Donnell`]},{caseNumber:`24SC000731`,title:`Nguyen v. Bayside Auto`,type:`small-claims`,filed:`2024-07-15`,status:`closed`,parties:[`Thu Nguyen`,`Bayside Auto Repair`]}];results=q(null);search(t){this.results.set(this.cases.filter(e=>this.matches(e,t)))}matches(t,e){if(e.caseType&&t.type!==e.caseType)return!1;let s=(r,h=``)=>r.toLowerCase().includes(h.trim().toLowerCase());switch(e.mode){case`caseNumber`:return s(t.caseNumber,e.caseNumber);case`party`:return t.parties.some(r=>s(r,e.lastName)&&s(r,e.firstName));case`business`:return t.parties.some(r=>s(r,e.business));case`filingDate`:return(!e.dateFrom||t.filed>=e.dateFrom)&&(!e.dateTo||t.filed<=e.dateTo)}}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-case-search-results-demo`]],decls:3,vars:1,consts:[[1,`flex`,`max-w-3xl`,`flex-col`,`gap-4`],[3,`search`],[`size`,`sm`,`bold`,``,`role`,`status`],[3,`columns`,`rows`,`zebra`],[`icon`,`search`,`title`,`No cases match`,`message`,`Check the spelling, try fewer words, or search by case number.`],[`scscCell`,``],[`routerLink`,`.`,1,`link`,`link-primary`,`tnum`],[3,`status`]],template:function(e,s){if(e&1&&(Ga(0,`div`,0)(1,`scsc-case-search`,1),lc(`search`,function(h){return s.search(h)}),Lf(),JT(2,pe,4,3),Lf()),e&2){let r;Jb(2),t_((r=s.results())?2:-1,r)}},dependencies:[nu,$P,da,Xa,$a,Za,NE],encapsulation:2})};function ue(a,t){if(a&1&&(Ga(0,`scsc-alert`,2),G_(1),Lf()),a&2){let e=y_();Jb(),nD(e.summary)}}function he(a,t){if(a&1&&(Ga(0,`scsc-alert`,3),G_(1),Lf()),a&2){let e=y_();Jb(),nD(e.problem)}}function fe(a,t){a&1&&JT(0,ue,2,1,`scsc-alert`,2)(1,he,2,1,`scsc-alert`,3),a&2&&t_(t.ok?0:1)}var T=class a{outcome=q(null);check(t){let e=t.caseType?`${t.caseType} cases`:`all case types`;switch(t.mode){case`caseNumber`:{let s=(t.caseNumber??``).trim().toUpperCase();return/^\d{2}[A-Z]{2}\d{6}$/.test(s)?{ok:!0,summary:`Case ${s} in ${e}.`}:{ok:!1,problem:`Enter a case number like 24CV012345.`}}case`party`:{let s=(t.lastName??``).trim(),r=(t.firstName??``).trim();return s?{ok:!0,summary:`Parties named \u201C${s}${r?`, `+r:``}\u201D in ${e}.`}:{ok:!1,problem:`Enter at least a last name.`}}case`business`:{let s=(t.business??``).trim();return s.length>=3?{ok:!0,summary:`Businesses matching \u201C${s}\u201D in ${e}.`}:{ok:!1,problem:`Enter at least three letters of the business name.`}}case`filingDate`:return!t.dateFrom||!t.dateTo?{ok:!1,problem:`Choose both dates.`}:t.dateFrom<=t.dateTo?{ok:!0,summary:`Filed ${t.dateFrom} to ${t.dateTo} in ${e}.`}:{ok:!1,problem:`The start date must be on or before the end date.`}}}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-case-search-validate-demo`]],decls:3,vars:1,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[3,`search`],[`status`,`info`,`title`,`Searching`],[`status`,`error`,`title`,`Check your search`]],template:function(e,s){if(e&1&&(Ga(0,`div`,0)(1,`scsc-case-search`,1),lc(`search`,function(h){return s.outcome.set(s.check(h))}),Lf(),JT(2,fe,2,1),Lf()),e&2){let r;Jb(2),t_((r=s.outcome())?2:-1,r)}},dependencies:[za,$P],encapsulation:2})};var Ye={slug:`case-search`,name:`Case Search`,classes:[`ScscCaseSearch`],category:`Court`,whenToUse:[`The primary lookup on a public portal or clerk tool: search by case number, party name, business name, or filing date range, optionally narrowed by case type.`,"The component owns the form; you own the query. Handle `(search)` with the typed `ScscCaseSearchCriteria` and render results in `scsc-table`.","The `mode` discriminator tells you which fields are meaningful. Switching the search type starts again from empty criteria (case type included), so the object holds only what is on screen; `switch` on `mode` to read it (the demos below do).",'It does not validate or require anything: an empty submit emits `{ mode: "caseNumber" }`. Check the criteria yourself and explain what is missing.',"For a single free-text box (global search) use `scsc-search-input` instead."],demos:[{id:`case-search-basic`,title:`Emit criteria`,description:`Switch tabs, fill a field and submit; the emitted criteria object is shown as JSON.`,component:k,source:b[`case-search-basic`]},{id:`case-search-results`,title:`With results`,description:'Criteria filter a small fixture into `scsc-table`; a `role="status"` line announces the count and `scsc-empty-state` covers no matches. Try "Chen" on the Party Name tab.',component:N,source:b[`case-search-results`]},{id:`case-search-validate`,title:`Check the criteria`,description:"A `switch` on `mode` validates only the active fields and answers with an error or a plain-language summary of the search.",component:T,source:b[`case-search-validate`]},{id:`case-search-range`,title:`Filing date range with validation`,description:"A filing-date search built with `scsc-date-range-picker` (from `@scscourt/design/pickers`): presets, a one-year `maxSpan`, and error text on submit.",component:v,source:b[`case-search-range`]},{id:`case-search-dark`,title:`Dark theme`,description:`The tabbed search in the dark theme; the emitted criteria are shown below.`,component:D,source:b[`case-search-dark`]}],a11y:['The search-type switcher is `scsc-tabs`, so it follows the WAI-ARIA tabs pattern: one Tab stop, arrow keys to change type. The form sits in its `role="tabpanel"`, which is named by the selected type.',"Each field is a labelled `<label>` wrapping its control.",'Changing the search type, also by arrowing through the types, clears the fields and resets **Case type** to "All case types", so what is on screen is what `search` emits.',"Enter submits from any text or date field because the controls sit in a real `<form>`; from the Case type select, Tab to **Search**.",'Announce results: put a `role="status"` count (as the results demo does) or a heading above the results table.'],keyboard:[{keys:`Tab / Shift + Tab`,action:`Onto the selected search type (the four types are one stop), then its fields, **Case type** and **Search**.`},{keys:`ArrowLeft / ArrowRight`,action:`Switches to the previous or next search type, wrapping, and clears the criteria.`},{keys:`Home / End`,action:`Switches to the first (**Case Number**) or last (**Filing Date**) search type.`},{keys:`Enter (in a text or date field)`,action:"Submits the form and emits `search`."},{keys:`Enter / Space (on Search)`,action:"Submits the form and emits `search`."}],appMustProvide:['An announcement of the outcome: a `role="status"` result count, or a heading above the results.'],related:[`search-input`,`case-file`,`tabs`]};export{Ye as CASE_SEARCH_DOCS};