<template>
  <section class="content" id="start">
      <div
        class="container"
      >
        <span class="description">
          {{ configuration.start.pretitle }}
        </span>

        <h1 class="title">
          {{ configuration.start.title }}
        </h1>
        <p class="description">
          {{ configuration.start.description }}
        </p>
        <img
          src="../../assets/arrow.svg"
          alt="arrow-down"
          class="chevron-down"
        >
      </div>
  </section>
</template>

<script>
import configuration from '@/data/pageContent.json';

export default {
  data: () => ({
    configuration,
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: start;

  .tree {
    height: 50%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    text-align: left;
    max-width: 30%;
    height: 25%;
    margin-left: -2%;

    .description {
      color: $c-primary-lighter;
      font-size: 24px;
    }

    .title {
      font-size: 42px;
      font-weight: 600;
      margin: 0;
    }

    .chevron-down {
      width: 50px;
      animation: move 1s infinite;
    }

    @keyframes move {
      0%   {margin-top: 0;}
      25%  {margin-top: 0;}
      50%  {margin-top:  20px;}
      100% {margin-top: 0;}
    }
  }
}
</style>
