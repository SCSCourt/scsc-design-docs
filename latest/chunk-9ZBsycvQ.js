import{Hs as y_,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,Zo as i_,_s as o_,ds as nD,kt as NE,mi as sr,ni as qP,ra as Af,t as $E,ta as $f,us as my,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var J=(t,o)=>o.days;function E(t,o){if(t&1&&(Ga(0,`dt`,11),G_(1),Lf(),Ga(2,`dd`,12),G_(3),Lf()),t&2){let e=o.$implicit;Jb(),nD(e.days),Jb(2),nD(e.time)}}var f=class t{hours=[{days:`Mon – Thu`,time:`8:30 AM – 4:00 PM`},{days:`Friday`,time:`8:30 AM – 12:00 PM`},{days:`Sat – Sun`,time:`Closed`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-contact-block-hours-demo`]],decls:20,vars:0,consts:[[`aria-labelledby`,`hours-heading`,1,`grid`,`max-w-3xl`,`gap-6`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-5`,`md:grid-cols-2`],[1,`flex`,`flex-col`,`gap-3`],[`id`,`hours-heading`,1,`text-lg`,`font-semibold`],[`address`,`190 W. Hedding Street
San Jose, CA 95110`,`phone`,`(408) 882-2100`,`email`,`criminal-clerk@scscourt.org`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`href`,`https://maps.google.com/?q=190+W+Hedding+St+San+Jose+CA`,1,`self-start`],[1,`sr-only`],[1,`mb-2`,`flex`,`items-center`,`gap-2`],[1,`font-semibold`],[`tone`,`success`,`size`,`sm`,`icon`,`status.online`],[1,`grid`,`grid-cols-[auto_1fr]`,`gap-x-4`,`gap-y-1`,`text-sm`],[1,`mt-3`,`text-sm`,`text-base-content/70`],[1,`font-medium`],[1,`tnum`,`text-base-content/80`]],template:function(e,i){e&1&&(Ga(0,`section`,0)(1,`div`,1)(2,`h3`,2),G_(3,`Hall of Justice`),Lf(),uc(4,`scsc-contact-block`,3),Ga(5,`a`,4),G_(6,`Get directions`),Ga(7,`span`,5),G_(8,` (opens map)`),Lf()()(),Ga(9,`div`)(10,`div`,6)(11,`h4`,7),G_(12,`Clerk's office hours`),Lf(),Ga(13,`scsc-tag`,8),G_(14,`Open now`),Lf()(),Ga(15,`dl`,9),o_(16,E,4,2,null,null,J),Lf(),Ga(18,`p`,10),G_(19,` Closed on court holidays. Drop box available 24 hours at the main entrance. `),Lf()()()),e&2&&(Jb(16),i_(i.hours))},dependencies:[$E,qP,sr],encapsulation:2})};var y=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-contact-block-dark-demo`]],decls:5,vars:0,consts:[[`data-theme`,`scsc-design-dark`,1,`grid`,`max-w-3xl`,`gap-4`,`rounded-box`,`bg-base-200`,`p-4`,`text-base-content`,`sm:grid-cols-2`],[1,`rounded-box`,`border`,`border-base-300`,`bg-base-100`,`p-4`],[`name`,`Jordan Ellis, Esq. (for Plaintiff)`,`address`,`55 S. Market Street, Suite 1200
San Jose, CA 95113`,`phone`,`(408) 555-0142`,`email`,`jellis@ellislaw.example`],[`name`,`Family Justice Center`,`address`,`201 N. First Street
San Jose, CA 95113`,`phone`,`(408) 882-2900`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-contact-block`,2),Lf(),Ga(3,`div`,1),uc(4,`scsc-contact-block`,3),Lf()())},dependencies:[qP],encapsulation:2})};var h={"contact-block-courthouse":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscContactBlock } from '@scscourt/design';

@Component({
  selector: 'app-contact-block-courthouse-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscContactBlock],
  template: \`
    <scsc-contact-block
      name="Downtown Superior Court"
      [address]="address"
      phone="(408) 882-2100"
      email="clerk@scscourt.org"
    />
  \`,
})
export class ContactBlockCourthouseDemo {
  /** Newlines in the address are preserved as line breaks. */
  protected readonly address = '191 N. First Street\\nSan Jose, CA 95113';
}
`,html:`<scsc-contact-block
  name="Downtown Superior Court"
  [address]="address"
  phone="(408) 882-2100"
  email="clerk@scscourt.org"
/>
`},"contact-block-dark":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscContactBlock } from '@scscourt/design';

