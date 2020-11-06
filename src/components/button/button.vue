<template>
    <button :class="[color, baseStyle]" @click="onClickButton">
      {{ value }}
    </button>
</template>

<script>
export default {
  name: 'lib-button',
  props: {
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    eventCustom: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      baseStyle: 'button',
    };
  },
  methods: {
    onClickButton(event) {
      if (this.eventCustom) {
        this.$emit(this.eventCustom, event);
      } else {
        this.$emit('on-click-button', event);
      }
    },
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
