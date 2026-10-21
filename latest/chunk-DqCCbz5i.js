import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{E as Bue,Es as sD,Ft as Nz,Gs as zS,H as FN,Hs as y_,Ka as Ov,Lo as d_,Ma as JT,Mi as vr,Ms as uc,Na as Jb,No as cc,Nr as jo,Q as Gue,Qt as SN,Un as Za,Xa as Pv,Yo as iD,Zo as i_,_i as tN,_s as o_,bo as Y_,c as $r,cs as lc,ds as nD,ea as zz,gi as tF,gn as VN,ha as Eg,ii as qo,ka as Ig,ks as t_,l as $ue,mi as sr,mn as Uue,n as $N,nn as TN,nt as IA,oi as que,pi as sn,ra as Af,rr as da,tt as Hue,va as G_,vn as Vn,wa as HS,ws as r_,xn as WA,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var ce=(i,e)=>e.role;function de(i,e){if(i&1&&(Ga(0,`span`,26),G_(1),Lf(),Ga(2,`span`,27),G_(3),Lf()),i&2){let t=e.$implicit;Jb(),nD(t.name),Jb(2),nD(t.email)}}function me(i,e){if(i&1&&(Ga(0,`li`),uc(1,`scsc-role-badge`,29),Lf()),i&2){let t=e.$implicit;Jb(),Pv(`role`,t)}}function ue(i,e){if(i&1&&(Ga(0,`ul`,28),o_(1,me,2,1,`li`,null,r_),Lf()),i&2){let t=e.$implicit;cc(`aria-label`,`Roles for `+t.name),Jb(),i_(t.roles)}}function pe(i,e){i&1&&(Ga(0,`scsc-tag`,30),G_(1,`Active`),Lf())}function fe(i,e){i&1&&(Ga(0,`scsc-tag`,31),G_(1,`Deactivated`),Lf())}function ge(i,e){if(i&1&&JT(0,pe,2,0,`scsc-tag`,30)(1,fe,2,0,`scsc-tag`,31),i&2){let t=e.$implicit;t_(t.active?0:1)}}function ve(i,e){if(i&1&&(Ga(0,`option`,20),G_(1),Lf()),i&2){let t=e.$implicit,s=y_();Pv(`value`,t)(`selected`,t===s.draft().division),Jb(),nD(t)}}function Se(i,e){if(i&1){let t=d_();Ga(0,`label`,22)(1,`input`,32),lc(`change`,function(){let c=Eg(t).$implicit,l=y_();return Ig(l.toggleRole(c.role))}),Lf(),Ga(2,`span`)(3,`span`,26),G_(4),Lf(),Ga(5,`span`,27),G_(6),Lf()()()}if(i&2){let t=e.$implicit,s=y_();Jb(),Pv(`checked`,s.draft().roles.includes(t.role)),Jb(3),nD(t.label),Jb(2),nD(t.hint)}}var be=[{role:`clerk`,label:`Clerk`,hint:`Dockets, filings and fees`},{role:`judicial`,label:`Judicial officer`,hint:`Rulings and sealed records`},{role:`admin`,label:`Administrator`,hint:`Users, roles and settings`},{role:`attorney`,label:`Attorney`,hint:`E-filing for represented parties`}];var De=[{id:`users-roles`,title:`Users & roles`,description:"App shell; `scsc-table` with role badges and status tags per row, row actions (Edit, Send password reset, Deactivate with confirmation / Reactivate), and a `scsc-drawer` edit form with a roles fieldset and a sticky footer.",component:class i{roleChoices=be;divisions=[`Civil`,`Criminal`,`Family`,`Probate`,`Jury Services`];drawerOpen=q(!1);status=q(``);nav=[{title:`Administration`,items:[{label:`Users & roles`,icon:`users`,link:`.`,exact:!0},{label:`Audit log`,icon:`history`,link:`audit`},{label:`Settings`,icon:`settings`,link:`settings`}]}];users=q([{id:`u1`,name:`Maria Chen`,email:`mchen@scscourt.org`,division:`Civil`,roles:[`clerk`],active:!0,lastSignIn:`2026-09-30`},{id:`u2`,name:`David Okafor`,email:`dokafor@scscourt.org`,division:`Civil`,roles:[`clerk`],active:!0,lastSignIn:`2026-09-30`},{id:`u3`,name:`Hon. Laura Moreno`,email:`lmoreno@scscourt.org`,division:`Civil`,roles:[`judicial`],active:!0,lastSignIn:`2026-09-29`},{id:`u4`,name:`Priya Nair`,email:`pnair@scscourt.org`,division:`Civil`,roles:[`admin`,`clerk`],active:!0,lastSignIn:`2026-09-30`},{id:`u5`,name:`Tomás Herrera`,email:`therrera@scscourt.org`,division:`Family`,roles:[`clerk`],active:!1,lastSignIn:`2026-06-12`},{id:`u6`,name:`Grace Kim`,email:`gkim@scscourt.org`,division:`Jury Services`,roles:[`clerk`],active:!0,lastSignIn:`2026-09-28`}]);draft=q(this.blank());columns=[{key:`name`,header:`Name`,rowHeader:!0,sortable:!0},{key:`division`,header:`Division`,sortable:!0,width:`9rem`},{key:`roles`,header:`Roles`,value:e=>e.roles.join(`, `)},{key:`active`,header:`Status`,width:`9rem`},{key:`lastSignIn`,header:`Last sign-in`,type:`date`,sortable:!0,width:`9rem`}];byId=e=>e.id;byName=e=>e.name;actions=[{id:`edit`,label:`Edit`,icon:`action.edit`},{id:`reset`,label:`Send password reset`,icon:`people.email`},{id:`deactivate`,label:`Deactivate`,icon:`people.user-inactive`,tone:`danger`,confirm:!0,visible:e=>e.active,separatorBefore:!0},{id:`reactivate`,label:`Reactivate`,icon:`people.user-active`,visible:e=>!e.active}];onAction(e){let t=e.row;if(e.action.id===`edit`)return this.edit(t);if(e.action.id===`reset`)return this.status.set(`Password reset sent to ${t.email}.`);let s$1=e.action.id===`reactivate`;this.users.update(c=>c.map(l=>l.id===t.id?s(r({},l),{active:s$1}):l)),this.status.set(`${t.name} ${s$1?`reactivated`:`deactivated`}.`)}edit(e){this.draft.set(e?s(r({},e),{roles:[...e.roles]}):this.blank()),this.drawerOpen.set(!0)}set(e,t){this.draft.update(s$2=>s(r({},s$2),{[e]:t}))}toggleRole(e){this.draft.update(t=>s(r({},t),{roles:t.roles.includes(e)?t.roles.filter(s=>s!==e):[...t.roles,e]}))}save(){let e=this.draft();!e.name.trim()||!e.email.trim()||(e.id?this.users.update(t=>t.map(s=>s.id===e.id?e:s)):this.users.update(t=>[...t,s(r({},e),{id:`u${t.length+1}`})]),this.status.set(`${e.name} saved.`),this.drawerOpen.set(!1))}blank(){return{id:``,name:``,email:``,division:`Civil`,roles:[`clerk`],active:!0,lastSignIn:``}}static ɵfac=function(t){return new(t||i)};static ɵcmp=Af({type:i,selectors:[[`app-users-roles-template`]],decls:35,vars:13,consts:[[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Administration`,`logoSrc`,`scsc-seal.png`],[`name`,`Priya Nair`,`email`,`pnair@scscourt.org`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`],[1,`flex`,`flex-col`,`gap-6`,`p-4`,`lg:p-8`],[`title`,`Users & roles`,`description`,`Who can sign in to Court Operations, and what they can do.`],[`slot`,`actions`,`size`,`sm`,3,`click`],[`aria-live`,`polite`,1,`sr-only`],[`label`,`Users`,`searchable`,``,`searchPlaceholder`,`Search names or emails…`,`responsive`,`stack`,3,`action`,`columns`,`rows`,`rowKey`,`rowLabel`,`rowActions`,`inlineActions`],[`scscCell`,`name`],[`scscCell`,`roles`],[`scscCell`,`active`],[`size`,`md`,3,`openChange`,`open`,`title`],[`id`,`user-form`,1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`],[`label`,`Full name`,`for`,`user-name`,`required`,``],[`scsc-input`,``,`id`,`user-name`,`name`,`name`,`required`,``,3,`ngModelChange`,`ngModel`],[`label`,`Work email`,`for`,`user-email`,`required`,``],[`scsc-input`,``,`id`,`user-email`,`name`,`email`,`type`,`email`,`required`,``,3,`ngModelChange`,`ngModel`],[`label`,`Division`,`for`,`user-division`],[`scsc-select`,``,`id`,`user-division`,`name`,`division`,3,`ngModelChange`,`ngModel`],[3,`value`,`selected`],[`legend`,`Roles`,`hint`,`Pick every role this person needs.`],[1,`flex`,`items-start`,`gap-3`,`py-1`],[`slot`,`footer`,1,`flex`,`justify-end`,`gap-2`],[`variant`,`ghost`,3,`click`],[3,`click`],[1,`block`,`font-medium`],[1,`block`,`text-sm`,`text-base-content/70`],[1,`flex`,`flex-wrap`,`gap-1`],[3,`role`],[`size`,`sm`,`tone`,`success`,`icon`,`status.online`],[`size`,`sm`,`icon`,`status.offline`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`]],template:function(t,s){t&1&&(Ga(0,`scsc-app-shell`)(1,`scsc-masthead`,0)(2,`scsc-user-menu`,1)(3,`li`)(4,`button`,2),G_(5,`Sign out`),Lf()()()(),uc(6,`scsc-sidebar-nav`,3),Ga(7,`div`,4)(8,`scsc-page-header`,5)(9,`scsc-button`,6),lc(`click`,function(){return s.edit(null)}),G_(10,`Add user`),Lf()(),Ga(11,`p`,7),G_(12),Lf(),Ga(13,`scsc-table`,8),lc(`action`,function(l){return s.onAction(l)}),Ov(14,de,4,2,`ng-template`,9)(15,ue,3,1,`ng-template`,10)(16,ge,2,1,`ng-template`,11),Lf()(),Ga(17,`scsc-drawer`,12),sD(`openChange`,function(l){return Y_(s.drawerOpen,l)||(s.drawerOpen=l),l}),Ga(18,`form`,13),lc(`ngSubmit`,function(){return s.save()}),Ga(19,`scsc-form-field`,14)(20,`input`,15),HS(),lc(`ngModelChange`,function(l){return s.set(`name`,l)}),Lf()(),Ga(21,`scsc-form-field`,16)(22,`input`,17),HS(),lc(`ngModelChange`,function(l){return s.set(`email`,l)}),Lf()(),Ga(23,`scsc-form-field`,18)(24,`select`,19),HS(),lc(`ngModelChange`,function(l){return s.set(`division`,l)}),o_(25,ve,2,3,`option`,20,r_),Lf()(),Ga(27,`scsc-fieldset`,21),o_(28,Se,7,3,`label`,22,ce),Lf()(),Ga(30,`div`,23)(31,`scsc-button`,24),lc(`click`,function(){return s.drawerOpen.set(!1)}),G_(32,`Cancel`),Lf(),Ga(33,`scsc-button`,25),lc(`click`,function(){return s.save()}),G_(34,`Save user`),Lf()()()()),t&2&&(Jb(6),Pv(`sections`,s.nav),Jb(6),nD(s.status()),Jb(),Pv(`columns`,s.columns)(`rows`,s.users())(`rowKey`,s.byId)(`rowLabel`,s.byName)(`rowActions`,s.actions)(`inlineActions`,1),Jb(4),iD(`open`,s.drawerOpen),Pv(`title`,s.draft().id?`Edit `+s.draft().name:`Add user`),Jb(3),Pv(`ngModel`,s.draft().name),zS(),Jb(2),Pv(`ngModel`,s.draft().email),zS(),Jb(2),Pv(`ngModel`,s.draft().division),zS(),Jb(),i_(s.divisions),Jb(3),i_(s.roleChoices))},dependencies:[Gue,Bue,$ue,Uue,IA,tN,Hue,que,WA,zz,Nz,SN,sn,da,jo,vr,$r,Vn,qo,FN,TN,tF,On,$N,Za,sr,VN],encapsulation:2})},source:{"users-roles":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscAppShell,
  ScscButton,
  ScscCellDef,
  ScscCheckbox,
  ScscDrawer,
  ScscFieldset,
  ScscFormField,
  ScscInput,
  ScscMasthead,
  ScscPageHeader,
  ScscRoleBadge,
  ScscSelect,
  ScscSidebarNav,
  ScscTable,
  ScscTag,
  ScscUserMenu,
  type ScscColumn,
  type ScscNavSection,
  type ScscRole,
  type ScscRowAction,
  type ScscRowActionEvent,
} from '@scscourt/design';

interface StaffUser {
  id: string;
  name: string;
  email: string;
  division: string;
  roles: ScscRole[];
  active: boolean;
  lastSignIn: string;
}

const ROLE_CHOICES: { role: ScscRole; label: string; hint: string }[] = [
  { role: 'clerk', label: 'Clerk', hint: 'Dockets, filings and fees' },
  { role: 'judicial', label: 'Judicial officer', hint: 'Rulings and sealed records' },
  { role: 'admin', label: 'Administrator', hint: 'Users, roles and settings' },
  { role: 'attorney', label: 'Attorney', hint: 'E-filing for represented parties' },
];

@Component({
  selector: 'app-users-roles-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ScscAppShell,
    ScscButton,
    ScscCellDef,
    ScscCheckbox,
    ScscDrawer,
    ScscFieldset,
    ScscFormField,
    ScscInput,
    ScscMasthead,
    ScscPageHeader,
    ScscRoleBadge,
    ScscSelect,
    ScscSidebarNav,
    ScscTable,
    ScscTag,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Administration"
        logoSrc="scsc-seal.png"
      >
        <scsc-user-menu name="Priya Nair" email="pnair@scscourt.org">
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <div class="flex flex-col gap-6 p-4 lg:p-8">
        <scsc-page-header
          title="Users & roles"
          description="Who can sign in to Court Operations, and what they can do."
        >
          <scsc-button slot="actions" size="sm" (click)="edit(null)">Add user</scsc-button>
        </scsc-page-header>
        <p class="sr-only" aria-live="polite">{{ status() }}</p>

        <scsc-table
          label="Users"
          [columns]="columns"
          [rows]="users()"
          [rowKey]="byId"
          [rowLabel]="byName"
          [rowActions]="actions"
          [inlineActions]="1"
          (action)="onAction($event)"
          searchable
          searchPlaceholder="Search names or emails\u2026"
          responsive="stack"
        >
          <ng-template scscCell="name" let-row>
            <span class="block font-medium">{{ row.name }}</span>
            <span class="block text-sm text-base-content/70">{{ row.email }}</span>
          </ng-template>
          <ng-template scscCell="roles" let-row>
            <ul class="flex flex-wrap gap-1" [attr.aria-label]="'Roles for ' + row.name">
              @for (r of row.roles; track r) {
                <li><scsc-role-badge [role]="r" /></li>
              }
            </ul>
          </ng-template>
          <ng-template scscCell="active" let-row>
            @if (row.active) {
              <scsc-tag size="sm" tone="success" icon="status.online">Active</scsc-tag>
            } @else {
              <scsc-tag size="sm" icon="status.offline">Deactivated</scsc-tag>
            }
          </ng-template>
        </scsc-table>
      </div>

      <scsc-drawer
        [(open)]="drawerOpen"
        [title]="draft().id ? 'Edit ' + draft().name : 'Add user'"
        size="md"
      >
        <form id="user-form" class="flex flex-col gap-4" (ngSubmit)="save()">
          <scsc-form-field label="Full name" for="user-name" required>
            <input
              scsc-input
              id="user-name"
              name="name"
              required
              [ngModel]="draft().name"
              (ngModelChange)="set('name', $event)"
            />
          </scsc-form-field>
          <scsc-form-field label="Work email" for="user-email" required>
            <input
              scsc-input
              id="user-email"
              name="email"
              type="email"
              required
              [ngModel]="draft().email"
              (ngModelChange)="set('email', $event)"
            />
          </scsc-form-field>
          <scsc-form-field label="Division" for="user-division">
            <select
              scsc-select
              id="user-division"
              name="division"
              [ngModel]="draft().division"
              (ngModelChange)="set('division', $event)"
            >
              @for (d of divisions; track d) {
                <option [value]="d" [selected]="d === draft().division">{{ d }}</option>
              }
            </select>
          </scsc-form-field>
          <scsc-fieldset legend="Roles" hint="Pick every role this person needs.">
            @for (c of roleChoices; track c.role) {
              <label class="flex items-start gap-3 py-1">
                <input
                  type="checkbox"
                  scsc-checkbox
                  [checked]="draft().roles.includes(c.role)"
                  (change)="toggleRole(c.role)"
                />
                <span>
                  <span class="block font-medium">{{ c.label }}</span>
                  <span class="block text-sm text-base-content/70">{{ c.hint }}</span>
                </span>
              </label>
            }
          </scsc-fieldset>
        </form>
        <div slot="footer" class="flex justify-end gap-2">
          <scsc-button variant="ghost" (click)="drawerOpen.set(false)">Cancel</scsc-button>
          <scsc-button (click)="save()">Save user</scsc-button>
        </div>
      </scsc-drawer>
    </scsc-app-shell>
  \`,
})
export class UsersRolesTemplate {
  protected readonly roleChoices = ROLE_CHOICES;
  protected readonly divisions = ['Civil', 'Criminal', 'Family', 'Probate', 'Jury Services'];
  protected readonly drawerOpen = signal(false);
  protected readonly status = signal('');
  protected readonly nav: ScscNavSection[] = [
    {
      title: 'Administration',
      items: [
        { label: 'Users & roles', icon: 'users', link: '.', exact: true },
        { label: 'Audit log', icon: 'history', link: 'audit' },
        { label: 'Settings', icon: 'settings', link: 'settings' },
      ],
    },
  ];
  protected readonly users = signal<StaffUser[]>([
    {
      id: 'u1',
      name: 'Maria Chen',
      email: 'mchen@scscourt.org',
      division: 'Civil',
      roles: ['clerk'],
      active: true,
      lastSignIn: '2026-09-30',
    },
    {
      id: 'u2',
      name: 'David Okafor',
      email: 'dokafor@scscourt.org',
      division: 'Civil',
      roles: ['clerk'],
      active: true,
      lastSignIn: '2026-09-30',
    },
    {
      id: 'u3',
      name: 'Hon. Laura Moreno',
      email: 'lmoreno@scscourt.org',
      division: 'Civil',
      roles: ['judicial'],
      active: true,
      lastSignIn: '2026-09-29',
    },
    {
      id: 'u4',
      name: 'Priya Nair',
      email: 'pnair@scscourt.org',
      division: 'Civil',
      roles: ['admin', 'clerk'],
      active: true,
      lastSignIn: '2026-09-30',
    },
    {
      id: 'u5',
      name: 'Tom\xE1s Herrera',
      email: 'therrera@scscourt.org',
      division: 'Family',
      roles: ['clerk'],
      active: false,
      lastSignIn: '2026-06-12',
    },
    {
      id: 'u6',
      name: 'Grace Kim',
      email: 'gkim@scscourt.org',
      division: 'Jury Services',
      roles: ['clerk'],
      active: true,
      lastSignIn: '2026-09-28',
    },
  ]);
  protected readonly draft = signal<StaffUser>(this.blank());

  protected readonly columns: ScscColumn<StaffUser>[] = [
    { key: 'name', header: 'Name', rowHeader: true, sortable: true },
    { key: 'division', header: 'Division', sortable: true, width: '9rem' },
    { key: 'roles', header: 'Roles', value: (u) => u.roles.join(', ') },
    { key: 'active', header: 'Status', width: '9rem' },
    { key: 'lastSignIn', header: 'Last sign-in', type: 'date', sortable: true, width: '9rem' },
  ];
  protected readonly byId = (u: StaffUser) => u.id;
  protected readonly byName = (u: StaffUser) => u.name;
  protected readonly actions: ScscRowAction<StaffUser>[] = [
    { id: 'edit', label: 'Edit', icon: 'action.edit' },
    { id: 'reset', label: 'Send password reset', icon: 'people.email' },
    {
      id: 'deactivate',
      label: 'Deactivate',
      icon: 'people.user-inactive',
      tone: 'danger',
      confirm: true,
      visible: (u) => u.active,
      separatorBefore: true,
    },
    {
      id: 'reactivate',
      label: 'Reactivate',
      icon: 'people.user-active',
      visible: (u) => !u.active,
    },
  ];

  protected onAction(e: ScscRowActionEvent<StaffUser>): void {
    const u = e.row;
    if (e.action.id === 'edit') return this.edit(u);
    if (e.action.id === 'reset') return this.status.set(\`Password reset sent to \${u.email}.\`);
    const active = e.action.id === 'reactivate';
    this.users.update((list) => list.map((x) => (x.id === u.id ? { ...x, active } : x)));
    this.status.set(\`\${u.name} \${active ? 'reactivated' : 'deactivated'}.\`);
  }

  protected edit(user: StaffUser | null): void {
    this.draft.set(user ? { ...user, roles: [...user.roles] } : this.blank());
    this.drawerOpen.set(true);
  }

  protected set<K extends 'name' | 'email' | 'division'>(key: K, value: StaffUser[K]): void {
    this.draft.update((d) => ({ ...d, [key]: value }));
  }

  protected toggleRole(role: ScscRole): void {
    this.draft.update((d) => ({
      ...d,
      roles: d.roles.includes(role) ? d.roles.filter((r) => r !== role) : [...d.roles, role],
    }));
  }

  protected save(): void {
    const d = this.draft();
    if (!d.name.trim() || !d.email.trim()) return;
    if (d.id) {
      this.users.update((list) => list.map((u) => (u.id === d.id ? d : u)));
    } else {
      this.users.update((list) => [...list, { ...d, id: \`u\${list.length + 1}\` }]);
    }
    this.status.set(\`\${d.name} saved.\`);
    this.drawerOpen.set(false);
  }

  private blank(): StaffUser {
    return {
      id: '',
      name: '',
      email: '',
      division: 'Civil',
      roles: ['clerk'],
      active: true,
      lastSignIn: '',
    };
  }
}
`,html:`<scsc-app-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Administration"
    logoSrc="scsc-seal.png"
  >
    <scsc-user-menu name="Priya Nair" email="pnair@scscourt.org">
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <div class="flex flex-col gap-6 p-4 lg:p-8">
    <scsc-page-header
      title="Users & roles"
      description="Who can sign in to Court Operations, and what they can do."
    >
      <scsc-button slot="actions" size="sm" (click)="edit(null)">Add user</scsc-button>
    </scsc-page-header>
    <p class="sr-only" aria-live="polite">{{ status() }}</p>

    <scsc-table
      label="Users"
      [columns]="columns"
      [rows]="users()"
      [rowKey]="byId"
      [rowLabel]="byName"
      [rowActions]="actions"
      [inlineActions]="1"
      (action)="onAction($event)"
      searchable
      searchPlaceholder="Search names or emails\u2026"
      responsive="stack"
    >
      <ng-template scscCell="name" let-row>
        <span class="block font-medium">{{ row.name }}</span>
        <span class="block text-sm text-base-content/70">{{ row.email }}</span>
      </ng-template>
      <ng-template scscCell="roles" let-row>
        <ul class="flex flex-wrap gap-1" [attr.aria-label]="'Roles for ' + row.name">
          @for (r of row.roles; track r) {
            <li><scsc-role-badge [role]="r" /></li>
          }
        </ul>
      </ng-template>
      <ng-template scscCell="active" let-row>
        @if (row.active) {
          <scsc-tag size="sm" tone="success" icon="status.online">Active</scsc-tag>
        } @else {
          <scsc-tag size="sm" icon="status.offline">Deactivated</scsc-tag>
        }
      </ng-template>
    </scsc-table>
  </div>

  <scsc-drawer
    [(open)]="drawerOpen"
    [title]="draft().id ? 'Edit ' + draft().name : 'Add user'"
    size="md"
  >
    <form id="user-form" class="flex flex-col gap-4" (ngSubmit)="save()">
      <scsc-form-field label="Full name" for="user-name" required>
        <input
          scsc-input
          id="user-name"
          name="name"
          required
          [ngModel]="draft().name"
          (ngModelChange)="set('name', $event)"
        />
      </scsc-form-field>
      <scsc-form-field label="Work email" for="user-email" required>
        <input
          scsc-input
          id="user-email"
          name="email"
          type="email"
          required
          [ngModel]="draft().email"
          (ngModelChange)="set('email', $event)"
        />
      </scsc-form-field>
      <scsc-form-field label="Division" for="user-division">
        <select
          scsc-select
          id="user-division"
          name="division"
          [ngModel]="draft().division"
          (ngModelChange)="set('division', $event)"
        >
          @for (d of divisions; track d) {
            <option [value]="d" [selected]="d === draft().division">{{ d }}</option>
          }
        </select>
      </scsc-form-field>
      <scsc-fieldset legend="Roles" hint="Pick every role this person needs.">
        @for (c of roleChoices; track c.role) {
          <label class="flex items-start gap-3 py-1">
            <input
              type="checkbox"
              scsc-checkbox
              [checked]="draft().roles.includes(c.role)"
              (change)="toggleRole(c.role)"
            />
            <span>
              <span class="block font-medium">{{ c.label }}</span>
              <span class="block text-sm text-base-content/70">{{ c.hint }}</span>
            </span>
          </label>
        }
      </scsc-fieldset>
    </form>
    <div slot="footer" class="flex justify-end gap-2">
      <scsc-button variant="ghost" (click)="drawerOpen.set(false)">Cancel</scsc-button>
      <scsc-button (click)="save()">Save user</scsc-button>
    </div>
  </scsc-drawer>
</scsc-app-shell>
`}}[`users-roles`],layout:`page`,height:`48rem`}];export{De as DEMOS};