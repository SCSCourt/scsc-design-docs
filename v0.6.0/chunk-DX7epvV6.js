import{H as FN,Ms as uc,Na as Jb,Qt as SN,Xa as Pv,gn as VN,n as $N,nn as TN,ra as Af,va as G_,vr as gR,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var y={id:`u-mchen`,name:`Maria Chen`,role:`Clerk`};var A={id:`u-dokafor`,name:`David Okafor`,role:`Courtroom clerk`};var v={id:`u-lmoreno`,name:`Hon. Laura Moreno`,role:`Judicial officer`};var C={id:`u-pnair`,name:`Priya Nair`,role:`Administrator`};var O=[{id:`audit-log`,title:`Audit log`,description:"App shell with `scsc-audit-log`: actor, action and date filters, expandable rows with field changes (old → new) and formatted details, failure outcomes, CSV export.",component:class n{nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`dashboard`},{label:`Cases`,icon:`folder-open`,link:`cases`}]},{title:`Administration`,items:[{label:`Users & roles`,icon:`users`,link:`users`},{label:`Audit log`,icon:`history`,link:`.`,exact:!0}]}];actions={"case.status.update":`Case status changed`,"hearing.reschedule":`Hearing rescheduled`,"fee.waive":`Fee waived`,"user.role.update":`Roles changed`,"user.sign-in":`Signed in`,"document.seal":`Document sealed`};entries=[{id:`a-1009`,at:`2026-09-30T16:42:00-07:00`,actor:C,action:`user.role.update`,target:{type:`User`,id:`u-dokafor`,label:`David Okafor`},summary:`Added the Judicial support role`,outcome:`success`,changes:[{field:`roles`,label:`Roles`,from:[`Clerk`],to:[`Clerk`,`Judicial support`]}],ip:`10.20.4.17`},{id:`a-1008`,at:`2026-09-30T15:10:00-07:00`,actor:A,action:`hearing.reschedule`,target:{type:`Hearing`,id:`H-88213`,label:`24CV012345 Motion to compel`},summary:`Continued on the court’s own motion`,outcome:`success`,changes:[{field:`date`,label:`Date`,from:`2026-09-15`,to:`2026-11-03`,kind:`date`},{field:`department`,label:`Department`,from:`Dept. 10`,to:`Dept. 16`}]},{id:`a-1007`,at:`2026-09-30T11:05:00-07:00`,actor:y,action:`fee.waive`,target:{type:`Case`,id:`24FL004821`,label:`In re Marriage of Patel`},summary:`Fee waiver granted (FW-003)`,outcome:`success`,changes:[{field:`balance`,label:`Balance due`,from:140,to:0,kind:`currency`}],details:{order:`FW-003`,filedAt:`2026-09-29T14:00:00-07:00`,approvedBy:`u-lmoreno`}},{id:`a-1006`,at:`2026-09-29T17:20:00-07:00`,actor:v,action:`document.seal`,target:{type:`Case`,id:`24JD000517`,label:`In re J.M., a Minor`},summary:`Sealed the status review report`,outcome:`success`,changes:[{field:`confidential`,label:`Confidential`,from:!1,to:!0}]},{id:`a-1005`,at:`2026-09-29T09:02:00-07:00`,actor:y,action:`case.status.update`,target:{type:`Case`,id:`24CV016020`,label:`Reyes v. City of San Jose`},summary:`Dismissed without prejudice`,outcome:`success`,changes:[{field:`status`,label:`Case status`,from:`Active`,to:`Dismissed`}]},{id:`a-1004`,at:`2026-09-29T08:31:00-07:00`,actor:null,action:`user.sign-in`,target:{type:`User`,id:`u-unknown`,label:`jdoe@example.com`},summary:`Sign-in blocked after five failed attempts`,outcome:`failure`,ip:`203.0.113.42`}];static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-audit-log-template`]],decls:10,vars:4,consts:[[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Administration`,`logoSrc`,`scsc-seal.png`],[`name`,`Priya Nair`,`email`,`pnair@scscourt.org`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`],[1,`flex`,`flex-col`,`gap-6`,`p-4`,`lg:p-8`],[`title`,`Audit log`,`description`,`Every change to cases, hearings, fees and user access. Expand a row to see the old and new values.`],[`label`,`Audit log`,`exportFilename`,`audit-log-2026-09.csv`,`timeZone`,`America/Los_Angeles`,3,`entries`,`actionLabels`,`pageSize`]],template:function(e,t){e&1&&(Ga(0,`scsc-app-shell`)(1,`scsc-masthead`,0)(2,`scsc-user-menu`,1)(3,`li`)(4,`button`,2),G_(5,`Sign out`),Lf()()()(),uc(6,`scsc-sidebar-nav`,3),Ga(7,`div`,4),uc(8,`scsc-page-header`,5)(9,`scsc-audit-log`,6),Lf()()),e&2&&(Jb(6),Pv(`sections`,t.nav),Jb(3),Pv(`entries`,t.entries)(`actionLabels`,t.actions)(`pageSize`,10))},dependencies:[SN,gR,FN,TN,$N,VN],encapsulation:2})},source:{"audit-log":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscAppShell,
  ScscAuditLog,
  ScscMasthead,
  ScscPageHeader,
  ScscSidebarNav,
  ScscUserMenu,
  type ScscActor,
  type ScscAuditEntry,
  type ScscNavSection,
} from '@scscourt/design';

const CHEN: ScscActor = { id: 'u-mchen', name: 'Maria Chen', role: 'Clerk' };
const OKAFOR: ScscActor = { id: 'u-dokafor', name: 'David Okafor', role: 'Courtroom clerk' };
const MORENO: ScscActor = { id: 'u-lmoreno', name: 'Hon. Laura Moreno', role: 'Judicial officer' };
const NAIR: ScscActor = { id: 'u-pnair', name: 'Priya Nair', role: 'Administrator' };

@Component({
  selector: 'app-audit-log-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAppShell, ScscAuditLog, ScscMasthead, ScscPageHeader, ScscSidebarNav, ScscUserMenu],
  template: \`
    <scsc-app-shell>
      <scsc-masthead
        slot="masthead"
        title="Court Operations"
        subtitle="Administration"
        logoSrc="scsc-seal.png"
      >
        <scsc-user-menu name="Priya Nair" email="pnair@scscourt.org">
          <li><button type="button">Sign out</button></li>
        </scsc-user-menu>
      </scsc-masthead>
      <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

      <div class="flex flex-col gap-6 p-4 lg:p-8">
        <scsc-page-header
          title="Audit log"
          description="Every change to cases, hearings, fees and user access. Expand a row to see the old and new values."
        />
        <!-- Expandable rows show each field change as old \u2192 new, plus the request payload. -->
        <scsc-audit-log
          label="Audit log"
          [entries]="entries"
          [actionLabels]="actions"
          [pageSize]="10"
          exportFilename="audit-log-2026-09.csv"
          timeZone="America/Los_Angeles"
        />
      </div>
    </scsc-app-shell>
  \`,
})
export class AuditLogTemplate {
  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: 'dashboard' },
        { label: 'Cases', icon: 'folder-open', link: 'cases' },
      ],
    },
    {
      title: 'Administration',
      items: [
        { label: 'Users & roles', icon: 'users', link: 'users' },
        { label: 'Audit log', icon: 'history', link: '.', exact: true },
      ],
    },
  ];
  protected readonly actions: Record<string, string> = {
    'case.status.update': 'Case status changed',
    'hearing.reschedule': 'Hearing rescheduled',
    'fee.waive': 'Fee waived',
    'user.role.update': 'Roles changed',
    'user.sign-in': 'Signed in',
    'document.seal': 'Document sealed',
  };
  protected readonly entries: ScscAuditEntry[] = [
    {
      id: 'a-1009',
      at: '2026-09-30T16:42:00-07:00',
      actor: NAIR,
      action: 'user.role.update',
      target: { type: 'User', id: 'u-dokafor', label: 'David Okafor' },
      summary: 'Added the Judicial support role',
      outcome: 'success',
      changes: [
        { field: 'roles', label: 'Roles', from: ['Clerk'], to: ['Clerk', 'Judicial support'] },
      ],
      ip: '10.20.4.17',
    },
    {
      id: 'a-1008',
      at: '2026-09-30T15:10:00-07:00',
      actor: OKAFOR,
      action: 'hearing.reschedule',
      target: { type: 'Hearing', id: 'H-88213', label: '24CV012345 Motion to compel' },
      summary: 'Continued on the court\u2019s own motion',
      outcome: 'success',
      changes: [
        { field: 'date', label: 'Date', from: '2026-09-15', to: '2026-11-03', kind: 'date' },
        { field: 'department', label: 'Department', from: 'Dept. 10', to: 'Dept. 16' },
      ],
    },
    {
      id: 'a-1007',
      at: '2026-09-30T11:05:00-07:00',
      actor: CHEN,
      action: 'fee.waive',
      target: { type: 'Case', id: '24FL004821', label: 'In re Marriage of Patel' },
      summary: 'Fee waiver granted (FW-003)',
      outcome: 'success',
      changes: [{ field: 'balance', label: 'Balance due', from: 140, to: 0, kind: 'currency' }],
      details: { order: 'FW-003', filedAt: '2026-09-29T14:00:00-07:00', approvedBy: 'u-lmoreno' },
    },
    {
      id: 'a-1006',
      at: '2026-09-29T17:20:00-07:00',
      actor: MORENO,
      action: 'document.seal',
      target: { type: 'Case', id: '24JD000517', label: 'In re J.M., a Minor' },
      summary: 'Sealed the status review report',
      outcome: 'success',
      changes: [{ field: 'confidential', label: 'Confidential', from: false, to: true }],
    },
    {
      id: 'a-1005',
      at: '2026-09-29T09:02:00-07:00',
      actor: CHEN,
      action: 'case.status.update',
      target: { type: 'Case', id: '24CV016020', label: 'Reyes v. City of San Jose' },
      summary: 'Dismissed without prejudice',
      outcome: 'success',
      changes: [{ field: 'status', label: 'Case status', from: 'Active', to: 'Dismissed' }],
    },
    {
      id: 'a-1004',
      at: '2026-09-29T08:31:00-07:00',
      actor: null,
      action: 'user.sign-in',
      target: { type: 'User', id: 'u-unknown', label: 'jdoe@example.com' },
      summary: 'Sign-in blocked after five failed attempts',
      outcome: 'failure',
      ip: '203.0.113.42',
    },
  ];
}
`,html:`<scsc-app-shell>
  <scsc-masthead
    slot="masthead"
    title="Court Operations"
    subtitle="Administration"
    logoSrc="scsc-seal.png"
  >
    <scsc-user-menu name="Priya Nair" email="pnair@scscourt.org">
      <li><button type="button">Sign out</button></li>
    </scsc-user-menu>
  </scsc-masthead>
  <scsc-sidebar-nav slot="sidebar" [sections]="nav" />

  <div class="flex flex-col gap-6 p-4 lg:p-8">
    <scsc-page-header
      title="Audit log"
      description="Every change to cases, hearings, fees and user access. Expand a row to see the old and new values."
    />
    <!-- Expandable rows show each field change as old \u2192 new, plus the request payload. -->
    <scsc-audit-log
      label="Audit log"
      [entries]="entries"
      [actionLabels]="actions"
      [pageSize]="10"
      exportFilename="audit-log-2026-09.csv"
      timeZone="America/Los_Angeles"
    />
  </div>
</scsc-app-shell>
`}}[`audit-log`],layout:`page`,height:`52rem`}];export{O as DEMOS};