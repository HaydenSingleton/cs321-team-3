<template>
  <div class="content">
    <div class="columns">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button class="button" @click="checkWin">Check</button>
        <div class="tile">
          <div class="tile is-ancestor is-vertical box">
            <p>Lives: {{ lives }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
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
const lives = ref(3);
const lanes = Board.lanes;

function checkWin() {
  //console.log("Score:", score.value);
  score.value = Board.check();
  lives.value = Board.getLives();
  console.log("Board.check() returned:", score.value);
}
</script>
