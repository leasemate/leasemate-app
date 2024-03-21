import{T as w,o as n,d as c,b as t,u as e,w as l,F as x,Z as h,t as k,e as u,a,c as y,f as d,J as f,n as v,y as V}from"./app-2a8d0423.js";import{_ as $,A as B}from"./AuthenticationCard-efdf41fe.js";import{_ as C}from"./Checkbox-9d21164a.js";import{_ as p,a as _}from"./TextInput-67df281c.js";import{_ as g}from"./InputLabel-85aed391.js";import{_ as N}from"./PrimaryButton-7a4eacca.js";import"./ToastList-1e141e9b.js";import"./toast-6f5ead66.js";import"./index-a73cbb6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const R={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},q={class:"mt-4"},F={class:"flex"},L={class:"flex-grow-1"},P={class:"ltr:ml-auto rtl:mr-auto"},S={class:"block mt-4"},U={class:"flex items-center"},A=a("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),E={class:"flex items-center justify-end mt-4"},K={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const s=w({email:"",password:"",remember:!1}),b=()=>{s.transform(m=>({...m,remember:s.remember?"on":""})).post(route("login.store"),{})};return(m,o)=>(n(),c(x,null,[t(e(h),{title:"Log in"}),t($,null,{default:l(()=>[t(B,null,{default:l(()=>[i.status?(n(),c("div",R,k(i.status),1)):u("",!0),a("form",{onSubmit:V(b,["prevent"])},[a("div",null,[t(g,{for:"email",value:"Email"}),t(p,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username",tabindex:"1"},null,8,["modelValue"]),t(_,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),a("div",q,[a("div",F,[a("div",L,[t(g,{for:"password",value:"Password"})]),a("div",P,[i.canResetPassword?(n(),y(e(f),{key:0,href:m.route("password.request"),class:"text-sm text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-100"},{default:l(()=>[d(" Forgot password? ")]),_:1},8,["href"])):u("",!0)])]),t(p,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",tabindex:"2"},null,8,["modelValue"]),t(_,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",S,[a("label",U,[t(C,{checked:e(s).remember,"onUpdate:checked":o[2]||(o[2]=r=>e(s).remember=r),name:"remember"},null,8,["checked"]),A])]),a("div",E,[t(e(f),{class:"ms-4",href:m.route("register")},{default:l(()=>[d(" Register ")]),_:1},8,["href"]),t(N,{class:v(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing,tabindex:"3"},{default:l(()=>[d(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})]),_:1})],64))}};export{K as default};
