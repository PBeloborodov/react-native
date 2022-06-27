import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import {style} from '../../src/variables/style';
import Cross from '../../src/assets/img/icon/cross.svg';

type Props = {
  url: NodeRequire;
};

const ImgBlock: FC<Props> = ({url}) => {
  return (
    <View style={[styles.photoWrap]}>
      <Image source={url as ImageSourcePropType} style={styles.photoImg} />
      <Pressable style={[styles.crossItem]}>
        <Cross width={10} height={10} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  photoWrap: {
    position: 'relative',
    width: 104,
    height: 72,
    marginRight: 20,
    borderRadius: 4,
  },
  photoImg: {
    width: '100%',
    borderRadius: 4,
  },
  crossItem: {
    display: 'flex',
    position: 'absolute',
    right: -10,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 24,
    height: 24,
    backgroundColor: style.color.black,
  },
});

export default ImgBlock;
