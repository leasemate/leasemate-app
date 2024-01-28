import{r as b,y as w,P as x,s as f,o as r,d,a as l,j as o,aJ as u,u as n,i as y,v,b as $,w as k,n as p,q as C,c as S,L as E}from"./app-474186b5.js";const B={class:"relative"},N={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white","dark:bg-gray-700"]}},setup(t){const a=t;let e=b(!1);const g=i=>{e.value&&i.key==="Escape"&&(e.value=!1)};w(()=>document.addEventListener("keydown",g)),x(()=>document.removeEventListener("keydown",g));const m=f(()=>({48:"w-48"})[a.width.toString()]),h=f(()=>a.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":a.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(i,s)=>(r(),d("div",B,[l("div",{onClick:s[0]||(s[0]=c=>u(e)?e.value=!n(e):e=!n(e))},[o(i.$slots,"trigger")]),y(l("div",{class:"fixed inset-0 z-40",onClick:s[1]||(s[1]=c=>u(e)?e.value=!1:e=!1)},null,512),[[v,n(e)]]),$(C,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:k(()=>[y(l("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[m.value,h.value]]),style:{display:"none"},onClick:s[2]||(s[2]=c=>u(e)?e.value=!1:e=!1)},[l("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[o(i.$slots,"content")],2)],2),[[v,n(e)]])]),_:3})]))}},L={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},z=["href"],V={__name:"DropdownLink",props:{href:String,as:String},setup(t){return(a,e)=>(r(),d("div",null,[t.as=="button"?(r(),d("button",L,[o(a.$slots,"default")])):t.as=="a"?(r(),d("a",{key:1,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[o(a.$slots,"default")],8,z)):(r(),S(n(E),{key:2,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:k(()=>[o(a.$slots,"default")]),_:3},8,["href"]))]))}};export{V as _,N as a};
