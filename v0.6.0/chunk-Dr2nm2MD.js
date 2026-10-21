import{Ca as Gv,Co as _2,Es as sD,Hs as y_,I as EP,Ka as Ov,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Rs as w_,Ss as rD,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,kt as NE,pi as sn,ra as Af,sa as C_,ta as $f,va as G_,vn as Vn,xs as q,y as At,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{a as W,c as et,u as oe}from"./chunk-MLxW3PWk.js";import{n as be,t as _}from"./chunk-WxNObRU0.js";var I=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-compact-demo`]],decls:2,vars:0,consts:[[1,`max-w-sm`],[`src`,`samples/order-after-hearing.pdf`,`workerSrc`,`assets/pdf.worker.min.mjs`,`title`,`Order after hearing.pdf`,`toolbar`,`compact`,`initialZoom`,`page`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-document-viewer`,1),Lf())},dependencies:[et],encapsulation:2})};var E=class r{log=q(``);tools=[`page-nav`,`separator`,`zoom`,`search`,`separator`,{id:`stamp`,label:`Stamp`,icon:`court.stamp`,handler:o=>this.log.set(`"Filed" stamp placed on page ${o.state().page}.`)},{id:`certified-copy`,label:`Request certified copy`,menu:!0,handler:()=>this.log.set(`Certified copy requested from the Clerk of the Court.`)},`download`];static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-custom-tools-demo`]],decls:5,vars:2,consts:[[`src`,`samples/order-after-hearing.pdf`,`workerSrc`,`assets/pdf.worker.min.mjs`,`title`,`Order after hearing.pdf`,3,`toolbar`],[`slot`,`toolbar-end`,`variant`,`ghost`,`size`,`sm`,3,`click`],[`role`,`status`,1,`mt-2`,`min-h-5`,`text-sm`]],template:function(e,t){e&1&&(Ga(0,`scsc-document-viewer`,0)(1,`scsc-button`,1),lc(`click`,function(){return t.log.set(`Sent to the case file.`)}),G_(2,` File `),Lf()(),Ga(3,`p`,2),G_(4),Lf()),e&2&&(Pv(`toolbar`,t.tools),Jb(4),nD(t.log()))},dependencies:[sn,et],encapsulation:2})};var j=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-detached-demo`]],decls:9,vars:1,consts:[[`viewer`,`scscViewer`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-2`,`rounded-t-box`,`border`,`border-b-0`,`border-base-300`,`bg-base-100`,`px-4`,`py-2`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`],[`tools`,`compact`,3,`for`],[`src`,`samples/order-after-hearing.pdf`,`workerSrc`,`assets/pdf.worker.min.mjs`,`title`,`Order after hearing.pdf`,`toolbar`,`none`,1,`rounded-t-none`]],template:function(e,t){if(e&1&&(Ga(0,`div`,1)(1,`div`)(2,`p`,2),G_(3,`24CV012345 · Order after hearing`),Lf(),Ga(4,`p`,3),G_(5,`Filed Jul 29, 2026`),Lf()(),uc(6,`scsc-viewer-toolbar`,4),Lf(),uc(7,`scsc-document-viewer`,5,0)),e&2){let c=C_(8);Jb(6),Pv(`for`,c)}},dependencies:[et,oe],encapsulation:2})};var z=class r{src=`samples/order-after-hearing.pdf`;workerSrc=`assets/pdf.worker.min.mjs`;page=q(1);static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-document-demo`]],decls:3,vars:4,consts:[[`title`,`Order after hearing.pdf`,3,`pageChange`,`src`,`workerSrc`,`thumbnails`],[1,`mt-2`,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`scsc-document-viewer`,0),lc(`pageChange`,function(w){return t.page.set(w)}),Lf(),Ga(1,`p`,1),G_(2),Lf()),e&2&&(Pv(`src`,t.src)(`workerSrc`,t.workerSrc)(`thumbnails`,!0),Jb(2),$f(` Showing page `,t.page(),`. Press Ctrl+F (Cmd+F) in the viewer and search for “hearing”. `))},dependencies:[et],encapsulation:2})};var ie=(r,o)=>o.name;function se(r,o){if(r&1&&(Ga(0,`option`,3),G_(1),Lf()),r&2){let e=o.$implicit,t=o.$index,c=y_();Pv(`value`,t)(`selected`,t===c.selected()),Jb(),nD(e.name)}}var ne=`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240" viewBox="0 0 480 240">
  <rect width="480" height="240" fill="#f4f1ea"/>
  <rect x="60" y="40" width="360" height="140" rx="8" fill="none" stroke="#1f3a5f" stroke-width="3"/>
  <text x="240" y="118" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1f3a5f">Exhibit B - Photograph</text>
</svg>`;var O=class r{workerSrc=`assets/pdf.worker.min.mjs`;attachments=[{name:`Exhibit B - photograph`,src:`data:image/svg+xml;utf8,${encodeURIComponent(ne)}`,type:`image`},{name:`Order after hearing.pdf`,src:`samples/order-after-hearing.pdf`},{name:`Proof of service.docx`,src:`/filings/24CV012345/proof-of-service.docx`}];selected=q(0);current=ut(()=>this.attachments[this.selected()]);static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-file-demo`]],decls:6,vars:4,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`label`,`Attachment`,`hint`,`The viewer is chosen from the file type: image, PDF, or a download card.`,`for`,`viewer-file-pick`],[`scsc-select`,``,`id`,`viewer-file-pick`,3,`change`],[3,`value`,`selected`],[3,`src`,`name`,`type`,`workerSrc`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(w){return t.selected.set(+w.target.value)}),o_(3,se,2,3,`option`,3,ie),Lf()(),uc(5,`scsc-file-viewer`,4),Lf()),e&2&&(Jb(3),i_(t.attachments),Jb(2),Pv(`src`,t.current().src)(`name`,t.current().name)(`type`,t.current().type??``)(`workerSrc`,t.workerSrc))},dependencies:[Vn,On,be],encapsulation:2})};var ce=`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">
  <rect width="480" height="300" fill="#f4f1ea"/>
  <rect x="40" y="40" width="400" height="220" fill="none" stroke="#1f3a5f" stroke-width="3"/>
  <rect x="70" y="70" width="140" height="90" fill="#c9a227" opacity="0.6"/>
  <rect x="250" y="120" width="160" height="110" fill="#1f3a5f" opacity="0.35"/>
  <line x1="40" y1="200" x2="440" y2="200" stroke="#1f3a5f" stroke-dasharray="8 6"/>
  <text x="240" y="285" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1f3a5f">Exhibit A - Site plan, 1200 Park Ave.</text>
</svg>`;var M=class r{src=`data:image/svg+xml;utf8,${encodeURIComponent(ce)}`;static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-image-demo`]],decls:2,vars:1,consts:[[1,`max-w-xl`],[`alt`,`Exhibit A - site plan of 1200 Park Ave.`,3,`src`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-image-viewer`,1),Lf()),e&2&&(Jb(),Pv(`src`,t.src))},dependencies:[_],encapsulation:2})};var le=(r,o)=>o.name;function me(r,o){if(r&1){let e=d_();Ga(0,`li`,1)(1,`div`,4)(2,`p`,5),G_(3),Lf(),Ga(4,`scsc-text`,6),G_(5),Lf()(),Ga(6,`scsc-button`,7),lc(`click`,function(){let c=Eg(e).$implicit,w=y_();return Ig(w.view(c))}),G_(7,` View`),Ga(8,`span`,8),G_(9),Lf()()()}if(r&2){let e=o.$implicit;Jb(3),nD(e.name),Jb(2),$f(`Filed `,e.filed),Jb(4),$f(` `,e.name)}}function de(r,o){if(r&1&&uc(0,`scsc-file-viewer`,3),r&2){let e=o,t=y_();Pv(`src`,e.src)(`name`,e.name)(`type`,e.type??``)(`workerSrc`,t.workerSrc)}}var pe=`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">
  <rect width="480" height="300" fill="#f4f1ea"/>
  <rect x="40" y="40" width="400" height="220" fill="none" stroke="#1f3a5f" stroke-width="3"/>
  <rect x="70" y="70" width="140" height="90" fill="#c9a227" opacity="0.6"/>
  <text x="240" y="285" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1f3a5f">Exhibit A - Site plan, 1200 Park Ave.</text>
</svg>`;var A=class r{workerSrc=`assets/pdf.worker.min.mjs`;documents=[{name:`Exhibit A - site plan`,filed:`Jun 2, 2024`,src:`data:image/svg+xml;utf8,${encodeURIComponent(pe)}`,type:`image`},{name:`Order after hearing.pdf`,filed:`Jul 29, 2026`,src:`samples/order-after-hearing.pdf`},{name:`Proof of service.docx`,filed:`Jul 29, 2026`,src:`/filings/24CV012345/proof-of-service.docx`}];open=q(!1);viewing=q(null);view(o){this.viewing.set(o),this.open.set(!0)}static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-modal-demo`]],decls:5,vars:3,consts:[[`aria-label`,`Documents in 24CV012345`,1,`max-w-xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-3`],[3,`openChange`,`open`,`title`],[3,`src`,`name`,`type`,`workerSrc`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`font-medium`],[`tone`,`muted`,`size`,`sm`,1,`block`],[`variant`,`ghost`,`size`,`sm`,3,`click`],[1,`sr-only`]],template:function(e,t){if(e&1&&(Ga(0,`scsc-list`,0),o_(1,me,10,3,`li`,1,le),Lf(),Ga(3,`scsc-modal`,2),sD(`openChange`,function(w){return Y_(t.open,w)||(t.open=w),w}),JT(4,de,1,4,`scsc-file-viewer`,3),Lf()),e&2){let c;Jb(),i_(t.documents),Jb(2),iD(`open`,t.open),Pv(`title`,t.viewing()?.name??``),Jb(),t_((c=t.open()&&t.viewing())?4:-1,c)}},dependencies:[sn,be,EP,At,NE],encapsulation:2})};var R=class r{viewer=_2.required(et);summary=ut(()=>{let o=this.viewer().state(),e=o.search?` \xB7 ${o.search.matchCount} matches for \u201C${o.search.query}\u201D`:``;return`Page ${o.page} of ${o.pageCount} \xB7 ${Math.round(o.zoom*100)}% \xB7 rotated ${o.rotation}\xB0${e}`});static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-programmatic-demo`]],viewQuery:function(e,t){e&1&&Gv(t.viewer,et,5),e&2&&w_()},decls:12,vars:1,consts:[[`role`,`group`,`aria-label`,`Jump to`,1,`mb-3`,`flex`,`flex-wrap`,`gap-2`],[`variant`,`secondary`,`outline`,``,`size`,`sm`,3,`click`],[`src`,`samples/order-after-hearing.pdf`,`workerSrc`,`assets/pdf.worker.min.mjs`,`title`,`Order after hearing.pdf`,`toolbar`,`compact`],[1,`tnum`,`mt-2`,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return t.viewer().goToPage(2)}),G_(2,` Signature page `),Lf(),Ga(3,`scsc-button`,1),lc(`click`,function(){return t.viewer().search(`court`)}),G_(4,` Find “court” `),Lf(),Ga(5,`scsc-button`,1),lc(`click`,function(){return t.viewer().setZoom(1)}),G_(6,` Actual size `),Lf(),Ga(7,`scsc-button`,1),lc(`click`,function(){return t.viewer().rotate()}),G_(8,` Rotate `),Lf()(),uc(9,`scsc-document-viewer`,2),Ga(10,`p`,3),G_(11),Lf()),e&2&&(Jb(11),nD(t.summary()))},dependencies:[sn,et],encapsulation:2})};function fe(r,o){if(r&1){let e=d_();Ga(0,`div`,2)(1,`scsc-button`,3),lc(`click`,function(){let c=Eg(e).$implicit;return Ig(c.prev())}),G_(2,` Previous `),Lf(),Ga(3,`span`,4),G_(4),Lf(),Ga(5,`scsc-button`,3),lc(`click`,function(){let c=Eg(e).$implicit;return Ig(c.next())}),G_(6,` Next `),Lf()(),Ga(7,`scsc-button`,5),lc(`click`,function(){let c=Eg(e).$implicit;return Ig(c.fit(`page`))}),G_(8,` Whole page `),Lf()}if(r&2){let e=o.$implicit;Jb(),Pv(`disabled`,e.state().page<=1),Jb(3),rD(` Page `,e.state().page,` of `,e.state().pageCount,` `),Jb(),Pv(`disabled`,e.state().page>=e.state().pageCount)}}var $=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-viewer-template-demo`]],decls:2,vars:0,consts:[[`src`,`samples/order-after-hearing.pdf`,`workerSrc`,`assets/pdf.worker.min.mjs`,`title`,`Order after hearing.pdf`],[`scscViewerToolbar`,``],[`role`,`group`,`aria-label`,`Pages`,1,`flex`,`items-center`,`gap-2`],[`variant`,`ghost`,`size`,`sm`,3,`click`,`disabled`],[1,`tnum`,`text-sm`],[`variant`,`ghost`,`size`,`sm`,1,`ms-auto`,3,`click`]],template:function(e,t){e&1&&(Ga(0,`scsc-document-viewer`,0),Ov(1,fe,9,4,`ng-template`,1),Lf())},dependencies:[sn,et,W],encapsulation:2})};var u={"viewer-compact":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDocumentViewer } from '@scscourt/design/viewer';

@Component({
  selector: 'app-viewer-compact-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocumentViewer],
  template: \`
    <!-- In a column narrower than 40rem the compact toolbar folds fit, rotate, download, print
         and full screen into "More tools"; wider, it shows them inline. -->
    <div class="max-w-sm">
      <scsc-document-viewer
        src="samples/order-after-hearing.pdf"
        workerSrc="assets/pdf.worker.min.mjs"
        title="Order after hearing.pdf"
        toolbar="compact"
        initialZoom="page"
      />
    </div>
  \`,
})
export class ViewerCompactDemo {}
`,html:`<!-- In a column narrower than 40rem the compact toolbar folds fit, rotate, download, print
     and full screen into "More tools"; wider, it shows them inline. -->
<div class="max-w-sm">
  <scsc-document-viewer
    src="samples/order-after-hearing.pdf"
    workerSrc="assets/pdf.worker.min.mjs"
    title="Order after hearing.pdf"
    toolbar="compact"
    initialZoom="page"
  />
</div>
`},"viewer-custom-tools":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton } from '@scscourt/design';
import {
  ScscDocumentViewer,
  type ScscViewerController,
  type ScscViewerToolbarItem,
} from '@scscourt/design/viewer';

