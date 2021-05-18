<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/gift-card' }">
        <app-i18n code="entities.giftCard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.giftCard.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.giftCard.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-gift-card-view-toolbar v-if="record"></app-gift-card-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.giftCardName.label" :value="presenter(record, 'giftCardName')"></app-view-item-text>

        <app-view-item-text :label="fields.giftCardNo.label" :value="presenter(record, 'giftCardNo')"></app-view-item-text>

        <app-view-item-text :label="fields.giftCardAmmount.label" :value="presenter(record, 'giftCardAmmount')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.giftCardCustomer.label"
          :permission="fields.giftCardCustomer.readPermission"
          :url="fields.giftCardCustomer.viewUrl"
          :value="presenter(record, 'giftCardCustomer')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.giftCardStartDate.label" :value="presenter(record, 'giftCardStartDate')"></app-view-item-text>

        <app-view-item-text :label="fields.giftCardEndDate.label" :value="presenter(record, 'giftCardEndDate')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.giftCardStall.label"
          :permission="fields.giftCardStall.readPermission"
          :url="fields.giftCardStall.viewUrl"
          :value="presenter(record, 'giftCardStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.giftCardStatus.label" :value="presenter(record, 'giftCardStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GiftCardViewToolbar from '@/modules/gift-card/components/gift-card-view-toolbar.vue';
import { GiftCardModel } from '@/modules/gift-card/gift-card-model';

const { fields } = GiftCardModel;

export default {
  name: 'app-gift-card-view-page',

  props: ['id'],

  components: {
    [GiftCardViewToolbar.name]: GiftCardViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'giftCard/view/record',
      loading: 'giftCard/view/loading',
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
      doFind: 'giftCard/view/doFind',
    }),

    presenter(record, fieldName) {
      return GiftCardModel.presenter(record, fieldName);
    },
  },
};
</script>
