<template>
  <div>
    <div class="background blur" />
    <img
      v-if="image"
      :src="`src/assets/img/${image}`"
      alt="background-image"
      class="background"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BackgroundComponent",
  computed: {
    ...mapGetters(["currentSong"]),
    image() {
      return this.currentSong.img;
    },
  },
};
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.blur {
  z-index: 1;
  backdrop-filter: blur(75px);
}
</style>
