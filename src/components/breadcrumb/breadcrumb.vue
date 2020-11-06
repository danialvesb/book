<template>
  <div class="breadcrumb">
    <span class="circle"></span>
    <span class="text">
      <strong>{{ value }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
