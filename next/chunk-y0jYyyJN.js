import{Fr as kn,H as FN,Hs as y_,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Tt as MN,Xa as Pv,Xi as zN,_n as VP,cs as lc,ha as Eg,ka as Ig,ks as t_,kt as NE,ms as nu,pi as sn,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var f={"banner-dismissable":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscBanner, ScscButton } from '@scscourt/design';

@Component({
  selector: 'app-banner-dismissable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBanner, ScscButton],
  template: \`
    <!-- The banner never hides itself: remove it from the template on (dismissed). -->
    @if (visible()) {
      <scsc-banner
        tone="neutral"
        icon="calendar-x"
        [dismissable]="true"
        (dismissed)="visible.set(false)"
      >
        All courthouses are closed Wednesday, Nov 11 for Veterans Day. Filing deadlines move to Nov
        12.
      </scsc-banner>
    } @else {
      <div class="px-6 py-2">
        <scsc-button variant="ghost" size="sm" (click)="visible.set(true)"
          >Show the closure notice</scsc-button
        >
      </div>
    }
  \`,
})
export class BannerDismissableDemo {
  protected readonly visible = signal(true);
}
`,html:`<!-- The banner never hides itself: remove it from the template on (dismissed). -->
@if (visible()) {
  <scsc-banner
    tone="neutral"
    icon="calendar-x"
    [dismissable]="true"
    (dismissed)="visible.set(false)"
  >
    All courthouses are closed Wednesday, Nov 11 for Veterans Day. Filing deadlines move to Nov
    12.
  </scsc-banner>
} @else {
  <div class="px-6 py-2">
    <scsc-button variant="ghost" size="sm" (click)="visible.set(true)"
      >Show the closure notice</scsc-button
    >
  </div>
}
`},"banner-page":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBanner,
  ScscHeading,
  ScscMasthead,
  ScscPortalShell,
  ScscText,
  ScscUtilityBar,
} from '@scscourt/design';

/** One key per notice, so a new notice shows again even if an older one was dismissed. */
const NOTICE_KEY = 'scsc-notice-efiling-maintenance-2026-10-03';

@Component({
  selector: 'app-banner-page-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscBanner,
    ScscHeading,
    ScscMasthead,
    ScscPortalShell,
    ScscText,
    ScscUtilityBar,
  ],
  template: \`
    <scsc-portal-shell>
      <scsc-utility-bar slot="utility">
        <span slot="start"
          >An official website of the Superior Court of California, County of Santa Clara</span
        >
        <a routerLink="es" lang="es" hreflang="es" class="link">Espa\xF1ol</a>
      </scsc-utility-bar>

      <!-- Directly above the masthead, in the initial render; removed when dismissed. -->
      @if (showNotice()) {
        <scsc-banner
          slot="utility"
          tone="warning"
          icon="triangle-alert"
          [dismissable]="true"
          (dismissed)="dismiss()"
        >
          E-filing is unavailable Saturday, Oct 3, from 10 PM to 2 AM for scheduled maintenance.
        </scsc-banner>
      }

      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California, County of Santa Clara"
        logoSrc="scsc-seal.png"
        contained
      />

      <div class="mx-auto max-w-[90rem] scsc-pad-page">
        <scsc-heading [level]="1" display>E-filing</scsc-heading>
        <scsc-text tone="muted" class="mt-2 block">
          File documents in civil, family and probate cases. Filings received after 11:59 PM are
          filed on the next court day.
        </scsc-text>
      </div>
    </scsc-portal-shell>
  \`,
})
export class BannerPageDemo {
  protected readonly showNotice = signal(!this.wasDismissed());

  protected dismiss(): void {
    this.showNotice.set(false);
    try {
      localStorage.setItem(NOTICE_KEY, 'dismissed');
    } catch {
      // Storage can be unavailable (private mode); the notice simply returns next visit.
    }
  }

  private wasDismissed(): boolean {
    try {
      return localStorage.getItem(NOTICE_KEY) === 'dismissed';
    } catch {
      return false;
    }
  }
}
`,html:`<scsc-portal-shell>
  <scsc-utility-bar slot="utility">
    <span slot="start"
      >An official website of the Superior Court of California, County of Santa Clara</span
    >
    <a routerLink="es" lang="es" hreflang="es" class="link">Espa\xF1ol</a>
  </scsc-utility-bar>

  <!-- Directly above the masthead, in the initial render; removed when dismissed. -->
  @if (showNotice()) {
    <scsc-banner
      slot="utility"
      tone="warning"
      icon="triangle-alert"
      [dismissable]="true"
      (dismissed)="dismiss()"
    >
      E-filing is unavailable Saturday, Oct 3, from 10 PM to 2 AM for scheduled maintenance.
    </scsc-banner>
  }

  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California, County of Santa Clara"
    logoSrc="scsc-seal.png"
    contained
  />

  <div class="mx-auto max-w-[90rem] scsc-pad-page">
    <scsc-heading [level]="1" display>E-filing</scsc-heading>
    <scsc-text tone="muted" class="mt-2 block">
      File documents in civil, family and probate cases. Filings received after 11:59 PM are
      filed on the next court day.
    </scsc-text>
  </div>
</scsc-portal-shell>
`},"banner-soft":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBanner } from '@scscourt/design';

