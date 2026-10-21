import{Hs as y_,Ka as Ov,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Ps as ut,So as Zv,Un as Za,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,pi as sn,ra as Af,ri as qn,rr as da,sa as C_,ta as $f,va as G_,vn as Vn,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var q=(t,i)=>i.value;function J(t,i){if(t&1&&(Ga(0,`option`,4),G_(1),Lf()),t&2){let e=i.$implicit,a=y_();Pv(`value`,e.value)(`selected`,e.value===a.size()),Jb(),nD(e.label)}}var T=class t{widths=[{value:`100%`,label:`Full width`},{value:`28rem`,label:`Sidebar (28rem)`},{value:`16rem`,label:`Narrow card (16rem)`}];size=q$1(`28rem`);roles=[{id:`plaintiff`,label:`Plaintiff`},{id:`petitioner`,label:`Petitioner`},{id:`attorney`,label:`Attorney of record`},{id:`guardian`,label:`Guardian ad litem`},{id:`interpreter`,label:`Interpreter`},{id:`witness`,label:`Witness`},{id:`minor`,label:`Minor party`},{id:`claimant`,label:`Claimant`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-list-auto-fit-demo`]],decls:15,vars:5,consts:[[`width`,``],[1,`flex`,`flex-col`,`gap-4`],[`label`,`Panel width`,`for`,`tag-list-auto-width`,1,`max-w-xs`],[`scsc-select`,``,`id`,`tag-list-auto-width`,3,`change`],[3,`value`,`selected`],[1,`flex`,`flex-col`,`gap-4`,`rounded-box`,`border`,`border-base-300`,`p-3`],[1,`flex`,`flex-col`,`gap-1`],[1,`text-sm`,`font-semibold`],[`label`,`Party roles`,`overflow`,`auto`,3,`items`],[`label`,`Party roles`,`overflow`,`auto`,3,`items`,`lines`]],template:function(e,a){if(e&1){let f=d_();Ga(0,`div`,1)(1,`scsc-form-field`,2)(2,`select`,3,0),lc(`change`,function(){Eg(f);let G=C_(3);return Ig(a.size.set(G.value))}),o_(4,J,2,3,`option`,4,q),Lf()(),Ga(6,`div`,5)(7,`div`,6)(8,`p`,7),G_(9,`One line`),Lf(),uc(10,`scsc-tag-list`,8),Lf(),Ga(11,`div`,6)(12,`p`,7),G_(13,`Up to two lines`),Lf(),uc(14,`scsc-tag-list`,9),Lf()()()}e&2&&(Jb(4),i_(a.widths),Jb(2),Zv(`max-width`,a.size()),Jb(4),Pv(`items`,a.roles),Jb(4),Pv(`items`,a.roles)(`lines`,2))},dependencies:[Vn,On,qn],encapsulation:2})};var S=class t{assignments=[{id:`d6`,label:`Dept. 6`},{id:`civil`,label:`Civil unlimited`},{id:`cmc`,label:`Case management`},{id:`lm`,label:`Law and motion`},{id:`probate`,label:`Probate backup`},{id:`writs`,label:`Writs and receivers`},{id:`settle`,label:`Settlement conferences`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-list-expand-demo`]],decls:4,vars:2,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-2`,`text-sm`],[1,`font-semibold`],[`label`,`Assignments`,`overflowMode`,`expand`,3,`items`,`maxVisible`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2,`Judge Sandra Liu · assignments`),Lf(),uc(3,`scsc-tag-list`,2),Lf()),e&2&&(Jb(3),Pv(`items`,a.assignments)(`maxVisible`,4))},dependencies:[qn],encapsulation:2})};var C=class t{labels=[{id:`civil`,label:`Civil unlimited`,tone:`primary`},{id:`dept`,label:`Dept. 6`},{id:`interpreter`,label:`Interpreter: Spanish`,tone:`info`,icon:`court.interpreter`},{id:`fee`,label:`Fee waiver granted`,tone:`success`},{id:`srl`,label:`Self-represented`},{id:`ada`,label:`ADA accommodation`,tone:`secondary`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-list-max-visible-demo`]],decls:4,vars:2,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-2`,`text-sm`],[1,`tnum`,`font-semibold`],[`label`,`Case labels`,3,`items`,`maxVisible`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2,`24CV012345 · Alvarez v. Reyes`),Lf(),uc(3,`scsc-tag-list`,2),Lf()),e&2&&(Jb(3),Pv(`items`,a.labels)(`maxVisible`,3))},dependencies:[qn],encapsulation:2})};function H(t,i){t&1&&(Ga(0,`p`,6),G_(1,`No filters: showing every case.`),Lf())}var $=[{id:`type`,label:`Case type: Civil`},{id:`dept`,label:`Dept. 6`},{id:`status`,label:`Status: Open`,tone:`info`},{id:`filed`,label:`Filed in 2026`},{id:`srl`,label:`Self-represented`}];var D=class t{filters=q$1($);count=ut(()=>1284-this.filters().length*211);clear(i){this.filters.update(e=>e.filter(a=>a.id!==i.id))}reset(){this.filters.set($)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-list-removable-demo`]],decls:10,vars:3,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[1,`text-sm`],[1,`tnum`,`font-semibold`],[`variant`,`ghost`,`size`,`sm`,3,`click`],[`label`,`Active filters`,`removable`,``,3,`remove`,`items`],[1,`text-sm`,`text-base-content/70`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`p`,2)(3,`span`,3),G_(4),Lf(),G_(5,` cases match `),Lf(),Ga(6,`scsc-button`,4),lc(`click`,function(){return a.reset()}),G_(7,`Reset filters`),Lf()(),Ga(8,`scsc-tag-list`,5),lc(`remove`,function(I){return a.clear(I)}),Lf(),JT(9,H,2,0,`p`,6),Lf()),e&2&&(Jb(4),nD(a.count()),Jb(4),Pv(`items`,a.filters()),Jb(),t_(a.filters().length?-1:9))},dependencies:[sn,qn],encapsulation:2})};function K(t,i){if(t&1&&uc(0,`scsc-tag-list`,2),t&2){let e=y_().$implicit;Pv(`label`,`Labels for `+e.caseNumber)(`items`,e.labels)(`maxVisible`,2)}}function Q(t,i){if(t&1&&(Ga(0,`span`,3),G_(1),Lf()),t&2){let e=y_().$implicit;Jb(),nD(e.caseNumber)}}function X(t,i){if(t&1&&G_(0),t&2){let e=y_(),a=e.$implicit,f=e.col;$f(` `,a[f.key],` `)}}function Y(t,i){if(t&1&&JT(0,K,1,3,`scsc-tag-list`,2)(1,Q,2,1,`span`,3)(2,X,1,1),t&2){let e=i.col;t_(e.key===`labels`?0:e.key===`caseNumber`?1:2)}}var L=class t{columns=[{key:`caseNumber`,header:`Case number`},{key:`title`,header:`Title`},{key:`labels`,header:`Labels`}];rows=[{caseNumber:`24CV012345`,title:`Alvarez v. Reyes`,labels:[{id:`civil`,label:`Civil`,tone:`primary`},{id:`interp`,label:`Interpreter`,tone:`info`},{id:`fee`,label:`Fee waiver`,tone:`success`},{id:`srl`,label:`Self-represented`}]},{caseNumber:`24FL004471`,title:`In re Marriage of Okafor`,labels:[{id:`family`,label:`Family`},{id:`sealed`,label:`Sealed`,tone:`warning`}]},{caseNumber:`24PR000918`,title:`Estate of Whitfield`,labels:[{id:`probate`,label:`Probate`},{id:`bond`,label:`Bond required`,tone:`secondary`},{id:`ada`,label:`ADA accommodation`}]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-list-table-demo`]],decls:2,vars:2,consts:[[`label`,`Cases`,3,`columns`,`rows`],[`scscCell`,``],[`size`,`sm`,`overflowMode`,`expand`,3,`label`,`items`,`maxVisible`],[1,`tnum`,`font-semibold`]],template:function(e,a){e&1&&(Ga(0,`scsc-table`,0),Ov(1,Y,3,1,`ng-template`,1),Lf()),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)},dependencies:[da,Za,qn],encapsulation:2})};var _=class t{flags=[{id:`received`,label:`Received`,icon:`status.pending`},{id:`accepted`,label:`Accepted`,tone:`success`,icon:`status.success`},{id:`deficient`,label:`Deficiency notice`,tone:`warning`,icon:`status.warning`},{id:`rejected`,label:`Rejected`,tone:`error`,icon:`status.error`},{id:`hearing`,label:`Hearing set`,tone:`info`,icon:`court.hearing`},{id:`ex-parte`,label:`Ex parte`,tone:`primary`},{id:`priority`,label:`Priority`,tone:`secondary`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-list-tones-demo`]],decls:3,vars:2,consts:[[1,`flex`,`flex-col`,`gap-4`],[`label`,`Filing flags`,3,`items`],[`label`,`Filing flags, small`,`size`,`sm`,3,`items`]],template:function(e,a){e&1&&(Ga(0,`div`,0),uc(1,`scsc-tag-list`,1)(2,`scsc-tag-list`,2),Lf()),e&2&&(Jb(),Pv(`items`,a.flags),Jb(),Pv(`items`,a.flags))},dependencies:[qn],encapsulation:2})};var p={"tag-list-auto-fit":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscFormField, ScscSelect, ScscTagItem, ScscTagList } from '@scscourt/design';

