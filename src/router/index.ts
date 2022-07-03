import { createRouter, createWebHashHistory } from "vue-router";
import GamePage from "@/components/GamePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "about",
  },
  {
    path: "/game",
    name: "game",
    component: GamePage,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/TutorialMenu.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
