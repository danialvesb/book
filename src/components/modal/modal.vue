<template>
  <div class="modal" v-if="show">
    <div class="header-modal">
      <div class="header-custom">
        <span class="title-modal">
          <strong>{{ title }}</strong>
        </span>
      </div>
      <div class="options-modal">
        <lib-button
          value="Fechar"
          color="danger"
          eventCustom="toggle-modal"
          @toggle-modal="toggleModal"
        />
      </div>
      <slot name="header"></slot>
    </div>
    <div class="body-modal"></div>
  </div>
</template>

<script>
import libButton from '@/components/button/button.vue';

export default {
  name: 'modal',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  watch: {
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
      // this.$destroy();
    },
  },
  components: {
    libButton,
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
