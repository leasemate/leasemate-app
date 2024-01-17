import{T as m,r as d,o as u,d as c,b as o,u as a,w as e,F as p,Z as f,a as r,n as _,f as w,x as b}from"./app-31bc7d92.js";import{_ as g}from"./GuestLayout-e5067cef.js";import{A as x}from"./AuthenticationCard-ff26aba7.js";import{_ as h,a as y}from"./TextInput-b3156690.js";import{_ as v}from"./InputLabel-02de7112.js";import{_ as V}from"./PrimaryButton-7098f8ab.js";import"./ToastList-2e562bbe.js";import"./toast-75c883e5.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=r("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},E={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(u(),c(p,null,[o(a(f),{title:"Secure Area"}),o(g,null,{default:e(()=>[o(x,null,{logo:e(()=>[]),default:e(()=>[k,r("form",{onSubmit:b(n,["prevent"])},[r("div",null,[o(v,{for:"password",value:"Password"}),o(h,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>a(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(y,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",$,[o(V,{class:_(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:e(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})]),_:1})],64))}};export{E as default};
