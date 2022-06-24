import React from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {style} from '../../../src/variables/style';

const TabsPanel = () => {
  return (
    <View style={styles.tabsPanel}>
      <Pressable style={[styles.tabsPanelItem]}>
        <Text style={[styles.tabsPanelText, styles.activeItem]}>Лента</Text>
        <View style={[styles.tabsPanelLine, styles.showBlock]} />
      </Pressable>
      <Pressable style={[styles.tabsPanelItem]}>
        <Text style={[styles.tabsPanelText]}>Рейтинг</Text>
        <View style={styles.tabsPanelLine} />
      </Pressable>
      <Pressable style={[styles.tabsPanelItem]}>
        <Text style={[styles.tabsPanelText]}>Фото</Text>
        <View style={styles.tabsPanelLine} />
      </Pressable>
      <Pressable style={[styles.tabsPanelItem]}>
        <Text style={[styles.tabsPanelText]}>Видео</Text>
        <View style={styles.tabsPanelLine} />
      </Pressable>
      <Pressable style={styles.tabsPanelArrow}>
        <Image
          source={require('../../../src/assets/img/icon/arrow-right.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsPanel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  tabsPanelItem: {
    marginRight: 25,
  },
  tabsPanelText: {
    color: style.color.blue,
    fontSize: 16,
  },
  activeItem: {
    fontWeight: '700',
  },
  tabsPanelLine: {
    display: 'none',
    width: 25,
    height: 2,
    backgroundColor: style.color.blue,
  },
  showBlock: {
    display: 'flex',
  },
  tabsPanelArrow: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
});
export default TabsPanel;
