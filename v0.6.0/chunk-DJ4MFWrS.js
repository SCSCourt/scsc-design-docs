import{Hs as y_,Ki as ye,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Nr as jo,Ot as Mn,Xa as Pv,Zo as i_,_s as o_,cn as UE,cs as lc,ds as nD,ha as Eg,it as IN,ka as Ig,ks as t_,kt as NE,pi as sn,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var g=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tooltip-icon-button-demo`]],decls:3,vars:0,consts:[[1,`flex`,`items-center`,`gap-4`],[`icon`,`printer`,`label`,`Print docket`,`scscTooltip`,`Prints today's Dept. 5 docket on the clerk's printer`],[`icon`,`copy`,`label`,`Copy case number`,`scscTooltip`,`Copy case number`]],template:function(e,c){e&1&&(Ga(0,`div`,0),uc(1,`scsc-icon-button`,1)(2,`scsc-icon-button`,2),Lf())},dependencies:[UE,Mn],encapsulation:2})};var v=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tooltip-inline-demo`]],decls:8,vars:0,consts:[[1,`max-w-prose`,`text-sm`,`leading-relaxed`],[`href`,`.`,`scscTooltip`,`Alvarez v. Pacific Transit — Civil, Dept. 5`,1,`link`,`link-primary`],[`tabindex`,`0`,`scscTooltip`,`Case Management Conference`,`scscTooltipPosition`,`bottom`,1,`cursor-help`,`underline`,`decoration-dotted`,`underline-offset-2`]],template:function(e,c){e&1&&(Ga(0,`p`,0),G_(1,` Proof of service for `),Ga(2,`a`,1),G_(3,`24CV012345`),Lf(),G_(4,` is due five court days before the `),Ga(5,`abbr`,2),G_(6,`CMC`),Lf(),G_(7,`. `),Lf())},dependencies:[Mn],encapsulation:2})};var k=class s{off=q(!1);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tooltip-options-demo`]],decls:12,vars:3,consts:[[1,`flex`,`flex-col`,`items-start`,`gap-4`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[`scscTooltip`,`Files the motion with the clerk`,3,`scscTooltipDisabled`],[1,`text-sm`],[`tabindex`,`0`,`datetime`,`2026-09-30T16:05`,`scscTooltip`,`Sep 30, 2026, 4:05 PM`,1,`rounded-sm`,`underline`,`decoration-dotted`,`underline-offset-2`,3,`scscTooltipDescribe`],[1,`sr-only`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`label`,1)(2,`input`,2),lc(`change`,function(){return c.off.set(!c.off())}),Lf(),G_(3,` Turn the tooltip off `),Lf(),Ga(4,`scsc-button`,3),G_(5,`Submit motion`),Lf(),Ga(6,`p`,4),G_(7,` Last updated `),Ga(8,`time`,5),G_(9,`2 hours ago`),Ga(10,`span`,6),G_(11,`, Sep 30, 2026, 4:05 PM`),Lf()()()()),e&2&&(Jb(2),Pv(`checked`,c.off()),Jb(2),Pv(`scscTooltipDisabled`,c.off()),Jb(4),Pv(`scscTooltipDescribe`,!1))},dependencies:[sn,jo,Mn],encapsulation:2})};function V(s,i){if(s&1&&(Ga(0,`p`,5),G_(1),Lf()),s&2){let e=y_();Jb(),nD(e.status())}}var C=class s{status=q(``);act(i){this.status.set(i)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tooltip-positions-demo`]],decls:6,vars:1,consts:[[1,`flex`,`items-center`,`gap-6`,`px-10`,`py-8`],[`icon`,`copy`,`label`,`Copy case number`,`scscTooltip`,`Copy case number`,`scscTooltipPosition`,`top`,3,`click`],[`icon`,`printer`,`label`,`Print docket`,`scscTooltip`,`Print docket`,`scscTooltipPosition`,`bottom`,3,`click`],[`icon`,`download`,`label`,`Download PDF`,`scscTooltip`,`Download PDF`,`scscTooltipPosition`,`start`,3,`click`],[`icon`,`trash-2`,`label`,`Remove from calendar`,`scscTooltip`,`Remove from calendar`,`scscTooltipPosition`,`end`,3,`click`],[`role`,`status`,1,`text-sm`,`text-base-content/70`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`scsc-icon-button`,1),lc(`click`,function(){return c.act(`Copied 24CV012345`)}),Lf(),Ga(2,`scsc-icon-button`,2),lc(`click`,function(){return c.act(`Printing docket`)}),Lf(),Ga(3,`scsc-icon-button`,3),lc(`click`,function(){return c.act(`Downloading PDF`)}),Lf(),Ga(4,`scsc-icon-button`,4),lc(`click`,function(){return c.act(`Removed from calendar`)}),Lf()(),JT(5,V,2,1,`p`,5)),e&2&&(Jb(5),t_(c.status()?5:-1))},dependencies:[UE,Mn],encapsulation:2})};var L=(s,i)=>i.icon;function H(s,i){if(s&1){let e=d_();Ga(0,`span`,4)(1,`scsc-icon-button`,6),lc(`click`,function(){let m=Eg(e).$implicit,R=y_();return Ig(R.status.set(m.done))}),Lf()()}if(s&2){let e=i.$implicit;Pv(`scscTooltip`,e.label),Jb(),Pv(`icon`,e.icon)(`label`,e.label)}}var S=class s{actions=[{icon:`download`,label:`Download PDF`,done:`Downloading Motion to Compel.pdf`},{icon:`printer`,label:`Print`,done:`Sent to printer`},{icon:`link`,label:`Copy link`,done:`Link copied`},{icon:`stamp`,label:`Stamp as filed`,done:`Stamped FILED Oct 14, 2026`}];status=q(``);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tooltip-toolbar-demo`]],decls:9,vars:2,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-2`],[3,`bordered`],[`name`,`file-text`,`size`,`sm`],[1,`min-w-0`,`truncate`,`text-sm`,`font-medium`],[`slot`,`end`,`scscTooltipPosition`,`bottom`,1,`inline-block`,3,`scscTooltip`],[`tone`,`muted`,`size`,`sm`,`role`,`status`],[`size`,`sm`,3,`click`,`icon`,`label`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`scsc-toolbar`,1),uc(2,`scsc-icon`,2),Ga(3,`span`,3),G_(4,`Motion to Compel.pdf`),Lf(),o_(5,H,2,3,`span`,4,L),Lf(),Ga(7,`scsc-text`,5),G_(8),Lf()()),e&2&&(Jb(),Pv(`bordered`,!0),Jb(4),i_(c.actions),Jb(3),nD(c.status()))},dependencies:[ye,UE,NE,IN,Mn],encapsulation:2})};var h={"tooltip-icon-button":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscIconButton, ScscTooltip } from '@scscourt/design';

