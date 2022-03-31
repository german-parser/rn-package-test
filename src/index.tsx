import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const ProfileView = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Custom package</Text>
    <Text>Name</Text>
    <TextInput style={styles.input} />
    <Text>Surname</Text>
    <TextInput style={styles.input} />
    <Text>Mail</Text>
    <TextInput style={styles.input} />
    <Text>Tlf</Text>
    <TextInput style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 50,
    alignSelf: 'stretch',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    width: 120,
    marginVertical: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 24,
  },
});
