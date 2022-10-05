<template>
  <RangeSlider class="" v-model="volume" />
</template>

<script>
import { mapMutations } from "vuex";
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";

export default {
  name: "PlayerVolume",
  components: { RangeSlider },
  computed: {
    volume: {
      get() {
        return this.$store.state.settings.volume;
      },
      set(value) {
        this.setSettings({ volume: value });
      },
    },
  },
  methods: {
    ...mapMutations(["setSettings"]),
  },
};
</script>

<style lang="scss" scoped>
::v-deep.range-slider {
  width: 100%;
  padding: 0;

  .range-slider-inner {
    .range-slider-fill {
      border-radius: 0;
      background-color: white;
      height: 8px;
    }

    .range-slider-rail {
      border-radius: 0;
      background-color: var(--red-color);
      height: 8px;
    }

    .range-slider-knob {
      width: 22px;
      height: 22px;
      box-shadow: none;
      border: none;
      background-image: url("../../assets/icons/volume-high-solid.svg");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 60%;
    }
  }
}
</style>
