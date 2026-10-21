import{At as NP,H as FN,Ms as uc,Na as Jb,Ps as ut,Qt as SN,Xa as Pv,a as $a,cs as lc,ds as nD,gn as VN,mi as sr,n as $N,pi as sn,ra as Af,v as Ar,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import{c as et}from"./chunk-MLxW3PWk.js";var L=[{id:`document-review`,title:`Document review`,description:'App shell; `scsc-document-viewer` with thumbnails, find, zoom and custom tools (Stamp "Filed", a Send correction notice menu item); a side panel with the case, filing details, parties and the decision. Checked in the browser gate (pdf.js needs a canvas).',component:class g{decision=q(`pending`);log=q(``);nav=[{items:[{label:`Work queue`,icon:`inbox`,link:`queue`},{label:`Filing review`,icon:`file-check`,link:`.`,exact:!0,badge:`6`},{label:`Cases`,icon:`folder-open`,link:`cases`}]}];details=[{term:`Document`,value:`Motion to compel further responses`},{term:`Filed by`,value:`Jordan Ellis, Esq. (for Plaintiff)`},{term:`Received`,value:`2026-09-30 10:14 AM`,numeric:!0},{term:`Hearing`,value:`Nov 3, 2026 · Dept. 10`},{term:`Fee`,value:`$60.00 · paid`,numeric:!0}];parties=[{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Northgate Property Mgmt., LLC`,role:`Defendant`}];tools=[`thumbnails`,`page-nav`,`separator`,`zoom`,`search`,`separator`,{id:`stamp`,label:`Stamp "Filed"`,icon:`court.stamp`,handler:o=>this.log.set(`"Filed" stamp placed on page ${o.state().page}.`)},{id:`correction`,label:`Send correction notice`,menu:!0,handler:()=>this.log.set(`Correction notice sent to Jordan Ellis, Esq.`)},`download`,`print`];decisionText=ut(()=>({pending:`Awaiting review`,accepted:`Accepted`,rejected:`Rejected`})[this.decision()]);decisionTone=ut(()=>this.decision()===`accepted`?`success`:this.decision()===`rejected`?`error`:`warning`);decisionIcon=ut(()=>this.decision()===`accepted`?`status.success`:this.decision()===`rejected`?`status.error`:`status.pending`);decide(o){this.decision.set(o),this.log.set(o===`accepted`?`Filing accepted and file-stamped.`:`Filing rejected; the filer will be notified.`)}static ɵfac=function(n){return new(n||g)};static ɵcmp=Af({type:g,selectors:[[`app-document-review-template`]],decls:34,vars:9,consts:[[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`E-filing review`,`logoSrc`,`scsc-seal.png`],[`name`,`Maria Chen`,`email`,`mchen@scscourt.org`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`],[1,`flex`,`flex-col`,`gap-4`,`p-4`,`lg:p-6`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[1,`font-display`,`text-2xl`,`font-bold`,`text-primary`],[`variant`,`outline`,3,`tone`,`icon`],[`aria-live`,`polite`,1,`sr-only`],[1,`grid`,`grid-cols-1`,`gap-4`,`lg:grid-cols-[minmax(0,1fr)_20rem]`],[`src`,`samples/order-after-hearing.pdf`,`workerSrc`,`assets/pdf.worker.min.mjs`,`title`,`Motion to compel further responses.pdf`,1,`h-[40rem]`,3,`thumbnails`,`toolbar`],[`aria-labelledby`,`review-case`,1,`flex`,`flex-col`,`gap-4`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[`id`,`review-case`,1,`font-semibold`],[1,`text-sm`,`text-base-content/80`],[`status`,`active`,1,`mt-2`],[3,`items`],[`aria-labelledby`,`review-parties`],[`id`,`review-parties`,1,`mb-2`,`text-sm`,`font-semibold`],[3,`parties`],[1,`mt-auto`,`flex`,`flex-wrap`,`gap-2`,`border-t`,`border-base-300`,`pt-4`],[`size`,`sm`,3,`click`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`]],template:function(n,i){n&1&&(Ga(0,`scsc-app-shell`)(1,`scsc-masthead`,0)(2,`scsc-user-menu`,1)(3,`li`)(4,`button`,2),G_(5,`Sign out`),Lf()()()(),uc(6,`scsc-sidebar-nav`,3),Ga(7,`div`,4)(8,`div`,5)(9,`h1`,6),G_(10,`Review filing EF-2026-118204`),Lf(),Ga(11,`scsc-tag`,7),G_(12),Lf()(),Ga(13,`p`,8),G_(14),Lf(),Ga(15,`div`,9),uc(16,`scsc-document-viewer`,10),Ga(17,`aside`,11)(18,`div`)(19,`h2`,12),G_(20,`24CV012345`),Lf(),Ga(21,`p`,13),G_(22,`Alvarez v. Northgate Property Mgmt.`),Lf(),uc(23,`scsc-status-badge`,14),Lf(),uc(24,`scsc-description-list`,15),Ga(25,`section`,16)(26,`h3`,17),G_(27,`Parties`),Lf(),uc(28,`scsc-party-list`,18),Lf(),Ga(29,`div`,19)(30,`scsc-button`,20),lc(`click`,function(){return i.decide(`accepted`)}),G_(31,`Accept filing`),Lf(),Ga(32,`scsc-button`,21),lc(`click`,function(){return i.decide(`rejected`)}),G_(33,`Reject filing`),Lf()()()()()()),n&2&&(Jb(6),Pv(`sections`,i.nav),Jb(5),Pv(`tone`,i.decisionTone())(`icon`,i.decisionIcon()),Jb(),nD(i.decisionText()),Jb(2),nD(i.log()),Jb(2),Pv(`thumbnails`,!0)(`toolbar`,i.tools),Jb(8),Pv(`items`,i.details),Jb(4),Pv(`parties`,i.parties))},dependencies:[SN,sn,NP,et,FN,Ar,$N,$a,sr,VN],encapsulation:2})},source:{"document-review":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscAppShell,
  ScscButton,
  ScscDescriptionList,
  ScscMasthead,
  ScscPartyList,
  ScscSidebarNav,
  ScscStatusBadge,
  ScscTag,
  ScscUserMenu,
  type ScscNavSection,
  type ScscParty,
} from '@scscourt/design';
import {
  ScscDocumentViewer,
  type ScscViewerController,
  type ScscViewerToolbarItem,
} from '@scscourt/design/viewer';

type Decision = 'pending' | 'accepted' | 'rejected';

@Component({
  selector: 'app-document-review-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAppShell,
    ScscButton,
    ScscDescriptionList,
    ScscDocumentViewer,
    ScscMasthead,
    ScscPartyList,
    ScscSidebarNav,
    ScscStatusBadge,
    ScscTag,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="E-filing review"
        logoSrc="scsc-seal.png"
      >
        <scsc-user-menu name="Maria Chen" email="mchen@scscourt.org">
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <div class="flex flex-col gap-4 p-4 lg:p-6">
        <div class="flex flex-wrap items-center gap-3">
          <h1 class="font-display text-2xl font-bold text-primary">Review filing EF-2026-118204</h1>
          <scsc-tag [tone]="decisionTone()" variant="outline" [icon]="decisionIcon()">{{
            decisionText()
          }}</scsc-tag>
        </div>
        <p class="sr-only" aria-live="polite">{{ log() }}</p>

        <!-- The viewer takes the space; the case details sit beside it from lg, below it on phones. -->
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <scsc-document-viewer
            src="samples/order-after-hearing.pdf"
            workerSrc="assets/pdf.worker.min.mjs"
            title="Motion to compel further responses.pdf"
            [thumbnails]="true"
            [toolbar]="tools"
            class="h-[40rem]"
          />

          <aside
            aria-labelledby="review-case"
            class="flex flex-col gap-4 rounded-box border border-base-300 bg-base-100 p-4"
          >
            <div>
              <h2 id="review-case" class="font-semibold">24CV012345</h2>
              <p class="text-sm text-base-content/80">Alvarez v. Northgate Property Mgmt.</p>
              <scsc-status-badge status="active" class="mt-2" />
            </div>
            <scsc-description-list [items]="details" />
            <section aria-labelledby="review-parties">
              <h3 id="review-parties" class="mb-2 text-sm font-semibold">Parties</h3>
              <scsc-party-list [parties]="parties" />
            </section>
            <div class="mt-auto flex flex-wrap gap-2 border-t border-base-300 pt-4">
              <scsc-button size="sm" (click)="decide('accepted')">Accept filing</scsc-button>
              <scsc-button size="sm" variant="neutral" outline (click)="decide('rejected')"
                >Reject filing</scsc-button
              >
            </div>
          </aside>
        </div>
      </div>
    </scsc-app-shell>
  \`,
})
export class DocumentReviewTemplate {
  protected readonly decision = signal<Decision>('pending');
  protected readonly log = signal('');
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Work queue', icon: 'inbox', link: 'queue' },
        { label: 'Filing review', icon: 'file-check', link: '.', exact: true, badge: '6' },
        { label: 'Cases', icon: 'folder-open', link: 'cases' },
      ],
    },
  ];
  protected readonly details = [
    { term: 'Document', value: 'Motion to compel further responses' },
    { term: 'Filed by', value: 'Jordan Ellis, Esq. (for Plaintiff)' },
    { term: 'Received', value: '2026-09-30 10:14 AM', numeric: true },
    { term: 'Hearing', value: 'Nov 3, 2026 \xB7 Dept. 10' },
    { term: 'Fee', value: '$60.00 \xB7 paid', numeric: true },
  ];
  protected readonly parties: ScscParty[] = [
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Northgate Property Mgmt., LLC', role: 'Defendant' },
  ];

  // Built-in tools plus the clerk's own: stamp the current page, or send a correction notice.
  protected readonly tools: ScscViewerToolbarItem[] = [
    'thumbnails',
    'page-nav',
    'separator',
    'zoom',
    'search',
    'separator',
    {
      id: 'stamp',
      label: 'Stamp "Filed"',
      icon: 'court.stamp',
      handler: (viewer: ScscViewerController) =>
        this.log.set(\`"Filed" stamp placed on page \${viewer.state().page}.\`),
    },
    {
      id: 'correction',
      label: 'Send correction notice',
      menu: true,
      handler: () => this.log.set('Correction notice sent to Jordan Ellis, Esq.'),
    },
    'download',
    'print',
  ];

  protected readonly decisionText = computed(
    () =>
      ({ pending: 'Awaiting review', accepted: 'Accepted', rejected: 'Rejected' })[this.decision()],
  );
  protected readonly decisionTone = computed(() =>
    this.decision() === 'accepted'
      ? 'success'
      : this.decision() === 'rejected'
        ? 'error'
        : 'warning',
  );
  protected readonly decisionIcon = computed(() =>
    this.decision() === 'accepted'
      ? 'status.success'
      : this.decision() === 'rejected'
        ? 'status.error'
        : 'status.pending',
  );

  protected decide(d: Decision): void {
    this.decision.set(d);
    this.log.set(
      d === 'accepted'
        ? 'Filing accepted and file-stamped.'
        : 'Filing rejected; the filer will be notified.',
    );
  }
}
`,html:`<scsc-app-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="E-filing review"
    logoSrc="scsc-seal.png"
  >
    <scsc-user-menu name="Maria Chen" email="mchen@scscourt.org">
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <div class="flex flex-col gap-4 p-4 lg:p-6">
    <div class="flex flex-wrap items-center gap-3">
      <h1 class="font-display text-2xl font-bold text-primary">Review filing EF-2026-118204</h1>
      <scsc-tag [tone]="decisionTone()" variant="outline" [icon]="decisionIcon()">{{
        decisionText()
      }}</scsc-tag>
    </div>
    <p class="sr-only" aria-live="polite">{{ log() }}</p>

    <!-- The viewer takes the space; the case details sit beside it from lg, below it on phones. -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <scsc-document-viewer
        src="samples/order-after-hearing.pdf"
        workerSrc="assets/pdf.worker.min.mjs"
        title="Motion to compel further responses.pdf"
        [thumbnails]="true"
        [toolbar]="tools"
        class="h-[40rem]"
      />

      <aside
        aria-labelledby="review-case"
        class="flex flex-col gap-4 rounded-box border border-base-300 bg-base-100 p-4"
      >
        <div>
          <h2 id="review-case" class="font-semibold">24CV012345</h2>
          <p class="text-sm text-base-content/80">Alvarez v. Northgate Property Mgmt.</p>
          <scsc-status-badge status="active" class="mt-2" />
        </div>
        <scsc-description-list [items]="details" />
        <section aria-labelledby="review-parties">
          <h3 id="review-parties" class="mb-2 text-sm font-semibold">Parties</h3>
          <scsc-party-list [parties]="parties" />
        </section>
        <div class="mt-auto flex flex-wrap gap-2 border-t border-base-300 pt-4">
          <scsc-button size="sm" (click)="decide('accepted')">Accept filing</scsc-button>
          <scsc-button size="sm" variant="neutral" outline (click)="decide('rejected')"
            >Reject filing</scsc-button
          >
        </div>
      </aside>
    </div>
  </div>
</scsc-app-shell>
`}}[`document-review`],layout:`page`,height:`52rem`,a11y:`skip`}];export{L as DEMOS};