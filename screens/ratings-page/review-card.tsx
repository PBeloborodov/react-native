import React, {FC} from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import Forward from '../../src/assets/img/icon/forward.svg';
import Shield from '../../src/assets/img/icon/shield.svg';
import Plus from '../../src/assets/img/icon/plus-grey.svg';
import Minus from '../../src/assets/img/icon/minus-grey.svg';
import ArrowRight from '../../src/assets/img/icon/arrow-right.svg';
import Rating from '../components/common/rating';
import {style} from '../../src/common/styles/variables/style';
type Props = {};

const ReviewCard: FC<Props> = props => {
  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewCardHead}>
        <View style={styles.reviewCardHeadLogo}>
          <Image
            source={require('../../src/assets/img/chats/image21.jpg')}
            style={styles.logo}
          />
          <View style={styles.reviewCardHeadInfo}>
            <Text style={styles.reviewCardHeadInfoName}>Иван Иванов</Text>
            <Text style={[defaultStyle.text, styles.reviewCardHeadInfoKarma]}>
              Карма: 50
            </Text>
          </View>
        </View>
        <Text style={[defaultStyle.text, styles.reviewCardHeadDate]}>
          20 марта 2021 г.
        </Text>
      </View>
      <View style={styles.reviewCardReatingBorder}>
        <View style={styles.reviewCardReating}>
          <View style={styles.reviewCardReatingValue}>
            <Text style={styles.reviewCardReatingValueText}>3.1</Text>
          </View>
          <View style={styles.reviewCardReatingTextWrap}>
            <Rating value={3} />
            <Text style={styles.reviewCardReatingText}>
              зафиксированная на каком-либо материальном носителе человеческая
              мысль
            </Text>
          </View>
          <ArrowRight />
        </View>
      </View>
      <Text style={styles.reviewCardText}>
        Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная
        на каком-либо материальном носителе человеческая мысль; в общем плане
        связная и полная последовательность символов.
      </Text>
      <View style={styles.reviewCardActivePanel}>
        <View style={styles.cardLeft}>
          <Pressable style={{paddingRight: 38}}>
            <Forward />
          </Pressable>
          <Pressable>
            <Shield />
          </Pressable>
        </View>
        <View style={styles.cardRight}>
          <View style={[styles.cardRightItem, {paddingRight: 30}]}>
            <Minus />
            <Text style={[defaultStyle.text, {marginLeft: 9}]}>101</Text>
          </View>
          <View style={styles.cardRightItem}>
            <Plus />
            <Text style={[defaultStyle.text, {marginLeft: 9}]}>99</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    borderRadius: 50,
    marginRight: 10,
  },
  reviewCardHeadLogo: {
    display: 'flex',
    flexDirection: 'row',
  },
  reviewCardHeadInfo: {
    display: 'flex',
  },
  reviewCardHeadInfoName: {
    fontFamily: 'Roboto-regular',
    fontWeight: '500',
    fontSize: 16,
  },
  reviewCardHeadDate: {},
  reviewCardHeadInfoKarma: {
    color: style.color.greenDark,
  },
  reviewCard: {
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  reviewCardHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 14,
  },
  reviewCardReatingBorder: {
    borderLeftColor: style.color.malibuLightShow,
    borderLeftWidth: 2,
    borderTopColor: style.color.malibuLightShow,
    borderTopWidth: 2,
    borderBottomColor: style.color.malibuLightShow,
    borderBottomWidth: 8,
    borderRightColor: style.color.malibuLightShow,
    borderRightWidth: 6,
    borderRadius: 6,
    backgroundColor: style.color.malibuLightShow,
  },
  reviewCardReating: {
    backgroundColor: style.color.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 9,
    paddingLeft: 20,
    borderRadius: 6,
    overflow: 'hidden',
    shadowSpreadRadius: 100,
  },

  reviewCardReatingValue: {
    paddingRight: 17,
  },
  reviewCardReatingValueText: {
    fontFamily: 'Roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    color: style.color.blueDark,
  },
  reviewCardReatingTextWrap: {
    backgroundColor: style.color.white,
    flex: 1,
    zIndex: 1,
  },
  reviewCardReatingText: {
    fontFamily: 'Roboto-regular',
    fontSize: 13,
    color: style.color.blueDark,
  },
  reviewCardText: {
    marginTop: 10,
  },
  reviewCardActivePanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 11,
  },
  cardLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRightItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ReviewCard;
