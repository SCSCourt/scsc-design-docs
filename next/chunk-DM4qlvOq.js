import{Cs as rM,H as FN,Hs as y_,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Xa as Pv,cs as lc,ha as Eg,ka as Ig,kn as XF,ks as t_,ms as nu,pi as sn,ra as Af,t as $E,va as G_,vi as tP,vn as Vn,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var P=()=>({by:`party`});var h=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-error-state-custom-demo`]],decls:6,vars:2,consts:[[`kind`,`404`,`icon`,`folder-search`,`title`,`Case not found`,`message`,`No case matches 24CV099999. Check the number on your notice, or search by party name.`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`],[`scsc-button`,``,`routerLink`,`.`,3,`queryParams`],[`scsc-button`,``,`variant`,`ghost`,`routerLink`,`.`]],template:function(e,m){e&1&&(Ga(0,`scsc-error-state`,0)(1,`div`,1)(2,`a`,2),G_(3,`Search by party name`),Lf(),Ga(4,`a`,3),G_(5,`Help with case numbers`),Lf()()()),e&2&&(Jb(2),Pv(`queryParams`,rM(1,P)))},dependencies:[nu,$E,tP],encapsulation:2})};function K(t,a){t&1&&(Ga(0,`scsc-error-state`,5)(1,`a`,8),G_(2,`Request access`),Lf()())}function j(t,a){if(t&1){let e=d_();Ga(0,`scsc-error-state`,6)(1,`scsc-button`,9),lc(`click`,function(){Eg(e);let n=y_();return Ig(n.retry())}),G_(2,`Try again`),Lf()()}if(t&2){let e=y_();Jb(),Pv(`loading`,e.retrying())}}function q(t,a){t&1&&(Ga(0,`scsc-error-state`,7)(1,`a`,10),G_(2,`Court holidays and closures`),Lf()())}var g=class t{outcome=q$1(`403`);retrying=q$1(!1);retry(){this.retrying.set(!0),setTimeout(()=>this.retrying.set(!1),1200)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-error-state-kinds-demo`]],decls:11,vars:1,consts:[[`label`,`Simulate the response`,`for`,`error-kinds-outcome`,1,`max-w-xs`],[`scsc-select`,``,`id`,`error-kinds-outcome`,`size`,`sm`,3,`change`],[`value`,`403`,`selected`,``],[`value`,`500`],[`value`,`maintenance`],[`kind`,`403`],[`kind`,`500`],[`kind`,`maintenance`,`message`,`E-filing is down for scheduled maintenance until 2:00 AM on Sunday, Oct 4. Filings due tonight are accepted on the next court day.`],[`scsc-button`,``,`routerLink`,`.`],[3,`click`,`loading`],[`scsc-button`,``,`variant`,`ghost`,`routerLink`,`.`]],template:function(e,m){if(e&1&&(Ga(0,`scsc-form-field`,0)(1,`select`,1),lc(`change`,function(O){return m.outcome.set(O.target.value)}),Ga(2,`option`,2),G_(3,`403 Forbidden`),Lf(),Ga(4,`option`,3),G_(5,`500 Server error`),Lf(),Ga(6,`option`,4),G_(7,`503 Maintenance`),Lf()()(),JT(8,K,3,0,`scsc-error-state`,5)(9,j,3,1,`scsc-error-state`,6)(10,q,3,0,`scsc-error-state`,7)),e&2){let n;Jb(8),t_((n=m.outcome())===`403`?8:n===`500`?9:n===`maintenance`?10:-1)}},dependencies:[nu,sn,$E,tP,Vn,On],encapsulation:2})};var y=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-error-state-not-found-demo`]],decls:8,vars:0,consts:[[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`],[`kind`,`404`],[1,`flex`,`flex-wrap`,`justify-center`,`gap-2`],[`scsc-button`,``,`routerLink`,`.`],[`scsc-button`,``,`variant`,`ghost`,`routerLink`,`.`]],template:function(e,m){e&1&&(Ga(0,`scsc-page-shell`),uc(1,`scsc-masthead`,0),Ga(2,`scsc-error-state`,1)(3,`div`,2)(4,`a`,3),G_(5,`Back to home`),Lf(),Ga(6,`a`,4),G_(7,`Search cases`),Lf()()()())},dependencies:[nu,$E,tP,FN,XF],encapsulation:2})};var f={"error-state-custom":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscErrorState } from '@scscourt/design';

@Component({
  selector: 'app-error-state-custom-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscErrorState],
  template: \`
    <!-- Keep the preset's code, override the copy and icon for the situation. -->
    <scsc-error-state
      kind="404"
      icon="folder-search"
      title="Case not found"
      message="No case matches 24CV099999. Check the number on your notice, or search by party name."
    >
      <div class="flex flex-wrap justify-center gap-2">
        <a scsc-button routerLink="." [queryParams]="{ by: 'party' }">Search by party name</a>
        <a scsc-button variant="ghost" routerLink=".">Help with case numbers</a>
      </div>
    </scsc-error-state>
  \`,
})
export class ErrorStateCustomDemo {}
`,html:`<!-- Keep the preset's code, override the copy and icon for the situation. -->
<scsc-error-state
  kind="404"
  icon="folder-search"
  title="Case not found"
  message="No case matches 24CV099999. Check the number on your notice, or search by party name."
>
  <div class="flex flex-wrap justify-center gap-2">
    <a scsc-button routerLink="." [queryParams]="{ by: 'party' }">Search by party name</a>
    <a scsc-button variant="ghost" routerLink=".">Help with case numbers</a>
  </div>
</scsc-error-state>
`},"error-state-kinds":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscButton,
  ScscButtonLink,
  ScscErrorState,
  ScscFormField,
  ScscSelect,
} from '@scscourt/design';

