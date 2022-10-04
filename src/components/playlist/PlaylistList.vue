<template>
  <div v-if="songs">
    <PlaylistSong
      v-for="(song, index) in songs"
      :key="index"
      :song="song"
      @click="onClickSong(index)"
      @toggle-favourite="onToggleFavourite(index)"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import PlaylistSong from "./PlaylistSong.vue";
export default {
  name: "PlaylistList",
  components: { PlaylistSong },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
  },
  methods: {
    ...mapMutations(["playSong", "toggleFavourite"]),
    onClickSong(index) {
      this.playSong(index);
    },
    onToggleFavourite(index) {
      this.toggleFavourite(index);
    },
  },
};
</script>

<style scoped></style>
