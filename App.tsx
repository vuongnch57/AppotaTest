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
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ChatScreen from './src/screen/ChatScreen';

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ChatScreen />
    </SafeAreaView>
  );
};

export default App;
