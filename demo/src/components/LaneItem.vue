<template>
  <div id="lane">
    <div class="tile">
      <div class="tile is-ancestor is-vertical" style="margin-right: 25px">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p
              class="title is-vertical notification is-primary"
              style="margin-bottom: 0px; text-align: center"
            >
              {{ atk1 }} {{ sigil1 }} {{ health1 }}
            </p>
            <button
              class="is-small is-vertical is-fullwidth is-outlined"
              style="margin-left: 15px; margin-right: 15px; text-align: center"
            >
              ―――――――▼―――――――
            </button>
          </article>
          <article class="tile is-child box">
            <button
              class="is-small is-vertical is-fullwidth is-outlined"
              style="margin-left: 15px; margin-right: 15px; text-align: center"
            >
              ―――――――▲―――――――
            </button>
            <p
              class="title is-vertical notification is-primary"
              style="margin-bottom: 0px; text-align: center"
            >
              a# s h#
            </p>
            <button
              class="is-small is-vertical is-fullwidth is-outlined"
              style="margin-left: 15px; margin-right: 15px; text-align: center"
            >
              ―――――――▼―――――――
            </button>
          </article>
          <article class="tile is-child box">
            <button
              class="is-small is-vertical is-fullwidth is-outlined"
              style="margin-left: 15px; margin-right: 15px; text-align: center"
            >
              ―――――――▲―――――――
            </button>
            <p
              class="title is-vertical notification is-primary"
              style="margin-bottom: 0px; text-align: center"
            >
              a# s h#
            </p>
            <button
              class="is-small is-vertical is-fullwidth is-outlined"
              style="margin-left: 15px; margin-right: 15px; text-align: center"
            >
              ―――――――▼―――――――
            </button>
          </article>
          <article class="tile is-child box">
            <button
              class="is-small is-vertical is-fullwidth is-outlined"
              style="margin-left: 15px; margin-right: 15px; text-align: center"
            >
              ―――――――▲―――――――
            </button>
            <p
              class="title is-vertical notification is-primary"
              style="margin-bottom: 0px; text-align: center"
            >
              a# s h#
            </p>
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
