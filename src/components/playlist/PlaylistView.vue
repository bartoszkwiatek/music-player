<template>
  <div>
    <div class="header">
      <RoundButton class="back-button" icon="fa-reply" @click.native="goBack" />
      <h2 class="playlist-title">Playlist</h2>
    </div>

    <PlaylistList @go-back="goBack" />
  </div>
</template>

<script>
import PlaylistList from "./PlaylistList.vue";
import RoundButton from "../common/RoundButton.vue";
export default {
  name: "PlaylistView",
  components: { PlaylistList, RoundButton },
  methods: {
    goBack() {
      this.$emit("go-back");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 65px;
  .back-button {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
  }
  .playlist-title {
    margin: 0;
    text-align: center;
    line-height: 70px;
    font-size: 16px;
    color: var(--primary-color);
  }
}
</style>
