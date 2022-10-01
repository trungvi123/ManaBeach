import { createApp } from "vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";

import "./assets/main.css";



const app = createApp(App);
app.use(router).mount("#app");
