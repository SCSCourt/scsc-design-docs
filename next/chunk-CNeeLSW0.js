import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Aa as It,Ca as Gv,Co as _2,Ct as Lr,Do as ae$1,Go as g,Hr as mc,Hs as y_,I as EP,Lo as d_,Ma as JT,Ms as uc$1,Na as Jb,Nn as Xa,Oi as uc,Rs as w_,Ss as rD,Xa as Pv,Zo as i_,_s as o_,_t as Kn,cs as lc,ds as nD,ha as Eg,hs as oD,ir as dt,ka as Ig,ks as t_,kt as NE,pi as sn,pr as fr,ra as Af,ta as $f,va as G_,vn as Vn,ws as r_,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function ae(t,n){t&1&&(Ga(0,`p`,2),G_(1,`alert() resolved — the notice was acknowledged.`),Lf())}var _=class t{dialog=g(Kn);acknowledged=q(!1);async notify(){await this.dialog.alert({title:`Filing received`,message:`Confirmation number 2026-0093812.
The clerk will review it within 2 business days.`,okText:`Got it`,tone:`success`}),this.acknowledged.set(!0)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-dialog-alert-demo`]],decls:4,vars:1,consts:[[1,`flex`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[1,`text-sm`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return o.notify()}),G_(2,`Submit filing`),Lf(),JT(3,ae,2,0,`p`,2),Lf()),e&2&&(Jb(3),t_(o.acknowledged()?3:-1))},dependencies:[sn],encapsulation:2})};function ie(t,n){if(t&1&&(Ga(0,`p`,2),G_(1,` confirm() resolved `),Ga(2,`code`),G_(3),Lf(),G_(4),Lf()),t&2){let e=y_();Jb(3),nD(e.result()),Jb(),$f(` — `,e.result()?`hearing vacated`:`nothing changed`,` `)}}var A=class t{dialog=g(Kn);result=q(null);async vacate(){let n=await this.dialog.confirm({title:`Vacate the Oct 14 hearing?`,message:`Both parties will be notified by mail. This cannot be undone.`,confirmText:`Vacate hearing`,cancelText:`Keep hearing`,tone:`error`});this.result.set(n)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-dialog-confirm-demo`]],decls:4,vars:1,consts:[[1,`flex`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[1,`text-sm`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return o.vacate()}),G_(2,`Vacate hearing…`),Lf(),JT(3,ie,5,2,`p`,2),Lf()),e&2&&(Jb(3),t_(o.result()!==null?3:-1))},dependencies:[sn],encapsulation:2})};function se(t,n){if(t&1&&(Ga(0,`option`,2),G_(1),Lf()),t&2){let e=n.$implicit,o=y_();Pv(`value`,e)(`selected`,e===o.department()),Jb(),nD(e)}}var E=class t{dialogs=g(Kn);hearing=q({caseNumber:`24CV012345`,type:`Motion to Compel`,department:`Dept. 5`});async reassign(){let e=await this.dialogs.open(M,{title:`Reassign hearing`,description:`${this.hearing().type} in ${this.hearing().caseNumber}`,data:this.hearing(),size:`sm`}).afterClosed;e&&this.hearing.update(o=>s(r({},o),{department:e}))}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-dialog-open-demo`]],decls:5,vars:3,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[`size`,`sm`,`tone`,`muted`,`tnum`,``]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return o.reassign()}),G_(2,`Reassign hearing…`),Lf(),Ga(3,`scsc-text`,2),G_(4),Lf()()),e&2&&(Jb(4),oD(``,o.hearing().type,` · `,o.hearing().caseNumber,` · `,o.hearing().department))},dependencies:[sn,NE],encapsulation:2})};var M=class t{ref=g(fr);data=g(mc);departments=[`Dept. 1`,`Dept. 5`,`Dept. 12`,`Dept. 19`];department=q(this.data.department);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-reassign-hearing-dialog`]],decls:9,vars:0,consts:[[`label`,`New department`,`for`,`reassign-dept`],[`scsc-select`,``,`id`,`reassign-dept`,3,`change`],[3,`value`,`selected`],[`scscDialogActions`,``],[`variant`,`ghost`,3,`click`],[`variant`,`primary`,3,`click`]],template:function(e,o){e&1&&(Ga(0,`scsc-form-field`,0)(1,`select`,1),lc(`change`,function(f){return o.department.set(f.target.value)}),o_(2,se,2,3,`option`,2,r_),Lf()(),Ga(4,`div`,3)(5,`scsc-button`,4),lc(`click`,function(){return o.ref.close()}),G_(6,`Cancel`),Lf(),Ga(7,`scsc-button`,5),lc(`click`,function(){return o.ref.close(o.department())}),G_(8,`Reassign`),Lf()()),e&2&&(Jb(2),i_(o.departments))},dependencies:[sn,uc,Vn,On],encapsulation:2})};function re(t,n){t&1&&(G_(0,` prompt() resolved `),Ga(1,`code`),G_(2,`null`),Lf(),G_(3,` — cancelled. `))}function ce(t,n){if(t&1&&(G_(0,` prompt() resolved `),Ga(1,`code`),G_(2),Lf(),G_(3,`. `)),t&2){let e=y_(2);Jb(2),$f(`"`,e.answer(),`"`)}}function le(t,n){if(t&1&&(Ga(0,`p`,2),JT(1,re,4,0)(2,ce,4,1),Lf()),t&2){let e=y_();Jb(),t_(e.answer()===null?1:2)}}var N=class t{dialog=g(Kn);answer=q(void 0);async continueHearing(){let n=await this.dialog.prompt({title:`Continue the hearing`,message:`Enter the reason for the continuance. It will appear on the minute order.`,placeholder:`e.g. Stipulation of the parties`,confirmText:`Continue hearing`});this.answer.set(n)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-dialog-prompt-demo`]],decls:4,vars:1,consts:[[1,`flex`,`items-center`,`gap-3`],[`variant`,`secondary`,`outline`,``,3,`click`],[1,`text-sm`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return o.continueHearing()}),G_(2,`Continue hearing…`),Lf(),JT(3,le,3,1,`p`,2),Lf()),e&2&&(Jb(3),t_(o.answer()!==void 0?3:-1))},dependencies:[sn],encapsulation:2})};var de=[`calendar`];var me=(t,n)=>n.id;function pe(t,n){if(t&1){let e=d_();Ga(0,`li`,2)(1,`div`,3)(2,`p`,4),G_(3),Lf(),Ga(4,`scsc-text`,5),G_(5),Lf()(),Ga(6,`scsc-button`,6),lc(`click`,function(){let g=Eg(e).$implicit,f=y_();return Ig(f.vacate(g))}),G_(7,` Vacate`),Ga(8,`span`,7),G_(9),Lf()()()}if(t&2){let e=n.$implicit;Jb(3),nD(e.type),Jb(2),rD(``,e.caseNumber,` · `,e.time),Jb(4),rD(`: `,e.type,`, `,e.caseNumber)}}function ge(t,n){t&1&&(Ga(0,`li`),uc$1(1,`scsc-empty-state`,8),Lf())}var R=class t{dialog=g(Kn);toasts=g(Lr);injector=g(ae$1);calendar=_2.required(`calendar`,{read:It});hearings=q([{id:1,caseNumber:`24CV012345`,type:`Case Management Conference`,time:`9:00 AM`},{id:2,caseNumber:`24CV013002`,type:`Motion to Compel`,time:`10:30 AM`},{id:3,caseNumber:`23CV008812`,type:`Trial Setting Conference`,time:`1:30 PM`}]);async vacate(n){if(!await this.dialog.confirm({title:`Vacate the ${n.time} hearing?`,message:`${n.type} in ${n.caseNumber} will be removed from the calendar and both parties notified by mail.`,confirmText:`Vacate hearing`,cancelText:`Keep hearing`,tone:`error`}))return;let o=this.calendar().nativeElement,g=this.hearings().indexOf(n);dt(this.injector,o,()=>{let f=o.querySelectorAll(`li button`);return f[Math.min(g,f.length-1)]??o}),this.hearings.update(f=>f.filter(oe=>oe.id!==n.id)),this.toasts.success(`${n.type} in ${n.caseNumber} was vacated.`,{title:`Hearing vacated`})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-dialog-row-action-demo`]],viewQuery:function(e,o){e&1&&Gv(o.calendar,de,5,It),e&2&&w_()},decls:5,vars:1,consts:[[`calendar`,``],[`tabindex`,`-1`,`aria-label`,`Dept. 7 calendar, Oct 14, 2026`,1,`max-w-xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-3`],[1,`min-w-0`,`flex-1`],[1,`font-medium`],[`tone`,`muted`,`size`,`sm`,`tnum`,``,1,`block`],[`variant`,`ghost`,`size`,`sm`,3,`click`],[1,`sr-only`],[`icon`,`calendar-check`,`title`,`No hearings left on this calendar`]],template:function(e,o){e&1&&(Ga(0,`scsc-list`,1,0),o_(2,pe,10,5,`li`,2,me,!1,ge,2,0,`li`),Lf()),e&2&&(Jb(2),i_(o.hearings()))},dependencies:[sn,Xa,EP,NE],encapsulation:2})};var D={"dialog-alert":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScscButton, ScscDialogService } from '@scscourt/design';

