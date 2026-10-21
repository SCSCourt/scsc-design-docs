import{Dn as Wue,E as Bue,En as Wt,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ka as Ov,Ma as JT,Ms as uc,Na as Jb,No as cc,Nr as jo,Ps as ut,Q as Gue,W as Fa,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cs as lc,di as sN,ds as nD,ea as zz,hs as oD,ks as t_,l as $ue,lr as ez,mn as Uue,oi as que,os as k_,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,y as At,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var w={"combobox-async":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscCheckbox,
  ScscCombobox,
  ScscFormField,
  type ScscOption,
  type ScscOptionSource,
} from '@scscourt/design';

const ATTORNEYS = [
  ['218734', 'Chen, Amy', 'Chen & Morales LLP'],
  ['301455', 'Delgado, Rafael', 'Bay Legal Aid'],
  ['254990', 'Hughes, Priya', 'Hughes Law Group'],
  ['199204', 'Kowalski, Mark', 'Kowalski & Reed'],
  ['287611', 'Nguyen, Thao', 'Nguyen Family Law'],
  ['312078', 'Okafor, Daniel', 'Silicon Valley Defenders'],
  ['240356', 'Patel, Kiran', 'Patel Litigation PC'],
  ['276143', 'Ramos, Julia', 'Ramos & Associates'],
];

@Component({
  selector: 'app-combobox-async-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCheckbox, ScscCombobox, ScscFormField],
  template: \`
    <div class="flex max-w-sm flex-col gap-3">
      <scsc-form-field
        label="Attorney of record"
        hint="Type 2 or more letters of a name or bar number"
      >
        <scsc-combobox
          [options]="searchAttorneys"
          [minChars]="2"
          [displayWith]="attorneyName"
          [(ngModel)]="barNumber"
          highlightMatches
          placeholder="Search the State Bar roster\u2026"
          (queryChange)="lastQuery.set($event)"
        />
      </scsc-form-field>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" scsc-checkbox [(ngModel)]="failNext" />
        Make the next search fail (then use Retry)
      </label>
      <p class="text-sm">
        Requests started: {{ started() }} \xB7 aborted: {{ aborted() }} \xB7 value:
        {{ barNumber() || '(none)' }}
      </p>
    </div>
  \`,
})
export class ComboboxAsyncDemo {
  protected readonly barNumber = signal<string | null>(null);
  protected readonly lastQuery = signal('');
  protected readonly failNext = signal(false);
  protected readonly started = signal(0);
  protected readonly aborted = signal(0);

  protected readonly attorneyName = (bar: string): string => {
    const row = ATTORNEYS.find(([sbn]) => sbn === bar);
    return row ? row[1] : bar;
  };

  /** A stand-in for \`fetch('/api/attorneys?q=' + q, { signal })\`: 600 ms of latency, abortable. */
  protected readonly searchAttorneys: ScscOptionSource = (q, { signal }) => {
    this.started.update((n) => n + 1);
    return new Promise<ScscOption[]>((resolve, reject) => {
      const timer = setTimeout(() => {
        if (this.failNext()) {
          this.failNext.set(false);
          reject(new Error('503 Service Unavailable'));
          return;
        }
        const needle = q.toLowerCase();
        resolve(
          ATTORNEYS.filter(
            ([sbn, name]) => name.toLowerCase().includes(needle) || sbn.includes(needle),
          ).map(([sbn, name, firm]) => ({
            value: sbn,
            label: name,
            description: \`SBN \${sbn} \xB7 \${firm}\`,
          })),
        );
      }, 600);
      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        this.aborted.update((n) => n + 1);
        reject(signal.reason);
      });
    });
  };
}
`,html:`<div class="flex max-w-sm flex-col gap-3">
  <scsc-form-field
    label="Attorney of record"
    hint="Type 2 or more letters of a name or bar number"
  >
    <scsc-combobox
      [options]="searchAttorneys"
      [minChars]="2"
      [displayWith]="attorneyName"
      [(ngModel)]="barNumber"
      highlightMatches
      placeholder="Search the State Bar roster\u2026"
      (queryChange)="lastQuery.set($event)"
    />
  </scsc-form-field>
  <label class="flex items-center gap-2 text-sm">
    <input type="checkbox" scsc-checkbox [(ngModel)]="failNext" />
    Make the next search fail (then use Retry)
  </label>
  <p class="text-sm">
    Requests started: {{ started() }} \xB7 aborted: {{ aborted() }} \xB7 value:
    {{ barNumber() || '(none)' }}
  </p>
</div>
`},"combobox-attorney":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscCombobox,
  ScscFormField,
  ScscSelect,
  type ScscOption,
} from '@scscourt/design';

@Component({
  selector: 'app-combobox-attorney-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscCombobox, ScscFormField, ScscSelect],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-xs flex-col gap-4">
      <scsc-form-field label="Party" for="combobox-attorney-party" required [error]="partyError()">
        <select
          scsc-select
          id="combobox-attorney-party"
          formControlName="party"
          [invalid]="!!partyError()"
          [attr.aria-invalid]="!!partyError()"
        >
          <option value="" disabled>Select the party\u2026</option>
          @for (p of parties; track p.value) {
            <option [value]="p.value">{{ p.label }}</option>
          }
        </select>
      </scsc-form-field>

      <!-- Too many attorneys for a select: typing a surname or bar number narrows the list. -->
      <scsc-form-field
        label="New attorney of record"
        hint="Type a name or State Bar number"
        required
        [error]="attorneyError()"
      >
        <scsc-combobox
          formControlName="attorney"
          [options]="attorneys"
          placeholder="Search attorneys\u2026"
        />
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">File substitution (MC-050)</scsc-button>
      </div>

      @if (filed()) {
        <scsc-alert status="success" title="Substitution filed">{{ filed() }}</scsc-alert>
      }
    </form>
  \`,
})
export class ComboboxAttorneyDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly filed = signal('');

  protected readonly parties: ScscOption[] = [
    { value: 'alvarez', label: 'Jane Alvarez \u2014 Plaintiff' },
    { value: 'pta', label: 'Pacific Transit Authority \u2014 Defendant' },
  ];
  protected readonly attorneys: ScscOption[] = [
    { value: '218734', label: 'Chen, Amy \u2014 SBN 218734 \u2014 Chen & Morales LLP' },
    { value: '301455', label: 'Delgado, Rafael \u2014 SBN 301455 \u2014 Bay Legal Aid' },
    { value: '254990', label: 'Hughes, Priya \u2014 SBN 254990 \u2014 Hughes Law Group' },
    { value: '199204', label: 'Kowalski, Mark \u2014 SBN 199204 \u2014 Kowalski & Reed' },
    { value: '287611', label: 'Nguyen, Thao \u2014 SBN 287611 \u2014 Nguyen Family Law' },
    { value: '312078', label: 'Okafor, Daniel \u2014 SBN 312078 \u2014 Silicon Valley Defenders' },
    { value: '240356', label: 'Patel, Kiran \u2014 SBN 240356 \u2014 Patel Litigation PC' },
    { value: '276143', label: 'Ramos, Julia \u2014 SBN 276143 \u2014 Ramos & Associates' },
  ];

  protected readonly form = this.fb.nonNullable.group({
    party: ['', Validators.required],
    attorney: ['', Validators.required],
  });

  protected partyError(): string {
    const c = this.form.controls.party;
    return c.invalid && c.touched ? 'Choose the party changing attorneys.' : '';
  }

  protected attorneyError(): string {
    const c = this.form.controls.attorney;
    return c.invalid && c.touched ? 'Pick the new attorney from the list.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.filed.set('');
      return;
    }
    const { party, attorney } = this.form.getRawValue();
    const who = this.parties.find((p) => p.value === party)?.label.split(' \u2014 ')[0];
    const lawyer = this.attorneys.find((a) => a.value === attorney)?.label.split(' \u2014 ')[0];
    this.filed.set(lawyer + ' now represents ' + who + ' in 24CV012345.');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-xs flex-col gap-4">
  <scsc-form-field label="Party" for="combobox-attorney-party" required [error]="partyError()">
    <select
      scsc-select
      id="combobox-attorney-party"
      formControlName="party"
      [invalid]="!!partyError()"
      [attr.aria-invalid]="!!partyError()"
    >
      <option value="" disabled>Select the party\u2026</option>
      @for (p of parties; track p.value) {
        <option [value]="p.value">{{ p.label }}</option>
      }
    </select>
  </scsc-form-field>

  <!-- Too many attorneys for a select: typing a surname or bar number narrows the list. -->
  <scsc-form-field
    label="New attorney of record"
    hint="Type a name or State Bar number"
    required
    [error]="attorneyError()"
  >
    <scsc-combobox
      formControlName="attorney"
      [options]="attorneys"
      placeholder="Search attorneys\u2026"
    />
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">File substitution (MC-050)</scsc-button>
  </div>

  @if (filed()) {
    <scsc-alert status="success" title="Substitution filed">{{ filed() }}</scsc-alert>
  }
</form>
`},"combobox-autocomplete":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscCombobox, ScscFormField, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-combobox-autocomplete-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCombobox, ScscFormField],
  template: \`
    <div class="flex max-w-sm flex-col gap-3">
      <!-- Free text is the value; the courthouses are only suggestions. -->
      <scsc-form-field label="Hearing location" hint="Pick a courthouse or type an address">
        <scsc-combobox
          mode="autocomplete"
          [options]="courthouses"
          [(ngModel)]="location"
          highlightMatches
          clearable
          placeholder="Courthouse or address"
        />
      </scsc-form-field>
      <p class="text-sm">Value: {{ location() || '(empty)' }}</p>
    </div>
  \`,
})
export class ComboboxAutocompleteDemo {
  protected readonly location = signal('');
  protected readonly courthouses: ScscOption[] = [
    'Downtown Superior Court, 190 N. Market St.',
    'Family Justice Center, 201 N. First St.',
    'Hall of Justice, 191 N. First St.',
    'Old Courthouse, 161 N. First St.',
    'South County Courthouse, 301 Diana Ave., Morgan Hill',
    'Palo Alto Courthouse, 270 Grant Ave.',
  ].map((label) => ({ value: label, label }));
}
`,html:`<div class="flex max-w-sm flex-col gap-3">
  <!-- Free text is the value; the courthouses are only suggestions. -->
  <scsc-form-field label="Hearing location" hint="Pick a courthouse or type an address">
    <scsc-combobox
      mode="autocomplete"
      [options]="courthouses"
      [(ngModel)]="location"
      highlightMatches
      clearable
      placeholder="Courthouse or address"
    />
  </scsc-form-field>
  <p class="text-sm">Value: {{ location() || '(empty)' }}</p>
</div>
`},"combobox-basic":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscCombobox, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-combobox-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCombobox],
  template: \`
    <div class="max-w-sm">
      <scsc-combobox
        [(ngModel)]="caseType"
        [options]="caseTypes"
        placeholder="Search case type\u2026"
        name="caseType"
      />
      <p class="mt-3 text-sm text-base-content/70">
        Selected: <code>{{ caseType() || '\u2014' }}</code>
        @if (selectedLabel()) {
          ({{ selectedLabel() }})
        }
      </p>
    </div>
  \`,
})
export class ComboboxBasicDemo {
  protected readonly caseTypes: ScscOption[] = [
    { value: 'CV', label: 'Civil \u2014 Unlimited' },
    { value: 'CL', label: 'Civil \u2014 Limited' },
    { value: 'FL', label: 'Family Law' },
    { value: 'PR', label: 'Probate' },
    { value: 'CR', label: 'Criminal' },
    { value: 'SC', label: 'Small Claims' },
  ];
  protected readonly caseType = signal('FL');
  protected readonly selectedLabel = computed(
    () => this.caseTypes.find((o) => o.value === this.caseType())?.label ?? '',
  );
}
`,html:`<div class="max-w-sm">
  <scsc-combobox
    [(ngModel)]="caseType"
    [options]="caseTypes"
    placeholder="Search case type\u2026"
    name="caseType"
  />
  <p class="mt-3 text-sm text-base-content/70">
    Selected: <code>{{ caseType() || '\u2014' }}</code>
    @if (selectedLabel()) {
      ({{ selectedLabel() }})
    }
  </p>
</div>
`},"combobox-create":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscCombobox, ScscFormField, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-combobox-create-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCombobox, ScscFormField],
  template: \`
    <div class="flex max-w-sm flex-col gap-3">
      <scsc-form-field label="Interpreter language" hint="Not listed? Type it and choose Create">
        <scsc-combobox
          [options]="languages()"
          [(ngModel)]="language"
          allowCreate
          [createLabel]="createLabel"
          placeholder="Search languages\u2026"
          (create)="addLanguage($event)"
        />
      </scsc-form-field>
      <p class="text-sm">Value: {{ language() || '(none)' }}</p>
    </div>
  \`,
})
export class ComboboxCreateDemo {
  protected readonly language = signal<string | null>(null);
  protected readonly languages = signal<ScscOption[]>(
    [
      'American Sign Language',
      'Cantonese',
      'Mandarin',
      'Punjabi',
      'Spanish',
      'Tagalog',
      'Vietnamese',
    ].map((label) => ({ value: label, label })),
  );
  protected readonly createLabel = (q: string): string => \`Request \u201C\${q}\u201D interpreter\`;

  /** The combobox only emits: add the option, then set the value. */
  protected addLanguage(name: string): void {
    this.languages.update((list) => [...list, { value: name, label: name }]);
    this.language.set(name);
  }
}
`,html:`<div class="flex max-w-sm flex-col gap-3">
  <scsc-form-field label="Interpreter language" hint="Not listed? Type it and choose Create">
    <scsc-combobox
      [options]="languages()"
      [(ngModel)]="language"
      allowCreate
      [createLabel]="createLabel"
      placeholder="Search languages\u2026"
      (create)="addLanguage($event)"
    />
  </scsc-form-field>
  <p class="text-sm">Value: {{ language() || '(none)' }}</p>
</div>
`},"combobox-grouped":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscCombobox, ScscFormField, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-combobox-grouped-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCombobox, ScscFormField],
  template: \`
    <div class="flex max-w-sm flex-col gap-3">
      <!-- fuzzy matches letters in order: "dvro" finds "Domestic violence restraining order". -->
      <scsc-form-field label="Case type" hint="Try \u201Cdvro\u201D or \u201Cevict\u201D">
        <scsc-combobox
          [options]="caseTypes"
          [(ngModel)]="caseType"
          filter="fuzzy"
          highlightMatches
          placeholder="Search case types\u2026"
        />
      </scsc-form-field>
      <p class="text-sm">Value: {{ caseType() || '(none)' }}</p>
    </div>
  \`,
})
export class ComboboxGroupedDemo {
  protected readonly caseType = signal<string | null>(null);
  protected readonly caseTypes: ScscOption[] = [
    {
      value: 'CV-UD',
      label: 'Unlawful detainer',
      description: 'Eviction \xB7 limited civil',
      group: 'Civil',
      icon: 'nav.home',
      keywords: ['eviction'],
    },
    {
      value: 'CV-SC',
      label: 'Small claims',
      description: 'Up to $12,500',
      group: 'Civil',
      icon: 'court.payment',
    },
    {
      value: 'CV-UN',
      label: 'Unlimited civil',
      description: 'Over $35,000',
      group: 'Civil',
      icon: 'court.hearing',
    },
    {
      value: 'FL-DV',
      label: 'Domestic violence restraining order',
      description: 'DV-100',
      group: 'Family law',
      icon: 'status.warning',
      keywords: ['dv'],
    },
    {
      value: 'FL-DS',
      label: 'Dissolution',
      description: 'FL-100',
      group: 'Family law',
      icon: 'people.users',
    },
    {
      value: 'FL-AD',
      label: 'Adoption',
      description: 'Filed at the Family Justice Center only',
      group: 'Family law',
      icon: 'people.user',
      disabled: true,
    },
    {
      value: 'PR-GD',
      label: 'Guardianship',
      description: 'GC-210',
      group: 'Probate',
      icon: 'people.role',
    },
    {
      value: 'PR-CS',
      label: 'Conservatorship',
      description: 'GC-310',
      group: 'Probate',
      icon: 'people.account',
    },
  ];
}
`,html:`<div class="flex max-w-sm flex-col gap-3">
  <!-- fuzzy matches letters in order: "dvro" finds "Domestic violence restraining order". -->
  <scsc-form-field label="Case type" hint="Try \u201Cdvro\u201D or \u201Cevict\u201D">
    <scsc-combobox
      [options]="caseTypes"
      [(ngModel)]="caseType"
      filter="fuzzy"
      highlightMatches
      placeholder="Search case types\u2026"
    />
  </scsc-form-field>
  <p class="text-sm">Value: {{ caseType() || '(none)' }}</p>
</div>
`},"combobox-modal":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscButton,
  ScscCombobox,
  ScscFormField,
  ScscModal,
  type ScscOption,
} from '@scscourt/design';

