import importerStore from '@/shared/importer/importer-store';
import { DevicesService } from '@/modules/devices/devices-service';
import devicesImporterFields from '@/modules/devices/devices-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DevicesService.import,
  devicesImporterFields,
  i18n('entities.devices.importer.fileName'),
  i18n('entities.devices.importer.hint'),
);
