<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :disabled="true" v-model="model[fields.id.name]" />
        </el-col>
      </el-form-item>
              <el-form-item
          :label="fields.transferRef.label"
          :prop="fields.transferRef.name"
          :required="fields.transferRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.transferRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferProduct.label"
          :prop="fields.transferProduct.name"
          :required="fields.transferProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.transferProduct.fetchFn"
              :mapperFn="fields.transferProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.transferProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferStallFrom.label"
          :prop="fields.transferStallFrom.name"
          :required="fields.transferStallFrom.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.transferStallFrom.fetchFn"
              :mapperFn="fields.transferStallFrom.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.transferStallFrom.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferStallTo.label"
          :prop="fields.transferStallTo.name"
          :required="fields.transferStallTo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.transferStallTo.fetchFn"
              :mapperFn="fields.transferStallTo.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.transferStallTo.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferUnits.label"
          :prop="fields.transferUnits.name"
          :required="fields.transferUnits.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.transferUnits.scale" :step="0.1" v-model="model[fields.transferUnits.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferNote.label"
          :prop="fields.transferNote.name"
          :required="fields.transferNote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.transferNote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferStatus.label"
          :prop="fields.transferStatus.name"
          :required="fields.transferStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.transferStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.transferStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.transferExpenses.label"
          :prop="fields.transferExpenses.name"
          :required="fields.transferExpenses.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-expenses-autocomplete-input
              :fetchFn="fields.transferExpenses.fetchFn"
              :mapperFn="fields.transferExpenses.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.transferExpenses.name]"
              mode="multiple"
            ></app-expenses-autocomplete-input>
          </el-col>
        </el-form-item>
      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close">
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { StockTransferModel } from '@/modules/stock-transfer/stock-transfer-model';

const { fields } = StockTransferModel;
const formSchema = new FormSchema([
  fields.id,
  fields.transferRef,
  fields.transferProduct,
  fields.transferStallFrom,
  fields.transferStallTo,
  fields.transferUnits,
  fields.transferNote,
  fields.transferStatus,
  fields.transferExpenses,
]);

export default {
  name: 'app-stock-transfer-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      return this.$emit('submit', {
        id,
        values,
      });
    },
  },
};
</script>

<style>
</style>
