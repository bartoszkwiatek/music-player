<template>
  <div id="app"></div>
</template>

<script setup>
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
</script>

<style scoped></style>
