import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Ka as Ov,Lo as d_,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,cr as el,cs as lc,ha as Eg,ka as Ig,kt as NE,li as ri,ra as Af,sa as C_,va as G_,xs as q,ya as Ga,yi as tl,za as Lf}from"./main-O6OT5H7H.js";import{r as lo}from"./chunk-CHd4pnde.js";var v={"comment-thread-case-notes":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscCommentThread,
  type ScscActor,
  type ScscComment,
  type ScscCommentDraft,
  type ScscCommentEdit,
  type ScscMention,
} from '@scscourt/design';

const ME: ScscActor = { id: 'u-104', name: 'Maria Alvarez', role: 'Civil clerk, Dept. 12' };
const CHEN: ScscActor = { id: 'u-221', name: 'Marcus Chen', role: 'Courtroom clerk, Dept. 12' };
const PATEL: ScscActor = { id: 'u-318', name: 'Priya Patel', role: 'Calendar coordinator' };
const EJ: ScscActor = { id: 'ej-sync', name: 'EJ sync', kind: 'system' };

/** Who can be mentioned. In an app this is a call to the staff directory. */
const STAFF: ScscMention[] = [
  { id: 'u-221', name: 'Marcus Chen', description: 'Courtroom clerk, Dept. 12' },
  { id: 'u-318', name: 'Priya Patel', description: 'Calendar coordinator' },
  { id: 'u-402', name: 'Daniel Okafor', description: 'Research attorney' },
  { id: 'u-517', name: 'Linh Tran', description: 'Interpreter services' },
  { id: 't-cal', name: 'Civil Calendar', kind: 'team', description: 'Calendar team, 4 people' },
];

const hoursAgo = (h: number): string => new Date(Date.now() - h * 3_600_000).toISOString();

const NOTES: ScscComment[] = [
  {
    id: 'n-1',
    author: CHEN,
    body: 'Plaintiff filed a motion to continue the 10/14 case management conference.\\nDeclaration of counsel: https://portal.scscourt.org/cases/24CV012345/filings/118',
    createdAt: hoursAgo(26),
  },
  {
    id: 'n-2',
    parentId: 'n-1',
    author: ME,
    body: 'Thanks @Marcus Chen. Checking Dept. 12 availability with @Priya Patel.',
    mentions: [STAFF[0], STAFF[1]],
    createdAt: hoursAgo(25),
  },
  {
    id: 'n-3',
    parentId: 'n-1',
    author: PATEL,
    body: 'Dept. 12 has openings on 11/4 and 11/18 at 8:30 AM.',
    createdAt: hoursAgo(24),
  },
  {
    id: 'n-4',
    author: EJ,
    body: 'Minute order MO-2231 posted to the register of actions.',
    createdAt: hoursAgo(5),
  },
  {
    id: 'n-5',
    author: ME,
    body: 'Defense counsel called: they oppose the continuance and will file by Friday.\\nAdded to the tentative ruling queue.',
    createdAt: hoursAgo(2),
    editedAt: hoursAgo(1.5),
  },
  {
    id: 'n-6',
    author: ME,
    body: 'Please confirm the Spanish interpreter for the 11/4 hearing.',
    createdAt: hoursAgo(0.2),
    status: 'failed',
  },
];

