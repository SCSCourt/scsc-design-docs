import{Es as sD,Hs as y_,I as EP,Ma as JT,Ms as uc,Na as Jb,Ps as ut,T as Br,Uo as fa,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,fn as Ua,hs as oD,ks as t_,kt as NE,ra as Af,va as G_,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var x=class n{total=128;pageSize=10;page=q$1(3);totalPages=ut(()=>Math.ceil(this.total/this.pageSize));first=ut(()=>(this.page()-1)*this.pageSize+1);last=ut(()=>Math.min(this.page()*this.pageSize,this.total));static ɵfac=function(t){return new(t||n)};static ɵcmp=Af({type:n,selectors:[[`app-pagination-basic-demo`]],decls:4,vars:5,consts:[[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-4`],[`tone`,`muted`,`size`,`sm`,`tnum`,``],[3,`pageChange`,`page`,`totalPages`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-text`,1),G_(2),Lf(),Ga(3,`scsc-pagination`,2),sD(`pageChange`,function(a){return Y_(e.page,a)||(e.page=a),a}),Lf()()),t&2&&(Jb(2),oD(`Showing `,e.first(),`–`,e.last(),` of `,e.total,` filings`),Jb(),iD(`page`,e.page),Pv(`totalPages`,e.totalPages()))},dependencies:[Ua,NE],encapsulation:2})};var D=class n{page=q$1(3);static ɵfac=function(t){return new(t||n)};static ɵcmp=Af({type:n,selectors:[[`app-pagination-compact-demo`]],decls:1,vars:2,consts:[[`variant`,`compact`,`label`,`Docket pages`,3,`pageChange`,`page`,`totalPages`]],template:function(t,e){t&1&&(Ga(0,`scsc-pagination`,0),sD(`pageChange`,function(a){return Y_(e.page,a)||(e.page=a),a}),Lf()),t&2&&(iD(`page`,e.page),Pv(`totalPages`,12))},dependencies:[Ua],encapsulation:2})};var F=(n,s)=>s.no;function G(n,s){n&1&&(Ga(0,`li`,2),uc(1,`scsc-spinner`,11),Lf())}function U(n,s){if(n&1&&(Ga(0,`li`,12)(1,`span`,13),G_(2),Lf(),Ga(3,`span`,14),G_(4),Lf(),Ga(5,`span`,15),G_(6),Lf()()),n&2){let t=s.$implicit;Jb(2),nD(t.no),Jb(2),nD(t.title),Jb(2),nD(t.filed)}}function q(n,s){if(n&1&&o_(0,U,7,3,`li`,12,F),n&2){let t=y_();i_(t.rows())}}var R=[`Proof of service of summons`,`Declaration of R. Delgado`,`Notice of hearing`,`Opposition to motion to compel`,`Reply in support of motion`,`Minute order`];var w=class n{total=42;page=q$1(1);pageSize=q$1(5);loading=q$1(!1);rows=q$1([]);totalPages=ut(()=>Math.ceil(this.total/this.pageSize()));first=ut(()=>(this.page()-1)*this.pageSize()+1);last=ut(()=>Math.min(this.page()*this.pageSize(),this.total));constructor(){fa(s=>{let t=this.first(),e=this.last();this.loading.set(!0);let y=setTimeout(()=>{this.rows.set(Array.from({length:e-t+1},(a,_)=>({no:this.total-(t+_)+1,filed:`2026-`+String(9-(t+_)%8).padStart(2,`0`)+`-14`,title:R[(t+_)%R.length]}))),this.loading.set(!1)},400);s(()=>clearTimeout(y))})}setPageSize(s){this.pageSize.set(s),this.page.set(1)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Af({type:n,selectors:[[`app-pagination-list-demo`]],decls:16,vars:7,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[1,`min-h-72`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`],[1,`flex`,`items-center`,`justify-center`,`py-10`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[1,`flex`,`items-center`,`gap-3`],[`scsc-select`,``,`size`,`sm`,`aria-label`,`Entries per page`,3,`change`,`value`],[`value`,`5`],[`value`,`10`],[`value`,`20`],[`size`,`sm`,`tone`,`muted`,`tnum`,``,`role`,`status`],[3,`pageChange`,`page`,`totalPages`],[`size`,`sm`,`label`,`Loading docket entries`],[1,`flex`,`items-baseline`,`gap-4`,`py-2`,`text-sm`],[1,`w-10`,`tnum`,`text-base-content/70`],[1,`grow`],[1,`tnum`,`text-base-content/70`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-list`,1),JT(2,G,2,0,`li`,2)(3,q,2,0),Lf(),Ga(4,`div`,3)(5,`div`,4)(6,`select`,5),lc(`change`,function(a){return e.setPageSize(+a.target.value)}),Ga(7,`option`,6),G_(8,`5 per page`),Lf(),Ga(9,`option`,7),G_(10,`10 per page`),Lf(),Ga(11,`option`,8),G_(12,`20 per page`),Lf()(),Ga(13,`scsc-text`,9),G_(14),Lf()(),Ga(15,`scsc-pagination`,10),sD(`pageChange`,function(a){return Y_(e.page,a)||(e.page=a),a}),Lf()()()),t&2&&(Jb(2),t_(e.loading()?2:3),Jb(4),Pv(`value`,e.pageSize()),Jb(8),oD(` `,e.first(),`–`,e.last(),` of `,e.total,` entries `),Jb(),iD(`page`,e.page),Pv(`totalPages`,e.totalPages()))},dependencies:[EP,Ua,On,Br,NE],encapsulation:2})};var C=class n{page=q$1(20);static ɵfac=function(t){return new(t||n)};static ɵcmp=Af({type:n,selectors:[[`app-pagination-siblings-demo`]],decls:3,vars:5,consts:[[1,`flex`,`flex-col`,`gap-4`],[3,`pageChange`,`page`,`totalPages`],[3,`pageChange`,`page`,`totalPages`,`siblings`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-pagination`,1),sD(`pageChange`,function(a){return Y_(e.page,a)||(e.page=a),a}),Lf(),Ga(2,`scsc-pagination`,2),sD(`pageChange`,function(a){return Y_(e.page,a)||(e.page=a),a}),Lf()()),t&2&&(Jb(),iD(`page`,e.page),Pv(`totalPages`,40),Jb(),iD(`page`,e.page),Pv(`totalPages`,40)(`siblings`,2))},dependencies:[Ua],encapsulation:2})};var b={"pagination-basic":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscPagination, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-pagination-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPagination, ScscText],
  template: \`
    <div class="flex flex-wrap items-center justify-between gap-4">
      <scsc-text tone="muted" size="sm" tnum
        >Showing {{ first() }}\u2013{{ last() }} of {{ total }} filings</scsc-text
      >
      <scsc-pagination [(page)]="page" [totalPages]="totalPages()" />
    </div>
  \`,
})
export class PaginationBasicDemo {
  protected readonly total = 128;
  protected readonly pageSize = 10;
  protected readonly page = signal(3);

  protected readonly totalPages = computed(() => Math.ceil(this.total / this.pageSize));
  protected readonly first = computed(() => (this.page() - 1) * this.pageSize + 1);
  protected readonly last = computed(() => Math.min(this.page() * this.pageSize, this.total));
}
`,html:`<div class="flex flex-wrap items-center justify-between gap-4">
  <scsc-text tone="muted" size="sm" tnum
    >Showing {{ first() }}\u2013{{ last() }} of {{ total }} filings</scsc-text
  >
  <scsc-pagination [(page)]="page" [totalPages]="totalPages()" />
</div>
`},"pagination-compact":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscPagination } from '@scscourt/design';

@Component({
  selector: 'app-pagination-compact-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPagination],
  template: \`
    <!-- The pager scsc-table uses: "Page 3 of 12" is announced as it changes. -->
    <scsc-pagination variant="compact" label="Docket pages" [(page)]="page" [totalPages]="12" />
  \`,
})
export class PaginationCompactDemo {
  protected readonly page = signal(3);
}
`,html:`<!-- The pager scsc-table uses: "Page 3 of 12" is announced as it changes. -->
<scsc-pagination variant="compact" label="Docket pages" [(page)]="page" [totalPages]="12" />
`},"pagination-list":{ts:`import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { ScscList, ScscPagination, ScscSelect, ScscSpinner, ScscText } from '@scscourt/design';

interface DocketEntry {
  no: number;
  filed: string;
  title: string;
}

const TITLES = [
  'Proof of service of summons',
  'Declaration of R. Delgado',
  'Notice of hearing',
  'Opposition to motion to compel',
  'Reply in support of motion',
  'Minute order',
];

@Component({
  selector: 'app-pagination-list-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscList, ScscPagination, ScscSelect, ScscSpinner, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <scsc-list class="min-h-72 rounded-box border border-base-300 bg-base-100 px-4">
        @if (loading()) {
          <li class="flex items-center justify-center py-10">
            <scsc-spinner size="sm" label="Loading docket entries" />
          </li>
        } @else {
          @for (e of rows(); track e.no) {
            <li class="flex items-baseline gap-4 py-2 text-sm">
              <span class="w-10 tnum text-base-content/70">{{ e.no }}</span>
              <span class="grow">{{ e.title }}</span>
              <span class="tnum text-base-content/70">{{ e.filed }}</span>
            </li>
          }
        }
      </scsc-list>

      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <select
            scsc-select
            size="sm"
            aria-label="Entries per page"
            [value]="pageSize()"
            (change)="setPageSize(+$any($event.target).value)"
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
          </select>
          <scsc-text size="sm" tone="muted" tnum role="status">
            {{ first() }}\u2013{{ last() }} of {{ total }} entries
          </scsc-text>
        </div>
        <scsc-pagination [(page)]="page" [totalPages]="totalPages()" />
      </div>
    </div>
  \`,
})
export class PaginationListDemo {
  protected readonly total = 42;
  protected readonly page = signal(1);
  protected readonly pageSize = signal(5);
  protected readonly loading = signal(false);
  protected readonly rows = signal<DocketEntry[]>([]);

  protected readonly totalPages = computed(() => Math.ceil(this.total / this.pageSize()));
  protected readonly first = computed(() => (this.page() - 1) * this.pageSize() + 1);
  protected readonly last = computed(() => Math.min(this.page() * this.pageSize(), this.total));

  constructor() {
    // Refetch whenever the page or the page size changes (swap in your API call).
    effect((onCleanup) => {
      const from = this.first();
      const to = this.last();
      this.loading.set(true);
      const t = setTimeout(() => {
        this.rows.set(
          Array.from({ length: to - from + 1 }, (_, i) => ({
            no: this.total - (from + i) + 1,
            filed: '2026-' + String(9 - ((from + i) % 8)).padStart(2, '0') + '-14',
            title: TITLES[(from + i) % TITLES.length],
          })),
        );
        this.loading.set(false);
      }, 400);
      onCleanup(() => clearTimeout(t));
    });
  }

  /** A new page size changes the page count, so start again at page 1. */
  protected setPageSize(size: number): void {
    this.pageSize.set(size);
    this.page.set(1);
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <scsc-list class="min-h-72 rounded-box border border-base-300 bg-base-100 px-4">
    @if (loading()) {
      <li class="flex items-center justify-center py-10">
        <scsc-spinner size="sm" label="Loading docket entries" />
      </li>
    } @else {
      @for (e of rows(); track e.no) {
        <li class="flex items-baseline gap-4 py-2 text-sm">
          <span class="w-10 tnum text-base-content/70">{{ e.no }}</span>
          <span class="grow">{{ e.title }}</span>
          <span class="tnum text-base-content/70">{{ e.filed }}</span>
        </li>
      }
    }
  </scsc-list>

  <div class="flex flex-wrap items-center justify-between gap-3">
    <div class="flex items-center gap-3">
      <select
        scsc-select
        size="sm"
        aria-label="Entries per page"
        [value]="pageSize()"
        (change)="setPageSize(+$any($event.target).value)"
      >
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
      </select>
      <scsc-text size="sm" tone="muted" tnum role="status">
        {{ first() }}\u2013{{ last() }} of {{ total }} entries
      </scsc-text>
    </div>
    <scsc-pagination [(page)]="page" [totalPages]="totalPages()" />
  </div>
</div>
`},"pagination-siblings":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscPagination } from '@scscourt/design';

@Component({
  selector: 'app-pagination-siblings-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPagination],
  template: \`
    <div class="flex flex-col gap-4">
      <!-- siblings = 1 (default): one page either side of the current page -->
      <scsc-pagination [(page)]="page" [totalPages]="40" />
      <!-- siblings = 2: a wider window for long docket lists -->
      <scsc-pagination [(page)]="page" [totalPages]="40" [siblings]="2" />
    </div>
  \`,
})
export class PaginationSiblingsDemo {
  protected readonly page = signal(20);
}
`,html:`<div class="flex flex-col gap-4">
  <!-- siblings = 1 (default): one page either side of the current page -->
  <scsc-pagination [(page)]="page" [totalPages]="40" />
  <!-- siblings = 2: a wider window for long docket lists -->
  <scsc-pagination [(page)]="page" [totalPages]="40" [siblings]="2" />
</div>
`}};var ye={slug:`pagination`,name:`Pagination`,classes:[`ScscPagination`],category:`Navigation`,whenToUse:["Lists and tables that page server-side: bind `[(page)]`, compute `totalPages` from the total count, and refetch on change.",'`scsc-table` paginates for you (`paginator="pages"` uses the compact variant); use this component when you build your own list or need pagination in a toolbar.',`Show a "Showing 11–20 of 128" line next to it so the user knows where they are; reset to page 1 when the page size or the filter changes.`,"Raise `siblings` for long result sets where jumping a few pages at a time matters.",'Every button is `type="button"`, so it is safe inside a `<form>`: paging never submits it.'],demos:[{id:`pagination-compact`,title:`Compact`,description:'`variant="compact"`: Previous, a live "Page 3 of 12" and Next. When a focused Previous or Next disables itself, focus moves to the other.',component:D,source:b[`pagination-compact`]},{id:`pagination-basic`,title:`With a range summary`,description:"`[(page)]` drives the summary; `totalPages` is computed from the count and page size.",component:x,source:b[`pagination-basic`]},{id:`pagination-siblings`,title:`Window size`,description:"Default `siblings` of 1 versus 2 on a 40-page list.",component:C,source:b[`pagination-siblings`]},{id:`pagination-list`,title:`Paging a docket list`,description:"An `effect()` refetches whenever `page` or the page size changes; a spinner holds the list, and the range line is a live status.",component:w,source:b[`pagination-list`]}],a11y:['Renders `<nav>` named by `label` (default "Pagination"); give each pager on a page its own `label`.','Page buttons are named "Page 3"; the current one carries `aria-current="page"`. The ellipsis is hidden text, not a control.',`Every button has a 44 × 44 px hit area in comfortable density (24 px in compact) without changing its look; the buttons are spaced so the hit areas never overlap (WCAG 2.5.5, 2.5.8).`,"Previous and Next are `aria-disabled` on the first and last page: they stay focusable and do nothing, so focus never drops to the page or jumps to another button.",'All words come from `SCSC_LABELS` (`pagination`, `previousPage`, `nextPage`, `page`, `pageOf`). The compact "Page 2 of 12" indicator is a polite live region.','Announce the result range in visible text with `role="status"` rather than relying on the button state alone.'],keyboard:[{keys:`Tab`,action:`Moves through Previous, the page buttons and Next.`},{keys:`Enter / Space`,action:`Goes to that page. On the first or last page, Previous or Next does nothing and keeps focus.`}],aria:['`<nav aria-label>`; `aria-current="page"` on the current page; `aria-disabled="true"` on Previous/Next at the ends.','Ellipsis: `aria-hidden="true"`. Compact indicator: `aria-live="polite"`.'],appMustProvide:["A unique `label` when a page has more than one pager."],related:[`table`,`list`]};export{ye as PAGINATION_DOCS};