@Component({
  selector: 'app-tag-list-auto-fit-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSelect, ScscTagList],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-form-field class="max-w-xs" label="Panel width" for="tag-list-auto-width">
        <select #width scsc-select id="tag-list-auto-width" (change)="size.set(width.value)">
          @for (w of widths; track w.value) {
            <option [value]="w.value" [selected]="w.value === size()">{{ w.label }}</option>
          }
        </select>
      </scsc-form-field>

      <div
        class="flex flex-col gap-4 rounded-box border border-base-300 p-3"
        [style.max-width]="size()"
      >
        <div class="flex flex-col gap-1">
          <p class="text-sm font-semibold">One line</p>
          <scsc-tag-list label="Party roles" [items]="roles" overflow="auto" />
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-sm font-semibold">Up to two lines</p>
          <scsc-tag-list label="Party roles" [items]="roles" overflow="auto" [lines]="2" />
        </div>
      </div>
    </div>
  \`,
})
export class TagListAutoFitDemo {
  protected readonly widths = [
    { value: '100%', label: 'Full width' },
    { value: '28rem', label: 'Sidebar (28rem)' },
    { value: '16rem', label: 'Narrow card (16rem)' },
  ];
  protected readonly size = signal('28rem');
  protected readonly roles: ScscTagItem[] = [
    { id: 'plaintiff', label: 'Plaintiff' },
    { id: 'petitioner', label: 'Petitioner' },
    { id: 'attorney', label: 'Attorney of record' },
    { id: 'guardian', label: 'Guardian ad litem' },
    { id: 'interpreter', label: 'Interpreter' },
    { id: 'witness', label: 'Witness' },
    { id: 'minor', label: 'Minor party' },
    { id: 'claimant', label: 'Claimant' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-form-field class="max-w-xs" label="Panel width" for="tag-list-auto-width">
    <select #width scsc-select id="tag-list-auto-width" (change)="size.set(width.value)">
      @for (w of widths; track w.value) {
        <option [value]="w.value" [selected]="w.value === size()">{{ w.label }}</option>
      }
    </select>
  </scsc-form-field>

  <div
    class="flex flex-col gap-4 rounded-box border border-base-300 p-3"
    [style.max-width]="size()"
  >
    <div class="flex flex-col gap-1">
      <p class="text-sm font-semibold">One line</p>
      <scsc-tag-list label="Party roles" [items]="roles" overflow="auto" />
    </div>
    <div class="flex flex-col gap-1">
      <p class="text-sm font-semibold">Up to two lines</p>
      <scsc-tag-list label="Party roles" [items]="roles" overflow="auto" [lines]="2" />
    </div>
  </div>
</div>
`},"tag-list-expand":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTagItem, ScscTagList } from '@scscourt/design';

