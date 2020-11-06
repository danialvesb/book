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
      :size="{ width: '30%', height: '300px' }"
      :show.sync="showModal"
      @close="closeModal"
    >
      <template slot="body">
        <div class="form-modal">
          <h5>Preencha as informações para solicitar reserva:</h5>
          <div class="form-inputs">
            <lib-input type="text" placeholder="Nome do livro" @change-input="changeInput"/>
            <lib-select :options="options" @on-change-select="changeSelect"/>
            <lib-button
              :options="options"
              color="primary"
              value="Solicitar"
              @on-click-button="requestReserve"
            />
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
import formatDate from '@/mixins/date';
import { mapActions } from 'vuex';

export default {
  name: 'navbar',
  mixins: [formatDate],
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
      data: {
        book: '',
        user: '',
        days: '',
        group_id: 0,
        created_date: this.formatDate(new Date()),
      },
    };
  },
  methods: {
    ...mapActions(['addReserve']),
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    requestReserve() {
      if (this.data.user === 'Professor') {
        this.data.days = '10';
      } else {
        this.data.days = '3';
      }

      if (this.checkFieldsForm()) {
        this.closeModal();
        this.addReserve({ ...this.data });
        this.cleanForm();
      }
    },
    changeInput(event) {
      this.data.book = event;
    },
    changeSelect(event) {
      this.data.user = event;
    },
    cleanForm() {
      this.data.book = '';
      this.data.user = '';
      this.data.days = '';
    },
    checkFieldsForm() {
      if (this.data.book && this.data.user) {
        return true;
      }
      alert('Preencha todos os campos');
      return false;
    },
  },
};
</script>

<style scoped>
  @import url("./styles.css");
</style>
