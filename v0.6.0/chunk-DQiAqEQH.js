import{Bt as PE,Ms as uc,Xa as Pv,ra as Af,va as G_,vo as YC,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var c=class n{notice=q(`
    <h3>Court holiday: Thanksgiving</h3>
    <p>
      All courthouses and clerk's offices are <strong>closed</strong> on Thursday, 26 November
      and Friday, 27 November 2026. Hearings set on those days will be continued, and you will
      receive a new notice of hearing by mail.
    </p>
    <ul>
      <li>E-filing stays open. Documents received on a court holiday are filed the next court day.</li>
      <li>Payments made online on a court holiday post on Monday, 30 November.</li>
      <li>The drop box at the Downtown Superior Courthouse is emptied at 8:30 AM on 30 November.</li>
    </ul>
    <p>
      Questions? Visit <a href="https://www.scscourt.org">scscourt.org</a> or call the Clerk's
      Office at (408) 882-2100.
    </p>
  `);static ɵfac=function(i){return new(i||n)};static ɵcmp=Af({type:n,selectors:[[`app-prose-cms-demo`]],decls:1,vars:1,consts:[[3,`innerHTML`]],template:function(i,h){i&1&&uc(0,`scsc-prose`,0),i&2&&Pv(`innerHTML`,h.notice(),YC)},dependencies:[PE],encapsulation:2})};var d=class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Af({type:n,selectors:[[`app-prose-help-demo`]],decls:32,vars:0,consts:[[`href`,`.`]],template:function(i,h){i&1&&(Ga(0,`scsc-prose`)(1,`h3`),G_(2,`How to find your case number`),Lf(),Ga(3,`p`),G_(4,` Your case number is printed at the top right of every filed document. It looks like `),Ga(5,`code`),G_(6,`24CV012345`),Lf(),G_(7,`: the two-digit year, a division code, and a six-digit sequence. `),Lf(),Ga(8,`ul`)(9,`li`)(10,`code`),G_(11,`CV`),Lf(),G_(12,` — Civil, `),Ga(13,`code`),G_(14,`FL`),Lf(),G_(15,` — Family, `),Ga(16,`code`),G_(17,`PR`),Lf(),G_(18,` — Probate, `),Ga(19,`code`),G_(20,`SC`),Lf(),G_(21,` — Small claims `),Lf(),Ga(22,`li`),G_(23,`Older cases may use a one-letter code, for example `),Ga(24,`code`),G_(25,`1-19-CV-345678`),Lf(),G_(26,`.`),Lf()(),Ga(27,`p`),G_(28,` Still can't find it? Search by party name in `),Ga(29,`a`,0),G_(30,`Case Search`),Lf(),G_(31,`, or call the Clerk's Office at (408) 882-2100. `),Lf()())},dependencies:[PE],encapsulation:2})};var m=class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Af({type:n,selectors:[[`app-prose-order-demo`]],decls:53,vars:0,consts:[[`href`,`.`]],template:function(i,h){i&1&&(Ga(0,`scsc-prose`)(1,`h2`),G_(2,`Order on Motion for Summary Judgment`),Lf(),Ga(3,`p`)(4,`strong`),G_(5,`Case No. 24CV012345`),Lf(),G_(6,` — `),Ga(7,`em`),G_(8,`Alvarez v. Pacific Transit Authority`),Lf(),uc(9,`br`),G_(10,` Department 6, Hon. Maria Delgado `),Lf(),Ga(11,`p`),G_(12,` The Court, having read and considered the moving papers, the opposition, the reply, and the arguments of counsel at the hearing on 14 July 2025, rules as follows. `),Lf(),Ga(13,`h3`),G_(14,`Findings`),Lf(),Ga(15,`ol`)(16,`li`),G_(17,`Defendant's motion for summary judgment is `),Ga(18,`strong`),G_(19,`denied`),Lf(),G_(20,`.`),Lf(),Ga(21,`li`),G_(22,` Defendant's alternative motion for summary adjudication is `),Ga(23,`strong`),G_(24,`granted in part`),Lf(),G_(25,` as to the third cause of action only. `),Lf(),Ga(26,`li`),G_(27,` Plaintiff's objections to the declaration of R. Whitfield are sustained as to paragraphs 4 and 7, and otherwise overruled. `),Lf()(),Ga(28,`h3`),G_(29,`Reasoning`),Lf(),Ga(30,`p`),G_(31,` A defendant moving for summary judgment bears the initial burden of showing that one or more elements of the cause of action cannot be established. Here, triable issues of material fact remain as to notice and causation; see the deposition excerpts at Exhibit C. `),Lf(),Ga(32,`blockquote`),G_(33,` "The purpose of summary judgment is to expedite litigation by avoiding needless trials, not to resolve disputed questions of fact." `),Lf(),Ga(34,`h3`),G_(35,`Orders`),Lf(),Ga(36,`ul`)(37,`li`),G_(38,`Plaintiff to serve notice of this ruling within 5 court days.`),Lf(),Ga(39,`li`),G_(40,`Trial setting conference remains on calendar for 4 September 2025 at 9:00 AM.`),Lf(),Ga(41,`li`),G_(42,` Parties are referred to the `),Ga(43,`a`,0),G_(44,`Civil Division local rules`),Lf(),G_(45,` regarding pretrial filings. `),Lf()(),uc(46,`hr`),Ga(47,`p`),G_(48,`IT IS SO ORDERED.`),Lf(),Ga(49,`p`),G_(50,`Dated: 17 July 2025`),uc(51,`br`),G_(52,`Hon. Maria Delgado, Judge of the Superior Court`),Lf()())},dependencies:[PE],encapsulation:2})};var p={"prose-cms":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscProse } from '@scscourt/design';