@Component({
  selector: 'app-dialog-alert-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton],
  template: \`
    <div class="flex items-center gap-3">
      <scsc-button variant="secondary" outline (click)="notify()">Submit filing</scsc-button>
      @if (acknowledged()) {
        <p class="text-sm text-base-content/70">alert() resolved \u2014 the notice was acknowledged.</p>
      }
    </div>
  \`,
})
export class DialogAlertDemo {
  private readonly dialog = inject(ScscDialogService);
  protected readonly acknowledged = signal(false);

  protected async notify(): Promise<void> {
    await this.dialog.alert({
      title: 'Filing received',
      message:
        'Confirmation number 2026-0093812.\\nThe clerk will review it within 2 business days.',
      okText: 'Got it',
      tone: 'success',
    });
    this.acknowledged.set(true);
  }
}
`,html:`<div class="flex items-center gap-3">
  <scsc-button variant="secondary" outline (click)="notify()">Submit filing</scsc-button>
  @if (acknowledged()) {
    <p class="text-sm text-base-content/70">alert() resolved \u2014 the notice was acknowledged.</p>
  }
</div>
`},"dialog-confirm":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScscButton, ScscDialogService } from '@scscourt/design';

@Component({
  selector: 'app-dialog-confirm-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton],
  template: \`
    <div class="flex items-center gap-3">
      <scsc-button variant="secondary" outline (click)="vacate()">Vacate hearing\u2026</scsc-button>
      @if (result() !== null) {
        <p class="text-sm text-base-content/70">
          confirm() resolved <code>{{ result() }}</code> \u2014
          {{ result() ? 'hearing vacated' : 'nothing changed' }}
        </p>
      }
    </div>
  \`,
})
export class DialogConfirmDemo {
  // Root-provided; rendered by the single <scsc-dialog-host /> in the app root.
  private readonly dialog = inject(ScscDialogService);
  protected readonly result = signal<boolean | null>(null);

  protected async vacate(): Promise<void> {
    const ok = await this.dialog.confirm({
      title: 'Vacate the Oct 14 hearing?',
      message: 'Both parties will be notified by mail. This cannot be undone.',
      confirmText: 'Vacate hearing',
      cancelText: 'Keep hearing',
      tone: 'error',
    });
    this.result.set(ok);
  }
}
`,html:`<div class="flex items-center gap-3">
  <scsc-button variant="secondary" outline (click)="vacate()">Vacate hearing\u2026</scsc-button>
  @if (result() !== null) {
    <p class="text-sm text-base-content/70">
      confirm() resolved <code>{{ result() }}</code> \u2014
      {{ result() ? 'hearing vacated' : 'nothing changed' }}
    </p>
  }
</div>
`},"dialog-open":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  SCSC_DIALOG_DATA,
  SCSC_DIALOG_REF,
  ScscButton,
  ScscDialogActions,
  ScscDialogService,
  ScscFormField,
  ScscSelect,
  ScscText,
  type ScscDialogRef,
} from '@scscourt/design';

