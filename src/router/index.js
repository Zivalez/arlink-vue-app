import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SectionOne from "../views/SectionOne.vue";
import SectionTwo from "../views/SectionTwo.vue";
import SectionThree from "../views/SectionThree.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/section1", name: "SectionOne", component: SectionOne },
  { path: "/section2", name: "SectionTwo", component: SectionTwo },
  { path: "/section3", name: "SectionThree", component: SectionThree },
];

const router = createRouter({
  history: createWebHashHistory(), // Menggunakan Hash Mode
  routes,
});

export default router;
