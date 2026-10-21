import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{At as NP,Cs as rM,Ct as Lr,Ds as sM,Es as sD,Fs as vM,Go as g,Gs as zS,Hs as y_,Ka as Ov,Ms as uc,Na as Jb,Nn as Xa,Q as Gue,S as Bi,So as Zv,Un as Za,Xa as Pv,Yo as iD,Zo as i_,_s as o_,a as $a,bo as Y_,cs as lc,ds as nD,ea as zz,gs as oM,lr as ez,ms as nu,pi as sn,ra as Af,rn as TP,rr as da,s as $i,tt as Hue,va as G_,vn as Vn,w as Bo,wa as HS,ws as r_,xs as q$1,ya as Ga,za as Lf,zt as On}from"./main-O6OT5H7H.js";var W=class s{columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`10rem`},{key:`title`,header:`Title`},{key:`type`,header:`Type`,width:`9rem`},{key:`filed`,header:`Filed`,type:`date`,width:`8rem`}];rows=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`,type:`Civil`,filed:`2024-03-12`},{caseNumber:`24FL004521`,title:`In re Marriage of Chen`,type:`Family`,filed:`2024-04-02`},{caseNumber:`23PR008812`,title:`Estate of O'Donnell`,type:`Probate`,filed:`2023-11-20`},{caseNumber:`24CV013002`,title:`Patel v. SVT Logistics`,type:`Civil`,filed:`2024-05-08`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-basic-demo`]],decls:1,vars:2,consts:[[3,`columns`,`rows`]],template:function(e,a){e&1&&uc(0,`scsc-table`,0),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)},dependencies:[Za],encapsulation:2})};var Te=()=>[10,25,50];var q=class s{columns=[{key:`receipt`,header:`Receipt`,rowHeader:!0,hideable:!1,width:`9rem`},{key:`caseNumber`,header:`Case No.`,sortable:!0,width:`9rem`},{key:`payer`,header:`Payer`,sortable:!0},{key:`method`,header:`Method`,hidden:!0},{key:`amount`,header:`Amount`,type:`currency`,sortable:!0,width:`8rem`},{key:`paidAt`,header:`Paid`,type:`datetime`,sortable:!0,width:`12rem`}];rows=Array.from({length:37},(t,e)=>({id:`r${e}`,receipt:`R-2026-${String(118200+e).padStart(6,`0`)}`,caseNumber:`24SC00${String(700+e*3)}`,payer:[`Linh Nguyen`,`Maria Alvarez`,`Wei Chen`,`Kathleen O’Donnell`][e%4],method:e%2?`Card`:`eCheck`,amount:[435,60,90,150][e%4],paidAt:`2026-09-${String(1+e%29).padStart(2,`0`)}T${String(8+e%9).padStart(2,`0`)}:15:00`}));static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-controls-demo`]],decls:3,vars:5,consts:[[`label`,`Fee receipts`,`searchable`,``,`columnMenu`,``,`exportable`,``,`exportFilename`,`fee-receipts.csv`,`selectable`,`multi`,`paginator`,`pages`,3,`columns`,`rows`,`pageSize`,`pageSizeOptions`],[`slot`,`toolbar-end`,`size`,`sm`]],template:function(e,a){e&1&&(Ga(0,`scsc-table`,0)(1,`scsc-button`,1),G_(2,`Record payment`),Lf()()),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)(`pageSize`,10)(`pageSizeOptions`,rM(4,Te))},dependencies:[sn,Za],encapsulation:2})};var De=()=>[`.`];var Ne=s=>({case:s});function Fe(s,t){if(s&1&&(Ga(0,`a`,3),G_(1),Lf()),s&2){let e=t.$implicit;Pv(`routerLink`,rM(3,De))(`queryParams`,oM(4,Ne,e.caseNumber)),Jb(),nD(e.caseNumber)}}function xe(s,t){if(s&1&&uc(0,`scsc-status-badge`,4),s&2){let e=t.value;Pv(`status`,e)}}var U=class s{columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`10rem`},{key:`party`,header:`Responsible party`},{key:`status`,header:`Status`,width:`8rem`},{key:`balance`,header:`Balance due`,type:`currency`,width:`9rem`}];rows=[{caseNumber:`24CV012345`,party:`Maria Alvarez`,status:`active`,balance:435},{caseNumber:`24FL004521`,party:`Wei Chen`,status:`pending`,balance:60},{caseNumber:`23PR008812`,party:`Estate of O'Donnell`,status:`closed`,balance:0},{caseNumber:`24SC000731`,party:`Linh Nguyen`,status:`dismissed`,balance:0}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-custom-cells-demo`]],decls:3,vars:4,consts:[[`label`,`Balances due`,3,`columns`,`rows`],[`class`,`link link-primary tnum`,3,`routerLink`,`queryParams`,4,`scscCell`],[3,`scscCell`],[1,`link`,`link-primary`,`tnum`,3,`routerLink`,`queryParams`],[3,`status`]],template:function(e,a){e&1&&(Ga(0,`scsc-table`,0),Ov(1,Fe,2,6,`a`,1)(2,xe,1,1,`ng-template`,2),Lf()),e&2&&(Pv(`columns`,a.columns)(`rows`,a.rows),Jb(),Pv(`scscCell`,`caseNumber`),Jb(),Pv(`scscCell`,`status`))},dependencies:[nu,da,$a,Za],encapsulation:2})};var Re=s=>({term:`Judicial officer`,value:s});var Ae=s=>({term:`Parties`,value:s});var Pe=s=>({term:`Clerk notes`,value:s});var Me=(s,t,e)=>[s,t,e];function _e(s,t){if(s&1&&uc(0,`scsc-description-list`,2),s&2){let e=t.$implicit;Pv(`items`,sM(7,Me,oM(1,Re,e.judge),oM(3,Ae,e.parties),oM(5,Pe,e.notes)))}}var J=class s{columns=[{key:`time`,header:`Time`,width:`6rem`},{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`9rem`},{key:`title`,header:`Title`},{key:`department`,header:`Dept.`,width:`5rem`}];rows=[{id:`h1`,time:`08:30`,caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`,department:`21`,judge:`Hon. M. Okafor`,parties:`Maria Alvarez; Northgate Properties LLC`,notes:`Interpreter (Spanish) requested.`},{id:`h2`,time:`09:00`,caseNumber:`24FL004521`,title:`In re Marriage of Chen`,department:`5`,judge:`Hon. R. Silva`,parties:`Wei Chen; Lin Chen`,notes:`Remote appearance approved.`},{id:`h3`,time:`10:30`,caseNumber:`23PR008812`,title:`Estate of O'Donnell`,department:`12`,judge:`Hon. A. Patel`,parties:`Kathleen O'Donnell, executor`,notes:`Continued from Aug 14.`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-expandable-demo`]],decls:2,vars:2,consts:[[`label`,`Hearings today`,`expandable`,``,3,`columns`,`rows`],[3,`items`,4,`scscRowDetail`],[3,`items`]],template:function(e,a){e&1&&(Ga(0,`scsc-table`,0),Ov(1,_e,1,11,`scsc-description-list`,1),Lf()),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)},dependencies:[NP,Bi,Za],encapsulation:2})};var se=[`Complaint`,`Answer`,`Motion to compel`,`Declaration`,`Proof of service`];var Ce=[`Accepted`,`Pending review`,`Rejected`];var K=class s{columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,sortable:!0,width:`9rem`},{key:`document`,header:`Document`,sortable:!0,filter:{type:`enum`,options:se.map(t=>({value:t,label:t}))}},{key:`status`,header:`Status`,type:`status`,filter:{type:`enum`,options:Ce.map(t=>({value:t,label:t}))}},{key:`eFiled`,header:`E-filed`,type:`boolean`,filter:{type:`boolean`}},{key:`fee`,header:`Fee`,type:`currency`,sortable:!0,filter:{type:`number-range`}},{key:`filed`,header:`Filed`,type:`date`,sortable:!0,filter:{type:`date-range`}}];rows=Array.from({length:23},(t,e)=>({id:`f${e}`,caseNumber:`24CV0${String(12001+e*37).padStart(5,`0`)}`,document:se[e%se.length],status:Ce[e*7%3],fee:[0,60,435,90][e%4],filed:`2026-09-${String(1+e%28).padStart(2,`0`)}`,eFiled:e%3!==0}));static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-filters-demo`]],decls:1,vars:3,consts:[[`label`,`Filings this month`,`searchable`,``,`searchPlaceholder`,`Search case or document…`,`paginator`,`pages`,3,`columns`,`rows`,`pageSize`]],template:function(e,a){e&1&&uc(0,`scsc-table`,0),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)(`pageSize`,8)},dependencies:[Za],encapsulation:2})};var He=(s,t)=>t.value;function Le(s,t){if(s&1&&(Ga(0,`option`,3),G_(1),Lf()),s&2){let e=t.$implicit,a=y_();Pv(`value`,e.value)(`selected`,a.width()===e.value),Jb(),nD(e.label)}}var Q=class s{widths=[{label:`Full`,value:`100%`},{label:`640px`,value:`40rem`},{label:`360px`,value:`22.5rem`}];width=q$1(`100%`);columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`9rem`},{key:`title`,header:`Title`,priority:1,minWidth:`12rem`},{key:`time`,header:`Time`,priority:2,width:`5rem`},{key:`department`,header:`Dept.`,priority:3,width:`5rem`},{key:`judge`,header:`Judicial officer`,priority:4,minWidth:`10rem`},{key:`type`,header:`Hearing type`,priority:5,minWidth:`10rem`}];rows=[{id:`h1`,caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`,time:`08:30`,department:`21`,judge:`Hon. M. Okafor`,type:`Case management`},{id:`h2`,caseNumber:`24FL004521`,title:`In re Marriage of Chen`,time:`09:00`,department:`5`,judge:`Hon. R. Silva`,type:`Request for order`},{id:`h3`,caseNumber:`23PR008812`,title:`Estate of O'Donnell`,time:`10:30`,department:`12`,judge:`Hon. A. Patel`,type:`Probate review`}];actions=[{id:`open`,label:`Open case`,icon:`action.view`},{id:`continue`,label:`Continue hearing`,icon:`status.scheduled`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-responsive-demo`]],decls:8,vars:8,consts:[[1,`flex`,`flex-col`,`gap-4`],[`label`,`Container width`,`for`,`table-width`,1,`max-w-xs`],[`id`,`table-width`,`scsc-select`,``,`size`,`sm`,3,`change`],[3,`value`,`selected`],[1,`flex`,`flex-col`,`gap-6`],[`label`,`Hearings (stacks into cards below md)`,`responsive`,`stack`,`selectable`,`multi`,3,`columns`,`rows`,`rowActions`],[`label`,`Hearings (drops low-priority columns)`,`responsive`,`priority`,3,`columns`,`rows`,`rowActions`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(o){return a.width.set(o.target.value)}),o_(3,Le,2,3,`option`,3,He),Lf()(),Ga(5,`div`,4),uc(6,`scsc-table`,5)(7,`scsc-table`,6),Lf()()),e&2&&(Jb(3),i_(a.widths),Jb(2),Zv(`max-width`,a.width()),Jb(),Pv(`columns`,a.columns)(`rows`,a.rows)(`rowActions`,a.actions),Jb(),Pv(`columns`,a.columns)(`rows`,a.rows)(`rowActions`,a.actions))},dependencies:[Vn,On,Za],encapsulation:2})};var G=class s$1{toasts=g(Lr);label=t=>`${t.document}, ${t.caseNumber}`;columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`9rem`},{key:`document`,header:`Document`},{key:`status`,header:`Status`,type:`status`,width:`8rem`}];filings=q$1([{id:`f1`,caseNumber:`24CV012345`,document:`Motion to compel`,status:`pending`},{id:`f2`,caseNumber:`24FL004521`,document:`Declaration of service`,status:`filed`},{id:`f3`,caseNumber:`23PR008812`,document:`Petition for probate`,status:`sealed`}]);actions=[{id:`review`,label:`Review`,icon:`action.view`,handler:t=>this.toasts.info(`Opened ${t.document}.`)},{id:`accept`,label:`Accept`,icon:`action.check`,visible:t=>t.status===`pending`,handler:t=>this.setStatus(t,`filed`)},{id:`download`,label:`Download PDF`,icon:`action.download`},{id:`seal`,label:`Seal`,icon:`action.lock`,disabled:t=>t.status===`sealed`?`Already sealed by court order`:!1,handler:t=>this.setStatus(t,`sealed`)},{id:`reject`,label:`Reject filing`,icon:`action.delete`,tone:`danger`,separatorBefore:!0,confirm:t=>({title:`Reject ${t.document}?`,message:`The filer is notified and must file again.`,confirmText:`Reject filing`,tone:`error`}),handler:t=>this.filings.update(e=>e.filter(a=>a.id!==t.id))}];setStatus(t,e){this.filings.update(a=>a.map(c=>c.id===t.id?s(r({},c),{status:e}):c))}static ɵfac=function(e){return new(e||s$1)};static ɵcmp=Af({type:s$1,selectors:[[`app-table-row-actions-demo`]],decls:1,vars:4,consts:[[`label`,`Filings awaiting review`,3,`columns`,`rows`,`rowActions`,`rowLabel`]],template:function(e,a){e&1&&uc(0,`scsc-table`,0),e&2&&Pv(`columns`,a.columns)(`rows`,a.filings())(`rowActions`,a.actions)(`rowLabel`,a.label)},dependencies:[Za],encapsulation:2})};var X=class s$2{toasts=g(Lr);floating=!1;taskLabel=t=>`${t.task} for ${t.caseNumber}`;columns=[{key:`task`,header:`Task`,rowHeader:!0},{key:`caseNumber`,header:`Case No.`,width:`9rem`},{key:`assignee`,header:`Assigned to`,width:`10rem`},{key:`due`,header:`Due`,type:`date`,sortable:!0,width:`8rem`}];tasks=q$1(Array.from({length:12},(t,e)=>({id:`t${e}`,task:[`Review filing`,`Issue notice`,`Schedule hearing`,`Scan exhibits`][e%4],caseNumber:`24FL00${4500+e*3}`,assignee:e%3?`Unassigned`:`J. Ramos`,due:`2026-10-${String(1+e).padStart(2,`0`)}`})));bulk=[{id:`assign`,label:`Assign to me`,icon:`people.user`,handler:(t,e)=>{let a=new Set(e.map(c=>c.id));this.tasks.update(c=>c.map(o=>a.has(o.id)?s(r({},o),{assignee:`J. Ramos`}):o)),this.toasts.success(`${e.length} tasks assigned to you.`)}},{id:`complete`,label:`Mark complete`,icon:`action.check`,tone:`danger`,confirm:!0,handler:(t,e)=>{let a=new Set(e.map(c=>c.id));this.tasks.update(c=>c.filter(o=>!a.has(o.id)))}}];static ɵfac=function(e){return new(e||s$2)};static ɵcmp=Af({type:s$2,selectors:[[`app-table-selection-demo`]],decls:4,vars:7,consts:[[1,`flex`,`flex-col`,`gap-3`],[`label`,`Floating bulk bar`,`for`,`floating-bar`],[`id`,`floating-bar`,`type`,`checkbox`,`scsc-switch`,``,3,`ngModelChange`,`ngModel`],[`label`,`Clerk tasks`,`selectable`,`multi`,`searchable`,``,`paginator`,`pages`,3,`columns`,`rows`,`rowLabel`,`bulkActions`,`bulkBar`,`pageSize`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`input`,2),HS(),sD(`ngModelChange`,function(o){return Y_(a.floating,o)||(a.floating=o),o}),Lf()(),uc(3,`scsc-table`,3),Lf()),e&2&&(Jb(2),iD(`ngModel`,a.floating),zS(),Jb(),Pv(`columns`,a.columns)(`rows`,a.tasks())(`rowLabel`,a.taskLabel)(`bulkActions`,a.bulk)(`bulkBar`,a.floating?`floating`:`toolbar`)(`pageSize`,5))},dependencies:[Gue,ez,Hue,zz,Vn,Bo,Za],encapsulation:2})};var Oe=()=>[10,25,50];var $e=Array.from({length:1234},(s,t)=>({caseNumber:`24CV${String(1e5+t*7).slice(-6)}`,title:[`Alvarez v. Northgate`,`Patel v. SVT Logistics`,`In re Chen`,`Nguyen v. Bayside`][t%4],status:[`active`,`pending`,`closed`][t%3],filed:`2026-${String(1+t%9).padStart(2,`0`)}-${String(1+t%28).padStart(2,`0`)}`}));function Ve(s,t,e){return new Promise((a,c)=>{let o=setTimeout(()=>{if(t)return c(new Error(`503 Service Unavailable`));let re=s.search.toLowerCase(),oe=s.filters.status,F=$e.filter(C=>(!re||`${C.caseNumber} ${C.title}`.toLowerCase().includes(re))&&(!oe?.length||oe.includes(C.status)));for(let C of[...s.sort].reverse()){let ie=C.key;F=[...F].sort((ve,ke)=>ve[ie].localeCompare(ke[ie])*(C.dir===`asc`?1:-1))}let ne=s.cursor?Number(s.cursor):s.page*s.pageSize,ae=ne+s.pageSize;a({rows:F.slice(ne,ae),total:F.length,nextCursor:ae<F.length?String(ae):null})},700);e.addEventListener(`abort`,()=>clearTimeout(o))})}var Y=class s{toasts=g(Lr);failNext=!1;useCursor=!1;columns=[{key:`caseNumber`,header:`Case No.`,rowHeader:!0,sortable:!0,width:`9rem`},{key:`title`,header:`Title`,sortable:!0},{key:`status`,header:`Status`,type:`status`,width:`8rem`,filter:{type:`enum`,options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`},{value:`closed`,label:`Closed`}]}},{key:`filed`,header:`Filed`,type:`date`,sortable:!0,width:`8rem`}];state=TP({mode:`server`,rowKey:t=>t.caseNumber,pageSize:10,page:()=>this.cases.hasValue()?this.cases.value():void 0,loading:()=>this.cases.isLoading(),error:()=>this.cases.error()});cases=vM({params:()=>this.state.query(),loader:({params:t,abortSignal:e})=>{let a=this.failNext;return this.failNext=!1,Ve(t,a,e)}});bulk=[{id:`reassign`,label:`Reassign`,icon:`people.user`,handler:t=>this.toasts.success(t.mode===`all-matching`?`Reassigning all ${t.count} matching cases on the server.`:`Reassigned ${t.count} cases.`)}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-server-demo`]],decls:6,vars:8,consts:[[1,`flex`,`flex-col`,`gap-3`],[`label`,`Fail the next request`,`for`,`fail-next`],[`id`,`fail-next`,`type`,`checkbox`,`scsc-switch`,``,3,`ngModelChange`,`ngModel`],[`label`,`Load more with a cursor`,`for`,`use-cursor`],[`id`,`use-cursor`,`type`,`checkbox`,`scsc-switch`,``,3,`ngModelChange`,`ngModel`],[`label`,`All civil cases`,`searchable`,``,`selectable`,`multi`,`exportable`,``,3,`retry`,`exportRequest`,`columns`,`state`,`bulkActions`,`paginator`,`pageSizeOptions`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`input`,2),HS(),sD(`ngModelChange`,function(o){return Y_(a.failNext,o)||(a.failNext=o),o}),Lf()(),Ga(3,`scsc-form-field`,3)(4,`input`,4),HS(),sD(`ngModelChange`,function(o){return Y_(a.useCursor,o)||(a.useCursor=o),o}),Lf()(),Ga(5,`scsc-table`,5),lc(`retry`,function(){return a.cases.reload()})(`exportRequest`,function(o){return a.toasts.info(`The server builds `+o.scope+` as CSV.`)}),Lf()()),e&2&&(Jb(2),iD(`ngModel`,a.failNext),zS(),Jb(2),iD(`ngModel`,a.useCursor),zS(),Jb(),Pv(`columns`,a.columns)(`state`,a.state)(`bulkActions`,a.bulk)(`paginator`,a.useCursor?`more`:`pages`)(`pageSizeOptions`,rM(7,Oe)))},dependencies:[Gue,ez,Hue,zz,Vn,Bo,Za],encapsulation:2})};var Z=class s{columns=[{key:`caseNumber`,header:`Case No.`,sortable:!0,rowHeader:!0,width:`10rem`},{key:`title`,header:`Title`,sortable:!0},{key:`department`,header:`Dept.`,sortable:!0,type:`number`,width:`6rem`},{key:`filed`,header:`Filed`,sortable:!0,type:`date`,width:`8rem`}];rows=[{caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`,department:`21`,filed:`2024-03-12`},{caseNumber:`24FL004521`,title:`In re Marriage of Chen`,department:`5`,filed:`2024-04-02`},{caseNumber:`23PR008812`,title:`Estate of O'Donnell`,department:`12`,filed:`2023-11-20`},{caseNumber:`24CV013002`,title:`Patel v. SVT Logistics`,department:`21`,filed:`2024-05-08`},{caseNumber:`24SC000731`,title:`Nguyen v. Bayside Auto`,department:`3`,filed:`2024-01-29`}];initialSort=[{key:`department`,dir:`asc`},{key:`filed`,dir:`desc`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-sortable-demo`]],decls:1,vars:3,consts:[[`label`,`Open cases`,`sort`,`multi`,3,`columns`,`rows`,`defaultSort`]],template:function(e,a){e&1&&uc(0,`scsc-table`,0),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)(`defaultSort`,a.initialSort)},dependencies:[Za],encapsulation:2})};var ze=()=>[];function je(s,t){if(s&1&&(Ga(0,`option`,3),G_(1),Lf()),s&2){let e=t.$implicit,a=y_();Pv(`value`,e)(`selected`,a.view()===e),Jb(),nD(e)}}function Be(s,t){s&1&&uc(0,`scsc-empty-state`,6)}var Ie=[{id:`h1`,time:`08:30`,caseNumber:`24CV012345`,title:`Alvarez v. Northgate Properties`},{id:`h2`,time:`09:00`,caseNumber:`24FL004521`,title:`In re Marriage of Chen`}];var ee=class s{views=[`rows`,`loading`,`empty`,`error`];view=q$1(`rows`);rows=Ie;columns=[{key:`time`,header:`Time`,width:`6rem`},{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`9rem`},{key:`title`,header:`Title`}];static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-states-demo`]],decls:7,vars:5,consts:[[1,`flex`,`flex-col`,`gap-4`],[`label`,`Show`,`for`,`table-state`,1,`max-w-xs`],[`id`,`table-state`,`scsc-select`,``,`size`,`sm`,3,`change`],[3,`value`,`selected`],[`label`,`Hearings on Friday`,3,`retry`,`columns`,`rows`,`loading`,`error`],[`icon`,`court.hearing`,`title`,`No hearings on Friday`,`message`,`Department 21 is dark for training. Try another day.`,4,`scscEmpty`],[`icon`,`court.hearing`,`title`,`No hearings on Friday`,`message`,`Department 21 is dark for training. Try another day.`]],template:function(e,a){e&1&&(Ga(0,`div`,0)(1,`scsc-form-field`,1)(2,`select`,2),lc(`change`,function(o){return a.view.set(o.target.value)}),o_(3,je,2,3,`option`,3,r_),Lf()(),Ga(5,`scsc-table`,4),lc(`retry`,function(){return a.view.set(`rows`)}),Ov(6,Be,1,0,`scsc-empty-state`,5),Lf()()),e&2&&(Jb(3),i_(a.views),Jb(2),Pv(`columns`,a.columns)(`rows`,a.view()===`rows`?a.rows:rM(4,ze))(`loading`,a.view()===`loading`)(`error`,a.view()===`error`?`The calendar service did not answer.`:null))},dependencies:[$i,Xa,Vn,On,Za],encapsulation:2})};var te=class s{columns=[{key:`time`,header:`Time`,type:`number`,width:`6rem`},{key:`caseNumber`,header:`Case No.`,rowHeader:!0,width:`10rem`},{key:`title`,header:`Title`},{key:`department`,header:`Dept.`,width:`6rem`}];rows=Array.from({length:14},(t,e)=>({time:`${String(8+Math.floor(e/2)).padStart(2,`0`)}:${e%2?`30`:`00`}`,caseNumber:`24CV0${String(12345+e*7).padStart(5,`0`)}`,title:[`Alvarez v. Northgate`,`In re Chen`,`Estate of O'Donnell`,`Patel v. SVT`][e%4],department:String(21+e%3)}));static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-table-sticky-demo`]],decls:1,vars:3,consts:[[`maxHeight`,`18rem`,`label`,`Hearings today`,`stickyHeader`,``,3,`columns`,`rows`,`zebra`]],template:function(e,a){e&1&&uc(0,`scsc-table`,0),e&2&&Pv(`columns`,a.columns)(`rows`,a.rows)(`zebra`,!1)},dependencies:[Za],encapsulation:2})};var p={"table-basic":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscColumn, ScscTable } from '@scscourt/design';

interface CaseRow {
  caseNumber: string;
  title: string;
  type: string;
  filed: string;
}

@Component({
  selector: 'app-table-basic-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTable],
  template: \`<scsc-table [columns]="columns" [rows]="rows" />\`,
})
export class TableBasicDemo {
  protected readonly columns: ScscColumn<CaseRow>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '10rem' },
    { key: 'title', header: 'Title' },
    { key: 'type', header: 'Type', width: '9rem' },
    { key: 'filed', header: 'Filed', type: 'date', width: '8rem' },
  ];

  protected readonly rows: CaseRow[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Properties',
      type: 'Civil',
      filed: '2024-03-12',
    },
    {
      caseNumber: '24FL004521',
      title: 'In re Marriage of Chen',
      type: 'Family',
      filed: '2024-04-02',
    },
    {
      caseNumber: '23PR008812',
      title: "Estate of O'Donnell",
      type: 'Probate',
      filed: '2023-11-20',
    },
    {
      caseNumber: '24CV013002',
      title: 'Patel v. SVT Logistics',
      type: 'Civil',
      filed: '2024-05-08',
    },
  ];
}
`,html:`<scsc-table [columns]="columns" [rows]="rows" />
`},"table-controls":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscButton, ScscColumn, ScscTable } from '@scscourt/design';

