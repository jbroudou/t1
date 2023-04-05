exports.ids = [3,1,2];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4ee31088", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Button.vue?vue&type=template&id=176341c2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', _vm._g(_vm._b({
    staticClass: "text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300",
    attrs: {
      "type": "submit"
    }
  }, 'button', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Button.vue?vue&type=template&id=176341c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Button.vue?vue&type=script&lang=js&
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: 'BaseButton',
  inheritAttrs: false
});
// CONCATENATED MODULE: ./components/base/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/base/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "242b438a"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Section.vue?vue&type=template&id=445893fa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._b({
    staticClass: "relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden"
  }, 'div', _vm.$attrs, false), [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Section.vue?vue&type=template&id=445893fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Section.vue?vue&type=script&lang=js&
/* harmony default export */ var Sectionvue_type_script_lang_js_ = ({
  name: 'BaseSection'
});
// CONCATENATED MODULE: ./components/base/Section.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_Sectionvue_type_script_lang_js_ = (Sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/base/Section.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Sectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d2377ac"
  
)

/* harmony default export */ var Section = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a5a3fc0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a5a3fc0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a5a3fc0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a5a3fc0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a5a3fc0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(32);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loader[data-v-a5a3fc0a]{background-color:#eceaea;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-repeat:no-repeat;background-size:50px;filter:alpha(opacity=40);height:100%;opacity:.4;position:absolute;right:0;top:0;width:100%;z-index:10000000}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spinner.1a1b178.gif";

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a5a3fc0a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full h-screen bg-gradient-to-b from-blue-100 to-blue-300"
  }, [_vm._ssrNode((_vm.loading ? "<div class=\"loader\" data-v-a5a3fc0a></div>" : "<!---->") + " "), _vm._ssrNode("<section id=\"hero\" class=\"w-full pb-24\" data-v-a5a3fc0a>", "</section>", [_c('BaseSection', [_c('div', {
    staticClass: "col-span-12"
  }, [_c('h1', {
    staticClass: "text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 py-4"
  }, [_vm._v("\n          Celestia PayForBlob Transactions\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-6 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
  }, [_c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitPfb.apply(null, arguments);
      }
    }
  }, [_c('fieldset', {
    attrs: {
      "disabled": _vm.loading
    }
  }, [_c('p', {
    staticClass: "paragraph hidden sm:block pt-2 pb-6"
  }, [_vm._v("\n              Use this UI to either submit a PFB transaction or retrieve some data at a specific block height.\n            ")]), _vm._v(" "), _vm.errors.length ? _c('div', {
    staticClass: "bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3",
    attrs: {
      "role": "alert"
    }
  }, [_c('ul', _vm._l(_vm.errors, function (error) {
    return _c('li', {
      key: error
    }, [_vm._v("\n                  " + _vm._s(error) + "\n                ")]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c('label', {
    staticClass: "block font-medium text-gray-700",
    attrs: {
      "for": "endpoint"
    }
  }, [_vm._v("Endpoint")]), _vm._v(" "), _c('div', {
    staticClass: "mt-1 flex rounded-md shadow-sm pt-1 pb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.endpoint,
      expression: "endpoint"
    }],
    staticClass: "bg-gray-200 px-4 w-full border rounded text-gray-700",
    attrs: {
      "id": "endpoint",
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.endpoint
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.endpoint = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "block font-medium text-gray-700",
    attrs: {
      "for": "namespaceId"
    }
  }, [_vm._v("Namespace")]), _vm._v(" "), _c('div', {
    staticClass: "mt-1 flex rounded-md shadow-sm pt-1 pb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.namespaceId,
      expression: "namespaceId"
    }],
    staticClass: "px-4 w-full border rounded text-gray-700",
    attrs: {
      "id": "namespaceId",
      "type": "text",
      "placeholder": "Namespace ID"
    },
    domProps: {
      "value": _vm.namespaceId
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.namespaceId = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('hr', {
    staticClass: "pb-6"
  }), _vm._v(" "), _c('label', {
    staticClass: "block font-medium text-gray-700",
    attrs: {
      "for": "data"
    }
  }, [_vm._v("Data")]), _vm._v(" "), _c('div', {
    staticClass: "mt-1 flex rounded-md shadow-sm pt-1 pb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data,
      expression: "data"
    }],
    staticClass: "px-4 w-full border rounded text-gray-700",
    attrs: {
      "id": "data",
      "type": "text",
      "placeholder": "Data"
    },
    domProps: {
      "value": _vm.data
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.data = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('BaseButton', {
    staticClass: "max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
  }, [_vm._v("\n              Submit PFB Transaction\n            ")])], 1)]), _vm._v(" "), _c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.getShares.apply(null, arguments);
      }
    }
  }, [_c('fieldset', {
    attrs: {
      "disabled": _vm.loading
    }
  }, [_c('hr', {
    staticClass: "pt-6"
  }), _vm._v(" "), _c('label', {
    staticClass: "block font-medium text-gray-700",
    attrs: {
      "for": "namespaceId"
    }
  }, [_vm._v("Height")]), _vm._v(" "), _c('div', {
    staticClass: "mt-1 flex rounded-md shadow-sm pt-1 pb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userHeight,
      expression: "userHeight"
    }],
    staticClass: "px-4 w-full border rounded text-gray-700",
    attrs: {
      "id": "userHeight",
      "type": "text",
      "placeholder": "Block Height"
    },
    domProps: {
      "value": _vm.userHeight
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.userHeight = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('BaseButton', {
    staticClass: "max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
  }, [_vm._v("\n              Get Shares\n            ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
  }, [_vm.success ? _c('div', {
    staticClass: "bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3",
    attrs: {
      "role": "alert"
    }
  }, [_c('p', {
    staticClass: "font-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.success) + "\n          ")])]) : _vm._e(), _vm._v(" "), _vm.error ? _c('div', {
    staticClass: "bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3",
    attrs: {
      "role": "alert"
    }
  }, [_c('p', {
    staticClass: "font-bold"
  }, [_vm._v("\n            Error! There was an error sending your request.\n          ")])]) : _vm._e(), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "block font-medium text-gray-700",
    attrs: {
      "for": "tx"
    }
  }, [_vm._v("TX Hash")]), _vm._v(" "), _c('div', {
    staticClass: "mt-1 flex rounded-md shadow-sm pt-1 pb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tx,
      expression: "tx"
    }],
    staticClass: "bg-gray-200 px-4 w-full border rounded text-gray-700",
    attrs: {
      "id": "tx",
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.tx
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.tx = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "block font-medium text-gray-700",
    attrs: {
      "for": "height"
    }
  }, [_vm._v("Height")]), _vm._v(" "), _c('div', {
    staticClass: "mt-1 flex rounded-md shadow-sm pt-1 pb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.height,
      expression: "height"
    }],
    staticClass: "bg-gray-200 px-4 w-full border rounded text-gray-700",
    attrs: {
      "id": "height",
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.height
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.height = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('p', {
    staticClass: "paragraph hidden sm:block",
    attrs: {
      "data-aos": "fade-down",
      "data-aos-once": "true",
      "data-aos-delay": "300"
    }
  }, [_vm._v("\n          Response\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.response,
      expression: "response"
    }],
    staticClass: "border rounded text-gray-700 block p-2.5 w-full",
    attrs: {
      "id": "response"
    },
    domProps: {
      "value": _vm.response
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.response = $event.target.value;
      }
    }
  })])])])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a5a3fc0a&scoped=true&

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(25);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  data() {
    return {
      endpoint: '',
      namespaceId: '',
      data: '',
      tx: '',
      height: '',
      userHeight: '',
      response: '',
      loading: false,
      success: '',
      error: false,
      errors: []
    };
  },
  created() {
    if (this.namespaceId === '') {
      this.namespaceId = external_crypto_default.a.randomBytes(8).toString('hex');
    }
    if (this.data === '') {
      const length = Math.floor(Math.random() * 100) + 11;
      this.data = external_crypto_default.a.randomBytes(length).toString('hex');
    }
    this.endpoint = "http://138.68.99.123:26659";
  },
  methods: {
    getShares() {
      this.errors = [];
      if (!this.endpoint) {
        this.errors.push('Please enter an endpoint');
      }
      if (!this.namespaceId) {
        this.errors.push('Please enter a namespace');
      }
      if (!this.userHeight) {
        this.errors.push('Please enter a height');
      }
      if (this.errors.length) {
        return;
      }
      this.loading = true;
      external_axios_default.a.get(`/namespaced_shares/${this.namespaceId}/height/${this.userHeight}`).then(response => {
        this.response = JSON.stringify(response.data, null, 2);
        this.height = response.data.height;
        this.loading = false;
        this.success = 'Shares retrieved!';
      }).catch(error => {
        this.response = 'Error: ' + error.response.status;
        this.loading = false;
      });
    },
    submitPfb() {
      this.errors = [];
      if (!this.endpoint) {
        this.errors.push('Please enter an endpoint');
      }
      if (!this.namespaceId) {
        this.errors.push('Please enter a namespace');
      }
      if (!this.data) {
        this.errors.push('Please enter some data');
      }
      if (this.errors.length) {
        return;
      }
      this.loading = true;
      external_axios_default.a.post('/submit_pfb', {
        namespace_id: this.namespaceId,
        data: this.data,
        gas_limit: 80000,
        fee: 2000
      }).then(response => {
        this.response = JSON.stringify(response.data, null, 2);
        this.height = response.data.height;
        this.tx = response.data.txhash;
        this.success = 'Transaction succesfully submited!';
        this.loading = false;
        setInterval(function fn() {
          this.success = false;
          return fn;
        }(), 10000);
      }).catch(error => {
        this.response = 'Error: ' + error.response.status;
        this.loading = false;
      });
    }
  }
});
// var crypto = require("crypto");
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a5a3fc0a",
  "18dc0dda"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(27).default,BaseSection: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=index.js.map