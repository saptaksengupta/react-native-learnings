import React from 'react';
import { Text, StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { useNeomorphUiContext } from '../neomorph-ui';
import { Input } from '../neomorph-ui/components/Input';
import { TextElement } from '../neomorph-ui/components/TextElement';
import { GlobalContainer } from '../shared/components/global-container';

export function Home() {
  const themeConfig = useNeomorphUiContext();
  return (
    <GlobalContainer>
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={themeConfig.bgColor} barStyle="dark-content" />
        <TextElement type="primary" weight="bold" size={40}> Some Text </TextElement>
        <Input />
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
