import{Et as MR,Hs as y_,I as EP,Ms as uc,Na as Jb,Ps as ut,Ss as rD,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,kt as NE,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var L=(s,t)=>t.label;function T(s,t){if(s&1&&(Ga(0,`figure`,1),uc(1,`scsc-progress-ring`,2),Ga(2,`figcaption`,3),G_(3),Lf()()),s&2){let e=t.$implicit;Jb(),Pv(`value`,e.value)(`size`,e.size)(`thickness`,e.thickness)(`label`,e.label),Jb(2),nD(e.label)}}var f=class s{metrics=[{label:`Jurors checked in`,value:68,size:48,thickness:5},{label:`Calendar reviewed`,value:42,size:64,thickness:6},{label:`Filings processed`,value:91,size:96,thickness:8}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-progress-ring-basic-demo`]],decls:3,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-8`],[1,`flex`,`flex-col`,`items-center`,`gap-2`],[3,`value`,`size`,`thickness`,`label`],[1,`text-sm`,`text-base-content/70`]],template:function(e,i){e&1&&(Ga(0,`div`,0),o_(1,T,4,5,`figure`,1,L),Lf()),e&2&&(Jb(),i_(i.metrics))},dependencies:[MR],encapsulation:2})};var j=(s,t)=>t.department;function E(s,t){if(s&1&&(Ga(0,`li`,1),uc(1,`scsc-progress-ring`,2),Ga(2,`div`,3)(3,`p`,4),G_(4),Lf(),Ga(5,`scsc-text`,5),G_(6),Lf()(),Ga(7,`scsc-text`,6),G_(8),Lf()()),s&2){let e=t.$implicit,i=y_();Jb(),Pv(`value`,i.percent(e))(`size`,56)(`thickness`,5)(`label`,e.department+` calendar heard`),Jb(3),nD(e.department),Jb(2),nD(e.judge),Jb(2),rD(``,e.heard,` of `,e.total,` matters`)}}var h=class s{calendars=[{department:`Dept. 3`,judge:`Hon. M. Delgado`,heard:14,total:14},{department:`Dept. 7`,judge:`Hon. L. Okafor`,heard:9,total:16},{department:`Dept. 21`,judge:`Hon. R. Whitfield`,heard:2,total:11}];percent(t){return Math.round(t.heard/t.total*100)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-progress-ring-list-demo`]],decls:3,vars:0,consts:[[`aria-label`,`Morning calendars, Oct 14, 2026`,1,`max-w-md`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`gap-4`,`px-4`,`py-3`],[3,`value`,`size`,`thickness`,`label`],[1,`min-w-0`,`flex-1`],[1,`font-medium`],[`tone`,`muted`,`size`,`sm`,1,`block`],[`size`,`sm`,`tnum`,``]],template:function(e,i){e&1&&(Ga(0,`scsc-list`,0),o_(1,E,9,8,`li`,1,j),Lf()),e&2&&(Jb(),i_(i.calendars))},dependencies:[EP,MR,NE],encapsulation:2})};var b=class s{goal=5e3;collected=q(1305);percent=ut(()=>Math.round(this.collected()/this.goal*100));pay(t){this.collected.update(e=>Math.min(this.goal,e+t))}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-progress-ring-live-demo`]],decls:13,vars:4,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-6`],[`label`,`Fees collected today`,3,`value`,`size`],[1,`flex`,`flex-col`,`gap-2`],[1,`text-sm`],[1,`font-semibold`,`tabular-nums`],[1,`text-base-content/70`],[1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`variant`,`ghost`,3,`click`]],template:function(e,i){e&1&&(Ga(0,`div`,0),uc(1,`scsc-progress-ring`,1),Ga(2,`div`,2)(3,`p`,3)(4,`span`,4),G_(5),Lf(),Ga(6,`span`,5),G_(7),Lf()(),Ga(8,`div`,6)(9,`scsc-button`,7),lc(`click`,function(){return i.pay(435)}),G_(10,`Record $435 filing fee`),Lf(),Ga(11,`scsc-button`,8),lc(`click`,function(){return i.collected.set(0)}),G_(12,`Reset`),Lf()()()()),e&2&&(Jb(),Pv(`value`,i.percent())(`size`,80),Jb(4),$f(`$`,i.collected()),Jb(2),$f(`of $`,i.goal,` collected today`))},dependencies:[sn,MR],encapsulation:2})};var v={"progress-ring-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscProgressRing } from '@scscourt/design';

@Component({
  selector: 'app-progress-ring-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscProgressRing],
  template: \`
    <div class="flex flex-wrap items-end gap-8">
      @for (m of metrics; track m.label) {
        <figure class="flex flex-col items-center gap-2">
          <scsc-progress-ring
            [value]="m.value"
            [size]="m.size"
            [thickness]="m.thickness"
            [label]="m.label"
          />
          <figcaption class="text-sm text-base-content/70">{{ m.label }}</figcaption>
        </figure>
      }
    </div>
  \`,
})
export class ProgressRingBasicDemo {
  protected readonly metrics = [
    { label: 'Jurors checked in', value: 68, size: 48, thickness: 5 },
    { label: 'Calendar reviewed', value: 42, size: 64, thickness: 6 },
    { label: 'Filings processed', value: 91, size: 96, thickness: 8 },
  ];
}
`,html:`<div class="flex flex-wrap items-end gap-8">
  @for (m of metrics; track m.label) {
    <figure class="flex flex-col items-center gap-2">
      <scsc-progress-ring
        [value]="m.value"
        [size]="m.size"
        [thickness]="m.thickness"
        [label]="m.label"
      />
      <figcaption class="text-sm text-base-content/70">{{ m.label }}</figcaption>
    </figure>
  }
</div>
`},"progress-ring-list":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscList, ScscProgressRing, ScscText } from '@scscourt/design';

