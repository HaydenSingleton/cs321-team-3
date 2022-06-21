<template>
  <div class="sections">
    <div class="tile is-ancestor is-vertical">
      <section
        v-for="(card, position) in cards"
        :key="position"
        class="tile is-parent is-vertical"
      >
        <button
          v-if="position > 0 && !card.isEmpty"
          class="button"
          :class="[activeArea(position) ? 'is-info' : 'is-dark']"
          @click="moveUp(position)"
        >
          {{ up_arrow }}
        </button>
        <button
          v-else
          disabled
          class="button"
          :class="[activeArea(position) ? 'is-info' : 'is-dark']"
        ></button>
        <div v-if="!card.isEmpty" id="sigil" class="tile is-child">
          <div id="sigil-text" class="level-left">
            Attack: {{ card.attack }}
          </div>
          <div id="sigil-text" class="level-right">
            Health: {{ card.health }}
          </div>
          <figure id="sigil" class="media-container">
            <img
              :src="
                require('@/assets/abilities/ability_' + card.sigil + '.png')
              "
              :alt="card.sigil"
              class="media-left"
            />
          </figure>
        </div>
        <div v-else class="tile is-child"></div>
        <button
          v-if="position < 3 && !card.isEmpty"
          class="button"
          :class="[position > 0 ? 'is-info' : 'is-dark']"
          @click="moveDown(position)"
        >
          {{ down_arrow }}
        </button>
        <button
          v-else
          disabled
          class="button"
          :class="[activeArea(position) ? 'is-info' : 'is-dark']"
        ></button>
      </section>
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
    activeArea(position) {
      return position > 0 && position < 3;
    },
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
  font-weight: bold;
}

#sigil-text {
  padding: 1rem;
}

.middle.section {
  background: darkgray;
  color: blue;
}

:not(.middle).section {
  background: lightgray;
  color: black;
}
</style>
