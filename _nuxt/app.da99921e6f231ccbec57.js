webpackJsonp([37],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"1uug":function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"3px",color:"#e9ecef",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},"2we2":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("yviF"),o=n.n(r);n("881v");o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyDemX_yG-2ZDJCwvpcY-H2MaovvOY1TiXg",authDomain:"innovaciondocente-utpl.firebaseapp.com",databaseURL:"https://innovaciondocente-utpl.firebaseio.com",projectId:"innovaciondocente-utpl",storageBucket:"innovaciondocente-utpl.appspot.com",messagingSenderId:"1011505668181"}),o.a.firestore().settings({timestampsInSnapshots:!0});var a=o.a.firestore()},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},"D/2v":function(t,e,n){"use strict";var r=n("/5sW");r.default.filter("capitalize",function(t){return t.toUpperCase()}),r.default.filter("slice",function(t,e,n,r){return t.length>n?t.slice(e,n)+(void 0==r?"...":r):t}),r.default.filter("dateTimestamp",function(t){return new Date(1e3*t.seconds).toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),r.default.filter("proyectoInnovacionType",function(t){return"proyecto-actual"==t?"Proyectos Actuales":"Buenas Prácticas"}),r.default.filter("date",function(t){var e=t.split("-"),n=void 0;switch(parseInt(e[1])){case 1:n="Enero";break;case 2:n="Febrero";break;case 3:n="Marzo";break;case 4:n="Abril";break;case 5:n="Mayo";break;case 6:n="Junio";break;case 7:n="Julio";break;case 8:n="Agosto";break;case 9:n="Septiembre";break;case 10:n="Octubre";break;case 11:n="Noviembre";break;case 12:n="Diciembre"}return e[2]+" de "+n+", "+e[0]})},EeEB:function(t,e,n){"use strict";var r=n("/5sW"),o=n("cTzj"),a=n.n(o);r.default.use(a.a)},F88d:function(t,e,n){"use strict";var r=n("1uug"),o=n("P+aQ"),a=!1;var i=function(t){a||n("aHTB")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,c=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;a.nuxtChildDepth=l;var d=c[l]||u,f={};r.forEach(function(t){void 0!==d[t]&&(f[t]=d[t])});var p={};o.forEach(function(t){"function"==typeof d[t]&&(p[t]=d[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:f,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J1QK:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[400===t.error.statusCode?n("h1",[t._v("\n      BAD REQUEST\n    ")]):401===t.error.statusCode?n("h1",[t._v("\n      UNAUTHORIZED\n    ")]):402===t.error.statusCode?n("h1",[t._v("\n      FORBIDDEN\n    ")]):403===t.error.statusCode?n("h1",[t._v("\n      NOT FOUND\n    ")]):404===t.error.statusCode?n("h1",[t._v("\n      SERVER ERROR\n    ")]):n("h1",[t._v("\n      An error occurred\n    ")]),n("h2",[t._v("\n      "+t._s(t.error.statusCode)+"\n    ")])]),t._m(0),n("div",{staticClass:"return"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("\n      HOME\n    ")])],1)])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"artboard"},[e("div",{staticClass:"bb8"},[e("div",{staticClass:"bb8-body"},[e("div",{staticClass:"dot dot-1"},[e("div",{staticClass:"line line-1"}),e("div",{staticClass:"line line-2"}),e("div",{staticClass:"line line-3"})]),e("div",{staticClass:"dot dot-2"}),e("div",{staticClass:"circle circle-1"}),e("div",{staticClass:"circle circle-2"}),e("div",{staticClass:"circle circle-3"})]),e("div",{staticClass:"body-shadow-crop"},[e("div",{staticClass:"body-shadow"})]),e("div",{staticClass:"bb8-head"},[e("div",{staticClass:"head-bottom"},[e("div",{staticClass:"head-side-1"}),e("div",{staticClass:"head-side-2"}),e("div",{staticClass:"head-bottom-base"})]),e("div",{staticClass:"head-top-crop"},[e("div",{staticClass:"head-top"})]),e("div",{staticClass:"lens"}),e("div",{staticClass:"freckle"})]),e("div",{staticClass:"speedlines"},[e("div",{staticClass:"one tail"}),e("div",{staticClass:"two tail"}),e("div",{staticClass:"three"}),e("div",{staticClass:"four"}),e("div",{staticClass:"five tail"})]),e("div",{staticClass:"sparkles"},[e("div",{staticClass:"one small pulse-1"}),e("div",{staticClass:"two blue small pulse-2"}),e("div",{staticClass:"three blue med pulse-3"}),e("div",{staticClass:"four orange pulse-2"}),e("div",{staticClass:"five orange pulse-1"}),e("div",{staticClass:"six blue small pulse"}),e("div",{staticClass:"seven blue small pulse"}),e("div",{staticClass:"eight small pulse-3"}),e("div",{staticClass:"nine pulse"}),e("div",{staticClass:"ten orange small-1 pulse"}),e("div",{staticClass:"eleven small pulse"}),e("div",{staticClass:"twelve small pulse-2"}),e("div",{staticClass:"thirteen orange small pulse"}),e("div",{staticClass:"fourteen orange med pulse-3"}),e("div",{staticClass:"fifteen small pulse-1"}),e("div",{staticClass:"sixteen small pulse"})]),e("div",{staticClass:"ground"},[e("div",{staticClass:"one"},[e("div",{staticClass:"bump move-1"})]),e("div",{staticClass:"two"}),e("div",{staticClass:"three"},[e("div",{staticClass:"bump move-2"})]),e("div",{staticClass:"four"},[e("div",{staticClass:"bump"})]),e("div",{staticClass:"five"}),e("div",{staticClass:"six"},[e("div",{staticClass:"bump move-2"})]),e("div",{staticClass:"seven"},[e("div",{staticClass:"bump"})]),e("div",{staticClass:"eight"},[e("div",{staticClass:"bump move-1"})])])])])}]};e.a=o},K6if:function(t,e,n){"use strict";var r=n("/5sW"),o=n("sUu7");r.default.use(o.default,{inject:!0})},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),s=n.n(i),c=n("//Fk"),u=n.n(c),l=n("Xxa5"),d=n.n(l),f=n("mvHQ"),p=n.n(f),h=n("exGp"),m=n.n(h),v=n("fZjL"),x=n.n(v),b=n("woOf"),y=n.n(b),g=n("/5sW"),C=n("unZF"),w=n("qcny"),_=n("YLfZ"),k=(r=m()(d.a.mark(function t(e,n,r){var o,a,i=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!R.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(_.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(_.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(o=m()(d.a.mark(function t(e,n,r){var o,a,i,s,c,l,f,p,h=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];j=Object(_.e)(n,e).map(function(t,r){return Object(_.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(_.m)(R,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=R.nuxt.dateErr,this._hadError=!!R.nuxt.err,i=[],(s=Object(_.e)(e,i)).length){t.next=24;break}return t.next=13,L.call(this,s,R.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof w.a.layout?w.a.layout(R.context):w.a.layout);case 17:return c=t.sent,t.next=20,L.call(this,s,R.context,c);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return R.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(D(s,e,n)),t.prev=26,t.next=29,L.call(this,s,R.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!R.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(l=s[0].options.layout)&&(l=l(R.context)),t.next=37,this.loadLayout(l);case 37:return l=t.sent,t.next=40,L.call(this,s,R.context,l);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!R.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(f=!0,s.forEach(function(t){f&&"function"==typeof t.options.validate&&(f=t.options.validate({params:e.params||{},query:e.query||{}}))}),f){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,u.a.all(s.map(function(t,n){if(t._path=Object(_.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==j[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return u.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,c=a&&s?30:45;if(a){var l=Object(_.j)(t.options.asyncData,R.context).then(function(e){Object(_.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});o.push(l)}if(s){var d=t.options.fetch(R.context);d&&(d instanceof u.a||"function"==typeof d.then)||(d=u.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(d)}return u.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),j=s.map(function(t,n){return Object(_.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=w.a.layout)&&(p=p(R.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=m()(d.a.mark(function t(e){var n,r,o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=e.app,T=e.router,t.next=4,u.a.all(S(T));case 4:if(n=t.sent,r=new g.default(R),o=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){W(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(D(n,T.currentRoute)),j=T.currentRoute.matched.map(function(t){return Object(_.b)(t.path)(T.currentRoute.params)})),r.$loading={},A.error&&r.error(A.error),T.beforeEach(k.bind(r)),T.beforeEach($.bind(r)),T.afterEach(F),T.afterEach(M.bind(r)),!A.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:$.call(r,T.currentRoute,T.currentRoute,function(t){if(!t)return F(T.currentRoute,T.currentRoute),I.call(r,T.currentRoute),void o();T.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),j=[],R=void 0,T=void 0,A=window.__NUXT__||{},O=g.default.config.errorHandler;function D(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=y()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);x()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function q(t,e){return A.serverRendered&&e&&Object(_.a)(t,e),t._Ctor=t,t}function S(t){var e,n=this,r=Object(_.d)(t.options.base,t.options.mode);return Object(_.c)(t.match(r),(e=m()(d.a.mark(function t(e,r,o,a,i){var s;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=q(Object(_.l)(e),A.data?A.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function L(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof C.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),C.a[t])}),!a)return Object(_.i)(o,e)}function F(t,e){Object(_.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function I(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?w.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(R.context)),this.setLayout(e)}function M(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(_.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&j[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),I.call(n,t)})}function W(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),T.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}g.default.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()};if(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof O)return O.apply(void 0,arguments);console.error(t.message||r.message)},Object(w.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("dCjn"),o=n("J1QK"),a=!1;var i=function(t){a||n("bDsJ")},s=n("VU/8")(r.a,o.a,!1,i,"data-v-d5ea9138",null);s.options.__file="layouts/error.vue",e.a=s.exports},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},Wq0Q:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/innovaciondocente/sw.js",{scope:"/innovaciondocente/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||b;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=y,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=C,e.k=w,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return f.a.resolve();return j(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=j,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},c=s.pretty?T:encodeURIComponent,u=0;u<t.length;u++){var l=t[u];if("string"!=typeof l){var d,f=i[l.name];if(null==f){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+o()(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(d=c(f[p]),!e[u].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+o()(d)+"`");a+=(0===p?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(f),!e[u].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');a+=l.prefix+d}}else a+=l}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=R.exec(t));){var c=n[0],u=n[1],l=n.index;if(i+=t.slice(a,l),a=l+c.length,u)i+=u[1];else{var d=t[a],f=n[2],p=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var b=null!=f&&null!=d&&d!==f,y="+"===v||"*"===v,g="?"===v||"*"===v,C=n[2]||s,w=h||m;r.push({name:p||o++,prefix:f||"",delimiter:C,optional:g,repeat:y,partial:b,asterisk:!!x,pattern:w?O(w):x?".*":"[^"+A(C)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),d=n("//Fk"),f=n.n(d),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),b=function(){return{}};function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function C(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function w(t){var e,n=this;return f.a.all(C(t,(e=l()(c.a.mark(function t(e,r,o,a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=y(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var _,k,$=(_=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return t.abrupt("return",v()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return _.apply(this,arguments)}),E=(k=l()(c.a.mark(function t(e,n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=13;break}t.t0=!0,t.t1=e,t.t2=n.payload,t.t3=n.error,t.t4={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/innovaciondocente/",env:t.t4},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=D(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 13:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=21;break}return t.next=20,$(n.route);case 20:e.context.route=t.sent;case 21:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=27;break}return t.next=26,$(n.from);case 26:e.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function j(t,e){var n=void 0;return(n=2===t.length?new f.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof f.a||"function"==typeof n.then)||(n=f.a.resolve(n)),n}var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function D(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),c=void 0;return 2===(a=s.split("#")).length&&(s=a[0],c=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=c?"#"+c:""}},aHTB:function(t,e){},bDsJ:function(t,e){},dCjn:function(t,e,n){"use strict";e.a={props:["error"],layout:"empty"}},mtxM:function(t,e,n){"use strict";e.a=function(){return new o.default({mode:"history",base:"/innovaciondocente/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:W,routes:[{path:"/acerca-nosotros",component:a,name:"acerca-nosotros"},{path:"/formacion-docente/jornadas-de-reflexion",component:i,name:"formacion-docente-jornadas-de-reflexion"},{path:"/formacion-docente/desarrollo-asignatura",component:s,name:"formacion-docente-desarrollo-asignatura"},{path:"/observatorio-edutendencias/tips-innovacion",component:c,name:"observatorio-edutendencias-tips-innovacion"},{path:"/innovacion-docente/proyecto-mentores",component:u,name:"innovacion-docente-proyecto-mentores"},{path:"/innovacion-docente/buenas-practicas",component:l,children:[{path:"",component:d,name:"innovacion-docente-buenas-practicas-index"},{path:":id",component:f,name:"innovacion-docente-buenas-practicas-index-id"}]},{path:"/innovacion-docente/proyectos-actuales",component:p,name:"innovacion-docente-proyectos-actuales"},{path:"/acerca-nosotros/nuestros-servicios",component:h,name:"acerca-nosotros-nuestros-servicios"},{path:"/acerca-nosotros/nuestro-equipo",component:m,name:"acerca-nosotros-nuestro-equipo"},{path:"/formacion-docente/programa-formacion",component:v,name:"formacion-docente-programa-formacion"},{path:"/innovacion-docente/convocatorias",component:x,name:"innovacion-docente-convocatorias"},{path:"/innovacion-docente/proyectos-innovacion",component:b,name:"innovacion-docente-proyectos-innovacion"},{path:"/innovacion-docente/ayudante-catedra",component:y,name:"innovacion-docente-ayudante-catedra"},{path:"/formacion-docente/cafe-cientifico",component:g,name:"formacion-docente-cafe-cientifico"},{path:"/observatorio-edutendencias/noticias",component:C,name:"observatorio-edutendencias-noticias"},{path:"/formacion-docente/desarrollo-asignatura/repositorio",component:w,name:"formacion-docente-desarrollo-asignatura-repositorio"},{path:"/formacion-docente/cafe-cientifico/inscripcion",component:_,name:"formacion-docente-cafe-cientifico-inscripcion"},{path:"/observatorio-edutendencias/tips-innovacion/tips",component:k,name:"observatorio-edutendencias-tips-innovacion-tips"},{path:"/formacion-docente/programa-formacion/cursos-especificos",component:$,name:"formacion-docente-programa-formacion-cursos-especificos"},{path:"/formacion-docente/desarrollo-asignatura/recursos",component:E,name:"formacion-docente-desarrollo-asignatura-recursos"},{path:"/formacion-docente/desarrollo-asignatura/elaborar",component:j,name:"formacion-docente-desarrollo-asignatura-elaborar"},{path:"/formacion-docente/jornadas-de-reflexion/jornadas-anteriores",component:R,children:[{path:"",component:T,name:"formacion-docente-jornadas-de-reflexion-jornadas-anteriores"},{path:":id",component:A,name:"formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id"}]},{path:"/formacion-docente/desarrollo-asignatura/asesoramiento",component:O,name:"formacion-docente-desarrollo-asignatura-asesoramiento"},{path:"/formacion-docente/programa-formacion/potencia-formacion",component:D,name:"formacion-docente-programa-formacion-potencia-formacion"},{path:"/formacion-docente/programa-formacion/cursos",component:q,name:"formacion-docente-programa-formacion-cursos"},{path:"/observatorio-edutendencias/noticias/:id?",component:S,name:"observatorio-edutendencias-noticias-id"},{path:"/formacion-docente/programa-formacion/:id?",component:L,name:"formacion-docente-programa-formacion-id"},{path:"/formacion-docente/cafe-cientifico/:id?",component:F,name:"formacion-docente-cafe-cientifico-id"},{path:"/innovacion-docente/proyectos-innovacion/:id?",component:I,name:"innovacion-docente-proyectos-innovacion-id"},{path:"/",component:M,name:"index"}],fallback:!1})};var r=n("/5sW"),o=n("/ocq");r.default.use(o.default);var a=function(){return n.e(32).then(n.bind(null,"hQ3j")).then(function(t){return t.default||t})},i=function(){return n.e(8).then(n.bind(null,"WbGD")).then(function(t){return t.default||t})},s=function(){return n.e(27).then(n.bind(null,"nE/x")).then(function(t){return t.default||t})},c=function(){return n.e(11).then(n.bind(null,"5/j4")).then(function(t){return t.default||t})},u=function(){return n.e(15).then(n.bind(null,"wA2V")).then(function(t){return t.default||t})},l=function(){return n.e(18).then(n.bind(null,"JMSL")).then(function(t){return t.default||t})},d=function(){return n.e(33).then(n.bind(null,"s8zg")).then(function(t){return t.default||t})},f=function(){return n.e(17).then(n.bind(null,"yQ2A")).then(function(t){return t.default||t})},p=function(){return n.e(14).then(n.bind(null,"DK+M")).then(function(t){return t.default||t})},h=function(){return n.e(35).then(n.bind(null,"Jchs")).then(function(t){return t.default||t})},m=function(){return n.e(10).then(n.bind(null,"V501")).then(function(t){return t.default||t})},v=function(){return n.e(3).then(n.bind(null,"gEtG")).then(function(t){return t.default||t})},x=function(){return n.e(16).then(n.bind(null,"0bao")).then(function(t){return t.default||t})},b=function(){return n.e(2).then(n.bind(null,"DTuY")).then(function(t){return t.default||t})},y=function(){return n.e(19).then(n.bind(null,"PmZJ")).then(function(t){return t.default||t})},g=function(){return n.e(6).then(n.bind(null,"YmWZ")).then(function(t){return t.default||t})},C=function(){return n.e(12).then(n.bind(null,"azhR")).then(function(t){return t.default||t})},w=function(){return n.e(25).then(n.bind(null,"ZR4L")).then(function(t){return t.default||t})},_=function(){return n.e(30).then(n.bind(null,"JwAM")).then(function(t){return t.default||t})},k=function(){return n.e(7).then(n.bind(null,"tavO")).then(function(t){return t.default||t})},$=function(){return n.e(21).then(n.bind(null,"26K7")).then(function(t){return t.default||t})},E=function(){return n.e(26).then(n.bind(null,"WSPl")).then(function(t){return t.default||t})},j=function(){return n.e(28).then(n.bind(null,"WvCl")).then(function(t){return t.default||t})},R=function(){return n.e(24).then(n.bind(null,"7H/5")).then(function(t){return t.default||t})},T=function(){return n.e(34).then(n.bind(null,"YYqW")).then(function(t){return t.default||t})},A=function(){return n.e(23).then(n.bind(null,"G/4d")).then(function(t){return t.default||t})},O=function(){return n.e(29).then(n.bind(null,"FNHU")).then(function(t){return t.default||t})},D=function(){return n.e(5).then(n.bind(null,"Ma2G")).then(function(t){return t.default||t})},q=function(){return n.e(20).then(n.bind(null,"2DoN")).then(function(t){return t.default||t})},S=function(){return n.e(13).then(n.bind(null,"9hJW")).then(function(t){return t.default||t})},L=function(){return n.e(22).then(n.bind(null,"mS5p")).then(function(t){return t.default||t})},F=function(){return n.e(31).then(n.bind(null,"tbog")).then(function(t){return t.default||t})},I=function(){return n.e(1).then(n.bind(null,"UiGL")).then(function(t){return t.default||t})},M=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},W=function(t,e,n){return{x:0,y:0}}},qQkk:function(t,e){},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return q});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),c=n("woOf"),u=n.n(c),l=n("Dd8w"),d=n.n(l),f=n("exGp"),p=n.n(f),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),b=n("mtxM"),y=n("0F0d"),g=n("HBB+"),C=n("WRRc"),w=n("To1F"),_=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),E=n("Wq0Q"),j=n.n(E),R=n("K6if"),T=n("D/2v"),A=n("EeEB"),O=n("2we2");n.d(e,"a",function(){return w.a});var D,q=(D=p()(o.a.mark(function t(e){var n,r,a,i,c,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e),r=d()({router:n,nuxt:{defaultTransition:S,transitions:[S],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?u()({},S,{name:t}):u()({},S,t):S}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),a=e?e.next:function(t){return r.router.push(t)},i=void 0,e?i=n.resolve(e.url).route:(c=Object($.d)(n.options.base),i=n.resolve(c).route),t.next=7,Object($.m)(r,{route:i,next:a,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 7:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof R.default){t.next=11;break}return t.next=11,Object(R.default)(r.context,l);case 11:if("function"!=typeof T.default){t.next=14;break}return t.next=14,Object(T.default)(r.context,l);case 14:if("function"!=typeof A.default){t.next=17;break}return t.next=17,Object(A.default)(r.context,l);case 17:if("function"!=typeof O.default){t.next=20;break}return t.next=20,Object(O.default)(r.context,l);case 20:if("function"!=typeof j.a){t.next=24;break}return t.next=24,j()(r.context,l);case 24:t.next=27;break;case 27:return t.abrupt("return",{app:r,router:n});case 28:case"end":return t.stop()}},t,this)})),function(t){return D.apply(this,arguments)});m.default.component(y.a.name,y.a),m.default.component(g.a.name,g.a),m.default.component(C.a.name,C.a),m.default.component(_.a.name,_.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var S={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},qsxN:function(t,e){},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var c={},u=!0,l=!1,d=void 0;try{for(var f,p=o()(i);!(u=(f=p.next()).done);u=!0){var h=f.value;c[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){l=!0,d=t}finally{try{!u&&p.return&&p.return()}finally{if(l)throw d}}e.a=c},yKry:function(t,e){},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("yKry"),c=(n.n(s),n("qQkk")),u=(n.n(c),n("qsxN")),l=(n.n(u),{_default:function(){return n.e(4).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})},_empty:function(){return n.e(9).then(n.bind(null,"EIoS")).then(function(t){return t.default||t})}}),d={};e.a={head:{titleTemplate:"%s | Proyecto Ascendere",htmlAttrs:{xmlns:"http://www.w3.org/1999/xhtml","xml:lang":"es",lang:"es",dir:"ltr"},nativeUI:!0,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"msapplication-TileImage",content:"/icon.png"},{name:"msapplication-TileColor",content:"#044a80"},{name:"theme-color",content:"#044a80"},{"http-equiv":"x-ua-compatible",content:"ie=edge"},{name:"mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"Innovación Docente"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"Innovación Docente"}],link:[{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.13/css/solid.css"},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.13/css/brands.css"},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.13/css/fontawesome.css"},{rel:"manifest",href:"/innovaciondocente/_nuxt/manifest.0711f1f0.json"},{rel:"shortcut icon",href:"/innovaciondocente/_nuxt/icons/icon_64.95ye9fbd6Sx.png"},{rel:"apple-touch-icon",href:"/innovaciondocente/_nuxt/icons/icon_512.95ye9fbd6Sx.png",sizes:"512x512"}],style:[],script:[],title:"Innovación Docente"},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&d["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=d[e],this.layout},loadLayout:function(t){var e=this;t&&(l["_"+t]||d["_"+t])||(t="default");var n="_"+t;return d[n]?o.a.resolve(d[n]):l[n]().then(function(t){return d[n]=t,delete l[n],d[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);