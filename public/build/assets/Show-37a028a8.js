import{o as F,d as M,n as P,L as J,z as O,M as L,r as I,s as $,y as Y,N as $e,P as Pe,F as V,R as ve,S as K,V as Ae,c as H,w as x,a as f,b as y,u as S,j as ae,q as me,Q as De,W as Fe,X as Me,O as T,A as Oe,Z as Te,f as j,t as D,g as Ce,K as Ne,e as Re}from"./app-63476f0c.js";import{_ as Le,f as je}from"./AuthenticatedLayout-89a0635e.js";import{_ as Be}from"./PrimaryLink-8a99f399.js";import{_ as oe}from"./Button-47667414.js";import{T as Ue}from"./Table-6ec41ec3.js";import{V as Ve,p as He,s as Ke}from"./filepond.min-757d4464.js";import{_ as ze,a as We}from"./Associates-52e5a036.js";import{_ as qe}from"./Modal-0b395490.js";import{_ as Ge}from"./SecondaryButton-6f1a3014.js";import{_ as Xe}from"./DangerButton-d9b60e21.js";import{t as B}from"./toast-aef3bde4.js";import{_ as ie}from"./Checkbox-741a5db9.js";import"./DropdownLink-8d001e13.js";import"./index-b5c447b3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-a0ec36da.js";const C={__name:"BoxIcon",props:{class:{type:String,default:"button"}},setup(e){const t=e;return(r,l)=>(F(),M("i",{class:P(["bx text-[20px]",t.class])},null,2))}};let Qe=Symbol("headlessui.useid"),Ze=0;function ee(){return J(Qe,()=>`${++Ze}`)()}function _(e){var t;if(e==null||e.value==null)return null;let r=(t=e.value.$el)!=null?t:e.value;return r instanceof Node?r:null}function z(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,z),l}var Je=Object.defineProperty,Ye=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ue=(e,t,r)=>(Ye(e,typeof t!="symbol"?t+"":t,r),r);let et=class{constructor(){ue(this,"current",this.detect()),ue(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},te=new et;function ne(e){if(te.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=_(e);if(t)return t.ownerDocument}return document}let X=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Q||{}),tt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(tt||{}),nt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(nt||{});function ge(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(X)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var re=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(re||{});function se(e,t=0){var r;return e===((r=ne(e))==null?void 0:r.body)?!1:z(t,{0(){return e.matches(X)},1(){let l=e;for(;l!==null;){if(l.matches(X))return!0;l=l.parentElement}return!1}})}function he(e){let t=ne(e);O(()=>{t&&!se(t.activeElement,0)&&st(e)})}var rt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(rt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function st(e){e==null||e.focus({preventScroll:!0})}let lt=["textarea","input"].join(",");function at(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,lt))!=null?r:!1}function ye(e,t=r=>r){return e.slice().sort((r,l)=>{let o=t(r),s=t(l);if(o===null||s===null)return 0;let n=o.compareDocumentPosition(s);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ot(e,t){return it(ge(),t,{relativeTo:e})}function it(e,t,{sorted:r=!0,relativeTo:l=null,skipElements:o=[]}={}){var s;let n=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,i=Array.isArray(e)?r?ye(e):e:ge(e);o.length>0&&i.length>1&&(i=i.filter(u=>!o.includes(u))),l=l??n.activeElement;let v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(l))-1;if(t&4)return Math.max(0,i.indexOf(l))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=t&32?{preventScroll:!0}:{},g=0,a=i.length,d;do{if(g>=a||g+a<=0)return 0;let u=m+g;if(t&16)u=(u+a)%a;else{if(u<0)return 3;if(u>=a)return 1}d=i[u],d==null||d.focus(b),g+=v}while(d!==n.activeElement);return t&6&&at(d)&&d.select(),2}function ut(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ct(){return/Android/gi.test(window.navigator.userAgent)}function dt(){return ut()||ct()}function U(e,t,r){te.isServer||L(l=>{document.addEventListener(e,t,r),l(()=>document.removeEventListener(e,t,r))})}function ft(e,t,r){te.isServer||L(l=>{window.addEventListener(e,t,r),l(()=>window.removeEventListener(e,t,r))})}function pt(e,t,r=$(()=>!0)){function l(s,n){if(!r.value||s.defaultPrevented)return;let i=n(s);if(i===null||!i.getRootNode().contains(i))return;let v=function m(b){return typeof b=="function"?m(b()):Array.isArray(b)||b instanceof Set?b:[b]}(e);for(let m of v){if(m===null)continue;let b=m instanceof HTMLElement?m:_(m);if(b!=null&&b.contains(i)||s.composed&&s.composedPath().includes(b))return}return!se(i,re.Loose)&&i.tabIndex!==-1&&s.preventDefault(),t(s,i)}let o=I(null);U("pointerdown",s=>{var n,i;r.value&&(o.value=((i=(n=s.composedPath)==null?void 0:n.call(s))==null?void 0:i[0])||s.target)},!0),U("mousedown",s=>{var n,i;r.value&&(o.value=((i=(n=s.composedPath)==null?void 0:n.call(s))==null?void 0:i[0])||s.target)},!0),U("click",s=>{dt()||o.value&&(l(s,()=>o.value),o.value=null)},!0),U("touchend",s=>l(s,()=>s.target instanceof HTMLElement?s.target:null),!0),ft("blur",s=>l(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ce(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function vt(e,t){let r=I(ce(e.value.type,e.value.as));return Y(()=>{r.value=ce(e.value.type,e.value.as)}),L(()=>{var l;r.value||_(t)&&_(t)instanceof HTMLButtonElement&&!((l=_(t))!=null&&l.hasAttribute("type"))&&(r.value="button")}),r}function de(e){return[e.screenX,e.screenY]}function mt(){let e=I([-1,-1]);return{wasMoved(t){let r=de(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=de(t)}}}function gt({container:e,accept:t,walk:r,enabled:l}){L(()=>{let o=e.value;if(!o||l!==void 0&&!l.value)return;let s=ne(e);if(!s)return;let n=Object.assign(v=>t(v),{acceptNode:t}),i=s.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,n,!1);for(;i.nextNode();)r(i.currentNode)})}var Z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Z||{}),ht=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ht||{});function W({visible:e=!0,features:t=0,ourProps:r,theirProps:l,...o}){var s;let n=xe(l,r),i=Object.assign(o,{props:n});if(e||t&2&&n.static)return G(i);if(t&1){let v=(s=n.unmount)==null||s?0:1;return z(v,{0(){return null},1(){return G({...o,props:{...n,hidden:!0,style:{display:"none"}}})}})}return G(i)}function G({props:e,attrs:t,slots:r,slot:l,name:o}){var s,n;let{as:i,...v}=yt(e,["unmount","static"]),m=(s=r.default)==null?void 0:s.call(r,l),b={};if(l){let g=!1,a=[];for(let[d,u]of Object.entries(l))typeof u=="boolean"&&(g=!0),u===!0&&a.push(d);g&&(b["data-headlessui-state"]=a.join(" "))}if(i==="template"){if(m=be(m??[]),Object.keys(v).length>0||Object.keys(t).length>0){let[g,...a]=m??[];if(!bt(g)||a.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(v).concat(Object.keys(t)).map(p=>p.trim()).filter((p,w,c)=>c.indexOf(p)===w).sort((p,w)=>p.localeCompare(w)).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let d=xe((n=g.props)!=null?n:{},v,b),u=$e(g,d,!0);for(let p in d)p.startsWith("on")&&(u.props||(u.props={}),u.props[p]=d[p]);return u}return Array.isArray(m)&&m.length===1?m[0]:m}return Pe(i,Object.assign({},v,b),{default:()=>m})}function be(e){return e.flatMap(t=>t.type===V?be(t.children):[t])}function xe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let l of e)for(let o in l)o.startsWith("on")&&typeof l[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(l[o])):t[o]=l[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(l=>[l,void 0])));for(let l in r)Object.assign(t,{[l](o,...s){let n=r[l];for(let i of n){if(o instanceof Event&&o.defaultPrevented)return;i(o,...s)}}});return t}function yt(e,t=[]){let r=Object.assign({},e);for(let l of t)l in r&&delete r[l];return r}function bt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let _e=Symbol("Context");var R=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(R||{});function xt(){return J(_e,null)}function _t(e){ve(_e,e)}var E=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(E||{});function wt(e){throw new Error("Unexpected object: "+e)}var A=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(A||{});function St(e,t){let r=t.resolveItems();if(r.length<=0)return null;let l=t.resolveActiveIndex(),o=l??-1;switch(e.focus){case 0:{for(let s=0;s<r.length;++s)if(!t.resolveDisabled(r[s],s,r))return s;return l}case 1:{o===-1&&(o=r.length);for(let s=o-1;s>=0;--s)if(!t.resolveDisabled(r[s],s,r))return s;return l}case 2:{for(let s=o+1;s<r.length;++s)if(!t.resolveDisabled(r[s],s,r))return s;return l}case 3:{for(let s=r.length-1;s>=0;--s)if(!t.resolveDisabled(r[s],s,r))return s;return l}case 4:{for(let s=0;s<r.length;++s)if(t.resolveId(r[s],s,r)===e.id)return s;return l}case 5:return null;default:wt(e)}}let fe=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function pe(e){var t,r;let l=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return l;let s=!1;for(let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),s=!0;let n=s?(r=o.innerText)!=null?r:"":l;return fe.test(n)&&(n=n.replace(fe,"")),n}function Et(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let l=r.split(" ").map(o=>{let s=document.getElementById(o);if(s){let n=s.getAttribute("aria-label");return typeof n=="string"?n.trim():pe(s).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return pe(e).trim()}function It(e){let t=I(""),r=I("");return()=>{let l=_(e);if(!l)return"";let o=l.innerText;if(t.value===o)return r.value;let s=Et(l).trim().toLowerCase();return t.value=o,r.value=s,s}}var kt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(kt||{}),$t=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))($t||{});function Pt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let we=Symbol("MenuContext");function q(e){let t=J(we,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,q),r}return t}let Se=K({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let l=I(1),o=I(null),s=I(null),n=I([]),i=I(""),v=I(null),m=I(1);function b(a=d=>d){let d=v.value!==null?n.value[v.value]:null,u=ye(a(n.value.slice()),w=>_(w.dataRef.domRef)),p=d?u.indexOf(d):null;return p===-1&&(p=null),{items:u,activeItemIndex:p}}let g={menuState:l,buttonRef:o,itemsRef:s,items:n,searchQuery:i,activeItemIndex:v,activationTrigger:m,closeMenu:()=>{l.value=1,v.value=null},openMenu:()=>l.value=0,goToItem(a,d,u){let p=b(),w=St(a===A.Specific?{focus:A.Specific,id:d}:{focus:a},{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.disabled});i.value="",v.value=w,m.value=u??1,n.value=p.items},search(a){let d=i.value!==""?0:1;i.value+=a.toLowerCase();let u=(v.value!==null?n.value.slice(v.value+d).concat(n.value.slice(0,v.value+d)):n.value).find(w=>w.dataRef.textValue.startsWith(i.value)&&!w.dataRef.disabled),p=u?n.value.indexOf(u):-1;p===-1||p===v.value||(v.value=p,m.value=1)},clearSearch(){i.value=""},registerItem(a,d){let u=b(p=>[...p,{id:a,dataRef:d}]);n.value=u.items,v.value=u.activeItemIndex,m.value=1},unregisterItem(a){let d=b(u=>{let p=u.findIndex(w=>w.id===a);return p!==-1&&u.splice(p,1),u});n.value=d.items,v.value=d.activeItemIndex,m.value=1}};return pt([o,s],(a,d)=>{var u;g.closeMenu(),se(d,re.Loose)||(a.preventDefault(),(u=_(o))==null||u.focus())},$(()=>l.value===0)),ve(we,g),_t($(()=>z(l.value,{0:R.Open,1:R.Closed}))),()=>{let a={open:l.value===0,close:g.closeMenu};return W({ourProps:{},theirProps:e,slot:a,slots:t,attrs:r,name:"Menu"})}}}),Ee=K({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:l}){var o;let s=(o=e.id)!=null?o:`headlessui-menu-button-${ee()}`,n=q("MenuButton");l({el:n.buttonRef,$el:n.buttonRef});function i(g){switch(g.key){case E.Space:case E.Enter:case E.ArrowDown:g.preventDefault(),g.stopPropagation(),n.openMenu(),O(()=>{var a;(a=_(n.itemsRef))==null||a.focus({preventScroll:!0}),n.goToItem(A.First)});break;case E.ArrowUp:g.preventDefault(),g.stopPropagation(),n.openMenu(),O(()=>{var a;(a=_(n.itemsRef))==null||a.focus({preventScroll:!0}),n.goToItem(A.Last)});break}}function v(g){switch(g.key){case E.Space:g.preventDefault();break}}function m(g){e.disabled||(n.menuState.value===0?(n.closeMenu(),O(()=>{var a;return(a=_(n.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(g.preventDefault(),n.openMenu(),Pt(()=>{var a;return(a=_(n.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let b=vt($(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var g;let a={open:n.menuState.value===0},{...d}=e,u={ref:n.buttonRef,id:s,type:b.value,"aria-haspopup":"menu","aria-controls":(g=_(n.itemsRef))==null?void 0:g.id,"aria-expanded":n.menuState.value===0,onKeydown:i,onKeyup:v,onClick:m};return W({ourProps:u,theirProps:d,slot:a,attrs:t,slots:r,name:"MenuButton"})}}}),Ie=K({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:l}){var o;let s=(o=e.id)!=null?o:`headlessui-menu-items-${ee()}`,n=q("MenuItems"),i=I(null);l({el:n.itemsRef,$el:n.itemsRef}),gt({container:$(()=>_(n.itemsRef)),enabled:$(()=>n.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function v(a){var d;switch(i.value&&clearTimeout(i.value),a.key){case E.Space:if(n.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),n.search(a.key);case E.Enter:if(a.preventDefault(),a.stopPropagation(),n.activeItemIndex.value!==null){let u=n.items.value[n.activeItemIndex.value];(d=_(u.dataRef.domRef))==null||d.click()}n.closeMenu(),he(_(n.buttonRef));break;case E.ArrowDown:return a.preventDefault(),a.stopPropagation(),n.goToItem(A.Next);case E.ArrowUp:return a.preventDefault(),a.stopPropagation(),n.goToItem(A.Previous);case E.Home:case E.PageUp:return a.preventDefault(),a.stopPropagation(),n.goToItem(A.First);case E.End:case E.PageDown:return a.preventDefault(),a.stopPropagation(),n.goToItem(A.Last);case E.Escape:a.preventDefault(),a.stopPropagation(),n.closeMenu(),O(()=>{var u;return(u=_(n.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case E.Tab:a.preventDefault(),a.stopPropagation(),n.closeMenu(),O(()=>ot(_(n.buttonRef),a.shiftKey?Q.Previous:Q.Next));break;default:a.key.length===1&&(n.search(a.key),i.value=setTimeout(()=>n.clearSearch(),350));break}}function m(a){switch(a.key){case E.Space:a.preventDefault();break}}let b=xt(),g=$(()=>b!==null?(b.value&R.Open)===R.Open:n.menuState.value===0);return()=>{var a,d;let u={open:n.menuState.value===0},{...p}=e,w={"aria-activedescendant":n.activeItemIndex.value===null||(a=n.items.value[n.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(d=_(n.buttonRef))==null?void 0:d.id,id:s,onKeydown:v,onKeyup:m,role:"menu",tabIndex:0,ref:n.itemsRef};return W({ourProps:w,theirProps:p,slot:u,attrs:t,slots:r,features:Z.RenderStrategy|Z.Static,visible:g.value,name:"MenuItems"})}}}),N=K({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:r,expose:l}){var o;let s=(o=e.id)!=null?o:`headlessui-menu-item-${ee()}`,n=q("MenuItem"),i=I(null);l({el:i,$el:i});let v=$(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===s:!1),m=It(i),b=$(()=>({disabled:e.disabled,get textValue(){return m()},domRef:i}));Y(()=>n.registerItem(s,b)),Ae(()=>n.unregisterItem(s)),L(()=>{n.menuState.value===0&&v.value&&n.activationTrigger.value!==0&&O(()=>{var c,k;return(k=(c=_(i))==null?void 0:c.scrollIntoView)==null?void 0:k.call(c,{block:"nearest"})})});function g(c){if(e.disabled)return c.preventDefault();n.closeMenu(),he(_(n.buttonRef))}function a(){if(e.disabled)return n.goToItem(A.Nothing);n.goToItem(A.Specific,s)}let d=mt();function u(c){d.update(c)}function p(c){d.wasMoved(c)&&(e.disabled||v.value||n.goToItem(A.Specific,s,0))}function w(c){d.wasMoved(c)&&(e.disabled||v.value&&n.goToItem(A.Nothing))}return()=>{let{disabled:c}=e,k={active:v.value,disabled:c,close:n.closeMenu},{...h}=e;return W({ourProps:{id:s,ref:i,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,disabled:void 0,onClick:g,onFocus:a,onPointerenter:u,onMouseenter:u,onPointermove:p,onMousemove:p,onPointerleave:w,onMouseleave:w},theirProps:{...r,...h},slot:k,attrs:r,slots:t,name:"MenuItem"})}}});const At={class:"py-1"},Dt={__name:"TableDropdown",props:{index:{type:Number,default:0},length:{type:Number,default:0},bottomAlign:{type:String,default:"2"},align:{type:String,default:"right"},menuItemClasses:{type:String,default:""},menuButtonClasses:{type:String,default:""},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white","dark:bg-gray-700"]}},setup(e){const t=e,r=$(()=>"w-"+t.width.toString()),l=$(()=>"right-10 -top-2"),o=$(()=>l.value);return $(()=>t.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":t.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),(s,n)=>(F(),H(S(Se),{as:"div",class:"relative inline-block text-left"},{default:x(()=>[f("div",null,[y(S(Ee),{class:P(["inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",[t.menuButtonClasses]])},{default:x(()=>[ae(s.$slots,"trigger")]),_:3},8,["class"])]),y(me,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:x(()=>[y(S(Ie),{class:P(["absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",[o.value,r.value]])},{default:x(()=>[f("div",At,[ae(s.$slots,"content")])]),_:3},8,["class"])]),_:3})]),_:3}))}},Ft={class:"flex justify-end"},Mt={scope:"col",class:"pl-4 pr-2 py-3"},Ot=f("th",{scope:"col",class:"px-6 py-3"},null,-1),Tt=f("th",{scope:"col",class:"px-6 py-3"}," Name ",-1),Ct=f("th",{scope:"col",class:"px-6 py-3"}," Address ",-1),Nt=f("th",{scope:"col",class:"px-6 py-3"}," GLA (SQFT) ",-1),Rt=f("th",{scope:"col",class:"px-6 py-3"}," Start Date ",-1),Lt=f("th",{scope:"col",class:"px-6 py-3"}," End Date ",-1),jt=f("th",{scope:"col",class:"px-6 py-3"}," Rent / Sq Ft ",-1),Bt={scope:"col",class:"px-6 py-3 font-normal normal-case"},Ut={class:"py-1"},Vt={scope:"row",class:"pl-4 pr-2 py-4 space-x-2"},Ht={scope:"row",class:"px-6 py-4 space-x-2"},Kt={class:"relative mr-1.5 flex h-2.5 w-2.5"},zt={class:"whitespace-nowrap"},Wt={class:"px-6 py-4 text-gray-900"},qt=["href"],Gt={class:"px-6 py-4 dark:text-zinc-100/80"},Xt={class:"px-6 py-4 dark:text-zinc-100/80"},Qt={class:"px-6 py-4 dark:text-zinc-100/80"},Zt={class:"px-6 py-4 space-x-2"},Jt={class:"px-6 py-4 space-x-2"},Yt={class:"px-6 py-4"},en=["href"],tn=f("span",null,"Download",-1),nn=["onClick"],rn=f("span",null,"Restore",-1),sn=f("span",null,"Archive",-1),ln={class:"p-6"},an=f("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this lease? ",-1),on={class:"mt-6 flex justify-end"},kn={__name:"Show",props:{asset:Object,associates:Array,leases:Array},setup(e){const t=De(),r=$(()=>t.props.auth.user),l=e,o=I(l.leases);Fe(l.leases,(c,k)=>{console.log("props.leases has changed:",c)},{deep:!0});const{getFileStatusClass:s}=je();Me({});const n=I(null),i=I(!1),v=c=>{i.value=!0,n.value=c},m=()=>{i.value=!1},b=()=>{if(n.value){m();try{T.delete(route("assets.leases.destroy",[l.asset,n.value.id]),{preserveScroll:!0})}catch(c){B.error(c),console.log(c)}}},g=c=>{try{T.post(route("assets.leases.archive",[l.asset,c]),{},{preserveScroll:!0})}catch(k){B.error(k),console.log(k)}},a=c=>{try{T.post(route("assets.leases.restore",[l.asset,c]),{},{preserveScroll:!0})}catch(k){B.error(k),console.log(k)}},d=Ve(He);let u="";Ke({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf"],server:{process:{url:route("assets.leases.store",l.asset),headers:{Accept:"application/json","X-CSRF-TOKEN":t.props.csrf},onsuccess:c=>{console.log("on success"),console.log(c)},onerror:c=>{console.log("on error"),u=JSON.parse(c)}}},labelFileProcessingError:c=>(console.log(c),console.log(u),u.errors&&u.errors.lease_document?u.errors.lease_document.join(" "):u.message)});const p=(c,k)=>{T.reload({only:["leases"]})},w=()=>{};return Y(()=>{Echo.private(`tenant-global-channel.${t.props.tenant_id}`).listen("LeaseFileDeleted",c=>{B.success(c.lease_deleted.og_filename+": Deleted successfully"),T.reload({preserveScroll:!0})}).listen("FileStatusUpdate",c=>{T.reload({preserveScroll:!0})})}),Oe(()=>{r.value&&Echo.leave(`tenant-global-channel.${t.props.tenant_id}`)}),(c,k)=>(F(),M(V,null,[y(S(Te),{title:"Asset"}),y(Le,null,{header:x(()=>[j(" Asset - "+D(e.asset.name),1)]),default:x(()=>[f("div",Ft,[y(Be,{href:c.route("assets.edit",e.asset)},{default:x(()=>[j("Edit Asset")]),_:1},8,["href"])]),y(ze,{asset:e.asset},null,8,["asset"]),y(We,{associates:e.associates},null,8,["associates"]),y(S(d),{name:"lease_document",onInit:w,onProcessfile:p,ref:"pond","class-name":"my-file-upload","label-idle":"Lease Drop or <span class='filepond--label-action'>Browse</span>"},null,512),y(Ue,null,{head:x(()=>[f("tr",null,[f("th",Mt,[y(ie)]),Ot,Tt,Ct,Nt,Rt,Lt,jt,f("th",Bt,[y(S(Se),{as:"div",class:"relative inline-block text-left"},{default:x(()=>[f("div",null,[y(S(Ee),{class:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},{default:x(()=>[y(C,{class:"bx-filter-alt text-[20px] text-gray-500"})]),_:1})]),y(me,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:x(()=>[y(S(Ie),{class:"absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:x(()=>[f("div",Ut,[y(S(N),null,{default:x(({active:h})=>[f("a",{href:"#",class:P([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Filters...",2)]),_:1})])]),_:1})]),_:1})]),_:1})])])]),body:x(()=>[(F(!0),M(V,null,Ce(l.leases,(h,ke)=>(F(),M("tr",{key:h.id,class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},[f("td",Vt,[y(ie)]),f("th",Ht,[f("span",{class:P(["inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",S(s)(h.status)])},[f("span",Kt,[["Ready","Failed","Archived"].includes(h.status)?(F(),M("span",{key:1,class:P(["relative inline-flex h-2.5 w-2.5 rounded-full",S(s)(h.status,"PROCESS_CLASSES")])},null,2)):(F(),M(V,{key:0},[f("span",{class:P(["absolute inline-flex h-full w-full animate-ping rounded-full",S(s)(h.status,"PROCESS_CLASSES")])},null,2),f("span",{class:P(["relative inline-flex h-2.5 w-2.5 rounded-full",S(s)(h.status,"PROCESS_CLASSES")])},null,2)],64))]),f("span",zt,D(h.status)+" "+D(h.status_progress),1)],2)]),f("td",Wt,[h.tenant_name?(F(),H(S(Ne),{key:0,href:c.route("assets.leases.show",[h.asset_id,h.id])},{default:x(()=>[f("strong",null,D(h.tenant_name),1)]),_:2},1032,["href"])):(F(),M("a",{key:1,href:h.filename,type:"external",target:"_blank",class:"text-gray-500"},D(h.og_filename),9,qt))]),f("td",Gt,D(h.address??"--"),1),f("td",Xt,D(h.gla??"--"),1),f("td",Qt,D(h.start_date??"--"),1),f("td",Zt,D(h.end_date??"--"),1),f("td",Jt,D(c.filters.formatMoney(h.rent_per_sqft)??"--"),1),f("td",Yt,[y(Dt,{index:ke,length:o.value.length,width:"32"},{trigger:x(()=>[y(C,{class:"bx-dots-vertical-rounded text-gray-500"})]),content:x(()=>[y(S(N),null,{default:x(()=>[f("a",{href:h.filename,target:"_blank",class:P(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"])},[y(C,{class:"bx-cloud-download text-gray-500"}),tn],8,en)]),_:2},1024),h.is_archived?(F(),H(S(N),{key:0},{default:x(()=>[f("a",{href:"#",class:P(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"]),onClick:le=>a(h)},[y(C,{class:"bx-box text-gray-500"}),rn],8,nn)]),_:2},1024)):h.status=="Ready"?(F(),H(S(N),{key:1},{default:x(()=>[y(oe,{class:P(["text-gray-700","flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","hover:bg-gray-100","hover:text-gray-900","text-left"]),onClick:le=>g(h)},{default:x(()=>[y(C,{class:"bx-box text-gray-500"}),sn]),_:2},1032,["onClick"])]),_:2},1024)):Re("",!0),y(S(N),{disabled:h.is_deleting},{default:x(()=>[y(oe,{class:P(["flex","items-center","justify-start","block","px-4","py-2","space-x-2","text-sm","w-full","text-left",h.is_deleting?"text-red-200 cursor-default":"text-red-700 hover:bg-gray-100"]),onClick:le=>v(h)},{default:x(()=>[y(C,{class:P(["bx-trash",h.is_deleting?"text-red-200":"text-red-500"])},null,8,["class"]),f("span",null,D(h.is_deleting?"Deleting...":"Delete"),1)]),_:2},1032,["class","onClick"])]),_:2},1032,["disabled"])]),_:2},1032,["index","length"])])]))),128))]),_:1}),y(qe,{show:i.value,onClose:m},{default:x(()=>[f("div",ln,[an,f("div",on,[y(Ge,{onClick:m},{default:x(()=>[j(" Cancel ")]),_:1}),y(Xe,{class:"ml-3",onClick:k[0]||(k[0]=h=>b())},{default:x(()=>[j(" Delete ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{kn as default};
