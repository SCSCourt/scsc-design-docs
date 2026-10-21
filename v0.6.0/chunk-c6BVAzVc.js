import{Cs as rM,En as Wt,Go as g$1,H as FN,Hs as y_,Ka as Ov,Lo as d_,Ms as uc,Na as Jb,No as cc,Nr as jo,Ps as ut,Wr as nF,Xa as Pv,Zi as za,Zo as i_,_s as o_,bt as Lc,cs as lc,ds as nD,gi as tF,ha as Eg,ka as Ig,kn as XF,kt as NE,n as $N,nn as TN,pi as sn,ra as Af,va as G_,vn as Vn,ws as r_,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function K(t,o){if(t&1&&uc(0,`scsc-role-badge`,1),t&2){let e=o.$implicit;Pv(`role`,e)}}var b=class t{roles=[`public`,`attorney`,`clerk`,`judicial`,`admin`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-roles-badges-demo`]],decls:3,vars:0,consts:[[1,`flex`,`flex-wrap`,`gap-2`],[3,`role`]],template:function(e,c){e&1&&(Ga(0,`div`,0),o_(1,K,1,1,`scsc-role-badge`,1,r_),Lf()),e&2&&(Jb(),i_(c.roles))},dependencies:[tF],encapsulation:2})};var Q=()=>[`clerk`,`admin`];function X(t,o){if(t&1){let e=d_();Ga(0,`label`,3)(1,`input`,10),lc(`change`,function(I){let _=Eg(e).$implicit,Z=y_();return Ig(Z.toggle(_,I.target.checked))}),Lf(),uc(2,`scsc-role-badge`,11),Lf()}if(t&2){let e=o.$implicit,c=y_();Jb(),Pv(`checked`,c.roleService.roles().has(e)),Jb(),Pv(`role`,e)}}function Y(t,o){t&1&&(Ga(0,`scsc-alert`,12),G_(1,` Documents on cases where you are counsel of record. `),Lf())}function ee(t,o){t&1&&(Ga(0,`scsc-alert`,13),G_(1,` Docket editing and fee adjustments. `),Ga(2,`div`,14)(3,`scsc-button`,15),G_(4,`Seal case`),Lf()()())}function te(t,o){t&1&&(Ga(0,`scsc-alert`,16),G_(1,` Tentative rulings drafts and chambers notes. `),Lf())}var k=class t{roleService=g$1(Lc);allRoles=[`public`,`attorney`,`clerk`,`judicial`,`admin`];toggle(o,e){let c=new Set(this.roleService.roles());e?c.add(o):c.delete(o),this.roleService.setRoles([...c])}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-roles-gating-demo`]],decls:14,vars:4,consts:[[1,`grid`,`gap-6`,`lg:grid-cols-2`],[1,`flex`,`flex-col`,`gap-2`],[1,`mb-2`,`text-sm`,`font-medium`],[1,`flex`,`items-center`,`gap-3`,`text-sm`],[1,`flex`,`flex-col`,`gap-3`],[`tone`,`muted`,`size`,`sm`],[`status`,`info`,`title`,`Public`],[`status`,`success`,`title`,`Attorney`,4,`scscRequireRole`],[`status`,`warning`,`title`,`Clerk or Administrator`,4,`scscRequireRole`],[`status`,`error`,`title`,`Judicial Officer`,4,`scscRequireRole`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[3,`role`],[`status`,`success`,`title`,`Attorney`],[`status`,`warning`,`title`,`Clerk or Administrator`],[1,`mt-2`],[`size`,`sm`,`variant`,`secondary`],[`status`,`error`,`title`,`Judicial Officer`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`fieldset`,1)(2,`legend`,2),G_(3,`Signed-in user's roles`),Lf(),o_(4,X,3,2,`label`,3,r_),Lf(),Ga(6,`div`,4)(7,`scsc-text`,5),G_(8,`What this user can see:`),Lf(),Ga(9,`scsc-alert`,6),G_(10,`Case search and calendar are visible to everyone.`),Lf(),Ov(11,Y,2,0,`scsc-alert`,7)(12,ee,5,0,`scsc-alert`,8)(13,te,2,0,`scsc-alert`,9),Lf()()),e&2&&(Jb(4),i_(c.allRoles),Jb(7),Pv(`scscRequireRole`,`attorney`),Jb(),Pv(`scscRequireRole`,rM(3,Q)),Jb(),Pv(`scscRequireRole`,`judicial`))},dependencies:[za,sn,jo,nF,tF,NE],encapsulation:2})};function oe(t,o){if(t&1&&uc(0,`scsc-role-badge`,12),t&2){let e=o.$implicit;Pv(`role`,e)}}var D=class t{roleService=g$1(Lc);items=[{label:`Case search`,icon:`search`,link:`.`,exact:!0},{label:`Calendar`,icon:`calendar`,link:`calendar`},{label:`My filings`,icon:`file-text`,link:`filings`,roles:[`attorney`]},{label:`Work queue`,icon:`inbox`,link:`queue`,roles:[`clerk`,`admin`]},{label:`Fee adjustments`,icon:`receipt`,link:`fees`,roles:[`clerk`,`admin`]}];roles=ut(()=>[...this.roleService.roles()]);nav=ut(()=>[{items:this.items.filter(o=>!o.roles||o.roles.some(e=>this.roleService.has(e)))}]);preview(o){this.roleService.setRoles(o===`public`?[`public`]:[`public`,o])}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-roles-navigation-demo`]],decls:18,vars:1,consts:[[`hasSidebar`,``],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`],[`slot`,`sidebar`,3,`sections`],[`title`,`Preview the portal`,`description`,`Choose an audience: the navigation shows only what that audience can open.`],[1,`mt-6`,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`label`,`Audience`,`for`,`roles-nav-preview`],[`scsc-select`,``,`id`,`roles-nav-preview`,3,`change`],[`value`,`public`],[`value`,`attorney`],[`value`,`clerk`],[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`size`,`sm`,`tone`,`muted`],[3,`role`]],template:function(e,c){e&1&&(Ga(0,`scsc-page-shell`,0),uc(1,`scsc-masthead`,1)(2,`scsc-sidebar-nav`,2)(3,`scsc-page-header`,3),Ga(4,`div`,4)(5,`scsc-form-field`,5)(6,`select`,6),lc(`change`,function(_){return c.preview(_.target.value)}),Ga(7,`option`,7),G_(8,`Member of the public`),Lf(),Ga(9,`option`,8),G_(10,`Attorney`),Lf(),Ga(11,`option`,9),G_(12,`Clerk`),Lf()()(),Ga(13,`div`,10)(14,`scsc-text`,11),G_(15,`Current roles:`),Lf(),o_(16,oe,1,1,`scsc-role-badge`,12,r_),Lf()()()),e&2&&(Jb(2),Pv(`sections`,c.nav()),Jb(14),i_(c.roles()))},dependencies:[Vn,FN,TN,XF,tF,On,$N,NE],encapsulation:2})};var se=(t,o)=>o.name;function ae(t,o){if(t&1&&(Ga(0,`li`),uc(1,`scsc-role-badge`,7),Lf()),t&2){let e=o.$implicit;Jb(),Pv(`role`,e)}}function re(t,o){if(t&1&&(Ga(0,`li`,1),uc(1,`scsc-avatar`,2),Ga(2,`div`,3)(3,`p`,4),G_(4),Lf(),Ga(5,`p`,5),G_(6),Lf()(),Ga(7,`ul`,6),o_(8,ae,2,1,`li`,null,r_),Lf()()),t&2){let e=o.$implicit;Jb(),Pv(`name`,e.name),Jb(3),nD(e.name),Jb(2),nD(e.title),Jb(),cc(`aria-label`,`Roles for `+e.name),Jb(),i_(e.roles)}}var C=class t{staff=[{name:`Hon. Laura Moreno`,title:`Judge, Dept. 10`,roles:[`judicial`]},{name:`David Okafor`,title:`Courtroom clerk, Dept. 10`,roles:[`clerk`]},{name:`Priya Nair`,title:`Court systems administrator`,roles:[`admin`,`clerk`]},{name:`Jordan Ellis, Esq.`,title:`Attorney (e-filer)`,roles:[`attorney`]}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-roles-directory-demo`]],decls:3,vars:0,consts:[[`aria-label`,`Staff directory`,1,`flex`,`max-w-2xl`,`flex-col`,`divide-y`,`divide-base-300`,`rounded-box`,`border`,`border-base-300`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`,`px-4`,`py-3`],[`size`,`sm`,3,`name`],[1,`min-w-0`,`flex-1`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`],[1,`flex`,`flex-wrap`,`gap-1.5`],[3,`role`]],template:function(e,c){e&1&&(Ga(0,`ul`,0),o_(1,re,10,4,`li`,1,se),Lf()),e&2&&(Jb(),i_(c.staff))},dependencies:[Wt,tF],encapsulation:2})};function ce(t,o){if(t&1&&(Ga(0,`li`),uc(1,`scsc-role-badge`,2),Lf()),t&2){let e=o.$implicit;Jb(),Pv(`role`,e)}}var w=class t{roles=[`public`,`attorney`,`clerk`,`judicial`,`admin`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-roles-dark-demo`]],decls:4,vars:0,consts:[[`data-theme`,`scsc-design-dark`,1,`rounded-box`,`bg-base-100`,`p-4`,`text-base-content`],[`aria-label`,`Roles`,1,`flex`,`flex-wrap`,`gap-2`],[3,`role`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`ul`,1),o_(2,ce,2,1,`li`,null,r_),Lf()()),e&2&&(Jb(2),i_(c.roles))},dependencies:[tF],encapsulation:2})};var g={"roles-badges":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscRoleBadge, type ScscRole } from '@scscourt/design';

