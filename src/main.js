import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import storeConfig from "./store";
import router from "./router";
import App from "./App.vue";
import "./assets/main.css";
import { createStore } from 'vueX'

const app = createApp(App);

const store = createStore(storeConfig)

app.use(store)
app.use(router).mount("#app");