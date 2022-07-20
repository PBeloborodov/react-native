import React, {FC} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import Cross from '../../src/assets/img/icon/cross-white.svg';
import CrossSlide from '../../src/assets/img/icon/cross-slide.svg';
import Swiper from 'react-native-web-swiper';
import {style} from '../../src/common/styles/variables/style';
type Props = {};

const SliderElem: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Swiper controlsEnabled={false}>
        <View style={[styles.slideContainer]}>
          <View style={{height: '100%', width: '100%'}}>
            <Image
              source={require('../../src/assets/img/img-video/image72.jpg')}
              resizeMode={'cover'}
              style={{height: '100%', width: '100%'}}
            />
            <Pressable style={styles.btnCross}>
              <Cross />
            </Pressable>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <View style={{height: '100%', width: '100%'}}>
            <Image
              source={require('../../src/assets/img/img-video/image72.jpg')}
              resizeMode={'cover'}
              style={{height: '100%', width: '100%'}}
            />
            <Pressable style={styles.btnCross}>
              <Cross />
            </Pressable>
          </View>
        </View>
        <View style={[styles.slideContainer]}>
          <Pressable style={styles.slideAdd}>
            <CrossSlide />
          </Pressable>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
  },
  slideContainer: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
  slideAdd: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: style.color.blueBorder,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});

export default SliderElem;
