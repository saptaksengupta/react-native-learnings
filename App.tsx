import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './features/navigation';

import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme}/>
    </SafeAreaProvider>
  )
}