@Component({
  selector: 'app-tag-list-expand-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTagList],
  template: \`
    <div class="flex max-w-md flex-col gap-2 text-sm">
      <p class="font-semibold">Judge Sandra Liu \xB7 assignments</p>
      <scsc-tag-list
        label="Assignments"
        [items]="assignments"
        [maxVisible]="4"
        overflowMode="expand"
      />
    </div>
  \`,
})
export class TagListExpandDemo {
  protected readonly assignments: ScscTagItem[] = [
    { id: 'd6', label: 'Dept. 6' },
    { id: 'civil', label: 'Civil unlimited' },
    { id: 'cmc', label: 'Case management' },
    { id: 'lm', label: 'Law and motion' },
    { id: 'probate', label: 'Probate backup' },
    { id: 'writs', label: 'Writs and receivers' },
    { id: 'settle', label: 'Settlement conferences' },
  ];
}
`,html:`<div class="flex max-w-md flex-col gap-2 text-sm">
  <p class="font-semibold">Judge Sandra Liu \xB7 assignments</p>
  <scsc-tag-list
    label="Assignments"
    [items]="assignments"
    [maxVisible]="4"
    overflowMode="expand"
  />
</div>
`},"tag-list-max-visible":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTagItem, ScscTagList } from '@scscourt/design';

