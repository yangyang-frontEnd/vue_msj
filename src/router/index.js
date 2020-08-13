import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/home/index.vue");
const Main = () => import("@/views/home/main.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        component: Main,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
