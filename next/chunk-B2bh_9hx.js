import{Fr as kn,H as FN,Ms as uc,Na as Jb,Vr as mN,Xa as Pv,cs as lc,d as AE,kn as XF,kt as NE,pi as sn,ra as Af,ta as $f,va as G_,xs as q,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var F=[{id:`first-screen`,title:`A complete screen`,description:`Page shell + masthead + card + button.`,component:class o{checkedIn=q(!1);static ɵfac=function(s){return new(s||o)};static ɵcmp=Af({type:o,selectors:[[`app-first-screen-demo`]],decls:19,vars:3,consts:[[`slot`,`masthead`,`title`,`Hearing Scheduler`,`subtitle`,`Superior Court of California, County of Santa Clara`,`logoSrc`,`scsc-seal.png`],[`display`,``,3,`level`],[`tone`,`muted`,1,`mt-1`,`block`],[`title`,`Next hearing`,1,`mt-6`,`max-w-lg`],[1,`tnum`],[`slot`,`footer`,1,`flex`,`gap-2`,`border-t`,`border-base-300`,`scsc-pad-card`],[`variant`,`primary`,3,`click`,`disabled`],[`variant`,`ghost`]],template:function(s,r){s&1&&(Ga(0,`scsc-page-shell`)(1,`scsc-masthead`,0),uc(2,`scsc-theme-switcher`),Lf(),Ga(3,`scsc-heading`,1),G_(4,`Today's calendar`),Lf(),Ga(5,`scsc-text`,2),G_(6,`Department 12 · Hon. A. Rivera`),Lf(),Ga(7,`scsc-card`,3)(8,`p`)(9,`span`,4),G_(10,`24CV012345`),Lf(),G_(11,` · Alvarez v. Northgate Property Mgmt. · `),Ga(12,`span`,4),G_(13,`9:00 AM`),Lf()(),Ga(14,`div`,5)(15,`scsc-button`,6),lc(`click`,function(){return r.checkedIn.set(!0)}),G_(16),Lf(),Ga(17,`scsc-button`,7),G_(18,`View file`),Lf()()()()),s&2&&(Jb(3),Pv(`level`,1),Jb(12),Pv(`disabled`,r.checkedIn()),Jb(),$f(` `,r.checkedIn()?`Checked in`:`Check in`,` `))},dependencies:[XF,FN,AE,kn,NE,mN,sn],encapsulation:2})},source:{"first-screen":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscButton,
  ScscCard,
  ScscHeading,
  ScscMasthead,
  ScscPageShell,
  ScscText,
  ScscThemeSwitcher,
} from '@scscourt/design';

@Component({
  selector: 'app-first-screen-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscPageShell,
    ScscMasthead,
    ScscThemeSwitcher,
    ScscHeading,
    ScscText,
    ScscCard,
    ScscButton,
  ],
  template: \`
    <scsc-page-shell>
      <scsc-masthead
        slot="masthead"
        title="Hearing Scheduler"
        subtitle="Superior Court of California, County of Santa Clara"
        logoSrc="scsc-seal.png"
      >
        <scsc-theme-switcher />
      </scsc-masthead>

      <scsc-heading [level]="1" display>Today's calendar</scsc-heading>
      <scsc-text tone="muted" class="mt-1 block">Department 12 \xB7 Hon. A. Rivera</scsc-text>

      <scsc-card title="Next hearing" class="mt-6 max-w-lg">
        <p>
          <span class="tnum">24CV012345</span> \xB7 Alvarez v. Northgate Property Mgmt. \xB7
          <span class="tnum">9:00 AM</span>
        </p>
        <div slot="footer" class="flex gap-2 border-t border-base-300 scsc-pad-card">
          <scsc-button variant="primary" (click)="checkedIn.set(true)" [disabled]="checkedIn()">
            {{ checkedIn() ? 'Checked in' : 'Check in' }}
          </scsc-button>
          <scsc-button variant="ghost">View file</scsc-button>
        </div>
      </scsc-card>
    </scsc-page-shell>
  \`,
})
export class FirstScreenDemo {
  protected readonly checkedIn = signal(false);
}
`,html:`<scsc-page-shell>
  <scsc-masthead
    slot="masthead"
    title="Hearing Scheduler"
    subtitle="Superior Court of California, County of Santa Clara"
    logoSrc="scsc-seal.png"
  >
    <scsc-theme-switcher />
  </scsc-masthead>

  <scsc-heading [level]="1" display>Today's calendar</scsc-heading>
  <scsc-text tone="muted" class="mt-1 block">Department 12 \xB7 Hon. A. Rivera</scsc-text>

  <scsc-card title="Next hearing" class="mt-6 max-w-lg">
    <p>
      <span class="tnum">24CV012345</span> \xB7 Alvarez v. Northgate Property Mgmt. \xB7
      <span class="tnum">9:00 AM</span>
    </p>
    <div slot="footer" class="flex gap-2 border-t border-base-300 scsc-pad-card">
      <scsc-button variant="primary" (click)="checkedIn.set(true)" [disabled]="checkedIn()">
        {{ checkedIn() ? 'Checked in' : 'Check in' }}
      </scsc-button>
      <scsc-button variant="ghost">View file</scsc-button>
    </div>
  </scsc-card>
</scsc-page-shell>
`}}[`first-screen`],layout:`page`}];export{F as t};