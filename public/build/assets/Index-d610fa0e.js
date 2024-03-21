import{r as n,Q as ce,i as A,j as de,m as he,o as i,d as u,b as d,u as Q,w as p,F as $,Z as me,f as k,a as s,g as j,e as N,p as P,v as fe,q as ve,s as R,t as H,x as b,k as pe,O as M,n as S,y as _e}from"./app-2a8d0423.js";import{_ as ge}from"./AuthenticatedLayout-08c0f9ae.js";import{M as xe,a as we}from"./MessageLoader-ef309d03.js";import{_ as ye}from"./Modal-57b9959b.js";import{_ as Ce}from"./SecondaryButton-6e73f756.js";import{_ as ke}from"./DangerButton-d06e7210.js";import{t as G}from"./toast-6f5ead66.js";import{l as be}from"./index-e3f35709.js";/* empty css                */import{_ as Me}from"./PrimaryButton-7a4eacca.js";import"./DropdownLink-5a3b7f04.js";import"./index-a73cbb6a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-1e141e9b.js";const Se={class:"border rounded dark:border-gray-600"},De={class:"flex max-h-[42rem] min-h-[32rem] mt-auto mb-auto rounded-lg"},Ie={class:"w-1/3 p-4"},Te=s("i",{class:"bx bx-plus text-16 align-middle ltr:mr-1 rtl:ml-1"},null,-1),Ee={class:"max-h-[36rem] overflow-y-auto"},Oe=["onClick"],Be=s("i",{class:"mgc_chat_2_line text-2xl mr-3 text-gray-400"},null,-1),$e={class:"flex-1 mr-3"},Ne={class:"text-sm text-gray-500"},Pe={class:"text-xs text-gray-400 mr-3 whitespace-nowrap"},He=["onClick"],Le={class:"flex flex-col w-2/3 p-4 border-l dark:border-l-gray-600"},Ke={key:0},Ve={key:1,class:"my-1 sm:my-1.5"},Ze={class:"flex flex-col items-start"},ze={class:"border-t pt-4 dark:border-t-gray-600"},Fe={class:"relative"},Ue=["disabled"],qe={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80"},Ae=s("path",{d:"M12 5l0 14"},null,-1),Qe=s("path",{d:"M18 11l-6 -6"},null,-1),je=s("path",{d:"M6 11l6 -6"},null,-1),Re=[Ae,Qe,je],Ge={"aria-hidden":"true",role:"status",class:"absolute text-white animate-spin right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=s("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"},null,-1),We=s("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"},null,-1),Xe=[Je,We],Ye={key:0,class:"text-red-700",role:"alert"},et={class:"block sm:inline"},tt={class:"p-6"},st=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this chat? ",-1),at={class:"mt-6 flex justify-end"},L=5,D=40,gt={__name:"Index",props:{chat:{type:Object,default:null},chats:{type:Object,default:()=>({})}},setup(J){n(!0);const W=ce(),I=n(W.props.auth.user),h=be("https://wss.leasemate.ai");let K="",w="",c="",_;const v=n(D),m=n(""),T=n(null),l=n(!0),r=n(null),V=n(null),{chats:X,chat:Y}=J,E=()=>({chat_uuid:null,messages:[]}),ee=A(X,"data"),Z=A(Y,"data"),o=n(E()),O=n(ee);Z.value&&(o.value=Z.value);const g=n(null),B=n(!1),te=e=>{r.value=null,e.key==="Enter"&&e.shiftKey&&(v.value+=30),e.key==="Enter"&&!e.shiftKey&&!l.value&&(e.preventDefault(),z())},se=e=>{r.value=null,e.target.value;const a=e.clipboardData.getData("text/plain"),t=a.split(`
`).length;a.includes(`
`)?v.value=Math.min(t*30,250):v.value=D},ae=()=>m.value.trim()===""?(r.value="Please enter a message",l.value=!1,T.value.focus(),!1):!0,z=async()=>{ae()&&(r.value=null,v.value=D,b.post(route("chats.store",o.value.chat_uuid),{message:m.value}).then(function(e){if(w=e.data.chat.chat_uuid,o.value.messages.push({from:"user",message:m.value}),!o.value.chat_uuid){const a=E();a.last_message={message:"New Chat"},O.value.unshift(a)}F(m.value),m.value="",v.value=D,pe(()=>{y()})}).catch(function(e){console.log(e),G.error(e.message),l.value=!1,r.value=e.response.data.error?e.response.data.error:e.message}))},F=async e=>{l.value=!0,r.value="";const a={question:e,socketIOClientId:K,chatSessionId:w};try{const t="https://wss.leasemate.ai/api/v1/chat";I.value.jwt_token||await U(),await b.post(t,a,{headers:{Authorization:"Bearer "+I.value.jwt_token}}).then(function(f){b.post(route("messages.store",w),{message:f.data.text}).then(function(x){o.value.chat_uuid||M.visit(route("chats.show",w),{preserveScroll:!0})}).catch(function(x){l.value=!1,r.value=x.response.data.error})}).catch(async function(f){f.response.data.error_name=="TokenExpiredError"?(await U(),await F(e)):(l.value=!1,r.value=f.message)})}catch(t){l.value=!1,r.value=t,console.error("Error sending query:",t)}},U=async()=>{await b.post(route("refresh-token")).then(function(e){I.value.jwt_token=e.data.token}).catch(function(e){console.log(e)})},oe=()=>{M.visit(route("chats.index"))},y=()=>{const e=V.value;e.scrollTop=e.scrollHeight},le=async e=>{e.chat_uuid&&(M.visit(route("chats.show",e.chat_uuid),{preserveScroll:!0}),y())},ne=()=>{g.value&&M.delete(route("chats.destroy",g.value.chat_uuid),{preserveScroll:!0,onSuccess:e=>{e.props.flash.error?C():(o.value=E(),q(),O.value=e.props.chats.data,g.value=null,C(),G.success("Chat deleted successfully!"))}})},re=e=>{B.value=!0,g.value=e},C=()=>{B.value=!1,g.value=null},ie=e=>{if(!e)return null;const a=38;return e.length>a?e.slice(0,a)+"...":e},q=()=>{o.value.messages.unshift({from:"bot",message:"Hello! I am your personal assistant. How can I help you today?"})};return de(()=>{T.value.focus(),y(),q(),h.on("connect",()=>{K=h.id}),h.on("start",()=>{}),h.on("token",e=>{if(_=o.value.messages[o.value.messages.length-1],c+=e,c.length>=L){l.value=!1;let a=c.lastIndexOf(" ",L);a===-1&&(a=L);const t=c.slice(0,a+1);_&&(_.from=="user"?o.value.messages.push({from:"bot",message:t}):_.message+=t),y(),c=c.slice(a+1)}}),h.on("sourceDocuments",e=>{}),h.on("end",()=>{c.trim().length>0&&(_.message+=c),c=""})}),he(()=>{h.disconnect()}),(e,a)=>(i(),u($,null,[d(Q(me),{title:"Chat"}),d(ge,null,{header:p(()=>[k(" Chats ")]),default:p(()=>[s("div",Se,[s("div",De,[s("div",Ie,[d(Me,{onClick:oe,class:"mb-4"},{default:p(()=>[Te,k(" Chat ")]),_:1}),s("div",Ee,[(i(!0),u($,null,j(O.value,(t,f)=>{var x;return i(),u("div",{key:t.id,class:S([{"bg-slate-50":o.value&&o.value.chat_uuid===t.chat_uuid},"transition duration-300 flex justify-between items-center mb-4 p-4 hover:bg-slate-100 rounded-lg cursor-pointer border-b shadow"]),onClick:ue=>le(t)},[Be,s("div",$e,[s("p",Ne,H(ie((x=t==null?void 0:t.last_message)==null?void 0:x.message)||null),1)]),s("div",Pe,H(t.updated_at),1),s("i",{onClick:_e(ue=>re(t),["stop"]),class:"mdi mdi-trash-can text-sm text-gray-400 hover:text-red-500 cursor-pointer"},null,8,He)],10,Oe)}),128))])]),s("div",Le,[s("div",{ref_key:"messagesPanel",ref:V,class:"flex-1 overflow-y-auto mb-4"},[o.value&&o.value.messages?(i(),u("div",Ke,[(i(!0),u($,null,j(o.value.messages,(t,f)=>(i(),u("div",{key:f,class:"my-1 sm:my-1.5"},[s("div",{class:S(["flex flex-row",{"justify-start ":t.from==="bot","justify-end":t.from==="user"}])},[s("div",{class:S(["flex flex-col break-words max-w-[90%] flex-shrink-0",{"items-start ":t.from==="bot","items-end":t.from==="user"}])},[s("div",{class:S(["flex items-center px-3 py-2 whitespace-pre-wrap",{"bg-neutral-50 text-neutral-900 rounded-2xl rounded-bl-none":t.from==="bot","bg-violet-500 text-white rounded-2xl rounded-br-none":t.from==="user"}])},[d(Q(we),{source:t.message,breaks:!0},null,8,["source"])],2)],2)],2)]))),128))])):N("",!0),l.value?(i(),u("div",Ve,[s("div",Ze,[d(xe)])])):N("",!0)],512),s("div",ze,[s("div",Fe,[P(s("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>m.value=t),class:"min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50",style:ve([{resize:"none"},{height:v.value+"px"}]),placeholder:"Type a message...",autocomplete:"off",rows:"1",ref_key:"messageField",ref:T,onKeydown:te,onPaste:se},null,36),[[fe,m.value]]),s("button",{disabled:l.value,onClick:z},[P((i(),u("svg",qe,Re,512)),[[R,!l.value]]),P((i(),u("svg",Ge,Xe,512)),[[R,l.value]])],8,Ue)])]),r.value?(i(),u("div",Ye,[s("span",et,H(r.value),1)])):N("",!0)])])]),d(ye,{show:B.value,onClose:C},{default:p(()=>[s("div",tt,[st,s("div",at,[d(Ce,{onClick:C},{default:p(()=>[k(" Cancel ")]),_:1}),d(ke,{class:"ml-3",onClick:a[1]||(a[1]=t=>ne(o.value))},{default:p(()=>[k(" Delete Chat ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{gt as default};