@Component({
  selector: 'app-viewer-custom-tools-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDocumentViewer],
  template: \`
    <scsc-document-viewer
      src="samples/order-after-hearing.pdf"
      workerSrc="assets/pdf.worker.min.mjs"
      title="Order after hearing.pdf"
      [toolbar]="tools"
    >
      <!-- Projected buttons join the toolbar and its arrow-key order. -->
      <scsc-button
        slot="toolbar-end"
        variant="ghost"
        size="sm"
        (click)="log.set('Sent to the case file.')"
      >
        File
      </scsc-button>
    </scsc-document-viewer>
    <p class="mt-2 min-h-5 text-sm" role="status">{{ log() }}</p>
  \`,
})
export class ViewerCustomToolsDemo {
  protected readonly log = signal('');

  // Built-in tool ids and your own tools, in order. A custom tool's handler gets the viewer (its
  // controller), so it can read the current page or drive the viewer.
  protected readonly tools: ScscViewerToolbarItem[] = [
    'page-nav',
    'separator',
    'zoom',
    'search',
    'separator',
    {
      id: 'stamp',
      label: 'Stamp',
      icon: 'court.stamp',
      handler: (viewer: ScscViewerController) =>
        this.log.set(\`"Filed" stamp placed on page \${viewer.state().page}.\`),
    },
    {
      id: 'certified-copy',
      label: 'Request certified copy',
      menu: true,
      handler: () => this.log.set('Certified copy requested from the Clerk of the Court.'),
    },
    'download',
  ];
}
`,html:`<scsc-document-viewer
  src="samples/order-after-hearing.pdf"
  workerSrc="assets/pdf.worker.min.mjs"
  title="Order after hearing.pdf"
  [toolbar]="tools"
>
  <!-- Projected buttons join the toolbar and its arrow-key order. -->
  <scsc-button
    slot="toolbar-end"
    variant="ghost"
    size="sm"
    (click)="log.set('Sent to the case file.')"
  >
    File
  </scsc-button>
</scsc-document-viewer>
<p class="mt-2 min-h-5 text-sm" role="status">{{ log() }}</p>
`},"viewer-detached":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDocumentViewer, ScscViewerToolbar } from '@scscourt/design/viewer';

