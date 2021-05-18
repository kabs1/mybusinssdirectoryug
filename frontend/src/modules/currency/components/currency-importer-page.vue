<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/currency' }">
        <app-i18n code="entities.currency.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.currency.importer.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.currency.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="currency/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-currency-importer-page',
};
</script>

<style>
</style>
