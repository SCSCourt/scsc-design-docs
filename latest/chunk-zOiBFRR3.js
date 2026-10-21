import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{At as NP,Es as sD,Hs as y_,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Ut as PR,Vr as mN,Xa as Pv,Yo as iD,bo as Y_,cs as lc,ha as Eg,ka as Ig,ks as t_,pi as sn,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function E(i,t){if(i&1){let s=d_();Ga(0,`scsc-task-progress`,6),sD(`statusChange`,function(a){Eg(s);let r=y_();return Y_(r.status,a)||(r.status=a),Ig(a)}),Lf()}if(i&2){let s=y_();Pv(`headingLevel`,3)(`steps`,s.steps),iD(`status`,s.status)}}var T=class i{summary=[{term:`Documents`,value:`Motion, declaration, proposed order (3 PDFs)`},{term:`Hearing`,value:`Oct 14, 2026 · Dept. 5`},{term:`Fee`,value:`$60.00`}];steps=[{id:`upload`,label:`Upload documents`},{id:`pay`,label:`Pay filing fee`},{id:`file`,label:`Send to the clerk`},{id:`receipt`,label:`Email receipt`}];status=q({});submitted=q(!1);submit(){this.submitted.set(!0),this.steps.forEach((t,s$1)=>{setTimeout(()=>this.status.update(e=>s(r({},e),{[t.id]:`active`})),s$1*900),setTimeout(()=>this.status.update(e=>s(r({},e),{[t.id]:`done`})),s$1*900+800)})}static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-task-progress-inline-demo`]],decls:7,vars:3,consts:[[`title`,`Motion to compel · 24CV012345`,1,`max-w-2xl`],[3,`items`],[`slot`,`footer`,1,`flex`,`flex-col`,`gap-3`,`border-t`,`border-base-300`,`scsc-pad-card`],[`variant`,`inline`,`heading`,`Submitting filing`,3,`headingLevel`,`steps`,`status`],[1,`flex`,`justify-end`],[3,`click`,`disabled`],[`variant`,`inline`,`heading`,`Submitting filing`,3,`statusChange`,`headingLevel`,`steps`,`status`]],template:function(s,e){s&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-description-list`,1),Ga(2,`div`,2),JT(3,E,1,3,`scsc-task-progress`,3),Ga(4,`div`,4)(5,`scsc-button`,5),lc(`click`,function(){return e.submit()}),G_(6,`Submit filing`),Lf()()()()),s&2&&(Jb(),Pv(`items`,e.summary),Jb(2),t_(e.submitted()?3:-1),Jb(2),Pv(`disabled`,e.submitted()))},dependencies:[sn,mN,NP,PR],encapsulation:2})};var w=class i{steps=[{id:`db`,label:`Create case database`,description:`Civil Division, 2026 term`},{id:`templates`,label:`Copy notice templates`,description:`42 templates`},{id:`calendar`,label:`Import the hearing calendar`,description:`Depts. 1–22`},{id:`reporting`,label:`Connect statewide reporting`,description:`Optional`},{id:`access`,label:`Grant clerk access`,description:`18 clerks`}];status=q({});errors=q({});running=q(!1);failedOnce=!1;start(){this.failedOnce=!1,this.status.set({}),this.errors.set({}),this.runFrom(`db`)}runFrom(t){let s$2=this.steps.findIndex(a=>a.id===t),e=this.steps[s$2];if(!e){this.running.set(!1);return}this.running.set(!0),this.set(e.id,`active`),setTimeout(()=>{if(e.id===`calendar`&&!this.failedOnce){this.failedOnce=!0,this.errors.update(a=>s(r({},a),{calendar:`The calendar service timed out.`})),this.set(e.id,`failed`),this.running.set(!1);return}this.set(e.id,e.id===`reporting`?`skipped`:`done`),this.runFrom(this.steps[s$2+1]?.id??``)},1100)}set(t,s$3){this.status.update(e=>s(r({},e),{[t]:s$3}))}static ɵfac=function(s){return new(s||i)};static ɵcmp=Af({type:i,selectors:[[`app-task-progress-setup-demo`]],decls:5,vars:4,consts:[[1,`max-w-lg`],[`heading`,`Setting up your workspace`,3,`statusChange`,`retry`,`steps`,`status`,`errors`],[`slot`,`footer`,1,`flex`,`justify-end`,`border-t`,`border-base-300`,`scsc-pad-card`],[3,`click`,`disabled`]],template:function(s,e){s&1&&(Ga(0,`scsc-card`,0)(1,`scsc-task-progress`,1),sD(`statusChange`,function(r){return Y_(e.status,r)||(e.status=r),r}),lc(`retry`,function(r){return e.runFrom(r)}),Lf(),Ga(2,`div`,2)(3,`scsc-button`,3),lc(`click`,function(){return e.start()}),G_(4,`Start setup`),Lf()()()),s&2&&(Jb(),Pv(`steps`,e.steps),iD(`status`,e.status),Pv(`errors`,e.errors()),Jb(2),Pv(`disabled`,e.running()))},dependencies:[sn,mN,PR],encapsulation:2})};var D={"task-progress-inline":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscDescriptionList,
  ScscTaskProgress,
  ScscTaskStatus,
  ScscTaskStep,
} from '@scscourt/design';

