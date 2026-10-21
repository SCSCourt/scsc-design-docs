import{Ms as uc,Na as Jb,Xa as Pv,cs as lc,ds as nD,ra as Af,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";import"./chunk-CAXY47hJ.js";import{o as st}from"./chunk-B29IWKja.js";var c=class n{selected=q(null);envelope=`<?xml version="1.0" encoding="UTF-8"?>
<!-- Received from the eFiling gateway at 2026-09-29T16:04:12-07:00 -->
<CoreFilingMessage xmlns="urn:oasis:names:tc:legalxml-courtfiling:schema:xsd:CoreFilingMessage-4.0"
    xmlns:ecf="urn:oasis:names:tc:legalxml-courtfiling:schema:xsd:CommonTypes-4.0"
    xmlns:nc="http://niem.gov/niem/niem-core/2.0"
    xmlns:j="http://niem.gov/niem/domains/jxdm/4.0"
    xmlns:s="http://niem.gov/niem/structures/2.0">
  <nc:DocumentIdentification>
    <nc:IdentificationID>ENV-2026-0913-4471</nc:IdentificationID>
    <nc:IdentificationCategoryText>envelope</nc:IdentificationCategoryText>
  </nc:DocumentIdentification>
  <nc:Case>
    <nc:CaseTitleText>Alvarez v. Pacific Transit Authority</nc:CaseTitleText>
    <nc:CaseCategoryText>Civil Unlimited</nc:CaseCategoryText>
    <nc:CaseTrackingID>24CV012345</nc:CaseTrackingID>
    <nc:CaseTrackingID>SC-2024-0098</nc:CaseTrackingID>
    <j:CaseAugmentation>
      <j:CaseCourt>
        <nc:OrganizationIdentification>
          <nc:IdentificationID>santaclara:civil</nc:IdentificationID>
        </nc:OrganizationIdentification>
        <nc:OrganizationName>Superior Court of California, County of Santa Clara</nc:OrganizationName>
      </j:CaseCourt>
    </j:CaseAugmentation>
    <ecf:CaseAugmentation>
      <ecf:CaseParticipant>
        <ecf:EntityPerson s:id="party-1">
          <nc:PersonName>
            <nc:PersonGivenName>Maria</nc:PersonGivenName>
            <nc:PersonSurName>Alvarez</nc:PersonSurName>
          </nc:PersonName>
        </ecf:EntityPerson>
        <nc:CaseParticipantRoleCode>PLAINTIFF</nc:CaseParticipantRoleCode>
      </ecf:CaseParticipant>
      <ecf:CaseParticipant>
        <ecf:EntityOrganization s:id="party-2">
          <nc:OrganizationName>Pacific Transit Authority</nc:OrganizationName>
        </ecf:EntityOrganization>
        <nc:CaseParticipantRoleCode>DEFENDANT</nc:CaseParticipantRoleCode>
      </ecf:CaseParticipant>
    </ecf:CaseAugmentation>
  </nc:Case>
  <FilingLeadDocument s:id="doc-1" ecf:documentID="lead">
    <nc:DocumentDescriptionText><![CDATA[Notice of Motion & Motion to Compel Further Responses]]></nc:DocumentDescriptionText>
    <nc:DocumentFiledDate>
      <nc:DateTime>2026-09-29T16:03:48-07:00</nc:DateTime>
    </nc:DocumentFiledDate>
    <ecf:DocumentMetadata>
      <j:RegisterActionDescriptionText>Motion to Compel</j:RegisterActionDescriptionText>
      <ecf:FilingAttorneyID>
        <nc:IdentificationID>287431</nc:IdentificationID>
      </ecf:FilingAttorneyID>
    </ecf:DocumentMetadata>
  </FilingLeadDocument>
  <FilingConnectedDocument s:id="doc-2" ecf:documentID="exhibit-a"/>
</CoreFilingMessage>`;static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-xml-view-ecf-filing-demo`]],decls:5,vars:3,consts:[[`label`,`Filing envelope ENV-2026-0913-4471`,3,`nodeSelect`,`xml`,`expandDepth`],[1,`mt-2`,`text-sm`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`scsc-xml-view`,0),lc(`nodeSelect`,function(y){return t.selected.set(y)}),Lf(),Ga(1,`p`,1),G_(2,` Selected: `),Ga(3,`code`),G_(4),Lf()()),e&2&&(Pv(`xml`,t.envelope)(`expandDepth`,2),Jb(4),nD(t.selected()?.xpath??`nothing yet — click a row or press Enter`))},dependencies:[st],encapsulation:2})};var r=class n{response=`<?xml version="1.0" encoding="UTF-8"?>
<GetCaseResponse xmlns:nc="http://niem.gov/niem/niem-core/2.0">
  <nc:Case>
    <nc:CaseTrackingID>24CV012345</nc:CaseTitleText>
  </nc:Case>
</GetCaseResponse>`;static ɵfac=function(e){return new(e||n)};static ɵcmp=Af({type:n,selectors:[[`app-xml-view-malformed-demo`]],decls:1,vars:1,consts:[[`label`,`Odyssey response`,3,`xml`]],template:function(e,t){e&1&&uc(0,`scsc-xml-view`,0),e&2&&Pv(`xml`,t.response)},dependencies:[st],encapsulation:2})};var p={"xml-view-ecf-filing":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscXmlView, type ScscXmlSelection } from '@scscourt/design/code';

