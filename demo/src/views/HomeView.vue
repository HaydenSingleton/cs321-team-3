<template>
  <div class="section">
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
