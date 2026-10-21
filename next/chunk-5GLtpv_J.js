import{Go as g$1,Ms as uc,Ps as ut,Xa as Pv,ra as Af}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{n as Xe}from"./chunk-B29IWKja.js";import{r as lo}from"./chunk-CHd4pnde.js";var g={"code-highlighter-autodetect":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScscHighlighter } from '@scscourt/design/code';
import { ScscMarkdown } from '@scscourt/design/docs';

const LOG_LINES = [
  "SELECT TOP 20 * FROM DeliveryLog WHERE Status = 'Failed' ORDER BY SentAt DESC;",
  'Restart-Service -Name "SCSC.Notification.Worker" -Force',
  '{"event":"delivery.failed","messageId":"MSG-88213","reason":"mailbox full"}',
  '<nc:CaseTrackingID xmlns:nc="http://niem.gov/niem/niem-core/2.0">24CV012345</nc:CaseTrackingID>',
];

@Component({
  selector: 'app-code-highlighter-autodetect-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMarkdown],
  template: \`
    <!-- Snippets pasted into a support ticket carry no language; guess it from a short list. -->
    <scsc-markdown [markdown]="ticket()" [headingOffset]="3" wide class="max-w-3xl" />
  \`,
})
export class CodeHighlighterAutodetectDemo {
  private readonly highlighter = inject(ScscHighlighter);

  protected readonly ticket = computed(() =>
    LOG_LINES.map((line) => {
      const { language } = this.highlighter.autodetect(line, ['sql', 'powershell', 'json', 'xml']);
      return \`**Detected: \${language ?? 'unknown'}**\\n\\n\\\`\\\`\\\`\${language ?? ''}\\n\${line}\\n\\\`\\\`\\\`\`;
    }).join('\\n\\n'),
  );
}
`,html:`<!-- Snippets pasted into a support ticket carry no language; guess it from a short list. -->
<scsc-markdown [markdown]="ticket()" [headingOffset]="3" wide class="max-w-3xl" />
`},"code-highlighter-languages":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscMarkdown } from '@scscourt/design/docs';

