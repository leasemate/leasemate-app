import{K as ee,k as C,L as B,r as I,h as P,j as te,M as Pe,N as De,F as K,P as ve,R as z,m as Ae,o as k,c as O,w as b,a as p,b as y,u as x,n as D,z as ie,G as ge,Q as Fe,S as Me,O as N,l as Oe,d as M,Z as Te,f as L,t as F,g as Ce,J as Q,e as U}from"./app-2a8d0423.js";import{_ as Ne,f as Re}from"./AuthenticatedLayout-08c0f9ae.js";import{_ as Le}from"./PrimaryLink-0000ec92.js";import{_ as ue}from"./Button-fd53b588.js";import{_ as je}from"./Table-08eecb10.js";import{V as Be,p as Ue,s as Ve}from"./filepond.min-49106cf8.js";import{_ as He,a as Ke}from"./Associates-5b5983d6.js";import{_ as ze}from"./Modal-57b9959b.js";import{_ as We}from"./SecondaryButton-6e73f756.js";import{_ as qe}from"./DangerButton-d06e7210.js";import{t as V}from"./toast-6f5ead66.js";import{_ as T}from"./BoxIcon-d4695a7d.js";import{_ as Ge}from"./Checkbox-9d21164a.js";import{_ as Qe}from"./Pagination-a706cc8b.js";import"./DropdownLink-5a3b7f04.js";import"./index-a73cbb6a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-1e141e9b.js";let Xe=Symbol("headlessui.useid"),Je=0;function ne(){return ee(Xe,()=>`${++Je}`)()}function w(e){var t;if(e==null||e.value==null)return null;let r=(t=e.value.$el)!=null?t:e.value;return r instanceof Node?r:null}function W(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,W),a}var Ze=Object.defineProperty,Ye=(e,t,r)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t,r)=>(Ye(e,typeof t!="symbol"?t+"":t,r),r);let et=class{constructor(){ce(this,"current",this.detect()),ce(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},re=new et;function se(e){if(re.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=w(e);if(t)return t.ownerDocument}return document}let J=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Z=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Z||{}),tt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(tt||{}),nt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(nt||{});function he(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(J)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ae=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ae||{});function le(e,t=0){var r;return e===((r=se(e))==null?void 0:r.body)?!1:W(t,{0(){return e.matches(J)},1(){let a=e;for(;a!==null;){if(a.matches(J))return!0;a=a.parentElement}return!1}})}function ye(e){let t=se(e);C(()=>{t&&!le(t.activeElement,0)&&st(e)})}var rt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(rt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function st(e){e==null||e.focus({preventScroll:!0})}let at=["textarea","input"].join(",");function lt(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,at))!=null?r:!1}function _e(e,t=r=>r){return e.slice().sort((r,a)=>{let o=t(r),s=t(a);if(o===null||s===null)return 0;let n=o.compareDocumentPosition(s);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ot(e,t){return it(he(),t,{relativeTo:e})}function it(e,t,{sorted:r=!0,relativeTo:a=null,skipElements:o=[]}={}){var s;let n=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,i=Array.isArray(e)?r?_e(e):e:he(e);o.length>0&&i.length>1&&(i=i.filter(u=>!o.includes(u))),a=a??n.activeElement;let v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),g=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(a))-1;if(t&4)return Math.max(0,i.indexOf(a))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),_=t&32?{preventScroll:!0}:{},h=0,l=i.length,f;do{if(h>=l||h+l<=0)return 0;let u=g+h;if(t&16)u=(u+l)%l;else{if(u<0)return 3;if(u>=l)return 1}f=i[u],f==null||f.focus(_),h+=v}while(f!==n.activeElement);return t&6&&lt(f)&&f.select(),2}function ut(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ct(){return/Android/gi.test(window.navigator.userAgent)}function dt(){return ut()||ct()}function H(e,t,r){re.isServer||B(a=>{document.addEventListener(e,t,r),a(()=>document.removeEventListener(e,t,r))})}function ft(e,t,r){re.isServer||B(a=>{window.addEventListener(e,t,r),a(()=>window.removeEventListener(e,t,r))})}function pt(e,t,r=P(()=>!0)){function a(s,n){if(!r.value||s.defaultPrevented)return;let i=n(s);if(i===null||!i.getRootNode().contains(i))return;let v=function g(_){return typeof _=="function"?g(_()):Array.isArray(_)||_ instanceof Set?_:[_]}(e);for(let g of v){if(g===null)continue;let _=g instanceof HTMLElement?g:w(g);if(_!=null&&_.contains(i)||s.composed&&s.composedPath().includes(_))return}return!le(i,ae.Loose)&&i.tabIndex!==-1&&s.preventDefault(),t(s,i)}let o=I(null);H("pointerdown",s=>{var n,i;r.value&&(o.value=((i=(n=s.composedPath)==null?void 0:n.call(s))==null?void 0:i[0])||s.target)},!0),H("mousedown",s=>{var n,i;r.value&&(o.value=((i=(n=s.composedPath)==null?void 0:n.call(s))==null?void 0:i[0])||s.target)},!0),H("click",s=>{dt()||o.value&&(a(s,()=>o.value),o.value=null)},!0),H("touchend",s=>a(s,()=>s.target instanceof HTMLElement?s.target:null),!0),ft("blur",s=>a(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function de(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function mt(e,t){let r=I(de(e.value.type,e.value.as));return te(()=>{r.value=de(e.value.type,e.value.as)}),B(()=>{var a;r.value||w(t)&&w(t)instanceof HTMLButtonElement&&!((a=w(t))!=null&&a.hasAttribute("type"))&&(r.value="button")}),r}function fe(e){return[e.screenX,e.screenY]}function vt(){let e=I([-1,-1]);return{wasMoved(t){let r=fe(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=fe(t)}}}function gt({container:e,accept:t,walk:r,enabled:a}){B(()=>{let o=e.value;if(!o||a!==void 0&&!a.value)return;let s=se(e);if(!s)return;let n=Object.assign(v=>t(v),{acceptNode:t}),i=s.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,n,!1);for(;i.nextNode();)r(i.currentNode)})}var Y=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Y||{}),ht=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ht||{});function q({visible:e=!0,features:t=0,ourProps:r,theirProps:a,...o}){var s;let n=xe(a,r),i=Object.assign(o,{props:n});if(e||t&2&&n.static)return X(i);if(t&1){let v=(s=n.unmount)==null||s?0:1;return W(v,{0(){return null},1(){return X({...o,props:{...n,hidden:!0,style:{display:"none"}}})}})}return X(i)}function X({props:e,attrs:t,slots:r,slot:a,name:o}){var s,n;let{as:i,...v}=yt(e,["unmount","static"]),g=(s=r.default)==null?void 0:s.call(r,a),_={};if(a){let h=!1,l=[];for(let[f,u]of Object.entries(a))typeof u=="boolean"&&(h=!0),u===!0&&l.push(f);h&&(_["data-headlessui-state"]=l.join(" "))}if(i==="template"){if(g=be(g??[]),Object.keys(v).length>0||Object.keys(t).length>0){let[h,...l]=g??[];if(!_t(h)||l.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(v).concat(Object.keys(t)).map(m=>m.trim()).filter((m,S,c)=>c.indexOf(m)===S).sort((m,S)=>m.localeCompare(S)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=xe((n=h.props)!=null?n:{},v,_),u=Pe(h,f,!0);for(let m in f)m.startsWith("on")&&(u.props||(u.props={}),u.props[m]=f[m]);return u}return Array.isArray(g)&&g.length===1?g[0]:g}return De(i,Object.assign({},v,_),{default:()=>g})}function be(e){return e.flatMap(t=>t.type===K?be(t.children):[t])}function xe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let o in a)o.startsWith("on")&&typeof a[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(a[o])):t[o]=a[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](o,...s){let n=r[a];for(let i of n){if(o instanceof Event&&o.defaultPrevented)return;i(o,...s)}}});return t}function yt(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}function _t(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let we=Symbol("Context");var j=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(j||{});function bt(){return ee(we,null)}function xt(e){ve(we,e)}var E=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(E||{});function wt(e){throw new Error("Unexpected object: "+e)}var A=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(A||{});function St(e,t){let r=t.resolveItems();if(r.length<=0)return null;let a=t.resolveActiveIndex(),o=a??-1;switch(e.focus){case 0:{for(let s=0;s<r.length;++s)if(!t.resolveDisabled(r[s],s,r))return s;return a}case 1:{o===-1&&(o=r.length);for(let s=o-1;s>=0;--s)if(!t.resolveDisabled(r[s],s,r))return s;return a}case 2:{for(let s=o+1;s<r.length;++s)if(!t.resolveDisabled(r[s],s,r))return s;return a}case 3:{for(let s=r.length-1;s>=0;--s)if(!t.resolveDisabled(r[s],s,r))return s;return a}case 4:{for(let s=0;s<r.length;++s)if(t.resolveId(r[s],s,r)===e.id)return s;return a}case 5:return null;default:wt(e)}}let pe=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function me(e){var t,r;let a=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return a;let s=!1;for(let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),s=!0;let n=s?(r=o.innerText)!=null?r:"":a;return pe.test(n)&&(n=n.replace(pe,"")),n}function kt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let a=r.split(" ").map(o=>{let s=document.getElementById(o);if(s){let n=s.getAttribute("aria-label");return typeof n=="string"?n.trim():me(s).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return me(e).trim()}function Et(e){let t=I(""),r=I("");return()=>{let a=w(e);if(!a)return"";let o=a.innerText;if(t.value===o)return r.value;let s=kt(a).trim().toLowerCase();return t.value=o,r.value=s,s}}var It=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(It||{}),$t=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))($t||{});function Pt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Se=Symbol("MenuContext");function G(e){let t=ee(Se,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,G),r}return t}let ke=z({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let a=I(1),o=I(null),s=I(null),n=I([]),i=I(""),v=I(null),g=I(1);function _(l=f=>f){let f=v.value!==null?n.value[v.value]:null,u=_e(l(n.value.slice()),S=>w(S.dataRef.domRef)),m=f?u.indexOf(f):null;return m===-1&&(m=null),{items:u,activeItemIndex:m}}let h={menuState:a,buttonRef:o,itemsRef:s,items:n,searchQuery:i,activeItemIndex:v,activationTrigger:g,closeMenu:()=>{a.value=1,v.value=null},openMenu:()=>a.value=0,goToItem(l,f,u){let m=_(),S=St(l===A.Specific?{focus:A.Specific,id:f}:{focus:l},{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.disabled});i.value="",v.value=S,g.value=u??1,n.value=m.items},search(l){let f=i.value!==""?0:1;i.value+=l.toLowerCase();let u=(v.value!==null?n.value.slice(v.value+f).concat(n.value.slice(0,v.value+f)):n.value).find(S=>S.dataRef.textValue.startsWith(i.value)&&!S.dataRef.disabled),m=u?n.value.indexOf(u):-1;m===-1||m===v.value||(v.value=m,g.value=1)},clearSearch(){i.value=""},registerItem(l,f){let u=_(m=>[...m,{id:l,dataRef:f}]);n.value=u.items,v.value=u.activeItemIndex,g.value=1},unregisterItem(l){let f=_(u=>{let m=u.findIndex(S=>S.id===l);return m!==-1&&u.splice(m,1),u});n.value=f.items,v.value=f.activeItemIndex,g.value=1}};return pt([o,s],(l,f)=>{var u;h.closeMenu(),le(f,ae.Loose)||(l.preventDefault(),(u=w(o))==null||u.focus())},P(()=>a.value===0)),ve(Se,h),xt(P(()=>W(a.value,{0:j.Open,1:j.Closed}))),()=>{let l={open:a.value===0,close:h.closeMenu};return q({ourProps:{},theirProps:e,slot:l,slots:t,attrs:r,name:"Menu"})}}}),Ee=z({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:a}){var o;let s=(o=e.id)!=null?o:`headlessui-menu-button-${ne()}`,n=G("MenuButton");a({el:n.buttonRef,$el:n.buttonRef});function i(h){switch(h.key){case E.Space:case E.Enter:case E.ArrowDown:h.preventDefault(),h.stopPropagation(),n.openMenu(),C(()=>{var l;(l=w(n.itemsRef))==null||l.focus({preventScroll:!0}),n.goToItem(A.First)});break;case E.ArrowUp:h.preventDefault(),h.stopPropagation(),n.openMenu(),C(()=>{var l;(l=w(n.itemsRef))==null||l.focus({preventScroll:!0}),n.goToItem(A.Last)});break}}function v(h){switch(h.key){case E.Space:h.preventDefault();break}}function g(h){e.disabled||(n.menuState.value===0?(n.closeMenu(),C(()=>{var l;return(l=w(n.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(h.preventDefault(),n.openMenu(),Pt(()=>{var l;return(l=w(n.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let _=mt(P(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var h;let l={open:n.menuState.value===0},{...f}=e,u={ref:n.buttonRef,id:s,type:_.value,"aria-haspopup":"menu","aria-controls":(h=w(n.itemsRef))==null?void 0:h.id,"aria-expanded":n.menuState.value===0,onKeydown:i,onKeyup:v,onClick:g};return q({ourProps:u,theirProps:f,slot:l,attrs:t,slots:r,name:"MenuButton"})}}}),Ie=z({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:a}){var o;let s=(o=e.id)!=null?o:`headlessui-menu-items-${ne()}`,n=G("MenuItems"),i=I(null);a({el:n.itemsRef,$el:n.itemsRef}),gt({container:P(()=>w(n.itemsRef)),enabled:P(()=>n.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function v(l){var f;switch(i.value&&clearTimeout(i.value),l.key){case E.Space:if(n.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),n.search(l.key);case E.Enter:if(l.preventDefault(),l.stopPropagation(),n.activeItemIndex.value!==null){let u=n.items.value[n.activeItemIndex.value];(f=w(u.dataRef.domRef))==null||f.click()}n.closeMenu(),ye(w(n.buttonRef));break;case E.ArrowDown:return l.preventDefault(),l.stopPropagation(),n.goToItem(A.Next);case E.ArrowUp:return l.preventDefault(),l.stopPropagation(),n.goToItem(A.Previous);case E.Home:case E.PageUp:return l.preventDefault(),l.stopPropagation(),n.goToItem(A.First);case E.End:case E.PageDown:return l.preventDefault(),l.stopPropagation(),n.goToItem(A.Last);case E.Escape:l.preventDefault(),l.stopPropagation(),n.closeMenu(),C(()=>{var u;return(u=w(n.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case E.Tab:l.preventDefault(),l.stopPropagation(),n.closeMenu(),C(()=>ot(w(n.buttonRef),l.shiftKey?Z.Previous:Z.Next));break;default:l.key.length===1&&(n.search(l.key),i.value=setTimeout(()=>n.clearSearch(),350));break}}function g(l){switch(l.key){case E.Space:l.preventDefault();break}}let _=bt(),h=P(()=>_!==null?(_.value&j.Open)===j.Open:n.menuState.value===0);return()=>{var l,f;let u={open:n.menuState.value===0},{...m}=e,S={"aria-activedescendant":n.activeItemIndex.value===null||(l=n.items.value[n.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(f=w(n.buttonRef))==null?void 0:f.id,id:s,onKeydown:v,onKeyup:g,role:"menu",tabIndex:0,ref:n.itemsRef};return q({ourProps:S,theirProps:m,slot:u,attrs:t,slots:r,features:Y.RenderStrategy|Y.Static,visible:h.value,name:"MenuItems"})}}}),R=z({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:r,expose:a}){var o;let s=(o=e.id)!=null?o:`headlessui-menu-item-${ne()}`,n=G("MenuItem"),i=I(null);a({el:i,$el:i});let v=P(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===s:!1),g=Et(i),_=P(()=>({disabled:e.disabled,get textValue(){return g()},domRef:i}));te(()=>n.registerItem(s,_)),Ae(()=>n.unregisterItem(s)),B(()=>{n.menuState.value===0&&v.value&&n.activationTrigger.value!==0&&C(()=>{var c,$;return($=(c=w(i))==null?void 0:c.scrollIntoView)==null?void 0:$.call(c,{block:"nearest"})})});function h(c){if(e.disabled)return c.preventDefault();n.closeMenu(),ye(w(n.buttonRef))}function l(){if(e.disabled)return n.goToItem(A.Nothing);n.goToItem(A.Specific,s)}let f=vt();function u(c){f.update(c)}function m(c){f.wasMoved(c)&&(e.disabled||v.value||n.goToItem(A.Specific,s,0))}function S(c){f.wasMoved(c)&&(e.disabled||v.value&&n.goToItem(A.Nothing))}return()=>{let{disabled:c}=e,$={active:v.value,disabled:c,close:n.closeMenu},{...d}=e;return q({ourProps:{id:s,ref:i,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,disabled:void 0,onClick:h,onFocus:l,onPointerenter:u,onMouseenter:u,onPointermove:m,onMousemove:m,onPointerleave:S,onMouseleave:S},theirProps:{...r,...d},slot:$,attrs:r,slots:t,name:"MenuItem"})}}});const Dt={class:"py-1"},At={__name:"TableDropdown",props:{index:{type:Number,default:0},length:{type:Number,default:0},bottomAlign:{type:String,default:"2"},align:{type:String,default:"right"},menuItemClasses:{type:String,default:""},menuButtonClasses:{type:String,default:""},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white","dark:bg-gray-700"]}},setup(e){const t=e,r=P(()=>"w-"+t.width.toString()),a=P(()=>"right-10 -top-2"),o=P(()=>a.value);return P(()=>t.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":t.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),(s,n)=>(k(),O(x(ke),{as:"div",class:"relative inline-block text-left"},{default:b(()=>[p("div",null,[y(x(Ee),{class:D(["inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",[t.menuButtonClasses]])},{default:b(()=>[ie(s.$slots,"trigger")]),_:3},8,["class"])]),y(ge,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:b(()=>[y(x(Ie),{class:D(["absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",[o.value,r.value]])},{default:b(()=>[p("div",Dt,[ie(s.$slots,"content")])]),_:3},8,["class"])]),_:3})]),_:3}))}},Ft={class:"flex justify-end"},Mt=p("th",{scope:"col",class:"pl-4 pr-2 py-3"},null,-1),Ot=p("th",{scope:"col",class:"px-6 py-3"},null,-1),Tt=p("th",{scope:"col",class:"px-6 py-3"}," Name ",-1),Ct=p("th",{scope:"col",class:"px-6 py-3"}," Premise ",-1),Nt=p("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"}," GLA (SQFT) ",-1),Rt=p("th",{scope:"col",class:"px-6 py-3"}," Start Date ",-1),Lt=p("th",{scope:"col",class:"px-6 py-3"}," End Date ",-1),jt=p("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"}," Rent (SQFT) ",-1),Bt={scope:"col",class:"px-6 py-3 font-normal normal-case"},Ut={class:"py-1"},Vt={class:"pl-4 pr-2 py-4 space-x-2"},Ht={scope:"row",class:"px-6 py-4 space-x-2"},Kt={class:"relative mr-1.5 flex h-2.5 w-2.5"},zt={class:"whitespace-nowrap"},Wt={class:"px-6 py-4 text-gray-900"},qt={class:"flex items-center"},Gt={key:1},Qt={key:2,class:"italic text-gray-500"},Xt=["href"],Jt={class:"px-6 py-4 dark:text-zinc-100/80"},Zt={key:1,class:"text-gray-500"},Yt={class:"px-6 py-4 dark:text-zinc-100/80"},en={class:"px-6 py-4 dark:text-zinc-100/80"},tn={class:"px-6 py-4 space-x-2"},nn={class:"px-6 py-4 space-x-2"},rn={class:"px-6 py-4"},sn=p("span",null,"View",-1),an=["href"],ln=p("span",null,"Download",-1),on=["onClick"],un=p("span",null,"Restore",-1),cn=p("span",null,"Archive",-1),dn={key:1,class:"mt-10 py-24 bg-gray-50 rounded-lg shadow-md"},fn=p("p",{class:"text-center text-gray-600"},"Upload your first lease",-1),pn=[fn],mn={class:"p-6"},vn=p("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this lease? ",-1),gn={class:"mt-6 flex justify-end"},Nn={__name:"Show",props:{asset:Object,associates:Array,leases:Object},setup(e){const t=Fe(),r=P(()=>t.props.auth.user),a=e,o=I(a.leases);Me(a.leases,(c,$)=>{console.log("props.leases has changed:",c)},{deep:!0});const{getFileStatusClass:s}=Re(),n=I(null),i=I(!1),v=c=>{i.value=!0,n.value=c},g=()=>{i.value=!1},_=()=>{if(n.value){g();try{N.delete(route("assets.leases.destroy",[a.asset,n.value.id]),{preserveScroll:!0})}catch(c){V.error(c),console.log(c)}}},h=c=>{try{N.post(route("assets.leases.archive",[a.asset,c]),{},{preserveScroll:!0})}catch($){V.error($),console.log($)}},l=c=>{try{N.post(route("assets.leases.restore",[a.asset,c]),{},{preserveScroll:!0})}catch($){V.error($),console.log($)}},f=Be(Ue);let u="";Ve({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf"],server:{process:{url:route("assets.leases.store",a.asset),headers:{Accept:"application/json","X-CSRF-TOKEN":t.props.csrf},onsuccess:c=>{console.log("on success"),console.log(c)},onerror:c=>{console.log("on error"),u=JSON.parse(c)}}},labelFileProcessingError:c=>(console.log(c),console.log(u),u.errors&&u.errors.lease_document?u.errors.lease_document.join(" "):u.message)});const m=(c,$)=>{N.reload({only:["leases"]})},S=()=>{};return te(()=>{Echo.private(`tenant-global-channel.${t.props.tenant_id}`).listen("LeaseFileDeleted",c=>{V.success(c.lease_deleted.file_name+": Deleted successfully"),N.reload({preserveScroll:!0})}).listen("LeaseProcessingUpdate",c=>{N.reload({preserveScroll:!0})})}),Oe(()=>{r.value&&Echo.leave(`tenant-global-channel.${t.props.tenant_id}`)}),(c,$)=>(k(),M(K,null,[y(x(Te),{title:"Asset"}),y(Ne,null,{header:b(()=>[L(" Asset - "+F(e.asset.name),1)]),default:b(()=>[p("div",Ft,[y(Le,{href:c.route("assets.edit",e.asset)},{default:b(()=>[L("Edit Asset")]),_:1},8,["href"])]),y(He,{asset:e.asset},null,8,["asset"]),y(Ke,{associates:e.associates},null,8,["associates"]),y(x(f),{name:"lease_document",onInit:S,onProcessfile:m,ref:"pond","class-name":"my-file-upload","label-idle":"Lease Drop or <span class='filepond--label-action'>Browse</span>"},null,512),a.leases.data.length?(k(),O(je,{key:0,containerClasses:"pb-28"},{head:b(()=>[p("tr",null,[Mt,Ot,Tt,Ct,Nt,Rt,Lt,jt,p("th",Bt,[y(x(ke),{as:"div",class:"relative inline-block text-left"},{default:b(()=>[p("div",null,[y(x(Ee),{class:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},{default:b(()=>[y(T,{class:"bx-filter-alt text-[20px] text-gray-500"})]),_:1})]),y(ge,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:b(()=>[y(x(Ie),{class:"absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:b(()=>[p("div",Ut,[y(x(R),null,{default:b(({active:d})=>[p("a",{href:"#",class:D([d?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Filters...",2)]),_:1})])]),_:1})]),_:1})]),_:1})])])]),body:b(()=>[(k(!0),M(K,null,Ce(a.leases.data,(d,$e)=>(k(),M("tr",{key:d.id,class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},[p("td",Vt,[y(Ge)]),p("th",Ht,[p("span",{class:D(["inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",x(s)(d.lease_document.status)])},[p("span",Kt,[["Ready","Failed","Archived"].includes(d.lease_document.status)?(k(),M("span",{key:1,class:D(["relative inline-flex h-2.5 w-2.5 rounded-full",x(s)(d.lease_document.status,"PROCESS_CLASSES")])},null,2)):(k(),M(K,{key:0},[p("span",{class:D(["absolute inline-flex h-full w-full animate-ping rounded-full",x(s)(d.lease_document.status,"PROCESS_CLASSES")])},null,2),p("span",{class:D(["relative inline-flex h-2.5 w-2.5 rounded-full",x(s)(d.lease_document.status,"PROCESS_CLASSES")])},null,2)],64))]),p("span",zt,F(d.lease_document.status)+" "+F(d.lease_document.status_progress),1)],2)]),p("td",Wt,[d.lease_document.status==="Ready"?(k(),O(x(Q),{key:0,href:c.route("assets.leases.show",[d.asset_id,d.id])},{default:b(()=>[p("div",qt,[d.tenant?U("",!0):(k(),O(T,{key:0,class:"bx-error mr-1 text-yellow-500"})),d.tenant?(k(),M("strong",Gt,F(d.tenant),1)):(k(),M("span",Qt,F(d.lease_document.name),1))])]),_:2},1032,["href"])):(k(),M("a",{key:1,href:d.lease_document.file_name,type:"external",target:"_blank",class:"text-gray-500"},F(d.lease_document.name),9,Xt))]),p("td",Jt,[d.premise_address?(k(),O(x(Q),{key:0,href:c.route("assets.leases.show",[d.asset_id,d.id])},{default:b(()=>[L(F(d.premise_address),1)]),_:2},1032,["href"])):(k(),M("span",Zt,"--"))]),p("td",Yt,F(c.filters.formatNumber(d.gla)??"--"),1),p("td",en,F(d.start_date??"--"),1),p("td",tn,F(d.end_date??"--"),1),p("td",nn,F(c.filters.formatMoney(d.rent_per_sqft)??"--"),1),p("td",rn,[y(At,{index:$e,length:o.value.length,width:"32"},{trigger:b(()=>[y(T,{class:"bx-dots-vertical-rounded text-gray-500"})]),content:b(()=>[d.tenant?(k(),O(x(R),{key:0},{default:b(()=>[d.tenant?(k(),O(x(Q),{key:0,href:c.route("assets.leases.show",[d.asset_id,d.id]),class:D(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"])},{default:b(()=>[y(T,{class:"bx-search text-gray-500"}),sn]),_:2},1032,["href"])):U("",!0)]),_:2},1024)):U("",!0),y(x(R),null,{default:b(()=>[p("a",{href:d.lease_document.file_name,target:"_blank",class:D(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"])},[y(T,{class:"bx-cloud-download text-gray-500"}),ln],8,an)]),_:2},1024),d.is_archived?(k(),O(x(R),{key:1},{default:b(()=>[p("a",{href:"#",class:D(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"]),onClick:oe=>l(d)},[y(T,{class:"bx-box text-gray-500"}),un],8,on)]),_:2},1024)):d.lease_document.status=="Ready"?(k(),O(x(R),{key:2},{default:b(()=>[y(ue,{class:D(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"]),onClick:oe=>h(d)},{default:b(()=>[y(T,{class:"bx-box text-gray-500"}),cn]),_:2},1032,["onClick"])]),_:2},1024)):U("",!0),y(x(R),{disabled:d.lease_document.is_deleting},{default:b(()=>[y(ue,{class:D(["flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","text-left",d.is_deleting?"text-red-200 cursor-default":"text-red-700 hover:bg-gray-100"]),onClick:oe=>v(d)},{default:b(()=>[y(T,{class:D(["bx-trash",d.is_deleting?"text-red-200":"text-red-500"])},null,8,["class"]),p("span",null,F(d.is_deleting?"Deleting...":"Delete"),1)]),_:2},1032,["class","onClick"])]),_:2},1032,["disabled"])]),_:2},1032,["index","length"])])]))),128))]),_:1})):(k(),M("div",dn,pn)),y(Qe,{dataset:a.leases},null,8,["dataset"]),y(ze,{show:i.value,onClose:g},{default:b(()=>[p("div",mn,[vn,p("div",gn,[y(We,{onClick:g},{default:b(()=>[L(" Cancel ")]),_:1}),y(qe,{class:"ml-3",onClick:$[0]||($[0]=d=>_())},{default:b(()=>[L(" Delete ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{Nn as default};
