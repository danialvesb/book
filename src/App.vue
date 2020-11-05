<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style scoped>
@import url('./assets/css/base.css');
#app {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
