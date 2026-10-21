import{An as XN,E as Bue,Er as hr,Fr as kn,Gs as zS,In as Xz,K as Fi,Ms as uc,Na as Jb,Ss as rD,Xa as Pv,Y as Fs,Zo as i_,_s as o_,bn as Vz,cs as lc,ds as nD,et as Ha,kt as NE,m as Aa,oi as que,pi as sn,qi as yr,ra as Af,ta as $f,tt as Hue,va as G_,vt as Kue,wa as HS,xn as WA,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var b=class o{form=new Aa({understood:new Fi(!1,{nonNullable:!0,validators:Fs.requiredTrue}),recordAccuracy:new Fi(!1,{nonNullable:!0,validators:Fs.requiredTrue})});values=Ha(this.form.valueChanges,{initialValue:this.form.getRawValue()});submitted=q(!1);status=q(``);errorFor(r){return this.submitted()&&!this.values()[r]?`Check the box to confirm you have read this notice.`:``}submit(){this.submitted.set(!0),this.status.set(this.form.valid?`Filed. Your confirmation number is EF-2026-004821.`:``)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-acknowledgement-demo`]],decls:12,vars:7,consts:[[`novalidate`,``,1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[3,`level`],[`size`,`sm`],[`preset`,`not-legal-advice`,`acknowledge`,``,`required`,``,`acknowledgeLabel`,`I understand that court staff cannot give me legal advice about my case.`,`formControlName`,`understood`,3,`headingLevel`,`acknowledgeError`],[`preset`,`electronic-record`,`acknowledge`,``,`required`,``,`acknowledgeLabel`,`I understand that the online record may be delayed or contain errors.`,`formControlName`,`recordAccuracy`,3,`headingLevel`,`acknowledgeError`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`nativeType`,`submit`],[`role`,`status`,1,`text-sm`]],template:function(e,s){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return s.submit()}),Ga(1,`scsc-heading`,1),G_(2,`Step 3 of 3: Review and file`),Lf(),Ga(3,`scsc-text`,2),G_(4,`Answer – Unlawful Detainer (UD-105) · Case 24CV012345`),Lf(),Ga(5,`scsc-legal-notice`,3),HS(),Lf(),Ga(6,`scsc-legal-notice`,4),HS(),Lf(),Ga(7,`div`,5)(8,`scsc-button`,6),G_(9,`File my Answer`),Lf(),Ga(10,`span`,7),G_(11),Lf()()()),e&2&&(Pv(`formGroup`,s.form),Jb(),Pv(`level`,2),Jb(4),Pv(`headingLevel`,3)(`acknowledgeError`,s.errorFor(`understood`)),zS(),Jb(),Pv(`headingLevel`,3)(`acknowledgeError`,s.errorFor(`recordAccuracy`)),zS(),Jb(5),nD(s.status()))},dependencies:[Kue,Bue,Hue,que,WA,Vz,Xz,sn,kn,yr,NE],encapsulation:2})};var x=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-custom-demo`]],decls:9,vars:2,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[`preset`,`custom`,`heading`,`Before you pay`,3,`headingLevel`],[`preset`,`electronic-record`,`learnMoreLink`,`.`,3,`headingLevel`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`scsc-legal-notice`,1)(2,`p`),G_(3,` Payments are final once processed. Paying a traffic citation is a plea of guilty or no contest and may add a point to your driving record. `),Lf(),Ga(4,`p`),G_(5,`A non-refundable convenience fee of $3.50 applies to card payments.`),Lf()(),Ga(6,`scsc-legal-notice`,2)(7,`p`),G_(8,` Criminal case information online is limited by Cal. Rules of Court, rule 2.503. Visit the Clerk's Office at the Hall of Justice for the full record. `),Lf()()()),e&2&&(Jb(),Pv(`headingLevel`,3),Jb(5),Pv(`headingLevel`,3))},dependencies:[yr],encapsulation:2})};var W=(o,r)=>r.number;function $(o,r){if(o&1&&(Ga(0,`li`,4)(1,`span`)(2,`span`,5),G_(3),Lf(),G_(4),Lf(),Ga(5,`scsc-text`,6),G_(6),Lf()()),o&2){let e=r.$implicit;Jb(3),nD(e.number),Jb(),$f(` · `,e.title),Jb(2),rD(`Filed `,e.filed,` · `,e.status)}}var w=class o{results=[{number:`24CV012345`,title:`Alvarez v. Northgate Property Mgmt.`,filed:`Mar 4, 2024`,status:`Active`},{number:`24FL019876`,title:`In re the Marriage of Chen`,filed:`May 21, 2024`,status:`Judgment entered`}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-electronic-record-demo`]],decls:7,vars:2,consts:[[1,`flex`,`flex-col`,`gap-4`],[3,`level`],[`preset`,`electronic-record`,`variant`,`banner`,3,`headingLevel`],[1,`divide-y`,`divide-base-300`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`flex-wrap`,`items-baseline`,`justify-between`,`gap-2`,`px-4`,`py-3`],[1,`tnum`,`font-medium`],[`size`,`sm`,`tone`,`muted`,`tnum`,``]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`scsc-heading`,1),G_(2,`Case search results`),Lf(),uc(3,`scsc-legal-notice`,2),Ga(4,`ul`,3),o_(5,$,7,4,`li`,4,W),Lf()()),e&2&&(Jb(),Pv(`level`,2),Jb(2),Pv(`headingLevel`,3),Jb(2),i_(s.results))},dependencies:[kn,yr,NE],encapsulation:2})};var S=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-footer-demo`]],decls:3,vars:0,consts:[[`preset`,`electronic-record`,`variant`,`compact`,1,`basis-full`]],template:function(e,s){e&1&&(Ga(0,`scsc-footer`),uc(1,`scsc-legal-bar`)(2,`scsc-legal-notice`,0),Lf())},dependencies:[XN,hr,yr],encapsulation:2})};var C=class o{links=[{id:`privacy`,label:`Privacy`,link:`.`},{id:`terms`,label:`Terms of use`,link:`.`},{id:`accessibility`,label:`Accessibility`,link:`.`},{id:`language-access`,label:`Language access`,link:`.`},{id:`rules`,label:`California Rules of Court`,href:`https://courts.ca.gov/rules-forms/rules-court`,external:!0}];static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-legal-bar-demo`]],decls:1,vars:1,consts:[[`copyright`,`© 2026 Superior Court of California, County of Santa Clara`,3,`links`]],template:function(e,s){e&1&&uc(0,`scsc-legal-bar`,0),e&2&&Pv(`links`,s.links)},dependencies:[hr],encapsulation:2})};var L=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-not-legal-advice-demo`]],decls:6,vars:2,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[3,`level`],[`size`,`sm`],[`preset`,`not-legal-advice`,`learnMoreLink`,`.`,3,`headingLevel`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`scsc-heading`,1),G_(2,`Responding to an eviction (unlawful detainer)`),Lf(),Ga(3,`scsc-text`,2),G_(4,` You have 10 court days after you are served to file a response. Most people file an Answer (form UD-105). `),Lf(),uc(5,`scsc-legal-notice`,3),Lf()),e&2&&(Jb(),Pv(`level`,2),Jb(4),Pv(`headingLevel`,3))},dependencies:[kn,yr,NE],encapsulation:2})};var k=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-self-help-demo`]],decls:7,vars:2,consts:[[1,`grid`,`max-w-4xl`,`gap-6`,`md:grid-cols-[1fr_20rem]`],[1,`flex`,`flex-col`,`gap-2`],[3,`level`],[`size`,`sm`],[`preset`,`self-help`,`learnMoreLink`,`.`,3,`headingLevel`]],template:function(e,s){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3,`Request a fee waiver`),Lf(),Ga(4,`scsc-text`,3),G_(5,` If you cannot afford court fees, ask the court to waive them with form FW-001. The court decides within 5 court days. `),Lf()(),uc(6,`scsc-legal-notice`,4),Lf()),e&2&&(Jb(2),Pv(`level`,2),Jb(4),Pv(`headingLevel`,3))},dependencies:[kn,yr,NE],encapsulation:2})};var D=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-legal-notice-translation-demo`]],decls:7,vars:1,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[`preset`,`translation`,`variant`,`inline`,`learnMoreLink`,`.`],[`lang`,`es`,1,`flex`,`flex-col`,`gap-2`],[3,`level`],[`size`,`sm`]],template:function(e,s){e&1&&(Ga(0,`div`,0),uc(1,`scsc-legal-notice`,1),Ga(2,`div`,2)(3,`scsc-heading`,3),G_(4,`Cómo pagar una multa de tránsito`),Lf(),Ga(5,`scsc-text`,4),G_(6,` Puede pagar en línea, por correo o en persona en el Hall of Justice, 191 N. First Street, San José. `),Lf()()()),e&2&&(Jb(3),Pv(`level`,2))},dependencies:[kn,yr,NE],encapsulation:2})};var u={"legal-notice-acknowledgement":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscButton, ScscHeading, ScscLegalNotice, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-acknowledgement-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscButton, ScscHeading, ScscLegalNotice, ScscText],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4" novalidate>
      <scsc-heading [level]="2">Step 3 of 3: Review and file</scsc-heading>
      <scsc-text size="sm">Answer \u2013 Unlawful Detainer (UD-105) \xB7 Case 24CV012345</scsc-text>

      <scsc-legal-notice
        preset="not-legal-advice"
        [headingLevel]="3"
        acknowledge
        required
        acknowledgeLabel="I understand that court staff cannot give me legal advice about my case."
        [acknowledgeError]="errorFor('understood')"
        formControlName="understood"
      />
      <scsc-legal-notice
        preset="electronic-record"
        [headingLevel]="3"
        acknowledge
        required
        acknowledgeLabel="I understand that the online record may be delayed or contain errors."
        [acknowledgeError]="errorFor('recordAccuracy')"
        formControlName="recordAccuracy"
      />

      <div class="flex flex-wrap items-center gap-3">
        <scsc-button nativeType="submit">File my Answer</scsc-button>
        <span class="text-sm" role="status">{{ status() }}</span>
      </div>
    </form>
  \`,
})
export class LegalNoticeAcknowledgementDemo {
  protected readonly form = new FormGroup({
    understood: new FormControl(false, { nonNullable: true, validators: Validators.requiredTrue }),
    recordAccuracy: new FormControl(false, {
      nonNullable: true,
      validators: Validators.requiredTrue,
    }),
  });
  private readonly values = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue(),
  });
  private readonly submitted = signal(false);
  protected readonly status = signal('');

  protected errorFor(name: 'understood' | 'recordAccuracy'): string {
    return this.submitted() && !this.values()[name]
      ? 'Check the box to confirm you have read this notice.'
      : '';
  }

  protected submit(): void {
    this.submitted.set(true);
    this.status.set(this.form.valid ? 'Filed. Your confirmation number is EF-2026-004821.' : '');
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-2xl flex-col gap-4" novalidate>
  <scsc-heading [level]="2">Step 3 of 3: Review and file</scsc-heading>
  <scsc-text size="sm">Answer \u2013 Unlawful Detainer (UD-105) \xB7 Case 24CV012345</scsc-text>

  <scsc-legal-notice
    preset="not-legal-advice"
    [headingLevel]="3"
    acknowledge
    required
    acknowledgeLabel="I understand that court staff cannot give me legal advice about my case."
    [acknowledgeError]="errorFor('understood')"
    formControlName="understood"
  />
  <scsc-legal-notice
    preset="electronic-record"
    [headingLevel]="3"
    acknowledge
    required
    acknowledgeLabel="I understand that the online record may be delayed or contain errors."
    [acknowledgeError]="errorFor('recordAccuracy')"
    formControlName="recordAccuracy"
  />

  <div class="flex flex-wrap items-center gap-3">
    <scsc-button nativeType="submit">File my Answer</scsc-button>
    <span class="text-sm" role="status">{{ status() }}</span>
  </div>
</form>
`},"legal-notice-custom":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscLegalNotice } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-custom-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLegalNotice],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <!-- preset="custom": your own heading, and the projected content is the body. -->
      <scsc-legal-notice preset="custom" heading="Before you pay" [headingLevel]="3">
        <p>
          Payments are final once processed. Paying a traffic citation is a plea of guilty or no
          contest and may add a point to your driving record.
        </p>
        <p>A non-refundable convenience fee of $3.50 applies to card payments.</p>
      </scsc-legal-notice>

      <!-- Any preset keeps its heading and icon; projected content replaces only its text. -->
      <scsc-legal-notice preset="electronic-record" [headingLevel]="3" learnMoreLink=".">
        <p>
          Criminal case information online is limited by Cal. Rules of Court, rule 2.503. Visit the
          Clerk's Office at the Hall of Justice for the full record.
        </p>
      </scsc-legal-notice>
    </div>
  \`,
})
export class LegalNoticeCustomDemo {}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <!-- preset="custom": your own heading, and the projected content is the body. -->
  <scsc-legal-notice preset="custom" heading="Before you pay" [headingLevel]="3">
    <p>
      Payments are final once processed. Paying a traffic citation is a plea of guilty or no
      contest and may add a point to your driving record.
    </p>
    <p>A non-refundable convenience fee of $3.50 applies to card payments.</p>
  </scsc-legal-notice>

  <!-- Any preset keeps its heading and icon; projected content replaces only its text. -->
  <scsc-legal-notice preset="electronic-record" [headingLevel]="3" learnMoreLink=".">
    <p>
      Criminal case information online is limited by Cal. Rules of Court, rule 2.503. Visit the
      Clerk's Office at the Hall of Justice for the full record.
    </p>
  </scsc-legal-notice>
</div>
`},"legal-notice-electronic-record":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscLegalNotice, ScscText } from '@scscourt/design';

