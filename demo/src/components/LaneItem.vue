<template>
  <div id="lane" class="is-ancestor">
    <div class="tile is-parent is-vertical">
      <div
        v-for="(tile, position) in tiles"
        :key="position"
        class="tile is-child"
      >
        <button
          v-if="position > 0 && !tile.isEmpty"
          class="tile button is-info"
          @click="moveUp(position)"
        >
          {{ up_arrow }}
        </button>
        <button v-else disabled class="tile button is-info">
          {{ no_arrow }}
        </button>
        <div v-if="!tile.isEmpty" class="tile box is-child sigil">
          <div class="level">
            <div class="level-left">Attack: {{ tile.attack }}</div>
            <div class="level-right">Health: {{ tile.health }}</div>
          </div>
          <figure class="media-left">
            <img
              :src="
                require('@/assets/abilities/ability_' + tile.sigil + '.png')
              "
              :alt="tile.sigil"
            />
          </figure>
        </div>
        <div v-else class="content"></div>
        <button
          v-if="position < 3 && !tile.isEmpty"
          class="tile button is-info"
          @click="moveDown(position)"
        >
          {{ down_arrow }}
        </button>
        <button v-else disabled class="tile button is-info">
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
  margin: 10px;
}

.sigil {
  background: hsl(200, 100%, 70%);
}
</style>