type Outcome = '403' | '500' | 'maintenance';

@Component({
  selector: 'app-error-state-kinds-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButton, ScscButtonLink, ScscErrorState, ScscFormField, ScscSelect],
  template: \`
    <scsc-form-field label="Simulate the response" for="error-kinds-outcome" class="max-w-xs">
      <select
        scsc-select
        id="error-kinds-outcome"
        size="sm"
        (change)="outcome.set($any($event.target).value)"
      >
        <option value="403" selected>403 Forbidden</option>
        <option value="500">500 Server error</option>
        <option value="maintenance">503 Maintenance</option>
      </select>
    </scsc-form-field>

    <!-- One page, one outcome: map the failure to a preset and give it the right way out. -->
    @switch (outcome()) {
      @case ('403') {
        <scsc-error-state kind="403">
          <a scsc-button routerLink=".">Request access</a>
        </scsc-error-state>
      }
      @case ('500') {
        <scsc-error-state kind="500">
          <scsc-button [loading]="retrying()" (click)="retry()">Try again</scsc-button>
        </scsc-error-state>
      }
      @case ('maintenance') {
        <scsc-error-state
          kind="maintenance"
          message="E-filing is down for scheduled maintenance until 2:00 AM on Sunday, Oct 4. Filings due tonight are accepted on the next court day."
        >
          <a scsc-button variant="ghost" routerLink=".">Court holidays and closures</a>
        </scsc-error-state>
      }
    }
  \`,
})
export class ErrorStateKindsDemo {
  protected readonly outcome = signal<Outcome>('403');
  protected readonly retrying = signal(false);

  /** Stand-in for re-running the failed request. */
  protected retry(): void {
    this.retrying.set(true);
    setTimeout(() => this.retrying.set(false), 1200);
  }
}
`,html:`<scsc-form-field label="Simulate the response" for="error-kinds-outcome" class="max-w-xs">
  <select
    scsc-select
    id="error-kinds-outcome"
    size="sm"
    (change)="outcome.set($any($event.target).value)"
  >
    <option value="403" selected>403 Forbidden</option>
    <option value="500">500 Server error</option>
    <option value="maintenance">503 Maintenance</option>
  </select>
</scsc-form-field>

<!-- One page, one outcome: map the failure to a preset and give it the right way out. -->
@switch (outcome()) {
  @case ('403') {
    <scsc-error-state kind="403">
      <a scsc-button routerLink=".">Request access</a>
    </scsc-error-state>
  }
  @case ('500') {
    <scsc-error-state kind="500">
      <scsc-button [loading]="retrying()" (click)="retry()">Try again</scsc-button>
    </scsc-error-state>
  }
  @case ('maintenance') {
    <scsc-error-state
      kind="maintenance"
      message="E-filing is down for scheduled maintenance until 2:00 AM on Sunday, Oct 4. Filings due tonight are accepted on the next court day."
    >
      <a scsc-button variant="ghost" routerLink=".">Court holidays and closures</a>
    </scsc-error-state>
  }
}
`},"error-state-not-found":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscErrorState, ScscMasthead, ScscPageShell } from '@scscourt/design';