@Component({
  selector: 'app-contact-block-dark-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscContactBlock],
  template: \`
    <div
      data-theme="scsc-design-dark"
      class="grid max-w-3xl gap-4 rounded-box bg-base-200 p-4 text-base-content sm:grid-cols-2"
    >
      <div class="rounded-box border border-base-300 bg-base-100 p-4">
        <scsc-contact-block
          name="Jordan Ellis, Esq. (for Plaintiff)"
          address="55 S. Market Street, Suite 1200&#10;San Jose, CA 95113"
          phone="(408) 555-0142"
          email="jellis@ellislaw.example"
        />
      </div>
      <div class="rounded-box border border-base-300 bg-base-100 p-4">
        <scsc-contact-block
          name="Family Justice Center"
          address="201 N. First Street&#10;San Jose, CA 95113"
          phone="(408) 882-2900"
        />
      </div>
    </div>
  \`,
})
export class ContactBlockDarkDemo {}
`,html:`<div
  data-theme="scsc-design-dark"
  class="grid max-w-3xl gap-4 rounded-box bg-base-200 p-4 text-base-content sm:grid-cols-2"
>
  <div class="rounded-box border border-base-300 bg-base-100 p-4">
    <scsc-contact-block
      name="Jordan Ellis, Esq. (for Plaintiff)"
      address="55 S. Market Street, Suite 1200&#10;San Jose, CA 95113"
      phone="(408) 555-0142"
      email="jellis@ellislaw.example"
    />
  </div>
  <div class="rounded-box border border-base-300 bg-base-100 p-4">
    <scsc-contact-block
      name="Family Justice Center"
      address="201 N. First Street&#10;San Jose, CA 95113"
      phone="(408) 882-2900"
    />
  </div>
</div>
`},"contact-block-grid":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscContactBlock } from '@scscourt/design';

interface Contact {
  name: string;
  address?: string;
  phone?: string;
  email?: string;
}

@Component({
  selector: 'app-contact-block-grid-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscContactBlock],
  template: \`
    <div class="grid gap-6 sm:grid-cols-3">
      @for (c of contacts; track c.name) {
        <scsc-contact-block
          [name]="c.name"
          [address]="c.address ?? ''"
          [phone]="c.phone ?? ''"
          [email]="c.email ?? ''"
        />
      }
    </div>
  \`,
})
export class ContactBlockGridDemo {
  /** Every field is optional: a line is simply omitted when its value is empty. */
  protected readonly contacts: Contact[] = [
    {
      name: 'Civil Clerk\u2019s Office',
      address: '191 N. First Street, 1st Floor\\nSan Jose, CA 95113',
      phone: '(408) 882-2100',
    },
    {
      name: 'Daniel Reyes, Esq. (for Plaintiff)',
      phone: '(408) 555-0142',
      email: 'dreyes@reyeslaw.example',
    },
    {
      name: 'Self-Help Center',
      address: '201 N. First Street\\nSan Jose, CA 95113',
      email: 'selfhelp@scscourt.org',
    },
  ];
}
`,html:`<div class="grid gap-6 sm:grid-cols-3">
  @for (c of contacts; track c.name) {
    <scsc-contact-block
      [name]="c.name"
      [address]="c.address ?? ''"
      [phone]="c.phone ?? ''"
      [email]="c.email ?? ''"
    />
  }
</div>
`},"contact-block-hours":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButtonLink, ScscContactBlock, ScscTag } from '@scscourt/design';

