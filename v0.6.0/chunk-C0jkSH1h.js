import{Fr as kn,Hs as y_,Lo as d_,Ms as uc,Na as Jb,Xa as Pv,Zo as i_,_s as o_,cn as UE,cs as lc,ds as nD,ha as Eg,ka as Ig,kt as NE,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var F=(a,i)=>i.id;function z(a,i){if(a&1){let e=d_();Ga(0,`li`,1)(1,`span`,3),G_(2),Lf(),Ga(3,`span`,4),G_(4),Lf(),Ga(5,`scsc-icon-button`,5),lc(`click`,function(){let c=Eg(e).$implicit,g=y_();return Ig(g.act(`Downloaded`,c))}),Lf(),Ga(6,`scsc-icon-button`,6),lc(`click`,function(){let c=Eg(e).$implicit,g=y_();return Ig(g.act(`Editing`,c))}),Lf(),Ga(7,`scsc-icon-button`,7),lc(`click`,function(){let c=Eg(e).$implicit,g=y_();return Ig(g.remove(c))}),Lf()()}if(a&2){let e=i.$implicit;Jb(2),nD(e.id),Jb(2),nD(e.title),Jb(),Pv(`label`,`Download `+e.id),Jb(),Pv(`label`,`Edit `+e.id)(`disabled`,e.locked),Jb(),Pv(`label`,`Delete `+e.id)(`disabled`,e.locked)}}var y=class a{filings=q([{id:`DOC-1041`,title:`Complaint — 24CV012345`,locked:!0},{id:`DOC-1042`,title:`Proof of service`,locked:!1},{id:`DOC-1043`,title:`Request for entry of default`,locked:!1}]);status=q(`Filed documents are locked and cannot be edited or deleted.`);act(i,e){this.status.set(`${i} ${e.id}.`)}remove(i){this.filings.update(e=>e.filter(n=>n.id!==i.id)),this.status.set(`Deleted ${i.id}.`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-icon-button-row-actions-demo`]],decls:5,vars:1,consts:[[1,`divide-y`,`divide-base-300`,`rounded-box`,`border`,`border-base-300`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-2`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`],[1,`w-24`,`text-sm`,`tnum`],[1,`grow`,`text-sm`],[`icon`,`download`,`size`,`sm`,3,`click`,`label`],[`icon`,`pencil`,`size`,`sm`,3,`click`,`label`,`disabled`],[`icon`,`trash-2`,`size`,`sm`,3,`click`,`label`,`disabled`]],template:function(e,n){e&1&&(Ga(0,`ul`,0),o_(1,z,8,7,`li`,1,F),Lf(),Ga(3,`p`,2),G_(4),Lf()),e&2&&(Jb(),i_(n.filings()),Jb(3),nD(n.status()))},dependencies:[UE],encapsulation:2})};var v=class a{bookmarked=q(!1);status=q(``);toggleBookmark(){this.bookmarked.update(i=>!i),this.status.set(this.bookmarked()?`Case bookmarked.`:`Bookmark removed.`)}refreshing=q(!1);refresh(){this.refreshing.set(!0),setTimeout(()=>{this.refreshing.set(!1),this.status.set(`Docket refreshed.`)},1500)}copy(){navigator.clipboard?.writeText(`24FL003210`).catch(()=>{}),this.status.set(`Copied 24FL003210 to the clipboard.`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-icon-button-toggle-demo`]],decls:12,vars:7,consts:[[1,`flex`,`max-w-xl`,`items-start`,`justify-between`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`,`py-3`],[3,`level`,`visualLevel`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[1,`flex`,`items-center`,`gap-1`],[`label`,`Bookmark this case`,3,`click`,`icon`,`ariaPressed`,`variant`],[`icon`,`copy`,`label`,`Copy case number`,3,`click`],[`icon`,`refresh-cw`,`label`,`Refresh docket`,3,`click`,`loading`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-heading`,1),G_(3,`In re Marriage of Nguyen`),Lf(),Ga(4,`scsc-text`,2),G_(5,`24FL003210 · Family · Dept. 12`),Lf()(),Ga(6,`div`,3)(7,`scsc-icon-button`,4),lc(`click`,function(){return n.toggleBookmark()}),Lf(),Ga(8,`scsc-icon-button`,5),lc(`click`,function(){return n.copy()}),Lf(),Ga(9,`scsc-icon-button`,6),lc(`click`,function(){return n.refresh()}),Lf()()(),Ga(10,`p`,7),G_(11),Lf()),e&2&&(Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(5),Pv(`icon`,n.bookmarked()?`bookmark-check`:`bookmark`)(`ariaPressed`,n.bookmarked())(`variant`,n.bookmarked()?`primary`:`ghost`),Jb(2),Pv(`loading`,n.refreshing()),Jb(2),nD(n.status()))},dependencies:[kn,UE,NE],encapsulation:2})};var x=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-icon-button-variants-demo`]],decls:12,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`icon`,`settings`,`label`,`Settings`],[`icon`,`copy`,`label`,`Copy case number`,`variant`,`primary`],[`icon`,`printer`,`label`,`Print`,`variant`,`secondary`],[`icon`,`star`,`label`,`Bookmark`,`variant`,`accent`],[`icon`,`trash-2`,`label`,`Delete`,`variant`,`neutral`],[`icon`,`x`,`label`,`Close`,`disabled`,``],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`icon`,`pencil`,`label`,`Edit (extra small)`,`size`,`xs`],[`icon`,`pencil`,`label`,`Edit (small)`,`size`,`sm`],[`icon`,`pencil`,`label`,`Edit (medium)`,`size`,`md`],[`icon`,`pencil`,`label`,`Edit (large)`,`size`,`lg`]],template:function(e,n){e&1&&(Ga(0,`div`,0),uc(1,`scsc-icon-button`,1)(2,`scsc-icon-button`,2)(3,`scsc-icon-button`,3)(4,`scsc-icon-button`,4)(5,`scsc-icon-button`,5)(6,`scsc-icon-button`,6),Lf(),Ga(7,`div`,7),uc(8,`scsc-icon-button`,8)(9,`scsc-icon-button`,9)(10,`scsc-icon-button`,10)(11,`scsc-icon-button`,11),Lf())},dependencies:[UE],encapsulation:2})};var D={"icon-button-row-actions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscIconButton } from '@scscourt/design';

interface Filing {
  id: string;
  title: string;
  locked: boolean;
}

@Component({
  selector: 'app-icon-button-row-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscIconButton],
  template: \`
    <ul class="divide-y divide-base-300 rounded-box border border-base-300">
      @for (f of filings(); track f.id) {
        <li class="flex items-center gap-3 px-4 py-2">
          <span class="w-24 text-sm tnum">{{ f.id }}</span>
          <span class="grow text-sm">{{ f.title }}</span>
          <scsc-icon-button
            icon="download"
            [label]="'Download ' + f.id"
            size="sm"
            (click)="act('Downloaded', f)"
          />
          <scsc-icon-button
            icon="pencil"
            [label]="'Edit ' + f.id"
            size="sm"
            [disabled]="f.locked"
            (click)="act('Editing', f)"
          />
          <scsc-icon-button
            icon="trash-2"
            [label]="'Delete ' + f.id"
            size="sm"
            [disabled]="f.locked"
            (click)="remove(f)"
          />
        </li>
      }
    </ul>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class IconButtonRowActionsDemo {
  protected readonly filings = signal<Filing[]>([
    { id: 'DOC-1041', title: 'Complaint \u2014 24CV012345', locked: true },
    { id: 'DOC-1042', title: 'Proof of service', locked: false },
    { id: 'DOC-1043', title: 'Request for entry of default', locked: false },
  ]);
  protected readonly status = signal('Filed documents are locked and cannot be edited or deleted.');

  protected act(verb: string, f: Filing): void {
    this.status.set(\`\${verb} \${f.id}.\`);
  }

  protected remove(f: Filing): void {
    this.filings.update((list) => list.filter((x) => x.id !== f.id));
    this.status.set(\`Deleted \${f.id}.\`);
  }
}
`,html:`<ul class="divide-y divide-base-300 rounded-box border border-base-300">
  @for (f of filings(); track f.id) {
    <li class="flex items-center gap-3 px-4 py-2">
      <span class="w-24 text-sm tnum">{{ f.id }}</span>
      <span class="grow text-sm">{{ f.title }}</span>
      <scsc-icon-button
        icon="download"
        [label]="'Download ' + f.id"
        size="sm"
        (click)="act('Downloaded', f)"
      />
      <scsc-icon-button
        icon="pencil"
        [label]="'Edit ' + f.id"
        size="sm"
        [disabled]="f.locked"
        (click)="act('Editing', f)"
      />
      <scsc-icon-button
        icon="trash-2"
        [label]="'Delete ' + f.id"
        size="sm"
        [disabled]="f.locked"
        (click)="remove(f)"
      />
    </li>
  }
</ul>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"icon-button-toggle":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscHeading, ScscIconButton, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-icon-button-toggle-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscIconButton, ScscText],
  template: \`
    <div
      class="flex max-w-xl items-start justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
    >
      <div>
        <scsc-heading [level]="3" [visualLevel]="5">In re Marriage of Nguyen</scsc-heading>
        <scsc-text size="sm" tone="muted" tnum>24FL003210 \xB7 Family \xB7 Dept. 12</scsc-text>
      </div>
      <div class="flex items-center gap-1">
        <!-- A toggle: the label stays the same and aria-pressed carries the state. -->
        <scsc-icon-button
          [icon]="bookmarked() ? 'bookmark-check' : 'bookmark'"
          label="Bookmark this case"
          [ariaPressed]="bookmarked()"
          [variant]="bookmarked() ? 'primary' : 'ghost'"
          (click)="toggleBookmark()"
        />
        <scsc-icon-button icon="copy" label="Copy case number" (click)="copy()" />
        <!-- Loading keeps focus on the button and announces "Loading". -->
        <scsc-icon-button
          icon="refresh-cw"
          label="Refresh docket"
          [loading]="refreshing()"
          (click)="refresh()"
        />
      </div>
    </div>
    <!-- Icon-only actions give no visible result of their own: confirm them in a status line. -->
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class IconButtonToggleDemo {
  protected readonly bookmarked = signal(false);
  protected readonly status = signal('');

  protected toggleBookmark(): void {
    this.bookmarked.update((b) => !b);
    this.status.set(this.bookmarked() ? 'Case bookmarked.' : 'Bookmark removed.');
  }

  protected readonly refreshing = signal(false);

  protected refresh(): void {
    this.refreshing.set(true);
    setTimeout(() => {
      this.refreshing.set(false);
      this.status.set('Docket refreshed.');
    }, 1500);
  }

  protected copy(): void {
    navigator.clipboard?.writeText('24FL003210').catch(() => undefined);
    this.status.set('Copied 24FL003210 to the clipboard.');
  }
}
`,html:`<div
  class="flex max-w-xl items-start justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
>
  <div>
    <scsc-heading [level]="3" [visualLevel]="5">In re Marriage of Nguyen</scsc-heading>
    <scsc-text size="sm" tone="muted" tnum>24FL003210 \xB7 Family \xB7 Dept. 12</scsc-text>
  </div>
  <div class="flex items-center gap-1">
    <!-- A toggle: the label stays the same and aria-pressed carries the state. -->
    <scsc-icon-button
      [icon]="bookmarked() ? 'bookmark-check' : 'bookmark'"
      label="Bookmark this case"
      [ariaPressed]="bookmarked()"
      [variant]="bookmarked() ? 'primary' : 'ghost'"
      (click)="toggleBookmark()"
    />
    <scsc-icon-button icon="copy" label="Copy case number" (click)="copy()" />
    <!-- Loading keeps focus on the button and announces "Loading". -->
    <scsc-icon-button
      icon="refresh-cw"
      label="Refresh docket"
      [loading]="refreshing()"
      (click)="refresh()"
    />
  </div>
</div>
<!-- Icon-only actions give no visible result of their own: confirm them in a status line. -->
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"icon-button-variants":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscIconButton } from '@scscourt/design';

@Component({
  selector: 'app-icon-button-variants-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscIconButton],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <scsc-icon-button icon="settings" label="Settings" />
      <scsc-icon-button icon="copy" label="Copy case number" variant="primary" />
      <scsc-icon-button icon="printer" label="Print" variant="secondary" />
      <scsc-icon-button icon="star" label="Bookmark" variant="accent" />
      <scsc-icon-button icon="trash-2" label="Delete" variant="neutral" />
      <scsc-icon-button icon="x" label="Close" disabled />
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <scsc-icon-button icon="pencil" label="Edit (extra small)" size="xs" />
      <scsc-icon-button icon="pencil" label="Edit (small)" size="sm" />
      <scsc-icon-button icon="pencil" label="Edit (medium)" size="md" />
      <scsc-icon-button icon="pencil" label="Edit (large)" size="lg" />
    </div>
  \`,
})
export class IconButtonVariantsDemo {}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <scsc-icon-button icon="settings" label="Settings" />
  <scsc-icon-button icon="copy" label="Copy case number" variant="primary" />
  <scsc-icon-button icon="printer" label="Print" variant="secondary" />
  <scsc-icon-button icon="star" label="Bookmark" variant="accent" />
  <scsc-icon-button icon="trash-2" label="Delete" variant="neutral" />
  <scsc-icon-button icon="x" label="Close" disabled />
</div>
<div class="mt-4 flex flex-wrap items-center gap-2">
  <scsc-icon-button icon="pencil" label="Edit (extra small)" size="xs" />
  <scsc-icon-button icon="pencil" label="Edit (small)" size="sm" />
  <scsc-icon-button icon="pencil" label="Edit (medium)" size="md" />
  <scsc-icon-button icon="pencil" label="Edit (large)" size="lg" />
</div>
`}};var Q={slug:`icon-button`,name:`Icon Button`,classes:[`ScscIconButton`],category:`Actions`,whenToUse:[`Compact, repeated actions where the icon is unambiguous: row actions in tables, toolbar buttons, close and clear controls.`,'`label` is required and becomes the `aria-label`; write it as the action ("Delete DOC-1042"), not the icon name.',"If the action is the main thing on the page, or the icon needs explaining, use `scsc-button` with an icon and a text label instead.",'Default variant is `ghost` so a row of icon buttons stays quiet; reserve `primary` for one emphasised action or the "on" state of a toggle.'],demos:[{id:`icon-button-variants`,title:`Variants and sizes`,description:"The six intents plus `disabled`; the icon scales with `size`.",component:x,source:D[`icon-button-variants`]},{id:`icon-button-row-actions`,title:`Row actions`,description:`Per-row labels built from the record so each button has a unique accessible name; a status line announces the result.`,component:y,source:D[`icon-button-row-actions`]},{id:`icon-button-toggle`,title:`Toggle and feedback`,description:"A bookmark toggle with `ariaPressed` (the `label` stays the same; `icon` and `variant` follow the state), a copy action confirmed in a status line, and a refresh that shows `loading`.",component:v,source:D[`icon-button-toggle`]}],a11y:['Renders a native `<button type="button">` with `aria-label` from `label`; the icon itself is `aria-hidden`.',"When the same icon repeats in a list, make each `label` unique (include the record id or name) so screen-reader users can tell them apart.",'For a toggle, keep the `label` fixed and bind `ariaPressed`; screen readers then say "Bookmark this case, toggle button, pressed".','`loading` swaps the icon for a spinner, sets `aria-busy` and `aria-disabled` (focus stays), ignores clicks and announces "Loading". `disabledFocusable` is a disabled state that stays in the tab order, for use with `ariaDescribedby`.',"Consider a `scsc-tooltip` for sighted users; `aria-label` alone is invisible."],keyboard:[{keys:`Tab / Shift + Tab`,action:"Moves to the button, including a `loading` or `disabledFocusable` one; a `disabled` button is skipped."},{keys:`Enter / Space`,action:"Activates the button; ignored while `loading` or `disabledFocusable`."}],aria:["`ariaPressed`, `ariaExpanded`, `ariaControls`, `ariaHaspopup` and `ariaDescribedby` set the matching attributes on the inner `<button>`; `null` leaves each one off."],appMustProvide:['A `label` on every icon button, written as the action and unique within a list ("Delete DOC-1042"). It is required; a blank one logs a dev-mode warning.'],related:[`button`,`button-group`,`fab`,`tooltip`]};export{Q as ICON_BUTTON_DOCS};