interface Calendar {
  department: string;
  judge: string;
  heard: number;
  total: number;
}

@Component({
  selector: 'app-progress-ring-list-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscList, ScscProgressRing, ScscText],
  template: \`
    <scsc-list
      class="max-w-md rounded-box border border-base-300 bg-base-100"
      aria-label="Morning calendars, Oct 14, 2026"
    >
      @for (c of calendars; track c.department) {
        <li class="flex items-center gap-4 px-4 py-3">
          <!-- value is a percentage: compute it from the counts. -->
          <scsc-progress-ring
            [value]="percent(c)"
            [size]="56"
            [thickness]="5"
            [label]="c.department + ' calendar heard'"
          />
          <div class="min-w-0 flex-1">
            <p class="font-medium">{{ c.department }}</p>
            <scsc-text tone="muted" size="sm" class="block">{{ c.judge }}</scsc-text>
          </div>
          <scsc-text size="sm" tnum>{{ c.heard }} of {{ c.total }} matters</scsc-text>
        </li>
      }
    </scsc-list>
  \`,
})
export class ProgressRingListDemo {
  protected readonly calendars: Calendar[] = [
    { department: 'Dept. 3', judge: 'Hon. M. Delgado', heard: 14, total: 14 },
    { department: 'Dept. 7', judge: 'Hon. L. Okafor', heard: 9, total: 16 },
    { department: 'Dept. 21', judge: 'Hon. R. Whitfield', heard: 2, total: 11 },
  ];

  protected percent(c: Calendar): number {
    return Math.round((c.heard / c.total) * 100);
  }
}
`,html:`<scsc-list
  class="max-w-md rounded-box border border-base-300 bg-base-100"
  aria-label="Morning calendars, Oct 14, 2026"
>
  @for (c of calendars; track c.department) {
    <li class="flex items-center gap-4 px-4 py-3">
      <!-- value is a percentage: compute it from the counts. -->
      <scsc-progress-ring
        [value]="percent(c)"
        [size]="56"
        [thickness]="5"
        [label]="c.department + ' calendar heard'"
      />
      <div class="min-w-0 flex-1">
        <p class="font-medium">{{ c.department }}</p>
        <scsc-text tone="muted" size="sm" class="block">{{ c.judge }}</scsc-text>
      </div>
      <scsc-text size="sm" tnum>{{ c.heard }} of {{ c.total }} matters</scsc-text>
    </li>
  }
</scsc-list>
`},"progress-ring-live":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscProgressRing } from '@scscourt/design';

