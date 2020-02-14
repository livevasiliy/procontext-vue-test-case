<template>
  <div id="app">
    <header>
      <nav class="teal accent-4">
        <div class="container">
          <div class="nav-wrapper ">
            <a href="/" class="brand-logo">Vue Test-case</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <router-link
                to="/photographs"
                active-class="active"
                exact
                tag="li"
              >
                <a>Фотографы</a>
              </router-link>
              <router-link
                to="/about"
                active-class="active"
                exact
                tag="li"
              >
                <a>О себе</a>
              </router-link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {};
</script>
