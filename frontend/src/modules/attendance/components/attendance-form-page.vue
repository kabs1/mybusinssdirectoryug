<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/attendance' }">
        <app-i18n code="entities.attendance.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.attendance.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.attendance.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.attendance.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.attendance.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-attendance-form
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
import AttendanceForm from '@/modules/attendance/components/attendance-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-attendance-form-page',

  props: ['id'],

  components: {
    [AttendanceForm.name]: AttendanceForm,
  },

  computed: {
    ...mapGetters({
      record: 'attendance/form/record',
      findLoading: 'attendance/form/findLoading',
      saveLoading: 'attendance/form/saveLoading',
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
      doFind: 'attendance/form/doFind',
      doNew: 'attendance/form/doNew',
      doUpdate: 'attendance/form/doUpdate',
      doCreate: 'attendance/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/attendance');
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
