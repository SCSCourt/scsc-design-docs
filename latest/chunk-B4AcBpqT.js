import{C as Bl,Go as g,Hs as y_,I as EP,Lo as d_,Ma as JT,Mr as jn,Ms as uc,Na as Jb,Rt as OR,So as Zv,Un as Za,Vr as mN,Xa as Pv,Zi as za,Zo as i_,_s as o_,cs as lc,ds as nD,f as AP,ha as Eg,io as Ta,jr as jl,ka as Ig,ks as t_,kt as NE,pi as sn,po as X,qo as ge,ra as Af,ta as $f,to as Sa,va as G_,vn as Vn,ws as r_,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var I=class o{target=342;frame=0;shown=q(this.target);constructor(){g(ge).onDestroy(()=>cancelAnimationFrame(this.frame))}count(){if(Bl()||typeof requestAnimationFrame!=`function`){this.shown.set(this.target);return}let n=jl.duration.slow*3,e=performance.now();cancelAnimationFrame(this.frame);let t=m=>{let y=Math.min(1,(m-e)/n),ee=1-Math.pow(1-y,3);this.shown.set(Math.round(this.target*ee)),y<1&&(this.frame=requestAnimationFrame(t))};this.frame=requestAnimationFrame(t)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-motion-js-demo`]],decls:5,vars:1,consts:[[1,`flex`,`max-w-xs`,`flex-col`,`gap-3`],[`label`,`New filings this week`,`delta`,`+18 vs. last week`,`trend`,`up`,3,`value`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-stat`,1),Ga(2,`div`)(3,`scsc-button`,2),lc(`click`,function(){return t.count()}),G_(4,`Count again`),Lf()()()),e&2&&(Jb(),Pv(`value`,t.shown()))},dependencies:[sn,AP],encapsulation:2})};function te(o,n){if(o&1&&(Ga(0,`option`,4),G_(1),Lf()),o&2){let e=n.$implicit,t=y_();Pv(`value`,e)(`selected`,e===t.preset()),Jb(),nD(e)}}function se(o,n){if(o&1){let e=d_();Ga(0,`div`),Ta(function(){Eg(e);let m=y_();return Ig(`scsc-anim-`+m.preset()+`-out`)}),Sa(function(){Eg(e);let m=y_();return Ig(`scsc-anim-`+m.preset()+`-in`)}),Ga(1,`scsc-alert`,7),G_(2,` The Downtown Superior Court closes at noon on Friday, Oct 9. `),Lf()()}}var z=class o{presets=[`fade`,`slide-up`,`slide-down`,`slide-start`,`slide-end`,`scale`,`collapse`];preset=q(`slide-up`);open=q(!0);choose(n){this.preset.set(n.target.value)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-motion-presets-demo`]],decls:10,vars:2,consts:[[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`items-end`,`gap-3`],[`label`,`Preset`,`for`,`motion-preset`],[`scsc-select`,``,`id`,`motion-preset`,3,`change`],[3,`value`,`selected`],[3,`click`],[1,`min-h-24`],[`status`,`info`,`title`,`Courthouse closure`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-form-field`,2)(3,`select`,3),lc(`change`,function(y){return t.choose(y)}),o_(4,te,2,3,`option`,4,r_),Lf()(),Ga(6,`scsc-button`,5),lc(`click`,function(){return t.open.set(!t.open())}),G_(7),Lf()(),Ga(8,`div`,6),JT(9,se,3,0,`div`),Lf()()),e&2&&(Jb(4),i_(t.presets),Jb(3),$f(` `,t.open()?`Hide`:`Show`,` the notice `),Jb(2),t_(t.open()?9:-1))},dependencies:[za,sn,Vn,On],encapsulation:2})};function ne(o,n){o&1&&(Ga(0,`div`,10),Sa(`scsc-anim-slide-up-in`),Ga(1,`scsc-card`,12)(2,`scsc-text`,13),G_(3,` Motion to compel, 24CV012345. It slides in with full motion, and fades in under reduced motion. `),Lf()()())}var $=class o{root=g(X).documentElement;original=this.root.getAttribute(`data-motion`);setting=q(this.original??`system`);reduced=q(Bl());shown=q(!0);constructor(){g(ge).onDestroy(()=>{this.original===null?this.root.removeAttribute(`data-motion`):this.root.setAttribute(`data-motion`,this.original)})}choose(n){let e=n.target.value;this.setting.set(e),e===`system`?this.root.removeAttribute(`data-motion`):this.root.setAttribute(`data-motion`,e),this.reduced.set(Bl()),this.replay()}replay(){this.shown.set(!1),setTimeout(()=>this.shown.set(!0),50)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-motion-reduced-demo`]],decls:17,vars:6,consts:[[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`items-end`,`gap-3`],[`label`,`Motion`,`for`,`motion-setting`,`hint`,`Sets data-motion on <html> for this site until you leave the page.`],[`scsc-select`,``,`id`,`motion-setting`,3,`change`],[`value`,`system`,3,`selected`],[`value`,`reduced`,3,`selected`],[`value`,`full`,3,`selected`],[`variant`,`neutral`,`outline`,``,3,`click`],[`size`,`sm`,`role`,`status`,1,`block`],[1,`min-h-32`],[1,`max-w-md`],[`preset`,`list`,1,`max-w-md`,3,`rows`],[`title`,`Filing accepted`],[`size`,`sm`,1,`block`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-form-field`,2)(3,`select`,3),lc(`change`,function(y){return t.choose(y)}),Ga(4,`option`,4),G_(5,`Follow the device`),Lf(),Ga(6,`option`,5),G_(7,`Reduce motion`),Lf(),Ga(8,`option`,6),G_(9,`Full motion`),Lf()()(),Ga(10,`scsc-button`,7),lc(`click`,function(){return t.replay()}),G_(11,`Replay`),Lf()(),Ga(12,`scsc-text`,8),G_(13),Lf(),Ga(14,`div`,9),JT(15,ne,4,0,`div`,10),Lf(),uc(16,`scsc-skeleton-preset`,11),Lf()),e&2&&(Jb(4),Pv(`selected`,t.setting()===`system`),Jb(2),Pv(`selected`,t.setting()===`reduced`),Jb(2),Pv(`selected`,t.setting()===`full`),Jb(5),$f(` prefersReducedMotion() is `,t.reduced(),` `),Jb(2),t_(t.shown()?15:-1),Jb(),Pv(`rows`,2))},dependencies:[sn,mN,Vn,On,OR,NE],encapsulation:2})};var oe=(o,n)=>n.id;function ie(o,n){if(o&1&&(Ga(0,`li`,5),Sa(`scsc-anim-slide-up-in`),Ga(1,`span`,6),G_(2),Lf(),Ga(3,`scsc-text`,7),G_(4),Lf(),Ga(5,`scsc-badge`,8),G_(6),Lf()()),o&2){let e=n.$implicit,t=n.$index;Zv(`--%NS%scsc-stagger-index`,t),Jb(2),nD(e.time),Jb(2),nD(e.title),Jb(2),nD(e.department)}}var Z=[{id:`h1`,time:`9:00 AM`,title:`Alvarez v. Chen · Motion to compel`,department:`Dept. 5`},{id:`h2`,time:`9:30 AM`,title:`In re Marriage of Okafor`,department:`Dept. 74`},{id:`h3`,time:`10:15 AM`,title:`People v. Nguyen · Arraignment`,department:`Dept. 31`},{id:`h4`,time:`1:30 PM`,title:`Estate of Rivera · Status`,department:`Dept. 13`},{id:`h5`,time:`2:00 PM`,title:`Park v. Silicon Valley Rentals`,department:`Dept. 88`}];var j=class o{hearings=q(Z);reload(){this.hearings.set([]),setTimeout(()=>this.hearings.set(Z),200)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-motion-stagger-demo`]],decls:7,vars:1,consts:[[`title`,`Today’s hearings`,1,`max-w-xl`,3,`flush`],[`aria-label`,`Today’s hearings`,1,`min-h-80`],[1,`flex`,`items-center`,`gap-3`,`px-5`,`py-3`,3,`--%NS%scsc-stagger-index`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[1,`flex`,`items-center`,`gap-3`,`px-5`,`py-3`],[1,`w-20`,`shrink-0`,`font-medium`,`tnum`],[1,`min-w-0`,`flex-1`,`truncate`],[`soft`,``,`size`,`sm`]],template:function(e,t){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-list`,1),o_(2,ie,7,5,`li`,2,oe),Lf(),Ga(4,`div`,3)(5,`scsc-button`,4),lc(`click`,function(){return t.reload()}),G_(6,`Reload the list`),Lf()()()),e&2&&(Pv(`flush`,!0),Jb(2),i_(t.hearings()))},dependencies:[jn,sn,mN,EP,NE],encapsulation:2})};var ae=(o,n)=>n.name;function re(o,n){if(o&1&&(Ga(0,`div`,4)(1,`code`,8),G_(2),Lf(),Ga(3,`div`,9),uc(4,`span`,10),Lf()()),o&2){let e=n.$implicit,t=y_();Jb(2),nD(e.name),Jb(2),Zv(`inset-inline-start`,t.played()?`calc(100% - 1rem)`:`0px`)(`transition`,t.animate()?`inset-inline-start 1s `+e.curve:`none`)}}var B=class o{columns=[{key:`token`,header:`Token`},{key:`value`,header:`Value`},{key:`reduced`,header:`Reduced motion`},{key:`use`,header:`Use for`}];tokens=[{token:`--scsc-duration-instant`,value:`${jl.duration.instant}ms`,reduced:`unchanged`,use:`Press and hover feedback, colour changes`},{token:`--scsc-duration-fast`,value:`${jl.duration.fast}ms`,reduced:`unchanged`,use:`Tooltips, menus, every leave preset`},{token:`--scsc-duration-base`,value:`${jl.duration.base}ms`,reduced:`${jl.duration.fast}ms`,use:`Enter presets, popovers, dialogs`},{token:`--scsc-duration-slow`,value:`${jl.duration.slow}ms`,reduced:`${jl.duration.fast}ms`,use:`Drawers, large panels, skeleton hand-off`},{token:`--scsc-ease-standard`,value:jl.ease.standard,reduced:`unchanged`,use:`Things moving or resizing on screen`},{token:`--scsc-ease-enter`,value:jl.ease.enter,reduced:`unchanged`,use:`Things arriving (decelerates)`},{token:`--scsc-ease-exit`,value:jl.ease.exit,reduced:`unchanged`,use:`Things leaving (accelerates)`},{token:`--scsc-ease-emphasized`,value:jl.ease.emphasized,reduced:`unchanged`,use:`A small overshoot for a success moment, sparingly`},{token:`--scsc-motion-distance`,value:`0.5rem`,reduced:`0px (slides become fades)`,use:`How far slide presets travel`},{token:`--scsc-motion-scale`,value:`0.96`,reduced:`1`,use:`Starting scale of the scale preset`},{token:`--scsc-stagger-step`,value:`${jl.staggerStep}ms`,reduced:`0ms`,use:`Delay between list items (× --scsc-stagger-index)`}];easings=[{name:`--scsc-ease-standard`,curve:`var(--scsc-ease-standard)`},{name:`--scsc-ease-enter`,curve:`var(--scsc-ease-enter)`},{name:`--scsc-ease-exit`,curve:`var(--scsc-ease-exit)`},{name:`--scsc-ease-emphasized`,curve:`var(--scsc-ease-emphasized)`}];played=q(!1);animate=q(!0);note=q(``);play(){let n=Bl();this.animate.set(!n),this.note.set(n?`Reduced motion is on, so the dots jump to the end.`:``),this.played.update(e=>!e)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-motion-tokens-demo`]],decls:11,vars:3,consts:[[1,`flex`,`flex-col`,`gap-4`],[3,`columns`,`rows`],[`title`,`Easing curves`],[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`slot`,`footer`,1,`flex`,`flex-wrap`,`items-center`,`gap-3`,`border-t`,`border-base-300`,`scsc-pad-card`],[`size`,`sm`,3,`click`],[`tone`,`muted`,`size`,`sm`,`role`,`status`],[1,`w-52`,`shrink-0`,`text-sm`],[`aria-hidden`,`true`,1,`relative`,`h-2`,`min-w-40`,`flex-1`,`rounded-full`,`bg-base-200`],[1,`absolute`,`top-1/2`,`size-4`,`-translate-y-1/2`,`rounded-full`,`bg-primary`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-table`,1),Ga(2,`scsc-card`,2)(3,`div`,3),o_(4,re,5,5,`div`,4,ae),Lf(),Ga(6,`div`,5)(7,`scsc-button`,6),lc(`click`,function(){return t.play()}),G_(8,`Play the curves`),Lf(),Ga(9,`scsc-text`,7),G_(10),Lf()()()()),e&2&&(Jb(),Pv(`columns`,t.columns)(`rows`,t.tokens),Jb(3),i_(t.easings),Jb(6),nD(t.note()))},dependencies:[sn,mN,Za,NE],encapsulation:2})};var D={"motion-js":{ts:`import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { MOTION, ScscButton, ScscStat, prefersReducedMotion } from '@scscourt/design';

@Component({
  selector: 'app-motion-js-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscStat],
  template: \`
    <div class="flex max-w-xs flex-col gap-3">
      <scsc-stat
        label="New filings this week"
        [value]="shown()"
        delta="+18 vs. last week"
        trend="up"
      />
      <div>
        <scsc-button size="sm" variant="neutral" outline (click)="count()">Count again</scsc-button>
      </div>
    </div>
  \`,
})
export class MotionJsDemo {
  private readonly target = 342;
  private frame = 0;
  protected readonly shown = signal(this.target);

  constructor() {
    inject(DestroyRef).onDestroy(() => cancelAnimationFrame(this.frame));
  }

  protected count(): void {
    // JS animation reads the tokens from MOTION and checks the preference itself.
    if (prefersReducedMotion() || typeof requestAnimationFrame !== 'function') {
      this.shown.set(this.target);
      return;
    }
    const duration = MOTION.duration.slow * 3;
    const start = performance.now();
    cancelAnimationFrame(this.frame);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // decelerate, like --scsc-ease-enter
      this.shown.set(Math.round(this.target * eased));
      if (t < 1) this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }
}
`,html:`<div class="flex max-w-xs flex-col gap-3">
  <scsc-stat
    label="New filings this week"
    [value]="shown()"
    delta="+18 vs. last week"
    trend="up"
  />
  <div>
    <scsc-button size="sm" variant="neutral" outline (click)="count()">Count again</scsc-button>
  </div>
</div>
`},"motion-presets":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscAlert,
  ScscButton,
  ScscFormField,
  ScscMotionPreset,
  ScscSelect,
} from '@scscourt/design';

