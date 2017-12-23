import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import VueCookie from 'vue-cookie';
import * as Icon from 'vue-awesome';

import 'vue-awesome/icons';

import '../node_modules/vuetify/dist/vuetify.min.css';

import router from  './router';

Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(VueCookie);

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
