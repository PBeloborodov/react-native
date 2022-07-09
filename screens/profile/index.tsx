import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import Button from '../../src/common/components/button';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import Bay from '../../src/assets/img/icon/bay.svg';
import Cash from '../../src/assets/img/icon/cash.svg';
import ArrowRightGrey from '../../src/assets/img/icon/arrow-right-grey.svg';
import UserIcon from '../../src/assets/img/icon/user-icon.svg';
import Star from '../../src/assets/img/icon/star.svg';
import IconSphere from '../../src/assets/img/icon/icon-sphere.svg';
import CounterBlue from '../components/counter-blue';
import {ScrollView} from 'react-native-gesture-handler';
type Props = {};

const Profile: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView
      style={{backgroundColor: style.color.white, height: heightScreen}}>
      <View style={styles.mainInfo}>
        <View style={styles.mainInfoWrapImg}>
          <Image
            style={styles.mainInfoLogo}
            source={require('../../src/assets/img/chats/Ellipse15.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={[styles.mainInfoContent]}>
          <Text style={[defaultStyle.text, styles.mainInfoName]}>
            Иван Иванов
          </Text>
          <Text style={[defaultStyle.text, styles.mainInfoDescription]}>
            Текст (от лат. textus — ткань; сплетение, сочетание) —
            зафиксированная на каком-либо материальном носителе человеческая
            мысль; в общем плане связная и полная{' '}
          </Text>
          <Text style={[defaultStyle.text, styles.mainInfoCity]}>Москва</Text>
          <Text style={[defaultStyle.text, styles.mainInfoPhone]}>
            +7 (911) 123-15-07
          </Text>
          <Text style={[defaultStyle.text, styles.mainInfoSite]}>
            mysite.com
          </Text>
          <View style={styles.mainInfoBtns}>
            <Button
              onClick={() => {}}
              title={'Подписаться'}
              customStyleBtn={[styles.mainInfoBtnsItem, {marginRight: 10}]}
              customStyleText={{fontWeight: '500'}}
            />
            <Button
              onClick={() => {}}
              title={'Сообщение'}
              type="white"
              customStyleBtn={styles.mainInfoBtnsItem}
              customStyleText={{fontWeight: '500'}}
            />
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <Pressable style={[styles.menuItem, styles.menuItemFirst]}>
          <Bay />
          <Text style={styles.menuItemText}>Пункт меню</Text>
          <CounterBlue valueMessage={2} />
          <View style={styles.menuItemArrow}>
            <ArrowRightGrey />
          </View>
        </Pressable>
        <Pressable style={[styles.menuItem, styles.menuItemLast]}>
          <Cash />
          <Text style={styles.menuItemText}>Пункт меню</Text>
          <View style={styles.menuItemArrow}>
            <ArrowRightGrey />
          </View>
        </Pressable>
      </View>
      <View style={styles.activeInfo}>
        <View style={styles.activeInfoItem}>
          <UserIcon />
          <Text style={[styles.activeInfoItemText, styles.counter]}>134</Text>
          <Text style={styles.activeInfoItemText}>подписчиков</Text>
        </View>
        <View style={styles.activeInfoItem}>
          <Star />
          <Text style={[styles.activeInfoItemText, styles.counter]}>36</Text>
          <Text style={styles.activeInfoItemText}>мнений</Text>
        </View>
        <View style={styles.activeInfoItem}>
          <IconSphere width="16" height="16" />
          <Text style={[styles.activeInfoItemText, styles.counter]}>44</Text>
          <Text style={styles.activeInfoItemText}>сферы</Text>
        </View>
      </View>
      <View style={styles.filter}>
        <Pressable style={styles.filterItem}>
          <Text style={[styles.filterItemText, styles.filterItemTextActive]}>
            Лента
          </Text>
          <View style={styles.filterLine} />
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>Фото</Text>
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>Видео</Text>
        </Pressable>
        <Pressable style={styles.filterItem}>
          <Text style={styles.filterItemText}>Статьи</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainInfo: {
    position: 'relative',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  mainInfoWrapImg: {},
  mainInfoLogo: {
    marginRight: 20,
    borderRadius: 50,
    overflow: 'hidden',
  },
  mainInfoContent: {
    position: 'relative',
    width: '75%',
  },
  mainInfoName: {
    fontSize: 20,
    lineHeight: 18,
    marginBottom: 8,
  },
  mainInfoDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.grey,
    marginBottom: 10,
  },
  mainInfoCity: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.grey,
    marginBottom: 3,
  },
  mainInfoPhone: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.grey,
    marginBottom: 3,
  },
  mainInfoSite: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.blue,
    marginBottom: 3,
  },
  mainInfoBtns: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
  },
  mainInfoBtnsItem: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  menu: {},
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: style.color.gallery,
    borderRightColor: style.color.gallery,
    borderLeftColor: style.color.gallery,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
  menuItemText: {
    marginRight: 7,
    marginLeft: 15,
  },
  menuItemFirst: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  menuItemLast: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
  },
  menuItemArrow: {
    position: 'absolute',
    right: 5,
  },
  activeInfo: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: style.color.alabaster,
    borderRadius: 4,
    padding: 15,
  },
  activeInfoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeInfoItemText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  counter: {
    fontWeight: '500',
    marginLeft: 5,
    marginRight: 5,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  filterItem: {
    paddingRight: 24,
  },
  filterItemText: {
    fontFamily: 'Roboto-Regular',
    color: style.color.blue,
    fontSize: 16,
  },
  filterItemTextActive: {
    fontWeight: '500',
  },
  filterLine: {
    width: 24,
    height: 2,
    marginTop: 5,
    backgroundColor: style.color.cornflowerBlue,
  },
});

export default Profile;
