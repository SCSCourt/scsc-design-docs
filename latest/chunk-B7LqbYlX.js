import{Dn as Wue,E as Bue,Go as g,Gs as zS,In as Xz,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Vr as mN,Xa as Pv,Y as Fs,_i as tN,bn as Vz,cs as lc,ds as nD,ii as qo,ks as t_,kt as NE,l as $ue,lt as JF,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,v as Ar,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function Q(o,s){o&1&&(Ga(0,`scsc-form-field`,6)(1,`input`,11),HS(),Lf()()),o&2&&(Jb(),zS())}var S=class o{fb=g(Wue);form=this.fb.nonNullable.group({name:[``,Fs.required],role:[`Cross-defendant`],representing:[``]});parties=q([{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Northgate Property Management, Inc.`,role:`Defendant`}]);announcement=q(``);nameError(){let s=this.form.controls.name;return s.invalid&&(s.dirty||s.touched)?`Enter the party name as it appears on the filing.`:``}add(){if(this.form.markAllAsTouched(),this.form.invalid)return;let{name:s,role:e,representing:t}=this.form.getRawValue(),A=e===`Attorney`&&t?{name:s,role:e,representing:t}:{name:s,role:e};this.parties.update(K=>[...K,A]),this.announcement.set(`Added ${s} as ${e}. ${this.parties().length} parties.`),this.form.reset()}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-party-list-add-demo`]],decls:22,vars:6,consts:[[1,`grid`,`max-w-3xl`,`gap-8`,`md:grid-cols-2`],[`novalidate`,``,1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Name`,`for`,`party-add-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`party-add-name`,`formControlName`,`name`,3,`invalid`],[`label`,`Role`,`for`,`party-add-role`],[`scsc-select`,``,`id`,`party-add-role`,`formControlName`,`role`],[`label`,`Representing`,`for`,`party-add-for`,`hint`,`e.g. for Defendant`],[`variant`,`primary`,`nativeType`,`submit`],[1,`flex`,`flex-col`,`gap-2`],[3,`parties`],[`tone`,`muted`,`size`,`sm`,`role`,`status`],[`scsc-input`,``,`id`,`party-add-for`,`formControlName`,`representing`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`form`,1),lc(`ngSubmit`,function(){return t.add()}),Ga(2,`scsc-form-field`,2)(3,`input`,3),HS(),Lf()(),Ga(4,`scsc-form-field`,4)(5,`select`,5),HS(),Ga(6,`option`),G_(7,`Plaintiff`),Lf(),Ga(8,`option`),G_(9,`Defendant`),Lf(),Ga(10,`option`),G_(11,`Cross-defendant`),Lf(),Ga(12,`option`),G_(13,`Attorney`),Lf()()(),JT(14,Q,2,0,`scsc-form-field`,6),Ga(15,`div`)(16,`scsc-button`,7),G_(17,`Add party`),Lf()()(),Ga(18,`div`,8),uc(19,`scsc-party-list`,9),Ga(20,`scsc-text`,10),G_(21),Lf()()()),e&2&&(Jb(),Pv(`formGroup`,t.form),Jb(),Pv(`error`,t.nameError()),Jb(),Pv(`invalid`,!!t.nameError()),zS(),Jb(2),zS(),Jb(9),t_(t.form.controls.role.value===`Attorney`?14:-1),Jb(5),Pv(`parties`,t.parties()),Jb(2),nD(t.announcement()))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,Vz,Xz,sn,Vn,qo,Ar,On,NE],encapsulation:2})};var b=class o{parties=[{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Northgate Property Management, Inc.`,role:`Defendant`},{name:`Daniel Reyes, Esq.`,role:`Attorney`,representing:`for Plaintiff`},{name:`Sandra Liu, Esq.`,role:`Attorney`,representing:`for Defendant`}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-party-list-basic-demo`]],decls:2,vars:1,consts:[[1,`max-w-md`],[3,`parties`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-party-list`,1),Lf()),e&2&&(Jb(),Pv(`parties`,t.parties))},dependencies:[Ar],encapsulation:2})};var D=class o{parties=[{name:`Rohan Patel`,role:`Petitioner`},{name:`Silicon Valley Transit Authority`,role:`Respondent`},{name:`Office of the County Counsel`,role:`Attorney`,representing:`for Respondent`}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-party-list-card-demo`]],decls:5,vars:2,consts:[[1,`max-w-md`,3,`title`],[3,`parties`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[`variant`,`ghost`,`size`,`sm`]],template:function(e,t){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-party-list`,1),Ga(2,`div`,2)(3,`scsc-button`,3),G_(4,`Add party`),Lf()()()),e&2&&(Pv(`title`,`Parties (`+t.parties.length+`)`),Jb(),Pv(`parties`,t.parties))},dependencies:[sn,mN,Ar],encapsulation:2})};var C=class o{represented=[{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Jordan Ellis, Esq.`,role:`Attorney`,representing:`for Plaintiff`},{name:`Northgate Property Mgmt., LLC`,role:`Defendant`},{name:`Hartwell & Lee LLP`,role:`Attorney`,representing:`for Defendant`}];selfRepresented=[{name:`Anita Patel`,role:`Petitioner`,representing:`Self-represented`},{name:`Rohan Patel`,role:`Respondent`,representing:`Self-represented`}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-party-list-counsel-demo`]],decls:9,vars:2,consts:[[1,`grid`,`max-w-3xl`,`gap-6`,`md:grid-cols-2`],[`aria-labelledby`,`counsel-represented`],[`id`,`counsel-represented`,1,`mb-2`,`font-semibold`],[3,`parties`],[`aria-labelledby`,`counsel-self`],[`id`,`counsel-self`,1,`mb-2`,`font-semibold`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`section`,1)(2,`h3`,2),G_(3,`Represented`),Lf(),uc(4,`scsc-party-list`,3),Lf(),Ga(5,`section`,4)(6,`h3`,5),G_(7,`Self-represented`),Lf(),uc(8,`scsc-party-list`,3),Lf()()),e&2&&(Jb(4),Pv(`parties`,t.represented),Jb(4),Pv(`parties`,t.selfRepresented))},dependencies:[Ar],encapsulation:2})};var x=class o{all=q(!1);parties=[{name:`Baylands Tenants Association`,role:`Plaintiff`},{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Daniel Reyes`,role:`Plaintiff`},{name:`Sandra Liu`,role:`Plaintiff`},{name:`Northgate Property Mgmt., LLC`,role:`Defendant`},{name:`Robert Whitfield`,role:`Defendant`},{name:`City of San Jose`,role:`Real Party in Interest`},{name:`Lena Okafor`,role:`Intervenor`},{name:`Tomás Herrera`,role:`Witness`}];shown=ut(()=>this.all()?this.parties:this.parties.slice(0,4));static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-party-list-many-demo`]],decls:8,vars:5,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`p-4`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[1,`font-semibold`],[`label`,`All parties`,`size`,`sm`,3,`people`,`max`],[3,`parties`],[`variant`,`ghost`,`size`,`sm`,1,`self-start`,3,`click`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`h3`,2),G_(3),Lf(),uc(4,`scsc-avatar-group`,3),Lf(),uc(5,`scsc-party-list`,4),Ga(6,`scsc-button`,5),lc(`click`,function(){return t.all.set(!t.all())}),G_(7),Lf()()),e&2&&(Jb(3),$f(`Parties (`,t.parties.length,`)`),Jb(),Pv(`people`,t.parties)(`max`,4),Jb(),Pv(`parties`,t.shown()),Jb(2),$f(` `,t.all()?`Show fewer`:`Show all `+t.parties.length+` parties`,` `))},dependencies:[JF,sn,Ar],encapsulation:2})};var f={"party-list-add":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscButton,
  ScscFormField,
  ScscInput,
  ScscPartyList,
  ScscSelect,
  ScscText,
  type ScscParty,
} from '@scscourt/design';

@Component({
  selector: 'app-party-list-add-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscButton,
    ScscFormField,
    ScscInput,
    ScscPartyList,
    ScscSelect,
    ScscText,
  ],
  template: \`
    <div class="grid max-w-3xl gap-8 md:grid-cols-2">
      <form [formGroup]="form" (ngSubmit)="add()" class="flex flex-col gap-4" novalidate>
        <scsc-form-field label="Name" for="party-add-name" required [error]="nameError()">
          <input scsc-input id="party-add-name" formControlName="name" [invalid]="!!nameError()" />
        </scsc-form-field>
        <scsc-form-field label="Role" for="party-add-role">
          <select scsc-select id="party-add-role" formControlName="role">
            <option>Plaintiff</option>
            <option>Defendant</option>
            <option>Cross-defendant</option>
            <option>Attorney</option>
          </select>
        </scsc-form-field>
        @if (form.controls.role.value === 'Attorney') {
          <scsc-form-field label="Representing" for="party-add-for" hint="e.g. for Defendant">
            <input scsc-input id="party-add-for" formControlName="representing" />
          </scsc-form-field>
        }
        <div>
          <scsc-button variant="primary" nativeType="submit">Add party</scsc-button>
        </div>
      </form>

      <div class="flex flex-col gap-2">
        <scsc-party-list [parties]="parties()" />
        <!-- Announce the change: the list itself is not a live region. -->
        <scsc-text tone="muted" size="sm" role="status">{{ announcement() }}</scsc-text>
      </div>
    </div>
  \`,
})
export class PartyListAddDemo {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    role: ['Cross-defendant'],
    representing: [''],
  });

  protected readonly parties = signal<ScscParty[]>([
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Northgate Property Management, Inc.', role: 'Defendant' },
  ]);
  protected readonly announcement = signal('');

  protected nameError(): string {
    const c = this.form.controls.name;
    return c.invalid && (c.dirty || c.touched)
      ? 'Enter the party name as it appears on the filing.'
      : '';
  }

  protected add(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const { name, role, representing } = this.form.getRawValue();
    const party: ScscParty =
      role === 'Attorney' && representing ? { name, role, representing } : { name, role };
    this.parties.update((list) => [...list, party]);
    this.announcement.set(\`Added \${name} as \${role}. \${this.parties().length} parties.\`);
    this.form.reset();
  }
}
`,html:`<div class="grid max-w-3xl gap-8 md:grid-cols-2">
  <form [formGroup]="form" (ngSubmit)="add()" class="flex flex-col gap-4" novalidate>
    <scsc-form-field label="Name" for="party-add-name" required [error]="nameError()">
      <input scsc-input id="party-add-name" formControlName="name" [invalid]="!!nameError()" />
    </scsc-form-field>
    <scsc-form-field label="Role" for="party-add-role">
      <select scsc-select id="party-add-role" formControlName="role">
        <option>Plaintiff</option>
        <option>Defendant</option>
        <option>Cross-defendant</option>
        <option>Attorney</option>
      </select>
    </scsc-form-field>
    @if (form.controls.role.value === 'Attorney') {
      <scsc-form-field label="Representing" for="party-add-for" hint="e.g. for Defendant">
        <input scsc-input id="party-add-for" formControlName="representing" />
      </scsc-form-field>
    }
    <div>
      <scsc-button variant="primary" nativeType="submit">Add party</scsc-button>
    </div>
  </form>

  <div class="flex flex-col gap-2">
    <scsc-party-list [parties]="parties()" />
    <!-- Announce the change: the list itself is not a live region. -->
    <scsc-text tone="muted" size="sm" role="status">{{ announcement() }}</scsc-text>
  </div>
</div>
`},"party-list-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscPartyList, type ScscParty } from '@scscourt/design';

