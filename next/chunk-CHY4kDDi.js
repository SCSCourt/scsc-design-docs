import{At as NP,Cs as rM,Ms as uc,Na as Jb,Ps as ut,Vr as mN,Xa as Pv,cs as lc,ra as Af,ta as $f,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import{t as V}from"./chunk-BvKVxBhA.js";import{t as e}from"./chunk-CoJGHy_m.js";var g={"calendar-heatmap-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCalendarHeatmap, type ScscHeatmapCell } from '@scscourt/design/charts';

const pad = (n: number) => String(n).padStart(2, '0');
const iso = (d: Date) => \`\${d.getFullYear()}-\${pad(d.getMonth() + 1)}-\${pad(d.getDate())}\`;

@Component({
  selector: 'app-calendar-heatmap-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendarHeatmap],
  template: \`
    <figure>
      <scsc-calendar-heatmap
        [data]="filingsPerDay"
        label="Filings per day, 12 weeks from June 7, 2026. Weekdays are busiest, Mondays most of all; weekends are empty."
      />
      <figcaption class="mt-2 text-sm text-base-content/70">
        Each column is a week (Sunday to Saturday), 12 weeks from {{ filingsPerDay[0].label }}.
        Hover a cell for the date and count.
      </figcaption>
    </figure>
  \`,
})
export class CalendarHeatmapBasicDemo {
  /** 84 cells = 12 weeks \xD7 7 days, column-major, starting on a Sunday so rows are Sun\u2013Sat. */
  protected readonly filingsPerDay: ScscHeatmapCell[] = Array.from({ length: 84 }, (_, i) => {
    const day = new Date(2026, 5, 7);
    day.setDate(day.getDate() + i);
    const weekday = day.getDay();
    const weekend = weekday === 0 || weekday === 6;
    const value = weekend ? 0 : 18 + ((i * 7) % 23) + (weekday === 1 ? 12 : 0);
    return { label: iso(day), value };
  });
}
`,html:`<figure>
  <scsc-calendar-heatmap
    [data]="filingsPerDay"
    label="Filings per day, 12 weeks from June 7, 2026. Weekdays are busiest, Mondays most of all; weekends are empty."
  />
  <figcaption class="mt-2 text-sm text-base-content/70">
    Each column is a week (Sunday to Saturday), 12 weeks from {{ filingsPerDay[0].label }}.
    Hover a cell for the date and count.
  </figcaption>
</figure>
`},"calendar-heatmap-card":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscCard,
  ScscDescriptionList,
  ScscFormField,
  ScscSelect,
  type ScscDescriptionItem,
} from '@scscourt/design';
import { ScscCalendarHeatmap, type ScscHeatmapCell } from '@scscourt/design/charts';

type Division = 'civil' | 'family' | 'probate';

/** Deterministic fixture: 12 weeks from Sunday, Jul 5, 2026; weekends and Labor Day empty. */
function filingsPerDay(base: number, step: number): ScscHeatmapCell[] {
  return Array.from({ length: 84 }, (_, i) => {
    const day = new Date(2026, 6, 5 + i);
    const weekday = day.getDay();
    const closed = weekday === 0 || weekday === 6 || (day.getMonth() === 8 && day.getDate() === 7);
    const value = closed
      ? 0
      : base + ((i * step) % 13) + (weekday === 1 ? Math.round(base / 2) : 0);
    return {
      label: day.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      value,
    };
  });
}

