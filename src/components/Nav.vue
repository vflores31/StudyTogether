<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="text-black bg-green-700">
    <div class="container flex items-center justify-between mx-auto">
      <h1 class="text-3xl font-thin tracking-tighter">
        Study<span class="font-normal">Together</span>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <router-link to="/">
            <li
              class="px-4 py-8  hover:cursor-pointer hover:bg-green-200 hover:text-black"
            >
              Home
            </li>
          </router-link>
          <router-link :to="{ name: 'Videos' }">
            <li
              class="px-4 py-8  hover:cursor-pointer hover:bg-green-200 hover:text-black"
            >
              Videos
            </li>
          </router-link>
          <router-link :to="{ name: 'Music' }">
            <li
              class="px-4 py-8  hover:cursor-pointer hover:bg-green-200 hover:text-black"
            >
              Music
            </li>
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            :to="{ path: '/login', name: 'Login' }"
          >
            <li
              class="px-4 py-8  hover:cursor-pointer hover:bg-green-200 hover:text-black"
            >
              Login
            </li>
          </router-link>
          <div v-else class="flex">
            <router-link :to="{ name: 'Secret' }">
              <li
                class="px-4 py-8  hover:cursor-pointer hover:bg-green-200 hover:text-black"
              >
                Chat Room
              </li>
            </router-link>
            <button @click="loggingOut">
              <li
                class="px-4 py-8  hover:cursor-pointer hover:bg-green-200 hover:text-black"
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>