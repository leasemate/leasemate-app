import{j as m,_ as n,o as a,d as r,b as l,w as i,m as e,a as t,h as c,n as p,e as u}from"./app-87377a4a.js";import{S as g}from"./SectionTitle-b5bc1651.js";const _={class:"md:grid md:grid-cols-3 md:gap-6"},b={class:"mt-5 md:mt-0 md:col-span-2"},h={class:"grid grid-cols-6 gap-6"},v={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-end sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},$={__name:"FormSection",emits:["submitted"],setup(f){const o=m(()=>!!n().actions);return(s,d)=>(a(),r("div",_,[l(g,null,{title:i(()=>[e(s.$slots,"title")]),description:i(()=>[e(s.$slots,"description")]),_:3}),t("div",b,[t("form",{onSubmit:d[0]||(d[0]=c(y=>s.$emit("submitted"),["prevent"]))},[t("div",{class:p(["px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",h,[e(s.$slots,"form")])],2),o.value?(a(),r("div",v,[e(s.$slots,"actions")])):u("",!0)],32)])]))}};export{$ as _};
