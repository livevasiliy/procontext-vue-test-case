<template>
  <div>
    <div id="photos" v-if="!loading">
      <Search :search="search" @input="search = $event" />
      <div class="row" v-if="filteredPhotos.length > 0">
        <Photo :photos="filteredPhotos" />
        <div class="col s12 m6 l6 xl6">
          <button
            class="btn waves-effect waves-light offset-s6 offset-m6 offset-l6"
            @click="showMore(start)"
            v-if="filteredPhotos.length < 50"
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
      <h5 class="center-block">
        Фотографии отстуствуют в этом альбоме
      </h5>
    </div>
  </div>
</template>

<script>
import Photo from '../components/Photo';
import Search from '../components/Shared/Search';

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
