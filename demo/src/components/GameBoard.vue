<template>
  <div class="content">
    <div class="columns" style="margin-top: 25px">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button class="button" @click="checkWin">Check</button>
      </div>
      <div class="tile is-ancestor">
        <LaneItem
          v-for="item in lanes"
          :key="lanes.indexOf(item)"
          :tiles="item.getTiles()"
        ></LaneItem>
      </div>
      <div class="column">Info</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Board } from "@/board.js";
import LaneItem from "@/components/LaneItem.vue";

const score = ref(0);
Board.generate();
const lanes = Board.lanes;

function checkWin() {
  score.value = Board.check();
  console.log("Pressed Check. Calling playerPhase()");
}
</script>
