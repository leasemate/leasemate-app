import{r as c,q as p,o as f,c as m,w as g,a as s,t as i,k as v,x as _}from"./app-87377a4a.js";import{_ as h}from"./AuthenticatedLayout-d79ee3ae.js";import{l as y}from"./index-fb0b8ccc.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=s("h1",null,"Flowise test",-1),k={class:"p-4"},b={class:"mt-2"},T={__name:"FlowiseTest",setup(C){const o=y("https://flowise-3n4j.onrender.com"),r=c(""),l=c("Connecting..."),u=c(""),a=c("");o.on("connect",()=>{r.value=o.id,l.value="Connected!"}),o.on("start",()=>{l.value="Started!",console.log("start")}),o.on("token",(t,e)=>{console.log(e),u.value+=t,console.log("token:",t)}),o.on("sourceDocuments",t=>{console.log("sourceDocuments:",t)}),o.on("end",()=>{l.value="Disconnected!",console.log("end")});async function d(t){u.value="";const e=JSON.stringify({question:a.value,socketIOClientId:r.value,overrideConfig:{session_id:"0feefc5efd8c438a9bab1f11a372883c",system_message:"You are a helpful assistant. You search for information contained in various sources using your available tools. If you do not know the answer, tell them. Do not guess. Pass the user_id 2 to all custom tools."}});console.log(e);try{return console.log("socketIOClientId:",r.value),console.log("query function called"),await(await fetch("https://flowise-3n4j.onrender.com/api/v1/prediction/62937235-a175-45e9-9e93-ea9d72a5f01c",{method:"POST",body:e,headers:{"Content-Type":"application/json"}})).json()}catch(n){throw console.error(n),n}}return p(async()=>{console.log(o)}),(t,e)=>(f(),m(h,null,{default:g(()=>[w,s("p",null,"WebSocket Status: "+i(l.value),1),s("div",k,[v(s("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),class:"w-full px-3 py-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300",placeholder:"Type something..."},null,512),[[_,a.value]]),s("p",b,"You typed: "+i(a.value),1)]),s("button",{onClick:d,class:"btn"},"Get message"),s("p",null,i(u.value),1)]),_:1}))}};export{T as default};
