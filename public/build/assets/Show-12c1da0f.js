import{c as i,w as a,o as s,a as m,b as t,d as o,F as r,e as l}from"./app-a1efc8dc.js";import n from"./DeleteTeamForm-d3e1ec52.js";import{S as c}from"./SectionBorder-bbf304cd.js";import p from"./TeamMemberManager-1b2a65d8.js";import d from"./UpdateTeamNameForm-8883edf7.js";import{_ as f}from"./AuthenticatedLayout-c0a3ef80.js";import"./ActionSection-0a7dda03.js";import"./SectionTitle-b0c2b7ad.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-d35f0ffc.js";import"./Modal-fd3539ce.js";import"./DangerButton-bbcb49f9.js";import"./SecondaryButton-f41c776f.js";import"./ActionMessage-64cfd65d.js";import"./DialogModal-a53bd5fc.js";import"./FormSection-b0ffa7f8.js";import"./TextInput-d97d8a75.js";import"./InputLabel-e48e0256.js";import"./PrimaryButton-8483d36f.js";import"./toast-25826cb8.js";import"./DropdownLink-1a5bf438.js";import"./ToastList-e36202e4.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},G={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(s(),i(f,null,{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(d,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(p,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),o(r,{key:0},[t(c),t(n,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):l("",!0)])])]),_:1}))}};export{G as default};
