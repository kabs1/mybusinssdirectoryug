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
          :label="fields.priceChangeRef.label"
          :prop="fields.priceChangeRef.name"
          :required="fields.priceChangeRef.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.priceChangeRef.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeType.label"
          :prop="fields.priceChangeType.name"
          :required="fields.priceChangeType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.priceChangeType.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.priceChangeType.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeBefore.label"
          :prop="fields.priceChangeBefore.name"
          :required="fields.priceChangeBefore.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.priceChangeBefore.scale" :step="0.1" v-model="model[fields.priceChangeBefore.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeAfter.label"
          :prop="fields.priceChangeAfter.name"
          :required="fields.priceChangeAfter.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.priceChangeAfter.scale" :step="0.1" v-model="model[fields.priceChangeAfter.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeProduct.label"
          :prop="fields.priceChangeProduct.name"
          :required="fields.priceChangeProduct.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-products-autocomplete-input
              :fetchFn="fields.priceChangeProduct.fetchFn"
              :mapperFn="fields.priceChangeProduct.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.priceChangeProduct.name]"
              mode="single"
            ></app-products-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeStall.label"
          :prop="fields.priceChangeStall.name"
          :required="fields.priceChangeStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.priceChangeStall.fetchFn"
              :mapperFn="fields.priceChangeStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.priceChangeStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeSession.label"
          :prop="fields.priceChangeSession.name"
          :required="fields.priceChangeSession.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-device-sessions-autocomplete-input
              :fetchFn="fields.priceChangeSession.fetchFn"
              :mapperFn="fields.priceChangeSession.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.priceChangeSession.name]"
              mode="single"
            ></app-device-sessions-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.priceChangeStatus.label"
          :prop="fields.priceChangeStatus.name"
          :required="fields.priceChangeStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.priceChangeStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.priceChangeStatus.options"
              >{{option.label}}</el-radio>
            </el-radio-group>
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
import { PriceChangeModel } from '@/modules/price-change/price-change-model';

const { fields } = PriceChangeModel;
const formSchema = new FormSchema([
  fields.id,
  fields.priceChangeRef,
  fields.priceChangeType,
  fields.priceChangeBefore,
  fields.priceChangeAfter,
  fields.priceChangeProduct,
  fields.priceChangeStall,
  fields.priceChangeSession,
  fields.priceChangeStatus,
]);

export default {
  name: 'app-price-change-form',

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
