import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{Aa as It$1,Ca as Gv,Co as _2,Cs as rM,Do as ae$1,E as Bue,Es as sD,Fr as kn,Go as g,Gs as zS,Hs as y_,In as Xz,Jr as oe,K as Fi,Ka as Ov,Ki as ye,Lo as d_,Ma as JT,Ms as uc,Na as Jb,No as cc,Nr as jo,Ps as ut$1,Qr as pN,Rs as w_,Si as tt,Ua as Ni,Un as Za,Wn as Zi,Xa as Pv,Y as Fs,Yo as iD,Zi as za,Zo as i_,_i as tN,_s as o_,bn as Vz,bo as Y_,cs as lc,ct as Ir$1,ds as nD,eo as S2,fi as si,go as Xa,gs as oM,ha as Eg,ii as qo,ka as Ig,ks as t_,l as $ue,ln as UF,m as Aa,mn as Uue,oi as que,os as k_,ot as Ie,pa as Ec,pi as sn,po as X$1,ps as n_,qo as ge$1,ra as Af,rr as da,t as $E,ta as $f,tt as Hue,us as my,va as G_,vn as Vn,vt as Kue,wa as HS,ws as r_,xs as q,ya as Ga,z as F,za as Lf,zt as On}from"./main-O6OT5H7H.js";var St=[`,`,`;`,`	`,`|`];var ve=class{constructor(e,t,n,i,o){this.text=e;this.trim=n;this.skipEmpty=i;this.limit=o;this.delim=t.charCodeAt(0)}text;trim;skipEmpty;limit;records=[];errors=[];pos=0;done=!1;field=``;cells=[];inQuotes=!1;quoted=!1;afterQuote=!1;strayReported=!1;record=1;delim;scan(e){let t=this.text,n=t.length,i=Math.min(e,n),o=this.delim,a=this.pos;for(;a<i&&!this.done;){if(this.inQuotes){let x=t.indexOf(`"`,a);if(x===-1){this.field+=t.slice(a),a=n;break}t.charCodeAt(x+1)===34?(this.field+=t.slice(a,x+1),a=x+2):(this.field+=t.slice(a,x),this.inQuotes=!1,this.afterQuote=!0,a=x+1);continue}let d=t.charCodeAt(a);if(d===o){this.endField(),a++;continue}if(d===10||d===13){this.endField(),this.endRecord(),a+=d===13&&t.charCodeAt(a+1)===10?2:1;continue}let p=this.field===``&&!this.quoted&&!this.afterQuote;if(p&&d===34){this.inQuotes=!0,this.quoted=!0,a++;continue}if(p&&this.trim&&(d===32||d===9)){a++;continue}if(this.afterQuote){if(this.trim&&(d===32||d===9)){a++;continue}this.strayReported||(this.strayReported=!0,this.errors.push({code:`invalid-quote`,row:this.record,message:`Row ${this.record}: text after a closing quote.`}))}let h=a+1;for(;h<n;){let x=t.charCodeAt(h);if(x===o||x===10||x===13)break;h++}this.field+=t.slice(a,h),a=h}return this.pos=a,a>=n&&!this.done&&this.finish(),this.done}finish(){this.inQuotes&&this.errors.push({code:`unterminated-quote`,row:this.record,message:`Row ${this.record}: a quoted value is never closed.`}),(this.field!==``||this.cells.length>0||this.quoted)&&(this.endField(),this.endRecord()),this.done=!0}endField(){let e=this.quoted||!this.trim?this.field:this.field.trim();this.cells.push(e),this.field=``,this.quoted=!1,this.afterQuote=!1,this.inQuotes=!1}endRecord(){let e=this.cells;this.cells=[],this.strayReported=!1;let t=this.record++;this.skipEmpty&&e.every(n=>n===``)||(this.records.push({cells:e,row:t}),this.records.length>=this.limit&&(this.done=!0))}};var _t=r=>/^[-+(]?[$€£]?\s?\d[\d,.\s]*\)?%?$/.test(r);var Rt=r=>/^\d{1,4}[-/.]\d{1,2}[-/.]\d{1,4}/.test(r);var kt=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r);function Ft(r){let e=r[0];if(!e?.length)return!1;let n=e.map(i=>i.trim()).filter(i=>i!==``);return n.length===0||n.some(i=>_t(i)||Rt(i)||kt(i))?!1:new Set(n.map(i=>i.toLowerCase())).size===n.length}function Et(r,e=St){let t=ut(r).slice(0,65536),n=e.map(()=>[]),i=e.map(y=>y.charCodeAt(0)),o=i.map(()=>0),a=!1,d=!1,p=()=>{d&&o.forEach((y,R)=>n[R].push(y)),o=i.map(()=>0),d=!1};for(let y=0;y<t.length&&n[0].length<20;y++){let R=t.charCodeAt(y);if(R===34)a=!a,d=!0;else{if(a)continue;if(R===10||R===13)p(),R===13&&t.charCodeAt(y+1)===10&&y++;else{d=!0;let S=i.indexOf(R);S>=0&&o[S]++}}}a||p();let h=`,`,x=0;return e.forEach((y,R)=>{let S=n[R];if(!S.length)return;let E=new Map;for(let B of S)B>0&&E.set(B,(E.get(B)??0)+1);let ee=0,te=0;if(E.forEach((B,xe)=>{(B>te||B===te&&xe>ee)&&(ee=xe,te=B)}),!ee)return;let Ce=te/S.length*1e3+Math.min(ee,999);Ce>x&&(x=Ce,h=y)}),h}function ut(r){return r.charCodeAt(0)===65279?r.slice(1):r}function It(r,e){let t=ut(r),n=!e.delimiter||e.delimiter===`auto`?Et(t):e.delimiter,i=e.maxRows??1/0;return{text:t,delimiter:n,scanner:new ve(t,n,e.trim??!0,e.skipEmptyLines??!0,i+2),maxRows:i,header:e.header??`auto`}}function Dt(r){let{records:e,errors:t}=r.scanner,n=r.header===`auto`?Ft(e.slice(0,1).map(S=>S.cells)):r.header,i=e.reduce((S,E)=>Math.max(S,E.cells.length),0),o=n?e.slice(1):e,a=o.length>r.maxRows,d=a?o.slice(0,r.maxRows):o,p=n?e[0]?.cells??[]:[],h=n?p.length:i,x=n?p.map((S,E)=>S||`Column ${E+1}`):Array.from({length:h},(S,E)=>`Column ${E+1}`),y=[],R=[];for(let S of d){n&&S.cells.length!==h&&t.push({code:`column-count`,row:S.row,message:`Row ${S.row}: ${S.cells.length} values for ${h} columns.`});let E=S.cells;for(;E.length<h;)E.push(``);y.push(E),R.push(S.row)}return t.sort((S,E)=>S.row-E.row),{headers:x,rows:y,rowNumbers:R,delimiter:r.delimiter,hasHeader:n,errors:t,truncated:a}}async function ft(r,e={}){let{signal:t,onProgress:n}=e,i=Math.max(1024,e.chunkSize??262144),o=It(r,e),a=o.text.length||1;for(;;){if(t?.aborted)throw pt(t);let d=o.scanner.scan(o.scanner.pos+i);if(n?.({fraction:d?1:Math.min(1,o.scanner.pos/a),records:o.scanner.records.length}),d)break;await new Promise(p=>setTimeout(p,0))}if(t?.aborted)throw pt(t);return Dt(o)}function pt(r){return r.reason??new DOMException(`CSV parsing was cancelled.`,`AbortError`)}var Tt=/^[=+\-@\t\r]/;var Mt=/^[-+]?\d[\d,]*(\.\d+)?$/;function $t(r){return r==null?``:r instanceof Date?r.toISOString():String(r)}function P(r,e={}){let t=e.delimiter??`,`,n=e.newline??`\r
`,i=e.escapeFormulas??!0,o=a=>{let d=$t(a);return i&&Tt.test(d)&&!Mt.test(d)&&(d=`'${d}`),d.includes(t)||d.includes(`"`)||d.includes(`
`)||d.includes(`\r`)||/^\s|\s$/.test(d)?`"${d.replace(/"/g,`""`)}"`:d};return r.map(a=>a.map(o).join(t)).join(n)}var O=new Intl.NumberFormat(`en-US`);var T=r=>`${O.format(r)} ${r===1?`row`:`rows`}`;var K=r=>r.join(`, `);var Z={required:`Required.`,number:`Enter a number, such as 1,250.50.`,integer:`Enter a whole number.`,min:r=>`Must be ${O.format(r)} or more.`,max:r=>`Must be ${O.format(r)} or less.`,date:`Enter a date as MM/DD/YYYY or YYYY-MM-DD.`,datetime:`Enter a date and time, such as 03/15/2026 9:30 AM.`,boolean:`Enter yes or no.`,option:r=>r.length>6?`Not a known value. Choose one of: ${K(r.slice(0,6))}\u2026`:`Choose one of: ${K(r)}.`,email:`Enter an email address, such as name@example.com.`,phone:`Enter a 10-digit phone number.`,zip:`Enter a 5-digit ZIP code.`,pattern:`Does not match the expected format.`};var Nt={",":`comma-separated`,";":`semicolon-separated`,"	":`tab-separated`,"|":`pipe-separated`};var he={uploadStep:`Upload`,mapStep:`Map columns`,reviewStep:`Review`,confirmStep:`Confirm`,uploadHeading:`Choose a CSV file`,uploadDescription:`Save the spreadsheet as CSV (comma, semicolon or tab separated). The first row should name the columns.`,mapHeading:`Match your columns to the fields`,mapDescription:(r,e)=>`${r} of ${e} fields were matched by column name. Check each one before you go on.`,reviewHeading:r=>`Review ${T(r)}`,confirmHeading:r=>`Import ${T(r)}?`,confirmDescription:`Nothing is saved until you import.`,dropLabel:`Drop a CSV file here or click to browse`,dropHint:r=>`CSV or TSV, up to ${r}`,template:`Download a template`,reading:r=>`Reading ${r}`,stopReading:`Stop reading`,readStopped:`Reading stopped. Choose the file again to start over.`,fileSummary:(r,e,t)=>`${T(r)} \xB7 ${O.format(e)} columns \xB7 ${Nt[t]}`,hasHeader:`First row contains column names`,read:(r,e,t)=>`Read ${r}: ${T(e)}, ${O.format(t)} columns.`,noFile:`Choose a CSV file to import.`,wrongType:r=>`${r} is not a CSV file. Choose a .csv or .tsv file.`,tooLarge:(r,e)=>`${r} is larger than ${e}. Split it into smaller files.`,tooManyRows:r=>`This file has more than ${T(r)}. Split it into files of ${T(r)} or fewer.`,empty:`This file has no rows to import.`,unterminatedQuote:r=>`Row ${r} opens a quoted value that is never closed, so the rest of the file cannot be read. Fix the quotes and upload the file again.`,columnCount:(r,e)=>`Some rows have a different number of values than there are columns: ${K(r.map(String))}${e?` and ${O.format(e)} more`:``}. Check that values containing the delimiter are in quotes.`,readFailed:`The file could not be read. Check that it is a text CSV file.`,column:r=>`Column ${r}`,notMapped:`Not imported`,required:`Required`,samples:r=>r.length?`First values: ${K(r)}`:`No values in this column`,mapRequired:r=>`Choose the column for ${r}.`,extraColumns:`Columns not imported`,extraColumnsHint:`These columns do not match a field. Use one for a field, or leave it ignored.`,useFor:r=>`Use \u201C${r}\u201D for`,ignoreColumn:`Ignore this column`,extraNotAllowed:r=>`This import takes only the fields above. Use each of these columns for a field, or remove it from the file: ${K(r)}.`,summary:(r,e,t)=>`${T(r)} \xB7 ${O.format(e)} valid \xB7 ${O.format(t)} with errors`,errorsNote:r=>`${T(r)} ${r===1?`has`:`have`} errors and will be skipped unless you fix ${r===1?`it`:`them`}.`,showRows:`Show rows`,all:`All`,onlyErrors:`Only errors`,onlyValid:`Only valid`,showing:r=>`Showing ${T(r)}.`,previewLabel:`Rows to import`,rowColumn:`Row`,statusColumn:`Status`,valid:`Valid`,errorCount:r=>r===1?`1 error`:`${O.format(r)} errors`,emptyValue:`(empty)`,noRows:`No rows match this filter.`,fix:`Fix`,fixRow:r=>`Fix row ${r}`,saveRow:`Save row`,cancel:`Cancel`,fixed:(r,e)=>`Row ${r} fixed. ${e?`${T(e)} with errors left.`:`No errors left.`}`,stillInvalid:`Some values still need fixing.`,noValidRows:`No rows are ready to import. Fix the errors or upload a corrected file.`,yes:`Yes`,no:`No`,importRows:r=>`Import ${T(r)}`,file:`File`,rowsToImport:`Rows to import`,rowsSkipped:`Rows skipped`,skipNote:r=>`Skip ${T(r)} with errors. Download the error report, fix the rows and import it again.`,downloadReport:r=>`Download error report (${T(r)})`,reportFilename:`import-errors.csv`,templateFilename:`import-template.csv`,reportRow:`Row in file`,reportErrors:`Errors`,invalid:Z};function G(r){return r.filter(e=>e.type!==`group`&&e.type!==`list`)}function X(r){return r.normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]/g,``)}var vt=r=>[r.key,r.label??``,...r.aliases??[]].map(X).filter(e=>e.length>0);function gt(r,e){let t=r.map(X),n=new Set,i={},o=G(e);for(let a of o){let d=vt(a),p=t.findIndex((h,x)=>!n.has(x)&&h!==``&&d.includes(h));i[a.key]=p>=0?p:null,p>=0&&n.add(p)}for(let a of o){if(i[a.key]!=null)continue;let d=vt(a).filter(h=>h.length>=3),p=-1;t.forEach((h,x)=>{n.has(x)||h.length<3||d.some(y=>h.includes(y)||y.includes(h))&&(p<0||h.length<t[p].length)&&(p=x)}),i[a.key]=p>=0?p:null,p>=0&&n.add(p)}return i}function Lt(r){let e=r.replace(/[\s\u00a0]/g,``),t=!1;/^\(.*\)$/.test(e)&&(t=!0,e=e.slice(1,-1));for(let i=0;i<2;i++)e.startsWith(`-`)?(t=!t,e=e.slice(1)):e.startsWith(`+`)&&(e=e.slice(1)),e=e.replace(/^[$€£¥]|[$€£¥]$/g,``);if(/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(e)?e=e.replace(/,/g,``):/^\d{1,3}(\.\d{3})+,\d+$/.test(e)||/^\d{1,3}(\.\d{3}){2,}$/.test(e)?e=e.replace(/\./g,``).replace(`,`,`.`):/^\d+,\d+$/.test(e)&&(e=e.replace(`,`,`.`)),!/^(\d+(\.\d*)?|\.\d+)$/.test(e))return null;let n=Number(e);return t?-n:n}var ae=r=>String(r).padStart(2,`0`);var At=(r,e)=>new Date(Date.UTC(r,e,0)).getUTCDate();function ht(r,e,t){return e<1||e>12||t<1||t>At(r,e)?null:`${String(r).padStart(4,`0`)}-${ae(e)}-${ae(t)}`}var Pt=/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/;var Ot=/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4}|\d{2})/;function yt(r){let e=Pt.exec(r);if(e){let n=ht(+e[1],+e[2],+e[3]);return n?{date:n,rest:r.slice(e[0].length)}:null}let t=Ot.exec(r);if(t){let n=+t[3];t[3].length===2&&(n+=n<30?2e3:1900);let i=ht(n,+t[1],+t[2]);return i?{date:i,rest:r.slice(t[0].length)}:null}return null}function zt(r){let e=yt(r.trim());return e&&(e.rest===``||/^[T\s]\d{1,2}:\d{2}/.test(e.rest))?e.date:null}function Vt(r){let e=yt(r.trim());if(!e)return null;if(e.rest===``)return`${e.date}T00:00`;let t=/^(?:T|\s+)(\d{1,2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?\s*([AaPp][Mm])?\s*(Z|[+-]\d{2}:?\d{2})?$/.exec(e.rest);if(!t)return null;let n=+t[1],i=+t[2];if(t[4]){if(n<1||n>12)return null;n=n%12+(/p/i.test(t[4])?12:0)}return n>23||i>59||t[3]&&+t[3]>59?null:`${e.date}T${ae(n)}:${ae(i)}${t[3]?`:${t[3]}`:``}${t[5]??``}`}var jt=new Set([`true`,`yes`,`y`,`1`,`t`,`on`]);var Bt=new Set([`false`,`no`,`n`,`0`,`f`,`off`]);var qt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;var Ut=/^\d{5}(-\d{4})?$/;var se=new Map;function Jt(r){if(!se.has(r))try{se.set(r,new RegExp(`^(?:${r})$`))}catch{se.set(r,null)}return se.get(r)??null}function Ht(r){if(!/^\+?[\d\s().-]+(?:\s*(?:x|ext\.?)\s*\d+)?$/i.test(r))return!1;let e=r.replace(/(?:x|ext\.?)\s*\d+$/i,``).replace(/\D/g,``);return r.startsWith(`+`)?e.length>=8&&e.length<=15:e.length===10||e.length===11&&e.startsWith(`1`)}function Qt(r,e,t=Z){let n=r.trim();if(n===``)return{value:null,error:e.required?t.required:null};let i=o=>({value:null,error:o});switch(e.type){case`number`:case`integer`:{let o=Lt(n);return o===null?i(t.number):e.type===`integer`&&!Number.isInteger(o)?i(t.integer):e.min!=null&&o<e.min?i(t.min(e.min)):e.max!=null&&o>e.max?i(t.max(e.max)):{value:o,error:null}}case`date`:{let o=zt(n);return o?{value:o,error:null}:i(t.date)}case`datetime`:{let o=Vt(n);return o?{value:o,error:null}:i(t.datetime)}case`boolean`:{let o=n.toLowerCase();return jt.has(o)?{value:!0,error:null}:Bt.has(o)?{value:!1,error:null}:i(t.boolean)}case`select`:{let o=e.options??[],a=X(n),d=o.find(p=>p.value===n)??o.find(p=>p.value.toLowerCase()===n.toLowerCase())??o.find(p=>X(p.label)===a||X(p.value)===a);return d?{value:d.value,error:null}:i(t.option(o.map(p=>p.label)))}default:return e.format===`email`&&!qt.test(n)?i(t.email):e.format===`phone`&&!Ht(n)?i(t.phone):e.format===`zip`&&!Ut.test(n)?i(t.zip):e.pattern&&Jt(e.pattern)?.test(n)===!1?i(t.pattern):{value:n,error:null}}}function ge(r,e,t=Z){let n={},i={},o=G(e);for(let a of o){let d=Qt(r[a.key]??``,a,t);n[a.key]=d.value,d.error&&(i[a.key]=d.error)}for(let a of o){if(!a.validate||i[a.key])continue;let d=a.validate(n[a.key],n);d&&(i[a.key]=d)}return{values:n,errors:i}}function Wt(r,e,t){let n={};for(let i of G(e)){let o=t[i.key];n[i.key]=o==null?``:r[o]??``}return n}function wt(r$1,e,t,n=Z,i=new Map){return r$1.rows.map((o,a)=>{let d=r(r({},Wt(o,e,t)),i.get(a));return r({index:a,rowNumber:r$1.rowNumbers[a]??a+2,cells:o,raw:d},ge(d,e,n))})}function Gt(r){if(r.example!=null)return r.example;switch(r.type){case`number`:return r.format===`currency`?`125.00`:String(r.min??1);case`integer`:return String(r.min??1);case`boolean`:return`yes`;case`date`:return`03/15/2026`;case`datetime`:return`03/15/2026 9:30 AM`;case`select`:return r.options?.[0]?.label??``;default:return r.format===`email`?`name@example.com`:r.format===`phone`?`(408) 555-0100`:r.format===`zip`?`95113`:``}}function bt(r){let e=G(r);return P([e.map(t=>t.label??t.key),e.map(Gt)])}function Ct(r,e,t,n,i={row:`Row in file`,errors:`Errors`}){let o=new Map(t.map(d=>[d.key,d.label??d.key])),a=[[...r,i.row,i.errors]];for(let d of e){let p=Object.keys(d.errors);if(!p.length)continue;let h=r.map((y,R)=>d.cells[R]??``);for(let[y,R]of Object.entries(n))R!=null&&(h[R]=d.raw[y]??``);let x=p.map(y=>`${o.get(y)??y}: ${d.errors[y]}`).join(`; `);a.push([...h,d.rowNumber,x])}return P(a)}var Yt=()=>[];var be=(r,e)=>e.key;var Kt=(r,e)=>e.id;function Zt(r,e){if(r&1&&(Ga(0,`a`,11),uc(1,`scsc-icon`,13),G_(2),Lf()),r&2){let t=y_(2);Pv(`href`,t.sampleTemplateHref(),my),Jb(2),$f(``,t.t().template,` `)}}function Xt(r,e){if(r&1){let t=d_();Ga(0,`scsc-button`,14),lc(`click`,function(){Eg(t);let i=y_(2);return Ig(i.downloadTemplate())}),uc(1,`scsc-icon`,13),G_(2),Lf()}if(r&2){let t=y_(2);Jb(2),$f(``,t.t().template,` `)}}function er(r,e){if(r&1&&(Ga(0,`div`),JT(1,Zt,3,2,`a`,11)(2,Xt,3,1,`scsc-button`,12),Lf()),r&2){let t=y_();Jb(),t_(t.sampleTemplateHref()?1:2)}}function tr(r,e){if(r&1){let t=d_();Ga(0,`div`,4),uc(1,`scsc-progress`,15),Ga(2,`scsc-button`,16),lc(`click`,function(){Eg(t);let i=y_();return Ig(i.stopReading())}),G_(3),Lf()()}if(r&2){let t=y_();Jb(),Pv(`value`,t.progressPercent())(`label`,t.t().reading(t.fileName())),Jb(2),$f(` `,t.t().stopReading,` `)}}function rr(r,e){r&1&&(Ga(0,`scsc-alert`,5),G_(1),Lf()),r&2&&(Jb(),nD(e))}function nr(r,e){r&1&&(Ga(0,`scsc-alert`,6),G_(1),Lf()),r&2&&(Jb(),nD(e))}function ir(r,e){r&1&&(Ga(0,`scsc-alert`,5),G_(1),Lf()),r&2&&(Jb(),nD(e))}function or(r,e){r&1&&(Ga(0,`scsc-alert`,24),G_(1),Lf()),r&2&&(Jb(),nD(e))}function sr(r,e){if(r&1){let t=d_();Ga(0,`div`,7)(1,`p`,17),uc(2,`scsc-icon`,18),Ga(3,`span`,19)(4,`span`,20),G_(5),Lf(),Ga(6,`span`,21),G_(7),Lf()()(),Ga(8,`label`,22)(9,`input`,23),lc(`change`,function(i){Eg(t);let o=y_();return Ig(o.setHeader(i.target.checked))}),Lf(),Ga(10,`span`),G_(11),Lf()(),JT(12,ir,2,1,`scsc-alert`,5)(13,or,2,1,`scsc-alert`,24),Lf()}if(r&2){let t,n=e,i=y_();Jb(5),nD(i.fileName()),Jb(2),nD(i.t().fileSummary(n.rows.length,n.headers.length,n.delimiter)),Jb(2),Pv(`checked`,n.hasHeader)(`disabled`,i.parsing()),Jb(2),nD(i.t().hasHeader),Jb(),t_((t=i.blockingError())?12:(t=i.columnWarning())?13:-1,t)}}function ar(r,e){r&1&&(Ga(0,`scsc-alert`,25),G_(1),Lf()),r&2&&(Jb(),nD(e))}function lr(r,e){if(r&1&&(Ga(0,`option`,33),G_(1),Lf()),r&2){let t=e.$implicit,n=e.$index;Pv(`value`,``+n),Jb(),nD(t)}}function cr(r,e){if(r&1&&(Ga(0,`scsc-form-field`,29)(1,`select`,31),HS(),Ga(2,`option`,32),G_(3),Lf(),o_(4,lr,2,2,`option`,33,n_),Lf()()),r&2){let t=e.$implicit,n=y_(),i=y_();Pv(`label`,i.labelOf(t))(`required`,!!t.required)(`hint`,i.samplesFor(t.key))(`error`,i.mapFieldError(t)),Jb(),Pv(`id`,i.id+`-map-`+t.key)(`formControlName`,t.key),zS(),Jb(2),nD(i.t().notMapped),Jb(),i_(n.headers)}}function dr(r,e){if(r&1&&(Ga(0,`option`,39),G_(1),Lf()),r&2){let t=e.$implicit,n=y_().$implicit,i=y_(3);Pv(`value`,t.key)(`selected`,i.fieldUsing(n)===t.key),Jb(),$f(` `,i.labelOf(t),` `)}}function mr(r,e){if(r&1){let t=d_();Ga(0,`scsc-form-field`,36)(1,`select`,37),lc(`change`,function(i){let o=Eg(t).$implicit,a=y_(3);return Ig(a.useColumn(o,i.target.value))}),Ga(2,`option`,38),G_(3),Lf(),o_(4,dr,2,3,`option`,39,be),Lf()()}if(r&2){let t=e.$implicit,n=y_(2),i=y_();Pv(`label`,i.t().useFor(n.headers[t]))(`hint`,i.t().samples(i.samples()[t]??rM(5,Yt))),Jb(),Pv(`id`,i.id+`-extra-`+t),Jb(),Pv(`selected`,!i.fieldUsing(t)),Jb(),$f(` `,i.t().ignoreColumn,` `),Jb(),i_(i.targets())}}function pr(r,e){if(r&1&&(Ga(0,`section`,30)(1,`scsc-heading`,34),G_(2),Lf(),Ga(3,`p`,26),G_(4),Lf(),Ga(5,`div`,35),o_(6,mr,6,6,`scsc-form-field`,36,r_),Lf()()),r&2){let t=y_(2);cc(`aria-labelledby`,t.id+`-extra`),Jb(),Pv(`id`,t.id+`-extra`)(`level`,t.subLevel())(`visualLevel`,5),Jb(),$f(` `,t.t().extraColumns,` `),Jb(2),nD(t.t().extraColumnsHint),Jb(2),i_(t.extraColumns())}}function ur(r,e){if(r&1&&(Ga(0,`div`,9),JT(1,ar,2,1,`scsc-alert`,25),Ga(2,`p`,26)(3,`span`,27),G_(4,`*`),Lf(),G_(5),Lf(),Ga(6,`div`,28),o_(7,cr,6,7,`scsc-form-field`,29,be),Lf(),JT(9,pr,8,6,`section`,30),Lf()),r&2){let t,n=y_();Jb(),t_((t=n.mapError())?1:-1,t),Jb(4),$f(` `,n.t().required,` `),Jb(),Pv(`formGroup`,n.mapForm()),Jb(),i_(n.targets()),Jb(2),t_(n.extraColumns().length?9:-1)}}function fr(r,e){r&1&&(Ga(0,`scsc-alert`,5),G_(1),Lf()),r&2&&(Jb(),nD(e))}function vr(r,e){if(r&1&&(Ga(0,`scsc-alert`,24),G_(1),Lf()),r&2){let t=y_(2);Jb(),nD(t.t().errorsNote(t.invalidRows().length))}}function hr(r,e){if(r&1){let t=d_();Ga(0,`scsc-button`,48),lc(`click`,function(){let i=Eg(t).$implicit,o=y_(2);return Ig(o.setFilter(i.id))}),G_(1),Ga(2,`span`,49),G_(3),Lf()()}if(r&2){let t=e.$implicit,n=y_(2);Pv(`outline`,n.filter()!==t.id)(`ariaPressed`,n.filter()===t.id),Jb(),$f(` `,t.label,` `),Jb(2),$f(`(`,t.count,`)`)}}function gr(r,e){if(r&1){let t=d_();Ga(0,`scsc-form-field`,51)(1,`input`,54),lc(`input`,function(i){let o=Eg(t).$implicit,a=y_(3);return Ig(a.setDraft(o.key,i.target.value))}),Lf()()}if(r&2){let t=e.$implicit,n=y_(3);Pv(`label`,n.labelOf(t))(`required`,!!t.required)(`error`,n.fixErrors()[t.key]??``),Jb(),Pv(`id`,n.id+`-fix-`+t.key)(`value`,n.fixDraft()[t.key]??``)}}function yr(r,e){if(r&1){let t=d_();Ga(0,`section`,45)(1,`scsc-heading`,34),G_(2),Lf(),Ga(3,`form`,50),lc(`submit`,function(i){Eg(t);let o=y_(2);return Ig(o.saveFix(i))}),Ga(4,`div`,35),o_(5,gr,2,5,`scsc-form-field`,51,be),Lf(),Ga(7,`div`,52)(8,`scsc-button`,53),G_(9),Lf(),Ga(10,`scsc-button`,14),lc(`click`,function(){Eg(t);let i=y_(2);return Ig(i.cancelFix())}),G_(11),Lf()()()()}if(r&2){let t=y_(2);cc(`aria-labelledby`,t.id+`-fix`),Jb(),Pv(`id`,t.id+`-fix`)(`level`,t.subLevel())(`visualLevel`,5),Jb(),$f(` `,t.t().fixRow(e.rowNumber),` `),Jb(3),i_(t.mappedFields()),Jb(4),nD(t.t().saveRow),Jb(2),nD(t.t().cancel)}}function wr(r,e){if(r&1&&(Ga(0,`span`,55),uc(1,`scsc-icon`,57),G_(2),Lf()),r&2){let t=y_(4);Jb(2),$f(``,t.t().errorCount(e),` `)}}function br(r,e){if(r&1&&(Ga(0,`span`,56),uc(1,`scsc-icon`,58),G_(2),Lf()),r&2){let t=y_(4);Jb(2),$f(``,t.t().valid,` `)}}function Cr(r,e){if(r&1&&JT(0,wr,3,1,`span`,55)(1,br,3,1,`span`,56),r&2){let t,n=y_().$implicit,i=y_(2);t_((t=i.errorCount(n))?0:1,t)}}function xr(r,e){if(r&1&&(Ga(0,`span`,59)(1,`span`,60),G_(2),Lf(),Ga(3,`span`,61),uc(4,`scsc-icon`,62),Ga(5,`span`)(6,`span`,63),G_(7),Lf(),G_(8),Lf()()()),r&2){let t=y_(),n=y_().$implicit,i=y_(2);Jb(2),nD(n.raw[t]||i.t().emptyValue),Jb(5),$f(``,i.labels().tone.error,` `),Jb(),nD(e)}}function Sr(r,e){if(r&1&&(Ga(0,`span`,60),G_(1),Lf()),r&2){let t=y_(2).text;Jb(),nD(t)}}function _r(r,e){if(r&1&&JT(0,xr,9,3,`span`,59)(1,Sr,2,1,`span`,60),r&2){let t,n=y_().$implicit;t_((t=n.errors[e])?0:1,t)}}function Rr(r,e){if(r&1&&G_(0),r&2){let t=y_().text;$f(` `,t,` `)}}function kr(r,e){if(r&1&&JT(0,Cr,2,1)(1,_r,2,1)(2,Rr,1,1),r&2){let t,n=e.col,i=y_(2);t_(n.key===`status`?0:(t=i.fieldKey(n.key))?1:2,t)}}function Fr(r,e){if(r&1&&(Ga(0,`div`,2)(1,`p`,40),G_(2),Lf(),JT(3,fr,2,1,`scsc-alert`,5)(4,vr,2,1,`scsc-alert`,24),Ga(5,`div`,41)(6,`span`,42),G_(7),Lf(),Ga(8,`scsc-button-group`,43),o_(9,hr,4,4,`scsc-button`,44,Kt),Lf()(),JT(11,yr,12,7,`section`,45),Ga(12,`scsc-table`,46),Ov(13,kr,3,1,`ng-template`,47),Lf()()),r&2){let t,n,i=y_();Jb(2),$f(` `,i.t().summary(i.rows().length,i.validRows().length,i.invalidRows().length),` `),Jb(),t_((t=i.reviewError())?3:i.invalidRows().length?4:-1,t),Jb(3),Pv(`id`,i.id+`-filter`),Jb(),nD(i.t().showRows),Jb(),cc(`aria-labelledby`,i.id+`-filter`),Jb(),i_(i.filters()),Jb(2),t_((n=i.fixing())?11:-1,n),Jb(),Pv(`columns`,i.columns())(`rows`,i.visibleRows())(`rowKey`,i.rowKey)(`rowLabel`,i.rowLabel)(`label`,i.t().previewLabel)(`rowActions`,i.rowActions())(`emptyMessage`,i.t().noRows)(`pageSize`,25)}}function Er(r,e){if(r&1){let t=d_();Ga(0,`scsc-alert`,24),G_(1),Lf(),Ga(2,`div`)(3,`scsc-button`,16),lc(`click`,function(){Eg(t);let i=y_(2);return Ig(i.downloadReport())}),uc(4,`scsc-icon`,13),G_(5),Lf()()}if(r&2){let t=y_(2);Jb(),nD(t.t().skipNote(t.invalidRows().length)),Jb(4),$f(``,t.t().downloadReport(t.invalidRows().length),` `)}}function Ir(r,e){if(r&1&&(Ga(0,`div`,2)(1,`dl`,64)(2,`dt`,65),G_(3),Lf(),Ga(4,`dd`,60),G_(5),Lf(),Ga(6,`dt`,65),G_(7),Lf(),Ga(8,`dd`,49),G_(9),Lf(),Ga(10,`dt`,65),G_(11),Lf(),Ga(12,`dd`,49),G_(13),Lf()(),JT(14,Er,6,2),Lf()),r&2){let t=y_();Jb(3),nD(t.t().file),Jb(2),nD(t.fileName()),Jb(2),nD(t.t().rowsToImport),Jb(2),nD(t.format(t.validRows().length)),Jb(2),nD(t.t().rowsSkipped),Jb(2),nD(t.format(t.invalidRows().length)),Jb(),t_(t.invalidRows().length?14:-1)}}var Dr=1048576;var le=new Intl.NumberFormat(`en-US`);var Tr=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`});var Mr=0;function $r(r){return r>=1048576?`${le.format(Math.round(r/1048576*10)/10)} MB`:r>=1024?`${le.format(Math.round(r/1024))} KB`:`${r} bytes`}function Nr(r,e){let t=e.split(`,`).map(o=>o.trim().toLowerCase()).filter(Boolean);if(!t.length)return!0;let n=r.name.toLowerCase(),i=(r.type||``).toLowerCase();return t.some(o=>o.startsWith(`.`)?n.endsWith(o):o.endsWith(`/*`)?i.startsWith(o.slice(0,-1)):i===o)}async function Lr(r){if(typeof r.arrayBuffer!=`function`||typeof TextDecoder>`u`)return r.text();let e=await r.arrayBuffer();try{return new TextDecoder(`utf-8`,{fatal:!0}).decode(e)}catch{return new TextDecoder(`windows-1252`).decode(e)}}var D=class r$2{host=g(It$1).nativeElement;document=g(X$1);injector=g(ae$1);announcer=g(Ie);labels=g(oe);fields=Ec.required();maxFileSize=Ec(10485760);maxRows=Ec(1e4);accept=Ec(`.csv,.tsv,text/csv`);sampleTemplateHref=Ec(``);showTemplate=Ec(!0,{transform:Ni});allowExtraColumns=Ec(!0,{transform:Ni});toRow=Ec(e=>e);parser=Ec(ft);submitting=Ec(!1,{transform:Ni});showCancel=Ec(!1,{transform:Ni});headingLevel=Ec(2);text=Ec({});class=Ec(``);import=S2();cancelled=S2();id=`scsc-csv-import-${++Mr}`;t=ut$1(()=>{let e=this.text();return s(r(r({},he),e),{invalid:r(r({},he.invalid),e.invalid)})});hostClasses=ut$1(()=>F(`block`,this.class()));subLevel=ut$1(()=>this.headingLevel()+1);maxSizeText=ut$1(()=>$r(this.maxFileSize()));targets=ut$1(()=>G(this.fields()));step=q(0);file=q(null);fileName=ut$1(()=>this.file()?.name??``);parsing=q(!1);progress=q(0);progressPercent=ut$1(()=>Math.round(this.progress()*100));showProgress=ut$1(()=>(this.file()?.size??0)>Dr);uploadError=q(``);notice=q(``);result=q(null);abort=null;sourceText=``;blockingError=ut$1(()=>{let e=this.result();if(!e)return``;let t=this.t(),n=e.errors.find(i=>i.code===`unterminated-quote`);return n?t.unterminatedQuote(n.row):e.truncated?t.tooManyRows(this.maxRows()):e.rows.length?``:t.empty});columnWarning=ut$1(()=>{let e=(this.result()?.errors??[]).filter(t=>t.code===`column-count`).map(t=>t.row);return e.length?this.t().columnCount(e.slice(0,5),Math.max(0,e.length-5)):``});mapForm=q(new Aa({}));mapping=q({});autoMatched=q(0);extraColumns=q([]);mapError=q(``);mapDescription=ut$1(()=>this.t().mapDescription(this.autoMatched(),this.targets().length));samples=ut$1(()=>{let e=this.result();return e?e.headers.map((t,n)=>{let i=[];for(let o of e.rows){let a=o[n]?.trim();if(a&&i.push(a.length>40?`${a.slice(0,39)}\u2026`:a),i.length===3)break}return i}):[]});mappedFields=ut$1(()=>{let e=this.mapping();return this.targets().filter(t=>e[t.key]!=null)});overrides=q(new Map);rows=ut$1(()=>{let e=this.result();return e?wt(e,this.fields(),this.mapping(),this.t().invalid,this.overrides()):[]});validRows=ut$1(()=>this.rows().filter(e=>Object.keys(e.errors).length===0));invalidRows=ut$1(()=>this.rows().filter(e=>Object.keys(e.errors).length>0));filter=q(`all`);filters=ut$1(()=>{let e=this.t();return[{id:`all`,label:e.all,count:this.format(this.rows().length)},{id:`errors`,label:e.onlyErrors,count:this.format(this.invalidRows().length)},{id:`valid`,label:e.onlyValid,count:this.format(this.validRows().length)}]});visibleRows=ut$1(()=>{let e=this.filter();return e===`errors`?this.invalidRows():e===`valid`?this.validRows():this.rows()});reviewError=q(``);fixing=q(null);fixDraft=q({});fixErrors=q({});columns=ut$1(()=>{let e=this.t();return[{key:`rowNumber`,header:e.rowColumn,type:`number`,align:`start`,rowHeader:!0,format:t=>String(t)},{key:`status`,header:e.statusColumn,value:t=>this.errorCount(t)},...this.mappedFields().map(t=>({key:`f:${t.key}`,header:this.labelOf(t),value:n=>n.errors[t.key]?n.raw[t.key]:this.display(n.values[t.key],t)}))]});rowActions=ut$1(()=>{let e=this.t();return[{id:`fix`,label:e.fix,icon:`action.edit`,ariaLabel:t=>e.fixRow(t.rowNumber),handler:t=>this.openFix(t)}]});rowKey=e=>e.index;rowLabel=e=>`${this.t().rowColumn} ${e.rowNumber}`;reviewHeading=ut$1(()=>this.step()>=2?this.t().reviewHeading(this.rows().length):this.t().reviewStep);confirmHeading=ut$1(()=>this.step()>=2?this.t().confirmHeading(this.validRows().length):this.t().confirmStep);finishLabel=ut$1(()=>this.step()>=2?this.t().importRows(this.validRows().length):this.t().confirmStep);constructor(){g(ge$1).onDestroy(()=>this.abort?.abort())}readFile(e){this.step.set(0),this.onFiles([e])}reset(){this.abort?.abort(),this.abort=null,this.sourceText=``,this.file.set(null),this.result.set(null),this.parsing.set(!1),this.uploadError.set(``),this.notice.set(``),this.buildMapping([]),this.step.set(0)}format(e){return le.format(e)}labelOf(e){return e.label||e.key}errorCount(e){return Object.keys(e.errors).length}fieldKey(e){return e.startsWith(`f:`)?e.slice(2):``}display(e,t){return e==null?``:t.type===`boolean`?e?this.t().yes:this.t().no:t.type===`select`?t.options?.find(n=>n.value===e)?.label??String(e):typeof e==`number`?t.format===`currency`?Tr.format(e):le.format(e):String(e)}onFiles(e){let t=e[0];if(!t)return;let n=this.t();if(this.notice.set(``),!Nr(t,this.accept())){this.uploadError.set(n.wrongType(t.name));return}if(t.size>this.maxFileSize()){this.uploadError.set(n.tooLarge(t.name,this.maxSizeText()));return}this.load(t)}async load(e){this.abort?.abort();let t=new AbortController;this.abort=t,this.uploadError.set(``),this.result.set(null),this.buildMapping([]),this.file.set(e),this.parsing.set(!0),this.progress.set(0);try{let n=await Lr(e);if(t.signal.aborted)return;this.sourceText=n,await this.read(`auto`,t.signal)}catch{if(t.signal.aborted)return;this.uploadError.set(this.t().readFailed),this.file.set(null)}finally{this.abort===t&&(this.abort=null,this.parsing.set(!1))}}async read(e,t){let n=await this.parser()(this.sourceText,{header:e,maxRows:this.maxRows(),signal:t,onProgress:a=>this.progress.set(a.fraction)});if(t.aborted)return;let i=this.t(),o=n.hasHeader?n.headers:n.headers.map((a,d)=>i.column(d+1));this.result.set(s(r({},n),{headers:o})),this.buildMapping(o),this.announcer.announce(i.read(this.fileName(),n.rows.length,o.length))}stopReading(){this.abort?.abort(),this.abort=null,this.parsing.set(!1),this.file.set(null),this.result.set(null),this.notice.set(this.t().readStopped),Xa(()=>this.fileInput()?.focus(),{injector:this.injector})}setHeader(e){if(!this.sourceText)return;this.abort?.abort();let t=new AbortController;this.abort=t,this.parsing.set(!0),this.read(e,t.signal).catch(()=>t.signal.aborted||this.uploadError.set(this.t().readFailed)).finally(()=>{this.abort===t&&(this.abort=null,this.parsing.set(!1))})}fileInput(){return this.host.querySelector(`scsc-file-upload input[type=file]`)}leaveUpload=()=>this.parsing()?!1:this.result()?this.blockingError()?(this.fileInput()?.focus(),!1):!0:(this.uploadError.set(this.t().noFile),this.fileInput()?.focus(),!1);buildMapping(e){let t=gt(e,this.fields()),n={};for(let d of this.targets()){let p=e.length?t[d.key]:null;n[d.key]=new Fi(p==null?``:String(p),{nonNullable:!0,validators:d.required?[Fs.required]:[]})}let i=new Aa(n),o=()=>{let d={};for(let[p,h]of Object.entries(i.getRawValue()))d[p]=h===``?null:Number(h);this.mapping.set(d),this.mapError.set(``)};i.valueChanges.subscribe(o),this.mapForm.set(i),o();let a=new Set(Object.values(t).filter(d=>d!=null));this.autoMatched.set(a.size),this.extraColumns.set(e.map((d,p)=>p).filter(d=>!a.has(d))),this.overrides.set(new Map),this.fixing.set(null),this.filter.set(`all`),this.reviewError.set(``)}samplesFor(e){let t=this.mapping()[e];return t==null?``:this.t().samples(this.samples()[t]??[])}mapFieldError(e){let t=this.mapForm().controls[e.key];return t&&t.invalid&&(t.touched||t.dirty)?this.t().mapRequired(this.labelOf(e)):``}fieldUsing(e){let t=this.mapping();return this.targets().find(n=>t[n.key]===e)?.key??``}useColumn(e,t){let n=this.mapForm().controls;for(let i of this.targets())i.key!==t&&n[i.key]?.value===String(e)&&n[i.key].setValue(``);t&&(n[t]?.setValue(String(e)),n[t]?.markAsDirty())}leaveMap=()=>{if(this.allowExtraColumns())return!0;let e=this.result(),t=new Set(Object.values(this.mapping())),n=(e?.headers??[]).filter((i,o)=>!t.has(o));return n.length?(this.mapError.set(this.t().extraNotAllowed(n)),Xa(()=>tt(this.host.querySelector(`scsc-alert[tabindex]`)),{injector:this.injector}),!1):!0};setFilter(e){this.filter.set(e),this.announcer.announce(this.t().showing(this.visibleRows().length))}openFix(e){this.fixing.set(e),this.fixDraft.set(r({},e.raw)),this.fixErrors.set(r({},e.errors)),Xa(()=>this.focusFixField(),{injector:this.injector})}focusFixField(){let e=this.fixErrors(),t=this.mappedFields().find(n=>e[n.key])?.key??this.mappedFields()[0]?.key;t&&this.document.getElementById(`${this.id}-fix-${t}`)?.focus()}setDraft(e,t){this.fixDraft.update(n=>s(r({},n),{[e]:t}))}saveFix(e){e.preventDefault();let t=this.fixing();if(!t)return;let n=this.fixDraft(),{errors:i}=ge(r(r({},t.raw),n),this.fields(),this.t().invalid),o=Object.fromEntries(this.mappedFields().filter(a=>i[a.key]).map(a=>[a.key,i[a.key]]));if(this.fixErrors.set(o),Object.keys(o).length){this.announcer.announce(this.t().stillInvalid),Xa(()=>this.focusFixField(),{injector:this.injector});return}this.overrides.update(a=>new Map(a).set(t.index,r({},n))),this.closeFix(t),this.announcer.announce(this.t().fixed(t.rowNumber,this.invalidRows().length))}cancelFix(){let e=this.fixing();e&&this.closeFix(e)}closeFix(e){this.fixing.set(null),this.fixErrors.set({});let t=this.t().fixRow(e.rowNumber);Xa(()=>{(Array.from(this.host.querySelectorAll(`scsc-table button[aria-label]`)).find(i=>i.getAttribute(`aria-label`)===t)??this.host.querySelector(`[data-summary]`))?.focus()},{injector:this.injector})}leaveReview=()=>this.validRows().length?(this.reviewError.set(``),!0):(this.reviewError.set(this.t().noValidRows),this.step()!==2&&this.step.set(2),!1);emitImport(){let e=this.toRow();this.import.emit({rows:this.validRows().map(t=>e(t.values,t)),skipped:this.invalidRows().map(t=>({row:t.rowNumber,errors:r({},t.errors)}))})}downloadReport(){let e=this.result();if(!e)return;let t=this.t(),n=Ct(e.headers,this.invalidRows(),this.fields(),this.mapping(),{row:t.reportRow,errors:t.reportErrors});this.save(t.reportFilename,n)}downloadTemplate(){this.save(this.t().templateFilename,bt(this.fields()))}save(e,t){let n=this.document.defaultView;if(!n||typeof n.URL?.createObjectURL!=`function`)return;let i=n.URL.createObjectURL(new Blob([`﻿`,t],{type:`text/csv;charset=utf-8`})),o=this.document.createElement(`a`);o.href=i,o.download=e,o.rel=`noopener`,o.style.display=`none`,this.document.body.appendChild(o),o.click(),o.remove(),n.setTimeout(()=>n.URL.revokeObjectURL(i),1e3)}static ɵfac=function(t){return new(t||r$2)};static ɵcmp=Af({type:r$2,selectors:[[`scsc-csv-import`]],hostVars:2,hostBindings:function(t,n){t&2&&k_(n.hostClasses())},inputs:{fields:[1,`fields`],maxFileSize:[1,`maxFileSize`],maxRows:[1,`maxRows`],accept:[1,`accept`],sampleTemplateHref:[1,`sampleTemplateHref`],showTemplate:[1,`showTemplate`],allowExtraColumns:[1,`allowExtraColumns`],toRow:[1,`toRow`],parser:[1,`parser`],submitting:[1,`submitting`],showCancel:[1,`showCancel`],headingLevel:[1,`headingLevel`],text:[1,`text`],class:[1,`class`]},outputs:{import:`import`,cancelled:`cancelled`},decls:15,vars:32,consts:[[3,`indexChange`,`cancelled`,`finish`,`index`,`headingLevel`,`finishLabel`,`submitting`,`showCancel`],[3,`label`,`heading`,`description`,`canAdvance`],[1,`flex`,`flex-col`,`gap-4`],[3,`filesSelected`,`accept`,`multiple`,`label`,`hint`],[1,`flex`,`flex-wrap`,`items-end`,`gap-3`],[`status`,`error`],[`status`,`info`],[1,`flex`,`flex-col`,`gap-3`,`rounded-box`,`border`,`border-base-300`,`p-4`],[3,`label`,`heading`,`description`,`stepControl`,`canAdvance`],[1,`flex`,`flex-col`,`gap-6`],[3,`label`,`heading`,`canAdvance`],[`scsc-button`,``,`variant`,`ghost`,`download`,``,3,`href`],[`variant`,`ghost`],[`name`,`action.download`,`size`,`sm`],[`variant`,`ghost`,3,`click`],[1,`min-w-0`,`flex-1`,3,`value`,`label`],[`variant`,`neutral`,`outline`,``,3,`click`],[1,`flex`,`items-start`,`gap-2`],[`name`,`file.csv`,1,`mt-0.5`,`shrink-0`,`text-base-content/70`],[1,`min-w-0`],[1,`block`,`break-words`,`font-medium`,`text-base-content`],[1,`block`,`text-sm`,`text-base-content/70`,`tnum`],[1,`flex`,`min-h-11`,`cursor-pointer`,`items-center`,`gap-3`,`self-start`],[`type`,`checkbox`,`scsc-checkbox`,``,3,`change`,`checked`,`disabled`],[`status`,`warning`],[`status`,`error`,`tabindex`,`-1`],[1,`text-sm`,`text-base-content/70`],[`aria-hidden`,`true`,1,`text-error`],[1,`grid`,`gap-x-6`,`gap-y-4`,`md:grid-cols-2`,3,`formGroup`],[3,`label`,`required`,`hint`,`error`],[1,`flex`,`flex-col`,`gap-3`],[`scsc-select`,``,3,`id`,`formControlName`],[`value`,``],[3,`value`],[3,`id`,`level`,`visualLevel`],[1,`grid`,`gap-x-6`,`gap-y-4`,`md:grid-cols-2`],[3,`label`,`hint`],[`scsc-select`,``,3,`change`,`id`],[`value`,``,3,`selected`],[3,`value`,`selected`],[`data-summary`,``,`tabindex`,`-1`,1,`font-medium`,`text-base-content`,`tnum`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-3`,`gap-y-2`],[1,`text-sm`,`font-medium`,3,`id`],[1,`flex-wrap`],[`variant`,`neutral`,1,`join-item`,3,`outline`,`ariaPressed`],[1,`flex`,`flex-col`,`gap-4`,`rounded-box`,`border`,`border-base-300`,`p-4`],[`sort`,`none`,`paginator`,`pages`,`responsive`,`stack`,`stackBelow`,`md`,3,`columns`,`rows`,`rowKey`,`rowLabel`,`label`,`rowActions`,`emptyMessage`,`pageSize`],[`scscCell`,``],[`variant`,`neutral`,1,`join-item`,3,`click`,`outline`,`ariaPressed`],[1,`tnum`],[`novalidate`,``,1,`flex`,`flex-col`,`gap-4`,3,`submit`],[3,`label`,`required`,`error`],[1,`flex`,`flex-wrap`,`gap-2`],[`nativeType`,`submit`],[`scsc-input`,``,3,`input`,`id`,`value`],[1,`inline-flex`,`items-center`,`gap-1`,`font-medium`,`text-error`],[1,`inline-flex`,`items-center`,`gap-1`],[`name`,`status.error`,`size`,`sm`],[`name`,`status.success`,`size`,`sm`,1,`text-success`],[1,`flex`,`flex-col`,`gap-0.5`],[1,`break-words`],[1,`inline-flex`,`items-start`,`gap-1`,`text-sm`,`text-error`],[`name`,`status.error`,`size`,`sm`,1,`mt-0.5`,`shrink-0`],[1,`sr-only`],[1,`grid`,`grid-cols-[auto_minmax(0,1fr)]`,`gap-x-6`,`gap-y-2`],[1,`text-base-content/70`]],template:function(t,n){if(t&1&&(Ga(0,`scsc-wizard`,0),sD(`indexChange`,function(o){return Y_(n.step,o)||(n.step=o),o}),lc(`cancelled`,function(){return n.cancelled.emit()})(`finish`,function(){return n.emitImport()}),Ga(1,`scsc-wizard-step`,1)(2,`div`,2)(3,`scsc-file-upload`,3),lc(`filesSelected`,function(o){return n.onFiles(o)}),Lf(),JT(4,er,3,1,`div`),JT(5,tr,4,3,`div`,4),JT(6,rr,2,1,`scsc-alert`,5)(7,nr,2,1,`scsc-alert`,6),JT(8,sr,14,6,`div`,7),Lf()(),Ga(9,`scsc-wizard-step`,8),JT(10,ur,10,4,`div`,9),Lf(),Ga(11,`scsc-wizard-step`,10),JT(12,Fr,14,14,`div`,2),Lf(),Ga(13,`scsc-wizard-step`,1),JT(14,Ir,15,7,`div`,2),Lf()()),t&2){let i,o,a;iD(`index`,n.step),Pv(`headingLevel`,n.headingLevel())(`finishLabel`,n.finishLabel())(`submitting`,n.submitting())(`showCancel`,n.showCancel()),Jb(),Pv(`label`,n.t().uploadStep)(`heading`,n.t().uploadHeading)(`description`,n.t().uploadDescription)(`canAdvance`,n.leaveUpload),Jb(2),Pv(`accept`,n.accept())(`multiple`,!1)(`label`,n.t().dropLabel)(`hint`,n.t().dropHint(n.maxSizeText())),Jb(),t_(n.showTemplate()?4:-1),Jb(),t_(n.parsing()&&n.showProgress()?5:-1),Jb(),t_((i=n.uploadError())?6:(i=n.notice())?7:-1,i),Jb(2),t_((o=n.result())?8:-1,o),Jb(),Pv(`label`,n.t().mapStep)(`heading`,n.t().mapHeading)(`description`,n.mapDescription())(`stepControl`,n.mapForm())(`canAdvance`,n.leaveMap),Jb(),t_((a=n.result())?10:-1,a),Jb(),Pv(`label`,n.t().reviewStep)(`heading`,n.reviewHeading())(`canAdvance`,n.leaveReview),Jb(),t_(n.step()>=2?12:-1),Jb(),Pv(`label`,n.t().confirmStep)(`heading`,n.confirmHeading())(`description`,n.t().confirmDescription)(`canAdvance`,n.leaveReview),Jb(),t_(n.step()===3?14:-1)}},dependencies:[Kue,Bue,$ue,Uue,tN,Hue,que,Vz,Xz,za,sn,UF,$E,da,jo,pN,Vn,kn,ye,qo,si,On,Za,Zi,Ir$1],encapsulation:2})};var Ar=r=>({importRows:r});function Pr(r,e){r&1&&(Ga(0,`scsc-alert`,2),G_(1),Lf()),r&2&&(Jb(),nD(e))}var Or=P([[`Fee code`,`Description`,`Amount`,`Effective date`],[`FL-101`,`First paper, unlimited civil`,`$435.00`,`01/01/2026`],[`FL-102`,`First paper, limited civil (over $10,000)`,`$370.00`,`01/01/2026`],[`MO-201`,`Motion or application`,`$60.00`,`2026-01-01`],[`CP-301`,`Certified copy, per document`,`40`,`1/1/26`],[`CP-302`,`Copy, per page`,`0.50`,`01/01/2026`],[`XX-9`,`Exemplification`,`1,200.00`,`01/01/2026`]],{delimiter:`;`});var ce=class r{importer=_2(D);saved=q(``);fields=[{key:`code`,label:`Fee code`,type:`text`,required:!0,pattern:`[A-Z]{2}-\\d{3}`,example:`FL-101`},{key:`description`,label:`Description`,type:`text`,required:!0},{key:`amount`,label:`Amount`,type:`number`,format:`currency`,required:!0,min:0,max:5e3},{key:`effective`,label:`Effective date`,type:`date`,required:!0,aliases:[`Effective`,`Start date`]}];toFee=e=>({code:e.code,description:e.description,amount:e.amount,effective:e.effective});importLabel=e=>`Publish ${e} ${e===1?`fee`:`fees`}`;trySample(){this.saved.set(``),this.importer()?.readFile(new File([Or],`fee-schedule-2026.csv`,{type:`text/csv`}))}save(e){let t=e.rows.reduce((n,i)=>n+i.amount,0);this.saved.set(`${e.rows.length} fees published (codes ${e.rows.map(n=>n.code).join(`, `)}; ${t.toLocaleString(`en-US`,{style:`currency`,currency:`USD`})} in total).`),this.importer()?.reset()}static ɵfac=function(t){return new(t||r)};static ɵcmp=Af({type:r,selectors:[[`app-csv-import-fees-demo`]],viewQuery:function(t,n){t&1&&Gv(n.importer,D,5),t&2&&w_()},decls:6,vars:7,consts:[[1,`flex`,`flex-col`,`gap-6`],[`variant`,`neutral`,`outline`,``,3,`click`],[`status`,`success`,`title`,`Fee schedule updated`],[3,`import`,`fields`,`allowExtraColumns`,`toRow`,`text`]],template:function(t,n){if(t&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-button`,1),lc(`click`,function(){return n.trySample()}),G_(3,` Try it with the sample fee schedule `),Lf()(),JT(4,Pr,2,1,`scsc-alert`,2),Ga(5,`scsc-csv-import`,3),lc(`import`,function(o){return n.save(o)}),Lf()()),t&2){let i;Jb(4),t_((i=n.saved())?4:-1,i),Jb(),Pv(`fields`,n.fields)(`allowExtraColumns`,!1)(`toRow`,n.toFee)(`text`,oM(5,Ar,n.importLabel))}},dependencies:[za,sn,D],encapsulation:2})};function zr(r,e){r&1&&(Ga(0,`scsc-alert`,5),G_(1),Lf()),r&2&&(Jb(),nD(e))}var xt=P([[`Juror name`,`E-mail`,`Phone`,`DOB`,`ZIP`,`Pool`,`Badge #`],[`Ana Lopez`,`ana.lopez@example.com`,`(408) 555-0101`,`04/12/1985`,`95113`,`San José`,`J-1041`],[`Ben Ortiz`,`ben.ortiz@example`,`408-555-0102`,`1990-01-02`,`95020`,`South County`,`J-1042`],[`Chen Wei`,`chen.wei@example.com`,`408.555.0103`,`7/30/72`,`94301`,`Palo Alto`,`J-1043`],[`Dana Brooks`,``,`(408) 555-0104`,`02/30/1979`,`95112`,`SJ`,`J-1044`],[`Eli Navarro`,`eli.navarro@example.com`,``,`11/02/1968`,`95037`,`South County`,`J-1045`],[`Fatima Khan`,`fatima.khan@example.com`,`(650) 555-0106`,`1994-09-17`,`94040`,`Palo Alto`,`J-1046`]]);var de=class r{document=g(X$1);importer=_2(D);saving=q(!1);done=q(``);fields=[{key:`name`,label:`Full name`,type:`text`,required:!0,aliases:[`Juror name`]},{key:`email`,label:`Email`,type:`text`,format:`email`},{key:`phone`,label:`Phone`,type:`text`,format:`phone`},{key:`dateOfBirth`,label:`Date of birth`,type:`date`,required:!0,aliases:[`DOB`,`Birth date`]},{key:`zip`,label:`ZIP code`,type:`text`,format:`zip`,required:!0},{key:`pool`,label:`Juror pool`,type:`select`,required:!0,options:[{value:`SJ`,label:`San José`},{value:`PA`,label:`Palo Alto`},{value:`MH`,label:`South County`}]}];toJuror=e=>({name:e.name,email:e.email??null,phone:e.phone??null,dateOfBirth:e.dateOfBirth,zip:e.zip,pool:e.pool});trySample(){this.done.set(``),this.importer()?.readFile(new File([xt],`jurors-sample.csv`,{type:`text/csv`}))}downloadSample(){let e=this.document.defaultView;if(!e?.URL.createObjectURL)return;let t=e.URL.createObjectURL(new Blob([xt],{type:`text/csv`})),n=this.document.createElement(`a`);n.href=t,n.download=`jurors-sample.csv`,n.click(),e.setTimeout(()=>e.URL.revokeObjectURL(t),1e3)}save(e){this.saving.set(!0),setTimeout(()=>{this.saving.set(!1);let t=e.skipped.length;this.done.set(`${e.rows.length} jurors were added to the roster`+(t?`; ${t} rows with errors were skipped.`:`.`)),this.importer()?.reset()},800)}static ɵfac=function(t){return new(t||r)};static ɵcmp=Af({type:r,selectors:[[`app-csv-import-jurors-demo`]],viewQuery:function(t,n){t&1&&Gv(n.importer,D,5),t&2&&w_()},decls:9,vars:5,consts:[[1,`flex`,`flex-col`,`gap-6`],[1,`flex`,`flex-wrap`,`gap-2`],[`variant`,`neutral`,`outline`,``,3,`click`],[`variant`,`ghost`,3,`click`],[`name`,`action.download`,`size`,`sm`],[`status`,`success`,`title`,`Jurors imported`],[3,`import`,`fields`,`maxRows`,`toRow`,`submitting`]],template:function(t,n){if(t&1&&(Ga(0,`div`,0)(1,`div`,1)(2,`scsc-button`,2),lc(`click`,function(){return n.trySample()}),G_(3,` Try it with the sample file `),Lf(),Ga(4,`scsc-button`,3),lc(`click`,function(){return n.downloadSample()}),uc(5,`scsc-icon`,4),G_(6,`Download jurors-sample.csv `),Lf()(),JT(7,zr,2,1,`scsc-alert`,5),Ga(8,`scsc-csv-import`,6),lc(`import`,function(o){return n.save(o)}),Lf()()),t&2){let i;Jb(7),t_((i=n.done())?7:-1,i),Jb(),Pv(`fields`,n.fields)(`maxRows`,5e3)(`toRow`,n.toJuror)(`submitting`,n.saving())}},dependencies:[za,sn,D,ye],encapsulation:2})};function Vr(r,e){r&1&&(Ga(0,`scsc-alert`,2),G_(1),Lf()),r&2&&(Jb(),nD(e))}var jr=[`Ana`,`Ben`,`Chen`,`Dana`,`Eli`,`Fatima`,`Gus`,`Hana`,`Ivan`,`Jo`];var Br=[`Lopez`,`Ortiz`,`Wei`,`Brooks`,`Navarro`,`Khan`,`Silva`,`Ito`,`Petrov`,`Reyes`];var qr=[`San José`,`Palo Alto`,`South County`];function Ur(r){let e=[[`Full name`,`Email`,`Date of birth`,`Juror pool`]];for(let t=1;t<=r;t++){let n=jr[t%10],i=Br[Math.floor(t/10)%10],o=t%997===0?`${n}.${i}`:`${n}.${i}${t}@example.com`,a=t%1499===0?31:t%28+1;e.push([`${n} ${i}`,o.toLowerCase(),`${t%12+1}/${a}/${1950+t%50}`,qr[t%3]])}return P(e)}var me=class r{importer=_2(D);saved=q(``);fields=[{key:`name`,label:`Full name`,type:`text`,required:!0},{key:`email`,label:`Email`,type:`text`,format:`email`,required:!0},{key:`dateOfBirth`,label:`Date of birth`,type:`date`,required:!0},{key:`pool`,label:`Juror pool`,type:`select`,options:[{value:`SJ`,label:`San José`},{value:`PA`,label:`Palo Alto`},{value:`MH`,label:`South County`}]}];load(){this.saved.set(``);let e=Ur(2e4);this.importer()?.readFile(new File([e],`jury-roster-20k.csv`,{type:`text/csv`}))}save(e){this.saved.set(`${e.rows.length.toLocaleString(`en-US`)} jurors imported, ${e.skipped.length.toLocaleString(`en-US`)} skipped.`),this.importer()?.reset()}static ɵfac=function(t){return new(t||r)};static ɵcmp=Af({type:r,selectors:[[`app-csv-import-large-demo`]],viewQuery:function(t,n){t&1&&Gv(n.importer,D,5),t&2&&w_()},decls:6,vars:4,consts:[[1,`flex`,`flex-col`,`gap-6`],[`variant`,`neutral`,`outline`,``,3,`click`],[`status`,`success`,`title`,`Roster imported`],[3,`import`,`fields`,`maxRows`,`maxFileSize`]],template:function(t,n){if(t&1&&(Ga(0,`div`,0)(1,`div`)(2,`scsc-button`,1),lc(`click`,function(){return n.load()}),G_(3,`Generate 20,000 rows`),Lf()(),JT(4,Vr,2,1,`scsc-alert`,2),Ga(5,`scsc-csv-import`,3),lc(`import`,function(o){return n.save(o)}),Lf()()),t&2){let i;Jb(4),t_((i=n.saved())?4:-1,i),Jb(),Pv(`fields`,n.fields)(`maxRows`,25e3)(`maxFileSize`,5242880)}},dependencies:[za,sn,D],encapsulation:2})};var pe={"csv-import-fees":{ts:`import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { ScscAlert, ScscButton } from '@scscourt/design';
import {
  ScscCsvImport,
  toCsv,
  type ScscCsvField,
  type ScscCsvImportResult,
} from '@scscourt/design/forms';

interface Fee {
  code: string;
  description: string;
  amount: number;
  effective: string;
}

/** Semicolon-separated, as Excel saves CSV in many locales; the delimiter is detected. */
const SAMPLE = toCsv(
  [
    ['Fee code', 'Description', 'Amount', 'Effective date'],
    ['FL-101', 'First paper, unlimited civil', '$435.00', '01/01/2026'],
    ['FL-102', 'First paper, limited civil (over $10,000)', '$370.00', '01/01/2026'],
    ['MO-201', 'Motion or application', '$60.00', '2026-01-01'],
    ['CP-301', 'Certified copy, per document', '40', '1/1/26'],
    ['CP-302', 'Copy, per page', '0.50', '01/01/2026'],
    ['XX-9', 'Exemplification', '1,200.00', '01/01/2026'],
  ],
  { delimiter: ';' },
);

@Component({
  selector: 'app-csv-import-fees-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscCsvImport],
  template: \`
    <div class="flex flex-col gap-6">
      <div>
        <scsc-button variant="neutral" outline (click)="trySample()">
          Try it with the sample fee schedule
        </scsc-button>
      </div>
      @if (saved(); as message) {
        <scsc-alert status="success" title="Fee schedule updated">{{ message }}</scsc-alert>
      }
      <scsc-csv-import
        [fields]="fields"
        [allowExtraColumns]="false"
        [toRow]="toFee"
        [text]="{ importRows: importLabel }"
        (import)="save($event)"
      />
    </div>
  \`,
})
export class CsvImportFeesDemo {
  private readonly importer = viewChild(ScscCsvImport);
  protected readonly saved = signal('');

  protected readonly fields: ScscCsvField[] = [
    {
      key: 'code',
      label: 'Fee code',
      type: 'text',
      required: true,
      pattern: '[A-Z]{2}-\\\\d{3}',
      example: 'FL-101',
    },
    { key: 'description', label: 'Description', type: 'text', required: true },
    {
      key: 'amount',
      label: 'Amount',
      type: 'number',
      format: 'currency',
      required: true,
      min: 0,
      max: 5000,
    },
    {
      key: 'effective',
      label: 'Effective date',
      type: 'date',
      required: true,
      aliases: ['Effective', 'Start date'],
    },
  ];

  protected readonly toFee = (v: Record<string, unknown>): Fee => ({
    code: v['code'] as string,
    description: v['description'] as string,
    amount: v['amount'] as number,
    effective: v['effective'] as string,
  });

  /** Replaces one of the English strings: the Import button names the records. */
  protected readonly importLabel = (n: number) => \`Publish \${n} \${n === 1 ? 'fee' : 'fees'}\`;

  protected trySample(): void {
    this.saved.set('');
    this.importer()?.readFile(new File([SAMPLE], 'fee-schedule-2026.csv', { type: 'text/csv' }));
  }

  protected save(result: ScscCsvImportResult<Fee>): void {
    const total = result.rows.reduce((sum, f) => sum + f.amount, 0);
    this.saved.set(
      \`\${result.rows.length} fees published (codes \${result.rows.map((f) => f.code).join(', ')}; \` +
        \`\${total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} in total).\`,
    );
    this.importer()?.reset();
  }
}
`,html:`<div class="flex flex-col gap-6">
  <div>
    <scsc-button variant="neutral" outline (click)="trySample()">
      Try it with the sample fee schedule
    </scsc-button>
  </div>
  @if (saved(); as message) {
    <scsc-alert status="success" title="Fee schedule updated">{{ message }}</scsc-alert>
  }
  <scsc-csv-import
    [fields]="fields"
    [allowExtraColumns]="false"
    [toRow]="toFee"
    [text]="{ importRows: importLabel }"
    (import)="save($event)"
  />
</div>
`},"csv-import-jurors":{ts:`import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ScscAlert, ScscButton, ScscIcon } from '@scscourt/design';
import {
  ScscCsvImport,
  toCsv,
  type ScscCsvField,
  type ScscCsvImportResult,
} from '@scscourt/design/forms';

interface Juror {
  name: string;
  email: string | null;
  phone: string | null;
  dateOfBirth: string;
  zip: string;
  pool: string;
}

/** A jury commissioner's export: two rows have mistakes to show the Review step. */
const SAMPLE = toCsv([
  ['Juror name', 'E-mail', 'Phone', 'DOB', 'ZIP', 'Pool', 'Badge #'],
  [
    'Ana Lopez',
    'ana.lopez@example.com',
    '(408) 555-0101',
    '04/12/1985',
    '95113',
    'San Jos\xE9',
    'J-1041',
  ],
  [
    'Ben Ortiz',
    'ben.ortiz@example',
    '408-555-0102',
    '1990-01-02',
    '95020',
    'South County',
    'J-1042',
  ],
  ['Chen Wei', 'chen.wei@example.com', '408.555.0103', '7/30/72', '94301', 'Palo Alto', 'J-1043'],
  ['Dana Brooks', '', '(408) 555-0104', '02/30/1979', '95112', 'SJ', 'J-1044'],
  ['Eli Navarro', 'eli.navarro@example.com', '', '11/02/1968', '95037', 'South County', 'J-1045'],
  [
    'Fatima Khan',
    'fatima.khan@example.com',
    '(650) 555-0106',
    '1994-09-17',
    '94040',
    'Palo Alto',
    'J-1046',
  ],
]);

@Component({
  selector: 'app-csv-import-jurors-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscCsvImport, ScscIcon],
  template: \`
    <div class="flex flex-col gap-6">
      <div class="flex flex-wrap gap-2">
        <scsc-button variant="neutral" outline (click)="trySample()">
          Try it with the sample file
        </scsc-button>
        <scsc-button variant="ghost" (click)="downloadSample()">
          <scsc-icon name="action.download" size="sm" />Download jurors-sample.csv
        </scsc-button>
      </div>

      @if (done(); as message) {
        <scsc-alert status="success" title="Jurors imported">{{ message }}</scsc-alert>
      }
      <scsc-csv-import
        [fields]="fields"
        [maxRows]="5000"
        [toRow]="toJuror"
        [submitting]="saving()"
        (import)="save($event)"
      />
    </div>
  \`,
})
export class CsvImportJurorsDemo {
  private readonly document = inject(DOCUMENT);
  private readonly importer = viewChild(ScscCsvImport);

  protected readonly saving = signal(false);
  protected readonly done = signal('');

  /** The summons roster: what each column must hold. */
  protected readonly fields: ScscCsvField[] = [
    { key: 'name', label: 'Full name', type: 'text', required: true, aliases: ['Juror name'] },
    { key: 'email', label: 'Email', type: 'text', format: 'email' },
    { key: 'phone', label: 'Phone', type: 'text', format: 'phone' },
    {
      key: 'dateOfBirth',
      label: 'Date of birth',
      type: 'date',
      required: true,
      aliases: ['DOB', 'Birth date'],
    },
    { key: 'zip', label: 'ZIP code', type: 'text', format: 'zip', required: true },
    {
      key: 'pool',
      label: 'Juror pool',
      type: 'select',
      required: true,
      options: [
        { value: 'SJ', label: 'San Jos\xE9' },
        { value: 'PA', label: 'Palo Alto' },
        { value: 'MH', label: 'South County' },
      ],
    },
  ];

  /** Typed rows: \`(import)\` emits \`ScscCsvImportResult<Juror>\`. */
  protected readonly toJuror = (v: Record<string, unknown>): Juror => ({
    name: v['name'] as string,
    email: (v['email'] as string | null) ?? null,
    phone: (v['phone'] as string | null) ?? null,
    dateOfBirth: v['dateOfBirth'] as string,
    zip: v['zip'] as string,
    pool: v['pool'] as string,
  });

  protected trySample(): void {
    this.done.set('');
    this.importer()?.readFile(new File([SAMPLE], 'jurors-sample.csv', { type: 'text/csv' }));
  }

  /** A Blob URL download: no file needs to be hosted. */
  protected downloadSample(): void {
    const view = this.document.defaultView;
    if (!view?.URL.createObjectURL) return;
    const url = view.URL.createObjectURL(new Blob([SAMPLE], { type: 'text/csv' }));
    const a = this.document.createElement('a');
    a.href = url;
    a.download = 'jurors-sample.csv';
    a.click();
    view.setTimeout(() => view.URL.revokeObjectURL(url), 1000);
  }

  protected save(result: ScscCsvImportResult<Juror>): void {
    this.saving.set(true);
    // Stands in for the API call that saves the roster.
    setTimeout(() => {
      this.saving.set(false);
      const skipped = result.skipped.length;
      this.done.set(
        \`\${result.rows.length} jurors were added to the roster\` +
          (skipped ? \`; \${skipped} rows with errors were skipped.\` : '.'),
      );
      // Back to Upload for the next file; the message stays above.
      this.importer()?.reset();
    }, 800);
  }
}
`,html:`<div class="flex flex-col gap-6">
  <div class="flex flex-wrap gap-2">
    <scsc-button variant="neutral" outline (click)="trySample()">
      Try it with the sample file
    </scsc-button>
    <scsc-button variant="ghost" (click)="downloadSample()">
      <scsc-icon name="action.download" size="sm" />Download jurors-sample.csv
    </scsc-button>
  </div>

  @if (done(); as message) {
    <scsc-alert status="success" title="Jurors imported">{{ message }}</scsc-alert>
  }
  <scsc-csv-import
    [fields]="fields"
    [maxRows]="5000"
    [toRow]="toJuror"
    [submitting]="saving()"
    (import)="save($event)"
  />
</div>
`},"csv-import-large":{ts:`import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { ScscAlert, ScscButton } from '@scscourt/design';
import {
  ScscCsvImport,
  toCsv,
  type ScscCsvField,
  type ScscCsvImportResult,
} from '@scscourt/design/forms';

const FIRST = ['Ana', 'Ben', 'Chen', 'Dana', 'Eli', 'Fatima', 'Gus', 'Hana', 'Ivan', 'Jo'];
const LAST = [
  'Lopez',
  'Ortiz',
  'Wei',
  'Brooks',
  'Navarro',
  'Khan',
  'Silva',
  'Ito',
  'Petrov',
  'Reyes',
];
const POOLS = ['San Jos\xE9', 'Palo Alto', 'South County'];

/** 20,000 jurors (about 1.5 MB), with a bad email or date every 997th row. */
function generate(count: number): string {
  const rows: string[][] = [['Full name', 'Email', 'Date of birth', 'Juror pool']];
  for (let i = 1; i <= count; i++) {
    const first = FIRST[i % 10];
    const last = LAST[Math.floor(i / 10) % 10];
    const email = i % 997 === 0 ? \`\${first}.\${last}\` : \`\${first}.\${last}\${i}@example.com\`;
    const day = i % 1499 === 0 ? 31 : (i % 28) + 1;
    rows.push([
      \`\${first} \${last}\`,
      email.toLowerCase(),
      \`\${(i % 12) + 1}/\${day}/\${1950 + (i % 50)}\`,
      POOLS[i % 3],
    ]);
  }
  return toCsv(rows);
}

@Component({
  selector: 'app-csv-import-large-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScscAlert, ScscButton, ScscCsvImport],
  template: \`
    <div class="flex flex-col gap-6">
      <div>
        <scsc-button variant="neutral" outline (click)="load()">Generate 20,000 rows</scsc-button>
      </div>
      @if (saved(); as message) {
        <scsc-alert status="success" title="Roster imported">{{ message }}</scsc-alert>
      }
      <scsc-csv-import
        [fields]="fields"
        [maxRows]="25000"
        [maxFileSize]="5 * 1024 * 1024"
        (import)="save($event)"
      />
    </div>
  \`,
})
export class CsvImportLargeDemo {
  private readonly importer = viewChild(ScscCsvImport);
  protected readonly saved = signal('');

  protected readonly fields: ScscCsvField[] = [
    { key: 'name', label: 'Full name', type: 'text', required: true },
    { key: 'email', label: 'Email', type: 'text', format: 'email', required: true },
    { key: 'dateOfBirth', label: 'Date of birth', type: 'date', required: true },
    {
      key: 'pool',
      label: 'Juror pool',
      type: 'select',
      options: [
        { value: 'SJ', label: 'San Jos\xE9' },
        { value: 'PA', label: 'Palo Alto' },
        { value: 'MH', label: 'South County' },
      ],
    },
  ];

  /** Generated in memory; files over 1 MB show progress and a Stop button while they are read. */
  protected load(): void {
    this.saved.set('');
    const csv = generate(20_000);
    this.importer()?.readFile(new File([csv], 'jury-roster-20k.csv', { type: 'text/csv' }));
  }

  protected save(result: ScscCsvImportResult): void {
    this.saved.set(
      \`\${result.rows.length.toLocaleString('en-US')} jurors imported, \` +
        \`\${result.skipped.length.toLocaleString('en-US')} skipped.\`,
    );
    this.importer()?.reset();
  }
}
`,html:`<div class="flex flex-col gap-6">
  <div>
    <scsc-button variant="neutral" outline (click)="load()">Generate 20,000 rows</scsc-button>
  </div>
  @if (saved(); as message) {
    <scsc-alert status="success" title="Roster imported">{{ message }}</scsc-alert>
  }
  <scsc-csv-import
    [fields]="fields"
    [maxRows]="25000"
    [maxFileSize]="5 * 1024 * 1024"
    (import)="save($event)"
  />
</div>
`}};var Mn={slug:`csv-import`,name:`CSV Import`,classes:[`ScscCsvImport`],category:`Specialized`,summary:"A four-step wizard that turns a spreadsheet into typed records: **Upload** (delimiter and header row detected), **Map columns** (pre-filled by matching column names to your fields), **Review** (every row validated, with per-cell errors, filters and a Fix form) and **Confirm** (import the valid rows, skip the rest, download an error report). The target is a list of `ScscCsvField`s, the same `ScscField` schema the form renderer uses.",whenToUse:["Bulk entry staff already keep in Excel: juror rosters, fee schedules, attorney lists, calendar blocks. Describe the record once as `ScscCsvField[]` and save what `(import)` emits.",`One-off data fixes by an administrator. For a recurring feed between systems, build an integration instead: the importer is for people, not pipelines.`,"Fields add import-only extras to `ScscField`: `aliases` (other column names), `format` (`email`, `phone`, `zip`, `currency`), `example` (for the generated template) and `validate` (your own check). `group` and `list` fields are skipped.","Values are coerced, not just checked: numbers with thousands separators or a `$` become numbers, US and ISO dates become `YYYY-MM-DD`, yes/no/1/0 become booleans, and select cells match an option by value or label. Empty cells become `null`. `toRow` maps the values to your own type.","Nothing leaves the browser until you save `(import)`. Set `submitting` while the save runs, then call `reset()` for the next file. `readFile(file)` loads a file you already have (from another drop zone or a test).","The parser is exported on its own (`parseCsv`, `parseCsvAsync`, `detectDelimiter`, `toCsv`) for CSV work outside the wizard."],setup:`import { ScscCsvImport, type ScscCsvField, type ScscCsvImportResult } from '@scscourt/design/forms';

// Parsing runs on the main thread in slices (with progress and Stop for files over 1 MB).
// ng-packagr cannot ship a Web Worker inside a library, so for very large files run the
// exported parseCsv in a worker of your own and pass it as [parser]:
//   // csv.worker.ts
//   import { parseCsv } from '@scscourt/design/forms';
//   addEventListener('message', ({ data }) => postMessage(parseCsv(data.text, data.options)));
//   // component
//   readonly parser: ScscCsvParser = (text, { signal, onProgress, ...options }) =>
//     new Promise((resolve, reject) => {
//       const worker = new Worker(new URL('./csv.worker', import.meta.url), { type: 'module' });
//       signal?.addEventListener('abort', () => { worker.terminate(); reject(signal.reason); });
//       worker.onmessage = ({ data }) => { worker.terminate(); resolve(data); };
//       worker.postMessage({ text, options });
//     });

// Icons used: upload, download, sheet (file.csv), pencil, circle-x, circle-check, chevrons.`,demos:[{id:`csv-import-jurors`,title:`Juror roster`,description:"Name, email, phone, date of birth, ZIP and a pool select. **Try it with the sample file** (two rows have errors; *Juror name*, *E-mail* and *DOB* match by alias), or download it and drop it in. The `Badge #` column is listed under **Columns not imported**.",component:de,source:pe[`csv-import-jurors`],layout:`full-bleed`},{id:`csv-import-fees`,title:`Fee schedule (semicolons, currency, strict columns)`,description:'A semicolon-separated file with dollar amounts and mixed date formats. `pattern` checks the fee code, `min`/`max` the amount, `[allowExtraColumns]="false"` refuses unknown columns, and `text` renames the Import button.',component:ce,source:pe[`csv-import-fees`],layout:`full-bleed`},{id:`csv-import-large`,title:`Large file: 20,000 rows`,description:`Generated in memory (about 1.5 MB). Reading shows progress and a **Stop reading** button; Review pages the rows 25 at a time, and **Only errors** finds the handful of bad ones.`,component:me,source:pe[`csv-import-large`],layout:`full-bleed`}],a11y:["Built on `scsc-wizard`: each step change moves focus to the step heading and announces “Step 2 of 4: Map columns”. Required mappings use the wizard’s validation, so a blocked Next shows `scsc-error-summary` and focuses the first unmapped field.",'Results are announced politely through `ScscAnnouncer`: the file read (“Read jurors.csv: 1,240 rows, 6 columns.”), the filter (“Showing 8 rows.”) and a fixed row. File errors (wrong type, too large, unreadable) are `role="alert"`.',"Every column mapping is a native `select` with a visible label (the field) and a hint listing the column’s first values, so people can check the match without seeing the file.",`Cell errors in the preview are text, not just colour: the value as read, an error icon and the message with a visually hidden “Error:” prefix. The Status column says “Valid” or “2 errors”.`,"Every error is reachable by keyboard: **Only errors** narrows the table, each row has a **Fix row N** button, and the Fix form’s fields are `aria-invalid` and described by their messages. After Save, focus returns to the row’s Fix button (or the summary when the row left the filtered view).","The preview table stacks into cards below the `md` breakpoint, so it reflows at 320px. The filter is a group of toggle buttons with `aria-pressed`."],keyboard:[{keys:`Tab`,action:`Upload: the file picker (inside the drop zone), **Download a template**, the **First row contains column names** box, then Back and Next.`},{keys:`Enter / Space`,action:`On the file picker: opens the system file dialog.`},{keys:`Space`,action:`On **First row contains column names**: re-reads the file with or without a header row.`},{keys:`Tab`,action:`Map columns: one select per field, then a **Use “column” for** select per column no field matched.`},{keys:`ArrowUp / ArrowDown`,action:`In a select: picks another column (or **Not imported** / **Ignore this column**).`},{keys:`Enter / Space`,action:`Review: on **All**, **Only errors** or **Only valid**, filters the table. On **Fix row N**, opens the Fix form with focus on its first invalid field.`},{keys:`Enter`,action:`In the Fix form: saves the row (same as **Save row**). Values that still fail keep the form open and focus the first one.`},{keys:`Tab`,action:`Table: the pager after the rows moves between pages of 25.`},{keys:`Enter / Space`,action:"Confirm: **Download error report** saves the skipped rows as CSV; **Import N rows** emits `(import)`."}],aria:["The step area is a `group` named “Step 3 of 4: Review”; inactive steps are `hidden` and `inert`.",'The filter is `role="group"` labelled “Show rows”; each button has `aria-pressed`. While `submitting`, the Import button is `aria-busy` and `aria-disabled`.',"Reading a large file shows `scsc-progress` (a labelled `progressbar` with its value) and a **Stop reading** button."],appMustProvide:["Field labels people recognise from their spreadsheets, and `aliases` for the column names other systems export (“DOB”, “E-mail”).","The save: `(import)` gives you typed rows; set `submitting` while you call the API and show the outcome (the demos use a success alert above the importer), then `reset()`.",`Server-side validation as well: the import checks types and formats in the browser, but duplicates, permissions and business rules belong to your API.`],related:[`wizard`,`file-upload`,`table`,`forms-schema`]};export{Mn as CSV_IMPORT_DOCS};