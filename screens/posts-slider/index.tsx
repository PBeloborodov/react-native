import React, {FC} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {SliderBox} from '../components/slider-image/index';
import MenuDots from '../../src/assets/img/icon/menu-dots.svg';
import Message from '../../src/assets/img/icon/message.svg';
import Telegram from '../../src/assets/img/icon/telegram.svg';
import Star from '../../src/assets/img/icon/start-white.svg';
import {style} from '../../src/common/styles/variables/style';
import {useState} from 'react';
import {defaultStyle} from '../../src/common/styles/default';
import Rating from '../components/common/rating';
type Props = {};

const listImage = [
  require('../../src/assets/img/gellary/image57.jpg'),
  require('../../src/assets/img/gellary/image57.jpg'),
  require('../../src/assets/img/gellary/image57.jpg'),
  require('../../src/assets/img/gellary/image57.jpg'),
];
const listDescription = [
  {text: 'Креветки AGAMA 35/45 камчатские варено-мороженые,', favorites: true},
  {text: 'Креветки AGAMA ', favorites: true},
  {text: ' 35/45 камчатские варено-мороженые,', favorites: false},
  {text: 'Креветки AGAMA 35/45 камчатские варено-мороженые,', favorites: false},
];

const PostsSlider: FC<Props> = props => {
  const [index, setIndex] = useState(1);
  return (
    <ScrollView>
      <View style={styles.post}>
        <View style={styles.postHead}>
          <View style={styles.postHeadInfo}>
            <Image
              source={require('../../src/assets/img/img-video/sp_avatar.jpg')}
              style={styles.postAvatar}
              resizeMode="cover"
            />
            <Text style={styles.postHeadText}>Заголовок</Text>
          </View>
          <Pressable>
            <MenuDots />
          </Pressable>
        </View>
        <View style={styles.postSlider}>
          <SliderBox
            images={listImage}
            currentImageEmitter={index => {
              console.log(index);
              setIndex(index + 1);
            }}
          />
          <View style={styles.sliderCounter}>
            <Text style={[defaultStyle.text, styles.sliderCounterNumber]}>
              {index}/{listImage.length}
            </Text>
          </View>
        </View>
        <View style={styles.postContent}>
          <View style={styles.postContentPanel}>
            <Text style={styles.panelDate}>4 июня 2022 в 09:46</Text>
            <View style={styles.panelMessage}>
              <Pressable style={{paddingRight: 18}}>
                <Message />
              </Pressable>
              <Pressable>
                <Telegram />
              </Pressable>
            </View>
          </View>
          <View style={styles.postContentTextWrap}>
            <View style={styles.postHeadInfo}>
              <Image
                source={require('../../src/assets/img/img-video/image73.jpg')}
                style={styles.postAvatar}
                resizeMode="cover"
              />
              <Text style={styles.postHeadText}>Иван Иванов</Text>
            </View>
            <Text style={[defaultStyle.text, styles.postContentText]}>
              Кино затрагивает очень важную и актуальную тему социального
              расслоения и справедливости. Протесты и государственные перевороты
              в современной обстановке будут случаться все чаще.{' '}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.postHead}>
          <View style={styles.postHeadInfo}>
            <Image
              source={require('../../src/assets/img/img-video/sp_avatar.jpg')}
              style={styles.postAvatar}
              resizeMode="cover"
            />
            <Text style={styles.postHeadText}>Заголовок</Text>
          </View>
          <Pressable>
            <MenuDots />
          </Pressable>
        </View>
        <View style={styles.postSlider}>
          <SliderBox
            images={listImage}
            currentImageEmitter={index => {
              console.log(index);
              setIndex(index);
            }}
          />
          <View style={styles.sliderCounter}>
            <Text style={[defaultStyle.text, styles.sliderCounterNumber]}>
              {index + 1}/{listImage.length}
            </Text>
          </View>
          <View style={styles.sliderDescription}>
            <Text
              style={[defaultStyle.text, styles.sliderDescriptionText]}
              numberOfLines={1}>
              {listDescription[index].text}
            </Text>
          </View>
          <Pressable style={styles.sliderFavorites}>
            {listDescription[index].favorites ? <Star /> : <Star />}
          </Pressable>
        </View>
        <View style={styles.postContent}>
          <View style={styles.postContentPanel}>
            <Text style={styles.panelDate}>4 июня 2022 в 09:46</Text>
            <View style={styles.panelMessage}>
              <Pressable style={{paddingRight: 18}}>
                <Message />
              </Pressable>
              <Pressable>
                <Telegram />
              </Pressable>
            </View>
          </View>
          <View style={styles.postContentTextWrap}>
            <View style={styles.postHeadInfo}>
              <Image
                source={require('../../src/assets/img/img-video/image73.jpg')}
                style={styles.postAvatar}
                resizeMode="cover"
              />
              <View style={styles.postRating}>
                <Pressable>
                  <View style={styles.postSignatureWrap}>
                    <Text style={[defaultStyle.text, styles.postSignature]}>
                      подпись
                    </Text>
                  </View>
                </Pressable>
                <Rating value={4.6} />
                <Text style={[defaultStyle.text, styles.value]}>{4.6}</Text>
              </View>
            </View>
            <Text style={[defaultStyle.text, styles.postContentText]}>
              Кино затрагивает очень важную и актуальную тему социального
              расслоения и справедливости. Протесты и государственные перевороты
              в современной обстановке будут случаться все чаще.{' '}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: style.color.white,
    marginBottom: 16,
  },
  postHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  postHeadInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 12,
  },
  postHeadText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 16,
  },
  sliderCounter: {
    position: 'absolute',
    top: 11,
    right: 17,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    backgroundColor: style.color.opacity.black,
  },
  sliderCounterNumber: {
    color: style.color.roseWhite,
    fontWeight: '500',
  },
  postSlider: {
    position: 'relative',
  },
  sliderDescription: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: style.color.opacity.black,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
  },
  sliderDescriptionText: {
    color: style.color.white,
  },
  postContent: {
    padding: 20,
  },
  postContentPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  panelDate: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: style.color.tundora,
  },
  panelMessage: {
    display: 'flex',
    flexDirection: 'row',
  },
  postContentTextWrap: {
    paddingTop: 8,
  },
  postContentText: {
    paddingTop: 6,
    color: style.color.black,
  },
  postRating: {
    display: 'flex',
    flexDirection: 'row',
  },
  sliderFavorites: {
    position: 'absolute',
    top: 12,
    left: 20,
  },
  postSignature: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 4,
    paddingBottom: 4,
    color: style.color.blue,
  },
  postSignatureWrap: {
    backgroundColor: style.color.blueLight,
    borderRadius: 12,
    marginRight: 8,
  },
  value: {
    fontWeight: '500',
    color: style.color.black,
    fontSize: 18,
    lineHeight: 22,
  },
});

export default PostsSlider;
