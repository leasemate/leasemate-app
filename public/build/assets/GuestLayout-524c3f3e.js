import{_ as d}from"./ToastList-52403bfa.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,d as t,a as e,t as a,e as l,b as n,j as i,F as c}from"./app-d540730f.js";const _={},g={class:"mb-8"},u={key:0,class:"relative px-5 py-3 border-2 bg-green-50 text-green-700 border-green-100 rounded-xl mb-3"},f={key:1,class:"relative px-5 py-3 border-2 bg-yellow-50 text-yellow-700 border-yellow-100 rounded-xl-3"},m={key:2,class:"relative px-5 py-3 border-2 bg-red-50 text-red-700 border-red-100 rounded-xl"},h={key:3,class:"relative px-5 py-3 border-2 bg-red-50 text-red-700 border-red-100 rounded-xl"};function b(s,o){return r(),t("div",g,[s.$page.props.flash.success?(r(),t("div",u,[e("p",null,a(s.$page.props.flash.success),1)])):l("",!0),s.$page.props.flash.warning?(r(),t("div",f,[e("p",null,a(s.$page.props.flash.warning),1)])):l("",!0),s.$page.props.flash.error?(r(),t("div",m,[e("p",null,a(s.$page.props.flash.error),1)])):l("",!0),s.$page.props.errors.field_name?(r(),t("div",h,a(s.$page.props.errors.field_name[0]),1)):l("",!0)])}const v=p(_,[["render",b]]),$={class:"flex min-h-screen bg-gradient-to-br from-white to-violet-800 via-purple-100"},y={class:"relative w-full"},x={class:"container fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50"},w={class:"flex justify-center"},k={class:"w-full lg:w-[40%]"},V={class:"text-center"},B=["href"],N=e("img",{src:"/images/logo.svg",alt:"logo",class:"w-1/2 mx-auto mb-8"},null,-1),j=[N],F={key:0,class:"text-xl text-center font-medium dark:text-white mb-8"},D={__name:"GuestLayout",setup(s){return(o,G)=>(r(),t(c,null,[n(d),e("div",$,[e("div",y,[e("div",x,[e("div",w,[e("div",k,[e("div",V,[e("a",{href:o.$page.props.app_website},j,8,B),o.$page.props.tenant_name?(r(),t("span",F,a(o.$page.props.tenant_name),1)):l("",!0)]),n(v),i(o.$slots,"default")])])])])])],64))}};export{D as _};
