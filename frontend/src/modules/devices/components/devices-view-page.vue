<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/devices' }">
        <app-i18n code="entities.devices.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.devices.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.devices.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-devices-view-toolbar v-if="record"></app-devices-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.deviceImage.label" :value="presenter(record, 'deviceImage')"></app-view-item-image>

        <app-view-item-text :label="fields.deviceName.label" :value="presenter(record, 'deviceName')"></app-view-item-text>

        <app-view-item-text :label="fields.deviceSerial.label" :value="presenter(record, 'deviceSerial')"></app-view-item-text>

        <app-view-item-text :label="fields.deviceType.label" :value="presenter(record, 'deviceType')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.deviceCurrency.label"
          :permission="fields.deviceCurrency.readPermission"
          :url="fields.deviceCurrency.viewUrl"
          :value="presenter(record, 'deviceCurrency')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.deviceNote.label" :value="presenter(record, 'deviceNote')"></app-view-item-text>

        <app-view-item-file :label="fields.deviceDocs.label" :value="presenter(record, 'deviceDocs')"></app-view-item-file>

        <app-view-item-relation-to-one
          :label="fields.deviceStall.label"
          :permission="fields.deviceStall.readPermission"
          :url="fields.deviceStall.viewUrl"
          :value="presenter(record, 'deviceStall')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DevicesViewToolbar from '@/modules/devices/components/devices-view-toolbar.vue';
import { DevicesModel } from '@/modules/devices/devices-model';

const { fields } = DevicesModel;

export default {
  name: 'app-devices-view-page',

  props: ['id'],

  components: {
    [DevicesViewToolbar.name]: DevicesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'devices/view/record',
      loading: 'devices/view/loading',
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
      doFind: 'devices/view/doFind',
    }),

    presenter(record, fieldName) {
      return DevicesModel.presenter(record, fieldName);
    },
  },
};
</script>
