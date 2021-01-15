<template>
  <div class="person-container" :class="elevated ? 'person-container--retracted' : ''">
    <div class="person-card" :class="elevated ? 'person-card--retracted' : ''">
      <div class="person-card__info">
        <h1>{{configuration.name}}</h1>
        <h3>{{configuration.subtitle}}</h3>
        <div class="person-card__container">
          <span class="person-card__row">
            <MapMarkerOutline class="person-card__icon" /> {{configuration.location}}
          </span>
          <a :href="`mailto:${configuration.email}`" class="person-card__row">
            <EmailOutline class="person-card__icon" /> {{configuration.email}}
          </a>
          <a href="https://github.com/TheNewCivilian" class="person-card__row">
            <Github class="person-card__icon" /> TheNewCivilian
          </a>
        </div>
      </div>
      <ProfilePicture :elevated="!elevated"/>
    </div>
  </div>
</template>

<script>
import MapMarkerOutline from 'vue-material-design-icons/MapMarker.vue';
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue';
import Github from 'vue-material-design-icons/GithubCircle.vue';
import users from '@/helpers/users';
import ProfilePicture from './ProfilePicture.vue';

export default {
  components: {
    ProfilePicture,
    MapMarkerOutline,
    EmailOutline,
    Github,
  },
  data() {
    return {
      configuration: users[this.$route.params.personId],
    };
  },
  computed: {
    elevated() {
      return this.$store.getters.detailsShown;
    },
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
        height: 550px;

        @media (min-width: 700px) {
           height: 310px;
        }
      }
    }

    &-card {
      border-radius: 8px;
      width: 90%;
      max-width: 800px;
      transition: box-shadow .5s;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: $space-lg;
      border: 1px solid $c-primary-lightest;
      flex-direction: column;

      @media (min-width: 700px) {
        flex-direction: row;
      }

      &--retracted {
        border: 1px solid $c-primary-lightest;
        // box-shadow: $bs-primary;

        &:hover {
          box-shadow: $bs-primary;
        }
      }

      &__info {
        padding: $space-md;
        text-align: left;
      }

      &__container {
        display: flex;
        flex-direction: column;

        @media (min-width: 840px) {
          flex-direction: row;
        }
      }

      &__row {
        display: flex;
        align-items: center;
        padding-right: $space-md;
        text-decoration: none;
        color: $c-primary;
      }

      &__icon {
        font-size: 24px;
        padding-right: $space-sm;
        margin-bottom: $space-sm;
      }
    }
  }
</style>
