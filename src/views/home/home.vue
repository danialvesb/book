<template>
  <home-template>
      <template slot="breadcrumbs">
        <breadcrumb value="Início"></breadcrumb>
      </template>
      <template slot="body">
        <div class="body-content">
          <card :data="dataCard">
          </card>
        </div>
      </template>
  </home-template>
</template>

<script>
import homeTemplate from '@/templates/home-template/index.vue';
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
import card from '@/components/card/card.vue';
import formatDate from '@/mixins/date';

export default {
  name: 'home',
  mixins: [formatDate],
  components: {
    homeTemplate,
    breadcrumb,
    card,
  },
  data() {
    return {
      dataCard: {
        user: 'Professor',
        book: 'Cálculos II',
        days: 10,
        due_date: this.formatDate(new Date()),
      },
    };
  },
};
</script>

<style scoped>
  @import url('./styles.css');
</style>
