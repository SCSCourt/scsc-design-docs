import{Hs as y_,I as EP,Ms as uc,Na as Jb,Ss as rD,Xa as Pv,Zo as i_,_s as o_,ds as nD,kt as NE,lt as JF,ra as Af,va as G_,ya as Ga,za as Lf}from"./main-O6OT5H7H.js";var d={"avatar-group-assignees":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatarEntry, ScscAvatarGroup, ScscList, ScscText } from '@scscourt/design';

interface Task {
  id: number;
  title: string;
  caseNumber: string;
  due: string;
  assignees: ScscAvatarEntry[];
}

@Component({
  selector: 'app-avatar-group-assignees-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatarGroup, ScscList, ScscText],
  template: \`
    <scsc-list class="max-w-xl rounded-box border border-base-300 bg-base-100">
      @for (t of tasks; track t.id) {
        <li class="flex items-center justify-between gap-4 px-4 py-3">
          <div class="min-w-0">
            <p class="truncate font-medium">{{ t.title }}</p>
            <scsc-text size="sm" tone="muted" tnum>{{ t.caseNumber }} \xB7 due {{ t.due }}</scsc-text>
          </div>
          <!-- The group is a list named by the assignees; "+N" is a button that lists the rest. -->
          <scsc-avatar-group
            class="shrink-0"
            [label]="'Assigned to ' + names(t)"
            [people]="t.assignees"
            [max]="3"
          />
        </li>
      }
    </scsc-list>
  \`,
})
export class AvatarGroupAssigneesDemo {
  protected readonly tasks: Task[] = [
    {
      id: 1,
      title: 'Review default judgment packet',
      caseNumber: '24CV012345',
      due: 'Oct 2',
      assignees: [{ name: 'Jonah Ruiz' }, { name: 'Beatriz Ortiz' }],
    },
    {
      id: 2,
      title: 'Prepare jury instructions',
      caseNumber: '23CV031002',
      due: 'Oct 9',
      assignees: [
        { name: 'Priya Natarajan' },
        { name: 'Daniel Reyes' },
        { name: 'Sandra Liu' },
        { name: 'Lena Okafor' },
        { name: 'Jonah Ruiz' },
      ],
    },
    {
      id: 3,
      title: 'Seal exhibits 4 through 7',
      caseNumber: '24FL003210',
      due: 'Oct 14',
      assignees: [{ name: 'Beatriz Ortiz' }],
    },
  ];

  protected names(t: Task): string {
    return t.assignees.map((a) => a.name).join(', ');
  }
}
`,html:`<scsc-list class="max-w-xl rounded-box border border-base-300 bg-base-100">
  @for (t of tasks; track t.id) {
    <li class="flex items-center justify-between gap-4 px-4 py-3">
      <div class="min-w-0">
        <p class="truncate font-medium">{{ t.title }}</p>
        <scsc-text size="sm" tone="muted" tnum>{{ t.caseNumber }} \xB7 due {{ t.due }}</scsc-text>
      </div>
      <!-- The group is a list named by the assignees; "+N" is a button that lists the rest. -->
      <scsc-avatar-group
        class="shrink-0"
        [label]="'Assigned to ' + names(t)"
        [people]="t.assignees"
        [max]="3"
      />
    </li>
  }
</scsc-list>
`},"avatar-group-auto":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatarEntry, ScscAvatarGroup } from '@scscourt/design';

@Component({
  selector: 'app-avatar-group-auto-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatarGroup],
  template: \`
    <div class="flex max-w-md flex-col gap-2 rounded-box border border-base-300 p-4">
      <p class="text-sm font-medium">24CV012345 \xB7 Parties and counsel</p>
      <scsc-avatar-group label="Parties and counsel" [people]="people" overflow="auto" size="sm" />
      <p class="text-sm text-base-content/70">
        As many avatars as fit; "+N" lists the rest. Resize the window to see it re-fit.
      </p>
    </div>
  \`,
})
export class AvatarGroupAutoDemo {
  protected readonly people: ScscAvatarEntry[] = [
    'Maria Alvarez',
    'Daniel Reyes',
    'Sandra Liu',
    'Robert Whitfield',
    'Lena Okafor',
    'Tom\xE1s Herrera',
    'Grace Kim',
    'Samuel Adeyemi',
    'Hannah Novak',
    'Omar Haddad',
    'Julia Brandt',
    'Kenji Watanabe',
    'Aisha Mensah',
    'Victor Salas',
  ].map((name) => ({ name }));
}
`,html:`<div class="flex max-w-md flex-col gap-2 rounded-box border border-base-300 p-4">
  <p class="text-sm font-medium">24CV012345 \xB7 Parties and counsel</p>
  <scsc-avatar-group label="Parties and counsel" [people]="people" overflow="auto" size="sm" />
  <p class="text-sm text-base-content/70">
    As many avatars as fit; "+N" lists the rest. Resize the window to see it re-fit.
  </p>
</div>
`},"avatar-group-overflow":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatarEntry, ScscAvatarGroup } from '@scscourt/design';

