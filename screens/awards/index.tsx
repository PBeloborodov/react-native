import {BaseNavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {Pressable, ScrollView} from 'react-native';
import {StyleSheet, View, Text, Image} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
import SymbolBlock from './symbol';
type Props = {};

const LIST_INFO = [
  {
    red: false,
    rating: '4.6',
    opinions: '2',
    percent: '85%',
  },
  {
    red: true,
    rating: '4.8',
    opinions: '10',
    percent: '20%',
  },
  {
    red: false,
    rating: '4.8',
    opinions: '116',
    percent: '50%',
  },
];

const Awards: FC<Props> = props => {
  return (
    <ScrollView style={{backgroundColor: style.color.white, padding: 20}}>
      <View style={styles.fonBlock}>
        <View style={styles.imgAwards}>
          <Image
            source={require('../../src/assets/img/awards/starts.png')}
            style={styles.imgAwardsStar}
          />
          <Image
            source={require('../../src/assets/img/awards/fon-yellow.png')}
            style={styles.imgAwardsFon}
          />
          <View style={styles.imgAwardsValue}>
            <Text style={styles.imgAwardsValueText}>1</Text>
          </View>
        </View>
        <View style={styles.descriptionAwards}>
          <View style={[styles.descriptionAwardsRow]}>
            <Text style={styles.descriptionAwardsNumber}>№</Text>
            <Text style={styles.descriptionAwardsValue}>1</Text>
            <Pressable>
              <View style={styles.descriptionBtn}>
                <Text style={styles.descriptionBtnText}>подпись</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.descriptionAwardsRow}>
            <Text style={styles.descriptionAwardsNumber}>№</Text>
            <Text style={styles.descriptionAwardsValue}>1</Text>
            <Pressable>
              <View style={styles.descriptionBtn}>
                <Text style={styles.descriptionBtnText}>заголовок</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.descriptionAwardsRow}>
            <Text style={styles.descriptionAwardsNumber}>№</Text>
            <Text style={styles.descriptionAwardsValue}>1</Text>
            <Pressable>
              <View style={styles.descriptionBtn}>
                <Text style={styles.descriptionBtnText}>название</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.fonBlock}>
        <View style={styles.imgAwards}>
          <Image
            source={require('../../src/assets/img/awards/stars-gray.png')}
            style={styles.imgAwardsStar}
          />
          <Image
            source={require('../../src/assets/img/awards/fon.png')}
            style={styles.imgAwardsFon}
          />
          <View style={[styles.imgAwardsValue, {top: 34}]}>
            <Text style={styles.imgAwardsValueText}>1</Text>
          </View>
        </View>
        <View style={[styles.descriptionAwards, {marginTop: 0}]}>
          <Text style={styles.descriptionAwardsBreadCrumbs}>
            Сегмент 1 / Сегмент 2 / Сегмент 3
          </Text>
          <View
            style={[
              styles.descriptionAwardsRow,
              styles.descriptionAwardsRowBorder,
            ]}>
            <Text style={styles.descriptionAwardsNumber}>№</Text>
            <Text style={styles.descriptionAwardsValue}>6</Text>
            <Pressable>
              <View style={styles.descriptionBtn}>
                <Text style={styles.descriptionBtnText}>подпись</Text>
              </View>
            </Pressable>
          </View>
          <Text style={[styles.descriptionAwardsBreadCrumbs, {paddingTop: 8}]}>
            Сегмент 1
          </Text>
          <View
            style={[
              styles.descriptionAwardsRow,
              styles.descriptionAwardsRowBorder,
            ]}>
            <Text style={styles.descriptionAwardsNumber}>№</Text>
            <Text style={styles.descriptionAwardsValue}>7</Text>
            <Pressable>
              <View style={styles.descriptionBtn}>
                <Text style={styles.descriptionBtnText}>заголовок</Text>
              </View>
            </Pressable>
          </View>
          <Text style={[styles.descriptionAwardsBreadCrumbs, {paddingTop: 8}]}>
            Сегмент 1 / Сегмент 2
          </Text>
          <View style={[styles.descriptionAwardsRow, {marginBottom: 0}]}>
            <Text style={styles.descriptionAwardsNumber}>№</Text>
            <Text style={styles.descriptionAwardsValue}>8</Text>
            <Pressable>
              <View style={styles.descriptionBtn}>
                <Text style={styles.descriptionBtnText}>название</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.opinions}>
        <Text style={styles.opinionsText}>Мнения</Text>
      </View>
      {LIST_INFO.map(item => (
        <SymbolBlock {...item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fonBlock: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: style.color.blackLight,
    borderRadius: 4,
    paddingLefft: 10,
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 20,
    marginBottom: 14,
  },
  imgAwards: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgAwardsStar: {
    marginBottom: -7,
  },
  imgAwardsFon: {},
  descriptionAwards: {
    marginLeft: 10,
    marginTop: 10,
  },
  descriptionAwardsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 12,
  },
  descriptionAwardsRowBorder: {
    borderBottomColor: style.color.grey,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  descriptionAwardsBreadCrumbs: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: style.color.dustyGray,
    marginBottom: 8,
  },
  descriptionAwardsNumber: {
    marginRight: 5,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.white,
  },
  descriptionAwardsValue: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    color: style.color.white,
  },
  imgAwardsValue: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 41,
  },
  imgAwardsValueText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    fontWeight: '700',
    color: style.color.white,
  },
  descriptionBtn: {
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: style.color.scorpion,
    marginLeft: 12,
  },
  descriptionBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.white,
  },
  opinions: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  opinionsText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Awards;
