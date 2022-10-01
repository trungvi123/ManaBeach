import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Catalog from "@/views/Catalog.vue";
import News from "@/views/News.vue";
import NewsDetail from "@/views/NewsDetail.vue";
import Product from '../views/Product.vue'
import About from '../views/About-us.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog/:option",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/news/:slug",
    name: "newsDetail",
    component: NewsDetail,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/about-us",
    name: "About-us",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
