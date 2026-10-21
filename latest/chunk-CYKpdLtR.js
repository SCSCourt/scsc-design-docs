import{$o as jI,Ai as vA,E as Bue,Es as sD,Gs as zS,In as Xz,K as Fi,Ma as JT,Mr as jn,Na as Jb,Q as Gue,Xa as Pv,Y as Fs,Yo as iD,Zo as i_,_s as o_,bn as Vz,bo as Y_,cs as lc,ds as nD,ea as zz,ii as qo,ks as t_,kt as NE,m as Aa,nt as IA,oi as que,pi as sn,ra as Af,rs as k,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,yr as gn,za as Lf}from"./main-O6OT5H7H.js";function $(o,t){o&1&&G_(0),o&2&&$f(` Hand-off goes to `,t,`. `)}var ee=[{id:`u-104`,name:`Maria Alvarez`,description:`Civil clerk, Dept. 12`},{id:`u-221`,name:`Marcus Chen`,description:`Courtroom clerk, Dept. 12`},{id:`u-233`,name:`Rosa Nguyen`,description:`Courtroom clerk, Dept. 5`},{id:`u-248`,name:`Samuel Ortiz`,description:`Courtroom clerk, Dept. 7`}];var N=class o{handoff=q(``);assignee=q(``);findClerks=t=>Promise.resolve(ee.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())));static ɵfac=function(n){return new(n||o)};static ɵcmp=Af({type:o,selectors:[[`app-mentions-input-demo`]],decls:5,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`label`,`Hand-off note`,`hint`,`e.g. Over to @Marcus Chen for the 2 PM calendar`],[`type`,`text`,`scsc-input`,``,`scscMentions`,``,3,`ngModelChange`,`mentionInsert`,`mentionSource`,`ngModel`],[`size`,`sm`,`role`,`status`]],template:function(n,e){if(n&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`input`,2),HS(),sD(`ngModelChange`,function(s){return Y_(e.handoff,s)||(e.handoff=s),s}),lc(`mentionInsert`,function(s){return e.assignee.set(s.name)}),Lf()(),Ga(3,`scsc-text`,3),JT(4,$,1,1),Lf()()),n&2){let c;Jb(2),Pv(`mentionSource`,e.findClerks),iD(`ngModel`,e.handoff),zS(),Jb(2),t_((c=e.assignee())?4:-1,c)}},dependencies:[Gue,IA,Hue,zz,Vn,qo,gn,NE],encapsulation:2})};var te=(o,t)=>t.id;function ne(o,t){if(o&1&&(Ga(0,`scsc-badge`,5),G_(1),Lf()),o&2){let n=t.$implicit;Jb(),nD(n.name)}}function oe(o,t){o&1&&(Ga(0,`scsc-text`,4),G_(1,`nobody yet`),Lf())}function se(o,t){o&1&&G_(0),o&2&&$f(` Sent. Notified `,t,`. `)}var ie=[{id:`u-221`,name:`Marcus Chen`,description:`Courtroom clerk, Dept. 12`},{id:`u-318`,name:`Priya Patel`,description:`Calendar coordinator`},{id:`u-402`,name:`Daniel Okafor`,description:`Research attorney`},{id:`u-517`,name:`Linh Tran`,description:`Interpreter services`},{id:`u-104`,name:`Maria Alvarez`,description:`Civil clerk, Dept. 12`},{id:`t-cal`,name:`Civil Calendar`,kind:`team`,description:`Calendar team, 4 people`}];var A=class o{form=new Aa({message:new Fi(``,{nonNullable:!0,validators:Fs.required})});mentioned=q([]);sent=q(``);error=q(``);findStaff=t=>Promise.resolve(ie.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())));send(){if(this.form.invalid){this.error.set(`Write a message before sending.`);return}this.error.set(``),this.sent.set(this.mentioned().map(t=>t.name).join(`, `)||`nobody`),this.form.reset()}static ɵfac=function(n){return new(n||o)};static ɵcmp=Af({type:o,selectors:[[`app-mentions-reactive-form-demo`]],decls:14,vars:6,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-3`,3,`ngSubmit`,`formGroup`],[`label`,`Message to the calendar team`,`hint`,`Type @ to mention someone. They are notified when you send.`,`required`,``,3,`error`],[`scsc-textarea`,``,`scscMentions`,``,`rows`,`4`,`formControlName`,`message`,3,`mentionsChange`,`input`,`mentionSource`,`mentions`],[1,`flex`,`min-h-6`,`flex-wrap`,`items-center`,`gap-2`],[`size`,`sm`,`tone`,`muted`],[`soft`,``,`tone`,`primary`,`size`,`sm`],[`nativeType`,`submit`],[`size`,`sm`,`role`,`status`]],template:function(n,e){if(n&1&&(Ga(0,`form`,0),lc(`ngSubmit`,function(){return e.send()}),Ga(1,`scsc-form-field`,1)(2,`textarea`,2),HS(),sD(`mentionsChange`,function(s){return Y_(e.mentioned,s)||(e.mentioned=s),s}),lc(`input`,function(){return e.error.set(``)}),Lf()(),Ga(3,`div`,3)(4,`scsc-text`,4),G_(5,`Will notify:`),Lf(),o_(6,ne,2,1,`scsc-badge`,5,te,!1,oe,2,0,`scsc-text`,4),Lf(),Ga(9,`div`)(10,`scsc-button`,6),G_(11,`Send message`),Lf()(),Ga(12,`scsc-text`,7),JT(13,se,1,1),Lf()()),n&2){let c;Pv(`formGroup`,e.form),Jb(),Pv(`error`,e.error()),Jb(),Pv(`mentionSource`,e.findStaff),iD(`mentions`,e.mentioned),zS(),Jb(4),i_(e.mentioned()),Jb(7),t_((c=e.sent())?13:-1,c)}},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,jn,sn,Vn,gn,NE,vA],encapsulation:2})};var re=[{id:`t-jury`,name:`Jury Services`,kind:`team`,description:`Summons and panels`},{id:`t-interp`,name:`Interpreter Services`,kind:`team`,description:`14 interpreters`},{id:`u-517`,name:`Linh Tran`,description:`Interpreter coordinator`},{id:`u-640`,name:`Tomas Wong`,description:`Jury services manager`},{id:`u-712`,name:`Jordan Lee`,description:`Jury services`}];var z=class o{note=q(`Need 40 jurors for Dept. 5 on 11/3. cc `);mentioned=q([]);searchDirectory=t=>k(re.filter(n=>n.name.toLowerCase().includes(t.toLowerCase()))).pipe(jI(200));ids(){return this.mentioned().map(t=>`${t.kind??`user`}:${t.id}`).join(`, `)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Af({type:o,selectors:[[`app-mentions-token-format-demo`]],decls:10,vars:5,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-3`],[`label`,`Panel request note`,`hint`,`Mention people or teams with @`],[`scsc-textarea`,``,`scscMentions`,``,`rows`,`3`,`mentionFormat`,`token`,3,`ngModelChange`,`mentionsChange`,`mentionSource`,`ngModel`,`mentions`],[`size`,`sm`,`bold`,``],[`size`,`sm`,1,`block`,`font-mono`,`break-all`],[`size`,`sm`,`tone`,`muted`]],template:function(n,e){n&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`textarea`,2),HS(),sD(`ngModelChange`,function(s){return Y_(e.note,s)||(e.note=s),s})(`mentionsChange`,function(s){return Y_(e.mentioned,s)||(e.mentioned=s),s}),Lf()(),Ga(3,`div`)(4,`scsc-text`,3),G_(5,`Saved text`),Lf(),Ga(6,`scsc-text`,4),G_(7),Lf()(),Ga(8,`scsc-text`,5),G_(9),Lf()()),n&2&&(Jb(2),Pv(`mentionSource`,e.searchDirectory),iD(`ngModel`,e.note)(`mentions`,e.mentioned),zS(),Jb(5),nD(e.note()||`—`),Jb(2),$f(` Ids: `,e.ids()||`none`,` `))},dependencies:[Gue,IA,Hue,zz,Vn,gn,NE,vA],encapsulation:2})};var E={"mentions-input":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscFormField,
  ScscInput,
  ScscMentions,
  ScscText,
  type ScscMention,
} from '@scscourt/design';

