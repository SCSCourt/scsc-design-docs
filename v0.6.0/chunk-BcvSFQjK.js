import{Es as sD,H as FN,Hs as y_,Ht as PP,Ki as ye$1,L as Er,M as DN,Ma as JT,Mr as jn,Ms as uc,Na as Jb,Qt as SN,Vr as mN,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cn as UE,cs as lc,ds as nD,f as AP,gn as VN,gs as oM,ks as t_,ms as nu,n as $N,nn as TN,ps as n_,ra as Af,t as $E,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CWEzHguV.js";import{t as V}from"./chunk-BvKVxBhA.js";import"./chunk-BgxDSBe6.js";import{r as xn,t as bn}from"./chunk-BiCqrzLG.js";import{t as T}from"./chunk-DPk2Vdfd.js";import{t as V$1}from"./chunk-CalRHdtX.js";var G=i=>[`cases`,i];var Q=(i,n)=>n.label;var X=(i,n)=>n.caseNumber+n.time;function Y(i,n){if(i&1&&(Ga(0,`li`),uc(1,`scsc-stat-trend`,45),Lf()),i&2){let e=n.$implicit;Jb(),Pv(`label`,e.label)(`value`,e.value)(`data`,e.data)(`delta`,e.delta)(`trend`,e.trend)(`sparkColor`,e.color)}}function Z(i,n){if(i&1&&(Ga(0,`li`,28),G_(1),Lf()),i&2){let e=n.$implicit;Jb(),nD(e)}}function ee(i,n){if(i&1&&(Ga(0,`scsc-badge`,49),G_(1),Lf()),i&2){let e=y_().$implicit;Jb(),nD(e.interpreter)}}function ae(i,n){if(i&1&&(Ga(0,`li`,38)(1,`scsc-hearing-card`,46)(2,`div`,47)(3,`a`,48),G_(4),Lf(),JT(5,ee,2,1,`scsc-badge`,49),Lf()()()),i&2){let e=n.$implicit;Jb(),Pv(`type`,e.type)(`datetime`,e.time+` · `+e.caseTitle)(`department`,e.department)(`judge`,e.judge),Jb(2),Pv(`routerLink`,oM(7,G,e.caseNumber)),Jb(),nD(e.caseNumber),Jb(),t_(e.interpreter?5:-1)}}function te(){let i=new Date(2026,6,6),n=[];for(let e=0;e<84;e++){let a=new Date(i);a.setDate(i.getDate()+e);let p=a.getDay(),d=p===0||p===6?4:120+e*37%60,$=a.toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`});n.push({label:`${$} filings`,value:d})}return n}var ye=[{id:`staff-dashboard`,title:`Staff dashboard`,description:`App shell with a collapsible sidebar; KPI tiles with sparklines; bar, line and donut charts and a filing heatmap, each with a text alternative; today’s hearings with interpreter flags, queue stats and recent activity.`,component:class i{collapsed=q(!1);nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`.`,exact:!0},{label:`Work queue`,icon:`inbox`,link:`queue`,badge:`37`},{label:`Cases`,icon:`folder-open`,link:`cases`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`}]},{title:`Administration`,items:[{label:`Reports`,icon:`chart-column`,link:`reports`},{label:`Audit log`,icon:`history`,link:`audit`},{label:`Settings`,icon:`settings`,link:`settings`}]}];kpis=[{label:`Filings received today`,value:`148`,data:[121,134,118,142,139,151,148],delta:`+12% on last Wednesday`,trend:`up`,color:`var(--color-primary)`},{label:`Awaiting review`,value:`37`,data:[52,49,44,46,41,39,37],delta:`−15 since Monday`,trend:`up`,color:`var(--color-success)`},{label:`Hearings today`,value:`42`,data:[38,44,40,47,36,41,42],delta:`Across 9 departments`,trend:`flat`,color:`var(--color-secondary)`},{label:`Average review time`,value:`3.4 h`,data:[2.9,3.1,3,3.3,3.2,3.5,3.4],delta:`+0.3 h this week`,trend:`down`,color:`var(--color-warning)`}];filingsByType=[{label:`Unlimited`,value:412},{label:`Limited`,value:356},{label:`Small claims`,value:188},{label:`Unlawful det.`,value:241},{label:`Probate`,value:97}];reviewFlow=[{id:`received`,label:`Received`,data:[131,128,140,137,146,139,151,149,144,158]},{id:`reviewed`,label:`Reviewed`,data:[118,126,131,124,140,133,147,152,139,164]}];reviewedDays=[`Sep 17`,`Sep 18`,`Sep 21`,`Sep 22`,`Sep 23`,`Sep 24`,`Sep 25`,`Sep 28`,`Sep 29`,`Sep 30`];dispositions=[{label:`Judgment`,value:214},{label:`Dismissal`,value:187},{label:`Settlement`,value:143},{label:`Transfer`,value:67}];activity=te();weekdayInitials=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];hearings=[{time:`8:30 AM`,type:`Unlawful Detainer Trial`,department:`18`,judge:`Hon. Ellen Vasquez`,caseNumber:`26CV031877`,caseTitle:`Rosewood Commons v. Tran`,interpreter:`Vietnamese`},{time:`9:00 AM`,type:`Motion to Compel Further Responses`,department:`10`,judge:`Hon. Miriam Okafor`,caseNumber:`24CV012345`,caseTitle:`Alvarez v. Northgate Property Mgmt.`},{time:`10:00 AM`,type:`Case Management Conference`,department:`3`,judge:`Hon. Samuel Whitfield`,caseNumber:`24CV013002`,caseTitle:`Nguyen v. Almaden Ridge Apartments`},{time:`1:30 PM`,type:`Order to Show Cause re: Dismissal`,department:`10`,judge:`Hon. Miriam Okafor`,caseNumber:`25CV004411`,caseTitle:`Alvarez v. Bay Valley Auto Group`,interpreter:`Spanish`}];activityFeed=[{title:`Answer accepted in 25CV002210`,timestamp:`9:42 AM`,description:`Reviewed by Jordan Kim`,icon:`check`,status:`success`},{title:`Hearing scheduled in 24CV013002`,timestamp:`9:15 AM`,description:`Case Management Conference, Dept. 3`,icon:`calendar-plus`,status:`info`},{title:`Filing rejected in 26CV031877`,timestamp:`8:51 AM`,description:`Missing signature on proof of service`,icon:`x`,status:`error`}];static ɵfac=function(e){return new(e||i)};static ɵcmp=Af({type:i,selectors:[[`app-staff-dashboard-template`]],decls:59,vars:18,consts:[[3,`collapsedChange`,`collapsed`],[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Civil Division · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`],[1,`hidden`,`lg:inline-flex`,3,`click`,`icon`,`label`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`routerLink`,`settings`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`,`collapsed`],[1,`flex`,`flex-col`,`gap-8`,`scsc-pad-page`],[`title`,`Good morning, Jordan`,`description`,`Wednesday, September 30, 2026 · Civil Division, Downtown Superior Court`],[`slot`,`actions`,`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`queue`],[`name`,`inbox`,`size`,`sm`],[`slot`,`actions`,`scsc-button`,``,`size`,`sm`,`routerLink`,`cases/new`],[`name`,`plus`,`size`,`sm`],[`aria-labelledby`,`dash-kpis`],[`id`,`dash-kpis`,1,`sr-only`],[1,`grid`,`grid-cols-1`,`gap-4`,`sm:grid-cols-2`,`xl:grid-cols-4`],[`heading`,`Workload`,`description`,`Civil Division volumes, including today.`],[1,`grid`,`grid-cols-1`,`gap-6`,`lg:grid-cols-2`],[`title`,`Filings by case type, last 7 days`],[`label`,`Filings by case type, last 7 days: Unlimited civil 412, Limited civil 356, Small claims 188, Unlawful detainer 241, Probate 97`,`showValues`,``,3,`data`,`height`],[`title`,`Filings received and reviewed per day, last 2 weeks`],[`axis`,``,`categoryLabel`,`Court day`,`label`,`Filings received and reviewed per court day, September 17 to 30`,3,`series`,`labels`,`height`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[`title`,`Dispositions, last 30 days`],[`centerLabel`,`611`,`label`,`611 dispositions in the last 30 days, by type`,3,`data`,`innerRadius`,`size`],[`title`,`Filing activity, last 12 weeks`],[1,`flex`,`gap-2`,`py-2`],[`aria-hidden`,`true`,1,`hidden`,`flex-col`,`text-xs`,`text-base-content/70`,`sm:flex`],[1,`flex`,`h-[23px]`,`items-center`,`leading-none`],[`label`,`Filings per day for the last 12 weeks: 120 to 180 on court days, almost none on weekends`,1,`min-w-0`,3,`data`,`size`,`gap`],[1,`mt-3`,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[1,`text-sm`,`text-base-content/70`],[`heading`,`Today`,`description`,`Hearings on the civil calendar and your queue.`],[1,`grid`,`grid-cols-1`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`],[3,`title`],[`slot`,`header`,`routerLink`,`calendar`,1,`inline-flex`,`items-center`,`gap-1`,`text-sm`,`font-medium`,`text-primary`,`hover:underline`],[`name`,`arrow-right`,`size`,`xs`],[1,`-my-1`,`divide-y`,`divide-base-300`],[1,`py-3.5`],[1,`flex`,`flex-col`,`gap-6`],[1,`grid`,`grid-cols-2`,`gap-4`],[`label`,`Due today`,`value`,`14`,`icon`,`clock`],[`label`,`Overdue`,`value`,`3`,`delta`,`2 more than yesterday`,`trend`,`down`,`icon`,`triangle-alert`],[`title`,`Recent activity`],[3,`items`],[1,`h-full`,3,`label`,`value`,`data`,`delta`,`trend`,`sparkColor`],[`flush`,``,3,`type`,`datetime`,`department`,`judge`],[1,`flex`,`flex-col`,`items-end`,`gap-1`],[1,`text-sm`,`font-medium`,`tnum`,`text-primary`,`hover:underline`,3,`routerLink`],[`size`,`sm`,`tone`,`info`,`soft`,``]],template:function(e,a){e&1&&(Ga(0,`scsc-app-shell`,0),sD(`collapsedChange`,function(d){return Y_(a.collapsed,d)||(a.collapsed=d),d}),Ga(1,`scsc-masthead`,1)(2,`scsc-icon-button`,2),lc(`click`,function(){return a.collapsed.set(!a.collapsed())}),Lf(),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`a`,4),G_(6,`Settings`),Lf()(),Ga(7,`li`)(8,`button`,5),G_(9,`Sign out`),Lf()()()(),uc(10,`scsc-sidebar-nav`,6),Ga(11,`div`,7)(12,`scsc-page-header`,8)(13,`a`,9),uc(14,`scsc-icon`,10),G_(15,` Work queue `),Lf(),Ga(16,`a`,11),uc(17,`scsc-icon`,12),G_(18,` New case `),Lf()(),Ga(19,`section`,13)(20,`h2`,14),G_(21,`Key figures`),Lf(),Ga(22,`ul`,15),o_(23,Y,2,6,`li`,null,Q),Lf()(),Ga(25,`scsc-section`,16)(26,`div`,17)(27,`scsc-card`,18),uc(28,`scsc-bar-chart`,19),Lf(),Ga(29,`scsc-card`,20),uc(30,`scsc-line-chart`,21),Ga(31,`p`,22),G_(32,` Averaging 142 a day, up 9% on the two weeks before. `),Lf()(),Ga(33,`scsc-card`,23),uc(34,`scsc-pie-chart`,24),Lf(),Ga(35,`scsc-card`,25)(36,`div`,26)(37,`ul`,27),o_(38,Z,2,1,`li`,28,n_),Lf(),uc(40,`scsc-calendar-heatmap`,29),Lf(),Ga(41,`div`,30)(42,`p`,31),G_(43,`One square per day, oldest week first.`),Lf()()()()(),Ga(44,`scsc-section`,32)(45,`div`,33)(46,`scsc-card`,34)(47,`a`,35),G_(48,` Full calendar `),uc(49,`scsc-icon`,36),Lf(),Ga(50,`ul`,37),o_(51,ae,6,9,`li`,38,X),Lf()(),Ga(53,`div`,39)(54,`div`,40),uc(55,`scsc-stat`,41)(56,`scsc-stat`,42),Lf(),Ga(57,`scsc-card`,43),uc(58,`scsc-timeline`,44),Lf()()()()()()),e&2&&(iD(`collapsed`,a.collapsed),Jb(2),Pv(`icon`,a.collapsed()?`panel-left-open`:`panel-left-close`)(`label`,a.collapsed()?`Expand sidebar`:`Collapse sidebar`),Jb(8),Pv(`sections`,a.nav)(`collapsed`,a.collapsed()),Jb(13),i_(a.kpis),Jb(5),Pv(`data`,a.filingsByType)(`height`,210),Jb(2),Pv(`series`,a.reviewFlow)(`labels`,a.reviewedDays)(`height`,210),Jb(4),Pv(`data`,a.dispositions)(`innerRadius`,.6)(`size`,180),Jb(4),i_(a.weekdayInitials),Jb(2),Pv(`data`,a.activity)(`size`,18)(`gap`,5),Jb(6),Pv(`title`,`Hearings today (`+a.hearings.length+`)`),Jb(5),i_(a.hearings),Jb(7),Pv(`items`,a.activityFeed))},dependencies:[nu,SN,jn,xn,$E,V,mN,Er,ye$1,UE,bn,V$1,FN,TN,DN,$N,AP,T,PP,VN],encapsulation:2})},source:{"staff-dashboard":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscAppShell,
  ScscBadge,
  ScscButtonLink,
  ScscCard,
  ScscHearingCard,
  ScscIcon,
  ScscIconButton,
  ScscMasthead,
  type ScscNavSection,
  ScscPageHeader,
  ScscSection,
  ScscSidebarNav,
  ScscStat,
  ScscTimeline,
  type ScscTimelineItem,
  ScscUserMenu,
} from '@scscourt/design';
import {
  ScscBarChart,
  ScscCalendarHeatmap,
  type ScscChartDatum,
  type ScscChartSeries,
  type ScscHeatmapCell,
  ScscLineChart,
  ScscPieChart,
  ScscStatTrend,
} from '@scscourt/design/charts';

