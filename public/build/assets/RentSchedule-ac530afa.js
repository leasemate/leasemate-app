import{_ as n}from"./Table-08eecb10.js";import{o as a,d as o,b as d,w as l,F as p,g as _,a as t,t as s}from"./app-2a8d0423.js";const i={class:"p-2 bg-white"},h=t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"Start Date"),t("th",{scope:"col",class:"px-6 py-3"},"End Date"),t("th",{scope:"col",class:"px-6 py-3"},"Amount"),t("th",{scope:"col",class:"px-6 py-3"},"per SQFT")],-1),u={class:"bg-white border-b border-gray-50 dark:bg-zinc-700/50 dark:border-zinc-600"},y={scope:"row",class:"px-6 py-4 space-x-2"},m={class:"px-6 py-4 text-gray-900"},x={class:"px-6 py-4 text-gray-900"},f={class:"px-6 py-4 text-gray-900"},D={__name:"RentSchedule",props:{lease:Object},setup(c){return(r,g)=>(a(),o("div",i,[d(n,{class:"pb-0",data:c.lease.rent_schedule,columns:["Start Date","End Date","Amount","Frequency"],containerClasses:"max-h-64 overflow-y-auto"},{head:l(()=>[h]),body:l(()=>[(a(!0),o(p,null,_(c.lease.rent_schedule,e=>(a(),o("tr",u,[t("th",y,s(e.start_date),1),t("td",m,s(e.end_date),1),t("td",x,s(r.filters.formatMoney(e.amount_total,0)),1),t("td",f,s(r.filters.formatMoney(e.amount_per_square_foot)),1)]))),256))]),_:1},8,["data"])]))}};export{D as default};
