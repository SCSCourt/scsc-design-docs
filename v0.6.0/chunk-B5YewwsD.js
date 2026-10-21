import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Es as sD,Hs as y_,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Ps as ut,Vr as mN,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,ks as t_,ra as Af,ta as $f,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import"./chunk-BgxDSBe6.js";import{r as xn}from"./chunk-BiCqrzLG.js";import{n as o,t as e}from"./chunk-CoJGHy_m.js";var b={"bar-chart-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBarChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-bar-chart-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBarChart],
  template: \`
    <figure class="max-w-sm">
      <figcaption class="mb-2 text-sm font-medium">
        New filings by case type, last 30 days
      </figcaption>
      <scsc-bar-chart [data]="byType" [label]="chartLabel" />
    </figure>
  \`,
})
export class BarChartBasicDemo {
  protected readonly byType: ScscChartDatum[] = [
    { label: 'Civil', value: 120 },
    { label: 'Family', value: 78 },
    { label: 'Probate', value: 41 },
    { label: 'Criminal', value: 56 },
    { label: 'Traffic', value: 92 },
  ];

  /** The name says what and when; the data table and the keyboard read-out give the numbers. */
  protected readonly chartLabel = \`New filings by case type, last 30 days: \${this.byType.map((d) => \`\${d.label} \${d.value}\`).join(', ')}\`;
}
`,html:`<figure class="max-w-sm">
  <figcaption class="mb-2 text-sm font-medium">
    New filings by case type, last 30 days
  </figcaption>
  <scsc-bar-chart [data]="byType" [label]="chartLabel" />
</figure>
`},"bar-chart-card":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCard, ScscEmptyState, ScscFormField, ScscSelect } from '@scscourt/design';
import { ScscBarChart, type ScscChartDatum } from '@scscourt/design/charts';

type Week = 'sep28' | 'oct5' | 'oct12';

@Component({
  selector: 'app-bar-chart-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBarChart, ScscCard, ScscEmptyState, ScscFormField, ScscSelect],
  template: \`
    <scsc-card title="Hearings set by department" class="max-w-md">
      <div class="flex flex-col gap-4">
        <scsc-form-field label="Week" for="bar-card-week">
          <select
            scsc-select
            id="bar-card-week"
            size="sm"
            (change)="week.set($any($event.target).value)"
          >
            <option value="sep28" selected>Sep 28 \u2013 Oct 2, 2026</option>
            <option value="oct5">Oct 5 \u2013 9, 2026</option>
            <option value="oct12">Oct 12 \u2013 16, 2026</option>
          </select>
        </scsc-form-field>

        @if (data().length) {
          <!-- showValues prints each count above its bar; the plot reads them aloud and the data table lists them. -->
          <scsc-bar-chart [data]="data()" [label]="chartLabel()" [height]="160" showValues />
        } @else {
          <scsc-empty-state
            icon="calendar"
            title="No hearings set yet"
            message="Departments publish the calendar for this week by Oct 7."
          />
        }
      </div>
    </scsc-card>
  \`,
})
export class BarChartCardDemo {
  private readonly byWeek: Record<Week, ScscChartDatum[]> = {
    sep28: [
      { label: 'Dept. 3', value: 18 },
      { label: 'Dept. 7', value: 42 },
      { label: 'Dept. 12', value: 27 },
      { label: 'Dept. 21', value: 35 },
      { label: 'Dept. 30', value: 11 },
    ],
    oct5: [
      { label: 'Dept. 3', value: 9 },
      { label: 'Dept. 7', value: 24 },
      { label: 'Dept. 12', value: 16 },
      { label: 'Dept. 21', value: 30 },
      { label: 'Dept. 30', value: 4 },
    ],
    oct12: [],
  };

  protected readonly week = signal<Week>('sep28');
  /** One hue for every bar: the comparison is between departments, not colours. */
  protected readonly data = computed(() =>
    this.byWeek[this.week()].map((d) => ({ ...d, color: 'var(--color-primary)' })),
  );
  protected readonly chartLabel = computed(
    () =>
      \`Hearings set by department: \${this.data()
        .map((d) => \`\${d.label} \${d.value}\`)
        .join(', ')}\`,
  );
}
`,html:`<scsc-card title="Hearings set by department" class="max-w-md">
  <div class="flex flex-col gap-4">
    <scsc-form-field label="Week" for="bar-card-week">
      <select
        scsc-select
        id="bar-card-week"
        size="sm"
        (change)="week.set($any($event.target).value)"
      >
        <option value="sep28" selected>Sep 28 \u2013 Oct 2, 2026</option>
        <option value="oct5">Oct 5 \u2013 9, 2026</option>
        <option value="oct12">Oct 12 \u2013 16, 2026</option>
      </select>
    </scsc-form-field>

    @if (data().length) {
      <!-- showValues prints each count above its bar; the plot reads them aloud and the data table lists them. -->
      <scsc-bar-chart [data]="data()" [label]="chartLabel()" [height]="160" showValues />
    } @else {
      <scsc-empty-state
        icon="calendar"
        title="No hearings set yet"
        message="Departments publish the calendar for this week by Oct 7."
      />
    }
  </div>
</scsc-card>
`},"bar-chart-grouped":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscBarChart, type ScscChartSeries } from '@scscourt/design/charts';

