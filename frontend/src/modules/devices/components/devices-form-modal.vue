<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <app-devices-form
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
import DevicesForm from '@/modules/devices/components/devices-form';
import { DevicesService } from '@/modules/devices/devices-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-devices-form-modal',

  props: ['visible'],

  components: {
    [DevicesForm.name]: DevicesForm,
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
      return i18n('entities.devices.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        const { id } = await DevicesService.create(
          payload.values,
        );
        const record = await DevicesService.find(id);
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
