<template>
  <nav class="teal accent-4">
    <a href="#" data-target="slide-out" class="sidenav-trigger"
      ><i class="material-icons">menu</i></a
    >
    <div class="container">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo"><h5>Vue Test-case</h5></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link
            v-for="link of links"
            :key="link.title"
            :to="{ name: link.name }"
            active-class="active"
            exact
            tag="li"
          >
            <a>
              <i class="medium material-icons left">
                {{ link.meta.icon }}
              </i>
              {{ link.meta.title }}
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
