<template>
  <div class="card" :style="[{width: size.width}, {height: size.height}]">
  <div class="header-card">
    <h4>Recibo de reserva:</h4>
  </div>
  <div class="container-card">
    <p>Usuário: {{ data.user }}</p>
    <p>Livro: <strong>{{ data.book }}</strong></p>
    <p>Dias de empréstimo: {{ data.days }}</p>
    <p>Data do empréstimo: {{ data.created_date }}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    size: {
      type: Object,
      required: false,
      default: () => ({
        width: '75%',
        height: '150px',
      }),
    },
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
  @import url('./styles.css');
</style>
