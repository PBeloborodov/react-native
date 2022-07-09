import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  title: string;
  icon: any;
  listInfo: {
    date: string;
    value: string;
  }[];
  colorValue?: string;
};

const DetailBalance: FC<Props> = ({
  title,
  listInfo,
  icon,
  colorValue = style.color.black,
}) => {
  return (
    <View style={styles.detail}>
      <View style={styles.detailHead}>
        <Text style={styles.detailTitle}>{title}</Text>
        <Text style={[styles.detailTotlaValue, {color: colorValue}]}>+300</Text>
      </View>
      {listInfo.map((item, index) => (
        <View style={styles.detailItem}>
          <View style={styles.detailItemIcon}>{icon}</View>
          <View
            style={[
              styles.detailItemContent,
              listInfo.length - 1 === index ? styles.lastContent : null,
            ]}>
            <Text style={[defaultStyle.text, {color: style.color.grey}]}>
              {item.date}
            </Text>
            <Text style={[defaultStyle.text, {color: colorValue}]}>
              {item.value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    marginTop: 15,
    marginBottom: 24,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: style.color.white,
    paddingBottom: 18,
    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
  },
  detailHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  detailTitle: {
    fontFamily: 'Roboto-Regular',
    color: style.color.tundora,
  },
  detailTotlaValue: {
    fontFamily: 'Roboto-Regular',
    color: style.color.black,
    fontWeight: '500',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  detailItemIcon: {
    marginRight: 20,
  },
  detailItemContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  lastContent: {
    paddingBottom: 0,
    borderBottomColor: 'none',
    borderBottomWidth: 0,
  },
});

export default DetailBalance;
