import{o as r,c as $,w as o,p as v,u as i,v as E,d,n as _,K as R,h as B,r as S,x as T,i as j,j as z,O as y,k as N,b as a,F as k,Z as V,f,t as c,a as e,g as M}from"./app-fd9726d5.js";import{_ as q,f as I}from"./AuthenticatedLayout-56367cdf.js";import{_ as K}from"./PrimaryLink-59f0e7f4.js";import{T as U}from"./Table-d9c22ac1.js";import{V as G,p as J,s as Q}from"./filepond.min-0f3cefec.js";import{_ as X,a as Z}from"./Associates-6f513b94.js";import{_ as H}from"./Modal-574aac79.js";import{_ as W}from"./SecondaryButton-a184a174.js";import{_ as w}from"./DangerButton-941d101f.js";import{t as C}from"./toast-3f95e932.js";import"./DropdownLink-bb06399e.js";import"./ToastList-8ac26fb3.js";import"./_plugin-vue_export-helper-c27b6911.js";const Y={key:1,class:"inline-flex items-center px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-25 transition ease-in-out duration-150",target:"_blank",rel:"noopener noreferrer"},ee={__name:"SecondaryLink",props:{type:{type:String,default:"internal"}},setup(l){return(n,p)=>l.type=="internal"?(r(),$(i(E),{key:0,class:"inline-flex items-center px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-25 transition ease-in-out duration-150"},{default:o(()=>[v(n.$slots,"default")]),_:3})):(r(),d("a",Y,[v(n.$slots,"default")]))}},se={__name:"BoxIcon",props:{class:{type:String,default:"button"}},setup(l){return(n,p)=>(r(),d("i",{class:_(["bx text-[20px]",l.class])},null,2))}},te={class:"flex justify-end"},ae=e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}),e("th",{scope:"col",class:"px-6 py-3"}),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Address "),e("th",{scope:"col",class:"px-6 py-3"}," GLA (SQFT) "),e("th",{scope:"col",class:"px-6 py-3"}," Start Date "),e("th",{scope:"col",class:"px-6 py-3"}," End Date "),e("th",{scope:"col",class:"px-6 py-3"}," Rent / Sq Ft "),e("th")],-1),oe={scope:"row",class:"px-6 py-4 space-x-2"},re={class:"relative mr-1.5 flex h-2.5 w-2.5"},le=e("td",{class:"px-6 py-4 space-x-2"},null,-1),ne={class:"px-6 py-4 text-gray-900"},ce=["href"],ie={class:"px-6 py-4 dark:text-zinc-100/80"},de={class:"px-6 py-4 dark:text-zinc-100/80"},pe={class:"px-6 py-4 dark:text-zinc-100/80"},ue={class:"px-6 py-4 space-x-2"},fe={class:"px-6 py-4 space-x-2"},_e={class:"px-6 py-4 space-x-2 flex items-center"},me={class:"p-6"},he=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this lease? ",-1),ye={class:"mt-6 flex justify-end"},Oe={__name:"Show",props:{asset:Object,associates:Array,leases:Array},setup(l){const n=l,p=R(),F=B(()=>p.props.auth.user);S(n.leases),T(n.leases,(t,h)=>{console.log("props.leases has changed:",t)},{deep:!0});const{getFileStatusClass:m}=I();j({});const g=S(null),x=S(!1),A=t=>{x.value=!0,g.value=t},b=()=>{x.value=!1},L=()=>{if(g.value){b();try{y.delete(route("assets.leases.destroy",[n.asset,g.value.id]),{preserveScroll:!0,onSuccess:()=>{},onError:()=>{}})}catch(t){C.error(t),console.log(t)}}},D=G(J);let u="";Q({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf"],server:{process:{url:route("assets.leases.store",n.asset),headers:{Accept:"application/json","X-CSRF-TOKEN":p.props.csrf},onsuccess:t=>{console.log("on success"),console.log(t)},onerror:t=>{console.log("on error"),u=JSON.parse(t)}}},labelFileProcessingError:t=>(console.log(t),console.log(u),u.errors&&u.errors.lease_document?u.errors.lease_document.join(" "):u.message)});const O=(t,h)=>{y.reload({only:["leases"]})},P=()=>{};return z(()=>{Echo.private(`tenant-global-channel.${p.props.tenant_id}`).listen("LeaseFileDeleted",t=>{C.success(t.lease_deleted.og_filename+": Deleted successfully"),y.reload({preserveScroll:!0})}).listen("FileStatusUpdate",t=>{y.reload({preserveScroll:!0})})}),N(()=>{F.value&&Echo.leave(`tenant-global-channel.${p.props.tenant_id}`)}),(t,h)=>(r(),d(k,null,[a(i(V),{title:"Asset"}),a(q,null,{header:o(()=>[f(" Asset - "+c(l.asset.name),1)]),default:o(()=>[e("div",te,[a(K,{href:t.route("assets.edit",l.asset)},{default:o(()=>[f("Edit Asset")]),_:1},8,["href"])]),a(X,{asset:l.asset},null,8,["asset"]),a(Z,{associates:l.associates},null,8,["associates"]),a(i(D),{name:"lease_document",onInit:P,onProcessfile:O,ref:"pond","class-name":"my-file-upload","label-idle":"Lease Drop or <span class='filepond--label-action'>Browse</span>"},null,512),a(U,null,{head:o(()=>[ae]),body:o(()=>[(r(!0),d(k,null,M(n.leases,s=>(r(),d("tr",{key:s.id,class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},[e("th",oe,[e("span",{class:_(["inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",i(m)(s.status)])},[e("span",re,[["Ready","Failed"].includes(s.status)?(r(),d("span",{key:1,class:_(["relative inline-flex h-2.5 w-2.5 rounded-full",i(m)(s.status,"PROCESS_CLASSES")])},null,2)):(r(),d(k,{key:0},[e("span",{class:_(["absolute inline-flex h-full w-full animate-ping rounded-full",i(m)(s.status,"PROCESS_CLASSES")])},null,2),e("span",{class:_(["relative inline-flex h-2.5 w-2.5 rounded-full",i(m)(s.status,"PROCESS_CLASSES")])},null,2)],64))]),e("span",null,c(s.status),1)],2)]),le,e("td",ne,[s.tenant_name?(r(),$(i(E),{key:0,href:t.route("assets.leases.show",[s.asset_id,s.id])},{default:o(()=>[e("strong",null,c(s.tenant_name),1)]),_:2},1032,["href"])):(r(),d("a",{key:1,href:s.filename,target:"_blank",rel:"noopener noreferrer",class:"font-medium"},c(s.og_filename),9,ce))]),e("td",ie,c(s.address??"--"),1),e("td",de,c(s.gla??"--"),1),e("td",pe,c(s.start_date??"--"),1),e("td",ue,c(s.end_date??"--"),1),e("td",fe,c(t.filters.formatMoney(s.rent_per_sqft)??"--"),1),e("td",_e,[a(ee,{href:s.filename,type:"external"},{default:o(()=>[a(se,{class:"bx-cloud-download"})]),_:2},1032,["href"]),a(w,{href:t.route("assets.leases.edit",[s.asset_id,s.id]),class:"text-sm",onClick:ge=>A(s)},{default:o(()=>[f(" Delete ")]),_:2},1032,["href","onClick"])])]))),128))]),_:1}),a(H,{show:x.value,onClose:b},{default:o(()=>[e("div",me,[he,e("div",ye,[a(W,{onClick:b},{default:o(()=>[f(" Cancel ")]),_:1}),a(w,{class:"ml-3",onClick:h[0]||(h[0]=s=>L())},{default:o(()=>[f(" Delete ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{Oe as default};
