import{Hs as y_,Ms as uc,Na as Jb,Ps as ut,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ra as Af,ta as $f,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import"./chunk-BgxDSBe6.js";import{t as bn}from"./chunk-BiCqrzLG.js";import{n as o,t as e}from"./chunk-CoJGHy_m.js";var f=class s{period=`weeks ending Jul 5 to Aug 30, 2026`;filings=[42,55,48,61,58,67,72,64,70];chartLabel=`New filings per week, ${this.period}: ${this.filings.join(`, `)}`;static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-line-chart-basic-demo`]],decls:4,vars:3,consts:[[1,`max-w-md`],[3,`data`,`label`],[1,`mt-2`,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`figure`,0),uc(1,`scsc-line-chart`,1),Ga(2,`figcaption`,2),G_(3),Lf()()),e&2&&(Jb(),Pv(`data`,t.filings)(`label`,t.chartLabel),Jb(2),$f(` New filings per week, `,t.period,` (42 to 72 a week). `))},dependencies:[bn],encapsulation:2})};var j=(s,r)=>r.title;function _(s,r){if(s&1&&(Ga(0,`scsc-card`,6),uc(1,`scsc-line-chart`,7),Ga(2,`p`,8),G_(3),Ga(4,`span`,9),G_(5),Lf()()()),s&2){let e=r.$implicit,t=y_();Pv(`title`,e.title),Jb(),Pv(`data`,e.values)(`color`,e.color)(`label`,e.title+`, `+t.caption()+`: `+e.values.join(`, `)),Jb(2),$f(` `,t.caption(),` · latest `),Jb(2),nD(e.values.at(-1))}}var b=class s{period=q(`weeks`);data={weeks:{caption:`Weeks ending Jul 5 to Aug 30, 2026`,metrics:[{title:`New filings per week`,color:`var(--color-primary)`,values:[42,55,48,61,58,67,72,64,70]},{title:`Dispositions per week`,color:`var(--color-secondary)`,values:[39,44,47,45,52,58,61,66,63]}]},months:{caption:`March to August 2026`,metrics:[{title:`New filings per month`,color:`var(--color-primary)`,values:[212,238,251,244,262,281]},{title:`Dispositions per month`,color:`var(--color-secondary)`,values:[198,207,230,241,249,270]}]}};caption=ut(()=>this.data[this.period()].caption);metrics=ut(()=>this.data[this.period()].metrics);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-line-chart-compare-demo`]],decls:10,vars:0,consts:[[1,`flex`,`max-w-3xl`,`flex-col`,`gap-4`],[`label`,`Period`,`for`,`line-compare-period`,1,`max-w-60`],[`scsc-select`,``,`id`,`line-compare-period`,`size`,`sm`,3,`change`],[`value`,`weeks`,`selected`,``],[`value`,`months`],[1,`grid`,`gap-4`,`md:grid-cols-2`],[3,`title`],[3,`data`,`color`,`label`],[1,`mt-2`,`text-sm`,`text-base-content/70`],[1,`tnum`,`font-semibold`,`text-base-content`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(O){return t.period.set(O.target.value)}),Ga(3,`option`,3),G_(4,`Last 9 weeks`),Lf(),Ga(5,`option`,4),G_(6,`Last 6 months`),Lf()()(),Ga(7,`div`,5),o_(8,_,6,6,`scsc-card`,6,j),Lf()()),e&2&&(Jb(8),i_(t.metrics()))},dependencies:[mN,Vn,bn,On],encapsulation:2})};var S=class s{daysToHearing=[52,49,50,46,44,41,38];acceptance=[96.4,96.1,96.6,96.3,96.8,96.5];months=[`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-line-chart-options-demo`]],decls:9,vars:6,consts:[[1,`grid`,`max-w-3xl`,`gap-6`,`sm:grid-cols-2`],[`color`,`var(--color-secondary)`,3,`data`,`labels`,`label`],[1,`mt-2`,`text-sm`,`text-base-content/70`],[`color`,`var(--color-info)`,3,`data`,`labels`,`label`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`figure`),uc(2,`scsc-line-chart`,1),Ga(3,`figcaption`,2),G_(4,` Median days from filing to first hearing, Mar to Sep 2026 (52 down to 38). `),Lf()(),Ga(5,`figure`),uc(6,`scsc-line-chart`,3),Ga(7,`figcaption`,2),G_(8,` E-filing acceptance rate, Apr to Sep 2026: steady between 96.1% and 96.8%. `),Lf()()()),e&2&&(Jb(2),Pv(`data`,t.daysToHearing)(`labels`,t.months)(`label`,`Median days from filing to first hearing, March to September 2026: `+t.daysToHearing.join(`, `)),Jb(4),Pv(`data`,t.acceptance)(`labels`,t.months.slice(1))(`label`,`E-filing acceptance rate, April to September 2026, in percent: `+t.acceptance.join(`, `)))},dependencies:[bn],encapsulation:2})};var w=class s{weeks=[`Aug 3`,`Aug 10`,`Aug 17`,`Aug 24`,`Aug 31`,`Sep 7`,`Sep 14`,`Sep 21`,`Sep 28`];series=[{id:`downtown`,label:`Downtown`,data:[412,436,428,455,470,398,481,492,505]},{id:`north`,label:`North County`,data:[238,245,260,251,268,214,272,280,276]},{id:`south`,label:`South County`,data:[150,162,158,171,166,139,175,182,190]}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-line-chart-series-demo`]],decls:2,vars:2,consts:[[`title`,`E-filings per week by courthouse`,1,`max-w-3xl`],[`axis`,``,`pattern`,``,`categoryLabel`,`Week of`,`label`,`E-filings per week by courthouse, August 3 to September 28, 2026`,3,`series`,`labels`]],template:function(e,t){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-line-chart`,1),Lf()),e&2&&(Jb(),Pv(`series`,t.series)(`labels`,t.weeks))},dependencies:[mN,bn],encapsulation:2})};var v=class s{months=[`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`];series=[{id:`under90`,label:`Under 90 days`,data:[1620,1580,1510,1470,1420,1360]},{id:`90to180`,label:`90–180 days`,data:[1050,1070,1040,1010,1e3,990]},{id:`over180`,label:`Over 180 days`,data:[810,800,790,785,775,770]}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-line-chart-stacked-demo`]],decls:2,vars:3,consts:[[`title`,`Pending caseload by age`,1,`max-w-3xl`],[`stacked`,``,`axis`,``,`categoryLabel`,`Month`,`label`,`Pending civil cases by age, April to September 2026`,`description`,`The total fell from 3,480 to 3,120, mostly from cases under 90 days.`,3,`series`,`labels`,`height`]],template:function(e,t){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-line-chart`,1),Lf()),e&2&&(Jb(),Pv(`series`,t.series)(`labels`,t.months)(`height`,220))},dependencies:[mN,bn],encapsulation:2})};var h={"line-chart-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscLineChart } from '@scscourt/design/charts';

@Component({
  selector: 'app-line-chart-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLineChart],
  template: \`
    <figure class="max-w-md">
      <scsc-line-chart [data]="filings" [label]="chartLabel" />
      <!-- No axes or ticks: the caption carries the period and the range. -->
      <figcaption class="mt-2 text-sm text-base-content/70">
        New filings per week, {{ period }} (42 to 72 a week).
      </figcaption>
    </figure>
  \`,
})
export class LineChartBasicDemo {
  protected readonly period = 'weeks ending Jul 5 to Aug 30, 2026';
  protected readonly filings = [42, 55, 48, 61, 58, 67, 72, 64, 70];
  protected readonly chartLabel = \`New filings per week, \${this.period}: \${this.filings.join(', ')}\`;
}
`,html:`<figure class="max-w-md">
  <scsc-line-chart [data]="filings" [label]="chartLabel" />
  <!-- No axes or ticks: the caption carries the period and the range. -->
  <figcaption class="mt-2 text-sm text-base-content/70">
    New filings per week, {{ period }} (42 to 72 a week).
  </figcaption>
</figure>
`},"line-chart-compare":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCard, ScscFormField, ScscSelect } from '@scscourt/design';
import { ScscLineChart } from '@scscourt/design/charts';

type Period = 'weeks' | 'months';

interface Metric {
  title: string;
  color: string;
  values: number[];
}

@Component({
  selector: 'app-line-chart-compare-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscFormField, ScscLineChart, ScscSelect],
  template: \`
    <div class="flex max-w-3xl flex-col gap-4">
      <scsc-form-field label="Period" for="line-compare-period" class="max-w-60">
        <select
          scsc-select
          id="line-compare-period"
          size="sm"
          (change)="period.set($any($event.target).value)"
        >
          <option value="weeks" selected>Last 9 weeks</option>
          <option value="months">Last 6 months</option>
        </select>
      </scsc-form-field>

      <!-- One series per chart: comparable series sit side by side over the same period. -->
      <div class="grid gap-4 md:grid-cols-2">
        @for (m of metrics(); track m.title) {
          <scsc-card [title]="m.title">
            <scsc-line-chart
              [data]="m.values"
              [color]="m.color"
              [label]="m.title + ', ' + caption() + ': ' + m.values.join(', ')"
            />
            <p class="mt-2 text-sm text-base-content/70">
              {{ caption() }} \xB7 latest
              <span class="tnum font-semibold text-base-content">{{ m.values.at(-1) }}</span>
            </p>
          </scsc-card>
        }
      </div>
    </div>
  \`,
})
export class LineChartCompareDemo {
  protected readonly period = signal<Period>('weeks');

  private readonly data: Record<Period, { caption: string; metrics: Metric[] }> = {
    weeks: {
      caption: 'Weeks ending Jul 5 to Aug 30, 2026',
      metrics: [
        {
          title: 'New filings per week',
          color: 'var(--color-primary)',
          values: [42, 55, 48, 61, 58, 67, 72, 64, 70],
        },
        {
          title: 'Dispositions per week',
          color: 'var(--color-secondary)',
          values: [39, 44, 47, 45, 52, 58, 61, 66, 63],
        },
      ],
    },
    months: {
      caption: 'March to August 2026',
      metrics: [
        {
          title: 'New filings per month',
          color: 'var(--color-primary)',
          values: [212, 238, 251, 244, 262, 281],
        },
        {
          title: 'Dispositions per month',
          color: 'var(--color-secondary)',
          values: [198, 207, 230, 241, 249, 270],
        },
      ],
    },
  };

  protected readonly caption = computed(() => this.data[this.period()].caption);
  protected readonly metrics = computed(() => this.data[this.period()].metrics);
}
`,html:`<div class="flex max-w-3xl flex-col gap-4">
  <scsc-form-field label="Period" for="line-compare-period" class="max-w-60">
    <select
      scsc-select
      id="line-compare-period"
      size="sm"
      (change)="period.set($any($event.target).value)"
    >
      <option value="weeks" selected>Last 9 weeks</option>
      <option value="months">Last 6 months</option>
    </select>
  </scsc-form-field>

  <!-- One series per chart: comparable series sit side by side over the same period. -->
  <div class="grid gap-4 md:grid-cols-2">
    @for (m of metrics(); track m.title) {
      <scsc-card [title]="m.title">
        <scsc-line-chart
          [data]="m.values"
          [color]="m.color"
          [label]="m.title + ', ' + caption() + ': ' + m.values.join(', ')"
        />
        <p class="mt-2 text-sm text-base-content/70">
          {{ caption() }} \xB7 latest
          <span class="tnum font-semibold text-base-content">{{ m.values.at(-1) }}</span>
        </p>
      </scsc-card>
    }
  </div>
</div>
`},"line-chart-options":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscLineChart } from '@scscourt/design/charts';

@Component({
  selector: 'app-line-chart-options-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLineChart],
  template: \`
    <div class="grid max-w-3xl gap-6 sm:grid-cols-2">
      <figure>
        <scsc-line-chart
          [data]="daysToHearing"
          [labels]="months"
          color="var(--color-secondary)"
          [label]="
            'Median days from filing to first hearing, March to September 2026: ' +
            daysToHearing.join(', ')
          "
        />
        <figcaption class="mt-2 text-sm text-base-content/70">
          Median days from filing to first hearing, Mar to Sep 2026 (52 down to 38).
        </figcaption>
      </figure>

      <figure>
        <scsc-line-chart
          [data]="acceptance"
          [labels]="months.slice(1)"
          color="var(--color-info)"
          [label]="
            'E-filing acceptance rate, April to September 2026, in percent: ' +
            acceptance.join(', ')
          "
        />
        <!-- Drawn from zero, a 0.7-point wobble around 96% reads as flat, which it is. -->
        <figcaption class="mt-2 text-sm text-base-content/70">
          E-filing acceptance rate, Apr to Sep 2026: steady between 96.1% and 96.8%.
        </figcaption>
      </figure>
    </div>
  \`,
})
export class LineChartOptionsDemo {
  protected readonly daysToHearing = [52, 49, 50, 46, 44, 41, 38];
  protected readonly acceptance = [96.4, 96.1, 96.6, 96.3, 96.8, 96.5];
  protected readonly months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
}
`,html:`<div class="grid max-w-3xl gap-6 sm:grid-cols-2">
  <figure>
    <scsc-line-chart
      [data]="daysToHearing"
      [labels]="months"
      color="var(--color-secondary)"
      [label]="
        'Median days from filing to first hearing, March to September 2026: ' +
        daysToHearing.join(', ')
      "
    />
    <figcaption class="mt-2 text-sm text-base-content/70">
      Median days from filing to first hearing, Mar to Sep 2026 (52 down to 38).
    </figcaption>
  </figure>

  <figure>
    <scsc-line-chart
      [data]="acceptance"
      [labels]="months.slice(1)"
      color="var(--color-info)"
      [label]="
        'E-filing acceptance rate, April to September 2026, in percent: ' +
        acceptance.join(', ')
      "
    />
    <!-- Drawn from zero, a 0.7-point wobble around 96% reads as flat, which it is. -->
    <figcaption class="mt-2 text-sm text-base-content/70">
      E-filing acceptance rate, Apr to Sep 2026: steady between 96.1% and 96.8%.
    </figcaption>
  </figure>
</div>
`},"line-chart-series":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscLineChart, type ScscChartSeries } from '@scscourt/design/charts';

@Component({
  selector: 'app-line-chart-series-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscLineChart],
  template: \`
    <scsc-card title="E-filings per week by courthouse" class="max-w-3xl">
      <!-- Each legend entry is a toggle button; pattern gives every line its own dash as well as a colour. -->
      <scsc-line-chart
        [series]="series"
        [labels]="weeks"
        axis
        pattern
        categoryLabel="Week of"
        label="E-filings per week by courthouse, August 3 to September 28, 2026"
      />
    </scsc-card>
  \`,
})
export class LineChartSeriesDemo {
  protected readonly weeks = [
    'Aug 3',
    'Aug 10',
    'Aug 17',
    'Aug 24',
    'Aug 31',
    'Sep 7',
    'Sep 14',
    'Sep 21',
    'Sep 28',
  ];
  protected readonly series: ScscChartSeries[] = [
    { id: 'downtown', label: 'Downtown', data: [412, 436, 428, 455, 470, 398, 481, 492, 505] },
    { id: 'north', label: 'North County', data: [238, 245, 260, 251, 268, 214, 272, 280, 276] },
    { id: 'south', label: 'South County', data: [150, 162, 158, 171, 166, 139, 175, 182, 190] },
  ];
}
`,html:`<scsc-card title="E-filings per week by courthouse" class="max-w-3xl">
  <!-- Each legend entry is a toggle button; pattern gives every line its own dash as well as a colour. -->
  <scsc-line-chart
    [series]="series"
    [labels]="weeks"
    axis
    pattern
    categoryLabel="Week of"
    label="E-filings per week by courthouse, August 3 to September 28, 2026"
  />
</scsc-card>
`},"line-chart-stacked":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscLineChart, type ScscChartSeries } from '@scscourt/design/charts';

@Component({
  selector: 'app-line-chart-stacked-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscLineChart],
  template: \`
    <scsc-card title="Pending caseload by age" class="max-w-3xl">
      <!-- stacked draws each series on top of the one before: the top edge is the total. -->
      <scsc-line-chart
        [series]="series"
        [labels]="months"
        stacked
        axis
        [height]="220"
        categoryLabel="Month"
        label="Pending civil cases by age, April to September 2026"
        description="The total fell from 3,480 to 3,120, mostly from cases under 90 days."
      />
    </scsc-card>
  \`,
})
export class LineChartStackedDemo {
  protected readonly months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  protected readonly series: ScscChartSeries[] = [
    { id: 'under90', label: 'Under 90 days', data: [1620, 1580, 1510, 1470, 1420, 1360] },
    { id: '90to180', label: '90\u2013180 days', data: [1050, 1070, 1040, 1010, 1000, 990] },
    { id: 'over180', label: 'Over 180 days', data: [810, 800, 790, 785, 775, 770] },
  ];
}
`,html:`<scsc-card title="Pending caseload by age" class="max-w-3xl">
  <!-- stacked draws each series on top of the one before: the top edge is the total. -->
  <scsc-line-chart
    [series]="series"
    [labels]="months"
    stacked
    axis
    [height]="220"
    categoryLabel="Month"
    label="Pending civil cases by age, April to September 2026"
    description="The total fell from 3,480 to 3,120, mostly from cases under 90 days."
  />
</scsc-card>
`}};var ne={slug:`line-chart`,name:`Line Chart`,classes:[`ScscLineChart`],category:`Charts`,whenToUse:[`Numeric series over evenly spaced time (filings per week, average days to disposition per month). Points are evenly spaced, so a series must not have gaps.`,"One series with `data`, or up to six with `series` (a legend toggles each). `area` fills under several lines; `stacked` piles them into filled areas whose top edge is the total.","A series of non-negative values is drawn from zero, so a small change looks small. A series that dips below zero is scaled to its min/max instead. `axis` adds round tick values on the left.","Pass `labels` (one per point) for an x-axis: up to seven are printed, evenly spaced, always including the first and last; they also name the points in the tooltip and the data table. With fewer than two points there is no line to draw; show text instead.","For a word-sized trend with no axis, use `scsc-sparkline`."],setup:e(`ScscLineChart, type ScscChartSeries`),demos:[{id:`line-chart-basic`,title:`Basic`,description:"One series, named by `label`. Tab to the plot and use the arrow keys to move the crosshair.",component:f,source:h[`line-chart-basic`]},{id:`line-chart-series`,title:`Several series, with legend toggles`,description:"Three courthouses on one `axis`; each legend button hides or shows a line, and `pattern` gives each its own dash.",component:w,source:h[`line-chart-series`]},{id:`line-chart-stacked`,title:`Stacked area`,description:"`stacked` for parts of a total over time; the tooltip adds the total, and the data table lists every series.",component:v,source:h[`line-chart-stacked`]},{id:`line-chart-options`,title:`Colour and range`,description:"`color` takes any CSS colour and `labels` adds an x-axis. The second series stays near 96%, and drawn from zero it reads as flat, which it is.",component:S,source:h[`line-chart-options`]},{id:`line-chart-compare`,title:`Side by side, one period`,description:"Two cards share a period select; a `computed` swaps both series and their labels together.",component:b,source:h[`line-chart-compare`]}],keyboard:o,aria:["A `<figure>` named by `label` (a visually hidden `<figcaption>`) and described by `description`.",'The plot is one `role="group"` tab stop; each point is spoken as "Aug 10, Downtown: 436, North County: 245, …" through a polite live region. Lines, dots and axis text are hidden from assistive tech.',"Legend entries are `<button aria-pressed>`: pressed means shown.",'"Show data table" is a disclosure button (`aria-expanded`) for a captioned `<table>` of every point.'],a11y:["`label` is required: say what and when. The values are in the data table and the keyboard read-out.",`Axis labels are 12px text at /70 ink; under 24rem wide every other middle x label hides so none overlap.`,"When a filter changes the data, change `label` with it (derive both from the same signal)."],appMustProvide:["A `label` that says what and when, derived from the same signal as the data so a filter updates both."],related:[`sparkline`,`bar-chart`,`stat-trend`,`calendar-heatmap`]};export{ne as LINE_CHART_DOCS};