import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{A as Ct,Cs as rM,Go as g,Hs as y_,Ka as Ov,Lo as d_,Ma as JT,Na as Jb,Ps as ut,Ss as rD,Un as Za,Xa as Pv,_t as Kn,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,pi as sn,ra as Af,rr as da,ta as $f,va as G_,xs as q,ya as Ga,yn as Vt,za as Lf}from"./main-O6OT5H7H.js";var D=class n{visible=q({caseNumber:!0,title:!0,judge:!1,nextHearing:!0,balance:!1});labels={caseNumber:`Case No.`,title:`Case title`,judge:`Judicial officer`,nextHearing:`Next hearing`,balance:`Balance due`};items=ut(()=>Object.entries(this.visible()).map(([t,e])=>({id:t,label:this.labels[t],type:`checkbox`,checked:e,disabled:t===`caseNumber`?`Always shown`:!1})));shown=ut(()=>Object.entries(this.visible()).filter(([,t])=>t).map(([t])=>this.labels[t]).join(`, `));toggle(t){this.visible.update(e=>s(r({},e),{[t.item.id]:t.checked}))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-columns-demo`]],decls:5,vars:2,consts:[[3,`checkedChange`,`items`],[`scscMenuTrigger`,``,`variant`,`ghost`,`size`,`sm`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`scsc-menu`,0),lc(`checkedChange`,function(p){return s.toggle(p)}),Ga(1,`scsc-button`,1),G_(2,`Columns`),Lf()(),Ga(3,`p`,2),G_(4),Lf()),e&2&&(Pv(`items`,s.items()),Jb(4),$f(`Showing: `,s.shown()))},dependencies:[sn,Vt,Ct],encapsulation:2})};var x=class n{filingTypes=[{id:`motion`,label:`Motion`,description:`Notice of motion and supporting papers`},{id:`declaration`,label:`Declaration`},{id:`proof-of-service`,label:`Proof of service`},{id:`substitution`,label:`Substitution of attorney`},{id:`dismissal`,label:`Request for dismissal`,separatorBefore:!0}];status=q(``);start(t){this.status.set(`Starting a new ${t.label.toLowerCase()} for 24CV012345.`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-custom-trigger-demo`]],decls:5,vars:2,consts:[[`align`,`end`,`placement`,`auto`,3,`select`,`items`],[`scscMenuTrigger`,``,`variant`,`primary`,`size`,`sm`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`scsc-menu`,0),lc(`select`,function(p){return s.start(p)}),Ga(1,`scsc-button`,1),G_(2,`New filing`),Lf()(),Ga(3,`p`,2),G_(4),Lf()),e&2&&(Pv(`items`,s.filingTypes),Jb(4),nD(s.status()))},dependencies:[sn,Vt,Ct],encapsulation:2})};var k=class n{dialog=g(Kn);items=[{id:`edit`,label:`Edit draft`,icon:`action.edit`},{id:`duplicate`,label:`Duplicate`,icon:`action.copy`},{id:`delete`,label:`Delete draft`,icon:`action.delete`,tone:`danger`,separatorBefore:!0}];status=q(``);async run(t){if(t.id!==`delete`){this.status.set(`Chosen: ${t.label}.`);return}let e=await this.dialog.confirm({title:`Delete the draft declaration?`,message:`The draft for 24CV012345 and its attachments will be removed. This cannot be undone.`,confirmText:`Delete draft`,cancelText:`Keep draft`,tone:`error`});this.status.set(e?`The draft was deleted.`:`The draft was kept.`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-danger-confirm-demo`]],decls:8,vars:2,consts:[[1,`flex`,`items-center`,`gap-2`],[1,`text-sm`],[1,`tnum`],[`triggerLabel`,`More actions for the draft declaration`,3,`select`,`items`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`Draft declaration, `),Ga(3,`span`,2),G_(4,`24CV012345`),Lf()(),Ga(5,`scsc-menu`,3),lc(`select`,function(p){return s.run(p)}),Lf()(),Ga(6,`p`,4),G_(7),Lf()),e&2&&(Jb(5),Pv(`items`,s.items),Jb(2),nD(s.status()))},dependencies:[Vt],encapsulation:2})};var T=class n{density=q(`comfortable`);sort=q(`hearing`);sorts={hearing:`Next hearing`,filed:`Date filed`,case:`Case number`};items=ut(()=>[{id:`comfortable`,label:`Comfortable`,type:`radio`,group:`Density`,checked:this.density()===`comfortable`},{id:`compact`,label:`Compact`,type:`radio`,group:`Density`,checked:this.density()===`compact`},...Object.keys(this.sorts).map(t=>({id:`sort-${t}`,label:this.sorts[t],type:`radio`,group:`Sort by`,checked:this.sort()===t}))]);sortLabel=ut(()=>this.sorts[this.sort()].toLowerCase());pick({item:t}){t.group===`Density`?this.density.set(t.id):this.sort.set(t.id.replace(`sort-`,``))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-density-demo`]],decls:5,vars:3,consts:[[`label`,`View options`,3,`checkedChange`,`items`],[`scscMenuTrigger`,``,`variant`,`ghost`,`size`,`sm`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`scsc-menu`,0),lc(`checkedChange`,function(p){return s.pick(p)}),Ga(1,`scsc-button`,1),G_(2,`View`),Lf()(),Ga(3,`p`,2),G_(4),Lf()),e&2&&(Pv(`items`,s.items()),Jb(4),rD(` `,s.density()===`compact`?`Compact`:`Comfortable`,` rows, sorted by `,s.sortLabel(),`. `))},dependencies:[sn,Vt,Ct],encapsulation:2})};var _=class n{items=[{id:`view`,label:`View filing`,icon:`action.view`},{id:`download`,label:`Download`,icon:`action.download`,disabled:`Sealed by court order on Sep 12, 2026`},{id:`share`,label:`Share with party`,icon:`action.share`,disabled:`Only the assigned clerk can share sealed records`},{id:`history`,label:`Access history`,icon:`action.lock`}];status=q(``);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-disabled-reason-demo`]],decls:8,vars:2,consts:[[1,`flex`,`items-center`,`gap-2`],[1,`text-sm`],[1,`tnum`],[`triggerLabel`,`More actions for the sealed filing`,3,`select`,`items`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`Sealed filing, `),Ga(3,`span`,2),G_(4,`24FL004521`),Lf()(),Ga(5,`scsc-menu`,3),lc(`select`,function(p){return s.status.set(`Chosen: `+p.label+`.`)}),Lf()(),Ga(6,`p`,4),G_(7),Lf()),e&2&&(Jb(5),Pv(`items`,s.items),Jb(2),nD(s.status()))},dependencies:[Vt],encapsulation:2})};var N=class n{items=[{id:`case`,label:`Case file 24CV012345`,icon:`file.document`,link:[`/console/cases`,`24CV012345`]},{id:`cases`,label:`All cases`,icon:`nav.dashboard`,link:`/console/cases`},{id:`rules`,label:`Local rules of court`,icon:`action.help`,href:`https://www.scscourt.org/general_info/rules.shtml`,external:!0,separatorBefore:!0}];static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-links-demo`]],decls:3,vars:1,consts:[[3,`items`],[`scscMenuTrigger`,``,`variant`,`ghost`,`size`,`sm`]],template:function(e,s){e&1&&(Ga(0,`scsc-menu`,0)(1,`scsc-button`,1),G_(2,`Go to`),Lf()()),e&2&&Pv(`items`,s.items)},dependencies:[sn,Vt,Ct],encapsulation:2})};var W=()=>[];function J(n,t){if(n&1){let e=d_();Ga(0,`scsc-menu`,5),lc(`select`,function(h){Eg(e);let p=y_().$implicit,q=y_();return Ig(q.run(h,p))}),Lf()}if(n&2){let e=y_().$implicit,s=y_();Pv(`items`,s.actions.get(e.id)??rM(2,W))(`triggerLabel`,`More actions for `+e.caseNumber)}}function K(n,t){if(n&1&&(Ga(0,`span`,4),G_(1),Lf()),n&2){let e=y_().$implicit;Jb(),nD(e.caseNumber)}}function Z(n,t){if(n&1&&G_(0),n&2){let e=y_(),s=e.$implicit,h=e.col;$f(` `,s[h.key],` `)}}function Q(n,t){if(n&1&&JT(0,J,1,3,`scsc-menu`,3)(1,K,2,1,`span`,4)(2,Z,1,1),n&2){let e=t.col;t_(e.key===`actions`?0:e.key===`caseNumber`?1:2)}}var I=class n{columns=[{key:`caseNumber`,header:`Case No.`,width:`9rem`},{key:`document`,header:`Document`},{key:`filedBy`,header:`Filed by`},{key:`received`,header:`Received`,width:`8rem`},{key:`status`,header:`Status`,width:`9rem`},{key:`actions`,header:`Actions`,width:`5rem`}];filings=[{id:`f1`,caseNumber:`24CV012345`,document:`Motion to compel discovery`,filedBy:`Lee & Park LLP`,received:`Sep 29, 2026`,status:`Pending review`},{id:`f2`,caseNumber:`24FL004521`,document:`Request for order`,filedBy:`Wei Chen (self)`,received:`Sep 29, 2026`,status:`Pending review`},{id:`f3`,caseNumber:`23PR008812`,document:`Inventory and appraisal`,filedBy:`Office of the Public Guardian`,received:`Sep 28, 2026`,status:`Accepted`}];actions=new Map(this.filings.map(t=>[t.id,[{id:`view`,label:`View document`,icon:`action.view`},{id:`accept`,label:`Accept filing`,icon:`action.check`,disabled:t.status===`Accepted`?`Already accepted`:!1},{id:`reassign`,label:`Reassign to clerk`,icon:`people.user`},{id:`return`,label:`Return for correction`,icon:`action.undo`,tone:`danger`,separatorBefore:!0}]]));status=q(`Open a row’s menu, even on the last row.`);run(t,e){this.status.set(`${t.label}: ${e.document}, ${e.caseNumber}.`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-row-actions-demo`]],decls:4,vars:3,consts:[[`label`,`Filings awaiting review`,3,`columns`,`rows`],[`scscCell`,``],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`],[`size`,`sm`,`align`,`end`,3,`items`,`triggerLabel`],[1,`tnum`],[`size`,`sm`,`align`,`end`,3,`select`,`items`,`triggerLabel`]],template:function(e,s){e&1&&(Ga(0,`scsc-table`,0),Ov(1,Q,3,1,`ng-template`,1),Lf(),Ga(2,`p`,2),G_(3),Lf()),e&2&&(Pv(`columns`,s.columns)(`rows`,s.filings),Jb(3),nD(s.status()))},dependencies:[da,Vt,Za],encapsulation:2})};var A=class n{items=[{id:`print`,label:`Print summary`,icon:`action.print`,shortcut:`Ctrl+P`},{id:`move`,label:`Move to department`,icon:`action.share`,children:[{id:`dept-3`,label:`Department 3 (Civil)`},{id:`dept-7`,label:`Department 7 (Civil)`},{id:`dept-19`,label:`Department 19 (Complex civil)`}]},{id:`export`,label:`Export as`,icon:`action.export`,children:[{id:`pdf`,label:`PDF`,description:`Docket with filed documents`},{id:`csv`,label:`CSV`,description:`Docket entries only`}]}];status=q(``);static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-menu-submenu-demo`]],decls:6,vars:2,consts:[[1,`flex`,`items-center`,`gap-2`],[1,`text-sm`,`font-medium`,`tnum`],[`triggerLabel`,`More actions for 24CV012345`,3,`select`,`items`],[`role`,`status`,1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`24CV012345`),Lf(),Ga(3,`scsc-menu`,2),lc(`select`,function(p){return s.status.set(`Chosen: `+p.label+`.`)}),Lf()(),Ga(4,`p`,3),G_(5),Lf()),e&2&&(Jb(3),Pv(`items`,s.items),Jb(2),nD(s.status()))},dependencies:[Vt],encapsulation:2})};var b={"menu-columns":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscButton,
  ScscMenu,
  ScscMenuTrigger,
  type ScscMenuCheckedChange,
  type ScscMenuItem,
} from '@scscourt/design';

