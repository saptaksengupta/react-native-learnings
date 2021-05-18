import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './features/navigation';

import useColorScheme from './hooks/useColorScheme';
import { configureStore } from './redux/store';
import { NeomorphUiContextProvider, useNeomorphism } from './neomorph-ui';


export default function App() {
  const colorScheme = useColorScheme();
  const store = configureStore();
  const globalThemeUtils = useNeomorphism({ colorMode: 'light' });
  return (
    <NeomorphUiContextProvider value={globalThemeUtils}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
        </SafeAreaProvider>
      </Provider>
    </NeomorphUiContextProvider>
  )
}

