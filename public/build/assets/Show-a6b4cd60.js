import{B as L,U as H,z as b,D as x,o as m,d as g,F as q,g as C,a as e,c as y,A as S,t as c,e as w,b as p,w as d,p as M,s as $,C as z,E as U,Q as V,h as Q,j as G,O as F,l as J,u as v,Z as X,f as I,n as E,G as Z,H as W}from"./app-ca0a0686.js";import{_ as Y,f as ee}from"./AuthenticatedLayout-3c153617.js";import{_ as k}from"./PrimaryLink-f3174127.js";import{_ as K}from"./Table-5d9a0628.js";import{s as te,a as ae,b as D}from"./tabpanel.esm-ed504d8d.js";import{s as se}from"./index.esm-773d706e.js";import{R as ie,s as j}from"./ripple.esm-9efc9da9.js";import{b as N,_ as ne,a as oe}from"./BoxIcon-2b4d9691.js";import{V as re,p as de,s as ce}from"./filepond.min-7b228763.js";/* empty css                */import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import"./toast-f7fcb044.js";import"./DropdownLink-ce7b4d01.js";import"./index-907ac9d8.js";import"./ToastList-3c4cef95.js";var ue={root:"p-accordion p-component",tab:{root:function(a){var s=a.instance,i=a.index;return["p-accordion-tab",{"p-accordion-tab-active":s.isTabActive(i)}]},header:function(a){var s=a.instance,i=a.tab,l=a.index;return["p-accordion-header",{"p-highlight":s.isTabActive(l),"p-disabled":s.getTabProp(i,"disabled")}]},headerAction:"p-accordion-header-link p-accordion-header-action",headerIcon:"p-accordion-toggle-icon",headerTitle:"p-accordion-header-text",toggleableContent:"p-toggleable-content",content:"p-accordion-content"}},pe=L.extend({name:"accordion",classes:ue}),he={name:"BaseAccordion",extends:j,props:{multiple:{type:Boolean,default:!1},activeIndex:{type:[Number,Array],default:null},lazy:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:pe,provide:function(){return{$parentInstance:this}}},B={name:"Accordion",extends:he,inheritAttrs:!1,emits:["update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex}},watch:{"$attrs.id":function(a){this.id=a||H()},activeIndex:function(a){this.d_activeIndex=a}},mounted:function(){this.id=this.id||H()},methods:{isAccordionTab:function(a){return a.type.name==="AccordionTab"},isTabActive:function(a){return this.multiple?this.d_activeIndex&&this.d_activeIndex.includes(a):this.d_activeIndex===a},getTabProp:function(a,s){return a.props?a.props[s]:void 0},getKey:function(a,s){return this.getTabProp(a,"header")||s},getTabHeaderActionId:function(a){return"".concat(this.id,"_").concat(a,"_header_action")},getTabContentId:function(a){return"".concat(this.id,"_").concat(a,"_content")},getTabPT:function(a,s,i){var l=this.tabs.length,o={props:a.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:i,count:l,first:i===0,last:i===l-1,active:this.isTabActive(i)}};return b(this.ptm("tab.".concat(s),{tab:o}),this.ptm("accordiontab.".concat(s),{accordiontab:o}),this.ptm("accordiontab.".concat(s),o),this.ptmo(this.getTabProp(a,"pt"),s,o))},onTabClick:function(a,s,i){this.changeActiveIndex(a,s,i),this.$emit("tab-click",{originalEvent:a,index:i})},onTabKeyDown:function(a,s,i){switch(a.code){case"ArrowDown":this.onTabArrowDownKey(a);break;case"ArrowUp":this.onTabArrowUpKey(a);break;case"Home":this.onTabHomeKey(a);break;case"End":this.onTabEndKey(a);break;case"Enter":case"NumpadEnter":case"Space":this.onTabEnterKey(a,s,i);break}},onTabArrowDownKey:function(a){var s=this.findNextHeaderAction(a.target.parentElement.parentElement);s?this.changeFocusedTab(a,s):this.onTabHomeKey(a),a.preventDefault()},onTabArrowUpKey:function(a){var s=this.findPrevHeaderAction(a.target.parentElement.parentElement);s?this.changeFocusedTab(a,s):this.onTabEndKey(a),a.preventDefault()},onTabHomeKey:function(a){var s=this.findFirstHeaderAction();this.changeFocusedTab(a,s),a.preventDefault()},onTabEndKey:function(a){var s=this.findLastHeaderAction();this.changeFocusedTab(a,s),a.preventDefault()},onTabEnterKey:function(a,s,i){this.changeActiveIndex(a,s,i),a.preventDefault()},findNextHeaderAction:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=s?a:a.nextElementSibling,l=x.findSingle(i,'[data-pc-section="header"]');return l?x.getAttribute(l,"data-p-disabled")?this.findNextHeaderAction(l.parentElement):x.findSingle(l,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=s?a:a.previousElementSibling,l=x.findSingle(i,'[data-pc-section="header"]');return l?x.getAttribute(l,"data-p-disabled")?this.findPrevHeaderAction(l.parentElement):x.findSingle(l,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$el.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$el.lastElementChild,!0)},changeActiveIndex:function(a,s,i){if(!this.getTabProp(s,"disabled")){var l=this.isTabActive(i),o=l?"tab-close":"tab-open";this.multiple?l?this.d_activeIndex=this.d_activeIndex.filter(function(r){return r!==i}):this.d_activeIndex?this.d_activeIndex.push(i):this.d_activeIndex=[i]:this.d_activeIndex=this.d_activeIndex===i?null:i,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit(o,{originalEvent:a,index:i})}},changeFocusedTab:function(a,s){if(s&&(x.focus(s),this.selectOnFocus)){var i=parseInt(s.parentElement.parentElement.dataset.pcIndex,10),l=this.tabs[i];this.changeActiveIndex(a,l,i)}}},computed:{tabs:function(){var a=this;return this.$slots.default().reduce(function(s,i){return a.isAccordionTab(i)?s.push(i):i.children&&i.children instanceof Array&&i.children.forEach(function(l){a.isAccordionTab(l)&&s.push(l)}),s},[])}},components:{ChevronDownIcon:se,ChevronRightIcon:te},directives:{ripple:ie}};function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P(t)}function R(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),s.push.apply(s,i)}return s}function T(t){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?R(Object(s),!0).forEach(function(i){me(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function me(t,a,s){return a=ve(a),a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}function ve(t){var a=fe(t,"string");return P(a)=="symbol"?a:String(a)}function fe(t,a){if(P(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,a||"default");if(P(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}var ge=["data-pc-index","data-p-active"],be=["data-p-highlight","data-p-disabled"],_e=["id","tabindex","aria-disabled","aria-expanded","aria-controls","onClick","onKeydown"],xe=["id","aria-labelledby"];function ye(t,a,s,i,l,o){return m(),g("div",b({class:t.cx("root")},t.ptmi("root")),[(m(!0),g(q,null,C(o.tabs,function(r,u){return m(),g("div",b({key:o.getKey(r,u),class:t.cx("tab.root",{tab:r,index:u})},o.getTabPT(r,"root",u),{"data-pc-name":"accordiontab","data-pc-index":u,"data-p-active":o.isTabActive(u)}),[e("div",b({style:o.getTabProp(r,"headerStyle"),class:[t.cx("tab.header",{tab:r,index:u}),o.getTabProp(r,"headerClass")]},T(T({},o.getTabProp(r,"headerProps")),o.getTabPT(r,"header",u)),{"data-p-highlight":o.isTabActive(u),"data-p-disabled":o.getTabProp(r,"disabled")}),[e("a",b({id:o.getTabHeaderActionId(u),class:t.cx("tab.headerAction"),tabindex:o.getTabProp(r,"disabled")?-1:t.tabindex,role:"button","aria-disabled":o.getTabProp(r,"disabled"),"aria-expanded":o.isTabActive(u),"aria-controls":o.getTabContentId(u),onClick:function(A){return o.onTabClick(A,r,u)},onKeydown:function(A){return o.onTabKeyDown(A,r,u)}},T(T({},o.getTabProp(r,"headeractionprops")),o.getTabPT(r,"headeraction",u))),[r.children&&r.children.headericon?(m(),y(S(r.children.headericon),{key:0,isTabActive:o.isTabActive(u),active:o.isTabActive(u),index:u},null,8,["isTabActive","active","index"])):o.isTabActive(u)?(m(),y(S(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),b({key:1,class:[t.cx("tab.headerIcon"),t.collapseIcon],"aria-hidden":"true"},o.getTabPT(r,"headericon",u)),null,16,["class"])):(m(),y(S(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronRightIcon"),b({key:2,class:[t.cx("tab.headerIcon"),t.expandIcon],"aria-hidden":"true"},o.getTabPT(r,"headericon",u)),null,16,["class"])),r.props&&r.props.header?(m(),g("span",b({key:3,class:t.cx("tab.headerTitle")},o.getTabPT(r,"headertitle",u)),c(r.props.header),17)):w("",!0),r.children&&r.children.header?(m(),y(S(r.children.header),{key:4})):w("",!0)],16,_e)],16,be),p(z,b({name:"p-toggleable-content"},o.getTabPT(r,"transition",u)),{default:d(function(){return[!t.lazy||o.isTabActive(u)?M((m(),g("div",b({key:0,id:o.getTabContentId(u),style:o.getTabProp(r,"contentStyle"),class:[t.cx("tab.toggleableContent"),o.getTabProp(r,"contentClass")],role:"region","aria-labelledby":o.getTabHeaderActionId(u)},T(T({},o.getTabProp(r,"contentProps")),o.getTabPT(r,"toggleablecontent",u))),[e("div",b({class:t.cx("tab.content")},o.getTabPT(r,"content",u)),[(m(),y(S(r)))],16)],16,xe)),[[$,t.lazy?!0:o.isTabActive(u)]]):w("",!0)]}),_:2},1040)],16,ge)}),128))],16)}B.render=ye;var Te={},qe={name:"BaseAccordionTab",extends:j,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Te,provide:function(){return{$parentInstance:this}}},_={name:"AccordionTab",extends:qe,inheritAttrs:!1};function Ae(t,a,s,i,l,o){return U(t.$slots,"default")}_.render=Ae;const n=t=>(Z("data-v-239f94a8"),t=t(),W(),t),Se=n(()=>e("div",{class:"flex justify-start mb-4 space-x-4"},null,-1)),we={class:"grid grid-cols-12 gap-4"},Pe={class:"col-span-6"},Ie={class:"mb-8"},Ee={class:"text-indigo-600"},Ce={class:"text-gray-500"},De={class:"col-span-6 flex flex-col"},Oe={class:"ml-auto mt-4"},He={class:"col-span-6 mt-2"},Fe=n(()=>e("div",{class:"flex align-items-center gap-2"},[e("h5",{class:"font-bold white-space-nowrap"},"Current Lease")],-1)),ke={class:"grid grid-cols-12 gap-6"},Ke={class:"col-span-6 rounded-lg shadow-md border p-4"},Ne=n(()=>e("h5",{class:"text-indigo-500"},"Basic Terms",-1)),Re={class:"p-2 bg-white"},je={class:"grid grid-cols-2 gap-x-8 gap-y-4"},Be=n(()=>e("div",{class:"font-bold text-gray-900"},"Tenant",-1)),Le={class:"text-sm text-gray-600"},Me=n(()=>e("div",{class:"font-bold text-gray-900"},"Landlord",-1)),$e={class:"text-sm text-gray-600"},ze=n(()=>e("div",{class:"font-bold text-gray-600"},"Premise Address",-1)),Ue={class:"text-sm text-gray-600"},Ve=n(()=>e("div",{class:"font-bold text-gray-600"},"Building Address",-1)),Qe={class:"text-sm text-gray-600"},Ge=n(()=>e("div",{class:"font-bold text-gray-600"},"Rentable Sq. Ft.",-1)),Je={class:"text-sm text-gray-600"},Xe={class:"grid grid-cols-2 gap-x-8 gap-y-4"},Ze=n(()=>e("div",{class:"font-bold text-gray-600"},"Term",-1)),We={class:"text-sm text-gray-600"},Ye=n(()=>e("div",{class:"font-bold text-gray-600"},"Abatement",-1)),et={class:"text-sm text-gray-600"},tt=n(()=>e("div",{class:"font-bold text-gray-600"},"Pro Rata Share",-1)),at={class:"text-sm text-gray-600"},st={class:"grid grid-cols-2 gap-x-8 gap-y-4"},it=n(()=>e("div",{class:"font-bold text-gray-600"},"Exp. Date",-1)),nt={class:"text-sm text-gray-600"},ot=n(()=>e("div",{class:"font-bold text-gray-600"},"Sec. Deposit",-1)),rt={class:"text-sm text-gray-600"},dt={class:"col-span-6 rounded-lg shadow-md border p-4"},ct=n(()=>e("h5",{class:"text-indigo-500"},"Rent Schedule",-1)),lt={class:"p-2 bg-white"},ut=n(()=>e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"Start Date"),e("th",{scope:"col",class:"px-6 py-3"},"End Date"),e("th",{scope:"col",class:"px-6 py-3"},"Amount"),e("th",{scope:"col",class:"px-6 py-3"},"per SQFT")],-1)),pt={class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},ht={scope:"row",class:"px-6 py-4 space-x-2"},mt={class:"px-6 py-4 text-gray-900"},vt={class:"px-6 py-4 text-gray-900"},ft={class:"px-6 py-4 text-gray-900"},gt=n(()=>e("div",{class:"flex align-items-center gap-2"},[e("span",{class:"font-bold white-space-nowrap"},"Original Lease Abstract")],-1)),bt={class:"grid grid-cols-12 gap-6"},_t={class:"col-span-6 rounded-lg shadow-md border p-6"},xt=n(()=>e("h5",null,"Basic Terms",-1)),yt={class:"p-4 bg-white"},Tt={class:"grid grid-cols-2 gap-x-8 gap-y-4"},qt=n(()=>e("div",{class:"font-bold text-gray-900"},"Tenant",-1)),At={class:"text-sm text-gray-600"},St=n(()=>e("div",{class:"font-bold text-gray-900"},"Landlord",-1)),wt={class:"text-xs text-gray-600"},Pt=n(()=>e("div",{class:"font-bold text-gray-600"},"Premises Address",-1)),It={class:"text-xs text-gray-600"},Et={class:"grid grid-cols-2 gap-x-8 gap-y-4"},Ct=n(()=>e("div",{class:"font-bold text-gray-600"},"Lease Term",-1)),Dt={class:"text-xs text-gray-600"},Ot=n(()=>e("div",{class:"font-bold text-gray-600"},"Expiration Date",-1)),Ht={class:"text-xs text-gray-600"},Ft=n(()=>e("div",{class:"font-bold text-gray-600"},"Rentable Sq. Ft.",-1)),kt={class:"text-xs text-gray-600"},Kt={class:"col-span-6 rounded-lg shadow-md border p-6"},Nt=n(()=>e("h5",null,"Rent Schedule",-1)),Rt={class:"p-4 bg-white"},jt=n(()=>e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"Start Date"),e("th",{scope:"col",class:"px-6 py-3"},"End Date"),e("th",{scope:"col",class:"px-6 py-3"},"Amount"),e("th",{scope:"col",class:"px-6 py-3"},"per SQFT")],-1)),Bt={class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},Lt={scope:"row",class:"px-6 py-4 space-x-2"},Mt={class:"px-6 py-4 text-gray-900"},$t={class:"px-6 py-4 text-gray-900"},zt={class:"px-6 py-4 text-gray-900"},Ut={class:"flex align-items-center gap-2"},Vt={class:"inline-flex items-center text-xs font-medium"},Qt={class:"relative flex h-2.5 w-2.5"},Gt={class:"font-bold white-space-nowrap"},Jt=n(()=>e("small",{class:"text-gray-400"},"5/25/23",-1)),Xt={class:"m-0"},Zt=n(()=>e("h4",null,"Processing...",-1)),Wt={class:"m-6 mt-0 p-4 pt-0 rounded-lg shadow-md border"},Yt=n(()=>e("h5",{class:"text-indigo-600"},"Option to Extend",-1)),ea=n(()=>e("p",{class:"ml-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),ta=n(()=>e("h5",{class:"text-indigo-600"},"Right of First Offer",-1)),aa=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),sa=n(()=>e("h5",{class:"text-indigo-600"},"Right of First Refusal",-1)),ia=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),na=n(()=>e("h5",{class:"text-indigo-600"},"TI Allowance",-1)),oa=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),ra=n(()=>e("h5",{class:"text-indigo-600"},"Insurance Requirements",-1)),da=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),ca=n(()=>e("h5",{class:"text-indigo-600"},"Tenant Maintenance",-1)),la=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),ua=n(()=>e("h5",{class:"text-indigo-600"},"Landlord Maintenance",-1)),pa=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),ha=n(()=>e("h5",{class:"text-indigo-600"},"Assignment & Subletting",-1)),ma=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),va=n(()=>e("h5",{class:"text-indigo-600"},"Holding Over",-1)),fa=n(()=>e("p",{class:"m-2"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),ga={class:"json-container"},ba=n(()=>e("h3",null,"Raw Extracted Data",-1)),_a=n(()=>e("h4",null,"Basic Extracted Data",-1)),xa=n(()=>e("h4",null,"Detailed Extracted Data",-1)),ya={__name:"Show",props:{asset:Object,associates:Array,lease:Object},setup(t){const a=V(),s=Q(()=>a.props.auth.user),i=t,{getFileStatusClass:l}=ee(),o=re(de);let r="";ce({credits:[],required:!0,allowMultiple:!1,allowRevert:!1,acceptedFileTypes:["application/pdf"],server:{process:{url:route("assets.leases.store-amendment",[i.asset,i.lease]),headers:{Accept:"application/json","X-CSRF-TOKEN":a.props.csrf},ondata:h=>(h.append("classification","lease_amendment"),h),onsuccess:h=>{console.log("on success"),console.log(h)},onerror:h=>{console.log("on error"),r=JSON.parse(h)}}},labelFileProcessingError:h=>(console.log(h),console.log(r),r.errors&&r.errors.lease_amendment?r.errors.lease_amendment.join(" "):r.message)});const u=(h,A)=>{console.log("on process file"),F.reload({only:["lease"]})};return G(()=>{Echo.private(`tenant-global-channel.${a.props.tenant_id}`).listen("FileStatusUpdate",h=>{F.reload({only:["lease"]})})}),J(()=>{s.value&&Echo.leave(`tenant-global-channel.${a.props.tenant_id}`)}),(h,A)=>(m(),g(q,null,[p(v(X),{title:"Asset"}),p(Y,null,{header:d(()=>[I(" Asset - "+c(t.asset.name),1)]),default:d(()=>[p(k,{href:h.route("assets.show",t.asset)},{default:d(()=>[p(N,{class:"bx-arrow-back mr-2"}),I("Leases ")]),_:1},8,["href"]),p(ne,{asset:t.asset},null,8,["asset"]),p(oe,{associates:t.associates},null,8,["associates"]),Se,e("div",we,[e("div",Pe,[e("div",Ie,[e("h2",Ee,c(t.lease.tenant),1),e("h5",Ce,c(t.lease.premise_address),1)])]),e("div",De,[p(v(o),{name:"lease_amendment",ref:"pond",onProcessfile:u,"class-name":"my-file-upload","label-idle":"Amendment Drop (One at a time) or <span class='filepond--label-action'>Browse</span>"},null,512),e("div",Oe,[p(k,{class:"bg-indigo-600",href:h.route("assets.leases.chats.index",[t.asset,t.lease])},{default:d(()=>[I(" Leasemate"),p(N,{class:"bx-comment-detail ml-2"})]),_:1},8,["href"])])])]),e("div",He,[p(v(ae),{scrollable:!0},{default:d(()=>[p(v(D),{class:"p-0"},{header:d(()=>[Fe]),default:d(()=>[e("div",ke,[e("div",Ke,[Ne,e("div",Re,[e("div",je,[e("div",null,[Be,e("div",Le,c(t.lease.tenant??"--"),1)]),e("div",null,[Me,e("div",$e,c(t.lease.landlord??"--"),1)]),e("div",null,[ze,e("div",Ue,c(t.lease.premise_address??"--"),1)]),e("div",null,[Ve,e("div",Qe,c(t.lease.building_address??"--"),1)]),e("div",null,[Ge,e("div",Je,c(h.filters.formatNumber(t.lease.rentable_sqft)??"--"),1)]),e("div",null,[e("div",Xe,[e("div",null,[Ze,e("div",We,c(t.lease.term?t.lease.term+" Months":"--"),1)]),e("div",null,[Ye,e("div",et,c(t.lease.abatement?t.lease.abatement+" Months":"--"),1)])])]),e("div",null,[tt,e("div",at,c(t.lease.pro_rata_share??"--"),1)]),e("div",null,[e("div",st,[e("div",null,[it,e("div",nt,c(t.lease.end_date??"--"),1)]),e("div",null,[ot,e("div",rt,c(h.filters.formatMoney(t.lease.security_deposit)??"--"),1)])])])])])]),e("div",dt,[ct,e("div",lt,[p(K,{class:"pb-0",data:t.lease.rent_schedule,columns:["Start Date","End Date","Amount","Frequency"]},{head:d(()=>[ut]),body:d(()=>[(m(!0),g(q,null,C(t.lease.rent_schedule,f=>(m(),g("tr",pt,[e("th",ht,c(f.start_date),1),e("td",mt,c(f.end_date),1),e("td",vt,c(h.filters.formatMoney(f.amount_total,0)),1),e("td",ft,c(h.filters.formatMoney(f.amount_per_square_foot)),1)]))),256))]),_:1},8,["data"])])])])]),_:1}),t.lease.amendments?(m(),y(v(D),{key:0},{header:d(()=>[gt]),default:d(()=>[e("div",bt,[e("div",_t,[xt,e("div",yt,[e("div",Tt,[e("div",null,[qt,e("div",At,c(t.lease.extracted_data.lessee_tenant??"--"),1)]),e("div",null,[St,e("div",wt,c(t.lease.extracted_data.lessor_landlord??"--"),1)]),e("div",null,[Pt,e("div",It,c(t.lease.extracted_data.premises_address??"--"),1)]),e("div",null,[e("div",Et,[e("div",null,[Ct,e("div",Dt,c(t.lease.extracted_data.lease_term?t.lease.extracted_data.lease_term+" Months":"--"),1)]),e("div",null,[Ot,e("div",Ht,c(t.lease.extracted_data.expiration_date??"--"),1)])])]),e("div",null,[Ft,e("div",kt,c(h.filters.formatNumber(t.lease.extracted_data.rentable_square_feet)??"--"),1)])])])]),e("div",Kt,[Nt,e("div",Rt,[p(K,{class:"mt-8",data:t.lease.extracted_data.rent_schedule,columns:["Start Date","End Date","Amount","Frequency"]},{head:d(()=>[jt]),body:d(()=>[(m(!0),g(q,null,C(t.lease.monthly_base_rent,f=>(m(),g("tr",Bt,[e("th",Lt,c(f.start_date),1),e("td",Mt,c(f.end_date),1),e("td",$t,c(h.filters.formatMoney(f.amount_total)),1),e("td",zt,c(h.filters.formatMoney(f.amount_per_square_foot)),1)]))),256))]),_:1},8,["data"])])])])]),_:1})):w("",!0),t.lease.documents?(m(!0),g(q,{key:1},C(t.lease.documents,(f,O)=>(m(),y(v(D),{key:O},{header:d(()=>[e("div",Ut,[e("span",Vt,[e("span",Qt,[["Ready","Failed","Archived"].includes(f.status)?(m(),g("span",{key:1,class:E(["relative inline-flex h-2.5 w-2.5 rounded-full",v(l)(f.status,"PROCESS_CLASSES")])},null,2)):(m(),g(q,{key:0},[e("span",{class:E(["absolute inline-flex h-full w-full animate-ping rounded-full",v(l)(f.status,"PROCESS_CLASSES")])},null,2),e("span",{class:E(["relative inline-flex h-2.5 w-2.5 rounded-full",v(l)(f.status,"PROCESS_CLASSES")])},null,2)],64))])]),e("span",Gt,[e("span",{class:E({"text-red-400":f.status==="Failed"})},[I(" Amendment #"+c(++O)+" ",1),Jt],2)])])]),default:d(()=>[e("p",Xt,[Zt,e("h5",null,c(f.uuid),1)])]),_:2},1024))),128)):w("",!0)]),_:1}),e("div",Wt,[p(v(B),{multiple:!0,activeIndex:[0]},{default:d(()=>[p(v(_),null,{header:d(()=>[Yt]),default:d(()=>[ea]),_:1}),p(v(_),null,{header:d(()=>[ta]),default:d(()=>[aa]),_:1}),p(v(_),null,{header:d(()=>[sa]),default:d(()=>[ia]),_:1}),p(v(_),null,{header:d(()=>[na]),default:d(()=>[oa]),_:1}),p(v(_),null,{header:d(()=>[ra]),default:d(()=>[da]),_:1}),p(v(_),null,{header:d(()=>[ca]),default:d(()=>[la]),_:1}),p(v(_),null,{header:d(()=>[ua]),default:d(()=>[pa]),_:1}),p(v(_),null,{header:d(()=>[ha]),default:d(()=>[ma]),_:1}),p(v(_),null,{header:d(()=>[va]),default:d(()=>[fa]),_:1})]),_:1})]),e("div",ga,[ba,_a,e("pre",null,c(t.lease.extracted_data??"--"),1),xa,e("pre",null,c(t.lease.detailed_extracted_data??"--"),1)])])]),_:1})],64))}},Na=le(ya,[["__scopeId","data-v-239f94a8"]]);export{Na as default};
