<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <app-expenses-form
        :modal="true"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
      />
    </el-dialog>
  </div>
</template>

<script>
import ExpensesForm from '@/modules/expenses/components/expenses-form';
import { ExpensesService } from '@/modules/expenses/expenses-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-expenses-form-modal',

  props: ['visible'],

  components: {
    [ExpensesForm.name]: ExpensesForm,
  },

  data() {
    return {
      record: null,
      saveLoading: false,
    };
  },

  computed: {
    dialogVisible: {
      get: function() {
        return this.visible;
      },

      set: function(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },

    title() {
      return i18n('entities.expenses.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        const { id } = await ExpensesService.create(
          payload.values,
        );
        const record = await ExpensesService.find(id);
        this.$emit('success', record);
      } catch (error) {
        Errors.handle(error);
      } finally {
        this.saveLoading = false;
      }
    },

    doCancel() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
</style>