@Component({
  selector: 'app-motion-presets-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscFormField, ScscSelect],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap items-end gap-3">
        <scsc-form-field label="Preset" for="motion-preset">
          <select scsc-select id="motion-preset" (change)="choose($event)">
            @for (p of presets; track p) {
              <option [value]="p" [selected]="p === preset()">{{ p }}</option>
            }
          </select>
        </scsc-form-field>
        <scsc-button (click)="open.set(!open())">
          {{ open() ? 'Hide' : 'Show' }} the notice
        </scsc-button>
      </div>

      <div class="min-h-24">
        @if (open()) {
          <!-- In an app the class is usually fixed: animate.enter="scsc-anim-slide-up-in"
               animate.leave="scsc-anim-slide-up-out". -->
          <div
            [animate.enter]="'scsc-anim-' + preset() + '-in'"
            [animate.leave]="'scsc-anim-' + preset() + '-out'"
          >
            <scsc-alert status="info" title="Courthouse closure">
              The Downtown Superior Court closes at noon on Friday, Oct 9.
            </scsc-alert>
          </div>
        }
      </div>
    </div>
  \`,
})
export class MotionPresetsDemo {
  protected readonly presets: ScscMotionPreset[] = [
    'fade',
    'slide-up',
    'slide-down',
    'slide-start',
    'slide-end',
    'scale',
    'collapse',
  ];
  protected readonly preset = signal<ScscMotionPreset>('slide-up');
  protected readonly open = signal(true);

  protected choose(event: Event): void {
    this.preset.set((event.target as HTMLSelectElement).value as ScscMotionPreset);
  }
}
`,html:`<div class="flex flex-col gap-4">
  <div class="flex flex-wrap items-end gap-3">
    <scsc-form-field label="Preset" for="motion-preset">
      <select scsc-select id="motion-preset" (change)="choose($event)">
        @for (p of presets; track p) {
          <option [value]="p" [selected]="p === preset()">{{ p }}</option>
        }
      </select>
    </scsc-form-field>
    <scsc-button (click)="open.set(!open())">
      {{ open() ? 'Hide' : 'Show' }} the notice
    </scsc-button>
  </div>

  <div class="min-h-24">
    @if (open()) {
      <!-- In an app the class is usually fixed: animate.enter="scsc-anim-slide-up-in"
           animate.leave="scsc-anim-slide-up-out". -->
      <div
        [animate.enter]="'scsc-anim-' + preset() + '-in'"
        [animate.leave]="'scsc-anim-' + preset() + '-out'"
      >
        <scsc-alert status="info" title="Courthouse closure">
          The Downtown Superior Court closes at noon on Friday, Oct 9.
        </scsc-alert>
      </div>
    }
  </div>
</div>
`},"motion-reduced":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscFormField,
  ScscSelect,
  ScscSkeletonPreset,
  ScscText,
  prefersReducedMotion,
} from '@scscourt/design';

