<template>
  <div style="display: flex">
    <app-autocomplete-one-input :fetchFn="fetchFn" v-if="mode !== 'multiple'" v-model="model"></app-autocomplete-one-input>
    <app-autocomplete-many-input :fetchFn="fetchFn" v-if="mode === 'multiple'" v-model="model"></app-autocomplete-many-input>
    <el-button
      @click="doOpenModal()"
      icon="el-icon-plus"
      style="margin-left: 16px"
      type="primary"
      v-if="hasPermissionToCreate && showCreate"
    ></el-button>
    <portal to="modal">
      <app-price-change-form-modal
        :visible="dialogVisible"
        @close="onModalClose"
        @success="onModalSuccess"
        v-if="dialogVisible"
      ></app-price-change-form-modal>
    </portal>
  </div>
</template>

<script>
import PriceChangeFormModal from '@/modules/price-change/components/price-change-form-modal';
import { PriceChangePermissions } from '@/modules/price-change/price-change-permissions';
import { mapGetters } from 'vuex';

export default {
  name: 'app-price-change-autocomplete-input',
  props: [
    'value',
    'mode',
    'fetchFn',
    'mapperFn',
    'showCreate',
  ],

  components: {
    [PriceChangeFormModal.name]: PriceChangeFormModal,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),

    model: {
      get: function() {
        return this.value;
      },

      set: function(value) {
        this.$emit('input', value);
      },
    },

    hasPermissionToCreate() {
      return new PriceChangePermissions(this.currentUser)
        .create;
    },
  },

  methods: {
    doOpenModal() {
      this.dialogVisible = true;
    },

    onModalSuccess(record) {
      if (this.mode === 'multiple') {
        this.model = [...this.model, this.mapperFn(record)];
      } else {
        this.model = this.mapperFn(record);
      }

      this.onModalClose();
    },

    onModalClose() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.el-form-item .el-form-item {
  margin-bottom: 22px;
}
</style>
