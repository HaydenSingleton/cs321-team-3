<template>
  <div>
    <div class="columns">
      <div class="column is-1">
        <div class="title">
          <div id="score" class="button is-dark title">
            <span>{{ score }}/5</span>
          </div>
          <div class="content"></div>
          <button v-if="lives > 0" class="button is-info" @click="checkWin">
            Check
          </button>
          <button v-else disabled class="button is-dark">Check</button>
        </div>
      </div>
      <div class="column">
        <div class="columns">
          <LaneItem
            v-for="(item, index) in lanes"
            :key="index"
            :tile-list="item.getTiles()"
            class="column"
          />
        </div>
      </div>
      <div class="column is-2">
        <div class="message is-info">
          <div class="message-body">
            <div class="title">Lives: {{ lives }}</div>
          </div>
          <div class="content">
            <figure>
              <img
                v-for="index in lives"
                :key="index"
                class="image"
                src="@/assets/heart.png"
                alt="Heart"
              />
            </figure>
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
