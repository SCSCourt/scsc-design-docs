import{n as s,t as r$1}from"./chunk-DxqKAYlM.js";import{Ht as PP,Ms as uc,Na as Jb,Ps as ut,Xa as Pv,cs as lc,ds as nD,pi as sn,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var w={submitted:{title:`Submitted`,icon:`send`,status:`neutral`},received:{title:`Received by the clerk`,icon:`inbox`,status:`info`},accepted:{title:`Accepted and filed`,icon:`circle-check`,status:`success`},served:{title:`Served on all parties`,icon:`users`,status:`success`}};var x=new Intl.DateTimeFormat(`en-US`,{dateStyle:`medium`,timeStyle:`short`});var r=class s$1{events=q([{type:`received`,at:`2026-09-28T10:04:00`,by:`Civil Clerk’s Office`},{type:`submitted`,at:`2026-09-28T09:58:00`,by:`Rafael Delgado, SBN 301455`}]);pending=q([{type:`accepted`,at:`2026-09-28T14:31:00`,by:`Clerk J. Ruiz`},{type:`served`,at:`2026-09-28T14:32:00`,by:`e-service to 2 parties`}]);status=q(``);items=ut(()=>this.events().map(t=>s(r$1({},w[t.type]),{timestamp:x.format(new Date(t.at)),datetime:t.at,description:t.by})));checkForUpdates(){let[t,...e]=this.pending();if(!t){this.status.set(`No new updates.`);return}this.pending.set(e),this.events.update(i=>[t,...i]),this.status.set(``)}static ɵfac=function(e){return new(e||s$1)};static ɵcmp=Af({type:s$1,selectors:[[`app-timeline-activity-demo`]],decls:7,vars:2,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-4`],[1,`flex`,`items-center`,`gap-3`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[`role`,`status`,1,`text-sm`,`text-base-content/70`],[`aria-live`,`polite`,3,`items`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-button`,2),lc(`click`,function(){return i.checkForUpdates()}),G_(3,` Check for updates `),Lf(),Ga(4,`span`,3),G_(5),Lf()(),uc(6,`scsc-timeline`,4),Lf()),e&2&&(Jb(5),nD(i.status()),Jb(),Pv(`items`,i.items()))},dependencies:[sn,PP],encapsulation:2})};var p=class s{docket=[{title:`Complaint filed`,timestamp:`2024-03-12`,description:`Civil — Unlimited. Filing fee paid.`,icon:`file-text`,status:`info`},{title:`Summons issued`,timestamp:`2024-03-12`,icon:`send`,status:`neutral`},{title:`Answer filed`,timestamp:`2024-04-09`,description:`Northgate Properties LLC, by counsel.`,icon:`file-text`,status:`neutral`},{title:`Case Management Conference set`,timestamp:`2024-04-15`,description:`Dept. 21, 2024-07-22 at 9:00 AM.`,icon:`calendar-days`,status:`success`},{title:`Motion to compel filed`,timestamp:`2024-06-02`,description:`Hearing reserved; opposition due 2024-06-16.`,icon:`triangle-alert`,status:`warning`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-timeline-docket-demo`]],decls:1,vars:1,consts:[[1,`max-w-lg`,3,`items`]],template:function(e,i){e&1&&uc(0,`scsc-timeline`,0),e&2&&Pv(`items`,i.docket)},dependencies:[PP],encapsulation:2})};var d=class s{steps=[{title:`Payment received`,timestamp:`9:41 AM`},{title:`Receipt emailed`,timestamp:`9:41 AM`},{title:`Posted to case 24CV012345`,timestamp:`9:42 AM`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-timeline-minimal-demo`]],decls:1,vars:1,consts:[[1,`max-w-md`,3,`items`]],template:function(e,i){e&1&&uc(0,`scsc-timeline`,0),e&2&&Pv(`items`,i.steps)},dependencies:[PP],encapsulation:2})};var u={"timeline-activity":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscTimeline, type ScscTimelineItem } from '@scscourt/design';

/** What your e-filing API returns for an envelope. */
interface EnvelopeEvent {
  type: 'submitted' | 'received' | 'accepted' | 'served';
  at: string;
  by: string;
}

const LOOK: Record<EnvelopeEvent['type'], Pick<ScscTimelineItem, 'title' | 'icon' | 'status'>> = {
  submitted: { title: 'Submitted', icon: 'send', status: 'neutral' },
  received: { title: 'Received by the clerk', icon: 'inbox', status: 'info' },
  accepted: { title: 'Accepted and filed', icon: 'circle-check', status: 'success' },
  served: { title: 'Served on all parties', icon: 'users', status: 'success' },
};

const time = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' });

