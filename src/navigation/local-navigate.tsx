import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import {View, Button, Text} from 'react-native';

function test({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Profile" />
    </View>
  );
}

function LocalNavigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={test} />
    </Stack.Navigator>
  );
}
export default LocalNavigate;
