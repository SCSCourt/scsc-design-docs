import{As as uM,Cs as rM,Es as sD,Fo as dM,Fr as kn,Gn as Zn,Go as g,Hs as y_,It as OF,Jt as RF,Ms as uc,Na as Jb,Ni as vt,No as cc,Ps as ut,Ss as rD,V as FF,Vo as fM,Xa as Pv,Yi as yt,Yo as iD,Zo as i_,_a as Ff,_s as o_,bo as Y_,ds as nD,fs as nM,hn as VF,oo as Uv,pn as Ui,qo as ge,ra as Af,ta as $f,ti as qF,tn as T4e,ts as jf,va as G_,vs as pM,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var te=(c,s)=>s.key;var ae=(c,s)=>s.id;function ie(c,s){if(c&1&&(Ga(0,`li`,6)(1,`span`),G_(2),Lf(),Ga(3,`span`),G_(4),Lf()()),c&2){let e=s.$implicit;Jb(2),rD(``,e.time,` · `,e.caseNumber),Jb(2),nD(e.fee)}}function ne(c,s){if(c&1&&(Ga(0,`section`)(1,`scsc-heading`,4),G_(2),Lf(),Ga(3,`ul`,5),o_(4,ie,5,3,`li`,6,ae),Lf()()),c&2){let e=s.$implicit;Jb(),Pv(`level`,3)(`visualLevel`,6),Jb(),nD(e.heading),Jb(2),i_(e.items)}}var A=`America/Los_Angeles`;var Q=[{id:`h1`,caseNumber:`24CV012345`,at:`2026-10-14T16:30:00Z`,fee:435},{id:`h2`,caseNumber:`24FL004411`,at:`2026-10-14T20:00:00Z`,fee:60},{id:`h3`,caseNumber:`25SC000917`,at:`2026-10-15T17:00:00Z`,fee:75},{id:`h4`,caseNumber:`25UD001203`,at:`2026-10-16T22:15:00Z`,fee:240}];var _=class c{locale=q(`en`);days=ut(()=>{let s=this.locale()??`en`,e=new Map;for(let i of Q){let u=Ui(i.at,A);e.set(u,[...e.get(u)??[],i])}return[...e].map(([i,u])=>({key:i,heading:vt(u[0].at,s,{weekday:`long`,month:`long`,day:`numeric`,timeZone:A}),items:u.map(d=>({id:d.id,caseNumber:d.caseNumber,time:vt(d.at,s,{timeStyle:`short`,timeZone:A}),fee:yt(d.fee,s,{style:`currency`,currency:`USD`})}))}))});total=ut(()=>yt(Q.reduce((s,e)=>s+e.fee,0),this.locale()??`en`,{style:`currency`,currency:`USD`}));static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-formatting-functions-demo`]],decls:7,vars:3,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`variant`,`select`,1,`max-w-60`,3,`localeChange`,`locale`],[1,`flex`,`flex-col`,`gap-4`],[1,`text-sm`,`font-semibold`,`tnum`],[3,`level`,`visualLevel`],[1,`mt-1`,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`flex`,`justify-between`,`gap-4`,`tnum`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`scsc-language-switcher`,1),sD(`localeChange`,function(d){return Y_(i.locale,d)||(i.locale=d),d}),Lf(),Ga(2,`div`,2),o_(3,ne,6,3,`section`,null,te),Ga(5,`p`,3),G_(6),Lf()()()),e&2&&(Jb(),iD(`locale`,i.locale),Jb(),cc(`lang`,i.locale()),Jb(),i_(i.days()),Jb(3),nD(i.total()))},dependencies:[kn,qF],encapsulation:2})};var se=()=>({dateStyle:`medium`,timeStyle:`short`});var oe=()=>({notation:`compact`});var ce=()=>({style:`percent`,maximumFractionDigits:1});var re=()=>({currencySign:`accounting`});var N=class c{i18n=g(Zn);zone=`America/Los_Angeles`;now=Date.parse(`2026-09-30T18:00:00Z`);hearing=`2026-10-14T16:30:00Z`;updated=this.now-15e5;static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-formatting-pipes-demo`]],features:[nM([T4e({detect:[],storageKey:null})])],decls:53,vars:47,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`variant`,`select`,1,`max-w-60`],[1,`grid`,`grid-cols-1`,`gap-x-6`,`gap-y-2`,`text-sm`,`sm:grid-cols-[auto_1fr]`],[1,`font-semibold`],[1,`tnum`]],template:function(e,i){e&1&&(Ga(0,`div`,0),uc(1,`scsc-language-switcher`,1),Ga(2,`dl`,2)(3,`dt`,3),G_(4,`Hearing date`),Lf(),Ga(5,`dd`,4),G_(6),uM(7,`scscDate`),Lf(),Ga(8,`dt`,3),G_(9,`Date and time`),Lf(),Ga(10,`dd`,4),G_(11),uM(12,`scscDate`),Lf(),Ga(13,`dt`,3),G_(14,`Short date`),Lf(),Ga(15,`dd`,4),G_(16),uM(17,`scscDate`),Lf(),Ga(18,`dt`,3),G_(19,`Filings this year`),Lf(),Ga(20,`dd`,4),G_(21),uM(22,`scscNumber`),Lf(),Ga(23,`dt`,3),G_(24,`Compact`),Lf(),Ga(25,`dd`,4),G_(26),uM(27,`scscNumber`),Lf(),Ga(28,`dt`,3),G_(29,`Collected`),Lf(),Ga(30,`dd`,4),G_(31),uM(32,`scscNumber`),Lf(),Ga(33,`dt`,3),G_(34,`Filing fee`),Lf(),Ga(35,`dd`,4),G_(36),uM(37,`scscCurrency`),Lf(),Ga(38,`dt`,3),G_(39,`Refund`),Lf(),Ga(40,`dd`,4),G_(41),uM(42,`scscCurrency`),Lf(),Ga(43,`dt`,3),G_(44,`Last updated`),Lf(),Ga(45,`dd`),G_(46),uM(47,`scscRelativeTime`),Lf(),Ga(48,`dt`,3),G_(49,`Hearing`),Lf(),Ga(50,`dd`),G_(51),uM(52,`scscRelativeTime`),Lf()()()),e&2&&(Jb(2),cc(`lang`,i.i18n.locale()),Jb(4),nD(pM(7,11,i.hearing,`full`,i.zone)),Jb(5),$f(` `,pM(12,15,i.hearing,rM(43,se),i.zone),` `),Jb(5),nD(pM(17,19,i.hearing,`short`,i.zone)),Jb(5),nD(dM(22,23,128450)),Jb(5),nD(fM(27,25,128450,rM(44,oe))),Jb(5),$f(` `,fM(32,28,.873,rM(45,ce)),` `),Jb(5),nD(dM(37,31,435)),Jb(5),nD(pM(42,33,-25,`USD`,rM(46,re))),Jb(5),nD(fM(47,37,i.updated,i.now)),Jb(5),nD(fM(52,40,i.hearing,i.now)))},dependencies:[qF,VF,FF,RF,OF],encapsulation:2})};var le=()=>({dateStyle:`medium`,timeStyle:`short`});var de=(c,s)=>s.id;function me(c,s){if(c&1&&(Ff(0,`li`,1)(1,`span`),G_(2),jf(),Ff(3,`time`,2),uM(4,`scscDate`),G_(5),uM(6,`scscRelativeTime`),jf()()),c&2){let e=s.$implicit,i=y_();Jb(2),nD(e.text),Jb(),Uv(`title`,fM(4,4,e.at,rM(10,le))),cc(`datetime`,i.iso(e.at)),Jb(2),nD(fM(6,7,e.at,i.now()))}}var F=class c{now=q(Date.now());start=Date.now();activity=[{id:`a1`,text:`Clerk accepted filing FL-300`,at:this.start-3e4},{id:`a2`,text:`Tentative ruling posted, Dept. 21`,at:this.start-72e4},{id:`a3`,text:`Fee waiver FW-003 granted`,at:this.start-108e5},{id:`a4`,text:`Hearing continued to 10/14`,at:this.start-936e5},{id:`a5`,text:`Case 24CV012345 opened`,at:this.start-7776e5}];iso(s){return new Date(s).toISOString()}constructor(){let s=setInterval(()=>this.now.set(Date.now()),15e3);g(ge).onDestroy(()=>clearInterval(s))}static ɵfac=function(e){return new(e||c)};static ɵcmp=Af({type:c,selectors:[[`app-formatting-relative-ticking-demo`]],decls:3,vars:0,consts:[[1,`flex`,`max-w-lg`,`flex-col`,`divide-y`,`divide-base-300`,`text-sm`],[1,`flex`,`items-baseline`,`justify-between`,`gap-4`,`py-2`],[1,`shrink-0`,`text-base-content/80`,3,`title`]],template:function(e,i){e&1&&(Ff(0,`ul`,0),o_(1,me,7,11,`li`,1,de),jf()),e&2&&(Jb(),i_(i.activity))},dependencies:[FF,OF],encapsulation:2})};var E={"formatting-functions":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscHeading,
  ScscLanguageSwitcher,
  dayKey,
  formatDateTime,
  formatNumber,
} from '@scscourt/design';

