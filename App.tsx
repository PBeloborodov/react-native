import React from 'react';
import {ScrollView} from 'react-native';
import Home from './screens/home';

const App = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Home />
    </ScrollView>
  );
};

export default App;
