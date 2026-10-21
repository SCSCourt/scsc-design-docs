import{An as XN,At as NP,Ca as Gv,Co as _2,Dn as Wue,Do as ae,E as Bue,Es as sD,Go as g,Gs as zS,Gt as QN,H as FN,Hs as y_,In as Xz,Ki as ye,Ln as YA,Lo as d_,Lt as ON,Ma as JT,Ms as uc,Na as Jb,Nr as jo,Ps as ut,Qr as pN,Rs as w_,Tt as MN,Va as M2,Vr as mN,Wn as Zi,Xa as Pv,Xi as zN,Y as Fs,Yo as iD,Zi as za,Zn as bA,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,c as $r,cn as UE,cs as lc,ct as Ir,ds as nD,et as Ha,go as Xa,ha as Eg,ii as qo,ka as Ig,ks as t_,l as $ue,lr as ez,mn as Uue,ms as nu,nn as TN,nt as IA,oi as que,pi as sn,qi as yr,ra as Af,t as $E,ta as $f,tt as Hue,u as $z,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xn as WA,xs as q,ya as Ga,za as Lf,zn as YP,zt as On}from"./main-O6OT5H7H.js";var Le=[`stepBody`];var Ie=[`doneHeading`];var Ae=(l,r)=>r.value;var Te=(l,r)=>r.name;function Be(l,r){if(l&1){let t=d_();Ga(0,`scsc-card`)(1,`div`,23)(2,`span`,24),uc(3,`scsc-icon`,25),Lf(),Ga(4,`h2`,26,0),G_(6,` Your filing was submitted `),Lf(),Ga(7,`p`,27),G_(8,` Envelope `),Ga(9,`strong`,28),G_(10),Lf(),G_(11,` is in the clerk’s review queue for case `),Ga(12,`span`,28),G_(13),Lf(),G_(14),Lf(),Ga(15,`ol`,29)(16,`li`),G_(17,`The clerk reviews your filing, usually within two court days.`),Lf(),Ga(18,`li`),G_(19,`You get an email when it is accepted, with the conformed copy attached.`),Lf(),Ga(20,`li`),G_(21,` If it is rejected, the email says why and how to fix it. You are not charged. `),Lf()(),Ga(22,`div`,30)(23,`a`,31),G_(24,`Track my filings`),Lf(),Ga(25,`scsc-button`,32),lc(`click`,function(){Eg(t);let c=y_();return Ig(c.startOver())}),G_(26,` File another document `),Lf()()()()}if(l&2){let t=y_();Jb(10),nD(r),Jb(3),nD(t.caseNumber()),Jb(),$f(`. We sent a receipt to `,t.form.controls.caseInfo.controls.email.value,`. `)}}function Me(l,r){if(l&1&&(Ga(0,`p`,39),uc(1,`scsc-icon`,77),Ga(2,`span`)(3,`span`,78),G_(4),Lf(),G_(5),Lf()()),l&2){let t=r;Jb(4),nD(t.title),Jb(),$f(` · `,t.department)}}function Pe(l,r){if(l&1&&(Ga(0,`option`,43),G_(1),Lf()),l&2){let t=r.$implicit;Pv(`value`,t),Jb(),nD(t)}}function qe(l,r){if(l&1&&(Ga(0,`option`,43),G_(1),Lf()),l&2){let t=r.$implicit;Pv(`value`,t.value),Jb(),nD(t.label)}}function Ve(l,r){if(l&1){let t=d_();Ga(0,`li`,79),uc(1,`scsc-icon`,80),Ga(2,`span`,81)(3,`span`,82),G_(4),Lf(),Ga(5,`span`,83),G_(6),Lf()(),Ga(7,`scsc-icon-button`,84),lc(`click`,function(){let c=Eg(t).$implicit,f=y_(3);return Ig(f.removeFile(c))}),Lf()()}if(l&2){let t=r.$implicit,e=y_(3);Jb(4),nD(t.name),Jb(2),nD(e.formatSize(t.size)),Jb(),Pv(`label`,`Remove `+t.name)}}function Re(l,r){if(l&1&&(Ga(0,`ul`,54),o_(1,Ve,8,3,`li`,79,Te),Lf()),l&2){let t=y_(2);Jb(),i_(t.files())}}function We(l,r){l&1&&(Ga(0,`scsc-alert`,55),G_(1,`Add at least one PDF to file.`),Lf())}function je(l,r){if(l&1&&(Ga(0,`li`,73),uc(1,`scsc-icon`,85),G_(2),Lf()),l&2){let t=r.$implicit;Jb(2),$f(` `,t.name,` `)}}function Oe(l,r){if(l&1){let t=d_();Ga(0,`scsc-card`)(1,`form`,33),lc(`ngSubmit`,function(c){return c.preventDefault()}),Ga(2,`scsc-wizard`,34),sD(`indexChange`,function(c){Eg(t);let f=y_();return Y_(f.step,c)||(f.step=c),Ig(c)}),lc(`finish`,function(){Eg(t);let c=y_();return Ig(c.submit())}),Ga(3,`scsc-wizard-step`,35)(4,`div`,36,1)(6,`scsc-form-field`,37)(7,`input`,38),HS(),Lf()(),JT(8,Me,6,2,`p`,39),Ga(9,`scsc-form-field`,40)(10,`select`,41),HS(),Ga(11,`option`,42),G_(12,`Choose one`),Lf(),o_(13,Pe,2,2,`option`,43,r_),Lf()(),Ga(15,`div`,44)(16,`scsc-form-field`,45)(17,`input`,46),HS(),Lf()(),Ga(18,`scsc-form-field`,47)(19,`input`,48),HS(),Lf()()()()(),Ga(20,`scsc-wizard-step`,49)(21,`div`,50,1)(23,`scsc-form-field`,51)(24,`select`,52),HS(),Ga(25,`option`,42),G_(26,`Choose one`),Lf(),o_(27,qe,2,2,`option`,43,Ae),Lf()(),Ga(29,`scsc-file-upload`,53),lc(`filesSelected`,function(c){Eg(t);let f=y_();return Ig(f.addFiles(c))}),Lf(),JT(30,Re,3,0,`ul`,54),JT(31,We,2,0,`scsc-alert`,55),Lf()(),Ga(32,`scsc-wizard-step`,56)(33,`div`,57,1),uc(35,`scsc-fee-table`,58),Ga(36,`label`,59)(37,`input`,60),HS(),Lf(),Ga(38,`span`,61)(39,`span`,62),G_(40,`I have a fee waiver in this case`),Lf(),Ga(41,`span`,63),G_(42,`An order on form FW-003 waives court fees for the rest of the case.`),Lf()()(),Ga(43,`scsc-fieldset`,64)(44,`label`,65)(45,`input`,66),HS(),Lf(),G_(46,` Credit or debit card `),Lf(),Ga(47,`label`,65)(48,`input`,67),HS(),Lf(),G_(49,` Bank account (e-check) `),Lf()()()(),Ga(50,`scsc-wizard-step`,68)(51,`div`,69,1),uc(53,`scsc-description-list`,70),Ga(54,`div`)(55,`h3`,71),G_(56,`Documents`),Lf(),Ga(57,`ul`,72),o_(58,je,3,1,`li`,73,Te),Lf()(),Ga(60,`scsc-legal-notice`,74),HS(),Lf(),Ga(61,`scsc-form-field`,75)(62,`input`,76),HS(),Lf()()()()()()()}if(l&2){let t,e=y_();Jb(),Pv(`formGroup`,e.form),Jb(),iD(`index`,e.step),Jb(),Pv(`stepControl`,e.form.controls.caseInfo),Jb(3),Pv(`error`,e.errorFor(e.caseCtrl.caseNumber,`a case number like 24CV012345`)),Jb(),Pv(`invalid`,e.showError(e.caseCtrl.caseNumber)),zS(),Jb(),t_((t=e.foundCase())?8:-1,t),Jb(),Pv(`error`,e.errorFor(e.caseCtrl.role,`your role in the case`)),Jb(),Pv(`invalid`,e.showError(e.caseCtrl.role)),zS(),Jb(3),i_(e.roles),Jb(3),Pv(`error`,e.errorFor(e.caseCtrl.name,`your full name`)),Jb(),Pv(`invalid`,e.showError(e.caseCtrl.name)),zS(),Jb(),Pv(`error`,e.errorFor(e.caseCtrl.email,`an email address like name@example.com`)),Jb(),Pv(`invalid`,e.showError(e.caseCtrl.email)),zS(),Jb(),Pv(`stepControl`,e.form.controls.documents)(`canAdvance`,e.hasFiles),Jb(3),Pv(`error`,e.errorFor(e.docCtrl.docType,`the type of document`)),Jb(),Pv(`invalid`,e.showError(e.docCtrl.docType)),zS(),Jb(3),i_(e.docTypes),Jb(3),t_(e.files().length?30:-1),Jb(),t_(e.filesError()?31:-1),Jb(4),Pv(`fees`,e.feeLines()),Jb(2),zS(),Jb(6),Pv(`inline`,!0),Jb(2),zS(),Jb(3),zS(),Jb(2),Pv(`stepControl`,e.form.controls.review),Jb(3),Pv(`items`,e.summary()),Jb(5),i_(e.files()),Jb(2),Pv(`headingLevel`,3)(`acknowledgeError`,e.showError(e.reviewCtrl.acknowledge)?`Confirm that you have read the notice to submit.`:``),zS(),Jb(),Pv(`error`,e.errorFor(e.reviewCtrl.signature,`your full name as your signature`)),Jb(),Pv(`invalid`,e.showError(e.reviewCtrl.signature)),zS()}}var I=[{value:`motion`,label:`Motion requiring a hearing`,fee:60},{value:`opposition`,label:`Opposition or reply`,fee:0},{value:`declaration`,label:`Declaration`,fee:0},{value:`proof`,label:`Proof of service`,fee:0}];var Ge=[`Plaintiff or petitioner`,`Defendant or respondent`,`Attorney for a party`,`Other interested person`];var He={"24CV012345":{title:`Alvarez v. Northgate Property Management`,department:`Dept. 10`},"24CV013002":{title:`Nguyen v. Almaden Ridge Apartments`,department:`Dept. 3`}};var Ue=4.5;var nt=[{id:`efiling-wizard`,title:`e-Filing wizard`,description:"Reactive form across four wizard steps (case, documents, fees, review) where each step’s form group is its `stepControl` (Next shows the error summary and focuses the first problem; `canAdvance` requires an upload), the not-legal-advice notice and acknowledgement, then a confirmation.",component:class l{fb=g(Wue).nonNullable;injector=g(ae);wizard=_2(Zi);stepBodies=M2(`stepBody`);doneHeading=_2(`doneHeading`);nav=[{label:`Home`,icon:`house`,link:`home`},{label:`Case search`,icon:`search`,link:`search`},{label:`Calendar`,icon:`calendar-days`,link:`calendar`},{label:`e-Filing`,icon:`upload`,link:`.`,exact:!0},{label:`Fees`,icon:`credit-card`,link:`fees`},{label:`Jury`,icon:`users`,link:`jury`},{label:`Self-help`,icon:`life-buoy`,link:`self-help`}];legalLinks=[{id:`privacy`,label:`Privacy`,link:`privacy`},{id:`terms`,label:`Terms of use`,link:`terms`},{id:`accessibility`,label:`Accessibility`,link:`accessibility`},{id:`language-access`,label:`Language access`,link:`language-access`}];footerContact={name:`Downtown Superior Court`,address:[`191 N. First Street`,`San José, CA 95113`],phone:`(408) 882-2100`,hours:[`Clerk’s Office: Mon–Fri, 8:30 a.m.–4:00 p.m.`]};footerLinks=[{heading:`Online services`,links:[{label:`Case search`,link:`search`},{label:`Calendar & rulings`,link:`calendar`},{label:`e-Filing`,link:`efile`},{label:`Pay fees`,link:`fees`}]},{heading:`Get help`,links:[{label:`Self-help center`,link:`self-help`},{label:`Language access`,link:`language`},{label:`Disability accommodations`,link:`accommodations`},{label:`Contact the court`,link:`help`}]},{heading:`About the court`,links:[{label:`Courthouse locations`,link:`locations`},{label:`Jury service`,link:`jury`},{label:`News`,link:`news`}]}];trail=[{label:`Home`,link:`home`},{label:`e-Filing`,link:`efile`},{label:`Existing case`}];roles=Ge;docTypes=I;form=this.fb.group({caseInfo:this.fb.group({caseNumber:[`24CV012345`,[Fs.required,Fs.pattern(/^\d{2}[A-Za-z]{2}\d{6}$/)]],role:[`Plaintiff or petitioner`,Fs.required],name:[`Maria Alvarez`,Fs.required],email:[`maria.alvarez@example.com`,[Fs.required,Fs.email]]}),documents:this.fb.group({docType:[``,Fs.required]}),fees:this.fb.group({waiver:[!1],method:[`card`]}),review:this.fb.group({acknowledge:[!1,Fs.requiredTrue],signature:[``,Fs.required]})});caseCtrl=this.form.controls.caseInfo.controls;docCtrl=this.form.controls.documents.controls;reviewCtrl=this.form.controls.review.controls;value=Ha(this.form.valueChanges,{initialValue:this.form.value});step=q(0);files=q([{name:`Motion to Compel Further Responses.pdf`,size:412e3}]);filesError=q(!1);envelope=q(null);caseNumber=ut(()=>(this.value().caseInfo?.caseNumber??``).trim().toUpperCase());foundCase=ut(()=>He[this.caseNumber()]??null);feeLines=ut(()=>{let r=this.value(),t=!!r.fees?.waiver,e=I.find(f=>f.value===r.documents?.docType),c=[];return e?.fee?c.push({code:`GC 70617(a)`,description:t?`${e.label} (waived)`:e.label,amount:t?0:e.fee}):c.push({description:`No court filing fee for this document`,amount:0}),c.push({description:t?`e-Filing service fee (waived)`:`e-Filing service fee`,amount:t?0:Ue}),c});total=ut(()=>this.feeLines().reduce((r,t)=>r+t.amount,0));summary=ut(()=>{let r=this.value(),t=I.find(e=>e.value===r.documents?.docType);return[{term:`Case`,value:this.foundCase()?.title??this.caseNumber()},{term:`Case number`,value:this.caseNumber(),numeric:!0},{term:`Filing as`,value:r.caseInfo?.role??``},{term:`Filer`,value:r.caseInfo?.name??``},{term:`Document type`,value:t?.label??`—`},{term:`Total due`,value:this.total().toLocaleString(`en-US`,{style:`currency`,currency:`USD`}),numeric:!0}]});showError(r){return r.invalid&&(r.touched||r.dirty)}errorFor(r,t){return this.showError(r)?`Enter ${t}.`:``}addFiles(r){let t=r.map(e=>({name:e.name,size:e.size}));this.files.update(e=>[...e.filter(c=>!t.some(f=>f.name===c.name)),...t]),this.filesError.set(!1)}removeFile(r){this.files.update(t=>t.filter(e=>e!==r))}formatSize(r){return r>=1e6?`${(r/1e6).toFixed(1)} MB`:`${Math.round(r/1e3)} KB`}submit(){this.envelope.set(`EF-2026-0930-4471`),Xa(()=>this.doneHeading()?.nativeElement.focus(),{injector:this.injector})}startOver(){this.form.controls.documents.reset(),this.form.controls.review.reset(),this.files.set([]),this.step.set(0),this.envelope.set(null),Xa(()=>this.wizard()?.focusStep(),{injector:this.injector})}hasFiles=()=>{let r=this.files().length>0;return this.filesError.set(!r),r||Xa(()=>this.stepBodies()[1]?.nativeElement.querySelector(`input[type=file]`)?.focus(),{injector:this.injector}),r};static ɵfac=function(t){return new(t||l)};static ɵcmp=Af({type:l,selectors:[[`app-efiling-wizard-template`]],viewQuery:function(t,e){t&1&&Gv(e.wizard,Zi,5)(e.stepBodies,Le,5)(e.doneHeading,Ie,5),t&2&&w_(3)},decls:33,vars:6,consts:[[`doneHeading`,``],[`stepBody`,``],[`slot`,`utility`],[`slot`,`start`,1,`hidden`,`lg:inline`],[1,`inline-flex`,`items-center`,`gap-1`],[`name`,`circle-user`,`size`,`xs`],[`slot`,`masthead`,`title`,`Court Access Portal`,`subtitle`,`Superior Court of California · County of Santa Clara`,`logoSrc`,`scsc-seal.png`,`contained`,``],[`slot`,`nav`,3,`items`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[90rem]`,`flex-col`,`gap-6`,`scsc-pad-page`],[`title`,`File documents in an existing case`,`display`,``,`description`,`e-Filing is open 24 hours a day. Documents received after 11:59 p.m. are filed the next court day.`],[`slot`,`breadcrumb`,3,`items`],[1,`grid`,`items-start`,`gap-6`,`lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`],[`aria-label`,`Filing help`,1,`flex`,`flex-col`,`gap-4`],[`title`,`Before you start`],[1,`flex`,`flex-col`,`gap-2`,`text-sm`,`text-base-content/80`],[1,`flex`,`gap-2`],[`name`,`hash`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`name`,`file-check`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`name`,`credit-card`,`size`,`sm`,1,`mt-0.5`,`shrink-0`,`text-primary`],[`title`,`Need help?`],[1,`text-sm`,`text-base-content/80`],[`scsc-button`,``,`variant`,`neutral`,`outline`,``,`size`,`sm`,`routerLink`,`self-help`,1,`mt-3`],[`slot`,`footer`,`variant`,`mega`,`logoSrc`,`scsc-seal.png`,`backToTop`,``,3,`columns`,`contact`,`legalLinks`],[1,`flex`,`flex-col`,`items-start`,`gap-4`],[1,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`,`rounded-full`,`bg-success/15`,`text-success`],[`name`,`circle-check`,`size`,`lg`],[`tabindex`,`-1`,1,`font-display`,`text-2xl`,`font-semibold`,`text-primary`],[1,`text-base-content/80`],[1,`tnum`],[1,`list-decimal`,`space-y-1`,`pl-5`,`text-sm`,`text-base-content/80`],[1,`flex`,`flex-wrap`,`gap-2`],[`scsc-button`,``,`size`,`sm`,`routerLink`,`filings`],[`variant`,`neutral`,`outline`,``,`size`,`sm`,3,`click`],[3,`ngSubmit`,`formGroup`],[`stepsLabel`,`Filing progress`,`finishLabel`,`Submit filing`,3,`indexChange`,`finish`,`index`],[`label`,`Case`,`heading`,`Which case are you filing in?`,3,`stepControl`],[`formGroupName`,`caseInfo`,1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`label`,`Case number`,`for`,`ef-case`,`hint`,`10 characters, for example 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ef-case`,`autocomplete`,`off`,`formControlName`,`caseNumber`,1,`tnum`,`uppercase`,3,`invalid`],[1,`flex`,`items-start`,`gap-2`,`rounded-field`,`bg-base-200`,`px-3`,`py-2`,`text-sm`],[`label`,`You are filing as`,`for`,`ef-role`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`ef-role`,`formControlName`,`role`,3,`invalid`],[`value`,``],[3,`value`],[1,`grid`,`gap-4`,`sm:grid-cols-2`],[`label`,`Full name`,`for`,`ef-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ef-name`,`autocomplete`,`name`,`formControlName`,`name`,3,`invalid`],[`label`,`Email for the receipt`,`for`,`ef-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ef-email`,`type`,`email`,`autocomplete`,`email`,`formControlName`,`email`,3,`invalid`],[`label`,`Documents`,`heading`,`Upload your documents`,3,`stepControl`,`canAdvance`],[`formGroupName`,`documents`,1,`flex`,`max-w-xl`,`flex-col`,`gap-4`],[`label`,`Document type`,`for`,`ef-doctype`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`ef-doctype`,`formControlName`,`docType`,3,`invalid`],[`label`,`Drop PDF files here or click to browse`,`hint`,`Text-searchable PDF, up to 25 MB per file`,`accept`,`.pdf,application/pdf`,3,`filesSelected`],[1,`divide-y`,`divide-base-300`,`rounded-box`,`border`,`border-base-300`],[`status`,`error`],[`label`,`Fees`,`heading`,`Filing fees`],[`formGroupName`,`fees`,1,`flex`,`max-w-2xl`,`flex-col`,`gap-4`],[3,`fees`],[1,`flex`,`items-start`,`gap-3`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`waiver`,1,`mt-0.5`],[1,`text-sm`],[1,`block`,`font-medium`],[1,`block`,`text-base-content/70`],[`legend`,`Pay with`,3,`inline`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`radio`,`scsc-radio`,``,`value`,`card`,`formControlName`,`method`],[`type`,`radio`,`scsc-radio`,``,`value`,`echeck`,`formControlName`,`method`],[`label`,`Review`,`heading`,`Review and submit`,3,`stepControl`],[`formGroupName`,`review`,1,`flex`,`max-w-2xl`,`flex-col`,`gap-5`],[3,`items`],[1,`mb-2`,`text-sm`,`font-semibold`],[1,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`flex`,`items-center`,`gap-2`],[`preset`,`not-legal-advice`,`learnMoreLink`,`self-help`,`acknowledge`,``,`required`,``,`formControlName`,`acknowledge`,`acknowledgeLabel`,`I understand that court staff can’t give me legal advice, and my documents are true and complete to the best of my knowledge.`,3,`headingLevel`,`acknowledgeError`],[`label`,`Electronic signature`,`for`,`ef-signature`,`hint`,`Type your full name exactly as above`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`ef-signature`,`autocomplete`,`name`,`formControlName`,`signature`,3,`invalid`],[`name`,`folder-open`,`size`,`sm`,1,`mt-0.5`,`text-primary`],[1,`font-medium`],[1,`flex`,`items-center`,`gap-3`,`px-4`,`py-2.5`],[`name`,`file-text`,1,`text-primary`],[1,`min-w-0`,`flex-1`],[1,`block`,`truncate`,`text-sm`,`font-medium`],[1,`block`,`text-xs`,`tnum`,`text-base-content/70`],[`icon`,`trash-2`,`size`,`sm`,3,`click`,`label`],[`name`,`file-text`,`size`,`sm`,1,`text-primary`]],template:function(t,e){if(t&1&&(Ga(0,`scsc-portal-shell`)(1,`scsc-utility-bar`,2)(2,`span`,3),G_(3,` An official website of the Superior Court of California, County of Santa Clara `),Lf(),Ga(4,`span`,4),uc(5,`scsc-icon`,5),G_(6,` Maria Alvarez `),Lf()(),uc(7,`scsc-masthead`,6)(8,`scsc-primary-nav`,7),Ga(9,`div`,8)(10,`scsc-page-header`,9),uc(11,`scsc-breadcrumb`,10),Lf(),Ga(12,`div`,11),JT(13,Be,27,3,`scsc-card`)(14,Oe,63,26,`scsc-card`),Ga(15,`aside`,12)(16,`scsc-card`,13)(17,`ul`,14)(18,`li`,15),uc(19,`scsc-icon`,16),G_(20,` Your case number, from the first page of any filing. `),Lf(),Ga(21,`li`,15),uc(22,`scsc-icon`,17),G_(23,` Each document as its own text-searchable PDF, signed. `),Lf(),Ga(24,`li`,15),uc(25,`scsc-icon`,18),G_(26,` A card or bank account for fees, or your fee waiver order. `),Lf()()(),Ga(27,`scsc-card`,19)(28,`p`,20),G_(29,` The Self-Help Center explains forms and procedures, free, in person or by video. `),Lf(),Ga(30,`a`,21),G_(31,`Get self-help`),Lf()()()()(),uc(32,`scsc-footer`,22),Lf()),t&2){let c;Jb(8),Pv(`items`,e.nav),Jb(3),Pv(`items`,e.trail),Jb(2),t_((c=e.envelope())?13:14,c),Jb(19),Pv(`columns`,e.footerLinks)(`contact`,e.footerContact)(`legalLinks`,e.legalLinks)}},dependencies:[Kue,Bue,$ue,Uue,IA,ez,tN,$z,Hue,que,WA,Vz,Xz,YA,nu,za,QN,sn,$E,mN,jo,NP,YP,$r,pN,XN,Vn,ye,UE,qo,yr,FN,TN,MN,ON,bA,On,zN,Zi,Ir],encapsulation:2})},source:{"efiling-wizard":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators, type AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScscAlert,
  ScscBreadcrumb,
  type ScscBreadcrumbItem,
  ScscButton,
  ScscButtonLink,
  ScscCard,
  ScscCheckbox,
  type ScscDescriptionItem,
  ScscDescriptionList,
  type ScscFeeLine,
  ScscFeeTable,
  ScscFieldset,
  ScscFileUpload,
  ScscFooter,
  type ScscFooterContact,
  ScscFormField,
  ScscIcon,
  ScscIconButton,
  ScscInput,
  type ScscLegalLink,
  ScscLegalNotice,
  ScscMasthead,
  ScscPageHeader,
  ScscPortalShell,
  ScscPrimaryNav,
  type ScscPrimaryNavItem,
  ScscRadio,
  ScscSelect,
  ScscUtilityBar,
  ScscWizard,
  ScscWizardStep,
} from '@scscourt/design';

interface UploadedFile {
  name: string;
  size: number;
}

type DocType = 'motion' | 'opposition' | 'declaration' | 'proof';

const DOC_TYPES: { value: DocType; label: string; fee: number }[] = [
  { value: 'motion', label: 'Motion requiring a hearing', fee: 60 },
  { value: 'opposition', label: 'Opposition or reply', fee: 0 },
  { value: 'declaration', label: 'Declaration', fee: 0 },
  { value: 'proof', label: 'Proof of service', fee: 0 },
];

const ROLES = [
  'Plaintiff or petitioner',
  'Defendant or respondent',
  'Attorney for a party',
  'Other interested person',
];

/** Cases the lookup knows, keyed by case number. */
const KNOWN_CASES: Record<string, { title: string; department: string }> = {
  '24CV012345': { title: 'Alvarez v. Northgate Property Management', department: 'Dept. 10' },
  '24CV013002': { title: 'Nguyen v. Almaden Ridge Apartments', department: 'Dept. 3' },
};

const EFILING_FEE = 4.5;

@Component({
  selector: 'app-efiling-wizard-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ScscAlert,
    ScscBreadcrumb,
    ScscButton,
    ScscButtonLink,
    ScscCard,
    ScscCheckbox,
    ScscDescriptionList,
    ScscFeeTable,
    ScscFieldset,
    ScscFileUpload,
    ScscFooter,
    ScscFormField,
    ScscIcon,
    ScscIconButton,
    ScscInput,
    ScscLegalNotice,
    ScscMasthead,
    ScscPageHeader,
    ScscPortalShell,
    ScscPrimaryNav,
    ScscRadio,
    ScscSelect,
    ScscUtilityBar,
    ScscWizard,
    ScscWizardStep,
  ],
  template: \`
    <scsc-portal-shell>
      <scsc-utility-bar slot="utility">
        <span slot="start" class="hidden lg:inline">
          An official website of the Superior Court of California, County of Santa Clara
        </span>
        <span class="inline-flex items-center gap-1">
          <scsc-icon name="circle-user" size="xs" />
          Maria Alvarez
        </span>
      </scsc-utility-bar>
      <scsc-masthead
        slot="masthead"
        title="Court Access Portal"
        subtitle="Superior Court of California \xB7 County of Santa Clara"
        logoSrc="scsc-seal.png"
        contained
      />
      <scsc-primary-nav slot="nav" [items]="nav" />

      <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-6 scsc-pad-page">
        <scsc-page-header
          title="File documents in an existing case"
          display
          description="e-Filing is open 24 hours a day. Documents received after 11:59 p.m. are filed the next court day."
        >
          <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
        </scsc-page-header>

        <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          @if (envelope(); as env) {
            <scsc-card>
              <div class="flex flex-col items-start gap-4">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success"
                >
                  <scsc-icon name="circle-check" size="lg" />
                </span>
                <h2
                  #doneHeading
                  tabindex="-1"
                  class="font-display text-2xl font-semibold text-primary"
                >
                  Your filing was submitted
                </h2>
                <p class="text-base-content/80">
                  Envelope <strong class="tnum">{{ env }}</strong> is in the clerk\u2019s review queue
                  for case <span class="tnum">{{ caseNumber() }}</span
                  >. We sent a receipt to {{ form.controls.caseInfo.controls.email.value }}.
                </p>
                <ol class="list-decimal space-y-1 pl-5 text-sm text-base-content/80">
                  <li>The clerk reviews your filing, usually within two court days.</li>
                  <li>You get an email when it is accepted, with the conformed copy attached.</li>
                  <li>
                    If it is rejected, the email says why and how to fix it. You are not charged.
                  </li>
                </ol>
                <div class="flex flex-wrap gap-2">
                  <a scsc-button size="sm" routerLink="filings">Track my filings</a>
                  <scsc-button variant="neutral" outline size="sm" (click)="startOver()">
                    File another document
                  </scsc-button>
                </div>
              </div>
            </scsc-card>
          } @else {
            <scsc-card>
              <form [formGroup]="form" (ngSubmit)="$event.preventDefault()">
                <scsc-wizard
                  [(index)]="step"
                  stepsLabel="Filing progress"
                  finishLabel="Submit filing"
                  (finish)="submit()"
                >
                  <scsc-wizard-step
                    label="Case"
                    heading="Which case are you filing in?"
                    [stepControl]="form.controls.caseInfo"
                  >
                    <div #stepBody formGroupName="caseInfo" class="flex max-w-xl flex-col gap-4">
                      <scsc-form-field
                        label="Case number"
                        for="ef-case"
                        hint="10 characters, for example 24CV012345"
                        required
                        [error]="errorFor(caseCtrl.caseNumber, 'a case number like 24CV012345')"
                      >
                        <input
                          scsc-input
                          id="ef-case"
                          class="tnum uppercase"
                          autocomplete="off"
                          formControlName="caseNumber"
                          [invalid]="showError(caseCtrl.caseNumber)"
                        />
                      </scsc-form-field>
                      @if (foundCase(); as c) {
                        <p
                          class="flex items-start gap-2 rounded-field bg-base-200 px-3 py-2 text-sm"
                        >
                          <scsc-icon name="folder-open" size="sm" class="mt-0.5 text-primary" />
                          <span
                            ><span class="font-medium">{{ c.title }}</span> \xB7
                            {{ c.department }}</span
                          >
                        </p>
                      }
                      <scsc-form-field
                        label="You are filing as"
                        for="ef-role"
                        required
                        [error]="errorFor(caseCtrl.role, 'your role in the case')"
                      >
                        <select
                          scsc-select
                          id="ef-role"
                          formControlName="role"
                          [invalid]="showError(caseCtrl.role)"
                        >
                          <option value="">Choose one</option>
                          @for (r of roles; track r) {
                            <option [value]="r">{{ r }}</option>
                          }
                        </select>
                      </scsc-form-field>
                      <div class="grid gap-4 sm:grid-cols-2">
                        <scsc-form-field
                          label="Full name"
                          for="ef-name"
                          required
                          [error]="errorFor(caseCtrl.name, 'your full name')"
                        >
                          <input
                            scsc-input
                            id="ef-name"
                            autocomplete="name"
                            formControlName="name"
                            [invalid]="showError(caseCtrl.name)"
                          />
                        </scsc-form-field>
                        <scsc-form-field
                          label="Email for the receipt"
                          for="ef-email"
                          required
                          [error]="
                            errorFor(caseCtrl.email, 'an email address like name@example.com')
                          "
                        >
                          <input
                            scsc-input
                            id="ef-email"
                            type="email"
                            autocomplete="email"
                            formControlName="email"
                            [invalid]="showError(caseCtrl.email)"
                          />
                        </scsc-form-field>
                      </div>
                    </div>
                  </scsc-wizard-step>

                  <scsc-wizard-step
                    label="Documents"
                    heading="Upload your documents"
                    [stepControl]="form.controls.documents"
                    [canAdvance]="hasFiles"
                  >
                    <div #stepBody formGroupName="documents" class="flex max-w-xl flex-col gap-4">
                      <scsc-form-field
                        label="Document type"
                        for="ef-doctype"
                        required
                        [error]="errorFor(docCtrl.docType, 'the type of document')"
                      >
                        <select
                          scsc-select
                          id="ef-doctype"
                          formControlName="docType"
                          [invalid]="showError(docCtrl.docType)"
                        >
                          <option value="">Choose one</option>
                          @for (d of docTypes; track d.value) {
                            <option [value]="d.value">{{ d.label }}</option>
                          }
                        </select>
                      </scsc-form-field>
                      <scsc-file-upload
                        label="Drop PDF files here or click to browse"
                        hint="Text-searchable PDF, up to 25 MB per file"
                        accept=".pdf,application/pdf"
                        (filesSelected)="addFiles($event)"
                      />
                      @if (files().length) {
                        <ul class="divide-y divide-base-300 rounded-box border border-base-300">
                          @for (f of files(); track f.name) {
                            <li class="flex items-center gap-3 px-4 py-2.5">
                              <scsc-icon name="file-text" class="text-primary" />
                              <span class="min-w-0 flex-1">
                                <span class="block truncate text-sm font-medium">{{ f.name }}</span>
                                <span class="block text-xs tnum text-base-content/70">{{
                                  formatSize(f.size)
                                }}</span>
                              </span>
                              <scsc-icon-button
                                icon="trash-2"
                                size="sm"
                                [label]="'Remove ' + f.name"
                                (click)="removeFile(f)"
                              />
                            </li>
                          }
                        </ul>
                      }
                      @if (filesError()) {
                        <scsc-alert status="error">Add at least one PDF to file.</scsc-alert>
                      }
                    </div>
                  </scsc-wizard-step>

                  <scsc-wizard-step label="Fees" heading="Filing fees">
                    <div #stepBody formGroupName="fees" class="flex max-w-2xl flex-col gap-4">
                      <scsc-fee-table [fees]="feeLines()" />
                      <label class="flex items-start gap-3">
                        <input
                          type="checkbox"
                          scsc-checkbox
                          class="mt-0.5"
                          formControlName="waiver"
                        />
                        <span class="text-sm">
                          <span class="block font-medium">I have a fee waiver in this case</span>
                          <span class="block text-base-content/70"
                            >An order on form FW-003 waives court fees for the rest of the
                            case.</span
                          >
                        </span>
                      </label>
                      <scsc-fieldset legend="Pay with" [inline]="true">
                        <label class="flex items-center gap-2 text-sm">
                          <input type="radio" scsc-radio value="card" formControlName="method" />
                          Credit or debit card
                        </label>
                        <label class="flex items-center gap-2 text-sm">
                          <input type="radio" scsc-radio value="echeck" formControlName="method" />
                          Bank account (e-check)
                        </label>
                      </scsc-fieldset>
                    </div>
                  </scsc-wizard-step>

                  <scsc-wizard-step
                    label="Review"
                    heading="Review and submit"
                    [stepControl]="form.controls.review"
                  >
                    <div #stepBody formGroupName="review" class="flex max-w-2xl flex-col gap-5">
                      <scsc-description-list [items]="summary()" />
                      <div>
                        <h3 class="mb-2 text-sm font-semibold">Documents</h3>
                        <ul class="flex flex-col gap-1 text-sm">
                          @for (f of files(); track f.name) {
                            <li class="flex items-center gap-2">
                              <scsc-icon name="file-text" size="sm" class="text-primary" />
                              {{ f.name }}
                            </li>
                          }
                        </ul>
                      </div>

                      <scsc-legal-notice
                        preset="not-legal-advice"
                        [headingLevel]="3"
                        learnMoreLink="self-help"
                        acknowledge
                        required
                        formControlName="acknowledge"
                        acknowledgeLabel="I understand that court staff can\u2019t give me legal advice, and my documents are true and complete to the best of my knowledge."
                        [acknowledgeError]="
                          showError(reviewCtrl.acknowledge)
                            ? 'Confirm that you have read the notice to submit.'
                            : ''
                        "
                      />

                      <scsc-form-field
                        label="Electronic signature"
                        for="ef-signature"
                        hint="Type your full name exactly as above"
                        required
                        [error]="errorFor(reviewCtrl.signature, 'your full name as your signature')"
                      >
                        <input
                          scsc-input
                          id="ef-signature"
                          autocomplete="name"
                          formControlName="signature"
                          [invalid]="showError(reviewCtrl.signature)"
                        />
                      </scsc-form-field>
                    </div>
                  </scsc-wizard-step>
                </scsc-wizard>
              </form>
            </scsc-card>
          }

          <aside class="flex flex-col gap-4" aria-label="Filing help">
            <scsc-card title="Before you start">
              <ul class="flex flex-col gap-2 text-sm text-base-content/80">
                <li class="flex gap-2">
                  <scsc-icon name="hash" size="sm" class="mt-0.5 shrink-0 text-primary" />
                  Your case number, from the first page of any filing.
                </li>
                <li class="flex gap-2">
                  <scsc-icon name="file-check" size="sm" class="mt-0.5 shrink-0 text-primary" />
                  Each document as its own text-searchable PDF, signed.
                </li>
                <li class="flex gap-2">
                  <scsc-icon name="credit-card" size="sm" class="mt-0.5 shrink-0 text-primary" />
                  A card or bank account for fees, or your fee waiver order.
                </li>
              </ul>
            </scsc-card>
            <scsc-card title="Need help?">
              <p class="text-sm text-base-content/80">
                The Self-Help Center explains forms and procedures, free, in person or by video.
              </p>
              <a scsc-button variant="neutral" outline size="sm" routerLink="self-help" class="mt-3"
                >Get self-help</a
              >
            </scsc-card>
          </aside>
        </div>
      </div>

      <scsc-footer
        slot="footer"
        variant="mega"
        logoSrc="scsc-seal.png"
        [columns]="footerLinks"
        [contact]="footerContact"
        [legalLinks]="legalLinks"
        backToTop
      />
    </scsc-portal-shell>
  \`,
})
export class EfilingWizardTemplate {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly injector = inject(Injector);
  private readonly wizard = viewChild(ScscWizard);
  private readonly stepBodies = viewChildren<ElementRef<HTMLElement>>('stepBody');
  private readonly doneHeading = viewChild<ElementRef<HTMLElement>>('doneHeading');

  protected readonly nav: ScscPrimaryNavItem[] = [
    { label: 'Home', icon: 'house', link: 'home' },
    { label: 'Case search', icon: 'search', link: 'search' },
    { label: 'Calendar', icon: 'calendar-days', link: 'calendar' },
    { label: 'e-Filing', icon: 'upload', link: '.', exact: true },
    { label: 'Fees', icon: 'credit-card', link: 'fees' },
    { label: 'Jury', icon: 'users', link: 'jury' },
    { label: 'Self-help', icon: 'life-buoy', link: 'self-help' },
  ];
  protected readonly legalLinks: ScscLegalLink[] = [
    { id: 'privacy', label: 'Privacy', link: 'privacy' },
    { id: 'terms', label: 'Terms of use', link: 'terms' },
    { id: 'accessibility', label: 'Accessibility', link: 'accessibility' },
    { id: 'language-access', label: 'Language access', link: 'language-access' },
  ];

  protected readonly footerContact: ScscFooterContact = {
    name: 'Downtown Superior Court',
    address: ['191 N. First Street', 'San Jos\xE9, CA 95113'],
    phone: '(408) 882-2100',
    hours: ['Clerk\u2019s Office: Mon\u2013Fri, 8:30 a.m.\u20134:00 p.m.'],
  };
  protected readonly footerLinks = [
    {
      heading: 'Online services',
      links: [
        { label: 'Case search', link: 'search' },
        { label: 'Calendar & rulings', link: 'calendar' },
        { label: 'e-Filing', link: 'efile' },
        { label: 'Pay fees', link: 'fees' },
      ],
    },
    {
      heading: 'Get help',
      links: [
        { label: 'Self-help center', link: 'self-help' },
        { label: 'Language access', link: 'language' },
        { label: 'Disability accommodations', link: 'accommodations' },
        { label: 'Contact the court', link: 'help' },
      ],
    },
    {
      heading: 'About the court',
      links: [
        { label: 'Courthouse locations', link: 'locations' },
        { label: 'Jury service', link: 'jury' },
        { label: 'News', link: 'news' },
      ],
    },
  ];
  protected readonly trail: ScscBreadcrumbItem[] = [
    { label: 'Home', link: 'home' },
    { label: 'e-Filing', link: 'efile' },
    { label: 'Existing case' },
  ];
  protected readonly roles = ROLES;
  protected readonly docTypes = DOC_TYPES;

  protected readonly form = this.fb.group({
    caseInfo: this.fb.group({
      caseNumber: [
        '24CV012345',
        [Validators.required, Validators.pattern(/^\\d{2}[A-Za-z]{2}\\d{6}$/)],
      ],
      role: ['Plaintiff or petitioner', Validators.required],
      name: ['Maria Alvarez', Validators.required],
      email: ['maria.alvarez@example.com', [Validators.required, Validators.email]],
    }),
    documents: this.fb.group({ docType: ['' as DocType | '', Validators.required] }),
    fees: this.fb.group({ waiver: [false], method: ['card' as 'card' | 'echeck'] }),
    review: this.fb.group({
      acknowledge: [false, Validators.requiredTrue],
      signature: ['', Validators.required],
    }),
  });
  protected readonly caseCtrl = this.form.controls.caseInfo.controls;
  protected readonly docCtrl = this.form.controls.documents.controls;
  protected readonly reviewCtrl = this.form.controls.review.controls;

  private readonly value = toSignal(this.form.valueChanges, { initialValue: this.form.value });

  protected readonly step = signal(0);
  protected readonly files = signal<UploadedFile[]>([
    { name: 'Motion to Compel Further Responses.pdf', size: 412_000 },
  ]);
  protected readonly filesError = signal(false);
  protected readonly envelope = signal<string | null>(null);

  protected readonly caseNumber = computed(() =>
    (this.value().caseInfo?.caseNumber ?? '').trim().toUpperCase(),
  );
  protected readonly foundCase = computed(() => KNOWN_CASES[this.caseNumber()] ?? null);

  protected readonly feeLines = computed<ScscFeeLine[]>(() => {
    const v = this.value();
    const waived = !!v.fees?.waiver;
    const doc = DOC_TYPES.find((d) => d.value === v.documents?.docType);
    const lines: ScscFeeLine[] = [];
    if (doc?.fee) {
      lines.push({
        code: 'GC 70617(a)',
        description: waived ? \`\${doc.label} (waived)\` : doc.label,
        amount: waived ? 0 : doc.fee,
      });
    } else {
      lines.push({ description: 'No court filing fee for this document', amount: 0 });
    }
    lines.push({
      description: waived ? 'e-Filing service fee (waived)' : 'e-Filing service fee',
      amount: waived ? 0 : EFILING_FEE,
    });
    return lines;
  });
  private readonly total = computed(() => this.feeLines().reduce((s, f) => s + f.amount, 0));

  protected readonly summary = computed<ScscDescriptionItem[]>(() => {
    const v = this.value();
    const doc = DOC_TYPES.find((d) => d.value === v.documents?.docType);
    return [
      { term: 'Case', value: this.foundCase()?.title ?? this.caseNumber() },
      { term: 'Case number', value: this.caseNumber(), numeric: true },
      { term: 'Filing as', value: v.caseInfo?.role ?? '' },
      { term: 'Filer', value: v.caseInfo?.name ?? '' },
      { term: 'Document type', value: doc?.label ?? '\u2014' },
      {
        term: 'Total due',
        value: this.total().toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        numeric: true,
      },
    ];
  });

  protected showError(c: AbstractControl): boolean {
    return c.invalid && (c.touched || c.dirty);
  }

  protected errorFor(c: AbstractControl, what: string): string {
    return this.showError(c) ? \`Enter \${what}.\` : '';
  }

  protected addFiles(picked: File[]): void {
    const pdfs = picked.map((f) => ({ name: f.name, size: f.size }));
    this.files.update((all) => [
      ...all.filter((f) => !pdfs.some((p) => p.name === f.name)),
      ...pdfs,
    ]);
    this.filesError.set(false);
  }

  protected removeFile(file: UploadedFile): void {
    this.files.update((all) => all.filter((f) => f !== file));
  }

  protected formatSize(bytes: number): string {
    return bytes >= 1_000_000
      ? \`\${(bytes / 1_000_000).toFixed(1)} MB\`
      : \`\${Math.round(bytes / 1000)} KB\`;
  }

  /** The wizard only emits finish once every step's form group is valid. */
  protected submit(): void {
    this.envelope.set('EF-2026-0930-4471');
    afterNextRender(() => this.doneHeading()?.nativeElement.focus(), { injector: this.injector });
  }

  protected startOver(): void {
    this.form.controls.documents.reset();
    this.form.controls.review.reset();
    this.files.set([]);
    this.step.set(0);
    this.envelope.set(null);
    afterNextRender(() => this.wizard()?.focusStep(), { injector: this.injector });
  }

  /** The uploads live outside the form: block Next until there is one, and focus the picker. */
  protected readonly hasFiles = (): boolean => {
    const ok = this.files().length > 0;
    this.filesError.set(!ok);
    if (!ok) {
      afterNextRender(
        () =>
          this.stepBodies()[1]
            ?.nativeElement.querySelector<HTMLElement>('input[type=file]')
            ?.focus(),
        { injector: this.injector },
      );
    }
    return ok;
  };
}
`,html:`<scsc-portal-shell>
  <scsc-utility-bar slot="utility">
    <span slot="start" class="hidden lg:inline">
      An official website of the Superior Court of California, County of Santa Clara
    </span>
    <span class="inline-flex items-center gap-1">
      <scsc-icon name="circle-user" size="xs" />
      Maria Alvarez
    </span>
  </scsc-utility-bar>
  <scsc-masthead
    slot="masthead"
    title="Court Access Portal"
    subtitle="Superior Court of California \xB7 County of Santa Clara"
    logoSrc="scsc-seal.png"
    contained
  />
  <scsc-primary-nav slot="nav" [items]="nav" />

  <div class="mx-auto flex w-full max-w-[90rem] flex-col gap-6 scsc-pad-page">
    <scsc-page-header
      title="File documents in an existing case"
      display
      description="e-Filing is open 24 hours a day. Documents received after 11:59 p.m. are filed the next court day."
    >
      <scsc-breadcrumb slot="breadcrumb" [items]="trail" />
    </scsc-page-header>

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      @if (envelope(); as env) {
        <scsc-card>
          <div class="flex flex-col items-start gap-4">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success"
            >
              <scsc-icon name="circle-check" size="lg" />
            </span>
            <h2
              #doneHeading
              tabindex="-1"
              class="font-display text-2xl font-semibold text-primary"
            >
              Your filing was submitted
            </h2>
            <p class="text-base-content/80">
              Envelope <strong class="tnum">{{ env }}</strong> is in the clerk\u2019s review queue
              for case <span class="tnum">{{ caseNumber() }}</span
              >. We sent a receipt to {{ form.controls.caseInfo.controls.email.value }}.
            </p>
            <ol class="list-decimal space-y-1 pl-5 text-sm text-base-content/80">
              <li>The clerk reviews your filing, usually within two court days.</li>
              <li>You get an email when it is accepted, with the conformed copy attached.</li>
              <li>
                If it is rejected, the email says why and how to fix it. You are not charged.
              </li>
            </ol>
            <div class="flex flex-wrap gap-2">
              <a scsc-button size="sm" routerLink="filings">Track my filings</a>
              <scsc-button variant="neutral" outline size="sm" (click)="startOver()">
                File another document
              </scsc-button>
            </div>
          </div>
        </scsc-card>
      } @else {
        <scsc-card>
          <form [formGroup]="form" (ngSubmit)="$event.preventDefault()">
            <scsc-wizard
              [(index)]="step"
              stepsLabel="Filing progress"
              finishLabel="Submit filing"
              (finish)="submit()"
            >
              <scsc-wizard-step
                label="Case"
                heading="Which case are you filing in?"
                [stepControl]="form.controls.caseInfo"
              >
                <div #stepBody formGroupName="caseInfo" class="flex max-w-xl flex-col gap-4">
                  <scsc-form-field
                    label="Case number"
                    for="ef-case"
                    hint="10 characters, for example 24CV012345"
                    required
                    [error]="errorFor(caseCtrl.caseNumber, 'a case number like 24CV012345')"
                  >
                    <input
                      scsc-input
                      id="ef-case"
                      class="tnum uppercase"
                      autocomplete="off"
                      formControlName="caseNumber"
                      [invalid]="showError(caseCtrl.caseNumber)"
                    />
                  </scsc-form-field>
                  @if (foundCase(); as c) {
                    <p
                      class="flex items-start gap-2 rounded-field bg-base-200 px-3 py-2 text-sm"
                    >
                      <scsc-icon name="folder-open" size="sm" class="mt-0.5 text-primary" />
                      <span
                        ><span class="font-medium">{{ c.title }}</span> \xB7
                        {{ c.department }}</span
                      >
                    </p>
                  }
                  <scsc-form-field
                    label="You are filing as"
                    for="ef-role"
                    required
                    [error]="errorFor(caseCtrl.role, 'your role in the case')"
                  >
                    <select
                      scsc-select
                      id="ef-role"
                      formControlName="role"
                      [invalid]="showError(caseCtrl.role)"
                    >
                      <option value="">Choose one</option>
                      @for (r of roles; track r) {
                        <option [value]="r">{{ r }}</option>
                      }
                    </select>
                  </scsc-form-field>
                  <div class="grid gap-4 sm:grid-cols-2">
                    <scsc-form-field
                      label="Full name"
                      for="ef-name"
                      required
                      [error]="errorFor(caseCtrl.name, 'your full name')"
                    >
                      <input
                        scsc-input
                        id="ef-name"
                        autocomplete="name"
                        formControlName="name"
                        [invalid]="showError(caseCtrl.name)"
                      />
                    </scsc-form-field>
                    <scsc-form-field
                      label="Email for the receipt"
                      for="ef-email"
                      required
                      [error]="
                        errorFor(caseCtrl.email, 'an email address like name@example.com')
                      "
                    >
                      <input
                        scsc-input
                        id="ef-email"
                        type="email"
                        autocomplete="email"
                        formControlName="email"
                        [invalid]="showError(caseCtrl.email)"
                      />
                    </scsc-form-field>
                  </div>
                </div>
              </scsc-wizard-step>

              <scsc-wizard-step
                label="Documents"
                heading="Upload your documents"
                [stepControl]="form.controls.documents"
                [canAdvance]="hasFiles"
              >
                <div #stepBody formGroupName="documents" class="flex max-w-xl flex-col gap-4">
                  <scsc-form-field
                    label="Document type"
                    for="ef-doctype"
                    required
                    [error]="errorFor(docCtrl.docType, 'the type of document')"
                  >
                    <select
                      scsc-select
                      id="ef-doctype"
                      formControlName="docType"
                      [invalid]="showError(docCtrl.docType)"
                    >
                      <option value="">Choose one</option>
                      @for (d of docTypes; track d.value) {
                        <option [value]="d.value">{{ d.label }}</option>
                      }
                    </select>
                  </scsc-form-field>
                  <scsc-file-upload
                    label="Drop PDF files here or click to browse"
                    hint="Text-searchable PDF, up to 25 MB per file"
                    accept=".pdf,application/pdf"
                    (filesSelected)="addFiles($event)"
                  />
                  @if (files().length) {
                    <ul class="divide-y divide-base-300 rounded-box border border-base-300">
                      @for (f of files(); track f.name) {
                        <li class="flex items-center gap-3 px-4 py-2.5">
                          <scsc-icon name="file-text" class="text-primary" />
                          <span class="min-w-0 flex-1">
                            <span class="block truncate text-sm font-medium">{{ f.name }}</span>
                            <span class="block text-xs tnum text-base-content/70">{{
                              formatSize(f.size)
                            }}</span>
                          </span>
                          <scsc-icon-button
                            icon="trash-2"
                            size="sm"
                            [label]="'Remove ' + f.name"
                            (click)="removeFile(f)"
                          />
                        </li>
                      }
                    </ul>
                  }
                  @if (filesError()) {
                    <scsc-alert status="error">Add at least one PDF to file.</scsc-alert>
                  }
                </div>
              </scsc-wizard-step>

              <scsc-wizard-step label="Fees" heading="Filing fees">
                <div #stepBody formGroupName="fees" class="flex max-w-2xl flex-col gap-4">
                  <scsc-fee-table [fees]="feeLines()" />
                  <label class="flex items-start gap-3">
                    <input
                      type="checkbox"
                      scsc-checkbox
                      class="mt-0.5"
                      formControlName="waiver"
                    />
                    <span class="text-sm">
                      <span class="block font-medium">I have a fee waiver in this case</span>
                      <span class="block text-base-content/70"
                        >An order on form FW-003 waives court fees for the rest of the
                        case.</span
                      >
                    </span>
                  </label>
                  <scsc-fieldset legend="Pay with" [inline]="true">
                    <label class="flex items-center gap-2 text-sm">
                      <input type="radio" scsc-radio value="card" formControlName="method" />
                      Credit or debit card
                    </label>
                    <label class="flex items-center gap-2 text-sm">
                      <input type="radio" scsc-radio value="echeck" formControlName="method" />
                      Bank account (e-check)
                    </label>
                  </scsc-fieldset>
                </div>
              </scsc-wizard-step>

              <scsc-wizard-step
                label="Review"
                heading="Review and submit"
                [stepControl]="form.controls.review"
              >
                <div #stepBody formGroupName="review" class="flex max-w-2xl flex-col gap-5">
                  <scsc-description-list [items]="summary()" />
                  <div>
                    <h3 class="mb-2 text-sm font-semibold">Documents</h3>
                    <ul class="flex flex-col gap-1 text-sm">
                      @for (f of files(); track f.name) {
                        <li class="flex items-center gap-2">
                          <scsc-icon name="file-text" size="sm" class="text-primary" />
                          {{ f.name }}
                        </li>
                      }
                    </ul>
                  </div>

                  <scsc-legal-notice
                    preset="not-legal-advice"
                    [headingLevel]="3"
                    learnMoreLink="self-help"
                    acknowledge
                    required
                    formControlName="acknowledge"
                    acknowledgeLabel="I understand that court staff can\u2019t give me legal advice, and my documents are true and complete to the best of my knowledge."
                    [acknowledgeError]="
                      showError(reviewCtrl.acknowledge)
                        ? 'Confirm that you have read the notice to submit.'
                        : ''
                    "
                  />

                  <scsc-form-field
                    label="Electronic signature"
                    for="ef-signature"
                    hint="Type your full name exactly as above"
                    required
                    [error]="errorFor(reviewCtrl.signature, 'your full name as your signature')"
                  >
                    <input
                      scsc-input
                      id="ef-signature"
                      autocomplete="name"
                      formControlName="signature"
                      [invalid]="showError(reviewCtrl.signature)"
                    />
                  </scsc-form-field>
                </div>
              </scsc-wizard-step>
            </scsc-wizard>
          </form>
        </scsc-card>
      }

      <aside class="flex flex-col gap-4" aria-label="Filing help">
        <scsc-card title="Before you start">
          <ul class="flex flex-col gap-2 text-sm text-base-content/80">
            <li class="flex gap-2">
              <scsc-icon name="hash" size="sm" class="mt-0.5 shrink-0 text-primary" />
              Your case number, from the first page of any filing.
            </li>
            <li class="flex gap-2">
              <scsc-icon name="file-check" size="sm" class="mt-0.5 shrink-0 text-primary" />
              Each document as its own text-searchable PDF, signed.
            </li>
            <li class="flex gap-2">
              <scsc-icon name="credit-card" size="sm" class="mt-0.5 shrink-0 text-primary" />
              A card or bank account for fees, or your fee waiver order.
            </li>
          </ul>
        </scsc-card>
        <scsc-card title="Need help?">
          <p class="text-sm text-base-content/80">
            The Self-Help Center explains forms and procedures, free, in person or by video.
          </p>
          <a scsc-button variant="neutral" outline size="sm" routerLink="self-help" class="mt-3"
            >Get self-help</a
          >
        </scsc-card>
      </aside>
    </div>
  </div>

  <scsc-footer
    slot="footer"
    variant="mega"
    logoSrc="scsc-seal.png"
    [columns]="footerLinks"
    [contact]="footerContact"
    [legalLinks]="legalLinks"
    backToTop
  />
</scsc-portal-shell>
`}}[`efiling-wizard`],layout:`page`,height:`56rem`}];export{nt as DEMOS};