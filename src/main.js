import Vue from 'vue';
import App from './App';
import { router } from './router';

import '@/style/total.less';

import filter from '@/filters/filters';

Vue.mixin(filter);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
