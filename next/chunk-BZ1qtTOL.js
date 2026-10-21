import{Es as sD,Fr as kn,Hs as y_,I as EP,Ma as JT,Ms as uc,Na as Jb,Ps as ut,Ss as rD,Vr as mN,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,ht as KP,ks as t_,kt as NE,os as k_,ra as Af,ta as $f,va as G_,vn as Vn,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var W=(t,a)=>a.id;function U(t,a){if(t&1&&(Ga(0,`option`,3),G_(1),Lf()),t&2){let e=a.$implicit,n=y_();Pv(`value`,e.id)(`selected`,e.id===n.view()),Jb(),nD(e.label)}}var M=class t{views=[{id:`auto`,label:`Auto (by width)`},{id:`month`,label:`Month`},{id:`agenda`,label:`Agenda`}];view=q$1(`agenda`);day=q$1(null);setView(a){this.view.set(a)}events=[{date:`2026-10-06`,title:`CMC — Alvarez v. Northgate`,time:`9:00 AM`,location:`Dept. 10 · Downtown Superior Court`},{date:`2026-10-06`,title:`Motion to compel — Chen v. Baylands`,time:`1:30 PM`,location:`Dept. 10`,tone:`info`},{date:`2026-10-09`,title:`Filing deadline: opposition brief`,tone:`warning`},{date:`2026-10-14`,title:`Trial readiness — People v. Ortiz`,time:`8:30 AM`,location:`Dept. 42 · Hall of Justice`,tone:`secondary`},{date:`2026-10-21`,title:`Custody review — In re Marriage of Patel`,time:`10:00 AM`,location:`Family Justice Center`,tone:`success`},{date:`2026-10-27`,title:`Court closed: staff training`,tone:`error`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-views-demo`]],decls:8,vars:4,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`label`,`View`,`for`,`calendar-views-view`,1,`max-w-48`],[`scsc-select`,``,`id`,`calendar-views-view`,3,`change`],[3,`value`,`selected`],[`initialMonth`,`2026-10`,`today`,`2026-10-06`,3,`selectedChange`,`view`,`events`,`selected`],[1,`text-sm`,`text-base-content/70`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(c){return n.setView(c.target.value)}),o_(3,U,2,3,`option`,3,W),Lf()(),Ga(5,`scsc-calendar`,4),sD(`selectedChange`,function(c){return Y_(n.day,c)||(n.day=c),c}),Lf(),Ga(6,`p`,5),G_(7),Lf()()),e&2&&(Jb(3),i_(n.views),Jb(2),Pv(`view`,n.view())(`events`,n.events),iD(`selected`,n.day),Jb(2),$f(`Selected: `,n.day()??`none`))},dependencies:[KP,Vn,On],encapsulation:2})};var T=class t{day=q$1(`2026-10-14`);events=[{date:`2026-10-06`,title:`Arraignment calendar`,time:`8:30 AM`,location:`Dept. 42`},{date:`2026-10-14`,title:`Jury selection — People v. Ortiz`,time:`9:00 AM`,location:`Dept. 42`,tone:`secondary`},{date:`2026-10-15`,title:`Jury selection (day 2)`,time:`9:00 AM`,location:`Dept. 42`,tone:`secondary`},{date:`2026-10-30`,title:`Sentencing — People v. Nguyen`,time:`1:30 PM`,location:`Dept. 42`,tone:`info`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-narrow-demo`]],decls:2,vars:2,consts:[[`data-theme`,`scsc-design-dark`,1,`max-w-xs`,`rounded-box`,`bg-base-200`,`p-3`,`text-base-content`],[`initialMonth`,`2026-10`,`today`,`2026-10-06`,3,`selectedChange`,`events`,`selected`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-calendar`,1),sD(`selectedChange`,function(c){return Y_(n.day,c)||(n.day=c),c}),Lf()()),e&2&&(Jb(),Pv(`events`,n.events),iD(`selected`,n.day))},dependencies:[KP],encapsulation:2})};var f={"calendar-agenda":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCalendar, ScscCard, ScscText, type ScscCalendarEvent } from '@scscourt/design';

@Component({
  selector: 'app-calendar-agenda-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendar, ScscCard, ScscText],
  template: \`
    <div class="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <scsc-calendar [events]="events" initialMonth="2026-07" (dayClick)="selected.set($event)" />
      <scsc-card [title]="selected() ? 'Agenda for ' + selected() : 'Agenda'">
        @if (agenda().length) {
          <ul class="flex flex-col gap-3">
            @for (e of agenda(); track e.title) {
              <li>
                <scsc-text bold class="block">{{ e.title }}</scsc-text>
                @if (e.time) {
                  <scsc-text tone="muted" size="sm" tnum>{{ e.time }}</scsc-text>
                }
              </li>
            }
          </ul>
        } @else {
          <scsc-text tone="muted" size="sm">
            {{ selected() ? 'Nothing scheduled.' : 'Select a day to see its events.' }}
          </scsc-text>
        }
      </scsc-card>
    </div>
  \`,
})
export class CalendarAgendaDemo {
  protected readonly events: ScscCalendarEvent[] = [
    { date: '2026-07-14', title: 'CMC \u2014 Alvarez v. Northgate', tone: 'primary', time: '9:00 AM' },
    { date: '2026-07-14', title: 'Sentencing \u2014 People v. Harmon', tone: 'error', time: '1:30 PM' },
    {
      date: '2026-07-16',
      title: 'Probate review \u2014 Estate of O\u2019Donnell',
      tone: 'info',
      time: '10:00 AM',
    },
    {
      date: '2026-07-21',
      title: 'Trial setting \u2014 Patel v. SVTA',
      tone: 'secondary',
      time: '8:30 AM',
    },
    { date: '2026-07-28', title: 'Motion to Compel \u2014 Alvarez', tone: 'warning', time: '1:30 PM' },
  ];

  /** ISO date of the clicked day, or \`null\` before any click. */
  protected readonly selected = signal<string | null>(null);

  protected readonly agenda = computed(() => this.events.filter((e) => e.date === this.selected()));
}
`,html:`<div class="grid gap-4 lg:grid-cols-[1fr_18rem]">
  <scsc-calendar [events]="events" initialMonth="2026-07" (dayClick)="selected.set($event)" />
  <scsc-card [title]="selected() ? 'Agenda for ' + selected() : 'Agenda'">
    @if (agenda().length) {
      <ul class="flex flex-col gap-3">
        @for (e of agenda(); track e.title) {
          <li>
            <scsc-text bold class="block">{{ e.title }}</scsc-text>
            @if (e.time) {
              <scsc-text tone="muted" size="sm" tnum>{{ e.time }}</scsc-text>
            }
          </li>
        }
      </ul>
    } @else {
      <scsc-text tone="muted" size="sm">
        {{ selected() ? 'Nothing scheduled.' : 'Select a day to see its events.' }}
      </scsc-text>
    }
  </scsc-card>
</div>
`},"calendar-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCalendar, type ScscCalendarEvent } from '@scscourt/design';

@Component({
  selector: 'app-calendar-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendar],
  template: \`<scsc-calendar [events]="events" initialMonth="2026-07" class="max-w-xl" />\`,
})
export class CalendarBasicDemo {
  /** One dot per event (up to four per day); \`tone\` picks the colour. */
  protected readonly events: ScscCalendarEvent[] = [
    { date: '2026-07-14', title: 'Case Management Conference', tone: 'primary' },
    { date: '2026-07-28', title: 'Motion to Compel', tone: 'warning' },
    { date: '2026-07-31', title: 'Discovery cutoff', tone: 'error' },
  ];
}
`,html:`<scsc-calendar [events]="events" initialMonth="2026-07" class="max-w-xl" />
`},"calendar-legend":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScscCalendar,
  ScscHeading,
  ScscList,
  ScscText,
  type ScscCalendarEvent,
} from '@scscourt/design';

type Tone = NonNullable<ScscCalendarEvent['tone']>;

@Component({
  selector: 'app-calendar-legend-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendar, ScscHeading, ScscList, ScscText],
  template: \`
    <div class="grid max-w-4xl gap-6 lg:grid-cols-[1fr_16rem]">
      <div class="flex flex-col gap-3">
        <scsc-calendar [events]="events" initialMonth="2026-11" />
        <!-- The dots are colour only: say what each colour means. -->
        <ul class="flex flex-wrap gap-4 text-sm" aria-label="Legend">
          @for (item of legend; track item.tone) {
            <li class="flex items-center gap-2">
              <span class="size-2.5 rounded-full" [class]="item.dot" aria-hidden="true"></span>
              {{ item.label }}
            </li>
          }
        </ul>
      </div>

      <!-- The same events as text, for screen readers and for reading at a glance. -->
      <section aria-labelledby="calendar-legend-list">
        <scsc-heading id="calendar-legend-list" [level]="3" [visualLevel]="5"
          >November 2026</scsc-heading
        >
        <scsc-list class="mt-2">
          @for (e of events; track e.date + e.title) {
            <li class="py-2">
              <scsc-text bold size="sm" class="block">{{ e.title }}</scsc-text>
              <scsc-text tone="muted" size="sm" tnum
                >{{ e.date }}{{ e.time ? ' \xB7 ' + e.time : '' }}</scsc-text
              >
            </li>
          }
        </scsc-list>
      </section>
    </div>
  \`,
})
export class CalendarLegendDemo {
  protected readonly legend: { tone: Tone; dot: string; label: string }[] = [
    { tone: 'primary', dot: 'bg-primary', label: 'Hearing' },
    { tone: 'warning', dot: 'bg-warning', label: 'Filing deadline' },
    { tone: 'error', dot: 'bg-error', label: 'Court closed' },
  ];

  protected readonly events: ScscCalendarEvent[] = [
    { date: '2026-11-04', title: 'Opposition due \u2014 Patel v. SVT Logistics', tone: 'warning' },
    {
      date: '2026-11-09',
      title: 'Trial Setting Conference \u2014 24CV013002',
      tone: 'primary',
      time: '8:30 AM',
    },
    { date: '2026-11-11', title: 'Veterans Day', tone: 'error' },
    {
      date: '2026-11-18',
      title: 'Motion to Compel \u2014 24CV012345',
      tone: 'primary',
      time: '1:30 PM',
    },
    { date: '2026-11-26', title: 'Thanksgiving', tone: 'error' },
    { date: '2026-11-27', title: 'Day after Thanksgiving', tone: 'error' },
  ];
}
`,html:`<div class="grid max-w-4xl gap-6 lg:grid-cols-[1fr_16rem]">
  <div class="flex flex-col gap-3">
    <scsc-calendar [events]="events" initialMonth="2026-11" />
    <!-- The dots are colour only: say what each colour means. -->
    <ul class="flex flex-wrap gap-4 text-sm" aria-label="Legend">
      @for (item of legend; track item.tone) {
        <li class="flex items-center gap-2">
          <span class="size-2.5 rounded-full" [class]="item.dot" aria-hidden="true"></span>
          {{ item.label }}
        </li>
      }
    </ul>
  </div>

  <!-- The same events as text, for screen readers and for reading at a glance. -->
  <section aria-labelledby="calendar-legend-list">
    <scsc-heading id="calendar-legend-list" [level]="3" [visualLevel]="5"
      >November 2026</scsc-heading
    >
    <scsc-list class="mt-2">
      @for (e of events; track e.date + e.title) {
        <li class="py-2">
          <scsc-text bold size="sm" class="block">{{ e.title }}</scsc-text>
          <scsc-text tone="muted" size="sm" tnum
            >{{ e.date }}{{ e.time ? ' \xB7 ' + e.time : '' }}</scsc-text
          >
        </li>
      }
    </scsc-list>
  </section>
</div>
`},"calendar-narrow":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscCalendar, type ScscCalendarEvent } from '@scscourt/design';

@Component({
  selector: 'app-calendar-narrow-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendar],
  template: \`
    <!-- A narrow side panel in the dark theme: view="auto" (the default) shows the agenda. -->
    <div
      data-theme="scsc-design-dark"
      class="max-w-xs rounded-box bg-base-200 p-3 text-base-content"
    >
      <scsc-calendar
        initialMonth="2026-10"
        today="2026-10-06"
        [events]="events"
        [(selected)]="day"
      />
    </div>
  \`,
})
export class CalendarNarrowDemo {
  protected readonly day = signal<string | null>('2026-10-14');
  protected readonly events: ScscCalendarEvent[] = [
    { date: '2026-10-06', title: 'Arraignment calendar', time: '8:30 AM', location: 'Dept. 42' },
    {
      date: '2026-10-14',
      title: 'Jury selection \u2014 People v. Ortiz',
      time: '9:00 AM',
      location: 'Dept. 42',
      tone: 'secondary',
    },
    {
      date: '2026-10-15',
      title: 'Jury selection (day 2)',
      time: '9:00 AM',
      location: 'Dept. 42',
      tone: 'secondary',
    },
    {
      date: '2026-10-30',
      title: 'Sentencing \u2014 People v. Nguyen',
      time: '1:30 PM',
      location: 'Dept. 42',
      tone: 'info',
    },
  ];
}
`,html:`<!-- A narrow side panel in the dark theme: view="auto" (the default) shows the agenda. -->
<div
  data-theme="scsc-design-dark"
  class="max-w-xs rounded-box bg-base-200 p-3 text-base-content"
>
  <scsc-calendar
    initialMonth="2026-10"
    today="2026-10-06"
    [events]="events"
    [(selected)]="day"
  />
</div>
`},"calendar-views":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscCalendar,
  ScscFormField,
  ScscSelect,
  type ScscCalendarEvent,
  type ScscCalendarView,
} from '@scscourt/design';

@Component({
  selector: 'app-calendar-views-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCalendar, ScscFormField, ScscSelect],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <scsc-form-field label="View" for="calendar-views-view" class="max-w-48">
        <select scsc-select id="calendar-views-view" (change)="setView($any($event.target).value)">
          @for (v of views; track v.id) {
            <option [value]="v.id" [selected]="v.id === view()">{{ v.label }}</option>
          }
        </select>
      </scsc-form-field>
      <scsc-calendar
        [view]="view()"
        initialMonth="2026-10"
        today="2026-10-06"
        [events]="events"
        [(selected)]="day"
      />
      <p class="text-sm text-base-content/70">Selected: {{ day() ?? 'none' }}</p>
    </div>
  \`,
})
export class CalendarViewsDemo {
  protected readonly views: { id: ScscCalendarView; label: string }[] = [
    { id: 'auto', label: 'Auto (by width)' },
    { id: 'month', label: 'Month' },
    { id: 'agenda', label: 'Agenda' },
  ];
  protected readonly view = signal<ScscCalendarView>('agenda');
  protected readonly day = signal<string | null>(null);
  protected setView(v: ScscCalendarView): void {
    this.view.set(v);
  }
  protected readonly events: ScscCalendarEvent[] = [
    {
      date: '2026-10-06',
      title: 'CMC \u2014 Alvarez v. Northgate',
      time: '9:00 AM',
      location: 'Dept. 10 \xB7 Downtown Superior Court',
    },
    {
      date: '2026-10-06',
      title: 'Motion to compel \u2014 Chen v. Baylands',
      time: '1:30 PM',
      location: 'Dept. 10',
      tone: 'info',
    },
    { date: '2026-10-09', title: 'Filing deadline: opposition brief', tone: 'warning' },
    {
      date: '2026-10-14',
      title: 'Trial readiness \u2014 People v. Ortiz',
      time: '8:30 AM',
      location: 'Dept. 42 \xB7 Hall of Justice',
      tone: 'secondary',
    },
    {
      date: '2026-10-21',
      title: 'Custody review \u2014 In re Marriage of Patel',
      time: '10:00 AM',
      location: 'Family Justice Center',
      tone: 'success',
    },
    { date: '2026-10-27', title: 'Court closed: staff training', tone: 'error' },
  ];
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <scsc-form-field label="View" for="calendar-views-view" class="max-w-48">
    <select scsc-select id="calendar-views-view" (change)="setView($any($event.target).value)">
      @for (v of views; track v.id) {
        <option [value]="v.id" [selected]="v.id === view()">{{ v.label }}</option>
      }
    </select>
  </scsc-form-field>
  <scsc-calendar
    [view]="view()"
    initialMonth="2026-10"
    today="2026-10-06"
    [events]="events"
    [(selected)]="day"
  />
  <p class="text-sm text-base-content/70">Selected: {{ day() ?? 'none' }}</p>
</div>
`}};var j=(t,a)=>a.title;function R(t,a){if(t&1&&(Ga(0,`scsc-text`,6),G_(1),Lf()),t&2){let e=y_().$implicit;Jb(),nD(e.time)}}function Y(t,a){if(t&1&&(Ga(0,`li`)(1,`scsc-text`,5),G_(2),Lf(),JT(3,R,2,1,`scsc-text`,6),Lf()),t&2){let e=a.$implicit;Jb(2),nD(e.title),Jb(),t_(e.time?3:-1)}}function q(t,a){if(t&1&&(Ga(0,`ul`,3),o_(1,Y,4,2,`li`,null,j),Lf()),t&2){let e=y_();Jb(),i_(e.agenda())}}function G(t,a){if(t&1&&(Ga(0,`scsc-text`,4),G_(1),Lf()),t&2){let e=y_();Jb(),$f(` `,e.selected()?`Nothing scheduled.`:`Select a day to see its events.`,` `)}}var A=class t{events=[{date:`2026-07-14`,title:`CMC — Alvarez v. Northgate`,tone:`primary`,time:`9:00 AM`},{date:`2026-07-14`,title:`Sentencing — People v. Harmon`,tone:`error`,time:`1:30 PM`},{date:`2026-07-16`,title:`Probate review — Estate of O’Donnell`,tone:`info`,time:`10:00 AM`},{date:`2026-07-21`,title:`Trial setting — Patel v. SVTA`,tone:`secondary`,time:`8:30 AM`},{date:`2026-07-28`,title:`Motion to Compel — Alvarez`,tone:`warning`,time:`1:30 PM`}];selected=q$1(null);agenda=ut(()=>this.events.filter(a=>a.date===this.selected()));static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-agenda-demo`]],decls:5,vars:3,consts:[[1,`grid`,`gap-4`,`lg:grid-cols-[1fr_18rem]`],[`initialMonth`,`2026-07`,3,`dayClick`,`events`],[3,`title`],[1,`flex`,`flex-col`,`gap-3`],[`tone`,`muted`,`size`,`sm`],[`bold`,``,1,`block`],[`tone`,`muted`,`size`,`sm`,`tnum`,``]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-calendar`,1),lc(`dayClick`,function(c){return n.selected.set(c)}),Lf(),Ga(2,`scsc-card`,2),JT(3,q,3,0,`ul`,3)(4,G,2,1,`scsc-text`,4),Lf()()),e&2&&(Jb(),Pv(`events`,n.events),Jb(),Pv(`title`,n.selected()?`Agenda for `+n.selected():`Agenda`),Jb(),t_(n.agenda().length?3:4))},dependencies:[KP,mN,NE],encapsulation:2})};var E=class t{events=[{date:`2026-07-14`,title:`Case Management Conference`,tone:`primary`},{date:`2026-07-28`,title:`Motion to Compel`,tone:`warning`},{date:`2026-07-31`,title:`Discovery cutoff`,tone:`error`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-basic-demo`]],decls:1,vars:1,consts:[[`initialMonth`,`2026-07`,1,`max-w-xl`,3,`events`]],template:function(e,n){e&1&&uc(0,`scsc-calendar`,0),e&2&&Pv(`events`,n.events)},dependencies:[KP],encapsulation:2})};var K=(t,a)=>a.tone;var Q=(t,a)=>a.date+a.title;function X(t,a){if(t&1&&(Ga(0,`li`,4),uc(1,`span`,9),G_(2),Lf()),t&2){let e=a.$implicit;Jb(),k_(e.dot),Jb(),$f(` `,e.label,` `)}}function Z(t,a){if(t&1&&(Ga(0,`li`,8)(1,`scsc-text`,10),G_(2),Lf(),Ga(3,`scsc-text`,11),G_(4),Lf()()),t&2){let e=a.$implicit;Jb(2),nD(e.title),Jb(2),rD(``,e.date,``,e.time?` · `+e.time:``)}}var P=class t{legend=[{tone:`primary`,dot:`bg-primary`,label:`Hearing`},{tone:`warning`,dot:`bg-warning`,label:`Filing deadline`},{tone:`error`,dot:`bg-error`,label:`Court closed`}];events=[{date:`2026-11-04`,title:`Opposition due — Patel v. SVT Logistics`,tone:`warning`},{date:`2026-11-09`,title:`Trial Setting Conference — 24CV013002`,tone:`primary`,time:`8:30 AM`},{date:`2026-11-11`,title:`Veterans Day`,tone:`error`},{date:`2026-11-18`,title:`Motion to Compel — 24CV012345`,tone:`primary`,time:`1:30 PM`},{date:`2026-11-26`,title:`Thanksgiving`,tone:`error`},{date:`2026-11-27`,title:`Day after Thanksgiving`,tone:`error`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-calendar-legend-demo`]],decls:12,vars:3,consts:[[1,`grid`,`max-w-4xl`,`gap-6`,`lg:grid-cols-[1fr_16rem]`],[1,`flex`,`flex-col`,`gap-3`],[`initialMonth`,`2026-11`,3,`events`],[`aria-label`,`Legend`,1,`flex`,`flex-wrap`,`gap-4`,`text-sm`],[1,`flex`,`items-center`,`gap-2`],[`aria-labelledby`,`calendar-legend-list`],[`id`,`calendar-legend-list`,3,`level`,`visualLevel`],[1,`mt-2`],[1,`py-2`],[`aria-hidden`,`true`,1,`size-2.5`,`rounded-full`],[`bold`,``,`size`,`sm`,1,`block`],[`tone`,`muted`,`size`,`sm`,`tnum`,``]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-calendar`,2),Ga(3,`ul`,3),o_(4,X,3,3,`li`,4,K),Lf()(),Ga(6,`section`,5)(7,`scsc-heading`,6),G_(8,`November 2026`),Lf(),Ga(9,`scsc-list`,7),o_(10,Z,5,3,`li`,8,Q),Lf()()()),e&2&&(Jb(2),Pv(`events`,n.events),Jb(2),i_(n.legend),Jb(3),Pv(`level`,3)(`visualLevel`,5),Jb(3),i_(n.events))},dependencies:[KP,kn,EP,NE],encapsulation:2})};var _e={slug:`calendar`,name:`Calendar`,classes:[`ScscCalendar`],category:`Court`,whenToUse:['Responsive: `view="auto"` (the default) shows an agenda, the month\'s days with events as a list, when the calendar\'s own width is below `agendaBelow` (480px); `view="month"` or `"agenda"` fixes it. The agenda shows each event\'s `time` and `location`.',"A month overview of hearings, deadlines and court closures. Each event is a coloured dot (up to four per day); details belong in an agenda panel driven by `(dayClick)`.","`initialMonth` (`YYYY-MM`) defaults to the current month; set it when a page is about a specific month (a trial calendar, a published schedule).","This is not a date input. For picking a date in a form use `scsc-date-picker`; for a year of activity use `scsc-calendar-heatmap`."],demos:[{id:`calendar-agenda`,title:`With an agenda panel`,description:`Clicking a day sets a signal; a computed filters the events for the side panel.`,component:A,source:f[`calendar-agenda`]},{id:`calendar-basic`,title:`Events only`,description:`Just the grid with a few toned events.`,component:E,source:f[`calendar-basic`]},{id:`calendar-legend`,title:`Legend and text list`,description:`Tones given a meaning (hearing, deadline, closure) in a legend, and the same events as a text list beside the grid.`,component:P,source:f[`calendar-legend`]},{id:`calendar-views`,title:`Month, agenda or auto`,description:"`view` picks the month grid, the agenda (a list of the days with events: time, title, location) or `auto`, which shows the agenda when the calendar itself is narrower than `agendaBelow` (480px).",component:M,source:f[`calendar-views`]},{id:`calendar-narrow`,title:`Narrow panel, dark theme`,description:'In a phone-width side panel the default `view="auto"` switches to the agenda by itself; the dark theme is scoped to the panel.',component:T,source:f[`calendar-narrow`]}],a11y:["The month title is an `<h2>` by default; set `headingLevel` (2–6) to fit the page outline.",'The month is a `role="grid"` named by its heading: a row of weekday column headers, then one row per week, with each day a real `<button>` in a grid cell. The grid is a single Tab stop (roving `tabindex`); the arrow keys move between days.','Every day button is named with its full date and events ("Tuesday, July 14, 2026: 2 events, …"); today is `aria-current="date"` and the `[(selected)]` day is `aria-pressed`. Still pair the grid with a text agenda for scanning.',`The month heading is a polite live region, so showing another month, with the buttons or the keys, announces it. The month buttons are labelled "Previous month" and "Next month".`,`Colour is the only difference between dots: give each tone one meaning and show a legend.`,`Days outside the current month are dimmed but still clickable; moving onto one with the keyboard shows its month.`],keyboard:[{keys:`Tab`,action:`**Previous month**, **Next month**, then one day of the grid: the day you last moved to, else the selected day, else today, else the 1st of the month. Tab again leaves the calendar.`},{keys:`Enter / Space`,action:`On **Previous month** / **Next month**: shows that month; focus stays on the button, and the grid’s Tab stop moves to that month’s selected day, today or the 1st.`},{keys:`ArrowLeft / ArrowRight`,action:`In the grid: previous / next day. Moving onto another month’s day, with this or any key below, shows that month.`},{keys:`ArrowUp / ArrowDown`,action:`Same day of the previous / next week.`},{keys:`Home / End`,action:`First (Sunday) / last (Saturday) day of the week.`},{keys:`PageUp / PageDown`,action:`Same day of the previous / next month, or that month’s last day when it is shorter (Jan 31 → Feb 28).`},{keys:`Shift + PageUp / Shift + PageDown`,action:`Same day of the previous / next year.`},{keys:`Enter / Space`,action:"On a day: selects it (`[(selected)]`) and emits `dayClick` with its ISO date."}],appMustProvide:[`A legend for the event dots (each tone has one meaning, and colour is the only difference between dots), and a text agenda when users need to scan events.`,"A `headingLevel` that fits the page outline."],related:[`hearing-card`,`date-picker`,`calendar-heatmap`,`card`]};export{_e as CALENDAR_DOCS};