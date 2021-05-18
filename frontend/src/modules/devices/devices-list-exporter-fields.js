import { DevicesModel } from '@/modules/devices/devices-model';

const { fields } = DevicesModel;

export default [
  fields.id,
  fields.deviceName,
  fields.deviceSerial,
  fields.deviceType,
  fields.deviceCurrency,
  fields.deviceNote,
  fields.deviceStall,
  fields.createdAt
];
