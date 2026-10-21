import{As as uM,Es as sD,Fo as dM,Gn as Zn,Go as g,Ms as uc,Na as Jb,No as cc,Vt as PF,Xa as Pv,Yo as iD,bo as Y_,cs as lc,ds as nD,fs as nM,kt as NE,ms as nu,ra as Af,ta as $f,ti as qF,tn as T4e,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var L=class s{language=q(`en`);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-language-switcher-footer-demo`]],decls:6,vars:2,consts:[[1,`flex`,`flex-col`,`gap-3`,`border-t`,`border-base-300`,`pt-4`],[`variant`,`list`,`disclaimer`,`Pages in languages other than English are machine-translated for convenience. The English version is the official one.`,3,`localeChange`,`locale`],[`slot`,`disclaimer`,`routerLink`,`.`,1,`ms-1`,`link`],[`size`,`sm`,`tone`,`muted`,`role`,`status`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-language-switcher`,1),sD(`localeChange`,function(h){return Y_(n.language,h)||(n.language=h),h}),Ga(2,`a`,2),G_(3,` Read the translation policy `),Lf()(),Ga(4,`scsc-text`,3),G_(5),Lf()()),e&2&&(Jb(),iD(`locale`,n.language),Jb(4),$f(`Chosen: `,n.language()))},dependencies:[nu,qF,NE],encapsulation:2})};var _={en:{common:{court:`Superior Court of California`,county:`County of Santa Clara`}},es:{common:{court:`Tribunal Superior de California`,county:`Condado de Santa Clara`}},"zh-Hant":{common:{court:`加州高等法院`,county:`聖塔克拉拉郡`}},vi:{common:{court:`Tòa Thượng thẩm California`,county:`Quận Santa Clara`}},ko:{common:{court:`캘리포니아주 고등법원`,county:`샌타클래라 카운티`}},tl:{common:{court:`Superior Court ng California`,county:`County ng Santa Clara`}}};var k=class s{i18n=g(Zn);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-language-switcher-header-demo`]],features:[nM([T4e({messages:_,detect:[],storageKey:null})])],decls:9,vars:7,consts:[[1,`flex`,`items-center`,`justify-between`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`,`py-2`],[1,`leading-tight`],[1,`font-semibold`],[1,`text-sm`,`text-base-content/80`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`div`,2),G_(3),uM(4,`scscT`),Lf(),Ga(5,`div`,3),G_(6),uM(7,`scscT`),Lf()(),uc(8,`scsc-language-switcher`),Lf()),e&2&&(cc(`lang`,n.i18n.locale()),Jb(3),nD(dM(4,3,`court`)),Jb(3),nD(dM(7,5,`county`)))},dependencies:[qF,PF],encapsulation:2})};var j={en:{common:{hint:`Notices and reminders are sent in this language.`}},es:{common:{hint:`Los avisos y recordatorios se envían en este idioma.`}},"zh-Hant":{common:{hint:`通知和提醒會以此語言寄送。`}},vi:{common:{hint:`Thông báo và lời nhắc được gửi bằng ngôn ngữ này.`}},ko:{common:{hint:`알림과 안내는 이 언어로 발송됩니다.`}},tl:{common:{hint:`Ipinapadala ang mga abiso at paalala sa wikang ito.`}}};var D=class s{i18n=g(Zn);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-language-switcher-select-demo`]],features:[nM([T4e({messages:j,detect:[],storageKey:null})])],decls:5,vars:4,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-2`],[`variant`,`select`,`applyButton`,``],[`size`,`sm`,`tone`,`muted`]],template:function(e,n){e&1&&(Ga(0,`div`,0),uc(1,`scsc-language-switcher`,1),Ga(2,`scsc-text`,2),G_(3),uM(4,`scscT`),Lf()()),e&2&&(cc(`lang`,n.i18n.locale()),Jb(3),nD(dM(4,2,`hint`)))},dependencies:[qF,NE,PF],encapsulation:2})};var T=class s{current=q(`en`);url=q(`/en/case-search`);hrefFor=a=>`/${a.toLowerCase()}/case-search`;navigate(a){this.url.set(this.hrefFor(a)),this.current.set(a)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-language-switcher-url-routing-demo`]],decls:6,vars:3,consts:[[1,`flex`,`flex-col`,`gap-3`],[`mode`,`emit`,3,`languageChange`,`locale`,`hrefFor`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[1,`tnum`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-language-switcher`,1),lc(`languageChange`,function(h){return n.navigate(h)}),Lf(),Ga(2,`scsc-text`,2),G_(3,` URL: `),Ga(4,`code`,3),G_(5),Lf()()()),e&2&&(Jb(),Pv(`locale`,n.current())(`hrefFor`,n.hrefFor),Jb(4),nD(n.url()))},dependencies:[qF,NE],encapsulation:2})};var w={"language-switcher-footer":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscLanguageSwitcher, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-language-switcher-footer-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscLanguageSwitcher, ScscText],
  template: \`
    <div class="flex flex-col gap-3 border-t border-base-300 pt-4">
      <!-- No ScscI18n: the list only emits; [(locale)] marks the current language. -->
      <scsc-language-switcher
        variant="list"
        [(locale)]="language"
        disclaimer="Pages in languages other than English are machine-translated for convenience. The English version is the official one."
      >
        <a slot="disclaimer" routerLink="." class="ms-1 link"> Read the translation policy </a>
      </scsc-language-switcher>
      <scsc-text size="sm" tone="muted" role="status">Chosen: {{ language() }}</scsc-text>
    </div>
  \`,
})
export class LanguageSwitcherFooterDemo {
  protected readonly language = signal<string | null>('en');
}
`,html:`<div class="flex flex-col gap-3 border-t border-base-300 pt-4">
  <!-- No ScscI18n: the list only emits; [(locale)] marks the current language. -->
  <scsc-language-switcher
    variant="list"
    [(locale)]="language"
    disclaimer="Pages in languages other than English are machine-translated for convenience. The English version is the official one."
  >
    <a slot="disclaimer" routerLink="." class="ms-1 link"> Read the translation policy </a>
  </scsc-language-switcher>
  <scsc-text size="sm" tone="muted" role="status">Chosen: {{ language() }}</scsc-text>
</div>
`},"language-switcher-header":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScscI18n,
  ScscLanguageSwitcher,
  ScscTranslatePipe,
  scscI18nProviders,
} from '@scscourt/design';

