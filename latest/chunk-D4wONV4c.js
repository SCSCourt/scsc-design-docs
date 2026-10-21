import{As as uM,Ci as tte,Cs as rM,Es as sD,Fo as dM,Fr as kn,Gn as Zn,Go as g,Hi as y4e,Hs as y_,It as OF,Jr as oe,Jt as RF,Ka as Ov,Lo as d_,Ma as JT,Mr as jn,Ms as uc,Na as Jb,No as cc,Oa as I$1,Ps as ut,Un as Za,V as FF,Vo as fM,Vt as PF,Xa as Pv,Yo as iD,Zi as za,ai as qr,bo as Y_,ci as r4e,cs as lc,ds as nD,fs as nM,gs as oM,ha as Eg,hn as VF,hs as oD,j as DF,ji as vi,ka as Ig,ks as t_,kt as NE,pi as sn,ra as Af,rr as da,rt as IF,sr as ei,ta as $f,ti as qF,tn as T4e,va as G_,vs as pM,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";function xe(a,c){if(a&1&&(Ga(0,`scsc-text`,6),G_(1),Lf()),a&2){let e=y_();Jb(),nD(e.labels().empty)}}var be={heading:`Case notes`,empty:`No notes yet.`,count:a=>a===1?`1 note`:`${a} notes`,add:`Add note`};var Se=new I$1(`CASE_NOTES_LABELS`,{providedIn:`root`,factory:()=>q(be).asReadonly()});var we={es:{heading:`Notas del caso`,empty:`Todavía no hay notas.`,count:a=>a===1?`1 nota`:`${a} notas`,add:`Agregar nota`},vi:{heading:`Ghi chú vụ việc`,empty:`Chưa có ghi chú nào.`,count:a=>`${a} ghi ch\xFA`}};var O=class a{i18n=g(Zn);labels=g(Se);notes=q(0);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-i18n-feature-labels-demo`]],features:[nM([T4e({locales:[`en`,`es`,`vi`],detect:[],storageKey:null,labelPacks:[IF(Se,we,be)]})])],decls:11,vars:6,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-3`],[`variant`,`list`],[1,`rounded-box`,`border`,`border-base-300`,`p-4`],[1,`flex`,`items-baseline`,`justify-between`,`gap-2`],[3,`level`],[`size`,`sm`,`tone`,`muted`,1,`tnum`],[`size`,`sm`,`tone`,`muted`,1,`mt-1`],[`variant`,`secondary`,`size`,`sm`,`outline`,``,1,`mt-3`,3,`click`]],template:function(e,o){e&1&&(Ga(0,`div`,0),uc(1,`scsc-language-switcher`,1),Ga(2,`div`,2)(3,`div`,3)(4,`scsc-heading`,4),G_(5),Lf(),Ga(6,`scsc-text`,5),G_(7),Lf()(),JT(8,xe,2,1,`scsc-text`,6),Ga(9,`scsc-button`,7),lc(`click`,function(){return o.notes.update(C=>C+1)}),G_(10),Lf()()()),e&2&&(cc(`lang`,o.i18n.locale()),Jb(4),Pv(`level`,3),Jb(),nD(o.labels().heading),Jb(2),nD(o.labels().count(o.notes())),Jb(),t_(o.notes()===0?8:-1),Jb(2),$f(` `,o.labels().add,` `))},dependencies:[sn,kn,qF,NE],encapsulation:2})};function Ce(a,c){if(a&1&&(Ga(0,`code`,4),G_(1),Lf()),a&2){let e=y_().$implicit;Jb(),nD(e.message)}}function ve(a,c){if(a&1&&(Ga(0,`code`,4),G_(1),Lf()),a&2){let e=y_().$implicit;Jb(),nD(e.values)}}function _e(a,c){if(a&1&&(Ga(0,`span`),G_(1),Lf()),a&2){let e=y_().$implicit,o=y_();cc(`lang`,o.locale()),Jb(),nD(e.output)}}function Te(a,c){if(a&1&&G_(0),a&2){let e=y_(),o=e.$implicit,w=e.col;$f(` `,o[w.key],` `)}}function ke(a,c){if(a&1&&JT(0,Ce,2,1,`code`,4)(1,ve,2,1,`code`,4)(2,_e,2,2,`span`)(3,Te,1,1),a&2){let e,o=c.col;t_((e=o.key)===`message`?0:e===`values`?1:e===`output`?2:3)}}var Z=new Date(`2026-10-14T16:30:00Z`);var Le=[{syntax:`Argument`,message:`Case {caseNumber} was filed`,params:{caseNumber:`24CV012345`}},{syntax:`Legacy i18next`,message:`Hearing at {{time}}`,params:{time:`9:00 AM`}},{syntax:`plural, =N and #`,message:`{count, plural, =0 {No cases} one {# case} other {# cases}}`,params:{count:1234}},{syntax:`plural with offset:`,message:`{n, plural, offset:1 =0 {Unassigned} =1 {Judge Chen} one {Judge Chen and # other} other {Judge Chen and # others}}`,params:{n:3}},{syntax:`selectordinal`,message:`{n, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} continuance`,params:{n:2}},{syntax:`select`,message:`{role, select, judge {Judicial officer} clerk {Clerk} other {Staff}}`,params:{role:`clerk`}},{syntax:`select nested in plural`,message:`{count, plural, one {{role, select, judge {# judge} other {# person}}} other {{role, select, judge {# judges} other {# people}}}}`,params:{count:3,role:`judge`}},{syntax:`number`,message:`{n, number}`,params:{n:1234567.891}},{syntax:`number, integer`,message:`{n, number, integer}`,params:{n:41.6}},{syntax:`number, percent`,message:`{n, number, percent}`,params:{n:.42}},{syntax:`number, currency`,message:`{amount, number, currency}`,params:{amount:435,currency:`USD`}},{syntax:`number skeleton`,message:`{amount, number, ::currency/USD}`,params:{amount:1234.5}},{syntax:`date, long`,message:`{d, date, long}`,params:{d:Z}},{syntax:`time, short`,message:`{d, time, short}`,params:{d:Z}},{syntax:`date skeleton`,message:`{d, date, ::EEEEMMMd}`,params:{d:Z}},{syntax:`Escaping: '' and '{'`,message:`Type '{caseNumber}' exactly; it''s kept as written`,params:{}}];var K=class a{locale=q(`en`);columns=[{key:`syntax`,header:`Syntax`,width:`11rem`},{key:`message`,header:`Message`},{key:`values`,header:`Values`},{key:`output`,header:`Output`}];rows=ut(()=>Le.map(c=>({syntax:c.syntax,message:c.message,values:JSON.stringify(c.params),output:qr(c.message,c.params,this.locale()??`en`,{timeZone:`America/Los_Angeles`})})));static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-i18n-icu-syntax-demo`]],decls:4,vars:4,consts:[[1,`flex`,`flex-col`,`gap-3`],[`variant`,`select`,1,`max-w-60`,3,`localeChange`,`locale`],[`label`,`ICU message syntax`,3,`columns`,`rows`,`zebra`],[`scscCell`,``],[1,`text-xs`,`break-all`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-language-switcher`,1),sD(`localeChange`,function(C){return Y_(o.locale,C)||(o.locale=C),C}),Lf(),Ga(2,`scsc-table`,2),Ov(3,ke,4,1,`ng-template`,3),Lf()()),e&2&&(Jb(),iD(`locale`,o.locale),Jb(),Pv(`columns`,o.columns)(`rows`,o.rows())(`zebra`,!1))},dependencies:[da,qF,Za],encapsulation:2})};function Ee(a,c){if(a&1&&(Ga(0,`span`),G_(1),Lf(),Ga(2,`span`,5),G_(3),Lf()),a&2){let e=y_().$implicit;cc(`lang`,e.tag),Jb(),nD(e.language),Jb(2),nD(e.tag)}}function Ae(a,c){if(a&1&&(Ga(0,`scsc-badge`,4),G_(1),Lf()),a&2){let e=y_().$implicit;Pv(`tone`,e.tone),Jb(),nD(e.status)}}function Ie(a,c){if(a&1&&(Ga(0,`span`),G_(1),Lf()),a&2){let e=y_().$implicit;cc(`lang`,e.tag),Jb(),nD(e.sample)}}function Pe(a,c){if(a&1&&G_(0),a&2){let e=y_(),o=e.$implicit,w=e.col;$f(` `,o[w.key],` `)}}function De(a,c){if(a&1&&JT(0,Ee,4,3)(1,Ae,2,2,`scsc-badge`,4)(2,Ie,2,2,`span`)(3,Pe,1,1),a&2){let e,o=c.col;t_((e=o.key)===`language`?0:e===`status`?1:e===`sample`?2:3)}}var Ne={source:`Source`,"wcag-provided":`Pending review`,draft:`Machine draft`,reviewed:`Reviewed`};var Be={source:`neutral`,"wcag-provided":`info`,draft:`warning`,reviewed:`success`};var F=class a{columns=[{key:`language`,header:`Language`},{key:`status`,header:`Review status`},{key:`coverage`,header:`Keys translated`,type:`number`},{key:`sample`,header:`pageOf(3, 12)`}];rows=r4e(DF,vi).map(c=>{let e=y4e[c.locale]??`draft`;return{tag:c.locale,language:ei(c.locale).name,status:Ne[e],tone:Be[e],coverage:`${c.translated} / ${c.total}`,sample:tte(DF,vi,c.locale).pageOf(3,12)}});static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-i18n-label-packs-demo`]],decls:5,vars:3,consts:[[1,`flex`,`flex-col`,`gap-3`],[`status`,`warning`,`title`,`Machine-drafted translations`],[`label`,`Library label packs`,3,`columns`,`rows`,`zebra`],[`scscCell`,``],[`soft`,``,3,`tone`],[1,`ms-1`,`text-xs`,`text-base-content/70`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`scsc-alert`,1),G_(2,` The Chinese, Vietnamese, Korean and Tagalog packs were machine-drafted. The court's certified translators or Language Access office must review them before production use. `),Lf(),Ga(3,`scsc-table`,2),Ov(4,De,4,1,`ng-template`,3),Lf()()),e&2&&(Jb(3),Pv(`columns`,o.columns)(`rows`,o.rows)(`zebra`,!1))},dependencies:[za,jn,da,Za],encapsulation:2})};var Me={ar:{common:{heading:`ملخص القضية`,filed:`تاريخ الإيداع`,fee:`الرسوم`,cases:`القضايا المفتوحة`,updated:`آخر تحديث`,note:`يتبع التخطيط اتجاه اللغة.`,next:`متابعة`}},fa:{common:{heading:`خلاصه پرونده`,filed:`تاریخ ثبت`,fee:`هزینه`,cases:`پرونده‌های باز`,updated:`آخرین به‌روزرسانی`,note:`چیدمان از جهت زبان پیروی می‌کند.`,next:`ادامه`}},en:{common:{heading:`Case summary`,filed:`Filed`,fee:`Fee`,cases:`Open cases`,updated:`Updated`,note:`The layout follows the direction of the language.`,next:`Continue`}}};var $=class a{i18n=g(Zn);filed=`2026-09-02T17:00:00Z`;now=Date.parse(`2026-09-30T18:00:00Z`);updated=this.now-108e5;static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-i18n-rtl-smoke-demo`]],features:[nM([T4e({locales:[`ar`,`fa`,`en`],defaultLocale:`ar`,fallbackLocale:`en`,messages:Me,detect:[],storageKey:null})])],decls:42,vars:39,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`p-4`],[1,`flex`,`items-center`,`justify-between`,`gap-2`],[3,`level`],[`triggerDisplay`,`code`],[1,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`font-semibold`],[1,`ms-2`,`tnum`],[1,`ms-2`],[`status`,`info`],[1,`flex`,`justify-end`],[`size`,`sm`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3),uM(4,`scscT`),Lf(),uc(5,`scsc-language-switcher`,3),Lf(),Ga(6,`ul`,4)(7,`li`)(8,`span`,5),G_(9),uM(10,`scscT`),Lf(),Ga(11,`span`,6),G_(12),uM(13,`scscDate`),Lf()(),Ga(14,`li`)(15,`span`,5),G_(16),uM(17,`scscT`),Lf(),Ga(18,`span`,6),G_(19),uM(20,`scscCurrency`),Lf()(),Ga(21,`li`)(22,`span`,5),G_(23),uM(24,`scscT`),Lf(),Ga(25,`span`,6),G_(26),uM(27,`scscNumber`),Lf()(),Ga(28,`li`)(29,`span`,5),G_(30),uM(31,`scscT`),Lf(),Ga(32,`span`,7),G_(33),uM(34,`scscRelativeTime`),Lf()()(),Ga(35,`scsc-alert`,8),G_(36),uM(37,`scscT`),Lf(),Ga(38,`div`,9)(39,`scsc-button`,10),G_(40),uM(41,`scscT`),Lf()()()),e&2&&(cc(`dir`,o.i18n.dir())(`lang`,o.i18n.locale()),Jb(2),Pv(`level`,3),Jb(),nD(dM(4,14,`heading`)),Jb(6),$f(``,dM(10,16,`filed`),`:`),Jb(3),nD(pM(13,18,o.filed,`long`,`America/Los_Angeles`)),Jb(4),$f(``,dM(17,22,`fee`),`:`),Jb(3),nD(dM(20,24,435)),Jb(4),$f(``,dM(24,26,`cases`),`:`),Jb(3),nD(dM(27,28,1284)),Jb(4),$f(``,dM(31,30,`updated`),`:`),Jb(3),nD(fM(34,32,o.updated,o.now)),Jb(3),nD(dM(37,35,`note`)),Jb(4),nD(dM(41,37,`next`)))},dependencies:[za,sn,kn,qF,VF,FF,RF,OF,PF],encapsulation:2})};var je=()=>({name:`Maria Alvarez`});var Re=a=>({count:a});var ze=a=>({date:a,dept:21});var Oe=()=>({amount:435});var He=()=>({year:2026});function Ue(a,c){if(a&1){let e=d_();Ga(0,`scsc-text`),G_(1),uM(2,`scscT`),Lf(),Ga(3,`ul`,4)(4,`li`),G_(5),uM(6,`scscT`),Lf(),Ga(7,`li`),G_(8),uM(9,`scscT`),Lf(),Ga(10,`li`,5),G_(11),uM(12,`scscT`),Lf()(),Ga(13,`div`)(14,`scsc-button`,6),lc(`click`,function(){Eg(e);let w=y_();return Ig(w.count.update(C=>C+1))}),G_(15),uM(16,`scscT`),Lf()(),Ga(17,`scsc-text`,7),G_(18),Lf(),Ga(19,`scsc-text`,7),G_(20),uM(21,`scscT`),Lf()}if(a&2){let e=y_();Jb(),nD(fM(2,9,`portal.welcome`,rM(26,je))),Jb(4),nD(fM(6,12,`hearings.scheduled`,oM(27,Re,e.count()))),Jb(3),nD(fM(9,15,`hearings.next`,oM(29,ze,e.nextHearing))),Jb(3),nD(fM(12,18,`hearings.fee`,rM(31,Oe))),Jb(4),$f(` `,dM(16,21,`hearings.add`),` `),Jb(3),oD(` SCSC_LABELS: `,e.labels().pageOf(3,12),` · `,e.labels().results(e.count()),` · `,e.labels().close,` `),Jb(2),nD(fM(21,23,`footer.copyright`,rM(32,He)))}}function Ke(a,c){a&1&&(Ga(0,`scsc-text`,3),G_(1,`Loading translations…`),Lf())}var Fe={en:{portal:{title:`Court Access Portal`,welcome:`Welcome, {name}`},hearings:{scheduled:`{count, plural, =0 {No hearings scheduled} one {# hearing scheduled} other {# hearings scheduled}}`,next:`Next hearing: {date, date, full} in Department {dept}`,fee:`Filing fee: {amount, number, currency}`,add:`Add a hearing`},footer:{copyright:`© {{year}} Superior Court of California, County of Santa Clara`}},es:{portal:{title:`Portal de Acceso al Tribunal`,welcome:`Bienvenida, {name}`},hearings:{scheduled:`{count, plural, =0 {No hay audiencias programadas} one {# audiencia programada} other {# audiencias programadas}}`,next:`Próxima audiencia: {date, date, full} en el Departamento {dept}`,fee:`Cuota de presentación: {amount, number, currency}`,add:`Agregar una audiencia`},footer:{copyright:`© {{year}} Tribunal Superior de California, Condado de Santa Clara`}},"zh-Hant":{portal:{title:`法院服務入口網站`,welcome:`歡迎，{name}`},hearings:{scheduled:`{count, plural, =0 {沒有排定的聽證} other {已排定 # 場聽證}}`,next:`下一場聽證：{date, date, full}，第 {dept} 庭`,fee:`立案費：{amount, number, currency}`,add:`新增聽證`},footer:{copyright:`© {{year}} 加州聖塔克拉拉郡高等法院`}},vi:{portal:{title:`Cổng Truy cập Tòa án`,welcome:`Chào mừng, {name}`},hearings:{scheduled:`{count, plural, =0 {Không có phiên điều trần nào} other {Đã lên lịch # phiên điều trần}}`,next:`Phiên điều trần tiếp theo: {date, date, full} tại Phòng {dept}`,fee:`Lệ phí nộp đơn: {amount, number, currency}`,add:`Thêm phiên điều trần`},footer:{copyright:`© {{year}} Tòa Thượng thẩm California, Quận Santa Clara`}},ko:{portal:{title:`법원 접근 포털`,welcome:`{name}님, 환영합니다`},hearings:{scheduled:`{count, plural, =0 {예정된 심리 없음} other {예정된 심리 #건}}`,next:`다음 심리: {date, date, full}, 제{dept}법정`,fee:`접수 수수료: {amount, number, currency}`,add:`심리 추가`},footer:{copyright:`© {{year}} 캘리포니아주 샌타클래라 카운티 고등법원`}},tl:{portal:{title:`Portal ng Access sa Hukuman`,welcome:`Maligayang pagdating, {name}`},hearings:{scheduled:`{count, plural, =0 {Walang nakatakdang pagdinig} one {# pagdinig ang nakatakda} other {# pagdinig ang nakatakda}}`,next:`Susunod na pagdinig: {date, date, full} sa Departamento {dept}`,fee:`Bayad sa paghahain: {amount, number, currency}`,add:`Magdagdag ng pagdinig`},footer:{copyright:`© {{year}} Superior Court ng California, County ng Santa Clara`}}};var V=class a{i18n=g(Zn);labels=g(oe);count=q(0);nextHearing=new Date(`2026-10-14T16:30:00Z`);static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-i18n-runtime-switch-demo`]],features:[nM([T4e({loader:c=>new Promise(e=>setTimeout(()=>e(Fe[c]??{}),300)),detect:[],storageKey:null,timeZone:`America/Los_Angeles`})])],decls:8,vars:8,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-2`,`border-b`,`border-base-300`,`pb-2`],[3,`level`],[`size`,`sm`,`tone`,`muted`,`role`,`status`],[1,`flex`,`list-disc`,`flex-col`,`gap-1`,`ps-5`,`text-sm`],[1,`tnum`],[`variant`,`secondary`,`size`,`sm`,`outline`,``,3,`click`],[`size`,`sm`,`tone`,`muted`]],template:function(e,o){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-heading`,2),G_(3),uM(4,`scscT`),Lf(),uc(5,`scsc-language-switcher`),Lf(),JT(6,Ue,22,33)(7,Ke,2,0,`scsc-text`,3),Lf()),e&2&&(cc(`lang`,o.i18n.locale())(`dir`,o.i18n.dir())(`aria-busy`,!o.i18n.ready()||o.i18n.loading()),Jb(2),Pv(`level`,3),Jb(),nD(dM(4,6,`portal.title`)),Jb(3),t_(o.i18n.ready()?6:7))},dependencies:[sn,kn,qF,NE,PF],encapsulation:2})};var I={"i18n-feature-labels":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  InjectionToken,
  inject,
  signal,
  type Signal,
} from '@angular/core';
import {
  ScscButton,
  ScscHeading,
  ScscI18n,
  ScscLanguageSwitcher,
  ScscText,
  scscI18nProviders,
  scscLabelPack,
} from '@scscourt/design';

