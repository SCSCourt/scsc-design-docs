import{At as NP,Ki as ye,L as Er,Ms as uc,Na as Jb,Xa as Pv,cs as lc,kr as jP,ms as nu,ni as qP,pi as sn,ra as Af,t as $E,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var l=class n{static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-brand-header-hearing-demo`]],decls:10,vars:0,consts:[[`title`,`Superior Court of California, County of Santa Clara`,`subtitle`,`Notice of hearing · 24CV012345`,1,`max-w-2xl`],[1,`mb-4`],[`type`,`Case Management Conference`,`datetime`,`Oct 6, 2026 · 9:00 AM`,`department`,`10`,`judge`,`Hon. L. Moreno`],[1,`mt-4`,`grid`,`gap-4`,`sm:grid-cols-2`],[`name`,`Downtown Superior Court`,`address`,`191 N. First Street
San Jose, CA 95113`],[1,`text-sm`,`text-base-content/80`],[`slot`,`footer`]],template:function(r,c){r&1&&(Ga(0,`scsc-brand-header`,0)(1,`p`,1),G_(2,`Dear Maria Alvarez, a hearing has been set in your case.`),Lf(),uc(3,`scsc-hearing-card`,2),Ga(4,`div`,3),uc(5,`scsc-contact-block`,4),Ga(6,`p`,5),G_(7,` Arrive 30 minutes early. Remote appearance is available; the link is sent the day before. `),Lf()(),Ga(8,`p`,6),G_(9,`Mailed Sep 30, 2026. Keep this notice for your records.`),Lf()())},dependencies:[jP,qP,Er],encapsulation:2})};var h=class n{static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-brand-header-dark-demo`]],decls:6,vars:0,consts:[[`data-theme`,`scsc-design-dark`,1,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[`title`,`Jury Services`,`subtitle`,`Reporting instructions`,1,`max-w-xl`],[`slot`,`footer`]],template:function(r,c){r&1&&(Ga(0,`div`,0)(1,`scsc-brand-header`,1)(2,`p`),G_(3,` Group 118: please report to the Jury Assembly Room, 191 N. First Street, on Monday, Oct 5 at 8:00 AM. `),Lf(),Ga(4,`p`,2),G_(5,`Questions? Call (408) 882-2700, Monday to Friday, 8:30 AM – 4:00 PM.`),Lf()()())},dependencies:[jP],encapsulation:2})};var p={"brand-header-banner":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscBrandHeader, ScscButtonLink } from '@scscourt/design';

