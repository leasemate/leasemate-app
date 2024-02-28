import{T as m,r as d,d as u,b as a,u as e,w as r,F as c,o as p,Z as f,a as o,n as _,f as w,y as b}from"./app-cf8d3fa5.js";import{_ as g,A as x}from"./AuthenticationCard-7b4b0cdd.js";import{_ as y,a as h}from"./TextInput-7aed2848.js";import{_ as v}from"./InputLabel-7f381c21.js";import{_ as V}from"./PrimaryButton-5195826f.js";import"./ToastList-fe29ba90.js";import"./toast-80775f9a.js";import"./index-19784239.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=o("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup($){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(p(),u(c,null,[a(e(f),{title:"Secure Area"}),a(g,null,{default:r(()=>[a(x,null,{default:r(()=>[k,o("form",{onSubmit:b(n,["prevent"])},[o("div",null,[a(v,{for:"password",value:"Password"}),a(y,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(h,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",C,[a(V,{class:_(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1})]),_:1})],64))}};export{z as default};