@Component({
  selector: 'app-contact-block-hours-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButtonLink, ScscContactBlock, ScscTag],
  template: \`
    <section
      aria-labelledby="hours-heading"
      class="grid max-w-3xl gap-6 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-2"
    >
      <div class="flex flex-col gap-3">
        <h3 id="hours-heading" class="text-lg font-semibold">Hall of Justice</h3>
        <scsc-contact-block
          address="190 W. Hedding Street&#10;San Jose, CA 95110"
          phone="(408) 882-2100"
          email="criminal-clerk@scscourt.org"
        />
        <a
          scsc-button
          variant="neutral"
          outline
          size="sm"
          class="self-start"
          href="https://maps.google.com/?q=190+W+Hedding+St+San+Jose+CA"
          >Get directions<span class="sr-only"> (opens map)</span></a
        >
      </div>
      <div>
        <div class="mb-2 flex items-center gap-2">
          <h4 class="font-semibold">Clerk's office hours</h4>
          <scsc-tag tone="success" size="sm" icon="status.online">Open now</scsc-tag>
        </div>
        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          @for (h of hours; track h.days) {
            <dt class="font-medium">{{ h.days }}</dt>
            <dd class="tnum text-base-content/80">{{ h.time }}</dd>
          }
        </dl>
        <p class="mt-3 text-sm text-base-content/70">
          Closed on court holidays. Drop box available 24 hours at the main entrance.
        </p>
      </div>
    </section>
  \`,
})
export class ContactBlockHoursDemo {
  protected readonly hours = [
    { days: 'Mon \u2013 Thu', time: '8:30 AM \u2013 4:00 PM' },
    { days: 'Friday', time: '8:30 AM \u2013 12:00 PM' },
    { days: 'Sat \u2013 Sun', time: 'Closed' },
  ];
}
`,html:`<section
  aria-labelledby="hours-heading"
  class="grid max-w-3xl gap-6 rounded-box border border-base-300 bg-base-100 p-5 md:grid-cols-2"
>
  <div class="flex flex-col gap-3">
    <h3 id="hours-heading" class="text-lg font-semibold">Hall of Justice</h3>
    <scsc-contact-block
      address="190 W. Hedding Street&#10;San Jose, CA 95110"
      phone="(408) 882-2100"
      email="criminal-clerk@scscourt.org"
    />
    <a
      scsc-button
      variant="neutral"
      outline
      size="sm"
      class="self-start"
      href="https://maps.google.com/?q=190+W+Hedding+St+San+Jose+CA"
      >Get directions<span class="sr-only"> (opens map)</span></a
    >
  </div>
  <div>
    <div class="mb-2 flex items-center gap-2">
      <h4 class="font-semibold">Clerk's office hours</h4>
      <scsc-tag tone="success" size="sm" icon="status.online">Open now</scsc-tag>
    </div>
    <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
      @for (h of hours; track h.days) {
        <dt class="font-medium">{{ h.days }}</dt>
        <dd class="tnum text-base-content/80">{{ h.time }}</dd>
      }
    </dl>
    <p class="mt-3 text-sm text-base-content/70">
      Closed on court holidays. Drop box available 24 hours at the main entrance.
    </p>
  </div>
</section>
`},"contact-block-locations":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButtonLink, ScscCard, ScscContactBlock, ScscText } from '@scscourt/design';

