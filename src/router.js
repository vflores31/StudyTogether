import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./components/pages/index.vue";
import Videos from "./components/pages/videos.vue";
import Login from "./components/pages/login.vue";
import Secret from "./components/pages/secret.vue";
import NotFound from "./components/pages/404.vue";
import Music from "./components/pages/music.vue";

const { isAuthenticated } = useAuth();

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;