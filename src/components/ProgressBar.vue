<template>
  <div class="bar">
    <div class="progress" :style="{width: progress + '%'}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: Number,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .bar {
    padding: 3px;
    display: flex;
    align-items: center;
    position: relative;
    height: 16px;
    width: 100%;
    border-radius: 6px;
    background-color: $c-primary-lightest;
  }
  .progress {
    height: 16px;
    background-color: $c-accent;
    border-radius: 6px;
  }
</style>
