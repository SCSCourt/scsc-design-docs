import{An as XN,Ar as ja,Er as hr,Es as sD,H as FN,Ki as ye,Lt as ON,Ms as uc,Na as Jb,Pi as wN,Tt as MN,Vr as mN,Xa as Pv,Xi as zN,Yo as iD,Zi as za,Zo as i_,_s as o_,bo as Y_,cs as lc,in as Ta,ms as nu,ni as qP,pi as sn,ra as Af,t as $E,ta as $f,va as G_,vi as tP,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var U=(n,o)=>o.link;function H(n,o){if(n&1&&(Ga(0,`li`)(1,`a`,14),uc(2,`scsc-icon`,15),G_(3),Lf()()),n&2){let a=o.$implicit;Jb(),Pv(`routerLink`,a.link),Jb(),Pv(`name`,a.icon),Jb(),$f(` `,a.label,` `)}}var C=class n{query=q(``);searched=q(``);nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`efile`},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];popular=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Pay a fee`,icon:`credit-card`,link:`fees`},{label:`Contact the court`,icon:`phone`,link:`help`}];static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-error-pages-404-template`]],decls:20,vars:4,consts:[[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[`routerLink`,`sign-in`,1,`inline-flex`,`items-center`,`gap-1`,`hover:underline`],[`name`,`log-in`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`w-full`,`max-w-3xl`,`scsc-pad-page`],[`kind`,`404`,`message`,`The page may have moved, or the link may be out of date. Search the site, or start from one of the pages below.`],[1,`flex`,`flex-col`,`items-center`,`gap-6`],[`placeholder`,`Search the court website`,1,`w-full`,`max-w-md`,3,`valueChange`,`search`,`value`],[`role`,`status`,1,`min-h-5`,`text-sm`,`text-base-content/70`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`],[`slot`,`footer`],[3,`links`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`routerLink`],[`size`,`sm`,3,`name`]],template:function(a,r){a&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`a`,2),uc(5,`scsc-icon`,3),G_(6,` Sign in `),Lf()(),uc(7,`scsc-masthead`,4)(8,`scsc-primary-nav`,5),Ga(9,`div`,6)(10,`scsc-error-state`,7)(11,`div`,8)(12,`scsc-search-input`,9),sD(`valueChange`,function(S){return Y_(r.query,S)||(r.query=S),S}),lc(`search`,function(S){return r.searched.set(S)}),Lf(),Ga(13,`p`,10),G_(14),Lf(),Ga(15,`ul`,11),o_(16,H,4,3,`li`,null,U),Lf()()()(),Ga(18,`scsc-footer`,12),uc(19,`scsc-legal-bar`,13),Lf()()),a&2&&(Jb(8),Pv(`items`,r.nav),Jb(4),iD(`value`,r.query),Jb(2),$f(` `,r.searched()?`Searching for “`+r.searched()+`”…`:``,` `),Jb(2),i_(r.popular),Jb(3),Pv(`links`,r.legalLinks))},dependencies:[nu,$E,tP,XN,ye,hr,FN,MN,ON,Ta,zN],encapsulation:2})};var w=class n{retrying=q(!1);retry(){this.retrying.set(!0),setTimeout(()=>this.retrying.set(!1),1500)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-error-pages-500-template`]],decls:20,vars:2,consts:[[`maxWidth`,`36rem`],[`slot`,`header`,1,`flex`,`flex-col`,`items-center`,`gap-2`],[`src`,`scsc-seal.png`,`size`,`md`,`alt`,``],[1,`font-display`,`text-lg`,`font-semibold`,`text-primary`],[`kind`,`500`,`message`,`The court’s system couldn’t finish your request. Nothing was filed or charged. Try again in a few minutes.`],[1,`flex`,`flex-col`,`items-center`,`gap-4`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`],[3,`click`,`loading`],[`name`,`refresh-cw`,`size`,`sm`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`routerLink`,`home`],[`role`,`status`,1,`text-sm`,`text-base-content/70`],[1,`rounded-field`,`bg-base-200`,`px-3`,`py-2`,`text-sm`,`text-base-content/80`],[1,`font-semibold`,`tnum`]],template:function(a,r){a&1&&(Ga(0,`scsc-focused-shell`,0)(1,`div`,1),uc(2,`scsc-seal`,2),Ga(3,`span`,3),G_(4,`Court Access Portal`),Lf()(),Ga(5,`scsc-card`)(6,`scsc-error-state`,4)(7,`div`,5)(8,`div`,6)(9,`scsc-button`,7),lc(`click`,function(){return r.retry()}),uc(10,`scsc-icon`,8),G_(11,` Try again `),Lf(),Ga(12,`a`,9),G_(13,`Go to the home page`),Lf()(),Ga(14,`p`,10),G_(15),Lf(),Ga(16,`p`,11),G_(17,` If it keeps happening, call (408) 882-2100 and give this reference: `),Ga(18,`span`,12),G_(19,`ERR-7Q4M-2931`),Lf()()()()()()),a&2&&(Jb(9),Pv(`loading`,r.retrying()),Jb(6),$f(` `,r.retrying()?`Trying again…`:``,` `))},dependencies:[nu,sn,$E,mN,tP,wN,ye,ja],encapsulation:2})};var E=class n{address=`191 N. First Street
San Jos\xE9, CA 95113`;static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-error-pages-maintenance-template`]],decls:24,vars:1,consts:[[`maxWidth`,`38rem`],[`slot`,`header`,1,`flex`,`flex-col`,`items-center`,`gap-2`],[`src`,`scsc-seal.png`,`size`,`md`,`alt`,``],[1,`font-display`,`text-lg`,`font-semibold`,`text-primary`],[`kind`,`maintenance`,`title`,`e-Filing is down for maintenance`,`message`,`We’re upgrading the e-Filing system. It will be back by 6:00 a.m. on Sunday, October 4, 2026.`],[1,`flex`,`flex-col`,`gap-4`,`text-left`],[`status`,`info`,`title`,`Deadlines are extended`],[1,`mb-2`,`text-sm`,`font-semibold`,`text-base-content`],[1,`list-disc`,`space-y-1`,`pl-5`,`text-sm`,`text-base-content/80`],[`name`,`Civil Clerk’s Office, Downtown Superior Court`,`phone`,`(408) 882-2100`,3,`address`]],template:function(a,r){a&1&&(Ga(0,`scsc-focused-shell`,0)(1,`div`,1),uc(2,`scsc-seal`,2),Ga(3,`span`,3),G_(4,`Court Access Portal`),Lf()(),Ga(5,`scsc-card`)(6,`scsc-error-state`,4)(7,`div`,5)(8,`scsc-alert`,6),G_(9,` Documents due while e-Filing is unavailable are timely if filed by the end of the next court day it is available. `),Lf(),Ga(10,`div`)(11,`h2`,7),G_(12,`Still available`),Lf(),Ga(13,`ul`,8)(14,`li`),G_(15,`Case search and the court calendar`),Lf(),Ga(16,`li`),G_(17,`Paying fees and traffic citations`),Lf(),Ga(18,`li`),G_(19,`Jury check-in by phone at (408) 882-2700`),Lf()()(),Ga(20,`div`)(21,`h2`,7),G_(22,`File in person`),Lf(),uc(23,`scsc-contact-block`,9),Lf()()()()()),a&2&&(Jb(23),Pv(`address`,r.address))},dependencies:[za,mN,qP,tP,wN,ja],encapsulation:2})};var P=class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-error-pages-session-expired-template`]],decls:20,vars:0,consts:[[`maxWidth`,`32rem`],[`slot`,`header`,1,`flex`,`flex-col`,`items-center`,`gap-2`],[`src`,`scsc-seal.png`,`size`,`md`,`alt`,``],[1,`font-display`,`text-lg`,`font-semibold`,`text-primary`],[`icon`,`timer-off`,`kind`,`maintenance`,`title`,`You were signed out`,`message`,`For your security, we sign you out after 20 minutes without activity.`],[1,`flex`,`flex-col`,`items-center`,`gap-4`],[1,`flex`,`items-start`,`gap-2`,`rounded-field`,`bg-base-200`,`px-3`,`py-2`,`text-left`,`text-sm`],[`name`,`save`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[1,`font-medium`,`tnum`],[`scsc-button`,``,`routerLink`,`sign-in`],[`name`,`log-in`,`size`,`sm`],[`routerLink`,`home`,1,`text-sm`,`font-medium`,`text-primary`,`hover:underline`]],template:function(a,r){a&1&&(Ga(0,`scsc-focused-shell`,0)(1,`div`,1),uc(2,`scsc-seal`,2),Ga(3,`span`,3),G_(4,`Court Access Portal`),Lf()(),Ga(5,`scsc-card`)(6,`scsc-error-state`,4)(7,`div`,5)(8,`p`,6),uc(9,`scsc-icon`,7),Ga(10,`span`),G_(11,`Your draft filing in case `),Ga(12,`span`,8),G_(13,`24CV012345`),Lf(),G_(14,` was saved at 2:14 PM. Sign in to pick up where you left off.`),Lf()(),Ga(15,`a`,9),uc(16,`scsc-icon`,10),G_(17,` Sign in again `),Lf(),Ga(18,`a`,11),G_(19,`Continue without signing in`),Lf()()()()())},dependencies:[nu,$E,mN,tP,wN,ye,ja],encapsulation:2})};var v={"error-pages-404":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButtonLink,
  ScscErrorState,
  ScscFooter,
  ScscIcon,
  ScscLegalBar,
  type ScscLegalLink,
  ScscMasthead,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscSearchInput,
  ScscUtilityBar,
} from '@scscourt/design';

/** Page not found, inside the portal shell so the navigation still works. */
@Component({
  selector: 'app-error-pages-404-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscButtonLink,
    ScscErrorState,
    ScscFooter,
    ScscIcon,
    ScscLegalBar,
    ScscMasthead,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscSearchInput,
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

      <div class="mx-auto w-full max-w-3xl scsc-pad-page">
        <scsc-error-state
          kind="404"
          message="The page may have moved, or the link may be out of date. Search the site, or start from one of the pages below."
        >
          <div class="flex flex-col items-center gap-6">
            <scsc-search-input
              [(value)]="query"
              placeholder="Search the court website"
              class="w-full max-w-md"
              (search)="searched.set($event)"
            />
            <p class="min-h-5 text-sm text-base-content/70" role="status">
              {{ searched() ? 'Searching for \u201C' + searched() + '\u201D\u2026' : '' }}
            </p>
            <ul class="flex flex-wrap justify-center gap-2">
              @for (l of popular; track l.link) {
                <li>
                  <a scsc-button variant="neutral" outline size="sm" [routerLink]="l.link">
                    <scsc-icon [name]="l.icon" size="sm" />
                    {{ l.label }}
                  </a>
                </li>
              }
            </ul>
          </div>
        </scsc-error-state>
      </div>

      <scsc-footer slot="footer">
        <scsc-legal-bar [links]="legalLinks" />
      </scsc-footer>
    </scsc-portal-shell>
  \`,
})
export class ErrorPages404Template {
  protected readonly query = signal('');
  protected readonly searched = signal('');

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
  protected readonly popular = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: 'search' },
    { label: 'Pay a fee', icon: 'credit-card', link: 'fees' },
    { label: 'Contact the court', icon: 'phone', link: 'help' },
  ];
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

  <div class="mx-auto w-full max-w-3xl scsc-pad-page">
    <scsc-error-state
      kind="404"
      message="The page may have moved, or the link may be out of date. Search the site, or start from one of the pages below."
    >
      <div class="flex flex-col items-center gap-6">
        <scsc-search-input
          [(value)]="query"
          placeholder="Search the court website"
          class="w-full max-w-md"
          (search)="searched.set($event)"
        />
        <p class="min-h-5 text-sm text-base-content/70" role="status">
          {{ searched() ? 'Searching for \u201C' + searched() + '\u201D\u2026' : '' }}
        </p>
        <ul class="flex flex-wrap justify-center gap-2">
          @for (l of popular; track l.link) {
            <li>
              <a scsc-button variant="neutral" outline size="sm" [routerLink]="l.link">
                <scsc-icon [name]="l.icon" size="sm" />
                {{ l.label }}
              </a>
            </li>
          }
        </ul>
      </div>
    </scsc-error-state>
  </div>

  <scsc-footer slot="footer">
    <scsc-legal-bar [links]="legalLinks" />
  </scsc-footer>
</scsc-portal-shell>
`},"error-pages-500":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButton,
  ScscButtonLink,
  ScscCard,
  ScscErrorState,
  ScscFocusedShell,
  ScscIcon,
  ScscSeal,
} from '@scscourt/design';

