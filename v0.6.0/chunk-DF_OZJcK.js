import{Go as g,Gr as nl,H as FN,I as EP,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,fs as nM,kn as XF,kt as NE,nn as TN,p as AR,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var S=class o{progress=g(nl);navigate(){this.progress.start(),setTimeout(()=>this.progress.done(),1500)}overlap(){this.progress.start(),this.progress.start(),setTimeout(()=>this.progress.done(),800),setTimeout(()=>this.progress.done(),2e3)}fail(){this.progress.start(),setTimeout(()=>this.progress.error(),1200)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-top-progress-page-demo`]],decls:14,vars:1,consts:[[`label`,`Loading page`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Self-help`,`contained`,``],[`title`,`Find my case`,`description`,`Search by case number or party name.`],[`title`,`Simulate work`,1,`mt-6`],[1,`flex`,`flex-wrap`,`gap-2`],[3,`click`],[`variant`,`neutral`,`outline`,``,3,`click`],[`tone`,`muted`,`size`,`sm`,`role`,`status`,1,`mt-3`,`block`]],template:function(e,i){e&1&&(uc(0,`scsc-top-progress`,0),Ga(1,`scsc-page-shell`),uc(2,`scsc-masthead`,1)(3,`scsc-page-header`,2),Ga(4,`scsc-card`,3)(5,`div`,4)(6,`scsc-button`,5),lc(`click`,function(){return i.navigate()}),G_(7,`Open a page (1.5 s)`),Lf(),Ga(8,`scsc-button`,6),lc(`click`,function(){return i.overlap()}),G_(9,`Two requests`),Lf(),Ga(10,`scsc-button`,6),lc(`click`,function(){return i.fail()}),G_(11,`A request that fails`),Lf()(),Ga(12,`scsc-text`,7),G_(13),Lf()()()),e&2&&(Jb(13),$f(` `,i.progress.pending(),` task(s) in progress `))},dependencies:[sn,mN,FN,TN,XF,NE,AR],encapsulation:2})};var F=(o,s)=>s.id;function j(o,s){if(o&1&&(Ga(0,`li`,3)(1,`p`,6),G_(2),Lf(),Ga(3,`scsc-text`,7),G_(4),Lf()()),o&2){let e=s.$implicit;Jb(2),nD(e.title),Jb(2),$f(`Filed `,e.filed)}}var b=class o{progress=g(nl);entries=q([{id:`d3`,title:`Proof of service — summons`,filed:`Sep 24, 2026`},{id:`d2`,title:`Answer to complaint`,filed:`Sep 18, 2026`},{id:`d1`,title:`Complaint for breach of contract`,filed:`Aug 30, 2026`}]);refresh(){this.progress.start(),setTimeout(()=>{this.entries.update(s=>[{id:`d${s.length+1}`,title:`Case management statement`,filed:`Sep 29, 2026`},...s]),this.progress.done()},1400)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-top-progress-panel-demo`]],features:[nM([nl])],decls:8,vars:2,consts:[[`title`,`Docket · 24CV012345`,1,`relative`,`max-w-lg`,`overflow-hidden`,3,`flush`],[`tone`,`primary`,`label`,`Refreshing docket`,3,`fixed`],[`aria-label`,`Docket entries`],[1,`px-5`,`py-3`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[1,`font-medium`],[`tone`,`muted`,`size`,`sm`,1,`block`]],template:function(e,i){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-top-progress`,1),Ga(2,`scsc-list`,2),o_(3,j,5,2,`li`,3,F),Lf(),Ga(5,`div`,4)(6,`scsc-button`,5),lc(`click`,function(){return i.refresh()}),G_(7,`Refresh`),Lf()()()),e&2&&(Pv(`flush`,!0),Jb(),Pv(`fixed`,!1),Jb(2),i_(i.entries()))},dependencies:[sn,mN,EP,NE,AR],encapsulation:2})};var P={"top-progress-page":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscMasthead,
  ScscPageHeader,
  ScscPageShell,
  ScscText,
  ScscTopProgress,
  ScscTopProgressService,
} from '@scscourt/design';

