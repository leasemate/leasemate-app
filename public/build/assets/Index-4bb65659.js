import{u as h,E as d,_ as y,h as g,f as b}from"./AuthenticatedLayout-08c0f9ae.js";import{Q as k,r as w,j as N,l as z,o as s,d as o,b as n,u as i,w as p,F as u,O as S,Z as B,f as v,a as t,g as C,t as e,n as D}from"./app-2a8d0423.js";import{_ as F}from"./Pagination-a706cc8b.js";import"./toast-6f5ead66.js";import"./DropdownLink-5a3b7f04.js";import"./index-a73cbb6a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-1e141e9b.js";const M={class:"relative overflow-x-auto"},Y={class:"w-full text-sm text-left text-gray-500"},E=t("thead",{class:"text-sm text-gray-700 dark:text-gray-100 bg-gray-50 dark:bg-zinc-600"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Type "),t("th",{scope:"col",class:"px-6 py-3"}," File "),t("th",{scope:"col",class:"px-6 py-3"}," Status "),t("th",null,"Date")])],-1),O={class:"px-6 py-3.5 dark:text-zinc-100"},V={class:"px-6 py-3.5 dark:text-zinc-100"},j={class:"px-6 py-3.5 dark:text-zinc-100"},A={__name:"Index",props:{notifications:{type:Object}},setup(r){const{getFileStatusClass:f}=b(),m=k();w(m.props.auth.user);const _=h(),c=x=>{S.reload({only:["notifications"],onSuccess:l=>{_.count=l.props.notification_count}})};return N(()=>{d.on("new-notification",c)}),z(()=>{d.off("new-notification",c)}),(x,l)=>(s(),o(u,null,[n(i(B),{title:"Notifications"}),n(y,null,{header:p(()=>[v(" Notifications ")]),default:p(()=>[t("div",M,[t("table",Y,[E,t("tbody",null,[(s(!0),o(u,null,C(r.notifications.data,a=>(s(),o("tr",{key:a.id,class:"bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600"},[t("td",O,e(a.data.notification_type_name),1),t("td",V,e(a.data.file_name),1),t("td",j,[t("span",{class:D(["inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",i(f)(a.data.file_status)])},e(a.data.file_status),3)]),t("td",null,[t("p",null,e(i(g)(a.created_at).format("MMM DD, YYYY h:mma")),1)])]))),128))])])]),n(F,{dataset:r.notifications,class:"mt-4"},null,8,["dataset"])]),_:1})],64))}};export{A as default};
