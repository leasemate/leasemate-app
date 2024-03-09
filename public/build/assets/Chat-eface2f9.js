import{Q as ce,h as de,r as u,i as R,j as he,O as S,k as G,l as me,m as fe,o as h,d as m,b as r,u as J,w as g,F as N,Z as pe,f as y,t as b,a as s,g as W,e as V,p as A,v as ve,q as ge,s as X,x as T,n as O,y as _e}from"./app-82737fd3.js";import{_ as xe}from"./AuthenticatedLayout-75a3e7e8.js";import{_ as we}from"./PrimaryLink-37392567.js";import"./tabpanel.esm-99e2392a.js";import{B as ye}from"./ripple.esm-71f7ed97.js";import{M as be,a as Ce}from"./MessageLoader-7fa3975b.js";/* empty css                */import{V as ke,p as Me,s as Se}from"./filepond.min-71b2e13a.js";import{_ as $e,a as De,b as Ee}from"./BoxIcon-83e870c3.js";import{_ as Te}from"./PrimaryButton-eda400c9.js";import{t as Y}from"./toast-cf0385f7.js";import{l as Oe}from"./index-e3f35709.js";import{_ as Be}from"./Modal-6125c87a.js";import{_ as Ie}from"./SecondaryButton-89698b2d.js";import{_ as Pe}from"./DangerButton-11fb8cf1.js";import"./DropdownLink-be3dd4f0.js";import"./index-232b34aa.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-a6cada25.js";import"./index.esm-45a607db.js";var Fe={root:function(_){var x=_.props;return["p-panel p-component",{"p-panel-toggleable":x.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"};ye.extend({name:"panel",classes:Fe});const Le={class:"my-6"},Ne={class:"col-span-12 mb-8"},Ve={class:""},Ae={class:"flex max-h-[40rem] min-h-[40rem] mt-auto mb-auto rounded-lg shadow-md border"},He={class:"w-1/3 p-4"},Ke={class:"max-h-[36rem] overflow-y-auto"},Ue=s("i",{class:"bx bx-plus text-16 align-middle ltr:mr-1 rtl:ml-1"},null,-1),Ze=["onClick"],ze={class:"flex items-center justify-between space-x-2"},je={class:"relative grow overflow-hidden whitespace-nowrap text-sm text-gray-500"},qe=s("div",{class:"absolute bottom-0 right-0 top-0 bg-gradient-to-l to-transparent w-8 from-white from-0% group-hover:w-20 group-hover:from-token-surface-primary group-hover:from-80%"},null,-1),Qe=["onClick"],Re={class:"text-xs text-gray-400 mr-3 whitespace-nowrap"},Ge={class:"flex flex-col w-full p-4 dark:border-l-gray-600"},Je={key:1,class:"my-1 sm:my-1.5"},We={class:"flex flex-col items-start"},Xe={class:"pt-4 dark:border-t-gray-600"},Ye={class:"relative"},es=["disabled"],ss={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80"},ts=s("path",{d:"M12 5l0 14"},null,-1),as=s("path",{d:"M18 11l-6 -6"},null,-1),os=s("path",{d:"M6 11l6 -6"},null,-1),ls=[ts,as,os],ns={"aria-hidden":"true",role:"status",class:"absolute text-white animate-spin right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rs=s("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"},null,-1),is=s("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"},null,-1),us=[rs,is],cs={key:0,class:"text-red-700",role:"alert"},ds={class:"block sm:inline"},hs={class:"p-6"},ms=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this chat? ",-1),fs={class:"mt-6 flex justify-end"},H=5,B=40,Fs={__name:"Chat",props:{asset:Object,associates:Array,lease:Object,chat:{type:Object,default:null},chats:{type:Object,default:()=>({})}},setup(c){const _=ce(),x=de(()=>_.props.auth.user),f=Oe("https://wss.leasemate.ai");let K="",$="",d="",C;const w=u(B),p=u(""),I=u(null),n=u(!1),i=u(null),U=u(null),o=c,P=()=>({chat_uuid:null,messages:[]}),ee=R(o.chats),Z=R(o.chat),l=u(P()),F=u(ee);Z.value&&(l.value=Z.value);const k=u(null),L=u(!1),se=e=>{i.value=null,e.key==="Enter"&&e.shiftKey&&(w.value+=30),e.key==="Enter"&&!e.shiftKey&&!n.value&&(e.preventDefault(),j())},te=e=>{i.value=null,e.target.value;const a=e.clipboardData.getData("text/plain"),t=a.split(`
`).length;a.includes(`
`)?w.value=Math.min(t*30,250):w.value=B},ae=()=>{S.visit(route("assets.leases.chats.index",[o.asset.id,o.lease.id]))},D=()=>{const e=U.value;e.scrollTop=e.scrollHeight},oe=async e=>{e.chat_uuid&&(S.visit(route("assets.leases.chats.index",[o.asset,o.lease,e.chat_uuid]),{preserveScroll:!0,only:["chats","chat"]}),D())},le=()=>{k.value&&S.delete(route("assets.leases.chats.destroy",[o.asset,o.lease,k.value.chat_uuid]),{preserveScroll:!0,onSuccess:e=>{e.props.flash.error?E():(l.value=P(),z(),F.value=e.props.chats,k.value=null,E(),Y.success("Chat deleted successfully!"))}})},ne=e=>{L.value=!0,k.value=e},E=()=>{L.value=!1,k.value=null},re=e=>{if(!e)return null;const a=38;return e.length>a?e.slice(0,a)+"...":e},z=()=>{l.value.messages.unshift({from:"bot",message:"Hello! I am your personal assistant. How can I help you today?"})},ie=()=>p.value.trim()===""?(i.value="Please enter a message",n.value=!1,I.value.focus(),!1):!0,j=async()=>{ie()&&(i.value=null,w.value=B,T.post(route("assets.leases.chats.store",[o.asset.id,o.lease.id,l.value.chat_uuid??null]),{from:"user",message:p.value}).then(function(e){if($=e.data.chat.chat_uuid,l.value.messages.push({from:"user",message:p.value}),!l.value.chat_uuid){const a=P();a.last_message={message:"New Chat"},F.value.unshift(a)}q(p.value),p.value="",w.value=B,G(()=>{D()})}).catch(function(e){console.log(e),Y.error(e.message),n.value=!1,i.value=e.response?e.response.data.error:e.message}))},q=async e=>{n.value=!0,i.value="";const a={question:e,socketIOClientId:K,chatSessionId:$,tenant_domain:_.props.tenant_domain,asset_id:o.asset.id,lease_id:o.lease.id};try{const t="https://wss.leasemate.ai/api/v1/chat";x.value.jwt_token||await Q(),await T.post(t,a,{headers:{Authorization:"Bearer "+x.value.jwt_token}}).then(function(v){T.post(route("assets.leases.chats.store",[o.asset.id,o.lease.id,$]),{from:"bot",message:v.data.text}).then(function(M){l.value.chat_uuid||S.visit(route("assets.leases.chats.index",[o.asset.id,o.lease.id,$]),{preserveScroll:!0})}).catch(function(M){n.value=!1,i.value=M.response.data.error})}).catch(async function(v){v.response.data.error_name=="TokenExpiredError"?(await Q(),await q(e)):(n.value=!1,i.value=v.message)})}catch(t){n.value=!1,i.value=t,console.error("Error sending query: ",t)}},Q=async()=>{await T.post(route("refresh-token")).then(function(e){x.value.jwt_token=e.data.token}).catch(function(e){console.log(e)})};return ke(Me),Se({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf"]}),he(()=>{I.value.focus(),Echo.private(`tenant-global-channel.${_.props.tenant_id}`).listen("FileStatusUpdate",e=>{S.reload({only:["leases"]})}),G(()=>{D()}),z(),f.on("connect",()=>{K=f.id}),f.on("start",()=>{}),f.on("token",e=>{if(C=l.value.messages[l.value.messages.length-1],d+=e,d.length>=H){n.value=!1;let a=d.lastIndexOf(" ",H);a===-1&&(a=H);const t=d.slice(0,a+1);C&&(C.from=="user"?l.value.messages.push({from:"bot",message:t}):C.message+=t),D(),d=d.slice(a+1)}}),f.on("sourceDocuments",e=>{}),f.on("end",()=>{d.trim().length>0&&(C.message+=d),d=""})}),me(()=>{x.value&&Echo.leave(`tenant-global-channel.${_.props.tenant_id}`)}),fe(()=>{f.disconnect()}),(e,a)=>(h(),m(N,null,[r(J(pe),{title:"Asset"}),r(xe,null,{header:g(()=>[y(" Asset - "+b(c.asset.name),1)]),default:g(()=>[r($e,{asset:c.asset},null,8,["asset"]),r(De,{associates:c.associates},null,8,["associates"]),r(we,{href:e.route("assets.leases.show",[c.asset,c.lease]),class:"my-4"},{default:g(()=>[r(Ee,{class:"bx-arrow-back mr-2"}),y("Lease Abstract")]),_:1},8,["href"]),s("div",Le,[s("h3",null,b(c.lease.tenant_name),1),s("h4",null,b(c.lease.address),1)]),s("div",Ne,[s("div",Ve,[s("div",Ae,[s("div",He,[s("div",Ke,[r(Te,{class:"mb-4",onClick:ae},{default:g(()=>[Ue,y(" Chat ")]),_:1}),(h(!0),m(N,null,W(F.value,(t,v)=>{var M;return h(),m("div",{key:t.id,onClick:ue=>oe(t),class:O([{"bg-slate-50":l.value&&l.value.chat_uuid===t.chat_uuid},"transition duration-300 mb-4 p-4 hover:bg-slate-100 rounded-lg cursor-pointer border-b shadow"])},[s("div",ze,[s("div",je,[y(b(re((M=t==null?void 0:t.last_message)==null?void 0:M.message)||null)+" ",1),qe]),s("i",{onClick:_e(ue=>ne(t),["stop"]),class:"mdi mdi-trash-can text-sm text-gray-400 hover:text-red-500 cursor-pointer"},null,8,Qe)]),s("div",Re,b(t.updated_at),1)],10,Ze)}),128))])]),s("div",Ge,[s("div",{ref_key:"messagesPanel",ref:U,class:"flex-1 overflow-y-auto mb-4 space-y-3"},[l.value&&l.value.messages?(h(!0),m(N,{key:0},W(l.value.messages,(t,v)=>(h(),m("div",{key:v},[s("div",{class:O(["flex flex-row",{"justify-start ":t.from==="bot","justify-end":t.from==="user"}])},[s("div",{class:O(["flex flex-col break-words max-w-[90%] flex-shrink-0",{"items-start ":t.from==="bot","items-end":t.from==="user"}])},[s("div",{class:O(["message-bubble flex items-center px-3 py-2 h-auto",{"bg-gray-100 text-gray-700 rounded-2xl rounded-bl-none":t.from==="bot","bg-violet-500 text-white rounded-2xl rounded-br-none":t.from==="user"}])},[r(J(Ce),{source:t.message,breaks:!0},null,8,["source"])],2)],2)],2)]))),128)):V("",!0),n.value?(h(),m("div",Je,[s("div",We,[r(be)])])):V("",!0)],512),s("div",Xe,[s("div",Ye,[A(s("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>p.value=t),class:"min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50",style:ge([{resize:"none"},{height:w.value+"px"}]),placeholder:"Type a message...",autocomplete:"off",rows:"1",ref_key:"messageField",ref:I,onKeydown:se,onPaste:te},null,36),[[ve,p.value]]),s("button",{disabled:n.value,onClick:j},[A((h(),m("svg",ss,ls,512)),[[X,!n.value]]),A((h(),m("svg",ns,us,512)),[[X,n.value]])],8,es)])]),i.value?(h(),m("div",cs,[s("span",ds,b(i.value),1)])):V("",!0)])])])]),r(Be,{show:L.value,onClose:E},{default:g(()=>[s("div",hs,[ms,s("div",fs,[r(Ie,{onClick:E},{default:g(()=>[y(" Cancel ")]),_:1}),r(Pe,{class:"ml-3",onClick:a[1]||(a[1]=t=>le(l.value))},{default:g(()=>[y(" Delete Chat ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{Fs as default};