@Component({
  selector: 'app-bar-chart-grouped-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBarChart, ScscCard],
  template: \`
    <scsc-card title="Filings and dispositions by quarter" class="max-w-2xl">
      <!-- series + labels: one value per quarter in each series; axis adds round tick values. -->
      <scsc-bar-chart
        [series]="series"
        [labels]="quarters"
        axis
        label="Civil filings and dispositions by quarter, fiscal year 2026"
        description="Dispositions kept pace with filings in every quarter but Q3."
      />
    </scsc-card>
  \`,
})
export class BarChartGroupedDemo {
  protected readonly quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  protected readonly series: ScscChartSeries[] = [
    { id: 'filed', label: 'Filed', data: [1240, 1315, 1422, 1198] },
    { id: 'disposed', label: 'Disposed', data: [1202, 1330, 1250, 1236] },
  ];
}
`,html:`<scsc-card title="Filings and dispositions by quarter" class="max-w-2xl">
  <!-- series + labels: one value per quarter in each series; axis adds round tick values. -->
  <scsc-bar-chart
    [series]="series"
    [labels]="quarters"
    axis
    label="Civil filings and dispositions by quarter, fiscal year 2026"
    description="Dispositions kept pace with filings in every quarter but Q3."
  />
</scsc-card>
`},"bar-chart-highlight":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscFormField, ScscSelect } from '@scscourt/design';
import { ScscBarChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-bar-chart-highlight-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBarChart, ScscFormField, ScscSelect],
  template: \`
    <div class="flex max-w-sm flex-col gap-4">
      <scsc-form-field label="Department in focus" for="bar-highlight-dept">
        <select scsc-select id="bar-highlight-dept" (change)="focus.set($any($event.target).value)">
          @for (d of pending; track d.label) {
            <option [value]="d.label" [selected]="d.label === focus()">{{ d.label }}</option>
          }
        </select>
      </scsc-form-field>

      <figure>
        <figcaption class="mb-2 text-sm font-medium">Motions pending by department</figcaption>
        <scsc-bar-chart [data]="bars()" [label]="chartLabel()" />
        <p class="mt-2 text-sm text-base-content/70">
          {{ focus() }} (highlighted):
          <span class="tnum font-semibold text-base-content">{{ focusValue() }}</span> pending
        </p>
      </figure>
    </div>
  \`,
})
export class BarChartHighlightDemo {
  protected readonly pending: ScscChartDatum[] = [
    { label: 'Dept. 3', value: 14 },
    { label: 'Dept. 7', value: 31 },
    { label: 'Dept. 12', value: 22 },
    { label: 'Dept. 21', value: 38 },
    { label: 'Dept. 30', value: 9 },
  ];

  protected readonly focus = signal('Dept. 7');

  /** One hue for every bar and the secondary hue for the one in focus. */
  protected readonly bars = computed(() =>
    this.pending.map((d) => ({
      ...d,
      color: d.label === this.focus() ? 'var(--color-secondary)' : 'var(--color-primary)',
    })),
  );

  protected readonly focusValue = computed(
    () => this.pending.find((d) => d.label === this.focus())?.value ?? 0,
  );

  protected readonly chartLabel = computed(
    () =>
      \`Motions pending by department, \${this.focus()} highlighted: \` +
      this.pending.map((d) => \`\${d.label} \${d.value}\`).join(', '),
  );
}
`,html:`<div class="flex max-w-sm flex-col gap-4">
  <scsc-form-field label="Department in focus" for="bar-highlight-dept">
    <select scsc-select id="bar-highlight-dept" (change)="focus.set($any($event.target).value)">
      @for (d of pending; track d.label) {
        <option [value]="d.label" [selected]="d.label === focus()">{{ d.label }}</option>
      }
    </select>
  </scsc-form-field>

  <figure>
    <figcaption class="mb-2 text-sm font-medium">Motions pending by department</figcaption>
    <scsc-bar-chart [data]="bars()" [label]="chartLabel()" />
    <p class="mt-2 text-sm text-base-content/70">
      {{ focus() }} (highlighted):
      <span class="tnum font-semibold text-base-content">{{ focusValue() }}</span> pending
    </p>
  </figure>
</div>
`},"bar-chart-horizontal":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscBarChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-bar-chart-horizontal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBarChart, ScscCard],
  template: \`
    <scsc-card title="Open cases by department" class="max-w-2xl">
      <!-- orientation="horizontal" gives long names a column of their own; they wrap, never truncate. -->
      <scsc-bar-chart
        [data]="departments"
        orientation="horizontal"
        showValues
        axis
        categoryLabel="Department"
        label="Open cases by department, as of September 30, 2026"
      />
    </scsc-card>
  \`,
})
export class BarChartHorizontalDemo {
  /** One hue for every bar: the names, not the colours, tell the departments apart. */
  protected readonly departments: ScscChartDatum[] = [
    { label: 'Family Law \u2014 Dissolution and Custody', value: 1843 },
    { label: 'Unlimited Civil', value: 1520 },
    { label: 'Probate, Guardianship and Conservatorship', value: 964 },
    { label: 'Juvenile Dependency', value: 611 },
    { label: 'Small Claims', value: 402 },
  ].map((d) => ({ ...d, color: 'var(--color-chart-1)' }));
}
`,html:`<scsc-card title="Open cases by department" class="max-w-2xl">
  <!-- orientation="horizontal" gives long names a column of their own; they wrap, never truncate. -->
  <scsc-bar-chart
    [data]="departments"
    orientation="horizontal"
    showValues
    axis
    categoryLabel="Department"
    label="Open cases by department, as of September 30, 2026"
  />
</scsc-card>
`},"bar-chart-stacked":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscBarChart, type ScscChartSeries } from '@scscourt/design/charts';

