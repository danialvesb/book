<template>
  <home-template>
    <template slot="breadcrumbs">
      <breadcrumb value="Início"></breadcrumb>
    </template>
    <template slot="body">
      <div class="body-content">
        <card v-for="(item, index) in getReserves" :data="item" :key="index"/>
      </div>
    </template>
  </home-template>
</template>

<script>
import homeTemplate from '@/templates/home-template/index.vue';
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
import card from '@/components/card/card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    homeTemplate,
    breadcrumb,
    card,
  },
  computed: {
    ...mapGetters(['getReserves']),
  },
  methods: {
    ...mapActions(['setReserves']),
  },
  mounted() {
    this.setReserves();
  },
};
</script>

<style scoped>
  @import url("./styles.css");
</style>
