import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
import Сlip from '../../src/assets/img/icon/clip.svg';
import Send from '../../src/assets/img/icon/send.svg';
import {TextInput} from 'react-native-gesture-handler';

import {YourMessage, MessageUser} from '../components/user-message/index';
type Props = {};

const LIST_MESSAGES = [
  {
    source: require('../../src/assets/img/chats/image21.jpg'),
    text: 'Изображения Текст зафиксированная на каком-либо материальном носителе человеческая мысль',
    date: '22.08.21',
    statusDelived: true,
    type: 'user',
    gellary: [
      require('../../src/assets/img/img-video/image67.jpg'),
      require('../../src/assets/img/img-video/image67.jpg'),
      require('../../src/assets/img/img-video/image67.jpg'),
      require('../../src/assets/img/img-video/image67.jpg'),
      require('../../src/assets/img/img-video/image67.jpg'),
      require('../../src/assets/img/img-video/image67.jpg'),
    ],
  },
  {
    source: require('../../src/assets/img/chats/image21.jpg'),
    text: 'Видеозапись Текст зафиксированная на каком-либо материальном носителе человеческая мысль',
    date: '22.08.21',
    statusDelived: true,
    type: 'user',
    video: {
      screenShot: require('../../src/assets/img/img-video/image67.jpg'),
      time: '04:30',
    },
  },
  {
    source: require('../../src/assets/img/chats/image20.jpg'),
    text: 'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная ',
    date: '22.08.21',
    statusDelived: false,
    type: 'user',
    quote: {
      nameUser: 'Иван иванов',
      iconUser: require('../../src/assets/img/chats/image20.jpg'),
      screenShot: require('../../src/assets/img/img-video/image71.jpg'),
      title: '15 фильмов, которые можно пересматривать бесконечно',
    },
  },
];

const CorrespondenceMedia: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height;

  return (
    <View
      style={{
        // height: heightScreen,
        backgroundColor: style.color.wildSand,
      }}>
      <ScrollView style={[styles.messageFeed, {height: heightScreen - 168}]}>
        {LIST_MESSAGES.map(item => {
          if (item.type === 'user') {
            return <MessageUser {...item} />;
          } else {
            return <YourMessage {...item} />;
          }
        })}
      </ScrollView>
      <View style={styles.sendMessage}>
        <Pressable>
          <Сlip />
        </Pressable>
        <View style={styles.sendMessageInputWrap}>
          <TextInput placeholder="Сообщение" style={styles.sendMessageInput} />
          <Pressable>
            <Send />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageFeed: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 24,
  },

  sendMessage: {
    height: 72,
    backgroundColor: style.color.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendMessageInput: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  sendMessageInputWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 10,
    marginLeft: 15,
    height: 40,
    flex: 1,
    backgroundColor: style.color.alabaster,
  },
});

export default CorrespondenceMedia;
