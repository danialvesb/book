<template>
  <home-template>
    <section slot="body"></section>
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
