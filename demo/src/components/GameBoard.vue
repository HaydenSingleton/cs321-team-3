<template>
  <div class="content">
    <div class="columns" style="margin-top: 25px">
      <div class="column" @click="score = ++score % 6">
        <p class="button" id="score">{{ score }}/5</p>
      </div>
      <div class="level">
        <LaneItem
          class="level-item"
          v-for="item in items"
          :key="item.id"
        ></LaneItem>
      </div>
      <div class="column">Info</div>
    </div>
  </div>
</template>

<script>
import LaneItem from "@/components/LaneItem.vue";

export default {
  name: "GameBoard",
  data() {
    return { score: 0, items: [1, 2, 3, 4] };
  },
  components: { LaneItem },
};
</script>
