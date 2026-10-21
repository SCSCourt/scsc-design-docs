import{Fr as kn,Hs as y_,Ma as JT,Ms as uc,Na as Jb,No as cc,St as Ln,T as Br,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,f as AP,ks as t_,kt as NE,pi as sn,ra as Af,va as G_,ws as r_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var w=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-skeleton-card-demo`]],decls:12,vars:0,consts:[[1,`max-w-sm`],[1,`flex`,`items-center`,`gap-3`],[`circle`,``,`width`,`2.5rem`,`height`,`2.5rem`],[1,`flex`,`flex-1`,`flex-col`,`gap-2`],[`width`,`60%`],[`width`,`40%`,`height`,`0.75rem`],[1,`mt-4`,`flex`,`flex-col`,`gap-2`],[`width`,`100%`],[`width`,`90%`],[`width`,`70%`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[`width`,`6rem`,`height`,`2rem`]],template:function(t,l){t&1&&(Ga(0,`scsc-card`,0)(1,`div`,1),uc(2,`scsc-skeleton`,2),Ga(3,`div`,3),uc(4,`scsc-skeleton`,4)(5,`scsc-skeleton`,5),Lf()(),Ga(6,`div`,6),uc(7,`scsc-skeleton`,7)(8,`scsc-skeleton`,8)(9,`scsc-skeleton`,9),Lf(),Ga(10,`div`,10),uc(11,`scsc-skeleton`,11),Lf()())},dependencies:[mN,Ln],encapsulation:2})};var R=(e,s)=>s.caseNumber;function B(e,s){e&1&&(Ga(0,`li`,6),uc(1,`scsc-skeleton`,7)(2,`scsc-skeleton`,8)(3,`scsc-skeleton`,7),Lf())}function O(e,s){if(e&1&&(uc(0,`scsc-spinner`,5),Ga(1,`ul`,4),o_(2,B,4,0,`li`,6,r_),Lf()),e&2){let t=y_();Jb(2),i_(t.placeholders)}}function H(e,s){if(e&1&&(Ga(0,`li`,6)(1,`scsc-text`,9),G_(2),Lf(),Ga(3,`scsc-text`,10),G_(4),Lf(),Ga(5,`scsc-text`,11),G_(6),Lf()()),e&2){let t=s.$implicit;Jb(2),nD(t.caseNumber),Jb(2),nD(t.title),Jb(2),nD(t.time)}}function A(e,s){if(e&1&&(Ga(0,`ul`,4),o_(1,H,7,3,`li`,6,R),Lf()),e&2){let t=y_();Jb(),i_(t.hearings())}}var C=class e{placeholders=[1,2,3];loading=q(!1);hearings=q([{caseNumber:`24CV012345`,title:`Alvarez v. Pacific Transit`,time:`9:00 AM`},{caseNumber:`24CV009871`,title:`Kim v. Bayline Properties`,time:`10:30 AM`},{caseNumber:`23CV031002`,title:`Ortiz v. County of Santa Clara`,time:`1:30 PM`}]);reload(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),1200)}static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-skeleton-list-demo`]],decls:8,vars:2,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`],[`bold`,``],[`size`,`sm`,`variant`,`ghost`,3,`click`,`disabled`],[1,`flex`,`flex-col`,`gap-3`],[`size`,`xs`,`label`,`Loading hearings`,1,`sr-only`],[1,`grid`,`grid-cols-[6rem_1fr_4rem]`,`items-center`,`gap-3`],[`width`,`100%`],[`width`,`80%`],[`size`,`sm`,`tnum`,``],[`size`,`sm`],[`size`,`sm`,`tone`,`muted`,`tnum`,``,1,`text-right`]],template:function(t,l){t&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-text`,2),G_(3,`Department 6 — today`),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return l.reload()}),G_(5,`Reload`),Lf()(),JT(6,O,4,0)(7,A,3,0,`ul`,4),Lf()),t&2&&(Jb(4),Pv(`disabled`,l.loading()),Jb(2),t_(l.loading()?6:7))},dependencies:[sn,Ln,Br,NE],encapsulation:2})};var I=(e,s)=>s.label;function F(e,s){e&1&&(Ga(0,`div`,6),uc(1,`scsc-skeleton`,7)(2,`scsc-skeleton`,8)(3,`scsc-skeleton`,9),Lf())}function V(e,s){if(e&1&&(uc(0,`scsc-spinner`,5),o_(1,F,4,0,`div`,6,r_)),e&2){let t=y_();Jb(),i_(t.placeholders)}}function K(e,s){if(e&1&&uc(0,`scsc-stat`,10),e&2){let t=s.$implicit;Pv(`label`,t.label)(`value`,t.value)(`delta`,t.delta)(`trend`,t.trend)}}function $(e,s){if(e&1&&o_(0,K,1,4,`scsc-stat`,10,I),e&2){let t=y_();i_(t.metrics)}}var _=class e{placeholders=[1,2,3];loading=q(!1);metrics=[{label:`New filings`,value:`342`,delta:`+18 vs. last week`,trend:`up`},{label:`Hearings held`,value:`127`,delta:`-6 vs. last week`,trend:`down`},{label:`Median days to judgment`,value:`214`,delta:`No change`,trend:`flat`}];constructor(){this.refresh()}refresh(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),1500)}static ɵfac=function(t){return new(t||e)};static ɵcmp=Af({type:e,selectors:[[`app-skeleton-stats-demo`]],decls:9,vars:5,consts:[[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[3,`level`,`visualLevel`],[`size`,`sm`,`variant`,`ghost`,3,`click`,`disabled`],[1,`grid`,`gap-4`,`sm:grid-cols-3`],[`label`,`Loading division statistics`,1,`sr-only`],[1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-5`],[`width`,`55%`,`height`,`0.875rem`],[`width`,`35%`,`height`,`2.25rem`,1,`mt-3`],[`width`,`45%`,`height`,`0.875rem`,1,`mt-2`],[3,`label`,`value`,`delta`,`trend`]],template:function(t,l){t&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3,`Civil Division · this week`),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return l.refresh()}),G_(5,` Refresh `),Lf()(),Ga(6,`div`,4),JT(7,V,3,0)(8,$,2,0),Lf()()),t&2&&(Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(2),Pv(`disabled`,l.loading()),Jb(2),cc(`aria-busy`,l.loading()),Jb(),t_(l.loading()?7:8))},dependencies:[sn,kn,Ln,Br,AP],encapsulation:2})};var D={"skeleton-card":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscSkeleton } from '@scscourt/design';

@Component({
  selector: 'app-skeleton-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscSkeleton],
  template: \`
    <!-- Mirror the shape of the real card: avatar, title line, two body lines, a footer action. -->
    <scsc-card class="max-w-sm">
      <div class="flex items-center gap-3">
        <scsc-skeleton circle width="2.5rem" height="2.5rem" />
        <div class="flex flex-1 flex-col gap-2">
          <scsc-skeleton width="60%" />
          <scsc-skeleton width="40%" height="0.75rem" />
        </div>
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <scsc-skeleton width="100%" />
        <scsc-skeleton width="90%" />
        <scsc-skeleton width="70%" />
      </div>
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-skeleton width="6rem" height="2rem" />
      </div>
    </scsc-card>
  \`,
})
export class SkeletonCardDemo {}
`,html:`<!-- Mirror the shape of the real card: avatar, title line, two body lines, a footer action. -->
<scsc-card class="max-w-sm">
  <div class="flex items-center gap-3">
    <scsc-skeleton circle width="2.5rem" height="2.5rem" />
    <div class="flex flex-1 flex-col gap-2">
      <scsc-skeleton width="60%" />
      <scsc-skeleton width="40%" height="0.75rem" />
    </div>
  </div>
  <div class="mt-4 flex flex-col gap-2">
    <scsc-skeleton width="100%" />
    <scsc-skeleton width="90%" />
    <scsc-skeleton width="70%" />
  </div>
  <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
    <scsc-skeleton width="6rem" height="2rem" />
  </div>
</scsc-card>
`},"skeleton-list":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscSkeleton, ScscSpinner, ScscText } from '@scscourt/design';

interface Hearing {
  caseNumber: string;
  title: string;
  time: string;
}

@Component({
  selector: 'app-skeleton-list-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscSkeleton, ScscSpinner, ScscText],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <div class="flex items-center justify-between">
        <scsc-text bold>Department 6 \u2014 today</scsc-text>
        <scsc-button size="sm" variant="ghost" (click)="reload()" [disabled]="loading()"
          >Reload</scsc-button
        >
      </div>

      @if (loading()) {
        <!-- Skeletons are aria-hidden; the spinner announces the loading state. -->
        <scsc-spinner size="xs" label="Loading hearings" class="sr-only" />
        <ul class="flex flex-col gap-3">
          @for (i of placeholders; track i) {
            <li class="grid grid-cols-[6rem_1fr_4rem] items-center gap-3">
              <scsc-skeleton width="100%" />
              <scsc-skeleton width="80%" />
              <scsc-skeleton width="100%" />
            </li>
          }
        </ul>
      } @else {
        <ul class="flex flex-col gap-3">
          @for (h of hearings(); track h.caseNumber) {
            <li class="grid grid-cols-[6rem_1fr_4rem] items-center gap-3">
              <scsc-text size="sm" tnum>{{ h.caseNumber }}</scsc-text>
              <scsc-text size="sm">{{ h.title }}</scsc-text>
              <scsc-text size="sm" tone="muted" tnum class="text-right">{{ h.time }}</scsc-text>
            </li>
          }
        </ul>
      }
    </div>
  \`,
})
export class SkeletonListDemo {
  protected readonly placeholders = [1, 2, 3];
  protected readonly loading = signal(false);
  protected readonly hearings = signal<Hearing[]>([
    { caseNumber: '24CV012345', title: 'Alvarez v. Pacific Transit', time: '9:00 AM' },
    { caseNumber: '24CV009871', title: 'Kim v. Bayline Properties', time: '10:30 AM' },
    { caseNumber: '23CV031002', title: 'Ortiz v. County of Santa Clara', time: '1:30 PM' },
  ]);

  protected reload(): void {
    this.loading.set(true);
    // Replace with your data service; the skeleton stays until the signal flips back.
    setTimeout(() => this.loading.set(false), 1200);
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <div class="flex items-center justify-between">
    <scsc-text bold>Department 6 \u2014 today</scsc-text>
    <scsc-button size="sm" variant="ghost" (click)="reload()" [disabled]="loading()"
      >Reload</scsc-button
    >
  </div>

  @if (loading()) {
    <!-- Skeletons are aria-hidden; the spinner announces the loading state. -->
    <scsc-spinner size="xs" label="Loading hearings" class="sr-only" />
    <ul class="flex flex-col gap-3">
      @for (i of placeholders; track i) {
        <li class="grid grid-cols-[6rem_1fr_4rem] items-center gap-3">
          <scsc-skeleton width="100%" />
          <scsc-skeleton width="80%" />
          <scsc-skeleton width="100%" />
        </li>
      }
    </ul>
  } @else {
    <ul class="flex flex-col gap-3">
      @for (h of hearings(); track h.caseNumber) {
        <li class="grid grid-cols-[6rem_1fr_4rem] items-center gap-3">
          <scsc-text size="sm" tnum>{{ h.caseNumber }}</scsc-text>
          <scsc-text size="sm">{{ h.title }}</scsc-text>
          <scsc-text size="sm" tone="muted" tnum class="text-right">{{ h.time }}</scsc-text>
        </li>
      }
    </ul>
  }
</div>
`},"skeleton-stats":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscHeading, ScscSkeleton, ScscSpinner, ScscStat } from '@scscourt/design';

interface Metric {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down' | 'flat';
}

@Component({
  selector: 'app-skeleton-stats-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHeading, ScscSkeleton, ScscSpinner, ScscStat],
  template: \`
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <scsc-heading [level]="3" [visualLevel]="5">Civil Division \xB7 this week</scsc-heading>
        <scsc-button size="sm" variant="ghost" [disabled]="loading()" (click)="refresh()">
          Refresh
        </scsc-button>
      </div>

      <!-- aria-busy marks the region as updating; the skeletons themselves are aria-hidden. -->
      <div class="grid gap-4 sm:grid-cols-3" [attr.aria-busy]="loading()">
        @if (loading()) {
          <scsc-spinner label="Loading division statistics" class="sr-only" />
          @for (i of placeholders; track i) {
            <!-- The same frame as scsc-stat, so nothing shifts when the numbers arrive. -->
            <div class="rounded-box border border-base-300 bg-base-100 p-5">
              <scsc-skeleton width="55%" height="0.875rem" />
              <scsc-skeleton width="35%" height="2.25rem" class="mt-3" />
              <scsc-skeleton width="45%" height="0.875rem" class="mt-2" />
            </div>
          }
        } @else {
          @for (m of metrics; track m.label) {
            <scsc-stat [label]="m.label" [value]="m.value" [delta]="m.delta" [trend]="m.trend" />
          }
        }
      </div>
    </div>
  \`,
})
export class SkeletonStatsDemo {
  protected readonly placeholders = [1, 2, 3];
  protected readonly loading = signal(false);
  protected readonly metrics: Metric[] = [
    { label: 'New filings', value: '342', delta: '+18 vs. last week', trend: 'up' },
    { label: 'Hearings held', value: '127', delta: '-6 vs. last week', trend: 'down' },
    { label: 'Median days to judgment', value: '214', delta: 'No change', trend: 'flat' },
  ];

  constructor() {
    this.refresh();
  }

  protected refresh(): void {
    this.loading.set(true);
    // Replace with your data service; the skeleton stays until the signal flips back.
    setTimeout(() => this.loading.set(false), 1500);
  }
}
`,html:`<div class="flex flex-col gap-3">
  <div class="flex items-center justify-between gap-3">
    <scsc-heading [level]="3" [visualLevel]="5">Civil Division \xB7 this week</scsc-heading>
    <scsc-button size="sm" variant="ghost" [disabled]="loading()" (click)="refresh()">
      Refresh
    </scsc-button>
  </div>

  <!-- aria-busy marks the region as updating; the skeletons themselves are aria-hidden. -->
  <div class="grid gap-4 sm:grid-cols-3" [attr.aria-busy]="loading()">
    @if (loading()) {
      <scsc-spinner label="Loading division statistics" class="sr-only" />
      @for (i of placeholders; track i) {
        <!-- The same frame as scsc-stat, so nothing shifts when the numbers arrive. -->
        <div class="rounded-box border border-base-300 bg-base-100 p-5">
          <scsc-skeleton width="55%" height="0.875rem" />
          <scsc-skeleton width="35%" height="2.25rem" class="mt-3" />
          <scsc-skeleton width="45%" height="0.875rem" class="mt-2" />
        </div>
      }
    } @else {
      @for (m of metrics; track m.label) {
        <scsc-stat [label]="m.label" [value]="m.value" [delta]="m.delta" [trend]="m.trend" />
      }
    }
  </div>
</div>
`}};var ce={slug:`skeleton`,name:`Skeleton`,classes:[`ScscSkeleton`],category:`Primitives`,whenToUse:[`Loading states where you know the shape of the content that is coming (a card, a list of rows, an avatar); the page keeps its layout and nothing jumps when data arrives.`,"Compose several skeletons to mirror the real component: one per line of text, a `circle` for an avatar, a short wide block for a button.","When the shape is unknown or the wait is very short, use `scsc-spinner` instead.","Swap on a signal (`@if (loading()) { … } @else { … }`) so the skeleton is removed from the DOM, not hidden."],demos:[{id:`skeleton-card`,title:`Card placeholder`,description:"Avatar, title and body lines inside `scsc-card`, plus a footer action.",component:w,source:D[`skeleton-card`]},{id:`skeleton-list`,title:`List with reload`,description:"Rows of placeholders while `loading()` is true; press Reload to see the swap.",component:C,source:D[`skeleton-list`]},{id:`skeleton-stats`,title:`Dashboard tiles`,description:"Placeholders in the same frame as `scsc-stat` while the numbers load on init, with `aria-busy` on the region.",component:_,source:D[`skeleton-stats`]}],a11y:['`circle` is a boolean attribute: write `<scsc-skeleton circle />`; `[circle]="true"` still works.',"Skeletons are `aria-hidden`; they say nothing to assistive tech. Announce the loading state with a `scsc-spinner` (visually hidden is fine) or an `aria-live` message.",'Set `aria-busy="true"` on the region being replaced while it loads, and drop it when the content is in.',`Keep the number of placeholder rows small (3–5); screen-reader users hear nothing, but sighted users read a long skeleton as a long wait.`,"The shimmer respects `prefers-reduced-motion`."],related:[`spinner`,`loading-overlay`,`card`,`list`,`stat`]};export{ce as SKELETON_DOCS};