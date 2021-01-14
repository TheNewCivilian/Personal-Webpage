<template>
  <div
    class="profile-picture"
    :class="elevated?'profile-picture--elevated':''"
  >
    <img
      class="profile-picture__image"
      src="https://avatars2.githubusercontent.com/u/24456478?s=460&u=0fb2206048e54831e520bc1a108bdb71b697a837&v=4"
    />
  </div>
</template>

<script>
export default {
  props: {
    elevated: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.profile-picture {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 220px;
  width: 220px;
  border: 1px solid $c-primary-lightest;
  transition: box-shadow 3;

  &--elevated {
    border: 0;
    box-shadow: $bs-primary;
  }

  &__image {
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
}
</style>
