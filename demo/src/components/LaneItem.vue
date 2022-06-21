<template>
  <div id="lane" class="tile is-ancestor">
    <div class="tile is-parent is-vertical">
      <div
        v-for="(card, position) in cards"
        :key="position"
        class="tile is-child is-vertical"
      >
        <button
          v-if="position > 0 && !card.isEmpty"
          class="tile button is-info"
          @click="moveUp(position)"
        >
          {{ up_arrow }}
        </button>
        <button v-else disabled class="tile button is-info">
          {{ no_arrow }}
        </button>
        <div v-if="!card.isEmpty" class="tile is-child">
          <div id="sigil" class="tile is-child">
            <span id="sigil-text" class="level-left">
              Attack: {{ card.attack }}
            </span>
            <span id="sigil-text" class="level-right">
              Health: {{ card.health }}
            </span>
          </div>
          <figure id="sigil" class="tile is-child">
            <img
              :src="
                require('@/assets/abilities/ability_' + card.sigil + '.png')
              "
              :alt="card.sigil"
            />
          </figure>
        </div>
        <div v-else class="tile is-child"></div>
        <button
          v-if="position < 3 && !card.isEmpty"
          class="tile is-child button is-info"
          @click="moveDown(position)"
        >
          {{ down_arrow }}
        </button>
        <button v-else disabled class="tile is-child button is-info">
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
    return { cards: this.tileList, down_arrow, up_arrow, no_arrow };
  },
  methods: {
    moveUp(pos) {
      let t = this.cards[pos];
      if (this.cards[pos - 1].isEmpty === true) {
        this.cards[pos - 1].Assign(false, t.attack, t.health, t.sigil);
        this.cards[pos].reset();
      }
    },
    moveDown(pos) {
      let t = this.cards[pos];
      if (this.cards[pos + 1].isEmpty === true) {
        this.cards[pos + 1].Assign(false, t.attack, t.health, t.sigil);
        this.cards[pos].reset();
      }
    },
  },
};
</script>

<style scoped>
#sigil {
  margin-bottom: 0 !important;
  background: white;
}

#sigil-text {
  padding: 1rem;
}

#sigil .tile.is-vertical > .tile.is-child:not(:last-child):not(:first-child) {
  background: lightseagreen;
}
</style>
