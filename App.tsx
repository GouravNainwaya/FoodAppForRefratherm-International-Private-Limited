import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/redux/MyStore';

const App = () => {
  return (
    <GestureHandlerRootView style={{flexGrow: 1}}>
      <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation/>
      </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
