import{Bn as YR,Hn as ZR,Hs as y_,Ki as ye,Lo as d_,Ma as JT,Mn as XR,Ms as uc,Na as Jb,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,gt as KR,ha as Eg,ii as qo,ka as Ig,ks as t_,kt as NE,pi as sn,qt as QR,ra as Af,ta as $f,va as G_,vn as Vn,ws as r_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function J(t,i){if(t&1){let e=d_();Ga(0,`div`)(1,`scsc-button`,1),lc(`click`,function(){Eg(e);let r=y_();return Ig(r.editing.set(!0))}),G_(2,`Add party`),Lf()()}}function U(t,i){if(t&1){let e=d_();Ga(0,`scsc-form-field`,2),uc(1,`input`,3),Lf(),Ga(2,`scsc-form-field`,4),uc(3,`input`,5),Lf(),Ga(4,`div`,6)(5,`scsc-button`,1),lc(`click`,function(){Eg(e);let r=y_();return Ig(r.editing.set(!1))}),G_(6,`Save`),Lf(),Ga(7,`scsc-button`,7),lc(`click`,function(){Eg(e);let r=y_();return Ig(r.editing.set(!1))}),G_(8,`Cancel`),Lf()()}}var E=class t{editing=q(!1);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-directives-autofocus-demo`]],decls:3,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`variant`,`primary`,3,`click`],[`label`,`Party name`,`for`,`party-name`,`required`,``],[`scsc-input`,``,`id`,`party-name`,`scscAutofocus`,``,`placeholder`,`Jane Alvarez`],[`label`,`Role`,`for`,`party-role`],[`scsc-input`,``,`id`,`party-role`,`placeholder`,`Plaintiff`],[1,`flex`,`gap-2`],[`variant`,`ghost`,3,`click`]],template:function(e,n){e&1&&(Ga(0,`div`,0),JT(1,J,3,0,`div`)(2,U,9,0),Lf()),e&2&&(Jb(),t_(n.editing()?2:1))},dependencies:[XR,sn,Vn,qo],encapsulation:2})};function W(t,i){if(t&1&&(Ga(0,`li`)(1,`scsc-text`,6),G_(2),Lf()()),t&2){let e=i.$implicit;Jb(2),nD(e)}}function L(t,i){if(t&1&&(Ga(0,`div`,2)(1,`scsc-text`,3),G_(2,`Department`),Lf(),Ga(3,`ul`,4),o_(4,W,3,1,`li`,null,r_),Lf(),Ga(6,`scsc-text`,5),G_(7,`Click outside or press Esc to close.`),Lf()()),t&2){let e=y_();Jb(4),i_(e.departments)}}var O=class t{open=q(!1);departments=[`Dept. 1 — Civil`,`Dept. 6 — Civil`,`Dept. 12 — Probate`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-directives-click-outside-demo`]],hostBindings:function(e,n){e&1&&lc(`keydown.escape`,function(){return n.open.set(!1)})},decls:4,vars:1,consts:[[1,`relative`,`inline-block`,3,`scscClickOutside`],[`variant`,`secondary`,`outline`,``,3,`click`],[`scscElevate`,`md`,1,`absolute`,`left-0`,`z-10`,`mt-2`,`w-64`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[`size`,`sm`,`bold`,``,1,`block`],[1,`mt-2`,`flex`,`flex-col`,`gap-1`],[`size`,`xs`,`tone`,`muted`,1,`mt-3`,`block`],[`size`,`sm`]],template:function(e,n){e&1&&(Ga(0,`div`,0),lc(`scscClickOutside`,function(){return n.open.set(!1)}),Ga(1,`scsc-button`,1),lc(`click`,function(){return n.open.set(!n.open())}),G_(2,` Filter hearings `),Lf(),JT(3,L,8,0,`div`,2),Lf()),e&2&&(Jb(3),t_(n.open()?3:-1))},dependencies:[sn,YR,KR,NE],encapsulation:2})};var G=(t,i)=>i.number;function K(t,i){if(t&1){let e=d_();Ga(0,`div`,1)(1,`scsc-text`,3),G_(2),Lf(),Ga(3,`scsc-text`,4),G_(4),Lf(),Ga(5,`scsc-button`,5),lc(`copied`,function(r){Eg(e);let q=y_();return Ig(q.copied.set(r))}),uc(6,`scsc-icon`,6),G_(7,` Copy`),Ga(8,`span`,7),G_(9),Lf()()()}if(t&2){let e=i.$implicit;Jb(2),nD(e.number),Jb(2),nD(e.title),Jb(),Pv(`scscCopyToClipboard`,e.number)(`copiedMessage`,`Copied `+e.number),Jb(4),$f(` `,e.number)}}function Q(t,i){t&1&&(Ga(0,`scsc-text`,2),G_(1),Lf()),t&2&&(Jb(),$f(`Copied `,i,` to the clipboard.`))}var P=class t{copied=q(``);cases=[{number:`24CV012345`,title:`Alvarez v. Pacific Transit`},{number:`24FL003210`,title:`In re Marriage of Nguyen`},{number:`23PR001876`,title:`Estate of Harold Whitfield`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-directives-copy-demo`]],decls:4,vars:1,consts:[[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`gap-3`],[`size`,`sm`,`tone`,`primary`],[`tnum`,``],[`tone`,`muted`],[`size`,`xs`,`variant`,`ghost`,3,`copied`,`scscCopyToClipboard`,`copiedMessage`],[`name`,`copy`,`size`,`xs`],[1,`sr-only`]],template:function(e,n){if(e&1&&(Ga(0,`div`,0),o_(1,K,10,5,`div`,1,G),JT(3,Q,2,1,`scsc-text`,2),Lf()),e&2){let r;Jb(),i_(n.cases),Jb(2),t_((r=n.copied())?3:-1,r)}},dependencies:[sn,QR,ye,NE],encapsulation:2})};var A=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-directives-elevate-demo`]],decls:11,vars:0,consts:[[1,`grid`,`gap-6`,`sm:grid-cols-2`],[`scscElevate`,`sm`,1,`rounded-box`,`bg-base-100`,`p-4`],[`bold`,``],[`size`,`sm`,`tone`,`muted`,1,`block`],[`scscElevate`,`md`,1,`rounded-box`,`bg-base-100`,`p-4`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-text`,2),G_(3,`scscElevate="sm"`),Lf(),Ga(4,`scsc-text`,3),G_(5,`Resting surface — cards, tiles.`),Lf()(),Ga(6,`div`,4)(7,`scsc-text`,2),G_(8,`scscElevate="md"`),Lf(),Ga(9,`scsc-text`,3),G_(10,`Raised — menus, popovers, floating panels.`),Lf()()())},dependencies:[KR,NE],encapsulation:2})};function X(t,i){if(t&1&&(Ga(0,`span`),G_(1),Lf()),t&2){let e=i.$implicit;Jb(),nD(e)}}function Y(t,i){if(t&1&&(Ga(0,`span`,3),G_(1),Lf()),t&2){let e=i.$implicit;Jb(),nD(e)}}var I=class t{numbers=[`24CV012345`,`24CV011111`,`23PR001876`,`24SC000418`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-directives-tnum-demo`]],decls:11,vars:0,consts:[[1,`grid`,`max-w-sm`,`grid-cols-2`,`gap-x-8`],[1,`flex`,`flex-col`,`gap-1`],[`size`,`xs`,`tone`,`muted`],[`scscTnum`,``]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-text`,2),G_(3,`Proportional`),Lf(),o_(4,X,2,1,`span`,null,r_),Lf(),Ga(6,`div`,1)(7,`scsc-text`,2),G_(8,`scscTnum`),Lf(),o_(9,Y,2,1,`span`,3,r_),Lf()()),e&2&&(Jb(4),i_(n.numbers),Jb(5),i_(n.numbers))},dependencies:[NE,ZR],encapsulation:2})};var D={"directives-autofocus":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAutofocus, ScscButton, ScscFormField, ScscInput } from '@scscourt/design';

@Component({
  selector: 'app-directives-autofocus-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAutofocus, ScscButton, ScscFormField, ScscInput],
  template: \`
    <!-- Focus the first field when a form appears, instead of on page load. -->
    <div class="flex max-w-md flex-col gap-4">
      @if (!editing()) {
        <div>
          <scsc-button variant="primary" (click)="editing.set(true)">Add party</scsc-button>
        </div>
      } @else {
        <scsc-form-field label="Party name" for="party-name" required>
          <input scsc-input id="party-name" scscAutofocus placeholder="Jane Alvarez" />
        </scsc-form-field>
        <scsc-form-field label="Role" for="party-role">
          <input scsc-input id="party-role" placeholder="Plaintiff" />
        </scsc-form-field>
        <div class="flex gap-2">
          <scsc-button variant="primary" (click)="editing.set(false)">Save</scsc-button>
          <scsc-button variant="ghost" (click)="editing.set(false)">Cancel</scsc-button>
        </div>
      }
    </div>
  \`,
})
export class DirectivesAutofocusDemo {
  protected readonly editing = signal(false);
}
`,html:`<!-- Focus the first field when a form appears, instead of on page load. -->
<div class="flex max-w-md flex-col gap-4">
  @if (!editing()) {
    <div>
      <scsc-button variant="primary" (click)="editing.set(true)">Add party</scsc-button>
    </div>
  } @else {
    <scsc-form-field label="Party name" for="party-name" required>
      <input scsc-input id="party-name" scscAutofocus placeholder="Jane Alvarez" />
    </scsc-form-field>
    <scsc-form-field label="Role" for="party-role">
      <input scsc-input id="party-role" placeholder="Plaintiff" />
    </scsc-form-field>
    <div class="flex gap-2">
      <scsc-button variant="primary" (click)="editing.set(false)">Save</scsc-button>
      <scsc-button variant="ghost" (click)="editing.set(false)">Cancel</scsc-button>
    </div>
  }
</div>
`},"directives-click-outside":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscClickOutside, ScscElevate, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-directives-click-outside-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscClickOutside, ScscElevate, ScscText],
  // The directive hears pointers only, so also close on Esc for keyboard users.
  host: { '(keydown.escape)': 'open.set(false)' },
  template: \`
    <!-- Put the directive on the element that wraps BOTH the trigger and the panel,
         so clicking the trigger is not counted as "outside". -->
    <div class="relative inline-block" (scscClickOutside)="open.set(false)">
      <scsc-button variant="secondary" outline (click)="open.set(!open())">
        Filter hearings
      </scsc-button>
      @if (open()) {
        <div
          scscElevate="md"
          class="absolute left-0 z-10 mt-2 w-64 rounded-box border border-base-300 bg-base-100 p-4"
        >
          <scsc-text size="sm" bold class="block">Department</scsc-text>
          <ul class="mt-2 flex flex-col gap-1">
            @for (d of departments; track d) {
              <li>
                <scsc-text size="sm">{{ d }}</scsc-text>
              </li>
            }
          </ul>
          <scsc-text size="xs" tone="muted" class="mt-3 block"
            >Click outside or press Esc to close.</scsc-text
          >
        </div>
      }
    </div>
  \`,
})
export class DirectivesClickOutsideDemo {
  protected readonly open = signal(false);
  protected readonly departments = ['Dept. 1 \u2014 Civil', 'Dept. 6 \u2014 Civil', 'Dept. 12 \u2014 Probate'];
}
`,html:`<!-- Put the directive on the element that wraps BOTH the trigger and the panel,
     so clicking the trigger is not counted as "outside". -->
<div class="relative inline-block" (scscClickOutside)="open.set(false)">
  <scsc-button variant="secondary" outline (click)="open.set(!open())">
    Filter hearings
  </scsc-button>
  @if (open()) {
    <div
      scscElevate="md"
      class="absolute left-0 z-10 mt-2 w-64 rounded-box border border-base-300 bg-base-100 p-4"
    >
      <scsc-text size="sm" bold class="block">Department</scsc-text>
      <ul class="mt-2 flex flex-col gap-1">
        @for (d of departments; track d) {
          <li>
            <scsc-text size="sm">{{ d }}</scsc-text>
          </li>
        }
      </ul>
      <scsc-text size="xs" tone="muted" class="mt-3 block"
        >Click outside or press Esc to close.</scsc-text
      >
    </div>
  }
</div>
`},"directives-copy":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCopyToClipboard, ScscIcon, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-directives-copy-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCopyToClipboard, ScscIcon, ScscText],
  template: \`
    <div class="flex flex-col gap-3">
      @for (c of cases; track c.number) {
        <div class="flex items-center gap-3">
          <scsc-text tnum>{{ c.number }}</scsc-text>
          <scsc-text tone="muted">{{ c.title }}</scsc-text>
          <scsc-button
            size="xs"
            variant="ghost"
            [scscCopyToClipboard]="c.number"
            [copiedMessage]="'Copied ' + c.number"
            (copied)="copied.set($event)"
          >
            <scsc-icon name="copy" size="xs" />
            Copy<span class="sr-only"> {{ c.number }}</span>
          </scsc-button>
        </div>
      }
      <!-- The directive announces the copy itself; this line is the visible confirmation. -->
      @if (copied(); as value) {
        <scsc-text size="sm" tone="primary">Copied {{ value }} to the clipboard.</scsc-text>
      }
    </div>
  \`,
})
export class DirectivesCopyDemo {
  protected readonly copied = signal('');
  protected readonly cases = [
    { number: '24CV012345', title: 'Alvarez v. Pacific Transit' },
    { number: '24FL003210', title: 'In re Marriage of Nguyen' },
    { number: '23PR001876', title: 'Estate of Harold Whitfield' },
  ];
}
`,html:`<div class="flex flex-col gap-3">
  @for (c of cases; track c.number) {
    <div class="flex items-center gap-3">
      <scsc-text tnum>{{ c.number }}</scsc-text>
      <scsc-text tone="muted">{{ c.title }}</scsc-text>
      <scsc-button
        size="xs"
        variant="ghost"
        [scscCopyToClipboard]="c.number"
        [copiedMessage]="'Copied ' + c.number"
        (copied)="copied.set($event)"
      >
        <scsc-icon name="copy" size="xs" />
        Copy<span class="sr-only"> {{ c.number }}</span>
      </scsc-button>
    </div>
  }
  <!-- The directive announces the copy itself; this line is the visible confirmation. -->
  @if (copied(); as value) {
    <scsc-text size="sm" tone="primary">Copied {{ value }} to the clipboard.</scsc-text>
  }
</div>
`},"directives-elevate":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscElevate, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-directives-elevate-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscElevate, ScscText],
  template: \`
    <div class="grid gap-6 sm:grid-cols-2">
      <div scscElevate="sm" class="rounded-box bg-base-100 p-4">
        <scsc-text bold>scscElevate="sm"</scsc-text>
        <scsc-text size="sm" tone="muted" class="block">Resting surface \u2014 cards, tiles.</scsc-text>
      </div>
      <div scscElevate="md" class="rounded-box bg-base-100 p-4">
        <scsc-text bold>scscElevate="md"</scsc-text>
        <scsc-text size="sm" tone="muted" class="block"
          >Raised \u2014 menus, popovers, floating panels.</scsc-text
        >
      </div>
    </div>
  \`,
})
export class DirectivesElevateDemo {}
`,html:`<div class="grid gap-6 sm:grid-cols-2">
  <div scscElevate="sm" class="rounded-box bg-base-100 p-4">
    <scsc-text bold>scscElevate="sm"</scsc-text>
    <scsc-text size="sm" tone="muted" class="block">Resting surface \u2014 cards, tiles.</scsc-text>
  </div>
  <div scscElevate="md" class="rounded-box bg-base-100 p-4">
    <scsc-text bold>scscElevate="md"</scsc-text>
    <scsc-text size="sm" tone="muted" class="block"
      >Raised \u2014 menus, popovers, floating panels.</scsc-text
    >
  </div>
</div>
`},"directives-tnum":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscText, ScscTnum } from '@scscourt/design';

