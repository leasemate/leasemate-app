import{r as m,T as b,o as a,d as r,b as o,u as t,w as i,F as c,Z as h,a as u,f as n,y as _,n as C,k as w}from"./app-2a8d0423.js";import{_ as V,A as $}from"./AuthenticationCard-efdf41fe.js";import{_ as T}from"./AuthenticationCardLogo-830bd728.js";import{_ as p,a as v}from"./TextInput-67df281c.js";import{_ as g}from"./InputLabel-85aed391.js";import{_ as I}from"./PrimaryButton-7a4eacca.js";import"./ToastList-1e141e9b.js";import"./toast-6f5ead66.js";import"./index-a73cbb6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},B={key:0},F={key:1},N={class:"flex items-center justify-end mt-4"},G={__name:"TwoFactorChallenge",setup(A){const s=m(!1),e=b({code:"",recovery_code:""}),f=m(null),y=m(null),k=async()=>{s.value^=!0,await w(),s.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},x=()=>{e.post(route("two-factor.login"))};return(P,l)=>(a(),r(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{default:i(()=>[o($,null,{logo:i(()=>[o(T)]),default:i(()=>[u("div",U,[s.value?(a(),r(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),r(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),u("form",{onSubmit:_(x,["prevent"])},[s.value?(a(),r("div",F,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=d=>t(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(a(),r("div",B,[o(g,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=d=>t(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),u("div",N,[u("button",{type:"button",class:"text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",onClick:_(k,["prevent"])},[s.value?(a(),r(c,{key:1},[n(" Use an authentication code ")],64)):(a(),r(c,{key:0},[n(" Use a recovery code ")],64))]),o(I,{class:C(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:i(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})]),_:1})],64))}};export{G as default};
