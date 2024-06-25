import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoPropertiesViewProps } from './ExpoProperties.types';

const NativeView: React.ComponentType<ExpoPropertiesViewProps> =
  requireNativeViewManager('ExpoProperties');

export default function ExpoPropertiesView(props: ExpoPropertiesViewProps) {
  return <NativeView {...props} />;
}
