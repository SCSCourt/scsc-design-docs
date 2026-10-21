import{Fr as kn,Ms as uc,Na as Jb,Ps as ut,Xa as Pv,Zo as i_,_s as o_,cs as lc,ra as Af,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import"./chunk-BgxDSBe6.js";import"./chunk-BiCqrzLG.js";import{t as T}from"./chunk-DPk2Vdfd.js";import{t as e}from"./chunk-CoJGHy_m.js";var m=class t{filings=[1020,1096,1051,1140,1122,1187,1284];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-stat-trend-basic-demo`]],decls:1,vars:1,consts:[[`label`,`New filings (7d)`,`value`,`1,284`,`delta`,`+8.2% vs. prior week`,`trend`,`up`,1,`max-w-xs`,3,`data`]],template:function(e,s){e&1&&uc(0,`scsc-stat-trend`,0),e&2&&Pv(`data`,s.filings)},dependencies:[T],encapsulation:2})};var N=(t,r)=>r.label;function H(t,r){if(t&1&&uc(0,`scsc-stat-trend`,9),t&2){let e=r.$implicit;Pv(`label`,e.label)(`value`,e.value)(`data`,e.data)(`delta`,e.delta)(`trend`,e.trend)(`sparkColor`,e.sparkColor??`var(--color-secondary)`)}}var g=class t{period=q(`7d`);byPeriod={"7d":[{label:`New filings (7d)`,value:`1,284`,data:[1020,1096,1051,1140,1122,1187,1284],delta:`+8.2% vs. prior week`,trend:`up`},{label:`Hearings held (7d)`,value:`346`,data:[331,352,340,361,349,351,346],delta:`−1.4% vs. prior week`,trend:`flat`},{label:`Pending over 180 days`,value:`412`,data:[380,386,391,388,394,397,412],delta:`+3.8% vs. prior week`,trend:`down`,sparkColor:`var(--color-error)`}],"30d":[{label:`New filings (30d)`,value:`5,108`,data:[4620,4710,4580,4890,4883,5108],delta:`+4.6% vs. prior 30 days`,trend:`up`},{label:`Hearings held (30d)`,value:`1,412`,data:[1350,1398,1322,1405,1384,1412],delta:`+2.0% vs. prior 30 days`,trend:`up`},{label:`Pending over 180 days`,value:`412`,data:[468,455,449,437,431,412],delta:`−4.4% vs. prior 30 days`,trend:`up`,sparkColor:`var(--color-success)`}]};kpis=ut(()=>this.byPeriod[this.period()]);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-stat-trend-grid-demo`]],decls:14,vars:1,consts:[[`aria-labelledby`,`kpi-grid-heading`,1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`items-end`,`justify-between`,`gap-4`],[`id`,`kpi-grid-heading`,3,`level`],[1,`w-44`],[`label`,`Period`,`for`,`kpi-grid-period`],[`scsc-select`,``,`id`,`kpi-grid-period`,`size`,`sm`,3,`change`],[`value`,`7d`,`selected`,``],[`value`,`30d`],[1,`grid`,`gap-4`,`sm:grid-cols-2`,`xl:grid-cols-3`],[3,`label`,`value`,`data`,`delta`,`trend`,`sparkColor`]],template:function(e,s){e&1&&(Ga(0,`section`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3,`Civil Division at a glance`),Lf(),Ga(4,`div`,3)(5,`scsc-form-field`,4)(6,`select`,5),lc(`change`,function(P){return s.period.set(P.target.value)}),Ga(7,`option`,6),G_(8,`Last 7 days`),Lf(),Ga(9,`option`,7),G_(10,`Last 30 days`),Lf()()()()(),Ga(11,`div`,8),o_(12,H,1,6,`scsc-stat-trend`,9,N),Lf()()),e&2&&(Jb(2),Pv(`level`,3),Jb(10),i_(s.kpis()))},dependencies:[Vn,kn,On,T],encapsulation:2})};var v=class t{dispositions=[540,562,571,566,590,581,611];daysToHearing=[52,49,50,46,44,42,38];backlog=[388,391,395,402,398,405,412];visits=[2010,2080,1990,2050,2020,2040,2040];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-stat-trend-sentiment-demo`]],decls:5,vars:4,consts:[[1,`grid`,`max-w-3xl`,`gap-4`,`sm:grid-cols-2`],[`label`,`Dispositions (7d)`,`value`,`611`,`delta`,`+5.2% vs. prior week`,`trend`,`up`,3,`data`],[`label`,`Median days to first hearing`,`value`,`38`,`delta`,`−4 days vs. prior month`,`goodDirection`,`down`,`sparkColor`,`var(--color-success)`,3,`data`],[`label`,`Cases pending over 180 days`,`value`,`412`,`delta`,`+1.7% vs. prior week`,`goodDirection`,`down`,`sparkColor`,`var(--color-error)`,3,`data`],[`label`,`Self-help center visits (7d)`,`value`,`2,040`,`delta`,`No change vs. prior week`,`trend`,`flat`,3,`data`]],template:function(e,s){e&1&&(Ga(0,`div`,0),uc(1,`scsc-stat-trend`,1)(2,`scsc-stat-trend`,2)(3,`scsc-stat-trend`,3)(4,`scsc-stat-trend`,4),Lf()),e&2&&(Jb(),Pv(`data`,s.dispositions),Jb(),Pv(`data`,s.daysToHearing),Jb(),Pv(`data`,s.backlog),Jb(),Pv(`data`,s.visits))},dependencies:[T],encapsulation:2})};var u={"stat-trend-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatTrend } from '@scscourt/design/charts';

@Component({
  selector: 'app-stat-trend-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatTrend],
  template: \`
    <!-- value is shown verbatim: format it yourself. -->
    <scsc-stat-trend
      class="max-w-xs"
      label="New filings (7d)"
      value="1,284"
      [data]="filings"
      delta="+8.2% vs. prior week"
      trend="up"
    />
  \`,
})
export class StatTrendBasicDemo {
  protected readonly filings = [1020, 1096, 1051, 1140, 1122, 1187, 1284];
}
`,html:`<!-- value is shown verbatim: format it yourself. -->
<scsc-stat-trend
  class="max-w-xs"
  label="New filings (7d)"
  value="1,284"
  [data]="filings"
  delta="+8.2% vs. prior week"
  trend="up"
/>
`},"stat-trend-grid":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscFormField, ScscHeading, ScscSelect } from '@scscourt/design';
import { ScscStatTrend } from '@scscourt/design/charts';

