import{Go as g,Hs as y_,Ir as l3e,Kr as oF,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Pn as Xi,Ps as ut,Xa as Pv,cs as lc,ds as nD,fs as nM,ha as Eg,ka as Ig,ks as t_,pi as sn,qo as ge,ra as Af,va as G_,w as Bo,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function M(a,t){if(a&1){let s=d_();Ga(0,`scsc-button`,6),lc(`click`,function(){Eg(s);let l=y_();return Ig(l.session.stop())}),G_(1,` Stop tracking `),Lf()}}function R(a,t){if(a&1){let s=d_();Ga(0,`scsc-button`,7),lc(`click`,function(){Eg(s);let l=y_();return Ig(l.session.reset())}),G_(1,`Start session`),Lf()}}var T=class a{session=g(Xi);status=ut(()=>this.session.state()===`expired`?`Session ended (${this.session.endReason()}).`:this.session.running()?this.session.state()===`warning`?`Warning open.`:`Signed in. The warning opens 5 seconds after your last click or key press.`:`Not tracking. Start a session to see the warning.`);static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-session-timeout-basic-demo`]],features:[nM([l3e({idleTimeout:25e3,warningBefore:2e4,autoStart:!1,channelName:`scsc-docs-session-basic`,keepAlive:()=>new Promise(t=>setTimeout(t,600))})])],decls:9,vars:2,consts:[[1,`flex`,`flex-col`,`gap-3`],[`role`,`status`,1,`text-sm`],[1,`flex`,`flex-wrap`,`gap-2`],[`variant`,`neutral`,`outline`,``,`size`,`sm`],[`size`,`sm`],[`slot`,`expired`,`size`,`sm`,1,`mt-2`,3,`click`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[`size`,`sm`,3,`click`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2),Lf(),Ga(3,`div`,2),JT(4,M,2,0,`scsc-button`,3)(5,R,2,0,`scsc-button`,4),Lf()(),Ga(6,`scsc-session-timeout`)(7,`scsc-button`,5),lc(`click`,function(){return e.session.reset()}),G_(8,` Sign in again `),Lf()()),s&2&&(Jb(2),nD(e.status()),Jb(2),t_(e.session.running()?4:5))},dependencies:[sn,oF],encapsulation:2})};var E={reachable:q(!0),refreshes:q(0)};var k=class a{session=g(Xi);server=E;status=ut(()=>{let t=`Server session refreshed ${this.server.refreshes()} times.`;return this.session.state()===`expired`?`Session ended. ${t}`:this.session.running()?`Signed in. ${t}`:`Not tracking.`});static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-session-timeout-keepalive-demo`]],features:[nM([l3e({idleTimeout:25e3,warningBefore:2e4,autoStart:!1,channelName:`scsc-docs-session-keepalive`,keepAlive:()=>new Promise((t,s)=>setTimeout(()=>{if(!E.reachable())return s(new Error(`Network error`));E.refreshes.update(e=>e+1),t()},800))})])],decls:10,vars:3,consts:[[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`gap-3`,`text-sm`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`],[`role`,`status`,1,`text-sm`],[`size`,`sm`,3,`click`,`disabled`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`label`,1)(2,`input`,2),lc(`change`,function(){return e.server.reachable.set(!e.server.reachable())}),Lf(),G_(3,` Server unreachable `),Lf(),Ga(4,`p`,3),G_(5),Lf(),Ga(6,`div`)(7,`scsc-button`,4),lc(`click`,function(){return e.session.reset()}),G_(8,` Start session `),Lf()()(),uc(9,`scsc-session-timeout`)),s&2&&(Jb(2),Pv(`checked`,!e.server.reachable()),Jb(3),nD(e.status()),Jb(2),Pv(`disabled`,e.session.running()))},dependencies:[sn,oF,Bo],encapsulation:2})};var x=class a{session=g(Xi);uploading=q(!1);status=q(`Not tracking. Start a session, then upload.`);timer;constructor(){g(ge).onDestroy(()=>clearInterval(this.timer))}upload(){this.uploading.set(!0),this.session.pause();let t=0;this.status.set(`Uploading Exhibit A.pdf: 0%. The idle timeout is paused.`),this.timer=setInterval(()=>{if(t+=25,t<100){this.status.set(`Uploading Exhibit A.pdf: ${t}%. The idle timeout is paused.`);return}clearInterval(this.timer),this.uploading.set(!1),this.session.resume(),this.status.set(`Exhibit A.pdf uploaded. The idle timeout restarted from now.`)},1e4)}static ɵfac=function(s){return new(s||a)};static ɵcmp=Af({type:a,selectors:[[`app-session-timeout-pause-demo`]],features:[nM([l3e({idleTimeout:25e3,warningBefore:2e4,autoStart:!1,channelName:`scsc-docs-session-pause`})])],decls:9,vars:3,consts:[[1,`flex`,`flex-col`,`gap-3`],[`role`,`status`,1,`text-sm`],[1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,3,`click`,`disabled`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`,`disabled`]],template:function(s,e){s&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2),Lf(),Ga(3,`div`,2)(4,`scsc-button`,3),lc(`click`,function(){return e.session.reset()}),G_(5,` Start session `),Lf(),Ga(6,`scsc-button`,4),lc(`click`,function(){return e.upload()}),G_(7,` Upload exhibit (40 s) `),Lf()()(),uc(8,`scsc-session-timeout`)),s&2&&(Jb(2),nD(e.status()),Jb(2),Pv(`disabled`,e.session.running()),Jb(2),Pv(`disabled`,!e.session.running()||e.uploading()))},dependencies:[sn,oF],encapsulation:2})};var _={"session-timeout-basic":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  ScscButton,
  ScscSessionTimeout,
  ScscSessionTimeoutService,
  provideScscSessionTimeout,
} from '@scscourt/design';

