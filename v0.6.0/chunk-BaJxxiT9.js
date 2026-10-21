import{As as uM,Ca as Gv,Co as _2,Es as sD,Fo as dM,Fr as kn,Go as g,Ho as fN,Ki as ye,Ms as uc,Na as Jb,No as cc,Ps as ut,Rs as w_,Ss as rD,Xa as Pv,Yo as iD,bo as Y_,cs as lc,ds as nD,ii as qo,in as Ta,kt as NE,pi as sn,po as X,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{n as et,r as jt,t as J}from"./chunk-ByW7cbz_.js";var w={"data-grid-audit-log":{ts:`import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { ScscButton, ScscHeading, ScscIcon, ScscText } from '@scscourt/design';
import { ScscDataGrid, ScscGridColumn } from '@scscourt/design/data-grid';

interface AuditRow extends Record<string, unknown> {
  at: string;
  user: string;
  action: string;
  record: string;
}

const USERS = ['j.ruiz', 'b.ortiz', 'p.natarajan', 'efile-gateway', 's.liu'];
const ACTIONS = ['Viewed', 'Updated', 'Filed', 'Sealed', 'Exported', 'Printed'];

@Component({
  selector: 'app-data-grid-audit-log-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe, ScscButton, ScscHeading, ScscIcon, ScscText, ScscDataGrid],
  template: \`
    <div class="mb-3 flex flex-wrap items-end justify-between gap-3">
      <div>
        <scsc-heading [level]="3" [visualLevel]="5"> Audit log \xB7 24CV012345 </scsc-heading>
        <scsc-text size="sm" tone="muted" tnum
          >{{ rows.length | number }} events, newest first</scsc-text
        >
      </div>
      <!-- The grid has no table semantics, so offer the same data as a file. -->
      <scsc-button variant="neutral" outline size="sm" (click)="exportCsv()">
        <scsc-icon name="download" size="sm" /> Download CSV
      </scsc-button>
    </div>
    <!-- A 32px row height makes a dense log; every row must keep that height. -->
    <scsc-data-grid
      label="Audit log"
      [columns]="columns"
      [rows]="rows"
      [rowHeight]="32"
      height="352px"
    />
  \`,
})
export class DataGridAuditLogDemo {
  private readonly doc = inject(DOCUMENT);

  protected readonly columns: ScscGridColumn<AuditRow>[] = [
    { key: 'at', header: 'When', type: 'datetime', width: '12rem' },
    { key: 'user', header: 'User', width: '10rem' },
    { key: 'action', header: 'Action', width: '8rem' },
    { key: 'record', header: 'Record', width: '18rem' },
  ];

  protected readonly rows: AuditRow[] = Array.from({ length: 10000 }, (_, i) => {
    const at = new Date(Date.UTC(2026, 8, 28, 23, 42) - i * 197_000);
    return {
      at: at.toISOString().slice(0, 19).replace('T', ' '),
      user: USERS[i % USERS.length],
      action: ACTIONS[(i * 5) % ACTIONS.length],
      record: 'Docket entry ' + (4210 - (i % 4210)),
    };
  });

  protected exportCsv(): void {
    const header = this.columns.map((c) => c.header).join(',');
    const lines = this.rows.map((r) => this.columns.map((c) => '"' + r[c.key] + '"').join(','));
    const blob = new Blob([[header, ...lines].join('\\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = this.doc.createElement('a');
    a.href = url;
    a.download = 'audit-log-24CV012345.csv';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url));
  }
}
`,html:`<div class="mb-3 flex flex-wrap items-end justify-between gap-3">
  <div>
    <scsc-heading [level]="3" [visualLevel]="5"> Audit log \xB7 24CV012345 </scsc-heading>
    <scsc-text size="sm" tone="muted" tnum
      >{{ rows.length | number }} events, newest first</scsc-text
    >
  </div>
  <!-- The grid has no table semantics, so offer the same data as a file. -->
  <scsc-button variant="neutral" outline size="sm" (click)="exportCsv()">
    <scsc-icon name="download" size="sm" /> Download CSV
  </scsc-button>
</div>
<!-- A 32px row height makes a dense log; every row must keep that height. -->
<scsc-data-grid
  label="Audit log"
  [columns]="columns"
  [rows]="rows"
  [rowHeight]="32"
  height="352px"
/>
`},"data-grid-custom-editor":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscInput } from '@scscourt/design';
import { ScscDataGrid, injectCellEditor, type ScscGridColumn } from '@scscourt/design/data-grid';

interface Hearing extends Record<string, unknown> {
  caseNumber: string;
  caption: string;
  time: string;
  interpreter: boolean;
}

/** A custom cell editor: a native time field in 15-minute steps. */
@Component({
  selector: 'app-hearing-time-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscInput],
  template: \`
    <input
      scsc-input
      size="sm"
      type="time"
      step="900"
      class="w-full"
      [attr.aria-label]="editor.label"
      [attr.aria-describedby]="editor.errorId"
      [value]="editor.value() ?? ''"
      (input)="editor.value.set($any($event.target).value)"
    />
  \`,
})
class HearingTimeEditor {
  /** The grid's editing context: the value model, the row and column, commit() and cancel(). */
  protected readonly editor = injectCellEditor<Hearing, string | null>();
}

const toTime = (value: unknown): string => {
  const [h, m] = String(value ?? '')
    .split(':')
    .map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return '';
  return \`\${h % 12 || 12}:\${String(m).padStart(2, '0')} \${h < 12 ? 'AM' : 'PM'}\`;
};

@Component({
  selector: 'app-data-grid-custom-editor-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDataGrid],
  template: \`
    <scsc-data-grid
      label="Dept. 12 calendar, October 6"
      rowKey="caseNumber"
      height="264px"
      [columns]="columns"
      [rows]="hearings"
    />
  \`,
})
export class DataGridCustomEditorDemo {
  protected readonly columns: ScscGridColumn<Hearing>[] = [
    { key: 'caseNumber', header: 'Case No.', width: '9rem' },
    { key: 'caption', header: 'Caption', width: '18rem' },
    {
      key: 'time',
      header: 'Time',
      width: '9rem',
      align: 'end',
      editable: true,
      required: true,
      editor: HearingTimeEditor,
      format: (v) => toTime(v),
      validate: (v) =>
        String(v) >= '08:30' && String(v) <= '16:00' ? null : 'Set a time from 8:30 AM to 4:00 PM.',
    },
    { key: 'interpreter', header: 'Interpreter', type: 'boolean', width: '8rem', editable: true },
  ];

  protected readonly hearings: Hearing[] = [
    {
      caseNumber: '24CV012345',
      caption: 'Reyes v. Pacific Rail',
      time: '08:30',
      interpreter: true,
    },
    { caseNumber: '24CV013002', caption: 'Chen v. Okafor', time: '09:00', interpreter: false },
    {
      caseNumber: '25CV000418',
      caption: 'In re Marriage of Kim',
      time: '09:30',
      interpreter: true,
    },
    {
      caseNumber: '25CV001275',
      caption: 'Patel v. Larsen Farms',
      time: '10:15',
      interpreter: false,
    },
    {
      caseNumber: '25CV002210',
      caption: 'Haddad v. City of San Jos\xE9',
      time: '13:30',
      interpreter: false,
    },
  ];
}
`,html:`<input
  scsc-input
  size="sm"
  type="time"
  step="900"
  class="w-full"
  [attr.aria-label]="editor.label"
  [attr.aria-describedby]="editor.errorId"
  [value]="editor.value() ?? ''"
  (input)="editor.value.set($any($event.target).value)"
/>
`},"data-grid-fee-schedule":{ts:`import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { ScscText } from '@scscourt/design';
import {
  ScscDataGrid,
  type ScscGridChangeSet,
  type ScscGridColumn,
} from '@scscourt/design/data-grid';

interface Fee extends Record<string, unknown> {
  code: string;
  description: string;
  category: string;
  amount: number;
  effective: string;
  copyLimit: number | null;
  waivable: boolean;
}

const CATEGORIES = ['Filing', 'Motion', 'Records', 'Probate', 'Appeals'];
const FEES: Fee[] = [
  ['CV-100', 'First paper, unlimited civil', 'Filing', 435, true],
  ['CV-110', 'First paper, limited civil ($10k\u2013$25k)', 'Filing', 370, true],
  ['CV-120', 'First paper, limited civil (up to $10k)', 'Filing', 225, true],
  ['CV-200', 'Motion or application', 'Motion', 60, true],
  ['CV-210', 'Summary judgment motion', 'Motion', 500, false],
  ['CV-300', 'Copies, per page', 'Records', 0.5, false],
  ['CV-310', 'Certified copy', 'Records', 40, false],
  ['CV-320', 'Records search over 10 minutes', 'Records', 15, true],
  ['PR-100', 'Petition for probate', 'Probate', 435, true],
  ['PR-110', 'Spousal property petition', 'Probate', 435, true],
  ['AP-100', 'Notice of appeal, limited civil', 'Appeals', 100, true],
  ['AP-110', 'Record on appeal, per volume', 'Appeals', 30, false],
].map(([code, description, category, amount, waivable]) => ({
  code: code as string,
  description: description as string,
  category: category as string,
  amount: amount as number,
  effective: '2026-07-01',
  copyLimit: category === 'Records' ? 100 : null,
  waivable: waivable as boolean,
}));

@Component({
  selector: 'app-data-grid-fee-schedule-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDataGrid, ScscText],
  template: \`
    <scsc-data-grid
      label="Civil fee schedule"
      rowKey="code"
      height="352px"
      [columns]="columns"
      [rows]="fees"
      (save)="save($event)"
    />
    <scsc-text size="sm" tone="muted" role="status" class="mt-2 block">{{ saved() }}</scsc-text>
  \`,
})
export class DataGridFeeScheduleDemo {
  private readonly grid = viewChild.required(ScscDataGrid<Fee>);

  protected readonly columns: ScscGridColumn<Fee>[] = [
    { key: 'code', header: 'Code', width: '7rem' },
    { key: 'description', header: 'Description', width: '26rem', editable: true, required: true },
    {
      key: 'category',
      header: 'Category',
      width: '9rem',
      editable: true,
      required: true,
      options: CATEGORIES.map((c) => ({ value: c, label: c })),
    },
    {
      key: 'amount',
      header: 'Amount',
      type: 'currency',
      width: '8rem',
      editable: true,
      required: true,
      min: 0,
      max: 5000,
    },
    {
      key: 'effective',
      header: 'Effective',
      type: 'date',
      width: '10rem',
      editable: true,
      required: true,
      min: '2026-01-01',
    },
    {
      key: 'copyLimit',
      header: 'Page limit',
      type: 'number',
      width: '8rem',
      // Only records fees have a page limit.
      editable: (fee) => fee.category === 'Records',
      min: 1,
      validate: (v) => (v === null || Number.isInteger(v) ? null : 'Enter a whole number.'),
    },
    { key: 'waivable', header: 'Waivable', type: 'boolean', width: '8rem', editable: true },
  ];

  protected readonly fees = FEES;
  protected readonly saved = signal('');

  protected save(changes: ScscGridChangeSet<Fee>): void {
    // A real app sends \`changes.updated\` to its API and accepts the changes once it succeeds.
    this.saved.set(\`Saved changes to \${changes.updated.size} fees.\`);
    this.grid().acceptChanges();
  }
}
`,html:`<scsc-data-grid
  label="Civil fee schedule"
  rowKey="code"
  height="352px"
  [columns]="columns"
  [rows]="fees"
  (save)="save($event)"
/>
<scsc-text size="sm" tone="muted" role="status" class="mt-2 block">{{ saved() }}</scsc-text>
`},"data-grid-filtered":{ts:`import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscSearchInput, ScscSelect, ScscText } from '@scscourt/design';
import { ScscDataGrid, ScscGridColumn } from '@scscourt/design/data-grid';

interface JurorRow extends Record<string, unknown> {
  badge: string;
  name: string;
  status: string;
  group: string;
}

const FIRST = ['Maria', 'Wei', 'Linh', 'Daniel', 'Priya', 'Samuel', 'Grace', 'Omar', 'Hannah'];
const LAST = ['Alvarez', 'Chen', 'Nguyen', 'Reyes', 'Patel', 'Okafor', 'Kim', 'Haddad', 'Larsen'];
const STATUSES = ['Checked in', 'Excused', 'Postponed', 'No response', 'Checked in'];

@Component({
  selector: 'app-data-grid-filtered-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe, ScscSearchInput, ScscSelect, ScscText, ScscDataGrid],
  template: \`
    <div class="mb-3 flex flex-wrap items-center gap-3">
      <scsc-search-input class="w-72" [(value)]="query" placeholder="Filter by name or badge\u2026" />
      <select
        scsc-select
        class="max-w-48"
        aria-label="Juror status"
        [value]="status()"
        (change)="status.set($any($event.target).value)"
      >
        <option value="">All statuses</option>
        <option>Checked in</option>
        <option>Excused</option>
        <option>Postponed</option>
        <option>No response</option>
      </select>
      <scsc-text size="sm" tone="muted" tnum role="status">
        {{ filtered().length | number }} of {{ rows.length | number }} jurors
      </scsc-text>
    </div>
    <!-- The host filters; the grid only virtualizes whatever rows it is given. -->
    <scsc-data-grid label="Jurors" [columns]="columns" [rows]="filtered()" height="352px" />
  \`,
})
export class DataGridFilteredDemo {
  protected readonly columns: ScscGridColumn<JurorRow>[] = [
    { key: 'badge', header: 'Badge', align: 'end', width: '8rem' },
    { key: 'name', header: 'Name', width: '16rem' },
    { key: 'status', header: 'Status', width: '10rem' },
    { key: 'group', header: 'Panel', width: '8rem' },
  ];

  protected readonly rows: JurorRow[] = Array.from({ length: 8000 }, (_, i) => ({
    badge: String(260000 + i),
    name: FIRST[i % 9] + ' ' + LAST[(i * 4) % 9],
    status: STATUSES[(i * 3) % STATUSES.length],
    group: 'Panel ' + ((i % 12) + 1),
  }));

  protected readonly query = signal('');
  protected readonly status = signal('');

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const s = this.status();
    return this.rows.filter(
      (r) =>
        (!s || r.status === s) && (!q || r.name.toLowerCase().includes(q) || r.badge.includes(q)),
    );
  });
}
`,html:`<div class="mb-3 flex flex-wrap items-center gap-3">
  <scsc-search-input class="w-72" [(value)]="query" placeholder="Filter by name or badge\u2026" />
  <select
    scsc-select
    class="max-w-48"
    aria-label="Juror status"
    [value]="status()"
    (change)="status.set($any($event.target).value)"
  >
    <option value="">All statuses</option>
    <option>Checked in</option>
    <option>Excused</option>
    <option>Postponed</option>
    <option>No response</option>
  </select>
  <scsc-text size="sm" tone="muted" tnum role="status">
    {{ filtered().length | number }} of {{ rows.length | number }} jurors
  </scsc-text>
</div>
<!-- The host filters; the grid only virtualizes whatever rows it is given. -->
<scsc-data-grid label="Jurors" [columns]="columns" [rows]="filtered()" height="352px" />
`},"data-grid-juror-roster":{ts:`import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { ScscText } from '@scscourt/design';
import {
  ScscDataGrid,
  emptyGridChanges,
  type ScscGridChangeSet,
  type ScscGridColumn,
} from '@scscourt/design/data-grid';

interface Juror extends Record<string, unknown> {
  badge: string;
  name: string;
  status: string;
  courtroom: string | null;
  phone: string;
  notes: string;
}

const FIRST = ['Maria', 'Wei', 'Linh', 'Daniel', 'Priya', 'Samuel', 'Grace', 'Omar', 'Hannah'];
const LAST = ['Alvarez', 'Chen', 'Nguyen', 'Reyes', 'Patel', 'Okafor', 'Kim', 'Haddad', 'Larsen'];
const STATUSES = ['Summoned', 'Checked in', 'Excused', 'Postponed', 'No response'];
const COURTROOMS = Array.from({ length: 24 }, (_, i) => \`Dept. \${i + 1}\`);

@Component({
  selector: 'app-data-grid-juror-roster-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDataGrid, ScscText],
  template: \`
    <scsc-data-grid
      label="Juror roster, week of October 5"
      height="352px"
      selectionMode="row"
      allowAddRows
      allowDeleteRows
      [rowKey]="byBadge"
      [newRow]="newJuror"
      [columns]="columns"
      [rows]="jurors"
      [(changes)]="draft"
      (save)="save($event)"
    />
    <scsc-text size="sm" tone="muted" role="status" class="mt-2 block">{{ message() }}</scsc-text>
  \`,
})
export class DataGridJurorRosterDemo {
  private readonly grid = viewChild.required(ScscDataGrid<Juror, string>);

  protected readonly columns: ScscGridColumn<Juror>[] = [
    { key: 'badge', header: 'Badge', width: '7rem', align: 'end' },
    { key: 'name', header: 'Name', width: '14rem', editable: true, required: true },
    {
      key: 'status',
      header: 'Status',
      width: '10rem',
      editable: true,
      required: true,
      options: STATUSES.map((s) => ({ value: s, label: s })),
    },
    {
      key: 'courtroom',
      header: 'Courtroom',
      width: '10rem',
      editable: (j) => j.status === 'Checked in',
      editor: 'combobox',
      options: COURTROOMS.map((c) => ({ value: c, label: c })),
    },
    {
      key: 'phone',
      header: 'Phone',
      width: '12rem',
      editable: true,
      // Async: e.g. a server-side check. The cell shows a pending state until it settles.
      validate: (v) =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve(
                !v || /^\\(\\d{3}\\) \\d{3}-\\d{4}$/.test(String(v))
                  ? null
                  : 'Enter a phone number like (408) 555-0100.',
              ),
            400,
          ),
        ),
    },
    { key: 'notes', header: 'Notes', width: '16rem', editable: true, editor: 'textarea' },
  ];

  protected readonly jurors: Juror[] = Array.from({ length: 2000 }, (_, i) => ({
    badge: String(260000 + i),
    name: FIRST[i % 9] + ' ' + LAST[(i * 4) % 9],
    status: STATUSES[(i * 3) % STATUSES.length],
    courtroom: (i * 3) % STATUSES.length === 1 ? COURTROOMS[i % 24] : null,
    phone: \`(408) 555-\${String(1000 + i).slice(-4)}\`,
    notes: '',
  }));

  protected readonly byBadge = (j: Juror): string => j.badge;
  private next = 262000;
  protected readonly newJuror = (): Partial<Juror> => ({
    badge: String(this.next++),
    status: 'Summoned',
  });

  /** The pending edits, kept by the host (e.g. as a draft) through two-way binding. */
  protected readonly draft = signal<ScscGridChangeSet<Juror, string>>(emptyGridChanges());
  protected readonly message = signal('');

  protected save(changes: ScscGridChangeSet<Juror, string>): void {
    const count = changes.updated.size + changes.added.length + changes.removed.length;
    this.message.set('Saving\u2026');
    // Stand-in for the API call.
    setTimeout(() => {
      this.grid().acceptChanges();
      this.message.set(\`Saved \${count} jurors.\`);
    }, 600);
  }
}
`,html:`<scsc-data-grid
  label="Juror roster, week of October 5"
  height="352px"
  selectionMode="row"
  allowAddRows
  allowDeleteRows
  [rowKey]="byBadge"
  [newRow]="newJuror"
  [columns]="columns"
  [rows]="jurors"
  [(changes)]="draft"
  (save)="save($event)"
/>
<scsc-text size="sm" tone="muted" role="status" class="mt-2 block">{{ message() }}</scsc-text>
`},"data-grid-paste-from-excel":{ts:`import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { ScscButton, ScscText } from '@scscourt/design';
import { ScscDataGrid, type ScscGridColumn } from '@scscourt/design/data-grid';

interface BailRow extends Record<string, unknown> {
  code: string;
  description: string;
  level: string | null;
  amount: number | null;
  effective: string | null;
  citeRelease: boolean;
}

/** What Excel puts on the clipboard for four rows: tabs between cells, quotes around a line break. */
const FROM_EXCEL = [
  'PC 484\\tPetty theft\\tMisdemeanor\\t$1,000.00\\t2026-07-01\\tTRUE',
  'PC 459\\tBurglary, second degree\\tFelony\\t$50,000.00\\t2026-07-01\\tFALSE',
  'VC 23152(a)\\t"Driving under the influence\\n(first offense)"\\tMisdemeanor\\t$5,000.00\\t7/1/2026\\tTRUE',
  'PC 594\\tVandalism\\tMisdemanor\\tabc\\t2026-07-01\\tTRUE',
].join('\\n');

@Component({
  selector: 'app-data-grid-paste-from-excel-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscText, ScscDataGrid],
  template: \`
    <div class="mb-3 flex flex-wrap items-center gap-3">
      <scsc-text size="sm" tone="muted" class="max-w-prose">
        Copy rows in Excel or Google Sheets, select the first Offense cell and press Ctrl+V. Or
        paste the sample: its last row has two mistakes to fix.
      </scsc-text>
      <scsc-button variant="secondary" size="sm" (click)="pasteSample()"
        >Paste sample rows</scsc-button
      >
    </div>
    <scsc-data-grid
      label="Bail schedule import"
      rowKey="code"
      height="320px"
      frozenColumns="1"
      persistKey="docs-bail-import"
      allowAddRows
      allowDeleteRows
      [columns]="columns"
      [rows]="rows"
    />
  \`,
})
export class DataGridPasteFromExcelDemo {
  private readonly grid = viewChild.required(ScscDataGrid<BailRow>);

  protected readonly columns: ScscGridColumn<BailRow>[] = [
    { key: 'code', header: 'Offense', width: '9rem', editable: true, required: true },
    { key: 'description', header: 'Description', width: '20rem', editable: true, required: true },
    {
      key: 'level',
      header: 'Level',
      width: '10rem',
      editable: true,
      required: true,
      options: ['Infraction', 'Misdemeanor', 'Felony'].map((l) => ({ value: l, label: l })),
    },
    {
      key: 'amount',
      header: 'Bail',
      type: 'currency',
      width: '9rem',
      editable: true,
      required: true,
      min: 0,
    },
    { key: 'effective', header: 'Effective', type: 'date', width: '10rem', editable: true },
    {
      key: 'citeRelease',
      header: 'Cite and release',
      type: 'boolean',
      width: '10rem',
      editable: true,
    },
  ];

  protected readonly rows: BailRow[] = [
    {
      code: 'PC 148(a)',
      description: 'Resisting an officer',
      level: 'Misdemeanor',
      amount: 2500,
      effective: '2026-01-01',
      citeRelease: true,
    },
  ];

  protected pasteSample(): void {
    // Same path as Ctrl+V: parsed and validated per cell, one undo step, rows added as needed.
    this.grid().paste(FROM_EXCEL, 'end');
  }
}
`,html:`<div class="mb-3 flex flex-wrap items-center gap-3">
  <scsc-text size="sm" tone="muted" class="max-w-prose">
    Copy rows in Excel or Google Sheets, select the first Offense cell and press Ctrl+V. Or
    paste the sample: its last row has two mistakes to fix.
  </scsc-text>
  <scsc-button variant="secondary" size="sm" (click)="pasteSample()"
    >Paste sample rows</scsc-button
  >
</div>
<scsc-data-grid
  label="Bail schedule import"
  rowKey="code"
  height="320px"
  frozenColumns="1"
  persistKey="docs-bail-import"
  allowAddRows
  allowDeleteRows
  [columns]="columns"
  [rows]="rows"
/>
`}};var Y=[`j.ruiz`,`b.ortiz`,`p.natarajan`,`efile-gateway`,`s.liu`];var ee=[`Viewed`,`Updated`,`Filed`,`Sealed`,`Exported`,`Printed`];var P=class a{doc=g(X);columns=[{key:`at`,header:`When`,type:`datetime`,width:`12rem`},{key:`user`,header:`User`,width:`10rem`},{key:`action`,header:`Action`,width:`8rem`},{key:`record`,header:`Record`,width:`18rem`}];rows=Array.from({length:1e4},(t,e)=>({at:new Date(Date.UTC(2026,8,28,23,42)-e*197e3).toISOString().slice(0,19).replace(`T`,` `),user:Y[e%Y.length],action:ee[e*5%ee.length],record:`Docket entry `+(4210-e%4210)}));exportCsv(){let t=this.columns.map(L=>L.header).join(`,`),e=this.rows.map(L=>this.columns.map(ae=>`"`+L[ae.key]+`"`).join(`,`)),r=new Blob([[t,...e].join(`
`)],{type:`text/csv`}),u=URL.createObjectURL(r),s=this.doc.createElement(`a`);s.href=u,s.download=`audit-log-24CV012345.csv`,s.click(),setTimeout(()=>URL.revokeObjectURL(u))}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-data-grid-audit-log-demo`]],decls:11,vars:8,consts:[[1,`mb-3`,`flex`,`flex-wrap`,`items-end`,`justify-between`,`gap-3`],[3,`level`,`visualLevel`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[`name`,`download`,`size`,`sm`],[`label`,`Audit log`,`height`,`352px`,3,`columns`,`rows`,`rowHeight`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-heading`,1),G_(3,` Audit log · 24CV012345 `),Lf(),Ga(4,`scsc-text`,2),G_(5),uM(6,`number`),Lf()(),Ga(7,`scsc-button`,3),lc(`click`,function(){return r.exportCsv()}),uc(8,`scsc-icon`,4),G_(9,` Download CSV `),Lf()(),uc(10,`scsc-data-grid`,5)),e&2&&(Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(3),$f(``,dM(6,6,r.rows.length),` events, newest first`),Jb(5),Pv(`columns`,r.columns)(`rows`,r.rows)(`rowHeight`,32))},dependencies:[sn,kn,ye,NE,et,fN],encapsulation:2})};var z=class a{editor=jt();static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-hearing-time-editor`]],decls:1,vars:3,consts:[[`scsc-input`,``,`size`,`sm`,`type`,`time`,`step`,`900`,1,`w-full`,3,`input`,`value`]],template:function(e,r){e&1&&(Ga(0,`input`,0),lc(`input`,function(s){return r.editor.value.set(s.target.value)}),Lf()),e&2&&(Pv(`value`,r.editor.value()??``),cc(`aria-label`,r.editor.label)(`aria-describedby`,r.editor.errorId))},dependencies:[qo],encapsulation:2})};var oe=a=>{let[t,e]=String(a??``).split(`:`).map(Number);return Number.isNaN(t)||Number.isNaN(e)?``:`${t%12||12}:${String(e).padStart(2,`0`)} ${t<12?`AM`:`PM`}`};var F=class a{columns=[{key:`caseNumber`,header:`Case No.`,width:`9rem`},{key:`caption`,header:`Caption`,width:`18rem`},{key:`time`,header:`Time`,width:`9rem`,align:`end`,editable:!0,required:!0,editor:z,format:t=>oe(t),validate:t=>String(t)>=`08:30`&&String(t)<=`16:00`?null:`Set a time from 8:30 AM to 4:00 PM.`},{key:`interpreter`,header:`Interpreter`,type:`boolean`,width:`8rem`,editable:!0}];hearings=[{caseNumber:`24CV012345`,caption:`Reyes v. Pacific Rail`,time:`08:30`,interpreter:!0},{caseNumber:`24CV013002`,caption:`Chen v. Okafor`,time:`09:00`,interpreter:!1},{caseNumber:`25CV000418`,caption:`In re Marriage of Kim`,time:`09:30`,interpreter:!0},{caseNumber:`25CV001275`,caption:`Patel v. Larsen Farms`,time:`10:15`,interpreter:!1},{caseNumber:`25CV002210`,caption:`Haddad v. City of San José`,time:`13:30`,interpreter:!1}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-data-grid-custom-editor-demo`]],decls:1,vars:2,consts:[[`label`,`Dept. 12 calendar, October 6`,`rowKey`,`caseNumber`,`height`,`264px`,3,`columns`,`rows`]],template:function(e,r){e&1&&uc(0,`scsc-data-grid`,0),e&2&&Pv(`columns`,r.columns)(`rows`,r.hearings)},dependencies:[et],encapsulation:2})};var ie=[`Filing`,`Motion`,`Records`,`Probate`,`Appeals`];var se=[[`CV-100`,`First paper, unlimited civil`,`Filing`,435,!0],[`CV-110`,`First paper, limited civil ($10k–$25k)`,`Filing`,370,!0],[`CV-120`,`First paper, limited civil (up to $10k)`,`Filing`,225,!0],[`CV-200`,`Motion or application`,`Motion`,60,!0],[`CV-210`,`Summary judgment motion`,`Motion`,500,!1],[`CV-300`,`Copies, per page`,`Records`,.5,!1],[`CV-310`,`Certified copy`,`Records`,40,!1],[`CV-320`,`Records search over 10 minutes`,`Records`,15,!0],[`PR-100`,`Petition for probate`,`Probate`,435,!0],[`PR-110`,`Spousal property petition`,`Probate`,435,!0],[`AP-100`,`Notice of appeal, limited civil`,`Appeals`,100,!0],[`AP-110`,`Record on appeal, per volume`,`Appeals`,30,!1]].map(([a,t,e,r,u])=>({code:a,description:t,category:e,amount:r,effective:`2026-07-01`,copyLimit:e===`Records`?100:null,waivable:u}));var N=class a{grid=_2.required(et);columns=[{key:`code`,header:`Code`,width:`7rem`},{key:`description`,header:`Description`,width:`26rem`,editable:!0,required:!0},{key:`category`,header:`Category`,width:`9rem`,editable:!0,required:!0,options:ie.map(t=>({value:t,label:t}))},{key:`amount`,header:`Amount`,type:`currency`,width:`8rem`,editable:!0,required:!0,min:0,max:5e3},{key:`effective`,header:`Effective`,type:`date`,width:`10rem`,editable:!0,required:!0,min:`2026-01-01`},{key:`copyLimit`,header:`Page limit`,type:`number`,width:`8rem`,editable:t=>t.category===`Records`,min:1,validate:t=>t===null||Number.isInteger(t)?null:`Enter a whole number.`},{key:`waivable`,header:`Waivable`,type:`boolean`,width:`8rem`,editable:!0}];fees=se;saved=q(``);save(t){this.saved.set(`Saved changes to ${t.updated.size} fees.`),this.grid().acceptChanges()}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-data-grid-fee-schedule-demo`]],viewQuery:function(e,r){e&1&&Gv(r.grid,et,5),e&2&&w_()},decls:3,vars:3,consts:[[`label`,`Civil fee schedule`,`rowKey`,`code`,`height`,`352px`,3,`save`,`columns`,`rows`],[`size`,`sm`,`tone`,`muted`,`role`,`status`,1,`mt-2`,`block`]],template:function(e,r){e&1&&(Ga(0,`scsc-data-grid`,0),lc(`save`,function(s){return r.save(s)}),Lf(),Ga(1,`scsc-text`,1),G_(2),Lf()),e&2&&(Pv(`columns`,r.columns)(`rows`,r.fees),Jb(2),nD(r.saved()))},dependencies:[et,NE],encapsulation:2})};var ne=[`Maria`,`Wei`,`Linh`,`Daniel`,`Priya`,`Samuel`,`Grace`,`Omar`,`Hannah`];var de=[`Alvarez`,`Chen`,`Nguyen`,`Reyes`,`Patel`,`Okafor`,`Kim`,`Haddad`,`Larsen`];var te=[`Checked in`,`Excused`,`Postponed`,`No response`,`Checked in`];var M=class a{columns=[{key:`badge`,header:`Badge`,align:`end`,width:`8rem`},{key:`name`,header:`Name`,width:`16rem`},{key:`status`,header:`Status`,width:`10rem`},{key:`group`,header:`Panel`,width:`8rem`}];rows=Array.from({length:8e3},(t,e)=>({badge:String(26e4+e),name:ne[e%9]+` `+de[e*4%9],status:te[e*3%te.length],group:`Panel `+(e%12+1)}));query=q(``);status=q(``);filtered=ut(()=>{let t=this.query().trim().toLowerCase(),e=this.status();return this.rows.filter(r=>(!e||r.status===e)&&(!t||r.name.toLowerCase().includes(t)||r.badge.includes(t)))});static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-data-grid-filtered-demo`]],decls:18,vars:10,consts:[[1,`mb-3`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`placeholder`,`Filter by name or badge…`,1,`w-72`,3,`valueChange`,`value`],[`scsc-select`,``,`aria-label`,`Juror status`,1,`max-w-48`,3,`change`,`value`],[`value`,``],[`size`,`sm`,`tone`,`muted`,`tnum`,``,`role`,`status`],[`label`,`Jurors`,`height`,`352px`,3,`columns`,`rows`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-search-input`,1),sD(`valueChange`,function(s){return Y_(r.query,s)||(r.query=s),s}),Lf(),Ga(2,`select`,2),lc(`change`,function(s){return r.status.set(s.target.value)}),Ga(3,`option`,3),G_(4,`All statuses`),Lf(),Ga(5,`option`),G_(6,`Checked in`),Lf(),Ga(7,`option`),G_(8,`Excused`),Lf(),Ga(9,`option`),G_(10,`Postponed`),Lf(),Ga(11,`option`),G_(12,`No response`),Lf()(),Ga(13,`scsc-text`,4),G_(14),uM(15,`number`),uM(16,`number`),Lf()(),uc(17,`scsc-data-grid`,5)),e&2&&(Jb(),iD(`value`,r.query),Jb(),Pv(`value`,r.status()),Jb(12),rD(` `,dM(15,6,r.filtered().length),` of `,dM(16,8,r.rows.length),` jurors `),Jb(3),Pv(`columns`,r.columns)(`rows`,r.filtered()))},dependencies:[Ta,On,NE,et,fN],encapsulation:2})};var ce=[`Maria`,`Wei`,`Linh`,`Daniel`,`Priya`,`Samuel`,`Grace`,`Omar`,`Hannah`];var le=[`Alvarez`,`Chen`,`Nguyen`,`Reyes`,`Patel`,`Okafor`,`Kim`,`Haddad`,`Larsen`];var _=[`Summoned`,`Checked in`,`Excused`,`Postponed`,`No response`];var re=Array.from({length:24},(a,t)=>`Dept. ${t+1}`);var O=class a{grid=_2.required(et);columns=[{key:`badge`,header:`Badge`,width:`7rem`,align:`end`},{key:`name`,header:`Name`,width:`14rem`,editable:!0,required:!0},{key:`status`,header:`Status`,width:`10rem`,editable:!0,required:!0,options:_.map(t=>({value:t,label:t}))},{key:`courtroom`,header:`Courtroom`,width:`10rem`,editable:t=>t.status===`Checked in`,editor:`combobox`,options:re.map(t=>({value:t,label:t}))},{key:`phone`,header:`Phone`,width:`12rem`,editable:!0,validate:t=>new Promise(e=>setTimeout(()=>e(!t||/^\(\d{3}\) \d{3}-\d{4}$/.test(String(t))?null:`Enter a phone number like (408) 555-0100.`),400))},{key:`notes`,header:`Notes`,width:`16rem`,editable:!0,editor:`textarea`}];jurors=Array.from({length:2e3},(t,e)=>({badge:String(26e4+e),name:ce[e%9]+` `+le[e*4%9],status:_[e*3%_.length],courtroom:e*3%_.length===1?re[e%24]:null,phone:`(408) 555-${String(1e3+e).slice(-4)}`,notes:``}));byBadge=t=>t.badge;next=262e3;newJuror=()=>({badge:String(this.next++),status:`Summoned`});draft=q(J());message=q(``);save(t){let e=t.updated.size+t.added.length+t.removed.length;this.message.set(`Saving…`),setTimeout(()=>{this.grid().acceptChanges(),this.message.set(`Saved ${e} jurors.`)},600)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-data-grid-juror-roster-demo`]],viewQuery:function(e,r){e&1&&Gv(r.grid,et,5),e&2&&w_()},decls:3,vars:6,consts:[[`label`,`Juror roster, week of October 5`,`height`,`352px`,`selectionMode`,`row`,`allowAddRows`,``,`allowDeleteRows`,``,3,`changesChange`,`save`,`rowKey`,`newRow`,`columns`,`rows`,`changes`],[`size`,`sm`,`tone`,`muted`,`role`,`status`,1,`mt-2`,`block`]],template:function(e,r){e&1&&(Ga(0,`scsc-data-grid`,0),sD(`changesChange`,function(s){return Y_(r.draft,s)||(r.draft=s),s}),lc(`save`,function(s){return r.save(s)}),Lf(),Ga(1,`scsc-text`,1),G_(2),Lf()),e&2&&(Pv(`rowKey`,r.byBadge)(`newRow`,r.newJuror)(`columns`,r.columns)(`rows`,r.jurors),iD(`changes`,r.draft),Jb(2),nD(r.message()))},dependencies:[et,NE],encapsulation:2})};var me=[`PC 484	Petty theft	Misdemeanor	$1,000.00	2026-07-01	TRUE`,`PC 459	Burglary, second degree	Felony	$50,000.00	2026-07-01	FALSE`,`VC 23152(a)	"Driving under the influence
(first offense)"	Misdemeanor	$5,000.00	7/1/2026	TRUE`,`PC 594	Vandalism	Misdemanor	abc	2026-07-01	TRUE`].join(`
`);var j=class a{grid=_2.required(et);columns=[{key:`code`,header:`Offense`,width:`9rem`,editable:!0,required:!0},{key:`description`,header:`Description`,width:`20rem`,editable:!0,required:!0},{key:`level`,header:`Level`,width:`10rem`,editable:!0,required:!0,options:[`Infraction`,`Misdemeanor`,`Felony`].map(t=>({value:t,label:t}))},{key:`amount`,header:`Bail`,type:`currency`,width:`9rem`,editable:!0,required:!0,min:0},{key:`effective`,header:`Effective`,type:`date`,width:`10rem`,editable:!0},{key:`citeRelease`,header:`Cite and release`,type:`boolean`,width:`10rem`,editable:!0}];rows=[{code:`PC 148(a)`,description:`Resisting an officer`,level:`Misdemeanor`,amount:2500,effective:`2026-01-01`,citeRelease:!0}];pasteSample(){this.grid().paste(me,`end`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-data-grid-paste-from-excel-demo`]],viewQuery:function(e,r){e&1&&Gv(r.grid,et,5),e&2&&w_()},decls:6,vars:2,consts:[[1,`mb-3`,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`size`,`sm`,`tone`,`muted`,1,`max-w-prose`],[`variant`,`secondary`,`size`,`sm`,3,`click`],[`label`,`Bail schedule import`,`rowKey`,`code`,`height`,`320px`,`frozenColumns`,`1`,`persistKey`,`docs-bail-import`,`allowAddRows`,``,`allowDeleteRows`,``,3,`columns`,`rows`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-text`,1),G_(2,` Copy rows in Excel or Google Sheets, select the first Offense cell and press Ctrl+V. Or paste the sample: its last row has two mistakes to fix. `),Lf(),Ga(3,`scsc-button`,2),lc(`click`,function(){return r.pasteSample()}),G_(4,`Paste sample rows`),Lf()(),uc(5,`scsc-data-grid`,3)),e&2&&(Jb(5),Pv(`columns`,r.columns)(`rows`,r.rows))},dependencies:[sn,NE,et],encapsulation:2})};var at={slug:`data-grid`,name:`Data Grid`,classes:[`ScscDataGrid`],category:`Data Display`,summary:`An Excel-style grid: thousands of virtualized rows, arrow-key cell navigation with one tab stop, range selection, in-cell editing with validation and change tracking, undo/redo, paste from Excel, fill, frozen columns, and resizable, movable columns.`,whenToUse:[`People edit many values in place, the way they would in a spreadsheet: a fee schedule, a juror roster, a bulk correction. Edits collect in a change set that the status bar saves or reverts in one go.`,"Thousands of rows that must all be on one scrolling screen (audit logs, juror pools, docket exports). Rows are virtualized, so only the visible ones render; every row has the same fixed `rowHeight` and the viewport a fixed `height`.","For reading, comparing, sorting, searching, paging and exporting records, use `scsc-table`: it is real table markup, reflows on phones and has the full toolbar. See [Choosing a table](/docs/patterns/choosing-a-table).","The grid has no sorting or filtering of its own: do it in the host (a `computed()`) and pass the result as `rows`, as in the filtered demo.","Requires `@angular/cdk` (an optional peer): `npm i @angular/cdk`."],setup:`// package.json \u2014 the grid is built on CDK virtual scrolling
"@angular/cdk": "^22.0.0"

// import from the secondary entry point, not from '@scscourt/design'
import { ScscDataGrid, ScscGridColumn } from '@scscourt/design/data-grid';

// Editable columns: the display fields are ScscColumn's (key, header, type, format\u2026)
{ key: 'amount', header: 'Amount', type: 'currency', editable: true, required: true, min: 0 }`,demos:[{id:`data-grid-fee-schedule`,title:`Editable fee schedule with validation`,description:"Built-in editors by column: text, `select` (from `options`), `currency` and `number` with `min`/`max`, a native `date`, and a checkbox (Space toggles). `editable` can be a function of the row: only records fees have a page limit. Invalid cells get a red border, an icon and a described error; Save emits `(save)` only when every cell is valid.",component:N,source:w[`data-grid-fee-schedule`],layout:`full-bleed`,a11y:`skip`},{id:`data-grid-juror-roster`,title:`Bulk-edit roster: save and revert`,description:'2,000 jurors with `selectionMode="row"`, `allowAddRows` and `allowDeleteRows`. The status bar counts changes and errors; Save hands the change set to the host, which calls `acceptChanges()` when the API succeeds. Phone numbers validate asynchronously (the cell shows a pending state), the courtroom uses the `combobox` editor, notes the `textarea` editor. `[(changes)]` keeps the draft in the host.',component:O,source:w[`data-grid-juror-roster`],layout:`full-bleed`,a11y:`skip`},{id:`data-grid-paste-from-excel`,title:`Paste from Excel`,description:'Ctrl+V pastes tab-separated text as Excel and Google Sheets copy it (quoted cells may hold tabs and line breaks). Every cell is parsed by its column (currency, dates, options by label, TRUE/FALSE) and validated; rows are added below with `allowAddRows`, and the whole paste is one Ctrl+Z. `frozenColumns="1"` keeps the offense code in view, and `persistKey` remembers resized and moved columns.',component:j,source:w[`data-grid-paste-from-excel`],layout:`full-bleed`,a11y:`skip`},{id:`data-grid-custom-editor`,title:`Custom cell editor`,description:"A column's `editor` can be a component: it injects `injectCellEditor()` for the value model, the row and column, the accessible `label`, the error id, `commit()` and `cancel()`. The grid still handles Enter, Tab and Escape around it.",component:F,source:w[`data-grid-custom-editor`],layout:`full-bleed`,a11y:`skip`},{id:`data-grid-audit-log`,title:`Read-only: 10,000-row audit log with export`,description:"No editable columns: the grid is `aria-readonly` and has no status bar. 10,000 events at a 32px `rowHeight`, under a heading, with a CSV download built by the host.",component:P,source:w[`data-grid-audit-log`],a11y:`skip`},{id:`data-grid-filtered`,title:`Filtered by the host`,description:"A search box and a status select narrow 8,000 jurors in a `computed()`; the grid re-renders whatever it is given and the count is announced.",component:M,source:w[`data-grid-filtered`],a11y:`skip`}],a11y:[`The grid follows the WAI-ARIA grid pattern: one tab stop (the active cell), arrow keys between cells, Enter or F2 to edit. Focus survives virtual scrolling: when the active row scrolls away and back, focus returns to it.`,`Paste, fill, undo, redo, copy and column moves are announced ("Pasted 3 × 4, 2 errors", "Fee moved to column 3 of 7"); every tool has a keyboard route, and Undo and Redo are also buttons in the status bar.`,'Every edited cell says "edited" to screen readers (and shows a corner marker); an invalid cell is `aria-invalid` with its message as the description, and the message is announced when the edit is committed. Save with errors announces how many and moves to the first one.',`Cells keep a fixed width, so long values end in an ellipsis; the focused cell shows its whole value, and screen readers always hear all of it. Size columns for the longest usual value with room for larger text spacing (WCAG 1.4.12).`,'The grid is a 2-D structure, so at 320px it scrolls sideways inside its own named region instead of reflowing (WCAG 1.4.10 allows this); the status bar wraps. For people who only need to read the data on a phone, offer `scsc-table` with `responsive="stack"` or an export.'],aria:['`role="grid"` named by `label` ("Data grid" by default), with `aria-rowcount` / `aria-colcount` for the whole data set (the header row counts) and `aria-multiselectable`; `aria-readonly` when no column is editable.','Rows are `role="row"` with their real `aria-rowindex` while virtualized; the header row holds `role="columnheader"` cells, the body `role="gridcell"` cells with `aria-colindex`.','`aria-selected` on the cells of a multi-cell range (or on rows in `selectionMode="row"`); `aria-readonly` on cells that cannot be edited in an editable grid; `aria-invalid` + `aria-describedby` on invalid cells; `aria-busy` while async validation runs.',"Editors are named by their column header and point `aria-describedby` at the cell's error.",'Column headers join the navigation (ArrowUp from the first row). While resizing, the header edge is a `role="separator"` with `aria-valuenow` (px), `aria-valuemin` and `aria-valuemax`.'],appMustProvide:['A `label` that names the data ("Civil fee schedule"), and a visible heading above the grid.',"A `rowKey` for editable grids: changes and errors are keyed by it.",`Validation messages that say how to fix the value ("Enter a phone number like (408) 555-0100.").`],keyboard:[{keys:`Tab / Shift + Tab`,action:`Into the grid (to the active cell) and out again: the grid is one tab stop. While editing, commits and moves right / left.`},{keys:`ArrowUp / ArrowDown / ArrowLeft / ArrowRight`,action:`Move one cell.`},{keys:`Home / End`,action:`First / last cell of the row.`},{keys:`Ctrl + Home / Ctrl + End`,action:`First / last cell of the grid.`},{keys:`PageUp / PageDown`,action:`Up / down by the rows in view.`},{keys:`Shift + Arrow keys (and Home, End, PageUp, PageDown)`,action:`Extend the selected range.`},{keys:`Ctrl + A`,action:`Select every cell.`},{keys:`Enter`,action:`Edit the cell (its text selected). While editing: commit and move down (Shift + Enter: up).`},{keys:`F2`,action:`Edit the cell with the caret at the end.`},{keys:`Any character`,action:`Start editing and replace the value with what you type.`},{keys:`Escape`,action:`While editing: cancel and restore the value. Otherwise: collapse the range to the active cell.`},{keys:`Arrow keys, Home, End (editing)`,action:`Move the caret in the editor, not the cell.`},{keys:`Delete / Backspace`,action:`Clear the editable cells in the selection.`},{keys:`Space`,action:`Toggle a checkbox cell.`},{keys:`Shift + Enter / Alt + Enter (textarea)`,action:`New line in a notes cell.`},{keys:`Ctrl + Z`,action:`Undo the last edit (a paste or fill is one edit).`},{keys:`Ctrl + Y / Ctrl + Shift + Z`,action:`Redo.`},{keys:`Ctrl + C / Ctrl + X`,action:`Copy (cut) the selection as tab-separated text and an HTML table.`},{keys:`Ctrl + V`,action:`Paste tab-separated text from Excel or Sheets at the selection; one value fills the whole selection.`},{keys:`Ctrl + D / Ctrl + R`,action:`Fill down / right from the first row / column.`},{keys:`ArrowUp (first row)`,action:`Move to the column header row.`},{keys:`Alt + Shift + ArrowLeft / ArrowRight (header)`,action:`Move the column left / right.`},{keys:`Enter (header), then ArrowLeft / ArrowRight`,action:`Resize the column by 16px (Shift: 64px) on its separator; Enter or Escape returns to the header.`}],related:[`table`,`combobox`,`search-input`]};export{at as DATA_GRID_DOCS};