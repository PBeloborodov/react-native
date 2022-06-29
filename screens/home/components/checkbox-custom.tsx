import React, {FC} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {style} from '../../../src/common/styles/variables/style';
import Checked from '../../../src/assets/img/icon/checked.svg';
type Props = {
  checked: boolean;
};

const CheckBoxCustom: FC<Props> = ({checked}) => {
  return (
    <View
      style={[
        styles.checkBox,
        checked ? {backgroundColor: style.color.blue} : {},
      ]}>
      <Checked />
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 4,
    borderColor: style.color.alto,
    borderWidth: 1,
  },
});
export default CheckBoxCustom;
