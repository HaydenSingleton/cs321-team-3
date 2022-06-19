<template>
  <div id="lane" class="column">
    <!-- Tile 1 -->
    <div class="tile">
      <div class="tile is-ancestor is-vertical box">
        <SigilTile
          v-for="item in tileList"
          :key="tileList.indexOf(item)"
          :tile-attack="item.attack"
          :tile-health="item.health"
          :tile-name="item.sigil"
          :tile-empty="item.empty"
          :position="tileList.indexOf(item)"
        />
      </div>
    </div>
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
  data() {
    const count = ref(0);
    //console.log("LaneItem Value", this.tiles[0].sigil);
    return { count, tileList: this.tiles };
  },
};
</script>

<style scoped>
#lane {
  text-align: center;
  margin-left: auto;
  margin-right: 20px;
}

.is-ancestor {
  text-align: center;
  border: 1px solid #aaa;
}
</style>
