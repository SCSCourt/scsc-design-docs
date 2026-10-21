import{Ms as uc,Na as Jb,Xa as Pv,cs as lc,ds as nD,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{a as nt}from"./chunk-B29IWKja.js";var d=class t{selected=q(null);caseRecord={caseNumber:`24CV012345`,caption:`Alvarez v. Pacific Transit Authority`,caseType:`Civil Unlimited`,status:`Active`,filedOn:`2024-03-18`,sealed:!1,assignedJudge:{name:`Hon. Amy Chen`,department:`10`},parties:[{role:`Plaintiff`,name:`Maria Alvarez`,attorney:{name:`Daniel Reyes`,barNumber:`287431`}},{role:`Defendant`,name:`Pacific Transit Authority`,attorney:{name:`Priya Natarajan`,barNumber:`301952`}}],nextHearing:{type:`Motion to Compel`,date:`2026-10-14`,time:`08:30`,courtroom:`Department 10`,remote:!0},balanceDue:0,interpreter:null};static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-json-view-case-record-demo`]],decls:5,vars:2,consts:[[`label`,`Case 24CV012345`,3,`nodeSelect`,`value`],[1,`mt-2`,`text-sm`,`text-base-content/70`],[1,`tnum`]],template:function(e,o){e&1&&(Ga(0,`scsc-json-view`,0),lc(`nodeSelect`,function(D){return o.selected.set(D)}),Lf(),Ga(1,`p`,1),G_(2,` Selected: `),Ga(3,`code`,2),G_(4),Lf()()),e&2&&(Pv(`value`,o.caseRecord),Jb(4),nD(o.selected()?.path??`nothing yet — click a row or press Enter`))},dependencies:[nt],encapsulation:2})};var b=[`Complaint filed`,`Summons issued`,`Proof of service filed`,`Answer filed`,`Case management statement filed`,`Notice of motion and motion to compel`,`Opposition filed`,`Reply filed`,`Minute order`,`Request for sanctions`];var C=[`Plaintiff`,`Defendant`,`Court`,`eFiling gateway`];var l=class t{docket={caseNumber:`24CV012345`,exportedAt:`2026-09-29T16:04:00-07:00`,entries:Array.from({length:1200},(n,e)=>({seq:e+1,filed:new Date(Date.UTC(2024,2,18)+e*432e5).toISOString().slice(0,10),text:b[e%b.length],filedBy:C[e*3%C.length],pages:e%7+1}))};static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-json-view-docket-demo`]],decls:1,vars:2,consts:[[`label`,`Register of actions`,`maxHeight`,`24rem`,3,`value`,`pageSize`]],template:function(e,o){e&1&&uc(0,`scsc-json-view`,0),e&2&&Pv(`value`,o.docket)(`pageSize`,25)},dependencies:[nt],encapsulation:2})};var m=class t{responseBody=`{
  "envelopeId": "ENV-2026-0913-4471",
  "status": "Accepted",
  "fees": [
    { "code": "FEE-435", "description": "First paper, unlimited civil", "amount": 435.00 },
    { "code": "FEE-60", "description": "Motion", "amount": 60.00 },
  ]
}`;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-json-view-malformed-demo`]],decls:1,vars:1,consts:[[`label`,`Response body`,3,`json`]],template:function(e,o){e&1&&uc(0,`scsc-json-view`,0),e&2&&Pv(`json`,o.responseBody)},dependencies:[nt],encapsulation:2})};var p={"json-view-case-record":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscJsonView, type ScscJsonSelection } from '@scscourt/design/code';

@Component({
  selector: 'app-json-view-case-record-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscJsonView],
  template: \`
    <scsc-json-view
      [value]="caseRecord"
      label="Case 24CV012345"
      (nodeSelect)="selected.set($event)"
    />
    <p class="mt-2 text-sm text-base-content/70">
      Selected:
      <code class="tnum">{{ selected()?.path ?? 'nothing yet \u2014 click a row or press Enter' }}</code>
    </p>
  \`,
})
export class JsonViewCaseRecordDemo {
  protected readonly selected = signal<ScscJsonSelection | null>(null);

  // A case record as the case management API returns it.
  protected readonly caseRecord = {
    caseNumber: '24CV012345',
    caption: 'Alvarez v. Pacific Transit Authority',
    caseType: 'Civil Unlimited',
    status: 'Active',
    filedOn: '2024-03-18',
    sealed: false,
    assignedJudge: { name: 'Hon. Amy Chen', department: '10' },
    parties: [
      {
        role: 'Plaintiff',
        name: 'Maria Alvarez',
        attorney: { name: 'Daniel Reyes', barNumber: '287431' },
      },
      {
        role: 'Defendant',
        name: 'Pacific Transit Authority',
        attorney: { name: 'Priya Natarajan', barNumber: '301952' },
      },
    ],
    nextHearing: {
      type: 'Motion to Compel',
      date: '2026-10-14',
      time: '08:30',
      courtroom: 'Department 10',
      remote: true,
    },
    balanceDue: 0,
    interpreter: null,
  };
}
`,html:`<scsc-json-view
  [value]="caseRecord"
  label="Case 24CV012345"
  (nodeSelect)="selected.set($event)"
/>
<p class="mt-2 text-sm text-base-content/70">
  Selected:
  <code class="tnum">{{ selected()?.path ?? 'nothing yet \u2014 click a row or press Enter' }}</code>
</p>
`},"json-view-docket":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscJsonView } from '@scscourt/design/code';