@Component({
  selector: 'app-xml-view-ecf-filing-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscXmlView],
  template: \`
    <scsc-xml-view
      [xml]="envelope"
      [expandDepth]="2"
      label="Filing envelope ENV-2026-0913-4471"
      (nodeSelect)="selected.set($event)"
    />
    <p class="mt-2 text-sm text-base-content/70">
      Selected: <code>{{ selected()?.xpath ?? 'nothing yet \u2014 click a row or press Enter' }}</code>
    </p>
  \`,
})
export class XmlViewEcfFilingDemo {
  protected readonly selected = signal<ScscXmlSelection | null>(null);

  // An ECF 4.01 ReviewFiling core message, as the eFiling gateway receives it.
  protected readonly envelope = \`<?xml version="1.0" encoding="UTF-8"?>
<!-- Received from the eFiling gateway at 2026-09-29T16:04:12-07:00 -->
<CoreFilingMessage xmlns="urn:oasis:names:tc:legalxml-courtfiling:schema:xsd:CoreFilingMessage-4.0"
    xmlns:ecf="urn:oasis:names:tc:legalxml-courtfiling:schema:xsd:CommonTypes-4.0"
    xmlns:nc="http://niem.gov/niem/niem-core/2.0"
    xmlns:j="http://niem.gov/niem/domains/jxdm/4.0"
    xmlns:s="http://niem.gov/niem/structures/2.0">
  <nc:DocumentIdentification>
    <nc:IdentificationID>ENV-2026-0913-4471</nc:IdentificationID>
    <nc:IdentificationCategoryText>envelope</nc:IdentificationCategoryText>
  </nc:DocumentIdentification>
  <nc:Case>
    <nc:CaseTitleText>Alvarez v. Pacific Transit Authority</nc:CaseTitleText>
    <nc:CaseCategoryText>Civil Unlimited</nc:CaseCategoryText>
    <nc:CaseTrackingID>24CV012345</nc:CaseTrackingID>
    <nc:CaseTrackingID>SC-2024-0098</nc:CaseTrackingID>
    <j:CaseAugmentation>
      <j:CaseCourt>
        <nc:OrganizationIdentification>
          <nc:IdentificationID>santaclara:civil</nc:IdentificationID>
        </nc:OrganizationIdentification>
        <nc:OrganizationName>Superior Court of California, County of Santa Clara</nc:OrganizationName>
      </j:CaseCourt>
    </j:CaseAugmentation>
    <ecf:CaseAugmentation>
      <ecf:CaseParticipant>
        <ecf:EntityPerson s:id="party-1">
          <nc:PersonName>
            <nc:PersonGivenName>Maria</nc:PersonGivenName>
            <nc:PersonSurName>Alvarez</nc:PersonSurName>
          </nc:PersonName>
        </ecf:EntityPerson>
        <nc:CaseParticipantRoleCode>PLAINTIFF</nc:CaseParticipantRoleCode>
      </ecf:CaseParticipant>
      <ecf:CaseParticipant>
        <ecf:EntityOrganization s:id="party-2">
          <nc:OrganizationName>Pacific Transit Authority</nc:OrganizationName>
        </ecf:EntityOrganization>
        <nc:CaseParticipantRoleCode>DEFENDANT</nc:CaseParticipantRoleCode>
      </ecf:CaseParticipant>
    </ecf:CaseAugmentation>
  </nc:Case>
  <FilingLeadDocument s:id="doc-1" ecf:documentID="lead">
    <nc:DocumentDescriptionText><![CDATA[Notice of Motion & Motion to Compel Further Responses]]></nc:DocumentDescriptionText>
    <nc:DocumentFiledDate>
      <nc:DateTime>2026-09-29T16:03:48-07:00</nc:DateTime>
    </nc:DocumentFiledDate>
    <ecf:DocumentMetadata>
      <j:RegisterActionDescriptionText>Motion to Compel</j:RegisterActionDescriptionText>
      <ecf:FilingAttorneyID>
        <nc:IdentificationID>287431</nc:IdentificationID>
      </ecf:FilingAttorneyID>
    </ecf:DocumentMetadata>
  </FilingLeadDocument>
  <FilingConnectedDocument s:id="doc-2" ecf:documentID="exhibit-a"/>
</CoreFilingMessage>\`;
}
`,html:`<scsc-xml-view
  [xml]="envelope"
  [expandDepth]="2"
  label="Filing envelope ENV-2026-0913-4471"
  (nodeSelect)="selected.set($event)"
/>
<p class="mt-2 text-sm text-base-content/70">
  Selected: <code>{{ selected()?.xpath ?? 'nothing yet \u2014 click a row or press Enter' }}</code>
</p>
`},"xml-view-malformed":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscXmlView } from '@scscourt/design/code';

