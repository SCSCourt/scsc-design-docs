import{Fr as kn,Hs as y_,Ki as ye,Lo as d_,Ms as uc,Na as Jb,Ps as ut,Xa as Pv,Zo as i_,_s as o_,cn as UE,cs as lc,ha as Eg,ka as Ig,ln as UF,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var f={"button-group-segmented":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscButtonGroup } from '@scscourt/design';

type Range = 'day' | 'week' | 'month';

@Component({
  selector: 'app-button-group-segmented-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscButtonGroup],
  template: \`
    <scsc-button-group aria-label="Calendar range">
      @for (r of ranges; track r.value) {
        <scsc-button
          variant="neutral"
          [outline]="range() !== r.value"
          class="join-item"
          (click)="range.set(r.value)"
        >
          {{ r.label }}
        </scsc-button>
      }
    </scsc-button-group>
    <p class="mt-3 text-sm text-base-content/70" role="status">
      Showing hearings by {{ range() }}.
    </p>
  \`,
})
export class ButtonGroupSegmentedDemo {
  protected readonly ranges: { value: Range; label: string }[] = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
  ];
  protected readonly range = signal<Range>('week');
}
`,html:`<scsc-button-group aria-label="Calendar range">
  @for (r of ranges; track r.value) {
    <scsc-button
      variant="neutral"
      [outline]="range() !== r.value"
      class="join-item"
      (click)="range.set(r.value)"
    >
      {{ r.label }}
    </scsc-button>
  }
</scsc-button-group>
<p class="mt-3 text-sm text-base-content/70" role="status">
  Showing hearings by {{ range() }}.
</p>
`},"button-group-toolbar":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscButtonGroup, ScscHeading, ScscIconButton } from '@scscourt/design';

type View = 'list' | 'calendar';

@Component({
  selector: 'app-button-group-toolbar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscButtonGroup, ScscHeading, ScscIconButton],
  template: \`
    <div
      class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
    >
      <div class="flex flex-wrap items-center gap-3">
        <scsc-button-group aria-label="Change week">
          <scsc-icon-button
            icon="chevron-left"
            label="Previous week"
            variant="neutral"
            size="sm"
            class="join-item"
            (click)="offset.set(offset() - 1)"
          />
          <scsc-button variant="neutral" size="sm" class="join-item" (click)="offset.set(0)">
            This week
          </scsc-button>
          <scsc-icon-button
            icon="chevron-right"
            label="Next week"
            variant="neutral"
            size="sm"
            class="join-item"
            (click)="offset.set(offset() + 1)"
          />
        </scsc-button-group>
        <!-- Announced when the week changes, so the buttons' effect is heard. -->
        <scsc-heading [level]="3" [visualLevel]="5" aria-live="polite">
          Dept. 6 \xB7 {{ weekLabel() }}
        </scsc-heading>
      </div>

      <!-- Icon-only segments: scsc-icon-button has no outline, so the variant marks the choice. -->
      <scsc-button-group aria-label="Calendar view">
        <scsc-icon-button
          icon="list"
          label="List view"
          size="sm"
          class="join-item"
          [variant]="view() === 'list' ? 'neutral' : 'ghost'"
          (click)="view.set('list')"
        />
        <scsc-icon-button
          icon="calendar-days"
          label="Calendar view"
          size="sm"
          class="join-item"
          [variant]="view() === 'calendar' ? 'neutral' : 'ghost'"
          (click)="view.set('calendar')"
        />
      </scsc-button-group>
    </div>
    <p class="mt-3 text-sm text-base-content/70" role="status">Showing the {{ view() }} view.</p>
  \`,
})
export class ButtonGroupToolbarDemo {
  /** Weeks from the current court week (Monday 5 Oct 2026 here). */
  protected readonly offset = signal(0);
  protected readonly view = signal<View>('list');

  private readonly monday = new Date(2026, 9, 5);
  private readonly fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });

  protected readonly weekLabel = computed(() => {
    const start = new Date(this.monday);
    start.setDate(start.getDate() + this.offset() * 7);
    const end = new Date(start);
    end.setDate(end.getDate() + 4);
    return this.fmt.formatRange(start, end) + ', ' + end.getFullYear();
  });
}
`,html:`<div
  class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
>
  <div class="flex flex-wrap items-center gap-3">
    <scsc-button-group aria-label="Change week">
      <scsc-icon-button
        icon="chevron-left"
        label="Previous week"
        variant="neutral"
        size="sm"
        class="join-item"
        (click)="offset.set(offset() - 1)"
      />
      <scsc-button variant="neutral" size="sm" class="join-item" (click)="offset.set(0)">
        This week
      </scsc-button>
      <scsc-icon-button
        icon="chevron-right"
        label="Next week"
        variant="neutral"
        size="sm"
        class="join-item"
        (click)="offset.set(offset() + 1)"
      />
    </scsc-button-group>
    <!-- Announced when the week changes, so the buttons' effect is heard. -->
    <scsc-heading [level]="3" [visualLevel]="5" aria-live="polite">
      Dept. 6 \xB7 {{ weekLabel() }}
    </scsc-heading>
  </div>

  <!-- Icon-only segments: scsc-icon-button has no outline, so the variant marks the choice. -->
  <scsc-button-group aria-label="Calendar view">
    <scsc-icon-button
      icon="list"
      label="List view"
      size="sm"
      class="join-item"
      [variant]="view() === 'list' ? 'neutral' : 'ghost'"
      (click)="view.set('list')"
    />
    <scsc-icon-button
      icon="calendar-days"
      label="Calendar view"
      size="sm"
      class="join-item"
      [variant]="view() === 'calendar' ? 'neutral' : 'ghost'"
      (click)="view.set('calendar')"
    />
  </scsc-button-group>
</div>
<p class="mt-3 text-sm text-base-content/70" role="status">Showing the {{ view() }} view.</p>
`},"button-group-vertical":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscButtonGroup, ScscIcon, ScscIconButton } from '@scscourt/design';

@Component({
  selector: 'app-button-group-vertical-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscButtonGroup, ScscIcon, ScscIconButton],
  template: \`
    <div class="flex flex-wrap items-start gap-8">
      <scsc-button-group [vertical]="true" aria-label="Document zoom">
        <scsc-button variant="neutral" outline class="join-item"
          ><scsc-icon name="zoom-in" size="sm" /> Zoom in</scsc-button
        >
        <scsc-button variant="neutral" outline class="join-item"
          ><scsc-icon name="zoom-out" size="sm" /> Zoom out</scsc-button
        >
        <scsc-button variant="neutral" outline class="join-item"
          ><scsc-icon name="maximize" size="sm" /> Fit page</scsc-button
        >
      </scsc-button-group>

      <scsc-button-group aria-label="Docket pages">
        <scsc-icon-button
          icon="chevron-left"
          label="Previous page"
          variant="neutral"
          class="join-item"
        />
        <scsc-button variant="neutral" class="join-item">Page 3 of 12</scsc-button>
        <scsc-icon-button
          icon="chevron-right"
          label="Next page"
          variant="neutral"
          class="join-item"
        />
      </scsc-button-group>
    </div>
  \`,
})
export class ButtonGroupVerticalDemo {}
`,html:`<div class="flex flex-wrap items-start gap-8">
  <scsc-button-group [vertical]="true" aria-label="Document zoom">
    <scsc-button variant="neutral" outline class="join-item"
      ><scsc-icon name="zoom-in" size="sm" /> Zoom in</scsc-button
    >
    <scsc-button variant="neutral" outline class="join-item"
      ><scsc-icon name="zoom-out" size="sm" /> Zoom out</scsc-button
    >
    <scsc-button variant="neutral" outline class="join-item"
      ><scsc-icon name="maximize" size="sm" /> Fit page</scsc-button
    >
  </scsc-button-group>

  <scsc-button-group aria-label="Docket pages">
    <scsc-icon-button
      icon="chevron-left"
      label="Previous page"
      variant="neutral"
      class="join-item"
    />
    <scsc-button variant="neutral" class="join-item">Page 3 of 12</scsc-button>
    <scsc-icon-button
      icon="chevron-right"
      label="Next page"
      variant="neutral"
      class="join-item"
    />
  </scsc-button-group>
</div>
`}};var N=(s,a)=>a.value;function P(s,a){if(s&1){let e=d_();Ga(0,`scsc-button`,3),lc(`click`,function(){let u=Eg(e).$implicit,E=y_();return Ig(E.range.set(u.value))}),G_(1),Lf()}if(s&2){let e=a.$implicit,t=y_();Pv(`outline`,t.range()!==e.value),Jb(),$f(` `,e.label,` `)}}var w=class s{ranges=[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`month`,label:`Month`}];range=q(`week`);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-button-group-segmented-demo`]],decls:5,vars:1,consts:[[`aria-label`,`Calendar range`],[`variant`,`neutral`,1,`join-item`,3,`outline`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`],[`variant`,`neutral`,1,`join-item`,3,`click`,`outline`]],template:function(e,t){e&1&&(Ga(0,`scsc-button-group`,0),o_(1,P,2,2,`scsc-button`,1,N),Lf(),Ga(3,`p`,2),G_(4),Lf()),e&2&&(Jb(),i_(t.ranges),Jb(3),$f(` Showing hearings by `,t.range(),`. `))},dependencies:[sn,UF],encapsulation:2})};var y=class s{offset=q(0);view=q(`list`);monday=new Date(2026,9,5);fmt=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`});weekLabel=ut(()=>{let a=new Date(this.monday);a.setDate(a.getDate()+this.offset()*7);let e=new Date(a);return e.setDate(e.getDate()+4),this.fmt.formatRange(a,e)+`, `+e.getFullYear()});static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-button-group-toolbar-demo`]],decls:14,vars:6,consts:[[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`,`py-3`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`aria-label`,`Change week`],[`icon`,`chevron-left`,`label`,`Previous week`,`variant`,`neutral`,`size`,`sm`,1,`join-item`,3,`click`],[`variant`,`neutral`,`size`,`sm`,1,`join-item`,3,`click`],[`icon`,`chevron-right`,`label`,`Next week`,`variant`,`neutral`,`size`,`sm`,1,`join-item`,3,`click`],[`aria-live`,`polite`,3,`level`,`visualLevel`],[`aria-label`,`Calendar view`],[`icon`,`list`,`label`,`List view`,`size`,`sm`,1,`join-item`,3,`click`,`variant`],[`icon`,`calendar-days`,`label`,`Calendar view`,`size`,`sm`,1,`join-item`,3,`click`,`variant`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-button-group`,2)(3,`scsc-icon-button`,3),lc(`click`,function(){return t.offset.set(t.offset()-1)}),Lf(),Ga(4,`scsc-button`,4),lc(`click`,function(){return t.offset.set(0)}),G_(5,` This week `),Lf(),Ga(6,`scsc-icon-button`,5),lc(`click`,function(){return t.offset.set(t.offset()+1)}),Lf()(),Ga(7,`scsc-heading`,6),G_(8),Lf()(),Ga(9,`scsc-button-group`,7)(10,`scsc-icon-button`,8),lc(`click`,function(){return t.view.set(`list`)}),Lf(),Ga(11,`scsc-icon-button`,9),lc(`click`,function(){return t.view.set(`calendar`)}),Lf()()(),Ga(12,`p`,10),G_(13),Lf()),e&2&&(Jb(7),Pv(`level`,3)(`visualLevel`,5),Jb(),$f(` Dept. 6 · `,t.weekLabel(),` `),Jb(2),Pv(`variant`,t.view()===`list`?`neutral`:`ghost`),Jb(),Pv(`variant`,t.view()===`calendar`?`neutral`:`ghost`),Jb(2),$f(`Showing the `,t.view(),` view.`))},dependencies:[sn,UF,kn,UE],encapsulation:2})};var D=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-button-group-vertical-demo`]],decls:16,vars:1,consts:[[1,`flex`,`flex-wrap`,`items-start`,`gap-8`],[`aria-label`,`Document zoom`,3,`vertical`],[`variant`,`neutral`,`outline`,``,1,`join-item`],[`name`,`zoom-in`,`size`,`sm`],[`name`,`zoom-out`,`size`,`sm`],[`name`,`maximize`,`size`,`sm`],[`aria-label`,`Docket pages`],[`icon`,`chevron-left`,`label`,`Previous page`,`variant`,`neutral`,1,`join-item`],[`variant`,`neutral`,1,`join-item`],[`icon`,`chevron-right`,`label`,`Next page`,`variant`,`neutral`,1,`join-item`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-button-group`,1)(2,`scsc-button`,2),uc(3,`scsc-icon`,3),G_(4,` Zoom in`),Lf(),Ga(5,`scsc-button`,2),uc(6,`scsc-icon`,4),G_(7,` Zoom out`),Lf(),Ga(8,`scsc-button`,2),uc(9,`scsc-icon`,5),G_(10,` Fit page`),Lf()(),Ga(11,`scsc-button-group`,6),uc(12,`scsc-icon-button`,7),Ga(13,`scsc-button`,8),G_(14,`Page 3 of 12`),Lf(),uc(15,`scsc-icon-button`,9),Lf()()),e&2&&(Jb(),Pv(`vertical`,!0))},dependencies:[sn,UF,ye,UE],encapsulation:2})};var X={slug:`button-group`,name:`Button Group`,classes:[`ScscButtonGroup`],category:`Actions`,whenToUse:[`A small set of mutually exclusive views or ranges (Day / Week / Month, List / Calendar) where all options should be visible at once.`,'Every child needs `class="join-item"`; `scsc-button` and `scsc-icon-button` both accept it.',"Mark the selected item by toggling `outline` off on a `scsc-button`, or by switching the `variant` of a `scsc-icon-button` (it has no `outline`). For 5+ options, or options that change, use `scsc-tabs` or `scsc-select` instead.","It is a visual grouping, not a form control: for a required single choice that is submitted, use `scsc-radio`."],demos:[{id:`button-group-segmented`,title:`Segmented control`,description:"A signal holds the selection; the active item drops `outline`.",component:w,source:f[`button-group-segmented`]},{id:`button-group-vertical`,title:`Vertical and mixed`,description:'`[vertical]="true"` stacks the group; icon buttons and text buttons can share one group.',component:D,source:f[`button-group-vertical`]},{id:`button-group-toolbar`,title:`Calendar toolbar`,description:'Two groups in one header: week navigation with a live label, and an icon-only List / Calendar switch at `size="sm"`.',component:y,source:f[`button-group-toolbar`]}],a11y:['The host has `role="group"`; add an `aria-label` naming what the group controls ("Calendar range").',`Each child is a normal native button, so Tab moves between them and Enter/Space activates.`,"The selected state is currently visual only (outline or variant); mention the current selection in nearby text or a live region until `aria-pressed` is supported.",'When a button changes what the page shows (Previous week), put the new state in an `aria-live="polite"` label so the change is heard.'],related:[`button`,`icon-button`,`tabs`,`radio`]};export{X as BUTTON_GROUP_DOCS};