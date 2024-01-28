import{r as n,K as ce,x as q,y as de,P as he,d as i,b as d,u as G,w as p,F as P,o as u,Z as me,f as k,a as s,g as Q,e as $,i as H,C as fe,E as ve,v as R,t as N,G as b,z as pe,O as M,n as S,H as _e}from"./app-474186b5.js";import{_ as ge}from"./AuthenticatedLayout-05868817.js";import{M as xe,a as we}from"./monokai-55397551.js";import{_ as ye}from"./Modal-b3ee0cb8.js";import{_ as Ce}from"./SecondaryButton-05a5b255.js";import{_ as ke}from"./DangerButton-69aa35a9.js";import{t as j}from"./toast-b7373d7d.js";import{l as be}from"./index-fb0b8ccc.js";import{_ as Me}from"./PrimaryButton-4fb3310d.js";import"./DropdownLink-b2427251.js";import"./ToastList-0c5dc55d.js";import"./_plugin-vue_export-helper-c27b6911.js";const Se={class:"border rounded dark:border-gray-600"},De={class:"flex max-h-[42rem] min-h-[32rem] mt-auto mb-auto rounded-lg"},Ee={class:"w-1/3 p-4"},Ie=s("i",{class:"bx bx-plus text-16 align-middle ltr:mr-1 rtl:ml-1"},null,-1),Te={class:"max-h-[36rem] overflow-y-auto"},Oe=["onClick"],Be=s("i",{class:"mgc_chat_2_line text-2xl mr-3 text-gray-400"},null,-1),Pe={class:"flex-1 mr-3"},$e={class:"text-sm text-gray-500"},He={class:"text-xs text-gray-400 mr-3 whitespace-nowrap"},Ne=["onClick"],Ke={class:"flex flex-col w-2/3 p-4 border-l dark:border-l-gray-600"},Le={key:0},ze={key:1,class:"my-1 sm:my-1.5"},Ve={class:"flex flex-col items-start"},Ze={class:"border-t pt-4 dark:border-t-gray-600"},Fe={class:"relative"},Ue=["disabled"],Ae={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80"},qe=s("path",{d:"M12 5l0 14"},null,-1),Ge=s("path",{d:"M18 11l-6 -6"},null,-1),Qe=s("path",{d:"M6 11l6 -6"},null,-1),Re=[qe,Ge,Qe],je={"aria-hidden":"true",role:"status",class:"absolute text-white animate-spin right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=s("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"},null,-1),We=s("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"},null,-1),Xe=[Je,We],Ye={key:0,class:"text-red-700",role:"alert"},et={class:"block sm:inline"},tt={class:"p-6"},st=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this chat? ",-1),at={class:"mt-6 flex justify-end"},K=5,D=40,pt={__name:"Index",props:{chat:{type:Object,default:null},chats:{type:Object,default:()=>({})}},setup(J){const{chats:W,chat:X}=J;n(!0);const Y=ce(),E=n(Y.props.auth.user),h=be("https://reai-node-lgfv.onrender.com");let L="",w="",c="",_;const v=n(D),m=n(""),I=n(null),l=n(!0),r=n(null),z=n(null),T=()=>({chat_uuid:null,messages:[]}),ee=q(W,"data"),V=q(X,"data"),o=n(T()),O=n(ee);V.value&&(o.value=V.value);const g=n(null),B=n(!1),te=e=>{r.value=null,e.key==="Enter"&&e.shiftKey&&(v.value+=30),e.key==="Enter"&&!e.shiftKey&&!l.value&&(e.preventDefault(),Z())},se=e=>{r.value=null,e.target.value;const a=e.clipboardData.getData("text/plain"),t=a.split(`
`).length;a.includes(`
`)?v.value=Math.min(t*30,250):v.value=D},ae=()=>m.value.trim()===""?(r.value="Please enter a message",l.value=!1,I.value.focus(),!1):!0,Z=async()=>{ae()&&(r.value=null,v.value=D,b.post(route("chats.store",o.value.chat_uuid),{message:m.value}).then(function(e){if(w=e.data.chat.chat_uuid,o.value.messages.push({from:"user",message:m.value}),!o.value.chat_uuid){const a=T();a.last_message={message:"New Chat"},O.value.unshift(a)}F(m.value),m.value="",v.value=D,pe(()=>{y()})}).catch(function(e){console.log(e),j.error(e.message),l.value=!1,r.value=e.response.data.error?e.response.data.error:e.message}))},F=async e=>{l.value=!0,r.value="";const a={question:e,socketIOClientId:L,chatSessionId:w};try{const t="https://reai-node-lgfv.onrender.com/api/v1/chat";E.value.jwt_token||await U(),await b.post(t,a,{headers:{Authorization:"Bearer "+E.value.jwt_token}}).then(function(f){b.post(route("messages.store",w),{message:f.data.text}).then(function(x){o.value.chat_uuid||M.visit(route("chats.show",w),{preserveScroll:!0})}).catch(function(x){l.value=!1,r.value=x.response.data.error})}).catch(async function(f){f.response.data.error_name=="TokenExpiredError"?(await U(),await F(e)):(l.value=!1,r.value=f.message)})}catch(t){l.value=!1,r.value=t,console.error("Error sending query:",t)}},U=async()=>{await b.post(route("refresh-token")).then(function(e){E.value.jwt_token=e.data.token}).catch(function(e){console.log(e)})},oe=()=>{M.visit(route("chats.index"))},y=()=>{const e=z.value;e.scrollTop=e.scrollHeight},le=async e=>{e.chat_uuid&&(M.visit(route("chats.show",e.chat_uuid),{preserveScroll:!0}),y())},ne=()=>{g.value&&M.delete(route("chats.destroy",g.value.chat_uuid),{preserveScroll:!0,onSuccess:e=>{e.props.flash.error?C():(o.value=T(),A(),O.value=e.props.chats.data,g.value=null,C(),j.success("Chat deleted successfully!"))}})},re=e=>{B.value=!0,g.value=e},C=()=>{B.value=!1,g.value=null},ie=e=>{if(!e)return null;const a=38;return e.length>a?e.slice(0,a)+"...":e},A=()=>{o.value.messages.unshift({from:"bot",message:"Hello! I am your personal assistant. How can I help you today?"})};return de(()=>{I.value.focus(),y(),A(),h.on("connect",()=>{L=h.id}),h.on("start",()=>{}),h.on("token",e=>{if(_=o.value.messages[o.value.messages.length-1],c+=e,c.length>=K){l.value=!1;let a=c.lastIndexOf(" ",K);a===-1&&(a=K);const t=c.slice(0,a+1);_&&(_.from=="user"?o.value.messages.push({from:"bot",message:t}):_.message+=t),y(),c=c.slice(a+1)}}),h.on("sourceDocuments",e=>{}),h.on("end",()=>{c.trim().length>0&&(_.message+=c),c=""})}),he(()=>{h.disconnect()}),(e,a)=>(u(),i(P,null,[d(G(me),{title:"Chat"}),d(ge,null,{header:p(()=>[k(" Chats ")]),default:p(()=>[s("div",Se,[s("div",De,[s("div",Ee,[d(Me,{onClick:oe,class:"mb-4"},{default:p(()=>[Ie,k(" Chat ")]),_:1}),s("div",Te,[(u(!0),i(P,null,Q(O.value,(t,f)=>{var x;return u(),i("div",{key:t.id,class:S([{"bg-slate-50":o.value&&o.value.chat_uuid===t.chat_uuid},"transition duration-300 flex justify-between items-center mb-4 p-4 hover:bg-slate-100 rounded-lg cursor-pointer border-b shadow"]),onClick:ue=>le(t)},[Be,s("div",Pe,[s("p",$e,N(ie((x=t==null?void 0:t.last_message)==null?void 0:x.message)||null),1)]),s("div",He,N(t.updated_at),1),s("i",{onClick:_e(ue=>re(t),["stop"]),class:"mdi mdi-trash-can text-sm text-gray-400 hover:text-red-500 cursor-pointer"},null,8,Ne)],10,Oe)}),128))])]),s("div",Ke,[s("div",{ref_key:"messagesPanel",ref:z,class:"flex-1 overflow-y-auto mb-4"},[o.value&&o.value.messages?(u(),i("div",Le,[(u(!0),i(P,null,Q(o.value.messages,(t,f)=>(u(),i("div",{key:f,class:"my-1 sm:my-1.5"},[s("div",{class:S(["flex flex-row",{"justify-start ":t.from==="bot","justify-end":t.from==="user"}])},[s("div",{class:S(["flex flex-col break-words max-w-[90%] flex-shrink-0",{"items-start ":t.from==="bot","items-end":t.from==="user"}])},[s("div",{class:S(["flex items-center px-3 py-2 whitespace-pre-wrap",{"bg-neutral-50 text-neutral-900 rounded-2xl rounded-bl-none":t.from==="bot","bg-violet-500 text-white rounded-2xl rounded-br-none":t.from==="user"}])},[d(G(we),{source:t.message,breaks:!0},null,8,["source"])],2)],2)],2)]))),128))])):$("",!0),l.value?(u(),i("div",ze,[s("div",Ve,[d(xe)])])):$("",!0)],512),s("div",Ze,[s("div",Fe,[H(s("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>m.value=t),class:"min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50",style:ve([{resize:"none"},{height:v.value+"px"}]),placeholder:"Type a message...",autocomplete:"off",rows:"1",ref_key:"messageField",ref:I,onKeydown:te,onPaste:se},null,36),[[fe,m.value]]),s("button",{disabled:l.value,onClick:Z},[H((u(),i("svg",Ae,Re,512)),[[R,!l.value]]),H((u(),i("svg",je,Xe,512)),[[R,l.value]])],8,Ue)])]),r.value?(u(),i("div",Ye,[s("span",et,N(r.value),1)])):$("",!0)])])]),d(ye,{show:B.value,onClose:C},{default:p(()=>[s("div",tt,[st,s("div",at,[d(Ce,{onClick:C},{default:p(()=>[k(" Cancel ")]),_:1}),d(ke,{class:"ml-3",onClick:a[1]||(a[1]=t=>ne(o.value))},{default:p(()=>[k(" Delete Chat ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{pt as default};
