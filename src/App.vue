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
    height: 100%;
    font-family: 'Cantarell', sans-serif;
  }
</style>
