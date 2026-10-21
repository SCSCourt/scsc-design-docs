import{At as NP,H as FN,I as EP,J as Foe,Ms as uc,Na as Jb,Ss as rD,Vr as mN,Xa as Pv,Xt as RP,Zo as i_,_ as Aoe,_s as o_,at as IR,cs as lc,kn as XF,kt as NE,nn as TN,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var C=class n{booting=q(!0);constructor(){this.restart()}restart(){this.booting.set(!0),setTimeout(()=>this.booting.set(!1),2e3)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-boot-demo`]],decls:9,vars:2,consts:[[`fullPage`,``,`appName`,`Clerk Console`,`message`,`Opening your work queue`,3,`show`,`delay`],[`slot`,`masthead`,`title`,`Clerk Console`,`subtitle`,`Civil Division`],[`title`,`Work queue`,`description`,`Filings waiting for review.`],[`slot`,`actions`,`variant`,`neutral`,`outline`,``,3,`click`],[`title`,`12 filings to review`,1,`mt-6`]],template:function(e,t){e&1&&(Ga(0,`scsc-page-loader`,0)(1,`scsc-page-shell`),uc(2,`scsc-masthead`,1),Ga(3,`scsc-page-header`,2)(4,`scsc-button`,3),lc(`click`,function(){return t.restart()}),G_(5,` Restart the app `),Lf()(),Ga(6,`scsc-card`,4)(7,`p`),G_(8,`Motions, proofs of service and amended complaints filed since yesterday.`),Lf()()()()),e&2&&Pv(`show`,t.booting())(`delay`,0)},dependencies:[sn,mN,FN,TN,IR,XF],encapsulation:2})};var D=class n{loading=q(!0);constructor(){setTimeout(()=>this.loading.set(!1),2500)}load(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2500)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-dark-demo`]],decls:8,vars:1,consts:[[`data-theme`,`scsc-design-dark`,1,`flex`,`max-w-xl`,`flex-col`,`gap-3`,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[`message`,`Loading Dept. 5 calendar`,3,`show`],[`title`,`Dept. 5 · Tuesday, October 13, 2026`],[`tone`,`muted`,`size`,`sm`,1,`block`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-button`,1),lc(`click`,function(){return t.load()}),G_(3,` Reload calendar `),Lf()(),Ga(4,`scsc-page-loader`,2)(5,`scsc-card`,3)(6,`scsc-text`,4),G_(7,` 14 matters: 6 case management conferences, 5 motions, 3 trial-setting conferences. `),Lf()()()()),e&2&&(Jb(4),Pv(`show`,t.loading()))},dependencies:[sn,mN,IR,NE],encapsulation:2})};var w=class n{loading=q(!0);constructor(){setTimeout(()=>this.loading.set(!1),2500)}load(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2500)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-logo-demo`]],decls:8,vars:2,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`logoSrc`,`scsc-seal.png`,`appName`,`Jury Services`,`message`,`Loading your summons`,3,`show`],[`title`,`Summons 2026-0415`],[`tone`,`muted`,`size`,`sm`,1,`block`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[3,`click`,`disabled`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-page-loader`,1)(2,`scsc-card`,2)(3,`scsc-text`,3),G_(4,` Report Monday, October 12, 2026 at 8:00 AM, Downtown Superior Court. `),Lf(),Ga(5,`div`,4)(6,`scsc-button`,5),lc(`click`,function(){return t.load()}),G_(7,`Reload summons`),Lf()()()()()),e&2&&(Jb(),Pv(`show`,t.loading()),Jb(5),Pv(`disabled`,t.loading()))},dependencies:[sn,mN,IR,NE],encapsulation:2})};var J=(n,c)=>c.no;function W(n,c){if(n&1&&(Ga(0,`li`,4)(1,`span`,5),G_(2),Lf(),G_(3),Lf()),n&2){let e=c.$implicit;Jb(2),rD(``,e.no,` · `,e.date),Jb(),$f(` — `,e.text,` `)}}var k=class n{loading=q(!1);docket=Array.from({length:24},(c,e)=>({no:24-e,date:`Sep ${String(30-e).padStart(2,`0`)}, 2026`,text:H[e%H.length]}));refresh(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),3e3)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-long-demo`]],decls:9,vars:1,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[`message`,`Refreshing the docket for 24CV012345`,3,`show`],[`title`,`Docket · 24CV012345 · Alvarez v. Chen`],[1,`py-3`,`text-sm`],[1,`text-base-content/70`,`tnum`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-button`,1),lc(`click`,function(){return t.refresh()}),G_(3,` Refresh the docket `),Lf()(),Ga(4,`scsc-page-loader`,2)(5,`scsc-card`,3)(6,`scsc-list`),o_(7,W,4,3,`li`,4,J),Lf()()()()),e&2&&(Jb(4),Pv(`show`,t.loading()),Jb(3),i_(t.docket))},dependencies:[sn,mN,EP,IR],encapsulation:2})};var H=[`Proof of service of summons filed by Plaintiff`,`Case management statement filed by Defendant`,`Notice of motion and motion to compel further responses`,`Declaration of counsel in support of motion`,`Minute order: case management conference continued`,`Opposition to motion to compel filed by Plaintiff`];var L=class n{loading=q(!1);fields=[{term:`Case`,value:`24CV009876 · Chen v. Alvarez`},{term:`Relation`,value:`Cross-complaint`},{term:`Status`,value:`Stayed pending 24CV012345`}];load(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-minimal-demo`]],decls:7,vars:2,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-3`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[`variant`,`minimal`,`size`,`sm`,`message`,`Loading 24CV009876`,3,`show`],[`title`,`Related case`],[3,`items`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-button`,1),lc(`click`,function(){return t.load()}),G_(3,` Load related case `),Lf()(),Ga(4,`scsc-page-loader`,2)(5,`scsc-card`,3),uc(6,`scsc-description-list`,4),Lf()()()),e&2&&(Jb(4),Pv(`show`,t.loading()),Jb(2),Pv(`items`,t.fields))},dependencies:[sn,mN,NP,IR],encapsulation:2})};var P=class n{loading=q(!1);fields=[{term:`Plaintiff`,value:`Maria Alvarez`},{term:`Defendant`,value:`Daniel Chen`},{term:`Counsel`,value:`Rivera & Park LLP`}];load(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2500)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-mode-demo`]],decls:11,vars:4,consts:[[1,`flex`,`flex-col`,`gap-3`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[`message`,`Refreshing party details`,3,`show`],[`title`,`Overlay`],[3,`items`],[`mode`,`replace`,`message`,`Loading party details`,3,`show`],[`title`,`Replace`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-button`,1),lc(`click`,function(){return t.load()}),G_(3,`Reload both`),Lf()(),Ga(4,`div`,2)(5,`scsc-page-loader`,3)(6,`scsc-card`,4),uc(7,`scsc-description-list`,5),Lf()(),Ga(8,`scsc-page-loader`,6)(9,`scsc-card`,7),uc(10,`scsc-description-list`,5),Lf()()()()),e&2&&(Jb(5),Pv(`show`,t.loading()),Jb(2),Pv(`items`,t.fields),Jb(),Pv(`show`,t.loading()),Jb(2),Pv(`items`,t.fields))},dependencies:[sn,mN,NP,IR],encapsulation:2})};var _=class n{importing=q(!1);percent=q(0);start(){this.percent.set(0),this.importing.set(!0);let c=setInterval(()=>{this.percent.update(e=>Math.min(100,e+10)),this.percent()===100&&(clearInterval(c),this.importing.set(!1))},250)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-progress-demo`]],decls:8,vars:3,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`message`,`Importing the October juror pool`,3,`show`,`progress`],[`title`,`Juror pool · October 2026`],[`tone`,`muted`,`size`,`sm`,1,`block`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[3,`click`,`disabled`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-page-loader`,1)(2,`scsc-card`,2)(3,`scsc-text`,3),G_(4,` 1,240 summoned jurors from the DMV and voter rolls. `),Lf(),Ga(5,`div`,4)(6,`scsc-button`,5),lc(`click`,function(){return t.start()}),G_(7,`Import pool`),Lf()()()()()),e&2&&(Jb(),Pv(`show`,t.importing())(`progress`,t.percent()),Jb(5),Pv(`disabled`,t.importing()))},dependencies:[sn,mN,IR,NE],encapsulation:2})};var T=class n{loading=q(!1);fields=[{term:`Case type`,value:`Civil · Unlimited`},{term:`Department`,value:`Dept. 5 · Hon. R. Okafor`},{term:`Next hearing`,value:`Oct 14, 2026 · 9:00 AM`}];open(c){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),c)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-route-demo`]],decls:11,vars:2,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[`message`,`Loading case 24CV012345`,3,`show`],[`title`,`Case 24CV012345 · Alvarez v. Chen`],[3,`items`],[1,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-button`,2),lc(`click`,function(){return t.open(150)}),G_(3,` Fast load (150 ms) `),Lf(),Ga(4,`scsc-button`,2),lc(`click`,function(){return t.open(2e3)}),G_(5,` Slow load (2 s) `),Lf()(),Ga(6,`scsc-page-loader`,3)(7,`scsc-card`,4),uc(8,`scsc-description-list`,5),Lf()(),Ga(9,`p`,6),G_(10,` A fast load finishes inside the 300 ms delay, so nothing flashes; a slow one shows the loader and holds it for at least 500 ms. `),Lf()()),e&2&&(Jb(6),Pv(`show`,t.loading()),Jb(2),Pv(`items`,t.fields))},dependencies:[sn,mN,NP,IR],encapsulation:2})};var R=class n{styleTag=`<style>${Aoe}</style>`;rootTag=`<app-root>
${Foe}
</app-root>`;static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-page-loader-splash-demo`]],decls:16,vars:2,consts:[[1,`flex`,`flex-col`,`gap-4`],[`size`,`sm`,1,`block`],[`language`,`html`,3,`code`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-text`,1),G_(2,` 1. In `),Ga(3,`code`),G_(4,`src/index.html`),Lf(),G_(5,`, inside `),Ga(6,`code`),G_(7,`<head>`),Lf(),G_(8,`: `),Lf(),uc(9,`scsc-code-block`,2),Ga(10,`scsc-text`,1),G_(11,` 2. Inside `),Ga(12,`code`),G_(13,`<app-root>`),Lf(),G_(14,` (Angular clears it when the app starts): `),Lf(),uc(15,`scsc-code-block`,2),Lf()),e&2&&(Jb(9),Pv(`code`,t.styleTag),Jb(6),Pv(`code`,t.rootTag))},dependencies:[RP,NE],encapsulation:2})};var f={"page-loader-boot":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscMasthead,
  ScscPageHeader,
  ScscPageLoader,
  ScscPageShell,
} from '@scscourt/design';