@Component({
  selector: 'app-calendar-heatmap-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendarHeatmap, ScscCard, ScscDescriptionList, ScscFormField, ScscSelect],
  template: \`
    <scsc-card title="Filings per day" class="max-w-xl">
      <div class="flex flex-col gap-4">
        <scsc-form-field label="Division" for="heatmap-card-division" class="max-w-60">
          <select
            scsc-select
            id="heatmap-card-division"
            size="sm"
            (change)="division.set($any($event.target).value)"
          >
            <option value="civil" selected>Civil</option>
            <option value="family">Family</option>
            <option value="probate">Probate</option>
          </select>
        </scsc-form-field>

        <div class="overflow-x-auto">
          <scsc-calendar-heatmap [data]="cells()" [label]="chartLabel()" />
        </div>

        <!-- A summary in words; "Show data table" under the grid lists every day. -->
        <scsc-description-list [items]="summary()" />
      </div>
    </scsc-card>
  \`,
})
export class CalendarHeatmapCardDemo {
  private readonly data: Record<Division, ScscHeatmapCell[]> = {
    civil: filingsPerDay(24, 7),
    family: filingsPerDay(15, 5),
    probate: filingsPerDay(6, 3),
  };
  private readonly names: Record<Division, string> = {
    civil: 'Civil',
    family: 'Family',
    probate: 'Probate',
  };

  protected readonly division = signal<Division>('civil');
  protected readonly cells = computed(() => this.data[this.division()]);

  private readonly total = computed(() => this.cells().reduce((sum, c) => sum + c.value, 0));
  private readonly busiest = computed(() =>
    this.cells().reduce((max, c) => (c.value > max.value ? c : max)),
  );

  protected readonly chartLabel = computed(
    () =>
      \`\${this.names[this.division()]} filings per day, 12 weeks from Sunday, July 5, 2026: \` +
      \`\${this.total().toLocaleString('en-US')} in total, busiest \${this.busiest().label}. \` +
      'Weekdays are busy, Mondays most of all; weekends and Labor Day are empty.',
  );

  protected readonly summary = computed<ScscDescriptionItem[]>(() => [
    { term: 'Total filings', value: this.total().toLocaleString('en-US'), numeric: true },
    {
      term: 'Busiest day',
      value: \`\${this.busiest().label} (\${this.busiest().value})\`,
      numeric: true,
    },
    {
      term: 'Days closed',
      value: String(this.cells().filter((c) => c.value === 0).length),
      numeric: true,
    },
    { term: 'Period', value: 'Jul 5 to Sep 26, 2026' },
  ]);
}
`,html:`<scsc-card title="Filings per day" class="max-w-xl">
  <div class="flex flex-col gap-4">
    <scsc-form-field label="Division" for="heatmap-card-division" class="max-w-60">
      <select
        scsc-select
        id="heatmap-card-division"
        size="sm"
        (change)="division.set($any($event.target).value)"
      >
        <option value="civil" selected>Civil</option>
        <option value="family">Family</option>
        <option value="probate">Probate</option>
      </select>
    </scsc-form-field>

    <div class="overflow-x-auto">
      <scsc-calendar-heatmap [data]="cells()" [label]="chartLabel()" />
    </div>

    <!-- A summary in words; "Show data table" under the grid lists every day. -->
    <scsc-description-list [items]="summary()" />
  </div>
</scsc-card>
`},"calendar-heatmap-legend":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCalendarHeatmap, type ScscHeatmapCell } from '@scscourt/design/charts';

