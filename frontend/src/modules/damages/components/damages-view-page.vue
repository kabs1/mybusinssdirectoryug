<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/damages' }">
        <app-i18n code="entities.damages.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.damages.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.damages.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-damages-view-toolbar v-if="record"></app-damages-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >

        <div style="margin-left: 50px">

        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-image :label="fields.damageCover.label" :value="presenter(record, 'damageCover')"></app-view-item-image>

        <app-view-item-text :label="fields.damageRef.label" :value="presenter(record, 'damageRef')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.damageProduct.label"
          :permission="fields.damageProduct.readPermission"
          :url="fields.damageProduct.viewUrl"
          :value="presenter(record, 'damageProduct')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.damageDate.label" :value="presenter(record, 'damageDate')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.damageCausedBy.label"
          :permission="fields.damageCausedBy.readPermission"
          :url="fields.damageCausedBy.viewUrl"
          :value="presenter(record, 'damageCausedBy')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.damageAmmount.label" :value="presenter(record, 'damageAmmount')"></app-view-item-text>

        <app-view-item-text :label="fields.damageNote.label" :value="presenter(record, 'damageNote')"></app-view-item-text>

        <app-view-item-file :label="fields.damageDocs.label" :value="presenter(record, 'damageDocs')"></app-view-item-file>

        <app-view-item-relation-to-many
          :label="fields.damageStall.label"
          :permission="fields.damageStall.readPermission"
          :url="fields.damageStall.viewUrl"
          :value="presenter(record, 'damageStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>

        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DamagesViewToolbar from '@/modules/damages/components/damages-view-toolbar.vue';
import { DamagesModel } from '@/modules/damages/damages-model';

const { fields } = DamagesModel;

export default {
  name: 'app-damages-view-page',

  props: ['id'],

  components: {
    [DamagesViewToolbar.name]: DamagesViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'damages/view/record',
      loading: 'damages/view/loading',
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
      doFind: 'damages/view/doFind',
    }),

    presenter(record, fieldName) {
      return DamagesModel.presenter(record, fieldName);
    },
  },
};
</script>
