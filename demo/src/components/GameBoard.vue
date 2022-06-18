<template>
  <div class="content">
    <div class="columns" style="margin-top: 25px">
      <div class="column" @click="score = ++score % 6">
        <p id="score" class="button">{{ score }}/5</p>
      </div>
      <div class="level">
        <LaneItem
          v-for="item in lanes"
          :key="item.id"
          class="level-item"
        ></LaneItem>
      </div>
      <div class="column">Info</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { board } from "@/board.js";
import LaneItem from "@/components/LaneItem.vue";

const score = ref(0);
const lanes = board.lanes;
</script>
