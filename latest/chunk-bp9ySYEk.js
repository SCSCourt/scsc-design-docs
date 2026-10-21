import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{At as NP,H as FN,I as EP,M as DN,Mr as jn,Ms as uc,Na as Jb,Ss as rD,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cn as UE,ds as nD,kn as XF,kt as NE,ms as nu,n as $N,nn as TN,ra as Af,t as $E,ta as $f,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var b=class s{fees=[{term:`Complaint or first paper`,value:`$435.00`,numeric:!0},{term:`Motion or application`,value:`$60.00`,numeric:!0},{term:`Jury fee deposit`,value:`$150.00`,numeric:!0}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-page-shell-basic-demo`]],decls:8,vars:1,consts:[[`slot`,`masthead`,`title`,`Fee Schedule`,`subtitle`,`Civil Division`,`logoSrc`,`scsc-seal.png`],[`scsc-button`,``,`variant`,`ghost`,`size`,`sm`,`routerLink`,`.`],[`title`,`Filing fees`,`description`,`Effective July 1, 2026. Amounts set by the Government Code and the Judicial Council.`],[`heading`,`Unlimited civil (over $35,000)`,1,`mt-6`],[3,`items`]],template:function(e,l){e&1&&(Ga(0,`scsc-page-shell`)(1,`scsc-masthead`,0)(2,`a`,1),G_(3,`Sign in`),Lf()(),uc(4,`scsc-page-header`,2),Ga(5,`scsc-section`,3)(6,`scsc-card`),uc(7,`scsc-description-list`,4),Lf()()()),e&2&&(Jb(7),Pv(`items`,l.fees))},dependencies:[nu,$E,mN,NP,FN,TN,XF,DN],encapsulation:2})};var F=(s,c)=>c.id;function j(s,c){if(s&1&&(Ga(0,`li`,5)(1,`div`,6)(2,`p`,7),G_(3),Lf(),Ga(4,`scsc-text`,8),G_(5),Lf()(),Ga(6,`scsc-badge`,9),G_(7),Lf()()),s&2){let e=c.$implicit;Jb(3),nD(e.template),Jb(2),rD(``,e.audience,` · `,e.sent),Jb(2),$f(``,e.recipients,` recipients`)}}var H=[{template:`Jury summons — 30-day notice`,audience:`Jurors`},{template:`Hearing continued`,audience:`Parties and counsel`},{template:`Tentative ruling posted`,audience:`Counsel of record`}];var f=class s$1{nav=[{items:[{label:`Dashboard`,icon:`landmark`,link:`dashboard`},{label:`Templates`,icon:`file-text`,link:`templates`},{label:`Send history`,icon:`history`,link:`.`,exact:!0}]},{title:`Admin`,items:[{label:`Settings`,icon:`settings`,link:`settings`}]}];sent=Array.from({length:12},(c,e)=>s(r({id:e},H[e%H.length]),{sent:`Sep ${28-e*2}, 2026`,recipients:40+e*37%180}));static ɵfac=function(e){return new(e||s$1)};static ɵcmp=Af({type:s$1,selectors:[[`app-page-shell-scroll-demo`]],decls:7,vars:1,consts:[[`hasSidebar`,``],[`slot`,`masthead`,`title`,`Notification Service`,`subtitle`,`Admin Console`,`logoSrc`,`scsc-seal.png`],[`slot`,`sidebar`,3,`sections`],[`title`,`Send history`,`description`,`Notices sent to parties, jurors and counsel in the last 30 days.`],[`aria-label`,`Sent notices`,1,`mt-4`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-3`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`font-medium`],[`tone`,`muted`,`size`,`sm`,1,`block`],[`soft`,``,`size`,`sm`]],template:function(e,l){e&1&&(Ga(0,`scsc-page-shell`,0),uc(1,`scsc-masthead`,1)(2,`scsc-sidebar-nav`,2)(3,`scsc-page-header`,3),Ga(4,`scsc-list`,4),o_(5,j,8,4,`li`,5,F),Lf()()),e&2&&(Jb(2),Pv(`sections`,l.nav),Jb(3),i_(l.sent))},dependencies:[jn,EP,FN,TN,XF,$N,NE],encapsulation:2})};var y=class s{nav=[{items:[{label:`Dashboard`,icon:`landmark`,link:`dashboard`},{label:`Templates`,icon:`file-text`,link:`.`,badge:`14`,exact:!0},{label:`Broadcasts`,icon:`bell`,link:`broadcasts`}]},{title:`Admin`,items:[{label:`Settings`,icon:`settings`,link:`settings`}]}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-page-shell-sidebar-demo`]],decls:11,vars:1,consts:[[`hasSidebar`,``],[`slot`,`masthead`,`title`,`Notification Service`,`subtitle`,`Admin Console`,`logoSrc`,`scsc-seal.png`],[`icon`,`bell`,`label`,`Notifications`],[`slot`,`sidebar`,3,`sections`],[`title`,`Templates`,`description`,`Notices sent to parties, jurors and counsel.`],[`heading`,`Jury`,1,`mt-6`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`]],template:function(e,l){e&1&&(Ga(0,`scsc-page-shell`,0)(1,`scsc-masthead`,1),uc(2,`scsc-icon-button`,2),Lf(),uc(3,`scsc-sidebar-nav`,3)(4,`scsc-page-header`,4),Ga(5,`scsc-section`,5)(6,`scsc-card`)(7,`p`,6),G_(8,`Jury summons — 30-day notice`),Lf(),Ga(9,`p`,7),G_(10,` Last edited Sep 12, 2026 by D. Whitfield · 3 parameters `),Lf()()()()),e&2&&(Jb(3),Pv(`sections`,l.nav))},dependencies:[mN,UE,FN,TN,XF,DN,$N],encapsulation:2})};var v={"page-shell-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButtonLink,
  ScscCard,
  ScscDescriptionList,
  ScscMasthead,
  ScscPageHeader,
  ScscPageShell,
  ScscSection,
  type ScscDescriptionItem,
} from '@scscourt/design';

