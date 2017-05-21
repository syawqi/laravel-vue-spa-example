
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let routes=[
    {
      path:'/',
      component:require('./components/Example')
    },{
        path : '/about',
        component : require('./components/About')
    },
];

export default new VueRouter({
  routes
});
