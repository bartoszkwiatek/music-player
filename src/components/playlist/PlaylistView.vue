<template>
  <div>
    <FontAwesomeIcon icon="fa-reply" />

    <PlaylistList />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import PlaylistList from "./PlaylistList.vue";
export default {
  name: "PlaylistView",
  components: { PlaylistList, FontAwesomeIcon },
  onBack() {
    this.$emit("go-back");
  },
};
</script>

<style scoped></style>
