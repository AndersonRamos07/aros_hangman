import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './Style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ANDERSON RAMOS</Text>
      <Text>TESTANDO as extensions</Text>
      <StatusBar style="auto" />
    </View>
  );
}