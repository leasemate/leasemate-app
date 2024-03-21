import{r as h,j as k,o as u,d as m,n as y,t as w,e as _,a,T as v,S as b,b as s,u as r,w as f,F as V,Z as T,y as S,Q as $,f as g,J as C}from"./app-2a8d0423.js";import{_ as z,A as q}from"./AuthenticationCard-efdf41fe.js";import{_ as U}from"./Checkbox-9d21164a.js";import{_ as p,a as l}from"./TextInput-67df281c.js";import{_ as d}from"./InputLabel-85aed391.js";import{_ as N}from"./PrimaryButton-7a4eacca.js";import{t as x}from"./toast-6f5ead66.js";import"./ToastList-1e141e9b.js";import"./index-a73cbb6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"flex items-center p-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-md shadow-sm transition-all duration-300 focus-within:border-indigo-500 dark:focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-500 dark:focus-within:ring-indigo-600"},R=["value"],A={__name:"TextInputGroup",props:{modelValue:String,groupTextSide:{type:String,default:"left"},groupText:{type:String,default:""},groupTextClasses:{type:String,default:""}},emits:["update:modelValue"],setup(i,{expose:e}){const c=h(null);return k(()=>{c.value.hasAttribute("autofocus")&&c.value.focus()}),e({focus:()=>c.value.focus()}),(n,o)=>(u(),m("div",P,[i.groupTextSide=="left"?(u(),m("div",{key:0,class:y(["input-group-text px-4 dark:text-zinc-100 border-r border-gray-100 whitespace-nowrap",i.groupTextClasses])},w(i.groupText),3)):_("",!0),a("input",{ref_key:"input",ref:c,type:"text",class:"w-full py-1 border-0 placeholder:text-sm dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100 dark:placeholder:text-zinc-100 focus:outline-none focus:border-transparent focus:ring-0",value:i.modelValue,onInput:o[0]||(o[0]=t=>n.$emit("update:modelValue",t.target.value))},null,40,R),i.groupTextSide=="right"?(u(),m("div",{key:1,class:y(["input-group-text px-4 dark:text-zinc-100 border-l border-gray-100 whitespace-nowrap",i.groupTextClasses])},w(i.groupText),3)):_("",!0)]))}},B={class:"mt-4"},F={class:"flex items-baseline"},j={class:"mt-4"},E={class:"mt-4"},I={class:"mt-4"},D={class:"mt-4"},M={key:0,class:"mt-4"},Y={class:"flex items-center"},G={class:"ms-2"},J=["href"],L=["href"],Q={class:"flex items-center justify-end mt-4"},Z={key:1},H=a("p",null,"Thank you for registering. You will receive an email shortly once your account has been setup.",-1),K=[H],ie={__name:"Register",props:{recentlyRegistered:Boolean},setup(i){const e=v({company_name:"",domain:"",name:"",email:"",password:"",password_confirmation:"",terms:!1});b(()=>e.company_name,n=>{e.domain=n.toLowerCase().replace(/[^a-z0-9]/g,"")});const c=()=>{e.post(route("register.store"),{onSuccess:n=>{e.reset("password","password_confirmation"),n.props.recentlyRegistered&&x.success("Thank you for registering. You will receive an email shortly once your account has been setup.")},onError:n=>{x.error("There was an error creating your account.")},onFinish:n=>{e.reset("password","password_confirmation")}})};return(n,o)=>(u(),m(V,null,[s(r(T),{title:"Register"}),s(z,null,{default:f(()=>[s(q,null,{default:f(()=>[i.recentlyRegistered?(u(),m("div",Z,K)):(u(),m("form",{key:0,onSubmit:S(c,["prevent"])},[a("div",null,[s(d,{for:"company_name",value:"Company Name"}),s(p,{id:"company_name",modelValue:r(e).company_name,"onUpdate:modelValue":o[0]||(o[0]=t=>r(e).company_name=t),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(l,{class:"mt-2",message:r(e).errors.company_name},null,8,["message"])]),a("div",B,[s(d,{for:"domain_name",value:"Domain"}),a("div",F,[s(A,{id:"domain_name",modelValue:r(e).domain,"onUpdate:modelValue":o[1]||(o[1]=t=>r(e).domain=t),groupTextSide:"right",groupText:`.${r($)().props.central_domain}`,groupTextClasses:"border-transparent text-slate-400",type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue","groupText"])]),s(l,{class:"mt-2",message:r(e).errors.domain},null,8,["message"])]),a("div",j,[s(d,{for:"name",value:"Name"}),s(p,{id:"name",modelValue:r(e).name,"onUpdate:modelValue":o[2]||(o[2]=t=>r(e).name=t),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(l,{class:"mt-2",message:r(e).errors.name},null,8,["message"])]),a("div",E,[s(d,{for:"email",value:"Email"}),s(p,{id:"email",modelValue:r(e).email,"onUpdate:modelValue":o[3]||(o[3]=t=>r(e).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),s(l,{class:"mt-2",message:r(e).errors.email},null,8,["message"])]),a("div",I,[s(d,{for:"password",value:"Password"}),s(p,{id:"password",modelValue:r(e).password,"onUpdate:modelValue":o[4]||(o[4]=t=>r(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(l,{class:"mt-2",message:r(e).errors.password},null,8,["message"])]),a("div",D,[s(d,{for:"password_confirmation",value:"Confirm Password"}),s(p,{id:"password_confirmation",modelValue:r(e).password_confirmation,"onUpdate:modelValue":o[5]||(o[5]=t=>r(e).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(l,{class:"mt-2",message:r(e).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(u(),m("div",M,[s(d,{for:"terms"},{default:f(()=>[a("div",Y,[s(U,{id:"terms",checked:r(e).terms,"onUpdate:checked":o[6]||(o[6]=t=>r(e).terms=t),name:"terms",required:""},null,8,["checked"]),a("div",G,[g(" I agree to the "),a("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},"Terms of Service",8,J),g(" and "),a("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},"Privacy Policy",8,L)])]),s(l,{class:"mt-2",message:r(e).errors.terms},null,8,["message"])]),_:1})])):_("",!0),a("div",Q,[s(r(C),{href:n.route("login"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:f(()=>[g(" Already registered? ")]),_:1},8,["href"]),s(N,{class:y(["ms-4",{"opacity-25":r(e).processing}]),disabled:r(e).processing},{default:f(()=>[g(" Register ")]),_:1},8,["class","disabled"])])],32))]),_:1})]),_:1})],64))}};export{ie as default};
