<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/device-sessions' }">
        <app-i18n code="entities.deviceSessions.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.deviceSessions.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.deviceSessions.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-device-sessions-view-toolbar v-if="record"></app-device-sessions-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.sessionDevice.label"
          :permission="fields.sessionDevice.readPermission"
          :url="fields.sessionDevice.viewUrl"
          :value="presenter(record, 'sessionDevice')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.sessionLoginDate.label" :value="presenter(record, 'sessionLoginDate')"></app-view-item-text>

        <app-view-item-text :label="fields.sessionLogoutDate.label" :value="presenter(record, 'sessionLogoutDate')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.sessionUser.label"
          :permission="fields.sessionUser.readPermission"
          :url="fields.sessionUser.viewUrl"
          :value="presenter(record, 'sessionUser')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.sessionDeviceType.label" :value="presenter(record, 'sessionDeviceType')"></app-view-item-text>

        <app-view-item-text :label="fields.sessionIp.label" :value="presenter(record, 'sessionIp')"></app-view-item-text>

        <app-view-item-text :label="fields.sessionNetwork.label" :value="presenter(record, 'sessionNetwork')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DeviceSessionsViewToolbar from '@/modules/device-sessions/components/device-sessions-view-toolbar.vue';
import { DeviceSessionsModel } from '@/modules/device-sessions/device-sessions-model';

const { fields } = DeviceSessionsModel;

export default {
  name: 'app-device-sessions-view-page',

  props: ['id'],

  components: {
    [DeviceSessionsViewToolbar.name]: DeviceSessionsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'deviceSessions/view/record',
      loading: 'deviceSessions/view/loading',
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
      doFind: 'deviceSessions/view/doFind',
    }),

    presenter(record, fieldName) {
      return DeviceSessionsModel.presenter(record, fieldName);
    },
  },
};
</script>
