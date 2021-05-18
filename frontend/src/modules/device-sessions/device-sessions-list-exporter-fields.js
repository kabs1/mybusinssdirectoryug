import { DeviceSessionsModel } from '@/modules/device-sessions/device-sessions-model';

const { fields } = DeviceSessionsModel;

export default [
  fields.id,
  fields.sessionDevice,
  fields.sessionLoginDate,
  fields.sessionLogoutDate,
  fields.sessionUser,
  fields.sessionDeviceType,
  fields.sessionIp,
  fields.sessionNetwork,
  fields.createdAt
];
