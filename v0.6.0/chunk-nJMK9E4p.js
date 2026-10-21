import{Bt as PE,Gi as yN,H as FN,M as DN,Ms as uc,Na as Jb,Ss as rD,Vr as mN,Xa as Pv,Zo as i_,_r as gN,_s as o_,dr as fN,ds as nD,f as AP,ii as qo,kn as XF,kt as NE,nn as TN,pi as sn,ra as Af,ta as $f,va as G_,vn as Vn,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var A=(t,c)=>c.width;function F(t,c){if(t&1&&(Ga(0,`scsc-container`,1)(1,`scsc-card`)(2,`scsc-text`,2),G_(3),Lf(),Ga(4,`scsc-text`,3),G_(5),Lf()()()),t&2){let e=c.$implicit;Pv(`width`,e.width),Jb(3),rD(`width="`,e.width,`" · `,e.max),Jb(2),$f(` — `,e.use)}}var x=class t{widths=[{width:`sm`,max:`48rem`,use:`reading: notices, help articles`},{width:`md`,max:`64rem`,use:`forms and wizards`},{width:`lg`,max:`80rem`,use:`default app pages`},{width:`xl`,max:`90rem`,use:`portal content`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-layout-primitives-container-demo`]],decls:3,vars:0,consts:[[1,`flex`,`flex-col`,`gap-3`,`py-6`],[3,`width`],[`size`,`sm`,`bold`,``],[`size`,`sm`,`tone`,`muted`]],template:function(e,m){e&1&&(Ga(0,`div`,0),o_(1,F,6,4,`scsc-container`,1,A),Lf()),e&2&&(Jb(),i_(m.widths))},dependencies:[mN,yN,NE],encapsulation:2})};var R=(t,c)=>c.number;function V(t,c){if(t&1&&(Ga(0,`scsc-card`,1)(1,`scsc-text`,2),G_(2),Lf(),Ga(3,`scsc-text`,3),G_(4),Lf()()),t&2){let e=c.$implicit;Pv(`title`,e.number),Jb(2),nD(e.caption),Jb(2),rD(``,e.dept,` · `,e.next)}}var w=class t{cases=[{number:`24CV012345`,caption:`Alvarez v. Northgate Holdings`,dept:`Dept. 7`,next:`Oct 14`},{number:`24CV018820`,caption:`Nguyen v. Pacific Transit`,dept:`Dept. 3`,next:`Oct 21`},{number:`25CV000412`,caption:`In re Estate of Okafor`,dept:`Dept. 12`,next:`Nov 3`},{number:`25CV001177`,caption:`Reyes v. Reyes`,dept:`Dept. 9`,next:`Nov 5`},{number:`25CV002903`,caption:`City of San Jose v. Chen`,dept:`Dept. 3`,next:`Nov 18`},{number:`25CV003310`,caption:`Patel v. Summit Apartments`,dept:`Dept. 7`,next:`Dec 2`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-layout-primitives-grid-demo`]],decls:3,vars:1,consts:[[`gap`,`md`,3,`cols`],[3,`title`],[`size`,`sm`],[`size`,`sm`,`tone`,`muted`,1,`mt-1`,`block`]],template:function(e,m){e&1&&(Ga(0,`scsc-grid`,0),o_(1,V,5,4,`scsc-card`,1,R),Lf()),e&2&&(Pv(`cols`,3),Jb(),i_(m.cases))},dependencies:[fN,mN,NE],encapsulation:2})};var j=(t,c)=>c.label;function H(t,c){if(t&1&&uc(0,`scsc-stat`,5),t&2){let e=c.$implicit;Pv(`label`,e.label)(`value`,e.value)(`icon`,e.icon)}}var b=class t{stats=[{label:`Summoned`,value:`260`,icon:`mail`},{label:`Checked in`,value:`186`,icon:`user-check`},{label:`Panels requested`,value:`4`,icon:`gavel`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-layout-primitives-page-demo`]],decls:12,vars:1,consts:[[`slot`,`masthead`,`title`,`Jury Services`,`subtitle`,`Hall of Justice`,`logoSrc`,`scsc-seal.png`],[`width`,`md`],[`gap`,`lg`],[`title`,`Jury assembly, Oct 14`,`description`,`Check-in opens at 7:30 AM in the jury assembly room, 2nd floor.`],[`gap`,`md`,3,`cols`],[3,`label`,`value`,`icon`],[`heading`,`Reporting instructions`]],template:function(e,m){e&1&&(Ga(0,`scsc-page-shell`),uc(1,`scsc-masthead`,0),Ga(2,`scsc-container`,1)(3,`scsc-stack`,2),uc(4,`scsc-page-header`,3),Ga(5,`scsc-grid`,4),o_(6,H,1,3,`scsc-stat`,5,j),Lf(),Ga(8,`scsc-section`,6)(9,`scsc-prose`)(10,`p`),G_(11,` Bring your summons and a photo ID. Parking is validated in the Hedding Street garage. Jurors needing an interpreter should tell the clerk at check-in. `),Lf()()()()()()),e&2&&(Jb(5),Pv(`cols`,3),Jb(),i_(m.stats))},dependencies:[yN,fN,FN,TN,XF,PE,DN,gN,AP],encapsulation:2})};var k=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-layout-primitives-stack-demo`]],decls:19,vars:0,consts:[[1,`max-w-md`],[`gap`,`md`],[`label`,`Party name`,`for`,`stack-party-name`],[`scsc-input`,``,`id`,`stack-party-name`,`autocomplete`,`name`],[`label`,`Role`,`for`,`stack-party-role`],[`scsc-select`,``,`id`,`stack-party-role`],[`direction`,`horizontal`,`gap`,`sm`,`align`,`center`,1,`justify-end`],[`tone`,`muted`,`size`,`sm`],[`variant`,`ghost`,`nativeType`,`reset`],[`variant`,`primary`]],template:function(e,m){e&1&&(Ga(0,`form`,0)(1,`scsc-stack`,1)(2,`scsc-form-field`,2),uc(3,`input`,3),Lf(),Ga(4,`scsc-form-field`,4)(5,`select`,5)(6,`option`),G_(7,`Plaintiff`),Lf(),Ga(8,`option`),G_(9,`Defendant`),Lf(),Ga(10,`option`),G_(11,`Interested party`),Lf()()(),Ga(12,`scsc-stack`,6)(13,`scsc-text`,7),G_(14,`Unsaved changes`),Lf(),Ga(15,`scsc-button`,8),G_(16,`Cancel`),Lf(),Ga(17,`scsc-button`,9),G_(18,`Add party`),Lf()()()())},dependencies:[sn,Vn,qo,On,gN,NE],encapsulation:2})};var g={"layout-primitives-container":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscContainer, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-layout-primitives-container-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscContainer, ScscText],
  template: \`
    <div class="flex flex-col gap-3 py-6">
      @for (w of widths; track w.width) {
        <!-- Each container centres itself and caps its width; the card fills it. -->
        <scsc-container [width]="w.width">
          <scsc-card>
            <scsc-text size="sm" bold>width="{{ w.width }}" \xB7 {{ w.max }}</scsc-text>
            <scsc-text size="sm" tone="muted"> \u2014 {{ w.use }}</scsc-text>
          </scsc-card>
        </scsc-container>
      }
    </div>
  \`,
})
export class LayoutPrimitivesContainerDemo {
  protected readonly widths = [
    { width: 'sm', max: '48rem', use: 'reading: notices, help articles' },
    { width: 'md', max: '64rem', use: 'forms and wizards' },
    { width: 'lg', max: '80rem', use: 'default app pages' },
    { width: 'xl', max: '90rem', use: 'portal content' },
  ] as const;
}
`,html:`<div class="flex flex-col gap-3 py-6">
  @for (w of widths; track w.width) {
    <!-- Each container centres itself and caps its width; the card fills it. -->
    <scsc-container [width]="w.width">
      <scsc-card>
        <scsc-text size="sm" bold>width="{{ w.width }}" \xB7 {{ w.max }}</scsc-text>
        <scsc-text size="sm" tone="muted"> \u2014 {{ w.use }}</scsc-text>
      </scsc-card>
    </scsc-container>
  }
</div>
`},"layout-primitives-grid":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscGrid, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-layout-primitives-grid-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscGrid, ScscCard, ScscText],
  template: \`
    <!-- 3 columns on large screens, 2 on medium, 1 on small -->
    <scsc-grid [cols]="3" gap="md">
      @for (c of cases; track c.number) {
        <scsc-card [title]="c.number">
          <scsc-text size="sm">{{ c.caption }}</scsc-text>
          <scsc-text size="sm" tone="muted" class="mt-1 block"
            >{{ c.dept }} \xB7 {{ c.next }}</scsc-text
          >
        </scsc-card>
      }
    </scsc-grid>
  \`,
})
export class LayoutPrimitivesGridDemo {
  protected readonly cases = [
    {
      number: '24CV012345',
      caption: 'Alvarez v. Northgate Holdings',
      dept: 'Dept. 7',
      next: 'Oct 14',
    },
    { number: '24CV018820', caption: 'Nguyen v. Pacific Transit', dept: 'Dept. 3', next: 'Oct 21' },
    { number: '25CV000412', caption: 'In re Estate of Okafor', dept: 'Dept. 12', next: 'Nov 3' },
    { number: '25CV001177', caption: 'Reyes v. Reyes', dept: 'Dept. 9', next: 'Nov 5' },
    { number: '25CV002903', caption: 'City of San Jose v. Chen', dept: 'Dept. 3', next: 'Nov 18' },
    { number: '25CV003310', caption: 'Patel v. Summit Apartments', dept: 'Dept. 7', next: 'Dec 2' },
  ];
}
`,html:`<!-- 3 columns on large screens, 2 on medium, 1 on small -->
<scsc-grid [cols]="3" gap="md">
  @for (c of cases; track c.number) {
    <scsc-card [title]="c.number">
      <scsc-text size="sm">{{ c.caption }}</scsc-text>
      <scsc-text size="sm" tone="muted" class="mt-1 block"
        >{{ c.dept }} \xB7 {{ c.next }}</scsc-text
      >
    </scsc-card>
  }
</scsc-grid>
`},"layout-primitives-page":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscContainer,
  ScscGrid,
  ScscMasthead,
  ScscPageHeader,
  ScscPageShell,
  ScscProse,
  ScscSection,
  ScscStack,
  ScscStat,
} from '@scscourt/design';

