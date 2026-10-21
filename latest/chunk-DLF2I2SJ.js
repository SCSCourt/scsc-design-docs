import{Ms as uc,Na as Jb,Ps as ut,Xa as Pv,Zo as i_,_s as o_,cs as lc,f as AP,gs as oM,ms as nu,pi as sn,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var u=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-stat-grid-demo`]],decls:5,vars:3,consts:[[1,`grid`,`gap-4`,`sm:grid-cols-2`,`lg:grid-cols-4`],[`label`,`Open cases`,`delta`,`+6 this week`,`trend`,`up`,`icon`,`folder-open`,3,`value`],[`label`,`Hearings today`,`icon`,`calendar-days`,3,`value`],[`label`,`Avg. days to disposition`,`delta`,`−9 vs. last quarter`,`trend`,`down`,`goodDirection`,`down`,`icon`,`timer`,3,`value`],[`label`,`Fees collected (MTD)`,`value`,`$48,210`,`delta`,`+3.1%`,`trend`,`up`,`icon`,`receipt`]],template:function(e,o){e&1&&(Ga(0,`div`,0),uc(1,`scsc-stat`,1)(2,`scsc-stat`,2)(3,`scsc-stat`,3)(4,`scsc-stat`,4),Lf()),e&2&&(Jb(),Pv(`value`,128),Jb(),Pv(`value`,14),Jb(),Pv(`value`,212))},dependencies:[AP],encapsulation:2})};var x=t=>({queue:t});var L=(t,a)=>a.queue;function I(t,a){if(t&1&&(Ga(0,`a`,1),uc(1,`scsc-stat`,2),Lf()),t&2){let e=a.$implicit;Pv(`queryParams`,oM(6,x,e.queue)),Jb(),Pv(`label`,e.label)(`value`,e.value)(`delta`,e.delta)(`trend`,e.trend)(`icon`,e.icon)}}var m=class t{tiles=[{label:`Filings to review`,value:23,delta:`+5 since 8:00 AM`,trend:`flat`,icon:`inbox`,queue:`review`},{label:`Accepted today`,value:41,delta:`+12 vs. yesterday`,trend:`up`,icon:`file-check`,queue:`accepted`},{label:`Fee waivers pending`,value:11,delta:`4 older than 5 days`,trend:`flat`,icon:`hand-coins`,queue:`fee-waivers`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-stat-links-demo`]],decls:3,vars:0,consts:[[1,`grid`,`gap-4`,`sm:grid-cols-3`],[`routerLink`,`.`,1,`block`,`rounded-box`,`transition-shadow`,`hover:elevate-md`,3,`queryParams`],[3,`label`,`value`,`delta`,`trend`,`icon`]],template:function(e,o){e&1&&(Ga(0,`div`,0),o_(1,I,2,8,`a`,1,L),Lf()),e&2&&(Jb(),i_(o.tiles))},dependencies:[nu,AP],encapsulation:2})};var p=class t{summoned=60;checkedIn=q(42);delta=ut(()=>`${this.summoned-this.checkedIn()} of ${this.summoned} still expected`);checkIn(){this.checkedIn.update(a=>Math.min(this.summoned,a+1))}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-stat-live-demo`]],decls:5,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`label`,`Jurors checked in`,`icon`,`users`,3,`value`,`delta`,`trend`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`]],template:function(e,o){e&1&&(Ga(0,`div`,0),uc(1,`scsc-stat`,1),Ga(2,`div`)(3,`scsc-button`,2),lc(`click`,function(){return o.checkIn()}),G_(4,`Check in`),Lf()()()),e&2&&(Jb(),Pv(`value`,o.checkedIn())(`delta`,o.delta())(`trend`,o.checkedIn()>=o.summoned?`up`:`flat`))},dependencies:[sn,AP],encapsulation:2})};var h={"stat-grid":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscStat } from '@scscourt/design';

@Component({
  selector: 'app-stat-grid-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscStat],
  template: \`
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <scsc-stat
        label="Open cases"
        [value]="128"
        delta="+6 this week"
        trend="up"
        icon="folder-open"
      />
      <scsc-stat label="Hearings today" [value]="14" icon="calendar-days" />
      <scsc-stat
        label="Avg. days to disposition"
        [value]="212"
        delta="\u22129 vs. last quarter"
        trend="down"
        goodDirection="down"
        icon="timer"
      />
      <scsc-stat
        label="Fees collected (MTD)"
        value="$48,210"
        delta="+3.1%"
        trend="up"
        icon="receipt"
      />
    </div>
  \`,
})
export class StatGridDemo {}
`,html:`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <scsc-stat
    label="Open cases"
    [value]="128"
    delta="+6 this week"
    trend="up"
    icon="folder-open"
  />
  <scsc-stat label="Hearings today" [value]="14" icon="calendar-days" />
  <scsc-stat
    label="Avg. days to disposition"
    [value]="212"
    delta="\u22129 vs. last quarter"
    trend="down"
    goodDirection="down"
    icon="timer"
  />
  <scsc-stat
    label="Fees collected (MTD)"
    value="$48,210"
    delta="+3.1%"
    trend="up"
    icon="receipt"
  />
</div>
`},"stat-links":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscStat } from '@scscourt/design';

