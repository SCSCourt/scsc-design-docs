import{Ar as ja,Fr as kn,Ms as uc,Na as Jb,Ss as rD,Xa as Pv,Zo as i_,_s as o_,kt as NE,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var p=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-seal-fallback-demo`]],decls:13,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-8`],[1,`flex`,`flex-col`,`items-center`,`gap-2`],[`size`,`lg`],[`size`,`xs`,`tone`,`muted`],[`src`,`missing-seal.png`,`size`,`lg`],[`src`,`scsc-seal.png`,`size`,`lg`]],template:function(e,u){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-seal`,2),Ga(3,`scsc-text`,3),G_(4,`No src`),Lf()(),Ga(5,`div`,1),uc(6,`scsc-seal`,4),Ga(7,`scsc-text`,3),G_(8,`Missing file`),Lf()(),Ga(9,`div`,1),uc(10,`scsc-seal`,5),Ga(11,`scsc-text`,3),G_(12,`Packaged seal`),Lf()()())},dependencies:[ja,NE],encapsulation:2})};var x=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-seal-lockup-demo`]],decls:7,vars:1,consts:[[1,`flex`,`items-center`,`gap-4`],[`src`,`scsc-seal.png`,`size`,`lg`,`alt`,``],[1,`flex`,`flex-col`],[`display`,``,3,`level`],[`tone`,`muted`]],template:function(e,u){e&1&&(Ga(0,`div`,0),uc(1,`scsc-seal`,1),Ga(2,`div`,2)(3,`scsc-heading`,3),G_(4,`Superior Court of California`),Lf(),Ga(5,`scsc-text`,4),G_(6,`County of Santa Clara`),Lf()()()),e&2&&(Jb(3),Pv(`level`,2))},dependencies:[kn,ja,NE],encapsulation:2})};var C=(t,c)=>c.size;function D(t,c){if(t&1&&(Ga(0,`div`,1),uc(1,`scsc-seal`,2),Ga(2,`scsc-text`,3),G_(3),Lf()()),t&2){let e=c.$implicit;Jb(),Pv(`size`,e.size),Jb(2),rD(``,e.size,` · `,e.px,`px`)}}var f=class t{sizes=[{size:`xs`,px:24},{size:`sm`,px:32},{size:`md`,px:44},{size:`lg`,px:64},{size:`xl`,px:96}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-seal-sizes-demo`]],decls:3,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-6`],[1,`flex`,`flex-col`,`items-center`,`gap-2`],[`src`,`scsc-seal.png`,3,`size`],[`size`,`xs`,`tone`,`muted`]],template:function(e,u){e&1&&(Ga(0,`div`,0),o_(1,D,4,3,`div`,1,C),Lf()),e&2&&(Jb(),i_(u.sizes))},dependencies:[ja,NE],encapsulation:2})};var g={"seal-fallback":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscSeal, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-seal-fallback-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSeal, ScscText],
  template: \`
    <div class="flex flex-wrap items-end gap-8">
      <!-- No src: the navy "SCSC" roundel renders immediately. -->
      <div class="flex flex-col items-center gap-2">
        <scsc-seal size="lg" />
        <scsc-text size="xs" tone="muted">No src</scsc-text>
      </div>
      <!-- Broken src: the image fails to load and the roundel takes over. -->
      <div class="flex flex-col items-center gap-2">
        <scsc-seal src="missing-seal.png" size="lg" />
        <scsc-text size="xs" tone="muted">Missing file</scsc-text>
      </div>
      <!-- Real asset. -->
      <div class="flex flex-col items-center gap-2">
        <scsc-seal src="scsc-seal.png" size="lg" />
        <scsc-text size="xs" tone="muted">Packaged seal</scsc-text>
      </div>
    </div>
  \`,
})
export class SealFallbackDemo {}
`,html:`<div class="flex flex-wrap items-end gap-8">
  <!-- No src: the navy "SCSC" roundel renders immediately. -->
  <div class="flex flex-col items-center gap-2">
    <scsc-seal size="lg" />
    <scsc-text size="xs" tone="muted">No src</scsc-text>
  </div>
  <!-- Broken src: the image fails to load and the roundel takes over. -->
  <div class="flex flex-col items-center gap-2">
    <scsc-seal src="missing-seal.png" size="lg" />
    <scsc-text size="xs" tone="muted">Missing file</scsc-text>
  </div>
  <!-- Real asset. -->
  <div class="flex flex-col items-center gap-2">
    <scsc-seal src="scsc-seal.png" size="lg" />
    <scsc-text size="xs" tone="muted">Packaged seal</scsc-text>
  </div>
</div>
`},"seal-lockup":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscSeal, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-seal-lockup-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscSeal, ScscText],
  template: \`
    <!-- The brand lockup used in mastheads and sign-in pages: seal beside the display title. -->
    <div class="flex items-center gap-4">
      <scsc-seal src="scsc-seal.png" size="lg" alt="" />
      <div class="flex flex-col">
        <scsc-heading [level]="2" display>Superior Court of California</scsc-heading>
        <scsc-text tone="muted">County of Santa Clara</scsc-text>
      </div>
    </div>
  \`,
})
export class SealLockupDemo {}
`,html:`<!-- The brand lockup used in mastheads and sign-in pages: seal beside the display title. -->
<div class="flex items-center gap-4">
  <scsc-seal src="scsc-seal.png" size="lg" alt="" />
  <div class="flex flex-col">
    <scsc-heading [level]="2" display>Superior Court of California</scsc-heading>
    <scsc-text tone="muted">County of Santa Clara</scsc-text>
  </div>
</div>
`},"seal-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscSeal, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-seal-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscSeal, ScscText],
  template: \`
    <div class="flex flex-wrap items-end gap-6">
      @for (s of sizes; track s.size) {
        <div class="flex flex-col items-center gap-2">
          <scsc-seal src="scsc-seal.png" [size]="s.size" />
          <scsc-text size="xs" tone="muted">{{ s.size }} \xB7 {{ s.px }}px</scsc-text>
        </div>
      }
    </div>
  \`,
})
export class SealSizesDemo {
  protected readonly sizes = [
    { size: 'xs', px: 24 },
    { size: 'sm', px: 32 },
    { size: 'md', px: 44 },
    { size: 'lg', px: 64 },
    { size: 'xl', px: 96 },
  ] as const;
}
`,html:`<div class="flex flex-wrap items-end gap-6">
  @for (s of sizes; track s.size) {
    <div class="flex flex-col items-center gap-2">
      <scsc-seal src="scsc-seal.png" [size]="s.size" />
      <scsc-text size="xs" tone="muted">{{ s.size }} \xB7 {{ s.px }}px</scsc-text>
    </div>
  }
</div>
`}};var j={slug:`seal`,name:`Seal`,classes:[`ScscSeal`],category:`Primitives`,whenToUse:[`The court seal wherever the brand appears: masthead, focused-shell sign-in lockup, printed headers, footers.`,'Point `src` at the packaged PNG copied into your served assets; if it is missing or fails to load the component falls back to a navy "SCSC" roundel so the chrome never breaks.',"`scsc-masthead` and the shells render the seal for you via `logoSrc`; use `scsc-seal` directly only in custom lockups.","Do not recolour, crop or stretch the seal; pick a `size` token instead."],setup:`// angular.json \u2014 copy the packaged seal into the app's served root
"assets": [
  { "glob": "scsc-seal.png", "input": "node_modules/@scscourt/design/assets", "output": "/" }
]

// then reference it relative to <base href="/">
<scsc-seal src="scsc-seal.png" size="lg" />`,demos:[{id:`seal-sizes`,title:`Sizes`,description:`Five tokens from 24px to 96px; the image is always square.`,component:f,source:g[`seal-sizes`]},{id:`seal-fallback`,title:`Fallback roundel`,description:"No `src`, a broken `src`, and the real asset side by side.",component:p,source:g[`seal-fallback`]},{id:`seal-lockup`,title:`Brand lockup`,description:`Seal beside the display heading; the seal is decorative here because the text names the court.`,component:x,source:g[`seal-lockup`]}],a11y:['The default `alt` is the full court name; the fallback roundel carries the same text as `role="img"` + `aria-label`.','When the seal sits next to text that already names the court (a lockup), set `alt=""`: the image or roundel is then `aria-hidden` and the name is not read twice.',"The image is `object-contain` inside a fixed square, so it never distorts at any size."],aria:['With `alt=""`: `aria-hidden="true"` on the image or roundel (the roundel drops `role="img"`).'],related:[`masthead`,`brand-header`,`shells`,`icon`]};export{j as SEAL_DOCS};