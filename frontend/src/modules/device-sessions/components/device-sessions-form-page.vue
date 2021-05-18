<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/device-sessions' }">
        <app-i18n code="entities.deviceSessions.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.deviceSessions.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.deviceSessions.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.deviceSessions.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.deviceSessions.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-device-sessions-form
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
import DeviceSessionsForm from '@/modules/device-sessions/components/device-sessions-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-device-sessions-form-page',

  props: ['id'],

  components: {
    [DeviceSessionsForm.name]: DeviceSessionsForm,
  },

  computed: {
    ...mapGetters({
      record: 'deviceSessions/form/record',
      findLoading: 'deviceSessions/form/findLoading',
      saveLoading: 'deviceSessions/form/saveLoading',
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
      doFind: 'deviceSessions/form/doFind',
      doNew: 'deviceSessions/form/doNew',
      doUpdate: 'deviceSessions/form/doUpdate',
      doCreate: 'deviceSessions/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/device-sessions');
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
