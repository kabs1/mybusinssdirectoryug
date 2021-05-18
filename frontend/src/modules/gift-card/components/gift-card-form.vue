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
          :label="fields.giftCardName.label"
          :prop="fields.giftCardName.name"
          :required="fields.giftCardName.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.giftCardName.name]" ref="focus" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardNo.label"
          :prop="fields.giftCardNo.name"
          :required="fields.giftCardNo.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.giftCardNo.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardAmmount.label"
          :prop="fields.giftCardAmmount.name"
          :required="fields.giftCardAmmount.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="fields.giftCardAmmount.scale" :step="0.1" v-model="model[fields.giftCardAmmount.name]" ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardCustomer.label"
          :prop="fields.giftCardCustomer.name"
          :required="fields.giftCardCustomer.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.giftCardCustomer.fetchFn"
              :mapperFn="fields.giftCardCustomer.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.giftCardCustomer.name]"
              mode="single"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardStartDate.label"
          :prop="fields.giftCardStartDate.name"
          :required="fields.giftCardStartDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.giftCardStartDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardEndDate.label"
          :prop="fields.giftCardEndDate.name"
          :required="fields.giftCardEndDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="date" v-model="model[fields.giftCardEndDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardStall.label"
          :prop="fields.giftCardStall.name"
          :required="fields.giftCardStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.giftCardStall.fetchFn"
              :mapperFn="fields.giftCardStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.giftCardStall.name]"
              mode="single"
            ></app-stall-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.giftCardStatus.label"
          :prop="fields.giftCardStatus.name"
          :required="fields.giftCardStatus.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-radio-group v-model="model[fields.giftCardStatus.name]">
              <el-radio
                :key="option.id"
                :label="option.id"
                v-for="option of fields.giftCardStatus.options"
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
import { GiftCardModel } from '@/modules/gift-card/gift-card-model';

const { fields } = GiftCardModel;
const formSchema = new FormSchema([
  fields.id,
  fields.giftCardName,
  fields.giftCardNo,
  fields.giftCardAmmount,
  fields.giftCardCustomer,
  fields.giftCardStartDate,
  fields.giftCardEndDate,
  fields.giftCardStall,
  fields.giftCardStatus,
]);

export default {
  name: 'app-gift-card-form',

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
