import{t as r}from"./chunk-DxqKAYlM.js";import{At as NP,Es as sD,F as EN,H as FN,Hs as y_,Ka as Ov,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Qt as SN,Un as Za,Xa as Pv,Yo as iD,bo as Y_,cs as lc,ds as nD,gn as VN,ha as Eg,ka as Ig,ks as t_,mi as sr,n as $N,nn as TN,pi as sn,ra as Af,rr as da,ta as $f,va as G_,xs as q$1,ya as Ga,yt as LN,za as Lf}from"./main-O6OT5H7H.js";function q(i,e){if(i&1&&(Ga(0,`scsc-tag`,14),G_(1),Lf()),i&2){let s=e.$implicit,t=y_();Pv(`tone`,t.priorityToneOf(s.priority)),Jb(),nD(s.priority)}}function J(i,e){if(i&1&&(Ga(0,`scsc-tag`,15),G_(1),Lf()),i&2){let s=e.$implicit,t=y_();Pv(`tone`,t.statusToneOf(s.status)),Jb(),nD(s.status)}}function F(i,e){if(i&1){let s=d_();Ga(0,`div`,12)(1,`p`,16),G_(2),Lf(),Ga(3,`div`,17)(4,`scsc-tag`,18),G_(5),Lf(),Ga(6,`scsc-tag`,19),G_(7),Lf()(),uc(8,`scsc-description-list`,20),Ga(9,`div`,17)(10,`scsc-button`,21),lc(`click`,function(){let c=Eg(s),n=y_();return Ig(n.complete([c.id]))}),G_(11,` Mark complete `),Lf(),Ga(12,`scsc-button`,22),lc(`click`,function(){let c=Eg(s),n=y_();return Ig(n.assignToMe([c.id]))}),G_(13,` Assign to me `),Lf()()()}if(i&2){let s=e,t=y_();Jb(2),nD(s.caseTitle),Jb(2),Pv(`tone`,t.priorityTone[s.priority]),Jb(),$f(``,s.priority,` priority`),Jb(),Pv(`tone`,t.statusTone[s.status]),Jb(),nD(s.status),Jb(),Pv(`items`,t.details()),Jb(2),Pv(`disabled`,s.status===`Done`)}}function j(i,e){i&1&&(Ga(0,`p`,13),G_(1,` Choose a task in the list to see its details here. `),Lf())}var U={High:`error`,Normal:`info`,Low:`neutral`};var V={New:`primary`,"In progress":`info`,Waiting:`warning`,Done:`success`};var f=i=>({type:`enum`,options:i.map(e=>({value:e,label:e}))});var re=[{id:`work-queue`,title:`Work queue`,description:"App shell; `scsc-table` with search, Assigned to / Priority / Status facets, a bulk bar (Assign to me, Mark complete), row actions (Open, Assign, Complete, Cancel with confirmation) and cards below `md`; the active row opens in the `scsc-split-shell` detail pane.",component:class i{priorityTone=U;statusTone=V;priorityToneOf=e=>U[e];statusToneOf=e=>V[e];detailOpen=q$1(!1);status=q$1(``);nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`dashboard`},{label:`Work queue`,icon:`inbox`,link:`.`,exact:!0,badge:`12`},{label:`Cases`,icon:`folder-open`,link:`cases`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`}]}];tasks=q$1([{id:`t1`,caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Mgmt.`,task:`Review default judgment packet`,assignee:`Jordan Kim`,priority:`High`,status:`In progress`,due:`2026-10-01`,department:`Dept. 10`},{id:`t2`,caseNumber:`24CV015502`,caseTitle:`Chen v. Baylands Logistics, Inc.`,task:`Reject filing: missing proof of service`,assignee:`Maria Chen`,priority:`High`,status:`New`,due:`2026-09-30`,department:`Dept. 10`},{id:`t3`,caseNumber:`24FL004821`,caseTitle:`In re Marriage of Patel`,task:`Process fee waiver (FW-001)`,assignee:`Unassigned`,priority:`Normal`,status:`New`,due:`2026-10-03`,department:`Dept. F3`},{id:`t4`,caseNumber:`23CV098811`,caseTitle:`Okafor v. Silver Creek Motors`,task:`Issue minute order`,assignee:`David Okafor`,priority:`Normal`,status:`Waiting`,due:`2026-10-02`,department:`Dept. 16`},{id:`t5`,caseNumber:`23PR000912`,caseTitle:`Estate of Harold Brandt`,task:`Calendar petition for final distribution`,assignee:`Jordan Kim`,priority:`Low`,status:`New`,due:`2026-10-09`,department:`Dept. 13`},{id:`t6`,caseNumber:`24CR007733`,caseTitle:`People v. Ortiz`,task:`Order interpreter (Spanish)`,assignee:`Priya Nair`,priority:`High`,status:`In progress`,due:`2026-10-05`,department:`Dept. 42`},{id:`t7`,caseNumber:`24CV016020`,caseTitle:`Reyes v. City of San Jose`,task:`Scan exhibits`,assignee:`Maria Chen`,priority:`Low`,status:`Done`,due:`2026-09-28`,department:`Dept. 19`},{id:`t8`,caseNumber:`24SC001177`,caseTitle:`Liu v. Whitfield`,task:`Mail notice of hearing`,assignee:`Unassigned`,priority:`Normal`,status:`New`,due:`2026-10-04`,department:`Dept. 21`},{id:`t9`,caseNumber:`24CV017310`,caseTitle:`Herrera v. Bayview Dental Group`,task:`Review stipulation to continue`,assignee:`David Okafor`,priority:`Normal`,status:`In progress`,due:`2026-10-06`,department:`Dept. 10`}]);active=q$1(null);columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,sortable:!0,width:`9rem`},{key:`task`,header:`Task`,sortable:!0},{key:`assignee`,header:`Assigned to`,sortable:!0,filter:f([`Jordan Kim`,`Maria Chen`,`David Okafor`,`Priya Nair`,`Unassigned`])},{key:`priority`,header:`Priority`,filter:f([`High`,`Normal`,`Low`]),width:`7rem`},{key:`status`,header:`Status`,filter:f([`New`,`In progress`,`Waiting`,`Done`]),width:`8rem`},{key:`due`,header:`Due`,type:`date`,sortable:!0,width:`8rem`}];byId=e=>e.id;taskLabel=e=>`${e.caseNumber} ${e.task}`;rowActions=[{id:`open`,label:`Open`,icon:`action.view`},{id:`assign`,label:`Assign to me`,icon:`people.user-add`},{id:`complete`,label:`Mark complete`,icon:`action.check`,disabled:e=>e.status===`Done`?`Already complete`:!1},{id:`cancel`,label:`Cancel task`,icon:`action.delete`,tone:`danger`,confirm:!0,separatorBefore:!0}];bulkActions=[{id:`assign`,label:`Assign to me`,icon:`people.user-add`,handler:e=>this.assignToMe([...e.keys])},{id:`complete`,label:`Mark complete`,icon:`action.check`,handler:e=>this.complete([...e.keys])}];summary=ut(()=>{let e=this.tasks().filter(s=>s.status!==`Done`);return`${e.length} open tasks \xB7 ${e.filter(s=>s.priority===`High`).length} high priority`});details=ut(()=>{let e=this.active();return e?[{term:`Department`,value:e.department},{term:`Assigned to`,value:e.assignee},{term:`Due`,value:e.due,numeric:!0}]:[]});open(e){this.active.set(e??null),this.detailOpen.set(!!e)}onAction(e){e.action.id===`open`&&this.open(e.row),e.action.id===`assign`&&this.assignToMe([e.row.id]),e.action.id===`complete`&&this.complete([e.row.id]),e.action.id===`cancel`&&(this.tasks.update(s=>s.filter(t=>t.id!==e.row.id)),this.active()?.id===e.row.id&&this.open(null),this.status.set(`Cancelled ${e.row.task}.`))}assignToMe(e){this.patch(e,{assignee:`Jordan Kim`}),this.status.set(`${e.length} ${e.length===1?`task`:`tasks`} assigned to you.`)}complete(e){this.patch(e,{status:`Done`}),this.status.set(`${e.length} ${e.length===1?`task`:`tasks`} marked complete.`)}patch(e,s){this.tasks.update(c=>c.map(n=>e.includes(n.id)?r(r({},n),s):n));let t=this.active();t&&e.includes(t.id)&&this.active.set(r(r({},t),s))}static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-work-queue-template`]],decls:18,vars:14,consts:[[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Civil Division · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`],[`listWidth`,`min(62%, 52rem)`,3,`detailOpenChange`,`detailOpen`],[`slot`,`list`,1,`p-4`,`lg:p-6`],[`title`,`Work queue`,3,`description`],[`aria-live`,`polite`,1,`sr-only`],[`label`,`Tasks`,`selectable`,`multi`,`searchable`,``,`searchPlaceholder`,`Search cases, tasks, people…`,`paginator`,`pages`,`responsive`,`stack`,`emptyMessage`,`No tasks match your filters.`,1,`mt-4`,3,`activeRowChange`,`action`,`columns`,`rows`,`rowKey`,`rowLabel`,`bulkActions`,`rowActions`,`activeRow`,`pageSize`],[`scscCell`,`priority`],[`scscCell`,`status`],[3,`title`],[1,`flex`,`flex-col`,`gap-4`],[1,`text-sm`,`text-base-content/70`],[`size`,`sm`,3,`tone`],[`size`,`sm`,`variant`,`outline`,3,`tone`],[1,`font-medium`],[1,`flex`,`flex-wrap`,`gap-2`],[3,`tone`],[`variant`,`outline`,3,`tone`],[3,`items`],[`size`,`sm`,3,`click`,`disabled`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`]],template:function(s,t){if(s&1&&(Ga(0,`scsc-app-shell`)(1,`scsc-masthead`,0)(2,`scsc-user-menu`,1)(3,`li`)(4,`button`,2),G_(5,`Sign out`),Lf()()()(),uc(6,`scsc-sidebar-nav`,3),Ga(7,`scsc-split-shell`,4),sD(`detailOpenChange`,function(n){return Y_(t.detailOpen,n)||(t.detailOpen=n),n}),Ga(8,`div`,5),uc(9,`scsc-page-header`,6),Ga(10,`p`,7),G_(11),Lf(),Ga(12,`scsc-table`,8),lc(`activeRowChange`,function(n){return t.open(n)})(`action`,function(n){return t.onAction(n)}),Ov(13,q,2,2,`ng-template`,9)(14,J,2,2,`ng-template`,10),Lf()(),Ga(15,`scsc-detail-panel`,11),JT(16,F,14,7,`div`,12)(17,j,2,0,`p`,13),Lf()()()),s&2){let c;Jb(6),Pv(`sections`,t.nav),Jb(),iD(`detailOpen`,t.detailOpen),Jb(2),Pv(`description`,t.summary()),Jb(2),nD(t.status()),Jb(),Pv(`columns`,t.columns)(`rows`,t.tasks())(`rowKey`,t.byId)(`rowLabel`,t.taskLabel)(`bulkActions`,t.bulkActions)(`rowActions`,t.rowActions)(`activeRow`,t.active())(`pageSize`,8),Jb(3),Pv(`title`,t.active()?t.active().caseNumber+` · `+t.active().task:`Select a task`),Jb(),t_((c=t.active())?16:17,c)}},dependencies:[SN,sn,da,NP,EN,FN,TN,$N,LN,Za,sr,VN],encapsulation:2})},source:{"work-queue":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscAppShell,
  ScscButton,
  ScscCellDef,
  ScscDescriptionList,
  ScscDetailPanel,
  ScscMasthead,
  ScscPageHeader,
  ScscSidebarNav,
  ScscSplitShell,
  ScscTable,
  ScscTag,
  ScscUserMenu,
  type ScscBulkAction,
  type ScscColumn,
  type ScscNavSection,
  type ScscRowAction,
  type ScscRowActionEvent,
  type ScscTagTone,
} from '@scscourt/design';

type Priority = 'High' | 'Normal' | 'Low';
type Status = 'New' | 'In progress' | 'Waiting' | 'Done';

interface Task {
  id: string;
  caseNumber: string;
  caseTitle: string;
  task: string;
  assignee: string;
  priority: Priority;
  status: Status;
  due: string;
  department: string;
}

const PRIORITY_TONE: Record<Priority, ScscTagTone> = {
  High: 'error',
  Normal: 'info',
  Low: 'neutral',
};
const STATUS_TONE: Record<Status, ScscTagTone> = {
  New: 'primary',
  'In progress': 'info',
  Waiting: 'warning',
  Done: 'success',
};
const enumFilter = (values: string[]) => ({
  type: 'enum' as const,
  options: values.map((v) => ({ value: v, label: v })),
});

@Component({
  selector: 'app-work-queue-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAppShell,
    ScscButton,
    ScscCellDef,
    ScscDescriptionList,
    ScscDetailPanel,
    ScscMasthead,
    ScscPageHeader,
    ScscSidebarNav,
    ScscSplitShell,
    ScscTable,
    ScscTag,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Civil Division \xB7 Downtown Superior Court"
        logoSrc="scsc-seal.png"
      >
        <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <scsc-split-shell listWidth="min(62%, 52rem)" [(detailOpen)]="detailOpen">
        <div slot="list" class="p-4 lg:p-6">
          <scsc-page-header title="Work queue" [description]="summary()" />
          <p class="sr-only" aria-live="polite">{{ status() }}</p>
          <scsc-table
            class="mt-4"
            label="Tasks"
            [columns]="columns"
            [rows]="tasks()"
            [rowKey]="byId"
            [rowLabel]="taskLabel"
            selectable="multi"
            [bulkActions]="bulkActions"
            [rowActions]="rowActions"
            [activeRow]="active()"
            (activeRowChange)="open($event)"
            (action)="onAction($event)"
            searchable
            searchPlaceholder="Search cases, tasks, people\u2026"
            paginator="pages"
            [pageSize]="8"
            responsive="stack"
            emptyMessage="No tasks match your filters."
          >
            <ng-template scscCell="priority" let-row>
              <scsc-tag size="sm" [tone]="priorityToneOf(row.priority)">{{
                row.priority
              }}</scsc-tag>
            </ng-template>
            <ng-template scscCell="status" let-row>
              <scsc-tag size="sm" variant="outline" [tone]="statusToneOf(row.status)">{{
                row.status
              }}</scsc-tag>
            </ng-template>
          </scsc-table>
        </div>

        <scsc-detail-panel
          [title]="active() ? active()!.caseNumber + ' \xB7 ' + active()!.task : 'Select a task'"
        >
          @if (active(); as t) {
            <div class="flex flex-col gap-4">
              <p class="font-medium">{{ t.caseTitle }}</p>
              <div class="flex flex-wrap gap-2">
                <scsc-tag [tone]="priorityTone[t.priority]">{{ t.priority }} priority</scsc-tag>
                <scsc-tag variant="outline" [tone]="statusTone[t.status]">{{ t.status }}</scsc-tag>
              </div>
              <scsc-description-list [items]="details()" />
              <div class="flex flex-wrap gap-2">
                <scsc-button size="sm" [disabled]="t.status === 'Done'" (click)="complete([t.id])">
                  Mark complete
                </scsc-button>
                <scsc-button size="sm" variant="neutral" outline (click)="assignToMe([t.id])">
                  Assign to me
                </scsc-button>
              </div>
            </div>
          } @else {
            <p class="text-sm text-base-content/70">
              Choose a task in the list to see its details here.
            </p>
          }
        </scsc-detail-panel>
      </scsc-split-shell>
    </scsc-app-shell>
  \`,
})
export class WorkQueueTemplate {
  protected readonly priorityTone = PRIORITY_TONE;
  protected readonly statusTone = STATUS_TONE;
  protected readonly priorityToneOf = (p: Priority) => PRIORITY_TONE[p];
  protected readonly statusToneOf = (s: Status) => STATUS_TONE[s];
  protected readonly detailOpen = signal(false);
  protected readonly status = signal('');
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: 'dashboard' },
        { label: 'Work queue', icon: 'inbox', link: '.', exact: true, badge: '12' },
        { label: 'Cases', icon: 'folder-open', link: 'cases' },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
      ],
    },
  ];

  protected readonly tasks = signal<Task[]>([
    {
      id: 't1',
      caseNumber: '24CV012345',
      caseTitle: 'Alvarez v. Northgate Property Mgmt.',
      task: 'Review default judgment packet',
      assignee: 'Jordan Kim',
      priority: 'High',
      status: 'In progress',
      due: '2026-10-01',
      department: 'Dept. 10',
    },
    {
      id: 't2',
      caseNumber: '24CV015502',
      caseTitle: 'Chen v. Baylands Logistics, Inc.',
      task: 'Reject filing: missing proof of service',
      assignee: 'Maria Chen',
      priority: 'High',
      status: 'New',
      due: '2026-09-30',
      department: 'Dept. 10',
    },
    {
      id: 't3',
      caseNumber: '24FL004821',
      caseTitle: 'In re Marriage of Patel',
      task: 'Process fee waiver (FW-001)',
      assignee: 'Unassigned',
      priority: 'Normal',
      status: 'New',
      due: '2026-10-03',
      department: 'Dept. F3',
    },
    {
      id: 't4',
      caseNumber: '23CV098811',
      caseTitle: 'Okafor v. Silver Creek Motors',
      task: 'Issue minute order',
      assignee: 'David Okafor',
      priority: 'Normal',
      status: 'Waiting',
      due: '2026-10-02',
      department: 'Dept. 16',
    },
    {
      id: 't5',
      caseNumber: '23PR000912',
      caseTitle: 'Estate of Harold Brandt',
      task: 'Calendar petition for final distribution',
      assignee: 'Jordan Kim',
      priority: 'Low',
      status: 'New',
      due: '2026-10-09',
      department: 'Dept. 13',
    },
    {
      id: 't6',
      caseNumber: '24CR007733',
      caseTitle: 'People v. Ortiz',
      task: 'Order interpreter (Spanish)',
      assignee: 'Priya Nair',
      priority: 'High',
      status: 'In progress',
      due: '2026-10-05',
      department: 'Dept. 42',
    },
    {
      id: 't7',
      caseNumber: '24CV016020',
      caseTitle: 'Reyes v. City of San Jose',
      task: 'Scan exhibits',
      assignee: 'Maria Chen',
      priority: 'Low',
      status: 'Done',
      due: '2026-09-28',
      department: 'Dept. 19',
    },
    {
      id: 't8',
      caseNumber: '24SC001177',
      caseTitle: 'Liu v. Whitfield',
      task: 'Mail notice of hearing',
      assignee: 'Unassigned',
      priority: 'Normal',
      status: 'New',
      due: '2026-10-04',
      department: 'Dept. 21',
    },
    {
      id: 't9',
      caseNumber: '24CV017310',
      caseTitle: 'Herrera v. Bayview Dental Group',
      task: 'Review stipulation to continue',
      assignee: 'David Okafor',
      priority: 'Normal',
      status: 'In progress',
      due: '2026-10-06',
      department: 'Dept. 10',
    },
  ]);
  protected readonly active = signal<Task | null>(null);

  protected readonly columns: ScscColumn<Task>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, sortable: true, width: '9rem' },
    { key: 'task', header: 'Task', sortable: true },
    {
      key: 'assignee',
      header: 'Assigned to',
      sortable: true,
      filter: enumFilter(['Jordan Kim', 'Maria Chen', 'David Okafor', 'Priya Nair', 'Unassigned']),
    },
    {
      key: 'priority',
      header: 'Priority',
      filter: enumFilter(['High', 'Normal', 'Low']),
      width: '7rem',
    },
    {
      key: 'status',
      header: 'Status',
      filter: enumFilter(['New', 'In progress', 'Waiting', 'Done']),
      width: '8rem',
    },
    { key: 'due', header: 'Due', type: 'date', sortable: true, width: '8rem' },
  ];
  protected readonly byId = (t: Task) => t.id;
  protected readonly taskLabel = (t: Task) => \`\${t.caseNumber} \${t.task}\`;

  protected readonly rowActions: ScscRowAction<Task>[] = [
    { id: 'open', label: 'Open', icon: 'action.view' },
    { id: 'assign', label: 'Assign to me', icon: 'people.user-add' },
    {
      id: 'complete',
      label: 'Mark complete',
      icon: 'action.check',
      disabled: (t) => (t.status === 'Done' ? 'Already complete' : false),
    },
    {
      id: 'cancel',
      label: 'Cancel task',
      icon: 'action.delete',
      tone: 'danger',
      confirm: true,
      separatorBefore: true,
    },
  ];
  protected readonly bulkActions: ScscBulkAction<Task, string>[] = [
    {
      id: 'assign',
      label: 'Assign to me',
      icon: 'people.user-add',
      handler: (s) => this.assignToMe([...s.keys]),
    },
    {
      id: 'complete',
      label: 'Mark complete',
      icon: 'action.check',
      handler: (s) => this.complete([...s.keys]),
    },
  ];

  protected readonly summary = computed(() => {
    const open = this.tasks().filter((t) => t.status !== 'Done');
    return \`\${open.length} open tasks \xB7 \${open.filter((t) => t.priority === 'High').length} high priority\`;
  });
  protected readonly details = computed(() => {
    const t = this.active();
    if (!t) return [];
    return [
      { term: 'Department', value: t.department },
      { term: 'Assigned to', value: t.assignee },
      { term: 'Due', value: t.due, numeric: true },
    ];
  });

  protected open(task: Task | null | undefined): void {
    this.active.set(task ?? null);
    this.detailOpen.set(!!task);
  }

  protected onAction(e: ScscRowActionEvent<Task>): void {
    if (e.action.id === 'open') this.open(e.row);
    if (e.action.id === 'assign') this.assignToMe([e.row.id]);
    if (e.action.id === 'complete') this.complete([e.row.id]);
    if (e.action.id === 'cancel') {
      this.tasks.update((list) => list.filter((t) => t.id !== e.row.id));
      if (this.active()?.id === e.row.id) this.open(null);
      this.status.set(\`Cancelled \${e.row.task}.\`);
    }
  }

  protected assignToMe(ids: string[]): void {
    this.patch(ids, { assignee: 'Jordan Kim' });
    this.status.set(\`\${ids.length} \${ids.length === 1 ? 'task' : 'tasks'} assigned to you.\`);
  }

  protected complete(ids: string[]): void {
    this.patch(ids, { status: 'Done' });
    this.status.set(\`\${ids.length} \${ids.length === 1 ? 'task' : 'tasks'} marked complete.\`);
  }

  private patch(ids: string[], change: Partial<Task>): void {
    this.tasks.update((list) => list.map((t) => (ids.includes(t.id) ? { ...t, ...change } : t)));
    const a = this.active();
    if (a && ids.includes(a.id)) this.active.set({ ...a, ...change });
  }
}
`,html:`<scsc-app-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Civil Division \xB7 Downtown Superior Court"
    logoSrc="scsc-seal.png"
  >
    <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <scsc-split-shell listWidth="min(62%, 52rem)" [(detailOpen)]="detailOpen">
    <div slot="list" class="p-4 lg:p-6">
      <scsc-page-header title="Work queue" [description]="summary()" />
      <p class="sr-only" aria-live="polite">{{ status() }}</p>
      <scsc-table
        class="mt-4"
        label="Tasks"
        [columns]="columns"
        [rows]="tasks()"
        [rowKey]="byId"
        [rowLabel]="taskLabel"
        selectable="multi"
        [bulkActions]="bulkActions"
        [rowActions]="rowActions"
        [activeRow]="active()"
        (activeRowChange)="open($event)"
        (action)="onAction($event)"
        searchable
        searchPlaceholder="Search cases, tasks, people\u2026"
        paginator="pages"
        [pageSize]="8"
        responsive="stack"
        emptyMessage="No tasks match your filters."
      >
        <ng-template scscCell="priority" let-row>
          <scsc-tag size="sm" [tone]="priorityToneOf(row.priority)">{{
            row.priority
          }}</scsc-tag>
        </ng-template>
        <ng-template scscCell="status" let-row>
          <scsc-tag size="sm" variant="outline" [tone]="statusToneOf(row.status)">{{
            row.status
          }}</scsc-tag>
        </ng-template>
      </scsc-table>
    </div>

    <scsc-detail-panel
      [title]="active() ? active()!.caseNumber + ' \xB7 ' + active()!.task : 'Select a task'"
    >
      @if (active(); as t) {
        <div class="flex flex-col gap-4">
          <p class="font-medium">{{ t.caseTitle }}</p>
          <div class="flex flex-wrap gap-2">
            <scsc-tag [tone]="priorityTone[t.priority]">{{ t.priority }} priority</scsc-tag>
            <scsc-tag variant="outline" [tone]="statusTone[t.status]">{{ t.status }}</scsc-tag>
          </div>
          <scsc-description-list [items]="details()" />
          <div class="flex flex-wrap gap-2">
            <scsc-button size="sm" [disabled]="t.status === 'Done'" (click)="complete([t.id])">
              Mark complete
            </scsc-button>
            <scsc-button size="sm" variant="neutral" outline (click)="assignToMe([t.id])">
              Assign to me
            </scsc-button>
          </div>
        </div>
      } @else {
        <p class="text-sm text-base-content/70">
          Choose a task in the list to see its details here.
        </p>
      }
    </scsc-detail-panel>
  </scsc-split-shell>
</scsc-app-shell>
`}}[`work-queue`],layout:`page`,height:`52rem`}];export{re as DEMOS};