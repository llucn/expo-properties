import { StyleSheet, Text, View } from 'react-native';

import * as ExpoProperties from 'expo-properties';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoProperties.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
