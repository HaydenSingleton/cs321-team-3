<template>
  <div id="game-page" class="grid grid-cols-12">
    <div id="score" class="col-span-1">
      <div class="px-4 sm:px-0">
        <div class="text-lg font-medium leading-6 text-gray-900">
          Score:
          <p class="mt-1 text-lg text-gray-600">{{ score }} / 5</p>
        </div>
        <div class="px-4 sm:px-0">
          <button
            class="button p-4 sm:px-0"
            :class="lives > 0 ? '' : 'bg-gray-600'"
            :disabled="lives === 0"
            @click="checkWin(board)"
          >
            <p>Check</p>
          </button>
        </div>
        <div class="">
          <button class="button" @click="reset">
            <p>Reset</p>
          </button>
        </div>
      </div>
    </div>
    <div id="center" class="col-start-2 col-end-11">
      <table class="border-spacing-2 w-full bg-white text-sm shadow-sm">
        <tbody>
          <tr>
            <td>Left</td>
            <td>Middle Left</td>
            <td>Middle Right</td>
            <td>Right</td>
          </tr>
          <tr v-for="(col, i) in items" :key="col">
            <td
              v-for="(tile, j) in col"
              :key="tile.id"
              class="border p-4 text-slate-500"
            >
              <GameTile
                @moveUp="moveUpTile"
                @moveDown="moveDownTile"
                :i="i"
                :j="j"
                :card="tile"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="lives" class="col-span-1 col-start-12">
      <div
        class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
      >
        <div class="">
          <p>Lives:</p>
          <p>{{ lives }} / 3</p>
        </div>
        <div class="" v-for="index in lives" :key="index">
          <figure>
            <img class="" src="@/assets/heart.png" alt="Heart" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JSConfetti from "js-confetti";
import Board from "@/board";
import Tile from "@/tile";
import GameTile from "@/components/GameTile.vue";

const board = new Board();
const score = ref(0);
const lives = ref(3);
const confetti = new JSConfetti();

const items: Tile[][] = board.items;

function moveUpTile(i: number, j: number) {
  console.log("move up", i, j);
  board.moveUp(i, j);
}

function moveDownTile(i: number, j: number) {
  console.log("move down", i, j);
  board.moveDown(i, j);
}

function win(): void {
  confetti.addConfetti();
}

function checkWin(b: Board): void {
  score.value = b.checkBoard();

  if (score.value >= 5) win();
  else {
    lives.value--;
  }
}

function reset(): void {
  lives.value = 3;
  score.value = 0;
  board.reset();
}
</script>
