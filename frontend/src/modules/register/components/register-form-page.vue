<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/register' }">
        <app-i18n code="entities.register.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.register.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.register.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.register.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.register.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-register-form
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
import RegisterForm from '@/modules/register/components/register-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-register-form-page',

  props: ['id'],

  components: {
    [RegisterForm.name]: RegisterForm,
  },

  computed: {
    ...mapGetters({
      record: 'register/form/record',
      findLoading: 'register/form/findLoading',
      saveLoading: 'register/form/saveLoading',
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
      doFind: 'register/form/doFind',
      doNew: 'register/form/doNew',
      doUpdate: 'register/form/doUpdate',
      doCreate: 'register/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/register');
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
