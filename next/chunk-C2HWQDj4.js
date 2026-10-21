import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{An as XN,Er as hr,Fr as kn,G as Fge,Go as g,Hs as y_,Jo as hM,Ka as Ov,Ms as uc,Na as Jb,Ps as ut,Ss as rD,Tn as Wn,Tr as hn,Xa as Pv,Z as GR,Zo as i_,_s as o_,cs as lc,ds as nD,er as cn,fs as nM,kt as NE,pi as sn,qr as oN,ra as Af,sa as C_,ta as $f,va as G_,wn as WR,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var w={"consent-banner-bar":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  SCSC_STATE_ADAPTER,
  ScscButton,
  ScscConsentBanner,
  ScscConsentService,
  ScscFooter,
  ScscHeading,
  ScscLegalBar,
  ScscText,
  provideScscConsent,
  scscMemoryAdapter,
} from '@scscourt/design';

@Component({
  selector: 'app-consent-banner-bar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // In an app, provideScscConsent() goes in app.config.ts and uses localStorage. The demo scopes
  // it to this component with an in-memory store, so each preview starts undecided.
  providers: [
    provideScscConsent({ version: '2026-09', policyLink: '/privacy' }),
    { provide: SCSC_STATE_ADAPTER, useValue: scscMemoryAdapter() },
  ],
  imports: [ScscButton, ScscConsentBanner, ScscFooter, ScscHeading, ScscLegalBar, ScscText],
  template: \`
    <main class="scsc-pad-page flex flex-col gap-3">
      <scsc-heading [level]="1" [visualLevel]="3">Jury service</scsc-heading>
      <scsc-text size="sm">
        Check your reporting status after 5:00 PM the business day before your service date.
      </scsc-text>
      <p class="text-sm" role="status">Consent: {{ summary() }}</p>
      <div>
        <scsc-button variant="neutral" outline size="sm" (click)="consent.reset()">
          Ask again
        </scsc-button>
      </div>
    </main>
    <scsc-footer><scsc-legal-bar /></scsc-footer>

    <!-- Once, at the end of the app's root template. -->
    <scsc-consent-banner />
  \`,
})
export class ConsentBannerBarDemo {
  protected readonly consent = inject(ScscConsentService);
  protected readonly summary = computed(() => {
    const state = this.consent.state();
    if (!state) return 'not decided';
    const on = Object.keys(state.granted).filter((id) => state.granted[id]);
    return on.join(', ');
  });
}
`,html:`<main class="scsc-pad-page flex flex-col gap-3">
  <scsc-heading [level]="1" [visualLevel]="3">Jury service</scsc-heading>
  <scsc-text size="sm">
    Check your reporting status after 5:00 PM the business day before your service date.
  </scsc-text>
  <p class="text-sm" role="status">Consent: {{ summary() }}</p>
  <div>
    <scsc-button variant="neutral" outline size="sm" (click)="consent.reset()">
      Ask again
    </scsc-button>
  </div>
</main>
<scsc-footer><scsc-legal-bar /></scsc-footer>

<!-- Once, at the end of the app's root template. -->
<scsc-consent-banner />
`},"consent-banner-card":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SCSC_STATE_ADAPTER,
  ScscConsentBanner,
  ScscHeading,
  ScscText,
  provideScscConsent,
  scscMemoryAdapter,
} from '@scscourt/design';

@Component({
  selector: 'app-consent-banner-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideScscConsent({
      version: '2026-09',
      policyLink: '/privacy',
      categories: ['essential', 'preferences', 'analytics', 'marketing'],
    }),
    { provide: SCSC_STATE_ADAPTER, useValue: scscMemoryAdapter() },
  ],
  imports: [ScscConsentBanner, ScscHeading, ScscText],
  template: \`
    <main class="scsc-pad-page flex flex-col gap-3">
      <scsc-heading [level]="1" [visualLevel]="3">Pay a traffic ticket</scsc-heading>
      <scsc-text size="sm">
        Have your citation number ready. Payments made after 5:00 PM post the next business day.
      </scsc-text>
    </main>

    <!-- A card in the corner covers less of the page than a full-width bar. -->
    <scsc-consent-banner
      layout="card"
      heading="Your cookie choices"
      message="Essential cookies keep this site working. We would also like to use optional cookies to remember your settings and measure how the site is used."
    />
  \`,
})
export class ConsentBannerCardDemo {}
`,html:`<main class="scsc-pad-page flex flex-col gap-3">
  <scsc-heading [level]="1" [visualLevel]="3">Pay a traffic ticket</scsc-heading>
  <scsc-text size="sm">
    Have your citation number ready. Payments made after 5:00 PM post the next business day.
  </scsc-text>
</main>

<!-- A card in the corner covers less of the page than a full-width bar. -->
<scsc-consent-banner
  layout="card"
  heading="Your cookie choices"
  message="Essential cookies keep this site working. We would also like to use optional cookies to remember your settings and measure how the site is used."
/>
`},"consent-banner-if-consent":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  SCSC_STATE_ADAPTER,
  ScscButton,
  ScscConsentService,
  ScscIfConsent,
  ScscText,
  provideScscConsent,
  scscMemoryAdapter,
} from '@scscourt/design';

