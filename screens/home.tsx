import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import Button from '../src/common/components/button';
import {style} from '../src/common/styles/variables/style';
import InfoPanel from './home/components/info-panel';
import TabsPanel from './home/components/tabs-panel';
import FilterPanel from './home/components/filter-panel';
import MainImg from './components/main-img';
import {defaultStyle} from '../src/common/styles/default';

function Home() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={defaultStyle.fon}>
      <MainImg
        url={require('../src/assets/img/fon-home.jpg')}
        changeShow={false}
      />
      <View style={styles.wrapDescription}>
        <Text style={styles.subTitleDedcription}>Путешествия</Text>
        <Text style={styles.titleDedcription}>
          Туристические агентства/фирмы
        </Text>
        <Text style={styles.contentDedcription}>
          Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная
          на каком-либо материальном носителе человеческая мысль; в общем плане
          связная и полная последовательность символов.
        </Text>
        <View style={styles.wrapBtns}>
          <Button onClick={() => {}} title={'Подписаться'} />
          <Button
            onClick={() => {}}
            title={'Добавить'}
            customStyleBtn={{marginLeft: 10}}
            type="white"
          />
          <Pressable onPress={() => {}} style={styles.helpIcon}>
            <Image source={require('../src/assets/img/icon/help.png')} />
          </Pressable>
        </View>
      </View>
      <InfoPanel />
      <TabsPanel />
      <FilterPanel />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrapImage: {
    width: '100%',
    height: 212,
  },
  wrapDescription: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 200,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
  },
  titleDedcription: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 8,
    color: style.color.black,
  },
  subTitleDedcription: {
    fontSize: 14,
    lineHeight: 16,
    color: style.color.grey,
  },
  contentDedcription: {
    marginTop: 8,
  },
  img: {
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
  wrapBtns: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  helpIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
});

export default Home;
