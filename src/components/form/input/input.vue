<template>
  <input :type="type" :placeholder="placeholder" class="input" @change="changeValue"/>
</template>

<script>
export default {
  name: 'lib-input',
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeValue(event) {
      this.$emit('change-input', event.target.value);
    },
  },
};
</script>

<style>
@import url("./styles.css");
</style>
