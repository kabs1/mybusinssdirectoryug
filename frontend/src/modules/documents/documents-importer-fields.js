import { DocumentsModel } from '@/modules/documents/documents-model';

const { fields } = DocumentsModel;

export default [
  fields.documentTitle,
  fields.documentDetails,
  fields.documentType,
  fields.docStall,
  fields.documentFile,
];
