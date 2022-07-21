import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  ScrollViewBase,
} from 'react-native';
import Cross from '../../src/assets/img/icon/cross-white.svg';
import CrossSlide from '../../src/assets/img/icon/cross-slide.svg';

import Swiper from 'react-native-web-swiper';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import Slide from './slide';
type Props = {};

const SliderElem: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;

  return (
    <ScrollView
      style={[styles.container, {height: heightScreen, position: 'relative'}]}>
      <Swiper
        controlsEnabled={false}
        containerStyle={{height: 288, width: '100%'}}>
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
      <ScrollView
        style={[styles.horizontal]}
        horizontal
        contentOffset={{x: 250, y: 0}}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </ScrollView>
    </ScrollView>
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
  horizontalItemName: {
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // justifyContent: 'flex-start',
  },
  slideContainer: {
    // height: '40%',
    height: 288,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  horizontalItem: {
    marginRight: 20,
  },
});

export default SliderElem;
