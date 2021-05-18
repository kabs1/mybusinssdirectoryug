<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/commissions' }">
        <app-i18n code="entities.commissions.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.commissions.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.commissions.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.commissions.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.commissions.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-commissions-form
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
import CommissionsForm from '@/modules/commissions/components/commissions-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-commissions-form-page',

  props: ['id'],

  components: {
    [CommissionsForm.name]: CommissionsForm,
  },

  computed: {
    ...mapGetters({
      record: 'commissions/form/record',
      findLoading: 'commissions/form/findLoading',
      saveLoading: 'commissions/form/saveLoading',
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
      doFind: 'commissions/form/doFind',
      doNew: 'commissions/form/doNew',
      doUpdate: 'commissions/form/doUpdate',
      doCreate: 'commissions/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/commissions');
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