interface Hearing {
  id: string;
  caseNumber: string;
  at: string;
  fee: number;
}

const ZONE = 'America/Los_Angeles';
const HEARINGS: Hearing[] = [
  { id: 'h1', caseNumber: '24CV012345', at: '2026-10-14T16:30:00Z', fee: 435 },
  { id: 'h2', caseNumber: '24FL004411', at: '2026-10-14T20:00:00Z', fee: 60 },
  { id: 'h3', caseNumber: '25SC000917', at: '2026-10-15T17:00:00Z', fee: 75 },
  { id: 'h4', caseNumber: '25UD001203', at: '2026-10-16T22:15:00Z', fee: 240 },
];

@Component({
  selector: 'app-formatting-functions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscLanguageSwitcher],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <!-- No ScscI18n: the switcher only emits; the functions take the locale explicitly. -->
      <scsc-language-switcher variant="select" [(locale)]="locale" class="max-w-60" />
      <div [attr.lang]="locale()" class="flex flex-col gap-4">
        @for (day of days(); track day.key) {
          <section>
            <scsc-heading [level]="3" [visualLevel]="6">{{ day.heading }}</scsc-heading>
            <ul class="mt-1 flex flex-col gap-1 text-sm">
              @for (h of day.items; track h.id) {
                <li class="flex justify-between gap-4 tnum">
                  <span>{{ h.time }} \xB7 {{ h.caseNumber }}</span>
                  <span>{{ h.fee }}</span>
                </li>
              }
            </ul>
          </section>
        }
        <p class="text-sm font-semibold tnum">{{ total() }}</p>
      </div>
    </div>
  \`,
})
export class FormattingFunctionsDemo {
  protected readonly locale = signal<string | null>('en');

  /** Group by calendar day in the court's time zone, then format each part in the locale. */
  protected readonly days = computed(() => {
    const locale = this.locale() ?? 'en';
    const groups = new Map<string, Hearing[]>();
    for (const h of HEARINGS) {
      const key = dayKey(h.at, ZONE);
      groups.set(key, [...(groups.get(key) ?? []), h]);
    }
    return [...groups].map(([key, items]) => ({
      key,
      heading: formatDateTime(items[0].at, locale, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        timeZone: ZONE,
      }),
      items: items.map((h) => ({
        id: h.id,
        caseNumber: h.caseNumber,
        time: formatDateTime(h.at, locale, { timeStyle: 'short', timeZone: ZONE }),
        fee: formatNumber(h.fee, locale, { style: 'currency', currency: 'USD' }),
      })),
    }));
  });

  protected readonly total = computed(() =>
    formatNumber(
      HEARINGS.reduce((sum, h) => sum + h.fee, 0),
      this.locale() ?? 'en',
      { style: 'currency', currency: 'USD' },
    ),
  );
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <!-- No ScscI18n: the switcher only emits; the functions take the locale explicitly. -->
  <scsc-language-switcher variant="select" [(locale)]="locale" class="max-w-60" />
  <div [attr.lang]="locale()" class="flex flex-col gap-4">
    @for (day of days(); track day.key) {
      <section>
        <scsc-heading [level]="3" [visualLevel]="6">{{ day.heading }}</scsc-heading>
        <ul class="mt-1 flex flex-col gap-1 text-sm">
          @for (h of day.items; track h.id) {
            <li class="flex justify-between gap-4 tnum">
              <span>{{ h.time }} \xB7 {{ h.caseNumber }}</span>
              <span>{{ h.fee }}</span>
            </li>
          }
        </ul>
      </section>
    }
    <p class="text-sm font-semibold tnum">{{ total() }}</p>
  </div>
</div>
`},"formatting-pipes":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScscCurrencyPipe,
  ScscDatePipe,
  ScscI18n,
  ScscLanguageSwitcher,
  ScscNumberPipe,
  ScscRelativeTimePipe,
  scscI18nProviders,
} from '@scscourt/design';

