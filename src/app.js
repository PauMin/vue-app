import Vue from 'vue';
import axios from 'axios';
import VueI18n from 'vue-i18n';
import VueAxios from 'vue-axios';
import VueCookie from 'vue-cookie';
import VueOnsen from 'vue-onsenui';
import * as Icon from 'vue-awesome';

import 'vue-awesome/icons';

import router from  './router';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Vue.use(VueI18n);
Vue.use(VueOnsen);
Vue.use(VueCookie);
Vue.use(VueAxios, axios);

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