@Component({
  selector: 'app-xml-view-malformed-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscXmlView],
  template: \`
    <!-- The parser's reason, its line and column, and the offending line. -->
    <scsc-xml-view [xml]="response" label="Odyssey response" />
  \`,
})
export class XmlViewMalformedDemo {
  // A hand-edited test response: the closing tag does not match the element it closes.
  protected readonly response = \`<?xml version="1.0" encoding="UTF-8"?>
<GetCaseResponse xmlns:nc="http://niem.gov/niem/niem-core/2.0">
  <nc:Case>
    <nc:CaseTrackingID>24CV012345</nc:CaseTitleText>
  </nc:Case>
</GetCaseResponse>\`;
}
`,html:`<!-- The parser's reason, its line and column, and the offending line. -->
<scsc-xml-view [xml]="response" label="Odyssey response" />
`}};var k={slug:`xml-view`,name:`XML View`,classes:[`ScscXmlView`],category:`Specialized`,whenToUse:["Exploring ECF, NIEM and Odyssey payloads: filing envelopes, callbacks, integration test responses. For a body whose format varies, use `scsc-payload-view`, which picks this viewer for XML.","It parses with the browser’s `DOMParser` (`application/xml`). Malformed XML shows the parser’s reason with its line and column instead of throwing.","Rows show qualified names with their namespace prefixes, attributes (including `xmlns` declarations), text, CDATA and comments. An element whose only content is text sits on one line.","**Copy XPath** gives a path with positional indexes where a name repeats (`/ecf:CoreFilingMessage/nc:Case/nc:CaseTrackingID[2]`). It uses the document’s prefixes, so evaluating it needs a namespace resolver with the same prefixes. **Copy XML** copies the element’s markup with the namespace declarations it uses.",`The Raw tab re-indents the document (two spaces per level) and highlights it; whitespace inside mixed content is normalised.`,"The `@scscourt/design/code` entry needs `highlight.js` and `marked` installed (optional peers)."],setup:`// package.json \u2014 optional peers of the code entry (both are imported by it)
"highlight.js": "^11.0.0",
"marked": "^15.0.0"

import { ScscXmlView, ScscXmlSelection } from '@scscourt/design/code';`,demos:[{id:`xml-view-ecf-filing`,title:`ECF filing envelope`,description:`An ECF 4.01 core filing message opened two levels deep. Select a row for its XPath; focus or hover an element for Copy XPath and Copy XML. Search "alvarez" to find the party inside a closed branch.`,component:c,source:p[`xml-view-ecf-filing`]},{id:`xml-view-malformed`,title:`Malformed XML`,description:`A closing tag that does not match: the parser’s message, its line and column, and the line itself.`,component:r,source:p[`xml-view-malformed`]}],keyboard:[{keys:`Tab`,action:`Into the tree (one stop, on the last focused row), then to that element’s **Copy XPath** and **Copy XML** buttons, then out.`},{keys:`ArrowDown / ArrowUp`,action:`Next / previous visible row.`},{keys:`ArrowRight`,action:`Opens a closed element; on an open one, moves to its first child.`},{keys:`ArrowLeft`,action:`Closes an open element; otherwise moves to its parent.`},{keys:`Home / End`,action:`First / last visible row.`},{keys:`Enter / Space`,action:'Selects the row and emits `nodeSelect` with its XPath. On a "Show more" row, renders the next page.'},{keys:`*`,action:`Opens every sibling of the focused element.`},{keys:`A–Z, 0–9`,action:"Type-ahead on the element’s local name (typing `case` finds `nc:Case`)."},{keys:`Enter / Escape (in search)`,action:`Moves focus to the first match / clears the search.`},{keys:`ArrowLeft / ArrowRight (on the tabs)`,action:`Switches between Tree and Raw; Home / End go to the first / last tab.`}],aria:['`role="tree"` named by `label`; rows are `treeitem`s with `aria-level`, `aria-posinset`, `aria-setsize`, `aria-selected`, and `aria-expanded` on elements with children, grouped in `role="group"`.',"Each row’s accessible name reads the element without angle brackets (`nc:CaseTrackingID: 24CV012345`); comments, CDATA and processing instructions are prefixed with what they are.","Roving `tabindex`: only the active row and its buttons are in the Tab order.",'Search results and "Copied" are announced through `ScscAnnouncer` (polite).'],appMustProvide:['A `label` naming the document ("Filing envelope ENV-…") when there is more than one on the page; the default is "XML".',`Well-formed input for the tree. The viewer does not validate against a schema; show schema errors next to it.`,"Translations through `labels` when the app is not in English."],a11y:["Follows the WAI-ARIA tree view pattern with a single Tab stop, like `scsc-json-view`.",`Markup punctuation is dimmed but never the only cue: every row also has a spoken name.`,`Token colours reach at least 6.5 : 1 in the light and dark themes and 7 : 1 in high contrast; the search highlight keeps the text colour on a gold tint.`,`The parse error is plain text with the location written out, not only a caret.`],related:[`payload-view`,`json-view`,`code-highlighter`]};export{k as XML_VIEW_DOCS};