import{$t as SR,At as NP,Fr as kn,Hs as y_,I as EP,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,kt as NE,ms as nu,pi as sn,ra as Af,t as $E,ta as $f,va as G_,ws as r_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var f=class s{hearing=[{term:`Case`,value:`24CV012345`},{term:`Type`,value:`Motion for Summary Judgment`},{term:`When`,value:`Oct 14, 2026 · 9:00 AM`},{term:`Where`,value:`Dept. 5, Downtown Superior Court`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-popover-align-demo`]],decls:9,vars:2,consts:[[1,`flex`,`justify-between`],[`align`,`start`,`label`,`Hearing details`],[`slot`,`trigger`,`variant`,`ghost`],[1,`block`,`w-72`,3,`items`],[`align`,`end`,`label`,`Hearing details`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-popover`,1)(2,`scsc-button`,2),G_(3,`Hearing details (start)`),Lf(),uc(4,`scsc-description-list`,3),Lf(),Ga(5,`scsc-popover`,4)(6,`scsc-button`,2),G_(7,`Hearing details (end)`),Lf(),uc(8,`scsc-description-list`,3),Lf()()),e&2&&(Jb(4),Pv(`items`,r.hearing),Jb(4),Pv(`items`,r.hearing))},dependencies:[sn,NP,SR],encapsulation:2})};function R(s,n){if(s&1){let e=d_();Ga(0,`scsc-button`,6),lc(`click`,function(){let z=Eg(e).$implicit,V=y_();return Ig(V.run(z))}),G_(1),Lf()}if(s&2){let e=n.$implicit;Jb(),nD(e)}}function F(s,n){if(s&1&&(Ga(0,`p`,5),G_(1),Lf()),s&2){let e=y_();Jb(),$f(`Last action: `,e.last())}}var y=class s{actions=[`Add docket entry`,`Schedule hearing`,`Request file`,`Print case summary`];last=q(``);run(n){this.last.set(n)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-popover-basic-demo`]],decls:8,vars:1,consts:[[1,`flex`,`items-center`,`gap-3`],[`label`,`Case actions`],[`slot`,`trigger`,`variant`,`neutral`,`outline`,``],[1,`flex`,`flex-col`,`gap-1`],[`variant`,`ghost`,`size`,`sm`,`block`,``],[1,`text-sm`,`text-base-content/70`],[`variant`,`ghost`,`size`,`sm`,`block`,``,3,`click`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-popover`,1)(2,`scsc-button`,2),G_(3,`Case actions`),Lf(),Ga(4,`div`,3),o_(5,R,2,1,`scsc-button`,4,r_),Lf()(),JT(7,F,2,1,`p`,5),Lf()),e&2&&(Jb(5),i_(r.actions),Jb(2),t_(r.last()?7:-1))},dependencies:[sn,SR],encapsulation:2})};var W=(s,n)=>n.caseNumber;function j(s,n){if(s&1&&(Ga(0,`li`,1)(1,`scsc-text`,2),G_(2),Lf(),Ga(3,`div`,3)(4,`p`,4),G_(5),Lf(),Ga(6,`scsc-text`,5),G_(7),Lf()(),Ga(8,`scsc-popover`,6)(9,`scsc-button`,7),G_(10,` Details`),Ga(11,`span`,8),G_(12),Lf()(),Ga(13,`div`,9)(14,`scsc-heading`,10),G_(15),Lf(),uc(16,`scsc-description-list`,11),Ga(17,`a`,12),G_(18,`Open case`),Lf()()()()),s&2){let e=n.$implicit;Jb(2),nD(e.time),Jb(3),nD(e.title),Jb(2),nD(e.caseNumber),Jb(5),$f(` for `,e.caseNumber),Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(),nD(e.title),Jb(),Pv(`items`,e.details)}}var x=class s{hearings=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Property Mgmt.`,time:`9:00 AM`,details:[{term:`Hearing`,value:`Case Management Conference`},{term:`Judge`,value:`Hon. R. Whitfield`},{term:`Appearance`,value:`In person or remote`}]},{caseNumber:`24CV013002`,title:`Patel v. SVT Logistics`,time:`10:30 AM`,details:[{term:`Hearing`,value:`Motion to Compel`},{term:`Judge`,value:`Hon. L. Okafor`},{term:`Tentative ruling`,value:`Posted Oct 13`}]}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-popover-details-demo`]],decls:3,vars:0,consts:[[`aria-label`,`Dept. 7 hearings, Oct 14, 2026`,1,`max-w-xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-3`],[`tnum`,``,`bold`,``,1,`w-20`,`shrink-0`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`font-medium`],[`tone`,`muted`,`size`,`sm`,`tnum`,``,1,`block`],[`align`,`end`,`label`,`Hearing details`],[`slot`,`trigger`,`variant`,`ghost`,`size`,`sm`],[1,`sr-only`],[1,`flex`,`w-80`,`flex-col`,`gap-3`],[3,`level`,`visualLevel`],[3,`items`],[`scsc-button`,``,`variant`,`primary`,`size`,`sm`,`routerLink`,`.`]],template:function(e,r){e&1&&(Ga(0,`scsc-list`,0),o_(1,j,19,8,`li`,1,W),Lf()),e&2&&(Jb(),i_(r.hearings))},dependencies:[nu,sn,$E,NP,kn,EP,SR,NE],encapsulation:2})};var S={"popover-align":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscDescriptionList, ScscPopover } from '@scscourt/design';