interface Hearing {
  caseNumber: string;
  type: string;
  department: string;
}

@Component({
  selector: 'app-dialog-open-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscText],
  template: \`
    <div class="flex flex-wrap items-center gap-3">
      <scsc-button variant="secondary" outline (click)="reassign()">Reassign hearing\u2026</scsc-button>
      <scsc-text size="sm" tone="muted" tnum
        >{{ hearing().type }} \xB7 {{ hearing().caseNumber }} \xB7 {{ hearing().department }}</scsc-text
      >
    </div>
  \`,
})
export class DialogOpenDemo {
  private readonly dialogs = inject(ScscDialogService);
  protected readonly hearing = signal<Hearing>({
    caseNumber: '24CV012345',
    type: 'Motion to Compel',
    department: 'Dept. 5',
  });

  /** Opens the component below in a modal; \`afterClosed\` gives its result. */
  protected async reassign(): Promise<void> {
    const ref = this.dialogs.open<ReassignHearingDialog, Hearing, string>(ReassignHearingDialog, {
      title: 'Reassign hearing',
      description: \`\${this.hearing().type} in \${this.hearing().caseNumber}\`,
      data: this.hearing(),
      size: 'sm',
    });
    const department = await ref.afterClosed; // undefined when dismissed
    if (department) this.hearing.update((h) => ({ ...h, department }));
  }
}

/** The component opened in the modal. It gets its data and ref by injection. */
@Component({
  selector: 'app-reassign-hearing-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscDialogActions, ScscFormField, ScscSelect],
  template: \`
    <scsc-form-field label="New department" for="reassign-dept">
      <select scsc-select id="reassign-dept" (change)="department.set($any($event.target).value)">
        @for (d of departments; track d) {
          <option [value]="d" [selected]="d === department()">{{ d }}</option>
        }
      </select>
    </scsc-form-field>
    <!-- scscDialogActions moves these buttons into the modal footer -->
    <div scscDialogActions>
      <scsc-button variant="ghost" (click)="ref.close()">Cancel</scsc-button>
      <scsc-button variant="primary" (click)="ref.close(department())">Reassign</scsc-button>
    </div>
  \`,
})
export class ReassignHearingDialog {
  protected readonly ref = inject<ScscDialogRef<ReassignHearingDialog, string>>(SCSC_DIALOG_REF);
  private readonly data = inject<Hearing>(SCSC_DIALOG_DATA);

  protected readonly departments = ['Dept. 1', 'Dept. 5', 'Dept. 12', 'Dept. 19'];
  protected readonly department = signal(this.data.department);
}
`,html:`<div class="flex flex-wrap items-center gap-3">
  <scsc-button variant="secondary" outline (click)="reassign()">Reassign hearing\u2026</scsc-button>
  <scsc-text size="sm" tone="muted" tnum
    >{{ hearing().type }} \xB7 {{ hearing().caseNumber }} \xB7 {{ hearing().department }}</scsc-text
  >
</div>
`},"dialog-prompt":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScscButton, ScscDialogService } from '@scscourt/design';

