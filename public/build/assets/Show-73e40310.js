import{c as i,w as a,o as s,a as m,b as t,d as o,F as r,e as l}from"./app-1f836617.js";import n from"./DeleteTeamForm-7c0077f8.js";import{S as c}from"./SectionBorder-b660f6c3.js";import p from"./TeamMemberManager-0145f5b5.js";import d from"./UpdateTeamNameForm-51e572a8.js";import{_ as f}from"./AuthenticatedLayout-4c5e814a.js";import"./ActionSection-1ade2777.js";import"./SectionTitle-330f0a3f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-a8a59e67.js";import"./Modal-d90cabd0.js";import"./DangerButton-5eabc981.js";import"./SecondaryButton-7f15abeb.js";import"./ActionMessage-c0848962.js";import"./DialogModal-fa0d1598.js";import"./FormSection-3633192c.js";import"./TextInput-320ff8d2.js";import"./InputLabel-71aa8d33.js";import"./PrimaryButton-ab839641.js";import"./toast-99e37765.js";import"./DropdownLink-1fab562f.js";import"./ToastList-d99203fa.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},G={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(s(),i(f,null,{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(d,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(p,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),o(r,{key:0},[t(c),t(n,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):l("",!0)])])]),_:1}))}};export{G as default};
