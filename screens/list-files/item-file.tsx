import React, {FC} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
} from 'react-native';
import {defaultStyle} from '../../src/common/styles/default';
import Start from '../../src/assets/img/icon/star-yellow.svg';
import MenuDots from '../../src/assets/img/icon/menu-dots.svg';
import {style} from '../../src/common/styles/variables/style';
type Props = {
  icon: ImageSourcePropType;
  name: string;
  format: string;
  date: string;
  size: string;
};

const FileItem: FC<Props> = ({icon, name, format, date, size}) => {
  return (
    <View style={styles.fileItem}>
      <Image style={styles.fileItemLogo} source={icon} resizeMode="cover" />
      <Pressable style={{flex: 1}}>
        <View style={styles.fileItemContnent}>
          <Text style={[defaultStyle.text, styles.fileItemName]}>{name}</Text>
          <Text
            style={[defaultStyle.text, styles.fileItemDescription]}
            numberOfLines={1}>
            {format} &bull; {size} &bull; {date}
          </Text>
        </View>
      </Pressable>
      <Pressable>
        <MenuDots />
      </Pressable>
      <View style={styles.wrapBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  fileItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  fileItemLogo: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 14,
  },
  wrapBorder: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    width: '82%',
    borderBottomColor: style.color.gallery,
    borderBottomWidth: 1,
  },
  fileItemContnent: {
    flex: 1,
  },
  fileItemName: {
    color: style.color.black,
  },
  fileItemDescription: {
    color: style.color.tundora,
    marginTop: 5,
    fontSize: 12,
  },
});

export default FileItem;
