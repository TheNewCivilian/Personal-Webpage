<template>
  <div class="life-line">
    <LifeLineSwitch :switchOptions="switchOptions" @input="selectOption"/>
    <div
      class="life-line__timeline"
      :class="fadeOut?'life-line__timeline--fade-out':'life-line__timeline--fade-in'"
    >
      <div
        v-for="(entry, index) in configuration[selectedOption]"
        :key="`tl-${index}`"
        class="life-line__element"
      >
        <LifeLineEntry :entry="entry" />
        <div v-if="index != configuration[selectedOption].length - 1" class="life-line__seperator"/>
      </div>
    </div>
  </div>
</template>

<script>
import LifeLineEntry from '@/components/Person/LifeLineEntry.vue';
import LifeLineSwitch from '@/components/Person/LifeLineSwitch.vue';
import users from '@/helpers/users';

export default {
  data() {
    return {
      switchOptions: ['cv', 'projects'],
      selectedOption: 'cv',
      configuration: users[this.$route.params.personId],
      fadeOut: false,
    };
  },
  components: {
    LifeLineEntry,
    LifeLineSwitch,
  },
  methods: {
    selectOption(value) {
      this.fadeOut = true;

      setTimeout(() => {
        this.fadeOut = false;
        this.selectedOption = value;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .life-line {
    position: relative;
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    margin-top: 50px;

    @media (min-width: 1600px) {
      flex-grow: 1;
      margin: 20px 20px;
    }

    &__timeline {
      padding: 20px;

      &--fade-in {
        animation: fadein .8s;
      }

      &--fade-out {
        animation: fadeout .5s;
      }
    }

    &__seperator {
      margin-left: 45px;
      width: 2px;
      height: 50px;
      background-color: $c-primary-lightest;
    }
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
</style>
