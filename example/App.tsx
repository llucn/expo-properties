import { StyleSheet, Text, View } from 'react-native';

import * as ExpoProperties from 'expo-properties';

export default function App() {
  ExpoProperties.setString('test_key', 'test_value');
  ExpoProperties.setNumber('test_key_number', 123);
  ExpoProperties.setBoolean('test_key_bool', true);

  return (
    <View style={styles.container}>
      <Text>{ExpoProperties.getString('test_key')}</Text>
      <Text>{ExpoProperties.getNumber('test_key_number')}</Text>
      <Text>{ExpoProperties.getBoolean('test_key_bool').toString()}</Text>
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
