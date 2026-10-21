import{$ as HN,Fr as kn,H as FN,Lt as ON,Ms as uc,Na as Jb,Rn as YF,Xa as Pv,Xi as zN,ei as pr,gn as VN,in as Ta,kt as NE,ms as nu,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var y=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-app-launcher-demo`]],decls:8,vars:0,consts:[[1,`flex`,`justify-end`],[`label`,`Open court apps`],[`routerLink`,`.`,1,`flex`,`items-center`,`gap-2`,`rounded-field`,`px-3`,`py-2`,`hover:bg-base-200`]],template:function(a,m){a&1&&(Ga(0,`div`,0)(1,`scsc-app-launcher`,1)(2,`a`,2),G_(3,`Notification Service`),Lf(),Ga(4,`a`,2),G_(5,`Venue`),Lf(),Ga(6,`a`,2),G_(7,`Fee Schedule`),Lf()()())},dependencies:[nu,YF],encapsulation:2})};var S=class o{venueLogo=`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='9' fill='%231e2a4a'/><text x='20' y='27' font-family='Georgia,serif' font-size='20' font-weight='bold' fill='%23c9a227' text-anchor='middle'>V</text></svg>`;static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-app-logo-demo`]],decls:17,vars:2,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-8`],[1,`flex`,`flex-col`,`items-center`,`gap-2`],[`iconName`,`building`,3,`logoUrl`],[`size`,`sm`],[`iconName`,`bell`],[`logoUrl`,`https://invalid.example/logo.png`,`iconName`,`gavel`],[3,`size`]],template:function(a,m){a&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-app-logo`,2),Ga(3,`scsc-text`,3),G_(4,`Venue`),Lf()(),Ga(5,`div`,1),uc(6,`scsc-app-logo`,4),Ga(7,`scsc-text`,3),G_(8,`Notification Service`),Lf()(),Ga(9,`div`,1),uc(10,`scsc-app-logo`,5),Ga(11,`scsc-text`,3),G_(12,`CPO`),Lf()(),Ga(13,`div`,1),uc(14,`scsc-app-logo`,6),Ga(15,`scsc-text`,3),G_(16,`Unknown app`),Lf()()()),a&2&&(Jb(2),Pv(`logoUrl`,m.venueLogo),Jb(12),Pv(`size`,28))},dependencies:[pr,NE],encapsulation:2})};var k=class o{nav=[{label:`Home`,link:`.`,exact:!0},{label:`Find a case`,link:`search`},{label:`Pay fees`,link:`fees`},{label:`Jury duty`,link:`jury`},{label:`Self-help`,link:`help`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-composed-demo`]],decls:19,vars:1,consts:[[1,`bg-base-100`],[`slot`,`start`],[`routerLink`,`.`,`lang`,`es`,`hreflang`,`es`,1,`link`,`link-hover`],[`routerLink`,`.`,1,`link`,`link-hover`],[`title`,`Court Access Portal`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`name`,`Maria Alvarez`,`email`,`m.alvarez@example.com`],[`type`,`button`],[1,`border-b`,`border-base-300`],[3,`items`],[`slot`,`end`,`placeholder`,`Search cases`]],template:function(a,m){a&1&&(Ga(0,`div`,0)(1,`scsc-utility-bar`)(2,`span`,1),G_(3,`An official website of the Superior Court of California, County of Santa Clara`),Lf(),Ga(4,`a`,2),G_(5,`Español`),Lf(),Ga(6,`a`,3),G_(7,`Help`),Lf()(),Ga(8,`scsc-masthead`,4)(9,`scsc-user-menu`,5)(10,`li`)(11,`button`,6),G_(12,`My cases`),Lf()(),Ga(13,`li`)(14,`button`,6),G_(15,`Sign out`),Lf()()()(),Ga(16,`div`,7)(17,`scsc-primary-nav`,8),uc(18,`scsc-search-input`,9),Lf()()()),a&2&&(Jb(17),Pv(`items`,m.nav))},dependencies:[nu,zN,FN,ON,VN,Ta],encapsulation:2})};var x=class o{nav=[{label:`Home`,icon:`house`,link:`.`,exact:!0},{label:`Online services`,children:[{heading:`Pay & request`,links:[{label:`Pay a traffic ticket`,link:`pay/traffic`,description:`By citation number`,icon:`court.traffic`},{label:`Pay court fees`,link:`pay/fees`,description:`Filing and copy fees`,icon:`court.payment`}]},{heading:`Cases & records`,links:[{label:`Case search`,link:`cases`,description:`By case number or party`,icon:`action.search`},{label:`Tentative rulings`,link:`rulings`,description:`Civil and probate`,icon:`court.ruling`}]},{heading:`Self-help`,links:[{label:`Find a form`,link:`forms`,icon:`file.document`},{label:`Judicial Council forms`,href:`https://www.courts.ca.gov/forms.htm`,external:!0,icon:`action.external-link`}]}],featured:{title:`Summoned for jury duty?`,description:`Confirm your service or ask for a new date online.`,linkLabel:`Go to jury services`,link:`jury`}},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`Help`,icon:`life-buoy`,link:`help`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-mega-menu-demo`]],decls:5,vars:1,consts:[[1,`min-h-screen`,`bg-base-200`],[1,`border-b`,`border-base-300`,`bg-base-100`],[3,`items`],[1,`p-6`,`text-sm`,`text-base-content/70`]],template:function(a,m){a&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-primary-nav`,2),Lf(),Ga(3,`main`,3),G_(4,` Open Online services: with a mouse it opens on hover; from the keyboard press Enter, or ArrowDown to land on the first link, then use the arrow keys. On a phone the items fold behind Menu. `),Lf()()),a&2&&(Jb(2),Pv(`items`,m.nav))},dependencies:[ON],encapsulation:2})};var C=class o{nav=[{label:`Home`,icon:`home`,link:`.`,exact:!0},{label:`Cases`,icon:`file-text`,link:`cases`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`Fees`,icon:`receipt`,link:`fees`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-primary-nav-demo`]],decls:5,vars:1,consts:[[1,`border-b`,`border-base-300`,`bg-base-100`],[3,`items`],[`slot`,`end`,`placeholder`,`Search`],[1,`p-6`,`text-sm`,`text-base-content/70`]],template:function(a,m){a&1&&(Ga(0,`div`,0)(1,`scsc-primary-nav`,1),uc(2,`scsc-search-input`,2),Lf()(),Ga(3,`main`,3),G_(4,` The gold underline marks the active route. Pick another item to move it. `),Lf()),a&2&&(Jb(),Pv(`items`,m.nav))},dependencies:[ON,Ta],encapsulation:2})};var w=class o{tabs=[{label:`Overview`,link:`.`,exact:!0},{label:`Parties`,link:`parties`,badge:`4`},{label:`Docket`,link:`docket`,badge:`42`},{label:`Hearings`,link:`hearings`,badge:`2`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-tab-nav-demo`]],decls:6,vars:3,consts:[[1,`scsc-pad-page`],[`tone`,`muted`,`size`,`sm`,1,`block`],[3,`level`,`visualLevel`],[1,`mt-4`,3,`items`]],template:function(a,m){a&1&&(Ga(0,`main`,0)(1,`scsc-text`,1),G_(2,`24CV012345`),Lf(),Ga(3,`scsc-heading`,2),G_(4,`Alvarez v. Northgate Holdings`),Lf(),uc(5,`scsc-tab-nav`,3),Lf()),a&2&&(Jb(3),Pv(`level`,1)(`visualLevel`,3),Jb(2),Pv(`items`,m.tabs))},dependencies:[kn,HN,NE],encapsulation:2})};var N=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-navbar-user-menu-demo`]],decls:11,vars:0,consts:[[1,`flex`,`justify-end`],[`name`,`Dana Whitfield`,`email`,`dwhitfield@scscourt.org`],[`type`,`button`]],template:function(a,m){a&1&&(Ga(0,`div`,0)(1,`scsc-user-menu`,1)(2,`li`)(3,`button`,2),G_(4,`Profile`),Lf()(),Ga(5,`li`)(6,`button`,2),G_(7,`Switch department`),Lf()(),Ga(8,`li`)(9,`button`,2),G_(10,`Sign out`),Lf()()()())},dependencies:[VN],encapsulation:2})};var p={"navbar-app-launcher":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscAppLauncher } from '@scscourt/design';

