<template>
  <div>
    <el-row :gutter="16">

    </el-row>

  </div>
</template>

<script>
import HomeChart from '@/modules/home/components/home-chart.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'app-home-page',

  components: {
    [HomeChart.name]: HomeChart,
  },

  created() {
    if (this.isMobile) {
      this.collapseMenu();
    }
  },

  computed: {
    ...mapGetters({
      isMobile: 'layout/isMobile',
    })
  },

  methods: {
    ...mapActions({
      collapseMenu: 'layout/collapseMenu',
    })
  }
};
</script>

<style scoped>
.el-col {
  margin-bottom: 16px;
}

.home-bottom-message {
  width: 100%;
  text-align: center;
  color: grey;
}
</style>
