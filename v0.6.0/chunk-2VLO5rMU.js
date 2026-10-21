import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,In as Xz,Ma as JT,Na as Jb,Q as Gue,Xa as Pv,Y as Fs,Yo as iD,Zi as za,bn as Vz,bo as Y_,cs as lc,ea as zz,ii as qo,ks as t_,kt as NE,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-C9lUiK0O.js";import"./chunk-p5ZSTGkx.js";import{n as de$1}from"./chunk-GSro6g7x.js";var b=class n{schema=[{key:`recipient`,type:`text`,label:`Recipient name`},{key:`caseNumber`,type:`text`,label:`Case number`},{key:`hearingDate`,type:`date`,label:`Hearing date`},{key:`department`,type:`text`,label:`Department`}];sample=q({recipient:`Maria Alvarez`,caseNumber:`24CV012345`,hearingDate:`October 14, 2026 at 9:00 AM`,department:`21`});body=q(`<p>Dear {{recipient}},</p><p>Your hearing in case <strong>{{caseNumber}}</strong> is set for {{hearingDate}} in Department {{department}}.</p>`);used=q([`recipient`,`caseNumber`,`hearingDate`,`department`]);onChange(t){this.used.set(t.fields)}static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-template-editor-basic-demo`]],decls:5,vars:4,consts:[[1,`flex`,`flex-col`,`gap-3`],[`label`,`Hearing reminder`],[3,`sampleDataChange`,`ngModelChange`,`change`,`schema`,`sampleData`,`ngModel`],[`tone`,`muted`,`size`,`sm`]],template:function(r,e){r&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-template-editor`,2),HS(),sD(`sampleDataChange`,function(o){return Y_(e.sample,o)||(e.sample=o),o})(`ngModelChange`,function(o){return Y_(e.body,o)||(e.body=o),o}),lc(`change`,function(o){return e.onChange(o)}),Lf()(),Ga(3,`scsc-text`,3),G_(4),Lf()()),r&2&&(Jb(2),Pv(`schema`,e.schema),iD(`sampleData`,e.sample)(`ngModel`,e.body),zS(),Jb(2),$f(`Fields used: `,e.used().join(`, `)||`none`))},dependencies:[Gue,Hue,zz,Vn,de$1,NE],encapsulation:2})};function L(n,t){n&1&&(Ga(0,`scsc-alert`,5),G_(1,` The jury reminder is ready to send. `),Lf())}var v=class n{fb=g(Wue);schema=[{key:`juror`,type:`text`,label:`Juror name`},{key:`reportDate`,type:`date`,label:`Report date`},{key:`reportTime`,type:`text`,label:`Report time`}];form=this.fb.nonNullable.group({subject:[`Jury service reminder`,Fs.required],body:[``,Fs.required]});submitted=q(!1);saved=q(!1);bodyError(){let t=this.form.controls.body;return t.invalid&&(this.submitted()||t.touched)?`Write the body of the notice.`:``}save(){this.submitted.set(!0),this.form.markAllAsTouched(),this.saved.set(this.form.valid)}static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-template-editor-form-demo`]],decls:9,vars:4,consts:[[`novalidate`,``,1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Subject`,`for`,`tpl-form-subject`,`required`,``],[`scsc-input`,``,`id`,`tpl-form-subject`,`formControlName`,`subject`,`autocomplete`,`off`],[`label`,`Body`,`required`,``,3,`error`],[`formControlName`,`body`,`toolbar`,`minimal`,`placeholder`,`Write the notice; insert fields from the menu.`,`previewHeight`,`14rem`,3,`schema`],[`status`,`success`,`title`,`Template saved`],[`variant`,`primary`,`nativeType`,`submit`]],template:function(r,e){r&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.save()}),Ga(1,`scsc-form-field`,1)(2,`input`,2),HS(),Lf()(),Ga(3,`scsc-form-field`,3)(4,`scsc-template-editor`,4),HS(),Lf()(),JT(5,L,2,0,`scsc-alert`,5),Ga(6,`div`)(7,`scsc-button`,6),G_(8,`Save template`),Lf()()()),r&2&&(Pv(`formGroup`,e.form),Jb(2),zS(),Jb(),Pv(`error`,e.bodyError()),Jb(),Pv(`schema`,e.schema),zS(),Jb(),t_(e.saved()?5:-1))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,za,sn,Vn,qo,de$1],encapsulation:2})};var w={"template-editor-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField, ScscText } from '@scscourt/design';
import { ScscTemplateEditor, type ScscTemplateChange } from '@scscourt/design/editor';
import type { ScscFormSchema } from '@scscourt/design/forms';