@Component({
  selector: 'app-session-timeout-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // In an app, provideScscSessionTimeout() goes in app.config.ts with your real timing (such as
  // 15 minutes idle and a 2-minute warning) and starts on its own. The demo scopes it to this
  // component, waits for Start, and uses the shortest warning WCAG 2.2.1 allows: it opens 5 s
  // after your last click or key press and gives you 20 s to answer.
  providers: [
    provideScscSessionTimeout({
      idleTimeout: 25_000,
      warningBefore: 20_000,
      autoStart: false,
      channelName: 'scsc-docs-session-basic',
      keepAlive: () => new Promise((resolve) => setTimeout(resolve, 600)),
    }),
  ],
  imports: [ScscButton, ScscSessionTimeout],
  template: \`
    <div class="flex flex-col gap-3">
      <p class="text-sm" role="status">{{ status() }}</p>
      <div class="flex flex-wrap gap-2">
        @if (session.running()) {
          <scsc-button variant="neutral" outline size="sm" (click)="session.stop()">
            Stop tracking
          </scsc-button>
        } @else {
          <scsc-button size="sm" (click)="session.reset()">Start session</scsc-button>
        }
      </div>
    </div>

    <!-- Once, in the app shell. -->
    <scsc-session-timeout>
      <scsc-button slot="expired" size="sm" class="mt-2" (click)="session.reset()">
        Sign in again
      </scsc-button>
    </scsc-session-timeout>
  \`,
})
export class SessionTimeoutBasicDemo {
  protected readonly session = inject(ScscSessionTimeoutService);
  protected readonly status = computed(() => {
    if (this.session.state() === 'expired') return \`Session ended (\${this.session.endReason()}).\`;
    if (!this.session.running()) return 'Not tracking. Start a session to see the warning.';
    if (this.session.state() === 'warning') return 'Warning open.';
    return 'Signed in. The warning opens 5 seconds after your last click or key press.';
  });
}
`,html:`<div class="flex flex-col gap-3">
  <p class="text-sm" role="status">{{ status() }}</p>
  <div class="flex flex-wrap gap-2">
    @if (session.running()) {
      <scsc-button variant="neutral" outline size="sm" (click)="session.stop()">
        Stop tracking
      </scsc-button>
    } @else {
      <scsc-button size="sm" (click)="session.reset()">Start session</scsc-button>
    }
  </div>
</div>

<!-- Once, in the app shell. -->
<scsc-session-timeout>
  <scsc-button slot="expired" size="sm" class="mt-2" (click)="session.reset()">
    Sign in again
  </scsc-button>
</scsc-session-timeout>
`},"session-timeout-keepalive":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  ScscButton,
  ScscSessionTimeout,
  ScscSessionTimeoutService,
  ScscSwitch,
  provideScscSessionTimeout,
} from '@scscourt/design';