@Component({
  selector: 'app-comment-thread-case-notes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCommentThread],
  template: \`
    <div class="max-w-2xl">
      <!-- The host owns the list: new comments appear at once as "Sending\u2026" and are confirmed
           by the (simulated) server; the failed one offers Retry. -->
      <scsc-comment-thread
        heading="Case notes \xB7 24CV012345"
        [comments]="notes()"
        [currentUserId]="me.id"
        [mentionSource]="findStaff"
        [maxLength]="1000"
        placeholder="Visible to everyone who works this case"
        (commentAdd)="add($event)"
        (commentEdit)="edit($event)"
        (commentDelete)="remove($event)"
        (commentRetry)="retry($event)"
      />
    </div>
  \`,
})
export class CommentThreadCaseNotesDemo {
  protected readonly me = ME;
  protected readonly notes = signal<ScscComment[]>(NOTES);
  private seq = 0;

  /** Simulated directory search with network latency. */
  protected readonly findStaff = (query: string): Promise<ScscMention[]> =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(STAFF.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))),
        250,
      ),
    );

  protected add(draft: ScscCommentDraft): void {
    const id = \`n-new-\${++this.seq}\`;
    this.notes.update((list) => [
      ...list,
      {
        id,
        author: ME,
        body: draft.body,
        mentions: draft.mentions,
        parentId: draft.parentId,
        createdAt: new Date().toISOString(),
        status: 'pending',
      },
    ]);
    this.confirm(id);
  }

  protected edit(change: ScscCommentEdit): void {
    this.notes.update((list) =>
      list.map((c) =>
        c.id === change.comment.id
          ? { ...c, body: change.body, mentions: change.mentions, editedAt: new Date() }
          : c,
      ),
    );
  }

  protected remove(comment: ScscComment): void {
    this.notes.update((list) =>
      list.filter((c) => c.id !== comment.id && c.parentId !== comment.id),
    );
  }

  protected retry(comment: ScscComment): void {
    this.setStatus(comment.id, 'pending');
    this.confirm(comment.id);
  }

  /** The server accepts the comment a moment later. */
  private confirm(id: string): void {
    setTimeout(() => this.setStatus(id, 'sent'), 900);
  }

  private setStatus(id: string, status: ScscComment['status']): void {
    this.notes.update((list) => list.map((c) => (c.id === id ? { ...c, status } : c)));
  }
}
`,html:`<div class="max-w-2xl">
  <!-- The host owns the list: new comments appear at once as "Sending\u2026" and are confirmed
       by the (simulated) server; the failed one offers Retry. -->
  <scsc-comment-thread
    heading="Case notes \xB7 24CV012345"
    [comments]="notes()"
    [currentUserId]="me.id"
    [mentionSource]="findStaff"
    [maxLength]="1000"
    placeholder="Visible to everyone who works this case"
    (commentAdd)="add($event)"
    (commentEdit)="edit($event)"
    (commentDelete)="remove($event)"
    (commentRetry)="retry($event)"
  />
</div>
`},"comment-thread-edtracker-approval":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscCard,
  ScscCommentThread,
  ScscReviewComposer,
  ScscText,
  type ScscActor,
  type ScscComment,
  type ScscCommentDraft,
  type ScscDecisionSubmit,
  type ScscMention,
  type ScscReviewOption,
} from '@scscourt/design';

const ME: ScscActor = { id: 'u-630', name: 'Angela Ruiz', role: 'Training coordinator' };
const LEE: ScscActor = { id: 'u-712', name: 'Jordan Lee', role: 'Jury services' };
const WONG: ScscActor = { id: 'u-640', name: 'Tomas Wong', role: 'Jury services manager' };

const REVIEWERS: ScscMention[] = [
  { id: 'u-712', name: 'Jordan Lee', description: 'Requester, Jury services' },
  { id: 'u-640', name: 'Tomas Wong', description: 'Jury services manager' },
  { id: 't-hr', name: 'HR Training', kind: 'team', description: 'Reimbursements' },
];

const daysAgo = (d: number): string => new Date(Date.now() - d * 86_400_000).toISOString();

const HISTORY: ScscComment[] = [
  {
    id: 'r-1',
    author: LEE,
    body: 'Submitted for approval. The course meets the elimination-of-bias requirement.',
    createdAt: daysAgo(3),
  },
  {
    id: 'r-2',
    author: WONG,
    decision: 'changes-requested',
    body: 'Please attach the provider\u2019s MCLE approval letter.',
    createdAt: daysAgo(2),
  },
  {
    id: 'r-3',
    parentId: 'r-2',
    author: LEE,
    body: 'Attached: https://edtracker.scscourt.org/requests/TR-2026-0412/attachments/2',
    createdAt: daysAgo(1),
  },
];