/** A feature's strings: plain strings, and functions where a value is embedded. */
interface CaseNotesLabels {
  heading: string;
  empty: string;
  count: (n: number) => string;
  add: string;
}

const CASE_NOTES_LABELS_EN: CaseNotesLabels = {
  heading: 'Case notes',
  empty: 'No notes yet.',
  count: (n) => (n === 1 ? '1 note' : \`\${n} notes\`),
  add: 'Add note',
};

/** The feature's token: English by default, so it works without any i18n set up. */
const CASE_NOTES_LABELS = new InjectionToken<Signal<CaseNotesLabels>>('CASE_NOTES_LABELS', {
  providedIn: 'root',
  factory: () => signal(CASE_NOTES_LABELS_EN).asReadonly(),
});

// Packs may be partial: the Vietnamese one has no \`add\`, so that button stays in English.
// (Machine-drafted demo strings.)
const PACKS = {
  es: {
    heading: 'Notas del caso',
    empty: 'Todav\xEDa no hay notas.',
    count: (n: number) => (n === 1 ? '1 nota' : \`\${n} notas\`),
    add: 'Agregar nota',
  },
  vi: {
    heading: 'Ghi ch\xFA v\u1EE5 vi\u1EC7c',
    empty: 'Ch\u01B0a c\xF3 ghi ch\xFA n\xE0o.',
    count: (n: number) => \`\${n} ghi ch\xFA\`,
  },
};

@Component({
  selector: 'app-i18n-feature-labels-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHeading, ScscLanguageSwitcher, ScscText],
  providers: [
    scscI18nProviders({
      locales: ['en', 'es', 'vi'],
      detect: [],
      storageKey: null,
      labelPacks: [scscLabelPack(CASE_NOTES_LABELS, PACKS, CASE_NOTES_LABELS_EN)],
    }),
  ],
  template: \`
    <div class="flex max-w-md flex-col gap-3" [attr.lang]="i18n.locale()">
      <scsc-language-switcher variant="list" />
      <div class="rounded-box border border-base-300 p-4">
        <div class="flex items-baseline justify-between gap-2">
          <scsc-heading [level]="3">{{ labels().heading }}</scsc-heading>
          <scsc-text size="sm" tone="muted" class="tnum">{{ labels().count(notes()) }}</scsc-text>
        </div>
        @if (notes() === 0) {
          <scsc-text size="sm" tone="muted" class="mt-1">{{ labels().empty }}</scsc-text>
        }
        <scsc-button
          class="mt-3"
          variant="secondary"
          size="sm"
          outline
          (click)="notes.update((n) => n + 1)"
        >
          {{ labels().add }}
        </scsc-button>
      </div>
    </div>
  \`,
})
export class I18nFeatureLabelsDemo {
  protected readonly i18n = inject(ScscI18n);
  protected readonly labels = inject(CASE_NOTES_LABELS);
  protected readonly notes = signal(0);
}
`,html:`<div class="flex max-w-md flex-col gap-3" [attr.lang]="i18n.locale()">
  <scsc-language-switcher variant="list" />
  <div class="rounded-box border border-base-300 p-4">
    <div class="flex items-baseline justify-between gap-2">
      <scsc-heading [level]="3">{{ labels().heading }}</scsc-heading>
      <scsc-text size="sm" tone="muted" class="tnum">{{ labels().count(notes()) }}</scsc-text>
    </div>
    @if (notes() === 0) {
      <scsc-text size="sm" tone="muted" class="mt-1">{{ labels().empty }}</scsc-text>
    }
    <scsc-button
      class="mt-3"
      variant="secondary"
      size="sm"
      outline
      (click)="notes.update((n) => n + 1)"
    >
      {{ labels().add }}
    </scsc-button>
  </div>
</div>
`},"i18n-icu-syntax":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscCellDef,
  ScscLanguageSwitcher,
  ScscTable,
  formatMessage,
  type ScscColumn,
  type ScscMessageParams,
} from '@scscourt/design';