@Component({
  selector: 'app-brand-header-banner-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscBrandHeader, ScscButtonLink],
  template: \`
    <scsc-brand-header title="Self-Help Center" class="max-w-xl">
      <p>
        Free help with forms, filing, and court procedures for people representing themselves.
        Walk-ins are welcome Monday through Friday, 8:30 AM to 4:00 PM.
      </p>
      <!-- Both actions go to another page, so they are links styled as buttons. -->
      <div class="mt-4 flex flex-wrap gap-2">
        <a scsc-button size="sm" routerLink=".">Make an appointment</a>
        <a scsc-button variant="ghost" size="sm" routerLink=".">Find a form</a>
      </div>
    </scsc-brand-header>
  \`,
})
export class BrandHeaderBannerDemo {}
`,html:`<scsc-brand-header title="Self-Help Center" class="max-w-xl">
  <p>
    Free help with forms, filing, and court procedures for people representing themselves.
    Walk-ins are welcome Monday through Friday, 8:30 AM to 4:00 PM.
  </p>
  <!-- Both actions go to another page, so they are links styled as buttons. -->
  <div class="mt-4 flex flex-wrap gap-2">
    <a scsc-button size="sm" routerLink=".">Make an appointment</a>
    <a scsc-button variant="ghost" size="sm" routerLink=".">Find a form</a>
  </div>
</scsc-brand-header>
`},"brand-header-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBrandHeader } from '@scscourt/design';

@Component({
  selector: 'app-brand-header-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBrandHeader],
  template: \`
    <div data-theme="scsc-design-dark" class="rounded-box bg-base-200 p-4 text-base-content">
      <scsc-brand-header title="Jury Services" subtitle="Reporting instructions" class="max-w-xl">
        <p>
          Group 118: please report to the Jury Assembly Room, 191 N. First Street, on Monday, Oct 5
          at 8:00 AM.
        </p>
        <p slot="footer">Questions? Call (408) 882-2700, Monday to Friday, 8:30 AM \u2013 4:00 PM.</p>
      </scsc-brand-header>
    </div>
  \`,
})
export class BrandHeaderDarkDemo {}
`,html:`<div data-theme="scsc-design-dark" class="rounded-box bg-base-200 p-4 text-base-content">
  <scsc-brand-header title="Jury Services" subtitle="Reporting instructions" class="max-w-xl">
    <p>
      Group 118: please report to the Jury Assembly Room, 191 N. First Street, on Monday, Oct 5
      at 8:00 AM.
    </p>
    <p slot="footer">Questions? Call (408) 882-2700, Monday to Friday, 8:30 AM \u2013 4:00 PM.</p>
  </scsc-brand-header>
</div>
`},"brand-header-hearing":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBrandHeader, ScscContactBlock, ScscHearingCard } from '@scscourt/design';

@Component({
  selector: 'app-brand-header-hearing-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBrandHeader, ScscContactBlock, ScscHearingCard],
  template: \`
    <!-- A notice of hearing: the brand band, the hearing, and where to go. -->
    <scsc-brand-header
      class="max-w-2xl"
      title="Superior Court of California, County of Santa Clara"
      subtitle="Notice of hearing \xB7 24CV012345"
    >
      <p class="mb-4">Dear Maria Alvarez, a hearing has been set in your case.</p>
      <scsc-hearing-card
        type="Case Management Conference"
        datetime="Oct 6, 2026 \xB7 9:00 AM"
        department="10"
        judge="Hon. L. Moreno"
      />
      <div class="mt-4 grid gap-4 sm:grid-cols-2">
        <scsc-contact-block
          name="Downtown Superior Court"
          address="191 N. First Street&#10;San Jose, CA 95113"
        />
        <p class="text-sm text-base-content/80">
          Arrive 30 minutes early. Remote appearance is available; the link is sent the day before.
        </p>
      </div>
      <p slot="footer">Mailed Sep 30, 2026. Keep this notice for your records.</p>
    </scsc-brand-header>
  \`,
})
export class BrandHeaderHearingDemo {}
`,html:`<!-- A notice of hearing: the brand band, the hearing, and where to go. -->
<scsc-brand-header
  class="max-w-2xl"
  title="Superior Court of California, County of Santa Clara"
  subtitle="Notice of hearing \xB7 24CV012345"
>
  <p class="mb-4">Dear Maria Alvarez, a hearing has been set in your case.</p>
  <scsc-hearing-card
    type="Case Management Conference"
    datetime="Oct 6, 2026 \xB7 9:00 AM"
    department="10"
    judge="Hon. L. Moreno"
  />
  <div class="mt-4 grid gap-4 sm:grid-cols-2">
    <scsc-contact-block
      name="Downtown Superior Court"
      address="191 N. First Street&#10;San Jose, CA 95113"
    />
    <p class="text-sm text-base-content/80">
      Arrive 30 minutes early. Remote appearance is available; the link is sent the day before.
    </p>
  </div>
  <p slot="footer">Mailed Sep 30, 2026. Keep this notice for your records.</p>
</scsc-brand-header>
`},"brand-header-notice":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscBrandHeader } from '@scscourt/design';

@Component({
  selector: 'app-brand-header-notice-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBrandHeader],
  template: \`
    <scsc-brand-header
      title="Santa Clara County Superior Court"
      subtitle="Notice of Hearing"
      class="max-w-xl"
    >
      <p>
        A Case Management Conference in
        <strong>Alvarez v. Northgate Property Mgmt.</strong> (24CV012345) has been scheduled for
        <strong>July 14, 2026 at 9:00 AM</strong> in Department 21.
      </p>
      <p class="mt-3">
        Please arrive 15 minutes early and bring a copy of your Case Management Statement.
      </p>
      <p slot="footer">
        This is an automated message from the Santa Clara County Superior Court notification
        service. Please do not reply to this email.
      </p>
    </scsc-brand-header>
  \`,
})
export class BrandHeaderNoticeDemo {}
`,html:`<scsc-brand-header
  title="Santa Clara County Superior Court"
  subtitle="Notice of Hearing"
  class="max-w-xl"
>
  <p>
    A Case Management Conference in
    <strong>Alvarez v. Northgate Property Mgmt.</strong> (24CV012345) has been scheduled for
    <strong>July 14, 2026 at 9:00 AM</strong> in Department 21.
  </p>
  <p class="mt-3">
    Please arrive 15 minutes early and bring a copy of your Case Management Statement.
  </p>
  <p slot="footer">
    This is an automated message from the Santa Clara County Superior Court notification
    service. Please do not reply to this email.
  </p>
</scsc-brand-header>
`},"brand-header-receipt":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscBrandHeader,
  ScscButton,
  ScscDescriptionList,
  ScscIcon,
  type ScscDescriptionItem,
} from '@scscourt/design';

@Component({
  selector: 'app-brand-header-receipt-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBrandHeader, ScscButton, ScscDescriptionList, ScscIcon],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <scsc-brand-header title="Santa Clara County Superior Court" subtitle="Payment receipt">
        <p class="mb-4">
          Thank you. Your payment was received and applied to case <strong>24CV012345</strong>.
        </p>
        <scsc-description-list [items]="receipt" />
        <p slot="footer">
          Keep this receipt for your records. Fees are non-refundable once a filing is accepted.
          Questions: (408) 882-2100.
        </p>
      </scsc-brand-header>

      <div class="print:hidden">
        <scsc-button variant="neutral" outline size="sm" (click)="print()">
          <scsc-icon name="printer" size="sm" /> Print receipt
        </scsc-button>
      </div>
    </div>
  \`,
})
export class BrandHeaderReceiptDemo {
  protected readonly receipt: ScscDescriptionItem[] = [
    { term: 'Receipt number', value: 'R-2026-118204', numeric: true },
    { term: 'Paid on', value: 'Sep 28, 2026, 10:42 AM' },
    { term: 'Fee', value: 'First paper, unlimited civil' },
    { term: 'Amount', value: '$435.00', numeric: true },
    { term: 'Method', value: 'Visa ending 4412' },
    { term: 'Paid by', value: 'Maria Alvarez' },
  ];

  protected print(): void {
    window.print();
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <scsc-brand-header title="Santa Clara County Superior Court" subtitle="Payment receipt">
    <p class="mb-4">
      Thank you. Your payment was received and applied to case <strong>24CV012345</strong>.
    </p>
    <scsc-description-list [items]="receipt" />
    <p slot="footer">
      Keep this receipt for your records. Fees are non-refundable once a filing is accepted.
      Questions: (408) 882-2100.
    </p>
  </scsc-brand-header>

  <div class="print:hidden">
    <scsc-button variant="neutral" outline size="sm" (click)="print()">
      <scsc-icon name="printer" size="sm" /> Print receipt
    </scsc-button>
  </div>
</div>
`}};var g=class n{static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-brand-header-banner-demo`]],decls:8,vars:0,consts:[[`title`,`Self-Help Center`,1,`max-w-xl`],[1,`mt-4`,`flex`,`flex-wrap`,`gap-2`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`.`],[`scsc-button`,``,`variant`,`ghost`,`size`,`sm`,`routerLink`,`.`]],template:function(r,c){r&1&&(Ga(0,`scsc-brand-header`,0)(1,`p`),G_(2,` Free help with forms, filing, and court procedures for people representing themselves. Walk-ins are welcome Monday through Friday, 8:30 AM to 4:00 PM. `),Lf(),Ga(3,`div`,1)(4,`a`,2),G_(5,`Make an appointment`),Lf(),Ga(6,`a`,3),G_(7,`Find a form`),Lf()()())},dependencies:[nu,jP,$E],encapsulation:2})};var f=class n{static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-brand-header-notice-demo`]],decls:13,vars:0,consts:[[`title`,`Santa Clara County Superior Court`,`subtitle`,`Notice of Hearing`,1,`max-w-xl`],[1,`mt-3`],[`slot`,`footer`]],template:function(r,c){r&1&&(Ga(0,`scsc-brand-header`,0)(1,`p`),G_(2,` A Case Management Conference in `),Ga(3,`strong`),G_(4,`Alvarez v. Northgate Property Mgmt.`),Lf(),G_(5,` (24CV012345) has been scheduled for `),Ga(6,`strong`),G_(7,`July 14, 2026 at 9:00 AM`),Lf(),G_(8,` in Department 21. `),Lf(),Ga(9,`p`,1),G_(10,` Please arrive 15 minutes early and bring a copy of your Case Management Statement. `),Lf(),Ga(11,`p`,2),G_(12,` This is an automated message from the Santa Clara County Superior Court notification service. Please do not reply to this email. `),Lf()())},dependencies:[jP],encapsulation:2})};var b=class n{receipt=[{term:`Receipt number`,value:`R-2026-118204`,numeric:!0},{term:`Paid on`,value:`Sep 28, 2026, 10:42 AM`},{term:`Fee`,value:`First paper, unlimited civil`},{term:`Amount`,value:`$435.00`,numeric:!0},{term:`Method`,value:`Visa ending 4412`},{term:`Paid by`,value:`Maria Alvarez`}];print(){window.print()}static ɵfac=function(r){return new(r||n)};static ɵcmp=Af({type:n,selectors:[[`app-brand-header-receipt-demo`]],decls:14,vars:1,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`title`,`Santa Clara County Superior Court`,`subtitle`,`Payment receipt`],[1,`mb-4`],[3,`items`],[`slot`,`footer`],[1,`print:hidden`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[`name`,`printer`,`size`,`sm`]],template:function(r,c){r&1&&(Ga(0,`div`,0)(1,`scsc-brand-header`,1)(2,`p`,2),G_(3,` Thank you. Your payment was received and applied to case `),Ga(4,`strong`),G_(5,`24CV012345`),Lf(),G_(6,`. `),Lf(),uc(7,`scsc-description-list`,3),Ga(8,`p`,4),G_(9,` Keep this receipt for your records. Fees are non-refundable once a filing is accepted. Questions: (408) 882-2100. `),Lf()(),Ga(10,`div`,5)(11,`scsc-button`,6),lc(`click`,function(){return c.print()}),uc(12,`scsc-icon`,7),G_(13,` Print receipt `),Lf()()()),r&2&&(Jb(7),Pv(`items`,c.receipt))},dependencies:[jP,sn,NP,ye],encapsulation:2})};var G={slug:`brand-header`,name:`Brand Header`,classes:[`ScscBrandHeader`],category:`Court`,whenToUse:[`Official notices, letter and email previews, and printable confirmations: anything that should look like it came from the court.`,`Also works as a section banner on public pages (Self-Help Center, Jury Services) when the section needs the navy-and-gold lockup.`,"For the site-wide application header use `scsc-masthead`; this component is a content block, not chrome."],demos:[{id:`brand-header-notice`,title:`Notice of hearing`,description:"Title and subtitle in the band; body in the default slot; small print in `[slot=footer]`.",component:f,source:p[`brand-header-notice`]},{id:`brand-header-banner`,title:`Section banner`,description:"Title only, with `a[scsc-button]` links in the body (they navigate) and no footer.",component:g,source:p[`brand-header-banner`]},{id:`brand-header-receipt`,title:`Printable receipt`,description:"A payment confirmation: `scsc-description-list` in the body, small print in the footer, and a Print button hidden when printing.",component:b,source:p[`brand-header-receipt`]},{id:`brand-header-hearing`,title:`Notice of hearing`,description:`Composed: the brand band over a hearing card, the courthouse address and footer small print.`,component:l,source:p[`brand-header-hearing`]},{id:`brand-header-dark`,title:`Dark theme`,description:`Jury reporting instructions in the dark theme.`,component:h,source:p[`brand-header-dark`]}],a11y:["The title is an `<h2>` by default; set `headingLevel` (2–6) to fit the page outline. The look does not change.","The title is an `<h2>`; place it under the page `<h1>` and keep any headings inside the body at `<h3>`.","The gold rule is decorative (`aria-hidden`).",`White-on-navy text in the band meets AA contrast in both themes.`],related:[`masthead`,`seal`,`card`,`page-structure`]};export{G as BRAND_HEADER_DOCS};