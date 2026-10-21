import{Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,H as FN,Hs as y_,In as Xz,Ki as ye,L as Er,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Nn as Xa,Nr as jo,Ps as ut,Qt as SN,Ss as rD,Vr as mN,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cn as UE,cs as lc,ds as nD,et as Ha,gn as VN,gs as oM,ha as Eg,hs as oD,ht as KP,ii as qo,it as IN,ka as Ig,ks as t_,l as $ue,lr as ez,mn as Uue,ms as nu,n as $N,nn as TN,nt as IA,oi as que,pi as sn,ra as Af,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xs as q,y as At,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";import{r as Nt}from"./chunk-D2cerPAB.js";var _e=i=>[`cases`,i];var O=(i,t)=>t.id;function Ne(i,t){if(i&1&&(Ga(0,`option`,15),G_(1),Lf()),i&2){let a=t.$implicit,e=y_();Pv(`value`,a.id)(`selected`,a.id===e.department()),Jb(),rD(` Dept. `,a.id,` — `,a.judge,` `)}}function Te(i,t){if(i&1&&(Ga(0,`li`,41)(1,`scsc-hearing-card`,42)(2,`a`,43),G_(3),Lf()()()),i&2){let a=t.$implicit,e=y_(2);Jb(),Pv(`type`,a.type)(`datetime`,a.time)(`department`,a.department)(`judge`,e.judgeOf(a.department)),Jb(),Pv(`routerLink`,oM(6,_e,a.caseNumber)),Jb(),nD(a.caseNumber)}}function ke(i,t){if(i&1&&(Ga(0,`ul`,20),o_(1,Te,4,8,`li`,41,O),Lf()),i&2){let a=y_();Jb(),i_(a.agenda())}}function Me(i,t){if(i&1){let a=d_();Ga(0,`scsc-empty-state`,21)(1,`scsc-button`,44),lc(`click`,function(){Eg(a);let d=y_();return Ig(d.openSchedule())}),G_(2,` Schedule a hearing on this day `),Lf()()}}function xe(i,t){if(i&1&&(Ga(0,`option`,28),G_(1),Lf()),i&2){let a=t.$implicit;Pv(`value`,a),Jb(),nD(a)}}function De(i,t){if(i&1&&(Ga(0,`option`,28),G_(1),Lf()),i&2){let a=t.$implicit;Pv(`value`,a),Jb(),nD(a)}}function we(i,t){if(i&1&&(Ga(0,`option`,28),G_(1),Lf()),i&2){let a=t.$implicit;Pv(`value`,a.id),Jb(),rD(`Dept. `,a.id,` — `,a.judge)}}function Ee(i,t){if(i&1&&(Ga(0,`scsc-alert`,36),G_(1),Lf()),i&2){let a=y_();Jb(),oD(` Dept. `,a.value().department,` already has `,a.conflicts(),` hearings at `,a.value().time,` that day. You can still schedule, or pick another time. `)}}var ve=[{id:`3`,judge:`Hon. Samuel Whitfield`},{id:`10`,judge:`Hon. Miriam Okafor`},{id:`22`,judge:`Hon. Theresa Montoya`}];var E=[`8:30 AM`,`9:00 AM`,`10:00 AM`,`10:30 AM`,`1:30 PM`,`2:30 PM`];var A=[`Case Management Conference`,`Motion hearing`,`Order to Show Cause`,`Trial Setting Conference`,`Mandatory Settlement Conference`];var Ae=2;var Ue=[{id:`scheduling`,title:`Scheduling`,description:`Department calendar and day agenda. “Schedule hearing” opens a modal form that warns when the slot is full, then adds the hearing and moves the calendar to it.`,component:class i{fb=g(Wue).nonNullable;collapsed=q(!1);scheduleOpen=q(!1);department=q(`10`);day=q(`2026-10-13`);status=q(``);nav=[{items:[{label:`Dashboard`,icon:`layout-dashboard`,link:`dashboard`},{label:`Work queue`,icon:`inbox`,link:`queue`,badge:`37`},{label:`Cases`,icon:`folder-open`,link:`cases`},{label:`Calendar`,icon:`calendar-days`,link:`.`,exact:!0}]}];departments=ve;times=E;types=A;capacity=Ae;hearings=q([{id:1,date:`2026-10-13`,time:`9:00 AM`,type:`Motion to Compel Further Responses`,department:`10`,caseNumber:`24CV012345`},{id:2,date:`2026-10-13`,time:`9:00 AM`,type:`Demurrer`,department:`10`,caseNumber:`25CV002210`},{id:3,date:`2026-10-13`,time:`1:30 PM`,type:`Order to Show Cause re: Dismissal`,department:`10`,caseNumber:`25CV004411`},{id:4,date:`2026-10-15`,time:`10:00 AM`,type:`Case Management Conference`,department:`10`,caseNumber:`24CV015560`},{id:5,date:`2026-10-13`,time:`10:30 AM`,type:`Motion for Summary Judgment`,department:`3`,caseNumber:`23CV077120`},{id:6,date:`2026-10-20`,time:`9:00 AM`,type:`Trial Setting Conference`,department:`10`,caseNumber:`24CV019930`},{id:7,date:`2026-10-22`,time:`8:30 AM`,type:`Mandatory Settlement Conference`,department:`22`,caseNumber:`22CV061188`}]);form=this.fb.group({caseNumber:[``,[Fs.required,Fs.pattern(/^\d{2}[A-Za-z]{2}\d{6}$/)]],type:[A[0]],date:[``,Fs.required],time:[E[1]],department:[`10`],notify:[!0]});value=Ha(this.form.valueChanges,{initialValue:this.form.getRawValue()});events=ut(()=>this.hearings().filter(t=>t.department===this.department()).map(t=>({date:t.date,title:`${t.time} ${t.type}`,tone:`info`})));agenda=ut(()=>this.hearings().filter(t=>t.department===this.department()&&t.date===this.day()));dayTitle=ut(()=>{let t=this.day();if(!t)return`Pick a day`;let[a,e,d]=t.split(`-`).map(Number);return`${new Date(a,e-1,d).toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`})} \xB7 Dept. ${this.department()}`});conflicts=ut(()=>{let t=this.value();return this.hearings().filter(a=>a.department===t.department&&a.date===t.date&&a.time===t.time).length});judgeOf(t){return ve.find(a=>a.id===t)?.judge??``}show(t){return t.invalid&&(t.touched||t.dirty)}openSchedule(){this.form.reset({caseNumber:``,type:A[0],date:this.day()??``,time:E[1],department:this.department(),notify:!0}),this.scheduleOpen.set(!0)}save(){if(this.form.markAllAsTouched(),this.form.invalid)return;let t=this.form.getRawValue(),a=t.caseNumber.toUpperCase();this.hearings.update(e=>[...e,{id:e.length+1,date:t.date,time:t.time,type:t.type,department:t.department,caseNumber:a}]),this.department.set(t.department),this.day.set(t.date),this.scheduleOpen.set(!1),this.status.set(`${t.type} scheduled in ${a}${t.notify?`; notices sent to the parties`:``}.`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Af({type:i,selectors:[[`app-scheduling-template`]],decls:58,vars:18,consts:[[3,`collapsedChange`,`collapsed`],[`slot`,`masthead`,`title`,`Court Operations`,`subtitle`,`Civil Division · Downtown Superior Court`,`logoSrc`,`scsc-seal.png`],[1,`hidden`,`lg:inline-flex`,3,`click`,`icon`,`label`],[`name`,`Jordan Kim`,`email`,`jkim@scscourt.org`],[`routerLink`,`settings`],[`type`,`button`],[`slot`,`sidebar`,3,`sections`,`collapsed`],[1,`flex`,`flex-col`,`gap-6`,`scsc-pad-page`],[`title`,`Calendar`,`description`,`Civil departments at the Downtown Superior Court.`],[`slot`,`actions`,3,`click`],[`name`,`calendar-plus`,`size`,`sm`],[3,`bordered`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[1,`font-medium`],[`scsc-select`,``,`size`,`sm`,1,`w-auto`,3,`change`],[3,`value`,`selected`],[`slot`,`end`,`role`,`status`,1,`text-sm`,`text-base-content/70`],[1,`grid`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]`],[`initialMonth`,`2026-10`,3,`selectedChange`,`events`,`selected`],[3,`title`],[1,`-my-1`,`divide-y`,`divide-base-300`],[`icon`,`calendar-x`,`title`,`Nothing calendared`,`message`,`This department has no hearings on this day.`],[`title`,`Schedule a hearing`,3,`openChange`,`open`],[`novalidate`,``,1,`flex`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Case number`,`for`,`sch-case`,`hint`,`For example 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`sch-case`,`autocomplete`,`off`,`formControlName`,`caseNumber`,1,`tnum`,`uppercase`,3,`invalid`],[`label`,`Hearing type`,`for`,`sch-type`,`required`,``],[`scsc-select`,``,`id`,`sch-type`,`formControlName`,`type`],[3,`value`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Date`,`for`,`sch-date`,`required`,``,3,`error`],[`inputId`,`sch-date`,`formControlName`,`date`,3,`invalid`],[`label`,`Time`,`for`,`sch-time`,`required`,``],[`scsc-select`,``,`id`,`sch-time`,`formControlName`,`time`],[`label`,`Department`,`for`,`sch-dept`,`required`,``],[`scsc-select`,``,`id`,`sch-dept`,`formControlName`,`department`],[`status`,`warning`,`title`,`This slot is full`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`notify`],[`slot`,`footer`,1,`flex`,`gap-2`],[`variant`,`ghost`,3,`click`],[3,`click`],[1,`py-3.5`],[`flush`,``,3,`type`,`datetime`,`department`,`judge`],[1,`text-sm`,`font-medium`,`tnum`,`text-primary`,`hover:underline`,3,`routerLink`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`]],template:function(a,e){a&1&&(Ga(0,`scsc-app-shell`,0),sD(`collapsedChange`,function(l){return Y_(e.collapsed,l)||(e.collapsed=l),l}),Ga(1,`scsc-masthead`,1)(2,`scsc-icon-button`,2),lc(`click`,function(){return e.collapsed.set(!e.collapsed())}),Lf(),Ga(3,`scsc-user-menu`,3)(4,`li`)(5,`a`,4),G_(6,`Settings`),Lf()(),Ga(7,`li`)(8,`button`,5),G_(9,`Sign out`),Lf()()()(),uc(10,`scsc-sidebar-nav`,6),Ga(11,`div`,7)(12,`scsc-page-header`,8)(13,`scsc-button`,9),lc(`click`,function(){return e.openSchedule()}),uc(14,`scsc-icon`,10),G_(15,` Schedule hearing `),Lf()(),Ga(16,`scsc-toolbar`,11)(17,`label`,12)(18,`span`,13),G_(19,`Department`),Lf(),Ga(20,`select`,14),lc(`change`,function(l){return e.department.set(l.target.value)}),o_(21,Ne,2,4,`option`,15,O),Lf()(),Ga(23,`p`,16),G_(24),Lf()(),Ga(25,`div`,17)(26,`scsc-calendar`,18),sD(`selectedChange`,function(l){return Y_(e.day,l)||(e.day=l),l}),Lf(),Ga(27,`scsc-card`,19),JT(28,ke,3,0,`ul`,20)(29,Me,3,0,`scsc-empty-state`,21),Lf()()()(),Ga(30,`scsc-modal`,22),sD(`openChange`,function(l){return Y_(e.scheduleOpen,l)||(e.scheduleOpen=l),l}),Ga(31,`form`,23),lc(`ngSubmit`,function(){return e.save()}),Ga(32,`scsc-form-field`,24)(33,`input`,25),HS(),Lf()(),Ga(34,`scsc-form-field`,26)(35,`select`,27),HS(),o_(36,xe,2,2,`option`,28,r_),Lf()(),Ga(38,`div`,29)(39,`scsc-form-field`,30)(40,`scsc-date-picker`,31),HS(),Lf()(),Ga(41,`scsc-form-field`,32)(42,`select`,33),HS(),o_(43,De,2,2,`option`,28,r_),Lf()()(),Ga(45,`scsc-form-field`,34)(46,`select`,35),HS(),o_(47,we,2,3,`option`,28,O),Lf()(),JT(49,Ee,2,3,`scsc-alert`,36),Ga(50,`label`,12)(51,`input`,37),HS(),Lf(),G_(52,` Email the hearing notice to every party with an email on file `),Lf()(),Ga(53,`div`,38)(54,`scsc-button`,39),lc(`click`,function(){return e.scheduleOpen.set(!1)}),G_(55,`Cancel`),Lf(),Ga(56,`scsc-button`,40),lc(`click`,function(){return e.save()}),G_(57,`Schedule hearing`),Lf()()()),a&2&&(iD(`collapsed`,e.collapsed),Jb(2),Pv(`icon`,e.collapsed()?`panel-left-open`:`panel-left-close`)(`label`,e.collapsed()?`Expand sidebar`:`Collapse sidebar`),Jb(8),Pv(`sections`,e.nav)(`collapsed`,e.collapsed()),Jb(6),Pv(`bordered`,!0),Jb(5),i_(e.departments),Jb(3),nD(e.status()),Jb(2),Pv(`events`,e.events()),iD(`selected`,e.day),Jb(),Pv(`title`,e.dayTitle()),Jb(),t_(e.agenda().length?28:29),Jb(2),iD(`open`,e.scheduleOpen),Jb(),Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.show(e.form.controls.caseNumber)?`Enter a case number like 24CV012345.`:``),Jb(),Pv(`invalid`,e.show(e.form.controls.caseNumber)),zS(),Jb(2),zS(),Jb(),i_(e.types),Jb(3),Pv(`error`,e.show(e.form.controls.date)?`Choose a date.`:``),Jb(),Pv(`invalid`,e.show(e.form.controls.date)),zS(),Jb(2),zS(),Jb(),i_(e.times),Jb(3),zS(),Jb(),i_(e.departments),Jb(2),t_(e.conflicts()>=e.capacity?49:-1),Jb(2),zS())},dependencies:[Kue,Bue,$ue,Uue,IA,ez,tN,Hue,que,Vz,Xz,nu,za,SN,sn,KP,mN,jo,Nt,Xa,Vn,Er,ye,UE,qo,FN,At,TN,On,$N,IN,VN],encapsulation:2})},source:{scheduling:{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { type AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScscAlert,
  ScscAppShell,
  ScscButton,
  ScscCalendar,
  type ScscCalendarEvent,
  ScscCard,
  ScscCheckbox,
  ScscEmptyState,
  ScscFormField,
  ScscHearingCard,
  ScscIcon,
  ScscIconButton,
  ScscInput,
  ScscMasthead,
  ScscModal,
  type ScscNavSection,
  ScscPageHeader,
  ScscSelect,
  ScscSidebarNav,
  ScscToolbar,
  ScscUserMenu,
} from '@scscourt/design';
import { ScscDatePicker } from '@scscourt/design/pickers';

