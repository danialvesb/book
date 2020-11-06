<template>
  <div class="lib-header">
    <span class="brand">
      <h5>Gestão para reserva de livros</h5>
    </span>
  <div class="navbar">
    <navbar/>
  </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';

export default {
  name: 'lib-header',
  components: {
    navbar,
  },
};
</script>

<style scoped>
  @import url("./styles.css");
</style>