/** Stands in for the server: "refreshes" the session, or fails while it is unreachable. */
const server = { reachable: signal(true), refreshes: signal(0) };

@Component({
  selector: 'app-session-timeout-keepalive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideScscSessionTimeout({
      idleTimeout: 25_000,
      warningBefore: 20_000,
      autoStart: false,
      channelName: 'scsc-docs-session-keepalive',
      // Your session refresh, such as () => this.http.post<void>('/api/session/refresh', null).
      keepAlive: () =>
        new Promise<void>((resolve, reject) =>
          setTimeout(() => {
            if (!server.reachable()) return reject(new Error('Network error'));
            server.refreshes.update((n) => n + 1);
            resolve();
          }, 800),
        ),
    }),
  ],
  imports: [ScscButton, ScscSessionTimeout, ScscSwitch],
  template: \`
    <div class="flex flex-col gap-3">
      <label class="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          scsc-switch
          [checked]="!server.reachable()"
          (change)="server.reachable.set(!server.reachable())"
        />
        Server unreachable
      </label>
      <p class="text-sm" role="status">{{ status() }}</p>
      <div>
        <scsc-button size="sm" [disabled]="session.running()" (click)="session.reset()">
          Start session
        </scsc-button>
      </div>
    </div>
    <scsc-session-timeout />
  \`,
})
export class SessionTimeoutKeepaliveDemo {
  protected readonly session = inject(ScscSessionTimeoutService);
  protected readonly server = server;
  protected readonly status = computed(() => {
    const refreshed = \`Server session refreshed \${this.server.refreshes()} times.\`;
    if (this.session.state() === 'expired') return \`Session ended. \${refreshed}\`;
    return this.session.running() ? \`Signed in. \${refreshed}\` : 'Not tracking.';
  });
}
`,html:`<div class="flex flex-col gap-3">
  <label class="flex items-center gap-3 text-sm">
    <input
      type="checkbox"
      scsc-switch
      [checked]="!server.reachable()"
      (change)="server.reachable.set(!server.reachable())"
    />
    Server unreachable
  </label>
  <p class="text-sm" role="status">{{ status() }}</p>
  <div>
    <scsc-button size="sm" [disabled]="session.running()" (click)="session.reset()">
      Start session
    </scsc-button>
  </div>
</div>
<scsc-session-timeout />
`},"session-timeout-pause":{ts:`import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import {
  ScscButton,
  ScscSessionTimeout,
  ScscSessionTimeoutService,
  provideScscSessionTimeout,
} from '@scscourt/design';

@Component({
  selector: 'app-session-timeout-pause-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideScscSessionTimeout({
      idleTimeout: 25_000,
      warningBefore: 20_000,
      autoStart: false,
      channelName: 'scsc-docs-session-pause',
    }),
  ],
  imports: [ScscButton, ScscSessionTimeout],
  template: \`
    <div class="flex flex-col gap-3">
      <p class="text-sm" role="status">{{ status() }}</p>
      <div class="flex flex-wrap gap-2">
        <scsc-button size="sm" [disabled]="session.running()" (click)="session.reset()">
          Start session
        </scsc-button>
        <scsc-button
          variant="neutral"
          outline
          size="sm"
          [disabled]="!session.running() || uploading()"
          (click)="upload()"
        >
          Upload exhibit (40 s)
        </scsc-button>
      </div>
    </div>
    <scsc-session-timeout />
  \`,
})
export class SessionTimeoutPauseDemo {
  protected readonly session = inject(ScscSessionTimeoutService);
  protected readonly uploading = signal(false);
  protected readonly status = signal('Not tracking. Start a session, then upload.');
  private timer: ReturnType<typeof setInterval> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearInterval(this.timer));
  }

  /** A long upload is not inactivity: pause the idle timeout until it finishes. */
  protected upload(): void {
    this.uploading.set(true);
    this.session.pause();
    let done = 0;
    this.status.set('Uploading Exhibit A.pdf: 0%. The idle timeout is paused.');
    this.timer = setInterval(() => {
      done += 25;
      if (done < 100) {
        this.status.set(\`Uploading Exhibit A.pdf: \${done}%. The idle timeout is paused.\`);
        return;
      }
      clearInterval(this.timer);
      this.uploading.set(false);
      this.session.resume();
      this.status.set('Exhibit A.pdf uploaded. The idle timeout restarted from now.');
    }, 10_000);
  }
}
`,html:`<div class="flex flex-col gap-3">
  <p class="text-sm" role="status">{{ status() }}</p>
  <div class="flex flex-wrap gap-2">
    <scsc-button size="sm" [disabled]="session.running()" (click)="session.reset()">
      Start session
    </scsc-button>
    <scsc-button
      variant="neutral"
      outline
      size="sm"
      [disabled]="!session.running() || uploading()"
      (click)="upload()"
    >
      Upload exhibit (40 s)
    </scsc-button>
  </div>
</div>
<scsc-session-timeout />
`}};var oe={slug:`session-timeout`,name:`Session timeout`,classes:[`ScscSessionTimeout`,`ScscSessionTimeoutService`],category:`Overlays & Feedback`,whenToUse:[`Any app with a signed-in session that ends after inactivity. WCAG 2.2.1 (Timing Adjustable) requires a warning before the time limit and at least 20 seconds to extend it with a simple action; 2.2.6 asks you to say how long the inactivity limit is.`,"Configure it once with `provideScscSessionTimeout({ idleTimeout, warningBefore, keepAlive, onTimeout })` and place `<scsc-session-timeout />` once in the app shell. It renders nothing until the warning starts.","`warningBefore` defaults to 2 minutes. Anything under 20 seconds is raised to 20 seconds (with a dev-mode warning), so a configuration cannot fall below 2.2.1.","Activity is `pointerdown`, `keydown`, `wheel`, `touchstart` and the tab becoming visible, recorded at most once per 5 seconds. `mousemove` is left out by default (it fires constantly and moving the mouse is not a choice to stay); add it to `events` if your users need it.",`While the warning is open, activity does not extend the session: only "Stay signed in" does (a click, or Enter or Space on it, which 2.2.1 counts as a simple action). Esc and the backdrop do not close it, so the dialog never disappears without a choice.`,'Tabs stay in step through a `BroadcastChannel` (`channelName`, falling back to `storage` events): activity or "Stay signed in" in one tab closes the warning in the others, and signing out or timing out in one signs out them all. Open this page in a second tab and start a demo in both to see it.',"Call `pause()` and `resume()` around work that is not inactivity, such as a long upload or a video. Calls nest, other tabs hear a heartbeat meanwhile, and `absoluteTimeout` (a hard limit activity does not move) still applies.","For a hard `absoluteTimeout` the dialog says the session cannot be extended and its primary button only closes it."],setup:`// app.config.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { provideScscSessionTimeout } from '@scscourt/design';

providers: [
  // A function runs in an injection context, so it can use your services.
  provideScscSessionTimeout(() => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return {
      idleTimeout: 15 * 60_000,          // signed out after 15 minutes without activity
      warningBefore: 2 * 60_000,         // the warning opens 2 minutes before (at least 20 s)
      keepAlive: () => auth.refresh(),   // Promise or Observable; a failure shows a retry
      onTimeout: (reason) => {           // 'timeout' | 'absolute' | 'signout', in every tab
        auth.clear();
        void router.navigateByUrl(reason === 'signout' ? '/signed-out' : '/sign-in?expired=1');
      },
      // absoluteTimeout: 12 * 60 * 60_000,  // optional hard limit
      // autoStart: false,                    // then call start() after sign-in, reset() on the next
    };
  }),
]

// app.html (the signed-in shell) \u2014 once
<router-outlet />
<scsc-session-timeout />

// Around a long upload
const session = inject(ScscSessionTimeoutService);
session.pause();
try { await upload(file); } finally { session.resume(); }

// Icons it draws (SCSC_ICONS includes them)
import { CircleX, Info } from 'lucide-angular';
provideScscIcons({ CircleX, Info });`,demos:[{id:`session-timeout-basic`,title:`Warning and countdown`,description:'Start a session, then stop clicking and typing: 5 seconds later the warning opens with a 20-second countdown (the shortest WCAG 2.2.1 allows; apps use minutes). "Stay signed in" calls `keepAlive` and closes it; "Sign out" ends the session; letting it run out shows the signed-out notice with its `[slot=expired]` button. The provider is scoped to the demo and waits for Start (`autoStart: false`).',component:T,source:_[`session-timeout-basic`]},{id:`session-timeout-keepalive`,title:`When the server cannot be reached`,description:'Switch on "Server unreachable" before the warning opens, then choose "Stay signed in": `keepAlive` rejects, so the dialog stays open with an error and the button becomes "Try again". Switch it off and retry to extend.',component:k,source:_[`session-timeout-keepalive`]},{id:`session-timeout-pause`,title:`Pausing during an upload`,description:"The 40-second upload calls `pause()` when it starts and `resume()` when it ends, so the warning does not open while it runs, and the idle timeout restarts from the moment it finishes.",component:x,source:_[`session-timeout-pause`]}],keyboard:[{keys:`Enter / Space`,action:`On "Stay signed in" (focused when the warning opens): extends the session. On "Sign out": ends it in every tab.`},{keys:`Tab / Shift + Tab`,action:`Moves between the two buttons; focus stays in the dialog.`},{keys:`Escape`,action:`Does nothing: the warning needs a choice, so it never closes by accident and nobody is left unsure whether they are still signed in.`},{keys:`Any other key`,action:`Does not extend the session while the warning is open. Outside the warning, any key press counts as activity.`}],aria:['The warning is `scsc-modal` with `role="alertdialog"`, named by its title and described by the description and the countdown, so a screen reader reads both when it opens. The page behind is inert.','The countdown is `role="timer"` (not live): it changes every second on screen, while `ScscAnnouncer` speaks it only when the dialog opens and at 60, 30 and 10 seconds (`announceAt`), the last one assertively. Screen readers hear the time in words ("1 minute 30 seconds"), not "1:30".','A failed `keepAlive` shows an error alert (`role="alert"`) in the dialog; a successful extend announces "You\'re still signed in." politely. A timeout announces that the user was signed out.','"Stay signed in" keeps focus and its width while `keepAlive` runs (`aria-busy`), so a second press does nothing.'],appMustProvide:["The real limits from your security policy, and a `keepAlive` that refreshes the server session (or the client timer and the server will disagree).","Where to go after `onTimeout`: a sign-in page that says the user was signed out for inactivity, and keeps what they were doing where it can (2.2.5 Re-authenticating).","Translated text for non-English apps through `labels` (every string, including the duration wording).",`The idle limit stated somewhere before it bites (WCAG 2.2.6), such as on the sign-in page; the dialog description also says it.`],a11y:[`Meets WCAG 2.2.1 by warning before the limit with at least 20 seconds (enforced) to extend it with one action, and 2.2.6 by stating the inactivity limit in the description.`,`Timers are computed from the clock and re-checked when a tab becomes visible or focused, so a background tab whose timers the browser throttled cannot show a stale countdown or skip the warning.`,"The dialog uses the motion tokens of `scsc-modal`: with reduced motion it appears without the rise and scale. The countdown itself never animates.",`Buttons keep 44 px targets in comfortable density, and the dialog works at 320 px wide and 400 % zoom (it becomes a sheet from the bottom edge).`],related:[`modal`,`dialog`,`a11y-utilities`,`toast`]};export{oe as SESSION_TIMEOUT_DOCS};