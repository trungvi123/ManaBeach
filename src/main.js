import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";

import router from "./router";
import App from "./App.vue";
import "./assets/main.css";


const app = createApp(App);
app.use(router).mount("#app");
