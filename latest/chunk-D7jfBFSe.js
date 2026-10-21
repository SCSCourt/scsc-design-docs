import{At as NP,Es as sD,F as EN,Fr as kn,Gt as QN,H as FN,Hs as y_,I as EP,Lo as d_,M as DN,Ma as JT,Mr as jn,Ms as uc,Na as Jb,Nn as Xa,No as cc,Ps as ut,Qt as SN,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cn as UE,cs as lc,ds as nD,ha as Eg,in as Ta,it as IN,ka as Ig,ks as t_,kt as NE,ms as nu,n as $N,nn as TN,pi as sn,ra as Af,t as $E,ta as $f,va as G_,xs as q,ya as Ga,yt as LN,za as Lf}from"./main-O6OT5H7H.js";var ae=(s,n)=>n.id;function ie(s,n){if(s&1){let e=d_();Ga(0,`li`)(1,`button`,8),lc(`click`,function(){let p=Eg(e).$implicit,l=y_();return l.selectedId.set(p.id),Ig(l.detailOpen.set(!0))}),Ga(2,`span`,9),G_(3),Lf(),Ga(4,`span`,10),G_(5),Lf()()()}if(s&2){let e=n.$implicit,i=y_();Jb(),cc(`aria-current`,e.id===i.selectedId()?`true`:null),Jb(2),nD(e.title),Jb(2),$f(` `,e.time,` `)}}function ce(s,n){if(s&1){let e=d_();Ga(0,`scsc-detail-panel`,6),uc(1,`scsc-icon-button`,11),Ga(2,`scsc-icon-button`,12),lc(`click`,function(){Eg(e);let p=y_();return p.selectedId.set(``),Ig(p.detailOpen.set(!1))}),Lf(),uc(3,`scsc-description-list`,13),Lf()}if(s&2){let e=n;Pv(`title`,e.title),Jb(3),Pv(`items`,e.details)}}function ne(s,n){s&1&&uc(0,`scsc-empty-state`,7)}var P=class s{nav=[{items:[{label:`Calendar`,icon:`calendar`,link:`.`,exact:!0},{label:`Filings`,icon:`file-text`,link:`filings`}]}];hearings=[{id:`h1`,title:`Motion to Compel`,time:`9:00 AM · Dept. 7`,details:[{term:`Case`,value:`24CV012345 — Alvarez v. Northgate Holdings`},{term:`Judge`,value:`Hon. R. Castellanos`},{term:`Moving party`,value:`Plaintiff`},{term:`Opposition filed`,value:`Sep 22, 2026`},{term:`Reply due`,value:`Oct 7, 2026`},{term:`Tentative ruling`,value:`Posted Oct 13 by 3:00 PM`},{term:`Appearance`,value:`In person or remote`}]},{id:`h2`,title:`Case Management Conference`,time:`10:30 AM · Dept. 7`,details:[{term:`Case`,value:`24CV013002 — Patel v. SVT Logistics`},{term:`Judge`,value:`Hon. R. Castellanos`},{term:`Statements due`,value:`Sep 30, 2026`},{term:`Appearance`,value:`Remote only`}]}];selectedId=q(`h1`);detailOpen=q(!1);selected=ut(()=>this.hearings.find(n=>n.id===this.selectedId()));static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-page-structure-detail-panel-demo`]],decls:12,vars:6,consts:[[`slot`,`masthead`,`title`,`Clerk Console`,`subtitle`,`Civil Division`,`logoSrc`,`scsc-seal.png`],[`slot`,`sidebar`,3,`sections`],[`listWidth`,`18rem`,1,`bg-base-100`,3,`detailOpenChange`,`detailOpen`],[`slot`,`list`],[1,`px-4`,`pt-4`,3,`level`,`visualLevel`],[`aria-label`,`Hearings`,1,`gap-0.5`,`p-2`,3,`divided`],[3,`title`],[`icon`,`mouse-pointer-click`,`title`,`Select a hearing`,`message`,`Its details open here.`],[`type`,`button`,1,`group`,`flex`,`w-full`,`flex-col`,`rounded-field`,`px-3`,`py-2`,`text-left`,`text-sm`,`hover:bg-base-200`,`aria-[current=true]:bg-secondary/10`,`aria-[current=true]:text-primary`,3,`click`],[1,`font-medium`],[1,`text-base-content/70`,`group-aria-[current=true]:text-base-content`],[`slot`,`actions`,`icon`,`printer`,`label`,`Print hearing summary`,`size`,`sm`],[`slot`,`actions`,`icon`,`x`,`label`,`Close details`,`size`,`sm`,3,`click`],[3,`items`]],template:function(e,i){if(e&1&&(Ga(0,`scsc-app-shell`),uc(1,`scsc-masthead`,0)(2,`scsc-sidebar-nav`,1),Ga(3,`scsc-split-shell`,2),sD(`detailOpenChange`,function(l){return Y_(i.detailOpen,l)||(i.detailOpen=l),l}),Ga(4,`div`,3)(5,`scsc-heading`,4),G_(6,`Hearings · Oct 14`),Lf(),Ga(7,`scsc-list`,5),o_(8,ie,6,3,`li`,null,ae),Lf()(),JT(10,ce,4,2,`scsc-detail-panel`,6)(11,ne,1,0,`scsc-empty-state`,7),Lf()()),e&2){let p;Jb(2),Pv(`sections`,i.nav),Jb(),iD(`detailOpen`,i.detailOpen),Jb(2),Pv(`level`,1)(`visualLevel`,5),Jb(2),Pv(`divided`,!1),Jb(),i_(i.hearings),Jb(2),t_((p=i.selected())?10:11,p)}},dependencies:[SN,NP,EN,Xa,kn,UE,EP,FN,$N,LN],encapsulation:2})};var k=class s{trail=[{label:`Templates`,link:`.`},{label:`New template`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-page-structure-page-header-demo`]],decls:10,vars:1,consts:[[1,`flex`,`flex-col`,`gap-8`],[`title`,`New template`,`description`,`Compose a court notification and declare its parameters.`],[`slot`,`breadcrumb`,3,`items`],[`slot`,`actions`,`variant`,`ghost`],[`slot`,`actions`,`variant`,`primary`],[`title`,`Pay a traffic ticket`,`description`,`Look up your citation and pay online, or request a court date.`,`display`,``],[`scsc-button`,``,`slot`,`actions`,`routerLink`,`.`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`scsc-page-header`,1),uc(2,`scsc-breadcrumb`,2),Ga(3,`scsc-button`,3),G_(4,`Cancel`),Lf(),Ga(5,`scsc-button`,4),G_(6,`Save`),Lf()(),Ga(7,`scsc-page-header`,5)(8,`a`,6),G_(9,`Look up citation`),Lf()()()),e&2&&(Jb(2),Pv(`items`,i.trail))},dependencies:[nu,TN,QN,sn,$E],encapsulation:2})};var _=class s{details=[{term:`Case number`,value:`24CV012345`},{term:`Caption`,value:`Alvarez v. Northgate Holdings, Inc.`},{term:`Type`,value:`Unlimited civil — breach of contract`},{term:`Department`,value:`Dept. 7, Hon. R. Castellanos`}];fees=[{term:`First paper`,value:`$435.00`,numeric:!0},{term:`Jury deposit`,value:`$150.00`,numeric:!0},{term:`Balance due`,value:`$0.00`,numeric:!0}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-page-structure-section-demo`]],decls:7,vars:2,consts:[[1,`flex`,`flex-col`,`gap-8`],[`heading`,`Case details`,`description`,`As entered by the filing party; the clerk verifies on acceptance.`],[`slot`,`actions`,`variant`,`ghost`,`size`,`sm`],[3,`items`],[`heading`,`Fees`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`scsc-section`,1)(2,`scsc-button`,2),G_(3,`Edit`),Lf(),uc(4,`scsc-description-list`,3),Lf(),Ga(5,`scsc-section`,4),uc(6,`scsc-description-list`,3),Lf()()),e&2&&(Jb(4),Pv(`items`,i.details),Jb(2),Pv(`items`,i.fees))},dependencies:[DN,NP,sn],encapsulation:2})};function re(s,n){if(s&1&&(Ga(0,`scsc-text`,4),G_(1),Lf()),s&2){let e=y_();Jb(),$f(`Filtering by “`,e.query(),`”`)}}var I=class s{query=q(``);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-page-structure-toolbar-demo`]],decls:11,vars:3,consts:[[3,`bordered`],[`placeholder`,`Filter cases`,3,`valueChange`,`value`],[`tone`,`info`,`soft`,``],[`tone`,`neutral`,`soft`,``],[`tone`,`muted`,`size`,`sm`],[`slot`,`end`,`variant`,`ghost`,`size`,`sm`],[`slot`,`end`,`variant`,`primary`,`size`,`sm`]],template:function(e,i){e&1&&(Ga(0,`scsc-toolbar`,0)(1,`scsc-search-input`,1),sD(`valueChange`,function(l){return Y_(i.query,l)||(i.query=l),l}),Lf(),Ga(2,`scsc-badge`,2),G_(3,`Dept. 7`),Lf(),Ga(4,`scsc-badge`,3),G_(5,`Unlimited civil`),Lf(),JT(6,re,2,1,`scsc-text`,4),Ga(7,`scsc-button`,5),G_(8,`Export`),Lf(),Ga(9,`scsc-button`,6),G_(10,`New case`),Lf()()),e&2&&(Pv(`bordered`,!0),Jb(),iD(`value`,i.query),Jb(5),t_(i.query()?6:-1))},dependencies:[IN,Ta,jn,sn,NE],encapsulation:2})};var b={"page-structure-detail-panel":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscAppShell,
  ScscDescriptionList,
  ScscDetailPanel,
  ScscEmptyState,
  ScscHeading,
  ScscIconButton,
  ScscList,
  ScscMasthead,
  ScscSidebarNav,
  ScscSplitShell,
  type ScscDescriptionItem,
  type ScscNavSection,
} from '@scscourt/design';