type MotionSetting = 'system' | 'reduced' | 'full';

@Component({
  selector: 'app-motion-reduced-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscFormField, ScscSelect, ScscSkeletonPreset, ScscText],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap items-end gap-3">
        <scsc-form-field
          label="Motion"
          for="motion-setting"
          hint="Sets data-motion on <html> for this site until you leave the page."
        >
          <select scsc-select id="motion-setting" (change)="choose($event)">
            <option value="system" [selected]="setting() === 'system'">Follow the device</option>
            <option value="reduced" [selected]="setting() === 'reduced'">Reduce motion</option>
            <option value="full" [selected]="setting() === 'full'">Full motion</option>
          </select>
        </scsc-form-field>
        <scsc-button variant="neutral" outline (click)="replay()">Replay</scsc-button>
      </div>
      <scsc-text size="sm" class="block" role="status">
        prefersReducedMotion() is {{ reduced() }}
      </scsc-text>

      <div class="min-h-32">
        @if (shown()) {
          <div class="max-w-md" animate.enter="scsc-anim-slide-up-in">
            <scsc-card title="Filing accepted">
              <scsc-text size="sm" class="block">
                Motion to compel, 24CV012345. It slides in with full motion, and fades in under
                reduced motion.
              </scsc-text>
            </scsc-card>
          </div>
        }
      </div>
      <scsc-skeleton-preset preset="list" [rows]="2" class="max-w-md" />
    </div>
  \`,
})
export class MotionReducedDemo {
  private readonly root = inject(DOCUMENT).documentElement;
  private readonly original = this.root.getAttribute('data-motion');

  protected readonly setting = signal<MotionSetting>(
    (this.original as MotionSetting | null) ?? 'system',
  );
  protected readonly reduced = signal(prefersReducedMotion());
  protected readonly shown = signal(true);

  constructor() {
    // Put the page back the way it was.
    inject(DestroyRef).onDestroy(() => {
      if (this.original === null) this.root.removeAttribute('data-motion');
      else this.root.setAttribute('data-motion', this.original);
    });
  }

  protected choose(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as MotionSetting;
    this.setting.set(value);
    if (value === 'system') this.root.removeAttribute('data-motion');
    else this.root.setAttribute('data-motion', value);
    this.reduced.set(prefersReducedMotion());
    this.replay();
  }

  protected replay(): void {
    this.shown.set(false);
    setTimeout(() => this.shown.set(true), 50);
  }
}
`,html:`<div class="flex flex-col gap-4">
  <div class="flex flex-wrap items-end gap-3">
    <scsc-form-field
      label="Motion"
      for="motion-setting"
      hint="Sets data-motion on <html> for this site until you leave the page."
    >
      <select scsc-select id="motion-setting" (change)="choose($event)">
        <option value="system" [selected]="setting() === 'system'">Follow the device</option>
        <option value="reduced" [selected]="setting() === 'reduced'">Reduce motion</option>
        <option value="full" [selected]="setting() === 'full'">Full motion</option>
      </select>
    </scsc-form-field>
    <scsc-button variant="neutral" outline (click)="replay()">Replay</scsc-button>
  </div>
  <scsc-text size="sm" class="block" role="status">
    prefersReducedMotion() is {{ reduced() }}
  </scsc-text>

  <div class="min-h-32">
    @if (shown()) {
      <div class="max-w-md" animate.enter="scsc-anim-slide-up-in">
        <scsc-card title="Filing accepted">
          <scsc-text size="sm" class="block">
            Motion to compel, 24CV012345. It slides in with full motion, and fades in under
            reduced motion.
          </scsc-text>
        </scsc-card>
      </div>
    }
  </div>
  <scsc-skeleton-preset preset="list" [rows]="2" class="max-w-md" />
</div>
`},"motion-stagger":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscBadge, ScscButton, ScscCard, ScscList, ScscText } from '@scscourt/design';