interface Hearing {
  id: number;
  date: string;
  time: string;
  type: string;
  department: string;
  caseNumber: string;
}

const DEPARTMENTS = [
  { id: '3', judge: 'Hon. Samuel Whitfield' },
  { id: '10', judge: 'Hon. Miriam Okafor' },
  { id: '22', judge: 'Hon. Theresa Montoya' },
];
const TIMES = ['8:30 AM', '9:00 AM', '10:00 AM', '10:30 AM', '1:30 PM', '2:30 PM'];
const TYPES = [
  'Case Management Conference',
  'Motion hearing',
  'Order to Show Cause',
  'Trial Setting Conference',
  'Mandatory Settlement Conference',
];

/** Up to this many hearings per department and time slot before a warning. */
const SLOT_CAPACITY = 2;

@Component({
  selector: 'app-scheduling-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ScscAlert,
    ScscAppShell,
    ScscButton,
    ScscCalendar,
    ScscCard,
    ScscCheckbox,
    ScscDatePicker,
    ScscEmptyState,
    ScscFormField,
    ScscHearingCard,
    ScscIcon,
    ScscIconButton,
    ScscInput,
    ScscMasthead,
    ScscModal,
    ScscPageHeader,
    ScscSelect,
    ScscSidebarNav,
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
        <scsc-page-header
          title="Calendar"
          description="Civil departments at the Downtown Superior Court."
        >
          <scsc-button slot="actions" (click)="openSchedule()">
            <scsc-icon name="calendar-plus" size="sm" />
            Schedule hearing
          </scsc-button>
        </scsc-page-header>

        <scsc-toolbar [bordered]="true">
          <label class="flex items-center gap-2 text-sm">
            <span class="font-medium">Department</span>
            <select
              scsc-select
              size="sm"
              class="w-auto"
              (change)="department.set($any($event.target).value)"
            >
              @for (d of departments; track d.id) {
                <option [value]="d.id" [selected]="d.id === department()">
                  Dept. {{ d.id }} \u2014 {{ d.judge }}
                </option>
              }
            </select>
          </label>
          <p slot="end" class="text-sm text-base-content/70" role="status">{{ status() }}</p>
        </scsc-toolbar>

        <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <scsc-calendar [events]="events()" initialMonth="2026-10" [(selected)]="day" />

          <scsc-card [title]="dayTitle()">
            @if (agenda().length) {
              <ul class="-my-1 divide-y divide-base-300">
                @for (h of agenda(); track h.id) {
                  <li class="py-3.5">
                    <scsc-hearing-card
                      flush
                      [type]="h.type"
                      [datetime]="h.time"
                      [department]="h.department"
                      [judge]="judgeOf(h.department)"
                    >
                      <a
                        [routerLink]="['cases', h.caseNumber]"
                        class="text-sm font-medium tnum text-primary hover:underline"
                        >{{ h.caseNumber }}</a
                      >
                    </scsc-hearing-card>
                  </li>
                }
              </ul>
            } @else {
              <scsc-empty-state
                icon="calendar-x"
                title="Nothing calendared"
                message="This department has no hearings on this day."
              >
                <scsc-button variant="neutral" outline size="sm" (click)="openSchedule()">
                  Schedule a hearing on this day
                </scsc-button>
              </scsc-empty-state>
            }
          </scsc-card>
        </div>
      </div>
    </scsc-app-shell>

    <scsc-modal [(open)]="scheduleOpen" title="Schedule a hearing">
      <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
        <scsc-form-field
          label="Case number"
          for="sch-case"
          hint="For example 24CV012345"
          required
          [error]="show(form.controls.caseNumber) ? 'Enter a case number like 24CV012345.' : ''"
        >
          <input
            scsc-input
            id="sch-case"
            class="tnum uppercase"
            autocomplete="off"
            formControlName="caseNumber"
            [invalid]="show(form.controls.caseNumber)"
          />
        </scsc-form-field>
        <scsc-form-field label="Hearing type" for="sch-type" required>
          <select scsc-select id="sch-type" formControlName="type">
            @for (t of types; track t) {
              <option [value]="t">{{ t }}</option>
            }
          </select>
        </scsc-form-field>
        <div class="grid gap-4 sm:grid-cols-2">
          <scsc-form-field
            label="Date"
            for="sch-date"
            required
            [error]="show(form.controls.date) ? 'Choose a date.' : ''"
          >
            <scsc-date-picker
              inputId="sch-date"
              formControlName="date"
              [invalid]="show(form.controls.date)"
            />
          </scsc-form-field>
          <scsc-form-field label="Time" for="sch-time" required>
            <select scsc-select id="sch-time" formControlName="time">
              @for (t of times; track t) {
                <option [value]="t">{{ t }}</option>
              }
            </select>
          </scsc-form-field>
        </div>
        <scsc-form-field label="Department" for="sch-dept" required>
          <select scsc-select id="sch-dept" formControlName="department">
            @for (d of departments; track d.id) {
              <option [value]="d.id">Dept. {{ d.id }} \u2014 {{ d.judge }}</option>
            }
          </select>
        </scsc-form-field>
        @if (conflicts() >= capacity) {
          <scsc-alert status="warning" title="This slot is full">
            Dept. {{ value().department }} already has {{ conflicts() }} hearings at
            {{ value().time }} that day. You can still schedule, or pick another time.
          </scsc-alert>
        }
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" scsc-checkbox formControlName="notify" />
          Email the hearing notice to every party with an email on file
        </label>
      </form>
      <div slot="footer" class="flex gap-2">
        <scsc-button variant="ghost" (click)="scheduleOpen.set(false)">Cancel</scsc-button>
        <scsc-button (click)="save()">Schedule hearing</scsc-button>
      </div>
    </scsc-modal>
  \`,
})
export class SchedulingTemplate {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly collapsed = signal(false);
  protected readonly scheduleOpen = signal(false);
  protected readonly department = signal('10');
  protected readonly day = signal<string | null>('2026-10-13');
  protected readonly status = signal('');

  protected readonly nav: ScscNavSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'layout-dashboard', link: 'dashboard' },
        { label: 'Work queue', icon: 'inbox', link: 'queue', badge: '37' },
        { label: 'Cases', icon: 'folder-open', link: 'cases' },
        { label: 'Calendar', icon: 'calendar-days', link: '.', exact: true },
      ],
    },
  ];
  protected readonly departments = DEPARTMENTS;
  protected readonly times = TIMES;
  protected readonly types = TYPES;
  protected readonly capacity = SLOT_CAPACITY;

  private readonly hearings = signal<Hearing[]>([
    {
      id: 1,
      date: '2026-10-13',
      time: '9:00 AM',
      type: 'Motion to Compel Further Responses',
      department: '10',
      caseNumber: '24CV012345',
    },
    {
      id: 2,
      date: '2026-10-13',
      time: '9:00 AM',
      type: 'Demurrer',
      department: '10',
      caseNumber: '25CV002210',
    },
    {
      id: 3,
      date: '2026-10-13',
      time: '1:30 PM',
      type: 'Order to Show Cause re: Dismissal',
      department: '10',
      caseNumber: '25CV004411',
    },
    {
      id: 4,
      date: '2026-10-15',
      time: '10:00 AM',
      type: 'Case Management Conference',
      department: '10',
      caseNumber: '24CV015560',
    },
    {
      id: 5,
      date: '2026-10-13',
      time: '10:30 AM',
      type: 'Motion for Summary Judgment',
      department: '3',
      caseNumber: '23CV077120',
    },
    {
      id: 6,
      date: '2026-10-20',
      time: '9:00 AM',
      type: 'Trial Setting Conference',
      department: '10',
      caseNumber: '24CV019930',
    },
    {
      id: 7,
      date: '2026-10-22',
      time: '8:30 AM',
      type: 'Mandatory Settlement Conference',
      department: '22',
      caseNumber: '22CV061188',
    },
  ]);

  protected readonly form = this.fb.group({
    caseNumber: ['', [Validators.required, Validators.pattern(/^\\d{2}[A-Za-z]{2}\\d{6}$/)]],
    type: [TYPES[0]],
    date: ['', Validators.required],
    time: [TIMES[1]],
    department: ['10'],
    notify: [true],
  });
  protected readonly value = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue(),
  });

  protected readonly events = computed<ScscCalendarEvent[]>(() =>
    this.hearings()
      .filter((h) => h.department === this.department())
      .map((h) => ({ date: h.date, title: \`\${h.time} \${h.type}\`, tone: 'info' })),
  );

  protected readonly agenda = computed(() =>
    this.hearings().filter((h) => h.department === this.department() && h.date === this.day()),
  );

  protected readonly dayTitle = computed(() => {
    const d = this.day();
    if (!d) return 'Pick a day';
    const [y, m, dd] = d.split('-').map(Number);
    const label = new Date(y, m - 1, dd).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    return \`\${label} \xB7 Dept. \${this.department()}\`;
  });

  /** Hearings already in the chosen department, date and time. */
  protected readonly conflicts = computed(() => {
    const v = this.value();
    return this.hearings().filter(
      (h) => h.department === v.department && h.date === v.date && h.time === v.time,
    ).length;
  });

  protected judgeOf(id: string): string {
    return DEPARTMENTS.find((d) => d.id === id)?.judge ?? '';
  }

  protected show(c: AbstractControl): boolean {
    return c.invalid && (c.touched || c.dirty);
  }

  protected openSchedule(): void {
    this.form.reset({
      caseNumber: '',
      type: TYPES[0],
      date: this.day() ?? '',
      time: TIMES[1],
      department: this.department(),
      notify: true,
    });
    this.scheduleOpen.set(true);
  }

  protected save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    const caseNumber = v.caseNumber.toUpperCase();
    this.hearings.update((all) => [
      ...all,
      {
        id: all.length + 1,
        date: v.date,
        time: v.time,
        type: v.type,
        department: v.department,
        caseNumber,
      },
    ]);
    this.department.set(v.department);
    this.day.set(v.date);
    this.scheduleOpen.set(false);
    this.status.set(
      \`\${v.type} scheduled in \${caseNumber}\${v.notify ? '; notices sent to the parties' : ''}.\`,
    );
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
    <scsc-page-header
      title="Calendar"
      description="Civil departments at the Downtown Superior Court."
    >
      <scsc-button slot="actions" (click)="openSchedule()">
        <scsc-icon name="calendar-plus" size="sm" />
        Schedule hearing
      </scsc-button>
    </scsc-page-header>

    <scsc-toolbar [bordered]="true">
      <label class="flex items-center gap-2 text-sm">
        <span class="font-medium">Department</span>
        <select
          scsc-select
          size="sm"
          class="w-auto"
          (change)="department.set($any($event.target).value)"
        >
          @for (d of departments; track d.id) {
            <option [value]="d.id" [selected]="d.id === department()">
              Dept. {{ d.id }} \u2014 {{ d.judge }}
            </option>
          }
        </select>
      </label>
      <p slot="end" class="text-sm text-base-content/70" role="status">{{ status() }}</p>
    </scsc-toolbar>

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <scsc-calendar [events]="events()" initialMonth="2026-10" [(selected)]="day" />

      <scsc-card [title]="dayTitle()">
        @if (agenda().length) {
          <ul class="-my-1 divide-y divide-base-300">
            @for (h of agenda(); track h.id) {
              <li class="py-3.5">
                <scsc-hearing-card
                  flush
                  [type]="h.type"
                  [datetime]="h.time"
                  [department]="h.department"
                  [judge]="judgeOf(h.department)"
                >
                  <a
                    [routerLink]="['cases', h.caseNumber]"
                    class="text-sm font-medium tnum text-primary hover:underline"
                    >{{ h.caseNumber }}</a
                  >
                </scsc-hearing-card>
              </li>
            }
          </ul>
        } @else {
          <scsc-empty-state
            icon="calendar-x"
            title="Nothing calendared"
            message="This department has no hearings on this day."
          >
            <scsc-button variant="neutral" outline size="sm" (click)="openSchedule()">
              Schedule a hearing on this day
            </scsc-button>
          </scsc-empty-state>
        }
      </scsc-card>
    </div>
  </div>
</scsc-app-shell>

<scsc-modal [(open)]="scheduleOpen" title="Schedule a hearing">
  <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4" novalidate>
    <scsc-form-field
      label="Case number"
      for="sch-case"
      hint="For example 24CV012345"
      required
      [error]="show(form.controls.caseNumber) ? 'Enter a case number like 24CV012345.' : ''"
    >
      <input
        scsc-input
        id="sch-case"
        class="tnum uppercase"
        autocomplete="off"
        formControlName="caseNumber"
        [invalid]="show(form.controls.caseNumber)"
      />
    </scsc-form-field>
    <scsc-form-field label="Hearing type" for="sch-type" required>
      <select scsc-select id="sch-type" formControlName="type">
        @for (t of types; track t) {
          <option [value]="t">{{ t }}</option>
        }
      </select>
    </scsc-form-field>
    <div class="grid gap-4 sm:grid-cols-2">
      <scsc-form-field
        label="Date"
        for="sch-date"
        required
        [error]="show(form.controls.date) ? 'Choose a date.' : ''"
      >
        <scsc-date-picker
          inputId="sch-date"
          formControlName="date"
          [invalid]="show(form.controls.date)"
        />
      </scsc-form-field>
      <scsc-form-field label="Time" for="sch-time" required>
        <select scsc-select id="sch-time" formControlName="time">
          @for (t of times; track t) {
            <option [value]="t">{{ t }}</option>
          }
        </select>
      </scsc-form-field>
    </div>
    <scsc-form-field label="Department" for="sch-dept" required>
      <select scsc-select id="sch-dept" formControlName="department">
        @for (d of departments; track d.id) {
          <option [value]="d.id">Dept. {{ d.id }} \u2014 {{ d.judge }}</option>
        }
      </select>
    </scsc-form-field>
    @if (conflicts() >= capacity) {
      <scsc-alert status="warning" title="This slot is full">
        Dept. {{ value().department }} already has {{ conflicts() }} hearings at
        {{ value().time }} that day. You can still schedule, or pick another time.
      </scsc-alert>
    }
    <label class="flex items-center gap-2 text-sm">
      <input type="checkbox" scsc-checkbox formControlName="notify" />
      Email the hearing notice to every party with an email on file
    </label>
  </form>
  <div slot="footer" class="flex gap-2">
    <scsc-button variant="ghost" (click)="scheduleOpen.set(false)">Cancel</scsc-button>
    <scsc-button (click)="save()">Schedule hearing</scsc-button>
  </div>
</scsc-modal>
`}}.scheduling,layout:`page`,height:`48rem`}];export{Ue as DEMOS};