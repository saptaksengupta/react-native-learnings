import React from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { GlobalContainer } from '../shared/components/global-container';

export function Home({ navigation }: any) {

  return (
    <GlobalContainer>
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={'gray'} barStyle="dark-content" />
        <Text>Some Text In Home Page</Text>
      </View>
    </GlobalContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
