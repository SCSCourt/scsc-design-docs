import{Ai as vA,At as NP,Dn as Wue,E as Bue,Es as sD,Go as g,Gs as zS,Hs as y_,In as Xz,Ln as YA,Lo as d_,Ma as JT,Ms as uc,Na as Jb,Nr as jo,Ps as ut,Ss as rD,Wn as Zi,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,c as $r,cs as lc,ct as Ir,dn as UR,ds as nD,et as Ha,ha as Eg,hr as fz,ii as qo,ka as Ig,ks as t_,kt as NE,l as $ue,lr as ez,mn as Uue,nt as IA,oi as que,pi as sn,ra as Af,si as qz,ta as $f,tt as Hue,va as G_,vn as Vn,vt as Kue,wa as HS,xs as q,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";function we(o,i){o&1&&(Ga(0,`p`,8),G_(1,`Appearance confirmed.`),Lf())}var Z=class o{step=q(0);confirmed=q(!1);static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-wizard-controlled-demo`]],decls:18,vars:3,consts:[[1,`mb-4`,`flex`,`items-center`,`gap-2`],[`size`,`sm`,`variant`,`ghost`,3,`click`],[1,`ml-auto`,`text-sm`,`text-base-content/70`],[`finishLabel`,`Confirm appearance`,3,`indexChange`,`finish`,`index`],[`label`,`Summons`],[1,`text-sm`],[`label`,`Availability`],[`label`,`Review`],[1,`mt-3`,`text-sm`,`text-success`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-button`,1),lc(`click`,function(){return a.step.set(0)}),G_(2,`Restart`),Lf(),Ga(3,`scsc-button`,1),lc(`click`,function(){return a.step.set(2)}),G_(4,`Jump to review`),Lf(),Ga(5,`p`,2),G_(6),Lf()(),Ga(7,`scsc-wizard`,3),sD(`indexChange`,function(d){return Y_(a.step,d)||(a.step=d),d}),lc(`finish`,function(){return a.confirmed.set(!0)}),Ga(8,`scsc-wizard-step`,4)(9,`p`,5),G_(10,` You were summoned for jury service on Oct 20, 2026. Badge 4471, Group C. `),Lf()(),Ga(11,`scsc-wizard-step`,6)(12,`p`,5),G_(13,` Confirm you can serve the full week, or request a one-time postponement. `),Lf()(),Ga(14,`scsc-wizard-step`,7)(15,`p`,5),G_(16,`Report to the Hall of Justice, 2nd floor, at 8:00 AM.`),Lf()()(),JT(17,we,2,0,`p`,8)),e&2&&(Jb(6),$f(`Step `,a.step()+1,` of 3`),Jb(),iD(`index`,a.step),Jb(10),t_(a.confirmed()?17:-1))},dependencies:[sn,Zi,Ir],encapsulation:2})};var K=class o{step=q(0);badge=q(`4471`);reason=q(``);status=q(``);save(){this.status.set(`Draft saved. You can finish it from Jury Services within 7 days.`)}discard(){this.badge.set(``),this.reason.set(``),this.step.set(0),this.status.set(`Your answers were discarded.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-wizard-draft-demo`]],decls:15,vars:6,consts:[[`stepsLabel`,`Juror excuse request`,`finishLabel`,`Send request`,`showCancel`,``,`showSaveDraft`,``,`cancelLabel`,`Discard`,3,`indexChange`,`saveDraft`,`cancelled`,`finish`,`index`],[`label`,`Juror`,`heading`,`Your juror details`],[`label`,`Juror badge number`,`for`,`draft-badge`,`hint`,`On your summons`],[`scsc-input`,``,`id`,`draft-badge`,1,`tnum`,3,`input`,`value`],[`label`,`Reason`,`heading`,`Why can’t you serve?`],[`label`,`Reason`,`for`,`draft-reason`,`hint`,`Say which dates are affected`],[`scsc-textarea`,``,`id`,`draft-reason`,`rows`,`4`,3,`input`,`value`],[`label`,`Send`,`heading`,`Send your request`],[1,`text-sm`],[1,`tnum`],[`role`,`status`,`tone`,`muted`,`size`,`sm`,1,`mt-3`,`block`]],template:function(e,a){e&1&&(Ga(0,`scsc-wizard`,0),sD(`indexChange`,function(d){return Y_(a.step,d)||(a.step=d),d}),lc(`saveDraft`,function(){return a.save()})(`cancelled`,function(){return a.discard()})(`finish`,function(){return a.status.set(`Request sent. Jury Services replies by email within 3 business days.`)}),Ga(1,`scsc-wizard-step`,1)(2,`scsc-form-field`,2)(3,`input`,3),lc(`input`,function(d){return a.badge.set(d.target.value)}),Lf()()(),Ga(4,`scsc-wizard-step`,4)(5,`scsc-form-field`,5)(6,`textarea`,6),lc(`input`,function(d){return a.reason.set(d.target.value)}),Lf()()(),Ga(7,`scsc-wizard-step`,7)(8,`p`,8),G_(9,` Badge `),Ga(10,`span`,9),G_(11),Lf(),G_(12),Lf()()(),Ga(13,`scsc-text`,10),G_(14),Lf()),e&2&&(iD(`index`,a.step),Jb(3),Pv(`value`,a.badge()),Jb(3),Pv(`value`,a.reason()),Jb(5),nD(a.badge()||`—`),Jb(),$f(`: `,a.reason()||`no reason given`,` `),Jb(2),nD(a.status()))},dependencies:[Vn,qo,NE,vA,Zi,Ir],encapsulation:2})};var ve=(o,i)=>i.label;function ze(o,i){if(o&1&&(Ga(0,`option`,7),G_(1),Lf()),o&2){let e=i.$implicit,a=y_();Pv(`value`,e.label)(`selected`,e.label===a.docType()),Jb(),nD(e.label)}}function Se(o,i){if(o&1&&(Ga(0,`scsc-alert`,13),G_(1),Lf()),o&2){let e=y_();Jb(),rD(` `,e.docType(),` for `,e.caseNumber(),` was queued for clerk review. `)}}var Q=class o{step=q(0);submitted=q(!1);caseNumber=q(`24CV012345`);docTypes=[{label:`Answer`,fee:435},{label:`Motion`,fee:60},{label:`Proof of Service`,fee:0}];docType=q(this.docTypes[0].label);fee=ut(()=>this.docTypes.find(i=>i.label===this.docType())?.fee??0);review=ut(()=>[{term:`Case number`,value:this.caseNumber(),numeric:!0},{term:`Document`,value:this.docType()},{term:`Fee`,value:`$${this.fee()}`,numeric:!0}]);submit(){this.submitted.set(!0)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-wizard-efiling-demo`]],decls:20,vars:6,consts:[[`stepsLabel`,`e-Filing progress`,`finishLabel`,`Submit filing`,3,`indexChange`,`finish`,`index`],[`label`,`Case`,`heading`,`Which case are you filing in?`],[`label`,`Case number`,`for`,`efile-case`,`hint`,`Format: 24CV012345`,`required`,``],[`scsc-input`,``,`id`,`efile-case`,3,`input`,`value`],[`label`,`Document`,`heading`,`What are you filing?`],[`label`,`Document type`,`for`,`efile-doc`],[`scsc-select`,``,`id`,`efile-doc`,3,`change`],[3,`value`,`selected`],[`label`,`Fees`,`heading`,`Filing fees`],[1,`text-sm`],[1,`mt-1`,`text-2xl`,`font-semibold`,`tabular-nums`],[`label`,`Review`,`heading`,`Review and submit`],[3,`items`],[`status`,`success`,`title`,`Filing submitted`,1,`mt-4`]],template:function(e,a){e&1&&(Ga(0,`scsc-wizard`,0),sD(`indexChange`,function(d){return Y_(a.step,d)||(a.step=d),d}),lc(`finish`,function(){return a.submit()}),Ga(1,`scsc-wizard-step`,1)(2,`scsc-form-field`,2)(3,`input`,3),lc(`input`,function(d){return a.caseNumber.set(d.target.value)}),Lf()()(),Ga(4,`scsc-wizard-step`,4)(5,`scsc-form-field`,5)(6,`select`,6),lc(`change`,function(d){return a.docType.set(d.target.value)}),o_(7,ze,2,3,`option`,7,ve),Lf()()(),Ga(9,`scsc-wizard-step`,8)(10,`p`,9),G_(11,` Filing fee for `),Ga(12,`strong`),G_(13),Lf(),G_(14,`: `),Lf(),Ga(15,`p`,10),G_(16),Lf()(),Ga(17,`scsc-wizard-step`,11),uc(18,`scsc-description-list`,12),Lf()(),JT(19,Se,2,2,`scsc-alert`,13)),e&2&&(iD(`index`,a.step),Jb(3),Pv(`value`,a.caseNumber()),Jb(4),i_(a.docTypes),Jb(6),nD(a.docType()),Jb(3),$f(`$`,a.fee()),Jb(2),Pv(`items`,a.review()),Jb(),t_(a.submitted()?19:-1))},dependencies:[za,NP,Vn,qo,On,Zi,Ir],encapsulation:2})};function Ce(o,i){if(o&1&&(Ga(0,`scsc-alert`,0),G_(1),Lf()),o&2){let e=y_();Jb(),$f(` The clerk will email the video link for `,e.form.controls.hearing.value.caseNumber,` one business day before the hearing. `)}}function xe(o,i){if(o&1){let e=d_();Ga(0,`form`,1)(1,`scsc-wizard`,2),sD(`indexChange`,function(c){Eg(e);let d=y_();return Y_(d.step,c)||(d.step=c),Ig(c)}),lc(`finish`,function(){Eg(e);let c=y_();return Ig(c.submitted.set(!0))}),Ga(2,`scsc-wizard-step`,3)(3,`div`,4)(4,`scsc-form-field`,5)(5,`input`,6),HS(),Lf()(),Ga(6,`scsc-form-field`,7)(7,`select`,8),HS(),Ga(8,`option`,9),G_(9,`Select…`),Lf(),Ga(10,`option`),G_(11,`Oct 14, 2026 · 9:00 AM · Dept. 7`),Lf(),Ga(12,`option`),G_(13,`Oct 21, 2026 · 1:30 PM · Dept. 7`),Lf()()()()(),Ga(14,`scsc-wizard-step`,10)(15,`div`,11)(16,`scsc-form-field`,12)(17,`input`,13),HS(),Lf()(),Ga(18,`scsc-form-field`,14)(19,`input`,15),HS(),Lf()()()(),Ga(20,`scsc-wizard-step`,16),uc(21,`scsc-description-list`,17),Lf()()()}if(o&2){let e=y_();Pv(`formGroup`,e.form),Jb(),iD(`index`,e.step),Jb(),Pv(`stepControl`,e.form.controls.hearing),Jb(2),Pv(`error`,e.errorFor(e.form.controls.hearing.controls.caseNumber)),Jb(),Pv(`invalid`,!!e.errorFor(e.form.controls.hearing.controls.caseNumber)),zS(),Jb(),Pv(`error`,e.errorFor(e.form.controls.hearing.controls.date)),Jb(),Pv(`invalid`,!!e.errorFor(e.form.controls.hearing.controls.date)),zS(),Jb(7),Pv(`stepControl`,e.form.controls.contact),Jb(2),Pv(`error`,e.errorFor(e.form.controls.contact.controls.name)),Jb(),Pv(`invalid`,!!e.errorFor(e.form.controls.contact.controls.name)),zS(),Jb(),Pv(`error`,e.errorFor(e.form.controls.contact.controls.email)),Jb(),Pv(`invalid`,!!e.errorFor(e.form.controls.contact.controls.email)),zS(),Jb(2),Pv(`items`,e.review())}}var X=class o{fb=g(Wue).nonNullable;step=q(0);submitted=q(!1);form=this.fb.group({hearing:this.fb.group({caseNumber:[``,[Fs.required,Fs.pattern(/^\d{2}[A-Z]{2}\d{6}$/)]],date:[``,Fs.required]}),contact:this.fb.group({name:[``,Fs.required],email:[``,[Fs.required,Fs.email]]})});errorFor(i){return i.invalid&&(i.touched||i.dirty)?i.hasError(`pattern`)?`Enter the case number like 24CV012345.`:i.hasError(`email`)?`Enter an email address like name@example.com.`:`Answer this question to continue.`:``}review(){let{hearing:i,contact:e}=this.form.getRawValue();return[{term:`Case number`,value:i.caseNumber,numeric:!0},{term:`Hearing`,value:i.date},{term:`Name`,value:e.name},{term:`Email`,value:e.email}]}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-wizard-reactive-demo`]],decls:2,vars:1,consts:[[`status`,`success`,`title`,`Request sent`],[`novalidate`,``,3,`formGroup`],[`stepsLabel`,`Remote appearance request`,`finishLabel`,`Request remote appearance`,3,`indexChange`,`finish`,`index`],[`label`,`Hearing`,`heading`,`Which hearing is this for?`,3,`stepControl`],[`formGroupName`,`hearing`,1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Case number`,`for`,`wizard-rf-case`,`hint`,`Format: 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`wizard-rf-case`,`formControlName`,`caseNumber`,1,`tnum`,3,`invalid`],[`label`,`Hearing`,`for`,`wizard-rf-date`,`required`,``,3,`error`],[`scsc-select`,``,`id`,`wizard-rf-date`,`formControlName`,`date`,3,`invalid`],[`value`,``],[`label`,`Contact`,`heading`,`Where should we send the video link?`,`description`,`The clerk emails it one business day before the hearing.`,3,`stepControl`],[`formGroupName`,`contact`,1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Full name`,`for`,`wizard-rf-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`wizard-rf-name`,`autocomplete`,`name`,`formControlName`,`name`,3,`invalid`],[`label`,`Email`,`for`,`wizard-rf-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`wizard-rf-email`,`type`,`email`,`autocomplete`,`email`,`formControlName`,`email`,3,`invalid`],[`label`,`Review`,`heading`,`Check your request`],[3,`items`]],template:function(e,a){e&1&&JT(0,Ce,2,1,`scsc-alert`,0)(1,xe,22,13,`form`,1),e&2&&t_(a.submitted()?0:1)},dependencies:[Kue,Bue,$ue,Uue,IA,tN,Hue,que,Vz,Xz,YA,za,NP,Vn,qo,On,Zi,Ir],encapsulation:2})};function De(o,i){if(o&1&&(Ga(0,`scsc-alert`,0),G_(1,` Receipt `),Ga(2,`span`,2),G_(3),Lf(),G_(4),Lf()),o&2){let e=y_();Jb(3),nD(i),Jb(),$f(` was emailed to `,e.form.controls.payer.controls.email.value,`. `)}}function Ne(o,i){if(o&1){let e=d_();Ga(0,`form`,1)(1,`scsc-wizard`,3),sD(`indexChange`,function(c){Eg(e);let d=y_();return Y_(d.step,c)||(d.step=c),Ig(c)}),lc(`finish`,function(){Eg(e);let c=y_();return Ig(c.pay())}),Ga(2,`scsc-wizard-step`,4)(3,`div`,5)(4,`scsc-form-field`,6)(5,`input`,7),HS(),Lf()()()(),Ga(6,`scsc-wizard-step`,8)(7,`div`,9)(8,`scsc-form-field`,10)(9,`input`,11),HS(),Lf()(),Ga(10,`scsc-form-field`,12)(11,`input`,13),HS(),Lf()()()(),Ga(12,`scsc-wizard-step`,14),uc(13,`scsc-wizard-review`,15),Lf()()()}if(o&2){let e=y_();Pv(`formGroup`,e.form),Jb(),iD(`index`,e.step),Pv(`submitting`,e.paying()),Jb(),Pv(`stepControl`,e.form.controls.case),Jb(2),Pv(`error`,e.missing(`case.caseNumber`)?`Enter the case number.`:``),Jb(),zS(),Jb(),Pv(`stepControl`,e.form.controls.payer),Jb(2),Pv(`error`,e.missing(`payer.name`)?`Enter the name on the card.`:``),Jb(),zS(),Jb(),Pv(`error`,e.missing(`payer.email`)?`Enter an email like name@example.com.`:``),Jb(),zS(),Jb(2),Pv(`sections`,e.review())}}var ee=class o{fb=g(Wue).nonNullable;step=q(0);paying=q(!1);receipt=q(null);form=this.fb.group({case:this.fb.group({caseNumber:[`24CV012345`,Fs.required]}),payer:this.fb.group({name:[`Maria Alvarez`,Fs.required],email:[``,[Fs.required,Fs.email]]})});value=Ha(this.form.valueChanges,{initialValue:this.form.getRawValue()});review=ut(()=>{let i=this.value();return[{stepIndex:0,title:`Case`,items:[{label:`Case number`,value:i.case?.caseNumber??``,numeric:!0}]},{stepIndex:1,title:`Payer`,items:[{label:`Name on the card`,value:i.payer?.name??``},{label:`Email for the receipt`,value:i.payer?.email??``}]}]});missing(i){let e=this.form.get(i);return!!e&&e.invalid&&(e.touched||e.dirty)}pay(){this.paying.set(!0),setTimeout(()=>{this.paying.set(!1),this.receipt.set(`R-2026-0930-1187`)},1500)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-wizard-review-demo`]],decls:2,vars:1,consts:[[`status`,`success`,`title`,`Payment received`],[`novalidate`,``,3,`formGroup`],[1,`tnum`],[`stepsLabel`,`Fee payment`,`finishLabel`,`Pay $435.00`,3,`indexChange`,`finish`,`index`,`submitting`],[`label`,`Case`,3,`stepControl`],[`formGroupName`,`case`,1,`max-w-md`],[`label`,`Case number`,`for`,`pay-case`,`hint`,`Format: 24CV012345`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`pay-case`,`formControlName`,`caseNumber`,1,`tnum`],[`label`,`Payer`,`heading`,`Who is paying?`,3,`stepControl`],[`formGroupName`,`payer`,1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Name on the card`,`for`,`pay-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`pay-name`,`autocomplete`,`cc-name`,`formControlName`,`name`],[`label`,`Email for the receipt`,`for`,`pay-email`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`pay-email`,`type`,`email`,`autocomplete`,`email`,`formControlName`,`email`],[`label`,`Review`,`heading`,`Check your answers`,`description`,`Edit takes you back to a step; Next brings you here again.`],[3,`sections`]],template:function(e,a){if(e&1&&JT(0,De,5,2,`scsc-alert`,0)(1,Ne,14,9,`form`,1),e&2){let c;t_((c=a.receipt())?0:1,c)}},dependencies:[Kue,Bue,IA,Hue,que,Vz,Xz,YA,za,Vn,qo,Zi,UR,Ir],encapsulation:2})};function _e(o,i){o&1&&(Ga(0,`scsc-alert`,0),G_(1,` The clerk decides within five court days and mails you the order. `),Lf())}function Fe(o,i){if(o&1){let e=d_();Ga(0,`form`,1)(1,`scsc-wizard`,2),sD(`indexChange`,function(c){Eg(e);let d=y_();return Y_(d.step,c)||(d.step=c),Ig(c)}),lc(`finish`,function(){Eg(e);let c=y_();return Ig(c.submitted.set(!0))}),Ga(2,`scsc-wizard-step`,3)(3,`div`,4)(4,`scsc-form-field`,5)(5,`input`,6),HS(),Lf()(),Ga(6,`scsc-form-field`,7)(7,`input`,8),HS(),Lf()()()(),Ga(8,`scsc-wizard-step`,9)(9,`scsc-fieldset`,10)(10,`label`,11)(11,`input`,12),HS(),Lf(),G_(12,` CalFresh `),Lf(),Ga(13,`label`,11)(14,`input`,13),HS(),Lf(),G_(15,` SSI or SSP `),Lf(),Ga(16,`label`,11)(17,`input`,14),HS(),Lf(),G_(18,` Medi-Cal `),Lf()()(),Ga(19,`scsc-wizard-step`,15)(20,`div`,16)(21,`scsc-form-field`,17)(22,`input`,18),HS(),Lf()(),Ga(23,`scsc-form-field`,19)(24,`input`,20),HS(),Lf()()()(),Ga(25,`scsc-wizard-step`,21),uc(26,`scsc-description-list`,22),Lf()()()}if(o&2){let e=y_();Pv(`formGroup`,e.form),Jb(),iD(`index`,e.step),Jb(),Pv(`stepControl`,e.form.controls.about),Jb(2),Pv(`error`,e.missing(`about.name`)?`Enter your full name.`:``),Jb(),zS(),Jb(),Pv(`error`,e.missing(`about.address`)?`Enter the address the order goes to.`:``),Jb(),zS(),Jb(4),zS(),Jb(3),zS(),Jb(3),zS(),Jb(2),Pv(`stepControl`,e.form.controls.income),Jb(2),Pv(`error`,e.missing(`income.household`)?`Enter at least 1.`:``),Jb(),zS(),Jb(),Pv(`error`,e.missing(`income.monthly`)?`Enter your monthly income, or 0.`:``),Jb(),zS(),Jb(2),Pv(`items`,e.review())}}var te=class o{fb=g(Wue).nonNullable;step=q(0);submitted=q(!1);form=this.fb.group({about:this.fb.group({name:[``,Fs.required],address:[``,Fs.required]}),benefits:this.fb.group({calfresh:[!1],ssi:[!1],medical:[!1]}),income:this.fb.group({household:[1,[Fs.required,Fs.min(1)]],monthly:[null,[Fs.required,Fs.min(0)]]})});missing(i){let e=this.form.get(i);return!!e&&e.invalid&&(e.touched||e.dirty)}review(){let i=this.form.getRawValue(),e=[i.benefits.calfresh&&`CalFresh`,i.benefits.ssi&&`SSI or SSP`,i.benefits.medical&&`Medi-Cal`].filter(Boolean);return[{term:`Name`,value:i.about.name},{term:`Benefits`,value:e.join(`, `)||`None`},{term:`Household`,value:String(i.income.household),numeric:!0},{term:`Monthly income`,value:i.income.monthly===null?``:`$${i.income.monthly}`,numeric:!0}]}static ɵfac=function(e){return new(e||o)};static ɵcmp=Af({type:o,selectors:[[`app-wizard-side-demo`]],decls:2,vars:1,consts:[[`status`,`success`,`title`,`Request submitted (FW-001)`],[`novalidate`,``,3,`formGroup`],[`layout`,`side`,`stepsLabel`,`Fee waiver request`,`finishLabel`,`Submit request`,3,`indexChange`,`finish`,`index`],[`label`,`About you`,`description`,`Your name and address`,3,`stepControl`],[`formGroupName`,`about`,1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`Full name`,`for`,`fw-name`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`fw-name`,`autocomplete`,`name`,`formControlName`,`name`],[`label`,`Mailing address`,`for`,`fw-address`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`fw-address`,`autocomplete`,`street-address`,`formControlName`,`address`],[`label`,`Benefits`,`description`,`Public benefits you receive`,`heading`,`Do you receive any of these benefits?`,`optional`,``],[`legend`,`Benefits (choose any)`,`formGroupName`,`benefits`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`calfresh`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`ssi`],[`type`,`checkbox`,`scsc-checkbox`,``,`formControlName`,`medical`],[`label`,`Income`,`description`,`Household size and income`,3,`stepControl`],[`formGroupName`,`income`,1,`flex`,`max-w-md`,`flex-col`,`gap-4`],[`label`,`People in your household`,`for`,`fw-household`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`fw-household`,`type`,`number`,`min`,`1`,`formControlName`,`household`],[`label`,`Monthly household income`,`for`,`fw-income`,`hint`,`Before taxes, in US dollars`,`required`,``,3,`error`],[`scsc-input`,``,`id`,`fw-income`,`type`,`number`,`min`,`0`,`inputmode`,`decimal`,`formControlName`,`monthly`],[`label`,`Review`,`description`,`Check and submit`],[3,`items`]],template:function(e,a){e&1&&JT(0,_e,2,0,`scsc-alert`,0)(1,Fe,27,9,`form`,1),e&2&&t_(a.submitted()?0:1)},dependencies:[Kue,Bue,IA,qz,ez,Hue,que,fz,Vz,Xz,YA,za,jo,NP,$r,Vn,qo,Zi,Ir],encapsulation:2})};var R={"wizard-controlled":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscButton, ScscWizard, ScscWizardStep } from '@scscourt/design';

@Component({
  selector: 'app-wizard-controlled-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscWizard, ScscWizardStep],
  template: \`
    <!-- The active step lives in the parent: deep-link into it, persist it, or jump programmatically -->
    <div class="mb-4 flex items-center gap-2">
      <scsc-button size="sm" variant="ghost" (click)="step.set(0)">Restart</scsc-button>
      <scsc-button size="sm" variant="ghost" (click)="step.set(2)">Jump to review</scsc-button>
      <p class="ml-auto text-sm text-base-content/70">Step {{ step() + 1 }} of 3</p>
    </div>

    <scsc-wizard [(index)]="step" finishLabel="Confirm appearance" (finish)="confirmed.set(true)">
      <scsc-wizard-step label="Summons">
        <p class="text-sm">
          You were summoned for jury service on Oct 20, 2026. Badge 4471, Group C.
        </p>
      </scsc-wizard-step>
      <scsc-wizard-step label="Availability">
        <p class="text-sm">
          Confirm you can serve the full week, or request a one-time postponement.
        </p>
      </scsc-wizard-step>
      <scsc-wizard-step label="Review">
        <p class="text-sm">Report to the Hall of Justice, 2nd floor, at 8:00 AM.</p>
      </scsc-wizard-step>
    </scsc-wizard>

    @if (confirmed()) {
      <p class="mt-3 text-sm text-success">Appearance confirmed.</p>
    }
  \`,
})
export class WizardControlledDemo {
  protected readonly step = signal(0);
  protected readonly confirmed = signal(false);
}
`,html:`<!-- The active step lives in the parent: deep-link into it, persist it, or jump programmatically -->
<div class="mb-4 flex items-center gap-2">
  <scsc-button size="sm" variant="ghost" (click)="step.set(0)">Restart</scsc-button>
  <scsc-button size="sm" variant="ghost" (click)="step.set(2)">Jump to review</scsc-button>
  <p class="ml-auto text-sm text-base-content/70">Step {{ step() + 1 }} of 3</p>
</div>

<scsc-wizard [(index)]="step" finishLabel="Confirm appearance" (finish)="confirmed.set(true)">
  <scsc-wizard-step label="Summons">
    <p class="text-sm">
      You were summoned for jury service on Oct 20, 2026. Badge 4471, Group C.
    </p>
  </scsc-wizard-step>
  <scsc-wizard-step label="Availability">
    <p class="text-sm">
      Confirm you can serve the full week, or request a one-time postponement.
    </p>
  </scsc-wizard-step>
  <scsc-wizard-step label="Review">
    <p class="text-sm">Report to the Hall of Justice, 2nd floor, at 8:00 AM.</p>
  </scsc-wizard-step>
</scsc-wizard>

@if (confirmed()) {
  <p class="mt-3 text-sm text-success">Appearance confirmed.</p>
}
`},"wizard-draft":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscFormField,
  ScscInput,
  ScscText,
  ScscTextarea,
  ScscWizard,
  ScscWizardStep,
} from '@scscourt/design';

@Component({
  selector: 'app-wizard-draft-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscInput, ScscText, ScscTextarea, ScscWizard, ScscWizardStep],
  template: \`
    <scsc-wizard
      [(index)]="step"
      stepsLabel="Juror excuse request"
      finishLabel="Send request"
      showCancel
      showSaveDraft
      cancelLabel="Discard"
      (saveDraft)="save()"
      (cancelled)="discard()"
      (finish)="status.set('Request sent. Jury Services replies by email within 3 business days.')"
    >
      <scsc-wizard-step label="Juror" heading="Your juror details">
        <scsc-form-field label="Juror badge number" for="draft-badge" hint="On your summons">
          <input
            scsc-input
            id="draft-badge"
            class="tnum"
            [value]="badge()"
            (input)="badge.set($any($event.target).value)"
          />
        </scsc-form-field>
      </scsc-wizard-step>
      <scsc-wizard-step label="Reason" heading="Why can\u2019t you serve?">
        <scsc-form-field label="Reason" for="draft-reason" hint="Say which dates are affected">
          <textarea
            scsc-textarea
            id="draft-reason"
            rows="4"
            [value]="reason()"
            (input)="reason.set($any($event.target).value)"
          ></textarea>
        </scsc-form-field>
      </scsc-wizard-step>
      <scsc-wizard-step label="Send" heading="Send your request">
        <p class="text-sm">
          Badge <span class="tnum">{{ badge() || '\u2014' }}</span
          >: {{ reason() || 'no reason given' }}
        </p>
      </scsc-wizard-step>
    </scsc-wizard>

    <!-- Always rendered, so screen readers hear each new status -->
    <scsc-text role="status" tone="muted" size="sm" class="mt-3 block">{{ status() }}</scsc-text>
  \`,
})
export class WizardDraftDemo {
  protected readonly step = signal(0);
  protected readonly badge = signal('4471');
  protected readonly reason = signal('');
  protected readonly status = signal('');

  protected save(): void {
    this.status.set('Draft saved. You can finish it from Jury Services within 7 days.');
  }

  protected discard(): void {
    this.badge.set('');
    this.reason.set('');
    this.step.set(0);
    this.status.set('Your answers were discarded.');
  }
}
`,html:`<scsc-wizard
  [(index)]="step"
  stepsLabel="Juror excuse request"
  finishLabel="Send request"
  showCancel
  showSaveDraft
  cancelLabel="Discard"
  (saveDraft)="save()"
  (cancelled)="discard()"
  (finish)="status.set('Request sent. Jury Services replies by email within 3 business days.')"
>
  <scsc-wizard-step label="Juror" heading="Your juror details">
    <scsc-form-field label="Juror badge number" for="draft-badge" hint="On your summons">
      <input
        scsc-input
        id="draft-badge"
        class="tnum"
        [value]="badge()"
        (input)="badge.set($any($event.target).value)"
      />
    </scsc-form-field>
  </scsc-wizard-step>
  <scsc-wizard-step label="Reason" heading="Why can\u2019t you serve?">
    <scsc-form-field label="Reason" for="draft-reason" hint="Say which dates are affected">
      <textarea
        scsc-textarea
        id="draft-reason"
        rows="4"
        [value]="reason()"
        (input)="reason.set($any($event.target).value)"
      ></textarea>
    </scsc-form-field>
  </scsc-wizard-step>
  <scsc-wizard-step label="Send" heading="Send your request">
    <p class="text-sm">
      Badge <span class="tnum">{{ badge() || '\u2014' }}</span
      >: {{ reason() || 'no reason given' }}
    </p>
  </scsc-wizard-step>
</scsc-wizard>

<!-- Always rendered, so screen readers hear each new status -->
<scsc-text role="status" tone="muted" size="sm" class="mt-3 block">{{ status() }}</scsc-text>
`},"wizard-efiling":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  ScscAlert,
  ScscDescriptionList,
  ScscFormField,
  ScscInput,
  ScscSelect,
  ScscWizard,
  ScscWizardStep,
} from '@scscourt/design';

@Component({
  selector: 'app-wizard-efiling-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScscAlert,
    ScscDescriptionList,
    ScscFormField,
    ScscInput,
    ScscSelect,
    ScscWizard,
    ScscWizardStep,
  ],
  template: \`
    <scsc-wizard
      [(index)]="step"
      stepsLabel="e-Filing progress"
      finishLabel="Submit filing"
      (finish)="submit()"
    >
      <scsc-wizard-step label="Case" heading="Which case are you filing in?">
        <scsc-form-field label="Case number" for="efile-case" hint="Format: 24CV012345" required>
          <input
            scsc-input
            id="efile-case"
            [value]="caseNumber()"
            (input)="caseNumber.set($any($event.target).value)"
          />
        </scsc-form-field>
      </scsc-wizard-step>

      <scsc-wizard-step label="Document" heading="What are you filing?">
        <scsc-form-field label="Document type" for="efile-doc">
          <select scsc-select id="efile-doc" (change)="docType.set($any($event.target).value)">
            @for (d of docTypes; track d.label) {
              <option [value]="d.label" [selected]="d.label === docType()">{{ d.label }}</option>
            }
          </select>
        </scsc-form-field>
      </scsc-wizard-step>

      <scsc-wizard-step label="Fees" heading="Filing fees">
        <p class="text-sm">
          Filing fee for <strong>{{ docType() }}</strong
          >:
        </p>
        <p class="mt-1 text-2xl font-semibold tabular-nums">\\\${{ fee() }}</p>
      </scsc-wizard-step>

      <scsc-wizard-step label="Review" heading="Review and submit">
        <scsc-description-list [items]="review()" />
      </scsc-wizard-step>
    </scsc-wizard>

    @if (submitted()) {
      <scsc-alert status="success" title="Filing submitted" class="mt-4">
        {{ docType() }} for {{ caseNumber() }} was queued for clerk review.
      </scsc-alert>
    }
  \`,
})
export class WizardEfilingDemo {
  protected readonly step = signal(0);
  protected readonly submitted = signal(false);

  protected readonly caseNumber = signal('24CV012345');
  protected readonly docTypes = [
    { label: 'Answer', fee: 435 },
    { label: 'Motion', fee: 60 },
    { label: 'Proof of Service', fee: 0 },
  ];
  protected readonly docType = signal(this.docTypes[0].label);

  protected readonly fee = computed(
    () => this.docTypes.find((d) => d.label === this.docType())?.fee ?? 0,
  );
  protected readonly review = computed(() => [
    { term: 'Case number', value: this.caseNumber(), numeric: true },
    { term: 'Document', value: this.docType() },
    { term: 'Fee', value: \`$\${this.fee()}\`, numeric: true },
  ]);

  protected submit(): void {
    this.submitted.set(true);
  }
}
`,html:`<scsc-wizard
  [(index)]="step"
  stepsLabel="e-Filing progress"
  finishLabel="Submit filing"
  (finish)="submit()"
>
  <scsc-wizard-step label="Case" heading="Which case are you filing in?">
    <scsc-form-field label="Case number" for="efile-case" hint="Format: 24CV012345" required>
      <input
        scsc-input
        id="efile-case"
        [value]="caseNumber()"
        (input)="caseNumber.set($any($event.target).value)"
      />
    </scsc-form-field>
  </scsc-wizard-step>

  <scsc-wizard-step label="Document" heading="What are you filing?">
    <scsc-form-field label="Document type" for="efile-doc">
      <select scsc-select id="efile-doc" (change)="docType.set($any($event.target).value)">
        @for (d of docTypes; track d.label) {
          <option [value]="d.label" [selected]="d.label === docType()">{{ d.label }}</option>
        }
      </select>
    </scsc-form-field>
  </scsc-wizard-step>

  <scsc-wizard-step label="Fees" heading="Filing fees">
    <p class="text-sm">
      Filing fee for <strong>{{ docType() }}</strong
      >:
    </p>
    <p class="mt-1 text-2xl font-semibold tabular-nums">\${{ fee() }}</p>
  </scsc-wizard-step>

  <scsc-wizard-step label="Review" heading="Review and submit">
    <scsc-description-list [items]="review()" />
  </scsc-wizard-step>
</scsc-wizard>

@if (submitted()) {
  <scsc-alert status="success" title="Filing submitted" class="mt-4">
    {{ docType() }} for {{ caseNumber() }} was queued for clerk review.
  </scsc-alert>
}
`},"wizard-reactive":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, type AbstractControl } from '@angular/forms';
import {
  ScscAlert,
  ScscDescriptionList,
  ScscFormField,
  ScscInput,
  ScscSelect,
  ScscWizard,
  ScscWizardStep,
  type ScscDescriptionItem,
} from '@scscourt/design';

