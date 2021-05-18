<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/returns' }">
        <app-i18n code="entities.returns.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.returns.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.returns.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.returns.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.returns.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-returns-form
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
import ReturnsForm from '@/modules/returns/components/returns-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-returns-form-page',

  props: ['id'],

  components: {
    [ReturnsForm.name]: ReturnsForm,
  },

  computed: {
    ...mapGetters({
      record: 'returns/form/record',
      findLoading: 'returns/form/findLoading',
      saveLoading: 'returns/form/saveLoading',
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
      doFind: 'returns/form/doFind',
      doNew: 'returns/form/doNew',
      doUpdate: 'returns/form/doUpdate',
      doCreate: 'returns/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/returns');
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
