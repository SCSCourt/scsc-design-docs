import{Hs as y_,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Xa as Pv,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,i as $R,ka as Ig,ks as t_,pi as sn,ra as Af,va as G_,ws as r_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var g={"chat-basic":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscChat, ScscChatMessage } from '@scscourt/design';

@Component({
  selector: 'app-chat-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscChat],
  template: \`
    <scsc-chat
      class="h-96 max-w-md"
      [messages]="messages()"
      [typing]="thinking()"
      placeholder="Ask about your case\u2026"
      (send)="ask($event)"
    />
  \`,
})
export class ChatBasicDemo {
  protected readonly messages = signal<ScscChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      author: 'Court Assistant',
      text: 'How can I help with your case today?',
      timestamp: '9:01 AM',
    },
    { id: 2, role: 'user', author: 'You', text: 'When is my next hearing?', timestamp: '9:02 AM' },
    {
      id: 3,
      role: 'assistant',
      author: 'Court Assistant',
      text: 'Your next hearing is October 14, 2026 at 9:00 AM in Dept. 21.',
      timestamp: '9:02 AM',
    },
  ]);

  protected readonly thinking = signal(false);

  /** The host owns the thread: append the user's text, then the reply when it arrives. */
  protected ask(text: string): void {
    this.messages.update((m) => [...m, { id: Date.now(), role: 'user', author: 'You', text }]);
    this.thinking.set(true);
    setTimeout(() => {
      this.messages.update((m) => [
        ...m,
        {
          id: Date.now(),
          role: 'assistant',
          author: 'Court Assistant',
          text: 'I can look that up. Which case number is this about?',
        },
      ]);
      this.thinking.set(false);
    }, 900);
  }
}
`,html:`<scsc-chat
  class="h-96 max-w-md"
  [messages]="messages()"
  [typing]="thinking()"
  placeholder="Ask about your case\u2026"
  (send)="ask($event)"
/>
`},"chat-suggestions":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscChat, ScscChatMessage } from '@scscourt/design';

@Component({
  selector: 'app-chat-suggestions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscChat],
  template: \`
    <div class="flex max-w-md flex-col gap-3">
      <scsc-chat
        class="h-80"
        [messages]="messages()"
        [typing]="thinking()"
        placeholder="Ask the Self-Help Center\u2026"
        (send)="ask($event)"
      />
      <!-- Suggestions live outside the chat and go through the same handler as typed text. -->
      @if (messages().length === 1) {
        <div class="flex flex-wrap gap-2" role="group" aria-label="Suggested questions">
          @for (q of suggestions; track q) {
            <scsc-button size="sm" variant="neutral" outline (click)="ask(q)">{{ q }}</scsc-button>
          }
        </div>
      }
    </div>
  \`,
})
export class ChatSuggestionsDemo {
  protected readonly suggestions = [
    'How do I get a fee waiver?',
    'Where do I file a small claims case?',
    'Can I get an interpreter?',
  ];

  private readonly answers: Record<string, string> = {
    'How do I get a fee waiver?':
      'File form FW-001 with your first papers. The clerk decides within 5 court days.',
    'Where do I file a small claims case?':
      'Online through e-filing, or in person at the Downtown Superior Court, 191 N. First St.',
    'Can I get an interpreter?':
      'Yes, at no cost. Ask for one when you file, or call the Interpreter Office at least 5 days before.',
  };

  protected readonly messages = signal<ScscChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      author: 'Self-Help Center',
      text: 'Hi! Ask a question, or pick one of the common ones below.',
    },
  ]);
  protected readonly thinking = signal(false);

  protected ask(text: string): void {
    this.messages.update((m) => [...m, { id: m.length + 1, role: 'user', author: 'You', text }]);
    this.thinking.set(true);
    // Replace with your assistant or support API.
    setTimeout(() => {
      this.messages.update((m) => [
        ...m,
        {
          id: m.length + 1,
          role: 'assistant',
          author: 'Self-Help Center',
          text: this.answers[text] ?? 'A self-help attorney will reply by email within one day.',
        },
      ]);
      this.thinking.set(false);
    }, 900);
  }
}
`,html:`<div class="flex max-w-md flex-col gap-3">
  <scsc-chat
    class="h-80"
    [messages]="messages()"
    [typing]="thinking()"
    placeholder="Ask the Self-Help Center\u2026"
    (send)="ask($event)"
  />
  <!-- Suggestions live outside the chat and go through the same handler as typed text. -->
  @if (messages().length === 1) {
    <div class="flex flex-wrap gap-2" role="group" aria-label="Suggested questions">
      @for (q of suggestions; track q) {
        <scsc-button size="sm" variant="neutral" outline (click)="ask(q)">{{ q }}</scsc-button>
      }
    </div>
  }
</div>
`},"chat-typing":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscChat, ScscChatMessage } from '@scscourt/design';

@Component({
  selector: 'app-chat-typing-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscChat],
  template: \`<scsc-chat class="h-64 max-w-md" [messages]="messages" [typing]="true" />\`,
})
export class ChatTypingDemo {
  protected readonly messages: ScscChatMessage[] = [
    { id: 1, role: 'user', author: 'You', text: 'How do I request a Spanish interpreter?' },
  ];
}
`,html:`<scsc-chat class="h-64 max-w-md" [messages]="messages" [typing]="true" />
`}};var d=class t{messages=q([{id:1,role:`assistant`,author:`Court Assistant`,text:`How can I help with your case today?`,timestamp:`9:01 AM`},{id:2,role:`user`,author:`You`,text:`When is my next hearing?`,timestamp:`9:02 AM`},{id:3,role:`assistant`,author:`Court Assistant`,text:`Your next hearing is October 14, 2026 at 9:00 AM in Dept. 21.`,timestamp:`9:02 AM`}]);thinking=q(!1);ask(s){this.messages.update(e=>[...e,{id:Date.now(),role:`user`,author:`You`,text:s}]),this.thinking.set(!0),setTimeout(()=>{this.messages.update(e=>[...e,{id:Date.now(),role:`assistant`,author:`Court Assistant`,text:`I can look that up. Which case number is this about?`}]),this.thinking.set(!1)},900)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-chat-basic-demo`]],decls:1,vars:2,consts:[[`placeholder`,`Ask about your case…`,1,`h-96`,`max-w-md`,3,`send`,`messages`,`typing`]],template:function(e,a){e&1&&(Ga(0,`scsc-chat`,0),lc(`send`,function(h){return a.ask(h)}),Lf()),e&2&&Pv(`messages`,a.messages())(`typing`,a.thinking())},dependencies:[$R],encapsulation:2})};function E(t,s){if(t&1){let e=d_();Ga(0,`scsc-button`,4),lc(`click`,function(){let f=Eg(e).$implicit,h=y_(2);return Ig(h.ask(f))}),G_(1),Lf()}if(t&2){let e=s.$implicit;Jb(),nD(e)}}function B(t,s){if(t&1&&(Ga(0,`div`,2),o_(1,E,2,1,`scsc-button`,3,r_),Lf()),t&2){let e=y_();Jb(),i_(e.suggestions)}}var u=class t{suggestions=[`How do I get a fee waiver?`,`Where do I file a small claims case?`,`Can I get an interpreter?`];answers={"How do I get a fee waiver?":`File form FW-001 with your first papers. The clerk decides within 5 court days.`,"Where do I file a small claims case?":`Online through e-filing, or in person at the Downtown Superior Court, 191 N. First St.`,"Can I get an interpreter?":`Yes, at no cost. Ask for one when you file, or call the Interpreter Office at least 5 days before.`};messages=q([{id:1,role:`assistant`,author:`Self-Help Center`,text:`Hi! Ask a question, or pick one of the common ones below.`}]);thinking=q(!1);ask(s){this.messages.update(e=>[...e,{id:e.length+1,role:`user`,author:`You`,text:s}]),this.thinking.set(!0),setTimeout(()=>{this.messages.update(e=>[...e,{id:e.length+1,role:`assistant`,author:`Self-Help Center`,text:this.answers[s]??`A self-help attorney will reply by email within one day.`}]),this.thinking.set(!1)},900)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-chat-suggestions-demo`]],decls:3,vars:3,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`placeholder`,`Ask the Self-Help Center…`,1,`h-80`,3,`send`,`messages`,`typing`],[`role`,`group`,`aria-label`,`Suggested questions`,1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,`variant`,`neutral`,`outline`,``],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-chat`,1),lc(`send`,function(h){return a.ask(h)}),Lf(),JT(2,B,3,0,`div`,2),Lf()),e&2&&(Jb(),Pv(`messages`,a.messages())(`typing`,a.thinking()),Jb(),t_(a.messages().length===1?2:-1))},dependencies:[sn,$R],encapsulation:2})};var y=class t{messages=[{id:1,role:`user`,author:`You`,text:`How do I request a Spanish interpreter?`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-chat-typing-demo`]],decls:1,vars:2,consts:[[1,`h-64`,`max-w-md`,3,`messages`,`typing`]],template:function(e,a){e&1&&uc(0,`scsc-chat`,0),e&2&&Pv(`messages`,a.messages)(`typing`,!0)},dependencies:[$R],encapsulation:2})};var te={slug:`chat`,name:`Chat`,classes:[`ScscChat`],category:`Specialized`,whenToUse:[`A conversational thread with a composer: the self-help assistant, clerk support, mediation messaging.`,"The component is stateless about the conversation. Bind `messages`, handle `(send)` by appending the user's text, and set `typing` while a reply is pending — any backend works.",'Give the host a height (`class="h-96"`): the thread scrolls inside it and the composer stays pinned at the bottom.',`Enter sends, Shift+Enter inserts a newline. Empty or whitespace-only drafts are ignored.`,'Suggested questions, attachments or a "talk to a person" link belong outside the component; route them through the same handler as `(send)`.'],demos:[{id:`chat-basic`,title:`Thread with a simulated reply`,description:"`(send)` appends the message and shows `typing` until the reply lands.",component:d,source:g[`chat-basic`]},{id:`chat-typing`,title:`Typing indicator`,description:'`[typing]="true"` renders the animated bubble after the last message.',component:y,source:g[`chat-typing`]},{id:`chat-suggestions`,title:`Suggested questions`,description:`A self-help assistant that offers common questions as buttons until the first one is asked; buttons and the composer share one handler.`,component:u,source:g[`chat-suggestions`]}],a11y:['The thread is a `role="log"` (polite live region), so new messages are read as they arrive without moving focus. It is a named, focusable scroll area ("Conversation"), so keyboard users can scroll back.','The composer is named by `label` (default "Message"); the placeholder is only a hint. The send button is named "Send". Words come from `SCSC_LABELS`.',`The typing indicator is announced ("Assistant is typing").`,"`author` and `timestamp` are read as part of each message; include `author` when more than two parties can post.",'Group suggestion buttons with `role="group"` and an `aria-label` so they are announced as a set.'],keyboard:[{keys:`Tab`,action:`Moves to the message log (scroll it with the arrow keys), the composer, then Send.`},{keys:`Enter`,action:`Sends the message (in the composer).`},{keys:`Shift + Enter`,action:`Adds a new line (in the composer).`}],aria:['Message list: `role="log"`, `aria-live="polite"`, `aria-label`, `tabindex="0"`.',"Composer: `aria-label` from `label`; Send: `aria-label`, `disabled` while the draft is empty."],appMustProvide:['A `label` for the composer when "Message" is not specific enough ("Ask about your case").'],related:[`textarea`,`notification-inbox`,`command-palette`]};export{te as CHAT_DOCS};