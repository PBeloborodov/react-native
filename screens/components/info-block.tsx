import React, {FC} from 'react';
import {View, StyleSheet, Text, ViewStyle, StyleProp} from 'react-native';
import {style} from '../../src/common/styles/variables/style';

type Props = {
  icon: any;
  label: string;
  content: string;
  customStyleWrap?: StyleProp<ViewStyle>;
};

const InfoBlock: FC<Props> = ({icon, label, content, customStyleWrap}) => {
  return (
    <View style={[styles.wrapInfo, customStyleWrap]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.infoBg}>
        {icon}
        <Text style={styles.infoContent}>{content}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapInfo: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 20,
    paddingLeft: 20,
  },
  label: {
    color: style.color.tundora,
    marginBottom: 5,
  },
  infoBg: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: style.color.alabaster,
  },
  infoContent: {
    color: style.color.grey,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default InfoBlock;
