import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Albums from '../views/Albums';
import Photos from '../views/Photos';
import Photographs from '../views/Photographs';
import Photograph from '../views/Photograph';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/photographs',
    name: 'Photographs',
    component: Photographs,
    props: true,
  },
  {
    path: '/photographs/:photograph',
    name: 'Photograph',
    component: Photograph,
    props: true,
  },
  {
    path: '/photographs/:photograph/albums',
    component: Albums,
    name: 'Albums',
    props: true,
  },
  {
    path: '/photographs/:photograph/albums/:albumId/photos',
    name: 'Photos',
    props: true,
    component: Photos,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
