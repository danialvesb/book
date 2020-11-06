<template>
  <div class="modal" v-if="showLocal" :style="[{width: size.width}, {height: size.height}]">
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
          @toggle-modal="closeModal"
        />
      </div>
      <slot name="header"></slot>
    </div>
    <div class="body-modal">
      <slot name="body"></slot>
    </div>
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
    show: {
      type: Boolean,
      default: false,
      required: false,
    },
    size: {
      type: Object,
      default: () => ({
        width: '80%',
        height: '500px',
      }),
      required: false,
    },
  },
  watch: {
    show(newValue) {
      this.showLocal = newValue;
    },
  },
  data() {
    return {
      showLocal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.showLocal = false;
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