/** The component for the wildcard route: \`{ path: '**', component: NotFoundPage }\`. */
@Component({
  selector: 'app-error-state-not-found-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscErrorState, ScscMasthead, ScscPageShell],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California, County of Santa Clara"
        logoSrc="scsc-seal.png"
      />

      <scsc-error-state kind="404">
        <!-- Both ways out navigate, so they are links styled as buttons. -->
        <div class="flex flex-wrap justify-center gap-2">
          <a scsc-button routerLink=".">Back to home</a>
          <a scsc-button variant="ghost" routerLink=".">Search cases</a>
        </div>
      </scsc-error-state>
    </scsc-page-shell>
  \`,
})
export class ErrorStateNotFoundDemo {}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California, County of Santa Clara"
    logoSrc="scsc-seal.png"
  />

  <scsc-error-state kind="404">
    <!-- Both ways out navigate, so they are links styled as buttons. -->
    <div class="flex flex-wrap justify-center gap-2">
      <a scsc-button routerLink=".">Back to home</a>
      <a scsc-button variant="ghost" routerLink=".">Search cases</a>
    </div>
  </scsc-error-state>
</scsc-page-shell>
`}};var re={slug:`error-state`,name:`Error State`,classes:[`ScscErrorState`],category:`Layout`,whenToUse:[`Full-page outcomes: the 404 route, a 403 guard, an unrecoverable 500, or a maintenance window. Route the wildcard path to a page that renders it inside your shell.`,"Always project at least one way out as the default slot. Use `a[scsc-button]` with `routerLink` for ways out that navigate (home, search, request access) and `scsc-button` for actions on the page (Try again).","For an empty list or search with no results use `scsc-empty-state`; for an inline failure inside a working page use `scsc-alert`.",'Override `title`, `message` and `icon` when the preset copy is too generic (e.g. "Case not found"), and say when a maintenance window ends.'],demos:[{id:`error-state-not-found`,title:`404 page`,description:"The wildcard-route page: the 404 preset inside `scsc-page-shell`, with two `a[scsc-button]` links as the ways out.",component:y,source:f[`error-state-not-found`],layout:`page`,height:`30rem`},{id:`error-state-kinds`,title:`403, 500 and maintenance`,description:"An `@switch` maps the failed response to a preset: a link to request access, a Try again button, and maintenance copy that says when it ends.",component:g,source:f[`error-state-kinds`]},{id:`error-state-custom`,title:`Custom copy`,description:`Keep the 404 code but replace the icon, title and message for a missing case.`,component:h,source:f[`error-state-custom`]}],a11y:["The title is an `<h1>` by default, for a state that is the whole page; set `headingLevel` (1–6) when it renders inside a page that already has its own `<h1>`. The look does not change. `icon` also takes an SCSC alias (`status.error`).","Renders the title as an `<h1>`: use it as the whole page, not inside a page that already has one.",`The icon is decorative; the error code and message are visible text, so nothing depends on colour or the icon.`,"Ways out that navigate must be links (`a[scsc-button]`), so they are announced as links and work with the browser history; make the primary recovery action the first one."],related:[`empty-state`,`alert`,`shells`,`page-shell`]};export{re as ERROR_STATE_DOCS};