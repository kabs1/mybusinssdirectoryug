import importerStore from '@/shared/importer/importer-store';
import { LeaveService } from '@/modules/leave/leave-service';
import leaveImporterFields from '@/modules/leave/leave-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  LeaveService.import,
  leaveImporterFields,
  i18n('entities.leave.importer.fileName'),
  i18n('entities.leave.importer.hint'),
);
