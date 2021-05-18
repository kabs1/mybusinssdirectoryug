<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/price-change' }">
        <app-i18n code="entities.priceChange.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.priceChange.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.priceChange.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.priceChange.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.priceChange.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-price-change-form
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
import PriceChangeForm from '@/modules/price-change/components/price-change-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-price-change-form-page',

  props: ['id'],

  components: {
    [PriceChangeForm.name]: PriceChangeForm,
  },

  computed: {
    ...mapGetters({
      record: 'priceChange/form/record',
      findLoading: 'priceChange/form/findLoading',
      saveLoading: 'priceChange/form/saveLoading',
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
      doFind: 'priceChange/form/doFind',
      doNew: 'priceChange/form/doNew',
      doUpdate: 'priceChange/form/doUpdate',
      doCreate: 'priceChange/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/price-change');
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
