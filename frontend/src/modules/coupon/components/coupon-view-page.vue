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
        <app-i18n code="entities.coupon.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.coupon.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-coupon-view-toolbar v-if="record"></app-coupon-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.couponCode.label" :value="presenter(record, 'couponCode')"></app-view-item-text>

        <app-view-item-text :label="fields.couponType.label" :value="presenter(record, 'couponType')"></app-view-item-text>

        <app-view-item-text :label="fields.couponValue.label" :value="presenter(record, 'couponValue')"></app-view-item-text>

        <app-view-item-text :label="fields.couponMinAmount.label" :value="presenter(record, 'couponMinAmount')"></app-view-item-text>

        <app-view-item-text :label="fields.couponStartDate.label" :value="presenter(record, 'couponStartDate')"></app-view-item-text>

        <app-view-item-text :label="fields.couponEndDate.label" :value="presenter(record, 'couponEndDate')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.couponStall.label"
          :permission="fields.couponStall.readPermission"
          :url="fields.couponStall.viewUrl"
          :value="presenter(record, 'couponStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.couponStatus.label" :value="presenter(record, 'couponStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.couponMaxUse.label" :value="presenter(record, 'couponMaxUse')"></app-view-item-text>

        <app-view-item-text :label="fields.couponUsageCount.label" :value="presenter(record, 'couponUsageCount')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.couponSalesUsed.label"
          :permission="fields.couponSalesUsed.readPermission"
          :url="fields.couponSalesUsed.viewUrl"
          :value="presenter(record, 'couponSalesUsed')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CouponViewToolbar from '@/modules/coupon/components/coupon-view-toolbar.vue';
import { CouponModel } from '@/modules/coupon/coupon-model';

const { fields } = CouponModel;

export default {
  name: 'app-coupon-view-page',

  props: ['id'],

  components: {
    [CouponViewToolbar.name]: CouponViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'coupon/view/record',
      loading: 'coupon/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'coupon/view/doFind',
    }),

    presenter(record, fieldName) {
      return CouponModel.presenter(record, fieldName);
    },
  },
};
</script>