@Component({
  selector: 'app-roles-badges-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscRoleBadge],
  template: \`
    <div class="flex flex-wrap gap-2">
      @for (role of roles; track role) {
        <scsc-role-badge [role]="role" />
      }
    </div>
  \`,
})
export class RolesBadgesDemo {
  /** Every value of \`ScscRole\`; label and colour come from the shared role map. */
  protected readonly roles: ScscRole[] = ['public', 'attorney', 'clerk', 'judicial', 'admin'];
}
`,html:`<div class="flex flex-wrap gap-2">
  @for (role of roles; track role) {
    <scsc-role-badge [role]="role" />
  }
</div>
`},"roles-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscRoleBadge, type ScscRole } from '@scscourt/design';

@Component({
  selector: 'app-roles-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscRoleBadge],
  template: \`
    <div data-theme="scsc-design-dark" class="rounded-box bg-base-100 p-4 text-base-content">
      <ul class="flex flex-wrap gap-2" aria-label="Roles">
        @for (r of roles; track r) {
          <li><scsc-role-badge [role]="r" /></li>
        }
      </ul>
    </div>
  \`,
})
export class RolesDarkDemo {
  protected readonly roles: ScscRole[] = ['public', 'attorney', 'clerk', 'judicial', 'admin'];
}
`,html:`<div data-theme="scsc-design-dark" class="rounded-box bg-base-100 p-4 text-base-content">
  <ul class="flex flex-wrap gap-2" aria-label="Roles">
    @for (r of roles; track r) {
      <li><scsc-role-badge [role]="r" /></li>
    }
  </ul>
</div>
`},"roles-directory":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatar, ScscRoleBadge, type ScscRole } from '@scscourt/design';

interface StaffMember {
  name: string;
  title: string;
  roles: ScscRole[];
}

@Component({
  selector: 'app-roles-directory-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatar, ScscRoleBadge],
  template: \`
    <ul
      class="flex max-w-2xl flex-col divide-y divide-base-300 rounded-box border border-base-300"
      aria-label="Staff directory"
    >
      @for (p of staff; track p.name) {
        <li class="flex flex-wrap items-center gap-3 px-4 py-3">
          <scsc-avatar [name]="p.name" size="sm" />
          <div class="min-w-0 flex-1">
            <p class="font-medium">{{ p.name }}</p>
            <p class="text-sm text-base-content/70">{{ p.title }}</p>
          </div>
          <ul class="flex flex-wrap gap-1.5" [attr.aria-label]="'Roles for ' + p.name">
            @for (r of p.roles; track r) {
              <li><scsc-role-badge [role]="r" /></li>
            }
          </ul>
        </li>
      }
    </ul>
  \`,
})
export class RolesDirectoryDemo {
  protected readonly staff: StaffMember[] = [
    { name: 'Hon. Laura Moreno', title: 'Judge, Dept. 10', roles: ['judicial'] },
    { name: 'David Okafor', title: 'Courtroom clerk, Dept. 10', roles: ['clerk'] },
    { name: 'Priya Nair', title: 'Court systems administrator', roles: ['admin', 'clerk'] },
    { name: 'Jordan Ellis, Esq.', title: 'Attorney (e-filer)', roles: ['attorney'] },
  ];
}
`,html:`<ul
  class="flex max-w-2xl flex-col divide-y divide-base-300 rounded-box border border-base-300"
  aria-label="Staff directory"
>
  @for (p of staff; track p.name) {
    <li class="flex flex-wrap items-center gap-3 px-4 py-3">
      <scsc-avatar [name]="p.name" size="sm" />
      <div class="min-w-0 flex-1">
        <p class="font-medium">{{ p.name }}</p>
        <p class="text-sm text-base-content/70">{{ p.title }}</p>
      </div>
      <ul class="flex flex-wrap gap-1.5" [attr.aria-label]="'Roles for ' + p.name">
        @for (r of p.roles; track r) {
          <li><scsc-role-badge [role]="r" /></li>
        }
      </ul>
    </li>
  }
</ul>
`},"roles-gating":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScscAlert,
  ScscButton,
  ScscCheckbox,
  ScscRequireRole,
  ScscRoleBadge,
  ScscRoleService,
  ScscText,
  type ScscRole,
} from '@scscourt/design';

@Component({
  selector: 'app-roles-gating-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscCheckbox, ScscRequireRole, ScscRoleBadge, ScscText],
  template: \`
    <div class="grid gap-6 lg:grid-cols-2">
      <fieldset class="flex flex-col gap-2">
        <legend class="mb-2 text-sm font-medium">Signed-in user's roles</legend>
        @for (role of allRoles; track role) {
          <label class="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              scsc-checkbox
              [checked]="roleService.roles().has(role)"
              (change)="toggle(role, $any($event.target).checked)"
            />
            <scsc-role-badge [role]="role" />
          </label>
        }
      </fieldset>

      <div class="flex flex-col gap-3">
        <scsc-text tone="muted" size="sm">What this user can see:</scsc-text>

        <scsc-alert status="info" title="Public"
          >Case search and calendar are visible to everyone.</scsc-alert
        >

        <scsc-alert *scscRequireRole="'attorney'" status="success" title="Attorney">
          Documents on cases where you are counsel of record.
        </scsc-alert>

        <scsc-alert
          *scscRequireRole="['clerk', 'admin']"
          status="warning"
          title="Clerk or Administrator"
        >
          Docket editing and fee adjustments.
          <div class="mt-2">
            <scsc-button size="sm" variant="secondary">Seal case</scsc-button>
          </div>
        </scsc-alert>

        <scsc-alert *scscRequireRole="'judicial'" status="error" title="Judicial Officer">
          Tentative rulings drafts and chambers notes.
        </scsc-alert>
      </div>
    </div>
  \`,
})
export class RolesGatingDemo {
  /** Seed this from your auth provider at sign-in (see the page's Setup section). */
  protected readonly roleService = inject(ScscRoleService);
  protected readonly allRoles: ScscRole[] = ['public', 'attorney', 'clerk', 'judicial', 'admin'];

  protected toggle(role: ScscRole, on: boolean): void {
    const next = new Set(this.roleService.roles());
    if (on) next.add(role);
    else next.delete(role);
    this.roleService.setRoles([...next]);
  }
}
`,html:`<div class="grid gap-6 lg:grid-cols-2">
  <fieldset class="flex flex-col gap-2">
    <legend class="mb-2 text-sm font-medium">Signed-in user's roles</legend>
    @for (role of allRoles; track role) {
      <label class="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          scsc-checkbox
          [checked]="roleService.roles().has(role)"
          (change)="toggle(role, $any($event.target).checked)"
        />
        <scsc-role-badge [role]="role" />
      </label>
    }
  </fieldset>

  <div class="flex flex-col gap-3">
    <scsc-text tone="muted" size="sm">What this user can see:</scsc-text>

    <scsc-alert status="info" title="Public"
      >Case search and calendar are visible to everyone.</scsc-alert
    >

    <scsc-alert *scscRequireRole="'attorney'" status="success" title="Attorney">
      Documents on cases where you are counsel of record.
    </scsc-alert>

    <scsc-alert
      *scscRequireRole="['clerk', 'admin']"
      status="warning"
      title="Clerk or Administrator"
    >
      Docket editing and fee adjustments.
      <div class="mt-2">
        <scsc-button size="sm" variant="secondary">Seal case</scsc-button>
      </div>
    </scsc-alert>

    <scsc-alert *scscRequireRole="'judicial'" status="error" title="Judicial Officer">
      Tentative rulings drafts and chambers notes.
    </scsc-alert>
  </div>
</div>
`},"roles-navigation":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  ScscFormField,
  ScscMasthead,
  ScscPageHeader,
  ScscPageShell,
  ScscRoleBadge,
  ScscRoleService,
  ScscSelect,
  ScscSidebarNav,
  ScscText,
  type ScscNavItem,
  type ScscNavSection,
  type ScscRole,
} from '@scscourt/design';

/** Each item lists the roles that may see it; no list means everyone. */
interface GatedItem extends ScscNavItem {
  roles?: ScscRole[];
}

@Component({
  selector: 'app-roles-navigation-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscFormField,
    ScscMasthead,
    ScscPageHeader,
    ScscPageShell,
    ScscRoleBadge,
    ScscSelect,
    ScscSidebarNav,
    ScscText,
  ],
  template: \`
    <scsc-page-shell hasSidebar>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California, County of Santa Clara"
        logoSrc="scsc-seal.png"
      />
      <scsc-sidebar-nav slot="sidebar" [sections]="nav()" />

      <scsc-page-header
        title="Preview the portal"
        description="Choose an audience: the navigation shows only what that audience can open."
      />
      <div class="mt-6 flex max-w-md flex-col gap-3">
        <scsc-form-field label="Audience" for="roles-nav-preview">
          <select scsc-select id="roles-nav-preview" (change)="preview($any($event.target).value)">
            <option value="public">Member of the public</option>
            <option value="attorney">Attorney</option>
            <option value="clerk">Clerk</option>
          </select>
        </scsc-form-field>
        <div class="flex flex-wrap items-center gap-2">
          <scsc-text size="sm" tone="muted">Current roles:</scsc-text>
          @for (role of roles(); track role) {
            <scsc-role-badge [role]="role" />
          }
        </div>
      </div>
    </scsc-page-shell>
  \`,
})
export class RolesNavigationDemo {
  private readonly roleService = inject(ScscRoleService);

  /** Links are relative to the layout's route; '.' is the home item. */
  private readonly items: GatedItem[] = [
    { label: 'Case search', icon: 'search', link: '.', exact: true },
    { label: 'Calendar', icon: 'calendar', link: 'calendar' },
    { label: 'My filings', icon: 'file-text', link: 'filings', roles: ['attorney'] },
    { label: 'Work queue', icon: 'inbox', link: 'queue', roles: ['clerk', 'admin'] },
    { label: 'Fee adjustments', icon: 'receipt', link: 'fees', roles: ['clerk', 'admin'] },
  ];

  protected readonly roles = computed(() => [...this.roleService.roles()]);

  /** Nav data cannot hold a structural directive, so filter it with the roles signal instead. */
  protected readonly nav = computed<ScscNavSection[]>(() => [
    {
      items: this.items.filter((i) => !i.roles || i.roles.some((r) => this.roleService.has(r))),
    },
  ]);

  protected preview(role: ScscRole): void {
    this.roleService.setRoles(role === 'public' ? ['public'] : ['public', role]);
  }
}
`,html:`<scsc-page-shell hasSidebar>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California, County of Santa Clara"
    logoSrc="scsc-seal.png"
  />
  <scsc-sidebar-nav slot="sidebar" [sections]="nav()" />

  <scsc-page-header
    title="Preview the portal"
    description="Choose an audience: the navigation shows only what that audience can open."
  />
  <div class="mt-6 flex max-w-md flex-col gap-3">
    <scsc-form-field label="Audience" for="roles-nav-preview">
      <select scsc-select id="roles-nav-preview" (change)="preview($any($event.target).value)">
        <option value="public">Member of the public</option>
        <option value="attorney">Attorney</option>
        <option value="clerk">Clerk</option>
      </select>
    </scsc-form-field>
    <div class="flex flex-wrap items-center gap-2">
      <scsc-text size="sm" tone="muted">Current roles:</scsc-text>
      @for (role of roles(); track role) {
        <scsc-role-badge [role]="role" />
      }
    </div>
  </div>
</scsc-page-shell>
`}};var Ee={slug:`roles`,name:`Roles`,classes:[`ScscRoleService`,`ScscRoleBadge`,`ScscRequireRole`],category:`Court`,summary:"Role-aware UI for court apps. `ScscRoleService` holds the signed-in user's `ScscRole`s as a signal; `*scscRequireRole` renders a template only when the user has one of the required roles; `scsc-role-badge` shows a role with its fixed label and tone.",whenToUse:["Hide or show navigation items, actions and panels by role (attorney documents, clerk tools, judicial drafts) without sprinkling `@if` on a service call. For data-driven UI such as `ScscNavSection[]`, filter in a `computed` that reads `roles()`.","`*scscRequireRole` accepts one role or an array; an array means *any of*. It re-evaluates when the service's `roles` signal changes, so sign-out hides gated content immediately.",`This is a UI convenience, not authorization. The API must enforce permissions; the directive only keeps the screen honest.`,"Use `scsc-role-badge` in user menus, audit logs and admin tables so each role is always the same colour and wording."],setup:`// Seed roles once from your auth provider, e.g. in an APP_INITIALIZER or after sign-in.
import { inject } from '@angular/core';
import { ScscRoleService, type ScscRole } from '@scscourt/design';

export function seedRoles(): void {
  const roles = inject(ScscRoleService);
  const auth = inject(AuthService); // your app's auth; roles come from the token/claims
  auth.claims$.subscribe((claims) => roles.setRoles(claims.roles as ScscRole[]));
  // On sign-out call roles.setRoles(['public']) so gated UI disappears.
}

// ScscRoleService is providedIn: 'root' \u2014 no provider registration is needed.`,demos:[{id:`roles-badges`,title:`Role badges`,description:"The five `ScscRole` values with their fixed labels and tones.",component:b,source:g[`roles-badges`]},{id:`roles-gating`,title:`Gate UI by role`,description:"Toggle the user's roles on the service; the panels use `*scscRequireRole` with a single role and with an array.",component:k,source:g[`roles-gating`]},{id:`roles-navigation`,title:`Role-aware navigation`,description:"A portal page whose sidebar items are filtered in a `computed` that reads the role signal; the select previews the portal as another role. Nav links are relative to the layout route, so clicking one highlights it.",component:D,source:g[`roles-navigation`],layout:`page`,height:`26rem`},{id:`roles-directory`,title:`Staff directory`,description:`People with their role badges in a labelled list per person.`,component:C,source:g[`roles-directory`]},{id:`roles-dark`,title:`Dark theme`,description:`Every role badge in the dark theme.`,component:w,source:g[`roles-dark`]}],a11y:[`Gated content is removed from the DOM, not hidden, so screen readers never encounter controls the user cannot act on.`,`Role badges are plain text; the tone is decorative.`,`When roles change after load, move focus or announce the change if the removed content contained the user's focus.`],related:[`badge`,`app-menu`,`sidebar-nav`,`directives`]};export{Ee as ROLES_DOCS};