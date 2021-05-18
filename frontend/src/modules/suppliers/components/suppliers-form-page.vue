<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/suppliers' }">
        <app-i18n code="entities.suppliers.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.suppliers.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.suppliers.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.suppliers.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.suppliers.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-suppliers-form
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
import SuppliersForm from '@/modules/suppliers/components/suppliers-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-suppliers-form-page',

  props: ['id'],

  components: {
    [SuppliersForm.name]: SuppliersForm,
  },

  computed: {
    ...mapGetters({
      record: 'suppliers/form/record',
      findLoading: 'suppliers/form/findLoading',
      saveLoading: 'suppliers/form/saveLoading',
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
      doFind: 'suppliers/form/doFind',
      doNew: 'suppliers/form/doNew',
      doUpdate: 'suppliers/form/doUpdate',
      doCreate: 'suppliers/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/suppliers');
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
