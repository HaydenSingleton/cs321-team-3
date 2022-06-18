<template>
  <div id="lane" class="is-parent">
    <!-- Tile 1 -->
    <div class="tile box">
      <div class="is-parent">
        <a disabled class="tile button"></a>
        <div class="tile box is-child media-container">
          <p>Attack: {{ tiles[0].attack }}, Health: {{ tiles[0].attack }}</p>
          <img class="media-left" src="../assets/empty_tile.png" />
          <p>Sigil: {{ tiles[0].sigil }}</p>
        </div>
        <button class="tile button">{{ down_arrow }}</button>
      </div>
    </div>
    <!-- Tile 2 -->
    <div class="tile box">
      <div class="is-parent">
        <button class="tile button">{{ up_arrow }}</button>
        <div class="tile box is-child media-container">
          <p>Attack: {{ tiles[1].attack }}, Health: {{ tiles[1].attack }}</p>
          <img class="media-left" src="../assets/empty_tile.png" />
          <p>Sigil: {{ tiles[1].sigil }}</p>
        </div>
        <button class="tile button">{{ down_arrow }}</button>
      </div>
    </div>
    <!-- Tile 3 -->
    <div class="tile box">
      <div class="is-parent">
        <button class="tile button">{{ up_arrow }}</button>
        <div class="tile box is-child media-container">
          <p>Attack: {{ tiles[1].attack }}, Health: {{ tiles[1].attack }}</p>
          <img class="media-left" src="../assets/empty_tile.png" />
          <p>Sigil: {{ tiles[1].sigil }}</p>
        </div>
        <button class="tile button">{{ down_arrow }}</button>
      </div>
    </div>
    <!-- Tile 4 -->
    <div class="tile box">
      <div class="is-parent">
        <button class="tile button">{{ up_arrow }}</button>
        <div class="tile box is-child media-container">
          <p>Attack: {{ tiles[1].attack }}, Health: {{ tiles[1].attack }}</p>
          <img class="media-left" src="../assets/empty_tile.png" />
          <p>Sigil: {{ tiles[1].sigil }}</p>
        </div>
        <a disabled class="tile button"></a>
      </div>
    </div>
    <!-- Tiles end -->
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
const props = defineProps({
  tiles: { type: Array, default: null },
});

const tiles = computed(() => props.tiles);
const down_arrow = ref("―――――――▼―――――――");
const up_arrow = ref("―――――――▲―――――――");
</script>

<style scoped>
#lane > div {
  text-align: center;
  border: 1px solid #aaa;
}

div.is-parent {
  text-align: center;
  margin: 0px 10px;
}

div.is-child {
  background-color: #abb;
}
</style>