@Component({
  selector: 'app-tag-list-max-visible-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTagList],
  template: \`
    <div class="flex max-w-xl flex-col gap-2 text-sm">
      <p class="tnum font-semibold">24CV012345 \xB7 Alvarez v. Reyes</p>
      <scsc-tag-list label="Case labels" [items]="labels" [maxVisible]="3" />
    </div>
  \`,
})
export class TagListMaxVisibleDemo {
  protected readonly labels: ScscTagItem[] = [
    { id: 'civil', label: 'Civil unlimited', tone: 'primary' },
    { id: 'dept', label: 'Dept. 6' },
    { id: 'interpreter', label: 'Interpreter: Spanish', tone: 'info', icon: 'court.interpreter' },
    { id: 'fee', label: 'Fee waiver granted', tone: 'success' },
    { id: 'srl', label: 'Self-represented' },
    { id: 'ada', label: 'ADA accommodation', tone: 'secondary' },
  ];
}
`,html:`<div class="flex max-w-xl flex-col gap-2 text-sm">
  <p class="tnum font-semibold">24CV012345 \xB7 Alvarez v. Reyes</p>
  <scsc-tag-list label="Case labels" [items]="labels" [maxVisible]="3" />
</div>
`},"tag-list-removable":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscTagItem, ScscTagList } from '@scscourt/design';

const DEFAULT_FILTERS: ScscTagItem[] = [
  { id: 'type', label: 'Case type: Civil' },
  { id: 'dept', label: 'Dept. 6' },
  { id: 'status', label: 'Status: Open', tone: 'info' },
  { id: 'filed', label: 'Filed in 2026' },
  { id: 'srl', label: 'Self-represented' },
];

@Component({
  selector: 'app-tag-list-removable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscTagList],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <p class="text-sm">
          <span class="tnum font-semibold">{{ count() }}</span> cases match
        </p>
        <scsc-button variant="ghost" size="sm" (click)="reset()">Reset filters</scsc-button>
      </div>
      <scsc-tag-list
        label="Active filters"
        [items]="filters()"
        removable
        (remove)="clear($event)"
      />
      @if (!filters().length) {
        <p class="text-sm text-base-content/70">No filters: showing every case.</p>
      }
    </div>
  \`,
})
export class TagListRemovableDemo {
  protected readonly filters = signal<ScscTagItem[]>(DEFAULT_FILTERS);
  protected readonly count = computed(() => 1284 - this.filters().length * 211);

  // The list moves focus to the next filter and announces "\u2026 removed"; the page owns the data.
  protected clear(filter: ScscTagItem): void {
    this.filters.update((list) => list.filter((f) => f.id !== filter.id));
  }

  protected reset(): void {
    this.filters.set(DEFAULT_FILTERS);
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <div class="flex items-center justify-between gap-3">
    <p class="text-sm">
      <span class="tnum font-semibold">{{ count() }}</span> cases match
    </p>
    <scsc-button variant="ghost" size="sm" (click)="reset()">Reset filters</scsc-button>
  </div>
  <scsc-tag-list
    label="Active filters"
    [items]="filters()"
    removable
    (remove)="clear($event)"
  />
  @if (!filters().length) {
    <p class="text-sm text-base-content/70">No filters: showing every case.</p>
  }
</div>
`},"tag-list-table":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCellDef, ScscColumn, ScscTable, ScscTagItem, ScscTagList } from '@scscourt/design';

