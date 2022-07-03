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
        <div v-if="!card.isEmpty" id="card" class="tile is-child">
          <div id="card-text" class="level-left">Attack: {{ card.attack }}</div>
          <div id="card-text" class="level-right">
            Health: {{ card.health }}
          </div>
          <figure id="card" class="media-container">
            <img
              :src="
                require('@/assets/abilities/ability_' + card.sigil + '.png')
              "
              :alt="card.sigil"
              class="media-left"
            />
          </figure>
        </div>
        <!--        <div v-else class="tile is-child"></div>-->
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

<script lang="ts"></script>

<style scoped>
#card {
  margin-bottom: 0 !important;
  background: white;
  font-weight: bold;
}

#card-text {
  padding: 1rem;
}
</style>
