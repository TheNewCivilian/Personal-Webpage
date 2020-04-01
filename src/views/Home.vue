<template>
  <div class="home">
    <PersonCard
      class="home__person"
      :retracted="retracted"
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
        :class="retracted ? 'main-content--pressed' : ''"
      >
        <Skills />
        <LifeLine :timeLineElements="cv"/>
      </div>
    </transition>
  </div>
</template>

<script>
import PersonCard from '@/components/PersonCard.vue';
import Skills from '@/components/Skills.vue';
import LifeLine from '@/components/LifeLine.vue';
import ArrowDown from 'vue-material-design-icons/ArrowDown.vue';

const { cv } = require('../assets/configuration.json');

export default {
  name: 'Home',
  components: {
    PersonCard,
    Skills,
    LifeLine,
    ArrowDown,
  },
  data() {
    return {
      retracted: false,
      cv,
    };
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
    }

    &__content {
      display: flex;
      z-index: 2;
      justify-content: center;
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
    bottom: 20%;
    color: $c-primary;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