@Component({
  selector: 'app-banner-soft-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBanner],
  template: \`
    <div class="flex flex-col gap-2">
      <!-- Each banner is a region named by its heading, so the landmarks can be told apart. -->
      <scsc-banner tone="neutral" heading="Jury service" soft
        >Report to the Hall of Justice, 2nd floor, by 8:00 AM.</scsc-banner
      >
      <scsc-banner tone="info" icon="info" heading="New payment options" soft
        >Online payments now accept Apple Pay and Google Pay.</scsc-banner
      >
      <scsc-banner tone="success" icon="circle-check" heading="E-filing restored" soft
        >The e-filing outage has been resolved.</scsc-banner
      >
      <scsc-banner tone="warning" icon="triangle-alert" heading="Scheduled maintenance" soft
        >Saturday 10 PM \u2013 2 AM. Case lookup will be unavailable.</scsc-banner
      >
      <scsc-banner tone="error" icon="circle-x" heading="Online payments down" soft
        >Fees can still be paid at the clerk window.</scsc-banner
      >
    </div>
  \`,
})
export class BannerSoftDemo {}
`,html:`<div class="flex flex-col gap-2">
  <!-- Each banner is a region named by its heading, so the landmarks can be told apart. -->
  <scsc-banner tone="neutral" heading="Jury service" soft
    >Report to the Hall of Justice, 2nd floor, by 8:00 AM.</scsc-banner
  >
  <scsc-banner tone="info" icon="info" heading="New payment options" soft
    >Online payments now accept Apple Pay and Google Pay.</scsc-banner
  >
  <scsc-banner tone="success" icon="circle-check" heading="E-filing restored" soft
    >The e-filing outage has been resolved.</scsc-banner
  >
  <scsc-banner tone="warning" icon="triangle-alert" heading="Scheduled maintenance" soft
    >Saturday 10 PM \u2013 2 AM. Case lookup will be unavailable.</scsc-banner
  >
  <scsc-banner tone="error" icon="circle-x" heading="Online payments down" soft
    >Fees can still be paid at the clerk window.</scsc-banner
  >
</div>
`},"banner-tones":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBanner } from '@scscourt/design';

