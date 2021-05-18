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
        <app-i18n code="entities.memos.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.memos.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-memos-view-toolbar v-if="record"></app-memos-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.memosCover.label" :value="presenter(record, 'memosCover')"></app-view-item-image>

        <app-view-item-text :label="fields.memosTitle.label" :value="presenter(record, 'memosTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.memosDetails.label" :value="presenter(record, 'memosDetails')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.memosFrom.label"
          :permission="fields.memosFrom.readPermission"
          :url="fields.memosFrom.viewUrl"
          :value="presenter(record, 'memosFrom')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.memosStartDate.label" :value="presenter(record, 'memosStartDate')"></app-view-item-text>

        <app-view-item-text :label="fields.memosEndDate.label" :value="presenter(record, 'memosEndDate')"></app-view-item-text>

        <app-view-item-text :label="fields.memosTo.label" :value="presenter(record, 'memosTo')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.memoStall.label"
          :permission="fields.memoStall.readPermission"
          :url="fields.memoStall.viewUrl"
          :value="presenter(record, 'memoStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MemosViewToolbar from '@/modules/memos/components/memos-view-toolbar.vue';
import { MemosModel } from '@/modules/memos/memos-model';

const { fields } = MemosModel;

export default {
  name: 'app-memos-view-page',

  props: ['id'],

  components: {
    [MemosViewToolbar.name]: MemosViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'memos/view/record',
      loading: 'memos/view/loading',
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
      doFind: 'memos/view/doFind',
    }),

    presenter(record, fieldName) {
      return MemosModel.presenter(record, fieldName);
    },
  },
};
</script>