@Component({
  selector: 'app-page-shell-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscButtonLink,
    ScscCard,
    ScscDescriptionList,
    ScscMasthead,
    ScscPageHeader,
    ScscPageShell,
    ScscSection,
  ],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Fee Schedule"
        subtitle="Civil Division"
        logoSrc="scsc-seal.png"
      >
        <a scsc-button variant="ghost" size="sm" routerLink=".">Sign in</a>
      </scsc-masthead>

      <scsc-page-header
        title="Filing fees"
        description="Effective July 1, 2026. Amounts set by the Government Code and the Judicial Council."
      />
      <!-- Page header is the h1; sections are h2 blocks below it. -->
      <scsc-section heading="Unlimited civil (over $35,000)" class="mt-6">
        <scsc-card>
          <scsc-description-list [items]="fees" />
        </scsc-card>
      </scsc-section>
    </scsc-page-shell>
  \`,
})
export class PageShellBasicDemo {
  protected readonly fees: ScscDescriptionItem[] = [
    { term: 'Complaint or first paper', value: '$435.00', numeric: true },
    { term: 'Motion or application', value: '$60.00', numeric: true },
    { term: 'Jury fee deposit', value: '$150.00', numeric: true },
  ];
}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Fee Schedule"
    subtitle="Civil Division"
    logoSrc="scsc-seal.png"
  >
    <a scsc-button variant="ghost" size="sm" routerLink=".">Sign in</a>
  </scsc-masthead>

  <scsc-page-header
    title="Filing fees"
    description="Effective July 1, 2026. Amounts set by the Government Code and the Judicial Council."
  />
  <!-- Page header is the h1; sections are h2 blocks below it. -->
  <scsc-section heading="Unlimited civil (over $35,000)" class="mt-6">
    <scsc-card>
      <scsc-description-list [items]="fees" />
    </scsc-card>
  </scsc-section>
</scsc-page-shell>
`},"page-shell-scroll":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscBadge,
  ScscList,
  ScscMasthead,
  ScscNavSection,
  ScscPageHeader,
  ScscPageShell,
  ScscSidebarNav,
  ScscText,
} from '@scscourt/design';

