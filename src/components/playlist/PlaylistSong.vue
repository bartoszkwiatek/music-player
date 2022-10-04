<template>
  <div v-if="song">
    <div>{{ song }}</div>
    <FontAwesomeIcon icon="fa-solid fa-heart" />
    <FontAwesomeIcon icon="fa-regular fa-heart" />
    <FontAwesomeIcon icon="fa-share-nodes" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "PlaylistSong",
  props: {
    song: Object,
  },
  components: { FontAwesomeIcon },
  methods: {
    toggleFavourite() {
      return this.$emit("toggle-favourite");
    },
  },
};
</script>

<style scoped></style>
