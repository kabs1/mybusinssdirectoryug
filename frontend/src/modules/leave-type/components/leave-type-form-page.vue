<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/leave-type' }">
        <app-i18n code="entities.leaveType.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.leaveType.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.leaveType.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.leaveType.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.leaveType.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-leave-type-form
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
import LeaveTypeForm from '@/modules/leave-type/components/leave-type-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-leave-type-form-page',

  props: ['id'],

  components: {
    [LeaveTypeForm.name]: LeaveTypeForm,
  },

  computed: {
    ...mapGetters({
      record: 'leaveType/form/record',
      findLoading: 'leaveType/form/findLoading',
      saveLoading: 'leaveType/form/saveLoading',
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
      doFind: 'leaveType/form/doFind',
      doNew: 'leaveType/form/doNew',
      doUpdate: 'leaveType/form/doUpdate',
      doCreate: 'leaveType/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/leave-type');
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
