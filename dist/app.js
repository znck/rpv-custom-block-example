import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { normalizeComponent } from 'vue-runtime-helpers';

//
//
//
//

var script = {
  props: ['name']
};

var data = { en:{ hello:"Hello {name}!" },
  es:{ hello:"Hola {name}!" } };

const __i18n = data;
function i18n(Component) {
  Component.options.__i18n = Component.options.__i18n || [];
  Component.options.__i18n.push(__i18n);
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", [_vm._v(_vm._s(_vm.$t("hello", { name: _vm.name })))])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );
i18n(__vue_component__);

//
//
//
//

var script$1 = {
  props: ['name']
};

var en = {
	hello: "Hello {name}!"
};
var es = {
	hello: "Hola {name}!"
};
const __i18n$1 = {
	en: en,
	es: es
};
function i18n$1(Component) {
  Component.options.__i18n = Component.options.__i18n || [];
  Component.options.__i18n.push(__i18n$1);
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", [_vm._v(_vm._s(_vm.$t("hello", { name: _vm.name })))])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );
i18n$1(__vue_component__$1);

var script$2 = {
  components: { Hello: __vue_component__, Bye: __vue_component__$1 }  
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "main",
    [
      _c("Hello", { attrs: { name: "Rahul" } }),
      _vm._v(" "),
      _c("Bye", { attrs: { name: "Rahul" } })
    ],
    1
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

Vue.use(VueI18n);

new Vue(__vue_component__$2).$mount('#app');
