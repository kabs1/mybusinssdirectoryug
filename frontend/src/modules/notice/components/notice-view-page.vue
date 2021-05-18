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
        <app-i18n code="entities.notice.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.notice.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-notice-view-toolbar v-if="record"></app-notice-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.noticeCover.label" :value="presenter(record, 'noticeCover')"></app-view-item-image>

        <app-view-item-text :label="fields.noticeTitle.label" :value="presenter(record, 'noticeTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.noticeDetails.label" :value="presenter(record, 'noticeDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.noticeType.label" :value="presenter(record, 'noticeType')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.userIds.label"
          :permission="fields.userIds.readPermission"
          :url="fields.userIds.viewUrl"
          :value="presenter(record, 'userIds')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.noticeDevice.label"
          :permission="fields.noticeDevice.readPermission"
          :url="fields.noticeDevice.viewUrl"
          :value="presenter(record, 'noticeDevice')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.noticeStall.label"
          :permission="fields.noticeStall.readPermission"
          :url="fields.noticeStall.viewUrl"
          :value="presenter(record, 'noticeStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NoticeViewToolbar from '@/modules/notice/components/notice-view-toolbar.vue';
import { NoticeModel } from '@/modules/notice/notice-model';

const { fields } = NoticeModel;

export default {
  name: 'app-notice-view-page',

  props: ['id'],

  components: {
    [NoticeViewToolbar.name]: NoticeViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'notice/view/record',
      loading: 'notice/view/loading',
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
      doFind: 'notice/view/doFind',
    }),

    presenter(record, fieldName) {
      return NoticeModel.presenter(record, fieldName);
    },
  },
};
</script>
