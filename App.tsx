import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './features/navigation';

import useColorScheme from './hooks/useColorScheme';
import { configureStore } from './redux/store';


export default function App() {
  const colorScheme = useColorScheme();
  const store = configureStore();
  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </Provider>
  )
}

