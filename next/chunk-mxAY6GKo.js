import{Ca as Gv,Co as _2,Cs as rM,Es as sD,Hs as y_,Lo as d_,Ma as JT,Na as Jb,No as cc,Ps as ut,Rs as w_,Ss as rD,Xa as Pv,Yo as iD,Zo as i_,_s as o_,bo as Y_,cs as lc,ds as nD,ha as Eg,ka as Ig,ks as t_,mi as sr,pi as sn,ra as Af,sa as C_,ta as $f,va as G_,vn as Vn,ws as r_,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var K=[`picker`];function X(t,a){if(t&1&&(Ga(0,`option`,5),G_(1),Lf()),t&2){let e=a.$implicit;Pv(`value`,e),Jb(),nD(e)}}function Y(t,a){if(t&1){let e=d_();Ga(0,`li`)(1,`scsc-tag`,8),lc(`removed`,function(){let p=Eg(e).$implicit,l=y_(2);return Ig(l.remove(p))}),G_(2),Lf()()}if(t&2){let e=a.$implicit;Jb(),Pv(`removable`,!0)(`label`,e+` filter`),Jb(),$f(` `,e,` `)}}function Z(t,a){if(t&1&&(Ga(0,`ul`,6),o_(1,Y,3,3,`li`,null,r_),Lf()),t&2){let e=y_();Jb(),i_(e.filters())}}var E=class t{picker=_2.required(`picker`);all=[`Civil`,`Family`,`Probate`,`Dept. 6`,`Dept. 21`,`Filed in 2026`,`Self-represented`];filters=q([`Civil`,`Dept. 6`,`Filed in 2026`]);available=ut(()=>this.all.filter(a=>!this.filters().includes(a)));announcement=q(``);add(a){let e=a.value;e&&(this.filters.update(i=>[...i,e]),a.value=``,this.announcement.set(`Added the `+e+` filter.`))}remove(a){this.filters.update(i=>i.filter(p=>p!==a));let e=this.filters().length;this.announcement.set(`Removed the `+a+` filter. `+e+(e===1?` filter`:` filters`)+` left.`),this.picker().nativeElement.focus()}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-filters-demo`]],viewQuery:function(e,i){e&1&&Gv(i.picker,K,5),e&2&&w_()},decls:11,vars:2,consts:[[`picker`,``],[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`label`,`Add a filter`,`for`,`tag-filters-add`,1,`max-w-xs`],[`scsc-select`,``,`id`,`tag-filters-add`,3,`change`],[`value`,``],[3,`value`],[`aria-label`,`Active filters`,1,`flex`,`flex-wrap`,`gap-2`],[`role`,`status`,1,`sr-only`],[3,`removed`,`removable`,`label`]],template:function(e,i){if(e&1){let p=d_();Ga(0,`div`,1)(1,`scsc-form-field`,2)(2,`select`,3,0),lc(`change`,function(){Eg(p);let G=C_(3);return Ig(i.add(G))}),Ga(4,`option`,4),G_(5,`Choose a filter…`),Lf(),o_(6,X,2,2,`option`,5,r_),Lf()(),JT(8,Z,3,0,`ul`,6),Ga(9,`p`,7),G_(10),Lf()()}e&2&&(Jb(6),i_(i.available()),Jb(2),t_(i.filters().length?8:-1),Jb(2),nD(i.announcement()))},dependencies:[Vn,On,sr],encapsulation:2})};var ee=()=>[`/docs/components/tag`];function te(t,a){if(t&1){let e=d_();Ga(0,`li`)(1,`scsc-tag`,6),lc(`removed`,function(){let p=Eg(e).$implicit,l=y_();return Ig(l.unassign(p))}),G_(2),Lf()()}if(t&2){let e=a.$implicit,i=y_();Jb(),Pv(`avatarSrc`,i.portrait)(`label`,e),Jb(),nD(e)}}function ae(t,a){t&1&&(Ga(0,`li`,5),G_(1,`Nobody assigned.`),Lf())}var ie=`data:image/svg+xml,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="#1f3a68"/><circle cx="8" cy="6" r="3" fill="#f3f4f6"/><rect x="3" y="10" width="10" height="6" rx="3" fill="#f3f4f6"/></svg>`);var R=class t{portrait=ie;people=q([`Maria Chen`,`David Okafor`,`Priya Nair`]);unassign(a){this.people.update(e=>e.filter(i=>i!==a))}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-links-demo`]],decls:12,vars:3,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`aria-label`,`Related cases`,1,`flex`,`flex-wrap`,`gap-2`],[`maxWidth`,`14rem`,`tone`,`primary`,3,`link`],[`href`,`https://www.courts.ca.gov/forms.htm`,`icon`,`file.document`,`variant`,`outline`],[`aria-label`,`Assigned staff`,1,`flex`,`flex-wrap`,`gap-2`],[1,`text-sm`,`text-base-content/70`],[`removable`,``,3,`removed`,`avatarSrc`,`label`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`ul`,1)(2,`li`)(3,`scsc-tag`,2),G_(4,` 24CV012345 Alvarez v. Northgate Property Management, LLC `),Lf()(),Ga(5,`li`)(6,`scsc-tag`,3),G_(7,` Judicial Council forms `),Lf()()(),Ga(8,`ul`,4),o_(9,te,3,3,`li`,null,r_,!1,ae,2,0,`li`,5),Lf()()),e&2&&(Jb(3),Pv(`link`,rM(2,ee)),Jb(6),i_(i.people()))},dependencies:[sr],encapsulation:2})};var ne=(t,a)=>a.caseNumber;function se(t,a){if(t&1&&(Ga(0,`li`)(1,`span`,7),G_(2),Lf(),G_(3),Lf()),t&2){let e=a.$implicit;Jb(2),nD(e.caseNumber),Jb(),$f(` · `,e.type,` `)}}var P=class t{remote=q(!1);interpreter=q(!1);hearings=[{caseNumber:`24CV012345`,type:`Case management`,remote:!0,interpreter:!1},{caseNumber:`24FL004821`,type:`Custody review`,remote:!1,interpreter:!0},{caseNumber:`24CR007733`,type:`Arraignment`,remote:!0,interpreter:!0},{caseNumber:`23PR000912`,type:`Probate status`,remote:!1,interpreter:!1}];shown=ut(()=>this.hearings.filter(a=>(!this.remote()||a.remote)&&(!this.interpreter()||a.interpreter)));static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-selectable-demo`]],decls:16,vars:4,consts:[[1,`flex`,`max-w-xl`,`flex-col`,`gap-3`],[`aria-label`,`Quick filters`,1,`flex`,`flex-wrap`,`gap-2`],[`selectable`,``,3,`selectedChange`,`selected`],[`selectable`,``,`tone`,`info`,3,`selectedChange`,`selected`],[`selectable`,``,`disabled`,``],[`aria-live`,`polite`,1,`text-sm`,`text-base-content/70`],[1,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`tnum`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`ul`,1)(2,`li`)(3,`scsc-tag`,2),sD(`selectedChange`,function(l){return Y_(i.remote,l)||(i.remote=l),l}),G_(4,`Remote hearings`),Lf()(),Ga(5,`li`)(6,`scsc-tag`,3),sD(`selectedChange`,function(l){return Y_(i.interpreter,l)||(i.interpreter=l),l}),G_(7,`Needs interpreter`),Lf()(),Ga(8,`li`)(9,`scsc-tag`,4),G_(10,`Sealed (no access)`),Lf()()(),Ga(11,`p`,5),G_(12),Lf(),Ga(13,`ul`,6),o_(14,se,4,2,`li`,null,ne),Lf()()),e&2&&(Jb(3),iD(`selected`,i.remote),Jb(3),iD(`selected`,i.interpreter),Jb(6),rD(` `,i.shown().length,` of `,i.hearings.length,` hearings `),Jb(2),i_(i.shown()))},dependencies:[sr],encapsulation:2})};var re=(t,a)=>a.tone;function oe(t,a){if(t&1&&(Ga(0,`li`)(1,`scsc-tag`,6),G_(2),Lf()()),t&2){let e=a.$implicit,i=y_().$implicit;Jb(),Pv(`tone`,e.tone)(`variant`,i)(`icon`,e.icon),Jb(),nD(e.text)}}function le(t,a){if(t&1&&(Ga(0,`ul`,1),o_(1,oe,3,4,`li`,null,re),Lf()),t&2){let e=a.$implicit,i=y_();cc(`aria-label`,e+` tags`),Jb(),i_(i.tones)}}var I=class t{variants=[`soft`,`outline`,`solid`];tones=[{tone:`neutral`,text:`Dept. 10`},{tone:`primary`,text:`Civil`,icon:`court.case`},{tone:`secondary`,text:`Priority`},{tone:`info`,text:`Interpreter`,icon:`court.interpreter`},{tone:`success`,text:`Fee paid`,icon:`status.success`},{tone:`warning`,text:`Waiver pending`,icon:`status.warning`},{tone:`error`,text:`Past due`,icon:`status.error`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-tones-demo`]],decls:13,vars:0,consts:[[1,`flex`,`flex-col`,`gap-4`],[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`aria-label`,`Small tags`,1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`size`,`sm`,`tone`,`primary`],[`size`,`sm`,`variant`,`outline`],[`size`,`sm`,`tone`,`success`,`variant`,`solid`],[3,`tone`,`variant`,`icon`]],template:function(e,i){e&1&&(Ga(0,`div`,0),o_(1,le,3,1,`ul`,1,r_),Ga(3,`ul`,2)(4,`li`)(5,`scsc-tag`,3),G_(6,`Civil`),Lf()(),Ga(7,`li`)(8,`scsc-tag`,4),G_(9,`Dept. 10`),Lf()(),Ga(10,`li`)(11,`scsc-tag`,5),G_(12,`Paid`),Lf()()()()),e&2&&(Jb(),i_(i.variants))},dependencies:[sr],encapsulation:2})};function ce(t,a){if(t&1){let e=d_();Ga(0,`scsc-tag`,4),lc(`removed`,function(){let p=Eg(e).$implicit,l=y_();return Ig(l.remove(p))}),G_(1),Lf()}if(t&2){let e=a.$implicit;Pv(`removable`,!0)(`label`,e),Jb(),nD(e)}}function me(t,a){t&1&&(Ga(0,`span`,1),G_(1,`None`),Lf())}function pe(t,a){if(t&1){let e=d_();Ga(0,`scsc-button`,5),lc(`click`,function(){Eg(e);let p=y_();return Ig(p.filters.set([]))}),G_(1,`Clear all`),Lf()}}var A=class t{filters=q([`Civil`,`Dept. 21`,`Filed 2024`,`Unlimited`]);remove(a){this.filters.update(e=>e.filter(i=>i!==a))}static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-removable-demo`]],decls:7,vars:2,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[1,`text-sm`,`text-base-content/70`],[3,`removable`,`label`],[`variant`,`ghost`,`size`,`xs`],[3,`removed`,`removable`,`label`],[`variant`,`ghost`,`size`,`xs`,3,`click`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`Active filters:`),Lf(),o_(3,ce,2,3,`scsc-tag`,2,r_,!1,me,2,0,`span`,1),JT(6,pe,2,0,`scsc-button`,3),Lf()),e&2&&(Jb(3),i_(i.filters()),Jb(3),t_(i.filters().length>0?6:-1))},dependencies:[sn,sr],encapsulation:2})};function de(t,a){if(t&1&&(Ga(0,`scsc-tag`),G_(1),Lf()),t&2){let e=a.$implicit;Jb(),nD(e)}}var M=class t{tags=[`Civil — Unlimited`,`Jury trial`,`Interpreter: Spanish`];static ɵfac=function(e){return new(e||t)};static ɵcmp=Af({type:t,selectors:[[`app-tag-static-demo`]],decls:5,vars:0,consts:[[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[1,`text-sm`,`font-medium`]],template:function(e,i){e&1&&(Ga(0,`div`,0)(1,`span`,1),G_(2,`Alvarez v. Northgate`),Lf(),o_(3,de,2,1,`scsc-tag`,null,r_),Lf()),e&2&&(Jb(3),i_(i.tags))},dependencies:[sr],encapsulation:2})};var C={"tag-filters":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { ScscFormField, ScscSelect, ScscTag } from '@scscourt/design';

@Component({
  selector: 'app-tag-filters-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSelect, ScscTag],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <scsc-form-field class="max-w-xs" label="Add a filter" for="tag-filters-add">
        <select #picker scsc-select id="tag-filters-add" (change)="add(picker)">
          <option value="">Choose a filter\u2026</option>
          @for (o of available(); track o) {
            <option [value]="o">{{ o }}</option>
          }
        </select>
      </scsc-form-field>

      @if (filters().length) {
        <ul class="flex flex-wrap gap-2" aria-label="Active filters">
          @for (f of filters(); track f) {
            <li>
              <scsc-tag [removable]="true" [label]="f + ' filter'" (removed)="remove(f)">
                {{ f }}
              </scsc-tag>
            </li>
          }
        </ul>
      }
      <!-- The removed button takes its focus with it: say what happened, and move focus on. -->
      <p class="sr-only" role="status">{{ announcement() }}</p>
    </div>
  \`,
})
export class TagFiltersDemo {
  private readonly picker = viewChild.required<ElementRef<HTMLSelectElement>>('picker');

  private readonly all = [
    'Civil',
    'Family',
    'Probate',
    'Dept. 6',
    'Dept. 21',
    'Filed in 2026',
    'Self-represented',
  ];
  protected readonly filters = signal(['Civil', 'Dept. 6', 'Filed in 2026']);
  protected readonly available = computed(() =>
    this.all.filter((o) => !this.filters().includes(o)),
  );
  protected readonly announcement = signal('');

  protected add(select: HTMLSelectElement): void {
    const value = select.value;
    if (!value) return;
    this.filters.update((list) => [...list, value]);
    select.value = '';
    this.announcement.set('Added the ' + value + ' filter.');
  }

  protected remove(filter: string): void {
    this.filters.update((list) => list.filter((f) => f !== filter));
    const left = this.filters().length;
    this.announcement.set(
      'Removed the ' +
        filter +
        ' filter. ' +
        left +
        (left === 1 ? ' filter' : ' filters') +
        ' left.',
    );
    this.picker().nativeElement.focus();
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <scsc-form-field class="max-w-xs" label="Add a filter" for="tag-filters-add">
    <select #picker scsc-select id="tag-filters-add" (change)="add(picker)">
      <option value="">Choose a filter\u2026</option>
      @for (o of available(); track o) {
        <option [value]="o">{{ o }}</option>
      }
    </select>
  </scsc-form-field>

  @if (filters().length) {
    <ul class="flex flex-wrap gap-2" aria-label="Active filters">
      @for (f of filters(); track f) {
        <li>
          <scsc-tag [removable]="true" [label]="f + ' filter'" (removed)="remove(f)">
            {{ f }}
          </scsc-tag>
        </li>
      }
    </ul>
  }
  <!-- The removed button takes its focus with it: say what happened, and move focus on. -->
  <p class="sr-only" role="status">{{ announcement() }}</p>
</div>
`},"tag-links":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscTag } from '@scscourt/design';