@Component({
  selector: 'app-directives-tnum-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText, ScscTnum],
  template: \`
    <!-- scscTnum works on any element; scsc-text has a "tnum" input for the same effect. -->
    <div class="grid max-w-sm grid-cols-2 gap-x-8">
      <div class="flex flex-col gap-1">
        <scsc-text size="xs" tone="muted">Proportional</scsc-text>
        @for (n of numbers; track n) {
          <span>{{ n }}</span>
        }
      </div>
      <div class="flex flex-col gap-1">
        <scsc-text size="xs" tone="muted">scscTnum</scsc-text>
        @for (n of numbers; track n) {
          <span scscTnum>{{ n }}</span>
        }
      </div>
    </div>
  \`,
})
export class DirectivesTnumDemo {
  protected readonly numbers = ['24CV012345', '24CV011111', '23PR001876', '24SC000418'];
}
`,html:`<!-- scscTnum works on any element; scsc-text has a "tnum" input for the same effect. -->
<div class="grid max-w-sm grid-cols-2 gap-x-8">
  <div class="flex flex-col gap-1">
    <scsc-text size="xs" tone="muted">Proportional</scsc-text>
    @for (n of numbers; track n) {
      <span>{{ n }}</span>
    }
  </div>
  <div class="flex flex-col gap-1">
    <scsc-text size="xs" tone="muted">scscTnum</scsc-text>
    @for (n of numbers; track n) {
      <span scscTnum>{{ n }}</span>
    }
  </div>
</div>
`}};var _e={slug:`directives`,name:`Directives`,classes:[`ScscElevate`,`ScscTnum`,`ScscAutofocus`,`ScscClickOutside`,`ScscCopyToClipboard`],category:`Services & Directives`,summary:`Five small attribute directives for behaviour that does not deserve a component: elevation shadows, tabular numerals, autofocus, click-outside detection and copy-to-clipboard. Each is standalone; import only the ones you use.`,whenToUse:['`scscElevate="sm"` / `scscElevate="md"` — the navy-tinted shadow on any surface; the same tokens the cards and menus use.',"`scscTnum` — tabular numerals on any element (table cells, `<span>`s). `scsc-text` has a `tnum` input for the same effect.","`scscAutofocus` — focus a field when it *appears* (a revealed form); inside `scsc-drawer` or `scsc-modal` it picks the field that takes focus each time the overlay opens. Not for fields present on page load, which would move focus unexpectedly.","`(scscClickOutside)` — close a custom panel; for menus and popovers prefer `scsc-dropdown` / `scsc-popover`, which already handle it.","`[scscCopyToClipboard]` — one-click copy of case numbers, links and IDs; confirm with `(copied)`."],demos:[{id:`directives-elevate`,title:`scscElevate`,description:"Two levels: `sm` for resting surfaces and `md` for raised panels (the value is required for type-checking).",component:A,source:D[`directives-elevate`]},{id:`directives-tnum`,title:`scscTnum`,description:"Proportional vs. tabular digits on plain `<span>`s.",component:I,source:D[`directives-tnum`]},{id:`directives-autofocus`,title:`scscAutofocus`,description:`The first field takes focus when the form is revealed.`,component:E,source:D[`directives-autofocus`]},{id:`directives-click-outside`,title:`scscClickOutside`,description:"Wrap trigger and panel together and close on `(scscClickOutside)`; a host `keydown.escape` listener closes it for keyboard users.",component:O,source:D[`directives-click-outside`]},{id:`directives-copy`,title:`scscCopyToClipboard`,description:"The attribute value is the text to copy; `(copied)` fires with it after a successful write and a live region confirms it. Each button carries its case number as visually hidden text.",component:P,source:D[`directives-copy`]}],a11y:["`scscAutofocus` moves focus, which screen readers announce; only use it in response to a user action (opening a form or dialog). It also sets the native `autofocus` attribute, which `scsc-drawer`, `scsc-modal` and any native `<dialog>` honour when they open.","`scscClickOutside` listens to pointer events only; give the panel an `Esc` handler or a visible close button for keyboard users.",'`scscCopyToClipboard` uses the async Clipboard API, which needs a secure context and a user gesture. It announces "Copied" (or `copiedMessage`) through the shared live region, so the app adds no live region of its own. Put it on a button: in dev mode it warns on any other host.',"`scscElevate` and `scscTnum` are purely visual and add nothing to the accessibility tree."],related:[`text`,`theme`,`dropdown`,`popover`,`card`]};export{_e as DIRECTIVES_DOCS};