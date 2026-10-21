import{$i as zs,$r as pe,Aa as It,Ai as vA,Ca as Gv,Co as _2,Cs as rM,Do as ae$1,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,K as Fi,Lo as d_,Ma as JT,Mr as jn,Ms as uc,Na as Jb,Nr as jo,On as Wz,Ps as ut,Q as Gue,Rs as w_,Uo as fa,Ur as me,Va as M2,Xa as Pv,Xt as RP,Y as Fs,Yo as iD,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,eo as S2,ha as Eg,ii as qo,ir as dt,ka as Ig,ks as t_,l as $ue,lr as ez,m as Aa,mn as Uue,nt as IA,oi as que,pa as Ec,pi as sn,ps as n_,ra as Af,si as qz,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xo as Yv,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{t as Kt}from"./chunk-DFHP88EM.js";import{t as j}from"./chunk-C9lUiK0O.js";var Oe=[`addButton`];var Ge=[`removeButton`];var ae=()=>[];var ie=(t,o)=>o.key;var Le=(t,o)=>o.value;function je(t,o){if(t&1&&uc(0,`scsc-field-control`,6),t&2){let e=o.$implicit,r=y_(2);Pv(`field`,e)(`control`,r.group().get(e.key))}}function Ve(t,o){if(t&1&&(Ga(0,`fieldset`,2)(1,`legend`,4),G_(2),Lf(),Ga(3,`div`,5),o_(4,je,1,2,`scsc-field-control`,6,ie),Lf()()),t&2){let e=y_();Jb(2),nD(e.label()),Jb(2),i_(e.field().fields??rM(1,ae))}}function Pe(t,o){if(t&1&&uc(0,`scsc-field-control`,6),t&2){let e=o.$implicit,r=y_().$implicit;Pv(`field`,e)(`control`,r.get(e.key))}}function $e(t,o){if(t&1){let e=d_();Ga(0,`div`,11)(1,`div`,13),o_(2,Pe,1,2,`scsc-field-control`,6,ie),Lf(),Ga(4,`button`,14,1),lc(`click`,function(){let d=Eg(e).$index,m=y_(2);return Ig(m.removeItem(d))}),uc(6,`lucide-angular`,15),Lf()()}if(t&2){let e=y_(2);Jb(2),i_(e.field().fields??rM(1,ae)),Jb(4),Pv(`size`,16)}}function We(t,o){t&1&&(Ga(0,`p`,12),G_(1,`No items.`),Lf())}function Je(t,o){if(t&1){let e=d_();Ga(0,`div`,2)(1,`div`,7)(2,`span`,8),G_(3),Lf(),Ga(4,`scsc-button`,9,0),lc(`click`,function(){Eg(e);let d=y_();return Ig(d.addItem())}),G_(6,`+ Add`),Lf()(),Ga(7,`div`,10),o_(8,$e,7,2,`div`,11,n_,!1,We,2,0,`p`,12),Lf()()}if(t&2){let e=y_();Jb(3),nD(e.label()),Jb(5),i_(e.array().controls)}}function He(t,o){if(t&1&&(Ga(0,`textarea`,16),HS(),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl())(`placeholder`,e.field().placeholder||``),zS()}}function ze(t,o){if(t&1&&(Ga(0,`label`,17)(1,`input`,24),HS(),Lf(),G_(2),Lf()),t&2){let e=y_(2);Jb(),Pv(`id`,e.controlId)(`formControl`,e.ctrl()),zS(),Jb(),$f(` `,e.field().placeholder||`Yes`)}}function Ye(t,o){if(t&1&&(Ga(0,`option`,26),G_(1),Lf()),t&2){let e=o.$implicit;Pv(`value`,e.value),Jb(),nD(e.label)}}function Ue(t,o){if(t&1&&(Ga(0,`select`,18),HS(),Ga(1,`option`,25),G_(2,`Select…`),Lf(),o_(3,Ye,2,2,`option`,26,Le),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl()),zS(),Jb(3),i_(e.field().options??rM(2,ae))}}function Qe(t,o){if(t&1&&(Ga(0,`input`,19),HS(),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl())(`placeholder`,e.field().placeholder||``),zS()}}function Ke(t,o){if(t&1&&(Ga(0,`input`,20),HS(),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl())(`placeholder`,e.field().placeholder||``),zS()}}function Ze(t,o){if(t&1&&(Ga(0,`input`,21),HS(),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl()),zS()}}function Xe(t,o){if(t&1&&(Ga(0,`input`,22),HS(),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl()),zS()}}function et(t,o){if(t&1&&(Ga(0,`input`,23),HS(),Lf()),t&2){let e=y_(2);Pv(`id`,e.controlId)(`formControl`,e.ctrl())(`placeholder`,e.field().placeholder||``),zS()}}function tt(t,o){if(t&1&&(Ga(0,`scsc-form-field`,3),JT(1,He,1,3,`textarea`,16)(2,ze,3,3,`label`,17)(3,Ue,5,3,`select`,18)(4,Qe,1,3,`input`,19)(5,Ke,1,3,`input`,20)(6,Ze,1,2,`input`,21)(7,Xe,1,2,`input`,22)(8,et,1,3,`input`,23),Lf()),t&2){let e,r=y_();Pv(`label`,r.label())(`hint`,r.field().help||``)(`required`,!!r.field().required)(`error`,r.errorText())(`for`,r.controlId),Jb(),t_((e=r.field().type)===`longtext`?1:e===`boolean`?2:e===`select`?3:e===`number`?4:e===`integer`?5:e===`date`?6:e===`datetime`?7:8)}}function ot(t,o){if(t&1&&uc(0,`scsc-field-control`,1),t&2){let e=o.$implicit,r=y_();Pv(`field`,e)(`control`,r.form.get(e.key))}}function se(t){if(t.type===`group`)return new Aa(Object.fromEntries((t.fields??[]).map(r=>[r.key,se(r)])));if(t.type===`list`)return new zs([]);let o=[];t.required&&o.push(Fs.required),t.min!=null&&o.push(Fs.min(t.min)),t.max!=null&&o.push(Fs.max(t.max)),t.pattern&&o.push(Fs.pattern(t.pattern));let e=t.type===`boolean`?!1:``;return new Fi(e,o)}var rt=0;function le(t){return new Aa(Object.fromEntries(t.map(o=>[o.key,se(o)])))}var N=class t{field=Ec.required();control=Ec.required();controlId=`scsc-field-control-${rt++}`;label=()=>this.field().label||this.field().key;ctrl=()=>this.control();group=()=>this.control();array=()=>this.control();host=g(It).nativeElement;injector=g(ae$1);addButton=_2(`addButton`,{read:It});removeButtons=M2(`removeButton`);addItem(){this.array().push(new Aa(Object.fromEntries((this.field().fields??[]).map(o=>[o.key,se(o)]))))}removeItem(o){dt(this.injector,this.host,()=>{let e=this.removeButtons();return e[Math.min(o,e.length-1)]?.nativeElement??this.addButton()?.nativeElement.querySelector(`button`)}),this.array().removeAt(o)}errorText(){let o=this.control();return!o||o.valid||!(o.dirty||o.touched)?``:o.hasError(`required`)?`This field is required.`:o.hasError(`min`)?`Value is too small.`:o.hasError(`max`)?`Value is too large.`:o.hasError(`pattern`)?`Invalid format.`:`Invalid value.`}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`scsc-field-control`]],viewQuery:function(e,r){e&1&&Gv(r.addButton,Oe,5,It)(r.removeButtons,Ge,5),e&2&&w_(2)},inputs:{field:[1,`field`],control:[1,`control`]},decls:3,vars:1,consts:[[`addButton`,``],[`removeButton`,``],[1,`rounded-box`,`border`,`border-base-300`,`p-4`],[3,`label`,`hint`,`required`,`error`,`for`],[1,`px-1`,`text-sm`,`font-semibold`],[1,`flex`,`flex-col`,`gap-4`],[3,`field`,`control`],[1,`mb-2`,`flex`,`items-center`,`justify-between`],[1,`text-sm`,`font-semibold`],[`size`,`sm`,`variant`,`ghost`,3,`click`],[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`items-start`,`gap-2`,`rounded-field`,`bg-base-200`,`p-3`],[1,`text-sm`,`text-base-content/70`],[1,`flex-1`,`space-y-3`],[`type`,`button`,`aria-label`,`Remove item`,1,`btn`,`btn-ghost`,`btn-xs`,`btn-square`,3,`click`],[`name`,`x`,`aria-hidden`,`true`,3,`size`],[`scsc-textarea`,``,`rows`,`3`,3,`id`,`formControl`,`placeholder`],[1,`flex`,`items-center`,`gap-2`],[`scsc-select`,``,3,`id`,`formControl`],[`scsc-input`,``,`type`,`number`,3,`id`,`formControl`,`placeholder`],[`scsc-input`,``,`type`,`number`,`step`,`1`,3,`id`,`formControl`,`placeholder`],[`scsc-input`,``,`type`,`date`,3,`id`,`formControl`],[`scsc-input`,``,`type`,`datetime-local`,3,`id`,`formControl`],[`scsc-input`,``,`type`,`text`,3,`id`,`formControl`,`placeholder`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`id`,`formControl`],[`value`,``,`disabled`,``],[3,`value`]],template:function(e,r){if(e&1&&JT(0,Ve,6,2,`fieldset`,2)(1,Je,11,2,`div`,2)(2,tt,9,6,`scsc-form-field`,3),e&2){let d;t_((d=r.field().type)===`group`?0:d===`list`?1:2)}},dependencies:[t,Kue,$ue,Uue,IA,qz,ez,tN,Hue,Wz,pe,me,Vn,qo,vA,On,jo,sn],encapsulation:2})};var C=class t{schema=Ec.required();valueChange=S2();validChange=S2();form=new Aa({});constructor(){fa(()=>{this.form=le(this.schema()),this.form.valueChanges.subscribe(()=>{this.valueChange.emit(this.form.getRawValue()),this.validChange.emit(this.form.valid)})})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`scsc-form-renderer`]],hostAttrs:[1,`block`],inputs:{schema:[1,`schema`]},outputs:{valueChange:`valueChange`,validChange:`validChange`},decls:3,vars:1,consts:[[1,`flex`,`flex-col`,`gap-4`,3,`formGroup`],[3,`field`,`control`]],template:function(e,r){e&1&&(Ga(0,`form`,0),o_(1,ot,1,2,`scsc-field-control`,1,ie),Lf()),e&2&&(Pv(`formGroup`,r.form),Jb(),i_(r.schema()))},dependencies:[Kue,Bue,que,Vz,N],encapsulation:2})};var X=class t{schema=q([{key:`recipient`,type:`text`,required:!0,label:`Recipient name`},{key:`hearingDate`,type:`date`,required:!0,label:`Hearing date`},{key:`department`,type:`select`,label:`Department`,options:[{value:`d7`,label:`Dept. 7`},{value:`d12`,label:`Dept. 12`}]},{key:`parties`,type:`list`,label:`Parties`,fields:[{key:`name`,type:`text`,label:`Name`},{key:`role`,type:`select`,label:`Role`,options:[{value:`plaintiff`,label:`Plaintiff`},{value:`defendant`,label:`Defendant`}]}]}]);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-forms-schema-builder-demo`]],decls:9,vars:3,consts:[[1,`grid`,`gap-6`,`2xl:grid-cols-2`],[1,`mb-2`,`text-sm`,`font-medium`],[3,`schemaChange`,`schema`],[3,`schema`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`div`)(2,`p`,1),G_(3,`Schema`),Lf(),Ga(4,`scsc-schema-builder`,2),sD(`schemaChange`,function(m){return Y_(r.schema,m)||(r.schema=m),m}),Lf()(),Ga(5,`div`)(6,`p`,1),G_(7),Lf(),uc(8,`scsc-form-renderer`,3),Lf()()),e&2&&(Jb(4),iD(`schema`,r.schema),Jb(3),$f(` Live preview — `,r.schema().length,` top-level fields `),Jb(),Pv(`schema`,r.schema()))},dependencies:[C,Kt],encapsulation:2})};var nt=(t,o)=>o.key;function at(t,o){if(t&1&&(Ga(0,`div`),uc(1,`scsc-field-control`,7),Lf()),t&2){let e=o.$implicit,r=y_();Yv(`col-span-full`,r.isWide(e)),Jb(),Pv(`field`,e)(`control`,r.form.get(e.key))}}function it(t,o){if(t&1&&(Ga(0,`scsc-alert`,3),G_(1),Lf()),t&2){let e=y_();Jb(),$f(` `,e.requested(),`. The interpreter office confirms by email within two court days. `)}}var ee=class t{schema=[{key:`caseNumber`,type:`text`,required:!0,label:`Case number`,help:`Format: 24CV012345`,pattern:`^\\d{2}[A-Z]{2}\\d{6}$`},{key:`hearingDate`,type:`date`,required:!0,label:`Hearing date`},{key:`language`,type:`select`,required:!0,label:`Language`,options:[{value:`es`,label:`Spanish`},{value:`vi`,label:`Vietnamese`},{value:`zh`,label:`Mandarin`},{value:`ase`,label:`American Sign Language`}]},{key:`hours`,type:`integer`,label:`Estimated hours`,min:1,max:8},{key:`notes`,type:`longtext`,label:`Notes for the interpreter`,help:`Names, legal terms or dialect to prepare.`}];form=le(this.schema);requested=q(``);isWide(o){return o.type===`longtext`||o.type===`group`||o.type===`list`}submit(){if(this.form.markAllAsTouched(),this.form.invalid)return;let{caseNumber:o,hearingDate:e,language:r}=this.form.getRawValue(),d=this.schema[2].options?.find(m=>m.value===r)?.label;this.requested.set(`${d} for ${o} on ${e}`)}clear(){this.form.reset(),this.requested.set(``)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-forms-schema-layout-demo`]],decls:10,vars:2,consts:[[`novalidate`,``,1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[3,`col-span-full`],[`status`,`success`,`title`,`Interpreter requested`],[1,`flex`,`gap-2`],[`variant`,`primary`,`nativeType`,`submit`],[`variant`,`ghost`,3,`click`],[3,`field`,`control`]],template:function(e,r){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return r.submit()}),Ga(1,`div`,1),o_(2,at,2,4,`div`,2,nt),Lf(),JT(4,it,2,1,`scsc-alert`,3),Ga(5,`div`,4)(6,`scsc-button`,5),G_(7,`Request interpreter`),Lf(),Ga(8,`scsc-button`,6),lc(`click`,function(){return r.clear()}),G_(9,`Clear`),Lf()()()),e&2&&(Pv(`formGroup`,r.form),Jb(2),i_(r.schema),Jb(2),t_(r.requested()?4:-1))},dependencies:[Kue,Bue,que,Vz,za,sn,N],encapsulation:2})};var st=[`bodyBox`];var te=class t{schema=[{key:`recipient`,type:`text`,label:`Recipient name`},{key:`hearingDate`,type:`date`,label:`Hearing date`},{key:`address`,type:`group`,label:`Mailing address`,fields:[{key:`street`,type:`text`,label:`Street`},{key:`city`,type:`text`,label:`City`}]},{key:`parties`,type:`list`,label:`Parties`,fields:[{key:`name`,type:`text`,label:`Name`},{key:`role`,type:`text`,label:`Role`}]}];body=q(`Dear {{recipient}},

Your hearing is set for {{hearingDate}}.
`);bodyBox=_2.required(`bodyBox`);insert(o){let e=this.bodyBox().nativeElement;e.focus(),e.setRangeText(o,e.selectionStart,e.selectionEnd,`end`),e.dispatchEvent(new Event(`input`,{bubbles:!0}))}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-forms-schema-merge-fields-demo`]],viewQuery:function(e,r){e&1&&Gv(r.bodyBox,st,5),e&2&&w_()},decls:8,vars:2,consts:[[`bodyBox`,``],[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[1,`text-sm`,`font-medium`],[3,`insert`,`schema`],[`label`,`Body`,`hint`,`Tokens are filled from the form value when the notice is generated; a list field inserts an each-block.`,`for`,`merge-body`],[`scsc-textarea`,``,`id`,`merge-body`,`rows`,`9`,1,`font-mono`,`text-sm`,3,`ngModelChange`,`ngModel`]],template:function(e,r){if(e&1){let d=d_();Ga(0,`div`,1)(1,`div`,2)(2,`p`,3),G_(3,`Notice of hearing template`),Lf(),Ga(4,`scsc-merge-field-menu`,4),lc(`insert`,function(_){return r.insert(_)}),Lf()(),Ga(5,`scsc-form-field`,5)(6,`textarea`,6,0),HS(),sD(`ngModelChange`,function(_){return Eg(d),Y_(r.body,_)||(r.body=_),Ig(_)}),Lf()()()}e&2&&(Jb(4),Pv(`schema`,r.schema),Jb(2),iD(`ngModel`,r.body),zS())},dependencies:[Gue,IA,Hue,zz,Vn,vA,j],encapsulation:2})};var oe=class t{schema=[{key:`recipient`,type:`text`,required:!0,label:`Recipient name`,placeholder:`Jane Alvarez`},{key:`hearingDate`,type:`date`,required:!0,label:`Hearing date`},{key:`department`,type:`select`,label:`Department`,options:[{value:`d7`,label:`Dept. 7`},{value:`d12`,label:`Dept. 12`}]},{key:`feeWaiver`,type:`boolean`,label:`Fee waiver requested`,placeholder:`Yes, form FW-001 is attached`},{key:`parties`,type:`list`,label:`Parties`,fields:[{key:`name`,type:`text`,label:`Name`},{key:`role`,type:`select`,label:`Role`,options:[{value:`plaintiff`,label:`Plaintiff`},{value:`defendant`,label:`Defendant`}]}]}];value=q({});valid=q(!1);json=ut(()=>JSON.stringify(this.value(),null,2));static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-forms-schema-renderer-demo`]],decls:8,vars:4,consts:[[1,`grid`,`gap-6`,`lg:grid-cols-2`],[3,`valueChange`,`validChange`,`schema`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-center`,`gap-2`,`text-sm`,`font-medium`],[`soft`,``,3,`tone`],[`language`,`json`,3,`code`]],template:function(e,r){e&1&&(Ga(0,`div`,0)(1,`scsc-form-renderer`,1),lc(`valueChange`,function(m){return r.value.set(m)})(`validChange`,function(m){return r.valid.set(m)}),Lf(),Ga(2,`div`,2)(3,`p`,3),G_(4,` Form value `),Ga(5,`scsc-badge`,4),G_(6),Lf()(),uc(7,`scsc-code-block`,5),Lf()()),e&2&&(Jb(),Pv(`schema`,r.schema),Jb(4),Pv(`tone`,r.valid()?`success`:`warning`),Jb(),nD(r.valid()?`valid`:`incomplete`),Jb(),Pv(`code`,r.json()))},dependencies:[jn,RP,C],encapsulation:2})};var B={"forms-schema-builder":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscFormRenderer, ScscSchemaBuilder, type ScscFormSchema } from '@scscourt/design/forms';

@Component({
  selector: 'app-forms-schema-builder-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormRenderer, ScscSchemaBuilder],
  template: \`
    <!-- Side by side only on very wide screens: the builder needs about 40rem to itself. -->
    <div class="grid gap-6 2xl:grid-cols-2">
      <div>
        <p class="mb-2 text-sm font-medium">Schema</p>
        <scsc-schema-builder [(schema)]="schema" />
      </div>
      <div>
        <p class="mb-2 text-sm font-medium">
          Live preview \u2014 {{ schema().length }} top-level fields
        </p>
        <scsc-form-renderer [schema]="schema()" />
      </div>
    </div>
  \`,
})
export class FormsSchemaBuilderDemo {
  /**
   * The builder edits fields in place and then emits a new array reference, so the renderer
   * (which rebuilds its FormGroup on every new reference) stays in sync. Keep one owner per schema.
   */
  protected readonly schema = signal<ScscFormSchema>([
    { key: 'recipient', type: 'text', required: true, label: 'Recipient name' },
    { key: 'hearingDate', type: 'date', required: true, label: 'Hearing date' },
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
        {
          key: 'role',
          type: 'select',
          label: 'Role',
          options: [
            { value: 'plaintiff', label: 'Plaintiff' },
            { value: 'defendant', label: 'Defendant' },
          ],
        },
      ],
    },
  ]);
}
`,html:`<!-- Side by side only on very wide screens: the builder needs about 40rem to itself. -->
<div class="grid gap-6 2xl:grid-cols-2">
  <div>
    <p class="mb-2 text-sm font-medium">Schema</p>
    <scsc-schema-builder [(schema)]="schema" />
  </div>
  <div>
    <p class="mb-2 text-sm font-medium">
      Live preview \u2014 {{ schema().length }} top-level fields
    </p>
    <scsc-form-renderer [schema]="schema()" />
  </div>
</div>
`},"forms-schema-layout":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScscAlert, ScscButton } from '@scscourt/design';
import {
  ScscFieldControl,
  buildGroup,
  type ScscField,
  type ScscFormSchema,
} from '@scscourt/design/forms';