@Component({
  selector: 'app-combobox-modal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscButton, ScscCombobox, ScscFormField, ScscModal],
  template: \`
    <scsc-button variant="primary" (click)="open.set(true)">Reassign case 24CV012345</scsc-button>
    @if (reassigned()) {
      <p class="mt-2 text-sm">Reassigned to {{ reassigned() }}.</p>
    }
    <!-- The list renders in the top layer, so the dialog's scrolling body does not clip it, and
         Escape closes the list before it closes the dialog. -->
    <scsc-modal [(open)]="open" title="Reassign case" size="sm">
      <scsc-form-field label="Judicial officer">
        <scsc-combobox [options]="judges" [(ngModel)]="judge" placeholder="Search officers\u2026" />
      </scsc-form-field>
      <div slot="footer" class="flex justify-end gap-2">
        <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
        <scsc-button variant="primary" [disabled]="!judge()" (click)="save()">Reassign</scsc-button>
      </div>
    </scsc-modal>
  \`,
})
export class ComboboxModalDemo {
  protected readonly open = signal(false);
  protected readonly judge = signal<string | null>(null);
  protected readonly reassigned = signal('');
  protected readonly judges: ScscOption[] = [
    'Hon. Amy Chen',
    'Hon. Samuel Okafor',
    'Hon. Maria Reyes',
    'Hon. David Park',
    'Comm. James Whitfield',
    'Comm. Linda Tran',
  ].map((label) => ({ value: label, label }));

  protected save(): void {
    this.reassigned.set(this.judge() ?? '');
    this.open.set(false);
  }
}
`,html:`<scsc-button variant="primary" (click)="open.set(true)">Reassign case 24CV012345</scsc-button>
@if (reassigned()) {
  <p class="mt-2 text-sm">Reassigned to {{ reassigned() }}.</p>
}
<!-- The list renders in the top layer, so the dialog's scrolling body does not clip it, and
     Escape closes the list before it closes the dialog. -->
<scsc-modal [(open)]="open" title="Reassign case" size="sm">
  <scsc-form-field label="Judicial officer">
    <scsc-combobox [options]="judges" [(ngModel)]="judge" placeholder="Search officers\u2026" />
  </scsc-form-field>
  <div slot="footer" class="flex justify-end gap-2">
    <scsc-button variant="ghost" (click)="open.set(false)">Cancel</scsc-button>
    <scsc-button variant="primary" [disabled]="!judge()" (click)="save()">Reassign</scsc-button>
  </div>
</scsc-modal>
`},"combobox-people":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscAvatar,
  ScscCombobox,
  ScscFormField,
  ScscOptionTemplate,
  type ScscOption,
} from '@scscourt/design';

