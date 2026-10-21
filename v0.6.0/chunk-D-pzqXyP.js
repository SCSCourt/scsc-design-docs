import{Es as sD,Ma as JT,Na as Jb,Ps as ut,U as FP,Xa as Pv,Yo as iD,b as BR,bo as Y_,cs as lc,ds as nD,ks as t_,kt as NE,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var S={"command-palette-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCommand, ScscCommandPalette, ScscKbd, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-command-palette-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCommandPalette, ScscButton, ScscKbd, ScscText],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button variant="secondary" outline (click)="open.set(true)">
        Open command palette <scsc-kbd>Ctrl</scsc-kbd> <scsc-kbd>K</scsc-kbd>
      </scsc-button>
      @if (lastRun(); as cmd) {
        <scsc-text tone="muted" size="sm">Ran: {{ cmd.label }}</scsc-text>
      }
    </div>

    <!-- [shortcut]="false" here only because the docs site already owns Ctrl+K; leave it on in your app -->
    <scsc-command-palette
      [(open)]="open"
      [commands]="commands"
      [shortcut]="false"
      (selected)="lastRun.set($event)"
    />
  \`,
})
export class CommandPaletteBasicDemo {
  protected readonly open = signal(false);
  protected readonly lastRun = signal<ScscCommand | null>(null);

  protected readonly commands: ScscCommand[] = [
    {
      id: 'search-cases',
      label: 'Search cases',
      icon: 'search',
      group: 'Navigate',
      keywords: 'find lookup',
    },
    { id: 'calendar', label: "Today's calendar", icon: 'calendar-days', group: 'Navigate' },
    {
      id: 'new-filing',
      label: 'New filing',
      icon: 'plus',
      group: 'Actions',
      keywords: 'efile complaint',
    },
    { id: 'print-docket', label: 'Print docket', icon: 'printer', group: 'Actions' },
    { id: 'settings', label: 'Open settings', icon: 'settings', group: 'Actions' },
  ];
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button variant="secondary" outline (click)="open.set(true)">
    Open command palette <scsc-kbd>Ctrl</scsc-kbd> <scsc-kbd>K</scsc-kbd>
  </scsc-button>
  @if (lastRun(); as cmd) {
    <scsc-text tone="muted" size="sm">Ran: {{ cmd.label }}</scsc-text>
  }
</div>

<!-- [shortcut]="false" here only because the docs site already owns Ctrl+K; leave it on in your app -->
<scsc-command-palette
  [(open)]="open"
  [commands]="commands"
  [shortcut]="false"
  (selected)="lastRun.set($event)"
/>
`},"command-palette-dynamic":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscCommand, ScscCommandPalette, ScscText } from '@scscourt/design';

interface RecentCase {
  caseNumber: string;
  title: string;
}

