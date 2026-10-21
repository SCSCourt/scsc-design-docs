import{Hs as y_,L as Er,Lo as d_,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,Zo as i_,_s as o_,cn as UE,cs as lc,ha as Eg,ka as Ig,kt as NE,mi as sr,ms as nu,pi as sn,ra as Af,t as $E,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var f=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-hearing-card-basic-demo`]],decls:2,vars:0,consts:[[1,`max-w-md`],[`type`,`Case Management Conference`,`datetime`,`Jul 14, 2026 · 9:00 AM`,`department`,`21`,`judge`,`Hon. R. Whitfield`,`location`,`Downtown Superior Court, 191 N. First St.`]],template:function(e,a){e&1&&(Ga(0,`div`,0),uc(1,`scsc-hearing-card`,1),Lf())},dependencies:[Er],encapsulation:2})};var P=(t,n)=>n.id;function J(t,n){if(t&1){let e=d_();Ga(0,`scsc-hearing-card`,1)(1,`scsc-icon-button`,3),lc(`click`,function(){let H=Eg(e).$implicit,N=y_();return Ig(N.toggle(H.id))}),Lf()()}if(t&2){let e=n.$implicit,a=y_();Pv(`type`,e.type)(`datetime`,e.datetime)(`department`,e.department)(`judge`,e.judge),Jb(),Pv(`icon`,a.added().has(e.id)?`calendar-check`:`calendar-plus`)(`label`,(a.added().has(e.id)?`Remove from my calendar: `:`Add to my calendar: `)+e.type)}}var x=class t{hearings=[{id:`h1`,type:`Case Management Conference`,datetime:`Jul 14, 2026 · 9:00 AM`,department:`21`,judge:`Hon. R. Whitfield`},{id:`h2`,type:`Motion to Compel`,datetime:`Jul 28, 2026 · 1:30 PM`,department:`7`,judge:`Hon. L. Okafor`},{id:`h3`,type:`Trial Setting Conference`,datetime:`Sep 9, 2026 · 10:00 AM`,department:`21`,judge:`Hon. R. Whitfield`}];added=q(new Set);toggle(n){this.added.update(e=>{let a=new Set(e);return a.has(n)?a.delete(n):a.add(n),a})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-hearing-card-list-demo`]],decls:5,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[3,`type`,`datetime`,`department`,`judge`],[`tone`,`muted`,`size`,`sm`],[3,`click`,`icon`,`label`]],template:function(e,a){e&1&&(Ga(0,`div`,0),o_(1,J,2,6,`scsc-hearing-card`,1,P),Ga(3,`scsc-text`,2),G_(4),Lf()()),e&2&&(Jb(),i_(a.hearings),Jb(3),$f(``,a.added().size,` hearing(s) on your calendar.`))},dependencies:[Er,UE,NE],encapsulation:2})};var S=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-hearing-card-remote-demo`]],decls:8,vars:0,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-2`],[`type`,`Motion to Compel`,`datetime`,`Oct 14, 2026 · 1:30 PM`,`department`,`7`,`judge`,`Hon. L. Okafor`,`location`,`Remote · Microsoft Teams`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`.`],[1,`sr-only`],[`tone`,`muted`,`size`,`sm`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-hearing-card`,1)(2,`a`,2),G_(3,`Join`),Ga(4,`span`,3),G_(5,` Motion to Compel`),Lf()()(),Ga(6,`scsc-text`,4),G_(7,` The meeting opens 15 minutes before the start time. Have your case number, 24CV013002, ready. `),Lf()())},dependencies:[nu,$E,Er,NE],encapsulation:2})};var v=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-hearing-card-states-demo`]],decls:14,vars:0,consts:[[`title`,`Hearings · 24CV012345`,`flush`,``,1,`max-w-2xl`],[1,`divide-y`,`divide-base-300`],[1,`px-5`,`py-4`],[`flush`,``,`type`,`Case Management Conference`,`datetime`,`Oct 6, 2026 · 9:00 AM`,`department`,`10`,`judge`,`Hon. L. Moreno`,`location`,`Downtown Superior Court`],[`tone`,`success`,`icon`,`status.scheduled`],[`flush`,``,`type`,`Motion to Compel`,`datetime`,`Sep 15, 2026 · 1:30 PM`,`department`,`10`,`judge`,`Hon. L. Moreno`],[`tone`,`warning`,`icon`,`status.pending`],[`flush`,``,`type`,`Order to Show Cause`,`datetime`,`Aug 28, 2026 · 10:30 AM`,`department`,`10`],[`tone`,`error`,`icon`,`status.cancelled`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0)(1,`ul`,1)(2,`li`,2)(3,`scsc-hearing-card`,3)(4,`scsc-tag`,4),G_(5,`Scheduled`),Lf()()(),Ga(6,`li`,2)(7,`scsc-hearing-card`,5)(8,`scsc-tag`,6),G_(9,`Continued to Nov 3`),Lf()()(),Ga(10,`li`,2)(11,`scsc-hearing-card`,7)(12,`scsc-tag`,8),G_(13,`Vacated`),Lf()()()()())},dependencies:[mN,Er,sr],encapsulation:2})};var D=class t{adding=q(!1);added=q(!1);add(){this.adding.set(!0),setTimeout(()=>{this.adding.set(!1),this.added.set(!0)},600)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-hearing-card-dark-demo`]],decls:4,vars:2,consts:[[`data-theme`,`scsc-design-dark`,1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`],[`type`,`Custody Review`,`datetime`,`Oct 21, 2026 · 10:00 AM`,`department`,`F3`,`judge`,`Hon. A. Brooks`,`location`,`Family Justice Center, Room 204`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`,`loading`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-hearing-card`,1)(2,`scsc-button`,2),lc(`click`,function(){return a.add()}),G_(3),Lf()()()),e&2&&(Jb(2),Pv(`loading`,a.adding()),Jb(),$f(` `,a.added()?`Added to calendar`:`Add to calendar`,` `))},dependencies:[sn,Er],encapsulation:2})};var m={"hearing-card-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscHearingCard } from '@scscourt/design';

@Component({
  selector: 'app-hearing-card-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHearingCard],
  template: \`
    <div class="max-w-md">
      <scsc-hearing-card
        type="Case Management Conference"
        datetime="Jul 14, 2026 \xB7 9:00 AM"
        department="21"
        judge="Hon. R. Whitfield"
        location="Downtown Superior Court, 191 N. First St."
      />
    </div>
  \`,
})
export class HearingCardBasicDemo {}
`,html:`<div class="max-w-md">
  <scsc-hearing-card
    type="Case Management Conference"
    datetime="Jul 14, 2026 \xB7 9:00 AM"
    department="21"
    judge="Hon. R. Whitfield"
    location="Downtown Superior Court, 191 N. First St."
  />
</div>
`},"hearing-card-dark":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscHearingCard } from '@scscourt/design';

@Component({
  selector: 'app-hearing-card-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHearingCard],
  template: \`
    <div
      data-theme="scsc-design-dark"
      class="flex max-w-2xl flex-col gap-3 rounded-box bg-base-200 p-4 text-base-content"
    >
      <scsc-hearing-card
        type="Custody Review"
        datetime="Oct 21, 2026 \xB7 10:00 AM"
        department="F3"
        judge="Hon. A. Brooks"
        location="Family Justice Center, Room 204"
      >
        <scsc-button size="sm" variant="neutral" outline [loading]="adding()" (click)="add()">
          {{ added() ? 'Added to calendar' : 'Add to calendar' }}
        </scsc-button>
      </scsc-hearing-card>
    </div>
  \`,
})
export class HearingCardDarkDemo {
  protected readonly adding = signal(false);
  protected readonly added = signal(false);

  protected add(): void {
    this.adding.set(true);
    setTimeout(() => {
      this.adding.set(false);
      this.added.set(true);
    }, 600);
  }
}
`,html:`<div
  data-theme="scsc-design-dark"
  class="flex max-w-2xl flex-col gap-3 rounded-box bg-base-200 p-4 text-base-content"
>
  <scsc-hearing-card
    type="Custody Review"
    datetime="Oct 21, 2026 \xB7 10:00 AM"
    department="F3"
    judge="Hon. A. Brooks"
    location="Family Justice Center, Room 204"
  >
    <scsc-button size="sm" variant="neutral" outline [loading]="adding()" (click)="add()">
      {{ added() ? 'Added to calendar' : 'Add to calendar' }}
    </scsc-button>
  </scsc-hearing-card>
</div>
`},"hearing-card-list":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscHearingCard, ScscIconButton, ScscText } from '@scscourt/design';

interface Hearing {
  id: string;
  type: string;
  datetime: string;
  department: string;
  judge: string;
}

@Component({
  selector: 'app-hearing-card-list-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHearingCard, ScscIconButton, ScscText],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      @for (h of hearings; track h.id) {
        <scsc-hearing-card
          [type]="h.type"
          [datetime]="h.datetime"
          [department]="h.department"
          [judge]="h.judge"
        >
          <scsc-icon-button
            [icon]="added().has(h.id) ? 'calendar-check' : 'calendar-plus'"
            [label]="
              (added().has(h.id) ? 'Remove from my calendar: ' : 'Add to my calendar: ') + h.type
            "
            (click)="toggle(h.id)"
          />
        </scsc-hearing-card>
      }
      <scsc-text tone="muted" size="sm">{{ added().size }} hearing(s) on your calendar.</scsc-text>
    </div>
  \`,
})
export class HearingCardListDemo {
  protected readonly hearings: Hearing[] = [
    {
      id: 'h1',
      type: 'Case Management Conference',
      datetime: 'Jul 14, 2026 \xB7 9:00 AM',
      department: '21',
      judge: 'Hon. R. Whitfield',
    },
    {
      id: 'h2',
      type: 'Motion to Compel',
      datetime: 'Jul 28, 2026 \xB7 1:30 PM',
      department: '7',
      judge: 'Hon. L. Okafor',
    },
    {
      id: 'h3',
      type: 'Trial Setting Conference',
      datetime: 'Sep 9, 2026 \xB7 10:00 AM',
      department: '21',
      judge: 'Hon. R. Whitfield',
    },
  ];

  protected readonly added = signal(new Set<string>());

  protected toggle(id: string): void {
    this.added.update((set) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  @for (h of hearings; track h.id) {
    <scsc-hearing-card
      [type]="h.type"
      [datetime]="h.datetime"
      [department]="h.department"
      [judge]="h.judge"
    >
      <scsc-icon-button
        [icon]="added().has(h.id) ? 'calendar-check' : 'calendar-plus'"
        [label]="
          (added().has(h.id) ? 'Remove from my calendar: ' : 'Add to my calendar: ') + h.type
        "
        (click)="toggle(h.id)"
      />
    </scsc-hearing-card>
  }
  <scsc-text tone="muted" size="sm">{{ added().size }} hearing(s) on your calendar.</scsc-text>
</div>
`},"hearing-card-remote":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScscButtonLink, ScscHearingCard, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-hearing-card-remote-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscButtonLink, ScscHearingCard, ScscText],
  template: \`
    <div class="flex max-w-md flex-col gap-2">
      <scsc-hearing-card
        type="Motion to Compel"
        datetime="Oct 14, 2026 \xB7 1:30 PM"
        department="7"
        judge="Hon. L. Okafor"
        location="Remote \xB7 Microsoft Teams"
      >
        <!-- Joining navigates away, so the action is a link styled as a button. -->
        <a scsc-button size="sm" routerLink="."
          >Join<span class="sr-only"> Motion to Compel</span></a
        >
      </scsc-hearing-card>
      <scsc-text tone="muted" size="sm">
        The meeting opens 15 minutes before the start time. Have your case number, 24CV013002,
        ready.
      </scsc-text>
    </div>
  \`,
})
export class HearingCardRemoteDemo {}
`,html:`<div class="flex max-w-md flex-col gap-2">
  <scsc-hearing-card
    type="Motion to Compel"
    datetime="Oct 14, 2026 \xB7 1:30 PM"
    department="7"
    judge="Hon. L. Okafor"
    location="Remote \xB7 Microsoft Teams"
  >
    <!-- Joining navigates away, so the action is a link styled as a button. -->
    <a scsc-button size="sm" routerLink="."
      >Join<span class="sr-only"> Motion to Compel</span></a
    >
  </scsc-hearing-card>
  <scsc-text tone="muted" size="sm">
    The meeting opens 15 minutes before the start time. Have your case number, 24CV013002,
    ready.
  </scsc-text>
</div>
`},"hearing-card-states":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscHearingCard, ScscTag } from '@scscourt/design';

