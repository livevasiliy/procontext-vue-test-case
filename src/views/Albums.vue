<template>
  <div>
    <Album :albums="albums" v-if="!loading" />
    <PreLoader v-else />
  </div>
</template>

<script>
import Album from '../components/Album';
import PreLoader from '../components/Shared/PreLoader';
export default {
  name: 'Albums',
  data: () => ({
    albums: [],
    loading: false,
  }),
  mounted() {
    this.loading = true;
    this.$http
      .get('/albums', {
        params: {
          userId: this.$route.params.id,
        },
      })
      .then(async response => {
        this.albums = await response.data;
        this.loading = false;
      });
  },
  components: {
    Album,
    PreLoader,
  },
};
</script>
