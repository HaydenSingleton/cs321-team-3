<template>
  <div class="tutorial">
    <span>
      <p style="display: inline">Tutorial about how to play</p>
      <button style="text-align: right">x</button>
    </span>
    <div>{{ image }}</div>
  </div>
</template>

<script>
export default {
  setup() {
    return { image: "<image>" };
  },
};
</script>

<style>
.tutorial {
  background: grey;
  color: white;
  margin: 10px 200px;
  padding: 20px auto;
  text-align: center;
}
</style>