@Component({
  selector: 'app-popover-align-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDescriptionList, ScscPopover],
  template: \`
    <div class="flex justify-between">
      <scsc-popover align="start" label="Hearing details">
        <scsc-button slot="trigger" variant="ghost">Hearing details (start)</scsc-button>
        <scsc-description-list [items]="hearing" class="block w-72" />
      </scsc-popover>

      <!-- End alignment keeps the panel inside the viewport when the trigger sits at the right edge. -->
      <scsc-popover align="end" label="Hearing details">
        <scsc-button slot="trigger" variant="ghost">Hearing details (end)</scsc-button>
        <scsc-description-list [items]="hearing" class="block w-72" />
      </scsc-popover>
    </div>
  \`,
})
export class PopoverAlignDemo {
  protected readonly hearing = [
    { term: 'Case', value: '24CV012345' },
    { term: 'Type', value: 'Motion for Summary Judgment' },
    { term: 'When', value: 'Oct 14, 2026 \xB7 9:00 AM' },
    { term: 'Where', value: 'Dept. 5, Downtown Superior Court' },
  ];
}
`,html:`<div class="flex justify-between">
  <scsc-popover align="start" label="Hearing details">
    <scsc-button slot="trigger" variant="ghost">Hearing details (start)</scsc-button>
    <scsc-description-list [items]="hearing" class="block w-72" />
  </scsc-popover>

  <!-- End alignment keeps the panel inside the viewport when the trigger sits at the right edge. -->
  <scsc-popover align="end" label="Hearing details">
    <scsc-button slot="trigger" variant="ghost">Hearing details (end)</scsc-button>
    <scsc-description-list [items]="hearing" class="block w-72" />
  </scsc-popover>
</div>
`},"popover-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscPopover } from '@scscourt/design';

@Component({
  selector: 'app-popover-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscPopover],
  template: \`
    <div class="flex items-center gap-3">
      <scsc-popover label="Case actions">
        <scsc-button slot="trigger" variant="neutral" outline>Case actions</scsc-button>
        <div class="flex flex-col gap-1">
          @for (a of actions; track a) {
            <scsc-button variant="ghost" size="sm" block (click)="run(a)">{{ a }}</scsc-button>
          }
        </div>
      </scsc-popover>
      @if (last()) {
        <p class="text-sm text-base-content/70">Last action: {{ last() }}</p>
      }
    </div>
  \`,
})
export class PopoverBasicDemo {
  protected readonly actions = [
    'Add docket entry',
    'Schedule hearing',
    'Request file',
    'Print case summary',
  ];
  protected readonly last = signal('');

  protected run(action: string): void {
    this.last.set(action);
  }
}
`,html:`<div class="flex items-center gap-3">
  <scsc-popover label="Case actions">
    <scsc-button slot="trigger" variant="neutral" outline>Case actions</scsc-button>
    <div class="flex flex-col gap-1">
      @for (a of actions; track a) {
        <scsc-button variant="ghost" size="sm" block (click)="run(a)">{{ a }}</scsc-button>
      }
    </div>
  </scsc-popover>
  @if (last()) {
    <p class="text-sm text-base-content/70">Last action: {{ last() }}</p>
  }
</div>
`},"popover-details":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButton,
  ScscButtonLink,
  ScscDescriptionList,
  ScscHeading,
  ScscList,
  ScscPopover,
  ScscText,
  type ScscDescriptionItem,
} from '@scscourt/design';

interface Hearing {
  caseNumber: string;
  title: string;
  time: string;
  details: ScscDescriptionItem[];
}

@Component({
  selector: 'app-popover-details-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscButton,
    ScscButtonLink,
    ScscDescriptionList,
    ScscHeading,
    ScscList,
    ScscPopover,
    ScscText,
  ],
  template: \`
    <scsc-list
      class="max-w-xl rounded-box border border-base-300 bg-base-100"
      aria-label="Dept. 7 hearings, Oct 14, 2026"
    >
      @for (h of hearings; track h.caseNumber) {
        <li class="flex items-center gap-3 px-4 py-3">
          <scsc-text tnum bold class="w-20 shrink-0">{{ h.time }}</scsc-text>
          <div class="min-w-0 flex-1">
            <p class="truncate font-medium">{{ h.title }}</p>
            <scsc-text tone="muted" size="sm" tnum class="block">{{ h.caseNumber }}</scsc-text>
          </div>
          <!-- The trigger sits at the right edge of the row, so the panel aligns to its end. -->
          <scsc-popover align="end" label="Hearing details">
            <scsc-button slot="trigger" variant="ghost" size="sm">
              Details<span class="sr-only"> for {{ h.caseNumber }}</span>
            </scsc-button>
            <div class="flex w-80 flex-col gap-3">
              <scsc-heading [level]="3" [visualLevel]="5">{{ h.title }}</scsc-heading>
              <scsc-description-list [items]="h.details" />
              <a scsc-button variant="primary" size="sm" routerLink=".">Open case</a>
            </div>
          </scsc-popover>
        </li>
      }
    </scsc-list>
  \`,
})
export class PopoverDetailsDemo {
  protected readonly hearings: Hearing[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Property Mgmt.',
      time: '9:00 AM',
      details: [
        { term: 'Hearing', value: 'Case Management Conference' },
        { term: 'Judge', value: 'Hon. R. Whitfield' },
        { term: 'Appearance', value: 'In person or remote' },
      ],
    },
    {
      caseNumber: '24CV013002',
      title: 'Patel v. SVT Logistics',
      time: '10:30 AM',
      details: [
        { term: 'Hearing', value: 'Motion to Compel' },
        { term: 'Judge', value: 'Hon. L. Okafor' },
        { term: 'Tentative ruling', value: 'Posted Oct 13' },
      ],
    },
  ];
}
`,html:`<scsc-list
  class="max-w-xl rounded-box border border-base-300 bg-base-100"
  aria-label="Dept. 7 hearings, Oct 14, 2026"
>
  @for (h of hearings; track h.caseNumber) {
    <li class="flex items-center gap-3 px-4 py-3">
      <scsc-text tnum bold class="w-20 shrink-0">{{ h.time }}</scsc-text>
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium">{{ h.title }}</p>
        <scsc-text tone="muted" size="sm" tnum class="block">{{ h.caseNumber }}</scsc-text>
      </div>
      <!-- The trigger sits at the right edge of the row, so the panel aligns to its end. -->
      <scsc-popover align="end" label="Hearing details">
        <scsc-button slot="trigger" variant="ghost" size="sm">
          Details<span class="sr-only"> for {{ h.caseNumber }}</span>
        </scsc-button>
        <div class="flex w-80 flex-col gap-3">
          <scsc-heading [level]="3" [visualLevel]="5">{{ h.title }}</scsc-heading>
          <scsc-description-list [items]="h.details" />
          <a scsc-button variant="primary" size="sm" routerLink=".">Open case</a>
        </div>
      </scsc-popover>
    </li>
  }
</scsc-list>
`}};var ae={slug:`popover`,name:`Popover`,classes:[`ScscPopover`],category:`Overlays & Feedback`,whenToUse:[`A small panel of actions or detail anchored to the thing it describes: case actions on a row, hearing details on a calendar chip.`,"For a plain list of menu items use `scsc-dropdown`; for a one-line hint use `scscTooltip`; for anything with a form, use `scsc-drawer` or `scsc-modal`.",'Project the trigger into `slot="trigger"`; everything else is the panel. The panel closes on Escape, when focus leaves it, and on a click outside.','The panel is positioned with CSS below the trigger and does not flip; use `align="end"` near the right edge of the viewport.'],demos:[{id:`popover-basic`,title:`Actions panel`,description:`A button trigger and a stack of ghost buttons inside the panel.`,component:y,source:S[`popover-basic`]},{id:`popover-align`,title:`Alignment`,description:'`align="start"` (default) vs `align="end"`; the panel hugs the chosen edge of the trigger.',component:f,source:S[`popover-align`]},{id:`popover-details`,title:`Row details`,description:"One popover per hearing row, aligned to the end of the row; the panel opens with a heading and ends with an `a[scsc-button]` link.",component:x,source:S[`popover-details`]}],a11y:['Use a real button as the trigger (`scsc-button`) so keyboard users can open it with Enter or Space; it gets `aria-expanded`, and `aria-controls` while the panel is open. When several rows share a trigger label, add visually hidden context ("Details for 24CV012345").','The panel is a `role="dialog"`: name it with `label` ("Hearing details") so assistive technology announces what opened.',`Opening leaves focus on the trigger, and the panel comes next in the Tab order. Escape closes the panel from the trigger or from anywhere inside it and returns focus to the trigger; tabbing out of the popover or a click outside closes it too (WCAG 1.4.13).`],keyboard:[{keys:`Enter / Space`,action:`On the trigger button: opens or closes the panel; focus stays on the trigger.`},{keys:`Tab / Shift + Tab`,action:`From the trigger into the panel and through its controls; moving focus out of the popover closes the panel.`},{keys:`Escape`,action:`Closes the panel and returns focus to the trigger.`}],appMustProvide:['A `label` that names the panel ("Hearing details").',`A trigger with text that says what it opens; add visually hidden context when rows repeat it ("Details for 24CV012345").`],related:[`dropdown`,`tooltip`,`modal`,`drawer`]};export{ae as POPOVER_DOCS};