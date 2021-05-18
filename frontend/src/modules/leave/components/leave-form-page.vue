<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/leave' }">
        <app-i18n code="entities.leave.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.leave.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.leave.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.leave.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.leave.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-leave-form
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
import LeaveForm from '@/modules/leave/components/leave-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-leave-form-page',

  props: ['id'],

  components: {
    [LeaveForm.name]: LeaveForm,
  },

  computed: {
    ...mapGetters({
      record: 'leave/form/record',
      findLoading: 'leave/form/findLoading',
      saveLoading: 'leave/form/saveLoading',
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
      doFind: 'leave/form/doFind',
      doNew: 'leave/form/doNew',
      doUpdate: 'leave/form/doUpdate',
      doCreate: 'leave/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/leave');
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
