<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>Demo App</h1>
  <TutorialMenu />
  <GameBoard />
</template>

<script>
import GameBoard from "./components/GameBoard.vue";
import TutorialMenu from "./components/TutorialMenu.vue";

export default {
  name: "App",
  components: {
    GameBoard,
    TutorialMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
