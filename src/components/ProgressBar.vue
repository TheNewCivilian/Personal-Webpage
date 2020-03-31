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
    display: flex;
    align-items: center;
    position: relative;
    height: 10px;
    width: 100%;
    border-radius: 5px;
    background-color: $c-primary-lightest;
  }
  .progress {
    height: 10px;
    background-color: $c-accent;
    border-radius: 5px;
  }
</style>
