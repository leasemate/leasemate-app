import{o as d,d as l,a as t,t as e}from"./app-2a8d0423.js";const i={class:"p-2 bg-white"},o={class:"grid grid-cols-2 gap-x-8 gap-y-4"},n=t("div",{class:"font-bold text-gray-900"},"Tenant",-1),c={class:"text-sm text-gray-600"},r=t("div",{class:"font-bold text-gray-900"},"Landlord",-1),_={class:"text-sm text-gray-600"},g=t("div",{class:"font-bold text-gray-600"},"Premise Address",-1),v={class:"text-sm text-gray-600"},x=t("div",{class:"font-bold text-gray-600"},"Building Address",-1),h={class:"text-sm text-gray-600"},m=t("div",{class:"font-bold text-gray-600"},"Rentable Sq. Ft.",-1),y={class:"text-sm text-gray-600"},u={class:"grid grid-cols-2 gap-x-8 gap-y-4"},b=t("div",{class:"font-bold text-gray-600"},"Term",-1),f={class:"text-sm text-gray-600"},B=t("div",{class:"font-bold text-gray-600"},"Abatement",-1),S={class:"text-sm text-gray-600"},A=t("div",{class:"font-bold text-gray-600"},"Pro Rata Share",-1),D={class:"text-sm text-gray-600"},M={class:"grid grid-cols-2 gap-x-8 gap-y-4"},T=t("div",{class:"font-bold text-gray-600"},"Exp. Date",-1),k={class:"text-sm text-gray-600"},q=t("div",{class:"font-bold text-gray-600"},"Sec. Deposit",-1),E={class:"text-sm text-gray-600"},R={__name:"BasicTerms",props:{lease:Object},setup(s){return(a,N)=>(d(),l("div",i,[t("div",o,[t("div",null,[n,t("div",c,e(s.lease.tenant??"--"),1)]),t("div",null,[r,t("div",_,e(s.lease.landlord??"--"),1)]),t("div",null,[g,t("div",v,e(s.lease.premise_address??"--"),1)]),t("div",null,[x,t("div",h,e(s.lease.building_address??"--"),1)]),t("div",null,[m,t("div",y,e(a.filters.formatNumber(s.lease.rentable_sqft)??"--"),1)]),t("div",null,[t("div",u,[t("div",null,[b,t("div",f,e(s.lease.term?s.lease.term+" Months":"--"),1)]),t("div",null,[B,t("div",S,e(s.lease.abatement?s.lease.abatement+" Months":"--"),1)])])]),t("div",null,[A,t("div",D,e(s.lease.pro_rata_share??"--"),1)]),t("div",null,[t("div",M,[t("div",null,[T,t("div",k,e(s.lease.end_date??"--"),1)]),t("div",null,[q,t("div",E,e(a.filters.formatMoney(s.lease.security_deposit)??"--"),1)])])])])]))}};export{R as default};