interface Kpi {
  label: string;
  value: string;
  data: number[];
  delta: string;
  trend: 'up' | 'down' | 'flat';
  color: string;
}

interface TodayHearing {
  time: string;
  type: string;
  department: string;
  judge: string;
  caseNumber: string;
  caseTitle: string;
  interpreter?: string;
}

/** 12 weeks \xD7 7 days of filings, oldest first; weekends are quiet. */
function filingActivity(): ScscHeatmapCell[] {
  const start = new Date(2026, 6, 6); // Monday, July 6, 2026
  const cells: ScscHeatmapCell[] = [];
  for (let i = 0; i < 84; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    const weekday = day.getDay();
    const base = weekday === 0 || weekday === 6 ? 4 : 120 + ((i * 37) % 60);
    const label = day.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    cells.push({ label: \`\${label} filings\`, value: base });
  }
  return cells;
}

@Component({
  selector: 'app-staff-dashboard-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ScscAppShell,
    ScscBadge,
    ScscBarChart,
    ScscButtonLink,
    ScscCalendarHeatmap,
    ScscCard,
    ScscHearingCard,
    ScscIcon,
    ScscIconButton,
    ScscLineChart,
    ScscPieChart,
    ScscMasthead,
    ScscPageHeader,
    ScscSection,
    ScscSidebarNav,
    ScscStat,
    ScscStatTrend,
    ScscTimeline,
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

      <div class="flex flex-col gap-8 scsc-pad-page">
        <scsc-page-header
          title="Good morning, Jordan"
          description="Wednesday, September 30, 2026 \xB7 Civil Division, Downtown Superior Court"
        >
          <a slot="actions" scsc-button variant="neutral" outline size="sm" routerLink="queue">
            <scsc-icon name="inbox" size="sm" />
            Work queue
          </a>
          <a slot="actions" scsc-button size="sm" routerLink="cases/new">
            <scsc-icon name="plus" size="sm" />
            New case
          </a>
        </scsc-page-header>

        <section aria-labelledby="dash-kpis">
          <h2 id="dash-kpis" class="sr-only">Key figures</h2>
          <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            @for (k of kpis; track k.label) {
              <li>
                <scsc-stat-trend
                  class="h-full"
                  [label]="k.label"
                  [value]="k.value"
                  [data]="k.data"
                  [delta]="k.delta"
                  [trend]="k.trend"
                  [sparkColor]="k.color"
                />
              </li>
            }
          </ul>
        </section>

        <scsc-section heading="Workload" description="Civil Division volumes, including today.">
          <!-- grid-cols-1 is minmax(0, 1fr): a wide chart can never stretch the column past a phone screen. -->
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <scsc-card title="Filings by case type, last 7 days">
              <scsc-bar-chart
                [data]="filingsByType"
                label="Filings by case type, last 7 days: Unlimited civil 412, Limited civil 356, Small claims 188, Unlawful detainer 241, Probate 97"
                [height]="210"
                showValues
              />
            </scsc-card>

            <scsc-card title="Filings received and reviewed per day, last 2 weeks">
              <!-- Two series: the legend buttons hide either line; the arrow keys read both per day. -->
              <scsc-line-chart
                [series]="reviewFlow"
                [labels]="reviewedDays"
                axis
                categoryLabel="Court day"
                label="Filings received and reviewed per court day, September 17 to 30"
                [height]="210"
              />
              <p class="mt-3 text-sm text-base-content/70">
                Averaging 142 a day, up 9% on the two weeks before.
              </p>
            </scsc-card>

            <scsc-card title="Dispositions, last 30 days">
              <!-- A donut (innerRadius) with a legend and direct labels; hiding a segment re-divides it. -->
              <scsc-pie-chart
                [data]="dispositions"
                [innerRadius]="0.6"
                [size]="180"
                centerLabel="611"
                label="611 dispositions in the last 30 days, by type"
              />
            </scsc-card>

            <scsc-card title="Filing activity, last 12 weeks">
              <div class="flex gap-2 py-2">
                <!-- The heatmap scales down to fit a phone; the day labels line up with full-size
                     squares only, so they show from sm. -->
                <ul class="hidden flex-col text-xs text-base-content/70 sm:flex" aria-hidden="true">
                  @for (d of weekdayInitials; track $index) {
                    <li class="flex h-[23px] items-center leading-none">{{ d }}</li>
                  }
                </ul>
                <scsc-calendar-heatmap
                  class="min-w-0"
                  [data]="activity"
                  label="Filings per day for the last 12 weeks: 120 to 180 on court days, almost none on weekends"
                  [size]="18"
                  [gap]="5"
                />
              </div>
              <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p class="text-sm text-base-content/70">One square per day, oldest week first.</p>
              </div>
            </scsc-card>
          </div>
        </scsc-section>

        <scsc-section heading="Today" description="Hearings on the civil calendar and your queue.">
          <div
            class="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
          >
            <scsc-card [title]="'Hearings today (' + hearings.length + ')'">
              <a
                slot="header"
                routerLink="calendar"
                class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Full calendar
                <scsc-icon name="arrow-right" size="xs" />
              </a>
              <ul class="-my-1 divide-y divide-base-300">
                @for (h of hearings; track h.caseNumber + h.time) {
                  <li class="py-3.5">
                    <scsc-hearing-card
                      flush
                      [type]="h.type"
                      [datetime]="h.time + ' \xB7 ' + h.caseTitle"
                      [department]="h.department"
                      [judge]="h.judge"
                    >
                      <div class="flex flex-col items-end gap-1">
                        <a
                          [routerLink]="['cases', h.caseNumber]"
                          class="text-sm font-medium tnum text-primary hover:underline"
                          >{{ h.caseNumber }}</a
                        >
                        @if (h.interpreter) {
                          <scsc-badge size="sm" tone="info" soft>{{ h.interpreter }}</scsc-badge>
                        }
                      </div>
                    </scsc-hearing-card>
                  </li>
                }
              </ul>
            </scsc-card>

            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-2 gap-4">
                <scsc-stat label="Due today" value="14" icon="clock" />
                <scsc-stat
                  label="Overdue"
                  value="3"
                  delta="2 more than yesterday"
                  trend="down"
                  icon="triangle-alert"
                />
              </div>
              <scsc-card title="Recent activity">
                <scsc-timeline [items]="activityFeed" />
              </scsc-card>
            </div>
          </div>
        </scsc-section>
      </div>
    </scsc-app-shell>
  \`,
})
export class StaffDashboardTemplate {
  protected readonly collapsed = signal(false);

  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: '.', exact: true },
        { label: 'Work queue', icon: 'inbox', link: 'queue', badge: '37' },
        { label: 'Cases', icon: 'folder-open', link: 'cases' },
        { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
      ],
    },
    {
      title: 'Administration',
      items: [
        { label: 'Reports', icon: 'chart-column', link: 'reports' },
        { label: 'Audit log', icon: 'history', link: 'audit' },
        { label: 'Settings', icon: 'settings', link: 'settings' },
      ],
    },
  ];

  protected readonly kpis: Kpi[] = [
    {
      label: 'Filings received today',
      value: '148',
      data: [121, 134, 118, 142, 139, 151, 148],
      delta: '+12% on last Wednesday',
      trend: 'up',
      color: 'var(--color-primary)',
    },
    {
      label: 'Awaiting review',
      value: '37',
      data: [52, 49, 44, 46, 41, 39, 37],
      delta: '\u221215 since Monday',
      trend: 'up',
      color: 'var(--color-success)',
    },
    {
      label: 'Hearings today',
      value: '42',
      data: [38, 44, 40, 47, 36, 41, 42],
      delta: 'Across 9 departments',
      trend: 'flat',
      color: 'var(--color-secondary)',
    },
    {
      label: 'Average review time',
      value: '3.4 h',
      data: [2.9, 3.1, 3.0, 3.3, 3.2, 3.5, 3.4],
      delta: '+0.3 h this week',
      trend: 'down',
      color: 'var(--color-warning)',
    },
  ];

  protected readonly filingsByType: ScscChartDatum[] = [
    { label: 'Unlimited', value: 412 },
    { label: 'Limited', value: 356 },
    { label: 'Small claims', value: 188 },
    { label: 'Unlawful det.', value: 241 },
    { label: 'Probate', value: 97 },
  ];

  /** One value per court day (weekends and holidays are skipped). */
  protected readonly reviewFlow: ScscChartSeries[] = [
    { id: 'received', label: 'Received', data: [131, 128, 140, 137, 146, 139, 151, 149, 144, 158] },
    { id: 'reviewed', label: 'Reviewed', data: [118, 126, 131, 124, 140, 133, 147, 152, 139, 164] },
  ];
  protected readonly reviewedDays = [
    'Sep 17',
    'Sep 18',
    'Sep 21',
    'Sep 22',
    'Sep 23',
    'Sep 24',
    'Sep 25',
    'Sep 28',
    'Sep 29',
    'Sep 30',
  ];

  protected readonly dispositions: ScscChartDatum[] = [
    { label: 'Judgment', value: 214 },
    { label: 'Dismissal', value: 187 },
    { label: 'Settlement', value: 143 },
    { label: 'Transfer', value: 67 },
  ];

  protected readonly activity = filingActivity();
  protected readonly weekdayInitials = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  protected readonly hearings: TodayHearing[] = [
    {
      time: '8:30 AM',
      type: 'Unlawful Detainer Trial',
      department: '18',
      judge: 'Hon. Ellen Vasquez',
      caseNumber: '26CV031877',
      caseTitle: 'Rosewood Commons v. Tran',
      interpreter: 'Vietnamese',
    },
    {
      time: '9:00 AM',
      type: 'Motion to Compel Further Responses',
      department: '10',
      judge: 'Hon. Miriam Okafor',
      caseNumber: '24CV012345',
      caseTitle: 'Alvarez v. Northgate Property Mgmt.',
    },
    {
      time: '10:00 AM',
      type: 'Case Management Conference',
      department: '3',
      judge: 'Hon. Samuel Whitfield',
      caseNumber: '24CV013002',
      caseTitle: 'Nguyen v. Almaden Ridge Apartments',
    },
    {
      time: '1:30 PM',
      type: 'Order to Show Cause re: Dismissal',
      department: '10',
      judge: 'Hon. Miriam Okafor',
      caseNumber: '25CV004411',
      caseTitle: 'Alvarez v. Bay Valley Auto Group',
      interpreter: 'Spanish',
    },
  ];

  protected readonly activityFeed: ScscTimelineItem[] = [
    {
      title: 'Answer accepted in 25CV002210',
      timestamp: '9:42 AM',
      description: 'Reviewed by Jordan Kim',
      icon: 'check',
      status: 'success',
    },
    {
      title: 'Hearing scheduled in 24CV013002',
      timestamp: '9:15 AM',
      description: 'Case Management Conference, Dept. 3',
      icon: 'calendar-plus',
      status: 'info',
    },
    {
      title: 'Filing rejected in 26CV031877',
      timestamp: '8:51 AM',
      description: 'Missing signature on proof of service',
      icon: 'x',
      status: 'error',
    },
  ];
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

  <div class="flex flex-col gap-8 scsc-pad-page">
    <scsc-page-header
      title="Good morning, Jordan"
      description="Wednesday, September 30, 2026 \xB7 Civil Division, Downtown Superior Court"
    >
      <a slot="actions" scsc-button variant="neutral" outline size="sm" routerLink="queue">
        <scsc-icon name="inbox" size="sm" />
        Work queue
      </a>
      <a slot="actions" scsc-button size="sm" routerLink="cases/new">
        <scsc-icon name="plus" size="sm" />
        New case
      </a>
    </scsc-page-header>

    <section aria-labelledby="dash-kpis">
      <h2 id="dash-kpis" class="sr-only">Key figures</h2>
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        @for (k of kpis; track k.label) {
          <li>
            <scsc-stat-trend
              class="h-full"
              [label]="k.label"
              [value]="k.value"
              [data]="k.data"
              [delta]="k.delta"
              [trend]="k.trend"
              [sparkColor]="k.color"
            />
          </li>
        }
      </ul>
    </section>

    <scsc-section heading="Workload" description="Civil Division volumes, including today.">
      <!-- grid-cols-1 is minmax(0, 1fr): a wide chart can never stretch the column past a phone screen. -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <scsc-card title="Filings by case type, last 7 days">
          <scsc-bar-chart
            [data]="filingsByType"
            label="Filings by case type, last 7 days: Unlimited civil 412, Limited civil 356, Small claims 188, Unlawful detainer 241, Probate 97"
            [height]="210"
            showValues
          />
        </scsc-card>

        <scsc-card title="Filings received and reviewed per day, last 2 weeks">
          <!-- Two series: the legend buttons hide either line; the arrow keys read both per day. -->
          <scsc-line-chart
            [series]="reviewFlow"
            [labels]="reviewedDays"
            axis
            categoryLabel="Court day"
            label="Filings received and reviewed per court day, September 17 to 30"
            [height]="210"
          />
          <p class="mt-3 text-sm text-base-content/70">
            Averaging 142 a day, up 9% on the two weeks before.
          </p>
        </scsc-card>

        <scsc-card title="Dispositions, last 30 days">
          <!-- A donut (innerRadius) with a legend and direct labels; hiding a segment re-divides it. -->
          <scsc-pie-chart
            [data]="dispositions"
            [innerRadius]="0.6"
            [size]="180"
            centerLabel="611"
            label="611 dispositions in the last 30 days, by type"
          />
        </scsc-card>

        <scsc-card title="Filing activity, last 12 weeks">
          <div class="flex gap-2 py-2">
            <!-- The heatmap scales down to fit a phone; the day labels line up with full-size
                 squares only, so they show from sm. -->
            <ul class="hidden flex-col text-xs text-base-content/70 sm:flex" aria-hidden="true">
              @for (d of weekdayInitials; track $index) {
                <li class="flex h-[23px] items-center leading-none">{{ d }}</li>
              }
            </ul>
            <scsc-calendar-heatmap
              class="min-w-0"
              [data]="activity"
              label="Filings per day for the last 12 weeks: 120 to 180 on court days, almost none on weekends"
              [size]="18"
              [gap]="5"
            />
          </div>
          <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm text-base-content/70">One square per day, oldest week first.</p>
          </div>
        </scsc-card>
      </div>
    </scsc-section>

    <scsc-section heading="Today" description="Hearings on the civil calendar and your queue.">
      <div
        class="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <scsc-card [title]="'Hearings today (' + hearings.length + ')'">
          <a
            slot="header"
            routerLink="calendar"
            class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Full calendar
            <scsc-icon name="arrow-right" size="xs" />
          </a>
          <ul class="-my-1 divide-y divide-base-300">
            @for (h of hearings; track h.caseNumber + h.time) {
              <li class="py-3.5">
                <scsc-hearing-card
                  flush
                  [type]="h.type"
                  [datetime]="h.time + ' \xB7 ' + h.caseTitle"
                  [department]="h.department"
                  [judge]="h.judge"
                >
                  <div class="flex flex-col items-end gap-1">
                    <a
                      [routerLink]="['cases', h.caseNumber]"
                      class="text-sm font-medium tnum text-primary hover:underline"
                      >{{ h.caseNumber }}</a
                    >
                    @if (h.interpreter) {
                      <scsc-badge size="sm" tone="info" soft>{{ h.interpreter }}</scsc-badge>
                    }
                  </div>
                </scsc-hearing-card>
              </li>
            }
          </ul>
        </scsc-card>

        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-2 gap-4">
            <scsc-stat label="Due today" value="14" icon="clock" />
            <scsc-stat
              label="Overdue"
              value="3"
              delta="2 more than yesterday"
              trend="down"
              icon="triangle-alert"
            />
          </div>
          <scsc-card title="Recent activity">
            <scsc-timeline [items]="activityFeed" />
          </scsc-card>
        </div>
      </div>
    </scsc-section>
  </div>
</scsc-app-shell>
`}}[`staff-dashboard`],layout:`page`,height:`60rem`}];export{ye as DEMOS};