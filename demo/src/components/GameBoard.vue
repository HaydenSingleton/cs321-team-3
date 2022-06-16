<template>
  <div class="container">
    <p>Game</p>
    <div class="columns">
      <div class="button">
        <p>{{ score }}/5</p>
      </div>
      <LaneItem />
      <LaneItem />
      <LaneItem />
      <LaneItem />
    </div>
  </div>
</template>

<script>
import { LaneItem } from "@/components/LaneItem.vue";

export default {
  data() {
    return { score };
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