@Component({
  selector: 'app-bar-chart-stacked-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBarChart, ScscCard],
  template: \`
    <scsc-card title="Hearings by type, this week" class="max-w-2xl">
      <!-- layout="stacked" piles the series into one bar per day; showValues prints each total.
           [(hidden)] keeps the legend's show/hide state in a signal the page owns. -->
      <scsc-bar-chart
        [series]="series"
        [labels]="days"
        layout="stacked"
        showValues
        pattern
        [(hidden)]="hidden"
        label="Hearings by type and day, week of October 5, 2026"
      />
    </scsc-card>
  \`,
})
export class BarChartStackedDemo {
  protected readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  protected readonly hidden = signal<string[]>([]);
  protected readonly series: ScscChartSeries[] = [
    { id: 'arraign', label: 'Arraignment', data: [42, 38, 45, 40, 31] },
    { id: 'motion', label: 'Motion', data: [26, 31, 22, 29, 18] },
    { id: 'trial', label: 'Trial setting', data: [12, 15, 11, 14, 9] },
    { id: 'review', label: 'Review', data: [8, 6, 10, 7, 5] },
  ];
}
`,html:`<scsc-card title="Hearings by type, this week" class="max-w-2xl">
  <!-- layout="stacked" piles the series into one bar per day; showValues prints each total.
       [(hidden)] keeps the legend's show/hide state in a signal the page owns. -->
  <scsc-bar-chart
    [series]="series"
    [labels]="days"
    layout="stacked"
    showValues
    pattern
    [(hidden)]="hidden"
    label="Hearings by type and day, week of October 5, 2026"
  />
</scsc-card>
`}};var k=class t{byType=[{label:`Civil`,value:120},{label:`Family`,value:78},{label:`Probate`,value:41},{label:`Criminal`,value:56},{label:`Traffic`,value:92}];chartLabel=`New filings by case type, last 30 days: ${this.byType.map(a=>`${a.label} ${a.value}`).join(`, `)}`;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-bar-chart-basic-demo`]],decls:4,vars:2,consts:[[1,`max-w-sm`],[1,`mb-2`,`text-sm`,`font-medium`],[3,`data`,`label`]],template:function(e,r){e&1&&(Ga(0,`figure`,0)(1,`figcaption`,1),G_(2,` New filings by case type, last 30 days `),Lf(),uc(3,`scsc-bar-chart`,2),Lf()),e&2&&(Jb(3),Pv(`data`,r.byType)(`label`,r.chartLabel))},dependencies:[xn],encapsulation:2})};function Q(t,a){if(t&1&&uc(0,`scsc-bar-chart`,7),t&2){let e=y_();Pv(`data`,e.data())(`label`,e.chartLabel())(`height`,160)}}function R(t,a){t&1&&uc(0,`scsc-empty-state`,8)}var B=class t{byWeek={sep28:[{label:`Dept. 3`,value:18},{label:`Dept. 7`,value:42},{label:`Dept. 12`,value:27},{label:`Dept. 21`,value:35},{label:`Dept. 30`,value:11}],oct5:[{label:`Dept. 3`,value:9},{label:`Dept. 7`,value:24},{label:`Dept. 12`,value:16},{label:`Dept. 21`,value:30},{label:`Dept. 30`,value:4}],oct12:[]};week=q(`sep28`);data=ut(()=>this.byWeek[this.week()].map(a=>s(r({},a),{color:`var(--color-primary)`})));chartLabel=ut(()=>`Hearings set by department: ${this.data().map(a=>`${a.label} ${a.value}`).join(`, `)}`);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-bar-chart-card-demo`]],decls:12,vars:1,consts:[[`title`,`Hearings set by department`,1,`max-w-md`],[1,`flex`,`flex-col`,`gap-4`],[`label`,`Week`,`for`,`bar-card-week`],[`scsc-select`,``,`id`,`bar-card-week`,`size`,`sm`,3,`change`],[`value`,`sep28`,`selected`,``],[`value`,`oct5`],[`value`,`oct12`],[`showValues`,``,3,`data`,`label`,`height`],[`icon`,`calendar`,`title`,`No hearings set yet`,`message`,`Departments publish the calendar for this week by Oct 7.`]],template:function(e,r){e&1&&(Ga(0,`scsc-card`,0)(1,`div`,1)(2,`scsc-form-field`,2)(3,`select`,3),lc(`change`,function(m){return r.week.set(m.target.value)}),Ga(4,`option`,4),G_(5,`Sep 28 – Oct 2, 2026`),Lf(),Ga(6,`option`,5),G_(7,`Oct 5 – 9, 2026`),Lf(),Ga(8,`option`,6),G_(9,`Oct 12 – 16, 2026`),Lf()()(),JT(10,Q,1,3,`scsc-bar-chart`,7)(11,R,1,0,`scsc-empty-state`,8),Lf()()),e&2&&(Jb(10),t_(r.data().length?10:11))},dependencies:[xn,mN,Xa,Vn,On],encapsulation:2})};var T=class t{quarters=[`Q1`,`Q2`,`Q3`,`Q4`];series=[{id:`filed`,label:`Filed`,data:[1240,1315,1422,1198]},{id:`disposed`,label:`Disposed`,data:[1202,1330,1250,1236]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-bar-chart-grouped-demo`]],decls:2,vars:2,consts:[[`title`,`Filings and dispositions by quarter`,1,`max-w-2xl`],[`axis`,``,`label`,`Civil filings and dispositions by quarter, fiscal year 2026`,`description`,`Dispositions kept pace with filings in every quarter but Q3.`,3,`series`,`labels`]],template:function(e,r){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-bar-chart`,1),Lf()),e&2&&(Jb(),Pv(`series`,r.series)(`labels`,r.quarters))},dependencies:[xn,mN],encapsulation:2})};var I=(t,a)=>a.label;function G(t,a){if(t&1&&(Ga(0,`option`,3),G_(1),Lf()),t&2){let e=a.$implicit,r=y_();Pv(`value`,e.label)(`selected`,e.label===r.focus()),Jb(),nD(e.label)}}var F=class t{pending=[{label:`Dept. 3`,value:14},{label:`Dept. 7`,value:31},{label:`Dept. 12`,value:22},{label:`Dept. 21`,value:38},{label:`Dept. 30`,value:9}];focus=q(`Dept. 7`);bars=ut(()=>this.pending.map(a=>s(r({},a),{color:a.label===this.focus()?`var(--color-secondary)`:`var(--color-primary)`})));focusValue=ut(()=>this.pending.find(a=>a.label===this.focus())?.value??0);chartLabel=ut(()=>`Motions pending by department, ${this.focus()} highlighted: `+this.pending.map(a=>`${a.label} ${a.value}`).join(`, `));static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-bar-chart-highlight-demo`]],decls:14,vars:4,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-4`],[`label`,`Department in focus`,`for`,`bar-highlight-dept`],[`scsc-select`,``,`id`,`bar-highlight-dept`,3,`change`],[3,`value`,`selected`],[1,`mb-2`,`text-sm`,`font-medium`],[3,`data`,`label`],[1,`mt-2`,`text-sm`,`text-base-content/70`],[1,`tnum`,`font-semibold`,`text-base-content`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(m){return r.focus.set(m.target.value)}),o_(3,G,2,3,`option`,3,I),Lf()(),Ga(5,`figure`)(6,`figcaption`,4),G_(7,`Motions pending by department`),Lf(),uc(8,`scsc-bar-chart`,5),Ga(9,`p`,6),G_(10),Ga(11,`span`,7),G_(12),Lf(),G_(13,` pending `),Lf()()()),e&2&&(Jb(3),i_(r.pending),Jb(5),Pv(`data`,r.bars())(`label`,r.chartLabel()),Jb(2),$f(` `,r.focus(),` (highlighted): `),Jb(2),nD(r.focusValue()))},dependencies:[xn,Vn,On],encapsulation:2})};var O=class t{departments=[{label:`Family Law — Dissolution and Custody`,value:1843},{label:`Unlimited Civil`,value:1520},{label:`Probate, Guardianship and Conservatorship`,value:964},{label:`Juvenile Dependency`,value:611},{label:`Small Claims`,value:402}].map(a=>s(r({},a),{color:`var(--color-chart-1)`}));static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-bar-chart-horizontal-demo`]],decls:2,vars:1,consts:[[`title`,`Open cases by department`,1,`max-w-2xl`],[`orientation`,`horizontal`,`showValues`,``,`axis`,``,`categoryLabel`,`Department`,`label`,`Open cases by department, as of September 30, 2026`,3,`data`]],template:function(e,r){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-bar-chart`,1),Lf()),e&2&&(Jb(),Pv(`data`,r.departments))},dependencies:[xn,mN],encapsulation:2})};var _=class t{days=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`];hidden=q([]);series=[{id:`arraign`,label:`Arraignment`,data:[42,38,45,40,31]},{id:`motion`,label:`Motion`,data:[26,31,22,29,18]},{id:`trial`,label:`Trial setting`,data:[12,15,11,14,9]},{id:`review`,label:`Review`,data:[8,6,10,7,5]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-bar-chart-stacked-demo`]],decls:2,vars:3,consts:[[`title`,`Hearings by type, this week`,1,`max-w-2xl`],[`layout`,`stacked`,`showValues`,``,`pattern`,``,`label`,`Hearings by type and day, week of October 5, 2026`,3,`hiddenChange`,`series`,`labels`,`hidden`]],template:function(e,r){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-bar-chart`,1),sD(`hiddenChange`,function(m){return Y_(r.hidden,m)||(r.hidden=m),m}),Lf()()),e&2&&(Jb(),Pv(`series`,r.series)(`labels`,r.days),iD(`hidden`,r.hidden))},dependencies:[xn,mN],encapsulation:2})};var Ne={slug:`bar-chart`,name:`Bar Chart`,classes:[`ScscBarChart`],category:`Charts`,whenToUse:["Comparing a handful of categories (case types, departments, months) by one value (`data`), or by several (`series` + `labels`, `layout` `grouped` or `stacked`). Five to eight categories read well; beyond that use a table.","Bars scale to the largest value, over five light guide lines. `axis` adds round tick values (the scale is rounded out to them); `showValues` prints each value (each total, when stacked).","Without `color` each bar (or series) takes the next palette colour. For comparisons, give every bar one hue and single out the bar in focus with another, so the emphasis is obvious.",'`orientation="horizontal"` draws rows, with the category names in a column of their own: use it for long names (departments, case types spelled out). Names wrap onto more lines rather than truncate.',"Vertical bars fill their container width at a fixed `height` (180px by default); the text keeps the page type size at any width.","An empty `data` array draws an empty frame. Render `scsc-empty-state` instead when a filter leaves nothing to compare."],setup:e(`ScscBarChart, type ScscChartDatum, type ScscChartSeries`),demos:[{id:`bar-chart-basic`,title:`Basic`,description:"Five categories on the default palette, named by `label`.",component:k,source:b[`bar-chart-basic`]},{id:`bar-chart-grouped`,title:`Grouped series`,description:"Two series side by side per quarter, a legend that hides either, and `axis` tick values. Tab to the plot and use the arrow keys to read each quarter.",component:T,source:b[`bar-chart-grouped`]},{id:`bar-chart-stacked`,title:`Stacked, with patterns`,description:'`layout="stacked"` with totals above the bars, `pattern` fills, and the legend state held in a signal through `[(hidden)]`.',component:_,source:b[`bar-chart-stacked`]},{id:`bar-chart-horizontal`,title:`Horizontal, long names`,description:'`orientation="horizontal"` for department names that would not fit under a column; one hue, values at the bar ends.',component:O,source:b[`bar-chart-horizontal`]},{id:`bar-chart-highlight`,title:`One hue, one highlight`,description:"A `computed` sets `color` on every datum: primary for all, secondary for the department chosen in the select, repeated in text below.",component:F,source:b[`bar-chart-highlight`]},{id:`bar-chart-card`,title:`In a card, with values and an empty week`,description:"A week filter drives the data; `showValues` prints each count above its bar, and a week with no data shows `scsc-empty-state`.",component:B,source:b[`bar-chart-card`]}],keyboard:o,aria:["A `<figure>` named by `label` (a visually hidden `<figcaption>`) and described by `description`.",'The plot is one `role="group"` tab stop; each category is spoken as "Q1, Filed: 1,240, Disposed: 1,202" through a polite live region. The bars and printed text are hidden from assistive tech.',"Legend entries are `<button aria-pressed>`: pressed means shown.",'"Show data table" is a disclosure button (`aria-expanded`) for a captioned `<table>` of every value.'],a11y:['`label` is required: say what and when ("Filings by case type, last 30 days"). The data itself is in the table and the keyboard read-out, so the label no longer has to list every value.',`Category labels and tick values are 12px text at /70 ink, values 14px (12px when grouped); all scale with the browser text size.`,"The palette is 3 : 1 against the surface and between neighbouring series in every theme; `pattern` adds fills for readers who cannot tell the colours apart.",`A highlight colour needs a text equivalent ("Dept. 7 (highlighted)").`],appMustProvide:['A `label` that says what and when ("Filings by case type, last 30 days"), updated with the data.',`A text equivalent for any highlight colour ("Dept. 7 (highlighted)").`],related:[`line-chart`,`pie-chart`,`stat`,`table`]};export{Ne as BAR_CHART_DOCS};