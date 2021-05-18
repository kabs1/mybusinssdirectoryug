<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/todo' }">
        <app-i18n code="entities.todo.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.todo.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.todo.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-todo-view-toolbar v-if="record"></app-todo-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.todoTitle.label" :value="presenter(record, 'todoTitle')"></app-view-item-text>

        <app-view-item-text :label="fields.todoNote.label" :value="presenter(record, 'todoNote')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.todoStaff.label"
          :permission="fields.todoStaff.readPermission"
          :url="fields.todoStaff.viewUrl"
          :value="presenter(record, 'todoStaff')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.todoStatus.label" :value="presenter(record, 'todoStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.todoStartDate.label" :value="presenter(record, 'todoStartDate')"></app-view-item-text>

        <app-view-item-text :label="fields.todoEndDate.label" :value="presenter(record, 'todoEndDate')"></app-view-item-text>

        <app-view-item-text :label="fields.todoRating.label" :value="presenter(record, 'todoRating')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.todoStall.label"
          :permission="fields.todoStall.readPermission"
          :url="fields.todoStall.viewUrl"
          :value="presenter(record, 'todoStall')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoViewToolbar from '@/modules/todo/components/todo-view-toolbar.vue';
import { TodoModel } from '@/modules/todo/todo-model';

const { fields } = TodoModel;

export default {
  name: 'app-todo-view-page',

  props: ['id'],

  components: {
    [TodoViewToolbar.name]: TodoViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'todo/view/record',
      loading: 'todo/view/loading',
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
      doFind: 'todo/view/doFind',
    }),

    presenter(record, fieldName) {
      return TodoModel.presenter(record, fieldName);
    },
  },
};
</script>
