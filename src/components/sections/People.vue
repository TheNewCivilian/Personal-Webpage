<template>
  <section class="content" id="people">
      <span class="invite">
        This page is intended to serve all Prenningers. If you want to join the circle
        <a href="mailto:info@prenninger.de"> reach out to us!</a>
      </span>
      <div
        class="circle"
      >
        <div class="circle-center">
          <span class="name">{{people[active].name}}</span>
          <p>
            {{people[active].short}}
          </p>
          <a
            class="more b-lite"
            v-if="people[active].more"
            :href="people[active].more"
          >
            More
          </a>
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
      <div class="list">
        <div
          class="person"
          v-for="(person, index) in people"
          :key="`person-${index}`"
        >
          <Card
            :image="person.image"
          />
          <div class="circle-center">
            <span class="name">{{person.name}}</span>
            <p>
              {{person.short}}
            </p>
            <a
              class="more b-lite"
              v-if="people[index].more"
              :href="people[index].more"
            >
              More
            </a>
          </div>
        </div>
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
    openProfile(index) {
      this.$router.push({
        name: 'person',
        params: {
          personId: this.people[index].id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/defaults.scss";
.content {
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  .list {
    margin-bottom: 50px;
    @media (min-width: 900px) {
      display: none;
    }
    .person {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .circle {
    position: relative;
    width: 600px;
    height: 600px;
    margin: 100px 0;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      display: none;
    }

    &-center {
      text-align: left;

      .name {
        font-size: 42px;
      }

      @media (max-width: 900px) {
        .name {
          font-size: 24px;
        }
        text-align: center;
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
.invite {
  position: relative;
  margin: 0 20px;
  @media (max-width: 900px) {
    bottom: 0;
  }
  color: $c-primary-lighter;

  a {
    text-decoration: underline;
  }
}
</style>
