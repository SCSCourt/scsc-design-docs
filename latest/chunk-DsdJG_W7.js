import{t as r}from"./chunk-DxqKAYlM.js";import{H as FN,Ms as uc,Na as Jb,Qt as SN,Xa as Pv,Zi as za,cs as lc,ds as nD,gn as VN,n as $N,nn as TN,ra as Af,va as G_,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import{n as et}from"./chunk-ByW7cbz_.js";var E=[`Dept. 10`,`Dept. 16`,`Dept. 19`,`Dept. 21`];var x=[`None`,`Spanish`,`Vietnamese`,`Mandarin`,`Tagalog`];var N=[`Case management`,`Motion to compel`,`Demurrer`,`Trial setting`,`OSC re: dismissal`];var q=[{id:`bulk-edit`,title:`Bulk edit`,description:"App shell; `scsc-data-grid` with editable date (validated), department and interpreter pick lists and a remote checkbox; Save emits the change set. Checked in the browser gate (virtual scrolling needs layout).",component:class m{saved=q$1(``);nav=[{items:[{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`Reassign hearings`,icon:`table`,link:`.`,exact:!0}]}];rows=q$1(Array.from({length:24},(e,t)=>({id:`h${t+1}`,caseNumber:`24CV0${String(12345+t*37).padStart(5,`0`)}`,type:N[t%N.length],date:`2026-11-0${2+t%5}`,department:`Dept. 10`,interpreter:t%6===0?`Spanish`:`None`,remote:t%3===0})));columns=[{key:`caseNumber`,header:`Case No.`,width:`9rem`},{key:`type`,header:`Hearing`,width:`12rem`},{key:`date`,header:`Date`,type:`date`,width:`10rem`,editable:!0,required:!0,validate:e=>typeof e==`string`&&e>=`2026-11-02`?null:`Pick Nov 2 or later.`},{key:`department`,header:`Department`,width:`10rem`,editable:!0,options:E.map(e=>({value:e,label:e}))},{key:`interpreter`,header:`Interpreter`,width:`10rem`,editable:!0,options:x.map(e=>({value:e,label:e}))},{key:`remote`,header:`Remote`,type:`boolean`,width:`7rem`,editable:!0}];save(e){this.rows.update(t=>t.map(a=>r(r({},a),e.updated.get(a.id)??{}))),this.saved.set(`Saved ${e.updated.size} hearings; amended notices queued.`)}static ɵfac=function(t){return new(t||m)};static ɵcmp=Af({type:m,selectors:[[`app-bulk-edit-template`]],decls:14,vars:4,consts:[[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Calendar management`,`logoSrc`,`scsc-seal.png`],[`name`,`David Okafor`,`email`,`dokafor@scscourt.org`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`],[1,`flex`,`flex-col`,`gap-4`,`p-4`,`lg:p-8`],[`title`,`Reassign hearings`,`description`,`Dept. 10 is dark Nov 2–6. Move its hearings: type over a cell or press Enter to edit, Tab to the next cell, then Save.`],[`status`,`info`,`title`,`Notices are sent on save`],[`label`,`Hearings, Dept. 10, Nov 2–6`,`rowKey`,`id`,`height`,`420px`,3,`save`,`columns`,`rows`],[`role`,`status`,1,`min-h-5`,`text-sm`,`text-base-content/70`]],template:function(t,a){t&1&&(Ga(0,`scsc-app-shell`)(1,`scsc-masthead`,0)(2,`scsc-user-menu`,1)(3,`li`)(4,`button`,2),G_(5,`Sign out`),Lf()()()(),uc(6,`scsc-sidebar-nav`,3),Ga(7,`div`,4),uc(8,`scsc-page-header`,5),Ga(9,`scsc-alert`,6),G_(10,` Every party on a changed hearing gets an amended notice by email and mail. `),Lf(),Ga(11,`scsc-data-grid`,7),lc(`save`,function(C){return a.save(C)}),Lf(),Ga(12,`p`,8),G_(13),Lf()()()),t&2&&(Jb(6),Pv(`sections`,a.nav),Jb(5),Pv(`columns`,a.columns)(`rows`,a.rows()),Jb(2),nD(a.saved()))},dependencies:[za,SN,et,FN,TN,$N,VN],encapsulation:2})},source:{"bulk-edit":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscAlert,
  ScscAppShell,
  ScscMasthead,
  ScscPageHeader,
  ScscSidebarNav,
  ScscUserMenu,
  type ScscNavSection,
} from '@scscourt/design';
import {
  ScscDataGrid,
  type ScscGridChangeSet,
  type ScscGridColumn,
} from '@scscourt/design/data-grid';

interface Hearing extends Record<string, unknown> {
  id: string;
  caseNumber: string;
  type: string;
  date: string;
  department: string;
  interpreter: string;
  remote: boolean;
}

const DEPARTMENTS = ['Dept. 10', 'Dept. 16', 'Dept. 19', 'Dept. 21'];
const LANGUAGES = ['None', 'Spanish', 'Vietnamese', 'Mandarin', 'Tagalog'];
const TYPES = [
  'Case management',
  'Motion to compel',
  'Demurrer',
  'Trial setting',
  'OSC re: dismissal',
];

@Component({
  selector: 'app-bulk-edit-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAlert,
    ScscAppShell,
    ScscDataGrid,
    ScscMasthead,
    ScscPageHeader,
    ScscSidebarNav,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Calendar management"
        logoSrc="scsc-seal.png"
      >
        <scsc-user-menu name="David Okafor" email="dokafor@scscourt.org">
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <div class="flex flex-col gap-4 p-4 lg:p-8">
        <scsc-page-header
          title="Reassign hearings"
          description="Dept. 10 is dark Nov 2\u20136. Move its hearings: type over a cell or press Enter to edit, Tab to the next cell, then Save."
        />
        <scsc-alert status="info" title="Notices are sent on save">
          Every party on a changed hearing gets an amended notice by email and mail.
        </scsc-alert>
        <scsc-data-grid
          label="Hearings, Dept. 10, Nov 2\u20136"
          [columns]="columns"
          [rows]="rows()"
          rowKey="id"
          height="420px"
          (save)="save($event)"
        />
        <p role="status" class="min-h-5 text-sm text-base-content/70">{{ saved() }}</p>
      </div>
    </scsc-app-shell>
  \`,
})
export class BulkEditTemplate {
  protected readonly saved = signal('');
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
        { label: 'Reassign hearings', icon: 'table', link: '.', exact: true },
      ],
    },
  ];
  protected readonly rows = signal<Hearing[]>(
    Array.from({ length: 24 }, (_, i) => ({
      id: \`h\${i + 1}\`,
      caseNumber: \`24CV0\${String(12345 + i * 37).padStart(5, '0')}\`,
      type: TYPES[i % TYPES.length],
      date: \`2026-11-0\${2 + (i % 5)}\`,
      department: 'Dept. 10',
      interpreter: i % 6 === 0 ? 'Spanish' : 'None',
      remote: i % 3 === 0,
    })),
  );
  protected readonly columns: ScscGridColumn<Hearing>[] = [
    { key: 'caseNumber', header: 'Case No.', width: '9rem' },
    { key: 'type', header: 'Hearing', width: '12rem' },
    {
      key: 'date',
      header: 'Date',
      type: 'date',
      width: '10rem',
      editable: true,
      required: true,
      validate: (v) => (typeof v === 'string' && v >= '2026-11-02' ? null : 'Pick Nov 2 or later.'),
    },
    {
      key: 'department',
      header: 'Department',
      width: '10rem',
      editable: true,
      options: DEPARTMENTS.map((d) => ({ value: d, label: d })),
    },
    {
      key: 'interpreter',
      header: 'Interpreter',
      width: '10rem',
      editable: true,
      options: LANGUAGES.map((l) => ({ value: l, label: l })),
    },
    { key: 'remote', header: 'Remote', type: 'boolean', width: '7rem', editable: true },
  ];

  protected save(changes: ScscGridChangeSet<Hearing>): void {
    // A real app sends \`changes.updated\` to its API, then replaces \`rows\` with the saved rows.
    this.rows.update((list) =>
      list.map((r) => ({ ...r, ...(changes.updated.get(r.id) ?? {}) }) as Hearing),
    );
    this.saved.set(\`Saved \${changes.updated.size} hearings; amended notices queued.\`);
  }
}
`,html:`<scsc-app-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Calendar management"
    logoSrc="scsc-seal.png"
  >
    <scsc-user-menu name="David Okafor" email="dokafor@scscourt.org">
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <div class="flex flex-col gap-4 p-4 lg:p-8">
    <scsc-page-header
      title="Reassign hearings"
      description="Dept. 10 is dark Nov 2\u20136. Move its hearings: type over a cell or press Enter to edit, Tab to the next cell, then Save."
    />
    <scsc-alert status="info" title="Notices are sent on save">
      Every party on a changed hearing gets an amended notice by email and mail.
    </scsc-alert>
    <scsc-data-grid
      label="Hearings, Dept. 10, Nov 2\u20136"
      [columns]="columns"
      [rows]="rows()"
      rowKey="id"
      height="420px"
      (save)="save($event)"
    />
    <p role="status" class="min-h-5 text-sm text-base-content/70">{{ saved() }}</p>
  </div>
</scsc-app-shell>
`}}[`bulk-edit`],layout:`page`,height:`48rem`,a11y:`skip`}];export{q as DEMOS};