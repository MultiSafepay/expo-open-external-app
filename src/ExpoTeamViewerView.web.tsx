import * as React from 'react';

import { ExpoTeamViewerViewProps } from './ExpoTeamViewer.types';

export default function ExpoTeamViewerView(props: ExpoTeamViewerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