/** A tiny inline portrait so the demo has no network dependency. */
const PORTRAIT =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="#1f3a68"/><circle cx="8" cy="6" r="3" fill="#f3f4f6"/><rect x="3" y="10" width="10" height="6" rx="3" fill="#f3f4f6"/></svg>',
  );

@Component({
  selector: 'app-tag-links-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTag],
  template: \`
    <div class="flex max-w-xl flex-col gap-4">
      <ul class="flex flex-wrap gap-2" aria-label="Related cases">
        <li>
          <scsc-tag [link]="['/docs/components/tag']" maxWidth="14rem" tone="primary">
            24CV012345 Alvarez v. Northgate Property Management, LLC
          </scsc-tag>
        </li>
        <li>
          <scsc-tag
            href="https://www.courts.ca.gov/forms.htm"
            icon="file.document"
            variant="outline"
          >
            Judicial Council forms
          </scsc-tag>
        </li>
      </ul>
      <ul class="flex flex-wrap gap-2" aria-label="Assigned staff">
        @for (p of people(); track p) {
          <li>
            <scsc-tag [avatarSrc]="portrait" removable [label]="p" (removed)="unassign(p)">{{
              p
            }}</scsc-tag>
          </li>
        } @empty {
          <li class="text-sm text-base-content/70">Nobody assigned.</li>
        }
      </ul>
    </div>
  \`,
})
export class TagLinksDemo {
  protected readonly portrait = PORTRAIT;
  protected readonly people = signal(['Maria Chen', 'David Okafor', 'Priya Nair']);
  protected unassign(name: string): void {
    this.people.update((list) => list.filter((p) => p !== name));
  }
}
`,html:`<div class="flex max-w-xl flex-col gap-4">
  <ul class="flex flex-wrap gap-2" aria-label="Related cases">
    <li>
      <scsc-tag [link]="['/docs/components/tag']" maxWidth="14rem" tone="primary">
        24CV012345 Alvarez v. Northgate Property Management, LLC
      </scsc-tag>
    </li>
    <li>
      <scsc-tag
        href="https://www.courts.ca.gov/forms.htm"
        icon="file.document"
        variant="outline"
      >
        Judicial Council forms
      </scsc-tag>
    </li>
  </ul>
  <ul class="flex flex-wrap gap-2" aria-label="Assigned staff">
    @for (p of people(); track p) {
      <li>
        <scsc-tag [avatarSrc]="portrait" removable [label]="p" (removed)="unassign(p)">{{
          p
        }}</scsc-tag>
      </li>
    } @empty {
      <li class="text-sm text-base-content/70">Nobody assigned.</li>
    }
  </ul>
</div>
`},"tag-removable":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscTag } from '@scscourt/design';

