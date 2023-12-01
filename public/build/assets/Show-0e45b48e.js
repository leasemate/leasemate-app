import{_ as p}from"./AppLayout-5b3b94de.js";import c from"./DeleteUserForm-060146bc.js";import l from"./LogoutOtherBrowserSessionsForm-0fe6e9b4.js";import{S as s}from"./SectionBorder-68af8036.js";import f from"./TwoFactorAuthenticationForm-3871d9aa.js";import u from"./UpdatePasswordForm-950c63cc.js";import d from"./UpdateProfileInformationForm-4eedc74f.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-87377a4a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-cd68bb7f.js";import"./SectionTitle-b5bc1651.js";import"./DangerButton-795e9640.js";import"./DialogModal-837dee12.js";import"./Modal-bae92711.js";import"./TextInput-b04e6aec.js";import"./SecondaryButton-ceae4986.js";import"./ActionMessage-0b1b173b.js";import"./PrimaryButton-98987315.js";import"./InputLabel-a03c34ba.js";import"./FormSection-948f7bef.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};
