import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TextInput,
} from 'react-native';
import Cross from '../../src/assets/img/icon/cross-white.svg';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';

type Props = {};

const Slide: FC<Props> = props => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Pressable
      onPress={() => {
        setShow(!show);
      }}>
      <View style={styles.slide}>
        <Image
          source={require('../../src/assets/img/img-video/image72.jpg')}
          resizeMode={'cover'}
          style={{
            height: 288,
            width: 288,
          }}
        />
        <Pressable style={styles.btnCross}>
          <Cross />
        </Pressable>
        <View style={[styles.slideName, show ? {bottom: 27} : null]}>
          <Text style={[defaultStyle.text, {color: style.color.white}]}>
            Название
          </Text>
          <Text style={[defaultStyle.text, {color: style.color.white}]}>
            1/3
          </Text>
        </View>
        {show && (
          <View style={{marginTop: 10}}>
            <TextInput
              placeholder={'Введите текст'}
              style={styles.slideInput}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  slide: {
    marginRight: 20,
  },
  btnCross: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: style.color.blue,
    width: 30,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  slideName: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 4,
    width: '100%',
    bottom: 0,
    backgroundColor: style.color.opacity.black,
  },
  slideInput: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 0,
    paddingBottom: 0,
    margin: 0,
  },
});

export default Slide;
