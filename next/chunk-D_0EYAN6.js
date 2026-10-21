import{Bt as PE,Fr as kn,Ms as uc,Na as Jb,Xa as Pv,d as AE,ms as nu,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{t as _}from"./chunk-eNj8AoX-.js";import{t as D}from"./chunk-CuyuIRg4.js";var u=class o{provide=`// app.config.ts
import { provideScscTheme } from '@scscourt/design';

export const appConfig = {
  providers: [provideScscTheme({ theme: 'scsc-design', density: 'comfortable' })],
};`;switcher=`<!-- in a masthead or utility bar -->
<scsc-theme-switcher />
<scsc-theme-switcher [showDensity]="false" />`;service=`import { inject } from '@angular/core';
import { ScscThemeService } from '@scscourt/design';

export class SettingsPage {
  private readonly theme = inject(ScscThemeService);

  useDark() { this.theme.setTheme('scsc-design-dark'); }
  compact()  { this.theme.setDensity('compact'); }
  // signals for templates: theme.theme(), theme.density()
}`;attrs=`<html data-theme="scsc-design-dark" data-density="compact">
  <!-- a section can override the theme -->
  <aside data-theme="scsc-design-contrast">\u2026</aside>
</html>`;static ɵfac=function(a){return new(a||o)};static ɵcmp=Af({type:o,selectors:[[`app-theme-setup-page`]],decls:42,vars:7,consts:[[`title`,`Theme & density`,`eyebrow`,`Getting started`],[1,`mb-10`],[1,`mb-2`,3,`level`],[1,`mb-3`],[`language`,`typescript`,3,`code`],[1,`mb-3`,`flex`,`items-center`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[1,`text-sm`,`text-base-content/70`],[`language`,`html`,1,`mb-3`,3,`code`],[`language`,`html`,3,`code`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`routerLink`,`/docs/foundations/theming-density`,1,`link`,`link-primary`],[1,`text-sm`],[`routerLink`,`/docs/getting-started/first-component`,1,`link`,`link-primary`]],template:function(a,c){a&1&&(Ga(0,`app-docs-page-header`,0),G_(1,` Three themes (light, dark, high contrast) and two densities, switched at runtime by one service and persisted per user. `),Lf(),Ga(2,`section`,1)(3,`scsc-heading`,2),G_(4,`Provide the theme service`),Lf(),Ga(5,`scsc-prose`,3)(6,`p`)(7,`code`),G_(8,`provideScscTheme()`),Lf(),G_(9,` applies the persisted (or default) theme and density to `),Ga(10,`code`),G_(11,`<html>`),Lf(),G_(12,` before the first paint. `),Lf()(),uc(13,`app-docs-code`,4),Lf(),Ga(14,`section`,1)(15,`scsc-heading`,2),G_(16,`Let users switch`),Lf(),Ga(17,`div`,5)(18,`span`,6),G_(19,`Try it:`),Lf(),uc(20,`scsc-theme-switcher`),Lf(),uc(21,`app-docs-code`,7),Ga(22,`scsc-prose`,3)(23,`p`),G_(24,`Or drive it yourself from the service:`),Lf()(),uc(25,`app-docs-code`,4),Lf(),Ga(26,`section`,1)(27,`scsc-heading`,2),G_(28,`Without the service`),Lf(),Ga(29,`scsc-prose`,3)(30,`p`),G_(31,` The theme is plain CSS. Any element can carry a theme; density is a document attribute: `),Lf()(),uc(32,`app-docs-code`,8),Ga(33,`p`,9),G_(34,` What each theme and density changes: `),Ga(35,`a`,10),G_(36,`Foundations → Theming & density`),Lf(),G_(37,`. `),Lf()(),Ga(38,`p`,11),G_(39,` Next: `),Ga(40,`a`,12),G_(41,`your first screen →`),Lf()()),a&2&&(Jb(3),Pv(`level`,2),Jb(10),Pv(`code`,c.provide),Jb(2),Pv(`level`,2),Jb(6),Pv(`code`,c.switcher),Jb(4),Pv(`code`,c.service),Jb(2),Pv(`level`,2),Jb(5),Pv(`code`,c.attrs))},dependencies:[nu,kn,PE,AE,_,D],encapsulation:2})};export{u as ThemeSetupPage};