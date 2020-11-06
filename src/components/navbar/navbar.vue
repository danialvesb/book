<template>
  <nav class="nav">
    <ul>
      <li>
        <lib-button value="Solicitar empréstimo" color="success"  @on-click-button="openModal"/>
      </li>
    </ul>
    <modal title="Solicitar empréstimo" :show.sync="showModal" @close="closeModal">
    </modal>
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
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
