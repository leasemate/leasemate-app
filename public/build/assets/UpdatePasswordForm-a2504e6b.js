<<<<<<<< HEAD:public/build/assets/UpdatePasswordForm-2252f187.js
import{r as i,T as _,c as f,w as e,o as V,f as n,a as l,b as r,u as o,n as g}from"./app-a1efc8dc.js";import{_ as v}from"./ActionMessage-64cfd65d.js";import{_ as y}from"./FormSection-b0ffa7f8.js";import{_ as d,a as p}from"./TextInput-d97d8a75.js";import{_ as c}from"./InputLabel-e48e0256.js";import{_ as P}from"./PrimaryButton-8483d36f.js";import"./SectionTitle-b0c2b7ad.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},F={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(U,a)=>(V(),f(y,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",b,[r(c,{for:"current_password",value:"Current Password"}),r(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[r(c,{for:"password",value:"New Password"}),r(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",S,[r(c,{for:"password_confirmation",value:"Confirm Password"}),r(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(P,{class:g({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"]),r(v,{on:o(s).recentlySuccessful,class:"ml-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"])]),_:1}))}};export{F as default};
========
import{r as i,T as _,c as f,w as e,o as V,f as n,a as l,b as r,u as o,n as g}from"./app-824aa810.js";import{_ as v}from"./ActionMessage-211b3987.js";import{_ as y}from"./FormSection-59969d5d.js";import{_ as d,a as p}from"./TextInput-e3f66e98.js";import{_ as c}from"./InputLabel-530e109e.js";import{_ as P}from"./PrimaryButton-dd5feadc.js";import"./SectionTitle-9b62cdd1.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},F={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(U,a)=>(V(),f(y,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",b,[r(c,{for:"current_password",value:"Current Password"}),r(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[r(c,{for:"password",value:"New Password"}),r(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",S,[r(c,{for:"password_confirmation",value:"Confirm Password"}),r(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(P,{class:g({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"]),r(v,{on:o(s).recentlySuccessful,class:"ml-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"])]),_:1}))}};export{F as default};
>>>>>>>> LMAP-19-Restructure-lease-show-page-with-lease-data:public/build/assets/UpdatePasswordForm-a2504e6b.js
