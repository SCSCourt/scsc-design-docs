import{Go as g,I as EP,Ma as JT,Na as Jb,U as FP,Zo as i_,_s as o_,ds as nD,ks as t_,po as X,ps as n_,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function E(n,c){n&1&&(Ga(0,`scsc-kbd`)(1,`span`,1),G_(2,`⌘`),Lf(),Ga(3,`span`,2),G_(4,`Command`),Lf()())}function v(n,c){n&1&&(Ga(0,`scsc-kbd`),G_(1,`Ctrl`),Lf())}var p=class n{nav=g(X).defaultView?.navigator;isMac=/Mac|iPhone|iPad/.test(this.nav?.userAgent??``);static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-kbd-platform-demo`]],decls:31,vars:1,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-3`,`text-sm`],[`aria-hidden`,`true`],[1,`sr-only`]],template:function(a,i){a&1&&(Ga(0,`div`,0)(1,`p`),G_(2,` Press `),JT(3,E,5,0,`scsc-kbd`)(4,v,2,0,`scsc-kbd`),G_(5,` + `),Ga(6,`scsc-kbd`),G_(7,`K`),Lf(),G_(8,` to jump to any case. `),Lf(),Ga(9,`p`),G_(10,`Press `),Ga(11,`scsc-kbd`),G_(12,`G`),Lf(),G_(13,` then `),Ga(14,`scsc-kbd`),G_(15,`D`),Lf(),G_(16,` to go to the docket.`),Lf(),Ga(17,`p`),G_(18,` Use `),Ga(19,`scsc-kbd`)(20,`span`,1),G_(21,`↑`),Lf(),Ga(22,`span`,2),G_(23,`Up arrow`),Lf()(),G_(24,` and `),Ga(25,`scsc-kbd`)(26,`span`,1),G_(27,`↓`),Lf(),Ga(28,`span`,2),G_(29,`Down arrow`),Lf()(),G_(30,` to move between docket entries. `),Lf()()),a&2&&(Jb(3),t_(i.isMac?3:4))},dependencies:[FP],encapsulation:2})};var K=(n,c)=>c.action;function P(n,c){n&1&&(Ga(0,`span`,3),G_(1,`+`),Lf())}function _(n,c){if(n&1&&(JT(0,P,2,0,`span`,3),Ga(1,`scsc-kbd`),G_(2),Lf()),n&2){let a=c.$implicit,i=c.$index;t_(i>0?0:-1),Jb(2),nD(a)}}function z(n,c){if(n&1&&(Ga(0,`li`,1)(1,`span`),G_(2),Lf(),Ga(3,`span`,2),o_(4,_,3,2,null,null,n_),Lf()()),n&2){let a=c.$implicit;Jb(2),nD(a.action),Jb(2),i_(a.keys)}}var b=class n{shortcuts=[{action:`Open command palette`,keys:[`Ctrl`,`K`]},{action:`Save filing`,keys:[`Ctrl`,`S`]},{action:`Next docket entry`,keys:[`J`]},{action:`Close dialog`,keys:[`Esc`]}];static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-kbd-shortcuts-demo`]],decls:3,vars:0,consts:[[1,`max-w-sm`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`py-2`,`text-sm`],[1,`flex`,`items-center`,`gap-1`],[`aria-hidden`,`true`]],template:function(a,i){a&1&&(Ga(0,`scsc-list`,0),o_(1,z,6,1,`li`,1,K),Lf()),a&2&&(Jb(),i_(i.shortcuts))},dependencies:[FP,EP],encapsulation:2})};var k=class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-kbd-sizes-demo`]],decls:17,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`size`,`xs`],[`size`,`sm`],[`size`,`md`],[`size`,`lg`],[1,`mt-4`,`text-sm`]],template:function(a,i){a&1&&(Ga(0,`div`,0)(1,`scsc-kbd`,1),G_(2,`Esc`),Lf(),Ga(3,`scsc-kbd`,2),G_(4,`Esc`),Lf(),Ga(5,`scsc-kbd`,3),G_(6,`Esc`),Lf(),Ga(7,`scsc-kbd`,4),G_(8,`Esc`),Lf()(),Ga(9,`p`,5),G_(10,` Press `),Ga(11,`scsc-kbd`),G_(12,`Ctrl`),Lf(),G_(13,` + `),Ga(14,`scsc-kbd`),G_(15,`K`),Lf(),G_(16,` to open the command palette. `),Lf())},dependencies:[FP],encapsulation:2})};var h={"kbd-platform":{ts:`import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { ScscKbd } from '@scscourt/design';

@Component({
  selector: 'app-kbd-platform-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscKbd],
  template: \`
    <div class="flex max-w-lg flex-col gap-3 text-sm">
      <!-- Show the modifier the user's keyboard has; the glyph gets a spoken name. -->
      <p>
        Press
        @if (isMac) {
          <scsc-kbd><span aria-hidden="true">\u2318</span><span class="sr-only">Command</span></scsc-kbd>
        } @else {
          <scsc-kbd>Ctrl</scsc-kbd>
        }
        + <scsc-kbd>K</scsc-kbd> to jump to any case.
      </p>
      <!-- A sequence, not a chord: say "then" between the keys. -->
      <p>Press <scsc-kbd>G</scsc-kbd> then <scsc-kbd>D</scsc-kbd> to go to the docket.</p>
      <p>
        Use
        <scsc-kbd><span aria-hidden="true">\u2191</span><span class="sr-only">Up arrow</span></scsc-kbd>
        and
        <scsc-kbd
          ><span aria-hidden="true">\u2193</span><span class="sr-only">Down arrow</span></scsc-kbd
        >
        to move between docket entries.
      </p>
    </div>
  \`,
})
export class KbdPlatformDemo {
  private readonly nav = inject(DOCUMENT).defaultView?.navigator;
  /** Apple keyboards say \u2318 where others say Ctrl. */
  protected readonly isMac = /Mac|iPhone|iPad/.test(this.nav?.userAgent ?? '');
}
`,html:`<div class="flex max-w-lg flex-col gap-3 text-sm">
  <!-- Show the modifier the user's keyboard has; the glyph gets a spoken name. -->
  <p>
    Press
    @if (isMac) {
      <scsc-kbd><span aria-hidden="true">\u2318</span><span class="sr-only">Command</span></scsc-kbd>
    } @else {
      <scsc-kbd>Ctrl</scsc-kbd>
    }
    + <scsc-kbd>K</scsc-kbd> to jump to any case.
  </p>
  <!-- A sequence, not a chord: say "then" between the keys. -->
  <p>Press <scsc-kbd>G</scsc-kbd> then <scsc-kbd>D</scsc-kbd> to go to the docket.</p>
  <p>
    Use
    <scsc-kbd><span aria-hidden="true">\u2191</span><span class="sr-only">Up arrow</span></scsc-kbd>
    and
    <scsc-kbd
      ><span aria-hidden="true">\u2193</span><span class="sr-only">Down arrow</span></scsc-kbd
    >
    to move between docket entries.
  </p>
</div>
`},"kbd-shortcuts":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscKbd, ScscList } from '@scscourt/design';

