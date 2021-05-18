<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <app-allowance-and-deduction-form
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
import AllowanceAndDeductionForm from '@/modules/allowance-and-deduction/components/allowance-and-deduction-form';
import { AllowanceAndDeductionService } from '@/modules/allowance-and-deduction/allowance-and-deduction-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-allowance-and-deduction-form-modal',

  props: ['visible'],

  components: {
    [AllowanceAndDeductionForm.name]: AllowanceAndDeductionForm,
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
      return i18n('entities.allowanceAndDeduction.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        const { id } = await AllowanceAndDeductionService.create(
          payload.values,
        );
        const record = await AllowanceAndDeductionService.find(id);
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