@Component({
  selector: 'app-consent-banner-if-consent-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideScscConsent({ version: '2026-09' }),
    { provide: SCSC_STATE_ADAPTER, useValue: scscMemoryAdapter() },
  ],
  imports: [ScscButton, ScscIfConsent, ScscText],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <div class="flex flex-wrap gap-2">
        <scsc-button size="sm" (click)="allowAnalytics(true)">Allow analytics</scsc-button>
        <scsc-button size="sm" variant="neutral" outline (click)="allowAnalytics(false)">
          Turn analytics off
        </scsc-button>
      </div>

      <!-- Rendered only while analytics is granted; removed again when it is withdrawn. -->
      <div
        *scscIfConsent="'analytics'; else analyticsOff"
        class="rounded-box border border-base-300 bg-base-100 p-4 text-sm"
      >
        Analytics tag loaded: page views on this site are now counted.
      </div>
      <ng-template #analyticsOff>
        <div class="rounded-box border border-dashed border-base-300 p-4 text-sm">
          Analytics is off. No visit data is collected.
        </div>
      </ng-template>

      <scsc-text size="sm" tone="muted" role="status">{{ log() }}</scsc-text>
    </div>
  \`,
})
export class ConsentBannerIfConsentDemo {
  private readonly consent = inject(ScscConsentService);
  protected readonly log = signal('Waiting for consent to analytics\u2026');

  constructor() {
    // Load a third-party script only once the category is granted.
    this.consent
      .whenGranted('analytics')
      .then(() => this.log.set('whenGranted: analytics loaded.'));
  }

  protected allowAnalytics(on: boolean): void {
    this.consent.save({ ...this.consent.currentChoices(), analytics: on });
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <div class="flex flex-wrap gap-2">
    <scsc-button size="sm" (click)="allowAnalytics(true)">Allow analytics</scsc-button>
    <scsc-button size="sm" variant="neutral" outline (click)="allowAnalytics(false)">
      Turn analytics off
    </scsc-button>
  </div>

  <!-- Rendered only while analytics is granted; removed again when it is withdrawn. -->
  <div
    *scscIfConsent="'analytics'; else analyticsOff"
    class="rounded-box border border-base-300 bg-base-100 p-4 text-sm"
  >
    Analytics tag loaded: page views on this site are now counted.
  </div>
  <ng-template #analyticsOff>
    <div class="rounded-box border border-dashed border-base-300 p-4 text-sm">
      Analytics is off. No visit data is collected.
    </div>
  </ng-template>

  <scsc-text size="sm" tone="muted" role="status">{{ log() }}</scsc-text>
</div>
`},"consent-banner-manage":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  SCSC_CONSENT_KEY,
  SCSC_STATE_ADAPTER,
  ScscButton,
  ScscConsentBanner,
  ScscConsentService,
  ScscFooter,
  ScscHeading,
  ScscLegalBar,
  ScscText,
  provideScscConsent,
  scscMemoryAdapter,
} from '@scscourt/design';

