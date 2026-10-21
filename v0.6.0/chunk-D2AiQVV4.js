import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,K as Fi,Lo as d_,Ma as JT,Ms as uc,Na as Jb,On as Wz,Q as Gue,Ss as rD,Xa as Pv,Xt as RP,Y as Fs,Yo as iD,Zi as za,_i as tN,bn as Vz,bo as Y_,cs as lc,ea as zz,et as Ha,ha as Eg,ii as qo,ka as Ig,ks as t_,l as $ue,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,sa as C_,tt as Hue,va as G_,vn as Vn,vt as Kue,w as Bo,wa as HS,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{t as j$1}from"./chunk-C9lUiK0O.js";import{n as ap}from"./chunk-p5ZSTGkx.js";var A=class a{note=q$1(``);static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-char-limit-demo`]],decls:2,vars:2,consts:[[`label`,`Calendar note`,`hint`,`Shown on the public calendar. The count is announced as you near the limit.`,1,`block`,`max-w-2xl`],[`toolbar`,`minimal`,`minHeight`,`5rem`,`placeholder`,`e.g. Appear in person; bring two copies of the lease.`,3,`ngModelChange`,`maxLength`,`ngModel`]],template:function(t,e){t&1&&(Ga(0,`scsc-form-field`,0)(1,`scsc-rich-text-editor`,1),HS(),sD(`ngModelChange`,function(d){return Y_(e.note,d)||(e.note=d),d}),Lf()()),t&2&&(Jb(),Pv(`maxLength`,280),iD(`ngModel`,e.note),zS())},dependencies:[Gue,Hue,zz,Vn,ap],encapsulation:2})};var P=class a{tools=[`bold`,`italic`,`|`,`bulletList`,`orderedList`,`|`,{id:`today`,label:`Insert today's date`,icon:`calendar`,run:n=>n.chain().focus().insertContent(new Date().toLocaleDateString(`en-US`,{dateStyle:`long`})).run()},{id:`signature`,label:`Insert signature block`,icon:`action.edit`,run:n=>n.chain().focus().insertContent(`<p>IT IS SO ORDERED.</p><p>Judge of the Superior Court</p>`).run()}];html=q$1(`<p>The court, having considered the papers, rules as follows:</p>`);static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-custom-tool-demo`]],decls:2,vars:2,consts:[[`label`,`Minute order`,`hint`,`Two custom tools after the built-ins: today's date and the judge's signature block.`,1,`block`,`max-w-2xl`],[3,`ngModelChange`,`toolbar`,`ngModel`]],template:function(t,e){t&1&&(Ga(0,`scsc-form-field`,0)(1,`scsc-rich-text-editor`,1),HS(),sD(`ngModelChange`,function(d){return Y_(e.html,d)||(e.html=d),d}),Lf()()),t&2&&(Jb(),Pv(`toolbar`,e.tools),iD(`ngModel`,e.html),zS())},dependencies:[Gue,Hue,zz,Vn,ap],encapsulation:2})};function ge(a,n){if(a&1&&(Ga(0,`scsc-alert`,8),G_(1),Lf()),a&2){let t=y_();Jb(),rD(` `,t.form.controls.outcome.value,` · `,t.form.controls.caseNumber.value,`. The order is queued for the judge's signature. `)}}var B=class a{fb=g(Wue);form=this.fb.nonNullable.group({caseNumber:[`24CV012345`,Fs.required],outcome:[`Granted in part`,Fs.required],narrative:[``,Fs.required]});filed=q$1(!1);submitted=q$1(!1);narrativeError(){let n=this.form.controls.narrative;return n.invalid&&(this.submitted()||n.touched)?`Write the order before saving.`:``}submit(){this.submitted.set(!0),this.form.markAllAsTouched(),this.filed.set(this.form.valid)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-form-demo`]],decls:20,vars:4,consts:[[`novalidate`,``,1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Case number`,`for`,`rte-form-case`,`required`,``],[`scsc-input`,``,`id`,`rte-form-case`,`formControlName`,`caseNumber`],[`label`,`Outcome`,`for`,`rte-form-outcome`,`required`,``],[`scsc-select`,``,`id`,`rte-form-outcome`,`formControlName`,`outcome`],[`label`,`Minute order`,`required`,``,3,`error`],[`formControlName`,`narrative`,`toolbar`,`minimal`,3,`maxLength`],[`status`,`success`,`title`,`Minute order saved`],[`variant`,`primary`,`nativeType`,`submit`]],template:function(t,e){t&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.submit()}),Ga(1,`div`,1)(2,`scsc-form-field`,2)(3,`input`,3),HS(),Lf()(),Ga(4,`scsc-form-field`,4)(5,`select`,5),HS(),Ga(6,`option`),G_(7,`Granted`),Lf(),Ga(8,`option`),G_(9,`Granted in part`),Lf(),Ga(10,`option`),G_(11,`Denied`),Lf(),Ga(12,`option`),G_(13,`Continued`),Lf()()()(),Ga(14,`scsc-form-field`,6)(15,`scsc-rich-text-editor`,7),HS(),Lf()(),JT(16,ge,2,2,`scsc-alert`,8),Ga(17,`div`)(18,`scsc-button`,9),G_(19,`Save minute order`),Lf()()()),t&2&&(Pv(`formGroup`,e.form),Jb(3),zS(),Jb(2),zS(),Jb(9),Pv(`error`,e.narrativeError()),Jb(),Pv(`maxLength`,2e3),zS(),Jb(),t_(e.filed()?16:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,Vz,Xz,za,sn,Vn,qo,ap,On],encapsulation:2})};var q=class a{schema=[{key:`recipient`,type:`text`,label:`Recipient name`},{key:`caseNumber`,type:`text`,label:`Case number`},{key:`hearingDate`,type:`date`,label:`Hearing date`},{key:`department`,type:`select`,label:`Department`,options:[{value:`d7`,label:`Dept. 7`},{value:`d12`,label:`Dept. 12`}]},{key:`parties`,type:`list`,label:`Parties`,fields:[{key:`name`,type:`text`,label:`Name`},{key:`role`,type:`text`,label:`Role`}]}];fields=[{path:`recipient`,label:`Recipient name`},{path:`caseNumber`,label:`Case number`},{path:`hearingDate`,label:`Hearing date`}];html=q$1(`<p>Dear {{recipient}},</p><p>Your hearing in case {{caseNumber}} is set for {{hearingDate}}.</p>`);static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-merge-fields-demo`]],decls:8,vars:4,consts:[[`editor`,``],[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[1,`text-sm`,`font-medium`],[3,`pick`,`schema`],[`ariaLabel`,`Notice of hearing template`,3,`ngModelChange`,`ngModel`,`mergeFields`],[`language`,`html`,3,`code`]],template:function(t,e){if(t&1){let b=d_();Ga(0,`div`,1)(1,`div`,2)(2,`p`,3),G_(3,`Notice of hearing template`),Lf(),Ga(4,`scsc-merge-field-menu`,4),lc(`pick`,function(C){Eg(b);let U=C_(6);return Ig(C.isList?U.insertText(C.insert):U.insertMergeField(C.path,C.label))}),Lf()(),Ga(5,`scsc-rich-text-editor`,5,0),HS(),sD(`ngModelChange`,function(C){return Eg(b),Y_(e.html,C)||(e.html=C),Ig(C)}),Lf(),uc(7,`scsc-code-block`,6),Lf()}t&2&&(Jb(4),Pv(`schema`,e.schema),Jb(),iD(`ngModel`,e.html),Pv(`mergeFields`,e.fields),zS(),Jb(2),Pv(`code`,e.html()))},dependencies:[Gue,Hue,zz,RP,ap,j$1],encapsulation:2})};var z=`<h2>Order after hearing</h2>
<p>The motion to compel further responses is <strong>granted in part</strong>.</p>
<ul><li>Responses due within 20 days.</li><li>Sanctions are denied.</li></ul>`;var H=class a{initial=z;narrative=new Fi(z,{nonNullable:!0,validators:Fs.required});html=Ha(this.narrative.valueChanges,{initialValue:z});savedHtml=q$1(null);error=q$1(``);save(){if(this.narrative.markAsTouched(),this.narrative.invalid){this.error.set(`The order needs a narrative.`);return}this.error.set(``),this.savedHtml.set(this.narrative.value)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-reactive-demo`]],decls:9,vars:3,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[`label`,`Order narrative`,`hint`,`The standard toolbar. The control value is HTML; an emptied editor is an empty string.`,3,`error`],[`placeholder`,`Summarize the ruling`,3,`formControl`],[1,`flex`,`gap-2`],[`variant`,`primary`,3,`click`],[`variant`,`ghost`,3,`click`],[`language`,`html`,3,`code`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-rich-text-editor`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`scsc-button`,4),lc(`click`,function(){return e.save()}),G_(5,`Save order`),Lf(),Ga(6,`scsc-button`,5),lc(`click`,function(){return e.narrative.setValue(e.initial)}),G_(7,`Reset`),Lf()(),uc(8,`scsc-code-block`,6),Lf()),t&2&&(Jb(),Pv(`error`,e.error()),Jb(),Pv(`formControl`,e.narrative),zS(),Jb(6),Pv(`code`,e.savedHtml()??e.html()))},dependencies:[Kue,Hue,Wz,sn,RP,Vn,ap],encapsulation:2})};var fe=`<h2>Tentative ruling</h2><p>The demurrer is <strong>overruled</strong>. Defendant shall answer within 10 days.</p>`;var V=class a{published=new Fi(fe,{nonNullable:!0});draft=new Fi({value:fe,disabled:!0},{nonNullable:!0});locked=q$1(!0);toggle(){this.locked.update(n=>!n),this.locked()?this.draft.disable():this.draft.enable()}static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-readonly-demo`]],decls:10,vars:3,consts:[[1,`grid`,`max-w-4xl`,`gap-6`,`md:grid-cols-2`],[`label`,`Published ruling`,`hint`,`readonly: focusable and selectable, no toolbar`],[`readonly`,``,3,`formControl`],[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`gap-3`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`],[1,`text-sm`,`font-medium`],[`label`,`Draft ruling`,`hint`,`disabled: not editable and skipped by Tab`],[3,`formControl`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-rich-text-editor`,2),HS(),Lf()(),Ga(3,`div`,3)(4,`label`,4)(5,`input`,5),lc(`change`,function(){return e.toggle()}),Lf(),Ga(6,`span`,6),G_(7,`Lock the draft (disable the control)`),Lf()(),Ga(8,`scsc-form-field`,7)(9,`scsc-rich-text-editor`,8),HS(),Lf()()()()),t&2&&(Jb(2),Pv(`formControl`,e.published),zS(),Jb(3),Pv(`checked`,e.locked()),Jb(4),Pv(`formControl`,e.draft),zS())},dependencies:[Kue,Hue,Wz,Vn,ap,Bo],encapsulation:2})};var j=class a{note=q$1(`<p>Left a voicemail for counsel about the <strong>missing exhibit</strong>.</p>`);order=q$1(`<h2 style="text-align: center">Standing order for civil trials</h2><p>Counsel shall meet and confer <u>at least 10 days</u> before the trial readiness conference.</p><table><tbody><tr><th><p>Deadline</p></th><th><p>Filing</p></th></tr><tr><td><p>10 days before</p></td><td><p>Joint witness list</p></td></tr><tr><td><p>5 days before</p></td><td><p>Exhibit binders</p></td></tr></tbody></table>`);static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-rich-text-editor-toolbars-demo`]],decls:5,vars:2,consts:[[1,`flex`,`max-w-3xl`,`flex-col`,`gap-6`],[`label`,`Clerk note`,`hint`,`minimal: bold, italic, lists and links`],[`toolbar`,`minimal`,`minHeight`,`5rem`,3,`ngModelChange`,`ngModel`],[`label`,`Standing order`,`hint`,`full: adds strikethrough, code, alignment, code blocks, a horizontal line and tables`],[`toolbar`,`full`,3,`ngModelChange`,`ngModel`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`scsc-rich-text-editor`,2),HS(),sD(`ngModelChange`,function(d){return Y_(e.note,d)||(e.note=d),d}),Lf()(),Ga(3,`scsc-form-field`,3)(4,`scsc-rich-text-editor`,4),HS(),sD(`ngModelChange`,function(d){return Y_(e.order,d)||(e.order=d),d}),Lf()()()),t&2&&(Jb(2),iD(`ngModel`,e.note),zS(),Jb(2),iD(`ngModel`,e.order),zS())},dependencies:[Gue,Hue,zz,Vn,ap],encapsulation:2})};var w={"rich-text-editor-char-limit":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { ScscRichTextEditor } from '@scscourt/design/editor';

@Component({
  selector: 'app-rich-text-editor-char-limit-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscRichTextEditor],
  template: \`
    <scsc-form-field
      class="block max-w-2xl"
      label="Calendar note"
      hint="Shown on the public calendar. The count is announced as you near the limit."
    >
      <scsc-rich-text-editor
        toolbar="minimal"
        minHeight="5rem"
        [maxLength]="280"
        placeholder="e.g. Appear in person; bring two copies of the lease."
        [(ngModel)]="note"
      />
    </scsc-form-field>
  \`,
})
export class RichTextEditorCharLimitDemo {
  protected readonly note = signal('');
}
`,html:`<scsc-form-field
  class="block max-w-2xl"
  label="Calendar note"
  hint="Shown on the public calendar. The count is announced as you near the limit."
>
  <scsc-rich-text-editor
    toolbar="minimal"
    minHeight="5rem"
    [maxLength]="280"
    placeholder="e.g. Appear in person; bring two copies of the lease."
    [(ngModel)]="note"
  />
</scsc-form-field>
`},"rich-text-editor-custom-tool":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { ScscRichTextEditor, type ScscEditorTool } from '@scscourt/design/editor';

@Component({
  selector: 'app-rich-text-editor-custom-tool-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscRichTextEditor],
  template: \`
    <scsc-form-field
      class="block max-w-2xl"
      label="Minute order"
      hint="Two custom tools after the built-ins: today's date and the judge's signature block."
    >
      <scsc-rich-text-editor [toolbar]="tools" [(ngModel)]="html" />
    </scsc-form-field>
  \`,
})
export class RichTextEditorCustomToolDemo {
  /** Built-in tools, a separator, then tools of your own: each runs a TipTap command chain. */
  protected readonly tools: ScscEditorTool[] = [
    'bold',
    'italic',
    '|',
    'bulletList',
    'orderedList',
    '|',
    {
      id: 'today',
      label: "Insert today's date",
      icon: 'calendar',
      run: (editor) =>
        editor
          .chain()
          .focus()
          .insertContent(new Date().toLocaleDateString('en-US', { dateStyle: 'long' }))
          .run(),
    },
    {
      id: 'signature',
      label: 'Insert signature block',
      icon: 'action.edit',
      run: (editor) =>
        editor
          .chain()
          .focus()
          .insertContent('<p>IT IS SO ORDERED.</p><p>Judge of the Superior Court</p>')
          .run(),
    },
  ];
  protected readonly html = signal(
    '<p>The court, having considered the papers, rules as follows:</p>',
  );
}
`,html:`<scsc-form-field
  class="block max-w-2xl"
  label="Minute order"
  hint="Two custom tools after the built-ins: today's date and the judge's signature block."
>
  <scsc-rich-text-editor [toolbar]="tools" [(ngModel)]="html" />
</scsc-form-field>
`},"rich-text-editor-form":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscInput, ScscSelect } from '@scscourt/design';
import { ScscRichTextEditor } from '@scscourt/design/editor';

@Component({
  selector: 'app-rich-text-editor-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscRichTextEditor,
    ScscSelect,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4" novalidate>
      <div class="grid gap-4 sm:grid-cols-2">
        <scsc-form-field label="Case number" for="rte-form-case" required>
          <input scsc-input id="rte-form-case" formControlName="caseNumber" />
        </scsc-form-field>
        <scsc-form-field label="Outcome" for="rte-form-outcome" required>
          <select scsc-select id="rte-form-outcome" formControlName="outcome">
            <option>Granted</option>
            <option>Granted in part</option>
            <option>Denied</option>
            <option>Continued</option>
          </select>
        </scsc-form-field>
      </div>

      <!-- No for: the label sits directly above the editor, which has no focusable id. -->
      <scsc-form-field label="Minute order" required [error]="narrativeError()">
        <scsc-rich-text-editor formControlName="narrative" toolbar="minimal" [maxLength]="2000" />
      </scsc-form-field>

      @if (filed()) {
        <scsc-alert status="success" title="Minute order saved">
          {{ form.controls.outcome.value }} \xB7 {{ form.controls.caseNumber.value }}. The order is
          queued for the judge's signature.
        </scsc-alert>
      }

      <div>
        <scsc-button variant="primary" nativeType="submit">Save minute order</scsc-button>
      </div>
    </form>
  \`,
})
export class RichTextEditorFormDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    caseNumber: ['24CV012345', Validators.required],
    outcome: ['Granted in part', Validators.required],
    narrative: ['', Validators.required],
  });
  protected readonly filed = signal(false);
  protected readonly submitted = signal(false);

  protected narrativeError(): string {
    const c = this.form.controls.narrative;
    return c.invalid && (this.submitted() || c.touched) ? 'Write the order before saving.' : '';
  }

  protected submit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    this.filed.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4" novalidate>
  <div class="grid gap-4 sm:grid-cols-2">
    <scsc-form-field label="Case number" for="rte-form-case" required>
      <input scsc-input id="rte-form-case" formControlName="caseNumber" />
    </scsc-form-field>
    <scsc-form-field label="Outcome" for="rte-form-outcome" required>
      <select scsc-select id="rte-form-outcome" formControlName="outcome">
        <option>Granted</option>
        <option>Granted in part</option>
        <option>Denied</option>
        <option>Continued</option>
      </select>
    </scsc-form-field>
  </div>

  <!-- No for: the label sits directly above the editor, which has no focusable id. -->
  <scsc-form-field label="Minute order" required [error]="narrativeError()">
    <scsc-rich-text-editor formControlName="narrative" toolbar="minimal" [maxLength]="2000" />
  </scsc-form-field>

  @if (filed()) {
    <scsc-alert status="success" title="Minute order saved">
      {{ form.controls.outcome.value }} \xB7 {{ form.controls.caseNumber.value }}. The order is
      queued for the judge's signature.
    </scsc-alert>
  }

  <div>
    <scsc-button variant="primary" nativeType="submit">Save minute order</scsc-button>
  </div>
</form>
`},"rich-text-editor-merge-fields":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscCodeBlock } from '@scscourt/design';
import { ScscRichTextEditor } from '@scscourt/design/editor';
import { ScscMergeFieldMenu, type ScscFormSchema } from '@scscourt/design/forms';

@Component({
  selector: 'app-rich-text-editor-merge-fields-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscCodeBlock, ScscRichTextEditor, ScscMergeFieldMenu],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <p class="text-sm font-medium">Notice of hearing template</p>
        <scsc-merge-field-menu
          [schema]="schema"
          (pick)="
            $event.isList
              ? editor.insertText($event.insert)
              : editor.insertMergeField($event.path, $event.label)
          "
        />
      </div>

      <scsc-rich-text-editor
        #editor
        [(ngModel)]="html"
        ariaLabel="Notice of hearing template"
        [mergeFields]="fields"
      />

      <scsc-code-block language="html" [code]="html()" />
    </div>
  \`,
})
export class RichTextEditorMergeFieldsDemo {
  /** The fields a generated notice can pull from; a \`list\` field inserts an each-block. */
  protected readonly schema: ScscFormSchema = [
    { key: 'recipient', type: 'text', label: 'Recipient name' },
    { key: 'caseNumber', type: 'text', label: 'Case number' },
    { key: 'hearingDate', type: 'date', label: 'Hearing date' },
    {
      key: 'department',
      type: 'select',
      label: 'Department',
      options: [
        { value: 'd7', label: 'Dept. 7' },
        { value: 'd12', label: 'Dept. 12' },
      ],
    },
    {
      key: 'parties',
      type: 'list',
      label: 'Parties',
      fields: [
        { key: 'name', type: 'text', label: 'Name' },
        { key: 'role', type: 'text', label: 'Role' },
      ],
    },
  ];

  /** Labels for the chips of tokens already in the value (read as "Merge field: Case number"). */
  protected readonly fields = [
    { path: 'recipient', label: 'Recipient name' },
    { path: 'caseNumber', label: 'Case number' },
    { path: 'hearingDate', label: 'Hearing date' },
  ];

  protected readonly html = signal(
    '<p>Dear {{recipient}},</p><p>Your hearing in case {{caseNumber}} is set for {{hearingDate}}.</p>',
  );
}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <div class="flex items-center justify-between gap-3">
    <p class="text-sm font-medium">Notice of hearing template</p>
    <scsc-merge-field-menu
      [schema]="schema"
      (pick)="
        $event.isList
          ? editor.insertText($event.insert)
          : editor.insertMergeField($event.path, $event.label)
      "
    />
  </div>

  <scsc-rich-text-editor
    #editor
    [(ngModel)]="html"
    ariaLabel="Notice of hearing template"
    [mergeFields]="fields"
  />

  <scsc-code-block language="html" [code]="html()" />
</div>
`},"rich-text-editor-reactive":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscCodeBlock, ScscFormField } from '@scscourt/design';
import { ScscRichTextEditor } from '@scscourt/design/editor';

const INITIAL = \`<h2>Order after hearing</h2>
<p>The motion to compel further responses is <strong>granted in part</strong>.</p>
<ul><li>Responses due within 20 days.</li><li>Sanctions are denied.</li></ul>\`;

@Component({
  selector: 'app-rich-text-editor-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscCodeBlock, ScscFormField, ScscRichTextEditor],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <scsc-form-field
        label="Order narrative"
        hint="The standard toolbar. The control value is HTML; an emptied editor is an empty string."
        [error]="error()"
      >
        <scsc-rich-text-editor [formControl]="narrative" placeholder="Summarize the ruling" />
      </scsc-form-field>

      <div class="flex gap-2">
        <scsc-button variant="primary" (click)="save()">Save order</scsc-button>
        <scsc-button variant="ghost" (click)="narrative.setValue(initial)">Reset</scsc-button>
      </div>

      <scsc-code-block language="html" [code]="savedHtml() ?? html()" />
    </div>
  \`,
})
export class RichTextEditorReactiveDemo {
  protected readonly initial = INITIAL;
  protected readonly narrative = new FormControl(INITIAL, {
    nonNullable: true,
    validators: Validators.required,
  });
  /** Mirror the control value into a signal so the OnPush view re-renders on each edit. */
  protected readonly html = toSignal(this.narrative.valueChanges, { initialValue: INITIAL });
  protected readonly savedHtml = signal<string | null>(null);
  protected readonly error = signal('');

  protected save(): void {
    this.narrative.markAsTouched();
    if (this.narrative.invalid) {
      this.error.set('The order needs a narrative.');
      return;
    }
    this.error.set('');
    this.savedHtml.set(this.narrative.value);
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <scsc-form-field
    label="Order narrative"
    hint="The standard toolbar. The control value is HTML; an emptied editor is an empty string."
    [error]="error()"
  >
    <scsc-rich-text-editor [formControl]="narrative" placeholder="Summarize the ruling" />
  </scsc-form-field>

  <div class="flex gap-2">
    <scsc-button variant="primary" (click)="save()">Save order</scsc-button>
    <scsc-button variant="ghost" (click)="narrative.setValue(initial)">Reset</scsc-button>
  </div>

  <scsc-code-block language="html" [code]="savedHtml() ?? html()" />
</div>
`},"rich-text-editor-readonly":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ScscFormField, ScscSwitch } from '@scscourt/design';
import { ScscRichTextEditor } from '@scscourt/design/editor';

