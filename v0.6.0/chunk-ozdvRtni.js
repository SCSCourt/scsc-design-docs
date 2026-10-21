import{An as XN,Ei as uN,Es as sD,H as FN,Hs as y_,Ki as ye,L as Er,Lt as ON,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Ps as ut,Ss as rD,Tt as MN,Vr as mN,Xa as Pv,Xi as zN,Yo as iD,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,gs as oM,ht as KP,ks as t_,ms as nu,nn as TN,ra as Af,va as G_,vn as Vn,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var U=n=>[`cases`,n];var W=(n,e)=>e.id;var q=(n,e)=>e.caseNumber+e.time;function K(n,e){if(n&1&&(Ga(0,`option`,13),G_(1),Lf()),n&2){let t=e.$implicit,a=y_();Pv(`value`,t.id)(`selected`,a.department()===t.id),Jb(),rD(` Dept. `,t.id,` — `,t.judge,` `)}}function Q(n,e){if(n&1&&(Ga(0,`li`,24)(1,`scsc-hearing-card`,25)(2,`a`,26),G_(3),Lf()()()),n&2){let t=e.$implicit,a=y_(2);Jb(),Pv(`type`,t.type)(`datetime`,t.time+` · `+t.caseTitle)(`department`,t.department)(`judge`,a.judgeOf(t.department))(`location`,a.courthouseOf(t.department)),Jb(),Pv(`routerLink`,oM(7,U,t.caseNumber)),Jb(),nD(t.caseNumber)}}function X(n,e){if(n&1&&(Ga(0,`ul`,21),o_(1,Q,4,9,`li`,24,q),Lf()),n&2){let t=y_();Jb(),i_(t.agenda())}}function Y(n,e){if(n&1&&uc(0,`scsc-empty-state`,22),n&2){let t=y_();Pv(`message`,t.department()?`Nothing is calendared in Dept. `+t.department()+` on this day. Try another day or all departments.`:`Nothing is calendared on this day. Pick a day with a dot on the calendar.`)}}var C=[{id:`3`,judge:`Hon. Samuel Whitfield`,courthouse:`Downtown Superior Court`},{id:`10`,judge:`Hon. Miriam Okafor`,courthouse:`Downtown Superior Court`},{id:`18`,judge:`Hon. Ellen Vasquez`,courthouse:`Downtown Superior Court`},{id:`71`,judge:`Hon. Grace Liu`,courthouse:`Family Justice Center`}];var Z=[{date:`2026-10-05`,time:`9:00 AM`,type:`Case Management Conference`,kind:`hearing`,department:`3`,caseNumber:`24CV013002`,caseTitle:`Nguyen v. Almaden Ridge Apartments`},{date:`2026-10-06`,time:`8:30 AM`,type:`Unlawful Detainer Trial`,kind:`trial`,department:`18`,caseNumber:`26CV031877`,caseTitle:`Rosewood Commons v. Tran`},{date:`2026-10-08`,time:`1:30 PM`,type:`Request for Order: Custody`,kind:`hearing`,department:`71`,caseNumber:`25FL002214`,caseTitle:`In re Marriage of Patel`},{date:`2026-10-13`,time:`9:00 AM`,type:`Motion to Compel Further Responses`,kind:`hearing`,department:`10`,caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Mgmt.`},{date:`2026-10-13`,time:`9:00 AM`,type:`Demurrer`,kind:`hearing`,department:`10`,caseNumber:`25CV002210`,caseTitle:`Brightline Solar Inc. v. Castro`},{date:`2026-10-13`,time:`10:30 AM`,type:`Motion for Summary Judgment`,kind:`hearing`,department:`3`,caseNumber:`23CV077120`,caseTitle:`Okonkwo v. Valley Transit Partners`},{date:`2026-10-13`,time:`1:30 PM`,type:`Order to Show Cause re: Dismissal`,kind:`hearing`,department:`10`,caseNumber:`25CV004411`,caseTitle:`Alvarez v. Bay Valley Auto Group`},{date:`2026-10-15`,time:`8:30 AM`,type:`Unlawful Detainer Trial`,kind:`trial`,department:`18`,caseNumber:`26CV032045`,caseTitle:`Palo Verde Homes v. Garcia`},{date:`2026-10-19`,time:`9:00 AM`,type:`Jury Trial (day 1)`,kind:`trial`,department:`3`,caseNumber:`22CV061188`,caseTitle:`Marsh v. Coastline Builders`},{date:`2026-10-20`,time:`9:00 AM`,type:`Jury Trial (day 2)`,kind:`trial`,department:`3`,caseNumber:`22CV061188`,caseTitle:`Marsh v. Coastline Builders`},{date:`2026-10-22`,time:`1:30 PM`,type:`Status Conference`,kind:`hearing`,department:`71`,caseNumber:`24FL009931`,caseTitle:`In re the Parentage of A. R.`},{date:`2026-10-27`,time:`9:00 AM`,type:`Trial Setting Conference`,kind:`hearing`,department:`10`,caseNumber:`24CV015560`,caseTitle:`Hernandez-Alvarez v. Summit Freight`}];var u=class n{nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`.`,exact:!0},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`}]}];departments=C;department=q$1(``);day=q$1(`2026-10-13`);inDepartment=ut(()=>Z.filter(e=>!this.department()||e.department===this.department()));events=ut(()=>this.inDepartment().map(e=>({date:e.date,title:`${e.time} ${e.type}, Dept. ${e.department}`,tone:e.kind===`trial`?`warning`:`info`,time:e.time})));agenda=ut(()=>this.inDepartment().filter(e=>e.date===this.day()).sort((e,t)=>z(e.time)-z(t.time)));agendaTitle=ut(()=>{let e=this.day();if(!e)return`Pick a day`;let[t,a,g]=e.split(`-`).map(Number);return new Date(t,a-1,g).toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`})});agendaSummary=ut(()=>{let e=this.agenda().length,t=this.department()?`in Dept. ${this.department()}`:`in all departments`;return`${e} ${e===1?`hearing`:`hearings`} ${t}`});judgeOf(e){return C.find(t=>t.id===e)?.judge??``}courthouseOf(e){return C.find(t=>t.id===e)?.courthouse??``}static ɵfac=function(t){return new(t||n)};static ɵcmp=Af({type:n,selectors:[[`app-court-calendar-template`]],decls:35,vars:10,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`es`,`lang`,`es`,`hreflang`,`es`,1,`hover:underline`],[`routerLink`,`sign-in`,1,`inline-flex`,`items-center`,`gap-1`,`hover:underline`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-6`,`scsc-pad-page`],[`title`,`Court calendar`,`display`,``,`description`,`Public hearings by department. Pick a day to see its calendar; times can change, so check again the day before.`],[1,`flex`,`flex-col`,`gap-3`,`sm:flex-row`,`sm:items-end`,`sm:justify-between`],[`label`,`Department`,`for`,`cal-dept`,1,`w-full`,`sm:max-w-sm`],[`scsc-select`,``,`id`,`cal-dept`,3,`change`],[`value`,``,3,`selected`],[3,`value`,`selected`],[`aria-label`,`Calendar legend`,1,`flex`,`flex-wrap`,`gap-x-5`,`gap-y-1`,`pb-2`],[`status`,`info`],[`status`,`warning`],[1,`grid`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]`],[`initialMonth`,`2026-10`,3,`selectedChange`,`events`,`selected`],[1,`lg:sticky`,`lg:top-4`,3,`title`],[1,`-mt-1`,`mb-2`,`text-sm`,`text-base-content/70`],[1,`divide-y`,`divide-base-300`],[`icon`,`calendar-x`,`title`,`No public hearings`,3,`message`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`recordDisclaimer`,``,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[1,`py-3.5`,`last:pb-1`],[`flush`,``,3,`type`,`datetime`,`department`,`judge`,`location`],[1,`shrink-0`,`text-sm`,`font-medium`,`tnum`,`text-primary`,`underline`,`underline-offset-2`,3,`routerLink`]],template:function(t,a){t&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),G_(5,`Español`),Lf(),Ga(6,`a`,3),uc(7,`scsc-icon`,4),G_(8,` Sign in `),Lf()(),uc(9,`scsc-masthead`,5)(10,`scsc-primary-nav`,6),Ga(11,`div`,7),uc(12,`scsc-page-header`,8),Ga(13,`div`,9)(14,`scsc-form-field`,10)(15,`select`,11),lc(`change`,function(m){return a.department.set(m.target.value)}),Ga(16,`option`,12),G_(17,`All departments`),Lf(),o_(18,K,2,4,`option`,13,W),Lf()(),Ga(20,`ul`,14)(21,`li`)(22,`scsc-status-dot`,15),G_(23,`Hearing`),Lf()(),Ga(24,`li`)(25,`scsc-status-dot`,16),G_(26,`Trial`),Lf()()()(),Ga(27,`div`,17)(28,`scsc-calendar`,18),sD(`selectedChange`,function(m){return Y_(a.day,m)||(a.day=m),m}),Lf(),Ga(29,`scsc-card`,19)(30,`p`,20),G_(31),Lf(),JT(32,X,3,0,`ul`,21)(33,Y,1,1,`scsc-empty-state`,22),Lf()()(),uc(34,`scsc-footer`,23),Lf()),t&2&&(Jb(10),Pv(`items`,a.nav),Jb(6),Pv(`selected`,a.department()===``),Jb(2),i_(a.departments),Jb(10),Pv(`events`,a.events()),iD(`selected`,a.day),Jb(),Pv(`title`,a.agendaTitle()),Jb(2),nD(a.agendaSummary()),Jb(),t_(a.agenda().length?32:33),Jb(2),Pv(`columns`,a.footerLinks)(`contact`,a.footerContact)(`legalLinks`,a.legalLinks))},dependencies:[nu,KP,mN,Xa,XN,Vn,Er,ye,FN,TN,MN,ON,On,uN,zN],encapsulation:2})};function z(n){let[,e,t,a]=/(\d+):(\d+) (AM|PM)/.exec(n)??[];return(Number(e)%12+(a===`PM`?12:0))*60+Number(t)}var me=[{id:`court-calendar`,title:`Court calendar`,description:`Month calendar (arrow keys move by day) beside the selected day’s agenda of hearing cards, filtered by department, with a legend and an empty day.`,component:u,source:{"court-calendar":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscCalendar,
  type ScscCalendarEvent,
  ScscCard,
  ScscEmptyState,
  ScscFooter,
  type ScscFooterContact,
  ScscFormField,
  ScscHearingCard,
  ScscIcon,
  type ScscLegalLink,
  ScscMasthead,
  ScscPageHeader,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscSelect,
  ScscStatusDot,
  ScscUtilityBar,
} from '@scscourt/design';

interface Department {
  id: string;
  judge: string;
  courthouse: string;
}

interface Hearing {
  date: string;
  time: string;
  type: string;
  kind: 'hearing' | 'trial';
  department: string;
  caseNumber: string;
  caseTitle: string;
}

const DEPARTMENTS: Department[] = [
  { id: '3', judge: 'Hon. Samuel Whitfield', courthouse: 'Downtown Superior Court' },
  { id: '10', judge: 'Hon. Miriam Okafor', courthouse: 'Downtown Superior Court' },
  { id: '18', judge: 'Hon. Ellen Vasquez', courthouse: 'Downtown Superior Court' },
  { id: '71', judge: 'Hon. Grace Liu', courthouse: 'Family Justice Center' },
];

const HEARINGS: Hearing[] = [
  {
    date: '2026-10-05',
    time: '9:00 AM',
    type: 'Case Management Conference',
    kind: 'hearing',
    department: '3',
    caseNumber: '24CV013002',
    caseTitle: 'Nguyen v. Almaden Ridge Apartments',
  },
  {
    date: '2026-10-06',
    time: '8:30 AM',
    type: 'Unlawful Detainer Trial',
    kind: 'trial',
    department: '18',
    caseNumber: '26CV031877',
    caseTitle: 'Rosewood Commons v. Tran',
  },
  {
    date: '2026-10-08',
    time: '1:30 PM',
    type: 'Request for Order: Custody',
    kind: 'hearing',
    department: '71',
    caseNumber: '25FL002214',
    caseTitle: 'In re Marriage of Patel',
  },
  {
    date: '2026-10-13',
    time: '9:00 AM',
    type: 'Motion to Compel Further Responses',
    kind: 'hearing',
    department: '10',
    caseNumber: '24CV012345',
    caseTitle: 'Alvarez v. Northgate Property Mgmt.',
  },
  {
    date: '2026-10-13',
    time: '9:00 AM',
    type: 'Demurrer',
    kind: 'hearing',
    department: '10',
    caseNumber: '25CV002210',
    caseTitle: 'Brightline Solar Inc. v. Castro',
  },
  {
    date: '2026-10-13',
    time: '10:30 AM',
    type: 'Motion for Summary Judgment',
    kind: 'hearing',
    department: '3',
    caseNumber: '23CV077120',
    caseTitle: 'Okonkwo v. Valley Transit Partners',
  },
  {
    date: '2026-10-13',
    time: '1:30 PM',
    type: 'Order to Show Cause re: Dismissal',
    kind: 'hearing',
    department: '10',
    caseNumber: '25CV004411',
    caseTitle: 'Alvarez v. Bay Valley Auto Group',
  },
  {
    date: '2026-10-15',
    time: '8:30 AM',
    type: 'Unlawful Detainer Trial',
    kind: 'trial',
    department: '18',
    caseNumber: '26CV032045',
    caseTitle: 'Palo Verde Homes v. Garcia',
  },
  {
    date: '2026-10-19',
    time: '9:00 AM',
    type: 'Jury Trial (day 1)',
    kind: 'trial',
    department: '3',
    caseNumber: '22CV061188',
    caseTitle: 'Marsh v. Coastline Builders',
  },
  {
    date: '2026-10-20',
    time: '9:00 AM',
    type: 'Jury Trial (day 2)',
    kind: 'trial',
    department: '3',
    caseNumber: '22CV061188',
    caseTitle: 'Marsh v. Coastline Builders',
  },
  {
    date: '2026-10-22',
    time: '1:30 PM',
    type: 'Status Conference',
    kind: 'hearing',
    department: '71',
    caseNumber: '24FL009931',
    caseTitle: 'In re the Parentage of A. R.',
  },
  {
    date: '2026-10-27',
    time: '9:00 AM',
    type: 'Trial Setting Conference',
    kind: 'hearing',
    department: '10',
    caseNumber: '24CV015560',
    caseTitle: 'Hernandez-Alvarez v. Summit Freight',
  },
];

@Component({
  selector: 'app-court-calendar-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscCalendar,
    ScscCard,
    ScscEmptyState,
    ScscFooter,
    ScscFormField,
    ScscHearingCard,
    ScscIcon,
    ScscMasthead,
    ScscPageHeader,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSelect,
    ScscStatusDot,
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
          title="Court calendar"
          display
          description="Public hearings by department. Pick a day to see its calendar; times can change, so check again the day before."
        />

        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <scsc-form-field label="Department" for="cal-dept" class="w-full sm:max-w-sm">
            <select scsc-select id="cal-dept" (change)="department.set($any($event.target).value)">
              <option value="" [selected]="department() === ''">All departments</option>
              @for (d of departments; track d.id) {
                <option [value]="d.id" [selected]="department() === d.id">
                  Dept. {{ d.id }} \u2014 {{ d.judge }}
                </option>
              }
            </select>
          </scsc-form-field>
          <ul class="flex flex-wrap gap-x-5 gap-y-1 pb-2" aria-label="Calendar legend">
            <li><scsc-status-dot status="info">Hearing</scsc-status-dot></li>
            <li><scsc-status-dot status="warning">Trial</scsc-status-dot></li>
          </ul>
        </div>

        <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <scsc-calendar [events]="events()" initialMonth="2026-10" [(selected)]="day" />

          <scsc-card [title]="agendaTitle()" class="lg:sticky lg:top-4">
            <p class="-mt-1 mb-2 text-sm text-base-content/70">{{ agendaSummary() }}</p>
            @if (agenda().length) {
              <ul class="divide-y divide-base-300">
                @for (h of agenda(); track h.caseNumber + h.time) {
                  <li class="py-3.5 last:pb-1">
                    <scsc-hearing-card
                      flush
                      [type]="h.type"
                      [datetime]="h.time + ' \xB7 ' + h.caseTitle"
                      [department]="h.department"
                      [judge]="judgeOf(h.department)"
                      [location]="courthouseOf(h.department)"
                    >
                      <a
                        [routerLink]="['cases', h.caseNumber]"
                        class="shrink-0 text-sm font-medium tnum text-primary underline underline-offset-2"
                        >{{ h.caseNumber }}</a
                      >
                    </scsc-hearing-card>
                  </li>
                }
              </ul>
            } @else {
              <scsc-empty-state
                icon="calendar-x"
                title="No public hearings"
                [message]="
                  department()
                    ? 'Nothing is calendared in Dept. ' +
                      department() +
                      ' on this day. Try another day or all departments.'
                    : 'Nothing is calendared on this day. Pick a day with a dot on the calendar.'
                "
              />
            }
          </scsc-card>
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
export class CourtCalendarTemplate {
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
  protected readonly departments = DEPARTMENTS;
  protected readonly department = signal('');
  protected readonly day = signal<string | null>('2026-10-13');

  private readonly inDepartment = computed(() =>
    HEARINGS.filter((h) => !this.department() || h.department === this.department()),
  );

  protected readonly events = computed<ScscCalendarEvent[]>(() =>
    this.inDepartment().map((h) => ({
      date: h.date,
      title: \`\${h.time} \${h.type}, Dept. \${h.department}\`,
      tone: h.kind === 'trial' ? 'warning' : 'info',
      time: h.time,
    })),
  );

  protected readonly agenda = computed(() =>
    this.inDepartment()
      .filter((h) => h.date === this.day())
      .sort((a, b) => toMinutes(a.time) - toMinutes(b.time)),
  );

  protected readonly agendaTitle = computed(() => {
    const d = this.day();
    if (!d) return 'Pick a day';
    const [y, m, dd] = d.split('-').map(Number);
    return new Date(y, m - 1, dd).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  });

  protected readonly agendaSummary = computed(() => {
    const n = this.agenda().length;
    const where = this.department() ? \`in Dept. \${this.department()}\` : 'in all departments';
    return \`\${n} \${n === 1 ? 'hearing' : 'hearings'} \${where}\`;
  });

  protected judgeOf(id: string): string {
    return DEPARTMENTS.find((d) => d.id === id)?.judge ?? '';
  }

  protected courthouseOf(id: string): string {
    return DEPARTMENTS.find((d) => d.id === id)?.courthouse ?? '';
  }
}

/** "1:30 PM" \u2192 minutes after midnight, for sorting. */
function toMinutes(time: string): number {
  const [, h, m, ap] = /(\\d+):(\\d+) (AM|PM)/.exec(time) ?? [];
  return ((Number(h) % 12) + (ap === 'PM' ? 12 : 0)) * 60 + Number(m);
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
      title="Court calendar"
      display
      description="Public hearings by department. Pick a day to see its calendar; times can change, so check again the day before."
    />

    <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <scsc-form-field label="Department" for="cal-dept" class="w-full sm:max-w-sm">
        <select scsc-select id="cal-dept" (change)="department.set($any($event.target).value)">
          <option value="" [selected]="department() === ''">All departments</option>
          @for (d of departments; track d.id) {
            <option [value]="d.id" [selected]="department() === d.id">
              Dept. {{ d.id }} \u2014 {{ d.judge }}
            </option>
          }
        </select>
      </scsc-form-field>
      <ul class="flex flex-wrap gap-x-5 gap-y-1 pb-2" aria-label="Calendar legend">
        <li><scsc-status-dot status="info">Hearing</scsc-status-dot></li>
        <li><scsc-status-dot status="warning">Trial</scsc-status-dot></li>
      </ul>
    </div>

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <scsc-calendar [events]="events()" initialMonth="2026-10" [(selected)]="day" />

      <scsc-card [title]="agendaTitle()" class="lg:sticky lg:top-4">
        <p class="-mt-1 mb-2 text-sm text-base-content/70">{{ agendaSummary() }}</p>
        @if (agenda().length) {
          <ul class="divide-y divide-base-300">
            @for (h of agenda(); track h.caseNumber + h.time) {
              <li class="py-3.5 last:pb-1">
                <scsc-hearing-card
                  flush
                  [type]="h.type"
                  [datetime]="h.time + ' \xB7 ' + h.caseTitle"
                  [department]="h.department"
                  [judge]="judgeOf(h.department)"
                  [location]="courthouseOf(h.department)"
                >
                  <a
                    [routerLink]="['cases', h.caseNumber]"
                    class="shrink-0 text-sm font-medium tnum text-primary underline underline-offset-2"
                    >{{ h.caseNumber }}</a
                  >
                </scsc-hearing-card>
              </li>
            }
          </ul>
        } @else {
          <scsc-empty-state
            icon="calendar-x"
            title="No public hearings"
            [message]="
              department()
                ? 'Nothing is calendared in Dept. ' +
                  department() +
                  ' on this day. Try another day or all departments.'
                : 'Nothing is calendared on this day. Pick a day with a dot on the calendar.'
            "
          />
        }
      </scsc-card>
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
`}}[`court-calendar`],layout:`page`,height:`48rem`}];export{me as DEMOS};