@Component({
  selector: 'app-page-loader-boot-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscMasthead, ScscPageHeader, ScscPageLoader, ScscPageShell],
  template: \`
    <!-- In app.ts. Delay 0: the index.html splash is already on screen, so there is nothing to
         flash. Wrapping the shell keeps it inert and aria-busy until the loader lifts. -->
    <scsc-page-loader
      fullPage
      [show]="booting()"
      [delay]="0"
      appName="Clerk Console"
      message="Opening your work queue"
    >
      <scsc-page-shell>
        <scsc-masthead slot="masthead" title="Clerk Console" subtitle="Civil Division" />
        <scsc-page-header title="Work queue" description="Filings waiting for review.">
          <scsc-button slot="actions" variant="neutral" outline (click)="restart()">
            Restart the app
          </scsc-button>
        </scsc-page-header>
        <scsc-card class="mt-6" title="12 filings to review">
          <p>Motions, proofs of service and amended complaints filed since yesterday.</p>
        </scsc-card>
      </scsc-page-shell>
    </scsc-page-loader>
  \`,
})
export class PageLoaderBootDemo {
  // In an app: true until the first NavigationEnd (and any start-up data) has arrived.
  protected readonly booting = signal(true);

  constructor() {
    this.restart();
  }

  protected restart(): void {
    this.booting.set(true);
    setTimeout(() => this.booting.set(false), 2000);
  }
}
`,html:`<!-- In app.ts. Delay 0: the index.html splash is already on screen, so there is nothing to
     flash. Wrapping the shell keeps it inert and aria-busy until the loader lifts. -->
<scsc-page-loader
  fullPage
  [show]="booting()"
  [delay]="0"
  appName="Clerk Console"
  message="Opening your work queue"
>
  <scsc-page-shell>
    <scsc-masthead slot="masthead" title="Clerk Console" subtitle="Civil Division" />
    <scsc-page-header title="Work queue" description="Filings waiting for review.">
      <scsc-button slot="actions" variant="neutral" outline (click)="restart()">
        Restart the app
      </scsc-button>
    </scsc-page-header>
    <scsc-card class="mt-6" title="12 filings to review">
      <p>Motions, proofs of service and amended complaints filed since yesterday.</p>
    </scsc-card>
  </scsc-page-shell>
</scsc-page-loader>
`},"page-loader-dark":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscPageLoader, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscPageLoader, ScscText],
  template: \`
    <!-- The loader reads the theme's colours: here the dark theme, scoped to one subtree. -->
    <div
      data-theme="scsc-design-dark"
      class="flex max-w-xl flex-col gap-3 rounded-box bg-base-200 p-4 text-base-content"
    >
      <div>
        <scsc-button size="sm" variant="neutral" outline (click)="load()">
          Reload calendar
        </scsc-button>
      </div>
      <scsc-page-loader [show]="loading()" message="Loading Dept. 5 calendar">
        <scsc-card title="Dept. 5 \xB7 Tuesday, October 13, 2026">
          <scsc-text tone="muted" size="sm" class="block">
            14 matters: 6 case management conferences, 5 motions, 3 trial-setting conferences.
          </scsc-text>
        </scsc-card>
      </scsc-page-loader>
    </div>
  \`,
})
export class PageLoaderDarkDemo {
  protected readonly loading = signal(true);

  constructor() {
    setTimeout(() => this.loading.set(false), 2500);
  }

  protected load(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2500);
  }
}
`,html:`<!-- The loader reads the theme's colours: here the dark theme, scoped to one subtree. -->
<div
  data-theme="scsc-design-dark"
  class="flex max-w-xl flex-col gap-3 rounded-box bg-base-200 p-4 text-base-content"
>
  <div>
    <scsc-button size="sm" variant="neutral" outline (click)="load()">
      Reload calendar
    </scsc-button>
  </div>
  <scsc-page-loader [show]="loading()" message="Loading Dept. 5 calendar">
    <scsc-card title="Dept. 5 \xB7 Tuesday, October 13, 2026">
      <scsc-text tone="muted" size="sm" class="block">
        14 matters: 6 case management conferences, 5 motions, 3 trial-setting conferences.
      </scsc-text>
    </scsc-card>
  </scsc-page-loader>
</div>
`},"page-loader-logo":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscPageLoader, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-logo-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscPageLoader, ScscText],
  template: \`
    <!-- Per instance here; app-wide, set it once with
         provideScscPageLoader({ logoSrc: 'seal_no_background.png', appName: 'Jury Services' }). -->
    <div class="flex max-w-xl flex-col gap-3">
      <scsc-page-loader
        [show]="loading()"
        logoSrc="scsc-seal.png"
        appName="Jury Services"
        message="Loading your summons"
      >
        <scsc-card title="Summons 2026-0415">
          <scsc-text tone="muted" size="sm" class="block">
            Report Monday, October 12, 2026 at 8:00 AM, Downtown Superior Court.
          </scsc-text>
          <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
            <scsc-button [disabled]="loading()" (click)="load()">Reload summons</scsc-button>
          </div>
        </scsc-card>
      </scsc-page-loader>
    </div>
  \`,
})
export class PageLoaderLogoDemo {
  protected readonly loading = signal(true);

  constructor() {
    setTimeout(() => this.loading.set(false), 2500);
  }

  protected load(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2500);
  }
}
`,html:`<!-- Per instance here; app-wide, set it once with
     provideScscPageLoader({ logoSrc: 'seal_no_background.png', appName: 'Jury Services' }). -->
<div class="flex max-w-xl flex-col gap-3">
  <scsc-page-loader
    [show]="loading()"
    logoSrc="scsc-seal.png"
    appName="Jury Services"
    message="Loading your summons"
  >
    <scsc-card title="Summons 2026-0415">
      <scsc-text tone="muted" size="sm" class="block">
        Report Monday, October 12, 2026 at 8:00 AM, Downtown Superior Court.
      </scsc-text>
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-button [disabled]="loading()" (click)="load()">Reload summons</scsc-button>
      </div>
    </scsc-card>
  </scsc-page-loader>
</div>
`},"page-loader-long":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscList, ScscPageLoader } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-long-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscList, ScscPageLoader],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <div>
        <scsc-button size="sm" variant="neutral" outline (click)="refresh()">
          Refresh the docket
        </scsc-button>
      </div>
      <!-- A tall routed region: the loader sits near its top and stays in view below the app
           chrome (--scsc-chrome-h) while you scroll, instead of centring off screen. -->
      <scsc-page-loader [show]="loading()" message="Refreshing the docket for 24CV012345">
        <scsc-card title="Docket \xB7 24CV012345 \xB7 Alvarez v. Chen">
          <scsc-list>
            @for (entry of docket; track entry.no) {
              <li class="py-3 text-sm">
                <span class="text-base-content/70 tnum">{{ entry.no }} \xB7 {{ entry.date }}</span>
                \u2014 {{ entry.text }}
              </li>
            }
          </scsc-list>
        </scsc-card>
      </scsc-page-loader>
    </div>
  \`,
})
export class PageLoaderLongDemo {
  protected readonly loading = signal(false);
  protected readonly docket = Array.from({ length: 24 }, (_, i) => ({
    no: 24 - i,
    date: \`Sep \${String(30 - i).padStart(2, '0')}, 2026\`,
    text: ENTRIES[i % ENTRIES.length],
  }));

  protected refresh(): void {
    this.loading.set(true);
    // Replace with the router or your data service; the loader follows the signal.
    setTimeout(() => this.loading.set(false), 3000);
  }
}

const ENTRIES = [
  'Proof of service of summons filed by Plaintiff',
  'Case management statement filed by Defendant',
  'Notice of motion and motion to compel further responses',
  'Declaration of counsel in support of motion',
  'Minute order: case management conference continued',
  'Opposition to motion to compel filed by Plaintiff',
];
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <div>
    <scsc-button size="sm" variant="neutral" outline (click)="refresh()">
      Refresh the docket
    </scsc-button>
  </div>
  <!-- A tall routed region: the loader sits near its top and stays in view below the app
       chrome (--scsc-chrome-h) while you scroll, instead of centring off screen. -->
  <scsc-page-loader [show]="loading()" message="Refreshing the docket for 24CV012345">
    <scsc-card title="Docket \xB7 24CV012345 \xB7 Alvarez v. Chen">
      <scsc-list>
        @for (entry of docket; track entry.no) {
          <li class="py-3 text-sm">
            <span class="text-base-content/70 tnum">{{ entry.no }} \xB7 {{ entry.date }}</span>
            \u2014 {{ entry.text }}
          </li>
        }
      </scsc-list>
    </scsc-card>
  </scsc-page-loader>
</div>
`},"page-loader-minimal":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscDescriptionList, ScscPageLoader } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-minimal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscDescriptionList, ScscPageLoader],
  template: \`
    <!-- In a side panel the brand mark is too much: the ring alone, at the small size. -->
    <div class="flex max-w-sm flex-col gap-3">
      <div>
        <scsc-button size="sm" variant="neutral" outline (click)="load()">
          Load related case
        </scsc-button>
      </div>
      <scsc-page-loader [show]="loading()" variant="minimal" size="sm" message="Loading 24CV009876">
        <scsc-card title="Related case">
          <scsc-description-list [items]="fields" />
        </scsc-card>
      </scsc-page-loader>
    </div>
  \`,
})
export class PageLoaderMinimalDemo {
  protected readonly loading = signal(false);
  protected readonly fields = [
    { term: 'Case', value: '24CV009876 \xB7 Chen v. Alvarez' },
    { term: 'Relation', value: 'Cross-complaint' },
    { term: 'Status', value: 'Stayed pending 24CV012345' },
  ];

  protected load(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }
}
`,html:`<!-- In a side panel the brand mark is too much: the ring alone, at the small size. -->
<div class="flex max-w-sm flex-col gap-3">
  <div>
    <scsc-button size="sm" variant="neutral" outline (click)="load()">
      Load related case
    </scsc-button>
  </div>
  <scsc-page-loader [show]="loading()" variant="minimal" size="sm" message="Loading 24CV009876">
    <scsc-card title="Related case">
      <scsc-description-list [items]="fields" />
    </scsc-card>
  </scsc-page-loader>
</div>
`},"page-loader-mode":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscDescriptionList, ScscPageLoader } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-mode-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscDescriptionList, ScscPageLoader],
  template: \`
    <div class="flex flex-col gap-3">
      <div>
        <scsc-button size="sm" variant="neutral" outline (click)="load()">Reload both</scsc-button>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <!-- overlay (default): the old record stays visible, blurred, until the new one arrives. -->
        <scsc-page-loader [show]="loading()" message="Refreshing party details">
          <scsc-card title="Overlay">
            <scsc-description-list [items]="fields" />
          </scsc-card>
        </scsc-page-loader>
        <!-- replace: the stale record is hidden, from assistive technology too, while it loads. -->
        <scsc-page-loader [show]="loading()" mode="replace" message="Loading party details">
          <scsc-card title="Replace">
            <scsc-description-list [items]="fields" />
          </scsc-card>
        </scsc-page-loader>
      </div>
    </div>
  \`,
})
export class PageLoaderModeDemo {
  protected readonly loading = signal(false);
  protected readonly fields = [
    { term: 'Plaintiff', value: 'Maria Alvarez' },
    { term: 'Defendant', value: 'Daniel Chen' },
    { term: 'Counsel', value: 'Rivera & Park LLP' },
  ];

  protected load(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2500);
  }
}
`,html:`<div class="flex flex-col gap-3">
  <div>
    <scsc-button size="sm" variant="neutral" outline (click)="load()">Reload both</scsc-button>
  </div>
  <div class="grid gap-4 sm:grid-cols-2">
    <!-- overlay (default): the old record stays visible, blurred, until the new one arrives. -->
    <scsc-page-loader [show]="loading()" message="Refreshing party details">
      <scsc-card title="Overlay">
        <scsc-description-list [items]="fields" />
      </scsc-card>
    </scsc-page-loader>
    <!-- replace: the stale record is hidden, from assistive technology too, while it loads. -->
    <scsc-page-loader [show]="loading()" mode="replace" message="Loading party details">
      <scsc-card title="Replace">
        <scsc-description-list [items]="fields" />
      </scsc-card>
    </scsc-page-loader>
  </div>
</div>
`},"page-loader-progress":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscPageLoader, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-progress-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscPageLoader, ScscText],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <scsc-page-loader
        [show]="importing()"
        [progress]="percent()"
        message="Importing the October juror pool"
      >
        <scsc-card title="Juror pool \xB7 October 2026">
          <scsc-text tone="muted" size="sm" class="block">
            1,240 summoned jurors from the DMV and voter rolls.
          </scsc-text>
          <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
            <scsc-button [disabled]="importing()" (click)="start()">Import pool</scsc-button>
          </div>
        </scsc-card>
      </scsc-page-loader>
    </div>
  \`,
})
export class PageLoaderProgressDemo {
  protected readonly importing = signal(false);
  protected readonly percent = signal(0);

  protected start(): void {
    this.percent.set(0);
    this.importing.set(true);
    // Stand-in for an upload or import that reports how far it has got.
    const tick = setInterval(() => {
      this.percent.update((p) => Math.min(100, p + 10));
      if (this.percent() === 100) {
        clearInterval(tick);
        this.importing.set(false);
      }
    }, 250);
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <scsc-page-loader
    [show]="importing()"
    [progress]="percent()"
    message="Importing the October juror pool"
  >
    <scsc-card title="Juror pool \xB7 October 2026">
      <scsc-text tone="muted" size="sm" class="block">
        1,240 summoned jurors from the DMV and voter rolls.
      </scsc-text>
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-button [disabled]="importing()" (click)="start()">Import pool</scsc-button>
      </div>
    </scsc-card>
  </scsc-page-loader>
</div>
`},"page-loader-route":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCard, ScscDescriptionList, ScscPageLoader } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-route-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscDescriptionList, ScscPageLoader],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <scsc-button size="sm" variant="neutral" outline (click)="open(150)">
          Fast load (150 ms)
        </scsc-button>
        <scsc-button size="sm" variant="neutral" outline (click)="open(2000)">
          Slow load (2 s)
        </scsc-button>
      </div>

      <!-- The loader wraps the region: it is aria-busy while loading and inert while covered. -->
      <scsc-page-loader [show]="loading()" message="Loading case 24CV012345">
        <scsc-card title="Case 24CV012345 \xB7 Alvarez v. Chen">
          <scsc-description-list [items]="fields" />
        </scsc-card>
      </scsc-page-loader>
      <p class="text-sm text-base-content/70">
        A fast load finishes inside the 300 ms delay, so nothing flashes; a slow one shows the
        loader and holds it for at least 500 ms.
      </p>
    </div>
  \`,
})
export class PageLoaderRouteDemo {
  protected readonly loading = signal(false);
  protected readonly fields = [
    { term: 'Case type', value: 'Civil \xB7 Unlimited' },
    { term: 'Department', value: 'Dept. 5 \xB7 Hon. R. Okafor' },
    { term: 'Next hearing', value: 'Oct 14, 2026 \xB7 9:00 AM' },
  ];

  protected open(ms: number): void {
    this.loading.set(true);
    // Replace with the router or your data service; the loader follows the signal.
    setTimeout(() => this.loading.set(false), ms);
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <div class="flex flex-wrap gap-2">
    <scsc-button size="sm" variant="neutral" outline (click)="open(150)">
      Fast load (150 ms)
    </scsc-button>
    <scsc-button size="sm" variant="neutral" outline (click)="open(2000)">
      Slow load (2 s)
    </scsc-button>
  </div>

  <!-- The loader wraps the region: it is aria-busy while loading and inert while covered. -->
  <scsc-page-loader [show]="loading()" message="Loading case 24CV012345">
    <scsc-card title="Case 24CV012345 \xB7 Alvarez v. Chen">
      <scsc-description-list [items]="fields" />
    </scsc-card>
  </scsc-page-loader>
  <p class="text-sm text-base-content/70">
    A fast load finishes inside the 300 ms delay, so nothing flashes; a slow one shows the
    loader and holds it for at least 500 ms.
  </p>
</div>
`},"page-loader-splash":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SCSC_PRELOADER_CSS, SCSC_PRELOADER_HTML, ScscCodeBlock, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-page-loader-splash-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCodeBlock, ScscText],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-text size="sm" class="block">
        1. In <code>src/index.html</code>, inside <code>&lt;head&gt;</code>:
      </scsc-text>
      <scsc-code-block language="html" [code]="styleTag" />
      <scsc-text size="sm" class="block">
        2. Inside <code>&lt;app-root&gt;</code> (Angular clears it when the app starts):
      </scsc-text>
      <scsc-code-block language="html" [code]="rootTag" />
    </div>
  \`,
})
export class PageLoaderSplashDemo {
  // Printed from the library constants, so the snippet always matches scsc-page-loader.
  protected readonly styleTag = \`<style>\${SCSC_PRELOADER_CSS}</style>\`;
  protected readonly rootTag = \`<app-root>\\n\${SCSC_PRELOADER_HTML}\\n</app-root>\`;
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-text size="sm" class="block">
    1. In <code>src/index.html</code>, inside <code>&lt;head&gt;</code>:
  </scsc-text>
  <scsc-code-block language="html" [code]="styleTag" />
  <scsc-text size="sm" class="block">
    2. Inside <code>&lt;app-root&gt;</code> (Angular clears it when the app starts):
  </scsc-text>
  <scsc-code-block language="html" [code]="rootTag" />
</div>
`}};var We={slug:`page-loader`,name:`Page Loader`,classes:[`ScscPageLoader`],category:`Overlays & Feedback`,whenToUse:['**App boot**: `fullPage` with `[delay]="0"`, shown until the first navigation ends. It takes over from the `index.html` splash (`SCSC_PRELOADER_HTML` + `SCSC_PRELOADER_CSS`) with no visible change, because both draw the same classes from the same stylesheet.',"**Route or record loads**: wrap the region (`<router-outlet />`, a detail panel) and bind `show` to the loading signal. The default 300 ms `delay` means a fast load shows nothing; once shown it stays at least 500 ms (`minDuration`), so it never flickers.","**Brand it once**: `provideScscPageLoader({ logoSrc, appName, variant })` in `app.config.ts` sets the logo (copy the packaged `seal_no_background.png` into your assets) and the app name shown at boot. Without a logo, the court glyph on a navy disc stands in.",'`mode="overlay"` (default) keeps the old content visible under a blurred scrim, for a refresh; `mode="replace"` hides it, for a new record whose stale content would mislead. `variant="minimal"` and `size="sm"` suit panels and cards.',"Set `progress` (0–100) when the work reports how far it has got (an import, an upload).","For a first load whose shape you know, `scsc-skeleton-preset` or `scsc-workspace-skeleton` reads better; for navigation and HTTP activity with the page still usable, use `scsc-top-progress`; to block a form while it saves, `scsc-loading-overlay`.","**Pre-bootstrap splash**: paste the stylesheet into `<head>` and the markup inside `<app-root>` (the last demo prints both). Angular clears `<app-root>` when it starts, so the splash never gets stuck, even in an app that renders no page loader. Apps from `ng generate @scscourt/design:app` already have it.","**Layering**: full page, it sits at `--scsc-z-page-loader` (90), under toasts (100) and `scsc-top-progress` (`--scsc-z-top-progress`, 110). Over a region it sticks `2rem` below the app chrome (`--scsc-chrome-h`), and the region is at least `--scsc-page-loader-min-h` (12rem) tall while it shows."],setup:`// app.config.ts: the logo and app name for every page loader in the app.
providers: [
  provideScscPageLoader({ logoSrc: 'seal_no_background.png', appName: 'Clerk Console' }),
]`,demos:[{id:`page-loader-route`,title:`Loading a region, without flashing`,description:`Try both buttons: the fast load finishes inside the delay and nothing appears; the slow one shows the loader over the card.`,component:T,source:f[`page-loader-route`]},{id:`page-loader-boot`,title:`Full-page app boot`,description:'`fullPage` with `[delay]="0"` and the `appName` around the shell, as in an `app.ts` that takes over from the index.html splash.',component:C,source:f[`page-loader-boot`],layout:`page`,height:`28rem`},{id:`page-loader-long`,title:`A long routed region`,description:`Refresh, then scroll: the loader sits near the top of the region and stays in view below the app chrome instead of centring off screen.`,component:k,source:f[`page-loader-long`]},{id:`page-loader-progress`,title:`Determinate progress`,description:"`progress` adds a 12rem bar under the message, named by it.",component:_,source:f[`page-loader-progress`]},{id:`page-loader-logo`,title:`Your logo and app name`,description:"`logoSrc` draws an image inside the ring (here the court seal); `appName` adds a line in the display font. If the image fails to load, the court glyph stands in.",component:w,source:f[`page-loader-logo`]},{id:`page-loader-minimal`,title:`Minimal, in a panel`,description:'`variant="minimal"` draws the ring alone; `size="sm"` makes it 48px.',component:L,source:f[`page-loader-minimal`]},{id:`page-loader-mode`,title:`Overlay or replace`,description:"`overlay` keeps the content visible (and `inert`) under the scrim; `replace` hides it, from assistive technology too, until the load ends.",component:P,source:f[`page-loader-mode`]},{id:`page-loader-dark`,title:`Dark theme`,description:"Every colour comes from the theme, so the loader follows `data-theme`.",component:D,source:f[`page-loader-dark`]},{id:`page-loader-splash`,title:`The index.html splash`,description:'Printed from `SCSC_PRELOADER_CSS` and `SCSC_PRELOADER_HTML`, so it always matches the component. To show your logo, swap the `scsc-preloader__mark` span for `<img class="scsc-preloader__mark scsc-preloader__mark--image" src="seal_no_background.png" alt="" width="56" height="56">` and pass the same URL to `logoSrc`.',component:R,source:f[`page-loader-splash`]}],a11y:["The message is spoken through a polite status region that is always in the page, so it is heard when the loader appears. It sits outside the busy region, because some screen readers hold back live regions inside `aria-busy` content.","The ring, the mark and the app name are decorative (`aria-hidden`); the visible message duplicates the status text and is hidden from screen readers so it is not read twice.",'Under reduced motion (the OS setting, or `data-motion="reduced"` on `<html>`) the arc stands still and the message alone says the page is loading; the loader appears and leaves with a quick fade. The arc turns once every 1.1 s with no flashing (2.3.1).',"While it covers the region, the region is `inert`, so keyboard focus cannot reach controls under it. In `replace` mode the region is also hidden, so screen readers cannot read stale content.","The message is 80% ink on a solid plate, so it keeps its contrast over any content. In forced colours the arc uses `Highlight`, the track `CanvasText`, and the mark keeps an outline.",`No keyboard interaction: the loader has no controls and never takes focus.`],aria:['The wrapped region gets `aria-busy="true"` while `show` is true, and `inert` while the loader is on screen.','A `role="status"` element holds the message while visible and is empty otherwise.',"With `progress` set, a native `<progress>` (role `progressbar`) is named by the message and carries the value."],appMustProvide:['A `message` that says what is loading ("Loading case 24CV012345"), not just "Loading", when you know it.','For the pre-bootstrap splash, the snippet in `index.html`; change its "Loading" text there if the app is not in English.',"A logo image with a transparent background (`seal_no_background.png` ships in `@scscourt/design/assets`), copied into your served assets.","Focus management after the load: on a route change, move focus to the new page heading (`provideScscRouteA11y()` does this)."],related:[`top-progress`,`workspace-skeleton`,`loading-overlay`,`seal`,`spinner`]};export{We as PAGE_LOADER_DOCS};