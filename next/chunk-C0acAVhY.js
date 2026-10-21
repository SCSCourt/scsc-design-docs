import{Ai as vA,Dn as Wue,E as Bue,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Nr as jo,Vr as mN,Xa as Pv,Y as Fs,Zi as za,Zn as bA,_i as tN,bn as Vz,cs as lc,ii as qo,ks as t_,l as $ue,lr as ez,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,u as $z,va as G_,vn as Vn,vt as Kue,w as Bo,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function H(m,n){if(m&1&&(Ga(0,`scsc-alert`,24),G_(1),Lf()),m&2){let r=y_();Jb(),$f(` Case `,r.form.value.caseNumber,` was queued for clerk review. `)}}var oe=[{id:`case-intake`,title:`Case intake`,description:"Reactive form with `required`, `pattern` and `requiredTrue` validators.",component:class m{fb=g(Wue);submitted=q(!1);form=this.fb.group({caseNumber:[``,[Fs.required,Fs.pattern(/^\d{2}[A-Z]{2}\d{6}$/)]],caseType:[``,Fs.required],notes:[``],priority:[`standard`],eNotify:[!0],certify:[!1,Fs.requiredTrue]});invalid(n){let r=this.form.get(n);return!!r&&r.invalid&&(r.dirty||r.touched)}errorFor(n){let r=this.form.get(n);return!r||!this.invalid(n)?``:r.hasError(`required`)?`This field is required.`:r.hasError(`pattern`)?`Use the format 24CV012345.`:`Invalid value.`}submit(){this.form.valid&&this.submitted.set(!0)}reset(){this.form.reset({priority:`standard`,eNotify:!0,certify:!1}),this.submitted.set(!1)}static ɵfac=function(r){return new(r||m)};static ɵcmp=Af({type:m,selectors:[[`app-case-intake-demo`]],decls:43,vars:6,consts:[[`title`,`Case intake`,1,`max-w-2xl`],[1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Case number`,`hint`,`Format: 24CV012345`,`for`,`caseNumber`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`caseNumber`,`formControlName`,`caseNumber`,`placeholder`,`24CV012345`,3,`invalid`],[`label`,`Case type`,`for`,`caseType`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`caseType`,`formControlName`,`caseType`],[`value`,``,`disabled`,``],[`value`,`civil`],[`value`,`family`],[`value`,`probate`],[`value`,`criminal`],[`label`,`Notes`,`hint`,`Optional summary for the clerk`,`for`,`notes`],[`scsc-textarea`,``,`id`,`notes`,`rows`,`3`,`formControlName`,`notes`],[1,`flex`,`flex-col`,`gap-2`],[1,`text-sm`,`font-medium`],[1,`flex`,`items-center`,`gap-2`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`priority`,`value`,`standard`],[`type`,`radio`,`scsc-radio`,``,`formControlName`,`priority`,`value`,`expedited`],[1,`flex`,`items-center`,`gap-3`],[`type`,`checkbox`,`scsc-switch`,``,`formControlName`,`eNotify`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`certify`],[1,`flex`,`gap-3`,`pt-2`],[`variant`,`primary`,`nativeType`,`submit`,3,`disabled`],[`variant`,`ghost`,`nativeType`,`reset`,3,`click`],[`status`,`success`,`title`,`Intake submitted`]],template:function(r,o){r&1&&(Ga(0,`scsc-card`,0)(1,`form`,1),lc(`ngSubmit`,function(){return o.submit()}),Ga(2,`scsc-form-field`,2)(3,`input`,3),HS(),Lf()(),Ga(4,`scsc-form-field`,4)(5,`select`,5),HS(),Ga(6,`option`,6),G_(7,`Select a type…`),Lf(),Ga(8,`option`,7),G_(9,`Civil`),Lf(),Ga(10,`option`,8),G_(11,`Family`),Lf(),Ga(12,`option`,9),G_(13,`Probate`),Lf(),Ga(14,`option`,10),G_(15,`Criminal`),Lf()()(),Ga(16,`scsc-form-field`,11)(17,`textarea`,12),HS(),Lf()(),Ga(18,`fieldset`,13)(19,`legend`,14),G_(20,`Priority`),Lf(),Ga(21,`label`,15)(22,`input`,16),HS(),Lf(),Ga(23,`span`),G_(24,`Standard`),Lf()(),Ga(25,`label`,15)(26,`input`,17),HS(),Lf(),Ga(27,`span`),G_(28,`Expedited`),Lf()()(),Ga(29,`label`,18)(30,`input`,19),HS(),Lf(),Ga(31,`span`),G_(32,`Send electronic notifications`),Lf()(),Ga(33,`label`,15)(34,`input`,20),HS(),Lf(),Ga(35,`span`),G_(36,`I certify the information is accurate`),Lf()(),Ga(37,`div`,21)(38,`scsc-button`,22),G_(39,`Submit`),Lf(),Ga(40,`scsc-button`,23),lc(`click`,function(){return o.reset()}),G_(41,`Clear`),Lf()(),JT(42,H,2,1,`scsc-alert`,24),Lf()()),r&2&&(Jb(),Pv(`formGroup`,o.form),Jb(),Pv(`error`,o.errorFor(`caseNumber`)),Jb(),Pv(`invalid`,o.invalid(`caseNumber`)),zS(),Jb(),Pv(`error`,o.errorFor(`caseType`)),Jb(),zS(),Jb(12),zS(),Jb(5),zS(),Jb(4),zS(),Jb(4),zS(),Jb(4),zS(),Jb(4),Pv(`disabled`,o.form.invalid),Jb(4),t_(o.submitted()?42:-1))},dependencies:[Kue,Bue,$ue,Uue,IA,ez,tN,$z,Hue,que,Vz,Xz,mN,Vn,qo,vA,On,jo,bA,Bo,sn,za],encapsulation:2})},source:{"case-intake":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscButton,
  ScscCard,
  ScscCheckbox,
  ScscFormField,
  ScscInput,
  ScscRadio,
  ScscSelect,
  ScscSwitch,
  ScscTextarea,
} from '@scscourt/design';

@Component({
  selector: 'app-case-intake-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscCard,
    ScscFormField,
    ScscInput,
    ScscTextarea,
    ScscSelect,
    ScscCheckbox,
    ScscRadio,
    ScscSwitch,
    ScscButton,
    ScscAlert,
  ],
  template: \`
    <scsc-card title="Case intake" class="max-w-2xl">
      <form [formGroup]="form" (ngSubmit)="submit()" class="flex flex-col gap-4">
        <scsc-form-field
          label="Case number"
          hint="Format: 24CV012345"
          for="caseNumber"
          required
          [error]="errorFor('caseNumber')"
        >
          <input
            scsc-input
            id="caseNumber"
            formControlName="caseNumber"
            [invalid]="invalid('caseNumber')"
            placeholder="24CV012345"
          />
        </scsc-form-field>

        <scsc-form-field label="Case type" for="caseType" required [error]="errorFor('caseType')">
          <select scsc-select id="caseType" formControlName="caseType">
            <option value="" disabled>Select a type\u2026</option>
            <option value="civil">Civil</option>
            <option value="family">Family</option>
            <option value="probate">Probate</option>
            <option value="criminal">Criminal</option>
          </select>
        </scsc-form-field>

        <scsc-form-field label="Notes" hint="Optional summary for the clerk" for="notes">
          <textarea scsc-textarea id="notes" rows="3" formControlName="notes"></textarea>
        </scsc-form-field>

        <fieldset class="flex flex-col gap-2">
          <legend class="text-sm font-medium">Priority</legend>
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="priority" value="standard" />
            <span>Standard</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" scsc-radio formControlName="priority" value="expedited" />
            <span>Expedited</span>
          </label>
        </fieldset>

        <label class="flex items-center gap-3">
          <input type="checkbox" scsc-switch formControlName="eNotify" />
          <span>Send electronic notifications</span>
        </label>

        <label class="flex items-center gap-2">
          <input type="checkbox" scsc-checkbox formControlName="certify" />
          <span>I certify the information is accurate</span>
        </label>

        <div class="flex gap-3 pt-2">
          <scsc-button variant="primary" nativeType="submit" [disabled]="form.invalid"
            >Submit</scsc-button
          >
          <scsc-button variant="ghost" nativeType="reset" (click)="reset()">Clear</scsc-button>
        </div>

        @if (submitted()) {
          <scsc-alert status="success" title="Intake submitted">
            Case {{ form.value.caseNumber }} was queued for clerk review.
          </scsc-alert>
        }
      </form>
    </scsc-card>
  \`,
})
export class CaseIntakeDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.group({
    caseNumber: ['', [Validators.required, Validators.pattern(/^\\d{2}[A-Z]{2}\\d{6}$/)]],
    caseType: ['', Validators.required],
    notes: [''],
    priority: ['standard'],
    eNotify: [true],
    certify: [false, Validators.requiredTrue],
  });

  protected invalid(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  protected errorFor(name: string): string {
    const c = this.form.get(name);
    if (!c || !this.invalid(name)) return '';
    if (c.hasError('required')) return 'This field is required.';
    if (c.hasError('pattern')) return 'Use the format 24CV012345.';
    return 'Invalid value.';
  }

  protected submit(): void {
    if (this.form.valid) this.submitted.set(true);
  }

  protected reset(): void {
    this.form.reset({ priority: 'standard', eNotify: true, certify: false });
    this.submitted.set(false);
  }
}
`,html:`<scsc-card title="Case intake" class="max-w-2xl">
  <form [formGroup]="form" (ngSubmit)="submit()" class="flex flex-col gap-4">
    <scsc-form-field
      label="Case number"
      hint="Format: 24CV012345"
      for="caseNumber"
      required
      [error]="errorFor('caseNumber')"
    >
      <input
        scsc-input
        id="caseNumber"
        formControlName="caseNumber"
        [invalid]="invalid('caseNumber')"
        placeholder="24CV012345"
      />
    </scsc-form-field>

    <scsc-form-field label="Case type" for="caseType" required [error]="errorFor('caseType')">
      <select scsc-select id="caseType" formControlName="caseType">
        <option value="" disabled>Select a type\u2026</option>
        <option value="civil">Civil</option>
        <option value="family">Family</option>
        <option value="probate">Probate</option>
        <option value="criminal">Criminal</option>
      </select>
    </scsc-form-field>

    <scsc-form-field label="Notes" hint="Optional summary for the clerk" for="notes">
      <textarea scsc-textarea id="notes" rows="3" formControlName="notes"></textarea>
    </scsc-form-field>

    <fieldset class="flex flex-col gap-2">
      <legend class="text-sm font-medium">Priority</legend>
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="priority" value="standard" />
        <span>Standard</span>
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" scsc-radio formControlName="priority" value="expedited" />
        <span>Expedited</span>
      </label>
    </fieldset>

    <label class="flex items-center gap-3">
      <input type="checkbox" scsc-switch formControlName="eNotify" />
      <span>Send electronic notifications</span>
    </label>

    <label class="flex items-center gap-2">
      <input type="checkbox" scsc-checkbox formControlName="certify" />
      <span>I certify the information is accurate</span>
    </label>

    <div class="flex gap-3 pt-2">
      <scsc-button variant="primary" nativeType="submit" [disabled]="form.invalid"
        >Submit</scsc-button
      >
      <scsc-button variant="ghost" nativeType="reset" (click)="reset()">Clear</scsc-button>
    </div>

    @if (submitted()) {
      <scsc-alert status="success" title="Intake submitted">
        Case {{ form.value.caseNumber }} was queued for clerk review.
      </scsc-alert>
    }
  </form>
</scsc-card>
`}}[`case-intake`]}];export{oe as t};