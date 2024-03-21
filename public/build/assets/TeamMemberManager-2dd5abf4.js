import{Q as H,T as h,r as x,o as r,d as n,b as a,w as t,e as u,f as l,a as o,u as s,F as w,g as C,n as v,t as b,O as J}from"./app-2a8d0423.js";import{_ as K}from"./ActionMessage-f81ae2df.js";import{_ as A}from"./ActionSection-2779fff7.js";import{_ as B}from"./ConfirmationModal-402f0a44.js";import{_ as L}from"./DangerButton-d06e7210.js";import{_ as W}from"./DialogModal-c7fd9290.js";import{_ as X}from"./FormSection-19eb22c7.js";import{_ as Y,a as P}from"./TextInput-67df281c.js";import{_ as z}from"./InputLabel-85aed391.js";import{_ as F}from"./PrimaryButton-7a4eacca.js";import{_ as $}from"./SecondaryButton-6e73f756.js";import{S}from"./SectionBorder-bd7d5531.js";import"./SectionTitle-a32710af.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-57b9959b.js";const Z={key:0},ee=o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Please provide the email address of the person you would like to add to this team. ")],-1),te={class:"col-span-6 sm:col-span-4"},se={key:0,class:"col-span-6 lg:col-span-4"},oe={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},ae=["onClick"],re={class:"flex items-center"},ne={key:0,class:"ms-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},le=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ie=[le],me={class:"mt-2 text-xs text-gray-600 dark:text-gray-400 text-start"},de={key:1},ce={class:"space-y-6"},ue={class:"text-gray-600 dark:text-gray-400"},ve={class:"flex items-center"},fe=["onClick"],ge={key:2},be={class:"space-y-6"},ye={class:"flex items-center"},ke=["src","alt"],_e={class:"ms-4 dark:text-white"},pe={class:"flex items-center"},he=["onClick"],xe={key:1,class:"ms-2 text-sm text-gray-400"},we=["onClick"],Ce={key:0},Te={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},Re=["onClick"],Me={class:"flex items-center"},$e={key:0,class:"ms-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Se=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),je=[Se],Ae={class:"mt-2 text-xs text-gray-600 dark:text-gray-400"},He={__name:"TeamMemberManager",props:{team:Object,availableRoles:Array,userPermissions:Object},setup(i){const k=i,V=H(),d=h({email:"",role:null}),f=h({role:null}),T=h({}),R=h({}),_=x(!1),M=x(null),p=x(!1),y=x(null),O=()=>{d.post(route("team-members.store",k.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>d.reset()})},N=c=>{J.delete(route("team-invitations.destroy",c),{preserveScroll:!0})},E=c=>{M.value=c,f.role=c.membership.role,_.value=!0},I=()=>{f.put(route("team-members.update",[k.team,M.value]),{preserveScroll:!0,onSuccess:()=>_.value=!1})},U=()=>{p.value=!0},D=()=>{T.delete(route("team-members.destroy",[k.team,V.props.auth.user]))},Q=c=>{y.value=c},q=()=>{R.delete(route("team-members.destroy",[k.team,y.value]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>y.value=null})},j=c=>k.availableRoles.find(m=>m.key===c).name;return(c,m)=>(r(),n("div",null,[i.userPermissions.canAddTeamMembers?(r(),n("div",Z,[a(S),a(X,{onSubmitted:O},{title:t(()=>[l(" Add Team Member ")]),description:t(()=>[l(" Add a new team member to your team, allowing them to collaborate with you. ")]),form:t(()=>[ee,o("div",te,[a(z,{for:"email",value:"Email"}),a(Y,{id:"email",modelValue:s(d).email,"onUpdate:modelValue":m[0]||(m[0]=e=>s(d).email=e),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),a(P,{message:s(d).errors.email,class:"mt-2"},null,8,["message"])]),i.availableRoles.length>0?(r(),n("div",se,[a(z,{for:"roles",value:"Role"}),a(P,{message:s(d).errors.role,class:"mt-2"},null,8,["message"]),o("div",oe,[(r(!0),n(w,null,C(i.availableRoles,(e,g)=>(r(),n("button",{key:e.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":g>0,"rounded-b-none":g!=Object.keys(i.availableRoles).length-1}]),onClick:G=>s(d).role=e.key},[o("div",{class:v({"opacity-50":s(d).role&&s(d).role!=e.key})},[o("div",re,[o("div",{class:v(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":s(d).role==e.key}])},b(e.name),3),s(d).role==e.key?(r(),n("svg",ne,ie)):u("",!0)]),o("div",me,b(e.description),1)],2)],10,ae))),128))])])):u("",!0)]),actions:t(()=>[a(K,{on:s(d).recentlySuccessful,class:"me-3"},{default:t(()=>[l(" Added. ")]),_:1},8,["on"]),a(F,{class:v({"opacity-25":s(d).processing}),disabled:s(d).processing},{default:t(()=>[l(" Add ")]),_:1},8,["class","disabled"])]),_:1})])):u("",!0),i.team.team_invitations.length>0&&i.userPermissions.canAddTeamMembers?(r(),n("div",de,[a(S),a(A,{class:"mt-10 sm:mt-0"},{title:t(()=>[l(" Pending Team Invitations ")]),description:t(()=>[l(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")]),content:t(()=>[o("div",ce,[(r(!0),n(w,null,C(i.team.team_invitations,e=>(r(),n("div",{key:e.id,class:"flex items-center justify-between"},[o("div",ue,b(e.email),1),o("div",ve,[i.userPermissions.canRemoveTeamMembers?(r(),n("button",{key:0,class:"cursor-pointer ms-6 text-sm text-red-500 focus:outline-none",onClick:g=>N(e)}," Cancel ",8,fe)):u("",!0)])]))),128))])]),_:1})])):u("",!0),i.team.users.length>0?(r(),n("div",ge,[a(S),a(A,{class:"mt-10 sm:mt-0"},{title:t(()=>[l(" Team Members ")]),description:t(()=>[l(" All of the people that are part of this team. ")]),content:t(()=>[o("div",be,[(r(!0),n(w,null,C(i.team.users,e=>(r(),n("div",{key:e.id,class:"flex items-center justify-between"},[o("div",ye,[o("img",{class:"w-8 h-8 rounded-full object-cover",src:e.profile_photo_url,alt:e.name},null,8,ke),o("div",_e,b(e.name),1)]),o("div",pe,[i.userPermissions.canUpdateTeamMembers&&i.availableRoles.length?(r(),n("button",{key:0,class:"ms-2 text-sm text-gray-400 underline",onClick:g=>E(e)},b(j(e.membership.role)),9,he)):i.availableRoles.length?(r(),n("div",xe,b(j(e.membership.role)),1)):u("",!0),c.$page.props.auth.user.id===e.id?(r(),n("button",{key:2,class:"cursor-pointer ms-6 text-sm text-red-500",onClick:U}," Leave ")):i.userPermissions.canRemoveTeamMembers?(r(),n("button",{key:3,class:"cursor-pointer ms-6 text-sm text-red-500",onClick:g=>Q(e)}," Remove ",8,we)):u("",!0)])]))),128))])]),_:1})])):u("",!0),a(W,{show:_.value,onClose:m[2]||(m[2]=e=>_.value=!1)},{title:t(()=>[l(" Manage Role ")]),content:t(()=>[M.value?(r(),n("div",Ce,[o("div",Te,[(r(!0),n(w,null,C(i.availableRoles,(e,g)=>(r(),n("button",{key:e.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":g>0,"rounded-b-none":g!==Object.keys(i.availableRoles).length-1}]),onClick:G=>s(f).role=e.key},[o("div",{class:v({"opacity-50":s(f).role&&s(f).role!==e.key})},[o("div",Me,[o("div",{class:v(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":s(f).role===e.key}])},b(e.name),3),s(f).role==e.key?(r(),n("svg",$e,je)):u("",!0)]),o("div",Ae,b(e.description),1)],2)],10,Re))),128))])])):u("",!0)]),footer:t(()=>[a($,{onClick:m[1]||(m[1]=e=>_.value=!1)},{default:t(()=>[l(" Cancel ")]),_:1}),a(F,{class:v(["ms-3",{"opacity-25":s(f).processing}]),disabled:s(f).processing,onClick:I},{default:t(()=>[l(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(B,{show:p.value,onClose:m[4]||(m[4]=e=>p.value=!1)},{title:t(()=>[l(" Leave Team ")]),content:t(()=>[l(" Are you sure you would like to leave this team? ")]),footer:t(()=>[a($,{onClick:m[3]||(m[3]=e=>p.value=!1)},{default:t(()=>[l(" Cancel ")]),_:1}),a(L,{class:v(["ms-3",{"opacity-25":s(T).processing}]),disabled:s(T).processing,onClick:D},{default:t(()=>[l(" Leave ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(B,{show:y.value,onClose:m[6]||(m[6]=e=>y.value=null)},{title:t(()=>[l(" Remove Team Member ")]),content:t(()=>[l(" Are you sure you would like to remove this person from the team? ")]),footer:t(()=>[a($,{onClick:m[5]||(m[5]=e=>y.value=null)},{default:t(()=>[l(" Cancel ")]),_:1}),a(L,{class:v(["ms-3",{"opacity-25":s(R).processing}]),disabled:s(R).processing,onClick:q},{default:t(()=>[l(" Remove ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{He as default};
