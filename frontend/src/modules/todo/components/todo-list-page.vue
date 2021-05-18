<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.todo.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.todo.list.title"></app-i18n>
      </h1>

      <app-todo-list-toolbar></app-todo-list-toolbar>
      <app-todo-list-filter></app-todo-list-filter>
      <app-todo-list-table></app-todo-list-table>
    </div>
  </div>
</template>

<script>
import TodoListFilter from '@/modules/todo/components/todo-list-filter.vue';
import TodoListTable from '@/modules/todo/components/todo-list-table.vue';
import TodoListToolbar from '@/modules/todo/components/todo-list-toolbar.vue';

export default {
  name: 'app-todo-list-page',

  components: {
    [TodoListFilter.name]: TodoListFilter,
    [TodoListTable.name]: TodoListTable,
    [TodoListToolbar.name]: TodoListToolbar,
  },
};
</script>

<style>
</style>
