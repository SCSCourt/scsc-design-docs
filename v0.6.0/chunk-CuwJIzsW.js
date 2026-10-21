import{Ct as Lr,Go as g,Hs as y_,Kt as QP,Lo as d_,Ms as uc,Na as Jb,Nr as jo,Ps as ut,Xa as Pv,Zi as za,Zo as i_,_s as o_,cs as lc,ds as nD,ha as Eg,ka as Ig,mi as sr,ra as Af,ta as $f,va as G_,xs as q$1,ya as Ga,za as Lf,zn as YP}from"./main-O6OT5H7H.js";var v=class s{toast=g(Lr);fees=[{code:`GC 70611`,description:`First appearance fee — unlimited civil`,amount:435},{code:`GC 70617(a)`,description:`Motion fee`,amount:60}];pay(){this.toast.success(`Payment of $495.00 received. Receipt #R-2026-004412 sent to your email.`)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-fees-checkout-demo`]],decls:3,vars:3,consts:[[1,`grid`,`gap-6`,`lg:grid-cols-[1fr_20rem]`],[3,`fees`,`showTotal`],[`title`,`Filing fees due`,`payLabel`,`Pay $495.00`,3,`pay`,`items`]],template:function(e,t){e&1&&(Ga(0,`div`,0),uc(1,`scsc-fee-table`,1),Ga(2,`scsc-payment-summary`,2),lc(`pay`,function(){return t.pay()}),Lf()()),e&2&&(Jb(),Pv(`fees`,t.fees)(`showTotal`,!1),Jb(),Pv(`items`,t.fees))},dependencies:[YP,QP],encapsulation:2})};var x=class s{fees=[{code:`GC 70611`,description:`First appearance fee — unlimited civil`,amount:435},{code:`GC 70617(a)`,description:`Motion fee`,amount:60,quantity:2},{code:`GC 70627`,description:`Certified copy of a document`,amount:40},{code:`GC 70626`,description:`Records search`,amount:15}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-fees-fee-table-demo`]],decls:1,vars:1,consts:[[1,`max-w-2xl`,3,`fees`]],template:function(e,t){e&1&&uc(0,`scsc-fee-table`,0),e&2&&Pv(`fees`,t.fees)},dependencies:[YP],encapsulation:2})};var q=(s,a)=>a.code;function W(s,a){if(s&1){let e=d_();Ga(0,`label`,4)(1,`input`,7),lc(`change`,function(){let y=Eg(e).$implicit,j=y_();return Ig(j.toggle(y.code))}),Lf(),G_(2),Ga(3,`span`,8),G_(4),Lf()()}if(s&2){let e=a.$implicit,t=y_();Jb(),Pv(`checked`,t.chosen().has(e.code)),Jb(),$f(` `,e.description,` `),Jb(2),nD(t.usd(e.amount))}}var E=s=>s.toLocaleString(`en-US`,{style:`currency`,currency:`USD`});var C=class s{toasts=g(Lr);usd=E;required=[{code:`GC 70611`,description:`First appearance fee — unlimited civil`,amount:435}];optional=[{code:`GC 70627`,description:`Certified copy of the filed complaint`,amount:40},{code:`CCP 631`,description:`Advance jury fee deposit`,amount:150}];chosen=q$1(new Set);items=ut(()=>[...this.required,...this.optional.filter(a=>this.chosen().has(a.code))]);total=ut(()=>this.items().reduce((a,e)=>a+e.amount,0));toggle(a){this.chosen.update(e=>{let t=new Set(e);return t.has(a)?t.delete(a):t.add(a),t})}pay(){this.toasts.success(`Payment of ${E(this.total())} received for 24CV012345.`,{title:`Paid`})}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-fees-options-demo`]],decls:9,vars:4,consts:[[1,`grid`,`gap-6`,`lg:grid-cols-[1fr_20rem]`],[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`flex-col`,`gap-2`],[1,`mb-1`,`text-sm`,`font-semibold`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[3,`fees`,`showTotal`],[`title`,`Amount due`,3,`pay`,`items`,`payLabel`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`],[1,`tnum`,`text-base-content/70`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`fieldset`,2)(3,`legend`,3),G_(4,`Add optional services`),Lf(),o_(5,W,5,3,`label`,4,q),Lf(),uc(7,`scsc-fee-table`,5),Lf(),Ga(8,`scsc-payment-summary`,6),lc(`pay`,function(){return t.pay()}),Lf()()),e&2&&(Jb(5),i_(t.optional),Jb(2),Pv(`fees`,t.items())(`showTotal`,!1),Jb(),Pv(`items`,t.items())(`payLabel`,`Pay `+t.usd(t.total())))},dependencies:[jo,YP,QP],encapsulation:2})};var D=class s{fees=[{code:`GC 70670`,description:`Request for Order filing fee`,amount:60},{code:`GC 70617`,description:`Certified copy`,amount:40,quantity:2},{code:`FW-003`,description:`Fee waiver applied`,amount:-140}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-fees-waiver-demo`]],decls:4,vars:1,consts:[[1,`flex`,`max-w-2xl`,`flex-col`,`gap-3`],[`status`,`success`,`title`,`Fee waiver granted`],[`label`,`Fees, 24FL004821`,`totalLabel`,`Amount due`,3,`fees`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`scsc-alert`,1),G_(2,` Order on Court Fee Waiver (FW-003) filed Sep 29, 2026. Filing fees for this case are waived. `),Lf(),uc(3,`scsc-fee-table`,2),Lf()),e&2&&(Jb(3),Pv(`fees`,t.fees))},dependencies:[za,YP],encapsulation:2})};var w=class s{paid=q$1(!1);installments=[{code:`Oct 15`,description:`Installment 4 of 6`,amount:75},{code:`Nov 15`,description:`Installment 5 of 6`,amount:75},{code:`Dec 15`,description:`Installment 6 of 6`,amount:75}];next=[{description:`Installment 4 of 6`,amount:75}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-fees-payment-plan-demo`]],decls:9,vars:3,consts:[[1,`grid`,`max-w-4xl`,`gap-4`,`md:grid-cols-[1fr_18rem]`],[`aria-labelledby`,`plan-heading`,1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`id`,`plan-heading`,1,`font-semibold`],[`tone`,`info`,`icon`,`court.payment`],[`label`,`Installments`,`totalLabel`,`Remaining balance`,3,`fees`],[`title`,`Next installment`,3,`pay`,`items`,`payLabel`]],template:function(e,t){e&1&&(Ga(0,`div`,0)(1,`section`,1)(2,`div`,2)(3,`h3`,3),G_(4,`Payment plan · Citation TR-2026-118204`),Lf(),Ga(5,`scsc-tag`,4),G_(6,`3 of 6 paid`),Lf()(),uc(7,`scsc-fee-table`,5),Lf(),Ga(8,`scsc-payment-summary`,6),lc(`pay`,function(){return t.paid.set(!0)}),Lf()()),e&2&&(Jb(7),Pv(`fees`,t.installments),Jb(),Pv(`items`,t.next)(`payLabel`,t.paid()?`Paid · thank you`:`Pay $75.00`))},dependencies:[YP,QP,sr],encapsulation:2})};var u={"fees-checkout":{ts:`import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScscFeeTable, ScscPaymentSummary, ToastService, type ScscFeeLine } from '@scscourt/design';

@Component({
  selector: 'app-fees-checkout-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFeeTable, ScscPaymentSummary],
  template: \`
    <div class="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <scsc-fee-table [fees]="fees" [showTotal]="false" />
      <scsc-payment-summary
        [items]="fees"
        title="Filing fees due"
        payLabel="Pay $495.00"
        (pay)="pay()"
      />
    </div>
  \`,
})
export class FeesCheckoutDemo {
  private readonly toast = inject(ToastService);

  /** The same line items feed both components, so the total always matches. */
  protected readonly fees: ScscFeeLine[] = [
    { code: 'GC 70611', description: 'First appearance fee \u2014 unlimited civil', amount: 435 },
    { code: 'GC 70617(a)', description: 'Motion fee', amount: 60 },
  ];

  protected pay(): void {
    // Hand off to your payment provider here; on success, confirm and return to the case.
    this.toast.success('Payment of $495.00 received. Receipt #R-2026-004412 sent to your email.');
  }
}
`,html:`<div class="grid gap-6 lg:grid-cols-[1fr_20rem]">
  <scsc-fee-table [fees]="fees" [showTotal]="false" />
  <scsc-payment-summary
    [items]="fees"
    title="Filing fees due"
    payLabel="Pay $495.00"
    (pay)="pay()"
  />
</div>
`},"fees-fee-table":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscFeeTable, type ScscFeeLine } from '@scscourt/design';