@Component({
  selector: 'app-layout-primitives-page-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscContainer,
    ScscGrid,
    ScscMasthead,
    ScscPageHeader,
    ScscPageShell,
    ScscProse,
    ScscSection,
    ScscStack,
    ScscStat,
  ],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Jury Services"
        subtitle="Hall of Justice"
        logoSrc="scsc-seal.png"
      />

      <!-- The shell centres at 90rem; a narrower container keeps this page at form width. -->
      <scsc-container width="md">
        <scsc-stack gap="lg">
          <scsc-page-header
            title="Jury assembly, Oct 14"
            description="Check-in opens at 7:30 AM in the jury assembly room, 2nd floor."
          />

          <scsc-grid [cols]="3" gap="md">
            @for (s of stats; track s.label) {
              <scsc-stat [label]="s.label" [value]="s.value" [icon]="s.icon" />
            }
          </scsc-grid>

          <scsc-section heading="Reporting instructions">
            <scsc-prose>
              <p>
                Bring your summons and a photo ID. Parking is validated in the Hedding Street
                garage. Jurors needing an interpreter should tell the clerk at check-in.
              </p>
            </scsc-prose>
          </scsc-section>
        </scsc-stack>
      </scsc-container>
    </scsc-page-shell>
  \`,
})
export class LayoutPrimitivesPageDemo {
  protected readonly stats = [
    { label: 'Summoned', value: '260', icon: 'mail' },
    { label: 'Checked in', value: '186', icon: 'user-check' },
    { label: 'Panels requested', value: '4', icon: 'gavel' },
  ];
}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Jury Services"
    subtitle="Hall of Justice"
    logoSrc="scsc-seal.png"
  />

  <!-- The shell centres at 90rem; a narrower container keeps this page at form width. -->
  <scsc-container width="md">
    <scsc-stack gap="lg">
      <scsc-page-header
        title="Jury assembly, Oct 14"
        description="Check-in opens at 7:30 AM in the jury assembly room, 2nd floor."
      />

      <scsc-grid [cols]="3" gap="md">
        @for (s of stats; track s.label) {
          <scsc-stat [label]="s.label" [value]="s.value" [icon]="s.icon" />
        }
      </scsc-grid>

      <scsc-section heading="Reporting instructions">
        <scsc-prose>
          <p>
            Bring your summons and a photo ID. Parking is validated in the Hedding Street
            garage. Jurors needing an interpreter should tell the clerk at check-in.
          </p>
        </scsc-prose>
      </scsc-section>
    </scsc-stack>
  </scsc-container>
</scsc-page-shell>
`},"layout-primitives-stack":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscSelect,
  ScscStack,
  ScscText,
} from '@scscourt/design';