@Component({
  selector: 'app-navbar-app-launcher-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscAppLauncher],
  template: \`
    <!-- Deprecated: prefer scsc-app-menu, which is data-driven and branded. -->
    <div class="flex justify-end">
      <scsc-app-launcher label="Open court apps">
        <a class="flex items-center gap-2 rounded-field px-3 py-2 hover:bg-base-200" routerLink="."
          >Notification Service</a
        >
        <a class="flex items-center gap-2 rounded-field px-3 py-2 hover:bg-base-200" routerLink="."
          >Venue</a
        >
        <a class="flex items-center gap-2 rounded-field px-3 py-2 hover:bg-base-200" routerLink="."
          >Fee Schedule</a
        >
      </scsc-app-launcher>
    </div>
  \`,
})
export class NavbarAppLauncherDemo {}
`,html:`<!-- Deprecated: prefer scsc-app-menu, which is data-driven and branded. -->
<div class="flex justify-end">
  <scsc-app-launcher label="Open court apps">
    <a class="flex items-center gap-2 rounded-field px-3 py-2 hover:bg-base-200" routerLink="."
      >Notification Service</a
    >
    <a class="flex items-center gap-2 rounded-field px-3 py-2 hover:bg-base-200" routerLink="."
      >Venue</a
    >
    <a class="flex items-center gap-2 rounded-field px-3 py-2 hover:bg-base-200" routerLink="."
      >Fee Schedule</a
    >
  </scsc-app-launcher>
</div>
`},"navbar-app-logo":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAppLogo, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-navbar-app-logo-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAppLogo, ScscText],
  template: \`
    <div class="flex flex-wrap items-end gap-8">
      <!-- branded logo -->
      <div class="flex flex-col items-center gap-2">
        <scsc-app-logo [logoUrl]="venueLogo" iconName="building" />
        <scsc-text size="sm">Venue</scsc-text>
      </div>
      <!-- no logo URL: Lucide fallback tile -->
      <div class="flex flex-col items-center gap-2">
        <scsc-app-logo iconName="bell" />
        <scsc-text size="sm">Notification Service</scsc-text>
      </div>
      <!-- broken URL: degrades to the icon instead of a broken image -->
      <div class="flex flex-col items-center gap-2">
        <scsc-app-logo logoUrl="https://invalid.example/logo.png" iconName="gavel" />
        <scsc-text size="sm">CPO</scsc-text>
      </div>
      <!-- nothing at all: generic waffle glyph, smaller size -->
      <div class="flex flex-col items-center gap-2">
        <scsc-app-logo [size]="28" />
        <scsc-text size="sm">Unknown app</scsc-text>
      </div>
    </div>
  \`,
})
export class NavbarAppLogoDemo {
  // Inline SVG so the demo has no network dependency; use your app's hosted PNG/SVG in practice.
  protected readonly venueLogo =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>" +
    "<rect width='40' height='40' rx='9' fill='%231e2a4a'/>" +
    "<text x='20' y='27' font-family='Georgia,serif' font-size='20' font-weight='bold' fill='%23c9a227' text-anchor='middle'>V</text></svg>";
}
`,html:`<div class="flex flex-wrap items-end gap-8">
  <!-- branded logo -->
  <div class="flex flex-col items-center gap-2">
    <scsc-app-logo [logoUrl]="venueLogo" iconName="building" />
    <scsc-text size="sm">Venue</scsc-text>
  </div>
  <!-- no logo URL: Lucide fallback tile -->
  <div class="flex flex-col items-center gap-2">
    <scsc-app-logo iconName="bell" />
    <scsc-text size="sm">Notification Service</scsc-text>
  </div>
  <!-- broken URL: degrades to the icon instead of a broken image -->
  <div class="flex flex-col items-center gap-2">
    <scsc-app-logo logoUrl="https://invalid.example/logo.png" iconName="gavel" />
    <scsc-text size="sm">CPO</scsc-text>
  </div>
  <!-- nothing at all: generic waffle glyph, smaller size -->
  <div class="flex flex-col items-center gap-2">
    <scsc-app-logo [size]="28" />
    <scsc-text size="sm">Unknown app</scsc-text>
  </div>
</div>
`},"navbar-composed":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscMasthead,
  ScscPrimaryNav,
  ScscPrimaryNavItem,
  ScscSearchInput,
  ScscUserMenu,
  ScscUtilityBar,
} from '@scscourt/design';

