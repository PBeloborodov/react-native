import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  valueMessage: number;
};

const CounterBlue: FC<Props> = ({valueMessage}) => {
  return (
    <View style={styles.container}>
      <Text style={[defaultStyle.text, styles.text]}>{valueMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: style.color.blue,
  },
  text: {
    color: style.color.white,
    fontSize: 12,
    fontWeight: '700',
  },
});

export default CounterBlue;
