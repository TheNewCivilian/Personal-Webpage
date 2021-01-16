<template>
    <div>
      <div class="page">
        <Menue />
        <Start />
        <People />
        <Services />
      </div>
    </div>
</template>

<script>
import Menue from '../components/Menue.vue';
import People from '../components/sections/People.vue';
import Services from '../components/sections/Services.vue';
import Start from '../components/sections/Start.vue';

export default {
  components: {
    Menue,
    Start,
    People,
    Services,
  },
};
</script>

<style lang="scss">
  .page {
    height: 100vh;
    scroll-snap-type: none;
    overflow-y: scroll;
    @media (min-height: 900px) {
     scroll-snap-type: y mandatory;
    }
  }
</style>
