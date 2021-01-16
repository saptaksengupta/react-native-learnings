import React from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';

export function Home({navigation}: any) {

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={'gray'} barStyle="dark-content" />
      <Text>Some Text In Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'gray',
  }
});
