import{Ms as uc,Na as Jb,Vr as mN,Xa as Pv,Xt as RP,Zi as za,kt as NE,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var m={"code-block-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCodeBlock } from '@scscourt/design';

@Component({
  selector: 'app-code-block-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCodeBlock],
  template: \`
    <div class="flex max-w-lg flex-col gap-4">
      <scsc-code-block language="bash" [code]="install" />
      <scsc-code-block language="ts" [code]="usage" />
    </div>
  \`,
})
export class CodeBlockBasicDemo {
  protected readonly install =
    'ng add @scscourt/design\\nng generate @scscourt/design:crud-page hearings';

  protected readonly usage = [
    "import { ScscButton } from '@scscourt/design';",
    '',
    '@Component({ imports: [ScscButton], template: \`<scsc-button>File</scsc-button>\` })',
    'export class FilingPage {}',
  ].join('\\n');
}
`,html:`<div class="flex max-w-lg flex-col gap-4">
  <scsc-code-block language="bash" [code]="install" />
  <scsc-code-block language="ts" [code]="usage" />
</div>
`},"code-block-projected":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCodeBlock } from '@scscourt/design';

@Component({
  selector: 'app-code-block-projected-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCodeBlock],
  template: \`
    <!-- The projected code element replaces the plain rendering; [code] still feeds Copy. -->
    <scsc-code-block language="html" [code]="snippet" class="max-w-lg">
      <!-- prettier-ignore -->
      <code><span class="text-primary">&lt;scsc-button&gt;</span>File<span class="text-primary">&lt;/scsc-button&gt;</span></code>
    </scsc-code-block>
  \`,
})
export class CodeBlockProjectedDemo {
  protected readonly snippet = '<scsc-button>File</scsc-button>';
}
`,html:`<!-- The projected code element replaces the plain rendering; [code] still feeds Copy. -->
<scsc-code-block language="html" [code]="snippet" class="max-w-lg">
  <!-- prettier-ignore -->
  <code><span class="text-primary">&lt;scsc-button&gt;</span>File<span class="text-primary">&lt;/scsc-button&gt;</span></code>
</scsc-code-block>
`},"code-block-receipt":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAlert, ScscCard, ScscCodeBlock, ScscText } from '@scscourt/design';

@Component({
  selector: 'app-code-block-receipt-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscCard, ScscCodeBlock, ScscText],
  template: \`
    <scsc-card title="Filing submitted" class="max-w-md">
      <scsc-alert status="success">
        Your motion was sent to the clerk for review. Most filings are processed within two court
        days.
      </scsc-alert>
      <scsc-text size="sm" class="mt-4 block">
        Quote this envelope number if you contact the clerk about the filing:
      </scsc-text>
      <!-- A value people must copy exactly: Copy writes the raw [code] string. -->
      <scsc-code-block class="mt-2" language="Envelope" [code]="envelope" />
    </scsc-card>
  \`,
})
export class CodeBlockReceiptDemo {
  protected readonly envelope = 'EFS-2026-0928-044721';
}
`,html:`<scsc-card title="Filing submitted" class="max-w-md">
  <scsc-alert status="success">
    Your motion was sent to the clerk for review. Most filings are processed within two court
    days.
  </scsc-alert>
  <scsc-text size="sm" class="mt-4 block">
    Quote this envelope number if you contact the clerk about the filing:
  </scsc-text>
  <!-- A value people must copy exactly: Copy writes the raw [code] string. -->
  <scsc-code-block class="mt-2" language="Envelope" [code]="envelope" />
</scsc-card>
`}};var g=class t{install=`ng add @scscourt/design
ng generate @scscourt/design:crud-page hearings`;usage=[`import { ScscButton } from '@scscourt/design';`,``,"@Component({ imports: [ScscButton], template: `<scsc-button>File</scsc-button>` })",`export class FilingPage {}`].join(`
`);static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-code-block-basic-demo`]],decls:3,vars:2,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`gap-4`],[`language`,`bash`,3,`code`],[`language`,`ts`,3,`code`]],template:function(e,a){e&1&&(Ga(0,`div`,0),uc(1,`scsc-code-block`,1)(2,`scsc-code-block`,2),Lf()),e&2&&(Jb(),Pv(`code`,a.install),Jb(),Pv(`code`,a.usage))},dependencies:[RP],encapsulation:2})};var u=class t{snippet=`<scsc-button>File</scsc-button>`;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-code-block-projected-demo`]],decls:7,vars:1,consts:[[`language`,`html`,1,`max-w-lg`,3,`code`],[1,`text-primary`]],template:function(e,a){e&1&&(Ga(0,`scsc-code-block`,0)(1,`code`)(2,`span`,1),G_(3,`<scsc-button>`),Lf(),G_(4,`File`),Ga(5,`span`,1),G_(6,`</scsc-button>`),Lf()()()),e&2&&Pv(`code`,a.snippet)},dependencies:[RP],encapsulation:2})};var h=class t{envelope=`EFS-2026-0928-044721`;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-code-block-receipt-demo`]],decls:6,vars:1,consts:[[`title`,`Filing submitted`,1,`max-w-md`],[`status`,`success`],[`size`,`sm`,1,`mt-4`,`block`],[`language`,`Envelope`,1,`mt-2`,3,`code`]],template:function(e,a){e&1&&(Ga(0,`scsc-card`,0)(1,`scsc-alert`,1),G_(2,` Your motion was sent to the clerk for review. Most filings are processed within two court days. `),Lf(),Ga(3,`scsc-text`,2),G_(4,` Quote this envelope number if you contact the clerk about the filing: `),Lf(),uc(5,`scsc-code-block`,3),Lf()),e&2&&(Jb(5),Pv(`code`,a.envelope))},dependencies:[za,mN,RP,NE],encapsulation:2})};var A={slug:`code-block`,name:`Code Block`,classes:[`ScscCodeBlock`],category:`Data Display`,whenToUse:[`Commands, configuration and identifiers people need to copy exactly: install steps, API keys, e-filing envelope numbers.`,"`code` is required and is what the Copy button writes to the clipboard. By default it is also what is displayed, verbatim, in a `<pre>`.","To show syntax highlighting, project your own `<code>` element (with the highlighter's spans) as content — it replaces the plain rendering while `code` keeps supplying the copy text.",'`language` is only a label, so it can name the kind of value ("Envelope") as well as a language.',"For a single inline token in a sentence use a plain `<code>`; for key presses use `scsc-kbd`."],demos:[{id:`code-block-basic`,title:`Plain text`,description:"`code` rendered as-is with a `language` label and the Copy button.",component:g,source:m[`code-block-basic`]},{id:`code-block-projected`,title:`Projected highlighted markup`,description:"A hand-highlighted `<code>` is projected; the Copy button still copies the raw `code` string.",component:u,source:m[`code-block-projected`]},{id:`code-block-receipt`,title:`In a filing receipt`,description:`A one-line block for an envelope number the filer must quote exactly, inside a confirmation card.`,component:h,source:m[`code-block-receipt`]}],a11y:['The `<pre>` is focusable (`tabindex="0"`) so keyboard users can scroll long lines horizontally.','The Copy button is named "Copy code" (its visible word "Copy" starts the name), has a 44 px target, and announces "Copied" through the shared live region (`ScscAnnouncer`); its icon turns into a check for 1.5 s. Words come from `SCSC_LABELS`.',`Highlight colours in projected markup are decorative; the text must make sense without them.`],keyboard:[{keys:`Tab`,action:`Moves to the Copy button, then into the code panel.`},{keys:`Enter / Space`,action:`Copies the code (on the Copy button) and announces "Copied".`},{keys:`ArrowLeft / ArrowRight`,action:`Scrolls a long line (in the focused code panel).`}],appMustProvide:[`Code that makes sense without its highlight colours.`],related:[`kbd`,`prose`,`toast`]};export{A as CODE_BLOCK_DOCS};