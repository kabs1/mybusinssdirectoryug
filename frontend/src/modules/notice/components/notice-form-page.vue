<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/notice' }">
        <app-i18n code="entities.notice.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.notice.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.notice.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.notice.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.notice.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-notice-form
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
import NoticeForm from '@/modules/notice/components/notice-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-notice-form-page',

  props: ['id'],

  components: {
    [NoticeForm.name]: NoticeForm,
  },

  computed: {
    ...mapGetters({
      record: 'notice/form/record',
      findLoading: 'notice/form/findLoading',
      saveLoading: 'notice/form/saveLoading',
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
      doFind: 'notice/form/doFind',
      doNew: 'notice/form/doNew',
      doUpdate: 'notice/form/doUpdate',
      doCreate: 'notice/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/notice');
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
