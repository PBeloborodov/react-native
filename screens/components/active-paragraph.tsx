import React, {FC, ReactNode} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  icon: ReactNode;
  label: string;
  activeElement: ReactNode;
  onPresParagraph: () => void;
};

const ActiveParagraph: FC<Props> = ({
  icon,
  label,
  activeElement,
  onPresParagraph,
}) => {
  return (
    <Pressable
      onPress={() => {
        onPresParagraph();
      }}
      style={styles.wrapParagraph}>
      <View style={styles.paragraphIcon}>{icon}</View>
      <Text style={styles.paragraphLabel}>{label}</Text>
      <View style={styles.paragraphWrapCheck}>{activeElement}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapParagraph: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopColor: style.color.gallery,
    borderBottomColor: style.color.gallery,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  paragraphIcon: {},
  paragraphLabel: {
    marginRight: 15,
    marginLeft: 15,
    fontSize: 14,
  },
  paragraphWrapCheck: {
    position: 'absolute',
    right: 15,
  },
});

export default ActiveParagraph;