@Component({
  selector: 'app-dialog-prompt-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton],
  template: \`
    <div class="flex items-center gap-3">
      <scsc-button variant="secondary" outline (click)="continueHearing()"
        >Continue hearing\u2026</scsc-button
      >
      @if (answer() !== undefined) {
        <p class="text-sm text-base-content/70">
          @if (answer() === null) {
            prompt() resolved <code>null</code> \u2014 cancelled.
          } @else {
            prompt() resolved <code>"{{ answer() }}"</code>.
          }
        </p>
      }
    </div>
  \`,
})
export class DialogPromptDemo {
  private readonly dialog = inject(ScscDialogService);
  /** undefined = not asked yet; null = cancelled; string = the entered reason. */
  protected readonly answer = signal<string | null | undefined>(undefined);

  protected async continueHearing(): Promise<void> {
    const reason = await this.dialog.prompt({
      title: 'Continue the hearing',
      message: 'Enter the reason for the continuance. It will appear on the minute order.',
      placeholder: 'e.g. Stipulation of the parties',
      confirmText: 'Continue hearing',
    });
    this.answer.set(reason);
  }
}
`,html:`<div class="flex items-center gap-3">
  <scsc-button variant="secondary" outline (click)="continueHearing()"
    >Continue hearing\u2026</scsc-button
  >
  @if (answer() !== undefined) {
    <p class="text-sm text-base-content/70">
      @if (answer() === null) {
        prompt() resolved <code>null</code> \u2014 cancelled.
      } @else {
        prompt() resolved <code>"{{ answer() }}"</code>.
      }
    </p>
  }
</div>
`},"dialog-row-action":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  ScscButton,
  ScscDialogService,
  ScscEmptyState,
  ScscList,
  ScscText,
  ToastService,
  preserveFocus,
} from '@scscourt/design';

interface Hearing {
  id: number;
  caseNumber: string;
  type: string;
  time: string;
}

