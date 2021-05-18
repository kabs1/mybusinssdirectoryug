<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/products' }">
        <app-i18n code="entities.products.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.products.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.products.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-products-view-toolbar v-if="record"></app-products-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >

        <app-view-item-image :label="fields.productImage.label" :value="presenter(record, 'productImage')"></app-view-item-image>

        <app-view-item-text :label="fields.productName.label" :value="presenter(record, 'productName')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.productUnit.label"
          :permission="fields.productUnit.readPermission"
          :url="fields.productUnit.viewUrl"
          :value="presenter(record, 'productUnit')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.productBrand.label"
          :permission="fields.productBrand.readPermission"
          :url="fields.productBrand.viewUrl"
          :value="presenter(record, 'productBrand')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.productCategory.label"
          :permission="fields.productCategory.readPermission"
          :url="fields.productCategory.viewUrl"
          :value="presenter(record, 'productCategory')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.productTax.label"
          :permission="fields.productTax.readPermission"
          :url="fields.productTax.viewUrl"
          :value="presenter(record, 'productTax')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.productEnableStock.label" :value="presenter(record, 'productEnableStock')"></app-view-item-text>

        <app-view-item-text :label="fields.productAlertQuantity.label" :value="presenter(record, 'productAlertQuantity')"></app-view-item-text>

        <app-view-item-text :label="fields.productSku.label" :value="presenter(record, 'productSku')"></app-view-item-text>

        <app-view-item-text :label="fields.productCodeType.label" :value="presenter(record, 'productCodeType')"></app-view-item-text>

        <app-view-item-text :label="fields.productExpiry.label" :value="presenter(record, 'productExpiry')"></app-view-item-text>

        <app-view-item-text :label="fields.productCustomField.label" :value="presenter(record, 'productCustomField')"></app-view-item-text>

        <app-view-item-text :label="fields.productDesc.label" :value="presenter(record, 'productDesc')"></app-view-item-text>

        <app-view-item-text :label="fields.productStatus.label" :value="presenter(record, 'productStatus')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.productVariation.label"
          :permission="fields.productVariation.readPermission"
          :url="fields.productVariation.viewUrl"
          :value="presenter(record, 'productVariation')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.productAttribute.label" :value="presenter(record, 'productAttribute')"></app-view-item-text>

        <app-view-item-text :label="fields.productColor.label" :value="presenter(record, 'productColor')"></app-view-item-text>

<!--        <app-view-item-relation-to-many-->
<!--          :label="fields.productStall.label"-->
<!--          :permission="fields.productStall.readPermission"-->
<!--          :url="fields.productStall.viewUrl"-->
<!--          :value="presenter(record, 'productStall')"-->
<!--        ></app-view-item-relation-to-many>-->

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductsViewToolbar from '@/modules/products/components/products-view-toolbar.vue';
import { ProductsModel } from '@/modules/products/products-model';

const { fields } = ProductsModel;

export default {
  name: 'app-products-view-page',

  props: ['id'],

  components: {
    [ProductsViewToolbar.name]: ProductsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'products/view/record',
      loading: 'products/view/loading',
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
      doFind: 'products/view/doFind',
    }),

    presenter(record, fieldName) {
      return ProductsModel.presenter(record, fieldName);
    },
  },
};
</script>
