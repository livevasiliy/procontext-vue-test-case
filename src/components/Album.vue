<template>
  <div>
    <Search
      placeholder="Введите название альбома"
      :search="search"
      @input="search = $event"
    />
    <div class="row">
      <div
        class="col s12 m6"
        v-for="album in filteredAlbums"
        :key="album.id"
      >
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ album.title }}</span>
          </div>
          <div class="card-action">
            <router-link
              :to="{
                name: 'Photos',
                params: { albumId: album.id },
              }"
              >Перейти в альбом
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Shared/Search';

export default {
  name: 'Album',
  props: {
    albums: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    search: '',
  }),
  computed: {
    filteredAlbums() {
      return this.albums.filter(album => {
        return (
          album.title
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  components: {
    Search,
  },
};
</script>