@Component({
  selector: 'app-viewer-detached-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocumentViewer, ScscViewerToolbar],
  template: \`
    <div
      class="flex flex-wrap items-center justify-between gap-2 rounded-t-box border border-b-0 border-base-300 bg-base-100 px-4 py-2"
    >
      <div>
        <p class="font-medium">24CV012345 \xB7 Order after hearing</p>
        <p class="text-sm text-base-content/70">Filed Jul 29, 2026</p>
      </div>
      <!-- The standard toolbar, placed in the page header and bound to the viewer below. -->
      <scsc-viewer-toolbar [for]="viewer" tools="compact" />
    </div>
    <scsc-document-viewer
      #viewer="scscViewer"
      class="rounded-t-none"
      src="samples/order-after-hearing.pdf"
      workerSrc="assets/pdf.worker.min.mjs"
      title="Order after hearing.pdf"
      toolbar="none"
    />
  \`,
})
export class ViewerDetachedDemo {}
`,html:`<div
  class="flex flex-wrap items-center justify-between gap-2 rounded-t-box border border-b-0 border-base-300 bg-base-100 px-4 py-2"
>
  <div>
    <p class="font-medium">24CV012345 \xB7 Order after hearing</p>
    <p class="text-sm text-base-content/70">Filed Jul 29, 2026</p>
  </div>
  <!-- The standard toolbar, placed in the page header and bound to the viewer below. -->
  <scsc-viewer-toolbar [for]="viewer" tools="compact" />
</div>
<scsc-document-viewer
  #viewer="scscViewer"
  class="rounded-t-none"
  src="samples/order-after-hearing.pdf"
  workerSrc="assets/pdf.worker.min.mjs"
  title="Order after hearing.pdf"
  toolbar="none"
/>
`},"viewer-document":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscDocumentViewer } from '@scscourt/design/viewer';

