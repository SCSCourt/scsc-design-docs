import{Es as sD,Ms as uc,Na as Jb,Ps as ut,Xa as Pv,Yo as iD,bo as Y_,cn as UE,cs as lc,in as Ta,n as $N,ra as Af,ta as $f,va as G_,vn as Vn,xo as Yv,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var v=class i{collapsed=q(!0);sections=[{title:`Work`,items:[{label:`Queue`,icon:`comm.inbox`,link:`.`,badge:`12`,exact:!0},{label:`Hearings`,icon:`court.hearing`,link:`hearings`,children:[{label:`Today`,link:`hearings/today`},{label:`This week`,link:`hearings/week`}]},{label:`Filings`,icon:`court.filing`,link:`filings`}]},{title:`Administration`,items:[{label:`Settings`,icon:`action.settings`,link:`settings`}]}];static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-sidebar-nav-collapsed-demo`]],decls:7,vars:10,consts:[[1,`flex`,`min-h-screen`,`bg-base-200`],[1,`shrink-0`,`border-r`,`border-base-300`,`bg-base-100`,`p-3`,`transition-[width]`,`motion-reduce:transition-none`],[3,`sections`,`collapsed`],[1,`flex`,`flex-1`,`items-start`,`gap-2`,`p-4`],[`icon`,`panel-left`,`variant`,`ghost`,3,`click`,`label`],[1,`py-2`,`text-sm`,`text-base-content/70`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-sidebar-nav`,2),Lf(),Ga(3,`main`,3)(4,`scsc-icon-button`,4),lc(`click`,function(){return e.collapsed.set(!e.collapsed())}),Lf(),Ga(5,`p`,5),G_(6),Lf()()()),s&2&&(Jb(),Yv(`w-60`,!e.collapsed())(`w-16`,e.collapsed())(`px-2`,e.collapsed()),Jb(),Pv(`sections`,e.sections)(`collapsed`,e.collapsed()),Jb(2),Pv(`label`,e.collapsed()?`Expand sidebar`:`Collapse sidebar`),Jb(2),$f(` `,e.collapsed()?`Hover or focus an icon to see its name. Hearings opens a flyout of its pages.`:`Collapse the rail to give the page more room.`,` `))},dependencies:[$N,UE],encapsulation:2})};var f=class i{query=q(``);sections=[{items:[{label:`Dashboard`,icon:`nav.dashboard`,link:`.`,exact:!0},{label:`Work queue`,icon:`comm.inbox`,link:`queue`,badge:{text:`12`,tone:`primary`,srLabel:`12 open tasks`}},{id:`cases`,label:`Cases`,icon:`court.case`,link:`cases`,children:[{label:`Civil`,link:`cases/civil`},{label:`Family law`,link:`cases/family`},{id:`cases-criminal`,label:`Criminal`,children:[{label:`Felony`,link:`cases/criminal/felony`},{label:`Misdemeanor`,link:`cases/criminal/misdemeanor`}]}]},{label:`Calendar`,icon:`court.calendar`,link:`calendar`}]},{id:`reports`,title:`Reports`,collapsible:!0,items:[{label:`Filings by month`,icon:`data.bar-chart`,link:`reports/filings`},{label:`Time to disposition`,icon:`data.line-chart`,link:`reports/disposition`,status:`beta`},{label:`Legacy statistics`,icon:`data.table`,link:`reports/legacy`,status:`deprecated`}]},{title:`Help`,items:[{label:`Clerk handbook`,icon:`file.document`,href:`https://www.scscourt.org`,external:!0}]}];static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-sidebar-nav-nested-demo`]],decls:6,vars:3,consts:[[1,`flex`,`min-h-screen`,`flex-col`,`bg-base-200`,`sm:flex-row`],[1,`flex`,`shrink-0`,`flex-col`,`gap-3`,`border-b`,`border-base-300`,`bg-base-100`,`p-3`,`sm:w-64`,`sm:border-r`,`sm:border-b-0`],[`placeholder`,`Filter pages`,3,`valueChange`,`value`],[`label`,`Clerk Console`,`persistKey`,`docs-demo-clerk`,3,`sections`,`filter`],[1,`flex-1`,`p-6`,`text-sm`,`text-base-content/70`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-search-input`,2),sD(`valueChange`,function(b){return Y_(e.query,b)||(e.query=b),b}),Lf(),uc(3,`scsc-sidebar-nav`,3),Lf(),Ga(4,`main`,4),G_(5,` Open a group with its chevron, or type in the filter: matching pages stay, with the match marked. Reload the page: the open groups are remembered. `),Lf()()),s&2&&(Jb(2),iD(`value`,e.query),Jb(),Pv(`sections`,e.sections)(`filter`,e.query()))},dependencies:[Ta,$N],encapsulation:2})};var y=class i{role=q(`clerk`);sections=ut(()=>{let n=this.role(),s={items:[{label:`My queue`,icon:`inbox`,link:`.`,badge:`12`,exact:!0},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`Cases`,icon:`file-text`,link:`cases`}]},e={title:`Team`,items:[{label:`Assignments`,icon:`users`,link:`assignments`},{label:`Reports`,icon:`chart-column`,link:`reports`}]};return n===`admin`?[s,e,{title:`Administration`,items:[{label:`Users and roles`,icon:`shield-check`,link:`users`},{label:`Audit log`,icon:`history`,link:`audit`}]}]:n===`supervisor`?[s,e]:[s]});static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-sidebar-nav-roles-demo`]],decls:12,vars:2,consts:[[1,`flex`,`min-h-screen`,`flex-col`,`bg-base-200`,`sm:flex-row`],[1,`shrink-0`,`border-b`,`border-base-300`,`bg-base-100`,`p-3`,`sm:w-56`,`sm:border-r`,`sm:border-b-0`],[3,`sections`],[1,`flex-1`,`p-6`],[`label`,`Preview navigation as`,`for`,`sidebar-roles-role`,1,`max-w-56`],[`scsc-select`,``,`id`,`sidebar-roles-role`,3,`change`,`value`],[`value`,`clerk`],[`value`,`supervisor`],[`value`,`admin`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-sidebar-nav`,2),Lf(),Ga(3,`main`,3)(4,`scsc-form-field`,4)(5,`select`,5),lc(`change`,function(b){return e.role.set(b.target.value)}),Ga(6,`option`,6),G_(7,`Courtroom clerk`),Lf(),Ga(8,`option`,7),G_(9,`Supervisor`),Lf(),Ga(10,`option`,8),G_(11,`Administrator`),Lf()()()()()),s&2&&(Jb(2),Pv(`sections`,e.sections()),Jb(3),Pv(`value`,e.role()))},dependencies:[Vn,On,$N],encapsulation:2})};var S=class i{sections=[{items:[{label:`Dashboard`,icon:`landmark`,link:`.`,exact:!0},{label:`Cases`,icon:`file-text`,link:`cases`,badge:`8`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`}]},{title:`Administration`,items:[{label:`Users`,icon:`users`,link:`users`},{label:`Settings`,icon:`settings`,link:`settings`}]}];static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-sidebar-nav-sections-demo`]],decls:5,vars:1,consts:[[1,`flex`,`min-h-screen`,`flex-col`,`bg-base-200`,`sm:flex-row`],[1,`shrink-0`,`border-b`,`border-base-300`,`bg-base-100`,`p-3`,`sm:w-56`,`sm:border-r`,`sm:border-b-0`],[3,`sections`],[1,`flex-1`,`p-6`,`text-sm`,`text-base-content/70`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-sidebar-nav`,2),Lf(),Ga(3,`main`,3),G_(4,` Choose a section: the highlighted item follows the URL. `),Lf()()),s&2&&(Jb(2),Pv(`sections`,e.sections))},dependencies:[$N],encapsulation:2})};var h={"sidebar-nav-collapsed":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscIconButton, ScscNavSection, ScscSidebarNav } from '@scscourt/design';

@Component({
  selector: 'app-sidebar-nav-collapsed-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSidebarNav, ScscIconButton],
  template: \`
    <div class="flex min-h-screen bg-base-200">
      <div
        class="shrink-0 border-r border-base-300 bg-base-100 p-3 transition-[width] motion-reduce:transition-none"
        [class.w-60]="!collapsed()"
        [class.w-16]="collapsed()"
        [class.px-2]="collapsed()"
      >
        <scsc-sidebar-nav [sections]="sections" [collapsed]="collapsed()" />
      </div>
      <main class="flex flex-1 items-start gap-2 p-4">
        <scsc-icon-button
          icon="panel-left"
          [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
          variant="ghost"
          (click)="collapsed.set(!collapsed())"
        />
        <p class="py-2 text-sm text-base-content/70">
          {{
            collapsed()
              ? 'Hover or focus an icon to see its name. Hearings opens a flyout of its pages.'
              : 'Collapse the rail to give the page more room.'
          }}
        </p>
      </main>
    </div>
  \`,
})
export class SidebarNavCollapsedDemo {
  protected readonly collapsed = signal(true);

  protected readonly sections: ScscNavSection[] = [
    {
      title: 'Work',
      items: [
        { label: 'Queue', icon: 'comm.inbox', link: '.', badge: '12', exact: true },
        {
          label: 'Hearings',
          icon: 'court.hearing',
          link: 'hearings',
          children: [
            { label: 'Today', link: 'hearings/today' },
            { label: 'This week', link: 'hearings/week' },
          ],
        },
        { label: 'Filings', icon: 'court.filing', link: 'filings' },
      ],
    },
    {
      title: 'Administration',
      items: [{ label: 'Settings', icon: 'action.settings', link: 'settings' }],
    },
  ];
}
`,html:`<div class="flex min-h-screen bg-base-200">
  <div
    class="shrink-0 border-r border-base-300 bg-base-100 p-3 transition-[width] motion-reduce:transition-none"
    [class.w-60]="!collapsed()"
    [class.w-16]="collapsed()"
    [class.px-2]="collapsed()"
  >
    <scsc-sidebar-nav [sections]="sections" [collapsed]="collapsed()" />
  </div>
  <main class="flex flex-1 items-start gap-2 p-4">
    <scsc-icon-button
      icon="panel-left"
      [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
      variant="ghost"
      (click)="collapsed.set(!collapsed())"
    />
    <p class="py-2 text-sm text-base-content/70">
      {{
        collapsed()
          ? 'Hover or focus an icon to see its name. Hearings opens a flyout of its pages.'
          : 'Collapse the rail to give the page more room.'
      }}
    </p>
  </main>
</div>
`},"sidebar-nav-nested":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscNavSection, ScscSearchInput, ScscSidebarNav } from '@scscourt/design';

@Component({
  selector: 'app-sidebar-nav-nested-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSearchInput, ScscSidebarNav],
  template: \`
    <div class="flex min-h-screen flex-col bg-base-200 sm:flex-row">
      <div
        class="flex shrink-0 flex-col gap-3 border-b border-base-300 bg-base-100 p-3 sm:w-64 sm:border-r sm:border-b-0"
      >
        <scsc-search-input [(value)]="query" placeholder="Filter pages" />
        <scsc-sidebar-nav
          label="Clerk Console"
          [sections]="sections"
          [filter]="query()"
          persistKey="docs-demo-clerk"
        />
      </div>
      <main class="flex-1 p-6 text-sm text-base-content/70">
        Open a group with its chevron, or type in the filter: matching pages stay, with the match
        marked. Reload the page: the open groups are remembered.
      </main>
    </div>
  \`,
})
export class SidebarNavNestedDemo {
  protected readonly query = signal('');

  // Give groups an id: it is the key in [(expanded)] and in the persisted state.
  protected readonly sections: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'nav.dashboard', link: '.', exact: true },
        {
          label: 'Work queue',
          icon: 'comm.inbox',
          link: 'queue',
          badge: { text: '12', tone: 'primary', srLabel: '12 open tasks' },
        },
        {
          id: 'cases',
          label: 'Cases',
          icon: 'court.case',
          link: 'cases',
          children: [
            { label: 'Civil', link: 'cases/civil' },
            { label: 'Family law', link: 'cases/family' },
            {
              id: 'cases-criminal',
              label: 'Criminal',
              children: [
                { label: 'Felony', link: 'cases/criminal/felony' },
                { label: 'Misdemeanor', link: 'cases/criminal/misdemeanor' },
              ],
            },
          ],
        },
        { label: 'Calendar', icon: 'court.calendar', link: 'calendar' },
      ],
    },
    {
      id: 'reports',
      title: 'Reports',
      collapsible: true,
      items: [
        { label: 'Filings by month', icon: 'data.bar-chart', link: 'reports/filings' },
        {
          label: 'Time to disposition',
          icon: 'data.line-chart',
          link: 'reports/disposition',
          status: 'beta',
        },
        {
          label: 'Legacy statistics',
          icon: 'data.table',
          link: 'reports/legacy',
          status: 'deprecated',
        },
      ],
    },
    {
      title: 'Help',
      items: [
        {
          label: 'Clerk handbook',
          icon: 'file.document',
          href: 'https://www.scscourt.org',
          external: true,
        },
      ],
    },
  ];
}
`,html:`<div class="flex min-h-screen flex-col bg-base-200 sm:flex-row">
  <div
    class="flex shrink-0 flex-col gap-3 border-b border-base-300 bg-base-100 p-3 sm:w-64 sm:border-r sm:border-b-0"
  >
    <scsc-search-input [(value)]="query" placeholder="Filter pages" />
    <scsc-sidebar-nav
      label="Clerk Console"
      [sections]="sections"
      [filter]="query()"
      persistKey="docs-demo-clerk"
    />
  </div>
  <main class="flex-1 p-6 text-sm text-base-content/70">
    Open a group with its chevron, or type in the filter: matching pages stay, with the match
    marked. Reload the page: the open groups are remembered.
  </main>
</div>
`},"sidebar-nav-roles":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscFormField, ScscNavSection, ScscSelect, ScscSidebarNav } from '@scscourt/design';

type Role = 'clerk' | 'supervisor' | 'admin';

@Component({
  selector: 'app-sidebar-nav-roles-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSelect, ScscSidebarNav],
  template: \`
    <div class="flex min-h-screen flex-col bg-base-200 sm:flex-row">
      <div
        class="shrink-0 border-b border-base-300 bg-base-100 p-3 sm:w-56 sm:border-r sm:border-b-0"
      >
        <scsc-sidebar-nav [sections]="sections()" />
      </div>
      <main class="flex-1 p-6">
        <scsc-form-field class="max-w-56" label="Preview navigation as" for="sidebar-roles-role">
          <select
            scsc-select
            id="sidebar-roles-role"
            [value]="role()"
            (change)="role.set($any($event.target).value)"
          >
            <option value="clerk">Courtroom clerk</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Administrator</option>
          </select>
        </scsc-form-field>
      </main>
    </div>
  \`,
})
export class SidebarNavRolesDemo {
  /** In an app this comes from the signed-in user's roles. */
  protected readonly role = signal<Role>('clerk');

  /** Sections are data, so build them from permissions instead of hiding links in the template. */
  protected readonly sections = computed<ScscNavSection[]>(() => {
    const role = this.role();
    const work: ScscNavSection = {
      items: [
        { label: 'My queue', icon: 'inbox', link: '.', badge: '12', exact: true },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
        { label: 'Cases', icon: 'file-text', link: 'cases' },
      ],
    };
    const team: ScscNavSection = {
      title: 'Team',
      items: [
        { label: 'Assignments', icon: 'users', link: 'assignments' },
        { label: 'Reports', icon: 'chart-column', link: 'reports' },
      ],
    };
    const admin: ScscNavSection = {
      title: 'Administration',
      items: [
        { label: 'Users and roles', icon: 'shield-check', link: 'users' },
        { label: 'Audit log', icon: 'history', link: 'audit' },
      ],
    };
    if (role === 'admin') return [work, team, admin];
    if (role === 'supervisor') return [work, team];
    return [work];
  });
}
`,html:`<div class="flex min-h-screen flex-col bg-base-200 sm:flex-row">
  <div
    class="shrink-0 border-b border-base-300 bg-base-100 p-3 sm:w-56 sm:border-r sm:border-b-0"
  >
    <scsc-sidebar-nav [sections]="sections()" />
  </div>
  <main class="flex-1 p-6">
    <scsc-form-field class="max-w-56" label="Preview navigation as" for="sidebar-roles-role">
      <select
        scsc-select
        id="sidebar-roles-role"
        [value]="role()"
        (change)="role.set($any($event.target).value)"
      >
        <option value="clerk">Courtroom clerk</option>
        <option value="supervisor">Supervisor</option>
        <option value="admin">Administrator</option>
      </select>
    </scsc-form-field>
  </main>
</div>
`},"sidebar-nav-sections":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscNavSection, ScscSidebarNav } from '@scscourt/design';

@Component({
  selector: 'app-sidebar-nav-sections-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSidebarNav],
  template: \`
    <div class="flex min-h-screen flex-col bg-base-200 sm:flex-row">
      <div
        class="shrink-0 border-b border-base-300 bg-base-100 p-3 sm:w-56 sm:border-r sm:border-b-0"
      >
        <scsc-sidebar-nav [sections]="sections" />
      </div>
      <main class="flex-1 p-6 text-sm text-base-content/70">
        Choose a section: the highlighted item follows the URL.
      </main>
    </div>
  \`,
})
export class SidebarNavSectionsDemo {
  // Links are relative to this layout's route; \`exact\` keeps Dashboard from matching every child.
  protected readonly sections: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'landmark', link: '.', exact: true },
        { label: 'Cases', icon: 'file-text', link: 'cases', badge: '8' },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
      ],
    },
    {
      title: 'Administration',
      items: [
        { label: 'Users', icon: 'users', link: 'users' },
        { label: 'Settings', icon: 'settings', link: 'settings' },
      ],
    },
  ];
}
`,html:`<div class="flex min-h-screen flex-col bg-base-200 sm:flex-row">
  <div
    class="shrink-0 border-b border-base-300 bg-base-100 p-3 sm:w-56 sm:border-r sm:border-b-0"
  >
    <scsc-sidebar-nav [sections]="sections" />
  </div>
  <main class="flex-1 p-6 text-sm text-base-content/70">
    Choose a section: the highlighted item follows the URL.
  </main>
</div>
`}};var ne={slug:`sidebar-nav`,name:`Sidebar Nav`,classes:[`ScscSidebarNav`],category:`Navigation`,whenToUse:["Primary navigation for staff and back-office apps, in the `[slot=sidebar]` of `scsc-app-shell` or `scsc-page-shell`.","Group links into sections with a `title`; keep to two or three sections and a handful of links each.","Sections are data: build them in a `computed()` from the user's roles rather than hiding links in the template.","Set `exact: true` on a dashboard link at the section root so it is not active on every child route.","Nest up to three levels with `children`. A group with its own `link` keeps the link and gets a separate chevron; give groups an `id` so `[(expanded)]` and `persistKey` stay stable when labels change.","Project it once into `[slot=sidebar]`: the app and page shells move it into their mobile drawer and close the drawer after a navigation.","For public portals use the horizontal `scsc-primary-nav`; for sub-navigation within a page use `scsc-tab-nav`."],setup:`// Links are router links: the app needs a router.
provideRouter(routes)`,demos:[{id:`sidebar-nav-sections`,title:`Sections and badges`,description:"Two sections; the first has no title, and `badge` shows a count. Links are relative to the layout route, so the active style follows the URL: pick an item.",component:S,source:h[`sidebar-nav-sections`],layout:`page`,height:`22rem`},{id:`sidebar-nav-nested`,title:`Nested groups, filter and remembered state`,description:"Groups with and without their own page, a collapsible section, badges with spoken words, `status` labels and an external link. `filter` keeps matches (marked) and opens their branches; `persistKey` remembers open groups.",component:f,source:h[`sidebar-nav-nested`],layout:`page`,height:`34rem`},{id:`sidebar-nav-collapsed`,title:`Collapsed rail with flyouts`,description:"`collapsed` shows icons only, each with a tooltip; the badge becomes a dot and is read with the name. A group opens a flyout menu of its pages.",component:v,source:h[`sidebar-nav-collapsed`],layout:`page`,height:`20rem`},{id:`sidebar-nav-roles`,title:`Sections by role`,description:"The same nav for a clerk, a supervisor and an administrator: `sections` is a `computed()` of the role.",component:y,source:h[`sidebar-nav-roles`],layout:`page`,height:`24rem`}],keyboard:[{keys:`Tab / Shift+Tab`,action:`Moves through links and group buttons in reading order.`},{keys:`Enter`,action:`Follows a link; on a group button or chevron, opens or closes the group.`},{keys:`Space`,action:`Opens or closes a group (buttons only).`},{keys:`Enter / Space / ArrowDown (rail group)`,action:`Opens the flyout menu on its first page.`},{keys:`ArrowUp / ArrowDown (flyout)`,action:`Moves between pages; Home and End jump.`},{keys:`Escape (flyout)`,action:`Closes the flyout and returns focus to the rail icon.`}],a11y:['Renders a `<nav>` named by `label` ("Main" by default) with lists of links; the current page carries `aria-current="page"`, shown with a tint, bold text and a gold accent bar, so colour is not the only signal.',"Section titles label their lists (`aria-labelledby`); with `headingLevel` they are also headings.",'Groups are disclosure buttons (`aria-expanded`, `aria-controls`); a chevron beside a group link is named "Show {label} pages".',`In the rail every link is named by visually hidden text (label, badge words, status) and shows it as a tooltip; groups are menu buttons.`,`External links say "opens in a new tab". Icons are decorative.`],appMustProvide:["A distinct `label` when a page has more than one `<nav>`.",'An `srLabel` on badges whose number needs words ("12 open tasks").'],related:[`shells`,`page-shell`,`navbar`,`masthead`]};export{ne as SIDEBAR_NAV_DOCS};