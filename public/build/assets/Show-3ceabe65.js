import{o as a,c as i,w as s,a as m,b as t,d as o,F as r,e as l}from"./app-68f2f160.js";import n from"./DeleteTeamForm-bb5e0054.js";import{S as c}from"./SectionBorder-b09e98d6.js";import p from"./TeamMemberManager-6f8e22c3.js";import d from"./UpdateTeamNameForm-99efe041.js";import{_ as f}from"./AuthenticatedLayout-cacf9b2a.js";import"./ActionSection-ad454576.js";import"./SectionTitle-ec592f1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-6075f125.js";import"./Modal-a8c84ad1.js";import"./DangerButton-f72bce36.js";import"./SecondaryButton-84883ca3.js";import"./ActionMessage-58162d59.js";import"./DialogModal-7cb1e79f.js";import"./FormSection-3543ec79.js";import"./TextInput-82483079.js";import"./InputLabel-39b91c7d.js";import"./PrimaryButton-517559a6.js";import"./toast-16faa1c6.js";import"./DropdownLink-f62a0199.js";import"./index-ee8fd73a.js";import"./ToastList-10cb7144.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},H={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),i(f,null,{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(d,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(p,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),o(r,{key:0},[t(c),t(n,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):l("",!0)])])]),_:1}))}};export{H as default};