interface Example {
  syntax: string;
  message: string;
  params: ScscMessageParams;
}

const HEARING = new Date('2026-10-14T16:30:00Z');

/** Every construct formatMessage() and ScscI18n.t() understand, with a live result. */
const EXAMPLES: Example[] = [
  {
    syntax: 'Argument',
    message: 'Case {caseNumber} was filed',
    params: { caseNumber: '24CV012345' },
  },
  { syntax: 'Legacy i18next', message: 'Hearing at {{time}}', params: { time: '9:00 AM' } },
  {
    syntax: 'plural, =N and #',
    message: '{count, plural, =0 {No cases} one {# case} other {# cases}}',
    params: { count: 1234 },
  },
  {
    syntax: 'plural with offset:',
    message:
      '{n, plural, offset:1 =0 {Unassigned} =1 {Judge Chen} one {Judge Chen and # other} other {Judge Chen and # others}}',
    params: { n: 3 },
  },
  {
    syntax: 'selectordinal',
    message: '{n, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} continuance',
    params: { n: 2 },
  },
  {
    syntax: 'select',
    message: '{role, select, judge {Judicial officer} clerk {Clerk} other {Staff}}',
    params: { role: 'clerk' },
  },
  {
    syntax: 'select nested in plural',
    message:
      '{count, plural, one {{role, select, judge {# judge} other {# person}}} other {{role, select, judge {# judges} other {# people}}}}',
    params: { count: 3, role: 'judge' },
  },
  { syntax: 'number', message: '{n, number}', params: { n: 1234567.891 } },
  { syntax: 'number, integer', message: '{n, number, integer}', params: { n: 41.6 } },
  { syntax: 'number, percent', message: '{n, number, percent}', params: { n: 0.42 } },
  {
    syntax: 'number, currency',
    message: '{amount, number, currency}',
    params: { amount: 435, currency: 'USD' },
  },
  {
    syntax: 'number skeleton',
    message: '{amount, number, ::currency/USD}',
    params: { amount: 1234.5 },
  },
  { syntax: 'date, long', message: '{d, date, long}', params: { d: HEARING } },
  { syntax: 'time, short', message: '{d, time, short}', params: { d: HEARING } },
  { syntax: 'date skeleton', message: '{d, date, ::EEEEMMMd}', params: { d: HEARING } },
  {
    syntax: "Escaping: '' and '{'",
    message: "Type '{caseNumber}' exactly; it''s kept as written",
    params: {},
  },
];

