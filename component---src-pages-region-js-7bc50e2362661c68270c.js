(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+bG7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n("q1tI"),i=c(o),u=c(n("17x9"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=function(t){function e(){return a(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentWillUnmount",value:function(){if(this.chartist)try{this.chartist.detach()}catch(t){throw new Error("Internal chartist error",t)}}},{key:"componentDidMount",value:function(){this.updateChart(this.props)}},{key:"componentDidUpdate",value:function(){this.updateChart(this.props)}},{key:"updateChart",value:function(t){var e=n("uki+"),r=t.type,o=t.data,i=t.options||{},u=t.responsiveOptions||[],c=void 0;if(this.chartist)this.chartist.update(o,i,u);else if(this.chartist=new e[r](this.chart,o,i,u),t.listener)for(c in t.listener)t.listener.hasOwnProperty(c)&&this.chartist.on(c,t.listener[c]);return this.chartist}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.style,u=e.children,c=e.data,a=e.type,f=u&&o.Children.map(u,(function(t){return(0,o.cloneElement)(t,{type:a,data:c})}));return i.default.createElement("div",{className:"ct-chart "+(n||""),ref:function(e){return t.chart=e},style:r},f)}}]),e}(o.Component);s.propTypes={type:u.default.oneOf(["Line","Bar","Pie"]).isRequired,data:u.default.object.isRequired,className:u.default.string,options:u.default.object,responsiveOptions:u.default.array,style:u.default.object},e.default=s},"/GqU":function(t,e,n){var r=n("RK3t"),o=n("HYAF");t.exports=function(t){return r(o(t))}},"/b8u":function(t,e,n){var r=n("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"/qmn":function(t,e,n){var r=n("2oRo");t.exports=r.Promise},"0BK2":function(t,e){t.exports={}},"0Dky":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"0GbY":function(t,e,n){var r=n("Qo9l"),o=n("2oRo"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},"0eef":function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},"2oRo":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("yLpj"))},"33Wh":function(t,e,n){var r=n("yoRg"),o=n("eDl+");t.exports=Object.keys||function(t){return r(t,o)}},"6JNq":function(t,e,n){var r=n("UTVS"),o=n("Vu81"),i=n("Bs8V"),u=n("m/L8");t.exports=function(t,e){for(var n=o(e),c=u.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||c(t,s,a(e,s))}}},"6LWA":function(t,e,n){var r=n("xrYK");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"7ueG":function(t,e,n){"use strict";var r=n("I+eb"),o=n("WKiH").start,i=n("yNLB")("trimStart"),u=i?function(){return o(this)}:"".trimStart;r({target:"String",proto:!0,forced:i},{trimStart:u,trimLeft:u})},"8GlL":function(t,e,n){"use strict";var r=n("HAuM"),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},"93I0":function(t,e,n){var r=n("VpIT"),o=n("kOOl"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},A2ZE:function(t,e,n){var r=n("HAuM");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},BIHw:function(t,e,n){"use strict";var r=n("I+eb"),o=n("or9q"),i=n("ewvW"),u=n("UMSQ"),c=n("ppGB"),a=n("ZfDv");r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=i(this),n=u(e.length),r=a(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:c(t)),r}})},Bs8V:function(t,e,n){var r=n("g6v/"),o=n("0eef"),i=n("XGwC"),u=n("/GqU"),c=n("wE6v"),a=n("UTVS"),f=n("DPsx"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=u(t),e=c(e,!0),f)try{return s(t,e)}catch(n){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},DPsx:function(t,e,n){var r=n("g6v/"),o=n("0Dky"),i=n("zBJ4");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(t,e,n){var r=n("0GbY");t.exports=r("document","documentElement")},HAuM:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},HYAF:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},HiXI:function(t,e,n){"use strict";var r=n("I+eb"),o=n("WKiH").end,i=n("yNLB")("trimEnd"),u=i?function(){return o(this)}:"".trimEnd;r({target:"String",proto:!0,forced:i},{trimEnd:u,trimRight:u})},"I+eb":function(t,e,n){var r=n("2oRo"),o=n("Bs8V").f,i=n("kRJp"),u=n("busE"),c=n("zk60"),a=n("6JNq"),f=n("lMq5");t.exports=function(t,e){var n,s,l,p,v,y=t.target,h=t.global,m=t.stat;if(n=h?r:m?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(h?s:y+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,s,p,t)}}},I8vh:function(t,e,n){var r=n("ppGB"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},JBy8:function(t,e,n){var r=n("yoRg"),o=n("eDl+").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"N+g0":function(t,e,n){var r=n("g6v/"),o=n("m/L8"),i=n("glrk"),u=n("33Wh");t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=u(e),c=r.length,a=0;c>a;)o.f(t,n=r[a++],e[n]);return t}},QGkA:function(t,e,n){n("RNIs")("flat")},Qo9l:function(t,e,n){var r=n("2oRo");t.exports=r},RK3t:function(t,e,n){var r=n("0Dky"),o=n("xrYK"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},RNIs:function(t,e,n){var r=n("tiKp"),o=n("fHMY"),i=n("m/L8"),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},SEBh:function(t,e,n){var r=n("glrk"),o=n("HAuM"),i=n("tiKp")("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||null==(n=r(u)[i])?e:o(n)}},STAE:function(t,e,n){var r=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},TWQb:function(t,e,n){var r=n("/GqU"),o=n("UMSQ"),i=n("I8vh"),u=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},UMSQ:function(t,e,n){var r=n("ppGB"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},UTVS:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},VpIT:function(t,e,n){var r=n("xDBR"),o=n("xs3f");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,e,n){var r=n("0GbY"),o=n("JBy8"),i=n("dBg+"),u=n("glrk");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},WJkJ:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},WKiH:function(t,e,n){var r=n("HYAF"),o="["+n("WJkJ")+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},XGwC:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ZfDv:function(t,e,n){var r=n("hh1v"),o=n("6LWA"),i=n("tiKp")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a6Pa:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("Bl7J"),u=n("vrFN"),c=function(t){var e=t.name,n=t.website,r=t.employees,i=t.status,u=t.population,c=t.layoffs,a=t.employed_percent,f=c>0?(parseInt(c,10)/(parseInt(u,10)*parseInt(a,10)/100)*100).toFixed(5):0;return o.a.createElement("div",{style:{padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left",border:"1px solid black",margin:"1em"}},o.a.createElement("h3",null,e),o.a.createElement("a",{href:n},"Company Site"),o.a.createElement("p",null,"Status: ",i),o.a.createElement("p",null,"Number of Employees: ",r>=0?r:"Not available"),o.a.createElement("p",null,"Layoffs: ",c>=0?c:"Not available"),o.a.createElement("p",null,"Percent of Employed Pop: ",f))},a=n("TXyo"),f=n.n(a),s=n("+bG7"),l=n.n(s),p=n("Wbzz"),v=function(t){var e=t.search,n=Object(r.useState)([]),i=n[0],u=n[1],a=Object(r.useState)({population:1}),s=a[0],v=a[1];return Object(r.useEffect)((function(){var t=new URLSearchParams(e.split("?")[1]),n=t.get("region"),r=t.get("subregion"),o=t.get("filename"),i=t.get("population"),c=t.get("employed_percent");v((function(t){return Object.assign({},t,{population:i,region:n,subregion:r,employed_percent:c})})),fetch("/closure/data/"+n+"/"+o).then((function(t){return t.text()})).then((function(t){return f()().fromString(t)})).then((function(t){return u(t)}))}),[e]),Object(r.useEffect)((function(){var t=0;v((function(e){return Object.assign({},e,{labels:i.map((function(t,e){return e})),series:[i.map((function(e){return e.layoffs>=0?t+=parseInt(e.layoffs,10):0}))]})}))}),[i]),o.a.createElement("div",{style:{padding:"1em",display:"flex",flexDirection:"column"}},o.a.createElement("div",null,o.a.createElement(p.Link,{to:"/"},"Home")," > "+s.region+" > "+s.subregion),s.series&&o.a.createElement(l.a,{data:{labels:s.labels,series:s.series},options:{low:0,showArea:!1},type:"Line"}),o.a.createElement("div",{style:{padding:"1em",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}},i.map((function(t){return o.a.createElement(c,Object.assign({key:t.name},t,s))}))))};e.default=function(t){var e=t.location.search;return o.a.createElement(i.a,null,o.a.createElement(u.a,{title:"Home"}),o.a.createElement(v,{search:e}))}},afO8:function(t,e,n){var r,o,i,u=n("f5p1"),c=n("2oRo"),a=n("hh1v"),f=n("kRJp"),s=n("UTVS"),l=n("93I0"),p=n("0BK2"),v=c.WeakMap;if(u){var y=new v,h=y.get,m=y.has,d=y.set;r=function(t,e){return d.call(y,t,e),e},o=function(t){return h.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var b=l("state");p[b]=!0,r=function(t,e){return f(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},busE:function(t,e,n){var r=n("2oRo"),o=n("kRJp"),i=n("UTVS"),u=n("zk60"),c=n("iSVu"),a=n("afO8"),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},"dBg+":function(t,e){e.f=Object.getOwnPropertySymbols},"eDl+":function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(t,e,n){var r=n("HYAF");t.exports=function(t){return Object(r(t))}},f5p1:function(t,e,n){var r=n("2oRo"),o=n("iSVu"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},fHMY:function(t,e,n){var r,o=n("glrk"),i=n("N+g0"),u=n("eDl+"),c=n("0BK2"),a=n("G+Rx"),f=n("zBJ4"),s=n("93I0"),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,e;y=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete y.prototype[u[n]];return y()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=y(),void 0===e?n:i(n,e)}},"g6v/":function(t,e,n){var r=n("0Dky");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,e,n){var r=n("hh1v");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,e,n){var r=n("xs3f"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},kOOl:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},kRJp:function(t,e,n){var r=n("g6v/"),o=n("m/L8"),i=n("XGwC");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},lMq5:function(t,e,n){var r=n("0Dky"),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"m/L8":function(t,e,n){var r=n("g6v/"),o=n("DPsx"),i=n("glrk"),u=n("wE6v"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},or9q:function(t,e,n){"use strict";var r=n("6LWA"),o=n("UMSQ"),i=n("A2ZE"),u=function(t,e,n,c,a,f,s,l){for(var p,v=a,y=0,h=!!s&&i(s,l,3);y<c;){if(y in n){if(p=h?h(n[y],y,e):n[y],f>0&&r(p))v=u(t,e,p,o(p.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=p}v++}y++}return v};t.exports=u},p532:function(t,e,n){"use strict";var r=n("I+eb"),o=n("xDBR"),i=n("/qmn"),u=n("0Dky"),c=n("0GbY"),a=n("SEBh"),f=n("zfnd"),s=n("busE");r({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=a(this,c("Promise")),n="function"==typeof t;return this.then(n?function(n){return f(e,t()).then((function(){return n}))}:t,n?function(n){return f(e,t()).then((function(){throw n}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||s(i.prototype,"finally",c("Promise").prototype.finally)},ppGB:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},tiKp:function(t,e,n){var r=n("2oRo"),o=n("VpIT"),i=n("UTVS"),u=n("kOOl"),c=n("STAE"),a=n("/b8u"),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},wE6v:function(t,e,n){var r=n("hh1v");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,e){t.exports=!1},xrYK:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},xs3f:function(t,e,n){var r=n("2oRo"),o=n("zk60"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yNLB:function(t,e,n){var r=n("0Dky"),o=n("WJkJ");t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},yoRg:function(t,e,n){var r=n("UTVS"),o=n("/GqU"),i=n("TWQb").indexOf,u=n("0BK2");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)!r(u,n)&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},zBJ4:function(t,e,n){var r=n("2oRo"),o=n("hh1v"),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},zfnd:function(t,e,n){var r=n("glrk"),o=n("hh1v"),i=n("8GlL");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},zk60:function(t,e,n){var r=n("2oRo"),o=n("kRJp");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}}}]);
//# sourceMappingURL=component---src-pages-region-js-7bc50e2362661c68270c.js.map