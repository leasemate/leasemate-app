import{o as a,c as i,w as s,a as m,b as t,d as o,F as r,e as l}from"./app-d8ba7ac1.js";import n from"./DeleteTeamForm-77d6bb56.js";import{S as c}from"./SectionBorder-c64a35af.js";import p from"./TeamMemberManager-f70fbe3c.js";import d from"./UpdateTeamNameForm-1bc2298e.js";import{_ as f}from"./AuthenticatedLayout-ef4a1680.js";import"./ActionSection-277fb7de.js";import"./SectionTitle-10783279.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-34c8bd2c.js";import"./Modal-4e234522.js";import"./DangerButton-1d78b0a9.js";import"./SecondaryButton-00290b72.js";import"./ActionMessage-befd9eb1.js";import"./DialogModal-fbd46a54.js";import"./FormSection-ec7a464f.js";import"./TextInput-9be5edb0.js";import"./InputLabel-435e866a.js";import"./PrimaryButton-efcdddec.js";import"./toast-52aa20de.js";import"./DropdownLink-4b6105bd.js";import"./index-bd80772e.js";import"./ToastList-64bb72a6.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},H={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),i(f,null,{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(d,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(p,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),o(r,{key:0},[t(c),t(n,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):l("",!0)])])]),_:1}))}};export{H as default};
