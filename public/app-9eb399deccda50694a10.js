webpackJsonp([0xd2a57dc1d883],{120:function(n,e){"use strict";function t(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function o(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=o;var r=[]},184:function(n,e,t){"use strict";var o;e.components={"component---src-templates-post-js":t(309),"component---src-pages-404-js":t(303),"component---src-pages-archive-js":t(304),"component---src-pages-blog-js":t(305),"component---src-pages-contact-js":t(306),"component---src-pages-index-js":t(307),"component---src-pages-work-js":t(308)},e.json=(o={"layout-index.json":t(18),"blog-first-post.json":t(314)},o["layout-index.json"]=t(18),o["blog-second-post.json"]=t(315),o["layout-index.json"]=t(18),o["404.json"]=t(310),o["layout-index.json"]=t(18),o["archive.json"]=t(312),o["layout-index.json"]=t(18),o["blog.json"]=t(313),o["layout-index.json"]=t(18),o["contact.json"]=t(316),o["layout-index.json"]=t(18),o["index.json"]=t(317),o["layout-index.json"]=t(18),o["work.json"]=t(318),o["layout-index.json"]=t(18),o["404-html.json"]=t(311),o),e.layouts={"component---src-layouts-index-js":t(302)}},185:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},c=t(1),s=o(c),l=t(7),f=o(l),p=t(121),d=o(p),h=t(51),m=o(h),g=t(120),y=function(n){var e=n.children;return s.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);t?this.setState({location:n.location,pageResources:t}):d.default.getResourcesForPathname(n.location.pathname,function(t){e.setState({location:n.location,pageResources:t})})}},e.prototype.componentDidMount=function(){var n=this;m.default.on("onPostLoadPageResources",function(e){e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources})}),e=n[0];return this.props.page?this.state.pageResources?e||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=v,n.exports=e.default},51:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(337),a=o(r),u=(0,a.default)();n.exports=u},186:function(n,e,t){"use strict";var o=t(68),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(u,{path:n.path})||(0,o.matchPath)(u,{path:n.matchPath}))return i=n,r[u]=n,!0}else{if((0,o.matchPath)(u,{path:n.path,exact:!0}))return i=n,r[u]=n,!0;if((0,o.matchPath)(u,{path:n.path+"index.html"}))return i=n,r[u]=n,!0}return!1}),i}}},311:function(n,e,t){t(8),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(326)})})}},310:function(n,e,t){t(8),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(327)})})}},312:function(n,e,t){t(8),n.exports=function(n){return t.e(0xd30560ed0a0a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(328)})})}},314:function(n,e,t){t(8),n.exports=function(n){return t.e(0xfabc74b670c1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(329)})})}},315:function(n,e,t){t(8),n.exports=function(n){return t.e(0xcfa4829fa4c6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(330)})})}},313:function(n,e,t){t(8),n.exports=function(n){return t.e(49683490770531,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(331)})})}},316:function(n,e,t){t(8),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(332)})})}},317:function(n,e,t){t(8),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(333)})})}},18:function(n,e,t){t(8),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(95)})})}},318:function(n,e,t){t(8),n.exports=function(n){return t.e(32551418774257,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(334)})})}},302:function(n,e,t){t(8),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(187)})})}},121:function(n,e,t){(function(e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(1),a=(o(r),t(186)),u=o(a),i=t(51),c=o(i),s=void 0,l={},f={},p={},d={},h={},m=[],g=[],y={},v=[],R={},j=function(n){return n&&n.default||n},x=void 0,w=!0;x=t(188)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(n){_(n,function(){v=v.filter(function(e){return e!==n}),x.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){x.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){x.onPostLoadPageResources(n)});var b=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},P=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},_=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o="component---"===n.slice(0,12)?f.components[n]||f.layouts[n]:f.json[n];o(function(e,o){d[n]=o,t(e,o)})}},C=function(n,t){h[n]?e.nextTick(function(){t(null,h[n])}):_(n,function(e,o){if(e)t(e);else{var r=j(o());h[n]=r,t(e,r)}})},N=1,k={empty:function(){g=[],y={},R={},v=[],m=[]},addPagesArray:function(n){m=n;var e="";e="",s=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){f=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!m.some(function(e){return e.path===n}))return!1;var e=1/N;N+=1,y[n]?y[n]+=1:y[n]=1,k.has(n)||g.unshift(n),g.sort(P);var t=s(n);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+e:R[t.jsonName]=1+e,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+e:R[t.componentChunkName]=1+e,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(b),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return s(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(n)||navigator.serviceWorker.getRegistrations().then(function(n){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),w=!1;var o=s(n);if(!o)return void console.log("A page wasn't found for \""+n+'"');if(n=o.path,p[n])return e.nextTick(function(){t(p[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[n]})}),p[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return C(o.componentChunkName,function(n,e){n&&console.log("Loading the component for "+o.path+" failed"),r=e,i()}),C(o.jsonName,function(n,e){n&&console.log("Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&C(o.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};n.exports=k}).call(e,t(62))},335:function(n,e){n.exports=[{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-first-post.json",path:"/blog/first-post"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-second-post.json",path:"/blog/second-post"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-archive-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"archive.json",path:"/archive/"},{componentChunkName:"component---src-pages-blog-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-contact-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-work-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"work.json",path:"/work/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},188:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(120),u=t(1),i=o(u),c=t(96),s=o(c),l=t(68),f=t(322),p=t(93),d=o(p),h=t(289),m=o(h),g=t(51),y=o(g),v=t(335),R=o(v),j=t(336),x=o(j),w=t(185),b=o(w),P=t(184),_=o(P),C=t(121),N=o(C);t(282),window.___emitter=y.default,N.default.addPagesArray(R.default),N.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=N.default,window.matchPath=l.matchPath;var k=(0,d.default)(),E=x.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(k.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){O(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(189);var o=function(n){function e(t){t.page.path===N.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=E[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);N.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:k.location,action:k.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:k})[0],p=function(n){var e=n.children;return i.default.createElement(l.Router,{history:k},e)},d=(0,l.withRouter)(b.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(d,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,m.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},336:function(n,e){n.exports=[]},189:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(51),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},289:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},8:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),s(!0))}))))}}o()},337:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},62:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(f===clearTimeout)return clearTimeout(n);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var n=r(u);m=!0;for(var e=h.length;e;){for(d=h,h=[];++g<e;)d&&d[g].run();g=-1,e=h.length}d=null,m=!1,a(n)}}function c(n,e){this.fun=n,this.array=e}function s(){}var l,f,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(n){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];h.push(new c(n,e)),1!==h.length||m||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},303:function(n,e,t){t(8),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(207)})})}},304:function(n,e,t){t(8),n.exports=function(n){return t.e(94533468323174,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(208)})})}},305:function(n,e,t){t(8),n.exports=function(n){return t.e(0xc19374f83753,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(209)})})}},306:function(n,e,t){t(8),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(210)})})}},307:function(n,e,t){t(8),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(211)})})}},308:function(n,e,t){t(8),n.exports=function(n){return t.e(23899280101116,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(212)})})}},309:function(n,e,t){t(8),n.exports=function(n){return t.e(0xb1abc741118f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(213)})})}}});
//# sourceMappingURL=app-9eb399deccda50694a10.js.map