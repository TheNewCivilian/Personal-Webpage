<template>
  <section class="content"  id="services">
    <h2 class="title">
      Services
    </h2>
    <div class="service-list">
      <ServiceContainer
        v-for=" (service, index) in configuration.services"
        :key="`service-${index}`"
        :service="service"
      />
    </div>
  </section>
</template>

<script>
import configuration from '@/data/pageContent.json';
import ServiceContainer from './Services/ServiceContainer.vue';

export default {
  components: { ServiceContainer },
  data: () => ({
    configuration,
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";
.content {
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 0 30px;
  @media (max-width: 840px) {
    flex-direction: column;
    height: fit-content;
    padding: 0 0;
  }
}

.title {
  font-size: 100px;
  color: lighten($c-primary-lightest, 30);
  @media (max-width: 840px) {
    font-size: 84px;
  }
}

</style>