@Component({
  selector: 'app-forms-schema-layout-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFieldControl],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4" novalidate>
      <!-- Your grid, the schema's fields: short fields pair up, long ones take the whole row. -->
      <div class="grid gap-4 sm:grid-cols-2">
        @for (f of schema; track f.key) {
          <div [class.col-span-full]="isWide(f)">
            <scsc-field-control [field]="f" [control]="form.get(f.key)!" />
          </div>
        }
      </div>

      @if (requested()) {
        <scsc-alert status="success" title="Interpreter requested">
          {{ requested() }}. The interpreter office confirms by email within two court days.
        </scsc-alert>
      }

      <div class="flex gap-2">
        <scsc-button variant="primary" nativeType="submit">Request interpreter</scsc-button>
        <scsc-button variant="ghost" (click)="clear()">Clear</scsc-button>
      </div>
    </form>
  \`,
})
export class FormsSchemaLayoutDemo {
  /** The same JSON a clerk maintains in the builder; only the layout is hand-written. */
  protected readonly schema: ScscFormSchema = [
    {
      key: 'caseNumber',
      type: 'text',
      required: true,
      label: 'Case number',
      help: 'Format: 24CV012345',
      pattern: '^\\\\d{2}[A-Z]{2}\\\\d{6}$',
    },
    { key: 'hearingDate', type: 'date', required: true, label: 'Hearing date' },
    {
      key: 'language',
      type: 'select',
      required: true,
      label: 'Language',
      options: [
        { value: 'es', label: 'Spanish' },
        { value: 'vi', label: 'Vietnamese' },
        { value: 'zh', label: 'Mandarin' },
        { value: 'ase', label: 'American Sign Language' },
      ],
    },
    { key: 'hours', type: 'integer', label: 'Estimated hours', min: 1, max: 8 },
    {
      key: 'notes',
      type: 'longtext',
      label: 'Notes for the interpreter',
      help: 'Names, legal terms or dialect to prepare.',
    },
  ];

  /** buildGroup gives you the FormGroup, so submit, reset and markAllAsTouched are yours. */
  protected readonly form = buildGroup(this.schema);
  protected readonly requested = signal('');

  protected isWide(f: ScscField): boolean {
    return f.type === 'longtext' || f.type === 'group' || f.type === 'list';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const { caseNumber, hearingDate, language } = this.form.getRawValue();
    const name = this.schema[2].options?.find((o) => o.value === language)?.label;
    this.requested.set(\`\${name} for \${caseNumber} on \${hearingDate}\`);
  }

  protected clear(): void {
    this.form.reset();
    this.requested.set('');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4" novalidate>
  <!-- Your grid, the schema's fields: short fields pair up, long ones take the whole row. -->
  <div class="grid gap-4 sm:grid-cols-2">
    @for (f of schema; track f.key) {
      <div [class.col-span-full]="isWide(f)">
        <scsc-field-control [field]="f" [control]="form.get(f.key)!" />
      </div>
    }
  </div>

  @if (requested()) {
    <scsc-alert status="success" title="Interpreter requested">
      {{ requested() }}. The interpreter office confirms by email within two court days.
    </scsc-alert>
  }

  <div class="flex gap-2">
    <scsc-button variant="primary" nativeType="submit">Request interpreter</scsc-button>
    <scsc-button variant="ghost" (click)="clear()">Clear</scsc-button>
  </div>
</form>
`},"forms-schema-merge-fields":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscFormField, ScscTextarea } from '@scscourt/design';
import { ScscMergeFieldMenu, type ScscFormSchema } from '@scscourt/design/forms';

