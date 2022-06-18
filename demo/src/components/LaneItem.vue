<template>
  <div id="lane">
    <div class="tile">
      <div
        class="tile is-ancestor is-vertical"
        style="margin-top: 25px; margin-right: 25px"
      >
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p class="title">a,s,h|1|</p>
          </article>
          <article class="tile is-child box">
            <p class="title">a,s,h|2|</p>
          </article>
          <article class="tile is-child box">
            <p class="title">a,s,h|3|</p>
          </article>
          <article class="tile is-child box">
            <p class="title">a,s,h|4|</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaneItem",
  data() {
    return {};
  },
};
</script>

<style scoped>
.button {
  margin: 0px 25px;
  padding: 0px 100px;
  min-height: 600px;
  height: auto;
}

#lane {
  min-width: 200px;
}
</style>
