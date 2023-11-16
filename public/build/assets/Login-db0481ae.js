import{h as v,j as y,v as k,o as c,f as x,T as w,c as u,w as i,a,u as t,Z as V,t as B,g as p,b as e,i as f,d,n as C,e as S}from"./app-b7d91a43.js";import{_ as $}from"./GuestLayout-2fd18dd6.js";import{_ as g,a as _,b as h}from"./TextInput-f6ee86f7.js";import{P}from"./PrimaryButton-0ead7792.js";import"./feather-226f285e.js";import"./_plugin-vue_export-helper-c27b6911.js";const q=["value"],N={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:s}){const m=l,n=v({get(){return m.checked},set(o){s("update:checked",o)}});return(o,r)=>y((c(),x("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":r[0]||(r[0]=b=>n.value=b),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,q)),[[k,n.value]])}},R=e("div",{class:"text-center"},[e("h5",{class:"text-gray-600 dark:text-gray-100"},"Welcome Back !"),e("p",{class:"text-gray-500 dark:text-gray-100/60 mt-1"},"Sign in to continue to REAI.")],-1),U={key:0,class:"mb-4 font-medium text-sm text-green-600"},D=["onSubmit"],E={class:"mt-4"},L={class:"flex"},j={class:"flex-grow-1"},A={class:"ltr:ml-auto rtl:mr-auto"},F={class:"block mt-4"},M={class:"flex items-center"},T=e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),z={class:"flex items-center justify-end mt-4"},I={class:"mt-12 text-center"},W={class:"text-gray-500 dark:text-gray-100"},Q={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const s=w({email:"",password:"",remember:!1}),m=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(n,o)=>(c(),u($,null,{default:i(()=>[a(t(V),{title:"Log in"}),R,l.status?(c(),x("div",U,B(l.status),1)):p("",!0),e("form",{onSubmit:S(m,["prevent"])},[e("div",null,[a(g,{for:"email",value:"Email"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>t(s).email=r),required:"",autofocus:"",autocomplete:"username",tabindex:"1"},null,8,["modelValue"]),a(h,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),e("div",E,[e("div",L,[e("div",j,[a(g,{for:"password",value:"Password"})]),e("div",A,[l.canResetPassword?(c(),u(t(f),{key:0,href:n.route("password.request"),class:"text-sm text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-100"},{default:i(()=>[d(" Forgot password? ")]),_:1},8,["href"])):p("",!0)])]),a(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>t(s).password=r),required:"",autocomplete:"current-password",tabindex:"2"},null,8,["modelValue"]),a(h,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),e("div",F,[e("label",M,[a(N,{name:"remember",checked:t(s).remember,"onUpdate:checked":o[2]||(o[2]=r=>t(s).remember=r)},null,8,["checked"]),T])]),e("div",z,[a(P,{class:C(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing,tabindex:"3"},{default:i(()=>[d(" Log in ")]),_:1},8,["class","disabled"])])],40,D),e("div",I,[e("p",W,[d("Don't have an account ? "),a(t(f),{href:n.route("register"),class:"text-violet-500 font-semibold"},{default:i(()=>[d(" Signup now ")]),_:1},8,["href"])])])]),_:1}))}};export{Q as default};
