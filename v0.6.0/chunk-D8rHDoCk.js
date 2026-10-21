import{Es as sD,Hs as y_,I as EP,Lo as d_,Ma as JT,Na as Jb,No as cc,Ps as ut,Vr as mN,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,ds as nD,ha as Eg,ka as Ig,ks as t_,kt as NE,ra as Af,sa as C_,va as G_,x as Ba,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var z=(t,o)=>o.id;function B(t,o){if(t&1&&(Ga(0,`scsc-text`,7),G_(1),Lf()),t&2){let a=y_().$implicit;Jb(),nD(a.outcome)}}function F(t,o){if(t&1&&(Ga(0,`li`,5)(1,`span`)(2,`span`,6),G_(3),Lf(),JT(4,B,2,1,`scsc-text`,7),Lf(),Ga(5,`scsc-text`,8),G_(6),Lf()()),t&2){let a=o.$implicit;Jb(3),nD(a.matter),Jb(),t_(a.outcome?4:-1),Jb(2),nD(a.date)}}var I=class t{upcoming=[{id:4,date:`Oct 14, 2026`,matter:`Motion to compel`},{id:5,date:`Nov 4, 2026`,matter:`Case management conference`}];past=[{id:3,date:`Aug 12, 2026`,matter:`Demurrer`,outcome:`Overruled`},{id:2,date:`Jun 3, 2026`,matter:`Case management conference`,outcome:`Continued`},{id:1,date:`Apr 22, 2026`,matter:`Ex parte application`,outcome:`Denied`}];active=q(`upcoming`);tabs=ut(()=>[{id:`upcoming`,label:`Upcoming (`+this.upcoming.length+`)`},{id:`past`,label:`Past (`+this.past.length+`)`}]);shown=ut(()=>this.active()===`upcoming`?this.upcoming:this.past);static ɵfac=function(a){return new(a||t)};static ɵcmp=Af({type:t,selectors:[[`app-tabs-in-card-demo`]],decls:8,vars:3,consts:[[`hearingTabs`,``],[`title`,`Hearings · 24CV012345`,`flush`,``,1,`max-w-lg`],[1,`px-4`,`pt-3`],[`variant`,`box`,`panelId`,`hearings-panel`,3,`activeChange`,`tabs`,`active`],[`role`,`tabpanel`,`id`,`hearings-panel`,`tabindex`,`0`],[1,`flex`,`items-baseline`,`justify-between`,`gap-4`,`px-4`,`py-3`],[1,`block`,`font-medium`],[`size`,`sm`,`tone`,`muted`],[`size`,`sm`,`tone`,`muted`,`tnum`,``]],template:function(a,e){if(a&1){let r=d_();Ga(0,`scsc-card`,1)(1,`div`,2)(2,`scsc-tabs`,3,0),sD(`activeChange`,function(v){return Eg(r),Y_(e.active,v)||(e.active=v),Ig(v)}),Lf()(),Ga(4,`div`,4)(5,`scsc-list`),o_(6,F,7,3,`li`,5,z),Lf()()()}if(a&2){let r=C_(3);Jb(2),Pv(`tabs`,e.tabs()),iD(`active`,e.active),Jb(2),cc(`aria-labelledby`,r.tabId(e.active())),Jb(2),i_(e.shown())}},dependencies:[mN,EP,Ba,NE],encapsulation:2})};function U(t,o){t&1&&(Ga(0,`scsc-text`),G_(1,`24CV012345 · Alvarez v. Northgate Holdings · Unlimited civil · Dept. 7`),Lf())}function R(t,o){t&1&&(Ga(0,`scsc-text`),G_(1,`Plaintiff: Maria Alvarez (Kim & Rowe LLP) · Defendant: Northgate Holdings, Inc.`),Lf())}function j(t,o){t&1&&(Ga(0,`scsc-text`),G_(1,`42 entries · Last filed: Opposition to Motion to Compel (Sep 22, 2026)`),Lf())}var P=class t{active=q(`overview`);tabs=[{id:`overview`,label:`Overview`,icon:`court.case`},{id:`parties`,label:`Parties`,icon:`people.users`},{id:`docket`,label:`Docket`,icon:`court.docket`}];static ɵfac=function(a){return new(a||t)};static ɵcmp=Af({type:t,selectors:[[`app-tabs-panels-demo`]],decls:6,vars:4,consts:[[`caseTabs`,``],[`panelId`,`case-summary-panel`,3,`activeChange`,`tabs`,`active`],[`role`,`tabpanel`,`id`,`case-summary-panel`,`tabindex`,`0`,1,`py-4`]],template:function(a,e){if(a&1){let r=d_();Ga(0,`scsc-tabs`,1,0),sD(`activeChange`,function(v){return Eg(r),Y_(e.active,v)||(e.active=v),Ig(v)}),Lf(),Ga(2,`div`,2),JT(3,U,2,0,`scsc-text`)(4,R,2,0,`scsc-text`)(5,j,2,0,`scsc-text`),Lf()}if(a&2){let r,n=C_(1);Pv(`tabs`,e.tabs),iD(`active`,e.active),Jb(2),cc(`aria-labelledby`,n.tabId(e.active())),Jb(),t_((r=e.active())===`overview`?3:r===`parties`?4:r===`docket`?5:-1)}},dependencies:[Ba,NE],encapsulation:2})};var k=class t{active=q(`hearings`);tabs=[{id:`hearings`,label:`Hearings`},{id:`filings`,label:`Filings`},{id:`fees`,label:`Fees`},{id:`sealed`,label:`Sealed`,disabled:!0}];static ɵfac=function(a){return new(a||t)};static ɵcmp=Af({type:t,selectors:[[`app-tabs-variants-demo`]],decls:4,vars:6,consts:[[1,`flex`,`flex-col`,`gap-6`],[`variant`,`border`,3,`activeChange`,`tabs`,`active`],[`variant`,`lift`,3,`activeChange`,`tabs`,`active`],[`variant`,`box`,3,`activeChange`,`tabs`,`active`]],template:function(a,e){a&1&&(Ga(0,`div`,0)(1,`scsc-tabs`,1),sD(`activeChange`,function(n){return Y_(e.active,n)||(e.active=n),n}),Lf(),Ga(2,`scsc-tabs`,2),sD(`activeChange`,function(n){return Y_(e.active,n)||(e.active=n),n}),Lf(),Ga(3,`scsc-tabs`,3),sD(`activeChange`,function(n){return Y_(e.active,n)||(e.active=n),n}),Lf()()),a&2&&(Jb(),Pv(`tabs`,e.tabs),iD(`active`,e.active),Jb(),Pv(`tabs`,e.tabs),iD(`active`,e.active),Jb(),Pv(`tabs`,e.tabs),iD(`active`,e.active))},dependencies:[Ba],encapsulation:2})};var E={"tabs-in-card":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCard, ScscList, ScscTab, ScscTabs, ScscText } from '@scscourt/design';

interface Hearing {
  id: number;
  date: string;
  matter: string;
  outcome?: string;
}

@Component({
  selector: 'app-tabs-in-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscList, ScscTabs, ScscText],
  template: \`
    <scsc-card title="Hearings \xB7 24CV012345" flush class="max-w-lg">
      <div class="px-4 pt-3">
        <!-- Counts are part of the label text, so they are read with the tab name. -->
        <scsc-tabs
          #hearingTabs
          [tabs]="tabs()"
          [(active)]="active"
          variant="box"
          panelId="hearings-panel"
        />
      </div>
      <div
        role="tabpanel"
        id="hearings-panel"
        tabindex="0"
        [attr.aria-labelledby]="hearingTabs.tabId(active())"
      >
        <scsc-list>
          @for (h of shown(); track h.id) {
            <li class="flex items-baseline justify-between gap-4 px-4 py-3">
              <span>
                <span class="block font-medium">{{ h.matter }}</span>
                @if (h.outcome) {
                  <scsc-text size="sm" tone="muted">{{ h.outcome }}</scsc-text>
                }
              </span>
              <scsc-text size="sm" tone="muted" tnum>{{ h.date }}</scsc-text>
            </li>
          }
        </scsc-list>
      </div>
    </scsc-card>
  \`,
})
export class TabsInCardDemo {
  private readonly upcoming: Hearing[] = [
    { id: 4, date: 'Oct 14, 2026', matter: 'Motion to compel' },
    { id: 5, date: 'Nov 4, 2026', matter: 'Case management conference' },
  ];
  private readonly past: Hearing[] = [
    { id: 3, date: 'Aug 12, 2026', matter: 'Demurrer', outcome: 'Overruled' },
    { id: 2, date: 'Jun 3, 2026', matter: 'Case management conference', outcome: 'Continued' },
    { id: 1, date: 'Apr 22, 2026', matter: 'Ex parte application', outcome: 'Denied' },
  ];

  protected readonly active = signal('upcoming');
  protected readonly tabs = computed<ScscTab[]>(() => [
    { id: 'upcoming', label: 'Upcoming (' + this.upcoming.length + ')' },
    { id: 'past', label: 'Past (' + this.past.length + ')' },
  ]);
  protected readonly shown = computed(() =>
    this.active() === 'upcoming' ? this.upcoming : this.past,
  );
}
`,html:`<scsc-card title="Hearings \xB7 24CV012345" flush class="max-w-lg">
  <div class="px-4 pt-3">
    <!-- Counts are part of the label text, so they are read with the tab name. -->
    <scsc-tabs
      #hearingTabs
      [tabs]="tabs()"
      [(active)]="active"
      variant="box"
      panelId="hearings-panel"
    />
  </div>
  <div
    role="tabpanel"
    id="hearings-panel"
    tabindex="0"
    [attr.aria-labelledby]="hearingTabs.tabId(active())"
  >
    <scsc-list>
      @for (h of shown(); track h.id) {
        <li class="flex items-baseline justify-between gap-4 px-4 py-3">
          <span>
            <span class="block font-medium">{{ h.matter }}</span>
            @if (h.outcome) {
              <scsc-text size="sm" tone="muted">{{ h.outcome }}</scsc-text>
            }
          </span>
          <scsc-text size="sm" tone="muted" tnum>{{ h.date }}</scsc-text>
        </li>
      }
    </scsc-list>
  </div>
</scsc-card>
`},"tabs-panels":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscTab, ScscTabs, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-tabs-panels-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTabs, ScscText],
  template: \`
    <scsc-tabs #caseTabs [tabs]="tabs" [(active)]="active" panelId="case-summary-panel" />

    <!-- Named by its tab. tabindex="0" because the panel holds no control of its own. -->
    <div
      role="tabpanel"
      id="case-summary-panel"
      tabindex="0"
      class="py-4"
      [attr.aria-labelledby]="caseTabs.tabId(active())"
    >
      @switch (active()) {
        @case ('overview') {
          <scsc-text
            >24CV012345 \xB7 Alvarez v. Northgate Holdings \xB7 Unlimited civil \xB7 Dept. 7</scsc-text
          >
        }
        @case ('parties') {
          <scsc-text
            >Plaintiff: Maria Alvarez (Kim &amp; Rowe LLP) \xB7 Defendant: Northgate Holdings,
            Inc.</scsc-text
          >
        }
        @case ('docket') {
          <scsc-text
            >42 entries \xB7 Last filed: Opposition to Motion to Compel (Sep 22, 2026)</scsc-text
          >
        }
      }
    </div>
  \`,
})
export class TabsPanelsDemo {
  protected readonly active = signal('overview');

  // Icons are decorative: the label names the tab.
  protected readonly tabs: ScscTab[] = [
    { id: 'overview', label: 'Overview', icon: 'court.case' },
    { id: 'parties', label: 'Parties', icon: 'people.users' },
    { id: 'docket', label: 'Docket', icon: 'court.docket' },
  ];
}
`,html:`<scsc-tabs #caseTabs [tabs]="tabs" [(active)]="active" panelId="case-summary-panel" />

<!-- Named by its tab. tabindex="0" because the panel holds no control of its own. -->
<div
  role="tabpanel"
  id="case-summary-panel"
  tabindex="0"
  class="py-4"
  [attr.aria-labelledby]="caseTabs.tabId(active())"
>
  @switch (active()) {
    @case ('overview') {
      <scsc-text
        >24CV012345 \xB7 Alvarez v. Northgate Holdings \xB7 Unlimited civil \xB7 Dept. 7</scsc-text
      >
    }
    @case ('parties') {
      <scsc-text
        >Plaintiff: Maria Alvarez (Kim &amp; Rowe LLP) \xB7 Defendant: Northgate Holdings,
        Inc.</scsc-text
      >
    }
    @case ('docket') {
      <scsc-text
        >42 entries \xB7 Last filed: Opposition to Motion to Compel (Sep 22, 2026)</scsc-text
      >
    }
  }
</div>
`},"tabs-variants":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscTab, ScscTabs } from '@scscourt/design';