@Component({
  selector: 'app-task-progress-inline-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscDescriptionList, ScscTaskProgress],
  template: \`
    <scsc-card title="Motion to compel \xB7 24CV012345" class="max-w-2xl">
      <scsc-description-list [items]="summary" />
      <div slot="footer" class="flex flex-col gap-3 border-t border-base-300 scsc-pad-card">
        @if (submitted()) {
          <scsc-task-progress
            variant="inline"
            heading="Submitting filing"
            [headingLevel]="3"
            [steps]="steps"
            [(status)]="status"
          />
        }
        <div class="flex justify-end">
          <scsc-button [disabled]="submitted()" (click)="submit()">Submit filing</scsc-button>
        </div>
      </div>
    </scsc-card>
  \`,
})
export class TaskProgressInlineDemo {
  protected readonly summary = [
    { term: 'Documents', value: 'Motion, declaration, proposed order (3 PDFs)' },
    { term: 'Hearing', value: 'Oct 14, 2026 \xB7 Dept. 5' },
    { term: 'Fee', value: '$60.00' },
  ];
  protected readonly steps: ScscTaskStep[] = [
    { id: 'upload', label: 'Upload documents' },
    { id: 'pay', label: 'Pay filing fee' },
    { id: 'file', label: 'Send to the clerk' },
    { id: 'receipt', label: 'Email receipt' },
  ];
  protected readonly status = signal<Record<string, ScscTaskStatus>>({});
  protected readonly submitted = signal(false);

  protected submit(): void {
    this.submitted.set(true);
    // Stand-in for the e-filing calls.
    this.steps.forEach((step, i) => {
      setTimeout(() => this.status.update((s) => ({ ...s, [step.id]: 'active' })), i * 900);
      setTimeout(() => this.status.update((s) => ({ ...s, [step.id]: 'done' })), i * 900 + 800);
    });
  }
}
`,html:`<scsc-card title="Motion to compel \xB7 24CV012345" class="max-w-2xl">
  <scsc-description-list [items]="summary" />
  <div slot="footer" class="flex flex-col gap-3 border-t border-base-300 scsc-pad-card">
    @if (submitted()) {
      <scsc-task-progress
        variant="inline"
        heading="Submitting filing"
        [headingLevel]="3"
        [steps]="steps"
        [(status)]="status"
      />
    }
    <div class="flex justify-end">
      <scsc-button [disabled]="submitted()" (click)="submit()">Submit filing</scsc-button>
    </div>
  </div>
</scsc-card>
`},"task-progress-setup":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscTaskProgress,
  ScscTaskStatus,
  ScscTaskStep,
} from '@scscourt/design';

