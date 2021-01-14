<template>
  <div
    :class="active ? 'people people--active' : 'people'"
    @mouseenter="$emit('selected')"
  >
    <img
      :class="active ? 'image image--active' : 'image'"
      :src="require(`@/assets/images/people/${image}`)"
      alt="member"
    >
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    active: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";
  .people {
    position: relative;
    display: flex;
    align-items: center;
    padding: $space_md;
    width: 400px;
  }

  .name {
    font-size: 32px;
    color: $c-primary-lighter;
    margin: $space_lg;
  }
  .image {
    position: absolute;
    top: -100px;
    left: -100px;
    border-radius: 50%;
    height: 200px;
    transition: box-shadow 0.5s ease-in-out;
    filter: grayscale(1);

    &--active {
      top: -110px;
      left: -110px;
      padding: $space_sm;
      border: 2px solid $c-primary;
    }
  }
  .more {
    position: absolute;
    bottom: 25px;
    right: 0;
    z-index: 2;
  }
</style>