const EVENTS = [
  'Complaint filed',
  'Summons issued',
  'Proof of service filed',
  'Answer filed',
  'Case management statement filed',
  'Notice of motion and motion to compel',
  'Opposition filed',
  'Reply filed',
  'Minute order',
  'Request for sanctions',
];
const FILERS = ['Plaintiff', 'Defendant', 'Court', 'eFiling gateway'];

@Component({
  selector: 'app-json-view-docket-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscJsonView],
  template: \`
    <!-- 1,200 entries, 25 at a time. Search "sanctions": each match opens and its page renders. -->
    <scsc-json-view
      [value]="docket"
      label="Register of actions"
      [pageSize]="25"
      maxHeight="24rem"
    />
  \`,
})
export class JsonViewDocketDemo {
  protected readonly docket = {
    caseNumber: '24CV012345',
    exportedAt: '2026-09-29T16:04:00-07:00',
    entries: Array.from({ length: 1200 }, (_, i) => ({
      seq: i + 1,
      filed: new Date(Date.UTC(2024, 2, 18) + i * 43_200_000).toISOString().slice(0, 10),
      text: EVENTS[i % EVENTS.length],
      filedBy: FILERS[(i * 3) % FILERS.length],
      pages: (i % 7) + 1,
    })),
  };
}
`,html:`<!-- 1,200 entries, 25 at a time. Search "sanctions": each match opens and its page renders. -->
<scsc-json-view
  [value]="docket"
  label="Register of actions"
  [pageSize]="25"
  maxHeight="24rem"
/>
`},"json-view-malformed":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscJsonView } from '@scscourt/design/code';

