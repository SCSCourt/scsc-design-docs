import{Fr as kn,Gt as QN,Ms as uc,Na as Jb,Xa as Pv,nn as TN,pi as sn,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var b={"breadcrumb-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBreadcrumb, ScscBreadcrumbItem } from '@scscourt/design';

@Component({
  selector: 'app-breadcrumb-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBreadcrumb],
  template: \`<scsc-breadcrumb [items]="trail" />\`,
})
export class BreadcrumbBasicDemo {
  // In your app use real routes ('/cases', ['/cases', id]); '.' keeps the demo on this page.
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Civil', link: '.' },
    { label: 'Cases', link: '.' },
    { label: '24CV012345 \u2014 Alvarez v. Northgate Holdings' },
  ];
}
`,html:`<scsc-breadcrumb [items]="trail" />
`},"breadcrumb-long":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBreadcrumb, ScscBreadcrumbItem, ScscHeading } from '@scscourt/design';

@Component({
  selector: 'app-breadcrumb-long-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBreadcrumb, ScscHeading],
  template: \`
    <!-- A deep trail in a narrow column scrolls sideways instead of wrapping. Keep the labels
         short and let the page heading carry the full title. -->
    <div class="max-w-xs rounded-box border border-base-300 bg-base-100 p-4">
      <scsc-breadcrumb [items]="trail" />
      <scsc-heading [level]="3" [visualLevel]="4" class="mt-2">
        Second account and report of conservator
      </scsc-heading>
    </div>
  \`,
})
export class BreadcrumbLongDemo {
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Probate', link: '.' },
    { label: 'Conservatorships', link: '.' },
    { label: '23PR001876', link: '.' },
    { label: 'Accountings', link: '.' },
    { label: 'Second account' },
  ];
}
`,html:`<!-- A deep trail in a narrow column scrolls sideways instead of wrapping. Keep the labels
     short and let the page heading carry the full title. -->
<div class="max-w-xs rounded-box border border-base-300 bg-base-100 p-4">
  <scsc-breadcrumb [items]="trail" />
  <scsc-heading [level]="3" [visualLevel]="4" class="mt-2">
    Second account and report of conservator
  </scsc-heading>
</div>
`},"breadcrumb-page-header":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBreadcrumb, ScscBreadcrumbItem, ScscButton, ScscPageHeader } from '@scscourt/design';

@Component({
  selector: 'app-breadcrumb-page-header-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBreadcrumb, ScscPageHeader, ScscButton],
  template: \`
    <scsc-page-header
      title="Hearing: Motion to Compel"
      description="Dept. 7 \xB7 Oct 14, 2026 at 9:00 AM"
    >
      <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
      <scsc-button slot="actions" variant="ghost">Continue hearing</scsc-button>
      <scsc-button slot="actions" variant="primary">Record ruling</scsc-button>
    </scsc-page-header>
  \`,
})
export class BreadcrumbPageHeaderDemo {
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Calendar', link: '.' },
    { label: '24CV012345', link: '.' },
    { label: 'Motion to Compel' },
  ];
}
`,html:`<scsc-page-header
  title="Hearing: Motion to Compel"
  description="Dept. 7 \xB7 Oct 14, 2026 at 9:00 AM"
>
  <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
  <scsc-button slot="actions" variant="ghost">Continue hearing</scsc-button>
  <scsc-button slot="actions" variant="primary">Record ruling</scsc-button>
</scsc-page-header>
`}};var p=class a{trail=[{label:`Civil`,link:`.`},{label:`Cases`,link:`.`},{label:`24CV012345 — Alvarez v. Northgate Holdings`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-breadcrumb-basic-demo`]],decls:1,vars:1,consts:[[3,`items`]],template:function(e,i){e&1&&uc(0,`scsc-breadcrumb`,0),e&2&&Pv(`items`,i.trail)},dependencies:[QN],encapsulation:2})};var u=class a{trail=[{label:`Probate`,link:`.`},{label:`Conservatorships`,link:`.`},{label:`23PR001876`,link:`.`},{label:`Accountings`,link:`.`},{label:`Second account`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-breadcrumb-long-demo`]],decls:4,vars:3,consts:[[1,`max-w-xs`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[3,`items`],[1,`mt-2`,3,`level`,`visualLevel`]],template:function(e,i){e&1&&(Ga(0,`div`,0),uc(1,`scsc-breadcrumb`,1),Ga(2,`scsc-heading`,2),G_(3,` Second account and report of conservator `),Lf()()),e&2&&(Jb(),Pv(`items`,i.trail),Jb(),Pv(`level`,3)(`visualLevel`,4))},dependencies:[QN,kn],encapsulation:2})};var g=class a{trail=[{label:`Calendar`,link:`.`},{label:`24CV012345`,link:`.`},{label:`Motion to Compel`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-breadcrumb-page-header-demo`]],decls:6,vars:1,consts:[[`title`,`Hearing: Motion to Compel`,`description`,`Dept. 7 · Oct 14, 2026 at 9:00 AM`],[`slot`,`breadcrumb`,3,`items`],[`slot`,`actions`,`variant`,`ghost`],[`slot`,`actions`,`variant`,`primary`]],template:function(e,i){e&1&&(Ga(0,`scsc-page-header`,0),uc(1,`scsc-breadcrumb`,1),Ga(2,`scsc-button`,2),G_(3,`Continue hearing`),Lf(),Ga(4,`scsc-button`,3),G_(5,`Record ruling`),Lf()()),e&2&&(Jb(),Pv(`items`,i.trail))},dependencies:[QN,TN,sn],encapsulation:2})};var T={slug:`breadcrumb`,name:`Breadcrumb`,classes:[`ScscBreadcrumb`],category:`Navigation`,whenToUse:[`Pages more than one level deep in a hierarchy (division → cases → case → hearing) so users can step back up.`,"The last item is the current page: give it a `label` only; every earlier item needs a `link`.","Place it in the `[slot=breadcrumb]` of `scsc-page-header` so it sits above the title.",`The trail never wraps: in a narrow column it scrolls sideways, so keep each label to a word or two and put the full title in the heading.`,`Not a substitute for the primary navigation, and not needed on top-level pages.`],setup:`// Links are router links: the app needs a router.
provideRouter(routes)`,demos:[{id:`breadcrumb-basic`,title:`Trail`,description:`Two links and the current page.`,component:p,source:b[`breadcrumb-basic`]},{id:`breadcrumb-page-header`,title:`In a page header`,description:"The usual placement: `[slot=breadcrumb]` above the title and actions.",component:g,source:b[`breadcrumb-page-header`]},{id:`breadcrumb-long`,title:`Deep trail, narrow column`,description:`Five levels in a 20rem panel: the trail scrolls horizontally and the heading below carries the full title.`,component:u,source:b[`breadcrumb-long`]}],a11y:['Renders `<nav aria-label="Breadcrumb">` with a list of links; the current page is text with `aria-current="page"`.',`The separators are drawn in CSS, so screen readers hear only the labels.`,`Keep labels short and identical to the page titles they lead to.`],related:[`page-structure`,`navbar`,`tabs`]};export{T as BREADCRUMB_DOCS};