@Component({
  selector: 'app-avatar-group-overflow-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatarGroup],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3 text-sm">
        <scsc-avatar-group [people]="parties" [max]="3" />
        <span>Three shown, the rest collapsed.</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <scsc-avatar-group [people]="parties" [max]="6" />
        <span>Everyone fits; no overflow chip.</span>
      </div>
    </div>
  \`,
})
export class AvatarGroupOverflowDemo {
  protected readonly parties: ScscAvatarEntry[] = [
    { name: 'Maria Alvarez' },
    { name: 'Daniel Reyes' },
    { name: 'Sandra Liu' },
    { name: 'Robert Whitfield', initials: 'RW' },
    { name: 'Lena Okafor' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <div class="flex items-center gap-3 text-sm">
    <scsc-avatar-group [people]="parties" [max]="3" />
    <span>Three shown, the rest collapsed.</span>
  </div>
  <div class="flex items-center gap-3 text-sm">
    <scsc-avatar-group [people]="parties" [max]="6" />
    <span>Everyone fits; no overflow chip.</span>
  </div>
</div>
`},"avatar-group-sizes":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscAvatarEntry, ScscAvatarGroup } from '@scscourt/design';

@Component({
  selector: 'app-avatar-group-sizes-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAvatarGroup],
  template: \`
    <div class="flex flex-wrap items-center gap-6">
      <scsc-avatar-group [people]="clerks" size="sm" />
      <scsc-avatar-group [people]="clerks" size="md" />
      <scsc-avatar-group [people]="clerks" size="lg" />
    </div>
  \`,
})
export class AvatarGroupSizesDemo {
  protected readonly clerks: ScscAvatarEntry[] = [
    { name: 'Beatriz Ortiz' },
    { name: 'Jonah Ruiz' },
    { name: 'Priya Natarajan' },
  ];
}
`,html:`<div class="flex flex-wrap items-center gap-6">
  <scsc-avatar-group [people]="clerks" size="sm" />
  <scsc-avatar-group [people]="clerks" size="md" />
  <scsc-avatar-group [people]="clerks" size="lg" />
</div>
`}};var k=(a,t)=>t.id;function C(a,t){if(a&1&&(Ga(0,`li`,1)(1,`div`,2)(2,`p`,3),G_(3),Lf(),Ga(4,`scsc-text`,4),G_(5),Lf()(),uc(6,`scsc-avatar-group`,5),Lf()),a&2){let e=t.$implicit,n=y_();Jb(3),nD(e.title),Jb(2),rD(``,e.caseNumber,` · due `,e.due),Jb(),Pv(`label`,`Assigned to `+n.names(e))(`people`,e.assignees)(`max`,3)}}var u=class a{tasks=[{id:1,title:`Review default judgment packet`,caseNumber:`24CV012345`,due:`Oct 2`,assignees:[{name:`Jonah Ruiz`},{name:`Beatriz Ortiz`}]},{id:2,title:`Prepare jury instructions`,caseNumber:`23CV031002`,due:`Oct 9`,assignees:[{name:`Priya Natarajan`},{name:`Daniel Reyes`},{name:`Sandra Liu`},{name:`Lena Okafor`},{name:`Jonah Ruiz`}]},{id:3,title:`Seal exhibits 4 through 7`,caseNumber:`24FL003210`,due:`Oct 14`,assignees:[{name:`Beatriz Ortiz`}]}];names(t){return t.assignees.map(e=>e.name).join(`, `)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-avatar-group-assignees-demo`]],decls:3,vars:0,consts:[[1,`max-w-xl`,`rounded-box`,`border`,`border-base-300`,`bg-base-100`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`px-4`,`py-3`],[1,`min-w-0`],[1,`truncate`,`font-medium`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[1,`shrink-0`,3,`label`,`people`,`max`]],template:function(e,n){e&1&&(Ga(0,`scsc-list`,0),o_(1,C,7,6,`li`,1,k),Lf()),e&2&&(Jb(),i_(n.tasks))},dependencies:[JF,EP,NE],encapsulation:2})};var v=class a{people=[`Maria Alvarez`,`Daniel Reyes`,`Sandra Liu`,`Robert Whitfield`,`Lena Okafor`,`Tomás Herrera`,`Grace Kim`,`Samuel Adeyemi`,`Hannah Novak`,`Omar Haddad`,`Julia Brandt`,`Kenji Watanabe`,`Aisha Mensah`,`Victor Salas`].map(t=>({name:t}));static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-avatar-group-auto-demo`]],decls:6,vars:1,consts:[[1,`flex`,`max-w-md`,`flex-col`,`gap-2`,`rounded-box`,`border`,`border-base-300`,`p-4`],[1,`text-sm`,`font-medium`],[`label`,`Parties and counsel`,`overflow`,`auto`,`size`,`sm`,3,`people`],[1,`text-sm`,`text-base-content/70`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`p`,1),G_(2,`24CV012345 · Parties and counsel`),Lf(),uc(3,`scsc-avatar-group`,2),Ga(4,`p`,3),G_(5,` As many avatars as fit; "+N" lists the rest. Resize the window to see it re-fit. `),Lf()()),e&2&&(Jb(3),Pv(`people`,n.people))},dependencies:[JF],encapsulation:2})};var g=class a{parties=[{name:`Maria Alvarez`},{name:`Daniel Reyes`},{name:`Sandra Liu`},{name:`Robert Whitfield`,initials:`RW`},{name:`Lena Okafor`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-avatar-group-overflow-demo`]],decls:9,vars:4,consts:[[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`items-center`,`gap-3`,`text-sm`],[3,`people`,`max`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`div`,1),uc(2,`scsc-avatar-group`,2),Ga(3,`span`),G_(4,`Three shown, the rest collapsed.`),Lf()(),Ga(5,`div`,1),uc(6,`scsc-avatar-group`,2),Ga(7,`span`),G_(8,`Everyone fits; no overflow chip.`),Lf()()()),e&2&&(Jb(2),Pv(`people`,n.parties)(`max`,3),Jb(4),Pv(`people`,n.parties)(`max`,6))},dependencies:[JF],encapsulation:2})};var f=class a{clerks=[{name:`Beatriz Ortiz`},{name:`Jonah Ruiz`},{name:`Priya Natarajan`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Af({type:a,selectors:[[`app-avatar-group-sizes-demo`]],decls:4,vars:3,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-6`],[`size`,`sm`,3,`people`],[`size`,`md`,3,`people`],[`size`,`lg`,3,`people`]],template:function(e,n){e&1&&(Ga(0,`div`,0),uc(1,`scsc-avatar-group`,1)(2,`scsc-avatar-group`,2)(3,`scsc-avatar-group`,3),Lf()),e&2&&(Jb(),Pv(`people`,n.clerks),Jb(),Pv(`people`,n.clerks),Jb(),Pv(`people`,n.clerks))},dependencies:[JF],encapsulation:2})};var K={slug:`avatar-group`,name:`Avatar Group`,classes:[`ScscAvatarGroup`],category:`Data Display`,whenToUse:[`Show who is attached to a case, task or hearing at a glance — assignees, parties, panel members.`,'`people` is a plain `ScscAvatarEntry[]` (`name`, optional `src` and `initials`); `max` collapses the rest into a "+N" chip.','The group is a labelled list, and "+N" is a button that lists the hidden names. Give it a `label` (the full list of names works well, as in the task-row demo), or pair it with a `scsc-party-list` when the names matter. Do not wrap it in `role="img"`: it contains a button.','The "+N" chip is always the `md` size, so keep groups that can overflow at the default `size`.'],demos:[{id:`avatar-group-auto`,title:`Fit to width with a "+N" list`,description:'`overflow="auto"` shows as many avatars as fit and re-measures on resize. "+N" is a button named "Show N more people" that opens a list of everyone hidden; Escape closes it.',component:v,source:d[`avatar-group-auto`]},{id:`avatar-group-overflow`,title:`Overflow`,description:"Five people with `max` 3 and `max` 6.",component:g,source:d[`avatar-group-overflow`]},{id:`avatar-group-sizes`,title:`Sizes`,description:"`size` is passed through to every avatar.",component:f,source:d[`avatar-group-sizes`]},{id:`avatar-group-assignees`,title:`Task assignees`,description:'A group per task row, named "Assigned to …" with every assignee through `label`; "+N" opens the rest.',component:u,source:d[`avatar-group-assignees`]}],a11y:['The group is a list; give it a `label` ("Assigned clerks") so screen readers hear who these people are and how many. Each avatar follows `scsc-avatar` rules (image `alt` = name; initials are decorative).','The "+N" control is a real button named "Show N more people" (`moreAriaLabel`), with `aria-expanded`. It opens a disclosure listing the hidden people by name; Escape or leaving it closes it and returns focus to the button.',`Never make the group the only place a person's involvement is shown: list the names in text where it matters (a case record, an audit trail).`],related:[`avatar`,`party-list`,`tooltip`]};export{K as AVATAR_GROUP_DOCS};