@Component({
  selector: 'app-wizard-reactive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscDescriptionList,
    ScscFormField,
    ScscInput,
    ScscSelect,
    ScscWizard,
    ScscWizardStep,
  ],
  template: \`
    @if (submitted()) {
      <scsc-alert status="success" title="Request sent">
        The clerk will email the video link for {{ form.controls.hearing.value.caseNumber }} one
        business day before the hearing.
      </scsc-alert>
    } @else {
      <form [formGroup]="form" novalidate>
        <!-- linear is the default: Next checks the step's stepControl and stays while it is invalid -->
        <scsc-wizard
          [(index)]="step"
          stepsLabel="Remote appearance request"
          finishLabel="Request remote appearance"
          (finish)="submitted.set(true)"
        >
          <scsc-wizard-step
            label="Hearing"
            heading="Which hearing is this for?"
            [stepControl]="form.controls.hearing"
          >
            <div formGroupName="hearing" class="flex max-w-md flex-col gap-4">
              <scsc-form-field
                label="Case number"
                for="wizard-rf-case"
                hint="Format: 24CV012345"
                required
                [error]="errorFor(form.controls.hearing.controls.caseNumber)"
              >
                <input
                  scsc-input
                  id="wizard-rf-case"
                  class="tnum"
                  formControlName="caseNumber"
                  [invalid]="!!errorFor(form.controls.hearing.controls.caseNumber)"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Hearing"
                for="wizard-rf-date"
                required
                [error]="errorFor(form.controls.hearing.controls.date)"
              >
                <select
                  scsc-select
                  id="wizard-rf-date"
                  formControlName="date"
                  [invalid]="!!errorFor(form.controls.hearing.controls.date)"
                >
                  <option value="">Select\u2026</option>
                  <option>Oct 14, 2026 \xB7 9:00 AM \xB7 Dept. 7</option>
                  <option>Oct 21, 2026 \xB7 1:30 PM \xB7 Dept. 7</option>
                </select>
              </scsc-form-field>
            </div>
          </scsc-wizard-step>

          <scsc-wizard-step
            label="Contact"
            heading="Where should we send the video link?"
            description="The clerk emails it one business day before the hearing."
            [stepControl]="form.controls.contact"
          >
            <div formGroupName="contact" class="flex max-w-md flex-col gap-4">
              <scsc-form-field
                label="Full name"
                for="wizard-rf-name"
                required
                [error]="errorFor(form.controls.contact.controls.name)"
              >
                <input
                  scsc-input
                  id="wizard-rf-name"
                  autocomplete="name"
                  formControlName="name"
                  [invalid]="!!errorFor(form.controls.contact.controls.name)"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Email"
                for="wizard-rf-email"
                required
                [error]="errorFor(form.controls.contact.controls.email)"
              >
                <input
                  scsc-input
                  id="wizard-rf-email"
                  type="email"
                  autocomplete="email"
                  formControlName="email"
                  [invalid]="!!errorFor(form.controls.contact.controls.email)"
                />
              </scsc-form-field>
            </div>
          </scsc-wizard-step>

          <scsc-wizard-step label="Review" heading="Check your request">
            <scsc-description-list [items]="review()" />
          </scsc-wizard-step>
        </scsc-wizard>
      </form>
    }
  \`,
})
export class WizardReactiveDemo {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly step = signal(0);
  protected readonly submitted = signal(false);

  /** One group per step: each is that step's stepControl. */
  protected readonly form = this.fb.group({
    hearing: this.fb.group({
      caseNumber: ['', [Validators.required, Validators.pattern(/^\\d{2}[A-Z]{2}\\d{6}$/)]],
      date: ['', Validators.required],
    }),
    contact: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }),
  });

  /** The message for one control, once the wizard (or the user) has touched it. */
  protected errorFor(c: AbstractControl): string {
    if (!(c.invalid && (c.touched || c.dirty))) return '';
    if (c.hasError('pattern')) return 'Enter the case number like 24CV012345.';
    if (c.hasError('email')) return 'Enter an email address like name@example.com.';
    return 'Answer this question to continue.';
  }

  protected review(): ScscDescriptionItem[] {
    const { hearing, contact } = this.form.getRawValue();
    return [
      { term: 'Case number', value: hearing.caseNumber, numeric: true },
      { term: 'Hearing', value: hearing.date },
      { term: 'Name', value: contact.name },
      { term: 'Email', value: contact.email },
    ];
  }
}
`,html:`@if (submitted()) {
  <scsc-alert status="success" title="Request sent">
    The clerk will email the video link for {{ form.controls.hearing.value.caseNumber }} one
    business day before the hearing.
  </scsc-alert>
} @else {
  <form [formGroup]="form" novalidate>
    <!-- linear is the default: Next checks the step's stepControl and stays while it is invalid -->
    <scsc-wizard
      [(index)]="step"
      stepsLabel="Remote appearance request"
      finishLabel="Request remote appearance"
      (finish)="submitted.set(true)"
    >
      <scsc-wizard-step
        label="Hearing"
        heading="Which hearing is this for?"
        [stepControl]="form.controls.hearing"
      >
        <div formGroupName="hearing" class="flex max-w-md flex-col gap-4">
          <scsc-form-field
            label="Case number"
            for="wizard-rf-case"
            hint="Format: 24CV012345"
            required
            [error]="errorFor(form.controls.hearing.controls.caseNumber)"
          >
            <input
              scsc-input
              id="wizard-rf-case"
              class="tnum"
              formControlName="caseNumber"
              [invalid]="!!errorFor(form.controls.hearing.controls.caseNumber)"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Hearing"
            for="wizard-rf-date"
            required
            [error]="errorFor(form.controls.hearing.controls.date)"
          >
            <select
              scsc-select
              id="wizard-rf-date"
              formControlName="date"
              [invalid]="!!errorFor(form.controls.hearing.controls.date)"
            >
              <option value="">Select\u2026</option>
              <option>Oct 14, 2026 \xB7 9:00 AM \xB7 Dept. 7</option>
              <option>Oct 21, 2026 \xB7 1:30 PM \xB7 Dept. 7</option>
            </select>
          </scsc-form-field>
        </div>
      </scsc-wizard-step>

      <scsc-wizard-step
        label="Contact"
        heading="Where should we send the video link?"
        description="The clerk emails it one business day before the hearing."
        [stepControl]="form.controls.contact"
      >
        <div formGroupName="contact" class="flex max-w-md flex-col gap-4">
          <scsc-form-field
            label="Full name"
            for="wizard-rf-name"
            required
            [error]="errorFor(form.controls.contact.controls.name)"
          >
            <input
              scsc-input
              id="wizard-rf-name"
              autocomplete="name"
              formControlName="name"
              [invalid]="!!errorFor(form.controls.contact.controls.name)"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Email"
            for="wizard-rf-email"
            required
            [error]="errorFor(form.controls.contact.controls.email)"
          >
            <input
              scsc-input
              id="wizard-rf-email"
              type="email"
              autocomplete="email"
              formControlName="email"
              [invalid]="!!errorFor(form.controls.contact.controls.email)"
            />
          </scsc-form-field>
        </div>
      </scsc-wizard-step>

      <scsc-wizard-step label="Review" heading="Check your request">
        <scsc-description-list [items]="review()" />
      </scsc-wizard-step>
    </scsc-wizard>
  </form>
}
`},"wizard-review":{ts:`import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscFormField,
  ScscInput,
  ScscWizard,
  ScscWizardReview,
  ScscWizardStep,
  type ScscWizardReviewSection,
} from '@scscourt/design';

@Component({
  selector: 'app-wizard-review-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscFormField,
    ScscInput,
    ScscWizard,
    ScscWizardReview,
    ScscWizardStep,
  ],
  template: \`
    @if (receipt(); as r) {
      <scsc-alert status="success" title="Payment received">
        Receipt <span class="tnum">{{ r }}</span> was emailed to
        {{ form.controls.payer.controls.email.value }}.
      </scsc-alert>
    } @else {
      <form [formGroup]="form" novalidate>
        <scsc-wizard
          [(index)]="step"
          stepsLabel="Fee payment"
          finishLabel="Pay $435.00"
          [submitting]="paying()"
          (finish)="pay()"
        >
          <scsc-wizard-step label="Case" [stepControl]="form.controls.case">
            <div formGroupName="case" class="max-w-md">
              <scsc-form-field
                label="Case number"
                for="pay-case"
                hint="Format: 24CV012345"
                required
                [error]="missing('case.caseNumber') ? 'Enter the case number.' : ''"
              >
                <input scsc-input id="pay-case" class="tnum" formControlName="caseNumber" />
              </scsc-form-field>
            </div>
          </scsc-wizard-step>

          <scsc-wizard-step
            label="Payer"
            heading="Who is paying?"
            [stepControl]="form.controls.payer"
          >
            <div formGroupName="payer" class="flex max-w-md flex-col gap-4">
              <scsc-form-field
                label="Name on the card"
                for="pay-name"
                required
                [error]="missing('payer.name') ? 'Enter the name on the card.' : ''"
              >
                <input scsc-input id="pay-name" autocomplete="cc-name" formControlName="name" />
              </scsc-form-field>
              <scsc-form-field
                label="Email for the receipt"
                for="pay-email"
                required
                [error]="missing('payer.email') ? 'Enter an email like name@example.com.' : ''"
              >
                <input
                  scsc-input
                  id="pay-email"
                  type="email"
                  autocomplete="email"
                  formControlName="email"
                />
              </scsc-form-field>
            </div>
          </scsc-wizard-step>

          <scsc-wizard-step
            label="Review"
            heading="Check your answers"
            description="Edit takes you back to a step; Next brings you here again."
          >
            <!-- Inside a wizard, Edit moves to the step itself -->
            <scsc-wizard-review [sections]="review()" />
          </scsc-wizard-step>
        </scsc-wizard>
      </form>
    }
  \`,
})
export class WizardReviewDemo {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly step = signal(0);
  protected readonly paying = signal(false);
  protected readonly receipt = signal<string | null>(null);

  protected readonly form = this.fb.group({
    case: this.fb.group({ caseNumber: ['24CV012345', Validators.required] }),
    payer: this.fb.group({
      name: ['Maria Alvarez', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }),
  });
  private readonly value = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue(),
  });

  protected readonly review = computed<ScscWizardReviewSection[]>(() => {
    const v = this.value();
    return [
      {
        stepIndex: 0,
        title: 'Case',
        items: [{ label: 'Case number', value: v.case?.caseNumber ?? '', numeric: true }],
      },
      {
        stepIndex: 1,
        title: 'Payer',
        items: [
          { label: 'Name on the card', value: v.payer?.name ?? '' },
          { label: 'Email for the receipt', value: v.payer?.email ?? '' },
        ],
      },
    ];
  });

  protected missing(path: string): boolean {
    const c = this.form.get(path);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  /** The finish button shows a spinner and blocks every action while the payment runs. */
  protected pay(): void {
    this.paying.set(true);
    setTimeout(() => {
      this.paying.set(false);
      this.receipt.set('R-2026-0930-1187');
    }, 1500);
  }
}
`,html:`@if (receipt(); as r) {
  <scsc-alert status="success" title="Payment received">
    Receipt <span class="tnum">{{ r }}</span> was emailed to
    {{ form.controls.payer.controls.email.value }}.
  </scsc-alert>
} @else {
  <form [formGroup]="form" novalidate>
    <scsc-wizard
      [(index)]="step"
      stepsLabel="Fee payment"
      finishLabel="Pay $435.00"
      [submitting]="paying()"
      (finish)="pay()"
    >
      <scsc-wizard-step label="Case" [stepControl]="form.controls.case">
        <div formGroupName="case" class="max-w-md">
          <scsc-form-field
            label="Case number"
            for="pay-case"
            hint="Format: 24CV012345"
            required
            [error]="missing('case.caseNumber') ? 'Enter the case number.' : ''"
          >
            <input scsc-input id="pay-case" class="tnum" formControlName="caseNumber" />
          </scsc-form-field>
        </div>
      </scsc-wizard-step>

      <scsc-wizard-step
        label="Payer"
        heading="Who is paying?"
        [stepControl]="form.controls.payer"
      >
        <div formGroupName="payer" class="flex max-w-md flex-col gap-4">
          <scsc-form-field
            label="Name on the card"
            for="pay-name"
            required
            [error]="missing('payer.name') ? 'Enter the name on the card.' : ''"
          >
            <input scsc-input id="pay-name" autocomplete="cc-name" formControlName="name" />
          </scsc-form-field>
          <scsc-form-field
            label="Email for the receipt"
            for="pay-email"
            required
            [error]="missing('payer.email') ? 'Enter an email like name@example.com.' : ''"
          >
            <input
              scsc-input
              id="pay-email"
              type="email"
              autocomplete="email"
              formControlName="email"
            />
          </scsc-form-field>
        </div>
      </scsc-wizard-step>

      <scsc-wizard-step
        label="Review"
        heading="Check your answers"
        description="Edit takes you back to a step; Next brings you here again."
      >
        <!-- Inside a wizard, Edit moves to the step itself -->
        <scsc-wizard-review [sections]="review()" />
      </scsc-wizard-step>
    </scsc-wizard>
  </form>
}
`},"wizard-side":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScscAlert,
  ScscCheckbox,
  ScscDescriptionList,
  ScscFieldset,
  ScscFormField,
  ScscInput,
  ScscWizard,
  ScscWizardStep,
  type ScscDescriptionItem,
} from '@scscourt/design';

