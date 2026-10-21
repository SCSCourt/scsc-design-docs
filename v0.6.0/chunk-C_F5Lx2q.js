import{At as NP,Ms as uc,Na as Jb,Ps as ut,Vr as mN,Xa as Pv,ra as Af,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var d={"description-list-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscDescriptionItem, ScscDescriptionList } from '@scscourt/design';

@Component({
  selector: 'app-description-list-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDescriptionList],
  template: \`<scsc-description-list [items]="caseDetails" />\`,
})
export class DescriptionListBasicDemo {
  protected readonly caseDetails: ScscDescriptionItem[] = [
    { term: 'Case number', value: '24CV012345', numeric: true },
    { term: 'Case type', value: 'Civil \u2014 Unlimited' },
    { term: 'Filed', value: '2024-03-12', numeric: true },
    { term: 'Department', value: '21' },
    { term: 'Judicial officer', value: 'Hon. R. Whitfield' },
    { term: 'Next hearing', value: '2026-10-14 09:00', numeric: true },
  ];
}
`,html:`<scsc-description-list [items]="caseDetails" />
`},"description-list-formatted":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscCard, ScscDescriptionList, type ScscDescriptionItem } from '@scscourt/design';

/** The shape your API returns: raw ISO dates, numbers, and possibly missing fields. */
interface Hearing {
  caseNumber: string;
  type: string;
  startsAt: string;
  department: number;
  judge: string | null;
  interpreter: string | null;
  motionFee: number;
}

const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' });
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

@Component({
  selector: 'app-description-list-formatted-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscDescriptionList],
  template: \`
    <scsc-card title="Hearing details" class="max-w-lg">
      <scsc-description-list [items]="items()" />
    </scsc-card>
  \`,
})
export class DescriptionListFormattedDemo {
  protected readonly hearing = signal<Hearing>({
    caseNumber: '24CV012345',
    type: 'Motion to compel further responses',
    startsAt: '2026-10-14T09:00:00',
    department: 6,
    judge: 'Hon. Maria Delgado',
    interpreter: null,
    motionFee: 60,
  });

  /** Values are strings: format dates and money here, and say "None" rather than leave a gap. */
  protected readonly items = computed<ScscDescriptionItem[]>(() => {
    const h = this.hearing();
    return [
      { term: 'Case number', value: h.caseNumber, numeric: true },
      { term: 'Hearing type', value: h.type },
      { term: 'Date and time', value: date.format(new Date(h.startsAt)), numeric: true },
      { term: 'Department', value: 'Dept. ' + h.department },
      { term: 'Judicial officer', value: h.judge ?? 'Not yet assigned' },
      { term: 'Interpreter', value: h.interpreter ?? 'None requested' },
      { term: 'Motion fee', value: money.format(h.motionFee), numeric: true },
    ];
  });
}
`,html:`<scsc-card title="Hearing details" class="max-w-lg">
  <scsc-description-list [items]="items()" />
</scsc-card>
`},"description-list-in-card":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscCard, ScscDescriptionItem, ScscDescriptionList } from '@scscourt/design';

@Component({
  selector: 'app-description-list-in-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCard, ScscDescriptionList],
  template: \`
    <scsc-card title="Plaintiff" class="max-w-md">
      <scsc-description-list [items]="party" />
    </scsc-card>
  \`,
})
export class DescriptionListInCardDemo {
  protected readonly party: ScscDescriptionItem[] = [
    { term: 'Name', value: 'Maria Alvarez' },
    { term: 'Role', value: 'Plaintiff' },
    { term: 'Counsel', value: 'D. Reyes, Esq. (SBN 214577)' },
    { term: 'Phone', value: '(408) 555-0142', numeric: true },
  ];
}
`,html:`<scsc-card title="Plaintiff" class="max-w-md">
  <scsc-description-list [items]="party" />
</scsc-card>
`}};var u=class s{caseDetails=[{term:`Case number`,value:`24CV012345`,numeric:!0},{term:`Case type`,value:`Civil — Unlimited`},{term:`Filed`,value:`2024-03-12`,numeric:!0},{term:`Department`,value:`21`},{term:`Judicial officer`,value:`Hon. R. Whitfield`},{term:`Next hearing`,value:`2026-10-14 09:00`,numeric:!0}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-description-list-basic-demo`]],decls:1,vars:1,consts:[[3,`items`]],template:function(e,o){e&1&&uc(0,`scsc-description-list`,0),e&2&&Pv(`items`,o.caseDetails)},dependencies:[NP],encapsulation:2})};var v=new Intl.DateTimeFormat(`en-US`,{dateStyle:`medium`,timeStyle:`short`});var C=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`});var D=class s{hearing=q({caseNumber:`24CV012345`,type:`Motion to compel further responses`,startsAt:`2026-10-14T09:00:00`,department:6,judge:`Hon. Maria Delgado`,interpreter:null,motionFee:60});items=ut(()=>{let t=this.hearing();return[{term:`Case number`,value:t.caseNumber,numeric:!0},{term:`Hearing type`,value:t.type},{term:`Date and time`,value:v.format(new Date(t.startsAt)),numeric:!0},{term:`Department`,value:`Dept. `+t.department},{term:`Judicial officer`,value:t.judge??`Not yet assigned`},{term:`Interpreter`,value:t.interpreter??`None requested`},{term:`Motion fee`,value:C.format(t.motionFee),numeric:!0}]});static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-description-list-formatted-demo`]],decls:2,vars:1,consts:[[`title`,`Hearing details`,1,`max-w-lg`],[3,`items`]],template:function(e,o){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-description-list`,1),Lf()),e&2&&(Jb(),Pv(`items`,o.items()))},dependencies:[mN,NP],encapsulation:2})};var y=class s{party=[{term:`Name`,value:`Maria Alvarez`},{term:`Role`,value:`Plaintiff`},{term:`Counsel`,value:`D. Reyes, Esq. (SBN 214577)`},{term:`Phone`,value:`(408) 555-0142`,numeric:!0}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-description-list-in-card-demo`]],decls:2,vars:1,consts:[[`title`,`Plaintiff`,1,`max-w-md`],[3,`items`]],template:function(e,o){e&1&&(Ga(0,`scsc-card`,0),uc(1,`scsc-description-list`,1),Lf()),e&2&&(Jb(),Pv(`items`,o.party))},dependencies:[mN,NP],encapsulation:2})};var O={slug:`description-list`,name:`Description List`,classes:[`ScscDescriptionList`],category:`Data Display`,whenToUse:[`Read-only key/value facts about one thing: case metadata, a party, a hearing. Four to eight pairs is the sweet spot.`,"Set `numeric` on identifiers, dates and amounts so they use tabular numerals and line up.",'Values are strings — build the items in a `computed()` from your record, formatting dates and money there and replacing missing values with words ("Not yet assigned"). For editable facts use a form; for many records use a table.',`Terms are the tracking key, so keep them unique within one list.`],demos:[{id:`description-list-basic`,title:`Case details`,description:"Two columns on wide screens, one on narrow. `numeric` values use tabular numerals.",component:u,source:d[`description-list-basic`]},{id:`description-list-in-card`,title:`Inside a card`,description:"The usual home for a description list: a titled `scsc-card`.",component:y,source:d[`description-list-in-card`]},{id:`description-list-formatted`,title:`Built from a record`,description:"A typed API record mapped in a `computed()`: `Intl` formats the date and fee, and null fields become words instead of gaps.",component:D,source:d[`description-list-formatted`]}],a11y:['Renders a semantic `<dl>` with `<dt>`/`<dd>` pairs, so screen readers read "term, value".',`Terms are styled as small uppercase eyebrows but the text is stored in normal case, so they are read naturally.`,`An empty value reads as nothing at all; always give missing data a word ("None requested").`],related:[`card`,`case-header`,`contact-block`,`list`]};export{O as DESCRIPTION_LIST_DOCS};