interface Hearing {
  id: string;
  time: string;
  title: string;
  department: string;
}

const HEARINGS: Hearing[] = [
  { id: 'h1', time: '9:00 AM', title: 'Alvarez v. Chen \xB7 Motion to compel', department: 'Dept. 5' },
  { id: 'h2', time: '9:30 AM', title: 'In re Marriage of Okafor', department: 'Dept. 74' },
  { id: 'h3', time: '10:15 AM', title: 'People v. Nguyen \xB7 Arraignment', department: 'Dept. 31' },
  { id: 'h4', time: '1:30 PM', title: 'Estate of Rivera \xB7 Status', department: 'Dept. 13' },
  { id: 'h5', time: '2:00 PM', title: 'Park v. Silicon Valley Rentals', department: 'Dept. 88' },
];

@Component({
  selector: 'app-motion-stagger-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscButton, ScscCard, ScscList, ScscText],
  template: \`
    <scsc-card title="Today\u2019s hearings" class="max-w-xl" [flush]="true">
      <scsc-list aria-label="Today\u2019s hearings" class="min-h-80">
        @for (h of hearings(); track h.id; let i = $index) {
          <!-- Each row enters 40ms (--scsc-stagger-step) after the one before; reduced motion
               sets the step to 0, so they arrive together. -->
          <li
            class="flex items-center gap-3 px-5 py-3"
            animate.enter="scsc-anim-slide-up-in"
            [style.--scsc-stagger-index]="i"
          >
            <span class="w-20 shrink-0 font-medium tnum">{{ h.time }}</span>
            <scsc-text class="min-w-0 flex-1 truncate">{{ h.title }}</scsc-text>
            <scsc-badge soft size="sm">{{ h.department }}</scsc-badge>
          </li>
        }
      </scsc-list>
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-button size="sm" variant="neutral" outline (click)="reload()"
          >Reload the list</scsc-button
        >
      </div>
    </scsc-card>
  \`,
})
export class MotionStaggerDemo {
  protected readonly hearings = signal<Hearing[]>(HEARINGS);

  protected reload(): void {
    this.hearings.set([]);
    // Stand-in for a fetch; new rows enter in sequence.
    setTimeout(() => this.hearings.set(HEARINGS), 200);
  }
}
`,html:`<scsc-card title="Today\u2019s hearings" class="max-w-xl" [flush]="true">
  <scsc-list aria-label="Today\u2019s hearings" class="min-h-80">
    @for (h of hearings(); track h.id; let i = $index) {
      <!-- Each row enters 40ms (--scsc-stagger-step) after the one before; reduced motion
           sets the step to 0, so they arrive together. -->
      <li
        class="flex items-center gap-3 px-5 py-3"
        animate.enter="scsc-anim-slide-up-in"
        [style.--scsc-stagger-index]="i"
      >
        <span class="w-20 shrink-0 font-medium tnum">{{ h.time }}</span>
        <scsc-text class="min-w-0 flex-1 truncate">{{ h.title }}</scsc-text>
        <scsc-badge soft size="sm">{{ h.department }}</scsc-badge>
      </li>
    }
  </scsc-list>
  <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
    <scsc-button size="sm" variant="neutral" outline (click)="reload()"
      >Reload the list</scsc-button
    >
  </div>
</scsc-card>
`},"motion-tokens":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  MOTION,
  ScscButton,
  ScscCard,
  ScscColumn,
  ScscTable,
  ScscText,
  prefersReducedMotion,
} from '@scscourt/design';

