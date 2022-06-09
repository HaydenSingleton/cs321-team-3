<template>
  <div class="tutorial">
    <span style="display: inline-flex">
      <p>{{ greeting }}</p>
    </span>
    <div>{{ image }}</div>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  setup(props) {
    return { image: "<image>", greeting: props.msg };
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
