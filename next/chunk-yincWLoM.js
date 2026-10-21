import{En as Wt,Fr as kn,I as EP,Ms as uc,Na as Jb,Xa as Pv,Zo as i_,_s as o_,ds as nD,kt as NE,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var v={"avatar-image":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatar } from '@scscourt/design';

@Component({
  selector: 'app-avatar-image-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatar],
  template: \`
    <div class="flex items-center gap-4">
      <scsc-avatar name="Sandra Liu" [src]="photo" size="lg" />
      <scsc-avatar name="Sandra Liu" size="lg" />
      <p class="text-sm text-base-content/70">
        With <code>src</code> the image is shown; without it, the initials fall back.
      </p>
    </div>
  \`,
})
export class AvatarImageDemo {
  /** Any image URL works; an inline SVG keeps this demo self-contained. */
  protected readonly photo =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#1f3a5f"/><circle cx="32" cy="24" r="12" fill="#c9a227"/><path d="M8 62c2-14 12-20 24-20s22 6 24 20z" fill="#c9a227"/></svg>',
    );
}
`,html:`<div class="flex items-center gap-4">
  <scsc-avatar name="Sandra Liu" [src]="photo" size="lg" />
  <scsc-avatar name="Sandra Liu" size="lg" />
  <p class="text-sm text-base-content/70">
    With <code>src</code> the image is shown; without it, the initials fall back.
  </p>
</div>
`},"avatar-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatar } from '@scscourt/design';

@Component({
  selector: 'app-avatar-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatar],
  template: \`
    <div class="flex flex-wrap items-end gap-4">
      <scsc-avatar name="Maria Alvarez" size="xs" />
      <scsc-avatar name="Maria Alvarez" size="sm" />
      <scsc-avatar name="Maria Alvarez" size="md" />
      <scsc-avatar name="Maria Alvarez" size="lg" />
    </div>
    <div class="mt-4 flex items-center gap-3 text-sm">
      <scsc-avatar name="Hon. Robert Whitfield" initials="RW" />
      <span>Explicit <code>initials</code> when the derived ones would be wrong ("HR" here).</span>
    </div>
  \`,
})
export class AvatarSizesDemo {}
`,html:`<div class="flex flex-wrap items-end gap-4">
  <scsc-avatar name="Maria Alvarez" size="xs" />
  <scsc-avatar name="Maria Alvarez" size="sm" />
  <scsc-avatar name="Maria Alvarez" size="md" />
  <scsc-avatar name="Maria Alvarez" size="lg" />
</div>
<div class="mt-4 flex items-center gap-3 text-sm">
  <scsc-avatar name="Hon. Robert Whitfield" initials="RW" />
  <span>Explicit <code>initials</code> when the derived ones would be wrong ("HR" here).</span>
</div>
`},"avatar-team":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatar, ScscHeading, ScscList, ScscText } from '@scscourt/design';

interface Member {
  name: string;
  initials?: string;
  role: string;
  phone: string;
}

@Component({
  selector: 'app-avatar-team-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatar, ScscHeading, ScscList, ScscText],
  template: \`
    <scsc-heading [level]="3" [visualLevel]="5">Department 6 courtroom staff</scsc-heading>
    <scsc-list class="mt-3 max-w-md rounded-box border border-base-300 bg-base-100">
      @for (m of team; track m.name) {
        <!-- The visible name carries the meaning; the initials chip beside it is decorative. -->
        <li class="flex items-center gap-3 px-4 py-3">
          <scsc-avatar decorative [name]="m.name" [initials]="m.initials ?? ''" size="sm" />
          <div class="min-w-0 flex-1">
            <p class="truncate font-medium">{{ m.name }}</p>
            <scsc-text size="sm" tone="muted">{{ m.role }}</scsc-text>
          </div>
          <scsc-text size="sm" tone="muted" tnum>{{ m.phone }}</scsc-text>
        </li>
      }
    </scsc-list>
  \`,
})
export class AvatarTeamDemo {
  protected readonly team: Member[] = [
    { name: 'Hon. Maria Delgado', initials: 'MD', role: 'Judge', phone: 'Ext. 2106' },
    { name: 'Jonah Ruiz', role: 'Courtroom clerk', phone: 'Ext. 2161' },
    { name: 'Priya Natarajan', role: 'Court reporter', phone: 'Ext. 2164' },
    { name: 'Sgt. Lena Okafor', initials: 'LO', role: 'Bailiff', phone: 'Ext. 2170' },
  ];
}
`,html:`<scsc-heading [level]="3" [visualLevel]="5">Department 6 courtroom staff</scsc-heading>
<scsc-list class="mt-3 max-w-md rounded-box border border-base-300 bg-base-100">
  @for (m of team; track m.name) {
    <!-- The visible name carries the meaning; the initials chip beside it is decorative. -->
    <li class="flex items-center gap-3 px-4 py-3">
      <scsc-avatar decorative [name]="m.name" [initials]="m.initials ?? ''" size="sm" />
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium">{{ m.name }}</p>
        <scsc-text size="sm" tone="muted">{{ m.role }}</scsc-text>
      </div>
      <scsc-text size="sm" tone="muted" tnum>{{ m.phone }}</scsc-text>
    </li>
  }
</scsc-list>
`}};var h=class s{photo=`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#1f3a5f"/><circle cx="32" cy="24" r="12" fill="#c9a227"/><path d="M8 62c2-14 12-20 24-20s22 6 24 20z" fill="#c9a227"/></svg>`);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-avatar-image-demo`]],decls:8,vars:1,consts:[[1,`flex`,`items-center`,`gap-4`],[`name`,`Sandra Liu`,`size`,`lg`,3,`src`],[`name`,`Sandra Liu`,`size`,`lg`],[1,`text-sm`,`text-base-content/70`]],template:function(e,d){e&1&&(Ga(0,`div`,0),uc(1,`scsc-avatar`,1)(2,`scsc-avatar`,2),Ga(3,`p`,3),G_(4,` With `),Ga(5,`code`),G_(6,`src`),Lf(),G_(7,` the image is shown; without it, the initials fall back. `),Lf()()),e&2&&(Jb(),Pv(`src`,d.photo))},dependencies:[Wt],encapsulation:2})};var g=class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-avatar-sizes-demo`]],decls:12,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-end`,`gap-4`],[`name`,`Maria Alvarez`,`size`,`xs`],[`name`,`Maria Alvarez`,`size`,`sm`],[`name`,`Maria Alvarez`,`size`,`md`],[`name`,`Maria Alvarez`,`size`,`lg`],[1,`mt-4`,`flex`,`items-center`,`gap-3`,`text-sm`],[`name`,`Hon. Robert Whitfield`,`initials`,`RW`]],template:function(e,d){e&1&&(Ga(0,`div`,0),uc(1,`scsc-avatar`,1)(2,`scsc-avatar`,2)(3,`scsc-avatar`,3)(4,`scsc-avatar`,4),Lf(),Ga(5,`div`,5),uc(6,`scsc-avatar`,6),Ga(7,`span`),G_(8,`Explicit `),Ga(9,`code`),G_(10,`initials`),Lf(),G_(11,` when the derived ones would be wrong ("HR" here).`),Lf()())},dependencies:[Wt],encapsulation:2})};var D=(s,n)=>n.name;function A(s,n){if(s&1&&(Ga(0,`li`,2),uc(1,`scsc-avatar`,3),Ga(2,`div`,4)(3,`p`,5),G_(4),Lf(),Ga(5,`scsc-text`,6),G_(6),Lf()(),Ga(7,`scsc-text`,7),G_(8),Lf()()),s&2){let e=n.$implicit;Jb(),Pv(`name`,e.name)(`initials`,e.initials??``),Jb(3),nD(e.name),Jb(2),nD(e.role),Jb(2),nD(e.phone)}}var f=class s{team=[{name:`Hon. Maria Delgado`,initials:`MD`,role:`Judge`,phone:`Ext. 2106`},{name:`Jonah Ruiz`,role:`Courtroom clerk`,phone:`Ext. 2161`},{name:`Priya Natarajan`,role:`Court reporter`,phone:`Ext. 2164`},{name:`Sgt. Lena Okafor`,initials:`LO`,role:`Bailiff`,phone:`Ext. 2170`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-avatar-team-demo`]],decls:5,vars:2,consts:[[3,`level`,`visualLevel`],[1,`mt-3`,`max-w-md`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-3`],[`decorative`,``,`size`,`sm`,3,`name`,`initials`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`font-medium`],[`size`,`sm`,`tone`,`muted`],[`size`,`sm`,`tone`,`muted`,`tnum`,``]],template:function(e,d){e&1&&(Ga(0,`scsc-heading`,0),G_(1,`Department 6 courtroom staff`),Lf(),Ga(2,`scsc-list`,1),o_(3,A,9,5,`li`,2,D),Lf()),e&2&&(Pv(`level`,3)(`visualLevel`,5),Jb(3),i_(d.team))},dependencies:[Wt,kn,EP,NE],encapsulation:2})};var P={slug:`avatar`,name:`Avatar`,classes:[`ScscAvatar`],category:`Data Display`,whenToUse:["Identify a person (staff, party, judge) in lists, headers and comments. `name` is required and drives both the `alt` text and the initials.",`Most court users have no photo: the initials chip is the normal case, not the fallback. Design for it.`,'Initials are the first letter of the first two words; pass `initials` for names with honorifics or titles ("Hon. R. Whitfield", "Sgt. L. Okafor").',"Several people on one item? Use `scsc-avatar-group`."],demos:[{id:`avatar-sizes`,title:`Sizes and initials`,description:"`xs` 24px, `sm` 32px, `md` 40px, `lg` 56px; explicit `initials` override the derived ones.",component:g,source:v[`avatar-sizes`]},{id:`avatar-image`,title:`With an image`,description:"`src` shows the photo with `name` as its `alt`.",component:h,source:v[`avatar-image`]},{id:`avatar-team`,title:`In a staff list`,description:"The everyday use: a `sm` avatar beside the visible name and role in each row, marked `decorative` so the name is not read twice, with `initials` set for titled names.",component:f,source:v[`avatar-team`]}],a11y:["With `src`, the image `alt` is the person's `name` (or `alt`, which overrides it).",'Without `src`, the initials chip is `role="img"` named by `name`; the letters themselves are hidden, so a screen reader hears "Maria Alvarez", not "M A".',"`decorative` hides the avatar (`aria-hidden`, empty `alt`) for the common case where the name is visible beside it: lists, comment bylines, menu items. A dev-mode warning fires when a non-decorative avatar has no name."],appMustProvide:["A `name` (or `alt`) for every avatar that stands alone, or `decorative` when the name is already visible next to it."],related:[`avatar-group`,`list`,`party-list`]};export{P as AVATAR_DOCS};