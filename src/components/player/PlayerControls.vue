<template>
  <div style="display: flex">
    <FontAwesomeIcon icon="fa-pause" />
    <FontAwesomeIcon icon="fa-play" />
    <FontAwesomeIcon icon="fa-solid fa-heart" />
    <FontAwesomeIcon icon="fa-regular fa-heart" />
    <FontAwesomeIcon icon="fa-share-nodes" />
    <FontAwesomeIcon icon="fa-forward-step" />
    <FontAwesomeIcon icon="fa-backward-step" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "PlayerControls",
  components: { FontAwesomeIcon },
  computed: {
    ...mapGetters(["nextSongIndex", "previousSongIndex"]),
    songs() {
      return this.$store.state.songs;
    },
    currentSongIndex() {
      return this.$store.state.currentSongIndex;
    },
  },
  methods: {
    ...mapMutations(["playSong", "toggleFavourite"]),
  },
};
</script>

<style scoped></style>