interface Courthouse {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

@Component({
  selector: 'app-contact-block-locations-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButtonLink, ScscCard, ScscContactBlock, ScscText],
  template: \`
    <div class="grid max-w-3xl gap-4 md:grid-cols-2">
      @for (c of courthouses; track c.name) {
        <scsc-card>
          <scsc-contact-block [name]="c.name" [address]="c.address" [phone]="c.phone" />
          <scsc-text size="sm" tone="muted" class="mt-3 block">{{ c.hours }}</scsc-text>
          <a
            scsc-button
            variant="neutral"
            outline
            size="sm"
            class="mt-4"
            [href]="mapUrl(c)"
            target="_blank"
            rel="noopener"
            >Directions<span class="sr-only"> to {{ c.name }} (opens in a new tab)</span></a
          >
        </scsc-card>
      }
    </div>
  \`,
})
export class ContactBlockLocationsDemo {
  protected readonly courthouses: Courthouse[] = [
    {
      name: 'Downtown Superior Court',
      address: '191 N. First Street\\nSan Jose, CA 95113',
      phone: '(408) 882-2100',
      hours: 'Clerk windows Mon\u2013Fri, 8:30 AM \u2013 3:00 PM',
    },
    {
      name: 'Family Justice Center',
      address: '201 N. First Street\\nSan Jose, CA 95113',
      phone: '(408) 534-5600',
      hours: 'Clerk windows Mon\u2013Fri, 8:30 AM \u2013 3:00 PM',
    },
  ];

  protected mapUrl(c: Courthouse): string {
    const query = \`\${c.name}, \${c.address.replaceAll('\\n', ', ')}\`;
    return \`https://www.google.com/maps/search/?api=1&query=\${encodeURIComponent(query)}\`;
  }
}
`,html:`<div class="grid max-w-3xl gap-4 md:grid-cols-2">
  @for (c of courthouses; track c.name) {
    <scsc-card>
      <scsc-contact-block [name]="c.name" [address]="c.address" [phone]="c.phone" />
      <scsc-text size="sm" tone="muted" class="mt-3 block">{{ c.hours }}</scsc-text>
      <a
        scsc-button
        variant="neutral"
        outline
        size="sm"
        class="mt-4"
        [href]="mapUrl(c)"
        target="_blank"
        rel="noopener"
        >Directions<span class="sr-only"> to {{ c.name }} (opens in a new tab)</span></a
      >
    </scsc-card>
  }
</div>
`}};var S=class t{address=`191 N. First Street
San Jose, CA 95113`;static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-contact-block-courthouse-demo`]],decls:1,vars:1,consts:[[`name`,`Downtown Superior Court`,`phone`,`(408) 882-2100`,`email`,`clerk@scscourt.org`,3,`address`]],template:function(e,i){e&1&&uc(0,`scsc-contact-block`,0),e&2&&Pv(`address`,i.address)},dependencies:[qP],encapsulation:2})};var P=(t,o)=>o.name;function T(t,o){if(t&1&&uc(0,`scsc-contact-block`,1),t&2){let e=o.$implicit;Pv(`name`,e.name)(`address`,e.address??``)(`phone`,e.phone??``)(`email`,e.email??``)}}var x=class t{contacts=[{name:`Civil Clerk’s Office`,address:`191 N. First Street, 1st Floor
San Jose, CA 95113`,phone:`(408) 882-2100`},{name:`Daniel Reyes, Esq. (for Plaintiff)`,phone:`(408) 555-0142`,email:`dreyes@reyeslaw.example`},{name:`Self-Help Center`,address:`201 N. First Street
San Jose, CA 95113`,email:`selfhelp@scscourt.org`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-contact-block-grid-demo`]],decls:3,vars:0,consts:[[1,`grid`,`gap-6`,`sm:grid-cols-3`],[3,`name`,`address`,`phone`,`email`]],template:function(e,i){e&1&&(Ga(0,`div`,0),o_(1,T,1,4,`scsc-contact-block`,1,P),Lf()),e&2&&(Jb(),i_(i.contacts))},dependencies:[qP],encapsulation:2})};var N=(t,o)=>o.name;function _(t,o){if(t&1&&(Ga(0,`scsc-card`),uc(1,`scsc-contact-block`,1),Ga(2,`scsc-text`,2),G_(3),Lf(),Ga(4,`a`,3),G_(5,`Directions`),Ga(6,`span`,4),G_(7),Lf()()()),t&2){let e=o.$implicit,i=y_();Jb(),Pv(`name`,e.name)(`address`,e.address)(`phone`,e.phone),Jb(2),nD(e.hours),Jb(),Pv(`href`,i.mapUrl(e),my),Jb(3),$f(` to `,e.name,` (opens in a new tab)`)}}var D=class t{courthouses=[{name:`Downtown Superior Court`,address:`191 N. First Street
San Jose, CA 95113`,phone:`(408) 882-2100`,hours:`Clerk windows Mon–Fri, 8:30 AM – 3:00 PM`},{name:`Family Justice Center`,address:`201 N. First Street
San Jose, CA 95113`,phone:`(408) 534-5600`,hours:`Clerk windows Mon–Fri, 8:30 AM – 3:00 PM`}];mapUrl(o){let e=`${o.name}, ${o.address.replaceAll(`
`,`, `)}`;return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-contact-block-locations-demo`]],decls:3,vars:0,consts:[[1,`grid`,`max-w-3xl`,`gap-4`,`md:grid-cols-2`],[3,`name`,`address`,`phone`],[`size`,`sm`,`tone`,`muted`,1,`mt-3`,`block`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`target`,`_blank`,`rel`,`noopener`,1,`mt-4`,3,`href`],[1,`sr-only`]],template:function(e,i){e&1&&(Ga(0,`div`,0),o_(1,_,8,6,`scsc-card`,null,N),Lf()),e&2&&(Jb(),i_(i.courthouses))},dependencies:[$E,mN,qP,NE],encapsulation:2})};var Z={slug:`contact-block`,name:`Contact Block`,classes:[`ScscContactBlock`],category:`Court`,whenToUse:[`Courthouse locations, clerk's offices, attorneys of record, self-help centers: anywhere an address, phone or email is shown together.`,`Every field is optional; supply only what you have and the missing lines are omitted (no empty icons).`,"Put a newline in `address` between street and city so it prints on two lines."],demos:[{id:`contact-block-courthouse`,title:`Courthouse`,description:"All four fields; phone and email are real `tel:` / `mailto:` links.",component:S,source:h[`contact-block-courthouse`]},{id:`contact-block-grid`,title:`Partial contacts in a grid`,description:`Three contacts with different fields present, laid out with a Tailwind grid.`,component:x,source:h[`contact-block-grid`]},{id:`contact-block-locations`,title:`Location cards`,description:"Each courthouse in a card with its hours and a Directions `a[scsc-button]` that opens a map in a new tab.",component:D,source:h[`contact-block-locations`]},{id:`contact-block-hours`,title:`Courthouse with hours and directions`,description:`The address block beside the clerk's office hours, an "Open now" tag and a directions link that says it opens a map.`,component:f,source:h[`contact-block-hours`]},{id:`contact-block-dark`,title:`Counsel and courthouse, dark theme`,description:`Two contact cards in the dark theme.`,component:y,source:h[`contact-block-dark`]}],a11y:["Renders a semantic `<address>`; icons are `aria-hidden` and the text carries the meaning.",`Phone and email are links, so they are keyboard reachable and open the dialer / mail client on mobile.`,`Links that open a new tab should say so in their accessible name (the Directions link adds it as visually hidden text).`],related:[`party-list`,`description-list`,`footer`]};export{Z as CONTACT_BLOCK_DOCS};