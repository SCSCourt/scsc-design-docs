import{Ai as vA,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ma as JT,Na as Jb,Q as Gue,Vn as ZF,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zo as i_,_s as o_,bn as Vz,bo as Y_,cs as lc,ea as zz,ks as t_,nt as IA,oi as que,pi as sn,ra as Af,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q$1,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var q=class r{score=q$1(0);static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-rating-basic-demo`]],decls:6,vars:3,consts:[[1,`flex`,`flex-col`,`gap-2`],[1,`text-sm`,`font-medium`],[`name`,`score`,3,`ngModelChange`,`ngModel`,`max`],[`role`,`status`,1,`text-sm`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`How easy was it to find your hearing today?`),Lf(),Ga(3,`scsc-rating`,2),HS(),sD(`ngModelChange`,function(A){return Y_(o.score,A)||(o.score=A),A}),Lf(),Ga(4,`p`,3),G_(5),Lf()()),e&2&&(Jb(3),iD(`ngModel`,o.score),Pv(`max`,5),zS(),Jb(2),$f(` `,o.score()?o.score()+` of 5 — thank you.`:`Select a star to rate.`,` `))},dependencies:[Gue,Hue,zz,ZF],encapsulation:2})};function z(r,t){r&1&&(Ga(0,`scsc-alert`,6),G_(1,`Your feedback goes to the self-help center supervisor.`),Lf())}var M=class r{fb=g(Wue);sent=q$1(!1);form=this.fb.group({rating:[0,Fs.min(1)],comments:[``]});ratingError(){let t=this.form.controls.rating;return t.invalid&&t.touched?`Choose a star rating.`:``}submit(){this.form.markAllAsTouched(),this.sent.set(this.form.valid)}static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-rating-reactive-demo`]],decls:9,vars:4,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[`label`,`Self-help center visit`,`required`,``,3,`error`],[`formControlName`,`rating`,3,`max`],[`label`,`What could we do better?`,`hint`,`Optional`,`for`,`comments`],[`scsc-textarea`,``,`id`,`comments`,`rows`,`3`,`formControlName`,`comments`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Thank you`]],template:function(e,o){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return o.submit()}),Ga(1,`scsc-form-field`,1)(2,`scsc-rating`,2),HS(),Lf()(),Ga(3,`scsc-form-field`,3)(4,`textarea`,4),HS(),Lf()(),Ga(5,`div`)(6,`scsc-button`,5),G_(7,`Send feedback`),Lf()(),JT(8,z,2,0,`scsc-alert`,6),Lf()),e&2&&(Pv(`formGroup`,o.form),Jb(),Pv(`error`,o.ratingError()),Jb(),Pv(`max`,5),zS(),Jb(2),zS(),Jb(4),t_(o.sent()?8:-1))},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,za,sn,Vn,ZF,vA],encapsulation:2})};var J=(r,t)=>t.key;function X(r,t){if(r&1&&(Ga(0,`scsc-form-field`,3)(1,`scsc-rating`,6),HS(),Lf()()),r&2){let e=t.$implicit,o=y_();Pv(`label`,e.label)(`error`,o.error(e.key)),Jb(),Pv(`formControlName`,e.key)(`max`,5),zS()}}function Z(r,t){if(r&1&&(Ga(0,`scsc-alert`,5),G_(1),Lf()),r&2){let e=y_();Jb(),$f(` Your average rating was `,e.average(),` of 5. It goes to the center supervisor. `)}}var _=class r{fb=g(Wue);average=q$1(``);questions=[{key:`waitTime`,label:`How reasonable was the wait?`},{key:`staff`,label:`How helpful was the staff member?`},{key:`instructions`,label:`How clear were the instructions you received?`}];form=this.fb.nonNullable.group({waitTime:[0,Fs.min(1)],staff:[0,Fs.min(1)],instructions:[0,Fs.min(1)]});error(t){let e=this.form.controls[t];return e.invalid&&e.touched?`Choose from 1 to 5 stars.`:``}submit(){if(this.form.markAllAsTouched(),this.form.invalid){this.average.set(``);return}let t=Object.values(this.form.getRawValue());this.average.set((t.reduce((e,o)=>e+o,0)/t.length).toFixed(1))}static ɵfac=function(e){return new(e||r)};static ɵcmp=Af({type:r,selectors:[[`app-rating-survey-demo`]],decls:10,vars:2,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-4`,3,`ngSubmit`,`formGroup`],[1,`flex`,`flex-col`,`gap-4`],[1,`mb-1`,`text-sm`,`font-semibold`],[`required`,``,3,`label`,`error`],[`variant`,`primary`,`nativeType`,`submit`],[`status`,`success`,`title`,`Thank you`],[3,`formControlName`,`max`]],template:function(e,o){e&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return o.submit()}),Ga(1,`fieldset`,1)(2,`legend`,2),G_(3,` Your visit to the Self-Help Center · 28 Sep 2026 `),Lf(),o_(4,X,2,4,`scsc-form-field`,3,J),Lf(),Ga(6,`div`)(7,`scsc-button`,4),G_(8,`Send feedback`),Lf()(),JT(9,Z,2,1,`scsc-alert`,5),Lf()),e&2&&(Pv(`formGroup`,o.form),Jb(4),i_(o.questions),Jb(5),t_(o.average()?9:-1))},dependencies:[Kue,Bue,Hue,que,Vz,Xz,za,sn,Vn,ZF],encapsulation:2})};var E={"rating-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScscRating } from '@scscourt/design';

@Component({
  selector: 'app-rating-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscRating],
  template: \`
    <div class="flex flex-col gap-2">
      <span class="text-sm font-medium">How easy was it to find your hearing today?</span>
      <scsc-rating [(ngModel)]="score" [max]="5" name="score" />
      <p class="text-sm text-base-content/70" role="status">
        {{ score() ? score() + ' of 5 \u2014 thank you.' : 'Select a star to rate.' }}
      </p>
    </div>
  \`,
})
export class RatingBasicDemo {
  protected readonly score = signal(0);
}
`,html:`<div class="flex flex-col gap-2">
  <span class="text-sm font-medium">How easy was it to find your hearing today?</span>
  <scsc-rating [(ngModel)]="score" [max]="5" name="score" />
  <p class="text-sm text-base-content/70" role="status">
    {{ score() ? score() + ' of 5 \u2014 thank you.' : 'Select a star to rate.' }}
  </p>
</div>
`},"rating-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscRating, ScscTextarea } from '@scscourt/design';

@Component({
  selector: 'app-rating-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscRating, ScscTextarea],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <scsc-form-field label="Self-help center visit" required [error]="ratingError()">
        <scsc-rating formControlName="rating" [max]="5" />
      </scsc-form-field>
      <scsc-form-field label="What could we do better?" hint="Optional" for="comments">
        <textarea scsc-textarea id="comments" rows="3" formControlName="comments"></textarea>
      </scsc-form-field>
      <div>
        <scsc-button variant="primary" nativeType="submit">Send feedback</scsc-button>
      </div>
      @if (sent()) {
        <scsc-alert status="success" title="Thank you"
          >Your feedback goes to the self-help center supervisor.</scsc-alert
        >
      }
    </form>
  \`,
})
export class RatingReactiveDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly sent = signal(false);

  protected readonly form = this.fb.group({
    rating: [0, Validators.min(1)],
    comments: [''],
  });

  protected ratingError(): string {
    const c = this.form.controls.rating;
    return c.invalid && c.touched ? 'Choose a star rating.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    this.sent.set(this.form.valid);
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <scsc-form-field label="Self-help center visit" required [error]="ratingError()">
    <scsc-rating formControlName="rating" [max]="5" />
  </scsc-form-field>
  <scsc-form-field label="What could we do better?" hint="Optional" for="comments">
    <textarea scsc-textarea id="comments" rows="3" formControlName="comments"></textarea>
  </scsc-form-field>
  <div>
    <scsc-button variant="primary" nativeType="submit">Send feedback</scsc-button>
  </div>
  @if (sent()) {
    <scsc-alert status="success" title="Thank you"
      >Your feedback goes to the self-help center supervisor.</scsc-alert
    >
  }
</form>
`},"rating-survey":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScscAlert, ScscButton, ScscFormField, ScscRating } from '@scscourt/design';

type Question = 'waitTime' | 'staff' | 'instructions';

@Component({
  selector: 'app-rating-survey-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ScscAlert, ScscButton, ScscFormField, ScscRating],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
      <fieldset class="flex flex-col gap-4">
        <legend class="mb-1 text-sm font-semibold">
          Your visit to the Self-Help Center \xB7 28 Sep 2026
        </legend>
        <!-- Each rating sits under a visible question; the stars alone do not say what is rated. -->
        @for (q of questions; track q.key) {
          <scsc-form-field [label]="q.label" required [error]="error(q.key)">
            <scsc-rating [formControlName]="q.key" [max]="5" />
          </scsc-form-field>
        }
      </fieldset>

      <div>
        <scsc-button variant="primary" nativeType="submit">Send feedback</scsc-button>
      </div>

      @if (average()) {
        <scsc-alert status="success" title="Thank you">
          Your average rating was {{ average() }} of 5. It goes to the center supervisor.
        </scsc-alert>
      }
    </form>
  \`,
})
export class RatingSurveyDemo {
  private readonly fb = inject(FormBuilder);
  protected readonly average = signal('');

  protected readonly questions: { key: Question; label: string }[] = [
    { key: 'waitTime', label: 'How reasonable was the wait?' },
    { key: 'staff', label: 'How helpful was the staff member?' },
    { key: 'instructions', label: 'How clear were the instructions you received?' },
  ];

  protected readonly form = this.fb.nonNullable.group({
    waitTime: [0, Validators.min(1)],
    staff: [0, Validators.min(1)],
    instructions: [0, Validators.min(1)],
  });

  protected error(key: Question): string {
    const c = this.form.controls[key];
    return c.invalid && c.touched ? 'Choose from 1 to 5 stars.' : '';
  }

  protected submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.average.set('');
      return;
    }
    const scores = Object.values(this.form.getRawValue());
    this.average.set((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1));
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="submit()" class="flex max-w-md flex-col gap-4">
  <fieldset class="flex flex-col gap-4">
    <legend class="mb-1 text-sm font-semibold">
      Your visit to the Self-Help Center \xB7 28 Sep 2026
    </legend>
    <!-- Each rating sits under a visible question; the stars alone do not say what is rated. -->
    @for (q of questions; track q.key) {
      <scsc-form-field [label]="q.label" required [error]="error(q.key)">
        <scsc-rating [formControlName]="q.key" [max]="5" />
      </scsc-form-field>
    }
  </fieldset>

  <div>
    <scsc-button variant="primary" nativeType="submit">Send feedback</scsc-button>
  </div>

  @if (average()) {
    <scsc-alert status="success" title="Thank you">
      Your average rating was {{ average() }} of 5. It goes to the center supervisor.
    </scsc-alert>
  }
</form>
`}};var we={slug:`rating`,name:`Rating`,classes:[`ScscRating`],category:`Forms`,whenToUse:["Quick satisfaction feedback after a service interaction: self-help center visits, e-filing, the public portal. The value is 1..`max`, or 0 when untouched.","It is a `ControlValueAccessor` (no `[(value)]` model): `[(ngModel)]` with `FormsModule` standalone, `formControlName` in a `FormGroup`. Use `Validators.min(1)` to require a rating.","Not for displaying an average or a score; use `scsc-stat` or plain text for that.","Keep `max` at 5; more stars make the choice harder without adding information."],demos:[{id:`rating-basic`,title:`Standalone with ngModel`,description:"`[(ngModel)]` on a numeric signal; a status line echoes the choice.",component:q,source:E[`rating-basic`]},{id:`rating-reactive`,title:`With Reactive Forms`,description:"`formControlName` with `Validators.min(1)`, alongside an optional comment.",component:M,source:E[`rating-reactive`]},{id:`rating-survey`,title:`Visit survey`,description:`Three required ratings in one fieldset, each under its own question; the average is reported on submit.`,component:_,source:E[`rating-survey`]}],a11y:['The stars are a native radio group: the wrapper has `role="radiogroup"` and each star is a radio named "1 star" … "5 star". Inside `scsc-form-field` the label (the question) names the group and the hint and error describe it; elsewhere the group is named "Rating out of N".',"Each rating has a radio `name` of its own, so it is one Tab stop and the arrow keys only ever change that rating, never another one on the page.","Pair it with a visible question. Put it in `scsc-form-field`, as the second and third demos do, so the question is announced with the stars; standalone, put the question directly above them.",`The focus ring is drawn around the whole group, because the star shape clips a star’s own outline.`],keyboard:[{keys:`Tab / Shift + Tab`,action:`One stop per rating: focus lands on the chosen star, or on the first star (Shift + Tab: the last) when none is chosen.`},{keys:`ArrowRight / ArrowDown`,action:`Chooses the next star; from the last star it wraps to the first.`},{keys:`ArrowLeft / ArrowUp`,action:`Chooses the previous star; from the first star it wraps to the last.`},{keys:`Space`,action:`Chooses the focused star, such as the one Tab lands on when none is chosen.`}],appMustProvide:["A visible question: the `scsc-form-field` label, which names the group."],related:[`radio`,`number-input`,`form-field`]};export{we as RATING_DOCS};