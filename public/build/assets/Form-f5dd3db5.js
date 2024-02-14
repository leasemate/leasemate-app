import{T as k,d as l,b as t,w as i,o as n,a,u as s,F as V,g as b,t as _,e as g,K as $,f as x,n as U}from"./app-1f836617.js";import{_ as w}from"./DefaultForm-597416ee.js";import{_ as c}from"./InputLabel-71aa8d33.js";import{_ as p,a as f}from"./TextInput-320ff8d2.js";import{_ as E}from"./PrimaryButton-ab839641.js";import{_ as F}from"./Checkbox-ed1a0b9c.js";import"./autocomplete.esm-6c84235b.js";import"./ripple.esm-65eb853c.js";const S={class:"max-w-5xl mx-auto py-10 sm:px-6 lg:px-8"},B={class:"col-span-6"},N={class:"col-span-6"},h={class:"col-span-6"},C={key:0,class:"col-span-6"},I=a("div",{class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},"Roles",-1),j={class:"grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 p-2"},q={class:"flex items-center"},O={class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},T={key:0,class:"font-normal text-sm mt-2 mb-2 text-red-600 dark:text-red-400"},H={__name:"Form",props:{user:{type:Object,default:()=>({name:"",email:"",position:""})},user_roles:{type:Array,default:()=>[]},roles:Object},setup(m){const d=m,e=k({...d.user,user_roles:d.user_roles}),v=()=>{e.id?e.put(route("users.update",e.id),{errorBag:"updateUser",preserveScroll:!0}):e.post(route("users.store"),{errorBag:"createUser",preserveScroll:!0,onSuccess:()=>{e.reset()},onError:u=>{console.log(u)}})};return(u,r)=>(n(),l("div",S,[t(w,{onSubmitted:v},{form:i(()=>[a("div",B,[t(c,{for:"name",value:"Name"}),t(p,{id:"name",ref:"nameInput",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=o=>s(e).name=o),onFocus:r[1]||(r[1]=o=>s(e).clearErrors()),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(f,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),a("div",N,[t(c,{for:"email",value:"Email"}),t(p,{id:"email",ref:"emailInput",modelValue:s(e).email,"onUpdate:modelValue":r[2]||(r[2]=o=>s(e).email=o),onFocus:r[3]||(r[3]=o=>s(e).clearErrors()),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(f,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])]),a("div",h,[t(c,{for:"position",value:"Position"}),t(p,{id:"position",ref:"positionInput",modelValue:s(e).position,"onUpdate:modelValue":r[4]||(r[4]=o=>s(e).position=o),onFocus:r[5]||(r[5]=o=>s(e).clearErrors()),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),t(f,{message:s(e).errors.position,class:"mt-2"},null,8,["message"])]),!d.user.is_super_admin&&m.roles.length?(n(),l("div",C,[I,a("div",j,[(n(!0),l(V,null,b(m.roles,o=>(n(),l("div",{key:o.id,class:"col-span-1"},[a("label",q,[t(F,{id:o.id,checked:s(e).user_roles,"onUpdate:checked":r[6]||(r[6]=y=>s(e).user_roles=y),value:o.name},null,8,["id","checked","value"]),a("span",O,_(o.name),1)])]))),128))]),s(e).errors.user_roles?(n(),l("div",T,_(s(e).errors.user_roles),1)):g("",!0)])):g("",!0)]),actions:i(()=>[t(s($),{href:u.route("users.index"),class:"mr-4"},{default:i(()=>[x("Cancel ")]),_:1},8,["href"]),t(E,{class:U({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[x(" Save ")]),_:1},8,["class","disabled"])]),_:1})]))}};export{H as default};
