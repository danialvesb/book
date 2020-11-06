<template>
  <input :type="type" :placeholder="placeholder" class="input"/>
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
};
</script>

<style>
@import url("./styles.css");
</style>
