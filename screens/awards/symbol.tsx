import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  red?: boolean;
  rating?: string;
  opinions?: string;
  percent?: string;
};

const Symbol: FC<Props> = ({
  red = false,
  opinions = 0,
  rating = 0,
  percent = 0,
}) => {
  return (
    <View style={styles.symbol}>
      <Text style={styles.symbolTitle}>Последовательность символов</Text>
      <View style={styles.symbolInfo}>
        <View style={styles.symbolLine}>
          <View
            style={[
              styles.symbolLineActive,
              {width: percent},
              red ? {backgroundColor: style.color.red} : null,
            ]}
          />
        </View>
        <Text style={styles.symbolRating}>{rating}</Text>
        <Text style={styles.symbolOpinions}>{opinions} мнений</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  symbol: {
    backgroundColor: style.color.blueLight,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 4,
  },
  symbolTitle: {
    fontFamily: 'Roboto-regular',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 8,
  },
  symbolInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbolLine: {
    position: 'relative',
    flex: 1,
    maxWidth: 236,
    backgroundColor: style.color.bluePattensFon,
    borderRadius: 5,
    height: 10,
  },
  symbolLineActive: {
    position: 'absolute',
    left: 0,
    height: '100%',
    backgroundColor: style.color.greenLight,
    borderRadius: 5,
  },
  symbolRating: {
    paddingLeft: 10,
    paddingRight: 5,
    fontFamily: 'Roboto-regular',
    fontWeight: '500',
    fontSize: 14,
  },
  symbolOpinions: {
    fontFamily: 'Roboto-regular',
    fontSize: 14,
    color: style.color.blue,
  },
});

export default Symbol;
