import React from 'react';
import {Button, View} from 'react-native';

const ListNavigate = ({navigation}) => {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};
export default ListNavigate;
