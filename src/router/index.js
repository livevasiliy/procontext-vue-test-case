import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'О себе',
    },
  },
  {
    path: '/photographs',
    name: 'Photographs',
    component: () =>
      import(
        /* webpackChunkName: "photographs" */ '../views/Photographs.vue'
      ),
    props: true,
    meta: {
      title: 'Фотографы',
    },
  },
  {
    path: '/photographs/:photograph',
    name: 'Photograph',
    component: () =>
      import(
        /* webpackChunkName: "photograph" */ '../views/Photograph.vue'
      ),
    props: true,
    meta: {
      title: 'Фотограф',
    },
  },
  {
    path: '/photographs/:photograph/albums',
    component: () =>
      import(/* webpackChunkName: "albums" */ '../views/Albums.vue'),
    name: 'Albums',
    props: true,
    meta: {
      title: 'Альбомы',
    },
  },
  {
    path: '/photographs/:photograph/albums/:albumId/photos',
    name: 'Photos',
    props: true,
    component: () =>
      import(/* webpackChunkName: "photos" */ '../views/Photos.vue'),
    meta: {
      title: 'Фотографии',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