@Component({
  selector: 'app-i18n-icu-syntax-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCellDef, ScscLanguageSwitcher, ScscTable],
  template: \`
    <div class="flex flex-col gap-3">
      <!-- No ScscI18n here: the switcher only emits, and formatMessage() gets the locale. -->
      <scsc-language-switcher variant="select" [(locale)]="locale" class="max-w-60" />
      <scsc-table [columns]="columns" [rows]="rows()" label="ICU message syntax" [zebra]="false">
        <ng-template scscCell let-row let-col="col">
          @switch (col.key) {
            @case ('message') {
              <code class="text-xs break-all">{{ row.message }}</code>
            }
            @case ('values') {
              <code class="text-xs break-all">{{ row.values }}</code>
            }
            @case ('output') {
              <span [attr.lang]="locale()">{{ row.output }}</span>
            }
            @default {
              {{ row[col.key] }}
            }
          }
        </ng-template>
      </scsc-table>
    </div>
  \`,
})
export class I18nIcuSyntaxDemo {
  protected readonly locale = signal<string | null>('en');
  protected readonly columns: ScscColumn<Record<string, unknown>>[] = [
    { key: 'syntax', header: 'Syntax', width: '11rem' },
    { key: 'message', header: 'Message' },
    { key: 'values', header: 'Values' },
    { key: 'output', header: 'Output' },
  ];
  protected readonly rows = computed(() =>
    EXAMPLES.map((e) => ({
      syntax: e.syntax,
      message: e.message,
      values: JSON.stringify(e.params),
      output: formatMessage(e.message, e.params, this.locale() ?? 'en', {
        timeZone: 'America/Los_Angeles',
      }),
    })),
  );
}
`,html:`<div class="flex flex-col gap-3">
  <!-- No ScscI18n here: the switcher only emits, and formatMessage() gets the locale. -->
  <scsc-language-switcher variant="select" [(locale)]="locale" class="max-w-60" />
  <scsc-table [columns]="columns" [rows]="rows()" label="ICU message syntax" [zebra]="false">
    <ng-template scscCell let-row let-col="col">
      @switch (col.key) {
        @case ('message') {
          <code class="text-xs break-all">{{ row.message }}</code>
        }
        @case ('values') {
          <code class="text-xs break-all">{{ row.values }}</code>
        }
        @case ('output') {
          <span [attr.lang]="locale()">{{ row.output }}</span>
        }
        @default {
          {{ row[col.key] }}
        }
      }
    </ng-template>
  </scsc-table>
</div>
`},"i18n-label-packs":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SCSC_LABELS_EN,
  SCSC_LABEL_PACKS,
  SCSC_LABEL_PACK_STATUS,
  ScscAlert,
  ScscBadge,
  ScscCellDef,
  ScscTable,
  resolveLabelPack,
  scscLabelPackCoverage,
  scscLocaleInfo,
  type ScscColumn,
  type ScscLabelPackStatus,
} from '@scscourt/design';