const CLERKS: ScscMention[] = [
  { id: 'u-104', name: 'Maria Alvarez', description: 'Civil clerk, Dept. 12' },
  { id: 'u-221', name: 'Marcus Chen', description: 'Courtroom clerk, Dept. 12' },
  { id: 'u-233', name: 'Rosa Nguyen', description: 'Courtroom clerk, Dept. 5' },
  { id: 'u-248', name: 'Samuel Ortiz', description: 'Courtroom clerk, Dept. 7' },
];

@Component({
  selector: 'app-mentions-input-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscInput, ScscMentions, ScscText],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <!-- On a single-line input the field becomes a combobox (role, aria-expanded). -->
      <scsc-form-field label="Hand-off note" hint="e.g. Over to @Marcus Chen for the 2 PM calendar">
        <input
          type="text"
          scsc-input
          scscMentions
          [mentionSource]="findClerks"
          [(ngModel)]="handoff"
          (mentionInsert)="assignee.set($event.name)"
        />
      </scsc-form-field>
      <scsc-text size="sm" role="status">
        @if (assignee(); as name) {
          Hand-off goes to {{ name }}.
        }
      </scsc-text>
    </div>
  \`,
})
export class MentionsInputDemo {
  protected readonly handoff = signal('');
  protected readonly assignee = signal('');

  protected readonly findClerks = (query: string): Promise<ScscMention[]> =>
    Promise.resolve(CLERKS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())));
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <!-- On a single-line input the field becomes a combobox (role, aria-expanded). -->
  <scsc-form-field label="Hand-off note" hint="e.g. Over to @Marcus Chen for the 2 PM calendar">
    <input
      type="text"
      scsc-input
      scscMentions
      [mentionSource]="findClerks"
      [(ngModel)]="handoff"
      (mentionInsert)="assignee.set($event.name)"
    />
  </scsc-form-field>
  <scsc-text size="sm" role="status">
    @if (assignee(); as name) {
      Hand-off goes to {{ name }}.
    }
  </scsc-text>
</div>
`},"mentions-reactive-form":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscBadge,
  ScscButton,
  ScscFormField,
  ScscMentions,
  ScscText,
  ScscTextarea,
  type ScscMention,
} from '@scscourt/design';

