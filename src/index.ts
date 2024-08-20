import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoTeamViewer.web.ts
// and on native platforms to ExpoTeamViewer.ts
import ExpoTeamViewerModule from './ExpoTeamViewerModule';
import ExpoTeamViewerView from './ExpoTeamViewerView';
import { ChangeEventPayload, ExpoTeamViewerViewProps } from './ExpoTeamViewer.types';

// Get the native constant value.
export const PI = ExpoTeamViewerModule.PI;

export function hello(): string {
  return ExpoTeamViewerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoTeamViewerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoTeamViewerModule ?? NativeModulesProxy.ExpoTeamViewer);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoTeamViewerView, ExpoTeamViewerViewProps, ChangeEventPayload };
