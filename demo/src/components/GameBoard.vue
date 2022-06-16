<template>
  <div class="container">
    <p>Game</p>
    <div class="columns">
      <div>
        <p id="score">{{ score }}/5</p>
      </div>
      <LaneItem class="column">1</LaneItem>
      <LaneItem class="column">2</LaneItem>
      <LaneItem class="column">3</LaneItem>
      <LaneItem class="column">4</LaneItem>
      <div>Info</div>
    </div>
  </div>
</template>

<script>
import LaneItem from "@/components/LaneItem.vue";

export default {
  name: "GameBoard",
  data() {
    return { score: 0 };
  },
  components: { LaneItem },
};
</script>

<style>
.board {
  border: 1px solid black;
  padding: 20em;
}
</style>
