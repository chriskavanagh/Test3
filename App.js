import 'react-native-gesture-handler';
import React from 'react';
import store from './src/store/store';
import {decode, encode} from 'base-64';
import TabNavigator from './src/routes/TabNavigator';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

//Firebase won't work without this.
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
