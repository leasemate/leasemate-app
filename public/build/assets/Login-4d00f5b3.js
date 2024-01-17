import{T as b,o as n,d,b as a,u as s,w as m,F as w,Z as v,a as t,f as l,t as f,v as p,e as c,c as k,n as y,x as V,K as $}from"./app-31bc7d92.js";import{_ as B}from"./GuestLayout-e5067cef.js";import{A as F}from"./AuthenticationCard-ff26aba7.js";import{_ as C}from"./Checkbox-72c66004.js";import{_,a as g}from"./TextInput-b3156690.js";import{_ as h}from"./InputLabel-02de7112.js";import{_ as L}from"./PrimaryButton-7098f8ab.js";import"./ToastList-2e562bbe.js";import"./toast-75c883e5.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"text-center mb-8"},R={class:"text-gray-600 dark:text-gray-100"},S={key:0,class:"mt-4 text-center"},q={class:"text-gray-500 dark:text-gray-100"},P={key:1,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},T=["onSubmit"],U={class:"mt-4"},j={class:"flex"},A={class:"flex-grow-1"},D={class:"ltr:ml-auto rtl:mr-auto"},E={class:"block mt-4"},I={class:"flex items-center"},z=t("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),K={class:"flex items-center justify-end mt-4"},ee={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(u){const e=b({email:"",password:"",remember:!1}),x=()=>{e.transform(o=>({...o,remember:e.remember?"on":""})).post(route($().props.tenant_id?"login":"landlord.login"),{onFinish:()=>e.reset("password")})};return(o,r)=>(n(),d(w,null,[a(s(v),{title:"Log in"}),a(B,null,{default:m(()=>[a(F,null,{default:m(()=>[o.$page.props.session.teamInvitation?(n(),d("div",N,[t("h5",R,[l("Welcome! Login "),t("template",null,[l(" to "+f(o.$page.props.session.teamInvitation),1)])]),o.$page.props.jetstream.hasTeamFeatures?(n(),d("div",S,[t("p",q,[l("Don't have an account ? "),a(s(p),{href:o.route("register"),class:"text-violet-500 font-semibold"},{default:m(()=>[l(" Register ")]),_:1},8,["href"])])])):c("",!0)])):c("",!0),u.status?(n(),d("div",P,f(u.status),1)):c("",!0),t("form",{onSubmit:V(x,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(_,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=i=>s(e).email=i),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username",tabindex:"1"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",U,[t("div",j,[t("div",A,[a(h,{for:"password",value:"Password"})]),t("div",D,[u.canResetPassword?(n(),k(s(p),{key:0,href:o.route("password.request"),class:"text-sm text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-100"},{default:m(()=>[l(" Forgot password? ")]),_:1},8,["href"])):c("",!0)])]),a(_,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":r[1]||(r[1]=i=>s(e).password=i),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",tabindex:"2"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",E,[t("label",I,[a(C,{checked:s(e).remember,"onUpdate:checked":r[2]||(r[2]=i=>s(e).remember=i),name:"remember"},null,8,["checked"]),z])]),t("div",K,[a(L,{class:y(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing,tabindex:"3"},{default:m(()=>[l(" Log in ")]),_:1},8,["class","disabled"])])],40,T)]),_:1})]),_:1})],64))}};export{ee as default};
