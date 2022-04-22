<template>
  <div
    class="home"
    @wheel="toggleDetails"
    @swipe="toggleDetails"
    ref="rootDiv"
  >
    <PersonCard
      class="home__person"
    />
    <transition name="fade">
      <button v-if="!detailsShown" class="toggle" @click="toggleDetails">
        <ArrowDown />
      </button>
    </transition>
    <transition name="fade">
      <div
        v-if="detailsShown"
        class="home__content"
      >
        <div class="home__content__mobile">
          <div class="home__content__side">
            <ShoutOut />
            <Skills />
          </div>
          <LifeLine />
        </div>
        <div class="home__content__desktop">
          <ShoutOut />
          <LifeLine />
          <Skills />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import PersonCard from '@/components/Person/PersonCard.vue';
import Skills from '@/components/Person/Skills.vue';
import LifeLine from '@/components/Person/LifeLine.vue';
import ShoutOut from '@/components/Person/ShoutOut.vue';
import ArrowDown from 'vue-material-design-icons/ArrowDown.vue';

export default {
  name: 'Home',
  components: {
    PersonCard,
    Skills,
    LifeLine,
    ArrowDown,
    ShoutOut,
  },
  computed: {
    detailsShown() {
      return this.$store.getters.detailsShown;
    },
  },
  methods: {
    toggleDetails() {
      this.$store.dispatch('showDetails');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";

  .home {
    height: 100%;

    &__person {
      z-index: 2;
      @media (max-width: 1500px) {
        margin-top: 100px;
      }
    }

    &__content {
      z-index: 2;
      height: fit-content;

      &__side {
        display: flex;
        justify-content: center;
        flex-direction: column;

        @media (min-width: 840px) {
          flex-direction: row;
        }
      }

      &__mobile {
        display: none;
        @media (max-width: 1600px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
        }
      }

      &__desktop {
        display: flex;
        justify-content: center;
        @media (max-width: 1600px) {
          display: none;
        }
      }
    }
  }


  .toggle {
    width: 60px;
    height: 60px;
    border: 1px solid $c-primary-lightest;
    background-color: transparent;
    border-radius: 50%;
    font-size: 40px;
    position: absolute;
    left: calc(50% - 30px);
    bottom: 10%;
    color: $c-primary;
    padding: 0;
    cursor: pointer;

    @media (min-height: 800px) {
      bottom: 20%;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