@Component({
  selector: 'app-timeline-activity-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscTimeline],
  template: \`
    <div class="flex max-w-lg flex-col gap-4">
      <div class="flex items-center gap-3">
        <scsc-button variant="neutral" outline size="sm" (click)="checkForUpdates()">
          Check for updates
        </scsc-button>
        <span class="text-sm text-base-content/70" role="status">{{ status() }}</span>
      </div>
      <!-- Newest first for an activity feed; the mapping to title, icon and status lives in LOOK. -->
      <scsc-timeline [items]="items()" aria-live="polite" />
    </div>
  \`,
})
export class TimelineActivityDemo {
  protected readonly events = signal<EnvelopeEvent[]>([
    { type: 'received', at: '2026-09-28T10:04:00', by: 'Civil Clerk\u2019s Office' },
    { type: 'submitted', at: '2026-09-28T09:58:00', by: 'Rafael Delgado, SBN 301455' },
  ]);

  /** Stand-in for the events the server will report next. */
  private readonly pending = signal<EnvelopeEvent[]>([
    { type: 'accepted', at: '2026-09-28T14:31:00', by: 'Clerk J. Ruiz' },
    { type: 'served', at: '2026-09-28T14:32:00', by: 'e-service to 2 parties' },
  ]);
  protected readonly status = signal('');

  protected readonly items = computed<ScscTimelineItem[]>(() =>
    this.events().map((e) => ({
      ...LOOK[e.type],
      timestamp: time.format(new Date(e.at)),
      datetime: e.at,
      description: e.by,
    })),
  );

  protected checkForUpdates(): void {
    const [next, ...rest] = this.pending();
    if (!next) {
      this.status.set('No new updates.');
      return;
    }
    this.pending.set(rest);
    this.events.update((list) => [next, ...list]);
    this.status.set('');
  }
}
`,html:`<div class="flex max-w-lg flex-col gap-4">
  <div class="flex items-center gap-3">
    <scsc-button variant="neutral" outline size="sm" (click)="checkForUpdates()">
      Check for updates
    </scsc-button>
    <span class="text-sm text-base-content/70" role="status">{{ status() }}</span>
  </div>
  <!-- Newest first for an activity feed; the mapping to title, icon and status lives in LOOK. -->
  <scsc-timeline [items]="items()" aria-live="polite" />
</div>
`},"timeline-docket":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTimeline, ScscTimelineItem } from '@scscourt/design';

@Component({
  selector: 'app-timeline-docket-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTimeline],
  template: \`<scsc-timeline class="max-w-lg" [items]="docket" />\`,
})
export class TimelineDocketDemo {
  protected readonly docket: ScscTimelineItem[] = [
    {
      title: 'Complaint filed',
      timestamp: '2024-03-12',
      description: 'Civil \u2014 Unlimited. Filing fee paid.',
      icon: 'file-text',
      status: 'info',
    },
    { title: 'Summons issued', timestamp: '2024-03-12', icon: 'send', status: 'neutral' },
    {
      title: 'Answer filed',
      timestamp: '2024-04-09',
      description: 'Northgate Properties LLC, by counsel.',
      icon: 'file-text',
      status: 'neutral',
    },
    {
      title: 'Case Management Conference set',
      timestamp: '2024-04-15',
      description: 'Dept. 21, 2024-07-22 at 9:00 AM.',
      icon: 'calendar-days',
      status: 'success',
    },
    {
      title: 'Motion to compel filed',
      timestamp: '2024-06-02',
      description: 'Hearing reserved; opposition due 2024-06-16.',
      icon: 'triangle-alert',
      status: 'warning',
    },
  ];
}
`,html:`<scsc-timeline class="max-w-lg" [items]="docket" />
`},"timeline-minimal":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTimeline, ScscTimelineItem } from '@scscourt/design';

@Component({
  selector: 'app-timeline-minimal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTimeline],
  template: \`<scsc-timeline class="max-w-md" [items]="steps" />\`,
})
export class TimelineMinimalDemo {
  /** Only \`title\` is required; the marker falls back to a neutral circle. */
  protected readonly steps: ScscTimelineItem[] = [
    { title: 'Payment received', timestamp: '9:41 AM' },
    { title: 'Receipt emailed', timestamp: '9:41 AM' },
    { title: 'Posted to case 24CV012345', timestamp: '9:42 AM' },
  ];
}
`,html:`<scsc-timeline class="max-w-md" [items]="steps" />
`}};var J={slug:`timeline`,name:`Timeline`,classes:[`ScscTimeline`],category:`Data Display`,whenToUse:[`A sequence of dated events on one thing: docket history, payment steps, an audit trail. Read top to bottom.`,`You choose the order — oldest first for a docket, newest first for activity feeds. The component renders items as given.`,"`status` colours the marker (`info`, `success`, `warning`, `error`, `neutral`); `icon` is any Lucide name. Use both sparingly so the exceptions stand out.","Map API events to `ScscTimelineItem`s in a `computed()` with one lookup table for title, icon and status, so every event type looks the same everywhere.","For a filterable, sortable docket use `scsc-docket-table`; for a process the user is still completing use `scsc-steps`."],demos:[{id:`timeline-docket`,title:`Docket history`,description:`Statuses, icons, timestamps and descriptions.`,component:p,source:u[`timeline-docket`]},{id:`timeline-minimal`,title:`Titles only`,description:"The minimum: `title`, with optional `timestamp`. Markers default to a neutral circle.",component:d,source:u[`timeline-minimal`]},{id:`timeline-activity`,title:`Live filing status`,description:"An e-filing envelope, newest first: typed events mapped through a lookup table, with `Intl` timestamps. Check for updates prepends new events.",component:r,source:u[`timeline-activity`]}],a11y:["An ordered list (`<ol>`), so the count and position of each event are announced.",'The status is stated in words (visually hidden `statusLabel`, or the tone word such as "Warning:") before the title, and each status has its own marker icon, so colour is never the only cue.','Timestamps render in `<time>`; pass `datetime` (ISO 8601) for a readable `timestamp` such as "Mar 12, 2024", or pass an ISO `timestamp` and it is used as is.','A feed that grows while the user watches can sit in an `aria-live="polite"` region so new events are read out.'],aria:["Marker icons are `aria-hidden`; `<time datetime>` when a machine-readable date is known."],appMustProvide:['`statusLabel` when the tone word is not specific enough ("Missed", "Granted").'],related:[`docket-table`,`steps`,`list`]};export{J as TIMELINE_DOCS};