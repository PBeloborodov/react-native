import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import {style} from '../../src/variables/style';
import EmptyPhoto from '../../src/assets/img/icon/empty-photo.svg';

type Props = {};

const NonePhoto: FC<Props> = props => {
  return (
    <View style={[styles.emptyPhoto]}>
      <EmptyPhoto />
    </View>
  );
};
const styles = StyleSheet.create({
  emptyPhoto: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 108,
    height: 72,
    backgroundColor: style.color.seashell,
  },
});

export default NonePhoto;
