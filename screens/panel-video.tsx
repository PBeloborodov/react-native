import React, {FC} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {style} from '../src/common/styles/variables/style';
type Props = {};

const PanelVideo: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <ScrollView>
      <View style={[styles.panelVideo, {height: heightScreen}]}>
        <View style={styles.main}>
          <Image
            source={require('../src/assets/img/img-video/image67p.jpg')}
            style={styles.bannerImg}
          />
          <View style={styles.mainConetent}>
            <Text style={styles.mainTitle}>Самые лучшие фильмы</Text>
            <Text style={styles.mainDescription}>
              Текст (от лат. textus — ткань; сплетение, сочетание) —
              зафиксированная на каком-либо материальном носителе человеческая
              мысль; в общем плане связная и полная{' '}
            </Text>
            <View style={styles.activePanel}>
              <Pressable>
                <View style={styles.activePanelItem}>
                  <Text style={styles.activePanelText}>Подпись</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.activePanelItem}>
                  <Text style={styles.activePanelText}>Подпись</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.activePanelItem}>
                  <Text style={styles.activePanelText}>Подпись</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.tileVidos}>
          <PanelVideoItem
            title="Заголовок в две строки две строки"
            url={require('../src/assets/img/img-video/image71.jpg')}
          />
          <PanelVideoItem
            title="Заголовок"
            url={require('../src/assets/img/img-video/image72.jpg')}
          />
          <PanelVideoItem
            title="Заголовок"
            url={require('../src/assets/img/img-video/image73.jpg')}
          />
          <PanelVideoItem
            title="Самые луч фильмы ..."
            url={require('../src/assets/img/img-video/image74.jpg')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default PanelVideo;

type TileVidos = {
  url: ImageSourcePropType;
  title: string;
};

const PanelVideoItem: FC<TileVidos> = ({title, url}) => {
  return (
    <View style={styles.tileVidosItem}>
      <Image source={url} style={styles.tileVidosImg} />
      <Text style={styles.tileVidosTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  panelVideo: {
    backgroundColor: style.color.white,
    padding: 20,
  },
  bannerImg: {
    width: '100%',
    borderRadius: 4,
    marginBottom: 12,
  },
  main: {},
  mainConetent: {
    paddingBottom: 24,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  mainTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 5,
    color: style.color.black,
  },
  mainDescription: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 5,
  },
  activePanel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 7,
  },
  activePanelItem: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: style.color.blueLight,
    borderRadius: 12,
    marginRight: 12,
  },
  activePanelText: {
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
    fontSize: 13,
    color: style.color.blue,
  },
  tileVidos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  tileVidosItem: {
    width: '48%',
    marginBottom: 30,
    borderRadius: 4,
    overflow: 'hidden',
  },
  tileVidosImg: {
    width: '100%',
  },
  tileVidosTitle: {
    marginTop: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: style.color.black,
  },
});
