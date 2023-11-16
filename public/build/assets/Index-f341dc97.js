import{_ as E,t as P,h as U,f as j}from"./AuthenticatedLayout-b6fe85e7.js";import{o,c as y,w as l,r as S,u as p,j as $,K as O,h as A,m as v,C as L,k as R,O as F,D as T,f as i,a as r,F as D,Z as Y,d as g,b as e,t as u,g as m,s as z,n as I}from"./app-24e588ed.js";import{V as K,p as q,s as J}from"./filepond-plugin-file-validate-type.esm-61e366ed.js";import{_ as X}from"./Pagination-f7a395da.js";import{_ as Z,a as G,D as C}from"./DangerButton-8a58396b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./feather-9c13dfc8.js";const H={__name:"SuccessLink",props:{type:{type:String,default:"button"}},setup(a){return(d,h)=>(o(),y(p($),{type:a.type,class:"btn text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-500/30 active:bg-green-600 active:border-green-600"},{default:l(()=>[S(d.$slots,"default")]),_:3},8,["type"]))}},Q={__name:"PrimaryLink",setup(a){return(d,h)=>(o(),y(p($),{class:"btn text-white bg-violet-500 border-violet-500 hover:bg-violet-600 hover:border-violet-600 focus:bg-violet-600 focus:border-violet-600 focus:ring focus:ring-violet-500/30 active:bg-violet-600 active:border-violet-600"},{default:l(()=>[S(d.$slots,"default")]),_:3}))}},W={class:"py-6"},ee={key:0,class:"relative flex justify-end mb-4"},te={class:"py-6"},se={key:1,class:"flex flex-col"},oe={class:"overflow-x-auto"},ae={class:"inline-block min-w-full align-middle"},le={class:"overflow-visible"},re={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-600"},ne=e("thead",{class:"bg-gray-50 dark:bg-gray-700"},[e("tr",{class:"text-gray-800 dark:text-gray-300"},[e("th",{scope:"col",class:"p-3.5 text-sm text-start font-semibold min-w-[10rem]"}," File Name "),e("th",{scope:"col",class:"p-3.5 text-sm text-start font-semibold min-w-[10rem]"}," Uploaded "),e("th",{scope:"col",class:"p-3.5 text-sm text-start font-semibold min-w-[6rem]"}," File Size "),e("th",{scope:"col",class:"p-3.5 text-sm text-start font-semibold min-w-[8rem]"}," Status "),e("th",{scope:"col",class:"p-3.5 text-sm text-start font-semibold"})])],-1),ie={class:"divide-y divide-gray-200 dark:divide-gray-600"},de={class:"p-3.5 text-sm text-gray-700 dark:text-gray-400"},ce=["href"],ue={class:"p-3.5 text-sm text-gray-700 dark:text-gray-400"},me={class:"text-xs"},pe={class:"p-3.5 text-sm text-gray-700 dark:text-gray-400"},_e={class:"p-3.5 text-sm text-gray-700 dark:text-gray-400"},fe={key:0,class:"ml-2 spinner-border animate-spin inline-block w-3 h-3 border-[2px] border-l-transparent border-red-400 rounded-full"},ge=e("span",{class:"hidden"},"Loading...",-1),he=[ge],ve={class:"p-3.5"},ye=e("i",{class:"bx bx-trash text-lg"},null,-1),be={key:1},xe={class:"p-6"},ke=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete this document? ",-1),we={class:"mt-6 flex justify-end"},Be={__name:"Index",props:{uploaded_files:{type:Object},archived:{type:Number},trashed_file_count:{type:Number}},setup(a){const d=O(),h=A(()=>d.props.auth.user),{getFileStatusClass:N}=j(),n=v(null),b=v(!1),V=s=>{b.value=!0,n.value=s},x=()=>{b.value=!1},k=v(null),_=L({}),M=async()=>{if(n.value){k.value=n.value.id,_[n.value.id]="Deleting",x();try{await new Promise((s,c)=>{F.delete(route("files.destroy",n.value.id),{preserveScroll:!0,onSuccess:()=>{_[n.value.id]="",n.value=null,k.value=null,s()},onError:()=>{c(new Error("Failed to delete file"))}})})}catch(s){P.error(s),console.log(s)}}},B=K(q),w=v([]);let f="";return J({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf"],server:{process:{url:"/files",headers:{Accept:"application/json","X-CSRF-TOKEN":d.props.csrf},onerror:s=>{console.log("on error"),f=JSON.parse(s)}}},labelFileProcessingError:s=>(console.log(s),f.errors&&f.errors.upload_file?f.errors.upload_file.join(" "):f.message)}),R(()=>{Echo.private(`App.Models.User.${h.value.id}`).listen("FileStatusUpdate",s=>{F.reload({only:["uploaded_files"]})})}),T(()=>{Echo.leave(`App.Models.User.${h.value.id}`)}),(s,c)=>(o(),i(D,null,[r(p(Y),{title:"File Upload"}),r(E,null,{header:l(()=>[g(" Files ")]),default:l(()=>[e("div",W,[a.trashed_file_count?(o(),i("div",ee,[r(Q,{href:s.route("files.index",{archived:!a.archived})},{default:l(()=>[g(u(a.archived?"Current":"Archived")+" Files ",1)]),_:1},8,["href"])])):m("",!0),e("div",te,[a.archived?m("",!0):(o(),y(p(B),{key:0,name:"upload_file",ref:"pond","class-name":"my-file-upload","label-idle":"Drag & Drop your PDF files here or <span class='filepond--label-action'>Browse</span>",modelValue:w.value,"onUpdate:modelValue":c[0]||(c[0]=t=>w.value=t)},null,8,["modelValue"]))]),a.uploaded_files.data.length?(o(),i("div",se,[e("div",oe,[e("div",ae,[e("div",le,[e("table",re,[ne,e("tbody",ie,[(o(!0),i(D,null,z(a.uploaded_files.data,t=>(o(),i("tr",{key:t.id},[e("td",de,[e("a",{href:t.download_link,target:"_blank",rel:"noopener noreferrer",class:"font-medium"},u(t.original_name),9,ce)]),e("td",ue,[e("p",null,u(p(U)(t.created_at).format("MMM DD, YYYY h:mma")),1),e("span",me,"by "+u(t.user.name),1)]),e("td",pe,u(t.size_readable),1),e("td",_e,[e("span",{class:I(["inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",p(N)(_[t.id]==="Deleting"?"Deleting":t.status)])},u(_[t.id]==="Deleting"?"Deleting":t.status),3),_[t.id]==="Deleting"?(o(),i("div",fe,he)):m("",!0)]),e("td",ve,[["Pending","Completed","Failed"].includes(t.status)?(o(),y(C,{key:0,onClick:Fe=>V(t)},{default:l(()=>[ye]),_:2},1032,["onClick"])):m("",!0),t.status=="Deleted"?(o(),i("div",be,[r(H,{href:s.route("files.restore",t),method:"post",as:"button"},{default:l(()=>[g(" Restore ")]),_:2},1032,["href"])])):m("",!0)])]))),128))])])])])])])):m("",!0),r(X,{dataset:a.uploaded_files,class:"mt-4"},null,8,["dataset"]),r(Z,{show:b.value,onClose:x},{default:l(()=>[e("div",xe,[ke,e("div",we,[r(G,{onClick:x},{default:l(()=>[g(" Cancel ")]),_:1}),r(C,{class:"ml-3",onClick:c[1]||(c[1]=t=>M())},{default:l(()=>[g(" Delete ")]),_:1})])])]),_:1},8,["show"])])]),_:1})],64))}};export{Be as default};