interface Fee {
  id: string;
  receipt: string;
  caseNumber: string;
  payer: string;
  method: string;
  amount: number;
  paidAt: string;
}

@Component({
  selector: 'app-table-controls-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscTable],
  template: \`
    <!-- View: show/hide columns and switch density. Export: CSV of all, matching or selected rows. -->
    <scsc-table
      label="Fee receipts"
      [columns]="columns"
      [rows]="rows"
      searchable
      columnMenu
      exportable
      exportFilename="fee-receipts.csv"
      selectable="multi"
      paginator="pages"
      [pageSize]="10"
      [pageSizeOptions]="[10, 25, 50]"
    >
      <scsc-button slot="toolbar-end" size="sm">Record payment</scsc-button>
    </scsc-table>
  \`,
})
export class TableControlsDemo {
  protected readonly columns: ScscColumn<Fee>[] = [
    { key: 'receipt', header: 'Receipt', rowHeader: true, hideable: false, width: '9rem' },
    { key: 'caseNumber', header: 'Case No.', sortable: true, width: '9rem' },
    { key: 'payer', header: 'Payer', sortable: true },
    { key: 'method', header: 'Method', hidden: true },
    { key: 'amount', header: 'Amount', type: 'currency', sortable: true, width: '8rem' },
    { key: 'paidAt', header: 'Paid', type: 'datetime', sortable: true, width: '12rem' },
  ];

  protected readonly rows: Fee[] = Array.from({ length: 37 }, (_, i) => ({
    id: \`r\${i}\`,
    receipt: \`R-2026-\${String(118200 + i).padStart(6, '0')}\`,
    caseNumber: \`24SC00\${String(700 + i * 3)}\`,
    payer: ['Linh Nguyen', 'Maria Alvarez', 'Wei Chen', 'Kathleen O\u2019Donnell'][i % 4],
    method: i % 2 ? 'Card' : 'eCheck',
    amount: [435, 60, 90, 150][i % 4],
    paidAt: \`2026-09-\${String(1 + (i % 29)).padStart(2, '0')}T\${String(8 + (i % 9)).padStart(2, '0')}:15:00\`,
  }));
}
`,html:`<!-- View: show/hide columns and switch density. Export: CSV of all, matching or selected rows. -->
<scsc-table
  label="Fee receipts"
  [columns]="columns"
  [rows]="rows"
  searchable
  columnMenu
  exportable
  exportFilename="fee-receipts.csv"
  selectable="multi"
  paginator="pages"
  [pageSize]="10"
  [pageSizeOptions]="[10, 25, 50]"
>
  <scsc-button slot="toolbar-end" size="sm">Record payment</scsc-button>
</scsc-table>
`},"table-custom-cells":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScscCaseStatus,
  ScscCellDef,
  ScscColumn,
  ScscStatusBadge,
  ScscTable,
} from '@scscourt/design';

