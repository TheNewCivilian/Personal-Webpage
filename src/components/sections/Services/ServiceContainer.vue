<template>
  <div class="container">
      <slot />
      <span class="title">{{service.title}}</span>
      <span class="description">{{service.description}}</span>
      <MoreButton :link="service.link"/>
  </div>
</template>

<script>
import MoreButton from './MoreButton.vue';

export default {
  components: { MoreButton },
  props: ['service'],
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";
.container {
  box-shadow: $bs-primary;
  border-radius: $br-md;
  padding: $space_md;
  margin: $space_lg;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80%;

  .title {
    font-size: 24px;
    font-weight: 700;
  }
  .description {
    margin: $space-sm 0;
  }
}
</style>
