import{o,f as n,b as e,k as a,l as G,m as J,a as d,u as Q,w as m,F as b,Z as W,d as w,t as v,g as k,p as N,i as M,q as X,s as Y,x as O,O as g,y as j,n as p,e as ee}from"./app-1e0d98a3.js";import{A as te}from"./AuthenticatedLayout-d6303dbe.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as le,a as ae,D as oe}from"./DangerButton-1f310d70.js";const ne={},re={class:"flex justify-center"},ie=e("div",{class:"dot animate-loader"},null,-1),ue=e("div",{class:"dot animate-loader animation-delay-200"},null,-1),ce=e("div",{class:"dot animate-loader animation-delay-400"},null,-1),de=[ie,ue,ce];function he(h,V){return o(),n("div",re,de)}const _e=se(ne,[["render",he]]),fe={key:0,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},me={class:"block sm:inline"},ve={class:"absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"},ge={class:"flex h-[52rem] mt-auto mb-auto bg-gray-100 rounded-lg border border-neutral-300 bg-white"},pe={class:"w-1/3 p-4 overflow-y-auto"},xe=e("i",{class:"mgc_add_line text-base mr-2"},null,-1),ye=e("span",{class:"font-bold"},"Chat",-1),Ce=[xe,ye],be=e("hr",{class:"mb-4"},null,-1),we=["onClick"],ke=e("i",{class:"mgc_chat_2_line text-2xl mr-3 text-gray-400"},null,-1),Me={class:"flex-1 mr-3"},De={class:"text-sm text-gray-500"},$e={class:"text-xs text-gray-400 mr-3 whitespace-nowrap"},Se=["onClick"],Te={class:"flex flex-col w-2/3 p-4 border-l"},Be={key:0},Ee={key:1,class:"my-1 sm:my-1.5"},Pe={class:"flex flex-col items-start"},Le={class:"border-t pt-4"},Ne={class:"relative"},Oe=["disabled"],Ve={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80"},Fe=e("path",{d:"M12 5l0 14"},null,-1),Ke=e("path",{d:"M18 11l-6 -6"},null,-1),Ze=e("path",{d:"M6 11l6 -6"},null,-1),ze=[Fe,Ke,Ze],Ae={"aria-hidden":"true",role:"status",class:"absolute text-white animate-spin right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},He=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"},null,-1),qe=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"},null,-1),Ie=[He,qe],Re={class:"p-6"},Ue=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this chat? ",-1),Ge={class:"mt-6 flex justify-end"},D=40,Ye={__name:"Index",props:{chat:{type:Object,default:null},chats:{type:Object,default:()=>({})}},setup(h){const{chats:V,chat:F}=h;a(!0),a("");const _=a(D),c=a(""),x=a(null),i=a(!1),u=a(null),$=a(null),S=()=>({chat_uuid:0,messages:[]}),r=a(S()),T=G(F,"data");T.value&&(r.value=T.value);const f=a(null),y=a(!1),K=t=>{y.value=!0,f.value=t},C=()=>{y.value=!1,f.value=null},Z=t=>{u.value=null,t.key==="Enter"&&t.shiftKey&&(_.value+=30),t.key==="Enter"&&!t.shiftKey&&!i.value&&(t.preventDefault(),B())},z=t=>{u.value=null,t.target.value;const l=t.clipboardData.getData("text/plain"),s=l.split(`
`).length;l.includes(`
`)?_.value=Math.min(s*30,250):_.value=D},A=()=>c.value.trim()===""?(u.value="Please enter a message",i.value=!1,x.value.focus(),!1):!0,B=async()=>{A()&&(u.value=null,console.log(r.value),g.visit(route("chats.store",r.value.chat_uuid!=0?r.value.chat_uuid:null),{method:"post",data:{message:c.value},preserveScroll:!0,onStart:t=>{i.value=!0,_.value=D,r.value.messages.push({from:"user",message:c.value}),c.value="",j(()=>{E()})}}))},H=()=>{g.visit(route("chats.index"))},E=()=>{const t=$.value;t.scrollTop=t.scrollHeight},q=async t=>{t.chat_uuid&&g.visit(route("chats.show",t.chat_uuid),{preserveScroll:!0})},I=()=>{f.value&&g.delete(route("chats.destroy",f.value.chat_uuid),{preserveScroll:!0,onSuccess:()=>{r.value=S(),f.value=null,C()}})},R=t=>{if(!t)return null;const l=38;return t.length>l?t.slice(0,l)+"...":t};return J(()=>{x.value.focus(),E()}),(t,l)=>(o(),n(b,null,[d(Q(W),{title:"Chat"}),d(te,null,{header:m(()=>[w(" Chat ")]),default:m(()=>[u.value?(o(),n("div",fe,[e("span",me,v(u.value),1),e("span",ve,[e("i",{onClick:l[0]||(l[0]=s=>u.value=null),class:"mgc_close_fill"})])])):k("",!0),e("div",ge,[e("div",pe,[e("button",{onClick:H,class:"flex items-center mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"},Ce),be,(o(!0),n(b,null,N(h.chats.data,(s,P)=>{var L;return o(),n("div",{key:s.id,class:p([{"bg-gray-50":h.chat&&h.chat.data.chat_uuid===s.chat_uuid},"transition duration-300 flex justify-between items-center mb-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer border-b shadow"]),onClick:U=>q(s)},[ke,e("div",Me,[e("p",De,v(R((L=s==null?void 0:s.last_message)==null?void 0:L.message)||null),1)]),e("div",$e,v(s.updated_at),1),e("i",{onClick:ee(U=>K(s),["stop"]),class:"mgc_close_fill text-sm text-gray-400 hover:text-red-500 cursor-pointer"},null,8,Se)],10,we)}),128))]),e("div",Te,[e("div",{ref_key:"messagesPanel",ref:$,class:"flex-1 overflow-y-auto mb-4"},[r.value&&r.value.messages?(o(),n("div",Be,[(o(!0),n(b,null,N(r.value.messages,(s,P)=>(o(),n("div",{key:P,class:"my-1 sm:my-1.5"},[e("div",{class:p(["flex flex-row",{"justify-start ":s.from==="bot","justify-end":s.from==="user"}])},[e("div",{class:p(["flex flex-col break-words max-w-[90%] flex-shrink-0",{"items-start ":s.from==="bot","items-end":s.from==="user"}])},[e("div",{class:p(["flex items-center px-3 py-2 whitespace-pre-wrap",{"bg-neutral-200 text-neutral-900 rounded-2xl rounded-bl-none":s.from==="bot","bg-blue-500 text-white rounded-2xl rounded-br-none":s.from==="user"}])},v(s.message),3)],2)],2)]))),128))])):k("",!0),i.value?(o(),n("div",Ee,[e("div",Pe,[d(_e)])])):k("",!0)],512),e("div",Le,[e("div",Ne,[M(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=s=>c.value=s),class:"min-h-[44px] rounded-lg pl-4 pr-12 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200",style:Y([{resize:"none"},{height:_.value+"px"}]),placeholder:"Type a message...",rows:"1",ref_key:"messageField",ref:x,onKeydown:Z,onPaste:z},null,36),[[X,c.value]]),e("button",{disabled:i.value,onClick:B},[M((o(),n("svg",Ve,ze,512)),[[O,!i.value]]),M((o(),n("svg",Ae,Ie,512)),[[O,i.value]])],8,Oe)])])])]),d(le,{show:y.value,onClose:C},{default:m(()=>[e("div",Re,[Ue,e("div",Ge,[d(ae,{onClick:C},{default:m(()=>[w(" Cancel ")]),_:1}),d(oe,{class:"ml-3",onClick:l[2]||(l[2]=s=>I(r.value))},{default:m(()=>[w(" Delete Chat ")]),_:1})])])]),_:1},8,["show"])]),_:1})],64))}};export{Ye as default};
