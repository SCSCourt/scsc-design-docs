import{Aa as It,An as XN,Bt as PE,Er as hr,Go as g,Gt as QN,H as FN,Hs as y_,Ki as ye,Lo as d_,Lt as ON,Ms as uc,Na as Jb,No as cc,Tt as MN,Vr as mN,Xa as Pv,Xi as zN,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,ka as Ig,ms as nu,ni as qP,nn as TN,qi as yr,ra as Af,ta as $f,us as my,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var J=(l,i)=>i.id;var $=(l,i)=>i.code;function K(l,i){if(l&1){let n=d_();Ga(0,`li`)(1,`a`,27),lc(`click`,function(V){let j=Eg(n).$implicit,q=y_();return Ig(q.jump(V,j.id))}),G_(2),Lf()()}if(l&2){let n=i.$implicit;Jb(),Pv(`href`,`#`+n.id,my),Jb(),nD(n.title)}}function Y(l,i){if(l&1&&(Ga(0,`li`)(1,`span`,28),G_(2),Lf(),G_(3),Lf()),l&2){let n=i.$implicit;Jb(),cc(`lang`,n.code)(`dir`,n.dir||null),Jb(),nD(n.native),Jb(),$f(` — `,n.english,` `)}}var se=[{id:`language-access`,title:`Language access`,description:`Free interpreters, languages in their own script (with lang and dir), how to ask, and the machine translation notice. Sample copy: court counsel must approve the wording.`,component:class l{host=g(It);address=`191 N. First Street
San Jos\xE9, CA 95113`;nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];trail=[{label:`Home`,link:`home`},{label:`Language access`}];sections=[{id:`language-access-interpreters`,title:`Free interpreters`},{id:`language-access-languages`,title:`Help in your language`},{id:`language-access-request`,title:`How to ask for an interpreter`},{id:`language-access-translation`,title:`Translated pages`},{id:`language-access-complaints`,title:`Concerns about language access`}];languages=[{code:`es`,native:`Español`,english:`Spanish`},{code:`vi`,native:`Tiếng Việt`,english:`Vietnamese`},{code:`zh-Hant`,native:`中文`,english:`Chinese`},{code:`ko`,native:`한국어`,english:`Korean`},{code:`tl`,native:`Tagalog`,english:`Tagalog`},{code:`pt`,native:`Português`,english:`Portuguese`},{code:`fa`,native:`فارسی`,english:`Persian`,dir:`rtl`},{code:`ru`,native:`Русский`,english:`Russian`}];jump(i,n){let r=this.host.nativeElement.querySelector(`#${n}`);r&&(i.preventDefault(),r.scrollIntoView?.({block:`start`}),r.focus({preventScroll:!0}))}static ɵfac=function(n){return new(n||l)};static ɵcmp=Af({type:l,selectors:[[`app-language-access-template`]],decls:58,vars:4,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`sign-in`,1,`inline-flex`,`items-center`,`gap-1`,`hover:underline`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`w-full`,`max-w-[90rem]`,`scsc-pad-page`],[`title`,`Language access`,`display`,``,`description`,`Free interpreters for court proceedings, translated forms and help in your language.`],[`slot`,`breadcrumb`,3,`items`],[1,`mt-2`,`text-sm`,`text-base-content/70`],[`datetime`,`2026-07-30`],[1,`mt-8`,`grid`,`items-start`,`gap-8`,`lg:grid-cols-[15rem_minmax(0,1fr)]`,`lg:gap-12`],[`aria-labelledby`,`language-access-toc`,1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`,`lg:sticky`,`lg:top-4`],[`id`,`language-access-toc`,1,`text-eyebrow`,`font-semibold`,`uppercase`,`tracking-wide`,`text-base-content/70`],[1,`mt-2`,`flex`,`flex-col`,`gap-0.5`,`text-sm`],[1,`flex`,`min-w-0`,`flex-col`,`gap-8`],[`id`,`language-access-interpreters`,`tabindex`,`-1`],[`id`,`language-access-languages`,`tabindex`,`-1`],[`id`,`language-access-request`,`tabindex`,`-1`],[`id`,`language-access-translation`,`tabindex`,`-1`],[`preset`,`translation`,`variant`,`inline`],[`id`,`language-access-complaints`,`tabindex`,`-1`],[`title`,`Language Access Coordinator`,1,`max-w-xl`],[`name`,`Interpreter Services, Downtown Superior Court`,`phone`,`(408) 882-2100`,3,`address`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`slot`,`footer`],[3,`links`],[1,`block`,`rounded-field`,`px-2`,`py-1.5`,`text-base-content/80`,`hover:bg-base-200`,`hover:text-primary`,3,`click`,`href`],[1,`font-medium`]],template:function(n,r){n&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),uc(5,`scsc-icon`,3),G_(6,` Sign in `),Lf()(),uc(7,`scsc-masthead`,4)(8,`scsc-primary-nav`,5),Ga(9,`div`,6)(10,`scsc-page-header`,7),uc(11,`scsc-breadcrumb`,8),Ga(12,`p`,9),G_(13,` Last updated `),Ga(14,`time`,10),G_(15,`July 30, 2026`),Lf()()(),Ga(16,`div`,11)(17,`nav`,12)(18,`h2`,13),G_(19,` On this page `),Lf(),Ga(20,`ol`,14),o_(21,K,3,2,`li`,null,J),Lf()(),Ga(23,`article`,15)(24,`scsc-prose`)(25,`h2`,16),G_(26,`Free interpreters`),Lf(),Ga(27,`p`),G_(28,` The court provides interpreters free of charge in every case type, for hearings and for court-ordered services such as mediation. You don’t have to bring a friend or family member to interpret. `),Lf(),Ga(29,`h2`,17),G_(30,`Help in your language`),Lf(),Ga(31,`ul`),o_(32,Y,4,4,`li`,null,$),Lf(),Ga(34,`h2`,18),G_(35,`How to ask for an interpreter`),Lf(),Ga(36,`ol`)(37,`li`),G_(38,` Tell the clerk when you file, or fill in the court’s interpreter request form. `),Lf(),Ga(39,`li`),G_(40,`Ask at least five court days before your hearing if you can.`),Lf(),Ga(41,`li`),G_(42,` On the day, check in with the courtroom clerk; the interpreter will find you. `),Lf()(),Ga(43,`h2`,19),G_(44,`Translated pages`),Lf(),uc(45,`scsc-legal-notice`,20),Ga(46,`p`),G_(47,` Key pages and many Judicial Council forms are available in Spanish, Vietnamese, Chinese and Korean. Only the English version of a form can be filed. `),Lf(),Ga(48,`h2`,21),G_(49,`Concerns about language access`),Lf(),Ga(50,`p`),G_(51,` If you did not get the language help you needed, tell the Language Access Coordinator. You can write in your own language. `),Lf()(),Ga(52,`scsc-card`,22),uc(53,`scsc-contact-block`,23),Ga(54,`p`,24),G_(55,` Monday–Friday, 8:30 a.m.–4:00 p.m., except court holidays. `),Lf()()()()(),Ga(56,`scsc-footer`,25),uc(57,`scsc-legal-bar`,26),Lf()()),n&2&&(Jb(8),Pv(`items`,r.nav),Jb(3),Pv(`items`,r.trail),Jb(10),i_(r.sections),Jb(11),i_(r.languages),Jb(21),Pv(`address`,r.address),Jb(4),Pv(`links`,r.legalLinks))},dependencies:[nu,QN,mN,qP,XN,ye,hr,yr,FN,TN,MN,ON,PE,zN],encapsulation:2})},source:{"language-access":{ts:`import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBreadcrumb,
  type ScscBreadcrumbItem,
  ScscCard,
  ScscContactBlock,
  ScscFooter,
  ScscIcon,
  ScscLegalBar,
  type ScscLegalLink,
  ScscLegalNotice,
  ScscMasthead,
  ScscPageHeader,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscProse,
  ScscUtilityBar,
} from '@scscourt/design';

/**
 * The legal page layout shared by privacy, terms, accessibility and language access: a prose
 * article, a sticky "On this page" list, the last-updated date and a contact.
 * SAMPLE COPY: court counsel must approve the wording before it is published.
 */
@Component({
  selector: 'app-language-access-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscBreadcrumb,
    ScscCard,
    ScscContactBlock,
    ScscFooter,
    ScscIcon,
    ScscLegalBar,
    ScscLegalNotice,
    ScscMasthead,
    ScscPageHeader,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscProse,
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

      <div class="mx-auto w-full max-w-[90rem] scsc-pad-page">
        <scsc-page-header
          title="Language access"
          display
          description="Free interpreters for court proceedings, translated forms and help in your language."
        >
          <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
          <p class="mt-2 text-sm text-base-content/70">
            Last updated <time datetime="2026-07-30">July 30, 2026</time>
          </p>
        </scsc-page-header>

        <div class="mt-8 grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          <nav
            aria-labelledby="language-access-toc"
            class="rounded-box border border-base-300 bg-base-100 p-4 lg:sticky lg:top-4"
          >
            <h2
              id="language-access-toc"
              class="text-eyebrow font-semibold uppercase tracking-wide text-base-content/70"
            >
              On this page
            </h2>
            <ol class="mt-2 flex flex-col gap-0.5 text-sm">
              @for (s of sections; track s.id) {
                <li>
                  <a
                    [href]="'#' + s.id"
                    class="block rounded-field px-2 py-1.5 text-base-content/80 hover:bg-base-200 hover:text-primary"
                    (click)="jump($event, s.id)"
                    >{{ s.title }}</a
                  >
                </li>
              }
            </ol>
          </nav>

          <article class="flex min-w-0 flex-col gap-8">
            <scsc-prose>
              <h2 id="language-access-interpreters" tabindex="-1">Free interpreters</h2>
              <p>
                The court provides interpreters free of charge in every case type, for hearings and
                for court-ordered services such as mediation. You don\u2019t have to bring a friend or
                family member to interpret.
              </p>
              <h2 id="language-access-languages" tabindex="-1">Help in your language</h2>
              <ul>
                @for (l of languages; track l.code) {
                  <li>
                    <span class="font-medium" [attr.lang]="l.code" [attr.dir]="l.dir || null">{{
                      l.native
                    }}</span>
                    \u2014 {{ l.english }}
                  </li>
                }
              </ul>
              <h2 id="language-access-request" tabindex="-1">How to ask for an interpreter</h2>
              <ol>
                <li>
                  Tell the clerk when you file, or fill in the court\u2019s interpreter request form.
                </li>
                <li>Ask at least five court days before your hearing if you can.</li>
                <li>
                  On the day, check in with the courtroom clerk; the interpreter will find you.
                </li>
              </ol>
              <h2 id="language-access-translation" tabindex="-1">Translated pages</h2>
              <scsc-legal-notice preset="translation" variant="inline" />
              <p>
                Key pages and many Judicial Council forms are available in Spanish, Vietnamese,
                Chinese and Korean. Only the English version of a form can be filed.
              </p>
              <h2 id="language-access-complaints" tabindex="-1">Concerns about language access</h2>
              <p>
                If you did not get the language help you needed, tell the Language Access
                Coordinator. You can write in your own language.
              </p>
            </scsc-prose>

            <scsc-card title="Language Access Coordinator" class="max-w-xl">
              <scsc-contact-block
                name="Interpreter Services, Downtown Superior Court"
                [address]="address"
                phone="(408) 882-2100"
              />
              <p class="mt-3 text-sm text-base-content/70">
                Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m., except court holidays.
              </p>
            </scsc-card>
          </article>
        </div>
      </div>

      <scsc-footer slot="footer">
        <scsc-legal-bar [links]="legalLinks" />
      </scsc-footer>
    </scsc-portal-shell>
  \`,
})
export class LanguageAccessTemplate {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly address = '191 N. First Street\\nSan Jos\xE9, CA 95113';
  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: 'search' },
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
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Home', link: 'home' },
    { label: 'Language access' },
  ];
  protected readonly sections = [
    { id: 'language-access-interpreters', title: 'Free interpreters' },
    { id: 'language-access-languages', title: 'Help in your language' },
    { id: 'language-access-request', title: 'How to ask for an interpreter' },
    { id: 'language-access-translation', title: 'Translated pages' },
    { id: 'language-access-complaints', title: 'Concerns about language access' },
  ];

  protected readonly languages = [
    { code: 'es', native: 'Espa\xF1ol', english: 'Spanish' },
    { code: 'vi', native: 'Ti\u1EBFng Vi\u1EC7t', english: 'Vietnamese' },
    { code: 'zh-Hant', native: '\u4E2D\u6587', english: 'Chinese' },
    { code: 'ko', native: '\uD55C\uAD6D\uC5B4', english: 'Korean' },
    { code: 'tl', native: 'Tagalog', english: 'Tagalog' },
    { code: 'pt', native: 'Portugu\xEAs', english: 'Portuguese' },
    { code: 'fa', native: '\u0641\u0627\u0631\u0633\u06CC', english: 'Persian', dir: 'rtl' },
    { code: 'ru', native: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439', english: 'Russian' },
  ];

  /** In-page links: scroll to the section and move focus to its heading. */
  protected jump(event: Event, id: string): void {
    const heading = this.host.nativeElement.querySelector<HTMLElement>(\`#\${id}\`);
    if (!heading) return;
    event.preventDefault();
    heading.scrollIntoView?.({ block: 'start' });
    heading.focus({ preventScroll: true });
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

  <div class="mx-auto w-full max-w-[90rem] scsc-pad-page">
    <scsc-page-header
      title="Language access"
      display
      description="Free interpreters for court proceedings, translated forms and help in your language."
    >
      <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
      <p class="mt-2 text-sm text-base-content/70">
        Last updated <time datetime="2026-07-30">July 30, 2026</time>
      </p>
    </scsc-page-header>

    <div class="mt-8 grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
      <nav
        aria-labelledby="language-access-toc"
        class="rounded-box border border-base-300 bg-base-100 p-4 lg:sticky lg:top-4"
      >
        <h2
          id="language-access-toc"
          class="text-eyebrow font-semibold uppercase tracking-wide text-base-content/70"
        >
          On this page
        </h2>
        <ol class="mt-2 flex flex-col gap-0.5 text-sm">
          @for (s of sections; track s.id) {
            <li>
              <a
                [href]="'#' + s.id"
                class="block rounded-field px-2 py-1.5 text-base-content/80 hover:bg-base-200 hover:text-primary"
                (click)="jump($event, s.id)"
                >{{ s.title }}</a
              >
            </li>
          }
        </ol>
      </nav>

      <article class="flex min-w-0 flex-col gap-8">
        <scsc-prose>
          <h2 id="language-access-interpreters" tabindex="-1">Free interpreters</h2>
          <p>
            The court provides interpreters free of charge in every case type, for hearings and
            for court-ordered services such as mediation. You don\u2019t have to bring a friend or
            family member to interpret.
          </p>
          <h2 id="language-access-languages" tabindex="-1">Help in your language</h2>
          <ul>
            @for (l of languages; track l.code) {
              <li>
                <span class="font-medium" [attr.lang]="l.code" [attr.dir]="l.dir || null">{{
                  l.native
                }}</span>
                \u2014 {{ l.english }}
              </li>
            }
          </ul>
          <h2 id="language-access-request" tabindex="-1">How to ask for an interpreter</h2>
          <ol>
            <li>
              Tell the clerk when you file, or fill in the court\u2019s interpreter request form.
            </li>
            <li>Ask at least five court days before your hearing if you can.</li>
            <li>
              On the day, check in with the courtroom clerk; the interpreter will find you.
            </li>
          </ol>
          <h2 id="language-access-translation" tabindex="-1">Translated pages</h2>
          <scsc-legal-notice preset="translation" variant="inline" />
          <p>
            Key pages and many Judicial Council forms are available in Spanish, Vietnamese,
            Chinese and Korean. Only the English version of a form can be filed.
          </p>
          <h2 id="language-access-complaints" tabindex="-1">Concerns about language access</h2>
          <p>
            If you did not get the language help you needed, tell the Language Access
            Coordinator. You can write in your own language.
          </p>
        </scsc-prose>

        <scsc-card title="Language Access Coordinator" class="max-w-xl">
          <scsc-contact-block
            name="Interpreter Services, Downtown Superior Court"
            [address]="address"
            phone="(408) 882-2100"
          />
          <p class="mt-3 text-sm text-base-content/70">
            Monday\u2013Friday, 8:30 a.m.\u20134:00 p.m., except court holidays.
          </p>
        </scsc-card>
      </article>
    </div>
  </div>

  <scsc-footer slot="footer">
    <scsc-legal-bar [links]="legalLinks" />
  </scsc-footer>
</scsc-portal-shell>
`}}[`language-access`],layout:`page`,height:`52rem`}];export{se as DEMOS};