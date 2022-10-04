<template>
  <div v-if="currentSong">
    <h2>{{ currentSong.title }}</h2>
    <h3>{{ currentSong.artist }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlayerSong",
  computed: {
    ...mapGetters(["currentSong"]),
  },
};
</script>

<style scoped></style>
