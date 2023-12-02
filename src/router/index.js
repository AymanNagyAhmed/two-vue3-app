import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NotFound from "../views/NotFound.vue";
import Test from "@/components/Test.vue";

const routes = [
  { path: "/", name: "home", component: HomeView, alias: "/home" },
  //   { path: "/home",name: "home" redirect: { name: 'homepage' } },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/:notFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
