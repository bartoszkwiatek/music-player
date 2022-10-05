<template>
  <div>
    <PlayerTopbar @open-playlist="onOpenPlaylist" class="top-bar" />
    <div class="player">
      <PlayerSong />
      <PlayerVolume class="player-volume" />
      <PlayerControls />
    </div>
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
    ...mapMutations(["playSong", "toggleFavourite"]),
    onOpenPlaylist() {
      this.$emit("open-playlist");
    },
  },
};
</script>

<style lang="scss" scoped>
.player-volume {
  position: relative;
  bottom: 6px;
}
.top-bar {
  position: absolute;
  z-index: 10;
}
</style>