@Component({
  selector: 'app-consent-banner-manage-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Seeded with a decision already made, so only the preferences dialog appears.
  providers: [
    provideScscConsent({
      version: '2026-09',
      policyLink: '/privacy',
      categories: ['essential', 'preferences', 'analytics'],
    }),
    {
      provide: SCSC_STATE_ADAPTER,
      useValue: scscMemoryAdapter({
        [SCSC_CONSENT_KEY]: {
          version: '2026-09',
          decidedAt: '2026-09-14T16:02:00.000Z',
          granted: { essential: true, preferences: true, analytics: false },
        },
      }),
    },
  ],
  imports: [ScscButton, ScscConsentBanner, ScscFooter, ScscHeading, ScscLegalBar, ScscText],
  template: \`
    <main class="scsc-pad-page flex flex-col gap-3">
      <scsc-heading [level]="1" [visualLevel]="3">Privacy settings</scsc-heading>
      <scsc-text size="sm">You can change your cookie choices at any time.</scsc-text>
      <ul class="text-sm">
        @for (c of consent.categories; track c.id) {
          <li>{{ c.label }}: {{ granted()[c.id] ? 'on' : 'off' }}</li>
        }
      </ul>
      <div>
        <scsc-button variant="primary" outline (click)="consent.open()">
          Change cookie preferences
        </scsc-button>
      </div>
    </main>
    <!-- The legal bar's "Cookie preferences" button opens the same dialog. -->
    <scsc-footer><scsc-legal-bar /></scsc-footer>
    <scsc-consent-banner />
  \`,
})
export class ConsentBannerManageDemo {
  protected readonly consent = inject(ScscConsentService);
  protected readonly granted = computed(() => this.consent.state()?.granted ?? {});
}
`,html:`<main class="scsc-pad-page flex flex-col gap-3">
  <scsc-heading [level]="1" [visualLevel]="3">Privacy settings</scsc-heading>
  <scsc-text size="sm">You can change your cookie choices at any time.</scsc-text>
  <ul class="text-sm">
    @for (c of consent.categories; track c.id) {
      <li>{{ c.label }}: {{ granted()[c.id] ? 'on' : 'off' }}</li>
    }
  </ul>
  <div>
    <scsc-button variant="primary" outline (click)="consent.open()">
      Change cookie preferences
    </scsc-button>
  </div>
</main>
<!-- The legal bar's "Cookie preferences" button opens the same dialog. -->
<scsc-footer><scsc-legal-bar /></scsc-footer>
<scsc-consent-banner />
`}};var _=class s{consent=g(hn);summary=ut(()=>{let a=this.consent.state();return a?Object.keys(a.granted).filter(c=>a.granted[c]).join(`, `):`not decided`});static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-consent-banner-bar-demo`]],features:[nM([Fge({version:`2026-09`,policyLink:`/privacy`}),{provide:cn,useValue:oN()}])],decls:13,vars:3,consts:[[1,`scsc-pad-page`,`flex`,`flex-col`,`gap-3`],[3,`level`,`visualLevel`],[`size`,`sm`],[`role`,`status`,1,`text-sm`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`]],template:function(e,c){e&1&&(Ga(0,`main`,0)(1,`scsc-heading`,1),G_(2,`Jury service`),Lf(),Ga(3,`scsc-text`,2),G_(4,` Check your reporting status after 5:00 PM the business day before your service date. `),Lf(),Ga(5,`p`,3),G_(6),Lf(),Ga(7,`div`)(8,`scsc-button`,4),lc(`click`,function(){return c.consent.reset()}),G_(9,` Ask again `),Lf()()(),Ga(10,`scsc-footer`),uc(11,`scsc-legal-bar`),Lf(),uc(12,`scsc-consent-banner`)),e&2&&(Jb(),Pv(`level`,1)(`visualLevel`,3),Jb(5),$f(`Consent: `,c.summary()))},dependencies:[sn,GR,XN,kn,hr,NE],encapsulation:2})};var D=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-consent-banner-card-demo`]],features:[nM([Fge({version:`2026-09`,policyLink:`/privacy`,categories:[`essential`,`preferences`,`analytics`,`marketing`]}),{provide:cn,useValue:oN()}])],decls:6,vars:2,consts:[[1,`scsc-pad-page`,`flex`,`flex-col`,`gap-3`],[3,`level`,`visualLevel`],[`size`,`sm`],[`layout`,`card`,`heading`,`Your cookie choices`,`message`,`Essential cookies keep this site working. We would also like to use optional cookies to remember your settings and measure how the site is used.`]],template:function(e,c){e&1&&(Ga(0,`main`,0)(1,`scsc-heading`,1),G_(2,`Pay a traffic ticket`),Lf(),Ga(3,`scsc-text`,2),G_(4,` Have your citation number ready. Payments made after 5:00 PM post the next business day. `),Lf()(),uc(5,`scsc-consent-banner`,3)),e&2&&(Jb(),Pv(`level`,1)(`visualLevel`,3))},dependencies:[GR,kn,NE],encapsulation:2})};function J(s,a){s&1&&(Ga(0,`div`,7),G_(1,` Analytics tag loaded: page views on this site are now counted. `),Lf())}function K(s,a){s&1&&(Ga(0,`div`,8),G_(1,` Analytics is off. No visit data is collected. `),Lf())}var E=class s$1{consent=g(hn);log=q(`Waiting for consent to analytics…`);constructor(){this.consent.whenGranted(`analytics`).then(()=>this.log.set(`whenGranted: analytics loaded.`))}allowAnalytics(a){this.consent.save(s(r({},this.consent.currentChoices()),{analytics:a}))}static ɵfac=function(e){return new(e||s$1)};static ɵcmp=Af({type:s$1,selectors:[[`app-consent-banner-if-consent-demo`]],features:[nM([Fge({version:`2026-09`}),{provide:cn,useValue:oN()}])],decls:11,vars:3,consts:[[`analyticsOff`,``],[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,3,`click`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[`class`,`rounded-box border border-base-300 bg-base-100 p-4 text-sm`,4,`scscIfConsent`,`scscIfConsentElse`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`,`text-sm`],[1,`rounded-box`,`border`,`border-dashed`,`border-base-300`,`p-4`,`text-sm`]],template:function(e,c){if(e&1&&(Ga(0,`div`,1)(1,`div`,2)(2,`scsc-button`,3),lc(`click`,function(){return c.allowAnalytics(!0)}),G_(3,`Allow analytics`),Lf(),Ga(4,`scsc-button`,4),lc(`click`,function(){return c.allowAnalytics(!1)}),G_(5,` Turn analytics off `),Lf()(),Ov(6,J,2,0,`div`,5)(7,K,2,0,`ng-template`,null,0,hM),Ga(9,`scsc-text`,6),G_(10),Lf()()),e&2){let x=C_(8);Jb(6),Pv(`scscIfConsent`,`analytics`)(`scscIfConsentElse`,x),Jb(4),nD(c.log())}},dependencies:[sn,WR,NE],encapsulation:2})};var U=(s,a)=>a.id;function X(s,a){if(s&1&&(Ga(0,`li`),G_(1),Lf()),s&2){let e=a.$implicit,c=y_();Jb(),rD(``,e.label,`: `,c.granted()[e.id]?`on`:`off`)}}var B=class s{consent=g(hn);granted=ut(()=>this.consent.state()?.granted??{});static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-consent-banner-manage-demo`]],features:[nM([Fge({version:`2026-09`,policyLink:`/privacy`,categories:[`essential`,`preferences`,`analytics`]}),{provide:cn,useValue:oN({[Wn]:{version:`2026-09`,decidedAt:`2026-09-14T16:02:00.000Z`,granted:{essential:!0,preferences:!0,analytics:!1}}})}])],decls:14,vars:2,consts:[[1,`scsc-pad-page`,`flex`,`flex-col`,`gap-3`],[3,`level`,`visualLevel`],[`size`,`sm`],[1,`text-sm`],[`variant`,`primary`,`outline`,``,3,`click`]],template:function(e,c){e&1&&(Ga(0,`main`,0)(1,`scsc-heading`,1),G_(2,`Privacy settings`),Lf(),Ga(3,`scsc-text`,2),G_(4,`You can change your cookie choices at any time.`),Lf(),Ga(5,`ul`,3),o_(6,X,2,2,`li`,null,U),Lf(),Ga(8,`div`)(9,`scsc-button`,4),lc(`click`,function(){return c.consent.open()}),G_(10,` Change cookie preferences `),Lf()()(),Ga(11,`scsc-footer`),uc(12,`scsc-legal-bar`),Lf(),uc(13,`scsc-consent-banner`)),e&2&&(Jb(),Pv(`level`,1)(`visualLevel`,3),Jb(5),i_(c.consent.categories))},dependencies:[sn,GR,XN,kn,hr,NE],encapsulation:2})};var Se={slug:`consent-banner`,name:`Cookie consent`,classes:[`ScscConsentBanner`,`ScscConsentService`,`ScscIfConsent`],category:`Specialized`,whenToUse:[`Any public site that sets cookies or loads scripts that are not essential (analytics, embedded maps or videos, marketing). Sites with only essential cookies need no banner.`,'Configure it once with `provideScscConsent({ version, categories, policyLink })` and place `<scsc-consent-banner />` once, at the end of the root template. It shows until the user decides; the legal bar\'s "Cookie preferences" reopens the dialog.',"Categories: `essential` is always included and always on; add `preferences`, `analytics` and `marketing` (built in, `SCSC_CONSENT_CATEGORIES`) or your own `{ id, label, description }`.","Gate optional code on consent: `*scscIfConsent=\"'analytics'\"` in templates, `consent.has('analytics')` as a signal, or `await consent.whenGranted('analytics')` before loading a script.","Bump `version` when the categories or their purposes change: a decision stored for another version counts as undecided, so everyone is asked again.","Global Privacy Control is honoured by default (`respectGpc`): analytics and marketing start switched off, and the dialog says why."],setup:`// app.config.ts
import { provideScscConsent } from '@scscourt/design';

providers: [
  provideScscConsent({
    version: '2026-09',                  // bump to ask everyone again
    policyLink: '/privacy',
    categories: ['essential', 'preferences', 'analytics'],
  }),
  // Choices are stored under "scsc.consent" through SCSC_STATE_ADAPTER (localStorage by default).
]

// app.html \u2014 once, at the end
<router-outlet />
<scsc-consent-banner />

// Load analytics only after consent
inject(ScscConsentService).whenGranted('analytics').then(() => loadAnalytics());

// Icons the dialog draws (SCSC_ICONS includes them)
import { Info, X } from 'lucide-angular';
provideScscIcons({ Info, X });`,demos:[{id:`consent-banner-bar`,title:`Bar at the bottom`,description:'The default: a full-width bar with equal Accept all and Reject all buttons and Manage preferences. "Ask again" calls `reset()`. The demo scopes the provider to itself with an in-memory store, so each preview starts undecided.',component:_,source:w[`consent-banner-bar`],layout:`page`,height:`30rem`},{id:`consent-banner-card`,title:`Card in the corner`,description:'`layout="card"` with its own `heading` and `message`; it spans the width on small screens. `position="top"` pins either layout to the top edge.',component:D,source:w[`consent-banner-card`],layout:`page`,height:`30rem`},{id:`consent-banner-manage`,title:`Preferences dialog`,description:'Seeded with a saved decision, so no banner shows. `consent.open()` and the legal bar\'s Cookie preferences open the dialog: one switch per category, Essential "Always on".',component:B,source:w[`consent-banner-manage`],layout:`page`,height:`34rem`},{id:`consent-banner-if-consent`,title:`Gating a script with *scscIfConsent`,description:"The block renders only while analytics is granted and is removed when it is withdrawn; `else` shows a placeholder. `whenGranted()` resolves the first time it is granted.",component:E,source:w[`consent-banner-if-consent`]}],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves through the banner like the rest of the page: the policy link, Accept all, Reject all, Manage preferences. The banner never takes focus on load.`},{keys:`Enter / Space`,action:"On a banner button: applies that choice. After a choice, focus returns to where it was before entering the banner (or to `<main>`)."},{keys:`Space`,action:`In the dialog: turns the focused category switch on or off.`},{keys:`Escape`,action:`Closes the preferences dialog without saving and returns focus to the button that opened it.`},{keys:`Tab (in the dialog)`,action:`Stays inside the dialog while it is open.`}],aria:['The banner is a `<section>` named by its heading (`aria-labelledby`), so it is a region landmark. It is not `role="alert"` or `alertdialog`, and it does not make the page inert.','The dialog is `scsc-modal` (a native `<dialog>`, named by its title). Each switch is `<input type="checkbox" role="switch">` with a `<label>`, described by the category description; required categories are disabled and also described by "Always on".','After any choice, `ScscAnnouncer` says "Cookie preferences saved" (`savedMessage`) in a polite live region.','The Global Privacy Control note in the dialog is `role="note"`.'],appMustProvide:["Plain descriptions of what each category does, and a policy page at `policyLink`, approved by court counsel.",`Translated banner and dialog text for non-English sites: every string is an input.`,"Enforcement: the banner records the choice; your code must not load optional scripts until `has()` / `whenGranted()` / `*scscIfConsent` say so.","For a fixed page footer or bottom toolbar, `padding-bottom: var(--scsc-consent-h, 0)` keeps it clear of the banner while it shows."],a11y:[`Accept all and Reject all share the same variant and size (equal prominence); refusing is never harder than accepting.`,"While shown, the banner sets `--scsc-consent-h` (its height) on `<html>` with a matching `scroll-padding`, so focused elements scroll clear of it (WCAG 2.4.11, and 2.4.12 with room for the focus ring). It also leaves a spacer of the same height where it sits. Both are removed when it closes.",`It slides in from its edge and fades out, timed by the motion tokens; with reduced motion it only fades.`,`It works at 320px wide and 400% zoom: the buttons wrap and the card becomes full width.`],related:[`legal-notice`,`modal`,`switch`,`footer`]};export{Se as CONSENT_BANNER_DOCS};