interface FeeRow {
  caseNumber: string;
  party: string;
  status: ScscCaseStatus;
  balance: number;
}

@Component({
  selector: 'app-table-custom-cells-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScscCellDef, ScscStatusBadge, ScscTable],
  template: \`
    <!-- One template per column key; the currency column needs none (type: 'currency'). -->
    <scsc-table label="Balances due" [columns]="columns" [rows]="rows">
      <a
        *scscCell="'caseNumber'; let row"
        [routerLink]="['.']"
        [queryParams]="{ case: row.caseNumber }"
        class="link link-primary tnum"
        >{{ row.caseNumber }}</a
      >
      <ng-template [scscCell]="'status'" let-value="value">
        <scsc-status-badge [status]="value" />
      </ng-template>
    </scsc-table>
  \`,
})
export class TableCustomCellsDemo {
  protected readonly columns: ScscColumn<FeeRow>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '10rem' },
    { key: 'party', header: 'Responsible party' },
    { key: 'status', header: 'Status', width: '8rem' },
    { key: 'balance', header: 'Balance due', type: 'currency', width: '9rem' },
  ];

  protected readonly rows: FeeRow[] = [
    { caseNumber: '24CV012345', party: 'Maria Alvarez', status: 'active', balance: 435 },
    { caseNumber: '24FL004521', party: 'Wei Chen', status: 'pending', balance: 60 },
    { caseNumber: '23PR008812', party: "Estate of O'Donnell", status: 'closed', balance: 0 },
    { caseNumber: '24SC000731', party: 'Linh Nguyen', status: 'dismissed', balance: 0 },
  ];
}
`,html:`<!-- One template per column key; the currency column needs none (type: 'currency'). -->
<scsc-table label="Balances due" [columns]="columns" [rows]="rows">
  <a
    *scscCell="'caseNumber'; let row"
    [routerLink]="['.']"
    [queryParams]="{ case: row.caseNumber }"
    class="link link-primary tnum"
    >{{ row.caseNumber }}</a
  >
  <ng-template [scscCell]="'status'" let-value="value">
    <scsc-status-badge [status]="value" />
  </ng-template>
</scsc-table>
`},"table-expandable":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscColumn, ScscDescriptionList, ScscRowDetailDef, ScscTable } from '@scscourt/design';