interface Tile {
  label: string;
  value: number;
  delta: string;
  trend: 'up' | 'down' | 'flat';
  icon: string;
  queue: string;
}

@Component({
  selector: 'app-stat-links-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscStat],
  template: \`
    <div class="grid gap-4 sm:grid-cols-3">
      @for (t of tiles; track t.queue) {
        <!-- Each tile opens its work queue; the whole tile's text is the link name. -->
        <a
          routerLink="."
          [queryParams]="{ queue: t.queue }"
          class="block rounded-box transition-shadow hover:elevate-md"
        >
          <scsc-stat
            [label]="t.label"
            [value]="t.value"
            [delta]="t.delta"
            [trend]="t.trend"
            [icon]="t.icon"
          />
        </a>
      }
    </div>
  \`,
})
export class StatLinksDemo {
  protected readonly tiles: Tile[] = [
    {
      label: 'Filings to review',
      value: 23,
      delta: '+5 since 8:00 AM',
      trend: 'flat',
      icon: 'inbox',
      queue: 'review',
    },
    {
      label: 'Accepted today',
      value: 41,
      delta: '+12 vs. yesterday',
      trend: 'up',
      icon: 'file-check',
      queue: 'accepted',
    },
    {
      label: 'Fee waivers pending',
      value: 11,
      delta: '4 older than 5 days',
      trend: 'flat',
      icon: 'hand-coins',
      queue: 'fee-waivers',
    },
  ];
}
`,html:`<div class="grid gap-4 sm:grid-cols-3">
  @for (t of tiles; track t.queue) {
    <!-- Each tile opens its work queue; the whole tile's text is the link name. -->
    <a
      routerLink="."
      [queryParams]="{ queue: t.queue }"
      class="block rounded-box transition-shadow hover:elevate-md"
    >
      <scsc-stat
        [label]="t.label"
        [value]="t.value"
        [delta]="t.delta"
        [trend]="t.trend"
        [icon]="t.icon"
      />
    </a>
  }
</div>
`},"stat-live":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscStat } from '@scscourt/design';

@Component({
  selector: 'app-stat-live-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscStat],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <scsc-stat
        label="Jurors checked in"
        [value]="checkedIn()"
        [delta]="delta()"
        [trend]="checkedIn() >= summoned ? 'up' : 'flat'"
        icon="users"
      />
      <div>
        <scsc-button variant="neutral" outline size="sm" (click)="checkIn()">Check in</scsc-button>
      </div>
    </div>
  \`,
})
export class StatLiveDemo {
  protected readonly summoned = 60;
  protected readonly checkedIn = signal(42);

  protected readonly delta = computed(
    () => \`\${this.summoned - this.checkedIn()} of \${this.summoned} still expected\`,
  );

  protected checkIn(): void {
    this.checkedIn.update((n) => Math.min(this.summoned, n + 1));
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <scsc-stat
    label="Jurors checked in"
    [value]="checkedIn()"
    [delta]="delta()"
    [trend]="checkedIn() >= summoned ? 'up' : 'flat'"
    icon="users"
  />
  <div>
    <scsc-button variant="neutral" outline size="sm" (click)="checkIn()">Check in</scsc-button>
  </div>
</div>
`}};var H={slug:`stat`,name:`Stat`,classes:[`ScscStat`],category:`Data Display`,whenToUse:[`A row of headline numbers at the top of a dashboard or case page. Three or four tiles; more becomes a table.`,"Format `value` yourself (currency, thousands separators) — it is rendered as given, with tabular numerals.",'`trend` only colours the `delta`: `up` green, `down` red. When "down" is good (days to disposition), say so in the delta text rather than fighting the colour, or use `flat`.',`A tile that opens the matching work queue is a link around the stat; the stat itself is not interactive.`,"For a metric with its recent history, use `scsc-stat-trend` (a stat with a sparkline) from `@scscourt/design/charts`."],demos:[{id:`stat-grid`,title:`Dashboard row`,description:"Four tiles in a responsive grid: with and without `delta`, `trend` and `icon`.",component:u,source:h[`stat-grid`]},{id:`stat-live`,title:`Bound to signals`,description:"`value`, `delta` and `trend` update as the underlying signal changes.",component:p,source:h[`stat-live`]},{id:`stat-links`,title:`Tiles that open a queue`,description:"Each `scsc-stat` wrapped in a `routerLink` with `queryParams`; the tile lifts on hover and takes the focus ring.",component:m,source:h[`stat-links`]}],a11y:[`Label, value and delta are plain paragraphs read in order. The icon is decorative.`,'The delta states its direction and whether it is good in words, not just colour: an arrow plus visually hidden text ("Up, better: +6 this week"; words from `SCSC_LABELS`).',"Colour follows `goodDirection`: `up` (default) makes a rise green, `down` makes a fall green (backlog, days to judgment), `none` never colours.",`When a tile is a link, its whole text becomes the link name, so keep the label and delta short.`],aria:["The arrow is `aria-hidden`; the direction and sentiment are `sr-only` text before the delta."],appMustProvide:['`trend` (which way the number moved) and, when lower is better, `goodDirection="down"`.'],related:[`stat-trend`,`sparkline`,`card`,`progress-ring`]};export{H as STAT_DOCS};