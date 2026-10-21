import{Hs as y_,I as EP,Ki as ye,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Ps as ut,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,ii as qo,ka as Ig,ks as t_,ms as nu,pi as sn,ra as Af,t as $E,va as G_,vn as Vn,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var u=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-empty-state-basic-demo`]],decls:4,vars:0,consts:[[`title`,`No filings yet`,`message`,`Documents you file on this case will appear here, usually within a few minutes.`,`icon`,`inbox`],[`scsc-button`,``,`routerLink`,`.`],[`name`,`upload`,`size`,`sm`]],template:function(e,c){e&1&&(Ga(0,`scsc-empty-state`,0)(1,`a`,1),uc(2,`scsc-icon`,2),G_(3,` File a document `),Lf()())},dependencies:[nu,$E,Xa,ye],encapsulation:2})};var d=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-empty-state-in-card-demo`]],decls:5,vars:0,consts:[[1,`grid`,`max-w-3xl`,`gap-4`,`sm:grid-cols-2`],[`title`,`Upcoming hearings`],[`icon`,`calendar-days`,`title`,`No hearings scheduled`,`message`,`When the court sets a hearing on this case, it will appear here and you will get a notice.`],[`title`,`Tentative rulings`],[`icon`,`scale`,`title`,`No tentative rulings`,`message`,`Rulings are posted by 2:00 PM the court day before a law and motion hearing.`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`scsc-card`,1),uc(2,`scsc-empty-state`,2),Lf(),Ga(3,`scsc-card`,3),uc(4,`scsc-empty-state`,4),Lf()())},dependencies:[mN,Xa],encapsulation:2})};var $=(t,s)=>s.caseNumber;function O(t,s){if(t&1&&(Ga(0,`li`,5)(1,`span`),G_(2),Lf(),Ga(3,`span`,6),G_(4),Lf()()),t&2){let e=s.$implicit;Jb(2),nD(e.title),Jb(2),nD(e.caseNumber)}}function U(t,s){if(t&1&&(Ga(0,`scsc-list`,3),o_(1,O,5,2,`li`,5,$),Lf()),t&2){let e=y_();Jb(),i_(e.results())}}function W(t,s){if(t&1){let e=d_();Ga(0,`scsc-empty-state`,4)(1,`scsc-button`,7),lc(`click`,function(){Eg(e);let b=y_();return Ig(b.query.set(``))}),G_(2,`Clear search`),Lf()()}if(t&2){let e=y_();Pv(`message`,`Nothing found for “`+e.query()+`”. Check the spelling or try the case number.`)}}var h=class t{cases=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`},{caseNumber:`24FL004521`,title:`In re Marriage of Chen`},{caseNumber:`23PR008812`,title:`Estate of O'Donnell`}];query=q(`zzz`);results=ut(()=>{let s=this.query().trim().toLowerCase();return this.cases.filter(e=>!s||`${e.title} ${e.caseNumber}`.toLowerCase().includes(s))});static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-empty-state-search-demo`]],decls:5,vars:2,consts:[[1,`max-w-md`],[`label`,`Search cases`,`for`,`case-search`],[`scsc-input`,``,`id`,`case-search`,`type`,`search`,`placeholder`,`Name or case number`,3,`input`,`value`],[1,`mt-3`],[`title`,`No cases match`,`icon`,`search`,3,`message`],[1,`flex`,`justify-between`,`gap-4`,`py-2`,`text-sm`],[1,`tnum`,`text-base-content/70`],[`variant`,`ghost`,3,`click`]],template:function(e,c){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`input`,2),lc(`input`,function(R){return c.query.set(R.target.value)}),Lf()(),JT(3,U,3,0,`scsc-list`,3)(4,W,3,1,`scsc-empty-state`,4),Lf()),e&2&&(Jb(2),Pv(`value`,c.query()),Jb(),t_(c.results().length>0?3:4))},dependencies:[sn,Xa,Vn,qo,EP],encapsulation:2})};var y={"empty-state-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscEmptyState, ScscIcon } from '@scscourt/design';

@Component({
  selector: 'app-empty-state-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscEmptyState, ScscIcon],
  template: \`
    <scsc-empty-state
      title="No filings yet"
      message="Documents you file on this case will appear here, usually within a few minutes."
      icon="inbox"
    >
      <!-- The action opens the e-filing flow, so it is a link styled as a button. -->
      <a scsc-button routerLink=".">
        <scsc-icon name="upload" size="sm" />
        File a document
      </a>
    </scsc-empty-state>
  \`,
})
export class EmptyStateBasicDemo {}
`,html:`<scsc-empty-state
  title="No filings yet"
  message="Documents you file on this case will appear here, usually within a few minutes."
  icon="inbox"
>
  <!-- The action opens the e-filing flow, so it is a link styled as a button. -->
  <a scsc-button routerLink=".">
    <scsc-icon name="upload" size="sm" />
    File a document
  </a>
</scsc-empty-state>
`},"empty-state-in-card":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscEmptyState } from '@scscourt/design';

@Component({
  selector: 'app-empty-state-in-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscEmptyState],
  template: \`
    <div class="grid max-w-3xl gap-4 sm:grid-cols-2">
      <!-- Nothing the user can do about it, so no action: the message says what to expect. -->
      <scsc-card title="Upcoming hearings">
        <scsc-empty-state
          icon="calendar-days"
          title="No hearings scheduled"
          message="When the court sets a hearing on this case, it will appear here and you will get a notice."
        />
      </scsc-card>
      <scsc-card title="Tentative rulings">
        <scsc-empty-state
          icon="scale"
          title="No tentative rulings"
          message="Rulings are posted by 2:00 PM the court day before a law and motion hearing."
        />
      </scsc-card>
    </div>
  \`,
})
export class EmptyStateInCardDemo {}
`,html:`<div class="grid max-w-3xl gap-4 sm:grid-cols-2">
  <!-- Nothing the user can do about it, so no action: the message says what to expect. -->
  <scsc-card title="Upcoming hearings">
    <scsc-empty-state
      icon="calendar-days"
      title="No hearings scheduled"
      message="When the court sets a hearing on this case, it will appear here and you will get a notice."
    />
  </scsc-card>
  <scsc-card title="Tentative rulings">
    <scsc-empty-state
      icon="scale"
      title="No tentative rulings"
      message="Rulings are posted by 2:00 PM the court day before a law and motion hearing."
    />
  </scsc-card>
</div>
`},"empty-state-search":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscEmptyState, ScscFormField, ScscInput, ScscList } from '@scscourt/design';

interface CaseSummary {
  caseNumber: string;
  title: string;
}

@Component({
  selector: 'app-empty-state-search-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscEmptyState, ScscFormField, ScscInput, ScscList],
  template: \`
    <div class="max-w-md">
      <scsc-form-field label="Search cases" for="case-search">
        <input
          scsc-input
          id="case-search"
          type="search"
          placeholder="Name or case number"
          [value]="query()"
          (input)="query.set($any($event.target).value)"
        />
      </scsc-form-field>

      @if (results().length > 0) {
        <scsc-list class="mt-3">
          @for (c of results(); track c.caseNumber) {
            <li class="flex justify-between gap-4 py-2 text-sm">
              <span>{{ c.title }}</span>
              <span class="tnum text-base-content/70">{{ c.caseNumber }}</span>
            </li>
          }
        </scsc-list>
      } @else {
        <scsc-empty-state
          title="No cases match"
          [message]="
            'Nothing found for \u201C' + query() + '\u201D. Check the spelling or try the case number.'
          "
          icon="search"
        >
          <scsc-button variant="ghost" (click)="query.set('')">Clear search</scsc-button>
        </scsc-empty-state>
      }
    </div>
  \`,
})
export class EmptyStateSearchDemo {
  private readonly cases: CaseSummary[] = [
    { caseNumber: '24CV012345', title: 'Alvarez v. Northgate Properties' },
    { caseNumber: '24FL004521', title: 'In re Marriage of Chen' },
    { caseNumber: '23PR008812', title: "Estate of O'Donnell" },
  ];

  protected readonly query = signal('zzz');

  protected readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.cases.filter((c) => !q || \`\${c.title} \${c.caseNumber}\`.toLowerCase().includes(q));
  });
}
`,html:`<div class="max-w-md">
  <scsc-form-field label="Search cases" for="case-search">
    <input
      scsc-input
      id="case-search"
      type="search"
      placeholder="Name or case number"
      [value]="query()"
      (input)="query.set($any($event.target).value)"
    />
  </scsc-form-field>

  @if (results().length > 0) {
    <scsc-list class="mt-3">
      @for (c of results(); track c.caseNumber) {
        <li class="flex justify-between gap-4 py-2 text-sm">
          <span>{{ c.title }}</span>
          <span class="tnum text-base-content/70">{{ c.caseNumber }}</span>
        </li>
      }
    </scsc-list>
  } @else {
    <scsc-empty-state
      title="No cases match"
      [message]="
        'Nothing found for \u201C' + query() + '\u201D. Check the spelling or try the case number.'
      "
      icon="search"
    >
      <scsc-button variant="ghost" (click)="query.set('')">Clear search</scsc-button>
    </scsc-empty-state>
  }
</div>
`}};var ce={slug:`empty-state`,name:`Empty State`,classes:[`ScscEmptyState`],category:`Data Display`,whenToUse:[`A list, table or search that legitimately has nothing in it. Say what would fill it and, if the user can act, give them the action.`,'`title` states the fact ("No filings yet"); `message` is the one sentence of context or next step; projected content is the action.',`When there is nothing the user can do (no hearings scheduled yet), leave the action out and say what will happen instead.`,"Something went wrong (404, 500, offline, forbidden)? That is `scsc-error-state`, not an empty state.","Inside `scsc-table` a one-line `emptyMessage` is usually enough; use this component when the empty case deserves an action."],demos:[{id:`empty-state-basic`,title:`With an action`,description:"Title, message, icon and a projected `a[scsc-button]`, since the action opens another page.",component:u,source:y[`empty-state-basic`]},{id:`empty-state-search`,title:`No search results`,description:`Swap the list for the empty state when the filter yields nothing; the action clears the query.`,component:h,source:y[`empty-state-search`]},{id:`empty-state-in-card`,title:`Inside dashboard cards`,description:`No action, just what to expect: empty sections of a case overview, each with an icon that matches its content.`,component:d,source:y[`empty-state-in-card`]}],a11y:["`icon` takes a Lucide name or an SCSC alias (`action.search`, `data.audit`), resolved through `resolveScscIcon()`; the icon is decorative (`aria-hidden`).","The `title` is a heading (`<h2>` by default; set `headingLevel` to fit the page outline, or `null` for a plain paragraph inside a widget). The look is the same at every level, and the `message` is a paragraph.","When the empty state replaces results after a search, announce it (a live region or `scsc-toast`) so screen-reader users know the list changed.","Project one action at most: `scsc-button` for something that happens on the page, `a[scsc-button]` when it navigates."],appMustProvide:["A `headingLevel` one below the section the empty state sits in, and an announcement when it replaces search results."],related:[`error-state`,`table`,`search-input`]};export{ce as EMPTY_STATE_DOCS};