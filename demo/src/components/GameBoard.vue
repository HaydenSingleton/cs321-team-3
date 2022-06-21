<template>
  <div class="content">
    <div class="columns">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button v-if="lives > 0" class="button" @click="checkWin">Check</button>
        <button v-else disabled class="button">Check</button>
      </div>
      <div class="columns">
        <LaneItem
          v-for="(item, index) in lanes"
          :key="index"
          :tile-list="item.getTiles()"
        ></LaneItem>
      </div>
      <div class="column">
        <div class="message is-info">
          <div class="message-body">Lives: {{ lives }}</div>
          <div class="level">
            <img
              v-for="index in lives"
              :key="index"
              class="image is-64x64"
              src="@/assets/heart.png"
              alt="Heart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LaneItem from "@/components/LaneItem.vue";
import { Board } from "@/board.js";
import { Lane } from "@/lane";
import { Tile } from "@/tile";
import JSConfetti from "js-confetti";

const score = ref(0);
const lives = ref(3);

const board = new Board(
  new Lane(
    new Tile(false, 1, 3, "deathtouch"),
    new Tile(false, 1, 2, "sharp"),
    new Tile(),
    new Tile(false, 3, 1, "flying")
  ),
  new Lane(
    new Tile(false, 1, 1, "preventattack"),
    new Tile(false, 1, 1, "reach"),
    new Tile(false, 1, 1, "flying")
  ),
  new Lane(
    new Tile(),
    new Tile(false, 1, 1, "submerge"),
    new Tile(false, 1, 1, "splitstrike")
  ),
  new Lane(new Tile(), new Tile(false, 1, 1, "buffneighbors"))
);

const lanes = board.getLanes();
const confetti = new JSConfetti();

function win() {
  confetti.addConfetti();
  lives.value = 3;
  score.value = 0;
}

function checkWin() {
  score.value = board.check();
  lives.value = board.getLives();
  if (score.value >= 5) win();
}
</script>