interface SentNotice {
  id: number;
  template: string;
  audience: string;
  sent: string;
  recipients: number;
}

const TEMPLATES = [
  { template: 'Jury summons \u2014 30-day notice', audience: 'Jurors' },
  { template: 'Hearing continued', audience: 'Parties and counsel' },
  { template: 'Tentative ruling posted', audience: 'Counsel of record' },
];

@Component({
  selector: 'app-page-shell-scroll-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscBadge,
    ScscList,
    ScscMasthead,
    ScscPageHeader,
    ScscPageShell,
    ScscSidebarNav,
    ScscText,
  ],
  template: \`
    <scsc-page-shell hasSidebar>
      <scsc-masthead
        slot="masthead"
        title="Notification Service"
        subtitle="Admin Console"
        logoSrc="scsc-seal.png"
      />
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <scsc-page-header
        title="Send history"
        description="Notices sent to parties, jurors and counsel in the last 30 days."
      />
      <scsc-list
        class="mt-4 rounded-box border border-base-300 bg-base-100"
        aria-label="Sent notices"
      >
        @for (n of sent; track n.id) {
          <li class="flex items-center gap-3 px-4 py-3">
            <div class="min-w-0 flex-1">
              <p class="truncate font-medium">{{ n.template }}</p>
              <scsc-text tone="muted" size="sm" class="block"
                >{{ n.audience }} \xB7 {{ n.sent }}</scsc-text
              >
            </div>
            <scsc-badge soft size="sm">{{ n.recipients }} recipients</scsc-badge>
          </li>
        }
      </scsc-list>
    </scsc-page-shell>
  \`,
})
export class PageShellScrollDemo {
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'landmark', link: 'dashboard' },
        { label: 'Templates', icon: 'file-text', link: 'templates' },
        { label: 'Send history', icon: 'history', link: '.', exact: true },
      ],
    },
    { title: 'Admin', items: [{ label: 'Settings', icon: 'settings', link: 'settings' }] },
  ];

  /** Twelve rows: enough to scroll the frame and watch the chrome stay put. */
  protected readonly sent: SentNotice[] = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    ...TEMPLATES[i % TEMPLATES.length],
    sent: \`Sep \${28 - i * 2}, 2026\`,
    recipients: 40 + ((i * 37) % 180),
  }));
}
`,html:`<scsc-page-shell hasSidebar>
  <scsc-masthead
    slot="masthead"
    title="Notification Service"
    subtitle="Admin Console"
    logoSrc="scsc-seal.png"
  />
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <scsc-page-header
    title="Send history"
    description="Notices sent to parties, jurors and counsel in the last 30 days."
  />
  <scsc-list
    class="mt-4 rounded-box border border-base-300 bg-base-100"
    aria-label="Sent notices"
  >
    @for (n of sent; track n.id) {
      <li class="flex items-center gap-3 px-4 py-3">
        <div class="min-w-0 flex-1">
          <p class="truncate font-medium">{{ n.template }}</p>
          <scsc-text tone="muted" size="sm" class="block"
            >{{ n.audience }} \xB7 {{ n.sent }}</scsc-text
          >
        </div>
        <scsc-badge soft size="sm">{{ n.recipients }} recipients</scsc-badge>
      </li>
    }
  </scsc-list>
</scsc-page-shell>
`},"page-shell-sidebar":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscCard,
  ScscIconButton,
  ScscMasthead,
  ScscNavSection,
  ScscPageHeader,
  ScscPageShell,
  ScscSection,
  ScscSidebarNav,
} from '@scscourt/design';