@Component({
  selector: 'app-viewer-document-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDocumentViewer],
  template: \`
    <scsc-document-viewer
      [src]="src"
      [workerSrc]="workerSrc"
      title="Order after hearing.pdf"
      [thumbnails]="true"
      (pageChange)="page.set($event)"
    />
    <p class="mt-2 text-sm text-base-content/70">
      Showing page {{ page() }}. Press Ctrl+F (Cmd+F) in the viewer and search for \u201Chearing\u201D.
    </p>
  \`,
})
export class ViewerDocumentDemo {
  // Any same-origin or CORS-enabled PDF; in an app, typically /api/filings/<id>/document.pdf.
  // Relative URLs resolve against <base href>, like <img src>.
  protected readonly src = 'samples/order-after-hearing.pdf';
  // The worker copied by the angular.json assets glob (see Setup). Leave workerSrc unset to
  // load the worker matching the installed pdfjs-dist from jsDelivr instead.
  protected readonly workerSrc = 'assets/pdf.worker.min.mjs';
  protected readonly page = signal(1);
}
`,html:`<scsc-document-viewer
  [src]="src"
  [workerSrc]="workerSrc"
  title="Order after hearing.pdf"
  [thumbnails]="true"
  (pageChange)="page.set($event)"
/>
<p class="mt-2 text-sm text-base-content/70">
  Showing page {{ page() }}. Press Ctrl+F (Cmd+F) in the viewer and search for \u201Chearing\u201D.
</p>
`},"viewer-file":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscFormField, ScscSelect } from '@scscourt/design';
import { ScscFileViewer } from '@scscourt/design/viewer';

interface Attachment {
  name: string;
  src: string;
  /** Only needed when the URL has no usable extension (data URIs, API routes). */
  type?: 'pdf' | 'image' | 'other';
}

const EXHIBIT_SVG = \`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240" viewBox="0 0 480 240">
  <rect width="480" height="240" fill="#f4f1ea"/>
  <rect x="60" y="40" width="360" height="140" rx="8" fill="none" stroke="#1f3a5f" stroke-width="3"/>
  <text x="240" y="118" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1f3a5f">Exhibit B - Photograph</text>
</svg>\`;

@Component({
  selector: 'app-viewer-file-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSelect, ScscFileViewer],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <scsc-form-field
        label="Attachment"
        hint="The viewer is chosen from the file type: image, PDF, or a download card."
        for="viewer-file-pick"
      >
        <select
          scsc-select
          id="viewer-file-pick"
          (change)="selected.set(+$any($event.target).value)"
        >
          @for (a of attachments; track a.name; let i = $index) {
            <option [value]="i" [selected]="i === selected()">{{ a.name }}</option>
          }
        </select>
      </scsc-form-field>

      <scsc-file-viewer
        [src]="current().src"
        [name]="current().name"
        [type]="current().type ?? ''"
        [workerSrc]="workerSrc"
      />
    </div>
  \`,
})
export class ViewerFileDemo {
  // Self-hosted pdf.js worker (see Setup); only used when a PDF is shown.
  protected readonly workerSrc = 'assets/pdf.worker.min.mjs';

  protected readonly attachments: Attachment[] = [
    {
      name: 'Exhibit B - photograph',
      src: \`data:image/svg+xml;utf8,\${encodeURIComponent(EXHIBIT_SVG)}\`,
      type: 'image',
    },
    {
      name: 'Order after hearing.pdf',
      src: 'samples/order-after-hearing.pdf',
    },
    { name: 'Proof of service.docx', src: '/filings/24CV012345/proof-of-service.docx' },
  ];

  protected readonly selected = signal(0);
  protected readonly current = computed(() => this.attachments[this.selected()]);
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <scsc-form-field
    label="Attachment"
    hint="The viewer is chosen from the file type: image, PDF, or a download card."
    for="viewer-file-pick"
  >
    <select
      scsc-select
      id="viewer-file-pick"
      (change)="selected.set(+$any($event.target).value)"
    >
      @for (a of attachments; track a.name; let i = $index) {
        <option [value]="i" [selected]="i === selected()">{{ a.name }}</option>
      }
    </select>
  </scsc-form-field>

  <scsc-file-viewer
    [src]="current().src"
    [name]="current().name"
    [type]="current().type ?? ''"
    [workerSrc]="workerSrc"
  />
</div>
`},"viewer-image":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscImageViewer } from '@scscourt/design/viewer';

