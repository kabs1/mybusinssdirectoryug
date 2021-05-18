import importerStore from '@/shared/importer/importer-store';
import { HolidayService } from '@/modules/holiday/holiday-service';
import holidayImporterFields from '@/modules/holiday/holiday-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  HolidayService.import,
  holidayImporterFields,
  i18n('entities.holiday.importer.fileName'),
  i18n('entities.holiday.importer.hint'),
);
