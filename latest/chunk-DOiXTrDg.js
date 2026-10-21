import{Fr as kn,Na as Jb,Ps as ut,Ss as rD,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,kt as NE,ra as Af,ur as fA,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var g=class i{items=[{id:`view`,label:`View case`,icon:`eye`},{id:`edit`,label:`Edit`,icon:`pencil`},{id:`duplicate`,label:`Duplicate`,icon:`copy`},{id:`archive`,label:`Archive`,icon:`archive`,disabled:!0},{id:`delete`,label:`Delete`,icon:`trash-2`,divider:!0}];status=q(`Choose an action for 24CV012345.`);onSelect(t){let e=this.items.find(s=>s.id===t);this.status.set(`Selected "${e?.label}" for 24CV012345.`)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-dropdown-basic-demo`]],decls:3,vars:2,consts:[[`label`,`Actions`,3,`select`,`items`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`scsc-dropdown`,0),lc(`select`,function(b){return s.onSelect(b)}),Lf(),Ga(1,`p`,1),G_(2),Lf()),e&2&&(Pv(`items`,s.items),Jb(2),nD(s.status()))},dependencies:[fA],encapsulation:2})};var f=class i{filingTypes=[{id:`motion`,label:`Motion`},{id:`declaration`,label:`Declaration`},{id:`proof-of-service`,label:`Proof of service`},{id:`substitution`,label:`Substitution of attorney`},{id:`dismissal`,label:`Request for dismissal`,divider:!0}];status=q(``);start(t){let e=this.filingTypes.find(s=>s.id===t)?.label??t;this.status.set(`Starting a new `+e.toLowerCase()+` for 24CV012345.`)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-dropdown-create-demo`]],decls:9,vars:4,consts:[[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`,`py-3`],[3,`level`,`visualLevel`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[`label`,`New filing`,`triggerIcon`,`plus`,`triggerClass`,`btn-primary`,`align`,`end`,3,`select`,`items`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-heading`,1),G_(3,`Alvarez v. Pacific Transit Authority`),Lf(),Ga(4,`scsc-text`,2),G_(5,`24CV012345 · Civil · Dept. 6`),Lf()(),Ga(6,`scsc-dropdown`,3),lc(`select`,function(b){return s.start(b)}),Lf()(),Ga(7,`p`,4),G_(8),Lf()),e&2&&(Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(4),Pv(`items`,s.filingTypes),Jb(2),nD(s.status()))},dependencies:[fA,kn,NE],encapsulation:2})};var T=(i,t)=>t.number;function E(i,t){if(i&1&&(Ga(0,`li`,4)(1,`span`,5),G_(2),Lf(),Ga(3,`span`,6),G_(4),Lf()()),i&2){let e=t.$implicit;Jb(2),nD(e.number),Jb(2),nD(e.status)}}var y=class i{filters=[{id:`all`,label:`All`},{id:`open`,label:`Open`},{id:`stayed`,label:`Stayed`},{id:`closed`,label:`Closed`}];cases=[{number:`24CV012345`,status:`open`},{number:`24FL003210`,status:`stayed`},{number:`23PR001877`,status:`closed`},{number:`24CV014102`,status:`open`}];status=q(`all`);currentLabel=ut(()=>this.filters.find(t=>t.id===this.status())?.label??`All`);visible=ut(()=>this.status()===`all`?this.cases:this.cases.filter(t=>t.status===this.status()));static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-dropdown-filter-demo`]],decls:7,vars:4,consts:[[1,`flex`,`items-center`,`justify-between`,`rounded-box`,`border`,`border-base-300`,`px-4`,`py-2`],[1,`text-sm`],[`align`,`end`,`triggerIcon`,`filter`,`triggerClass`,`btn-ghost`,3,`select`,`label`,`items`],[1,`mt-3`,`divide-y`,`divide-base-300`,`text-sm`],[1,`flex`,`justify-between`,`py-1.5`],[1,`tnum`],[1,`capitalize`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2),Lf(),Ga(3,`scsc-dropdown`,2),lc(`select`,function(b){return s.status.set(b)}),Lf()(),Ga(4,`ul`,3),o_(5,E,5,2,`li`,4,T),Lf()),e&2&&(Jb(2),rD(``,s.visible().length,` of `,s.cases.length,` cases`),Jb(),Pv(`label`,`Status: `+s.currentLabel())(`items`,s.filters),Jb(2),i_(s.visible()))},dependencies:[fA],encapsulation:2})};var h={"dropdown-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscDropdown, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-dropdown-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDropdown],
  template: \`
    <scsc-dropdown label="Actions" [items]="items" (select)="onSelect($event)" />
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class DropdownBasicDemo {
  protected readonly items: ScscMenuItem[] = [
    { id: 'view', label: 'View case', icon: 'eye' },
    { id: 'edit', label: 'Edit', icon: 'pencil' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
    { id: 'archive', label: 'Archive', icon: 'archive', disabled: true },
    { id: 'delete', label: 'Delete', icon: 'trash-2', divider: true },
  ];
  protected readonly status = signal('Choose an action for 24CV012345.');

  protected onSelect(id: string): void {
    const item = this.items.find((i) => i.id === id);
    this.status.set(\`Selected "\${item?.label}" for 24CV012345.\`);
  }
}
`,html:`<scsc-dropdown label="Actions" [items]="items" (select)="onSelect($event)" />
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"dropdown-create":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscDropdown, ScscHeading, ScscText, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-dropdown-create-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDropdown, ScscHeading, ScscText],
  template: \`
    <div
      class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
    >
      <div>
        <scsc-heading [level]="3" [visualLevel]="5"
          >Alvarez v. Pacific Transit Authority</scsc-heading
        >
        <scsc-text size="sm" tone="muted" tnum>24CV012345 \xB7 Civil \xB7 Dept. 6</scsc-text>
      </div>
      <!-- The page's main action, so the trigger takes the primary style. -->
      <scsc-dropdown
        label="New filing"
        triggerIcon="plus"
        triggerClass="btn-primary"
        align="end"
        [items]="filingTypes"
        (select)="start($event)"
      />
    </div>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class DropdownCreateDemo {
  protected readonly filingTypes: ScscMenuItem[] = [
    { id: 'motion', label: 'Motion' },
    { id: 'declaration', label: 'Declaration' },
    { id: 'proof-of-service', label: 'Proof of service' },
    { id: 'substitution', label: 'Substitution of attorney' },
    { id: 'dismissal', label: 'Request for dismissal', divider: true },
  ];
  protected readonly status = signal('');

  protected start(id: string): void {
    const type = this.filingTypes.find((t) => t.id === id)?.label ?? id;
    // In an app: this.router.navigate(['/cases', '24CV012345', 'filings', 'new', id]);
    this.status.set('Starting a new ' + type.toLowerCase() + ' for 24CV012345.');
  }
}
`,html:`<div
  class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
>
  <div>
    <scsc-heading [level]="3" [visualLevel]="5"
      >Alvarez v. Pacific Transit Authority</scsc-heading
    >
    <scsc-text size="sm" tone="muted" tnum>24CV012345 \xB7 Civil \xB7 Dept. 6</scsc-text>
  </div>
  <!-- The page's main action, so the trigger takes the primary style. -->
  <scsc-dropdown
    label="New filing"
    triggerIcon="plus"
    triggerClass="btn-primary"
    align="end"
    [items]="filingTypes"
    (select)="start($event)"
  />
</div>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"dropdown-filter":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscDropdown, type ScscMenuItem } from '@scscourt/design';

type Status = 'all' | 'open' | 'stayed' | 'closed';

@Component({
  selector: 'app-dropdown-filter-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDropdown],
  template: \`
    <div class="flex items-center justify-between rounded-box border border-base-300 px-4 py-2">
      <span class="text-sm">{{ visible().length }} of {{ cases.length }} cases</span>
      <scsc-dropdown
        [label]="'Status: ' + currentLabel()"
        [items]="filters"
        align="end"
        triggerIcon="filter"
        triggerClass="btn-ghost"
        (select)="status.set($any($event))"
      />
    </div>
    <ul class="mt-3 divide-y divide-base-300 text-sm">
      @for (c of visible(); track c.number) {
        <li class="flex justify-between py-1.5">
          <span class="tnum">{{ c.number }}</span
          ><span class="capitalize text-base-content/70">{{ c.status }}</span>
        </li>
      }
    </ul>
  \`,
})
export class DropdownFilterDemo {
  protected readonly filters: ScscMenuItem[] = [
    { id: 'all', label: 'All' },
    { id: 'open', label: 'Open' },
    { id: 'stayed', label: 'Stayed' },
    { id: 'closed', label: 'Closed' },
  ];
  protected readonly cases: { number: string; status: Status }[] = [
    { number: '24CV012345', status: 'open' },
    { number: '24FL003210', status: 'stayed' },
    { number: '23PR001877', status: 'closed' },
    { number: '24CV014102', status: 'open' },
  ];
  protected readonly status = signal<Status>('all');
  protected readonly currentLabel = computed(
    () => this.filters.find((f) => f.id === this.status())?.label ?? 'All',
  );
  protected readonly visible = computed(() =>
    this.status() === 'all' ? this.cases : this.cases.filter((c) => c.status === this.status()),
  );
}
`,html:`<div class="flex items-center justify-between rounded-box border border-base-300 px-4 py-2">
  <span class="text-sm">{{ visible().length }} of {{ cases.length }} cases</span>
  <scsc-dropdown
    [label]="'Status: ' + currentLabel()"
    [items]="filters"
    align="end"
    triggerIcon="filter"
    triggerClass="btn-ghost"
    (select)="status.set($any($event))"
  />
</div>
<ul class="mt-3 divide-y divide-base-300 text-sm">
  @for (c of visible(); track c.number) {
    <li class="flex justify-between py-1.5">
      <span class="tnum">{{ c.number }}</span
      ><span class="capitalize text-base-content/70">{{ c.status }}</span>
    </li>
  }
</ul>
`}};var K={slug:`dropdown`,name:`Dropdown`,classes:[`ScscDropdown`],category:`Actions`,whenToUse:[`Three or more secondary actions on a record (View, Edit, Duplicate, Delete) that would clutter the header as separate buttons.`,"Items are data (`ScscMenuItem[]`), so the same menu can be reused; handle `(select)` with the item `id`.",'A primary trigger (`triggerClass="btn-primary"`) suits a create action with several kinds, such as New filing → Motion, Declaration….',"Put destructive items last and give them `separatorBefore: true` (formerly `divider`) so they are visually separated.","It is `scsc-menu` with a text trigger: for an icon-only overflow trigger, checkbox or radio items with `(checkedChange)`, or a trigger of your own, use `scsc-menu` directly.","For picking a value that is submitted with a form use `scsc-select`; for navigation use `scsc-navbar` menus; for arbitrary content use `scsc-popover`."],demos:[{id:`dropdown-basic`,title:`Actions menu`,description:`Icons, a disabled item and a divider before the destructive action.`,component:g,source:h[`dropdown-basic`]},{id:`dropdown-filter`,title:`Filter at the end of a toolbar`,description:'`align="end"`, a trigger icon and a ghost trigger; the label reflects the current choice.',component:y,source:h[`dropdown-filter`]},{id:`dropdown-create`,title:`Create menu in a page header`,description:'The page’s main action as a primary trigger with `triggerIcon="plus"`; `(select)` starts the chosen filing type.',component:f,source:h[`dropdown-create`]}],a11y:['A WAI-ARIA **menu button** (it renders `scsc-menu`): the trigger is a native `<button>` with `aria-haspopup="menu"`, `aria-expanded` and, while open, `aria-controls`. A click, Enter, Space or ArrowDown opens the `role="menu"` and moves focus to its first item; focus alone never opens it.','The trigger is named by its visible `label`, and the menu by the trigger, so make that label specific ("New filing", "Status: Open") rather than a bare "Menu".',"One Tab stop: the arrow keys, Home/End and type-ahead move between items. Escape closes the menu and returns focus to the trigger; Tab or a click outside closes it (WCAG 1.4.13). Choosing an item closes the menu and returns focus to the trigger before `select` emits, so a dialog opened from the handler returns focus there too.",'Disabled items stay focusable with `aria-disabled`, so a reason (`disabled: "…"`) can be read; it shows under the label.',`The menu renders in the top layer, so it is never clipped by a scroll container. See Menu for the full model.`],keyboard:[{keys:`Enter / Space / ArrowDown`,action:`On the trigger: opens the menu and focuses the first item.`},{keys:`ArrowUp`,action:`On the trigger: opens the menu and focuses the last item.`},{keys:`ArrowDown / ArrowUp, Home / End`,action:`Moves between items, wrapping at the ends; Home and End jump to the first and last.`},{keys:`A–Z, 0–9`,action:`Moves to the next item whose label starts with what was typed.`},{keys:`Enter / Space (on an item)`,action:"Closes the menu, returns focus to the trigger and emits `select` with the item `id` (a disabled item does nothing)."},{keys:`Escape`,action:`Closes the menu and returns focus to the trigger.`},{keys:`Tab / Shift + Tab`,action:`Closes the menu and moves to the next / previous control after the trigger.`}],appMustProvide:['A specific trigger `label` ("New filing", "Status: Open"), not a bare "Menu".','A reason for each disabled item (`disabled: "…"`).'],related:[`menu`,`button`,`icon-button`,`popover`,`select`,`command-palette`]};export{K as DROPDOWN_DOCS};