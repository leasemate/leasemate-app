import{T as B,r as f,o as d,c as P,w as s,f as r,d as x,a as l,b as o,bA as p,br as v,aE as E,x as h,e as _,u as t,v as j,n as A,O as F}from"./app-31bc7d92.js";import{_ as O}from"./ActionMessage-5ec52cd5.js";import{_ as R}from"./FormSection-42ac553c.js";import{a as g,_ as S}from"./TextInput-b3156690.js";import{_ as k}from"./InputLabel-02de7112.js";import{_ as T}from"./PrimaryButton-7098f8ab.js";import{_ as V}from"./SecondaryButton-427e9dca.js";import"./SectionTitle-03ab6081.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={key:0,class:"col-span-6 sm:col-span-4"},z={class:"mt-2"},D=["src","alt"],L={class:"mt-2"},M={class:"col-span-6 sm:col-span-4"},Y={class:"col-span-6 sm:col-span-4"},G={key:0},H={class:"text-sm mt-2 dark:text-white"},J={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},se={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const y=u,e=B({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),c=f(null),n=f(null),C=()=>{n.value&&(e.photo=n.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>w()})},$=()=>{b.value=!0},I=()=>{n.value.click()},N=()=>{const a=n.value.files[0];if(!a)return;const i=new FileReader;i.onload=m=>{c.value=m.target.result},i.readAsDataURL(a)},U=()=>{F.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{c.value=null,w()}})},w=()=>{var a;(a=n.value)!=null&&a.value&&(n.value.value=null)};return(a,i)=>(d(),P(R,{onSubmitted:C},{title:s(()=>[r(" Profile Information ")]),description:s(()=>[r(" Update your account's profile information and email address. ")]),form:s(()=>[a.$page.props.jetstream.managesProfilePhotos?(d(),x("div",q,[l("input",{id:"photo",ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:N},null,544),o(k,{for:"photo",value:"Photo"}),p(l("div",z,[l("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,D)],512),[[v,!c.value]]),p(l("div",L,[l("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:E("background-image: url('"+c.value+"');")},null,4)],512),[[v,c.value]]),o(V,{class:"mt-2 me-2",type:"button",onClick:h(I,["prevent"])},{default:s(()=>[r(" Select A New Photo ")]),_:1},8,["onClick"]),u.user.profile_photo_path?(d(),P(V,{key:0,type:"button",class:"mt-2",onClick:h(U,["prevent"])},{default:s(()=>[r(" Remove Photo ")]),_:1},8,["onClick"])):_("",!0),o(g,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])])):_("",!0),l("div",M,[o(k,{for:"name",value:"Name"}),o(S,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":i[0]||(i[0]=m=>t(e).name=m),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),o(g,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),l("div",Y,[o(k,{for:"email",value:"Email"}),o(S,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[1]||(i[1]=m=>t(e).email=m),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),o(g,{message:t(e).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(d(),x("div",G,[l("p",H,[r(" Your email address is unverified. "),o(t(j),{href:a.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",onClick:h($,["prevent"])},{default:s(()=>[r(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),p(l("div",J," A new verification link has been sent to your email address. ",512),[[v,b.value]])])):_("",!0)])]),actions:s(()=>[o(T,{class:A({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:s(()=>[r(" Save ")]),_:1},8,["class","disabled"]),o(O,{on:t(e).recentlySuccessful,class:"ml-3"},{default:s(()=>[r(" Saved. ")]),_:1},8,["on"])]),_:1}))}};export{se as default};