const ORDER =
  '<h2>Tentative ruling</h2><p>The demurrer is <strong>overruled</strong>. Defendant shall answer within 10 days.</p>';

@Component({
  selector: 'app-rich-text-editor-readonly-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscFormField, ScscRichTextEditor, ScscSwitch],
  template: \`
    <div class="grid max-w-4xl gap-6 md:grid-cols-2">
      <scsc-form-field
        label="Published ruling"
        hint="readonly: focusable and selectable, no toolbar"
      >
        <scsc-rich-text-editor readonly [formControl]="published" />
      </scsc-form-field>
      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-3">
          <input type="checkbox" scsc-switch [checked]="locked()" (change)="toggle()" />
          <span class="text-sm font-medium">Lock the draft (disable the control)</span>
        </label>
        <scsc-form-field label="Draft ruling" hint="disabled: not editable and skipped by Tab">
          <scsc-rich-text-editor [formControl]="draft" />
        </scsc-form-field>
      </div>
    </div>
  \`,
})
export class RichTextEditorReadonlyDemo {
  protected readonly published = new FormControl(ORDER, { nonNullable: true });
  protected readonly draft = new FormControl(
    { value: ORDER, disabled: true },
    { nonNullable: true },
  );
  protected readonly locked = signal(true);

  protected toggle(): void {
    this.locked.update((v) => !v);
    if (this.locked()) this.draft.disable();
    else this.draft.enable();
  }
}
`,html:`<div class="grid max-w-4xl gap-6 md:grid-cols-2">
  <scsc-form-field
    label="Published ruling"
    hint="readonly: focusable and selectable, no toolbar"
  >
    <scsc-rich-text-editor readonly [formControl]="published" />
  </scsc-form-field>
  <div class="flex flex-col gap-3">
    <label class="flex items-center gap-3">
      <input type="checkbox" scsc-switch [checked]="locked()" (change)="toggle()" />
      <span class="text-sm font-medium">Lock the draft (disable the control)</span>
    </label>
    <scsc-form-field label="Draft ruling" hint="disabled: not editable and skipped by Tab">
      <scsc-rich-text-editor [formControl]="draft" />
    </scsc-form-field>
  </div>
</div>
`},"rich-text-editor-toolbars":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField } from '@scscourt/design';
import { ScscRichTextEditor } from '@scscourt/design/editor';

