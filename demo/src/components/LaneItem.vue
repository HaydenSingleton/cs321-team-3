<template>
  <div id="lane" class="column">
    <!-- Tile 1 -->
    <div class="tile">
      <div class="tile is-ancestor is-vertical box">
        <div
          v-for="(tile, position) in tiles"
          :key="tile.sigil + position"
          class="tile is-child is-vertical"
        >
          <button
            v-if="position > 0"
            class="tile button"
            @click="moveUp(position, !tile.isEmpty)"
          >
            {{ up_arrow }}
          </button>
          <button v-else disabled class="tile button">{{ no_arrow }}</button>
          <div v-if="!tile.isEmpty" class="tile box media-container">
            <span>Attack: {{ tile.attack }}</span>
            <span>Health: {{ tile.health }}</span>
            <img
              class="media-left is-64by64"
              :src="
                require('@/assets/abilities/ability_' + tile.sigil + '.png')
              "
              alt="Default sigil"
            />
          </div>
          <button
            v-if="position < 3"
            class="tile button"
            @click="moveDown(position, !tile.isEmpty)"
          >
            {{ down_arrow }}
          </button>
          <button v-else disabled class="tile button">{{ no_arrow }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Lane } from "@/lane.js";

export default {
  props: { lane: { type: Lane, default: [] } },
  data() {
    const down_arrow = ref("―――――――▼―――――――");
    const up_arrow = ref("―――――――▲―――――――");
    const no_arrow = ref("―――――――――――――――");
    const tiles = this.lane.getTiles();
    return { tiles, down_arrow, up_arrow, no_arrow };
  },
  methods: {
    moveUp(pos, valid) {
      if (valid) {
        if (this.tiles[pos - 1].isEmpty === true) {
          console.log("Trying to move up tile", pos);
          let a = this.tiles[pos].attack;
          let h = this.tiles[pos].health;
          let s = this.tiles[pos].sigil;
          this.tiles[pos - 1].Assign(false, a, h, s);
          this.tiles[pos].reset();
        } else {
          console.log("Cannot move tile", pos);
        }
      }
    },
    moveDown(pos, valid) {
      if (valid) {
        if (this.tiles[pos + 1].isEmpty === true) {
          console.log("Trying to move down tile", pos);
          let a = this.tiles[pos].attack;
          let h = this.tiles[pos].health;
          let s = this.tiles[pos].sigil;
          this.tiles[pos + 1].Assign(false, a, h, s);
          this.tiles[pos].reset();
        } else {
          console.log("Cannot move tile", pos);
        }
      }
    },
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
  background: whitesmoke;
}

.box {
  margin: 0px;
  border-radius: 5px;
}

.media-container {
  background-color: lightgray;
  text-align: center;
  display: block;
}
</style>
