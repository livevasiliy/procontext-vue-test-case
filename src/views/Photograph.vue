<template>
  <div>
    <PhotographDetail :photograph="photograph" v-if="!loading" />
    <PreLoader v-else />
  </div>
</template>

<script>
import PhotographDetail from '../components/PhotographDetail';
import PreLoader from '../components/Shared/PreLoader';

export default {
  name: 'Photograph',
  components: {
    PhotographDetail,
    PreLoader,
  },
  data: () => ({
    photograph: {},
    loading: false,
  }),
  mounted() {
    this.loading = true;
    this.$http
      .get('/users', {
        params: {
          id: this.$route.params.photograph,
        },
      })
      .then(response => {
        this.photograph = { ...response.data[0] };
        this.loading = false;
      });
  },
};
</script>