@Component({
  selector: 'app-hearing-card-states-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscHearingCard, ScscTag],
  template: \`
    <!-- Flush cards in one card: the list draws the dividers; a tag states each hearing's status. -->
    <scsc-card title="Hearings \xB7 24CV012345" flush class="max-w-2xl">
      <ul class="divide-y divide-base-300">
        <li class="px-5 py-4">
          <scsc-hearing-card
            flush
            type="Case Management Conference"
            datetime="Oct 6, 2026 \xB7 9:00 AM"
            department="10"
            judge="Hon. L. Moreno"
            location="Downtown Superior Court"
          >
            <scsc-tag tone="success" icon="status.scheduled">Scheduled</scsc-tag>
          </scsc-hearing-card>
        </li>
        <li class="px-5 py-4">
          <scsc-hearing-card
            flush
            type="Motion to Compel"
            datetime="Sep 15, 2026 \xB7 1:30 PM"
            department="10"
            judge="Hon. L. Moreno"
          >
            <scsc-tag tone="warning" icon="status.pending">Continued to Nov 3</scsc-tag>
          </scsc-hearing-card>
        </li>
        <li class="px-5 py-4">
          <scsc-hearing-card
            flush
            type="Order to Show Cause"
            datetime="Aug 28, 2026 \xB7 10:30 AM"
            department="10"
          >
            <scsc-tag tone="error" icon="status.cancelled">Vacated</scsc-tag>
          </scsc-hearing-card>
        </li>
      </ul>
    </scsc-card>
  \`,
})
export class HearingCardStatesDemo {}
`,html:`<!-- Flush cards in one card: the list draws the dividers; a tag states each hearing's status. -->
<scsc-card title="Hearings \xB7 24CV012345" flush class="max-w-2xl">
  <ul class="divide-y divide-base-300">
    <li class="px-5 py-4">
      <scsc-hearing-card
        flush
        type="Case Management Conference"
        datetime="Oct 6, 2026 \xB7 9:00 AM"
        department="10"
        judge="Hon. L. Moreno"
        location="Downtown Superior Court"
      >
        <scsc-tag tone="success" icon="status.scheduled">Scheduled</scsc-tag>
      </scsc-hearing-card>
    </li>
    <li class="px-5 py-4">
      <scsc-hearing-card
        flush
        type="Motion to Compel"
        datetime="Sep 15, 2026 \xB7 1:30 PM"
        department="10"
        judge="Hon. L. Moreno"
      >
        <scsc-tag tone="warning" icon="status.pending">Continued to Nov 3</scsc-tag>
      </scsc-hearing-card>
    </li>
    <li class="px-5 py-4">
      <scsc-hearing-card
        flush
        type="Order to Show Cause"
        datetime="Aug 28, 2026 \xB7 10:30 AM"
        department="10"
      >
        <scsc-tag tone="error" icon="status.cancelled">Vacated</scsc-tag>
      </scsc-hearing-card>
    </li>
  </ul>
</scsc-card>
`}};var me={slug:`hearing-card`,name:`Hearing Card`,classes:[`ScscHearingCard`],category:`Court`,whenToUse:[`A single calendared event on a case page, a "next hearing" dashboard tile, or a list of upcoming hearings.`,'`datetime` is display text: format it once in your app ("Jul 14, 2026 · 9:00 AM") so every card reads the same.',"For a month view of many hearings use `scsc-calendar`; for the chronological record of filings use `scsc-docket-table`."],demos:[{id:`hearing-card-basic`,title:`Single hearing`,description:`All fields, including the optional location.`,component:f,source:m[`hearing-card-basic`]},{id:`hearing-card-list`,title:`Upcoming hearings with an action`,description:`A list from a fixture; an icon button projected into each card toggles "add to calendar".`,component:x,source:m[`hearing-card-list`]},{id:`hearing-card-remote`,title:`Remote appearance`,description:"`location` names the video platform and an `a[scsc-button]` link to join sits in the trailing slot.",component:S,source:m[`hearing-card-remote`]},{id:`hearing-card-states`,title:`Scheduled, continued and vacated`,description:"Flush cards in one card list; an `scsc-tag` with an icon states each hearing's status in words.",component:v,source:m[`hearing-card-states`]},{id:`hearing-card-dark`,title:`Dark theme with an action`,description:`A family hearing with an "Add to calendar" action that shows its loading state.`,component:D,source:m[`hearing-card-dark`]}],a11y:["The calendar icon is decorative (`aria-hidden`); the hearing type is the visible label.",`Projected actions must have a name that includes the hearing (see the list demo), since several cards share the same button.`,`A short visible label such as "Join" can carry the hearing in visually hidden text (the remote demo); keep the visible words at the start of the name.`],related:[`calendar`,`case-file`,`docket-table`,`card`]};export{me as HEARING_CARD_DOCS};