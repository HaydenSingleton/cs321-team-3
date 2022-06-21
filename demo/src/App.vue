<template>
  <div class="section">
    <nav class="nav navbar">
      <div class="container">
        <div id="navMenu" class="navbar-menu is-dark">
          <div class="navbar-start">
            <div class="navbar-item">
              <router-link class="button is-primary" to="/game"
                >Play</router-link
              >
            </div>
            <div class="navbar-item">
              <router-link class="button is-light" to="/about"
                >Learn</router-link
              >
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  href="https://github.com/HaydenSingleton/cs321-team-3/"
                  class="button is-dark"
                  >Github</a
                >
                <a
                  class="button is-link"
                  src="https://inscryption.fandom.com/wiki/Sigils"
                  >Inscryption Wiki</a
                >
              </div>
            </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: lightblue;
}

nav {
  margin: 30px;
}

#navMenu {
  background: slateblue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