interface Hearing {
  id: string;
  title: string;
  time: string;
  details: ScscDescriptionItem[];
}

@Component({
  selector: 'app-page-structure-detail-panel-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAppShell,
    ScscDescriptionList,
    ScscDetailPanel,
    ScscEmptyState,
    ScscHeading,
    ScscIconButton,
    ScscList,
    ScscMasthead,
    ScscSidebarNav,
    ScscSplitShell,
  ],
  template: \`
    <scsc-app-shell>
      <scsc-masthead
        slot="masthead"
        title="Clerk Console"
        subtitle="Civil Division"
        logoSrc="scsc-seal.png"
      />
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <scsc-split-shell listWidth="18rem" class="bg-base-100" [(detailOpen)]="detailOpen">
        <div slot="list">
          <scsc-heading [level]="1" [visualLevel]="5" class="px-4 pt-4"
            >Hearings \xB7 Oct 14</scsc-heading
          >
          <scsc-list [divided]="false" class="gap-0.5 p-2" aria-label="Hearings">
            @for (h of hearings; track h.id) {
              <li>
                <button
                  type="button"
                  class="group flex w-full flex-col rounded-field px-3 py-2 text-left text-sm hover:bg-base-200 aria-[current=true]:bg-secondary/10 aria-[current=true]:text-primary"
                  [attr.aria-current]="h.id === selectedId() ? 'true' : null"
                  (click)="selectedId.set(h.id); detailOpen.set(true)"
                >
                  <span class="font-medium">{{ h.title }}</span>
                  <span class="text-base-content/70 group-aria-[current=true]:text-base-content">
                    {{ h.time }}
                  </span>
                </button>
              </li>
            }
          </scsc-list>
        </div>

        <!-- The split shell gives the pane its height, so the panel body scrolls on its own. -->
        @if (selected(); as h) {
          <scsc-detail-panel [title]="h.title">
            <scsc-icon-button
              slot="actions"
              icon="printer"
              label="Print hearing summary"
              size="sm"
            />
            <scsc-icon-button
              slot="actions"
              icon="x"
              label="Close details"
              size="sm"
              (click)="selectedId.set(''); detailOpen.set(false)"
            />
            <scsc-description-list [items]="h.details" />
          </scsc-detail-panel>
        } @else {
          <scsc-empty-state
            icon="mouse-pointer-click"
            title="Select a hearing"
            message="Its details open here."
          />
        }
      </scsc-split-shell>
    </scsc-app-shell>
  \`,
})
export class PageStructureDetailPanelDemo {
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Calendar', icon: 'calendar', link: '.', exact: true },
        { label: 'Filings', icon: 'file-text', link: 'filings' },
      ],
    },
  ];

  protected readonly hearings: Hearing[] = [
    {
      id: 'h1',
      title: 'Motion to Compel',
      time: '9:00 AM \xB7 Dept. 7',
      details: [
        { term: 'Case', value: '24CV012345 \u2014 Alvarez v. Northgate Holdings' },
        { term: 'Judge', value: 'Hon. R. Castellanos' },
        { term: 'Moving party', value: 'Plaintiff' },
        { term: 'Opposition filed', value: 'Sep 22, 2026' },
        { term: 'Reply due', value: 'Oct 7, 2026' },
        { term: 'Tentative ruling', value: 'Posted Oct 13 by 3:00 PM' },
        { term: 'Appearance', value: 'In person or remote' },
      ],
    },
    {
      id: 'h2',
      title: 'Case Management Conference',
      time: '10:30 AM \xB7 Dept. 7',
      details: [
        { term: 'Case', value: '24CV013002 \u2014 Patel v. SVT Logistics' },
        { term: 'Judge', value: 'Hon. R. Castellanos' },
        { term: 'Statements due', value: 'Sep 30, 2026' },
        { term: 'Appearance', value: 'Remote only' },
      ],
    },
  ];

  protected readonly selectedId = signal('h1');
  /** Below lg: showing the detail pane instead of the list. */
  protected readonly detailOpen = signal(false);
  protected readonly selected = computed(() =>
    this.hearings.find((h) => h.id === this.selectedId()),
  );
}
`,html:`<scsc-app-shell>
  <scsc-masthead
    slot="masthead"
    title="Clerk Console"
    subtitle="Civil Division"
    logoSrc="scsc-seal.png"
  />
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <scsc-split-shell listWidth="18rem" class="bg-base-100" [(detailOpen)]="detailOpen">
    <div slot="list">
      <scsc-heading [level]="1" [visualLevel]="5" class="px-4 pt-4"
        >Hearings \xB7 Oct 14</scsc-heading
      >
      <scsc-list [divided]="false" class="gap-0.5 p-2" aria-label="Hearings">
        @for (h of hearings; track h.id) {
          <li>
            <button
              type="button"
              class="group flex w-full flex-col rounded-field px-3 py-2 text-left text-sm hover:bg-base-200 aria-[current=true]:bg-secondary/10 aria-[current=true]:text-primary"
              [attr.aria-current]="h.id === selectedId() ? 'true' : null"
              (click)="selectedId.set(h.id); detailOpen.set(true)"
            >
              <span class="font-medium">{{ h.title }}</span>
              <span class="text-base-content/70 group-aria-[current=true]:text-base-content">
                {{ h.time }}
              </span>
            </button>
          </li>
        }
      </scsc-list>
    </div>

    <!-- The split shell gives the pane its height, so the panel body scrolls on its own. -->
    @if (selected(); as h) {
      <scsc-detail-panel [title]="h.title">
        <scsc-icon-button
          slot="actions"
          icon="printer"
          label="Print hearing summary"
          size="sm"
        />
        <scsc-icon-button
          slot="actions"
          icon="x"
          label="Close details"
          size="sm"
          (click)="selectedId.set(''); detailOpen.set(false)"
        />
        <scsc-description-list [items]="h.details" />
      </scsc-detail-panel>
    } @else {
      <scsc-empty-state
        icon="mouse-pointer-click"
        title="Select a hearing"
        message="Its details open here."
      />
    }
  </scsc-split-shell>
</scsc-app-shell>
`},"page-structure-page-header":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBreadcrumb,
  ScscBreadcrumbItem,
  ScscButton,
  ScscButtonLink,
  ScscPageHeader,
} from '@scscourt/design';

