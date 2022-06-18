<template>
  <div class="content">
    <div class="columns" style="margin-top: 25px">
      <div class="column" @click="score = ++score % 6">
        <p id="score" class="button">{{ score }}/5</p>
      </div>
      <div class="level">
        <LaneItem
          v-for="item in items"
          :key="item.id"
          class="level-item"
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
  components: { LaneItem },
  data() {
    return { score: 0, items: [1, 2, 3, 4] };
  },
};
</script>
