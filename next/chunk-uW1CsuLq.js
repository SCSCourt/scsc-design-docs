import{An as XN,Ms as uc,Na as Jb,No as cc,Xa as Pv,Zo as i_,_s as o_,ms as nu,ra as Af,ta as $f,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var u=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-footer-basic-demo`]],decls:7,vars:0,consts:[[`routerLink`,`.`,1,`link`,`link-hover`]],template:function(e,c){e&1&&(Ga(0,`scsc-footer`)(1,`a`,0),G_(2,`Privacy`),Lf(),Ga(3,`a`,0),G_(4,`Accessibility`),Lf(),Ga(5,`a`,0),G_(6,`Contact`),Lf()())},dependencies:[nu,XN],encapsulation:2})};var g=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-footer-custom-org-demo`]],decls:5,vars:0,consts:[[`org`,`Jury Services · 191 N. First Street, San Jose · (408) 882-2700`],[`routerLink`,`.`,1,`link`,`link-hover`]],template:function(e,c){e&1&&(Ga(0,`scsc-footer`,0)(1,`a`,1),G_(2,`Juror FAQ`),Lf(),Ga(3,`a`,1),G_(4,`Postpone your service`),Lf()())},dependencies:[nu,XN],encapsulation:2})};var F=(o,r)=>r.code;function D(o,r){if(o&1&&(Ga(0,`a`,0),G_(1),Lf()),o&2){let e=r.$implicit;cc(`lang`,e.code)(`hreflang`,e.code),Jb(),$f(` `,e.name,` `)}}var d=class o{languages=[{code:`es`,name:`Español`},{code:`vi`,name:`Tiếng Việt`},{code:`zh-Hant`,name:`中文`},{code:`tl`,name:`Tagalog`}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-footer-languages-demo`]],decls:7,vars:0,consts:[[`routerLink`,`.`,1,`link`,`link-hover`]],template:function(e,c){e&1&&(Ga(0,`scsc-footer`)(1,`a`,0),G_(2,`Accessibility`),Lf(),Ga(3,`a`,0),G_(4,`Contact`),Lf(),o_(5,D,2,3,`a`,0,F),Lf()),e&2&&(Jb(5),i_(c.languages))},dependencies:[nu,XN],encapsulation:2})};var f=class o{columns=[{heading:`Online services`,links:[{label:`Case search`,link:`cases`},{label:`Pay a traffic ticket`,link:`pay`},{label:`e-Filing`,link:`efile`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Interpreters`,link:`interpreters`},{label:`ADA accommodations`,link:`ada`}]},{heading:`About the court`,links:[{label:`News`,link:`news`},{label:`Careers`,link:`careers`},{label:`Judicial Council`,href:`https://www.courts.ca.gov`,external:!0}]}];contact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,email:`clerk@scscourt.org`,hours:[`Mon–Fri, 8:30 a.m.–4:00 p.m.`],mapHref:`https://maps.google.com/?q=191+N+First+St+San+Jose+CA+95113`};social=[{label:`Court news on YouTube`,href:`https://www.youtube.com/`,icon:`youtube`},{label:`Court news feed (RSS)`,href:`https://www.scscourt.org/`,icon:`rss`}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-footer-mega-demo`]],decls:4,vars:3,consts:[[1,`flex`,`min-h-screen`,`flex-col`,`bg-base-200`],[1,`flex-1`,`p-6`,`text-sm`,`text-base-content/70`],[`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`description`,`Serving the people of Santa Clara County with fair, accessible and timely justice.`,`recordDisclaimer`,``,`backToTop`,``,`lastUpdated`,`2026-09-30`,3,`columns`,`contact`,`social`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`main`,1),G_(2,` The public-site footer. Switch the preview to mobile: the link columns become accordions. `),Lf(),uc(3,`scsc-footer`,2),Lf()),e&2&&(Jb(3),Pv(`columns`,c.columns)(`contact`,c.contact)(`social`,c.social))},dependencies:[XN],encapsulation:2})};var p={"footer-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscFooter } from '@scscourt/design';

@Component({
  selector: 'app-footer-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscFooter],
  template: \`
    <scsc-footer>
      <a routerLink="." class="link link-hover">Privacy</a>
      <a routerLink="." class="link link-hover">Accessibility</a>
      <a routerLink="." class="link link-hover">Contact</a>
    </scsc-footer>
  \`,
})
export class FooterBasicDemo {}
`,html:`<scsc-footer>
  <a routerLink="." class="link link-hover">Privacy</a>
  <a routerLink="." class="link link-hover">Accessibility</a>
  <a routerLink="." class="link link-hover">Contact</a>
</scsc-footer>
`},"footer-custom-org":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscFooter } from '@scscourt/design';

@Component({
  selector: 'app-footer-custom-org-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscFooter],
  template: \`
    <scsc-footer org="Jury Services \xB7 191 N. First Street, San Jose \xB7 (408) 882-2700">
      <a routerLink="." class="link link-hover">Juror FAQ</a>
      <a routerLink="." class="link link-hover">Postpone your service</a>
    </scsc-footer>
  \`,
})
export class FooterCustomOrgDemo {}
`,html:`<scsc-footer org="Jury Services \xB7 191 N. First Street, San Jose \xB7 (408) 882-2700">
  <a routerLink="." class="link link-hover">Juror FAQ</a>
  <a routerLink="." class="link link-hover">Postpone your service</a>
</scsc-footer>
`},"footer-languages":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscFooter } from '@scscourt/design';

interface Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-footer-languages-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscFooter],
  template: \`
    <scsc-footer>
      <a routerLink="." class="link link-hover">Accessibility</a>
      <a routerLink="." class="link link-hover">Contact</a>
      <!-- Each language name is written in that language: lang makes screen readers switch voice,
           hreflang says what the linked page is in. -->
      @for (l of languages; track l.code) {
        <a routerLink="." class="link link-hover" [attr.lang]="l.code" [attr.hreflang]="l.code">
          {{ l.name }}
        </a>
      }
    </scsc-footer>
  \`,
})
export class FooterLanguagesDemo {
  protected readonly languages: Language[] = [
    { code: 'es', name: 'Espa\xF1ol' },
    { code: 'vi', name: 'Ti\u1EBFng Vi\u1EC7t' },
    { code: 'zh-Hant', name: '\u4E2D\u6587' },
    { code: 'tl', name: 'Tagalog' },
  ];
}
`,html:`<scsc-footer>
  <a routerLink="." class="link link-hover">Accessibility</a>
  <a routerLink="." class="link link-hover">Contact</a>
  <!-- Each language name is written in that language: lang makes screen readers switch voice,
       hreflang says what the linked page is in. -->
  @for (l of languages; track l.code) {
    <a routerLink="." class="link link-hover" [attr.lang]="l.code" [attr.hreflang]="l.code">
      {{ l.name }}
    </a>
  }
</scsc-footer>
`},"footer-mega":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscFooter,
  type ScscFooterColumn,
  type ScscFooterContact,
  type ScscFooterSocial,
} from '@scscourt/design';

