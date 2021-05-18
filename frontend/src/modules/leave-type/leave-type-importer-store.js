import importerStore from '@/shared/importer/importer-store';
import { LeaveTypeService } from '@/modules/leave-type/leave-type-service';
import leaveTypeImporterFields from '@/modules/leave-type/leave-type-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  LeaveTypeService.import,
  leaveTypeImporterFields,
  i18n('entities.leaveType.importer.fileName'),
  i18n('entities.leaveType.importer.hint'),
);