@Component({
  selector: 'app-task-progress-setup-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscCard, ScscTaskProgress],
  template: \`
    <scsc-card class="max-w-lg">
      <scsc-task-progress
        heading="Setting up your workspace"
        [steps]="steps"
        [(status)]="status"
        [errors]="errors()"
        (retry)="runFrom($event)"
      />
      <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
        <scsc-button [disabled]="running()" (click)="start()">Start setup</scsc-button>
      </div>
    </scsc-card>
  \`,
})
export class TaskProgressSetupDemo {
  protected readonly steps: ScscTaskStep[] = [
    { id: 'db', label: 'Create case database', description: 'Civil Division, 2026 term' },
    { id: 'templates', label: 'Copy notice templates', description: '42 templates' },
    { id: 'calendar', label: 'Import the hearing calendar', description: 'Depts. 1\u201322' },
    { id: 'reporting', label: 'Connect statewide reporting', description: 'Optional' },
    { id: 'access', label: 'Grant clerk access', description: '18 clerks' },
  ];
  protected readonly status = signal<Record<string, ScscTaskStatus>>({});
  protected readonly errors = signal<Record<string, string>>({});
  protected readonly running = signal(false);
  private failedOnce = false;

  protected start(): void {
    this.failedOnce = false;
    this.status.set({});
    this.errors.set({});
    this.runFrom('db');
  }

  // Stand-in for the real provisioning calls: one step at a time, the calendar fails once.
  protected runFrom(id: string): void {
    const index = this.steps.findIndex((s) => s.id === id);
    const step = this.steps[index];
    if (!step) {
      this.running.set(false);
      return;
    }
    this.running.set(true);
    this.set(step.id, 'active');
    setTimeout(() => {
      if (step.id === 'calendar' && !this.failedOnce) {
        this.failedOnce = true;
        this.errors.update((e) => ({ ...e, calendar: 'The calendar service timed out.' }));
        this.set(step.id, 'failed');
        this.running.set(false);
        return;
      }
      this.set(step.id, step.id === 'reporting' ? 'skipped' : 'done');
      this.runFrom(this.steps[index + 1]?.id ?? '');
    }, 1100);
  }

  private set(id: string, state: ScscTaskStatus): void {
    this.status.update((s) => ({ ...s, [id]: state }));
  }
}
`,html:`<scsc-card class="max-w-lg">
  <scsc-task-progress
    heading="Setting up your workspace"
    [steps]="steps"
    [(status)]="status"
    [errors]="errors()"
    (retry)="runFrom($event)"
  />
  <div slot="footer" class="flex justify-end border-t border-base-300 scsc-pad-card">
    <scsc-button [disabled]="running()" (click)="start()">Start setup</scsc-button>
  </div>
</scsc-card>
`}};var te={slug:`task-progress`,name:`Task Progress`,classes:[`ScscTaskProgress`],category:`Overlays & Feedback`,whenToUse:[`A sequence the app runs for the user, where each step can succeed or fail on its own: provisioning a workspace, submitting a filing, a bulk send, an import.`,"Keep the step definitions in `steps` and drive `status` (a map of step id to `pending`, `active`, `done`, `failed` or `skipped`) as the work goes. Put a failure's message in `errors`.","Handle `retry`: the component sets the step back to `active` and emits its id; run the step again and update `status`.",'`variant="inline"` fits a card footer or a toolbar; the default vertical list shows descriptions and the error under the failed step.',"For a single task with a percentage, use `scsc-progress` or `scsc-page-loader` with `progress`; for steps the user moves through, `scsc-wizard`."],demos:[{id:`task-progress-setup`,title:`Setting up a workspace, with a failure and Retry`,description:`Press Start setup. The calendar import fails the first time; Retry resumes from that step. An optional step is skipped.`,component:w,source:D[`task-progress-setup`]},{id:`task-progress-inline`,title:`Compact inline`,description:`Submitting a filing, in a card footer.`,component:T,source:D[`task-progress-inline`]}],a11y:[`The steps are an ordered list, and each carries its state in words (", done", ", in progress"), so it is not shown by the icon or colour alone.`,'Changes are announced through `ScscAnnouncer`: politely as steps start and finish ("Create case database: done"), assertively when one fails, with its message. The initial state is not announced.',`Retry is a real button, described by the step label and the error. Pressing it moves focus to the step, since the button goes away.`,`Under reduced motion the active spinner becomes a still dot and the check appears without drawing.`],keyboard:[{keys:`Tab`,action:`Moves to the **Retry** button of a failed step.`},{keys:`Enter / Space`,action:"On **Retry**: runs the step again (`retry` emits its id); focus moves to the step."}],aria:['The active step has `aria-current="step"`; indicators are `aria-hidden`, with the state in visually hidden text.',"The overall bar is a native `<progress>` named by `progressLabel`, else the heading, with value = finished steps and max = all steps.","The heading renders at `headingLevel` (default 2)."],appMustProvide:['A `heading` that says what is happening ("Submitting filing"), at the right `headingLevel` for the page.',"An error message per failed step in `errors` that says what went wrong and what Retry will do.",`Real completion: keep the page usable, and say what to do next when every step is done.`],related:[`progress`,`steps`,`wizard`,`page-loader`,`alert`]};export{te as TASK_PROGRESS_DOCS};