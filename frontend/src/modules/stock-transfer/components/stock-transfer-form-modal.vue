<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <app-stock-transfer-form
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
import StockTransferForm from '@/modules/stock-transfer/components/stock-transfer-form';
import { StockTransferService } from '@/modules/stock-transfer/stock-transfer-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-stock-transfer-form-modal',

  props: ['visible'],

  components: {
    [StockTransferForm.name]: StockTransferForm,
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
      return i18n('entities.stockTransfer.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        const { id } = await StockTransferService.create(
          payload.values,
        );
        const record = await StockTransferService.find(id);
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