interface Hearing {
  id: string;
  time: string;
  caseNumber: string;
  title: string;
  department: string;
  judge: string;
  parties: string;
  notes: string;
}

@Component({
  selector: 'app-table-expandable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscDescriptionList, ScscRowDetailDef, ScscTable],
  template: \`
    <scsc-table label="Hearings today" [columns]="columns" [rows]="rows" expandable>
      <scsc-description-list
        *scscRowDetail="let row"
        [items]="[
          { term: 'Judicial officer', value: row.judge },
          { term: 'Parties', value: row.parties },
          { term: 'Clerk notes', value: row.notes },
        ]"
      />
    </scsc-table>
  \`,
})
export class TableExpandableDemo {
  protected readonly columns: ScscColumn<Hearing>[] = [
    { key: 'time', header: 'Time', width: '6rem' },
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '9rem' },
    { key: 'title', header: 'Title' },
    { key: 'department', header: 'Dept.', width: '5rem' },
  ];

  protected readonly rows: Hearing[] = [
    {
      id: 'h1',
      time: '08:30',
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Properties',
      department: '21',
      judge: 'Hon. M. Okafor',
      parties: 'Maria Alvarez; Northgate Properties LLC',
      notes: 'Interpreter (Spanish) requested.',
    },
    {
      id: 'h2',
      time: '09:00',
      caseNumber: '24FL004521',
      title: 'In re Marriage of Chen',
      department: '5',
      judge: 'Hon. R. Silva',
      parties: 'Wei Chen; Lin Chen',
      notes: 'Remote appearance approved.',
    },
    {
      id: 'h3',
      time: '10:30',
      caseNumber: '23PR008812',
      title: "Estate of O'Donnell",
      department: '12',
      judge: 'Hon. A. Patel',
      parties: "Kathleen O'Donnell, executor",
      notes: 'Continued from Aug 14.',
    },
  ];
}
`,html:`<scsc-table label="Hearings today" [columns]="columns" [rows]="rows" expandable>
  <scsc-description-list
    *scscRowDetail="let row"
    [items]="[
      { term: 'Judicial officer', value: row.judge },
      { term: 'Parties', value: row.parties },
      { term: 'Clerk notes', value: row.notes },
    ]"
  />
</scsc-table>
`},"table-filters":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscColumn, ScscTable } from '@scscourt/design';

interface Filing {
  id: string;
  caseNumber: string;
  document: string;
  status: string;
  fee: number;
  filed: string;
  eFiled: boolean;
}

