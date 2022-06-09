<template>
  <div class="home">
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from "@/components/GameBoard.vue";

export default {
  name: "HomeView",
  components: {
    Game,
  },
};
</script>