@Component({
  selector: 'app-tag-removable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscTag],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-sm text-base-content/70">Active filters:</span>
      @for (f of filters(); track f) {
        <scsc-tag [removable]="true" [label]="f" (removed)="remove(f)">{{ f }}</scsc-tag>
      } @empty {
        <span class="text-sm text-base-content/70">None</span>
      }
      @if (filters().length > 0) {
        <scsc-button variant="ghost" size="xs" (click)="filters.set([])">Clear all</scsc-button>
      }
    </div>
  \`,
})
export class TagRemovableDemo {
  protected readonly filters = signal(['Civil', 'Dept. 21', 'Filed 2024', 'Unlimited']);

  protected remove(filter: string): void {
    this.filters.update((all) => all.filter((f) => f !== filter));
  }
}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <span class="text-sm text-base-content/70">Active filters:</span>
  @for (f of filters(); track f) {
    <scsc-tag [removable]="true" [label]="f" (removed)="remove(f)">{{ f }}</scsc-tag>
  } @empty {
    <span class="text-sm text-base-content/70">None</span>
  }
  @if (filters().length > 0) {
    <scsc-button variant="ghost" size="xs" (click)="filters.set([])">Clear all</scsc-button>
  }
</div>
`},"tag-selectable":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscTag } from '@scscourt/design';

