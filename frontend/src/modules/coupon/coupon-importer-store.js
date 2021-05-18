import importerStore from '@/shared/importer/importer-store';
import { CouponService } from '@/modules/coupon/coupon-service';
import couponImporterFields from '@/modules/coupon/coupon-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CouponService.import,
  couponImporterFields,
  i18n('entities.coupon.importer.fileName'),
  i18n('entities.coupon.importer.hint'),
);
