<template>
  <home-template>
      <template v-slot:breadcrumbs>
        <breadcrumb value="Início"></breadcrumb>
      </template>
    <section slot="body"></section>
  </home-template>
</template>

<script>
import homeTemplate from '@/templates/home-template/index.vue';
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';

export default {
  name: 'home',
  components: {
    homeTemplate,
    breadcrumb,
  },
};
</script>

<style scoped>
  @import url('./styles.css');
</style>
