import React, {FC} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {style} from '../src/common/styles/variables/style';
import CradHistory from './components/card-history';
type Props = {};

const LIST_CARD_HISTORY = [
  {
    source: require('../src/assets/img/history/image67-card.jpg'),
    nameCard: 'Креветки AGAMA 35/45 камчатские варено-мороженые, 800 г',
    objectCard: '5 949',
    opinions: '7 533',
  },
  {
    source: require('../src/assets/img/history/image69.jpg'),
    nameCard: 'Морской коктейль БУХТА ИЗОБИЛИЯ, 430 г',
    objectCard: '5 949',
    opinions: '7 533',
  },
  {
    source: require('../src/assets/img/history/image13.jpg'),
    nameCard: 'Креветки POLAR варено-мороженые 70/90, 1 кг',
    objectCard: '5 949',
    opinions: '7 533',
  },
];

const VisitHistory: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height + 100;

  return (
    <View style={{height: heightScreen, backgroundColor: style.color.white}}>
      <View style={styles.listHistoryWrap}>
        <View style={styles.listHistoryTitleWrap}>
          <Text style={styles.listHistoryTitle}>НЕДАВНО ПОСЕЩАЛИ</Text>
          <Pressable>
            <Text style={styles.listHistoryClear}>Очистить</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.history} horizontal={true}>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image67.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image69.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image13.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image70.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image71.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image67.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
          <Pressable style={styles.historyItem}>
            <View style={styles.historyItemImgWrap}>
              <Image
                source={require('../src/assets/img/history/image13.jpg')}
                style={styles.historyItemImg}
              />
            </View>
            <Text style={styles.historyItemTitle} numberOfLines={1}>
              Название
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      <ScrollView style={styles.listCard}>
        {LIST_CARD_HISTORY.map(item => (
          <CradHistory {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listHistoryWrap: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  listHistoryTitleWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 18,
  },
  listHistoryTitle: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    textTransform: 'uppercase',
    color: style.color.black,
  },
  listHistoryClear: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.blue,
  },
  history: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingBottom: 20,
  },
  historyItem: {
    marginRight: 24,
  },
  historyItemImgWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  historyItemImg: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
  },
  historyItemTitle: {
    fontFamily: 'Roboto-Regular',
    maxWidth: 58,
    fontSize: 12,
  },
  listCard: {},
  listCardItem: {},
  listCardItemImgWrap: {},
  listCardItemImg: {},
  listCardItemTitle: {},
});

export default VisitHistory;
