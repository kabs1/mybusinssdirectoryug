<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/memos' }">
        <app-i18n code="entities.memos.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.memos.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.memos.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.memos.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.memos.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-memos-form
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
import MemosForm from '@/modules/memos/components/memos-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-memos-form-page',

  props: ['id'],

  components: {
    [MemosForm.name]: MemosForm,
  },

  computed: {
    ...mapGetters({
      record: 'memos/form/record',
      findLoading: 'memos/form/findLoading',
      saveLoading: 'memos/form/saveLoading',
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
      doFind: 'memos/form/doFind',
      doNew: 'memos/form/doNew',
      doUpdate: 'memos/form/doUpdate',
      doCreate: 'memos/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/memos');
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
