<template>
  <a class="b-text more" :href="link">
      Visit Service
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></svg>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";
.more {
  width: fit-content;
  font-size: 16px;
  font-weight: 400;
  color: $c-primary;
  text-decoration: underline;
}
.arrow {
  margin: 0;
  transition: margin-left 0.5s ease-in-out;

  :hover > & {
    margin-left: 5px;
  }
}
</style>
