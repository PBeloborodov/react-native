import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import Delivered from '../../src/assets/img/icon/delivered.svg';
import DeliveredBlue from '../../src/assets/img/icon/delivered-blue.svg';
import DeliveredSend from '../../src/assets/img/icon/delivered-send.svg';
import Сlip from '../../src/assets/img/icon/clip.svg';
import Send from '../../src/assets/img/icon/send.svg';
import {TextInput} from 'react-native-gesture-handler';
type Props = {};

const Correspondence: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height;

  return (
    <View
      style={{
        // height: heightScreen,
        backgroundColor: style.color.wildSand,
      }}>
      <ScrollView style={[styles.messageFeed, {height: heightScreen - 168}]}>
        <View style={styles.messageUser}>
          <View style={styles.messageUserWrapImg}>
            <Image
              source={require('../../src/assets/img/chats/image21.jpg')}
              style={styles.messageUserImg}
            />
          </View>
          <View style={styles.messageUserContent}>
            <Text style={[defaultStyle.text, styles.messageUserText]}>
              Текст (от лат. textus — ткань; сплетение, сочетание) —
              зафиксированная на каком-либо материальном носителе человеческая
              мысль; в общем плане связная и полная последовательность символов.
            </Text>
            <View style={styles.messageUserInfo}>
              <Text style={styles.messageUserDate}>22.08.21</Text>
              <Delivered />
            </View>
          </View>
        </View>
        <View style={styles.messageYour}>
          <View
            style={[
              styles.messageUserContent,
              {backgroundColor: style.color.onaha},
            ]}>
            <Text style={[defaultStyle.text, styles.messageUserText]}>
              Текст (от лат. textus — ткань; сплетение, сочетание) —
              зафиксированная на каком-либо материальном носителе человеческая
              мысль; в общем плане связная и полная
            </Text>
            <View style={styles.messageUserInfo}>
              <Text
                style={[
                  defaultStyle.text,
                  styles.messageUserDate,
                  {color: style.color.azureRadiance},
                ]}>
                22.08.21
              </Text>
              <DeliveredBlue />
            </View>
          </View>
        </View>
        <View style={styles.messageUser}>
          <View style={styles.messageUserWrapImg}>
            <Image
              source={require('../../src/assets/img/chats/image20.jpg')}
              style={styles.messageUserImg}
            />
          </View>
          <View style={styles.messageUserContent}>
            <Text style={[defaultStyle.text, styles.messageUserText]}>
              Текст (от лат. textus — ткань; сплетение, сочетание) —
              зафиксированная на каком-либо материальном носителе человеческая
              мысль; в общем плане связная и полная
            </Text>
            <View style={styles.messageUserInfo}>
              <Text style={styles.messageUserDate}>22.08.21</Text>
              <DeliveredSend />
            </View>
          </View>
        </View>
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
  messageUser: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24,
  },
  messageYour: {
    marginLeft: 'auto',
    marginBottom: 24,
  },
  messageUserWrapImg: {
    marginTop: 'auto',
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: 50,
    overflow: 'hidden',
  },
  messageUserImg: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  messageUserContent: {
    width: '80%',
    marginLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: style.color.white,
    borderRadius: 4,
  },
  messageUserText: {
    color: style.color.mineShaft,
  },
  messageUserInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  messageUserDate: {
    fontSize: 12,
    color: style.color.doveGrayAdd,
    marginRight: 5,
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

export default Correspondence;
