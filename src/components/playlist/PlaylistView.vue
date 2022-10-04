<template>
  <div v-if="songs">
    <div v-for="(song, index) in songs" :key="index">{{ song }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { songs } from "../../assets/songs";

export default {
  name: "PlaylistView",
  components: {},
  computed: {
    songs() {
      return this.$store.state.songs;
    },
  },
  methods: {
    ...mapMutations(["addSongs"]),
  },
  created() {
    this.addSongs(songs);
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
