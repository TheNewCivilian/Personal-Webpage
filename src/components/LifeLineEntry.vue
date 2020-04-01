<template>
  <div class="entry">
    <div class="entry__icon" :class="`entry__icon-${entry.type}`">
      <SchoolOutline class="entry__icon-off" v-if="entry.type == 'education'"/>
      <BriefcaseOutline class="entry__icon-off" v-if="entry.type == 'business'"/>
      <Hammer class="entry__icon-off" v-if="entry.type == 'work'"/>
      <AccountGroupOutline class="entry__icon-off" v-if="entry.type == 'social'"/>
    </div>
    <div class="entry__head">
      <div class="entry__head__text">
        <span class="entry__head__text__title">{{entry.title}}</span>
        <span class="entry__head__text__subtitle">{{entry.subtitle}}</span>
      </div>
      <span class="entry__head__date">
        {{entry.date}}
      </span>
    </div>
    <div class="entry__seperator" v-if="entry.details.length > 0" />
    <div
      class="entry__detail"
      v-for="(detail, detailIndex) in entry.details"
      :key="`tl-${index}-de-${detailIndex}`"
    >
      <div class="entry__detail__icon">
        <NewspaperVariantMultipleOutline v-if="detail.type == 'media'"/>
        <Github v-if="detail.type == 'github'"/>
        <Web v-if="detail.type == 'web'"/>
        <FileOutline v-if="detail.type == 'paper'"/>
        <Paperclip v-if="detail.type == 'attachment'"/>
      </div>
      <div class="entry__detail__text">
        <span class="entry__detail__text__title">
          {{detail.text}}
        </span>
        <a>{{detail.linkText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import SchoolOutline from 'vue-material-design-icons/SchoolOutline.vue';
import BriefcaseOutline from 'vue-material-design-icons/BriefcaseOutline.vue';
import Hammer from 'vue-material-design-icons/Hammer.vue';
import AccountGroupOutline from 'vue-material-design-icons/AccountGroupOutline.vue';
import NewspaperVariantMultipleOutline from 'vue-material-design-icons/NewspaperVariantMultipleOutline.vue';
import Github from 'vue-material-design-icons/GithubCircle.vue';
import Web from 'vue-material-design-icons/Web.vue';
import FileOutline from 'vue-material-design-icons/FileOutline.vue';
import Paperclip from 'vue-material-design-icons/Paperclip.vue';

export default {
  props: {
    entry: Object,
  },
  components: {
    SchoolOutline,
    BriefcaseOutline,
    Hammer,
    AccountGroupOutline,
    NewspaperVariantMultipleOutline,
    Github,
    Web,
    FileOutline,
    Paperclip,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .entry {
    position: relative;
    margin-top: $space-md;
    box-shadow: $bs-primary;
    border-radius: $br-md;

    &__icon {
      position: absolute;
      top: -20px;
      left: 20px;
      width: 50px;
      height: 50px;
      font-size: 20px;
      border-radius: 50%;
      background-color: $c-accent;
      color: $c-white;
      display: flex;
      align-content: center;
      justify-content: center;
      box-shadow: $bs-primary;

      &-off {
        margin-bottom: 5px;
      }
    }

    &__head {
      text-align: left;
      display: flex;
      margin-left: 60px;
      padding: $space-md;
      justify-content: space-between;

      &__text {
        display: flex;
        flex-direction: column;

        &__title {
          font-weight: 600;
        }

        &__subtitle {
          color: $c-primary-lighter;
        }
      }

      &__date {
        color: $c-primary-lighter;
      }
    }

    &__seperator {
      border-top: 1px solid $c-primary-lightest;
    }

    &__detail {
      padding: $space-md;
      display: flex;
      align-items: center;

      &__icon {
        font-size: 24px;
        color: $c-primary-lighter;
        padding: 0 12px;
      }

      &__text {
        color: $c-primary-lighter;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 0 10px;

        &__title {
          font-weight: 600;
        }
      }
    }
  }
</style>
