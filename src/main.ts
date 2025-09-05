import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{ path: "/", component: () => import("./pages/Index.vue") },
	{ path: "/about", component: () => import("./pages/About.vue") },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
