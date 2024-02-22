import{r as _,d as r,b as l,u as p,w as s,F as u,o,Z as C,f as n,a as e,g as b,O as z,i as $,E as D,v as S,t as i,n as E,c as y,K as g,e as m}from"./app-d65009b5.js";import{_ as N}from"./AuthenticatedLayout-b5f6bc6a.js";import{_ as V}from"./PrimaryLink-f06d98dc.js";import{_ as A}from"./Button-c9446b42.js";import{_ as B}from"./DangerButton-7394022e.js";import{_ as T}from"./SecondaryButton-21ae8911.js";import{_ as U}from"./Modal-dc7c7061.js";import{T as j}from"./Table-76e24a35.js";import"./toast-098c2d48.js";import"./DropdownLink-93c9ebe1.js";import"./index-5e9cefb1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-dd5ba456.js";const I={class:"flex justify-end"},F=e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Email "),e("th",{scope:"col",class:"px-6 py-3"}," Position "),e("th",{scope:"col",class:"px-6 py-3"}," Status "),e("th",{scope:"col",class:"px-6 py-3"}," Role(s) "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")],-1),O={class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},P={scope:"row",class:"flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"},R={class:""},K={class:"text-base font-semibold ml-2 dark:text-gray-100"},L={class:"px-6 py-4 dark:text-zinc-100/80"},M={class:"px-6 py-4 dark:text-zinc-100/80"},Z={class:"px-6 py-4 dark:text-zinc-100/80"},q={class:"px-6 py-4 dark:text-zinc-100/80"},G={key:0},H=e("span",{class:"badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20"},"Super Admin",-1),J=[H],Q={key:1,class:"flex justify-start space-x-2"},W={class:"badge font-medium bg-blue-50 text-blue-500 text-11 px-1.5 py-[1.5px] rounded dark:bg-blue-500/20"},X={class:"px-6 py-4 space-x-2"},Y={class:"p-6"},ee=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this user? ",-1),te={class:"mt-6 flex justify-end"},fe={__name:"Index",props:{users:Array},setup(v){_(null);const d=_(!1),f=_(null),k=a=>{d.value=!0,f.value=a},w=()=>{c(),z.delete(route("users.destroy",f.value),{preserveScroll:!0,onError:a=>{console.log(a),toast.error(a)}})},c=()=>{d.value=!1};return(a,x)=>(o(),r(u,null,[l(p(C),{title:"Users"}),l(N,null,{header:s(()=>[n(" Users ")]),default:s(()=>[e("div",I,[l(V,{href:a.route("users.create"),class:"mb-4"},{default:s(()=>[n("Create User")]),_:1},8,["href"])]),l(j,null,{head:s(()=>[F]),body:s(()=>[(o(!0),r(u,null,b(v.users,t=>(o(),r("tr",O,[e("th",P,[$(e("div",R,[e("span",{class:"block rounded-full w-10 h-10 bg-cover bg-no-repeat bg-center",style:D("background-image: url('"+t.profile_photo_url+"');")},null,4)],512),[[S,t.profile_photo_url]]),e("div",K,i(t.name),1)]),e("td",L,i(t.email),1),e("td",M,i(t.position??"--"),1),e("td",Z,[e("span",{class:E(["badge font-medium text-11 px-1.5 py-[1.5px] rounded",t.email_verified_at?"bg-green-50 text-green-500 dark:bg-green-500/20":"bg-yellow-50 text-yellow-500 dark:bg-yellow-500/20"])},i(t.email_verified_at?"Verified":"Pending"),3),e("div",null,[t.email_verified_at?m("",!0):(o(),y(p(g),{key:0,href:a.route("users.resendInvitation",t),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs"},{default:s(()=>[n("Resend Invite")]),_:2},1032,["href"]))])]),e("td",q,[t.is_super_admin?(o(),r("div",G,J)):t.roles.length?(o(),r("div",Q,[(o(!0),r(u,null,b(t.roles,h=>(o(),r("span",W,i(h.name),1))),256))])):m("",!0)]),e("td",X,[l(p(g),{href:a.route("users.edit",t),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:s(()=>[n("Edit")]),_:2},1032,["href"]),t.is_super_admin?m("",!0):(o(),y(A,{key:0,onClick:h=>k(t),class:"font-medium text-red-600 dark:text-blue-500 hover:underline"},{default:s(()=>[n("Delete")]),_:2},1032,["onClick"]))])]))),256))]),_:1}),l(U,{show:d.value,onClose:c},{default:s(()=>[e("div",Y,[ee,e("div",te,[l(T,{onClick:c},{default:s(()=>[n(" Cancel ")]),_:1}),l(B,{class:"ml-3",onClick:x[0]||(x[0]=t=>w())},{default:s(()=>[n(" Delete ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{fe as default};
