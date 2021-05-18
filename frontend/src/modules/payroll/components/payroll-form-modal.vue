<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <app-payroll-form
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
import PayrollForm from '@/modules/payroll/components/payroll-form';
import { PayrollService } from '@/modules/payroll/payroll-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-payroll-form-modal',

  props: ['visible'],

  components: {
    [PayrollForm.name]: PayrollForm,
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
      return i18n('entities.payroll.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        const { id } = await PayrollService.create(
          payload.values,
        );
        const record = await PayrollService.find(id);
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
