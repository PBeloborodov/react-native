import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  Pressable,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import Swords from '../../src/assets/img/icon/swords.svg';
import Rating from '../components/common/rating';
import OpinionLine from './opinion-line';
type Props = {};

const ResultBatl: FC<Props> = props => {
  const heightScreen = Dimensions.get('window').height - 90;

  return (
    <ScrollView style={styles.resultBatl}>
      <View style={[styles.container, {height: heightScreen}]}>
        <View style={styles.resultBatlHead}>
          <View style={styles.resultBatlHeadItem}>
            <Image
              source={require('../../src/assets/img/img-video/image72.jpg')}
              resizeMode="cover"
              style={styles.resultBatlHeadImg}
            />
            <Text style={styles.resultBatlHeadItemText} numberOfLines={2}>
              Креветки AGAMA 35/45 камчатские варено
            </Text>
          </View>
          <View style={styles.resultBatlHeadItem}>
            <Image
              source={require('../../src/assets/img/img-video/image67.jpg')}
              resizeMode="cover"
              style={styles.resultBatlHeadImg}
            />
            <Text style={styles.resultBatlHeadItemText} numberOfLines={2}>
              Креветки AGAMA 35/45 камчатские варено
            </Text>
          </View>
        </View>
        <View style={styles.wrapCards}>
          <View style={styles.card}>
            <View style={styles.cardPlace}>
              <Text style={styles.cardPlaceText}>1</Text>
            </View>
            <Image
              source={require('../../src/assets/img/img-video/image72.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Text style={[defaultStyle.text, styles.cardName]}>
              Креветки AGAMA 35/45 камчатские варено-мороженые,
            </Text>
            <Pressable style={{width: '100%'}}>
              <View style={styles.cardBtn}>
                <Text style={styles.cardBtnText}>Выбрать</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.card, {marginTop: 50}]}>
            <View style={[styles.cardPlace, styles.cardPlaceTwo]}>
              <Text style={[styles.cardPlaceText, styles.cardPlaceTwoText]}>
                2
              </Text>
            </View>
            <Image
              source={require('../../src/assets/img/img-video/image72.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Text style={[defaultStyle.text, styles.cardName]}>
              Креветки AGAMA 35/45 камчатские варено-мороженые,
            </Text>
            <Pressable style={{width: '100%'}}>
              <View style={styles.cardBtn}>
                <Text style={styles.cardBtnText}>Выбрать</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.iconBatl}>
            <Swords />
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoRowLeft}>
            <Rating value={4.85} />
            <Text style={[styles.infoRowValue]}>4.8</Text>
          </View>
          <View style={styles.infoRowRight}>
            <Text style={[styles.infoRowValue]}>4.2</Text>
            <Rating value={4.85} />
          </View>
        </View>
        <View style={[styles.infoRow]}>
          <OpinionLine counter={120} precent={'40%'} />
          <OpinionLine counter={120} precent={'40%'} blue />
        </View>

        <View style={[styles.infoRow, {marginTop: 20}]}>
          <Text style={[styles.infoRowRatingValue]}>4.6</Text>
          <Text style={[styles.infoRowLabel]}>
            зафиксированная на каком-либо материальном носителе мысль
          </Text>
          <Text style={[styles.infoRowRatingValue]}>4.5</Text>
        </View>
        <View style={[styles.infoRow]}>
          <OpinionLine counter={120} precent={'40%'} />
          <OpinionLine counter={120} precent={'40%'} blue />
        </View>
        <View style={[styles.infoRow, {marginTop: 20}]}>
          <Text style={[styles.infoRowRatingValue]}>4.6</Text>
          <Text style={[styles.infoRowLabel]}>название</Text>
          <Text style={[styles.infoRowRatingValue]}>4.5</Text>
        </View>
        <View style={[styles.infoRow]}>
          <OpinionLine counter={120} precent={'40%'} />
          <OpinionLine counter={120} precent={'40%'} blue />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  resultBatl: {backgroundColor: style.color.white},
  resultBatlHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 9,
    paddingTop: 9,
    backgroundColor: style.color.blueLight,
  },
  resultBatlHeadItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '48%',
  },
  resultBatlHeadImg: {
    width: 32,
    height: 32,
    borderRadius: 4,
    marginRight: 4,
  },
  resultBatlHeadItemText: {
    flex: 1,
    fontFamily: 'Roboto-regular',
    fontSize: 12,
    color: style.color.mineShaft,
  },
  wrapCards: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: style.color.blueLight,
    borderRadius: 4,
    width: '48%',
    maxWidth: 180,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
  },
  cardPlace: {
    width: 48,
    height: 48,
    backgroundColor: style.color.blue,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  cardPlaceTwo: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
  cardPlaceTwoText: {
    fontSize: 14,
  },
  cardPlaceText: {
    fontFamily: 'Roboto-regular',
    fontSize: 24,
    fontWeight: '500',
    color: style.color.white,
  },
  cardImg: {
    width: '100%',
    maxWidth: 148,
    height: 100,
    borderRadius: 4,
  },
  cardName: {
    width: '100%',
    color: style.color.mineShaft,
    marginTop: 10,
    marginBottom: 10,
  },
  cardBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: style.color.malibu,
    borderWidth: 1,
    backgroundColor: style.color.white,
    borderRadius: 4,
  },
  cardBtnText: {
    fontFamily: 'Roboto-regular',
    fontSize: 14,
    fontWeight: '500',
    color: style.color.blue,
  },
  iconBatl: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 64,
    height: 64,
    marginLeft: -15,
    marginTop: -32,
    backgroundColor: style.color.white,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  infoRowLeft: {
    display: 'flex',
    flex: 1,
    maxWidth: '49%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoRowRight: {
    display: 'flex',
    maxWidth: '49%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: -5,
  },
  infoRowValue: {
    fontFamily: 'Roboto-regular',
    fontWeight: '700',
    fontSize: 24,
  },
  infoRowRatingValue: {
    fontFamily: 'Roboto-regular',
    fontSize: 16,
    fontWeight: '500',
  },
  infoRowLabel: {
    maxWidth: '70%',
    fontFamily: 'Roboto-regular',
    fontSize: 12,
    color: style.color.blueDark,
  },
});

export default ResultBatl;
