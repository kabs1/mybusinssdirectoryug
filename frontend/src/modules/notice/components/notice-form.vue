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
          :label="fields.noticeCover.label"
          :prop="fields.noticeCover.name"
          :required="fields.noticeCover.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.noticeCover.max"
              :path="fields.noticeCover.path"
              :schema="fields.noticeCover.fileSchema"
              v-model="model[fields.noticeCover.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.noticeTitle.label"
          :prop="fields.noticeTitle.name"
          :required="fields.noticeTitle.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.noticeTitle.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.noticeDetails.label"
          :prop="fields.noticeDetails.name"
          :required="fields.noticeDetails.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :rows="4" type="textarea" v-model="model[fields.noticeDetails.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.noticeType.label"
          :prop="fields.noticeType.name"
          :required="fields.noticeType.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.noticeType.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.noticeType.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.userIds.label"
          :prop="fields.userIds.name"
          :required="fields.userIds.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-iam-user-autocomplete-input
              :fetchFn="fields.userIds.fetchFn"
              :mapperFn="fields.userIds.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.userIds.name]"
              mode="multiple"
            ></app-iam-user-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.noticeDevice.label"
          :prop="fields.noticeDevice.name"
          :required="fields.noticeDevice.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-devices-autocomplete-input
              :fetchFn="fields.noticeDevice.fetchFn"
              :mapperFn="fields.noticeDevice.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.noticeDevice.name]"
              mode="multiple"
            ></app-devices-autocomplete-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.noticeStall.label"
          :prop="fields.noticeStall.name"
          :required="fields.noticeStall.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-stall-autocomplete-input
              :fetchFn="fields.noticeStall.fetchFn"
              :mapperFn="fields.noticeStall.mapperFn"
              :showCreate="!modal"
              v-model="model[fields.noticeStall.name]"
              mode="multiple"
            ></app-stall-autocomplete-input>
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
import { NoticeModel } from '@/modules/notice/notice-model';

const { fields } = NoticeModel;
const formSchema = new FormSchema([
  fields.id,
  fields.noticeCover,
  fields.noticeTitle,
  fields.noticeDetails,
  fields.noticeType,
  fields.userIds,
  fields.noticeDevice,
  fields.noticeStall,
]);

export default {
  name: 'app-notice-form',

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