@Component({
  selector: 'app-navbar-composed-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscUtilityBar,
    ScscMasthead,
    ScscPrimaryNav,
    ScscUserMenu,
    ScscSearchInput,
  ],
  template: \`
    <div class="bg-base-100">
      <scsc-utility-bar>
        <span slot="start"
          >An official website of the Superior Court of California, County of Santa Clara</span
        >
        <a routerLink="." class="link link-hover" lang="es" hreflang="es">Espa\xF1ol</a>
        <a routerLink="." class="link link-hover">Help</a>
      </scsc-utility-bar>

      <scsc-masthead
        title="Court Access Portal"
        subtitle="Superior Court of California, County of Santa Clara"
        logoSrc="scsc-seal.png"
        contained
      >
        <scsc-user-menu name="Maria Alvarez" email="m.alvarez@example.com">
          <li><button type="button">My cases</button></li>
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>

      <div class="border-b border-base-300">
        <scsc-primary-nav [items]="nav">
          <scsc-search-input slot="end" placeholder="Search cases" />
        </scsc-primary-nav>
      </div>
    </div>
  \`,
})
export class NavbarComposedDemo {
  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', link: '.', exact: true },
    { label: 'Find a case', link: 'search' },
    { label: 'Pay fees', link: 'fees' },
    { label: 'Jury duty', link: 'jury' },
    { label: 'Self-help', link: 'help' },
  ];
}
`,html:`<div class="bg-base-100">
  <scsc-utility-bar>
    <span slot="start"
      >An official website of the Superior Court of California, County of Santa Clara</span
    >
    <a routerLink="." class="link link-hover" lang="es" hreflang="es">Espa\xF1ol</a>
    <a routerLink="." class="link link-hover">Help</a>
  </scsc-utility-bar>

  <scsc-masthead
    title="Court Access Portal"
    subtitle="Superior Court of California, County of Santa Clara"
    logoSrc="scsc-seal.png"
    contained
  >
    <scsc-user-menu name="Maria Alvarez" email="m.alvarez@example.com">
      <li><button type="button">My cases</button></li>
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>

  <div class="border-b border-base-300">
    <scsc-primary-nav [items]="nav">
      <scsc-search-input slot="end" placeholder="Search cases" />
    </scsc-primary-nav>
  </div>
</div>
`},"navbar-mega-menu":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscPrimaryNav, ScscPrimaryNavItem } from '@scscourt/design';

