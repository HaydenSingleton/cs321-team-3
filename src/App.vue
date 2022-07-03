<template>
  <div class="app">
    <nav class="nav">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <router-link class="button is-primary" to="/game">Play</router-link>
          </div>
          <div class="navbar-item">
            <router-link class="button is-light" to="/about">Learn</router-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a
              href="https://github.com/HaydenSingleton/cs321-team-3/"
              class="button is-dark"
              target="_blank"
              >Github</a
            >
          </div>
          <div class="navbar-item">
            <a
              class="button is-link"
              href="https://inscryption.fandom.com/wiki/Sigils"
              target="_blank"
              rel="noopener noreferrer"
              >Inscryption Wiki</a
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: lightblue;
}

nav {
  padding: 0.5rem 0.5rem 1rem;
  background: slateblue;
  font-weight: bold;
}
</style>
