<template>
  <select class="select" @change="onChange">
    <option value="" disabled hidden selected>Selecione:</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'lib-select',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.$emit('on-change-select', event.target.value);
    },
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
