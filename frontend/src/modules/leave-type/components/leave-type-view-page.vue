<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/leave-type' }">
        <app-i18n code="entities.leaveType.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.leaveType.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.leaveType.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-leave-type-view-toolbar v-if="record"></app-leave-type-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.leaveTypeTitle.label" :value="presenter(record, 'leaveTypeTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.leaveTypeDetails.label" :value="presenter(record, 'leaveTypeDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.leaveCategory.label" :value="presenter(record, 'leaveCategory')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LeaveTypeViewToolbar from '@/modules/leave-type/components/leave-type-view-toolbar.vue';
import { LeaveTypeModel } from '@/modules/leave-type/leave-type-model';

const { fields } = LeaveTypeModel;

export default {
  name: 'app-leave-type-view-page',

  props: ['id'],

  components: {
    [LeaveTypeViewToolbar.name]: LeaveTypeViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'leaveType/view/record',
      loading: 'leaveType/view/loading',
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
      doFind: 'leaveType/view/doFind',
    }),

    presenter(record, fieldName) {
      return LeaveTypeModel.presenter(record, fieldName);
    },
  },
};
</script>
