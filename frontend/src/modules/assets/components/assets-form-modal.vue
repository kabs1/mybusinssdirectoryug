<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <app-assets-form
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
import AssetsForm from '@/modules/assets/components/assets-form';
import { AssetsService } from '@/modules/assets/assets-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-assets-form-modal',

  props: ['visible'],

  components: {
    [AssetsForm.name]: AssetsForm,
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
      return i18n('entities.assets.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        const { id } = await AssetsService.create(
          payload.values,
        );
        const record = await AssetsService.find(id);
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
