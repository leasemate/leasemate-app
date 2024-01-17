import{bJ as zt,bK as Wt,j as Kt,o as re,d as kt,a as $,n as rt,t as Xt,K as Gt,aO as Qt,c as nt,w as Yt,F as Zt,g as er,u as tr,J as rr}from"./app-31bc7d92.js";import{t as M}from"./toast-75c883e5.js";var Pt={},Pe={exports:{}},Tt=function(e,i){return function(){for(var o=new Array(arguments.length),u=0;u<o.length;u++)o[u]=arguments[u];return e.apply(i,o)}},nr=Tt,V=Object.prototype.toString;function Te(t){return V.call(t)==="[object Array]"}function Oe(t){return typeof t>"u"}function ir(t){return t!==null&&!Oe(t)&&t.constructor!==null&&!Oe(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function or(t){return V.call(t)==="[object ArrayBuffer]"}function ar(t){return typeof FormData<"u"&&t instanceof FormData}function sr(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function ur(t){return typeof t=="string"}function lr(t){return typeof t=="number"}function At(t){return t!==null&&typeof t=="object"}function ne(t){if(V.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function cr(t){return V.call(t)==="[object Date]"}function dr(t){return V.call(t)==="[object File]"}function fr(t){return V.call(t)==="[object Blob]"}function Lt(t){return V.call(t)==="[object Function]"}function hr(t){return At(t)&&Lt(t.pipe)}function pr(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function vr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function mr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ae(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Te(t))for(var i=0,a=t.length;i<a;i++)e.call(null,t[i],i,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function ke(){var t={};function e(o,u){ne(t[u])&&ne(o)?t[u]=ke(t[u],o):ne(o)?t[u]=ke({},o):Te(o)?t[u]=o.slice():t[u]=o}for(var i=0,a=arguments.length;i<a;i++)Ae(arguments[i],e);return t}function gr(t,e,i){return Ae(e,function(o,u){i&&typeof o=="function"?t[u]=nr(o,i):t[u]=o}),t}function yr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var L={isArray:Te,isArrayBuffer:or,isBuffer:ir,isFormData:ar,isArrayBufferView:sr,isString:ur,isNumber:lr,isObject:At,isPlainObject:ne,isUndefined:Oe,isDate:cr,isFile:dr,isBlob:fr,isFunction:Lt,isStream:hr,isURLSearchParams:pr,isStandardBrowserEnv:mr,forEach:Ae,merge:ke,extend:gr,trim:vr,stripBOM:yr},_=L;function it(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var jt=function(e,i,a){if(!i)return e;var o;if(a)o=a(i);else if(_.isURLSearchParams(i))o=i.toString();else{var u=[];_.forEach(i,function(w,f){w===null||typeof w>"u"||(_.isArray(w)?f=f+"[]":w=[w],_.forEach(w,function(R){_.isDate(R)?R=R.toISOString():_.isObject(R)&&(R=JSON.stringify(R)),u.push(it(f)+"="+it(R))}))}),o=u.join("&")}if(o){var d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e},wr=L;function oe(){this.handlers=[]}oe.prototype.use=function(e,i,a){return this.handlers.push({fulfilled:e,rejected:i,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};oe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};oe.prototype.forEach=function(e){wr.forEach(this.handlers,function(a){a!==null&&e(a)})};var br=oe,Sr=L,Er=function(e,i){Sr.forEach(e,function(o,u){u!==i&&u.toUpperCase()===i.toUpperCase()&&(e[i]=o,delete e[u])})},It=function(e,i,a,o,u){return e.config=i,a&&(e.code=a),e.request=o,e.response=u,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},ce,ot;function qt(){if(ot)return ce;ot=1;var t=It;return ce=function(i,a,o,u,d){var p=new Error(i);return t(p,a,o,u,d)},ce}var de,at;function xr(){if(at)return de;at=1;var t=qt();return de=function(i,a,o){var u=o.config.validateStatus;!o.status||!u||u(o.status)?i(o):a(t("Request failed with status code "+o.status,o.config,null,o.request,o))},de}var fe,st;function Cr(){if(st)return fe;st=1;var t=L;return fe=t.isStandardBrowserEnv()?function(){return{write:function(a,o,u,d,p,w){var f=[];f.push(a+"="+encodeURIComponent(o)),t.isNumber(u)&&f.push("expires="+new Date(u).toGMTString()),t.isString(d)&&f.push("path="+d),t.isString(p)&&f.push("domain="+p),w===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(a){var o=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),fe}var he,ut;function Rr(){return ut||(ut=1,he=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),he}var pe,lt;function Or(){return lt||(lt=1,pe=function(e,i){return i?e.replace(/\/+$/,"")+"/"+i.replace(/^\/+/,""):e}),pe}var ve,ct;function kr(){if(ct)return ve;ct=1;var t=Rr(),e=Or();return ve=function(a,o){return a&&!t(o)?e(a,o):o},ve}var me,dt;function Pr(){if(dt)return me;dt=1;var t=L,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return me=function(a){var o={},u,d,p;return a&&t.forEach(a.split(`
`),function(f){if(p=f.indexOf(":"),u=t.trim(f.substr(0,p)).toLowerCase(),d=t.trim(f.substr(p+1)),u){if(o[u]&&e.indexOf(u)>=0)return;u==="set-cookie"?o[u]=(o[u]?o[u]:[]).concat([d]):o[u]=o[u]?o[u]+", "+d:d}}),o},me}var ge,ft;function Tr(){if(ft)return ge;ft=1;var t=L;return ge=t.isStandardBrowserEnv()?function(){var i=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),o;function u(d){var p=d;return i&&(a.setAttribute("href",p),p=a.href),a.setAttribute("href",p),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return o=u(window.location.href),function(p){var w=t.isString(p)?u(p):p;return w.protocol===o.protocol&&w.host===o.host}}():function(){return function(){return!0}}(),ge}var ye,ht;function pt(){if(ht)return ye;ht=1;var t=L,e=xr(),i=Cr(),a=jt,o=kr(),u=Pr(),d=Tr(),p=qt();return ye=function(f){return new Promise(function(R,g){var y=f.data,j=f.headers,T=f.responseType;t.isFormData(y)&&delete j["Content-Type"];var v=new XMLHttpRequest;if(f.auth){var N=f.auth.username||"",K=f.auth.password?unescape(encodeURIComponent(f.auth.password)):"";j.Authorization="Basic "+btoa(N+":"+K)}var X=o(f.baseURL,f.url);v.open(f.method.toUpperCase(),a(X,f.params,f.paramsSerializer),!0),v.timeout=f.timeout;function G(){if(v){var c="getAllResponseHeaders"in v?u(v.getAllResponseHeaders()):null,s=!T||T==="text"||T==="json"?v.responseText:v.response,r={data:s,status:v.status,statusText:v.statusText,headers:c,config:f,request:v};e(R,g,r),v=null}}if("onloadend"in v?v.onloadend=G:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(G)},v.onabort=function(){v&&(g(p("Request aborted",f,"ECONNABORTED",v)),v=null)},v.onerror=function(){g(p("Network Error",f,null,v)),v=null},v.ontimeout=function(){var s="timeout of "+f.timeout+"ms exceeded";f.timeoutErrorMessage&&(s=f.timeoutErrorMessage),g(p(s,f,f.transitional&&f.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},t.isStandardBrowserEnv()){var Q=(f.withCredentials||d(X))&&f.xsrfCookieName?i.read(f.xsrfCookieName):void 0;Q&&(j[f.xsrfHeaderName]=Q)}"setRequestHeader"in v&&t.forEach(j,function(s,r){typeof y>"u"&&r.toLowerCase()==="content-type"?delete j[r]:v.setRequestHeader(r,s)}),t.isUndefined(f.withCredentials)||(v.withCredentials=!!f.withCredentials),T&&T!=="json"&&(v.responseType=f.responseType),typeof f.onDownloadProgress=="function"&&v.addEventListener("progress",f.onDownloadProgress),typeof f.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",f.onUploadProgress),f.cancelToken&&f.cancelToken.promise.then(function(s){v&&(v.abort(),g(s),v=null)}),y||(y=null),v.send(y)})},ye}var k=L,vt=Er,Ar=It,Lr={"Content-Type":"application/x-www-form-urlencoded"};function mt(t,e){!k.isUndefined(t)&&k.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function jr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=pt()),t}function Ir(t,e,i){if(k.isString(t))try{return(e||JSON.parse)(t),k.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(i||JSON.stringify)(t)}var ae={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:jr(),transformRequest:[function(e,i){return vt(i,"Accept"),vt(i,"Content-Type"),k.isFormData(e)||k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)?e:k.isArrayBufferView(e)?e.buffer:k.isURLSearchParams(e)?(mt(i,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):k.isObject(e)||i&&i["Content-Type"]==="application/json"?(mt(i,"application/json"),Ir(e)):e}],transformResponse:[function(e){var i=this.transitional,a=i&&i.silentJSONParsing,o=i&&i.forcedJSONParsing,u=!a&&this.responseType==="json";if(u||o&&k.isString(e)&&e.length)try{return JSON.parse(e)}catch(d){if(u)throw d.name==="SyntaxError"?Ar(d,this,"E_JSON_PARSE"):d}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ae.headers={common:{Accept:"application/json, text/plain, */*"}};k.forEach(["delete","get","head"],function(e){ae.headers[e]={}});k.forEach(["post","put","patch"],function(e){ae.headers[e]=k.merge(Lr)});var Le=ae,qr=L,Nr=Le,Ur=function(e,i,a){var o=this||Nr;return qr.forEach(a,function(d){e=d.call(o,e,i)}),e},we,gt;function Nt(){return gt||(gt=1,we=function(e){return!!(e&&e.__CANCEL__)}),we}var yt=L,be=Ur,Br=Nt(),Dr=Le;function Se(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var Vr=function(e){Se(e),e.headers=e.headers||{},e.data=be.call(e,e.data,e.headers,e.transformRequest),e.headers=yt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),yt.forEach(["delete","get","head","post","put","patch","common"],function(o){delete e.headers[o]});var i=e.adapter||Dr.adapter;return i(e).then(function(o){return Se(e),o.data=be.call(e,o.data,o.headers,e.transformResponse),o},function(o){return Br(o)||(Se(e),o&&o.response&&(o.response.data=be.call(e,o.response.data,o.response.headers,e.transformResponse))),Promise.reject(o)})},P=L,Ut=function(e,i){i=i||{};var a={},o=["url","method","data"],u=["headers","auth","proxy","params"],d=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],p=["validateStatus"];function w(g,y){return P.isPlainObject(g)&&P.isPlainObject(y)?P.merge(g,y):P.isPlainObject(y)?P.merge({},y):P.isArray(y)?y.slice():y}function f(g){P.isUndefined(i[g])?P.isUndefined(e[g])||(a[g]=w(void 0,e[g])):a[g]=w(e[g],i[g])}P.forEach(o,function(y){P.isUndefined(i[y])||(a[y]=w(void 0,i[y]))}),P.forEach(u,f),P.forEach(d,function(y){P.isUndefined(i[y])?P.isUndefined(e[y])||(a[y]=w(void 0,e[y])):a[y]=w(void 0,i[y])}),P.forEach(p,function(y){y in i?a[y]=w(e[y],i[y]):y in e&&(a[y]=w(void 0,e[y]))});var q=o.concat(u).concat(d).concat(p),R=Object.keys(e).concat(Object.keys(i)).filter(function(y){return q.indexOf(y)===-1});return P.forEach(R,f),a};const Fr="axios",Mr="0.21.4",_r="Promise based HTTP client for the browser and node.js",Hr="index.js",$r={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Jr={type:"git",url:"https://github.com/axios/axios.git"},zr=["xhr","http","ajax","promise","node"],Wr="Matt Zabriskie",Kr="MIT",Xr={url:"https://github.com/axios/axios/issues"},Gr="https://axios-http.com",Qr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Yr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Zr="dist/axios.min.js",en="dist/axios.min.js",tn="./index.d.ts",rn={"follow-redirects":"^1.14.0"},nn=[{path:"./dist/axios.min.js",threshold:"5kB"}],on={name:Fr,version:Mr,description:_r,main:Hr,scripts:$r,repository:Jr,keywords:zr,author:Wr,license:Kr,bugs:Xr,homepage:Gr,devDependencies:Qr,browser:Yr,jsdelivr:Zr,unpkg:en,typings:tn,dependencies:rn,bundlesize:nn};var Bt=on,je={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){je[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var wt={},an=Bt.version.split(".");function Dt(t,e){for(var i=e?e.split("."):an,a=t.split("."),o=0;o<3;o++){if(i[o]>a[o])return!0;if(i[o]<a[o])return!1}return!1}je.transitional=function(e,i,a){var o=i&&Dt(i);function u(d,p){return"[Axios v"+Bt.version+"] Transitional option '"+d+"'"+p+(a?". "+a:"")}return function(d,p,w){if(e===!1)throw new Error(u(p," has been removed in "+i));return o&&!wt[p]&&(wt[p]=!0,console.warn(u(p," has been deprecated since v"+i+" and will be removed in the near future"))),e?e(d,p,w):!0}};function sn(t,e,i){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),o=a.length;o-- >0;){var u=a[o],d=e[u];if(d){var p=t[u],w=p===void 0||d(p,u,t);if(w!==!0)throw new TypeError("option "+u+" must be "+w);continue}if(i!==!0)throw Error("Unknown option "+u)}}var un={isOlderVersion:Dt,assertOptions:sn,validators:je},Vt=L,ln=jt,bt=br,St=Vr,se=Ut,Ft=un,H=Ft.validators;function W(t){this.defaults=t,this.interceptors={request:new bt,response:new bt}}W.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=se(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var i=e.transitional;i!==void 0&&Ft.assertOptions(i,{silentJSONParsing:H.transitional(H.boolean,"1.0.0"),forcedJSONParsing:H.transitional(H.boolean,"1.0.0"),clarifyTimeoutError:H.transitional(H.boolean,"1.0.0")},!1);var a=[],o=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(e)===!1||(o=o&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});var u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});var d;if(!o){var p=[St,void 0];for(Array.prototype.unshift.apply(p,a),p=p.concat(u),d=Promise.resolve(e);p.length;)d=d.then(p.shift(),p.shift());return d}for(var w=e;a.length;){var f=a.shift(),q=a.shift();try{w=f(w)}catch(R){q(R);break}}try{d=St(w)}catch(R){return Promise.reject(R)}for(;u.length;)d=d.then(u.shift(),u.shift());return d};W.prototype.getUri=function(e){return e=se(this.defaults,e),ln(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Vt.forEach(["delete","get","head","options"],function(e){W.prototype[e]=function(i,a){return this.request(se(a||{},{method:e,url:i,data:(a||{}).data}))}});Vt.forEach(["post","put","patch"],function(e){W.prototype[e]=function(i,a,o){return this.request(se(o||{},{method:e,url:i,data:a}))}});var cn=W,Ee,Et;function Mt(){if(Et)return Ee;Et=1;function t(e){this.message=e}return t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,Ee=t,Ee}var xe,xt;function dn(){if(xt)return xe;xt=1;var t=Mt();function e(i){if(typeof i!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(d){a=d});var o=this;i(function(d){o.reason||(o.reason=new t(d),a(o.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var a,o=new e(function(d){a=d});return{token:o,cancel:a}},xe=e,xe}var Ce,Ct;function fn(){return Ct||(Ct=1,Ce=function(e){return function(a){return e.apply(null,a)}}),Ce}var Re,Rt;function hn(){return Rt||(Rt=1,Re=function(e){return typeof e=="object"&&e.isAxiosError===!0}),Re}var Ot=L,pn=Tt,ie=cn,vn=Ut,mn=Le;function _t(t){var e=new ie(t),i=pn(ie.prototype.request,e);return Ot.extend(i,ie.prototype,e),Ot.extend(i,e),i}var I=_t(mn);I.Axios=ie;I.create=function(e){return _t(vn(I.defaults,e))};I.Cancel=Mt();I.CancelToken=dn();I.isCancel=Nt();I.all=function(e){return Promise.all(e)};I.spread=fn();I.isAxiosError=hn();Pe.exports=I;Pe.exports.default=I;var gn=Pe.exports,yn=gn;(function(t){function e(c){return c&&typeof c=="object"&&"default"in c?c.default:c}var i=e(yn),a=Wt,o=e(zt);function u(){return(u=Object.assign?Object.assign.bind():function(c){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(c[n]=r[n])}return c}).apply(this,arguments)}var d,p={modal:null,listener:null,show:function(c){var s=this;typeof c=="object"&&(c="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(c));var r=document.createElement("html");r.innerHTML=c,r.querySelectorAll("a").forEach(function(l){return l.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return s.hide()});var n=document.createElement("iframe");if(n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",!n.contentWindow)throw new Error("iframe not yet ready.");n.contentWindow.document.open(),n.contentWindow.document.write(r.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(c){c.keyCode===27&&this.hide()}};function w(c,s){var r;return function(){var n=arguments,l=this;clearTimeout(r),r=setTimeout(function(){return c.apply(l,[].slice.call(n))},s)}}function f(c,s,r){for(var n in s===void 0&&(s=new FormData),r===void 0&&(r=null),c=c||{})Object.prototype.hasOwnProperty.call(c,n)&&R(s,q(r,n),c[n]);return s}function q(c,s){return c?c+"["+s+"]":s}function R(c,s,r){return Array.isArray(r)?Array.from(r.keys()).forEach(function(n){return R(c,q(s,n.toString()),r[n])}):r instanceof Date?c.append(s,r.toISOString()):r instanceof File?c.append(s,r,r.name):r instanceof Blob?c.append(s,r):typeof r=="boolean"?c.append(s,r?"1":"0"):typeof r=="string"?c.append(s,r):typeof r=="number"?c.append(s,""+r):r==null?c.append(s,""):void f(r,c,s)}function g(c){return new URL(c.toString(),window.location.toString())}function y(c,s,r,n){n===void 0&&(n="brackets");var l=/^https?:\/\//.test(s.toString()),h=l||s.toString().startsWith("/"),E=!h&&!s.toString().startsWith("#")&&!s.toString().startsWith("?"),C=s.toString().includes("?")||c===t.Method.GET&&Object.keys(r).length,S=s.toString().includes("#"),m=new URL(s.toString(),"http://localhost");return c===t.Method.GET&&Object.keys(r).length&&(m.search=a.stringify(o(a.parse(m.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:n}),r={}),[[l?m.protocol+"//"+m.host:"",h?m.pathname:"",E?m.pathname.substring(1):"",C?m.search:"",S?m.hash:""].join(""),r]}function j(c){return(c=new URL(c.href)).hash="",c}function T(c,s){return document.dispatchEvent(new CustomEvent("inertia:"+c,s))}(d=t.Method||(t.Method={})).GET="get",d.POST="post",d.PUT="put",d.PATCH="patch",d.DELETE="delete";var v=function(c){return T("finish",{detail:{visit:c}})},N=function(c){return T("navigate",{detail:{page:c}})},K=typeof window>"u",X=function(){function c(){this.visitId=null}var s=c.prototype;return s.init=function(r){var n=r.resolveComponent,l=r.swapComponent;this.page=r.initialPage,this.resolveComponent=n,this.swapComponent=l,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},s.handleInitialPageVisit=function(r){this.page.url+=window.location.hash,this.setPage(r,{preserveState:!0}).then(function(){return N(r)})},s.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",w(this.handleScrollEvent.bind(this),100),!0)},s.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},s.handleScrollEvent=function(r){typeof r.target.hasAttribute=="function"&&r.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},s.saveScrollPositions=function(){this.replaceState(u({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(r){return{top:r.scrollTop,left:r.scrollLeft}})}))},s.resetScrollPositions=function(){var r;window.scrollTo(0,0),this.scrollRegions().forEach(function(n){typeof n.scrollTo=="function"?n.scrollTo(0,0):(n.scrollTop=0,n.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&((r=document.getElementById(window.location.hash.slice(1)))==null||r.scrollIntoView())},s.restoreScrollPositions=function(){var r=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(n,l){var h=r.page.scrollRegions[l];h&&(typeof n.scrollTo=="function"?n.scrollTo(h.left,h.top):(n.scrollTop=h.top,n.scrollLeft=h.left))})},s.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&window.performance.getEntriesByType("navigation")[0].type==="back_forward"},s.handleBackForwardVisit=function(r){var n=this;window.history.state.version=r.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){n.restoreScrollPositions(),N(r)})},s.locationVisit=function(r,n){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:n})),window.location.href=r.href,j(window.location).href===j(r).href&&window.location.reload()}catch{return!1}},s.isLocationVisit=function(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}},s.handleLocationVisit=function(r){var n,l,h,E,C=this,S=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),r.url+=window.location.hash,r.rememberedState=(n=(l=window.history.state)==null?void 0:l.rememberedState)!=null?n:{},r.scrollRegions=(h=(E=window.history.state)==null?void 0:E.scrollRegions)!=null?h:[],this.setPage(r,{preserveScroll:S.preserveScroll,preserveState:!0}).then(function(){S.preserveScroll&&C.restoreScrollPositions(),N(r)})},s.isLocationVisitResponse=function(r){return r&&r.status===409&&r.headers["x-inertia-location"]},s.isInertiaResponse=function(r){return r==null?void 0:r.headers["x-inertia"]},s.createVisitId=function(){return this.visitId={},this.visitId},s.cancelVisit=function(r,n){var l=n.cancelled,h=l!==void 0&&l,E=n.interrupted,C=E!==void 0&&E;!r||r.completed||r.cancelled||r.interrupted||(r.cancelToken.cancel(),r.onCancel(),r.completed=!1,r.cancelled=h,r.interrupted=C,v(r),r.onFinish(r))},s.finishVisit=function(r){r.cancelled||r.interrupted||(r.completed=!0,r.cancelled=!1,r.interrupted=!1,v(r),r.onFinish(r))},s.resolvePreserveOption=function(r,n){return typeof r=="function"?r(n):r==="errors"?Object.keys(n.props.errors||{}).length>0:r},s.visit=function(r,n){var l=this,h=n===void 0?{}:n,E=h.method,C=E===void 0?t.Method.GET:E,S=h.data,m=S===void 0?{}:S,A=h.replace,U=A!==void 0&&A,J=h.preserveScroll,B=J!==void 0&&J,Y=h.preserveState,Z=Y!==void 0&&Y,Ie=h.only,ee=Ie===void 0?[]:Ie,qe=h.headers,Ne=qe===void 0?{}:qe,Ue=h.errorBag,D=Ue===void 0?"":Ue,Be=h.forceFormData,De=Be!==void 0&&Be,Ve=h.onCancelToken,Fe=Ve===void 0?function(){}:Ve,Me=h.onBefore,_e=Me===void 0?function(){}:Me,He=h.onStart,$e=He===void 0?function(){}:He,Je=h.onProgress,ze=Je===void 0?function(){}:Je,We=h.onFinish,Ht=We===void 0?function(){}:We,Ke=h.onCancel,$t=Ke===void 0?function(){}:Ke,Xe=h.onSuccess,Ge=Xe===void 0?function(){}:Xe,Qe=h.onError,Ye=Qe===void 0?function(){}:Qe,Ze=h.queryStringArrayFormat,ue=Ze===void 0?"brackets":Ze,F=typeof r=="string"?g(r):r;if(!function b(x){return x instanceof File||x instanceof Blob||x instanceof FileList&&x.length>0||x instanceof FormData&&Array.from(x.values()).some(function(O){return b(O)})||typeof x=="object"&&x!==null&&Object.values(x).some(function(O){return b(O)})}(m)&&!De||m instanceof FormData||(m=f(m)),!(m instanceof FormData)){var et=y(C,F,m,ue),Jt=et[1];F=g(et[0]),m=Jt}var z={url:F,method:C,data:m,replace:U,preserveScroll:B,preserveState:Z,only:ee,headers:Ne,errorBag:D,forceFormData:De,queryStringArrayFormat:ue,cancelled:!1,completed:!1,interrupted:!1};if(_e(z)!==!1&&function(b){return T("before",{cancelable:!0,detail:{visit:b}})}(z)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var tt=this.createVisitId();this.activeVisit=u({},z,{onCancelToken:Fe,onBefore:_e,onStart:$e,onProgress:ze,onFinish:Ht,onCancel:$t,onSuccess:Ge,onError:Ye,queryStringArrayFormat:ue,cancelToken:i.CancelToken.source()}),Fe({cancel:function(){l.activeVisit&&l.cancelVisit(l.activeVisit,{cancelled:!0})}}),function(b){T("start",{detail:{visit:b}})}(z),$e(z),i({method:C,url:j(F).href,data:C===t.Method.GET?{}:m,params:C===t.Method.GET?m:{},cancelToken:this.activeVisit.cancelToken.token,headers:u({},Ne,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},ee.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":ee.join(",")}:{},D&&D.length?{"X-Inertia-Error-Bag":D}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(b){m instanceof FormData&&(b.percentage=Math.round(b.loaded/b.total*100),function(x){T("progress",{detail:{progress:x}})}(b),ze(b))}}).then(function(b){var x;if(!l.isInertiaResponse(b))return Promise.reject({response:b});var O=b.data;ee.length&&O.component===l.page.component&&(O.props=u({},l.page.props,O.props)),B=l.resolvePreserveOption(B,O),(Z=l.resolvePreserveOption(Z,O))&&(x=window.history.state)!=null&&x.rememberedState&&O.component===l.page.component&&(O.rememberedState=window.history.state.rememberedState);var le=F,te=g(O.url);return le.hash&&!te.hash&&j(le).href===te.href&&(te.hash=le.hash,O.url=te.href),l.setPage(O,{visitId:tt,replace:U,preserveScroll:B,preserveState:Z})}).then(function(){var b=l.page.props.errors||{};if(Object.keys(b).length>0){var x=D?b[D]?b[D]:{}:b;return function(O){T("error",{detail:{errors:O}})}(x),Ye(x)}return T("success",{detail:{page:l.page}}),Ge(l.page)}).catch(function(b){if(l.isInertiaResponse(b.response))return l.setPage(b.response.data,{visitId:tt});if(l.isLocationVisitResponse(b.response)){var x=g(b.response.headers["x-inertia-location"]),O=F;O.hash&&!x.hash&&j(O).href===x.href&&(x.hash=O.hash),l.locationVisit(x,B===!0)}else{if(!b.response)return Promise.reject(b);T("invalid",{cancelable:!0,detail:{response:b.response}})&&p.show(b.response.data)}}).then(function(){l.activeVisit&&l.finishVisit(l.activeVisit)}).catch(function(b){if(!i.isCancel(b)){var x=T("exception",{cancelable:!0,detail:{exception:b}});if(l.activeVisit&&l.finishVisit(l.activeVisit),x)return Promise.reject(b)}})}},s.setPage=function(r,n){var l=this,h=n===void 0?{}:n,E=h.visitId,C=E===void 0?this.createVisitId():E,S=h.replace,m=S!==void 0&&S,A=h.preserveScroll,U=A!==void 0&&A,J=h.preserveState,B=J!==void 0&&J;return Promise.resolve(this.resolveComponent(r.component)).then(function(Y){C===l.visitId&&(r.scrollRegions=r.scrollRegions||[],r.rememberedState=r.rememberedState||{},(m=m||g(r.url).href===window.location.href)?l.replaceState(r):l.pushState(r),l.swapComponent({component:Y,page:r,preserveState:B}).then(function(){U||l.resetScrollPositions(),m||N(r)}))})},s.pushState=function(r){this.page=r,window.history.pushState(r,"",r.url)},s.replaceState=function(r){this.page=r,window.history.replaceState(r,"",r.url)},s.handlePopstateEvent=function(r){var n=this;if(r.state!==null){var l=r.state,h=this.createVisitId();Promise.resolve(this.resolveComponent(l.component)).then(function(C){h===n.visitId&&(n.page=l,n.swapComponent({component:C,page:l,preserveState:!1}).then(function(){n.restoreScrollPositions(),N(l)}))})}else{var E=g(this.page.url);E.hash=window.location.hash,this.replaceState(u({},this.page,{url:E.href})),this.resetScrollPositions()}},s.get=function(r,n,l){return n===void 0&&(n={}),l===void 0&&(l={}),this.visit(r,u({},l,{method:t.Method.GET,data:n}))},s.reload=function(r){return r===void 0&&(r={}),this.visit(window.location.href,u({},r,{preserveScroll:!0,preserveState:!0}))},s.replace=function(r,n){var l;return n===void 0&&(n={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+((l=n.method)!=null?l:"get")+"() instead."),this.visit(r,u({preserveState:!0},n,{replace:!0}))},s.post=function(r,n,l){return n===void 0&&(n={}),l===void 0&&(l={}),this.visit(r,u({preserveState:!0},l,{method:t.Method.POST,data:n}))},s.put=function(r,n,l){return n===void 0&&(n={}),l===void 0&&(l={}),this.visit(r,u({preserveState:!0},l,{method:t.Method.PUT,data:n}))},s.patch=function(r,n,l){return n===void 0&&(n={}),l===void 0&&(l={}),this.visit(r,u({preserveState:!0},l,{method:t.Method.PATCH,data:n}))},s.delete=function(r,n){return n===void 0&&(n={}),this.visit(r,u({preserveState:!0},n,{method:t.Method.DELETE}))},s.remember=function(r,n){var l,h;n===void 0&&(n="default"),K||this.replaceState(u({},this.page,{rememberedState:u({},(l=this.page)==null?void 0:l.rememberedState,(h={},h[n]=r,h))}))},s.restore=function(r){var n,l;if(r===void 0&&(r="default"),!K)return(n=window.history.state)==null||(l=n.rememberedState)==null?void 0:l[r]},s.on=function(r,n){var l=function(h){var E=n(h);h.cancelable&&!h.defaultPrevented&&E===!1&&h.preventDefault()};return document.addEventListener("inertia:"+r,l),function(){return document.removeEventListener("inertia:"+r,l)}},c}(),G={buildDOMElement:function(c){var s=document.createElement("template");s.innerHTML=c;var r=s.content.firstChild;if(!c.startsWith("<script "))return r;var n=document.createElement("script");return n.innerHTML=r.innerHTML,r.getAttributeNames().forEach(function(l){n.setAttribute(l,r.getAttribute(l)||"")}),n},isInertiaManagedElement:function(c){return c.nodeType===Node.ELEMENT_NODE&&c.getAttribute("inertia")!==null},findMatchingElementIndex:function(c,s){var r=c.getAttribute("inertia");return r!==null?s.findIndex(function(n){return n.getAttribute("inertia")===r}):-1},update:w(function(c){var s=this,r=c.map(function(n){return s.buildDOMElement(n)});Array.from(document.head.childNodes).filter(function(n){return s.isInertiaManagedElement(n)}).forEach(function(n){var l=s.findMatchingElementIndex(n,r);if(l!==-1){var h,E=r.splice(l,1)[0];E&&!n.isEqualNode(E)&&(n==null||(h=n.parentNode)==null||h.replaceChild(E,n))}else{var C;n==null||(C=n.parentNode)==null||C.removeChild(n)}}),r.forEach(function(n){return document.head.appendChild(n)})},1)},Q=new X;t.Inertia=Q,t.createHeadManager=function(c,s,r){var n={},l=0;function h(){var C=Object.values(n).reduce(function(S,m){return S.concat(m)},[]).reduce(function(S,m){if(m.indexOf("<")===-1)return S;if(m.indexOf("<title ")===0){var A=m.match(/(<title [^>]+>)(.*?)(<\/title>)/);return S.title=A?""+A[1]+s(A[2])+A[3]:m,S}var U=m.match(/ inertia="[^"]+"/);return U?S[U[0]]=m:S[Object.keys(S).length]=m,S},{});return Object.values(C)}function E(){c?r(h()):G.update(h())}return{createProvider:function(){var C=function(){var S=l+=1;return n[S]=[],S.toString()}();return{update:function(S){return function(m,A){A===void 0&&(A=[]),m!==null&&Object.keys(n).indexOf(m)>-1&&(n[m]=A),E()}(C,S)},disconnect:function(){return function(S){S!==null&&Object.keys(n).indexOf(S)!==-1&&(delete n[S],E())}(C)}}}}},t.hrefToUrl=g,t.mergeDataIntoQueryString=y,t.shouldIntercept=function(c){var s=c.currentTarget.tagName.toLowerCase()==="a";return!(c.target&&c!=null&&c.target.isContentEditable||c.defaultPrevented||s&&c.which>1||s&&c.altKey||s&&c.ctrlKey||s&&c.metaKey||s&&c.shiftKey)},t.urlWithoutHash=j})(Pt);const wn={class:"flex items-center p-4 text-gray-500 dark:text-zinc-100/80 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-zinc-700 dark:shadow-zinc-600",role:"alert"},bn={class:"p-5 text-center"},Sn={class:"ltr:ml-3 rtl:mr-3 text-sm font-normal"},En=$("i",{class:"bx bx-x text-2xl -mt-1 text-center","data-tw-dismiss":"toast"},null,-1),xn=[En],Cn={__name:"ToastListItem",props:{message:String,type:{type:String,default:"success"},duration:{type:Number,default:5e3}},emits:["remove"],setup(t,{emit:e}){const i=t;return Kt(()=>{setTimeout(()=>{e("remove")},i.duration)}),(a,o)=>(re(),kt("div",wn,[$("div",{class:rt(["inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg",{"text-green-500 bg-green-50 dark:bg-green-500/20 dark:text-green-200":i.type==="success","text-yellow-500 bg-yellow-50 dark:bg-yellow-500/20 dark:text-yellow-200":i.type==="warning","text-blue-500 bg-blue-50 dark:bg-blue-500/20 dark:text-blue-200":i.type==="info","text-red-500 bg-red-50 dark:bg-red-500/20 dark:text-red-200":i.type==="error"}])},[$("div",bn,[$("i",{class:rt(["text-lg bx",{"bx-check":i.type==="success","bx-error":i.type==="warning","bx-bell":i.type==="info","bx-error-alt":i.type==="error"}])},null,2)])],2),$("div",Sn,Xt(i.message),1),$("button",{onClick:o[0]||(o[0]=u=>e("remove")),type:"button",class:"ltr:ml-auto rtl:mr-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-50/50 py-[5px] hover:bg-gray-50/50 text-center h-8 w-8 dark:bg-zinc-800 dark:text-gray-100 dark:focus:ring-zinc-500/50","data-dismiss-target":"#toast-default","aria-label":"Close"},xn)]))}},kn={__name:"ToastList",setup(t){const e=Gt();let i=Pt.Inertia.on("finish",o=>{e.props.flash.success&&M.success(e.props.flash.success,4e3),e.props.flash.warning&&M.warning(e.props.flash.warning,4e3),e.props.flash.error&&M.error(e.props.flash.error,4e3),e.props.flash.message&&M.add(e.props.flash.message,4e3)});Qt(()=>{i()});const a=o=>{M.remove(o)};return(o,u)=>(re(),nt(rr,{tag:"div","enter-from-class":"translate-x-full opacity-0","enter-active-class":"duration-500","leave-active-class":"duration-500","leave-to-class":"translate-x-full opacity-0",class:"fixed top-4 right-8 z-50 space-y-4 w-full max-w-xs"},{default:Yt(()=>[(re(!0),kt(Zt,null,er(tr(M).items,(d,p)=>(re(),nt(Cn,{key:d.key,message:d.message,type:d.type,duration:d.duration,onRemove:w=>a(p)},null,8,["message","type","duration","onRemove"]))),128))]),_:1}))}};export{kn as _,Pt as d};