const DOCS = ['Complaint', 'Answer', 'Motion to compel', 'Declaration', 'Proof of service'];
const STATUSES = ['Accepted', 'Pending review', 'Rejected'];

@Component({
  selector: 'app-table-filters-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTable],
  template: \`
    <!-- A column's "filter" adds a facet to the built-in filter bar; ranges open in "More filters". -->
    <scsc-table
      label="Filings this month"
      [columns]="columns"
      [rows]="rows"
      searchable
      searchPlaceholder="Search case or document\u2026"
      paginator="pages"
      [pageSize]="8"
    />
  \`,
})
export class TableFiltersDemo {
  protected readonly columns: ScscColumn<Filing>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, sortable: true, width: '9rem' },
    {
      key: 'document',
      header: 'Document',
      sortable: true,
      filter: { type: 'enum', options: DOCS.map((d) => ({ value: d, label: d })) },
    },
    {
      key: 'status',
      header: 'Status',
      type: 'status',
      filter: { type: 'enum', options: STATUSES.map((s) => ({ value: s, label: s })) },
    },
    { key: 'eFiled', header: 'E-filed', type: 'boolean', filter: { type: 'boolean' } },
    {
      key: 'fee',
      header: 'Fee',
      type: 'currency',
      sortable: true,
      filter: { type: 'number-range' },
    },
    { key: 'filed', header: 'Filed', type: 'date', sortable: true, filter: { type: 'date-range' } },
  ];

  protected readonly rows: Filing[] = Array.from({ length: 23 }, (_, i) => ({
    id: \`f\${i}\`,
    caseNumber: \`24CV0\${String(12001 + i * 37).padStart(5, '0')}\`,
    document: DOCS[i % DOCS.length],
    status: STATUSES[(i * 7) % 3],
    fee: [0, 60, 435, 90][i % 4],
    filed: \`2026-09-\${String(1 + (i % 28)).padStart(2, '0')}\`,
    eFiled: i % 3 !== 0,
  }));
}
`,html:`<!-- A column's "filter" adds a facet to the built-in filter bar; ranges open in "More filters". -->
<scsc-table
  label="Filings this month"
  [columns]="columns"
  [rows]="rows"
  searchable
  searchPlaceholder="Search case or document\u2026"
  paginator="pages"
  [pageSize]="8"
/>
`},"table-responsive":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscColumn, ScscFormField, ScscRowAction, ScscSelect, ScscTable } from '@scscourt/design';

interface Hearing {
  id: string;
  caseNumber: string;
  title: string;
  time: string;
  department: string;
  judge: string;
  type: string;
}

interface Width {
  label: string;
  value: string;
}

@Component({
  selector: 'app-table-responsive-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscFormField, ScscSelect, ScscTable],
  template: \`
    <div class="flex flex-col gap-4">
      <!-- The tables respond to their own width (a side panel, a card), not the screen's. -->
      <scsc-form-field label="Container width" for="table-width" class="max-w-xs">
        <select
          id="table-width"
          scsc-select
          size="sm"
          (change)="width.set($any($event.target).value)"
        >
          @for (o of widths; track o.value) {
            <option [value]="o.value" [selected]="width() === o.value">{{ o.label }}</option>
          }
        </select>
      </scsc-form-field>
      <div class="flex flex-col gap-6" [style.max-width]="width()">
        <scsc-table
          label="Hearings (stacks into cards below md)"
          responsive="stack"
          [columns]="columns"
          [rows]="rows"
          [rowActions]="actions"
          selectable="multi"
        />
        <scsc-table
          label="Hearings (drops low-priority columns)"
          responsive="priority"
          [columns]="columns"
          [rows]="rows"
          [rowActions]="actions"
        />
      </div>
    </div>
  \`,
})
export class TableResponsiveDemo {
  protected readonly widths: Width[] = [
    { label: 'Full', value: '100%' },
    { label: '640px', value: '40rem' },
    { label: '360px', value: '22.5rem' },
  ];
  protected readonly width = signal('100%');

  protected readonly columns: ScscColumn<Hearing>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '9rem' },
    { key: 'title', header: 'Title', priority: 1, minWidth: '12rem' },
    { key: 'time', header: 'Time', priority: 2, width: '5rem' },
    { key: 'department', header: 'Dept.', priority: 3, width: '5rem' },
    { key: 'judge', header: 'Judicial officer', priority: 4, minWidth: '10rem' },
    { key: 'type', header: 'Hearing type', priority: 5, minWidth: '10rem' },
  ];

  protected readonly rows: Hearing[] = [
    {
      id: 'h1',
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Properties',
      time: '08:30',
      department: '21',
      judge: 'Hon. M. Okafor',
      type: 'Case management',
    },
    {
      id: 'h2',
      caseNumber: '24FL004521',
      title: 'In re Marriage of Chen',
      time: '09:00',
      department: '5',
      judge: 'Hon. R. Silva',
      type: 'Request for order',
    },
    {
      id: 'h3',
      caseNumber: '23PR008812',
      title: "Estate of O'Donnell",
      time: '10:30',
      department: '12',
      judge: 'Hon. A. Patel',
      type: 'Probate review',
    },
  ];

  protected readonly actions: ScscRowAction<Hearing>[] = [
    { id: 'open', label: 'Open case', icon: 'action.view' },
    { id: 'continue', label: 'Continue hearing', icon: 'status.scheduled' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <!-- The tables respond to their own width (a side panel, a card), not the screen's. -->
  <scsc-form-field label="Container width" for="table-width" class="max-w-xs">
    <select
      id="table-width"
      scsc-select
      size="sm"
      (change)="width.set($any($event.target).value)"
    >
      @for (o of widths; track o.value) {
        <option [value]="o.value" [selected]="width() === o.value">{{ o.label }}</option>
      }
    </select>
  </scsc-form-field>
  <div class="flex flex-col gap-6" [style.max-width]="width()">
    <scsc-table
      label="Hearings (stacks into cards below md)"
      responsive="stack"
      [columns]="columns"
      [rows]="rows"
      [rowActions]="actions"
      selectable="multi"
    />
    <scsc-table
      label="Hearings (drops low-priority columns)"
      responsive="priority"
      [columns]="columns"
      [rows]="rows"
      [rowActions]="actions"
    />
  </div>
</div>
`},"table-row-actions":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScscColumn, ScscRowAction, ScscTable, ToastService } from '@scscourt/design';

interface Filing {
  id: string;
  caseNumber: string;
  document: string;
  status: 'pending' | 'filed' | 'sealed';
}

