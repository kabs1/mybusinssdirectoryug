import importerStore from '@/shared/importer/importer-store';
import { DeviceSessionsService } from '@/modules/device-sessions/device-sessions-service';
import deviceSessionsImporterFields from '@/modules/device-sessions/device-sessions-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DeviceSessionsService.import,
  deviceSessionsImporterFields,
  i18n('entities.deviceSessions.importer.fileName'),
  i18n('entities.deviceSessions.importer.hint'),
);
