import{_ as g}from"./AuthenticatedLayout-6e5424e6.js";import{r as _,d as n,b as r,u as p,w as t,F as i,o as a,Z as v,f as o,a as e,g as w,O as C,t as f,c as h,M as $,e as x}from"./app-ae835724.js";import{_ as A}from"./PrimaryLink-d44cbf9c.js";import{_ as D}from"./DangerButton-04f05d70.js";import{_ as B}from"./Modal-3082fd65.js";import{_ as N}from"./SecondaryButton-532ef9ba.js";import{_ as R}from"./Button-6579ba9f.js";import{_ as V}from"./Table-c4ea6b56.js";import"./toast-d6a2e2f8.js";import"./DropdownLink-5d28af8a.js";import"./index-ee336fcd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-8a20bdb1.js";const E={class:"flex justify-end"},j=e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Role "),e("th",{scope:"col",class:"px-6 py-3"}," Permissions "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")],-1),z={class:"bg-white border-b border-gray-100 dark:bg-zinc-700 dark:border-zinc-600"},F={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},M={class:"px-6 py-4"},O={class:"badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20"},P={class:"px-6 py-4 space-x-2"},S={class:"p-6"},T=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this role? ",-1),I={class:"mt-6 flex justify-end"},se={__name:"Index",props:{roles:Array},setup(y){const c=_(!1),m=_(null),b=l=>{c.value=!0,m.value=l},k=()=>{d(),C.delete(route("roles.destroy",m.value),{preserveScroll:!0,onError:l=>{toast.error(l)}})},d=()=>{c.value=!1};return(l,u)=>(a(),n(i,null,[r(p(v),{title:"Users"}),r(g,null,{header:t(()=>[o(" Roles ")]),default:t(()=>[e("div",E,[r(A,{href:l.route("roles.create"),class:"mb-4"},{default:t(()=>[o("Create Role")]),_:1},8,["href"])]),r(V,null,{head:t(()=>[j]),body:t(()=>[(a(!0),n(i,null,w(y.roles,s=>(a(),n("tr",z,[e("th",F,f(s.name),1),e("td",M,[e("span",O,[s.name=="Admin"?(a(),n(i,{key:0},[o(" All Permissions ")],64)):(a(),n(i,{key:1},[o(f(s.permissions.length),1)],64))])]),e("td",P,[s.name!="Admin"?(a(),h(p($),{key:0,href:l.route("roles.edit",s),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:t(()=>[o("Edit")]),_:2},1032,["href"])):x("",!0),s.can_delete?(a(),h(R,{key:1,onClick:L=>b(s),class:"font-medium text-red-600 dark:text-blue-500 hover:underline"},{default:t(()=>[o("Delete")]),_:2},1032,["onClick"])):x("",!0)])]))),256))]),_:1}),r(B,{show:c.value,onClose:d},{default:t(()=>[e("div",S,[T,e("div",I,[r(N,{onClick:d},{default:t(()=>[o(" Cancel ")]),_:1}),r(D,{class:"ml-3",onClick:u[0]||(u[0]=s=>k())},{default:t(()=>[o(" Delete ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{se as default};