@Component({
  selector: 'app-navbar-mega-menu-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPrimaryNav],
  template: \`
    <div class="min-h-screen bg-base-200">
      <div class="border-b border-base-300 bg-base-100">
        <scsc-primary-nav [items]="nav" />
      </div>
      <main class="p-6 text-sm text-base-content/70">
        Open Online services: with a mouse it opens on hover; from the keyboard press Enter, or
        ArrowDown to land on the first link, then use the arrow keys. On a phone the items fold
        behind Menu.
      </main>
    </div>
  \`,
})
export class NavbarMegaMenuDemo {
  // An item with \`children\` is a mega menu: columns of links and an optional featured card.
  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: '.', exact: true },
    {
      label: 'Online services',
      children: [
        {
          heading: 'Pay & request',
          links: [
            {
              label: 'Pay a traffic ticket',
              link: 'pay/traffic',
              description: 'By citation number',
              icon: 'court.traffic',
            },
            {
              label: 'Pay court fees',
              link: 'pay/fees',
              description: 'Filing and copy fees',
              icon: 'court.payment',
            },
          ],
        },
        {
          heading: 'Cases & records',
          links: [
            {
              label: 'Case search',
              link: 'cases',
              description: 'By case number or party',
              icon: 'action.search',
            },
            {
              label: 'Tentative rulings',
              link: 'rulings',
              description: 'Civil and probate',
              icon: 'court.ruling',
            },
          ],
        },
        {
          heading: 'Self-help',
          links: [
            { label: 'Find a form', link: 'forms', icon: 'file.document' },
            {
              label: 'Judicial Council forms',
              href: 'https://www.courts.ca.gov/forms.htm',
              external: true,
              icon: 'action.external-link',
            },
          ],
        },
      ],
      featured: {
        title: 'Summoned for jury duty?',
        description: 'Confirm your service or ask for a new date online.',
        linkLabel: 'Go to jury services',
        link: 'jury',
      },
    },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'Help', icon: 'life-buoy', link: 'help' },
  ];
}
`,html:`<div class="min-h-screen bg-base-200">
  <div class="border-b border-base-300 bg-base-100">
    <scsc-primary-nav [items]="nav" />
  </div>
  <main class="p-6 text-sm text-base-content/70">
    Open Online services: with a mouse it opens on hover; from the keyboard press Enter, or
    ArrowDown to land on the first link, then use the arrow keys. On a phone the items fold
    behind Menu.
  </main>
</div>
`},"navbar-primary-nav":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscPrimaryNav, ScscPrimaryNavItem, ScscSearchInput } from '@scscourt/design';

