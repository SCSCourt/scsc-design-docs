import{Hs as y_,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,os as k_,ra as Af,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import"./chunk-BgxDSBe6.js";import{t as V}from"./chunk-CalRHdtX.js";import{n as o,t as e}from"./chunk-CoJGHy_m.js";var h=class t{dispositions=[{label:`Judgment`,value:214},{label:`Dismissal`,value:187},{label:`Settlement`,value:143},{label:`Transfer`,value:67}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-pie-chart-basic-demo`]],decls:2,vars:1,consts:[[`title`,`Dispositions by type (30 days)`,1,`max-w-xl`],[`label`,`Dispositions by type, last 30 days`,`description`,`Judgments and dismissals make up more than half of the 611 dispositions.`,3,`data`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-pie-chart`,1),Lf()),e&2&&(Jb(),Pv(`data`,a.dispositions))},dependencies:[mN,V],encapsulation:2})};var m=class t{topics=[{label:`Family law`,value:812},{label:`Evictions`,value:506},{label:`Small claims`,value:391},{label:`Guardianship`,value:204},{label:`Other`,value:127}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-pie-chart-donut-demo`]],decls:2,vars:3,consts:[[`title`,`Self-help center visits by topic`,1,`max-w-xl`],[`centerLabel`,`2,040`,`label`,`Self-help center visits by topic this week: 2,040 in total`,3,`data`,`innerRadius`,`size`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-pie-chart`,1),Lf()),e&2&&(Jb(),Pv(`data`,a.topics)(`innerRadius`,.62)(`size`,180))},dependencies:[mN,V],encapsulation:2})};var E=(t,s)=>s.value;function M(t,s){if(t&1&&(Ga(0,`option`,3),G_(1),Lf()),t&2){let e=s.$implicit,a=y_();Pv(`value`,e.value)(`selected`,e.value===a.width()),Jb(),nD(e.label)}}var u=class t{widths=[{value:`max-w-full`,label:`Full width`},{value:`max-w-sm`,label:`Narrow (384px)`},{value:`max-w-60`,label:`Phone (240px)`}];width=q(`max-w-full`);languages=[{label:`Spanish`,value:1240},{label:`Vietnamese`,value:386},{label:`Mandarin`,value:212},{label:`Tagalog`,value:148},{label:`Punjabi`,value:96},{label:`Other`,value:171}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-pie-chart-patterns-demo`]],decls:7,vars:3,consts:[[`title`,`Interpreter requests by language`,1,`max-w-2xl`],[`label`,`Chart width`,`for`,`pie-width`,1,`mb-4`,`max-w-48`],[`scsc-select`,``,`id`,`pie-width`,3,`change`],[3,`value`,`selected`],[`pattern`,``,`label`,`Interpreter requests by language, September 2026`,3,`data`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(_){return a.width.set(_.target.value)}),o_(3,M,2,3,`option`,3,E),Lf()(),Ga(5,`div`),uc(6,`scsc-pie-chart`,4),Lf()()),e&2&&(Jb(3),i_(a.widths),Jb(2),k_(a.width()),Jb(),Pv(`data`,a.languages))},dependencies:[mN,Vn,V,On],encapsulation:2})};var b={"pie-chart-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscPieChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-pie-chart-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscPieChart],
  template: \`
    <scsc-card title="Dispositions by type (30 days)" class="max-w-xl">
      <!-- Legend buttons hide and show segments; Tab to the pie and use the arrow keys to read each one. -->
      <scsc-pie-chart
        [data]="dispositions"
        label="Dispositions by type, last 30 days"
        description="Judgments and dismissals make up more than half of the 611 dispositions."
      />
    </scsc-card>
  \`,
})
export class PieChartBasicDemo {
  protected readonly dispositions: ScscChartDatum[] = [
    { label: 'Judgment', value: 214 },
    { label: 'Dismissal', value: 187 },
    { label: 'Settlement', value: 143 },
    { label: 'Transfer', value: 67 },
  ];
}
`,html:`<scsc-card title="Dispositions by type (30 days)" class="max-w-xl">
  <!-- Legend buttons hide and show segments; Tab to the pie and use the arrow keys to read each one. -->
  <scsc-pie-chart
    [data]="dispositions"
    label="Dispositions by type, last 30 days"
    description="Judgments and dismissals make up more than half of the 611 dispositions."
  />
</scsc-card>
`},"pie-chart-donut":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard } from '@scscourt/design';
import { ScscPieChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-pie-chart-donut-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscPieChart],
  template: \`
    <scsc-card title="Self-help center visits by topic" class="max-w-xl">
      <!-- innerRadius above 0 makes a donut; the centre label is the one number to take away. -->
      <scsc-pie-chart
        [data]="topics"
        [innerRadius]="0.62"
        [size]="180"
        centerLabel="2,040"
        label="Self-help center visits by topic this week: 2,040 in total"
      />
    </scsc-card>
  \`,
})
export class PieChartDonutDemo {
  protected readonly topics: ScscChartDatum[] = [
    { label: 'Family law', value: 812 },
    { label: 'Evictions', value: 506 },
    { label: 'Small claims', value: 391 },
    { label: 'Guardianship', value: 204 },
    { label: 'Other', value: 127 },
  ];
}
`,html:`<scsc-card title="Self-help center visits by topic" class="max-w-xl">
  <!-- innerRadius above 0 makes a donut; the centre label is the one number to take away. -->
  <scsc-pie-chart
    [data]="topics"
    [innerRadius]="0.62"
    [size]="180"
    centerLabel="2,040"
    label="Self-help center visits by topic this week: 2,040 in total"
  />
</scsc-card>
`},"pie-chart-patterns":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscCard, ScscFormField, ScscSelect } from '@scscourt/design';
import { ScscPieChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-pie-chart-patterns-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscFormField, ScscPieChart, ScscSelect],
  template: \`
    <scsc-card title="Interpreter requests by language" class="max-w-2xl">
      <scsc-form-field label="Chart width" for="pie-width" class="mb-4 max-w-48">
        <select scsc-select id="pie-width" (change)="width.set($any($event.target).value)">
          @for (w of widths; track w.value) {
            <option [value]="w.value" [selected]="w.value === width()">{{ w.label }}</option>
          }
        </select>
      </scsc-form-field>
      <!-- pattern adds a fill pattern per segment, so no reader depends on telling colours apart.
           The chart measures its container: when direct labels no longer fit, it drops them and
           the legend carries the names. -->
      <div [class]="width()">
        <scsc-pie-chart
          [data]="languages"
          pattern
          label="Interpreter requests by language, September 2026"
        />
      </div>
    </scsc-card>
  \`,
})
export class PieChartPatternsDemo {
  protected readonly widths = [
    { value: 'max-w-full', label: 'Full width' },
    { value: 'max-w-sm', label: 'Narrow (384px)' },
    { value: 'max-w-60', label: 'Phone (240px)' },
  ];
  protected readonly width = signal('max-w-full');
  protected readonly languages: ScscChartDatum[] = [
    { label: 'Spanish', value: 1240 },
    { label: 'Vietnamese', value: 386 },
    { label: 'Mandarin', value: 212 },
    { label: 'Tagalog', value: 148 },
    { label: 'Punjabi', value: 96 },
    { label: 'Other', value: 171 },
  ];
}
`,html:`<scsc-card title="Interpreter requests by language" class="max-w-2xl">
  <scsc-form-field label="Chart width" for="pie-width" class="mb-4 max-w-48">
    <select scsc-select id="pie-width" (change)="width.set($any($event.target).value)">
      @for (w of widths; track w.value) {
        <option [value]="w.value" [selected]="w.value === width()">{{ w.label }}</option>
      }
    </select>
  </scsc-form-field>
  <!-- pattern adds a fill pattern per segment, so no reader depends on telling colours apart.
       The chart measures its container: when direct labels no longer fit, it drops them and
       the legend carries the names. -->
  <div [class]="width()">
    <scsc-pie-chart
      [data]="languages"
      pattern
      label="Interpreter requests by language, September 2026"
    />
  </div>
</scsc-card>
`}};var X={slug:`pie-chart`,name:`Pie Chart`,classes:[`ScscPieChart`],category:`Charts`,summary:"Shares of one whole, as a pie or (with `innerRadius`) a donut, with gaps between segments, direct labels and a legend that hides and shows segments.",whenToUse:["Parts of a single total, two to six of them (dispositions by type, visits by topic). To compare amounts rather than shares, or with more than six parts, use `scsc-bar-chart`: lengths are easier to compare than angles.",`Segments are labelled directly ("Judgment 35%") with leader lines where they fit: wide enough segments, no overlaps, text inside the side gutters. The rest are named by the legend, the tooltip and the data table.`,`Percentages are of the visible total: hiding a segment in the legend re-divides the pie. The data table always shows the full data.`,"`innerRadius` is a fraction of the radius: 0 draws a pie, about 0.6 a donut, and `centerLabel` then prints the total or the headline share in the hole. `scsc-donut-chart` is the same component as a fixed-size preset.","The chart fills its container up to `size` (200px), and draws at 1:1 so the 12px labels never shrink. Below about 300px it drops the direct labels."],setup:e(`ScscPieChart, type ScscChartDatum`),demos:[{id:`pie-chart-basic`,title:`Pie with legend and direct labels`,description:"Four segments with gaps, direct labels with percentages, and a legend whose buttons hide a segment. `description` gives the takeaway.",component:h,source:b[`pie-chart-basic`]},{id:`pie-chart-donut`,title:`Donut with a centre label`,description:"`innerRadius` 0.62 and `centerLabel` for the total.",component:m,source:b[`pie-chart-donut`]},{id:`pie-chart-patterns`,title:`Pattern fills, at any width`,description:"`pattern` adds a fill pattern per segment. Narrow the container: the chart shrinks, and drops its direct labels when they no longer fit.",component:u,source:b[`pie-chart-patterns`]}],keyboard:o,aria:["A `<figure>` named by `label` (a visually hidden `<figcaption>`) and described by `description`.",'The plot is one `role="group"` tab stop; each segment is spoken as "Judgment, 214 (35%)" through a polite live region.',"Legend entries are `<button aria-pressed>`: pressed means shown.",'"Show data table" is a disclosure button (`aria-expanded`) for a captioned `<table>` of every segment, value and share.'],a11y:["Colour is never the only cue: segments are separated by gaps, labelled directly or in the legend, and `pattern` adds fill patterns. The palette is 3 : 1 against the surface and between neighbouring segments in every theme.",`Direct labels and the tooltip are 12px text at full or /70 ink.`,`Motion: the active segment lifts out 4px, with no movement under reduced motion.`],appMustProvide:["A `label` (required) that says what and when."],related:[`donut-chart`,`bar-chart`,`stat`,`table`]};export{X as PIE_CHART_DOCS};