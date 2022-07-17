import React, {FC} from 'react';
import YellowStar from '../../../src/assets/img/icon/star-test.svg';
import GreyStar from '../../../src/assets/img/icon/full-grey-star.svg';
import {StyleSheet, View, Text} from 'react-native';
import {defaultStyle} from '../../../src/common/styles/default';
import {style} from '../../../src/common/styles/variables/style';
type Props = {
  value: number;
};

const Rating: FC<Props> = ({value}) => {
  const rating = Math.trunc(value);
  const fullStar: React.ReactNode[] = [];
  const emptyStar: React.ReactNode[] = [];

  for (let i = 0; i < rating; i++) {
    fullStar.push(
      <View style={{paddingRight: 4}}>
        <YellowStar />
      </View>,
    );
  }
  for (let i = 0; i < 5 - rating; i++) {
    fullStar.push(
      <View style={{paddingRight: 4}}>
        <GreyStar />
      </View>,
    );
  }
  return (
    <View style={styles.starWrap}>
      {fullStar}
      {emptyStar}
    </View>
  );
};

const styles = StyleSheet.create({
  starWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontWeight: '500',
    color: style.color.black,
    fontSize: 18,
    lineHeight: 22,
  },
});

export default Rating;
