<template>
  <div>
    <div v-for="(entry, index) in timeLineElements" :key="`tl-${index}`">
      <div class="entry__icon" :class="`entry__icon-${entry.type}`">
        <SchoolOutline v-if="entry.type == 'education'"/>
        <BriefcaseOutline v-if="entry.type == 'business'"/>
        <Hammer v-if="entry.type == 'work'"/>
        <AccountGroupOutline v-if="entry.type == 'social'"/>
      </div>
      <div>
        <span>{{entry.title}}</span>
        <span>{{entry.subtitle}}</span>
      </div>
      <span>{{entry.date}}</span>
      <hr v-if="entry.details.length > 0">
      <div v-for="(detail, detailIndex) in entry.details" :key="`tl-${index}-de-${detailIndex}`">
        <div>
          <NewspaperVariantMultipleOutline v-if="detail.type == 'media'"/>
          <Github v-if="detail.type == 'github'"/>
          <Web v-if="detail.type == 'web'"/>
          <FileOutline v-if="detail.type == 'paper'"/>
          <Paperclip v-if="detail.type == 'attachment'"/>
        </div>
        <span>{{detail.text}}</span>
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
    timeLineElements: Object,
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

</style>
