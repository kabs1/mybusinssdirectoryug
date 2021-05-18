<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/attendance' }">
        <app-i18n code="entities.attendance.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.attendance.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.attendance.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-attendance-view-toolbar v-if="record"></app-attendance-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.attendanceRef.label" :value="presenter(record, 'attendanceRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.attendanceStaff.label"
          :permission="fields.attendanceStaff.readPermission"
          :url="fields.attendanceStaff.viewUrl"
          :value="presenter(record, 'attendanceStaff')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.attendanceClockIn.label" :value="presenter(record, 'attendanceClockIn')"></app-view-item-text>

        <app-view-item-text :label="fields.attendanceClockOut.label" :value="presenter(record, 'attendanceClockOut')"></app-view-item-text>

        <app-view-item-text :label="fields.attendanceNote.label" :value="presenter(record, 'attendanceNote')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.expenseStall.label"
          :permission="fields.expenseStall.readPermission"
          :url="fields.expenseStall.viewUrl"
          :value="presenter(record, 'expenseStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AttendanceViewToolbar from '@/modules/attendance/components/attendance-view-toolbar.vue';
import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

export default {
  name: 'app-attendance-view-page',

  props: ['id'],

  components: {
    [AttendanceViewToolbar.name]: AttendanceViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'attendance/view/record',
      loading: 'attendance/view/loading',
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
      doFind: 'attendance/view/doFind',
    }),

    presenter(record, fieldName) {
      return AttendanceModel.presenter(record, fieldName);
    },
  },
};
</script>
