import{An as XN,Es as sD,H as FN,Hs as y_,Ki as ye,Lt as ON,M as DN,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Ps as ut,Tt as MN,Un as Za,Vr as mN,Xa as Pv,Xi as zN,Yo as iD,Zo as i_,_s as o_,bo as Y_,ds as nD,gs as oM,in as Ta,ks as t_,ms as nu,ni as qP,nn as TN,or as eP,ra as Af,t as $E,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var j=n=>[`locations`,n];var W=(n,s)=>s.name;var Q=(n,s)=>s.question;function U(n,s){if(n&1&&(Ga(0,`scsc-accordion-item`,33),G_(1),Lf()),n&2){let a=s.$implicit,i=s.$index;Pv(`title`,a.question)(`open`,i===0),Jb(),$f(` `,a.answer,` `)}}function G(n,s){if(n&1&&(Ga(0,`div`,13),o_(1,U,2,3,`scsc-accordion-item`,33,Q),Lf()),n&2){let a=y_();Jb(),i_(a.faqs())}}function Y(n,s){n&1&&(Ga(0,`scsc-card`),uc(1,`scsc-empty-state`,34),Lf())}function K(n,s){if(n&1&&(Ga(0,`li`)(1,`scsc-card`,35),uc(2,`scsc-contact-block`,36),Ga(3,`p`,37),G_(4),Lf(),Ga(5,`a`,38),G_(6,` Directions and parking`),Ga(7,`span`,39),G_(8),Lf(),uc(9,`scsc-icon`,40),Lf()()()),n&2){let a=s.$implicit;Jb(2),Pv(`name`,a.name)(`address`,a.address)(`phone`,a.phone),Jb(2),nD(a.services),Jb(),Pv(`routerLink`,oM(6,j,a.name)),Jb(3),$f(`: `,a.name)}}var g=[{question:`How do I get a copy of a court document?`,answer:`Search for the case, open Documents, and download the ones marked as available online. For certified copies, ask at the clerk’s office for the case type; there is a fee per page.`},{question:`I missed my court date. What should I do?`,answer:`Call the clerk’s office for your case type as soon as you can. Depending on the case, you may need to file a request to set aside a default or to reschedule.`},{question:`Can I appear by video?`,answer:`Many civil, family and traffic hearings allow remote appearances. Your hearing notice says whether video is allowed and how to join.`},{question:`How do I ask for an interpreter?`,answer:`Interpreters are free for court proceedings. Ask when you file, or call the Interpreter Services line at least five court days before your hearing.`},{question:`How do I request a disability accommodation?`,answer:`Submit form MC-410 to the ADA coordinator at least five court days before you need the accommodation. It is confidential and free.`}];var le=[{id:`help-contact`,title:`Help & contact`,description:`Searchable FAQ accordion, ways to reach the court, courthouse contact cards and a clerk’s office hours table.`,component:class n{query=q(``);nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Help`,icon:`life-buoy`,link:`.`,exact:!0}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`}]}];faqs=ut(()=>{let s=this.query().trim().toLowerCase();return s?g.filter(a=>`${a.question} ${a.answer}`.toLowerCase().includes(s)):g});faqCount=ut(()=>{let s=this.faqs().length;return this.query().trim()?`${s} of ${g.length} questions match`:`${s} questions`});courthouses=[{name:`Downtown Superior Court`,address:`191 N. First Street
San Jos\xE9, CA 95113`,phone:`(408) 882-2100`,services:`Civil, probate, small claims and the Self-Help Center`},{name:`Hall of Justice`,address:`190 W. Hedding Street
San Jos\xE9, CA 95110`,phone:`(408) 882-2690`,services:`Criminal, traffic and collaborative courts`},{name:`Family Justice Center`,address:`201 N. First Street
San Jos\xE9, CA 95113`,phone:`(408) 534-5600`,services:`Family law, custody, support and domestic violence`}];columns=[{key:`office`,header:`Office`},{key:`location`,header:`Location`},{key:`hours`,header:`Hours`},{key:`phone`,header:`Phone`,width:`9rem`}];hours=[{office:`Civil Clerk’s Office`,location:`Downtown Superior Court`,hours:`Mon–Fri, 8:30 a.m.–4:00 p.m.`,phone:`(408) 882-2100`},{office:`Probate Clerk’s Office`,location:`Downtown Superior Court`,hours:`Mon–Fri, 8:30 a.m.–4:00 p.m.`,phone:`(408) 882-2100`},{office:`Family Law Clerk’s Office`,location:`Family Justice Center`,hours:`Mon–Fri, 8:30 a.m.–4:00 p.m.`,phone:`(408) 534-5600`},{office:`Criminal and Traffic Clerk’s Office`,location:`Hall of Justice`,hours:`Mon–Fri, 8:30 a.m.–4:00 p.m.`,phone:`(408) 882-2690`},{office:`Self-Help Center`,location:`Downtown Superior Court`,hours:`Mon–Thu, 8:30 a.m.–3:00 p.m.`,phone:`(408) 882-2926`},{office:`Jury Services`,location:`Downtown Superior Court`,hours:`Mon–Fri, 8:30 a.m.–4:00 p.m.`,phone:`(408) 882-2700`}];static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-help-contact-template`]],decls:52,vars:9,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`es`,`lang`,`es`,`hreflang`,`es`,1,`hover:underline`],[`routerLink`,`sign-in`,1,`inline-flex`,`items-center`,`gap-1`,`hover:underline`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-10`,`scsc-pad-page`],[`title`,`Help and contact`,`display`,``,`description`,`Answers to common questions, courthouse locations and how to reach the clerk’s offices.`],[1,`grid`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]`],[`heading`,`Frequently asked questions`],[`placeholder`,`Search questions`,1,`mb-2`,`w-full`,`sm:max-w-md`,3,`valueChange`,`value`],[`role`,`status`,1,`mb-3`,`text-sm`,`text-base-content/70`],[1,`flex`,`flex-col`,`gap-2`],[`aria-label`,`Other ways to get help`,1,`flex`,`flex-col`,`gap-4`],[`title`,`Talk to the court`],[1,`flex`,`flex-col`,`gap-3`,`text-sm`],[1,`flex`,`gap-3`],[`name`,`phone`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`href`,`tel:4088822100`,1,`font-medium`,`tnum`,`text-primary`,`hover:underline`],[1,`block`,`text-base-content/70`],[`name`,`messages-square`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`routerLink`,`chat`,1,`font-medium`,`text-primary`,`hover:underline`],[`title`,`Accommodations and interpreters`],[1,`text-sm`,`text-base-content/80`],[1,`mt-3`,`flex`,`flex-wrap`,`gap-2`],[`scsc-button`,``,`size`,`sm`,`variant`,`neutral`,`outline`,``,`routerLink`,`interpreters`],[`scsc-button`,``,`size`,`sm`,`variant`,`neutral`,`outline`,``,`routerLink`,`accommodations`],[`heading`,`Courthouse locations`],[1,`grid`,`gap-4`,`md:grid-cols-3`],[`heading`,`Clerk’s office hours`,`description`,`Offices are closed on weekends and court holidays. Drop boxes are emptied at 4:00 p.m.`],[`label`,`Clerk’s office hours`,3,`columns`,`rows`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[`name`,`help-faq`,3,`title`,`open`],[`icon`,`circle-question-mark`,`title`,`No questions match`,`message`,`Try another word, or contact the clerk’s office below.`],[1,`h-full`],[3,`name`,`address`,`phone`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[1,`mt-3`,`inline-flex`,`items-center`,`gap-1`,`text-sm`,`font-medium`,`text-primary`,`hover:underline`,3,`routerLink`],[1,`sr-only`],[`name`,`arrow-right`,`size`,`xs`]],template:function(a,i){a&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),G_(5,`Español`),Lf(),Ga(6,`a`,3),uc(7,`scsc-icon`,4),G_(8,` Sign in `),Lf()(),uc(9,`scsc-masthead`,5)(10,`scsc-primary-nav`,6),Ga(11,`div`,7),uc(12,`scsc-page-header`,8),Ga(13,`div`,9)(14,`scsc-section`,10)(15,`scsc-search-input`,11),sD(`valueChange`,function(d){return Y_(i.query,d)||(i.query=d),d}),Lf(),Ga(16,`p`,12),G_(17),Lf(),JT(18,G,3,0,`div`,13)(19,Y,2,0,`scsc-card`),Lf(),Ga(20,`aside`,14)(21,`scsc-card`,15)(22,`ul`,16)(23,`li`,17),uc(24,`scsc-icon`,18),Ga(25,`span`)(26,`a`,19),G_(27,`(408) 882-2100`),Lf(),Ga(28,`span`,20),G_(29,`Monday–Friday, 8:30 a.m.–4:00 p.m.`),Lf()()(),Ga(30,`li`,17),uc(31,`scsc-icon`,21),Ga(32,`span`)(33,`a`,22),G_(34,`Live chat with the Self-Help Center`),Lf(),Ga(35,`span`,20),G_(36,`Monday–Thursday, 9:00 a.m.–3:00 p.m.`),Lf()()()()(),Ga(37,`scsc-card`,23)(38,`p`,24),G_(39,` Free interpreters for every court proceeding, and disability accommodations on request. `),Lf(),Ga(40,`div`,25)(41,`a`,26),G_(42,`Request an interpreter`),Lf(),Ga(43,`a`,27),G_(44,`Request an accommodation`),Lf()()()()(),Ga(45,`scsc-section`,28)(46,`ul`,29),o_(47,K,10,8,`li`,null,W),Lf()(),Ga(49,`scsc-section`,30),uc(50,`scsc-table`,31),Lf()(),uc(51,`scsc-footer`,32),Lf()),a&2&&(Jb(10),Pv(`items`,i.nav),Jb(5),iD(`value`,i.query),Jb(2),nD(i.faqCount()),Jb(),t_(i.faqs().length?18:19),Jb(29),i_(i.courthouses),Jb(3),Pv(`columns`,i.columns)(`rows`,i.hours),Jb(),Pv(`columns`,i.footerLinks)(`contact`,i.footerContact)(`legalLinks`,i.legalLinks))},dependencies:[nu,eP,$E,mN,qP,Xa,XN,ye,FN,TN,MN,ON,Ta,DN,Za,zN],encapsulation:2})},source:{"help-contact":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscAccordionItem,
  ScscButtonLink,
  ScscCard,
  type ScscColumn,
  ScscContactBlock,
  ScscEmptyState,
  ScscFooter,
  type ScscFooterContact,
  ScscIcon,
  type ScscLegalLink,
  ScscMasthead,
  ScscPageHeader,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscSearchInput,
  ScscSection,
  ScscTable,
  ScscUtilityBar,
} from '@scscourt/design';

interface Faq {
  question: string;
  answer: string;
}

interface Courthouse {
  name: string;
  address: string;
  phone: string;
  services: string;
}

interface OfficeHours {
  office: string;
  location: string;
  hours: string;
  phone: string;
}

const FAQS: Faq[] = [
  {
    question: 'How do I get a copy of a court document?',
    answer:
      'Search for the case, open Documents, and download the ones marked as available online. For certified copies, ask at the clerk\u2019s office for the case type; there is a fee per page.',
  },
  {
    question: 'I missed my court date. What should I do?',
    answer:
      'Call the clerk\u2019s office for your case type as soon as you can. Depending on the case, you may need to file a request to set aside a default or to reschedule.',
  },
  {
    question: 'Can I appear by video?',
    answer:
      'Many civil, family and traffic hearings allow remote appearances. Your hearing notice says whether video is allowed and how to join.',
  },
  {
    question: 'How do I ask for an interpreter?',
    answer:
      'Interpreters are free for court proceedings. Ask when you file, or call the Interpreter Services line at least five court days before your hearing.',
  },
  {
    question: 'How do I request a disability accommodation?',
    answer:
      'Submit form MC-410 to the ADA coordinator at least five court days before you need the accommodation. It is confidential and free.',
  },
];

@Component({
  selector: 'app-help-contact-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscAccordionItem,
    ScscButtonLink,
    ScscCard,
    ScscContactBlock,
    ScscEmptyState,
    ScscFooter,
    ScscIcon,
    ScscMasthead,
    ScscPageHeader,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSearchInput,
    ScscSection,
    ScscTable,
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

      <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-10 scsc-pad-page">
        <scsc-page-header
          title="Help and contact"
          display
          description="Answers to common questions, courthouse locations and how to reach the clerk\u2019s offices."
        />

        <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <scsc-section heading="Frequently asked questions">
            <scsc-search-input
              [(value)]="query"
              placeholder="Search questions"
              class="mb-2 w-full sm:max-w-md"
            />
            <p class="mb-3 text-sm text-base-content/70" role="status">{{ faqCount() }}</p>
            @if (faqs().length) {
              <div class="flex flex-col gap-2">
                @for (f of faqs(); track f.question; let first = $first) {
                  <scsc-accordion-item [title]="f.question" name="help-faq" [open]="first">
                    {{ f.answer }}
                  </scsc-accordion-item>
                }
              </div>
            } @else {
              <scsc-card>
                <scsc-empty-state
                  icon="circle-question-mark"
                  title="No questions match"
                  message="Try another word, or contact the clerk\u2019s office below."
                />
              </scsc-card>
            }
          </scsc-section>

          <aside class="flex flex-col gap-4" aria-label="Other ways to get help">
            <scsc-card title="Talk to the court">
              <ul class="flex flex-col gap-3 text-sm">
                <li class="flex gap-3">
                  <scsc-icon name="phone" class="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <a href="tel:4088822100" class="font-medium tnum text-primary hover:underline"
                      >(408) 882-2100</a
                    >
                    <span class="block text-base-content/70"
                      >Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m.</span
                    >
                  </span>
                </li>
                <li class="flex gap-3">
                  <scsc-icon name="messages-square" class="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <a routerLink="chat" class="font-medium text-primary hover:underline"
                      >Live chat with the Self-Help Center</a
                    >
                    <span class="block text-base-content/70"
                      >Monday\u2013Thursday, 9:00 a.m.\u20133:00 p.m.</span
                    >
                  </span>
                </li>
              </ul>
            </scsc-card>
            <scsc-card title="Accommodations and interpreters">
              <p class="text-sm text-base-content/80">
                Free interpreters for every court proceeding, and disability accommodations on
                request.
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <a scsc-button size="sm" variant="neutral" outline routerLink="interpreters"
                  >Request an interpreter</a
                >
                <a scsc-button size="sm" variant="neutral" outline routerLink="accommodations"
                  >Request an accommodation</a
                >
              </div>
            </scsc-card>
          </aside>
        </div>

        <scsc-section heading="Courthouse locations">
          <ul class="grid gap-4 md:grid-cols-3">
            @for (c of courthouses; track c.name) {
              <li>
                <scsc-card class="h-full">
                  <scsc-contact-block [name]="c.name" [address]="c.address" [phone]="c.phone" />
                  <p class="mt-3 text-sm text-base-content/70">{{ c.services }}</p>
                  <a
                    [routerLink]="['locations', c.name]"
                    class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Directions and parking<span class="sr-only">: {{ c.name }}</span>
                    <scsc-icon name="arrow-right" size="xs" />
                  </a>
                </scsc-card>
              </li>
            }
          </ul>
        </scsc-section>

        <scsc-section
          heading="Clerk\u2019s office hours"
          description="Offices are closed on weekends and court holidays. Drop boxes are emptied at 4:00 p.m."
        >
          <scsc-table [columns]="columns" [rows]="hours" label="Clerk\u2019s office hours" />
        </scsc-section>
      </div>

      <scsc-footer
        slot="footer"
        variant="mega"
        logoSrc="scsc-seal.png"
        [columns]="footerLinks"
        [contact]="footerContact"
        [legalLinks]="legalLinks"
        backToTop
      />
    </scsc-portal-shell>
  \`,
})
export class HelpContactTemplate {
  protected readonly query = signal('');

  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: 'search' },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'e-Filing', icon: 'upload', link: 'efile' },
    { label: 'Fees', icon: 'credit-card', link: 'fees' },
    { label: 'Jury', icon: 'users', link: 'jury' },
    { label: 'Help', icon: 'life-buoy', link: '.', exact: true },
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

  protected readonly faqs = computed(() => {
    const q = this.query().trim().toLowerCase();
    return q ? FAQS.filter((f) => \`\${f.question} \${f.answer}\`.toLowerCase().includes(q)) : FAQS;
  });
  protected readonly faqCount = computed(() => {
    const n = this.faqs().length;
    return this.query().trim() ? \`\${n} of \${FAQS.length} questions match\` : \`\${n} questions\`;
  });

  protected readonly courthouses: Courthouse[] = [
    {
      name: 'Downtown Superior Court',
      address: '191 N. First Street\\nSan Jos\xE9, CA 95113',
      phone: '(408) 882-2100',
      services: 'Civil, probate, small claims and the Self-Help Center',
    },
    {
      name: 'Hall of Justice',
      address: '190 W. Hedding Street\\nSan Jos\xE9, CA 95110',
      phone: '(408) 882-2690',
      services: 'Criminal, traffic and collaborative courts',
    },
    {
      name: 'Family Justice Center',
      address: '201 N. First Street\\nSan Jos\xE9, CA 95113',
      phone: '(408) 534-5600',
      services: 'Family law, custody, support and domestic violence',
    },
  ];

  protected readonly columns: ScscColumn<OfficeHours>[] = [
    { key: 'office', header: 'Office' },
    { key: 'location', header: 'Location' },
    { key: 'hours', header: 'Hours' },
    { key: 'phone', header: 'Phone', width: '9rem' },
  ];
  protected readonly hours: OfficeHours[] = [
    {
      office: 'Civil Clerk\u2019s Office',
      location: 'Downtown Superior Court',
      hours: 'Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.',
      phone: '(408) 882-2100',
    },
    {
      office: 'Probate Clerk\u2019s Office',
      location: 'Downtown Superior Court',
      hours: 'Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.',
      phone: '(408) 882-2100',
    },
    {
      office: 'Family Law Clerk\u2019s Office',
      location: 'Family Justice Center',
      hours: 'Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.',
      phone: '(408) 534-5600',
    },
    {
      office: 'Criminal and Traffic Clerk\u2019s Office',
      location: 'Hall of Justice',
      hours: 'Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.',
      phone: '(408) 882-2690',
    },
    {
      office: 'Self-Help Center',
      location: 'Downtown Superior Court',
      hours: 'Mon\u2013Thu, 8:30 a.m.\u20133:00 p.m.',
      phone: '(408) 882-2926',
    },
    {
      office: 'Jury Services',
      location: 'Downtown Superior Court',
      hours: 'Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.',
      phone: '(408) 882-2700',
    },
  ];
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

  <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-10 scsc-pad-page">
    <scsc-page-header
      title="Help and contact"
      display
      description="Answers to common questions, courthouse locations and how to reach the clerk\u2019s offices."
    />

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
      <scsc-section heading="Frequently asked questions">
        <scsc-search-input
          [(value)]="query"
          placeholder="Search questions"
          class="mb-2 w-full sm:max-w-md"
        />
        <p class="mb-3 text-sm text-base-content/70" role="status">{{ faqCount() }}</p>
        @if (faqs().length) {
          <div class="flex flex-col gap-2">
            @for (f of faqs(); track f.question; let first = $first) {
              <scsc-accordion-item [title]="f.question" name="help-faq" [open]="first">
                {{ f.answer }}
              </scsc-accordion-item>
            }
          </div>
        } @else {
          <scsc-card>
            <scsc-empty-state
              icon="circle-question-mark"
              title="No questions match"
              message="Try another word, or contact the clerk\u2019s office below."
            />
          </scsc-card>
        }
      </scsc-section>

      <aside class="flex flex-col gap-4" aria-label="Other ways to get help">
        <scsc-card title="Talk to the court">
          <ul class="flex flex-col gap-3 text-sm">
            <li class="flex gap-3">
              <scsc-icon name="phone" class="mt-0.5 shrink-0 text-primary" />
              <span>
                <a href="tel:4088822100" class="font-medium tnum text-primary hover:underline"
                  >(408) 882-2100</a
                >
                <span class="block text-base-content/70"
                  >Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m.</span
                >
              </span>
            </li>
            <li class="flex gap-3">
              <scsc-icon name="messages-square" class="mt-0.5 shrink-0 text-primary" />
              <span>
                <a routerLink="chat" class="font-medium text-primary hover:underline"
                  >Live chat with the Self-Help Center</a
                >
                <span class="block text-base-content/70"
                  >Monday\u2013Thursday, 9:00 a.m.\u20133:00 p.m.</span
                >
              </span>
            </li>
          </ul>
        </scsc-card>
        <scsc-card title="Accommodations and interpreters">
          <p class="text-sm text-base-content/80">
            Free interpreters for every court proceeding, and disability accommodations on
            request.
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <a scsc-button size="sm" variant="neutral" outline routerLink="interpreters"
              >Request an interpreter</a
            >
            <a scsc-button size="sm" variant="neutral" outline routerLink="accommodations"
              >Request an accommodation</a
            >
          </div>
        </scsc-card>
      </aside>
    </div>

    <scsc-section heading="Courthouse locations">
      <ul class="grid gap-4 md:grid-cols-3">
        @for (c of courthouses; track c.name) {
          <li>
            <scsc-card class="h-full">
              <scsc-contact-block [name]="c.name" [address]="c.address" [phone]="c.phone" />
              <p class="mt-3 text-sm text-base-content/70">{{ c.services }}</p>
              <a
                [routerLink]="['locations', c.name]"
                class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Directions and parking<span class="sr-only">: {{ c.name }}</span>
                <scsc-icon name="arrow-right" size="xs" />
              </a>
            </scsc-card>
          </li>
        }
      </ul>
    </scsc-section>

    <scsc-section
      heading="Clerk\u2019s office hours"
      description="Offices are closed on weekends and court holidays. Drop boxes are emptied at 4:00 p.m."
    >
      <scsc-table [columns]="columns" [rows]="hours" label="Clerk\u2019s office hours" />
    </scsc-section>
  </div>

  <scsc-footer
    slot="footer"
    variant="mega"
    logoSrc="scsc-seal.png"
    [columns]="footerLinks"
    [contact]="footerContact"
    [legalLinks]="legalLinks"
    backToTop
  />
</scsc-portal-shell>
`}}[`help-contact`],layout:`page`,height:`56rem`}];export{le as DEMOS};