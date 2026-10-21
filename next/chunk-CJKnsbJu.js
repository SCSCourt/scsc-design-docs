import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Ai as vA,At as NP,Es as sD,F as EN,Gt as QN,H as FN,Hs as y_,Ht as PP,Ki as ye,L as Er,Lo as d_,M as DN,Mr as jn,Ms as uc,Na as Jb,Nr as jo,P as Dr,Ps as ut,Pt as Nr,Qt as SN,Ss as rD,Vr as mN,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cn as UE,cs as lc,ds as nD,gn as VN,ha as Eg,in as Ta,it as IN,ka as Ig,ms as nu,n as $N,pi as sn,ra as Af,t as $E,ta as $f,ur as fA,v as Ar,va as G_,vn as Vn,xo as Yv,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var ce=(m,o)=>o.id;function ie(m,o){if(m&1){let a=d_();Ga(0,`li`)(1,`label`,49)(2,`input`,50),lc(`change`,function(){let d=Eg(a).$implicit,i=y_();return Ig(i.toggle(d.id))}),Lf(),Ga(3,`span`,51),G_(4),Ga(5,`span`,52),G_(6),Lf()()()()}if(m&2){let a=o.$implicit;Jb(2),Pv(`checked`,a.done),Jb(),Yv(`line-through`,a.done),Jb(),$f(` `,a.label,` `),Jb(),Yv(`text-error`,a.overdue&&!a.done)(`text-base-content/70`,!a.overdue||a.done),Jb(),rD(``,a.overdue&&!a.done?`Overdue · `:``,`Due `,a.due)}}var oe={print:`Case summary sent to the printer.`,reassign:`Choose a department to reassign 24CV012345 to.`,interpreter:`Interpreter request started for the October 13 hearing.`,seal:`Sealing needs a court order: attach it to continue.`,close:`Closing the case needs a disposition entry first.`};var ve=[{id:`staff-case-record`,title:`Staff case record`,description:`Case header with primary actions and a “More actions” menu, case flags, details, parties, a filterable register of actions and a history timeline, beside a sticky clerk’s panel with the next hearing, tasks and a note.`,component:class m{collapsed=q(!1);message=q(``);docketQuery=q(``);note=q(``);nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`dashboard`},{label:`Work queue`,icon:`inbox`,link:`queue`,badge:`37`},{label:`Cases`,icon:`folder-open`,link:`.`,exact:!0},{label:`Calendar`,icon:`calendar-days`,link:`calendar`}]},{title:`Administration`,items:[{label:`Reports`,icon:`chart-column`,link:`reports`},{label:`Settings`,icon:`settings`,link:`settings`}]}];trail=[{label:`Cases`,link:`cases`},{label:`24CV012345`}];menu=[{id:`print`,label:`Print case summary`,icon:`printer`},{id:`reassign`,label:`Reassign department`,icon:`arrow-right-left`},{id:`interpreter`,label:`Request interpreter`,icon:`languages`},{id:`seal`,label:`Seal case…`,icon:`lock`,divider:!0},{id:`close`,label:`Close case…`,icon:`archive`}];details=[{term:`Case number`,value:`24CV012345`,numeric:!0},{term:`Case type`,value:`Civil — Unlimited`},{term:`Cause of action`,value:`Breach of warranty of habitability`},{term:`Filed`,value:`Mar 12, 2024`,numeric:!0},{term:`Department`,value:`Dept. 10 — Hon. Miriam Okafor`},{term:`Courthouse`,value:`Downtown Superior Court`},{term:`Amount demanded`,value:`$185,000.00`,numeric:!0},{term:`Assigned clerk`,value:`Jordan Kim`}];parties=[{name:`Maria Alvarez`,role:`Plaintiff`,representing:`Self and as guardian ad litem for L. A.`},{name:`Northgate Property Management, LLC`,role:`Defendant`},{name:`Daniel Reyes`,role:`Attorney`,representing:`Reyes & Tran LLP · for Plaintiff`},{name:`Priya Natarajan`,role:`Attorney`,representing:`Holloway Natarajan LLP · for Defendant`}];docket=[{date:`Sep 22, 2026`,event:`Notice of Motion and Motion to Compel Further Responses`,filedBy:`Maria Alvarez (Plaintiff)`,documentId:`doc-1183`},{date:`Aug 18, 2026`,event:`Case Management Order`,filedBy:`Court`,documentId:`doc-1102`},{date:`Aug 18, 2026`,event:`Minute Order: Case Management Conference held`,filedBy:`Court`},{date:`Jul 30, 2026`,event:`Case Management Statement`,filedBy:`Northgate Property Management, LLC`,documentId:`doc-1071`},{date:`May 6, 2024`,event:`Answer to Complaint`,filedBy:`Northgate Property Management, LLC`,documentId:`doc-0412`},{date:`Mar 12, 2024`,event:`Complaint for Breach of the Warranty of Habitability`,filedBy:`Maria Alvarez (Plaintiff)`,documentId:`doc-0301`}];history=[{title:`Motion to compel accepted`,timestamp:`Sep 23, 2026, 10:14 AM`,description:`Jordan Kim accepted envelope EF-2026-0922-1183 and set the hearing.`,icon:`check`,status:`success`},{title:`Hearing scheduled`,timestamp:`Sep 23, 2026, 10:16 AM`,description:`Motion to Compel, Oct 13, 2026 at 9:00 AM in Dept. 10.`,icon:`calendar-plus`,status:`info`},{title:`Interpreter flag added`,timestamp:`Aug 18, 2026, 11:02 AM`,description:`Spanish, requested by plaintiff at the CMC.`,icon:`languages`,status:`neutral`},{title:`Case reassigned`,timestamp:`Jul 2, 2024, 3:40 PM`,description:`From Dept. 3 to Dept. 10 (peremptory challenge, CCP 170.6).`,icon:`arrow-right-left`,status:`warning`}];tasks=q([{id:`t1`,label:`Send hearing notice to all parties`,due:`Sep 25`,overdue:!0,done:!1},{id:`t2`,label:`Confirm Spanish interpreter for Oct 13`,due:`Oct 6`,done:!1},{id:`t3`,label:`Check proof of service for the motion`,due:`Oct 1`,done:!0}]);doneCount=ut(()=>this.tasks().filter(o=>o.done).length);filteredDocket=ut(()=>{let o=this.docketQuery().trim().toLowerCase();return o?this.docket.filter(a=>`${a.event} ${a.filedBy??``} ${a.date}`.toLowerCase().includes(o)):this.docket});onMenu(o){this.message.set(oe[o]??``)}toggle(o){this.tasks.update(a=>a.map(e=>e.id===o?s(r({},e),{done:!e.done}):e))}addNote(){this.message.set(`Note saved to the case history.`),this.note.set(``)}static ɵfac=function(a){return new(a||m)};static ɵcmp=Af({type:m,selectors:[[`app-staff-case-record-template`]],decls:79,vars:20,consts:[[3,`collapsedChange`,`collapsed`],[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Civil Division · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`],[1,`hidden`,`lg:inline-flex`,3,`click`,`icon`,`label`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`routerLink`,`settings`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`,`collapsed`],[1,`flex`,`flex-col`,`gap-6`,`scsc-pad-page`],[1,`flex`,`flex-col`,`gap-3`],[3,`items`],[`title`,`Alvarez v. Northgate Property Management`,`caseNumber`,`24CV012345`,`status`,`active`,`caseType`,`Civil — Unlimited · Dept. 10`,`filed`,`Mar 12, 2024`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`calendar`],[`name`,`calendar-plus`,`size`,`sm`],[`size`,`sm`,3,`click`],[`name`,`plus`,`size`,`sm`],[`label`,`More actions`,`align`,`end`,`triggerClass`,`btn-ghost`,3,`select`,`items`],[`aria-label`,`Case flags`,1,`flex`,`flex-wrap`,`gap-2`],[`tone`,`info`,`soft`,``,`size`,`sm`],[`tone`,`secondary`,`soft`,``,`size`,`sm`],[`soft`,``,`size`,`sm`],[`role`,`status`,1,`min-h-5`,`text-sm`,`text-base-content/80`],[1,`grid`,`items-start`,`gap-6`,`xl:grid-cols-[minmax(0,1fr)_22rem]`],[1,`flex`,`min-w-0`,`flex-col`,`gap-8`],[`heading`,`Case details`],[`slot`,`actions`,`variant`,`ghost`,`size`,`sm`],[`name`,`pencil`,`size`,`sm`],[`heading`,`Parties`,3,`description`],[`name`,`user-plus`,`size`,`sm`],[3,`parties`],[`heading`,`Register of actions`],[`placeholder`,`Filter docket entries`,1,`w-full`,`sm:w-80`,3,`valueChange`,`value`],[`slot`,`end`,`role`,`status`,1,`text-sm`,`text-base-content/70`],[`label`,`Register of actions, 24CV012345`,3,`viewDocument`,`entries`],[`heading`,`History`,`description`,`Changes to this case record, newest first.`],[`title`,`Clerk’s panel`,1,`overflow-hidden`,`rounded-box`,`border`,`border-base-300`,`xl:sticky`,`xl:top-[calc(var(--scsc-chrome-h)+1rem)]`],[1,`flex`,`flex-col`,`gap-6`],[`aria-labelledby`,`panel-next`],[`id`,`panel-next`,1,`mb-2`,`text-sm`,`font-semibold`],[`flush`,``,`type`,`Motion to Compel Further Responses`,`datetime`,`Tue, Oct 13, 2026 · 9:00 AM`,`department`,`10`,`judge`,`Hon. Miriam Okafor`],[`aria-labelledby`,`panel-tasks`],[1,`mb-2`,`flex`,`items-baseline`,`justify-between`,`gap-2`],[`id`,`panel-tasks`,1,`text-sm`,`font-semibold`],[1,`text-xs`,`tnum`,`text-base-content/70`],[1,`flex`,`flex-col`,`gap-2`],[`aria-labelledby`,`panel-note`],[`id`,`panel-note`,1,`mb-2`,`text-sm`,`font-semibold`],[`label`,`Internal note`,`for`,`case-note`,`hint`,`Visible to court staff only`],[`scsc-textarea`,``,`id`,`case-note`,`rows`,`3`,3,`input`,`value`],[`size`,`sm`,1,`mt-2`,3,`click`,`disabled`],[1,`flex`,`items-start`,`gap-3`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,1,`mt-0.5`,3,`change`,`checked`],[1,`min-w-0`,`flex-1`],[1,`block`,`text-xs`,`tnum`]],template:function(a,e){a&1&&(Ga(0,`scsc-app-shell`,0),sD(`collapsedChange`,function(i){return Y_(e.collapsed,i)||(e.collapsed=i),i}),Ga(1,`scsc-masthead`,1)(2,`scsc-icon-button`,2),lc(`click`,function(){return e.collapsed.set(!e.collapsed())}),Lf(),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`a`,4),G_(6,`Settings`),Lf()(),Ga(7,`li`)(8,`button`,5),G_(9,`Sign out`),Lf()()()(),uc(10,`scsc-sidebar-nav`,6),Ga(11,`div`,7)(12,`div`,8),uc(13,`scsc-breadcrumb`,9),Ga(14,`scsc-case-header`,10)(15,`a`,11),uc(16,`scsc-icon`,12),G_(17,` Schedule hearing `),Lf(),Ga(18,`scsc-button`,13),lc(`click`,function(){return e.message.set(`New docket entry form opened.`)}),uc(19,`scsc-icon`,14),G_(20,` Add docket entry `),Lf(),Ga(21,`scsc-dropdown`,15),lc(`select`,function(i){return e.onMenu(i)}),Lf()(),Ga(22,`ul`,16)(23,`li`)(24,`scsc-badge`,17),G_(25,`Jury demanded`),Lf()(),Ga(26,`li`)(27,`scsc-badge`,18),G_(28,`Interpreter: Spanish`),Lf()(),Ga(29,`li`)(30,`scsc-badge`,19),G_(31,`Complex: no`),Lf()()(),Ga(32,`p`,20),G_(33),Lf()(),Ga(34,`div`,21)(35,`div`,22)(36,`scsc-section`,23)(37,`scsc-button`,24),uc(38,`scsc-icon`,25),G_(39,` Edit `),Lf(),Ga(40,`scsc-card`),uc(41,`scsc-description-list`,9),Lf()(),Ga(42,`scsc-section`,26)(43,`scsc-button`,24),uc(44,`scsc-icon`,27),G_(45,` Add party `),Lf(),Ga(46,`scsc-card`),uc(47,`scsc-party-list`,28),Lf()(),Ga(48,`scsc-section`,29)(49,`scsc-toolbar`)(50,`scsc-search-input`,30),sD(`valueChange`,function(i){return Y_(e.docketQuery,i)||(e.docketQuery=i),i}),Lf(),Ga(51,`p`,31),G_(52),Lf()(),Ga(53,`scsc-docket-table`,32),lc(`viewDocument`,function(i){return e.message.set(`Opening document `+i+` in the viewer…`)}),Lf()(),Ga(54,`scsc-section`,33)(55,`scsc-card`),uc(56,`scsc-timeline`,9),Lf()()(),Ga(57,`scsc-detail-panel`,34)(58,`div`,35)(59,`section`,36)(60,`h3`,37),G_(61,`Next hearing`),Lf(),uc(62,`scsc-hearing-card`,38),Lf(),Ga(63,`section`,39)(64,`div`,40)(65,`h3`,41),G_(66,`Tasks`),Lf(),Ga(67,`span`,42),G_(68),Lf()(),Ga(69,`ul`,43),o_(70,ie,7,10,`li`,null,ce),Lf()(),Ga(72,`section`,44)(73,`h3`,45),G_(74,`Add a note`),Lf(),Ga(75,`scsc-form-field`,46)(76,`textarea`,47),lc(`input`,function(i){return e.note.set(i.target.value)}),Lf()(),Ga(77,`scsc-button`,48),lc(`click`,function(){return e.addNote()}),G_(78,`Save note`),Lf()()()()()()()),a&2&&(iD(`collapsed`,e.collapsed),Jb(2),Pv(`icon`,e.collapsed()?`panel-left-open`:`panel-left-close`)(`label`,e.collapsed()?`Expand sidebar`:`Collapse sidebar`),Jb(8),Pv(`sections`,e.nav)(`collapsed`,e.collapsed()),Jb(3),Pv(`items`,e.trail),Jb(8),Pv(`items`,e.menu),Jb(12),nD(e.message()),Jb(8),Pv(`items`,e.details),Jb(),Pv(`description`,e.parties.length+` parties and attorneys`),Jb(5),Pv(`parties`,e.parties),Jb(3),iD(`value`,e.docketQuery),Jb(2),rD(` `,e.filteredDocket().length,` of `,e.docket.length,` entries `),Jb(),Pv(`entries`,e.filteredDocket()),Jb(3),Pv(`items`,e.history),Jb(12),rD(``,e.doneCount(),` of `,e.tasks().length,` done`),Jb(2),i_(e.tasks()),Jb(6),Pv(`value`,e.note()),Jb(),Pv(`disabled`,!e.note().trim()))},dependencies:[nu,SN,jn,QN,sn,$E,mN,Dr,jo,NP,EN,Nr,fA,Vn,Er,ye,UE,FN,Ar,Ta,DN,$N,vA,PP,IN,VN],encapsulation:2})},source:{"staff-case-record":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscAppShell,
  ScscBadge,
  ScscBreadcrumb,
  type ScscBreadcrumbItem,
  ScscButton,
  ScscButtonLink,
  ScscCard,
  ScscCaseHeader,
  ScscCheckbox,
  ScscDescriptionList,
  type ScscDescriptionItem,
  ScscDetailPanel,
  type ScscDocketEntry,
  ScscDocketTable,
  ScscDropdown,
  ScscFormField,
  ScscHearingCard,
  ScscIcon,
  ScscIconButton,
  ScscMasthead,
  type ScscMenuItem,
  type ScscNavSection,
  type ScscParty,
  ScscPartyList,
  ScscSearchInput,
  ScscSection,
  ScscSidebarNav,
  ScscTextarea,
  ScscTimeline,
  type ScscTimelineItem,
  ScscToolbar,
  ScscUserMenu,
} from '@scscourt/design';