@Component({
  selector: 'app-dialog-row-action-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscEmptyState, ScscList, ScscText],
  template: \`
    <scsc-list
      #calendar
      tabindex="-1"
      class="max-w-xl rounded-box border border-base-300 bg-base-100"
      aria-label="Dept. 7 calendar, Oct 14, 2026"
    >
      @for (h of hearings(); track h.id) {
        <li class="flex items-center gap-3 px-4 py-3">
          <div class="min-w-0 flex-1">
            <p class="font-medium">{{ h.type }}</p>
            <scsc-text tone="muted" size="sm" tnum class="block"
              >{{ h.caseNumber }} \xB7 {{ h.time }}</scsc-text
            >
          </div>
          <scsc-button variant="ghost" size="sm" (click)="vacate(h)">
            Vacate<span class="sr-only">: {{ h.type }}, {{ h.caseNumber }}</span>
          </scsc-button>
        </li>
      } @empty {
        <li>
          <scsc-empty-state icon="calendar-check" title="No hearings left on this calendar" />
        </li>
      }
    </scsc-list>
  \`,
})
export class DialogRowActionDemo {
  private readonly dialog = inject(ScscDialogService);
  private readonly toasts = inject(ToastService);
  private readonly injector = inject(Injector);
  private readonly calendar = viewChild.required<unknown, ElementRef<HTMLElement>>('calendar', {
    read: ElementRef,
  });

  protected readonly hearings = signal<Hearing[]>([
    { id: 1, caseNumber: '24CV012345', type: 'Case Management Conference', time: '9:00 AM' },
    { id: 2, caseNumber: '24CV013002', type: 'Motion to Compel', time: '10:30 AM' },
    { id: 3, caseNumber: '23CV008812', type: 'Trial Setting Conference', time: '1:30 PM' },
  ]);

  /** Name the exact record in the question, act only on \`true\`, then confirm with a toast. */
  protected async vacate(h: Hearing): Promise<void> {
    const ok = await this.dialog.confirm({
      title: \`Vacate the \${h.time} hearing?\`,
      message: \`\${h.type} in \${h.caseNumber} will be removed from the calendar and both parties notified by mail.\`,
      confirmText: 'Vacate hearing',
      cancelText: 'Keep hearing',
      tone: 'error',
    });
    if (!ok) return;
    // Focus is back on this row's Vacate button, which is about to go: once the list re-renders,
    // hand it to the row that takes its place (or the one above), or to the list when it is empty.
    const list = this.calendar().nativeElement;
    const index = this.hearings().indexOf(h);
    preserveFocus(this.injector, list, () => {
      const buttons = list.querySelectorAll<HTMLElement>('li button');
      return buttons[Math.min(index, buttons.length - 1)] ?? list;
    });
    this.hearings.update((all) => all.filter((x) => x.id !== h.id));
    this.toasts.success(\`\${h.type} in \${h.caseNumber} was vacated.\`, { title: 'Hearing vacated' });
  }
}
`,html:`<scsc-list
  #calendar
  tabindex="-1"
  class="max-w-xl rounded-box border border-base-300 bg-base-100"
  aria-label="Dept. 7 calendar, Oct 14, 2026"
>
  @for (h of hearings(); track h.id) {
    <li class="flex items-center gap-3 px-4 py-3">
      <div class="min-w-0 flex-1">
        <p class="font-medium">{{ h.type }}</p>
        <scsc-text tone="muted" size="sm" tnum class="block"
          >{{ h.caseNumber }} \xB7 {{ h.time }}</scsc-text
        >
      </div>
      <scsc-button variant="ghost" size="sm" (click)="vacate(h)">
        Vacate<span class="sr-only">: {{ h.type }}, {{ h.caseNumber }}</span>
      </scsc-button>
    </li>
  } @empty {
    <li>
      <scsc-empty-state icon="calendar-check" title="No hearings left on this calendar" />
    </li>
  }
</scsc-list>
`}};var Ue={slug:`dialog`,name:`Dialog service`,classes:[`ScscDialogService`,`ScscDialogHost`,`ScscDialogActions`],category:`Overlays & Feedback`,summary:"Dialogs from code. Promise-based `confirm()`, `alert()` and `prompt()` replace the browser natives, and `open(Component)` shows your own component in a modal. `ScscDialogService` is root-provided; one `<scsc-dialog-host />` near the app root renders everything through `scsc-modal`, so it looks and behaves like a modal you declare.",whenToUse:[`**Modal vs dialog service vs drawer:** a modal is markup you declare, the dialog service is code that asks, and a drawer is a side task beside the page. See [Choosing an overlay](/docs/patterns/choosing-an-overlay).`,'A yes/no or a single text answer that gates an action: "Vacate this hearing?", "Reason for continuance". `await` the result and carry on.',"A small task started from code (a row action, a guard) that needs its own layout: `open(Component, { title, data })` returns an `ScscDialogRef`; the component injects `SCSC_DIALOG_DATA` and `SCSC_DIALOG_REF`, and `scscDialogActions` puts its buttons in the footer. A dialog that lives in one template is simpler as an `scsc-modal`.","confirm / alert / prompt queue: a second `confirm()` while one is open shows after the first resolves, so it is safe to call from anywhere. `open()` does not queue: a modal opened from another stacks on top of it.","Use `tone: 'error'` on destructive confirms so the primary button reads as dangerous and the dialog opens with focus on Cancel; cancelling resolves `false` (confirm) or `null` (prompt)."],setup:`// app.ts \u2014 render the host once, next to the router outlet
// (the row-action demo also confirms with a toast, so the toast container is here too)
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScscDialogHost, ScscToastContainer } from '@scscourt/design';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScscDialogHost, ScscToastContainer],
  template: \`
    <router-outlet />
    <scsc-dialog-host />
    <scsc-toast-container />
  \`,
})
export class App {}

// anywhere else \u2014 the service is providedIn: 'root'
private readonly dialog = inject(ScscDialogService);
if (await this.dialog.confirm({ title: 'Vacate hearing?', message: 'This cannot be undone.', tone: 'error' })) {
  this.vacate();
}`,demos:[{id:`dialog-confirm`,title:`Confirm`,description:"Destructive confirm with `tone: 'error'`; the awaited boolean is shown.",component:A,source:D[`dialog-confirm`]},{id:`dialog-alert`,title:`Alert`,description:"One OK button; `message` keeps line breaks (`\\n`).",component:_,source:D[`dialog-alert`]},{id:`dialog-prompt`,title:`Prompt`,description:"Single text field with placeholder; resolves the string, or `null` when cancelled.",component:N,source:D[`dialog-prompt`]},{id:`dialog-open`,title:`Open a component`,description:"`open(ReassignHearingDialog, { title, description, data, size })`: the component injects its data and `SCSC_DIALOG_REF`, `scscDialogActions` moves its buttons into the modal footer, and `await ref.afterClosed` gives the result (`undefined` when dismissed).",component:E,source:D[`dialog-open`]},{id:`dialog-row-action`,title:`Confirm a row action`,description:"The question names the exact hearing; on `true` the row is removed and a toast confirms it. Each row button carries visually hidden context, and `preserveFocus()` hands focus to the next row’s button as its own row goes.",component:R,source:D[`dialog-row-action`]}],a11y:["Every dialog is an `scsc-modal`: a native `<dialog>` opened with `showModal()`, so focus is trapped, the rest of the page is inert, and `Esc` cancels.",'`confirm()` and `alert()` are `role="alertdialog"`, named by the `title` and described by the message; a `prompt()` is a plain dialog whose field is labelled by the message. Give every request a `title`: it becomes the heading and the first thing announced. Without one, the message names the dialog.',"Focus starts where answering is safe: in the field of a prompt, on Cancel for a `tone: 'error'` or `'warning'` confirm (so Enter straight after opening never confirms), and on the confirm or OK button otherwise. A queued request takes the answered one’s place with focus on its own starting control, and its title and message are announced.","`open()` requires a `title`; focus starts on the first control of your component, and returns to the element that opened it. A dialog opened on top of another hands focus back to the one below.","When the last request is answered, focus is back on the element that opened the dialog before your `await` resumes, so trigger dialogs from buttons. If your code then removes that element (deleting its row), focus moves to its nearest remaining container, such as the list; to send it somewhere better, call `preserveFocus()` before the removal, as the row-action demo does."],keyboard:[{keys:`Tab / Shift + Tab`,action:"Focus starts in the text field of a prompt, on Cancel for a `tone: 'error'` or `'warning'` confirm, and on the confirm (or OK) button otherwise; in `open()`, on the component's first control. It cycles through the dialog's controls only (including its Close button), as the page behind is inert."},{keys:`Enter / Space`,action:"On the confirm button: resolves `true`, or the text for a prompt; on Cancel or the Close button: resolves `false`, or `null` for a prompt. A queued request then takes its place, with focus on its own starting control."},{keys:`Enter`,action:`In the prompt field: submits the text, the same as the confirm button.`},{keys:`Escape`,action:"Cancels, like the Cancel button (an alert just resolves; an `open()` modal resolves `afterClosed` with `undefined`, unless it was opened with `dismissable: false`). After the last request, focus returns to the element that opened the dialog, or to its nearest remaining container if that element has been removed."}],appMustProvide:["A `title` for every request: it is the heading and the first thing announced.","Messages that say what will happen and how to undo it, with the `tone` that matches the risk."],related:[`modal`,`drawer`,`toast`]};export{Ue as DIALOG_DOCS};