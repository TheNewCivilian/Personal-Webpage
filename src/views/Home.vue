<template>
    <div>
      <Menue />
      <div class="page">
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

<style>
  .page {
    height: 100%;
    scroll-snap-type: y mandatory;
  }
</style>