// Machine-drafted demo strings.
const MESSAGES = {
  en: { common: { court: 'Superior Court of California', county: 'County of Santa Clara' } },
  es: { common: { court: 'Tribunal Superior de California', county: 'Condado de Santa Clara' } },
  'zh-Hant': { common: { court: '\u52A0\u5DDE\u9AD8\u7B49\u6CD5\u9662', county: '\u8056\u5854\u514B\u62C9\u62C9\u90E1' } },
  vi: { common: { court: 'T\xF2a Th\u01B0\u1EE3ng th\u1EA9m California', county: 'Qu\u1EADn Santa Clara' } },
  ko: { common: { court: '\uCE98\uB9AC\uD3EC\uB2C8\uC544\uC8FC \uACE0\uB4F1\uBC95\uC6D0', county: '\uC0CC\uD0C0\uD074\uB798\uB77C \uCE74\uC6B4\uD2F0' } },
  tl: { common: { court: 'Superior Court ng California', county: 'County ng Santa Clara' } },
};

@Component({
  selector: 'app-language-switcher-header-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLanguageSwitcher, ScscTranslatePipe],
  // Scoped so the demo does not switch the docs site; apps use provideScscI18n().
  providers: [scscI18nProviders({ messages: MESSAGES, detect: [], storageKey: null })],
  template: \`
    <div
      class="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-2"
      [attr.lang]="i18n.locale()"
    >
      <div class="leading-tight">
        <div class="font-semibold">{{ 'court' | scscT }}</div>
        <div class="text-sm text-base-content/80">{{ 'county' | scscT }}</div>
      </div>
      <!-- Globe + the current language's own name; the menu lists every language in itself. -->
      <scsc-language-switcher />
    </div>
  \`,
})
export class LanguageSwitcherHeaderDemo {
  protected readonly i18n = inject(ScscI18n);
}
`,html:`<div
  class="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-2"
  [attr.lang]="i18n.locale()"
>
  <div class="leading-tight">
    <div class="font-semibold">{{ 'court' | scscT }}</div>
    <div class="text-sm text-base-content/80">{{ 'county' | scscT }}</div>
  </div>
  <!-- Globe + the current language's own name; the menu lists every language in itself. -->
  <scsc-language-switcher />
</div>
`},"language-switcher-select":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScscI18n,
  ScscLanguageSwitcher,
  ScscText,
  ScscTranslatePipe,
  scscI18nProviders,
} from '@scscourt/design';

// Machine-drafted demo strings.
const MESSAGES = {
  en: { common: { hint: 'Notices and reminders are sent in this language.' } },
  es: { common: { hint: 'Los avisos y recordatorios se env\xEDan en este idioma.' } },
  'zh-Hant': { common: { hint: '\u901A\u77E5\u548C\u63D0\u9192\u6703\u4EE5\u6B64\u8A9E\u8A00\u5BC4\u9001\u3002' } },
  vi: { common: { hint: 'Th\xF4ng b\xE1o v\xE0 l\u1EDDi nh\u1EAFc \u0111\u01B0\u1EE3c g\u1EEDi b\u1EB1ng ng\xF4n ng\u1EEF n\xE0y.' } },
  ko: { common: { hint: '\uC54C\uB9BC\uACFC \uC548\uB0B4\uB294 \uC774 \uC5B8\uC5B4\uB85C \uBC1C\uC1A1\uB429\uB2C8\uB2E4.' } },
  tl: { common: { hint: 'Ipinapadala ang mga abiso at paalala sa wikang ito.' } },
};