@Component({
  selector: 'app-template-editor-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscTemplateEditor, ScscText],
  template: \`
    <div class="flex flex-col gap-3">
      <scsc-form-field label="Hearing reminder">
        <scsc-template-editor
          [schema]="schema"
          [(sampleData)]="sample"
          [(ngModel)]="body"
          (change)="onChange($event)"
        />
      </scsc-form-field>
      <scsc-text tone="muted" size="sm">Fields used: {{ used().join(', ') || 'none' }}</scsc-text>
    </div>
  \`,
})
export class TemplateEditorBasicDemo {
  /** The parameters a caller sends with the notice; each becomes an insertable merge field. */
  protected readonly schema: ScscFormSchema = [
    { key: 'recipient', type: 'text', label: 'Recipient name' },
    { key: 'caseNumber', type: 'text', label: 'Case number' },
    { key: 'hearingDate', type: 'date', label: 'Hearing date' },
    { key: 'department', type: 'text', label: 'Department' },
  ];
  protected readonly sample = signal<Record<string, unknown>>({
    recipient: 'Maria Alvarez',
    caseNumber: '24CV012345',
    hearingDate: 'October 14, 2026 at 9:00 AM',
    department: '21',
  });
  protected readonly body = signal(
    '<p>Dear {{recipient}},</p><p>Your hearing in case <strong>{{caseNumber}}</strong> is set for {{hearingDate}} in Department {{department}}.</p>',
  );
  protected readonly used = signal<string[]>([
    'recipient',
    'caseNumber',
    'hearingDate',
    'department',
  ]);

  protected onChange(change: ScscTemplateChange): void {
    this.used.set(change.fields);
  }
}
`,html:`<div class="flex flex-col gap-3">
  <scsc-form-field label="Hearing reminder">
    <scsc-template-editor
      [schema]="schema"
      [(sampleData)]="sample"
      [(ngModel)]="body"
      (change)="onChange($event)"
    />
  </scsc-form-field>
  <scsc-text tone="muted" size="sm">Fields used: {{ used().join(', ') || 'none' }}</scsc-text>
</div>
`},"template-editor-form":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput } from '@scscourt/design';
import { ScscTemplateEditor } from '@scscourt/design/editor';
import type { ScscFormSchema } from '@scscourt/design/forms';

