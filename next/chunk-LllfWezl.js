import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{$a as Qr,Aa as It$1,Ao as bo,Ca as Gv,Co as _2,Cs as rM,Es as sD,Fa as K_,Fr as kn$1,Go as g,Ha as N2,Hs as y_,Ia as Kt$1,Io as dN,Ja as PD,Jr as oe,Ka as Ov,Ki as ye,Ks as zt$1,La as L,Lo as d_,Ls as vu,Ma as JT,Mo as cD,Mr as jn$1,Ms as uc,Na as Jb,Nn as Xa,No as cc,Oa as I$1,Po as ce,Pr as ki,Ps as ut,Qa as Q_,Qo as io,Ra as LI,Ro as dc,Rs as w_,Sa as Gt$1,Ss as rD,Ta as Hf,To as _n$1,Ua as Ni,Uo as fa,Us as yu,Xa as Pv,Yo as iD,Za as Q,Zo as i_,_o as Y,_s as o_,aa as Av,ba as Ge,bo as Y_,bs as pe,ca as Cu,co as Vf,cs as lc,ds as nD,eo as S2,es as je$1,fs as nM,ga as Fe,ha as Eg,ia as Ah,in as Ta$1,io as Ta,is as k2,ja as J,jo as bs,ka as Ig,ks as t_,kt as NE,ma as Ee$1,na as $v,no as So,ns as jv,o as $de,oo as Uv,os as k_,ot as Ie,pa as Ec,pi as sn$1,po as X,ps as n_,pt as KE,qn as _s,qo as ge,qs as zv,ra as Af,ro as T2,rs as k,ta as $f,to as Sa,ua as Du,va as G_,xa as Gm,xs as q,ya as Ga,yo as YM,z as F,za as Lf}from"./main-O6OT5H7H.js";var Ce=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Q;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,n=!0,i){this._multiple=t,this._emitChanges=n,this.compareWith=i,e&&e.length&&(t?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(r=>this._getConcreteValue(r)));t.forEach(r=>this._markSelected(r)),e.filter(r=>!n.has(this._getConcreteValue(r,n))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var Lt=new I$1(`CDK_TREE_NODE_OUTLET_NODE`);var ae=(()=>{class s{viewContainer=g(zt$1);_node=g(Lt,{optional:!0});static ɵfac=function(n){return new(n||s)};static ɵdir=Gt$1({type:s,selectors:[[``,`cdkTreeNodeOutlet`,``]]})}return s})();var Ue=class{$implicit;level;index;count;constructor(t){this.$implicit=t}};var He=(()=>{class s{template=g(Qr);when;static ɵfac=function(n){return new(n||s)};static ɵdir=Gt$1({type:s,selectors:[[``,`cdkTreeNodeDef`,``]],inputs:{when:[0,`cdkTreeNodeDefWhen`,`when`]}})}return s})();function It(){return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`)}var de=(()=>{class s$1{_differs=g(PD);_changeDetectorRef=g(io);_elementRef=g(It$1);_dir=g(ki);_onDestroy=new Q;_dataDiffer;_defaultNodeDef=null;_dataSubscription;_levels=new Map;_parents=new Map;_ariaSets=new Map;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;treeControl;levelAccessor;childrenAccessor;trackBy;expansionKey;_nodeOutlet;_nodeDefs;viewChange=new pe({start:0,end:Number.MAX_VALUE});_expansionModel;_flattenedNodes=new pe([]);_nodeType=new pe(null);_nodes=new pe(new Map);_keyManagerNodes=new pe([]);_keyManagerFactory=g($de);_keyManager;_viewInit=!1;ngAfterContentInit(){this._initializeKeyManager()}ngAfterContentChecked(){this._updateDefaultNodeDefinition(),this._subscribeToDataChanges()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this._nodes.complete(),this._keyManagerNodes.complete(),this._nodeType.complete(),this._flattenedNodes.complete(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect==`function`&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,this._keyManager?.destroy()}ngOnInit(){this._checkTreeControlUsage(),this._initializeDataDiffer()}ngAfterViewInit(){this._viewInit=!0}_updateDefaultNodeDefinition(){let e=this._nodeDefs.filter(n=>!n.when);e.length,this._defaultNodeDef=e[0]}_setNodeTypeIfUnset(e){this._nodeType.value===null&&this._nodeType.next(e)}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect==`function`&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._subscribeToDataChanges()}_getExpansionModel(){return this.treeControl?this.treeControl.expansionModel:(this._expansionModel??=new Ce(!0),this._expansionModel)}_subscribeToDataChanges(){if(this._dataSubscription)return;let e;KE(this._dataSource)?e=this._dataSource.connect(this):bs(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=k(this._dataSource)),e&&(this._dataSubscription=this._getRenderData(e).pipe(So(this._onDestroy)).subscribe(n=>{this._renderDataChanges(n)}))}_getRenderData(e){let n=this._getExpansionModel();return vu([e,this._nodeType,n.changed.pipe(Cu(null),Ge(i=>{this._emitExpansionChanges(i)}))]).pipe(je$1(([i,r$1])=>r$1===null?k({renderNodes:i,flattenedNodes:null,nodeType:r$1}):this._computeRenderingData(i,r$1).pipe(Y(o=>s(r({},o),{nodeType:r$1})))))}_renderDataChanges(e){if(e.nodeType===null){this.renderNodeChanges(e.renderNodes);return}this._updateCachedData(e.flattenedNodes),this.renderNodeChanges(e.renderNodes),this._updateKeyManagerItems(e.flattenedNodes)}_emitExpansionChanges(e){if(!e)return;let n=this._nodes.value;for(let i of e.added)n.get(i)?._emitExpansionState(!0);for(let i of e.removed)n.get(i)?._emitExpansionState(!1)}_initializeKeyManager(){let e=vu([this._keyManagerNodes,this._nodes]).pipe(Y(([i,r])=>i.reduce((o,a)=>{let d=r.get(this._getExpansionKey(a));return d&&o.push(d),o},[]))),n={trackBy:i=>this._getExpansionKey(i.data),skipPredicate:i=>!!i.isDisabled,typeAheadDebounceInterval:!0,horizontalOrientation:this._dir.value};this._keyManager=this._keyManagerFactory(e,n)}_initializeDataDiffer(){let e=this.trackBy??((n,i)=>this._getExpansionKey(i));this._dataDiffer=this._differs.find([]).create(e)}_checkTreeControlUsage(){}renderNodeChanges(e,n=this._dataDiffer,i=this._nodeOutlet.viewContainer,r){let o=n.diff(e);!o&&!this._viewInit||(o?.forEachOperation((a,d,u)=>{if(a.previousIndex==null)this.insertNode(e[u],u,i,r);else if(u==null)i.remove(d);else{let y=i.get(d);i.move(y,u)}}),o?.forEachIdentityChange(a=>{let d=a.item;if(a.currentIndex!=null){let u=i.get(a.currentIndex);u.context.$implicit=d}}),r?this._changeDetectorRef.markForCheck():this._changeDetectorRef.detectChanges())}_getNodeDef(e,n){if(this._nodeDefs.length===1)return this._nodeDefs.first;return this._nodeDefs.find(r=>r.when&&r.when(n,e))||this._defaultNodeDef}insertNode(e,n,i,r){let o=this._getLevelAccessor(),a=this._getNodeDef(e,n),d=this._getExpansionKey(e),u=new Ue(e);u.index=n,r??=this._parents.get(d)??void 0,o?u.level=o(e):r!==void 0&&this._levels.has(this._getExpansionKey(r))?u.level=this._levels.get(this._getExpansionKey(r))+1:u.level=0,this._levels.set(d,u.level),(i||this._nodeOutlet.viewContainer).createEmbeddedView(a.template,u,n),Se.mostRecentTreeNode&&(Se.mostRecentTreeNode.data=e)}isExpanded(e){return!!(this.treeControl?.isExpanded(e)||this._expansionModel?.isSelected(this._getExpansionKey(e)))}toggle(e){this.treeControl?this.treeControl.toggle(e):this._expansionModel&&this._expansionModel.toggle(this._getExpansionKey(e))}expand(e){this.treeControl?this.treeControl.expand(e):this._expansionModel&&this._expansionModel.select(this._getExpansionKey(e))}collapse(e){this.treeControl?this.treeControl.collapse(e):this._expansionModel&&this._expansionModel.deselect(this._getExpansionKey(e))}toggleDescendants(e){this.treeControl?this.treeControl.toggleDescendants(e):this._expansionModel&&(this.isExpanded(e)?this.collapseDescendants(e):this.expandDescendants(e))}expandDescendants(e){if(this.treeControl)this.treeControl.expandDescendants(e);else if(this._expansionModel){let n=this._expansionModel;n.select(this._getExpansionKey(e)),this._getDescendants(e).pipe(Fe(1),So(this._onDestroy)).subscribe(i=>{n.select(...i.map(r=>this._getExpansionKey(r)))})}}collapseDescendants(e){if(this.treeControl)this.treeControl.collapseDescendants(e);else if(this._expansionModel){let n=this._expansionModel;n.deselect(this._getExpansionKey(e)),this._getDescendants(e).pipe(Fe(1),So(this._onDestroy)).subscribe(i=>{n.deselect(...i.map(r=>this._getExpansionKey(r)))})}}expandAll(){this.treeControl?this.treeControl.expandAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.select(...e))}collapseAll(){this.treeControl?this.treeControl.collapseAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.deselect(...e))}_getLevelAccessor(){return this.treeControl?.getLevel?.bind(this.treeControl)??this.levelAccessor}_getChildrenAccessor(){return this.treeControl?.getChildren?.bind(this.treeControl)??this.childrenAccessor}_getDirectChildren(e){let n=this._getLevelAccessor(),i=this._expansionModel??this.treeControl?.expansionModel;if(!i)return k([]);let r=this._getExpansionKey(e),o=i.changed.pipe(je$1(d=>d.added.includes(r)?k(!0):d.removed.includes(r)?k(!1):ce),Cu(this.isExpanded(e)));if(n)return vu([o,this._flattenedNodes]).pipe(Y(([d,u])=>d?this._findChildrenByLevel(n,u,e,1):[]));let a=this._getChildrenAccessor();if(a)return _s(a(e)??[]);throw It()}_findChildrenByLevel(e,n,i,r){let o=this._getExpansionKey(i),a=n.findIndex(b=>this._getExpansionKey(b)===o),d=e(i),u=d+r,y=[];for(let b=a+1;b<n.length;b++){let P=e(n[b]);if(P<=d)break;P<=u&&y.push(n[b])}return y}_registerNode(e){this._nodes.value.set(this._getExpansionKey(e.data),e),this._nodes.next(this._nodes.value)}_unregisterNode(e){this._nodes.value.delete(this._getExpansionKey(e.data)),this._nodes.next(this._nodes.value)}_getLevel(e){return this._levels.get(this._getExpansionKey(e))}_getSetSize(e){return this._getAriaSet(e).length}_getPositionInSet(e){let n=this._getAriaSet(e),i=this._getExpansionKey(e);return n.findIndex(r=>this._getExpansionKey(r)===i)+1}_getNodeParent(e){let n=this._parents.get(this._getExpansionKey(e.data));return n&&this._nodes.value.get(this._getExpansionKey(n))}_getNodeChildren(e){return this._getDirectChildren(e.data).pipe(Y(n=>n.reduce((i,r)=>{let o=this._nodes.value.get(this._getExpansionKey(r));return o&&i.push(o),i},[])))}_sendKeydownToKeyManager(e){if(e.target===this._elementRef.nativeElement)this._keyManager.onKeydown(e);else{let n=this._nodes.getValue();for(let[,i]of n)if(e.target===i._elementRef.nativeElement){this._keyManager.onKeydown(e);break}}}_getDescendants(e){if(this.treeControl)return k(this.treeControl.getDescendants(e));if(this.levelAccessor){let n=this._findChildrenByLevel(this.levelAccessor,this._flattenedNodes.value,e,1/0);return k(n)}if(this.childrenAccessor)return this._getAllChildrenRecursively(e).pipe(LI((n,i)=>(n.push(...i),n),[]));throw It()}_getAllChildrenRecursively(e){return this.childrenAccessor?_s(this.childrenAccessor(e)).pipe(Fe(1),je$1(n=>{for(let i of n)this._parents.set(this._getExpansionKey(i),e);return k(...n).pipe(bo(i=>Kt$1(k([i]),this._getAllChildrenRecursively(i))))})):k([])}_getExpansionKey(e){return this.expansionKey?.(e)??e}_getAriaSet(e){let n=this._getExpansionKey(e),i=this._parents.get(n),r=i?this._getExpansionKey(i):null;return this._ariaSets.get(r)??[e]}_findParentForNode(e,n,i){if(!i.length)return null;let r=this._levels.get(this._getExpansionKey(e))??0;for(let o=n-1;o>=0;o--){let a=i[o];if((this._levels.get(this._getExpansionKey(a))??0)<r)return a}return null}_flattenNestedNodesWithExpansion(e,n=0){let i=this._getChildrenAccessor();return i?k(...e).pipe(bo(r=>{let o=this._getExpansionKey(r);this._parents.has(o)||this._parents.set(o,null),this._levels.set(o,n);let a=_s(i(r));return Kt$1(k([r]),a.pipe(Fe(1),Ge(d=>{this._ariaSets.set(o,[...d??[]]);for(let u of d??[]){let y=this._getExpansionKey(u);this._parents.set(y,r),this._levels.set(y,n+1)}}),je$1(d=>d?this._flattenNestedNodesWithExpansion(d,n+1).pipe(Y(u=>this.isExpanded(r)?u:[])):k([]))))}),LI((r,o)=>(r.push(...o),r),[])):k([...e])}_computeRenderingData(e,n){if(this.childrenAccessor&&n===`flat`)return this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(Y(i=>({renderNodes:i,flattenedNodes:i})));if(this.levelAccessor&&n===`nested`){let i=this.levelAccessor;return k(e.filter(r=>i(r)===0)).pipe(Y(r=>({renderNodes:r,flattenedNodes:e})),Ge(({flattenedNodes:r})=>{this._calculateParents(r)}))}else return n===`flat`?k({renderNodes:e,flattenedNodes:e}).pipe(Ge(({flattenedNodes:i})=>{this._calculateParents(i)})):(this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(Y(i=>({renderNodes:e,flattenedNodes:i}))))}_updateCachedData(e){this._flattenedNodes.next(e)}_updateKeyManagerItems(e){this._keyManagerNodes.next(e)}_calculateParents(e){let n=this._getLevelAccessor();if(n){this._clearPreviousCache();for(let i=0;i<e.length;i++){let r=e[i],o=this._getExpansionKey(r);this._levels.set(o,n(r));let a=this._findParentForNode(r,i,e);this._parents.set(o,a);let d=a?this._getExpansionKey(a):null,u=this._ariaSets.get(d)??[];u.splice(i,0,r),this._ariaSets.set(d,u)}}}_forEachExpansionKey(e){let n=[],i=[];this._nodes.value.forEach(r=>{n.push(this._getExpansionKey(r.data)),i.push(this._getDescendants(r.data))}),i.length>0?vu(i).pipe(Fe(1),So(this._onDestroy)).subscribe(r=>{r.forEach(o=>o.forEach(a=>n.push(this._getExpansionKey(a)))),e(n)}):e(n)}_clearPreviousCache(){this._parents.clear(),this._levels.clear(),this._ariaSets.clear()}static ɵfac=function(n){return new(n||s$1)};static ɵcmp=Af({type:s$1,selectors:[[`cdk-tree`]],contentQueries:function(n,i,r){if(n&1&&dc(r,He,5),n&2){let o;Vf(o=Hf())&&(i._nodeDefs=o)}},viewQuery:function(n,i){if(n&1&&$v(ae,7),n&2){let r;Vf(r=Hf())&&(i._nodeOutlet=r.first)}},hostAttrs:[`role`,`tree`,1,`cdk-tree`],hostBindings:function(n,i){n&1&&lc(`keydown`,function(o){return i._sendKeydownToKeyManager(o)})},inputs:{dataSource:`dataSource`,treeControl:`treeControl`,levelAccessor:`levelAccessor`,childrenAccessor:`childrenAccessor`,trackBy:`trackBy`,expansionKey:`expansionKey`},exportAs:[`cdkTree`],decls:1,vars:0,consts:[[`cdkTreeNodeOutlet`,``]],template:function(n,i){n&1&&jv(0,0)},dependencies:[ae],encapsulation:2,changeDetection:1})}return s$1})();var Se=(()=>{class s{_elementRef=g(It$1);_tree=g(de);_tabindex=-1;_type=`flat`;get role(){return`treeitem`}set role(e){}get isExpandable(){return this._isExpandable()}set isExpandable(e){this._inputIsExpandable=e,!(this.data&&!this._isExpandable||!this._inputIsExpandable)&&(this._inputIsExpanded?this.expand():this._inputIsExpanded===!1&&this.collapse())}get isExpanded(){return this._tree.isExpanded(this._data)}set isExpanded(e){this._inputIsExpanded=e,e?this.expand():this.collapse()}isDisabled=!1;typeaheadLabel=null;getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||``}activation=new Ee$1;expandedChange=new Ee$1;static mostRecentTreeNode=null;_destroyed=new Q;_dataChanges=new Q;_inputIsExpandable=!1;_inputIsExpanded=void 0;_shouldFocus=!0;_parentNodeAriaLevel;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._dataChanges.next())}_data;get isLeafNode(){return this._tree.treeControl?.isExpandable!==void 0&&!this._tree.treeControl.isExpandable(this._data)?!0:this._tree.treeControl?.isExpandable===void 0&&this._tree.treeControl?.getDescendants(this._data).length===0}get level(){return this._tree._getLevel(this._data)??this._parentNodeAriaLevel}_isExpandable(){return this._tree.treeControl?!this.isLeafNode:this._inputIsExpandable}_getAriaExpanded(){return this._isExpandable()?String(this.isExpanded):null}_getSetSize(){return this._tree._getSetSize(this._data)}_getPositionInSet(){return this._tree._getPositionInSet(this._data)}_changeDetectorRef=g(io);constructor(){s.mostRecentTreeNode=this}ngOnInit(){this._parentNodeAriaLevel=Gt(this._elementRef.nativeElement),this._tree._getExpansionModel().changed.pipe(Y(()=>this.isExpanded),Ah(),So(this._destroyed)).pipe(So(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),this._tree._setNodeTypeIfUnset(this._type),this._tree._registerNode(this)}ngOnDestroy(){s.mostRecentTreeNode===this&&(s.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}getParent(){return this._tree._getNodeParent(this)??null}getChildren(){return this._tree._getNodeChildren(this)}focus(){this._tabindex=0,this._shouldFocus&&this._elementRef.nativeElement.focus(),this._changeDetectorRef.markForCheck()}unfocus(){this._tabindex=-1,this._changeDetectorRef.markForCheck()}activate(){this.isDisabled||this.activation.next(this._data)}collapse(){this.isExpandable&&this._tree.collapse(this._data)}expand(){this.isExpandable&&this._tree.expand(this._data)}makeFocusable(){this._tabindex=0,this._changeDetectorRef.markForCheck()}_focusItem(){this.isDisabled||this._tree._keyManager.focusItem(this)}_setActiveItem(){this.isDisabled||(this._shouldFocus=!1,this._tree._keyManager.focusItem(this),this._shouldFocus=!0)}_emitExpansionState(e){this.expandedChange.emit(e)}static ɵfac=function(n){return new(n||s)};static ɵdir=Gt$1({type:s,selectors:[[`cdk-tree-node`]],hostAttrs:[`role`,`treeitem`,1,`cdk-tree-node`],hostVars:5,hostBindings:function(n,i){n&1&&lc(`click`,function(){return i._setActiveItem()})(`focus`,function(){return i._focusItem()}),n&2&&(Uv(`tabIndex`,i._tabindex),cc(`aria-expanded`,i._getAriaExpanded())(`aria-level`,i.level+1)(`aria-posinset`,i._getPositionInSet())(`aria-setsize`,i._getSetSize()))},inputs:{role:`role`,isExpandable:[2,`isExpandable`,`isExpandable`,Ni],isExpanded:`isExpanded`,isDisabled:[2,`isDisabled`,`isDisabled`,Ni],typeaheadLabel:[0,`cdkTreeNodeTypeaheadLabel`,`typeaheadLabel`]},outputs:{activation:`activation`,expandedChange:`expandedChange`},exportAs:[`cdkTreeNode`]})}return s})();function Gt(s){let t=s.parentElement;for(;t&&!Jt(t);)t=t.parentElement;return t?t.classList.contains(`cdk-nested-tree-node`)?YM(t.getAttribute(`aria-level`)):0:-1}function Jt(s){let t=s.classList;return!!(t?.contains(`cdk-nested-tree-node`)||t?.contains(`cdk-tree`))}var Ot=(()=>{class s extends Se{_type=`nested`;_differs=g(PD);_dataDiffer;_children;nodeOutlet;ngAfterContentInit(){this._dataDiffer=this._differs.find([]).create(this._tree.trackBy),this._tree._getDirectChildren(this.data).pipe(So(this._destroyed)).subscribe(e=>this.updateChildrenNodes(e)),this.nodeOutlet.changes.pipe(So(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){let n=this._getNodeOutlet();if(e&&(this._children=e),n&&this._children){let i=n.viewContainer;this._tree.renderNodeChanges(this._children,this._dataDiffer,i,this._data)}else this._dataDiffer.diff([])}_clear(){let e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){let e=this.nodeOutlet;return e&&e.find(n=>!n._node||n._node===this)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Gm(s)))(i||s)}})();static ɵdir=Gt$1({type:s,selectors:[[`cdk-nested-tree-node`]],contentQueries:function(n,i,r){if(n&1&&dc(r,ae,5),n&2){let o;Vf(o=Hf())&&(i.nodeOutlet=o)}},hostAttrs:[1,`cdk-nested-tree-node`],exportAs:[`cdkNestedTreeNode`],features:[nM([{provide:Se,useExisting:s},{provide:Lt,useExisting:s}]),Av]})}return s})();var Rt=[];function Xt(s,t){return s.children??t.get(s.id)??Rt}function We(s,t){return!!s.hasChildren&&!s.children&&!t.has(s.id)}function Pt(s,t){let e=new Map,n=new Map,i=new Map,r=d=>{let u=new Set,y=d.filter(b=>!e.has(b.id)&&!u.has(b.id)&&u.add(b.id));return y.length===d.length?d:y},o=r(s),a=[];for(let d of o)e.set(d.id,d);for(let d=o.length-1;d>=0;d--)a.push([o[d],null]);for(;a.length;){let[d,u]=a.pop();n.set(d.id,u);let y=r(Xt(d,t));y.length&&i.set(d.id,y);for(let b of y)e.set(b.id,b);for(let b=y.length-1;b>=0;b--)a.push([y[b],d.id])}return{roots:o,byId:e,parentOf:n,childrenOf:d=>i.get(d.id)??Rt}}function ke(s,t){let e=[...s.roots].reverse();for(;e.length;){let n=e.pop();t(n);let i=s.childrenOf(n);for(let r=i.length-1;r>=0;r--)e.push(i[r])}}function Kt(s,t){let e=[];for(let n=s.parentOf.get(t)??null;n!==null;n=s.parentOf.get(n)??null)e.push(n);return e}function $e(s){let t=``,e=[];for(let n=0;n<s.length;n++){let i=s[n].normalize(`NFD`).replace(new RegExp(`\\p{M}`,`gu`),``).toLowerCase();t+=i,e.push(...new Array(i.length).fill(n))}return{folded:t,source:e}}function Ft(s){return $e(s.trim()).folded}function zt(s,t){let e=Ft(t);if(!e)return null;let n=new Set,i=new Set,r=new Set,o=(a,d,u)=>{let y=$e(a.label).folded.includes(e);if(y){n.add(a.id);for(let P of d)i.add(P),r.add(P)}(y||u)&&i.add(a.id);let b=s.childrenOf(a);if(b.length){d.push(a.id);for(let P of b)o(P,d,u||y);d.pop()}};for(let a of s.roots)o(a,[],!1);return{query:e,matches:n,keep:i,ancestors:r}}function Vt(s,t){let e=Ft(t);if(!e)return[{text:s,match:!1}];let{folded:n,source:i}=$e(s),r=[],o=0;for(let a=n.indexOf(e);a!==-1;a=n.indexOf(e,a+e.length)){let d=i[a],u=i[a+e.length-1]+1;d>o&&r.push({text:s.slice(o,d),match:!1}),r.push({text:s.slice(d,u),match:!0}),o=u}return o<s.length&&r.push({text:s.slice(o),match:!1}),r}function Bt(s,t){let e=new Map,n=(i,r)=>{let o=r||t.has(i.id),a=s.childrenOf(i),d;if(!a.length)d=o?`checked`:`unchecked`;else{let u=0,y=0;for(let b of a){let P=n(b,o);P===`checked`?u++:P===`unchecked`&&y++}d=u===a.length?`checked`:y===a.length?`unchecked`:`mixed`}return e.set(i.id,d),d};for(let i of s.roots)n(i,!1);return e}function Yt(s,t){let e=[],n=[t];for(;n.length;){let i=n.pop(),r=s.childrenOf(i);if(!r.length)e.push(i);else for(let o=r.length-1;o>=0;o--)n.push(r[o])}return e}function Zt(s,t){let e=[],n=i=>{let r=s.childrenOf(i),o;if(!r.length)o=t.has(i.id);else{o=!0;for(let a of r)o=n(a)&&o}return o&&e.push(i.id),o};for(let i of s.roots)n(i);return e}function en(s,t){let e=new Set;return ke(s,n=>{!s.childrenOf(n).length&&t.get(n.id)===`checked`&&e.add(n.id)}),e}function we(s,t,e,n){let i=en(s,t),r=e.flatMap(a=>Yt(s,a)).filter(a=>!a.disabled);if(!r.length)return null;let o=n??!r.every(a=>i.has(a.id));for(let a of r)o?i.add(a.id):i.delete(a.id);return Zt(s,i)}var j=class s{scscTreeNodeDefOf=Ec(void 0);template=g(Qr);static ngTemplateContextGuard(t,e){return typeof e==`object`}static ɵfac=function(e){return new(e||s)};static ɵdir=Gt$1({type:s,selectors:[[`ng-template`,`scscTreeNodeDef`,``]],inputs:{scscTreeNodeDefOf:[1,`scscTreeNodeDefOf`]}})};function tn(s,t){if(s&1){let e=d_();Ga(0,`scsc-search-input`,4),sD(`valueChange`,function(i){Eg(e);let r=y_(2);return Y_(r.filter,i)||(r.filter=i),Ig(i)}),lc(`keydown`,function(i){Eg(e);let r=y_(2);return Ig(r.onSearchKeydown(i))}),Lf()}if(s&2){let e=y_(2);Pv(`placeholder`,e.searchLabel()),iD(`value`,e.filter)}}function nn(s,t){if(s&1){let e=d_();Ga(0,`scsc-button`,6),lc(`click`,function(){Eg(e);let i=y_(3);return Ig(i.selectAll())}),uc(1,`scsc-icon`,10),G_(2),Lf(),Ga(3,`scsc-button`,6),lc(`click`,function(){Eg(e);let i=y_(3);return Ig(i.selectNone())}),uc(4,`scsc-icon`,11),G_(5),Lf()}if(s&2){let e=y_(3);Jb(2),$f(` `,e.selectAllLabel(),` `),Jb(3),$f(` `,e.selectNoneLabel(),` `)}}function sn(s,t){if(s&1&&(Ga(0,`span`,9),G_(1),Lf()),s&2){let e=y_(3);Jb(),$f(` `,e.labels().selected(e.selected().length),` `)}}function rn(s,t){if(s&1){let e=d_();Ga(0,`div`,5)(1,`scsc-button`,6),lc(`click`,function(){Eg(e);let i=y_(2);return Ig(i.expandAll())}),uc(2,`scsc-icon`,7),G_(3),Lf(),Ga(4,`scsc-button`,6),lc(`click`,function(){Eg(e);let i=y_(2);return Ig(i.collapseAll())}),uc(5,`scsc-icon`,8),G_(6),Lf(),JT(7,nn,6,2),Lf(),JT(8,sn,2,1,`span`,9)}if(s&2){let e=y_(2);Jb(3),$f(` `,e.expandAllLabel(),` `),Jb(3),$f(` `,e.collapseAllLabel(),` `),Jb(),t_(e.selectionMode()===`checkbox`?7:-1),Jb(),t_(e.multiselect()?8:-1)}}function on(s,t){if(s&1&&(Ga(0,`div`,0),JT(1,tn,1,2,`scsc-search-input`,3),JT(2,rn,9,4),Lf()),s&2){let e=y_();Jb(),t_(e.searchable()?1:-1),Jb(),t_(e.showToolbar()?2:-1)}}function an(s,t){s&1&&uc(0,`span`,15)}function dn(s,t){if(s&1&&(Ga(0,`span`),uc(1,`scsc-icon`,23),Lf()),s&2){y_();let e=K_(1),n=y_();k_(n.chevronClasses(e))}}function cn(s,t){s&1&&uc(0,`scsc-icon`,24)}function ln(s,t){s&1&&uc(0,`scsc-icon`,25)}function hn(s,t){if(s&1&&(Ga(0,`span`,14),JT(1,cn,1,0,`scsc-icon`,24)(2,ln,1,0,`scsc-icon`,25),Lf()),s&2){let e,n=y_().$implicit,i=y_();k_(i.checkboxClasses(n)),Jb(),t_((e=i.checkState(n))===`checked`?1:e===`mixed`?2:-1)}}function pn(s,t){s&1&&jv(0)}function un(s,t){if(s&1&&(Ga(0,`span`,18),Ov(1,pn,1,0,`ng-container`,26),Lf()),s&2){let e=y_(),n=e.$implicit,i=e.level,r=y_();Pv(`id`,r.domId(n)+`-label`),Jb(),Pv(`ngTemplateOutlet`,t.template)(`ngTemplateOutletContext`,r.rowContext(n,i))}}function mn(s,t){if(s&1&&uc(0,`scsc-icon`,27),s&2){let e=y_(2).$implicit;Pv(`name`,e.icon)}}function fn(s,t){if(s&1&&(Ga(0,`mark`,32),G_(1),Lf()),s&2){let e=y_().$implicit;Jb(),nD(e.text)}}function gn(s,t){if(s&1&&(Ga(0,`span`),G_(1),Lf()),s&2){let e=y_().$implicit;Jb(),nD(e.text)}}function _n(s,t){if(s&1&&JT(0,fn,2,1,`mark`,32)(1,gn,2,1,`span`),s&2){let e=t.$implicit;t_(e.match?0:1)}}function yn(s,t){if(s&1&&(Ga(0,`span`,30),G_(1),Lf()),s&2){let e=y_(2).$implicit,n=y_();Pv(`id`,n.domId(e)+`-desc`),Jb(),$f(` `,e.description,` `)}}function bn(s,t){if(s&1&&(Ga(0,`span`,14),G_(1),Lf(),Ga(2,`span`,33),G_(3),Lf()),s&2){let e=y_(3).$implicit;Jb(),nD(e.badge),Jb(2),nD(t(e.badge))}}function xn(s,t){if(s&1&&G_(0),s&2){let e=y_(3).$implicit;$f(` `,e.badge,` `)}}function vn(s,t){if(s&1&&(Ga(0,`scsc-badge`,31),JT(1,bn,4,2)(2,xn,1,1),Lf()),s&2){let e,n=y_(2).$implicit,i=y_();Pv(`id`,i.domId(n)+`-badge`),Jb(),t_((e=i.badgeLabel())?1:2,e)}}function Tn(s,t){if(s&1&&(JT(0,mn,1,1,`scsc-icon`,27),Ga(1,`span`,28)(2,`span`,29),o_(3,_n,2,1,null,null,n_),Lf(),JT(5,yn,2,2,`span`,30),Lf(),JT(6,vn,3,2,`scsc-badge`,31)),s&2){let e=y_().$implicit,n=y_();t_(e.icon?0:-1),Jb(2),Pv(`id`,n.domId(e)+`-label`),Jb(),i_(n.segments(e)),Jb(2),t_(e.description?5:-1),Jb(),t_(n.hasBadge(e)?6:-1)}}function Cn(s,t){s&1&&uc(0,`scsc-icon`,19)}function Sn(s,t){if(s&1&&(Ga(0,`div`,20),uc(1,`span`,34),G_(2),Lf()),s&2){let e=y_(2);Jb(2),$f(` `,e.labels().loading,` `)}}function kn(s,t){if(s&1){let e=d_();Ga(0,`div`,21),uc(1,`scsc-icon`,35),Ga(2,`span`),G_(3),Lf(),Ga(4,`button`,36),lc(`click`,function(){Eg(e);let i=y_().$implicit,r=y_();return Ig(r.retry(i))}),uc(5,`scsc-icon`,37),G_(6),Lf()()}if(s&2){let e=y_().$implicit,n=y_();Pv(`id`,n.domId(e)+`-error`),Jb(3),nD(n.loadErrorLabel()(e)),Jb(3),$f(` `,n.retryLabel(),` `)}}function wn(s,t){s&1&&(Ga(0,`div`,22),Ta(`scsc-anim-fade-out`),Sa(`scsc-anim-fade-in`),jv(1,38),Lf())}function Dn(s,t){if(s&1){let e=d_();Ga(0,`cdk-nested-tree-node`,12),lc(`keydown`,function(i){let r=Eg(e).$implicit,o=y_();return Ig(o.onItemKeydown(i,r))})(`click`,function(i){let r=Eg(e).$implicit,o=y_();return Ig(o.onItemClick(i,r))})(`dblclick`,function(i){let r=Eg(e).$implicit,o=y_();return Ig(o.onItemDblclick(i,r))}),cD(1),Ga(2,`div`,13)(3,`span`,14),JT(4,an,1,0,`span`,15)(5,dn,2,2,`span`,16),Lf(),JT(6,hn,3,3,`span`,17),JT(7,un,2,3,`span`,18)(8,Tn,7,4),JT(9,Cn,1,0,`scsc-icon`,19),Lf(),JT(10,Sn,3,1,`div`,20),JT(11,kn,7,3,`div`,21),JT(12,wn,2,0,`div`,22),Lf()}if(s&2){let e,n=t.$implicit,i=y_();Pv(`isExpandable`,i.isParent(n))(`cdkTreeNodeTypeaheadLabel`,n.label),cc(`data-scsc-tree-id`,n.id)(`aria-labelledby`,i.domId(n)+`-label`)(`aria-describedby`,i.describedBy(n))(`aria-selected`,i.ariaSelected(n))(`aria-checked`,i.ariaChecked(n))(`aria-disabled`,n.disabled?`true`:null)(`aria-busy`,i.isLoading(n)?`true`:null),Jb();let r=Q_(i.isExpanded(n));Jb(),k_(i.rowClasses(n)),Jb(),k_(i.toggleClasses(n)),cc(`data-scsc-toggle`,i.isParent(n)?``:null),Jb(),t_(i.isLoading(n)?4:i.isParent(n)?5:-1),Jb(2),t_(i.selectionMode()===`checkbox`?6:-1),Jb(),t_((e=i.customRow())?7:8,e),Jb(2),t_(i.selectionMode()===`multi`&&i.isSelected(n)?9:-1),Jb(),t_(r&&i.isLoading(n)?10:-1),Jb(),t_(r&&i.hasError(n)?11:-1),Jb(),t_(r&&i.hasVisibleChildren(n)?12:-1)}}function En(s,t){if(s&1&&uc(0,`scsc-empty-state`,39),s&2){let e=y_(2);Pv(`headingLevel`,null)(`title`,e.labels().noResults)}}function Nn(s,t){if(s&1&&uc(0,`scsc-empty-state`,40),s&2){let e=y_(2);Pv(`headingLevel`,null)(`title`,e.emptyLabel())}}function Mn(s,t){if(s&1&&JT(0,En,1,2,`scsc-empty-state`,39)(1,Nn,1,2,`scsc-empty-state`,40),s&2){let e=y_();t_(e.filterState()?0:1)}}var Ut=`scsc-tree:`;var Ht=new Set([`ArrowRight`,`ArrowLeft`,`Enter`,` `,`*`]);var An=new Map;var In=0;function Ln(s,t){return s.length===t.length&&s.every((e,n)=>e===t[n])}function On(s,t){return s.length===t.size&&s.every(e=>t.has(e))}function Wt(s,t){return s.has(t)?s:new Set(s).add(t)}function qe(s,t){if(!s.has(t))return s;let e=new Set(s);return e.delete(t),e}var I=class s{nodes=Ec.required();label=Ec(``);ariaLabelledby=Ec(``);selectionMode=Ec(`none`);selected=T2([]);expanded=T2([]);filter=T2(``);searchable=Ec(!1,{transform:Ni});showToolbar=Ec(!1,{transform:Ni});loadChildren=Ec(null);persistKey=Ec(``);badgeLabel=Ec(null);searchLabel=Ec(`Filter`);expandAllLabel=Ec(`Expand all`);collapseAllLabel=Ec(`Collapse all`);selectAllLabel=Ec(`Select all`);selectNoneLabel=Ec(`Select none`);retryLabel=Ec(`Retry`);loadErrorLabel=Ec(t=>`Couldn\u2019t load ${t.label}.`);emptyLabel=Ec(`Nothing to show`);class=Ec(``);nodeActivate=S2();selectionChange=S2();labels=g(oe);announcer=g(Ie);dir=g(ki);host=g(It$1);doc=g(X);cdkTree=_2(de);customRow=N2(j);uid=`scsc-tree-${In++}`;domIds=new Map;loaded=q(new Map);loadingIds=q(new Set);failedIds=q(new Set);pending=new Map;structure$=new pe(void 0);pointerFocus=!1;movingFocus=!1;hostClasses=ut(()=>F(`block`,this.class()));multiselect=ut(()=>this.selectionMode()===`multi`||this.selectionMode()===`checkbox`);index=ut(()=>Pt(this.nodes(),this.loaded()));expandedSet=ut(()=>new Set(this.expanded()));selectedSet=ut(()=>new Set(this.selected()));filterState=ut(()=>zt(this.index(),this.filter()));states=ut(()=>this.selectionMode()===`checkbox`?Bt(this.index(),this.selectedSet()):An);view=ut(()=>{let t=this.index(),e=this.filterState()?.keep,n=new Map,i=o=>{let a=n.get(o.id);if(!a){let d=t.childrenOf(t.byId.get(o.id)??o);a=e?d.filter(u=>e.has(u.id)):[...d],n.set(o.id,a)}return a};return{roots:e?t.roots.filter(o=>e.has(o.id)):[...t.roots],childrenOf:i}});visibleOrder=ut(()=>{let{roots:t,childrenOf:e}=this.view(),n=this.expandedSet(),i=[],r=[...t].reverse();for(;r.length;){let o=r.pop();if(i.push(o),!n.has(o.id))continue;let a=e(o);for(let d=a.length-1;d>=0;d--)r.push(a[d])}return i});keyOf=t=>t.id;trackById=(t,e)=>e.id;childrenAccessor=t=>this.structure$.pipe(Y(()=>L(this.view).childrenOf(t)),Ah(Ln));constructor(){g(ge).onDestroy(()=>{this.pending.forEach(n=>n.unsubscribe()),this.structure$.complete()}),fa(()=>{this.view(),L(()=>this.structure$.next())}),fa(()=>{let n=this.expandedSet(),i=this.cdkTree();i&&L(()=>{let r=i._getExpansionModel();On(r.selected,n)||r.setSelection(...n)})}),fa(()=>{let n=this.expandedSet(),i=this.index(),r=this.loaded();this.loadChildren()&&L(()=>{for(let o of n){let a=i.byId.get(o);a&&We(a,r)&&!this.loadingIds().has(o)&&!this.failedIds().has(o)&&this.load(a)}})});let e=``;fa(()=>{let n=this.filterState();L(()=>{let i=n?`${n.query}\0${n.matches.size}`:``;if(n&&i!==e){let r=this.expandedSet(),o=[...n.ancestors].filter(d=>!r.has(d));o.length&&this.expanded.set([...this.expanded(),...o]);let a=n.matches.size;this.announcer.announce(a?this.labels().results(a):this.labels().noResults)}e=i})}),fa(()=>{let n=this.expanded(),i=this.persistKey();i&&L(()=>this.writePersisted(i,n))})}ngOnInit(){k2()&&!this.label()&&!this.ariaLabelledby()&&console.warn("scsc-tree: set `label` or `ariaLabelledby` so the tree has an accessible name.");let t=this.persistKey(),e=t?this.readPersisted(t):null;e&&this.expanded.set(e)}expandAll(){let t=this.index(),e=[];ke(t,n=>{t.childrenOf(n).length&&e.push(n.id)}),this.expandIds(e)}collapseAll(){let t=this.focusedId();if(t!==null){let e=Kt(this.index(),t).pop();e!==void 0&&this.focusItem(e)}this.failedIds.set(new Set),this.expanded.set([])}selectAll(){if(this.selectionMode()===`checkbox`)this.commitSelection(we(this.index(),this.states(),this.index().roots,!0));else if(this.selectionMode()===`multi`){let t=[],e=this.selectedSet();ke(this.index(),n=>{(!n.disabled||e.has(n.id))&&t.push(n.id)}),this.commitSelection(t)}}selectNone(){if(this.selectionMode()===`checkbox`)this.commitSelection(we(this.index(),this.states(),this.index().roots,!1));else if(this.selectionMode()!==`none`){let t=this.index();this.commitSelection(this.selected().filter(e=>t.byId.get(e)?.disabled))}}domId(t){let e=this.domIds.get(t.id);return e===void 0&&(e=this.domIds.size,this.domIds.set(t.id,e)),`${this.uid}-${e}`}isParent(t){return We(t,this.loaded())||this.view().childrenOf(t).length>0}isExpanded(t){return this.expandedSet().has(t.id)&&this.isParent(t)}hasVisibleChildren(t){return this.view().childrenOf(t).length>0}isLoading(t){return this.loadingIds().has(t.id)}hasError(t){return this.failedIds().has(t.id)}hasBadge(t){return t.badge!==void 0&&t.badge!==null&&t.badge!==``}checkState(t){return this.states().get(t.id)??`unchecked`}isSelected(t){let e=this.selectionMode();return e===`checkbox`?this.checkState(t)===`checked`:e!==`none`&&this.selectedSet().has(t.id)}ariaSelected(t){let e=this.selectionMode();return e===`single`?this.selectedSet().has(t.id)?`true`:null:e!==`multi`?null:this.selectedSet().has(t.id)?`true`:t.disabled?null:`false`}ariaChecked(t){if(this.selectionMode()!==`checkbox`)return null;let e=this.checkState(t);return e===`checked`?`true`:e===`mixed`?`mixed`:`false`}describedBy(t){let e=this.domId(t),n=[];return this.customRow()||(t.description&&n.push(`${e}-desc`),this.hasBadge(t)&&n.push(`${e}-badge`)),this.hasError(t)&&this.isExpanded(t)&&n.push(`${e}-error`),n.length?n.join(` `):null}segments(t){return Vt(t.label,this.filter())}rowContext(t,e){return{$implicit:t,level:e,expanded:this.isExpanded(t),selected:this.isSelected(t),query:this.filter().trim()}}rowClasses(t){let e=this.selectionMode(),n=(e===`single`||e===`multi`)&&this.selectedSet().has(t.id);return F(`scsc-tree-row flex select-none items-center gap-1.5 rounded-field pe-2 ps-1 text-sm`,`transition-colors duration-(--scsc-duration-fast)`,t.disabled?`cursor-not-allowed text-base-content/70`:`cursor-pointer hover:bg-base-200`,n&&`scsc-tree-row-selected bg-secondary/10 font-medium text-primary`)}toggleClasses(t){return F(`flex size-6 shrink-0 items-center justify-center rounded-field text-base-content/70`,this.isParent(t)&&`hover:bg-base-300 hover:text-base-content`)}chevronClasses(t){return F(`scsc-tree-chevron inline-flex transition-transform duration-(--scsc-duration-fast) ease-(--scsc-ease-standard) motion-reduce:transition-none`,t?`rotate-90`:`rtl:rotate-180`)}checkboxClasses(t){let e=this.checkState(t)!==`unchecked`;return F(`flex size-4.5 shrink-0 items-center justify-center rounded-selector border-2`,e?`border-primary bg-primary text-primary-content`:`border-base-content/70 bg-base-100`,t.disabled&&`opacity-50`)}onItemKeydown(t,e){if(t.target!==t.currentTarget)return;let n=this.selectionMode(),i=t.key;if(t.altKey){Ht.has(i)&&t.stopPropagation();return}if(this.dir.value===`rtl`&&(i===`ArrowRight`||i===`ArrowLeft`)&&(i=i===`ArrowRight`?`ArrowLeft`:`ArrowRight`),t.ctrlKey||t.metaKey){if(i.toLowerCase()!==`a`||n!==`multi`&&n!==`checkbox`){Ht.has(i)&&t.stopPropagation();return}this.selectAll()}else switch(i){case`ArrowRight`:this.onArrowRight(e);break;case`ArrowLeft`:this.onArrowLeft(e);break;case`Enter`:this.onEnter(e);break;case` `:this.onSpace(e);break;case`*`:this.expandSiblings(e);break;case`ArrowDown`:case`ArrowUp`:if(!t.shiftKey||n!==`multi`)return;this.extendSelection(e,i===`ArrowDown`?1:-1);break;default:return}t.preventDefault(),t.stopPropagation()}ownRow(t){let e=t.target.closest(`.scsc-tree-row`);return e?.parentElement===t.currentTarget?e:null}onItemClick(t,e){if(t.stopPropagation(),!this.ownRow(t))return;let n=!!t.target.closest(`[data-scsc-toggle]`),i=this.selectionMode();if(n||i===`none`&&this.isParent(e)){this.toggle(e);return}i===`single`?this.selectSingle(e):i===`multi`?this.toggleSelected(e):i===`checkbox`&&this.toggleCheck(e)}onItemDblclick(t,e){if(t.stopPropagation(),!(!this.ownRow(t)||t.target.closest(`[data-scsc-toggle]`))){if(this.isParent(e)){this.selectionMode()!==`none`&&this.toggle(e);return}e.disabled||this.nodeActivate.emit(e)}}onTreeFocusin(t){let e=t.currentTarget,n=t.relatedTarget,i=t.target,r=this.pointerFocus;if(this.pointerFocus=!1,r||this.movingFocus||n&&e.contains(n)||i.tabIndex!==0)return;let o=this.selectionMode();if(o!==`single`&&o!==`multi`)return;let a=this.selectedSet(),d=this.visibleOrder().find(u=>a.has(u.id));d&&d.id!==i.getAttribute(`data-scsc-tree-id`)&&this.focusItem(d.id)}onSearchKeydown(t){if(t.key!==`ArrowDown`)return;let e=this.host.nativeElement,n=e.querySelector(`.scsc-tree-item[tabindex="0"]`)??e.querySelector(`.scsc-tree-item`);n&&(t.preventDefault(),n.focus())}retry(t){this.focusItem(t.id),this.load(t)}onArrowRight(t){if(this.isParent(t))if(!this.expandedSet().has(t.id))this.expandIds([t.id]);else if(this.hasError(t))this.load(t);else{let e=this.view().childrenOf(t)[0];e&&this.focusItem(e.id)}}onArrowLeft(t){if(this.isParent(t)&&this.expandedSet().has(t.id)){this.collapse(t);return}let e=this.index().parentOf.get(t.id);e&&this.focusItem(e)}onEnter(t){this.hasError(t)&&this.expandedSet().has(t.id)?this.load(t):this.isParent(t)?this.toggle(t):t.disabled||(this.selectionMode()===`single`&&this.selectSingle(t),this.nodeActivate.emit(t))}onSpace(t){switch(this.selectionMode()){case`none`:this.onEnter(t);break;case`single`:this.selectSingle(t);break;case`multi`:this.toggleSelected(t);break;case`checkbox`:this.toggleCheck(t)}}expandSiblings(t){let e=this.index(),n=e.parentOf.get(t.id)??null,i=n===null?void 0:e.byId.get(n),r=i?this.view().childrenOf(i):this.view().roots;this.expandIds(r.filter(o=>this.isParent(o)).map(o=>o.id))}extendSelection(t,e){let n=this.visibleOrder(),i=n[n.findIndex(r=>r.id===t.id)+e];i&&(this.focusItem(i.id),this.toggleSelected(i))}toggle(t){this.expandedSet().has(t.id)?this.collapse(t):this.expandIds([t.id])}expandIds(t){let e=this.expandedSet(),n=t.filter(i=>!e.has(i));n.length&&this.expanded.set([...this.expanded(),...n])}collapse(t){let e=this.itemElement(t.id),n=this.doc.activeElement;e&&n&&n!==e&&e.contains(n)&&e.focus(),this.failedIds.update(i=>qe(i,t.id)),this.expanded.set(this.expanded().filter(i=>i!==t.id))}selectSingle(t){if(t.disabled)return;let e=this.selected();e.length===1&&e[0]===t.id||this.commitSelection([t.id])}toggleSelected(t){if(t.disabled)return;let e=new Set(this.selected());e.has(t.id)?e.delete(t.id):e.add(t.id),this.commitSelection([...e])}toggleCheck(t){t.disabled||this.commitSelection(we(this.index(),this.states(),[t]))}commitSelection(t){if(!t)return;this.selected.set(t);let e=this.index().byId;this.selectionChange.emit(t.map(n=>e.get(n)).filter(n=>!!n)),this.multiselect()&&this.announcer.announce(this.labels().selected(t.length))}load(t){let e=this.loadChildren();if(!e)return;this.pending.get(t.id)?.unsubscribe(),this.failedIds.update(r=>qe(r,t.id)),this.loadingIds.update(r=>Wt(r,t.id)),this.announcer.announce(this.labels().loading);let n;try{n=J(e(t))}catch{this.fail(t);return}let i=n.pipe(Fe(1),Du([])).subscribe({next:r=>this.loaded.update(o=>new Map(o).set(t.id,r??[])),error:()=>this.fail(t),complete:()=>this.settle(t.id)});i.closed||this.pending.set(t.id,i)}settle(t){this.pending.delete(t),this.loadingIds.update(e=>qe(e,t))}fail(t){this.settle(t.id),this.failedIds.update(e=>Wt(e,t.id)),this.announcer.announce(this.loadErrorLabel()(t),`assertive`)}itemElement(t){let e=this.host.nativeElement.querySelectorAll(`.scsc-tree-item`);for(let n of Array.from(e))if(n.getAttribute(`data-scsc-tree-id`)===t)return n;return null}focusItem(t){let e=this.itemElement(t);if(e){this.movingFocus=!0;try{e.focus()}finally{this.movingFocus=!1}}}focusedId(){let e=this.doc.activeElement?.closest(`.scsc-tree-item`);return e&&this.host.nativeElement.contains(e)?e.getAttribute(`data-scsc-tree-id`):null}storage(){try{return this.doc.defaultView?.localStorage??null}catch{return null}}readPersisted(t){try{let e=this.storage()?.getItem(Ut+t);if(!e)return null;let n=JSON.parse(e);return Array.isArray(n)&&n.every(i=>typeof i==`string`)?n:null}catch{return null}}writePersisted(t,e){try{this.storage()?.setItem(Ut+t,JSON.stringify(e))}catch{}}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`scsc-tree`]],contentQueries:function(e,n,i){e&1&&zv(i,n.customRow,j,5),e&2&&w_()},viewQuery:function(e,n){e&1&&Gv(n.cdkTree,de,5),e&2&&w_()},hostVars:2,hostBindings:function(e,n){e&2&&k_(n.hostClasses())},inputs:{nodes:[1,`nodes`],label:[1,`label`],ariaLabelledby:[1,`ariaLabelledby`],selectionMode:[1,`selectionMode`],selected:[1,`selected`],expanded:[1,`expanded`],filter:[1,`filter`],searchable:[1,`searchable`],showToolbar:[1,`showToolbar`],loadChildren:[1,`loadChildren`],persistKey:[1,`persistKey`],badgeLabel:[1,`badgeLabel`],searchLabel:[1,`searchLabel`],expandAllLabel:[1,`expandAllLabel`],collapseAllLabel:[1,`collapseAllLabel`],selectAllLabel:[1,`selectAllLabel`],selectNoneLabel:[1,`selectNoneLabel`],retryLabel:[1,`retryLabel`],loadErrorLabel:[1,`loadErrorLabel`],emptyLabel:[1,`emptyLabel`],class:[1,`class`]},outputs:{selected:`selectedChange`,expanded:`expandedChange`,filter:`filterChange`,nodeActivate:`nodeActivate`,selectionChange:`selectionChange`},decls:4,vars:10,consts:[[1,`mb-2`,`flex`,`flex-wrap`,`items-center`,`gap-2`],[1,`block`,3,`pointerdown`,`pointerup`,`focusin`,`dataSource`,`childrenAccessor`,`expansionKey`,`trackBy`,`hidden`],[`class`,`scsc-tree-item block`,3,`isExpandable`,`cdkTreeNodeTypeaheadLabel`,`keydown`,`click`,`dblclick`,4,`cdkTreeNodeDef`],[1,`min-w-48`,`flex-1`,3,`placeholder`,`value`],[1,`min-w-48`,`flex-1`,3,`valueChange`,`keydown`,`placeholder`,`value`],[1,`flex`,`flex-wrap`,`items-center`,`gap-1`],[`variant`,`ghost`,`size`,`sm`,3,`click`],[`name`,`chevrons-up-down`,`size`,`sm`],[`name`,`chevrons-down-up`,`size`,`sm`],[1,`ms-auto`,`text-sm`,`text-base-content/70`,`tnum`],[`name`,`square-check`,`size`,`sm`],[`name`,`square`,`size`,`sm`],[1,`scsc-tree-item`,`block`,3,`keydown`,`click`,`dblclick`,`isExpandable`,`cdkTreeNodeTypeaheadLabel`],[1,`scsc-tree-row`],[`aria-hidden`,`true`],[1,`loading`,`loading-spinner`,`loading-xs`],[3,`class`],[`aria-hidden`,`true`,3,`class`],[1,`flex`,`min-w-0`,`flex-1`,`items-center`,`gap-2`,`py-1`,3,`id`],[`name`,`check`,`size`,`sm`,1,`shrink-0`,`text-primary`],[1,`scsc-tree-status`,`flex`,`items-center`,`gap-2`,`text-sm`,`text-base-content/70`],[1,`scsc-tree-status`,`flex`,`flex-wrap`,`items-center`,`gap-2`,`text-sm`,3,`id`],[`role`,`group`,1,`scsc-tree-group`],[`name`,`chevron-right`,`size`,`sm`],[`name`,`check`,`size`,`xs`],[`name`,`minus`,`size`,`xs`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`size`,`sm`,1,`shrink-0`,`text-primary`,3,`name`],[1,`min-w-0`,`flex-1`,`py-1`],[1,`block`,`break-words`,3,`id`],[1,`block`,`break-words`,`text-xs`,`text-base-content/70`,3,`id`],[`size`,`sm`,`soft`,``,1,`shrink-0`,`tnum`,3,`id`],[1,`rounded-sm`,`bg-secondary/30`,`text-base-content`],[1,`sr-only`],[`aria-hidden`,`true`,1,`loading`,`loading-dots`,`loading-xs`],[`name`,`circle-alert`,`size`,`sm`,1,`text-error`],[`type`,`button`,`tabindex`,`-1`,1,`btn`,`btn-ghost`,`btn-xs`,3,`click`],[`name`,`rotate-cw`,`size`,`xs`],[`cdkTreeNodeOutlet`,``],[`icon`,`search`,3,`headingLevel`,`title`],[`icon`,`folder-tree`,3,`headingLevel`,`title`]],template:function(e,n){e&1&&(JT(0,on,3,2,`div`,0),Ga(1,`cdk-tree`,1),lc(`pointerdown`,function(){return n.pointerFocus=!0})(`pointerup`,function(){return n.pointerFocus=!1})(`focusin`,function(r){return n.onTreeFocusin(r)}),Ov(2,Dn,13,22,`cdk-nested-tree-node`,2),Lf(),JT(3,Mn,2,1)),e&2&&(t_(n.searchable()||n.showToolbar()?0:-1),Jb(),Pv(`dataSource`,n.view().roots)(`childrenAccessor`,n.childrenAccessor)(`expansionKey`,n.keyOf)(`trackBy`,n.trackById)(`hidden`,!n.view().roots.length),cc(`aria-label`,n.label()||null)(`aria-labelledby`,n.ariaLabelledby()||null)(`aria-multiselectable`,n.multiselect()?`true`:null),Jb(2),t_(n.view().roots.length?-1:3))},dependencies:[de,He,Ot,ae,dN,jn$1,sn$1,Xa,ye,Ta$1],styles:[`.scsc-tree-item[_ngcontent-%COMP%]:focus-visible{outline:none}.scsc-tree-item[_ngcontent-%COMP%]:focus-visible > .scsc-tree-row[_ngcontent-%COMP%]{outline:2px solid var(--%NS%color-secondary);outline-offset:-2px}.scsc-tree-row[_ngcontent-%COMP%]{min-height:calc(2.5rem * var(--%NS%scsc-space, 1))}.scsc-tree-row-selected[_ngcontent-%COMP%]{box-shadow:inset 3px 0 0 var(--%NS%color-secondary)}.scsc-tree-group[_ngcontent-%COMP%]{margin-inline-start:1rem;padding-inline-start:.25rem;border-inline-start:1px solid var(--%NS%color-base-300)}.scsc-tree-status[_ngcontent-%COMP%]{min-height:calc(2rem * var(--%NS%scsc-space, 1));padding-inline-start:2.25rem}[data-motion="reduced"][_nghost-%COMP%]   .scsc-tree-chevron[_ngcontent-%COMP%], [data-motion="reduced"]   [_nghost-%COMP%]   .scsc-tree-chevron[_ngcontent-%COMP%]{transition:none}@media(forced-colors:active){.scsc-tree-item[_ngcontent-%COMP%]:focus-visible > .scsc-tree-row[_ngcontent-%COMP%]{outline-color:Highlight}.scsc-tree-row-selected[_ngcontent-%COMP%]{forced-color-adjust:none;background:Highlight;color:HighlightText}}`]})};function Rn(s,t){if(s&1&&(Ga(0,`scsc-text`,6),G_(1),Lf()),s&2){let e=y_();Jb(),nD(e.description)}}function Pn(s,t){if(s&1&&(Ga(0,`scsc-heading`,4),G_(1),Lf(),Ga(2,`scsc-text`,5),G_(3),Lf(),JT(4,Rn,2,1,`scsc-text`,6)),s&2){let e=t,n=y_();Pv(`level`,4)(`visualLevel`,5),Jb(),nD(e.label),Jb(2),nD(n.openCases(e.badge??0)),Jb(),t_(e.description?4:-1)}}function Kn(s,t){s&1&&(Ga(0,`scsc-text`,3),G_(1,`Select a location to see its caseload.`),Lf())}var $t=[{id:`superior`,label:`Superior Court of Santa Clara County`,icon:`landmark`,badge:1284,data:{kind:`court`},children:[{id:`civil`,label:`Civil Division`,icon:`scale`,badge:612,description:`Downtown Superior Court, 191 N. First St.`,data:{kind:`division`},children:[{id:`dept-1`,label:`Department 1 — Complex Civil`,badge:148,data:{kind:`department`},children:[{id:`cr-101`,label:`Courtroom 101`,badge:88,data:{kind:`courtroom`}},{id:`cr-102`,label:`Courtroom 102`,badge:60,data:{kind:`courtroom`}}]},{id:`dept-3`,label:`Department 3 — Unlimited Civil`,badge:301,data:{kind:`department`},children:[{id:`cr-301`,label:`Courtroom 301`,badge:301,data:{kind:`courtroom`}}]},{id:`dept-6`,label:`Department 6 — Small Claims`,badge:163,data:{kind:`department`},children:[{id:`cr-601`,label:`Courtroom 601`,badge:163,data:{kind:`courtroom`}}]}]},{id:`criminal`,label:`Criminal Division`,icon:`gavel`,badge:489,description:`Hall of Justice, 190 W. Hedding St.`,data:{kind:`division`},children:[{id:`dept-23`,label:`Department 23 — Felony Arraignments`,badge:276,data:{kind:`department`},children:[{id:`cr-23a`,label:`Courtroom 23A`,badge:190,data:{kind:`courtroom`}},{id:`cr-23b`,label:`Courtroom 23B`,badge:86,data:{kind:`courtroom`}}]},{id:`dept-42`,label:`Department 42 — Misdemeanor Trials`,badge:213,data:{kind:`department`},children:[{id:`cr-42`,label:`Courtroom 42`,badge:213,data:{kind:`courtroom`}}]}]},{id:`family`,label:`Family Division`,icon:`users`,badge:183,description:`Family Justice Center, 201 N. First St.`,data:{kind:`division`},children:[{id:`dept-71`,label:`Department 71 — Dissolution`,badge:183,data:{kind:`department`},children:[{id:`cr-71`,label:`Courtroom 71`,badge:183,data:{kind:`courtroom`}}]}]}]}];var De=class s{courts=$t;selected=q([`dept-3`]);expanded=q([`superior`,`civil`]);openCases=t=>`${t} open cases`;current=ut(()=>qt($t,this.selected()[0]));static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tree-court-hierarchy-demo`]],decls:8,vars:7,consts:[[1,`grid`,`gap-6`,`md:grid-cols-[minmax(0,22rem)_1fr]`],[`id`,`court-tree-heading`,3,`level`,`visualLevel`],[`ariaLabelledby`,`court-tree-heading`,`selectionMode`,`single`,`showToolbar`,``,1,`mt-2`,3,`selectedChange`,`expandedChange`,`nodes`,`selected`,`expanded`,`badgeLabel`],[`size`,`sm`,`tone`,`muted`],[3,`level`,`visualLevel`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[`size`,`sm`]],template:function(e,n){if(e&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-heading`,1),G_(3,` Open cases by location `),Lf(),Ga(4,`scsc-tree`,2),sD(`selectedChange`,function(r){return Y_(n.selected,r)||(n.selected=r),r})(`expandedChange`,function(r){return Y_(n.expanded,r)||(n.expanded=r),r}),Lf()(),Ga(5,`div`),JT(6,Pn,5,5)(7,Kn,2,0,`scsc-text`,3),Lf()()),e&2){let i;Jb(2),Pv(`level`,3)(`visualLevel`,5),Jb(2),Pv(`nodes`,n.courts),iD(`selected`,n.selected)(`expanded`,n.expanded),Pv(`badgeLabel`,n.openCases),Jb(2),t_((i=n.current())?6:7,i)}},dependencies:[kn$1,NE,I],encapsulation:2})};function qt(s,t){for(let e of s){if(e.id===t)return e;let n=qt(e.children??[],t);if(n)return n}}var Fn=()=>[`pleadings`,`motions`];function zn(s,t){s&1&&(Ga(0,`scsc-badge`,6),G_(1,`Sealed`),Lf())}function Vn(s,t){if(s&1&&(Ga(0,`span`,7),G_(1),Lf()),s&2){let e=y_().$implicit;Jb(),rD(` `,t,` · `,e.data?.pages,` pp. `)}}function Bn(s,t){if(s&1&&(uc(0,`scsc-icon`,4),Ga(1,`span`,5),G_(2),Lf(),JT(3,zn,2,0,`scsc-badge`,6),JT(4,Vn,2,2,`span`,7)),s&2){let e,n=t.$implicit;Pv(`name`,n.children?`folder`:`file-text`),Jb(2),nD(n.label),Jb(),t_(n.data?.sealed?3:-1),Jb(),t_((e=n.data?.filed)?4:-1,e)}}function Un(s,t){s&1&&G_(0),s&2&&$f(` Opened `,t,` in the viewer. `)}function Hn(s,t){s&1&&G_(0,` Double-click a document, or press Enter on it, to open it. `)}var Wn=[{id:`pleadings`,label:`Pleadings`,children:[{id:`doc-1`,label:`Complaint for Damages`,data:{filed:`2026-01-14`,pages:22}},{id:`doc-2`,label:`Answer to Complaint`,data:{filed:`2026-02-20`,pages:9}}]},{id:`motions`,label:`Motions`,children:[{id:`doc-3`,label:`Motion to Compel Discovery`,data:{filed:`2026-05-02`,pages:14}},{id:`doc-4`,label:`Declaration re Medical Records`,data:{filed:`2026-05-02`,pages:31,sealed:!0}}]},{id:`orders`,label:`Orders`,children:[{id:`doc-5`,label:`Order After Hearing`,data:{filed:`2026-06-11`,pages:3}}]}];var Ee=class s{documents=Wn;opened=q(``);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tree-custom-template-demo`]],decls:6,vars:5,consts:[[1,`max-w-xl`],[`label`,`Documents in 24CV012345`,`selectionMode`,`single`,3,`nodeActivate`,`nodes`,`expanded`],[`scscTreeNodeDef`,``,3,`scscTreeNodeDefOf`],[`size`,`sm`,`tone`,`muted`,`role`,`status`,1,`mt-3`],[`size`,`sm`,1,`shrink-0`,`text-primary`,3,`name`],[1,`min-w-0`,`flex-1`,`break-words`],[`tone`,`primary`,`soft`,``,`size`,`sm`],[1,`shrink-0`,`text-xs`,`text-base-content/70`,`tnum`]],template:function(e,n){if(e&1&&(Ga(0,`div`,0)(1,`scsc-tree`,1),lc(`nodeActivate`,function(r){return n.opened.set(r.label)}),Ov(2,Bn,5,4,`ng-template`,2),Lf(),Ga(3,`scsc-text`,3),JT(4,Un,1,1)(5,Hn,1,0),Lf()()),e&2){let i;Jb(),Pv(`nodes`,n.documents)(`expanded`,rM(4,Fn)),Jb(),Pv(`scscTreeNodeDefOf`,n.documents),Jb(2),t_((i=n.opened())?4:5,i)}},dependencies:[jn$1,ye,NE,I,j],encapsulation:2})};var $n={sheriff:[{id:`sheriff-warrants`,label:`Warrants Unit`,icon:`users`,hasChildren:!0,data:`team`},{id:`sheriff-transport`,label:`Inmate Transport`,icon:`users`,hasChildren:!0,data:`team`}],"sheriff-warrants":[{id:`sw-active`,label:`Active warrants`,icon:`file-text`,data:`report`},{id:`sw-recalled`,label:`Recalled this week`,icon:`file-text`,data:`report`}],"sheriff-transport":[{id:`st-daily`,label:`Daily transport list`,icon:`folder`,data:`list`}],pd:[{id:`pd-felony`,label:`Felony Team A`,icon:`users`,hasChildren:!0,data:`team`}],"pd-felony":[{id:`pdf-calendar`,label:`Tomorrow’s calendar`,icon:`file-text`,data:`report`},{id:`pdf-clients`,label:`Assigned clients`,icon:`folder`,data:`list`}],probation:[{id:`prob-adult`,label:`Adult Supervision`,icon:`users`,hasChildren:!0,data:`team`}],"prob-adult":[{id:`pa-reviews`,label:`Progress reviews due`,icon:`file-text`,data:`report`}]};var Ne=class s{agencies=[{id:`sheriff`,label:`Office of the Sheriff`,icon:`shield`,hasChildren:!0,data:`agency`},{id:`pd`,label:`Public Defender`,icon:`briefcase`,hasChildren:!0,data:`agency`},{id:`probation`,label:`Probation Department`,icon:`building`,hasChildren:!0,data:`agency`}];expanded=q([]);probationAttempts=0;loadChildren=t=>_n$1(750).pipe(je$1(()=>t.id===`probation`&&this.probationAttempts++===0?yu(()=>new Error(`503 Service Unavailable`)):k($n[t.id]??[])));loadError=t=>`Couldn\u2019t load ${t.label}. The portal did not respond.`;static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tree-lazy-resources-demo`]],decls:4,vars:4,consts:[[1,`max-w-md`],[`size`,`sm`,`tone`,`muted`],[`label`,`Portal resources`,`persistKey`,`docs-tree-resources`,1,`mt-3`,3,`expandedChange`,`nodes`,`loadChildren`,`expanded`,`loadErrorLabel`]],template:function(e,n){e&1&&(Ga(0,`div`,0)(1,`scsc-text`,1),G_(2,` Each level loads on first expand (about ¾ s). Probation’s first request fails: use Retry, or press Enter on it. `),Lf(),Ga(3,`scsc-tree`,2),sD(`expandedChange`,function(r){return Y_(n.expanded,r)||(n.expanded=r),r}),Lf()()),e&2&&(Jb(3),Pv(`nodes`,n.agencies)(`loadChildren`,n.loadChildren),iD(`expanded`,n.expanded),Pv(`loadErrorLabel`,n.loadError))},dependencies:[NE,I],encapsulation:2})};var qn=()=>[`cases`,`calendars`];function jn(s,t){s&1&&G_(0),s&2&&$f(` Saved: `,t,` `)}var jt=[{id:`cases`,label:`Case records`,icon:`folder`,children:[{id:`cases-view`,label:`View case records`,data:`CASE_VIEW`},{id:`cases-edit`,label:`Edit case records`,data:`CASE_EDIT`},{id:`cases-seal`,label:`Seal and unseal records`,description:`Granted by the presiding judge only`,disabled:!0,data:`CASE_SEAL`}]},{id:`calendars`,label:`Calendars`,icon:`folder`,children:[{id:`cal-view`,label:`View calendars`,data:`CALENDAR_VIEW`},{id:`cal-schedule`,label:`Schedule hearings`,data:`HEARING_SCHEDULE`},{id:`cal-continue`,label:`Continue hearings`,data:`HEARING_CONTINUE`}]},{id:`documents`,label:`Documents`,icon:`folder`,children:[{id:`doc-upload`,label:`Upload filings`,data:`DOCUMENT_UPLOAD`},{id:`doc-redact`,label:`Redact documents`,data:`DOCUMENT_REDACT`}]},{id:`reports`,label:`Reports`,icon:`folder`,children:[{id:`rep-run`,label:`Run reports`,data:`REPORT_VIEW`},{id:`rep-share`,label:`Share reports`,data:`REPORT_SHARE`}]}];var je=new Map;var Qt=s=>s.forEach(t=>{t.data&&je.set(t.id,t.data),Qt(t.children??[])});Qt(jt);var Me=class s{permissions=jt;total=je.size;checked=q([`cal-view`,`cases-view`]);saved=q(``);granted=ut(()=>this.checked().map(t=>je.get(t)).filter(t=>!!t));save(){this.saved.set(this.granted().join(`, `)||`no permissions`)}static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tree-permissions-demo`]],decls:11,vars:9,consts:[[1,`max-w-lg`],[`id`,`role-permissions`,3,`level`,`visualLevel`],[`ariaLabelledby`,`role-permissions`,`selectionMode`,`checkbox`,`showToolbar`,``,1,`mt-2`,3,`selectedChange`,`nodes`,`selected`,`expanded`],[1,`mt-4`,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[`size`,`sm`,`tone`,`muted`,`tnum`,``],[`variant`,`primary`,`size`,`sm`,3,`click`],[`size`,`sm`,`role`,`status`,1,`mt-2`,`break-words`]],template:function(e,n){if(e&1&&(Ga(0,`div`,0)(1,`scsc-heading`,1),G_(2,` Permissions for Civil Clerk II `),Lf(),Ga(3,`scsc-tree`,2),sD(`selectedChange`,function(r){return Y_(n.checked,r)||(n.checked=r),r}),Lf(),Ga(4,`div`,3)(5,`scsc-text`,4),G_(6),Lf(),Ga(7,`scsc-button`,5),lc(`click`,function(){return n.save()}),G_(8,`Save role`),Lf()(),Ga(9,`scsc-text`,6),JT(10,jn,1,1),Lf()()),e&2){let i;Jb(),Pv(`level`,3)(`visualLevel`,5),Jb(2),Pv(`nodes`,n.permissions),iD(`selected`,n.checked),Pv(`expanded`,rM(8,qn)),Jb(3),rD(` `,n.granted().length,` of `,n.total,` permissions granted `),Jb(4),t_((i=n.saved())?10:-1,i)}},dependencies:[sn$1,kn$1,NE,I],encapsulation:2})};function Qn(s,t){s&1&&G_(0),s&2&&$f(` Opening `,t,` (PDF)… `)}function Gn(s,t){s&1&&G_(0,` Press Enter on a form, or double-click it, to open it. `)}var D=(s,t)=>({id:s,label:`${s} ${t}`,icon:`file-text`});var Jn=[{id:`family`,label:`Family law`,icon:`folder`,children:[{id:`family-divorce`,label:`Divorce and legal separation`,icon:`folder`,children:[D(`FL-100`,`Petition — Marriage/Domestic Partnership`),D(`FL-110`,`Summons (Family Law)`),D(`FL-150`,`Income and Expense Declaration`)]},{id:`family-custody`,label:`Custody and support`,icon:`folder`,children:[D(`FL-105`,`Declaration Under Uniform Child Custody Jurisdiction Act`),D(`FL-300`,`Request for Order`)]}]},{id:`civil`,label:`Civil`,icon:`folder`,children:[{id:`civil-small-claims`,label:`Small claims`,icon:`folder`,children:[D(`SC-100`,`Plaintiff’s Claim and Order to Go to Small Claims Court`),D(`SC-120`,`Defendant’s Claim and Order to Go to Small Claims Court`)]},{id:`civil-eviction`,label:`Eviction (unlawful detainer)`,icon:`folder`,children:[D(`UD-100`,`Complaint — Unlawful Detainer`),D(`UD-105`,`Answer — Unlawful Detainer`)]},D(`CIV-100`,`Request for Entry of Default`)]},{id:`restraining`,label:`Restraining orders`,icon:`folder`,children:[D(`DV-100`,`Request for Domestic Violence Restraining Order`),D(`DV-109`,`Notice of Court Hearing`),D(`CH-100`,`Request for Civil Harassment Restraining Orders`)]},{id:`fees`,label:`Fee waivers`,icon:`folder`,children:[D(`FW-001`,`Request to Waive Court Fees`),D(`FW-003`,`Order on Court Fee Waiver`)]}];var Ae=class s{forms=Jn;query=q(`restraining`);opened=q(``);static ɵfac=function(e){return new(e||s)};static ɵcmp=Af({type:s,selectors:[[`app-tree-searchable-demo`]],decls:5,vars:3,consts:[[1,`max-w-xl`],[`label`,`Judicial Council forms`,`searchable`,``,`searchLabel`,`Search forms by number or title`,3,`filterChange`,`nodeActivate`,`nodes`,`filter`],[`size`,`sm`,`tone`,`muted`,`role`,`status`,1,`mt-3`]],template:function(e,n){if(e&1&&(Ga(0,`div`,0)(1,`scsc-tree`,1),sD(`filterChange`,function(r){return Y_(n.query,r)||(n.query=r),r}),lc(`nodeActivate`,function(r){return n.opened.set(r.id)}),Lf(),Ga(2,`scsc-text`,2),JT(3,Qn,1,1)(4,Gn,1,0),Lf()()),e&2){let i;Jb(),Pv(`nodes`,n.forms),iD(`filter`,n.query),Jb(2),t_((i=n.opened())?3:4,i)}},dependencies:[NE,I],encapsulation:2})};var te={"tree-court-hierarchy":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscHeading, ScscText } from '@scscourt/design';
import { ScscTree, type ScscTreeNode } from '@scscourt/design/tree';