@Component({
  selector: 'app-page-shell-sidebar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscCard,
    ScscIconButton,
    ScscMasthead,
    ScscPageHeader,
    ScscPageShell,
    ScscSection,
    ScscSidebarNav,
  ],
  template: \`
    <scsc-page-shell hasSidebar>
      <scsc-masthead
        slot="masthead"
        title="Notification Service"
        subtitle="Admin Console"
        logoSrc="scsc-seal.png"
      >
        <scsc-icon-button icon="bell" label="Notifications" />
      </scsc-masthead>

      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <scsc-page-header
        title="Templates"
        description="Notices sent to parties, jurors and counsel."
      />
      <scsc-section heading="Jury" class="mt-6">
        <scsc-card>
          <p class="font-medium">Jury summons \u2014 30-day notice</p>
          <p class="text-sm text-base-content/70">
            Last edited Sep 12, 2026 by D. Whitfield \xB7 3 parameters
          </p>
        </scsc-card>
      </scsc-section>
    </scsc-page-shell>
  \`,
})
export class PageShellSidebarDemo {
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'landmark', link: 'dashboard' },
        { label: 'Templates', icon: 'file-text', link: '.', badge: '14', exact: true },
        { label: 'Broadcasts', icon: 'bell', link: 'broadcasts' },
      ],
    },
    { title: 'Admin', items: [{ label: 'Settings', icon: 'settings', link: 'settings' }] },
  ];
}
`,html:`<scsc-page-shell hasSidebar>
  <scsc-masthead
    slot="masthead"
    title="Notification Service"
    subtitle="Admin Console"
    logoSrc="scsc-seal.png"
  >
    <scsc-icon-button icon="bell" label="Notifications" />
  </scsc-masthead>

  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <scsc-page-header
    title="Templates"
    description="Notices sent to parties, jurors and counsel."
  />
  <scsc-section heading="Jury" class="mt-6">
    <scsc-card>
      <p class="font-medium">Jury summons \u2014 30-day notice</p>
      <p class="text-sm text-base-content/70">
        Last edited Sep 12, 2026 by D. Whitfield \xB7 3 parameters
      </p>
    </scsc-card>
  </scsc-section>
</scsc-page-shell>
`}};var te={slug:`page-shell`,name:`Page Shell`,classes:[`ScscPageShell`],category:`Layout`,whenToUse:["Simple apps and single-purpose pages: navy strip, sticky masthead, content centred at 90rem with page padding. Add `hasSidebar` for a fixed left nav.","Below `lg` the sidebar moves into a modal drawer opened from the masthead, exactly as in `scsc-app-shell`: project the nav once. For an icon rail, a full-bleed canvas or master/detail use the [shells](/docs/components/shells) (`scsc-app-shell`, `scsc-split-shell`); for public sites use `scsc-portal-shell`.",`Wrap the router outlet with it once in the root component; do not nest shells.`,"Content already gets `scsc-pad-page` and the 90rem cap; start the page with `scsc-page-header`, not another container."],demos:[{id:`page-shell-basic`,title:`Without sidebar`,description:"Masthead in `[slot=masthead]`; the default slot is the padded, centred content region.",component:b,source:v[`page-shell-basic`],layout:`page`},{id:`page-shell-sidebar`,title:`With sidebar`,description:'`hasSidebar` adds a 15rem left column that sticks under the masthead. Switch the preview to mobile: the masthead shows "Open navigation" and the same sidebar opens in a drawer.',component:y,source:v[`page-shell-sidebar`],layout:`page`},{id:`page-shell-scroll`,title:`Long content`,description:`Scroll the frame: the strip and masthead stay at the top, and the sidebar sticks below them while the list scrolls. Nav links are relative to the layout route.`,component:f,source:v[`page-shell-scroll`],layout:`page`,height:`28rem`}],a11y:["Renders the skip link, the `<main>` landmark around the default slot and an `<aside>` for the sidebar; put navigation in `scsc-sidebar-nav` (a `<nav>`).",'Below `lg` the sidebar is a modal `<dialog>` named "Navigation": focus moves in and stays in, and Escape, the backdrop, Close menu or a navigation close it and return focus to the menu button.',`The navy strip is decorative and hidden when printing.`],keyboard:[{keys:`Tab`,action:`Skip link, masthead, sidebar links (from lg), then the content.`},{keys:`Enter / Space (Open navigation)`,action:`Opens the drawer and moves focus into it.`},{keys:`Escape`,action:`Closes the drawer and returns focus to the menu button.`}],appMustProvide:["Navigation in `scsc-sidebar-nav`, one `<h1>` in the main content, and a title for every route."],related:[`shells`,`masthead`,`sidebar-nav`,`page-structure`]};export{te as PAGE_SHELL_DOCS};