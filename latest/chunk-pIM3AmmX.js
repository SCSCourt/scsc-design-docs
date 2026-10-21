import{Cs as rM,Ma as JT,Ms as uc,Na as Jb,Xa as Pv,Yt as RN,cs as lc,ks as t_,kt as NE,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var u={"app-menu-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AppMenuItem, ScscAppMenu, ScscText } from '@scscourt/design';

// Inline SVG logos so the demo renders branded tiles with no network dependency.
const svgLogo = (letter: string, bg: string, fg: string): string =>
  \`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>\` +
  \`<rect width='40' height='40' rx='9' fill='\${bg}'/>\` +
  \`<text x='20' y='27' font-family='Georgia,serif' font-size='20' font-weight='bold' fill='\${fg}' text-anchor='middle'>\${letter}</text></svg>\`;

@Component({
  selector: 'app-app-menu-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAppMenu, ScscText],
  template: \`
    <div class="flex items-center justify-end gap-4">
      @if (lastOpened(); as app) {
        <scsc-text tone="muted" size="sm">Opened: {{ app.name }}</scsc-text>
      }
      <!-- In your app: [apps]="menu.apps()" [loading]="menu.loading()" [error]="menu.error()" -->
      <scsc-app-menu [apps]="apps" activeApp="venue" (appSelected)="openApp($event)" />
    </div>
  \`,
})
export class AppMenuBasicDemo {
  protected readonly lastOpened = signal<AppMenuItem | null>(null);

  // Shape of GET /api/v1/apps. Pinned tiles surface first; placeholders render disabled with "Soon".
  protected readonly apps: AppMenuItem[] = [
    {
      id: 1,
      key: 'venue',
      name: 'Venue',
      description: 'Judicial assignment & locations',
      iconName: 'building',
      logoUrl: svgLogo('V', '%231e2a4a', '%23c9a227'),
      url: '#',
      openInNewTab: false,
      category: 'Admin',
      isPlaceholder: false,
      isInternal: true,
      isFavorite: true,
      pinned: true,
    },
    {
      id: 2,
      key: 'notification',
      name: 'Notification Service',
      description: 'Notices & broadcasts',
      iconName: 'bell',
      logoUrl: svgLogo('N', '%23c9a227', '%231e2a4a'),
      url: '#',
      openInNewTab: false,
      category: 'Operations',
      isPlaceholder: false,
      isInternal: true,
      isFavorite: false,
      pinned: false,
    },
    {
      id: 3,
      key: 'cpo',
      name: 'CPO',
      description: 'On-bench proceedings',
      iconName: 'gavel',
      url: '#',
      openInNewTab: false,
      category: 'Judicial',
      isPlaceholder: true,
      isInternal: true,
      isFavorite: false,
      pinned: false,
    },
    {
      id: 4,
      key: 'tbdia',
      name: 'TBDIA Review Queue',
      description: 'Review queue',
      iconName: 'clipboard-check',
      url: '#',
      openInNewTab: false,
      category: 'Judicial',
      isPlaceholder: true,
      isInternal: true,
      isFavorite: false,
      pinned: false,
    },
  ];

  protected openApp(app: AppMenuItem): void {
    this.lastOpened.set(app);
    // In your app: window.open(app.url, app.openInNewTab ? '_blank' : '_self');
  }
}
`,html:`<div class="flex items-center justify-end gap-4">
  @if (lastOpened(); as app) {
    <scsc-text tone="muted" size="sm">Opened: {{ app.name }}</scsc-text>
  }
  <!-- In your app: [apps]="menu.apps()" [loading]="menu.loading()" [error]="menu.error()" -->
  <scsc-app-menu [apps]="apps" activeApp="venue" (appSelected)="openApp($event)" />
</div>
`},"app-menu-logo-fallback":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppMenuItem, ScscAppMenu } from '@scscourt/design';