type Period = '7d' | '30d';

interface Kpi {
  label: string;
  value: string;
  data: number[];
  delta: string;
  trend: 'up' | 'down' | 'flat';
  sparkColor?: string;
}

@Component({
  selector: 'app-stat-trend-grid-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscHeading, ScscSelect, ScscStatTrend],
  template: \`
    <section class="flex flex-col gap-4" aria-labelledby="kpi-grid-heading">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <scsc-heading id="kpi-grid-heading" [level]="3">Civil Division at a glance</scsc-heading>
        <div class="w-44">
          <scsc-form-field label="Period" for="kpi-grid-period">
            <select
              scsc-select
              id="kpi-grid-period"
              size="sm"
              (change)="period.set($any($event.target).value)"
            >
              <option value="7d" selected>Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
          </scsc-form-field>
        </div>
      </div>

      <!-- Three across only on wide screens: each tile needs about 15rem for value + sparkline. -->
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        @for (k of kpis(); track k.label) {
          <scsc-stat-trend
            [label]="k.label"
            [value]="k.value"
            [data]="k.data"
            [delta]="k.delta"
            [trend]="k.trend"
            [sparkColor]="k.sparkColor ?? 'var(--color-secondary)'"
          />
        }
      </div>
    </section>
  \`,
})
export class StatTrendGridDemo {
  protected readonly period = signal<Period>('7d');

  private readonly byPeriod: Record<Period, Kpi[]> = {
    '7d': [
      {
        label: 'New filings (7d)',
        value: '1,284',
        data: [1020, 1096, 1051, 1140, 1122, 1187, 1284],
        delta: '+8.2% vs. prior week',
        trend: 'up',
      },
      {
        label: 'Hearings held (7d)',
        value: '346',
        data: [331, 352, 340, 361, 349, 351, 346],
        delta: '\u22121.4% vs. prior week',
        trend: 'flat',
      },
      {
        label: 'Pending over 180 days',
        value: '412',
        data: [380, 386, 391, 388, 394, 397, 412],
        delta: '+3.8% vs. prior week',
        trend: 'down',
        sparkColor: 'var(--color-error)',
      },
    ],
    '30d': [
      {
        label: 'New filings (30d)',
        value: '5,108',
        data: [4620, 4710, 4580, 4890, 4883, 5108],
        delta: '+4.6% vs. prior 30 days',
        trend: 'up',
      },
      {
        label: 'Hearings held (30d)',
        value: '1,412',
        data: [1350, 1398, 1322, 1405, 1384, 1412],
        delta: '+2.0% vs. prior 30 days',
        trend: 'up',
      },
      {
        label: 'Pending over 180 days',
        value: '412',
        data: [468, 455, 449, 437, 431, 412],
        delta: '\u22124.4% vs. prior 30 days',
        trend: 'up',
        sparkColor: 'var(--color-success)',
      },
    ],
  };

  protected readonly kpis = computed(() => this.byPeriod[this.period()]);
}
`,html:`<section class="flex flex-col gap-4" aria-labelledby="kpi-grid-heading">
  <div class="flex flex-wrap items-end justify-between gap-4">
    <scsc-heading id="kpi-grid-heading" [level]="3">Civil Division at a glance</scsc-heading>
    <div class="w-44">
      <scsc-form-field label="Period" for="kpi-grid-period">
        <select
          scsc-select
          id="kpi-grid-period"
          size="sm"
          (change)="period.set($any($event.target).value)"
        >
          <option value="7d" selected>Last 7 days</option>
          <option value="30d">Last 30 days</option>
        </select>
      </scsc-form-field>
    </div>
  </div>

  <!-- Three across only on wide screens: each tile needs about 15rem for value + sparkline. -->
  <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    @for (k of kpis(); track k.label) {
      <scsc-stat-trend
        [label]="k.label"
        [value]="k.value"
        [data]="k.data"
        [delta]="k.delta"
        [trend]="k.trend"
        [sparkColor]="k.sparkColor ?? 'var(--color-secondary)'"
      />
    }
  </div>
</section>
`},"stat-trend-sentiment":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStatTrend } from '@scscourt/design/charts';

