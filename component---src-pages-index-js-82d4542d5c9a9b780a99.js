(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+bG7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=u(o),a=u(n("17x9"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillUnmount",value:function(){if(this.chartist)try{this.chartist.detach()}catch(e){throw new Error("Internal chartist error",e)}}},{key:"componentDidMount",value:function(){this.updateChart(this.props)}},{key:"componentDidUpdate",value:function(){this.updateChart(this.props)}},{key:"updateChart",value:function(e){var t=n("uki+"),r=e.type,o=e.data,i=e.options||{},a=e.responsiveOptions||[],u=void 0;if(this.chartist)this.chartist.update(o,i,a);else if(this.chartist=new t[r](this.chart,o,i,a),e.listener)for(u in e.listener)e.listener.hasOwnProperty(u)&&this.chartist.on(u,e.listener[u]);return this.chartist}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,a=t.children,u=t.data,c=t.type,s=a&&o.Children.map(a,(function(e){return(0,o.cloneElement)(e,{type:c,data:u})}));return i.default.createElement("div",{className:"ct-chart "+(n||""),ref:function(t){return e.chart=t},style:r},s)}}]),t}(o.Component);l.propTypes={type:a.default.oneOf(["Line","Bar","Pie"]).isRequired,data:a.default.object.isRequired,className:a.default.string,options:a.default.object,responsiveOptions:a.default.array,style:a.default.object},t.default=l},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=(n("+bG7"),n("Bl7J")),u=n("vrFN");t.default=function(){var e=Object(r.useState)({}),t=e[0],n=e[1];return Object(r.useEffect)((function(){fetch("/closure/data/data-files.json").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),o.a.createElement(a.a,null,o.a.createElement(u.a,{title:"Home"}),o.a.createElement("div",null,Object.keys(t).map((function(e){return o.a.createElement("div",{key:e,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left"}},e,o.a.createElement("div",{style:{marginLeft:"2rem"}},">",Object.keys(t[e]).map((function(n){return o.a.createElement(i.Link,{key:n,to:"/region/?region="+e+"&subregion="+n+"&filename="+t[e][n].filename+"&population="+t[e][n].population+"&employed_percent="+t[e][n].employed_percent},n)}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-82d4542d5c9a9b780a99.js.map