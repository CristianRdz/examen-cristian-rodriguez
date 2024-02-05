import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:()=> import('../components/LandPage.vue')
  },
    
    {
      path: '/inicio',
      component: ()=> import ('../components/InicioNav.vue'),

      //Los componentes que se renderizan en router-vue
      children: [
        {
          path: "/principal",
          name: "principal",
          component: () => import("../components/Principal.vue"),
        },
        {
          path: "/formulario",
          name: "formulario",
          component: () => import("../components/Formulario.vue"),
        },
        {
          path: "/paginacion",
          name: "paginacion",
          component: () => import("../components/Paginacion.vue"),
        },
          
      ]
  }
  ],
});

export default router;