/** Server error: a reference code for the help desk, a retry, and a way out. */
@Component({
  selector: 'app-error-pages-500-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscButton,
    ScscButtonLink,
    ScscCard,
    ScscErrorState,
    ScscFocusedShell,
    ScscIcon,
    ScscSeal,
  ],
  template: \`
    <scsc-focused-shell maxWidth="36rem">
      <div slot="header" class="flex flex-col items-center gap-2">
        <scsc-seal src="scsc-seal.png" size="md" alt="" />
        <span class="font-display text-lg font-semibold text-primary">Court Access Portal</span>
      </div>

      <scsc-card>
        <scsc-error-state
          kind="500"
          message="The court\u2019s system couldn\u2019t finish your request. Nothing was filed or charged. Try again in a few minutes."
        >
          <div class="flex flex-col items-center gap-4">
            <div class="flex flex-wrap justify-center gap-2">
              <scsc-button [loading]="retrying()" (click)="retry()">
                <scsc-icon name="refresh-cw" size="sm" />
                Try again
              </scsc-button>
              <a scsc-button variant="neutral" outline routerLink="home">Go to the home page</a>
            </div>
            <p class="text-sm text-base-content/70" role="status">
              {{ retrying() ? 'Trying again\u2026' : '' }}
            </p>
            <p class="rounded-field bg-base-200 px-3 py-2 text-sm text-base-content/80">
              If it keeps happening, call (408) 882-2100 and give this reference:
              <span class="font-semibold tnum">ERR-7Q4M-2931</span>
            </p>
          </div>
        </scsc-error-state>
      </scsc-card>
    </scsc-focused-shell>
  \`,
})
export class ErrorPages500Template {
  protected readonly retrying = signal(false);

  protected retry(): void {
    this.retrying.set(true);
    setTimeout(() => this.retrying.set(false), 1500);
  }
}
`,html:`<scsc-focused-shell maxWidth="36rem">
  <div slot="header" class="flex flex-col items-center gap-2">
    <scsc-seal src="scsc-seal.png" size="md" alt="" />
    <span class="font-display text-lg font-semibold text-primary">Court Access Portal</span>
  </div>

  <scsc-card>
    <scsc-error-state
      kind="500"
      message="The court\u2019s system couldn\u2019t finish your request. Nothing was filed or charged. Try again in a few minutes."
    >
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-wrap justify-center gap-2">
          <scsc-button [loading]="retrying()" (click)="retry()">
            <scsc-icon name="refresh-cw" size="sm" />
            Try again
          </scsc-button>
          <a scsc-button variant="neutral" outline routerLink="home">Go to the home page</a>
        </div>
        <p class="text-sm text-base-content/70" role="status">
          {{ retrying() ? 'Trying again\u2026' : '' }}
        </p>
        <p class="rounded-field bg-base-200 px-3 py-2 text-sm text-base-content/80">
          If it keeps happening, call (408) 882-2100 and give this reference:
          <span class="font-semibold tnum">ERR-7Q4M-2931</span>
        </p>
      </div>
    </scsc-error-state>
  </scsc-card>
</scsc-focused-shell>
`},"error-pages-maintenance":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscAlert,
  ScscCard,
  ScscContactBlock,
  ScscErrorState,
  ScscFocusedShell,
  ScscSeal,
} from '@scscourt/design';