@Component({
  selector: 'app-prose-cms-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscProse],
  template: \`
    <!--
      HTML from a CMS or rich-text editor. Angular sanitises [innerHTML]: scripts, event
      handlers and javascript: URLs are stripped. Never bypass that for user-authored content.
    -->
    <scsc-prose [innerHTML]="notice()" />
  \`,
})
export class ProseCmsDemo {
  /** In an app this string comes from your CMS or API. */
  protected readonly notice = signal(\`
    <h3>Court holiday: Thanksgiving</h3>
    <p>
      All courthouses and clerk's offices are <strong>closed</strong> on Thursday, 26 November
      and Friday, 27 November 2026. Hearings set on those days will be continued, and you will
      receive a new notice of hearing by mail.
    </p>
    <ul>
      <li>E-filing stays open. Documents received on a court holiday are filed the next court day.</li>
      <li>Payments made online on a court holiday post on Monday, 30 November.</li>
      <li>The drop box at the Downtown Superior Courthouse is emptied at 8:30 AM on 30 November.</li>
    </ul>
    <p>
      Questions? Visit <a href="https://www.scscourt.org">scscourt.org</a> or call the Clerk's
      Office at (408) 882-2100.
    </p>
  \`);
}
`,html:`<!--
  HTML from a CMS or rich-text editor. Angular sanitises [innerHTML]: scripts, event
  handlers and javascript: URLs are stripped. Never bypass that for user-authored content.
-->
<scsc-prose [innerHTML]="notice()" />
`},"prose-help":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscProse } from '@scscourt/design';

@Component({
  selector: 'app-prose-help-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscProse],
  template: \`
    <!-- Help and instructional copy: inline code, links and short lists inside the reading measure. -->
    <scsc-prose>
      <h3>How to find your case number</h3>
      <p>
        Your case number is printed at the top right of every filed document. It looks like
        <code>24CV012345</code>: the two-digit year, a division code, and a six-digit sequence.
      </p>
      <ul>
        <li>
          <code>CV</code> \u2014 Civil, <code>FL</code> \u2014 Family, <code>PR</code> \u2014 Probate,
          <code>SC</code> \u2014 Small claims
        </li>
        <li>Older cases may use a one-letter code, for example <code>1-19-CV-345678</code>.</li>
      </ul>
      <p>
        Still can't find it? Search by party name in <a href=".">Case Search</a>, or call the
        Clerk's Office at (408) 882-2100.
      </p>
    </scsc-prose>
  \`,
})
export class ProseHelpDemo {}
`,html:`<!-- Help and instructional copy: inline code, links and short lists inside the reading measure. -->
<scsc-prose>
  <h3>How to find your case number</h3>
  <p>
    Your case number is printed at the top right of every filed document. It looks like
    <code>24CV012345</code>: the two-digit year, a division code, and a six-digit sequence.
  </p>
  <ul>
    <li>
      <code>CV</code> \u2014 Civil, <code>FL</code> \u2014 Family, <code>PR</code> \u2014 Probate,
      <code>SC</code> \u2014 Small claims
    </li>
    <li>Older cases may use a one-letter code, for example <code>1-19-CV-345678</code>.</li>
  </ul>
  <p>
    Still can't find it? Search by party name in <a href=".">Case Search</a>, or call the
    Clerk's Office at (408) 882-2100.
  </p>
</scsc-prose>
`},"prose-order":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscProse } from '@scscourt/design';

