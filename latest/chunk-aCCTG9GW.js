import{Fr as kn,Go as g,Hs as y_,Lo as d_,Mr as jn,Ms as uc,Na as Jb,No as cc,Xa as Pv,Zn as bA,Zo as i_,_s as o_,cs as lc,d as AE,ds as nD,fr as fi,ha as Eg,ka as Ig,kt as NE,pi as sn,ra as Af,ta as $f,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var B=(a,o)=>o.value;function L(a,o){if(a&1){let e=d_();Ga(0,`label`,3)(1,`span`,4)(2,`input`,5),lc(`change`,function(){let p=Eg(e).$implicit,k=y_();return Ig(k.theme.setTheme(p.value))}),Lf(),G_(3),Lf(),Ga(4,`span`,6)(5,`scsc-text`,7),G_(6,`Alvarez v. Pacific Transit`),Lf(),Ga(7,`scsc-text`,8),G_(8,`24CV012345 · Dept. 6`),Lf(),Ga(9,`scsc-badge`,9),G_(10,`Filed`),Lf()()()}if(a&2){let e=o.$implicit,i=y_();cc(`data-theme`,e.value),Jb(2),Pv(`value`,e.value)(`checked`,i.theme.theme()===e.value),Jb(),$f(` `,e.label,` `)}}var w=class a{theme=g(fi);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-theme-scoped-demo`]],decls:6,vars:0,consts:[[1,`max-w-2xl`],[1,`mb-3`,`text-sm`,`font-medium`],[1,`grid`,`gap-3`,`sm:grid-cols-3`],[1,`flex`,`cursor-pointer`,`flex-col`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`,`text-base-content`],[1,`flex`,`items-center`,`gap-2`,`text-sm`,`font-medium`],[`type`,`radio`,`scsc-radio`,``,`name`,`theme-scoped-appearance`,3,`change`,`value`,`checked`],[`aria-hidden`,`true`,1,`flex`,`flex-col`,`items-start`,`gap-1`,`rounded-field`,`border`,`border-base-300`,`bg-base-200`,`p-3`],[`size`,`sm`,`tone`,`primary`,`bold`,``],[`size`,`xs`,`tone`,`muted`,`tnum`,``],[`tone`,`success`,`size`,`sm`,`soft`,``]],template:function(e,i){e&1&&(Ga(0,`fieldset`,0)(1,`legend`,1),G_(2,`Appearance`),Lf(),Ga(3,`div`,2),o_(4,L,11,4,`label`,3,B),Lf()()),e&2&&(Jb(4),i_(i.theme.themes))},dependencies:[jn,bA,NE],encapsulation:2})};var N=(a,o)=>o.value;function O(a,o){if(a&1){let e=d_();Ga(0,`scsc-button`,9),lc(`click`,function(){let p=Eg(e).$implicit,k=y_();return Ig(k.theme.setTheme(p.value))}),G_(1),Lf()}if(a&2){let e=o.$implicit,i=y_();Pv(`outline`,i.theme.theme()!==e.value),cc(`aria-pressed`,i.theme.theme()===e.value),Jb(),$f(` `,e.label,` `)}}var D=class a{theme=g(fi);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-theme-service-demo`]],decls:26,vars:7,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[1,`grid`,`grid-cols-[auto_1fr]`,`gap-x-4`,`gap-y-1`],[`size`,`sm`,`tone`,`muted`],[`size`,`sm`,`bold`,``],[3,`level`,`visualLevel`],[1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,`variant`,`primary`,3,`outline`],[`size`,`sm`,`variant`,`ghost`,3,`click`],[`size`,`sm`,`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`variant`,`primary`,3,`click`,`outline`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`dl`,1)(2,`dt`)(3,`scsc-text`,2),G_(4,`Theme`),Lf()(),Ga(5,`dd`)(6,`scsc-text`,3),G_(7),Lf()(),Ga(8,`dt`)(9,`scsc-text`,2),G_(10,`Density`),Lf()(),Ga(11,`dd`)(12,`scsc-text`,3),G_(13),Lf()()(),Ga(14,`scsc-heading`,4),G_(15,`Theme`),Lf(),Ga(16,`div`,5),o_(17,O,2,3,`scsc-button`,6,N),Ga(19,`scsc-button`,7),lc(`click`,function(){return i.theme.toggleDark()}),G_(20,`Toggle dark`),Lf()(),Ga(21,`scsc-heading`,4),G_(22,`Density`),Lf(),Ga(23,`div`,5)(24,`scsc-button`,8),lc(`click`,function(){return i.theme.toggleDensity()}),G_(25),Lf()()()),e&2&&(Jb(7),nD(i.theme.theme()),Jb(6),nD(i.theme.density()),Jb(),Pv(`level`,3)(`visualLevel`,6),Jb(3),i_(i.theme.themes),Jb(4),Pv(`level`,3)(`visualLevel`,6),Jb(4),$f(` Switch to `,i.theme.density()===`compact`?`comfortable`:`compact`,` `))},dependencies:[sn,kn,NE],encapsulation:2})};var _=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-theme-switcher-demo`]],decls:9,vars:1,consts:[[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`items-center`,`gap-3`],[`size`,`sm`,`tone`,`muted`],[3,`showDensity`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-theme-switcher`),Ga(3,`scsc-text`,2),G_(4,`Theme and density`),Lf()(),Ga(5,`div`,1),uc(6,`scsc-theme-switcher`,3),Ga(7,`scsc-text`,2),G_(8,`Theme only`),Lf()()()),e&2&&(Jb(6),Pv(`showDensity`,!1))},dependencies:[NE,AE],encapsulation:2})};var C={"theme-scoped":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScscBadge, ScscRadio, ScscText, ScscThemeService } from '@scscourt/design';

