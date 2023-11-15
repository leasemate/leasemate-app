import{_ as m,h as f,f as x}from"./AuthenticatedLayout-2a2a5888.js";import{K as h,m as y,k as g,O as b,o as e,f as o,a as l,u as r,w as i,F as c,Z as k,d as z,b as t,s as v,t as s,n as w}from"./app-c9019ddb.js";import{_ as M}from"./Pagination-1bea7780.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./feather-7fdf5601.js";const N={class:"relative overflow-x-auto"},C={class:"w-full text-sm text-left text-gray-500"},D=t("thead",{class:"text-sm text-gray-700 dark:text-gray-100 bg-gray-50 dark:bg-zinc-600"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Type "),t("th",{scope:"col",class:"px-6 py-3"}," File "),t("th",{scope:"col",class:"px-6 py-3"}," Status "),t("th",null,"Date")])],-1),F={class:"px-6 py-3.5 dark:text-zinc-100"},S={class:"px-6 py-3.5 dark:text-zinc-100"},Y={class:"px-6 py-3.5 dark:text-zinc-100"},j={__name:"Index",props:{notifications:{type:Object}},setup(n){const{getFileStatusClass:d}=x(),p=h(),u=y(p.props.auth.user);return g(()=>{Echo.private(`App.Models.User.${u.value.id}`).notification(_=>{b.reload({only:["notifications"]})})}),(_,B)=>(e(),o(c,null,[l(r(k),{title:"Notifications"}),l(m,null,{header:i(()=>[z(" Notifications ")]),default:i(()=>[t("div",N,[t("table",C,[D,t("tbody",null,[(e(!0),o(c,null,v(n.notifications.data,a=>(e(),o("tr",{key:a.id,class:"bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600"},[t("td",F,s(a.data.notification_type_name),1),t("td",S,s(a.data.file_name),1),t("td",Y,[t("span",{class:w(["inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",r(d)(a.data.file_status)])},s(a.data.file_status),3)]),t("td",null,[t("p",null,s(r(f)(a.created_at).format("MMM DD, YYYY h:mma")),1)])]))),128))])])]),l(M,{dataset:n.notifications,class:"mt-4"},null,8,["dataset"])]),_:1})],64))}};export{j as default};