@Component({
  selector: 'app-command-palette-dynamic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCommandPalette, ScscText],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button variant="secondary" outline (click)="open.set(true)">Jump to\u2026</scsc-button>
      <scsc-text size="sm" tone="muted" role="status">{{ status() }}</scsc-text>
    </div>

    <!-- [shortcut]="false" only because this docs site already binds Ctrl+K to its own palette;
         leave the shortcut on in your app. -->
    <scsc-command-palette
      [(open)]="open"
      [commands]="commands()"
      [shortcut]="false"
      placeholder="Case number, party or action\u2026"
      (selected)="run($event)"
    />
  \`,
})
export class CommandPaletteDynamicDemo {
  protected readonly open = signal(false);
  protected readonly status = signal('');

  /** App state the commands are built from: recently opened cases and the user's roles. */
  protected readonly recent = signal<RecentCase[]>([
    { caseNumber: '24CV012345', title: 'Alvarez v. Pacific Transit Authority' },
    { caseNumber: '24FL003210', title: 'In re Marriage of Nguyen' },
  ]);
  protected readonly canSeal = signal(true);

  protected readonly commands = computed<ScscCommand[]>(() => [
    ...this.recent().map((c) => ({
      id: 'case:' + c.caseNumber,
      label: c.caseNumber + ' \xB7 ' + c.title,
      icon: 'folder-open',
      group: 'Recent cases',
      keywords: c.title,
    })),
    { id: 'nav:calendar', label: "Today's calendar", icon: 'calendar-days', group: 'Go to' },
    { id: 'nav:queue', label: 'Filing review queue', icon: 'inbox', group: 'Go to' },
    {
      id: 'act:new-filing',
      label: 'New filing',
      icon: 'plus',
      group: 'Actions',
      keywords: 'efile',
    },
    ...(this.canSeal()
      ? [{ id: 'act:seal', label: 'Seal a document', icon: 'lock', group: 'Actions' }]
      : []),
  ]);

  /** One handler for every command; the id prefix says what kind it is. */
  protected run(cmd: ScscCommand): void {
    const [kind, value] = cmd.id.split(':');
    if (kind === 'case') {
      // In an app: this.router.navigate(['/cases', value]);
      this.status.set('Opening case ' + value + '\u2026');
    } else if (kind === 'nav') {
      this.status.set('Going to ' + cmd.label + '\u2026');
    } else {
      this.status.set('Started: ' + cmd.label + '.');
    }
  }
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button variant="secondary" outline (click)="open.set(true)">Jump to\u2026</scsc-button>
  <scsc-text size="sm" tone="muted" role="status">{{ status() }}</scsc-text>
</div>

<!-- [shortcut]="false" only because this docs site already binds Ctrl+K to its own palette;
     leave the shortcut on in your app. -->
<scsc-command-palette
  [(open)]="open"
  [commands]="commands()"
  [shortcut]="false"
  placeholder="Case number, party or action\u2026"
  (selected)="run($event)"
/>
`},"command-palette-focus":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCommand, ScscCommandPalette, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-command-palette-focus-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCommandPalette, ScscText],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button variant="secondary" outline (click)="open.set(true)">Quick actions</scsc-button>
      <scsc-text size="sm" tone="muted" role="status">{{ status() }}</scsc-text>
    </div>

    <!-- Focus moves into the search box on open and back to "Quick actions" on close.
         [shortcut]="false" only because this docs site already binds Ctrl+K to its own palette;
         leave the shortcut on in your app. -->
    <scsc-command-palette
      [(open)]="open"
      [commands]="commands"
      [shortcut]="false"
      placeholder="Search actions for 24CV012345\u2026"
      (selected)="status.set('Done: ' + $event.label + '.')"
    />
  \`,
})
export class CommandPaletteFocusDemo {
  protected readonly open = signal(false);
  protected readonly status = signal('');
  protected readonly commands: ScscCommand[] = [
    { id: 'print', label: 'Print the docket', icon: 'printer', group: 'This case' },
    { id: 'copy', label: 'Copy the case number', icon: 'copy', group: 'This case' },
    { id: 'notes', label: 'Add a case note', icon: 'notebook-pen', group: 'This case' },
  ];
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button variant="secondary" outline (click)="open.set(true)">Quick actions</scsc-button>
  <scsc-text size="sm" tone="muted" role="status">{{ status() }}</scsc-text>
</div>

<!-- Focus moves into the search box on open and back to "Quick actions" on close.
     [shortcut]="false" only because this docs site already binds Ctrl+K to its own palette;
     leave the shortcut on in your app. -->
<scsc-command-palette
  [(open)]="open"
  [commands]="commands"
  [shortcut]="false"
  placeholder="Search actions for 24CV012345\u2026"
  (selected)="status.set('Done: ' + $event.label + '.')"
/>
`}};function B(c,n){c&1&&(Ga(0,`scsc-text`,2),G_(1),Lf()),c&2&&(Jb(),$f(`Ran: `,n.label))}var k=class c{open=q(!1);lastRun=q(null);commands=[{id:`search-cases`,label:`Search cases`,icon:`search`,group:`Navigate`,keywords:`find lookup`},{id:`calendar`,label:`Today's calendar`,icon:`calendar-days`,group:`Navigate`},{id:`new-filing`,label:`New filing`,icon:`plus`,group:`Actions`,keywords:`efile complaint`},{id:`print-docket`,label:`Print docket`,icon:`printer`,group:`Actions`},{id:`settings`,label:`Open settings`,icon:`settings`,group:`Actions`}];static ɵfac=function(t){return new(t||c)};static ɵcmp=Af({type:c,selectors:[[`app-command-palette-basic-demo`]],decls:9,vars:4,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[`tone`,`muted`,`size`,`sm`],[3,`openChange`,`selected`,`open`,`commands`,`shortcut`]],template:function(t,e){if(t&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.open.set(!0)}),G_(2,` Open command palette `),Ga(3,`scsc-kbd`),G_(4,`Ctrl`),Lf(),Ga(5,`scsc-kbd`),G_(6,`K`),Lf()(),JT(7,B,2,1,`scsc-text`,2),Lf(),Ga(8,`scsc-command-palette`,3),sD(`openChange`,function(a){return Y_(e.open,a)||(e.open=a),a}),lc(`selected`,function(a){return e.lastRun.set(a)}),Lf()),t&2){let i;Jb(7),t_((i=e.lastRun())?7:-1,i),Jb(),iD(`open`,e.open),Pv(`commands`,e.commands)(`shortcut`,!1)}},dependencies:[BR,sn,FP,NE],encapsulation:2})};var w=class c{open=q(!1);status=q(``);recent=q([{caseNumber:`24CV012345`,title:`Alvarez v. Pacific Transit Authority`},{caseNumber:`24FL003210`,title:`In re Marriage of Nguyen`}]);canSeal=q(!0);commands=ut(()=>[...this.recent().map(n=>({id:`case:`+n.caseNumber,label:n.caseNumber+` · `+n.title,icon:`folder-open`,group:`Recent cases`,keywords:n.title})),{id:`nav:calendar`,label:`Today's calendar`,icon:`calendar-days`,group:`Go to`},{id:`nav:queue`,label:`Filing review queue`,icon:`inbox`,group:`Go to`},{id:`act:new-filing`,label:`New filing`,icon:`plus`,group:`Actions`,keywords:`efile`},...this.canSeal()?[{id:`act:seal`,label:`Seal a document`,icon:`lock`,group:`Actions`}]:[]]);run(n){let[t,e]=n.id.split(`:`);t===`case`?this.status.set(`Opening case `+e+`…`):t===`nav`?this.status.set(`Going to `+n.label+`…`):this.status.set(`Started: `+n.label+`.`)}static ɵfac=function(t){return new(t||c)};static ɵcmp=Af({type:c,selectors:[[`app-command-palette-dynamic-demo`]],decls:6,vars:4,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[`placeholder`,`Case number, party or action…`,3,`openChange`,`selected`,`open`,`commands`,`shortcut`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.open.set(!0)}),G_(2,`Jump to…`),Lf(),Ga(3,`scsc-text`,2),G_(4),Lf()(),Ga(5,`scsc-command-palette`,3),sD(`openChange`,function(a){return Y_(e.open,a)||(e.open=a),a}),lc(`selected`,function(a){return e.run(a)}),Lf()),t&2&&(Jb(4),nD(e.status()),Jb(),iD(`open`,e.open),Pv(`commands`,e.commands())(`shortcut`,!1))},dependencies:[sn,BR,NE],encapsulation:2})};var D=class c{open=q(!1);status=q(``);commands=[{id:`print`,label:`Print the docket`,icon:`printer`,group:`This case`},{id:`copy`,label:`Copy the case number`,icon:`copy`,group:`This case`},{id:`notes`,label:`Add a case note`,icon:`notebook-pen`,group:`This case`}];static ɵfac=function(t){return new(t||c)};static ɵcmp=Af({type:c,selectors:[[`app-command-palette-focus-demo`]],decls:6,vars:4,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[`placeholder`,`Search actions for 24CV012345…`,3,`openChange`,`selected`,`open`,`commands`,`shortcut`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return e.open.set(!0)}),G_(2,`Quick actions`),Lf(),Ga(3,`scsc-text`,2),G_(4),Lf()(),Ga(5,`scsc-command-palette`,3),sD(`openChange`,function(a){return Y_(e.open,a)||(e.open=a),a}),lc(`selected`,function(a){return e.status.set(`Done: `+a.label+`.`)}),Lf()),t&2&&(Jb(4),nD(e.status()),Jb(),iD(`open`,e.open),Pv(`commands`,e.commands)(`shortcut`,!1))},dependencies:[sn,BR,NE],encapsulation:2})};var ae={slug:`command-palette`,name:`Command Palette`,classes:[`ScscCommandPalette`],category:`Navigation`,whenToUse:[`Power-user navigation in staff apps: jump to a case, open a queue, run an action, all from Ctrl+K / ⌘K.`,"Mount one palette at the root of the app (next to the router outlet) and build `commands` from your routes, actions and app state in a `computed()`.","Handle `selected` to navigate or act; the palette closes itself after emitting. A prefix in the `id` (`case:`, `nav:`, `act:`) keeps one handler simple.","Leave the global `shortcut` on in your app. These demos turn it off only because this docs site already binds Ctrl+K to its own palette."],setup:`// app.ts \u2014 one palette for the whole app
<router-outlet />
<scsc-command-palette [(open)]="cmdOpen" [commands]="commands" (selected)="run($event)" />

protected run(cmd: ScscCommand): void {
  this.router.navigateByUrl(cmd.id);
}`,demos:[{id:`command-palette-basic`,title:`Open from a button`,description:`Type to filter by label, keywords or group; arrow keys move, Enter runs, Esc closes.`,component:k,source:S[`command-palette-basic`]},{id:`command-palette-dynamic`,title:`Commands from app state`,description:"Recent cases and role-dependent actions in a `computed()`, a custom `placeholder`, and one `selected` handler that dispatches on the id prefix.",component:w,source:S[`command-palette-dynamic`]},{id:`command-palette-focus`,title:`Focus in and back out`,description:"Built in: focus moves into the search box on open and back to the button that opened it on close (`Esc`, the backdrop or a pick).",component:D,source:S[`command-palette-focus`]}],a11y:['The palette is a native `<dialog>` opened with `showModal()` and labelled "Command palette": focus stays inside it while the page behind is inert. `Esc` closes it and the backdrop is click-to-dismiss.',`The search box takes focus when the palette opens, and focus returns to the element that opened it when it closes.`,'The search box is a `combobox` that controls the `listbox` of results. Its `aria-activedescendant` points at the highlighted `option`, so screen readers announce each result as the arrow keys reach it while focus stays in the search box; "No matching commands." is announced from a status region.',"The search box is named only by its `placeholder`, so write it as a label."],keyboard:[{keys:`Ctrl + K / Meta + K`,action:"Opens or closes the palette from anywhere, text fields included (unless `shortcut` is off); opening moves focus to the search box."},{keys:`ArrowDown / ArrowUp`,action:`Moves the highlight to the next / previous result, stopping at the first and last, and scrolls it into view; focus stays in the search box and screen readers announce the result.`},{keys:`Enter`,action:"Runs the highlighted result (the first match after typing): emits `selected` once and closes the palette."},{keys:`Escape`,action:`Closes the palette; every close returns focus to the element that had it when the palette opened.`},{keys:`Tab / Shift + Tab`,action:`Results are not Tab stops (the arrow keys reach them), and focus cannot move to the page behind, which is inert while the palette is open.`}],appMustProvide:['A `placeholder` written as a label ("Search commands"): it is the search box’s only name.',`A visible way to open the palette (a button), not only a keyboard shortcut.`],related:[`search-input`,`kbd`,`modal`,`navbar`]};export{ae as COMMAND_PALETTE_DOCS};