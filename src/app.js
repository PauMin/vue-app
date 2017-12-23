import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueCookie from 'vue-cookie';
import * as Icon from 'vue-awesome';
import BootstrapVue from 'bootstrap-vue';

import 'vue-awesome/icons';

import router from  './router';

Vue.use(VueI18n);
Vue.use(VueCookie);
Vue.use(BootstrapVue);

Vue.component('icon', Icon);

const i18n = new VueI18n({
  locale: 'en',
});

import './scss/app.scss';

new Vue({
  el: '#app',
  router,
  i18n
});
