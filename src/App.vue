<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar v-if="!$route.matched.some(record => record.meta.hideNavbar)"/>
  <RouterView />
</template>

