import React, {FC} from 'react';
import {View, Image, StyleSheet, Text, ImageSourcePropType} from 'react-native';
import {style} from '../../src/common/styles/variables/style';

type Props = {
  url: NodeRequire;
  changeShow?: boolean;
};

const MainImg: FC<Props> = ({url, changeShow = true}) => {
  return (
    <View style={styles.wrapImage}>
      <Image style={styles.img} source={url as ImageSourcePropType} />

      {changeShow && (
        <View style={styles.changeBlock}>
          <Text style={styles.changeBlockText}>Изменить обложку</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapImage: {
    position: 'relative',
    width: '100%',
    height: 212,
  },
  img: {
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
  changeBlock: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    backgroundColor: style.color.opacity.black,
  },
  changeBlockText: {
    color: style.color.white,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default MainImg;