@Component({
  selector: 'app-navbar-primary-nav-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPrimaryNav, ScscSearchInput],
  template: \`
    <div class="border-b border-base-300 bg-base-100">
      <scsc-primary-nav [items]="nav">
        <scsc-search-input slot="end" placeholder="Search" />
      </scsc-primary-nav>
    </div>
    <main class="p-6 text-sm text-base-content/70">
      The gold underline marks the active route. Pick another item to move it.
    </main>
  \`,
})
export class NavbarPrimaryNavDemo {
  // Relative to the portal layout's route; \`exact\` on Home so it is not active on every child.
  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'home', link: '.', exact: true },
    { label: 'Cases', icon: 'file-text', link: 'cases' },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'Fees', icon: 'receipt', link: 'fees' },
  ];
}
`,html:`<div class="border-b border-base-300 bg-base-100">
  <scsc-primary-nav [items]="nav">
    <scsc-search-input slot="end" placeholder="Search" />
  </scsc-primary-nav>
</div>
<main class="p-6 text-sm text-base-content/70">
  The gold underline marks the active route. Pick another item to move it.
</main>
`},"navbar-tab-nav":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscTabNav, ScscTabNavItem, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-navbar-tab-nav-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscTabNav, ScscText],
  template: \`
    <main class="scsc-pad-page">
      <scsc-text tone="muted" size="sm" class="block">24CV012345</scsc-text>
      <scsc-heading [level]="1" [visualLevel]="3">Alvarez v. Northgate Holdings</scsc-heading>
      <scsc-tab-nav [items]="tabs" class="mt-4" />
      <!-- In your app a <router-outlet /> goes here; each tab is a child route of the case. -->
    </main>
  \`,
})
export class NavbarTabNavDemo {
  protected readonly tabs: ScscTabNavItem[] = [
    { label: 'Overview', link: '.', exact: true },
    { label: 'Parties', link: 'parties', badge: '4' },
    { label: 'Docket', link: 'docket', badge: '42' },
    { label: 'Hearings', link: 'hearings', badge: '2' },
  ];
}
`,html:`<main class="scsc-pad-page">
  <scsc-text tone="muted" size="sm" class="block">24CV012345</scsc-text>
  <scsc-heading [level]="1" [visualLevel]="3">Alvarez v. Northgate Holdings</scsc-heading>
  <scsc-tab-nav [items]="tabs" class="mt-4" />
  <!-- In your app a <router-outlet /> goes here; each tab is a child route of the case. -->
</main>
`},"navbar-user-menu":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscUserMenu } from '@scscourt/design';