const STATUS_TEXT: Record<ScscLabelPackStatus, string> = {
  source: 'Source',
  'wcag-provided': 'Pending review',
  draft: 'Machine draft',
  reviewed: 'Reviewed',
};
const STATUS_TONE: Record<ScscLabelPackStatus, 'neutral' | 'info' | 'warning' | 'success'> = {
  source: 'neutral',
  'wcag-provided': 'info',
  draft: 'warning',
  reviewed: 'success',
};

@Component({
  selector: 'app-i18n-label-packs-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscBadge, ScscCellDef, ScscTable],
  template: \`
    <div class="flex flex-col gap-3">
      <scsc-alert status="warning" title="Machine-drafted translations">
        The Chinese, Vietnamese, Korean and Tagalog packs were machine-drafted. The court's
        certified translators or Language Access office must review them before production use.
      </scsc-alert>
      <scsc-table [columns]="columns" [rows]="rows" label="Library label packs" [zebra]="false">
        <ng-template scscCell let-row let-col="col">
          @switch (col.key) {
            @case ('language') {
              <span [attr.lang]="row.tag">{{ row.language }}</span>
              <span class="ms-1 text-xs text-base-content/70">{{ row.tag }}</span>
            }
            @case ('status') {
              <scsc-badge soft [tone]="row.tone">{{ row.status }}</scsc-badge>
            }
            @case ('sample') {
              <span [attr.lang]="row.tag">{{ row.sample }}</span>
            }
            @default {
              {{ row[col.key] }}
            }
          }
        </ng-template>
      </scsc-table>
    </div>
  \`,
})
export class I18nLabelPacksDemo {
  protected readonly columns: ScscColumn<Record<string, unknown>>[] = [
    { key: 'language', header: 'Language' },
    { key: 'status', header: 'Review status' },
    { key: 'coverage', header: 'Keys translated', type: 'number' },
    { key: 'sample', header: 'pageOf(3, 12)' },
  ];
  // Live from the library: status, coverage against English, and a sample label.
  protected readonly rows = scscLabelPackCoverage(SCSC_LABEL_PACKS, SCSC_LABELS_EN).map((c) => {
    const status = SCSC_LABEL_PACK_STATUS[c.locale] ?? 'draft';
    return {
      tag: c.locale,
      language: scscLocaleInfo(c.locale).name,
      status: STATUS_TEXT[status],
      tone: STATUS_TONE[status],
      coverage: \`\${c.translated} / \${c.total}\`,
      sample: resolveLabelPack(SCSC_LABEL_PACKS, SCSC_LABELS_EN, c.locale).pageOf(3, 12),
    };
  });
}
`,html:`<div class="flex flex-col gap-3">
  <scsc-alert status="warning" title="Machine-drafted translations">
    The Chinese, Vietnamese, Korean and Tagalog packs were machine-drafted. The court's
    certified translators or Language Access office must review them before production use.
  </scsc-alert>
  <scsc-table [columns]="columns" [rows]="rows" label="Library label packs" [zebra]="false">
    <ng-template scscCell let-row let-col="col">
      @switch (col.key) {
        @case ('language') {
          <span [attr.lang]="row.tag">{{ row.language }}</span>
          <span class="ms-1 text-xs text-base-content/70">{{ row.tag }}</span>
        }
        @case ('status') {
          <scsc-badge soft [tone]="row.tone">{{ row.status }}</scsc-badge>
        }
        @case ('sample') {
          <span [attr.lang]="row.tag">{{ row.sample }}</span>
        }
        @default {
          {{ row[col.key] }}
        }
      }
    </ng-template>
  </scsc-table>
</div>
`},"i18n-rtl-smoke":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScscAlert,
  ScscButton,
  ScscCurrencyPipe,
  ScscDatePipe,
  ScscHeading,
  ScscI18n,
  ScscLanguageSwitcher,
  ScscNumberPipe,
  ScscRelativeTimePipe,
  ScscTranslatePipe,
  scscI18nProviders,
} from '@scscourt/design';

// Machine-drafted demo strings; Arabic and Persian are right-to-left.
const MESSAGES = {
  ar: {
    common: {
      heading: '\u0645\u0644\u062E\u0635 \u0627\u0644\u0642\u0636\u064A\u0629',
      filed: '\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u064A\u062F\u0627\u0639',
      fee: '\u0627\u0644\u0631\u0633\u0648\u0645',
      cases: '\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629',
      updated: '\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B',
      note: '\u064A\u062A\u0628\u0639 \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0644\u063A\u0629.',
      next: '\u0645\u062A\u0627\u0628\u0639\u0629',
    },
  },
  fa: {
    common: {
      heading: '\u062E\u0644\u0627\u0635\u0647 \u067E\u0631\u0648\u0646\u062F\u0647',
      filed: '\u062A\u0627\u0631\u06CC\u062E \u062B\u0628\u062A',
      fee: '\u0647\u0632\u06CC\u0646\u0647',
      cases: '\u067E\u0631\u0648\u0646\u062F\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u0632',
      updated: '\u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC',
      note: '\u0686\u06CC\u062F\u0645\u0627\u0646 \u0627\u0632 \u062C\u0647\u062A \u0632\u0628\u0627\u0646 \u067E\u06CC\u0631\u0648\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F.',
      next: '\u0627\u062F\u0627\u0645\u0647',
    },
  },
  en: {
    common: {
      heading: 'Case summary',
      filed: 'Filed',
      fee: 'Fee',
      cases: 'Open cases',
      updated: 'Updated',
      note: 'The layout follows the direction of the language.',
      next: 'Continue',
    },
  },
};

