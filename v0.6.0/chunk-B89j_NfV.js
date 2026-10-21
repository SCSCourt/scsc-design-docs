import{Fr as kn,I as EP,Ki as ye,Ma as JT,Mr as jn,Ms as uc,Na as Jb,Sn as WF,Xa as Pv,Zi as za,Zo as i_,_s as o_,cs as lc,ds as nD,ks as t_,kt as NE,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var L=(a,s)=>s.id;function E(a,s){if(a&1&&(Ga(0,`li`,4)(1,`p`,6),G_(2),Lf(),Ga(3,`scsc-text`,7),G_(4),Lf()()),a&2){let e=s.$implicit;Jb(2),nD(e.title),Jb(2),nD(e.meta)}}var y=class a{notes=q([{id:2,title:`Counsel requested a continuance`,meta:`K. Patel · Today 9:14 AM`},{id:1,title:`Proof of service received`,meta:`J. Ramos · Mar 13, 2024`}]);addNote(){this.notes.update(s=>[{id:s.length+1,title:`New note (draft)`,meta:`You · just now`},...s])}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-fab-basic-demo`]],decls:9,vars:2,consts:[[1,`scsc-pad-page`],[3,`level`,`visualLevel`],[`tone`,`muted`,`size`,`sm`,1,`mt-1`,`block`],[1,`mt-4`,`max-w-xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`px-4`,`py-3`],[`icon`,`plus`,`label`,`New case note`,3,`click`],[1,`font-medium`],[`tone`,`muted`,`size`,`sm`,1,`block`]],template:function(e,o){e&1&&(Ga(0,`main`,0)(1,`scsc-heading`,1),G_(2,`Case notes · 24CV012345`),Lf(),Ga(3,`scsc-text`,2),G_(4,` Alvarez v. Northgate Property Mgmt. · Dept. 21 `),Lf(),Ga(5,`scsc-list`,3),o_(6,E,5,2,`li`,4,L),Lf()(),Ga(8,`scsc-fab`,5),lc(`click`,function(){return o.addNote()}),Lf()),e&2&&(Jb(),Pv(`level`,1)(`visualLevel`,3),Jb(5),i_(o.notes()))},dependencies:[WF,kn,EP,NE],encapsulation:2})};function z(a,s){a&1&&(Ga(0,`scsc-alert`,3),G_(1,` The clerk's office will reply by email within one business day. `),Lf())}var x=class a{asked=q(!1);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-fab-position-demo`]],decls:7,vars:3,consts:[[1,`scsc-pad-page`],[3,`level`,`visualLevel`],[`tone`,`muted`,`size`,`sm`,1,`mt-1`,`block`],[`status`,`info`,`title`,`Message sent`,1,`mt-4`,`max-w-xl`],[`icon`,`message-square`,`label`,`Ask the clerk`,`position`,`bottom-left`,3,`click`]],template:function(e,o){e&1&&(Ga(0,`main`,0)(1,`scsc-heading`,1),G_(2,`Hearing: Motion to compel`),Lf(),Ga(3,`scsc-text`,2),G_(4,` Jul 28, 2026 · 1:30 PM · Dept. 7 · Hon. L. Okafor `),Lf(),JT(5,z,2,0,`scsc-alert`,3),Lf(),Ga(6,`scsc-fab`,4),lc(`click`,function(){return o.asked.set(!0)}),Lf()),e&2&&(Jb(),Pv(`level`,1)(`visualLevel`,3),Jb(4),t_(o.asked()?5:-1))},dependencies:[za,WF,kn,NE],encapsulation:2})};var H=(a,s)=>s.id;function R(a,s){if(a&1&&(Ga(0,`li`,6)(1,`div`)(2,`p`,8),G_(3),Lf(),Ga(4,`scsc-text`,9),G_(5),Lf()(),Ga(6,`scsc-badge`,10),G_(7),Lf()()),a&2){let e=s.$implicit;Jb(3),nD(e.title),Jb(2),nD(e.caseNumber),Jb(),Pv(`tone`,e.status===`Accepted`?`success`:`neutral`),Jb(),$f(` `,e.status,` `)}}var w=class a{filings=q([{id:3,title:`Proof of service`,caseNumber:`24CV012345`,status:`Submitted`},{id:2,title:`Answer to complaint`,caseNumber:`24CV012345`,status:`Accepted`},{id:1,title:`Request for fee waiver`,caseNumber:`24CV012345`,status:`Accepted`}]);newFiling(){this.filings.update(s=>[{id:s.length+1,title:`Untitled filing`,caseNumber:`24CV012345`,status:`Draft`},...s])}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-fab-responsive-demo`]],decls:11,vars:2,consts:[[1,`scsc-pad-page`],[1,`flex`,`max-w-xl`,`items-center`,`justify-between`,`gap-3`],[3,`level`,`visualLevel`],[`variant`,`primary`,1,`hidden`,`md:inline-flex`,3,`click`],[`name`,`plus`,`size`,`sm`],[1,`mt-4`,`max-w-xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`justify-between`,`gap-3`,`px-4`,`py-3`],[`icon`,`plus`,`label`,`New filing`,1,`md:hidden`,3,`click`],[1,`font-medium`],[`tone`,`muted`,`size`,`sm`,`tnum`,``,1,`block`],[`soft`,``,3,`tone`]],template:function(e,o){e&1&&(Ga(0,`main`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3,`My filings`),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return o.newFiling()}),uc(5,`scsc-icon`,4),G_(6,` New filing `),Lf()(),Ga(7,`scsc-list`,5),o_(8,R,8,4,`li`,6,H),Lf()(),Ga(10,`scsc-fab`,7),lc(`click`,function(){return o.newFiling()}),Lf()),e&2&&(Jb(2),Pv(`level`,1)(`visualLevel`,3),Jb(6),i_(o.filings()))},dependencies:[jn,sn,WF,kn,ye,EP,NE],encapsulation:2})};var S={"fab-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscFab, ScscHeading, ScscList, ScscText } from '@scscourt/design';

interface CaseNote {
  id: number;
  title: string;
  meta: string;
}

@Component({
  selector: 'app-fab-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFab, ScscHeading, ScscList, ScscText],
  template: \`
    <main class="scsc-pad-page">
      <scsc-heading [level]="1" [visualLevel]="3">Case notes \xB7 24CV012345</scsc-heading>
      <scsc-text tone="muted" size="sm" class="mt-1 block">
        Alvarez v. Northgate Property Mgmt. \xB7 Dept. 21
      </scsc-text>

      <scsc-list class="mt-4 max-w-xl rounded-box border border-base-300 bg-base-100">
        @for (note of notes(); track note.id) {
          <li class="px-4 py-3">
            <p class="font-medium">{{ note.title }}</p>
            <scsc-text tone="muted" size="sm" class="block">{{ note.meta }}</scsc-text>
          </li>
        }
      </scsc-list>
    </main>

    <!-- Pinned to the viewport's bottom-right corner; place it after the content it acts on. -->
    <scsc-fab icon="plus" label="New case note" (click)="addNote()" />
  \`,
})
export class FabBasicDemo {
  protected readonly notes = signal<CaseNote[]>([
    { id: 2, title: 'Counsel requested a continuance', meta: 'K. Patel \xB7 Today 9:14 AM' },
    { id: 1, title: 'Proof of service received', meta: 'J. Ramos \xB7 Mar 13, 2024' },
  ]);

  protected addNote(): void {
    this.notes.update((list) => [
      { id: list.length + 1, title: 'New note (draft)', meta: 'You \xB7 just now' },
      ...list,
    ]);
  }
}
`,html:`<main class="scsc-pad-page">
  <scsc-heading [level]="1" [visualLevel]="3">Case notes \xB7 24CV012345</scsc-heading>
  <scsc-text tone="muted" size="sm" class="mt-1 block">
    Alvarez v. Northgate Property Mgmt. \xB7 Dept. 21
  </scsc-text>

  <scsc-list class="mt-4 max-w-xl rounded-box border border-base-300 bg-base-100">
    @for (note of notes(); track note.id) {
      <li class="px-4 py-3">
        <p class="font-medium">{{ note.title }}</p>
        <scsc-text tone="muted" size="sm" class="block">{{ note.meta }}</scsc-text>
      </li>
    }
  </scsc-list>
</main>

<!-- Pinned to the viewport's bottom-right corner; place it after the content it acts on. -->
<scsc-fab icon="plus" label="New case note" (click)="addNote()" />
`},"fab-position":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAlert, ScscFab, ScscHeading, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-fab-position-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscFab, ScscHeading, ScscText],
  template: \`
    <main class="scsc-pad-page">
      <scsc-heading [level]="1" [visualLevel]="3">Hearing: Motion to compel</scsc-heading>
      <scsc-text tone="muted" size="sm" class="mt-1 block">
        Jul 28, 2026 \xB7 1:30 PM \xB7 Dept. 7 \xB7 Hon. L. Okafor
      </scsc-text>

      @if (asked()) {
        <scsc-alert status="info" title="Message sent" class="mt-4 max-w-xl">
          The clerk's office will reply by email within one business day.
        </scsc-alert>
      }
    </main>

    <!-- bottom-left when the right corner is taken (a chat widget, a sticky footer action). -->
    <scsc-fab
      icon="message-square"
      label="Ask the clerk"
      position="bottom-left"
      (click)="asked.set(true)"
    />
  \`,
})
export class FabPositionDemo {
  protected readonly asked = signal(false);
}
`,html:`<main class="scsc-pad-page">
  <scsc-heading [level]="1" [visualLevel]="3">Hearing: Motion to compel</scsc-heading>
  <scsc-text tone="muted" size="sm" class="mt-1 block">
    Jul 28, 2026 \xB7 1:30 PM \xB7 Dept. 7 \xB7 Hon. L. Okafor
  </scsc-text>

  @if (asked()) {
    <scsc-alert status="info" title="Message sent" class="mt-4 max-w-xl">
      The clerk's office will reply by email within one business day.
    </scsc-alert>
  }
</main>

<!-- bottom-left when the right corner is taken (a chat widget, a sticky footer action). -->
<scsc-fab
  icon="message-square"
  label="Ask the clerk"
  position="bottom-left"
  (click)="asked.set(true)"
/>
`},"fab-responsive":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscBadge,
  ScscButton,
  ScscFab,
  ScscHeading,
  ScscIcon,
  ScscList,
  ScscText,
} from '@scscourt/design';