@Component({
  selector: 'app-wizard-side-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ScscAlert,
    ScscCheckbox,
    ScscDescriptionList,
    ScscFieldset,
    ScscFormField,
    ScscInput,
    ScscWizard,
    ScscWizardStep,
  ],
  template: \`
    @if (submitted()) {
      <scsc-alert status="success" title="Request submitted (FW-001)">
        The clerk decides within five court days and mails you the order.
      </scsc-alert>
    } @else {
      <form [formGroup]="form" novalidate>
        <!-- The steps sit in a rail when the wizard is 48rem or wider, and on top below that -->
        <scsc-wizard
          layout="side"
          [(index)]="step"
          stepsLabel="Fee waiver request"
          finishLabel="Submit request"
          (finish)="submitted.set(true)"
        >
          <scsc-wizard-step
            label="About you"
            description="Your name and address"
            [stepControl]="form.controls.about"
          >
            <div formGroupName="about" class="flex max-w-md flex-col gap-4">
              <scsc-form-field
                label="Full name"
                for="fw-name"
                required
                [error]="missing('about.name') ? 'Enter your full name.' : ''"
              >
                <input scsc-input id="fw-name" autocomplete="name" formControlName="name" />
              </scsc-form-field>
              <scsc-form-field
                label="Mailing address"
                for="fw-address"
                required
                [error]="missing('about.address') ? 'Enter the address the order goes to.' : ''"
              >
                <input
                  scsc-input
                  id="fw-address"
                  autocomplete="street-address"
                  formControlName="address"
                />
              </scsc-form-field>
            </div>
          </scsc-wizard-step>

          <scsc-wizard-step
            label="Benefits"
            description="Public benefits you receive"
            heading="Do you receive any of these benefits?"
            optional
          >
            <scsc-fieldset legend="Benefits (choose any)" formGroupName="benefits">
              <label class="flex items-center gap-2 text-sm">
                <input type="checkbox" scsc-checkbox formControlName="calfresh" /> CalFresh
              </label>
              <label class="flex items-center gap-2 text-sm">
                <input type="checkbox" scsc-checkbox formControlName="ssi" /> SSI or SSP
              </label>
              <label class="flex items-center gap-2 text-sm">
                <input type="checkbox" scsc-checkbox formControlName="medical" /> Medi-Cal
              </label>
            </scsc-fieldset>
          </scsc-wizard-step>

          <scsc-wizard-step
            label="Income"
            description="Household size and income"
            [stepControl]="form.controls.income"
          >
            <div formGroupName="income" class="flex max-w-md flex-col gap-4">
              <scsc-form-field
                label="People in your household"
                for="fw-household"
                required
                [error]="missing('income.household') ? 'Enter at least 1.' : ''"
              >
                <input
                  scsc-input
                  id="fw-household"
                  type="number"
                  min="1"
                  formControlName="household"
                />
              </scsc-form-field>
              <scsc-form-field
                label="Monthly household income"
                for="fw-income"
                hint="Before taxes, in US dollars"
                required
                [error]="missing('income.monthly') ? 'Enter your monthly income, or 0.' : ''"
              >
                <input
                  scsc-input
                  id="fw-income"
                  type="number"
                  min="0"
                  inputmode="decimal"
                  formControlName="monthly"
                />
              </scsc-form-field>
            </div>
          </scsc-wizard-step>

          <scsc-wizard-step label="Review" description="Check and submit">
            <scsc-description-list [items]="review()" />
          </scsc-wizard-step>
        </scsc-wizard>
      </form>
    }
  \`,
})
export class WizardSideDemo {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly step = signal(0);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.group({
    about: this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    }),
    benefits: this.fb.group({ calfresh: [false], ssi: [false], medical: [false] }),
    income: this.fb.group({
      household: [1, [Validators.required, Validators.min(1)]],
      monthly: [null as number | null, [Validators.required, Validators.min(0)]],
    }),
  });

  protected missing(path: string): boolean {
    const c = this.form.get(path);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  protected review(): ScscDescriptionItem[] {
    const v = this.form.getRawValue();
    const benefits = [
      v.benefits.calfresh && 'CalFresh',
      v.benefits.ssi && 'SSI or SSP',
      v.benefits.medical && 'Medi-Cal',
    ].filter(Boolean);
    return [
      { term: 'Name', value: v.about.name },
      { term: 'Benefits', value: benefits.join(', ') || 'None' },
      { term: 'Household', value: String(v.income.household), numeric: true },
      {
        term: 'Monthly income',
        value: v.income.monthly === null ? '' : \`$\${v.income.monthly}\`,
        numeric: true,
      },
    ];
  }
}
`,html:`@if (submitted()) {
  <scsc-alert status="success" title="Request submitted (FW-001)">
    The clerk decides within five court days and mails you the order.
  </scsc-alert>
} @else {
  <form [formGroup]="form" novalidate>
    <!-- The steps sit in a rail when the wizard is 48rem or wider, and on top below that -->
    <scsc-wizard
      layout="side"
      [(index)]="step"
      stepsLabel="Fee waiver request"
      finishLabel="Submit request"
      (finish)="submitted.set(true)"
    >
      <scsc-wizard-step
        label="About you"
        description="Your name and address"
        [stepControl]="form.controls.about"
      >
        <div formGroupName="about" class="flex max-w-md flex-col gap-4">
          <scsc-form-field
            label="Full name"
            for="fw-name"
            required
            [error]="missing('about.name') ? 'Enter your full name.' : ''"
          >
            <input scsc-input id="fw-name" autocomplete="name" formControlName="name" />
          </scsc-form-field>
          <scsc-form-field
            label="Mailing address"
            for="fw-address"
            required
            [error]="missing('about.address') ? 'Enter the address the order goes to.' : ''"
          >
            <input
              scsc-input
              id="fw-address"
              autocomplete="street-address"
              formControlName="address"
            />
          </scsc-form-field>
        </div>
      </scsc-wizard-step>

      <scsc-wizard-step
        label="Benefits"
        description="Public benefits you receive"
        heading="Do you receive any of these benefits?"
        optional
      >
        <scsc-fieldset legend="Benefits (choose any)" formGroupName="benefits">
          <label class="flex items-center gap-2 text-sm">
            <input type="checkbox" scsc-checkbox formControlName="calfresh" /> CalFresh
          </label>
          <label class="flex items-center gap-2 text-sm">
            <input type="checkbox" scsc-checkbox formControlName="ssi" /> SSI or SSP
          </label>
          <label class="flex items-center gap-2 text-sm">
            <input type="checkbox" scsc-checkbox formControlName="medical" /> Medi-Cal
          </label>
        </scsc-fieldset>
      </scsc-wizard-step>

      <scsc-wizard-step
        label="Income"
        description="Household size and income"
        [stepControl]="form.controls.income"
      >
        <div formGroupName="income" class="flex max-w-md flex-col gap-4">
          <scsc-form-field
            label="People in your household"
            for="fw-household"
            required
            [error]="missing('income.household') ? 'Enter at least 1.' : ''"
          >
            <input
              scsc-input
              id="fw-household"
              type="number"
              min="1"
              formControlName="household"
            />
          </scsc-form-field>
          <scsc-form-field
            label="Monthly household income"
            for="fw-income"
            hint="Before taxes, in US dollars"
            required
            [error]="missing('income.monthly') ? 'Enter your monthly income, or 0.' : ''"
          >
            <input
              scsc-input
              id="fw-income"
              type="number"
              min="0"
              inputmode="decimal"
              formControlName="monthly"
            />
          </scsc-form-field>
        </div>
      </scsc-wizard-step>

      <scsc-wizard-step label="Review" description="Check and submit">
        <scsc-description-list [items]="review()" />
      </scsc-wizard-step>
    </scsc-wizard>
  </form>
}
`}};var yt={slug:`wizard`,name:`Wizard`,classes:[`ScscWizard`,`ScscWizardStep`,`ScscWizardReview`],category:`Overlays & Feedback`,summary:"A multi-step flow: the step indicator (`scsc-steps`), the active step with its heading, and Back / Next / Finish, plus optional Cancel and Save draft. One `scsc-wizard-step` per step; `[(index)]` is the active step. Give each step a `stepControl` and Next validates it.",whenToUse:["Linear tasks with a natural order and one submit at the end: e-filing, intake, a juror questionnaire, a fee payment. For a progress indicator without step content or buttons use `scsc-steps`; the guide [Wizard vs. steps](/docs/patterns/wizard-vs-steps) compares them.","**Validation:** pass each step's `FormGroup` as `stepControl`. Next marks it touched, shows `scsc-error-summary` above the step, focuses the first invalid field and stays. `canAdvance` adds your own check (return or resolve `false`); `(beforeNext)` can veto any forward move with `preventDefault()`. Finish checks every step's control and sends the user to the first invalid one before it emits `finish`.",'**Linear by default:** the indicator lets the user go back to any step, and forward only as far as the first incomplete one. Set `[linear]="false"` when steps are independent. `editable="false"` locks a step once it is complete; `optional` steps never block later ones.',"The wizard renders each step's heading (`heading`, else `label`) and `description`, so start the step content with its fields, or with level-3 headings (`headingLevel` sets the step heading's rank).",'`layout="side"` puts the steps in a rail beside the step when the wizard is 48rem or wider (top and compact below that). On small screens the actions stick to the bottom of the viewport.',"End with a review step: `scsc-wizard-review` lists the answers per step with an Edit button that goes back to that step.","Set `submitting` while the submit runs: the finish button keeps its width, shows a spinner and every action is `aria-disabled`."],demos:[{id:`wizard-efiling`,title:`E-filing`,description:"Four steps with a heading each, no validation; the Review step is a `computed()` summary and `(finish)` submits.",component:Q,source:R[`wizard-efiling`]},{id:`wizard-reactive`,title:`Validation with Reactive Forms`,description:"Each step's `FormGroup` is its `stepControl`. Press Next with the fields empty: the step stays, the error summary lists the problems, focus goes to the first invalid field, and the step shows its error state in the indicator.",component:X,source:R[`wizard-reactive`]},{id:`wizard-side`,title:`Side layout`,description:'`layout="side"` with step descriptions in the rail and an `optional` step. Below 48rem the steps move on top.',component:te,source:R[`wizard-side`],layout:`full-bleed`},{id:`wizard-draft`,title:`Save draft and cancel`,description:'`showSaveDraft` and `showCancel` (relabelled "Discard") emit `(saveDraft)` and `(cancelled)`; a status line reports what happened.',component:K,source:R[`wizard-draft`]},{id:`wizard-review`,title:`Review step and submitting`,description:"`scsc-wizard-review` with an Edit button per step. Pay shows the `submitting` state for a moment before the receipt.",component:ee,source:R[`wizard-review`]},{id:`wizard-controlled`,title:`Controlled index`,description:"The parent owns `[(index)]` and can jump or restart from outside the wizard; the new step is announced.",component:Z,source:R[`wizard-controlled`]}],a11y:['On every step change, focus moves to the new step\'s heading (given `tabindex="-1"`) and "Step 2 of 4: Documents" is announced politely (`stepOf` in `provideScscLabels()`). Changes made from outside (`[(index)]`) are announced too, without moving focus.',`Focus never stays on a disabled Back or on a step button that has just become the current step; Next turns into the finish button in place, so focus is kept. If your handler moves focus itself (to an invalid field, say) or vetoes the move, the wizard leaves focus where it is.`,'A blocked Next shows `scsc-error-summary` (`role="alert"`, links to each field) and focuses the first invalid field (3.3.1). The summary uses each field\'s `scsc-form-field` error text, so give every error a clear message.','The step area is a group named "Step 2 of 4: Documents". Inactive steps stay mounted (form state survives) but are `hidden` and `inert`.','The indicator is an ordered list with `aria-current="step"`; steps you can go to are buttons, and each state is stated in words (see Steps).',"On small screens the sticky action bar never covers the focused field: the step content has a bottom `scroll-margin` (2.4.11).","While `submitting`, the finish button is `aria-disabled` and `aria-busy` rather than disabled, so it keeps focus and its name; the spinner is decorative.",'`scsc-wizard-review` Edit buttons read "Edit Case", "Edit Documents" (the visible text stays "Edit"; the name starts with it, 2.5.3).'],keyboard:[{keys:`Tab / Shift + Tab`,action:`Through the step indicator buttons (steps you can go to), the active step’s content, then Cancel, Save draft, Back and Next (or the finish button).`},{keys:`Enter / Space (on Next)`,action:`Validates the step. If it passes, shows the next step and moves focus to its heading; if not, shows the error summary and focuses the first invalid field.`},{keys:`Enter / Space (on Back)`,action:`Shows the previous step and moves focus to its heading; Back is disabled on the first step (or when the steps before are locked).`},{keys:`Enter / Space (on a step in the indicator)`,action:`Goes to that step: back freely; forward (in linear mode) only when every step in between is valid.`},{keys:`Enter / Space (on the finish button)`,action:"Checks every step, then emits `finish`; an invalid step is shown with its errors instead."},{keys:`Enter / Space (on Edit in a review)`,action:`Goes back to that step and moves focus to its heading.`}],aria:['`role="group"` on the step area, named "Step n of N: Label"; `hidden` + `inert` on inactive steps.','`aria-disabled="true"` and `aria-busy="true"` on the actions while `submitting` or while an async `canAdvance` runs.'],appMustProvide:['Short noun `label`s ("Documents", "Fees") for the indicator and the announcement, and a `heading` when the question is longer.',"An error message on every field (`scsc-form-field [error]`), shown once the control is touched: the summary and the inline errors read it.","Your own message and focus when `canAdvance` or `(beforeNext)` refuses a move."],related:[`steps`,`forms-schema`,`a11y-utilities`,`tabs`]};export{yt as WIZARD_DOCS};