interface Shortcut {
  action: string;
  keys: string[];
}

@Component({
  selector: 'app-kbd-shortcuts-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscKbd, ScscList],
  template: \`
    <scsc-list class="max-w-sm">
      @for (s of shortcuts; track s.action) {
        <li class="flex items-center justify-between gap-4 py-2 text-sm">
          <span>{{ s.action }}</span>
          <span class="flex items-center gap-1">
            @for (key of s.keys; track $index) {
              @if ($index > 0) {
                <span aria-hidden="true">+</span>
              }
              <scsc-kbd>{{ key }}</scsc-kbd>
            }
          </span>
        </li>
      }
    </scsc-list>
  \`,
})
export class KbdShortcutsDemo {
  protected readonly shortcuts: Shortcut[] = [
    { action: 'Open command palette', keys: ['Ctrl', 'K'] },
    { action: 'Save filing', keys: ['Ctrl', 'S'] },
    { action: 'Next docket entry', keys: ['J'] },
    { action: 'Close dialog', keys: ['Esc'] },
  ];
}
`,html:`<scsc-list class="max-w-sm">
  @for (s of shortcuts; track s.action) {
    <li class="flex items-center justify-between gap-4 py-2 text-sm">
      <span>{{ s.action }}</span>
      <span class="flex items-center gap-1">
        @for (key of s.keys; track $index) {
          @if ($index > 0) {
            <span aria-hidden="true">+</span>
          }
          <scsc-kbd>{{ key }}</scsc-kbd>
        }
      </span>
    </li>
  }
</scsc-list>
`},"kbd-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscKbd } from '@scscourt/design';

@Component({
  selector: 'app-kbd-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscKbd],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-kbd size="xs">Esc</scsc-kbd>
      <scsc-kbd size="sm">Esc</scsc-kbd>
      <scsc-kbd size="md">Esc</scsc-kbd>
      <scsc-kbd size="lg">Esc</scsc-kbd>
    </div>
    <p class="mt-4 text-sm">
      Press <scsc-kbd>Ctrl</scsc-kbd> + <scsc-kbd>K</scsc-kbd> to open the command palette.
    </p>
  \`,
})
export class KbdSizesDemo {}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-kbd size="xs">Esc</scsc-kbd>
  <scsc-kbd size="sm">Esc</scsc-kbd>
  <scsc-kbd size="md">Esc</scsc-kbd>
  <scsc-kbd size="lg">Esc</scsc-kbd>
</div>
<p class="mt-4 text-sm">
  Press <scsc-kbd>Ctrl</scsc-kbd> + <scsc-kbd>K</scsc-kbd> to open the command palette.
</p>
`}};var R={slug:`kbd`,name:`Kbd`,classes:[`ScscKbd`],category:`Data Display`,whenToUse:[`Show a key the user should press: in help text, tooltips, command palette hints and shortcut lists.`,'One `scsc-kbd` per key. Join a chord with a visible "+" and a sequence with "then"; use the key\'s printed name ("Ctrl", "Esc").',`Show the modifier the user actually has: ⌘ on Apple keyboards, Ctrl elsewhere.`,"Do not use it for anything that is not a key — it is a `<kbd>` element with a keycap look, not a generic chip. Use `scsc-badge` for that."],demos:[{id:`kbd-sizes`,title:`Sizes and inline use`,description:"`sm` (default) sits in running text; `md`/`lg` for reference tables.",component:k,source:h[`kbd-sizes`]},{id:`kbd-shortcuts`,title:`Shortcut list`,description:"A `scsc-list` of actions with their key combinations.",component:b,source:h[`kbd-shortcuts`]},{id:`kbd-platform`,title:`Platform keys, symbols and sequences`,description:`⌘ or Ctrl by platform, symbol keys with a spoken name, and a "G then D" sequence.`,component:p,source:h[`kbd-platform`]}],a11y:["Renders a native `<kbd>`, which screen readers announce as keyboard input.",'Write "Ctrl + K" with a real plus sign so the combination is read as such; the decorative "+" in the shortcut demo is `aria-hidden` because the keycaps already read in order.',`Symbols such as ⌘ and ↑ are read inconsistently; hide the glyph and add a visually hidden name ("Command", "Up arrow").`],related:[`command-palette`,`tooltip`,`badge`]};export{R as KBD_DOCS};