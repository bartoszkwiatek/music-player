<template>
  <div class="songs-container">
    <div v-if="songs" class="song-list">
      <PlaylistSong
        v-for="(song, index) in songs"
        :key="index"
        :song="song"
        @click="onClickSong(index)"
        @toggle-favourite="onToggleFavourite(index)"
      />
    </div>
    <div class="fade" />
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

<style scoped>
.songs-container {
  position: relative;
}
.song-list {
  margin-left: 20px;
  margin-right: 20px;
  height: 380px;
  overflow: auto;
}

.fade {
  position: absolute;
  bottom: 0px;

  display: block;

  width: 100%;
  height: 100px;

  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    var(--background-color) 100%
  );
}
</style>