@Component({
  selector: 'app-page-structure-page-header-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscPageHeader, ScscBreadcrumb, ScscButton, ScscButtonLink],
  template: \`
    <div class="flex flex-col gap-8">
      <!-- back-office: sans title, breadcrumb, Cancel / Save -->
      <scsc-page-header
        title="New template"
        description="Compose a court notification and declare its parameters."
      >
        <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
        <scsc-button slot="actions" variant="ghost">Cancel</scsc-button>
        <scsc-button slot="actions" variant="primary">Save</scsc-button>
      </scsc-page-header>

      <!-- public portal: serif display title -->
      <scsc-page-header
        title="Pay a traffic ticket"
        description="Look up your citation and pay online, or request a court date."
        display
      >
        <!-- It navigates, so it is a link styled as a button. -->
        <a scsc-button slot="actions" routerLink=".">Look up citation</a>
      </scsc-page-header>
    </div>
  \`,
})
export class PageStructurePageHeaderDemo {
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Templates', link: '.' },
    { label: 'New template' },
  ];
}
`,html:`<div class="flex flex-col gap-8">
  <!-- back-office: sans title, breadcrumb, Cancel / Save -->
  <scsc-page-header
    title="New template"
    description="Compose a court notification and declare its parameters."
  >
    <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
    <scsc-button slot="actions" variant="ghost">Cancel</scsc-button>
    <scsc-button slot="actions" variant="primary">Save</scsc-button>
  </scsc-page-header>

  <!-- public portal: serif display title -->
  <scsc-page-header
    title="Pay a traffic ticket"
    description="Look up your citation and pay online, or request a court date."
    display
  >
    <!-- It navigates, so it is a link styled as a button. -->
    <a scsc-button slot="actions" routerLink=".">Look up citation</a>
  </scsc-page-header>
</div>
`},"page-structure-section":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscButton,
  ScscDescriptionItem,
  ScscDescriptionList,
  ScscSection,
} from '@scscourt/design';

