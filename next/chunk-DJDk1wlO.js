import{An as XN,H as FN,Ki as ye,Lt as ON,M as DN,Ma as JT,Ms as uc,Na as Jb,Tt as MN,Vr as mN,Xa as Pv,Xi as zN,Zi as za,Zo as i_,_s as o_,br as gr,cs as lc,ds as nD,ks as t_,ms as nu,ni as qP,nn as TN,or as eP,os as k_,pi as sn,ra as Af,t as $E,ta as $f,ut as JP,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var N=(c,r)=>r.title;function B(c,r){c&1&&(Ga(0,`scsc-alert`,17),G_(1,` Pick a new week within the next six months. You’ll get a confirmation email, and the new date replaces this summons. `),Lf())}function _(c,r){if(c&1&&(Ga(0,`li`,21)(1,`span`,39),uc(2,`scsc-icon`,40),Lf(),Ga(3,`div`)(4,`p`,41),G_(5),Ga(6,`span`,42),G_(7),Lf()(),Ga(8,`p`,43),G_(9),Lf(),Ga(10,`p`,44),G_(11),Lf()()()),c&2){let a=r.$implicit;Jb(),k_(a.state===`done`?`bg-success/15 text-success`:a.state===`current`?`bg-primary text-primary-content`:`bg-base-200 text-base-content/70`),Jb(),Pv(`name`,a.state===`done`?`check`:`circle`),Jb(3),$f(` `,a.title,` `),Jb(2),$f(` (`,a.state===`done`?`done`:a.state===`current`?`current step`:`coming up`,`)`),Jb(2),nD(a.when),Jb(2),nD(a.detail)}}var ee=[{id:`jury-portal`,title:`Jury portal`,description:`Juror status with reporting actions, the four-step service lifecycle, what to bring, Jury Services contacts and common questions.`,component:class c{postponeAsked=q(!1);address=`191 N. First Street
San Jos\xE9, CA 95113`;nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`.`,exact:!0},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`}]}];steps=[{label:`Summons`},{label:`Questionnaire`},{label:`Check-in`},{label:`Service`}];stages=[{title:`Summons received`,when:`Mailed Sep 14, 2026`,detail:`Your summons is for the week of October 19 at the Downtown Superior Court.`,state:`done`},{title:`Qualification questionnaire`,when:`Completed Sep 22, 2026`,detail:`You confirmed you are eligible and gave a phone number for reminders.`,state:`done`},{title:`Check in`,when:`After 5:00 p.m., Friday, Oct 16`,detail:`You are on call in group 12. Check your status to see whether to report Monday.`,state:`current`},{title:`Service`,when:`One day or one trial`,detail:`Most jurors finish in a day. If you are sworn onto a jury, you serve until the trial ends.`,state:`next`}];static ɵfac=function(a){return new(a||c)};static ɵcmp=Af({type:c,selectors:[[`app-jury-portal-template`]],decls:59,vars:8,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[1,`inline-flex`,`items-center`,`gap-1`],[`name`,`circle-user`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-8`,`scsc-pad-page`],[`title`,`Your jury service`,`display`,``,`description`,`Summons for the week of Monday, October 19, 2026 · Downtown Superior Court`],[1,`grid`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]`],[1,`flex`,`flex-col`,`gap-6`],[`status`,`on-call`,`badgeId`,`4471892`,`group`,`12`],[1,`mb-3`,`text-sm`,`text-base-content/80`],[1,`flex`,`flex-wrap`,`gap-2`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`instructions`],[`name`,`map-pin`,`size`,`sm`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[`name`,`calendar-clock`,`size`,`sm`],[`status`,`info`,`title`,`You can postpone once, online`],[`title`,`Your service, step by step`],[`label`,`Jury service progress`,1,`mb-5`,3,`steps`,`current`],[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`gap-3`],[`aria-label`,`Jury Services contact`,1,`flex`,`flex-col`,`gap-6`],[`title`,`Jury Services`],[`name`,`Jury Assembly Room, Downtown Superior Court`,`phone`,`(408) 882-2700`,3,`address`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`title`,`On the day`],[1,`flex`,`flex-col`,`gap-2`,`text-sm`,`text-base-content/80`],[1,`flex`,`gap-2`],[`name`,`clock`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`name`,`id-card`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`name`,`train-front`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`heading`,`Questions jurors ask`],[1,`flex`,`max-w-3xl`,`flex-col`,`gap-2`],[`title`,`How do I know if I have to report?`,`name`,`jury-faq`,`open`,``],[`title`,`Can my employer stop me from serving?`,`name`,`jury-faq`],[`title`,`Will I be paid?`,`name`,`jury-faq`],[`title`,`I need an accommodation or an interpreter`,`name`,`jury-faq`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[1,`mt-0.5`,`flex`,`h-7`,`w-7`,`shrink-0`,`items-center`,`justify-center`,`rounded-full`],[`size`,`xs`,3,`name`],[1,`font-medium`,`text-base-content`],[1,`sr-only`],[1,`text-sm`,`tnum`,`text-base-content/70`],[1,`mt-0.5`,`text-sm`,`text-base-content/80`]],template:function(a,o){a&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`span`,2),uc(5,`scsc-icon`,3),G_(6,` Juror 4471892 `),Lf()(),uc(7,`scsc-masthead`,4)(8,`scsc-primary-nav`,5),Ga(9,`div`,6),uc(10,`scsc-page-header`,7),Ga(11,`div`,8)(12,`div`,9)(13,`scsc-juror-status`,10)(14,`p`,11),G_(15,` Check your reporting status after `),Ga(16,`strong`),G_(17,`5:00 p.m. on Friday, October 16`),Lf(),G_(18,`, here or by phone at (408) 882-2700. `),Lf(),Ga(19,`div`,12)(20,`a`,13),uc(21,`scsc-icon`,14),G_(22,` Reporting instructions `),Lf(),Ga(23,`scsc-button`,15),lc(`click`,function(){return o.postponeAsked.set(!0)}),uc(24,`scsc-icon`,16),G_(25,` Ask to postpone `),Lf()()(),JT(26,B,2,0,`scsc-alert`,17),Ga(27,`scsc-card`,18),uc(28,`scsc-steps`,19),Ga(29,`ol`,20),o_(30,_,12,7,`li`,21,N),Lf()()(),Ga(32,`aside`,22)(33,`scsc-card`,23),uc(34,`scsc-contact-block`,24),Ga(35,`p`,25),G_(36,` Phone lines: Monday–Friday, 8:30 a.m.–4:00 p.m. `),Lf()(),Ga(37,`scsc-card`,26)(38,`ul`,27)(39,`li`,28),uc(40,`scsc-icon`,29),G_(41,` Check in by 8:15 a.m. Security screening takes about 15 minutes. `),Lf(),Ga(42,`li`,28),uc(43,`scsc-icon`,30),G_(44,` Bring photo ID and this badge number. `),Lf(),Ga(45,`li`,28),uc(46,`scsc-icon`,31),G_(47,` Light rail stops one block away, at Santa Clara station. `),Lf()()()()(),Ga(48,`scsc-section`,32)(49,`div`,33)(50,`scsc-accordion-item`,34),G_(51,` After 5:00 p.m. the court day before your service, this page shows either “Report” with a time and place or “On call” with the next time to check. The phone line gives the same information. `),Lf(),Ga(52,`scsc-accordion-item`,35),G_(53,` No. California law protects your job while you serve. Your employer may ask for proof of service: print it from this page after each day. `),Lf(),Ga(54,`scsc-accordion-item`,36),G_(55,` Jurors are paid for each day of service after the first, plus mileage one way. Payment is mailed within about 30 days after your service ends. `),Lf(),Ga(56,`scsc-accordion-item`,37),G_(57,` Tell Jury Services as soon as you can. Jurors who need a disability accommodation, or who are not fluent in English, should call before the week of service. `),Lf()()()(),uc(58,`scsc-footer`,38),Lf()),a&2&&(Jb(8),Pv(`items`,o.nav),Jb(18),t_(o.postponeAsked()?26:-1),Jb(2),Pv(`steps`,o.steps)(`current`,2),Jb(2),i_(o.stages),Jb(4),Pv(`address`,o.address),Jb(24),Pv(`columns`,o.footerLinks)(`contact`,o.footerContact)(`legalLinks`,o.legalLinks))},dependencies:[nu,eP,za,sn,$E,mN,qP,XN,ye,JP,FN,TN,MN,ON,DN,gr,zN],encapsulation:2})},source:{"jury-portal":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscAccordionItem,
  ScscAlert,
  ScscButton,
  ScscButtonLink,
  ScscCard,
  ScscContactBlock,
  ScscFooter,
  type ScscFooterContact,
  ScscIcon,
  ScscJurorStatus,
  type ScscLegalLink,
  ScscMasthead,
  ScscPageHeader,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscSection,
  type ScscStep,
  ScscSteps,
  ScscUtilityBar,
} from '@scscourt/design';

interface Stage {
  title: string;
  when: string;
  detail: string;
  state: 'done' | 'current' | 'next';
}

@Component({
  selector: 'app-jury-portal-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscAccordionItem,
    ScscAlert,
    ScscButton,
    ScscButtonLink,
    ScscCard,
    ScscContactBlock,
    ScscFooter,
    ScscIcon,
    ScscJurorStatus,
    ScscMasthead,
    ScscPageHeader,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSection,
    ScscSteps,
    ScscUtilityBar,
  ],
  template: \`
    <scsc-portal-shell>
      <scsc-utility-bar slot="utility">
        <span slot="start" class="hidden lg:inline">
          An official website of the Superior Court of California, County of Santa Clara
        </span>
        <span class="inline-flex items-center gap-1">
          <scsc-icon name="circle-user" size="xs" />
          Juror 4471892
        </span>
      </scsc-utility-bar>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California \xB7 County of Santa Clara"
        logoSrc="scsc-seal.png"
        contained
      />
      <scsc-primary-nav slot="nav" [items]="nav" />

      <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-8 scsc-pad-page">
        <scsc-page-header
          title="Your jury service"
          display
          description="Summons for the week of Monday, October 19, 2026 \xB7 Downtown Superior Court"
        />

        <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div class="flex flex-col gap-6">
            <scsc-juror-status status="on-call" badgeId="4471892" group="12">
              <p class="mb-3 text-sm text-base-content/80">
                Check your reporting status after <strong>5:00 p.m. on Friday, October 16</strong>,
                here or by phone at (408) 882-2700.
              </p>
              <div class="flex flex-wrap gap-2">
                <a scsc-button size="sm" routerLink="instructions">
                  <scsc-icon name="map-pin" size="sm" />
                  Reporting instructions
                </a>
                <scsc-button variant="neutral" outline size="sm" (click)="postponeAsked.set(true)">
                  <scsc-icon name="calendar-clock" size="sm" />
                  Ask to postpone
                </scsc-button>
              </div>
            </scsc-juror-status>

            @if (postponeAsked()) {
              <scsc-alert status="info" title="You can postpone once, online">
                Pick a new week within the next six months. You\u2019ll get a confirmation email, and the
                new date replaces this summons.
              </scsc-alert>
            }

            <scsc-card title="Your service, step by step">
              <scsc-steps
                [steps]="steps"
                [current]="2"
                label="Jury service progress"
                class="mb-5"
              />
              <ol class="flex flex-col gap-4">
                @for (s of stages; track s.title) {
                  <li class="flex gap-3">
                    <span
                      class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      [class]="
                        s.state === 'done'
                          ? 'bg-success/15 text-success'
                          : s.state === 'current'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 text-base-content/70'
                      "
                    >
                      <scsc-icon [name]="s.state === 'done' ? 'check' : 'circle'" size="xs" />
                    </span>
                    <div>
                      <p class="font-medium text-base-content">
                        {{ s.title }}
                        <span class="sr-only">
                          ({{
                            s.state === 'done'
                              ? 'done'
                              : s.state === 'current'
                                ? 'current step'
                                : 'coming up'
                          }})</span
                        >
                      </p>
                      <p class="text-sm tnum text-base-content/70">{{ s.when }}</p>
                      <p class="mt-0.5 text-sm text-base-content/80">{{ s.detail }}</p>
                    </div>
                  </li>
                }
              </ol>
            </scsc-card>
          </div>

          <aside class="flex flex-col gap-6" aria-label="Jury Services contact">
            <scsc-card title="Jury Services">
              <scsc-contact-block
                name="Jury Assembly Room, Downtown Superior Court"
                [address]="address"
                phone="(408) 882-2700"
              />
              <p class="mt-3 text-sm text-base-content/70">
                Phone lines: Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m.
              </p>
            </scsc-card>
            <scsc-card title="On the day">
              <ul class="flex flex-col gap-2 text-sm text-base-content/80">
                <li class="flex gap-2">
                  <scsc-icon name="clock" size="sm" class="mt-0.5 shrink-0 text-primary" />
                  Check in by 8:15 a.m. Security screening takes about 15 minutes.
                </li>
                <li class="flex gap-2">
                  <scsc-icon name="id-card" size="sm" class="mt-0.5 shrink-0 text-primary" />
                  Bring photo ID and this badge number.
                </li>
                <li class="flex gap-2">
                  <scsc-icon name="train-front" size="sm" class="mt-0.5 shrink-0 text-primary" />
                  Light rail stops one block away, at Santa Clara station.
                </li>
              </ul>
            </scsc-card>
          </aside>
        </div>

        <scsc-section heading="Questions jurors ask">
          <div class="flex max-w-3xl flex-col gap-2">
            <scsc-accordion-item title="How do I know if I have to report?" name="jury-faq" open>
              After 5:00 p.m. the court day before your service, this page shows either \u201CReport\u201D
              with a time and place or \u201COn call\u201D with the next time to check. The phone line gives
              the same information.
            </scsc-accordion-item>
            <scsc-accordion-item title="Can my employer stop me from serving?" name="jury-faq">
              No. California law protects your job while you serve. Your employer may ask for proof
              of service: print it from this page after each day.
            </scsc-accordion-item>
            <scsc-accordion-item title="Will I be paid?" name="jury-faq">
              Jurors are paid for each day of service after the first, plus mileage one way. Payment
              is mailed within about 30 days after your service ends.
            </scsc-accordion-item>
            <scsc-accordion-item title="I need an accommodation or an interpreter" name="jury-faq">
              Tell Jury Services as soon as you can. Jurors who need a disability accommodation, or
              who are not fluent in English, should call before the week of service.
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
        backToTop
      />
    </scsc-portal-shell>
  \`,
})
export class JuryPortalTemplate {
  protected readonly postponeAsked = signal(false);
  protected readonly address = '191 N. First Street\\nSan Jos\xE9, CA 95113';

  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: 'search' },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'e-Filing', icon: 'upload', link: 'efile' },
    { label: 'Fees', icon: 'credit-card', link: 'fees' },
    { label: 'Jury', icon: 'users', link: '.', exact: true },
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

  protected readonly steps: ScscStep[] = [
    { label: 'Summons' },
    { label: 'Questionnaire' },
    { label: 'Check-in' },
    { label: 'Service' },
  ];

  protected readonly stages: Stage[] = [
    {
      title: 'Summons received',
      when: 'Mailed Sep 14, 2026',
      detail: 'Your summons is for the week of October 19 at the Downtown Superior Court.',
      state: 'done',
    },
    {
      title: 'Qualification questionnaire',
      when: 'Completed Sep 22, 2026',
      detail: 'You confirmed you are eligible and gave a phone number for reminders.',
      state: 'done',
    },
    {
      title: 'Check in',
      when: 'After 5:00 p.m., Friday, Oct 16',
      detail: 'You are on call in group 12. Check your status to see whether to report Monday.',
      state: 'current',
    },
    {
      title: 'Service',
      when: 'One day or one trial',
      detail:
        'Most jurors finish in a day. If you are sworn onto a jury, you serve until the trial ends.',
      state: 'next',
    },
  ];
}
`,html:`<scsc-portal-shell>
  <scsc-utility-bar slot="utility">
    <span slot="start" class="hidden lg:inline">
      An official website of the Superior Court of California, County of Santa Clara
    </span>
    <span class="inline-flex items-center gap-1">
      <scsc-icon name="circle-user" size="xs" />
      Juror 4471892
    </span>
  </scsc-utility-bar>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California \xB7 County of Santa Clara"
    logoSrc="scsc-seal.png"
    contained
  />
  <scsc-primary-nav slot="nav" [items]="nav" />

  <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-8 scsc-pad-page">
    <scsc-page-header
      title="Your jury service"
      display
      description="Summons for the week of Monday, October 19, 2026 \xB7 Downtown Superior Court"
    />

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      <div class="flex flex-col gap-6">
        <scsc-juror-status status="on-call" badgeId="4471892" group="12">
          <p class="mb-3 text-sm text-base-content/80">
            Check your reporting status after <strong>5:00 p.m. on Friday, October 16</strong>,
            here or by phone at (408) 882-2700.
          </p>
          <div class="flex flex-wrap gap-2">
            <a scsc-button size="sm" routerLink="instructions">
              <scsc-icon name="map-pin" size="sm" />
              Reporting instructions
            </a>
            <scsc-button variant="neutral" outline size="sm" (click)="postponeAsked.set(true)">
              <scsc-icon name="calendar-clock" size="sm" />
              Ask to postpone
            </scsc-button>
          </div>
        </scsc-juror-status>

        @if (postponeAsked()) {
          <scsc-alert status="info" title="You can postpone once, online">
            Pick a new week within the next six months. You\u2019ll get a confirmation email, and the
            new date replaces this summons.
          </scsc-alert>
        }

        <scsc-card title="Your service, step by step">
          <scsc-steps
            [steps]="steps"
            [current]="2"
            label="Jury service progress"
            class="mb-5"
          />
          <ol class="flex flex-col gap-4">
            @for (s of stages; track s.title) {
              <li class="flex gap-3">
                <span
                  class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  [class]="
                    s.state === 'done'
                      ? 'bg-success/15 text-success'
                      : s.state === 'current'
                        ? 'bg-primary text-primary-content'
                        : 'bg-base-200 text-base-content/70'
                  "
                >
                  <scsc-icon [name]="s.state === 'done' ? 'check' : 'circle'" size="xs" />
                </span>
                <div>
                  <p class="font-medium text-base-content">
                    {{ s.title }}
                    <span class="sr-only">
                      ({{
                        s.state === 'done'
                          ? 'done'
                          : s.state === 'current'
                            ? 'current step'
                            : 'coming up'
                      }})</span
                    >
                  </p>
                  <p class="text-sm tnum text-base-content/70">{{ s.when }}</p>
                  <p class="mt-0.5 text-sm text-base-content/80">{{ s.detail }}</p>
                </div>
              </li>
            }
          </ol>
        </scsc-card>
      </div>

      <aside class="flex flex-col gap-6" aria-label="Jury Services contact">
        <scsc-card title="Jury Services">
          <scsc-contact-block
            name="Jury Assembly Room, Downtown Superior Court"
            [address]="address"
            phone="(408) 882-2700"
          />
          <p class="mt-3 text-sm text-base-content/70">
            Phone lines: Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m.
          </p>
        </scsc-card>
        <scsc-card title="On the day">
          <ul class="flex flex-col gap-2 text-sm text-base-content/80">
            <li class="flex gap-2">
              <scsc-icon name="clock" size="sm" class="mt-0.5 shrink-0 text-primary" />
              Check in by 8:15 a.m. Security screening takes about 15 minutes.
            </li>
            <li class="flex gap-2">
              <scsc-icon name="id-card" size="sm" class="mt-0.5 shrink-0 text-primary" />
              Bring photo ID and this badge number.
            </li>
            <li class="flex gap-2">
              <scsc-icon name="train-front" size="sm" class="mt-0.5 shrink-0 text-primary" />
              Light rail stops one block away, at Santa Clara station.
            </li>
          </ul>
        </scsc-card>
      </aside>
    </div>

    <scsc-section heading="Questions jurors ask">
      <div class="flex max-w-3xl flex-col gap-2">
        <scsc-accordion-item title="How do I know if I have to report?" name="jury-faq" open>
          After 5:00 p.m. the court day before your service, this page shows either \u201CReport\u201D
          with a time and place or \u201COn call\u201D with the next time to check. The phone line gives
          the same information.
        </scsc-accordion-item>
        <scsc-accordion-item title="Can my employer stop me from serving?" name="jury-faq">
          No. California law protects your job while you serve. Your employer may ask for proof
          of service: print it from this page after each day.
        </scsc-accordion-item>
        <scsc-accordion-item title="Will I be paid?" name="jury-faq">
          Jurors are paid for each day of service after the first, plus mileage one way. Payment
          is mailed within about 30 days after your service ends.
        </scsc-accordion-item>
        <scsc-accordion-item title="I need an accommodation or an interpreter" name="jury-faq">
          Tell Jury Services as soon as you can. Jurors who need a disability accommodation, or
          who are not fluent in English, should call before the week of service.
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
    backToTop
  />
</scsc-portal-shell>
`}}[`jury-portal`],layout:`page`,height:`52rem`}];export{ee as DEMOS};