@Component({
  selector: 'app-progress-ring-live-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscProgressRing],
  template: \`
    <div class="flex flex-wrap items-center gap-6">
      <scsc-progress-ring [value]="percent()" [size]="80" label="Fees collected today" />
      <div class="flex flex-col gap-2">
        <p class="text-sm">
          <span class="font-semibold tabular-nums">\\\${{ collected() }}</span>
          <span class="text-base-content/70">of \\\${{ goal }} collected today</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <scsc-button size="sm" variant="secondary" outline (click)="pay(435)"
            >Record $435 filing fee</scsc-button
          >
          <scsc-button size="sm" variant="ghost" (click)="collected.set(0)">Reset</scsc-button>
        </div>
      </div>
    </div>
  \`,
})
export class ProgressRingLiveDemo {
  protected readonly goal = 5000;
  protected readonly collected = signal(1305);
  protected readonly percent = computed(() => Math.round((this.collected() / this.goal) * 100));

  protected pay(amount: number): void {
    this.collected.update((c) => Math.min(this.goal, c + amount));
  }
}
`,html:`<div class="flex flex-wrap items-center gap-6">
  <scsc-progress-ring [value]="percent()" [size]="80" label="Fees collected today" />
  <div class="flex flex-col gap-2">
    <p class="text-sm">
      <span class="font-semibold tabular-nums">\${{ collected() }}</span>
      <span class="text-base-content/70">of \${{ goal }} collected today</span>
    </p>
    <div class="flex flex-wrap gap-2">
      <scsc-button size="sm" variant="secondary" outline (click)="pay(435)"
        >Record $435 filing fee</scsc-button
      >
      <scsc-button size="sm" variant="ghost" (click)="collected.set(0)">Reset</scsc-button>
    </div>
  </div>
</div>
`}};var K={slug:`progress-ring`,name:`Progress Ring`,classes:[`ScscProgressRing`],category:`Overlays & Feedback`,whenToUse:[`A single percentage that deserves a glance-able shape: jurors checked in, fees collected against a daily goal, a dashboard tile.`,"`value` is always 0–100; compute the percentage yourself (as the live demo does) when the underlying numbers are not percentages.","For linear work with a known total (uploads, batches) use `scsc-progress`; it reads better with a count beside it.",'The ring is SVG and scales with `size`, but the centre label is a fixed 14px: below about 56px "100%" no longer fits inside the ring. Keep `thickness` around a tenth of `size`.'],demos:[{id:`progress-ring-basic`,title:`Sizes`,description:"Three rings at 48 / 64 / 96 px with matching `thickness`, each captioned.",component:f,source:v[`progress-ring-basic`]},{id:`progress-ring-live`,title:`Live value`,description:"A `computed()` percentage from the underlying amounts; the ring animates as it changes.",component:b,source:v[`progress-ring-live`]},{id:`progress-ring-list`,title:`In a list`,description:`Compact 56px rings per department, each labelled, with the underlying counts as text beside them.`,component:h,source:v[`progress-ring-list`]}],a11y:['The SVG has `role="progressbar"` with `aria-valuenow/min/max` and `aria-valuetext` (the percentage in the active locale). `label` is required, and an empty one logs a dev-mode warning.',`The centre text is the percentage only; the caption or heading next to the ring must say what it measures.`,`Colour is the theme primary on a base-300 track; the number carries the meaning, so no extra contrast work is needed.`],aria:['`role="progressbar"`, `aria-label`, `aria-valuenow` (clamped 0–100), `aria-valuetext`.'],appMustProvide:["A `label` saying what the ring measures."],related:[`progress`,`stat`,`spinner`,`donut-chart`]};export{K as PROGRESS_RING_DOCS};