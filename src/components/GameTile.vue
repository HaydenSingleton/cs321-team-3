<template>
  <div
    id="game-tile"
    :class="[
      !card.isEmpty ? 'active' : 'inactive',
      i > 0 && i < 3 ? 'middle' : '',
    ]"
  >
    <button
      class="button"
      :disabled="i === 0 || card.isEmpty"
      :class="[i === 0 || card.isEmpty ? 'disabled' : '']"
      @click="$emit('moveUp', i, j)"
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
      :disabled="i === 3 || card.isEmpty"
      :class="[i === 0 || card.isEmpty ? 'disabled' : '']"
      @click="$emit('moveDown', i, j)"
    >
      {{ down_arrow }}
    </button>
  </div>
</template>

<script setup lang="ts">
import Tile from "@/tile";
import { ref } from "vue";

const up_arrow = ref("--▲--");
const down_arrow = "--▼--";

// eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
const props = defineProps({
  card: { type: Tile, default: new Tile() },
  i: { type: Number, default: 0 },
  j: { type: Number, default: 0 },
});
</script>

<style>
.button {
  @apply border-solid border-2 bg-sky-500 hover:bg-sky-600;
}
</style>
