import{An as XN,H as FN,Hs as y_,Ki as ye,Lo as d_,Lt as ON,M as DN,Ma as JT,Ms as uc,Na as Jb,Tt as MN,Vr as mN,Xa as Pv,Xi as zN,Zo as i_,_n as VP,_s as o_,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,ms as nu,ni as qP,r as $P,ra as Af,t as $E,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var O=(r,n)=>n.link;var $=(r,n)=>n.title;var V=(r,n)=>n.name;function W(r,n){if(r&1){let a=d_();Ga(0,`scsc-banner`,45),lc(`dismissed`,function(){Eg(a);let y=y_();return Ig(y.showClosure.set(!1))}),Ga(1,`strong`),G_(2,`All courthouses are closed Wednesday, November 11,`),Lf(),G_(3,` for Veterans Day. e-Filing, case search and online payments stay open. `),Lf()}r&2&&Pv(`dismissable`,!0)}function R(r,n){if(r&1&&(Ga(0,`li`)(1,`a`,46)(2,`scsc-card`,47)(3,`span`,48),uc(4,`scsc-icon`,49),Lf(),Ga(5,`span`,50),G_(6),Lf(),Ga(7,`span`,51),G_(8),Lf()()()()),r&2){let a=n.$implicit;Jb(),Pv(`routerLink`,a.link),Jb(3),Pv(`name`,a.icon),Jb(2),$f(` `,a.title,` `),Jb(2),nD(a.description)}}function U(r,n){if(r&1&&(Ga(0,`li`,36)(1,`span`,52),G_(2),Lf(),Ga(3,`span`,53)(4,`span`,54),G_(5),Lf(),Ga(6,`a`,55),G_(7),Lf()()()),r&2){let a=n.$implicit;Jb(2),nD(a.date),Jb(3),nD(a.label),Jb(),Pv(`routerLink`,a.link),Jb(),nD(a.title)}}function G(r,n){if(r&1&&(Ga(0,`li`),uc(1,`scsc-contact-block`,56),Ga(2,`p`,57),G_(3),Lf()()),r&2){let a=n.$implicit;Jb(),Pv(`name`,a.name)(`address`,a.address)(`phone`,a.phone),Jb(2),nD(a.services)}}var B={caseNumber:`case number`,party:`party name`,business:`business name`,filingDate:`filing date`};var ie=[{id:`portal-home`,title:`Portal home`,description:`Portal shell with a dismissable closure banner, hero case search, five task tiles, news, hours and locations, and a four-column footer.`,component:class r{showClosure=q(!0);footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};searchStatus=q(``);nav=[{label:`Home`,icon:`house`,link:`.`,exact:!0},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];tasks=[{link:`fees`,icon:`credit-card`,title:`Pay a fee`,description:`Filing fees, fines and traffic citations by card.`},{link:`forms`,icon:`file-text`,title:`Find a form`,description:`Judicial Council and local forms, free to download.`},{link:`jury`,icon:`users`,title:`Jury service`,description:`Check in, see your status or ask to postpone.`},{link:`calendar`,icon:`calendar-days`,title:`Court calendar`,description:`Hearings by department and tentative rulings.`},{link:`self-help`,icon:`life-buoy`,title:`Self-help`,description:`Guides and workshops if you don’t have a lawyer.`}];notices=[{date:`Sep 28, 2026`,label:`Closure`,title:`Courthouses closed November 11 for Veterans Day`,link:`news/veterans-day`},{date:`Sep 21, 2026`,label:`e-Filing`,title:`Probate filers can now e-file petitions for letters of administration`,link:`news/probate-efiling`},{date:`Sep 14, 2026`,label:`Self-help`,title:`Free eviction defense workshops every Thursday at the Downtown Superior Court`,link:`news/eviction-workshops`}];courthouses=[{name:`Downtown Superior Court`,address:`191 N. First Street, San José, CA 95113`,phone:`(408) 882-2100`,services:`Civil, probate and small claims`},{name:`Hall of Justice`,address:`190 W. Hedding Street, San José, CA 95110`,phone:`(408) 882-2690`,services:`Criminal and traffic`},{name:`Family Justice Center`,address:`201 N. First Street, San José, CA 95113`,phone:`(408) 534-5600`,services:`Family law, custody and support`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`},{id:`scscourt`,label:`scscourt.org`,href:`https://www.scscourt.org`,external:!0}];footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`},{label:`Careers`,link:`careers`}]}];onSearch(n){let a=n.caseNumber||n.business||[n.firstName,n.lastName].filter(Boolean).join(` `)||[n.dateFrom,n.dateTo].filter(Boolean).join(` to `);this.searchStatus.set(a?`Searching by ${B[n.mode]}: ${a}\u2026`:`Enter a ${B[n.mode]} to search.`)}static ɵfac=function(a){return new(a||r)};static ɵcmp=Af({type:r,selectors:[[`app-portal-home-template`]],decls:71,vars:7,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`language`,1,`inline-flex`,`hover:underline`,`items-center`,`gap-1`],[`name`,`languages`,`size`,`xs`],[1,`max-sm:sr-only`],[`routerLink`,`es`,`lang`,`es`,`hreflang`,`es`,1,`hover:underline`],[`routerLink`,`sign-in`,1,`inline-flex`,`hover:underline`,`items-center`,`gap-1`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`scsc-button`,``,`size`,`sm`,`routerLink`,`fees`],[`name`,`credit-card`,`size`,`sm`],[`slot`,`nav`,3,`items`],[`tone`,`warning`,`icon`,`calendar-x`,3,`dismissable`],[`aria-labelledby`,`home-hero-heading`,1,`bg-primary`,`text-primary-content`],[1,`mx-auto`,`grid`,`w-full`,`max-w-[90rem]`,`items-center`,`gap-8`,`px-4`,`py-10`,`sm:px-6`,`lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]`,`lg:py-14`],[1,`text-eyebrow`,`font-semibold`,`uppercase`,`tracking-wide`,`text-primary-content/80`],[`id`,`home-hero-heading`,1,`mt-2`,`font-display`,`text-3xl`,`font-bold`,`text-balance`,`sm:text-4xl`],[1,`mt-3`,`max-w-xl`,`text-lg`,`text-primary-content/85`],[1,`mt-6`,`flex`,`flex-col`,`gap-2`,`text-sm`,`text-primary-content/85`],[1,`flex`,`items-center`,`gap-2`],[`name`,`clock`,`size`,`sm`],[`name`,`languages`,`size`,`sm`],[1,`text-base-content`],[1,`mb-2`,`font-semibold`,`text-primary-content`],[3,`search`],[`role`,`status`,1,`mt-2`,`min-h-5`,`text-sm`,`text-primary-content/85`],[`aria-hidden`,`true`,1,`scsc-gold-rule`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-10`,`scsc-pad-page`],[`heading`,`What do you need to do?`,`description`,`The services people use most. Each one works on a phone.`],[1,`grid`,`gap-4`,`sm:grid-cols-2`,`lg:grid-cols-5`],[1,`grid`,`gap-8`,`lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]`],[`heading`,`News and notices`],[`slot`,`actions`,`routerLink`,`news`,1,`inline-flex`,`items-center`,`gap-1`,`text-sm`,`font-medium`,`text-primary`,`hover:underline`],[`name`,`arrow-right`,`size`,`xs`],[3,`flush`],[1,`divide-y`,`divide-base-300`],[1,`flex`,`flex-col`,`gap-1`,`px-5`,`py-4`,`sm:flex-row`,`sm:items-baseline`,`sm:gap-4`],[`heading`,`Hours and locations`],[1,`flex`,`items-start`,`gap-3`,`rounded-field`,`bg-base-200`,`p-3`],[`name`,`clock`,1,`mt-0.5`,`text-primary`],[1,`text-sm`],[1,`block`,`font-semibold`],[1,`mt-4`,`flex`,`flex-col`,`gap-4`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`help`,1,`mt-5`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`recordDisclaimer`,``,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[`tone`,`warning`,`icon`,`calendar-x`,3,`dismissed`,`dismissable`],[1,`group`,`block`,`h-full`,`rounded-box`,3,`routerLink`],[1,`h-full`,`transition-colors`,`group-hover:border-secondary`],[1,`flex`,`h-11`,`w-11`,`items-center`,`justify-center`,`rounded-field`,`bg-primary/10`,`text-primary`],[3,`name`],[1,`mt-3`,`block`,`font-semibold`,`text-base-content`,`group-hover:text-primary`],[1,`mt-1`,`block`,`text-sm`,`text-base-content/70`],[1,`w-28`,`shrink-0`,`text-sm`,`tnum`,`text-base-content/70`],[1,`min-w-0`],[1,`text-eyebrow`,`block`,`font-semibold`,`uppercase`,`tracking-wide`,`text-secondary-ink`],[1,`font-medium`,`text-base-content`,`hover:text-primary`,`hover:underline`,3,`routerLink`],[3,`name`,`address`,`phone`],[1,`mt-1`,`pl-6`,`text-sm`,`text-base-content/70`]],template:function(a,l){a&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),uc(5,`scsc-icon`,3),Ga(6,`span`,4),G_(7,`Language`),Lf()(),Ga(8,`a`,5),G_(9,`Español`),Lf(),Ga(10,`a`,6),uc(11,`scsc-icon`,7),G_(12,` Sign in `),Lf()(),Ga(13,`scsc-masthead`,8)(14,`a`,9),uc(15,`scsc-icon`,10),Ga(16,`span`,4),G_(17,`Pay a fee`),Lf()()(),uc(18,`scsc-primary-nav`,11),JT(19,W,4,1,`scsc-banner`,12),Ga(20,`section`,13)(21,`div`,14)(22,`div`)(23,`p`,15),G_(24,` Superior Court of California, County of Santa Clara `),Lf(),Ga(25,`h1`,16),G_(26,` Your court, open online. `),Lf(),Ga(27,`p`,17),G_(28,` Look up a case, check a hearing, file documents, pay fees and respond to a jury summons — any time, from any device. `),Lf(),Ga(29,`ul`,18)(30,`li`,19),uc(31,`scsc-icon`,20),G_(32,` Online services are available 24 hours a day, 7 days a week. `),Lf(),Ga(33,`li`,19),uc(34,`scsc-icon`,21),G_(35,` Free interpreters for every court proceeding. `),Lf()()(),Ga(36,`div`,22)(37,`h2`,23),G_(38,`Find a case`),Lf(),Ga(39,`scsc-case-search`,24),lc(`search`,function(I){return l.onSearch(I)}),Lf(),Ga(40,`p`,25),G_(41),Lf()()(),uc(42,`div`,26),Lf(),Ga(43,`div`,27)(44,`scsc-section`,28)(45,`ul`,29),o_(46,R,9,4,`li`,null,O),Lf()(),Ga(48,`div`,30)(49,`scsc-section`,31)(50,`a`,32),G_(51,` All news `),uc(52,`scsc-icon`,33),Lf(),Ga(53,`scsc-card`,34)(54,`ul`,35),o_(55,U,8,4,`li`,36,$),Lf()()(),Ga(57,`scsc-section`,37)(58,`scsc-card`)(59,`div`,38),uc(60,`scsc-icon`,39),Ga(61,`p`,40)(62,`span`,41),G_(63,`Clerk’s offices`),Lf(),G_(64,` Monday–Friday, 8:30 a.m.–4:00 p.m. Closed on weekends and court holidays. `),Lf()(),Ga(65,`ul`,42),o_(66,G,4,4,`li`,null,V),Lf(),Ga(68,`a`,43),G_(69,`All locations and contacts`),Lf()()()()(),uc(70,`scsc-footer`,44),Lf()),a&2&&(Jb(18),Pv(`items`,l.nav),Jb(),t_(l.showClosure()?19:-1),Jb(22),$f(` `,l.searchStatus(),` `),Jb(5),i_(l.tasks),Jb(7),Pv(`flush`,!0),Jb(2),i_(l.notices),Jb(11),i_(l.courthouses),Jb(4),Pv(`columns`,l.footerLinks)(`contact`,l.footerContact)(`legalLinks`,l.legalLinks))},dependencies:[nu,VP,$E,mN,$P,qP,XN,ye,FN,MN,ON,DN,zN],encapsulation:2})},source:{"portal-home":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBanner,
  ScscButtonLink,
  ScscCard,
  ScscCaseSearch,
  type ScscCaseSearchCriteria,
  ScscContactBlock,
  ScscFooter,
  type ScscFooterContact,
  ScscIcon,
  type ScscLegalLink,
  ScscMasthead,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscSection,
  ScscUtilityBar,
} from '@scscourt/design';

interface Task {
  link: string;
  icon: string;
  title: string;
  description: string;
}

interface Notice {
  date: string;
  label: string;
  title: string;
  link: string;
}

interface Courthouse {
  name: string;
  address: string;
  phone: string;
  services: string;
}

const MODES: Record<ScscCaseSearchCriteria['mode'], string> = {
  caseNumber: 'case number',
  party: 'party name',
  business: 'business name',
  filingDate: 'filing date',
};

@Component({
  selector: 'app-portal-home-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscBanner,
    ScscButtonLink,
    ScscCard,
    ScscCaseSearch,
    ScscContactBlock,
    ScscFooter,
    ScscIcon,
    ScscMasthead,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSection,
    ScscUtilityBar,
  ],
  template: \`
    <scsc-portal-shell>
      <scsc-utility-bar slot="utility">
        <span slot="start" class="hidden lg:inline">
          An official website of the Superior Court of California, County of Santa Clara
        </span>
        <a routerLink="language" class="inline-flex hover:underline items-center gap-1">
          <scsc-icon name="languages" size="xs" />
          <span class="max-sm:sr-only">Language</span>
        </a>
        <a routerLink="es" lang="es" hreflang="es" class="hover:underline">Espa\xF1ol</a>
        <a routerLink="sign-in" class="inline-flex hover:underline items-center gap-1">
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
      >
        <a scsc-button size="sm" routerLink="fees">
          <scsc-icon name="credit-card" size="sm" />
          <span class="max-sm:sr-only">Pay a fee</span>
        </a>
      </scsc-masthead>

      <scsc-primary-nav slot="nav" [items]="nav" />

      @if (showClosure()) {
        <scsc-banner
          tone="warning"
          icon="calendar-x"
          [dismissable]="true"
          (dismissed)="showClosure.set(false)"
        >
          <strong>All courthouses are closed Wednesday, November 11,</strong> for Veterans Day.
          e-Filing, case search and online payments stay open.
        </scsc-banner>
      }

      <section class="bg-primary text-primary-content" aria-labelledby="home-hero-heading">
        <div
          class="mx-auto grid w-full max-w-[90rem] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:py-14"
        >
          <div>
            <p class="text-eyebrow font-semibold uppercase tracking-wide text-primary-content/80">
              Superior Court of California, County of Santa Clara
            </p>
            <h1
              id="home-hero-heading"
              class="mt-2 font-display text-3xl font-bold text-balance sm:text-4xl"
            >
              Your court, open online.
            </h1>
            <p class="mt-3 max-w-xl text-lg text-primary-content/85">
              Look up a case, check a hearing, file documents, pay fees and respond to a jury
              summons \u2014 any time, from any device.
            </p>
            <ul class="mt-6 flex flex-col gap-2 text-sm text-primary-content/85">
              <li class="flex items-center gap-2">
                <scsc-icon name="clock" size="sm" />
                Online services are available 24 hours a day, 7 days a week.
              </li>
              <li class="flex items-center gap-2">
                <scsc-icon name="languages" size="sm" />
                Free interpreters for every court proceeding.
              </li>
            </ul>
          </div>

          <div class="text-base-content">
            <h2 class="mb-2 font-semibold text-primary-content">Find a case</h2>
            <scsc-case-search (search)="onSearch($event)" />
            <p class="mt-2 min-h-5 text-sm text-primary-content/85" role="status">
              {{ searchStatus() }}
            </p>
          </div>
        </div>
        <div class="scsc-gold-rule" aria-hidden="true"></div>
      </section>

      <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-10 scsc-pad-page">
        <scsc-section
          heading="What do you need to do?"
          description="The services people use most. Each one works on a phone."
        >
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            @for (t of tasks; track t.link) {
              <li>
                <a [routerLink]="t.link" class="group block h-full rounded-box">
                  <scsc-card class="h-full transition-colors group-hover:border-secondary">
                    <span
                      class="flex h-11 w-11 items-center justify-center rounded-field bg-primary/10 text-primary"
                    >
                      <scsc-icon [name]="t.icon" />
                    </span>
                    <span
                      class="mt-3 block font-semibold text-base-content group-hover:text-primary"
                    >
                      {{ t.title }}
                    </span>
                    <span class="mt-1 block text-sm text-base-content/70">{{ t.description }}</span>
                  </scsc-card>
                </a>
              </li>
            }
          </ul>
        </scsc-section>

        <div class="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <scsc-section heading="News and notices">
            <a
              slot="actions"
              routerLink="news"
              class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              All news
              <scsc-icon name="arrow-right" size="xs" />
            </a>
            <scsc-card [flush]="true">
              <ul class="divide-y divide-base-300">
                @for (n of notices; track n.title) {
                  <li class="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4">
                    <span class="w-28 shrink-0 text-sm tnum text-base-content/70">{{
                      n.date
                    }}</span>
                    <span class="min-w-0">
                      <span
                        class="text-eyebrow block font-semibold uppercase tracking-wide text-secondary-ink"
                        >{{ n.label }}</span
                      >
                      <a
                        [routerLink]="n.link"
                        class="font-medium text-base-content hover:text-primary hover:underline"
                        >{{ n.title }}</a
                      >
                    </span>
                  </li>
                }
              </ul>
            </scsc-card>
          </scsc-section>

          <scsc-section heading="Hours and locations">
            <scsc-card>
              <div class="flex items-start gap-3 rounded-field bg-base-200 p-3">
                <scsc-icon name="clock" class="mt-0.5 text-primary" />
                <p class="text-sm">
                  <span class="block font-semibold">Clerk\u2019s offices</span>
                  Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m. Closed on weekends and court holidays.
                </p>
              </div>
              <ul class="mt-4 flex flex-col gap-4">
                @for (c of courthouses; track c.name) {
                  <li>
                    <scsc-contact-block [name]="c.name" [address]="c.address" [phone]="c.phone" />
                    <p class="mt-1 pl-6 text-sm text-base-content/70">{{ c.services }}</p>
                  </li>
                }
              </ul>
              <a scsc-button variant="neutral" outline size="sm" routerLink="help" class="mt-5"
                >All locations and contacts</a
              >
            </scsc-card>
          </scsc-section>
        </div>
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
export class PortalHomeTemplate {
  protected readonly showClosure = signal(true);
  protected readonly footerContact: ScscFooterContact = {
    name: 'Downtown Superior Court',
    address: ['191 N. First Street', 'San Jos\xE9, CA 95113'],
    phone: '(408) 882-2100',
    hours: ['Clerk\u2019s Office: Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.'],
  };
  protected readonly searchStatus = signal('');

  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: '.', exact: true },
    { label: 'Case search', icon: 'search', link: 'search' },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'e-Filing', icon: 'upload', link: 'efile' },
    { label: 'Fees', icon: 'credit-card', link: 'fees' },
    { label: 'Jury', icon: 'users', link: 'jury' },
    { label: 'Self-help', icon: 'life-buoy', link: 'self-help' },
  ];

  protected readonly tasks: Task[] = [
    {
      link: 'fees',
      icon: 'credit-card',
      title: 'Pay a fee',
      description: 'Filing fees, fines and traffic citations by card.',
    },
    {
      link: 'forms',
      icon: 'file-text',
      title: 'Find a form',
      description: 'Judicial Council and local forms, free to download.',
    },
    {
      link: 'jury',
      icon: 'users',
      title: 'Jury service',
      description: 'Check in, see your status or ask to postpone.',
    },
    {
      link: 'calendar',
      icon: 'calendar-days',
      title: 'Court calendar',
      description: 'Hearings by department and tentative rulings.',
    },
    {
      link: 'self-help',
      icon: 'life-buoy',
      title: 'Self-help',
      description: 'Guides and workshops if you don\u2019t have a lawyer.',
    },
  ];

  protected readonly notices: Notice[] = [
    {
      date: 'Sep 28, 2026',
      label: 'Closure',
      title: 'Courthouses closed November 11 for Veterans Day',
      link: 'news/veterans-day',
    },
    {
      date: 'Sep 21, 2026',
      label: 'e-Filing',
      title: 'Probate filers can now e-file petitions for letters of administration',
      link: 'news/probate-efiling',
    },
    {
      date: 'Sep 14, 2026',
      label: 'Self-help',
      title: 'Free eviction defense workshops every Thursday at the Downtown Superior Court',
      link: 'news/eviction-workshops',
    },
  ];

  protected readonly courthouses: Courthouse[] = [
    {
      name: 'Downtown Superior Court',
      address: '191 N. First Street, San Jos\xE9, CA 95113',
      phone: '(408) 882-2100',
      services: 'Civil, probate and small claims',
    },
    {
      name: 'Hall of Justice',
      address: '190 W. Hedding Street, San Jos\xE9, CA 95110',
      phone: '(408) 882-2690',
      services: 'Criminal and traffic',
    },
    {
      name: 'Family Justice Center',
      address: '201 N. First Street, San Jos\xE9, CA 95113',
      phone: '(408) 534-5600',
      services: 'Family law, custody and support',
    },
  ];

  protected readonly legalLinks: ScscLegalLink[] = [
    { id: 'privacy', label: 'Privacy', link: 'privacy' },
    { id: 'terms', label: 'Terms of use', link: 'terms' },
    { id: 'accessibility', label: 'Accessibility', link: 'accessibility' },
    { id: 'language-access', label: 'Language access', link: 'language-access' },
    { id: 'scscourt', label: 'scscourt.org', href: 'https://www.scscourt.org', external: true },
  ];

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
        { label: 'Careers', link: 'careers' },
      ],
    },
  ];

  protected onSearch(criteria: ScscCaseSearchCriteria): void {
    const term =
      criteria.caseNumber ||
      criteria.business ||
      [criteria.firstName, criteria.lastName].filter(Boolean).join(' ') ||
      [criteria.dateFrom, criteria.dateTo].filter(Boolean).join(' to ');
    this.searchStatus.set(
      term
        ? \`Searching by \${MODES[criteria.mode]}: \${term}\u2026\`
        : \`Enter a \${MODES[criteria.mode]} to search.\`,
    );
  }
}
`,html:`<scsc-portal-shell>
  <scsc-utility-bar slot="utility">
    <span slot="start" class="hidden lg:inline">
      An official website of the Superior Court of California, County of Santa Clara
    </span>
    <a routerLink="language" class="inline-flex hover:underline items-center gap-1">
      <scsc-icon name="languages" size="xs" />
      <span class="max-sm:sr-only">Language</span>
    </a>
    <a routerLink="es" lang="es" hreflang="es" class="hover:underline">Espa\xF1ol</a>
    <a routerLink="sign-in" class="inline-flex hover:underline items-center gap-1">
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
  >
    <a scsc-button size="sm" routerLink="fees">
      <scsc-icon name="credit-card" size="sm" />
      <span class="max-sm:sr-only">Pay a fee</span>
    </a>
  </scsc-masthead>

  <scsc-primary-nav slot="nav" [items]="nav" />

  @if (showClosure()) {
    <scsc-banner
      tone="warning"
      icon="calendar-x"
      [dismissable]="true"
      (dismissed)="showClosure.set(false)"
    >
      <strong>All courthouses are closed Wednesday, November 11,</strong> for Veterans Day.
      e-Filing, case search and online payments stay open.
    </scsc-banner>
  }

  <section class="bg-primary text-primary-content" aria-labelledby="home-hero-heading">
    <div
      class="mx-auto grid w-full max-w-[90rem] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:py-14"
    >
      <div>
        <p class="text-eyebrow font-semibold uppercase tracking-wide text-primary-content/80">
          Superior Court of California, County of Santa Clara
        </p>
        <h1
          id="home-hero-heading"
          class="mt-2 font-display text-3xl font-bold text-balance sm:text-4xl"
        >
          Your court, open online.
        </h1>
        <p class="mt-3 max-w-xl text-lg text-primary-content/85">
          Look up a case, check a hearing, file documents, pay fees and respond to a jury
          summons \u2014 any time, from any device.
        </p>
        <ul class="mt-6 flex flex-col gap-2 text-sm text-primary-content/85">
          <li class="flex items-center gap-2">
            <scsc-icon name="clock" size="sm" />
            Online services are available 24 hours a day, 7 days a week.
          </li>
          <li class="flex items-center gap-2">
            <scsc-icon name="languages" size="sm" />
            Free interpreters for every court proceeding.
          </li>
        </ul>
      </div>

      <div class="text-base-content">
        <h2 class="mb-2 font-semibold text-primary-content">Find a case</h2>
        <scsc-case-search (search)="onSearch($event)" />
        <p class="mt-2 min-h-5 text-sm text-primary-content/85" role="status">
          {{ searchStatus() }}
        </p>
      </div>
    </div>
    <div class="scsc-gold-rule" aria-hidden="true"></div>
  </section>

  <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-10 scsc-pad-page">
    <scsc-section
      heading="What do you need to do?"
      description="The services people use most. Each one works on a phone."
    >
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        @for (t of tasks; track t.link) {
          <li>
            <a [routerLink]="t.link" class="group block h-full rounded-box">
              <scsc-card class="h-full transition-colors group-hover:border-secondary">
                <span
                  class="flex h-11 w-11 items-center justify-center rounded-field bg-primary/10 text-primary"
                >
                  <scsc-icon [name]="t.icon" />
                </span>
                <span
                  class="mt-3 block font-semibold text-base-content group-hover:text-primary"
                >
                  {{ t.title }}
                </span>
                <span class="mt-1 block text-sm text-base-content/70">{{ t.description }}</span>
              </scsc-card>
            </a>
          </li>
        }
      </ul>
    </scsc-section>

    <div class="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <scsc-section heading="News and notices">
        <a
          slot="actions"
          routerLink="news"
          class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          All news
          <scsc-icon name="arrow-right" size="xs" />
        </a>
        <scsc-card [flush]="true">
          <ul class="divide-y divide-base-300">
            @for (n of notices; track n.title) {
              <li class="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4">
                <span class="w-28 shrink-0 text-sm tnum text-base-content/70">{{
                  n.date
                }}</span>
                <span class="min-w-0">
                  <span
                    class="text-eyebrow block font-semibold uppercase tracking-wide text-secondary-ink"
                    >{{ n.label }}</span
                  >
                  <a
                    [routerLink]="n.link"
                    class="font-medium text-base-content hover:text-primary hover:underline"
                    >{{ n.title }}</a
                  >
                </span>
              </li>
            }
          </ul>
        </scsc-card>
      </scsc-section>

      <scsc-section heading="Hours and locations">
        <scsc-card>
          <div class="flex items-start gap-3 rounded-field bg-base-200 p-3">
            <scsc-icon name="clock" class="mt-0.5 text-primary" />
            <p class="text-sm">
              <span class="block font-semibold">Clerk\u2019s offices</span>
              Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m. Closed on weekends and court holidays.
            </p>
          </div>
          <ul class="mt-4 flex flex-col gap-4">
            @for (c of courthouses; track c.name) {
              <li>
                <scsc-contact-block [name]="c.name" [address]="c.address" [phone]="c.phone" />
                <p class="mt-1 pl-6 text-sm text-base-content/70">{{ c.services }}</p>
              </li>
            }
          </ul>
          <a scsc-button variant="neutral" outline size="sm" routerLink="help" class="mt-5"
            >All locations and contacts</a
          >
        </scsc-card>
      </scsc-section>
    </div>
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
`}}[`portal-home`],layout:`page`,height:`60rem`}];export{ie as DEMOS};