interface CaseRow {
  caseNumber: string;
  title: string;
  labels: ScscTagItem[];
}

@Component({
  selector: 'app-tag-list-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCellDef, ScscTable, ScscTagList],
  template: \`
    <scsc-table label="Cases" [columns]="columns" [rows]="rows">
      <ng-template scscCell let-row let-col="col">
        @if (col.key === 'labels') {
          <!-- In a scrolling table, expand inline: a popover would be clipped by the scroll box. -->
          <scsc-tag-list
            size="sm"
            [label]="'Labels for ' + row.caseNumber"
            [items]="row.labels"
            [maxVisible]="2"
            overflowMode="expand"
          />
        } @else if (col.key === 'caseNumber') {
          <span class="tnum font-semibold">{{ row.caseNumber }}</span>
        } @else {
          {{ row[col.key] }}
        }
      </ng-template>
    </scsc-table>
  \`,
})
export class TagListTableDemo {
  protected readonly columns: ScscColumn<CaseRow>[] = [
    { key: 'caseNumber', header: 'Case number' },
    { key: 'title', header: 'Title' },
    { key: 'labels', header: 'Labels' },
  ];
  protected readonly rows: CaseRow[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Reyes',
      labels: [
        { id: 'civil', label: 'Civil', tone: 'primary' },
        { id: 'interp', label: 'Interpreter', tone: 'info' },
        { id: 'fee', label: 'Fee waiver', tone: 'success' },
        { id: 'srl', label: 'Self-represented' },
      ],
    },
    {
      caseNumber: '24FL004471',
      title: 'In re Marriage of Okafor',
      labels: [
        { id: 'family', label: 'Family' },
        { id: 'sealed', label: 'Sealed', tone: 'warning' },
      ],
    },
    {
      caseNumber: '24PR000918',
      title: 'Estate of Whitfield',
      labels: [
        { id: 'probate', label: 'Probate' },
        { id: 'bond', label: 'Bond required', tone: 'secondary' },
        { id: 'ada', label: 'ADA accommodation' },
      ],
    },
  ];
}
`,html:`<scsc-table label="Cases" [columns]="columns" [rows]="rows">
  <ng-template scscCell let-row let-col="col">
    @if (col.key === 'labels') {
      <!-- In a scrolling table, expand inline: a popover would be clipped by the scroll box. -->
      <scsc-tag-list
        size="sm"
        [label]="'Labels for ' + row.caseNumber"
        [items]="row.labels"
        [maxVisible]="2"
        overflowMode="expand"
      />
    } @else if (col.key === 'caseNumber') {
      <span class="tnum font-semibold">{{ row.caseNumber }}</span>
    } @else {
      {{ row[col.key] }}
    }
  </ng-template>
</scsc-table>
`},"tag-list-tones":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTagItem, ScscTagList } from '@scscourt/design';