@Component({
  selector: 'app-prose-order-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscProse],
  template: \`
    <scsc-prose>
      <h2>Order on Motion for Summary Judgment</h2>
      <p>
        <strong>Case No. 24CV012345</strong> \u2014 <em>Alvarez v. Pacific Transit Authority</em><br />
        Department 6, Hon. Maria Delgado
      </p>
      <p>
        The Court, having read and considered the moving papers, the opposition, the reply, and the
        arguments of counsel at the hearing on 14 July 2025, rules as follows.
      </p>

      <h3>Findings</h3>
      <ol>
        <li>Defendant's motion for summary judgment is <strong>denied</strong>.</li>
        <li>
          Defendant's alternative motion for summary adjudication is
          <strong>granted in part</strong> as to the third cause of action only.
        </li>
        <li>
          Plaintiff's objections to the declaration of R. Whitfield are sustained as to paragraphs 4
          and 7, and otherwise overruled.
        </li>
      </ol>

      <h3>Reasoning</h3>
      <p>
        A defendant moving for summary judgment bears the initial burden of showing that one or more
        elements of the cause of action cannot be established. Here, triable issues of material fact
        remain as to notice and causation; see the deposition excerpts at Exhibit C.
      </p>
      <blockquote>
        "The purpose of summary judgment is to expedite litigation by avoiding needless trials, not
        to resolve disputed questions of fact."
      </blockquote>

      <h3>Orders</h3>
      <ul>
        <li>Plaintiff to serve notice of this ruling within 5 court days.</li>
        <li>Trial setting conference remains on calendar for 4 September 2025 at 9:00 AM.</li>
        <li>
          Parties are referred to the <a href=".">Civil Division local rules</a> regarding pretrial
          filings.
        </li>
      </ul>
      <hr />
      <p>IT IS SO ORDERED.</p>
      <p>Dated: 17 July 2025<br />Hon. Maria Delgado, Judge of the Superior Court</p>
    </scsc-prose>
  \`,
})
export class ProseOrderDemo {}
`,html:`<scsc-prose>
  <h2>Order on Motion for Summary Judgment</h2>
  <p>
    <strong>Case No. 24CV012345</strong> \u2014 <em>Alvarez v. Pacific Transit Authority</em><br />
    Department 6, Hon. Maria Delgado
  </p>
  <p>
    The Court, having read and considered the moving papers, the opposition, the reply, and the
    arguments of counsel at the hearing on 14 July 2025, rules as follows.
  </p>

  <h3>Findings</h3>
  <ol>
    <li>Defendant's motion for summary judgment is <strong>denied</strong>.</li>
    <li>
      Defendant's alternative motion for summary adjudication is
      <strong>granted in part</strong> as to the third cause of action only.
    </li>
    <li>
      Plaintiff's objections to the declaration of R. Whitfield are sustained as to paragraphs 4
      and 7, and otherwise overruled.
    </li>
  </ol>

  <h3>Reasoning</h3>
  <p>
    A defendant moving for summary judgment bears the initial burden of showing that one or more
    elements of the cause of action cannot be established. Here, triable issues of material fact
    remain as to notice and causation; see the deposition excerpts at Exhibit C.
  </p>
  <blockquote>
    "The purpose of summary judgment is to expedite litigation by avoiding needless trials, not
    to resolve disputed questions of fact."
  </blockquote>

  <h3>Orders</h3>
  <ul>
    <li>Plaintiff to serve notice of this ruling within 5 court days.</li>
    <li>Trial setting conference remains on calendar for 4 September 2025 at 9:00 AM.</li>
    <li>
      Parties are referred to the <a href=".">Civil Division local rules</a> regarding pretrial
      filings.
    </li>
  </ul>
  <hr />
  <p>IT IS SO ORDERED.</p>
  <p>Dated: 17 July 2025<br />Hon. Maria Delgado, Judge of the Superior Court</p>
</scsc-prose>
`}};var j={slug:`prose`,name:`Prose`,classes:[`ScscProse`],category:`Primitives`,whenToUse:[`Long-form reading content written as plain HTML: orders and rulings, notices, help articles, FAQ answers, release notes.`,"It styles the *projected* markup (`h1`–`h4`, `p`, `ul`/`ol`, `a`, `blockquote`, `code`, `hr`) and caps the measure at ~68ch; you do not need `scsc-heading` or `scsc-text` inside it.","Content that comes from a CMS or rich-text editor is the classic case: bind it with `[innerHTML]` on `scsc-prose` itself, so the paragraphs are direct children and keep their spacing. Angular sanitises the HTML; do not bypass it.","Not for UI copy in cards, tables or forms; use `scsc-text` there so spacing stays tight."],demos:[{id:`prose-order`,title:`Court order`,description:`A complete order: headings, numbered findings, a blockquote, a rule and a signature block.`,component:m,source:p[`prose-order`]},{id:`prose-help`,title:`Help text`,description:"Inline `code`, a link and a short list inside the reading measure.",component:d,source:p[`prose-help`]},{id:`prose-cms`,title:`HTML from a CMS`,description:"A public notice stored as HTML, bound with `[innerHTML]`; Angular sanitises it and `scsc-prose` styles it.",component:c,source:p[`prose-cms`]}],a11y:[`The component adds no semantics of its own; the projected HTML is the accessibility tree, so use real headings, lists and links inside it.`,"Start the projected content at the heading level that follows the page outline (usually `h2`). For CMS content, agree the starting level with the authors or rewrite it on the way in.",`Links are underlined, not colour-only, and blockquotes use a border rather than italics alone.`],related:[`heading`,`text`,`rich-text-editor`,`code-block`]};export{j as PROSE_DOCS};