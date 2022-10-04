<template>
  <div style="display: flex">
    <FontAwesomeIcon icon="fa-volume-high" />
    <FontAwesomeIcon icon="fa-volume-low" />
    <FontAwesomeIcon icon="fa-volume-off" />
    <input type="range" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "PlayerVolume",
  components: { FontAwesomeIcon },
  computed: {
    volume() {
      return this.$store.state.settings.volume;
    },
  },
  methods: {
    ...mapMutations(["setSettings"]),
  },
};
</script>

<style scoped></style>
