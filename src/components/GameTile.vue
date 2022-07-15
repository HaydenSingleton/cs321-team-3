<template>
  <div class="board">
    <div v-for="(col, j) in items" :key="j">
      <div
        v-for="(card, i) in col"
        :key="card.id"
        id="sigill-box"
        :class="[
          !card.isEmpty ? 'active' : 'inactive',
          i > 0 && i < 3 ? 'middle' : '',
        ]"
      >
        <button
          class="button"
          :disabled="i === 0 || card.isEmpty || !items[j][i - 1].isEmpty"
          @click="moveUpTile(i, j)"
        >
          {{ up_arrow }}
        </button>
        <div class="">
          <div v-if="!card.isEmpty">
            <p class="">Attack: {{ card.attack }}</p>
            <p class="">Health: {{ card.health }}</p>
            <div class="">
              <figure class="">
                <img
                  :src="require('@/assets/abilities/' + card.sigill + '.png')"
                  :alt="card.sigill"
                />
              </figure>
            </div>
            <p v-if="!card.isEmpty" class="text-2xl">{{ card.sigill }}</p>
            <p v-else class="hidden">{{ card.sigill }}</p>
          </div>
          <figure v-else>
            <img
              :src="require('@/assets/abilities/' + card.sigill + '.png')"
              :alt="card.sigill"
              class="image is-16by16"
            />
          </figure>
        </div>
        <button
          class="button"
          :class="!card.isEmpty ? 'is-info' : 'is-black'"
          :disabled="i === 3 || card.isEmpty || !items[j][i + 1].isEmpty"
          @click="moveDownTile(i, j)"
        >
          {{ down_arrow }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Board from "@/board";
import Tile from "@/tile";
import { ref } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  myBoard: { type: Board, default: new Board() },
});

const board = ref<Board>(props.myBoard);
const items: Tile[][] = board.value.items;

const up_arrow = "▲";
const down_arrow = "▼";

function moveUpTile(i: number, j: number) {
  board.value.moveUp(i, j);
}

function moveDownTile(i: number, j: number) {
  board.value.moveDown(i, j);
}
</script>
