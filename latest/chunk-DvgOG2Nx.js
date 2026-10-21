import{Ms as uc,Na as Jb,Ps as ut,Ss as rD,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,fi as si,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var m=class s{total=8;uploaded=q(3);done=ut(()=>this.uploaded()>=this.total);uploadNext(){this.uploaded.update(a=>Math.min(this.total,a+1))}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-progress-determinate-demo`]],decls:12,vars:5,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[1,`flex`,`items-baseline`,`justify-between`,`text-sm`],[`id`,`progress-upload-label`],[1,`tabular-nums`,`text-base-content/70`],[`label`,`Exhibit upload`,3,`value`,`max`],[1,`flex`,`gap-2`],[`size`,`sm`,`variant`,`secondary`,`outline`,``,3,`click`,`disabled`],[`size`,`sm`,`variant`,`ghost`,3,`click`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`span`,2),G_(3,`Uploading exhibits for 24CV012345`),Lf(),Ga(4,`span`,3),G_(5),Lf()(),uc(6,`scsc-progress`,4),Ga(7,`div`,5)(8,`scsc-button`,6),lc(`click`,function(){return o.uploadNext()}),G_(9,`Upload next file`),Lf(),Ga(10,`scsc-button`,7),lc(`click`,function(){return o.uploaded.set(0)}),G_(11,`Reset`),Lf()()()),e&2&&(Jb(5),rD(``,o.uploaded(),` / `,o.total,` files`),Jb(),Pv(`value`,o.uploaded())(`max`,o.total),Jb(2),Pv(`disabled`,o.done()))},dependencies:[sn,si],encapsulation:2})};var u=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-progress-indeterminate-demo`]],decls:4,vars:0,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-2`],[1,`text-sm`],[`tone`,`secondary`,`label`,`Searching the case index`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2,`Searching the case index…`),Lf(),uc(3,`scsc-progress`,2),Lf())},dependencies:[si],encapsulation:2})};var E=(s,a)=>a.label;function T(s,a){if(s&1&&(Ga(0,`div`,1)(1,`div`,2)(2,`span`),G_(3),Lf(),Ga(4,`span`,3),G_(5),Lf()(),uc(6,`scsc-progress`,4),Lf()),s&2){let e=a.$implicit;Jb(3),nD(e.label),Jb(2),$f(``,e.value,`%`),Jb(),Pv(`value`,e.value)(`tone`,e.tone)(`label`,e.label)}}var g=class s{rows=[{label:`Jury summons returned`,value:72,tone:`primary`},{label:`Fee waivers reviewed`,value:45,tone:`secondary`},{label:`Archived docket pages scanned`,value:30,tone:`info`},{label:`Filings accepted`,value:96,tone:`success`},{label:`Storage used`,value:83,tone:`warning`},{label:`Rejected filings`,value:12,tone:`error`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-progress-tones-demo`]],decls:3,vars:0,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[1,`flex`,`flex-col`,`gap-1`],[1,`flex`,`justify-between`,`text-sm`],[1,`tabular-nums`,`text-base-content/70`],[3,`value`,`tone`,`label`]],template:function(e,o){e&1&&(Ga(0,`div`,0),o_(1,T,7,5,`div`,1,E),Lf()),e&2&&(Jb(),i_(o.rows))},dependencies:[si],encapsulation:2})};var f={"progress-determinate":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscProgress } from '@scscourt/design';

@Component({
  selector: 'app-progress-determinate-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscProgress],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <div class="flex items-baseline justify-between text-sm">
        <span id="progress-upload-label">Uploading exhibits for 24CV012345</span>
        <span class="tabular-nums text-base-content/70">{{ uploaded() }} / {{ total }} files</span>
      </div>
      <scsc-progress [value]="uploaded()" [max]="total" label="Exhibit upload" />
      <div class="flex gap-2">
        <scsc-button
          size="sm"
          variant="secondary"
          outline
          [disabled]="done()"
          (click)="uploadNext()"
          >Upload next file</scsc-button
        >
        <scsc-button size="sm" variant="ghost" (click)="uploaded.set(0)">Reset</scsc-button>
      </div>
    </div>
  \`,
})
export class ProgressDeterminateDemo {
  protected readonly total = 8;
  protected readonly uploaded = signal(3);
  protected readonly done = computed(() => this.uploaded() >= this.total);

  protected uploadNext(): void {
    this.uploaded.update((n) => Math.min(this.total, n + 1));
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <div class="flex items-baseline justify-between text-sm">
    <span id="progress-upload-label">Uploading exhibits for 24CV012345</span>
    <span class="tabular-nums text-base-content/70">{{ uploaded() }} / {{ total }} files</span>
  </div>
  <scsc-progress [value]="uploaded()" [max]="total" label="Exhibit upload" />
  <div class="flex gap-2">
    <scsc-button
      size="sm"
      variant="secondary"
      outline
      [disabled]="done()"
      (click)="uploadNext()"
      >Upload next file</scsc-button
    >
    <scsc-button size="sm" variant="ghost" (click)="uploaded.set(0)">Reset</scsc-button>
  </div>
</div>
`},"progress-indeterminate":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscProgress } from '@scscourt/design';

