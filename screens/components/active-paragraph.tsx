import React, {FC, ReactNode} from 'react';
import {useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  icon?: ReactNode;
  label: string;
  activeElement?: ReactNode;
  activeElementCustom?: (isChecked: boolean) => ReactNode;
  onPresParagraph: () => void;
};

const ActiveParagraph: FC<Props> = ({
  icon,
  label,
  activeElement,
  onPresParagraph,
  activeElementCustom,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Pressable
      onPress={() => {
        onPresParagraph();
        setIsChecked(!isChecked);
      }}
      style={[
        styles.wrapParagraph,
        isChecked ? {backgroundColor: style.color.alabaster} : {},
      ]}>
      <View style={[styles.wrapcontent]}>
        {icon && <View style={styles.paragraphIcon}>{icon}</View>}
        <Text style={styles.paragraphLabel}>{label}</Text>
      </View>

      {activeElement && (
        <View style={styles.paragraphWrapCheck}>{activeElement}</View>
      )}

      {activeElementCustom && (
        <View style={styles.paragraphWrapCheck}>
          {activeElementCustom(isChecked)}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapParagraph: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: style.color.gallery,
    borderBottomColor: style.color.gallery,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  paragraphIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
    paddingRight: 20,
  },
  wrapcontent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraphLabel: {
    fontSize: 16,
  },
  paragraphWrapCheck: {
    position: 'absolute',
    right: 20,
  },
});

export default ActiveParagraph;
