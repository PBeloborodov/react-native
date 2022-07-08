import React, {FC} from 'react';
import {ImageSourcePropType, StyleSheet, View, Image, Text} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  screenShot: ImageSourcePropType;
  time: string;
};

const VideoMessage: FC<Props> = ({screenShot, time}) => {
  return (
    <View style={styles.video}>
      <Image style={styles.videoImg} source={screenShot} resizeMode="cover" />
      <View style={styles.videoWrapTime}>
        <Text style={styles.videoTime}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'relative',
    width: '100%',
    height: 157,
    marginTop: 5,
  },
  videoImg: {
    borderRadius: 4,
    height: '100%',
    width: '100%',
  },
  videoWrapTime: {
    position: 'absolute',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    bottom: 7,
    right: 10,
    borderRadius: 10,
    backgroundColor: style.color.opacity.black,
  },
  videoTime: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    fontWeight: '500',
    color: style.color.white,
  },
});

export default VideoMessage;
