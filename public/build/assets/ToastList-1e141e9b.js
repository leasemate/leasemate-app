import{j as m,o as l,d as u,a as r,n as d,t as x,Q as f,m as y,c as p,w as b,F as h,g as _,u as k,a7 as v}from"./app-2a8d0423.js";import{t as s}from"./toast-6f5ead66.js";import{d as w}from"./index-a73cbb6a.js";const z={class:"flex items-center p-4 text-gray-500 dark:text-zinc-100/80 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-zinc-700 dark:shadow-zinc-600",role:"alert"},B={class:"p-5 text-center"},C={class:"ltr:ml-3 rtl:mr-3 text-sm font-normal"},L=r("i",{class:"bx bx-x text-2xl -mt-1 text-center","data-tw-dismiss":"toast"},null,-1),T=[L],F={__name:"ToastListItem",props:{message:String,type:{type:String,default:"success"},duration:{type:Number,default:5e3}},emits:["remove"],setup(c,{emit:t}){const e=c;m(()=>{setTimeout(()=>{o("remove")},e.duration)});const o=t;return(n,i)=>(l(),u("div",z,[r("div",{class:d(["inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg",{"text-green-500 bg-green-50 dark:bg-green-500/20 dark:text-green-200":e.type==="success","text-yellow-500 bg-yellow-50 dark:bg-yellow-500/20 dark:text-yellow-200":e.type==="warning","text-blue-500 bg-blue-50 dark:bg-blue-500/20 dark:text-blue-200":e.type==="info","text-red-500 bg-red-50 dark:bg-red-500/20 dark:text-red-200":e.type==="error"}])},[r("div",B,[r("i",{class:d(["text-lg bx",{"bx-check":e.type==="success","bx-error":e.type==="warning","bx-bell":e.type==="info","bx-error-alt":e.type==="error"}])},null,2)])],2),r("div",C,x(e.message),1),r("button",{onClick:i[0]||(i[0]=a=>o("remove")),type:"button",class:"ltr:ml-auto rtl:mr-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-50/50 py-[5px] hover:bg-gray-50/50 text-center h-8 w-8 dark:bg-zinc-800 dark:text-gray-100 dark:focus:ring-zinc-500/50","data-dismiss-target":"#toast-default","aria-label":"Close"},T)]))}},I={__name:"ToastList",setup(c){const t=f();let e=w.Inertia.on("finish",n=>{t.props.flash.success&&s.success(t.props.flash.success,5e3),t.props.flash.warning&&s.warning(t.props.flash.warning,5e3),t.props.flash.error&&s.error(t.props.flash.error,5e3),t.props.flash.message&&s.add(t.props.flash.message,5e3)});y(()=>{e()});const o=n=>{s.remove(n)};return(n,i)=>(l(),p(v,{tag:"div","enter-from-class":"translate-x-full opacity-0","enter-active-class":"duration-500","leave-active-class":"duration-500","leave-to-class":"translate-x-full opacity-0",class:"fixed top-4 right-8 z-50 space-y-4 w-full max-w-xs"},{default:b(()=>[(l(!0),u(h,null,_(k(s).items,(a,g)=>(l(),p(F,{key:a.key,message:a.message,type:a.type,duration:a.duration,onRemove:S=>o(g)},null,8,["message","type","duration","onRemove"]))),128))]),_:1}))}};export{I as _};
