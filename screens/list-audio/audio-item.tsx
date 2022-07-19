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
  time: string;
  description: string;
  reting: string;
};

const AudioItem: FC<Props> = ({icon, name, time, description, reting}) => {
  return (
    <View style={styles.audioItem}>
      <Image style={styles.audioItemLogo} source={icon} resizeMode="cover" />
      <Pressable style={{flex: 1}}>
        <View style={styles.audioItemContnent}>
          <Text style={[defaultStyle.text, styles.audioItemName]}>{name}</Text>
          <Text
            style={[defaultStyle.text, styles.audioItemDescription]}
            numberOfLines={1}>
            {time} &bull; {description}
          </Text>
        </View>
      </Pressable>
      <View style={styles.audioItemRating}>
        <Start />
        <Text style={[defaultStyle.text, styles.audioItemRatingValue]}>
          {reting}
        </Text>
      </View>
      <Pressable>
        <MenuDots />
      </Pressable>
      <View style={styles.wrapBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  audioItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  audioItemLogo: {
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
  audioItemContnent: {
    flex: 1,
  },
  audioItemName: {
    color: style.color.black,
  },
  audioItemDescription: {
    color: style.color.tundora,
    marginTop: 5,
  },
  audioItemRating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 17,
  },
  audioItemRatingValue: {
    color: style.color.black,
    marginLeft: 11,
  },
});

export default AudioItem;
