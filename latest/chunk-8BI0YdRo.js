import{G as Fge,Go as g,Hs as y_,Lo as d_,Ma as JT,Mr as jn,Na as Jb,Ps as ut,Tn as Wn,Tr as hn,Xa as Pv,Yn as a5e,Zn as bA,Zo as i_,_s as o_,c as $r,cs as lc,ds as nD,fs as nM,ha as Eg,ka as Ig,ks as t_,kt as NE,os as k_,pi as sn,ps as n_,qr as oN,ra as Af,ta as $f,va as G_,vn as Vn,w as Bo,ws as r_,xi as to,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var te=(a,s)=>s.key;function se(a,s){if(a&1&&(Ga(0,`option`,5),G_(1),Lf()),a&2){let t=s.$implicit,e=y_();Pv(`value`,t)(`selected`,t===e.pageSize()),Jb(),nD(t)}}function ne(a,s){a&1&&G_(0,` Your settings are remembered on this device. `)}function ae(a,s){a&1&&G_(0,` Your settings last for this visit only. Allow preference cookies to remember them. `)}function ce(a,s){if(a&1&&(Ga(0,`dt`)(1,`code`),G_(2),Lf()(),Ga(3,`dd`),G_(4),Lf()),a&2){let t=s.$implicit;Jb(2),nD(t.key),Jb(2),nD(t.stored?`Stored`:`Not stored`)}}var J=oN();var j=`scsc.search.pageSize`;var M=`scsc.calendar.clock24`;var R=class a{prefs=g(to);consent=g(hn);sizes=[10,25,50];clock24Key=M;pageSize=this.prefs.watch(j,25);clock24=this.prefs.watch(M,!1);onDevice=ut(()=>(this.pageSize(),this.clock24(),this.consent.state(),this.prefs.persistent(),[Wn,j,M].map(s=>({key:s,stored:J.get(s)!==void 0}))));setPageSize(s){this.prefs.set(j,Number(s.target.value))}static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-preferences-consent-demo`]],features:[nM([Fge({version:`2026-09`,categories:[`essential`,`preferences`]}),a5e({requireConsent:`preferences`,storage:J})])],decls:24,vars:2,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`items-end`,`gap-x-8`,`gap-y-3`],[1,`w-40`],[`label`,`Results per page`],[`scsc-select`,``,3,`change`],[3,`value`,`selected`],[1,`flex`,`items-center`,`gap-3`,`text-sm`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`],[`role`,`status`,1,`text-sm`],[1,`flex`,`flex-wrap`,`gap-2`],[`size`,`sm`,3,`click`],[`size`,`sm`,`variant`,`neutral`,`outline`,``,3,`click`],[`size`,`sm`,`bold`,``],[1,`mt-1`,`grid`,`grid-cols-[auto_1fr]`,`gap-x-4`,`gap-y-1`,`text-sm`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`scsc-form-field`,3)(4,`select`,4),lc(`change`,function(x){return e.setPageSize(x)}),o_(5,se,2,3,`option`,5,r_),Lf()()(),Ga(7,`label`,6)(8,`input`,7),lc(`change`,function(){return e.prefs.set(e.clock24Key,!e.clock24())}),Lf(),G_(9,` Show hearing times in 24-hour format `),Lf()(),Ga(10,`p`,8),JT(11,ne,1,0)(12,ae,1,0),Lf(),Ga(13,`div`,9)(14,`scsc-button`,10),lc(`click`,function(){return e.consent.save({preferences:!0})}),G_(15,` Allow preference cookies `),Lf(),Ga(16,`scsc-button`,11),lc(`click`,function(){return e.consent.rejectAll()}),G_(17,` Refuse `),Lf()(),Ga(18,`div`)(19,`scsc-text`,12),G_(20,`Stored on this device`),Lf(),Ga(21,`dl`,13),o_(22,ce,5,2,null,null,te),Lf()()()),t&2&&(Jb(5),i_(e.sizes),Jb(3),Pv(`checked`,e.clock24()),Jb(3),t_(e.prefs.persistent()?11:12),Jb(11),i_(e.onDevice()))},dependencies:[sn,Vn,On,Bo,NE],encapsulation:2})};var re=(a,s)=>s.value;var ie=(a,s)=>s.number;function oe(a,s){if(a&1){let t=d_();Ga(0,`label`,3)(1,`input`,9),lc(`change`,function(){let o=Eg(t).$implicit,x=y_();return Ig(x.cases.set(`layout`,o.value))}),Lf(),G_(2),Lf()}if(a&2){let t=s.$implicit,e=y_();Jb(),Pv(`value`,t.value)(`checked`,e.layout()===t.value),Jb(),$f(` `,t.label,` `)}}function le(a,s){if(a&1&&(Ga(0,`li`)(1,`scsc-text`,10),G_(2),Lf(),Ga(3,`scsc-text`,11),G_(4),Lf(),Ga(5,`span`,3)(6,`scsc-badge`,12),G_(7),Lf(),Ga(8,`scsc-text`,13),G_(9),Lf()()()),a&2){let t=s.$implicit,e=y_();k_(e.layout()===`cards`?`flex flex-col gap-1 rounded-box border border-base-300 p-4`:`flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-base-300 py-2`),Jb(2),nD(t.number),Jb(2),nD(t.title),Jb(2),Pv(`tone`,t.status===`Open`?`success`:`neutral`),Jb(),$f(` `,t.status,` `),Jb(2),$f(`Next hearing: `,t.next)}}var de=[{number:`24CV012345`,title:`Rivera v. Pacific Gas Co.`,status:`Open`,next:`Oct 14, 2026`},{number:`24FL004410`,title:`In re Marriage of Chen`,status:`Open`,next:`Oct 21, 2026`},{number:`23CV098211`,title:`Nguyen v. Valley Rentals LLC`,status:`Closed`,next:`None`},{number:`24PR000732`,title:`Estate of M. Alvarez`,status:`Open`,next:`Nov 3, 2026`}];var z=class a{prefs=g(to);cases=this.prefs.adapter(`scsc.cases`);layout=this.cases.watch(`layout`,`list`);showClosed=this.cases.watch(`showClosed`,!1);layouts=[{value:`list`,label:`List`},{value:`cards`,label:`Cards`}];visible=ut(()=>de.filter(s=>this.showClosed()||s.status===`Open`));static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-preferences-remember-view-demo`]],decls:22,vars:3,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`items-end`,`gap-x-8`,`gap-y-3`],[`legend`,`Layout`,`inline`,``],[1,`flex`,`items-center`,`gap-2`],[1,`flex`,`items-center`,`gap-3`,`text-sm`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[3,`class`],[`size`,`sm`,`tone`,`muted`],[`type`,`radio`,`scsc-radio`,``,`name`,`case-layout`,3,`change`,`value`,`checked`],[`size`,`sm`,`tnum`,``,`bold`,``],[`size`,`sm`],[`soft`,``,`size`,`sm`,3,`tone`],[`size`,`sm`,`tone`,`muted`,`tnum`,``]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`div`)(3,`scsc-fieldset`,2),o_(4,oe,3,3,`label`,3,re),Lf()(),Ga(6,`label`,4)(7,`input`,5),lc(`change`,function(){return e.cases.set(`showClosed`,!e.showClosed())}),Lf(),G_(8,` Show closed cases `),Lf(),Ga(9,`scsc-button`,6),lc(`click`,function(){return e.cases.clear()}),G_(10,` Reset view `),Lf()(),Ga(11,`ul`),o_(12,le,10,7,`li`,7,ie),Lf(),Ga(14,`scsc-text`,8),G_(15,` Stored on this device as `),Ga(16,`code`),G_(17,`scsc.cases.layout`),Lf(),G_(18,` and `),Ga(19,`code`),G_(20,`scsc.cases.showClosed`),Lf(),G_(21,`. Reload the page and the view stays; other open tabs follow along. `),Lf()()),t&2&&(Jb(4),i_(e.layouts),Jb(3),Pv(`checked`,e.showClosed()),Jb(4),k_(e.layout()===`cards`?`grid gap-3 sm:grid-cols-2`:`flex flex-col`),Jb(),i_(e.visible()))},dependencies:[jn,sn,$r,bA,Bo,NE],encapsulation:2})};var pe=(a,s)=>s.value;function me(a,s){if(a&1&&(Ga(0,`option`,8),G_(1),Lf()),a&2){let t=s.$implicit,e=y_();Pv(`value`,t.value)(`selected`,t.value===e.digest()),Jb(),nD(t.label)}}function fe(a,s){if(a&1&&(Ga(0,`li`),G_(1),Lf()),a&2){let t=s.$implicit;Jb(),nD(t)}}function ue(a,s){a&1&&(Ga(0,`li`),G_(1,`No saves yet. Changes are sent together, 800 ms after the last one.`),Lf())}var I=class{failing=q(!1);log=q([]);data={"scsc.notify.email":!0,"scsc.notify.sms":!1,"scsc.notify.digest":`weekly`};load(){return this.later(()=>structuredClone(this.data))}save(s){return this.later(()=>{if(this.failing())throw new Error(`503 Service Unavailable`);for(let[e,o]of Object.entries(s))o===void 0?delete this.data[e]:this.data[e]=o;let t=Object.keys(s).map(e=>e.replace(`scsc.notify.`,``));this.log.update(e=>[`Saved ${t.join(`, `)}`,...e].slice(0,4))})}later(s){return new Promise((t,e)=>setTimeout(()=>{try{t(s())}catch(o){e(o)}},600))}};var ee=new I;var he={local:`Saved on this device.`,loading:`Loading your saved settings…`,pending:`Unsaved changes…`,saving:`Saving…`,synced:`All changes saved to your account.`,offline:`Can’t reach the server. Your changes are kept on this device and will be saved when it is back.`};var A=class a{prefs=g(to);api=ee;notify=this.prefs.adapter(`scsc.notify`);ready=this.prefs.ready;email=this.notify.watch(`email`,!1);sms=this.notify.watch(`sms`,!1);digest=this.notify.watch(`digest`,`off`);status=ut(()=>he[this.prefs.sync()]);digests=[{value:`off`,label:`Off`},{value:`daily`,label:`Daily`},{value:`weekly`,label:`Weekly`}];setDigest(s){this.notify.set(`digest`,s.target.value)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Af({type:a,selectors:[[`app-preferences-server-demo`]],features:[nM([a5e({server:ee,storage:oN(),debounceMs:800})])],decls:25,vars:8,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`role`,`status`,1,`text-sm`,`font-medium`],[`legend`,`Hearing reminders`],[1,`flex`,`items-center`,`gap-3`,`text-sm`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`,`disabled`],[1,`w-48`],[`label`,`Summary email`],[`scsc-select`,``,3,`change`,`disabled`],[3,`value`,`selected`],[1,`flex`,`items-center`,`gap-3`,`border-t`,`border-base-300`,`pt-3`,`text-sm`],[`type`,`checkbox`,`scsc-switch`,``,3,`change`,`checked`],[`size`,`sm`,`bold`,``],[1,`mt-1`,`text-sm`,`text-base-content/70`]],template:function(t,e){t&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2),Lf(),Ga(3,`scsc-fieldset`,2)(4,`label`,3)(5,`input`,4),lc(`change`,function(){return e.notify.set(`email`,!e.email())}),Lf(),G_(6,` Email `),Lf(),Ga(7,`label`,3)(8,`input`,4),lc(`change`,function(){return e.notify.set(`sms`,!e.sms())}),Lf(),G_(9,` Text message `),Lf()(),Ga(10,`div`,5)(11,`scsc-form-field`,6)(12,`select`,7),lc(`change`,function(x){return e.setDigest(x)}),o_(13,me,2,3,`option`,8,pe),Lf()()(),Ga(15,`label`,9)(16,`input`,10),lc(`change`,function(){return e.api.failing.set(!e.api.failing())}),Lf(),G_(17,` Simulate a server outage `),Lf(),Ga(18,`div`)(19,`scsc-text`,11),G_(20,`Server log`),Lf(),Ga(21,`ul`,12),o_(22,fe,2,1,`li`,null,n_,!1,ue,2,0,`li`),Lf()()()),t&2&&(Jb(2),nD(e.status()),Jb(3),Pv(`checked`,e.email())(`disabled`,!e.ready()),Jb(3),Pv(`checked`,e.sms())(`disabled`,!e.ready()),Jb(4),Pv(`disabled`,!e.ready()),Jb(),i_(e.digests),Jb(3),Pv(`checked`,e.api.failing()),Jb(6),i_(e.api.log()))},dependencies:[$r,Vn,On,Bo,NE],encapsulation:2})};var O={"preferences-consent":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  SCSC_CONSENT_KEY,
  ScscButton,
  ScscConsentService,
  ScscFormField,
  ScscPreferences,
  ScscSelect,
  ScscSwitch,
  ScscText,
  provideScscConsent,
  provideScscPreferences,
  scscMemoryAdapter,
} from '@scscourt/design';

