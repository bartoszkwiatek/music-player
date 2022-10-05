<template>
  <div>
    <PlayerTopbar @open-playlist="onOpenPlaylist" />
    <PlayerSong />
    <PlayerVolume />
    <PlayerControls />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import PlayerControls from "./PlayerControls.vue";
import PlayerSong from "./PlayerSong.vue";
import PlayerTopbar from "./PlayerTopbar.vue";
import PlayerVolume from "./PlayerVolume.vue";

export default {
  name: "PlayerView",
  components: { PlayerControls, PlayerSong, PlayerTopbar, PlayerVolume },
  computed: {
    ...mapGetters(["nextSongIndex", "previousSongIndex"]),
    songs() {
      return this.$store.state.songs;
    },
    currentSongIndex() {
      return this.$store.state.currentSongIndex;
    },
    settings() {
      return Object.entries(this.$store.state.settings);
    },
  },
  methods: {
    ...mapMutations(["playSong", "setSettings", "toggleFavourite"]),
    onOpenPlaylist() {
      this.$emit("open-playlist");
    },
  },
};
</script>

<style scoped></style>
