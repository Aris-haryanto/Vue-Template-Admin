import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout/Layout.vue";
import Home from "./views/Dashboard.vue";
import User from "./views/User.vue";
import Login from "./views/auth/Login.vue";
import NotFound from "./views/error/404.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
      path: "/management",
      name: "layout",
      component: Layout,
      children: [
          {
            path: 'home',
            component: Home,
            name: 'Home',
            meta: { auth: true }
          },
          {
            path: 'user',
            component: User,
            name: 'User',
            meta: { auth: true }
          },
      ]
    },
    {
        path: "*",
        name: "404",
        component: NotFound,
    },
  ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.auth)) {
        if (localStorage.getItem('user') == null) {
            next({ name: 'login' })
        } else {
            next()
        }
    }else {
        next() 
    }
})

export default router