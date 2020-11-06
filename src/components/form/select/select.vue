<template>
  <select class="select">
    <option value="" disabled hidden selected>Selecione:</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="index"
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
};
</script>

<style scoped>
@import url("./styles.css");
</style>