@Component({
  selector: 'app-tooltip-icon-button-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscIconButton, ScscTooltip],
  template: \`
    <div class="flex items-center gap-4">
      <!-- label names the button ("Print docket"); the tooltip adds a description. -->
      <scsc-icon-button
        icon="printer"
        label="Print docket"
        scscTooltip="Prints today's Dept. 5 docket on the clerk's printer"
      />
      <!-- The tooltip repeats the label, so screen readers hear the name once. -->
      <scsc-icon-button icon="copy" label="Copy case number" scscTooltip="Copy case number" />
    </div>
  \`,
})
export class TooltipIconButtonDemo {}
`,html:`<div class="flex items-center gap-4">
  <!-- label names the button ("Print docket"); the tooltip adds a description. -->
  <scsc-icon-button
    icon="printer"
    label="Print docket"
    scscTooltip="Prints today's Dept. 5 docket on the clerk's printer"
  />
  <!-- The tooltip repeats the label, so screen readers hear the name once. -->
  <scsc-icon-button icon="copy" label="Copy case number" scscTooltip="Copy case number" />
</div>
`},"tooltip-inline":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTooltip } from '@scscourt/design';

@Component({
  selector: 'app-tooltip-inline-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTooltip],
  template: \`
    <p class="max-w-prose text-sm leading-relaxed">
      Proof of service for
      <!-- The link keeps its name (the case number); the tooltip becomes its description. -->
      <a
        href="."
        class="link link-primary"
        scscTooltip="Alvarez v. Pacific Transit \u2014 Civil, Dept. 5"
        >24CV012345</a
      >
      is due five court days before the
      <!-- Not interactive, so tabindex="0" lets keyboard users reach it and see the tooltip. -->
      <abbr
        tabindex="0"
        class="cursor-help underline decoration-dotted underline-offset-2"
        scscTooltip="Case Management Conference"
        scscTooltipPosition="bottom"
        >CMC</abbr
      >.
    </p>
  \`,
})
export class TooltipInlineDemo {}
`,html:`<p class="max-w-prose text-sm leading-relaxed">
  Proof of service for
  <!-- The link keeps its name (the case number); the tooltip becomes its description. -->
  <a
    href="."
    class="link link-primary"
    scscTooltip="Alvarez v. Pacific Transit \u2014 Civil, Dept. 5"
    >24CV012345</a
  >
  is due five court days before the
  <!-- Not interactive, so tabindex="0" lets keyboard users reach it and see the tooltip. -->
  <abbr
    tabindex="0"
    class="cursor-help underline decoration-dotted underline-offset-2"
    scscTooltip="Case Management Conference"
    scscTooltipPosition="bottom"
    >CMC</abbr
  >.
</p>
`},"tooltip-options":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCheckbox, ScscTooltip } from '@scscourt/design';