@Component({
  selector: 'app-i18n-rtl-smoke-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAlert,
    ScscButton,
    ScscCurrencyPipe,
    ScscDatePipe,
    ScscHeading,
    ScscLanguageSwitcher,
    ScscNumberPipe,
    ScscRelativeTimePipe,
    ScscTranslatePipe,
  ],
  providers: [
    scscI18nProviders({
      locales: ['ar', 'fa', 'en'],
      defaultLocale: 'ar',
      fallbackLocale: 'en',
      messages: MESSAGES,
      detect: [],
      storageKey: null,
    }),
  ],
  template: \`
    <!-- dir and lang follow the locale; everything inside uses logical (start/end) spacing. -->
    <div
      class="flex max-w-xl flex-col gap-3 rounded-box border border-base-300 p-4"
      [attr.dir]="i18n.dir()"
      [attr.lang]="i18n.locale()"
    >
      <div class="flex items-center justify-between gap-2">
        <scsc-heading [level]="3">{{ 'heading' | scscT }}</scsc-heading>
        <scsc-language-switcher triggerDisplay="code" />
      </div>
      <ul class="flex flex-col gap-1 text-sm">
        <li>
          <span class="font-semibold">{{ 'filed' | scscT }}:</span>
          <span class="ms-2 tnum">{{ filed | scscDate: 'long' : 'America/Los_Angeles' }}</span>
        </li>
        <li>
          <span class="font-semibold">{{ 'fee' | scscT }}:</span>
          <span class="ms-2 tnum">{{ 435 | scscCurrency }}</span>
        </li>
        <li>
          <span class="font-semibold">{{ 'cases' | scscT }}:</span>
          <span class="ms-2 tnum">{{ 1284 | scscNumber }}</span>
        </li>
        <li>
          <span class="font-semibold">{{ 'updated' | scscT }}:</span>
          <span class="ms-2">{{ updated | scscRelativeTime: now }}</span>
        </li>
      </ul>
      <scsc-alert status="info">{{ 'note' | scscT }}</scsc-alert>
      <div class="flex justify-end">
        <scsc-button size="sm">{{ 'next' | scscT }}</scsc-button>
      </div>
    </div>
  \`,
})
export class I18nRtlSmokeDemo {
  protected readonly i18n = inject(ScscI18n);
  protected readonly filed = '2026-09-02T17:00:00Z';
  protected readonly now = Date.parse('2026-09-30T18:00:00Z');
  protected readonly updated = this.now - 3 * 3600_000;
}
`,html:`<!-- dir and lang follow the locale; everything inside uses logical (start/end) spacing. -->
<div
  class="flex max-w-xl flex-col gap-3 rounded-box border border-base-300 p-4"
  [attr.dir]="i18n.dir()"
  [attr.lang]="i18n.locale()"
>
  <div class="flex items-center justify-between gap-2">
    <scsc-heading [level]="3">{{ 'heading' | scscT }}</scsc-heading>
    <scsc-language-switcher triggerDisplay="code" />
  </div>
  <ul class="flex flex-col gap-1 text-sm">
    <li>
      <span class="font-semibold">{{ 'filed' | scscT }}:</span>
      <span class="ms-2 tnum">{{ filed | scscDate: 'long' : 'America/Los_Angeles' }}</span>
    </li>
    <li>
      <span class="font-semibold">{{ 'fee' | scscT }}:</span>
      <span class="ms-2 tnum">{{ 435 | scscCurrency }}</span>
    </li>
    <li>
      <span class="font-semibold">{{ 'cases' | scscT }}:</span>
      <span class="ms-2 tnum">{{ 1284 | scscNumber }}</span>
    </li>
    <li>
      <span class="font-semibold">{{ 'updated' | scscT }}:</span>
      <span class="ms-2">{{ updated | scscRelativeTime: now }}</span>
    </li>
  </ul>
  <scsc-alert status="info">{{ 'note' | scscT }}</scsc-alert>
  <div class="flex justify-end">
    <scsc-button size="sm">{{ 'next' | scscT }}</scsc-button>
  </div>
</div>
`},"i18n-runtime-switch":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  SCSC_LABELS,
  ScscButton,
  ScscHeading,
  ScscI18n,
  ScscLanguageSwitcher,
  ScscText,
  ScscTranslatePipe,
  scscI18nProviders,
  type ScscMessageBundle,
} from '@scscourt/design';

/*
 * Court Access Portal-style bundles: one JSON file per language and namespace
 * (/i18n/es/common.json). Nested objects become dot keys; ICU and legacy {{name}} both work.
 * The non-English strings are machine-drafted placeholders for the demo.
 */
const BUNDLES: Record<string, ScscMessageBundle> = {
  en: {
    portal: { title: 'Court Access Portal', welcome: 'Welcome, {name}' },
    hearings: {
      scheduled:
        '{count, plural, =0 {No hearings scheduled} one {# hearing scheduled} other {# hearings scheduled}}',
      next: 'Next hearing: {date, date, full} in Department {dept}',
      fee: 'Filing fee: {amount, number, currency}',
      add: 'Add a hearing',
    },
    footer: { copyright: '\xA9 {{year}} Superior Court of California, County of Santa Clara' },
  },
  es: {
    portal: { title: 'Portal de Acceso al Tribunal', welcome: 'Bienvenida, {name}' },
    hearings: {
      scheduled:
        '{count, plural, =0 {No hay audiencias programadas} one {# audiencia programada} other {# audiencias programadas}}',
      next: 'Pr\xF3xima audiencia: {date, date, full} en el Departamento {dept}',
      fee: 'Cuota de presentaci\xF3n: {amount, number, currency}',
      add: 'Agregar una audiencia',
    },
    footer: { copyright: '\xA9 {{year}} Tribunal Superior de California, Condado de Santa Clara' },
  },
  'zh-Hant': {
    portal: { title: '\u6CD5\u9662\u670D\u52D9\u5165\u53E3\u7DB2\u7AD9', welcome: '\u6B61\u8FCE\uFF0C{name}' },
    hearings: {
      scheduled: '{count, plural, =0 {\u6C92\u6709\u6392\u5B9A\u7684\u807D\u8B49} other {\u5DF2\u6392\u5B9A # \u5834\u807D\u8B49}}',
      next: '\u4E0B\u4E00\u5834\u807D\u8B49\uFF1A{date, date, full}\uFF0C\u7B2C {dept} \u5EAD',
      fee: '\u7ACB\u6848\u8CBB\uFF1A{amount, number, currency}',
      add: '\u65B0\u589E\u807D\u8B49',
    },
    footer: { copyright: '\xA9 {{year}} \u52A0\u5DDE\u8056\u5854\u514B\u62C9\u62C9\u90E1\u9AD8\u7B49\u6CD5\u9662' },
  },
  vi: {
    portal: { title: 'C\u1ED5ng Truy c\u1EADp T\xF2a \xE1n', welcome: 'Ch\xE0o m\u1EEBng, {name}' },
    hearings: {
      scheduled:
        '{count, plural, =0 {Kh\xF4ng c\xF3 phi\xEAn \u0111i\u1EC1u tr\u1EA7n n\xE0o} other {\u0110\xE3 l\xEAn l\u1ECBch # phi\xEAn \u0111i\u1EC1u tr\u1EA7n}}',
      next: 'Phi\xEAn \u0111i\u1EC1u tr\u1EA7n ti\u1EBFp theo: {date, date, full} t\u1EA1i Ph\xF2ng {dept}',
      fee: 'L\u1EC7 ph\xED n\u1ED9p \u0111\u01A1n: {amount, number, currency}',
      add: 'Th\xEAm phi\xEAn \u0111i\u1EC1u tr\u1EA7n',
    },
    footer: { copyright: '\xA9 {{year}} T\xF2a Th\u01B0\u1EE3ng th\u1EA9m California, Qu\u1EADn Santa Clara' },
  },
  ko: {
    portal: { title: '\uBC95\uC6D0 \uC811\uADFC \uD3EC\uD138', welcome: '{name}\uB2D8, \uD658\uC601\uD569\uB2C8\uB2E4' },
    hearings: {
      scheduled: '{count, plural, =0 {\uC608\uC815\uB41C \uC2EC\uB9AC \uC5C6\uC74C} other {\uC608\uC815\uB41C \uC2EC\uB9AC #\uAC74}}',
      next: '\uB2E4\uC74C \uC2EC\uB9AC: {date, date, full}, \uC81C{dept}\uBC95\uC815',
      fee: '\uC811\uC218 \uC218\uC218\uB8CC: {amount, number, currency}',
      add: '\uC2EC\uB9AC \uCD94\uAC00',
    },
    footer: { copyright: '\xA9 {{year}} \uCE98\uB9AC\uD3EC\uB2C8\uC544\uC8FC \uC0CC\uD0C0\uD074\uB798\uB77C \uCE74\uC6B4\uD2F0 \uACE0\uB4F1\uBC95\uC6D0' },
  },
  tl: {
    portal: { title: 'Portal ng Access sa Hukuman', welcome: 'Maligayang pagdating, {name}' },
    hearings: {
      scheduled:
        '{count, plural, =0 {Walang nakatakdang pagdinig} one {# pagdinig ang nakatakda} other {# pagdinig ang nakatakda}}',
      next: 'Susunod na pagdinig: {date, date, full} sa Departamento {dept}',
      fee: 'Bayad sa paghahain: {amount, number, currency}',
      add: 'Magdagdag ng pagdinig',
    },
    footer: { copyright: '\xA9 {{year}} Superior Court ng California, County ng Santa Clara' },
  },
};

