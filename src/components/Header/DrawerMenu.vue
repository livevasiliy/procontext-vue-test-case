<template>
  <ul id="slide-out" class="sidenav teal accent-1" v-sidenav>
    <li>
      <div class="user-view">
        <div class="background teal darken-3">
          <img src="@/assets/logo.png" alt="vue-logo" class="responsive-img" />
        </div>
        <a href="#user"
          ><img class="circle" src="@/assets/avatar.jpg"
        /></a>
        <a href="#name"
          ><span class="white-text name">Василий Пивоваров</span></a
        >
        <a href="#email"
          ><span class="white-text email"
            >livevasiliy@yandex.ru</span
          ></a
        >
      </div>
    </li>
    <router-link
      v-for="link of links"
      :key="link.title"
      :to="{ name: link.name }"
      active-class="active"
      exact
      tag="li"
    >
      <a>
        <i class="small material-icons">{{ link.meta.icon }}</i>
        {{ link.meta.title }}
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'DrawerMenu',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
