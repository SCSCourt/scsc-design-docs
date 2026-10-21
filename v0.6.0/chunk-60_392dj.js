import{Fr as kn,Hs as y_,Ma as JT,Ms as uc,Na as Jb,No as cc,Rt as OR,Un as Za,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ks as t_,pi as sn,ra as Af,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var R=(t,s)=>s.value;function M(t,s){if(t&1&&(Ga(0,`option`,3),G_(1),Lf()),t&2){let e=s.$implicit,l=y_();Pv(`value`,e.value)(`selected`,e.value===l.preset()),Jb(),nD(e.label)}}var h=class t{preset=q(`card-grid`);presets=[{value:`table-rows`,label:`Table rows`},{value:`card-grid`,label:`Card grid`},{value:`detail`,label:`Detail record`},{value:`form`,label:`Form`},{value:`list`,label:`List`},{value:`chart`,label:`Chart`}];choose(s){this.preset.set(s.target.value)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-skeleton-presets-gallery-demo`]],decls:6,vars:1,consts:[[1,`flex`,`flex-col`,`gap-4`],[`label`,`Preset`,`for`,`skeleton-preset-choice`,1,`max-w-xs`],[`scsc-select`,``,`id`,`skeleton-preset-choice`,3,`change`],[3,`value`,`selected`],[3,`preset`]],template:function(e,l){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(F){return l.choose(F)}),o_(3,M,2,3,`option`,3,R),Lf()(),uc(5,`scsc-skeleton-preset`,4),Lf()),e&2&&(Jb(3),i_(l.presets),Jb(2),Pv(`preset`,l.preset()))},dependencies:[Vn,On,OR],encapsulation:2})};function A(t,s){t&1&&uc(0,`scsc-skeleton-preset`,4),t&2&&Pv(`rows`,4)(`columns`,4)}function O(t,s){if(t&1&&uc(0,`scsc-table`,5),t&2){let e=y_();Pv(`columns`,e.columns)(`rows`,e.filings)}}var f=class t{loading=q(!1);columns=[{key:`caseNumber`,header:`Case`},{key:`title`,header:`Filing`},{key:`filed`,header:`Filed`},{key:`status`,header:`Status`}];filings=[{caseNumber:`24CV012345`,title:`Motion to compel`,filed:`Sep 28`,status:`Pending`},{caseNumber:`24CV013002`,title:`Proof of service`,filed:`Sep 27`,status:`Accepted`},{caseNumber:`23CV008812`,title:`Amended complaint`,filed:`Sep 26`,status:`Accepted`},{caseNumber:`24CV010477`,title:`Request for dismissal`,filed:`Sep 25`,status:`Rejected`}];constructor(){this.reload()}reload(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),1500)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-skeleton-presets-table-demo`]],decls:9,vars:5,consts:[[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[3,`level`,`visualLevel`],[`size`,`sm`,`variant`,`ghost`,3,`click`,`disabled`],[`preset`,`table-rows`,`label`,`Loading filings`,3,`rows`,`columns`],[3,`columns`,`rows`]],template:function(e,l){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3,`Recent filings`),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return l.reload()}),G_(5,` Reload `),Lf()(),Ga(6,`div`),JT(7,A,1,2,`scsc-skeleton-preset`,4)(8,O,1,2,`scsc-table`,5),Lf()()),e&2&&(Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(2),Pv(`disabled`,l.loading()),Jb(2),cc(`aria-busy`,l.loading()),Jb(),t_(l.loading()?7:8))},dependencies:[sn,kn,OR,Za],encapsulation:2})};var b={"skeleton-presets-gallery":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscFormField,
  ScscSelect,
  ScscSkeletonPreset,
  ScscSkeletonPresetName,
} from '@scscourt/design';

@Component({
  selector: 'app-skeleton-presets-gallery-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSelect, ScscSkeletonPreset],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-form-field label="Preset" for="skeleton-preset-choice" class="max-w-xs">
        <select scsc-select id="skeleton-preset-choice" (change)="choose($event)">
          @for (p of presets; track p.value) {
            <option [value]="p.value" [selected]="p.value === preset()">{{ p.label }}</option>
          }
        </select>
      </scsc-form-field>
      <scsc-skeleton-preset [preset]="preset()" />
    </div>
  \`,
})
export class SkeletonPresetsGalleryDemo {
  protected readonly preset = signal<ScscSkeletonPresetName>('card-grid');
  protected readonly presets: { value: ScscSkeletonPresetName; label: string }[] = [
    { value: 'table-rows', label: 'Table rows' },
    { value: 'card-grid', label: 'Card grid' },
    { value: 'detail', label: 'Detail record' },
    { value: 'form', label: 'Form' },
    { value: 'list', label: 'List' },
    { value: 'chart', label: 'Chart' },
  ];

  protected choose(event: Event): void {
    this.preset.set((event.target as HTMLSelectElement).value as ScscSkeletonPresetName);
  }
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-form-field label="Preset" for="skeleton-preset-choice" class="max-w-xs">
    <select scsc-select id="skeleton-preset-choice" (change)="choose($event)">
      @for (p of presets; track p.value) {
        <option [value]="p.value" [selected]="p.value === preset()">{{ p.label }}</option>
      }
    </select>
  </scsc-form-field>
  <scsc-skeleton-preset [preset]="preset()" />
</div>
`},"skeleton-presets-table":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscColumn,
  ScscHeading,
  ScscSkeletonPreset,
  ScscTable,
} from '@scscourt/design';