// A small inline SVG stands in for a scanned exhibit; any image URL works the same way.
const EXHIBIT_SVG = \`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">
  <rect width="480" height="300" fill="#f4f1ea"/>
  <rect x="40" y="40" width="400" height="220" fill="none" stroke="#1f3a5f" stroke-width="3"/>
  <rect x="70" y="70" width="140" height="90" fill="#c9a227" opacity="0.6"/>
  <rect x="250" y="120" width="160" height="110" fill="#1f3a5f" opacity="0.35"/>
  <line x1="40" y1="200" x2="440" y2="200" stroke="#1f3a5f" stroke-dasharray="8 6"/>
  <text x="240" y="285" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1f3a5f">Exhibit A - Site plan, 1200 Park Ave.</text>
</svg>\`;

@Component({
  selector: 'app-viewer-image-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscImageViewer],
  template: \`
    <div class="max-w-xl">
      <scsc-image-viewer [src]="src" alt="Exhibit A - site plan of 1200 Park Ave." />
    </div>
  \`,
})
export class ViewerImageDemo {
  protected readonly src = \`data:image/svg+xml;utf8,\${encodeURIComponent(EXHIBIT_SVG)}\`;
}
`,html:`<div class="max-w-xl">
  <scsc-image-viewer [src]="src" alt="Exhibit A - site plan of 1200 Park Ave." />
</div>
`},"viewer-modal":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscList, ScscModal, ScscText } from '@scscourt/design';
import { ScscFileViewer } from '@scscourt/design/viewer';

interface CaseDocument {
  name: string;
  filed: string;
  src: string;
  /** Only needed when the URL has no usable extension (data URIs, API routes). */
  type?: 'pdf' | 'image' | 'other';
}