@Component({
  selector: 'app-tag-list-tones-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTagList],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-tag-list label="Filing flags" [items]="flags" />
      <scsc-tag-list label="Filing flags, small" [items]="flags" size="sm" />
    </div>
  \`,
})
export class TagListTonesDemo {
  // The words carry the meaning; the tone and icon only reinforce it.
  protected readonly flags: ScscTagItem[] = [
    { id: 'received', label: 'Received', icon: 'status.pending' },
    { id: 'accepted', label: 'Accepted', tone: 'success', icon: 'status.success' },
    { id: 'deficient', label: 'Deficiency notice', tone: 'warning', icon: 'status.warning' },
    { id: 'rejected', label: 'Rejected', tone: 'error', icon: 'status.error' },
    { id: 'hearing', label: 'Hearing set', tone: 'info', icon: 'court.hearing' },
    { id: 'ex-parte', label: 'Ex parte', tone: 'primary' },
    { id: 'priority', label: 'Priority', tone: 'secondary' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-tag-list label="Filing flags" [items]="flags" />
  <scsc-tag-list label="Filing flags, small" [items]="flags" size="sm" />
</div>
`}};var Re={slug:`tag-list`,name:`Tag List`,classes:[`ScscTagList`],category:`Data Display`,whenToUse:[`A row of tags that must stay compact: case labels, party roles, active filters, tags in a table cell. The rest collapse into a "+N more" button.`,'`maxVisible` for a fixed count; `overflow="auto"` to fit as many as `lines` (1 or 2) allow, re-measured as the container resizes.','`overflowMode="popover"` (default) opens the hidden tags in a disclosure; `expand` shows them inline and the button becomes "Show less". Inside a scrolling container (a table), use `expand`: a popover would be clipped by the scroll box.',"Removable tags emit `(remove)`; update your own list. The list moves focus and announces the removal for you.",'For one removable chip use `scsc-tag`; for entering tags in a form, `scsc-tags-input`. The measuring behind `overflow="auto"` is `createOverflow()`, for your own "+N" rows.'],demos:[{id:`tag-list-max-visible`,title:`Show three, then "+N more"`,description:'`maxVisible` keeps three labels; the button, named "Show 3 more tags", opens the rest in a popover. Escape closes it and returns focus.',component:C,source:p[`tag-list-max-visible`]},{id:`tag-list-auto-fit`,title:`Fit to the container`,description:'`overflow="auto"` measures what fits in one or two `lines`, keeping room for the button. Change the panel width to see it re-fit.',component:T,source:p[`tag-list-auto-fit`]},{id:`tag-list-removable`,title:`Removable filter chips`,description:`Each Remove button is named "Remove {label}". After a removal focus moves to the next chip (or the previous, or the list) and "… removed" is announced.`,component:D,source:p[`tag-list-removable`]},{id:`tag-list-tones`,title:`Tones and icons`,description:'Soft tones, with the gold and amber words in their ink shades. `size="sm"` for dense rows. The label always says what the colour means.',component:_,source:p[`tag-list-tones`]},{id:`tag-list-expand`,title:`Expand inline`,description:'`overflowMode="expand"`: the button reveals every tag in place and becomes "Show less" (`aria-expanded` follows).',component:S,source:p[`tag-list-expand`]},{id:`tag-list-table`,title:`In a table cell`,description:`Small tags, two per cell, expanding inline. Each list is named after its row ("Labels for 24CV012345").`,component:L,source:p[`tag-list-table`]}],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves through tag links, Remove buttons and the "+N more" button, in reading order.`},{keys:`Enter / Space`,action:`On "+N more": opens or closes the hidden tags (or expands them). On a Remove button: removes that tag.`},{keys:`Escape`,action:`Closes the popover and returns focus to "+N more".`}],a11y:['The tags are a `<ul role="list">` named by `label`, so screen readers say what the tags are and how many are shown. Tags hidden for lack of room carry `hidden`: out of the layout and the accessibility tree, never just clipped.',`The "+N more" button is a real button named "Show N more tags" (the visible "+N more" stays in the name, WCAG 2.5.3). The popover is a disclosure: focus stays on the button and Tab moves into the list of hidden tags.`,`Removing a tag never drops focus to the page: it moves to the next tag, else the previous one, else "+N more", else the list (WCAG 2.4.3). The removal is announced politely once the tag has gone (4.1.3).`,`Colour is never the only signal (1.4.1): the label names the status, the tone only reinforces it. Gold and amber words use the theme's ink shades.`],aria:['`role="list"` and `aria-label` on the list.','"+N more": `aria-expanded`, and `aria-controls` pointing at the popover while it is open (or at the list in `expand` mode). Its `aria-label` is dropped once expanded, so "Show less" is read as written.','Remove buttons: `aria-label` from `removeLabel` (default "Remove {label}", localised through `provideScscLabels`). Icons are decorative.'],appMustProvide:['A `label` for each list (per row in a table: "Labels for 24CV012345").',"Remove the tag from `items` in `(remove)`, synchronously, so focus can move to its neighbour.","Unique, stable `id`s: focus after a removal follows them."],related:[`tag`,`badge`,`tags-input`,`popover`,`table`]};export{Re as TAG_LIST_DOCS};