/** Scheduled maintenance: when it ends, what still works, and where to go meanwhile. */
@Component({
  selector: 'app-error-pages-maintenance-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscCard, ScscContactBlock, ScscErrorState, ScscFocusedShell, ScscSeal],
  template: \`
    <scsc-focused-shell maxWidth="38rem">
      <div slot="header" class="flex flex-col items-center gap-2">
        <scsc-seal src="scsc-seal.png" size="md" alt="" />
        <span class="font-display text-lg font-semibold text-primary">Court Access Portal</span>
      </div>

      <scsc-card>
        <scsc-error-state
          kind="maintenance"
          title="e-Filing is down for maintenance"
          message="We\u2019re upgrading the e-Filing system. It will be back by 6:00 a.m. on Sunday, October 4, 2026."
        >
          <div class="flex flex-col gap-4 text-left">
            <scsc-alert status="info" title="Deadlines are extended">
              Documents due while e-Filing is unavailable are timely if filed by the end of the next
              court day it is available.
            </scsc-alert>
            <div>
              <h2 class="mb-2 text-sm font-semibold text-base-content">Still available</h2>
              <ul class="list-disc space-y-1 pl-5 text-sm text-base-content/80">
                <li>Case search and the court calendar</li>
                <li>Paying fees and traffic citations</li>
                <li>Jury check-in by phone at (408) 882-2700</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-2 text-sm font-semibold text-base-content">File in person</h2>
              <scsc-contact-block
                name="Civil Clerk\u2019s Office, Downtown Superior Court"
                [address]="address"
                phone="(408) 882-2100"
              />
            </div>
          </div>
        </scsc-error-state>
      </scsc-card>
    </scsc-focused-shell>
  \`,
})
export class ErrorPagesMaintenanceTemplate {
  protected readonly address = '191 N. First Street\\nSan Jos\xE9, CA 95113';
}
`,html:`<scsc-focused-shell maxWidth="38rem">
  <div slot="header" class="flex flex-col items-center gap-2">
    <scsc-seal src="scsc-seal.png" size="md" alt="" />
    <span class="font-display text-lg font-semibold text-primary">Court Access Portal</span>
  </div>

  <scsc-card>
    <scsc-error-state
      kind="maintenance"
      title="e-Filing is down for maintenance"
      message="We\u2019re upgrading the e-Filing system. It will be back by 6:00 a.m. on Sunday, October 4, 2026."
    >
      <div class="flex flex-col gap-4 text-left">
        <scsc-alert status="info" title="Deadlines are extended">
          Documents due while e-Filing is unavailable are timely if filed by the end of the next
          court day it is available.
        </scsc-alert>
        <div>
          <h2 class="mb-2 text-sm font-semibold text-base-content">Still available</h2>
          <ul class="list-disc space-y-1 pl-5 text-sm text-base-content/80">
            <li>Case search and the court calendar</li>
            <li>Paying fees and traffic citations</li>
            <li>Jury check-in by phone at (408) 882-2700</li>
          </ul>
        </div>
        <div>
          <h2 class="mb-2 text-sm font-semibold text-base-content">File in person</h2>
          <scsc-contact-block
            name="Civil Clerk\u2019s Office, Downtown Superior Court"
            [address]="address"
            phone="(408) 882-2100"
          />
        </div>
      </div>
    </scsc-error-state>
  </scsc-card>
</scsc-focused-shell>
`},"error-pages-session-expired":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButtonLink,
  ScscCard,
  ScscErrorState,
  ScscFocusedShell,
  ScscIcon,
  ScscSeal,
} from '@scscourt/design';

