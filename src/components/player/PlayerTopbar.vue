<template>
  <div class="top-bar">
    <RoundButton
      v-for="[setting, value] in settingArray"
      :key="setting"
      @click.native="toggleSetting(setting)"
      :color="value ? 'white' : 'gray'"
      :icon="settingIcon[setting]"
      backgroundColor="transparent"
      size="xl"
    />
    <RoundButton
      @click.native="openPlaylist"
      icon="fa-bars"
      color="gray"
      backgroundColor="transparent"
      class="menu"
      size="xl"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import RoundButton from "../common/RoundButton.vue";

export default {
  name: "PlayerTopbar",
  components: { RoundButton },
  data() {
    return {
      settingIcon: {
        random: "fa-shuffle",
        repeat: "fa-repeat",
        loop: "fa-rotate-right",
      },
    };
  },
  computed: {
    settings() {
      return this.$store.state.settings;
    },
    settingArray() {
      return Object.entries(this.settings).filter(
        ([setting]) => setting !== "volume"
      );
    },
  },
  methods: {
    ...mapMutations(["setSettings"]),
    openPlaylist() {
      this.$emit("open-playlist");
    },
    toggleSetting(setting) {
      this.setSettings({
        [setting]: !this.settings[setting],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 65px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.settings {
  display: flex;
  align-items: center;
}
.menu {
  position: absolute;
  right: 20px;
}
</style>