@Component({
  selector: 'app-progress-indeterminate-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscProgress],
  template: \`
    <div class="flex max-w-md flex-col gap-2">
      <p class="text-sm">Searching the case index\u2026</p>
      <!-- value omitted (null) = indeterminate -->
      <scsc-progress tone="secondary" label="Searching the case index" />
    </div>
  \`,
})
export class ProgressIndeterminateDemo {}
`,html:`<div class="flex max-w-md flex-col gap-2">
  <p class="text-sm">Searching the case index\u2026</p>
  <!-- value omitted (null) = indeterminate -->
  <scsc-progress tone="secondary" label="Searching the case index" />
</div>
`},"progress-tones":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscProgress } from '@scscourt/design';

@Component({
  selector: 'app-progress-tones-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscProgress],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      @for (r of rows; track r.label) {
        <div class="flex flex-col gap-1">
          <div class="flex justify-between text-sm">
            <span>{{ r.label }}</span>
            <span class="tabular-nums text-base-content/70">{{ r.value }}%</span>
          </div>
          <scsc-progress [value]="r.value" [tone]="r.tone" [label]="r.label" />
        </div>
      }
    </div>
  \`,
})
export class ProgressTonesDemo {
  protected readonly rows: {
    label: string;
    value: number;
    tone: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  }[] = [
    { label: 'Jury summons returned', value: 72, tone: 'primary' },
    { label: 'Fee waivers reviewed', value: 45, tone: 'secondary' },
    { label: 'Archived docket pages scanned', value: 30, tone: 'info' },
    { label: 'Filings accepted', value: 96, tone: 'success' },
    { label: 'Storage used', value: 83, tone: 'warning' },
    { label: 'Rejected filings', value: 12, tone: 'error' },
  ];
}
`,html:`<div class="flex max-w-md flex-col gap-4">
  @for (r of rows; track r.label) {
    <div class="flex flex-col gap-1">
      <div class="flex justify-between text-sm">
        <span>{{ r.label }}</span>
        <span class="tabular-nums text-base-content/70">{{ r.value }}%</span>
      </div>
      <scsc-progress [value]="r.value" [tone]="r.tone" [label]="r.label" />
    </div>
  }
</div>
`}};var $={slug:`progress`,name:`Progress`,classes:[`ScscProgress`],category:`Overlays & Feedback`,whenToUse:["Work with a known size: files uploaded out of N, records processed, a quota used. Bind `value` and `max`.","Omit `value` (leave it `null`) for an indeterminate bar while waiting on something of unknown length; for a blocked region use `scsc-loading-overlay`, for an inline wait `scsc-spinner`.","For a single percentage in a compact space, `scsc-progress-ring`.","Always show the numbers next to the bar (`3 / 8 files`, `72%`); the bar alone is not precise enough to read."],demos:[{id:`progress-determinate`,title:`Determinate`,description:"`[value]` and `[max]` driven by signals; the count is shown beside the bar.",component:m,source:f[`progress-determinate`]},{id:`progress-indeterminate`,title:`Indeterminate`,description:"No `value` = animated bar of unknown length.",component:u,source:f[`progress-indeterminate`]},{id:`progress-tones`,title:`Tones`,description:"`primary` (default), `secondary` and the four status tones.",component:g,source:f[`progress-tones`]}],a11y:["Renders a native `<progress>`, which exposes `progressbar` semantics and the current value automatically.","`label` is required (rendered as `aria-label`), so screen readers know what is progressing; the visible text beside the bar is not associated with it. In dev mode an empty label logs a warning.",'The amount is announced as a percentage (`aria-valuetext`, "40%", in the active locale) whatever `max` is.',`Indeterminate bars announce no value; pair them with a visible sentence such as "Searching…".`],aria:["`aria-label` from `label`; `aria-valuetext` with the percentage while determinate."],appMustProvide:['A `label` saying what is progressing ("Exhibit upload").'],related:[`progress-ring`,`spinner`,`skeleton`,`loading-overlay`]};export{$ as PROGRESS_DOCS};