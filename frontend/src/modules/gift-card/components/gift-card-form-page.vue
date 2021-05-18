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
        <app-i18n code="entities.giftCard.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.giftCard.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.giftCard.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.giftCard.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-gift-card-form
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
import GiftCardForm from '@/modules/gift-card/components/gift-card-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-gift-card-form-page',

  props: ['id'],

  components: {
    [GiftCardForm.name]: GiftCardForm,
  },

  computed: {
    ...mapGetters({
      record: 'giftCard/form/record',
      findLoading: 'giftCard/form/findLoading',
      saveLoading: 'giftCard/form/saveLoading',
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
      doFind: 'giftCard/form/doFind',
      doNew: 'giftCard/form/doNew',
      doUpdate: 'giftCard/form/doUpdate',
      doCreate: 'giftCard/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/gift-card');
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
