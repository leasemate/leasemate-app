import{T as w,d as c,b as t,u as s,w as l,F as x,o as n,Z as h,t as k,e as u,a,c as v,f as d,K as f,n as y,Y as V}from"./app-cd1bed80.js";import{_ as $,A as B}from"./AuthenticationCard-2a877c07.js";import{_ as C}from"./Checkbox-f942a7dc.js";import{_ as p,a as _}from"./TextInput-eeea2b14.js";import{_ as g}from"./InputLabel-c087e5fe.js";import{_ as F}from"./PrimaryButton-4b588034.js";import"./ToastList-6682adb4.js";import"./toast-d7ed517f.js";import"./index-b1a7c8d6.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},R={class:"mt-4"},q={class:"flex"},L={class:"flex-grow-1"},P={class:"ltr:ml-auto rtl:mr-auto"},S={class:"block mt-4"},U={class:"flex items-center"},A=a("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),E={class:"flex items-center justify-end mt-4"},I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=w({email:"",password:"",remember:!1}),b=()=>{e.transform(m=>({...m,remember:e.remember?"on":""})).post(route("login.store"),{onFinish:()=>e.reset("password")})};return(m,o)=>(n(),c(x,null,[t(s(h),{title:"Log in"}),t($,null,{default:l(()=>[t(B,null,{default:l(()=>[i.status?(n(),c("div",N,k(i.status),1)):u("",!0),a("form",{onSubmit:V(b,["prevent"])},[a("div",null,[t(g,{for:"email",value:"Email"}),t(p,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username",tabindex:"1"},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",R,[a("div",q,[a("div",L,[t(g,{for:"password",value:"Password"})]),a("div",P,[i.canResetPassword?(n(),v(s(f),{key:0,href:m.route("password.request"),class:"text-sm text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-100"},{default:l(()=>[d(" Forgot password? ")]),_:1},8,["href"])):u("",!0)])]),t(p,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",tabindex:"2"},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",S,[a("label",U,[t(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),A])]),a("div",E,[t(s(f),{class:"ms-4",href:m.route("register")},{default:l(()=>[d(" Register ")]),_:1},8,["href"]),t(F,{class:y(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing,tabindex:"3"},{default:l(()=>[d(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})]),_:1})],64))}};export{I as default};