@Component({
  selector: 'app-theme-scoped-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscRadio, ScscText],
  template: \`
    <!-- A settings-page picker: each tile sets data-theme, which themes only that subtree. -->
    <fieldset class="max-w-2xl">
      <legend class="mb-3 text-sm font-medium">Appearance</legend>
      <div class="grid gap-3 sm:grid-cols-3">
        @for (t of theme.themes; track t.value) {
          <label
            [attr.data-theme]="t.value"
            class="flex cursor-pointer flex-col gap-3 rounded-box border border-base-300 bg-base-100 p-4 text-base-content"
          >
            <span class="flex items-center gap-2 text-sm font-medium">
              <input
                type="radio"
                scsc-radio
                name="theme-scoped-appearance"
                [value]="t.value"
                [checked]="theme.theme() === t.value"
                (change)="theme.setTheme(t.value)"
              />
              {{ t.label }}
            </span>
            <!-- A miniature of real UI in the tile's theme; hidden so the radio's name stays short. -->
            <span
              class="flex flex-col items-start gap-1 rounded-field border border-base-300 bg-base-200 p-3"
              aria-hidden="true"
            >
              <scsc-text size="sm" tone="primary" bold>Alvarez v. Pacific Transit</scsc-text>
              <scsc-text size="xs" tone="muted" tnum>24CV012345 \xB7 Dept. 6</scsc-text>
              <scsc-badge tone="success" size="sm" soft>Filed</scsc-badge>
            </span>
          </label>
        }
      </div>
    </fieldset>
  \`,
})
export class ThemeScopedDemo {
  protected readonly theme = inject(ScscThemeService);
}
`,html:`<!-- A settings-page picker: each tile sets data-theme, which themes only that subtree. -->
<fieldset class="max-w-2xl">
  <legend class="mb-3 text-sm font-medium">Appearance</legend>
  <div class="grid gap-3 sm:grid-cols-3">
    @for (t of theme.themes; track t.value) {
      <label
        [attr.data-theme]="t.value"
        class="flex cursor-pointer flex-col gap-3 rounded-box border border-base-300 bg-base-100 p-4 text-base-content"
      >
        <span class="flex items-center gap-2 text-sm font-medium">
          <input
            type="radio"
            scsc-radio
            name="theme-scoped-appearance"
            [value]="t.value"
            [checked]="theme.theme() === t.value"
            (change)="theme.setTheme(t.value)"
          />
          {{ t.label }}
        </span>
        <!-- A miniature of real UI in the tile's theme; hidden so the radio's name stays short. -->
        <span
          class="flex flex-col items-start gap-1 rounded-field border border-base-300 bg-base-200 p-3"
          aria-hidden="true"
        >
          <scsc-text size="sm" tone="primary" bold>Alvarez v. Pacific Transit</scsc-text>
          <scsc-text size="xs" tone="muted" tnum>24CV012345 \xB7 Dept. 6</scsc-text>
          <scsc-badge tone="success" size="sm" soft>Filed</scsc-badge>
        </span>
      </label>
    }
  </div>
</fieldset>
`},"theme-service":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScscButton, ScscHeading, ScscText, ScscThemeService } from '@scscourt/design';

