<template>
  <div id="lane" class="is-parent">
    <!-- Tile 1 -->
    <div class="tile box">
      <div class="is-parent">
        <a class="tile button"></a>
        <SigilTile :tile="null" />
        <button class="tile button">{{ down_arrow }}</button>
      </div>
    </div>
    <!-- Tile 2 -->
    <div class="tile box">
      <div class="is-parent">
        <button class="tile button">{{ up_arrow }}</button>
        <SigilTile :tile="second" />
        <button class="tile button">{{ down_arrow }}</button>
      </div>
    </div>
    <!-- Tile 3 -->
    <div class="tile box">
      <div class="is-parent">
        <button class="tile button">{{ up_arrow }}</button>
        <SigilTile :tile="third" />
        <button class="tile button">{{ down_arrow }}</button>
      </div>
    </div>
    <!-- Tile 4 -->
    <div class="tile box">
      <div class="is-parent">
        <button class="tile button">{{ up_arrow }}</button>
        <SigilTile :tile="fourth" />
        <a disabled class="tile button"></a>
      </div>
    </div>
    <!-- Tiles end -->
  </div>
</template>

<script>
import { ref } from "vue";
import SigilTile from "@/components/SigilTile.vue";

export default {
  components: {
    SigilTile,
  },
  props: {
    tiles: { type: Array, default: () => [] },
  },
  setup(props) {
    const first = ref(props.tiles[0]);
    const second = ref(props.tiles[1]);
    const third = ref(props.tiles[2]);
    const fourth = ref(props.tiles[3]);

    return { first, second, third, fourth };
  },
  data() {
    const down_arrow = ref("―――――――▼―――――――");
    const up_arrow = ref("―――――――▲―――――――");
    return { down_arrow, up_arrow };
  },
};
</script>

<style scoped>
#lane > div {
  text-align: center;
  border: 1px solid #aaa;
}

div.is-parent {
  text-align: center;
  margin: 0 10px;
}
</style>
