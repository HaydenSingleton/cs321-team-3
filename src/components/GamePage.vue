<template>
  <div style="margin-top: 0.5rem">
    <div class="columns is-centered">
      <div class="column is-1">
        <div class="container">
          <div class="button is-dark title">{{ score }} / 5</div>
          <div class="block">
            <button
              class="button"
              :class="lives > 0 ? 'is-info' : 'is-dark'"
              :disabled="lives === 0"
              @click="checkWin(board)"
            >
              <p>Check</p>
            </button>
          </div>
          <div class="block">
            <button class="button is-danger" @click="reset">
              <p>Reset</p>
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
