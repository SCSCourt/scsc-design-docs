import{Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Lo as d_,Ma as JT,Na as Jb,No as cc,Qr as pN,Ss as rD,Xa as Pv,Y as Fs,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,l as $ue,mi as sr,mn as Uue,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var Q=(i,t)=>t.name;function Z(i,t){if(i&1){let e=d_();Ga(0,`li`)(1,`scsc-tag`,4),lc(`removed`,function(){let r=Eg(e).$implicit,p=y_(2);return Ig(p.remove(r))}),G_(2),Lf()()}if(i&2){let e=t.$implicit,o=y_(2);Jb(),Pv(`removable`,!0)(`label`,e.name),Jb(),rD(``,e.name,` (`,o.size(e),`)`)}}function ee(i,t){if(i&1&&(Ga(0,`ul`,2),o_(1,Z,3,4,`li`,null,Q),Lf()),i&2){let e=y_();Jb(),i_(e.files())}}function te(i,t){i&1&&(Ga(0,`p`,3),G_(1,`No exhibits selected yet.`),Lf())}var T=class i{files=q([]);add(t){this.files.update(e=>{let o=new Set(e.map(r=>r.name));return[...e,...t.filter(r=>!o.has(r.name))]})}remove(t){this.files.update(e=>e.filter(o=>o!==t))}size(t){return t.size<1048576?`${Math.max(1,Math.round(t.size/1024))} KB`:`${(t.size/1024/1024).toFixed(1)} MB`}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-file-upload-basic-demo`]],decls:4,vars:1,consts:[[1,`max-w-md`],[`label`,`Drop exhibits here or click to browse`,`hint`,`PDF, DOCX or images up to 10 MB each`,`accept`,`.pdf,.docx,image/*`,3,`filesSelected`],[`aria-label`,`Selected files`,1,`mt-3`,`flex`,`flex-wrap`,`gap-2`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[3,`removed`,`removable`,`label`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-file-upload`,1),lc(`filesSelected`,function(p){return o.add(p)}),Lf(),JT(2,ee,3,0,`ul`,2)(3,te,2,0,`p`,3),Lf()),e&2&&(Jb(2),t_(o.files().length?2:3))},dependencies:[pN,sr],encapsulation:2})};var ie=(i,t)=>t.name;function oe(i,t){if(i&1){let e=d_();Ga(0,`li`)(1,`scsc-tag`,12),lc(`removed`,function(){let r=Eg(e).$implicit,p=y_(2);return Ig(p.remove(r))}),G_(2),Lf()()}if(i&2){let e=t.$implicit;Jb(),Pv(`removable`,!0)(`label`,e.name),Jb(),$f(` `,e.name,` `)}}function ae(i,t){if(i&1&&(Ga(0,`ul`,8),o_(1,oe,3,3,`li`,null,ie),Lf()),i&2){let e=y_();Jb(),i_(e.form.controls.attachments.value)}}function le(i,t){if(i&1&&(Ga(0,`scsc-alert`,9),G_(1),Lf()),i&2){let e=y_();Jb(),nD(e.filesError())}}function ne(i,t){if(i&1&&(Ga(0,`scsc-alert`,11),G_(1),Lf()),i&2){let e=y_();Jb(),nD(e.attached())}}var re=10485760;function se(i){let t=i.value??[];return t.length?t.some(e=>!e.name.toLowerCase().endsWith(`.pdf`))?{type:!0}:t.some(e=>e.size>re)?{size:!0}:null:{required:!0}}var U=class i{fb=g(Wue);attached=q(``);form=this.fb.nonNullable.group({documentType:[``,Fs.required],attachments:this.fb.nonNullable.control([],se)});labels={declaration:`a declaration`,exhibit:`an exhibit`,pos:`a proof of service`};add(t){let e=this.form.controls.attachments.value,o=new Set(e.map(r=>r.name));this.setFiles([...e,...t.filter(r=>!o.has(r.name))])}remove(t){this.setFiles(this.form.controls.attachments.value.filter(e=>e!==t))}setFiles(t){let e=this.form.controls.attachments;e.setValue(t),e.markAsTouched()}typeError(){let t=this.form.controls.documentType;return t.invalid&&t.touched?`Choose what kind of document this is.`:``}filesError(){let t=this.form.controls.attachments;return t.invalid&&t.touched?t.hasError(`required`)?`Attach at least one PDF.`:t.hasError(`type`)?`Only PDF files can be filed. Remove the other files.`:`One file is larger than 10 MB. Reduce the scan resolution and try again.`:``}submit(){this.form.markAllAsTouched(),this.attached.set(this.form.valid?this.form.controls.attachments.value.length+` file(s) attached as `+this.labels[this.form.controls.documentType.value]+`.`:``)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-file-upload-reactive-demo`]],decls:18,vars:7,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Document type`,`for`,`file-upload-reactive-type`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`file-upload-reactive-type`,`formControlName`,`documentType`,3,`invalid`],[`value`,``,`disabled`,``],[`value`,`declaration`],[`value`,`exhibit`],[`value`,`pos`],[`label`,`Drop PDFs here or click to browse`,`hint`,`PDF only, up to 10 MB each`,`accept`,`.pdf,application/pdf`,3,`filesSelected`],[`aria-label`,`Attached files`,1,`flex`,`flex-wrap`,`gap-2`],[`status`,`error`,`title`,`Check the attachments`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Attached`],[3,`removed`,`removable`,`label`]],template:function(e,o){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return o.submit()}),Ga(1,`scsc-form-field`,1)(2,`select`,2),HS(),Ga(3,`option`,3),G_(4,`Select a document type…`),Lf(),Ga(5,`option`,4),G_(6,`Declaration`),Lf(),Ga(7,`option`,5),G_(8,`Exhibit`),Lf(),Ga(9,`option`,6),G_(10,`Proof of service`),Lf()()(),Ga(11,`scsc-file-upload`,7),lc(`filesSelected`,function(p){return o.add(p)}),Lf(),JT(12,ae,3,0,`ul`,8),JT(13,le,2,1,`scsc-alert`,9),Ga(14,`div`)(15,`scsc-button`,10),G_(16,`Attach to 24CV012345`),Lf()(),JT(17,ne,2,1,`scsc-alert`,11),Lf()),e&2&&(Pv(`formGroup`,o.form),Jb(),Pv(`error`,o.typeError()),Jb(),Pv(`invalid`,!!o.typeError()),cc(`aria-invalid`,!!o.typeError()),zS(),Jb(10),t_(o.form.controls.attachments.value.length?12:-1),Jb(),t_(o.filesError()?13:-1),Jb(4),t_(o.attached()?17:-1))},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,Vz,Xz,za,sn,pN,Vn,On,sr],encapsulation:2})};function ce(i,t){if(i&1){let e=d_();Ga(0,`scsc-file-upload`,3),lc(`filesSelected`,function(r){Eg(e);let p=y_();return Ig(p.pick(r))}),Lf()}i&2&&Pv(`multiple`,!1)}function de(i,t){if(i&1){let e=d_();Ga(0,`scsc-alert`,4),G_(1),Lf(),Ga(2,`div`)(3,`scsc-button`,5),lc(`click`,function(){Eg(e);let r=y_();return Ig(r.file.set(null))}),G_(4,`Choose a different file`),Lf()()}if(i&2){let e=y_();Jb(),$f(` `,e.file().name,` will be attached to 24CV012345. `)}}function pe(i,t){if(i&1&&(Ga(0,`scsc-alert`,2),G_(1),Lf()),i&2){let e=y_();Jb(),nD(e.error())}}var me=10485760;var k=class i{file=q(null);error=q(``);pick(t){let e=t[0];if(e){if(e.type!==`application/pdf`&&!e.name.toLowerCase().endsWith(`.pdf`)){this.error.set(`Only PDF files are accepted for proof of service.`);return}if(e.size>me){this.error.set(`That file is larger than 10 MB. Reduce the scan resolution and try again.`);return}this.error.set(``),this.file.set(e)}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-file-upload-single-demo`]],decls:4,vars:2,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`label`,`Upload the signed proof of service`,`hint`,`One PDF, up to 10 MB`,`accept`,`.pdf,application/pdf`,3,`multiple`],[`status`,`error`,`title`,`File not accepted`],[`label`,`Upload the signed proof of service`,`hint`,`One PDF, up to 10 MB`,`accept`,`.pdf,application/pdf`,3,`filesSelected`,`multiple`],[`status`,`success`,`title`,`Ready to file`],[`variant`,`ghost`,`size`,`sm`,3,`click`]],template:function(e,o){e&1&&(Ga(0,`div`,0),JT(1,ce,1,1,`scsc-file-upload`,1)(2,de,5,1),JT(3,pe,2,1,`scsc-alert`,2),Lf()),e&2&&(Jb(),t_(o.file()?2:1),Jb(2),t_(o.error()?3:-1))},dependencies:[za,sn,pN],encapsulation:2})};var B={"file-upload-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscFileUpload, ScscTag } from '@scscourt/design';

@Component({
  selector: 'app-file-upload-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFileUpload, ScscTag],
  template: \`
    <div class="max-w-md">
      <scsc-file-upload
        label="Drop exhibits here or click to browse"
        hint="PDF, DOCX or images up to 10 MB each"
        accept=".pdf,.docx,image/*"
        (filesSelected)="add($event)"
      />
      @if (files().length) {
        <ul class="mt-3 flex flex-wrap gap-2" aria-label="Selected files">
          @for (f of files(); track f.name) {
            <li>
              <scsc-tag [removable]="true" [label]="f.name" (removed)="remove(f)"
                >{{ f.name }} ({{ size(f) }})</scsc-tag
              >
            </li>
          }
        </ul>
      } @else {
        <p class="mt-3 text-sm text-base-content/70">No exhibits selected yet.</p>
      }
    </div>
  \`,
})
export class FileUploadBasicDemo {
  protected readonly files = signal<File[]>([]);

  protected add(picked: File[]): void {
    this.files.update((list) => {
      const names = new Set(list.map((f) => f.name));
      return [...list, ...picked.filter((f) => !names.has(f.name))];
    });
  }

  protected remove(file: File): void {
    this.files.update((list) => list.filter((f) => f !== file));
  }

  protected size(file: File): string {
    return file.size < 1024 * 1024
      ? \`\${Math.max(1, Math.round(file.size / 1024))} KB\`
      : \`\${(file.size / 1024 / 1024).toFixed(1)} MB\`;
  }
}
`,html:`<div class="max-w-md">
  <scsc-file-upload
    label="Drop exhibits here or click to browse"
    hint="PDF, DOCX or images up to 10 MB each"
    accept=".pdf,.docx,image/*"
    (filesSelected)="add($event)"
  />
  @if (files().length) {
    <ul class="mt-3 flex flex-wrap gap-2" aria-label="Selected files">
      @for (f of files(); track f.name) {
        <li>
          <scsc-tag [removable]="true" [label]="f.name" (removed)="remove(f)"
            >{{ f.name }} ({{ size(f) }})</scsc-tag
          >
        </li>
      }
    </ul>
  } @else {
    <p class="mt-3 text-sm text-base-content/70">No exhibits selected yet.</p>
  }
</div>
`},"file-upload-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  ScscFileUpload,
  ScscFormField,
  ScscSelect,
  ScscTag,
} from '@scscourt/design';

const MAX_BYTES = 10 * 1024 * 1024;

/** Every file must be a PDF of 10 MB or less, and there must be at least one. */
function pdfAttachments(control: AbstractControl<File[]>): ValidationErrors | null {
  const files = control.value ?? [];
  if (!files.length) return { required: true };
  if (files.some((f) => !f.name.toLowerCase().endsWith('.pdf'))) return { type: true };
  if (files.some((f) => f.size > MAX_BYTES)) return { size: true };
  return null;
}

@Component({
  selector: 'app-file-upload-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscButton,
    ScscFileUpload,
    ScscFormField,
    ScscSelect,
    ScscTag,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field
        label="Document type"
        for="file-upload-reactive-type"
        required
        [error]="typeError()"
      >
        <select
          scsc-select
          id="file-upload-reactive-type"
          formControlName="documentType"
          [invalid]="!!typeError()"
          [attr.aria-invalid]="!!typeError()"
        >
          <option value="" disabled>Select a document type\u2026</option>
          <option value="declaration">Declaration</option>
          <option value="exhibit">Exhibit</option>
          <option value="pos">Proof of service</option>
        </select>
      </scsc-form-field>

      <!-- Not a form control: push picks into a FormControl<File[]> and validate that. -->
      <scsc-file-upload
        label="Drop PDFs here or click to browse"
        hint="PDF only, up to 10 MB each"
        accept=".pdf,application/pdf"
        (filesSelected)="add($event)"
      />
      @if (form.controls.attachments.value.length) {
        <ul class="flex flex-wrap gap-2" aria-label="Attached files">
          @for (f of form.controls.attachments.value; track f.name) {
            <li>
              <scsc-tag [removable]="true" [label]="f.name" (removed)="remove(f)">
                {{ f.name }}
              </scsc-tag>
            </li>
          }
        </ul>
      }
      @if (filesError()) {
        <scsc-alert status="error" title="Check the attachments">{{ filesError() }}</scsc-alert>
      }

      <div>
        <scsc-button variant="primary" nativeType="submit">Attach to 24CV012345</scsc-button>
      </div>

      @if (attached()) {
        <scsc-alert status="success" title="Attached">{{ attached() }}</scsc-alert>
      }
    </form>
  \`,
})
export class FileUploadReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly attached = signal('');

  protected readonly form = this.fb.nonNullable.group({
    documentType: ['', Validators.required],
    attachments: this.fb.nonNullable.control<File[]>([], pdfAttachments),
  });

  private readonly labels: Record<string, string> = {
    declaration: 'a declaration',
    exhibit: 'an exhibit',
    pos: 'a proof of service',
  };

  protected add(picked: File[]): void {
    const current = this.form.controls.attachments.value;
    const names = new Set(current.map((f) => f.name));
    this.setFiles([...current, ...picked.filter((f) => !names.has(f.name))]);
  }

  protected remove(file: File): void {
    this.setFiles(this.form.controls.attachments.value.filter((f) => f !== file));
  }

  private setFiles(next: File[]): void {
    const c = this.form.controls.attachments;
    c.setValue(next);
    c.markAsTouched();
  }

  protected typeError(): string {
    const c = this.form.controls.documentType;
    return c.invalid && c.touched ? 'Choose what kind of document this is.' : '';
  }

  protected filesError(): string {
    const c = this.form.controls.attachments;
    if (!(c.invalid && c.touched)) return '';
    if (c.hasError('required')) return 'Attach at least one PDF.';
    if (c.hasError('type')) return 'Only PDF files can be filed. Remove the other files.';
    return 'One file is larger than 10 MB. Reduce the scan resolution and try again.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.attached.set(
      this.form.valid
        ? this.form.controls.attachments.value.length +
            ' file(s) attached as ' +
            this.labels[this.form.controls.documentType.value] +
            '.'
        : '',
    );
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field
    label="Document type"
    for="file-upload-reactive-type"
    required
    [error]="typeError()"
  >
    <select
      scsc-select
      id="file-upload-reactive-type"
      formControlName="documentType"
      [invalid]="!!typeError()"
      [attr.aria-invalid]="!!typeError()"
    >
      <option value="" disabled>Select a document type\u2026</option>
      <option value="declaration">Declaration</option>
      <option value="exhibit">Exhibit</option>
      <option value="pos">Proof of service</option>
    </select>
  </scsc-form-field>

  <!-- Not a form control: push picks into a FormControl<File[]> and validate that. -->
  <scsc-file-upload
    label="Drop PDFs here or click to browse"
    hint="PDF only, up to 10 MB each"
    accept=".pdf,application/pdf"
    (filesSelected)="add($event)"
  />
  @if (form.controls.attachments.value.length) {
    <ul class="flex flex-wrap gap-2" aria-label="Attached files">
      @for (f of form.controls.attachments.value; track f.name) {
        <li>
          <scsc-tag [removable]="true" [label]="f.name" (removed)="remove(f)">
            {{ f.name }}
          </scsc-tag>
        </li>
      }
    </ul>
  }
  @if (filesError()) {
    <scsc-alert status="error" title="Check the attachments">{{ filesError() }}</scsc-alert>
  }

  <div>
    <scsc-button variant="primary" nativeType="submit">Attach to 24CV012345</scsc-button>
  </div>

  @if (attached()) {
    <scsc-alert status="success" title="Attached">{{ attached() }}</scsc-alert>
  }
</form>
`},"file-upload-single":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscAlert, ScscButton, ScscFileUpload } from '@scscourt/design';

const MAX_BYTES = 10 * 1024 * 1024;

@Component({
  selector: 'app-file-upload-single-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscFileUpload],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      @if (!file()) {
        <scsc-file-upload
          label="Upload the signed proof of service"
          hint="One PDF, up to 10 MB"
          accept=".pdf,application/pdf"
          [multiple]="false"
          (filesSelected)="pick($event)"
        />
      } @else {
        <scsc-alert status="success" title="Ready to file">
          {{ file()!.name }} will be attached to 24CV012345.
        </scsc-alert>
        <div>
          <scsc-button variant="ghost" size="sm" (click)="file.set(null)"
            >Choose a different file</scsc-button
          >
        </div>
      }
      @if (error()) {
        <scsc-alert status="error" title="File not accepted">{{ error() }}</scsc-alert>
      }
    </div>
  \`,
})
export class FileUploadSingleDemo {
  protected readonly file = signal<File | null>(null);
  protected readonly error = signal('');

  /** Validate here: the component only collects files. */
  protected pick(files: File[]): void {
    const f = files[0];
    if (!f) return;
    if (f.type !== 'application/pdf' && !f.name.toLowerCase().endsWith('.pdf')) {
      this.error.set('Only PDF files are accepted for proof of service.');
      return;
    }
    if (f.size > MAX_BYTES) {
      this.error.set('That file is larger than 10 MB. Reduce the scan resolution and try again.');
      return;
    }
    this.error.set('');
    this.file.set(f);
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  @if (!file()) {
    <scsc-file-upload
      label="Upload the signed proof of service"
      hint="One PDF, up to 10 MB"
      accept=".pdf,application/pdf"
      [multiple]="false"
      (filesSelected)="pick($event)"
    />
  } @else {
    <scsc-alert status="success" title="Ready to file">
      {{ file()!.name }} will be attached to 24CV012345.
    </scsc-alert>
    <div>
      <scsc-button variant="ghost" size="sm" (click)="file.set(null)"
        >Choose a different file</scsc-button
      >
    </div>
  }
  @if (error()) {
    <scsc-alert status="error" title="File not accepted">{{ error() }}</scsc-alert>
  }
</div>
`}};var Ve={slug:`file-upload`,name:`File Upload`,classes:[`ScscFileUpload`],category:`Forms`,whenToUse:[`Attaching documents to a filing or a case: exhibits, proofs of service, scanned forms. Users can drag files onto the zone or click it to open the picker.`,"It only collects files and emits `filesSelected`; keep them in a signal or a `FormControl<File[]>`, validate type and size yourself, and do the upload in your service. It is not a `ControlValueAccessor`.","`accept` filters the OS picker but not drag-and-drop, so always re-check the type in your handler or validator.",'Set `[multiple]="false"` for one-document flows and swap the zone for a confirmation once a file is chosen.'],demos:[{id:`file-upload-basic`,title:`Multiple files`,description:`Selected files listed as removable tags; picks are de-duplicated by name.`,component:T,source:B[`file-upload-basic`]},{id:`file-upload-single`,title:`Single PDF with validation`,description:'`[multiple]="false"`; the handler enforces type and size and reports with `scsc-alert`.',component:k,source:B[`file-upload-single`]},{id:`file-upload-reactive`,title:`With Reactive Forms`,description:"Picks go into a `FormControl<File[]>` whose validator requires at least one PDF under 10 MB; the error shows beside the zone.",component:U,source:B[`file-upload-reactive`]}],a11y:["The dropzone is a `<label>` around the file `<input>`, so the visible `label` and `hint` text form the input's accessible name.",`The file input is visually hidden but stays in the tab order: Tab puts the focus ring on the drop zone and Space or Enter opens the picker.`,`Drag-and-drop is a mouse-only enhancement; the click-to-browse path must always work.`,"Report validation failures in a `scsc-alert` (announced) next to the zone, and list accepted files where screen-reader users can review and remove them."],keyboard:[{keys:`Tab`,action:`One stop, on the hidden file input; the focus ring is drawn around the drop zone.`},{keys:`Enter / Space`,action:"Opens the system file picker; `filesSelected` emits the files chosen there."}],appMustProvide:["A `hint` that states the accepted file types and size limit.","Validation errors in an `scsc-alert` next to the zone, and a list of the chosen files that users can review and remove."],related:[`viewer`,`tag`,`alert`,`form-field`]};export{Ve as FILE_UPLOAD_DOCS};