interface Token {
  token: string;
  value: string;
  reduced: string;
  use: string;
}

@Component({
  selector: 'app-motion-tokens-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscTable, ScscText],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-table [columns]="columns" [rows]="tokens" />

      <scsc-card title="Easing curves">
        <div class="flex flex-col gap-3">
          @for (e of easings; track e.name) {
            <div class="flex flex-wrap items-center gap-3">
              <code class="w-52 shrink-0 text-sm">{{ e.name }}</code>
              <div class="relative h-2 min-w-40 flex-1 rounded-full bg-base-200" aria-hidden="true">
                <span
                  class="absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-primary"
                  [style.inset-inline-start]="played() ? 'calc(100% - 1rem)' : '0px'"
                  [style.transition]="animate() ? 'inset-inline-start 1s ' + e.curve : 'none'"
                ></span>
              </div>
            </div>
          }
        </div>
        <div
          slot="footer"
          class="flex flex-wrap items-center gap-3 border-t border-base-300 scsc-pad-card"
        >
          <scsc-button size="sm" (click)="play()">Play the curves</scsc-button>
          <scsc-text tone="muted" size="sm" role="status">{{ note() }}</scsc-text>
        </div>
      </scsc-card>
    </div>
  \`,
})
export class MotionTokensDemo {
  protected readonly columns: ScscColumn<Token>[] = [
    { key: 'token', header: 'Token' },
    { key: 'value', header: 'Value' },
    { key: 'reduced', header: 'Reduced motion' },
    { key: 'use', header: 'Use for' },
  ];

  protected readonly tokens: Token[] = [
    {
      token: '--scsc-duration-instant',
      value: \`\${MOTION.duration.instant}ms\`,
      reduced: 'unchanged',
      use: 'Press and hover feedback, colour changes',
    },
    {
      token: '--scsc-duration-fast',
      value: \`\${MOTION.duration.fast}ms\`,
      reduced: 'unchanged',
      use: 'Tooltips, menus, every leave preset',
    },
    {
      token: '--scsc-duration-base',
      value: \`\${MOTION.duration.base}ms\`,
      reduced: \`\${MOTION.duration.fast}ms\`,
      use: 'Enter presets, popovers, dialogs',
    },
    {
      token: '--scsc-duration-slow',
      value: \`\${MOTION.duration.slow}ms\`,
      reduced: \`\${MOTION.duration.fast}ms\`,
      use: 'Drawers, large panels, skeleton hand-off',
    },
    {
      token: '--scsc-ease-standard',
      value: MOTION.ease.standard,
      reduced: 'unchanged',
      use: 'Things moving or resizing on screen',
    },
    {
      token: '--scsc-ease-enter',
      value: MOTION.ease.enter,
      reduced: 'unchanged',
      use: 'Things arriving (decelerates)',
    },
    {
      token: '--scsc-ease-exit',
      value: MOTION.ease.exit,
      reduced: 'unchanged',
      use: 'Things leaving (accelerates)',
    },
    {
      token: '--scsc-ease-emphasized',
      value: MOTION.ease.emphasized,
      reduced: 'unchanged',
      use: 'A small overshoot for a success moment, sparingly',
    },
    {
      token: '--scsc-motion-distance',
      value: '0.5rem',
      reduced: '0px (slides become fades)',
      use: 'How far slide presets travel',
    },
    {
      token: '--scsc-motion-scale',
      value: '0.96',
      reduced: '1',
      use: 'Starting scale of the scale preset',
    },
    {
      token: '--scsc-stagger-step',
      value: \`\${MOTION.staggerStep}ms\`,
      reduced: '0ms',
      use: 'Delay between list items (\xD7 --scsc-stagger-index)',
    },
  ];

  protected readonly easings = [
    { name: '--scsc-ease-standard', curve: 'var(--scsc-ease-standard)' },
    { name: '--scsc-ease-enter', curve: 'var(--scsc-ease-enter)' },
    { name: '--scsc-ease-exit', curve: 'var(--scsc-ease-exit)' },
    { name: '--scsc-ease-emphasized', curve: 'var(--scsc-ease-emphasized)' },
  ];

  protected readonly played = signal(false);
  protected readonly animate = signal(true);
  protected readonly note = signal('');

  protected play(): void {
    // JS-driven motion checks the preference itself; CSS gets it from the tokens.
    const reduced = prefersReducedMotion();
    this.animate.set(!reduced);
    this.note.set(reduced ? 'Reduced motion is on, so the dots jump to the end.' : '');
    this.played.update((p) => !p);
  }
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-table [columns]="columns" [rows]="tokens" />

  <scsc-card title="Easing curves">
    <div class="flex flex-col gap-3">
      @for (e of easings; track e.name) {
        <div class="flex flex-wrap items-center gap-3">
          <code class="w-52 shrink-0 text-sm">{{ e.name }}</code>
          <div class="relative h-2 min-w-40 flex-1 rounded-full bg-base-200" aria-hidden="true">
            <span
              class="absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-primary"
              [style.inset-inline-start]="played() ? 'calc(100% - 1rem)' : '0px'"
              [style.transition]="animate() ? 'inset-inline-start 1s ' + e.curve : 'none'"
            ></span>
          </div>
        </div>
      }
    </div>
    <div
      slot="footer"
      class="flex flex-wrap items-center gap-3 border-t border-base-300 scsc-pad-card"
    >
      <scsc-button size="sm" (click)="play()">Play the curves</scsc-button>
      <scsc-text tone="muted" size="sm" role="status">{{ note() }}</scsc-text>
    </div>
  </scsc-card>
</div>
`}};var Ve={slug:`motion`,name:`Motion`,classes:[],category:`Primitives`,summary:"The only durations, easings and enter/leave animations components use: `--scsc-duration-*` and `--scsc-ease-*` tokens, `scsc-anim-*` presets for Angular’s native `animate.enter` / `animate.leave`, and `MOTION` / `prefersReducedMotion()` for motion driven from TypeScript.",whenToUse:['**Enter and leave**: put a preset on the element inside the `@if` / `@for`: `animate.enter="scsc-anim-slide-up-in"` and `animate.leave="scsc-anim-slide-up-out"`. Presets: `fade`, `slide-up`, `slide-down`, `slide-start`, `slide-end` (they flip in right-to-left pages), `scale`, `collapse` (height). No `@angular/animations`: it is deprecated and not a dependency.','**Stagger**: bind `[style.--scsc-stagger-index]="$index"` next to an enter preset; each item waits `--scsc-stagger-step` (40ms) × its index. Stagger the first 6–8 items at most.','**Your own CSS**: use the tokens (`transition: opacity var(--scsc-duration-fast) var(--scsc-ease-standard)`), never raw milliseconds, so reduced motion reaches them. For a keyframe the presets do not cover, add `@media (prefers-reduced-motion: reduce)` and `:root[data-motion="reduced"]` rules that stop it.',"**TypeScript**: `MOTION.duration.*` / `MOTION.ease.*` mirror the tokens for canvas, scroll or count-up animation; check `prefersReducedMotion()` first and jump to the end state when it is true.",`**Do**: animate to explain a change (something arrived, left, moved); keep it short (fast for small UI, base for panels, slow only for large surfaces); leave faster than you enter.`,`**Don’t**: animate on every hover or scroll; loop anything except a loading indicator; flash anything more than 3 times a second; move large areas of the page; delay the user (no motion should block input).`],demos:[{id:`motion-tokens`,title:`Tokens`,description:`Durations, easings and distances, with what reduced motion changes. Play the curves to compare the easings.`,component:B,source:D[`motion-tokens`]},{id:`motion-presets`,title:`Enter and leave presets`,description:"Pick a preset and toggle the notice: `@if` with `animate.enter` / `animate.leave`.",component:z,source:D[`motion-presets`]},{id:`motion-stagger`,title:`Stagger`,description:"`[style.--scsc-stagger-index]` on each row; reload the list to replay.",component:j,source:D[`motion-stagger`]},{id:`motion-reduced`,title:`Reduced motion`,description:"Switches `data-motion` on this page’s `<html>` (put back when you leave). Watch the card and the skeleton shimmer, and what `prefersReducedMotion()` reports.",component:$,source:D[`motion-reduced`]},{id:`motion-js`,title:`Motion from TypeScript`,description:"A count-up timed from `MOTION.duration`, skipped when `prefersReducedMotion()` is true.",component:I,source:D[`motion-js`]}],a11y:['Reduced motion (WCAG 2.3.3) comes from the OS setting, or from `data-motion="reduced"` on `<html>` (an in-app switch); `data-motion="full"` overrides the OS setting. Under it the tokens keep short fades but remove every slide, scale and stagger: `--scsc-motion-distance` becomes 0, `--scsc-motion-scale` 1, `--scsc-stagger-step` 0, and base/slow durations drop to fast.',`Library loaders go further under reduced motion: no shimmer, no breathing seal, no drawn checks, and the top progress bar moves in discrete steps.`,`Nothing in the library flashes more than 3 times a second (WCAG 2.3.1); loops (shimmer, breathing, spinners) run at 1.5–3.2 s a cycle.`,`Motion never carries meaning on its own: whatever arrives or changes is also in the content, and status changes are announced.`],aria:[`Presets are CSS classes only; they set no roles or states. The element keeps whatever semantics it has.`,`Leave presets keep an element in the page until its animation ends; put live-region text and focus moves on elements that stay.`],appMustProvide:['A way for users to reduce motion inside the app when it has more than incidental animation: set `data-motion="reduced"` on `<html>` from a preference.',"Reduced-motion rules for any keyframes of your own, and a `prefersReducedMotion()` check in any animation driven from TypeScript."],related:[`workspace-skeleton`,`page-loader`,`top-progress`,`skeleton-presets`,`theme`]};export{Ve as MOTION_DOCS};