@Component({
  selector: 'app-party-list-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPartyList],
  template: \`
    <div class="max-w-md">
      <scsc-party-list [parties]="parties" />
    </div>
  \`,
})
export class PartyListBasicDemo {
  protected readonly parties: ScscParty[] = [
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Northgate Property Management, Inc.', role: 'Defendant' },
    { name: 'Daniel Reyes, Esq.', role: 'Attorney', representing: 'for Plaintiff' },
    { name: 'Sandra Liu, Esq.', role: 'Attorney', representing: 'for Defendant' },
  ];
}
`,html:`<div class="max-w-md">
  <scsc-party-list [parties]="parties" />
</div>
`},"party-list-card":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscCard, ScscPartyList, type ScscParty } from '@scscourt/design';

@Component({
  selector: 'app-party-list-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscPartyList],
  template: \`
    <scsc-card [title]="'Parties (' + parties.length + ')'" class="max-w-md">
      <scsc-party-list [parties]="parties" />
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-button variant="ghost" size="sm">Add party</scsc-button>
      </div>
    </scsc-card>
  \`,
})
export class PartyListCardDemo {
  protected readonly parties: ScscParty[] = [
    { name: 'Rohan Patel', role: 'Petitioner' },
    { name: 'Silicon Valley Transit Authority', role: 'Respondent' },
    { name: 'Office of the County Counsel', role: 'Attorney', representing: 'for Respondent' },
  ];
}
`,html:`<scsc-card [title]="'Parties (' + parties.length + ')'" class="max-w-md">
  <scsc-party-list [parties]="parties" />
  <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
    <scsc-button variant="ghost" size="sm">Add party</scsc-button>
  </div>
</scsc-card>
`},"party-list-counsel":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscPartyList, type ScscParty } from '@scscourt/design';

