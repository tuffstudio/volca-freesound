!function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);d.length;)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={6:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=a.p+""+({0:"vendors~about~help~not-found~volca",1:"not-found",2:"about",3:"help",4:"volca"}[e]||e)+"."+{0:"ca90cd14",1:"8ae5dd81",2:"81e75097",3:"303a99ec",4:"fe77ece7"}[e]+".chunk.js";var c=setTimeout(function(){s({type:"timeout",target:i})},12e4);function s(t){i.onerror=i.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[e]=void 0}}i.onerror=i.onload=s,u.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./assets/",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;u.push([373,5]),n()}({148:function(e,t,n){"use strict";n.r(t);n(173);var r=n(20),o=n.n(r),u=n(101),a=n.n(u),i=(n(162),n(147)),c=n.n(i),s=n(71),l=n(11),f=n.n(l),d=n(103);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}({insertCss:f.a.func.isRequired,fetch:f.a.func.isRequired,pathname:f.a.string.isRequired,query:f.a.object},d.a.childContextTypes),m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),n=t,(r=[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return o.a.Children.only(this.props.children)}}])&&h(n.prototype,r),u&&h(n,u),t}();Object.defineProperty(m,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:b});var w=m;function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e,t){var n=t.baseUrl,r=t.cookie,o=t.schema,u=t.graphql,a={method:"POST",mode:n?"cors":"same-origin",credentials:n?"include":"same-origin",headers:g({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return i=regeneratorRuntime.mark(function t(r,i){var c,s,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r.startsWith("/graphql"),!(o&&u&&c)){t.next=7;break}return s=JSON.parse(i.body),t.next=5,u(o,s.query,{request:{}},null,s.variables);case 5:return l=t.sent,t.abrupt("return",Promise.resolve({status:l.errors?400:200,json:function(){return Promise.resolve(l)}}));case 7:return t.abrupt("return",c||r.startsWith("/api")?e("".concat(n).concat(r),g({},a,i,{headers:g({},a.headers,i&&i.headers)})):e(r,i));case 8:case"end":return t.stop()}},t,this)}),c=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=i.apply(e,t);function u(e,t){try{var u=o[e](t),i=u.value}catch(e){return void r(e)}u.done?n(i):Promise.resolve(i).then(a,c)}function a(e){u("next",e)}function c(e){u("throw",e)}a()})},function(e,t){return c.apply(this,arguments)};var i,c},E=n(34),P=n(145),x=n.n(P),R=(n(155),n(154),n(9));function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){T(e,t,n[t])})}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={count:0,duration:0,durationMax:1,isPaused:!1,isStarted:!1,position:0,rangeFirst:0,rangeLast:99,slotCount:100,slotIndex:null,slots:[],sounds:{allIds:[],byId:{}},totalDuration:0};var C=Object(E.combineReducers)({runtime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.u:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({},e,j({},t.payload.name,t.payload.value));default:return e}},sounds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.e:return A({},e,{position:t.position});case R.f:return A({},e);case R.d:return A({},e,{duration:0,slots:e.slots.reduce(function(t,n,r){return t.push(r===e.slotIndex?2:n),t},[]),totalDuration:e.totalDuration+e.duration});case R.m:return A({},e,{slotIndex:e.slots.findIndex(function(e){return 1===e||3===e})});case R.g:return A({},e,{duration:t.sound.duration,sounds:{allIds:_(e.sounds.allIds).concat([t.sound.id]),byId:A({},e.sounds.byId,T({},t.sound.id,{name:t.sound.name,id:t.sound.id,license:t.sound.license,preview:t.sound.previews["preview-hq-mp3"],duration:t.sound.duration,type:t.sound.type,url:t.sound.url,username:t.sound.username,slotIndex:e.slotIndex}))}});case R.i:return A({},e,{count:t.json.count});case R.r:return A({},e,{slots:e.slots.reduce(function(t,n,r){var o=e.slots[r];return e.rangeFirst<=r&&r<=e.rangeLast&&(0===o||2===o)&&(o=0===o?1:3),t.push(o),t},[])});case R.s:return A({},e,{rangeFirst:Math.max(0,Math.min(Math.round(t.value),e.slotCount-1))});case R.t:return A({},e,{rangeLast:Math.max(0,Math.min(Math.round(t.value),e.slotCount-1))});case R.q:return A({},e,{durationMax:Math.max(0,t.value)});case R.x:return A({},e,{slots:e.slots.reduce(function(n,r,o){var u=e.slots[o];if(t.index===o)switch(u){case 0:u=1;break;case 1:u=0;break;case 2:u=3;break;case 3:u=2;break;default:u=0}return n.push(u),n},[])});case R.a:return A({},e,{slots:new Array(e.slotCount).fill(0,0,e.slotCount)});case R.p:case R.b:return A({},e,{slots:new Array(e.slotCount).fill(1,0,e.slotCount)});case R.v:return A({},e,{isStarted:!0,slotIndex:null});case R.w:return A({},e,{isPaused:!1,isStarted:!1,slotIndex:null});case R.c:return A({},e,{isPaused:!0});default:return e}}});function I(e){return function(){var t,n=(t=regeneratorRuntime.mark(function t(n,r){var o,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:n,variables:r}),credentials:"include"},t.next=3,e("/graphql",o);case 3:if(200===(u=t.sent).status){t.next=6;break}throw new Error(u.statusText);case 6:return t.abrupt("return",u.json());case 7:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function a(e,t){try{var n=u[e](t),a=n.value}catch(e){return void o(e)}n.done?r(a):Promise.resolve(a).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})});return function(e,t){return n.apply(this,arguments)}}()}n(144);var N=n(50);function U(e,t,n,r,o){var u=document.head.querySelector("".concat(e,"[").concat(t,'="').concat(n,'"]'));if((!u||u.getAttribute(r)!==o)&&(u&&u.parentNode.removeChild(u),"string"==typeof o)){var a=document.createElement(e);a.setAttribute(t,n),a.setAttribute(r,o),document.head.appendChild(a)}}var D=n(142);var q,L,M={path:"",children:[{path:"",load:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,497))}},{path:"/transfer",load:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,497))}},{path:"/help",load:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,498))}},{path:"/about",load:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,495))}},{path:"(.*)",load:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,496))}}],action:(q=regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.next,e.next=3,n();case 3:return(r=e.sent).title="".concat(r.title||"Untitled Page"," - VF"),r.description=r.description||"",console.log("routes action() next: ",n),console.log("routes action() route: ",r),e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)}),L=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=q.apply(e,t);function u(e,t){try{var u=o[e](t),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(a,i)}function a(e){u("next",e)}function i(e){u("throw",e)}a()})},function(e){return L.apply(this,arguments)})};console.log("__DEV__",!1),console.log("routes.path",M.path);var J,Y=M,B=new D.a(Y,{baseUrl:"/volca-freesound",resolveRoute:function(e,t){return console.log("UniversalRouter resolveRoute context",e),console.log("UniversalRouter resolveRoute params",t),"function"==typeof e.route.load?e.route.load().then(function(n){return console.log("UniversalRouter context.route.load() action",n),n.default(e,t)}):"function"==typeof e.route.action?e.route.action(e,t):void 0}});function G(e,t,n,r){J||(J="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===u)t.children=r;else if(u>1){for(var i=new Array(u),c=0;c<u;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:J,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var V={insertCss:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return e._insertCss()});return function(){r.forEach(function(e){return e()})}},fetch:S(fetch,{baseUrl:window.App.apiUrl}),store:function(e,t){var n,r,o,u={fetch:r=(n=t).fetch,history:n.history,graphqlRequest:I(r)},a=[x.a.withExtraArgument(u)];return o=E.applyMiddleware.apply(void 0,a),Object(E.createStore)(C,e,o)}(window.App.state,{history:N.a}),storeSubscription:null},F=document.getElementById("app"),X=N.a.location,Q={};function W(e,t){return $.apply(this,arguments)}function $(){var e;return e=regeneratorRuntime.mark(function e(t,n){var r,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Q[X.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===n&&delete Q[t.key],X=t,r=!n,e.prev=4,V.pathname=t.pathname,V.query=c.a.parse(t.search),e.next=9,B.resolve(V);case 9:if(o=e.sent,X.key===t.key){e.next=12;break}return e.abrupt("return");case 12:if(!o.redirect){e.next=15;break}return N.a.replace(o.redirect),e.abrupt("return");case 15:u=r?a.a.hydrate:a.a.render,u(G(w,{context:V},void 0,o.component),F,function(){if(r){window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=document.getElementById("css");e&&e.parentNode.removeChild(e)}else{var n,u;document.title=o.title,n="description",u=o.description,U("meta","name",n,"content",u);var a=0,i=0,c=Q[t.key];if(c)a=c.scrollX,i=c.scrollY;else{var l=t.hash.substr(1);if(l){var f=document.getElementById(l);f&&(i=window.pageYOffset+f.getBoundingClientRect().top)}}window.scrollTo(a,i),window.ga&&window.ga("send","pageview",Object(s.createPath)(t))}}),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(4),e.next=23;break;case 23:console.error(e.t0),r||X.key!==t.key||(console.error("RSK will reload your page after error"),window.location.reload());case 25:case"end":return e.stop()}},e,this,[[4,19]])}),($=function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function a(e,t){try{var n=u[e](t),a=n.value}catch(e){return void o(e)}n.done?r(a):Promise.resolve(a).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})}).apply(this,arguments)}N.a.listen(W),W(X)},154:function(e){e.exports={}},373:function(e,t,n){n(372),e.exports=n(148)},50:function(e,t,n){"use strict";var r=n(143),o=n.n(r);t.a=o()()},9:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return f}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return p}),n.d(t,"l",function(){return h}),n.d(t,"m",function(){return y}),n.d(t,"n",function(){return v}),n.d(t,"o",function(){return b}),n.d(t,"p",function(){return m}),n.d(t,"q",function(){return w}),n.d(t,"r",function(){return g}),n.d(t,"s",function(){return O}),n.d(t,"t",function(){return S}),n.d(t,"u",function(){return E}),n.d(t,"v",function(){return P}),n.d(t,"w",function(){return x}),n.d(t,"x",function(){return R});var r="CLEAR_ALL",o="INITIALIZE",u="PAUSE",a="PLAY_END",i="PLAY_PROGRESS",c="PLAY_START",s="RECEIVE_RANDOM_SOUND",l="RECEIVE_SOUND",f="RECEIVE_SOUNDS",d="REJECT_RANDOM_SOUND",p="REJECT_SOUND",h="REJECT_SOUNDS",y="REQUEST_RANDOM_SOUND",v="REQUEST_SOUND",b="REQUEST_SOUNDS",m="SELECT_ALL",w="SET_DURATION_MAX",g="SET_RANGE",O="SET_RANGE_FIRST",S="SET_RANGE_LAST",E="SET_RUNTIME_VARIABLE",P="START",x="STOP",R="TOGGLE_SLOT"}});
//# sourceMappingURL=client.6ea7a2af.js.map