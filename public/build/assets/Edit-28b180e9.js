import{_ as b}from"./AuthenticatedLayout-3bb37a7f.js";import k from"./DeleteUserForm-09605deb.js";import x from"./UpdatePasswordForm-f61202f3.js";import $ from"./UpdateProfileInformationForm-fe23f4d9.js";import{R as g,o as i,d as a,e as c,q as d,H as C,a as t,n as p,b as s,t as h,r as T,u as m,w as f,F as z,Z as S,f as B}from"./app-9f64fc26.js";import"./toast-9ff41ab6.js";import"./DropdownLink-c3d5e42b.js";import"./index-e2a90bdc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-0102d094.js";import"./ActionSection-47b09ee5.js";import"./SectionTitle-4062ead6.js";import"./DangerButton-757451b5.js";import"./DialogModal-9d048733.js";import"./Modal-1c5c73fb.js";import"./TextInput-68b9e436.js";import"./SecondaryButton-d495d1e8.js";import"./ActionMessage-bf9bcb34.js";import"./FormSection-703f7739.js";import"./InputLabel-b7aaf58e.js";import"./PrimaryButton-1874fe71.js";var v=g({props:{icon:String,iconColor:{type:String,default:"#ffffff"},iconType:String,iconSize:Number},data(){return{viewBox:"0 -50 200 600"}},methods:{checkIcon(e){return this.icon==e},changeViewbox(){switch(this.icon){case"success":{this.viewBox="0 0 512 512";break}case"close":{this.viewBox="-89 0 500 500";break}case"error":{this.viewBox="-89 0 500 500";break}case"info":{this.viewBox="0 -50 180 600";break}case"warning":{this.viewBox="0 -30 192 580";break}}}},created(){this.changeViewbox()},watch:{icon(){this.changeViewbox()}}});const I=["viewBox"],V=["stroke","fill","stroke-width"],L=["stroke","fill","stroke-width"],A=["stroke","fill","stroke-width"],N=["stroke","fill","stroke-width"],j=["stroke","fill","stroke-width"];function H(e,o,l,n,r,w){return i(),a("svg",{style:d("height: "+e.iconSize*.6+"px; width: "+(e.iconSize*.6+2)+"px;"),xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,class:"icon-svg"},[e.checkIcon("success")?(i(),a("path",{key:0,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"40px":"0","stroke-alignment":"inside","stroke-linecap":"round","stroke-linejoin":"round",class:"",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},null,8,V)):c("",!0),e.checkIcon("info")?(i(),a("path",{key:1,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"50px":"0","stroke-alignment":"centre","stroke-linecap":"round","stroke-linejoin":"round",class:"",d:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"},null,8,L)):c("",!0),e.checkIcon("error")?(i(),a("path",{key:2,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"30px":"0","stroke-alignment":"centre","stroke-linecap":"round","stroke-linejoin":"round",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"},null,8,A)):c("",!0),e.checkIcon("close")?(i(),a("path",{key:3,stroke:e.iconColor,fill:e.iconColor,"stroke-width":e.iconType=="regular"?"30px":"0","stroke-alignment":"outside","stroke-linecap":"round","stroke-linejoin":"round",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"},null,8,N)):c("",!0),e.checkIcon("warning")?(i(),a("path",{key:4,stroke:e.iconColor,fill:e.iconType=="regular"?"transparent":e.iconColor,"stroke-width":e.iconType=="regular"?"50px":"0","stroke-alignment":"centre","stroke-linecap":"round","stroke-linejoin":"round",d:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"},null,8,j)):c("",!0)],12,I)}v.render=H;var y=g({name:"VueBasicAlert",props:{width:{type:Number},duration:{type:Number,default:300},closeIn:{type:Number,default:null}},components:{Icon:v},data(){return{position:"top right",status:!1,isHide:!1,iconSize:35,iconType:"solid",alertType:"info",header:"Some Information",message:"This is the information of something you may know"}},methods:{showAlert(e,o,l,n){this.alertType=e,this.header=l||e.toUpperCase(),this.message=o,n?(this.position=n.position?n.position:"top right",this.iconSize=n.iconSize?n.iconSize:35,this.iconType=n.iconType==="regular"?"regular":"solid"):this.iconType="solid",setTimeout(()=>{this.status=!0},50),this.closeIn&&setTimeout(()=>this.closeAlert(),this.closeIn)},closeAlert(){this.isHide=!0,setTimeout(()=>{this.isHide=!1,this.status=!1,this.iconSize=40,this.header="",this.message=""},this.duration)}}});const M={class:"alert-container"},E={class:"alert-icon"},_={class:"alert-content"},F={class:"alert-head"},P={class:"alert-message"},q={class:"alert-close"};function D(e,o,l,n,r,w){const u=C("Icon");return i(),a("div",{class:p(["vue-alert",e.status?`${e.position?e.position:"top right"} ${e.isHide?"":"active"}`:`${e.position?e.position:"top right"}`]),style:d(`width: ${e.width?e.width:400}px;transition: all ${e.status?e.duration:0}ms ease-in-out;`)},[t("div",M,[t("div",{class:p(["alert-color-bar",e.alertType])},null,2),t("div",E,[t("div",{class:p(["alert-icon-box",e.alertType]),style:d("width: "+e.iconSize+"px; height: "+e.iconSize+"px;")},[s(u,{icon:e.alertType,iconSize:e.iconSize,iconType:e.iconType},null,8,["icon","iconSize","iconType"])],6)]),t("div",_,[t("h5",F,h(e.header),1),t("p",P,h(e.message),1)]),t("div",q,[t("div",{onClick:o[0]||(o[0]=function(){return e.closeAlert&&e.closeAlert(...arguments)}),class:"alert-close-button",style:d("width: "+e.iconSize*.6+"px; height: "+e.iconSize*.6+`px;transition: all ${e.duration}ms ease-in-out;`)},[s(u,{icon:"close",style:{width:"100%"},iconColor:"#bbbbbb"})],4)])])],6)}function R(e,o){o===void 0&&(o={});var l=o.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",l==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var U=`
:root {
  --success-green: #2aa36a;
  --info-blue: #2a79c2;
  --error-red: #eb4e2c;
  --warning-yellow: #ffc600;
}
.vue-alert * {
  font-family: Arial;
}
.vue-alert {
  position: fixed;
  display: block;
  margin: 0px;
  border: none;
  border-radius: 6px;
  opacity: 0;
  background: #fff;
  box-shadow: 0px 0px 16px 0px #d3d3d3;
  text-align: center;
  z-index: 1000000;
  padding: 10px;
}
.vue-alert.top {
  top: 20px;
}
.vue-alert.bottom {
  bottom: 20px;
}
.vue-alert.center {
  right: 50%;
}
.vue-alert.top.center {
  transform: translate(50%, -100%);
  max-width: calc(100vw - 60px);
}
.vue-alert.bottom.center {
  transform: translate(50%, 100%);
  max-width: calc(100vw - 60px);
}
.vue-alert.right {
  transform: translate(100%, 0px);
  max-width: calc(100vw - 60px);
  right: 20px;
}
.vue-alert.left {
  transform: translate(-100%, 0px);
  max-width: calc(100vw - 60px);
  left: 20px;
}
.vue-alert.active {
  opacity: 1;
  transform: translate(0px, 0px);
}
.vue-alert.center.active {
  opacity: 1;
  transform: translate(50%, 0%);
}
.vue-alert > .alert-container {
  display: flex;
  position: relative;
  width: 100%;
}
.vue-alert > .alert-container .alert-color-bar {
  min-height: 65px;
  height: auto;
  min-width: 5px;
  border-radius: 2px;
  margin-right: 10px;
}
.vue-alert > .alert-container .alert-icon {
  display: flex;
  margin: auto 16px auto 6px;
}
.vue-alert > .alert-container .alert-icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: auto;
}
.vue-alert > .alert-container .alert-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
.vue-alert > .alert-container .alert-icon-box.success,
.vue-alert > .alert-container .alert-color-bar.success {
  background-color: var(--success-green);
}
.vue-alert > .alert-container .alert-icon-box.info,
.vue-alert > .alert-container .alert-color-bar.info {
  background-color: var(--info-blue);
}
.vue-alert > .alert-container .alert-icon-box.error,
.vue-alert > .alert-container .alert-color-bar.error {
  background-color: var(--error-red);
}
.vue-alert > .alert-container .alert-icon-box.warning,
.vue-alert > .alert-container .alert-color-bar.warning {
  background-color: var(--warning-yellow);
}
.vue-alert > .alert-container .alert-close {
  display: flex;
  margin: 0px 6px;
}
.vue-alert > .alert-container .alert-close-button {
  padding: 6px;
  margin: auto;
  border-radius: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vue-alert > .alert-container .alert-close-button:hover {
  background-color: #ffffff;
  filter: drop-shadow(0px 1px 3px gainsboro) brightness(0.95);
}
.vue-alert > .alert-container .alert-content > * {
  text-align: left;
  margin: 2px 4px;
  padding-right: 6px;
}
.vue-alert > .alert-container .alert-content > h5.alert-head {
  font-size: 16px;
  font-weight: 600;
  color: #4b4b4b;
}
.vue-alert > .alert-container .alert-content > p.alert-message {
  font-size: 14px;
  min-width: fit-content;
  font-weight: bold;
  line-height: 1.3;
  color: #bcbcbc;
}
`;R(U);y.render=D;var Z=(()=>{const e=y;return e.install=o=>{o.component("VueBasicAlert",e)},e})();const G={class:"card"},J={class:"p-4 sm:p-8"},K={class:"card"},O={class:"p-4 sm:p-8"},Q={class:"card"},W={class:"p-4 sm:p-8"},we={__name:"Edit",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(e){const o=T(null);return(l,n)=>(i(),a(z,null,[s(m(S),{title:"Profile"}),s(b,null,{header:f(()=>[B(" Profile ")]),default:f(()=>[t("div",G,[t("div",J,[s($,{"must-verify-email":e.mustVerifyEmail,status:e.status,class:"max-w-xl"},null,8,["must-verify-email","status"])])]),t("div",K,[t("div",O,[s(x,{class:"max-w-xl"})])]),t("div",Q,[t("div",W,[s(k,{class:"max-w-xl"})])]),s(m(Z),{duration:300,onClose:r=>!0,ref_key:"alert",ref:o},null,512)]),_:1})],64))}};export{we as default};
