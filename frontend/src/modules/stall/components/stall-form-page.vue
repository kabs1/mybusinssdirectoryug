<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/stall' }">
        <app-i18n code="entities.stall.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.stall.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.stall.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.stall.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.stall.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-stall-form
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
import StallForm from '@/modules/stall/components/stall-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-stall-form-page',

  props: ['id'],

  components: {
    [StallForm.name]: StallForm,
  },

  computed: {
    ...mapGetters({
      record: 'stall/form/record',
      findLoading: 'stall/form/findLoading',
      saveLoading: 'stall/form/saveLoading',
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
      doFind: 'stall/form/doFind',
      doNew: 'stall/form/doNew',
      doUpdate: 'stall/form/doUpdate',
      doCreate: 'stall/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/stall');
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
