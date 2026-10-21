import{Bi as xz,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,No as cc,Q as Gue,Xa as Pv,Y as Fs,Yo as iD,Zi as za,_i as tN,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ii as qo,ks as t_,l as $ue,mn as Uue,mt as KF,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function ae(o,s){if(o&1&&(Ga(0,`scsc-alert`,11),G_(1),Lf()),o&2){let t=y_();Jb(),nD(t.saved())}}function se(o){let s=String(o.get(`legalName`)?.value??``).trim().toLowerCase(),t=o.get(`aliases`)?.value??[];return s&&t.some(e=>e.trim().toLowerCase()===s)?{aliasRepeatsName:!0}:null}var V=class o{fb=g(Wue);saved=q(``);form=this.fb.nonNullable.group({role:`defendant`,legalName:[`Marcus Allen Reed`,Fs.required],aliases:[[`Marc Reed`,`M. A. Reed`]]},{validators:se});nameError(){let s=this.form.controls.legalName;return s.invalid&&s.touched?`Enter the party’s legal name.`:``}aliasError(){return this.form.hasError(`aliasRepeatsName`)?`Remove the alias that repeats the legal name.`:``}submit(){if(this.form.markAllAsTouched(),this.form.invalid){this.saved.set(``);return}let{legalName:s,aliases:t}=this.form.getRawValue();this.saved.set(t.length?s+`, also known as `+t.join(`; `)+`.`:s+`.`)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Af({type:o,selectors:[[`app-tags-input-aliases-demo`]],decls:17,vars:6,consts:[[1,`flex`,`max-w-xs`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Role`,`for`,`aliases-role`],[`scsc-select`,``,`id`,`aliases-role`,`formControlName`,`role`],[`value`,`defendant`],[`value`,`plaintiff`],[`value`,`witness`],[`label`,`Legal name`,`for`,`aliases-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`aliases-name`,`formControlName`,`legalName`,`required`,``,3,`invalid`],[`label`,`Also known as`,`hint`,`Other names on records or in filings. Press Enter after each.`,3,`error`],[`formControlName`,`aliases`,`placeholder`,`Add another name…`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Party saved`]],template:function(t,e){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`select`,2),HS(),Ga(3,`option`,3),G_(4,`Defendant`),Lf(),Ga(5,`option`,4),G_(6,`Plaintiff`),Lf(),Ga(7,`option`,5),G_(8,`Witness`),Lf()()(),Ga(9,`scsc-form-field`,6)(10,`input`,7),HS(),Lf()(),Ga(11,`scsc-form-field`,8)(12,`scsc-tags-input`,9),HS(),Lf()(),Ga(13,`div`)(14,`scsc-button`,10),G_(15,`Save party`),Lf()(),JT(16,ae,2,1,`scsc-alert`,11),Lf()),t&2&&(Pv(`formGroup`,e.form),Jb(2),zS(),Jb(7),Pv(`error`,e.nameError()),Jb(),Pv(`invalid`,!!e.nameError()),cc(`aria-invalid`,!!e.nameError()),zS(),Jb(),Pv(`error`,e.aliasError()),Jb(),zS(),Jb(4),t_(e.saved()?16:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,WA,Vz,Xz,za,sn,Vn,qo,On,KF],encapsulation:2})};var P=class o{keywords=q([`motion to compel`,`discovery`]);static ɵfac=function(t){return new(t||o)};static ɵcmp=Af({type:o,selectors:[[`app-tags-input-basic-demo`]],decls:6,vars:2,consts:[[1,`max-w-md`],[`placeholder`,`Add a keyword and press Enter…`,`name`,`keywords`,3,`ngModelChange`,`ngModel`],[1,`mt-3`,`text-sm`,`text-base-content/70`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-tags-input`,1),HS(),sD(`ngModelChange`,function(u){return Y_(e.keywords,u)||(e.keywords=u),u}),Lf(),Ga(2,`p`,2),G_(3,` Docket search will match any of: `),Ga(4,`code`),G_(5),Lf()()()),t&2&&(Jb(),iD(`ngModel`,e.keywords),zS(),Jb(4),nD(e.keywords().join(` OR `)||`—`))},dependencies:[Gue,Hue,zz,KF],encapsulation:2})};function oe(o){return s=>(s.value?.length??0)>o?{maxTags:{max:o}}:null}var _=class o{fb=g(Wue);form=this.fb.group({tags:[[`fee-waiver`,`self-represented`],oe(5)]});error(){return this.form.controls.tags.hasError(`maxTags`)?`Remove a tag; the limit is 5.`:``}submit(){this.form.markAllAsTouched()}static ɵfac=function(t){return new(t||o)};static ɵcmp=Af({type:o,selectors:[[`app-tags-input-reactive-demo`]],decls:8,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Case tags`,`hint`,`Up to 5; used for clerk work queues`,3,`error`],[`formControlName`,`tags`,`placeholder`,`e.g. interpreter-needed`],[1,`flex`,`items-center`,`gap-3`],[`variant`,`primary`,`nativeType`,`submit`,3,`disabled`],[1,`text-sm`,`text-base-content/70`]],template:function(t,e){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`scsc-form-field`,1)(2,`scsc-tags-input`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`scsc-button`,4),G_(5,`Save tags`),Lf(),Ga(6,`span`,5),G_(7),Lf()()()),t&2&&(Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.error()),Jb(),zS(),Jb(2),Pv(`disabled`,e.form.invalid),Jb(3),$f(``,e.form.value.tags?.length??0,` / 5`))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,sn,Vn,KF],encapsulation:2})};var B=class o{related=q([`24CV012345`,`24FL004410`]);recentCases=[`24CV012345`,`24CV012377`,`24CV013020`,`24FL004410`,`24PR000872`,`23CR118204`];casePattern=/^\d{2}[A-Z]{2}\d{6}$/;patternMessage=s=>`\u201C${s}\u201D isn\u2019t a case number. Use two digits, two letters and six digits, like 24CV012345.`;static ɵfac=function(t){return new(t||o)};static ɵcmp=Af({type:o,selectors:[[`app-tags-input-suggestions-demo`]],decls:5,vars:7,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`label`,`Related cases`,`hint`,`Case numbers like 24CV012345 · up to 6 · paste a list to add several`],[`highlightMatches`,``,`placeholder`,`Add a case number…`,3,`ngModelChange`,`ngModel`,`suggestions`,`pattern`,`patternMessage`,`maxTags`,`maxVisible`],[1,`text-sm`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-tags-input`,2),HS(),sD(`ngModelChange`,function(u){return Y_(e.related,u)||(e.related=u),u}),Lf()(),Ga(3,`p`,3),G_(4),Lf()()),t&2&&(Jb(2),iD(`ngModel`,e.related),Pv(`suggestions`,e.recentCases)(`pattern`,e.casePattern)(`patternMessage`,e.patternMessage)(`maxTags`,6)(`maxVisible`,4),zS(),Jb(2),$f(``,e.related().length,` related cases`))},dependencies:[Gue,Hue,xz,zz,Vn,KF],encapsulation:2})};var v={"tags-input-aliases":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscSelect,
  ScscTagsInput,
} from '@scscourt/design';

