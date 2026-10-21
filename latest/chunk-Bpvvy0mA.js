import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Aa as It,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,H as FN,Hs as y_,In as Xz,Lo as d_,Ms as uc,Na as Jb,Qt as SN,Vr as mN,Xa as Pv,Y as Fs,Yo as iD,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cn as UE,cs as lc,ds as nD,gn as VN,ha as Eg,ii as qo,ka as Ig,kt as NE,l as $ue,mn as Uue,ms as nu,n as $N,nn as TN,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,w as Bo,wa as HS,xs as q,y as At,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var oe=(d,l)=>l.id;var ce=(d,l)=>l.key;function re(d,l){if(d&1){let n=d_();Ga(0,`li`)(1,`button`,68),lc(`click`,function(){let c=Eg(n).$implicit,o=y_();return Ig(o.jump(c.id))}),G_(2),Lf()()}if(d&2){let n=l.$implicit;Jb(2),$f(` `,n.label,` `)}}function de(d,l){if(d&1){let n=d_();Ga(0,`li`,37)(1,`label`,69)(2,`span`)(3,`span`,70),G_(4),Lf(),Ga(5,`span`,71),G_(6),Lf()(),Ga(7,`input`,72),lc(`change`,function(){let c=Eg(n).$implicit,o=y_();return Ig(o.toggleAlert(c))}),Lf()()()}if(d&2){let n=l.$implicit,i=y_();Jb(4),nD(n.label),Jb(2),nD(n.hint),Jb(),Pv(`checked`,i.alerts()[n.key])}}var pe=[{key:`assigned`,label:`A task is assigned to me`,hint:`Email and an inbox notification.`},{key:`digest`,label:`Daily overdue digest`,hint:`One email at 7:30 a.m. listing overdue tasks.`},{key:`failures`,label:`A court notice fails to deliver`,hint:`Inbox notification when a notice bounces.`},{key:`sms`,label:`Text me about urgent tasks`,hint:`Sent to the mobile number in your profile.`}];var me=[{id:`settings-profile`,label:`Profile`},{id:`settings-alerts`,label:`Notifications`},{id:`settings-display`,label:`Display`},{id:`settings-danger`,label:`Danger zone`}];var De=[{id:`settings`,title:`Settings`,description:`In-page section navigation, a profile form, notification switches, display preferences and a danger zone whose destructive action needs a typed confirmation in a modal.`,component:class d{fb=g(Wue).nonNullable;host=g(It);collapsed=q(!1);confirmOpen=q(!1);confirmText=q(``);saved=q(``);nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`dashboard`},{label:`Work queue`,icon:`inbox`,link:`queue`,badge:`37`},{label:`Cases`,icon:`folder-open`,link:`cases`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`}]},{title:`Administration`,items:[{label:`Settings`,icon:`settings`,link:`.`,exact:!0}]}];sections=me;prefs=pe;initialProfile={name:`Jordan Kim`,email:`jkim@scscourt.org`,phone:`(408) 555-0142`,unit:`civil`};profile=this.fb.group({name:[this.initialProfile.name,Fs.required],email:[this.initialProfile.email],phone:[this.initialProfile.phone],unit:[this.initialProfile.unit]});alerts=q({assigned:!0,digest:!0,failures:!1,sms:!1});jump(l){let n=this.host.nativeElement.querySelector(`#${l}`);n?.scrollIntoView?.({block:`start`}),n?.focus({preventScroll:!0})}saveProfile(){this.profile.markAllAsTouched(),!this.profile.invalid&&this.saved.set(`Profile saved.`)}toggleAlert(l){this.alerts.update(n=>s(r({},n),{[l.key]:!n[l.key]})),this.saved.set(`\u201C${l.label}\u201D turned ${this.alerts()[l.key]?`on`:`off`}.`)}setDisplay(l,n){this.saved.set(`${l} set to ${n.selectedOptions[0]?.text??n.value}.`)}resetPrefs(){this.alerts.set({assigned:!0,digest:!0,failures:!1,sms:!1}),this.saved.set(`Preferences reset to the defaults.`)}leaveQueue(){this.confirmOpen.set(!1),this.confirmText.set(``),this.saved.set(`You left the Civil Division queue. Your tasks were returned for reassignment.`)}static ɵfac=function(n){return new(n||d)};static ɵcmp=Af({type:d,selectors:[[`app-settings-template`]],decls:119,vars:12,consts:[[3,`collapsedChange`,`collapsed`],[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Civil Division · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`],[1,`hidden`,`lg:inline-flex`,3,`click`,`icon`,`label`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`routerLink`,`settings`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`,`collapsed`],[1,`flex`,`flex-col`,`gap-6`,`scsc-pad-page`],[`title`,`Settings`,`description`,`Your profile, the alerts you get, and how Court Operations looks.`],[`role`,`status`,1,`min-h-5`,`text-sm`,`text-base-content/80`],[1,`grid`,`items-start`,`gap-8`,`lg:grid-cols-[12rem_minmax(0,1fr)]`],[`aria-label`,`Settings sections`,1,`lg:sticky`,`lg:top-[calc(var(--scsc-chrome-h)+1rem)]`],[1,`flex`,`flex-wrap`,`gap-1`,`lg:flex-col`],[1,`flex`,`max-w-3xl`,`flex-col`,`gap-10`],[`aria-labelledby`,`settings-profile`],[`id`,`settings-profile`,`tabindex`,`-1`,1,`mb-1`,`text-lg`,`font-semibold`],[`tone`,`muted`,`size`,`sm`,1,`mb-3`,`block`],[1,`grid`,`gap-4`,`sm:grid-cols-2`,3,`ngSubmit`,`formGroup`],[`label`,`Full name`,`for`,`set-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`set-name`,`autocomplete`,`name`,`formControlName`,`name`],[`label`,`Work email`,`for`,`set-email`,`hint`,`Managed by IT; contact the help desk to change it.`],[`scsc-input`,``,`id`,`set-email`,`type`,`email`,`formControlName`,`email`,`readonly`,``],[`label`,`Mobile phone`,`for`,`set-phone`,`hint`,`For urgent-task texts`],[`scsc-input`,``,`id`,`set-phone`,`type`,`tel`,`autocomplete`,`tel`,`formControlName`,`phone`],[`label`,`Unit`,`for`,`set-unit`],[`scsc-select`,``,`id`,`set-unit`,`formControlName`,`unit`],[`value`,`civil`],[`value`,`family`],[`value`,`probate`],[`value`,`criminal`],[1,`flex`,`gap-2`,`sm:col-span-2`],[`nativeType`,`submit`],[`variant`,`ghost`,3,`click`],[`aria-labelledby`,`settings-alerts`],[`id`,`settings-alerts`,`tabindex`,`-1`,1,`mb-1`,`text-lg`,`font-semibold`],[3,`flush`],[1,`divide-y`,`divide-base-300`],[1,`px-5`,`py-4`],[`aria-labelledby`,`settings-display`],[`id`,`settings-display`,`tabindex`,`-1`,1,`mb-1`,`text-lg`,`font-semibold`],[1,`grid`,`gap-4`,`sm:grid-cols-2`,`sm:items-end`],[`label`,`Theme`,`for`,`set-theme`],[`scsc-select`,``,`id`,`set-theme`,3,`change`],[`value`,`system`],[`value`,`light`],[`value`,`dark`],[`value`,`contrast`],[`label`,`Start page`,`for`,`set-start`],[`scsc-select`,``,`id`,`set-start`,3,`change`],[`value`,`dashboard`],[`value`,`queue`],[`value`,`calendar`],[1,`flex`,`items-center`,`gap-3`,`sm:col-span-2`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`],[1,`text-sm`,`font-medium`],[`aria-labelledby`,`settings-danger`],[`id`,`settings-danger`,`tabindex`,`-1`,1,`mb-1`,`text-lg`,`font-semibold`],[1,`divide-y`,`divide-base-300`,`rounded-box`,`border-2`,`border-error`,`bg-base-100`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-4`,`px-5`,`py-4`],[1,`font-medium`],[1,`text-sm`,`text-base-content/70`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,1,`text-error`,3,`click`],[`title`,`Leave the Civil Division queue?`,3,`openChange`,`open`],[`label`,`Type LEAVE to confirm`,`for`,`set-confirm`,1,`mt-4`],[`scsc-input`,``,`id`,`set-confirm`,`autocomplete`,`off`,3,`input`,`value`],[`slot`,`footer`,1,`flex`,`gap-2`],[3,`click`,`disabled`],[`type`,`button`,1,`w-full`,`rounded-field`,`px-3`,`py-2`,`text-left`,`text-sm`,`text-base-content/80`,`hover:bg-base-200`,`hover:text-base-content`,3,`click`],[1,`flex`,`items-start`,`justify-between`,`gap-4`],[1,`block`,`text-sm`,`font-medium`,`text-base-content`],[1,`block`,`text-sm`,`text-base-content/70`],[`type`,`checkbox`,`scsc-switch`,``,1,`mt-0.5`,`shrink-0`,3,`change`,`checked`]],template:function(n,i){n&1&&(Ga(0,`scsc-app-shell`,0),sD(`collapsedChange`,function(o){return Y_(i.collapsed,o)||(i.collapsed=o),o}),Ga(1,`scsc-masthead`,1)(2,`scsc-icon-button`,2),lc(`click`,function(){return i.collapsed.set(!i.collapsed())}),Lf(),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`a`,4),G_(6,`Settings`),Lf()(),Ga(7,`li`)(8,`button`,5),G_(9,`Sign out`),Lf()()()(),uc(10,`scsc-sidebar-nav`,6),Ga(11,`div`,7),uc(12,`scsc-page-header`,8),Ga(13,`p`,9),G_(14),Lf(),Ga(15,`div`,10)(16,`nav`,11)(17,`ul`,12),o_(18,re,3,1,`li`,null,oe),Lf()(),Ga(20,`div`,13)(21,`section`,14)(22,`h2`,15),G_(23,` Profile `),Lf(),Ga(24,`scsc-text`,16),G_(25,`Shown on tasks, notes and the audit log.`),Lf(),Ga(26,`scsc-card`)(27,`form`,17),lc(`ngSubmit`,function(){return i.saveProfile()}),Ga(28,`scsc-form-field`,18)(29,`input`,19),HS(),Lf()(),Ga(30,`scsc-form-field`,20)(31,`input`,21),HS(),Lf()(),Ga(32,`scsc-form-field`,22)(33,`input`,23),HS(),Lf()(),Ga(34,`scsc-form-field`,24)(35,`select`,25),HS(),Ga(36,`option`,26),G_(37,`Civil Division`),Lf(),Ga(38,`option`,27),G_(39,`Family Division`),Lf(),Ga(40,`option`,28),G_(41,`Probate`),Lf(),Ga(42,`option`,29),G_(43,`Criminal Division`),Lf()()(),Ga(44,`div`,30)(45,`scsc-button`,31),G_(46,`Save profile`),Lf(),Ga(47,`scsc-button`,32),lc(`click`,function(){return i.profile.reset(i.initialProfile)}),G_(48,`Discard changes`),Lf()()()()(),Ga(49,`section`,33)(50,`h2`,34),G_(51,` Notifications `),Lf(),Ga(52,`scsc-text`,16),G_(53,`Where Court Operations reaches you outside the app.`),Lf(),Ga(54,`scsc-card`,35)(55,`ul`,36),o_(56,de,8,3,`li`,37,ce),Lf()()(),Ga(58,`section`,38)(59,`h2`,39),G_(60,` Display `),Lf(),Ga(61,`scsc-text`,16),G_(62,`Applies on this device only.`),Lf(),Ga(63,`scsc-card`)(64,`div`,40)(65,`scsc-form-field`,41)(66,`select`,42),lc(`change`,function(o){return i.setDisplay(`Theme`,o.target)}),Ga(67,`option`,43),G_(68,`Match my device`),Lf(),Ga(69,`option`,44),G_(70,`Light`),Lf(),Ga(71,`option`,45),G_(72,`Dark`),Lf(),Ga(73,`option`,46),G_(74,`High contrast`),Lf()()(),Ga(75,`scsc-form-field`,47)(76,`select`,48),lc(`change`,function(o){return i.setDisplay(`Start page`,o.target)}),Ga(77,`option`,49),G_(78,`Dashboard`),Lf(),Ga(79,`option`,50),G_(80,`Work queue`),Lf(),Ga(81,`option`,51),G_(82,`Calendar`),Lf()()(),Ga(83,`label`,52)(84,`input`,53),lc(`change`,function(){return i.saved.set(`Density updated.`)}),Lf(),Ga(85,`span`,54),G_(86,`Compact density (tighter rows and spacing)`),Lf()()()()(),Ga(87,`section`,55)(88,`h2`,56),G_(89,` Danger zone `),Lf(),Ga(90,`scsc-text`,16),G_(91,`These can’t be undone from this page.`),Lf(),Ga(92,`div`,57)(93,`div`,58)(94,`div`)(95,`p`,59),G_(96,`Reset all preferences`),Lf(),Ga(97,`p`,60),G_(98,` Notifications, display and saved filters go back to the defaults. `),Lf()(),Ga(99,`scsc-button`,61),lc(`click`,function(){return i.resetPrefs()}),G_(100,` Reset preferences `),Lf()(),Ga(101,`div`,58)(102,`div`)(103,`p`,59),G_(104,`Leave the Civil Division queue`),Lf(),Ga(105,`p`,60),G_(106,` Your open tasks are returned to the unassigned queue for reassignment. `),Lf()(),Ga(107,`scsc-button`,62),lc(`click`,function(){return i.confirmOpen.set(!0)}),G_(108,` Leave queue… `),Lf()()()()()()()(),Ga(109,`scsc-modal`,63),sD(`openChange`,function(o){return Y_(i.confirmOpen,o)||(i.confirmOpen=o),o}),Ga(110,`p`),G_(111,` Your 14 open tasks go back to the unassigned queue, and you stop getting Civil Division assignments. A supervisor can add you back. `),Lf(),Ga(112,`scsc-form-field`,64)(113,`input`,65),lc(`input`,function(o){return i.confirmText.set(o.target.value)}),Lf()(),Ga(114,`div`,66)(115,`scsc-button`,32),lc(`click`,function(){return i.confirmOpen.set(!1)}),G_(116,`Cancel`),Lf(),Ga(117,`scsc-button`,67),lc(`click`,function(){return i.leaveQueue()}),G_(118,` Leave queue `),Lf()()()),n&2&&(iD(`collapsed`,i.collapsed),Jb(2),Pv(`icon`,i.collapsed()?`panel-left-open`:`panel-left-close`)(`label`,i.collapsed()?`Expand sidebar`:`Collapse sidebar`),Jb(8),Pv(`sections`,i.nav)(`collapsed`,i.collapsed()),Jb(4),nD(i.saved()),Jb(4),i_(i.sections),Jb(9),Pv(`formGroup`,i.profile),Jb(),Pv(`error`,i.profile.controls.name.invalid&&i.profile.controls.name.touched?`Enter your full name.`:``),Jb(),zS(),Jb(2),zS(),Jb(2),zS(),Jb(2),zS(),Jb(19),Pv(`flush`,!0),Jb(2),i_(i.prefs),Jb(53),iD(`open`,i.confirmOpen),Jb(4),Pv(`value`,i.confirmText()),Jb(4),Pv(`disabled`,i.confirmText().trim().toUpperCase()!==`LEAVE`))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,Vz,Xz,nu,SN,sn,mN,Vn,UE,qo,FN,At,TN,On,$N,Bo,NE,VN],encapsulation:2})},source:{settings:{ts:`import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScscAppShell,
  ScscButton,
  ScscCard,
  ScscFormField,
  ScscIconButton,
  ScscInput,
  ScscMasthead,
  ScscModal,
  type ScscNavSection,
  ScscPageHeader,
  ScscSelect,
  ScscSidebarNav,
  ScscSwitch,
  ScscText,
  ScscUserMenu,
} from '@scscourt/design';

interface Pref {
  key: 'assigned' | 'digest' | 'failures' | 'sms';
  label: string;
  hint: string;
}

const PREFS: Pref[] = [
  { key: 'assigned', label: 'A task is assigned to me', hint: 'Email and an inbox notification.' },
  {
    key: 'digest',
    label: 'Daily overdue digest',
    hint: 'One email at 7:30 a.m. listing overdue tasks.',
  },
  {
    key: 'failures',
    label: 'A court notice fails to deliver',
    hint: 'Inbox notification when a notice bounces.',
  },
  {
    key: 'sms',
    label: 'Text me about urgent tasks',
    hint: 'Sent to the mobile number in your profile.',
  },
];

const SECTIONS = [
  { id: 'settings-profile', label: 'Profile' },
  { id: 'settings-alerts', label: 'Notifications' },
  { id: 'settings-display', label: 'Display' },
  { id: 'settings-danger', label: 'Danger zone' },
];

@Component({
  selector: 'app-settings-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ScscAppShell,
    ScscButton,
    ScscCard,
    ScscFormField,
    ScscIconButton,
    ScscInput,
    ScscMasthead,
    ScscModal,
    ScscPageHeader,
    ScscSelect,
    ScscSidebarNav,
    ScscSwitch,
    ScscText,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell [(collapsed)]="collapsed">
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Civil Division \xB7 Downtown Superior Court"
        logoSrc="scsc-seal.png"
      >
        <scsc-icon-button
          [icon]="collapsed() ? 'panel-left-open' : 'panel-left-close'"
          [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
          class="hidden lg:inline-flex"
          (click)="collapsed.set(!collapsed())"
        />
        <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
          <li><a routerLink="settings">Settings</a></li>
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>

      <scsc-sidebar-nav slot="sidebar" [sections]="nav" [collapsed]="collapsed()" />

      <div class="flex flex-col gap-6 scsc-pad-page">
        <scsc-page-header
          title="Settings"
          description="Your profile, the alerts you get, and how Court Operations looks."
        />
        <p class="min-h-5 text-sm text-base-content/80" role="status">{{ saved() }}</p>

        <div class="grid items-start gap-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <nav
            aria-label="Settings sections"
            class="lg:sticky lg:top-[calc(var(--scsc-chrome-h)+1rem)]"
          >
            <ul class="flex flex-wrap gap-1 lg:flex-col">
              @for (s of sections; track s.id) {
                <li>
                  <button
                    type="button"
                    class="w-full rounded-field px-3 py-2 text-left text-sm text-base-content/80 hover:bg-base-200 hover:text-base-content"
                    (click)="jump(s.id)"
                  >
                    {{ s.label }}
                  </button>
                </li>
              }
            </ul>
          </nav>

          <div class="flex max-w-3xl flex-col gap-10">
            <section aria-labelledby="settings-profile">
              <h2 id="settings-profile" tabindex="-1" class="mb-1 text-lg font-semibold">
                Profile
              </h2>
              <scsc-text tone="muted" size="sm" class="mb-3 block"
                >Shown on tasks, notes and the audit log.</scsc-text
              >
              <scsc-card>
                <form
                  [formGroup]="profile"
                  (ngSubmit)="saveProfile()"
                  class="grid gap-4 sm:grid-cols-2"
                >
                  <scsc-form-field
                    label="Full name"
                    for="set-name"
                    required
                    [error]="
                      profile.controls.name.invalid && profile.controls.name.touched
                        ? 'Enter your full name.'
                        : ''
                    "
                  >
                    <input scsc-input id="set-name" autocomplete="name" formControlName="name" />
                  </scsc-form-field>
                  <scsc-form-field
                    label="Work email"
                    for="set-email"
                    hint="Managed by IT; contact the help desk to change it."
                  >
                    <input
                      scsc-input
                      id="set-email"
                      type="email"
                      formControlName="email"
                      readonly
                    />
                  </scsc-form-field>
                  <scsc-form-field
                    label="Mobile phone"
                    for="set-phone"
                    hint="For urgent-task texts"
                  >
                    <input
                      scsc-input
                      id="set-phone"
                      type="tel"
                      autocomplete="tel"
                      formControlName="phone"
                    />
                  </scsc-form-field>
                  <scsc-form-field label="Unit" for="set-unit">
                    <select scsc-select id="set-unit" formControlName="unit">
                      <option value="civil">Civil Division</option>
                      <option value="family">Family Division</option>
                      <option value="probate">Probate</option>
                      <option value="criminal">Criminal Division</option>
                    </select>
                  </scsc-form-field>
                  <div class="flex gap-2 sm:col-span-2">
                    <scsc-button nativeType="submit">Save profile</scsc-button>
                    <scsc-button variant="ghost" (click)="profile.reset(initialProfile)"
                      >Discard changes</scsc-button
                    >
                  </div>
                </form>
              </scsc-card>
            </section>

            <section aria-labelledby="settings-alerts">
              <h2 id="settings-alerts" tabindex="-1" class="mb-1 text-lg font-semibold">
                Notifications
              </h2>
              <scsc-text tone="muted" size="sm" class="mb-3 block"
                >Where Court Operations reaches you outside the app.</scsc-text
              >
              <scsc-card [flush]="true">
                <ul class="divide-y divide-base-300">
                  @for (p of prefs; track p.key) {
                    <li class="px-5 py-4">
                      <label class="flex items-start justify-between gap-4">
                        <span>
                          <span class="block text-sm font-medium text-base-content">{{
                            p.label
                          }}</span>
                          <span class="block text-sm text-base-content/70">{{ p.hint }}</span>
                        </span>
                        <input
                          type="checkbox"
                          scsc-switch
                          class="mt-0.5 shrink-0"
                          [checked]="alerts()[p.key]"
                          (change)="toggleAlert(p)"
                        />
                      </label>
                    </li>
                  }
                </ul>
              </scsc-card>
            </section>

            <section aria-labelledby="settings-display">
              <h2 id="settings-display" tabindex="-1" class="mb-1 text-lg font-semibold">
                Display
              </h2>
              <scsc-text tone="muted" size="sm" class="mb-3 block"
                >Applies on this device only.</scsc-text
              >
              <scsc-card>
                <div class="grid gap-4 sm:grid-cols-2 sm:items-end">
                  <scsc-form-field label="Theme" for="set-theme">
                    <select
                      scsc-select
                      id="set-theme"
                      (change)="setDisplay('Theme', $any($event.target))"
                    >
                      <option value="system">Match my device</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="contrast">High contrast</option>
                    </select>
                  </scsc-form-field>
                  <scsc-form-field label="Start page" for="set-start">
                    <select
                      scsc-select
                      id="set-start"
                      (change)="setDisplay('Start page', $any($event.target))"
                    >
                      <option value="dashboard">Dashboard</option>
                      <option value="queue">Work queue</option>
                      <option value="calendar">Calendar</option>
                    </select>
                  </scsc-form-field>
                  <label class="flex items-center gap-3 sm:col-span-2">
                    <input type="checkbox" scsc-switch (change)="saved.set('Density updated.')" />
                    <span class="text-sm font-medium"
                      >Compact density (tighter rows and spacing)</span
                    >
                  </label>
                </div>
              </scsc-card>
            </section>

            <section aria-labelledby="settings-danger">
              <h2 id="settings-danger" tabindex="-1" class="mb-1 text-lg font-semibold">
                Danger zone
              </h2>
              <scsc-text tone="muted" size="sm" class="mb-3 block"
                >These can\u2019t be undone from this page.</scsc-text
              >
              <div class="divide-y divide-base-300 rounded-box border-2 border-error bg-base-100">
                <div class="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p class="font-medium">Reset all preferences</p>
                    <p class="text-sm text-base-content/70">
                      Notifications, display and saved filters go back to the defaults.
                    </p>
                  </div>
                  <scsc-button variant="neutral" outline size="sm" (click)="resetPrefs()">
                    Reset preferences
                  </scsc-button>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p class="font-medium">Leave the Civil Division queue</p>
                    <p class="text-sm text-base-content/70">
                      Your open tasks are returned to the unassigned queue for reassignment.
                    </p>
                  </div>
                  <scsc-button
                    variant="neutral"
                    outline
                    size="sm"
                    class="text-error"
                    (click)="confirmOpen.set(true)"
                  >
                    Leave queue\u2026
                  </scsc-button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </scsc-app-shell>

    <scsc-modal [(open)]="confirmOpen" title="Leave the Civil Division queue?">
      <p>
        Your 14 open tasks go back to the unassigned queue, and you stop getting Civil Division
        assignments. A supervisor can add you back.
      </p>
      <scsc-form-field label="Type LEAVE to confirm" for="set-confirm" class="mt-4">
        <input
          scsc-input
          id="set-confirm"
          autocomplete="off"
          [value]="confirmText()"
          (input)="confirmText.set($any($event.target).value)"
        />
      </scsc-form-field>
      <div slot="footer" class="flex gap-2">
        <scsc-button variant="ghost" (click)="confirmOpen.set(false)">Cancel</scsc-button>
        <scsc-button
          [disabled]="confirmText().trim().toUpperCase() !== 'LEAVE'"
          (click)="leaveQueue()"
        >
          Leave queue
        </scsc-button>
      </div>
    </scsc-modal>
  \`,
})
export class SettingsTemplate {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly collapsed = signal(false);
  protected readonly confirmOpen = signal(false);
  protected readonly confirmText = signal('');
  protected readonly saved = signal('');

  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: 'dashboard' },
        { label: 'Work queue', icon: 'inbox', link: 'queue', badge: '37' },
        { label: 'Cases', icon: 'folder-open', link: 'cases' },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
      ],
    },
    {
      title: 'Administration',
      items: [{ label: 'Settings', icon: 'settings', link: '.', exact: true }],
    },
  ];
  protected readonly sections = SECTIONS;
  protected readonly prefs = PREFS;

  protected readonly initialProfile = {
    name: 'Jordan Kim',
    email: 'jkim@scscourt.org',
    phone: '(408) 555-0142',
    unit: 'civil',
  };
  protected readonly profile = this.fb.group({
    name: [this.initialProfile.name, Validators.required],
    email: [this.initialProfile.email],
    phone: [this.initialProfile.phone],
    unit: [this.initialProfile.unit],
  });

  protected readonly alerts = signal<Record<Pref['key'], boolean>>({
    assigned: true,
    digest: true,
    failures: false,
    sms: false,
  });

  /** Scrolls to a section and moves focus to its heading. */
  protected jump(id: string): void {
    const heading = this.host.nativeElement.querySelector<HTMLElement>(\`#\${id}\`);
    heading?.scrollIntoView?.({ block: 'start' });
    heading?.focus({ preventScroll: true });
  }

  protected saveProfile(): void {
    this.profile.markAllAsTouched();
    if (this.profile.invalid) return;
    this.saved.set('Profile saved.');
  }

  protected toggleAlert(p: Pref): void {
    this.alerts.update((a) => ({ ...a, [p.key]: !a[p.key] }));
    this.saved.set(\`\u201C\${p.label}\u201D turned \${this.alerts()[p.key] ? 'on' : 'off'}.\`);
  }

  protected setDisplay(label: string, select: HTMLSelectElement): void {
    this.saved.set(\`\${label} set to \${select.selectedOptions[0]?.text ?? select.value}.\`);
  }

  protected resetPrefs(): void {
    this.alerts.set({ assigned: true, digest: true, failures: false, sms: false });
    this.saved.set('Preferences reset to the defaults.');
  }

  protected leaveQueue(): void {
    this.confirmOpen.set(false);
    this.confirmText.set('');
    this.saved.set('You left the Civil Division queue. Your tasks were returned for reassignment.');
  }
}
`,html:`<scsc-app-shell [(collapsed)]="collapsed">
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Civil Division \xB7 Downtown Superior Court"
    logoSrc="scsc-seal.png"
  >
    <scsc-icon-button
      [icon]="collapsed() ? 'panel-left-open' : 'panel-left-close'"
      [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
      class="hidden lg:inline-flex"
      (click)="collapsed.set(!collapsed())"
    />
    <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
      <li><a routerLink="settings">Settings</a></li>
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>

  <scsc-sidebar-nav slot="sidebar" [sections]="nav" [collapsed]="collapsed()" />

  <div class="flex flex-col gap-6 scsc-pad-page">
    <scsc-page-header
      title="Settings"
      description="Your profile, the alerts you get, and how Court Operations looks."
    />
    <p class="min-h-5 text-sm text-base-content/80" role="status">{{ saved() }}</p>

    <div class="grid items-start gap-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
      <nav
        aria-label="Settings sections"
        class="lg:sticky lg:top-[calc(var(--scsc-chrome-h)+1rem)]"
      >
        <ul class="flex flex-wrap gap-1 lg:flex-col">
          @for (s of sections; track s.id) {
            <li>
              <button
                type="button"
                class="w-full rounded-field px-3 py-2 text-left text-sm text-base-content/80 hover:bg-base-200 hover:text-base-content"
                (click)="jump(s.id)"
              >
                {{ s.label }}
              </button>
            </li>
          }
        </ul>
      </nav>

      <div class="flex max-w-3xl flex-col gap-10">
        <section aria-labelledby="settings-profile">
          <h2 id="settings-profile" tabindex="-1" class="mb-1 text-lg font-semibold">
            Profile
          </h2>
          <scsc-text tone="muted" size="sm" class="mb-3 block"
            >Shown on tasks, notes and the audit log.</scsc-text
          >
          <scsc-card>
            <form
              [formGroup]="profile"
              (ngSubmit)="saveProfile()"
              class="grid gap-4 sm:grid-cols-2"
            >
              <scsc-form-field
                label="Full name"
                for="set-name"
                required
                [error]="
                  profile.controls.name.invalid && profile.controls.name.touched
                    ? 'Enter your full name.'
                    : ''
                "
              >
                <input scsc-input id="set-name" autocomplete="name" formControlName="name" />
              </scsc-form-field>
              <scsc-form-field
                label="Work email"
                for="set-email"
                hint="Managed by IT; contact the help desk to change it."
              >
                <input
                  scsc-input
                  id="set-email"
                  type="email"
                  formControlName="email"
                  readonly
                />
              </scsc-form-field>
              <scsc-form-field
                label="Mobile phone"
                for="set-phone"
                hint="For urgent-task texts"
              >
                <input
                  scsc-input
                  id="set-phone"
                  type="tel"
                  autocomplete="tel"
                  formControlName="phone"
                />
              </scsc-form-field>
              <scsc-form-field label="Unit" for="set-unit">
                <select scsc-select id="set-unit" formControlName="unit">
                  <option value="civil">Civil Division</option>
                  <option value="family">Family Division</option>
                  <option value="probate">Probate</option>
                  <option value="criminal">Criminal Division</option>
                </select>
              </scsc-form-field>
              <div class="flex gap-2 sm:col-span-2">
                <scsc-button nativeType="submit">Save profile</scsc-button>
                <scsc-button variant="ghost" (click)="profile.reset(initialProfile)"
                  >Discard changes</scsc-button
                >
              </div>
            </form>
          </scsc-card>
        </section>

        <section aria-labelledby="settings-alerts">
          <h2 id="settings-alerts" tabindex="-1" class="mb-1 text-lg font-semibold">
            Notifications
          </h2>
          <scsc-text tone="muted" size="sm" class="mb-3 block"
            >Where Court Operations reaches you outside the app.</scsc-text
          >
          <scsc-card [flush]="true">
            <ul class="divide-y divide-base-300">
              @for (p of prefs; track p.key) {
                <li class="px-5 py-4">
                  <label class="flex items-start justify-between gap-4">
                    <span>
                      <span class="block text-sm font-medium text-base-content">{{
                        p.label
                      }}</span>
                      <span class="block text-sm text-base-content/70">{{ p.hint }}</span>
                    </span>
                    <input
                      type="checkbox"
                      scsc-switch
                      class="mt-0.5 shrink-0"
                      [checked]="alerts()[p.key]"
                      (change)="toggleAlert(p)"
                    />
                  </label>
                </li>
              }
            </ul>
          </scsc-card>
        </section>

        <section aria-labelledby="settings-display">
          <h2 id="settings-display" tabindex="-1" class="mb-1 text-lg font-semibold">
            Display
          </h2>
          <scsc-text tone="muted" size="sm" class="mb-3 block"
            >Applies on this device only.</scsc-text
          >
          <scsc-card>
            <div class="grid gap-4 sm:grid-cols-2 sm:items-end">
              <scsc-form-field label="Theme" for="set-theme">
                <select
                  scsc-select
                  id="set-theme"
                  (change)="setDisplay('Theme', $any($event.target))"
                >
                  <option value="system">Match my device</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="contrast">High contrast</option>
                </select>
              </scsc-form-field>
              <scsc-form-field label="Start page" for="set-start">
                <select
                  scsc-select
                  id="set-start"
                  (change)="setDisplay('Start page', $any($event.target))"
                >
                  <option value="dashboard">Dashboard</option>
                  <option value="queue">Work queue</option>
                  <option value="calendar">Calendar</option>
                </select>
              </scsc-form-field>
              <label class="flex items-center gap-3 sm:col-span-2">
                <input type="checkbox" scsc-switch (change)="saved.set('Density updated.')" />
                <span class="text-sm font-medium"
                  >Compact density (tighter rows and spacing)</span
                >
              </label>
            </div>
          </scsc-card>
        </section>

        <section aria-labelledby="settings-danger">
          <h2 id="settings-danger" tabindex="-1" class="mb-1 text-lg font-semibold">
            Danger zone
          </h2>
          <scsc-text tone="muted" size="sm" class="mb-3 block"
            >These can\u2019t be undone from this page.</scsc-text
          >
          <div class="divide-y divide-base-300 rounded-box border-2 border-error bg-base-100">
            <div class="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
              <div>
                <p class="font-medium">Reset all preferences</p>
                <p class="text-sm text-base-content/70">
                  Notifications, display and saved filters go back to the defaults.
                </p>
              </div>
              <scsc-button variant="neutral" outline size="sm" (click)="resetPrefs()">
                Reset preferences
              </scsc-button>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
              <div>
                <p class="font-medium">Leave the Civil Division queue</p>
                <p class="text-sm text-base-content/70">
                  Your open tasks are returned to the unassigned queue for reassignment.
                </p>
              </div>
              <scsc-button
                variant="neutral"
                outline
                size="sm"
                class="text-error"
                (click)="confirmOpen.set(true)"
              >
                Leave queue\u2026
              </scsc-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</scsc-app-shell>

<scsc-modal [(open)]="confirmOpen" title="Leave the Civil Division queue?">
  <p>
    Your 14 open tasks go back to the unassigned queue, and you stop getting Civil Division
    assignments. A supervisor can add you back.
  </p>
  <scsc-form-field label="Type LEAVE to confirm" for="set-confirm" class="mt-4">
    <input
      scsc-input
      id="set-confirm"
      autocomplete="off"
      [value]="confirmText()"
      (input)="confirmText.set($any($event.target).value)"
    />
  </scsc-form-field>
  <div slot="footer" class="flex gap-2">
    <scsc-button variant="ghost" (click)="confirmOpen.set(false)">Cancel</scsc-button>
    <scsc-button
      [disabled]="confirmText().trim().toUpperCase() !== 'LEAVE'"
      (click)="leaveQueue()"
    >
      Leave queue
    </scsc-button>
  </div>
</scsc-modal>
`}}.settings,layout:`page`,height:`56rem`}];export{De as DEMOS};