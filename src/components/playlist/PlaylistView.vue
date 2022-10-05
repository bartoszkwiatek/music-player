<template>
  <div>
    <div @click="goBack">
      <FontAwesomeIcon icon="fa-reply" />
    </div>

    <PlaylistList />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import PlaylistList from "./PlaylistList.vue";
export default {
  name: "PlaylistView",
  components: { PlaylistList, FontAwesomeIcon },
  methods: {
    goBack() {
      this.$emit("go-back");
    },
  },
};
</script>

<style scoped></style>
