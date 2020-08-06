<template>
  <div class="shout-out">
    <span class="shout-out__title">
      {{configuration.shoutOut.title}}
    </span>
    <p class="shout-out__description">
      {{configuration.shoutOut.description}}
    </p>
    <button
      class="shout-out__button"
      @click="sendMail"
    >
      Contact me!
    </button>
  </div>
</template>

<script>
const configuration = require('../assets/configuration.json');

export default {
  data() {
    return {
      configuration,
    };
  },
  methods: {
    sendMail() {
      const mailAdress = configuration.email;
      window.location.href = 'mailto' + mailAdress; // eslint-disable-line 
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .shout-out {
    box-shadow: $bs-primary;
    padding: 30px;
    border-radius: $br-md;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 20px 10px;

    @media (min-width: 840px) {
      flex-direction: column;
      margin-left: $space-md;
      max-width: 495px;
      margin: 0;
      margin-right: 15px;
    }

    &__title {
      font-size: 30px;
      text-align: left;
    }

    &__description {
      color: $c-primary-lighter;
      text-align: left;
      font-size: 20px;
    }

    &__button {
      font-family: 'Roboto', sans-serif;
      border: 1px solid $c-accent;
      color: $c-white;
      font-weight: 600;
      width: fit-content;
      margin: 0 0 0 auto;
      box-shadow: $bs-primary;
      border-radius: $br-md;
      background-color: $c-accent;
      padding: $space-sm $space-md;
      transition: background-color 1s;
      transition: box-shadow 1s;
      cursor: pointer;

      &:hover {
        background-color: lighten($c-accent,1);
        box-shadow: none;
      }
    }
  }
</style>
