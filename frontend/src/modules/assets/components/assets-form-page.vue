<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/assets' }">
        <app-i18n code="entities.assets.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.assets.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.assets.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.assets.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.assets.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-assets-form
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
import AssetsForm from '@/modules/assets/components/assets-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-assets-form-page',

  props: ['id'],

  components: {
    [AssetsForm.name]: AssetsForm,
  },

  computed: {
    ...mapGetters({
      record: 'assets/form/record',
      findLoading: 'assets/form/findLoading',
      saveLoading: 'assets/form/saveLoading',
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
      doFind: 'assets/form/doFind',
      doNew: 'assets/form/doNew',
      doUpdate: 'assets/form/doUpdate',
      doCreate: 'assets/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/assets');
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
