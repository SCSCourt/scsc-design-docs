import{Es as sD,Hs as y_,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Pt as Nr,Xa as Pv,Yo as iD,Zi as za,bo as Y_,cs as lc,ds as nD,ks as t_,ra as Af,ta as $f,va as G_,xs as q,y as At,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-MLxW3PWk.js";import{n as be}from"./chunk-WxNObRU0.js";function R(t,o){t&1&&(Ga(0,`scsc-alert`,2),G_(1,` Document `),Ga(2,`code`),G_(3),Lf(),G_(4,` would open in your document viewer. `),Lf()),t&2&&(Jb(3),nD(o))}var g=class t{docket=[{date:`2024-03-12`,event:`Complaint filed`,filedBy:`Plaintiff`,documentId:`d1`},{date:`2024-03-13`,event:`Summons issued`,filedBy:`Clerk`},{date:`2024-04-09`,event:`Answer filed`,filedBy:`Defendant`,documentId:`d2`},{date:`2024-06-02`,event:`Motion to Compel discovery`,filedBy:`Plaintiff`,documentId:`d3`},{date:`2024-06-20`,event:`Case Management Conference set for Jul 14, 2026`,filedBy:`Clerk`}];opened=q(null);openDocument(o){this.opened.set(o)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-docket-table-basic-demo`]],decls:3,vars:2,consts:[[1,`flex`,`flex-col`,`gap-4`],[3,`viewDocument`,`entries`],[`status`,`info`,`title`,`Opening document`]],template:function(e,n){if(e&1&&(Ga(0,`div`,0)(1,`scsc-docket-table`,1),lc(`viewDocument`,function(m){return n.openDocument(m)}),Lf(),JT(2,R,5,1,`scsc-alert`,2),Lf()),e&2){let l;Jb(),Pv(`entries`,n.docket),Jb(),t_((l=n.opened())?2:-1,l)}},dependencies:[za,Nr],encapsulation:2})};var h=class t{docket=[];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-docket-table-empty-demo`]],decls:1,vars:1,consts:[[3,`entries`]],template:function(e,n){e&1&&uc(0,`scsc-docket-table`,0),e&2&&Pv(`entries`,n.docket)},dependencies:[Nr],encapsulation:2})};function $(t,o){if(t&1&&uc(0,`scsc-file-viewer`,2),t&2){let e=o;Pv(`src`,e.src)(`name`,e.name)}}function V(t){let o=`<svg xmlns="http://www.w3.org/2000/svg" width="425" height="550" viewBox="0 0 425 550">
    <rect width="425" height="550" fill="#fff"/>
    <text x="212" y="70" text-anchor="middle" font-family="serif" font-size="18" fill="#111">${t}</text>
    <text x="212" y="95" text-anchor="middle" font-family="serif" font-size="11" fill="#444">Case No. 24CV012345</text>
    ${[140,165,190,215,240,265,290].map(e=>`<rect x="50" y="${e}" width="325" height="7" fill="#d9d9d9"/>`).join(``)}
  </svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(o)}`}var C=class t{docket=[{date:`2024-03-12`,event:`Complaint filed`,filedBy:`Plaintiff`,documentId:`d1`},{date:`2024-03-13`,event:`Summons issued`,filedBy:`Clerk`},{date:`2024-04-09`,event:`Answer filed`,filedBy:`Defendant`,documentId:`d2`}];documents={d1:{name:`Complaint (filed Mar 12, 2024)`,src:V(`COMPLAINT FOR DAMAGES`)},d2:{name:`Answer (filed Apr 9, 2024)`,src:V(`ANSWER TO COMPLAINT`)}};open=q(!1);openId=q(``);doc=ut(()=>this.documents[this.openId()]??null);view(o){this.openId.set(o),this.open.set(!0)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-docket-table-viewer-demo`]],decls:3,vars:4,consts:[[3,`viewDocument`,`entries`],[3,`openChange`,`open`,`title`],[`type`,`image`,3,`src`,`name`]],template:function(e,n){if(e&1&&(Ga(0,`scsc-docket-table`,0),lc(`viewDocument`,function(m){return n.view(m)}),Lf(),Ga(1,`scsc-modal`,1),sD(`openChange`,function(m){return Y_(n.open,m)||(n.open=m),m}),JT(2,$,1,2,`scsc-file-viewer`,2),Lf()),e&2){let l;Pv(`entries`,n.docket),Jb(),iD(`open`,n.open),Pv(`title`,n.doc()?.name??``),Jb(),t_((l=n.open()&&n.doc())?2:-1,l)}},dependencies:[Nr,be,At],encapsulation:2})};function F(t,o){if(t&1&&(Ga(0,`p`,2),G_(1),Lf()),t&2){let e=y_();Jb(),$f(`Opened `,e.opened())}}var S=class t{opened=q(``);entries=[{date:`2024-03-12`,event:`Complaint filed`,filedBy:`Plaintiff`,documentId:`doc-101`},{date:`2024-03-13`,event:`Summons issued`,filedBy:`Clerk`},{date:`2024-04-02`,event:`Answer to complaint`,filedBy:`Defendant`,documentId:`doc-117`},{date:`2026-09-15`,event:`Minute order: hearing continued`,filedBy:`Court`,documentId:`doc-240`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-docket-table-stacked-demo`]],decls:3,vars:2,consts:[[1,`max-w-sm`],[`label`,`Docket, 24CV012345`,3,`viewDocument`,`entries`],[`aria-live`,`polite`,1,`mt-2`,`text-sm`,`text-base-content/70`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-docket-table`,1),lc(`viewDocument`,function(m){return n.opened.set(m)}),Lf(),JT(2,F,2,1,`p`,2),Lf()),e&2&&(Jb(),Pv(`entries`,n.entries),Jb(),t_(n.opened()?2:-1))},dependencies:[Nr],encapsulation:2})};var T=class t{entries=[{date:`2023-11-02`,event:`Petition for probate filed`,filedBy:`Petitioner`,documentId:`p-1`},{date:`2023-11-02`,event:`Notice of petition to administer estate`,filedBy:`Petitioner`},{date:`2024-01-18`,event:`Letters testamentary issued`,filedBy:`Clerk`,documentId:`p-4`},{date:`2024-06-30`,event:`Inventory and appraisal`,filedBy:`Executor`,documentId:`p-7`},{date:`2026-09-10`,event:`Petition for final distribution`,filedBy:`Executor`,documentId:`p-12`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-docket-table-dark-demo`]],decls:2,vars:1,consts:[[`data-theme`,`scsc-design-dark`,1,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[`label`,`Docket, 23PR000912`,`density`,`compact`,`emptyMessage`,`No entries yet.`,3,`entries`]],template:function(e,n){e&1&&(Ga(0,`div`,0),uc(1,`scsc-docket-table`,1),Lf()),e&2&&(Jb(),Pv(`entries`,n.entries))},dependencies:[Nr],encapsulation:2})};var D={"docket-table-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAlert, ScscDocketTable, type ScscDocketEntry } from '@scscourt/design';

@Component({
  selector: 'app-docket-table-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscDocketTable],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-docket-table [entries]="docket" (viewDocument)="openDocument($event)" />
      @if (opened(); as id) {
        <scsc-alert status="info" title="Opening document">
          Document <code>{{ id }}</code> would open in your document viewer.
        </scsc-alert>
      }
    </div>
  \`,
})
export class DocketTableBasicDemo {
  /** Entries without a \`documentId\` render no view button. */
  protected readonly docket: ScscDocketEntry[] = [
    { date: '2024-03-12', event: 'Complaint filed', filedBy: 'Plaintiff', documentId: 'd1' },
    { date: '2024-03-13', event: 'Summons issued', filedBy: 'Clerk' },
    { date: '2024-04-09', event: 'Answer filed', filedBy: 'Defendant', documentId: 'd2' },
    {
      date: '2024-06-02',
      event: 'Motion to Compel discovery',
      filedBy: 'Plaintiff',
      documentId: 'd3',
    },
    {
      date: '2024-06-20',
      event: 'Case Management Conference set for Jul 14, 2026',
      filedBy: 'Clerk',
    },
  ];

  protected readonly opened = signal<string | null>(null);

  protected openDocument(id: string): void {
    this.opened.set(id);
  }
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-docket-table [entries]="docket" (viewDocument)="openDocument($event)" />
  @if (opened(); as id) {
    <scsc-alert status="info" title="Opening document">
      Document <code>{{ id }}</code> would open in your document viewer.
    </scsc-alert>
  }
</div>
`},"docket-table-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDocketTable, type ScscDocketEntry } from '@scscourt/design';

@Component({
  selector: 'app-docket-table-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocketTable],
  template: \`
    <div data-theme="scsc-design-dark" class="rounded-box bg-base-200 p-4 text-base-content">
      <scsc-docket-table
        label="Docket, 23PR000912"
        density="compact"
        [entries]="entries"
        emptyMessage="No entries yet."
      />
    </div>
  \`,
})
export class DocketTableDarkDemo {
  protected readonly entries: ScscDocketEntry[] = [
    {
      date: '2023-11-02',
      event: 'Petition for probate filed',
      filedBy: 'Petitioner',
      documentId: 'p-1',
    },
    { date: '2023-11-02', event: 'Notice of petition to administer estate', filedBy: 'Petitioner' },
    {
      date: '2024-01-18',
      event: 'Letters testamentary issued',
      filedBy: 'Clerk',
      documentId: 'p-4',
    },
    {
      date: '2024-06-30',
      event: 'Inventory and appraisal',
      filedBy: 'Executor',
      documentId: 'p-7',
    },
    {
      date: '2026-09-10',
      event: 'Petition for final distribution',
      filedBy: 'Executor',
      documentId: 'p-12',
    },
  ];
}
`,html:`<div data-theme="scsc-design-dark" class="rounded-box bg-base-200 p-4 text-base-content">
  <scsc-docket-table
    label="Docket, 23PR000912"
    density="compact"
    [entries]="entries"
    emptyMessage="No entries yet."
  />
</div>
`},"docket-table-empty":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDocketTable, type ScscDocketEntry } from '@scscourt/design';

@Component({
  selector: 'app-docket-table-empty-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocketTable],
  template: \`<scsc-docket-table [entries]="docket" />\`,
})
export class DocketTableEmptyDemo {
  protected readonly docket: ScscDocketEntry[] = [];
}
`,html:`<scsc-docket-table [entries]="docket" />
`},"docket-table-stacked":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscDocketTable, type ScscDocketEntry } from '@scscourt/design';

@Component({
  selector: 'app-docket-table-stacked-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocketTable],
  template: \`
    <!-- A phone-width column: below stackBelow (sm, measured on the table) entries become cards. -->
    <div class="max-w-sm">
      <scsc-docket-table
        label="Docket, 24CV012345"
        [entries]="entries"
        (viewDocument)="opened.set($event)"
      />
      @if (opened()) {
        <p class="mt-2 text-sm text-base-content/70" aria-live="polite">Opened {{ opened() }}</p>
      }
    </div>
  \`,
})
export class DocketTableStackedDemo {
  protected readonly opened = signal('');
  protected readonly entries: ScscDocketEntry[] = [
    { date: '2024-03-12', event: 'Complaint filed', filedBy: 'Plaintiff', documentId: 'doc-101' },
    { date: '2024-03-13', event: 'Summons issued', filedBy: 'Clerk' },
    {
      date: '2024-04-02',
      event: 'Answer to complaint',
      filedBy: 'Defendant',
      documentId: 'doc-117',
    },
    {
      date: '2026-09-15',
      event: 'Minute order: hearing continued',
      filedBy: 'Court',
      documentId: 'doc-240',
    },
  ];
}
`,html:`<!-- A phone-width column: below stackBelow (sm, measured on the table) entries become cards. -->
<div class="max-w-sm">
  <scsc-docket-table
    label="Docket, 24CV012345"
    [entries]="entries"
    (viewDocument)="opened.set($event)"
  />
  @if (opened()) {
    <p class="mt-2 text-sm text-base-content/70" aria-live="polite">Opened {{ opened() }}</p>
  }
</div>
`},"docket-table-viewer":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscDocketTable, ScscModal, type ScscDocketEntry } from '@scscourt/design';
import { ScscFileViewer } from '@scscourt/design/viewer';

/** A scanned page stand-in (inline SVG), so the preview needs no network. */
function page(title: string): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" width="425" height="550" viewBox="0 0 425 550">
    <rect width="425" height="550" fill="#fff"/>
    <text x="212" y="70" text-anchor="middle" font-family="serif" font-size="18" fill="#111">\${title}</text>
    <text x="212" y="95" text-anchor="middle" font-family="serif" font-size="11" fill="#444">Case No. 24CV012345</text>
    \${[140, 165, 190, 215, 240, 265, 290].map((y) => \`<rect x="50" y="\${y}" width="325" height="7" fill="#d9d9d9"/>\`).join('')}
  </svg>\`;
  return \`data:image/svg+xml;utf8,\${encodeURIComponent(svg)}\`;
}

@Component({
  selector: 'app-docket-table-viewer-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocketTable, ScscFileViewer, ScscModal],
  template: \`
    <scsc-docket-table [entries]="docket" (viewDocument)="view($event)" />

    <!-- The docket only emits the id; your page owns the viewer. -->
    <scsc-modal [(open)]="open" [title]="doc()?.name ?? ''">
      @if (open() && doc(); as d) {
        <scsc-file-viewer [src]="d.src" [name]="d.name" type="image" />
      }
    </scsc-modal>
  \`,
})
export class DocketTableViewerDemo {
  protected readonly docket: ScscDocketEntry[] = [
    { date: '2024-03-12', event: 'Complaint filed', filedBy: 'Plaintiff', documentId: 'd1' },
    { date: '2024-03-13', event: 'Summons issued', filedBy: 'Clerk' },
    { date: '2024-04-09', event: 'Answer filed', filedBy: 'Defendant', documentId: 'd2' },
  ];

  private readonly documents: Record<string, { name: string; src: string }> = {
    d1: { name: 'Complaint (filed Mar 12, 2024)', src: page('COMPLAINT FOR DAMAGES') },
    d2: { name: 'Answer (filed Apr 9, 2024)', src: page('ANSWER TO COMPLAINT') },
  };

  protected readonly open = signal(false);
  private readonly openId = signal('');
  protected readonly doc = computed(() => this.documents[this.openId()] ?? null);

  protected view(documentId: string): void {
    this.openId.set(documentId);
    this.open.set(true);
  }
}
`,html:`<scsc-docket-table [entries]="docket" (viewDocument)="view($event)" />

<!-- The docket only emits the id; your page owns the viewer. -->
<scsc-modal [(open)]="open" [title]="doc()?.name ?? ''">
  @if (open() && doc(); as d) {
    <scsc-file-viewer [src]="d.src" [name]="d.name" type="image" />
  }
</scsc-modal>
`}};var fe={slug:`docket-table`,name:`Docket Table`,classes:[`ScscDocketTable`],category:`Court`,whenToUse:['Responsive: built on `scsc-table` with `responsive="stack"`. Below `stackBelow` (`sm` by default, measured on the table\'s own width) each entry becomes a card, so a docket reads on a phone without sideways scrolling.',`The register of actions on a case: one row per filing or court event in date order.`,"Set `documentId` on entries that have a viewable document; the row gets a view button and `viewDocument` emits the id for your viewer (`scsc-file-viewer` or a new tab).","For sortable, searchable, paginated case lists use `scsc-table`; this table is intentionally a fixed four-column register."],demos:[{id:`docket-table-basic`,title:`Register of actions`,description:"Entries with and without documents; `viewDocument` is handled with a signal.",component:g,source:D[`docket-table-basic`]},{id:`docket-table-empty`,title:`Empty`,description:`An empty array renders a single "No docket entries." row.`,component:h,source:D[`docket-table-empty`]},{id:`docket-table-viewer`,title:`Open documents in a viewer`,description:"`(viewDocument)` looks the id up and opens `scsc-file-viewer` in `scsc-modal`; the pages here are inline SVG stand-ins for scans.",component:C,source:D[`docket-table-viewer`]},{id:`docket-table-stacked`,title:`Stacked on a phone`,description:"Built on `scsc-table`: below `stackBelow` (`sm`, measured on the table's own width) each entry becomes a card with its View document action.",component:S,source:D[`docket-table-stacked`]},{id:`docket-table-dark`,title:`Compact density, dark theme`,description:'A probate docket with `density="compact"` in the dark theme.',component:T,source:D[`docket-table-dark`]}],a11y:["A real `<table>` with a header row, so column headers are announced per cell.",'Each view button has an `aria-label` that includes the event ("View document for Answer filed").','The host scrolls horizontally on narrow screens instead of truncating cells. While it does, it is a focusable region named by `label` ("Docket" by default), so keyboard users can scroll it; `label` also names the table.'],keyboard:[{keys:`Tab`,action:'The scroll region while the table overflows (named by `label`, "Docket" by default), then each row’s view button.'},{keys:`Enter / Space`,action:"On a view button: emits `viewDocument` with the entry’s `documentId`."},{keys:`ArrowLeft / ArrowRight`,action:`On the focused scroll region, the browser scrolls the table sideways.`}],appMustProvide:["A distinct `label` when more than one docket table is on a page."],related:[`case-file`,`table`,`viewer`]};export{fe as DOCKET_TABLE_DOCS};