@Component({
  selector: 'app-top-progress-page-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscButton,
    ScscCard,
    ScscMasthead,
    ScscPageHeader,
    ScscPageShell,
    ScscText,
    ScscTopProgress,
  ],
  template: \`
    <!-- Once, in app.ts. Router and HTTP activity drive it through provideScscTopProgress(). -->
    <scsc-top-progress label="Loading page" />

    <scsc-page-shell>
      <scsc-masthead slot="masthead" title="Court Access Portal" subtitle="Self-help" contained />
      <scsc-page-header title="Find my case" description="Search by case number or party name." />
      <scsc-card class="mt-6" title="Simulate work">
        <div class="flex flex-wrap gap-2">
          <scsc-button (click)="navigate()">Open a page (1.5 s)</scsc-button>
          <scsc-button variant="neutral" outline (click)="overlap()">Two requests</scsc-button>
          <scsc-button variant="neutral" outline (click)="fail()">A request that fails</scsc-button>
        </div>
        <scsc-text tone="muted" size="sm" class="mt-3 block" role="status">
          {{ progress.pending() }} task(s) in progress
        </scsc-text>
      </scsc-card>
    </scsc-page-shell>
  \`,
})
export class TopProgressPageDemo {
  // The router and the interceptor call this for you; call it directly for other work.
  protected readonly progress = inject(ScscTopProgressService);

  protected navigate(): void {
    this.progress.start();
    setTimeout(() => this.progress.done(), 1500);
  }

  protected overlap(): void {
    // Reference-counted: the bar completes when the second request finishes.
    this.progress.start();
    this.progress.start();
    setTimeout(() => this.progress.done(), 800);
    setTimeout(() => this.progress.done(), 2000);
  }

  protected fail(): void {
    this.progress.start();
    setTimeout(() => this.progress.error(), 1200);
  }
}
`,html:`<!-- Once, in app.ts. Router and HTTP activity drive it through provideScscTopProgress(). -->
<scsc-top-progress label="Loading page" />

<scsc-page-shell>
  <scsc-masthead slot="masthead" title="Court Access Portal" subtitle="Self-help" contained />
  <scsc-page-header title="Find my case" description="Search by case number or party name." />
  <scsc-card class="mt-6" title="Simulate work">
    <div class="flex flex-wrap gap-2">
      <scsc-button (click)="navigate()">Open a page (1.5 s)</scsc-button>
      <scsc-button variant="neutral" outline (click)="overlap()">Two requests</scsc-button>
      <scsc-button variant="neutral" outline (click)="fail()">A request that fails</scsc-button>
    </div>
    <scsc-text tone="muted" size="sm" class="mt-3 block" role="status">
      {{ progress.pending() }} task(s) in progress
    </scsc-text>
  </scsc-card>
</scsc-page-shell>
`},"top-progress-panel":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscList,
  ScscText,
  ScscTopProgress,
  ScscTopProgressService,
} from '@scscourt/design';

interface DocketEntry {
  id: string;
  title: string;
  filed: string;
}

