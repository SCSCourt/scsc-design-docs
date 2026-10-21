import{Aa as It,As as uM,At as NP,Es as sD,Gi as yN,Go as g,Ho as fN,Hs as y_,I as EP,Io as dN,Jo as hM,Ka as Ov,Lo as d_,Ma as JT,Mi as vr,Ms as uc,Na as Jb,Nr as jo,O as Cn,Ps as ut,Qn as bN,Ss as rD,Vo as fM,Vr as mN,Xa as Pv,Yo as iD,Yr as oj,Zo as i_,_s as o_,bi as tn,bo as Y_,cs as lc,ds as nD,fn as Ua,ha as Eg,ka as Ig,ks as t_,kt as NE,nn as TN,ns as jv,pi as sn,ra as Af,sa as C_,ta as $f,ur as fA,va as G_,ws as r_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var B={"breakpoints-current":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  SCSC_BREAKPOINTS,
  ScscBreakpoints,
  ScscCard,
  ScscContainer,
  ScscDescriptionList,
  type ScscDescriptionItem,
  ScscText,
} from '@scscourt/design';

@Component({
  selector: 'app-breakpoints-current-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscContainer, ScscDescriptionList, ScscText],
  template: \`
    <main class="scsc-pad-page">
      <scsc-container width="sm">
        <scsc-card title="Current breakpoint">
          <p class="text-3xl font-semibold text-primary">{{ bp.current() }}</p>
          <scsc-text tone="muted" size="sm" class="mb-4 block">
            Each signal is true from its breakpoint up, so md is also true on a desktop.
          </scsc-text>
          <scsc-description-list [items]="rows()" />
        </scsc-card>
      </scsc-container>
    </main>
  \`,
})
export class BreakpointsCurrentDemo {
  protected readonly bp = inject(ScscBreakpoints);

  protected readonly rows = computed<ScscDescriptionItem[]>(() => [
    this.row('sm', this.bp.sm()),
    this.row('md', this.bp.md()),
    this.row('lg', this.bp.lg()),
    this.row('xl', this.bp.xl()),
    this.row('2xl', this.bp.xxl()),
  ]);

  private row(name: keyof typeof SCSC_BREAKPOINTS, on: boolean): ScscDescriptionItem {
    const rem = SCSC_BREAKPOINTS[name];
    const px = parseFloat(rem) * 16;
    return { term: \`\${name} \xB7 \${rem} (\${px}px)\`, value: on ? 'Yes' : 'No' };
  }
}
`,html:`<main class="scsc-pad-page">
  <scsc-container width="sm">
    <scsc-card title="Current breakpoint">
      <p class="text-3xl font-semibold text-primary">{{ bp.current() }}</p>
      <scsc-text tone="muted" size="sm" class="mb-4 block">
        Each signal is true from its breakpoint up, so md is also true on a desktop.
      </scsc-text>
      <scsc-description-list [items]="rows()" />
    </scsc-card>
  </scsc-container>
</main>
`},"breakpoints-drawer":{ts:`import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  ScscBreakpoints,
  ScscButton,
  ScscCard,
  ScscCheckbox,
  ScscDrawer,
  ScscList,
  ScscPageHeader,
  ScscText,
} from '@scscourt/design';

interface Hearing {
  id: string;
  time: string;
  title: string;
  type: string;
}

@Component({
  selector: 'app-breakpoints-drawer-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    ScscButton,
    ScscCard,
    ScscCheckbox,
    ScscDrawer,
    ScscList,
    ScscPageHeader,
    ScscText,
  ],
  template: \`
    <main class="scsc-pad-page">
      <scsc-page-header title="Hearings" description="Department 12 \xB7 Monday, October 5">
        @if (!bp.lg()) {
          <scsc-button slot="actions" variant="secondary" outline (click)="filtersOpen.set(true)">
            Filters ({{ shown().length }} of {{ types.length }})
          </scsc-button>
        }
      </scsc-page-header>

      <div class="mt-6 flex items-start gap-6">
        <!-- lg and up: the filters sit beside the list. -->
        @if (bp.lg()) {
          <aside class="w-60 shrink-0" aria-label="Filters">
            <scsc-card title="Hearing type">
              <ng-container [ngTemplateOutlet]="filters" />
            </scsc-card>
          </aside>
        }

        <scsc-card class="min-w-0 flex-1" [flush]="true">
          <scsc-list aria-label="Hearings">
            @for (h of visible(); track h.id) {
              <li class="flex items-baseline gap-4 px-5 py-3">
                <scsc-text tnum bold>{{ h.time }}</scsc-text>
                <div class="min-w-0">
                  <p class="font-medium">{{ h.title }}</p>
                  <scsc-text tone="muted" size="sm">{{ h.type }}</scsc-text>
                </div>
              </li>
            } @empty {
              <li class="px-5 py-6 text-center text-base-content/70">
                No hearings match the filters.
              </li>
            }
          </scsc-list>
        </scsc-card>
      </div>

      <!-- Below lg: the same filters in a drawer. Rendered in one place only, so ids stay unique. -->
      @if (!bp.lg()) {
        <scsc-drawer title="Filters" side="start" [(open)]="filtersOpen">
          <ng-container [ngTemplateOutlet]="filters" />
        </scsc-drawer>
      }
    </main>

    <ng-template #filters>
      <fieldset class="flex flex-col gap-2">
        <legend class="mb-1 text-sm font-medium">Show</legend>
        @for (t of types; track t) {
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              scsc-checkbox
              [checked]="shown().includes(t)"
              (change)="toggle(t)"
            />
            <span>{{ t }}</span>
          </label>
        }
      </fieldset>
    </ng-template>
  \`,
})
export class BreakpointsDrawerDemo {
  protected readonly bp = inject(ScscBreakpoints);
  protected readonly filtersOpen = signal(false);

  protected readonly types = ['Case management', 'Motion', 'Trial setting'];
  protected readonly shown = signal<string[]>([...this.types]);

  private readonly hearings: Hearing[] = [
    { id: 'h1', time: '8:30', title: '24CV012345 \u2014 Alvarez v. Northgate', type: 'Case management' },
    { id: 'h2', time: '9:00', title: '23CV008812 \u2014 Chen v. Bayview Motors', type: 'Motion' },
    { id: 'h3', time: '10:15', title: '24CV013002 \u2014 In re Estate of Park', type: 'Trial setting' },
    { id: 'h4', time: '1:30', title: '24CV010417 \u2014 Singh v. Coastal Freight', type: 'Motion' },
  ];

  protected readonly visible = computed(() =>
    this.hearings.filter((h) => this.shown().includes(h.type)),
  );

  protected toggle(type: string): void {
    this.shown.update((s) => (s.includes(type) ? s.filter((t) => t !== type) : [...s, type]));
  }
}
`,html:`<main class="scsc-pad-page">
  <scsc-page-header title="Hearings" description="Department 12 \xB7 Monday, October 5">
    @if (!bp.lg()) {
      <scsc-button slot="actions" variant="secondary" outline (click)="filtersOpen.set(true)">
        Filters ({{ shown().length }} of {{ types.length }})
      </scsc-button>
    }
  </scsc-page-header>

  <div class="mt-6 flex items-start gap-6">
    <!-- lg and up: the filters sit beside the list. -->
    @if (bp.lg()) {
      <aside class="w-60 shrink-0" aria-label="Filters">
        <scsc-card title="Hearing type">
          <ng-container [ngTemplateOutlet]="filters" />
        </scsc-card>
      </aside>
    }

    <scsc-card class="min-w-0 flex-1" [flush]="true">
      <scsc-list aria-label="Hearings">
        @for (h of visible(); track h.id) {
          <li class="flex items-baseline gap-4 px-5 py-3">
            <scsc-text tnum bold>{{ h.time }}</scsc-text>
            <div class="min-w-0">
              <p class="font-medium">{{ h.title }}</p>
              <scsc-text tone="muted" size="sm">{{ h.type }}</scsc-text>
            </div>
          </li>
        } @empty {
          <li class="px-5 py-6 text-center text-base-content/70">
            No hearings match the filters.
          </li>
        }
      </scsc-list>
    </scsc-card>
  </div>

  <!-- Below lg: the same filters in a drawer. Rendered in one place only, so ids stay unique. -->
  @if (!bp.lg()) {
    <scsc-drawer title="Filters" side="start" [(open)]="filtersOpen">
      <ng-container [ngTemplateOutlet]="filters" />
    </scsc-drawer>
  }
</main>

<ng-template #filters>
  <fieldset class="flex flex-col gap-2">
    <legend class="mb-1 text-sm font-medium">Show</legend>
    @for (t of types; track t) {
      <label class="flex items-center gap-2">
        <input
          type="checkbox"
          scsc-checkbox
          [checked]="shown().includes(t)"
          (change)="toggle(t)"
        />
        <span>{{ t }}</span>
      </label>
    }
  </fieldset>
</ng-template>
`},"breakpoints-observe-size":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ScscPagination, ScscText, observeSize } from '@scscourt/design';

@Component({
  selector: 'app-breakpoints-observe-size-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPagination, ScscText],
  host: { class: 'block' },
  template: \`
    <scsc-text tone="muted" size="sm" tnum class="mb-3 block">
      {{ width() }}px wide \xB7 {{ siblings() }} page buttons each side of the current page
    </scsc-text>
    <scsc-pagination [(page)]="page" [totalPages]="48" [siblings]="siblings()" />
  \`,
})
export class BreakpointsObserveSizeDemo {
  /** The component's own width, so it adapts in a sidebar as well as on a phone. */
  private readonly size = observeSize(inject(ElementRef));

  protected readonly page = signal(12);
  protected readonly width = computed(() => Math.round(this.size().width));
  /** Fewer page buttons as the space shrinks; 0 (not yet measured) keeps the full set. */
  protected readonly siblings = computed(() => {
    const w = this.size().width;
    if (w === 0 || w >= 560) return 2;
    return w >= 400 ? 1 : 0;
  });
}
`,html:`<scsc-text tone="muted" size="sm" tnum class="mb-3 block">
  {{ width() }}px wide \xB7 {{ siblings() }} page buttons each side of the current page
</scsc-text>
<scsc-pagination [(page)]="page" [totalPages]="48" [siblings]="siblings()" />
`},"breakpoints-resize":{ts:`import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscDropdown,
  type ScscMenuItem,
  ScscResize,
  ScscText,
} from '@scscourt/design';

@Component({
  selector: 'app-breakpoints-resize-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe, ScscButton, ScscCard, ScscDropdown, ScscResize, ScscText],
  template: \`
    <scsc-card title="24CV012345 \u2014 Alvarez v. Northgate Property Mgmt.">
      <!-- Measure the row the actions live in, not the window: the card may sit in a narrow column. -->
      <div
        scscResize
        #bar="scscResize"
        (scscResize)="narrow.set($event.width < 520)"
        class="flex flex-wrap items-center justify-between gap-3"
      >
        <scsc-text tone="muted" size="sm" tnum>
          Action row: {{ bar.size().width | number: '1.0-0' }}px
        </scsc-text>
        @if (narrow()) {
          <scsc-dropdown
            label="Case actions"
            align="end"
            [items]="actions"
            (select)="run($event)"
          />
        } @else {
          <div class="flex gap-2">
            @for (a of actions; track a.id) {
              <scsc-button size="sm" variant="secondary" outline (click)="run(a.id)">{{
                a.label
              }}</scsc-button>
            }
          </div>
        }
      </div>
      <p class="mt-4 text-sm text-base-content/70" aria-live="polite">{{ last() }}</p>
    </scsc-card>
  \`,
})
export class BreakpointsResizeDemo {
  /** Starts wide: until the first measurement (and on the server) the full row is shown. */
  protected readonly narrow = signal(false);
  protected readonly last = signal('');

  protected readonly actions: ScscMenuItem[] = [
    { id: 'hearing', label: 'Schedule hearing' },
    { id: 'minute', label: 'Add minute order' },
    { id: 'notice', label: 'Send notice' },
  ];

  protected run(id: string): void {
    const action = this.actions.find((a) => a.id === id);
    this.last.set(action ? \`\${action.label}: started for 24CV012345.\` : '');
  }
}
`,html:`<scsc-card title="24CV012345 \u2014 Alvarez v. Northgate Property Mgmt.">
  <!-- Measure the row the actions live in, not the window: the card may sit in a narrow column. -->
  <div
    scscResize
    #bar="scscResize"
    (scscResize)="narrow.set($event.width < 520)"
    class="flex flex-wrap items-center justify-between gap-3"
  >
    <scsc-text tone="muted" size="sm" tnum>
      Action row: {{ bar.size().width | number: '1.0-0' }}px
    </scsc-text>
    @if (narrow()) {
      <scsc-dropdown
        label="Case actions"
        align="end"
        [items]="actions"
        (select)="run($event)"
      />
    } @else {
      <div class="flex gap-2">
        @for (a of actions; track a.id) {
          <scsc-button size="sm" variant="secondary" outline (click)="run(a.id)">{{
            a.label
          }}</scsc-button>
        }
      </div>
    }
  </div>
  <p class="mt-4 text-sm text-base-content/70" aria-live="polite">{{ last() }}</p>
</scsc-card>
`}};var N=class t{bp=g(Cn);rows=ut(()=>[this.row(`sm`,this.bp.sm()),this.row(`md`,this.bp.md()),this.row(`lg`,this.bp.lg()),this.row(`xl`,this.bp.xl()),this.row(`2xl`,this.bp.xxl())]);row(s,e){let n=oj[s];return{term:`${s} \xB7 ${n} (${parseFloat(n)*16}px)`,value:e?`Yes`:`No`}}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-breakpoints-current-demo`]],decls:8,vars:2,consts:[[1,`scsc-pad-page`],[`width`,`sm`],[`title`,`Current breakpoint`],[1,`text-3xl`,`font-semibold`,`text-primary`],[`tone`,`muted`,`size`,`sm`,1,`mb-4`,`block`],[3,`items`]],template:function(e,n){e&1&&(Ga(0,`main`,0)(1,`scsc-container`,1)(2,`scsc-card`,2)(3,`p`,3),G_(4),Lf(),Ga(5,`scsc-text`,4),G_(6,` Each signal is true from its breakpoint up, so md is also true on a desktop. `),Lf(),uc(7,`scsc-description-list`,5),Lf()()()),e&2&&(Jb(4),nD(n.bp.current()),Jb(3),Pv(`items`,n.rows()))},dependencies:[mN,yN,NP,NE],encapsulation:2})};var le=(t,s)=>s.id;function pe(t,s){if(t&1){let e=d_();Ga(0,`scsc-button`,11),lc(`click`,function(){Eg(e);let r=y_();return Ig(r.filtersOpen.set(!0))}),G_(1),Lf()}if(t&2){let e=y_();Jb(),rD(` Filters (`,e.shown().length,` of `,e.types.length,`) `)}}function de(t,s){if(t&1&&(Ga(0,`aside`,5)(1,`scsc-card`,12),jv(2,13),Lf()()),t&2){y_();let e=C_(12);Jb(2),Pv(`ngTemplateOutlet`,e)}}function me(t,s){if(t&1&&(Ga(0,`li`,8)(1,`scsc-text`,14),G_(2),Lf(),Ga(3,`div`,15)(4,`p`,16),G_(5),Lf(),Ga(6,`scsc-text`,17),G_(7),Lf()()()),t&2){let e=s.$implicit;Jb(2),nD(e.time),Jb(3),nD(e.title),Jb(2),nD(e.type)}}function he(t,s){t&1&&(Ga(0,`li`,9),G_(1,` No hearings match the filters. `),Lf())}function ge(t,s){if(t&1){let e=d_();Ga(0,`scsc-drawer`,18),sD(`openChange`,function(r){Eg(e);let l=y_();return Y_(l.filtersOpen,r)||(l.filtersOpen=r),Ig(r)}),jv(1,13),Lf()}if(t&2){let e=y_(),n=C_(12);iD(`open`,e.filtersOpen),Jb(),Pv(`ngTemplateOutlet`,n)}}function ue(t,s){if(t&1){let e=d_();Ga(0,`label`,21)(1,`input`,22),lc(`change`,function(){let r=Eg(e).$implicit,l=y_(2);return Ig(l.toggle(r))}),Lf(),Ga(2,`span`),G_(3),Lf()()}if(t&2){let e=s.$implicit,n=y_(2);Jb(),Pv(`checked`,n.shown().includes(e)),Jb(2),nD(e)}}function be(t,s){if(t&1&&(Ga(0,`fieldset`,19)(1,`legend`,20),G_(2,`Show`),Lf(),o_(3,ue,4,2,`label`,21,r_),Lf()),t&2){let e=y_();Jb(3),i_(e.types)}}var P=class t{bp=g(Cn);filtersOpen=q(!1);types=[`Case management`,`Motion`,`Trial setting`];shown=q([...this.types]);hearings=[{id:`h1`,time:`8:30`,title:`24CV012345 — Alvarez v. Northgate`,type:`Case management`},{id:`h2`,time:`9:00`,title:`23CV008812 — Chen v. Bayview Motors`,type:`Motion`},{id:`h3`,time:`10:15`,title:`24CV013002 — In re Estate of Park`,type:`Trial setting`},{id:`h4`,time:`1:30`,title:`24CV010417 — Singh v. Coastal Freight`,type:`Motion`}];visible=ut(()=>this.hearings.filter(s=>this.shown().includes(s.type)));toggle(s){this.shown.update(e=>e.includes(s)?e.filter(n=>n!==s):[...e,s])}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-breakpoints-drawer-demo`]],decls:13,vars:5,consts:[[`filters`,``],[1,`scsc-pad-page`],[`title`,`Hearings`,`description`,`Department 12 · Monday, October 5`],[`slot`,`actions`,`variant`,`secondary`,`outline`,``],[1,`mt-6`,`flex`,`items-start`,`gap-6`],[`aria-label`,`Filters`,1,`w-60`,`shrink-0`],[1,`min-w-0`,`flex-1`,3,`flush`],[`aria-label`,`Hearings`],[1,`flex`,`items-baseline`,`gap-4`,`px-5`,`py-3`],[1,`px-5`,`py-6`,`text-center`,`text-base-content/70`],[`title`,`Filters`,`side`,`start`,3,`open`],[`slot`,`actions`,`variant`,`secondary`,`outline`,``,3,`click`],[`title`,`Hearing type`],[3,`ngTemplateOutlet`],[`tnum`,``,`bold`,``],[1,`min-w-0`],[1,`font-medium`],[`tone`,`muted`,`size`,`sm`],[`title`,`Filters`,`side`,`start`,3,`openChange`,`open`],[1,`flex`,`flex-col`,`gap-2`],[1,`mb-1`,`text-sm`,`font-medium`],[1,`flex`,`items-center`,`gap-2`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`]],template:function(e,n){e&1&&(Ga(0,`main`,1)(1,`scsc-page-header`,2),JT(2,pe,2,2,`scsc-button`,3),Lf(),Ga(3,`div`,4),JT(4,de,3,1,`aside`,5),Ga(5,`scsc-card`,6)(6,`scsc-list`,7),o_(7,me,8,3,`li`,8,le,!1,he,2,0,`li`,9),Lf()()(),JT(10,ge,2,2,`scsc-drawer`,10),Lf(),Ov(11,be,5,0,`ng-template`,null,0,hM)),e&2&&(Jb(2),t_(n.bp.lg()?-1:2),Jb(2),t_(n.bp.lg()?4:-1),Jb(),Pv(`flush`,!0),Jb(2),i_(n.visible()),Jb(3),t_(n.bp.lg()?-1:10))},dependencies:[dN,sn,mN,jo,vr,EP,TN,NE],encapsulation:2})};var V=class t{size=tn(g(It));page=q(12);width=ut(()=>Math.round(this.size().width));siblings=ut(()=>{let s=this.size().width;return s===0||s>=560?2:s>=400?1:0});static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-breakpoints-observe-size-demo`]],hostAttrs:[1,`block`],decls:3,vars:5,consts:[[`tone`,`muted`,`size`,`sm`,`tnum`,``,1,`mb-3`,`block`],[3,`pageChange`,`page`,`totalPages`,`siblings`]],template:function(e,n){e&1&&(Ga(0,`scsc-text`,0),G_(1),Lf(),Ga(2,`scsc-pagination`,1),sD(`pageChange`,function(l){return Y_(n.page,l)||(n.page=l),l}),Lf()),e&2&&(Jb(),rD(` `,n.width(),`px wide · `,n.siblings(),` page buttons each side of the current page `),Jb(),iD(`page`,n.page),Pv(`totalPages`,48)(`siblings`,n.siblings()))},dependencies:[Ua,NE],encapsulation:2})};var fe=(t,s)=>s.id;function ye(t,s){if(t&1){let e=d_();Ga(0,`scsc-dropdown`,7),lc(`select`,function(r){Eg(e);let l=y_();return Ig(l.run(r))}),Lf()}if(t&2){let e=y_();Pv(`items`,e.actions)}}function we(t,s){if(t&1){let e=d_();Ga(0,`scsc-button`,9),lc(`click`,function(){let r=Eg(e).$implicit,l=y_(2);return Ig(l.run(r.id))}),G_(1),Lf()}if(t&2){let e=s.$implicit;Jb(),nD(e.label)}}function xe(t,s){if(t&1&&(Ga(0,`div`,5),o_(1,we,2,1,`scsc-button`,8,fe),Lf()),t&2){let e=y_();Jb(),i_(e.actions)}}var F=class t{narrow=q(!1);last=q(``);actions=[{id:`hearing`,label:`Schedule hearing`},{id:`minute`,label:`Add minute order`},{id:`notice`,label:`Send notice`}];run(s){let e=this.actions.find(n=>n.id===s);this.last.set(e?`${e.label}: started for 24CV012345.`:``)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-breakpoints-resize-demo`]],decls:10,vars:6,consts:[[`bar`,`scscResize`],[`title`,`24CV012345 — Alvarez v. Northgate Property Mgmt.`],[`scscResize`,``,1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`,3,`scscResize`],[`tone`,`muted`,`size`,`sm`,`tnum`,``],[`label`,`Case actions`,`align`,`end`,3,`items`],[1,`flex`,`gap-2`],[`aria-live`,`polite`,1,`mt-4`,`text-sm`,`text-base-content/70`],[`label`,`Case actions`,`align`,`end`,3,`select`,`items`],[`size`,`sm`,`variant`,`secondary`,`outline`,``],[`size`,`sm`,`variant`,`secondary`,`outline`,``,3,`click`]],template:function(e,n){if(e&1&&(Ga(0,`scsc-card`,1)(1,`div`,2,0),lc(`scscResize`,function(l){return n.narrow.set(l.width<520)}),Ga(3,`scsc-text`,3),G_(4),uM(5,`number`),Lf(),JT(6,ye,1,1,`scsc-dropdown`,4)(7,xe,3,0,`div`,5),Lf(),Ga(8,`p`,6),G_(9),Lf()()),e&2){let r=C_(2);Jb(4),$f(` Action row: `,fM(5,3,r.size().width,`1.0-0`),`px `),Jb(2),t_(n.narrow()?6:7),Jb(3),nD(n.last())}},dependencies:[sn,mN,fA,bN,NE,fN],encapsulation:2})};var Ge={slug:`breakpoints`,name:`Breakpoints & resize`,classes:[`ScscBreakpoints`,`ScscResize`],category:`Services & Directives`,summary:"The responsive toolkit for the cases CSS cannot cover: `ScscBreakpoints` exposes the viewport breakpoints as signals, and `observeSize()` / the `scscResize` directive report an element’s own size. Both are for changing the DOM (a drawer instead of a sidebar, a menu instead of a row of buttons); styling alone belongs in `md:` utilities and container queries.",whenToUse:["Style first, script second. If only classes change, write `md:grid-cols-2` (viewport) or `@container` + `@md:grid-cols-2` (the component’s own width). Reach for these APIs only when the markup must differ: a modal drawer versus an inline panel, fewer pagination buttons, a different chart.","`ScscBreakpoints` (provided in root): `sm()`, `md()`, `lg()`, `xl()`, `xxl()` are true from that breakpoint up, matching Tailwind’s `sm:` … `2xl:` exactly (`SCSC_BREAKPOINTS`: 40, 48, 64, 80 and 96rem). `current()` names the widest one reached, or `base` below 40rem. `matches(query)` takes any media query and shares one listener per query.","`observeSize(elementRef)` returns a `Signal<{ width, height }>` of an element’s content box. Call it in a constructor or field initializer (or pass `{ injector }`); it disconnects when the component is destroyed.",'`[scscResize]` is the template form: read `#box="scscResize"` → `box.size()`, or handle `(scscResize)` to update your own state. Put it on the element whose width decides the layout, not on the content that changes.',`Prefer element size over viewport size inside reusable components: the same card can sit in a 20rem sidebar on a wide screen. Use the viewport for page-level decisions, such as whether the shell shows a sidebar.`,"On the server, and before the first measurement, breakpoints are `false` / `base` and sizes are `0 × 0`. Design the default so that it is acceptable on every screen (the demos treat an unmeasured width as wide)."],demos:[{id:`breakpoints-current`,title:`Current breakpoint`,description:"`ScscBreakpoints` follows the viewport, so this demo runs in a frame: switch the preview width to Tablet (768px, `md`) or Mobile (390px, `base`).",component:N,source:B[`breakpoints-current`],layout:`page`,height:`26rem`},{id:`breakpoints-drawer`,title:`Inline filters on desktop, a drawer below lg`,description:"The DOM has to change here: a drawer is a modal dialog, and rendering the filters twice would duplicate their controls. `lg()` decides which one exists.",component:P,source:B[`breakpoints-drawer`],layout:`page`,height:`30rem`},{id:`breakpoints-resize`,title:`scscResize: a button row that becomes a menu`,description:"The directive measures the action row itself. Below 520px the three buttons collapse into one `scsc-dropdown`; narrow the window to see it switch.",component:F,source:B[`breakpoints-resize`]},{id:`breakpoints-observe-size`,title:`observeSize(): fewer page buttons in less space`,description:"A component reads its own width and passes a smaller `siblings` to `scsc-pagination`, so the pager fits a phone or a side panel without scrolling.",component:V,source:B[`breakpoints-observe-size`]}],a11y:[`Changing the DOM at a breakpoint must not change what users can do: every action and every filter stays reachable, only its container changes (a row of buttons becomes a menu, a panel becomes a drawer).`,"Keep one copy of each control in the DOM. Hiding a duplicate with CSS still leaves two elements with the same `id` and label; render one or the other with `@if`, as the drawer demo does.","When a breakpoint removes the element that has focus (in the drawer demo, an open drawer when the window widens past `lg`), focus falls back to `<body>`. If that can happen in your screen, move focus to the equivalent control in the new layout.","Nothing here announces size changes: a layout change is visual, and announcing it would be noise. Announce results of user actions instead (the resize demo’s `aria-live` line).","Breakpoints are in `rem`, and browser zoom shrinks the viewport in CSS pixels, so a 1280px window zoomed to 200% reports `sm` (640px) and gets the small-screen layout, as WCAG 1.4.10 (reflow) expects."],related:[`layout-primitives`,`shells`,`page-shell`,`drawer`,`dropdown`,`pagination`]};export{Ge as BREAKPOINTS_DOCS};