@Component({
  selector: 'app-footer-mega-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFooter],
  template: \`
    <div class="flex min-h-screen flex-col bg-base-200">
      <main class="flex-1 p-6 text-sm text-base-content/70">
        The public-site footer. Switch the preview to mobile: the link columns become accordions.
      </main>
      <scsc-footer
        variant="mega"
        logoSrc="scsc-seal.png"
        description="Serving the people of Santa Clara County with fair, accessible and timely justice."
        [columns]="columns"
        [contact]="contact"
        [social]="social"
        recordDisclaimer
        backToTop
        lastUpdated="2026-09-30"
      />
    </div>
  \`,
})
export class FooterMegaDemo {
  protected readonly columns: ScscFooterColumn[] = [
    {
      heading: 'Online services',
      links: [
        { label: 'Case search', link: 'cases' },
        { label: 'Pay a traffic ticket', link: 'pay' },
        { label: 'e-Filing', link: 'efile' },
      ],
    },
    {
      heading: 'Get help',
      links: [
        { label: 'Self-help center', link: 'self-help' },
        { label: 'Interpreters', link: 'interpreters' },
        { label: 'ADA accommodations', link: 'ada' },
      ],
    },
    {
      heading: 'About the court',
      links: [
        { label: 'News', link: 'news' },
        { label: 'Careers', link: 'careers' },
        { label: 'Judicial Council', href: 'https://www.courts.ca.gov', external: true },
      ],
    },
  ];

  protected readonly contact: ScscFooterContact = {
    name: 'Downtown Superior Court',
    address: ['191 N. First Street', 'San Jos\xE9, CA 95113'],
    phone: '(408) 882-2100',
    email: 'clerk@scscourt.org',
    hours: ['Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.'],
    mapHref: 'https://maps.google.com/?q=191+N+First+St+San+Jose+CA+95113',
  };

  protected readonly social: ScscFooterSocial[] = [
    { label: 'Court news on YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
    { label: 'Court news feed (RSS)', href: 'https://www.scscourt.org/', icon: 'rss' },
  ];
}
`,html:`<div class="flex min-h-screen flex-col bg-base-200">
  <main class="flex-1 p-6 text-sm text-base-content/70">
    The public-site footer. Switch the preview to mobile: the link columns become accordions.
  </main>
  <scsc-footer
    variant="mega"
    logoSrc="scsc-seal.png"
    description="Serving the people of Santa Clara County with fair, accessible and timely justice."
    [columns]="columns"
    [contact]="contact"
    [social]="social"
    recordDisclaimer
    backToTop
    lastUpdated="2026-09-30"
  />
</div>
`}};var G={slug:`footer`,name:`Footer`,classes:[`ScscFooter`],category:`Navigation`,whenToUse:["The bottom of every public page: court attribution on the left, policy links on the right. Put it in the `[slot=footer]` of `scsc-portal-shell`.",'Public sites use `variant="mega"`: brand block, up to four link `columns`, a `contact` block and a legal row (`scsc-legal-bar`, or your own in `[slot=legal]`). Add `recordDisclaimer` wherever case information is shown.',`Back-office apps usually omit the footer or use the simple one; the masthead carries the branding.`,`Keep the simple footer to the essentials (privacy, accessibility, contact, languages); a mega footer is a guide to top tasks, not a sitemap.`,'Write each language link in its own language ("Español", "Tiếng Việt") and mark it with `lang`.'],demos:[{id:`footer-mega`,title:`Mega footer`,description:"Brand block with social links, three link columns, contact (address, phone, email, hours, map), and the legal row with the electronic-record disclaimer, last-updated date and Back to top. Below md the columns become `<details>`.",component:f,source:p[`footer-mega`],layout:`page`,height:`44rem`},{id:`footer-basic`,title:`Simple footer`,description:`The court copyright line with three projected links.`,component:u,source:p[`footer-basic`],layout:`full-bleed`},{id:`footer-custom-org`,title:`Custom attribution`,description:"`org` replaces the default line, e.g. with a division and phone number.",component:g,source:p[`footer-custom-org`],layout:`full-bleed`},{id:`footer-languages`,title:`Language links`,description:"Policy links plus translated versions of the site, each with `lang` and `hreflang` set to its language.",component:d,source:p[`footer-languages`],layout:`full-bleed`}],a11y:['Renders the `<footer>` (contentinfo landmark); links are ordinary anchors, so keep their text descriptive ("Accessibility", not "Click here").',"Mega: column and contact titles are headings at `headingLevel` (2 by default); below md each column is a native `<details>` disclosure. Contact details sit in `<address>`, with `tel:` and `mailto:` links.",'Social links are icon buttons named by `label` plus "opens in a new tab". Back to top moves focus to the skip link, not just the scroll position.',`The attribution is plain text; it is not a heading.`,"`lang` on a link written in another language makes screen readers pronounce it correctly (WCAG 3.1.2)."],keyboard:[{keys:`Tab`,action:`Brand links, each column, contact links, then the legal row and Back to top.`},{keys:`Enter / Space (column heading, below md)`,action:`Opens or closes that column.`},{keys:`Enter / Space (Back to top)`,action:`Scrolls to the top and focuses the skip link.`}],appMustProvide:[`Court-approved copy: the electronic-record disclaimer and legal link targets need counsel review before release.`,"`legalLinks` that point at your own policy pages when they are not at /privacy, /terms, /accessibility and /language-access."],related:[`shells`,`masthead`,`navbar`,`legal-notice`]};export{G as FOOTER_DOCS};