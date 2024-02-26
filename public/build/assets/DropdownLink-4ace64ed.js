import{r as b,j as w,R as x,h as f,o as r,d,a as l,A as o,aQ as g,u as n,m as y,q as v,b as $,w as m,n as p,S as C,c as S,I as E}from"./app-7876be77.js";const B={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white","dark:bg-gray-700"]}},setup(t){const a=t;let e=b(!1);const u=i=>{e.value&&i.key==="Escape"&&(e.value=!1)};w(()=>{document.addEventListener("keydown",u)}),x(()=>{document.removeEventListener("keydown",u)});const k=f(()=>({48:"w-48"})[a.width.toString()]),h=f(()=>a.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":a.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(i,s)=>(r(),d("div",B,[l("div",{ref:"trigger",onClick:s[0]||(s[0]=c=>g(e)?e.value=!n(e):e=!n(e))},[o(i.$slots,"trigger")],512),y(l("div",{class:"fixed inset-0 z-40",onClick:s[1]||(s[1]=c=>g(e)?e.value=!1:e=!1)},null,512),[[v,n(e)]]),$(C,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:m(()=>[y(l("div",{ref:"dropdown",class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[k.value,h.value]]),style:{display:"none"},onClick:s[2]||(s[2]=c=>g(e)?e.value=!1:e=!1)},[l("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[o(i.$slots,"content")],2)],2),[[v,n(e)]])]),_:3})]))}},z={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},D=["href"],N={__name:"DropdownLink",props:{href:String,as:String},setup(t){return(a,e)=>(r(),d("div",null,[t.as=="button"?(r(),d("button",z,[o(a.$slots,"default")])):t.as=="a"?(r(),d("a",{key:1,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[o(a.$slots,"default")],8,D)):(r(),S(n(E),{key:2,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:m(()=>[o(a.$slots,"default")]),_:3},8,["href"]))]))}};export{N as _,A as a};