@Component({
  selector: 'app-fees-fee-table-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFeeTable],
  template: \`<scsc-fee-table [fees]="fees" class="max-w-2xl" />\`,
})
export class FeesFeeTableDemo {
  /** \`code\` is the statutory reference; \`quantity\` multiplies \`amount\` (defaults to 1). */
  protected readonly fees: ScscFeeLine[] = [
    { code: 'GC 70611', description: 'First appearance fee \u2014 unlimited civil', amount: 435 },
    { code: 'GC 70617(a)', description: 'Motion fee', amount: 60, quantity: 2 },
    { code: 'GC 70627', description: 'Certified copy of a document', amount: 40 },
    { code: 'GC 70626', description: 'Records search', amount: 15 },
  ];
}
`,html:`<scsc-fee-table [fees]="fees" class="max-w-2xl" />
`},"fees-options":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  ScscCheckbox,
  ScscFeeTable,
  ScscPaymentSummary,
  ToastService,
  type ScscFeeLine,
} from '@scscourt/design';

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

@Component({
  selector: 'app-fees-options-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscCheckbox, ScscFeeTable, ScscPaymentSummary],
  template: \`
    <div class="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <div class="flex flex-col gap-4">
        <fieldset class="flex flex-col gap-2">
          <legend class="mb-1 text-sm font-semibold">Add optional services</legend>
          @for (o of optional; track o.code) {
            <label class="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                scsc-checkbox
                [checked]="chosen().has(o.code!)"
                (change)="toggle(o.code!)"
              />
              {{ o.description }}
              <span class="tnum text-base-content/70">{{ usd(o.amount) }}</span>
            </label>
          }
        </fieldset>
        <scsc-fee-table [fees]="items()" [showTotal]="false" />
      </div>

      <!-- One computed list feeds both components, and the button names the amount. -->
      <scsc-payment-summary
        [items]="items()"
        title="Amount due"
        [payLabel]="'Pay ' + usd(total())"
        (pay)="pay()"
      />
    </div>
  \`,
})
export class FeesOptionsDemo {
  private readonly toasts = inject(ToastService);
  protected readonly usd = usd;

  private readonly required: ScscFeeLine[] = [
    { code: 'GC 70611', description: 'First appearance fee \u2014 unlimited civil', amount: 435 },
  ];
  protected readonly optional: ScscFeeLine[] = [
    { code: 'GC 70627', description: 'Certified copy of the filed complaint', amount: 40 },
    { code: 'CCP 631', description: 'Advance jury fee deposit', amount: 150 },
  ];

  protected readonly chosen = signal(new Set<string>());
  protected readonly items = computed(() => [
    ...this.required,
    ...this.optional.filter((o) => this.chosen().has(o.code!)),
  ]);
  protected readonly total = computed(() => this.items().reduce((sum, f) => sum + f.amount, 0));

  protected toggle(code: string): void {
    this.chosen.update((set) => {
      const next = new Set(set);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  }

  protected pay(): void {
    // Hand off to the payment provider here.
    this.toasts.success(\`Payment of \${usd(this.total())} received for 24CV012345.\`, {
      title: 'Paid',
    });
  }
}
`,html:`<div class="grid gap-6 lg:grid-cols-[1fr_20rem]">
  <div class="flex flex-col gap-4">
    <fieldset class="flex flex-col gap-2">
      <legend class="mb-1 text-sm font-semibold">Add optional services</legend>
      @for (o of optional; track o.code) {
        <label class="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            scsc-checkbox
            [checked]="chosen().has(o.code!)"
            (change)="toggle(o.code!)"
          />
          {{ o.description }}
          <span class="tnum text-base-content/70">{{ usd(o.amount) }}</span>
        </label>
      }
    </fieldset>
    <scsc-fee-table [fees]="items()" [showTotal]="false" />
  </div>

  <!-- One computed list feeds both components, and the button names the amount. -->
  <scsc-payment-summary
    [items]="items()"
    title="Amount due"
    [payLabel]="'Pay ' + usd(total())"
    (pay)="pay()"
  />
</div>
`},"fees-payment-plan":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscFeeTable, ScscPaymentSummary, ScscTag, type ScscFeeLine } from '@scscourt/design';

