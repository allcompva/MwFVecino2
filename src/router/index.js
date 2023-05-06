import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/LogIn.vue"),
  },
  {
    path: "/ListaTramites/:hash",
    name: "ListaTramites",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListaTramites.vue"),
  },
  {
    path: "/VistaTramite/:id",
    name: "VistaTramite",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VistaTramite.vue"),
  },  
  {
    path: '/Tramite/:id',
    name: 'Tramite',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '@/views/Tramite.vue'),

    params: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
