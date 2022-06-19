<template>
  <div class="tile is-child is-vertical">
    <button v-if="showTopButton" class="tile button">{{ up_arrow }}</button>
    <button v-else disabled class="tile button">{{ no_arrow }}</button>
    <div v-if="!empty" class="tile media-container">
      <p>Attack: {{ attack }}, Health: {{ health }}</p>
      <img class="media-left" :src="imageLocation" alt="Default sigil" />
      <p>Sigil: {{ name }}</p>
    </div>
    <button v-if="showBottomButton" class="tile button">
      {{ down_arrow }}
    </button>
    <button v-else disabled class="tile button">{{ no_arrow }}</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    tileAttack: { type: Number, default: 0 },
    tileHealth: { type: Number, default: 0 },
    tileName: { type: String, default: "empty" },
    tileEmpty: { type: Boolean, default: true },
    position: { type: Number, default: 0 },
  },
  data() {
    const down_arrow = ref("―――――――▼―――――――");
    const up_arrow = ref("―――――――▲―――――――");
    const no_arrow = ref("―――――――――――――――");
    return {
      attack: this.tileAttack,
      health: this.tileHealth,
      name: this.tileName,
      empty: this.tileEmpty,
      tilePosition: this.position,
      down_arrow,
      up_arrow,
      no_arrow,
    };
  },
  computed: {
    showTopButton() {
      return this.position > 0;
    },
    showBottomButton() {
      return this.position < 3;
    },
    imageLocation() {
      return require("@/assets/" + this.tileName + ".png");
    },
  },
  mounted() {
    // console.log("position", this.position, "name", this.name);
  },
};
</script>

<style scoped>
.media-container {
  background-color: gainsboro;
  text-align: center;
  display: block;
}
</style>