@Component({
  selector: 'app-layout-primitives-stack-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscFormField, ScscInput, ScscSelect, ScscStack, ScscText],
  template: \`
    <form class="max-w-md">
      <!-- vertical (default): fields one above the other with a medium gap -->
      <scsc-stack gap="md">
        <scsc-form-field label="Party name" for="stack-party-name">
          <input scsc-input id="stack-party-name" autocomplete="name" />
        </scsc-form-field>
        <scsc-form-field label="Role" for="stack-party-role">
          <select scsc-select id="stack-party-role">
            <option>Plaintiff</option>
            <option>Defendant</option>
            <option>Interested party</option>
          </select>
        </scsc-form-field>

        <!-- horizontal + align center: the action row, pushed to the end -->
        <scsc-stack direction="horizontal" gap="sm" align="center" class="justify-end">
          <scsc-text tone="muted" size="sm">Unsaved changes</scsc-text>
          <scsc-button variant="ghost" nativeType="reset">Cancel</scsc-button>
          <scsc-button variant="primary">Add party</scsc-button>
        </scsc-stack>
      </scsc-stack>
    </form>
  \`,
})
export class LayoutPrimitivesStackDemo {}
`,html:`<form class="max-w-md">
  <!-- vertical (default): fields one above the other with a medium gap -->
  <scsc-stack gap="md">
    <scsc-form-field label="Party name" for="stack-party-name">
      <input scsc-input id="stack-party-name" autocomplete="name" />
    </scsc-form-field>
    <scsc-form-field label="Role" for="stack-party-role">
      <select scsc-select id="stack-party-role">
        <option>Plaintiff</option>
        <option>Defendant</option>
        <option>Interested party</option>
      </select>
    </scsc-form-field>

    <!-- horizontal + align center: the action row, pushed to the end -->
    <scsc-stack direction="horizontal" gap="sm" align="center" class="justify-end">
      <scsc-text tone="muted" size="sm">Unsaved changes</scsc-text>
      <scsc-button variant="ghost" nativeType="reset">Cancel</scsc-button>
      <scsc-button variant="primary">Add party</scsc-button>
    </scsc-stack>
  </scsc-stack>
</form>
`}};var ae={slug:`layout-primitives`,name:`Layout Primitives`,classes:[`ScscContainer`,`ScscStack`,`ScscGrid`],category:`Layout`,summary:"Three typed wrappers over the layout classes every page needs: `scsc-container` for a centred max-width column, `scsc-stack` for a flex row or column with a consistent gap, `scsc-grid` for a responsive column grid.",whenToUse:["**Container** — cap the width of reading content (`sm`), forms (`md`) or app pages (`lg`, default). Shells already centre at `xl`; nest a narrower container inside when needed, as the page demo does.",'**Stack** — vertical rhythm between blocks, or a horizontal action row (`direction="horizontal" align="center"`).',`**Grid** — cards, stats or tiles in 2–4 columns that collapse to one on phones. Breakpoints follow the viewport, not the parent, so keep narrow parents at 2 columns.`,"Named gaps (`xs`…`xl`) keep spacing on the density scale; reach for raw Tailwind only for one-off tweaks such as `justify-end`."],demos:[{id:`layout-primitives-container`,title:`Container widths`,description:"`sm` 48rem, `md` 64rem, `lg` 80rem, `xl` 90rem; `full` removes the cap. The caps are wider than this column, so open the preview in a new tab to compare them.",component:x,source:g[`layout-primitives-container`],layout:`page`,height:`20rem`},{id:`layout-primitives-stack`,title:`Stack`,description:`A vertical stack of form fields ending in a horizontal, centre-aligned action row.`,component:k,source:g[`layout-primitives-stack`]},{id:`layout-primitives-grid`,title:`Grid`,description:'`[cols]="3"`: one column on phones, two at `md`, three at `lg`.',component:w,source:g[`layout-primitives-grid`]},{id:`layout-primitives-page`,title:`Composing a page`,description:"Inside `scsc-page-shell`: a `md` container, a `lg` stack for the page rhythm and a 3-column grid of stats. Switch the preview to mobile to see the grid collapse.",component:b,source:g[`layout-primitives-page`],layout:`page`,height:`32rem`}],a11y:[`All three are pure layout wrappers with no roles or semantics; put headings and landmarks in the content you project.`,`Grid and stack reorder nothing: DOM order is reading order at every breakpoint.`],related:[`page-structure`,`page-shell`,`card`,`divider`]};export{ae as LAYOUT_PRIMITIVES_DOCS};