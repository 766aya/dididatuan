// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex);
Vue.use(Vant);


import Axios from 'axios'
import QueryLanding from '@/assets/queryLandingStatus';
import getServers from '@/assets/getServers';
import getRoleInfo from '@/assets/getRoleInfo';
import judgeAuthority from '@/assets/authority';

// 全局混入
Vue.mixin({
	data() {
		return {
			Axios: Axios,
			QueryLanding: QueryLanding,
			getServers: getServers,
			getRoleInfo: getRoleInfo,
			judgeAuthority: judgeAuthority
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})