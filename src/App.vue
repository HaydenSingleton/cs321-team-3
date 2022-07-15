<template>
  <div id="app">
    <NavMenu />
    <router-view class="text-center" />
  </div>
</template>

<script setup>
import NavMenu from "./components/NavMenu";
</script>
