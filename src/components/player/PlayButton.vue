<template>
  <div class="play">
    <ProgressRing :progress="progress" />
    <RoundButton
      @click.native="togglePlay"
      :icon="icon"
      color="#fff"
      backgroundColor="#60558f"
      class="big-button"
      size="2xl"
    />
  </div>
</template>

<script>
import RoundButton from "../common/RoundButton.vue";
import ProgressRing from "../common/ProgressRing.vue";
export default {
  name: "PlayButton",
  components: { RoundButton, ProgressRing },
  data() {
    return {
      play: true,
      progress: 33,
    };
  },
  computed: {
    icon() {
      return this.play ? "fa-pause" : "fa-play";
    },
  },
  methods: {
    togglePlay() {
      this.play = !this.play;
    },
  },
};
</script>

<style lang="scss" scoped>
.play {
  position: relative;
}
.big-button {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 50px;
  height: 50px;
}
</style>
