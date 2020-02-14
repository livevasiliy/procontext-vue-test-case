<template>
  <div class="photograph">
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ photograph.name }}</span>
            <h5>username: {{ photograph.username }}</h5>
            <span class="mt-2">
              <a :href="'mailto:' + photograph.email">
                {{ photograph.email }}
              </a>
            </span>
          </div>
          <div class="card-action">
            <router-link
              :to="{
                name: 'Albums',
                params: { photograph: this.$route.params.photograph },
              }"
              >Перейти к моим альбомам</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotographDetail',
  props: {
    photograph: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.mt-2 {
  margin-top: 10px;
}
</style>
