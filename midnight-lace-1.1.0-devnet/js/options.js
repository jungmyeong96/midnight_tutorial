(()=>{var e={20870:(e,r,_)=>{Promise.all([_.e(401),_.e(505),_.e(225),_.e(71),_.e(550),_.e(416),_.e(339)]).then(_.bind(_,29929))}};var r={};function __webpack_require__(_){var i=r[_];if(void 0!==i)return i.exports;var t=r[_]={id:_,loaded:false,exports:{}};e[_].call(t.exports,t,t.exports,__webpack_require__);t.loaded=true;return t.exports}__webpack_require__.m=e;__webpack_require__.c=r;(()=>{var e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__";var r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__";var _="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__";var resolveQueue=e=>{if(e&&!e.d){e.d=1;e.forEach(e=>e.r--);e.forEach(e=>e.r--?e.r++:e())}};var wrapDeps=i=>i.map(i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var t=[];t.d=0;i.then(e=>{n[r]=e;resolveQueue(t)},e=>{n[_]=e;resolveQueue(t)});var n={};n[e]=e=>e(t);return n}}var a={};a[e]=e=>{};a[r]=i;return a});__webpack_require__.a=(i,t,n)=>{var a;n&&((a=[]).d=1);var o=new Set;var c=i.exports;var u;var b;var p;var f=new Promise((e,r)=>{p=r;b=e});f[r]=c;f[e]=e=>(a&&e(a),o.forEach(e),f["catch"](e=>{}));i.exports=f;t(i=>{u=wrapDeps(i);var t;var getResult=()=>u.map(e=>{if(e[_])throw e[_];return e[r]});var n=new Promise(r=>{t=()=>r(getResult);t.r=0;var fnQueue=e=>e!==a&&!o.has(e)&&(o.add(e),e&&!e.d&&(t.r++,e.push(t)));u.map(r=>r[e](fnQueue))});return t.r?n:getResult()},e=>(e?p(f[_]=e):b(c),resolveQueue(a)));a&&(a.d=0)}})();(()=>{__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;__webpack_require__.d(r,{a:r});return r}})();(()=>{var e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;var r;__webpack_require__.t=function(_,i){if(1&i)_=this(_);if(8&i)return _;if("object"==typeof _&&_){if(4&i&&_.__esModule)return _;if(16&i&&"function"==typeof _.then)return _}var t=Object.create(null);__webpack_require__.r(t);var n={};r=r||[null,e({}),e([]),e(e)];for(var a=2&i&&_;"object"==typeof a&&!~r.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(e=>n[e]=()=>_[e]);n["default"]=()=>_;__webpack_require__.d(t,n);return t}})();(()=>{__webpack_require__.d=(e,r)=>{for(var _ in r)if(__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_))Object.defineProperty(e,_,{enumerable:true,get:r[_]})}})();(()=>{__webpack_require__.f={};__webpack_require__.e=e=>{return Promise.all(Object.keys(__webpack_require__.f).reduce((r,_)=>{__webpack_require__.f[_](e,r);return r},[]))}})();(()=>{__webpack_require__.u=e=>{return""+e+".js"}})();(()=>{__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}()})();(()=>{__webpack_require__.hmd=e=>{e=Object.create(e);if(!e.children)e.children=[];Object.defineProperty(e,"exports",{enumerable:true,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}});return e}})();(()=>{__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})();(()=>{var e={};var r="@lace/browser-extension-wallet:";__webpack_require__.l=(_,i,t,n)=>{if(e[_]){e[_].push(i);return}var a,o;if(void 0!==t){var c=document.getElementsByTagName("script");for(var u=0;u<c.length;u++){var b=c[u];if(b.getAttribute("src")==_||b.getAttribute("data-webpack")==r+t){a=b;break}}}if(!a){o=true;a=document.createElement("script");a.charset="utf-8";a.timeout=120;if(__webpack_require__.nc)a.setAttribute("nonce",__webpack_require__.nc);a.setAttribute("data-webpack",r+t);a.src=_;if(0!==a.src.indexOf(window.location.origin+"/"))a.crossOrigin="anonymous";a.integrity=__webpack_require__.sriHashes[n];a.crossOrigin="anonymous"}e[_]=[i];var onScriptComplete=(r,i)=>{a.onerror=a.onload=null;clearTimeout(p);var t=e[_];delete e[_];a.parentNode&&a.parentNode.removeChild(a);t&&t.forEach(e=>e(i));if(r)return r(i)};var p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=onScriptComplete.bind(null,a.onerror);a.onload=onScriptComplete.bind(null,a.onload);o&&document.head.appendChild(a)}})();(()=>{__webpack_require__.r=e=>{if("undefined"!=typeof Symbol&&Symbol.toStringTag)Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:true})}})();(()=>{__webpack_require__.nmd=e=>{e.paths=[];if(!e.children)e.children=[];return e}})();(()=>{var e;if(__webpack_require__.g.importScripts)e=__webpack_require__.g.location+"";var r=__webpack_require__.g.document;if(!e&&r){if(r.currentScript)e=r.currentScript.src;if(!e){var _=r.getElementsByTagName("script");if(_.length)e=_[_.length-1].src}}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/");__webpack_require__.p=e})();__webpack_require__.sriHashes={71:"sha384-KimBxZSuV7Jv0e0WwUCd1B11uGdbWPx3+IjXpQNTYGWmvI0jCXspa9fRVxhLQiMy",225:"sha384-iYgsmyjlmw6Qu6BbYtpyOrnKCQVzU6IPNhYaTY7wHb4N8OOclOJYn7Jv19PhfF0g",339:"sha384-X23RrmTK+VhYj8WHyDYQJIE9yRLj/cgPYaphTD444oTZ/HRFXPzyomjwI0m2DGUI",401:"sha384-C4r3BBabJH64dBJ6U5RHtE4dH97xygYdvmCk6guVWC/G6vLkhRsJmsF4NemeO3vI",416:"sha384-JYasRB0G7rh/JPqM9xm1rGFTZrDeqOGRf4WkOa3d6/JQ6v26jgCrBAZgUM1AzN3w",505:"sha384-i1ntqKBo8OMEcjFEOESLAQD1fcgLKzZLPyj1uc7bglWQBPO6LLoS/CQbBruhQ7LG",550:"sha384-JySGDllktiM6kNVKo0cwZ5Ss70tZG4kuaR9YlfeS5hH0FpReiXM4XVCk1X85Ia95"};(()=>{__webpack_require__.b=document.baseURI||self.location.href;var e={798:0};__webpack_require__.f.j=(r,_)=>{var i=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==i)if(i)_.push(i[2]);else{var t=new Promise((_,t)=>i=e[r]=[_,t]);_.push(i[2]=t);var n=__webpack_require__.p+__webpack_require__.u(r);var a=new Error;var loadingEnded=_=>{if(__webpack_require__.o(e,r)){i=e[r];if(0!==i)e[r]=void 0;if(i){var t=_&&("load"===_.type?"missing":_.type);var n=_&&_.target&&_.target.src;a.message="Loading chunk "+r+" failed.\n("+t+": "+n+")";a.name="ChunkLoadError";a.type=t;a.request=n;i[1](a)}}};__webpack_require__.l(n,loadingEnded,"chunk-"+r,r)}};var webpackJsonpCallback=(r,_)=>{var[i,t,n]=_;var a,o,c=0;if(i.some(r=>0!==e[r])){for(a in t)if(__webpack_require__.o(t,a))__webpack_require__.m[a]=t[a];if(n)var u=n(__webpack_require__)}if(r)r(_);for(;c<i.length;c++){o=i[c];if(__webpack_require__.o(e,o)&&e[o])e[o][0]();e[o]=0}};var r=self["webpackChunk_lace_browser_extension_wallet"]=self["webpackChunk_lace_browser_extension_wallet"]||[];r.forEach(webpackJsonpCallback.bind(null,0));r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})();(()=>{__webpack_require__.nc=void 0})();(()=>{var e={};var r;var _;var i;var t;var n;var a;var o;var c;var u;var b;var p;var f;var s;var d;var w;var v;var l;var k;var g;var q;var m;var h;var x;var y;var S;var H;var C;var j;var A;var P;var O;var E;var R;var N;var U;var I;var W;var T;var F={74836:function(){return{"./cardano_multiplatform_lib_bg.js":{__wbindgen_object_drop_ref:function(e){if(void 0===r)r=__webpack_require__.c[68228].exports;return r["ug$"](e)},__wbindgen_string_new:function(e,r){if(void 0===_)_=__webpack_require__.c[68228].exports;return _["h4u"](e,r)},__wbindgen_string_get:function(e,r){if(void 0===i)i=__webpack_require__.c[68228].exports;return i["qtq"](e,r)},__wbindgen_json_parse:function(e,r){if(void 0===t)t=__webpack_require__.c[68228].exports;return t["t$0"](e,r)},__wbg_crypto_8fd02d72c4ba6c5c:function(e){if(void 0===n)n=__webpack_require__.c[68228].exports;return n["NLb"](e)},__wbindgen_is_object:function(e){if(void 0===a)a=__webpack_require__.c[68228].exports;return a["WlW"](e)},__wbg_process_bd02d71a65cf734c:function(e){if(void 0===o)o=__webpack_require__.c[68228].exports;return o["e58"](e)},__wbg_versions_1d70d407cb23129d:function(e){if(void 0===c)c=__webpack_require__.c[68228].exports;return c["DVm"](e)},__wbg_node_0091cdf1ffa73e4d:function(e){if(void 0===u)u=__webpack_require__.c[68228].exports;return u["tKO"](e)},__wbindgen_is_string:function(e){if(void 0===b)b=__webpack_require__.c[68228].exports;return b["eYF"](e)},__wbg_require_b06abd91965488c8:function(){if(void 0===p)p=__webpack_require__.c[68228].exports;return p["qtV"]()},__wbg_msCrypto_7e1e6014bddd75de:function(e){if(void 0===f)f=__webpack_require__.c[68228].exports;return f["IJU"](e)},__wbg_getRandomValues_f308e7233e5601b7:function(e,r){if(void 0===s)s=__webpack_require__.c[68228].exports;return s["Anh"](e,r)},__wbg_randomFillSync_f20541303a990429:function(e,r,_){if(void 0===d)d=__webpack_require__.c[68228].exports;return d["bXi"](e,r,_)},__wbindgen_is_function:function(e){if(void 0===w)w=__webpack_require__.c[68228].exports;return w["o$X"](e)},__wbg_newnoargs_971e9a5abe185139:function(e,r){if(void 0===v)v=__webpack_require__.c[68228].exports;return v["_f4"](e,r)},__wbg_call_33d7bcddbbfa394a:function(e,r){if(void 0===l)l=__webpack_require__.c[68228].exports;return l["Jmo"](e,r)},__wbg_self_fd00a1ef86d1b2ed:function(){if(void 0===k)k=__webpack_require__.c[68228].exports;return k["Ath"]()},__wbg_window_6f6e346d8bbd61d7:function(){if(void 0===g)g=__webpack_require__.c[68228].exports;return g["Hcj"]()},__wbg_globalThis_3348936ac49df00a:function(){if(void 0===q)q=__webpack_require__.c[68228].exports;return q["lHB"]()},__wbg_global_67175caf56f55ca9:function(){if(void 0===m)m=__webpack_require__.c[68228].exports;return m["qNE"]()},__wbindgen_is_undefined:function(e){if(void 0===h)h=__webpack_require__.c[68228].exports;return h["XP4"](e)},__wbg_call_65af9f665ab6ade5:function(e,r,_){if(void 0===x)x=__webpack_require__.c[68228].exports;return x["PZ2"](e,r,_)},__wbg_buffer_34f5ec9f8a838ba0:function(e){if(void 0===y)y=__webpack_require__.c[68228].exports;return y["eAr"](e)},__wbg_new_cda198d9dbc6d7ea:function(e){if(void 0===S)S=__webpack_require__.c[68228].exports;return S["G0U"](e)},__wbg_set_1a930cfcda1a8067:function(e,r,_){if(void 0===H)H=__webpack_require__.c[68228].exports;return H["FS1"](e,r,_)},__wbg_length_51f19f73d6d9eff3:function(e){if(void 0===C)C=__webpack_require__.c[68228].exports;return C["YwE"](e)},__wbg_newwithlength_66e5530e7079ea1b:function(e){if(void 0===j)j=__webpack_require__.c[68228].exports;return j["_JX"](e)},__wbg_subarray_270ff8dd5582c1ac:function(e,r,_){if(void 0===A)A=__webpack_require__.c[68228].exports;return A["Kms"](e,r,_)},__wbindgen_object_clone_ref:function(e){if(void 0===P)P=__webpack_require__.c[68228].exports;return P["m_1"](e)},__wbindgen_debug_string:function(e,r){if(void 0===O)O=__webpack_require__.c[68228].exports;return O["fYP"](e,r)},__wbindgen_throw:function(e,r){if(void 0===E)E=__webpack_require__.c[68228].exports;return E["Or8"](e,r)},__wbindgen_memory:function(){if(void 0===R)R=__webpack_require__.c[68228].exports;return R["oHO"]()}}}},95727:function(){return{"./cardano_message_signing_bg.js":{__wbindgen_object_drop_ref:function(e){if(void 0===N)N=__webpack_require__.c[78631].exports;return N["ug"](e)},__wbindgen_string_new:function(e,r){if(void 0===U)U=__webpack_require__.c[78631].exports;return U["h4"](e,r)},__wbindgen_debug_string:function(e,r){if(void 0===I)I=__webpack_require__.c[78631].exports;return I["fY"](e,r)},__wbindgen_throw:function(e,r){if(void 0===W)W=__webpack_require__.c[78631].exports;return W["Or"](e,r)},__wbindgen_rethrow:function(e){if(void 0===T)T=__webpack_require__.c[78631].exports;return T["nD"](e)}}}}};var J={401:[74836,95727]};__webpack_require__.w={};__webpack_require__.f.wasm=function(r,_){var i=J[r]||[];i.forEach(function(i,t){var n=e[i];if(n)_.push(n);else{var a=F[i]();var o=fetch(__webpack_require__.p+""+({401:{74836:"a8b99ab040d2b4746eef",95727:"1dc6099f080ee478a8a3"}})[r][i]+".module.wasm");var c;if(a&&"function"==typeof a.then&&"function"==typeof WebAssembly.compileStreaming)c=Promise.all([WebAssembly.compileStreaming(o),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)c=WebAssembly.instantiateStreaming(o,a);else{var u=o.then(function(e){return e.arrayBuffer()});c=u.then(function(e){return WebAssembly.instantiate(e,a)})}_.push(e[i]=c.then(function(e){return __webpack_require__.w[i]=(e.instance||e).exports}))}})}})();var _=__webpack_require__(20870)})();