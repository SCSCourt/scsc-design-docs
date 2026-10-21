import{Bt as PE,Fr as kn,Ms as uc,Na as Jb,Un as Za,Xa as Pv,Zi as za,ms as nu,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{t as _}from"./chunk-eNj8AoX-.js";import{t as D}from"./chunk-CuyuIRg4.js";var w=class l{columns=[{key:`aspect`,header:``,width:`10rem`},{key:`steps`,header:`scsc-steps`},{key:`wizard`,header:`scsc-wizard`}];rows=[{aspect:`What it is`,steps:`A progress indicator`,wizard:`A multi-step flow: indicator, step content, buttons`},{aspect:`API`,steps:`[steps]: { label, description?, state?, optional? }[], [current], clickable, (stepClick)`,wizard:`[(index)], linear, layout, (finish); <scsc-wizard-step label heading stepControl>`},{aspect:`Switches content`,steps:`No: your page or router does`,wizard:`Yes: only the active step is shown; the others stay mounted, hidden`},{aspect:`Buttons`,steps:`None (clickable steps emit stepClick)`,wizard:`Back, Next, then the finish button; optional Cancel and Save draft`},{aspect:`Validation`,steps:`n/a (set a step’s state to error)`,wizard:`stepControl blocks Next with an error summary; canAdvance and (beforeNext) add checks`},{aspect:`Focus`,steps:`Untouched`,wizard:`Moves to the new step’s heading and announces “Step 2 of 4: Documents”`},{aspect:`Semantics`,steps:`A named list; aria-current="step" and each state in words`,wizard:`The same list, and a group named “Step 2 of 4: Documents”`},{aspect:`Narrow screens`,steps:`Compact “Step 2 of 5” line and bar when the container is narrow`,wizard:`The same, with the actions stuck to the bottom of the screen`}];gateCode=`<form [formGroup]="form">
  <scsc-wizard [(index)]="step" finishLabel="Submit filing" (finish)="submit()">
    <scsc-wizard-step label="Case" [stepControl]="form.controls.case">\u2026</scsc-wizard-step>
    <scsc-wizard-step label="Documents" [stepControl]="form.controls.documents" [canAdvance]="hasFiles">\u2026</scsc-wizard-step>
    <scsc-wizard-step label="Review">\u2026</scsc-wizard-step>
  </scsc-wizard>
</form>

// A check outside the form: return false to stay (and say why).
protected readonly hasFiles = () => this.files().length > 0;`;routesCode=`// efile.routes.ts
export const EFILE_ROUTES: Routes = [
  {
    path: '',
    component: EfileFlow,
    providers: [EfileDraft], // one draft for the whole flow
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'case' },
      { path: 'case', title: 'Case \xB7 e-Filing (step 1 of 4)', loadComponent: () => import('./case-step').then((m) => m.CaseStep) },
      { path: 'documents', title: 'Documents \xB7 e-Filing (step 2 of 4)', canActivate: [stepDone('case')], loadComponent: () => import('./documents-step').then((m) => m.DocumentsStep) },
      { path: 'fees', title: 'Fees \xB7 e-Filing (step 3 of 4)', canActivate: [stepDone('documents')], loadComponent: () => import('./fees-step').then((m) => m.FeesStep) },
      { path: 'review', title: 'Review \xB7 e-Filing (step 4 of 4)', canActivate: [stepDone('fees')], loadComponent: () => import('./review-step').then((m) => m.ReviewStep) },
    ],
  },
];

/** Sends the user back to the first unfinished step instead of skipping ahead. */
function stepDone(step: EfileStep): CanActivateFn {
  return () => inject(EfileDraft).isDone(step) || inject(Router).createUrlTree(['/efile', step]);
}`;flowCode=`// efile-flow.ts \u2014 the parent: indicator + outlet
@Component({
  selector: 'app-efile-flow',
  imports: [RouterOutlet, ScscSteps],
  template: \`
    <scsc-steps [steps]="steps" [current]="current()" class="mb-6" />
    <router-outlet />
  \`,
})
export class EfileFlow {
  private readonly router = inject(Router);
  private readonly paths = ['case', 'documents', 'fees', 'review'];
  protected readonly steps: ScscStep[] = [
    { label: 'Case' }, { label: 'Documents' }, { label: 'Fees' }, { label: 'Review' },
  ];
  private readonly url = toSignal(
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.router.url)),
    { initialValue: this.router.url },
  );
  protected readonly current = computed(() =>
    Math.max(0, this.paths.findIndex((p) => this.url().split(/[?#]/)[0].endsWith('/' + p))),
  );
}`;stepCode=`// documents-step.ts \u2014 one step: heading, form, Back / Next
@Component({
  selector: 'app-documents-step',
  imports: [ReactiveFormsModule, RouterLink, ScscButton, ScscButtonLink /* , fields\u2026 */],
  template: \`
    <h1 class="text-2xl font-semibold text-primary">Documents</h1>
    <form [formGroup]="form" (ngSubmit)="next()">
      \u2026
      <div class="mt-6 flex justify-between">
        <a scsc-button variant="ghost" routerLink="../case">Back</a>
        <scsc-button nativeType="submit">Next</scsc-button>
      </div>
    </form>
  \`,
})
export class DocumentsStep {
  private readonly draft = inject(EfileDraft);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly host = inject(ElementRef);
  protected readonly form = this.draft.documents; // the FormGroup lives in the draft service

  protected next(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      focusFirstInvalid(this.host.nativeElement);
      return;
    }
    this.draft.markDone('documents');
    this.router.navigate(['../fees'], { relativeTo: this.route });
  }
}`;static ɵfac=function(o){return new(o||l)};static ɵcmp=Af({type:l,selectors:[[`app-wizard-vs-steps-page`]],decls:213,vars:13,consts:[[`title`,`Wizard vs. steps`,`eyebrow`,`Guides`],[1,`mb-10`],[1,`mb-3`,3,`level`],[`routerLink`,`/docs/components/steps`],[`routerLink`,`/docs/components/wizard`],[`label`,`Steps and wizard compared`,3,`columns`,`rows`],[`routerLink`,`/docs/components/timeline`],[1,`mb-3`],[`language`,`typescript`,3,`code`],[`language`,`typescript`,1,`mb-3`,3,`code`],[`status`,`info`,`title`,`Upgrading a 0.4 wizard`],[1,`mt-1`,`list-disc`,`pl-5`],[1,`flex`,`flex-wrap`,`gap-2`],[`routerLink`,`/docs/components/steps`,1,`btn`,`btn-outline`,`btn-sm`],[`routerLink`,`/docs/components/wizard`,1,`btn`,`btn-outline`,`btn-sm`],[`routerLink`,`/docs/patterns/forms`,1,`btn`,`btn-outline`,`btn-sm`],[`routerLink`,`/docs/patterns/reference-apps`,1,`btn`,`btn-outline`,`btn-sm`]],template:function(o,a){o&1&&(Ga(0,`app-docs-page-header`,0),G_(1,` Both show a numbered progress bar, so they look alike. `),Ga(2,`code`),G_(3,`scsc-steps`),Lf(),G_(4,` is only the indicator; `),Ga(5,`code`),G_(6,`scsc-wizard`),Lf(),G_(7,` is the whole multi-step flow: the indicator, the content of each step and the Back / Next / Submit buttons. `),Lf(),Ga(8,`section`,1)(9,`scsc-heading`,2),G_(10,`In one line each`),Lf(),Ga(11,`scsc-prose`)(12,`ul`)(13,`li`)(14,`a`,3)(15,`strong`)(16,`code`),G_(17,`scsc-steps`),Lf()()(),G_(18,` draws where the user is: pass `),Ga(19,`code`),G_(20,`[steps]`),Lf(),G_(21,` and a 0-based `),Ga(22,`code`),G_(23,`[current]`),Lf(),G_(24,`. It switches no content: your page decides what is shown. Steps can carry a state (`),Ga(25,`code`),G_(26,`error`),Lf(),G_(27,`, `),Ga(28,`code`),G_(29,`warning`),Lf(),G_(30,`…), and with `),Ga(31,`code`),G_(32,`clickable`),Lf(),G_(33,` they become buttons that emit `),Ga(34,`code`),G_(35,`(stepClick)`),Lf(),G_(36,`. `),Lf(),Ga(37,`li`)(38,`a`,4)(39,`strong`)(40,`code`),G_(41,`scsc-wizard`),Lf()()(),G_(42,` switches content: one `),Ga(43,`code`),G_(44,`<scsc-wizard-step label="…">`),Lf(),G_(45,` per step, only the active one visible, with its heading, Back, Next and a finish button (`),Ga(46,`code`),G_(47,`finishLabel`),Lf(),G_(48,`, `),Ga(49,`code`),G_(50,`(finish)`),Lf(),G_(51,`), a two-way `),Ga(52,`code`),G_(53,`[(index)]`),Lf(),G_(54,`, and validation through each step's `),Ga(55,`code`),G_(56,`[stepControl]`),Lf(),G_(57,`. It renders `),Ga(58,`code`),G_(59,`scsc-steps`),Lf(),G_(60,` for its indicator. `),Lf()()()(),Ga(61,`section`,1)(62,`scsc-heading`,2),G_(63,`Compared`),Lf(),uc(64,`scsc-table`,5),Lf(),Ga(65,`section`,1)(66,`scsc-heading`,2),G_(67,`Which one`),Lf(),Ga(68,`scsc-prose`)(69,`ul`)(70,`li`)(71,`strong`),G_(72,`All steps on one screen, one submit at the end`),Lf(),G_(73,` (intake, a questionnaire): `),Ga(74,`code`),G_(75,`scsc-wizard`),Lf(),G_(76,`. Steps stay mounted while hidden, so a form group spanning them keeps its values when the user goes back. `),Lf(),Ga(77,`li`)(78,`strong`),G_(79,`Each step deserves its own URL`),Lf(),G_(80,` (bookmarkable, survives a reload, the browser Back button works, steps are lazy-loaded or owned by different teams): `),Ga(81,`code`),G_(82,`scsc-steps`),Lf(),G_(83,` above a `),Ga(84,`code`),G_(85,`<router-outlet>`),Lf(),G_(86,`. See the recipe below. `),Lf(),Ga(87,`li`)(88,`strong`),G_(89,`Showing progress through something that is not a form`),Lf(),G_(90,` (a filing's status: submitted, accepted, scheduled): `),Ga(91,`code`),G_(92,`scsc-steps`),Lf(),G_(93,` on its own, or `),Ga(94,`a`,6)(95,`code`),G_(96,`scsc-timeline`),Lf()(),G_(97,` when dates matter. `),Lf()()()(),Ga(98,`section`,1)(99,`scsc-heading`,2),G_(100,`Validation`),Lf(),Ga(101,`scsc-prose`,7)(102,`p`),G_(103,` Give each `),Ga(104,`code`),G_(105,`scsc-wizard-step`),Lf(),G_(106,` its `),Ga(107,`code`),G_(108,`FormGroup`),Lf(),G_(109,` as `),Ga(110,`code`),G_(111,`[stepControl]`),Lf(),G_(112,`. `),Ga(113,`em`),G_(114,`Next`),Lf(),G_(115,` marks it touched and, while it is invalid, stays on the step, shows the error summary and focuses the first invalid field. The wizard is linear by default: the indicator reaches forward only as far as the first incomplete step. For checks outside the form (an upload, a server lookup) add `),Ga(116,`code`),G_(117,`[canAdvance]`),Lf(),G_(118,`; to veto a move from outside, call `),Ga(119,`code`),G_(120,`preventDefault()`),Lf(),G_(121,` in `),Ga(122,`code`),G_(123,`(beforeNext)`),Lf(),G_(124,`. `),Lf()(),uc(125,`app-docs-code`,8),Lf(),Ga(126,`section`,1)(127,`scsc-heading`,2),G_(128,`Recipe: a routed wizard`),Lf(),Ga(129,`scsc-prose`,7)(130,`p`),G_(131,` A parent route draws `),Ga(132,`code`),G_(133,`scsc-steps`),Lf(),G_(134,` and an outlet; each step is a child route with its own `),Ga(135,`code`),G_(136,`<h1>`),Lf(),G_(137,`, form and Back / Next buttons. Keep the draft in a service provided on the parent route so it outlives each step, and guard later steps so nobody deep-links past an unfinished one. `),Lf()(),uc(138,`app-docs-code`,9)(139,`app-docs-code`,9)(140,`app-docs-code`,9),Ga(141,`scsc-prose`)(142,`ul`)(143,`li`)(144,`strong`),G_(145,`Focus and announcements.`),Lf(),G_(146,` With `),Ga(147,`code`),G_(148,`provideScscRouteA11y()`),Lf(),G_(149,` in the app config, each navigation moves focus to the new step's `),Ga(150,`code`),G_(151,`<h1>`),Lf(),G_(152,` and announces the route `),Ga(153,`code`),G_(154,`title`),Lf(),G_(155,`. It leaves focus alone if focus is still inside `),Ga(156,`code`),G_(157,`<main>`),Lf(),G_(158,`, which is why the Back / Next buttons live in the step component (they are destroyed on navigation) rather than in the parent. `),Lf(),Ga(159,`li`)(160,`strong`),G_(161,`Titles.`),Lf(),G_(162,` Give each child route a `),Ga(163,`code`),G_(164,`title`),Lf(),G_(165,` such as "Documents · e-Filing (step 2 of 4)" so the tab and the announcement say where the user is. `),Lf()()()(),Ga(166,`section`,1)(167,`scsc-heading`,2),G_(168,`New in 0.5.0`),Lf(),Ga(169,`scsc-alert`,10)(170,`ul`,11)(171,`li`),G_(172,` The wizard is linear by default (`),Ga(173,`code`),G_(174,`linear: true`),Lf(),G_(175,`). Without a `),Ga(176,`code`),G_(177,`stepControl`),Lf(),G_(178,` nothing blocks `),Ga(179,`em`),G_(180,`Next`),Lf(),G_(181,`, so existing flows keep working; set `),Ga(182,`code`),G_(183,`[linear]="false"`),Lf(),G_(184,` to let the indicator reach every step. `),Lf(),Ga(185,`li`),G_(186,` The wizard now renders each step's heading (`),Ga(187,`code`),G_(188,`heading`),Lf(),G_(189,`, else `),Ga(190,`code`),G_(191,`label`),Lf(),G_(192,`) and `),Ga(193,`code`),G_(194,`description`),Lf(),G_(195,`: move a heading at the top of a step into those inputs. `),Lf(),Ga(196,`li`),G_(197,` Steps and wizard switch to a compact "Step 2 of 5" view when their container is narrow; `),Ga(198,`code`),G_(199,`layout="side"`),Lf(),G_(200,` puts the steps in a rail. `),Lf()()()(),Ga(201,`section`)(202,`scsc-heading`,2),G_(203,`Related`),Lf(),Ga(204,`div`,12)(205,`a`,13),G_(206,`Steps`),Lf(),Ga(207,`a`,14),G_(208,`Wizard`),Lf(),Ga(209,`a`,15),G_(210,`Form patterns`),Lf(),Ga(211,`a`,16),G_(212,`Reference apps (e-Filing)`),Lf()()()),o&2&&(Jb(9),Pv(`level`,2),Jb(53),Pv(`level`,2),Jb(2),Pv(`columns`,a.columns)(`rows`,a.rows),Jb(2),Pv(`level`,2),Jb(33),Pv(`level`,2),Jb(26),Pv(`code`,a.gateCode),Jb(2),Pv(`level`,2),Jb(11),Pv(`code`,a.routesCode),Jb(),Pv(`code`,a.flowCode),Jb(),Pv(`code`,a.stepCode),Jb(27),Pv(`level`,2),Jb(35),Pv(`level`,2))},dependencies:[nu,za,kn,PE,Za,_,D],encapsulation:2})};export{w as WizardVsStepsPage};