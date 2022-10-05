<template>
  <div
    v-if="currentSong"
    class="song"
    :style="{ 'background-image': `url(${imageUrl})` }"
  >
    <div class="song-info">
      <h2>{{ currentSong.artist }}</h2>
      <h3>{{ currentSong.title }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlayerSong",
  computed: {
    ...mapGetters(["currentSong"]),
    imageUrl() {
      return `src/assets/img/${this.currentSong.img}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.song {
  position: relative;
  width: 100%;
  height: 340px;
  background-size: cover;

  .song-info {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 65px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    h2,
    h3 {
      margin: 0;
      padding: 1px;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
    }

    h3 {
      font-size: 14px;
      font-weight: 300;
    }
  }
}
</style>
