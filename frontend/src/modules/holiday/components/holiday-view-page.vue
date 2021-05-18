<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/holiday' }">
        <app-i18n code="entities.holiday.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.holiday.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.holiday.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-holiday-view-toolbar v-if="record"></app-holiday-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.holidayCover.label" :value="presenter(record, 'holidayCover')"></app-view-item-image>

        <app-view-item-text :label="fields.holidayTitle.label" :value="presenter(record, 'holidayTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.holidayDetails.label" :value="presenter(record, 'holidayDetails')"></app-view-item-text>

        <app-view-item-text :label="fields.holidayStartDate.label" :value="presenter(record, 'holidayStartDate')"></app-view-item-text>

        <app-view-item-text :label="fields.holidayEndDate.label" :value="presenter(record, 'holidayEndDate')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.holidayStall.label"
          :permission="fields.holidayStall.readPermission"
          :url="fields.holidayStall.viewUrl"
          :value="presenter(record, 'holidayStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.holidayStaff.label"
          :permission="fields.holidayStaff.readPermission"
          :url="fields.holidayStaff.viewUrl"
          :value="presenter(record, 'holidayStaff')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HolidayViewToolbar from '@/modules/holiday/components/holiday-view-toolbar.vue';
import { HolidayModel } from '@/modules/holiday/holiday-model';

const { fields } = HolidayModel;

export default {
  name: 'app-holiday-view-page',

  props: ['id'],

  components: {
    [HolidayViewToolbar.name]: HolidayViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'holiday/view/record',
      loading: 'holiday/view/loading',
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
      doFind: 'holiday/view/doFind',
    }),

    presenter(record, fieldName) {
      return HolidayModel.presenter(record, fieldName);
    },
  },
};
</script>