@Component({
  selector: 'app-menu-columns-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscMenu, ScscMenuTrigger],
  template: \`
    <scsc-menu [items]="items()" (checkedChange)="toggle($event)">
      <scsc-button scscMenuTrigger variant="ghost" size="sm">Columns</scsc-button>
    </scsc-menu>
    <p class="mt-3 text-sm text-base-content/70" role="status">Showing: {{ shown() }}</p>
  \`,
})
export class MenuColumnsDemo {
  private readonly visible = signal<Record<string, boolean>>({
    caseNumber: true,
    title: true,
    judge: false,
    nextHearing: true,
    balance: false,
  });
  private readonly labels: Record<string, string> = {
    caseNumber: 'Case No.',
    title: 'Case title',
    judge: 'Judicial officer',
    nextHearing: 'Next hearing',
    balance: 'Balance due',
  };

  /** Checkbox items keep the menu open, so several columns can be switched in one visit. */
  protected readonly items = computed<ScscMenuItem[]>(() =>
    Object.entries(this.visible()).map(([id, checked]) => ({
      id,
      label: this.labels[id],
      type: 'checkbox',
      checked,
      disabled: id === 'caseNumber' ? 'Always shown' : false,
    })),
  );
  protected readonly shown = computed(() =>
    Object.entries(this.visible())
      .filter(([, on]) => on)
      .map(([id]) => this.labels[id])
      .join(', '),
  );

  protected toggle(change: ScscMenuCheckedChange): void {
    this.visible.update((v) => ({ ...v, [change.item.id]: change.checked }));
  }
}
`,html:`<scsc-menu [items]="items()" (checkedChange)="toggle($event)">
  <scsc-button scscMenuTrigger variant="ghost" size="sm">Columns</scsc-button>
</scsc-menu>
<p class="mt-3 text-sm text-base-content/70" role="status">Showing: {{ shown() }}</p>
`},"menu-custom-trigger":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscMenu, ScscMenuTrigger, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-menu-custom-trigger-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscMenu, ScscMenuTrigger],
  template: \`
    <!-- Any button can be the trigger: scscMenuTrigger puts the menu-button state on it. -->
    <scsc-menu align="end" placement="auto" [items]="filingTypes" (select)="start($event)">
      <scsc-button scscMenuTrigger variant="primary" size="sm">New filing</scsc-button>
    </scsc-menu>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class MenuCustomTriggerDemo {
  protected readonly filingTypes: ScscMenuItem[] = [
    { id: 'motion', label: 'Motion', description: 'Notice of motion and supporting papers' },
    { id: 'declaration', label: 'Declaration' },
    { id: 'proof-of-service', label: 'Proof of service' },
    { id: 'substitution', label: 'Substitution of attorney' },
    { id: 'dismissal', label: 'Request for dismissal', separatorBefore: true },
  ];
  protected readonly status = signal('');

  protected start(item: ScscMenuItem): void {
    // In an app: this.router.navigate(['/cases', '24CV012345', 'filings', 'new', item.id]);
    this.status.set(\`Starting a new \${item.label.toLowerCase()} for 24CV012345.\`);
  }
}
`,html:`<!-- Any button can be the trigger: scscMenuTrigger puts the menu-button state on it. -->
<scsc-menu align="end" placement="auto" [items]="filingTypes" (select)="start($event)">
  <scsc-button scscMenuTrigger variant="primary" size="sm">New filing</scsc-button>
</scsc-menu>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"menu-danger-confirm":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScscDialogService, ScscMenu, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-menu-danger-confirm-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMenu],
  template: \`
    <div class="flex items-center gap-2">
      <span class="text-sm">Draft declaration, <span class="tnum">24CV012345</span></span>
      <scsc-menu
        [items]="items"
        triggerLabel="More actions for the draft declaration"
        (select)="run($event)"
      />
    </div>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class MenuDangerConfirmDemo {
  // Root-provided; rendered by the single <scsc-dialog-host /> in the app root.
  private readonly dialog = inject(ScscDialogService);

  protected readonly items: ScscMenuItem[] = [
    { id: 'edit', label: 'Edit draft', icon: 'action.edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'action.copy' },
    {
      id: 'delete',
      label: 'Delete draft',
      icon: 'action.delete',
      tone: 'danger',
      separatorBefore: true,
    },
  ];
  protected readonly status = signal('');

  /** The menu has closed and focus is back on its button, so the dialog returns focus there. */
  protected async run(item: ScscMenuItem): Promise<void> {
    if (item.id !== 'delete') {
      this.status.set(\`Chosen: \${item.label}.\`);
      return;
    }
    const ok = await this.dialog.confirm({
      title: 'Delete the draft declaration?',
      message:
        'The draft for 24CV012345 and its attachments will be removed. This cannot be undone.',
      confirmText: 'Delete draft',
      cancelText: 'Keep draft',
      tone: 'error',
    });
    this.status.set(ok ? 'The draft was deleted.' : 'The draft was kept.');
  }
}
`,html:`<div class="flex items-center gap-2">
  <span class="text-sm">Draft declaration, <span class="tnum">24CV012345</span></span>
  <scsc-menu
    [items]="items"
    triggerLabel="More actions for the draft declaration"
    (select)="run($event)"
  />
</div>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"menu-density":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscButton,
  ScscMenu,
  ScscMenuTrigger,
  type ScscMenuCheckedChange,
  type ScscMenuItem,
} from '@scscourt/design';

type Density = 'comfortable' | 'compact';
type Sort = 'hearing' | 'filed' | 'case';

@Component({
  selector: 'app-menu-density-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscMenu, ScscMenuTrigger],
  template: \`
    <scsc-menu label="View options" [items]="items()" (checkedChange)="pick($event)">
      <scsc-button scscMenuTrigger variant="ghost" size="sm">View</scsc-button>
    </scsc-menu>
    <p class="mt-3 text-sm text-base-content/70" role="status">
      {{ density() === 'compact' ? 'Compact' : 'Comfortable' }} rows, sorted by {{ sortLabel() }}.
    </p>
  \`,
})
export class MenuDensityDemo {
  protected readonly density = signal<Density>('comfortable');
  protected readonly sort = signal<Sort>('hearing');
  private readonly sorts: Record<Sort, string> = {
    hearing: 'Next hearing',
    filed: 'Date filed',
    case: 'Case number',
  };

  /** Each \`group\` is a labelled section; radio items in one group are mutually exclusive. */
  protected readonly items = computed<ScscMenuItem[]>(() => [
    {
      id: 'comfortable',
      label: 'Comfortable',
      type: 'radio',
      group: 'Density',
      checked: this.density() === 'comfortable',
    },
    {
      id: 'compact',
      label: 'Compact',
      type: 'radio',
      group: 'Density',
      checked: this.density() === 'compact',
    },
    ...(Object.keys(this.sorts) as Sort[]).map(
      (id): ScscMenuItem => ({
        id: \`sort-\${id}\`,
        label: this.sorts[id],
        type: 'radio',
        group: 'Sort by',
        checked: this.sort() === id,
      }),
    ),
  ]);
  protected readonly sortLabel = computed(() => this.sorts[this.sort()].toLowerCase());

  protected pick({ item }: ScscMenuCheckedChange): void {
    if (item.group === 'Density') this.density.set(item.id as Density);
    else this.sort.set(item.id.replace('sort-', '') as Sort);
  }
}
`,html:`<scsc-menu label="View options" [items]="items()" (checkedChange)="pick($event)">
  <scsc-button scscMenuTrigger variant="ghost" size="sm">View</scsc-button>
</scsc-menu>
<p class="mt-3 text-sm text-base-content/70" role="status">
  {{ density() === 'compact' ? 'Compact' : 'Comfortable' }} rows, sorted by {{ sortLabel() }}.
</p>
`},"menu-disabled-reason":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscMenu, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-menu-disabled-reason-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMenu],
  template: \`
    <div class="flex items-center gap-2">
      <span class="text-sm">Sealed filing, <span class="tnum">24FL004521</span></span>
      <scsc-menu
        [items]="items"
        triggerLabel="More actions for the sealed filing"
        (select)="status.set('Chosen: ' + $event.label + '.')"
      />
    </div>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class MenuDisabledReasonDemo {
  /** A string \`disabled\` is the reason: shown under the label and read as the description. */
  protected readonly items: ScscMenuItem[] = [
    { id: 'view', label: 'View filing', icon: 'action.view' },
    {
      id: 'download',
      label: 'Download',
      icon: 'action.download',
      disabled: 'Sealed by court order on Sep 12, 2026',
    },
    {
      id: 'share',
      label: 'Share with party',
      icon: 'action.share',
      disabled: 'Only the assigned clerk can share sealed records',
    },
    { id: 'history', label: 'Access history', icon: 'action.lock' },
  ];
  protected readonly status = signal('');
}
`,html:`<div class="flex items-center gap-2">
  <span class="text-sm">Sealed filing, <span class="tnum">24FL004521</span></span>
  <scsc-menu
    [items]="items"
    triggerLabel="More actions for the sealed filing"
    (select)="status.set('Chosen: ' + $event.label + '.')"
  />
</div>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"menu-links":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscMenu, ScscMenuTrigger, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-menu-links-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscMenu, ScscMenuTrigger],
  template: \`
    <scsc-menu [items]="items">
      <scsc-button scscMenuTrigger variant="ghost" size="sm">Go to</scsc-button>
    </scsc-menu>
  \`,
})
export class MenuLinksDemo {
  /** \`link\` renders a router link, \`href\` a plain one; \`external\` opens a new tab and says so. */
  protected readonly items: ScscMenuItem[] = [
    {
      id: 'case',
      label: 'Case file 24CV012345',
      icon: 'file.document',
      link: ['/console/cases', '24CV012345'],
    },
    { id: 'cases', label: 'All cases', icon: 'nav.dashboard', link: '/console/cases' },
    {
      id: 'rules',
      label: 'Local rules of court',
      icon: 'action.help',
      href: 'https://www.scscourt.org/general_info/rules.shtml',
      external: true,
      separatorBefore: true,
    },
  ];
}
`,html:`<scsc-menu [items]="items">
  <scsc-button scscMenuTrigger variant="ghost" size="sm">Go to</scsc-button>
</scsc-menu>
`},"menu-row-actions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscCellDef,
  ScscMenu,
  ScscTable,
  type ScscColumn,
  type ScscMenuItem,
} from '@scscourt/design';

