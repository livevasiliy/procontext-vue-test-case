<template>
  <nav class="teal accent-3">
    <div class="nav-wrapper">
      <div class="input-field">
        <input
          id="search"
          type="search"
          v-model="searchValue"
          placeholder="Введите название фотографии"
        />
        <label class="label-icon" for="search">
          <i class="material-icons">search</i>
        </label>
        <i class="material-icons">close</i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Search',
  props: {
    search: {
      type: String,
      required: true,
    },
  },
  computed: {
    searchValue: {
      get() {
        return this.search;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
