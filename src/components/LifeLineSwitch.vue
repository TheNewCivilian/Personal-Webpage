<template>
  <div class="switch" @click="toggle">
      <div class="switch__slider" :class="left?'':'switch__slider--left'">
      </div>
      <span class="switch__option" :class="left?'switch__option--selected':''">
        Vita
      </span>
      <span
        class="switch__option switch__option--right"
        :class="left?'':'switch__option--selected'"
      >
        Projects
      </span>
  </div>
</template>

<script>
export default {
  props: {
    switchOptions: Array,
  },
  data() {
    return {
      left: true,
    };
  },
  methods: {
    toggle() {
      this.left = !this.left;
      this.$emit('input', this.switchOptions[this.left ? 0 : 1]);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  $slider-option-width: 100px;
  $slider-width: 200px;
  $slider-height: 40px;

  .switch {
    position: relative;
    display: flex;
    background-color: $c-primary-lightest;
    width: $slider-width;
    border-radius: 20px;
    height: $slider-height;
    margin: 0 auto;
    cursor: pointer;

    &__slider {
      position: absolute;
      height: $slider-height;
      width: $slider-option-width;
      background-color: $c-accent;
      border-radius: 20px;
      left: 0px;
      transition: left 1s;

      &--left {
        left: $slider-option-width;
      }
    }

    &__option {
      position: absolute;
      z-index: 3;
      display: block;
      width: $slider-option-width;
      top: 10px;
      transition: color 1s;

      &--selected {
        color: #fff;
        font-weight: 600;
      }

      &--right {
        left: $slider-option-width;
      }
    }
  }
</style>
