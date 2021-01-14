<template>
  <section class="content" id="people">
      <h2 class="title">
      </h2>
      <div
        class="circle"
      >
        <div class="circle-center">
          <span class="name">{{people[active].name}}</span>
          <p>
            {{people[active].short}}
          </p>
          <button
            class="more b-lite"
            @click="openProfile"
          >
            More
          </button>
        </div>
        <Card
          class="person person--pos1"
          :image="people[0].image"
          :active="active == 0"
          @selected="setActive(0)"
        />
        <Card
          class="person person--pos2"
          :image="people[1].image"
          :active="active == 1"
          @selected="setActive(1)"
        />
        <Card
          class="person person--pos3"
          :image="people[2].image"
          :active="active == 2"
          @selected="setActive(2)"
        />
        <Card
          class="person person--pos4"
          :image="people[3].image"
          :active="active == 3"
          @selected="setActive(3)"
        />
      </div>
  </section>
</template>

<script>
import configuration from '@/data/pageContent.json';
import Card from './People/Card.vue';

export default {
  components: { Card },
  data: () => ({
    people: configuration.people,
    active: 0,
    loopTimeout: null,
  }),
  mounted() {
    this.loop();
  },
  methods: {
    setActive(newActive) {
      this.activate(newActive);
      clearTimeout(this.loopTimeout);
    },
    activate(newActive) {
      this.active = newActive;
    },
    loop() {
      this.loopTimeout = setTimeout(() => {
        this.setActive((this.active + 1) % 4);
        this.loop();
      }, 3000);
    },
    openProfile() {
      this.$router.push({
        name: 'person',
        params: {
          personId: this.people[this.active].id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: start;

  .title {
      font-size: 42px;
      font-weight: 600;
  }

  .circle {
    position: relative;
    width: 600px;
    height: 600px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-center {
      text-align: left;

      .name {
        font-size: 42px;
      }
    }

    .person {
      position: absolute;
      width: 80px;
      height: 80px;
      transition: transform 0.7s linear;
      top: -40px;
      left: 110px;

      &--pos1 {
        top: 50px;
        left: 50px;
      }
      &--pos2 {
        top: 50px;
        left: 500px;
      }
      &--pos3 {
        top: 520px;
        left: 50px;
      }
      &--pos4 {
        top: 520px;
        left: 500px;
      }
    }
  }
}
.accent {
  color: $c-accent;
}
</style>