interface CourtLocation {
  kind: 'court' | 'division' | 'department' | 'courtroom';
  address?: string;
}

const COURTS: ScscTreeNode<CourtLocation>[] = [
  {
    id: 'superior',
    label: 'Superior Court of Santa Clara County',
    icon: 'landmark',
    badge: 1284,
    data: { kind: 'court' },
    children: [
      {
        id: 'civil',
        label: 'Civil Division',
        icon: 'scale',
        badge: 612,
        description: 'Downtown Superior Court, 191 N. First St.',
        data: { kind: 'division' },
        children: [
          {
            id: 'dept-1',
            label: 'Department 1 \u2014 Complex Civil',
            badge: 148,
            data: { kind: 'department' },
            children: [
              { id: 'cr-101', label: 'Courtroom 101', badge: 88, data: { kind: 'courtroom' } },
              { id: 'cr-102', label: 'Courtroom 102', badge: 60, data: { kind: 'courtroom' } },
            ],
          },
          {
            id: 'dept-3',
            label: 'Department 3 \u2014 Unlimited Civil',
            badge: 301,
            data: { kind: 'department' },
            children: [
              { id: 'cr-301', label: 'Courtroom 301', badge: 301, data: { kind: 'courtroom' } },
            ],
          },
          {
            id: 'dept-6',
            label: 'Department 6 \u2014 Small Claims',
            badge: 163,
            data: { kind: 'department' },
            children: [
              { id: 'cr-601', label: 'Courtroom 601', badge: 163, data: { kind: 'courtroom' } },
            ],
          },
        ],
      },
      {
        id: 'criminal',
        label: 'Criminal Division',
        icon: 'gavel',
        badge: 489,
        description: 'Hall of Justice, 190 W. Hedding St.',
        data: { kind: 'division' },
        children: [
          {
            id: 'dept-23',
            label: 'Department 23 \u2014 Felony Arraignments',
            badge: 276,
            data: { kind: 'department' },
            children: [
              { id: 'cr-23a', label: 'Courtroom 23A', badge: 190, data: { kind: 'courtroom' } },
              { id: 'cr-23b', label: 'Courtroom 23B', badge: 86, data: { kind: 'courtroom' } },
            ],
          },
          {
            id: 'dept-42',
            label: 'Department 42 \u2014 Misdemeanor Trials',
            badge: 213,
            data: { kind: 'department' },
            children: [
              { id: 'cr-42', label: 'Courtroom 42', badge: 213, data: { kind: 'courtroom' } },
            ],
          },
        ],
      },
      {
        id: 'family',
        label: 'Family Division',
        icon: 'users',
        badge: 183,
        description: 'Family Justice Center, 201 N. First St.',
        data: { kind: 'division' },
        children: [
          {
            id: 'dept-71',
            label: 'Department 71 \u2014 Dissolution',
            badge: 183,
            data: { kind: 'department' },
            children: [
              { id: 'cr-71', label: 'Courtroom 71', badge: 183, data: { kind: 'courtroom' } },
            ],
          },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-tree-court-hierarchy-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscHeading, ScscText, ScscTree],
  template: \`
    <div class="grid gap-6 md:grid-cols-[minmax(0,22rem)_1fr]">
      <div>
        <scsc-heading id="court-tree-heading" [level]="3" [visualLevel]="5">
          Open cases by location
        </scsc-heading>
        <!-- The heading names the tree; badges are read as "612 open cases". -->
        <scsc-tree
          class="mt-2"
          [nodes]="courts"
          ariaLabelledby="court-tree-heading"
          selectionMode="single"
          [(selected)]="selected"
          [(expanded)]="expanded"
          [badgeLabel]="openCases"
          showToolbar
        />
      </div>
      <div>
        @if (current(); as node) {
          <scsc-heading [level]="4" [visualLevel]="5">{{ node.label }}</scsc-heading>
          <scsc-text size="sm" tone="muted" tnum>{{ openCases(node.badge ?? 0) }}</scsc-text>
          @if (node.description) {
            <scsc-text size="sm">{{ node.description }}</scsc-text>
          }
        } @else {
          <scsc-text size="sm" tone="muted">Select a location to see its caseload.</scsc-text>
        }
      </div>
    </div>
  \`,
})
export class TreeCourtHierarchyDemo {
  protected readonly courts = COURTS;
  protected readonly selected = signal<string[]>(['dept-3']);
  protected readonly expanded = signal<string[]>(['superior', 'civil']);

  protected readonly openCases = (count: string | number): string => \`\${count} open cases\`;

  protected readonly current = computed(() => findNode(COURTS, this.selected()[0]));
}

function findNode(
  nodes: ScscTreeNode<CourtLocation>[],
  id: string | undefined,
): ScscTreeNode<CourtLocation> | undefined {
  for (const node of nodes) {
    if (node.id === id) return node;
    const found = findNode(node.children ?? [], id);
    if (found) return found;
  }
  return undefined;
}
`,html:`<div class="grid gap-6 md:grid-cols-[minmax(0,22rem)_1fr]">
  <div>
    <scsc-heading id="court-tree-heading" [level]="3" [visualLevel]="5">
      Open cases by location
    </scsc-heading>
    <!-- The heading names the tree; badges are read as "612 open cases". -->
    <scsc-tree
      class="mt-2"
      [nodes]="courts"
      ariaLabelledby="court-tree-heading"
      selectionMode="single"
      [(selected)]="selected"
      [(expanded)]="expanded"
      [badgeLabel]="openCases"
      showToolbar
    />
  </div>
  <div>
    @if (current(); as node) {
      <scsc-heading [level]="4" [visualLevel]="5">{{ node.label }}</scsc-heading>
      <scsc-text size="sm" tone="muted" tnum>{{ openCases(node.badge ?? 0) }}</scsc-text>
      @if (node.description) {
        <scsc-text size="sm">{{ node.description }}</scsc-text>
      }
    } @else {
      <scsc-text size="sm" tone="muted">Select a location to see its caseload.</scsc-text>
    }
  </div>
</div>
`},"tree-custom-template":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscBadge, ScscIcon, ScscText } from '@scscourt/design';
import { ScscTree, ScscTreeNodeDef, type ScscTreeNode } from '@scscourt/design/tree';

interface CaseDocument {
  filed?: string;
  pages?: number;
  sealed?: boolean;
}

const DOCUMENTS: ScscTreeNode<CaseDocument>[] = [
  {
    id: 'pleadings',
    label: 'Pleadings',
    children: [
      { id: 'doc-1', label: 'Complaint for Damages', data: { filed: '2026-01-14', pages: 22 } },
      { id: 'doc-2', label: 'Answer to Complaint', data: { filed: '2026-02-20', pages: 9 } },
    ],
  },
  {
    id: 'motions',
    label: 'Motions',
    children: [
      {
        id: 'doc-3',
        label: 'Motion to Compel Discovery',
        data: { filed: '2026-05-02', pages: 14 },
      },
      {
        id: 'doc-4',
        label: 'Declaration re Medical Records',
        data: { filed: '2026-05-02', pages: 31, sealed: true },
      },
    ],
  },
  {
    id: 'orders',
    label: 'Orders',
    children: [
      { id: 'doc-5', label: 'Order After Hearing', data: { filed: '2026-06-11', pages: 3 } },
    ],
  },
];

@Component({
  selector: 'app-tree-custom-template-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscBadge, ScscIcon, ScscText, ScscTree, ScscTreeNodeDef],
  template: \`
    <div class="max-w-xl">
      <scsc-tree
        [nodes]="documents"
        label="Documents in 24CV012345"
        selectionMode="single"
        [expanded]="['pleadings', 'motions']"
        (nodeActivate)="opened.set($event.label)"
      >
        <!-- Replaces the label area; the tree keeps the chevron, focus ring and keyboard. -->
        <ng-template scscTreeNodeDef [scscTreeNodeDefOf]="documents" let-node>
          <scsc-icon
            [name]="node.children ? 'folder' : 'file-text'"
            size="sm"
            class="shrink-0 text-primary"
          />
          <span class="min-w-0 flex-1 break-words">{{ node.label }}</span>
          @if (node.data?.sealed) {
            <scsc-badge tone="primary" soft size="sm">Sealed</scsc-badge>
          }
          @if (node.data?.filed; as filed) {
            <span class="shrink-0 text-xs text-base-content/70 tnum">
              {{ filed }} \xB7 {{ node.data?.pages }} pp.
            </span>
          }
        </ng-template>
      </scsc-tree>
      <scsc-text size="sm" tone="muted" class="mt-3" role="status">
        @if (opened(); as title) {
          Opened {{ title }} in the viewer.
        } @else {
          Double-click a document, or press Enter on it, to open it.
        }
      </scsc-text>
    </div>
  \`,
})
export class TreeCustomTemplateDemo {
  protected readonly documents = DOCUMENTS;
  protected readonly opened = signal('');
}
`,html:`<div class="max-w-xl">
  <scsc-tree
    [nodes]="documents"
    label="Documents in 24CV012345"
    selectionMode="single"
    [expanded]="['pleadings', 'motions']"
    (nodeActivate)="opened.set($event.label)"
  >
    <!-- Replaces the label area; the tree keeps the chevron, focus ring and keyboard. -->
    <ng-template scscTreeNodeDef [scscTreeNodeDefOf]="documents" let-node>
      <scsc-icon
        [name]="node.children ? 'folder' : 'file-text'"
        size="sm"
        class="shrink-0 text-primary"
      />
      <span class="min-w-0 flex-1 break-words">{{ node.label }}</span>
      @if (node.data?.sealed) {
        <scsc-badge tone="primary" soft size="sm">Sealed</scsc-badge>
      }
      @if (node.data?.filed; as filed) {
        <span class="shrink-0 text-xs text-base-content/70 tnum">
          {{ filed }} \xB7 {{ node.data?.pages }} pp.
        </span>
      }
    </ng-template>
  </scsc-tree>
  <scsc-text size="sm" tone="muted" class="mt-3" role="status">
    @if (opened(); as title) {
      Opened {{ title }} in the viewer.
    } @else {
      Double-click a document, or press Enter on it, to open it.
    }
  </scsc-text>
</div>
`},"tree-lazy-resources":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscText } from '@scscourt/design';
import { ScscTree, type ScscTreeLoadChildren, type ScscTreeNode } from '@scscourt/design/tree';
import { of, switchMap, throwError, timer } from 'rxjs';

type ResourceKind = 'agency' | 'team' | 'report' | 'list';

/** What the portal API would return for each parent, one level at a time. */
const CHILDREN: Record<string, ScscTreeNode<ResourceKind>[]> = {
  sheriff: [
    {
      id: 'sheriff-warrants',
      label: 'Warrants Unit',
      icon: 'users',
      hasChildren: true,
      data: 'team',
    },
    {
      id: 'sheriff-transport',
      label: 'Inmate Transport',
      icon: 'users',
      hasChildren: true,
      data: 'team',
    },
  ],
  'sheriff-warrants': [
    { id: 'sw-active', label: 'Active warrants', icon: 'file-text', data: 'report' },
    { id: 'sw-recalled', label: 'Recalled this week', icon: 'file-text', data: 'report' },
  ],
  'sheriff-transport': [
    { id: 'st-daily', label: 'Daily transport list', icon: 'folder', data: 'list' },
  ],
  pd: [{ id: 'pd-felony', label: 'Felony Team A', icon: 'users', hasChildren: true, data: 'team' }],
  'pd-felony': [
    { id: 'pdf-calendar', label: 'Tomorrow\u2019s calendar', icon: 'file-text', data: 'report' },
    { id: 'pdf-clients', label: 'Assigned clients', icon: 'folder', data: 'list' },
  ],
  probation: [
    {
      id: 'prob-adult',
      label: 'Adult Supervision',
      icon: 'users',
      hasChildren: true,
      data: 'team',
    },
  ],
  'prob-adult': [
    { id: 'pa-reviews', label: 'Progress reviews due', icon: 'file-text', data: 'report' },
  ],
};

@Component({
  selector: 'app-tree-lazy-resources-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText, ScscTree],
  template: \`
    <div class="max-w-md">
      <scsc-text size="sm" tone="muted">
        Each level loads on first expand (about \xBE s). Probation\u2019s first request fails: use Retry, or
        press Enter on it.
      </scsc-text>
      <scsc-tree
        class="mt-3"
        [nodes]="agencies"
        label="Portal resources"
        [loadChildren]="loadChildren"
        [(expanded)]="expanded"
        persistKey="docs-tree-resources"
        [loadErrorLabel]="loadError"
      />
    </div>
  \`,
})
export class TreeLazyResourcesDemo {
  protected readonly agencies: ScscTreeNode<ResourceKind>[] = [
    {
      id: 'sheriff',
      label: 'Office of the Sheriff',
      icon: 'shield',
      hasChildren: true,
      data: 'agency',
    },
    { id: 'pd', label: 'Public Defender', icon: 'briefcase', hasChildren: true, data: 'agency' },
    {
      id: 'probation',
      label: 'Probation Department',
      icon: 'building',
      hasChildren: true,
      data: 'agency',
    },
  ];
  protected readonly expanded = signal<string[]>([]);

  private probationAttempts = 0;

  /** Simulates the portal API: 750 ms of latency, and one failure. */
  protected readonly loadChildren: ScscTreeLoadChildren<ResourceKind> = (node) =>
    timer(750).pipe(
      switchMap(() =>
        node.id === 'probation' && this.probationAttempts++ === 0
          ? throwError(() => new Error('503 Service Unavailable'))
          : of(CHILDREN[node.id] ?? []),
      ),
    );

  protected readonly loadError = (node: ScscTreeNode<ResourceKind>): string =>
    \`Couldn\u2019t load \${node.label}. The portal did not respond.\`;
}
`,html:`<div class="max-w-md">
  <scsc-text size="sm" tone="muted">
    Each level loads on first expand (about \xBE s). Probation\u2019s first request fails: use Retry, or
    press Enter on it.
  </scsc-text>
  <scsc-tree
    class="mt-3"
    [nodes]="agencies"
    label="Portal resources"
    [loadChildren]="loadChildren"
    [(expanded)]="expanded"
    persistKey="docs-tree-resources"
    [loadErrorLabel]="loadError"
  />
</div>
`},"tree-permissions":{ts:`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ScscButton, ScscHeading, ScscText } from '@scscourt/design';
import { ScscTree, type ScscTreeNode } from '@scscourt/design/tree';

/** Permission keys live in \`data\`; group nodes have none. */
const PERMISSIONS: ScscTreeNode<string>[] = [
  {
    id: 'cases',
    label: 'Case records',
    icon: 'folder',
    children: [
      { id: 'cases-view', label: 'View case records', data: 'CASE_VIEW' },
      { id: 'cases-edit', label: 'Edit case records', data: 'CASE_EDIT' },
      {
        id: 'cases-seal',
        label: 'Seal and unseal records',
        description: 'Granted by the presiding judge only',
        disabled: true,
        data: 'CASE_SEAL',
      },
    ],
  },
  {
    id: 'calendars',
    label: 'Calendars',
    icon: 'folder',
    children: [
      { id: 'cal-view', label: 'View calendars', data: 'CALENDAR_VIEW' },
      { id: 'cal-schedule', label: 'Schedule hearings', data: 'HEARING_SCHEDULE' },
      { id: 'cal-continue', label: 'Continue hearings', data: 'HEARING_CONTINUE' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: 'folder',
    children: [
      { id: 'doc-upload', label: 'Upload filings', data: 'DOCUMENT_UPLOAD' },
      { id: 'doc-redact', label: 'Redact documents', data: 'DOCUMENT_REDACT' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'folder',
    children: [
      { id: 'rep-run', label: 'Run reports', data: 'REPORT_VIEW' },
      { id: 'rep-share', label: 'Share reports', data: 'REPORT_SHARE' },
    ],
  },
];

const KEYS = new Map<string, string>();
const collect = (nodes: ScscTreeNode<string>[]): void =>
  nodes.forEach((n) => {
    if (n.data) KEYS.set(n.id, n.data);
    collect(n.children ?? []);
  });
collect(PERMISSIONS);

@Component({
  selector: 'app-tree-permissions-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscButton, ScscHeading, ScscText, ScscTree],
  template: \`
    <div class="max-w-lg">
      <scsc-heading id="role-permissions" [level]="3" [visualLevel]="5">
        Permissions for Civil Clerk II
      </scsc-heading>
      <!-- Checking a group checks its enabled permissions; the sealed-records one stays off. -->
      <scsc-tree
        class="mt-2"
        [nodes]="permissions"
        ariaLabelledby="role-permissions"
        selectionMode="checkbox"
        [(selected)]="checked"
        [expanded]="['cases', 'calendars']"
        showToolbar
      />
      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <scsc-text size="sm" tone="muted" tnum>
          {{ granted().length }} of {{ total }} permissions granted
        </scsc-text>
        <scsc-button variant="primary" size="sm" (click)="save()">Save role</scsc-button>
      </div>
      <!-- The status region is always present, so the new text is announced. -->
      <scsc-text size="sm" class="mt-2 break-words" role="status">
        @if (saved(); as keys) {
          Saved: {{ keys }}
        }
      </scsc-text>
    </div>
  \`,
})
export class TreePermissionsDemo {
  protected readonly permissions = PERMISSIONS;
  protected readonly total = KEYS.size;
  /** Group ids appear here too when every permission in them is checked. */
  protected readonly checked = signal<string[]>(['cal-view', 'cases-view']);
  protected readonly saved = signal('');

  protected readonly granted = computed(() =>
    this.checked()
      .map((id) => KEYS.get(id))
      .filter((key) => !!key),
  );

  protected save(): void {
    this.saved.set(this.granted().join(', ') || 'no permissions');
  }
}
`,html:`<div class="max-w-lg">
  <scsc-heading id="role-permissions" [level]="3" [visualLevel]="5">
    Permissions for Civil Clerk II
  </scsc-heading>
  <!-- Checking a group checks its enabled permissions; the sealed-records one stays off. -->
  <scsc-tree
    class="mt-2"
    [nodes]="permissions"
    ariaLabelledby="role-permissions"
    selectionMode="checkbox"
    [(selected)]="checked"
    [expanded]="['cases', 'calendars']"
    showToolbar
  />
  <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
    <scsc-text size="sm" tone="muted" tnum>
      {{ granted().length }} of {{ total }} permissions granted
    </scsc-text>
    <scsc-button variant="primary" size="sm" (click)="save()">Save role</scsc-button>
  </div>
  <!-- The status region is always present, so the new text is announced. -->
  <scsc-text size="sm" class="mt-2 break-words" role="status">
    @if (saved(); as keys) {
      Saved: {{ keys }}
    }
  </scsc-text>
</div>
`},"tree-searchable":{ts:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScscText } from '@scscourt/design';
import { ScscTree, type ScscTreeNode } from '@scscourt/design/tree';

const form = (code: string, title: string): ScscTreeNode => ({
  id: code,
  label: \`\${code} \${title}\`,
  icon: 'file-text',
});

const FORMS: ScscTreeNode[] = [
  {
    id: 'family',
    label: 'Family law',
    icon: 'folder',
    children: [
      {
        id: 'family-divorce',
        label: 'Divorce and legal separation',
        icon: 'folder',
        children: [
          form('FL-100', 'Petition \u2014 Marriage/Domestic Partnership'),
          form('FL-110', 'Summons (Family Law)'),
          form('FL-150', 'Income and Expense Declaration'),
        ],
      },
      {
        id: 'family-custody',
        label: 'Custody and support',
        icon: 'folder',
        children: [
          form('FL-105', 'Declaration Under Uniform Child Custody Jurisdiction Act'),
          form('FL-300', 'Request for Order'),
        ],
      },
    ],
  },
  {
    id: 'civil',
    label: 'Civil',
    icon: 'folder',
    children: [
      {
        id: 'civil-small-claims',
        label: 'Small claims',
        icon: 'folder',
        children: [
          form('SC-100', 'Plaintiff\u2019s Claim and Order to Go to Small Claims Court'),
          form('SC-120', 'Defendant\u2019s Claim and Order to Go to Small Claims Court'),
        ],
      },
      {
        id: 'civil-eviction',
        label: 'Eviction (unlawful detainer)',
        icon: 'folder',
        children: [
          form('UD-100', 'Complaint \u2014 Unlawful Detainer'),
          form('UD-105', 'Answer \u2014 Unlawful Detainer'),
        ],
      },
      form('CIV-100', 'Request for Entry of Default'),
    ],
  },
  {
    id: 'restraining',
    label: 'Restraining orders',
    icon: 'folder',
    children: [
      form('DV-100', 'Request for Domestic Violence Restraining Order'),
      form('DV-109', 'Notice of Court Hearing'),
      form('CH-100', 'Request for Civil Harassment Restraining Orders'),
    ],
  },
  {
    id: 'fees',
    label: 'Fee waivers',
    icon: 'folder',
    children: [
      form('FW-001', 'Request to Waive Court Fees'),
      form('FW-003', 'Order on Court Fee Waiver'),
    ],
  },
];

@Component({
  selector: 'app-tree-searchable-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscText, ScscTree],
  template: \`
    <div class="max-w-xl">
      <!-- Matches keep their folders, which open; the count is announced as you type. -->
      <scsc-tree
        [nodes]="forms"
        label="Judicial Council forms"
        searchable
        searchLabel="Search forms by number or title"
        [(filter)]="query"
        (nodeActivate)="opened.set($event.id)"
      />
      <scsc-text size="sm" tone="muted" class="mt-3" role="status">
        @if (opened(); as code) {
          Opening {{ code }} (PDF)\u2026
        } @else {
          Press Enter on a form, or double-click it, to open it.
        }
      </scsc-text>
    </div>
  \`,
})
export class TreeSearchableDemo {
  protected readonly forms = FORMS;
  protected readonly query = signal('restraining');
  protected readonly opened = signal('');
}
`,html:`<div class="max-w-xl">
  <!-- Matches keep their folders, which open; the count is announced as you type. -->
  <scsc-tree
    [nodes]="forms"
    label="Judicial Council forms"
    searchable
    searchLabel="Search forms by number or title"
    [(filter)]="query"
    (nodeActivate)="opened.set($event.id)"
  />
  <scsc-text size="sm" tone="muted" class="mt-3" role="status">
    @if (opened(); as code) {
      Opening {{ code }} (PDF)\u2026
    } @else {
      Press Enter on a form, or double-click it, to open it.
    }
  </scsc-text>
</div>
`}};var vs={slug:`tree`,name:`Tree`,classes:[`ScscTree`,`ScscTreeNodeDef`],category:`Data Display`,whenToUse:[`A hierarchy people browse or pick from: court → division → department → courtroom, agencies and teams, permission groups, folders of case documents.`,"Pass `nodes` (`ScscTreeNode[]`, children in `children`). For large or remote trees, mark nodes `hasChildren` and fetch them on first expand with `loadChildren`, which takes a Promise or an Observable.","`selectionMode`: `single` to pick one location, `multi` for independent picks, `checkbox` for tri-state groups (a parent checks its loaded, enabled descendants). `[(selected)]` and `[(expanded)]` are id arrays; `persistKey` keeps the expanded ids in `localStorage`.","Two or three levels of site navigation belong in `scsc-sidebar-nav`; a flat list of choices in `scsc-multi-select` or checkboxes. Use a tree when depth and grouping carry meaning.",`Only expanded branches are rendered, which keeps a few thousand nodes responsive. There is no virtual scrolling: for tens of thousands of visible rows, lazy-load levels or page the data.`,"Drag-to-move, a context menu and tree rows inside `scsc-data-grid` are not available yet."],setup:`// package.json \u2014 the tree is built on the CDK tree (a peer of @scscourt/design)
"@angular/cdk": "^22.0.0"

// import from the secondary entry point, not from '@scscourt/design'
import { ScscTree, ScscTreeNodeDef, type ScscTreeNode } from '@scscourt/design/tree';

// icons the tree draws itself (add the ones your nodes use)
import { Check, ChevronRight, ChevronsDownUp, ChevronsUpDown, CircleAlert, FolderTree,
  Minus, RotateCw, Search, Square, SquareCheck, X } from 'lucide-angular';
provideScscIcons({ Check, ChevronRight, ChevronsDownUp, ChevronsUpDown, CircleAlert, FolderTree,
  Minus, RotateCw, Search, Square, SquareCheck, X });`,demos:[{id:`tree-court-hierarchy`,title:`Court hierarchy with case counts`,description:'Single selection, named by the heading through `ariaLabelledby`. Badges show open cases; `badgeLabel` makes a screen reader say "612 open cases" instead of a bare number. The toolbar expands and collapses everything.',component:De,source:te[`tree-court-hierarchy`]},{id:`tree-lazy-resources`,title:`Lazy resources with a failing branch`,description:"`loadChildren` returns an Observable with simulated latency. The expanding node is `aria-busy` with a loading row; Probation fails on the first try and shows an inline error with Retry. `persistKey` restores what you had open after a reload.",component:Ne,source:te[`tree-lazy-resources`]},{id:`tree-permissions`,title:`Permission checkboxes`,description:'Tri-state `checkbox` mode with Select all / Select none. Checking a group checks every enabled permission in it; the disabled "Seal and unseal records" keeps its state, so its group stays mixed.',component:Me,source:te[`tree-permissions`]},{id:`tree-searchable`,title:`Searchable forms library`,description:"`searchable` adds a filter box bound to `[(filter)]`. Matches stay with their folders, which open; the matched text is highlighted and the count is announced. Press Down in the box to move into the tree.",component:Ae,source:te[`tree-searchable`]},{id:`tree-custom-template`,title:`Custom row template`,description:"`<ng-template scscTreeNodeDef let-node>` replaces the row content with icons, a Sealed badge and the filing date; `[scscTreeNodeDefOf]` types `node.data`. Enter or a double-click on a document emits `nodeActivate`.",component:Ee,source:te[`tree-custom-template`]}],keyboard:[{keys:`Tab / Shift + Tab`,action:"Moves into and out of the tree. The tree is a single tab stop: focus returns to the last focused node, or to the first selected node in `single` and `multi` mode."},{keys:`ArrowDown / ArrowUp`,action:`Moves to the next / previous visible node.`},{keys:`ArrowRight`,action:`On a closed parent: expands it (and loads lazy children). On an open parent: moves to its first child. On a leaf: nothing. Reversed in right-to-left layouts.`},{keys:`ArrowLeft`,action:`On an open parent: collapses it. Otherwise: moves to the parent. Reversed in right-to-left layouts.`},{keys:`Home / End`,action:`Moves to the first / last visible node.`},{keys:`Enter`,action:"On a parent: expands or collapses it. On a leaf: activates it (`nodeActivate`), and in `single` mode also selects it. On a branch that failed to load: retries."},{keys:`Space`,action:"`single`: selects the node. `multi`: toggles its selection. `checkbox`: toggles the checkbox (a parent toggles its enabled descendants). `none`: same as Enter."},{keys:`*`,action:`Expands every sibling of the focused node.`},{keys:`Type a character`,action:`Moves to the next node whose label starts with the typed text.`},{keys:`Shift + ArrowDown / ArrowUp`,action:"`multi` mode: moves to the next / previous node and toggles its selection."},{keys:`Ctrl + A (⌘ + A)`,action:"`multi` and `checkbox` mode: selects every enabled node."},{keys:`ArrowDown (in the search box)`,action:`Moves focus from the built-in search box into the tree.`}],aria:['The tree is `role="tree"`, named by `label` (`aria-label`) or `ariaLabelledby`. Every node is a `treeitem`; the children of an expanded parent sit in a `role="group"` inside it, and collapsed branches are not rendered.',"Each treeitem carries `aria-level`, `aria-setsize` and `aria-posinset`, and parents `aria-expanded`. Its name is the label only (`aria-labelledby`); `description`, the badge (or `badgeLabel`) and a load error are its description (`aria-describedby`).",'`single` mode sets `aria-selected="true"` on the selected node only; `multi` sets `aria-selected` on every selectable node and `aria-multiselectable` on the tree; `checkbox` sets `aria-checked` to `true`, `false` or `mixed` on every node.','Disabled nodes are `aria-disabled="true"` and stay focusable, so their children stay reachable. A node loading its children is `aria-busy="true"`.','Through `ScscAnnouncer` (in the language set with `provideScscLabels`): the filter result count, "Loading" when a branch starts loading, the load error (assertive), and the selection count in `multi` and `checkbox` mode.'],appMustProvide:["An accessible name: `label`, or `ariaLabelledby` pointing at the visible heading above the tree. The tree warns in the console in dev mode when it has neither.","Unique, stable `id`s across the whole tree, including lazily loaded children; selection, expansion and persistence are keyed by them.","Short labels. Put detail in `description`, which is read as a description rather than the name. A custom template’s text becomes the name, so keep it brief.",'Words for bare numbers: pass `badgeLabel` (e.g. `(n) => n + " open cases"`) when a badge would otherwise be read as just "612".',"Translated captions for the tree’s own buttons and messages (`searchLabel`, `expandAllLabel`, `retryLabel`, `loadErrorLabel`, …); announcements come from `SCSC_LABELS`."],a11y:["Follows the WAI-ARIA APG Treeview pattern, including type-ahead, `*` and the multi-select keys. CDK’s TreeKeyManager moves focus; the tree handles expansion and selection itself.",`The focus ring is drawn on the focused node’s row, not around its whole expanded branch, so it is clear which node has focus. In Windows high-contrast mode it uses the system Highlight colour, and a selected row is filled with it.`,`Selection is never shown by colour alone: selected rows get a gold bar and bold text, multi-select rows a check mark, and checkboxes a check or a dash.`,`Row height follows density (40px comfortable, 30px compact), and the chevron target is at least 24 × 24 px. The Retry button is not a separate tab stop: Enter on the failed node retries.`,'An opening branch fades in and the chevron rotates, timed by the motion tokens. With reduced motion (the OS setting or `data-motion="reduced"`) the chevron no longer turns and the fade is shortened.'],related:[`sidebar-nav`,`multi-select`,`search-input`,`data-grid`]};export{vs as TREE_DOCS};