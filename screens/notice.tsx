import React, {FC} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from '../src/common/styles/variables/style';
import NoiceItem from './components/noice-item';
import Warning from '../src/assets/img/icon/warning.svg';
const LIST_NOICE = [
  {
    source: require('../src/assets/img/user.jpg'),
    userName: 'Имя Фамилия',
    date: '15 августа 2022 г',
    message:
      'Опубликовал запись Текст зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная',
    action: true,
  },
  {
    source: require('../src/assets/img/user.jpg'),
    userName: 'Имя Фамилия',
    date: '15.08.2022',
    message: 'Отправил заявку в друзья',
    action: false,
  },
];

type Props = {};
const Notice: FC<Props> = () => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <View
      style={{
        height: heightScreen,
        backgroundColor: style.color.wildSand,
      }}>
      <Text style={styles.NoticeTitle}>НОВОЕ</Text>
      <ScrollView style={styles.listNoices}>
        {LIST_NOICE.map(item => (
          <NoiceItem {...item} />
        ))}
        <View style={styles.warning}>
          <View style={styles.warningImgWrap}>
            <Warning />
          </View>
          <View style={styles.warningContent}>
            <Text style={styles.warningText}>
              Текст зафиксированная на каком-либо материальном носителе
              человеческая мысль; в общем плане связная и полная{' '}
            </Text>
            <Pressable>
              <Text style={styles.warningBtn}>Кнопка действия</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  NoticeTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 13,
    paddingTop: 20,
    fontSize: 12,
    color: style.color.black,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  },
  listNoices: {},
  warning: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: style.color.white,
    borderRadius: 4,
    padding: 16,
    marginTop: 0,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  warningImgWrap: {
    width: 48,
    height: 48,
    borderRadius: 50,
    overflow: 'hidden',
  },
  warningImg: {
    width: '100%',
    height: '100%',
  },
  warningContent: {
    marginLeft: 10,
    flex: 1,
  },
  warningText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: style.color.mineShaft,
  },
  warningBtn: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    color: style.color.blue,
    marginTop: 8,
  },
});

export default Notice;
