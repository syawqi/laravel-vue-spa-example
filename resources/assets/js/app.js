import Vue from 'vue'
import router from './routes'
import axios from 'axios'
Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
      el: '#app',
      router
});
