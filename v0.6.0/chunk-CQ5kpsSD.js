import{An as XN,Es as sD,H as FN,Hs as y_,Ki as ye,Lo as d_,Lt as ON,M as DN,Ms as uc,Na as Jb,Nn as Xa,Ps as ut,Tt as MN,Vr as mN,Xa as Pv,Xi as zN,Yo as iD,Zi as za,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,ha as Eg,in as Ta,it as IN,jn as XP,ka as Ig,ms as nu,nn as TN,or as eP,pi as sn,ra as Af,ta as $f,va as G_,ws as r_,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var K=(r,t)=>t.value;var Q=(r,t)=>t.department;function X(r,t){if(r&1&&(Ga(0,`option`,13),G_(1),Lf()),r&2){let e=t.$implicit,a=y_();Pv(`value`,e.value)(`selected`,e.value===a.date()),Jb(),nD(e.label)}}function Z(r,t){if(r&1&&(Ga(0,`option`,13),G_(1),Lf()),r&2){let e=t.$implicit,a=y_();Pv(`value`,e)(`selected`,a.department()===e),Jb(),$f(`Dept. `,e)}}function ee(r,t){if(r&1&&(Ga(0,`scsc-section`,17),uc(1,`scsc-tentative-rulings`,24),Lf()),r&2){let e=t.$implicit;Pv(`heading`,`Dept. `+e.department+` — `+e.judge),Jb(),Pv(`rulings`,e.rulings)}}function te(r,t){if(r&1){let e=d_();Ga(0,`scsc-card`)(1,`scsc-empty-state`,25)(2,`scsc-button`,26),lc(`click`,function(){Eg(e);let u=y_();return Ig(u.reset())}),G_(3,` Show all rulings for this date `),Lf()()()}}var S={3:`Hon. Samuel Whitfield`,10:`Hon. Miriam Okafor`,22:`Hon. Theresa Montoya`};var T=[{value:`2026-10-13`,label:`Tuesday, October 13, 2026`},{value:`2026-10-14`,label:`Wednesday, October 14, 2026`}];var ae=[{iso:`2026-10-13`,caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Management`,department:`10`,hearingDate:`Oct 13, 2026, 9:00 AM`,posted:`Oct 12, 1:12 PM`,ruling:`Plaintiff\u2019s motion to compel further responses to Special Interrogatories, Set One, Nos. 4\u20139, is GRANTED. Defendant shall serve verified further responses, without objection, within 20 days of notice of this order.

The request for monetary sanctions is GRANTED in the reduced amount of $1,560.00, payable within 30 days.`},{iso:`2026-10-13`,caseNumber:`25CV002210`,caseTitle:`Brightline Solar Inc. v. Castro`,department:`10`,hearingDate:`Oct 13, 2026, 9:00 AM`,posted:`Oct 12, 1:12 PM`,ruling:`Defendant’s demurrer to the second cause of action is SUSTAINED with 20 days’ leave to amend. The demurrer to the first cause of action is OVERRULED. Defendant shall answer within 10 days after service of any amended complaint.`},{iso:`2026-10-13`,caseNumber:`23CV077120`,caseTitle:`Okonkwo v. Valley Transit Partners`,department:`3`,hearingDate:`Oct 13, 2026, 10:30 AM`,posted:`Oct 12, 12:48 PM`,ruling:`Defendant’s motion for summary judgment is DENIED. Triable issues of material fact remain as to notice of the dangerous condition (Separate Statement, Fact Nos. 12–15). The court rules on the evidentiary objections as set out in the attached order.`},{iso:`2026-10-14`,caseNumber:`24CV019930`,caseTitle:`Pacific Crest Lending v. Alvarez`,department:`22`,hearingDate:`Oct 14, 2026, 9:00 AM`,posted:`Oct 13, 1:25 PM`,ruling:`The unopposed motion to set aside default is GRANTED. Defendant shall file the proposed answer lodged with the motion within 5 days.`}];var ge=[{id:`tentative-rulings`,title:`Tentative rulings`,description:`Rulings for a hearing date grouped by department, filtered by department and case number or name, with how to request oral argument.`,component:class r{nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`.`,exact:!0},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`}]}];dates=T;departmentIds=Object.keys(S);date=q(T[0].value);department=q(``);query=q(``);matches=ut(()=>{let t=this.query().trim().toLowerCase();return ae.filter(e=>e.iso===this.date()&&(!this.department()||e.department===this.department())&&(!t||`${e.caseNumber} ${e.caseTitle}`.toLowerCase().includes(t)))});groups=ut(()=>Object.keys(S).map(t=>({department:t,judge:S[t],rulings:this.matches().filter(e=>e.department===t)})).filter(t=>t.rulings.length>0));countLabel=ut(()=>{let t=this.matches().length,e=T.find(a=>a.value===this.date())?.label??``;return`${t} ${t===1?`ruling`:`rulings`} for ${e}`});reset(){this.department.set(``),this.query.set(``)}static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-tentative-rulings-template`]],decls:43,vars:9,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`sign-in`,1,`inline-flex`,`items-center`,`gap-1`,`hover:underline`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-6`,`scsc-pad-page`],[`title`,`Civil tentative rulings`,`display`,``,`description`,`Tentative rulings are posted by 1:30 p.m. the court day before the hearing.`],[`status`,`warning`,`title`,`A tentative ruling becomes the order`],[3,`bordered`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[1,`font-medium`],[`scsc-select`,``,`size`,`sm`,1,`w-auto`,3,`change`],[3,`value`,`selected`],[`value`,``,3,`selected`],[`slot`,`end`,`placeholder`,`Case number or name`,1,`w-full`,`sm:w-64`,3,`valueChange`,`value`],[`role`,`status`,1,`text-sm`,`text-base-content/70`],[`description`,`Downtown Superior Court`,3,`heading`],[`heading`,`How to ask for oral argument`],[1,`flex`,`max-w-3xl`,`flex-col`,`gap-2`],[`title`,`Who do I contact, and by when?`,`name`,`contest`,`open`,``],[`title`,`Do I have to tell the other side?`,`name`,`contest`],[`title`,`What if nobody asks for argument?`,`name`,`contest`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`recordDisclaimer`,``,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[3,`rulings`],[`icon`,`gavel`,`title`,`No rulings match`,`message`,`There may be no tentative ruling for this case yet, or it was taken off calendar. Rulings are posted by 1:30 p.m. the court day before.`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`]],template:function(e,a){e&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),uc(5,`scsc-icon`,3),G_(6,` Sign in `),Lf()(),uc(7,`scsc-masthead`,4)(8,`scsc-primary-nav`,5),Ga(9,`div`,6),uc(10,`scsc-page-header`,7),Ga(11,`scsc-alert`,8),G_(12,` Unless a party asks for oral argument by 4:00 p.m. the court day before the hearing, the tentative ruling becomes the order of the court and the hearing does not go ahead. `),Lf(),Ga(13,`scsc-toolbar`,9)(14,`label`,10)(15,`span`,11),G_(16,`Hearing date`),Lf(),Ga(17,`select`,12),lc(`change`,function(l){return a.date.set(l.target.value)}),o_(18,X,2,3,`option`,13,K),Lf()(),Ga(20,`label`,10)(21,`span`,11),G_(22,`Department`),Lf(),Ga(23,`select`,12),lc(`change`,function(l){return a.department.set(l.target.value)}),Ga(24,`option`,14),G_(25,`All`),Lf(),o_(26,Z,2,3,`option`,13,r_),Lf()(),Ga(28,`scsc-search-input`,15),sD(`valueChange`,function(l){return Y_(a.query,l)||(a.query=l),l}),Lf()(),Ga(29,`p`,16),G_(30),Lf(),o_(31,ee,2,2,`scsc-section`,17,Q,!1,te,4,0,`scsc-card`),Ga(34,`scsc-section`,18)(35,`div`,19)(36,`scsc-accordion-item`,20),G_(37,` By 4:00 p.m. the court day before the hearing, call the department’s courtroom clerk and say you intend to appear. The number is on the department’s calendar page. `),Lf(),Ga(38,`scsc-accordion-item`,21),G_(39,` Yes. The same day, tell every other party or their attorney by telephone or in person that you asked for argument. `),Lf(),Ga(40,`scsc-accordion-item`,22),G_(41,` The tentative ruling becomes the order. The prevailing party prepares the formal order and gives notice of it to everyone else in the case. `),Lf()()()(),uc(42,`scsc-footer`,23),Lf()),e&2&&(Jb(8),Pv(`items`,a.nav),Jb(5),Pv(`bordered`,!0),Jb(5),i_(a.dates),Jb(6),Pv(`selected`,a.department()===``),Jb(2),i_(a.departmentIds),Jb(2),iD(`value`,a.query),Jb(2),nD(a.countLabel()),Jb(),i_(a.groups()),Jb(11),Pv(`columns`,a.footerLinks)(`contact`,a.footerContact)(`legalLinks`,a.legalLinks))},dependencies:[nu,eP,za,sn,mN,Xa,XN,ye,FN,TN,MN,ON,Ta,DN,On,XP,IN,zN],encapsulation:2})},source:{"tentative-rulings":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscAccordionItem,
  ScscAlert,
  ScscButton,
  ScscCard,
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
  ScscSelect,
  type ScscTentativeRuling,
  ScscTentativeRulings,
  ScscToolbar,
  ScscUtilityBar,
} from '@scscourt/design';

const DEPARTMENTS: Record<string, string> = {
  '3': 'Hon. Samuel Whitfield',
  '10': 'Hon. Miriam Okafor',
  '22': 'Hon. Theresa Montoya',
};

const DATES = [
  { value: '2026-10-13', label: 'Tuesday, October 13, 2026' },
  { value: '2026-10-14', label: 'Wednesday, October 14, 2026' },
];

/** \`hearingDate\` is display text; \`iso\` groups rulings by calendar date. */
const RULINGS: (ScscTentativeRuling & { iso: string })[] = [
  {
    iso: '2026-10-13',
    caseNumber: '24CV012345',
    caseTitle: 'Alvarez v. Northgate Property Management',
    department: '10',
    hearingDate: 'Oct 13, 2026, 9:00 AM',
    posted: 'Oct 12, 1:12 PM',
    ruling:
      'Plaintiff\u2019s motion to compel further responses to Special Interrogatories, Set One, Nos. 4\u20139, is GRANTED. Defendant shall serve verified further responses, without objection, within 20 days of notice of this order.\\n\\nThe request for monetary sanctions is GRANTED in the reduced amount of $1,560.00, payable within 30 days.',
  },
  {
    iso: '2026-10-13',
    caseNumber: '25CV002210',
    caseTitle: 'Brightline Solar Inc. v. Castro',
    department: '10',
    hearingDate: 'Oct 13, 2026, 9:00 AM',
    posted: 'Oct 12, 1:12 PM',
    ruling:
      'Defendant\u2019s demurrer to the second cause of action is SUSTAINED with 20 days\u2019 leave to amend. The demurrer to the first cause of action is OVERRULED. Defendant shall answer within 10 days after service of any amended complaint.',
  },
  {
    iso: '2026-10-13',
    caseNumber: '23CV077120',
    caseTitle: 'Okonkwo v. Valley Transit Partners',
    department: '3',
    hearingDate: 'Oct 13, 2026, 10:30 AM',
    posted: 'Oct 12, 12:48 PM',
    ruling:
      'Defendant\u2019s motion for summary judgment is DENIED. Triable issues of material fact remain as to notice of the dangerous condition (Separate Statement, Fact Nos. 12\u201315). The court rules on the evidentiary objections as set out in the attached order.',
  },
  {
    iso: '2026-10-14',
    caseNumber: '24CV019930',
    caseTitle: 'Pacific Crest Lending v. Alvarez',
    department: '22',
    hearingDate: 'Oct 14, 2026, 9:00 AM',
    posted: 'Oct 13, 1:25 PM',
    ruling:
      'The unopposed motion to set aside default is GRANTED. Defendant shall file the proposed answer lodged with the motion within 5 days.',
  },
];

@Component({
  selector: 'app-tentative-rulings-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscAccordionItem,
    ScscAlert,
    ScscButton,
    ScscCard,
    ScscEmptyState,
    ScscFooter,
    ScscIcon,
    ScscMasthead,
    ScscPageHeader,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSearchInput,
    ScscSection,
    ScscSelect,
    ScscTentativeRulings,
    ScscToolbar,
    ScscUtilityBar,
  ],
  template: \`
    <scsc-portal-shell>
      <scsc-utility-bar slot="utility">
        <span slot="start" class="hidden lg:inline">
          An official website of the Superior Court of California, County of Santa Clara
        </span>
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
          title="Civil tentative rulings"
          display
          description="Tentative rulings are posted by 1:30 p.m. the court day before the hearing."
        />

        <scsc-alert status="warning" title="A tentative ruling becomes the order">
          Unless a party asks for oral argument by 4:00 p.m. the court day before the hearing, the
          tentative ruling becomes the order of the court and the hearing does not go ahead.
        </scsc-alert>

        <scsc-toolbar [bordered]="true">
          <label class="flex items-center gap-2 text-sm">
            <span class="font-medium">Hearing date</span>
            <select
              scsc-select
              size="sm"
              class="w-auto"
              (change)="date.set($any($event.target).value)"
            >
              @for (d of dates; track d.value) {
                <option [value]="d.value" [selected]="d.value === date()">{{ d.label }}</option>
              }
            </select>
          </label>
          <label class="flex items-center gap-2 text-sm">
            <span class="font-medium">Department</span>
            <select
              scsc-select
              size="sm"
              class="w-auto"
              (change)="department.set($any($event.target).value)"
            >
              <option value="" [selected]="department() === ''">All</option>
              @for (d of departmentIds; track d) {
                <option [value]="d" [selected]="department() === d">Dept. {{ d }}</option>
              }
            </select>
          </label>
          <scsc-search-input
            slot="end"
            [(value)]="query"
            placeholder="Case number or name"
            class="w-full sm:w-64"
          />
        </scsc-toolbar>

        <p class="text-sm text-base-content/70" role="status">{{ countLabel() }}</p>

        @for (g of groups(); track g.department) {
          <scsc-section
            [heading]="'Dept. ' + g.department + ' \u2014 ' + g.judge"
            description="Downtown Superior Court"
          >
            <scsc-tentative-rulings [rulings]="g.rulings" />
          </scsc-section>
        } @empty {
          <scsc-card>
            <scsc-empty-state
              icon="gavel"
              title="No rulings match"
              message="There may be no tentative ruling for this case yet, or it was taken off calendar. Rulings are posted by 1:30 p.m. the court day before."
            >
              <scsc-button variant="neutral" outline size="sm" (click)="reset()">
                Show all rulings for this date
              </scsc-button>
            </scsc-empty-state>
          </scsc-card>
        }

        <scsc-section heading="How to ask for oral argument">
          <div class="flex max-w-3xl flex-col gap-2">
            <scsc-accordion-item title="Who do I contact, and by when?" name="contest" open>
              By 4:00 p.m. the court day before the hearing, call the department\u2019s courtroom clerk
              and say you intend to appear. The number is on the department\u2019s calendar page.
            </scsc-accordion-item>
            <scsc-accordion-item title="Do I have to tell the other side?" name="contest">
              Yes. The same day, tell every other party or their attorney by telephone or in person
              that you asked for argument.
            </scsc-accordion-item>
            <scsc-accordion-item title="What if nobody asks for argument?" name="contest">
              The tentative ruling becomes the order. The prevailing party prepares the formal order
              and gives notice of it to everyone else in the case.
            </scsc-accordion-item>
          </div>
        </scsc-section>
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
export class TentativeRulingsTemplate {
  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: 'search' },
    { label: 'Calendar', icon: 'calendar-days', link: '.', exact: true },
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
  protected readonly dates = DATES;
  protected readonly departmentIds = Object.keys(DEPARTMENTS);
  protected readonly date = signal(DATES[0].value);
  protected readonly department = signal('');
  protected readonly query = signal('');

  private readonly matches = computed(() => {
    const q = this.query().trim().toLowerCase();
    return RULINGS.filter(
      (r) =>
        r.iso === this.date() &&
        (!this.department() || r.department === this.department()) &&
        (!q || \`\${r.caseNumber} \${r.caseTitle}\`.toLowerCase().includes(q)),
    );
  });

  protected readonly groups = computed(() =>
    Object.keys(DEPARTMENTS)
      .map((department) => ({
        department,
        judge: DEPARTMENTS[department],
        rulings: this.matches().filter((r) => r.department === department),
      }))
      .filter((g) => g.rulings.length > 0),
  );

  protected readonly countLabel = computed(() => {
    const n = this.matches().length;
    const date = DATES.find((d) => d.value === this.date())?.label ?? '';
    return \`\${n} \${n === 1 ? 'ruling' : 'rulings'} for \${date}\`;
  });

  protected reset(): void {
    this.department.set('');
    this.query.set('');
  }
}
`,html:`<scsc-portal-shell>
  <scsc-utility-bar slot="utility">
    <span slot="start" class="hidden lg:inline">
      An official website of the Superior Court of California, County of Santa Clara
    </span>
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
      title="Civil tentative rulings"
      display
      description="Tentative rulings are posted by 1:30 p.m. the court day before the hearing."
    />

    <scsc-alert status="warning" title="A tentative ruling becomes the order">
      Unless a party asks for oral argument by 4:00 p.m. the court day before the hearing, the
      tentative ruling becomes the order of the court and the hearing does not go ahead.
    </scsc-alert>

    <scsc-toolbar [bordered]="true">
      <label class="flex items-center gap-2 text-sm">
        <span class="font-medium">Hearing date</span>
        <select
          scsc-select
          size="sm"
          class="w-auto"
          (change)="date.set($any($event.target).value)"
        >
          @for (d of dates; track d.value) {
            <option [value]="d.value" [selected]="d.value === date()">{{ d.label }}</option>
          }
        </select>
      </label>
      <label class="flex items-center gap-2 text-sm">
        <span class="font-medium">Department</span>
        <select
          scsc-select
          size="sm"
          class="w-auto"
          (change)="department.set($any($event.target).value)"
        >
          <option value="" [selected]="department() === ''">All</option>
          @for (d of departmentIds; track d) {
            <option [value]="d" [selected]="department() === d">Dept. {{ d }}</option>
          }
        </select>
      </label>
      <scsc-search-input
        slot="end"
        [(value)]="query"
        placeholder="Case number or name"
        class="w-full sm:w-64"
      />
    </scsc-toolbar>

    <p class="text-sm text-base-content/70" role="status">{{ countLabel() }}</p>

    @for (g of groups(); track g.department) {
      <scsc-section
        [heading]="'Dept. ' + g.department + ' \u2014 ' + g.judge"
        description="Downtown Superior Court"
      >
        <scsc-tentative-rulings [rulings]="g.rulings" />
      </scsc-section>
    } @empty {
      <scsc-card>
        <scsc-empty-state
          icon="gavel"
          title="No rulings match"
          message="There may be no tentative ruling for this case yet, or it was taken off calendar. Rulings are posted by 1:30 p.m. the court day before."
        >
          <scsc-button variant="neutral" outline size="sm" (click)="reset()">
            Show all rulings for this date
          </scsc-button>
        </scsc-empty-state>
      </scsc-card>
    }

    <scsc-section heading="How to ask for oral argument">
      <div class="flex max-w-3xl flex-col gap-2">
        <scsc-accordion-item title="Who do I contact, and by when?" name="contest" open>
          By 4:00 p.m. the court day before the hearing, call the department\u2019s courtroom clerk
          and say you intend to appear. The number is on the department\u2019s calendar page.
        </scsc-accordion-item>
        <scsc-accordion-item title="Do I have to tell the other side?" name="contest">
          Yes. The same day, tell every other party or their attorney by telephone or in person
          that you asked for argument.
        </scsc-accordion-item>
        <scsc-accordion-item title="What if nobody asks for argument?" name="contest">
          The tentative ruling becomes the order. The prevailing party prepares the formal order
          and gives notice of it to everyone else in the case.
        </scsc-accordion-item>
      </div>
    </scsc-section>
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
`}}[`tentative-rulings`],layout:`page`,height:`48rem`}];export{ge as DEMOS};