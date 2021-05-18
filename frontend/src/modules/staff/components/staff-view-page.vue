<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/staff' }">
        <app-i18n code="entities.staff.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.staff.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.staff.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-staff-view-toolbar v-if="record"></app-staff-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >

        <el-card class="box-card" style="margin-top: 30px">

              <div style="margin-left: 50px">

                  <el-row>
                      <el-col :span="8">
                          <div class="grid-content">
                              <app-view-item-image :label="fields.staffProfile.label" :value="presenter(record, 'staffProfile')"></app-view-item-image>
                          </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffNames.label" :value="presenter(record, 'staffNames')"></app-view-item-text>
                      </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-relation-to-one
                                  :label="fields.staffUserId.label"
                                  :permission="fields.staffUserId.readPermission"
                                  :url="fields.staffUserId.viewUrl"
                                  :value="presenter(record, 'staffUserId')"
                          ></app-view-item-relation-to-one>
                      </div></el-col>
                  </el-row>

                  <el-row>
                      <el-col :span="8">
                          <div class="grid-content">
                              <app-view-item-text :label="fields.staffPhoneNumber.label" :value="presenter(record, 'staffPhoneNumber')"></app-view-item-text>
                          </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffAbout.label" :value="presenter(record, 'staffAbout')"></app-view-item-text>
                      </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffCustomInfo.label" :value="presenter(record, 'staffCustomInfo')"></app-view-item-text>
                      </div></el-col>
                  </el-row>

                  <el-row>
                      <el-col :span="8">
                          <div class="grid-content">
                              <app-view-item-file :label="fields.staffCv.label" :value="presenter(record, 'staffCv')"></app-view-item-file>
                          </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-file :label="fields.staffDocuments.label" :value="presenter(record, 'staffDocuments')"></app-view-item-file>
                      </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffIsAServiceWorker.label" :value="presenter(record, 'staffIsAServiceWorker')"></app-view-item-text>
                      </div></el-col>
                  </el-row>

                  <el-row>
                      <el-col :span="8">
                          <div class="grid-content">
                              <app-view-item-text :label="fields.staffCommision.label" :value="presenter(record, 'staffCommision')"></app-view-item-text>
                          </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffDateOfBirth.label" :value="presenter(record, 'staffDateOfBirth')"></app-view-item-text>
                      </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffMaritalStatus.label" :value="presenter(record, 'staffMaritalStatus')"></app-view-item-text>
                      </div></el-col>
                  </el-row>

                  <el-row>
                      <el-col :span="8">
                          <div class="grid-content">
                              <app-view-item-text :label="fields.staffIdentityCard.label" :value="presenter(record, 'staffIdentityCard')"></app-view-item-text>
                          </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.staffAccessApps.label" :value="presenter(record, 'staffAccessApps')"></app-view-item-text>
                      </div></el-col>
                      <el-col :span="8"><div class="grid-content">
                          <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>
                      </div></el-col>
                  </el-row>

            </div>
        </el-card>

      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import StaffViewToolbar from '@/modules/staff/components/staff-view-toolbar.vue';
import { StaffModel } from '@/modules/staff/staff-model';

const { fields } = StaffModel;

export default {
  name: 'app-staff-view-page',

  props: ['id'],

  components: {
    [StaffViewToolbar.name]: StaffViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'staff/view/record',
      loading: 'staff/view/loading',
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
      doFind: 'staff/view/doFind',
    }),

    presenter(record, fieldName) {
      return StaffModel.presenter(record, fieldName);
    },
  },
};
</script>

<style>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
</style>
