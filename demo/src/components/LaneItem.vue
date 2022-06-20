<template>
  <div id="lane" class="is-ancestor">
    <div class="tile is-parent is-vertical">
      <div
        v-for="(tile, position) in tiles"
        :key="tile.sigil + position"
        class="tile is-child is-primary"
      >
        <button
          v-if="position > 0 && !tile.isEmpty"
          class="tile button enabled"
          @click="moveUp(position)"
        >
          {{ up_arrow }}
        </button>
        <button v-else disabled class="tile button disabled">
          {{ no_arrow }}
        </button>
        <div
          v-if="!tile.isEmpty"
          class="tile box media-container is-child is-link"
        >
          <div class="tile is-vertical">
            Attack: {{ tile.attack }} Health: {{ tile.health }}
          </div>
          <img
            class="media-left is-64by64"
            :src="require('@/assets/abilities/ability_' + tile.sigil + '.png')"
            :alt="tile.sigil"
          />
        </div>
        <button
          v-if="position < 3 && !tile.isEmpty"
          class="tile button enabled"
          @click="moveDown(position)"
        >
          {{ down_arrow }}
        </button>
        <button v-else disabled class="tile button disabled">
          {{ no_arrow }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Lane } from "@/lane";

export default {
  props: { tileList: { type: Object, default: new Lane().getTiles() } },
  data() {
    const down_arrow = ref("―――――――▼―――――――");
    const up_arrow = ref("―――――――▲―――――――");
    const no_arrow = ref("―――――――――――――――");
    return { tiles: this.tileList, down_arrow, up_arrow, no_arrow };
  },
  methods: {
    moveUp(pos) {
      let t = this.tiles[pos];
      if (this.tiles[pos - 1].isEmpty === true) {
        this.tiles[pos - 1].Assign(false, t.attack, t.health, t.sigil);
        this.tiles[pos].reset();
      }
    },
    moveDown(pos) {
      let t = this.tiles[pos];
      if (this.tiles[pos + 1].isEmpty === true) {
        this.tiles[pos + 1].Assign(false, t.attack, t.health, t.sigil);
        this.tiles[pos].reset();
      }
    },
  },
};
</script>

<style scoped>
#lane {
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}

.is-child {
  margin: 1px;
}

.media-container {
  text-align: center;
  display: block;
  background: lightgreen;
}

.button {
  background: darkseagreen;
}

.disabled {
  opacity: 50%;
  background: lightgray;
}
</style>