/** Stands in for localStorage, so the demo can show what "this device" holds. */
const device = scscMemoryAdapter();

const PAGE_SIZE = 'scsc.search.pageSize';
const CLOCK_24 = 'scsc.calendar.clock24';

@Component({
  selector: 'app-preferences-consent-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // In an app both providers go in app.config.ts. The demo scopes them to itself.
  providers: [
    provideScscConsent({ version: '2026-09', categories: ['essential', 'preferences'] }),
    provideScscPreferences({ requireConsent: 'preferences', storage: device }),
  ],
  imports: [ScscButton, ScscFormField, ScscSelect, ScscSwitch, ScscText],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <div class="flex flex-wrap items-end gap-x-8 gap-y-3">
        <div class="w-40">
          <scsc-form-field label="Results per page">
            <select scsc-select (change)="setPageSize($event)">
              @for (n of sizes; track n) {
                <option [value]="n" [selected]="n === pageSize()">{{ n }}</option>
              }
            </select>
          </scsc-form-field>
        </div>
        <label class="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            scsc-switch
            [checked]="clock24()"
            (change)="prefs.set(clock24Key, !clock24())"
          />
          Show hearing times in 24-hour format
        </label>
      </div>

      <p class="text-sm" role="status">
        @if (prefs.persistent()) {
          Your settings are remembered on this device.
        } @else {
          Your settings last for this visit only. Allow preference cookies to remember them.
        }
      </p>

      <div class="flex flex-wrap gap-2">
        <scsc-button size="sm" (click)="consent.save({ preferences: true })">
          Allow preference cookies
        </scsc-button>
        <scsc-button size="sm" variant="neutral" outline (click)="consent.rejectAll()">
          Refuse
        </scsc-button>
      </div>

      <div>
        <scsc-text size="sm" bold>Stored on this device</scsc-text>
        <dl class="mt-1 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          @for (row of onDevice(); track row.key) {
            <dt>
              <code>{{ row.key }}</code>
            </dt>
            <dd>{{ row.stored ? 'Stored' : 'Not stored' }}</dd>
          }
        </dl>
      </div>
    </div>
  \`,
})
export class PreferencesConsentDemo {
  protected readonly prefs = inject(ScscPreferences);
  protected readonly consent = inject(ScscConsentService);

  protected readonly sizes = [10, 25, 50];
  protected readonly clock24Key = CLOCK_24;
  protected readonly pageSize = this.prefs.watch(PAGE_SIZE, 25);
  protected readonly clock24 = this.prefs.watch(CLOCK_24, false);

  /** What the device holds: the consent record always, settings only with consent. */
  protected readonly onDevice = computed(() => {
    // Re-read whenever a setting, the consent record or the consent choice changes.
    this.pageSize();
    this.clock24();
    this.consent.state();
    this.prefs.persistent();
    return [SCSC_CONSENT_KEY, PAGE_SIZE, CLOCK_24].map((key) => ({
      key,
      stored: device.get(key) !== undefined,
    }));
  });

  protected setPageSize(event: Event): void {
    this.prefs.set(PAGE_SIZE, Number((event.target as HTMLSelectElement).value));
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <div class="flex flex-wrap items-end gap-x-8 gap-y-3">
    <div class="w-40">
      <scsc-form-field label="Results per page">
        <select scsc-select (change)="setPageSize($event)">
          @for (n of sizes; track n) {
            <option [value]="n" [selected]="n === pageSize()">{{ n }}</option>
          }
        </select>
      </scsc-form-field>
    </div>
    <label class="flex items-center gap-3 text-sm">
      <input
        type="checkbox"
        scsc-switch
        [checked]="clock24()"
        (change)="prefs.set(clock24Key, !clock24())"
      />
      Show hearing times in 24-hour format
    </label>
  </div>

  <p class="text-sm" role="status">
    @if (prefs.persistent()) {
      Your settings are remembered on this device.
    } @else {
      Your settings last for this visit only. Allow preference cookies to remember them.
    }
  </p>

  <div class="flex flex-wrap gap-2">
    <scsc-button size="sm" (click)="consent.save({ preferences: true })">
      Allow preference cookies
    </scsc-button>
    <scsc-button size="sm" variant="neutral" outline (click)="consent.rejectAll()">
      Refuse
    </scsc-button>
  </div>

  <div>
    <scsc-text size="sm" bold>Stored on this device</scsc-text>
    <dl class="mt-1 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
      @for (row of onDevice(); track row.key) {
        <dt>
          <code>{{ row.key }}</code>
        </dt>
        <dd>{{ row.stored ? 'Stored' : 'Not stored' }}</dd>
      }
    </dl>
  </div>
</div>
`},"preferences-remember-view":{ts:`import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  ScscBadge,
  ScscButton,
  ScscFieldset,
  ScscPreferences,
  ScscRadio,
  ScscSwitch,
  ScscText,
} from '@scscourt/design';

type Layout = 'list' | 'cards';

interface CaseRow {
  number: string;
  title: string;
  status: 'Open' | 'Closed';
  next: string;
}

const CASES: CaseRow[] = [
  {
    number: '24CV012345',
    title: 'Rivera v. Pacific Gas Co.',
    status: 'Open',
    next: 'Oct 14, 2026',
  },
  { number: '24FL004410', title: 'In re Marriage of Chen', status: 'Open', next: 'Oct 21, 2026' },
  { number: '23CV098211', title: 'Nguyen v. Valley Rentals LLC', status: 'Closed', next: 'None' },
  { number: '24PR000732', title: 'Estate of M. Alvarez', status: 'Open', next: 'Nov 3, 2026' },
];

@Component({
  selector: 'app-preferences-remember-view-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscButton, ScscFieldset, ScscRadio, ScscSwitch, ScscText],
  template: \`
    <div class="flex max-w-2xl flex-col gap-4">
      <div class="flex flex-wrap items-end gap-x-8 gap-y-3">
        <div>
          <scsc-fieldset legend="Layout" inline>
            @for (option of layouts; track option.value) {
              <label class="flex items-center gap-2">
                <input
                  type="radio"
                  scsc-radio
                  name="case-layout"
                  [value]="option.value"
                  [checked]="layout() === option.value"
                  (change)="cases.set('layout', option.value)"
                />
                {{ option.label }}
              </label>
            }
          </scsc-fieldset>
        </div>
        <label class="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            scsc-switch
            [checked]="showClosed()"
            (change)="cases.set('showClosed', !showClosed())"
          />
          Show closed cases
        </label>
        <scsc-button variant="neutral" outline size="sm" (click)="cases.clear()">
          Reset view
        </scsc-button>
      </div>

      <ul [class]="layout() === 'cards' ? 'grid gap-3 sm:grid-cols-2' : 'flex flex-col'">
        @for (c of visible(); track c.number) {
          <li
            [class]="
              layout() === 'cards'
                ? 'flex flex-col gap-1 rounded-box border border-base-300 p-4'
                : 'flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-base-300 py-2'
            "
          >
            <scsc-text size="sm" tnum bold>{{ c.number }}</scsc-text>
            <scsc-text size="sm">{{ c.title }}</scsc-text>
            <span class="flex items-center gap-2">
              <scsc-badge [tone]="c.status === 'Open' ? 'success' : 'neutral'" soft size="sm">
                {{ c.status }}
              </scsc-badge>
              <scsc-text size="sm" tone="muted" tnum>Next hearing: {{ c.next }}</scsc-text>
            </span>
          </li>
        }
      </ul>

      <scsc-text size="sm" tone="muted">
        Stored on this device as <code>scsc.cases.layout</code> and
        <code>scsc.cases.showClosed</code>. Reload the page and the view stays; other open tabs
        follow along.
      </scsc-text>
    </div>
  \`,
})
export class PreferencesRememberViewDemo {
  private readonly prefs = inject(ScscPreferences);
  /** Keys relative to \`scsc.cases\`: \`layout\` is stored as \`scsc.cases.layout\`. */
  protected readonly cases = this.prefs.adapter('scsc.cases');
  protected readonly layout = this.cases.watch<Layout>('layout', 'list');
  protected readonly showClosed = this.cases.watch('showClosed', false);

  protected readonly layouts: { value: Layout; label: string }[] = [
    { value: 'list', label: 'List' },
    { value: 'cards', label: 'Cards' },
  ];
  protected readonly visible = computed(() =>
    CASES.filter((c) => this.showClosed() || c.status === 'Open'),
  );
}
`,html:`<div class="flex max-w-2xl flex-col gap-4">
  <div class="flex flex-wrap items-end gap-x-8 gap-y-3">
    <div>
      <scsc-fieldset legend="Layout" inline>
        @for (option of layouts; track option.value) {
          <label class="flex items-center gap-2">
            <input
              type="radio"
              scsc-radio
              name="case-layout"
              [value]="option.value"
              [checked]="layout() === option.value"
              (change)="cases.set('layout', option.value)"
            />
            {{ option.label }}
          </label>
        }
      </scsc-fieldset>
    </div>
    <label class="flex items-center gap-3 text-sm">
      <input
        type="checkbox"
        scsc-switch
        [checked]="showClosed()"
        (change)="cases.set('showClosed', !showClosed())"
      />
      Show closed cases
    </label>
    <scsc-button variant="neutral" outline size="sm" (click)="cases.clear()">
      Reset view
    </scsc-button>
  </div>

  <ul [class]="layout() === 'cards' ? 'grid gap-3 sm:grid-cols-2' : 'flex flex-col'">
    @for (c of visible(); track c.number) {
      <li
        [class]="
          layout() === 'cards'
            ? 'flex flex-col gap-1 rounded-box border border-base-300 p-4'
            : 'flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-base-300 py-2'
        "
      >
        <scsc-text size="sm" tnum bold>{{ c.number }}</scsc-text>
        <scsc-text size="sm">{{ c.title }}</scsc-text>
        <span class="flex items-center gap-2">
          <scsc-badge [tone]="c.status === 'Open' ? 'success' : 'neutral'" soft size="sm">
            {{ c.status }}
          </scsc-badge>
          <scsc-text size="sm" tone="muted" tnum>Next hearing: {{ c.next }}</scsc-text>
        </span>
      </li>
    }
  </ul>

  <scsc-text size="sm" tone="muted">
    Stored on this device as <code>scsc.cases.layout</code> and
    <code>scsc.cases.showClosed</code>. Reload the page and the view stays; other open tabs
    follow along.
  </scsc-text>
</div>
`},"preferences-server":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  ScscFieldset,
  ScscFormField,
  ScscPreferences,
  ScscSelect,
  ScscSwitch,
  ScscText,
  provideScscPreferences,
  scscMemoryAdapter,
  type ScscPreferencesServer,
  type ScscPreferencesSyncState,
} from '@scscourt/design';

