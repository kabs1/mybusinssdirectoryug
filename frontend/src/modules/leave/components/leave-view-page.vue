<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/leave' }">
        <app-i18n code="entities.leave.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.leave.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.leave.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-leave-view-toolbar v-if="record"></app-leave-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.leaveRef.label" :value="presenter(record, 'leaveRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.leaveUserId.label"
          :permission="fields.leaveUserId.readPermission"
          :url="fields.leaveUserId.viewUrl"
          :value="presenter(record, 'leaveUserId')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.leaveType.label"
          :permission="fields.leaveType.readPermission"
          :url="fields.leaveType.viewUrl"
          :value="presenter(record, 'leaveType')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.leaveStartDate.label" :value="presenter(record, 'leaveStartDate')"></app-view-item-text>

        <app-view-item-text :label="fields.leaveEndDate.label" :value="presenter(record, 'leaveEndDate')"></app-view-item-text>

        <app-view-item-text :label="fields.leaveNote.label" :value="presenter(record, 'leaveNote')"></app-view-item-text>

        <app-view-item-file :label="fields.leaveDocs.label" :value="presenter(record, 'leaveDocs')"></app-view-item-file>

        <app-view-item-relation-to-one
          :label="fields.leaveAssignedStaff.label"
          :permission="fields.leaveAssignedStaff.readPermission"
          :url="fields.leaveAssignedStaff.viewUrl"
          :value="presenter(record, 'leaveAssignedStaff')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LeaveViewToolbar from '@/modules/leave/components/leave-view-toolbar.vue';
import { LeaveModel } from '@/modules/leave/leave-model';

const { fields } = LeaveModel;

export default {
  name: 'app-leave-view-page',

  props: ['id'],

  components: {
    [LeaveViewToolbar.name]: LeaveViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'leave/view/record',
      loading: 'leave/view/loading',
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
      doFind: 'leave/view/doFind',
    }),

    presenter(record, fieldName) {
      return LeaveModel.presenter(record, fieldName);
    },
  },
};
</script>