@Component({
  selector: 'app-app-menu-logo-fallback-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAppMenu],
  template: \`
    <!-- Venue's logoUrl 404s \u2192 the tile shows its Lucide icon, never a broken image -->
    <div class="flex justify-end">
      <scsc-app-menu [apps]="apps" />
    </div>
  \`,
})
export class AppMenuLogoFallbackDemo {
  protected readonly apps: AppMenuItem[] = [
    {
      id: 1,
      key: 'venue',
      name: 'Venue',
      description: 'Judicial assignment & locations',
      iconName: 'building',
      logoUrl: 'https://invalid.example/logo.png',
      url: '#',
      openInNewTab: false,
      category: 'Admin',
      isPlaceholder: false,
      isInternal: true,
      isFavorite: false,
      pinned: false,
    },
    {
      id: 2,
      key: 'fees',
      name: 'Fee Schedule',
      description: 'Filing fees & waivers',
      iconName: 'receipt',
      logoUrl: null,
      url: '#',
      openInNewTab: true,
      category: 'Public',
      isPlaceholder: false,
      isInternal: false,
      isFavorite: false,
      pinned: false,
    },
  ];
}
`,html:`<!-- Venue's logoUrl 404s \u2192 the tile shows its Lucide icon, never a broken image -->
<div class="flex justify-end">
  <scsc-app-menu [apps]="apps" />
</div>
`},"app-menu-states":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAppMenu, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-app-menu-states-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAppMenu, ScscText],
  template: \`
    <!-- Open each waffle to see the state the service would put it in -->
    <div class="flex flex-wrap justify-end gap-8">
      <div class="flex flex-col items-center gap-1">
        <scsc-app-menu [loading]="true" label="Open app menu (loading)" />
        <scsc-text tone="muted" size="sm">Loading</scsc-text>
      </div>
      <div class="flex flex-col items-center gap-1">
        <scsc-app-menu error="Failed to load apps (HTTP 401)." label="Open app menu (error)" />
        <scsc-text tone="muted" size="sm">Error</scsc-text>
      </div>
      <div class="flex flex-col items-center gap-1">
        <scsc-app-menu [apps]="[]" label="Open app menu (empty)" />
        <scsc-text tone="muted" size="sm">Empty</scsc-text>
      </div>
    </div>
  \`,
})
export class AppMenuStatesDemo {}
`,html:`<!-- Open each waffle to see the state the service would put it in -->
<div class="flex flex-wrap justify-end gap-8">
  <div class="flex flex-col items-center gap-1">
    <scsc-app-menu [loading]="true" label="Open app menu (loading)" />
    <scsc-text tone="muted" size="sm">Loading</scsc-text>
  </div>
  <div class="flex flex-col items-center gap-1">
    <scsc-app-menu error="Failed to load apps (HTTP 401)." label="Open app menu (error)" />
    <scsc-text tone="muted" size="sm">Error</scsc-text>
  </div>
  <div class="flex flex-col items-center gap-1">
    <scsc-app-menu [apps]="[]" label="Open app menu (empty)" />
    <scsc-text tone="muted" size="sm">Empty</scsc-text>
  </div>
</div>
`}};function D(t,n){t&1&&(Ga(0,`scsc-text`,1),G_(1),Lf()),t&2&&(Jb(),$f(`Opened: `,n.name))}var M=(t,n,e)=>`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='9' fill='${n}'/><text x='20' y='27' font-family='Georgia,serif' font-size='20' font-weight='bold' fill='${e}' text-anchor='middle'>${t}</text></svg>`;var f=class t{lastOpened=q(null);apps=[{id:1,key:`venue`,name:`Venue`,description:`Judicial assignment & locations`,iconName:`building`,logoUrl:M(`V`,`%231e2a4a`,`%23c9a227`),url:`#`,openInNewTab:!1,category:`Admin`,isPlaceholder:!1,isInternal:!0,isFavorite:!0,pinned:!0},{id:2,key:`notification`,name:`Notification Service`,description:`Notices & broadcasts`,iconName:`bell`,logoUrl:M(`N`,`%23c9a227`,`%231e2a4a`),url:`#`,openInNewTab:!1,category:`Operations`,isPlaceholder:!1,isInternal:!0,isFavorite:!1,pinned:!1},{id:3,key:`cpo`,name:`CPO`,description:`On-bench proceedings`,iconName:`gavel`,url:`#`,openInNewTab:!1,category:`Judicial`,isPlaceholder:!0,isInternal:!0,isFavorite:!1,pinned:!1},{id:4,key:`tbdia`,name:`TBDIA Review Queue`,description:`Review queue`,iconName:`clipboard-check`,url:`#`,openInNewTab:!1,category:`Judicial`,isPlaceholder:!0,isInternal:!0,isFavorite:!1,pinned:!1}];openApp(n){this.lastOpened.set(n)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-app-menu-basic-demo`]],decls:3,vars:2,consts:[[1,`flex`,`items-center`,`justify-end`,`gap-4`],[`tone`,`muted`,`size`,`sm`],[`activeApp`,`venue`,3,`appSelected`,`apps`]],template:function(e,i){if(e&1&&(Ga(0,`div`,0),JT(1,D,2,1,`scsc-text`,1),Ga(2,`scsc-app-menu`,2),lc(`appSelected`,function(T){return i.openApp(T)}),Lf()()),e&2){let v;Jb(),t_((v=i.lastOpened())?1:-1,v),Jb(),Pv(`apps`,i.apps)}},dependencies:[RN,NE],encapsulation:2})};var g=class t{apps=[{id:1,key:`venue`,name:`Venue`,description:`Judicial assignment & locations`,iconName:`building`,logoUrl:`https://invalid.example/logo.png`,url:`#`,openInNewTab:!1,category:`Admin`,isPlaceholder:!1,isInternal:!0,isFavorite:!1,pinned:!1},{id:2,key:`fees`,name:`Fee Schedule`,description:`Filing fees & waivers`,iconName:`receipt`,logoUrl:null,url:`#`,openInNewTab:!0,category:`Public`,isPlaceholder:!1,isInternal:!1,isFavorite:!1,pinned:!1}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-app-menu-logo-fallback-demo`]],decls:2,vars:1,consts:[[1,`flex`,`justify-end`],[3,`apps`]],template:function(e,i){e&1&&(Ga(0,`div`,0),uc(1,`scsc-app-menu`,1),Lf()),e&2&&(Jb(),Pv(`apps`,i.apps))},dependencies:[RN],encapsulation:2})};var N=()=>[];var h=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-app-menu-states-demo`]],decls:13,vars:3,consts:[[1,`flex`,`flex-wrap`,`justify-end`,`gap-8`],[1,`flex`,`flex-col`,`items-center`,`gap-1`],[`label`,`Open app menu (loading)`,3,`loading`],[`tone`,`muted`,`size`,`sm`],[`error`,`Failed to load apps (HTTP 401).`,`label`,`Open app menu (error)`],[`label`,`Open app menu (empty)`,3,`apps`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-app-menu`,2),Ga(3,`scsc-text`,3),G_(4,`Loading`),Lf()(),Ga(5,`div`,1),uc(6,`scsc-app-menu`,4),Ga(7,`scsc-text`,3),G_(8,`Error`),Lf()(),Ga(9,`div`,1),uc(10,`scsc-app-menu`,5),Ga(11,`scsc-text`,3),G_(12,`Empty`),Lf()()()),e&2&&(Jb(2),Pv(`loading`,!0),Jb(8),Pv(`apps`,rM(2,N)))},dependencies:[RN,NE],encapsulation:2})};var H={slug:`app-menu`,name:`App Menu`,classes:[`ScscAppMenu`,`ScscAppMenuService`],category:`Navigation`,summary:"The shared cross-app switcher: a waffle button in the masthead that opens a grid of branded tiles grouped by category. `ScscAppMenuService` loads the persona-filtered catalog from the Compass API; `scsc-app-menu` renders whatever it is given.",whenToUse:["Every court app that participates in the Compass catalog: put one `scsc-app-menu` in the masthead so staff can move between apps.","Bind the service's `apps()` / `loading()` / `error()` signals and call `load()` once at startup; the component is presentational and never fetches.","Handle `appSelected` to open the app (`url`, honouring `openInNewTab`). Placeholder tiles are disabled and never emit.","Pass `activeApp` (the current app's `key`) so the current tile is marked; `pinned` tiles surface in their own group first."],setup:`// app.config.ts \u2014 configure the data source once
provideScscAppMenu({
  apiBaseUrl: 'https://compass.internal/api',
  scope: 'api://compass/.default',
  tokenProvider: () => msal.acquireTokenSilent({ scopes: ['api://compass/.default'] }).then((r) => r.accessToken),
}),

// masthead \u2014 bind the service signals and load on startup
private readonly menu = inject(ScscAppMenuService);
constructor() { void this.menu.load(); }

<scsc-app-menu [apps]="menu.apps()" [loading]="menu.loading()" [error]="menu.error()" activeApp="venue" (appSelected)="open($event)" />`,demos:[{id:`app-menu-basic`,title:`Catalog`,description:`Four tiles: a pinned favourite, a regular app and two placeholders. Open the waffle and pick one.`,component:f,source:u[`app-menu-basic`]},{id:`app-menu-states`,title:`Loading, error, empty`,description:"What the service's `loading`, `error` and an empty `apps` array look like.",component:h,source:u[`app-menu-states`]},{id:`app-menu-logo-fallback`,title:`Logo fallback`,description:"A `logoUrl` that fails to load degrades to the tile's Lucide icon, never a broken image.",component:g,source:u[`app-menu-logo-fallback`]}],a11y:["The waffle is an icon-only disclosure button named by `label`, with `aria-expanded`. It opens on click, Enter or Space, never on focus alone; Escape, tabbing out or a click outside closes the panel (WCAG 1.4.13).",'The panel is not a `role="menu"`: each category is a `role="group"` named by its heading, the tiles are plain buttons in the Tab order, and the current app carries `aria-current`. Choosing a tile closes the panel and returns focus to the waffle before `appSelected` emits.',"A tile's description is its `aria-describedby`, and the focused or hovered tile's description shows at the foot of the panel, so keyboard and screen-reader users get it, not only mouse users.",'Placeholder tiles use the native `disabled` attribute and a visible "Soon" badge.','The error state is a live `role="alert"` region; the loading spinner is decorative and accompanied by visible text.'],keyboard:[{keys:`Enter / Space`,action:`On the waffle: opens or closes the panel; focus stays on the waffle.`},{keys:`Tab / Shift + Tab (panel open)`,action:`Through each tile (placeholder tiles are skipped); moving focus out of the waffle and panel closes it.`},{keys:`Enter / Space (on a tile)`,action:"Closes the panel, returns focus to the waffle and emits `appSelected`."},{keys:`Escape`,action:`Closes the panel and returns focus to the waffle.`}],appMustProvide:[`App names and descriptions that make sense out of context: each description is read with its tile.`],related:[`navbar`,`masthead`,`shells`]};export{H as APP_MENU_DOCS};