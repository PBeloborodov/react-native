import React, {FC, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import {style} from '../../src/common/styles/variables/style';
import Checked from '../../src/assets/img/icon/checked.svg';
type Props = {
  source: ImageSourcePropType;
  name: string;
  info: string;
};

const UserItem: FC<Props> = ({source, name, info}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Pressable
      style={[styles.userItem, isChecked ? styles.userItemActive : null]}
      onPress={() => {
        setIsChecked(!isChecked);
      }}>
      <View style={styles.userItemWrapImg}>
        <Image source={source} style={styles.userItemImg} />
      </View>
      <View style={styles.userItemContent}>
        <Text style={[defaultStyle.text, styles.userItemName]}>{name}</Text>
        <Text style={[defaultStyle.text, styles.userItemInfo]}>
          {info} мнений
        </Text>
      </View>
      <View style={[styles.checkbox, isChecked ? styles.checkboxActive : null]}>
        {isChecked && <Checked />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: style.color.gallery,
    borderTopColor: style.color.gallery,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  userItemActive: {
    backgroundColor: style.color.alabaster,
  },
  userItemWrapImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
  userItemImg: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  userItemContent: {
    flex: 1,
    marginLeft: 10,
  },
  userItemName: {
    fontWeight: '500',
    fontSize: 16,
  },
  userItemInfo: {
    marginTop: 5,
    color: style.color.doveGrayLight,
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 50,
    borderColor: style.color.alto,
    borderWidth: 2,
  },
  checkboxActive: {
    borderColor: style.color.blue,
    backgroundColor: style.color.blue,
  },
});

export default UserItem;
