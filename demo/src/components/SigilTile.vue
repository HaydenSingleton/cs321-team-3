<template>
  <div class="tile box is-child media-container">
    <p>Attack: {{ attack }}, Health: {{ health }}</p>
    <img
      class="media-left"
      src="../assets/empty_tile.png"
      alt="Default sigil"
    />
    <p>Sigil: {{ name }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    a: { type: Number, default: 0 },
    h: { type: Number, default: 0 },
    n: { type: String, default: "None" },
  },
  setup(props) {
    const attack = ref(props.a);
    const health = ref(props.h);
    const name = ref(props.n);
    return { attack, health, name };
  },
};
</script>

<style scoped>
div {
  background-color: #aaabbb;
}
</style>