interface Task {
  id: string;
  label: string;
  due: string;
  overdue?: boolean;
  done: boolean;
}

const MENU_MESSAGES: Record<string, string> = {
  print: 'Case summary sent to the printer.',
  reassign: 'Choose a department to reassign 24CV012345 to.',
  interpreter: 'Interpreter request started for the October 13 hearing.',
  seal: 'Sealing needs a court order: attach it to continue.',
  close: 'Closing the case needs a disposition entry first.',
};

@Component({
  selector: 'app-staff-case-record-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscAppShell,
    ScscBadge,
    ScscBreadcrumb,
    ScscButton,
    ScscButtonLink,
    ScscCard,
    ScscCaseHeader,
    ScscCheckbox,
    ScscDescriptionList,
    ScscDetailPanel,
    ScscDocketTable,
    ScscDropdown,
    ScscFormField,
    ScscHearingCard,
    ScscIcon,
    ScscIconButton,
    ScscMasthead,
    ScscPartyList,
    ScscSearchInput,
    ScscSection,
    ScscSidebarNav,
    ScscTextarea,
    ScscTimeline,
    ScscToolbar,
    ScscUserMenu,
  ],
  template: \`
    <scsc-app-shell [(collapsed)]="collapsed">
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Civil Division \xB7 Downtown Superior Court"
        logoSrc="scsc-seal.png"
      >
        <scsc-icon-button
          [icon]="collapsed() ? 'panel-left-open' : 'panel-left-close'"
          [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
          class="hidden lg:inline-flex"
          (click)="collapsed.set(!collapsed())"
        />
        <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
          <li><a routerLink="settings">Settings</a></li>
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>

      <scsc-sidebar-nav slot="sidebar" [sections]="nav" [collapsed]="collapsed()" />

      <div class="flex flex-col gap-6 scsc-pad-page">
        <div class="flex flex-col gap-3">
          <scsc-breadcrumb [items]="trail" />
          <scsc-case-header
            title="Alvarez v. Northgate Property Management"
            caseNumber="24CV012345"
            status="active"
            caseType="Civil \u2014 Unlimited \xB7 Dept. 10"
            filed="Mar 12, 2024"
          >
            <a scsc-button variant="neutral" outline size="sm" routerLink="calendar">
              <scsc-icon name="calendar-plus" size="sm" />
              Schedule hearing
            </a>
            <scsc-button size="sm" (click)="message.set('New docket entry form opened.')">
              <scsc-icon name="plus" size="sm" />
              Add docket entry
            </scsc-button>
            <scsc-dropdown
              label="More actions"
              align="end"
              triggerClass="btn-ghost"
              [items]="menu"
              (select)="onMenu($event)"
            />
          </scsc-case-header>
          <ul class="flex flex-wrap gap-2" aria-label="Case flags">
            <li><scsc-badge tone="info" soft size="sm">Jury demanded</scsc-badge></li>
            <li><scsc-badge tone="secondary" soft size="sm">Interpreter: Spanish</scsc-badge></li>
            <li><scsc-badge soft size="sm">Complex: no</scsc-badge></li>
          </ul>
          <p class="min-h-5 text-sm text-base-content/80" role="status">{{ message() }}</p>
        </div>

        <div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div class="flex min-w-0 flex-col gap-8">
            <scsc-section heading="Case details">
              <scsc-button slot="actions" variant="ghost" size="sm">
                <scsc-icon name="pencil" size="sm" />
                Edit
              </scsc-button>
              <scsc-card>
                <scsc-description-list [items]="details" />
              </scsc-card>
            </scsc-section>

            <scsc-section
              heading="Parties"
              [description]="parties.length + ' parties and attorneys'"
            >
              <scsc-button slot="actions" variant="ghost" size="sm">
                <scsc-icon name="user-plus" size="sm" />
                Add party
              </scsc-button>
              <scsc-card>
                <scsc-party-list [parties]="parties" />
              </scsc-card>
            </scsc-section>

            <scsc-section heading="Register of actions">
              <scsc-toolbar>
                <scsc-search-input
                  [(value)]="docketQuery"
                  placeholder="Filter docket entries"
                  class="w-full sm:w-80"
                />
                <p slot="end" class="text-sm text-base-content/70" role="status">
                  {{ filteredDocket().length }} of {{ docket.length }} entries
                </p>
              </scsc-toolbar>
              <scsc-docket-table
                [entries]="filteredDocket()"
                label="Register of actions, 24CV012345"
                (viewDocument)="message.set('Opening document ' + $event + ' in the viewer\u2026')"
              />
            </scsc-section>

            <scsc-section
              heading="History"
              description="Changes to this case record, newest first."
            >
              <scsc-card>
                <scsc-timeline [items]="history" />
              </scsc-card>
            </scsc-section>
          </div>

          <scsc-detail-panel
            title="Clerk\u2019s panel"
            class="overflow-hidden rounded-box border border-base-300 xl:sticky xl:top-[calc(var(--scsc-chrome-h)+1rem)]"
          >
            <div class="flex flex-col gap-6">
              <section aria-labelledby="panel-next">
                <h3 id="panel-next" class="mb-2 text-sm font-semibold">Next hearing</h3>
                <scsc-hearing-card
                  flush
                  type="Motion to Compel Further Responses"
                  datetime="Tue, Oct 13, 2026 \xB7 9:00 AM"
                  department="10"
                  judge="Hon. Miriam Okafor"
                />
              </section>

              <section aria-labelledby="panel-tasks">
                <div class="mb-2 flex items-baseline justify-between gap-2">
                  <h3 id="panel-tasks" class="text-sm font-semibold">Tasks</h3>
                  <span class="text-xs tnum text-base-content/70"
                    >{{ doneCount() }} of {{ tasks().length }} done</span
                  >
                </div>
                <ul class="flex flex-col gap-2">
                  @for (t of tasks(); track t.id) {
                    <li>
                      <label class="flex items-start gap-3 text-sm">
                        <input
                          type="checkbox"
                          scsc-checkbox
                          class="mt-0.5"
                          [checked]="t.done"
                          (change)="toggle(t.id)"
                        />
                        <span class="min-w-0 flex-1" [class.line-through]="t.done">
                          {{ t.label }}
                          <span
                            class="block text-xs tnum"
                            [class.text-error]="t.overdue && !t.done"
                            [class.text-base-content/70]="!t.overdue || t.done"
                            >{{ t.overdue && !t.done ? 'Overdue \xB7 ' : '' }}Due {{ t.due }}</span
                          >
                        </span>
                      </label>
                    </li>
                  }
                </ul>
              </section>

              <section aria-labelledby="panel-note">
                <h3 id="panel-note" class="mb-2 text-sm font-semibold">Add a note</h3>
                <scsc-form-field
                  label="Internal note"
                  for="case-note"
                  hint="Visible to court staff only"
                >
                  <textarea
                    scsc-textarea
                    id="case-note"
                    rows="3"
                    [value]="note()"
                    (input)="note.set($any($event.target).value)"
                  ></textarea>
                </scsc-form-field>
                <scsc-button size="sm" class="mt-2" [disabled]="!note().trim()" (click)="addNote()"
                  >Save note</scsc-button
                >
              </section>
            </div>
          </scsc-detail-panel>
        </div>
      </div>
    </scsc-app-shell>
  \`,
})
export class StaffCaseRecordTemplate {
  protected readonly collapsed = signal(false);
  protected readonly message = signal('');
  protected readonly docketQuery = signal('');
  protected readonly note = signal('');

  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: 'dashboard' },
        { label: 'Work queue', icon: 'inbox', link: 'queue', badge: '37' },
        { label: 'Cases', icon: 'folder-open', link: '.', exact: true },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
      ],
    },
    {
      title: 'Administration',
      items: [
        { label: 'Reports', icon: 'chart-column', link: 'reports' },
        { label: 'Settings', icon: 'settings', link: 'settings' },
      ],
    },
  ];
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Cases', link: 'cases' },
    { label: '24CV012345' },
  ];

  protected readonly menu: ScscMenuItem[] = [
    { id: 'print', label: 'Print case summary', icon: 'printer' },
    { id: 'reassign', label: 'Reassign department', icon: 'arrow-right-left' },
    { id: 'interpreter', label: 'Request interpreter', icon: 'languages' },
    { id: 'seal', label: 'Seal case\u2026', icon: 'lock', divider: true },
    { id: 'close', label: 'Close case\u2026', icon: 'archive' },
  ];

  protected readonly details: ScscDescriptionItem[] = [
    { term: 'Case number', value: '24CV012345', numeric: true },
    { term: 'Case type', value: 'Civil \u2014 Unlimited' },
    { term: 'Cause of action', value: 'Breach of warranty of habitability' },
    { term: 'Filed', value: 'Mar 12, 2024', numeric: true },
    { term: 'Department', value: 'Dept. 10 \u2014 Hon. Miriam Okafor' },
    { term: 'Courthouse', value: 'Downtown Superior Court' },
    { term: 'Amount demanded', value: '$185,000.00', numeric: true },
    { term: 'Assigned clerk', value: 'Jordan Kim' },
  ];

  protected readonly parties: ScscParty[] = [
    {
      name: 'Maria Alvarez',
      role: 'Plaintiff',
      representing: 'Self and as guardian ad litem for L. A.',
    },
    { name: 'Northgate Property Management, LLC', role: 'Defendant' },
    { name: 'Daniel Reyes', role: 'Attorney', representing: 'Reyes & Tran LLP \xB7 for Plaintiff' },
    {
      name: 'Priya Natarajan',
      role: 'Attorney',
      representing: 'Holloway Natarajan LLP \xB7 for Defendant',
    },
  ];

  protected readonly docket: ScscDocketEntry[] = [
    {
      date: 'Sep 22, 2026',
      event: 'Notice of Motion and Motion to Compel Further Responses',
      filedBy: 'Maria Alvarez (Plaintiff)',
      documentId: 'doc-1183',
    },
    {
      date: 'Aug 18, 2026',
      event: 'Case Management Order',
      filedBy: 'Court',
      documentId: 'doc-1102',
    },
    {
      date: 'Aug 18, 2026',
      event: 'Minute Order: Case Management Conference held',
      filedBy: 'Court',
    },
    {
      date: 'Jul 30, 2026',
      event: 'Case Management Statement',
      filedBy: 'Northgate Property Management, LLC',
      documentId: 'doc-1071',
    },
    {
      date: 'May 6, 2024',
      event: 'Answer to Complaint',
      filedBy: 'Northgate Property Management, LLC',
      documentId: 'doc-0412',
    },
    {
      date: 'Mar 12, 2024',
      event: 'Complaint for Breach of the Warranty of Habitability',
      filedBy: 'Maria Alvarez (Plaintiff)',
      documentId: 'doc-0301',
    },
  ];

  protected readonly history: ScscTimelineItem[] = [
    {
      title: 'Motion to compel accepted',
      timestamp: 'Sep 23, 2026, 10:14 AM',
      description: 'Jordan Kim accepted envelope EF-2026-0922-1183 and set the hearing.',
      icon: 'check',
      status: 'success',
    },
    {
      title: 'Hearing scheduled',
      timestamp: 'Sep 23, 2026, 10:16 AM',
      description: 'Motion to Compel, Oct 13, 2026 at 9:00 AM in Dept. 10.',
      icon: 'calendar-plus',
      status: 'info',
    },
    {
      title: 'Interpreter flag added',
      timestamp: 'Aug 18, 2026, 11:02 AM',
      description: 'Spanish, requested by plaintiff at the CMC.',
      icon: 'languages',
      status: 'neutral',
    },
    {
      title: 'Case reassigned',
      timestamp: 'Jul 2, 2024, 3:40 PM',
      description: 'From Dept. 3 to Dept. 10 (peremptory challenge, CCP 170.6).',
      icon: 'arrow-right-left',
      status: 'warning',
    },
  ];

  protected readonly tasks = signal<Task[]>([
    {
      id: 't1',
      label: 'Send hearing notice to all parties',
      due: 'Sep 25',
      overdue: true,
      done: false,
    },
    { id: 't2', label: 'Confirm Spanish interpreter for Oct 13', due: 'Oct 6', done: false },
    { id: 't3', label: 'Check proof of service for the motion', due: 'Oct 1', done: true },
  ]);
  protected readonly doneCount = computed(() => this.tasks().filter((t) => t.done).length);

  protected readonly filteredDocket = computed(() => {
    const q = this.docketQuery().trim().toLowerCase();
    return q
      ? this.docket.filter((e) =>
          \`\${e.event} \${e.filedBy ?? ''} \${e.date}\`.toLowerCase().includes(q),
        )
      : this.docket;
  });

  protected onMenu(id: string): void {
    this.message.set(MENU_MESSAGES[id] ?? '');
  }

  protected toggle(id: string): void {
    this.tasks.update((all) => all.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  protected addNote(): void {
    this.message.set('Note saved to the case history.');
    this.note.set('');
  }
}
`,html:`<scsc-app-shell [(collapsed)]="collapsed">
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Civil Division \xB7 Downtown Superior Court"
    logoSrc="scsc-seal.png"
  >
    <scsc-icon-button
      [icon]="collapsed() ? 'panel-left-open' : 'panel-left-close'"
      [label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
      class="hidden lg:inline-flex"
      (click)="collapsed.set(!collapsed())"
    />
    <scsc-user-menu name="Jordan Kim" email="jkim@scscourt.org">
      <li><a routerLink="settings">Settings</a></li>
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>

  <scsc-sidebar-nav slot="sidebar" [sections]="nav" [collapsed]="collapsed()" />

  <div class="flex flex-col gap-6 scsc-pad-page">
    <div class="flex flex-col gap-3">
      <scsc-breadcrumb [items]="trail" />
      <scsc-case-header
        title="Alvarez v. Northgate Property Management"
        caseNumber="24CV012345"
        status="active"
        caseType="Civil \u2014 Unlimited \xB7 Dept. 10"
        filed="Mar 12, 2024"
      >
        <a scsc-button variant="neutral" outline size="sm" routerLink="calendar">
          <scsc-icon name="calendar-plus" size="sm" />
          Schedule hearing
        </a>
        <scsc-button size="sm" (click)="message.set('New docket entry form opened.')">
          <scsc-icon name="plus" size="sm" />
          Add docket entry
        </scsc-button>
        <scsc-dropdown
          label="More actions"
          align="end"
          triggerClass="btn-ghost"
          [items]="menu"
          (select)="onMenu($event)"
        />
      </scsc-case-header>
      <ul class="flex flex-wrap gap-2" aria-label="Case flags">
        <li><scsc-badge tone="info" soft size="sm">Jury demanded</scsc-badge></li>
        <li><scsc-badge tone="secondary" soft size="sm">Interpreter: Spanish</scsc-badge></li>
        <li><scsc-badge soft size="sm">Complex: no</scsc-badge></li>
      </ul>
      <p class="min-h-5 text-sm text-base-content/80" role="status">{{ message() }}</p>
    </div>

    <div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <div class="flex min-w-0 flex-col gap-8">
        <scsc-section heading="Case details">
          <scsc-button slot="actions" variant="ghost" size="sm">
            <scsc-icon name="pencil" size="sm" />
            Edit
          </scsc-button>
          <scsc-card>
            <scsc-description-list [items]="details" />
          </scsc-card>
        </scsc-section>

        <scsc-section
          heading="Parties"
          [description]="parties.length + ' parties and attorneys'"
        >
          <scsc-button slot="actions" variant="ghost" size="sm">
            <scsc-icon name="user-plus" size="sm" />
            Add party
          </scsc-button>
          <scsc-card>
            <scsc-party-list [parties]="parties" />
          </scsc-card>
        </scsc-section>

        <scsc-section heading="Register of actions">
          <scsc-toolbar>
            <scsc-search-input
              [(value)]="docketQuery"
              placeholder="Filter docket entries"
              class="w-full sm:w-80"
            />
            <p slot="end" class="text-sm text-base-content/70" role="status">
              {{ filteredDocket().length }} of {{ docket.length }} entries
            </p>
          </scsc-toolbar>
          <scsc-docket-table
            [entries]="filteredDocket()"
            label="Register of actions, 24CV012345"
            (viewDocument)="message.set('Opening document ' + $event + ' in the viewer\u2026')"
          />
        </scsc-section>

        <scsc-section
          heading="History"
          description="Changes to this case record, newest first."
        >
          <scsc-card>
            <scsc-timeline [items]="history" />
          </scsc-card>
        </scsc-section>
      </div>

      <scsc-detail-panel
        title="Clerk\u2019s panel"
        class="overflow-hidden rounded-box border border-base-300 xl:sticky xl:top-[calc(var(--scsc-chrome-h)+1rem)]"
      >
        <div class="flex flex-col gap-6">
          <section aria-labelledby="panel-next">
            <h3 id="panel-next" class="mb-2 text-sm font-semibold">Next hearing</h3>
            <scsc-hearing-card
              flush
              type="Motion to Compel Further Responses"
              datetime="Tue, Oct 13, 2026 \xB7 9:00 AM"
              department="10"
              judge="Hon. Miriam Okafor"
            />
          </section>

          <section aria-labelledby="panel-tasks">
            <div class="mb-2 flex items-baseline justify-between gap-2">
              <h3 id="panel-tasks" class="text-sm font-semibold">Tasks</h3>
              <span class="text-xs tnum text-base-content/70"
                >{{ doneCount() }} of {{ tasks().length }} done</span
              >
            </div>
            <ul class="flex flex-col gap-2">
              @for (t of tasks(); track t.id) {
                <li>
                  <label class="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      scsc-checkbox
                      class="mt-0.5"
                      [checked]="t.done"
                      (change)="toggle(t.id)"
                    />
                    <span class="min-w-0 flex-1" [class.line-through]="t.done">
                      {{ t.label }}
                      <span
                        class="block text-xs tnum"
                        [class.text-error]="t.overdue && !t.done"
                        [class.text-base-content/70]="!t.overdue || t.done"
                        >{{ t.overdue && !t.done ? 'Overdue \xB7 ' : '' }}Due {{ t.due }}</span
                      >
                    </span>
                  </label>
                </li>
              }
            </ul>
          </section>

          <section aria-labelledby="panel-note">
            <h3 id="panel-note" class="mb-2 text-sm font-semibold">Add a note</h3>
            <scsc-form-field
              label="Internal note"
              for="case-note"
              hint="Visible to court staff only"
            >
              <textarea
                scsc-textarea
                id="case-note"
                rows="3"
                [value]="note()"
                (input)="note.set($any($event.target).value)"
              ></textarea>
            </scsc-form-field>
            <scsc-button size="sm" class="mt-2" [disabled]="!note().trim()" (click)="addNote()"
              >Save note</scsc-button
            >
          </section>
        </div>
      </scsc-detail-panel>
    </div>
  </div>
</scsc-app-shell>
`}}[`staff-case-record`],layout:`page`,height:`60rem`}];export{ve as DEMOS};