import{Es as sD,Lo as d_,Ms as uc,Na as Jb,No as cc,Ps as ut,Ss as rD,Xa as Pv,Yo as iD,Zi as za,bo as Y_,cs as lc,ha as Eg,in as Ta,jn as XP,ka as Ig,kt as NE,ra as Af,sa as C_,va as G_,vn as Vn,x as Ba,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var b=class s{rulings=[{caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Mgmt.`,department:`21`,hearingDate:`Jul 28, 2026`,posted:`Jul 27, 2026 · 1:30 PM`,ruling:`Plaintiff’s Motion to Compel Further Responses to Form Interrogatories, Set One, is GRANTED in part. Defendant shall serve further verified responses to Nos. 12.1 and 15.1 within 20 days. The request for monetary sanctions is DENIED.`},{caseNumber:`24CV020114`,caseTitle:`Brightwave LLC v. Acme Robotics`,department:`21`,hearingDate:`Jul 28, 2026`,posted:`Jul 27, 2026 · 1:30 PM`,ruling:`Defendant’s Demurrer to the First Amended Complaint is OVERRULED as to the first and second causes of action and SUSTAINED with 20 days’ leave to amend as to the third cause of action.`},{caseNumber:`23CV007740`,caseTitle:`Nguyen v. Bayview Medical Group`,department:`7`,hearingDate:`Jul 29, 2026`,ruling:`The parties are ordered to appear. The Court has questions regarding the scope of the proposed protective order.`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tentative-rulings-basic-demo`]],decls:1,vars:1,consts:[[1,`max-w-2xl`,3,`rulings`]],template:function(e,t){e&1&&uc(0,`scsc-tentative-rulings`,0),e&2&&Pv(`rulings`,t.rulings)},dependencies:[XP],encapsulation:2})};var R=class s{rulings=[];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tentative-rulings-empty-demo`]],decls:1,vars:1,consts:[[1,`max-w-2xl`,3,`rulings`]],template:function(e,t){e&1&&uc(0,`scsc-tentative-rulings`,0),e&2&&Pv(`rulings`,t.rulings)},dependencies:[XP],encapsulation:2})};var C=class s{rulings=[{caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Mgmt.`,department:`21`,hearingDate:`Jul 28, 2026`,ruling:`The Motion to Compel is GRANTED in part. Further responses are due within 20 days.`},{caseNumber:`24CV020114`,caseTitle:`Brightwave LLC v. Acme Robotics`,department:`21`,hearingDate:`Jul 28, 2026`,ruling:`The Demurrer is OVERRULED as to the first cause of action and otherwise SUSTAINED.`},{caseNumber:`23CV007740`,caseTitle:`Nguyen v. Bayview Medical Group`,department:`7`,hearingDate:`Jul 29, 2026`,ruling:`The parties are ordered to appear.`}];query=q(``);department=q(``);filtered=ut(()=>{let n=this.query().trim().toLowerCase();return this.rulings.filter(e=>(!this.department()||e.department===this.department())&&(!n||`${e.caseNumber} ${e.caseTitle}`.toLowerCase().includes(n)))});static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tentative-rulings-filter-demo`]],decls:14,vars:4,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[1,`grid`,`items-end`,`gap-3`,`sm:grid-cols-[1fr_12rem]`],[`placeholder`,`Search by case number or name`,3,`valueChange`,`value`],[`label`,`Department`,`for`,`rulings-filter-dept`],[`scsc-select`,``,`id`,`rulings-filter-dept`,3,`change`],[`value`,``,`selected`,``],[`value`,`7`],[`value`,`21`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[3,`rulings`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-search-input`,2),sD(`valueChange`,function(u){return Y_(t.query,u)||(t.query=u),u}),Lf(),Ga(3,`scsc-form-field`,3)(4,`select`,4),lc(`change`,function(u){return t.department.set(u.target.value)}),Ga(5,`option`,5),G_(6,`All departments`),Lf(),Ga(7,`option`,6),G_(8,`Dept. 7`),Lf(),Ga(9,`option`,7),G_(10,`Dept. 21`),Lf()()()(),Ga(11,`scsc-text`,8),G_(12),Lf(),uc(13,`scsc-tentative-rulings`,9),Lf()),e&2&&(Jb(2),iD(`value`,t.query),Jb(10),rD(` `,t.filtered().length,` of `,t.rulings.length,` rulings `),Jb(),Pv(`rulings`,t.filtered()))},dependencies:[Vn,Ta,On,XP,NE],encapsulation:2})};var x=class s{dept=q(`Dept. 10`);rulings=[{caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Mgmt.`,department:`Dept. 10`,hearingDate:`Oct 6, 2026`,ruling:`The motion to compel further responses is GRANTED in part. Defendant shall serve verified responses within 20 days.`,posted:`Oct 5, 2026 · 2:00 PM`},{caseNumber:`24CV015502`,caseTitle:`Chen v. Baylands Logistics, Inc.`,department:`Dept. 10`,hearingDate:`Oct 6, 2026`,ruling:`The demurrer is OVERRULED. Defendant shall answer within 10 days.`,posted:`Oct 5, 2026 · 2:00 PM`},{caseNumber:`23CV098811`,caseTitle:`Okafor v. Silver Creek Motors`,department:`Dept. 16`,hearingDate:`Oct 7, 2026`,ruling:`The motion for summary judgment is DENIED. Triable issues of material fact remain.`,posted:`Oct 6, 2026 · 1:45 PM`}];tabs=ut(()=>[`Dept. 10`,`Dept. 16`,`Dept. 19`].map(n=>({id:n,label:`${n} (${this.rulings.filter(e=>e.department===n).length})`})));shown=ut(()=>this.rulings.filter(n=>n.department===this.dept()));static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tentative-rulings-departments-demo`]],decls:5,vars:4,consts:[[`deptTabs`,``],[1,`flex`,`max-w-3xl`,`flex-col`,`gap-3`],[`panelId`,`rulings-by-dept`,3,`activeChange`,`tabs`,`active`],[`id`,`rulings-by-dept`,`role`,`tabpanel`],[3,`rulings`]],template:function(e,t){if(e&1){let g=d_();Ga(0,`div`,1)(1,`scsc-tabs`,2,0),sD(`activeChange`,function(N){return Eg(g),Y_(t.dept,N)||(t.dept=N),Ig(N)}),Lf(),Ga(3,`div`,3),uc(4,`scsc-tentative-rulings`,4),Lf()()}if(e&2){let g=C_(2);Jb(),Pv(`tabs`,t.tabs()),iD(`active`,t.dept),Jb(2),cc(`aria-labelledby`,g.tabId(t.dept())),Jb(),Pv(`rulings`,t.shown())}},dependencies:[Ba,XP],encapsulation:2})};var w=class s{rulings=[{caseNumber:`22PR001204`,caseTitle:`Estate of Harold Brandt`,department:`Dept. 13`,hearingDate:`Oct 8, 2026`,ruling:`The petition for final distribution is APPROVED as submitted. No appearance necessary.`,posted:`Oct 7, 2026 · 3:00 PM`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tentative-rulings-dark-demo`]],decls:4,vars:1,consts:[[`data-theme`,`scsc-design-dark`,1,`flex`,`max-w-3xl`,`flex-col`,`gap-3`,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[`status`,`info`,`title`,`Contesting a tentative ruling`],[3,`rulings`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-alert`,1),G_(2,` A tentative ruling becomes the order of the court unless a party gives notice by 4:00 PM the court day before the hearing. `),Lf(),uc(3,`scsc-tentative-rulings`,2),Lf()),e&2&&(Jb(3),Pv(`rulings`,t.rulings))},dependencies:[za,XP],encapsulation:2})};var m={"tentative-rulings-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTentativeRulings, type ScscTentativeRuling } from '@scscourt/design';

@Component({
  selector: 'app-tentative-rulings-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTentativeRulings],
  template: \`<scsc-tentative-rulings [rulings]="rulings" class="max-w-2xl" />\`,
})
export class TentativeRulingsBasicDemo {
  protected readonly rulings: ScscTentativeRuling[] = [
    {
      caseNumber: '24CV012345',
      caseTitle: 'Alvarez v. Northgate Property Mgmt.',
      department: '21',
      hearingDate: 'Jul 28, 2026',
      posted: 'Jul 27, 2026 \xB7 1:30 PM',
      ruling:
        'Plaintiff\u2019s Motion to Compel Further Responses to Form Interrogatories, Set One, is GRANTED in part. Defendant shall serve further verified responses to Nos. 12.1 and 15.1 within 20 days. The request for monetary sanctions is DENIED.',
    },
    {
      caseNumber: '24CV020114',
      caseTitle: 'Brightwave LLC v. Acme Robotics',
      department: '21',
      hearingDate: 'Jul 28, 2026',
      posted: 'Jul 27, 2026 \xB7 1:30 PM',
      ruling:
        'Defendant\u2019s Demurrer to the First Amended Complaint is OVERRULED as to the first and second causes of action and SUSTAINED with 20 days\u2019 leave to amend as to the third cause of action.',
    },
    {
      caseNumber: '23CV007740',
      caseTitle: 'Nguyen v. Bayview Medical Group',
      department: '7',
      hearingDate: 'Jul 29, 2026',
      ruling:
        'The parties are ordered to appear. The Court has questions regarding the scope of the proposed protective order.',
    },
  ];
}
`,html:`<scsc-tentative-rulings [rulings]="rulings" class="max-w-2xl" />
`},"tentative-rulings-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAlert, ScscTentativeRulings, type ScscTentativeRuling } from '@scscourt/design';

@Component({
  selector: 'app-tentative-rulings-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscTentativeRulings],
  template: \`
    <div
      data-theme="scsc-design-dark"
      class="flex max-w-3xl flex-col gap-3 rounded-box bg-base-200 p-4 text-base-content"
    >
      <scsc-alert status="info" title="Contesting a tentative ruling">
        A tentative ruling becomes the order of the court unless a party gives notice by 4:00 PM the
        court day before the hearing.
      </scsc-alert>
      <scsc-tentative-rulings [rulings]="rulings" />
    </div>
  \`,
})
export class TentativeRulingsDarkDemo {
  protected readonly rulings: ScscTentativeRuling[] = [
    {
      caseNumber: '22PR001204',
      caseTitle: 'Estate of Harold Brandt',
      department: 'Dept. 13',
      hearingDate: 'Oct 8, 2026',
      ruling:
        'The petition for final distribution is APPROVED as submitted. No appearance necessary.',
      posted: 'Oct 7, 2026 \xB7 3:00 PM',
    },
  ];
}
`,html:`<div
  data-theme="scsc-design-dark"
  class="flex max-w-3xl flex-col gap-3 rounded-box bg-base-200 p-4 text-base-content"
>
  <scsc-alert status="info" title="Contesting a tentative ruling">
    A tentative ruling becomes the order of the court unless a party gives notice by 4:00 PM the
    court day before the hearing.
  </scsc-alert>
  <scsc-tentative-rulings [rulings]="rulings" />
</div>
`},"tentative-rulings-departments":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscTabs,
  ScscTentativeRulings,
  type ScscTab,
  type ScscTentativeRuling,
} from '@scscourt/design';

@Component({
  selector: 'app-tentative-rulings-departments-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTabs, ScscTentativeRulings],
  template: \`
    <div class="flex max-w-3xl flex-col gap-3">
      <scsc-tabs #deptTabs [tabs]="tabs()" [(active)]="dept" panelId="rulings-by-dept" />
      <div id="rulings-by-dept" role="tabpanel" [attr.aria-labelledby]="deptTabs.tabId(dept())">
        <scsc-tentative-rulings [rulings]="shown()" />
      </div>
    </div>
  \`,
})
export class TentativeRulingsDepartmentsDemo {
  protected readonly dept = signal('Dept. 10');
  protected readonly rulings: ScscTentativeRuling[] = [
    {
      caseNumber: '24CV012345',
      caseTitle: 'Alvarez v. Northgate Property Mgmt.',
      department: 'Dept. 10',
      hearingDate: 'Oct 6, 2026',
      ruling:
        'The motion to compel further responses is GRANTED in part. Defendant shall serve verified responses within 20 days.',
      posted: 'Oct 5, 2026 \xB7 2:00 PM',
    },
    {
      caseNumber: '24CV015502',
      caseTitle: 'Chen v. Baylands Logistics, Inc.',
      department: 'Dept. 10',
      hearingDate: 'Oct 6, 2026',
      ruling: 'The demurrer is OVERRULED. Defendant shall answer within 10 days.',
      posted: 'Oct 5, 2026 \xB7 2:00 PM',
    },
    {
      caseNumber: '23CV098811',
      caseTitle: 'Okafor v. Silver Creek Motors',
      department: 'Dept. 16',
      hearingDate: 'Oct 7, 2026',
      ruling: 'The motion for summary judgment is DENIED. Triable issues of material fact remain.',
      posted: 'Oct 6, 2026 \xB7 1:45 PM',
    },
  ];
  protected readonly tabs = computed<ScscTab[]>(() =>
    ['Dept. 10', 'Dept. 16', 'Dept. 19'].map((d) => ({
      id: d,
      label: \`\${d} (\${this.rulings.filter((r) => r.department === d).length})\`,
    })),
  );
  protected readonly shown = computed(() =>
    this.rulings.filter((r) => r.department === this.dept()),
  );
}
`,html:`<div class="flex max-w-3xl flex-col gap-3">
  <scsc-tabs #deptTabs [tabs]="tabs()" [(active)]="dept" panelId="rulings-by-dept" />
  <div id="rulings-by-dept" role="tabpanel" [attr.aria-labelledby]="deptTabs.tabId(dept())">
    <scsc-tentative-rulings [rulings]="shown()" />
  </div>
</div>
`},"tentative-rulings-empty":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTentativeRulings, type ScscTentativeRuling } from '@scscourt/design';

@Component({
  selector: 'app-tentative-rulings-empty-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTentativeRulings],
  template: \`<scsc-tentative-rulings [rulings]="rulings" class="max-w-2xl" />\`,
})
export class TentativeRulingsEmptyDemo {
  protected readonly rulings: ScscTentativeRuling[] = [];
}
`,html:`<scsc-tentative-rulings [rulings]="rulings" class="max-w-2xl" />
`},"tentative-rulings-filter":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscFormField,
  ScscSearchInput,
  ScscSelect,
  ScscTentativeRulings,
  ScscText,
  type ScscTentativeRuling,
} from '@scscourt/design';

@Component({
  selector: 'app-tentative-rulings-filter-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSearchInput, ScscSelect, ScscTentativeRulings, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <div class="grid items-end gap-3 sm:grid-cols-[1fr_12rem]">
        <!-- The placeholder is the search box's accessible name, so make it descriptive. -->
        <scsc-search-input placeholder="Search by case number or name" [(value)]="query" />
        <scsc-form-field label="Department" for="rulings-filter-dept">
          <select
            scsc-select
            id="rulings-filter-dept"
            (change)="department.set($any($event.target).value)"
          >
            <option value="" selected>All departments</option>
            <option value="7">Dept. 7</option>
            <option value="21">Dept. 21</option>
          </select>
        </scsc-form-field>
      </div>

      <scsc-text size="sm" tone="muted" role="status">
        {{ filtered().length }} of {{ rulings.length }} rulings
      </scsc-text>
      <!-- The component only renders: filter and sort in the page, then pass the result. -->
      <scsc-tentative-rulings [rulings]="filtered()" />
    </div>
  \`,
})
export class TentativeRulingsFilterDemo {
  protected readonly rulings: ScscTentativeRuling[] = [
    {
      caseNumber: '24CV012345',
      caseTitle: 'Alvarez v. Northgate Property Mgmt.',
      department: '21',
      hearingDate: 'Jul 28, 2026',
      ruling: 'The Motion to Compel is GRANTED in part. Further responses are due within 20 days.',
    },
    {
      caseNumber: '24CV020114',
      caseTitle: 'Brightwave LLC v. Acme Robotics',
      department: '21',
      hearingDate: 'Jul 28, 2026',
      ruling: 'The Demurrer is OVERRULED as to the first cause of action and otherwise SUSTAINED.',
    },
    {
      caseNumber: '23CV007740',
      caseTitle: 'Nguyen v. Bayview Medical Group',
      department: '7',
      hearingDate: 'Jul 29, 2026',
      ruling: 'The parties are ordered to appear.',
    },
  ];

  protected readonly query = signal('');
  protected readonly department = signal('');

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.rulings.filter(
      (r) =>
        (!this.department() || r.department === this.department()) &&
        (!q || \`\${r.caseNumber} \${r.caseTitle}\`.toLowerCase().includes(q)),
    );
  });
}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <div class="grid items-end gap-3 sm:grid-cols-[1fr_12rem]">
    <!-- The placeholder is the search box's accessible name, so make it descriptive. -->
    <scsc-search-input placeholder="Search by case number or name" [(value)]="query" />
    <scsc-form-field label="Department" for="rulings-filter-dept">
      <select
        scsc-select
        id="rulings-filter-dept"
        (change)="department.set($any($event.target).value)"
      >
        <option value="" selected>All departments</option>
        <option value="7">Dept. 7</option>
        <option value="21">Dept. 21</option>
      </select>
    </scsc-form-field>
  </div>

  <scsc-text size="sm" tone="muted" role="status">
    {{ filtered().length }} of {{ rulings.length }} rulings
  </scsc-text>
  <!-- The component only renders: filter and sort in the page, then pass the result. -->
  <scsc-tentative-rulings [rulings]="filtered()" />
</div>
`}};var pe={slug:`tentative-rulings`,name:`Tentative Rulings`,classes:[`ScscTentativeRulings`],category:`Court`,whenToUse:[`The public civil tentative rulings page and department-level lists: one expandable entry per ruling with case, department, hearing date and the full ruling text.`,"Sort and filter (by department or date) in your app before passing `rulings`; the component only renders.","Ruling text keeps its line breaks (`whitespace-pre-line`), so paste the clerk's text as-is."],demos:[{id:`tentative-rulings-basic`,title:`Posted rulings`,description:"Three rulings; `posted` is optional and shown when present. Click a row to expand.",component:b,source:m[`tentative-rulings-basic`]},{id:`tentative-rulings-empty`,title:`None posted`,description:`An empty array renders the "no tentative rulings" message.`,component:R,source:m[`tentative-rulings-empty`]},{id:`tentative-rulings-filter`,title:`Search and filter`,description:"A search box and a department select drive a `computed` list; a status line keeps the count current, and no matches falls back to the empty message.",component:C,source:m[`tentative-rulings-filter`]},{id:`tentative-rulings-departments`,title:`By department`,description:`Tabs per department with counts; the panel lists that department's rulings (or says there are none).`,component:x,source:m[`tentative-rulings-departments`]},{id:`tentative-rulings-dark`,title:`With the contest notice, dark theme`,description:`An info alert explains how to contest a tentative ruling, above a probate ruling.`,component:w,source:m[`tentative-rulings-dark`]}],a11y:["Each ruling is a native `<details>`/`<summary>`: keyboard toggling and expanded state come for free.",`The summary carries the case title first so the list is scannable by screen reader users.`,'Filtering is silent unless you say so: keep a `role="status"` count next to the filters (the filter demo).'],related:[`accordion`,`case-search`,`docket-table`]};export{pe as TENTATIVE_RULINGS_DOCS};