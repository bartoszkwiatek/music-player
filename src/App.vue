<template>
  <div id="app">
    <PlayerView />
    <PlaylistView />
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

export default {
  components: { PlaylistView, PlayerView, Background },
  methods: {
    ...mapMutations(["addSongs"]),
  },
  created() {
    this.addSongs(songs);
  },
};
</script>

<style scoped></style>
