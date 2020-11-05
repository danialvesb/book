<template>
  <home-template>
    <div slot="header"></div>
    <div slot="body"></div>
  </home-template>
</template>

<script>
import homeTemplate from '@/templates/home-template/index.vue';

export default {
  name: 'home',
  components: {
    homeTemplate,
  },
};
</script>

<style scoped>
  @import url('./styles.css');
</style>
