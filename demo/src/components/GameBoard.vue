<template>
  <div class="content">
    <div class="columns" style="margin-top: 25px">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button class="button" @click="playerPhase()">Check</button>
      </div>
      <div class="tile is-ancestor">
        <LaneItem
          v-for="item in lanes"
          :key="item.id"
          :tiles="item.getTiles()"
          :position="item.id"
        ></LaneItem>
      </div>
      <div class="column">Info</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { board, playerPhase } from "@/board.js";
import LaneItem from "@/components/LaneItem.vue";

const score = ref(0);
const lanes = board.lanes;
</script>