const EXHIBIT_SVG = \`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">
  <rect width="480" height="300" fill="#f4f1ea"/>
  <rect x="40" y="40" width="400" height="220" fill="none" stroke="#1f3a5f" stroke-width="3"/>
  <rect x="70" y="70" width="140" height="90" fill="#c9a227" opacity="0.6"/>
  <text x="240" y="285" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1f3a5f">Exhibit A - Site plan, 1200 Park Ave.</text>
</svg>\`;

@Component({
  selector: 'app-viewer-modal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscFileViewer, ScscList, ScscModal, ScscText],
  template: \`
    <scsc-list
      class="max-w-xl rounded-box border border-base-300 bg-base-100"
      aria-label="Documents in 24CV012345"
    >
      @for (d of documents; track d.name) {
        <li class="flex items-center gap-3 px-4 py-3">
          <div class="min-w-0 flex-1">
            <p class="truncate font-medium">{{ d.name }}</p>
            <scsc-text tone="muted" size="sm" class="block">Filed {{ d.filed }}</scsc-text>
          </div>
          <scsc-button variant="ghost" size="sm" (click)="view(d)">
            View<span class="sr-only"> {{ d.name }}</span>
          </scsc-button>
        </li>
      }
    </scsc-list>

    <scsc-modal [(open)]="open" [title]="viewing()?.name ?? ''">
      <!-- Mount the viewer only while open, so a PDF is fetched on demand. -->
      @if (open() && viewing(); as d) {
        <scsc-file-viewer
          [src]="d.src"
          [name]="d.name"
          [type]="d.type ?? ''"
          [workerSrc]="workerSrc"
        />
      }
    </scsc-modal>
  \`,
})
export class ViewerModalDemo {
  // Self-hosted pdf.js worker (see Setup).
  protected readonly workerSrc = 'assets/pdf.worker.min.mjs';

  protected readonly documents: CaseDocument[] = [
    {
      name: 'Exhibit A - site plan',
      filed: 'Jun 2, 2024',
      src: \`data:image/svg+xml;utf8,\${encodeURIComponent(EXHIBIT_SVG)}\`,
      type: 'image',
    },
    {
      name: 'Order after hearing.pdf',
      filed: 'Jul 29, 2026',
      src: 'samples/order-after-hearing.pdf',
    },
    {
      name: 'Proof of service.docx',
      filed: 'Jul 29, 2026',
      src: '/filings/24CV012345/proof-of-service.docx',
    },
  ];

  protected readonly open = signal(false);
  protected readonly viewing = signal<CaseDocument | null>(null);

  protected view(d: CaseDocument): void {
    this.viewing.set(d);
    this.open.set(true);
  }
}
`,html:`<scsc-list
  class="max-w-xl rounded-box border border-base-300 bg-base-100"
  aria-label="Documents in 24CV012345"
>
  @for (d of documents; track d.name) {
    <li class="flex items-center gap-3 px-4 py-3">
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium">{{ d.name }}</p>
        <scsc-text tone="muted" size="sm" class="block">Filed {{ d.filed }}</scsc-text>
      </div>
      <scsc-button variant="ghost" size="sm" (click)="view(d)">
        View<span class="sr-only"> {{ d.name }}</span>
      </scsc-button>
    </li>
  }
</scsc-list>

<scsc-modal [(open)]="open" [title]="viewing()?.name ?? ''">
  <!-- Mount the viewer only while open, so a PDF is fetched on demand. -->
  @if (open() && viewing(); as d) {
    <scsc-file-viewer
      [src]="d.src"
      [name]="d.name"
      [type]="d.type ?? ''"
      [workerSrc]="workerSrc"
    />
  }
</scsc-modal>
`},"viewer-programmatic":{ts:`import { ChangeDetectionStrategy, Component, computed, viewChild } from '@angular/core';
import { ScscButton } from '@scscourt/design';
import { ScscDocumentViewer } from '@scscourt/design/viewer';

@Component({
  selector: 'app-viewer-programmatic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDocumentViewer],
  template: \`
    <div role="group" aria-label="Jump to" class="mb-3 flex flex-wrap gap-2">
      <scsc-button variant="secondary" outline size="sm" (click)="viewer().goToPage(2)">
        Signature page
      </scsc-button>
      <scsc-button variant="secondary" outline size="sm" (click)="viewer().search('court')">
        Find \u201Ccourt\u201D
      </scsc-button>
      <scsc-button variant="secondary" outline size="sm" (click)="viewer().setZoom(1)">
        Actual size
      </scsc-button>
      <scsc-button variant="secondary" outline size="sm" (click)="viewer().rotate()">
        Rotate
      </scsc-button>
    </div>
    <scsc-document-viewer
      src="samples/order-after-hearing.pdf"
      workerSrc="assets/pdf.worker.min.mjs"
      title="Order after hearing.pdf"
      toolbar="compact"
    />
    <p class="tnum mt-2 text-sm text-base-content/70">{{ summary() }}</p>
  \`,
})
export class ViewerProgrammaticDemo {
  // The viewer is its own controller (ScscViewerController): state() and the commands.
  protected readonly viewer = viewChild.required(ScscDocumentViewer);

  protected readonly summary = computed(() => {
    const s = this.viewer().state();
    const found = s.search ? \` \xB7 \${s.search.matchCount} matches for \u201C\${s.search.query}\u201D\` : '';
    return \`Page \${s.page} of \${s.pageCount} \xB7 \${Math.round(s.zoom * 100)}% \xB7 rotated \${s.rotation}\xB0\${found}\`;
  });
}
`,html:`<div role="group" aria-label="Jump to" class="mb-3 flex flex-wrap gap-2">
  <scsc-button variant="secondary" outline size="sm" (click)="viewer().goToPage(2)">
    Signature page
  </scsc-button>
  <scsc-button variant="secondary" outline size="sm" (click)="viewer().search('court')">
    Find \u201Ccourt\u201D
  </scsc-button>
  <scsc-button variant="secondary" outline size="sm" (click)="viewer().setZoom(1)">
    Actual size
  </scsc-button>
  <scsc-button variant="secondary" outline size="sm" (click)="viewer().rotate()">
    Rotate
  </scsc-button>
</div>
<scsc-document-viewer
  src="samples/order-after-hearing.pdf"
  workerSrc="assets/pdf.worker.min.mjs"
  title="Order after hearing.pdf"
  toolbar="compact"
/>
<p class="tnum mt-2 text-sm text-base-content/70">{{ summary() }}</p>
`},"viewer-template":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton } from '@scscourt/design';
import { ScscDocumentViewer, ScscViewerToolbarTemplate } from '@scscourt/design/viewer';

