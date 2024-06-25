import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoProperties.web.ts
// and on native platforms to ExpoProperties.ts
import ExpoPropertiesModule from './ExpoPropertiesModule';
import ExpoPropertiesView from './ExpoPropertiesView';
import { ChangeEventPayload, ExpoPropertiesViewProps } from './ExpoProperties.types';

// Get the native constant value.
export const PI = ExpoPropertiesModule.PI;

export function hello(): string {
  return ExpoPropertiesModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoPropertiesModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoPropertiesModule ?? NativeModulesProxy.ExpoProperties);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoPropertiesView, ExpoPropertiesViewProps, ChangeEventPayload };