@Component({
  selector: 'app-code-highlighter-languages-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscMarkdown],
  template: \`
    <!-- Each fence names its language; ScscHighlighter colours it from the theme. -->
    <scsc-markdown [markdown]="runbook" [headingOffset]="3" wide class="max-w-3xl" />
  \`,
})
export class CodeHighlighterLanguagesDemo {
  protected readonly runbook = \`# SQL

\\\`\\\`\\\`sql
SELECT c.CaseNumber, h.HearingDate, h.Department
FROM Hearings h JOIN Cases c ON c.CaseId = h.CaseId
WHERE h.HearingDate >= '2026-10-01' AND c.Sealed = 0
ORDER BY h.HearingDate;
\\\`\\\`\\\`

# C#

\\\`\\\`\\\`csharp
public sealed record Hearing(string CaseNumber, DateOnly Date, string Department)
{
    public bool IsRemote { get; init; } = true;
}
\\\`\\\`\\\`

# PowerShell

\\\`\\\`\\\`powershell
Get-ChildItem -Path "\\\\\\\\fileshare\\\\efiling\\\\inbound" -Filter *.xml |
  Where-Object { $_.LastWriteTime -gt (Get-Date).AddHours(-1) } |
  Select-Object Name, Length
\\\`\\\`\\\`

# HTTP

\\\`\\\`\\\`http
POST /api/envelopes HTTP/1.1
Host: efile.scscourt.org
Content-Type: application/json

{"caseNumber": "24CV012345", "filingCode": "FEE-60"}
\\\`\\\`\\\`

# YAML

\\\`\\\`\\\`yaml
notification:
  channel: sms
  template: hearing-reminder
  sendBefore: 48h
\\\`\\\`\\\`
\`;
}
`,html:`<!-- Each fence names its language; ScscHighlighter colours it from the theme. -->
<scsc-markdown [markdown]="runbook" [headingOffset]="3" wide class="max-w-3xl" />
`}};var f=[`SELECT TOP 20 * FROM DeliveryLog WHERE Status = 'Failed' ORDER BY SentAt DESC;`,`Restart-Service -Name "SCSC.Notification.Worker" -Force`,`{"event":"delivery.failed","messageId":"MSG-88213","reason":"mailbox full"}`,`<nc:CaseTrackingID xmlns:nc="http://niem.gov/niem/niem-core/2.0">24CV012345</nc:CaseTrackingID>`];var r=class o{highlighter=g$1(Xe);ticket=ut(()=>f.map(t=>{let{language:e}=this.highlighter.autodetect(t,[`sql`,`powershell`,`json`,`xml`]);return`**Detected: ${e??`unknown`}**

\`\`\`${e??``}
${t}
\`\`\``}).join(`

`));static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-code-highlighter-autodetect-demo`]],decls:1,vars:2,consts:[[`wide`,``,1,`max-w-3xl`,3,`markdown`,`headingOffset`]],template:function(e,l){e&1&&uc(0,`scsc-markdown`,0),e&2&&Pv(`markdown`,l.ticket())(`headingOffset`,3)},dependencies:[lo],encapsulation:2})};var T={slug:`code-highlighter`,name:`Code Highlighter`,classes:[`ScscHighlighter`],category:`Specialized`,whenToUse:["The syntax highlighting behind `scsc-json-view`, `scsc-xml-view`, `scsc-payload-view` and `scsc-markdown`. It works without setup; you rarely call it yourself.","Built in: JSON, XML (and HTML), SQL, C#, TypeScript / JavaScript, Bash, PowerShell, YAML, HTTP and plain text, with their usual aliases (`ts`, `cs`, `sh`, `ps1`, `yml`, `html`, `text`). Only these grammars are bundled, not all of highlight.js.","Add a grammar with `provideScscHighlighter({ languages: { ini } })`, importing it from `highlight.js/lib/languages/<name>`. Provided in a lazy route, it gives that route its own highlighter.","`autodetect(code, languages)` guesses the language of an unlabelled snippet. Always pass a short list: detection over every grammar is slow and unreliable on one-liners.","Input longer than `maxLength` (200,000 characters) is escaped but not coloured, so a very large payload never stalls the page.",`It uses its own highlight.js instance, so an app that also uses highlight.js directly keeps its own configuration.`],setup:`// package.json \u2014 optional peers of the code entry (both are imported by it)
"highlight.js": "^11.0.0",
"marked": "^15.0.0"

// app.config.ts \u2014 only to add grammars or change the size limit
import ini from 'highlight.js/lib/languages/ini';
import { provideScscHighlighter } from '@scscourt/design/code';

export const appConfig: ApplicationConfig = {
  providers: [provideScscHighlighter({ languages: { ini }, maxLength: 500_000 })],
};`,demos:[{id:`code-highlighter-languages`,title:`Built-in languages`,description:"Fenced code in `scsc-markdown`, each fence naming its language. Every colour is a theme token, so light, dark and high contrast follow automatically.",component:class o{runbook=`# SQL

\`\`\`sql
SELECT c.CaseNumber, h.HearingDate, h.Department
FROM Hearings h JOIN Cases c ON c.CaseId = h.CaseId
WHERE h.HearingDate >= '2026-10-01' AND c.Sealed = 0
ORDER BY h.HearingDate;
\`\`\`

# C#

\`\`\`csharp
public sealed record Hearing(string CaseNumber, DateOnly Date, string Department)
{
    public bool IsRemote { get; init; } = true;
}
\`\`\`

# PowerShell

\`\`\`powershell
Get-ChildItem -Path "\\\\fileshare\\efiling\\inbound" -Filter *.xml |
  Where-Object { $_.LastWriteTime -gt (Get-Date).AddHours(-1) } |
  Select-Object Name, Length
\`\`\`

# HTTP

\`\`\`http
POST /api/envelopes HTTP/1.1
Host: efile.scscourt.org
Content-Type: application/json

{"caseNumber": "24CV012345", "filingCode": "FEE-60"}
\`\`\`

# YAML

\`\`\`yaml
notification:
  channel: sms
  template: hearing-reminder
  sendBefore: 48h
\`\`\`
`;static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-code-highlighter-languages-demo`]],decls:1,vars:2,consts:[[`wide`,``,1,`max-w-3xl`,3,`markdown`,`headingOffset`]],template:function(e,l){e&1&&uc(0,`scsc-markdown`,0),e&2&&Pv(`markdown`,l.runbook)(`headingOffset`,3)},dependencies:[lo],encapsulation:2})},source:g[`code-highlighter-languages`]},{id:`code-highlighter-autodetect`,title:`Guessing the language`,description:"`inject(ScscHighlighter).autodetect(line, [...])` names the language of snippets pasted into a support ticket, from a short list.",component:r,source:g[`code-highlighter-autodetect`]}],aria:['Highlighting only adds `<span class="hljs-…">` inside the code; it adds no roles and changes no text, so screen readers read the code exactly as written.'],appMustProvide:[`Code that makes sense without colour: highlighting is decorative.`],a11y:["Token colours come from the theme, mixed toward the text colour: every token is at least 6.5 : 1 on `base-100` and `base-200` in the light and dark themes and 7 : 1 in high contrast (1.4.6). Comments are italic as well as dimmed.",`In forced-colours mode the tokens fall back to the system text colour.`,`The highlighter escapes its input; the components bind the result through Angular’s sanitizer.`],related:[`markdown`,`payload-view`,`code-block`]};export{T as CODE_HIGHLIGHTER_DOCS};