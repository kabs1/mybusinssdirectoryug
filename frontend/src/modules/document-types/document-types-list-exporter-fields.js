import { DocumentTypesModel } from '@/modules/document-types/document-types-model';

const { fields } = DocumentTypesModel;

export default [
  fields.id,
  fields.documentTypeTitle,
  fields.documentTypeNote,
  fields.createdAt
];
