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
        <app-i18n code="entities.todo.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.todo.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.todo.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.todo.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-todo-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoForm from '@/modules/todo/components/todo-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-todo-form-page',

  props: ['id'],

  components: {
    [TodoForm.name]: TodoForm,
  },

  computed: {
    ...mapGetters({
      record: 'todo/form/record',
      findLoading: 'todo/form/findLoading',
      saveLoading: 'todo/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'todo/form/doFind',
      doNew: 'todo/form/doNew',
      doUpdate: 'todo/form/doUpdate',
      doCreate: 'todo/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/todo');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
