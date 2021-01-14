<template>
  <nav class="navbar">
    <div class="logo" @click="scrollToSection('#start')">
      <img
        src="../assets/icon.svg"
        alt="tree"
        class="tree"
      >
      <span class="title">
        {{ pageTitle }}
      </span>
    </div>
    <div>
      <span class="menu-entry" @click="scrollToSection('#people')">People</span>
      <span class="menu-entry" @click="scrollToSection('#services')">Services</span>
      <a class="menu-entry" href="https://mail.prenninger.de">Mail</a>
    </div>
  </nav>
</template>

<script>
import { scrollTo } from '@/helpers/scroll';

export default {
  data: () => ({
    pageTitle: 'Prenninger',
  }),
  methods: {
    scrollToSection(sectionId) {
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home', params: { section: sectionId } });
      }
      scrollTo(sectionId);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/defaults.scss";
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: $space-sm 5%;
  font-size: 18px;
  box-sizing: border-box;
  z-index: 5;

  .tree {
    height: 42px;
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .title {
    font-size: 42px;
    font-family: $font-logo;
    font-weight: 700;
  }

  .menu-entry {
    margin: 0 $space-sm;
    cursor: pointer;
  }
}
@media (max-width: 840px) {
  .navbar {
    position: absolute;
    flex-direction: column;
    width: 100vw;
    margin: $space_sm 0;
  }
}
</style>
