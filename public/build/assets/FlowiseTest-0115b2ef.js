import{r as c,y as p,c as m,w as f,o as g,a as t,t as i,i as v,C as _}from"./app-d65009b5.js";import{_ as h}from"./AuthenticatedLayout-b5f6bc6a.js";import{l as y}from"./index-e3f35709.js";import"./toast-098c2d48.js";import"./DropdownLink-93c9ebe1.js";import"./index-5e9cefb1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ToastList-dd5ba456.js";const w=t("h1",null,"Flowise test",-1),k={class:"p-4"},b={class:"mt-2"},V={__name:"FlowiseTest",setup(C){const o=y("https://flowise-3n4j.onrender.com"),r=c(""),l=c("Connecting..."),u=c(""),a=c("");o.on("connect",()=>{r.value=o.id,l.value="Connected!"}),o.on("start",()=>{l.value="Started!",console.log("start")}),o.on("token",(s,e)=>{console.log(e),u.value+=s,console.log("token:",s)}),o.on("sourceDocuments",s=>{console.log("sourceDocuments:",s)}),o.on("end",()=>{l.value="Disconnected!",console.log("end")});async function d(s){u.value="";const e=JSON.stringify({question:a.value,socketIOClientId:r.value,overrideConfig:{session_id:"0feefc5efd8c438a9bab1f11a372883c",system_message:"You are a helpful assistant. You search for information contained in various sources using your available tools. If you do not know the answer, tell them. Do not guess. Pass the user_id 2 to all custom tools."}});console.log(e);try{return console.log("socketIOClientId:",r.value),console.log("query function called"),await(await fetch("https://flowise-3n4j.onrender.com/api/v1/prediction/62937235-a175-45e9-9e93-ea9d72a5f01c",{method:"POST",body:e,headers:{"Content-Type":"application/json"}})).json()}catch(n){throw console.error(n),n}}return p(async()=>{console.log(o)}),(s,e)=>(g(),m(h,null,{default:f(()=>[w,t("p",null,"WebSocket Status: "+i(l.value),1),t("div",k,[v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),class:"w-full px-3 py-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300",placeholder:"Type something..."},null,512),[[_,a.value]]),t("p",b,"You typed: "+i(a.value),1)]),t("button",{onClick:d,class:"btn"},"Get message"),t("p",null,i(u.value),1)]),_:1}))}};export{V as default};
