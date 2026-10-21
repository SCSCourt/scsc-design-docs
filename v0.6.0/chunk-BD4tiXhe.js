import{Hs as y_,Ms as uc,Na as Jb,Ps as ut,So as Zv,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ra as Af,ta as $f,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import"./chunk-BgxDSBe6.js";import{n as de}from"./chunk-CalRHdtX.js";import{n as o,t as e}from"./chunk-CoJGHy_m.js";var T=(c,a)=>a.label;function _(c,a){if(c&1&&(Ga(0,`li`,5),uc(1,`span`,6),G_(2),Ga(3,`span`,7),G_(4),Lf()()),c&2){let e=a.$implicit;Jb(),Zv(`background`,e.color),Jb(),$f(` `,e.label,` `),Jb(2),$f(``,e.value,`%`)}}var b=class c{notices=[{label:`Delivered`,value:99,color:`var(--color-success)`},{label:`Bounced`,value:1,color:`var(--color-error)`}];static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-donut-chart-basic-demo`]],decls:8,vars:1,consts:[[1,`flex`,`items-center`,`gap-4`],[`centerLabel`,`99%`,`label`,`E-filing notices, last 24 hours: 99% delivered, 1% bounced`,3,`data`],[1,`text-sm`],[1,`font-medium`],[1,`mt-1`,`space-y-1`],[1,`flex`,`items-center`,`gap-2`],[`aria-hidden`,`true`,1,`inline-block`,`size-2.5`,`rounded-full`],[1,`tnum`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`figure`,0),uc(1,`scsc-donut-chart`,1),Ga(2,`figcaption`,2)(3,`p`,3),G_(4,`E-filing notices, last 24 hours`),Lf(),Ga(5,`ul`,4),o_(6,_,5,4,`li`,5,T),Lf()()()),e&2&&(Jb(),Pv(`data`,o.notices),Jb(5),i_(o.notices))},dependencies:[de],encapsulation:2})};var P=(c,a)=>a.label;function M(c,a){if(c&1&&(Ga(0,`li`,9),uc(1,`span`,10),Ga(2,`span`,11),G_(3),Lf(),Ga(4,`span`,12),G_(5),Lf(),Ga(6,`span`,13),G_(7),Lf()()),c&2){let e=a.$implicit,o=y_();Jb(),Zv(`background`,e.color),Jb(2),nD(e.label),Jb(2),nD(e.value),Jb(2),$f(``,o.share(e),`%`)}}var y=class c{colors={Civil:`var(--color-primary)`,Family:`var(--color-secondary)`,Probate:`var(--color-success)`,Other:`color-mix(in oklab, var(--color-base-content) 50%, var(--color-base-100))`};counts={downtown:[[`Civil`,512],[`Family`,148],[`Probate`,154],[`Other`,220]],fjc:[[`Civil`,36],[`Family`,618],[`Probate`,12],[`Other`,95]]};courthouse=q(`downtown`);mix=ut(()=>this.counts[this.courthouse()].map(([a,e])=>({label:a,value:e,color:this.colors[a]})));total=ut(()=>this.mix().reduce((a,e)=>a+e.value,0));chartLabel=ut(()=>`Open cases by type, ${this.total()} total: `+this.mix().map(a=>`${a.label} ${a.value}`).join(`, `));share(a){return Math.round(a.value/this.total()*100)}static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-donut-chart-card-demo`]],decls:13,vars:5,consts:[[`title`,`Open cases by type`,1,`max-w-md`],[1,`flex`,`flex-col`,`gap-4`],[`label`,`Courthouse`,`for`,`donut-card-courthouse`],[`scsc-select`,``,`id`,`donut-card-courthouse`,`size`,`sm`,3,`change`],[`value`,`downtown`,`selected`,``],[`value`,`fjc`],[1,`flex`,`flex-wrap`,`items-center`,`gap-6`],[3,`data`,`size`,`thickness`,`centerLabel`,`label`],[1,`min-w-44`,`flex-1`,`space-y-1.5`,`text-sm`],[1,`flex`,`items-center`,`gap-2`],[`aria-hidden`,`true`,1,`inline-block`,`size-2.5`,`shrink-0`,`rounded-full`],[1,`flex-1`],[1,`tnum`,`font-medium`],[1,`tnum`,`w-10`,`text-right`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`scsc-card`,0)(1,`div`,1)(2,`scsc-form-field`,2)(3,`select`,3),lc(`change`,function(N){return o.courthouse.set(N.target.value)}),Ga(4,`option`,4),G_(5,`Downtown Superior Court`),Lf(),Ga(6,`option`,5),G_(7,`Family Justice Center`),Lf()()(),Ga(8,`div`,6),uc(9,`scsc-donut-chart`,7),Ga(10,`ul`,8),o_(11,M,8,5,`li`,9,P),Lf()()()()),e&2&&(Jb(9),Pv(`data`,o.mix())(`size`,140)(`thickness`,22)(`centerLabel`,o.total().toLocaleString(`en-US`))(`label`,o.chartLabel()),Jb(2),i_(o.mix()))},dependencies:[mN,de,Vn,On],encapsulation:2})};var v=class c{checkIn=[{label:`Checked in`,value:186,color:`var(--color-primary)`},{label:`Not yet`,value:74,color:`var(--color-base-300)`}];checkInLabel=`Jurors checked in today: 186 of 260 summoned, 72%`;empty=[{label:`None yet`,value:1,color:`var(--color-base-300)`}];static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-donut-chart-sizes-demo`]],decls:17,vars:11,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-8`,`text-sm`],[1,`flex`,`flex-col`,`items-center`,`gap-2`],[3,`data`,`size`,`thickness`,`label`],[`centerLabel`,`72%`,3,`data`,`label`],[`centerLabel`,`186 / 260`,3,`data`,`size`,`thickness`,`label`],[`centerLabel`,`0`,`label`,`Jurors checked in for Oct 5: none yet`,3,`data`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`figure`,1),uc(2,`scsc-donut-chart`,2),Ga(3,`figcaption`),G_(4,`64 px · 72% checked in`),Lf()(),Ga(5,`figure`,1),uc(6,`scsc-donut-chart`,3),Ga(7,`figcaption`),G_(8,`120 px (default)`),Lf()(),Ga(9,`figure`,1),uc(10,`scsc-donut-chart`,4),Ga(11,`figcaption`),G_(12,`160 px, thick ring`),Lf()(),Ga(13,`figure`,1),uc(14,`scsc-donut-chart`,5),Ga(15,`figcaption`),G_(16,`No data yet`),Lf()()()),e&2&&(Jb(2),Pv(`data`,o.checkIn)(`size`,64)(`thickness`,8)(`label`,o.checkInLabel),Jb(4),Pv(`data`,o.checkIn)(`label`,o.checkInLabel),Jb(4),Pv(`data`,o.checkIn)(`size`,160)(`thickness`,28)(`label`,o.checkInLabel),Jb(4),Pv(`data`,o.empty))},dependencies:[de],encapsulation:2})};var x={"donut-chart-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDonutChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-donut-chart-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDonutChart],
  template: \`
    <figure class="flex items-center gap-4">
      <scsc-donut-chart
        [data]="notices"
        centerLabel="99%"
        label="E-filing notices, last 24 hours: 99% delivered, 1% bounced"
      />
      <figcaption class="text-sm">
        <p class="font-medium">E-filing notices, last 24 hours</p>
        <!-- No built-in legend: repeat each colour next to its label and value. -->
        <ul class="mt-1 space-y-1">
          @for (d of notices; track d.label) {
            <li class="flex items-center gap-2">
              <span
                class="inline-block size-2.5 rounded-full"
                [style.background]="d.color"
                aria-hidden="true"
              ></span>
              {{ d.label }} <span class="tnum text-base-content/70">{{ d.value }}%</span>
            </li>
          }
        </ul>
      </figcaption>
    </figure>
  \`,
})
export class DonutChartBasicDemo {
  /** Status colours fit here: the segments are delivery states, labelled in the legend. */
  protected readonly notices: ScscChartDatum[] = [
    { label: 'Delivered', value: 99, color: 'var(--color-success)' },
    { label: 'Bounced', value: 1, color: 'var(--color-error)' },
  ];
}
`,html:`<figure class="flex items-center gap-4">
  <scsc-donut-chart
    [data]="notices"
    centerLabel="99%"
    label="E-filing notices, last 24 hours: 99% delivered, 1% bounced"
  />
  <figcaption class="text-sm">
    <p class="font-medium">E-filing notices, last 24 hours</p>
    <!-- No built-in legend: repeat each colour next to its label and value. -->
    <ul class="mt-1 space-y-1">
      @for (d of notices; track d.label) {
        <li class="flex items-center gap-2">
          <span
            class="inline-block size-2.5 rounded-full"
            [style.background]="d.color"
            aria-hidden="true"
          ></span>
          {{ d.label }} <span class="tnum text-base-content/70">{{ d.value }}%</span>
        </li>
      }
    </ul>
  </figcaption>
</figure>
`},"donut-chart-card":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCard, ScscFormField, ScscSelect } from '@scscourt/design';
import { ScscDonutChart, type ScscChartDatum } from '@scscourt/design/charts';