const STAFF: ScscMention[] = [
  { id: 'u-221', name: 'Marcus Chen', description: 'Courtroom clerk, Dept. 12' },
  { id: 'u-318', name: 'Priya Patel', description: 'Calendar coordinator' },
  { id: 'u-402', name: 'Daniel Okafor', description: 'Research attorney' },
  { id: 'u-517', name: 'Linh Tran', description: 'Interpreter services' },
  { id: 'u-104', name: 'Maria Alvarez', description: 'Civil clerk, Dept. 12' },
  { id: 't-cal', name: 'Civil Calendar', kind: 'team', description: 'Calendar team, 4 people' },
];

@Component({
  selector: 'app-mentions-reactive-form-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscBadge,
    ScscButton,
    ScscFormField,
    ScscMentions,
    ScscText,
    ScscTextarea,
  ],
  template: \`
    <form [formGroup]="form" (ngSubmit)="send()" class="flex max-w-lg flex-col gap-3">
      <!-- scsc-form-field labels the textarea and describes it with the hint and error;
           scscMentions adds the people list without touching either. -->
      <scsc-form-field
        label="Message to the calendar team"
        hint="Type @ to mention someone. They are notified when you send."
        [error]="error()"
        required
      >
        <textarea
          scsc-textarea
          scscMentions
          rows="4"
          formControlName="message"
          [mentionSource]="findStaff"
          [(mentions)]="mentioned"
          (input)="error.set('')"
        ></textarea>
      </scsc-form-field>

      <div class="flex min-h-6 flex-wrap items-center gap-2">
        <scsc-text size="sm" tone="muted">Will notify:</scsc-text>
        @for (m of mentioned(); track m.id) {
          <scsc-badge soft tone="primary" size="sm">{{ m.name }}</scsc-badge>
        } @empty {
          <scsc-text size="sm" tone="muted">nobody yet</scsc-text>
        }
      </div>

      <div>
        <scsc-button nativeType="submit">Send message</scsc-button>
      </div>
      <scsc-text size="sm" role="status">
        @if (sent(); as names) {
          Sent. Notified {{ names }}.
        }
      </scsc-text>
    </form>
  \`,
})
export class MentionsReactiveFormDemo {
  protected readonly form = new FormGroup({
    message: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });
  protected readonly mentioned = signal<ScscMention[]>([]);
  protected readonly sent = signal('');
  protected readonly error = signal('');

  protected readonly findStaff = (query: string): Promise<ScscMention[]> =>
    Promise.resolve(STAFF.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())));

  protected send(): void {
    if (this.form.invalid) {
      this.error.set('Write a message before sending.');
      return;
    }
    this.error.set('');
    this.sent.set(
      this.mentioned()
        .map((m) => m.name)
        .join(', ') || 'nobody',
    );
    // reset() is a form write: scscMentions sees the text go and clears \`mentioned\`.
    this.form.reset();
  }
}
`,html:`<form [formGroup]="form" (ngSubmit)="send()" class="flex max-w-lg flex-col gap-3">
  <!-- scsc-form-field labels the textarea and describes it with the hint and error;
       scscMentions adds the people list without touching either. -->
  <scsc-form-field
    label="Message to the calendar team"
    hint="Type @ to mention someone. They are notified when you send."
    [error]="error()"
    required
  >
    <textarea
      scsc-textarea
      scscMentions
      rows="4"
      formControlName="message"
      [mentionSource]="findStaff"
      [(mentions)]="mentioned"
      (input)="error.set('')"
    ></textarea>
  </scsc-form-field>

  <div class="flex min-h-6 flex-wrap items-center gap-2">
    <scsc-text size="sm" tone="muted">Will notify:</scsc-text>
    @for (m of mentioned(); track m.id) {
      <scsc-badge soft tone="primary" size="sm">{{ m.name }}</scsc-badge>
    } @empty {
      <scsc-text size="sm" tone="muted">nobody yet</scsc-text>
    }
  </div>

  <div>
    <scsc-button nativeType="submit">Send message</scsc-button>
  </div>
  <scsc-text size="sm" role="status">
    @if (sent(); as names) {
      Sent. Notified {{ names }}.
    }
  </scsc-text>
</form>
`},"mentions-token-format":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscFormField,
  ScscMentions,
  ScscText,
  ScscTextarea,
  type ScscMention,
} from '@scscourt/design';
import { delay, of, type Observable } from 'rxjs';