interface Hearing {
  caseNumber: string;
  type: string;
  remote: boolean;
  interpreter: boolean;
}

@Component({
  selector: 'app-tag-selectable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTag],
  template: \`
    <div class="flex max-w-xl flex-col gap-3">
      <ul class="flex flex-wrap gap-2" aria-label="Quick filters">
        <li><scsc-tag selectable [(selected)]="remote">Remote hearings</scsc-tag></li>
        <li>
          <scsc-tag selectable tone="info" [(selected)]="interpreter">Needs interpreter</scsc-tag>
        </li>
        <li><scsc-tag selectable disabled>Sealed (no access)</scsc-tag></li>
      </ul>
      <p class="text-sm text-base-content/70" aria-live="polite">
        {{ shown().length }} of {{ hearings.length }} hearings
      </p>
      <ul class="flex flex-col gap-1 text-sm">
        @for (h of shown(); track h.caseNumber) {
          <li>
            <span class="tnum">{{ h.caseNumber }}</span> \xB7 {{ h.type }}
          </li>
        }
      </ul>
    </div>
  \`,
})
export class TagSelectableDemo {
  protected readonly remote = signal(false);
  protected readonly interpreter = signal(false);
  protected readonly hearings: Hearing[] = [
    { caseNumber: '24CV012345', type: 'Case management', remote: true, interpreter: false },
    { caseNumber: '24FL004821', type: 'Custody review', remote: false, interpreter: true },
    { caseNumber: '24CR007733', type: 'Arraignment', remote: true, interpreter: true },
    { caseNumber: '23PR000912', type: 'Probate status', remote: false, interpreter: false },
  ];
  protected readonly shown = computed(() =>
    this.hearings.filter(
      (h) => (!this.remote() || h.remote) && (!this.interpreter() || h.interpreter),
    ),
  );
}
`,html:`<div class="flex max-w-xl flex-col gap-3">
  <ul class="flex flex-wrap gap-2" aria-label="Quick filters">
    <li><scsc-tag selectable [(selected)]="remote">Remote hearings</scsc-tag></li>
    <li>
      <scsc-tag selectable tone="info" [(selected)]="interpreter">Needs interpreter</scsc-tag>
    </li>
    <li><scsc-tag selectable disabled>Sealed (no access)</scsc-tag></li>
  </ul>
  <p class="text-sm text-base-content/70" aria-live="polite">
    {{ shown().length }} of {{ hearings.length }} hearings
  </p>
  <ul class="flex flex-col gap-1 text-sm">
    @for (h of shown(); track h.caseNumber) {
      <li>
        <span class="tnum">{{ h.caseNumber }}</span> \xB7 {{ h.type }}
      </li>
    }
  </ul>
</div>
`},"tag-static":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTag } from '@scscourt/design';

