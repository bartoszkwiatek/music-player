<template>
  <button class="round-button" :style="css" :disabled="disabled">
    <FontAwesomeIcon :icon="icon" :color="color" :size="size" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "RoundButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#60558f", // violet
    },
    backgroundColor: {
      type: String,
      default: "#fff", // white
    },
    size: {
      type: String,
      default: "md",
    },
  },
  components: { FontAwesomeIcon },
  computed: {
    css() {
      return { "--bg-color": this.backgroundColor };
    },
  },
};
</script>

<style lang="scss" scoped>
.round-button {
  position: relative;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);

  &:disabled {
    background-color: gray;
  }

  &:hover:not(:disabled) {
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      border-radius: inherit;
      width: inherit;
      height: inherit;
      background-color: #000000;
      opacity: 0.1;
    }
  }
}
</style>
