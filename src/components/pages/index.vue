<script setup>
import useAuth from "../../composable/useAuth.js";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-12  min-h-screen-nonav"
  >
    <h2
      v-if="!isAuthenticated"
      class="text-6xl text-white tracking-tighter font-extralight"
    >
      Welcome
    </h2>
    <h2 v-else class="text-6xl text-white tracking-tighter font-extralight">
      Welcome {{ user }}
    </h2>
        <p class="text-white">Hello all and welcome to Study Together! This website aims to bring together students who need a little push to complete their assignments. If you feel like you learn better while mirroring others or having a routined study/break session, then this is the place for you! Log into your personal account to have access to our chat room where you can chat with others on course work, study sessions, etc! Welcome and if you have any questions or concerns do not hesistate to reach out! :)</p>
    <img src="../../assets/together.png" alt="Hello BG" />
    <p>..</p>
    <p class="text-white">Contact Me @ Email: v.flores0831@gmail.com</p>
    <p>..</p>
    <p class="text-white">Happy Studying :)</p>
    <p>..</p>
  </div>
</template>