<template>
  <div class="content">
    <div class="columns" style="margin-top: 25px">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button class="button" @click="check">Check</button>
      </div>
      <div class="tile is-ancestor">
        <LaneItem
          v-for="item in lanes"
          :key="lanes.indexOf(item)"
          :tiles="item.getTiles()"
          :position="lanes.indexOf(item)"
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
const lanes = Board.lanes;

function check() {
  Board.check();
  console.log("Pressed Check. Calling playerPhase()");
}
</script>
