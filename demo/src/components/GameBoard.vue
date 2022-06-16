<template>
  <div class="container">
    <template v-for="lane in lanes" :key="lane.id">
      <li>{{ lane }}</li>
    </template>
  </div>
</template>

<script>
import { Board } from "@/board.js";

const board = Board.def_constructor();
const lanes = board.lanes;

export default {
  data() {
    return lanes;
  },
};
</script>

<style>
.board {
  border: 1px solid black;
  padding: 20em;
}
</style>
