// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';
Vue.use(Vant);


import Axios from 'axios'
// 全局混入
Vue.mixin({
	data() {
		return {
			Axios: Axios,
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})