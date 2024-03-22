import{_ as d}from"./Table-cc292d35.js";import{o,d as r,b as p,w as n,F as i,g as u,a as t,n as a,t as s}from"./app-0f25e32f.js";const m={class:"p-2 bg-white"},x=t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"Start Date"),t("th",{scope:"col",class:"px-6 py-3"},"End Date"),t("th",{scope:"col",class:"px-6 py-3"},"Amount"),t("th",{scope:"col",class:"px-6 py-3"},"per SQFT")],-1),y={class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},_={__name:"RentSchedule",props:{lease:Object},setup(c){return(l,h)=>(o(),r("div",m,[p(d,{class:"pb-0",data:c.lease.rent_schedule,columns:["Start Date","End Date","Amount","Frequency"],containerClasses:"max-h-64 overflow-y-auto"},{head:n(()=>[x]),body:n(()=>[(o(!0),r(i,null,u(c.lease.rent_schedule,e=>(o(),r("tr",y,[t("td",{class:a(["px-6 py-4 space-x-2",e.current?"font-semibold text-green-600":"text-gray-600"])},s(e.start_date),3),t("td",{class:a(["px-6 py-4",e.current?"font-semibold text-green-600":"text-gray-600"])},s(e.end_date),3),t("td",{class:a(["px-6 py-4",e.current?"font-semibold text-green-600":"text-gray-600"])},s(l.filters.formatMoney(e.amount_total)),3),t("td",{class:a(["px-6 py-4",e.current?"font-semibold text-green-600":"text-gray-600"])},s(l.filters.formatMoney(e.amount_per_square_foot)),3)]))),256))]),_:1},8,["data"])]))}};export{_ as default};
