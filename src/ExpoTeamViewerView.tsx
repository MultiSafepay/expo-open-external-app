import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoTeamViewerViewProps } from './ExpoTeamViewer.types';

const NativeView: React.ComponentType<ExpoTeamViewerViewProps> =
  requireNativeViewManager('ExpoTeamViewer');

export default function ExpoTeamViewerView(props: ExpoTeamViewerViewProps) {
  return <NativeView {...props} />;
}
