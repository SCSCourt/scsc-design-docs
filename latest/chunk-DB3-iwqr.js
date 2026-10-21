import{Fr as kn,Hs as y_,Ka as Ov,Ma as JT,Ms as uc,Na as Jb,Un as Za,Xa as Pv,Zo as i_,_s as o_,ks as t_,ra as Af,rr as da,ta as $f,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import"./chunk-BgxDSBe6.js";import{n as gn}from"./chunk-BiCqrzLG.js";import{t as e}from"./chunk-CoJGHy_m.js";var f=class t{filings=[31,35,33,38,40,37,41,42];filingsLabel=`New filings per week, last 8 weeks: ${this.filings.join(`, `)}`;queue=[980,1040,1010,1120,1090,1180,1204];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-sparkline-basic-demo`]],decls:11,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,`text-sm`],[1,`flex`,`items-center`,`gap-3`],[1,`flex-1`],[3,`data`,`label`],[`color`,`var(--color-info)`,3,`data`],[1,`tnum`,`font-semibold`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`p`,1)(2,`span`,2),G_(3,`New filings per week, Dept. 7`),Lf(),uc(4,`scsc-sparkline`,3),Lf(),Ga(5,`p`,1)(6,`span`,2),G_(7,`E-filing review queue`),Lf(),uc(8,`scsc-sparkline`,4),Ga(9,`span`,5),G_(10,`1,204 waiting`),Lf()()()),e&2&&(Jb(4),Pv(`data`,s.filings)(`label`,s.filingsLabel),Jb(4),Pv(`data`,s.queue))},dependencies:[gn],encapsulation:2})};var L=(t,n)=>n.name;function N(t,n){if(t&1&&(Ga(0,`p`,3),G_(1),uc(2,`scsc-sparkline`,4),Lf()),t&2){let e=n.$implicit,s=y_();Jb(),$f(` `,e.name,` `),Jb(),Pv(`data`,s.backlog)(`width`,e.width)(`height`,e.height)(`label`,s.backlogLabel)}}function O(t,n){if(t&1&&uc(0,`scsc-sparkline`,5),t&2){let e=y_().$implicit;Pv(`data`,e.values)(`color`,e.color??`var(--color-primary)`)(`label`,e.name+`, last `+e.values.length+` weeks: `+e.values.join(`, `))}}function z(t,n){t&1&&(Ga(0,`span`,6),G_(1,`Not enough data`),Lf())}function P(t,n){if(t&1&&(Ga(0,`p`,3),G_(1),JT(2,O,1,3,`scsc-sparkline`,5)(3,z,2,0,`span`,6),Lf()),t&2){let e=n.$implicit;Jb(),$f(` `,e.name,` `),Jb(),t_(e.values.length>1?2:3)}}var b=class t{backlog=[388,391,395,402,398,405,412];backlogLabel=`Cases pending over 180 days, last 7 weeks: ${this.backlog.join(`, `)}`;sizes=[{name:`Inline, 64 × 20`,width:64,height:20},{name:`Default, 96 × 28`,width:96,height:28},{name:`Tile, 160 × 40`,width:160,height:40}];trends=[{name:`Backlog shrinking`,values:[412,405,401,396,390,384,377],color:`var(--color-success)`},{name:`Backlog growing`,values:this.backlog,color:`var(--color-error)`},{name:`Dept. 30 (new)`,values:[6]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-sparkline-options-demo`]],decls:11,vars:4,consts:[[1,`grid`,`max-w-3xl`,`gap-x-12`,`gap-y-8`,`text-sm`,`sm:grid-cols-2`],[1,`flex`,`flex-col`,`gap-3`],[3,`level`,`visualLevel`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[3,`data`,`width`,`height`,`label`],[3,`data`,`color`,`label`],[1,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`section`,1)(2,`scsc-heading`,2),G_(3,`Size`),Lf(),o_(4,N,3,5,`p`,3,L),Lf(),Ga(6,`section`,1)(7,`scsc-heading`,2),G_(8,`Colour and sparse data`),Lf(),o_(9,P,4,2,`p`,3,L),Lf()()),e&2&&(Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(2),i_(s.sizes),Jb(3),Pv(`level`,3)(`visualLevel`,5),Jb(2),i_(s.trends))},dependencies:[kn,gn],encapsulation:2})};function I(t,n){if(t&1&&uc(0,`scsc-sparkline`,2),t&2){let e=y_().$implicit;Pv(`data`,e.trend)(`label`,e.department+`: pending hearings over 8 weeks, `+e.trend.join(`, `))}}function R(t,n){if(t&1&&G_(0),t&2){let e=y_(),s=e.$implicit,j=e.col;$f(` `,s[j.key],` `)}}function F(t,n){if(t&1&&JT(0,I,1,2,`scsc-sparkline`,2)(1,R,1,1),t&2){let e=n.col;t_(e.key===`trend`?0:1)}}var y=class t{columns=[{key:`department`,header:`Department`},{key:`pending`,header:`Pending`,type:`number`,width:`6rem`},{key:`trend`,header:`Last 8 weeks`,width:`8rem`}];rows=[{department:`Dept. 7 — Civil`,pending:42,trend:[31,35,33,38,40,37,41,42]},{department:`Dept. 12 — Family`,pending:18,trend:[26,24,25,22,21,19,20,18]},{department:`Dept. 3 — Probate`,pending:27,trend:[27,28,26,27,29,28,27,27]},{department:`Dept. 21 — Criminal`,pending:63,trend:[48,52,55,53,58,60,61,63]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-sparkline-table-demo`]],decls:2,vars:3,consts:[[1,`max-w-xl`,3,`columns`,`rows`,`zebra`],[`scscCell`,``],[3,`data`,`label`]],template:function(e,s){e&1&&(Ga(0,`scsc-table`,0),Ov(1,F,2,1,`ng-template`,1),Lf()),e&2&&Pv(`columns`,s.columns)(`rows`,s.rows)(`zebra`,!1)},dependencies:[da,gn,Za],encapsulation:2})};var k={"sparkline-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscSparkline } from '@scscourt/design/charts';

@Component({
  selector: 'app-sparkline-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSparkline],
  template: \`
    <div class="flex max-w-md flex-col gap-4 text-sm">
      <!-- The shape of the trend is the message: name it with label. -->
      <p class="flex items-center gap-3">
        <span class="flex-1">New filings per week, Dept. 7</span>
        <scsc-sparkline [data]="filings" [label]="filingsLabel" />
      </p>

      <!-- The number is the message: no label, so the sparkline is decorative. -->
      <p class="flex items-center gap-3">
        <span class="flex-1">E-filing review queue</span>
        <scsc-sparkline [data]="queue" color="var(--color-info)" />
        <span class="tnum font-semibold">1,204 waiting</span>
      </p>
    </div>
  \`,
})
export class SparklineBasicDemo {
  protected readonly filings = [31, 35, 33, 38, 40, 37, 41, 42];
  protected readonly filingsLabel = \`New filings per week, last 8 weeks: \${this.filings.join(', ')}\`;

  protected readonly queue = [980, 1040, 1010, 1120, 1090, 1180, 1204];
}
`,html:`<div class="flex max-w-md flex-col gap-4 text-sm">
  <!-- The shape of the trend is the message: name it with label. -->
  <p class="flex items-center gap-3">
    <span class="flex-1">New filings per week, Dept. 7</span>
    <scsc-sparkline [data]="filings" [label]="filingsLabel" />
  </p>

  <!-- The number is the message: no label, so the sparkline is decorative. -->
  <p class="flex items-center gap-3">
    <span class="flex-1">E-filing review queue</span>
    <scsc-sparkline [data]="queue" color="var(--color-info)" />
    <span class="tnum font-semibold">1,204 waiting</span>
  </p>
</div>
`},"sparkline-options":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading } from '@scscourt/design';
import { ScscSparkline } from '@scscourt/design/charts';

interface Trend {
  name: string;
  values: number[];
  color?: string;
}

@Component({
  selector: 'app-sparkline-options-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscSparkline],
  template: \`
    <div class="grid max-w-3xl gap-x-12 gap-y-8 text-sm sm:grid-cols-2">
      <section class="flex flex-col gap-3">
        <scsc-heading [level]="3" [visualLevel]="5">Size</scsc-heading>
        @for (s of sizes; track s.name) {
          <p class="flex items-center justify-between gap-3">
            {{ s.name }}
            <scsc-sparkline
              [data]="backlog"
              [width]="s.width"
              [height]="s.height"
              [label]="backlogLabel"
            />
          </p>
        }
      </section>

      <section class="flex flex-col gap-3">
        <scsc-heading [level]="3" [visualLevel]="5">Colour and sparse data</scsc-heading>
        <!-- The row text says what the colour means, so colour is never the only cue. -->
        @for (t of trends; track t.name) {
          <p class="flex items-center justify-between gap-3">
            {{ t.name }}
            @if (t.values.length > 1) {
              <scsc-sparkline
                [data]="t.values"
                [color]="t.color ?? 'var(--color-primary)'"
                [label]="t.name + ', last ' + t.values.length + ' weeks: ' + t.values.join(', ')"
              />
            } @else {
              <!-- A single point draws nothing: say so instead of showing an empty image. -->
              <span class="text-base-content/70">Not enough data</span>
            }
          </p>
        }
      </section>
    </div>
  \`,
})
export class SparklineOptionsDemo {
  protected readonly backlog = [388, 391, 395, 402, 398, 405, 412];
  protected readonly backlogLabel = \`Cases pending over 180 days, last 7 weeks: \${this.backlog.join(', ')}\`;

  protected readonly sizes = [
    { name: 'Inline, 64 \xD7 20', width: 64, height: 20 },
    { name: 'Default, 96 \xD7 28', width: 96, height: 28 },
    { name: 'Tile, 160 \xD7 40', width: 160, height: 40 },
  ];

  protected readonly trends: Trend[] = [
    {
      name: 'Backlog shrinking',
      values: [412, 405, 401, 396, 390, 384, 377],
      color: 'var(--color-success)',
    },
    { name: 'Backlog growing', values: this.backlog, color: 'var(--color-error)' },
    { name: 'Dept. 30 (new)', values: [6] },
  ];
}
`,html:`<div class="grid max-w-3xl gap-x-12 gap-y-8 text-sm sm:grid-cols-2">
  <section class="flex flex-col gap-3">
    <scsc-heading [level]="3" [visualLevel]="5">Size</scsc-heading>
    @for (s of sizes; track s.name) {
      <p class="flex items-center justify-between gap-3">
        {{ s.name }}
        <scsc-sparkline
          [data]="backlog"
          [width]="s.width"
          [height]="s.height"
          [label]="backlogLabel"
        />
      </p>
    }
  </section>

  <section class="flex flex-col gap-3">
    <scsc-heading [level]="3" [visualLevel]="5">Colour and sparse data</scsc-heading>
    <!-- The row text says what the colour means, so colour is never the only cue. -->
    @for (t of trends; track t.name) {
      <p class="flex items-center justify-between gap-3">
        {{ t.name }}
        @if (t.values.length > 1) {
          <scsc-sparkline
            [data]="t.values"
            [color]="t.color ?? 'var(--color-primary)'"
            [label]="t.name + ', last ' + t.values.length + ' weeks: ' + t.values.join(', ')"
          />
        } @else {
          <!-- A single point draws nothing: say so instead of showing an empty image. -->
          <span class="text-base-content/70">Not enough data</span>
        }
      </p>
    }
  </section>
</div>
`},"sparkline-table":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCellDef, ScscColumn, ScscTable } from '@scscourt/design';
import { ScscSparkline } from '@scscourt/design/charts';

interface QueueRow {
  department: string;
  pending: number;
  trend: number[];
}

@Component({
  selector: 'app-sparkline-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCellDef, ScscSparkline, ScscTable],
  template: \`
    <scsc-table [columns]="columns" [rows]="rows" [zebra]="false" class="max-w-xl">
      <ng-template scscCell let-row let-col="col">
        @if (col.key === 'trend') {
          <!-- Each row names its own trend; the department text carries the identity. -->
          <scsc-sparkline
            [data]="row.trend"
            [label]="row.department + ': pending hearings over 8 weeks, ' + row.trend.join(', ')"
          />
        } @else {
          {{ row[col.key] }}
        }
      </ng-template>
    </scsc-table>
  \`,
})
export class SparklineTableDemo {
  protected readonly columns: ScscColumn<QueueRow>[] = [
    { key: 'department', header: 'Department' },
    { key: 'pending', header: 'Pending', type: 'number', width: '6rem' },
    { key: 'trend', header: 'Last 8 weeks', width: '8rem' },
  ];

  protected readonly rows: QueueRow[] = [
    { department: 'Dept. 7 \u2014 Civil', pending: 42, trend: [31, 35, 33, 38, 40, 37, 41, 42] },
    { department: 'Dept. 12 \u2014 Family', pending: 18, trend: [26, 24, 25, 22, 21, 19, 20, 18] },
    { department: 'Dept. 3 \u2014 Probate', pending: 27, trend: [27, 28, 26, 27, 29, 28, 27, 27] },
    { department: 'Dept. 21 \u2014 Criminal', pending: 63, trend: [48, 52, 55, 53, 58, 60, 61, 63] },
  ];
}
`,html:`<scsc-table [columns]="columns" [rows]="rows" [zebra]="false" class="max-w-xl">
  <ng-template scscCell let-row let-col="col">
    @if (col.key === 'trend') {
      <!-- Each row names its own trend; the department text carries the identity. -->
      <scsc-sparkline
        [data]="row.trend"
        [label]="row.department + ': pending hearings over 8 weeks, ' + row.trend.join(', ')"
      />
    } @else {
      {{ row[col.key] }}
    }
  </ng-template>
</scsc-table>
`}};var Z={slug:`sparkline`,name:`Sparkline`,classes:[`ScscSparkline`],category:`Charts`,whenToUse:[`A word-sized trend next to a number: queue depth in a table row, filings per week beside a total. It has no axes, ticks or labels by design.`,"When the shape of the trend is the message, pass `label` so the SVG becomes an image with a name; when the adjacent number already says it, leave `label` empty and the sparkline is decorative.","For anything a reader must read values off, use `scsc-line-chart`; for a metric tile with a built-in sparkline, `scsc-stat-trend`.",`The line is scaled to the series min/max, so a flat series with tiny noise still fills the height (and a constant series lies on the bottom edge); keep that in mind when comparing rows.`,`A series needs at least two points to draw a line. Render a short text fallback for one point or none, as the options demo does.`],setup:e(`ScscSparkline`),demos:[{id:`sparkline-basic`,title:`Labelled or decorative`,description:"Give it a `label` when the trend is the point; leave it out beside a number that already says it.",component:f,source:k[`sparkline-basic`]},{id:`sparkline-options`,title:`Size, colour and sparse data`,description:"`width`/`height` in px, a `color` whose meaning the row text repeats, and a text fallback when there is only one point.",component:b,source:k[`sparkline-options`]},{id:`sparkline-table`,title:`In a table column`,description:"A trend column in `scsc-table` via the `scscCell` template; each row labels its own sparkline.",component:y,source:k[`sparkline-table`]}],a11y:['With `label` set the SVG gets `role="img"` and that name; without it, `aria-hidden="true"`. There is no in-between, so decide per placement.',`Put the values (or the direction, "rising from 31 to 42") in the label; the name is all a screen-reader user gets.`,`Colour is the only encoding of series identity; put the identity in visible text (the row label) rather than relying on the stroke colour.`],related:[`stat-trend`,`line-chart`,`stat`,`table`]};export{Z as SPARKLINE_DOCS};