import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {style} from '../../variables/style';
const Button = ({onClick, title, customStyleBtn = {}, type = 'blue'}) => {
  return (
    <Pressable onPress={onClick}>
      <View style={{...styles[`${type}Btn`], ...customStyleBtn}}>
        <Text style={styles[`${type}BtnText`]}>{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  blueBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.color.blue,
    width: 130,
    height: 32,
    borderRadius: 4,
  },
  blueBtnText: {
    color: style.color.white,
  },
  whiteBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.color.white,
    width: 130,
    height: 32,
    borderColor: style.color.blue,
    borderWidth: 1,
    borderRadius: 4,
  },
  whiteBtnText: {
    color: style.color.blue,
  },
});
export default Button;
