import{c as i,w as a,o as s,a as m,b as t,d as o,F as r,e as l}from"./app-183a3c8f.js";import n from"./DeleteTeamForm-0192a0c9.js";import{S as c}from"./SectionBorder-ae45cd9f.js";import p from"./TeamMemberManager-a6ee6114.js";import d from"./UpdateTeamNameForm-624ba056.js";import{_ as f}from"./AuthenticatedLayout-77ec2dc3.js";import"./ActionSection-196e0647.js";import"./SectionTitle-c73aca3f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-ce92d029.js";import"./Modal-5c9bb87c.js";import"./DangerButton-ac44f052.js";import"./SecondaryButton-d45ef0d9.js";import"./ActionMessage-19c8adc7.js";import"./DialogModal-d8aa59b4.js";import"./FormSection-5727f409.js";import"./TextInput-cfd1e1f7.js";import"./InputLabel-2db750b8.js";import"./PrimaryButton-8124ceb6.js";import"./toast-2ad15644.js";import"./DropdownLink-9f3dffad.js";import"./index-2fc181d9.js";import"./ToastList-23e1ffea.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},H={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(s(),i(f,null,{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(d,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(p,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),o(r,{key:0},[t(c),t(n,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):l("",!0)])])]),_:1}))}};export{H as default};
