(self.webpackChunk=self.webpackChunk||[]).push([[180],{5531:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(3645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,"table[data-v-764dd48a]{width:100%;border-collapse:collapse;background:#d3d3d3}table[data-v-764dd48a],td[data-v-764dd48a],th[data-v-764dd48a]{border:1px solid #000;text-align:center}table th[data-v-764dd48a]{background:#555;color:#f2f2f2}td[data-v-764dd48a],th[data-v-764dd48a]{padding:15px;text-align:center}tr[data-v-764dd48a]:hover{background-color:#f5f5f5}",""]);const s=a},9180:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>w});var r=n(7757),a=n.n(r),s=n(7743),o=n(9669),c=n.n(o);c().defaults.withCredentials=!0;var u=c().create({baseURL:"/api/v1/"});u.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";u.interceptors.request.use((function(t){return function(t){return s.Z.dispatch("incrementLoading"),t}(t)}),(function(t){return console.log(t)})),u.interceptors.response.use((function(t){return function(t){return s.Z.dispatch("decrementLoading"),t.data}(t)}),(function(t){return function(t){s.Z.dispatch("decrementLoading"),console.log(t);var e=Object.create(null);return e.title="Ocurrió un error en la solicitud!",e.content="",t.response?(401===t.response.status&&(e.title="No autorizado"),403===t.response.status&&(e.title="No autorizado para la acción solicitada."),404===t.response.status&&(e.title="Dirección no encontrada!"),422===t.response.status&&(e.title="Revisa los siguientes datos!",e.content=t.response.data.errors)):t.request&&(e.title="Sin respuesta del servidor!"),Promise.reject(e)}(t)}));const i=u;var d="/users";var l={users:{me:function(){return i.get("/users/me")},get:function(t){return t={params:t},i.get("".concat(d),t)},find:function(t,e){return e={params:e},i.get("".concat(d,"/").concat(t),e)},create:function(t){return i.post("".concat(d),t)},update:function(t,e){return"FormData"===e.constructor.name&&e.append("_method","put"),"Object"===e.constructor.name&&(e._method="put"),i.post("".concat(d,"/").concat(t),e)},delete:function(t){return i.delete("".concat(d,"/").concat(t))}}};function v(t,e,n,r,a,s,o){try{var c=t[s](o),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function o(t){v(s,r,a,o,c,"next",t)}function c(t){v(s,r,a,o,c,"throw",t)}o(void 0)}))}}var p=function(t){return l[t]}("users");const h={name:"List",data:function(){return{users:[]}},created:function(){this.fetchTableData()},methods:{fetchTableData:function(){var t=this;return f(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get({with_roles:!0});case 3:n=e.sent,r=n.data,t.users=r,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onDelete:function(t){var e=this;return f(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.delete(t);case 2:return swal.success(),n.abrupt("return",e.fetchTableData());case 4:case"end":return n.stop()}}),n)})))()}}};var m=n(3379),_=n.n(m),b=n(5531),g={insert:"head",singleton:!1};_()(b.Z,g);b.Z.locals;const w=(0,n(1900).Z)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticStyle:{"overflow-x":"auto"}},[n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.username))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.role.name))]),t._v(" "),n("td")])})),0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Username")]),t._v(" "),n("th",[t._v("Email")]),t._v(" "),n("th",[t._v("Role")]),t._v(" "),n("th",[t._v("Actions")])])])}],!1,null,"764dd48a",null).exports}}]);