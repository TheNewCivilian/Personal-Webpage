<template>
  <div class="lb">
    <div class="lb__card">
      <p class="lb__card__catcher" v-html="catcher" />
      <div class="lb__card__address">
        <span>Contact us!</span>
        <a href="mailto:info@prenninger.de">info@prenninger.de</a>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../data/pageContent.json';

export default {
  data: () => ({
    catcher: '',
    currentPhrase: Math.floor(Math.random() * content.phrases.length),
    phrases: content.phrases,
  }),
  created() {
    this.generateCatcher();
  },
  methods: {
    async generateCatcher() {
      const phrase = this.phrases[this.currentPhrase];

      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      let boldActive = false;

      for (let i = 0; i < phrase.length; i += 1) {
        if (phrase.charAt(i) === '*') {
          if (boldActive) {
            boldActive = false;
            this.catcher += '</b>';
          } else {
            this.catcher += '<b></b>';
            boldActive = true;
          }
        } else {
          let newCatcher = this.catcher;
          if (boldActive) {
            newCatcher = newCatcher.slice(0, newCatcher.length - 4);
            newCatcher += phrase.charAt(i);
            newCatcher += '</b>';
          } else {
            newCatcher += phrase.charAt(i);
          }
          this.catcher = newCatcher;
          // eslint-disable-next-line no-await-in-loop
          await sleep(60 + Math.random() * 20);
        }
      }
      await sleep(5000);
      this.catcher = '';
      this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
      this.generateCatcher();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.lb {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__card {
    position: relative;
    background-color: $c-white-grayish;
    width: 80%;
    height: 50%;
    box-shadow: $bs-primary;
    color: $c-primary-lighter;

    &__catcher {
      position: absolute;
      top: 0;
      left: 0;
      margin: 10vh;
      font-size: 16px;

      @media (min-width: 840px) {
        font-size: 32px;
      }
    }

    &__address {
      position: absolute;
      bottom: 10vh;
      right: 10vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

a {
  text-decoration: none;
  color: #878787;
}
</style>
