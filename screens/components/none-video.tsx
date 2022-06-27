import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import {style} from '../../src/variables/style';
import EmptyVideo from '../../src/assets/img/icon/empty-video.svg';

type Props = {};

const NoneVideo: FC<Props> = props => {
  return (
    <View style={[styles.emptyVideo]}>
      <EmptyVideo />
    </View>
  );
};
const styles = StyleSheet.create({
  emptyVideo: {
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

export default NoneVideo;
