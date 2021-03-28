(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_users_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TemplateCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TemplateCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TemplateCard",
  props: {
    header: {
      type: Boolean,
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/List.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/List.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TemplateCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TemplateCard */ "./resources/js/components/TemplateCard.vue");
/* harmony import */ var _api_apiFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/apiFactory */ "./resources/js/api/apiFactory.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var usersApi = _api_apiFactory__WEBPACK_IMPORTED_MODULE_2__.apiFactory.get('users');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "List",
  components: {
    TemplateCard: _components_TemplateCard__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      users: []
    };
  },
  created: function created() {
    this.fetchTableData();
  },
  methods: {
    fetchTableData: function fetchTableData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$usersApi$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return usersApi.get({
                  with_roles: true
                });

              case 3:
                _yield$usersApi$get = _context.sent;
                data = _yield$usersApi$get.data;
                _this.users = data;
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    onDelete: function onDelete(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return usersApi["delete"](id);

              case 2:
                return _context2.abrupt("return", _this2.fetchTableData());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/api/api.js":
/*!*********************************!*\
  !*** ./resources/js/api/api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store */ "./resources/js/store/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true; // axios.defaults.baseURL = process.env.MIX_APP_URL;

var client = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: '/api/v1/'
});
client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var configHandler = function configHandler(config) {
  _store__WEBPACK_IMPORTED_MODULE_0__.default.dispatch('incrementLoading');
  return config;
};

var successHandler = function successHandler(response) {
  _store__WEBPACK_IMPORTED_MODULE_0__.default.dispatch('decrementLoading');
  return response.data;
};

var errorHandler = function errorHandler(error) {
  _store__WEBPACK_IMPORTED_MODULE_0__.default.dispatch('decrementLoading');
  console.log(error);
  var messageData = Object.create(null);
  messageData.title = 'Ocurrió un error en la solicitud!';
  messageData.content = '';

  if (error.response) {
    if (error.response.status === 401) {
      messageData.title = 'No autorizado';
    }

    if (error.response.status === 403) {
      messageData.title = 'No autorizado para la acción solicitada.';
    }

    if (error.response.status === 404) {
      messageData.title = 'Dirección no encontrada!';
    }

    if (error.response.status === 422) {
      messageData.title = 'Revisa los siguientes datos!';
      messageData.content = error.response.data.errors;
    }
  } else if (error.request) {
    messageData.title = 'Sin respuesta del servidor!';
  }

  return Promise.reject(messageData);
};

client.interceptors.request.use(function (config) {
  return configHandler(config);
}, function (error) {
  return console.log(error);
});
client.interceptors.response.use(function (response) {
  return successHandler(response);
}, function (error) {
  return errorHandler(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ }),

/***/ "./resources/js/api/apiFactory.js":
/*!****************************************!*\
  !*** ./resources/js/api/apiFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiFactory": () => (/* binding */ apiFactory)
/* harmony export */ });
/* harmony import */ var _apis_usersApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis/usersApi */ "./resources/js/api/apis/usersApi.js");

var repositories = {
  users: _apis_usersApi__WEBPACK_IMPORTED_MODULE_0__.default
};
var apiFactory = {
  get: function get(name) {
    return repositories[name];
  }
};

/***/ }),

/***/ "./resources/js/api/apis/usersApi.js":
/*!*******************************************!*\
  !*** ./resources/js/api/apis/usersApi.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/api.js");

var resource = '/users';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  me: function me() {
    return _api__WEBPACK_IMPORTED_MODULE_0__.default.get('/users/me');
  },
  get: function get(params) {
    params = {
      'params': params
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__.default.get("".concat(resource), params);
  },
  find: function find(id, params) {
    params = {
      'params': params
    };
    return _api__WEBPACK_IMPORTED_MODULE_0__.default.get("".concat(resource, "/").concat(id), params);
  },
  create: function create(data) {
    return _api__WEBPACK_IMPORTED_MODULE_0__.default.post("".concat(resource), data);
  },
  update: function update(id, data) {
    if (data.constructor.name === "FormData") data.append('_method', 'put');
    if (data.constructor.name === "Object") data._method = 'put';
    return _api__WEBPACK_IMPORTED_MODULE_0__.default.post("".concat(resource, "/").concat(id), data);
  },
  "delete": function _delete(id) {
    return _api__WEBPACK_IMPORTED_MODULE_0__.default.delete("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/components/TemplateCard.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TemplateCard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateCard_vue_vue_type_template_id_7673fd95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true& */ "./resources/js/components/TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true&");
/* harmony import */ var _TemplateCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateCard.vue?vue&type=script&lang=js& */ "./resources/js/components/TemplateCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TemplateCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TemplateCard_vue_vue_type_template_id_7673fd95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplateCard_vue_vue_type_template_id_7673fd95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7673fd95",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TemplateCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/users/List.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/users/List.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_6187a424_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=6187a424&scoped=true& */ "./resources/js/views/users/List.vue?vue&type=template&id=6187a424&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/users/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _List_vue_vue_type_template_id_6187a424_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_6187a424_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6187a424",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/users/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TemplateCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TemplateCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TemplateCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/users/List.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/users/List.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateCard_vue_vue_type_template_id_7673fd95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateCard_vue_vue_type_template_id_7673fd95_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateCard_vue_vue_type_template_id_7673fd95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true&");


/***/ }),

/***/ "./resources/js/views/users/List.vue?vue&type=template&id=6187a424&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/users/List.vue?vue&type=template&id=6187a424&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6187a424_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6187a424_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6187a424_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=6187a424&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/List.vue?vue&type=template&id=6187a424&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TemplateCard.vue?vue&type=template&id=7673fd95&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-gray-900 border border-gray-800 rounded shadow text-gray-500"
    },
    [
      _vm.header
        ? _c("div", { staticClass: "border-b border-gray-800 p-3" }, [
            _c(
              "h5",
              { staticClass: "font-bold uppercase" },
              [_vm._t("header")],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "p-5" }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/List.vue?vue&type=template&id=6187a424&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/List.vue?vue&type=template&id=6187a424&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full p-3" },
    [
      _c(
        "template-card",
        {
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h5", { staticClass: "font-bold uppercase" }, [
                    _vm._v("Users")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("table", { staticClass: "w-full p-5 table-auto" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-left text-gray-600" }, [
                  _vm._v("Name")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left text-gray-600" }, [
                  _vm._v("Username")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left text-gray-600" }, [
                  _vm._v("Email")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left text-gray-600" }, [
                  _vm._v("Role")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left text-gray-600" }, [
                  _vm._v("Actions")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users, function(item) {
                return _c("tr", { key: item.id }, [
                  _c("td", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.username))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.email))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.role.name))]),
                  _vm._v(" "),
                  _c("td")
                ])
              }),
              0
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);