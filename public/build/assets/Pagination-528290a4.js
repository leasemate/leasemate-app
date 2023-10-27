import{o as s,f as n,b as e,d as a,t as l,c as r,w as c,u as o,j as d,g as f,F as g,s as m,n as x}from"./app-b527ca51.js";const h={key:0,class:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"},y={class:"flex flex-1 justify-between sm:hidden"},v={class:"text-sm text-gray-700"},b={class:"font-medium"},_={class:"font-medium"},p={class:"font-medium"},w={key:0,class:"rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 pointer-events-none"},k={key:2,class:"rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-50 pointer-events-none"},z={class:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"},L={class:"text-sm text-gray-700"},B={class:"font-medium"},M={class:"font-medium"},N={class:"font-medium"},j={class:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},C=e("span",{class:"sr-only"},"Previous",-1),P=e("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"})],-1),T={key:0},H=["innerHTML"],S=e("span",{class:"sr-only"},"Next",-1),V=e("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})],-1),E={__name:"Pagination",props:{dataset:{type:Object,required:!0}},setup(t){return(F,q)=>(s(),n("div",null,[t.dataset.links.length>3?(s(),n("div",h,[e("div",y,[e("div",null,[e("p",v,[a(" Showing "),e("span",b,l(t.dataset.from),1),a(" to "),e("span",_,l(t.dataset.to),1),a(" of "),e("span",p,l(t.dataset.total),1),a(" results ")])]),t.dataset.prev_page_url===null?(s(),n("div",w," Previous ")):(s(),r(o(d),{key:1,disabled:t.dataset.prev_page_url===null,href:t.dataset.prev_page_url,class:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},{default:c(()=>[a("Previous")]),_:1},8,["disabled","href"])),t.dataset.next_page_url===null?(s(),n("div",k," Next ")):(s(),r(o(d),{key:3,disabled:t.dataset.next_page_url===null,href:t.dataset.next_page_url,class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},{default:c(()=>[a("Next")]),_:1},8,["disabled","href"]))]),e("div",z,[e("div",null,[e("p",L,[a(" Showing "),e("span",B,l(t.dataset.from),1),a(" to "),e("span",M,l(t.dataset.to),1),a(" of "),e("span",N,l(t.dataset.total),1),a(" results ")])]),e("div",null,[e("nav",j,[t.dataset.prev_page_url!==null?(s(),r(o(d),{key:0,href:t.dataset.prev_page_url,class:"relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"},{default:c(()=>[C,P]),_:1},8,["href"])):f("",!0),(s(!0),n(g,null,m(t.dataset.links,(i,u)=>(s(),n(g,null,[u!==0&&u!==t.dataset.links.length-1?(s(),n("div",T,[i.url===null?(s(),n("div",{key:u,class:"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300",innerHTML:i.label},null,8,H)):(s(),r(o(d),{key:`link-${u}`,class:x({"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0":!i.active,"relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":i.active}),href:i.url,innerHTML:i.label},null,8,["class","href","innerHTML"]))])):f("",!0)],64))),256)),t.dataset.next_page_url!==null?(s(),r(o(d),{key:1,href:t.dataset.next_page_url,class:"relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"},{default:c(()=>[S,V]),_:1},8,["href"])):f("",!0)])])])])):f("",!0)]))}};export{E as _};