interface Filing {
  id: number;
  title: string;
  caseNumber: string;
  status: 'Draft' | 'Submitted' | 'Accepted';
}

@Component({
  selector: 'app-fab-responsive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscButton, ScscFab, ScscHeading, ScscIcon, ScscList, ScscText],
  template: \`
    <main class="scsc-pad-page">
      <div class="flex max-w-xl items-center justify-between gap-3">
        <scsc-heading [level]="1" [visualLevel]="3">My filings</scsc-heading>
        <!-- From md up the action lives in the page header\u2026 -->
        <scsc-button variant="primary" class="hidden md:inline-flex" (click)="newFiling()">
          <scsc-icon name="plus" size="sm" /> New filing
        </scsc-button>
      </div>

      <scsc-list class="mt-4 max-w-xl rounded-box border border-base-300 bg-base-100">
        @for (f of filings(); track f.id) {
          <li class="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p class="font-medium">{{ f.title }}</p>
              <scsc-text tone="muted" size="sm" tnum class="block">{{ f.caseNumber }}</scsc-text>
            </div>
            <scsc-badge [tone]="f.status === 'Accepted' ? 'success' : 'neutral'" soft>
              {{ f.status }}
            </scsc-badge>
          </li>
        }
      </scsc-list>
    </main>

    <!-- \u2026below md, where the header scrolls away, the FAB takes over. Same handler. -->
    <scsc-fab icon="plus" label="New filing" class="md:hidden" (click)="newFiling()" />
  \`,
})
export class FabResponsiveDemo {
  protected readonly filings = signal<Filing[]>([
    { id: 3, title: 'Proof of service', caseNumber: '24CV012345', status: 'Submitted' },
    { id: 2, title: 'Answer to complaint', caseNumber: '24CV012345', status: 'Accepted' },
    { id: 1, title: 'Request for fee waiver', caseNumber: '24CV012345', status: 'Accepted' },
  ]);

  protected newFiling(): void {
    this.filings.update((list) => [
      { id: list.length + 1, title: 'Untitled filing', caseNumber: '24CV012345', status: 'Draft' },
      ...list,
    ]);
  }
}
`,html:`<main class="scsc-pad-page">
  <div class="flex max-w-xl items-center justify-between gap-3">
    <scsc-heading [level]="1" [visualLevel]="3">My filings</scsc-heading>
    <!-- From md up the action lives in the page header\u2026 -->
    <scsc-button variant="primary" class="hidden md:inline-flex" (click)="newFiling()">
      <scsc-icon name="plus" size="sm" /> New filing
    </scsc-button>
  </div>

  <scsc-list class="mt-4 max-w-xl rounded-box border border-base-300 bg-base-100">
    @for (f of filings(); track f.id) {
      <li class="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p class="font-medium">{{ f.title }}</p>
          <scsc-text tone="muted" size="sm" tnum class="block">{{ f.caseNumber }}</scsc-text>
        </div>
        <scsc-badge [tone]="f.status === 'Accepted' ? 'success' : 'neutral'" soft>
          {{ f.status }}
        </scsc-badge>
      </li>
    }
  </scsc-list>
</main>

<!-- \u2026below md, where the header scrolls away, the FAB takes over. Same handler. -->
<scsc-fab icon="plus" label="New filing" class="md:hidden" (click)="newFiling()" />
`}};var ne={slug:`fab`,name:`Floating Action Button`,classes:[`ScscFab`],category:`Actions`,whenToUse:[`One screen-level create action that users reach for constantly (New filing, New case note), especially on narrow layouts where a toolbar button scrolls away.`,"At most one per screen. If a page needs several actions, put them in the page header or a `scsc-dropdown`.","The host is `position: fixed` with a `z-40` layer; it will cover content at the corner, so keep footers and pagination clear of it.","Bind `(click)` on `<scsc-fab>`; the event bubbles from the inner button. `class` lands on the fixed host, so responsive utilities such as `md:hidden` work."],demos:[{id:`fab-basic`,title:`Basic`,description:`Pinned to the bottom-right of the viewport by default. The preview is a frame with its own viewport, so the code is exactly what goes in your page.`,component:y,source:S[`fab-basic`],layout:`page`,height:`22rem`},{id:`fab-position`,title:`Bottom-left`,description:'`position="bottom-left"` for when the right corner is occupied.',component:x,source:S[`fab-position`],layout:`page`,height:`18rem`},{id:`fab-responsive`,title:`Mobile only`,description:"A header button from `md` up and a FAB below it, sharing one handler. Switch the preview to Mobile to see the swap.",component:w,source:S[`fab-responsive`],layout:`page`,height:`24rem`}],a11y:["`label` is required and becomes the `aria-label` of the native button; the icon is `aria-hidden`.","Because it is fixed, it is announced in DOM order, not visual order. Place `<scsc-fab>` right after the main content it acts on so the reading order makes sense.","When a FAB replaces a header button on small screens, hide the other one (`hidden md:inline-flex` / `md:hidden`) so only one control is in the tab order at a time.","Keep the 3.5rem target; do not shrink it with `class`.",'`loading` swaps the icon for a spinner, sets `aria-busy` and `aria-disabled` (focus stays on the FAB), ignores clicks and announces "Loading".'],aria:["A FAB that opens a menu or dialog sets `ariaHaspopup` (`menu`, `dialog`), plus `ariaExpanded` and `ariaControls` while a menu is open; `ariaPressed` and `ariaDescribedby` are also available. ARIA attributes on the `<scsc-fab>` host would not reach the button."],appMustProvide:['A `label` naming the action ("New filing"); the FAB is icon-only.'],related:[`button`,`icon-button`,`page-shell`]};export{ne as FAB_DOCS};