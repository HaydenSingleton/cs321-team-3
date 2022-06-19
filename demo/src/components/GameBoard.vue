<template>
  <div class="content">
    <div class="columns">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button class="button" @click="checkWin">Check</button>
      </div>
      <div class="columns">
        <LaneItem
          v-for="(item, index) in lanes"
          :key="index"
          :lane="item"
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
  console.log("Score:", score.value);
  score.value = Board.check();
  console.log("Board.check() returned:", score.value);
}
</script>
