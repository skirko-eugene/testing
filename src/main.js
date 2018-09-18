// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
  created() {
    // Initialize Firebase
    fb.initializeApp({
      apiKey: "AIzaSyCDkq4Em5P1gu4U0-7CRsX6bfpZuTMzCM0",
      authDomain: "testing-fc220.firebaseapp.com",
      databaseURL: "https://testing-fc220.firebaseio.com",
      projectId: "testing-fc220",
      storageBucket: "testing-fc220.appspot.com",
      messagingSenderId: "604571756326"
    });
  }
})