@Component({
  selector: 'app-banner-tones-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBanner],
  template: \`
    <div class="flex flex-col gap-2">
      <!-- No visible heading: label names each banner region instead. -->
      <scsc-banner tone="neutral" label="Jury service"
        >Jury service: report to the Hall of Justice, 2nd floor, by 8:00 AM.</scsc-banner
      >
      <scsc-banner tone="info" icon="info" label="New payment options"
        >Online payments now accept Apple Pay and Google Pay.</scsc-banner
      >
      <scsc-banner tone="success" icon="circle-check" label="E-filing restored"
        >The e-filing outage has been resolved.</scsc-banner
      >
      <scsc-banner tone="warning" icon="triangle-alert" label="Scheduled maintenance"
        >Scheduled maintenance Saturday 10 PM \u2013 2 AM. Case lookup will be unavailable.</scsc-banner
      >
      <scsc-banner tone="error" icon="circle-x" label="Online payments down"
        >Payment processing is unavailable. Fees can still be paid at the clerk window.</scsc-banner
      >
    </div>
  \`,
})
export class BannerTonesDemo {}
`,html:`<div class="flex flex-col gap-2">
  <!-- No visible heading: label names each banner region instead. -->
  <scsc-banner tone="neutral" label="Jury service"
    >Jury service: report to the Hall of Justice, 2nd floor, by 8:00 AM.</scsc-banner
  >
  <scsc-banner tone="info" icon="info" label="New payment options"
    >Online payments now accept Apple Pay and Google Pay.</scsc-banner
  >
  <scsc-banner tone="success" icon="circle-check" label="E-filing restored"
    >The e-filing outage has been resolved.</scsc-banner
  >
  <scsc-banner tone="warning" icon="triangle-alert" label="Scheduled maintenance"
    >Scheduled maintenance Saturday 10 PM \u2013 2 AM. Case lookup will be unavailable.</scsc-banner
  >
  <scsc-banner tone="error" icon="circle-x" label="Online payments down"
    >Payment processing is unavailable. Fees can still be paid at the clerk window.</scsc-banner
  >
</div>
`}};function J(s,i){if(s&1){let e=d_();Ga(0,`scsc-banner`,2),lc(`dismissed`,function(){Eg(e);let l=y_();return Ig(l.visible.set(!1))}),G_(1,` All courthouses are closed Wednesday, Nov 11 for Veterans Day. Filing deadlines move to Nov 12. `),Lf()}s&2&&Pv(`dismissable`,!0)}function I(s,i){if(s&1){let e=d_();Ga(0,`div`,1)(1,`scsc-button`,3),lc(`click`,function(){Eg(e);let l=y_();return Ig(l.visible.set(!0))}),G_(2,`Show the closure notice`),Lf()()}}var S=class s{visible=q(!0);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-banner-dismissable-demo`]],decls:2,vars:1,consts:[[`tone`,`neutral`,`icon`,`calendar-x`,3,`dismissable`],[1,`px-6`,`py-2`],[`tone`,`neutral`,`icon`,`calendar-x`,3,`dismissed`,`dismissable`],[`variant`,`ghost`,`size`,`sm`,3,`click`]],template:function(e,o){e&1&&JT(0,J,2,1,`scsc-banner`,0)(1,I,3,0,`div`,1),e&2&&t_(o.visible()?0:1)},dependencies:[VP,sn],encapsulation:2})};function V(s,i){if(s&1){let e=d_();Ga(0,`scsc-banner`,8),lc(`dismissed`,function(){Eg(e);let l=y_();return Ig(l.dismiss())}),G_(1,` E-filing is unavailable Saturday, Oct 3, from 10 PM to 2 AM for scheduled maintenance. `),Lf()}s&2&&Pv(`dismissable`,!0)}var F=`scsc-notice-efiling-maintenance-2026-10-03`;var w=class s{showNotice=q(!this.wasDismissed());dismiss(){this.showNotice.set(!1);try{localStorage.setItem(F,`dismissed`)}catch{}}wasDismissed(){try{return localStorage.getItem(F)===`dismissed`}catch{return!1}}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-banner-page-demo`]],decls:13,vars:2,consts:[[`slot`,`utility`],[`slot`,`start`],[`routerLink`,`es`,`lang`,`es`,`hreflang`,`es`,1,`link`],[`slot`,`utility`,`tone`,`warning`,`icon`,`triangle-alert`,3,`dismissable`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[1,`mx-auto`,`max-w-[90rem]`,`scsc-pad-page`],[`display`,``,3,`level`],[`tone`,`muted`,1,`mt-2`,`block`],[`slot`,`utility`,`tone`,`warning`,`icon`,`triangle-alert`,3,`dismissed`,`dismissable`]],template:function(e,o){e&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,0)(2,`span`,1),G_(3,`An official website of the Superior Court of California, County of Santa Clara`),Lf(),Ga(4,`a`,2),G_(5,`Español`),Lf()(),JT(6,V,2,1,`scsc-banner`,3),uc(7,`scsc-masthead`,4),Ga(8,`div`,5)(9,`scsc-heading`,6),G_(10,`E-filing`),Lf(),Ga(11,`scsc-text`,7),G_(12,` File documents in civil, family and probate cases. Filings received after 11:59 PM are filed on the next court day. `),Lf()()()),e&2&&(Jb(6),t_(o.showNotice()?6:-1),Jb(3),Pv(`level`,1))},dependencies:[nu,VP,kn,FN,MN,NE,zN],encapsulation:2})};var C=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-banner-soft-demo`]],decls:11,vars:0,consts:[[1,`flex`,`flex-col`,`gap-2`],[`tone`,`neutral`,`heading`,`Jury service`,`soft`,``],[`tone`,`info`,`icon`,`info`,`heading`,`New payment options`,`soft`,``],[`tone`,`success`,`icon`,`circle-check`,`heading`,`E-filing restored`,`soft`,``],[`tone`,`warning`,`icon`,`triangle-alert`,`heading`,`Scheduled maintenance`,`soft`,``],[`tone`,`error`,`icon`,`circle-x`,`heading`,`Online payments down`,`soft`,``]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-banner`,1),G_(2,`Report to the Hall of Justice, 2nd floor, by 8:00 AM.`),Lf(),Ga(3,`scsc-banner`,2),G_(4,`Online payments now accept Apple Pay and Google Pay.`),Lf(),Ga(5,`scsc-banner`,3),G_(6,`The e-filing outage has been resolved.`),Lf(),Ga(7,`scsc-banner`,4),G_(8,`Saturday 10 PM – 2 AM. Case lookup will be unavailable.`),Lf(),Ga(9,`scsc-banner`,5),G_(10,`Fees can still be paid at the clerk window.`),Lf()())},dependencies:[VP],encapsulation:2})};var oe={slug:`banner`,name:`Banner`,classes:[`ScscBanner`],category:`Overlays & Feedback`,whenToUse:[`Site-wide announcements above the masthead: courthouse closures, e-filing outages, jury reporting instructions.`,"One banner at a time. A message about the content of a page is an `scsc-alert`; a confirmation is a toast.","The banner never hides itself: when `dismissable`, listen to `(dismissed)` and remove it, and remember the choice per notice (the page demo uses `localStorage`) if it should stay dismissed.","The default `neutral` tone is navy and fits most notices; status tones are for messages that carry that meaning.","Add `soft` for a light tint of the tone with ink-coloured words instead of a solid fill: a quieter notice inside a page, such as a portal home page under its masthead."],demos:[{id:`banner-tones`,title:`Tones and icons`,description:"Neutral plus the four status tones, each with a matching Lucide `icon`.",component:class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-banner-tones-demo`]],decls:11,vars:0,consts:[[1,`flex`,`flex-col`,`gap-2`],[`tone`,`neutral`,`label`,`Jury service`],[`tone`,`info`,`icon`,`info`,`label`,`New payment options`],[`tone`,`success`,`icon`,`circle-check`,`label`,`E-filing restored`],[`tone`,`warning`,`icon`,`triangle-alert`,`label`,`Scheduled maintenance`],[`tone`,`error`,`icon`,`circle-x`,`label`,`Online payments down`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-banner`,1),G_(2,`Jury service: report to the Hall of Justice, 2nd floor, by 8:00 AM.`),Lf(),Ga(3,`scsc-banner`,2),G_(4,`Online payments now accept Apple Pay and Google Pay.`),Lf(),Ga(5,`scsc-banner`,3),G_(6,`The e-filing outage has been resolved.`),Lf(),Ga(7,`scsc-banner`,4),G_(8,`Scheduled maintenance Saturday 10 PM – 2 AM. Case lookup will be unavailable.`),Lf(),Ga(9,`scsc-banner`,5),G_(10,`Payment processing is unavailable. Fees can still be paid at the clerk window.`),Lf()())},dependencies:[VP],encapsulation:2})},source:f[`banner-tones`],layout:`full-bleed`},{id:`banner-soft`,title:`Soft`,description:"`soft` swaps the fill for a tint and a border in the tone; the words stay in ink and the icon keeps the tone.",component:C,source:f[`banner-soft`],layout:`full-bleed`},{id:`banner-dismissable`,title:`Dismissable`,description:'`[dismissable]="true"` adds the button (plain boolean input, not an attribute); the parent removes the banner on `(dismissed)`.',component:S,source:f[`banner-dismissable`],layout:`full-bleed`},{id:`banner-page`,title:`Above the masthead`,description:"In a portal page between the utility bar and the masthead; the dismissal is remembered in `localStorage` under a key per notice (dismiss it, then reload the preview).",component:w,source:f[`banner-page`],layout:`page`,height:`22rem`}],a11y:['A `region` landmark named by its `heading`, else by `label`, else "Announcement". With several banners on a page, give each its own `heading` or `label` so the landmarks can be told apart.','A status tone is stated in words: visually hidden "Warning:" (from `SCSC_LABELS.tone`) before the message; `neutral` adds nothing.','The Dismiss button is named after the banner ("Dismiss Court closure") and has a 44 × 44 px target (`scsc-hit`); the icons are decorative.',`The bar is not a live region: put it in the initial page render rather than injecting it later, or pair it with a toast when it must be announced.`],aria:['`role="region"` with `aria-labelledby` (the heading) or `aria-label` (`label`, default "Announcement").','`heading` renders as `role="heading"` with `aria-level` from `headingLevel` (default 2).'],appMustProvide:["A distinct `heading` or `label` for each banner when more than one can show.","After `(dismissed)` removes the banner, move focus somewhere sensible if the Dismiss button had it (the next banner or the main heading)."],related:[`alert`,`toast`,`masthead`,`page-shell`]};export{oe as BANNER_DOCS};