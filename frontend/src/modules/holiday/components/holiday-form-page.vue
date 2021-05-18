<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/holiday' }">
        <app-i18n code="entities.holiday.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.holiday.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.holiday.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.holiday.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.holiday.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-holiday-form
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
import HolidayForm from '@/modules/holiday/components/holiday-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-holiday-form-page',

  props: ['id'],

  components: {
    [HolidayForm.name]: HolidayForm,
  },

  computed: {
    ...mapGetters({
      record: 'holiday/form/record',
      findLoading: 'holiday/form/findLoading',
      saveLoading: 'holiday/form/saveLoading',
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
      doFind: 'holiday/form/doFind',
      doNew: 'holiday/form/doNew',
      doUpdate: 'holiday/form/doUpdate',
      doCreate: 'holiday/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/holiday');
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
