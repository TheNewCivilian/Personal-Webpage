<template>
  <div class="content"  id="services">
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
  </div>
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  scroll-snap-align: start;
  padding: 0 30px;
}

.title {
  font-size: 100px;
  color: $c-primary-lightest;
}

.service-list {
}
</style>