@Component({
  selector: 'app-forms-schema-merge-fields-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscTextarea, ScscMergeFieldMenu],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <p class="text-sm font-medium">Notice of hearing template</p>
        <scsc-merge-field-menu [schema]="schema" (insert)="insert($event)" />
      </div>

      <scsc-form-field
        label="Body"
        hint="Tokens are filled from the form value when the notice is generated; a list field inserts an each-block."
        for="merge-body"
      >
        <textarea
          #bodyBox
          scsc-textarea
          id="merge-body"
          rows="9"
          class="font-mono text-sm"
          [(ngModel)]="body"
        ></textarea>
      </scsc-form-field>
    </div>
  \`,
})
export class FormsSchemaMergeFieldsDemo {
  /** Groups flatten to dotted paths (address.city); lists become each-blocks with \`this.<key>\` inside. */
  protected readonly schema: ScscFormSchema = [
    { key: 'recipient', type: 'text', label: 'Recipient name' },
    { key: 'hearingDate', type: 'date', label: 'Hearing date' },
    {
      key: 'address',
      type: 'group',
      label: 'Mailing address',
      fields: [
        { key: 'street', type: 'text', label: 'Street' },
        { key: 'city', type: 'text', label: 'City' },
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

  protected readonly body = signal(
    'Dear {{recipient}},\\n\\nYour hearing is set for {{hearingDate}}.\\n',
  );
  private readonly bodyBox = viewChild.required<ElementRef<HTMLTextAreaElement>>('bodyBox');

  /**
   * The menu has already closed and put focus back on its button. Insert the token at the caret
   * (a textarea keeps its selection while unfocused) and move focus after it, as the rich-text
   * editor's insertText() does, so the user carries on typing where the token went.
   */
  protected insert(token: string): void {
    const box = this.bodyBox().nativeElement;
    box.focus();
    box.setRangeText(token, box.selectionStart, box.selectionEnd, 'end');
    // setRangeText() fires no input event of its own; ngModel listens for one.
    box.dispatchEvent(new Event('input', { bubbles: true }));
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <div class="flex items-center justify-between gap-3">
    <p class="text-sm font-medium">Notice of hearing template</p>
    <scsc-merge-field-menu [schema]="schema" (insert)="insert($event)" />
  </div>

  <scsc-form-field
    label="Body"
    hint="Tokens are filled from the form value when the notice is generated; a list field inserts an each-block."
    for="merge-body"
  >
    <textarea
      #bodyBox
      scsc-textarea
      id="merge-body"
      rows="9"
      class="font-mono text-sm"
      [(ngModel)]="body"
    ></textarea>
  </scsc-form-field>
</div>
`},"forms-schema-renderer":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscBadge, ScscCodeBlock } from '@scscourt/design';
import { ScscFormRenderer, type ScscFormSchema } from '@scscourt/design/forms';

