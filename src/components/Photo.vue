<template>
  <div class="row">
    <div
      class="col s12 m4 l4 xl3"
      v-for="photo in photos"
      :key="photo.id"
    >
      <div class="card hoverable z-depth-4">
        <div class="card-image">
          <img :src="photo.thumbnailUrl" :alt="photo.title" />
          <span class="card-title">{{ photo.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
};
</script>
