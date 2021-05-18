import importerStore from '@/shared/importer/importer-store';
import { PaymentMethodsService } from '@/modules/payment-methods/payment-methods-service';
import paymentMethodsImporterFields from '@/modules/payment-methods/payment-methods-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  PaymentMethodsService.import,
  paymentMethodsImporterFields,
  i18n('entities.paymentMethods.importer.fileName'),
  i18n('entities.paymentMethods.importer.hint'),
);
