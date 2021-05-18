import { DevicesModel } from '@/modules/devices/devices-model';

const { fields } = DevicesModel;

export default [
  fields.deviceImage,
  fields.deviceName,
  fields.deviceSerial,
  fields.deviceType,
  fields.deviceCurrency,
  fields.deviceNote,
  fields.deviceDocs,
  fields.deviceStall,
];
