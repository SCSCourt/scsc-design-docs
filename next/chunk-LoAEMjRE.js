import{Ei as uN,En as Wt,I as EP,Ki as ye,Mr as jn,Ms as uc,Na as Jb,Ss as rD,Xa as Pv,Zo as i_,_s as o_,ds as nD,kt as NE,ms as nu,ra as Af,ta as $f,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var T=(t,s)=>s.id;function P(t,s){if(t&1&&(Ga(0,`li`,1)(1,`span`),G_(2),Lf(),Ga(3,`span`,2),G_(4),Lf()()),t&2){let e=s.$implicit;Jb(2),nD(e.title),Jb(2),nD(e.filed)}}var b=class t{filings=[{id:1,title:`Notice of Hearing`,filed:`2026-09-22`},{id:2,title:`Proof of Service`,filed:`2026-09-19`},{id:3,title:`Case Management Statement`,filed:`2026-09-15`},{id:4,title:`Complaint`,filed:`2026-08-30`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-list-basic-demo`]],decls:3,vars:0,consts:[[1,`max-w-sm`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`],[1,`flex`,`items-baseline`,`justify-between`,`gap-4`,`py-3`,`text-sm`],[1,`tnum`,`text-base-content/70`]],template:function(e,u){e&1&&(Ga(0,`scsc-list`,0),o_(1,P,5,2,`li`,1,T),Lf()),e&2&&(Jb(),i_(u.filings))},dependencies:[EP],encapsulation:2})};var I=(t,s)=>s.caseNumber;function z(t,s){if(t&1&&(Ga(0,`li`)(1,`a`,1)(2,`div`,2)(3,`p`,3),G_(4),Lf(),Ga(5,`scsc-text`,4),G_(6),Lf()(),Ga(7,`scsc-status-dot`,5),G_(8),Lf(),uc(9,`scsc-icon`,6),Lf()()),t&2){let e=s.$implicit;Jb(4),nD(e.title),Jb(2),rD(``,e.caseNumber,` · `,e.next),Jb(),Pv(`status`,e.status),Jb(),nD(e.state)}}var g=class t{cases=[{caseNumber:`24CV012345`,title:`Alvarez v. Pacific Transit Authority`,next:`Hearing Oct 14`,status:`success`,state:`Active`},{caseNumber:`24FL003210`,title:`In re Marriage of Nguyen`,next:`Response due Oct 9`,status:`warning`,state:`Response due`},{caseNumber:`23PR001876`,title:`Estate of Harold Whitfield`,next:`No upcoming events`,status:`neutral`,state:`Closed`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-list-links-demo`]],decls:3,vars:0,consts:[[1,`max-w-xl`,`overflow-hidden`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[`routerLink`,`.`,1,`flex`,`items-center`,`gap-4`,`px-4`,`py-3`,`hover:bg-base-200`,`focus-visible:bg-base-200`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`font-medium`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[3,`status`],[`name`,`chevron-right`,`size`,`sm`,1,`text-base-content/70`]],template:function(e,u){e&1&&(Ga(0,`scsc-list`,0),o_(1,z,10,5,`li`,null,I),Lf()),e&2&&(Jb(),i_(u.cases))},dependencies:[nu,ye,EP,uN,NE],encapsulation:2})};var E=(t,s)=>s.name;function _(t,s){if(t&1&&(Ga(0,`li`,1),uc(1,`scsc-avatar`,2),Ga(2,`div`,3)(3,`p`,4),G_(4),Lf(),Ga(5,`p`,5),G_(6),Lf()(),Ga(7,`scsc-badge`,6),G_(8),Lf()()),t&2){let e=s.$implicit;Jb(),Pv(`name`,e.name),Jb(3),nD(e.name),Jb(2),nD(e.role),Jb(),Pv(`tone`,e.represented?`info`:`neutral`),Jb(),$f(` `,e.represented?`Represented`:`Self-represented`,` `)}}var x=class t{parties=[{name:`Maria Alvarez`,role:`Plaintiff`,represented:!0},{name:`Northgate Properties LLC`,role:`Defendant`,represented:!0},{name:`Daniel Reyes`,role:`Cross-defendant`,represented:!1}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-list-rich-demo`]],decls:3,vars:1,consts:[[1,`max-w-md`,`gap-2`,3,`divided`],[1,`flex`,`items-center`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`px-4`,`py-3`],[`decorative`,``,`size`,`sm`,3,`name`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`text-sm`,`font-medium`],[1,`text-xs`,`text-base-content/70`],[`soft`,``,`size`,`sm`,3,`tone`]],template:function(e,u){e&1&&(Ga(0,`scsc-list`,0),o_(1,_,9,5,`li`,1,E),Lf()),e&2&&(Pv(`divided`,!1),Jb(),i_(u.parties))},dependencies:[Wt,jn,EP],encapsulation:2})};var y={"list-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscList } from '@scscourt/design';

interface Filing {
  id: number;
  title: string;
  filed: string;
}

@Component({
  selector: 'app-list-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscList],
  template: \`
    <scsc-list class="max-w-sm rounded-box border border-base-300 bg-base-100 px-4">
      @for (doc of filings; track doc.id) {
        <li class="flex items-baseline justify-between gap-4 py-3 text-sm">
          <span>{{ doc.title }}</span>
          <span class="tnum text-base-content/70">{{ doc.filed }}</span>
        </li>
      }
    </scsc-list>
  \`,
})
export class ListBasicDemo {
  protected readonly filings: Filing[] = [
    { id: 1, title: 'Notice of Hearing', filed: '2026-09-22' },
    { id: 2, title: 'Proof of Service', filed: '2026-09-19' },
    { id: 3, title: 'Case Management Statement', filed: '2026-09-15' },
    { id: 4, title: 'Complaint', filed: '2026-08-30' },
  ];
}
`,html:`<scsc-list class="max-w-sm rounded-box border border-base-300 bg-base-100 px-4">
  @for (doc of filings; track doc.id) {
    <li class="flex items-baseline justify-between gap-4 py-3 text-sm">
      <span>{{ doc.title }}</span>
      <span class="tnum text-base-content/70">{{ doc.filed }}</span>
    </li>
  }
</scsc-list>
`},"list-links":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscIcon, ScscList, ScscStatusDot, ScscText } from '@scscourt/design';

interface CaseSummary {
  caseNumber: string;
  title: string;
  next: string;
  status: 'success' | 'warning' | 'neutral';
  state: string;
}

@Component({
  selector: 'app-list-links-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscIcon, ScscList, ScscStatusDot, ScscText],
  template: \`
    <scsc-list class="max-w-xl overflow-hidden rounded-box border border-base-300 bg-base-100">
      @for (c of cases; track c.caseNumber) {
        <li>
          <!-- The whole row is one link: one Tab stop, and its text is the link name. -->
          <a
            routerLink="."
            class="flex items-center gap-4 px-4 py-3 hover:bg-base-200 focus-visible:bg-base-200"
          >
            <div class="min-w-0 flex-1">
              <p class="truncate font-medium">{{ c.title }}</p>
              <scsc-text size="sm" tone="muted" tnum>{{ c.caseNumber }} \xB7 {{ c.next }}</scsc-text>
            </div>
            <scsc-status-dot [status]="c.status">{{ c.state }}</scsc-status-dot>
            <scsc-icon name="chevron-right" size="sm" class="text-base-content/70" />
          </a>
        </li>
      }
    </scsc-list>
  \`,
})
export class ListLinksDemo {
  protected readonly cases: CaseSummary[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Pacific Transit Authority',
      next: 'Hearing Oct 14',
      status: 'success',
      state: 'Active',
    },
    {
      caseNumber: '24FL003210',
      title: 'In re Marriage of Nguyen',
      next: 'Response due Oct 9',
      status: 'warning',
      state: 'Response due',
    },
    {
      caseNumber: '23PR001876',
      title: 'Estate of Harold Whitfield',
      next: 'No upcoming events',
      status: 'neutral',
      state: 'Closed',
    },
  ];
}
`,html:`<scsc-list class="max-w-xl overflow-hidden rounded-box border border-base-300 bg-base-100">
  @for (c of cases; track c.caseNumber) {
    <li>
      <!-- The whole row is one link: one Tab stop, and its text is the link name. -->
      <a
        routerLink="."
        class="flex items-center gap-4 px-4 py-3 hover:bg-base-200 focus-visible:bg-base-200"
      >
        <div class="min-w-0 flex-1">
          <p class="truncate font-medium">{{ c.title }}</p>
          <scsc-text size="sm" tone="muted" tnum>{{ c.caseNumber }} \xB7 {{ c.next }}</scsc-text>
        </div>
        <scsc-status-dot [status]="c.status">{{ c.state }}</scsc-status-dot>
        <scsc-icon name="chevron-right" size="sm" class="text-base-content/70" />
      </a>
    </li>
  }
</scsc-list>
`},"list-rich":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatar, ScscBadge, ScscList } from '@scscourt/design';

interface Party {
  name: string;
  role: string;
  represented: boolean;
}

@Component({
  selector: 'app-list-rich-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatar, ScscBadge, ScscList],
  template: \`
    <scsc-list [divided]="false" class="max-w-md gap-2">
      @for (party of parties; track party.name) {
        <li
          class="flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
        >
          <scsc-avatar decorative [name]="party.name" size="sm" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium">{{ party.name }}</p>
            <p class="text-xs text-base-content/70">{{ party.role }}</p>
          </div>
          <scsc-badge [tone]="party.represented ? 'info' : 'neutral'" soft size="sm">
            {{ party.represented ? 'Represented' : 'Self-represented' }}
          </scsc-badge>
        </li>
      }
    </scsc-list>
  \`,
})
export class ListRichDemo {
  protected readonly parties: Party[] = [
    { name: 'Maria Alvarez', role: 'Plaintiff', represented: true },
    { name: 'Northgate Properties LLC', role: 'Defendant', represented: true },
    { name: 'Daniel Reyes', role: 'Cross-defendant', represented: false },
  ];
}
`,html:`<scsc-list [divided]="false" class="max-w-md gap-2">
  @for (party of parties; track party.name) {
    <li
      class="flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"
    >
      <scsc-avatar decorative [name]="party.name" size="sm" />
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium">{{ party.name }}</p>
        <p class="text-xs text-base-content/70">{{ party.role }}</p>
      </div>
      <scsc-badge [tone]="party.represented ? 'info' : 'neutral'" soft size="sm">
        {{ party.represented ? 'Represented' : 'Self-represented' }}
      </scsc-badge>
    </li>
  }
</scsc-list>
`}};var Y={slug:`list`,name:`List`,classes:[`ScscList`],category:`Data Display`,whenToUse:[`A short vertical list of like items where a table would be too heavy: documents, parties, notifications.`,'You write the rows. The component is a `role="list"` flex column with optional hairlines; project `<li>` elements with their own padding.',"Turn `divided` off when rows are cards or carry their own borders, and add `gap-*` via `class`.","When each row opens a record, make the row one link inside its `<li>` rather than adding a click handler to the row.","For key/value pairs use `scsc-description-list`; for chronological events, `scsc-timeline`."],demos:[{id:`list-basic`,title:`Divided rows`,description:"Rows are `<li>` elements; the list adds the dividers and the host adds the border.",component:b,source:y[`list-basic`]},{id:`list-rich`,title:`Rich rows without dividers`,description:'`[divided]="false"` plus `gap-2` for card-like rows with an avatar and a badge.',component:x,source:y[`list-rich`]},{id:`list-links`,title:`Rows that link`,description:'A "My cases" list where each row is a single `routerLink` with a status dot and a chevron; hover and focus tint the row.',component:g,source:y[`list-links`]}],a11y:['The host has `role="list"`, so children must be `<li>` or `role="listitem"` — a `<div>` row breaks the list semantics (and fails axe).',`Keep a row's text order meaningful when read linearly: name, then role, then status.`,`A whole-row link is one Tab stop and its text is the link name; do not nest buttons or other links inside it.`],related:[`card`,`description-list`,`timeline`,`table`]};export{Y as LIST_DOCS};