@Component({
  selector: 'app-comment-thread-edtracker-approval-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscCommentThread, ScscReviewComposer, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-6">
      <scsc-card title="Implicit Bias in Jury Selection \xB7 3.0 MCLE hours">
        <scsc-text size="sm" tone="muted">
          TR-2026-0412 \xB7 Requested by Jordan Lee, Jury services \xB7 Provider fee $185.00
        </scsc-text>
        <!-- The note is optional to approve and required to reject or request changes. -->
        <scsc-review-composer
          #review
          class="mt-4"
          legend="Your decision"
          [options]="options"
          [mentionSource]="findReviewers"
          [busy]="saving()"
          (decisionSubmit)="record($event, review)"
        />
      </scsc-card>

      <scsc-comment-thread
        heading="Review history"
        [comments]="history()"
        [currentUserId]="me.id"
        [mentionSource]="findReviewers"
        (commentAdd)="add($event)"
      />
    </div>
  \`,
})
export class CommentThreadEdtrackerApprovalDemo {
  protected readonly me = ME;
  protected readonly history = signal<ScscComment[]>(HISTORY);
  protected readonly saving = signal(false);
  private seq = 0;

  protected readonly options: ScscReviewOption[] = [
    { value: 'approved', description: 'Registers the employee and reimburses the fee.' },
    { value: 'changes-requested', description: 'Returns the request to Jordan Lee.' },
    { value: 'rejected', label: 'Deny', description: 'Closes the request.' },
  ];

  protected readonly findReviewers = (query: string): Promise<ScscMention[]> =>
    Promise.resolve(REVIEWERS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())));

  protected record(submit: ScscDecisionSubmit, review: ScscReviewComposer): void {
    this.saving.set(true);
    // Simulated save; the decision is kept as a comment with \`decision\` set.
    setTimeout(() => {
      this.history.update((list) => [
        ...list,
        {
          id: \`r-new-\${++this.seq}\`,
          author: ME,
          decision: submit.decision,
          body: submit.note,
          mentions: submit.mentions,
          createdAt: new Date().toISOString(),
        },
      ]);
      this.saving.set(false);
      review.reset();
    }, 700);
  }

  protected add(draft: ScscCommentDraft): void {
    this.history.update((list) => [
      ...list,
      {
        id: \`r-new-\${++this.seq}\`,
        author: ME,
        body: draft.body,
        mentions: draft.mentions,
        parentId: draft.parentId,
        createdAt: new Date().toISOString(),
      },
    ]);
  }
}
`,html:`<div class="flex max-w-2xl flex-col gap-6">
  <scsc-card title="Implicit Bias in Jury Selection \xB7 3.0 MCLE hours">
    <scsc-text size="sm" tone="muted">
      TR-2026-0412 \xB7 Requested by Jordan Lee, Jury services \xB7 Provider fee $185.00
    </scsc-text>
    <!-- The note is optional to approve and required to reject or request changes. -->
    <scsc-review-composer
      #review
      class="mt-4"
      legend="Your decision"
      [options]="options"
      [mentionSource]="findReviewers"
      [busy]="saving()"
      (decisionSubmit)="record($event, review)"
    />
  </scsc-card>

  <scsc-comment-thread
    heading="Review history"
    [comments]="history()"
    [currentUserId]="me.id"
    [mentionSource]="findReviewers"
    (commentAdd)="add($event)"
  />
</div>
`},"comment-thread-hearing-prep":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscCommentThread,
  type ScscActor,
  type ScscComment,
  type ScscCommentDraft,
  type ScscCommentResolvedChange,
} from '@scscourt/design';

const ME: ScscActor = { id: 'u-221', name: 'Marcus Chen', role: 'Courtroom clerk' };
const PATEL: ScscActor = { id: 'u-318', name: 'Priya Patel', role: 'Calendar coordinator' };
const TRAN: ScscActor = { id: 'u-517', name: 'Linh Tran', role: 'Interpreter services' };
const OKAFOR: ScscActor = { id: 'u-402', name: 'Daniel Okafor', role: 'Research attorney' };

const minutesAgo = (m: number): string => new Date(Date.now() - m * 60_000).toISOString();

const PREP: ScscComment[] = [
  {
    id: 'p-1',
    author: PATEL,
    body: 'Exhibit binders: plaintiff\u2019s are in. Defense binder is still missing Exhibits 12\u201315.',
    createdAt: minutesAgo(320),
  },
  {
    id: 'p-2',
    parentId: 'p-1',
    author: ME,
    body: 'Defense counsel will deliver them by Thursday at noon.',
    createdAt: minutesAgo(290),
  },
  {
    id: 'p-3',
    author: TRAN,
    body: 'Spanish interpreter booked 8:30\u201312:00 in Dept. 12.',
    createdAt: minutesAgo(240),
    resolved: true,
  },
  {
    id: 'p-4',
    parentId: 'p-3',
    author: ME,
    body: 'Confirmed on the calendar, thanks.',
    createdAt: minutesAgo(235),
  },
  {
    id: 'p-5',
    author: OKAFOR,
    body: 'Bench memo on the motion in limine is in the judge\u2019s queue.',
    createdAt: minutesAgo(45),
  },
];

@Component({
  selector: 'app-comment-thread-hearing-prep-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCommentThread],
  template: \`
    <!-- Compact, for a side panel: smaller avatars and buttons, no roles. -->
    <div class="max-w-md">
      <scsc-comment-thread
        heading="Hearing prep \xB7 Dept. 12, Oct 14"
        [headingLevel]="3"
        [comments]="prep()"
        [currentUserId]="me.id"
        resolvable
        compact
        composerLabel="Add a prep note"
        submitLabel="Add note"
        (commentAdd)="add($event)"
        (commentDelete)="remove($event)"
        (resolvedChange)="setResolved($event)"
      />
    </div>
  \`,
})
export class CommentThreadHearingPrepDemo {
  protected readonly me = ME;
  protected readonly prep = signal<ScscComment[]>(PREP);
  private seq = 0;

  protected add(draft: ScscCommentDraft): void {
    this.prep.update((list) => [
      ...list,
      {
        id: \`p-new-\${++this.seq}\`,
        author: ME,
        body: draft.body,
        mentions: draft.mentions,
        parentId: draft.parentId,
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  protected remove(comment: ScscComment): void {
    this.prep.update((list) =>
      list.filter((c) => c.id !== comment.id && c.parentId !== comment.id),
    );
  }

  protected setResolved(change: ScscCommentResolvedChange): void {
    this.prep.update((list) =>
      list.map((c) => (c.id === change.comment.id ? { ...c, resolved: change.resolved } : c)),
    );
  }
}
`,html:`<!-- Compact, for a side panel: smaller avatars and buttons, no roles. -->
<div class="max-w-md">
  <scsc-comment-thread
    heading="Hearing prep \xB7 Dept. 12, Oct 14"
    [headingLevel]="3"
    [comments]="prep()"
    [currentUserId]="me.id"
    resolvable
    compact
    composerLabel="Add a prep note"
    submitLabel="Add note"
    (commentAdd)="add($event)"
    (commentDelete)="remove($event)"
    (resolvedChange)="setResolved($event)"
  />
</div>
`},"comment-thread-markdown":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscCommentBody,
  ScscCommentThread,
  type ScscActor,
  type ScscComment,
  type ScscCommentDraft,
} from '@scscourt/design';
import { ScscMarkdown } from '@scscourt/design/docs';

