import{o,f as n,b as e,m as l,K as J,p as Q,k as W,a as d,u as X,w as _,F as b,Z as Y,d as f,q as N,g as k,i as M,s as j,x as ee,y as O,t as g,O as p,z as te,n as x,e as se}from"./app-f2fc7051.js";import{_ as ae}from"./AuthenticatedLayout-9bba2b83.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as oe,a as ne,D as ie}from"./DangerButton-e6eadebe.js";import"./feather-47865df7.js";const re={},ce={class:"flex justify-center"},ue=e("div",{class:"dot animate-loader"},null,-1),de=e("div",{class:"dot animate-loader animation-delay-200"},null,-1),he=e("div",{class:"dot animate-loader animation-delay-400"},null,-1),ve=[ue,de,he];function me(h,V){return o(),n("div",ce,ve)}const _e=le(re,[["render",me]]),fe={class:"card"},ge={class:"flex max-h-[42rem] min-h-[32rem] mt-auto mb-auto bg-gray-100 rounded-lg bg-white"},pe={class:"w-1/3 p-4"},xe=e("i",{class:"bx bx-plus text-16 align-middle ltr:mr-1 rtl:ml-1"},null,-1),we=e("hr",{class:"mb-4"},null,-1),Ce={class:"max-h-[36rem] overflow-y-auto"},ye=["onClick"],be=e("i",{class:"mgc_chat_2_line text-2xl mr-3 text-gray-400"},null,-1),ke={class:"flex-1 mr-3"},Me={class:"text-sm text-gray-500"},De={class:"text-xs text-gray-400 mr-3 whitespace-nowrap"},$e=["onClick"],Se={class:"flex flex-col w-2/3 p-4 border-l"},Te={key:0},Be={key:1,class:"my-1 sm:my-1.5"},Ee={class:"flex flex-col items-start"},Pe={class:"border-t pt-4"},Ke={class:"relative"},Ne=["disabled"],Oe={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80"},Ve=e("path",{d:"M12 5l0 14"},null,-1),ze=e("path",{d:"M18 11l-6 -6"},null,-1),Fe=e("path",{d:"M6 11l6 -6"},null,-1),Le=[Ve,ze,Fe],Ze={"aria-hidden":"true",role:"status",class:"absolute text-white animate-spin right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-violet-500 text-white hover:opacity-80",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},He=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"},null,-1),qe=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"},null,-1),Ae=[He,qe],Ie={key:0,class:"text-red-700",role:"alert"},Re={class:"block sm:inline"},Ue={class:"p-6"},Ge=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this chat? ",-1),Je={class:"mt-6 flex justify-end"},D=40,et={__name:"Index",props:{chat:{type:Object,default:null},chats:{type:Object,default:()=>({})}},setup(h){const{chats:V,chat:z}=h;l(!0);const F=J();l("");const v=l(D),c=l(""),w=l(null),r=l(!1),u=l(null),$=l(null),S=()=>({chat_uuid:0,messages:[]}),i=l(S()),T=Q(z,"data");T.value&&(i.value=T.value);const m=l(null),C=l(!1),L=t=>{C.value=!0,m.value=t},y=()=>{C.value=!1,m.value=null},Z=t=>{u.value=null,t.key==="Enter"&&t.shiftKey&&(v.value+=30),t.key==="Enter"&&!t.shiftKey&&!r.value&&(t.preventDefault(),B())},H=t=>{u.value=null,t.target.value;const a=t.clipboardData.getData("text/plain"),s=a.split(`
`).length;a.includes(`
`)?v.value=Math.min(s*30,250):v.value=D},q=()=>c.value.trim()===""?(u.value="Please enter a message",r.value=!1,w.value.focus(),!1):!0,B=async()=>{if(q()){u.value=null;const t=i.value.chat_uuid!=0?i.value.chat_uuid:null;p.visit(route("chats.store",t),{method:"post",data:{message:c.value},preserveScroll:!0,onStart:a=>{r.value=!0,v.value=D,i.value.messages.push({from:"user",message:c.value}),c.value="",te(()=>{E()})}})}},A=()=>{p.visit(route("chats.index"))},E=()=>{const t=$.value;t.scrollTop=t.scrollHeight},I=async t=>{t.chat_uuid&&p.visit(route("chats.show",t.chat_uuid),{preserveScroll:!0})},R=()=>{m.value&&p.delete(route("chats.destroy",m.value.chat_uuid),{preserveScroll:!0,onSuccess:()=>{i.value=S(),m.value=null,y()}})},U=t=>{if(!t)return null;const a=38;return t.length>a?t.slice(0,a)+"...":t};return W(()=>{w.value.focus(),E(),console.log("props"),console.log(F.props)}),(t,a)=>(o(),n(b,null,[d(X(Y),{title:"Chat"}),d(ae,null,{header:_(()=>[f("Chats")]),default:_(()=>[e("div",fe,[e("div",ge,[e("div",pe,[e("button",{onClick:A,type:"button",class:"mb-4 btn text-white bg-violet-500 border-violet-500 hover:bg-violet-600 hover:border-violet-600 focus:bg-violet-600 focus:border-violet-600 focus:ring focus:ring-violet-500/30 active:bg-violet-600 active:border-violet-600"},[xe,f(" Chat ")]),we,e("div",Ce,[(o(!0),n(b,null,N(h.chats.data,(s,P)=>{var K;return o(),n("div",{key:s.id,class:x([{"bg-slate-50":h.chat&&h.chat.data.chat_uuid===s.chat_uuid},"transition duration-300 flex justify-between items-center mb-4 p-4 hover:bg-slate-100 rounded-lg cursor-pointer border-b shadow"]),onClick:G=>I(s)},[be,e("div",ke,[e("p",Me,g(U((K=s==null?void 0:s.last_message)==null?void 0:K.message)||null),1)]),e("div",De,g(s.updated_at),1),e("i",{onClick:se(G=>L(s),["stop"]),class:"mdi mdi-trash-can text-sm text-gray-400 hover:text-red-500 cursor-pointer"},null,8,$e)],10,ye)}),128))])]),e("div",Se,[e("div",{ref_key:"messagesPanel",ref:$,class:"flex-1 overflow-y-auto mb-4"},[i.value&&i.value.messages?(o(),n("div",Te,[(o(!0),n(b,null,N(i.value.messages,(s,P)=>(o(),n("div",{key:P,class:"my-1 sm:my-1.5"},[e("div",{class:x(["flex flex-row",{"justify-start ":s.from==="bot","justify-end":s.from==="user"}])},[e("div",{class:x(["flex flex-col break-words max-w-[90%] flex-shrink-0",{"items-start ":s.from==="bot","items-end":s.from==="user"}])},[e("div",{class:x(["flex items-center px-3 py-2 whitespace-pre-wrap",{"bg-neutral-50 text-neutral-900 rounded-2xl rounded-bl-none":s.from==="bot","bg-violet-500 text-white rounded-2xl rounded-br-none":s.from==="user"}])},g(s.message),3)],2)],2)]))),128))])):k("",!0),r.value?(o(),n("div",Be,[e("div",Ee,[d(_e)])])):k("",!0)],512),e("div",Pe,[e("div",Ke,[M(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=s=>c.value=s),class:"min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200",style:ee([{resize:"none"},{height:v.value+"px"}]),placeholder:"Type a message...",rows:"1",ref_key:"messageField",ref:w,onKeydown:Z,onPaste:H},null,36),[[j,c.value]]),e("button",{disabled:r.value,onClick:B},[M((o(),n("svg",Oe,Le,512)),[[O,!r.value]]),M((o(),n("svg",Ze,Ae,512)),[[O,r.value]])],8,Ne)])]),u.value?(o(),n("div",Ie,[e("span",Re,g(u.value),1)])):k("",!0)])])]),d(oe,{show:C.value,onClose:y},{default:_(()=>[e("div",Ue,[Ge,e("div",Je,[d(ne,{onClick:y},{default:_(()=>[f(" Cancel ")]),_:1}),d(ie,{class:"ml-3",onClick:a[1]||(a[1]=s=>R(i.value))},{default:_(()=>[f(" Delete Chat ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{et as default};