@Component({
  selector: 'app-page-structure-section-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSection, ScscDescriptionList, ScscButton],
  template: \`
    <div class="flex flex-col gap-8">
      <scsc-section
        heading="Case details"
        description="As entered by the filing party; the clerk verifies on acceptance."
      >
        <scsc-button slot="actions" variant="ghost" size="sm">Edit</scsc-button>
        <scsc-description-list [items]="details" />
      </scsc-section>

      <scsc-section heading="Fees">
        <scsc-description-list [items]="fees" />
      </scsc-section>
    </div>
  \`,
})
export class PageStructureSectionDemo {
  protected readonly details: ScscDescriptionItem[] = [
    { term: 'Case number', value: '24CV012345' },
    { term: 'Caption', value: 'Alvarez v. Northgate Holdings, Inc.' },
    { term: 'Type', value: 'Unlimited civil \u2014 breach of contract' },
    { term: 'Department', value: 'Dept. 7, Hon. R. Castellanos' },
  ];

  protected readonly fees: ScscDescriptionItem[] = [
    { term: 'First paper', value: '$435.00', numeric: true },
    { term: 'Jury deposit', value: '$150.00', numeric: true },
    { term: 'Balance due', value: '$0.00', numeric: true },
  ];
}
`,html:`<div class="flex flex-col gap-8">
  <scsc-section
    heading="Case details"
    description="As entered by the filing party; the clerk verifies on acceptance."
  >
    <scsc-button slot="actions" variant="ghost" size="sm">Edit</scsc-button>
    <scsc-description-list [items]="details" />
  </scsc-section>

  <scsc-section heading="Fees">
    <scsc-description-list [items]="fees" />
  </scsc-section>
</div>
`},"page-structure-toolbar":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscBadge, ScscButton, ScscSearchInput, ScscText, ScscToolbar } from '@scscourt/design';

