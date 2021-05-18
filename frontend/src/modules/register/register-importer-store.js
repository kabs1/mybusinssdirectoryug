import importerStore from '@/shared/importer/importer-store';
import { RegisterService } from '@/modules/register/register-service';
import registerImporterFields from '@/modules/register/register-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  RegisterService.import,
  registerImporterFields,
  i18n('entities.register.importer.fileName'),
  i18n('entities.register.importer.hint'),
);
