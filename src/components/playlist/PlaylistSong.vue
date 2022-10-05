<template>
  <div v-if="song" class="song-container">
    <div class="song-info">
      <p>{{ song.duration }} | {{ song.artist }}</p>
      <h3>{{ song.title }}</h3>
    </div>
    <div class="buttons">
      <RoundButton
        class="button"
        @click.stop.native="share"
        icon="fa-share-nodes"
        backgroundColor="transparent"
      />
      <RoundButton
        class="button"
        @click.stop.native="toggleFavourite"
        :icon="heartProps.icon"
        :color="heartProps.color"
        backgroundColor="transparent"
      />
    </div>
  </div>
</template>

<script>
import RoundButton from "../common/RoundButton.vue";
export default {
  name: "PlaylistSong",
  props: {
    song: Object,
  },
  components: { RoundButton },
  computed: {
    heartProps() {
      if (this.song.favourite) {
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
    toggleFavourite() {
      return this.$emit("toggle-favourite");
    },
    share() {
      navigator.clipboard.writeText(`${this.song.artist}: ${this.song.title}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  margin-right: 15px;
  border-bottom: 1px solid #b4b6bb9e;
  &:hover {
    cursor: pointer;
    background-color: #b4b6bb9e;
  }

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 300;
    color: var(--gray-color);
  }

  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }
  .buttons {
    display: flex;

    .button {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