@Component({
  selector: 'app-template-editor-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscTemplateEditor,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
      <scsc-form-field label="Subject" for="tpl-form-subject" required>
        <input scsc-input id="tpl-form-subject" formControlName="subject" autocomplete="off" />
      </scsc-form-field>
      <scsc-form-field label="Body" required [error]="bodyError()">
        <scsc-template-editor
          formControlName="body"
          [schema]="schema"
          toolbar="minimal"
          placeholder="Write the notice; insert fields from the menu."
          previewHeight="14rem"
        />
      </scsc-form-field>
      @if (saved()) {
        <scsc-alert status="success" title="Template saved">
          The jury reminder is ready to send.
        </scsc-alert>
      }
      <div><scsc-button variant="primary" nativeType="submit">Save template</scsc-button></div>
    </form>
  \`,
})
export class TemplateEditorFormDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly schema: ScscFormSchema = [
    { key: 'juror', type: 'text', label: 'Juror name' },
    { key: 'reportDate', type: 'date', label: 'Report date' },
    { key: 'reportTime', type: 'text', label: 'Report time' },
  ];
  protected readonly form = this.fb.nonNullable.group({
    subject: ['Jury service reminder', Validators.required],
    body: ['', Validators.required],
  });
  protected readonly submitted = signal(false);
  protected readonly saved = signal(false);

  protected bodyError(): string {
    const c = this.form.controls.body;
    return c.invalid && (this.submitted() || c.touched) ? 'Write the body of the notice.' : '';
  }

  protected save(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    this.saved.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
  <scsc-form-field label="Subject" for="tpl-form-subject" required>
    <input scsc-input id="tpl-form-subject" formControlName="subject" autocomplete="off" />
  </scsc-form-field>
  <scsc-form-field label="Body" required [error]="bodyError()">
    <scsc-template-editor
      formControlName="body"
      [schema]="schema"
      toolbar="minimal"
      placeholder="Write the notice; insert fields from the menu."
      previewHeight="14rem"
    />
  </scsc-form-field>
  @if (saved()) {
    <scsc-alert status="success" title="Template saved">
      The jury reminder is ready to send.
    </scsc-alert>
  }
  <div><scsc-button variant="primary" nativeType="submit">Save template</scsc-button></div>
</form>
`}};var de={slug:`template-editor`,name:`Template Editor`,classes:[`ScscTemplateEditor`],category:`Specialized`,whenToUse:[`Authoring merge templates: hearing notices, jury reminders, payment receipts, portal alerts. The author writes rich text, inserts fields from the template’s parameter schema as chips, and sees the result filled with sample data.`,"The value is the template HTML with plain `{{path}}` tokens (`{{#each list}}…{{/each}}` for list fields), ready for the Notification Service. `(change)` emits `{ html, fields }` with the fields the template uses.","The preview is a sandboxed `iframe` (never `allow-scripts`, a restrictive CSP; it grows with its content, so it never scrolls on its own) with every value HTML-escaped: sample data such as `<img src=x onerror=…>` shows as text. It has its own plain document styles; pass `previewStyles` to match your email.",'Render templates yourself with `scscRenderTemplate(html, data)` (the same escaping) and list their fields with `scscTemplateFields(html)`. When the app shows its own branded preview, set `[preview]="false"` (the Console’s template page does).'],setup:`// Same peers as the rich-text editor (TipTap). The field menu comes from @scscourt/design/forms.
import { ScscTemplateEditor, scscRenderTemplate } from '@scscourt/design/editor';`,demos:[{id:`template-editor-basic`,title:`Editor, fields, sample data and preview`,description:"`[schema]` feeds **Insert field**; `[(sampleData)]` is editable as JSON under the preview. Side by side when the component is at least 64rem wide, Edit / Preview tabs below that.",component:b,source:w[`template-editor-basic`],layout:`full-bleed`,a11y:`skip`},{id:`template-editor-form`,title:`In a reactive form`,description:"`formControlName` with `Validators.required`; inside `scsc-form-field` the editing area takes the field’s label and error.",component:v,source:w[`template-editor-form`],a11y:`skip`}],a11y:[`The editor is the rich-text editor (toolbar, keyboard and naming as documented there). **Insert field** is a WAI-ARIA menu button; choosing a field returns focus to the text with the chip inserted, read as "Merge field: Case number".`,`Below 64rem, Edit and Preview are WAI-ARIA tabs; side by side, the two panes are labelled groups. The preview frame has a title ("Template preview") and is read in browse mode; it is not a Tab stop, since it never needs scrolling.`,"Invalid sample JSON is reported under the textarea through `scsc-form-field` (its error is read with the field) and the preview keeps the last valid data."],keyboard:[{keys:`Tab / Shift + Tab`,action:`Through the tabs (below 64rem), Insert field, the editor’s toolbar and text, and the sample data.`},{keys:`ArrowLeft / ArrowRight`,action:`On the tabs: switch between Edit and Preview.`},{keys:`Enter / Space / ArrowDown`,action:`On Insert field: opens the field menu; arrow keys, Home/End and type-ahead move, Enter inserts.`},{keys:`Escape`,action:`In the field menu: closes it and returns focus to Insert field.`},{keys:`Editor shortcuts`,action:"As on the rich-text editor page; typing `{{path}}` also makes a chip."}],appMustProvide:['Merge-field labels that read well when announced ("Merge field: Case number"), and the label for the editor through `scsc-form-field` or `ariaLabel`.'],related:[`rich-text-editor`,`forms-schema`]};export{de as TEMPLATE_EDITOR_DOCS};