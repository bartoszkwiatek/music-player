<template>
  <svg :height="radius * 2" :width="radius * 2">
    <circle
      stroke="white"
      :stroke-dasharray="circumference + ' ' + circumference"
      :stroke-width="stroke"
      fill="white"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
    <circle
      stroke="#d3d5de"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset: strokeDashoffset }"
      :stroke-width="stroke"
      fill="transparent"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script>
export default {
  name: "ProgressRing",
  props: {
    progress: Number,
  },
  data() {
    const stroke = 5;
    const radius = 39;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      stroke,
      radius,
      normalizedRadius,
      circumference,
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference;
    },
  },
};
</script>

<style scoped>
svg {
  transform: rotateZ(-90deg);
}
</style>