@Component({
  selector: 'app-fees-payment-plan-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFeeTable, ScscPaymentSummary, ScscTag],
  template: \`
    <div class="grid max-w-4xl gap-4 md:grid-cols-[1fr_18rem]">
      <section aria-labelledby="plan-heading" class="flex flex-col gap-3">
        <div class="flex flex-wrap items-center gap-2">
          <h3 id="plan-heading" class="font-semibold">Payment plan \xB7 Citation TR-2026-118204</h3>
          <scsc-tag tone="info" icon="court.payment">3 of 6 paid</scsc-tag>
        </div>
        <scsc-fee-table label="Installments" [fees]="installments" totalLabel="Remaining balance" />
      </section>
      <scsc-payment-summary
        title="Next installment"
        [items]="next"
        [payLabel]="paid() ? 'Paid \xB7 thank you' : 'Pay $75.00'"
        (pay)="paid.set(true)"
      />
    </div>
  \`,
})
export class FeesPaymentPlanDemo {
  protected readonly paid = signal(false);
  protected readonly installments: ScscFeeLine[] = [
    { code: 'Oct 15', description: 'Installment 4 of 6', amount: 75 },
    { code: 'Nov 15', description: 'Installment 5 of 6', amount: 75 },
    { code: 'Dec 15', description: 'Installment 6 of 6', amount: 75 },
  ];
  protected readonly next: ScscFeeLine[] = [{ description: 'Installment 4 of 6', amount: 75 }];
}
`,html:`<div class="grid max-w-4xl gap-4 md:grid-cols-[1fr_18rem]">
  <section aria-labelledby="plan-heading" class="flex flex-col gap-3">
    <div class="flex flex-wrap items-center gap-2">
      <h3 id="plan-heading" class="font-semibold">Payment plan \xB7 Citation TR-2026-118204</h3>
      <scsc-tag tone="info" icon="court.payment">3 of 6 paid</scsc-tag>
    </div>
    <scsc-fee-table label="Installments" [fees]="installments" totalLabel="Remaining balance" />
  </section>
  <scsc-payment-summary
    title="Next installment"
    [items]="next"
    [payLabel]="paid() ? 'Paid \xB7 thank you' : 'Pay $75.00'"
    (pay)="paid.set(true)"
  />
</div>
`},"fees-waiver":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAlert, ScscFeeTable, type ScscFeeLine } from '@scscourt/design';

