<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/units' }">
        <app-i18n code="entities.units.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.units.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.units.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.units.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.units.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-units-form
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
import UnitsForm from '@/modules/units/components/units-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-units-form-page',

  props: ['id'],

  components: {
    [UnitsForm.name]: UnitsForm,
  },

  computed: {
    ...mapGetters({
      record: 'units/form/record',
      findLoading: 'units/form/findLoading',
      saveLoading: 'units/form/saveLoading',
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
      doFind: 'units/form/doFind',
      doNew: 'units/form/doNew',
      doUpdate: 'units/form/doUpdate',
      doCreate: 'units/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/units');
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
