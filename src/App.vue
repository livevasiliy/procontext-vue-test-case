<template>
  <div id="app">
    <header class="navbar-fixed">
      <Navbar :links="routes" />
    </header>
    <DrawerMenu :links="routes" />
    <router-view />
  </div>
</template>

<style lang="scss">
.mt-2 {
  margin-top: 2rem;
}
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
import DrawerMenu from './components/Header/DrawerMenu';
import Navbar from './components/Header/Navbar';
export default {
  components: {
    DrawerMenu,
    Navbar,
  },
  data: () => ({
    routes: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: 'Главная',
          icon: 'home',
        },
      },
      {
        path: 'about',
        name: 'About',
        meta: {
          title: 'О себе',
          icon: 'face',
        },
      },
      {
        path: 'photographs',
        name: 'Photographs',
        meta: {
          title: 'Фотографы',
          icon: 'group',
        },
      },
    ],
  }),
};
</script>
