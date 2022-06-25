import React from 'react';
import {Button, View} from 'react-native';

const ListNavigate = ({navigation}) => {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default ListNavigate;
