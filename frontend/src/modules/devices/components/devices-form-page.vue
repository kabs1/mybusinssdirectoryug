<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/devices' }">
        <app-i18n code="entities.devices.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.devices.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.devices.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.devices.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.devices.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-devices-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DevicesForm from '@/modules/devices/components/devices-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-devices-form-page',

  props: ['id'],

  components: {
    [DevicesForm.name]: DevicesForm,
  },

  computed: {
    ...mapGetters({
      record: 'devices/form/record',
      findLoading: 'devices/form/findLoading',
      saveLoading: 'devices/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'devices/form/doFind',
      doNew: 'devices/form/doNew',
      doUpdate: 'devices/form/doUpdate',
      doCreate: 'devices/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/devices');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
