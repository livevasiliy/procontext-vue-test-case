<template>
  <div class="photographs">
    <div class="row">
      <div
        class="col s12 m6"
        v-for="photograph in photographs"
        :key="photograph.id"
      >
        <router-link
          :to="{
            name: 'Photograph',
            params: { photograph: photograph.id },
          }"
          exact
        >
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{ photograph.name }}</span>
              <span>{{ photograph.username }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotographCard',
  props: {
    photographs: {
      type: Array,
      required: true,
    },
  },
};
</script>
