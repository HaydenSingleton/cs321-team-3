<template>
  <nav>
    <ul class="left">
      <router-link class="button" to="/game">Play </router-link>
      <router-link class="button" to="/about">Learn</router-link>
    </ul>
    <ul class="right">
      <a
        href="https://github.com/HaydenSingleton/cs321-team-3/"
        class="button"
        target="_blank"
        >Github</a
      >
      <a
        class="button is-link"
        href="https://inscryption.fandom.com/wiki/Sigils"
        target="_blank"
        >Inscryption Wiki</a
      >
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  background: #000088;
  font-weight: bold;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a,
router-link {
  display: flex;
  color: whitesmoke;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover,
router-link:hover {
  background-color: #000066;
}
</style>
