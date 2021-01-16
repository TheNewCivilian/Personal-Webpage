<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

  html, body, #app {
    text-align: center;
    color: $c-primary;
    background-color: $c-white;
    font-family: $font;
    margin: 0;
    height: 100%;
    scroll-behavior: smooth;
  }
  @media (max-width: 450px) {
    html {
      font-size: 12px;
    }
  }
</style>
