import React from 'react';
import {ScrollView} from 'react-native';
import Home from './screens/home';
import {style} from './src/variables/style';
// import type {ReactNode} from 'react';

const App = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Home />
    </ScrollView>
  );
};

export default App;
