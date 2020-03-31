<template>
  <div class="person-container" :class="retracted ? 'person-container--retracted' : ''">
    <div class="person-card" :class="retracted ? 'person-card--retracted' : ''">
      <div class="person-card__info">
        <h1>{{name}}</h1>
        <h3>{{subtitle}}</h3>
        <div class="person-card__container">
          <span class="person-card__row">
            <MapMarkerOutline class="person-card__icon" /> Augsburg
          </span>
          <a class="person-card__row">
            <EmailOutline class="person-card__icon" /> david.prenninger@gmx.de
          </a>
          <span class="person-card__row">
            <Github class="person-card__icon" /> TheNewCivilian
          </span>
        </div>
      </div>
      <ProfilePicture :elevated="!retracted"/>
    </div>
    <button class="b-accent" >Show More</button>
  </div>
</template>

<script>
import MapMarkerOutline from 'vue-material-design-icons/MapMarker.vue';
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue';
import Github from 'vue-material-design-icons/GithubCircle.vue';
import ProfilePicture from './ProfilePicture.vue';

const { name, subtitle } = require('../assets/configuration.json');

export default {
  props: {
    retracted: Boolean,
  },
  components: {
    ProfilePicture,
    MapMarkerOutline,
    EmailOutline,
    Github,
  },
  data() {
    return {
      name,
      subtitle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";

  .person {
    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      transition: height 3s;

      &--retracted {
        height: 310px;
      }
    }

    &-card {
      border-radius: 8px;
      width: 90%;
      max-width: fit-content;
      transition: box-shadow .5s;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: $space-lg;
      border: 1px solid $c-primary-lightest;

      &--retracted {
        box-shadow: $bs-primary;
      }

      &__info {
        padding: $space-md;
        text-align: left;
      }

      &__container {
        display: flex;
      }

      &__row {
        display: flex;
        align-items: center;
        padding-right: $space-md;
      }

      &__icon {
        font-size: 24px;
        padding-right: $space-sm;
        margin-bottom: $space-sm;
      }
    }
  }
</style>