@Component({
  selector: 'app-tag-static-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTag],
  template: \`
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-sm font-medium">Alvarez v. Northgate</span>
      @for (tag of tags; track tag) {
        <scsc-tag>{{ tag }}</scsc-tag>
      }
    </div>
  \`,
})
export class TagStaticDemo {
  protected readonly tags = ['Civil \u2014 Unlimited', 'Jury trial', 'Interpreter: Spanish'];
}
`,html:`<div class="flex flex-wrap items-center gap-2">
  <span class="text-sm font-medium">Alvarez v. Northgate</span>
  @for (tag of tags; track tag) {
    <scsc-tag>{{ tag }}</scsc-tag>
  }
</div>
`},"tag-tones":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscTag, type ScscTagTone, type ScscTagVariant } from '@scscourt/design';

@Component({
  selector: 'app-tag-tones-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTag],
  template: \`
    <div class="flex flex-col gap-4">
      @for (v of variants; track v) {
        <ul class="flex flex-wrap items-center gap-2" [attr.aria-label]="v + ' tags'">
          @for (t of tones; track t.tone) {
            <li>
              <scsc-tag [tone]="t.tone" [variant]="v" [icon]="t.icon">{{ t.text }}</scsc-tag>
            </li>
          }
        </ul>
      }
      <ul class="flex flex-wrap items-center gap-2" aria-label="Small tags">
        <li><scsc-tag size="sm" tone="primary">Civil</scsc-tag></li>
        <li><scsc-tag size="sm" variant="outline">Dept. 10</scsc-tag></li>
        <li><scsc-tag size="sm" tone="success" variant="solid">Paid</scsc-tag></li>
      </ul>
    </div>
  \`,
})
export class TagTonesDemo {
  protected readonly variants: ScscTagVariant[] = ['soft', 'outline', 'solid'];
  protected readonly tones: { tone: ScscTagTone; text: string; icon?: string }[] = [
    { tone: 'neutral', text: 'Dept. 10' },
    { tone: 'primary', text: 'Civil', icon: 'court.case' },
    { tone: 'secondary', text: 'Priority' },
    { tone: 'info', text: 'Interpreter', icon: 'court.interpreter' },
    { tone: 'success', text: 'Fee paid', icon: 'status.success' },
    { tone: 'warning', text: 'Waiver pending', icon: 'status.warning' },
    { tone: 'error', text: 'Past due', icon: 'status.error' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  @for (v of variants; track v) {
    <ul class="flex flex-wrap items-center gap-2" [attr.aria-label]="v + ' tags'">
      @for (t of tones; track t.tone) {
        <li>
          <scsc-tag [tone]="t.tone" [variant]="v" [icon]="t.icon">{{ t.text }}</scsc-tag>
        </li>
      }
    </ul>
  }
  <ul class="flex flex-wrap items-center gap-2" aria-label="Small tags">
    <li><scsc-tag size="sm" tone="primary">Civil</scsc-tag></li>
    <li><scsc-tag size="sm" variant="outline">Dept. 10</scsc-tag></li>
    <li><scsc-tag size="sm" tone="success" variant="solid">Paid</scsc-tag></li>
  </ul>
</div>
`}};var Qe={slug:`tag`,name:`Tag`,classes:[`ScscTag`],category:`Data Display`,whenToUse:["A compact label: case labels, active filters, roles, people. `tone` (neutral, primary, secondary, info, success, warning, error) × `variant` (soft, outline, solid) × `size` (sm, md), with an optional `icon` or `avatarSrc`.","Interactive tags: `removable` (a Remove button), `selectable` (a toggle with `[(selected)]`), `link` / `href` (the text becomes a link), `clickable` (a button that emits `labelClick`). `maxWidth` truncates long text and keeps the full text in the name and a tooltip.",'For many tags with "+N more" overflow use `scsc-tag-list`, which renders each chip as an `scsc-tag`.',"The tag never removes itself — handle `(removed)` and update your own list, so the same markup works with signals, forms or a store.","For read-only metadata with a colour tone use `scsc-badge`; for entering tags in a form use `scsc-tags-input`."],demos:[{id:`tag-tones`,title:`Tones, variants and sizes`,description:`Every tone in soft, outline and solid, with icons, and the small size for dense rows. All pairings pass the contrast gate in the light, dark and high-contrast themes.`,component:I,source:C[`tag-tones`]},{id:`tag-selectable`,title:`Selectable filter chips`,description:"`selectable` tags are toggle buttons (`aria-pressed`) bound with `[(selected)]`; a selected tag fills in and shows a check. `disabled` keeps it in place but inert.",component:P,source:C[`tag-selectable`]},{id:`tag-links`,title:`Links, people and truncation`,description:"`link` (router) and `href` render the text as a link; `maxWidth` truncates a long case caption. Person tags carry an `avatarSrc` and a Remove button.",component:R,source:C[`tag-links`]},{id:`tag-removable`,title:`Removable filters`,description:"Each tag emits `removed`; the parent filters its signal. `label` names the remove button.",component:A,source:C[`tag-removable`]},{id:`tag-static`,title:`Static tags`,description:"Without `removable` a tag is a plain soft chip.",component:M,source:C[`tag-static`]},{id:`tag-filters`,title:`Filter bar with focus management`,description:`Tags in a labelled list beside the select that adds them; removing one moves focus back to the select and announces what changed.`,component:E,source:C[`tag-filters`]}],a11y:['The remove control is a real `<button>` named "Remove {label}" (the tag text by default; pass `label` or `removeLabel` to be specific). Its pointer target is 44 × 44 px in comfortable density and 24 × 24 px in compact.',"Selectable tags are `<button aria-pressed>`; the selected state is also shown by a check icon, never by colour alone. Link tags are real `<a>` elements.","Truncated text (`maxWidth`) is clipped visually only: the accessible name keeps the full text, and `title` shows it on hover.",`After removing a tag, focus is lost with the button; move it somewhere useful (the control that adds tags, or the next tag) and announce the change, as the third demo does.`,"Put a group of tags in a `<ul>` with an `aria-label` so screen readers hear how many there are."],related:[`tag-list`,`badge`,`tags-input`,`multi-select`,`avatar-group`]};export{Qe as TAG_DOCS};