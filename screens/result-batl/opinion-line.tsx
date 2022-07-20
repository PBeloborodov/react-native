import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  counter: number;
  precent: string;
  blue?: boolean;
};

const OpinionLine: FC<Props> = ({counter, precent, blue}) => {
  return (
    <View style={styles.infoRowOpinion}>
      <View style={[styles.infoRowLine]}>
        <View
          style={[
            styles.infoRowLineActive,
            {width: precent},
            blue ? styles.blue : null,
          ]}
        />
      </View>
      <Text
        style={[
          styles.infoRowOpinionText,
          !blue ? {marginLeft: 'auto'} : null,
        ]}>
        {counter} мнений
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRowOpinion: {
    flex: 1,
    maxWidth: '48%',
  },
  infoRowLine: {
    position: 'relative',
    width: '100%',
    height: 4,
    borderRadius: 2,
    backgroundColor: style.color.gallery,
  },
  infoRowLineActive: {
    position: 'absolute',
    height: 4,
    borderRadius: 2,
    backgroundColor: style.color.orangeLight,
    right: 0,
  },
  blue: {
    left: 0,
    backgroundColor: style.color.blueLine,
  },
  infoRowOpinionText: {
    marginTop: 6,
    fontFamily: 'Roboto-regular',
    fontSize: 12,
    color: style.color.dustyGray,
  },
});

export default OpinionLine;