@Component({
  selector: 'app-forms-schema-renderer-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscCodeBlock, ScscFormRenderer],
  template: \`
    <div class="grid gap-6 lg:grid-cols-2">
      <scsc-form-renderer
        [schema]="schema"
        (valueChange)="value.set($event)"
        (validChange)="valid.set($event)"
      />

      <div class="flex flex-col gap-2">
        <p class="flex items-center gap-2 text-sm font-medium">
          Form value
          <scsc-badge [tone]="valid() ? 'success' : 'warning'" soft>{{
            valid() ? 'valid' : 'incomplete'
          }}</scsc-badge>
        </p>
        <scsc-code-block language="json" [code]="json()" />
      </div>
    </div>
  \`,
})
export class FormsSchemaRendererDemo {
  /** A serializable contract: the same JSON drives the builder, the renderer and the merge-field menu. */
  protected readonly schema: ScscFormSchema = [
    {
      key: 'recipient',
      type: 'text',
      required: true,
      label: 'Recipient name',
      placeholder: 'Jane Alvarez',
    },
    { key: 'hearingDate', type: 'date', required: true, label: 'Hearing date' },
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
      key: 'feeWaiver',
      type: 'boolean',
      label: 'Fee waiver requested',
      placeholder: 'Yes, form FW-001 is attached',
    },
    {
      key: 'parties',
      type: 'list',
      label: 'Parties',
      fields: [
        { key: 'name', type: 'text', label: 'Name' },
        {
          key: 'role',
          type: 'select',
          label: 'Role',
          options: [
            { value: 'plaintiff', label: 'Plaintiff' },
            { value: 'defendant', label: 'Defendant' },
          ],
        },
      ],
    },
  ];

  protected readonly value = signal<Record<string, unknown>>({});
  protected readonly valid = signal(false);
  protected readonly json = computed(() => JSON.stringify(this.value(), null, 2));
}
`,html:`<div class="grid gap-6 lg:grid-cols-2">
  <scsc-form-renderer
    [schema]="schema"
    (valueChange)="value.set($event)"
    (validChange)="valid.set($event)"
  />

  <div class="flex flex-col gap-2">
    <p class="flex items-center gap-2 text-sm font-medium">
      Form value
      <scsc-badge [tone]="valid() ? 'success' : 'warning'" soft>{{
        valid() ? 'valid' : 'incomplete'
      }}</scsc-badge>
    </p>
    <scsc-code-block language="json" [code]="json()" />
  </div>
</div>
`}};var Yt={slug:`forms-schema`,name:`Form Schema`,classes:[`ScscFormRenderer`,`ScscFieldControl`,`ScscSchemaBuilder`,`ScscSchemaBuilderList`,`ScscMergeFieldMenu`],category:`Specialized`,summary:"Schema-driven forms. A `ScscFormSchema` is plain JSON that declares fields, types and validation; `scsc-form-renderer` turns it into a live Reactive Form, `scsc-schema-builder` lets staff edit the schema (drag-and-drop, or move buttons for keyboard and single-click use), and `scsc-merge-field-menu` turns the same schema into `{{tokens}}` for document templates.",whenToUse:["Forms whose fields are configured, not coded: intake questionnaires, self-help wizards, notice templates that clerks maintain without a deploy. Store the schema with the record and render it with `scsc-form-renderer`.","Hand-written forms (a login, a case search) should stay as ordinary Reactive Forms with `scsc-form-field`; the renderer trades layout control for configurability.","The schema is the single contract: `buildGroup(schema)` gives you the same `FormGroup` on the server side of a submission for validation, and `scsc-merge-field-menu` derives template tokens from it.","`scsc-form-renderer` emits `valueChange` / `validChange` but owns its `FormGroup`. When you need a submit button, a reset or your own layout, build the group with `buildGroup(schema)` and render each field with `scsc-field-control` (the layout demo).","`scsc-schema-builder-list` is the recursive building block of the builder; reach for it only when you embed the builder in a custom editor."],setup:`// package.json \u2014 optional peer, needed by the builder (CDK drag-drop)
"@angular/cdk": "^22.0.0"

// import from the secondary entry point, not from '@scscourt/design'
import { ScscFormRenderer, ScscSchemaBuilder, ScscMergeFieldMenu, buildGroup, type ScscFormSchema } from '@scscourt/design/forms';

// The builder and menu use Lucide icons: type, align-left, hash, toggle-left, calendar, clock,
// list, list-ordered, box, grip-vertical, chevron-up, chevron-down, settings, x, code, braces.
// Register them (or the whole set, SCSC_ICONS) with provideScscIcons(...) in your app config.`,demos:[{id:`forms-schema-renderer`,title:`Render a schema`,description:`Text, date, select, yes/no and a repeating list, with required validation and the live value.`,component:oe,source:B[`forms-schema-renderer`]},{id:`forms-schema-builder`,title:`Edit a schema with live preview`,description:"`[(schema)]` on the builder feeds the renderer; add from the palette, reorder by dragging or with a field’s move buttons, open the gear for label/help/options, or edit the raw JSON.",component:X,source:B[`forms-schema-builder`]},{id:`forms-schema-merge-fields`,title:`Merge fields for templates`,description:"The menu lists every leaf as a token; groups flatten to dotted paths and lists become `{{#each}}` blocks. The `insert` handler puts the token at the caret and focus back in the text box.",component:te,source:B[`forms-schema-merge-fields`]},{id:`forms-schema-layout`,title:`Your own layout and submit`,description:"`buildGroup(schema)` gives you the `FormGroup`; `scsc-field-control` renders each field inside your grid, and submit marks everything touched so the errors show.",component:ee,source:B[`forms-schema-layout`]}],a11y:["Rendered fields use `scsc-form-field` semantics: visible labels, hints, and errors that appear after the user interacts and are read with the field (`aria-describedby`, `aria-invalid`). Groups render as `fieldset`/`legend`; list rows have a labelled remove button, and removing an item never drops focus to the page.","Field `label`s in the schema are what screen readers announce; a missing label falls back to the key, so always set one for staff-facing schemas.",`Dragging is a pointer shortcut only: the grip is hidden from assistive technology and is not a Tab stop. Every field has move up / move down buttons that work by keyboard and with a single click or tap (WCAG 2.1.1, 2.5.7); focus stays on the button and the new position is announced.`,`Removing a field moves focus to the next field’s key, else the previous one’s, else the palette (in a list or group, its **+ type** buttons). A field’s open settings stay with that field through moves and removals.`,`The **Schema JSON** text box (behind **Raw JSON**) keeps your text and caret while you type; it is laid out again only when focus leaves it or the schema changes from outside. JSON that does not parse is flagged and described by its error.`,`Arrowing through a field’s closed type select (Windows applies each option as you pass it) leaves nothing behind: options and child fields exist only for the final type, and come back if you return to Select, List or Group.`,"The merge-field menu follows the WAI-ARIA menu button pattern (`scscPopup`): **Insert field** is its only Tab stop and nothing opens on focus. Choosing a token closes the menu and returns focus to **Insert field** before `insert` fires, so a handler that moves focus to the inserted text keeps it there."],keyboard:[{keys:`Tab`,action:`Renderer: each field in schema order; a list field has **+ Add**, then each item’s fields and its **Remove item** button.`},{keys:`Enter / Space`,action:`On **+ Add**: appends an empty item. On **Remove item**: deletes it; focus lands on the next item’s **Remove item**, else the previous one’s, else **+ Add**.`},{keys:`Space`,action:`Toggles a checkbox: a yes/no field, or a field’s **required** box in the builder.`},{keys:`ArrowUp / ArrowDown`,action:`Native control keys: step a number, change a select’s option, or change the focused part of a date.`},{keys:`Tab`,action:`Builder: the type palette, **Raw JSON**, then per field its key, type, **required**, **Move up**, **Move down**, **Field settings** and **Remove** (the buttons are named after the key, e.g. “Move notes up”), then its open settings and nested fields.`},{keys:`Enter / Space`,action:`On a palette type (the **+ type** buttons on narrow screens): appends that field; the **+ type** buttons in a list or group add a child field.`},{keys:`Enter / Space`,action:`On **Move up** / **Move down**: moves the field one place in its list, keeps focus on the button and announces “Moved notes to position 1 of 4”. At the top or bottom the button is unavailable and does nothing.`},{keys:`Enter / Space`,action:`On **Field settings**: shows or hides the label, help and (for a select) options inputs. On **Remove**: deletes the field and moves focus to the next field’s key (see the notes above).`},{keys:`Enter / Space`,action:`On **Raw JSON** (a toggle button, pressed while open): switches between the field list and the **Schema JSON** text box.`},{keys:`Tab / Shift + Tab`,action:`Leaving **Schema JSON**: JSON that parses is laid out again; text that does not parse stays as typed, with its error.`},{keys:`Tab`,action:`Merge-field menu: **Insert field** is one Tab stop; the tokens inside the open menu are reached with the arrow keys.`},{keys:`Enter / Space / ArrowDown`,action:`On **Insert field**: opens the menu with focus on the first token (ArrowUp: on the last).`},{keys:`ArrowDown / ArrowUp`,action:`In the menu: moves to the next / previous token, wrapping at the ends.`},{keys:`Home / End`,action:`In the menu: moves to the first / last token.`},{keys:`Type a character`,action:`In the menu: moves to the next token whose label starts with it.`},{keys:`Enter / Space`,action:"On a token: closes the menu, returns focus to **Insert field** and emits `insert` with its `{{path}}`, or an `{{#each}}` block for a list field."},{keys:`Escape`,action:`Closes the menu and returns focus to **Insert field**.`},{keys:`Tab / Shift + Tab`,action:`In the menu: closes it and moves on (Shift + Tab: back to **Insert field**).`}],aria:['Builder: **Raw JSON** has `aria-pressed`. **Schema JSON** is a labelled `textarea`; while its text does not parse it is `aria-invalid="true"` and `aria-describedby` points at the error.','Builder: **Field settings** has `aria-expanded`, and `aria-controls` pointing at the settings panel while it is open. At the ends of a list, **Move up** / **Move down** are `aria-disabled="true"` and stay focusable. The palette and each list or group’s child fields are labelled groups.',"Builder: through `ScscAnnouncer` (in the language set with `provideScscLabels`), “Moved notes to position 1 of 4” after each move, by button or by drag. The move and remove buttons take their names from the same labels (`moveUp`, `moveDown`, `remove`).",'Merge-field menu: **Insert field** has `aria-haspopup="menu"`, `aria-expanded`, and `aria-controls` while open. The menu is `role="menu"`, labelled by the button; each token is a `menuitem` with `tabindex="-1"`. With no fields it holds one `aria-disabled` item, “No fields defined yet.”. The caption is the `insertField` label.'],appMustProvide:[`Meaningful field keys: the builder names each field’s buttons and announcements after its key (“Move hearingDate up”); a blank key falls back to its position (“field 2”).`,"An `insert` handler that puts the token where the user was working and, when it can, moves focus there: the rich-text editor’s `insertText()` does both; otherwise focus stays on **Insert field**."],related:[`form-field`,`input`,`select`,`rich-text-editor`,`wizard`]};export{Yt as FORMS_SCHEMA_DOCS};