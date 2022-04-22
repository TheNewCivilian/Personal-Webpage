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
      {{configuration.shoutOut.contact}}
    </button>
  </div>
</template>

<script>
import users from '@/helpers/users';

export default {
  data() {
    return {
      configuration: users[this.$route.params.personId],
    };
  },
  methods: {
    sendMail() {
      const mailAdress = this.configuration.email;
      window.location.href = 'mailto:' + mailAdress; // eslint-disable-line 
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .shout-out {
    // box-shadow: $bs-primary;
    border: 1px solid $c-primary-lightest;
    transition: box-shadow 0.5s ease-in-out;
    padding: 30px;
    border-radius: $br-md;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 20px 10px;

    &:hover {
      box-shadow: $bs-primary;
    }

    @media (min-width: 840px) {
      flex-direction: column;
      margin-left: $space-md;
      max-width: 495px;
      margin: 0;
      margin-right: 15px;
    }


    @media (min-width: 1600px) {
      position: fixed;
      flex-direction: column;
      max-width: 395px;
      margin: $space-lg 15px 0;
      height: fit-content;
      left: calc(50% - 780px);
    }

    &__title {
      font-size: $font-lg;
      text-align: left;
    }

    &__description {
      color: $c-primary-lighter;
      text-align: left;
      font-size: $font-md;
    }

    &__button {
      font-family: 'Roboto', sans-serif;
      font-size: $font-md;
      border: 0;
      color: $c-white;
      width: fit-content;
      margin: 0 0 0 auto;
      box-shadow: none;
      border-radius: 50px;
      background-color: $c-accent;
      padding: $space-sm $space-md;
      transition: background-color 1s;
      transition: box-shadow 1s;
      cursor: pointer;

      &:hover {
        background-color: lighten($c-accent,1);
        box-shadow: $bs-primary;
      }
    }
  }
</style>
