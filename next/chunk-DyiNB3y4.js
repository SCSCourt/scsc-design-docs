import{H as FN,Ms as uc,Na as Jb,Xa as Pv,cn as UE,cs as lc,ei as pr,gn as VN,in as Ta,ms as nu,pi as sn,ra as Af,t as $E,ta as $f,va as G_,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var p=class s{chosen=q$1(``);actions=[{id:`notifications`,label:`Notifications`,icon:`comm.notification`,badge:3,badgeLabel:`3 unread`},{id:`help`,label:`Help`,icon:`action.help`},{id:`print`,label:`Print this page`,icon:`action.print`},{id:`feedback`,label:`Send feedback`,icon:`comm.message`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-masthead-actions-demo`]],decls:10,vars:2,consts:[[1,`min-h-screen`,`bg-base-200`],[`title`,`Court Operations`,`subtitle`,`Clerk's Office · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`,`topbar`,``,3,`action`,`actions`],[`slot`,`search`,`placeholder`,`Search cases`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`type`,`button`],[1,`p-6`,`text-sm`,`text-base-content/70`],[`role`,`status`]],template:function(e,l){e&1&&(Ga(0,`div`,0)(1,`scsc-masthead`,1),lc(`action`,function(N){return l.chosen.set(N.label)}),uc(2,`scsc-search-input`,2),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`button`,4),G_(6,`Sign out`),Lf()()()(),Ga(7,`main`,5)(8,`p`,6),G_(9),Lf()()()),e&2&&(Jb(),Pv(`actions`,l.actions),Jb(8),$f(` `,l.chosen()?`You chose: `+l.chosen():`Switch the preview to tablet or mobile: actions that no longer fit move into the More menu, and the search field folds behind a search button.`,` `))},dependencies:[FN,Ta,VN],encapsulation:2})};var g=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-masthead-basic-demo`]],decls:10,vars:0,consts:[[`title`,`Notification Service`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`],[`icon`,`bell`,`label`,`Notifications`],[`icon`,`settings`,`label`,`Settings`],[`name`,`Dana Whitfield`,`email`,`dwhitfield@scscourt.org`],[`type`,`button`]],template:function(e,l){e&1&&(Ga(0,`scsc-masthead`,0),uc(1,`scsc-icon-button`,1)(2,`scsc-icon-button`,2),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`button`,4),G_(6,`Profile`),Lf()(),Ga(7,`li`)(8,`button`,4),G_(9,`Sign out`),Lf()()()())},dependencies:[FN,UE,VN],encapsulation:2})};var b=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-masthead-custom-logo-demo`]],decls:4,vars:2,consts:[[`title`,`Venue`,`subtitle`,`Judicial assignment and locations`,3,`logoSrc`],[`slot`,`logo`,`iconName`,`building`,3,`size`],[`variant`,`ghost`,`size`,`sm`]],template:function(e,l){e&1&&(Ga(0,`scsc-masthead`,0),uc(1,`scsc-app-logo`,1),Ga(2,`scsc-button`,2),G_(3,`Sign in`),Lf()()),e&2&&(Pv(`logoSrc`,null),Jb(),Pv(`size`,40))},dependencies:[FN,pr,sn],encapsulation:2})};var f=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-masthead-variants-demo`]],decls:6,vars:0,consts:[[1,`flex`,`flex-col`,`gap-6`],[`title`,`Court Access Portal`,`subtitle`,`Public services`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`scsc-button`,``,`size`,`sm`,`routerLink`,`.`],[`title`,`Fee Schedule`,`subtitle`,`Civil Division`,`logoSrc`,`scsc-seal.png`,`accent`,``],[`title`,`Juror Portal`,`subtitle`,`Jury Services`,`logoSrc`,`scsc-seal.png`,`topbar`,``]],template:function(e,l){e&1&&(Ga(0,`div`,0)(1,`scsc-masthead`,1)(2,`a`,2),G_(3,`Pay fees`),Lf()(),uc(4,`scsc-masthead`,3)(5,`scsc-masthead`,4),Lf())},dependencies:[nu,$E,FN],encapsulation:2})};var h={"masthead-actions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscMasthead,
  type ScscMastheadAction,
  ScscSearchInput,
  ScscUserMenu,
} from '@scscourt/design';

@Component({
  selector: 'app-masthead-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMasthead, ScscSearchInput, ScscUserMenu],
  template: \`
    <div class="min-h-screen bg-base-200">
      <scsc-masthead
        title="Court Operations"
        subtitle="Clerk's Office \xB7 Downtown Superior Court"
        logoSrc="scsc-seal.png"
        topbar
        [actions]="actions"
        (action)="chosen.set($event.label)"
      >
        <scsc-search-input slot="search" placeholder="Search cases" />
        <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>
      <main class="p-6 text-sm text-base-content/70">
        <p role="status">
          {{
            chosen()
              ? 'You chose: ' + chosen()
              : 'Switch the preview to tablet or mobile: actions that no longer fit move into the More menu, and the search field folds behind a search button.'
          }}
        </p>
      </main>
    </div>
  \`,
})
export class MastheadActionsDemo {
  protected readonly chosen = signal('');

  // Plain actions emit (action); give one a link to navigate instead.
  protected readonly actions: ScscMastheadAction[] = [
    {
      id: 'notifications',
      label: 'Notifications',
      icon: 'comm.notification',
      badge: 3,
      badgeLabel: '3 unread',
    },
    { id: 'help', label: 'Help', icon: 'action.help' },
    { id: 'print', label: 'Print this page', icon: 'action.print' },
    { id: 'feedback', label: 'Send feedback', icon: 'comm.message' },
  ];
}
`,html:`<div class="min-h-screen bg-base-200">
  <scsc-masthead
    title="Court Operations"
    subtitle="Clerk's Office \xB7 Downtown Superior Court"
    logoSrc="scsc-seal.png"
    topbar
    [actions]="actions"
    (action)="chosen.set($event.label)"
  >
    <scsc-search-input slot="search" placeholder="Search cases" />
    <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>
  <main class="p-6 text-sm text-base-content/70">
    <p role="status">
      {{
        chosen()
          ? 'You chose: ' + chosen()
          : 'Switch the preview to tablet or mobile: actions that no longer fit move into the More menu, and the search field folds behind a search button.'
      }}
    </p>
  </main>
</div>
`},"masthead-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscIconButton, ScscMasthead, ScscUserMenu } from '@scscourt/design';

@Component({
  selector: 'app-masthead-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMasthead, ScscIconButton, ScscUserMenu],
  template: \`
    <scsc-masthead
      title="Notification Service"
      subtitle="Superior Court of California, County of Santa Clara"
      logoSrc="scsc-seal.png"
    >
      <scsc-icon-button icon="bell" label="Notifications" />
      <scsc-icon-button icon="settings" label="Settings" />
      <scsc-user-menu name="Dana Whitfield" email="dwhitfield@scscourt.org">
        <li><button type="button">Profile</button></li>
        <li><button type="button">Sign out</button></li>
      </scsc-user-menu>
    </scsc-masthead>
  \`,
})
export class MastheadBasicDemo {}
`,html:`<scsc-masthead
  title="Notification Service"
  subtitle="Superior Court of California, County of Santa Clara"
  logoSrc="scsc-seal.png"
>
  <scsc-icon-button icon="bell" label="Notifications" />
  <scsc-icon-button icon="settings" label="Settings" />
  <scsc-user-menu name="Dana Whitfield" email="dwhitfield@scscourt.org">
    <li><button type="button">Profile</button></li>
    <li><button type="button">Sign out</button></li>
  </scsc-user-menu>
</scsc-masthead>
`},"masthead-custom-logo":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAppLogo, ScscButton, ScscMasthead } from '@scscourt/design';

@Component({
  selector: 'app-masthead-custom-logo-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMasthead, ScscAppLogo, ScscButton],
  template: \`
    <!-- [logoSrc]="null" removes the seal so the projected [slot=logo] stands alone -->
    <scsc-masthead title="Venue" subtitle="Judicial assignment and locations" [logoSrc]="null">
      <scsc-app-logo slot="logo" iconName="building" [size]="40" />
      <scsc-button variant="ghost" size="sm">Sign in</scsc-button>
    </scsc-masthead>
  \`,
})
export class MastheadCustomLogoDemo {}
`,html:`<!-- [logoSrc]="null" removes the seal so the projected [slot=logo] stands alone -->
<scsc-masthead title="Venue" subtitle="Judicial assignment and locations" [logoSrc]="null">
  <scsc-app-logo slot="logo" iconName="building" [size]="40" />
  <scsc-button variant="ghost" size="sm">Sign in</scsc-button>
</scsc-masthead>
`},"masthead-variants":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscMasthead } from '@scscourt/design';

@Component({
  selector: 'app-masthead-variants-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscMasthead],
  template: \`
    <div class="flex flex-col gap-6">
      <!-- contained: the row is centred at the portal's 90rem content width -->
      <scsc-masthead
        title="Court Access Portal"
        subtitle="Public services"
        logoSrc="scsc-seal.png"
        contained
      >
        <a scsc-button size="sm" routerLink=".">Pay fees</a>
      </scsc-masthead>

      <!-- accent: gold rule along the bottom edge -->
      <scsc-masthead
        title="Fee Schedule"
        subtitle="Civil Division"
        logoSrc="scsc-seal.png"
        accent
      />

      <!-- topbar: renders the navy strip itself (only outside a shell) -->
      <scsc-masthead title="Juror Portal" subtitle="Jury Services" logoSrc="scsc-seal.png" topbar />
    </div>
  \`,
})
export class MastheadVariantsDemo {}
`,html:`<div class="flex flex-col gap-6">
  <!-- contained: the row is centred at the portal's 90rem content width -->
  <scsc-masthead
    title="Court Access Portal"
    subtitle="Public services"
    logoSrc="scsc-seal.png"
    contained
  >
    <a scsc-button size="sm" routerLink=".">Pay fees</a>
  </scsc-masthead>

  <!-- accent: gold rule along the bottom edge -->
  <scsc-masthead
    title="Fee Schedule"
    subtitle="Civil Division"
    logoSrc="scsc-seal.png"
    accent
  />

  <!-- topbar: renders the navy strip itself (only outside a shell) -->
  <scsc-masthead title="Juror Portal" subtitle="Jury Services" logoSrc="scsc-seal.png" topbar />
</div>
`}};var q={slug:`masthead`,name:`Masthead`,classes:[`ScscMasthead`],category:`Navigation`,whenToUse:["The header of every court app and portal: seal, serif title, small-caps subtitle, actions on the right. Put it in the `[slot=masthead]` of a shell.","Use `contained` on public portals so the row lines up with the 90rem content column; leave it off for edge-to-edge back-office apps.","Only set `topbar` on a masthead used without a shell (the shells already render the navy strip).",'Give simple icon actions (help, notifications, print) as `actions` data: they get 36px buttons with tooltips and move into a "More" menu when the bar is narrow. Project richer controls that always stay visible (`scsc-user-menu`, `scsc-app-menu`, `scsc-theme-switcher`) as the default content.',"Put a search field in `[slot=search]`: inline from md, behind a search button on phones.",'Inside `scsc-app-shell` (or `scsc-page-shell hasSidebar`) it renders the shell’s "Open navigation" button below lg — do not add your own.'],demos:[{id:`masthead-actions`,title:`Actions that overflow, and search`,description:'`actions` render as icon buttons with tooltips (a badge is read in words); narrow the preview and they move, from the end, into "More". `[slot=search]` folds behind a search button below md; Escape folds it again.',component:p,source:h[`masthead-actions`],layout:`page`,height:`16rem`},{id:`masthead-basic`,title:`With actions`,description:"Seal from `logoSrc`; icon buttons and a user menu projected on the right.",component:g,source:h[`masthead-basic`],layout:`full-bleed`},{id:`masthead-variants`,title:`Contained, accent, topbar`,description:"`contained` centres the row at 90rem, `accent` adds the gold rule, `topbar` renders the navy strip.",component:f,source:h[`masthead-variants`],layout:`full-bleed`},{id:`masthead-custom-logo`,title:`Custom logo`,description:'`[logoSrc]="null"` removes the seal; project your own mark into `[slot=logo]`.',component:b,source:h[`masthead-custom-logo`],layout:`full-bleed`}],a11y:["Renders the page `<header>` (the banner landmark when it is not inside `<main>`).","The title is plain text (not a heading) so it never competes with the page `<h1>`; it doubles as the seal's alt text.","Actions are projected content: give icon-only buttons a `label` (`scsc-icon-button` requires one).","The navy strip and gold accent are decorative (`aria-hidden`)."],keyboard:[{keys:`Tab`,action:`Menu button (in a shell, below lg), search, each visible action, More, then the projected controls.`},{keys:`Enter / Space (More)`,action:`Opens the overflow menu on its first action; arrows move, Escape closes it.`},{keys:`Enter / Space (search button)`,action:`Below md: shows the search field under the bar and focuses it.`},{keys:`Escape (in the search field)`,action:`Below md: folds the field and returns focus to the search button.`}],aria:['Each action button is named by its `label` plus the badge in words (`badgeLabel`, e.g. "Notifications (3 unread)") and shows that name as a tooltip.',"The More button (`moreLabel`) is a menu button; the search button (`searchLabel`) has `aria-expanded` and `aria-controls`."],appMustProvide:["A `label` on every icon-only action, and the page `<h1>` in the main content (the masthead title is not a heading)."],related:[`shells`,`page-shell`,`navbar`,`app-menu`,`seal`]};export{q as MASTHEAD_DOCS};