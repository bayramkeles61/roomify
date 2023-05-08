import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly start_time: number;
  readonly end_time: number;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly start_time: number;
  readonly end_time: number;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Booking = LazyLoading extends LazyLoadingDisabled ? EagerBooking : LazyBooking

export declare const Booking: (new (init: ModelInit<Booking>) => Booking) & {
  copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

type EagerDevice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Device, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Device, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Device = LazyLoading extends LazyLoadingDisabled ? EagerDevice : LazyDevice

export declare const Device: (new (init: ModelInit<Device>) => Device) & {
  copyOf(source: Device, mutator: (draft: MutableModel<Device>) => MutableModel<Device> | void): Device;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username?: string | null;
  readonly image?: string | null;
  readonly website?: string | null;
  readonly bio?: string | null;
  readonly nofDevices: number;
  readonly Devices?: (Device | null)[] | null;
  readonly Bookings?: (Booking | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username?: string | null;
  readonly image?: string | null;
  readonly website?: string | null;
  readonly bio?: string | null;
  readonly nofDevices: number;
  readonly Devices: AsyncCollection<Device>;
  readonly Bookings: AsyncCollection<Booking>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}