@Component({
  selector: 'app-party-list-counsel-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscPartyList],
  template: \`
    <div class="grid max-w-3xl gap-6 md:grid-cols-2">
      <section aria-labelledby="counsel-represented">
        <h3 id="counsel-represented" class="mb-2 font-semibold">Represented</h3>
        <scsc-party-list [parties]="represented" />
      </section>
      <section aria-labelledby="counsel-self">
        <h3 id="counsel-self" class="mb-2 font-semibold">Self-represented</h3>
        <scsc-party-list [parties]="selfRepresented" />
      </section>
    </div>
  \`,
})
export class PartyListCounselDemo {
  protected readonly represented: ScscParty[] = [
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Jordan Ellis, Esq.', role: 'Attorney', representing: 'for Plaintiff' },
    { name: 'Northgate Property Mgmt., LLC', role: 'Defendant' },
    { name: 'Hartwell & Lee LLP', role: 'Attorney', representing: 'for Defendant' },
  ];
  protected readonly selfRepresented: ScscParty[] = [
    { name: 'Anita Patel', role: 'Petitioner', representing: 'Self-represented' },
    { name: 'Rohan Patel', role: 'Respondent', representing: 'Self-represented' },
  ];
}
`,html:`<div class="grid max-w-3xl gap-6 md:grid-cols-2">
  <section aria-labelledby="counsel-represented">
    <h3 id="counsel-represented" class="mb-2 font-semibold">Represented</h3>
    <scsc-party-list [parties]="represented" />
  </section>
  <section aria-labelledby="counsel-self">
    <h3 id="counsel-self" class="mb-2 font-semibold">Self-represented</h3>
    <scsc-party-list [parties]="selfRepresented" />
  </section>
</div>
`},"party-list-many":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscAvatarGroup, ScscButton, ScscPartyList, type ScscParty } from '@scscourt/design';

