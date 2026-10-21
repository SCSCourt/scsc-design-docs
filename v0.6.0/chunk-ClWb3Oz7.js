import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{H as FN,Ms as uc,Na as Jb,Ps as ut,Ss as rD,Xa as Pv,Xn as aF,cs as lc,gn as VN,kn as XF,kt as NE,ms as nu,nn as TN,ra as Af,t as $E,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var x=class a{notifications=q([{id:1,title:`Hearing reminder`,body:`CMC in 24CV012345 tomorrow at 9:00 AM, Dept. 21`,timestamp:`8:02 AM`,tone:`info`},{id:2,title:`Tentative ruling posted`,body:`Motion to Compel — Alvarez v. Northgate`,timestamp:`Yesterday`,tone:`warning`},{id:3,title:`Payment received`,body:`Receipt #R-2026-004412 for $495.00`,timestamp:`Jul 9`,tone:`success`},{id:4,title:`Filing rejected`,body:`Proof of service is missing a signature`,timestamp:`Jul 8`,tone:`error`,read:!0}]);lastOpened=q(null);openNotification(i){this.lastOpened.set(i.title),this.notifications.update(e=>e.map(t=>t.id===i.id?s(r({},t),{read:!0}):t))}markAllRead(){this.notifications.update(i=>i.map(e=>s(r({},e),{read:!0})))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-notification-inbox-basic-demo`]],decls:4,vars:2,consts:[[1,`flex`,`items-center`,`justify-between`,`gap-4`],[`tone`,`muted`,`size`,`sm`],[3,`open`,`markAllRead`,`notifications`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-text`,1),G_(2),Lf(),Ga(3,`scsc-notification-inbox`,2),lc(`open`,function(g){return t.openNotification(g)})(`markAllRead`,function(){return t.markAllRead()}),Lf()()),e&2&&(Jb(2),$f(` `,t.lastOpened()?`Opened: `+t.lastOpened():`Open the bell and choose a notification.`,` `),Jb(),Pv(`notifications`,t.notifications()))},dependencies:[aF,NE],encapsulation:2})};var N=class a{notifications=[];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-notification-inbox-empty-demo`]],decls:2,vars:1,consts:[[1,`flex`,`justify-end`],[3,`notifications`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-notification-inbox`,1),Lf()),e&2&&(Jb(),Pv(`notifications`,t.notifications))},dependencies:[aF],encapsulation:2})};var D=class a{notifications=q([{id:`n1`,title:`Hearing reminder`,body:`CMC in 24CV012345 tomorrow at 9:00 AM, Dept. 21`,timestamp:`8:02 AM`,tone:`info`},{id:`n2`,title:`Filing accepted`,body:`Proof of service in 24CV012345`,timestamp:`Yesterday`,tone:`success`},{id:`n3`,title:`Payment received`,body:`$435.00, receipt R-2026-118204`,timestamp:`Sep 28`,tone:`success`,read:!0}]);unread=ut(()=>this.notifications().filter(i=>!i.read).length);markRead(i){this.notifications.update(e=>e.map(t=>t.id===i?s(r({},t),{read:!0}):t))}markAllRead(){this.notifications.update(i=>i.map(e=>s(r({},e),{read:!0})))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-notification-inbox-masthead-demo`]],decls:13,vars:2,consts:[[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`My cases`,`logoSrc`,`scsc-seal.png`],[3,`open`,`markAllRead`,`notifications`],[`name`,`Maria Alvarez`,`email`,`malvarez@example.com`],[`routerLink`,`.`],[`title`,`My cases`,3,`description`],[`scsc-button`,``,`slot`,`actions`,`variant`,`ghost`,`size`,`sm`,`routerLink`,`.`]],template:function(e,t){e&1&&(Ga(0,`scsc-page-shell`)(1,`scsc-masthead`,0)(2,`scsc-notification-inbox`,1),lc(`open`,function(g){return t.markRead(g.id)})(`markAllRead`,function(){return t.markAllRead()}),Lf(),Ga(3,`scsc-user-menu`,2)(4,`li`)(5,`a`,3),G_(6,`Profile`),Lf()(),Ga(7,`li`)(8,`a`,3),G_(9,`Sign out`),Lf()()()(),Ga(10,`scsc-page-header`,4)(11,`a`,5),G_(12,`All notifications`),Lf()()()),e&2&&(Jb(2),Pv(`notifications`,t.notifications()),Jb(8),Pv(`description`,t.unread()?`You have `+t.unread()+` unread notifications.`:`You are all caught up.`))},dependencies:[nu,$E,FN,aF,TN,XF,VN],encapsulation:2})};var k=class a{opened=q(``);items=q([{id:`d1`,title:`Opposition due in 2 days`,body:`24CV012345 · Motion to compel`,timestamp:`Today, 8:00 AM`,tone:`warning`},{id:`d2`,title:`Hearing tomorrow, 9:00 AM`,body:`Dept. 10 · Downtown Superior Court`,timestamp:`Today, 7:30 AM`,tone:`info`},{id:`d3`,title:`Payment received`,body:`Receipt R-2026-004417 · $435.00`,timestamp:`Sep 29`,tone:`success`,read:!0},{id:`d4`,title:`Filing deadline missed`,body:`23CV098811 · Case management statement`,timestamp:`Sep 28`,tone:`error`}]);unread=ut(()=>this.items().filter(i=>!i.read).length);openItem(i){this.opened.set(i.title),this.items.update(e=>e.map(t=>t.id===i.id?s(r({},t),{read:!0}):t))}readAll(){this.items.update(i=>i.map(e=>s(r({},e),{read:!0})))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-notification-inbox-deadlines-demo`]],decls:5,vars:3,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`gap-3`],[3,`open`,`markAllRead`,`notifications`],[`aria-live`,`polite`,1,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-notification-inbox`,2),lc(`open`,function(g){return t.openItem(g)})(`markAllRead`,function(){return t.readAll()}),Lf(),Ga(3,`span`,3),G_(4),Lf()()()),e&2&&(Jb(2),Pv(`notifications`,t.items()),Jb(2),rD(` `,t.unread(),` unread · last opened: `,t.opened()||`none`,` `))},dependencies:[aF],encapsulation:2})};var C=class a{items=q([{id:1,title:`Filing rejected: 24CV015502`,body:`Missing proof of service.`,timestamp:`5 min ago`,tone:`error`},{id:2,title:`Fee waiver approved`,body:`FW-003 for 24FL004821.`,timestamp:`1 hr ago`,tone:`success`},{id:3,title:`Interpreter confirmed`,body:`Spanish, Dept. 10, Oct 6.`,timestamp:`Yesterday`,tone:`info`,read:!0}]);read(i){this.items.update(e=>e.map(t=>t.id===i.id?s(r({},t),{read:!0}):t))}readAll(){this.items.update(i=>i.map(e=>s(r({},e),{read:!0})))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-notification-inbox-dark-demo`]],decls:4,vars:1,consts:[[`data-theme`,`scsc-design-dark`,1,`flex`,`items-center`,`justify-between`,`gap-3`,`rounded-box`,`bg-base-100`,`px-4`,`py-3`,`text-base-content`],[1,`font-semibold`],[3,`open`,`markAllRead`,`notifications`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`Clerk workspace`),Lf(),Ga(3,`scsc-notification-inbox`,2),lc(`open`,function(g){return t.read(g)})(`markAllRead`,function(){return t.readAll()}),Lf()()),e&2&&(Jb(3),Pv(`notifications`,t.items()))},dependencies:[aF],encapsulation:2})};var h={"notification-inbox-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscNotificationInbox, ScscText, type ScscNotification } from '@scscourt/design';

@Component({
  selector: 'app-notification-inbox-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscNotificationInbox, ScscText],
  template: \`
    <div class="flex items-center justify-between gap-4">
      <scsc-text tone="muted" size="sm">
        {{ lastOpened() ? 'Opened: ' + lastOpened() : 'Open the bell and choose a notification.' }}
      </scsc-text>
      <scsc-notification-inbox
        [notifications]="notifications()"
        (open)="openNotification($event)"
        (markAllRead)="markAllRead()"
      />
    </div>
  \`,
})
export class NotificationInboxBasicDemo {
  /** Newest first. The app owns the \`read\` flags and updates them on \`open\` / \`markAllRead\`. */
  protected readonly notifications = signal<ScscNotification[]>([
    {
      id: 1,
      title: 'Hearing reminder',
      body: 'CMC in 24CV012345 tomorrow at 9:00 AM, Dept. 21',
      timestamp: '8:02 AM',
      tone: 'info',
    },
    {
      id: 2,
      title: 'Tentative ruling posted',
      body: 'Motion to Compel \u2014 Alvarez v. Northgate',
      timestamp: 'Yesterday',
      tone: 'warning',
    },
    {
      id: 3,
      title: 'Payment received',
      body: 'Receipt #R-2026-004412 for $495.00',
      timestamp: 'Jul 9',
      tone: 'success',
    },
    {
      id: 4,
      title: 'Filing rejected',
      body: 'Proof of service is missing a signature',
      timestamp: 'Jul 8',
      tone: 'error',
      read: true,
    },
  ]);

  protected readonly lastOpened = signal<string | null>(null);

  protected openNotification(n: ScscNotification): void {
    this.lastOpened.set(n.title);
    this.notifications.update((list) =>
      list.map((x) => (x.id === n.id ? { ...x, read: true } : x)),
    );
  }

  protected markAllRead(): void {
    this.notifications.update((list) => list.map((x) => ({ ...x, read: true })));
  }
}
`,html:`<div class="flex items-center justify-between gap-4">
  <scsc-text tone="muted" size="sm">
    {{ lastOpened() ? 'Opened: ' + lastOpened() : 'Open the bell and choose a notification.' }}
  </scsc-text>
  <scsc-notification-inbox
    [notifications]="notifications()"
    (open)="openNotification($event)"
    (markAllRead)="markAllRead()"
  />
</div>
`},"notification-inbox-dark":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscNotificationInbox, type ScscNotification } from '@scscourt/design';

@Component({
  selector: 'app-notification-inbox-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscNotificationInbox],
  template: \`
    <div
      data-theme="scsc-design-dark"
      class="flex items-center justify-between gap-3 rounded-box bg-base-100 px-4 py-3 text-base-content"
    >
      <span class="font-semibold">Clerk workspace</span>
      <scsc-notification-inbox
        [notifications]="items()"
        (open)="read($event)"
        (markAllRead)="readAll()"
      />
    </div>
  \`,
})
export class NotificationInboxDarkDemo {
  protected readonly items = signal<ScscNotification[]>([
    {
      id: 1,
      title: 'Filing rejected: 24CV015502',
      body: 'Missing proof of service.',
      timestamp: '5 min ago',
      tone: 'error',
    },
    {
      id: 2,
      title: 'Fee waiver approved',
      body: 'FW-003 for 24FL004821.',
      timestamp: '1 hr ago',
      tone: 'success',
    },
    {
      id: 3,
      title: 'Interpreter confirmed',
      body: 'Spanish, Dept. 10, Oct 6.',
      timestamp: 'Yesterday',
      tone: 'info',
      read: true,
    },
  ]);

  protected read(n: ScscNotification): void {
    this.items.update((list) => list.map((i) => (i.id === n.id ? { ...i, read: true } : i)));
  }

  protected readAll(): void {
    this.items.update((list) => list.map((i) => ({ ...i, read: true })));
  }
}
`,html:`<div
  data-theme="scsc-design-dark"
  class="flex items-center justify-between gap-3 rounded-box bg-base-100 px-4 py-3 text-base-content"
>
  <span class="font-semibold">Clerk workspace</span>
  <scsc-notification-inbox
    [notifications]="items()"
    (open)="read($event)"
    (markAllRead)="readAll()"
  />
</div>
`},"notification-inbox-deadlines":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscNotificationInbox, type ScscNotification } from '@scscourt/design';

@Component({
  selector: 'app-notification-inbox-deadlines-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscNotificationInbox],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <div class="flex items-center gap-3">
        <scsc-notification-inbox
          [notifications]="items()"
          (open)="openItem($event)"
          (markAllRead)="readAll()"
        />
        <span class="text-sm text-base-content/70" aria-live="polite">
          {{ unread() }} unread \xB7 last opened: {{ opened() || 'none' }}
        </span>
      </div>
    </div>
  \`,
})
export class NotificationInboxDeadlinesDemo {
  protected readonly opened = signal('');
  protected readonly items = signal<ScscNotification[]>([
    {
      id: 'd1',
      title: 'Opposition due in 2 days',
      body: '24CV012345 \xB7 Motion to compel',
      timestamp: 'Today, 8:00 AM',
      tone: 'warning',
    },
    {
      id: 'd2',
      title: 'Hearing tomorrow, 9:00 AM',
      body: 'Dept. 10 \xB7 Downtown Superior Court',
      timestamp: 'Today, 7:30 AM',
      tone: 'info',
    },
    {
      id: 'd3',
      title: 'Payment received',
      body: 'Receipt R-2026-004417 \xB7 $435.00',
      timestamp: 'Sep 29',
      tone: 'success',
      read: true,
    },
    {
      id: 'd4',
      title: 'Filing deadline missed',
      body: '23CV098811 \xB7 Case management statement',
      timestamp: 'Sep 28',
      tone: 'error',
    },
  ]);
  protected readonly unread = computed(() => this.items().filter((i) => !i.read).length);

  protected openItem(n: ScscNotification): void {
    this.opened.set(n.title);
    this.items.update((list) => list.map((i) => (i.id === n.id ? { ...i, read: true } : i)));
  }

  protected readAll(): void {
    this.items.update((list) => list.map((i) => ({ ...i, read: true })));
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <div class="flex items-center gap-3">
    <scsc-notification-inbox
      [notifications]="items()"
      (open)="openItem($event)"
      (markAllRead)="readAll()"
    />
    <span class="text-sm text-base-content/70" aria-live="polite">
      {{ unread() }} unread \xB7 last opened: {{ opened() || 'none' }}
    </span>
  </div>
</div>
`},"notification-inbox-empty":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscNotificationInbox, type ScscNotification } from '@scscourt/design';

@Component({
  selector: 'app-notification-inbox-empty-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscNotificationInbox],
  template: \`
    <div class="flex justify-end">
      <scsc-notification-inbox [notifications]="notifications" />
    </div>
  \`,
})
export class NotificationInboxEmptyDemo {
  /** No unread badge is shown and the panel reads "You're all caught up." */
  protected readonly notifications: ScscNotification[] = [];
}
`,html:`<div class="flex justify-end">
  <scsc-notification-inbox [notifications]="notifications" />
</div>
`},"notification-inbox-masthead":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButtonLink,
  ScscMasthead,
  ScscNotificationInbox,
  ScscPageHeader,
  ScscPageShell,
  ScscUserMenu,
  type ScscNotification,
} from '@scscourt/design';

@Component({
  selector: 'app-notification-inbox-masthead-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscButtonLink,
    ScscMasthead,
    ScscNotificationInbox,
    ScscPageHeader,
    ScscPageShell,
    ScscUserMenu,
  ],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="My cases"
        logoSrc="scsc-seal.png"
      >
        <!-- The bell sits with the account menu in the masthead's action slot. -->
        <scsc-notification-inbox
          [notifications]="notifications()"
          (open)="markRead($event.id)"
          (markAllRead)="markAllRead()"
        />
        <scsc-user-menu name="Maria Alvarez" email="malvarez@example.com">
          <li><a routerLink=".">Profile</a></li>
          <li><a routerLink=".">Sign out</a></li>
        </scsc-user-menu>
      </scsc-masthead>

      <scsc-page-header
        title="My cases"
        [description]="
          unread() ? 'You have ' + unread() + ' unread notifications.' : 'You are all caught up.'
        "
      >
        <a scsc-button slot="actions" variant="ghost" size="sm" routerLink=".">All notifications</a>
      </scsc-page-header>
    </scsc-page-shell>
  \`,
})
export class NotificationInboxMastheadDemo {
  protected readonly notifications = signal<ScscNotification[]>([
    {
      id: 'n1',
      title: 'Hearing reminder',
      body: 'CMC in 24CV012345 tomorrow at 9:00 AM, Dept. 21',
      timestamp: '8:02 AM',
      tone: 'info',
    },
    {
      id: 'n2',
      title: 'Filing accepted',
      body: 'Proof of service in 24CV012345',
      timestamp: 'Yesterday',
      tone: 'success',
    },
    {
      id: 'n3',
      title: 'Payment received',
      body: '$435.00, receipt R-2026-118204',
      timestamp: 'Sep 28',
      tone: 'success',
      read: true,
    },
  ]);
  protected readonly unread = computed(() => this.notifications().filter((n) => !n.read).length);

  protected markRead(id: string | number): void {
    this.notifications.update((list) => list.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }

  protected markAllRead(): void {
    this.notifications.update((list) => list.map((n) => ({ ...n, read: true })));
  }
}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="My cases"
    logoSrc="scsc-seal.png"
  >
    <!-- The bell sits with the account menu in the masthead's action slot. -->
    <scsc-notification-inbox
      [notifications]="notifications()"
      (open)="markRead($event.id)"
      (markAllRead)="markAllRead()"
    />
    <scsc-user-menu name="Maria Alvarez" email="malvarez@example.com">
      <li><a routerLink=".">Profile</a></li>
      <li><a routerLink=".">Sign out</a></li>
    </scsc-user-menu>
  </scsc-masthead>

  <scsc-page-header
    title="My cases"
    [description]="
      unread() ? 'You have ' + unread() + ' unread notifications.' : 'You are all caught up.'
    "
  >
    <a scsc-button slot="actions" variant="ghost" size="sm" routerLink=".">All notifications</a>
  </scsc-page-header>
</scsc-page-shell>
`}};var ge={slug:`notification-inbox`,name:`Notification Inbox`,classes:[`ScscNotificationInbox`],category:`Court`,whenToUse:[`The bell in the masthead of a portal or staff app: an unread count and a dropdown of recent notifications.`,"The component is stateless: it counts unread items from `read` and emits `open` / `markAllRead`. Your app updates the flags (and the server) and passes the new array.",`Keep the list short (the panel scrolls after ~8 items) and link to a full notifications page from the last item or the masthead.`,"For transient confirmations use `ToastService`; for page-level messages use `scsc-banner`."],demos:[{id:`notification-inbox-basic`,title:`Unread and read items`,description:`State in a signal; opening an item marks it read, "Mark all read" clears the badge.`,component:x,source:h[`notification-inbox-basic`]},{id:`notification-inbox-empty`,title:`Empty`,description:`No badge and a "caught up" message.`,component:N,source:h[`notification-inbox-empty`]},{id:`notification-inbox-masthead`,title:`In the masthead`,description:"The bell beside `scsc-user-menu` in a page masthead; the page header reads the same signal, and an `a[scsc-button]` links to the full list.",component:D,source:h[`notification-inbox-masthead`],layout:`page`,height:`30rem`},{id:`notification-inbox-deadlines`,title:`Deadlines and tones`,description:`Warning, info, success and error notifications; opening one marks it read and the count beside the bell updates.`,component:k,source:h[`notification-inbox-deadlines`]},{id:`notification-inbox-dark`,title:`Dark theme`,description:`The bell in a dark toolbar.`,component:C,source:h[`notification-inbox-dark`]}],a11y:['The bell has an `aria-label` that includes the unread count ("3 unread notifications") and an `aria-expanded` state.',`The bell is a disclosure button: the panel opens on click, Enter or Space, never on focus alone, and Escape, tabbing out or a click outside closes it (WCAG 1.4.13). The panel itself is never a Tab stop.`,"Every item is a `<button>`, so the list is keyboard reachable. Opening a notification closes the panel and returns focus to the bell before `open` emits; **Mark all read** leaves the panel open.",`Unread items show a coloured dot and are announced as "Unread:" to screen readers; read items are dimmed. The bell label carries the unread count.`],keyboard:[{keys:`Enter / Space`,action:`On the bell: opens or closes the panel; focus stays on the bell.`},{keys:`Tab / Shift + Tab (panel open)`,action:`Through **Mark all read**, then each notification; moving focus out of the bell and panel closes it.`},{keys:`Enter / Space (in the panel)`,action:"On a notification: closes the panel, returns focus to the bell and emits `open`. On **Mark all read**: emits `markAllRead`; the panel stays open."},{keys:`Escape`,action:`Closes the panel and returns focus to the bell.`}],appMustProvide:[`Notification text that makes sense on its own: each item is read as one button.`],related:[`masthead`,`dropdown`,`toast`,`banner`,`badge`]};export{ge as NOTIFICATION_INBOX_DOCS};