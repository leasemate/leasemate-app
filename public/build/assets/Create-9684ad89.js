import{m as d,K as u,o as c,f as m,a as l,u as s,w as t,F as f,Z as _,d as g,b as F}from"./app-6afb21a6.js";import{_ as v}from"./AuthenticatedLayout-e29f8a2e.js";import{V,p as y,s as h}from"./filepond-plugin-file-validate-type.esm-06fb4e0e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./feather-a0fe5b01.js";const w={class:"py-6"},C={__name:"Create",setup(x){const i=V(y),r=d([]);let e="";const n=()=>{};return h({credits:[],required:!0,allowMultiple:!0,allowRevert:!1,acceptedFileTypes:["application/pdf","image/png","image/jpeg","image/jpg","image/gif"],server:{process:{url:"/file-upload",headers:{Accept:"application/json","X-CSRF-TOKEN":u().props.csrf},onerror:a=>{e=JSON.parse(a)}}},labelFileProcessingError:a=>(console.log(a),e.errors&&e.errors.upload_file?e.errors.upload_file.join(" "):e.message)}),(a,o)=>(c(),m(f,null,[l(s(_),{title:"File Upload"}),l(v,null,{header:t(()=>[g(" File Upload ")]),default:t(()=>[F("div",w,[l(s(i),{name:"upload_file",ref:"pond","class-name":"my-file-upload","label-idle":"Drag & Drop your PDF files here or <span class='filepond--label-action'>Browse</span>",modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=p=>r.value=p),onInit:n},null,8,["modelValue"])])]),_:1})],64))}};export{C as default};
