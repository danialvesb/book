<template>
  <div class="content">
    <section class="header">
      <lib-header></lib-header>
    </section>
    <section class="breadcrumbs">
        <slot name="breadcrumbs"></slot>
    </section>
    <section class="body">
      <slot name="body"></slot>
    </section>
    <section class="fotter">
      <slot name="fotter"></slot>
    </section>
  </div>
</template>

<script>
import libHeader from '@/components/header/header.vue';

export default {
  name: 'home-template',
  components: {
    libHeader,
  },
};
</script>

<style scoped>
  @import url("./styles.css");
</style>
