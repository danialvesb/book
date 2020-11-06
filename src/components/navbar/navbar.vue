<template>
  <nav class="nav">
    <ul>
      <li>
        <lib-button
          value="Solicitar empréstimo"
          color="success"
          @on-click-button="openModal"
        />
      </li>
    </ul>
    <modal
      title="Solicitar empréstimo"
      :show.sync="showModal"
      @close="closeModal"
    >
      <template slot="body">
        <div class="form-modal">
          <h5>Preencha as informações para solicitar reserva:</h5>
            <div class="form-inputs">
              <lib-input type="text" placeholder="Nome do livro"/>
              <lib-select :options="options"/>
              <lib-button :options="options" color="primary" value="Solicitar"/>
            </div>
        </div>
      </template>
    </modal>
  </nav>
</template>

<script>
import libButton from '@/components/button/button.vue';
import libInput from '@/components/form/input/input.vue';
import libSelect from '@/components/form/select/select.vue';
import modal from '@/components/modal/modal.vue';

export default {
  name: 'navbar',
  components: {
    libButton,
    modal,
    libInput,
    libSelect,
  },
  data() {
    return {
      showModal: false,
      options: ['Professor', 'Aluno'],
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
@import url("./styles.css");
</style>
