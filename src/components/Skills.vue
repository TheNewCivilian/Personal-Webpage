<template>
  <div class="skills">
    <h3 class="skills__title">Skills</h3>
    <div>
      <div class="skills__item" v-for="(skill, index) in skills" :key="`skill-${index}`">
        <span class="skills__item__title">
          {{skill.title}}
        </span>
        <span class="skills__item__subtitle" v-if="skill.examples.length > 0">
          ({{skill.examples.join(', ')}})
        </span>
        <ProgressBar :progress="skill.value"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';

const { skills } = require('../assets/configuration.json');

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      skills,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.skills {
  box-shadow: $bs-primary;
  padding: 20px;
  border-radius: $br-md;
  text-align: left;
  height: fit-content;
  margin: 20px 10px;

  @media (min-width: 840px) {
    flex-direction: column;
    margin: 0;
    width: 250px;
  }

  &__title {
    font-size: 24px;
    margin: 10px 0;
  }

  &__item {
    padding-top: 5px;
    display: flex;
    flex-direction: column;

    &__title {
      padding: 5px 0;
      font-weight: 600;
    }

    &__subtitle {
      padding-bottom: 5px;
      font-size: 12px;
      color: $c-primary-lighter;
    }
  }
}
</style>
