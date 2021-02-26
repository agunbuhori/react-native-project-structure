/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from '@screens/AppNavigator';
import { persistor, store } from '@store';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <AppNavigator/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
