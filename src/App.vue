<template>
  <div id="app">
    <main class="player">
      <PlayerView
        v-if="currentWindow === 'player'"
        @open-playlist="open('playlist')"
      />
      <PlaylistView
        v-if="currentWindow === 'playlist'"
        @go-back="open('player')"
      />
    </main>
    <Background />
  </div>
</template>

<script>
import PlaylistView from "./components/playlist/PlaylistView.vue";
import PlayerView from "./components/player/PlayerView.vue";
import Background from "./components/common/Background.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import {
  faBackwardStep,
  faBars,
  faForwardStep,
  faHeart,
  faPause,
  faPlay,
  faRepeat,
  faReply,
  faRotateRight,
  faShareNodes,
  faShuffle,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPause,
  faPlay,
  faForwardStep,
  faBackwardStep,
  faShareNodes,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
  faBars,
  faReply,
  faShuffle,
  faRepeat,
  faRotateRight,
  faHeart,
  faHeartOutline
);

import { mapMutations } from "vuex";
import { songs } from "./assets/songs";
import "./global.scss";

export default {
  data() {
    return {
      currentWindow: "player",
    };
  },
  components: { PlaylistView, PlayerView, Background },
  methods: {
    ...mapMutations(["addSongs"]),
    open(component) {
      this.currentWindow = component;
    },
  },
  created() {
    this.addSongs(songs);
  },
};
</script>

<style scoped>
.player {
  position: relative;
  z-index: 10;
  width: 360px;
  height: 480px;
  background-color: var(--background-color);
  border-radius: 40px;
  overflow: hidden;
}
</style>
