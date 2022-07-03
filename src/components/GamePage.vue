<template>
  <div class="my-1">
    <div class="columns is-centered">
      <div class="column is-1">
        <div class="tile is-ancestor is-vertical">
          <div class="tile is-parent is-vertical">
            <progress
              aria-busy="true"
              class="progress is-dark"
              :value="score"
              max="5"
            />
            <p class="button title tile is-child is-dark">{{ score }} / 5</p>
          </div>
          <div class="tile is-parent">
            <button
              class="tile is-child button"
              :class="lives > 0 ? 'is-info' : 'is-dark'"
              :disabled="lives === 0"
              @click="checkWin(board)"
            >
              Check
            </button>
          </div>
          <div class="tile is-parent">
            <button class="tile is-child button is-dark" @click="reset">
              Reset
            </button>
          </div>
        </div>
      </div>
      <div class="column">
        <GameBoard :board="board" />
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

<script setup lang="ts">
import { ref } from "vue";
import JSConfetti from "js-confetti";
import Board from "@/board";
import GameBoard from "@/components/GameBoard.vue";

const board = new Board();
const score = ref(0);
const lives = ref(3);
const confetti = new JSConfetti();

function win() {
  confetti.addConfetti();
}

function checkWin(b: Board) {
  score.value = b.checkBoard();

  if (score.value >= 5) win();
  else {
    lives.value--;
  }
}

function reset() {
  score.value = 0;
  lives.value = 3;
  board.reset();
}
</script>
