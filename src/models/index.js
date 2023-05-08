// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Booking, Device, User } = initSchema(schema);

export {
  Booking,
  Device,
  User
};