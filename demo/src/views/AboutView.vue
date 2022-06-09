<template>
  <div class="about">
    <Tutorial msg="Learn to play the Inscryption Puzzle!" />
  </div>
</template>

<script>
// @ is an alias to /src
import Tutorial from "@/components/TutorialMenu.vue";

export default {
  name: "AboutView",
  components: {
    Tutorial,
  },
};
</script>