@Component({
  selector: 'app-tooltip-options-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCheckbox, ScscTooltip],
  template: \`
    <div class="flex flex-col items-start gap-4">
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" scsc-checkbox [checked]="off()" (change)="off.set(!off())" />
        Turn the tooltip off
      </label>
      <!-- Disabled: no bubble and no description. The button itself stays usable. -->
      <scsc-button scscTooltip="Files the motion with the clerk" [scscTooltipDisabled]="off()"
        >Submit motion</scsc-button
      >
      <p class="text-sm">
        Last updated
        <!-- The time already reads the absolute date (sr-only), so the tooltip is visual only. -->
        <time
          tabindex="0"
          datetime="2026-09-30T16:05"
          class="rounded-sm underline decoration-dotted underline-offset-2"
          scscTooltip="Sep 30, 2026, 4:05 PM"
          [scscTooltipDescribe]="false"
          >2 hours ago<span class="sr-only">, Sep 30, 2026, 4:05 PM</span></time
        >
      </p>
    </div>
  \`,
})
export class TooltipOptionsDemo {
  protected readonly off = signal(false);
}
`,html:`<div class="flex flex-col items-start gap-4">
  <label class="flex items-center gap-2 text-sm">
    <input type="checkbox" scsc-checkbox [checked]="off()" (change)="off.set(!off())" />
    Turn the tooltip off
  </label>
  <!-- Disabled: no bubble and no description. The button itself stays usable. -->
  <scsc-button scscTooltip="Files the motion with the clerk" [scscTooltipDisabled]="off()"
    >Submit motion</scsc-button
  >
  <p class="text-sm">
    Last updated
    <!-- The time already reads the absolute date (sr-only), so the tooltip is visual only. -->
    <time
      tabindex="0"
      datetime="2026-09-30T16:05"
      class="rounded-sm underline decoration-dotted underline-offset-2"
      scscTooltip="Sep 30, 2026, 4:05 PM"
      [scscTooltipDescribe]="false"
      >2 hours ago<span class="sr-only">, Sep 30, 2026, 4:05 PM</span></time
    >
  </p>
</div>
`},"tooltip-positions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscIconButton, ScscTooltip } from '@scscourt/design';

@Component({
  selector: 'app-tooltip-positions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscIconButton, ScscTooltip],
  template: \`
    <!-- Each button is named by its label; the tooltip repeats it for sighted pointer users, so it
         adds no description. start / end follow the text direction. -->
    <div class="flex items-center gap-6 px-10 py-8">
      <scsc-icon-button
        icon="copy"
        label="Copy case number"
        scscTooltip="Copy case number"
        scscTooltipPosition="top"
        (click)="act('Copied 24CV012345')"
      />
      <scsc-icon-button
        icon="printer"
        label="Print docket"
        scscTooltip="Print docket"
        scscTooltipPosition="bottom"
        (click)="act('Printing docket')"
      />
      <scsc-icon-button
        icon="download"
        label="Download PDF"
        scscTooltip="Download PDF"
        scscTooltipPosition="start"
        (click)="act('Downloading PDF')"
      />
      <scsc-icon-button
        icon="trash-2"
        label="Remove from calendar"
        scscTooltip="Remove from calendar"
        scscTooltipPosition="end"
        (click)="act('Removed from calendar')"
      />
    </div>
    @if (status()) {
      <p class="text-sm text-base-content/70" role="status">{{ status() }}</p>
    }
  \`,
})
export class TooltipPositionsDemo {
  protected readonly status = signal('');

  protected act(message: string): void {
    this.status.set(message);
  }
}
`,html:`<!-- Each button is named by its label; the tooltip repeats it for sighted pointer users, so it
     adds no description. start / end follow the text direction. -->
<div class="flex items-center gap-6 px-10 py-8">
  <scsc-icon-button
    icon="copy"
    label="Copy case number"
    scscTooltip="Copy case number"
    scscTooltipPosition="top"
    (click)="act('Copied 24CV012345')"
  />
  <scsc-icon-button
    icon="printer"
    label="Print docket"
    scscTooltip="Print docket"
    scscTooltipPosition="bottom"
    (click)="act('Printing docket')"
  />
  <scsc-icon-button
    icon="download"
    label="Download PDF"
    scscTooltip="Download PDF"
    scscTooltipPosition="start"
    (click)="act('Downloading PDF')"
  />
  <scsc-icon-button
    icon="trash-2"
    label="Remove from calendar"
    scscTooltip="Remove from calendar"
    scscTooltipPosition="end"
    (click)="act('Removed from calendar')"
  />
</div>
@if (status()) {
  <p class="text-sm text-base-content/70" role="status">{{ status() }}</p>
}
`},"tooltip-toolbar":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscIcon, ScscIconButton, ScscText, ScscToolbar, ScscTooltip } from '@scscourt/design';

interface Action {
  icon: string;
  label: string;
  done: string;
}

@Component({
  selector: 'app-tooltip-toolbar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscIcon, ScscIconButton, ScscText, ScscToolbar, ScscTooltip],
  template: \`
    <div class="flex max-w-xl flex-col gap-2">
      <scsc-toolbar [bordered]="true">
        <scsc-icon name="file-text" size="sm" />
        <span class="min-w-0 truncate text-sm font-medium">Motion to Compel.pdf</span>
        <!-- The toolbar sits above the document, so the bubbles open downward. -->
        @for (a of actions; track a.icon) {
          <span
            slot="end"
            class="inline-block"
            [scscTooltip]="a.label"
            scscTooltipPosition="bottom"
          >
            <scsc-icon-button
              [icon]="a.icon"
              [label]="a.label"
              size="sm"
              (click)="status.set(a.done)"
            />
          </span>
        }
      </scsc-toolbar>
      <scsc-text tone="muted" size="sm" role="status">{{ status() }}</scsc-text>
    </div>
  \`,
})
export class TooltipToolbarDemo {
  /** The tooltip repeats the button's label exactly: sighted users read the name screen-reader users hear, and the directive adds no description. */
  protected readonly actions: Action[] = [
    { icon: 'download', label: 'Download PDF', done: 'Downloading Motion to Compel.pdf' },
    { icon: 'printer', label: 'Print', done: 'Sent to printer' },
    { icon: 'link', label: 'Copy link', done: 'Link copied' },
    { icon: 'stamp', label: 'Stamp as filed', done: 'Stamped FILED Oct 14, 2026' },
  ];
  protected readonly status = signal('');
}
`,html:`<div class="flex max-w-xl flex-col gap-2">
  <scsc-toolbar [bordered]="true">
    <scsc-icon name="file-text" size="sm" />
    <span class="min-w-0 truncate text-sm font-medium">Motion to Compel.pdf</span>
    <!-- The toolbar sits above the document, so the bubbles open downward. -->
    @for (a of actions; track a.icon) {
      <span
        slot="end"
        class="inline-block"
        [scscTooltip]="a.label"
        scscTooltipPosition="bottom"
      >
        <scsc-icon-button
          [icon]="a.icon"
          [label]="a.label"
          size="sm"
          (click)="status.set(a.done)"
        />
      </span>
    }
  </scsc-toolbar>
  <scsc-text tone="muted" size="sm" role="status">{{ status() }}</scsc-text>
</div>
`}};var ue={slug:`tooltip`,name:`Tooltip`,classes:[`ScscTooltip`],category:`Overlays & Feedback`,whenToUse:[`A short, one-line description of a control or an abbreviation, shown on hover and keyboard focus. Never essential instructions: touch users only see it on a long-press, and some screen-reader users turn descriptions off.`,'It is a directive: `<a scscTooltip="…">`, `<scsc-icon-button scscTooltip="…">`, or a wrapper `<span scscTooltip="…">` around a control. The bubble is drawn in an overlay, so it is never clipped by a scroll container or hidden under a dialog.',"Content that the user needs to read at length or click belongs in `scsc-popover`.","Pick `scscTooltipPosition` (`top`, `bottom`, `start`, `end`) for the usual case; the bubble flips to the opposite side when there is no room."],demos:[{id:`tooltip-icon-button`,title:`Icon button`,description:"The `label` names the button; the tooltip only describes it. When the tooltip repeats the label, no description is added, so the name is not read twice.",component:g,source:h[`tooltip-icon-button`]},{id:`tooltip-inline`,title:`Hover and focus`,description:'On a link and on an abbreviation inside running text. Hover shows the bubble after a short delay and you can move the pointer onto it; Tab shows it at once; Escape hides it. The abbreviation is not interactive, so it takes `tabindex="0"` to be reachable from the keyboard.',component:v,source:h[`tooltip-inline`]},{id:`tooltip-positions`,title:`Positions`,description:"One icon button per `scscTooltipPosition`. `start` and `end` follow the text direction.",component:C,source:h[`tooltip-positions`]},{id:`tooltip-options`,title:`Disabled, and a time that already says it`,description:'`scscTooltipDisabled` removes the bubble and the description. The `<time>` already contains the absolute date as visually hidden text, so `[scscTooltipDescribe]="false"` keeps the bubble visual and screen readers read the date once.',component:k,source:h[`tooltip-options`]},{id:`tooltip-toolbar`,title:`Icon toolbar`,description:"A document toolbar of icon buttons rendered from one array; each tooltip repeats the button `label` and opens below the bar.",component:S,source:h[`tooltip-toolbar`]}],a11y:["The text describes the control and never replaces its name (WCAG 2.5.3, 4.1.2). Name icon-only buttons with `label` / `aria-label`; in dev mode the directive warns when the control has no accessible name.",'Shows on pointer hover after `scscTooltipShowDelay` (300 ms) and at once when the control itself gets keyboard focus. Focus on another element inside the host does not show it. Hosts must be focusable or contain a focusable control; give a non-interactive host, such as an abbreviation, `tabindex="0"`.',"Hoverable, dismissible and persistent (WCAG 1.4.13): the bubble stays while the pointer is over the host or the bubble (`scscTooltipHideDelay`, 100 ms, covers the gap), until hover and focus leave, or until Escape. Escape does not move focus or the pointer.",`On touch, a long-press shows the bubble for a moment after the finger lifts. Tooltips do not replace visible labels on touch screens.`,`The bubble fades in with the motion tokens; under reduced motion it only fades.`],aria:['The bubble is a `role="tooltip"` element with a unique id. The control gets that id added to its `aria-describedby`; ids already there are kept.','No description is added when the text repeats the control\'s name, when `scscTooltipDescribe` is `false`, or when `scscTooltipDisabled` is set; the bubble then has `aria-hidden="true"`.',"While hidden, the bubble waits inside the host with `hidden`, so the description is there before the tooltip ever shows (screen-reader browse mode) and is never part of the host's name."],appMustProvide:["An accessible name for every control that carries a tooltip: visible text, `label`, or `aria-label`. The tooltip is only a description.",`Text that is not essential: anything the user must know belongs in the visible label or nearby text.`,'`[scscTooltipDescribe]="false"` where the name or content already contains the tooltip text (a `<time>` with visually hidden absolute time).'],keyboard:[{keys:`Tab`,action:`Focusing the control shows the tooltip at once; moving focus away hides it.`},{keys:`Escape`,action:`Hides an open tooltip; focus stays where it is. The key is consumed only while a tooltip is open, so the next Escape reaches the dialog or popover around it.`}],related:[`popover`,`icon-button`,`kbd`]};export{ue as TOOLTIP_DOCS};