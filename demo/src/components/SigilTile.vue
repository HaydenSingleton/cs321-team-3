<template>
  <div class="tile is-child is-vertical">
    <button v-if="tilePosition > 0" class="tile button">{{ up_arrow }}</button>
    <button v-else disabled class="tile button">{{ no_arrow }}</button>
    <div v-if="!empty || empty" class="tile box media-container">
      <p>Attack: {{ attack }}, Health: {{ health }}</p>
      <img
        class="media-left"
        :src="require('@/assets/' + name + '.png')"
        alt="Default sigil"
      />
      <p>Sigil: {{ name }}</p>
    </div>
    <button v-if="tilePosition < 3" class="tile button">
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

    console.log(this.tileName.trim(), this.position);

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
};
</script>

<style scoped>
.media-container {
  background-color: gainsboro;
  text-align: center;
  display: block;
}
</style>
