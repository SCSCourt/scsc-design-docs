import{Bt as PE,Fr as kn,Ms as uc,Na as Jb,Xa as Pv,ms as nu,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{t as _}from"./chunk-eNj8AoX-.js";import{t as D}from"./chunk-CuyuIRg4.js";import"./chunk-OgMGQ8t0.js";import{t as q}from"./chunk-D1STRscF.js";import{t as F}from"./chunk-B2bh_9hx.js";var y=class s{config=`// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideScscIcons, provideScscTheme } from '@scscourt/design';
import * as icons from 'lucide-angular';
import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideScscTheme({ theme: 'scsc-design', density: 'comfortable' }),
    provideScscIcons(icons as unknown as Record<string, unknown>),
  ],
});`;demo=F[0];static ɵfac=function(a){return new(a||s)};static ɵcmp=Af({type:s,selectors:[[`app-first-component-page`]],decls:40,vars:5,consts:[[`title`,`Your first screen`,`eyebrow`,`Getting started`],[1,`mb-10`],[1,`mb-2`,3,`level`],[`language`,`typescript`,3,`code`],[1,`mb-3`],[`slug`,`getting-started`,3,`demo`],[`routerLink`,`/docs/getting-started/schematics`],[`routerLink`,`/docs/components/shells`],[`routerLink`,`/docs/patterns/reference-apps`]],template:function(a,p){a&1&&(Ga(0,`app-docs-page-header`,0),G_(1,` A complete page in one component: the standard page shell, the court masthead, a card and a button. Copy it, replace the content, and you have a court application. `),Lf(),Ga(2,`section`,1)(3,`scsc-heading`,2),G_(4,`1. Bootstrap`),Lf(),uc(5,`app-docs-code`,3),Lf(),Ga(6,`section`,1)(7,`scsc-heading`,2),G_(8,`2. The page`),Lf(),Ga(9,`scsc-prose`,4)(10,`p`),G_(11,` Every screen follows the same shape: a shell that owns the chrome, a masthead in its `),Ga(12,`code`),G_(13,`masthead`),Lf(),G_(14,` slot, and your content. Components are imported one by one. `),Lf()(),uc(15,`app-docs-demo`,5),Lf(),Ga(16,`section`,1)(17,`scsc-heading`,2),G_(18,`3. Keep going`),Lf(),Ga(19,`scsc-prose`)(20,`ul`)(21,`li`),G_(22,` Need a list + form for an entity? `),Ga(23,`a`,6),G_(24,`Generate a CRUD page`),Lf(),G_(25,`. `),Lf(),Ga(26,`li`),G_(27,` Back-office app with a sidebar? Swap `),Ga(28,`code`),G_(29,`scsc-page-shell`),Lf(),G_(30,` for `),Ga(31,`a`,7)(32,`code`),G_(33,`scsc-app-shell`),Lf()(),G_(34,`. `),Lf(),Ga(35,`li`),G_(36,` See the two `),Ga(37,`a`,8),G_(38,`reference apps`),Lf(),G_(39,` for whole applications built this way. `),Lf()()()()),a&2&&(Jb(3),Pv(`level`,2),Jb(2),Pv(`code`,p.config),Jb(2),Pv(`level`,2),Jb(8),Pv(`demo`,p.demo),Jb(2),Pv(`level`,2))},dependencies:[nu,kn,PE,_,q,D],encapsulation:2})};export{y as FirstComponentPage};