<template>
  <div class="home">
    <PersonCard
      class="home__person-card"
      :retracted="retracted"
    />
    <div
      class="main-content"
      :class="retracted ? 'main-content--pressed' : ''"
    >
      <Skills />
      <LifeLine />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonCard from '@/components/PersonCard.vue';
import Skills from '@/components/Skills.vue';
import LifeLine from '@/components/LifeLine.vue';

export default {
  name: 'Home',
  components: {
    PersonCard,
    Skills,
    LifeLine,
  },
  data() {
    return {
      retracted: false,
    };
  },
};
</script>

<style lang="scss" scoped>

.home {
  height: 100%;
}

.toggle {
  position: absolute;
  bottom: 50px;
}
</style>
