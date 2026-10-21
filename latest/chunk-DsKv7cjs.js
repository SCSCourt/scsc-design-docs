import{Aa as It,Ar as ja,Ca as Gv,Co as _2,Dn as Wue,Do as ae,E as Bue,Er as hr,Go as g,Gs as zS,Hs as y_,In as Xz,Lo as d_,Ma as JT,Ms as uc,Na as Jb,No as cc,Nr as jo,Pi as wN,Rs as w_,Vr as mN,Xa as Pv,Y as Fs,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,cs as lc,ds as nD,go as Xa,ha as Eg,ii as qo,ka as Ig,ks as t_,l as $ue,lr as ez,mn as Uue,ms as nu,nn as TN,nt as IA,oi as que,pi as sn,qi as yr,ra as Af,sn as Tr,t as $E,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,wr as hN,xn as WA,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var be=(o,r)=>r.value;function ve(o,r){if(o&1&&(uc(0,`scsc-page-header`,5),Ga(1,`scsc-alert`,6),G_(2),Lf(),Ga(3,`a`,7),G_(4,`Back to sign in`),Lf()),o&2){let e=y_();Jb(2),$f(` We sent a link to `,e.form.controls.email.value,`. Open it within 24 hours to finish creating your account. `)}}function Se(o,r){if(o&1&&uc(0,`scsc-error-summary`,10),o&2){let e=y_(2);Pv(`errors`,e.errors())}}function we(o,r){if(o&1&&(Ga(0,`option`,24),G_(1),Lf()),o&2){let e=r.$implicit;Pv(`value`,e.value),cc(`lang`,e.value),Jb(),nD(e.label)}}function xe(o,r){if(o&1){let e=d_();uc(0,`scsc-page-header`,8),Ga(1,`form`,9),lc(`ngSubmit`,function(){Eg(e);let Y=y_();return Ig(Y.submit())}),JT(2,Se,1,1,`scsc-error-summary`,10),Ga(3,`div`,11)(4,`scsc-form-field`,12)(5,`input`,13),HS(),Lf()(),Ga(6,`scsc-form-field`,14)(7,`input`,15),HS(),Lf()()(),Ga(8,`scsc-form-field`,16)(9,`input`,17),HS(),Lf()(),Ga(10,`scsc-form-field`,18)(11,`input`,19),HS(),Lf()(),Ga(12,`scsc-form-field`,20)(13,`input`,21),HS(),Lf()(),Ga(14,`scsc-form-field`,22)(15,`select`,23),HS(),o_(16,we,2,3,`option`,24,be),Lf()(),Ga(18,`scsc-legal-notice`,25),HS(),Ga(19,`p`),G_(20,` Your account is for your own use. Information you file becomes part of the court record, and most of it is public. We use your contact details only for court business. `),Lf()(),Ga(21,`scsc-button`,26),G_(22,`Create account`),Lf(),Ga(23,`p`,27),G_(24,` Already have an account? `),Ga(25,`a`,28),G_(26,`Sign in`),Lf()()()}if(o&2){let e=y_();Jb(),Pv(`formGroup`,e.form),Jb(),t_(e.errors().length?2:-1),Jb(2),Pv(`error`,e.errorFor(`firstName`)),Jb(),Pv(`invalid`,e.invalid(`firstName`)),zS(),Jb(),Pv(`error`,e.errorFor(`lastName`)),Jb(),Pv(`invalid`,e.invalid(`lastName`)),zS(),Jb(),Pv(`error`,e.errorFor(`email`)),Jb(),Pv(`invalid`,e.invalid(`email`)),zS(),Jb(),Pv(`error`,e.errorFor(`password`)),Jb(),Pv(`invalid`,e.invalid(`password`)),zS(),Jb(),Pv(`error`,e.errorFor(`confirm`)),Jb(),Pv(`invalid`,e.invalid(`confirm`)),zS(),Jb(2),zS(),Jb(),i_(e.languages),Jb(2),Pv(`acknowledgeError`,e.invalid(`terms`)?e.messages.terms:``),zS()}}var z={firstName:`Enter your first name.`,lastName:`Enter your last name.`,email:`Enter an email address like name@example.com.`,password:`Use at least 12 characters for your password.`,confirm:`The two passwords don’t match.`,terms:`Agree to the terms of use to create an account.`};var U={firstName:`reg-first`,lastName:`reg-last`,email:`reg-email`,password:`reg-password`,confirm:`reg-confirm`,terms:`reg-terms`};function ke(o){let{password:r,confirm:e}=o.value;return e&&r!==e?{mismatch:!0}:null}var H=class o{fb=g(Wue).nonNullable;injector=g(ae);host=g(It);summary=_2(Tr);messages=z;legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];languages=[{value:`en`,label:`English`},{value:`es`,label:`Español`},{value:`vi`,label:`Tiếng Việt`},{value:`zh`,label:`中文`},{value:`tl`,label:`Tagalog`}];form=this.fb.group({firstName:[``,Fs.required],lastName:[``,Fs.required],email:[``,[Fs.required,Fs.email]],password:[``,[Fs.required,Fs.minLength(12)]],confirm:[``,Fs.required],language:[`en`],terms:[!1,Fs.requiredTrue]},{validators:ke});errors=q([]);created=q(!1);invalid(r){let e=this.form.controls[r];return(e.invalid||r===`confirm`&&this.form.hasError(`mismatch`))&&(e.touched||e.dirty)}errorFor(r){return this.invalid(r)&&r!==`terms`?z[r]:``}submit(){this.form.markAllAsTouched();let e=Object.keys(z).filter(i=>this.invalid(i)).map(i=>({id:i===`terms`?this.termsCheckboxId():U[i],message:z[i]}));if(this.errors.set(e),e.length){Xa(()=>this.summary()?.focus(),{injector:this.injector});return}this.created.set(!0)}termsCheckboxId(){return this.host.nativeElement.querySelector(`#${U.terms} input[type=checkbox]`)?.id||U.terms}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-sign-in-register-template`]],viewQuery:function(e,i){e&1&&Gv(i.summary,Tr,5),e&2&&w_()},decls:9,vars:2,consts:[[`maxWidth`,`34rem`],[`slot`,`header`,`routerLink`,`home`,1,`inline-flex`,`flex-col`,`items-center`,`gap-2`],[`src`,`scsc-seal.png`,`size`,`lg`,`alt`,``],[1,`font-display`,`text-xl`,`font-semibold`,`text-primary`],[1,`mt-6`,`justify-center`,`text-xs`,`text-base-content/70`,3,`links`],[`title`,`Check your email`,`display`,``],[`status`,`success`,1,`mt-4`],[`routerLink`,`sign-in`,1,`mt-4`,`inline-block`,`text-sm`,`font-medium`,`text-primary`,`hover:underline`],[`title`,`Create an account`,`display`,``,`description`,`One account for e-filing, payments and following your cases.`],[`aria-label`,`Create an account`,`novalidate`,``,1,`mt-5`,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[3,`errors`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`First name`,`for`,`reg-first`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`reg-first`,`autocomplete`,`given-name`,`formControlName`,`firstName`,3,`invalid`],[`label`,`Last name`,`for`,`reg-last`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`reg-last`,`autocomplete`,`family-name`,`formControlName`,`lastName`,3,`invalid`],[`label`,`Email`,`for`,`reg-email`,`hint`,`We send filing receipts and hearing reminders here.`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`reg-email`,`type`,`email`,`autocomplete`,`email`,`formControlName`,`email`,3,`invalid`],[`label`,`Password`,`for`,`reg-password`,`hint`,`At least 12 characters. A short sentence is easy to remember.`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`reg-password`,`type`,`password`,`autocomplete`,`new-password`,`formControlName`,`password`,3,`invalid`],[`label`,`Confirm password`,`for`,`reg-confirm`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`reg-confirm`,`type`,`password`,`autocomplete`,`new-password`,`formControlName`,`confirm`,3,`invalid`],[`label`,`Preferred language`,`for`,`reg-language`,`hint`,`For court notices and interpreter requests.`],[`scsc-select`,``,`id`,`reg-language`,`formControlName`,`language`],[3,`value`],[`id`,`reg-terms`,`preset`,`custom`,`heading`,`Terms of use`,`learnMoreLink`,`terms`,`learnMoreLabel`,`Read the full terms of use and privacy policy`,`acknowledge`,``,`required`,``,`formControlName`,`terms`,`acknowledgeLabel`,`I agree to the terms of use and the privacy policy.`,3,`acknowledgeError`],[`nativeType`,`submit`,`block`,``],[1,`text-center`,`text-sm`,`text-base-content/70`],[`routerLink`,`sign-in`,1,`font-medium`,`text-primary`,`hover:underline`]],template:function(e,i){e&1&&(Ga(0,`scsc-focused-shell`,0)(1,`a`,1),uc(2,`scsc-seal`,2),Ga(3,`span`,3),G_(4,`Court Access Portal`),Lf()(),Ga(5,`scsc-card`),JT(6,ve,5,1)(7,xe,27,13),Lf(),uc(8,`scsc-legal-bar`,4),Lf()),e&2&&(Jb(6),t_(i.created()?6:7),Jb(2),Pv(`links`,i.legalLinks))},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,WA,Vz,Xz,nu,za,sn,mN,Tr,wN,Vn,qo,hr,yr,TN,ja,On],encapsulation:2})};function Ce(o,r){if(o&1&&uc(0,`scsc-error-summary`,7),o&2){let e=y_();Pv(`errors`,e.errors())}}function Ee(o,r){o&1&&(Ga(0,`scsc-alert`,17),G_(1,`Signed in. Taking you to your account…`),Lf())}var Q=class o{fb=g(Wue).nonNullable;injector=g(ae);summary=_2(Tr);legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];form=this.fb.group({email:[``,[Fs.required,Fs.email]],password:[``,Fs.required],remember:[!1]});showPassword=q(!1);errors=q([]);signedIn=q(!1);invalid(r){let e=this.form.controls[r];return e.invalid&&(e.touched||e.dirty)}errorFor(r){if(!this.invalid(r))return``;let e=this.form.controls[r];return r===`email`?e.hasError(`required`)?`Enter your email address.`:`Enter an email address like name@example.com.`:`Enter your password.`}submit(){this.form.markAllAsTouched();let r=[];this.form.controls.email.invalid&&r.push({id:`si-email`,message:this.errorFor(`email`)}),this.form.controls.password.invalid&&r.push({id:`si-password`,message:this.errorFor(`password`)}),this.errors.set(r),this.signedIn.set(r.length===0),r.length&&Xa(()=>this.summary()?.focus(),{injector:this.injector})}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-sign-in-template`]],viewQuery:function(e,i){e&1&&Gv(i.summary,Tr,5),e&2&&w_()},decls:34,vars:10,consts:[[`maxWidth`,`28rem`],[`slot`,`header`,`routerLink`,`home`,1,`inline-flex`,`flex-col`,`items-center`,`gap-2`],[`src`,`scsc-seal.png`,`size`,`lg`,`alt`,``],[1,`font-display`,`text-xl`,`font-semibold`,`text-primary`],[1,`text-sm`,`text-base-content/70`],[`title`,`Sign in`,`display`,``,`description`,`Follow your cases, see your filings and keep your payment receipts.`],[`aria-label`,`Sign in`,`novalidate`,``,1,`mt-5`,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[3,`errors`],[`label`,`Email`,`for`,`si-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`si-email`,`type`,`email`,`autocomplete`,`username`,`formControlName`,`email`,3,`invalid`],[`label`,`Password`,`for`,`si-password`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`si-password`,`autocomplete`,`current-password`,`formControlName`,`password`,3,`type`,`invalid`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-2`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[`routerLink`,`forgot-password`,1,`text-sm`,`font-medium`,`text-primary`,`hover:underline`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`remember`],[`status`,`success`],[`nativeType`,`submit`,`block`,``],[1,`my-5`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`block`,``,`routerLink`,`register`],[1,`mt-4`,`text-center`,`text-sm`,`text-base-content/70`],[1,`mt-6`,`justify-center`,`text-xs`,`text-base-content/70`,3,`links`]],template:function(e,i){e&1&&(Ga(0,`scsc-focused-shell`,0)(1,`a`,1),uc(2,`scsc-seal`,2),Ga(3,`span`,3),G_(4,`Court Access Portal`),Lf(),Ga(5,`span`,4),G_(6,`Superior Court of California, County of Santa Clara`),Lf()(),Ga(7,`scsc-card`),uc(8,`scsc-page-header`,5),Ga(9,`form`,6),lc(`ngSubmit`,function(){return i.submit()}),JT(10,Ce,1,1,`scsc-error-summary`,7),Ga(11,`scsc-form-field`,8)(12,`input`,9),HS(),Lf()(),Ga(13,`scsc-form-field`,10)(14,`input`,11),HS(),Lf()(),Ga(15,`div`,12)(16,`label`,13)(17,`input`,14),lc(`change`,function(){return i.showPassword.set(!i.showPassword())}),Lf(),G_(18,` Show password `),Lf(),Ga(19,`a`,15),G_(20,`Forgot password?`),Lf()(),Ga(21,`label`,13)(22,`input`,16),HS(),Lf(),G_(23,` Keep me signed in on this device for 30 days `),Lf(),JT(24,Ee,2,0,`scsc-alert`,17),Ga(25,`scsc-button`,18),G_(26,`Sign in`),Lf()(),Ga(27,`scsc-divider`,19),G_(28,`New to the portal?`),Lf(),Ga(29,`a`,20),G_(30,`Create an account`),Lf()(),Ga(31,`p`,21),G_(32,` You don’t need an account to search cases, pay a fee or file documents. `),Lf(),uc(33,`scsc-legal-bar`,22),Lf()),e&2&&(Jb(9),Pv(`formGroup`,i.form),Jb(),t_(i.errors().length?10:-1),Jb(),Pv(`error`,i.errorFor(`email`)),Jb(),Pv(`invalid`,i.invalid(`email`)),zS(),Jb(),Pv(`error`,i.errorFor(`password`)),Jb(),Pv(`type`,i.showPassword()?`text`:`password`)(`invalid`,i.invalid(`password`)),zS(),Jb(3),Pv(`checked`,i.showPassword()),Jb(5),zS(),Jb(2),t_(i.signedIn()?24:-1),Jb(9),Pv(`links`,i.legalLinks))},dependencies:[Kue,Bue,IA,ez,Hue,que,Vz,Xz,nu,za,sn,$E,mN,jo,hN,Tr,wN,Vn,qo,hr,TN,ja],encapsulation:2})};var $={"sign-in-register":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScscAlert,
  ScscButton,
  ScscCard,
  ScscErrorSummary,
  ScscFocusedShell,
  type ScscFormError,
  ScscFormField,
  ScscInput,
  ScscLegalBar,
  type ScscLegalLink,
  ScscLegalNotice,
  ScscPageHeader,
  ScscSeal,
  ScscSelect,
} from '@scscourt/design';

