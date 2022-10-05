<template>
  <div class="container">
    <RoundButton icon="fa-share-nodes" class="left" />
    <RoundButton
      @click.native="skip(previousSongIndex)"
      :disabled="previousSongIndex === null"
      icon="fa-backward-step"
      color="#fff"
      backgroundColor="#60558f"
      size="lg"
    />
    <PlayButton />
    <RoundButton
      @click.native="skip(nextSongIndex)"
      :disabled="nextSongIndex === null"
      icon="fa-forward-step"
      color="#fff"
      backgroundColor="#60558f"
      size="lg"
    />
    <RoundButton
      @click.native="toggleFav"
      :icon="heartProps.icon"
      :color="heartProps.color"
      class="right"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import RoundButton from "../common/RoundButton.vue";
import PlayButton from "./PlayButton.vue";

export default {
  name: "PlayerControls",
  components: { PlayButton, RoundButton },
  computed: {
    ...mapGetters(["nextSongIndex", "previousSongIndex", "currentSong"]),
    songs() {
      return this.$store.state.songs;
    },
    currentSongIndex() {
      return this.$store.state.currentSongIndex;
    },
    heartProps() {
      if (this.currentSong.favourite) {
        return {
          icon: "fa-solid fa-heart",
          color: "#ed5e74",
        };
      }
      return {
        icon: "fa-regular fa-heart",
        color: "#60558f",
      };
    },
  },
  methods: {
    ...mapMutations(["playSong", "toggleFavourite"]),
    skip(index) {
      this.playSong(index);
    },
    toggleFav() {
      this.toggleFavourite(this.currentSongIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 100px;

  .left {
    margin-right: 35px;
  }

  .right {
    margin-left: 35px;
  }
}
</style>