const ME: ScscActor = { id: 'u-402', name: 'Daniel Okafor', role: 'eFiling analyst' };
const KIM: ScscActor = { id: 'u-455', name: 'Grace Kim', role: 'eFiling supervisor' };

const hoursAgo = (h: number): string => new Date(Date.now() - h * 3_600_000).toISOString();

const THREAD: ScscComment[] = [
  {
    id: 'm-1',
    author: KIM,
    body: [
      'Proposed wording for the **RJ-104** rejection reason:',
      '',
      '- Missing *proof of service* (form \`POS-040\`)',
      '- Filing fee not paid or waived',
      '',
      'See the [filing guide](https://www.courts.ca.gov/forms.htm) for the full list.',
    ].join('\\n'),
    createdAt: hoursAgo(4),
  },
  {
    id: 'm-2',
    parentId: 'm-1',
    author: ME,
    body: 'Looks right. Could we say **fee waiver (FW-001)** so filers know which form to use?',
    createdAt: hoursAgo(3),
  },
];

@Component({
  selector: 'app-comment-thread-markdown-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCommentBody, ScscCommentThread, ScscMarkdown],
  template: \`
    <div class="max-w-2xl">
      <scsc-comment-thread
        heading="Rejection reason wording"
        [comments]="thread()"
        [currentUserId]="me.id"
        placeholder="Markdown is supported"
        (commentAdd)="add($event)"
      >
        <!-- Bodies are Markdown here; scsc-markdown sanitizes the HTML it produces. -->
        <ng-template scscCommentBody let-comment>
          <scsc-markdown [markdown]="comment.body" breaks [headingOffset]="3" />
        </ng-template>
      </scsc-comment-thread>
    </div>
  \`,
})
export class CommentThreadMarkdownDemo {
  protected readonly me = ME;
  protected readonly thread = signal<ScscComment[]>(THREAD);
  private seq = 0;

  protected add(draft: ScscCommentDraft): void {
    this.thread.update((list) => [
      ...list,
      {
        id: \`m-new-\${++this.seq}\`,
        author: ME,
        body: draft.body,
        parentId: draft.parentId,
        createdAt: new Date().toISOString(),
      },
    ]);
  }
}
`,html:`<div class="max-w-2xl">
  <scsc-comment-thread
    heading="Rejection reason wording"
    [comments]="thread()"
    [currentUserId]="me.id"
    placeholder="Markdown is supported"
    (commentAdd)="add($event)"
  >
    <!-- Bodies are Markdown here; scsc-markdown sanitizes the HTML it produces. -->
    <ng-template scscCommentBody let-comment>
      <scsc-markdown [markdown]="comment.body" breaks [headingOffset]="3" />
    </ng-template>
  </scsc-comment-thread>
</div>
`}};var f={id:`u-104`,name:`Maria Alvarez`,role:`Civil clerk, Dept. 12`};var z={id:`u-221`,name:`Marcus Chen`,role:`Courtroom clerk, Dept. 12`};var K={id:`u-318`,name:`Priya Patel`,role:`Calendar coordinator`};var Y={id:`ej-sync`,name:`EJ sync`,kind:`system`};var E=[{id:`u-221`,name:`Marcus Chen`,description:`Courtroom clerk, Dept. 12`},{id:`u-318`,name:`Priya Patel`,description:`Calendar coordinator`},{id:`u-402`,name:`Daniel Okafor`,description:`Research attorney`},{id:`u-517`,name:`Linh Tran`,description:`Interpreter services`},{id:`t-cal`,name:`Civil Calendar`,kind:`team`,description:`Calendar team, 4 people`}];var u=n=>new Date(Date.now()-n*36e5).toISOString();var G=[{id:`n-1`,author:z,body:`Plaintiff filed a motion to continue the 10/14 case management conference.
Declaration of counsel: https://portal.scscourt.org/cases/24CV012345/filings/118`,createdAt:u(26)},{id:`n-2`,parentId:`n-1`,author:f,body:`Thanks @Marcus Chen. Checking Dept. 12 availability with @Priya Patel.`,mentions:[E[0],E[1]],createdAt:u(25)},{id:`n-3`,parentId:`n-1`,author:K,body:`Dept. 12 has openings on 11/4 and 11/18 at 8:30 AM.`,createdAt:u(24)},{id:`n-4`,author:Y,body:`Minute order MO-2231 posted to the register of actions.`,createdAt:u(5)},{id:`n-5`,author:f,body:`Defense counsel called: they oppose the continuance and will file by Friday.
Added to the tentative ruling queue.`,createdAt:u(2),editedAt:u(1.5)},{id:`n-6`,author:f,body:`Please confirm the Spanish interpreter for the 11/4 hearing.`,createdAt:u(.2),status:`failed`}];var C=class n{me=f;notes=q(G);seq=0;findStaff=e=>new Promise(o=>setTimeout(()=>o(E.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),250));add(e){let o=`n-new-${++this.seq}`;this.notes.update(t=>[...t,{id:o,author:f,body:e.body,mentions:e.mentions,parentId:e.parentId,createdAt:new Date().toISOString(),status:`pending`}]),this.confirm(o)}edit(e){this.notes.update(o=>o.map(t=>t.id===e.comment.id?s(r({},t),{body:e.body,mentions:e.mentions,editedAt:new Date}):t))}remove(e){this.notes.update(o=>o.filter(t=>t.id!==e.id&&t.parentId!==e.id))}retry(e){this.setStatus(e.id,`pending`),this.confirm(e.id)}confirm(e){setTimeout(()=>this.setStatus(e,`sent`),900)}setStatus(e,o){this.notes.update(t=>t.map(s$1=>s$1.id===e?s(r({},s$1),{status:o}):s$1))}static ɵfac=function(o){return new(o||n)};static ɵcmp=Af({type:n,selectors:[[`app-comment-thread-case-notes-demo`]],decls:2,vars:4,consts:[[1,`max-w-2xl`],[`heading`,`Case notes · 24CV012345`,`placeholder`,`Visible to everyone who works this case`,3,`commentAdd`,`commentEdit`,`commentDelete`,`commentRetry`,`comments`,`currentUserId`,`mentionSource`,`maxLength`]],template:function(o,t){o&1&&(Ga(0,`div`,0)(1,`scsc-comment-thread`,1),lc(`commentAdd`,function(r){return t.add(r)})(`commentEdit`,function(r){return t.edit(r)})(`commentDelete`,function(r){return t.remove(r)})(`commentRetry`,function(r){return t.retry(r)}),Lf()()),o&2&&(Jb(),Pv(`comments`,t.notes())(`currentUserId`,t.me.id)(`mentionSource`,t.findStaff)(`maxLength`,1e3))},dependencies:[el],encapsulation:2})};var M={id:`u-630`,name:`Angela Ruiz`,role:`Training coordinator`};var U={id:`u-712`,name:`Jordan Lee`,role:`Jury services`};var Q={id:`u-640`,name:`Tomas Wong`,role:`Jury services manager`};var X=[{id:`u-712`,name:`Jordan Lee`,description:`Requester, Jury services`},{id:`u-640`,name:`Tomas Wong`,description:`Jury services manager`},{id:`t-hr`,name:`HR Training`,kind:`team`,description:`Reimbursements`}];var _=n=>new Date(Date.now()-n*864e5).toISOString();var Z=[{id:`r-1`,author:U,body:`Submitted for approval. The course meets the elimination-of-bias requirement.`,createdAt:_(3)},{id:`r-2`,author:Q,decision:`changes-requested`,body:`Please attach the provider’s MCLE approval letter.`,createdAt:_(2)},{id:`r-3`,parentId:`r-2`,author:U,body:`Attached: https://edtracker.scscourt.org/requests/TR-2026-0412/attachments/2`,createdAt:_(1)}];var w=class n{me=M;history=q(Z);saving=q(!1);seq=0;options=[{value:`approved`,description:`Registers the employee and reimburses the fee.`},{value:`changes-requested`,description:`Returns the request to Jordan Lee.`},{value:`rejected`,label:`Deny`,description:`Closes the request.`}];findReviewers=e=>Promise.resolve(X.filter(o=>o.name.toLowerCase().includes(e.toLowerCase())));record(e,o){this.saving.set(!0),setTimeout(()=>{this.history.update(t=>[...t,{id:`r-new-${++this.seq}`,author:M,decision:e.decision,body:e.note,mentions:e.mentions,createdAt:new Date().toISOString()}]),this.saving.set(!1),o.reset()},700)}add(e){this.history.update(o=>[...o,{id:`r-new-${++this.seq}`,author:M,body:e.body,mentions:e.mentions,parentId:e.parentId,createdAt:new Date().toISOString()}])}static ɵfac=function(o){return new(o||n)};static ɵcmp=Af({type:n,selectors:[[`app-comment-thread-edtracker-approval-demo`]],decls:7,vars:6,consts:[[`review`,``],[1,`flex`,`max-w-2xl`,`flex-col`,`gap-6`],[`title`,`Implicit Bias in Jury Selection · 3.0 MCLE hours`],[`size`,`sm`,`tone`,`muted`],[`legend`,`Your decision`,1,`mt-4`,3,`decisionSubmit`,`options`,`mentionSource`,`busy`],[`heading`,`Review history`,3,`commentAdd`,`comments`,`currentUserId`,`mentionSource`]],template:function(o,t){if(o&1){let s=d_();Ga(0,`div`,1)(1,`scsc-card`,2)(2,`scsc-text`,3),G_(3,` TR-2026-0412 · Requested by Jordan Lee, Jury services · Provider fee $185.00 `),Lf(),Ga(4,`scsc-review-composer`,4,0),lc(`decisionSubmit`,function(T){Eg(s);let W=C_(5);return Ig(t.record(T,W))}),Lf()(),Ga(6,`scsc-comment-thread`,5),lc(`commentAdd`,function(T){return t.add(T)}),Lf()()}o&2&&(Jb(4),Pv(`options`,t.options)(`mentionSource`,t.findReviewers)(`busy`,t.saving()),Jb(2),Pv(`comments`,t.history())(`currentUserId`,t.me.id)(`mentionSource`,t.findReviewers))},dependencies:[mN,el,tl,NE],encapsulation:2})};var b={id:`u-221`,name:`Marcus Chen`,role:`Courtroom clerk`};var ee={id:`u-318`,name:`Priya Patel`,role:`Calendar coordinator`};var te={id:`u-517`,name:`Linh Tran`,role:`Interpreter services`};var oe={id:`u-402`,name:`Daniel Okafor`,role:`Research attorney`};var S=n=>new Date(Date.now()-n*6e4).toISOString();var ne=[{id:`p-1`,author:ee,body:`Exhibit binders: plaintiff’s are in. Defense binder is still missing Exhibits 12–15.`,createdAt:S(320)},{id:`p-2`,parentId:`p-1`,author:b,body:`Defense counsel will deliver them by Thursday at noon.`,createdAt:S(290)},{id:`p-3`,author:te,body:`Spanish interpreter booked 8:30–12:00 in Dept. 12.`,createdAt:S(240),resolved:!0},{id:`p-4`,parentId:`p-3`,author:b,body:`Confirmed on the calendar, thanks.`,createdAt:S(235)},{id:`p-5`,author:oe,body:`Bench memo on the motion in limine is in the judge’s queue.`,createdAt:S(45)}];var A=class n{me=b;prep=q(ne);seq=0;add(e){this.prep.update(o=>[...o,{id:`p-new-${++this.seq}`,author:b,body:e.body,mentions:e.mentions,parentId:e.parentId,createdAt:new Date().toISOString()}])}remove(e){this.prep.update(o=>o.filter(t=>t.id!==e.id&&t.parentId!==e.id))}setResolved(e){this.prep.update(o=>o.map(t=>t.id===e.comment.id?s(r({},t),{resolved:e.resolved}):t))}static ɵfac=function(o){return new(o||n)};static ɵcmp=Af({type:n,selectors:[[`app-comment-thread-hearing-prep-demo`]],decls:2,vars:3,consts:[[1,`max-w-md`],[`heading`,`Hearing prep · Dept. 12, Oct 14`,`resolvable`,``,`compact`,``,`composerLabel`,`Add a prep note`,`submitLabel`,`Add note`,3,`commentAdd`,`commentDelete`,`resolvedChange`,`headingLevel`,`comments`,`currentUserId`]],template:function(o,t){o&1&&(Ga(0,`div`,0)(1,`scsc-comment-thread`,1),lc(`commentAdd`,function(r){return t.add(r)})(`commentDelete`,function(r){return t.remove(r)})(`resolvedChange`,function(r){return t.setResolved(r)}),Lf()()),o&2&&(Jb(),Pv(`headingLevel`,3)(`comments`,t.prep())(`currentUserId`,t.me.id))},dependencies:[el],encapsulation:2})};function re(n,e){if(n&1&&uc(0,`scsc-markdown`,3),n&2){let o=e.$implicit;Pv(`markdown`,o.body)(`headingOffset`,3)}}var I={id:`u-402`,name:`Daniel Okafor`,role:`eFiling analyst`};var se={id:`u-455`,name:`Grace Kim`,role:`eFiling supervisor`};var V=n=>new Date(Date.now()-n*36e5).toISOString();var ae=[{id:`m-1`,author:se,body:[`Proposed wording for the **RJ-104** rejection reason:`,``,"- Missing *proof of service* (form `POS-040`)",`- Filing fee not paid or waived`,``,`See the [filing guide](https://www.courts.ca.gov/forms.htm) for the full list.`].join(`
`),createdAt:V(4)},{id:`m-2`,parentId:`m-1`,author:I,body:`Looks right. Could we say **fee waiver (FW-001)** so filers know which form to use?`,createdAt:V(3)}];var D=class n{me=I;thread=q(ae);seq=0;add(e){this.thread.update(o=>[...o,{id:`m-new-${++this.seq}`,author:I,body:e.body,parentId:e.parentId,createdAt:new Date().toISOString()}])}static ɵfac=function(o){return new(o||n)};static ɵcmp=Af({type:n,selectors:[[`app-comment-thread-markdown-demo`]],decls:3,vars:2,consts:[[1,`max-w-2xl`],[`heading`,`Rejection reason wording`,`placeholder`,`Markdown is supported`,3,`commentAdd`,`comments`,`currentUserId`],[`scscCommentBody`,``],[`breaks`,``,3,`markdown`,`headingOffset`]],template:function(o,t){o&1&&(Ga(0,`div`,0)(1,`scsc-comment-thread`,1),lc(`commentAdd`,function(r){return t.add(r)}),Ov(2,re,1,2,`ng-template`,2),Lf()()),o&2&&(Jb(),Pv(`comments`,t.thread())(`currentUserId`,t.me.id))},dependencies:[ri,el,lo],encapsulation:2})};var qe={slug:`comment-thread`,name:`Comment thread`,classes:[`ScscCommentThread`,`ScscCommentBody`,`ScscReviewComposer`],category:`Data Display`,summary:"`scsc-comment-thread` is a discussion on a record, with replies, @mentions, edit and delete for your own comments, resolved threads and optimistic sending. `scsc-review-composer` is the approve / request changes / reject step with a note.",whenToUse:["Notes and discussion attached to a record: case notes between clerks, a hearing-prep checklist, the review history of a training request. For an audit trail of field changes, use the change history; for a live chat, `scsc-chat`.","The host owns the data. Pass `comments` (top-level comments and replies in one list; a reply has `parentId`) and handle `commentAdd`, `commentEdit`, `commentDelete`, `commentRetry` and `resolvedChange` by calling your API and updating the list.",'Optimistic sending: add the comment straight away with `status: "pending"` (shown as "Sending…"), then set `sent` when the server answers, or `failed` (announced, with Retry).',"Replies nest one level. A reply to a reply joins its thread; top-level comments follow `order` (`oldest-first` by default), replies always read oldest first.",'Bodies are plain text: newlines are kept, http(s) and www. links become links (`rel="noopener noreferrer"`, `linkTarget`), and each entry in a comment’s `mentions` becomes a chip. Nothing is parsed as HTML. For Markdown, add an `<ng-template scscCommentBody let-comment>` with `scsc-markdown` from `@scscourt/design/code`.','Edit and Delete appear on comments by `currentUserId`; pass `canEdit` / `canDelete` for other rules (a supervisor, a time limit). Set `resolvable` for Resolve / Reopen on top-level comments, `compact` for side panels and drawers, `composer="none"` for a read-only thread.',"`scsc-review-composer` records a decision with a note: optional for Approve, required for Request changes and Reject (configurable per option). Save the result as a comment with `decision` set, so the thread shows it as a badge."],setup:`import { ScscCommentThread, ScscCommentBody, ScscReviewComposer } from '@scscourt/design';

// icons the thread and composer draw (the curated set includes them all)
provideScscIcons(SCSC_ICONS);

// Spanish (or any language): provide the label pack
{ provide: SCSC_COMMENT_LABELS, useValue: signal(SCSC_COMMENT_LABELS_ES) }`,demos:[{id:`comment-thread-case-notes`,title:`Case notes between clerks`,description:'The signed-in clerk can edit and delete her own notes. New notes appear at once as "Sending…" and are confirmed by a simulated server; the last one failed and offers Retry. Type `@` in any box to mention staff (a 250 ms directory search), and watch the 1,000-character count.',component:C,source:v[`comment-thread-case-notes`]},{id:`comment-thread-hearing-prep`,title:`Hearing-prep checklist (compact, resolvable)`,description:"`resolvable` adds Resolve / Reopen to each top-level note; a resolved thread shows a badge and no Reply. `compact` fits a side panel. The box has its own label and button text.",component:A,source:v[`comment-thread-hearing-prep`]},{id:`comment-thread-edtracker-approval`,title:`EdTracker approval with a decision`,description:'`scsc-review-composer` with described options and a relabelled "Deny". Reject and Request changes need a note; submitting shows `busy` for a moment, then the decision joins the review history as a comment with a badge, and the composer is `reset()`.',component:w,source:v[`comment-thread-edtracker-approval`]},{id:`comment-thread-markdown`,title:`Markdown bodies`,description:"A `scscCommentBody` template renders each body with `scsc-markdown` (with `breaks`, and headings shifted under the page’s own). The thread still provides the list, names, times and actions.",component:D,source:v[`comment-thread-markdown`]}],keyboard:[{keys:`Tab / Shift + Tab`,action:`Moves through the links in comments, each comment’s actions (Reply, Resolve, Retry, Edit, Delete), and the comment boxes. Comments themselves are not Tab stops.`},{keys:`Enter / Space`,action:`Activates the focused action button.`},{keys:`Ctrl + Enter (⌘ + Enter)`,action:`In any comment box (new comment, reply, edit) and in the review note: sends. The shortcut is shown under the box and read with it.`},{keys:`Escape`,action:`In a reply or edit box: cancels it and returns focus to Reply or Edit. On the delete confirmation: backs out and returns focus to Delete. With the mention list open, closes only the list.`},{keys:`@ (in a comment box)`,action:`Opens the mention list; see [Mentions](/docs/components/mentions) for its keys (ArrowUp / ArrowDown, Home / End, Enter or Tab to insert).`},{keys:`ArrowUp / ArrowDown (review composer)`,action:`Moves between the decisions, like any radio group.`}],aria:['The thread is a `<section>` named by its heading (`heading`, at `headingLevel`), or by "Comments" when `heading` is `""`. Comments are `<article>`s in a `role="list"` list; each is named by its author and time (`aria-labelledby`). Replies are a nested list named "Replies to <author>".','Times are `<time datetime>` with the ISO value; the text is relative ("3 hours ago", locale-aware) with the full date and time as a tooltip. An edited comment says "Edited <date>" to screen readers.','Action buttons carry visible text and are described by the author’s name (`aria-describedby`), so a list of buttons reads "Edit, Maria Alvarez". The delete confirmation is a `role="group"` named by its question.','Each comment box has a visible `<label>`; it is described by the error (when shown), the Ctrl+Enter hint and the character count, and has `aria-invalid` after an empty submit. The count is a visually hidden sentence ("120 of 1,000 characters used").',"The review composer’s decisions are native radios in a `<fieldset>` with a `<legend>`; a missing decision is described on the fieldset. The note gets `aria-required` when the chosen decision needs one, and its error is linked with `aria-describedby`. While `busy`, the button is `aria-disabled` and `aria-busy` (not `disabled`, so focus stays on it).","Announced through `ScscAnnouncer`: comment added, reply added, comment updated, comment deleted, thread resolved or reopened; a comment moving to `failed` (assertively); and new comments by other people (when `currentUserId` is set)."],appMustProvide:["The server is the source of truth for permissions. `currentUserId`, `canEdit` and `canDelete` only decide which buttons show; check every edit and delete on the server too.","Mention notifications are the app’s job. `commentAdd`, `commentEdit` and `decisionSubmit` carry the `mentions` still present in the text; send the notifications (and resolve team mentions) on the server.","Stable comment `id`s and a `createdAt` for each comment; keep the same id when an optimistic comment is confirmed, so focus and the list do not jump.",'A `heading` that fits the page ("Case notes", "Review history") at the right `headingLevel` for the page outline.',"An accessible `mentionSource` result: short names, with the role or department in `description`.",'Translations: provide `SCSC_COMMENT_LABELS` (Spanish ships as `SCSC_COMMENT_LABELS_ES`), or override a few strings per instance with `labels`. Shared words ("Loading", "No results") come from `SCSC_LABELS`.',"Content in a `scscCommentBody` template is yours: only bind user text as HTML through a sanitizer, as `scsc-markdown` does."],a11y:['Comment text is built as text nodes, links and chips, never as HTML, so a comment can’t inject markup or script. Links always get `rel="noopener noreferrer"`; with `linkTarget="_blank"` (the default) they also say "(opens in a new tab)" to screen readers, and they are underlined, not colour alone.',`Focus never falls to the page: closing a reply or edit box returns it to Reply or Edit; the delete confirmation opens on Cancel (so Enter never deletes by accident); after a deletion, or when the comment you were in disappears, focus moves to the next comment (else the previous one, else the comment box).`,'Status is never colour alone: decisions, Resolved, "Sending…" and "Not sent" are words with an icon. A pending comment is dimmed with a dashed border and slightly lighter text that stays above 4.5:1; muted text never goes below `text-base-content/70`.',"Action buttons are at least 32 px high (24 px with `compact` or in compact density) with an enlarged hit area (`scsc-hit`). The reply box and delete confirmation fade in with the motion tokens, and reduced motion shortens the fade."],related:[`mentions`,`markdown`,`chat`,`timeline`,`textarea`]};export{qe as COMMENT_THREAD_DOCS};