type Field = 'firstName' | 'lastName' | 'email' | 'password' | 'confirm' | 'terms';

const MESSAGES: Record<Field, string> = {
  firstName: 'Enter your first name.',
  lastName: 'Enter your last name.',
  email: 'Enter an email address like name@example.com.',
  password: 'Use at least 12 characters for your password.',
  confirm: 'The two passwords don\u2019t match.',
  terms: 'Agree to the terms of use to create an account.',
};

const IDS: Record<Field, string> = {
  firstName: 'reg-first',
  lastName: 'reg-last',
  email: 'reg-email',
  password: 'reg-password',
  confirm: 'reg-confirm',
  terms: 'reg-terms',
};

function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const { password, confirm } = group.value as { password: string; confirm: string };
  return confirm && password !== confirm ? { mismatch: true } : null;
}

@Component({
  selector: 'app-sign-in-register-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ScscAlert,
    ScscButton,
    ScscCard,
    ScscErrorSummary,
    ScscFocusedShell,
    ScscFormField,
    ScscInput,
    ScscLegalBar,
    ScscLegalNotice,
    ScscPageHeader,
    ScscSeal,
    ScscSelect,
  ],
  template: \`
    <scsc-focused-shell maxWidth="34rem">
      <a slot="header" routerLink="home" class="inline-flex flex-col items-center gap-2">
        <scsc-seal src="scsc-seal.png" size="lg" alt="" />
        <span class="font-display text-xl font-semibold text-primary">Court Access Portal</span>
      </a>

      <scsc-card>
        @if (created()) {
          <scsc-page-header title="Check your email" display />
          <scsc-alert status="success" class="mt-4">
            We sent a link to {{ form.controls.email.value }}. Open it within 24 hours to finish
            creating your account.
          </scsc-alert>
          <a
            routerLink="sign-in"
            class="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >Back to sign in</a
          >
        } @else {
          <scsc-page-header
            title="Create an account"
            display
            description="One account for e-filing, payments and following your cases."
          />
          <form
            [formGroup]="form"
            (ngSubmit)="submit()"
            class="mt-5 flex flex-col gap-4"
            aria-label="Create an account"
            novalidate
          >
            @if (errors().length) {
              <scsc-error-summary [errors]="errors()" />
            }
            <div class="grid gap-4 sm:grid-cols-2">
              <scsc-form-field
                label="First name"
                for="reg-first"
                required
                [error]="errorFor('firstName')"
              >
                <input
                  scsc-input
                  id="reg-first"
                  autocomplete="given-name"
                  formControlName="firstName"
                  [invalid]="invalid('firstName')"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Last name"
                for="reg-last"
                required
                [error]="errorFor('lastName')"
              >
                <input
                  scsc-input
                  id="reg-last"
                  autocomplete="family-name"
                  formControlName="lastName"
                  [invalid]="invalid('lastName')"
                />
              </scsc-form-field>
            </div>
            <scsc-form-field
              label="Email"
              for="reg-email"
              hint="We send filing receipts and hearing reminders here."
              required
              [error]="errorFor('email')"
            >
              <input
                scsc-input
                id="reg-email"
                type="email"
                autocomplete="email"
                formControlName="email"
                [invalid]="invalid('email')"
              />
            </scsc-form-field>
            <scsc-form-field
              label="Password"
              for="reg-password"
              hint="At least 12 characters. A short sentence is easy to remember."
              required
              [error]="errorFor('password')"
            >
              <input
                scsc-input
                id="reg-password"
                type="password"
                autocomplete="new-password"
                formControlName="password"
                [invalid]="invalid('password')"
              />
            </scsc-form-field>
            <scsc-form-field
              label="Confirm password"
              for="reg-confirm"
              required
              [error]="errorFor('confirm')"
            >
              <input
                scsc-input
                id="reg-confirm"
                type="password"
                autocomplete="new-password"
                formControlName="confirm"
                [invalid]="invalid('confirm')"
              />
            </scsc-form-field>
            <scsc-form-field
              label="Preferred language"
              for="reg-language"
              hint="For court notices and interpreter requests."
            >
              <select scsc-select id="reg-language" formControlName="language">
                @for (l of languages; track l.value) {
                  <option [value]="l.value" [attr.lang]="l.value">{{ l.label }}</option>
                }
              </select>
            </scsc-form-field>

            <scsc-legal-notice
              id="reg-terms"
              preset="custom"
              heading="Terms of use"
              learnMoreLink="terms"
              learnMoreLabel="Read the full terms of use and privacy policy"
              acknowledge
              required
              formControlName="terms"
              acknowledgeLabel="I agree to the terms of use and the privacy policy."
              [acknowledgeError]="invalid('terms') ? messages.terms : ''"
            >
              <p>
                Your account is for your own use. Information you file becomes part of the court
                record, and most of it is public. We use your contact details only for court
                business.
              </p>
            </scsc-legal-notice>

            <scsc-button nativeType="submit" block>Create account</scsc-button>
            <p class="text-center text-sm text-base-content/70">
              Already have an account?
              <a routerLink="sign-in" class="font-medium text-primary hover:underline">Sign in</a>
            </p>
          </form>
        }
      </scsc-card>
      <scsc-legal-bar
        [links]="legalLinks"
        class="mt-6 justify-center text-xs text-base-content/70"
      />
    </scsc-focused-shell>
  \`,
})
export class SignInRegisterTemplate {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly injector = inject(Injector);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly summary = viewChild(ScscErrorSummary);

  protected readonly messages = MESSAGES;
  protected readonly legalLinks: ScscLegalLink[] = [
    { id: 'privacy', label: 'Privacy', link: 'privacy' },
    { id: 'terms', label: 'Terms of use', link: 'terms' },
    { id: 'accessibility', label: 'Accessibility', link: 'accessibility' },
    { id: 'language-access', label: 'Language access', link: 'language-access' },
  ];
  protected readonly languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Espa\xF1ol' },
    { value: 'vi', label: 'Ti\u1EBFng Vi\u1EC7t' },
    { value: 'zh', label: '\u4E2D\u6587' },
    { value: 'tl', label: 'Tagalog' },
  ];

  protected readonly form = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(12)]],
      confirm: ['', Validators.required],
      language: ['en'],
      terms: [false, Validators.requiredTrue],
    },
    { validators: passwordsMatch },
  );
  protected readonly errors = signal<ScscFormError[]>([]);
  protected readonly created = signal(false);

  protected invalid(name: Field): boolean {
    const c = this.form.controls[name];
    const bad = c.invalid || (name === 'confirm' && this.form.hasError('mismatch'));
    return bad && (c.touched || c.dirty);
  }

  protected errorFor(name: Field): string {
    return this.invalid(name) && name !== 'terms' ? MESSAGES[name] : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const fields = Object.keys(MESSAGES) as Field[];
    const errors = fields
      .filter((f) => this.invalid(f))
      .map((f) => ({ id: f === 'terms' ? this.termsCheckboxId() : IDS[f], message: MESSAGES[f] }));
    this.errors.set(errors);
    if (errors.length) {
      afterNextRender(() => this.summary()?.focus(), { injector: this.injector });
      return;
    }
    this.created.set(true);
  }

  /** The error summary links to the acknowledgement checkbox inside the legal notice. */
  private termsCheckboxId(): string {
    const box = this.host.nativeElement.querySelector(\`#\${IDS.terms} input[type=checkbox]\`);
    return box?.id || IDS.terms;
  }
}
`,html:`<scsc-focused-shell maxWidth="34rem">
  <a slot="header" routerLink="home" class="inline-flex flex-col items-center gap-2">
    <scsc-seal src="scsc-seal.png" size="lg" alt="" />
    <span class="font-display text-xl font-semibold text-primary">Court Access Portal</span>
  </a>

  <scsc-card>
    @if (created()) {
      <scsc-page-header title="Check your email" display />
      <scsc-alert status="success" class="mt-4">
        We sent a link to {{ form.controls.email.value }}. Open it within 24 hours to finish
        creating your account.
      </scsc-alert>
      <a
        routerLink="sign-in"
        class="mt-4 inline-block text-sm font-medium text-primary hover:underline"
        >Back to sign in</a
      >
    } @else {
      <scsc-page-header
        title="Create an account"
        display
        description="One account for e-filing, payments and following your cases."
      />
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="mt-5 flex flex-col gap-4"
        aria-label="Create an account"
        novalidate
      >
        @if (errors().length) {
          <scsc-error-summary [errors]="errors()" />
        }
        <div class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="First name"
            for="reg-first"
            required
            [error]="errorFor('firstName')"
          >
            <input
              scsc-input
              id="reg-first"
              autocomplete="given-name"
              formControlName="firstName"
              [invalid]="invalid('firstName')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Last name"
            for="reg-last"
            required
            [error]="errorFor('lastName')"
          >
            <input
              scsc-input
              id="reg-last"
              autocomplete="family-name"
              formControlName="lastName"
              [invalid]="invalid('lastName')"
            />
          </scsc-form-field>
        </div>
        <scsc-form-field
          label="Email"
          for="reg-email"
          hint="We send filing receipts and hearing reminders here."
          required
          [error]="errorFor('email')"
        >
          <input
            scsc-input
            id="reg-email"
            type="email"
            autocomplete="email"
            formControlName="email"
            [invalid]="invalid('email')"
          />
        </scsc-form-field>
        <scsc-form-field
          label="Password"
          for="reg-password"
          hint="At least 12 characters. A short sentence is easy to remember."
          required
          [error]="errorFor('password')"
        >
          <input
            scsc-input
            id="reg-password"
            type="password"
            autocomplete="new-password"
            formControlName="password"
            [invalid]="invalid('password')"
          />
        </scsc-form-field>
        <scsc-form-field
          label="Confirm password"
          for="reg-confirm"
          required
          [error]="errorFor('confirm')"
        >
          <input
            scsc-input
            id="reg-confirm"
            type="password"
            autocomplete="new-password"
            formControlName="confirm"
            [invalid]="invalid('confirm')"
          />
        </scsc-form-field>
        <scsc-form-field
          label="Preferred language"
          for="reg-language"
          hint="For court notices and interpreter requests."
        >
          <select scsc-select id="reg-language" formControlName="language">
            @for (l of languages; track l.value) {
              <option [value]="l.value" [attr.lang]="l.value">{{ l.label }}</option>
            }
          </select>
        </scsc-form-field>

        <scsc-legal-notice
          id="reg-terms"
          preset="custom"
          heading="Terms of use"
          learnMoreLink="terms"
          learnMoreLabel="Read the full terms of use and privacy policy"
          acknowledge
          required
          formControlName="terms"
          acknowledgeLabel="I agree to the terms of use and the privacy policy."
          [acknowledgeError]="invalid('terms') ? messages.terms : ''"
        >
          <p>
            Your account is for your own use. Information you file becomes part of the court
            record, and most of it is public. We use your contact details only for court
            business.
          </p>
        </scsc-legal-notice>

        <scsc-button nativeType="submit" block>Create account</scsc-button>
        <p class="text-center text-sm text-base-content/70">
          Already have an account?
          <a routerLink="sign-in" class="font-medium text-primary hover:underline">Sign in</a>
        </p>
      </form>
    }
  </scsc-card>
  <scsc-legal-bar
    [links]="legalLinks"
    class="mt-6 justify-center text-xs text-base-content/70"
  />
</scsc-focused-shell>
`},"sign-in":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScscAlert,
  ScscButton,
  ScscButtonLink,
  ScscCard,
  ScscCheckbox,
  ScscDivider,
  ScscErrorSummary,
  ScscFocusedShell,
  type ScscFormError,
  ScscFormField,
  ScscInput,
  ScscLegalBar,
  type ScscLegalLink,
  ScscPageHeader,
  ScscSeal,
} from '@scscourt/design';