interface Filing {
  id: string;
  caseNumber: string;
  document: string;
  filedBy: string;
  received: string;
  status: 'Pending review' | 'Accepted' | 'Returned';
  actions?: never;
}

@Component({
  selector: 'app-menu-row-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCellDef, ScscMenu, ScscTable],
  template: \`
    <!-- The table scrolls sideways on narrow screens; the menus still open in full. -->
    <scsc-table label="Filings awaiting review" [columns]="columns" [rows]="filings">
      <ng-template scscCell let-row let-col="col">
        @if (col.key === 'actions') {
          <scsc-menu
            size="sm"
            align="end"
            [items]="actions.get(row.id) ?? []"
            [triggerLabel]="'More actions for ' + row.caseNumber"
            (select)="run($event, row)"
          />
        } @else if (col.key === 'caseNumber') {
          <span class="tnum">{{ row.caseNumber }}</span>
        } @else {
          {{ row[col.key] }}
        }
      </ng-template>
    </scsc-table>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class MenuRowActionsDemo {
  protected readonly columns: ScscColumn<Filing>[] = [
    { key: 'caseNumber', header: 'Case No.', width: '9rem' },
    { key: 'document', header: 'Document' },
    { key: 'filedBy', header: 'Filed by' },
    { key: 'received', header: 'Received', width: '8rem' },
    { key: 'status', header: 'Status', width: '9rem' },
    { key: 'actions', header: 'Actions', width: '5rem' },
  ];

  protected readonly filings: Filing[] = [
    {
      id: 'f1',
      caseNumber: '24CV012345',
      document: 'Motion to compel discovery',
      filedBy: 'Lee & Park LLP',
      received: 'Sep 29, 2026',
      status: 'Pending review',
    },
    {
      id: 'f2',
      caseNumber: '24FL004521',
      document: 'Request for order',
      filedBy: 'Wei Chen (self)',
      received: 'Sep 29, 2026',
      status: 'Pending review',
    },
    {
      id: 'f3',
      caseNumber: '23PR008812',
      document: 'Inventory and appraisal',
      filedBy: 'Office of the Public Guardian',
      received: 'Sep 28, 2026',
      status: 'Accepted',
    },
  ];

  /** One item list per row, built once: disabled items say why for that row. */
  protected readonly actions = new Map<string, ScscMenuItem[]>(
    this.filings.map((f) => [
      f.id,
      [
        { id: 'view', label: 'View document', icon: 'action.view' },
        {
          id: 'accept',
          label: 'Accept filing',
          icon: 'action.check',
          disabled: f.status === 'Accepted' ? 'Already accepted' : false,
        },
        { id: 'reassign', label: 'Reassign to clerk', icon: 'people.user' },
        {
          id: 'return',
          label: 'Return for correction',
          icon: 'action.undo',
          tone: 'danger',
          separatorBefore: true,
        },
      ],
    ]),
  );

  protected readonly status = signal('Open a row\u2019s menu, even on the last row.');

  protected run(item: ScscMenuItem, row: Filing): void {
    this.status.set(\`\${item.label}: \${row.document}, \${row.caseNumber}.\`);
  }
}
`,html:`<!-- The table scrolls sideways on narrow screens; the menus still open in full. -->
<scsc-table label="Filings awaiting review" [columns]="columns" [rows]="filings">
  <ng-template scscCell let-row let-col="col">
    @if (col.key === 'actions') {
      <scsc-menu
        size="sm"
        align="end"
        [items]="actions.get(row.id) ?? []"
        [triggerLabel]="'More actions for ' + row.caseNumber"
        (select)="run($event, row)"
      />
    } @else if (col.key === 'caseNumber') {
      <span class="tnum">{{ row.caseNumber }}</span>
    } @else {
      {{ row[col.key] }}
    }
  </ng-template>
</scsc-table>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`},"menu-submenu":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscMenu, type ScscMenuItem } from '@scscourt/design';

