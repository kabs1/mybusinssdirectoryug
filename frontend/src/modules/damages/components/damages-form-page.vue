<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/damages' }">
        <app-i18n code="entities.damages.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.damages.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.damages.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.damages.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.damages.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-damages-form
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
import DamagesForm from '@/modules/damages/components/damages-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-damages-form-page',

  props: ['id'],

  components: {
    [DamagesForm.name]: DamagesForm,
  },

  computed: {
    ...mapGetters({
      record: 'damages/form/record',
      findLoading: 'damages/form/findLoading',
      saveLoading: 'damages/form/saveLoading',
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
      doFind: 'damages/form/doFind',
      doNew: 'damages/form/doNew',
      doUpdate: 'damages/form/doUpdate',
      doCreate: 'damages/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/damages');
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