@Component({
  selector: 'app-sign-in-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ScscAlert,
    ScscButton,
    ScscButtonLink,
    ScscCard,
    ScscCheckbox,
    ScscDivider,
    ScscErrorSummary,
    ScscFocusedShell,
    ScscFormField,
    ScscInput,
    ScscLegalBar,
    ScscPageHeader,
    ScscSeal,
  ],
  template: \`
    <scsc-focused-shell maxWidth="28rem">
      <a slot="header" routerLink="home" class="inline-flex flex-col items-center gap-2">
        <scsc-seal src="scsc-seal.png" size="lg" alt="" />
        <span class="font-display text-xl font-semibold text-primary">Court Access Portal</span>
        <span class="text-sm text-base-content/70"
          >Superior Court of California, County of Santa Clara</span
        >
      </a>

      <scsc-card>
        <scsc-page-header
          title="Sign in"
          display
          description="Follow your cases, see your filings and keep your payment receipts."
        />

        <form
          [formGroup]="form"
          (ngSubmit)="submit()"
          class="mt-5 flex flex-col gap-4"
          aria-label="Sign in"
          novalidate
        >
          @if (errors().length) {
            <scsc-error-summary [errors]="errors()" />
          }
          <scsc-form-field label="Email" for="si-email" required [error]="errorFor('email')">
            <input
              scsc-input
              id="si-email"
              type="email"
              autocomplete="username"
              formControlName="email"
              [invalid]="invalid('email')"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Password"
            for="si-password"
            required
            [error]="errorFor('password')"
          >
            <input
              scsc-input
              id="si-password"
              [type]="showPassword() ? 'text' : 'password'"
              autocomplete="current-password"
              formControlName="password"
              [invalid]="invalid('password')"
            />
          </scsc-form-field>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <label class="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                scsc-checkbox
                [checked]="showPassword()"
                (change)="showPassword.set(!showPassword())"
              />
              Show password
            </label>
            <a routerLink="forgot-password" class="text-sm font-medium text-primary hover:underline"
              >Forgot password?</a
            >
          </div>
          <label class="flex items-center gap-2 text-sm">
            <input type="checkbox" scsc-checkbox formControlName="remember" />
            Keep me signed in on this device for 30 days
          </label>
          @if (signedIn()) {
            <scsc-alert status="success">Signed in. Taking you to your account\u2026</scsc-alert>
          }
          <scsc-button nativeType="submit" block>Sign in</scsc-button>
        </form>

        <scsc-divider class="my-5">New to the portal?</scsc-divider>
        <a scsc-button variant="neutral" outline block routerLink="register">Create an account</a>
      </scsc-card>

      <p class="mt-4 text-center text-sm text-base-content/70">
        You don\u2019t need an account to search cases, pay a fee or file documents.
      </p>
      <scsc-legal-bar
        [links]="legalLinks"
        class="mt-6 justify-center text-xs text-base-content/70"
      />
    </scsc-focused-shell>
  \`,
})
export class SignInTemplate {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly injector = inject(Injector);
  private readonly summary = viewChild(ScscErrorSummary);

  protected readonly legalLinks: ScscLegalLink[] = [
    { id: 'privacy', label: 'Privacy', link: 'privacy' },
    { id: 'terms', label: 'Terms of use', link: 'terms' },
    { id: 'accessibility', label: 'Accessibility', link: 'accessibility' },
    { id: 'language-access', label: 'Language access', link: 'language-access' },
  ];

  protected readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });
  protected readonly showPassword = signal(false);
  protected readonly errors = signal<ScscFormError[]>([]);
  protected readonly signedIn = signal(false);

  protected invalid(name: 'email' | 'password'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  protected errorFor(name: 'email' | 'password'): string {
    if (!this.invalid(name)) return '';
    const c = this.form.controls[name];
    if (name === 'email')
      return c.hasError('required')
        ? 'Enter your email address.'
        : 'Enter an email address like name@example.com.';
    return 'Enter your password.';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    const errors: ScscFormError[] = [];
    if (this.form.controls.email.invalid)
      errors.push({ id: 'si-email', message: this.errorFor('email') });
    if (this.form.controls.password.invalid)
      errors.push({ id: 'si-password', message: this.errorFor('password') });
    this.errors.set(errors);
    this.signedIn.set(errors.length === 0);
    if (errors.length) afterNextRender(() => this.summary()?.focus(), { injector: this.injector });
  }
}
`,html:`<scsc-focused-shell maxWidth="28rem">
  <a slot="header" routerLink="home" class="inline-flex flex-col items-center gap-2">
    <scsc-seal src="scsc-seal.png" size="lg" alt="" />
    <span class="font-display text-xl font-semibold text-primary">Court Access Portal</span>
    <span class="text-sm text-base-content/70"
      >Superior Court of California, County of Santa Clara</span
    >
  </a>

  <scsc-card>
    <scsc-page-header
      title="Sign in"
      display
      description="Follow your cases, see your filings and keep your payment receipts."
    />

    <form
      [formGroup]="form"
      (ngSubmit)="submit()"
      class="mt-5 flex flex-col gap-4"
      aria-label="Sign in"
      novalidate
    >
      @if (errors().length) {
        <scsc-error-summary [errors]="errors()" />
      }
      <scsc-form-field label="Email" for="si-email" required [error]="errorFor('email')">
        <input
          scsc-input
          id="si-email"
          type="email"
          autocomplete="username"
          formControlName="email"
          [invalid]="invalid('email')"
        />
      </scsc-form-field>
      <scsc-form-field
        label="Password"
        for="si-password"
        required
        [error]="errorFor('password')"
      >
        <input
          scsc-input
          id="si-password"
          [type]="showPassword() ? 'text' : 'password'"
          autocomplete="current-password"
          formControlName="password"
          [invalid]="invalid('password')"
        />
      </scsc-form-field>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <label class="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            scsc-checkbox
            [checked]="showPassword()"
            (change)="showPassword.set(!showPassword())"
          />
          Show password
        </label>
        <a routerLink="forgot-password" class="text-sm font-medium text-primary hover:underline"
          >Forgot password?</a
        >
      </div>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" scsc-checkbox formControlName="remember" />
        Keep me signed in on this device for 30 days
      </label>
      @if (signedIn()) {
        <scsc-alert status="success">Signed in. Taking you to your account\u2026</scsc-alert>
      }
      <scsc-button nativeType="submit" block>Sign in</scsc-button>
    </form>

    <scsc-divider class="my-5">New to the portal?</scsc-divider>
    <a scsc-button variant="neutral" outline block routerLink="register">Create an account</a>
  </scsc-card>

  <p class="mt-4 text-center text-sm text-base-content/70">
    You don\u2019t need an account to search cases, pay a fee or file documents.
  </p>
  <scsc-legal-bar
    [links]="legalLinks"
    class="mt-6 justify-center text-xs text-base-content/70"
  />
</scsc-focused-shell>
`}};var ze=[{id:`sign-in`,title:`Sign in`,description:`Focused shell with the seal lockup; email and password with an error summary on a rejected submit, show password, and a link to register.`,component:Q,source:$[`sign-in`],layout:`page`,height:`44rem`},{id:`sign-in-register`,title:`Register`,description:"Account creation with password rules, a matching-password check, preferred language, and the terms of use as an acknowledgement notice (`scsc-legal-notice` with `acknowledge`).",component:H,source:$[`sign-in-register`],layout:`page`,height:`56rem`}];export{ze as DEMOS};