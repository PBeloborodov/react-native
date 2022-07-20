import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {style} from '../styles/variables/style';

type Props = {
  onClick: () => void;
  title: string;
  customStyleBtn?: StyleProp<ViewStyle>;
  customStyleText?: StyleProp<TextStyle>;
  type?: string;
};

const Button: FC<Props> = ({
  onClick,
  title,
  customStyleBtn = {},
  type = 'blue',
  customStyleText,
}) => {
  return (
    <Pressable onPress={onClick}>
      <View style={[styles[`${type}Btn`], customStyleBtn]}>
        <Text style={[styles[`${type}BtnText`], customStyleText]}>{title}</Text>
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
    fontFamily: 'Roboto-regular',
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
  greyBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.color.white,
    width: 130,
    height: 32,
    borderColor: style.color.silverChaliceLight,
    borderWidth: 1,
    borderRadius: 4,
  },
  greyBtnText: {
    color: style.color.grey,
  },
});
export default Button;