@Component({
  selector: 'app-table-row-actions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTable],
  template: \`
    <!-- The first action is an icon button; the rest are in "More actions for \u2026". -->
    <scsc-table
      label="Filings awaiting review"
      [columns]="columns"
      [rows]="filings()"
      [rowActions]="actions"
      [rowLabel]="label"
    />
  \`,
})
export class TableRowActionsDemo {
  private readonly toasts = inject(ToastService);
  protected readonly label = (f: Filing) => \`\${f.document}, \${f.caseNumber}\`;

  protected readonly columns: ScscColumn<Filing>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '9rem' },
    { key: 'document', header: 'Document' },
    { key: 'status', header: 'Status', type: 'status', width: '8rem' },
  ];

  protected readonly filings = signal<Filing[]>([
    { id: 'f1', caseNumber: '24CV012345', document: 'Motion to compel', status: 'pending' },
    { id: 'f2', caseNumber: '24FL004521', document: 'Declaration of service', status: 'filed' },
    { id: 'f3', caseNumber: '23PR008812', document: 'Petition for probate', status: 'sealed' },
  ]);

  protected readonly actions: ScscRowAction<Filing>[] = [
    {
      id: 'review',
      label: 'Review',
      icon: 'action.view',
      handler: (f) => this.toasts.info(\`Opened \${f.document}.\`),
    },
    {
      id: 'accept',
      label: 'Accept',
      icon: 'action.check',
      visible: (f) => f.status === 'pending',
      handler: (f) => this.setStatus(f, 'filed'),
    },
    { id: 'download', label: 'Download PDF', icon: 'action.download' },
    {
      id: 'seal',
      label: 'Seal',
      icon: 'action.lock',
      disabled: (f) => (f.status === 'sealed' ? 'Already sealed by court order' : false),
      handler: (f) => this.setStatus(f, 'sealed'),
    },
    {
      id: 'reject',
      label: 'Reject filing',
      icon: 'action.delete',
      tone: 'danger',
      separatorBefore: true,
      confirm: (f) => ({
        title: \`Reject \${f.document}?\`,
        message: 'The filer is notified and must file again.',
        confirmText: 'Reject filing',
        tone: 'error',
      }),
      handler: (f) => this.filings.update((list) => list.filter((x) => x.id !== f.id)),
    },
  ];

  private setStatus(f: Filing, status: Filing['status']): void {
    this.filings.update((list) => list.map((x) => (x.id === f.id ? { ...x, status } : x)));
  }
}
`,html:`<!-- The first action is an icon button; the rest are in "More actions for \u2026". -->
<scsc-table
  label="Filings awaiting review"
  [columns]="columns"
  [rows]="filings()"
  [rowActions]="actions"
  [rowLabel]="label"
/>
`},"table-selection":{ts:`import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscBulkAction,
  ScscColumn,
  ScscFormField,
  ScscSwitch,
  ScscTable,
  ToastService,
} from '@scscourt/design';

interface Task {
  id: string;
  task: string;
  caseNumber: string;
  assignee: string;
  due: string;
}

@Component({
  selector: 'app-table-selection-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscSwitch, ScscTable],
  template: \`
    <div class="flex flex-col gap-3">
      <scsc-form-field label="Floating bulk bar" for="floating-bar">
        <input id="floating-bar" type="checkbox" scsc-switch [(ngModel)]="floating" />
      </scsc-form-field>
      <!-- Selecting rows swaps the toolbar for the bulk bar in place, at the same height. -->
      <scsc-table
        label="Clerk tasks"
        [columns]="columns"
        [rows]="tasks()"
        selectable="multi"
        [rowLabel]="taskLabel"
        [bulkActions]="bulk"
        [bulkBar]="floating ? 'floating' : 'toolbar'"
        searchable
        paginator="pages"
        [pageSize]="5"
      />
    </div>
  \`,
})
export class TableSelectionDemo {
  private readonly toasts = inject(ToastService);
  protected floating = false;
  protected readonly taskLabel = (t: Task) => \`\${t.task} for \${t.caseNumber}\`;

  protected readonly columns: ScscColumn<Task>[] = [
    { key: 'task', header: 'Task', rowHeader: true },
    { key: 'caseNumber', header: 'Case No.', width: '9rem' },
    { key: 'assignee', header: 'Assigned to', width: '10rem' },
    { key: 'due', header: 'Due', type: 'date', sortable: true, width: '8rem' },
  ];

  protected readonly tasks = signal<Task[]>(
    Array.from({ length: 12 }, (_, i) => ({
      id: \`t\${i}\`,
      task: ['Review filing', 'Issue notice', 'Schedule hearing', 'Scan exhibits'][i % 4],
      caseNumber: \`24FL00\${4500 + i * 3}\`,
      assignee: i % 3 ? 'Unassigned' : 'J. Ramos',
      due: \`2026-10-\${String(1 + i).padStart(2, '0')}\`,
    })),
  );

  protected readonly bulk: ScscBulkAction<Task, string>[] = [
    {
      id: 'assign',
      label: 'Assign to me',
      icon: 'people.user',
      handler: (_selection, rows) => {
        const ids = new Set(rows.map((r) => r.id));
        this.tasks.update((list) =>
          list.map((t) => (ids.has(t.id) ? { ...t, assignee: 'J. Ramos' } : t)),
        );
        this.toasts.success(\`\${rows.length} tasks assigned to you.\`);
      },
    },
    {
      id: 'complete',
      label: 'Mark complete',
      icon: 'action.check',
      tone: 'danger',
      confirm: true,
      handler: (_selection, rows) => {
        const ids = new Set(rows.map((r) => r.id));
        this.tasks.update((list) => list.filter((t) => !ids.has(t.id)));
      },
    },
  ];
}
`,html:`<div class="flex flex-col gap-3">
  <scsc-form-field label="Floating bulk bar" for="floating-bar">
    <input id="floating-bar" type="checkbox" scsc-switch [(ngModel)]="floating" />
  </scsc-form-field>
  <!-- Selecting rows swaps the toolbar for the bulk bar in place, at the same height. -->
  <scsc-table
    label="Clerk tasks"
    [columns]="columns"
    [rows]="tasks()"
    selectable="multi"
    [rowLabel]="taskLabel"
    [bulkActions]="bulk"
    [bulkBar]="floating ? 'floating' : 'toolbar'"
    searchable
    paginator="pages"
    [pageSize]="5"
  />
</div>
`},"table-server":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  type ResourceRef,
  inject,
  resource,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScscBulkAction,
  ScscColumn,
  ScscFormField,
  ScscSwitch,
  ScscTable,
  ScscTablePage,
  ScscTableQuery,
  ScscTableState,
  ToastService,
  createTableState,
} from '@scscourt/design';

interface Case {
  caseNumber: string;
  title: string;
  status: 'active' | 'pending' | 'closed';
  filed: string;
}

