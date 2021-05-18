<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.allowanceAndDeduction.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.allowanceAndDeduction.list.title"></app-i18n>
      </h1>

      <app-allowance-and-deduction-list-toolbar></app-allowance-and-deduction-list-toolbar>
      <app-allowance-and-deduction-list-filter></app-allowance-and-deduction-list-filter>
      <app-allowance-and-deduction-list-table></app-allowance-and-deduction-list-table>
    </div>
  </div>
</template>

<script>
import AllowanceAndDeductionListFilter from '@/modules/allowance-and-deduction/components/allowance-and-deduction-list-filter.vue';
import AllowanceAndDeductionListTable from '@/modules/allowance-and-deduction/components/allowance-and-deduction-list-table.vue';
import AllowanceAndDeductionListToolbar from '@/modules/allowance-and-deduction/components/allowance-and-deduction-list-toolbar.vue';

export default {
  name: 'app-allowance-and-deduction-list-page',

  components: {
    [AllowanceAndDeductionListFilter.name]: AllowanceAndDeductionListFilter,
    [AllowanceAndDeductionListTable.name]: AllowanceAndDeductionListTable,
    [AllowanceAndDeductionListToolbar.name]: AllowanceAndDeductionListToolbar,
  },
};
</script>

<style>
</style>