@Component({
  selector: 'app-combobox-people-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscAvatar, ScscCombobox, ScscFormField, ScscOptionTemplate],
  template: \`
    <scsc-form-field class="max-w-sm" label="Assign to clerk">
      <scsc-combobox [options]="clerks" [(ngModel)]="clerk" placeholder="Search staff\u2026">
        <!-- Text and images only: the whole row is one option. -->
        <ng-template scscOption let-person let-active="active">
          <scsc-avatar decorative [name]="person.label" size="sm" />
          <span class="flex min-w-0 flex-col">
            <span class="truncate">{{ person.label }}</span>
            <span class="truncate text-sm" [class]="active ? '' : 'text-base-content/70'">{{
              person.description
            }}</span>
          </span>
        </ng-template>
      </scsc-combobox>
    </scsc-form-field>
  \`,
})
export class ComboboxPeopleDemo {
  protected readonly clerk = signal<string | null>(null);
  protected readonly clerks: ScscOption[] = [
    { value: 'e1042', label: 'Alicia Moreno', description: 'Courtroom clerk \xB7 Dept. 3' },
    { value: 'e1177', label: 'Ben Okafor', description: 'Calendar clerk \xB7 Dept. 12' },
    { value: 'e1203', label: 'Grace Liu', description: 'Records clerk \xB7 Civil' },
    { value: 'e1288', label: 'Marcus Webb', description: 'Courtroom clerk \xB7 Dept. 21' },
    { value: 'e1311', label: 'Priya Natarajan', description: 'Probate examiner' },
  ];
}
`,html:`<scsc-form-field class="max-w-sm" label="Assign to clerk">
  <scsc-combobox [options]="clerks" [(ngModel)]="clerk" placeholder="Search staff\u2026">
    <!-- Text and images only: the whole row is one option. -->
    <ng-template scscOption let-person let-active="active">
      <scsc-avatar decorative [name]="person.label" size="sm" />
      <span class="flex min-w-0 flex-col">
        <span class="truncate">{{ person.label }}</span>
        <span class="truncate text-sm" [class]="active ? '' : 'text-base-content/70'">{{
          person.description
        }}</span>
      </span>
    </ng-template>
  </scsc-combobox>
</scsc-form-field>
`},"combobox-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscCombobox, ScscFormField, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-combobox-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscCombobox, ScscFormField],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-sm flex-col gap-4">
      <scsc-form-field
        label="Assigned judicial officer"
        hint="Start typing a surname"
        required
        [error]="error()"
      >
        <scsc-combobox
          formControlName="judge"
          [options]="judges"
          placeholder="Search judicial officers\u2026"
        />
      </scsc-form-field>
      <div class="flex items-center gap-3">
        <scsc-button variant="primary" nativeType="submit">Assign</scsc-button>
        <span class="text-sm text-base-content/70"
          >Value: <code>{{ form.value.judge || '\u2014' }}</code></span
        >
      </div>
    </form>
  \`,
})
export class ComboboxReactiveDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly judges: ScscOption[] = [
    { value: 'chen-a', label: 'Hon. Amy Chen \u2014 Dept. 7' },
    { value: 'okafor-s', label: 'Hon. Samuel Okafor \u2014 Dept. 12' },
    { value: 'reyes-m', label: 'Hon. Maria Reyes \u2014 Dept. 5' },
    { value: 'whitfield-j', label: 'Comm. James Whitfield \u2014 Dept. 20' },
  ];

  protected readonly form = this.fb.group({
    judge: ['', Validators.required],
  });

  protected error(): string {
    const c = this.form.controls.judge;
    return c.invalid && (c.dirty || c.touched) ? 'Pick a judicial officer from the list.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-sm flex-col gap-4">
  <scsc-form-field
    label="Assigned judicial officer"
    hint="Start typing a surname"
    required
    [error]="error()"
  >
    <scsc-combobox
      formControlName="judge"
      [options]="judges"
      placeholder="Search judicial officers\u2026"
    />
  </scsc-form-field>
  <div class="flex items-center gap-3">
    <scsc-button variant="primary" nativeType="submit">Assign</scsc-button>
    <span class="text-sm text-base-content/70"
      >Value: <code>{{ form.value.judge || '\u2014' }}</code></span
    >
  </div>
</form>
`},"combobox-recent":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscCombobox, ScscFormField, type ScscOption } from '@scscourt/design';