@Component({
  selector: 'app-tabs-variants-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTabs],
  template: \`
    <div class="flex flex-col gap-6">
      <scsc-tabs [tabs]="tabs" [(active)]="active" variant="border" />
      <scsc-tabs [tabs]="tabs" [(active)]="active" variant="lift" />
      <scsc-tabs [tabs]="tabs" [(active)]="active" variant="box" />
    </div>
  \`,
})
export class TabsVariantsDemo {
  // One shared model: selecting in any bar updates all three.
  protected readonly active = signal('hearings');

  protected readonly tabs: ScscTab[] = [
    { id: 'hearings', label: 'Hearings' },
    { id: 'filings', label: 'Filings' },
    { id: 'fees', label: 'Fees' },
    { id: 'sealed', label: 'Sealed', disabled: true },
  ];
}
`,html:`<div class="flex flex-col gap-6">
  <scsc-tabs [tabs]="tabs" [(active)]="active" variant="border" />
  <scsc-tabs [tabs]="tabs" [(active)]="active" variant="lift" />
  <scsc-tabs [tabs]="tabs" [(active)]="active" variant="box" />
</div>
`}};var ve={slug:`tabs`,name:`Tabs`,classes:[`ScscTabs`],category:`Navigation`,whenToUse:[`Switching between views of the same object on one page (Overview / Parties / Docket) without a route change.`,"You render the panel: two-way bind `[(active)]` and `@switch` on it, or derive the panel content in a `computed()`. Tie it to its tab with `panelId` and `tabId()` (see Accessibility).","When each tab should be a URL (deep-linkable, back button), use `scsc-tab-nav` with child routes instead.",'Three to six tabs; mark tabs the user cannot open yet as `disabled` rather than hiding them. Put counts in the `label` text ("Upcoming (2)").',"`ScscTab.icon` adds a decorative icon before the label: an SCSC alias such as `court.docket`, or a registered Lucide name. The label still names the tab, so keep it."],demos:[{id:`tabs-panels`,title:`With panels`,description:"`[(active)]` holds the selected id and the consumer switches the panel; `panelId` and `tabId()` tie the panel to its tab. The icons are decorative.",component:P,source:E[`tabs-panels`]},{id:`tabs-variants`,title:`Variants`,description:"`border` (default), `lift` and `box`, sharing one model. The last tab is `disabled`.",component:k,source:E[`tabs-variants`]},{id:`tabs-in-card`,title:`Inside a card`,description:"`box` tabs under a card title switch a flush list of hearings; counts sit in the labels.",component:I,source:E[`tabs-in-card`]}],a11y:['Follows the WAI-ARIA tabs pattern: a `role="tablist"` of `role="tab"` buttons with `aria-selected` on the selected one, and a roving `tabindex` so the whole list is one Tab stop.',"Selection follows focus (automatic activation): arrowing to a tab selects it and updates `active`, so render the panel without a noticeable delay.","Disabled tabs use the native `disabled` attribute and are skipped by the arrow keys. When no enabled tab is selected, the Tab stop is the first enabled tab.",'Every tab has an `id`. With `panelId` set, the selected tab points to your panel with `aria-controls`; name the panel with `[attr.aria-labelledby]="tabs.tabId(active())"` and keep its heading level consistent with the page.',"Tab icons are hidden from assistive technology (`aria-hidden`); the `label` is the accessible name."],keyboard:[{keys:`Tab / Shift + Tab`,action:`Enters the tab list on the selected tab; the next Tab leaves the list for the panel.`},{keys:`ArrowLeft / ArrowRight`,action:`Moves to the previous or next enabled tab and selects it, wrapping at the ends.`},{keys:`Home / End`,action:`Moves to the first or last enabled tab and selects it.`},{keys:`Enter / Space`,action:`Selects the focused tab; only needed when no tab was selected yet.`}],appMustProvide:['The panel: `role="tabpanel"`, an `id` passed to `panelId`, `aria-labelledby` bound to `tabId(active())`, and `tabindex="0"` when its content does not start with a focusable element.'],related:[`navbar`,`steps`,`accordion`]};export{ve as TABS_DOCS};