import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Catalog from "@/views/Catalog.vue";
import News from "@/views/News.vue";
import NewsDetail from "@/views/NewsDetail.vue";
import Product from '@/views/Product.vue'
import About from '@/views/About-us.vue'
import AddProduct from '@/views/AddProduct.vue'
import AddImgForProduct from '@/views/AddImgForProduct.vue'
import Contact from '@/views/Contact.vue'
import Cart from '@/views/Cart.vue'
import Search from '@/views/Search.vue'
import AdminLogin from '@/views/adminLogin.vue'
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
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/about-us",
    name: "About-us",
    component: About,
  },
  {
    path: "/adminLogin",
    name: "admin-login",
    component: AdminLogin,
  },
  {
    path: "/add-product",
    name: "Add-product",
    component: AddProduct,
  },
  {
    path: "/add-img-product",
    name: "Add-img-product",
    component: AddImgForProduct,
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