@Component({
  selector: 'app-json-view-malformed-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscJsonView],
  template: \`
    <!-- A body that does not parse shows what is wrong and where, instead of throwing. -->
    <scsc-json-view [json]="responseBody" label="Response body" />
  \`,
})
export class JsonViewMalformedDemo {
  // The fee service returned a trailing comma after the last line item.
  protected readonly responseBody = \`{
  "envelopeId": "ENV-2026-0913-4471",
  "status": "Accepted",
  "fees": [
    { "code": "FEE-435", "description": "First paper, unlimited civil", "amount": 435.00 },
    { "code": "FEE-60", "description": "Motion", "amount": 60.00 },
  ]
}\`;
}
`,html:`<!-- A body that does not parse shows what is wrong and where, instead of throwing. -->
<scsc-json-view [json]="responseBody" label="Response body" />
`}};var _={slug:`json-view`,name:`JSON View`,classes:[`ScscJsonView`],category:`Specialized`,whenToUse:["Inspecting structured data an engineer or analyst needs to explore: API responses, case records, audit payloads, configuration. For a message body whose format varies, use `scsc-payload-view`, which picks this viewer for JSON.","Pass a parsed `value`, or a `json` string: a string that does not parse shows the reason, its line and column and the offending line instead of throwing.",'`nodeSelect` emits the JSONPath (`$.parties[0].name`) and value of the row the user picks, for a detail panel or a "use this field" action.','Long arrays and objects render `pageSize` children (100) at a time behind a "Show more" row; search counts every match, highlights it wherever it is shown, and opens the way to the first 50.',"Not for showing data to the public: a tree of keys is a developer tool. Present case data with `scsc-description-list`, `scsc-table` or the court components.","The `@scscourt/design/code` entry needs `highlight.js` and `marked` installed (optional peers)."],setup:`// package.json \u2014 optional peers of the code entry (both are imported by it)
"highlight.js": "^11.0.0",
"marked": "^15.0.0"

// import from the secondary entry point, not from '@scscourt/design'
import { ScscJsonView, ScscJsonSelection } from '@scscourt/design/code';`,demos:[{id:`json-view-case-record`,title:`Case record`,description:"A parsed object with type colouring and collapsed summaries (`{3}`, `[2]`). Select a row to read its JSONPath; hover or focus a row for Copy and Copy path. The Raw tab shows the pretty-printed, highlighted text.",component:d,source:p[`json-view-case-record`]},{id:`json-view-docket`,title:`1,200 docket entries`,description:'Children render `pageSize` at a time (25 here; the default is 100). Search for "sanctions": the count of all 120 matches is announced, and the first 50 are opened and highlighted. Enter in the search field jumps to the first match.',component:l,source:p[`json-view-docket`]},{id:`json-view-malformed`,title:`A body that does not parse`,description:"A `json` string with a trailing comma: the viewer names the problem and shows the line with a caret under the column.",component:m,source:p[`json-view-malformed`]}],keyboard:[{keys:`Tab`,action:`Into the tree (one stop, on the last focused row), then to that row’s **Copy** and **Copy path** buttons, then out.`},{keys:`ArrowDown / ArrowUp`,action:`Next / previous visible row.`},{keys:`ArrowRight`,action:`Opens a closed object or array; on an open one, moves to its first child.`},{keys:`ArrowLeft`,action:`Closes an open node; otherwise moves to its parent.`},{keys:`Home / End`,action:`First / last visible row.`},{keys:`Enter / Space`,action:'Selects the row and emits `nodeSelect`. On a "Show more" row, renders the next page and focuses its first row.'},{keys:`*`,action:`Opens every sibling of the focused row.`},{keys:`A–Z, 0–9`,action:`Type-ahead: moves to the next row whose key starts with the typed characters.`},{keys:`Enter (in search)`,action:`Moves focus to the first match.`},{keys:`Escape (in search)`,action:`Clears the search.`},{keys:`ArrowLeft / ArrowRight (on the tabs)`,action:`Switches between Tree and Raw (automatic activation); Home / End go to the first / last tab.`}],aria:['`role="tree"` named by `label`; each row is a `treeitem` with `aria-level`, `aria-posinset`, `aria-setsize` and `aria-selected`, and `aria-expanded` on objects and arrays. Children sit in a `role="group"`. `aria-setsize` counts the "Show more" row, which is a treeitem too.','Each row’s accessible name is written for listening (`parties: 2 items`, `caseNumber: "24CV012345"`), so the row buttons do not add to it.',"Roving `tabindex`: only the active row and its two buttons are in the Tab order.","The Tree / Raw switcher is a `tablist` with `aria-selected`, `aria-controls` and `tabpanel`s labelled by their tabs.",'Search results and "Copied" are announced through `ScscAnnouncer` (polite).'],appMustProvide:['A `label` that names the data ("Response body", "Case 24CV012345") when there is more than one tree on the page; the default is "JSON".','Room for the tree: it scrolls inside `maxHeight` (28rem); set `maxHeight=""` to let the page scroll instead.',"Translations through `labels` (and `provideScscLabels()` for Copy, Copied and the result count) when the app is not in English."],a11y:["Follows the WAI-ARIA tree view pattern: arrow keys, Home / End, `*` and type-ahead, with a single Tab stop.","Colour is never the only signal: strings keep their quotes, `null`, `true` and `false` are words, and collapsed objects and arrays show `{n}` and `[n]`.",`Token colours are theme tokens mixed toward the text colour: at least 6.5 : 1 in the light and dark themes and 7 : 1 in high contrast, on the row and selected-row backgrounds.`,`The focus ring is drawn on the row (inset, so a scroll container never clips it) rather than around the whole open branch.`,`Row buttons appear on hover and focus, on the selected row, and always on touch screens.`],related:[`payload-view`,`xml-view`,`code-highlighter`,`code-block`]};export{_ as JSON_VIEW_DOCS};