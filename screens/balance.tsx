import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {defaultStyle} from '../src/common/styles/default';
import Grafic from '../src/assets/img/icon/grafic.svg';
import Sorting from '../src/assets/img/icon/sorting.svg';
import {style} from '../src/common/styles/variables/style';
import UserIcon from '../src/assets/img/icon/user-balance.svg';
import CurencyRu from '../src/assets/img/icon/curency-ru.svg';
import ArrowDownGrey from '../src/assets/img/icon/arrow-down-grey.svg';

import RNPickerSelect from 'react-native-picker-select';
import DetailBalance from './components/detail-balance';

type Props = {};

const placeholder = {
  label: 'Выберите значение',
  value: null,
  color: '#969696',
};
const USER_ADD = {
  title: 'Пользователи',
  icon: <UserIcon />,
  listInfo: [
    {
      date: '29 августа',
      value: '+ 100',
    },
    {
      date: '28 августа',
      value: '+ 100',
    },
    {
      date: '27 августа',
      value: '+ 100',
    },
  ],
};
const LIST_BAY = {
  title: 'Выплаты',
  icon: <CurencyRu />,
  listInfo: [
    {
      date: '29 августа',
      value: '+ 300',
    },
    {
      date: '28 августа',
      value: '+ 100',
    },
    {
      date: '27 августа',
      value: '+ 100',
    },
  ],
  colorValue: style.color.green,
};

const Balance: FC<Props> = props => {
  return (
    <View>
      <View style={styles.balanceWrap}>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceInfoTitle}>ОБЩИЙ БАЛАНС</Text>
          <Text style={styles.balanceInfoValue}>3 124,56 ₽</Text>
          <View style={styles.balanceInfoToday}>
            <View style={styles.balanceInfoTodayValueWrap}>
              <Text style={styles.balanceInfoTodayValue}>+ 76,25 ₽</Text>
            </View>
            <Text style={[defaultStyle.text, styles.balanceInfoTodayText]}>
              {' '}
              за день
            </Text>
          </View>
        </View>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceInfoTitle}>ПОЛЬЗОВАТЕЛИ</Text>
          <Text style={styles.balanceInfoValue}>2 124</Text>
          <View style={styles.balanceInfoToday}>
            <View style={styles.balanceInfoTodayValueWrap}>
              <Text style={styles.balanceInfoTodayValue}>+ 10</Text>
            </View>
            <Text style={[defaultStyle.text, styles.balanceInfoTodayText]}>
              {' '}
              за день
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.balanceFilter}>
        <View style={styles.balanceFilterIcon}>
          <Grafic />
          <Sorting />
        </View>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          style={{viewContainer: styles.balanceFilterSelect}}
          Icon={() => <ArrowDownGrey />}
          placeholder={placeholder}
          value={'value1'}
          items={[
            {label: 'Август', value: 'valu1'},
            {label: 'Сентябрь', value: 'valu2'},
            {label: 'valu2', value: 'valu3'},
          ]}
        />
      </View>
      <DetailBalance {...USER_ADD} />
      <DetailBalance {...LIST_BAY} />
    </View>
  );
};

const styles = StyleSheet.create({
  balanceWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  balanceInfo: {
    padding: 15,
    backgroundColor: style.color.white,
    borderRadius: 4,
    width: '48%',
    maxWidth: 178,
  },
  balanceInfoTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: style.color.dustyGray,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  balanceInfoValue: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    color: style.color.black,
  },
  balanceInfoToday: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  balanceInfoTodayValueWrap: {
    backgroundColor: style.color.blue,
    borderRadius: 16,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 9,
    paddingLeft: 9,
    marginRight: 5,
  },
  balanceInfoTodayValue: {
    color: style.color.white,
    fontWeight: '700',
  },
  balanceInfoTodayText: {
    fontFamily: 'Roboto-Regular',
    color: style.color.grey,
    opacity: 0.75,
  },
  balanceFilter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  balanceFilterSelect: {
    width: '30%',
    height: 32,
    backgroundColor: style.color.alabaster,
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
  },
  balanceFilterIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '15%',
  },
});

export default Balance;
