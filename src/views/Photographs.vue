<template>
  <PhotographCard :photographs="photographs" v-if="!loading" />
  <PreLoader v-else />
</template>

<script>
import PhotographCard from '../components/PhotographCard';
import PreLoader from '../components/Shared/PreLoader';

export default {
  name: 'Photographs',
  data: () => ({
    photographs: [],
    loading: false,
  }),
  mounted() {
    this.loading = true;
    this.$http('/users').then(response => {
      this.photographs = response.data;
      this.loading = false;
    });
  },
  components: {
    PhotographCard,
    PreLoader,
  },
};
</script>