@Component({
  selector: 'app-page-structure-toolbar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscToolbar, ScscSearchInput, ScscBadge, ScscButton, ScscText],
  template: \`
    <scsc-toolbar [bordered]="true">
      <scsc-search-input placeholder="Filter cases" [(value)]="query" />
      <scsc-badge tone="info" soft>Dept. 7</scsc-badge>
      <scsc-badge tone="neutral" soft>Unlimited civil</scsc-badge>
      @if (query()) {
        <scsc-text tone="muted" size="sm">Filtering by \u201C{{ query() }}\u201D</scsc-text>
      }
      <scsc-button slot="end" variant="ghost" size="sm">Export</scsc-button>
      <scsc-button slot="end" variant="primary" size="sm">New case</scsc-button>
    </scsc-toolbar>
  \`,
})
export class PageStructureToolbarDemo {
  protected readonly query = signal('');
}
`,html:`<scsc-toolbar [bordered]="true">
  <scsc-search-input placeholder="Filter cases" [(value)]="query" />
  <scsc-badge tone="info" soft>Dept. 7</scsc-badge>
  <scsc-badge tone="neutral" soft>Unlimited civil</scsc-badge>
  @if (query()) {
    <scsc-text tone="muted" size="sm">Filtering by \u201C{{ query() }}\u201D</scsc-text>
  }
  <scsc-button slot="end" variant="ghost" size="sm">Export</scsc-button>
  <scsc-button slot="end" variant="primary" size="sm">New case</scsc-button>
</scsc-toolbar>
`}};var Le={slug:`page-structure`,name:`Page Structure`,classes:[`ScscPageHeader`,`ScscToolbar`,`ScscSection`,`ScscDetailPanel`],category:`Layout`,summary:"The building blocks inside a shell: `scsc-page-header` for the title row, `scsc-toolbar` for filters and actions above content, `scsc-section` to break long pages into titled blocks, and `scsc-detail-panel` for the labelled pane of a master/detail view.",whenToUse:["**Page header** — every page starts with one: it renders the `<h1>`, an optional description, the breadcrumb slot and right-aligned actions.",'**Toolbar** — search, filters and the "New" button above a table or list; `bordered` gives it a card surface.',"**Section** — titled `<h2>` blocks on detail and settings pages, each with its own actions.","**Detail panel** — the right-hand pane of `scsc-split-shell`: header with actions, scrolling body. It is `h-full`, so it needs a parent with a height; the split shell provides one."],demos:[{id:`page-structure-page-header`,title:`Page header`,description:"Breadcrumb, title, description and actions; `display` switches to the serif face for portal pages.",component:k,source:b[`page-structure-page-header`]},{id:`page-structure-toolbar`,title:`Toolbar`,description:"Search and filter badges on the left, actions in `[slot=end]`; `bordered` for the card surface.",component:I,source:b[`page-structure-toolbar`]},{id:`page-structure-section`,title:`Sections`,description:`Two titled blocks; the first has a description and an Edit action.`,component:_,source:b[`page-structure-section`]},{id:`page-structure-detail-panel`,title:`Detail panel`,description:"The detail pane of `scsc-split-shell` in a back-office page: icon-button actions in the header, and a body that scrolls within the pane. Nav links are relative to the layout route.",component:P,source:b[`page-structure-detail-panel`],layout:`page`,height:`26rem`}],a11y:["`scsc-section` and `scsc-detail-panel` title themselves with an `<h2>` by default; set `headingLevel` (2–6) for a nested section or a panel under an `<h2>`. The look does not change.","Page header renders the page `<h1>`; section and detail panel render `<h2>`. Keep that order: one page header, then sections.","Toolbar has no landmark of its own; label its search input (`scsc-search-input` does) and give icon-only actions a `label`.","Detail panel actions are projected: use `scsc-icon-button` so each has an accessible name."],related:[`breadcrumb`,`layout-primitives`,`shells`,`page-shell`,`search-input`,`description-list`]};export{Le as PAGE_STRUCTURE_DOCS};