@Component({
  selector: 'app-navbar-user-menu-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscUserMenu],
  template: \`
    <div class="flex justify-end">
      <scsc-user-menu name="Dana Whitfield" email="dwhitfield@scscourt.org">
        <li><button type="button">Profile</button></li>
        <li><button type="button">Switch department</button></li>
        <li><button type="button">Sign out</button></li>
      </scsc-user-menu>
    </div>
  \`,
})
export class NavbarUserMenuDemo {}
`,html:`<div class="flex justify-end">
  <scsc-user-menu name="Dana Whitfield" email="dwhitfield@scscourt.org">
    <li><button type="button">Profile</button></li>
    <li><button type="button">Switch department</button></li>
    <li><button type="button">Sign out</button></li>
  </scsc-user-menu>
</div>
`}};var re={slug:`navbar`,name:`Navbar`,classes:[`ScscPrimaryNav`,`ScscTabNav`,`ScscUtilityBar`,`ScscUserMenu`,`ScscAppLauncher`,`ScscAppLogo`],category:`Navigation`,summary:"The pieces of the top chrome that sit around `scsc-masthead`: the thin utility bar above it, the horizontal primary nav below it, the user menu and app launcher inside it, router-linked tab nav for sub-sections, and the branded app logo tile.",whenToUse:[`**Utility bar** \u2014 the public portal's top strip: "official website" notice on the left, language and sign-in links on the right.`,"**Primary nav** — horizontal top-level navigation for portals (in `[slot=nav]` of `scsc-portal-shell`). Back-office apps use `scsc-sidebar-nav` instead.","**Tab nav** — router-linked tabs for the sections of one record (Overview / Parties / Docket); each tab is a child route. For local state use `scsc-tabs`.","**User menu** — the signed-in lockup in the masthead; project `<li>` items.","**App launcher** is deprecated: use `scsc-app-menu` (data-driven, branded). **App logo** is the tile it renders; use it wherever an app needs a mark."],setup:`// Primary nav and tab nav are router links: the app needs a router.
provideRouter(routes)`,demos:[{id:`navbar-composed`,title:`Portal chrome`,description:"A public portal: utility bar with a `lang`-marked language link, contained masthead with the user menu, and primary nav with a search box in `[slot=end]`.",component:k,source:p[`navbar-composed`],layout:`page`,height:`15rem`},{id:`navbar-primary-nav`,title:`Primary nav`,description:"Icons per item and `exact` on Home. The gold underline marks the active route; links are relative to the layout route, so pick one to move it.",component:C,source:p[`navbar-primary-nav`],layout:`page`,height:`10rem`},{id:`navbar-mega-menu`,title:`Mega menu`,description:"An item with `children` opens a full-width panel of link columns and a featured card. It is disclosure navigation (a button and lists of links), not an ARIA menu. On a phone the nav folds behind a Menu button and the panel becomes an accordion.",component:x,source:p[`navbar-mega-menu`],layout:`page`,height:`28rem`},{id:`navbar-tab-nav`,title:`Tab nav`,description:"Router-linked section tabs with count badges, under a case heading; each tab is a child route and a `<router-outlet>` goes below.",component:w,source:p[`navbar-tab-nav`],layout:`page`,height:`13rem`},{id:`navbar-user-menu`,title:`User menu`,description:"Avatar initials from `name`; `email` under it; projected menu items.",component:N,source:p[`navbar-user-menu`]},{id:`navbar-app-launcher`,title:`App launcher (deprecated)`,description:"The original waffle with hand-written links. New apps should use `scsc-app-menu`.",component:y,source:p[`navbar-app-launcher`]},{id:`navbar-app-logo`,title:`App logo`,description:`Branded image, icon fallback, broken-URL fallback and the generic glyph.`,component:S,source:p[`navbar-app-logo`]}],a11y:['Primary nav and tab nav render `<nav>` with links; the active one carries `aria-current="page"`. Tab nav is route navigation, not a `tablist`: each link is its own Tab stop.','User menu and app launcher are disclosure buttons with accessible names (`"Account menu for <name>"`, `label`) and `aria-expanded`. They open on click, Enter or Space, never on focus alone; Escape, tabbing out or a click outside closes the panel (WCAG 1.4.13), and choosing a link or button in it closes the panel and returns focus to the trigger.','Project plain links and buttons (`<li><a>`, `<li><button>`), not `role="menuitem"`: the panel is not a `role="menu"` and has no arrow-key model. Tab moves through the items, and the panel itself is never a Tab stop.',"App logo is decorative (`aria-hidden`): always pair it with the app's visible name."],keyboard:[{keys:`Tab / Shift + Tab`,action:"Each link in the utility bar, primary nav and tab nav is one stop, in page order; the primary nav’s `[slot=end]` content follows its links."},{keys:`Enter`,action:`On a link: follows it; primary nav and tab nav links navigate through the router.`},{keys:`Enter / Space (user menu, app launcher)`,action:`On the button: opens or closes its panel; focus stays on the button.`},{keys:`Tab / Shift + Tab (panel open)`,action:`Through each projected item; moving focus out of the button and panel closes the panel.`},{keys:`Enter / Space (in a panel)`,action:`Activates the focused item (a link takes Enter only), closes the panel and returns focus to its button.`},{keys:`Escape`,action:`Closes the open panel and returns focus to its button.`},{keys:`Enter / Space (mega-menu button)`,action:`Opens or closes its panel; focus stays on the button. ArrowDown opens it on the first link.`},{keys:`ArrowUp / ArrowDown (mega-menu panel)`,action:`Moves between the links of a column; Home and End jump to its first and last link.`},{keys:`ArrowLeft / ArrowRight (mega-menu panel)`,action:`Moves to the same row in the previous or next column.`},{keys:`Escape / Tab out (mega-menu panel)`,action:`Escape closes the panel and returns focus to its button; moving focus out, a click outside or following a link also closes it.`},{keys:`Enter / Space (Menu, below md)`,action:`Shows or hides the primary nav items.`}],aria:['Primary nav: `label` names the `<nav>` ("Main"). A mega-menu item is a `<button>` with `aria-expanded` and `aria-controls`; each column heading names its list of links. The button shows the active underline when one of its links is the current page.',`Hover opens only with a mouse, after a short delay, and the panel stays open while the pointer or focus is inside it (WCAG 1.4.13).`,"Below md the Menu button (`menuLabel`) is a disclosure for the whole list."],appMustProvide:['The app’s visible name next to the decorative logo, plain links and buttons in the user menu (not `role="menuitem"`), and a distinct `label` for each navigation when a page has more than one.'],related:[`masthead`,`app-menu`,`sidebar-nav`,`shells`,`tabs`,`avatar`]};export{re as NAVBAR_DOCS};