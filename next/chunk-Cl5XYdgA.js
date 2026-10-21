import{Gt as QN,H as FN,Hs as y_,L as Er,M as DN,Ma as JT,Ms as uc,Na as Jb,P as Dr,Vr as mN,Xa as Pv,Zi as za,cn as UE,cs as lc,kn as XF,ks as t_,ms as nu,pi as sn,ra as Af,t as $E,ta as $f,ur as fA,v as Ar,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function j(t,i){if(t&1&&(Ga(0,`p`,5),G_(1),Lf()),t&2){let e=y_();Jb(),$f(`Chose: `,e.last())}}var y=class t{last=q(``);actions=[{id:`reassign`,label:`Reassign department`,icon:`court.courtroom`},{id:`interpreter`,label:`Request interpreter`,icon:`court.interpreter`},{id:`print`,label:`Print register of actions`,icon:`action.print`},{id:`seal`,label:`Seal case`,icon:`action.lock`,disabled:`Needs a judicial order`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-header-alert-demo`]],decls:8,vars:2,consts:[[1,`flex`,`flex-col`,`gap-4`],[`title`,`People v. Ortiz`,`caseNumber`,`24CR007733`,`status`,`continued`,`caseType`,`Criminal — Felony`,`filed`,`2024-05-02`],[`variant`,`primary`,`size`,`sm`],[`label`,`More actions`,`align`,`end`,3,`select`,`items`],[`status`,`warning`,`title`,`Trial continued`],[`aria-live`,`polite`,1,`text-sm`,`text-base-content/70`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`scsc-case-header`,1)(2,`scsc-button`,2),G_(3,`Add minute order`),Lf(),Ga(4,`scsc-dropdown`,3),lc(`select`,function(E){return c.last.set(E)}),Lf()(),Ga(5,`scsc-alert`,4),G_(6,` Trial readiness moved from Oct 14 to Nov 18, 2026 at 8:30 AM in Dept. 42 on the defense's motion. Notify witnesses by Oct 21. `),Lf(),JT(7,j,2,1,`p`,5),Lf()),e&2&&(Jb(4),Pv(`items`,c.actions),Jb(3),t_(c.last()?7:-1))},dependencies:[za,sn,Dr,fA],encapsulation:2})};var S=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-header-dark-demo`]],decls:5,vars:0,consts:[[`data-theme`,`scsc-design-dark`,1,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[`title`,`In re Marriage of Patel`,`caseNumber`,`24FL004821`,`status`,`sealed`,`caseType`,`Family — Dissolution`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`/docs/components/case-file`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-case-header`,2)(3,`a`,3),G_(4,`Documents`),Lf()()()())},dependencies:[nu,$E,Dr],encapsulation:2})};var p={"case-header-actions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscCaseHeader, ScscIconButton } from '@scscourt/design';

@Component({
  selector: 'app-case-header-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCaseHeader, ScscIconButton],
  template: \`
    <scsc-case-header
      title="Alvarez v. Northgate Property Mgmt."
      caseNumber="24CV012345"
      status="active"
      caseType="Civil \u2014 Unlimited"
      filed="2024-03-12"
    >
      <scsc-icon-button icon="printer" label="Print case summary" (click)="print()" />
      <scsc-button variant="ghost" size="sm">Request copies</scsc-button>
      <scsc-button variant="primary" size="sm" [loading]="filing()" (click)="newFiling()">
        New filing
      </scsc-button>
    </scsc-case-header>
  \`,
})
export class CaseHeaderActionsDemo {
  protected readonly filing = signal(false);

  protected print(): void {
    window.print();
  }

  protected newFiling(): void {
    this.filing.set(true);
    setTimeout(() => this.filing.set(false), 800);
  }
}
`,html:`<scsc-case-header
  title="Alvarez v. Northgate Property Mgmt."
  caseNumber="24CV012345"
  status="active"
  caseType="Civil \u2014 Unlimited"
  filed="2024-03-12"
>
  <scsc-icon-button icon="printer" label="Print case summary" (click)="print()" />
  <scsc-button variant="ghost" size="sm">Request copies</scsc-button>
  <scsc-button variant="primary" size="sm" [loading]="filing()" (click)="newFiling()">
    New filing
  </scsc-button>
</scsc-case-header>
`},"case-header-alert":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscAlert,
  ScscButton,
  ScscCaseHeader,
  ScscDropdown,
  type ScscMenuItem,
} from '@scscourt/design';

@Component({
  selector: 'app-case-header-alert-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscCaseHeader, ScscDropdown],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-case-header
        title="People v. Ortiz"
        caseNumber="24CR007733"
        status="continued"
        caseType="Criminal \u2014 Felony"
        filed="2024-05-02"
      >
        <scsc-button variant="primary" size="sm">Add minute order</scsc-button>
        <scsc-dropdown
          label="More actions"
          align="end"
          [items]="actions"
          (select)="last.set($event)"
        />
      </scsc-case-header>
      <scsc-alert status="warning" title="Trial continued">
        Trial readiness moved from Oct 14 to Nov 18, 2026 at 8:30 AM in Dept. 42 on the defense's
        motion. Notify witnesses by Oct 21.
      </scsc-alert>
      @if (last()) {
        <p class="text-sm text-base-content/70" aria-live="polite">Chose: {{ last() }}</p>
      }
    </div>
  \`,
})
export class CaseHeaderAlertDemo {
  protected readonly last = signal('');
  protected readonly actions: ScscMenuItem[] = [
    { id: 'reassign', label: 'Reassign department', icon: 'court.courtroom' },
    { id: 'interpreter', label: 'Request interpreter', icon: 'court.interpreter' },
    { id: 'print', label: 'Print register of actions', icon: 'action.print' },
    { id: 'seal', label: 'Seal case', icon: 'action.lock', disabled: 'Needs a judicial order' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-case-header
    title="People v. Ortiz"
    caseNumber="24CR007733"
    status="continued"
    caseType="Criminal \u2014 Felony"
    filed="2024-05-02"
  >
    <scsc-button variant="primary" size="sm">Add minute order</scsc-button>
    <scsc-dropdown
      label="More actions"
      align="end"
      [items]="actions"
      (select)="last.set($event)"
    />
  </scsc-case-header>
  <scsc-alert status="warning" title="Trial continued">
    Trial readiness moved from Oct 14 to Nov 18, 2026 at 8:30 AM in Dept. 42 on the defense's
    motion. Notify witnesses by Oct 21.
  </scsc-alert>
  @if (last()) {
    <p class="text-sm text-base-content/70" aria-live="polite">Chose: {{ last() }}</p>
  }
</div>
`},"case-header-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscCaseHeader } from '@scscourt/design';

@Component({
  selector: 'app-case-header-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscCaseHeader],
  template: \`
    <!-- Compact, in a card, in the dark theme: actions wrap under the title on narrow screens. -->
    <div data-theme="scsc-design-dark" class="rounded-box bg-base-200 p-4 text-base-content">
      <div class="rounded-box border border-base-300 bg-base-100 p-4">
        <scsc-case-header
          title="In re Marriage of Patel"
          caseNumber="24FL004821"
          status="sealed"
          caseType="Family \u2014 Dissolution"
        >
          <a scsc-button variant="neutral" outline size="sm" routerLink="/docs/components/case-file"
            >Documents</a
          >
        </scsc-case-header>
      </div>
    </div>
  \`,
})
export class CaseHeaderDarkDemo {}
`,html:`<!-- Compact, in a card, in the dark theme: actions wrap under the title on narrow screens. -->
<div data-theme="scsc-design-dark" class="rounded-box bg-base-200 p-4 text-base-content">
  <div class="rounded-box border border-base-300 bg-base-100 p-4">
    <scsc-case-header
      title="In re Marriage of Patel"
      caseNumber="24FL004821"
      status="sealed"
      caseType="Family \u2014 Dissolution"
    >
      <a scsc-button variant="neutral" outline size="sm" routerLink="/docs/components/case-file"
        >Documents</a
      >
    </scsc-case-header>
  </div>
</div>
`},"case-header-minimal":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCaseHeader } from '@scscourt/design';

@Component({
  selector: 'app-case-header-minimal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCaseHeader],
  template: \`
    <scsc-case-header title="In re Parentage of K.M." caseNumber="24FL004988" status="sealed" />
  \`,
})
export class CaseHeaderMinimalDemo {}
`,html:`<scsc-case-header title="In re Parentage of K.M." caseNumber="24FL004988" status="sealed" />
`},"case-header-page":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscBreadcrumb,
  ScscButtonLink,
  ScscCard,
  ScscCaseHeader,
  ScscHearingCard,
  ScscMasthead,
  ScscPageShell,
  ScscPartyList,
  ScscSection,
  type ScscBreadcrumbItem,
  type ScscParty,
} from '@scscourt/design';

@Component({
  selector: 'app-case-header-page-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscBreadcrumb,
    ScscButtonLink,
    ScscCard,
    ScscCaseHeader,
    ScscHearingCard,
    ScscMasthead,
    ScscPageShell,
    ScscPartyList,
    ScscSection,
  ],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Clerk Console"
        subtitle="Civil Division"
        logoSrc="scsc-seal.png"
      />

      <scsc-breadcrumb [items]="trail" class="mb-2" />
      <!-- The case caption is the page's h1; everything below starts at h2. -->
      <scsc-case-header
        title="Alvarez v. Northgate Property Mgmt."
        caseNumber="24CV012345"
        status="active"
        caseType="Civil \u2014 Unlimited"
        filed="Mar 12, 2024"
      >
        <a scsc-button variant="ghost" size="sm" routerLink=".">View docket</a>
        <a scsc-button size="sm" routerLink=".">New filing</a>
      </scsc-case-header>

      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <scsc-section heading="Parties">
          <scsc-card>
            <scsc-party-list [parties]="parties" />
          </scsc-card>
        </scsc-section>
        <scsc-section heading="Next hearing">
          <scsc-hearing-card
            type="Case Management Conference"
            datetime="Oct 14, 2026 \xB7 9:00 AM"
            department="21"
            judge="Hon. R. Whitfield"
          />
        </scsc-section>
      </div>
    </scsc-page-shell>
  \`,
})
export class CaseHeaderPageDemo {
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Cases', link: '.' },
    { label: '24CV012345' },
  ];

  protected readonly parties: ScscParty[] = [
    { name: 'Maria Alvarez', role: 'Plaintiff' },
    { name: 'Northgate Property Management, Inc.', role: 'Defendant' },
    { name: 'Daniel Reyes, Esq.', role: 'Attorney', representing: 'for Plaintiff' },
  ];
}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Clerk Console"
    subtitle="Civil Division"
    logoSrc="scsc-seal.png"
  />

  <scsc-breadcrumb [items]="trail" class="mb-2" />
  <!-- The case caption is the page's h1; everything below starts at h2. -->
  <scsc-case-header
    title="Alvarez v. Northgate Property Mgmt."
    caseNumber="24CV012345"
    status="active"
    caseType="Civil \u2014 Unlimited"
    filed="Mar 12, 2024"
  >
    <a scsc-button variant="ghost" size="sm" routerLink=".">View docket</a>
    <a scsc-button size="sm" routerLink=".">New filing</a>
  </scsc-case-header>

  <div class="mt-8 grid gap-8 lg:grid-cols-2">
    <scsc-section heading="Parties">
      <scsc-card>
        <scsc-party-list [parties]="parties" />
      </scsc-card>
    </scsc-section>
    <scsc-section heading="Next hearing">
      <scsc-hearing-card
        type="Case Management Conference"
        datetime="Oct 14, 2026 \xB7 9:00 AM"
        department="21"
        judge="Hon. R. Whitfield"
      />
    </scsc-section>
  </div>
</scsc-page-shell>
`}};var D=class t{filing=q(!1);print(){window.print()}newFiling(){this.filing.set(!0),setTimeout(()=>this.filing.set(!1),800)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-header-actions-demo`]],decls:6,vars:1,consts:[[`title`,`Alvarez v. Northgate Property Mgmt.`,`caseNumber`,`24CV012345`,`status`,`active`,`caseType`,`Civil — Unlimited`,`filed`,`2024-03-12`],[`icon`,`printer`,`label`,`Print case summary`,3,`click`],[`variant`,`ghost`,`size`,`sm`],[`variant`,`primary`,`size`,`sm`,3,`click`,`loading`]],template:function(e,c){e&1&&(Ga(0,`scsc-case-header`,0)(1,`scsc-icon-button`,1),lc(`click`,function(){return c.print()}),Lf(),Ga(2,`scsc-button`,2),G_(3,`Request copies`),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return c.newFiling()}),G_(5,` New filing `),Lf()()),e&2&&(Jb(4),Pv(`loading`,c.filing()))},dependencies:[sn,Dr,UE],encapsulation:2})};var k=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-header-minimal-demo`]],decls:1,vars:0,consts:[[`title`,`In re Parentage of K.M.`,`caseNumber`,`24FL004988`,`status`,`sealed`]],template:function(e,c){e&1&&uc(0,`scsc-case-header`,0)},dependencies:[Dr],encapsulation:2})};var w=class t{trail=[{label:`Cases`,link:`.`},{label:`24CV012345`}];parties=[{name:`Maria Alvarez`,role:`Plaintiff`},{name:`Northgate Property Management, Inc.`,role:`Defendant`},{name:`Daniel Reyes, Esq.`,role:`Attorney`,representing:`for Plaintiff`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-case-header-page-demo`]],decls:14,vars:2,consts:[[`slot`,`masthead`,`title`,`Clerk Console`,`subtitle`,`Civil Division`,`logoSrc`,`scsc-seal.png`],[1,`mb-2`,3,`items`],[`title`,`Alvarez v. Northgate Property Mgmt.`,`caseNumber`,`24CV012345`,`status`,`active`,`caseType`,`Civil — Unlimited`,`filed`,`Mar 12, 2024`],[`scsc-button`,``,`variant`,`ghost`,`size`,`sm`,`routerLink`,`.`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`.`],[1,`mt-8`,`grid`,`gap-8`,`lg:grid-cols-2`],[`heading`,`Parties`],[3,`parties`],[`heading`,`Next hearing`],[`type`,`Case Management Conference`,`datetime`,`Oct 14, 2026 · 9:00 AM`,`department`,`21`,`judge`,`Hon. R. Whitfield`]],template:function(e,c){e&1&&(Ga(0,`scsc-page-shell`),uc(1,`scsc-masthead`,0)(2,`scsc-breadcrumb`,1),Ga(3,`scsc-case-header`,2)(4,`a`,3),G_(5,`View docket`),Lf(),Ga(6,`a`,4),G_(7,`New filing`),Lf()(),Ga(8,`div`,5)(9,`scsc-section`,6)(10,`scsc-card`),uc(11,`scsc-party-list`,7),Lf()(),Ga(12,`scsc-section`,8),uc(13,`scsc-hearing-card`,9),Lf()()()),e&2&&(Jb(2),Pv(`items`,c.trail),Jb(9),Pv(`parties`,c.parties))},dependencies:[nu,QN,$E,mN,Dr,Er,FN,XF,Ar,DN],encapsulation:2})};var ue={slug:`case-header`,name:`Case Header`,classes:[`ScscCaseHeader`],category:`Court`,whenToUse:["The top of every case detail page: it renders the page `<h1>` (the case caption) with the case number, status badge, type and filing date in the standard order.","Project the page-level actions (Print, New filing) as children; they sit to the right and wrap on narrow screens. Actions that navigate are `a[scsc-button]` links; actions on the page are `scsc-button`.","For a full tabbed case view use `scsc-case-file`, which includes this header. For non-case pages use `scsc-page-header`."],demos:[{id:`case-header-actions`,title:`With actions`,description:`All inputs set; buttons projected into the default slot.`,component:D,source:p[`case-header-actions`]},{id:`case-header-minimal`,title:`Minimal`,description:`Only the required inputs; the type and "Filed" line are omitted.`,component:k,source:p[`case-header-minimal`]},{id:`case-header-page`,title:`At the top of a case page`,description:"Breadcrumb, the case header as the `<h1>`, `a[scsc-button]` links for actions that navigate, and `h2` sections below.",component:w,source:p[`case-header-page`],layout:`page`,height:`32rem`},{id:`case-header-alert`,title:`With status, actions menu and alert`,description:"A continued case: the primary action stays a button, the rest go in a `scsc-dropdown` (one disabled with its reason), and a warning alert explains the continuance.",component:y,source:p[`case-header-alert`]},{id:`case-header-dark`,title:`Compact in a card, dark theme`,description:`Minimal inputs inside a card, in the dark theme; on narrow screens the action wraps under the title.`,component:S,source:p[`case-header-dark`]}],a11y:["The title is an `<h1>`; use one case header per page and start section headings at `<h2>`.",`The case number uses tabular numerals so digits align in lists and print.`,"Icon-only actions must be `scsc-icon-button` so they carry an accessible name."],related:[`case-file`,`status-badge`,`page-structure`,`button`]};export{ue as CASE_HEADER_DOCS};