@Component({
  selector: 'app-i18n-runtime-switch-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHeading, ScscLanguageSwitcher, ScscText, ScscTranslatePipe],
  // Scoped to this demo: switching here does not switch the docs site. An app uses
  // provideScscI18n() in its ApplicationConfig instead, with the same options.
  providers: [
    scscI18nProviders({
      // Simulates fetching /i18n/<locale>/common.json with some latency.
      loader: (locale) =>
        new Promise((resolve) => setTimeout(() => resolve(BUNDLES[locale] ?? {}), 300)),
      detect: [],
      storageKey: null,
      timeZone: 'America/Los_Angeles',
    }),
  ],
  template: \`
    <div
      class="flex max-w-xl flex-col gap-3"
      [attr.lang]="i18n.locale()"
      [attr.dir]="i18n.dir()"
      [attr.aria-busy]="!i18n.ready() || i18n.loading()"
    >
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
        <scsc-heading [level]="3">{{ 'portal.title' | scscT }}</scsc-heading>
        <scsc-language-switcher />
      </div>
      @if (i18n.ready()) {
        <scsc-text>{{ 'portal.welcome' | scscT: { name: 'Maria Alvarez' } }}</scsc-text>
        <ul class="flex list-disc flex-col gap-1 ps-5 text-sm">
          <li>{{ 'hearings.scheduled' | scscT: { count: count() } }}</li>
          <li>{{ 'hearings.next' | scscT: { date: nextHearing, dept: 21 } }}</li>
          <li class="tnum">{{ 'hearings.fee' | scscT: { amount: 435 } }}</li>
        </ul>
        <div>
          <scsc-button variant="secondary" size="sm" outline (click)="count.update((n) => n + 1)">
            {{ 'hearings.add' | scscT }}
          </scsc-button>
        </div>
        <!-- The library's own labels (SCSC_LABELS) follow the same locale. -->
        <scsc-text size="sm" tone="muted">
          SCSC_LABELS: {{ labels().pageOf(3, 12) }} \xB7 {{ labels().results(count()) }} \xB7
          {{ labels().close }}
        </scsc-text>
        <scsc-text size="sm" tone="muted">{{
          'footer.copyright' | scscT: { year: 2026 }
        }}</scsc-text>
      } @else {
        <scsc-text size="sm" tone="muted" role="status">Loading translations\u2026</scsc-text>
      }
    </div>
  \`,
})
export class I18nRuntimeSwitchDemo {
  protected readonly i18n = inject(ScscI18n);
  protected readonly labels = inject(SCSC_LABELS);
  protected readonly count = signal(0);
  protected readonly nextHearing = new Date('2026-10-14T16:30:00Z');
}
`,html:`<div
  class="flex max-w-xl flex-col gap-3"
  [attr.lang]="i18n.locale()"
  [attr.dir]="i18n.dir()"
  [attr.aria-busy]="!i18n.ready() || i18n.loading()"
>
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
    <scsc-heading [level]="3">{{ 'portal.title' | scscT }}</scsc-heading>
    <scsc-language-switcher />
  </div>
  @if (i18n.ready()) {
    <scsc-text>{{ 'portal.welcome' | scscT: { name: 'Maria Alvarez' } }}</scsc-text>
    <ul class="flex list-disc flex-col gap-1 ps-5 text-sm">
      <li>{{ 'hearings.scheduled' | scscT: { count: count() } }}</li>
      <li>{{ 'hearings.next' | scscT: { date: nextHearing, dept: 21 } }}</li>
      <li class="tnum">{{ 'hearings.fee' | scscT: { amount: 435 } }}</li>
    </ul>
    <div>
      <scsc-button variant="secondary" size="sm" outline (click)="count.update((n) => n + 1)">
        {{ 'hearings.add' | scscT }}
      </scsc-button>
    </div>
    <!-- The library's own labels (SCSC_LABELS) follow the same locale. -->
    <scsc-text size="sm" tone="muted">
      SCSC_LABELS: {{ labels().pageOf(3, 12) }} \xB7 {{ labels().results(count()) }} \xB7
      {{ labels().close }}
    </scsc-text>
    <scsc-text size="sm" tone="muted">{{
      'footer.copyright' | scscT: { year: 2026 }
    }}</scsc-text>
  } @else {
    <scsc-text size="sm" tone="muted" role="status">Loading translations\u2026</scsc-text>
  }
</div>
`}};var ba={slug:`i18n`,name:`Internationalization`,classes:[`ScscI18n`,`ScscTranslatePipe`],category:`Services & Directives`,summary:"Runtime translation for apps and for the library itself: the language is a signal, bundles of ICU messages load lazily per namespace, and switching language re-renders in place with no page reload. The library’s own accessible names and announcements (`SCSC_LABELS`) and the `scsc*` formatting pipes follow the same locale.",whenToUse:["**Setup:** `provideScscI18n({ loader, namespaces })` once in the app config. By default the first render waits for the initial bundles, so nobody sees raw keys. Translate with the `scscT` pipe (`{{ 'nav.home' | scscT }}`) or `inject(ScscI18n).t(key, params)` in a `computed()`; both re-evaluate when the language changes.","**Bundles:** one JSON file per language and namespace, in the Court Access Portal layout (`/i18n/es/common.json`). Nested objects become dot keys (`caseSearch.resultsCount`); a key can name its namespace (`dashboard:lists.title`). `loadNamespace('dashboard')` fetches a feature’s bundle when its route opens, and every later language switch loads it too.","**Messages are ICU MessageFormat** (see the syntax table below): arguments, `plural` with `=N`, `#` and `offset:`, `selectordinal`, `select`, nesting, `number` / `date` / `time` styles and skeletons, and apostrophe escaping. Legacy i18next `{{name}}` interpolation also works, so existing Court Access Portal JSON loads unchanged. `formatMessage()` is the same engine as a plain function, with no dependency; a malformed message renders as written and warns once in dev mode, never throws.","**Languages:** the six court languages by default: English, Spanish, Chinese (Traditional), Vietnamese, Korean and Tagalog (`SCSC_DEFAULT_LOCALES`). Add `zh-Hans`, or any tag, through `locales`. Chinese defaults to Traditional (`zh-Hant`), the usual choice for California court language access.","**Negotiation:** whatever is asked for is matched to a supported locale: aliases first (`zh`, `zh-TW`, `zh-HK` → `zh-Hant`; `zh-CN` → `zh-Hans` when enabled; `es-MX`, `es-419` → `es`; `fil` → `tl`), then BCP 47 lookup (`ko-KR` → `ko`). An unsupported tag leaves the language as it is.","**Detection and persistence:** on start the language comes from `?lang=`, then the stored choice, then `navigator.languages` (`detect`, in that order by default), else `defaultLocale`. `setLocale()` stores the choice under `scsc.i18n.locale` through `SCSC_STATE_ADAPTER`, so it lands in the preferences store when one is provided; `storageKey: null` turns that off. URL-routed apps pass a detector function that reads the route, and set `detect` accordingly.","**Switching:** `setLocale(tag)` loads the new language’s bundles before anything changes (the page shows the old language, never keys, meanwhile; `loading()` is true), then updates `locale()`, `dir()`, `<html lang>` and `<html dir>`. If a key is missing, the fallback locale’s message is used, then the key itself, with a dev warning once per key.","**Feature labels:** a feature’s strings live in an `InjectionToken<Signal<T>>` with an English default. `scscLabelPack(token, { es, vi, … }, english)` binds it to the active locale; pass it in `provideScscI18n({ labelPacks: [...] })`. Packs may be partial: a missing key stays in English, so adding a string never breaks a translation. `scscLabelPackCoverage()` reports what is translated.","**Library labels:** `SCSC_LABELS` follows the locale automatically, from the packs in `SCSC_LABEL_PACKS`. Correct or complete a pack with `labels: { vi: { … } }`. **The Chinese, Vietnamese, Korean and Tagalog packs were machine-drafted: the court’s certified translators or Language Access office must review them before production** (see the review-status table below and `SCSC_LABEL_PACK_STATUS`).","**Scoped i18n:** `scscI18nProviders(config)` returns the same providers for a component’s `providers`, for an embedded widget or a demo: switching inside it does not switch the rest of the page, and it leaves `<html lang>` alone (bind `[attr.lang]` and `[attr.dir]` yourself).","**Right to left:** `dir()` is `rtl` for Arabic, Persian, Hebrew and Urdu, and `<html dir>` follows. Lay out with logical utilities (`ms-*` / `me-*`, `ps-*` / `pe-*`, `start-*` / `end-*`, `text-start` / `text-end`, `border-s` / `border-e`, `rounded-s` / `rounded-e`) instead of `ml-*` / `mr-*`, `pl-*` / `pr-*`, `left-*` / `right-*` and `text-left` / `text-right`, so the same markup mirrors itself. Arrows and chevrons that mean “forward” need flipping too (`rtl:-scale-x-100`). The smoke-test demo runs in Arabic.","Angular’s own `@angular/localize` compiles one build per language and cannot switch at runtime; use it only for apps that deploy a build per locale. Angular’s `DatePipe` cannot follow a runtime switch either: use the pipes on the Formatting page."],setup:`// app.config.ts
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { provideScscI18n, type ScscMessageBundle } from '@scscourt/design';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideScscI18n({
      // One JSON file per language and namespace: /i18n/es/common.json
      loader: (locale, ns) => inject(HttpClient).get<ScscMessageBundle>(\`/i18n/\${locale}/\${ns}.json\`),
      namespaces: ['common'],     // loaded up front, for every language
      // locales: ['en', 'es', 'zh-Hant', 'vi', 'ko', 'tl'],   (the default)
      // defaultLocale: 'en', fallbackLocale: 'en',
      // detect: ['query', 'storage', 'navigator'], queryParam: 'lang',
      // storageKey: 'scsc.i18n.locale',
      // labelPacks: [scscLabelPack(SCSC_HISTORY_LABELS, HISTORY_PACKS, SCSC_HISTORY_LABELS_EN)],
    }),
  ],
};

// public/i18n/en/common.json \u2014 the Court Access Portal layout: nested keys, ICU and {{legacy}}
{
  "nav": { "home": "Home", "caseSearch": "Case Search" },
  "caseSearch": {
    "resultsCount": "{count, plural, one {# case found} other {# cases found}}"
  },
  "calendars": {
    "hearingsScheduled": "{count, plural, =0 {No hearings scheduled} one {# hearing scheduled} other {# hearings scheduled}}",
    "scheduleFor": "Schedule for {date, date, long}"
  },
  "footer": { "copyright": "\xA9 {{year}} Superior Court of California" }
}

// any component
<h1>{{ 'nav.caseSearch' | scscT }}</h1>
<p role="status">{{ 'caseSearch.resultsCount' | scscT: { count: results().length } }}</p>
<scsc-language-switcher />`,demos:[{id:`i18n-runtime-switch`,title:`Switching language at runtime`,description:"A scoped `ScscI18n` with a loader that takes 300 ms per bundle. Pick a language: the text stays in the old language until the new bundle arrives, then everything switches at once: messages with plurals, a full date and a currency, and the library’s own `SCSC_LABELS`. Nothing else on this page changes, because the providers are on the demo component.",component:V,source:I[`i18n-runtime-switch`]},{id:`i18n-icu-syntax`,title:`ICU syntax reference`,description:"Every construct the formatter understands, formatted live with `formatMessage()` in the language you pick. Note how plural categories differ: Spanish has `many` (1,000,000), Korean, Vietnamese and Chinese only `other`, and Tagalog uses `other` after 4, 6 and 9.",component:K,source:I[`i18n-icu-syntax`],layout:`full-bleed`},{id:`i18n-label-packs`,title:`Library label packs and their review status`,description:"Read live from `SCSC_LABEL_PACK_STATUS` and `scscLabelPackCoverage()`. English is the source and Spanish came from the WCAG program; the other packs are machine drafts that need review by the court’s certified translators before production.",component:F,source:I[`i18n-label-packs`],layout:`full-bleed`},{id:`i18n-feature-labels`,title:`Translating a feature’s labels with scscLabelPack`,description:"A feature token with English defaults, bound to the locale through `labelPacks`. The Vietnamese pack leaves out `add`, so that button stays in English instead of breaking.",component:O,source:I[`i18n-feature-labels`]},{id:`i18n-rtl-smoke`,title:`Right-to-left smoke test`,description:"Starts in Arabic, with Persian and English to switch to. `dir()` flips the container, spacing uses logical utilities, the menu opens at the end edge, and dates and numbers use each locale’s own digits.",component:$,source:I[`i18n-rtl-smoke`]}],aria:["`setLocale()` sets `<html lang>` and `<html dir>` (WCAG 3.1.1 Language of Page), so screen readers switch voice and pronunciation. A scoped instance leaves `<html>` alone; set `lang` and `dir` on the subtree it translates.","Text in a different language from its surroundings needs its own `lang` (WCAG 3.1.2): `scsc-language-switcher` marks each language name, and demo markup binds `[attr.lang]` on translated regions.","`SCSC_LABELS`, the accessible names and live announcements the library produces itself, switch with the locale, so assistive technology hears the same language as sighted users read."],appMustProvide:[`Reviewed translations. Machine-drafted text (including the library’s draft packs) must be reviewed by the court’s certified translators or Language Access office before production.`,"Translated page titles (`Title`, route `title`) and alt text: they are app content.","A `lang` on any content left in another language, such as an untranslated legal notice.","A language switcher that everyone can find and read (`scsc-language-switcher`), in the same place on every page (WCAG 3.2.3)."],a11y:[`Switching language never reloads the page and never moves focus, so keyboard and screen-reader users keep their place.`,"The new language’s bundles load before anything switches, so there is no moment where raw keys (`caseSearch.resultsCount`) are read out.","Plural rules come from the platform (`Intl.PluralRules`), so counts read correctly in every language (“1 caso”, “결과 12개”), and `#` uses the locale’s digits and separators.",'Right-to-left locales set `dir="rtl"`; components laid out with logical properties mirror correctly, and the text of each language keeps its own direction inside mixed content.'],related:[`language-switcher`,`formatting`,`a11y-utilities`]};export{ba as I18N_DOCS};