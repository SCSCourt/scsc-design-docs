import{An as XN,Es as sD,Gt as QN,H as FN,Hs as y_,Ka as Ov,Ki as ye$1,Lo as d_,Lt as ON,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Ps as ut,Ss as rD,Tt as MN,Un as Za,Vr as mN,Xa as Pv,Xi as zN,Yo as iD,Zo as i_,_s as o_,a as $a,bo as Y_,cs as lc,ds as nD,fn as Ua,gs as oM,ha as Eg,it as IN,ka as Ig,ks as t_,ms as nu,nn as TN,pi as sn,qi as yr,r as $P,ra as Af,rr as da,ta as $f,va as G_,wo as _i,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var re=t=>[`cases`,t];var ae=(t,a)=>a.value;function ne(t,a){if(t&1&&(Ga(0,`option`,27),G_(1),Lf()),t&2){let e=a.$implicit,s=y_();Pv(`value`,e.value)(`selected`,e.value===s.typeFilter()),Jb(),$f(` `,e.label,` `)}}function ce(t,a){if(t&1&&(Ga(0,`option`,27),G_(1),Lf()),t&2){let e=a.$implicit,s=y_();Pv(`value`,e.value)(`selected`,e.value===s.statusFilter()),Jb(),$f(` `,e.label,` `)}}function oe(t,a){if(t&1){let e=d_();Ga(0,`scsc-button`,30),lc(`click`,function(){Eg(e);let r=y_();return Ig(r.clearFilters())}),uc(1,`scsc-icon`,31),G_(2,` Clear filters `),Lf()}}function me(t,a){if(t&1&&(Ga(0,`a`,35),G_(1),Lf()),t&2){let e=y_().$implicit;Pv(`routerLink`,oM(2,re,e.caseNumber)),Jb(),nD(e.caseNumber)}}function ue(t,a){if(t&1&&uc(0,`scsc-status-badge`,36),t&2){let e=y_().$implicit;Pv(`status`,e.status)}}function pe(t,a){if(t&1&&(Ga(0,`span`,37),G_(1),Lf()),t&2){let e=y_().$implicit,s=y_(2);Jb(),nD(s.formatDate(e.filed))}}function de(t,a){if(t&1&&(Ga(0,`span`,38),G_(1),Lf()),t&2){let e=y_().$implicit;Jb(),nD(e.type)}}function ye(t,a){if(t&1&&G_(0),t&2){let e=y_(),s=e.$implicit,r=e.col;$f(` `,s[r.key],` `)}}function fe(t,a){if(t&1&&JT(0,me,2,4,`a`,35)(1,ue,1,1,`scsc-status-badge`,36)(2,pe,2,1,`span`,37)(3,de,2,1,`span`,38)(4,ye,1,1),t&2){let e,s=a.col;t_((e=s.key)===`caseNumber`?0:e===`status`?1:e===`filed`?2:e===`type`?3:4)}}function ge(t,a){if(t&1){let e=d_();Ga(0,`div`,34)(1,`p`,39),G_(2),Lf(),Ga(3,`scsc-pagination`,40),sD(`pageChange`,function(r){Eg(e);let m=y_(2);return Y_(m.page,r)||(m.page=r),Ig(r)}),Lf()()}if(t&2){let e=y_(2);Jb(2),rD(`Page `,e.page(),` of `,e.totalPages()),Jb(),iD(`page`,e.page),Pv(`totalPages`,e.totalPages())}}function he(t,a){if(t&1){let e=d_();Ga(0,`scsc-table`,32),lc(`sortChange`,function(r){Eg(e);let m=y_();return Ig(m.sort.set(r[0]??null))}),Ov(1,fe,5,1,`ng-template`,33),Lf(),JT(2,ge,4,4,`div`,34)}if(t&2){let e=y_();Pv(`columns`,e.columns)(`rows`,e.pageRows())(`defaultSort`,e.initialSort),Jb(2),t_(e.totalPages()>1?2:-1)}}function be(t,a){if(t&1){let e=d_();Ga(0,`scsc-button`,45),lc(`click`,function(){Eg(e);let r=y_(2);return Ig(r.clearFilters())}),G_(1,` Clear filters `),Lf()}}function Ce(t,a){if(t&1&&(Ga(0,`scsc-card`)(1,`scsc-empty-state`,41)(2,`div`,42),JT(3,be,2,0,`scsc-button`,43),Ga(4,`a`,44),G_(5,` Ask the Clerk’s Office `),Lf()()()()),t&2){let e=y_();Jb(3),t_(e.typeFilter()||e.statusFilter()?3:-1)}}var Se=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Property Management`,type:`Civil — Unlimited`,typeKey:`civil`,filed:`2024-03-12`,status:`active`},{caseNumber:`25CV004411`,title:`Alvarez v. Bay Valley Auto Group`,type:`Civil — Limited`,typeKey:`civil`,filed:`2025-02-03`,status:`pending`},{caseNumber:`23FL098812`,title:`In re Marriage of Alvarez and Chen`,type:`Family — Dissolution`,typeKey:`family`,filed:`2023-11-20`,status:`closed`},{caseNumber:`24SC001207`,title:`Alvarez v. Kim`,type:`Small Claims`,typeKey:`small-claims`,filed:`2024-06-18`,status:`dismissed`},{caseNumber:`25PR000318`,title:`Estate of Ramona Alvarez`,type:`Probate — Decedent’s estate`,typeKey:`probate`,filed:`2025-01-09`,status:`active`},{caseNumber:`24CV019930`,title:`Pacific Crest Lending v. Alvarez`,type:`Civil — Limited`,typeKey:`civil`,filed:`2024-09-30`,status:`continued`},{caseNumber:`22CV003377`,title:`Alvarez v. Riverside Terrace HOA`,type:`Civil — Unlimited`,typeKey:`civil`,filed:`2022-05-16`,status:`closed`},{caseNumber:`25SC000842`,title:`Delgado v. Alvarez`,type:`Small Claims`,typeKey:`small-claims`,filed:`2025-04-22`,status:`filed`},{caseNumber:`24CV015560`,title:`Hernandez-Alvarez v. Summit Freight Lines`,type:`Civil — Unlimited`,typeKey:`civil`,filed:`2024-07-01`,status:`active`},{caseNumber:`24CV013002`,title:`Nguyen v. Almaden Ridge Apartments`,type:`Civil — Unlimited`,typeKey:`civil`,filed:`2024-04-02`,status:`active`},{caseNumber:`25CV002210`,title:`Brightline Solar Inc. v. Castro`,type:`Civil — Limited`,typeKey:`civil`,filed:`2025-01-27`,status:`pending`},{caseNumber:`24PR000977`,title:`Conservatorship of Walter Price`,type:`Probate — Conservatorship`,typeKey:`probate`,filed:`2024-08-14`,status:`active`}];var ve=[{value:``,label:`All case types`},{value:`civil`,label:`Civil`},{value:`family`,label:`Family`},{value:`probate`,label:`Probate`},{value:`small-claims`,label:`Small claims`}];var xe=[{value:``,label:`Any status`},{value:`active`,label:`Active`},{value:`pending`,label:`Pending`},{value:`continued`,label:`Continued`},{value:`filed`,label:`Filed`},{value:`closed`,label:`Closed`},{value:`dismissed`,label:`Dismissed`}];var x=5;var w=class t{nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`.`,exact:!0},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`}]}];trail=[{label:`Home`,link:`home`},{label:`Case search`}];columns=[{key:`caseNumber`,header:`Case number`,sortable:!0,width:`9rem`},{key:`title`,header:`Case title`,sortable:!0},{key:`type`,header:`Case type`},{key:`filed`,header:`Filed`,sortable:!0,width:`8rem`},{key:`status`,header:`Status`,width:`7rem`}];typeOptions=ve;statusOptions=xe;criteria=q({mode:`party`,lastName:`Alvarez`});typeFilter=q(``);statusFilter=q(``);initialSort=[{key:`filed`,dir:`desc`}];sort=q(this.initialSort[0]);matches=ut(()=>Se.filter(a=>_e(a,this.criteria())));filtered=ut(()=>{let a=this.typeFilter(),e=this.statusFilter(),s=this.matches().filter(_=>(!a||_.typeKey===a)&&(!e||_.status===e)),r=this.sort();if(!r)return s;let m=r.key,ie=r.dir===`asc`?1:-1;return[...s].sort((_,le)=>_[m].localeCompare(le[m])*ie)});page=_i({source:this.filtered,computation:()=>1});totalPages=ut(()=>Math.max(1,Math.ceil(this.filtered().length/x)));pageRows=ut(()=>this.filtered().slice((this.page()-1)*x,this.page()*x));summary=ut(()=>{let a=this.filtered().length,e=ke(this.criteria());if(!a)return`No cases match ${e}.`;let s=(this.page()-1)*x+1,r=Math.min(a,this.page()*x);return`${a} ${a===1?`case matches`:`cases match`} ${e}. Showing ${s}\u2013${r}.`});runSearch(a){this.criteria.set(a)}clearFilters(){this.typeFilter.set(``),this.statusFilter.set(``)}formatDate(a){let[e,s,r]=a.split(`-`).map(Number);return new Date(e,s-1,r).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-search-results-template`]],decls:51,vars:9,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`es`,`lang`,`es`,`hreflang`,`es`,1,`hover:underline`],[`routerLink`,`sign-in`,1,`inline-flex`,`items-center`,`gap-1`,`hover:underline`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-6`,`scsc-pad-page`],[`title`,`Case search`,`display`,``,`description`,`Find public case records by case number, party name, business or filing date.`],[`slot`,`breadcrumb`,3,`items`],[1,`grid`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`],[3,`search`],[`title`,`Search tips`],[1,`flex`,`flex-col`,`gap-2`,`text-sm`,`text-base-content/80`],[1,`flex`,`gap-2`],[`name`,`hash`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`name`,`user`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`name`,`eye-off`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`preset`,`electronic-record`,`variant`,`banner`,`learnMoreLink`,`records`],[`aria-labelledby`,`results-heading`,1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`flex-wrap`,`items-baseline`,`justify-between`,`gap-2`],[`id`,`results-heading`,1,`text-lg`,`font-semibold`,`text-base-content`],[`role`,`status`,1,`text-sm`,`text-base-content/70`],[3,`bordered`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[1,`font-medium`],[`scsc-select`,``,`size`,`sm`,1,`w-auto`,3,`change`],[3,`value`,`selected`],[`variant`,`ghost`,`size`,`sm`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`recordDisclaimer`,``,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[`variant`,`ghost`,`size`,`sm`,3,`click`],[`name`,`x`,`size`,`xs`],[`label`,`Case search results`,3,`sortChange`,`columns`,`rows`,`defaultSort`],[`scscCell`,``],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[1,`font-medium`,`tnum`,`text-primary`,`underline-offset-2`,`hover:underline`,3,`routerLink`],[3,`status`],[1,`tnum`,`whitespace-nowrap`],[1,`whitespace-nowrap`,`text-base-content/80`],[1,`text-sm`,`text-base-content/70`],[3,`pageChange`,`page`,`totalPages`],[`icon`,`search-x`,`title`,`No cases match`,`message`,`Check the spelling or search with fewer details. Confidential cases are never listed online.`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`],[`variant`,`primary`,`size`,`sm`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`help`],[`variant`,`primary`,`size`,`sm`,3,`click`]],template:function(e,s){e&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),G_(5,`Español`),Lf(),Ga(6,`a`,3),uc(7,`scsc-icon`,4),G_(8,` Sign in `),Lf()(),uc(9,`scsc-masthead`,5)(10,`scsc-primary-nav`,6),Ga(11,`div`,7)(12,`scsc-page-header`,8),uc(13,`scsc-breadcrumb`,9),Lf(),Ga(14,`div`,10)(15,`scsc-case-search`,11),lc(`search`,function(m){return s.runSearch(m)}),Lf(),Ga(16,`scsc-card`,12)(17,`ul`,13)(18,`li`,14),uc(19,`scsc-icon`,15),G_(20,` A case number has 10 characters, for example 24CV012345. `),Lf(),Ga(21,`li`,14),uc(22,`scsc-icon`,16),G_(23,` For a person, a last name alone is enough; add a first name to narrow it. `),Lf(),Ga(24,`li`,14),uc(25,`scsc-icon`,17),G_(26,` Juvenile, adoption and sealed cases are confidential and never appear here. `),Lf()()()(),uc(27,`scsc-legal-notice`,18),Ga(28,`section`,19)(29,`div`,20)(30,`h2`,21),G_(31,`Results`),Lf(),Ga(32,`p`,22),G_(33),Lf()(),Ga(34,`scsc-toolbar`,23)(35,`label`,24)(36,`span`,25),G_(37,`Case type`),Lf(),Ga(38,`select`,26),lc(`change`,function(m){return s.typeFilter.set(m.target.value)}),o_(39,ne,2,3,`option`,27,ae),Lf()(),Ga(41,`label`,24)(42,`span`,25),G_(43,`Status`),Lf(),Ga(44,`select`,26),lc(`change`,function(m){return s.statusFilter.set(m.target.value)}),o_(45,ce,2,3,`option`,27,ae),Lf()(),JT(47,oe,3,0,`scsc-button`,28),Lf(),JT(48,he,3,4)(49,Ce,6,1,`scsc-card`),Lf()(),uc(50,`scsc-footer`,29),Lf()),e&2&&(Jb(10),Pv(`items`,s.nav),Jb(3),Pv(`items`,s.trail),Jb(20),nD(s.summary()),Jb(),Pv(`bordered`,!0),Jb(5),i_(s.typeOptions),Jb(6),i_(s.statusOptions),Jb(2),t_(s.typeFilter()||s.statusFilter()?47:-1),Jb(),t_(s.filtered().length?48:49),Jb(2),Pv(`columns`,s.footerLinks)(`contact`,s.footerContact)(`legalLinks`,s.legalLinks))},dependencies:[nu,QN,sn,mN,$P,da,Xa,XN,ye$1,yr,FN,TN,Ua,MN,ON,On,$a,Za,IN,zN],encapsulation:2})};function _e(t,a){if(a.caseType&&a.caseType!==t.typeKey)return!1;let e=t.title.toLowerCase();switch(a.mode){case`caseNumber`:return t.caseNumber.includes((a.caseNumber??``).trim().toUpperCase());case`party`:return[a.lastName,a.firstName].map(s=>(s??``).trim().toLowerCase()).every(s=>e.includes(s));case`business`:return e.includes((a.business??``).trim().toLowerCase());case`filingDate`:return(!a.dateFrom||t.filed>=a.dateFrom)&&(!a.dateTo||t.filed<=a.dateTo)}}function ke(t){switch(t.mode){case`caseNumber`:return`case number \u201C${t.caseNumber||`…`}\u201D`;case`party`:return`party name \u201C${[t.firstName,t.lastName].filter(Boolean).join(` `)||`…`}\u201D`;case`business`:return`business \u201C${t.business||`…`}\u201D`;case`filingDate`:return`filings from ${t.dateFrom||`any date`} to ${t.dateTo||`today`}`}}var Ke=[{id:`case-search-results`,title:`Case search results`,description:`Opens on a party search for “Alvarez”. Sort by case number, title or filing date; narrow by case type and status; page through results. Filter to Family + Active to see the empty state.`,component:w,source:{"case-search-results":{ts:`import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBreadcrumb,
  type ScscBreadcrumbItem,
  ScscButton,
  ScscCard,
  ScscCaseSearch,
  type ScscCaseSearchCriteria,
  type ScscCaseStatus,
  ScscCellDef,
  type ScscColumn,
  ScscEmptyState,
  ScscFooter,
  type ScscFooterContact,
  ScscIcon,
  type ScscLegalLink,
  ScscLegalNotice,
  ScscMasthead,
  ScscPageHeader,
  ScscPagination,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscSelect,
  type ScscSort,
  ScscStatusBadge,
  ScscTable,
  ScscToolbar,
  ScscUtilityBar,
} from '@scscourt/design';

type CaseTypeKey = 'civil' | 'family' | 'probate' | 'small-claims';

interface CaseRow {
  caseNumber: string;
  title: string;
  type: string;
  typeKey: CaseTypeKey;
  /** ISO date, so it sorts as text. */
  filed: string;
  status: ScscCaseStatus;
}

const CASES: CaseRow[] = [
  {
    caseNumber: '24CV012345',
    title: 'Alvarez v. Northgate Property Management',
    type: 'Civil \u2014 Unlimited',
    typeKey: 'civil',
    filed: '2024-03-12',
    status: 'active',
  },
  {
    caseNumber: '25CV004411',
    title: 'Alvarez v. Bay Valley Auto Group',
    type: 'Civil \u2014 Limited',
    typeKey: 'civil',
    filed: '2025-02-03',
    status: 'pending',
  },
  {
    caseNumber: '23FL098812',
    title: 'In re Marriage of Alvarez and Chen',
    type: 'Family \u2014 Dissolution',
    typeKey: 'family',
    filed: '2023-11-20',
    status: 'closed',
  },
  {
    caseNumber: '24SC001207',
    title: 'Alvarez v. Kim',
    type: 'Small Claims',
    typeKey: 'small-claims',
    filed: '2024-06-18',
    status: 'dismissed',
  },
  {
    caseNumber: '25PR000318',
    title: 'Estate of Ramona Alvarez',
    type: 'Probate \u2014 Decedent\u2019s estate',
    typeKey: 'probate',
    filed: '2025-01-09',
    status: 'active',
  },
  {
    caseNumber: '24CV019930',
    title: 'Pacific Crest Lending v. Alvarez',
    type: 'Civil \u2014 Limited',
    typeKey: 'civil',
    filed: '2024-09-30',
    status: 'continued',
  },
  {
    caseNumber: '22CV003377',
    title: 'Alvarez v. Riverside Terrace HOA',
    type: 'Civil \u2014 Unlimited',
    typeKey: 'civil',
    filed: '2022-05-16',
    status: 'closed',
  },
  {
    caseNumber: '25SC000842',
    title: 'Delgado v. Alvarez',
    type: 'Small Claims',
    typeKey: 'small-claims',
    filed: '2025-04-22',
    status: 'filed',
  },
  {
    caseNumber: '24CV015560',
    title: 'Hernandez-Alvarez v. Summit Freight Lines',
    type: 'Civil \u2014 Unlimited',
    typeKey: 'civil',
    filed: '2024-07-01',
    status: 'active',
  },
  {
    caseNumber: '24CV013002',
    title: 'Nguyen v. Almaden Ridge Apartments',
    type: 'Civil \u2014 Unlimited',
    typeKey: 'civil',
    filed: '2024-04-02',
    status: 'active',
  },
  {
    caseNumber: '25CV002210',
    title: 'Brightline Solar Inc. v. Castro',
    type: 'Civil \u2014 Limited',
    typeKey: 'civil',
    filed: '2025-01-27',
    status: 'pending',
  },
  {
    caseNumber: '24PR000977',
    title: 'Conservatorship of Walter Price',
    type: 'Probate \u2014 Conservatorship',
    typeKey: 'probate',
    filed: '2024-08-14',
    status: 'active',
  },
];

const TYPE_OPTIONS: { value: '' | CaseTypeKey; label: string }[] = [
  { value: '', label: 'All case types' },
  { value: 'civil', label: 'Civil' },
  { value: 'family', label: 'Family' },
  { value: 'probate', label: 'Probate' },
  { value: 'small-claims', label: 'Small claims' },
];

const STATUS_OPTIONS: { value: '' | ScscCaseStatus; label: string }[] = [
  { value: '', label: 'Any status' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'continued', label: 'Continued' },
  { value: 'filed', label: 'Filed' },
  { value: 'closed', label: 'Closed' },
  { value: 'dismissed', label: 'Dismissed' },
];

const PAGE_SIZE = 5;

@Component({
  selector: 'app-case-search-results-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscBreadcrumb,
    ScscButton,
    ScscCard,
    ScscCaseSearch,
    ScscCellDef,
    ScscEmptyState,
    ScscFooter,
    ScscIcon,
    ScscLegalNotice,
    ScscMasthead,
    ScscPageHeader,
    ScscPagination,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSelect,
    ScscStatusBadge,
    ScscTable,
    ScscToolbar,
    ScscUtilityBar,
  ],
  template: \`
    <scsc-portal-shell>
      <scsc-utility-bar slot="utility">
        <span slot="start" class="hidden lg:inline">
          An official website of the Superior Court of California, County of Santa Clara
        </span>
        <a routerLink="es" lang="es" hreflang="es" class="hover:underline">Espa\xF1ol</a>
        <a routerLink="sign-in" class="inline-flex items-center gap-1 hover:underline">
          <scsc-icon name="log-in" size="xs" />
          Sign in
        </a>
      </scsc-utility-bar>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California \xB7 County of Santa Clara"
        logoSrc="scsc-seal.png"
        contained
      />
      <scsc-primary-nav slot="nav" [items]="nav" />

      <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-6 scsc-pad-page">
        <scsc-page-header
          title="Case search"
          display
          description="Find public case records by case number, party name, business or filing date."
        >
          <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
        </scsc-page-header>

        <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <scsc-case-search (search)="runSearch($event)" />
          <scsc-card title="Search tips">
            <ul class="flex flex-col gap-2 text-sm text-base-content/80">
              <li class="flex gap-2">
                <scsc-icon name="hash" size="sm" class="mt-0.5 shrink-0 text-primary" />
                A case number has 10 characters, for example 24CV012345.
              </li>
              <li class="flex gap-2">
                <scsc-icon name="user" size="sm" class="mt-0.5 shrink-0 text-primary" />
                For a person, a last name alone is enough; add a first name to narrow it.
              </li>
              <li class="flex gap-2">
                <scsc-icon name="eye-off" size="sm" class="mt-0.5 shrink-0 text-primary" />
                Juvenile, adoption and sealed cases are confidential and never appear here.
              </li>
            </ul>
          </scsc-card>
        </div>

        <scsc-legal-notice preset="electronic-record" variant="banner" learnMoreLink="records" />

        <section aria-labelledby="results-heading" class="flex flex-col gap-3">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="results-heading" class="text-lg font-semibold text-base-content">Results</h2>
            <p class="text-sm text-base-content/70" role="status">{{ summary() }}</p>
          </div>

          <scsc-toolbar [bordered]="true">
            <label class="flex items-center gap-2 text-sm">
              <span class="font-medium">Case type</span>
              <select
                scsc-select
                size="sm"
                class="w-auto"
                (change)="typeFilter.set($any($event.target).value)"
              >
                @for (o of typeOptions; track o.value) {
                  <option [value]="o.value" [selected]="o.value === typeFilter()">
                    {{ o.label }}
                  </option>
                }
              </select>
            </label>
            <label class="flex items-center gap-2 text-sm">
              <span class="font-medium">Status</span>
              <select
                scsc-select
                size="sm"
                class="w-auto"
                (change)="statusFilter.set($any($event.target).value)"
              >
                @for (o of statusOptions; track o.value) {
                  <option [value]="o.value" [selected]="o.value === statusFilter()">
                    {{ o.label }}
                  </option>
                }
              </select>
            </label>
            @if (typeFilter() || statusFilter()) {
              <scsc-button variant="ghost" size="sm" (click)="clearFilters()">
                <scsc-icon name="x" size="xs" />
                Clear filters
              </scsc-button>
            }
          </scsc-toolbar>

          @if (filtered().length) {
            <scsc-table
              [columns]="columns"
              [rows]="pageRows()"
              [defaultSort]="initialSort"
              (sortChange)="sort.set($event[0] ?? null)"
              label="Case search results"
            >
              <ng-template scscCell let-row let-col="col">
                @switch (col.key) {
                  @case ('caseNumber') {
                    <a
                      [routerLink]="['cases', row.caseNumber]"
                      class="font-medium tnum text-primary underline-offset-2 hover:underline"
                      >{{ row.caseNumber }}</a
                    >
                  }
                  @case ('status') {
                    <scsc-status-badge [status]="row.status" />
                  }
                  @case ('filed') {
                    <span class="tnum whitespace-nowrap">{{ formatDate(row.filed) }}</span>
                  }
                  @case ('type') {
                    <span class="whitespace-nowrap text-base-content/80">{{ row.type }}</span>
                  }
                  @default {
                    {{ row[col.key] }}
                  }
                }
              </ng-template>
            </scsc-table>

            @if (totalPages() > 1) {
              <div class="flex flex-wrap items-center justify-between gap-3">
                <p class="text-sm text-base-content/70">Page {{ page() }} of {{ totalPages() }}</p>
                <scsc-pagination [(page)]="page" [totalPages]="totalPages()" />
              </div>
            }
          } @else {
            <scsc-card>
              <scsc-empty-state
                icon="search-x"
                title="No cases match"
                message="Check the spelling or search with fewer details. Confidential cases are never listed online."
              >
                <div class="flex flex-wrap justify-center gap-2">
                  @if (typeFilter() || statusFilter()) {
                    <scsc-button variant="primary" size="sm" (click)="clearFilters()">
                      Clear filters
                    </scsc-button>
                  }
                  <a scsc-button variant="neutral" outline size="sm" routerLink="help">
                    Ask the Clerk\u2019s Office
                  </a>
                </div>
              </scsc-empty-state>
            </scsc-card>
          }
        </section>
      </div>

      <scsc-footer
        slot="footer"
        variant="mega"
        logoSrc="scsc-seal.png"
        [columns]="footerLinks"
        [contact]="footerContact"
        [legalLinks]="legalLinks"
        recordDisclaimer
        backToTop
      />
    </scsc-portal-shell>
  \`,
})
export class CaseSearchResultsTemplate {
  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: '.', exact: true },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'e-Filing', icon: 'upload', link: 'efile' },
    { label: 'Fees', icon: 'credit-card', link: 'fees' },
    { label: 'Jury', icon: 'users', link: 'jury' },
    { label: 'Self-help', icon: 'life-buoy', link: 'self-help' },
  ];
  protected readonly legalLinks: ScscLegalLink[] = [
    { id: 'privacy', label: 'Privacy', link: 'privacy' },
    { id: 'terms', label: 'Terms of use', link: 'terms' },
    { id: 'accessibility', label: 'Accessibility', link: 'accessibility' },
    { id: 'language-access', label: 'Language access', link: 'language-access' },
  ];

  protected readonly footerContact: ScscFooterContact = {
    name: 'Downtown Superior Court',
    address: ['191 N. First Street', 'San Jos\xE9, CA 95113'],
    phone: '(408) 882-2100',
    hours: ['Clerk\u2019s Office: Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.'],
  };
  protected readonly footerLinks = [
    {
      heading: 'Online services',
      links: [
        { label: 'Case search', link: 'search' },
        { label: 'Calendar & rulings', link: 'calendar' },
        { label: 'e-Filing', link: 'efile' },
        { label: 'Pay fees', link: 'fees' },
      ],
    },
    {
      heading: 'Get help',
      links: [
        { label: 'Self-help center', link: 'self-help' },
        { label: 'Language access', link: 'language' },
        { label: 'Disability accommodations', link: 'accommodations' },
        { label: 'Contact the court', link: 'help' },
      ],
    },
    {
      heading: 'About the court',
      links: [
        { label: 'Courthouse locations', link: 'locations' },
        { label: 'Jury service', link: 'jury' },
        { label: 'News', link: 'news' },
      ],
    },
  ];
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Home', link: 'home' },
    { label: 'Case search' },
  ];

  protected readonly columns: ScscColumn<CaseRow>[] = [
    { key: 'caseNumber', header: 'Case number', sortable: true, width: '9rem' },
    { key: 'title', header: 'Case title', sortable: true },
    { key: 'type', header: 'Case type' },
    { key: 'filed', header: 'Filed', sortable: true, width: '8rem' },
    { key: 'status', header: 'Status', width: '7rem' },
  ];
  protected readonly typeOptions = TYPE_OPTIONS;
  protected readonly statusOptions = STATUS_OPTIONS;

  /** The submitted search; the page opens on a party-name search for "Alvarez". */
  protected readonly criteria = signal<ScscCaseSearchCriteria>({
    mode: 'party',
    lastName: 'Alvarez',
  });
  protected readonly typeFilter = signal<'' | CaseTypeKey>('');
  protected readonly statusFilter = signal<'' | ScscCaseStatus>('');
  protected readonly initialSort: ScscSort[] = [{ key: 'filed', dir: 'desc' }];
  protected readonly sort = signal<ScscSort | null>(this.initialSort[0]);

  protected readonly matches = computed(() => CASES.filter((c) => matches(c, this.criteria())));

  protected readonly filtered = computed(() => {
    const type = this.typeFilter();
    const status = this.statusFilter();
    const rows = this.matches().filter(
      (c) => (!type || c.typeKey === type) && (!status || c.status === status),
    );
    const s = this.sort();
    if (!s) return rows;
    const key = s.key as keyof CaseRow;
    const dir = s.dir === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => a[key].localeCompare(b[key]) * dir);
  });

  /** Back to page 1 whenever the result set changes. */
  protected readonly page = linkedSignal({ source: this.filtered, computation: () => 1 });
  protected readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filtered().length / PAGE_SIZE)),
  );
  protected readonly pageRows = computed(() =>
    this.filtered().slice((this.page() - 1) * PAGE_SIZE, this.page() * PAGE_SIZE),
  );

  protected readonly summary = computed(() => {
    const n = this.filtered().length;
    const term = describe(this.criteria());
    if (!n) return \`No cases match \${term}.\`;
    const from = (this.page() - 1) * PAGE_SIZE + 1;
    const to = Math.min(n, this.page() * PAGE_SIZE);
    return \`\${n} \${n === 1 ? 'case matches' : 'cases match'} \${term}. Showing \${from}\u2013\${to}.\`;
  });

  protected runSearch(criteria: ScscCaseSearchCriteria): void {
    this.criteria.set(criteria);
  }

  protected clearFilters(): void {
    this.typeFilter.set('');
    this.statusFilter.set('');
  }

  protected formatDate(iso: string): string {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}

function matches(c: CaseRow, q: ScscCaseSearchCriteria): boolean {
  if (q.caseType && q.caseType !== c.typeKey) return false;
  const title = c.title.toLowerCase();
  switch (q.mode) {
    case 'caseNumber':
      return c.caseNumber.includes((q.caseNumber ?? '').trim().toUpperCase());
    case 'party':
      return [q.lastName, q.firstName]
        .map((s) => (s ?? '').trim().toLowerCase())
        .every((s) => title.includes(s));
    case 'business':
      return title.includes((q.business ?? '').trim().toLowerCase());
    case 'filingDate':
      return (!q.dateFrom || c.filed >= q.dateFrom) && (!q.dateTo || c.filed <= q.dateTo);
  }
}

function describe(q: ScscCaseSearchCriteria): string {
  switch (q.mode) {
    case 'caseNumber':
      return \`case number \u201C\${q.caseNumber || '\u2026'}\u201D\`;
    case 'party':
      return \`party name \u201C\${[q.firstName, q.lastName].filter(Boolean).join(' ') || '\u2026'}\u201D\`;
    case 'business':
      return \`business \u201C\${q.business || '\u2026'}\u201D\`;
    case 'filingDate':
      return \`filings from \${q.dateFrom || 'any date'} to \${q.dateTo || 'today'}\`;
  }
}
`,html:`<scsc-portal-shell>
  <scsc-utility-bar slot="utility">
    <span slot="start" class="hidden lg:inline">
      An official website of the Superior Court of California, County of Santa Clara
    </span>
    <a routerLink="es" lang="es" hreflang="es" class="hover:underline">Espa\xF1ol</a>
    <a routerLink="sign-in" class="inline-flex items-center gap-1 hover:underline">
      <scsc-icon name="log-in" size="xs" />
      Sign in
    </a>
  </scsc-utility-bar>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California \xB7 County of Santa Clara"
    logoSrc="scsc-seal.png"
    contained
  />
  <scsc-primary-nav slot="nav" [items]="nav" />

  <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-6 scsc-pad-page">
    <scsc-page-header
      title="Case search"
      display
      description="Find public case records by case number, party name, business or filing date."
    >
      <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
    </scsc-page-header>

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <scsc-case-search (search)="runSearch($event)" />
      <scsc-card title="Search tips">
        <ul class="flex flex-col gap-2 text-sm text-base-content/80">
          <li class="flex gap-2">
            <scsc-icon name="hash" size="sm" class="mt-0.5 shrink-0 text-primary" />
            A case number has 10 characters, for example 24CV012345.
          </li>
          <li class="flex gap-2">
            <scsc-icon name="user" size="sm" class="mt-0.5 shrink-0 text-primary" />
            For a person, a last name alone is enough; add a first name to narrow it.
          </li>
          <li class="flex gap-2">
            <scsc-icon name="eye-off" size="sm" class="mt-0.5 shrink-0 text-primary" />
            Juvenile, adoption and sealed cases are confidential and never appear here.
          </li>
        </ul>
      </scsc-card>
    </div>

    <scsc-legal-notice preset="electronic-record" variant="banner" learnMoreLink="records" />

    <section aria-labelledby="results-heading" class="flex flex-col gap-3">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="results-heading" class="text-lg font-semibold text-base-content">Results</h2>
        <p class="text-sm text-base-content/70" role="status">{{ summary() }}</p>
      </div>

      <scsc-toolbar [bordered]="true">
        <label class="flex items-center gap-2 text-sm">
          <span class="font-medium">Case type</span>
          <select
            scsc-select
            size="sm"
            class="w-auto"
            (change)="typeFilter.set($any($event.target).value)"
          >
            @for (o of typeOptions; track o.value) {
              <option [value]="o.value" [selected]="o.value === typeFilter()">
                {{ o.label }}
              </option>
            }
          </select>
        </label>
        <label class="flex items-center gap-2 text-sm">
          <span class="font-medium">Status</span>
          <select
            scsc-select
            size="sm"
            class="w-auto"
            (change)="statusFilter.set($any($event.target).value)"
          >
            @for (o of statusOptions; track o.value) {
              <option [value]="o.value" [selected]="o.value === statusFilter()">
                {{ o.label }}
              </option>
            }
          </select>
        </label>
        @if (typeFilter() || statusFilter()) {
          <scsc-button variant="ghost" size="sm" (click)="clearFilters()">
            <scsc-icon name="x" size="xs" />
            Clear filters
          </scsc-button>
        }
      </scsc-toolbar>

      @if (filtered().length) {
        <scsc-table
          [columns]="columns"
          [rows]="pageRows()"
          [defaultSort]="initialSort"
          (sortChange)="sort.set($event[0] ?? null)"
          label="Case search results"
        >
          <ng-template scscCell let-row let-col="col">
            @switch (col.key) {
              @case ('caseNumber') {
                <a
                  [routerLink]="['cases', row.caseNumber]"
                  class="font-medium tnum text-primary underline-offset-2 hover:underline"
                  >{{ row.caseNumber }}</a
                >
              }
              @case ('status') {
                <scsc-status-badge [status]="row.status" />
              }
              @case ('filed') {
                <span class="tnum whitespace-nowrap">{{ formatDate(row.filed) }}</span>
              }
              @case ('type') {
                <span class="whitespace-nowrap text-base-content/80">{{ row.type }}</span>
              }
              @default {
                {{ row[col.key] }}
              }
            }
          </ng-template>
        </scsc-table>

        @if (totalPages() > 1) {
          <div class="flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm text-base-content/70">Page {{ page() }} of {{ totalPages() }}</p>
            <scsc-pagination [(page)]="page" [totalPages]="totalPages()" />
          </div>
        }
      } @else {
        <scsc-card>
          <scsc-empty-state
            icon="search-x"
            title="No cases match"
            message="Check the spelling or search with fewer details. Confidential cases are never listed online."
          >
            <div class="flex flex-wrap justify-center gap-2">
              @if (typeFilter() || statusFilter()) {
                <scsc-button variant="primary" size="sm" (click)="clearFilters()">
                  Clear filters
                </scsc-button>
              }
              <a scsc-button variant="neutral" outline size="sm" routerLink="help">
                Ask the Clerk\u2019s Office
              </a>
            </div>
          </scsc-empty-state>
        </scsc-card>
      }
    </section>
  </div>

  <scsc-footer
    slot="footer"
    variant="mega"
    logoSrc="scsc-seal.png"
    [columns]="footerLinks"
    [contact]="footerContact"
    [legalLinks]="legalLinks"
    recordDisclaimer
    backToTop
  />
</scsc-portal-shell>
`}}[`case-search-results`],layout:`page`,height:`56rem`}];export{Ke as DEMOS};