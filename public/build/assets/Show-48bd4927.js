import{c as i,w as a,o as s,a as m,b as t,d as o,F as r,e as l}from"./app-6d79a40a.js";import n from"./DeleteTeamForm-ca83cd52.js";import{S as c}from"./SectionBorder-1be6c8cf.js";import p from"./TeamMemberManager-d91c7079.js";import d from"./UpdateTeamNameForm-41c028c3.js";import{_ as f}from"./AuthenticatedLayout-6e5c3b3a.js";import"./ActionSection-b5f70cbe.js";import"./SectionTitle-967a886b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-037e291e.js";import"./Modal-6a8c4416.js";import"./DangerButton-c478727a.js";import"./SecondaryButton-1d06eb03.js";import"./ActionMessage-e88f5502.js";import"./DialogModal-6fa6187e.js";import"./FormSection-e4afe23a.js";import"./TextInput-25cf8302.js";import"./InputLabel-bcdeaa6d.js";import"./PrimaryButton-7573feae.js";import"./toast-268c4b0e.js";import"./DropdownLink-95d39266.js";import"./index-ba6c0a01.js";import"./ToastList-b5158951.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},H={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(s(),i(f,null,{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(d,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(p,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),o(r,{key:0},[t(c),t(n,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):l("",!0)])])]),_:1}))}};export{H as default};
