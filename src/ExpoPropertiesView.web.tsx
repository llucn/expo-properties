import * as React from 'react';

import { ExpoPropertiesViewProps } from './ExpoProperties.types';

export default function ExpoPropertiesView(props: ExpoPropertiesViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