@Component({
  selector: 'app-rich-text-editor-toolbars-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscRichTextEditor],
  template: \`
    <div class="flex max-w-3xl flex-col gap-6">
      <scsc-form-field label="Clerk note" hint="minimal: bold, italic, lists and links">
        <scsc-rich-text-editor toolbar="minimal" minHeight="5rem" [(ngModel)]="note" />
      </scsc-form-field>
      <scsc-form-field
        label="Standing order"
        hint="full: adds strikethrough, code, alignment, code blocks, a horizontal line and tables"
      >
        <scsc-rich-text-editor toolbar="full" [(ngModel)]="order" />
      </scsc-form-field>
    </div>
  \`,
})
export class RichTextEditorToolbarsDemo {
  protected readonly note = signal(
    '<p>Left a voicemail for counsel about the <strong>missing exhibit</strong>.</p>',
  );
  protected readonly order = signal(
    '<h2 style="text-align: center">Standing order for civil trials</h2>' +
      '<p>Counsel shall meet and confer <u>at least 10 days</u> before the trial readiness conference.</p>' +
      '<table><tbody><tr><th><p>Deadline</p></th><th><p>Filing</p></th></tr>' +
      '<tr><td><p>10 days before</p></td><td><p>Joint witness list</p></td></tr>' +
      '<tr><td><p>5 days before</p></td><td><p>Exhibit binders</p></td></tr></tbody></table>',
  );
}
`,html:`<div class="flex max-w-3xl flex-col gap-6">
  <scsc-form-field label="Clerk note" hint="minimal: bold, italic, lists and links">
    <scsc-rich-text-editor toolbar="minimal" minHeight="5rem" [(ngModel)]="note" />
  </scsc-form-field>
  <scsc-form-field
    label="Standing order"
    hint="full: adds strikethrough, code, alignment, code blocks, a horizontal line and tables"
  >
    <scsc-rich-text-editor toolbar="full" [(ngModel)]="order" />
  </scsc-form-field>
</div>
`}};var Tt={slug:`rich-text-editor`,name:`Rich Text Editor`,classes:[`ScscRichTextEditor`],category:`Specialized`,whenToUse:["Narrative text that needs formatting: orders after hearing, minute notes, standing orders, notice templates. Pick a `toolbar`: `minimal` (bold, italic, lists, link), `standard` (the default: adds text style, underline, indent, quote, undo/redo) or `full` (adds strikethrough, inline code, clear formatting, alignment, code block, horizontal line, table), or list your own tools, including custom ones.","The toolbar is also the schema: a format with no tool has no shortcut, no markdown shortcut, and is dropped when pasted. Undo and redo always work. Headings are levels 2–4 (the page owns the `h1`).",'The value is an HTML string (`format="json"` for TipTap JSON). An emptied editor is `""` (`null` in JSON), so `Validators.required` works. Store the HTML as-is and sanitize where you render it; the `sanitize` input runs your sanitizer (e.g. DOMPurify) on everything written in or pasted.',"Paste from Word, Outlook or Google Docs is cleaned (`pasteCleanup`, on by default): Office styles, classes, spans and comments go; bold, italic, underline, links, lists, tables and alignment stay.",'`maxLength` shows a "used / max" count and refuses edits past it. `readonly` shows the text for reading and copying; `disable()` on the control locks it.',"For document templates use `insertMergeField(path, label)` with `scsc-merge-field-menu`, or the ready-made `scsc-template-editor` (editor, field menu, sample data and a live preview).","Markdown is not a value format yet (it needs `@tiptap/markdown`); convert on the server if you need it. For plain text use `scsc-textarea`: TipTap adds roughly 100 kB to the chunk that imports this entry point."],setup:`// package.json \u2014 optional peers of @scscourt/design, needed only by this entry point
"@tiptap/core": "^3.30.5",
"@tiptap/pm": "^3.30.5",
"@tiptap/starter-kit": "^3.30.5",
"@tiptap/extension-table": "^3.30.5",
"@tiptap/extension-text-align": "^3.30.5"

// import from the secondary entry point, not from '@scscourt/design'
import { ScscRichTextEditor } from '@scscourt/design/editor';

// The toolbar icons are in SCSC_ICONS: provideScscIcons(SCSC_ICONS) in your app config.`,demos:[{id:`rich-text-editor-reactive`,title:`Standard toolbar, reactive forms`,description:"`[formControl]` with `Validators.required` and a `placeholder`; the live HTML value is mirrored below.",component:H,source:w[`rich-text-editor-reactive`],a11y:`skip`},{id:`rich-text-editor-toolbars`,title:`Minimal and full toolbars`,description:'`toolbar="minimal"` for short notes; `toolbar="full"` adds alignment, tables (the table menu inserts a 3 × 3 table and adds or removes rows and columns) and more. Narrow the window: secondary tools move into **More**.',component:j,source:w[`rich-text-editor-toolbars`],a11y:`skip`},{id:`rich-text-editor-custom-tool`,title:`Custom tools`,description:"A toolbar list mixes built-in ids, `|` separators and `{ id, label, icon, run(editor), isActive? }` tools.",component:P,source:w[`rich-text-editor-custom-tool`],a11y:`skip`},{id:`rich-text-editor-readonly`,title:`Read-only and disabled`,description:"`readonly` keeps the text focusable and selectable and hides the toolbar; a disabled control is locked and left out of the Tab order.",component:V,source:w[`rich-text-editor-readonly`],a11y:`skip`},{id:`rich-text-editor-char-limit`,title:`Character limit`,description:'`[maxLength]="280"`: a "used / max" count under the text, read with the editor, and a polite announcement near the limit.',component:A,source:w[`rich-text-editor-char-limit`],a11y:`skip`},{id:`rich-text-editor-form`,title:`In a form with validation`,description:"One `formControlName` among ordinary fields, with `Validators.required` and the error shown by `scsc-form-field`.",component:B,source:w[`rich-text-editor-form`],a11y:`skip`},{id:`rich-text-editor-merge-fields`,title:`Merge fields`,description:"`scsc-merge-field-menu` `(pick)` → `insertMergeField(path, label)` inserts a chip; the value stores it as a plain `{{path}}`. A list field inserts an each-block as text.",component:q,source:w[`rich-text-editor-merge-fields`],a11y:`skip`}],a11y:["The toolbar is a WAI-ARIA `toolbar`: one Tab stop, arrow keys between tools. Every tool is a labelled button; toggles report `aria-pressed`, synced on every transaction (so Ctrl/⌘+B before typing shows as pressed), and tooltips show each shortcut (also exposed as `aria-keyshortcuts`). Buttons have 44 px targets in comfortable density.",`**Tab never indents** (WCAG 2.1.2 No Keyboard Trap): Tab and Shift+Tab always leave the text, in lists and tables too. Indent list items with Ctrl/⌘ + ] and [ or the toolbar.`,"The editing area is a multi-line `textbox` with the theme focus ring. Inside `scsc-form-field` it is labelled by the field label and described by its hint, error and character count, and it reports required and invalid; standalone, name it with `ariaLabel`.",'Merge fields are non-editable chips read as "Merge field: Case number". The link editor validates the address (https, http or mailto) and web links get `rel="noopener noreferrer"` and open in a new tab.',`Keep heading use meaningful (levels 2–4, in order) so the generated document is navigable when rendered.`],aria:['Editing area: `role="textbox"`, `aria-multiline`, `aria-labelledby` (field label) or `aria-label`, `aria-describedby`, `aria-required`, `aria-invalid`, `aria-placeholder`; `aria-readonly` with `tabindex="0"` when `readonly`, `aria-disabled` when disabled.','Toolbar: `role="toolbar"`, `aria-label` ("Formatting"), `aria-controls` the editing area; separators are `role="separator"`. The link button has `aria-expanded`; the link editor is a labelled group.',"Text style, Table and More are `scsc-menu` menu buttons (radio items for the text style, a checkbox item for the header row)."],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves between the toolbar (one stop) and the text, and on out of the editor. Never indents, in lists and tables too.`},{keys:`ArrowLeft / ArrowRight, Home / End`,action:`In the toolbar: previous / next tool (wrapping), first / last tool.`},{keys:`Enter / Space`,action:"On a tool: applies it and returns focus to the text. On **Text style**, **Table** or **More**: opens its menu (ArrowDown too); menu keys are those of `scsc-menu`."},{keys:`Ctrl + B / Ctrl + I / Ctrl + U`,action:`Bold / italic / underline (⌘ instead of Ctrl on macOS, in every shortcut here). Each shortcut works only when its tool is in the toolbar.`},{keys:`Ctrl + Shift + S / Ctrl + E`,action:`Strikethrough / inline code.`},{keys:`Ctrl + Alt + 0 / 2 / 3 / 4`,action:`Paragraph / heading level 2, 3 or 4 (the Text style tool).`},{keys:`Ctrl + Shift + 8 / Ctrl + Shift + 7`,action:`Bullet list / numbered list.`},{keys:`Ctrl + ] / Ctrl + [`,action:`Indent / outdent the list item.`},{keys:`Ctrl + Shift + B / Ctrl + Alt + C`,action:`Quote / code block.`},{keys:`Ctrl + Shift + L / E / R`,action:`Align left / center / right.`},{keys:`Ctrl + K`,action:`Edit the link at the cursor or on the selection. In the link editor, Enter applies and Escape cancels; both return to the text.`},{keys:`Ctrl + \\`,action:`Clear formatting (marks and block styles).`},{keys:`Ctrl + Z / Ctrl + Shift + Z`,action:`Undo / redo (Ctrl + Y also redoes). Always on.`},{keys:`Enter / Shift + Enter`,action:`New paragraph or list item (on an empty list item, leaves the list) / line break within the paragraph.`},{keys:`Arrow keys`,action:`In a table: move between cells.`},{keys:`Markdown shortcuts`,action:"At the start of a paragraph: `## ` to `#### ` heading, `- ` bullet list, `1. ` numbered list, `> ` quote, ` ``` ` code block, `---` horizontal line. Inline: `**bold**`, `*italic*`, `~~strike~~`, `` `code` ``; `{{path}}` becomes a merge-field chip. Each only with its tool."}],appMustProvide:["A label: put it in `scsc-form-field`, or set `ariaLabel` when the editor stands alone.",`Guidance for authors so published content stays accessible: headings in order and link text that makes sense out of context.`],related:[`template-editor`,`textarea`,`forms-schema`,`prose`]};export{Tt as RICH_TEXT_EDITOR_DOCS};