/**
 * A stand-in for your API (GET and PATCH /api/me/preferences): 600 ms per request, and a switch
 * that makes saves fail, as they would offline. In an app, \`load\` and \`save\` call HttpClient.
 */
class MockPreferencesApi implements ScscPreferencesServer {
  readonly failing = signal(false);
  readonly log = signal<string[]>([]);
  private readonly data: Record<string, unknown> = {
    'scsc.notify.email': true,
    'scsc.notify.sms': false,
    'scsc.notify.digest': 'weekly',
  };

  load(): Promise<Record<string, unknown>> {
    return this.later(() => structuredClone(this.data));
  }

  save(changes: Record<string, unknown | undefined>): Promise<void> {
    return this.later(() => {
      if (this.failing()) throw new Error('503 Service Unavailable');
      for (const [key, value] of Object.entries(changes)) {
        if (value === undefined) delete this.data[key];
        else this.data[key] = value;
      }
      const names = Object.keys(changes).map((k) => k.replace('scsc.notify.', ''));
      this.log.update((log) => [\`Saved \${names.join(', ')}\`, ...log].slice(0, 4));
    });
  }

  private later<T>(work: () => T): Promise<T> {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(work());
        } catch (e) {
          reject(e);
        }
      }, 600),
    );
  }
}

const api = new MockPreferencesApi();

const STATUS: Record<ScscPreferencesSyncState, string> = {
  local: 'Saved on this device.',
  loading: 'Loading your saved settings\u2026',
  pending: 'Unsaved changes\u2026',
  saving: 'Saving\u2026',
  synced: 'All changes saved to your account.',
  offline:
    'Can\u2019t reach the server. Your changes are kept on this device and will be saved when it is back.',
};

@Component({
  selector: 'app-preferences-server-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // In an app: provideScscPreferences({ server: () => inject(PreferencesApi) }) in app.config.ts,
  // where start-up waits for the load. Scoped to a component, \`ready()\` reports it instead.
  providers: [
    provideScscPreferences({ server: api, storage: scscMemoryAdapter(), debounceMs: 800 }),
  ],
  imports: [ScscFieldset, ScscFormField, ScscSelect, ScscSwitch, ScscText],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <p class="text-sm font-medium" role="status">{{ status() }}</p>

      <scsc-fieldset legend="Hearing reminders">
        <label class="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            scsc-switch
            [checked]="email()"
            [disabled]="!ready()"
            (change)="notify.set('email', !email())"
          />
          Email
        </label>
        <label class="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            scsc-switch
            [checked]="sms()"
            [disabled]="!ready()"
            (change)="notify.set('sms', !sms())"
          />
          Text message
        </label>
      </scsc-fieldset>
      <div class="w-48">
        <scsc-form-field label="Summary email">
          <select scsc-select [disabled]="!ready()" (change)="setDigest($event)">
            @for (d of digests; track d.value) {
              <option [value]="d.value" [selected]="d.value === digest()">{{ d.label }}</option>
            }
          </select>
        </scsc-form-field>
      </div>

      <label class="flex items-center gap-3 border-t border-base-300 pt-3 text-sm">
        <input
          type="checkbox"
          scsc-switch
          [checked]="api.failing()"
          (change)="api.failing.set(!api.failing())"
        />
        Simulate a server outage
      </label>

      <div>
        <scsc-text size="sm" bold>Server log</scsc-text>
        <ul class="mt-1 text-sm text-base-content/70">
          @for (entry of api.log(); track $index) {
            <li>{{ entry }}</li>
          } @empty {
            <li>No saves yet. Changes are sent together, 800 ms after the last one.</li>
          }
        </ul>
      </div>
    </div>
  \`,
})
export class PreferencesServerDemo {
  private readonly prefs = inject(ScscPreferences);
  protected readonly api = api;
  /** Keys relative to \`scsc.notify\`. */
  protected readonly notify = this.prefs.adapter('scsc.notify');
  /** False until the user's settings have loaded. */
  protected readonly ready = this.prefs.ready;
  protected readonly email = this.notify.watch('email', false);
  protected readonly sms = this.notify.watch('sms', false);
  protected readonly digest = this.notify.watch('digest', 'off');
  protected readonly status = computed(() => STATUS[this.prefs.sync()]);

  protected readonly digests = [
    { value: 'off', label: 'Off' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
  ];

  protected setDigest(event: Event): void {
    this.notify.set('digest', (event.target as HTMLSelectElement).value);
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <p class="text-sm font-medium" role="status">{{ status() }}</p>

  <scsc-fieldset legend="Hearing reminders">
    <label class="flex items-center gap-3 text-sm">
      <input
        type="checkbox"
        scsc-switch
        [checked]="email()"
        [disabled]="!ready()"
        (change)="notify.set('email', !email())"
      />
      Email
    </label>
    <label class="flex items-center gap-3 text-sm">
      <input
        type="checkbox"
        scsc-switch
        [checked]="sms()"
        [disabled]="!ready()"
        (change)="notify.set('sms', !sms())"
      />
      Text message
    </label>
  </scsc-fieldset>
  <div class="w-48">
    <scsc-form-field label="Summary email">
      <select scsc-select [disabled]="!ready()" (change)="setDigest($event)">
        @for (d of digests; track d.value) {
          <option [value]="d.value" [selected]="d.value === digest()">{{ d.label }}</option>
        }
      </select>
    </scsc-form-field>
  </div>

  <label class="flex items-center gap-3 border-t border-base-300 pt-3 text-sm">
    <input
      type="checkbox"
      scsc-switch
      [checked]="api.failing()"
      (change)="api.failing.set(!api.failing())"
    />
    Simulate a server outage
  </label>

  <div>
    <scsc-text size="sm" bold>Server log</scsc-text>
    <ul class="mt-1 text-sm text-base-content/70">
      @for (entry of api.log(); track $index) {
        <li>{{ entry }}</li>
      } @empty {
        <li>No saves yet. Changes are sent together, 800 ms after the last one.</li>
      }
    </ul>
  </div>
</div>
`}};var je={slug:`preferences`,name:`Preferences store`,classes:[`ScscPreferences`],category:`Services & Directives`,summary:"One store for every remembered setting: synchronous `get` / `set`, `watch()` signals, namespaces and cross-tab sync, with an optional server for per-user settings and optional cookie-consent gating. Table views, sidebar groups and the consent record already persist through it once it is provided.",whenToUse:["Anything that should survive a reload: a list or card layout, page size, collapsed groups, column widths, split-pane sizes, recent items, language. Read with `watch(key, fallback)` in the component and write with `set(key, value)`.","**One contract.** `ScscPreferences` implements `ScscStateAdapter` (`get` / `set` / `remove`, synchronous, never throwing), the same interface table `persist`, the sidebar's `persistKey` and `ScscConsentService` store through. `provideScscPreferences()` re-provides `SCSC_STATE_ADAPTER` with the store, so those features gain signals, server sync and consent gating with no code change.","**Without a provider** `inject(ScscPreferences)` still works: a root instance on localStorage, no server, no gating. `SCSC_STATE_ADAPTER` then stays the plain localStorage adapter (same keys, same data), so add the provider once the app has one store to share.","**Per-user, cross-device settings:** pass a `server` (`load()` and `save(changes)`). At the root, start-up waits for the load (up to `loadTimeoutMs`, 3 s by default), so a synchronous `get()` is right when components are created. The values are mirrored locally, so the app keeps working offline. Writes go to the device at once and to the server in debounced batches (`debounceMs`, 500 ms); a failed save is kept, including across a reload, and retried after 1, 2, 4… up to 30 seconds. After signing in, call `reload()`; before signing out, `await flush()`.","**Device-local keys:** the consent record (`scsc.consent`) is never sent to the server, and a server copy is ignored, because court computers are often shared and consent is usually given before sign-in. Set `syncConsent: true` only once counsel has approved per-account consent. `localKeys` keeps other keys on the machine too, for example a public kiosk's display settings.","**Cookie consent:** with `requireConsent: 'preferences'`, changes to non-essential keys are kept in memory (and read back) until `ScscConsentService.has('preferences')()` is true, then stored and sent. Withdrawing consent removes the stored copies, on the device and on the server, but keeps the values for the rest of the visit. A new consent `version` makes the choice undecided again: changes are held, and what was stored stays until the user decides. `essentialKeys` bypass the gate; the consent record (`scsc.consent`) always does. Without `provideScscConsent()` the consent service is inert, so gated changes stay in memory.","**Keys** are stored exactly as given, by convention `scsc.<feature>.<id>` (`scsc.table.cases`, `scsc.sidebar.docs`); the store adds no prefix. `adapter('scsc.cases')` gives a view with relative keys. `keys(prefix)` and `clear(prefix)` work on a namespace (`clear()` keeps essential keys). Keys under `scsc.preferences.` are the store's own bookkeeping.","**Values** must be JSON-serializable: plain objects, arrays, strings, numbers, booleans and null. Dev mode warns about functions, Maps, Sets, Dates, class instances and cycles. `get()` returns a copy; treat `watch()` values as read-only.",`Not for secrets, tokens or personal data (localStorage is readable by any script on the page), large data (about 5 MB per site), or anything the server must trust.`],setup:`// app.config.ts
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { provideScscConsent, provideScscPreferences } from '@scscourt/design';

providers: [
  // Device only (localStorage). Table persist, sidebar and consent now store through it.
  provideScscPreferences(),

  // \u2026or per-user settings from your API, gated on cookie consent:
  provideScscConsent({ version: '2026-09', policyLink: '/privacy' }),
  provideScscPreferences({
    requireConsent: 'preferences',
    essentialKeys: [/^scsc\\.session\\./],        // stored even without consent
    // A function runs in an injection context, so it can use HttpClient and your interceptors.
    server: () => {
      const http = inject(HttpClient);
      return {
        load: () => firstValueFrom(http.get<Record<string, unknown>>('/api/me/preferences')),
        // \`undefined\` means "removed", and JSON drops it: send removals explicitly.
        save: (changes) =>
          firstValueFrom(
            http.patch<void>('/api/me/preferences', {
              set: Object.fromEntries(Object.entries(changes).filter(([, v]) => v !== undefined)),
              remove: Object.keys(changes).filter((k) => changes[k] === undefined),
            }),
          ),
      };
    },
  }),
]

// In a component
private readonly prefs = inject(ScscPreferences);
readonly layout = this.prefs.watch<'list' | 'cards'>('scsc.cases.layout', 'list');
showCards(): void { this.prefs.set('scsc.cases.layout', 'cards'); }

// A namespace, passed anywhere a ScscStateAdapter is accepted
const tables = this.prefs.adapter('scsc.table');   // tables.get('cases') reads scsc.table.cases

// Sign-in and sign-out
await prefs.reload();   // after sign-in: fetch this user's settings
await prefs.flush();    // before sign-out: save what is pending`,demos:[{id:`preferences-remember-view`,title:`Remember my view`,description:"A case list whose layout and filter are remembered on this device through `adapter('scsc.cases')`. Reload the page, or open it in a second tab: the view follows. Reset view calls `clear()` on the namespace.",component:z,source:O[`preferences-remember-view`]},{id:`preferences-consent`,title:`Waiting for cookie consent`,description:"`requireConsent: 'preferences'` with `provideScscConsent()`, both scoped to the demo and stored in memory standing in for localStorage. Change a setting first: it works, but only the consent record is stored. Allow: the held settings are stored. Refuse: they are removed from the device and kept for the visit.",component:R,source:O[`preferences-consent`]},{id:`preferences-server`,title:`Per-user settings from a server`,description:"A mocked API with 600 ms latency. The switches wait for `ready()`; changes save together 800 ms after the last one, and `sync()` drives the status line. Turn on the outage: saves fail, stay on the device and are retried with backoff until it is off.",component:A,source:O[`preferences-server`]}],a11y:[`The store renders nothing. Remembering settings helps people who find repeated set-up hard (cognitive and motor disabilities), so persist choices such as text size, contrast, density, motion and language rather than asking again.`,"Accessibility settings are a reason to think about `essentialKeys`: with consent gating, a refused cookie banner otherwise resets high contrast or larger text on every visit. Decide which keys are strictly necessary with counsel.",'If you show the sync state (`sync()`), put it in a polite `role="status"` region, as the server demo does, and say what happens to the change ("kept on this device") rather than relying on colour or an icon.',"While `ready()` is false in a component-scoped store, disable or hide the controls it drives so they do not jump when the saved values arrive; at the root, start-up waits for them."],appMustProvide:["A privacy or cookie notice that lists what is remembered, under which consent category, and for how long, with the consent `policyLink` pointing at it.",'For per-user settings, the endpoint behind `server`: `load()` returns the signed-in user\'s values keyed in full, `save(changes)` applies a batch where `undefined` means "remove". It must be authorized per user, and reject on failure so the store retries.',"The decision on which keys are essential (`essentialKeys`), approved by counsel. The consent record is always essential.","Whether consent should follow the account (`syncConsent: true`) or stay on each device (the default), approved by counsel.","On shared or public computers, sign-out handling: `await flush()`, then clear what should not stay on the device."],related:[`consent-banner`,`theme`,`table`,`sidebar-nav`]};export{je as PREFERENCES_DOCS};