@Component({
  selector: 'app-theme-service-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHeading, ScscText],
  template: \`
    <div class="flex max-w-md flex-col gap-4">
      <!-- Signals: read them anywhere for theme-aware logic (chart palettes, images, \u2026). -->
      <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
        <dt><scsc-text size="sm" tone="muted">Theme</scsc-text></dt>
        <dd>
          <scsc-text size="sm" bold>{{ theme.theme() }}</scsc-text>
        </dd>
        <dt><scsc-text size="sm" tone="muted">Density</scsc-text></dt>
        <dd>
          <scsc-text size="sm" bold>{{ theme.density() }}</scsc-text>
        </dd>
      </dl>

      <scsc-heading [level]="3" [visualLevel]="6">Theme</scsc-heading>
      <div class="flex flex-wrap gap-2">
        @for (t of theme.themes; track t.value) {
          <scsc-button
            size="sm"
            variant="primary"
            [outline]="theme.theme() !== t.value"
            [attr.aria-pressed]="theme.theme() === t.value"
            (click)="theme.setTheme(t.value)"
          >
            {{ t.label }}
          </scsc-button>
        }
        <scsc-button size="sm" variant="ghost" (click)="theme.toggleDark()"
          >Toggle dark</scsc-button
        >
      </div>

      <scsc-heading [level]="3" [visualLevel]="6">Density</scsc-heading>
      <div class="flex flex-wrap gap-2">
        <scsc-button size="sm" variant="secondary" outline (click)="theme.toggleDensity()">
          Switch to {{ theme.density() === 'compact' ? 'comfortable' : 'compact' }}
        </scsc-button>
      </div>
    </div>
  \`,
})
export class ThemeServiceDemo {
  protected readonly theme = inject(ScscThemeService);
}
`,html:`<div class="flex max-w-md flex-col gap-4">
  <!-- Signals: read them anywhere for theme-aware logic (chart palettes, images, \u2026). -->
  <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
    <dt><scsc-text size="sm" tone="muted">Theme</scsc-text></dt>
    <dd>
      <scsc-text size="sm" bold>{{ theme.theme() }}</scsc-text>
    </dd>
    <dt><scsc-text size="sm" tone="muted">Density</scsc-text></dt>
    <dd>
      <scsc-text size="sm" bold>{{ theme.density() }}</scsc-text>
    </dd>
  </dl>

  <scsc-heading [level]="3" [visualLevel]="6">Theme</scsc-heading>
  <div class="flex flex-wrap gap-2">
    @for (t of theme.themes; track t.value) {
      <scsc-button
        size="sm"
        variant="primary"
        [outline]="theme.theme() !== t.value"
        [attr.aria-pressed]="theme.theme() === t.value"
        (click)="theme.setTheme(t.value)"
      >
        {{ t.label }}
      </scsc-button>
    }
    <scsc-button size="sm" variant="ghost" (click)="theme.toggleDark()"
      >Toggle dark</scsc-button
    >
  </div>

  <scsc-heading [level]="3" [visualLevel]="6">Density</scsc-heading>
  <div class="flex flex-wrap gap-2">
    <scsc-button size="sm" variant="secondary" outline (click)="theme.toggleDensity()">
      Switch to {{ theme.density() === 'compact' ? 'comfortable' : 'compact' }}
    </scsc-button>
  </div>
</div>
`},"theme-switcher":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscText, ScscThemeSwitcher } from '@scscourt/design';