@Component({
  selector: 'app-party-list-many-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatarGroup, ScscButton, ScscPartyList],
  template: \`
    <div class="flex max-w-xl flex-col gap-3 rounded-box border border-base-300 p-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="font-semibold">Parties ({{ parties.length }})</h3>
        <scsc-avatar-group label="All parties" [people]="parties" [max]="4" size="sm" />
      </div>
      <scsc-party-list [parties]="shown()" />
      <scsc-button variant="ghost" size="sm" class="self-start" (click)="all.set(!all())">
        {{ all() ? 'Show fewer' : 'Show all ' + parties.length + ' parties' }}
      </scsc-button>
    </div>
  \`,
})
export class PartyListManyDemo {
  protected readonly all = signal(false);
  protected readonly parties: ScscParty[] = [
    { name: 'Baylands Tenants Association', role: 'Plaintiff' },
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Daniel Reyes', role: 'Plaintiff' },
    { name: 'Sandra Liu', role: 'Plaintiff' },
    { name: 'Northgate Property Mgmt., LLC', role: 'Defendant' },
    { name: 'Robert Whitfield', role: 'Defendant' },
    { name: 'City of San Jose', role: 'Real Party in Interest' },
    { name: 'Lena Okafor', role: 'Intervenor' },
    { name: 'Tom\xE1s Herrera', role: 'Witness' },
  ];
  protected readonly shown = computed(() => (this.all() ? this.parties : this.parties.slice(0, 4)));
}
`,html:`<div class="flex max-w-xl flex-col gap-3 rounded-box border border-base-300 p-4">
  <div class="flex flex-wrap items-center justify-between gap-3">
    <h3 class="font-semibold">Parties ({{ parties.length }})</h3>
    <scsc-avatar-group label="All parties" [people]="parties" [max]="4" size="sm" />
  </div>
  <scsc-party-list [parties]="shown()" />
  <scsc-button variant="ghost" size="sm" class="self-start" (click)="all.set(!all())">
    {{ all() ? 'Show fewer' : 'Show all ' + parties.length + ' parties' }}
  </scsc-button>
</div>
`}};var Ce={slug:`party-list`,name:`Party List`,classes:[`ScscPartyList`],category:`Court`,whenToUse:[`The parties and counsel on a case, anywhere a case is shown in detail. Roles are free text so "Petitioner", "Respondent", "Minor", or "Conservatee" all work.`,'Use `representing` for counsel ("for Plaintiff") rather than encoding it in the name.',"Inside `scsc-case-file` the Parties tab is this component; use it standalone on summary panels or in a card."],demos:[{id:`party-list-basic`,title:`Basic`,description:"Parties and their counsel; `representing` renders as the secondary line.",component:b,source:f[`party-list-basic`]},{id:`party-list-card`,title:`In a card`,description:"Wrapped in `scsc-card` with the count in the title and an action in the footer slot.",component:D,source:f[`party-list-card`]},{id:`party-list-add`,title:`Adding a party`,description:"A Reactive Form appends to the `parties` signal; `representing` appears only for attorneys, and a status line announces the change.",component:S,source:f[`party-list-add`]},{id:`party-list-counsel`,title:`Counsel and self-represented parties`,description:"Attorneys carry a `representing` note; self-represented parties say so in words.",component:C,source:f[`party-list-counsel`]},{id:`party-list-many`,title:`Many parties with "+N"`,description:`An avatar group ("+5" opens the full list) beside the first four parties, and a button that shows them all.`,component:x,source:f[`party-list-many`]}],a11y:["Renders a semantic `<ul>` so screen readers announce the number of parties.",'The list is not a live region; when parties are added or removed on the page, announce it in a `role="status"` line (as the add demo does) or a toast.',`Avatars are initials derived from the name and are decorative; the name is the text.`],related:[`case-file`,`avatar`,`list`,`contact-block`]};export{Ce as PARTY_LIST_DOCS};