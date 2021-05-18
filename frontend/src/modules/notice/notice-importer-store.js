import importerStore from '@/shared/importer/importer-store';
import { NoticeService } from '@/modules/notice/notice-service';
import noticeImporterFields from '@/modules/notice/notice-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  NoticeService.import,
  noticeImporterFields,
  i18n('entities.notice.importer.fileName'),
  i18n('entities.notice.importer.hint'),
);
