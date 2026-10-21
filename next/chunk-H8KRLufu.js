import{Bt as PE,Fr as kn,Ki as ye,Ms as uc,Na as Jb,Xa as Pv,ms as nu,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{t as _}from"./chunk-eNj8AoX-.js";import{t as D}from"./chunk-CuyuIRg4.js";var S=class r{pick=`// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideScscIcons } from '@scscourt/design';
import { Calendar, Gavel, Search } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideScscIcons({ Calendar, Gavel, Search })],
};`;all=`import * as icons from 'lucide-angular';

provideScscIcons(icons as unknown as Record<string, unknown>);`;preset=`// app.config.ts
import { provideScscIcons, SCSC_ICONS } from '@scscourt/design';

export const appConfig: ApplicationConfig = {
  providers: [provideScscIcons(SCSC_ICONS)],
};`;usage=`<!-- decorative (aria-hidden); a semantic alias or a raw Lucide name -->
<scsc-icon name="court.calendar" />
<scsc-icon name="calendar" />

<!-- meaningful: announced as "Hearing" -->
<scsc-icon name="gavel" label="Hearing" />

<!-- sizes: xs 14px \xB7 sm 16px \xB7 md 20px (default) \xB7 lg 24px -->
<scsc-icon name="search" size="lg" class="text-primary" />`;static ɵfac=function(s){return new(s||r)};static ɵcmp=Af({type:r,selectors:[[`app-icons-setup-page`]],decls:45,vars:7,consts:[[`title`,`Icons`,`eyebrow`,`Getting started`],[1,`mb-10`],[1,`mb-2`,3,`level`],[1,`mb-3`],[`language`,`typescript`,1,`mb-3`,3,`code`],[`language`,`typescript`,3,`code`],[`language`,`typescript`,1,`mt-3`,3,`code`],[1,`mb-3`,`flex`,`items-center`,`gap-4`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[`name`,`calendar`],[`name`,`gavel`,`label`,`Hearing`],[`name`,`search`,`size`,`lg`,1,`text-primary`],[`language`,`html`,3,`code`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`routerLink`,`/docs/foundations/icons`,1,`link`,`link-primary`],[`routerLink`,`/docs/components/icon-gallery`,1,`link`,`link-primary`],[1,`text-sm`],[`routerLink`,`/docs/getting-started/theme`,1,`link`,`link-primary`]],template:function(s,c){s&1&&(Ga(0,`app-docs-page-header`,0),G_(1,` The library renders icons from the Lucide set. Register the icons your app uses once, at bootstrap, and every component that shows an icon will find them. `),Lf(),Ga(2,`section`,1)(3,`scsc-heading`,2),G_(4,`Register icons`),Lf(),Ga(5,`scsc-prose`,3)(6,`p`),G_(7,` Pass the icon objects you need to `),Ga(8,`code`),G_(9,`provideScscIcons()`),Lf(),G_(10,`. Only what you import is bundled. `),Lf()(),uc(11,`app-docs-code`,4),Ga(12,`scsc-prose`,3)(13,`p`),G_(14,`For prototypes, register the whole set and tree-shake later:`),Lf()(),uc(15,`app-docs-code`,5),Lf(),Ga(16,`section`,1)(17,`scsc-heading`,2),G_(18,`Register the curated set in one call`),Lf(),Ga(19,`scsc-prose`)(20,`p`)(21,`code`),G_(22,`SCSC_ICONS`),Lf(),G_(23,` holds every glyph behind the semantic aliases, every icon the library components render, and the court glyphs Lucide lacks (about 11 kB gzipped). Register it and you will never see an empty icon slot. Picking icons one by one, as above, still works; pass several records to combine both. `),Lf()(),uc(24,`app-docs-code`,6),Lf(),Ga(25,`section`,1)(26,`scsc-heading`,2),G_(27,`Use an icon`),Lf(),Ga(28,`div`,7),uc(29,`scsc-icon`,8)(30,`scsc-icon`,9)(31,`scsc-icon`,10),Lf(),uc(32,`app-docs-code`,11),Ga(33,`p`,12),G_(34,` Sizes, decorative vs. labelled icons, and court vocabulary: `),Ga(35,`a`,13),G_(36,`Foundations → Icons`),Lf(),G_(37,`. Every alias and the full Lucide set: `),Ga(38,`a`,14),G_(39,`icon gallery`),Lf(),G_(40,`. `),Lf()(),Ga(41,`p`,15),G_(42,` Next: `),Ga(43,`a`,16),G_(44,`theme & density →`),Lf()()),s&2&&(Jb(3),Pv(`level`,2),Jb(8),Pv(`code`,c.pick),Jb(4),Pv(`code`,c.all),Jb(2),Pv(`level`,2),Jb(7),Pv(`code`,c.preset),Jb(2),Pv(`level`,2),Jb(6),Pv(`code`,c.usage))},dependencies:[nu,kn,ye,PE,_,D],encapsulation:2})};export{S as IconsSetupPage};