@Component({
  selector: 'app-top-progress-panel-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscList, ScscText, ScscTopProgress],
  // Its own service instance, so this panel's bar counts only this panel's work.
  providers: [ScscTopProgressService],
  template: \`
    <scsc-card title="Docket \xB7 24CV012345" class="relative max-w-lg overflow-hidden" [flush]="true">
      <!-- Not fixed: it sits along the top edge of the positioned card. -->
      <scsc-top-progress [fixed]="false" tone="primary" label="Refreshing docket" />
      <scsc-list aria-label="Docket entries">
        @for (entry of entries(); track entry.id) {
          <li class="px-5 py-3">
            <p class="font-medium">{{ entry.title }}</p>
            <scsc-text tone="muted" size="sm" class="block">Filed {{ entry.filed }}</scsc-text>
          </li>
        }
      </scsc-list>
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-button size="sm" variant="neutral" outline (click)="refresh()">Refresh</scsc-button>
      </div>
    </scsc-card>
  \`,
})
export class TopProgressPanelDemo {
  private readonly progress = inject(ScscTopProgressService);
  protected readonly entries = signal<DocketEntry[]>([
    { id: 'd3', title: 'Proof of service \u2014 summons', filed: 'Sep 24, 2026' },
    { id: 'd2', title: 'Answer to complaint', filed: 'Sep 18, 2026' },
    { id: 'd1', title: 'Complaint for breach of contract', filed: 'Aug 30, 2026' },
  ]);

  protected refresh(): void {
    this.progress.start();
    // Stand-in for an HTTP call.
    setTimeout(() => {
      this.entries.update((list) => [
        { id: \`d\${list.length + 1}\`, title: 'Case management statement', filed: 'Sep 29, 2026' },
        ...list,
      ]);
      this.progress.done();
    }, 1400);
  }
}
`,html:`<scsc-card title="Docket \xB7 24CV012345" class="relative max-w-lg overflow-hidden" [flush]="true">
  <!-- Not fixed: it sits along the top edge of the positioned card. -->
  <scsc-top-progress [fixed]="false" tone="primary" label="Refreshing docket" />
  <scsc-list aria-label="Docket entries">
    @for (entry of entries(); track entry.id) {
      <li class="px-5 py-3">
        <p class="font-medium">{{ entry.title }}</p>
        <scsc-text tone="muted" size="sm" class="block">Filed {{ entry.filed }}</scsc-text>
      </li>
    }
  </scsc-list>
  <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
    <scsc-button size="sm" variant="neutral" outline (click)="refresh()">Refresh</scsc-button>
  </div>
</scsc-card>
`}};var Q={slug:`top-progress`,name:`Top Progress`,classes:[`ScscTopProgress`,`ScscTopProgressService`],category:`Overlays & Feedback`,summary:`A thin bar along the top of the page for route changes and HTTP activity: it trickles toward 90% while work is pending, fills and fades when it finishes, and turns red after an error.`,whenToUse:[`Navigation and background requests where the page stays usable: the bar says "something is happening" without covering anything.`,"`provideScscTopProgress()` tracks the router; add `scscTopProgressInterceptor` to `provideHttpClient(withInterceptors([…]))` to count requests. Keep polling and SignalR traffic off the bar with the `SCSC_TOP_PROGRESS_SKIP` context token, or it never finishes.","For other work (an export, a long calculation), call the service yourself: every `start()` needs a matching `done()` or `error()`. The count is shared, so overlapping work keeps one bar running.",'Provide `ScscTopProgressService` on a component to give a panel its own bar (`[fixed]="false"` inside a positioned container).',"When the page cannot be used until the load finishes, use `scsc-page-loader` instead."],setup:`// app.config.ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideScscTopProgress, scscTopProgressInterceptor } from '@scscourt/design';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([scscTopProgressInterceptor])),
    provideScscTopProgress({ router: true, http: true }),
  ],
};

// app.ts \u2014 render the bar once, above the shell
template: \`
  <scsc-top-progress label="Loading page" />
  <scsc-app-shell>\u2026</scsc-app-shell>
\``,demos:[{id:`top-progress-page`,title:`Page-level bar`,description:`The bar pinned to the top of the viewport, over the navy strip. The buttons call the service the way the router and the interceptor do.`,component:S,source:P[`top-progress-page`],layout:`page`,height:`24rem`},{id:`top-progress-panel`,title:`A panel with its own bar`,description:"The service provided on the component, and the bar placed along the top of a `relative` card.",component:b,source:P[`top-progress-panel`]}],a11y:["The bar is a named `progressbar` with its value while it is on screen, and is removed when idle. It does not announce itself: page changes are announced by `provideScscRouteA11y()`, and results by the page.",`Gold on the navy strip and on white both clear the 3 : 1 non-text contrast minimum; red after an error is paired with the error message the page shows (colour is not the only signal).`,`Under reduced motion the bar has no width animation and trickles in larger steps once a second; it still fades out.`],aria:['`role="progressbar"` with `aria-label` (`label`, or the library\'s "Loading"), `aria-valuemin="0"`, `aria-valuemax="100"` and `aria-valuenow`.',`Nothing is rendered while the service is idle.`],appMustProvide:[`An error message on the page when a request fails: the red bar alone does not say what went wrong.`,`Skip tokens on long-lived or repeating requests, so the bar reflects work the user is waiting for.`],related:[`page-loader`,`progress`,`loading-overlay`,`shells`]};export{Q as TOP_PROGRESS_DOCS};