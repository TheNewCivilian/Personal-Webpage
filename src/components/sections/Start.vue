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
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 900px) {
    height: calc(100vh - 50px);
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    text-align: left;
    max-width: 30%;
    height: fit-content;

    .description {
      color: $c-primary-lighter;
      font-size: $font-lg;
    }

    .title {
      font-size: $font-slg;
      font-weight: 600;
      margin: 0;
    }

    .chevron-down {
      position: absolute;
      bottom: -20px;
      width: 50px;
      animation: move 1s infinite;
    }

    @keyframes move {
      0%   {bottom: -20px;}
      25%  {bottom: -20px;}
      50%  {bottom: -40px;}
      100% {bottom: -20px;}
    }
  }

  @media (max-width: 840px) {
    .container {
       max-width: 60%;
    }
  }
}
</style>
