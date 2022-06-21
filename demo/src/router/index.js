import { createRouter, createWebHashHistory } from "vue-router";
import GameBoard from "@/components/GameBoard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "about",
  },
  {
    path: "/game",
    name: "game",
    component: GameBoard,
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