const DIRECTORY: ScscMention[] = [
  { id: 't-jury', name: 'Jury Services', kind: 'team', description: 'Summons and panels' },
  { id: 't-interp', name: 'Interpreter Services', kind: 'team', description: '14 interpreters' },
  { id: 'u-517', name: 'Linh Tran', description: 'Interpreter coordinator' },
  { id: 'u-640', name: 'Tomas Wong', description: 'Jury services manager' },
  { id: 'u-712', name: 'Jordan Lee', description: 'Jury services' },
];

@Component({
  selector: 'app-mentions-token-format-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscMentions, ScscText, ScscTextarea],
  template: \`
    <div class="flex max-w-lg flex-col gap-3">
      <!-- Token format keeps each id in the saved text, so the server can notify exactly the
           people (and teams) mentioned, even if two share a name. -->
      <scsc-form-field label="Panel request note" hint="Mention people or teams with @">
        <textarea
          scsc-textarea
          scscMentions
          rows="3"
          mentionFormat="token"
          [mentionSource]="searchDirectory"
          [(ngModel)]="note"
          [(mentions)]="mentioned"
        ></textarea>
      </scsc-form-field>
      <div>
        <scsc-text size="sm" bold>Saved text</scsc-text>
        <scsc-text size="sm" class="block font-mono break-all">{{ note() || '\u2014' }}</scsc-text>
      </div>
      <scsc-text size="sm" tone="muted"> Ids: {{ ids() || 'none' }} </scsc-text>
    </div>
  \`,
})
export class MentionsTokenFormatDemo {
  protected readonly note = signal('Need 40 jurors for Dept. 5 on 11/3. cc ');
  protected readonly mentioned = signal<ScscMention[]>([]);

  /** An Observable source: the latest query wins, earlier answers are dropped. */
  protected readonly searchDirectory = (query: string): Observable<ScscMention[]> =>
    of(DIRECTORY.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))).pipe(
      delay(200),
    );

  protected ids(): string {
    return this.mentioned()
      .map((m) => \`\${m.kind ?? 'user'}:\${m.id}\`)
      .join(', ');
  }
}
`,html:`<div class="flex max-w-lg flex-col gap-3">
  <!-- Token format keeps each id in the saved text, so the server can notify exactly the
       people (and teams) mentioned, even if two share a name. -->
  <scsc-form-field label="Panel request note" hint="Mention people or teams with @">
    <textarea
      scsc-textarea
      scscMentions
      rows="3"
      mentionFormat="token"
      [mentionSource]="searchDirectory"
      [(ngModel)]="note"
      [(mentions)]="mentioned"
    ></textarea>
  </scsc-form-field>
  <div>
    <scsc-text size="sm" bold>Saved text</scsc-text>
    <scsc-text size="sm" class="block font-mono break-all">{{ note() || '\u2014' }}</scsc-text>
  </div>
  <scsc-text size="sm" tone="muted"> Ids: {{ ids() || 'none' }} </scsc-text>
</div>
`}};var Ne={slug:`mentions`,name:`Mentions`,classes:[`ScscMentions`],category:`Forms`,whenToUse:["Add `scscMentions` to a `<textarea>` or text `<input>` where people write to or about colleagues: case notes, hand-off notes, review comments. Comment boxes in `scsc-comment-thread` and `scsc-review-composer` already have it.",'Give it a `mentionSource`: a function of the text typed after `@` that returns a Promise or an Observable of `ScscMention` (people, or teams with `kind: "team"`). It is called after a 150 ms pause (`mentionDebounce`), with `""` right after the trigger for suggestions; the latest query wins.',"`[(mentions)]` (or `(mentionsChange)`) is the list of people still mentioned in the text, in order. Deleting or changing a mention’s text drops it; form writes such as `reset()` are followed too. `(mentionInsert)` fires for each pick.",'`mentionFormat="text"` (default) inserts `@Maria Alvarez `. `mentionFormat="token"` inserts `@[Maria Alvarez](user:u-104) `, which keeps the id in the saved text for exact notifications; `parseCommentBody()` and the comment thread render both forms as chips.',"The directive sits on the native element, so `ngModel`, `formControlName`, `scsc-textarea`, `scsc-input` and `scsc-form-field` keep working: an insertion fires a normal `input` event (through the browser’s editing command where there is one, so Undo works).","A trigger only counts at the start of the text or after a space or an opening bracket, so e-mail addresses never open the list. Change it with `mentionTrigger` (for example `#` for case references)."],demos:[{id:`mentions-reactive-form`,title:`Reactive form with notifications`,description:"`scsc-form-field` labels and describes the textarea; `scscMentions` adds the list. The badges follow `[(mentions)]`, including after the form is reset on send.",component:A,source:E[`mentions-reactive-form`]},{id:`mentions-token-format`,title:`Token format with an Observable source`,description:'`mentionFormat="token"` with `ngModel`: the saved text keeps each id (`@[Jury Services](team:t-jury)`). The source is an Observable with 200 ms latency; teams show a group icon and "Team".',component:z,source:E[`mentions-token-format`]},{id:`mentions-input`,title:`Single-line input`,description:'On an `<input>` the field becomes a combobox (`role="combobox"`, `aria-expanded`). `(mentionInsert)` reports the pick.',component:N,source:E[`mentions-input`]}],keyboard:[{keys:`@ (the trigger) and letters`,action:`Opens the list at the caret, with suggestions right after the trigger and matches as you type. Typing a space ends the mention and closes the list.`},{keys:`ArrowDown / ArrowUp`,action:`With the list open: moves the highlight (focus stays in the field). With it closed: moves the caret between lines, as usual.`},{keys:`Home / End`,action:`With the list open: highlights the first / last person. Otherwise: moves the caret.`},{keys:`Enter or Tab`,action:`Inserts the highlighted person followed by a space and closes the list. With the list closed they do what they always do (new line, next field).`},{keys:`Escape`,action:`Closes the list without inserting, and it stays closed for that mention. An enclosing dialog, drawer or edit box is not closed.`},{keys:`Shift + Enter / Shift + Tab / Ctrl + Enter`,action:`Close the list and do their usual job: a new line, the previous field, or the form’s send shortcut.`}],aria:['The field keeps focus and points at the highlighted person with `aria-activedescendant`; it has `aria-autocomplete="list"`, `aria-haspopup="listbox"`, and `aria-controls` pointing at the list while it shows. The list is a `role="listbox"` named "People to mention" (`mentionLabel`), with `role="option"` items and `aria-selected` on the highlighted one.','On an `<input>`, the field is `role="combobox"` with `aria-expanded`.','On a `<textarea>`, ARIA in HTML allows no role and ARIA 1.2 gives the textbox role no `aria-expanded`, so neither is set (axe would flag them). A textarea may carry `aria-autocomplete`, `aria-haspopup`, `aria-controls` and `aria-activedescendant`, and it does. Because not every screen reader follows `aria-activedescendant` on a textbox, the textarea also announces the result count with the first person ("2 results. Maria Alvarez, 1 of 2") and each person the highlight moves to.',`While results load, or when nobody matches, the popup shows "Loading" or "No results" as text instead of an empty listbox, and those states are announced. A failing source shows and announces "Suggestions could not be loaded."`,'After a pick, "Mentioned Maria Alvarez" is announced. The field’s own label, hint and error (from `scsc-form-field`) are left untouched.'],appMustProvide:['A label for the field: `scsc-form-field`, a `<label for>`, or `aria-label`. Consider a hint such as "Type @ to mention someone".',"A `mentionSource` that searches the right directory and returns quickly; include the role or department in `description` so people with the same name can be told apart.",'Notifications: the directive only tracks who is mentioned. Send notifications from the server when the text is saved (use `mentionFormat="token"` or the `mentions` list to know exactly who).','Translated strings through `SCSC_COMMENT_LABELS` (list name, "Mentioned …", "Team") and `SCSC_LABELS` ("Loading", "No results", result counts).'],a11y:[`Follows the WAI-ARIA APG combobox-with-listbox pattern on the text field: focus never leaves the field, and nothing in the list is a Tab stop. A press on the list does not blur the field.`,`The list opens at the trigger character (measured with an invisible mirror of the field), below the line, or above it when there is no room, and is kept inside the viewport. It fades in with the motion tokens; reduced motion shortens the fade.`,`Each suggestion row is at least 40 px high. The highlighted row is filled and its text changes colour, so it is not shown by colour alone; team entries also say "Team".`,`IME composition is respected: keys pressed while composing (Japanese, Chinese, Korean input) are left to the input method.`],related:[`comment-thread`,`textarea`,`combobox`,`form-field`]};export{Ne as MENTIONS_DOCS};