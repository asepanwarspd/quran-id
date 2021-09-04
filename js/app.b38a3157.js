(function(e){function t(t){for(var r,n,u=t[0],i=t[1],c=t[2],l=0,h=[];l<u.length;l++)n=u[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&h.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var u=a[n];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={1:0},o={1:0},s=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"9e566551",3:"cf14d7c7",4:"e1b2a512",5:"258b03ce",6:"e77ee013",7:"f11a3dfe",8:"96b3f8ab",9:"30134df8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={2:1,3:1,4:1,5:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{2:"0e433876",3:"97f5c4e0",4:"97f5c4e0",5:"97f5c4e0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){c=h[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],d.parentNode.removeChild(d),a(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var h=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",h.name="ChunkLoadError",h.type=r,h.request=n,a[1](h)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/quran-id/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=l;s.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"0047":function(e,t,a){},"2f39":function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getSurahList",(function(){return w})),a.d(r,"getSurah",(function(){return A})),a.d(r,"getSurahLastRead",(function(){return L})),a.d(r,"getQuranReaderScrollPosition",(function(){return R})),a.d(r,"getQuranSearchAyahScrollPosition",(function(){return T})),a.d(r,"getSearchAyahResults",(function(){return _})),a.d(r,"getSearchAyahResultTranslations",(function(){return x})),a.d(r,"getSearchAyahPaging",(function(){return Q}));var n={};a.r(n),a.d(n,"showLoading",(function(){return j})),a.d(n,"hideLoading",(function(){return k})),a.d(n,"updateSurahList",(function(){return q})),a.d(n,"updateSurah",(function(){return O})),a.d(n,"updateSurahLastRead",(function(){return C})),a.d(n,"updateQuranReaderScrollPosition",(function(){return E})),a.d(n,"updateQuranSearchAyahScrollPosition",(function(){return M})),a.d(n,"addSearchAyahResults",(function(){return N})),a.d(n,"addSearchAyahResultsTranslation",(function(){return $})),a.d(n,"resetSearchAyahResults",(function(){return B})),a.d(n,"resetSearchAyahPaging",(function(){return I})),a.d(n,"updateSearchAyahPaging",(function(){return V})),a.d(n,"setFullMatchSearch",(function(){return D}));var o={};a.r(o),a.d(o,"fetchSurahList",(function(){return J})),a.d(o,"fetchSurah",(function(){return G})),a.d(o,"setSurahLastRead",(function(){return U})),a.d(o,"removeSurahLastRead",(function(){return H})),a.d(o,"setQuranReaderScrollPosition",(function(){return K})),a.d(o,"setQuranSearchAyahScrollPosition",(function(){return W})),a.d(o,"searchByAyah",(function(){return X})),a.d(o,"resetSearchAyahResults",(function(){return Z})),a.d(o,"resetSearchAyahPaging",(function(){return Y})),a.d(o,"setFullMatchSearch",(function(){return ee}));a("e6cf"),a("5319"),a("7d6e"),a("e54f"),a("4848"),a("c382"),a("985d"),a("0047");var s=a("2b0e"),u=a("1f91"),i=a("42d2"),c=a("b05d"),l=a("2a19"),h=a("18d6"),d=a("9c64");s["a"].use(c["a"],{config:{},lang:u["a"],iconSet:i["a"],plugins:{Notify:l["a"],LocalStorage:h["a"],Meta:d["a"]}});var f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},p=[],m={name:"App"},g=m,y=a("2877"),S=Object(y["a"])(g,f,p,!1,null,null,null),b=S.exports,v=a("2f62"),P=function(){return{surahList:[],surah:null,surahLastRead:h["a"].getItem("surah-last-read"),quranReaderScrollPosition:h["a"].getItem("surah-list-scroll-position"),searchAyahScrollPosition:h["a"].getItem("search-ayah-scroll-position"),searchAyah:{fullMatch:!1,paging:{total:0,perPage:20,currentPage:1,totalPage:0},results:[],resultTranslations:[]},loading:{fetchSurahList:!1,fetchSurah:!1,searchAyah:!1}}};function w(e){return e.surahList}function A(e){return e.surah}function L(e){return e.surahLastRead}function R(e){return e.quranReaderScrollPosition}function T(e){return e.searchAyahScrollPosition}function _(e){return e.searchAyah.results}function x(e){return e.searchAyah.resultTranslations}function Q(e){return e.searchAyah.paging}a("ddb0");function j(e,t){e.loading[t]=!0}function k(e,t){e.loading[t]=!1}function q(e,t){e.surahList=t}function O(e,t){e.surah=t}function C(e,t){e.surahLastRead=t}function E(e,t){e.quranReaderScrollPosition=t}function M(e,t){e.searchAyahScrollPosition=t}function N(e,t){e.searchAyah.results.push(...t)}function $(e,t){e.searchAyah.resultTranslations.push(t)}function B(e){e.searchAyah.results=[]}function I(e){e.searchAyah.paging={total:0,perPage:20,totalPage:0,currentPage:1}}function V(e,t){e.searchAyah.paging=t}function D(e,t){e.searchAyah.fullMatch=t}const F=function(e){e=e.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,""),e=e.replace(/(آ|إ|أ)/g,"ا"),e=e.replace(/(ة)/g,"ه"),e=e.replace(/(ئ|ؤ)/g,"ء"),e=e.replace(/(ى)/g,"ي");const t=1632;for(let a=0;a<10;a++)e.replace(String.fromCharCode(t+a),String.fromCharCode(48+a));return e},z=function(e,t){const a=F(t),r=new RegExp(a,"g");return e.filter((e=>{const t=F(e.text);return-1!==t.search(r)}))};function J(e){return e.commit("showLoading","fetchSurahList"),new Promise(((t,a)=>{this.$httpQuran({url:"chapters",params:{language:"id"}}).then((a=>{e.commit("updateSurahList",a.data.chapters),e.commit("hideLoading","fetchSurahList"),t(a)})).catch((t=>{e.commit("hideLoading","fetchSurahList"),a(t)}))}))}async function G(e,t){e.commit("showLoading","fetchSurah");const a=await this.$httpQuran({url:`chapters/${t}`,params:{language:"id"}}).then((e=>e.data.chapter)).catch((e=>console.log(e))),r=[{url:"quran/verses/uthmani",params:{chapter_number:t}},{url:"quran/translations/33",params:{chapter_number:t,fields:"verse_number"}}],n=[];return r.forEach((e=>{n.push(new Promise(((t,a)=>{this.$httpQuran({url:e.url,params:e.params}).then((e=>{t(e.data)})).catch((e=>{console.log(e),a(e)}))})))})),Promise.all(n).then((t=>{const r=t[0].verses,n=t[1].translations,o=Object.assign({ayahs:r,translations:n},a);e.commit("updateSurah",o),e.commit("hideLoading","fetchSurah")})).catch((t=>{console.log(t),e.commit("hideLoading","fetchSurah")}))}function U(e,{surah:t,offsetTop:a}){const r=Object.assign({offsetTop:a},t);h["a"].set("surah-last-read",r),e.commit("updateSurahLastRead",r)}function H(e){h["a"].remove("surah-last-read"),e.commit("updateSurahLastRead",null)}function K(e,{offsetTop:t}){h["a"].set("surah-list-scroll-position",t),e.commit("updateQuranReaderScrollPosition",t)}function W(e,{offsetTop:t}){h["a"].set("search-ayah-scroll-position",t),e.commit("updateQuranSearchAyahScrollPosition",t)}async function X(e,{keyword:t,page:a=1}){e.commit("showLoading","searchAyah");const r=0!=e.state.surahList.length?e.state.surahList:await e.dispatch("fetchSurahList").then((e=>e.data.chapters)),n=e.state.searchAyah.paging.perPage;return new Promise(((o,s)=>{this.$httpQuran({url:"search",params:{query:t,size:n,page:a}}).then((s=>{if(204==s.status)return e.commit("hideLoading","searchAyah"),void o({results:[]});const u=s.data.search,i={total:u.total_results,perPage:n,totalPage:u.total_pages,currentPage:a};let c=u.results;if(e.state.searchAyah.fullMatch&&(c=z(c,t),0==c.length&&a<i.totalPage))e.dispatch("searchByAyah",{keyword:t,page:a+1});else{for(let t=0;t<c.length;t++){const a=c[t],n=a.verse_key.split(":"),o=r.find((e=>e.id==n[0]));c[t].surahId=o.id,c[t].surahName=o.name_simple,c[t].ayahNumber=n[1],this.$httpQuran({url:"quran/translations/33",params:{verse_key:a.verse_key}}).then((t=>{e.commit("addSearchAyahResultsTranslation",{verse_key:a.verse_key,text:t.data.translations[0].text})}))}e.commit("updateSearchAyahPaging",i),e.commit("addSearchAyahResults",c),e.commit("hideLoading","searchAyah"),o({results:c,paging:i})}})).catch((t=>{e.commit("hideLoading","searchAyah"),s(t)}))}))}function Z(e){e.commit("resetSearchAyahResults")}function Y(e){e.commit("resetSearchAyahPaging")}function ee(e,t){e.commit("setFullMatchSearch",t)}var te={namespaced:!0,state:P,getters:r,mutations:n,actions:o};s["a"].use(v["a"]);var ae=function(){const e=new v["a"].Store({modules:{quran:te},strict:!1});return e},re=a("8c4f");const ne=[{path:"/",component:()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"713b")),children:[{path:"",alias:"reader",name:"QuranReader",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"8fc9"))},{path:"reader/:surahId",name:"QuranReaderDetail",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"d942")),props:!0},{path:"search-by-ayah",name:"QuranSearchByAyah",component:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"6c4e"))},{path:"player",name:"QuranPlayer",component:()=>Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"9ad9"))},{path:"bookmark",name:"QuranBookmark",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"4d15"))},{path:"about",name:"AboutIndex",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"a7b5"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"e51e"))}];var oe=ne;s["a"].use(re["a"]);var se=function(){const e=new re["a"]({scrollBehavior:()=>({x:0,y:0}),routes:oe,mode:"history",base:"/quran-id/"});return e},ue=async function(){const e="function"===typeof ae?await ae({Vue:s["a"]}):ae,t="function"===typeof se?await se({Vue:s["a"],store:e}):se;e.$router=t;const a={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:a,store:e,router:t}},ie=a("9483"),ce=a("a002"),le=a.n(ce);Object(ie["a"])("/quran-id/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){l["a"].create({classes:"notify-update no-box-shadow",message:"Terdapat pembaruan.",icon:"update",closeBtn:"Perbarui",timeout:1e4,onDismiss(){le.a.clear().then((function(){window.location.reload()})).catch((function(e){console.log("Localforage",e)}))}})},offline(){},error(){}});var he=a("bc3a"),de=a.n(he),fe=a("6f0d");const pe=Object(fe["setupCache"])({maxAge:0}),me=de.a.create({adapter:pe.adapter,baseURL:"https://api.quran.com/api/v4/",headers:{"X-Requested-With":"xmlhttprequest"}});var ge=({store:e,Vue:t})=>{t.prototype.$http=de.a,e.$http=de.a,t.prototype.$httpQuran=me,e.$httpQuran=me};l["a"].registerType("toast",{classes:"notify-toast no-box-shadow",badgeStyle:"display: none",timeout:3e3}),l["a"].registerType("toast-error",{classes:"notify-toast error no-box-shadow",badgeStyle:"display: none",timeout:3e3}),l["a"].registerType("toast-warning",{classes:"notify-toast warning no-box-shadow",badgeStyle:"display: none",timeout:3e3});var ye=a("0831"),Se=a("9224");const{getScrollTarget:be,setScrollPosition:ve}=ye["a"];var Pe=({Vue:e})=>{e.mixin({data(){return{basmalahArabic:"﷽",productName:Se["b"],productDescription:Se["a"]}},methods:{removeFootNote(e){const t=/<sup\s+foot_note=\d+>\d+<\/sup>/gi;return e.replaceAll(t,"")},scrollToElement(e,t=-66){const a=be(e),r=e.offsetTop+t,n=1e3;ve(a,r,n)},normalizeSurahNameTranslation(e){return e.replace(/\\/g,"")},arabicNumber(e){const t=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],a="&#1757;";return a+e.toString().split("").map((e=>t[e])).join("")},track(e,t,a){const r=e,n=null!==t&&void 0!==t?t:window.location.pathname,o=null!==a&&void 0!==a?a:window.location.href;this.$gtag.pageview({page_title:r,page_path:n,page_location:o})}}})},we=a("a584"),Ae=async({Vue:e})=>{e.use(we["a"],{config:{id:"G-3RT9MGB5RR"},enabled:!0})};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(0).then(a.t.bind(null,"a0db",7));const Le="/quran-id/",Re=/\/\//,Te=e=>(Le+e).replace(Re,"/");async function _e(){const{app:e,store:t,router:a}=await ue();let r=!1;const n=e=>{r=!0;const t=Object(e)===e?Te(a.resolve(e).route.fullPath):e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),u=[ge,void 0,Pe,Ae];for(let c=0;!1===r&&c<u.length;c++)if("function"===typeof u[c])try{await u[c]({app:e,router:a,store:t,Vue:s["a"],ssrContext:null,redirect:n,urlPath:o,publicPath:Le})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&new s["a"](e)}_e()},9224:function(e){e.exports=JSON.parse('{"a":"Al-Quran dan Terjemahan","b":"Al-Quran"}')}});