@Component({
  selector: 'app-stat-trend-sentiment-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStatTrend],
  template: \`
    <!-- trend sets the sentiment (good / bad / neutral) directly; goodDirection="down" derives it
         from the delta's sign for metrics where lower is better. Both are spoken: "Down, better". -->
    <div class="grid max-w-3xl gap-4 sm:grid-cols-2">
      <scsc-stat-trend
        label="Dispositions (7d)"
        value="611"
        [data]="dispositions"
        delta="+5.2% vs. prior week"
        trend="up"
      />
      <scsc-stat-trend
        label="Median days to first hearing"
        value="38"
        [data]="daysToHearing"
        delta="\u22124 days vs. prior month"
        goodDirection="down"
        sparkColor="var(--color-success)"
      />
      <scsc-stat-trend
        label="Cases pending over 180 days"
        value="412"
        [data]="backlog"
        delta="+1.7% vs. prior week"
        goodDirection="down"
        sparkColor="var(--color-error)"
      />
      <scsc-stat-trend
        label="Self-help center visits (7d)"
        value="2,040"
        [data]="visits"
        delta="No change vs. prior week"
        trend="flat"
      />
    </div>
  \`,
})
export class StatTrendSentimentDemo {
  protected readonly dispositions = [540, 562, 571, 566, 590, 581, 611];
  protected readonly daysToHearing = [52, 49, 50, 46, 44, 42, 38];
  protected readonly backlog = [388, 391, 395, 402, 398, 405, 412];
  protected readonly visits = [2010, 2080, 1990, 2050, 2020, 2040, 2040];
}
`,html:`<!-- trend sets the sentiment (good / bad / neutral) directly; goodDirection="down" derives it
     from the delta's sign for metrics where lower is better. Both are spoken: "Down, better". -->
<div class="grid max-w-3xl gap-4 sm:grid-cols-2">
  <scsc-stat-trend
    label="Dispositions (7d)"
    value="611"
    [data]="dispositions"
    delta="+5.2% vs. prior week"
    trend="up"
  />
  <scsc-stat-trend
    label="Median days to first hearing"
    value="38"
    [data]="daysToHearing"
    delta="\u22124 days vs. prior month"
    goodDirection="down"
    sparkColor="var(--color-success)"
  />
  <scsc-stat-trend
    label="Cases pending over 180 days"
    value="412"
    [data]="backlog"
    delta="+1.7% vs. prior week"
    goodDirection="down"
    sparkColor="var(--color-error)"
  />
  <scsc-stat-trend
    label="Self-help center visits (7d)"
    value="2,040"
    [data]="visits"
    delta="No change vs. prior week"
    trend="flat"
  />
</div>
`}};var J={slug:`stat-trend`,name:`Stat Trend`,classes:[`ScscStatTrend`],category:`Charts`,whenToUse:[`Dashboard KPI tiles where the recent direction matters as much as the number: filings this week, backlog, queue depth. Three or four tiles in a grid is the usual shape.`,'`value` is displayed verbatim: format it yourself (`"1,284"`, `"96.4%"`) so thousands separators and units match the rest of the page.',"`trend` colours the `delta` by sentiment (`up` = good, `down` = bad, `flat` = neutral), not by arithmetic sign. A shrinking backlog is `up`. The arrow follows the sign of `delta` (`+`, `-`, `−`); set `direction` when the text has no sign.","The sparkline is a fixed 100px beside the value, so a tile needs about 15rem. Go three across only where the container is wide (`xl:` beside a sidebar), as the dashboard demo does.","For a plain number with no history use `scsc-stat`; for a full chart use `scsc-line-chart`."],setup:e(`ScscStatTrend`),demos:[{id:`stat-trend-basic`,title:`Basic`,description:"One tile: a pre-formatted `value`, the series, and a `delta` with its `trend`.",component:m,source:u[`stat-trend-basic`]},{id:`stat-trend-sentiment`,title:`Sentiment, not sign`,description:"A falling wait time is good news (`up`), a growing backlog is `down`; `sparkColor` can repeat the sentiment.",component:v,source:u[`stat-trend-sentiment`]},{id:`stat-trend-grid`,title:`Dashboard KPI row`,description:"A section heading, a period select and three tiles rendered from one `computed` list.",component:g,source:u[`stat-trend-grid`]}],a11y:['Label, value and delta are plain text; the sparkline is an image named by the `trendOf` label ("New filings trend"; "Tendencia: …" in Spanish), so each tile is fully announced.','The delta carries an arrow and visually hidden words for the direction and whether it is good ("Up, better: +3.9% vs. prior week"; words from `provideScscChartLabels()`), so the colour is never the only cue.',"The sentiment comes from `trend`, or from comparing the direction with `goodDirection` when you set it (`down` for a backlog).","Give a KPI row a heading (or `aria-labelledby` on its section) so the group has a name in the landmarks and headings lists."],aria:["The arrow is `aria-hidden`; direction and sentiment are `sr-only` text before the delta."],appMustProvide:["A `delta` that makes sense on its own, and `goodDirection` (or `trend`) so better and worse are stated."],related:[`stat`,`sparkline`,`line-chart`,`card`]};export{J as STAT_TREND_DOCS};