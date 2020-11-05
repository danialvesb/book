<template>
  <div class="content">
    <section class="header">
      <slot name="header"></slot>
    </section>
    <section class="body">
      <slot name="body"></slot>
    </section>
    <section class="fotter">
      <slot name="fotter"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home-template',
};
</script>

<style>
@import url("./styles.css");
</style>
