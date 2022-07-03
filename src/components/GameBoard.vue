<template>
  <div class="columns is-centered">
    <div v-for="(col, j) in items" :key="j" class="column is-small">
      <div v-for="(card, i) in col" :key="card.id" class="column">
        <div
          id="sigill-box"
          :class="[!card.isEmpty && i > 0 && i < 3 ? 'active' : '', 'inactive']"
        >
          <button
            class="button arrow"
            :class="!card.isEmpty ? 'is-info' : 'is-black'"
            :disabled="i === 0 || card.isEmpty"
            @click="moveUpTile(i, j)"
          >
            {{ up_arrow }}
          </button>
          <div class="has-text-centered">
            <p class="level-item is-danger is-hidden">{{ i }}, {{ j }}</p>
            <p :class="hideIfEmpty(card)" class="level-left is-small">
              Attack: {{ card.attack }}
            </p>
            <p :class="hideIfEmpty(card)" class="level-right is-small">
              Health: {{ card.health }}
            </p>
            <div class="level-item">
              <figure>
                <img
                  :src="require('@/assets/abilities/' + card.sigill + '.png')"
                  :alt="card.sigill"
                  class="image is-32by32"
                />
              </figure>
            </div>
            <p :class="hideIfEmpty(card)" class="text">{{ card.sigill }}</p>
          </div>
          <button
            class="button arrow"
            :class="!card.isEmpty ? 'is-info' : 'is-black'"
            :disabled="i === 3 || card.isEmpty"
            @click="moveDownTile(i, j)"
          >
            {{ down_arrow }}
          </button>
        </div>
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

function hideIfEmpty(card: Tile) {
  if (card.isEmpty) return "is-invisible";
  else return "";
}
</script>

<style scoped>
#sigill-box {
  border-radius: 1.5rem;
  background: lightgray;
}

#sigill-box:hover {
  background: whitesmoke;
  border: 1px solid black;
}

.inactive {
  opacity: 50%;
  border: 1px solid grey;
}

.active {
  background: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.25);
  opacity: 100%;
}

.arrow {
  width: 75%;
  margin: 0.5rem 0;
}

p {
  margin: 0 2rem;
}
</style>
