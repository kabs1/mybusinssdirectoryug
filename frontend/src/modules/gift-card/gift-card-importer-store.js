import importerStore from '@/shared/importer/importer-store';
import { GiftCardService } from '@/modules/gift-card/gift-card-service';
import giftCardImporterFields from '@/modules/gift-card/gift-card-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  GiftCardService.import,
  giftCardImporterFields,
  i18n('entities.giftCard.importer.fileName'),
  i18n('entities.giftCard.importer.hint'),
);