/** Signed out after inactivity: reassure that the draft is safe, then sign in again. */
@Component({
  selector: 'app-error-pages-session-expired-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscButtonLink,
    ScscCard,
    ScscErrorState,
    ScscFocusedShell,
    ScscIcon,
    ScscSeal,
  ],
  template: \`
    <scsc-focused-shell maxWidth="32rem">
      <div slot="header" class="flex flex-col items-center gap-2">
        <scsc-seal src="scsc-seal.png" size="md" alt="" />
        <span class="font-display text-lg font-semibold text-primary">Court Access Portal</span>
      </div>

      <scsc-card>
        <!-- The maintenance preset shows no error code; title, message and icon replace the rest. -->
        <scsc-error-state
          icon="timer-off"
          kind="maintenance"
          title="You were signed out"
          message="For your security, we sign you out after 20 minutes without activity."
        >
          <div class="flex flex-col items-center gap-4">
            <p class="flex items-start gap-2 rounded-field bg-base-200 px-3 py-2 text-left text-sm">
              <scsc-icon name="save" size="sm" class="mt-0.5 shrink-0 text-primary" />
              <span
                >Your draft filing in case <span class="font-medium tnum">24CV012345</span> was
                saved at 2:14 PM. Sign in to pick up where you left off.</span
              >
            </p>
            <a scsc-button routerLink="sign-in">
              <scsc-icon name="log-in" size="sm" />
              Sign in again
            </a>
            <a routerLink="home" class="text-sm font-medium text-primary hover:underline"
              >Continue without signing in</a
            >
          </div>
        </scsc-error-state>
      </scsc-card>
    </scsc-focused-shell>
  \`,
})
export class ErrorPagesSessionExpiredTemplate {}
`,html:`<scsc-focused-shell maxWidth="32rem">
  <div slot="header" class="flex flex-col items-center gap-2">
    <scsc-seal src="scsc-seal.png" size="md" alt="" />
    <span class="font-display text-lg font-semibold text-primary">Court Access Portal</span>
  </div>

  <scsc-card>
    <!-- The maintenance preset shows no error code; title, message and icon replace the rest. -->
    <scsc-error-state
      icon="timer-off"
      kind="maintenance"
      title="You were signed out"
      message="For your security, we sign you out after 20 minutes without activity."
    >
      <div class="flex flex-col items-center gap-4">
        <p class="flex items-start gap-2 rounded-field bg-base-200 px-3 py-2 text-left text-sm">
          <scsc-icon name="save" size="sm" class="mt-0.5 shrink-0 text-primary" />
          <span
            >Your draft filing in case <span class="font-medium tnum">24CV012345</span> was
            saved at 2:14 PM. Sign in to pick up where you left off.</span
          >
        </p>
        <a scsc-button routerLink="sign-in">
          <scsc-icon name="log-in" size="sm" />
          Sign in again
        </a>
        <a routerLink="home" class="text-sm font-medium text-primary hover:underline"
          >Continue without signing in</a
        >
      </div>
    </scsc-error-state>
  </scsc-card>
</scsc-focused-shell>
`}};var he=[{id:`error-pages-404`,title:`Page not found (404)`,description:`Inside the portal shell, so navigation still works: a site search and the most-used destinations.`,component:C,source:v[`error-pages-404`],layout:`page`,height:`40rem`},{id:`error-pages-500`,title:`Something went wrong (500)`,description:`Says nothing was filed or charged, offers a retry, and gives a reference code for the help desk.`,component:w,source:v[`error-pages-500`],layout:`page`,height:`36rem`},{id:`error-pages-maintenance`,title:`Scheduled maintenance`,description:`When the service returns, the extended-deadline rule, what still works, and where to file in person.`,component:E,source:v[`error-pages-maintenance`],layout:`page`,height:`44rem`},{id:`error-pages-session-expired`,title:`Session expired`,description:`Explains the timeout, reassures that the draft was saved, and offers to sign in again.`,component:P,source:v[`error-pages-session-expired`],layout:`page`,height:`36rem`}];export{he as DEMOS};