/** 1,234 cases "on the server". Swap \`fetchCases\` for \`httpResource\` + \`toHttpParams(query)\`. */
const ALL: Case[] = Array.from({ length: 1234 }, (_, i) => ({
  caseNumber: \`24CV\${String(100000 + i * 7).slice(-6)}\`,
  title: ['Alvarez v. Northgate', 'Patel v. SVT Logistics', 'In re Chen', 'Nguyen v. Bayside'][
    i % 4
  ],
  status: (['active', 'pending', 'closed'] as const)[i % 3],
  filed: \`2026-\${String(1 + (i % 9)).padStart(2, '0')}-\${String(1 + (i % 28)).padStart(2, '0')}\`,
}));

function fetchCases(
  q: ScscTableQuery,
  fail: boolean,
  signal: AbortSignal,
): Promise<ScscTablePage<Case>> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (fail) return reject(new Error('503 Service Unavailable'));
      const term = q.search.toLowerCase();
      const status = q.filters['status'] as string[] | undefined;
      let rows = ALL.filter(
        (c) =>
          (!term || \`\${c.caseNumber} \${c.title}\`.toLowerCase().includes(term)) &&
          (!status?.length || status.includes(c.status)),
      );
      for (const s of [...q.sort].reverse()) {
        const key = s.key as keyof Case;
        rows = [...rows].sort((a, b) => a[key].localeCompare(b[key]) * (s.dir === 'asc' ? 1 : -1));
      }
      // Keyset paging: the cursor is where the next page starts (offset paging without one).
      const start = q.cursor ? Number(q.cursor) : q.page * q.pageSize;
      const end = start + q.pageSize;
      resolve({
        rows: rows.slice(start, end),
        total: rows.length,
        nextCursor: end < rows.length ? String(end) : null,
      });
    }, 700);
    signal.addEventListener('abort', () => clearTimeout(timer));
  });
}

@Component({
  selector: 'app-table-server-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScscFormField, ScscSwitch, ScscTable],
  template: \`
    <div class="flex flex-col gap-3">
      <scsc-form-field label="Fail the next request" for="fail-next">
        <input id="fail-next" type="checkbox" scsc-switch [(ngModel)]="failNext" />
      </scsc-form-field>
      <scsc-form-field label="Load more with a cursor" for="use-cursor">
        <input id="use-cursor" type="checkbox" scsc-switch [(ngModel)]="useCursor" />
      </scsc-form-field>
      <scsc-table
        label="All civil cases"
        [columns]="columns"
        [state]="state"
        searchable
        selectable="multi"
        [bulkActions]="bulk"
        [paginator]="useCursor ? 'more' : 'pages'"
        [pageSizeOptions]="[10, 25, 50]"
        exportable
        (retry)="cases.reload()"
        (exportRequest)="toasts.info('The server builds ' + $event.scope + ' as CSV.')"
      />
    </div>
  \`,
})
export class TableServerDemo {
  protected readonly toasts = inject(ToastService);
  protected failNext = false;
  protected useCursor = false;

  protected readonly columns: ScscColumn<Case>[] = [
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, sortable: true, width: '9rem' },
    { key: 'title', header: 'Title', sortable: true },
    {
      key: 'status',
      header: 'Status',
      type: 'status',
      width: '8rem',
      filter: {
        type: 'enum',
        options: [
          { value: 'active', label: 'Active' },
          { value: 'pending', label: 'Pending' },
          { value: 'closed', label: 'Closed' },
        ],
      },
    },
    { key: 'filed', header: 'Filed', type: 'date', sortable: true, width: '8rem' },
  ];

  readonly state: ScscTableState<Case, string> = createTableState<Case, string>({
    mode: 'server',
    rowKey: (c) => c.caseNumber,
    pageSize: 10,
    // value() throws while the resource is in error: read it only when there is one.
    page: () => (this.cases.hasValue() ? this.cases.value() : undefined),
    loading: () => this.cases.isLoading(),
    error: () => this.cases.error(),
  });

  readonly cases: ResourceRef<ScscTablePage<Case> | undefined> = resource({
    params: () => this.state.query(),
    loader: ({ params, abortSignal }) => {
      const fail = this.failNext;
      this.failNext = false;
      return fetchCases(params, fail, abortSignal);
    },
  });

  protected readonly bulk: ScscBulkAction<Case, string>[] = [
    {
      id: 'reassign',
      label: 'Reassign',
      icon: 'people.user',
      // "All matching" selections have no rows on the client: send the query and exceptions.
      handler: (selection) =>
        this.toasts.success(
          selection.mode === 'all-matching'
            ? \`Reassigning all \${selection.count} matching cases on the server.\`
            : \`Reassigned \${selection.count} cases.\`,
        ),
    },
  ];
}
`,html:`<div class="flex flex-col gap-3">
  <scsc-form-field label="Fail the next request" for="fail-next">
    <input id="fail-next" type="checkbox" scsc-switch [(ngModel)]="failNext" />
  </scsc-form-field>
  <scsc-form-field label="Load more with a cursor" for="use-cursor">
    <input id="use-cursor" type="checkbox" scsc-switch [(ngModel)]="useCursor" />
  </scsc-form-field>
  <scsc-table
    label="All civil cases"
    [columns]="columns"
    [state]="state"
    searchable
    selectable="multi"
    [bulkActions]="bulk"
    [paginator]="useCursor ? 'more' : 'pages'"
    [pageSizeOptions]="[10, 25, 50]"
    exportable
    (retry)="cases.reload()"
    (exportRequest)="toasts.info('The server builds ' + $event.scope + ' as CSV.')"
  />
</div>
`},"table-sortable":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscColumn, ScscSort, ScscTable } from '@scscourt/design';

interface CaseRow {
  caseNumber: string;
  title: string;
  department: string;
  filed: string;
}

@Component({
  selector: 'app-table-sortable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTable],
  template: \`
    <!-- Click a header to sort; Shift+click adds a second key (or use the Sort menu). -->
    <scsc-table
      label="Open cases"
      sort="multi"
      [columns]="columns"
      [rows]="rows"
      [defaultSort]="initialSort"
    />
  \`,
})
export class TableSortableDemo {
  protected readonly columns: ScscColumn<CaseRow>[] = [
    { key: 'caseNumber', header: 'Case No.', sortable: true, rowHeader: true, width: '10rem' },
    { key: 'title', header: 'Title', sortable: true },
    { key: 'department', header: 'Dept.', sortable: true, type: 'number', width: '6rem' },
    { key: 'filed', header: 'Filed', sortable: true, type: 'date', width: '8rem' },
  ];

  protected readonly rows: CaseRow[] = [
    {
      caseNumber: '24CV012345',
      title: 'Alvarez v. Northgate Properties',
      department: '21',
      filed: '2024-03-12',
    },
    {
      caseNumber: '24FL004521',
      title: 'In re Marriage of Chen',
      department: '5',
      filed: '2024-04-02',
    },
    {
      caseNumber: '23PR008812',
      title: "Estate of O'Donnell",
      department: '12',
      filed: '2023-11-20',
    },
    {
      caseNumber: '24CV013002',
      title: 'Patel v. SVT Logistics',
      department: '21',
      filed: '2024-05-08',
    },
    {
      caseNumber: '24SC000731',
      title: 'Nguyen v. Bayside Auto',
      department: '3',
      filed: '2024-01-29',
    },
  ];

  protected readonly initialSort: ScscSort[] = [
    { key: 'department', dir: 'asc' },
    { key: 'filed', dir: 'desc' },
  ];
}
`,html:`<!-- Click a header to sort; Shift+click adds a second key (or use the Sort menu). -->
<scsc-table
  label="Open cases"
  sort="multi"
  [columns]="columns"
  [rows]="rows"
  [defaultSort]="initialSort"
/>
`},"table-states":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScscColumn,
  ScscFormField,
  ScscSelect,
  ScscEmptyDef,
  ScscEmptyState,
  ScscTable,
} from '@scscourt/design';

interface Hearing {
  id: string;
  time: string;
  caseNumber: string;
  title: string;
}

type View = 'rows' | 'loading' | 'empty' | 'error';

const ROWS: Hearing[] = [
  { id: 'h1', time: '08:30', caseNumber: '24CV012345', title: 'Alvarez v. Northgate Properties' },
  { id: 'h2', time: '09:00', caseNumber: '24FL004521', title: 'In re Marriage of Chen' },
];

@Component({
  selector: 'app-table-states-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscEmptyDef, ScscEmptyState, ScscFormField, ScscSelect, ScscTable],
  template: \`
    <div class="flex flex-col gap-4">
      <scsc-form-field label="Show" for="table-state" class="max-w-xs">
        <select
          id="table-state"
          scsc-select
          size="sm"
          (change)="view.set($any($event.target).value)"
        >
          @for (o of views; track o) {
            <option [value]="o" [selected]="view() === o">{{ o }}</option>
          }
        </select>
      </scsc-form-field>
      <!-- Loading: skeleton rows, aria-busy and a "Loading\u2026" status. Error: a Retry button. -->
      <scsc-table
        label="Hearings on Friday"
        [columns]="columns"
        [rows]="view() === 'rows' ? rows : []"
        [loading]="view() === 'loading'"
        [error]="view() === 'error' ? 'The calendar service did not answer.' : null"
        (retry)="view.set('rows')"
      >
        <scsc-empty-state
          *scscEmpty
          icon="court.hearing"
          title="No hearings on Friday"
          message="Department 21 is dark for training. Try another day."
        />
      </scsc-table>
    </div>
  \`,
})
export class TableStatesDemo {
  protected readonly views: View[] = ['rows', 'loading', 'empty', 'error'];
  protected readonly view = signal<View>('rows');
  protected readonly rows = ROWS;
  protected readonly columns: ScscColumn<Hearing>[] = [
    { key: 'time', header: 'Time', width: '6rem' },
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '9rem' },
    { key: 'title', header: 'Title' },
  ];
}
`,html:`<div class="flex flex-col gap-4">
  <scsc-form-field label="Show" for="table-state" class="max-w-xs">
    <select
      id="table-state"
      scsc-select
      size="sm"
      (change)="view.set($any($event.target).value)"
    >
      @for (o of views; track o) {
        <option [value]="o" [selected]="view() === o">{{ o }}</option>
      }
    </select>
  </scsc-form-field>
  <!-- Loading: skeleton rows, aria-busy and a "Loading\u2026" status. Error: a Retry button. -->
  <scsc-table
    label="Hearings on Friday"
    [columns]="columns"
    [rows]="view() === 'rows' ? rows : []"
    [loading]="view() === 'loading'"
    [error]="view() === 'error' ? 'The calendar service did not answer.' : null"
    (retry)="view.set('rows')"
  >
    <scsc-empty-state
      *scscEmpty
      icon="court.hearing"
      title="No hearings on Friday"
      message="Department 21 is dark for training. Try another day."
    />
  </scsc-table>
</div>
`},"table-sticky":{ts:`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScscColumn, ScscTable } from '@scscourt/design';

interface HearingRow {
  time: string;
  caseNumber: string;
  title: string;
  department: string;
}

@Component({
  selector: 'app-table-sticky-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscTable],
  template: \`
    <!-- The host is the scroll container: give it a max height and the header sticks. -->
    <scsc-table
      maxHeight="18rem"
      label="Hearings today"
      [columns]="columns"
      [rows]="rows"
      stickyHeader
      [zebra]="false"
    />
  \`,
})
export class TableStickyDemo {
  protected readonly columns: ScscColumn<HearingRow>[] = [
    { key: 'time', header: 'Time', type: 'number', width: '6rem' },
    { key: 'caseNumber', header: 'Case No.', rowHeader: true, width: '10rem' },
    { key: 'title', header: 'Title' },
    { key: 'department', header: 'Dept.', width: '6rem' },
  ];

  protected readonly rows: HearingRow[] = Array.from({ length: 14 }, (_, i) => ({
    time: \`\${String(8 + Math.floor(i / 2)).padStart(2, '0')}:\${i % 2 ? '30' : '00'}\`,
    caseNumber: \`24CV0\${String(12345 + i * 7).padStart(5, '0')}\`,
    title: ['Alvarez v. Northgate', 'In re Chen', "Estate of O'Donnell", 'Patel v. SVT'][i % 4],
    department: String(21 + (i % 3)),
  }));
}
`,html:`<!-- The host is the scroll container: give it a max height and the header sticks. -->
<scsc-table
  maxHeight="18rem"
  label="Hearings today"
  [columns]="columns"
  [rows]="rows"
  stickyHeader
  [zebra]="false"
/>
`}};var ga={slug:`table`,name:`Table`,classes:[`ScscTable`,`ScscCellDef`,`ScscHeaderCellDef`,`ScscRowDetailDef`,`ScscEmptyDef`,`ScscFilterBar`],category:`Data Display`,summary:"The one data table: a real `<table>` with typed `ScscColumn`s that is static by default and gains search, filters, multi-sort, selection with bulk actions, row actions, expandable rows, paging, a View menu, CSV export, server mode and narrow-container layouts as you opt in. `scsc-data-table` was folded into it in 0.5.0.",whenToUse:["Rows of the same shape that people scan, compare and act on: cases, filings, fees, tasks. Give it `rows` and it searches, filters, sorts and pages them in the browser.",'Server data: pass a `state` from `createTableState({ mode: "server", … })`; its `query()` feeds `httpResource` (`toHttpParams`), and the table shows its loading, error and page.',"Column `type` (`number`, `currency`, `date`, `datetime`, `boolean`, `status`) aligns, formats (with `SCSC_LOCALE`), sorts and exports by type. `scscCell` templates (per key, or one for every cell) override the content.","Row actions go in `rowActions`, never in a column: they get a pinned, end-aligned actions column that stays out of the View menu, search and CSV. Bulk actions go in `bulkActions`.","Filters: give a column a `filter` facet and the built-in filter bar appears; use `scsc-filter-bar` directly (bound to a `state`) for a custom layout. Custom controls still go in `[slot=filters]`.",'Narrow containers: `responsive="stack"` renders cards below `stackBelow`; `priority` drops columns by `priority` and reveals them per row. Both measure the table, not the screen.',"Thousands of rows on one scrolling screen, or spreadsheet editing: `scsc-data-grid`."],demos:[{id:`table-basic`,title:`Static`,description:'Just `columns` and `rows`. `type: "date"` formats and aligns; `rowHeader` makes the case number the row header.',component:W,source:p[`table-basic`],layout:`full-bleed`},{id:`table-sortable`,title:`Sorting and multi-sort`,description:'`sort="multi"`: a header cycles ascending → descending → none, Shift+click adds a key, and the Sort menu does it without a modifier. Numbers show each key’s order.',component:Z,source:p[`table-sortable`],layout:`full-bleed`},{id:`table-filters`,title:`Search and filter bar`,description:"Column `filter` facets: enum and boolean menus in the bar, number and date ranges in “More filters”. Active filters are removable chips.",component:K,source:p[`table-filters`],layout:`full-bleed`},{id:`table-selection`,title:`Selection and bulk actions`,description:`Selecting rows swaps the toolbar for the bulk bar in place; select a whole page to offer “Select all”. Switch on the floating bar to stick it to the bottom of the viewport instead.`,component:X,source:p[`table-selection`],layout:`full-bleed`},{id:`table-row-actions`,title:`Row actions`,description:"One inline icon button, the rest in “More actions for …”: a per-row `visible`, a disabled action with its reason, and a danger action that confirms first.",component:G,source:p[`table-row-actions`],layout:`full-bleed`},{id:`table-expandable`,title:`Expandable rows`,description:"`expandable` with a `*scscRowDetail` template: a disclosure button per row.",component:J,source:p[`table-expandable`],layout:`full-bleed`},{id:`table-server`,title:`Server mode`,description:"`createTableState` in server mode with a `resource`: 700 ms latency, “Select all 1,234” (an all-matching selection), a failing request with Retry, and keyset “Show more” with a cursor.",component:Y,source:p[`table-server`],layout:`full-bleed`},{id:`table-controls`,title:`View menu, density and export`,description:"`columnMenu` (a `hidden` column starts off; `hideable: false` stays), density, CSV of all, matching or selected rows, rows per page, and a primary action in `[slot=toolbar-end]`.",component:q,source:p[`table-controls`],layout:`full-bleed`},{id:`table-responsive`,title:`Stack and priority`,description:"Narrow the container: the first table becomes cards (title, fields, actions in the footer), the second drops its highest-`priority` columns into a “Show more fields” row.",component:Q,source:p[`table-responsive`],layout:`full-bleed`},{id:`table-states`,title:`Loading, empty and error`,description:"Skeleton rows with `aria-busy`, a `*scscEmpty` template, and an error with Retry.",component:ee,source:p[`table-states`],layout:`full-bleed`},{id:`table-custom-cells`,title:`Custom cells`,description:"Per-column templates: `*scscCell=\"'caseNumber'; let row\"` for a link, `[scscCell]=\"'status'\"` with `let-value` for a badge.",component:U,source:p[`table-custom-cells`],layout:`full-bleed`},{id:`table-sticky`,title:`Sticky header`,description:"`stickyHeader` with a `maxHeight`: the rows scroll under the header.",component:te,source:p[`table-sticky`],layout:`full-bleed`}],a11y:['A real `<table>` with `<th scope="col">` headers and optional row headers (`rowHeader`), so screen readers announce the column and row for each cell.',"Sortable headers are buttons; `aria-sort` is on the primary sort column only, and secondary keys add “sort 2, descending” to their button’s name.","Selection checkboxes and every row action are named with `rowLabel` (“Select 24CV012345”, “Edit 24CV012345”, “More actions for 24CV012345”); selected rows get `aria-selected` and a tint, and the selected count is announced.","Disabled row actions stay focusable (`aria-disabled`) and describe why; danger actions with `confirm` ask in a dialog first. Action buttons have 44 px hit areas in comfortable density and never appear on hover only.","Loading sets `aria-busy` on the rows and a “Loading…” status; an error is an alert with Retry; result counts are announced when the search or filters change, and the pager’s “Page 2 of 5” is a polite live region.",`Focus never drops to the page: Clear selection returns it to select-all; when Previous or Next disables itself, focus moves to the other; “Show more” that runs out moves it to the “Showing n of m” status.`,"While the table is wider than its frame, the frame is a focusable region named by `label`. Stacked cards are a named list; the floating bulk bar scrolls focus clear of itself (WCAG 2.4.11)."],aria:['`<table aria-label>` from `label` (or your `<caption>`); `aria-busy="true"` while loading.','`<th aria-sort>` on the primary sort column; sort buttons are `type="button"`.','Row `aria-selected` (when selectable) and `aria-current="true"` for `activeRow`.',"Details buttons: `aria-expanded`, and `aria-controls` pointing at the details row while it is open.",'Menus (View, Sort, Export, row overflow, enum filters) are APG menu buttons: `aria-haspopup="menu"`, `aria-expanded`, `menuitemcheckbox` / `menuitemradio` items.','The bulk bar is a `role="group"` named “Actions for the selected rows”; the pager is a `<nav aria-label="Pagination">`.'],appMustProvide:["A name: `label`, or a projected `<caption>`.","`rowLabel` whenever the first column (or row header) does not name the row on its own, so checkboxes and actions are distinguishable.","Labels for anything interactive inside `scscCell` templates; status is never colour alone.","For server tables, the query handling: `state.query()` → your API, and `(retry)` / `(exportRequest)` handlers."],keyboard:[{keys:`Tab`,action:`Toolbar (search, filters, Sort, View, Export, your slot content) or, while rows are selected, the bulk bar; then the scroll region while the table overflows, select-all and sort buttons, each row’s checkbox, details button, links in cells and actions; then the pager.`},{keys:`Enter / Space`,action:'On a sortable header: ascending → descending → none. With `sort="multi"`, Shift+click adds a secondary key, and the Sort menu does the same without a modifier.'},{keys:`Space`,action:`Toggles the focused row checkbox, select-all, or a column in the View menu.`},{keys:`Enter / Space / ArrowDown`,action:`On View, Sort, Export, a filter or “More actions”: opens the menu on its first item (ArrowUp: last). Arrow keys move, typing jumps, Enter or Space choose, Escape closes and returns focus.`},{keys:`Enter / Space`,action:"On a row’s details button: shows or hides its details row (`aria-expanded`)."},{keys:`Escape`,action:`In the search box: clears it (when it has text).`},{keys:`ArrowLeft / ArrowRight`,action:`On the focused scroll region: scrolls the table sideways.`}],related:[`data-grid`,`pagination`,`menu`,`tag-list`,`docket-table`,`empty-state`]};export{ga as TABLE_DOCS};