@Component({
  selector: 'app-theme-switcher-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText, ScscThemeSwitcher],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <scsc-theme-switcher />
        <scsc-text size="sm" tone="muted">Theme and density</scsc-text>
      </div>
      <div class="flex items-center gap-3">
        <scsc-theme-switcher [showDensity]="false" />
        <scsc-text size="sm" tone="muted">Theme only</scsc-text>
      </div>
    </div>
  \`,
})
export class ThemeSwitcherDemo {}
`,html:`<div class="flex flex-col gap-4">
  <div class="flex items-center gap-3">
    <scsc-theme-switcher />
    <scsc-text size="sm" tone="muted">Theme and density</scsc-text>
  </div>
  <div class="flex items-center gap-3">
    <scsc-theme-switcher [showDensity]="false" />
    <scsc-text size="sm" tone="muted">Theme only</scsc-text>
  </div>
</div>
`}};var ae={slug:`theme`,name:`Theme`,classes:[`ScscThemeService`,`ScscThemeSwitcher`],category:`Primitives`,summary:"Runtime control of the three SCSC themes (light, dark, high contrast) and two densities. `ScscThemeService` sets `data-theme` / `data-density` on `<html>` and remembers the choice in `localStorage`; `scsc-theme-switcher` is the ready-made control for a masthead or utility bar.",whenToUse:["Every app registers `provideScscTheme()` once so the persisted theme is applied before first paint; that is all most apps need.",'Drop `scsc-theme-switcher` into the masthead or utility bar to let users pick a theme; pass `[showDensity]="false"` for public sites where density is not a user choice.',"Inject `ScscThemeService` when your own code must react to the theme (chart palettes, map tiles, embedded PDFs) or set it from a settings page.","To theme one region differently, set `data-theme` on that element instead (the service only touches `<html>`). Every descendant, including `scsc-*` components, follows it."],setup:`// app.config.ts \u2014 apply the persisted (or default) theme and density before first paint
import { provideScscTheme } from '@scscourt/design';

export const appConfig: ApplicationConfig = {
  providers: [provideScscTheme({ theme: 'scsc-design', density: 'comfortable' })],
};

// styles.css \u2014 the three themes are defined by the design package
@import '@scscourt/design/styles';`,demos:[{id:`theme-switcher`,title:`Theme switcher`,description:`The stock control, with and without the density toggle. Changes apply to this whole page.`,component:_,source:C[`theme-switcher`]},{id:`theme-service`,title:`Using the service`,description:"Read `theme()` / `density()` as signals and call `setTheme`, `toggleDark`, `toggleDensity` from your own UI.",component:D,source:C[`theme-service`]},{id:`theme-scoped`,title:`Appearance settings`,description:"A radio group for a settings page. Each tile sets `data-theme` on itself, so it previews its own theme whatever the page uses.",component:w,source:C[`theme-scoped`]}],a11y:["The high-contrast theme (`scsc-design-contrast`) exists for users who need it; expose the switcher or honour a settings page rather than hard-coding a theme.",'The switcher button is icon-only and carries `aria-label="Theme"` and `aria-expanded`. It is a disclosure button: the panel opens on click, Enter or Space, never on focus alone, and Escape, tabbing out or a click outside closes it (WCAG 1.4.13). Choosing an option closes the panel and returns focus to the button.',"The active theme is marked with `aria-pressed` as well as the check icon. A settings page with a real radio group (see the demo) is still the clearer way to offer the choice.",`Density changes spacing only, never font size below the body minimum, so compact mode stays readable.`],keyboard:[{keys:`Enter / Space`,action:`On the theme button: opens or closes the panel; focus stays on the button.`},{keys:`Tab / Shift + Tab (panel open)`,action:`Through each theme, then the density toggle; moving focus out of the button and panel closes it.`},{keys:`Enter / Space (in the panel)`,action:`Applies the theme or toggles density, closes the panel and returns focus to the button.`},{keys:`Escape`,action:`Closes the panel and returns focus to the button.`}],appMustProvide:[`A way for users to change theme and density (the switcher or a settings page). Never hard-code a theme: some users need high contrast.`],related:[`masthead`,`navbar`,`directives`,`radio`]};export{ae as THEME_DOCS};