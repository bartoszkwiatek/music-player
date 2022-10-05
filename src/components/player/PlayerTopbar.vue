<template>
  <div style="display: flex">
    <FontAwesomeIcon icon="fa-shuffle" />
    <FontAwesomeIcon icon="fa-repeat" />
    <FontAwesomeIcon icon="fa-rotate-right" />
    <div @click="openPlaylist">
      <FontAwesomeIcon icon="fa-bars" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "PlayerTopbar",
  components: { FontAwesomeIcon },
  computed: {
    settings() {
      return this.$store.state.settings;
    },
  },
  methods: {
    ...mapMutations(["setSettings"]),
    openPlaylist() {
      this.$emit("open-playlist");
    },
  },
};
</script>

<style scoped></style>
