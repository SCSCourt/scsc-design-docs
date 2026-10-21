import{Mr as jn,Na as Jb,ds as nD,pi as sn,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var d={"badge-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBadge } from '@scscourt/design';

@Component({
  selector: 'app-badge-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <scsc-badge tone="primary" soft size="xs">Extra small</scsc-badge>
      <scsc-badge tone="primary" soft size="sm">Small</scsc-badge>
      <scsc-badge tone="primary" soft size="md">Medium</scsc-badge>
      <scsc-badge tone="primary" soft size="lg">Large</scsc-badge>
    </div>
  \`,
})
export class BadgeSizesDemo {}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <scsc-badge tone="primary" soft size="xs">Extra small</scsc-badge>
  <scsc-badge tone="primary" soft size="sm">Small</scsc-badge>
  <scsc-badge tone="primary" soft size="md">Medium</scsc-badge>
  <scsc-badge tone="primary" soft size="lg">Large</scsc-badge>
</div>
`},"badge-styles":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBadge, ScscButton } from '@scscourt/design';

@Component({
  selector: 'app-badge-styles-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscButton],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <scsc-badge tone="warning">Solid</scsc-badge>
      <scsc-badge tone="warning" soft>Soft</scsc-badge>
      <scsc-badge tone="warning" outline>Outline</scsc-badge>
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <scsc-button variant="ghost">
        Notifications <scsc-badge tone="primary" size="sm">{{ unread }}</scsc-badge>
      </scsc-button>
      <span class="inline-flex items-center gap-2 text-sm">
        24CV012345 <scsc-badge tone="success" soft size="sm">Active</scsc-badge>
      </span>
    </div>
  \`,
})
export class BadgeStylesDemo {
  protected readonly unread = 3;
}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <scsc-badge tone="warning">Solid</scsc-badge>
  <scsc-badge tone="warning" soft>Soft</scsc-badge>
  <scsc-badge tone="warning" outline>Outline</scsc-badge>
</div>
<div class="mt-4 flex flex-wrap items-center gap-3">
  <scsc-button variant="ghost">
    Notifications <scsc-badge tone="primary" size="sm">{{ unread }}</scsc-badge>
  </scsc-button>
  <span class="inline-flex items-center gap-2 text-sm">
    24CV012345 <scsc-badge tone="success" soft size="sm">Active</scsc-badge>
  </span>
</div>
`},"badge-tones":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBadge } from '@scscourt/design';

@Component({
  selector: 'app-badge-tones-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <scsc-badge tone="neutral">Neutral</scsc-badge>
      <scsc-badge tone="primary">Primary</scsc-badge>
      <scsc-badge tone="secondary">Secondary</scsc-badge>
      <scsc-badge tone="info">Info</scsc-badge>
      <scsc-badge tone="success">Success</scsc-badge>
      <scsc-badge tone="warning">Warning</scsc-badge>
      <scsc-badge tone="error">Error</scsc-badge>
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <scsc-badge tone="neutral" soft>Civil</scsc-badge>
      <scsc-badge tone="primary" soft>Unlimited</scsc-badge>
      <scsc-badge tone="secondary" soft>Priority</scsc-badge>
      <scsc-badge tone="info" soft>Filed</scsc-badge>
      <scsc-badge tone="success" soft>Active</scsc-badge>
      <scsc-badge tone="warning" soft>Pending</scsc-badge>
      <scsc-badge tone="error" soft>Overdue</scsc-badge>
    </div>
  \`,
})
export class BadgeTonesDemo {}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <scsc-badge tone="neutral">Neutral</scsc-badge>
  <scsc-badge tone="primary">Primary</scsc-badge>
  <scsc-badge tone="secondary">Secondary</scsc-badge>
  <scsc-badge tone="info">Info</scsc-badge>
  <scsc-badge tone="success">Success</scsc-badge>
  <scsc-badge tone="warning">Warning</scsc-badge>
  <scsc-badge tone="error">Error</scsc-badge>
</div>
<div class="mt-4 flex flex-wrap items-center gap-2">
  <scsc-badge tone="neutral" soft>Civil</scsc-badge>
  <scsc-badge tone="primary" soft>Unlimited</scsc-badge>
  <scsc-badge tone="secondary" soft>Priority</scsc-badge>
  <scsc-badge tone="info" soft>Filed</scsc-badge>
  <scsc-badge tone="success" soft>Active</scsc-badge>
  <scsc-badge tone="warning" soft>Pending</scsc-badge>
  <scsc-badge tone="error" soft>Overdue</scsc-badge>
</div>
`}};var r=class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-badge-sizes-demo`]],decls:9,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`tone`,`primary`,`soft`,``,`size`,`xs`],[`tone`,`primary`,`soft`,``,`size`,`sm`],[`tone`,`primary`,`soft`,``,`size`,`md`],[`tone`,`primary`,`soft`,``,`size`,`lg`]],template:function(a,l){a&1&&(Ga(0,`div`,0)(1,`scsc-badge`,1),G_(2,`Extra small`),Lf(),Ga(3,`scsc-badge`,2),G_(4,`Small`),Lf(),Ga(5,`scsc-badge`,3),G_(6,`Medium`),Lf(),Ga(7,`scsc-badge`,4),G_(8,`Large`),Lf()())},dependencies:[jn],encapsulation:2})};var g=class n{unread=3;static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-badge-styles-demo`]],decls:16,vars:1,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`tone`,`warning`],[`tone`,`warning`,`soft`,``],[`tone`,`warning`,`outline`,``],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`ghost`],[`tone`,`primary`,`size`,`sm`],[1,`inline-flex`,`items-center`,`gap-2`,`text-sm`],[`tone`,`success`,`soft`,``,`size`,`sm`]],template:function(a,l){a&1&&(Ga(0,`div`,0)(1,`scsc-badge`,1),G_(2,`Solid`),Lf(),Ga(3,`scsc-badge`,2),G_(4,`Soft`),Lf(),Ga(5,`scsc-badge`,3),G_(6,`Outline`),Lf()(),Ga(7,`div`,4)(8,`scsc-button`,5),G_(9,` Notifications `),Ga(10,`scsc-badge`,6),G_(11),Lf()(),Ga(12,`span`,7),G_(13,` 24CV012345 `),Ga(14,`scsc-badge`,8),G_(15,`Active`),Lf()()()),a&2&&(Jb(11),nD(l.unread))},dependencies:[jn,sn],encapsulation:2})};var N={slug:`badge`,name:`Badge`,classes:[`ScscBadge`],category:`Data Display`,whenToUse:[`Short metadata next to a thing: a count, a category, a state word. Never a sentence.`,"Prefer `soft` for status-like labels; the solid fill is loud and belongs on counts and the one element that must stand out.","Case and event statuses with a fixed court colour mapping (Active, Dismissed, Sealed…) use `scsc-status-badge` so they look the same in every app.","A quieter status indicator beside text is `scsc-status-dot`; a removable chip is `scsc-tag`."],demos:[{id:`badge-tones`,title:`Tones`,description:"Seven tones, solid (top) and `soft` (bottom).",component:class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Af({type:n,selectors:[[`app-badge-tones-demo`]],decls:30,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`tone`,`neutral`],[`tone`,`primary`],[`tone`,`secondary`],[`tone`,`info`],[`tone`,`success`],[`tone`,`warning`],[`tone`,`error`],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`tone`,`neutral`,`soft`,``],[`tone`,`primary`,`soft`,``],[`tone`,`secondary`,`soft`,``],[`tone`,`info`,`soft`,``],[`tone`,`success`,`soft`,``],[`tone`,`warning`,`soft`,``],[`tone`,`error`,`soft`,``]],template:function(a,l){a&1&&(Ga(0,`div`,0)(1,`scsc-badge`,1),G_(2,`Neutral`),Lf(),Ga(3,`scsc-badge`,2),G_(4,`Primary`),Lf(),Ga(5,`scsc-badge`,3),G_(6,`Secondary`),Lf(),Ga(7,`scsc-badge`,4),G_(8,`Info`),Lf(),Ga(9,`scsc-badge`,5),G_(10,`Success`),Lf(),Ga(11,`scsc-badge`,6),G_(12,`Warning`),Lf(),Ga(13,`scsc-badge`,7),G_(14,`Error`),Lf()(),Ga(15,`div`,8)(16,`scsc-badge`,9),G_(17,`Civil`),Lf(),Ga(18,`scsc-badge`,10),G_(19,`Unlimited`),Lf(),Ga(20,`scsc-badge`,11),G_(21,`Priority`),Lf(),Ga(22,`scsc-badge`,12),G_(23,`Filed`),Lf(),Ga(24,`scsc-badge`,13),G_(25,`Active`),Lf(),Ga(26,`scsc-badge`,14),G_(27,`Pending`),Lf(),Ga(28,`scsc-badge`,15),G_(29,`Overdue`),Lf()())},dependencies:[jn],encapsulation:2})},source:d[`badge-tones`]},{id:`badge-styles`,title:`Solid, soft, outline and counts`,description:'`outline` wins over `soft` when both are set. `size="sm"` fits inside buttons and inline text.',component:g,source:d[`badge-styles`]},{id:`badge-sizes`,title:`Sizes`,description:"`xs` and `sm` fit inside table cells, buttons and nav items; `md` is the default; `lg` suits a standalone count.",component:r,source:d[`badge-sizes`]}],a11y:[`A badge is plain inline text; its colour is not announced. Make the text itself carry the meaning ("Overdue", not "!").`,'For a count badge on a button, the count becomes part of the button\'s accessible name ("Notifications 3") — good. Add `aria-label` on the button if the visual is ambiguous.'],related:[`status-badge`,`status-dot`,`tag`]};export{N as BADGE_DOCS};