@Component({
  selector: 'app-combobox-recent-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCombobox, ScscFormField],
  template: \`
    <!-- recentKey persists the last picks with SCSC_STATE_ADAPTER (localStorage by default). -->
    <scsc-form-field
      class="max-w-sm"
      label="Courtroom"
      hint="Your recent courtrooms are listed first"
    >
      <scsc-combobox
        [options]="departments"
        [(ngModel)]="department"
        [recent]="3"
        recentKey="docs-courtrooms"
        placeholder="Search departments\u2026"
      />
    </scsc-form-field>
  \`,
})
export class ComboboxRecentDemo {
  protected readonly department = signal<string | null>(null);
  protected readonly departments: ScscOption[] = Array.from({ length: 24 }, (_, i) => ({
    value: \`D\${i + 1}\`,
    label: \`Department \${i + 1}\`,
    description: i < 12 ? 'Downtown Superior Court' : 'Hall of Justice',
  }));
}
`,html:`<!-- recentKey persists the last picks with SCSC_STATE_ADAPTER (localStorage by default). -->
<scsc-form-field
  class="max-w-sm"
  label="Courtroom"
  hint="Your recent courtrooms are listed first"
>
  <scsc-combobox
    [options]="departments"
    [(ngModel)]="department"
    [recent]="3"
    recentKey="docs-courtrooms"
    placeholder="Search departments\u2026"
  />
</scsc-form-field>
`}};var Ce=[[`218734`,`Chen, Amy`,`Chen & Morales LLP`],[`301455`,`Delgado, Rafael`,`Bay Legal Aid`],[`254990`,`Hughes, Priya`,`Hughes Law Group`],[`199204`,`Kowalski, Mark`,`Kowalski & Reed`],[`287611`,`Nguyen, Thao`,`Nguyen Family Law`],[`312078`,`Okafor, Daniel`,`Silicon Valley Defenders`],[`240356`,`Patel, Kiran`,`Patel Litigation PC`],[`276143`,`Ramos, Julia`,`Ramos & Associates`]];var I=class r{barNumber=q(null);lastQuery=q(``);failNext=q(!1);started=q(0);aborted=q(0);attorneyName=t=>{let o=Ce.find(([e])=>e===t);return o?o[1]:t};searchAttorneys=(t,{signal:o})=>(this.started.update(e=>e+1),new Promise((e,u)=>{let a=setTimeout(()=>{if(this.failNext()){this.failNext.set(!1),u(new Error(`503 Service Unavailable`));return}let R=t.toLowerCase();e(Ce.filter(([j,ee])=>ee.toLowerCase().includes(R)||j.includes(R)).map(([j,ee,xe])=>({value:j,label:ee,description:`SBN ${j} \xB7 ${xe}`})))},600);o.addEventListener(`abort`,()=>{clearTimeout(a),this.aborted.update(R=>R+1),u(o.reason)})}));static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-async-demo`]],decls:8,vars:8,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-3`],[`label`,`Attorney of record`,`hint`,`Type 2 or more letters of a name or bar number`],[`highlightMatches`,``,`placeholder`,`Search the State Bar roster…`,3,`ngModelChange`,`queryChange`,`options`,`minChars`,`displayWith`,`ngModel`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`ngModelChange`,`ngModel`],[1,`text-sm`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-combobox`,2),HS(),sD(`ngModelChange`,function(a){return Y_(e.barNumber,a)||(e.barNumber=a),a}),lc(`queryChange`,function(a){return e.lastQuery.set(a)}),Lf()(),Ga(3,`label`,3)(4,`input`,4),HS(),sD(`ngModelChange`,function(a){return Y_(e.failNext,a)||(e.failNext=a),a}),Lf(),G_(5,` Make the next search fail (then use Retry) `),Lf(),Ga(6,`p`,5),G_(7),Lf()()),o&2&&(Jb(2),Pv(`options`,e.searchAttorneys)(`minChars`,2)(`displayWith`,e.attorneyName),iD(`ngModel`,e.barNumber),zS(),Jb(2),iD(`ngModel`,e.failNext),zS(),Jb(3),oD(` Requests started: `,e.started(),` · aborted: `,e.aborted(),` · value: `,e.barNumber()||`(none)`,` `))},dependencies:[Gue,ez,Hue,zz,jo,sN,Vn],encapsulation:2})};var ve=(r,t)=>t.value;function Se(r,t){if(r&1&&(Ga(0,`option`,4),G_(1),Lf()),r&2){let o=t.$implicit;Pv(`value`,o.value),Jb(),nD(o.label)}}function De(r,t){if(r&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),r&2){let o=y_();Jb(),nD(o.filed())}}var z=class r{fb=g(Wue);filed=q(``);parties=[{value:`alvarez`,label:`Jane Alvarez — Plaintiff`},{value:`pta`,label:`Pacific Transit Authority — Defendant`}];attorneys=[{value:`218734`,label:`Chen, Amy — SBN 218734 — Chen & Morales LLP`},{value:`301455`,label:`Delgado, Rafael — SBN 301455 — Bay Legal Aid`},{value:`254990`,label:`Hughes, Priya — SBN 254990 — Hughes Law Group`},{value:`199204`,label:`Kowalski, Mark — SBN 199204 — Kowalski & Reed`},{value:`287611`,label:`Nguyen, Thao — SBN 287611 — Nguyen Family Law`},{value:`312078`,label:`Okafor, Daniel — SBN 312078 — Silicon Valley Defenders`},{value:`240356`,label:`Patel, Kiran — SBN 240356 — Patel Litigation PC`},{value:`276143`,label:`Ramos, Julia — SBN 276143 — Ramos & Associates`}];form=this.fb.nonNullable.group({party:[``,Fs.required],attorney:[``,Fs.required]});partyError(){let t=this.form.controls.party;return t.invalid&&t.touched?`Choose the party changing attorneys.`:``}attorneyError(){let t=this.form.controls.attorney;return t.invalid&&t.touched?`Pick the new attorney from the list.`:``}submit(){if(this.form.markAllAsTouched(),this.form.invalid){this.filed.set(``);return}let{party:t,attorney:o}=this.form.getRawValue(),e=this.parties.find(a=>a.value===t)?.label.split(` — `)[0],u=this.attorneys.find(a=>a.value===o)?.label.split(` — `)[0];this.filed.set(u+` now represents `+e+` in 24CV012345.`)}static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-attorney-demo`]],decls:13,vars:7,consts:[[1,`flex`,`max-w-xs`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Party`,`for`,`combobox-attorney-party`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`combobox-attorney-party`,`formControlName`,`party`,3,`invalid`],[`value`,``,`disabled`,``],[3,`value`],[`label`,`New attorney of record`,`hint`,`Type a name or State Bar number`,`required`,``,3,`error`],[`formControlName`,`attorney`,`placeholder`,`Search attorneys…`,3,`options`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Substitution filed`]],template:function(o,e){o&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`select`,2),HS(),Ga(3,`option`,3),G_(4,`Select the party…`),Lf(),o_(5,Se,2,2,`option`,4,ve),Lf()(),Ga(7,`scsc-form-field`,5)(8,`scsc-combobox`,6),HS(),Lf()(),Ga(9,`div`)(10,`scsc-button`,7),G_(11,`File substitution (MC-050)`),Lf()(),JT(12,De,2,1,`scsc-alert`,8),Lf()),o&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.partyError()),Jb(),Pv(`invalid`,!!e.partyError()),cc(`aria-invalid`,!!e.partyError()),zS(),Jb(3),i_(e.parties),Jb(2),Pv(`error`,e.attorneyError()),Jb(),Pv(`options`,e.attorneys),zS(),Jb(4),t_(e.filed()?12:-1))},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,Vz,Xz,za,sn,sN,Vn,On],encapsulation:2})};var J=class r{location=q(``);courthouses=[`Downtown Superior Court, 190 N. Market St.`,`Family Justice Center, 201 N. First St.`,`Hall of Justice, 191 N. First St.`,`Old Courthouse, 161 N. First St.`,`South County Courthouse, 301 Diana Ave., Morgan Hill`,`Palo Alto Courthouse, 270 Grant Ave.`].map(t=>({value:t,label:t}));static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-autocomplete-demo`]],decls:5,vars:3,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-3`],[`label`,`Hearing location`,`hint`,`Pick a courthouse or type an address`],[`mode`,`autocomplete`,`highlightMatches`,``,`clearable`,``,`placeholder`,`Courthouse or address`,3,`ngModelChange`,`options`,`ngModel`],[1,`text-sm`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-combobox`,2),HS(),sD(`ngModelChange`,function(a){return Y_(e.location,a)||(e.location=a),a}),Lf()(),Ga(3,`p`,3),G_(4),Lf()()),o&2&&(Jb(2),Pv(`options`,e.courthouses),iD(`ngModel`,e.location),zS(),Jb(2),$f(`Value: `,e.location()||`(empty)`))},dependencies:[Gue,Hue,zz,sN,Vn],encapsulation:2})};function we(r,t){if(r&1&&G_(0),r&2){let o=y_();$f(` (`,o.selectedLabel(),`) `)}}var U=class r{caseTypes=[{value:`CV`,label:`Civil — Unlimited`},{value:`CL`,label:`Civil — Limited`},{value:`FL`,label:`Family Law`},{value:`PR`,label:`Probate`},{value:`CR`,label:`Criminal`},{value:`SC`,label:`Small Claims`}];caseType=q(`FL`);selectedLabel=ut(()=>this.caseTypes.find(t=>t.value===this.caseType())?.label??``);static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-basic-demo`]],decls:7,vars:4,consts:[[1,`max-w-sm`],[`placeholder`,`Search case type…`,`name`,`caseType`,3,`ngModelChange`,`ngModel`,`options`],[1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-combobox`,1),HS(),sD(`ngModelChange`,function(a){return Y_(e.caseType,a)||(e.caseType=a),a}),Lf(),Ga(2,`p`,2),G_(3,` Selected: `),Ga(4,`code`),G_(5),Lf(),JT(6,we,1,1),Lf()()),o&2&&(Jb(),iD(`ngModel`,e.caseType),Pv(`options`,e.caseTypes),zS(),Jb(4),nD(e.caseType()||`—`),Jb(),t_(e.selectedLabel()?6:-1))},dependencies:[Gue,Hue,zz,sN],encapsulation:2})};var K=class r{language=q(null);languages=q([`American Sign Language`,`Cantonese`,`Mandarin`,`Punjabi`,`Spanish`,`Tagalog`,`Vietnamese`].map(t=>({value:t,label:t})));createLabel=t=>`Request \u201C${t}\u201D interpreter`;addLanguage(t){this.languages.update(o=>[...o,{value:t,label:t}]),this.language.set(t)}static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-create-demo`]],decls:5,vars:4,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-3`],[`label`,`Interpreter language`,`hint`,`Not listed? Type it and choose Create`],[`allowCreate`,``,`placeholder`,`Search languages…`,3,`ngModelChange`,`create`,`options`,`ngModel`,`createLabel`],[1,`text-sm`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-combobox`,2),HS(),sD(`ngModelChange`,function(a){return Y_(e.language,a)||(e.language=a),a}),lc(`create`,function(a){return e.addLanguage(a)}),Lf()(),Ga(3,`p`,3),G_(4),Lf()()),o&2&&(Jb(2),Pv(`options`,e.languages()),iD(`ngModel`,e.language),Pv(`createLabel`,e.createLabel),zS(),Jb(2),$f(`Value: `,e.language()||`(none)`))},dependencies:[Gue,Hue,zz,sN,Vn],encapsulation:2})};var Y=class r{caseType=q(null);caseTypes=[{value:`CV-UD`,label:`Unlawful detainer`,description:`Eviction · limited civil`,group:`Civil`,icon:`nav.home`,keywords:[`eviction`]},{value:`CV-SC`,label:`Small claims`,description:`Up to $12,500`,group:`Civil`,icon:`court.payment`},{value:`CV-UN`,label:`Unlimited civil`,description:`Over $35,000`,group:`Civil`,icon:`court.hearing`},{value:`FL-DV`,label:`Domestic violence restraining order`,description:`DV-100`,group:`Family law`,icon:`status.warning`,keywords:[`dv`]},{value:`FL-DS`,label:`Dissolution`,description:`FL-100`,group:`Family law`,icon:`people.users`},{value:`FL-AD`,label:`Adoption`,description:`Filed at the Family Justice Center only`,group:`Family law`,icon:`people.user`,disabled:!0},{value:`PR-GD`,label:`Guardianship`,description:`GC-210`,group:`Probate`,icon:`people.role`},{value:`PR-CS`,label:`Conservatorship`,description:`GC-310`,group:`Probate`,icon:`people.account`}];static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-grouped-demo`]],decls:5,vars:3,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-3`],[`label`,`Case type`,`hint`,`Try “dvro” or “evict”`],[`filter`,`fuzzy`,`highlightMatches`,``,`placeholder`,`Search case types…`,3,`ngModelChange`,`options`,`ngModel`],[1,`text-sm`]],template:function(o,e){o&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-combobox`,2),HS(),sD(`ngModelChange`,function(a){return Y_(e.caseType,a)||(e.caseType=a),a}),Lf()(),Ga(3,`p`,3),G_(4),Lf()()),o&2&&(Jb(2),Pv(`options`,e.caseTypes),iD(`ngModel`,e.caseType),zS(),Jb(2),$f(`Value: `,e.caseType()||`(none)`))},dependencies:[Gue,Hue,zz,sN,Vn],encapsulation:2})};function Me(r,t){if(r&1&&(Ga(0,`p`,1),G_(1),Lf()),r&2){let o=y_();Jb(),$f(`Reassigned to `,o.reassigned(),`.`)}}var Q=class r{open=q(!1);judge=q(null);reassigned=q(``);judges=[`Hon. Amy Chen`,`Hon. Samuel Okafor`,`Hon. Maria Reyes`,`Hon. David Park`,`Comm. James Whitfield`,`Comm. Linda Tran`].map(t=>({value:t,label:t}));save(){this.reassigned.set(this.judge()??``),this.open.set(!1)}static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-modal-demo`]],decls:11,vars:5,consts:[[`variant`,`primary`,3,`click`],[1,`mt-2`,`text-sm`],[`title`,`Reassign case`,`size`,`sm`,3,`openChange`,`open`],[`label`,`Judicial officer`],[`placeholder`,`Search officers…`,3,`ngModelChange`,`options`,`ngModel`],[`slot`,`footer`,1,`flex`,`justify-end`,`gap-2`],[`variant`,`ghost`,3,`click`],[`variant`,`primary`,3,`click`,`disabled`]],template:function(o,e){o&1&&(Ga(0,`scsc-button`,0),lc(`click`,function(){return e.open.set(!0)}),G_(1,`Reassign case 24CV012345`),Lf(),JT(2,Me,2,1,`p`,1),Ga(3,`scsc-modal`,2),sD(`openChange`,function(a){return Y_(e.open,a)||(e.open=a),a}),Ga(4,`scsc-form-field`,3)(5,`scsc-combobox`,4),HS(),sD(`ngModelChange`,function(a){return Y_(e.judge,a)||(e.judge=a),a}),Lf()(),Ga(6,`div`,5)(7,`scsc-button`,6),lc(`click`,function(){return e.open.set(!1)}),G_(8,`Cancel`),Lf(),Ga(9,`scsc-button`,7),lc(`click`,function(){return e.save()}),G_(10,`Reassign`),Lf()()()),o&2&&(Jb(2),t_(e.reassigned()?2:-1),Jb(),iD(`open`,e.open),Jb(2),Pv(`options`,e.judges),iD(`ngModel`,e.judge),zS(),Jb(4),Pv(`disabled`,!e.judge()))},dependencies:[Gue,Hue,zz,sn,sN,Vn,At],encapsulation:2})};function Ne(r,t){if(r&1&&(uc(0,`scsc-avatar`,3),Ga(1,`span`,4)(2,`span`,5),G_(3),Lf(),Ga(4,`span`,6),G_(5),Lf()()),r&2){let o=t.$implicit,e=t.active;Pv(`name`,o.label),Jb(3),nD(o.label),Jb(),k_(e?``:`text-base-content/70`),Jb(),nD(o.description)}}var X=class r{clerk=q(null);clerks=[{value:`e1042`,label:`Alicia Moreno`,description:`Courtroom clerk · Dept. 3`},{value:`e1177`,label:`Ben Okafor`,description:`Calendar clerk · Dept. 12`},{value:`e1203`,label:`Grace Liu`,description:`Records clerk · Civil`},{value:`e1288`,label:`Marcus Webb`,description:`Courtroom clerk · Dept. 21`},{value:`e1311`,label:`Priya Natarajan`,description:`Probate examiner`}];static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-people-demo`]],decls:3,vars:2,consts:[[`label`,`Assign to clerk`,1,`max-w-sm`],[`placeholder`,`Search staff…`,3,`ngModelChange`,`options`,`ngModel`],[`scscOption`,``],[`decorative`,``,`size`,`sm`,3,`name`],[1,`flex`,`min-w-0`,`flex-col`],[1,`truncate`],[1,`truncate`,`text-sm`]],template:function(o,e){o&1&&(Ga(0,`scsc-form-field`,0)(1,`scsc-combobox`,1),HS(),sD(`ngModelChange`,function(a){return Y_(e.clerk,a)||(e.clerk=a),a}),Ov(2,Ne,6,5,`ng-template`,2),Lf()()),o&2&&(Jb(),Pv(`options`,e.clerks),iD(`ngModel`,e.clerk),zS())},dependencies:[Gue,Hue,zz,Wt,sN,Vn,Fa],encapsulation:2})};var $=class r{fb=g(Wue);judges=[{value:`chen-a`,label:`Hon. Amy Chen — Dept. 7`},{value:`okafor-s`,label:`Hon. Samuel Okafor — Dept. 12`},{value:`reyes-m`,label:`Hon. Maria Reyes — Dept. 5`},{value:`whitfield-j`,label:`Comm. James Whitfield — Dept. 20`}];form=this.fb.group({judge:[``,Fs.required]});error(){let t=this.form.controls.judge;return t.invalid&&(t.dirty||t.touched)?`Pick a judicial officer from the list.`:``}submit(){this.form.markAllAsTouched()}static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-reactive-demo`]],decls:10,vars:4,consts:[[1,`flex`,`max-w-sm`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Assigned judicial officer`,`hint`,`Start typing a surname`,`required`,``,3,`error`],[`formControlName`,`judge`,`placeholder`,`Search judicial officers…`,3,`options`],[1,`flex`,`items-center`,`gap-3`],[`variant`,`primary`,`nativeType`,`submit`],[1,`text-sm`,`text-base-content/70`]],template:function(o,e){o&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`scsc-combobox`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`scsc-button`,4),G_(5,`Assign`),Lf(),Ga(6,`span`,5),G_(7,`Value: `),Ga(8,`code`),G_(9),Lf()()()()),o&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.error()),Jb(),Pv(`options`,e.judges),zS(),Jb(7),nD(e.form.value.judge||`—`))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,sn,sN,Vn],encapsulation:2})};var Z=class r{department=q(null);departments=Array.from({length:24},(t,o)=>({value:`D${o+1}`,label:`Department ${o+1}`,description:o<12?`Downtown Superior Court`:`Hall of Justice`}));static ɵfac=function(o){return new(o||r)};static ɵcmp=Af({type:r,selectors:[[`app-combobox-recent-demo`]],decls:2,vars:3,consts:[[`label`,`Courtroom`,`hint`,`Your recent courtrooms are listed first`,1,`max-w-sm`],[`recentKey`,`docs-courtrooms`,`placeholder`,`Search departments…`,3,`ngModelChange`,`options`,`ngModel`,`recent`]],template:function(o,e){o&1&&(Ga(0,`scsc-form-field`,0)(1,`scsc-combobox`,1),HS(),sD(`ngModelChange`,function(a){return Y_(e.department,a)||(e.department=a),a}),Lf()()),o&2&&(Jb(),Pv(`options`,e.departments),iD(`ngModel`,e.department),Pv(`recent`,3),zS())},dependencies:[Gue,Hue,zz,sN,Vn],encapsulation:2})};var Jo={slug:`combobox`,name:`Combobox & autocomplete`,classes:[`ScscCombobox`,`ScscOptionTemplate`,`ScscNoResultsTemplate`,`ScscGroupHeaderTemplate`],category:`Forms`,summary:`A searchable select and autocomplete: filter an options array, or search a server as the user types, with groups, highlighting, recent picks and "Create".`,whenToUse:[`One choice from a long list where typing is faster than scrolling: judicial officers, attorneys of record, statutes, case types.`,'`mode="select"` (default) accepts only an option; typed text just searches, and goes back to the chosen label when focus leaves. `mode="autocomplete"` makes the typed text the value, with the options as suggestions (addresses, free-form names).',"`options` is an array (filtered on the client: `filter` = `contains`, `startsWith`, `fuzzy` or a predicate) or an async source `(query, { signal }) => Promise | Observable`. Async sources are debounced (250 ms), stale requests are aborted and late results dropped; pass `signal` to `fetch`. Use `minChars` to wait for a useful query and `displayWith` to show the current value when the results do not include it.",'It is a `ControlValueAccessor` (no `[(value)]` model): `[(ngModel)]` or `formControlName`. The value is the option `value`; Clear sets `null` (`""` in autocomplete mode).',"Short fixed lists are better as `scsc-select`; several values need `scsc-multi-select`; values the user invents need `scsc-tags-input`."],demos:[{id:`combobox-basic`,title:`Select-only with ngModel`,description:"`[(ngModel)]` on a signal; the label is looked up from the value for display.",component:U,source:w[`combobox-basic`]},{id:`combobox-reactive`,title:`With Reactive Forms`,description:"`formControlName` inside `scsc-form-field`; required validation shows the field error.",component:$,source:w[`combobox-reactive`]},{id:`combobox-autocomplete`,title:`Autocomplete with free text`,description:'`mode="autocomplete"`: whatever is typed is the value; `highlightMatches` and `clearable`.',component:J,source:w[`combobox-autocomplete`]},{id:`combobox-async`,title:`Async server search`,description:"An abortable source with 600 ms of latency, `minChars`, `displayWith`, and loading, empty and error rows inside the list. Make a search fail, then pick **Retry**.",component:I,source:w[`combobox-async`]},{id:`combobox-grouped`,title:`Groups, descriptions and icons`,description:'Options with `group`, `description`, `icon`, `keywords` and one `disabled`; `filter="fuzzy"` ranks the closest matches first.',component:Y,source:w[`combobox-grouped`]},{id:`combobox-recent`,title:`Recent items`,description:'`[recent]="3"` lists the last picks first while the query is empty; `recentKey` keeps them across visits.',component:Z,source:w[`combobox-recent`]},{id:`combobox-create`,title:`Create a new value`,description:"`allowCreate` offers a Create row when nothing matches exactly; handle `(create)` by adding the option and setting the value.",component:K,source:w[`combobox-create`]},{id:`combobox-people`,title:`Option template: people`,description:"`ng-template scscOption` with an avatar and a second line.",component:X,source:w[`combobox-people`]},{id:`combobox-modal`,title:`Inside a modal`,description:`The list renders in the top layer, so the dialog does not clip it; Escape closes the list first.`,component:Q,source:w[`combobox-modal`]},{id:`combobox-attorney`,title:`Substitution of attorney`,description:`A native select for the two parties beside a combobox for eight attorneys; put the name and bar number in the label so either can be typed.`,component:z,source:w[`combobox-attorney`]}],a11y:["Focus stays in the input and the highlighted option is exposed with `aria-activedescendant`, so screen readers announce it as you arrow or type. Options are not Tab stops, and clicking one keeps focus in the input.",`Loading, "No results" and error rows are inside the listbox, so they are read in place; the result count ("4 results", "No results") is announced politely once typing pauses. The Retry and Create rows are options, operated like any other.`,'Groups are `role="group"` named by their visible heading. Disabled options are `aria-disabled` and the arrow keys skip them.',"Matched text is wrapped in `<mark>` and shown bold, so the highlight does not rely on colour.",`The list is a top-layer popover lined up with the field: it is not clipped by scroll containers or dialogs, and it flips above the field when there is more room there.`],aria:['Input: `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, `aria-controls` (while the list shows) and `aria-activedescendant`.','List: `role="listbox"` named after the field label (or the placeholder), `aria-busy="true"` while loading; options have `aria-selected`, disabled ones `aria-disabled="true"`.'],appMustProvide:["A label: put it in `scsc-form-field`. On its own, the accessible name is the `placeholder`, so write it as a label.","With an async source, `displayWith` (so the field can show a value that is not in the latest results) and meaningful `errorText`.","An `scscOption` template with text and images only: the whole row is one option, so nothing inside may be interactive."],keyboard:[{keys:`Tab / Shift + Tab`,action:"Into the field, which opens the list (turn off with `openOnFocus`), and out again, which closes it; options are not Tab stops."},{keys:`Type a character`,action:`Filters the list (or searches) and, in select mode, highlights the first match. In autocomplete mode the text is the value.`},{keys:`ArrowDown / ArrowUp`,action:`Opens the list and moves the highlight down / up one, stopping at the ends and skipping disabled options; with nothing highlighted it starts on the chosen option, else the first / last.`},{keys:`Alt + ArrowDown`,action:`Opens the list without moving the highlight.`},{keys:`Alt + ArrowUp`,action:`Picks the highlighted option (if any) and closes the list.`},{keys:`Home / End`,action:`With an option highlighted, highlight the first / last option; otherwise they move the text cursor.`},{keys:`Enter`,action:`Picks the highlighted option (or runs Create / Retry) and closes the list; with nothing highlighted it just closes it. With the list closed it is left to the browser, so a form submits.`},{keys:`Escape`,action:"Closes the list (an enclosing dialog stays open). Pressed again, clears the typed text, and the value in autocomplete mode or when `clearable`."}],related:[`select`,`multi-select`,`tags-input`,`search-input`,`form-field`]};export{Jo as COMBOBOX_DOCS};