@Component({
  selector: 'app-menu-submenu-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMenu],
  template: \`
    <div class="flex items-center gap-2">
      <span class="text-sm font-medium tnum">24CV012345</span>
      <scsc-menu
        [items]="items"
        triggerLabel="More actions for 24CV012345"
        (select)="status.set('Chosen: ' + $event.label + '.')"
      />
    </div>
    <p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
  \`,
})
export class MenuSubmenuDemo {
  /** An item with \`children\` opens a submenu: ArrowRight or Enter opens it, ArrowLeft closes it. */
  protected readonly items: ScscMenuItem[] = [
    { id: 'print', label: 'Print summary', icon: 'action.print', shortcut: 'Ctrl+P' },
    {
      id: 'move',
      label: 'Move to department',
      icon: 'action.share',
      children: [
        { id: 'dept-3', label: 'Department 3 (Civil)' },
        { id: 'dept-7', label: 'Department 7 (Civil)' },
        { id: 'dept-19', label: 'Department 19 (Complex civil)' },
      ],
    },
    {
      id: 'export',
      label: 'Export as',
      icon: 'action.export',
      children: [
        { id: 'pdf', label: 'PDF', description: 'Docket with filed documents' },
        { id: 'csv', label: 'CSV', description: 'Docket entries only' },
      ],
    },
  ];
  protected readonly status = signal('');
}
`,html:`<div class="flex items-center gap-2">
  <span class="text-sm font-medium tnum">24CV012345</span>
  <scsc-menu
    [items]="items"
    triggerLabel="More actions for 24CV012345"
    (select)="status.set('Chosen: ' + $event.label + '.')"
  />
</div>
<p class="mt-3 text-sm text-base-content/70" role="status">{{ status() }}</p>
`}};var qe={slug:`menu`,name:`Menu`,classes:[`ScscMenu`,`ScscMenuTrigger`],category:`Actions`,whenToUse:[`A list of **actions** behind one button: a table row’s overflow ("More actions for 24CV012345"), a record header, a toolbar’s column or view options.`,"Items are data (`ScscMenuItem[]`): icons, descriptions, shortcuts, `group` sections, checkbox and radio items, links, a submenu, and `disabled` with a reason. Handle `(select)` for actions and `(checkedChange)` for checkbox and radio items.",'Leave it empty for the built-in "More actions" icon button (name it per row with `triggerLabel`), or project your own trigger with `scscMenuTrigger`. `scsc-dropdown` is the same menu with a text trigger and a chevron.',`The menu renders in the browser’s top layer, so tables and other scroll containers never clip it; it flips above the trigger, or to its other edge, when there is no room.`,'Not for navigation: site and app navigation lists (app menu, user menu, sidebar) are disclosure navigation, not `role="menu"`. Not for choosing a form value: use `scsc-select` or `scsc-combobox`. For arbitrary content in a panel use `scsc-popover`.','Destructive items get `tone: "danger"` and a confirmation in the handler (`ScscDialogService.confirm`); put them last, after a separator.'],demos:[{id:`menu-row-actions`,title:`Row actions in a table`,description:'The built-in trigger at `size="sm"`, named per row, inside the table’s scroll container. Open the last row’s menu: it is not clipped.',component:I,source:b[`menu-row-actions`],layout:`full-bleed`},{id:`menu-columns`,title:`Columns (checkbox items)`,description:"Checkbox items toggle and keep the menu open; the app keeps the state and passes it back in `items`.",component:D,source:b[`menu-columns`]},{id:`menu-density`,title:`Density and sort (radio groups)`,description:"Two `group`s of radio items, each a labelled section; checking one unchecks the others in its group.",component:T,source:b[`menu-density`]},{id:`menu-submenu`,title:`Submenus`,description:"Items with `children` open a submenu beside them. A shortcut is display only.",component:A,source:b[`menu-submenu`]},{id:`menu-disabled-reason`,title:`Disabled, with a reason`,description:"A string `disabled` says why. The item stays focusable, so keyboard and screen-reader users can find out.",component:_,source:b[`menu-disabled-reason`]},{id:`menu-danger-confirm`,title:`Destructive action with a confirmation`,description:'`tone: "danger"` colours the item; the handler asks `ScscDialogService.confirm()`, which returns focus to the menu button.',component:k,source:b[`menu-danger-confirm`]},{id:`menu-links`,title:`Link items`,description:"`link` renders a router link and `href` a plain one; `external` opens a new tab and says so.",component:N,source:b[`menu-links`]},{id:`menu-custom-trigger`,title:`Custom trigger`,description:'`scscMenuTrigger` on a `scsc-button`; `align="end"` and `placement="auto"` for a header action.',component:x,source:b[`menu-custom-trigger`]}],a11y:['The WAI-ARIA **menu button** pattern: the trigger is a native `<button>` and the list a `role="menu"`. Opening it (click, Enter, Space, ArrowDown) moves focus to the first item; focus alone never opens it.',`One Tab stop: the items are reached with the arrow keys (roving focus), never with Tab. Tab closes the menu and moves on from the trigger, as if the menu were not there.`,"Choosing an action closes the menu and returns focus to the trigger **before** `select` emits, so a confirmation dialog opened from the handler returns focus to the trigger as well.","Disabled items stay focusable with `aria-disabled` (APG), so their reason is read: the reason string is visible under the label and is the item’s accessible description.",`Each item is named by its label alone; the description, disabled reason and shortcut are its accessible description, so the name matches what is on screen (2.5.3).`,`Checked state is drawn as a box or a dot, not by colour; danger items use the error ink and, in the demos, a trash or undo icon.`,"The panel is a top-layer popover inside `scsc-menu` in the DOM, so it is not clipped, reads in place, takes the surrounding theme, and works inside a native modal dialog or drawer.","Items are at least 44px tall in comfortable density and 33px in compact; the `sm` trigger keeps a 44px hit area (`scsc-hit`). Opening animates with `scsc-anim-scale-in`, which reduced motion turns into a short fade."],keyboard:[{keys:`Enter / Space / ArrowDown`,action:`On the trigger: opens the menu and focuses the first item.`},{keys:`ArrowUp`,action:`On the trigger: opens the menu and focuses the last item.`},{keys:`ArrowDown / ArrowUp`,action:`Next / previous item, wrapping at the ends.`},{keys:`Home / End`,action:`First / last item (PageUp / PageDown too).`},{keys:`A–Z, 0–9`,action:`Type-ahead: moves to the next item whose label starts with what was typed.`},{keys:`Enter / Space (on an item)`,action:`An action or link: activates it, closes the menu and returns focus to the trigger. A checkbox or radio item: toggles or checks it and keeps the menu open. A disabled item: nothing.`},{keys:`ArrowRight (ArrowLeft in RTL)`,action:`On an item with a submenu: opens it and focuses its first item (Enter and Space too).`},{keys:`ArrowLeft (ArrowRight in RTL)`,action:`In a submenu: closes it and returns focus to its parent item.`},{keys:`Escape`,action:`Closes the submenu (focus to its parent item), or the menu (focus to the trigger).`},{keys:`Tab / Shift + Tab`,action:`Closes every level and moves to the next / previous control after the trigger.`}],aria:['Trigger: `aria-haspopup="menu"`, `aria-expanded`, and `aria-controls` (the menu’s id) while open.','Menu: `role="menu"`, named by `aria-labelledby` (the trigger) or by `label` as `aria-label`.','Items: `role="menuitem"`, `menuitemcheckbox` or `menuitemradio` with `aria-checked`; `aria-disabled="true"` when disabled; `aria-labelledby` (the label) and `aria-describedby` (description, reason, shortcut).','An item with a submenu: `aria-haspopup="menu"`, `aria-expanded` and `aria-controls`; the submenu is a `role="menu"` labelled by that item.','Sections: `role="group"` with `aria-label` (the visible heading is `aria-hidden`); separators are `role="separator"`. Link items are `<a role="menuitem">`.'],appMustProvide:['A trigger name that says what the menu acts on: `triggerLabel` for the icon trigger ("More actions for 24CV012345"), or visible text on your own trigger.',"A confirmation for destructive items, in the `select` handler.","The Angular router when any item uses `link`."],related:[`dropdown`,`button`,`icon-button`,`popover`,`table`,`dialog`]};export{qe as MENU_DOCS};