@Component({
  selector: 'app-language-switcher-select-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLanguageSwitcher, ScscText, ScscTranslatePipe],
  providers: [scscI18nProviders({ messages: MESSAGES, detect: [], storageKey: null })],
  template: \`
    <div class="flex max-w-sm flex-col gap-2" [attr.lang]="i18n.locale()">
      <!-- Apply keeps arrowing through the closed select from switching on every step. -->
      <scsc-language-switcher variant="select" applyButton />
      <scsc-text size="sm" tone="muted">{{ 'hint' | scscT }}</scsc-text>
    </div>
  \`,
})
export class LanguageSwitcherSelectDemo {
  protected readonly i18n = inject(ScscI18n);
}
`,html:`<div class="flex max-w-sm flex-col gap-2" [attr.lang]="i18n.locale()">
  <!-- Apply keeps arrowing through the closed select from switching on every step. -->
  <scsc-language-switcher variant="select" applyButton />
  <scsc-text size="sm" tone="muted">{{ 'hint' | scscT }}</scsc-text>
</div>
`},"language-switcher-url-routing":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscLanguageSwitcher, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-language-switcher-url-routing-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLanguageSwitcher, ScscText],
  template: \`
    <div class="flex flex-col gap-3">
      <!--
        URL-routed sites (/en/\u2026, /es/\u2026): the choices are real links with hreflang, so
        Ctrl/\u2318-click opens a new tab. A plain click emits instead; route there yourself:
        (languageChange)="router.navigateByUrl(hrefFor($event))".
      -->
      <scsc-language-switcher
        mode="emit"
        [locale]="current()"
        [hrefFor]="hrefFor"
        (languageChange)="navigate($event)"
      />
      <scsc-text size="sm" tone="muted" role="status">
        URL: <code class="tnum">{{ url() }}</code>
      </scsc-text>
    </div>
  \`,
})
export class LanguageSwitcherUrlRoutingDemo {
  protected readonly current = signal('en');
  protected readonly url = signal('/en/case-search');
  protected readonly hrefFor = (tag: string): string => \`/\${tag.toLowerCase()}/case-search\`;

  protected navigate(tag: string): void {
    // In an app: this.router.navigateByUrl(this.hrefFor(tag)); the route sets the language.
    this.url.set(this.hrefFor(tag));
    this.current.set(tag);
  }
}
`,html:`<div class="flex flex-col gap-3">
  <!--
    URL-routed sites (/en/\u2026, /es/\u2026): the choices are real links with hreflang, so
    Ctrl/\u2318-click opens a new tab. A plain click emits instead; route there yourself:
    (languageChange)="router.navigateByUrl(hrefFor($event))".
  -->
  <scsc-language-switcher
    mode="emit"
    [locale]="current()"
    [hrefFor]="hrefFor"
    (languageChange)="navigate($event)"
  />
  <scsc-text size="sm" tone="muted" role="status">
    URL: <code class="tnum">{{ url() }}</code>
  </scsc-text>
</div>
`}};var me={slug:`language-switcher`,name:`Language switcher`,classes:[`ScscLanguageSwitcher`],category:`Navigation`,whenToUse:["Every public-facing court site: put it in the same place on every page. `menu` in the header (globe and the current language), `list` in the footer the way court sites list their languages, `select` on a settings or profile page.",`Languages are always shown by their own names (English, Español, 中文 (繁體), Tiếng Việt, 한국어, Tagalog), never translated into the current language: people look for their own language’s name, in its own script.`,'With `provideScscI18n()` it switches the language itself (`mode="auto"`) and always emits `languageChange`. Without the service, pass `locales` and bind `[(locale)]`: it only emits, for apps with their own language state.','URL-routed sites (`/en/…`, `/es/…`, like the previous Court Access Portal): `mode="emit"` with `hrefFor`. The choices become real links with `hreflang`; a plain click emits so you can route with the router, and Ctrl/⌘ or middle click opens a new tab.',"If the translation is machine-generated, say so: the `disclaimer` input, or `[slot=disclaimer]` for rich content such as a link to the translation policy.","`select` switches as soon as the value changes. Where that would reload or navigate (every arrow key press on a closed select changes the value in some browsers), add `applyButton` (WCAG 3.2.2)."],setup:`// With runtime i18n (the switcher calls setLocale itself)
provideScscI18n({ loader: (locale, ns) => inject(HttpClient).get(\`/i18n/\${locale}/\${ns}.json\`) })

// Icons the switcher draws
import { Check, ChevronDown, Globe } from 'lucide-angular';
provideScscIcons({ Check, ChevronDown, Globe });   // or provideScscIcons(SCSC_ICONS)`,demos:[{id:`language-switcher-header`,title:`Header menu`,description:"The globe button shows the current language’s own name and opens a menu of every language, each marked with its `lang`. Arrow keys, Home/End and type-ahead (by the language’s own or English name: “k” for 한국어) move through it. The change is announced in the new language.",component:k,source:w[`language-switcher-header`]},{id:`language-switcher-footer`,title:`Footer list with a machine-translation notice`,description:"Without `ScscI18n`: `[(locale)]` marks the current language (`aria-current`) and the list only emits. The disclaimer text and the projected link describe the list.",component:L,source:w[`language-switcher-footer`]},{id:`language-switcher-select`,title:`Settings select with Apply`,description:"A labelled native select whose label is “Language” in the current language. `applyButton` switches only when Apply is pressed.",component:D,source:w[`language-switcher-select`]},{id:`language-switcher-url-routing`,title:`URL-routed site (emit only)`,description:'`mode="emit"` with `hrefFor`: the choices are links to `/es/case-search` and so on, with `hreflang`. A plain click emits `languageChange` instead of navigating; the handler routes (here it only updates the URL shown).',component:T,source:w[`language-switcher-url-routing`]}],keyboard:[{keys:`Enter / Space / ArrowDown`,action:"`menu`: on the button, opens the menu and moves focus to the first language."},{keys:`ArrowUp`,action:"`menu`: on the button, opens the menu on the last language."},{keys:`ArrowDown / ArrowUp`,action:`In the open menu: moves to the next / previous language, wrapping at the ends.`},{keys:`Home / End`,action:`In the open menu: moves to the first / last language.`},{keys:`Type a character`,action:`In the open menu: moves to the next language whose own or English name starts with it (“s” for Español, “k” for 한국어).`},{keys:`Enter / Space`,action:"In the open menu: switches to the focused language, closes the menu and returns focus to the button. On a `list` item: switches, and focus stays on it."},{keys:`Escape`,action:`Closes the menu and returns focus to the button.`},{keys:`Tab`,action:`Leaves the open menu and closes it.`},{keys:`ArrowDown / ArrowUp`,action:"`select`: the browser’s own select keys. Without `applyButton`, the language switches when the value changes."}],aria:['`menu`: the WAI-ARIA menu button pattern. The button has `aria-haspopup="menu"`, `aria-expanded` and `aria-controls`; its name is “Language: English” (the visible text is part of it, WCAG 2.5.3). The menu is `role="menu"`, labelled by the button; each language is a `menuitemradio` with `aria-checked`, reached with the arrow keys (`tabindex="-1"`).','`list`: a `role="group"` (or `navigation` when the items are links) named “Language” in the current language; the current language has `aria-current="true"` and is shown in bold, not underlined, so it is not told apart by colour alone.',"`select`: a native `<select>` with a visible `<label>` (or a screen-reader-only one with `hideLabel`).","Every language name carries its own `lang` (and links their `hreflang`), so screen readers pronounce “Español” and “한국어” correctly (WCAG 3.1.2). The disclaimer is the menu’s, group’s or select’s description (`aria-describedby`).",'After a switch, `ScscAnnouncer` says “Idioma cambiado a español”, “언어가 한국어로 변경되었습니다”… politely, in the new language. `announce="false"` turns it off, for example when the route change announces the new page.'],appMustProvide:[`The same placement on every page (WCAG 3.2.3 Consistent Navigation).`,'Routing for `mode="emit"` with `hrefFor`: handle `languageChange` (`router.navigateByUrl(hrefFor(tag))`).',"A reviewed `disclaimer` when pages are machine-translated, and reviewed `label` / `announcement` overrides for languages beyond the built-in ones. The built-in “Language” words and announcements were machine-drafted too."],a11y:[`Opens on click, Enter, Space or the arrow keys, never on focus or hover. Focus returns to the button after choosing or Escape.`,`The button, menu items and list items are at least 24 px high (WCAG 2.5.8); the theme draws the focus ring on every item.`,"Language names never change with the current language, so the menu and list keep their order and width when you switch; only the check mark and `aria-current` move.",`The menu slides in with the motion tokens and only fades under reduced motion. It opens at the end edge, so it mirrors in right-to-left pages.`],related:[`i18n`,`formatting`,`navbar`,`footer`]};export{me as LANGUAGE_SWITCHER_DOCS};