interface Filing {
  caseNumber: string;
  title: string;
  filed: string;
  status: string;
}

@Component({
  selector: 'app-skeleton-presets-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHeading, ScscSkeletonPreset, ScscTable],
  template: \`
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <scsc-heading [level]="3" [visualLevel]="5">Recent filings</scsc-heading>
        <scsc-button size="sm" variant="ghost" [disabled]="loading()" (click)="reload()">
          Reload
        </scsc-button>
      </div>
      <!-- aria-busy on the region; the preset is aria-hidden and says "Loading filings" once. -->
      <div [attr.aria-busy]="loading()">
        @if (loading()) {
          <scsc-skeleton-preset
            preset="table-rows"
            [rows]="4"
            [columns]="4"
            label="Loading filings"
          />
        } @else {
          <scsc-table [columns]="columns" [rows]="filings" />
        }
      </div>
    </div>
  \`,
})
export class SkeletonPresetsTableDemo {
  protected readonly loading = signal(false);
  protected readonly columns: ScscColumn<Filing>[] = [
    { key: 'caseNumber', header: 'Case' },
    { key: 'title', header: 'Filing' },
    { key: 'filed', header: 'Filed' },
    { key: 'status', header: 'Status' },
  ];
  protected readonly filings: Filing[] = [
    { caseNumber: '24CV012345', title: 'Motion to compel', filed: 'Sep 28', status: 'Pending' },
    { caseNumber: '24CV013002', title: 'Proof of service', filed: 'Sep 27', status: 'Accepted' },
    { caseNumber: '23CV008812', title: 'Amended complaint', filed: 'Sep 26', status: 'Accepted' },
    {
      caseNumber: '24CV010477',
      title: 'Request for dismissal',
      filed: 'Sep 25',
      status: 'Rejected',
    },
  ];

  constructor() {
    this.reload();
  }

  protected reload(): void {
    this.loading.set(true);
    // Replace with your data service.
    setTimeout(() => this.loading.set(false), 1500);
  }
}
`,html:`<div class="flex flex-col gap-3">
  <div class="flex items-center justify-between gap-3">
    <scsc-heading [level]="3" [visualLevel]="5">Recent filings</scsc-heading>
    <scsc-button size="sm" variant="ghost" [disabled]="loading()" (click)="reload()">
      Reload
    </scsc-button>
  </div>
  <!-- aria-busy on the region; the preset is aria-hidden and says "Loading filings" once. -->
  <div [attr.aria-busy]="loading()">
    @if (loading()) {
      <scsc-skeleton-preset
        preset="table-rows"
        [rows]="4"
        [columns]="4"
        label="Loading filings"
      />
    } @else {
      <scsc-table [columns]="columns" [rows]="filings" />
    }
  </div>
</div>
`}};var Z={slug:`skeleton-presets`,name:`Skeleton Presets`,classes:[`ScscSkeletonPreset`],category:`Overlays & Feedback`,whenToUse:["Loading placeholders for the common shapes, so each page does not hand-build them from `scsc-skeleton`: `table-rows`, `card-grid`, `detail`, `form`, `list`, `chart`.","`rows` sets how many items (rows, cards, fields, bars); `columns` sets the table columns or cards per row. Keep it close to what will arrive, so the page barely moves at the swap.","Swap with `@if (loading()) { … } @else { … }` so the placeholder leaves the DOM, and put `aria-busy` on the region.","`table-rows` draws the frame of `scsc-table` (header row, 1rem × 0.75rem cells), so the table replaces it in place.","For a whole app shell, use `scsc-workspace-skeleton`; for one-off shapes, compose `scsc-skeleton` yourself."],demos:[{id:`skeleton-presets-table`,title:`Table rows, swapped for the table`,description:"Four rows by four columns while `loading()` is true; press Reload to see the swap.",component:f,source:b[`skeleton-presets-table`]},{id:`skeleton-presets-gallery`,title:`Every preset`,description:`Pick a preset to see its default size.`,component:h,source:b[`skeleton-presets-gallery`]}],a11y:['Everything the preset draws is `aria-hidden`. Give it a `label` to announce one polite status when it appears ("Loading filings"), or announce the wait elsewhere; do not do both.',"The `label` goes through `ScscAnnouncer`'s shared live region, outside the `aria-busy` region, because some screen readers hold back live regions inside busy content.",'The shimmer stops under reduced motion: the OS setting, or `data-motion="reduced"` on `<html>`.',`Keep the counts small (3–5 items): screen-reader users hear nothing of them, but sighted users read a long skeleton as a long wait.`],aria:['A wrapper with `aria-hidden="true"` around every placeholder.',"With `label` set, a polite announcement through the shared live region when the preset appears or the label changes."],appMustProvide:['`aria-busy="true"` on the region being replaced while it loads.',"A loading message, through `label` or the page, when the wait is more than a moment."],related:[`skeleton`,`workspace-skeleton`,`table`,`card`,`spinner`]};export{Z as SKELETON_PRESETS_DOCS};