@Component({
  selector: 'app-calendar-heatmap-legend-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendarHeatmap],
  template: \`
    <figure class="inline-flex flex-col gap-2">
      <scsc-calendar-heatmap
        [data]="hoursInSession"
        [color]="color"
        label="Dept. 7 hours in session per day, 8 weeks from Monday, August 3, 2026. Four to seven hours on weekdays, dark on weekends and on Labor Day, September 7."
        [valueFormat]="{ maximumFractionDigits: 1 }"
      />
      <!-- The built-in legend prints each level's range of hours under its swatch. -->
      <figcaption class="text-sm text-base-content/70">
        Dept. 7 courtroom hours per day. Rows run Monday to Sunday.
      </figcaption>
    </figure>
  \`,
})
export class CalendarHeatmapLegendDemo {
  protected readonly color = 'var(--color-secondary)';

  /** 56 cells starting on a Monday, so the top row is Monday and the bottom row Sunday. */
  protected readonly hoursInSession: ScscHeatmapCell[] = Array.from({ length: 56 }, (_, i) => {
    const day = new Date(2026, 7, 3 + i);
    const label = day.toLocaleDateString('en-US', { dateStyle: 'medium' });
    const weekend = day.getDay() === 0 || day.getDay() === 6;
    const laborDay = day.getMonth() === 8 && day.getDate() === 7;
    const value = weekend || laborDay ? 0 : 4 + ((i * 5) % 7) / 2;
    return { label, value };
  });
}
`,html:`<figure class="inline-flex flex-col gap-2">
  <scsc-calendar-heatmap
    [data]="hoursInSession"
    [color]="color"
    label="Dept. 7 hours in session per day, 8 weeks from Monday, August 3, 2026. Four to seven hours on weekdays, dark on weekends and on Labor Day, September 7."
    [valueFormat]="{ maximumFractionDigits: 1 }"
  />
  <!-- The built-in legend prints each level's range of hours under its swatch. -->
  <figcaption class="text-sm text-base-content/70">
    Dept. 7 courtroom hours per day. Rows run Monday to Sunday.
  </figcaption>
</figure>
`}};var $=t=>String(t).padStart(2,`0`);var T=t=>`${t.getFullYear()}-${$(t.getMonth()+1)}-${$(t.getDate())}`;var f=class t{filingsPerDay=Array.from({length:84},(s,e)=>{let a=new Date(2026,5,7);a.setDate(a.getDate()+e);let o=a.getDay(),h=o===0||o===6?0:18+e*7%23+(o===1?12:0);return{label:T(a),value:h}});static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-heatmap-basic-demo`]],decls:4,vars:2,consts:[[`label`,`Filings per day, 12 weeks from June 7, 2026. Weekdays are busiest, Mondays most of all; weekends are empty.`,3,`data`],[1,`mt-2`,`text-sm`,`text-base-content/70`]],template:function(e,a){e&1&&(Ga(0,`figure`),uc(1,`scsc-calendar-heatmap`,0),Ga(2,`figcaption`,1),G_(3),Lf()()),e&2&&(Jb(),Pv(`data`,a.filingsPerDay),Jb(2),$f(` Each column is a week (Sunday to Saturday), 12 weeks from `,a.filingsPerDay[0].label,`. Hover a cell for the date and count. `))},dependencies:[V],encapsulation:2})};function S(t,s){return Array.from({length:84},(e,a)=>{let o=new Date(2026,6,5+a),r=o.getDay(),D=r===0||r===6||o.getMonth()===8&&o.getDate()===7?0:t+a*s%13+(r===1?Math.round(t/2):0);return{label:o.toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`}),value:D}})}var v=class t{data={civil:S(24,7),family:S(15,5),probate:S(6,3)};names={civil:`Civil`,family:`Family`,probate:`Probate`};division=q(`civil`);cells=ut(()=>this.data[this.division()]);total=ut(()=>this.cells().reduce((s,e)=>s+e.value,0));busiest=ut(()=>this.cells().reduce((s,e)=>e.value>s.value?e:s));chartLabel=ut(()=>`${this.names[this.division()]} filings per day, 12 weeks from Sunday, July 5, 2026: ${this.total().toLocaleString(`en-US`)} in total, busiest ${this.busiest().label}. Weekdays are busy, Mondays most of all; weekends and Labor Day are empty.`);summary=ut(()=>[{term:`Total filings`,value:this.total().toLocaleString(`en-US`),numeric:!0},{term:`Busiest day`,value:`${this.busiest().label} (${this.busiest().value})`,numeric:!0},{term:`Days closed`,value:String(this.cells().filter(s=>s.value===0).length),numeric:!0},{term:`Period`,value:`Jul 5 to Sep 26, 2026`}]);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-heatmap-card-demo`]],decls:13,vars:3,consts:[[`title`,`Filings per day`,1,`max-w-xl`],[1,`flex`,`flex-col`,`gap-4`],[`label`,`Division`,`for`,`heatmap-card-division`,1,`max-w-60`],[`scsc-select`,``,`id`,`heatmap-card-division`,`size`,`sm`,3,`change`],[`value`,`civil`,`selected`,``],[`value`,`family`],[`value`,`probate`],[1,`overflow-x-auto`],[3,`data`,`label`],[3,`items`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0)(1,`div`,1)(2,`scsc-form-field`,2)(3,`select`,3),lc(`change`,function(r){return a.division.set(r.target.value)}),Ga(4,`option`,4),G_(5,`Civil`),Lf(),Ga(6,`option`,5),G_(7,`Family`),Lf(),Ga(8,`option`,6),G_(9,`Probate`),Lf()()(),Ga(10,`div`,7),uc(11,`scsc-calendar-heatmap`,8),Lf(),uc(12,`scsc-description-list`,9),Lf()()),e&2&&(Jb(11),Pv(`data`,a.cells())(`label`,a.chartLabel()),Jb(),Pv(`items`,a.summary()))},dependencies:[V,mN,NP,Vn,On],encapsulation:2})};var I=()=>({maximumFractionDigits:1});var b=class t{color=`var(--color-secondary)`;hoursInSession=Array.from({length:56},(s,e)=>{let a=new Date(2026,7,3+e),o=a.toLocaleDateString(`en-US`,{dateStyle:`medium`}),r=a.getDay()===0||a.getDay()===6,h=a.getMonth()===8&&a.getDate()===7;return{label:o,value:r||h?0:4+e*5%7/2}});static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-heatmap-legend-demo`]],decls:4,vars:4,consts:[[1,`inline-flex`,`flex-col`,`gap-2`],[`label`,`Dept. 7 hours in session per day, 8 weeks from Monday, August 3, 2026. Four to seven hours on weekdays, dark on weekends and on Labor Day, September 7.`,3,`data`,`color`,`valueFormat`],[1,`text-sm`,`text-base-content/70`]],template:function(e,a){e&1&&(Ga(0,`figure`,0),uc(1,`scsc-calendar-heatmap`,1),Ga(2,`figcaption`,2),G_(3,` Dept. 7 courtroom hours per day. Rows run Monday to Sunday. `),Lf()()),e&2&&(Jb(),Pv(`data`,a.hoursInSession)(`color`,a.color)(`valueFormat`,rM(3,I)))},dependencies:[V],encapsulation:2})};var X={slug:`calendar-heatmap`,name:`Calendar Heatmap`,classes:[`ScscCalendarHeatmap`],category:`Charts`,whenToUse:[`Daily activity over weeks or months where the pattern matters more than any one value: filings per day, courtroom usage, self-help visits. Weekly rhythm (empty weekends, busy Mondays) jumps out immediately.`,`Cells are laid out column-major, seven per column. Start the data on the day you want in the top row (Sunday in the basic demo, Monday in the legend demo) and pass exactly one cell per day, zeros included.`,`Intensity is relative to the largest value in the series, so one outlier day flattens everything else. Cap outliers before passing the data if that happens.`,"Values fall into five levels (empty, then quarters of the largest value). The built-in legend prints the range of each level under its swatch (`legend`, on by default); there is no axis, so say in the caption which day each row is.","For a scheduling calendar with events, use `scsc-calendar`; this is a chart, not a picker."],setup:e(`ScscCalendarHeatmap, type ScscHeatmapCell`),demos:[{id:`calendar-heatmap-basic`,title:`Filings per day, 12 weeks`,description:"Deterministic fixture with empty weekends and heavier Mondays; hover a cell for its `<title>`.",component:f,source:g[`calendar-heatmap-basic`]},{id:`calendar-heatmap-legend`,title:`Colour, week start and legend`,description:"`color` in the secondary hue, data starting on a Monday, and a hand-made opacity key that matches the cells.",component:b,source:g[`calendar-heatmap-legend`]},{id:`calendar-heatmap-card`,title:`In a card, with the numbers in text`,description:"A division select swaps the series; `scsc-description-list` gives the total, busiest day and closed days.",component:v,source:g[`calendar-heatmap-card`]}],a11y:['A `<figure>` named by `label`: describe the period and the pattern there. The grid itself is hidden from assistive tech; "Show data table" lists every day and its value.',"Each cell has a `<title>` tooltip on hover; the data table is the keyboard and screen-reader route to the same values.",`The legend is text (value ranges), so the levels are not told apart by opacity alone.`,`The minimum opacity is 0.08 so empty days stay visible against the background in both themes.`],related:[`calendar`,`line-chart`,`bar-chart`]};export{X as CALENDAR_HEATMAP_DOCS};