@Component({
  selector: 'app-viewer-template-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDocumentViewer, ScscViewerToolbarTemplate],
  template: \`
    <scsc-document-viewer
      src="samples/order-after-hearing.pdf"
      workerSrc="assets/pdf.worker.min.mjs"
      title="Order after hearing.pdf"
    >
      <!-- Replaces the whole toolbar; the template gets the viewer's controller. -->
      <ng-template scscViewerToolbar let-viewer>
        <div role="group" aria-label="Pages" class="flex items-center gap-2">
          <scsc-button
            variant="ghost"
            size="sm"
            [disabled]="viewer.state().page <= 1"
            (click)="viewer.prev()"
          >
            Previous
          </scsc-button>
          <span class="tnum text-sm">
            Page {{ viewer.state().page }} of {{ viewer.state().pageCount }}
          </span>
          <scsc-button
            variant="ghost"
            size="sm"
            [disabled]="viewer.state().page >= viewer.state().pageCount"
            (click)="viewer.next()"
          >
            Next
          </scsc-button>
        </div>
        <scsc-button variant="ghost" size="sm" class="ms-auto" (click)="viewer.fit('page')">
          Whole page
        </scsc-button>
      </ng-template>
    </scsc-document-viewer>
  \`,
})
export class ViewerTemplateDemo {}
`,html:`<scsc-document-viewer
  src="samples/order-after-hearing.pdf"
  workerSrc="assets/pdf.worker.min.mjs"
  title="Order after hearing.pdf"
>
  <!-- Replaces the whole toolbar; the template gets the viewer's controller. -->
  <ng-template scscViewerToolbar let-viewer>
    <div role="group" aria-label="Pages" class="flex items-center gap-2">
      <scsc-button
        variant="ghost"
        size="sm"
        [disabled]="viewer.state().page <= 1"
        (click)="viewer.prev()"
      >
        Previous
      </scsc-button>
      <span class="tnum text-sm">
        Page {{ viewer.state().page }} of {{ viewer.state().pageCount }}
      </span>
      <scsc-button
        variant="ghost"
        size="sm"
        [disabled]="viewer.state().page >= viewer.state().pageCount"
        (click)="viewer.next()"
      >
        Next
      </scsc-button>
    </div>
    <scsc-button variant="ghost" size="sm" class="ms-auto" (click)="viewer.fit('page')">
      Whole page
    </scsc-button>
  </ng-template>
</scsc-document-viewer>
`}};var D=`skip`;var lt={slug:`viewer`,name:`Viewer`,classes:[`ScscDocumentViewer`,`ScscImageViewer`,`ScscFileViewer`,`ScscViewerToolbar`,`ScscViewerToolbarTemplate`],category:`Specialized`,summary:"In-page viewers for filed documents and exhibits: `scsc-document-viewer` renders PDFs with pdf.js (text layer, find, thumbnails, zoom, rotate, print), `scsc-image-viewer` zooms, pans and rotates an image, and `scsc-file-viewer` picks one of them (or a download card) from the file type. Both viewers share one controller API and a toolbar you can configure, extend, replace or detach.",whenToUse:["Use `scsc-file-viewer` by default: pass the URL and `name` and it dispatches on the extension. Set `type` explicitly when the URL has no extension (data URIs, `/api/documents/123`).","`scsc-document-viewer` is for PDFs only; pdf.js is imported lazily on first use, so the initial bundle is unaffected. Self-host the worker (`workerSrc`) in production or under a strict CSP.","`scsc-image-viewer` for scanned exhibits and photos: zoom, fit, rotate, and drag or arrow keys to pan. For a gallery, open one viewer at a time in a modal.",'Pick the toolbar with `toolbar`: `full` (default), `compact` for narrow columns and modals (secondary tools fold into "More tools" below 40rem), `none` with a detached `scsc-viewer-toolbar [for]`, or a list of built-in ids and your own `{ id, label, icon, handler }` tools.','Drive a viewer from your page through its controller: `#viewer="scscViewer"` or `viewChild(ScscDocumentViewer)`, then `goToPage()`, `search()`, `setZoom()`, `fit()`, `rotate()`, `download()`, and read `state()`.',`Anything else (DOCX, XLSX, audio) renders as a download card; do not try to preview it inline.`],setup:`// package.json \u2014 optional peer, needed only for PDFs (the document viewer loads it lazily)
"pdfjs-dist": "^6.0.0"

// import from the secondary entry point, not from '@scscourt/design'
import { ScscDocumentViewer, ScscImageViewer, ScscFileViewer, ScscViewerToolbar } from '@scscourt/design/viewer';

// Self-host the pdf.js worker (recommended; required under a strict CSP). Without workerSrc the
// viewer loads the worker for the installed pdfjs-dist version from jsDelivr. The worker must be
// the same version as the pdfjs-dist API.
// angular.json \u2192 "assets": [{ "glob": "pdf.worker.min.mjs", "input": "node_modules/pdfjs-dist/build", "output": "/assets" }]
<scsc-document-viewer [src]="url" title="Order after hearing.pdf" workerSrc="assets/pdf.worker.min.mjs" />

// Relative src and workerSrc URLs resolve against <base href>, like <img src>.

// Print renders every page at 150 dpi into a hidden iframe and opens the browser's print dialog
// (no pop-up, works for any PDF pdf.js can load). For very long documents, offer Download instead.

// Another pdf.js build (legacy, for older browsers), or a fake in tests:
providers: [{ provide: SCSC_PDFJS, useValue: () => import('pdfjs-dist/legacy/build/pdf.mjs') }]

// The toolbars use SCSC icon aliases (nav.chevron-left/right, action.zoom-in/out, action.fit-width,
// action.fit-page, action.rotate-right, action.search, nav.sidebar, action.download, action.print,
// action.fullscreen, action.more). provideScscIcons(SCSC_ICONS) registers all of them.

// Other languages: [labels]="{ zoomIn: 'Acercar', pageStatus: 'P\xE1gina {page} de {count}' }"
// (see SCSC_VIEWER_LABELS_EN for every string and its placeholders).`,demos:[{id:`viewer-document`,title:`Document viewer`,description:`Continuous pages with a thumbnails sidebar, find (Ctrl+F), go to page, zoom, fit, rotate, download, print and full screen. Only pages near the viewport are rendered; text can be selected and is read by screen readers.`,component:z,source:u[`viewer-document`],layout:`full-bleed`,a11y:D},{id:`viewer-compact`,title:`Compact toolbar`,description:'`toolbar="compact"` keeps page navigation, zoom and find in the row and folds the rest into "More tools" while the toolbar is narrower than 40rem. `initialZoom="page"` shows the whole page.',component:I,source:u[`viewer-compact`],a11y:D},{id:`viewer-custom-tools`,title:`Custom toolbar tools`,description:'A `toolbar` list mixes built-in tool ids with your own tools; `menu: true` puts a tool in "More tools". The handler receives the viewer. Buttons in `[slot=toolbar-start]` / `[slot=toolbar-end]` join the toolbar too.',component:E,source:u[`viewer-custom-tools`],a11y:D},{id:`viewer-template`,title:`Fully custom toolbar`,description:"`<ng-template scscViewerToolbar let-viewer>` replaces the toolbar; `viewer` is the controller. You then own the toolbar’s semantics: here, a labelled group of buttons.",component:$,source:u[`viewer-template`],a11y:D},{id:`viewer-detached`,title:`Toolbar in a page header`,description:'`scsc-viewer-toolbar [for]="viewer"` renders the standard toolbar anywhere, bound to a viewer with `toolbar="none"`.',component:j,source:u[`viewer-detached`],a11y:D},{id:`viewer-programmatic`,title:`Programmatic control`,description:"Your own buttons call the controller (`goToPage`, `search`, `setZoom`, `rotate`) and read `state()`.",component:R,source:u[`viewer-programmatic`],a11y:D},{id:`viewer-image`,title:`Image viewer`,description:`Zoom (buttons, +/−, Ctrl + wheel or pinch), fit, rotate (R) and pan (drag, or arrow keys on the focused image) an exhibit; here a small inline SVG data URI.`,component:M,source:u[`viewer-image`]},{id:`viewer-file`,title:`File viewer`,description:`One component for a case file's attachments; switch between an image, a PDF and a non-previewable file.`,component:O,source:u[`viewer-file`]},{id:`viewer-modal`,title:`From a document list`,description:"Each row opens `scsc-file-viewer` in `scsc-modal`; the viewer is mounted only while the modal is open, so a PDF is fetched on demand.",component:A,source:u[`viewer-modal`]}],a11y:["Each page has a pdf.js text layer over its canvas: the text can be selected and copied, and screen readers read it (the canvas is `aria-hidden`). Only pages near the viewport are rendered, so a screen reader reads the pages around the current one; Find searches the whole document.",`Scanned PDFs have no text layer (no OCR). Offer the original file for download, or a text alternative, for scans.`,"Tools that cannot act (Previous on page 1, Zoom in at the limit) are `aria-disabled` and stay focusable, so focus never jumps and a held Enter does not carry into another button.",`The page after navigation, the zoom level and the match count are announced politely; page changes while scrolling are announced once scrolling settles.`,'Loading is a `role="status"` message and a load error is a `role="alert"` with a Retry button.',`Search hits are outlined as well as tinted (not colour alone), and use the system Highlight colour in forced-colours mode.`],keyboard:[{keys:`Tab`,action:"The toolbar is one Tab stop, then the find bar (when open), the thumbnails (one stop) and the page pane, a focusable region named by the document `title` or the image `alt`."},{keys:`ArrowLeft / ArrowRight`,action:`In the toolbar: moves between tools (Home / End: first / last). In the page number field they move the caret until it reaches an edge.`},{keys:`Enter / Space`,action:"Runs the focused tool; toggles (Thumbnails, Fit, Find, Full screen) report `aria-pressed`."},{keys:`Enter`,action:`In the page number field: goes to that page.`},{keys:`Ctrl + F / Cmd + F`,action:`Inside the document viewer: opens the find bar and focuses it.`},{keys:`Enter / Shift + Enter`,action:`In the find field: next / previous match (wrapping). Escape closes the find bar and returns to the pages.`},{keys:`PageDown / PageUp`,action:`Next / previous page.`},{keys:`Home / End`,action:`On the pages: first / last page.`},{keys:`+ / −`,action:"Zoom in / out by `zoomStep`, within `zoomMin` … `zoomMax`."},{keys:`R / Shift + R`,action:`Rotate clockwise / counterclockwise.`},{keys:`ArrowUp / ArrowDown`,action:`In the thumbnails: previous / next page (Home / End: first / last).`},{keys:`Arrow keys`,action:`On the focused image pane: pan the zoomed image (Shift: further). On the document pane the browser scrolls.`},{keys:`Any shortcut`,action:`Never runs while you type in a field (page number, find, or your own inputs), and never uses Ctrl + / Ctrl −, which stay browser zoom.`}],aria:['Toolbar: `role="toolbar"` named "{name} tools" (or `label`), roving tabindex; toggles carry `aria-pressed`; unavailable tools `aria-disabled="true"`; shortcuts in `aria-keyshortcuts`.','Page pane: `role="region"` with `tabindex="0"`, named by `title` / `alt`; each page is a `role="group"` named "Page n".','Find bar: `role="search"`; its match count is an `aria-live="polite"` region.','Thumbnails: a `nav` named "Page thumbnails" with a list of buttons; the current page has `aria-current="page"`.','"More tools" is a `scsc-menu` (WAI-ARIA menu button) inside the toolbar.'],appMustProvide:['`title` on the document viewer, or `alt` on the image viewer (required): it names the pane and the toolbar. For an image, describe what the exhibit shows, not "image".',"`name` on the file viewer (required): the title, the default alt text and the download link name.","With a `scscViewerToolbar` template you own the toolbar semantics: labelled buttons, a group or toolbar role, and visible state.","Custom tools need a `label` that says what they do; icon-only tools use it as their accessible name and tooltip.",`For scanned (image-only) PDFs, a text alternative or the original file.`],related:[`case-file`,`docket-table`,`file-upload`,`modal`,`menu`]};export{lt as VIEWER_DOCS};