<template>
  <div>
    <div id="photos" v-if="!loading">
      <Search
        placeholder="Введите название фотографии"
        :search="search"
        @input="search = $event"
      />
      <div class="row" v-if="filteredPhotos.length > 0">
        <Photo :photos="filteredPhotos" />
        <div class="col s12 m12 l12 xl12 center">
          <button
            class="btn waves-effect waves-light offset-s6 offset-m6 offset-l6"
            @click="showMore(start)"
            v-if="filteredPhotos.length < 50"
            :disabled="loading"
          >
            Показать ещё
          </button>
        </div>
      </div>
      <div v-else class="valign-wrapper">
        <h5 class="center-block">
          Фотографии с таким названием отстуствуют
        </h5>
      </div>
    </div>
    <div v-else class="valign-wrapper">
      <PreLoader />
    </div>
  </div>
</template>

<script>
import Photo from '../components/Photo';
import Search from '../components/Shared/Search';
import PreLoader from '../components/Shared/PreLoader';

export default {
  name: 'Photos',
  data: () => ({
    photos: [],
    start: 0,
    search: '',
    loading: false,
  }),
  mounted() {
    this.$http
      .get('/photos', {
        params: {
          albumId: this.$route.params.albumId,
          _start: this.start,
          _limit: 10,
        },
      })
      .then(async response => {
        this.photos = await response.data;
        this.start += 10;
        this.loading = false;
      });
  },
  components: {
    Photo,
    Search,
    PreLoader,
  },
  methods: {
    showMore(start) {
      this.loading = true;
      this.start += 10;
      if (start <= 50) {
        this.$http
          .get('/photos', {
            params: {
              albumId: this.$route.params.albumId,
              _start: start,
              _limit: 10,
            },
          })
          .then(async response => {
            await this.photos.push(...response.data);
            this.loading = false;
          });
      }
    },
  },
  computed: {
    filteredPhotos() {
      return this.photos.filter(photo => {
        return (
          photo.title
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>
