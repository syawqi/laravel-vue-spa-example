
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
    {
        path : '/createUser',
        component : require('./components/createUser'),
        name : '/createUser'
    },
    {
        path : '/editUser/:id',
        component : require('./components/editUser'),
        name : '/editUser'
    },
];

export default new VueRouter({
  routes
});