@Component({
  selector: 'app-fees-waiver-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscFeeTable],
  template: \`
    <div class="flex max-w-2xl flex-col gap-3">
      <scsc-alert status="success" title="Fee waiver granted">
        Order on Court Fee Waiver (FW-003) filed Sep 29, 2026. Filing fees for this case are waived.
      </scsc-alert>
      <scsc-fee-table label="Fees, 24FL004821" [fees]="fees" totalLabel="Amount due" />
    </div>
  \`,
})
export class FeesWaiverDemo {
  protected readonly fees: ScscFeeLine[] = [
    { code: 'GC 70670', description: 'Request for Order filing fee', amount: 60 },
    { code: 'GC 70617', description: 'Certified copy', amount: 40, quantity: 2 },
    { code: 'FW-003', description: 'Fee waiver applied', amount: -140 },
  ];
}
`,html:`<div class="flex max-w-2xl flex-col gap-3">
  <scsc-alert status="success" title="Fee waiver granted">
    Order on Court Fee Waiver (FW-003) filed Sep 29, 2026. Filing fees for this case are waived.
  </scsc-alert>
  <scsc-fee-table label="Fees, 24FL004821" [fees]="fees" totalLabel="Amount due" />
</div>
`}};var ue={slug:`fees`,name:`Fees & Payment`,classes:[`ScscFeeTable`,`ScscPaymentSummary`],category:`Court`,summary:"Two components that share the `ScscFeeLine` shape: `scsc-fee-table` is the itemised schedule (code, description, quantity, amount) and `scsc-payment-summary` is the checkout card with a total and a pay action.",whenToUse:['Responsive: `scsc-fee-table` is built on `scsc-table` with `responsive="stack"`; below `stackBelow` (`sm`) each fee becomes a card, and the total stays under the list.',"**Fee table** — fee schedules, invoices, and the Financials section of a case: right-aligned currency, optional statutory `code`, and a total row (`showTotal`).","**Payment summary** — the sidebar of a checkout or pay-fees flow; feed it the same `items` so the total matches the table.","Amounts are numbers in dollars; both components format them with `Intl` as USD. For pre-formatted strings use `scsc-case-file`'s `financials`.","The `pay` output is where your app hands off to the payment provider; the button is not disabled by the component."],setup:`// The checkout and optional-services demos confirm with a toast. Your root component needs the host once:
// <scsc-toast-container />
import { ToastService } from '@scscourt/design';`,demos:[{id:`fees-fee-table`,title:`Fee schedule`,description:`Statutory codes, a quantity of 2, and the default total row.`,component:x,source:u[`fees-fee-table`]},{id:`fees-checkout`,title:`Checkout`,description:"Table without its total beside a payment summary; `pay` shows a toast.",component:v,source:u[`fees-checkout`]},{id:`fees-options`,title:`Optional services`,description:"Checkboxes add optional fees to a `computed` list that feeds the table and the summary; `payLabel` always states the current total.",component:C,source:u[`fees-options`]},{id:`fees-waiver`,title:`Fee waiver applied`,description:`A granted waiver: the waiver is its own line, the total reads "Amount due", and an alert names the order.`,component:D,source:u[`fees-waiver`]},{id:`fees-payment-plan`,title:`Payment plan`,description:`Remaining installments in a fee table beside a payment summary for the next one; the table stacks into cards on phones.`,component:w,source:u[`fees-payment-plan`]}],a11y:["`scsc-payment-summary` titles itself with an `<h2>` by default; set `headingLevel` (2–6) to fit the page outline.","The fee table is a real `<table>` with headers and a `<tfoot>` total; numbers use tabular numerals for alignment.","The pay button is a native `<button>` with the visible `payLabel` as its name; include the amount in the label so the action is unambiguous, and derive it from the same `computed` as the items (the optional-services demo).","Optional fees are checkboxes in a `fieldset` with a `legend`, each label naming the fee and its amount."],related:[`case-file`,`table`,`toast`,`stat`]};export{ue as FEES_DOCS};