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
        <p id="score" class="button">DEBUG - mapID:{{ mapID }}</p>
        <button class="button" @click="changeMapID"></button>
      </div>
      <div class="columns">
        <LaneItem
          v-for="(item, index) in lanes"
          :key="index"
          :lane="item"
        ></LaneItem>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Board } from "@/board.js";
import LaneItem from "@/components/LaneItem.vue";

const score = ref(0);
const mapID = ref(0);
Board.generate(mapID.value);
const lives = ref(3);
var lanes = Board.lanes;

function checkWin() {
  //console.log("Score:", score.value);
  score.value = Board.check();
  lives.value = Board.getLives();
  console.log("Board.check() returned:", score.value);
}

function changeMapID() {
  mapID.value += 1;
  Board.generate(mapID.value);
  lanes = Board.lanes;
  console.log("Board.changeMapID() returned:", lanes);
}
</script>