interface CaseResult {
  number: string;
  title: string;
  filed: string;
  status: string;
}

@Component({
  selector: 'app-legal-notice-electronic-record-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscLegalNotice, ScscText],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-heading [level]="2">Case search results</scsc-heading>
      <!-- Above the results, so it is read before anyone relies on them. -->
      <scsc-legal-notice preset="electronic-record" variant="banner" [headingLevel]="3" />
      <ul class="divide-y divide-base-300 rounded-box border border-base-300 bg-base-100">
        @for (c of results; track c.number) {
          <li class="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3">
            <span
              ><span class="tnum font-medium">{{ c.number }}</span> \xB7 {{ c.title }}</span
            >
            <scsc-text size="sm" tone="muted" tnum>Filed {{ c.filed }} \xB7 {{ c.status }}</scsc-text>
          </li>
        }
      </ul>
    </div>
  \`,
})
export class LegalNoticeElectronicRecordDemo {
  protected readonly results: CaseResult[] = [
    {
      number: '24CV012345',
      title: 'Alvarez v. Northgate Property Mgmt.',
      filed: 'Mar 4, 2024',
      status: 'Active',
    },
    {
      number: '24FL019876',
      title: 'In re the Marriage of Chen',
      filed: 'May 21, 2024',
      status: 'Judgment entered',
    },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-heading [level]="2">Case search results</scsc-heading>
  <!-- Above the results, so it is read before anyone relies on them. -->
  <scsc-legal-notice preset="electronic-record" variant="banner" [headingLevel]="3" />
  <ul class="divide-y divide-base-300 rounded-box border border-base-300 bg-base-100">
    @for (c of results; track c.number) {
      <li class="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3">
        <span
          ><span class="tnum font-medium">{{ c.number }}</span> \xB7 {{ c.title }}</span
        >
        <scsc-text size="sm" tone="muted" tnum>Filed {{ c.filed }} \xB7 {{ c.status }}</scsc-text>
      </li>
    }
  </ul>
</div>
`},"legal-notice-footer":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscFooter, ScscLegalBar, ScscLegalNotice } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-footer-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFooter, ScscLegalBar, ScscLegalNotice],
  template: \`
    <scsc-footer>
      <scsc-legal-bar />
      <!-- basis-full puts the disclaimer on its own line under the links. -->
      <scsc-legal-notice preset="electronic-record" variant="compact" class="basis-full" />
    </scsc-footer>
  \`,
})
export class LegalNoticeFooterDemo {}
`,html:`<scsc-footer>
  <scsc-legal-bar />
  <!-- basis-full puts the disclaimer on its own line under the links. -->
  <scsc-legal-notice preset="electronic-record" variant="compact" class="basis-full" />
</scsc-footer>
`},"legal-notice-legal-bar":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscLegalBar, type ScscLegalLink } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-legal-bar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscLegalBar],
  template: \`
    <scsc-legal-bar
      [links]="links"
      copyright="\xA9 2026 Superior Court of California, County of Santa Clara"
    />
  \`,
})
export class LegalNoticeLegalBarDemo {
  // In-app pages use \`link\` (routerLink); other sites use \`href\`, and \`external\` opens a new tab.
  protected readonly links: ScscLegalLink[] = [
    { id: 'privacy', label: 'Privacy', link: '.' },
    { id: 'terms', label: 'Terms of use', link: '.' },
    { id: 'accessibility', label: 'Accessibility', link: '.' },
    { id: 'language-access', label: 'Language access', link: '.' },
    {
      id: 'rules',
      label: 'California Rules of Court',
      href: 'https://courts.ca.gov/rules-forms/rules-court',
      external: true,
    },
  ];
}
`,html:`<scsc-legal-bar
  [links]="links"
  copyright="\xA9 2026 Superior Court of California, County of Santa Clara"
/>
`},"legal-notice-not-legal-advice":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscLegalNotice, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-not-legal-advice-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscLegalNotice, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <scsc-heading [level]="2">Responding to an eviction (unlawful detainer)</scsc-heading>
      <scsc-text size="sm">
        You have 10 court days after you are served to file a response. Most people file an Answer
        (form UD-105).
      </scsc-text>
      <!-- The link text comes from the preset: "Find free and low-cost legal help". -->
      <scsc-legal-notice preset="not-legal-advice" [headingLevel]="3" learnMoreLink="." />
    </div>
  \`,
})
export class LegalNoticeNotLegalAdviceDemo {}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <scsc-heading [level]="2">Responding to an eviction (unlawful detainer)</scsc-heading>
  <scsc-text size="sm">
    You have 10 court days after you are served to file a response. Most people file an Answer
    (form UD-105).
  </scsc-text>
  <!-- The link text comes from the preset: "Find free and low-cost legal help". -->
  <scsc-legal-notice preset="not-legal-advice" [headingLevel]="3" learnMoreLink="." />
</div>
`},"legal-notice-self-help":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscLegalNotice, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-self-help-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscLegalNotice, ScscText],
  template: \`
    <div class="grid max-w-4xl gap-6 md:grid-cols-[1fr_20rem]">
      <div class="flex flex-col gap-2">
        <scsc-heading [level]="2">Request a fee waiver</scsc-heading>
        <scsc-text size="sm">
          If you cannot afford court fees, ask the court to waive them with form FW-001. The court
          decides within 5 court days.
        </scsc-text>
      </div>
      <scsc-legal-notice preset="self-help" [headingLevel]="3" learnMoreLink="." />
    </div>
  \`,
})
export class LegalNoticeSelfHelpDemo {}
`,html:`<div class="grid max-w-4xl gap-6 md:grid-cols-[1fr_20rem]">
  <div class="flex flex-col gap-2">
    <scsc-heading [level]="2">Request a fee waiver</scsc-heading>
    <scsc-text size="sm">
      If you cannot afford court fees, ask the court to waive them with form FW-001. The court
      decides within 5 court days.
    </scsc-text>
  </div>
  <scsc-legal-notice preset="self-help" [headingLevel]="3" learnMoreLink="." />
</div>
`},"legal-notice-translation":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHeading, ScscLegalNotice, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-legal-notice-translation-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscLegalNotice, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <!-- One line above machine-translated content; lang marks the translated part. -->
      <scsc-legal-notice preset="translation" variant="inline" learnMoreLink="." />
      <div lang="es" class="flex flex-col gap-2">
        <scsc-heading [level]="2">C\xF3mo pagar una multa de tr\xE1nsito</scsc-heading>
        <scsc-text size="sm">
          Puede pagar en l\xEDnea, por correo o en persona en el Hall of Justice, 191 N. First Street,
          San Jos\xE9.
        </scsc-text>
      </div>
    </div>
  \`,
})
export class LegalNoticeTranslationDemo {}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <!-- One line above machine-translated content; lang marks the translated part. -->
  <scsc-legal-notice preset="translation" variant="inline" learnMoreLink="." />
  <div lang="es" class="flex flex-col gap-2">
    <scsc-heading [level]="2">C\xF3mo pagar una multa de tr\xE1nsito</scsc-heading>
    <scsc-text size="sm">
      Puede pagar en l\xEDnea, por correo o en persona en el Hall of Justice, 191 N. First Street,
      San Jos\xE9.
    </scsc-text>
  </div>
</div>
`}};var Fe={slug:`legal-notice`,name:`Legal notice & legal bar`,classes:[`ScscLegalNotice`,`ScscLegalBar`],category:`Specialized`,summary:'**Draft copy — court counsel review required:** the preset wording (`SCSC_LEGAL_COPY`) is a plain-language draft that court counsel must approve before production; supply the approved text with `provideScscLegalCopy()`. `scsc-legal-notice` shows a standard disclaimer: "not legal advice", the electronic-record notice (Cal. Rules of Court, rules 2.500–2.507), the Self-Help Center\'s limits, or a machine-translation notice, and can add an acknowledgement checkbox for e-filing. `scsc-legal-bar` is the row of legal links (Privacy, Terms of use, Accessibility, Language access, Cookie preferences) for the footer.',whenToUse:["`not-legal-advice` on self-help content, form instructions and anywhere staff explain procedures. `electronic-record` on case search, case detail and calendars (and in the footer, `compact`), wherever people read the online record. `self-help` next to Self-Help Center services. `translation` above machine-translated pages.","`variant`: `callout` (a bordered box with a heading) in page content; `banner` (a full-width band) above search results; `inline` (one line with an icon) right next to what it qualifies; `compact` (small text, no icon) in a footer.",'Projected content replaces the preset body; `preset="custom"` with `heading` is for notices the presets do not cover. `ruleCitation` changes the citation in the electronic-record text.',"For e-filing, add `acknowledge` and bind it like any checkbox: `formControlName` with `Validators.requiredTrue`, or `[(acknowledged)]`. Show `acknowledgeError` after a rejected submit.",'Use `scsc-legal-bar` in the default slot of `scsc-footer`. Its default links point to `/privacy`, `/terms`, `/accessibility` and `/language-access`; pass `links` for other pages (`link` for in-app routes, `href` for other sites). "Cookie preferences" appears on its own when `provideScscConsent()` is in use.','A legal notice is not an alert: it never uses the error colour or `role="alert"`. Put deadlines and warnings in `scsc-alert`.'],setup:`// Icons the notice and the bar draw (SCSC_ICONS includes them all)
import { ExternalLink, HandHelping, Info, Languages, Scale, ScrollText } from 'lucide-angular';
provideScscIcons({ ExternalLink, HandHelping, Info, Languages, Scale, ScrollText });

// Replace the draft wording once court counsel has approved it
provideScscLegalCopy({
  'not-legal-advice': { body: 'Approved wording\u2026' },
});`,demos:[{id:`legal-notice-not-legal-advice`,title:`Not legal advice`,description:"The default preset as a `callout` on a self-help page, with a descriptive learn-more link (`learnMoreLink` for an in-app route, `learnMoreHref` otherwise).",component:L,source:u[`legal-notice-not-legal-advice`]},{id:`legal-notice-electronic-record`,title:`Electronic record (rules 2.500–2.507)`,description:'The `banner` variant above case search results. The body cites `ruleCitation`, "Cal. Rules of Court, rules 2.500–2.507" by default.',component:w,source:u[`legal-notice-electronic-record`],layout:`full-bleed`},{id:`legal-notice-self-help`,title:`Self-Help Center`,description:`What Self-Help Center staff can and cannot do, beside a procedure.`,component:k,source:u[`legal-notice-self-help`]},{id:`legal-notice-translation`,title:`Machine translation`,description:"The `inline` variant above translated content: the English version controls. The translated part carries `lang`.",component:D,source:u[`legal-notice-translation`]},{id:`legal-notice-footer`,title:`In the footer`,description:'`scsc-legal-bar` and a `compact` electronic-record notice in the default slot of `scsc-footer`; `class="basis-full"` gives the notice its own line.',component:S,source:u[`legal-notice-footer`],layout:`full-bleed`},{id:`legal-notice-acknowledgement`,title:`E-filing acknowledgement`,description:"Two notices with `acknowledge` in a reactive form, each `Validators.requiredTrue`. Press File without checking them to see the errors, which are linked to the checkboxes.",component:b,source:u[`legal-notice-acknowledgement`]},{id:`legal-notice-custom`,title:`Custom copy`,description:'`preset="custom"` with a `heading` and projected paragraphs, and a preset whose body is replaced by projected content.',component:x,source:u[`legal-notice-custom`]},{id:`legal-notice-legal-bar`,title:`Legal bar with custom links`,description:"In-app `link`s, an `external` link that opens in a new tab (with an icon and hidden text saying so), and a `copyright` line.",component:C,source:u[`legal-notice-legal-bar`]}],aria:['`callout` and `banner`: the notice is a region (`role="region"`) named by its heading through `aria-labelledby`; `headingLevel` sets the heading rank (2–6). `inline` and `compact`: `role="note"`, named by `aria-label` (the heading text), with no heading.','The acknowledgement checkbox is described by the notice body (`aria-describedby`), and by `acknowledgeError` when set, which also sets `aria-invalid="true"`. `required` sets `aria-required="true"`.','`scsc-legal-bar` renders `<nav aria-label="Legal">` around a list of links; the dots between them are `aria-hidden`. External links say "(opens in a new tab)" in visually hidden text.'],appMustProvide:["Wording approved by court counsel (`provideScscLegalCopy()`), and translations for non-English pages.","A `headingLevel` that fits the page outline (the default is 2).","Real pages behind the legal bar links, or your own `links`.",`The acknowledgement error text, shown after a rejected submit.`],a11y:[`Plain language, at about an 8th-grade reading level. Learn-more links describe their destination ("Visit the Self-Help Center"), never a bare "Learn more".`,"The tone is informational: primary accent, neutral surfaces and ink text at `/80` or stronger. Nothing depends on colour.",`The acknowledgement is a native checkbox inside its label, so the whole label is the target. It follows the form control state (disabled, touched).`,"Legal bar links are at least 24px tall and wrap on narrow screens. The Cookie preferences item is a `<button>`, since it opens a dialog rather than a page."],related:[`consent-banner`,`footer`,`alert`,`banner`]};export{Fe as LEGAL_NOTICE_DOCS};