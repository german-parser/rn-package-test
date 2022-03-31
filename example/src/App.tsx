import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { ProfileView } from 'react-native-rn-package-test-ggc';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Shared Navbar</Text>
      </View>
      <ProfileView />
      <View style={styles.container}>
        <Text>Shared Botombar</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
});
