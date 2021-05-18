<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/coupon' }">
        <app-i18n code="entities.coupon.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.coupon.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.coupon.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.coupon.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.coupon.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-coupon-form
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
import CouponForm from '@/modules/coupon/components/coupon-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-coupon-form-page',

  props: ['id'],

  components: {
    [CouponForm.name]: CouponForm,
  },

  computed: {
    ...mapGetters({
      record: 'coupon/form/record',
      findLoading: 'coupon/form/findLoading',
      saveLoading: 'coupon/form/saveLoading',
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
      doFind: 'coupon/form/doFind',
      doNew: 'coupon/form/doNew',
      doUpdate: 'coupon/form/doUpdate',
      doCreate: 'coupon/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/coupon');
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