type Courthouse = 'downtown' | 'fjc';

@Component({
  selector: 'app-donut-chart-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscDonutChart, ScscFormField, ScscSelect],
  template: \`
    <scsc-card title="Open cases by type" class="max-w-md">
      <div class="flex flex-col gap-4">
        <scsc-form-field label="Courthouse" for="donut-card-courthouse">
          <select
            scsc-select
            id="donut-card-courthouse"
            size="sm"
            (change)="courthouse.set($any($event.target).value)"
          >
            <option value="downtown" selected>Downtown Superior Court</option>
            <option value="fjc">Family Justice Center</option>
          </select>
        </scsc-form-field>

        <div class="flex flex-wrap items-center gap-6">
          <scsc-donut-chart
            [data]="mix()"
            [size]="140"
            [thickness]="22"
            [centerLabel]="total().toLocaleString('en-US')"
            [label]="chartLabel()"
          />
          <!-- The legend is a real list: label, count and share, with the colour as a cue. -->
          <ul class="min-w-44 flex-1 space-y-1.5 text-sm">
            @for (d of mix(); track d.label) {
              <li class="flex items-center gap-2">
                <span
                  class="inline-block size-2.5 shrink-0 rounded-full"
                  [style.background]="d.color"
                  aria-hidden="true"
                ></span>
                <span class="flex-1">{{ d.label }}</span>
                <span class="tnum font-medium">{{ d.value }}</span>
                <span class="tnum w-10 text-right text-base-content/70">{{ share(d) }}%</span>
              </li>
            }
          </ul>
        </div>
      </div>
    </scsc-card>
  \`,
})
export class DonutChartCardDemo {
  /**
   * Fixed colour per case type, so switching courthouse never repaints a category. Primary and
   * info are near-identical blues in the dark theme, so they are not used together here.
   */
  private readonly colors: Record<string, string> = {
    Civil: 'var(--color-primary)',
    Family: 'var(--color-secondary)',
    Probate: 'var(--color-success)',
    Other: 'color-mix(in oklab, var(--color-base-content) 50%, var(--color-base-100))',
  };

  private readonly counts: Record<Courthouse, [string, number][]> = {
    downtown: [
      ['Civil', 512],
      ['Family', 148],
      ['Probate', 154],
      ['Other', 220],
    ],
    fjc: [
      ['Civil', 36],
      ['Family', 618],
      ['Probate', 12],
      ['Other', 95],
    ],
  };

  protected readonly courthouse = signal<Courthouse>('downtown');

  protected readonly mix = computed<ScscChartDatum[]>(() =>
    this.counts[this.courthouse()].map(([label, value]) => ({
      label,
      value,
      color: this.colors[label],
    })),
  );
  protected readonly total = computed(() => this.mix().reduce((sum, d) => sum + d.value, 0));
  protected readonly chartLabel = computed(
    () =>
      \`Open cases by type, \${this.total()} total: \` +
      this.mix()
        .map((d) => \`\${d.label} \${d.value}\`)
        .join(', '),
  );

  protected share(d: ScscChartDatum): number {
    return Math.round((d.value / this.total()) * 100);
  }
}
`,html:`<scsc-card title="Open cases by type" class="max-w-md">
  <div class="flex flex-col gap-4">
    <scsc-form-field label="Courthouse" for="donut-card-courthouse">
      <select
        scsc-select
        id="donut-card-courthouse"
        size="sm"
        (change)="courthouse.set($any($event.target).value)"
      >
        <option value="downtown" selected>Downtown Superior Court</option>
        <option value="fjc">Family Justice Center</option>
      </select>
    </scsc-form-field>

    <div class="flex flex-wrap items-center gap-6">
      <scsc-donut-chart
        [data]="mix()"
        [size]="140"
        [thickness]="22"
        [centerLabel]="total().toLocaleString('en-US')"
        [label]="chartLabel()"
      />
      <!-- The legend is a real list: label, count and share, with the colour as a cue. -->
      <ul class="min-w-44 flex-1 space-y-1.5 text-sm">
        @for (d of mix(); track d.label) {
          <li class="flex items-center gap-2">
            <span
              class="inline-block size-2.5 shrink-0 rounded-full"
              [style.background]="d.color"
              aria-hidden="true"
            ></span>
            <span class="flex-1">{{ d.label }}</span>
            <span class="tnum font-medium">{{ d.value }}</span>
            <span class="tnum w-10 text-right text-base-content/70">{{ share(d) }}%</span>
          </li>
        }
      </ul>
    </div>
  </div>
</scsc-card>
`},"donut-chart-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDonutChart, type ScscChartDatum } from '@scscourt/design/charts';

@Component({
  selector: 'app-donut-chart-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDonutChart],
  template: \`
    <div class="flex flex-wrap items-end gap-8 text-sm">
      <figure class="flex flex-col items-center gap-2">
        <!-- Too small for a centre label: the caption carries the number. -->
        <scsc-donut-chart [data]="checkIn" [size]="64" [thickness]="8" [label]="checkInLabel" />
        <figcaption>64 px \xB7 72% checked in</figcaption>
      </figure>

      <figure class="flex flex-col items-center gap-2">
        <scsc-donut-chart [data]="checkIn" centerLabel="72%" [label]="checkInLabel" />
        <figcaption>120 px (default)</figcaption>
      </figure>

      <figure class="flex flex-col items-center gap-2">
        <scsc-donut-chart
          [data]="checkIn"
          [size]="160"
          [thickness]="28"
          centerLabel="186 / 260"
          [label]="checkInLabel"
        />
        <figcaption>160 px, thick ring</figcaption>
      </figure>

      <figure class="flex flex-col items-center gap-2">
        <!-- Nothing to show yet: one neutral segment keeps the ring's shape. -->
        <scsc-donut-chart
          [data]="empty"
          centerLabel="0"
          label="Jurors checked in for Oct 5: none yet"
        />
        <figcaption>No data yet</figcaption>
      </figure>
    </div>
  \`,
})
export class DonutChartSizesDemo {
  protected readonly checkIn: ScscChartDatum[] = [
    { label: 'Checked in', value: 186, color: 'var(--color-primary)' },
    { label: 'Not yet', value: 74, color: 'var(--color-base-300)' },
  ];
  protected readonly checkInLabel = 'Jurors checked in today: 186 of 260 summoned, 72%';

  protected readonly empty: ScscChartDatum[] = [
    { label: 'None yet', value: 1, color: 'var(--color-base-300)' },
  ];
}
`,html:`<div class="flex flex-wrap items-end gap-8 text-sm">
  <figure class="flex flex-col items-center gap-2">
    <!-- Too small for a centre label: the caption carries the number. -->
    <scsc-donut-chart [data]="checkIn" [size]="64" [thickness]="8" [label]="checkInLabel" />
    <figcaption>64 px \xB7 72% checked in</figcaption>
  </figure>

  <figure class="flex flex-col items-center gap-2">
    <scsc-donut-chart [data]="checkIn" centerLabel="72%" [label]="checkInLabel" />
    <figcaption>120 px (default)</figcaption>
  </figure>

  <figure class="flex flex-col items-center gap-2">
    <scsc-donut-chart
      [data]="checkIn"
      [size]="160"
      [thickness]="28"
      centerLabel="186 / 260"
      [label]="checkInLabel"
    />
    <figcaption>160 px, thick ring</figcaption>
  </figure>

  <figure class="flex flex-col items-center gap-2">
    <!-- Nothing to show yet: one neutral segment keeps the ring's shape. -->
    <scsc-donut-chart
      [data]="empty"
      centerLabel="0"
      label="Jurors checked in for Oct 5: none yet"
    />
    <figcaption>No data yet</figcaption>
  </figure>
</div>
`}};var ee={slug:`donut-chart`,name:`Donut Chart`,classes:[`ScscDonutChart`],category:`Charts`,whenToUse:['Part-to-whole with two to five segments (delivered vs. bounced, open cases by type). More segments than that are unreadable as arcs; fold the tail into "Other" or use `scsc-bar-chart`.',"`centerLabel` is the one number the reader should take away: a percentage or the total. Leave it empty on small rings and put the number in the caption.","A fixed-size preset of `scsc-pie-chart` (`size`, `thickness`): segments have gaps, and the plot reads each one aloud from the keyboard. The legend and direct labels are off by default, because a ring this small usually sits beside its own legend; turn on `legend` (toggles segments) or `directLabels`, or use `scsc-pie-chart` for the full layout.","Without `color` segments take the chart palette (3 : 1 on the surface and between neighbours). With your own legend, set `color` on each datum so a filter never repaints a category.",`With no data, pass a single neutral segment (as the sizes demo does) so the ring keeps its shape instead of disappearing.`,"For a single progress value with no categories, `scsc-progress-ring` is lighter."],setup:e(`ScscDonutChart, type ScscChartDatum`),demos:[{id:`donut-chart-basic`,title:`Share with a headline`,description:"Two segments, a `centerLabel` and a hand-made legend; status colours fit because the segments are states.",component:b,source:x[`donut-chart-basic`]},{id:`donut-chart-sizes`,title:`Size, thickness and empty`,description:"`size` and `thickness` in px, `centerLabel` only where it fits, and a neutral ring while there is no data yet.",component:v,source:x[`donut-chart-sizes`]},{id:`donut-chart-card`,title:`In a card, with a legend list`,description:`A courthouse filter drives the mix; the legend lists count and share, and each case type keeps its colour.`,component:y,source:x[`donut-chart-card`]}],keyboard:o,a11y:['A `<figure>` named by `label`; the ring is one tab stop whose arrow keys read each segment ("Delivered, 99 (99%)") through a polite live region, and "Show data table" lists every segment.',"The legend must use text, not only colour, and the colour dots should be `aria-hidden` (as in the demos) so they are not read as unlabelled images.","`centerLabel` is drawn, not read; make sure `label` includes it."],appMustProvide:["A `label` that includes what `centerLabel` shows, and a text legend whose colour dots are `aria-hidden`."],related:[`pie-chart`,`progress-ring`,`bar-chart`,`stat`]};export{ee as DONUT_CHART_DOCS};