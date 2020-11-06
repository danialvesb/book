<template>
  <nav class="nav">
    <ul>
      <li>
        <lib-button value="Solicitar empréstimo" color="success"  @on-click-button="openModal"/>
      </li>
    </ul>
    <modal title="Solicitar empréstimo"></modal>
  </nav>
</template>

<script>
import libButton from '@/components/button/button.vue';
import modal from '@/components/modal/modal.vue';

export default {
  name: 'navbar',
  components: {
    libButton,
    modal,
  },
  methods: {
    openModal(event) {
      this.$emit('toggle-modal', event);
    },
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
