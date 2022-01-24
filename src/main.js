import Vue from 'vue';
import VueMatomo from 'vue-matomo';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;

Vue.use(VueMatomo, {
  host: 'https://analytics.raildeals.org',
  siteId: 2,
  trackerFileName: 'matomo',
  router,
  disableCookies: true,
  requireCookieConsent: false,
  enableHeartBeatTimer: false,
  heartBeatTimerInterval: 15,
  debug: false,
  userId: undefined,
  cookieDomain: undefined,
  domains: 'prenninger.de',
  preInitActions: [],
  trackSiteSearch: false,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
