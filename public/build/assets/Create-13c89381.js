import{r as d,K as u,o as c,d as m,b as r,u as s,w as t,F as f,Z as _,f as g,a as F}from"./app-31bc7d92.js";import{_ as v}from"./AuthenticatedLayout-563ec2df.js";import{V,p as y,s as h}from"./filepond.min-ce43d72f.js";import"./toast-75c883e5.js";import"./DropdownLink-090e337c.js";import"./ToastList-2e562bbe.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"py-6"},E={__name:"Create",setup(x){const i=V(y),l=d([]);let e="";const n=()=>{};return h({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf","image/png","image/jpeg","image/jpg","image/gif"],server:{process:{url:"/file-upload",headers:{Accept:"application/json","X-CSRF-TOKEN":u().props.csrf},onerror:a=>{e=JSON.parse(a)}}},labelFileProcessingError:a=>(console.log(a),e.errors&&e.errors.upload_file?e.errors.upload_file.join(" "):e.message)}),(a,o)=>(c(),m(f,null,[r(s(_),{title:"File Upload"}),r(v,null,{header:t(()=>[g(" File Upload ")]),default:t(()=>[F("div",w,[r(s(i),{name:"upload_file",ref:"pond","class-name":"my-file-upload","label-idle":"Drag & Drop your PDF files here or <span class='filepond--label-action'>Browse</span>",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=p=>l.value=p),onInit:n},null,8,["modelValue"])])]),_:1})],64))}};export{E as default};
