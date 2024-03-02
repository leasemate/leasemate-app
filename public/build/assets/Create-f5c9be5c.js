import{T as p,X as u,c as _,w as i,o as f,a as o,y as w,b as a,u as e,t as g,Q as y,f as x,n as V}from"./app-f5d1aeef.js";import{_ as v}from"./AppLayout-0bffe523.js";import{_ as n,a as r}from"./TextInput-4316f98c.js";import{_ as d}from"./InputLabel-1879e4ae.js";import{_ as b}from"./PrimaryButton-28da6f99.js";import"./toast-7e37f78d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DropdownLink-97f65666.js";const h=o("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Tenants ",-1),k={class:"py-12"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},q={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"},U={class:"container p-4"},N={class:"mt-4"},$={class:"flex items-baseline"},B={class:"text-19"},T={class:"mt-4"},z={class:"mt-4"},D={class:"mt-4"},E={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},H={__name:"Create",setup(S){const s=p({company_name:"",domain:"",name:"",email:"",password:"",password_confirmation:""});u(()=>s.company_name,m=>{s.domain=m.toLowerCase().replace(/[^a-z0-9]/g,"")});const c=()=>{s.post(route("tenants.store"),{onError:m=>{console.log(m)},onFinish:m=>{console.log(m),s.reset("password","password_confirmation")}}),console.log("form..."),console.log(s)};return(m,l)=>(f(),_(v,null,{header:i(()=>[h]),default:i(()=>[o("div",k,[o("div",C,[o("div",q,[o("div",U,[o("form",{onSubmit:w(c,["prevent"]),class:"w-1/3 mx-auto"},[o("div",null,[a(d,{for:"company_name",value:"Company Name"}),a(n,{id:"company_name",modelValue:e(s).company_name,"onUpdate:modelValue":l[0]||(l[0]=t=>e(s).company_name=t),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.company_name},null,8,["message"])]),o("div",N,[a(d,{for:"domain_name",value:"Domain"}),o("div",$,[a(n,{id:"domain_name",modelValue:e(s).domain,"onUpdate:modelValue":l[1]||(l[1]=t=>e(s).domain=t),type:"text",class:"mt-1 block w-full mr-2",required:""},null,8,["modelValue"]),o("span",B,"."+g(e(y)().props.central_domain),1)]),a(r,{class:"mt-2",message:e(s).errors.domain},null,8,["message"])]),o("div",T,[a(d,{for:"name",value:"Name"}),a(n,{id:"name",modelValue:e(s).name,"onUpdate:modelValue":l[2]||(l[2]=t=>e(s).name=t),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),o("div",z,[a(d,{for:"email",value:"Email"}),a(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":l[3]||(l[3]=t=>e(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),o("div",D,[a(d,{for:"password",value:"Password"}),a(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":l[4]||(l[4]=t=>e(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",E,[a(d,{for:"password_confirmation",value:"Confirm Password"}),a(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[5]||(l[5]=t=>e(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),o("div",P,[a(b,{class:V(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:i(()=>[x(" Create ")]),_:1},8,["class","disabled"])])],32)])])])])]),_:1}))}};export{H as default};
