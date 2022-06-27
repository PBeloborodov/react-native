import React, {FC, useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {style} from '../../src/variables/style';

type Props = {};

const OnOffChtcked: FC<Props> = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Pressable
      onPress={() => {
        setIsChecked(!isChecked);
      }}>
      <View style={[styles.wrapOnOf, isChecked ? styles.wrapOnOfActive : {}]}>
        <View style={[styles.circle, isChecked ? styles.circleActive : {}]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapOnOf: {
    position: 'relative',
    width: 50,
    height: 26,
    borderRadius: 50,
    backgroundColor: style.color.silverChalice,
  },
  wrapOnOfActive: {
    backgroundColor: style.color.blue,
  },
  circle: {
    position: 'absolute',
    left: 3,
    top: 2,
    width: 22,
    height: 22,
    backgroundColor: style.color.white,
    borderRadius: 50,
  },
  circleActive: {
    left: 'auto',
    right: 3,
  },
});

export default OnOffChtcked;