@Component({
  selector: 'app-formatting-pipes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscCurrencyPipe,
    ScscDatePipe,
    ScscLanguageSwitcher,
    ScscNumberPipe,
    ScscRelativeTimePipe,
  ],
  // The pipes read SCSC_LOCALE, which ScscI18n drives (scoped to this demo here).
  providers: [scscI18nProviders({ detect: [], storageKey: null })],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <scsc-language-switcher variant="select" class="max-w-60" />
      <dl
        class="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]"
        [attr.lang]="i18n.locale()"
      >
        <dt class="font-semibold">Hearing date</dt>
        <dd class="tnum">{{ hearing | scscDate: 'full' : zone }}</dd>
        <dt class="font-semibold">Date and time</dt>
        <dd class="tnum">
          {{ hearing | scscDate: { dateStyle: 'medium', timeStyle: 'short' } : zone }}
        </dd>
        <dt class="font-semibold">Short date</dt>
        <dd class="tnum">{{ hearing | scscDate: 'short' : zone }}</dd>
        <dt class="font-semibold">Filings this year</dt>
        <dd class="tnum">{{ 128450 | scscNumber }}</dd>
        <dt class="font-semibold">Compact</dt>
        <dd class="tnum">{{ 128450 | scscNumber: { notation: 'compact' } }}</dd>
        <dt class="font-semibold">Collected</dt>
        <dd class="tnum">
          {{ 0.873 | scscNumber: { style: 'percent', maximumFractionDigits: 1 } }}
        </dd>
        <dt class="font-semibold">Filing fee</dt>
        <dd class="tnum">{{ 435 | scscCurrency }}</dd>
        <dt class="font-semibold">Refund</dt>
        <dd class="tnum">{{ -25 | scscCurrency: 'USD' : { currencySign: 'accounting' } }}</dd>
        <dt class="font-semibold">Last updated</dt>
        <dd>{{ updated | scscRelativeTime: now }}</dd>
        <dt class="font-semibold">Hearing</dt>
        <dd>{{ hearing | scscRelativeTime: now }}</dd>
      </dl>
    </div>
  \`,
})
export class FormattingPipesDemo {
  protected readonly i18n = inject(ScscI18n);
  protected readonly zone = 'America/Los_Angeles';
  protected readonly now = Date.parse('2026-09-30T18:00:00Z');
  protected readonly hearing = '2026-10-14T16:30:00Z';
  protected readonly updated = this.now - 25 * 60_000;
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <scsc-language-switcher variant="select" class="max-w-60" />
  <dl
    class="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]"
    [attr.lang]="i18n.locale()"
  >
    <dt class="font-semibold">Hearing date</dt>
    <dd class="tnum">{{ hearing | scscDate: 'full' : zone }}</dd>
    <dt class="font-semibold">Date and time</dt>
    <dd class="tnum">
      {{ hearing | scscDate: { dateStyle: 'medium', timeStyle: 'short' } : zone }}
    </dd>
    <dt class="font-semibold">Short date</dt>
    <dd class="tnum">{{ hearing | scscDate: 'short' : zone }}</dd>
    <dt class="font-semibold">Filings this year</dt>
    <dd class="tnum">{{ 128450 | scscNumber }}</dd>
    <dt class="font-semibold">Compact</dt>
    <dd class="tnum">{{ 128450 | scscNumber: { notation: 'compact' } }}</dd>
    <dt class="font-semibold">Collected</dt>
    <dd class="tnum">
      {{ 0.873 | scscNumber: { style: 'percent', maximumFractionDigits: 1 } }}
    </dd>
    <dt class="font-semibold">Filing fee</dt>
    <dd class="tnum">{{ 435 | scscCurrency }}</dd>
    <dt class="font-semibold">Refund</dt>
    <dd class="tnum">{{ -25 | scscCurrency: 'USD' : { currencySign: 'accounting' } }}</dd>
    <dt class="font-semibold">Last updated</dt>
    <dd>{{ updated | scscRelativeTime: now }}</dd>
    <dt class="font-semibold">Hearing</dt>
    <dd>{{ hearing | scscRelativeTime: now }}</dd>
  </dl>
</div>
`},"formatting-relative-ticking":{ts:`import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { ScscDatePipe, ScscRelativeTimePipe } from '@scscourt/design';

interface Activity {
  id: string;
  text: string;
  at: number;
}

@Component({
  selector: 'app-formatting-relative-ticking-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDatePipe, ScscRelativeTimePipe],
  template: \`
    <ul class="flex max-w-lg flex-col divide-y divide-base-300 text-sm">
      @for (a of activity; track a.id) {
        <li class="flex items-baseline justify-between gap-4 py-2">
          <span>{{ a.text }}</span>
          <!-- The exact date is in datetime and the tooltip; the relative text ticks with now(). -->
          <time
            class="shrink-0 text-base-content/80"
            [attr.datetime]="iso(a.at)"
            [title]="a.at | scscDate: { dateStyle: 'medium', timeStyle: 'short' }"
            >{{ a.at | scscRelativeTime: now() }}</time
          >
        </li>
      }
    </ul>
  \`,
})
export class FormattingRelativeTickingDemo {
  /** The reference time. Ticking a signal keeps OnPush views current without polling the DOM. */
  protected readonly now = signal(Date.now());

  private readonly start = Date.now();
  protected readonly activity: Activity[] = [
    { id: 'a1', text: 'Clerk accepted filing FL-300', at: this.start - 30_000 },
    { id: 'a2', text: 'Tentative ruling posted, Dept. 21', at: this.start - 12 * 60_000 },
    { id: 'a3', text: 'Fee waiver FW-003 granted', at: this.start - 3 * 3600_000 },
    { id: 'a4', text: 'Hearing continued to 10/14', at: this.start - 26 * 3600_000 },
    { id: 'a5', text: 'Case 24CV012345 opened', at: this.start - 9 * 86_400_000 },
  ];

  protected iso(at: number): string {
    return new Date(at).toISOString();
  }

  constructor() {
    const timer = setInterval(() => this.now.set(Date.now()), 15_000);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }
}
`,html:`<ul class="flex max-w-lg flex-col divide-y divide-base-300 text-sm">
  @for (a of activity; track a.id) {
    <li class="flex items-baseline justify-between gap-4 py-2">
      <span>{{ a.text }}</span>
      <!-- The exact date is in datetime and the tooltip; the relative text ticks with now(). -->
      <time
        class="shrink-0 text-base-content/80"
        [attr.datetime]="iso(a.at)"
        [title]="a.at | scscDate: { dateStyle: 'medium', timeStyle: 'short' }"
        >{{ a.at | scscRelativeTime: now() }}</time
      >
    </li>
  }
</ul>
`}};var Pe={slug:`formatting`,name:`Formatting`,classes:[`ScscDatePipe`,`ScscNumberPipe`,`ScscCurrencyPipe`,`ScscRelativeTimePipe`],category:`Services & Directives`,summary:"Dates, numbers, money and relative times in the active language, on the platform `Intl` APIs. The pipes follow a runtime language switch, which Angular’s `DatePipe`, `DecimalPipe` and `CurrencyPipe` cannot (they are fixed to `LOCALE_ID` at build time), and need no locale data registered.",whenToUse:["`scscDate`: a preset (`short`, `medium` (default), `long`, `full`) or any `Intl.DateTimeFormatOptions`, plus an optional IANA time zone. Court dates usually want `America/Los_Angeles`, so a hearing reads the same wherever the user is.","`scscNumber` for counts, percentages and compact numbers; `scscCurrency` for money (US dollars unless you pass a code; `currencySign: 'accounting'` shows refunds in parentheses); `scscRelativeTime` for “5 minutes ago” and “in 2 weeks”.","All four read `SCSC_LOCALE`, which `provideScscI18n()` drives. Without it they follow `LOCALE_ID`. They are impure but memoized: the same value, arguments and locale return the cached string without formatting again.","Relative times go stale while a page stays open. Pass a reference time, `{{ at | scscRelativeTime: now() }}`, and tick a `now` signal every 15–60 seconds (`setInterval` cleaned up with `DestroyRef`). Without `now`, the time is read on each change detection, which an OnPush view may not run.","In code, use the same engine as functions: `formatDateTime(value, locale, style)`, `formatNumber(value, locale, options)`, `formatRelativeTime(value, locale, now)`, with `inject(SCSC_LOCALE)` in a `computed()`. `dayKey(value, timeZone)` gives a stable `YYYY-MM-DD` for grouping lists by day. `toDate()` parses `Date`, ISO strings and epoch milliseconds.","Empty or invalid input renders as an empty string, never as “Invalid Date” or `NaN`."],setup:`// Nothing to register: no locale data, no LOCALE_ID per language.
// With runtime i18n, the pipes follow the language automatically:
provideScscI18n({ loader });

// Without it, they follow LOCALE_ID, or your own locale signal:
{ provide: SCSC_LOCALE, useFactory: () => inject(MyLanguageStore).locale }

// In code
private readonly locale = inject(SCSC_LOCALE);
readonly filed = computed(() => formatDateTime(this.case().filedAt, this.locale(), 'long'));`,demos:[{id:`formatting-pipes`,title:`The pipes in every court language`,description:`Switch the language: dates, digits, separators, currency position and relative phrases all change, with no locale data registered. Hearing times are shown in the court’s time zone.`,component:N,source:E[`formatting-pipes`]},{id:`formatting-relative-ticking`,title:`Relative times that stay current`,description:"A `now` signal ticks every 15 seconds, so “now” becomes “1 minute ago” while the page is open. The exact time is in `datetime` and the tooltip.",component:F,source:E[`formatting-relative-ticking`]},{id:`formatting-functions`,title:`Formatting functions in computed()`,description:"Hearings grouped by day with `dayKey()` in the court’s time zone, then headings, times and fees formatted with `formatDateTime()` and `formatNumber()` for the chosen language.",component:_,source:E[`formatting-functions`]}],aria:["Formatted values are plain text: screen readers read them in the language of the surrounding `lang`, so keep that attribute on the translated region.",'Put machine-readable dates in `<time datetime="…">` when the visible text is relative (“3 hours ago”).'],appMustProvide:["The time zone court events are in (`America/Los_Angeles`); otherwise dates use the device’s zone and a hearing can show on the wrong day.",`The exact date next to, or on request for, a relative time where the precise moment matters (a filing deadline).`,"Tabular numerals (`tnum`) on columns of dates and amounts, so they line up."],a11y:[`Dates are written out by the platform in each language’s own order and words (“30 de septiembre de 2026”, “2026년 9월 30일”), which reads better aloud than numeric dates such as 9/30/26.`,`Negative amounts in accounting style show parentheses, so a refund is not shown by colour alone.`,`A ticking relative time is not a live region: it changes quietly and is never announced.`],related:[`i18n`,`language-switcher`]};export{Pe as FORMATTING_DOCS};