/** Cross-field: an alias that repeats the legal name adds nothing to the record. */
function aliasesDifferFromName(group: AbstractControl): ValidationErrors | null {
  const name = String(group.get('legalName')?.value ?? '')
    .trim()
    .toLowerCase();
  const aliases = (group.get('aliases')?.value ?? []) as string[];
  return name && aliases.some((a) => a.trim().toLowerCase() === name)
    ? { aliasRepeatsName: true }
    : null;
}

@Component({
  selector: 'app-tags-input-aliases-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscSelect,
    ScscTagsInput,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-xs flex-col gap-4">
      <scsc-form-field label="Role" for="aliases-role">
        <select scsc-select id="aliases-role" formControlName="role">
          <option value="defendant">Defendant</option>
          <option value="plaintiff">Plaintiff</option>
          <option value="witness">Witness</option>
        </select>
      </scsc-form-field>

      <scsc-form-field label="Legal name" for="aliases-name" required [error]="nameError()">
        <input
          scsc-input
          id="aliases-name"
          formControlName="legalName"
          required
          [invalid]="!!nameError()"
          [attr.aria-invalid]="!!nameError()"
        />
      </scsc-form-field>

      <scsc-form-field
        label="Also known as"
        hint="Other names on records or in filings. Press Enter after each."
        [error]="aliasError()"
      >
        <scsc-tags-input formControlName="aliases" placeholder="Add another name\u2026" />
      </scsc-form-field>

      <div>
        <scsc-button variant="primary" nativeType="submit">Save party</scsc-button>
      </div>

      @if (saved()) {
        <scsc-alert status="success" title="Party saved">{{ saved() }}</scsc-alert>
      }
    </form>
  \`,
})
export class TagsInputAliasesDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly saved = signal('');

  protected readonly form = this.fb.nonNullable.group(
    {
      role: 'defendant',
      legalName: ['Marcus Allen Reed', Validators.required],
      aliases: [['Marc Reed', 'M. A. Reed'] as string[]],
    },
    { validators: aliasesDifferFromName },
  );

  protected nameError(): string {
    const c = this.form.controls.legalName;
    return c.invalid && c.touched ? 'Enter the party\u2019s legal name.' : '';
  }

  protected aliasError(): string {
    return this.form.hasError('aliasRepeatsName')
      ? 'Remove the alias that repeats the legal name.'
      : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.saved.set('');
      return;
    }
    const { legalName, aliases } = this.form.getRawValue();
    this.saved.set(
      aliases.length ? legalName + ', also known as ' + aliases.join('; ') + '.' : legalName + '.',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-xs flex-col gap-4">
  <scsc-form-field label="Role" for="aliases-role">
    <select scsc-select id="aliases-role" formControlName="role">
      <option value="defendant">Defendant</option>
      <option value="plaintiff">Plaintiff</option>
      <option value="witness">Witness</option>
    </select>
  </scsc-form-field>

  <scsc-form-field label="Legal name" for="aliases-name" required [error]="nameError()">
    <input
      scsc-input
      id="aliases-name"
      formControlName="legalName"
      required
      [invalid]="!!nameError()"
      [attr.aria-invalid]="!!nameError()"
    />
  </scsc-form-field>

  <scsc-form-field
    label="Also known as"
    hint="Other names on records or in filings. Press Enter after each."
    [error]="aliasError()"
  >
    <scsc-tags-input formControlName="aliases" placeholder="Add another name\u2026" />
  </scsc-form-field>

  <div>
    <scsc-button variant="primary" nativeType="submit">Save party</scsc-button>
  </div>

  @if (saved()) {
    <scsc-alert status="success" title="Party saved">{{ saved() }}</scsc-alert>
  }
</form>
`},"tags-input-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscTagsInput } from '@scscourt/design';

@Component({
  selector: 'app-tags-input-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscTagsInput],
  template: \`
    <div class="max-w-md">
      <scsc-tags-input
        [(ngModel)]="keywords"
        placeholder="Add a keyword and press Enter\u2026"
        name="keywords"
      />
      <p class="mt-3 text-sm text-base-content/70">
        Docket search will match any of: <code>{{ keywords().join(' OR ') || '\u2014' }}</code>
      </p>
    </div>
  \`,
})
export class TagsInputBasicDemo {
  protected readonly keywords = signal<string[]>(['motion to compel', 'discovery']);
}
`,html:`<div class="max-w-md">
  <scsc-tags-input
    [(ngModel)]="keywords"
    placeholder="Add a keyword and press Enter\u2026"
    name="keywords"
  />
  <p class="mt-3 text-sm text-base-content/70">
    Docket search will match any of: <code>{{ keywords().join(' OR ') || '\u2014' }}</code>
  </p>
</div>
`},"tags-input-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { ScscButton, ScscFormField, ScscTagsInput } from '@scscourt/design';

/** Fails when the array holds more than \`max\` entries. */
function maxTags(max: number) {
  return (control: AbstractControl<string[] | null>): ValidationErrors | null =>
    (control.value?.length ?? 0) > max ? { maxTags: { max } } : null;
}

@Component({
  selector: 'app-tags-input-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscFormField, ScscTagsInput],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Case tags"
        hint="Up to 5; used for clerk work queues"
        [error]="error()"
      >
        <scsc-tags-input formControlName="tags" placeholder="e.g. interpreter-needed" />
      </scsc-form-field>
      <div class="flex items-center gap-3">
        <scsc-button variant="primary" nativeType="submit" [disabled]="form.invalid"
          >Save tags</scsc-button
        >
        <span class="text-sm text-base-content/70">{{ form.value.tags?.length ?? 0 }} / 5</span>
      </div>
    </form>
  \`,
})
export class TagsInputReactiveDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    tags: [['fee-waiver', 'self-represented'] as string[], maxTags(5)],
  });

  protected error(): string {
    return this.form.controls.tags.hasError('maxTags') ? 'Remove a tag; the limit is 5.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Case tags"
    hint="Up to 5; used for clerk work queues"
    [error]="error()"
  >
    <scsc-tags-input formControlName="tags" placeholder="e.g. interpreter-needed" />
  </scsc-form-field>
  <div class="flex items-center gap-3">
    <scsc-button variant="primary" nativeType="submit" [disabled]="form.invalid"
      >Save tags</scsc-button
    >
    <span class="text-sm text-base-content/70">{{ form.value.tags?.length ?? 0 }} / 5</span>
  </div>
</form>
`},"tags-input-suggestions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField, ScscTagsInput } from '@scscourt/design';

@Component({
  selector: 'app-tags-input-suggestions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscTagsInput],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <!-- Paste "24CV000101, 24CV000102" to add several at once. -->
      <scsc-form-field
        label="Related cases"
        hint="Case numbers like 24CV012345 \xB7 up to 6 \xB7 paste a list to add several"
      >
        <scsc-tags-input
          [(ngModel)]="related"
          [suggestions]="recentCases"
          [pattern]="casePattern"
          [patternMessage]="patternMessage"
          [maxTags]="6"
          [maxVisible]="4"
          highlightMatches
          placeholder="Add a case number\u2026"
        />
      </scsc-form-field>
      <p class="text-sm">{{ related().length }} related cases</p>
    </div>
  \`,
})
export class TagsInputSuggestionsDemo {
  protected readonly related = signal<string[]>(['24CV012345', '24FL004410']);
  protected readonly recentCases = [
    '24CV012345',
    '24CV012377',
    '24CV013020',
    '24FL004410',
    '24PR000872',
    '23CR118204',
  ];
  protected readonly casePattern = /^\\d{2}[A-Z]{2}\\d{6}$/;
  protected readonly patternMessage = (tag: string): string =>
    \`\u201C\${tag}\u201D isn\u2019t a case number. Use two digits, two letters and six digits, like 24CV012345.\`;
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <!-- Paste "24CV000101, 24CV000102" to add several at once. -->
  <scsc-form-field
    label="Related cases"
    hint="Case numbers like 24CV012345 \xB7 up to 6 \xB7 paste a list to add several"
  >
    <scsc-tags-input
      [(ngModel)]="related"
      [suggestions]="recentCases"
      [pattern]="casePattern"
      [patternMessage]="patternMessage"
      [maxTags]="6"
      [maxVisible]="4"
      highlightMatches
      placeholder="Add a case number\u2026"
    />
  </scsc-form-field>
  <p class="text-sm">{{ related().length }} related cases</p>
</div>
`}};var Be={slug:`tags-input`,name:`Tags Input`,classes:[`ScscTagsInput`],category:`Forms`,whenToUse:[`Free-text lists the user invents: keywords, case tags, alias names, related case numbers. Enter or a comma commits a tag; Backspace on an empty draft removes the last one; a pasted comma- or line-separated list adds each entry.`,"It is a `ControlValueAccessor` with a `string[]` value (no `[(value)]` model): `[(ngModel)]` with `FormsModule` standalone, `formControlName` in a `FormGroup`.","`suggestions` (strings, options or an async source, as for `scsc-combobox`) offers known values as the user types without restricting them. When the values must come from a known list, use `scsc-multi-select` instead.","Blank entries are dropped. Duplicates (ignoring case), entries past `maxTags`, and entries failing `pattern` or `validate` are turned down with a message under the field and a `(rejected)` event; rules against other fields stay yours to validate (see the aliases demo).",'Tags render with `scsc-tag-list`: `maxVisible` collapses the rest into "+N more".'],demos:[{id:`tags-input-basic`,title:`Standalone with ngModel`,description:"`[(ngModel)]` on a `string[]` signal.",component:P,source:v[`tags-input-basic`]},{id:`tags-input-suggestions`,title:`Suggestions, validation and +N more`,description:"Suggested case numbers, a `pattern` with its own message, `maxTags`, `maxVisible`, and paste-splitting.",component:B,source:v[`tags-input-suggestions`]},{id:`tags-input-reactive`,title:`With Reactive Forms`,description:"`formControlName` with a custom `maxTags` validator and a field error.",component:_,source:v[`tags-input-reactive`]},{id:`tags-input-aliases`,title:`Party aliases`,description:`A party record with "also known as" names; a group validator rejects an alias that repeats the legal name.`,component:V,source:v[`tags-input-aliases`]}],a11y:['Tags are a named list (`listLabel`, default "Added tags"); each has a real **Remove** button named after its tag ("Remove Probate"), so keyboard and screen-reader users can delete any tag, not just the last one.',`After a tag is removed with its button, focus moves to the next tag’s **Remove** button, or to the text field when it was the last tag; it never drops to the page. Additions and removals are announced politely.`,"A turned-down entry stays in the field to be corrected; the message is shown under the field, linked with `aria-describedby`, and announced.",'With `suggestions` the text field is a combobox (`aria-autocomplete="list"`, `aria-activedescendant`), with the same listbox as `scsc-combobox`.'],appMustProvide:["A label: put it in `scsc-form-field`. Elsewhere the accessible name is the `placeholder`, so write it as a label.",`Limits and formats in the hint (“up to 6”, “like 24CV012345”), so nobody learns them only from a rejection.`],keyboard:[{keys:`Tab`,action:`Through each tag’s **Remove** button (one stop per tag), then the text field.`},{keys:`Enter / Comma`,action:`Adds the typed text (or the highlighted suggestion, with Enter) and empties the field; a turned-down entry stays for correcting.`},{keys:`ArrowDown / ArrowUp`,action:"With `suggestions`: opens them and moves the highlight."},{keys:`Escape`,action:`Closes the suggestions; pressed again, clears the typed text.`},{keys:`Backspace (in an empty field)`,action:`Removes the last tag; focus stays in the field.`},{keys:`Enter / Space (on Remove)`,action:`Removes that tag and moves focus to the next tag’s **Remove** button, or to the text field after the last tag.`}],related:[`multi-select`,`combobox`,`tag-list`,`form-field`]};export{Be as TAGS_INPUT_DOCS};