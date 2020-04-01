<template>
  <div class="life-line">
    <div v-for="(entry, index) in timeLineElements" :key="`tl-${index}`">
      <LifeLineEntry :entry="entry" />
      <div v-if="index != timeLineElements.length - 1" class="life-line__seperator"/>
    </div>
  </div>
</template>

<script>
import LifeLineEntry from '@/components/LifeLineEntry.vue';

export default {
  props: {
    timeLineElements: Array,
  },
  components: {
    LifeLineEntry,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .life-line {
    position: relative;
    width: 538px;
    margin-left: $space-md;
    min-height: min-content;
    margin-bottom: 100px;

    &__seperator {
      margin-left: 42px;
      width: 5px;
      height: 50px;
      background-color: $c-primary-lighter;
    }
  }
</style>
